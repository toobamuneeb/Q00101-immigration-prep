#!/usr/bin/env node
/**
 * Generate Proper I-129 Definition and Mappings
 * Matches the quality and structure of N-400 and I-751
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Generating proper I-129 definition and mappings...\n');

// Load PDF fields
const pdfFieldsPath = path.join(__dirname, '../public/pdf-templates/i-129-unlocked_fields.json');
const pdfFieldsData = JSON.parse(fs.readFileSync(pdfFieldsPath, 'utf8'));
const pdfFields = pdfFieldsData.fields || [];

console.log(`📄 Loaded ${pdfFields.length} PDF fields\n`);

// Helper to find PDF field
function findPdfField(pattern) {
  const field = pdfFields.find(f => 
    f.name.toLowerCase().includes(pattern.toLowerCase())
  );
  return field ? field.name : null;
}

// I-129 Form Definition
const formDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for nonimmigrant worker classification (H-1B, L-1, O-1, etc.)",
  category: "employment",
  estimatedTime: "45-60 minutes",
  filingFee: 460,
  price: 60,
  sections: []
};

// Field mappings array
const fieldMappings = [];

// Helper to add mapping
function addMapping(questionId, pdfField, type = undefined, value = undefined) {
  if (pdfField) {
    const mapping = { questionId, pdfField };
    if (type) mapping.type = type;
    if (value !== undefined) mapping.value = value;
    fieldMappings.push(mapping);
  }
}

// ============================================================================
// PART 1: Information About You (Petitioner)
// ============================================================================

formDefinition.sections.push({
  id: "part1",
  title: "Part 1: Information About You (Petitioner)",
  description: "Provide information about the petitioning employer or organization.",
  questions: [
    {
      id: "part1.legalName",
      type: "name",
      label: "Your Full Legal Name",
      required: true,
      helpText: "Provide your legal name as it appears on official documents"
    },
    {
      id: "part1.companyName",
      type: "text",
      label: "Company or Organization Name",
      required: true,
      helpText: "Enter the full legal name of the petitioning company"
    },
    {
      id: "part1.mailingAddress",
      type: "address",
      label: "Mailing Address",
      required: true,
      helpText: "Provide the company's mailing address"
    },
    {
      id: "part1.ein",
      type: "text",
      label: "U.S. Employer Identification Number (EIN)",
      required: true,
      helpText: "Format: XX-XXXXXXX"
    },
    {
      id: "part1.inCareOfName",
      type: "text",
      label: "In Care Of Name (if any)",
      required: false
    }
  ]
});

// Part 1 Mappings
addMapping("part1.legalName.familyName", findPdfField("Line1_FamilyName"));
addMapping("part1.legalName.givenName", findPdfField("Line1_GivenName"));
addMapping("part1.legalName.middleName", findPdfField("Line1_MiddleName"));
addMapping("part1.companyName", findPdfField("CompanyorOrgName"));
addMapping("part1.mailingAddress.street", findPdfField("Line7b_StreetNumberName"));
addMapping("part1.mailingAddress.city", findPdfField("Line_CityTown"));
addMapping("part1.mailingAddress.state", findPdfField("P1_Line3_State"));
addMapping("part1.mailingAddress.zipCode", findPdfField("P1_Line3_ZipCode"));
addMapping("part1.ein", findPdfField("Line3_TaxNumber"));
addMapping("part1.inCareOfName", findPdfField("Line7a_InCareofName"));

// ============================================================================
// PART 2: Petition Type
// ============================================================================

formDefinition.sections.push({
  id: "part2",
  title: "Part 2: Petition Type",
  description: "Indicate the type of petition and classification sought.",
  questions: [
    {
      id: "part2.petitionType",
      type: "radio",
      label: "This petition is being filed for",
      required: true,
      options: [
        { value: "new", label: "New employment" },
        { value: "continuation", label: "Continuation of previously approved employment without change" },
        { value: "change", label: "Change in previously approved employment" },
        { value: "amended", label: "Amended petition" },
        { value: "concurrent", label: "Concurrent employment" }
      ]
    },
    {
      id: "part2.classificationSymbol",
      type: "select",
      label: "Classification Sought",
      required: true,
      options: [
        { value: "H-1B", label: "H-1B - Specialty Occupation" },
        { value: "H-1B1", label: "H-1B1 - Free Trade Agreement" },
        { value: "H-2A", label: "H-2A - Temporary Agricultural Worker" },
        { value: "H-2B", label: "H-2B - Temporary Non-Agricultural Worker" },
        { value: "H-3", label: "H-3 - Trainee or Special Education Exchange Visitor" },
        { value: "L-1A", label: "L-1A - Intracompany Transferee Executive or Manager" },
        { value: "L-1B", label: "L-1B - Intracompany Transferee Specialized Knowledge" },
        { value: "O-1A", label: "O-1A - Extraordinary Ability in Sciences, Education, Business, or Athletics" },
        { value: "O-1B", label: "O-1B - Extraordinary Ability in Arts or Motion Pictures/TV" },
        { value: "O-2", label: "O-2 - Accompanying O-1" },
        { value: "P-1", label: "P-1 - Internationally Recognized Athlete or Entertainment Group" },
        { value: "P-2", label: "P-2 - Artist or Entertainer in Reciprocal Exchange Program" },
        { value: "P-3", label: "P-3 - Artist or Entertainer in Culturally Unique Program" },
        { value: "Q-1", label: "Q-1 - International Cultural Exchange" },
        { value: "R-1", label: "R-1 - Religious Worker" },
        { value: "E-1", label: "E-1 - Treaty Trader" },
        { value: "E-2", label: "E-2 - Treaty Investor" },
        { value: "E-3", label: "E-3 - Certain Specialty Occupation Professionals from Australia" },
        { value: "TN", label: "TN - NAFTA Professional" }
      ],
      helpText: "Select the nonimmigrant classification you are requesting"
    },
    {
      id: "part2.totalWorkers",
      type: "text",
      label: "Total number of workers in this petition",
      required: true,
      helpText: "Enter the number of beneficiaries included in this petition"
    }
  ]
});

// Part 2 Mappings
addMapping("part2.petitionType", findPdfField("new[0]"), "radio", "new");
addMapping("part2.petitionType", findPdfField("continuation[0]"), "radio", "continuation");
addMapping("part2.petitionType", findPdfField("change[0]"), "radio", "change");
addMapping("part2.petitionType", findPdfField("amended[0]"), "radio", "amended");
addMapping("part2.petitionType", findPdfField("concurrent[0]"), "radio", "concurrent");
addMapping("part2.classificationSymbol", findPdfField("Part2_ClassificationSymbol"));
addMapping("part2.totalWorkers", findPdfField("TtlNumbersofWorker"));

// ============================================================================
// PART 3: Information About the Beneficiary
// ============================================================================

formDefinition.sections.push({
  id: "part3",
  title: "Part 3: Information About the Beneficiary",
  description: "Provide information about the person for whom you are filing.",
  questions: [
    {
      id: "part3.currentStatus",
      type: "radio",
      label: "Is the beneficiary in the United States?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part3.legalName",
      type: "name",
      label: "Beneficiary's Full Legal Name",
      required: true,
      helpText: "Provide the beneficiary's name exactly as it appears on their passport"
    },
    {
      id: "part3.otherNames",
      type: "text",
      label: "Other Names Used (if any)",
      required: false,
      helpText: "Include maiden name, aliases, or other names used"
    },
    {
      id: "part3.dateOfBirth",
      type: "date",
      label: "Date of Birth",
      required: true,
      helpText: "Format: MM/DD/YYYY"
    },
    {
      id: "part3.gender",
      type: "radio",
      label: "Gender",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
      ]
    },
    {
      id: "part3.countryOfBirth",
      type: "text",
      label: "Country of Birth",
      required: true
    },
    {
      id: "part3.countryOfCitizenship",
      type: "text",
      label: "Country of Citizenship or Nationality",
      required: true
    },
    {
      id: "part3.alienNumber",
      type: "text",
      label: "A-Number (if any)",
      required: false,
      helpText: "9-digit Alien Registration Number"
    },
    {
      id: "part3.ssn",
      type: "ssn",
      label: "U.S. Social Security Number (if any)",
      required: false,
      helpText: "Format: XXX-XX-XXXX"
    },
    {
      id: "part3.passportNumber",
      type: "text",
      label: "Passport Number",
      required: true
    },
    {
      id: "part3.passportCountry",
      type: "text",
      label: "Country of Issuance for Passport",
      required: true
    },
    {
      id: "part3.passportExpiration",
      type: "date",
      label: "Passport Expiration Date",
      required: true,
      helpText: "Format: MM/DD/YYYY"
    },
    {
      id: "part3.dateOfArrival",
      type: "date",
      label: "Date of Last Arrival in the U.S. (if applicable)",
      required: false,
      helpText: "Format: MM/DD/YYYY",
      conditional: {
        dependsOn: "part3.currentStatus",
        values: ["yes"]
      }
    },
    {
      id: "part3.i94Number",
      type: "text",
      label: "I-94 Arrival-Departure Record Number (if applicable)",
      required: false,
      conditional: {
        dependsOn: "part3.currentStatus",
        values: ["yes"]
      }
    },
    {
      id: "part3.currentNonimmigrantStatus",
      type: "text",
      label: "Current Nonimmigrant Status (if applicable)",
      required: false,
      helpText: "e.g., F-1, H-1B, L-1",
      conditional: {
        dependsOn: "part3.currentStatus",
        values: ["yes"]
      }
    },
    {
      id: "part3.statusExpirationDate",
      type: "date",
      label: "Date Status Expires (if applicable)",
      required: false,
      helpText: "Format: MM/DD/YYYY",
      conditional: {
        dependsOn: "part3.currentStatus",
        values: ["yes"]
      }
    }
  ]
});

// Part 3 Mappings
addMapping("part3.currentStatus", findPdfField("P3Line1_Checkbox[0]"), "radio", "yes");
addMapping("part3.currentStatus", findPdfField("P3Line1_Checkbox[1]"), "radio", "no");
addMapping("part3.legalName.familyName", findPdfField("Part3_Line2_FamilyName"));
addMapping("part3.legalName.givenName", findPdfField("Part3_Line2_GivenName"));
addMapping("part3.legalName.middleName", findPdfField("Part3_Line2_MiddleName"));
addMapping("part3.dateOfBirth", findPdfField("Line6_DateOfBirth"));
addMapping("part3.gender", findPdfField("Line1_Gender_P3[0]"), "radio", "male");
addMapping("part3.gender", findPdfField("Line1_Gender_P3[1]"), "radio", "female");
addMapping("part3.countryOfBirth", findPdfField("Part3Line4_CountryOfBirth"));
addMapping("part3.countryOfCitizenship", findPdfField("Part3Line4_CountryOfCitizenship"));
addMapping("part3.alienNumber", findPdfField("Line1_AlienNumber"));
addMapping("part3.ssn", findPdfField("Line5_SSN"));
addMapping("part3.passportNumber", findPdfField("Part3Line5_PassportorTravDoc"));
addMapping("part3.passportCountry", findPdfField("Line_CountryOfIssuance"));
addMapping("part3.passportExpiration", findPdfField("Line11e_ExpDate"));
addMapping("part3.dateOfArrival", findPdfField("Part3Line5_DateofArrival"));
addMapping("part3.i94Number", findPdfField("Part3Line5_ArrivalDeparture"));
addMapping("part3.currentNonimmigrantStatus", findPdfField("Line11g_CurrentNon"));
addMapping("part3.statusExpirationDate", findPdfField("Line11h_DateStatusExpires"));

// ============================================================================
// PART 5: Basic Information About the Proposed Employment
// ============================================================================

formDefinition.sections.push({
  id: "part5",
  title: "Part 5: Basic Information About the Proposed Employment",
  description: "Provide details about the job position and employment terms.",
  questions: [
    {
      id: "part5.jobTitle",
      type: "text",
      label: "Job Title",
      required: true,
      helpText: "Enter the specific job title for this position"
    },
    {
      id: "part5.noncitizensJobTitle",
      type: "text",
      label: "Noncitizen's Job Title (if different)",
      required: false
    },
    {
      id: "part5.lcaNumber",
      type: "text",
      label: "LCA or ETA Case Number (if applicable)",
      required: false,
      helpText: "Required for H-1B petitions"
    },
    {
      id: "part5.workLocation",
      type: "radio",
      label: "Will the beneficiary work at multiple locations?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part5.workAddress",
      type: "address",
      label: "Primary Work Location Address",
      required: true,
      helpText: "Provide the address where the beneficiary will primarily work"
    },
    {
      id: "part5.fullTime",
      type: "radio",
      label: "Is this a full-time position?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part5.hoursPerWeek",
      type: "text",
      label: "Number of Hours Per Week",
      required: true,
      helpText: "Enter the number of hours the beneficiary will work per week"
    },
    {
      id: "part5.wageAmount",
      type: "text",
      label: "Wages or Other Compensation",
      required: true,
      helpText: "Enter the wage amount"
    },
    {
      id: "part5.wagePeriod",
      type: "select",
      label: "Wage Period",
      required: true,
      options: [
        { value: "hour", label: "Per Hour" },
        { value: "week", label: "Per Week" },
        { value: "month", label: "Per Month" },
        { value: "year", label: "Per Year" }
      ]
    },
    {
      id: "part5.employmentStartDate",
      type: "date",
      label: "Requested Start Date",
      required: true,
      helpText: "Format: MM/DD/YYYY"
    },
    {
      id: "part5.employmentEndDate",
      type: "date",
      label: "Requested End Date",
      required: true,
      helpText: "Format: MM/DD/YYYY"
    },
    {
      id: "part5.typeOfBusiness",
      type: "textarea",
      label: "Type of Business",
      required: true,
      helpText: "Describe the nature of your business"
    },
    {
      id: "part5.yearEstablished",
      type: "text",
      label: "Year Business Established",
      required: true,
      helpText: "Enter the year your company was established"
    },
    {
      id: "part5.numberOfEmployees",
      type: "text",
      label: "Current Number of Employees in the U.S.",
      required: true
    },
    {
      id: "part5.grossAnnualIncome",
      type: "text",
      label: "Gross Annual Income",
      required: true,
      helpText: "Enter your company's gross annual income"
    },
    {
      id: "part5.netAnnualIncome",
      type: "text",
      label: "Net Annual Income",
      required: true,
      helpText: "Enter your company's net annual income"
    }
  ]
});

// Part 5 Mappings
addMapping("part5.jobTitle", findPdfField("Part5_Q1_JobTitle"));
addMapping("part5.lcaNumber", findPdfField("Part5_Q2_LCAorETA"));
addMapping("part5.workLocation", findPdfField("P5Line3[0]"), "radio", "yes");
addMapping("part5.workLocation", findPdfField("P5Line3[1]"), "radio", "no");
addMapping("part5.workAddress.street", findPdfField("P5Line3a_StreetNumberName"));
addMapping("part5.workAddress.city", findPdfField("P5Line3a_CityTown"));
addMapping("part5.workAddress.state", findPdfField("P5Line3a_State"));
addMapping("part5.workAddress.zipCode", findPdfField("P5Line3a_ZipCode"));
addMapping("part5.fullTime", findPdfField("P5Line4_Yes"), "radio", "yes");
addMapping("part5.fullTime", findPdfField("P5Line4_No"), "radio", "no");
addMapping("part5.hoursPerWeek", findPdfField("P5Line9_Hours"));
addMapping("part5.wageAmount", findPdfField("Line8_Wages"));
addMapping("part5.wagePeriod", findPdfField("Line8_Per"));
addMapping("part5.employmentStartDate", findPdfField("Part5_Q10_DateFrom"));
addMapping("part5.employmentEndDate", findPdfField("Part5_Q10_DateTo"));
addMapping("part5.typeOfBusiness", findPdfField("Part5Line12_TypeofBusiness"));
addMapping("part5.yearEstablished", findPdfField("P5Line13_YearEstablished"));
addMapping("part5.numberOfEmployees", findPdfField("P5Line14_NumberofEmployees"));
addMapping("part5.grossAnnualIncome", findPdfField("Line15_GrossAnnualIncome"));
addMapping("part5.netAnnualIncome", findPdfField("Line16_NetAnnualIncome"));

// ============================================================================
// PART 6: Petitioner's Statement, Contact Information, Certification, and Signature
// ============================================================================

formDefinition.sections.push({
  id: "part6",
  title: "Part 6: Petitioner's Statement, Contact Information, Certification, and Signature",
  description: "Provide contact information and sign the petition.",
  questions: [
    {
      id: "part6.daytimePhone",
      type: "tel",
      label: "Daytime Phone Number",
      required: true,
      helpText: "Format: (XXX) XXX-XXXX"
    },
    {
      id: "part6.mobilePhone",
      type: "tel",
      label: "Mobile Phone Number (if any)",
      required: false,
      helpText: "Format: (XXX) XXX-XXXX"
    },
    {
      id: "part6.email",
      type: "email",
      label: "Email Address",
      required: true
    },
    {
      id: "part6.signatureName",
      type: "text",
      label: "Signature of Petitioner",
      required: true,
      helpText: "Type your full legal name"
    },
    {
      id: "part6.signatureDate",
      type: "date",
      label: "Date of Signature",
      required: true,
      helpText: "Format: MM/DD/YYYY"
    }
  ]
});

// Part 6 Mappings
addMapping("part6.daytimePhone", findPdfField("Pt7Line3_DaytimePhoneNumber1"));
addMapping("part6.email", findPdfField("Pt7Line3_EmailAddress"));
addMapping("part6.signatureName", findPdfField("P5_Line6a_SignatureofApplicant"));
addMapping("part6.signatureDate", findPdfField("Line1b_DateofSignature"));

// ============================================================================
// PART 8: Preparer's Contact Information, Certification, and Signature
// ============================================================================

formDefinition.sections.push({
  id: "part8",
  title: "Part 8: Preparer's Contact Information, Certification, and Signature",
  description: "To be completed if someone other than the petitioner prepared this petition.",
  questions: [
    {
      id: "part8.preparerUsed",
      type: "radio",
      label: "Did someone help you prepare this petition?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part8.preparerName",
      type: "name",
      label: "Preparer's Full Name",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    },
    {
      id: "part8.preparerBusinessName",
      type: "text",
      label: "Preparer's Business or Organization Name",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    },
    {
      id: "part8.preparerAddress",
      type: "address",
      label: "Preparer's Mailing Address",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    },
    {
      id: "part8.preparerDaytimePhone",
      type: "tel",
      label: "Preparer's Daytime Phone Number",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    },
    {
      id: "part8.preparerMobilePhone",
      type: "tel",
      label: "Preparer's Mobile Phone Number (if any)",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    },
    {
      id: "part8.preparerEmail",
      type: "email",
      label: "Preparer's Email Address",
      required: false,
      conditional: {
        dependsOn: "part8.preparerUsed",
        values: ["yes"]
      }
    }
  ]
});

// Part 8 Mappings
addMapping("part8.preparerName.familyName", findPdfField("Line_PreparerFamilyName"));
addMapping("part8.preparerName.givenName", findPdfField("Line_PreparerGivenName"));
addMapping("part8.preparerBusinessName", findPdfField("Line_BusinessName"));
addMapping("part8.preparerAddress.street", findPdfField("Line7b_StreetNumberName[1]"));
addMapping("part8.preparerAddress.city", findPdfField("Line_CityTown[1]"));
addMapping("part8.preparerAddress.state", findPdfField("P8_Line3_State"));
addMapping("part8.preparerAddress.zipCode", findPdfField("P8_Line3_ZipCode"));
addMapping("part8.preparerDaytimePhone", findPdfField("Line2_DaytimePhoneNumber1_Part8"));
addMapping("part8.preparerMobilePhone", findPdfField("Line3_MobilePhoneNumber1_Part8"));
addMapping("part8.preparerEmail", findPdfField("EmailAddress"));

// ============================================================================
// Generate Files
// ============================================================================

console.log(`✅ Created ${formDefinition.sections.length} sections`);
console.log(`✅ Created ${fieldMappings.length} field mappings\n`);

// Generate form definition file
const formDefContent = `/**
 * I-129 Form Definition
 * Generated: ${new Date().toISOString()}
 * 
 * Petition for a Nonimmigrant Worker
 * USCIS Form I-129
 */

import { FormDefinition } from "../forms-registry";
import { I_129_FIELD_MAPPINGS } from "../form-mappings/i-129-field-mappings";

const I_129_DEFINITION: FormDefinition = ${JSON.stringify(formDefinition, null, 2)
  .replace(/"pdfFieldMappings": \[\]/,'"pdfFieldMappings": I_129_FIELD_MAPPINGS')};

export default I_129_DEFINITION;
`;

// Generate field mappings file
const fieldMappingsContent = `/**
 * I-129 Field Mappings
 * Generated: ${new Date().toISOString()}
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_129_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(fieldMappings, null, 2)};
`;

// Write files
const defOutputPath = path.join(__dirname, '../src/lib/constants/form-definitions/i-129-definition.ts');
const mappingsOutputPath = path.join(__dirname, '../src/lib/constants/form-mappings/i-129-field-mappings.ts');

fs.writeFileSync(defOutputPath, formDefContent);
fs.writeFileSync(mappingsOutputPath, fieldMappingsContent);

console.log('📁 FILES GENERATED:\n');
console.log(`✅ ${defOutputPath}`);
console.log(`✅ ${mappingsOutputPath}\n`);

console.log('✨ Generation complete!\n');
console.log('📊 Summary:');
console.log(`   - Sections: ${formDefinition.sections.length}`);
console.log(`   - Total Questions: ${formDefinition.sections.reduce((sum, s) => sum + s.questions.length, 0)}`);
console.log(`   - Field Mappings: ${fieldMappings.length}`);
console.log(`   - Category: ${formDefinition.category}`);
console.log(`   - Filing Fee: $${formDefinition.filingFee}`);
console.log(`   - Estimated Time: ${formDefinition.estimatedTime}`);
console.log('');
console.log('📝 Next Steps:');
console.log('1. Review the generated files');
console.log('2. Import I_129_DEFINITION in src/lib/constants/forms-registry.ts');
console.log('3. Add to FORMS_REGISTRY array');
console.log('4. Test the form in your application');
console.log('');
