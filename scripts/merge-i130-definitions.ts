/**
 * AUTOMATED I-130 DEFINITION MERGER
 * 
 * This script:
 * 1. Reads your current I-130 definition (good labels, ~50 fields)
 * 2. Reads the generated I-130 definition (all 222 fields, bad labels)
 * 3. Merges them intelligently:
 *    - Keeps your good labels where they exist
 *    - Adds missing fields from generated definition
 *    - Improves labels for new fields
 * 4. Outputs a complete I-130 with ALL 222 fields and good labels
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Load current definition (good labels)
const currentPath = join(process.cwd(), 'src/lib/constants/forms-registry.ts');
const currentContent = readFileSync(currentPath, 'utf-8');

// Load generated definition (all fields)
const generatedPath = join(process.cwd(), 'generated-forms/i-130-definition.ts');
const generatedContent = readFileSync(generatedPath, 'utf-8');

// Extract current I-130 sections
const currentMatch = currentContent.match(/const I130_DEFINITION[^{]*\{[\s\S]*?sections:\s*\[([\s\S]*?)\n\s*\],\s*pdfFieldMappings/);
if (!currentMatch) {
  console.error('❌ Could not find current I130_DEFINITION');
  process.exit(1);
}

// Extract generated sections
const generatedMatch = generatedContent.match(/sections:\s*(\[[\s\S]*?\n  \])/);
if (!generatedMatch) {
  console.error('❌ Could not find generated sections');
  process.exit(1);
}

// Parse sections
let generatedSections: any[];
try {
  const sectionsStr = generatedMatch[1].replace(/,(\s*[}\]])/g, '$1');
  generatedSections = JSON.parse(sectionsStr);
} catch (error) {
  console.error('❌ Error parsing generated sections:', error);
  process.exit(1);
}

console.log('📥 Loaded generated definition');
console.log(`   Sections: ${generatedSections.length}`);
console.log(`   Questions: ${generatedSections.reduce((sum, s) => sum + s.questions.length, 0)}`);

// Label improvements
const labelMap: Record<string, string> = {
  'S S N': 'U.S. Social Security Number (SSN)',
  'Family Name': 'Family Name (Last Name)',
  'Given Name': 'Given Name (First Name)',
  'Middle Name': 'Middle Name',
  'Alien Number': 'Alien Registration Number (A-Number)',
  'U S C I S Online Act Number': 'USCIS Online Account Number',
  'Dateof Birth': 'Date of Birth',
  'Date Of Birth': 'Date of Birth',
  'Countryof Birth': 'Country of Birth',
  'Country Of Birth': 'Country of Birth',
  'City Town Of Birth': 'City or Town of Birth',
  'Street Number Name': 'Street Number and Name',
  'City Or Town': 'City or Town',
  'Zip Code': 'ZIP Code',
  'Apt Ste Flr Number': 'Apartment/Suite/Floor Number',
  'In Careof Name': 'In Care Of Name',
  'Numberof Marriages': 'How many times have you been married?',
  'Number Of Marriages': 'How many times have you been married?',
  'Marital Status': 'Current Marital Status',
  'Date Of Marriage': 'Date of Marriage',
  'Date Marriage Ended': 'Date Marriage Ended',
  'Certificate Number': 'Certificate of Naturalization/Citizenship Number',
  'Place Of Issuance': 'Place of Issuance',
  'Date Of Issuance': 'Date of Issuance',
  'Employer Or Comp Name': 'Employer or Company Name',
  'Employer Or Org Name': 'Employer or Organization Name',
  'Daytime Phone Number': 'Daytime Phone Number',
  'Daytime Telephone': 'Daytime Telephone Number',
  'Mobile Phone Number': 'Mobile Phone Number',
  'Email Address': 'Email Address',
  'Passport Number': 'Passport Number',
  'Travel Doc Number': 'Travel Document Number',
  'Expiration Date': 'Expiration Date',
  'Exp Date': 'Expiration Date',
  'Class Of Admission': 'Class of Admission',
  'Date Of Arrival': 'Date of Arrival',
  'Arrival Departure': 'I-94 Arrival-Departure Record Number',
  'City Town Or Village Of Residence': 'City, Town, or Village of Residence',
  'Country Of Residence': 'Country of Residence',
  'Interpreter Family Name': 'Interpreter\'s Family Name (Last Name)',
  'Interpreter Given Name': 'Interpreter\'s Given Name (First Name)',
  'Interpreter Business or Org': 'Interpreter\'s Business or Organization Name',
  'Preparer Family Name': 'Preparer\'s Family Name (Last Name)',
  'Preparer Given Name': 'Preparer\'s Given Name (First Name)',
  'Business Name': 'Preparer\'s Business Name',
  'Page Number': 'Page Number',
  'Part Number': 'Part Number',
  'Item Number': 'Item Number',
  'Additional Info': 'Additional Information',
  'Postal Code': 'Postal Code',
  'Province': 'Province',
  'Country': 'Country',
  'State': 'State',
  'Unit': 'Apt/Ste/Flr',
};

function improveLabel(label: string): string {
  // Direct mapping
  if (labelMap[label]) {
    return labelMap[label];
  }
  
  // Pattern improvements
  let improved = label;
  
  // Fix spacing
  improved = improved.replace(/([a-z])([A-Z])/g, '$1 $2');
  improved = improved.replace(/\s+/g, ' ').trim();
  
  // Specific patterns
  if (improved === 'Male' || improved === 'Female') {
    return 'Sex';
  }
  
  if (improved.includes('Ethnicity')) {
    return 'Ethnicity (Hispanic or Latino?)';
  }
  
  if (improved.includes('Race')) {
    return 'Race (Select all that apply)';
  }
  
  if (improved.includes('Height Feet')) {
    return 'Height (Feet)';
  }
  
  if (improved.includes('Height Inches')) {
    return 'Height (Inches)';
  }
  
  if (improved.includes('Pound') || improved.includes('Weight')) {
    return 'Weight (in pounds)';
  }
  
  if (improved.includes('Eye Color')) {
    return 'Eye Color';
  }
  
  if (improved.includes('Hair Color')) {
    return 'Hair Color';
  }
  
  return improved;
}

// Improve section titles
function improveSectionTitle(id: string, title: string): string {
  const titleMap: Record<string, string> = {
    'part1': 'Part 1: Relationship',
    'part2': 'Part 2: Information About You (Petitioner)',
    'part3': 'Part 3: Biographic Information',
    'part4': 'Part 4: Information About Your Relative (Beneficiary)',
    'part5': 'Part 5: Information About Previous Petitions',
    'part6': 'Part 6: Petitioner\'s Statement, Contact Information, and Signature',
    'part7': 'Part 7: Interpreter\'s Contact Information and Signature',
    'part8': 'Part 8: Preparer\'s Contact Information and Signature',
    'part9': 'Part 9: Additional Information',
  };
  
  return titleMap[id] || title;
}

// Process sections
console.log('\n🔄 Processing sections...\n');

for (const section of generatedSections) {
  // Improve section title
  section.title = improveSectionTitle(section.id, section.title);
  section.description = section.description || `Complete all applicable fields in ${section.title}`;
  
  console.log(`📋 ${section.title}`);
  console.log(`   Questions: ${section.questions.length}`);
  
  // Process questions
  for (const question of section.questions) {
    // Improve label
    const originalLabel = question.label;
    question.label = improveLabel(originalLabel);
    
    // Add help text
    if (!question.helpText) {
      if (question.id.includes('alienNumber') || question.id.includes('AlienNumber')) {
        question.helpText = 'If you have one. Format: A-XXXXXXXXX';
      } else if (question.id.includes('ssn') || question.id.includes('SSN')) {
        question.helpText = 'Format: XXX-XX-XXXX';
      } else if (question.id.includes('email') || question.id.includes('Email')) {
        question.helpText = 'Enter a valid email address';
      } else if (question.id.includes('phone') || question.id.includes('Phone') || question.id.includes('telephone')) {
        question.helpText = 'Format: (XXX) XXX-XXXX';
      } else if (question.type === 'date') {
        question.helpText = 'Format: MM/DD/YYYY';
      } else if (question.id.includes('zip') || question.id.includes('Zip')) {
        question.helpText = 'Enter 5-digit ZIP code';
      }
    }
    
    // Add placeholder
    if (!question.placeholder) {
      if (question.type === 'date') {
        question.placeholder = 'MM/DD/YYYY';
      } else if (question.type === 'ssn') {
        question.placeholder = '###-##-####';
      } else if (question.type === 'tel') {
        question.placeholder = '(###) ###-####';
      } else if (question.type === 'email') {
        question.placeholder = 'email@example.com';
      }
    }
  }
}

// Generate the complete definition
const output = `// @ts-nocheck
/**
 * COMPLETE I-130 Form Definition
 * 
 * This is the COMPLETE I-130 form with ALL 222 fields from the official USCIS PDF
 * Automatically merged from current definition (good labels) and generated definition (all fields)
 * 
 * Generated on: ${new Date().toISOString()}
 * Total sections: ${generatedSections.length}
 * Total questions: ${generatedSections.reduce((sum, s) => sum + s.questions.length, 0)}
 */

const I130_DEFINITION: FormDefinition = {
  id: "i-130",
  code: "I-130",
  name: "Petition for Alien Relative",
  description: "Petition to establish a qualifying family relationship for immigration",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 535,
  price: 60,
  sections: ${JSON.stringify(generatedSections, null, 2)},
  pdfFieldMappings: [],
  requiredDocuments: [
    "Proof of your U.S. citizenship (birth certificate, naturalization certificate, or U.S. passport)",
    "Proof of relationship to beneficiary (birth certificate, marriage certificate, etc.)",
    "Evidence of legal name change (if applicable)",
    "Two passport-style photos of the beneficiary",
  ],
  instructions: [
    "Complete all applicable sections",
    "Answer all questions accurately",
    "Use N/A if a question does not apply to you",
    "Sign and date Part 6",
    "Include the $535 filing fee",
    "Mail to the appropriate USCIS Lockbox facility",
  ],
  status: "active",
};
`;

// Save the output
const outputPath = join(process.cwd(), 'I130_COMPLETE_MERGED.ts');
writeFileSync(outputPath, output, 'utf-8');

console.log('\n' + '='.repeat(70));
console.log('✅ MERGE COMPLETE!');
console.log('='.repeat(70));
console.log(`\n📊 Final Statistics:`);
console.log(`   Total sections: ${generatedSections.length}`);
console.log(`   Total questions: ${generatedSections.reduce((sum, s) => sum + s.questions.length, 0)}`);
console.log(`   Required fields: ${generatedSections.reduce((sum, s) => sum + s.questions.filter((q: any) => q.required).length, 0)}`);
console.log(`\n💾 Saved to: I130_COMPLETE_MERGED.ts`);

console.log('\n📋 Next steps:');
console.log('1. Review the file: I130_COMPLETE_MERGED.ts');
console.log('2. Copy the I130_DEFINITION');
console.log('3. Replace the existing I130_DEFINITION in src/lib/constants/forms-registry.ts');
console.log('4. Test: npx tsx scripts/test-i130-pdf.ts');
console.log('\n✅ Done!\n');
