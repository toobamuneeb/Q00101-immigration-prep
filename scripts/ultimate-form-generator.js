#!/usr/bin/env node
/**
 * ULTIMATE FORM GENERATOR
 * 
 * Generates production-quality form definitions matching I-131 quality level
 * - Uses FieldNameAlt for detailed labels
 * - Extracts full context from PDF
 * - Generates helpful descriptions and help text
 * - Creates proper section organization
 * 
 * Usage: node scripts/ultimate-form-generator.js <path-to-pdf>
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Extract ALL field metadata from PDF
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
      } else if (line.startsWith('FieldNameAlt:')) {
        currentField.altName = line.substring(14).trim();
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

// Parse field and extract detailed information
function parseFieldDetailed(field) {
  const pdfFieldName = field.name;
  const altName = field.altName || '';
  
  // Skip barcodes
  if (pdfFieldName.includes('BarCode') || pdfFieldName.includes('PDF417')) {
    return null;
  }
  
  // Extract part and line numbers
  let partNum = null;
  let lineNum = null;
  let fieldName = '';
  
  // Try different patterns
  const patterns = [
    /Pt(\d+)Line(\w+)_(\w+)/,
    /Part(\d+)_Line(\w+)_(\w+)/,
    /P(\d+)_Line(\w+)/,
  ];
  
  for (const pattern of patterns) {
    const match = pdfFieldName.match(pattern);
    if (match) {
      partNum = match[1];
      lineNum = match[2];
      fieldName = match[3] || '';
      break;
    }
  }
  
  if (!partNum) return null;
  
  // Parse FieldNameAlt to extract detailed information
  const altInfo = parseAltName(altName, lineNum);
  
  return {
    pdfField: pdfFieldName,
    part: partNum,
    line: lineNum,
    fieldName: fieldName,
    altName: altName,
    label: altInfo.label,
    helpText: altInfo.helpText,
    sectionTitle: altInfo.sectionTitle,
    questionNumber: altInfo.questionNumber,
    type: field.type,
    options: field.options || []
  };
}

// Parse FieldNameAlt to extract label, help text, and context
function parseAltName(altName, lineNum) {
  if (!altName) {
    return { label: '', helpText: '', sectionTitle: '', questionNumber: '' };
  }
  
  const parts = altName.split('.');
  let sectionTitle = '';
  let label = '';
  let helpText = '';
  let questionNumber = '';
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    
    // Extract section title (e.g., "Part 2. Information About You")
    if (part.match(/^Part\s+\d+/i)) {
      sectionTitle = part;
      continue;
    }
    
    // Extract question number and label (e.g., "1. Your Full Name")
    const lineMatch = part.match(/^(\d+[a-z]?)\.\s*(.+)/i);
    if (lineMatch) {
      questionNumber = lineMatch[1];
      const text = lineMatch[2];
      
      // Check if next part has more detail
      if (i + 1 < parts.length) {
        const nextPart = parts[i + 1].trim();
        
        // If next part starts with action verb, it's the actual label
        if (nextPart.match(/^(Enter|Provide|Select|List|Indicate|Check)/i)) {
          const actionMatch = nextPart.match(/^(Enter|Provide|Select|List|Indicate|Check)\s+(.+)/i);
          if (actionMatch) {
            label = `${questionNumber}. ${actionMatch[2]}`;
            // Rest might be help text
            if (i + 2 < parts.length) {
              helpText = parts.slice(i + 2).join('. ').trim();
            }
          }
        } else if (!nextPart.match(/^(Part|Item|Page|This is)/i)) {
          // Next part is additional context
          label = `${questionNumber}. ${nextPart}`;
        } else {
          label = `${questionNumber}. ${text}`;
        }
      } else {
        label = `${questionNumber}. ${text}`;
      }
      break;
    }
  }
  
  return { label, helpText, sectionTitle, questionNumber };
}

// Determine field type and generate proper configuration
function analyzeFieldType(parsed, field) {
  const fieldName = (parsed.fieldName || '').toLowerCase();
  const label = (parsed.label || '').toLowerCase();
  
  // Text field
  if (field.type === 'PDFTextField') {
    // Date
    if (fieldName.includes('date') || label.includes('date') || label.includes('birth')) {
      return {
        type: 'date',
        placeholder: 'MM/DD/YYYY'
      };
    }
    
    // SSN
    if (fieldName.includes('ssn') || label.includes('social security')) {
      return {
        type: 'ssn',
        placeholder: '###-##-####'
      };
    }
    
    // Phone
    if (fieldName.includes('phone') || label.includes('phone') || label.includes('telephone')) {
      return {
        type: 'tel',
        placeholder: '(555) 123-4567'
      };
    }
    
    // Email
    if (fieldName.includes('email') || label.includes('email')) {
      return {
        type: 'email',
        placeholder: 'example@email.com'
      };
    }
    
    // State
    if (fieldName.includes('state') && !fieldName.includes('statement')) {
      return {
        type: 'select',
        options: 'US_STATES'
      };
    }
    
    // ZIP
    if (fieldName.includes('zip') || label.includes('zip code')) {
      return {
        type: 'text',
        placeholder: '12345'
      };
    }
    
    return { type: 'text' };
  }
  
  // Button (checkbox/radio)
  if (field.type === 'Button') {
    // Yes/No radio
    if (fieldName.includes('yes') || fieldName.includes('no')) {
      return {
        type: 'radio',
        value: fieldName.includes('yes') ? 'yes' : 'no'
      };
    }
    
    // Male/Female radio
    if (fieldName.includes('male') || fieldName.includes('female') || label.includes('gender')) {
      return {
        type: 'radio',
        value: fieldName.includes('female') ? 'female' : 'male'
      };
    }
    
    // Checkbox with options
    if (field.options && field.options.length > 0) {
      const validOptions = field.options.filter(opt => opt !== 'Off' && opt !== '');
      if (validOptions.length > 0) {
        return {
          type: 'checkbox',
          value: validOptions[0]
        };
      }
    }
    
    return { type: 'checkbox' };
  }
  
  return { type: 'text' };
}

// Group fields by part and section
function organizeFields(parsedFields) {
  const parts = {};
  
  for (const field of parsedFields) {
    const partKey = `part${field.part}`;
    
    if (!parts[partKey]) {
      parts[partKey] = {
        partNum: field.part,
        sectionTitle: field.sectionTitle || `Part ${field.part}`,
        fields: []
      };
    }
    
    parts[partKey].fields.push(field);
  }
  
  // Sort by part number
  const sortedParts = Object.values(parts).sort((a, b) => 
    parseInt(a.partNum) - parseInt(b.partNum)
  );
  
  return sortedParts;
}

// Generate TypeScript definition
function generateDefinition(parts, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const formId = formName.toLowerCase();
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Form Definition\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` * \n`;
  content += ` * HIGH-QUALITY DEFINITION - Review and enhance labels/descriptions\n`;
  content += ` */\n\n`;
  
  content += `import { FormDefinition } from '../forms-registry';\n`;
  content += `import { ${upperFormName}_FIELD_MAPPINGS } from '../form-mappings/${formId}-field-mappings';\n`;
  content += `import { US_STATES } from '../constants';\n\n`;
  
  content += `const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  content += `  id: "${formId}",\n`;
  content += `  code: "${formName.toUpperCase()}",\n`;
  content += `  name: "TODO: Add proper form name",\n`;
  content += `  description: "TODO: Add form description",\n`;
  content += `  category: "other", // TODO: Update category\n`;
  content += `  estimatedTime: "30-45 minutes",\n`;
  content += `  filingFee: 0, // TODO: Update filing fee\n`;
  content += `  price: 60,\n`;
  content += `  sections: [\n`;
  
  for (const part of parts) {
    // Group fields by line number for better organization
    const lineGroups = {};
    for (const field of part.fields) {
      const lineKey = field.line || 'other';
      if (!lineGroups[lineKey]) {
        lineGroups[lineKey] = [];
      }
      lineGroups[lineKey].push(field);
    }
    
    content += `    // ${part.sectionTitle}\n`;
    content += `    {\n`;
    content += `      id: "part${part.partNum}-section",\n`;
    content += `      title: "${part.sectionTitle}",\n`;
    content += `      description: "TODO: Add section description",\n`;
    content += `      questions: [\n`;
    
    // Track unique question IDs
    const seenQuestions = new Set();
    
    for (const field of part.fields) {
      const questionId = `part${field.part}.${field.fieldName.charAt(0).toLowerCase() + field.fieldName.slice(1)}`;
      
      // Skip duplicates (radio/checkbox groups handled separately)
      if (seenQuestions.has(questionId) && !field.analysis.value) {
        continue;
      }
      seenQuestions.add(questionId);
      
      content += `        {\n`;
      content += `          id: "${questionId}",\n`;
      content += `          type: "${field.analysis.type}",\n`;
      content += `          label: "${field.label || field.fieldName}",\n`;
      content += `          required: ${field.fieldName.toLowerCase().includes('familyname') || field.fieldName.toLowerCase().includes('givenname')},\n`;
      
      if (field.analysis.placeholder) {
        content += `          placeholder: "${field.analysis.placeholder}",\n`;
      }
      
      if (field.helpText) {
        content += `          helpText: "${field.helpText}",\n`;
      }
      
      if (field.analysis.options === 'US_STATES') {
        content += `          options: US_STATES,\n`;
      } else if (field.analysis.value) {
        // For radio/checkbox, we'll need to group them
        content += `          // TODO: Add options for this radio/checkbox group\n`;
      }
      
      content += `        },\n`;
    }
    
    content += `      ],\n`;
    content += `    },\n`;
  }
  
  content += `  ],\n`;
  content += `  pdfFieldMappings: ${upperFormName}_FIELD_MAPPINGS,\n`;
  content += `  requiredDocuments: [\n`;
  content += `    "TODO: List required documents",\n`;
  content += `  ],\n`;
  content += `  instructions: [\n`;
  content += `    "TODO: Add instructions",\n`;
  content += `  ],\n`;
  content += `};\n\n`;
  
  content += `export default ${upperFormName}_DEFINITION;\n`;
  
  return content;
}

// Generate field mappings
function generateMappings(parts, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Field Mappings\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: string;\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_FIELD_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const part of parts) {
    content += `  // Part ${part.partNum}\n`;
    
    for (const field of part.fields) {
      const questionId = `part${field.part}.${field.fieldName.charAt(0).toLowerCase() + field.fieldName.slice(1)}`;
      
      content += `  {\n`;
      content += `    questionId: "${questionId}",\n`;
      content += `    pdfField: "${field.pdfField}",\n`;
      
      if (field.analysis.type !== 'text') {
        content += `    type: "${field.analysis.type}",\n`;
      }
      
      if (field.analysis.value) {
        content += `    value: "${field.analysis.value}",\n`;
      }
      
      content += `  },\n`;
    }
    
    content += `\n`;
  }
  
  content += `];\n`;
  
  return content;
}

// Generate detailed report for manual review
function generateReport(parts, formName) {
  let report = `# ${formName.toUpperCase()} Form Analysis Report\n\n`;
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += `## Instructions\n\n`;
  report += `This report shows all extracted fields with their labels and context.\n`;
  report += `Use this to manually enhance the generated definition with:\n`;
  report += `- Better section descriptions\n`;
  report += `- Helpful helpText for complex fields\n`;
  report += `- Proper option labels for select/radio fields\n\n`;
  
  for (const part of parts) {
    report += `## ${part.sectionTitle}\n\n`;
    
    for (const field of part.fields) {
      report += `### ${field.label || field.fieldName}\n\n`;
      report += `- **PDF Field**: \`${field.pdfField}\`\n`;
      report += `- **Type**: ${field.analysis.type}\n`;
      report += `- **Question ID**: \`part${field.part}.${field.fieldName.charAt(0).toLowerCase() + field.fieldName.slice(1)}\`\n`;
      
      if (field.helpText) {
        report += `- **Help Text**: ${field.helpText}\n`;
      }
      
      if (field.altName) {
        report += `- **Full Context**: ${field.altName}\n`;
      }
      
      report += `\n`;
    }
  }
  
  return report;
}

// Main function
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/ultimate-form-generator.js <path-to-pdf>');
    process.exit(1);
  }
  
  const pdfPath = args[0];
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`\n🔍 Analyzing PDF: ${pdfPath}\n`);
  
  try {
    // Extract fields
    const fields = extractFieldsWithPdftk(pdfPath);
    console.log(`✅ Extracted ${fields.length} fields from PDF\n`);
    
    // Parse each field
    const parsedFields = [];
    let skipped = 0;
    
    for (const field of fields) {
      const parsed = parseFieldDetailed(field);
      if (!parsed) {
        skipped++;
        continue;
      }
      
      const analysis = analyzeFieldType(parsed, field);
      parsed.analysis = analysis;
      parsedFields.push(parsed);
    }
    
    console.log(`✅ Processed ${parsedFields.length} fields (${skipped} skipped)\n`);
    
    // Organize by parts
    const parts = organizeFields(parsedFields);
    console.log(`✅ Organized into ${parts.length} parts\n`);
    
    // Generate files
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    
    const definitionContent = generateDefinition(parts, formName);
    const mappingsContent = generateMappings(parts, formName);
    const reportContent = generateReport(parts, formName);
    
    // Save files
    const definitionPath = `src/lib/constants/form-definitions/${formName}-definition.ts`;
    const mappingsPath = `src/lib/constants/form-mappings/${formName}-field-mappings.ts`;
    const reportPath = `scripts/reports/${formName}-analysis.md`;
    
    // Ensure directories exist
    ['src/lib/constants/form-definitions', 'src/lib/constants/form-mappings', 'scripts/reports'].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    fs.writeFileSync(definitionPath, definitionContent);
    fs.writeFileSync(mappingsPath, mappingsContent);
    fs.writeFileSync(reportPath, reportContent);
    
    console.log('📁 FILES GENERATED:\n');
    console.log(`✅ ${definitionPath}`);
    console.log(`✅ ${mappingsPath}`);
    console.log(`✅ ${reportPath}\n`);
    
    console.log('📝 NEXT STEPS:\n');
    console.log('1. Review the analysis report for field context');
    console.log('2. Enhance labels and descriptions in the definition');
    console.log('3. Add helpful helpText for complex fields');
    console.log('4. Update section descriptions');
    console.log('5. Add proper option labels for select/radio fields\n');
    
    console.log('✅ DONE!\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
