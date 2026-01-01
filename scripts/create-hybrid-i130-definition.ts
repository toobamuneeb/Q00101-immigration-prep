/**
 * Create HYBRID I-130 Definition
 * 
 * Takes the complete structure (222 fields) from generated definition
 * and improves labels to be user-friendly
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Load the generated definition
const generatedPath = join(process.cwd(), 'generated-forms/i-130-definition.ts');
const generatedContent = readFileSync(generatedPath, 'utf-8');

// Extract the sections using JSON parse
const sectionsMatch = generatedContent.match(/sections: (\[[\s\S]*?\n  \])/);
if (!sectionsMatch) {
  console.error('Could not extract sections');
  process.exit(1);
}

let sectionsStr = sectionsMatch[1];
// Clean up for JSON parsing
sectionsStr = sectionsStr.replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas

const sections = JSON.parse(sectionsStr);

// Label improvements mapping
const labelImprovements: Record<string, string> = {
  // Common patterns
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
  'In Careof Name': 'In Care Of Name (if applicable)',
  'Numberof Marriages': 'Number of Times Married',
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
};

// Improve label
function improveLabel(label: string): string {
  // Check direct mapping
  if (labelImprovements[label]) {
    return labelImprovements[label];
  }
  
  // Pattern-based improvements
  let improved = label;
  
  // Fix spacing issues
  improved = improved.replace(/([a-z])([A-Z])/g, '$1 $2');
  improved = improved.replace(/\s+/g, ' ').trim();
  
  // Specific patterns
  if (improved.match(/^(Male|Female)$/)) {
    return 'Sex';
  }
  
  if (improved.includes('Ethnicity')) {
    return 'Ethnicity (Hispanic or Latino?)';
  }
  
  if (improved.includes('Race')) {
    return 'Race (Select all that apply)';
  }
  
  if (improved.includes('Height')) {
    return 'Height';
  }
  
  if (improved.includes('Weight') || improved.includes('Pound')) {
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

// Process all sections
for (const section of sections) {
  // Improve section titles
  section.title = section.title.replace(/Part (\d+)/, 'Part $1: Information');
  
  // Improve question labels
  for (const question of section.questions) {
    question.label = improveLabel(question.label);
    
    // Add help text for common fields
    if (question.id.includes('alienNumber')) {
      question.helpText = 'If you have one. Format: A-XXXXXXXXX';
    } else if (question.id.includes('ssn')) {
      question.helpText = 'Format: XXX-XX-XXXX';
    } else if (question.id.includes('email')) {
      question.helpText = 'Enter a valid email address';
    } else if (question.id.includes('phone') || question.id.includes('telephone')) {
      question.helpText = 'Format: (XXX) XXX-XXXX';
    } else if (question.type === 'date') {
      question.helpText = 'Format: MM/DD/YYYY';
    }
  }
}

// Generate the complete definition
const output = `// @ts-nocheck
/**
 * COMPLETE I-130 Form Definition
 * 
 * This is the COMPLETE I-130 form with ALL 222 fields from the official USCIS PDF
 * Generated with improved labels for better user experience
 * 
 * Total sections: ${sections.length}
 * Total questions: ${sections.reduce((sum: number, s: any) => sum + s.questions.length, 0)}
 */

const I130_COMPLETE_DEFINITION: FormDefinition = {
  id: "i-130",
  code: "I-130",
  name: "Petition for Alien Relative",
  description: "Petition to establish a qualifying family relationship for immigration",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 535,
  price: 60,
  sections: ${JSON.stringify(sections, null, 2)},
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

export { I130_COMPLETE_DEFINITION };
`;

// Save the output
const outputPath = join(process.cwd(), 'I130_COMPLETE_DEFINITION.ts');
writeFileSync(outputPath, output, 'utf-8');

console.log('✅ Created complete I-130 definition with improved labels');
console.log(`📊 Total sections: ${sections.length}`);
console.log(`📝 Total questions: ${sections.reduce((sum: number, s: any) => sum + s.questions.length, 0)}`);
console.log(`💾 Saved to: I130_COMPLETE_DEFINITION.ts`);
console.log('\n📋 Next steps:');
console.log('1. Review the file: I130_COMPLETE_DEFINITION.ts');
console.log('2. Copy the definition to src/lib/constants/forms-registry.ts');
console.log('3. Replace the existing I130_DEFINITION');
console.log('4. Test the form');
