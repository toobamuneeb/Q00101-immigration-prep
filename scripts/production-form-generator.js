#!/usr/bin/env node
/**
 * PRODUCTION FORM GENERATOR
 * 
 * Generates HIGH-QUALITY form definitions matching I-131 quality
 * Uses FieldNameAlt to extract detailed labels, help text, and options
 * 
 * Usage: node scripts/production-form-generator.js <path-to-pdf> <form-name> <form-description>
 * Example: node scripts/production-form-generator.js public/pdf-templates/i-131.pdf "Application for Travel Document" "Apply for advance parole, reentry permit, or refugee travel document"
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Extract fields with full metadata
function extractFields(pdfPath) {
  const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, { 
    encoding: 'utf-8',
    maxBuffer: 10 * 1024 * 1024
  });
  
  const fields = [];
  const lines = output.split('\n');
  let current = {};
  
  for (const line of lines) {
    if (line.startsWith('FieldName:')) {
      if (current.name) fields.push(current);
      current = { name: line.substring(11).trim() };
    } else if (line.startsWith('FieldNameAlt:')) {
      current.alt = line.substring(14).trim();
    } else if (line.startsWith('FieldType:')) {
      current.type = line.substring(11).trim();
    } else if (line.startsWith('FieldStateOption:')) {
      if (!current.options) current.options = [];
      current.options.push(line.substring(18).trim());
    }
  }
  if (current.name) fields.push(current);
  
  return fields.filter(f => !f.name.includes('BarCode') && !f.name.includes('PDF417'));
}

// Parse field to extract part, line, and field name
function parseField(field) {
  const patterns = [
    /Part(\d+)_Line(\d+[a-z]?)_(\w+)/i,
    /Pt(\d+)Line(\d+[a-z]?)_(\w+)/i,
  ];
  
  for (const pattern of patterns) {
    const match = field.name.match(pattern);
    if (match) {
      return {
        part: match[1],
        line: match[2],
        fieldName: match[3],
        pdfField: field.name,
        alt: field.alt || '',
        type: field.type,
        options: field.options || []
      };
    }
  }
  return null;
}

// Extract detailed label from FieldNameAlt
function extractLabel(alt, line) {
  if (!alt) return '';
  
  const parts = alt.split('.');
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    const lineMatch = part.match(new RegExp(`^${line}[a-z]?\\s+(.+)`, 'i'));
    
    if (lineMatch) {
      let label = lineMatch[1];
      
      // Check next part for more detail
      if (i + 1 < parts.length) {
        const next = parts[i + 1].trim();
        if (next.match(/^(Enter|Provide|Select|List)/i)) {
          const actionMatch = next.match(/^(Enter|Provide|Select|List)\s+(.+)/i);
          if (actionMatch) {
            label = actionMatch[2];
          }
        }
      }
      
      return `${line}. ${label}`;
    }
  }
  
  return '';
}

// Extract help text from FieldNameAlt
function extractHelpText(alt) {
  if (!alt) return '';
  
  const helpPatterns = [
    /\(if any\)/i,
    /\(optional\)/i,
    /\(e\.g\.,/i,
    /Only if/i,
    /Leave blank if/i,
    /Find this at/i,
    /Must match/i,
  ];
  
  for (const pattern of helpPatterns) {
    if (pattern.test(alt)) {
      const parts = alt.split('.');
      for (const part of parts) {
        if (pattern.test(part)) {
          return part.trim();
        }
      }
    }
  }
  
  return '';
}

// Determine field type
function getFieldType(parsed) {
  const name = parsed.fieldName.toLowerCase();
  const label = (parsed.alt || '').toLowerCase();
  
  if (parsed.type === 'PDFTextField') {
    if (name.includes('date') || label.includes('date of birth')) return 'date';
    if (name.includes('ssn')) return 'ssn';
    if (name.includes('phone')) return 'tel';
    if (name.includes('email')) return 'email';
    if (name.includes('state') && !name.includes('statement')) return 'select';
    if (label.includes('select all') || label.includes('check all')) return 'checkbox';
    if (label.length > 200) return 'textarea';
    return 'text';
  }
  
  if (parsed.type === 'Button') {
    if (name.includes('yes') || name.includes('no')) return 'radio';
    if (name.includes('male') || name.includes('female')) return 'radio';
    if (label.includes('select only one') || label.includes('select one')) return 'radio';
    return 'checkbox';
  }
  
  return 'text';
}

// Get placeholder
function getPlaceholder(type, fieldName) {
  const placeholders = {
    'date': 'MM/DD/YYYY',
    'ssn': '###-##-####',
    'tel': '(555) 123-4567',
    'email': 'example@email.com',
  };
  
  if (placeholders[type]) return placeholders[type];
  
  if (fieldName.toLowerCase().includes('zip')) return '12345';
  if (fieldName.toLowerCase().includes('height')) return 'e.g., 5 feet 8 inches';
  if (fieldName.toLowerCase().includes('weight')) return 'e.g., 150';
  
  return '';
}

// Organize fields into sections
function organizeFields(fields) {
  const parts = {};
  
  for (const field of fields) {
    const parsed = parseField(field);
    if (!parsed) continue;
    
    const label = extractLabel(parsed.alt, parsed.line);
    if (!label) continue;
    
    const partKey = `part${parsed.part}`;
    if (!parts[partKey]) {
      parts[partKey] = {
        partNum: parsed.part,
        fields: []
      };
    }
    
    const type = getFieldType(parsed);
    const helpText = extractHelpText(parsed.alt);
    const placeholder = getPlaceholder(type, parsed.fieldName);
    
    parts[partKey].fields.push({
      ...parsed,
      label,
      helpText,
      questionType: type,
      placeholder,
      questionId: `part${parsed.part}.${parsed.fieldName.charAt(0).toLowerCase() + parsed.fieldName.slice(1)}`
    });
  }
  
  return Object.values(parts).sort((a, b) => parseInt(a.partNum) - parseInt(b.partNum));
}

// Generate definition
function generateDefinition(parts, formName, formDescription, formCode) {
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const lowerCode = formCode.toLowerCase().replace(/[^a-z0-9]/g, '-');
  
  let content = `/**\n * ${formCode.toUpperCase()} Form Definition\n * Generated: ${new Date().toISOString()}\n */\n\n`;
  content += `import { FormDefinition } from './forms-registry';\n`;
  content += `import { ${upperCode}_FIELD_MAPPINGS } from './form-mappings/${lowerCode}-field-mappings';\n`;
  content += `import { US_STATES } from './constants';\n\n`;
  content += `const ${upperCode}_DEFINITION: FormDefinition = {\n`;
  content += `  id: "${lowerCode}",\n`;
  content += `  code: "${formCode.toUpperCase()}",\n`;
  content += `  name: "${formName}",\n`;
  content += `  description: "${formDescription}",\n`;
  content += `  category: "other",\n`;
  content += `  estimatedTime: "30-45 minutes",\n`;
  content += `  filingFee: 0,\n`;
  content += `  price: 60,\n`;
  content += `  sections: [\n`;
  
  for (const part of parts) {
    // Group by subsections
    const subsections = {};
    for (const field of part.fields) {
      const linePrefix = field.line.replace(/[a-z]/g, '');
      const key = `${linePrefix}`;
      if (!subsections[key]) subsections[key] = [];
      subsections[key].push(field);
    }
    
    for (const [key, fields] of Object.entries(subsections)) {
      const firstField = fields[0];
      const sectionTitle = `Part ${part.partNum}: ${firstField.label.split('.')[1]?.trim() || 'Information'}`;
      
      content += `    {\n`;
      content += `      id: "part${part.partNum}-section${key}",\n`;
      content += `      title: "${sectionTitle}",\n`;
      content += `      description: "Complete the following information",\n`;
      content += `      questions: [\n`;
      
      for (const field of fields) {
        content += `        {\n`;
        content += `          id: "${field.questionId}",\n`;
        content += `          type: "${field.questionType}",\n`;
        content += `          label: "${field.label}",\n`;
        content += `          required: ${field.fieldName.toLowerCase().includes('familyname') || field.fieldName.toLowerCase().includes('givenname')},\n`;
        
        if (field.placeholder) {
          content += `          placeholder: "${field.placeholder}",\n`;
        }
        
        if (field.helpText) {
          content += `          helpText: "${field.helpText}",\n`;
        }
        
        if (field.questionType === 'select' && field.fieldName.toLowerCase().includes('state')) {
          content += `          options: US_STATES,\n`;
        } else if (field.questionType === 'radio') {
          if (field.fieldName.toLowerCase().includes('yes') || field.fieldName.toLowerCase().includes('no')) {
            content += `          options: [\n`;
            content += `            { value: "yes", label: "Yes" },\n`;
            content += `            { value: "no", label: "No" },\n`;
            content += `          ],\n`;
          } else if (field.fieldName.toLowerCase().includes('male') || field.fieldName.toLowerCase().includes('female')) {
            content += `          options: [\n`;
            content += `            { value: "male", label: "Male" },\n`;
            content += `            { value: "female", label: "Female" },\n`;
            content += `          ],\n`;
          }
        }
        
        content += `        },\n`;
      }
      
      content += `      ],\n`;
      content += `    },\n`;
    }
  }
  
  content += `  ],\n`;
  content += `  pdfFieldMappings: ${upperCode}_FIELD_MAPPINGS,\n`;
  content += `  requiredDocuments: [],\n`;
  content += `  instructions: [],\n`;
  content += `};\n\n`;
  content += `export default ${upperCode}_DEFINITION;\n`;
  
  return content;
}

// Generate mappings
function generateMappings(parts, formCode) {
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let content = `/**\n * ${formCode.toUpperCase()} Field Mappings\n */\n\n`;
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: string;\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  content += `export const ${upperCode}_FIELD_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const part of parts) {
    for (const field of part.fields) {
      content += `  { questionId: "${field.questionId}", pdfField: "${field.pdfField}" },\n`;
    }
  }
  
  content += `];\n`;
  
  return content;
}

// Main
function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: node scripts/production-form-generator.js <pdf-path> <form-name> <form-description>');
    console.error('Example: node scripts/production-form-generator.js public/pdf-templates/i-131.pdf "Application for Travel Document" "Apply for advance parole"');
    process.exit(1);
  }
  
  const [pdfPath, formName, formDescription] = args;
  const formCode = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '-');
  
  console.log(`\n🔍 Generating high-quality definition for ${formCode.toUpperCase()}...\n`);
  
  try {
    const fields = extractFields(pdfPath);
    console.log(`✅ Extracted ${fields.length} fields\n`);
    
    const parts = organizeFields(fields);
    console.log(`✅ Organized into ${parts.length} parts\n`);
    
    const definition = generateDefinition(parts, formName, formDescription, formCode);
    const mappings = generateMappings(parts, formCode);
    
    const lowerCode = formCode.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const defPath = `src/lib/constants/form-definitions/${lowerCode}-definition.ts`;
    const mapPath = `src/lib/constants/form-mappings/${lowerCode}-field-mappings.ts`;
    
    ['src/lib/constants/form-definitions', 'src/lib/constants/form-mappings'].forEach(dir => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });
    
    fs.writeFileSync(defPath, definition);
    fs.writeFileSync(mapPath, mappings);
    
    console.log('📁 FILES GENERATED:\n');
    console.log(`✅ ${defPath}`);
    console.log(`✅ ${mapPath}\n`);
    console.log('✅ DONE! High-quality definition generated.\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
