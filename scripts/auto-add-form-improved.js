#!/usr/bin/env node
/**
 * Improved Automatic Form Generator
 * 
 * Features:
 * - Unlocks encrypted PDFs
 * - Detects proper field types
 * - Adds placeholders
 * - Marks required fields
 * - Generates proper labels
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Unlock PDF if encrypted
function unlockPdf(pdfPath) {
  const unlockedPath = pdfPath.replace('.pdf', '-unlocked.pdf');
  try {
    execSync(`pdftk "${pdfPath}" input_pw "" output "${unlockedPath}" 2>/dev/null`, { stdio: 'ignore' });
    return unlockedPath;
  } catch (error) {
    // If unlock fails, return original
    return pdfPath;
  }
}

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
      } else if (line.startsWith('FieldFlags:')) {
        currentField.flags = parseInt(line.substring(12).trim());
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

function pdfFieldToQuestionId(pdfFieldName) {
  const arrayIndexMatch = pdfFieldName.match(/\[(\d+)\]$/);
  const arrayIndex = arrayIndexMatch ? arrayIndexMatch[1] : null;
  
  let clean = pdfFieldName
    .replace(/^form1\[0\]\.#subform\[\d+\]\./, '')
    .replace(/^form1\[0\]\.#pageSet\[\d+\]\.Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/g, '');
  
  if (clean.includes('BarCode') || clean.includes('PDF417')) {
    return null;
  }
  
  const match = clean.match(/^P(\d+)_Line(\w+)_(.+)$/);
  if (match) {
    const [, partNum, lineNum, fieldName] = match;
    const camelField = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    const baseId = `part${partNum}.${lineNum}.${camelField}`;
    return arrayIndex && arrayIndex !== '0' ? `${baseId}_${arrayIndex}` : baseId;
  }
  
  const checkboxMatch = clean.match(/^P(\d+)_checkbox(\w+)$/);
  if (checkboxMatch) {
    const [, partNum, checkboxNum] = checkboxMatch;
    const baseId = `part${partNum}.checkbox${checkboxNum}`;
    return arrayIndex && arrayIndex !== '0' ? `${baseId}_${arrayIndex}` : baseId;
  }
  
  const baseId = clean
    .replace(/_/g, '.')
    .replace(/([A-Z])/g, (m) => m.toLowerCase())
    .replace(/^\./, '');
  
  return arrayIndex && arrayIndex !== '0' ? `${baseId}_${arrayIndex}` : baseId;
}

// Determine if field is required based on flags and name
function isFieldRequired(field) {
  // FieldFlags bit 1 = required
  if (field.flags && (field.flags & 2)) {
    return true;
  }
  
  // Common required fields by name
  const requiredPatterns = [
    /FamilyName/i,
    /GivenName/i,
    /FirstName/i,
    /LastName/i,
    /DateOfBirth/i,
    /ANumber/i,
    /AlienNumber/i,
    /Signature/i,
  ];
  
  return requiredPatterns.some(pattern => pattern.test(field.name));
}

// Get proper field type
function getFieldType(field) {
  const fieldName = field.name.toLowerCase();
  
  // Check if it's actually a text field despite being marked as Button
  if (field.type === 'Button') {
    // If field name suggests it's a text input, treat as text
    if (fieldName.includes('name') || 
        fieldName.includes('address') || 
        fieldName.includes('city') ||
        fieldName.includes('number') ||
        fieldName.includes('date')) {
      return 'text';
    }
    return 'checkbox';
  }
  
  if (field.type === 'Choice') {
    return 'select';
  }
  
  // Detect specific types from field names
  if (fieldName.includes('email')) return 'email';
  if (fieldName.includes('phone') || fieldName.includes('telephone')) return 'tel';
  if (fieldName.includes('date') || fieldName.includes('dob')) return 'date';
  if (fieldName.includes('ssn') || fieldName.includes('socialsecurity')) return 'ssn';
  if (fieldName.includes('zip') || fieldName.includes('postal')) return 'text';
  
  return 'text';
}

// Get placeholder text
function getPlaceholder(fieldName, fieldType) {
  const name = fieldName.toLowerCase();
  
  if (fieldType === 'date') return 'MM/DD/YYYY';
  if (fieldType === 'email') return 'example@email.com';
  if (fieldType === 'tel') return '(555) 123-4567';
  if (fieldType === 'ssn') return '###-##-####';
  
  if (name.includes('familyname') || name.includes('lastname')) return 'Smith';
  if (name.includes('givenname') || name.includes('firstname')) return 'John';
  if (name.includes('middlename')) return 'M';
  if (name.includes('city')) return 'New York';
  if (name.includes('state')) return 'NY';
  if (name.includes('zip')) return '10001';
  if (name.includes('country')) return 'United States';
  if (name.includes('anumber') || name.includes('alien')) return 'A-';
  if (name.includes('street') || name.includes('address')) return '123 Main Street';
  
  return '';
}

function pdfFieldToLabel(pdfFieldName) {
  let clean = pdfFieldName
    .replace(/^form1\[0\]\.#subform\[\d+\]\./, '')
    .replace(/^form1\[0\]\.#pageSet\[\d+\]\.Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/g, '');
  
  const match = clean.match(/^P(\d+)_Line(\w+)_(.+)$/);
  if (match) {
    const [, , , fieldName] = match;
    
    const labelMap = {
      'FamilyName': 'Family Name (Last Name)',
      'GivenName': 'Given Name (First Name)',
      'MiddleName': 'Middle Name',
      'MiddleInitial': 'Middle Initial',
      'OtherNames': 'Other Names Used (if any)',
      'OtherLastNames': 'Other Last Names Used (if any)',
      'StreetNumberName': 'Street Number and Name',
      'StreetNumber': 'Street Number and Name',
      'AptSteFlrNumber': 'Apt./Ste./Flr. Number',
      'AptNumber': 'Apartment Number',
      'InCareOfName': 'In Care Of Name (if any)',
      'InCareofName': 'In Care Of Name (if any)',
      'CityOrTown': 'City or Town',
      'CityTown': 'City or Town',
      'State': 'State',
      'ZipCode': 'ZIP Code',
      'PostalCode': 'ZIP Code',
      'Province': 'Province',
      'Country': 'Country',
      'DateOfBirth': 'Date of Birth',
      'SSN': 'U.S. Social Security Number',
      'ANumber': 'A-Number (Alien Registration Number)',
      'AlienNumber': 'A-Number (Alien Registration Number)',
      'USCISNumber': 'USCIS Online Account Number',
      'USCISOnlineNumber': 'USCIS Online Account Number',
      'Gender': 'Gender',
      'Sex': 'Gender',
      'MaritalStatus': 'Marital Status',
      'EmailAddress': 'Email Address',
      'DaytimePhoneNumber': 'Daytime Phone Number',
      'MobilePhoneNumber': 'Mobile Phone Number',
      'PhoneNumber': 'Phone Number',
      'EveningPhoneNumber': 'Evening Phone Number',
      'CountryOfBirth': 'Country of Birth',
      'CountryOfCitizenship': 'Country of Citizenship or Nationality',
      'ClassOfAdmission': 'Class of Admission',
      'DateOfAdmission': 'Date You Became a Permanent Resident',
      'DateAdmitted': 'Date of Admission',
      'PortOfEntry': 'Port of Entry',
      'I94Number': 'I-94 Arrival-Departure Record Number',
      'PassportNumber': 'Passport Number',
      'TravelDocumentNumber': 'Travel Document Number',
      'Height': 'Height',
      'Weight': 'Weight (in pounds)',
      'EyeColor': 'Eye Color',
      'HairColor': 'Hair Color',
      'Race': 'Race',
      'Ethnicity': 'Ethnicity',
      'Signature': 'Signature',
      'DateSigned': 'Date Signed',
      'SignatureDate': 'Date of Signature',
    };
    
    return labelMap[fieldName] || fieldName.replace(/([A-Z])/g, ' $1').trim();
  }
  
  const checkboxMatch = clean.match(/^P(\d+)_checkbox(\w+)$/);
  if (checkboxMatch) {
    const checkboxNum = checkboxMatch[2];
    const checkboxLabels = {
      '1': 'Yes',
      '2': 'No',
      '3': 'Not Applicable',
    };
    return checkboxLabels[checkboxNum] || `Select if applicable`;
  }
  
  return clean
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, str => str.toUpperCase());
}

function getSectionTitle(sectionId, partNum) {
  const sectionTitles = {
    'part1': 'Part 1: Information About You',
    'part2': 'Part 2: Application Type or Reason for Filing',
    'part3': 'Part 3: Processing Information',
    'part4': 'Part 4: Biographic Information',
    'part5': 'Part 5: Accommodations for Individuals with Disabilities',
    'part6': 'Part 6: Applicant\'s Contact Information',
    'part7': 'Part 7: Applicant\'s Statement and Signature',
    'part8': 'Part 8: Interpreter\'s Contact Information',
    'part9': 'Part 9: Preparer\'s Contact Information',
  };
  
  return sectionTitles[sectionId] || `Part ${partNum}: Information`;
}

function getSectionDescription(sectionId) {
  const descriptions = {
    'part1': 'Provide your personal identifying information',
    'part2': 'Indicate the reason you are filing this application',
    'part3': 'Provide information about where you obtained your green card',
    'part4': 'Provide your physical description and biographic information',
    'part5': 'Request accommodations if you have a disability',
    'part6': 'Provide your contact information for USCIS to reach you',
    'part7': 'Sign and date your application',
    'part8': 'If using an interpreter, provide their information',
    'part9': 'If using a preparer, provide their information',
  };
  
  return descriptions[sectionId] || 'Complete this section';
}

function groupFieldsBySections(fields) {
  const sections = {};
  
  for (const field of fields) {
    const questionId = pdfFieldToQuestionId(field.name);
    if (!questionId) continue;
    
    const partMatch = questionId.match(/^part(\d+)\./);
    const sectionId = partMatch ? `part${partMatch[1]}` : 'section1';
    
    if (!sections[sectionId]) {
      const partNum = partMatch ? partMatch[1] : '1';
      sections[sectionId] = {
        id: sectionId,
        title: getSectionTitle(sectionId, partNum),
        description: getSectionDescription(sectionId),
        questions: []
      };
    }
    
    const fieldType = getFieldType(field);
    const isRequired = isFieldRequired(field);
    const placeholder = getPlaceholder(field.name, fieldType);
    
    const question = {
      id: questionId,
      type: fieldType,
      label: pdfFieldToLabel(field.name),
      pdfField: field.name,
      required: isRequired
    };
    
    if (placeholder && fieldType !== 'checkbox') {
      question.placeholder = placeholder;
    }
    
    if (fieldType === 'select' && field.options && field.options.length > 0) {
      question.options = field.options.map(opt => ({
        value: opt.toLowerCase().replace(/\s+/g, '-'),
        label: opt
      }));
    }
    
    sections[sectionId].questions.push(question);
  }
  
  return Object.values(sections);
}

function createMappingFile(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let content = `/**\n`;
  content += ` * Auto-generated field mappings for ${formName.toUpperCase()}\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
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
    if (!questionId) continue;
    
    const fieldType = getFieldType(field);
    
    if (fieldType === 'checkbox') {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}", type: "checkbox" },\n`;
    } else {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}" },\n`;
    }
  }
  
  content += `];\n`;
  
  return content;
}

function addToFormsRegistry(formId, formCode, formName, sections) {
  const registryPath = 'src/lib/constants/forms-registry.ts';
  let content = fs.readFileSync(registryPath, 'utf-8');
  
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let definition = `\nexport const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  definition += `  id: "${formId}",\n`;
  definition += `  code: "${formCode}",\n`;
  definition += `  name: "${formName}",\n`;
  definition += `  description: "${formName}",\n`;
  definition += `  category: "other",\n`;
  definition += `  estimatedTime: "30-45 minutes",\n`;
  definition += `  filingFee: 0,\n`;
  definition += `  price: 60,\n`;
  definition += `  sections: [\n`;
  
  for (const section of sections) {
    definition += `    {\n`;
    definition += `      id: "${section.id}",\n`;
    definition += `      title: "${section.title}",\n`;
    definition += `      description: "${section.description}",\n`;
    definition += `      questions: [\n`;
    
    for (const question of section.questions) {
      definition += `        {\n`;
      definition += `          id: "${question.id}",\n`;
      definition += `          type: "${question.type}",\n`;
      definition += `          label: "${question.label}",\n`;
      definition += `          required: ${question.required},\n`;
      
      if (question.placeholder) {
        definition += `          placeholder: "${question.placeholder}",\n`;
      }
      
      if (question.options && question.options.length > 0) {
        definition += `          options: [\n`;
        for (const option of question.options) {
          definition += `            { value: "${option.value}", label: "${option.label}" },\n`;
        }
        definition += `          ],\n`;
      }
      
      definition += `        },\n`;
    }
    
    definition += `      ],\n`;
    definition += `    },\n`;
  }
  
  definition += `  ],\n`;
  definition += `  requiredDocuments: [],\n`;
  definition += `  instructions: [],\n`;
  definition += `};\n`;
  
  const registryExportIndex = content.indexOf('const FORM_REGISTRY');
  if (registryExportIndex === -1) {
    throw new Error('Could not find FORM_REGISTRY');
  }
  
  content = content.slice(0, registryExportIndex) + definition + '\n' + content.slice(registryExportIndex);
  
  const otherSectionMatch = content.match(/\/\/ Other\s*\n\s*"[^"]+"\s*:\s*[^,]+,/);
  if (otherSectionMatch) {
    const insertPos = otherSectionMatch.index + otherSectionMatch[0].length;
    content = content.slice(0, insertPos) + `\n  "${formId}": ${upperFormName}_DEFINITION,` + content.slice(insertPos);
  }
  
  fs.writeFileSync(registryPath, content);
}

function addToFillPdf(formId) {
  const fillPdfPath = 'src/lib/pdf/fill-pdf.ts';
  let content = fs.readFileSync(fillPdfPath, 'utf-8');
  
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const mappingImport = `import { ${upperFormName}_AUTO_MAPPINGS } from "@/lib/constants/form-mappings/${formId}-auto-mappings";\n`;
  
  const lastImportIndex = content.lastIndexOf('import {');
  const endOfLine = content.indexOf('\n', lastImportIndex);
  content = content.slice(0, endOfLine + 1) + mappingImport + content.slice(endOfLine + 1);
  
  const switchMatch = content.match(/function getFormMappings\([^)]*\)[^{]*{[^}]*switch[^{]*{/);
  if (switchMatch) {
    const insertPos = switchMatch.index + switchMatch[0].length;
    const newCase = `\n    case "${formId}":\n      return ${upperFormName}_AUTO_MAPPINGS;`;
    content = content.slice(0, insertPos) + newCase + content.slice(insertPos);
  }
  
  fs.writeFileSync(fillPdfPath, content);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: node scripts/auto-add-form-improved.js <pdf-path> <form-code> <form-name>');
    console.error('\nExample:');
    console.error('  node scripts/auto-add-form-improved.js public/pdf-templates/i-90.pdf I-90 "Application to Replace Permanent Resident Card"');
    process.exit(1);
  }
  
  const [pdfPath, formCode, formName] = args;
  const formId = formCode.toLowerCase();
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`\n🚀 Auto-generating form: ${formCode}\n`);
  
  try {
    // Unlock PDF
    console.log('1️⃣  Unlocking PDF...');
    const unlockedPath = unlockPdf(pdfPath);
    console.log(`   ✅ PDF ready\n`);
    
    // Extract fields
    console.log('2️⃣  Extracting PDF fields...');
    const fields = extractFieldsWithPdftk(unlockedPath);
    const realFields = fields.filter(f => pdfFieldToQuestionId(f.name) !== null);
    console.log(`   ✅ Found ${realFields.length} fields\n`);
    
    // Create mapping file
    console.log('3️⃣  Creating mapping file...');
    const mappingContent = createMappingFile(realFields, formId);
    const mappingPath = `src/lib/constants/form-mappings/${formId}-auto-mappings.ts`;
    const dir = path.dirname(mappingPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(mappingPath, mappingContent);
    console.log(`   ✅ Created ${mappingPath}\n`);
    
    // Add to forms registry
    console.log('4️⃣  Adding to forms-registry.ts...');
    const sections = groupFieldsBySections(realFields);
    addToFormsRegistry(formId, formCode, formName, sections);
    console.log(`   ✅ Added ${formCode}_DEFINITION to registry\n`);
    
    // Add to fill-pdf
    console.log('5️⃣  Adding to fill-pdf.ts...');
    addToFillPdf(formId);
    console.log(`   ✅ Added mapping import and case\n`);
    
    // Cleanup unlocked file
    if (unlockedPath !== pdfPath && fs.existsSync(unlockedPath)) {
      fs.unlinkSync(unlockedPath);
    }
    
    console.log('✨ SUCCESS! Form fully integrated!\n');
    console.log('📋 Summary:');
    console.log(`   Form ID: ${formId}`);
    console.log(`   Form Code: ${formCode}`);
    console.log(`   Form Name: ${formName}`);
    console.log(`   Fields: ${realFields.length}`);
    console.log(`   Sections: ${sections.length}\n`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
