#!/usr/bin/env node
/**
 * Comprehensive Form Generator
 * 
 * Generates COMPLETE form definitions and mappings from PDF
 * - Extracts ALL fields from PDF
 * - Creates proper field mappings with types and values
 * - Generates registry definition with proper labels, descriptions, required flags
 * - Groups fields by sections intelligently
 * - Handles checkboxes, radios, text fields, dates, etc.
 * 
 * Usage: node scripts/comprehensive-form-generator.js <path-to-pdf>
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ============================================================================
// FIELD EXTRACTION
// ============================================================================

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
        // This contains the human-readable label!
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

// ============================================================================
// INTELLIGENT FIELD PARSING
// ============================================================================

function parseFieldName(pdfFieldName) {
  // Skip barcodes
  if (pdfFieldName.includes('BarCode') || pdfFieldName.includes('PDF417')) {
    return null;
  }
  
  // Remove form1[0] prefix
  let clean = pdfFieldName.replace(/^form1\[0\]\./, '');
  
  // Parse different patterns
  
  // Pattern 1: #subform[N].PtXLineY_FieldName (I-130 style)
  let match = clean.match(/^#subform\[\d+\]\.Pt(\d+)Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 2: #subform[N].#area[M].PtXLineY_FieldName (I-130 with area)
  match = clean.match(/^#subform\[\d+\]\.#area\[\d+\]\.Pt(\d+)Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 3: P5[0].Part2_Line3_FieldName (I-131 style)
  match = clean.match(/^P\d+\[0\]\.Part(\d+)_Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 4: P4[0].Part2_Line1_FieldName (without [0] at end)
  match = clean.match(/^P(\d+)\[0\]\.Part(\d+)_Line(\w+)_(.+)$/);
  if (match) {
    const [, pageNum, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 5: P5[0].#area[0].Part2_Line10_SSN (with area)
  match = clean.match(/^P\d+\[0\]\.#area\[\d+\]\.Part(\d+)_Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 6: P1[0].P1_Line4 (simple part/line)
  match = clean.match(/^P\d+\[0\]\.P(\d+)_Line(\w+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum] = match;
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: `line${lineNum}`,
      questionId: `part${partNum}.line${lineNum}`,
      label: `Part ${partNum} Line ${lineNum}`,
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 7: Part10_Line4_DateofSignature (direct part naming)
  match = clean.match(/^Part(\d+)_Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: `part${partNum}`,
      line: `line${lineNum}`,
      field: camelField,
      questionId: `part${partNum}.line${lineNum}.${camelField}`,
      label: fieldName.replace(/([A-Z])/g, ' $1').trim(),
      pdfField: pdfFieldName
    };
  }
  
  // Pattern 8: Line4c_No (checkbox without part)
  match = clean.match(/^Line(\w+)_(.+)\[0\]$/);
  if (match) {
    const [, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    return {
      part: 'general',
      line: `line${lineNum}`,
      field: camelField,
      questionId: `line${lineNum}.${camelField}`,
      label: `Line ${lineNum} - ${fieldName.replace(/([A-Z])/g, ' $1').trim()}`,
      pdfField: pdfFieldName
    };
  }
  
  // Fallback: try to extract any useful info
  const parts = clean.split('.');
  const lastPart = parts[parts.length - 1].replace(/\[0\]$/, '');
  const camelField = lastPart.replace(/_/g, '.').toLowerCase();
  
  return {
    part: 'other',
    line: 'other',
    field: camelField,
    questionId: camelField,
    label: lastPart.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim(),
    pdfField: pdfFieldName
  };
}

// ============================================================================
// FIELD TYPE DETECTION
// ============================================================================

function detectFieldType(field, parsedName) {
  const fieldName = parsedName.field.toLowerCase();
  const label = parsedName.label.toLowerCase();
  
  // Checkbox/Radio detection
  if (field.type === 'Button') {
    // Check if it's a yes/no radio
    if (fieldName.includes('yes') || fieldName.includes('no')) {
      return { type: 'radio', options: ['yes', 'no'] };
    }
    // Check if it's male/female
    if (fieldName.includes('male') || fieldName.includes('female')) {
      return { type: 'radio', options: ['male', 'female'] };
    }
    // Check if it's a checkbox option
    if (field.options && field.options.length > 0) {
      return { type: 'checkbox', options: field.options };
    }
    return { type: 'checkbox' };
  }
  
  // Date detection
  if (fieldName.includes('date') || fieldName.includes('dob') || 
      label.includes('date') || label.includes('birth')) {
    return { 
      type: 'date', 
      placeholder: 'MM/DD/YYYY',
      helpText: 'Enter date in MM/DD/YYYY format'
    };
  }
  
  // SSN detection
  if (fieldName.includes('ssn') || label.includes('social security')) {
    return { 
      type: 'ssn', 
      placeholder: '###-##-####',
      helpText: 'Enter your 9-digit Social Security Number'
    };
  }
  
  // Phone detection
  if (fieldName.includes('phone') || fieldName.includes('telephone')) {
    return { 
      type: 'tel', 
      placeholder: '(###) ###-####',
      helpText: 'Enter 10-digit phone number'
    };
  }
  
  // Email detection
  if (fieldName.includes('email')) {
    return { 
      type: 'email', 
      placeholder: 'email@example.com',
      helpText: 'Enter a valid email address'
    };
  }
  
  // Zip code detection
  if (fieldName.includes('zip') || fieldName.includes('postal')) {
    return { 
      type: 'text', 
      placeholder: '#####',
      helpText: 'Enter 5-digit ZIP code'
    };
  }
  
  // State detection
  if (fieldName.includes('state') && !fieldName.includes('statement')) {
    return { 
      type: 'select', 
      options: 'US_STATES',
      helpText: 'Select your state'
    };
  }
  
  // Country detection
  if (fieldName.includes('country')) {
    return { 
      type: 'select', 
      options: 'COUNTRIES',
      helpText: 'Select country'
    };
  }
  
  // A-Number detection
  if (fieldName.includes('alien') || fieldName.includes('anumber')) {
    return {
      type: 'text',
      placeholder: 'A-#########',
      helpText: 'Enter your 9-digit Alien Registration Number (if any)'
    };
  }
  
  // Street address
  if (fieldName.includes('street')) {
    return {
      type: 'text',
      placeholder: '123 Main Street',
      helpText: 'Enter street number and name'
    };
  }
  
  // City
  if (fieldName.includes('city')) {
    return {
      type: 'text',
      placeholder: 'City name',
      helpText: 'Enter city or town name'
    };
  }
  
  // Default to text
  return { type: 'text' };
}

// ============================================================================
// REQUIRED FIELD DETECTION
// ============================================================================

function isFieldRequired(parsedName) {
  const fieldName = parsedName.field.toLowerCase();
  const label = parsedName.label.toLowerCase();
  
  // Core identity fields are usually required
  const requiredPatterns = [
    'familyname', 'lastname', 'surname',
    'givenname', 'firstname',
    'dateofbirth', 'dob',
    'aliennumber', 'anumber',
  ];
  
  for (const pattern of requiredPatterns) {
    if (fieldName.includes(pattern) || label.includes(pattern)) {
      return true;
    }
  }
  
  // Optional fields
  const optionalPatterns = [
    'middlename',
    'othername',
    'previous',
    'former',
    'additional',
  ];
  
  for (const pattern of optionalPatterns) {
    if (fieldName.includes(pattern) || label.includes(pattern)) {
      return false;
    }
  }
  
  // Default: required for main fields, optional for others
  return parsedName.part !== 'unknown';
}

// ============================================================================
// GROUP FIELDS BY SECTION
// ============================================================================

function groupFieldsBySections(processedFields) {
  const sections = {};
  
  for (const field of processedFields) {
    const sectionId = field.parsed.part;
    
    if (!sections[sectionId]) {
      let title, description;
      
      if (sectionId.startsWith('part')) {
        const partNum = sectionId.replace('part', '');
        title = `Part ${partNum}: Information About You`;
        description = `Complete all fields in Part ${partNum}`;
        
        // Customize titles based on common part numbers
        if (partNum === '1') {
          title = `Part 1: Application Type`;
          description = `Select the type of application you are filing`;
        } else if (partNum === '2') {
          title = `Part 2: Information About You`;
          description = `Provide your personal information`;
        } else if (partNum === '10') {
          title = `Part 10: Applicant's Statement, Contact Information, and Signature`;
          description = `Sign and date your application`;
        } else if (partNum === '11') {
          title = `Part 11: Interpreter's Contact Information and Signature`;
          description = `If applicable, interpreter information`;
        } else if (partNum === '12') {
          title = `Part 12: Preparer's Contact Information and Signature`;
          description = `If applicable, preparer information`;
        } else if (partNum === '13') {
          title = `Part 13: Additional Information`;
          description = `Provide any additional information`;
        }
      } else if (sectionId === 'general') {
        title = 'General Information';
        description = 'General form fields';
      } else {
        title = 'Additional Fields';
        description = 'Other form fields';
      }
      
      sections[sectionId] = {
        id: sectionId,
        title,
        description,
        questions: []
      };
    }
    
    sections[sectionId].questions.push(field);
  }
  
  // Sort sections by part number
  const sortedSections = Object.values(sections).sort((a, b) => {
    const aNum = parseInt(a.id.replace('part', '')) || 999;
    const bNum = parseInt(b.id.replace('part', '')) || 999;
    return aNum - bNum;
  });
  
  return sortedSections;
}

// ============================================================================
// GENERATE FIELD MAPPINGS
// ============================================================================

function generateFieldMappings(processedFields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Complete Field Mappings\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` *\n`;
  content += ` * Comprehensive mappings for ALL ${formName.toUpperCase()} form fields\n`;
  content += ` * Maps form definition question IDs to PDF field names\n`;
  content += ` * Total mappings: ${processedFields.length}\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: "text" | "radio" | "checkbox" | "date" | "ssn" | "email" | "tel";\n`;
  content += `  value?: string; // For radio/checkbox options - the value that triggers this field\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_FIELD_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const field of processedFields) {
    const mapping = {
      questionId: field.parsed.questionId,
      pdfField: field.parsed.pdfField,
    };
    
    if (field.fieldType.type === 'checkbox' || field.fieldType.type === 'radio') {
      mapping.type = field.fieldType.type;
      if (field.fieldType.options && field.fieldType.options.length > 0) {
        // Generate separate mappings for each option
        for (const option of field.fieldType.options) {
          content += `  {\n`;
          content += `    questionId: "${mapping.questionId}",\n`;
          content += `    pdfField: "${mapping.pdfField}",\n`;
          content += `    type: "${mapping.type}",\n`;
          content += `    value: "${option}",\n`;
          content += `  },\n`;
        }
        continue;
      }
    }
    
    content += `  {\n`;
    content += `    questionId: "${mapping.questionId}",\n`;
    content += `    pdfField: "${mapping.pdfField}",\n`;
    if (field.fieldType.type !== 'text') {
      content += `    type: "${field.fieldType.type}",\n`;
    }
    content += `  },\n`;
  }
  
  content += `];\n`;
  
  return content;
}

// ============================================================================
// GENERATE FORM DEFINITION
// ============================================================================

function generateFormDefinition(sections, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const formId = formName.toLowerCase();
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Form Registry Definition\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` *\n`;
  content += ` * Complete form definition with all fields, proper labels, and validation\n`;
  content += ` * Copy this to src/lib/constants/forms-registry.ts\n`;
  content += ` */\n\n`;
  
  content += `import { FormDefinition } from './forms-registry';\n`;
  content += `import { ${upperFormName}_FIELD_MAPPINGS } from './form-mappings/${formId}-field-mappings';\n\n`;
  
  content += `export const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  content += `  id: "${formId}",\n`;
  content += `  code: "${formName.toUpperCase()}",\n`;
  content += `  name: "${formName.toUpperCase()} Form",\n`;
  content += `  description: "Complete ${formName.toUpperCase()} form with all fields",\n`;
  content += `  category: "other", // TODO: Update category (family, employment, citizenship, etc.)\n`;
  content += `  estimatedTime: "60-90 minutes",\n`;
  content += `  filingFee: 0, // TODO: Update filing fee\n`;
  content += `  price: 60,\n`;
  content += `  sections: [\n`;
  
  for (const section of sections) {
    content += `    {\n`;
    content += `      id: "${section.id}",\n`;
    content += `      title: "${section.title}",\n`;
    content += `      description: "${section.description}",\n`;
    content += `      questions: [\n`;
    
    for (const field of section.questions) {
      content += `        {\n`;
      content += `          id: "${field.parsed.questionId}",\n`;
      content += `          type: "${field.fieldType.type}",\n`;
      content += `          label: "${field.parsed.label}",\n`;
      content += `          required: ${field.required},\n`;
      
      if (field.fieldType.placeholder) {
        content += `          placeholder: "${field.fieldType.placeholder}",\n`;
      }
      
      if (field.fieldType.helpText) {
        content += `          helpText: "${field.fieldType.helpText}",\n`;
      }
      
      if (field.fieldType.options) {
        if (field.fieldType.options === 'US_STATES') {
          content += `          options: US_STATES, // Import from constants\n`;
        } else if (field.fieldType.options === 'COUNTRIES') {
          content += `          options: COUNTRIES, // Import from constants\n`;
        } else if (Array.isArray(field.fieldType.options)) {
          content += `          options: [\n`;
          for (const option of field.fieldType.options) {
            const optionLabel = option === 'yes' ? 'Yes' : 
                               option === 'no' ? 'No' :
                               option === 'male' ? 'Male' :
                               option === 'female' ? 'Female' :
                               option.charAt(0).toUpperCase() + option.slice(1);
            content += `            { value: "${option}", label: "${optionLabel}" },\n`;
          }
          content += `          ],\n`;
        }
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
  content += `};\n`;
  
  return content;
}

// ============================================================================
// MAIN FUNCTION
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/comprehensive-form-generator.js <path-to-pdf>');
    console.error('\nExample:');
    console.error('  node scripts/comprehensive-form-generator.js public/pdf-templates/i-131.pdf');
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
    console.log(`✅ Extracted ${fields.length} total fields from PDF\n`);
    
    // Process each field
    const processedFields = [];
    let skippedCount = 0;
    
    for (const field of fields) {
      const parsed = parseFieldName(field.name);
      if (!parsed) {
        skippedCount++;
        continue;
      }
      
      // Use FieldNameAlt if available for better labels
      if (field.altName) {
        // Extract the actual question label from FieldNameAlt
        // Format: "Part 2. Information About You. 1. Your Full Name. Enter Family Name (Last Name)."
        const altParts = field.altName.split('.');
        if (altParts.length >= 3) {
          // Try to find the line number and label
          for (let i = 0; i < altParts.length; i++) {
            const part = altParts[i].trim();
            // Look for pattern like "1. Your Full Name"
            const lineMatch = part.match(/^(\d+[a-z]?)\.\s*(.+)/);
            if (lineMatch) {
              const [, lineNum, labelText] = lineMatch;
              // Check if next part has more detail
              if (i + 1 < altParts.length) {
                const nextPart = altParts[i + 1].trim();
                if (nextPart && !nextPart.match(/^(Part|Item|Page)/i)) {
                  parsed.label = `${lineNum}. ${nextPart}`;
                  break;
                }
              }
              parsed.label = `${lineNum}. ${labelText}`;
              break;
            }
          }
        }
      }
      
      const fieldType = detectFieldType(field, parsed);
      const required = isFieldRequired(parsed);
      
      processedFields.push({
        raw: field,
        parsed,
        fieldType,
        required
      });
    }
    
    console.log(`✅ Processed ${processedFields.length} fields (${skippedCount} barcodes skipped)\n`);
    
    // Group by sections
    const sections = groupFieldsBySections(processedFields);
    console.log(`✅ Organized into ${sections.length} sections\n`);
    
    // Generate files
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    
    const mappingsContent = generateFieldMappings(processedFields, formName);
    const definitionContent = generateFormDefinition(sections, formName);
    
    // Save files
    const mappingsPath = `src/lib/constants/form-mappings/${formName}-field-mappings.ts`;
    const definitionPath = `src/lib/constants/form-definitions/${formName}-definition.ts`;
    
    // Ensure directories exist
    const mappingsDir = path.dirname(mappingsPath);
    const definitionDir = path.dirname(definitionPath);
    
    if (!fs.existsSync(mappingsDir)) {
      fs.mkdirSync(mappingsDir, { recursive: true });
    }
    if (!fs.existsSync(definitionDir)) {
      fs.mkdirSync(definitionDir, { recursive: true });
    }
    
    fs.writeFileSync(mappingsPath, mappingsContent);
    fs.writeFileSync(definitionPath, definitionContent);
    
    console.log('📁 FILES GENERATED:\n');
    console.log(`✅ ${mappingsPath}`);
    console.log(`✅ ${definitionPath}\n`);
    
    // Show statistics
    console.log('📊 STATISTICS:\n');
    console.log(`Total Fields: ${processedFields.length}`);
    console.log(`Sections: ${sections.length}`);
    console.log(`Required Fields: ${processedFields.filter(f => f.required).length}`);
    console.log(`Optional Fields: ${processedFields.filter(f => !f.required).length}`);
    console.log(`\nField Types:`);
    const typeCounts = {};
    processedFields.forEach(f => {
      typeCounts[f.fieldType.type] = (typeCounts[f.fieldType.type] || 0) + 1;
    });
    Object.entries(typeCounts).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\n📝 NEXT STEPS:\n');
    console.log('1. Review the generated files');
    console.log('2. Update form category, filing fee, and description');
    console.log('3. Add proper field descriptions and help text');
    console.log('4. Import definition into forms-registry.ts');
    console.log('5. Test PDF generation with sample data\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
