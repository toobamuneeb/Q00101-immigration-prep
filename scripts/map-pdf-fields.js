#!/usr/bin/env node
/**
 * PDF Field Mapper Script (JavaScript version)
 * 
 * This script helps you discover and map fields in any PDF form.
 * 
 * Usage:
 *   node scripts/map-pdf-fields.js <path-to-pdf>
 * 
 * Example:
 *   node scripts/map-pdf-fields.js public/pdf-templates/i-9.pdf
 */

const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function extractPdfFields(pdfPath) {
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  
  const fieldInfos = [];
  
  for (const field of fields) {
    const fieldName = field.getName();
    const fieldInfo = {
      name: fieldName,
      type: field.constructor.name,
    };
    
    try {
      // Try to get current value
      if (typeof field.getText === 'function') {
        fieldInfo.value = field.getText();
      } else if (typeof field.isChecked === 'function') {
        fieldInfo.value = field.isChecked() ? 'checked' : 'unchecked';
      }
      
      // Try to get options for dropdowns
      if (typeof field.getOptions === 'function') {
        fieldInfo.options = field.getOptions();
      }
    } catch (e) {
      // Skip if we can't read the field
    }
    
    fieldInfos.push(fieldInfo);
  }
  
  return fieldInfos;
}

function generateMappingTemplate(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const date = new Date().toISOString();
  
  let template = `/**\n`;
  template += ` * Auto-generated field mappings for ${formName}\n`;
  template += ` *\n`;
  template += ` * Generated on: ${date}\n`;
  template += ` * Total fields: ${fields.length}\n`;
  template += ` *\n`;
  template += ` * ⚠️  IMPORTANT: Review all mappings before use in production!\n`;
  template += ` * You need to map these PDF fields to your questionIds.\n`;
  template += ` */\n\n`;
  
  // Generate TypeScript interface
  template += `export interface FieldMapping {\n`;
  template += `  questionId: string;\n`;
  template += `  pdfField: string;\n`;
  template += `  type?: string;\n`;
  template += `  value?: string;\n`;
  template += `}\n\n`;
  
  // Generate the main mappings array
  template += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;
  template += `  // TODO: Map these PDF fields to your questionIds\n`;
  template += `  // Example format:\n`;
  template += `  // { questionId: "section1.firstName", pdfField: "${fields[0]?.name || 'Field Name'}" },\n\n`;
  
  for (const field of fields) {
    const isCheckbox = field.type.includes('CheckBox') || field.type.includes('Button');
    
    if (isCheckbox) {
      template += `  // { questionId: "YOUR_QUESTION_ID", pdfField: "${field.name}", type: "checkbox" },\n`;
    } else {
      template += `  // { questionId: "YOUR_QUESTION_ID", pdfField: "${field.name}" },\n`;
    }
  }
  
  template += `];\n\n`;
  
  // Add field reference list
  template += `/**\n`;
  template += ` * All PDF Field Names (${fields.length} total):\n`;
  template += ` * Copy these to map to your questionIds above\n`;
  template += ` *\n`;
  
  for (const field of fields) {
    const typeInfo = field.type.includes('CheckBox') ? ' [CHECKBOX]' : 
                     field.type.includes('Dropdown') ? ' [DROPDOWN]' : 
                     field.type.includes('Button') ? ' [BUTTON]' : '';
    template += ` * - "${field.name}"${typeInfo}\n`;
    
    if (field.options && field.options.length > 0) {
      template += ` *   Options: ${field.options.join(', ')}\n`;
    }
  }
  
  template += ` */\n`;
  
  return template;
}

function generateFormDefinition(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const formId = formName.toLowerCase();
  
  let template = `/**\n`;
  template += ` * Form Registry Definition for ${formName}\n`;
  template += ` * Generated on: ${new Date().toISOString()}\n`;
  template += ` * \n`;
  template += ` * Add this to src/lib/constants/forms-registry.ts\n`;
  template += ` */\n\n`;
  
  template += `const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  template += `  id: "${formId}",\n`;
  template += `  code: "${formName.toUpperCase()}",\n`;
  template += `  name: "TODO: Add Form Name",\n`;
  template += `  description: "TODO: Add form description",\n`;
  template += `  category: "other", // Change to: family, work_authorization, citizenship, travel, humanitarian, other\n`;
  template += `  estimatedTime: "30-45 minutes",\n`;
  template += `  filingFee: 0, // Update with actual fee\n`;
  template += `  price: 60,\n`;
  template += `  sections: [\n`;
  template += `    {\n`;
  template += `      id: "section1",\n`;
  template += `      title: "Section 1: Basic Information",\n`;
  template += `      description: "TODO: Add section description",\n`;
  template += `      questions: [\n`;
  
  // Generate questions from fields
  let questionCount = 0;
  for (const field of fields) {
    if (questionCount >= 10) break; // Limit to first 10 as examples
    
    const isCheckbox = field.type.includes('CheckBox') || field.type.includes('Button');
    const isDropdown = field.type.includes('Dropdown');
    
    const safeName = field.name
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .toLowerCase();
    
    template += `        {\n`;
    template += `          id: "section1.${safeName}",\n`;
    
    if (isCheckbox) {
      template += `          type: "checkbox",\n`;
    } else if (isDropdown) {
      template += `          type: "select",\n`;
    } else {
      template += `          type: "text",\n`;
    }
    
    template += `          label: "${field.name}",\n`;
    template += `          required: false, // Update as needed\n`;
    
    if (field.options && field.options.length > 0) {
      template += `          options: [\n`;
      for (const option of field.options.slice(0, 5)) {
        template += `            { value: "${option.toLowerCase().replace(/\s+/g, '-')}", label: "${option}" },\n`;
      }
      template += `          ],\n`;
    }
    
    template += `        },\n`;
    questionCount++;
  }
  
  template += `        // TODO: Add more questions based on PDF fields\n`;
  template += `      ],\n`;
  template += `    },\n`;
  template += `    // TODO: Add more sections as needed\n`;
  template += `  ],\n`;
  template += `  requiredDocuments: [\n`;
  template += `    "TODO: List required documents",\n`;
  template += `  ],\n`;
  template += `  instructions: [\n`;
  template += `    "TODO: Add filing instructions",\n`;
  template += `  ],\n`;
  template += `};\n\n`;
  
  template += `// Don't forget to:\n`;
  template += `// 1. Add to FORMS_REGISTRY array at the bottom of forms-registry.ts\n`;
  template += `// 2. Import ${upperFormName}_AUTO_MAPPINGS in src/lib/pdf/fill-pdf.ts\n`;
  template += `// 3. Add case "${formId}": return ${upperFormName}_AUTO_MAPPINGS; in getFormMappings()\n`;
  
  return template;
}

function displayFieldInfo(fields) {
  console.log('\n=== PDF FIELD ANALYSIS ===\n');
  console.log(`Total fields found: ${fields.length}\n`);
  
  const fieldsByType = {};
  
  for (const field of fields) {
    fieldsByType[field.type] = (fieldsByType[field.type] || 0) + 1;
  }
  
  console.log('Field Types:');
  for (const [type, count] of Object.entries(fieldsByType)) {
    console.log(`  ${type}: ${count}`);
  }
  
  console.log('\n=== FIELD DETAILS ===\n');
  
  for (const field of fields) {
    console.log(`Field: ${field.name}`);
    console.log(`  Type: ${field.type}`);
    if (field.value) {
      console.log(`  Current Value: ${field.value}`);
    }
    if (field.options && field.options.length > 0) {
      console.log(`  Options: ${field.options.join(', ')}`);
    }
    console.log('');
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/map-pdf-fields.js <path-to-pdf>');
    console.error('\nExample:');
    console.error('  node scripts/map-pdf-fields.js public/pdf-templates/i-9.pdf');
    process.exit(1);
  }
  
  const pdfPath = args[0];
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`Analyzing PDF: ${pdfPath}`);
  
  try {
    const fields = await extractPdfFields(pdfPath);
    
    // Display field information
    displayFieldInfo(fields);
    
    // Generate mapping template
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    const template = generateMappingTemplate(fields, formName);
    
    // Generate form definition
    const formDefinition = generateFormDefinition(fields, formName);
    
    // Save mapping template
    const mappingPath = `src/lib/constants/form-mappings/${formName}-auto-mappings.ts`;
    const mappingDir = path.dirname(mappingPath);
    if (!fs.existsSync(mappingDir)) {
      fs.mkdirSync(mappingDir, { recursive: true });
    }
    fs.writeFileSync(mappingPath, template);
    
    // Save form definition template
    const definitionPath = `scripts/form-definition-${formName}.ts`;
    fs.writeFileSync(definitionPath, formDefinition);
    
    console.log('\n=== FILES GENERATED ===\n');
    console.log(`✅ Mapping template: ${mappingPath}`);
    console.log(`✅ Form definition: ${definitionPath}`);
    
    console.log('\n📝 Next steps:');
    console.log('\n1. MAPPING FILE:');
    console.log(`   - Open ${mappingPath}`);
    console.log('   - Replace "YOUR_QUESTION_ID" with actual questionIds');
    console.log('   - Uncomment the mappings you need');
    
    console.log('\n2. FORM DEFINITION:');
    console.log(`   - Open ${definitionPath}`);
    console.log('   - Update form name, description, category, fees');
    console.log('   - Add all sections and questions');
    console.log('   - Copy to src/lib/constants/forms-registry.ts');
    
    console.log('\n3. INTEGRATION:');
    console.log('   - Import mapping in src/lib/pdf/fill-pdf.ts');
    console.log(`   - Add case "${formName}": return ${formName.toUpperCase().replace(/[^A-Z0-9]/g, '_')}_AUTO_MAPPINGS;`);
    console.log('   - Add definition to FORMS_REGISTRY array');
    
  } catch (error) {
    console.error('Error analyzing PDF:', error);
    process.exit(1);
  }
}

main();
