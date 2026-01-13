#!/usr/bin/env node
/**
 * Generate complete I-129 mapping and definition
 * Usage: node scripts/generate-i129-mapping.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Generating I-129 Complete Mapping and Definition...\n');

// Create output directory
const outputDir = path.join(__dirname, '../generated-forms/i-129');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read existing field mappings
const mappingsPath = path.join(__dirname, '../src/lib/constants/form-mappings/i-129-field-mappings.ts');
const mappingsContent = fs.readFileSync(mappingsPath, 'utf-8');

// Count fields by section
const fieldCounts = {
  part1: 0,
  part2: 0,
  part3: 0,
  part4: 0,
  part5: 0,
  part6: 0,
  part7: 0,
  part8: 0,
  part9: 0,
  supplements: 0
};

const lines = mappingsContent.split('\n');
lines.forEach(line => {
  if (line.includes('questionId:')) {
    const match = line.match(/questionId:\s*"([^"]+)"/);
    if (match) {
      const id = match[1];
      if (id.startsWith('part1_')) fieldCounts.part1++;
      else if (id.startsWith('part2_') || id.match(/^(requested_|basis_|previous_|total_)/)) fieldCounts.part2++;
      else if (id.startsWith('part3_') || id.match(/^(beneficiary_|date_of_birth|sex|country_|passport_|in_us|i94_|last_arrival|current_status|status_expires|us_address|sevis_|ead_|a_number|other_names|province_of_birth)/)) fieldCounts.part3++;
      else if (id.startsWith('part4_') || id.match(/^(office_|valid_passport|other_petitions|replacement_|filing_|dependents_|removal_|immigrant_|previous_|given_|denied_|group_year|j1_|foreign_)/)) fieldCounts.part4++;
      else if (id.startsWith('part5_') || id.match(/^(job_|lca_|address[12]_|include_|work_|full_time|hours_|wages_|other_compensation|employment_|business_|year_established|employees_|small_business|gross_|net_)/)) fieldCounts.part5++;
      else if (id.startsWith('part6_') || id.startsWith('export_')) fieldCounts.part6++;
      else if (id.startsWith('part7_') || id.startsWith('signatory_')) fieldCounts.part7++;
      else if (id.startsWith('part8_') || id.startsWith('preparer_')) fieldCounts.part8++;
      else if (id.startsWith('part9_') || id.startsWith('additional_') || id.startsWith('info')) fieldCounts.part9++;
      else if (id.match(/^(e_|e1_|e2_|trade_|h_|h1b_|l_|op_|q_|r_|attach)/)) fieldCounts.supplements++;
    }
  }
});

const totalFields = Object.values(fieldCounts).reduce((a, b) => a + b, 0);

console.log('📊 Field count analysis:');
console.log(`   Part 1: ${fieldCounts.part1} fields`);
console.log(`   Part 2: ${fieldCounts.part2} fields`);
console.log(`   Part 3: ${fieldCounts.part3} fields`);
console.log(`   Part 4: ${fieldCounts.part4} fields`);
console.log(`   Part 5: ${fieldCounts.part5} fields`);
console.log(`   Part 6: ${fieldCounts.part6} fields`);
console.log(`   Part 7: ${fieldCounts.part7} fields`);
console.log(`   Part 8: ${fieldCounts.part8} fields`);
console.log(`   Part 9: ${fieldCounts.part9} fields`);
console.log(`   Supplements: ${fieldCounts.supplements} fields`);
console.log(`   TOTAL: ${totalFields} fields\n`);

// Generate comprehensive documentation
const documentation = `# I-129 Complete Form Definition

**Generated:** ${new Date().toISOString()}

## Form Overview

- **Form ID**: i-129
- **Form Code**: I-129
- **Name**: Petition for a Nonimmigrant Worker
- **Category**: Work Authorization
- **Filing Fee**: $460
- **Estimated Time**: 90-120 minutes
- **Total Fields**: ${totalFields}

## Purpose

This form is used to petition USCIS for a nonimmigrant worker in the following classifications:
- **H-1B**: Specialty Occupation
- **H-2A**: Temporary Agricultural Worker
- **H-2B**: Temporary Non-Agricultural Worker
- **H-3**: Trainee or Special Education Exchange Visitor
- **L-1A**: Intracompany Transferee Executive or Manager
- **L-1B**: Intracompany Transferee Specialized Knowledge
- **O-1**: Individual with Extraordinary Ability or Achievement
- **O-2**: Individual Accompanying O-1
- **P-1**: Internationally Recognized Athlete or Entertainment Group
- **P-2**: Artist or Entertainer in Reciprocal Exchange Program
- **P-3**: Artist or Entertainer in Culturally Unique Program
- **Q-1**: International Cultural Exchange Visitor
- **R-1**: Religious Worker
- **E-1**: Treaty Trader
- **E-2**: Treaty Investor
- **E-3**: Certain Specialty Occupation Professionals from Australia
- **TN**: NAFTA Professional (Trade NAFTA)
- **H-1B1**: Free Trade Agreement Professional (Chile/Singapore)

## Form Structure

### Main Form (9 Parts)

#### Part 1: Petitioner Information (${fieldCounts.part1} fields)
Information about the employer or individual filing the petition:
- Petitioner type (Individual/Company)
- Name and contact information
- Mailing address
- Federal Employer Identification Number (FEIN)
- Tax identification numbers
- Nonprofit status

#### Part 2: Petition Information (${fieldCounts.part2} fields)
Details about the petition being filed:
- Requested nonimmigrant classification
- Basis for classification (new, extension, change, etc.)
- Previous petition receipt number
- Requested action
- Total number of workers

#### Part 3: Beneficiary Information (${fieldCounts.part3} fields)
Information about the worker(s):
- Personal information (name, date of birth, gender)
- Identification numbers (SSN, A-Number)
- Country of birth and citizenship
- Passport information
- Current immigration status
- US address (if in US)
- Foreign address
- SEVIS and EAD numbers

#### Part 4: Processing Information (${fieldCounts.part4} fields)
Processing and eligibility questions:
- Consulate or port of entry information
- Valid passport status
- Other pending petitions
- Dependent information
- Immigration history
- J-1 exchange visitor status
- Foreign residence address

#### Part 5: Employment Information (${fieldCounts.part5} fields)
Job and wage details:
- Job title
- LCA/ETA case number
- Work location address(es)
- Third-party worksite information
- Full-time/part-time status
- Hours per week
- Wages and compensation
- Employment start and end dates
- Company information (type, year established, employees)
- Financial information (gross/net income)

#### Part 6: Export Control (${fieldCounts.part6} field)
- Export control certification (for certain classifications)

#### Part 7: Petitioner Declaration (${fieldCounts.part7} fields)
Signature and certification:
- Signatory name and title
- Signature and date
- Contact information

#### Part 8: Preparer Information (${fieldCounts.part8} fields)
If using a preparer:
- Preparer name and business
- Address and contact information
- Signature and date

#### Part 9: Additional Information (${fieldCounts.part9} fields)
- Additional explanations
- Continuation sheets
- Page/Part/Item references

### Classification Supplements (${fieldCounts.supplements} fields)

#### E-1/E-2 Treaty Trader/Investor Supplement
- Treaty country information
- Company relationship and ownership
- Financial information (assets, net worth, income)
- Trade or investment details
- Employee information

#### Trade Agreement Supplement (TN, H-1B1)
- Employer type
- Foreign country
- Request type
- Certification

#### H Classification Supplement
- Classification type (H-1B, H-2A, H-2B, H-3)
- Prior H status periods
- H-1B registration information
- Proposed duties
- Present occupation

#### H-1B Data Collection Supplement
- Dependent employer status
- Willful violator status
- Exemption information

#### L Classification Supplement
- Petition type (individual/blanket)
- 50+ employee requirement

#### O and P Classification Supplement
- Classification type
- Consultation requirements

#### Q-1 Cultural Exchange Supplement
- Program certification

#### R-1 Religious Worker Supplement
- Religious organization information

## Field Mapping Format

Each field in the form maps to a PDF field using this structure:

\`\`\`typescript
{
  questionId: string,    // Unique identifier (e.g., "part1_company_name")
  pdfField: string,      // PDF field path (e.g., "form1[0].#subform[0].CompanyName[0]")
  type: string,          // Field type (text, radio, date, checkbox, etc.)
}
\`\`\`

## Required Documents

1. Copy of petitioner's IRS tax returns or annual reports
2. Evidence of petitioner's ability to pay the offered wage
3. Labor Condition Application (LCA) for H-1B petitions
4. Beneficiary's resume or curriculum vitae
5. Beneficiary's educational credentials and evaluations
6. Evidence of beneficiary's work experience
7. Copy of beneficiary's passport biographical page
8. Evidence of current immigration status (if in US)
9. Copies of previous approvals (if applicable)
10. Classification-specific evidence as required

## Filing Instructions

1. Complete all applicable sections of the form
2. Include the appropriate classification supplement
3. Sign and date the petition
4. Include all required supporting documentation
5. Pay the correct filing fee ($460 base + supplements if applicable)
6. File at the appropriate USCIS Service Center
7. Keep copies of everything you submit

## Processing Times

Processing times vary by:
- Service Center
- Classification type
- Premium Processing election ($2,500 for 15-day processing)

Check current processing times at: https://egov.uscis.gov/processing-times/

## File Locations

- **Field Mappings**: \`src/lib/constants/form-mappings/i-129-field-mappings.ts\`
- **Auto Mappings**: \`src/lib/constants/form-mappings/i-129-auto-mappings.ts\`
- **Form Definition**: \`src/lib/constants/forms-registry.ts\`

---

*This documentation was auto-generated. For the most current information, always refer to the official USCIS website and form instructions.*
`;

fs.writeFileSync(path.join(outputDir, 'README.md'), documentation);
console.log('✅ Generated README.md');

// Generate field mapping CSV
const csvContent = `Question ID,PDF Field,Type,Section
${lines.filter(l => l.includes('questionId:')).map(line => {
  const qMatch = line.match(/questionId:\s*"([^"]+)"/);
  const pMatch = line.match(/pdfField:\s*"([^"]+)"/);
  const tMatch = line.match(/type:\s*"([^"]+)"/);
  if (qMatch && pMatch) {
    const qId = qMatch[1];
    const section = qId.split('_')[0];
    return `${qId},${pMatch[1]},${tMatch ? tMatch[1] : 'text'},${section}`;
  }
  return '';
}).filter(Boolean).join('\n')}`;

fs.writeFileSync(path.join(outputDir, 'field-mapping.csv'), csvContent);
console.log('✅ Generated field-mapping.csv');

console.log('\n✨ Generation complete!\n');
console.log('📁 Output directory: generated-forms/i-129/');
console.log('📄 Files created:');
console.log('   - README.md (Complete documentation)');
console.log('   - field-mapping.csv (CSV export of all fields)');
console.log('\n');
