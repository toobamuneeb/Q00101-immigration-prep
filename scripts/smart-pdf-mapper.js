#!/usr/bin/env node
/**
 * Smart PDF Mapper - Automatically generates mappings AND form definitions
 * Just like I-9 format
 * 
 * Usage: node scripts/smart-pdf-mapper.js <path-to-pdf>
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function extractFieldsWithPdftk(pdfPath) {
  try {
    const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, { 
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024
    });
    
    const fields = [];
    const lines = output.split('\n');
    let currentField = {};
    
    for (const line of lines) {
      if (line.startsWith('FieldName:')) {
        if (currentField.name) fields.push(currentField);
        currentField = { name: line.substring(11).trim() };
      } else if (line.startsWith('FieldType:')) {
        currentField.type = line.substring(11).trim();
      } else if (line.startsWith('FieldValue:')) {
        currentField.value = line.substring(12).trim();
      } else if (line.startsWith('FieldStateOption:')) {
        if (!currentField.options) currentField.options = [];
        currentField.options.push(line.substring(18).trim());
      }
    }
    
    if (currentField.name) fields.push(currentField);
    return fields;
  } catch (error) {
    throw new Error(`pdftk failed. Install: brew install pdftk-java`);
  }
}

// Smart function to convert PDF field name to questionId
function pdfFieldToQuestionId(pdfFieldName) {
  // Remove form1[0].#subform[0]. prefix and [0] suffix
  let clean = pdfFieldName
    .replace(/^form1\[0\]\.#subform\[\d+\]\./, '')
    .replace(/^form1\[0\]\.#pageSet\[\d+\]\.Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/g, '');
  
  // Skip barcodes
  if (clean.includes('BarCode') || clean.includes('PDF417')) {
    return null;
  }
  
  // Parse field name like "P1_Line3a_FamilyName" -> "part1.3a.familyName"
  const match = clean.match(/^P(\d+)_Line(\w+)_(.+)$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return `part${partNum}.${lineNum}.${camelField}`;
  }
  
  // Parse checkbox like "P1_checkbox4" -> "part1.checkbox4"
  const checkboxMatch = clean.match(/^P(\d+)_checkbox(\w+)$/);
  if (checkboxMatch) {
    const [, partNum, checkboxNum] = checkboxMatch;
    return `part${partNum}.checkbox${checkboxNum}`;
  }
  
  // Fallback: convert to camelCase
  return clean
    .replace(/_/g, '.')
    .replace(/([A-Z])/g, (m) => m.toLowerCase())
    .replace(/^\./, '');
}

// Extract human-readable label from field name
function pdfFieldToLabel(pdfFieldName) {
  let clean = pdfFieldName
    .replace(/^form1\[0\]\.#subform\[\d+\]\./, '')
    .replace(/^form1\[0\]\.#pageSet\[\d+\]\.Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/g, '');
  
  const match = clean.match(/^P(\d+)_Line(\w+)_(.+)$/);
  if (match) {
    const [, , lineNum, fieldName] = match;
    // Convert "FamilyName" to "Family Name"
    const readable = fieldName.replace(/([A-Z])/g, ' $1').trim();
    return `${lineNum}. ${readable}`;
  }
  
  return clean.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim();
}

// Group fields by section
function groupFieldsBySections(fields) {
  const sections = {};
  
  for (const field of fields) {
    const questionId = pdfFieldToQuestionId(field.name);
    if (!questionId) continue; // Skip barcodes
    
    // Extract part number
    const partMatch = questionId.match(/^part(\d+)\./);
    const sectionId = partMatch ? `part${partMatch[1]}` : 'section1';
    
    if (!sections[sectionId]) {
      sections[sectionId] = {
        id: sectionId,
        title: `Part ${partMatch ? partMatch[1] : '1'}: Information`,
        questions: []
      };
    }
    
    const isCheckbox = field.type === 'Button';
    
    sections[sectionId].questions.push({
      id: questionId,
      type: isCheckbox ? 'checkbox' : 'text',
      label: pdfFieldToLabel(field.name),
      pdfField: field.name,
      required: false
    });
  }
  
  return Object.values(sections);
}

function generateMappingFile(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let content = `/**\n`;
  content += ` * Auto-generated field mappings for ${formName.toUpperCase()}\n`;
  content += ` *\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` * Total fields: ${fields.length}\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: string;\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const field of fields) {
    const questionId = pdfFieldToQuestionId(field.name);
    if (!questionId) continue; // Skip barcodes
    
    const isCheckbox = field.type === 'Button';
    
    if (isCheckbox) {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}", type: "checkbox" },\n`;
    } else {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}" },\n`;
    }
  }
  
  content += `];\n`;
  
  return content;
}

function generateFormDefinition(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const formId = formName.toLowerCase();
  const sections = groupFieldsBySections(fields);
  
  let content = `/**\n`;
  content += ` * Form Registry Definition for ${formName.toUpperCase()}\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` * \n`;
  content += ` * Copy this to src/lib/constants/forms-registry.ts\n`;
  content += ` */\n\n`;
  
  content += `const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  content += `  id: "${formId}",\n`;
  content += `  code: "${formName.toUpperCase()}",\n`;
  content += `  name: "TODO: Add Form Name",\n`;
  content += `  description: "TODO: Add description",\n`;
  content += `  category: "other",\n`;
  content += `  estimatedTime: "30-45 minutes",\n`;
  content += `  filingFee: 0,\n`;
  content += `  price: 60,\n`;
  content += `  sections: [\n`;
  
  for (const section of sections) {
    content += `    {\n`;
    content += `      id: "${section.id}",\n`;
    content += `      title: "${section.title}",\n`;
    content += `      description: "TODO: Add section description",\n`;
    content += `      questions: [\n`;
    
    for (const question of section.questions) {
      content += `        {\n`;
      content += `          id: "${question.id}",\n`;
      content += `          type: "${question.type}",\n`;
      content += `          label: "${question.label}",\n`;
      content += `          required: ${question.required},\n`;
      content += `        },\n`;
    }
    
    content += `      ],\n`;
    content += `    },\n`;
  }
  
  content += `  ],\n`;
  content += `  requiredDocuments: [\n`;
  content += `    "TODO: List required documents",\n`;
  content += `  ],\n`;
  content += `  instructions: [\n`;
  content += `    "TODO: Add instructions",\n`;
  content += `  ],\n`;
  content += `};\n\n`;
  
  content += `// Add to FORMS_REGISTRY array:\n`;
  content += `// ${upperFormName}_DEFINITION,\n`;
  
  return content;
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/smart-pdf-mapper.js <path-to-pdf>');
    console.error('\nExample:');
    console.error('  node scripts/smart-pdf-mapper.js public/pdf-templates/i-90.pdf');
    process.exit(1);
  }
  
  const pdfPath = args[0];
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`\n🔍 Analyzing PDF: ${pdfPath}\n`);
  
  try {
    const fields = extractFieldsWithPdftk(pdfPath);
    
    // Filter out barcodes
    const realFields = fields.filter(f => {
      const qid = pdfFieldToQuestionId(f.name);
      return qid !== null;
    });
    
    if (realFields.length === 0) {
      console.error('❌ No form fields found');
      process.exit(1);
    }
    
    console.log(`✅ Found ${realFields.length} form fields (${fields.length - realFields.length} barcodes skipped)\n`);
    
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    
    // Generate files
    const mappingContent = generateMappingFile(realFields, formName);
    const definitionContent = generateFormDefinition(realFields, formName);
    
    // Save files
    const mappingPath = `src/lib/constants/form-mappings/${formName}-auto-mappings.ts`;
    const definitionPath = `scripts/form-definition-${formName}.ts`;
    
    const dir = path.dirname(mappingPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(mappingPath, mappingContent);
    fs.writeFileSync(definitionPath, definitionContent);
    
    console.log('📁 FILES GENERATED:\n');
    console.log(`✅ ${mappingPath}`);
    console.log(`✅ ${definitionPath}\n`);
    
    // Show sample
    console.log('📋 SAMPLE MAPPINGS:\n');
    const sampleMappings = realFields.slice(0, 5);
    for (const field of sampleMappings) {
      const qid = pdfFieldToQuestionId(field.name);
      console.log(`  ${qid}`);
      console.log(`    → ${field.name}\n`);
    }
    
    console.log('📝 NEXT STEPS:\n');
    console.log('1. Review and customize the generated files');
    console.log('2. Update form name, description, and fees in definition');
    console.log('3. Copy definition to src/lib/constants/forms-registry.ts');
    console.log('4. Import mapping in src/lib/pdf/fill-pdf.ts');
    console.log(`5. Add case "${formName}": return ${formName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_AUTO_MAPPINGS;\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
