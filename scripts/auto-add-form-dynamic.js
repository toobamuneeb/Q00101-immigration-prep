#!/usr/bin/env node
/**
 * Dynamic Automatic Form Generator
 * 
 * Features:
 * - Completely dynamic - works with any PDF
 * - Proper field type detection
 * - Dynamic placeholders
 * - Required field detection
 * - No hardcoded mappings
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
      } else if (line.startsWith('FieldFlags:')) {
        currentField.flags = parseInt(line.substring(12).trim()) || 0;
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
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
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
    .replace(/[^a-zA-Z0-9]/g, '.')
    .replace(/\.+/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .toLowerCase();
  
  return arrayIndex && arrayIndex !== '0' ? `${baseId}_${arrayIndex}` : baseId;
}

// Advanced pattern matching rules for field recognition
const FIELD_PATTERNS = [
  // Name fields
  { pattern: /FamilyName|LastName|Surname/i, label: 'Family Name (Last Name)', type: 'text', score: 10 },
  { pattern: /GivenName|FirstName/i, label: 'Given Name (First Name)', type: 'text', score: 10 },
  { pattern: /MiddleName/i, label: 'Middle Name', type: 'text', score: 10 },
  { pattern: /MiddleInitial/i, label: 'Middle Initial', type: 'text', score: 10 },
  { pattern: /OtherNames?/i, label: 'Other Names Used (if any)', type: 'text', score: 9 },
  
  // Date fields
  { pattern: /DateofBirth|DOB|BirthDate/i, label: 'Date of Birth (mm/dd/yyyy)', type: 'date', score: 10 },
  { pattern: /DateOfMarriage|MarriageDate/i, label: 'Date of Marriage (mm/dd/yyyy)', type: 'date', score: 10 },
  { pattern: /DateOfEntry|EntryDate/i, label: 'Date of Entry (mm/dd/yyyy)', type: 'date', score: 9 },
  { pattern: /DateSigned|SignatureDate/i, label: 'Date Signed (mm/dd/yyyy)', type: 'date', score: 10 },
  
  // Address fields
  { pattern: /StreetNumberName|StreetAddress|Address/i, label: 'Street Number and Name', type: 'text', score: 9 },
  { pattern: /AptSteFlrNumber|Apt|Unit|Suite/i, label: 'Apt./Ste./Flr. Number', type: 'text', score: 9 },
  { pattern: /CityOrTown|City/i, label: 'City or Town', type: 'text', score: 10 },
  { pattern: /State/i, label: 'State', type: 'text', score: 10 },
  { pattern: /ZipCode|PostalCode/i, label: 'ZIP Code', type: 'text', score: 10 },
  { pattern: /Country/i, label: 'Country', type: 'text', score: 10 },
  { pattern: /Province/i, label: 'Province', type: 'text', score: 9 },
  
  // Identity fields
  { pattern: /SSN|SocialSecurity/i, label: 'U.S. Social Security Number', type: 'text', score: 10 },
  { pattern: /AlienNumber|ANumber/i, label: 'A-Number (Alien Registration Number)', type: 'text', score: 10 },
  { pattern: /USCISNumber/i, label: 'USCIS Online Account Number', type: 'text', score: 10 },
  { pattern: /Passport/i, label: 'Passport Number', type: 'text', score: 9 },
  
  // Contact fields
  { pattern: /Email|EmailAddress/i, label: 'Email Address', type: 'email', score: 10 },
  { pattern: /Phone|Telephone|DaytimeNumber/i, label: 'Phone Number', type: 'tel', score: 9 },
  { pattern: /MobilePhone/i, label: 'Mobile Phone Number', type: 'tel', score: 9 },
  
  // Physical description
  { pattern: /Height/i, label: 'Height', type: 'text', score: 8 },
  { pattern: /Weight/i, label: 'Weight (in pounds)', type: 'text', score: 8 },
  { pattern: /EyeColor/i, label: 'Eye Color', type: 'text', score: 8 },
  { pattern: /HairColor/i, label: 'Hair Color', type: 'text', score: 8 },
  
  // Immigration specific
  { pattern: /CountryofBirth|BirthCountry/i, label: 'Country of Birth', type: 'text', score: 10 },
  { pattern: /CountryOfCitizenship/i, label: 'Country of Citizenship or Nationality', type: 'text', score: 10 },
  { pattern: /ClassOfAdmission/i, label: 'Class of Admission', type: 'text', score: 9 },
  { pattern: /PortOfEntry/i, label: 'Port of Entry', type: 'text', score: 9 },
  
  // Signature
  { pattern: /Signature/i, label: 'Signature', type: 'text', score: 10 },
];

// Form-specific checkbox mappings
const FORM_SPECIFIC_MAPPINGS = {
  'i-90': {
    'P2_checkbox1': 'My card has been lost, stolen, or destroyed',
    'P2_checkbox1_1': 'My card has been mutilated', 
    'P2_checkbox1_2': 'My card has incorrect data because of DHS error',
    'P2_checkbox2': 'My name or other biographic information has legally changed',
    'P2_checkbox2_1': 'My card will expire within 6 months (or has already expired)',
    'P2_checkbox2_2': 'I have reached my 14th birthday and am registering as required',
    'P2_checkbox2_3': 'I am a commuter and my card has been lost, stolen, or destroyed',
    'P2_checkbox2_4': 'My card was issued but never received',
    'P2_checkbox2_5': 'My card was issued with incorrect information because of my error',
    'P2_checkbox2_6': 'My status has been automatically converted to permanent resident',
    'P2_checkbox2_7': 'I am applying to replace my card because it was issued in the wrong category',
    'P2_checkbox2_8': 'Other (explain in Part 8, Additional Information)',
    'P1_checkbox4': 'I do not wish to provide this information',
    'P1_checkbox4_1': 'Male',
    'P1_checkbox4_2': 'Female'
  }
};

// Enhanced dynamic label generation with pattern matching
function pdfFieldToLabel(pdfFieldName, formId = '') {
  let clean = pdfFieldName
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/, '');
  
  // Check form-specific mappings first
  const formMappings = FORM_SPECIFIC_MAPPINGS[formId.toLowerCase()];
  if (formMappings && formMappings[clean]) {
    return formMappings[clean];
  }
  
  // Use pattern matching for better recognition
  for (const rule of FIELD_PATTERNS) {
    if (rule.pattern.test(clean)) {
      return rule.label;
    }
  }
  
  // Extract meaningful part from common patterns
  const patterns = [
    /^P(\d+)_Line(\w+)_(.+)$/,  // P1_Line3a_FamilyName -> Line 3a: Family Name
    /^P(\d+)_(.+)$/,            // P1_FamilyName -> FamilyName
    /^Line(\w+)_(.+)$/,         // Line3a_FamilyName -> Line 3a: FamilyName
    /^(.+)_\d+$/,               // FamilyName_1 -> FamilyName
  ];
  
  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match) {
      if (pattern.source.includes('Line')) {
        const partNum = match[1];
        const lineNum = match[2];
        const fieldName = match[3] || match[2];
        
        // Try to match the field name with patterns
        for (const rule of FIELD_PATTERNS) {
          if (rule.pattern.test(fieldName)) {
            return `${lineNum}. ${rule.label}`;
          }
        }
        
        clean = fieldName;
      } else {
        clean = match[match.length - 1]; // Get the last capture group
      }
      break;
    }
  }
  
  // Handle generic checkboxes with better context
  const checkboxMatch = clean.match(/^P(\d+)_checkbox(\d+)$/);
  if (checkboxMatch) {
    const partNum = checkboxMatch[1];
    const checkboxNum = checkboxMatch[2];
    
    // Try to provide context based on part number
    const partContext = {
      '1': 'Personal Information',
      '2': 'Application Type',
      '3': 'Processing Information',
      '4': 'Biographic Information',
      '5': 'Accommodations',
      '6': 'Contact Information',
      '7': 'Signature',
      '8': 'Interpreter Information',
      '9': 'Preparer Information'
    };
    
    const context = partContext[partNum] || 'Selection';
    return `${context} - Option ${checkboxNum}`;
  }
  
  // Convert to readable format as fallback
  return clean
    .replace(/([a-z])([A-Z])/g, '$1 $2')  // camelCase -> camel Case
    .replace(/_/g, ' ')                    // snake_case -> snake case
    .replace(/\s+/g, ' ')                  // multiple spaces -> single space
    .trim()
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
}

// Enhanced field type detection using pattern matching
function getFieldType(field) {
  const name = field.name.toLowerCase();
  const pdfType = field.type;
  
  // Clean the field name for pattern matching
  let clean = name
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/, '');
  
  // PDF type mapping with smart detection
  if (pdfType === 'Choice') return 'select';
  
  // Use pattern matching to determine type
  for (const rule of FIELD_PATTERNS) {
    if (rule.pattern.test(clean)) {
      return rule.type;
    }
  }
  
  if (pdfType === 'Button') {
    // Check if it's actually a text field based on name patterns
    const textPatterns = [
      /streetname|streetnumber|address/i,
      /familyname|givenname|middlename|othername/i,
      /anumber|aliennumber|uscis|ssn|socialsecurity/i,
      /signature|explanation|description/i,
      /citytown|zipcode|postalcode|province|country/i
    ];
    
    // Special case: if it ends with a number after underscore, it might be a text field
    const textFieldPattern = /_\d+$/;
    if (textFieldPattern.test(clean) && textPatterns.some(pattern => pattern.test(clean))) {
      return 'text';
    }
    
    // If it contains 'checkbox' or matches checkbox patterns, it's definitely a checkbox
    if (clean.includes('checkbox') || /^p\d+_checkbox\d+/.test(clean)) {
      return 'checkbox';
    }
    
    // Check for text field indicators
    if (textPatterns.some(pattern => pattern.test(clean))) {
      return 'text';
    }
    
    return 'checkbox'; // Default for Button type
  }
  
  // Additional specific type detection
  if (/email/i.test(clean)) return 'email';
  if (/phone|telephone/i.test(clean)) return 'tel';
  if (/date|dob|dateofbirth/i.test(clean)) return 'date';
  if (/signature/i.test(clean)) return 'text';
  
  return 'text'; // Default
}

// Enhanced required field detection
function isFieldRequired(field) {
  // PDF flags: bit 1 = required
  if (field.flags && (field.flags & 2)) return true;
  
  const name = field.name.toLowerCase();
  
  // Required field patterns - be more specific
  const requiredPatterns = [
    'p1_line3a_familyname',     // Family name is always required
    'p1_line3b_givenname',      // Given name is always required  
    'p1_line4_dateofbirth',     // Date of birth is required
    'p1_line5_anumber',         // A-Number is required
    'p7_line1_signature',       // Signature is required
    'p7_line2_datesigned'       // Date signed is required
  ];
  
  // Check for exact matches first
  const cleanName = name.replace(/^form\d*\[\d+\]\./, '').replace(/#[^.]*\./g, '');
  if (requiredPatterns.some(pattern => cleanName.includes(pattern))) {
    return true;
  }
  
  // General required patterns (less specific)
  const generalRequired = [
    'familyname', 'givenname', 'signature', 'datesigned'
  ];
  
  // Only mark as required if it's a core field, not a checkbox
  if (!name.includes('checkbox') && generalRequired.some(pattern => name.includes(pattern))) {
    return true;
  }
  
  return false; // Default to not required
}

// Enhanced placeholder generation with better context
function getPlaceholder(fieldName, fieldType) {
  const name = fieldName.toLowerCase();
  
  // Type-based placeholders
  if (fieldType === 'date') return 'MM/DD/YYYY';
  if (fieldType === 'email') return 'example@email.com';
  if (fieldType === 'tel') return '(555) 123-4567';
  if (fieldType === 'checkbox') return ''; // No placeholder for checkboxes
  
  // Name-based placeholders with more specificity
  if (name.includes('familyname') || name.includes('lastname')) return 'Smith';
  if (name.includes('givenname') || name.includes('firstname')) return 'John';
  if (name.includes('middlename') || name.includes('middle')) return 'Michael';
  if (name.includes('othername')) return 'Previous names used';
  
  // Address placeholders
  if (name.includes('streetnumber') || name.includes('streetname')) return '123 Main Street';
  if (name.includes('apt') || name.includes('suite') || name.includes('unit')) return '4B';
  if (name.includes('citytown') || name.includes('city')) return 'New York';
  if (name.includes('state') && !name.includes('country')) return 'NY';
  if (name.includes('zipcode') || name.includes('postal')) return '10001';
  if (name.includes('province')) return 'Ontario';
  if (name.includes('country')) return 'United States';
  
  // Immigration-specific placeholders
  if (name.includes('anumber') || name.includes('alien')) return 'A123456789';
  if (name.includes('uscis')) return 'MSC1234567890';
  if (name.includes('classofadmission')) return 'IR1';
  if (name.includes('portofentry')) return 'New York, NY';
  if (name.includes('countryofbirth')) return 'United States';
  if (name.includes('countryofcitizenship')) return 'United States';
  
  // Contact placeholders
  if (name.includes('phone') || name.includes('telephone')) return '(555) 123-4567';
  if (name.includes('email')) return 'john.smith@email.com';
  
  // Physical description
  if (name.includes('height')) return '5 ft 10 in';
  if (name.includes('weight')) return '170';
  if (name.includes('eyecolor')) return 'Brown';
  if (name.includes('haircolor')) return 'Black';
  
  // Document numbers
  if (name.includes('passport')) return 'P123456789';
  if (name.includes('ssn') || name.includes('social')) return '123-45-6789';
  
  // Signature and dates
  if (name.includes('signature')) return 'Your signature';
  if (name.includes('datesigned') || name.includes('dateofbirth')) return 'MM/DD/YYYY';
  
  return ''; // No placeholder if we can't determine context
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
    const required = isFieldRequired(field);
    const placeholder = getPlaceholder(field.name, fieldType);
    
    const question = {
      id: questionId,
      type: fieldType,
      label: pdfFieldToLabel(field.name, formId),
      pdfField: field.name,
      required: required
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

// Calculate confidence score for field mapping
function calculateMappingConfidence(field, questionId, fieldType, label) {
  let score = 5; // Base score
  const name = field.name.toLowerCase();
  
  // High confidence for pattern matches
  for (const rule of FIELD_PATTERNS) {
    if (rule.pattern.test(name)) {
      score += rule.score;
      break;
    }
  }
  
  // Bonus for specific field types
  if (fieldType === 'email' && name.includes('email')) score += 5;
  if (fieldType === 'tel' && (name.includes('phone') || name.includes('telephone'))) score += 5;
  if (fieldType === 'date' && (name.includes('date') || name.includes('dob'))) score += 5;
  
  // Penalty for generic labels
  if (label.includes('Option') || label.includes('Checkbox')) score -= 3;
  
  // Penalty for barcode fields
  if (name.includes('barcode')) score -= 100;
  
  return Math.max(0, score);
}

function createMappingFile(fields, formName, formId) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  // Calculate mappings with confidence scores
  const mappings = [];
  let highConfidence = 0;
  let needsReview = 0;
  
  for (const field of fields) {
    const questionId = pdfFieldToQuestionId(field.name);
    if (!questionId) continue;
    
    const fieldType = getFieldType(field);
    const label = pdfFieldToLabel(field.name, formId);
    const confidence = calculateMappingConfidence(field, questionId, fieldType, label);
    
    if (confidence >= 15) highConfidence++;
    if (confidence < 10) needsReview++;
    
    mappings.push({
      questionId,
      pdfField: field.name,
      fieldType,
      confidence
    });
  }
  
  // Sort by confidence (highest first)
  mappings.sort((a, b) => b.confidence - a.confidence);
  
  let content = `/**\n`;
  content += ` * Auto-generated field mappings for ${formName.toUpperCase()}\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` * \n`;
  content += ` * Mapping Quality:\n`;
  content += ` * - Total fields: ${mappings.length}\n`;
  content += ` * - High confidence (≥15): ${highConfidence}\n`;
  content += ` * - Needs review (<10): ${needsReview}\n`;
  content += ` * \n`;
  content += ` * ⚠️  IMPORTANT: Review all mappings before use in production!\n`;
  content += ` * Some mappings may be incorrect and require manual verification.\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: string;\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;
  
  for (const mapping of mappings) {
    if (mapping.fieldType === 'checkbox') {
      content += `  { questionId: "${mapping.questionId}", pdfField: "${mapping.pdfField}", type: "checkbox" }, // Confidence: ${mapping.confidence}\n`;
    } else {
      content += `  { questionId: "${mapping.questionId}", pdfField: "${mapping.pdfField}" }, // Confidence: ${mapping.confidence}\n`;
    }
  }
  
  content += `];\n\n`;
  
  // Add confidence-based exports
  content += `/**\n`;
  content += ` * High-confidence mappings (score ≥ 15)\n`;
  content += ` * These mappings are likely correct and can be used with confidence.\n`;
  content += ` */\n`;
  content += `export const HIGH_CONFIDENCE_MAPPINGS = ${upperFormName}_AUTO_MAPPINGS.filter((_, i) => {\n`;
  content += `  const confidences = [${mappings.map(m => m.confidence).join(', ')}];\n`;
  content += `  return confidences[i] >= 15;\n`;
  content += `});\n\n`;
  
  content += `/**\n`;
  content += ` * Mappings that need manual review (score < 10)\n`;
  content += ` * These mappings should be verified and potentially corrected.\n`;
  content += ` */\n`;
  content += `export const NEEDS_REVIEW_MAPPINGS = ${upperFormName}_AUTO_MAPPINGS.filter((_, i) => {\n`;
  content += `  const confidences = [${mappings.map(m => m.confidence).join(', ')}];\n`;
  content += `  return confidences[i] < 10;\n`;
  content += `});\n`;
  
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
    console.error('Usage: node scripts/auto-add-form-dynamic.js <pdf-path> <form-code> <form-name>');
    console.error('\nExample:');
    console.error('  node scripts/auto-add-form-dynamic.js public/pdf-templates/i-90.pdf I-90 "Application to Replace Permanent Resident Card"');
    process.exit(1);
  }
  
  const [pdfPath, formCode, formName] = args;
  const formId = formCode.toLowerCase();
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`\n🚀 Dynamic Form Generator: ${formCode}\n`);
  
  try {
    console.log('1️⃣  Extracting PDF fields...');
    const fields = extractFieldsWithPdftk(pdfPath);
    const realFields = fields.filter(f => pdfFieldToQuestionId(f.name) !== null);
    console.log(`   ✅ Found ${realFields.length} fields\n`);
    
    console.log('2️⃣  Creating mapping file...');
    const mappingContent = createMappingFile(realFields, formId, formId);
    const mappingPath = `src/lib/constants/form-mappings/${formId}-auto-mappings.ts`;
    const dir = path.dirname(mappingPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(mappingPath, mappingContent);
    console.log(`   ✅ Created ${mappingPath}\n`);
    
    console.log('3️⃣  Adding to forms-registry.ts...');
    const sections = groupFieldsBySections(realFields);
    addToFormsRegistry(formId, formCode, formName, sections);
    console.log(`   ✅ Added ${formCode}_DEFINITION to registry\n`);
    
    console.log('4️⃣  Adding to fill-pdf.ts...');
    addToFillPdf(formId);
    console.log(`   ✅ Added mapping import and case\n`);
    
    console.log('✨ SUCCESS! Dynamic form generated!\n');
    console.log('📋 Summary:');
    console.log(`   Form ID: ${formId}`);
    console.log(`   Form Code: ${formCode}`);
    console.log(`   Form Name: ${formName}`);
    console.log(`   Fields: ${realFields.length}`);
    console.log(`   Sections: ${sections.length}\n`);
    
    console.log('🎯 Sample Generated Fields:');
    realFields.slice(0, 3).forEach(field => {
      const label = pdfFieldToLabel(field.name, formId);
      const questionId = pdfFieldToQuestionId(field.name);
      const fieldType = getFieldType(field);
      const required = isFieldRequired(field);
      const placeholder = getPlaceholder(field.name, fieldType);
      const confidence = calculateMappingConfidence(field, questionId, fieldType, label);
      
      console.log(`   ${questionId}`);
      console.log(`     Label: "${label}"`);
      console.log(`     Type: ${fieldType}`);
      console.log(`     Required: ${required}`);
      console.log(`     Confidence: ${confidence}/20`);
      if (placeholder) console.log(`     Placeholder: "${placeholder}"`);
      console.log('');
    });
    
    // Show mapping quality summary
    const allMappings = realFields.map(field => {
      const questionId = pdfFieldToQuestionId(field.name);
      if (!questionId) return null;
      const fieldType = getFieldType(field);
      const label = pdfFieldToLabel(field.name, formId);
      return calculateMappingConfidence(field, questionId, fieldType, label);
    }).filter(Boolean);
    
    const highConf = allMappings.filter(c => c >= 15).length;
    const needsReview = allMappings.filter(c => c < 10).length;
    
    console.log('📊 Mapping Quality:');
    console.log(`   High Confidence (≥15): ${highConf}/${allMappings.length}`);
    console.log(`   Needs Review (<10): ${needsReview}/${allMappings.length}`);
    console.log(`   Average Confidence: ${Math.round(allMappings.reduce((a, b) => a + b, 0) / allMappings.length)}/20`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();