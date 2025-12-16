#!/usr/bin/env ts-node
/**
 * PDF Field Mapper Script
 * 
 * This script helps you discover and map fields in any PDF form.
 * It will:
 * 1. Extract all field names from a PDF
 * 2. Show field types and properties
 * 3. Generate a TypeScript mapping template
 * 
 * Usage:
 *   npx ts-node scripts/map-pdf-fields.ts <path-to-pdf>
 * 
 * Example:
 *   npx ts-node scripts/map-pdf-fields.ts public/pdf-templates/i-9.pdf
 */

import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

interface FieldInfo {
  name: string;
  type: string;
  value?: string;
  options?: string[];
}

async function extractPdfFields(pdfPath: string): Promise<FieldInfo[]> {
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  
  const fieldInfos: FieldInfo[] = [];
  
  for (const field of fields) {
    const fieldName = field.getName();
    const fieldInfo: FieldInfo = {
      name: fieldName,
      type: field.constructor.name,
    };
    
    try {
      // Try to get current value
      if ('getText' in field && typeof field.getText === 'function') {
        fieldInfo.value = (field as any).getText();
      } else if ('isChecked' in field && typeof field.isChecked === 'function') {
        fieldInfo.value = (field as any).isChecked() ? 'checked' : 'unchecked';
      }
      
      // Try to get options for dropdowns
      if ('getOptions' in field && typeof field.getOptions === 'function') {
        fieldInfo.options = (field as any).getOptions();
      }
    } catch (e) {
      // Skip if we can't read the field
    }
    
    fieldInfos.push(fieldInfo);
  }
  
  return fieldInfos;
}

function generateMappingTemplate(fields: FieldInfo[], formName: string): string {
  const interfaceName = `${formName}Data`;
  const mapperName = `${formName}Mapper`;
  
  let template = `// Generated mapping template for ${formName}\n\n`;
  template += `export interface ${interfaceName} {\n`;
  
  // Generate interface
  for (const field of fields) {
    const safeName = field.name.replace(/[^a-zA-Z0-9_]/g, '_');
    template += `  ${safeName}?: string;\n`;
  }
  
  template += `}\n\n`;
  
  // Generate mapper function
  template += `export const ${mapperName} = (data: ${interfaceName}): Record<string, string> => {\n`;
  template += `  return {\n`;
  
  for (const field of fields) {
    const safeName = field.name.replace(/[^a-zA-Z0-9_]/g, '_');
    template += `    '${field.name}': data.${safeName} || '',\n`;
  }
  
  template += `  };\n`;
  template += `};\n`;
  
  return template;
}

function displayFieldInfo(fields: FieldInfo[]): void {
  console.log('\n=== PDF FIELD ANALYSIS ===\n');
  console.log(`Total fields found: ${fields.length}\n`);
  
  const fieldsByType: Record<string, number> = {};
  
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
    console.error('Usage: npx ts-node scripts/map-pdf-fields.ts <path-to-pdf>');
    console.error('\nExample:');
    console.error('  npx ts-node scripts/map-pdf-fields.ts public/pdf-templates/i-9.pdf');
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
    
    // Save template to file
    const outputPath = `scripts/mapping-${formName}.ts`;
    fs.writeFileSync(outputPath, template);
    
    console.log('\n=== MAPPING TEMPLATE GENERATED ===\n');
    console.log(`Template saved to: ${outputPath}`);
    console.log('\nYou can now:');
    console.log('1. Review the generated interface and mapper');
    console.log('2. Customize the field mappings as needed');
    console.log('3. Integrate into your PDF filling logic');
    
  } catch (error) {
    console.error('Error analyzing PDF:', error);
    process.exit(1);
  }
}

main();
