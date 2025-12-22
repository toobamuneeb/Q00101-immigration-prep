#!/usr/bin/env node
/**
 * Advanced Form Generator - Production Quality
 * 
 * Generates complete, production-ready form definitions and mappings
 * - Uses FieldNameAlt for proper labels
 * - Intelligent checkbox/radio value mapping
 * - No duplicate or invalid mappings
 * - Proper field grouping and organization
 * 
 * Usage: node scripts/advanced-form-generator.js <path-to-pdf>
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ============================================================================
// EXTRACT FIELDS WITH FULL METADATA
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
// PARSE FIELD NAMES
// ============================================================================

function parseFieldName(pdfFieldName, altName) {
  // Skip barcodes
  if (pdfFieldName.includes('BarCode') || pdfFieldName.includes('PDF417')) {
    return null;
  }
  
  // Remove form1[0] prefix
  let clean = pdfFieldName.replace(/^form1\[0\]\./, '');
  
  let parsed = null;
  
  // Try different patterns
  const patterns = [
    // Pattern 1: #subform[N].PtXLineY_FieldName
    { regex: /^#subform\[\d+\]\.Pt(\d+)Line(\w+)_(.+)\[0\]$/, groups: [1, 2, 3] },
    // Pattern 2: #subform[N].#area[M].PtXLineY_FieldName
    { regex: /^#subform\[\d+\]\.#area\[\d+\]\.Pt(\d+)Line(\w+)_(.+)\[0\]$/, groups: [1, 2, 3] },
    // Pattern 3: P5[0].Part2_Line3_FieldName
    { regex: /^P\d+\[0\]\.Part(\d+)_Line(\w+)_(.+)\[0\]$/, groups: [1, 2, 3] },
    // Pattern 4: P4[0].Part2_Line1_FieldName (no [0] at end)
    { regex: /^P\d+\[0\]\.Part(\d+)_Line(\w+)_(.+)$/, groups: [1, 2, 3] },
    // Pattern 5: P5[0].#area[0].Part2_Line10_SSN
    { regex: /^P\d+\[0\]\.#area\[\d+\]\.Part(\d+)_Line(\w+)_(.+)\[0\]$/, groups: [1, 2, 3] },
    // Pattern 6: Part10_Line4_DateofSignature
    { regex: /^Part(\d+)_Line(\w+)_(.+)\[0\]$/, groups: [1, 2, 3] },
    // Pattern 7: P1[0].P1_Line4[0]
    { regex: /^P\d+\[0\]\.P(\d+)_Line(\w+)\[0\]$/, groups: [1, 2, null] },
  ];
  
  for (const pattern of patterns) {
    const match = clean.match(pattern.regex);
    if (match) {
      const partNum = match[pattern.groups[0]];
      const lineNum = match[pattern.groups[1]];
      const fieldName = pattern.groups[2] !== null ? match[pattern.groups[2]] : `Line${lineNum}`;
      
      const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
      
      parsed = {
        part: `part${partNum}`,
        line: lineNum,
        field: camelField,
        fieldName: fieldName,
        questionId: `part${partNum}.line${lineNum}.${camelField}`,
        pdfField: pdfFieldName
      };
      break;
    }
  }
  
  if (!parsed) {
    // Fallback for unmatched fields
    return null;
  }
  
  // Extract label from FieldNameAlt if available
  if (altName) {
    const label = extractLabelFromAltName(altName, parsed.line);
    if (label) {
      parsed.label = label;
    }
  }
  
  // Generate default label if not found
  if (!parsed.label) {
    parsed.label = generateDefaultLabel(parsed.line, parsed.fieldName);
  }
  
  return parsed;
}

// Extract clean label from FieldNameAlt
function extractLabelFromAltName(altName, lineNum) {
  // Format examples:
  // "Part 2. Information About You. 1. Your Full Name. Enter Family Name (Last Name)."
  // "1. Family Name (Last Name)"
  
  const parts = altName.split('.');
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    
    // Look for line number pattern
    const lineMatch = part.match(/^(\d+[a-z]?)\s+(.+)/i);
    if (lineMatch) {
      const [, num, text] = lineMatch;
      
      // Check if this matches our line number
      if (num.toLowerCase() === lineNum.toLowerCase()) {
        // Check if next part has more detail
        if (i + 1 < parts.length) {
          const nextPart = parts[i + 1].trim();
          // Skip meta parts
          if (nextPart && !nextPart.match(/^(Part|Item|Page|This is|Enter|Provide|Select)/i)) {
            return `${num}. ${nextPart}`;
          }
          // If next part starts with "Enter" or "Provide", use it
          if (nextPart && nextPart.match(/^(Enter|Provide|Select)\s+(.+)/i)) {
            const actionMatch = nextPart.match(/^(Enter|Provide|Select)\s+(.+)/i);
            return `${num}. ${actionMatch[2]}`;
          }
        }
        return `${num}. ${text}`;
      }
    }
  }
  
  return null;
}

// Generate default label
function generateDefaultLabel(lineNum, fieldName) {
  const labelMap = {
    'FamilyName': 'Family Name (Last Name)',
    'GivenName': 'Given Name (First Name)',
    'MiddleName': 'Middle Name',
    'DateOfBirth': 'Date of Birth',
    'DateofBirth': 'Date of Birth',
    'AlienNumber': 'Alien Registration Number (A-Number)',
    'SSN': 'U.S. Social Security Number',
    'StreetNumberName': 'Street Number and Name',
    'CityTown': 'City or Town',
    'State': 'State',
    'ZipCode': 'ZIP Code',
    'Country': 'Country',
    'Email': 'Email Address',
    'DayPhone': 'Daytime Phone Number',
    'MobilePhone': 'Mobile Phone Number',
  };
  
  const label = labelMap[fieldName] || fieldName.replace(/([A-Z])/g, ' $1').trim();
  return `${lineNum}. ${label}`;
}

// ============================================================================
// DETECT FIELD TYPE AND GENERATE PROPER VALUES
// ============================================================================

function analyzeField(field, parsed) {
  const fieldName = parsed.field.toLowerCase();
  const label = (parsed.label || '').toLowerCase();
  
  // Text field
  if (field.type === 'PDFTextField') {
    return analyzeTextField(fieldName, label);
  }
  
  // Checkbox/Radio
  if (field.type === 'Button') {
    return analyzeButtonField(field, parsed, fieldName, label);
  }
  
  return { type: 'text' };
}

function analyzeTextField(fieldName, label) {
  // Date fields
  if (fieldName.includes('date') || fieldName.includes('dob') || label.includes('date')) {
    return {
      type: 'date',
      placeholder: 'MM/DD/YYYY',
      helpText: 'Enter date in MM/DD/YYYY format'
    };
  }
  
  // SSN
  if (fieldName.includes('ssn')) {
    return {
      type: 'ssn',
      placeholder: '###-##-####',
      helpText: 'Enter your 9-digit Social Security Number'
    };
  }
  
  // Phone
  if (fieldName.includes('phone')) {
    return {
      type: 'tel',
      placeholder: '(###) ###-####',
      helpText: 'Enter 10-digit phone number'
    };
  }
  
  // Email
  if (fieldName.includes('email')) {
    return {
      type: 'email',
      placeholder: 'email@example.com',
      helpText: 'Enter a valid email address'
    };
  }
  
  // State
  if (fieldName.includes('state') && !fieldName.includes('statement')) {
    return {
      type: 'select',
      options: 'US_STATES',
      helpText: 'Select your state'
    };
  }
  
  // Country
  if (fieldName.includes('country')) {
    return {
      type: 'select',
      options: 'COUNTRIES',
      helpText: 'Select country'
    };
  }
  
  return { type: 'text' };
}

function analyzeButtonField(field, parsed, fieldName, label) {
  // Check if it's a yes/no field
  if (fieldName.includes('yes') || fieldName.includes('no') || 
      parsed.fieldName === 'Yes' || parsed.fieldName === 'No') {
    return {
      type: 'radio',
      value: fieldName.includes('yes') || parsed.fieldName === 'Yes' ? 'yes' : 'no'
    };
  }
  
  // Check if it's male/female
  if (fieldName.includes('male') || fieldName.includes('female') ||
      parsed.fieldName === 'Male' || parsed.fieldName === 'Female') {
    return {
      type: 'radio',
      value: fieldName.includes('female') || parsed.fieldName === 'Female' ? 'female' : 'male'
    };
  }
  
  // For checkboxes with options, use meaningful values
  if (field.options && field.options.length > 0) {
    // Filter out "Off" values
    const validOptions = field.options.filter(opt => opt !== 'Off' && opt !== '');
    
    if (validOptions.length > 0) {
      // Try to determine meaningful value
      const value = determineCheckboxValue(parsed, validOptions[0]);
      return {
        type: 'checkbox',
        value: value
      };
    }
  }
  
  return { type: 'checkbox' };
}

function determineCheckboxValue(parsed, optionValue) {
  const fieldName = parsed.fieldName.toLowerCase();
  const label = (parsed.label || '').toLowerCase();
  
  // Application type checkboxes
  if (fieldName.includes('apptype') || label.includes('application type')) {
    const typeMap = {
      '1': 'reentry_permit',
      '2': 'refugee_travel',
      '3': 'advance_parole',
      '4': 'other'
    };
    return typeMap[optionValue] || optionValue;
  }
  
  // Relationship checkboxes
  if (fieldName.includes('relationship') || label.includes('relationship')) {
    const relMap = {
      '1': 'spouse',
      '2': 'parent',
      '3': 'child',
      '4': 'sibling'
    };
    return relMap[optionValue] || optionValue;
  }
  
  // Default: use the option value or a cleaned version
  return optionValue.toLowerCase().replace(/[^a-z0-9]/g, '_');
}

// ============================================================================
// DETERMINE IF FIELD IS REQUIRED
// ============================================================================

function isFieldRequired(parsed) {
  const fieldName = parsed.field.toLowerCase();
  
  // Core required fields
  const requiredPatterns = [
    'familyname', 'givenname', 'firstname', 'lastname',
    'dateofbirth', 'dob',
    'signature'
  ];
  
  for (const pattern of requiredPatterns) {
    if (fieldName.includes(pattern)) {
      return true;
    }
  }
  
  // Optional fields
  const optionalPatterns = [
    'middlename', 'othername', 'previous', 'former',
    'additional', 'ifany', 'optional'
  ];
  
  for (const pattern of optionalPatterns) {
    if (fieldName.includes(pattern) || (parsed.label || '').toLowerCase().includes(pattern)) {
      return false;
    }
  }
  
  // Default: optional
  return false;
}

// ============================================================================
// GROUP AND DEDUPLICATE FIELDS
// ============================================================================

function processAndGroupFields(fields) {
  const processedFields = [];
  const seenQuestionIds = new Map(); // Track unique question IDs
  let skippedCount = 0;
  
  for (const field of fields) {
    const parsed = parseFieldName(field.name, field.altName);
    if (!parsed) {
      skippedCount++;
      continue;
    }
    
    const analysis = analyzeField(field, parsed);
    const required = isFieldRequired(parsed);
    
    const processedField = {
      raw: field,
      parsed,
      analysis,
      required
    };
    
    // Handle duplicates intelligently
    const key = parsed.questionId;
    if (seenQuestionIds.has(key)) {
      // If it's a radio/checkbox with a value, it's a valid duplicate
      if (analysis.value) {
        processedFields.push(processedField);
      }
      // Otherwise skip duplicate
    } else {
      seenQuestionIds.set(key, true);
      processedFields.push(processedField);
    }
  }
  
  // Group by sections
  const sections = {};
  
  for (const field of processedFields) {
    const sectionId = field.parsed.part;
    
    if (!sections[sectionId]) {
      sections[sectionId] = {
        id: sectionId,
        title: getSectionTitle(sectionId),
        description: getSectionDescription(sectionId),
        fields: []
      };
    }
    
    sections[sectionId].fields.push(field);
  }
  
  // Sort sections
  const sortedSections = Object.values(sections).sort((a, b) => {
    const aNum = parseInt(a.id.replace('part', '')) || 999;
    const bNum = parseInt(b.id.replace('part', '')) || 999;
    return aNum - bNum;
  });
  
  return { sections: sortedSections, skippedCount };
}

function getSectionTitle(sectionId) {
  const titles = {
    'part1': 'Part 1: Application Type',
    'part2': 'Part 2: Information About You',
    'part3': 'Part 3: Processing Information',
    'part4': 'Part 4: Information About Your Trip',
    'part5': 'Part 5: Additional Information',
    'part6': 'Part 6: Applicant\'s Statement',
    'part7': 'Part 7: Information About Your Trip',
    'part10': 'Part 10: Applicant\'s Statement, Contact Information, and Signature',
    'part11': 'Part 11: Interpreter\'s Contact Information and Signature',
    'part12': 'Part 12: Preparer\'s Contact Information and Signature',
    'part13': 'Part 13: Additional Information',
  };
  
  return titles[sectionId] || `Part ${sectionId.replace('part', '')}`;
}

function getSectionDescription(sectionId) {
  const descriptions = {
    'part1': 'Select the type of application you are filing',
    'part2': 'Provide your personal information',
    'part10': 'Sign and date your application',
    'part11': 'If applicable, interpreter information',
    'part12': 'If applicable, preparer information',
    'part13': 'Provide any additional information',
  };
  
  return descriptions[sectionId] || `Complete all fields in Part ${sectionId.replace('part', '')}`;
}

// ============================================================================
// GENERATE OUTPUT FILES
// ============================================================================

function generateMappingsFile(sections, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let totalMappings = 0;
  sections.forEach(s => totalMappings += s.fields.length);
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Complete Field Mappings\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` *\n`;
  content += ` * Comprehensive mappings for ALL ${formName.toUpperCase()} form fields\n`;
  content += ` * Total mappings: ${totalMappings}\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: "text" | "radio" | "checkbox" | "date" | "ssn" | "email" | "tel" | "select";\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_FIELD_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const section of sections) {
    content += `  // ${section.title}\n`;
    
    for (const field of section.fields) {
      content += `  {\n`;
      content += `    questionId: "${field.parsed.questionId}",\n`;
      content += `    pdfField: "${field.parsed.pdfField}",\n`;
      
      if (field.analysis.type && field.analysis.type !== 'text') {
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

function generateDefinitionFile(sections, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const formId = formName.toLowerCase();
  
  let content = `/**\n`;
  content += ` * ${formName.toUpperCase()} Form Registry Definition\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` */\n\n`;
  
  content += `import { FormDefinition } from '../forms-registry';\n`;
  content += `import { ${upperFormName}_FIELD_MAPPINGS } from '../form-mappings/${formId}-field-mappings';\n\n`;
  
  content += `export const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  content += `  id: "${formId}",\n`;
  content += `  code: "${formName.toUpperCase()}",\n`;
  content += `  name: "${formName.toUpperCase()} Form",\n`;
  content += `  description: "Complete ${formName.toUpperCase()} form",\n`;
  content += `  category: "travel", // TODO: Update if needed\n`;
  content += `  estimatedTime: "60-90 minutes",\n`;
  content += `  filingFee: 0, // TODO: Update\n`;
  content += `  price: 60,\n`;
  content += `  sections: [\n`;
  
  for (const section of sections) {
    content += `    {\n`;
    content += `      id: "${section.id}",\n`;
    content += `      title: "${section.title}",\n`;
    content += `      description: "${section.description}",\n`;
    content += `      questions: [\n`;
    
    // Group fields by questionId to handle radio/checkbox groups
    const questionGroups = new Map();
    for (const field of section.fields) {
      const qid = field.parsed.questionId;
      if (!questionGroups.has(qid)) {
        questionGroups.set(qid, []);
      }
      questionGroups.get(qid).push(field);
    }
    
    for (const [qid, fields] of questionGroups) {
      const firstField = fields[0];
      
      content += `        {\n`;
      content += `          id: "${qid}",\n`;
      content += `          type: "${firstField.analysis.type}",\n`;
      content += `          label: "${firstField.parsed.label}",\n`;
      content += `          required: ${firstField.required},\n`;
      
      if (firstField.analysis.placeholder) {
        content += `          placeholder: "${firstField.analysis.placeholder}",\n`;
      }
      
      if (firstField.analysis.helpText) {
        content += `          helpText: "${firstField.analysis.helpText}",\n`;
      }
      
      // Handle options for radio/checkbox groups
      if (fields.length > 1 && fields[0].analysis.value) {
        content += `          options: [\n`;
        for (const field of fields) {
          if (field.analysis.value) {
            const label = field.analysis.value.charAt(0).toUpperCase() + 
                         field.analysis.value.slice(1).replace(/_/g, ' ');
            content += `            { value: "${field.analysis.value}", label: "${label}" },\n`;
          }
        }
        content += `          ],\n`;
      } else if (firstField.analysis.options === 'US_STATES') {
        content += `          options: US_STATES,\n`;
      } else if (firstField.analysis.options === 'COUNTRIES') {
        content += `          options: COUNTRIES,\n`;
      }
      
      content += `        },\n`;
    }
    
    content += `      ],\n`;
    content += `    },\n`;
  }
  
  content += `  ],\n`;
  content += `  pdfFieldMappings: ${upperFormName}_FIELD_MAPPINGS,\n`;
  content += `  requiredDocuments: [],\n`;
  content += `  instructions: [],\n`;
  content += `};\n`;
  
  return content;
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: node scripts/advanced-form-generator.js <path-to-pdf>');
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
    
    // Process and group
    const { sections, skippedCount } = processAndGroupFields(fields);
    console.log(`✅ Processed ${fields.length - skippedCount} fields (${skippedCount} skipped)\n`);
    console.log(`✅ Organized into ${sections.length} sections\n`);
    
    // Generate files
    const formName = path.basename(pdfPath, '.pdf').replace(/[^a-zA-Z0-9]/g, '');
    
    const mappingsContent = generateMappingsFile(sections, formName);
    const definitionContent = generateDefinitionFile(sections, formName);
    
    // Save files
    const mappingsPath = `src/lib/constants/form-mappings/${formName}-field-mappings.ts`;
    const definitionPath = `src/lib/constants/form-definitions/${formName}-definition.ts`;
    
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
    
    // Statistics
    let totalFields = 0;
    let requiredCount = 0;
    const typeCounts = {};
    
    sections.forEach(section => {
      section.fields.forEach(field => {
        totalFields++;
        if (field.required) requiredCount++;
        const type = field.analysis.type || 'text';
        typeCounts[type] = (typeCounts[type] || 0) + 1;
      });
    });
    
    console.log('📊 STATISTICS:\n');
    console.log(`Total Fields: ${totalFields}`);
    console.log(`Sections: ${sections.length}`);
    console.log(`Required: ${requiredCount}`);
    console.log(`Optional: ${totalFields - requiredCount}`);
    console.log(`\nField Types:`);
    Object.entries(typeCounts).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\n✅ DONE! Review the generated files.\n');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
