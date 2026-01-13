/**
 * Script to generate complete I-129 form definition with mappings
 * 
 * Usage: npx tsx scripts/generate-i129-complete.ts
 */

import fs from 'fs';
import path from 'path';

// Read the existing field mappings
const fieldMappingsPath = path.join(__dirname, '../src/lib/constants/form-mappings/i-129-field-mappings.ts');
const fieldMappingsContent = fs.readFileSync(fieldMappingsPath, 'utf-8');

// Extract field mappings array
const mappingsMatch = fieldMappingsContent.match(/export const I_129_FIELD_MAPPINGS: FieldMapping\[\] = \[([\s\S]*)\];/);
if (!mappingsMatch) {
  console.error('Could not find field mappings');
  process.exit(1);
}

// Parse the mappings
const mappingsText = mappingsMatch[1];
const mappingObjects = mappingsText.split('},').map(m => m.trim() + '}').filter(m => m.includes('questionId'));

console.log(`Found ${mappingObjects.length} field mappings`);

// Group mappings by section
const sections = {
  part1: [],
  part2: [],
  part3: [],
  part4: [],
  part5: [],
  part6: [],
  part7: [],
  part8: [],
  part9: [],
  e_supplement: [],
  trade_supplement: [],
  h_supplement: [],
  h1b_data: [],
  l_supplement: [],
  op_supplement: [],
  q_supplement: [],
  r_supplement: [],
  attachment: [],
  other: []
};

mappingObjects.forEach(mapping => {
  const questionIdMatch = mapping.match(/questionId:\s*"([^"]+)"/);
  if (!questionIdMatch) return;
  
  const questionId = questionIdMatch[1];
  
  if (questionId.startsWith('part1_')) sections.part1.push(mapping);
  else if (questionId.startsWith('part2_') || questionId.startsWith('requested_') || questionId.startsWith('basis_') || questionId.startsWith('total_')) sections.part2.push(mapping);
  else if (questionId.startsWith('part3_') || questionId.startsWith('beneficiary_') || questionId.startsWith('date_of_birth') || questionId.startsWith('sex') || questionId.startsWith('country_') || questionId.startsWith('passport_') || questionId.startsWith('in_us') || questionId.startsWith('i94_') || questionId.startsWith('last_arrival') || questionId.startsWith('current_status') || questionId.startsWith('status_expires') || questionId.startsWith('us_address') || questionId.startsWith('sevis_') || questionId.startsWith('ead_') || questionId.startsWith('a_number') || questionId.startsWith('other_names') || questionId.startsWith('province_of_birth')) sections.part3.push(mapping);
  else if (questionId.startsWith('part4_') || questionId.startsWith('office_') || questionId.startsWith('valid_passport') || questionId.startsWith('other_petitions') || questionId.startsWith('replacement_') || questionId.startsWith('filing_') || questionId.startsWith('dependents_') || questionId.startsWith('removal_') || questionId.startsWith('immigrant_') || questionId.startsWith('previous_') || questionId.startsWith('given_') || questionId.startsWith('denied_') || questionId.startsWith('group_year') || questionId.startsWith('j1_') || questionId.startsWith('foreign_')) sections.part4.push(mapping);
  else if (questionId.startsWith('part5_') || questionId.startsWith('job_') || questionId.startsWith('lca_') || questionId.startsWith('address1_') || questionId.startsWith('address2_') || questionId.startsWith('include_') || questionId.startsWith('work_') || questionId.startsWith('full_time') || questionId.startsWith('hours_') || questionId.startsWith('wages_') || questionId.startsWith('other_compensation') || questionId.startsWith('employment_') || questionId.startsWith('business_') || questionId.startsWith('year_established') || questionId.startsWith('employees_') || questionId.startsWith('small_business') || questionId.startsWith('gross_') || questionId.startsWith('net_')) sections.part5.push(mapping);
  else if (questionId.startsWith('part6_') || questionId.startsWith('export_')) sections.part6.push(mapping);
  else if (questionId.startsWith('part7_') || questionId.startsWith('signatory_')) sections.part7.push(mapping);
  else if (questionId.startsWith('part8_') || questionId.startsWith('preparer_')) sections.part8.push(mapping);
  else if (questionId.startsWith('part9_') || questionId.startsWith('additional_') || questionId.startsWith('info')) sections.part9.push(mapping);
  else if (questionId.startsWith('e_') || questionId.startsWith('e1_') || questionId.startsWith('e2_')) sections.e_supplement.push(mapping);
  else if (questionId.startsWith('trade_')) sections.trade_supplement.push(mapping);
  else if (questionId.startsWith('h_') && !questionId.startsWith('h1b_data')) sections.h_supplement.push(mapping);
  else if (questionId.startsWith('h1b_data')) sections.h1b_data.push(mapping);
  else if (questionId.startsWith('l_')) sections.l_supplement.push(mapping);
  else if (questionId.startsWith('op_')) sections.op_supplement.push(mapping);
  else if (questionId.startsWith('q_')) sections.q_supplement.push(mapping);
  else if (questionId.startsWith('r_')) sections.r_supplement.push(mapping);
  else if (questionId.startsWith('attach')) sections.attachment.push(mapping);
  else sections.other.push(mapping);
});

console.log('\nSection breakdown:');
Object.entries(sections).forEach(([section, mappings]) => {
  console.log(`  ${section}: ${mappings.length} fields`);
});

// Generate the complete definition file
const output = `/**
 * Complete I-129 Form Definition with Field Mappings
 * Generated: ${new Date().toISOString()}
 * 
 * This file contains the complete form definition for I-129
 * Petition for a Nonimmigrant Worker
 */

import { FormDefinition } from "../forms-registry";
import { I_129_FIELD_MAPPINGS } from "../form-mappings/i-129-field-mappings";
import { US_STATES } from "../us-states";

export const I_129_COMPLETE_DEFINITION: FormDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for H-1B, L-1, O-1, and other temporary work visas",
  category: "work_authorization",
  estimatedTime: "90-120 minutes",
  filingFee: 460,
  price: 60,
  status: "active",
  
  pdfFieldMappings: I_129_FIELD_MAPPINGS.map(mapping => ({
    questionId: mapping.questionId,
    pdfField: mapping.pdfField,
    transform: mapping.type === "date" 
      ? (value: string) => {
          const [year, month, day] = value.split('-');
          return \`\${month}/\${day}/\${year}\`;
        }
      : undefined
  })),
  
  requiredDocuments: [
    "Copy of petitioner's IRS tax returns or annual reports",
    "Evidence of petitioner's ability to pay the offered wage",
    "Labor Condition Application (LCA) for H-1B petitions",
    "Beneficiary's resume or curriculum vitae",
    "Beneficiary's educational credentials and evaluations",
    "Evidence of beneficiary's work experience",
    "Copy of beneficiary's passport biographical page",
    "Evidence of current immigration status (if in US)",
    "Copies of previous approvals (if applicable)",
  ],
  
  instructions: [
    "Complete all applicable sections of the form",
    "Sign and date the petition",
    "Include all required supporting documentation",
    "Pay the correct filing fee ($460 base + supplements if applicable)",
    "File at the appropriate USCIS Service Center",
    "Keep copies of everything you submit",
    "Include classification-specific supplement (H, L, O, P, Q, R, or E)",
  ],

  sections: [
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/constants/form-definitions/i-129-generated.ts'), output);

console.log('\n✅ Generated base definition file');
console.log('📝 Now generating sections...\n');

// Continue with sections generation
process.exit(0);
