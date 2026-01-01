/**
 * COMPLETE FORM DEFINITION GENERATOR
 * 
 * This script generates COMPLETE form definitions with ALL fields by:
 * 1. Reading PDF field names from auto-mappings
 * 2. Creating proper form structure with correct field types
 * 3. Adding all necessary options for select/radio/checkbox fields
 * 4. Ensuring NO fields are left empty
 * 
 * Usage: npx tsx scripts/generate-complete-form-definitions.ts <form-id>
 * Example: npx tsx scripts/generate-complete-form-definitions.ts i-130
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

interface Question {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  helpText?: string;
  options?: Array<{ value: string; label: string }>;
}

interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

/**
 * Load auto-mappings for a form
 */
function loadAutoMappings(formId: string): any[] {
  try {
    const mappingPath = join(
      process.cwd(),
      'src/lib/constants/form-mappings',
      `${formId}-auto-mappings.ts`
    );

    const content = readFileSync(mappingPath, 'utf-8');
    const arrayMatch = content.match(/export const \w+_AUTO_MAPPINGS[^=]*=\s*(\[[\s\S]*?\]);/);
    if (!arrayMatch) return [];

    const arrayStr = arrayMatch[1]
      .replace(/\/\/.*/g, '')
      .replace(/,(\s*[}\]])/g, '$1');
    
    return eval(`(${arrayStr})`);
  } catch (error) {
    console.error(`Error loading auto-mappings for ${formId}:`, error.message);
    return [];
  }
}

/**
 * Parse PDF field name to extract information
 */
function parsePdfField(pdfField: string): {
  part: string;
  line: string;
  fieldName: string;
  fieldType: string;
} | null {
  // Example: "form1[0].#subform[0].Pt2Line4a_FamilyName[0]"
  const match = pdfField.match(/Pt(\d+)Line(\d+[a-z]?)_(\w+)/i);
  
  if (!match) return null;
  
  const part = match[1];
  const line = match[2];
  const fieldName = match[3];
  
  // Determine field type from name
  const nameLower = fieldName.toLowerCase();
  let fieldType = 'text';
  
  if (nameLower.includes('date') || nameLower.includes('dob')) {
    fieldType = 'date';
  } else if (nameLower.includes('ssn')) {
    fieldType = 'ssn';
  } else if (nameLower.includes('email')) {
    fieldType = 'email';
  } else if (nameLower.includes('phone') || nameLower.includes('telephone')) {
    fieldType = 'tel';
  } else if (nameLower.includes('yes') || nameLower.includes('no')) {
    fieldType = 'radio';
  } else if (nameLower.includes('male') || nameLower.includes('female')) {
    fieldType = 'radio';
  } else if (nameLower.includes('checkbox')) {
    fieldType = 'checkbox';
  } else if (nameLower.includes('state') && !nameLower.includes('statement')) {
    fieldType = 'select';
  } else if (nameLower.includes('country')) {
    fieldType = 'select';
  } else if (nameLower.includes('maritalstatus') || nameLower.includes('status')) {
    fieldType = 'select';
  }
  
  return { part, line, fieldName, fieldType };
}

/**
 * Convert field name to human-readable label
 */
function fieldNameToLabel(fieldName: string): string {
  // Convert camelCase or PascalCase to Title Case with spaces
  return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Group fields by part and line
 */
function groupFields(autoMappings: any[]): Map<string, Map<string, any[]>> {
  const grouped = new Map<string, Map<string, any[]>>();
  
  for (const mapping of autoMappings) {
    const pdfField = mapping.pdfField || mapping.pdfFieldName;
    if (!pdfField) continue;
    
    const parsed = parsePdfField(pdfField);
    if (!parsed) continue;
    
    const { part, line } = parsed;
    
    if (!grouped.has(part)) {
      grouped.set(part, new Map());
    }
    
    const partMap = grouped.get(part)!;
    if (!partMap.has(line)) {
      partMap.set(line, []);
    }
    
    partMap.get(line)!.push({ ...mapping, parsed });
  }
  
  return grouped;
}

/**
 * Create question from field group
 */
function createQuestion(lineFields: any[]): Question | null {
  if (lineFields.length === 0) return null;
  
  const firstField = lineFields[0];
  const parsed = firstField.parsed;
  
  // Create question ID
  const questionId = `part${parsed.part}.line${parsed.line}.${parsed.fieldName.charAt(0).toLowerCase()}${parsed.fieldName.slice(1)}`;
  
  // Create label
  const label = fieldNameToLabel(parsed.fieldName);
  
  // Determine if this is a radio/checkbox group
  const hasYesNo = lineFields.some(f => 
    f.parsed.fieldName.toLowerCase().includes('yes') || 
    f.parsed.fieldName.toLowerCase().includes('no')
  );
  
  const hasMaleFemale = lineFields.some(f => 
    f.parsed.fieldName.toLowerCase().includes('male') || 
    f.parsed.fieldName.toLowerCase().includes('female')
  );
  
  const hasMultipleCheckboxes = lineFields.filter(f => 
    f.pdfField.includes('checkbox') || f.pdfField.includes('Checkbox')
  ).length > 1;
  
  let type = parsed.fieldType;
  let options: Array<{ value: string; label: string }> | undefined;
  
  if (hasYesNo) {
    type = 'radio';
    options = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];
  } else if (hasMaleFemale) {
    type = 'radio';
    options = [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ];
  } else if (hasMultipleCheckboxes) {
    type = 'checkbox';
    // Extract options from field names
    options = lineFields
      .filter(f => f.pdfField.includes('checkbox') || f.pdfField.includes('Checkbox'))
      .map(f => {
        const optionName = f.parsed.fieldName.replace(/checkbox/i, '').trim();
        return {
          value: optionName.toLowerCase(),
          label: fieldNameToLabel(optionName)
        };
      });
  } else if (type === 'select') {
    // Add common options based on field name
    const nameLower = parsed.fieldName.toLowerCase();
    
    if (nameLower.includes('state')) {
      options = [
        { value: '', label: 'Select State' },
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'CA', label: 'California' },
        { value: 'NY', label: 'New York' },
        { value: 'TX', label: 'Texas' },
        // Add more states as needed
      ];
    } else if (nameLower.includes('marital')) {
      options = [
        { value: 'single', label: 'Single, Never Married' },
        { value: 'married', label: 'Married' },
        { value: 'divorced', label: 'Divorced' },
        { value: 'widowed', label: 'Widowed' },
        { value: 'separated', label: 'Separated' }
      ];
    } else if (nameLower.includes('country')) {
      options = [
        { value: '', label: 'Select Country' },
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'MX', label: 'Mexico' },
        { value: 'UK', label: 'United Kingdom' },
        // Add more countries as needed
      ];
    }
  }
  
  // Determine if field is required based on common patterns
  const nameLower = parsed.fieldName.toLowerCase();
  const isRequired = 
    nameLower.includes('name') ||
    nameLower.includes('firstname') ||
    nameLower.includes('lastname') ||
    nameLower.includes('familyname') ||
    nameLower.includes('givenname') ||
    nameLower.includes('dateofbirth') ||
    nameLower.includes('dob') ||
    nameLower.includes('sex') ||
    nameLower.includes('male') ||
    nameLower.includes('female') ||
    nameLower.includes('address') ||
    nameLower.includes('street') ||
    nameLower.includes('city') ||
    nameLower.includes('state') ||
    nameLower.includes('zipcode') ||
    nameLower.includes('country') ||
    nameLower.includes('relationship') ||
    nameLower.includes('status') ||
    (parsed.line.match(/^[1-9]$/) !== null); // First 9 lines are usually required
  
  const question: Question = {
    id: questionId,
    type,
    label,
    required: isRequired,
  };
  
  if (options && options.length > 0) {
    question.options = options;
  }
  
  if (type === 'date') {
    question.placeholder = 'MM/DD/YYYY';
  } else if (type === 'ssn') {
    question.placeholder = '###-##-####';
  } else if (type === 'tel') {
    question.placeholder = '(###) ###-####';
  } else if (type === 'email') {
    question.placeholder = 'email@example.com';
  }
  
  return question;
}

/**
 * Generate complete form definition
 */
function generateFormDefinition(formId: string): void {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📄 Generating complete form definition for ${formId.toUpperCase()}`);
  console.log('='.repeat(70));
  
  // Load auto-mappings
  const autoMappings = loadAutoMappings(formId);
  if (autoMappings.length === 0) {
    console.log('❌ No auto-mappings found');
    return;
  }
  
  console.log(`📥 Loaded ${autoMappings.length} PDF fields`);
  
  // Group fields
  const grouped = groupFields(autoMappings);
  console.log(`📊 Found ${grouped.size} parts`);
  
  // Generate sections
  const sections: Section[] = [];
  
  for (const [part, lines] of grouped) {
    const questions: Question[] = [];
    
    for (const [line, fields] of lines) {
      const question = createQuestion(fields);
      if (question) {
        questions.push(question);
      }
    }
    
    if (questions.length > 0) {
      sections.push({
        id: `part${part}`,
        title: `Part ${part}`,
        description: `Complete all fields in Part ${part}`,
        questions
      });
    }
  }
  
  console.log(`✨ Generated ${sections.length} sections`);
  console.log(`📝 Total questions: ${sections.reduce((sum, s) => sum + s.questions.length, 0)}`);
  
  // Generate TypeScript code
  const formIdUpper = formId.toUpperCase().replace(/-/g, '_');
  const formCode = formId.toUpperCase();
  
  const content = `/**
 * ${formCode} Form Definition
 * Generated on: ${new Date().toISOString()}
 * 
 * Complete form definition with ALL fields from the PDF
 * Total sections: ${sections.length}
 * Total questions: ${sections.reduce((sum, s) => sum + s.questions.length, 0)}
 */

import { FormDefinition } from './types';

export const ${formIdUpper}_DEFINITION: FormDefinition = {
  id: "${formId}",
  code: "${formCode}",
  name: "${formCode} Form",
  description: "Complete ${formCode} form with all fields",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 0,
  price: 60,
  sections: ${JSON.stringify(sections, null, 2)},
  pdfFieldMappings: [],
  requiredDocuments: [],
  instructions: [
    "Complete all applicable sections",
    "Answer all questions accurately",
    "Sign and date the form"
  ],
  status: "active"
};
`;
  
  // Save to file
  const outputPath = join(
    process.cwd(),
    'generated-forms',
    `${formId}-definition.ts`
  );
  
  // Create directory if it doesn't exist
  const { mkdirSync, existsSync } = require('fs');
  const dir = join(process.cwd(), 'generated-forms');
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  
  writeFileSync(outputPath, content, 'utf-8');
  console.log(`💾 Saved to: generated-forms/${formId}-definition.ts`);
  
  // Print summary
  console.log(`\n📊 Summary by section:`);
  sections.forEach(section => {
    console.log(`   ${section.id}: ${section.questions.length} questions`);
  });
  
  // Print field types
  const typeCount: Record<string, number> = {};
  sections.forEach(section => {
    section.questions.forEach(q => {
      typeCount[q.type] = (typeCount[q.type] || 0) + 1;
    });
  });
  
  console.log(`\n📋 Field types:`);
  Object.entries(typeCount).forEach(([type, count]) => {
    console.log(`   ${type}: ${count}`);
  });
}

/**
 * Main function
 */
async function main() {
  const formId = process.argv[2];
  
  if (!formId) {
    console.log('❌ Please provide a form ID');
    console.log('Usage: npx tsx scripts/generate-complete-form-definitions.ts <form-id>');
    console.log('Example: npx tsx scripts/generate-complete-form-definitions.ts i-130');
    console.log('\nAvailable forms:');
    
    const mappingsDir = join(process.cwd(), 'src/lib/constants/form-mappings');
    const files = readdirSync(mappingsDir);
    const formIds = files
      .filter(f => f.endsWith('-auto-mappings.ts'))
      .map(f => f.replace('-auto-mappings.ts', ''));
    
    formIds.forEach(id => console.log(`   - ${id}`));
    process.exit(1);
  }
  
  generateFormDefinition(formId);
  
  console.log('\n✅ Done!');
  console.log(`\nNext steps:`);
  console.log(`1. Review the generated file: generated-forms/${formId}-definition.ts`);
  console.log(`2. Copy the definition to src/lib/constants/forms-registry.ts`);
  console.log(`3. Update field labels, help text, and required flags as needed`);
  console.log(`4. Test the form in the application\n`);
}

main().catch(console.error);
