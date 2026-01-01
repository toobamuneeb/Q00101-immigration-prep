#!/usr/bin/env node
/**
 * Alternative PDF Field Extractor using pdftk
 * 
 * This uses pdftk command-line tool to extract fields
 * Install: brew install pdftk-java (Mac) or apt-get install pdftk (Linux)
 * 
 * Usage: node scripts/extract-pdf-fields-alt.js <path-to-pdf>
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function extractFieldsWithPdftk(pdfPath) {
  try {
    // Use pdftk to dump form fields
    const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, { 
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024 // 10MB buffer
    });
    
    const fields = [];
    const lines = output.split('\n');
    let currentField = {};
    
    for (const line of lines) {
      if (line.startsWith('FieldName:')) {
        if (currentField.name) {
          fields.push(currentField);
        }
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
    
    if (currentField.name) {
      fields.push(currentField);
    }
    
    return fields;
  } catch (error) {
    throw new Error(`pdftk failed: ${error.message}\n\nMake sure pdftk is installed:\n  Mac: brew install pdftk-java\n  Linux: apt-get install pdftk`);
  }
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
  
  template += `export interface FieldMapping {\n`;
  template += `  questionId: string;\n`;
  template += `  pdfField: string;\n`;
  template += `  type?: string;\n`;
  template += `  value?: string;\n`;
  template += `}\n\n`;
  
  template += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;
  template += `  // TODO: Map these PDF fields to your questionIds\n`;
  template += `  // Example: { questionId: "part1.firstName", pdfField: "FieldName" },\n\n`;
  
  for (const field of fields) {
    const isCheckbox = field.type === 'Button';
    const isDropdown = field.type === 'Choice';
    
    if (isCheckbox) {
      template += `  { questionId: "YOUR_QUESTION_ID", pdfField: "${field.name}", type: "checkbox" },\n`;
    } else {
      template += `  { questionId: "YOUR_QUESTION_ID", pdfField: "${field.name}" },\n`;
    }
  }
  
  template += `];\n\n`;
  
  template += `/**\n`;
  template += ` * All PDF Field Names (${fields.length} total):\n`;
  template += ` *\n`;
  
  for (const field of fields) {
    const typeInfo = field.type === 'Button' ? ' [CHECKBOX]' : 
                     field.type === 'Choice' ? ' [DROPDOWN]' : 
                     field.type === 'Text' ? ' [TEXT]' : ` [${field.type}]`;
    template += ` * - "${field.name}"${typeInfo}\n`;
    
    if (field.options && field.options.length > 0) {
      template += ` *   Options: ${field.options.join(', ')}\n`;
    }
  }
  
  template += ` */\n`;
  
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
  
  console.log('\n=== FIELD DETAILS (first 20) ===\n');
  
  for (let i = 0; i < Math.min(20, fields.length); i++) {
    const field = fields[i];
    console.log(`${i + 1}. ${field.name}`);
    console.log(`   Type: ${field.type}`);
    if (field.value) {
      console.log(`   Value: ${field.value}`);
    }
    if (field.options && field.options.length > 0) {
      console.log(`   Options: ${field.options.slice(0, 3).join(', ')}${field.options.length > 3 ? '...' : ''}`);
    }
  }
  
  if (fields.length > 20) {
    console.log(`\n... and ${fields.length - 20} more fields\n`);
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/extract-pdf-fields-alt.js <path-to-pdf>');
    console.error('\nExample:');
    console.error('  node scripts/extract-pdf-fields-alt.js public/pdf-templates/i-90.pdf');
    process.exit(1);
  }
  
  const pdfPath = args[0];
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`Analyzing PDF: ${pdfPath}\n`);
  
  try {
    const fields = extractFieldsWithPdftk(pdfPath);
    
    if (fields.length === 0) {
      console.error('❌ No form fields found in PDF');
      console.error('This PDF might not have fillable form fields.');
      process.exit(1);
    }
    
    displayFieldInfo(fields);
    
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    const template = generateMappingTemplate(fields, formName);
    
    const outputPath = `src/lib/constants/form-mappings/${formName}-auto-mappings.ts`;
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, template);
    
    console.log('\n=== SUCCESS ===\n');
    console.log(`✅ Mapping file created: ${outputPath}`);
    console.log(`\n📝 Next steps:`);
    console.log(`1. Open ${outputPath}`);
    console.log(`2. Replace "YOUR_QUESTION_ID" with actual questionIds`);
    console.log(`3. Import in src/lib/pdf/fill-pdf.ts`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
