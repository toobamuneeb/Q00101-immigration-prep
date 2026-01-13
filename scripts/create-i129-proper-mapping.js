#!/usr/bin/env node
/**
 * Create proper I-129 field mappings from actual PDF
 * Usage: node scripts/create-i129-proper-mapping.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Creating I-129 Proper Field Mappings from Actual PDF...\n');

// Read the actual PDF fields
const pdfFieldsPath = path.join(__dirname, '../public/pdf-templates/i-129-unlocked_fields.json');
const pdfData = JSON.parse(fs.readFileSync(pdfFieldsPath, 'utf-8'));

console.log(`📄 Total PDF fields: ${pdfData.totalFields}`);

// Filter out barcodes and get actual form fields
const formFields = pdfData.fields.filter(f => 
  !f.name.includes('BarCode') && 
  !f.name.includes('ImageField') &&
  f.type !== 'PDFButton'
);

console.log(`📋 Actual form fields: ${formFields.length}\n`);

// Group fields by section/part
const fieldsBySection = {};

formFields.forEach(field => {
  // Extract section from field name
  let section = 'other';
  
  if (field.name.includes('Part1')) section = 'part1';
  else if (field.name.includes('Part2')) section = 'part2';
  else if (field.name.includes('Part3')) section = 'part3';
  else if (field.name.includes('Part4')) section = 'part4';
  else if (field.name.includes('Part5')) section = 'part5';
  else if (field.name.includes('Part6')) section = 'part6';
  else if (field.name.includes('Part7')) section = 'part7';
  else if (field.name.includes('Part8')) section = 'part8';
  else if (field.name.includes('Part9')) section = 'part9';
  else if (field.name.includes('Part10')) section = 'part10';
  else if (field.name.includes('Part11')) section = 'part11';
  else if (field.name.includes('Part12')) section = 'part12';
  else if (field.name.includes('Part13')) section = 'part13';
  else if (field.name.includes('Part14')) section = 'part14';
  else if (field.name.includes('ClassH')) section = 'h_supplement';
  else if (field.name.includes('TASup')) section = 'trade_supplement';
  else if (field.name.includes('ESup')) section = 'e_supplement';
  else if (field.name.includes('LSup')) section = 'l_supplement';
  else if (field.name.includes('OPSup')) section = 'op_supplement';
  else if (field.name.includes('QSup')) section = 'q_supplement';
  else if (field.name.includes('RSup')) section = 'r_supplement';
  
  if (!fieldsBySection[section]) {
    fieldsBySection[section] = [];
  }
  fieldsBySection[section].push(field);
});

console.log('📊 Fields by section:');
Object.entries(fieldsBySection).forEach(([section, fields]) => {
  console.log(`   ${section}: ${fields.length} fields`);
});
console.log('');

// Generate TypeScript field mappings
const mappings = [];

// Helper function to create question ID from PDF field name
function createQuestionId(pdfFieldName, section) {
  // Extract meaningful part from PDF field name
  const parts = pdfFieldName.split('.');
  const lastPart = parts[parts.length - 1].replace('[0]', '').replace('[1]', '');
  
  // Convert to snake_case
  const questionId = lastPart
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '')
    .replace(/_+/g, '_');
  
  return `${section}_${questionId}`;
}

// Generate mappings for each section
Object.entries(fieldsBySection).forEach(([section, fields]) => {
  fields.forEach(field => {
    const questionId = createQuestionId(field.name, section);
    const type = field.type === 'PDFCheckBox' ? 'checkbox' :
                 field.type === 'PDFDropdown' ? 'select' :
                 field.type === 'PDFRadioGroup' ? 'radio' :
                 field.name.includes('Date') || field.name.includes('DOB') ? 'date' :
                 field.name.includes('Email') ? 'email' :
                 field.name.includes('Phone') ? 'tel' :
                 'text';
    
    mappings.push({
      questionId,
      pdfField: field.name,
      type,
      fieldType: field.type
    });
  });
});

console.log(`✅ Generated ${mappings.length} field mappings\n`);

// Create output directory
const outputDir = path.join(__dirname, '../generated-forms/i-129');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate TypeScript file
const tsContent = `/**
 * I-129 Field Mappings - Generated from Actual PDF
 * Generated: ${new Date().toISOString()}
 * Source: public/pdf-templates/i-129-unlocked.pdf
 * Total Fields: ${mappings.length}
 */

export interface I129FieldMapping {
  questionId: string;
  pdfField: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'radio' | 'checkbox';
  fieldType: string; // PDF field type
}

export const I_129_PDF_FIELD_MAPPINGS: I129FieldMapping[] = ${JSON.stringify(mappings, null, 2)};

// Export by section for easier access
export const I_129_MAPPINGS_BY_SECTION = {
${Object.entries(fieldsBySection).map(([section, fields]) => {
  const sectionMappings = mappings.filter(m => m.questionId.startsWith(section + '_'));
  return `  ${section}: ${JSON.stringify(sectionMappings, null, 4)}`;
}).join(',\n')}
};
`;

fs.writeFileSync(path.join(outputDir, 'i-129-pdf-mappings.ts'), tsContent);
console.log('✅ Generated i-129-pdf-mappings.ts');

// Generate JSON file
const jsonContent = {
  formId: 'i-129',
  formCode: 'I-129',
  formName: 'Petition for a Nonimmigrant Worker',
  pdfSource: 'public/pdf-templates/i-129-unlocked.pdf',
  totalPdfFields: pdfData.totalFields,
  totalFormFields: formFields.length,
  totalMappings: mappings.length,
  generatedAt: new Date().toISOString(),
  sections: Object.keys(fieldsBySection).map(section => ({
    id: section,
    fieldCount: fieldsBySection[section].length,
    fields: fieldsBySection[section].map(f => ({
      name: f.name,
      type: f.type,
      value: f.value || ''
    }))
  })),
  mappings: mappings
};

fs.writeFileSync(path.join(outputDir, 'i-129-pdf-mappings.json'), JSON.stringify(jsonContent, null, 2));
console.log('✅ Generated i-129-pdf-mappings.json');

// Generate markdown documentation
const mdContent = `# I-129 PDF Field Mappings

**Generated:** ${new Date().toISOString()}  
**Source:** public/pdf-templates/i-129-unlocked.pdf  
**Total PDF Fields:** ${pdfData.totalFields}  
**Form Fields:** ${formFields.length}  
**Mappings:** ${mappings.length}

## Sections

${Object.entries(fieldsBySection).map(([section, fields]) => `
### ${section.toUpperCase()} (${fields.length} fields)

| Question ID | PDF Field | Type |
|------------|-----------|------|
${fields.slice(0, 10).map(f => {
  const qId = createQuestionId(f.name, section);
  const type = f.type === 'PDFCheckBox' ? 'checkbox' :
               f.type === 'PDFDropdown' ? 'select' :
               f.type === 'PDFRadioGroup' ? 'radio' : 'text';
  return `| ${qId} | ${f.name} | ${type} |`;
}).join('\n')}
${fields.length > 10 ? `\n... and ${fields.length - 10} more fields` : ''}
`).join('\n')}

## Usage

\`\`\`typescript
import { I_129_PDF_FIELD_MAPPINGS, I_129_MAPPINGS_BY_SECTION } from './i-129-pdf-mappings';

// Get all mappings
const allMappings = I_129_PDF_FIELD_MAPPINGS;

// Get mappings for a specific section
const part1Mappings = I_129_MAPPINGS_BY_SECTION.part1;
\`\`\`
`;

fs.writeFileSync(path.join(outputDir, 'PDF_MAPPINGS.md'), mdContent);
console.log('✅ Generated PDF_MAPPINGS.md');

console.log('\n✨ Generation complete!\n');
console.log('📁 Output directory: generated-forms/i-129/');
console.log('📄 Files created:');
console.log('   - i-129-pdf-mappings.ts (TypeScript mappings)');
console.log('   - i-129-pdf-mappings.json (JSON format)');
console.log('   - PDF_MAPPINGS.md (Documentation)');
console.log('\n');
