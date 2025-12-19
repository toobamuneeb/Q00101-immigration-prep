/**
 * Script to generate I-130 field mappings
 * Maps form definition question IDs to PDF field names with proper value handling
 */

import { writeFileSync } from 'fs';
import { join } from 'path';

// I-130 Form Definition Question IDs to PDF Field Mappings
// Based on the actual USCIS I-130 PDF form structure

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string; // For radio/checkbox options
}

const I130_MAPPINGS: FieldMapping[] = [
  // ============================================================================
  // PART 1: RELATIONSHIP
  // ============================================================================
  
  // Question: part1.relationship (select: spouse, parent, child, sibling)
  { questionId: 'part1.relationship', pdfField: 'form1[0].#subform[0].Pt1Line1_Spouse[0]', type: 'checkbox', value: 'spouse' },
  { questionId: 'part1.relationship', pdfField: 'form1[0].#subform[0].Pt1Line1_Parent[0]', type: 'checkbox', value: 'parent' },
  { questionId: 'part1.relationship', pdfField: 'form1[0].#subform[0].Pt1Line1_Child[0]', type: 'checkbox', value: 'child' },
  { questionId: 'part1.relationship', pdfField: 'form1[0].#subform[0].Pt1Line1_Siblings[0]', type: 'checkbox', value: 'sibling' },
  
  // Question: part1.petitionerStatus (radio: citizen, lpr)
  { questionId: 'part1.petitionerStatus', pdfField: 'form1[0].#subform[0].Pt1Line3_Yes[0]', type: 'radio', value: 'citizen' },
  { questionId: 'part1.petitionerStatus', pdfField: 'form1[0].#subform[0].Pt1Line3_No[0]', type: 'radio', value: 'lpr' },
  
  // Question: part1.gainedLPRThroughAdoption (radio: yes, no)
  { questionId: 'part1.gainedLPRThroughAdoption', pdfField: 'form1[0].#subform[0].Pt1Line4_Yes[0]', type: 'radio', value: 'yes' },
  { questionId: 'part1.gainedLPRThroughAdoption', pdfField: 'form1[0].#subform[0].Pt1Line4_No[0]', type: 'radio', value: 'no' },

  // ============================================================================
  // PART 2: PETITIONER INFORMATION
  // ============================================================================
  
  // Alien Number
  { questionId: 'part2.alienNumber', pdfField: 'form1[0].#subform[0].#area[4].Pt2Line1_AlienNumber[0]', type: 'text' },
  
  // USCIS Online Account
  { questionId: 'part2.uscisOnlineAccount', pdfField: 'form1[0].#subform[0].#area[5].Pt2Line2_USCISOnlineActNumber[0]', type: 'text' },
  
  // SSN
  { questionId: 'part2.ssn', pdfField: 'form1[0].#subform[0].Pt2Line11_SSN[0]', type: 'ssn' },
  
  // Name
  { questionId: 'part2.lastName', pdfField: 'form1[0].#subform[0].Pt2Line4a_FamilyName[0]', type: 'text' },
  { questionId: 'part2.firstName', pdfField: 'form1[0].#subform[0].Pt2Line4b_GivenName[0]', type: 'text' },
  { questionId: 'part2.middleName', pdfField: 'form1[0].#subform[0].Pt2Line4c_MiddleName[0]', type: 'text' },
  
  // Other names used
  { questionId: 'part2.otherNamesUsed', pdfField: 'form1[0].#subform[1].Pt2Line5a_FamilyName[0]', type: 'text' },
  
  // Birth information
  { questionId: 'part2.cityOfBirth', pdfField: 'form1[0].#subform[1].Pt2Line6_CityTownOfBirth[0]', type: 'text' },
  { questionId: 'part2.countryOfBirth', pdfField: 'form1[0].#subform[1].Pt2Line7_CountryofBirth[0]', type: 'text' },
  { questionId: 'part2.dateOfBirth', pdfField: 'form1[0].#subform[1].Pt2Line8_DateofBirth[0]', type: 'date' },
  
  // Sex
  { questionId: 'part2.sex', pdfField: 'form1[0].#subform[1].Pt2Line9_Male[0]', type: 'radio', value: 'male' },
  { questionId: 'part2.sex', pdfField: 'form1[0].#subform[1].Pt2Line9_Female[0]', type: 'radio', value: 'female' },
  
  // ============================================================================
  // PART 2: MAILING ADDRESS
  // ============================================================================
  
  { questionId: 'part2.mailingInCareOf', pdfField: 'form1[0].#subform[1].Pt2Line10_InCareofName[0]', type: 'text' },
  { questionId: 'part2.mailingStreet', pdfField: 'form1[0].#subform[1].Pt2Line10_StreetNumberName[0]', type: 'text' },
  { questionId: 'part2.mailingAptType', pdfField: 'form1[0].#subform[1].Pt2Line10_Unit[0]', type: 'checkbox', value: 'apt' },
  { questionId: 'part2.mailingAptType', pdfField: 'form1[0].#subform[1].Pt2Line10_Unit[1]', type: 'checkbox', value: 'ste' },
  { questionId: 'part2.mailingAptType', pdfField: 'form1[0].#subform[1].Pt2Line10_Unit[2]', type: 'checkbox', value: 'flr' },
  { questionId: 'part2.mailingAptNumber', pdfField: 'form1[0].#subform[1].Pt2Line10_AptSteFlrNumber[0]', type: 'text' },
  { questionId: 'part2.mailingCity', pdfField: 'form1[0].#subform[1].Pt2Line10_CityOrTown[0]', type: 'text' },
  { questionId: 'part2.mailingState', pdfField: 'form1[0].#subform[1].Pt2Line10_State[0]', type: 'text' },
  { questionId: 'part2.mailingZip', pdfField: 'form1[0].#subform[1].Pt2Line10_ZipCode[0]', type: 'text' },
  { questionId: 'part2.province', pdfField: 'form1[0].#subform[1].Pt2Line10_Province[0]', type: 'text' },
  { questionId: 'part2.postalCode', pdfField: 'form1[0].#subform[1].Pt2Line10_PostalCode[0]', type: 'text' },
  { questionId: 'part2.country', pdfField: 'form1[0].#subform[1].Pt2Line10_Country[0]', type: 'text' },
  
  // ============================================================================
  // PART 2: MARITAL INFORMATION
  // ============================================================================
  
  { questionId: 'part2.timesMarried', pdfField: 'form1[0].#subform[1].Pt2Line16_NumberofMarriages[0]', type: 'text' },
  
  // Marital status
  { questionId: 'part2.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt2Line17_Single[0]', type: 'checkbox', value: 'single' },
  { questionId: 'part2.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt2Line17_Married[0]', type: 'checkbox', value: 'married' },
  { questionId: 'part2.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt2Line17_Divorced[0]', type: 'checkbox', value: 'divorced' },
  { questionId: 'part2.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt2Line17_Widowed[0]', type: 'checkbox', value: 'widowed' },
  { questionId: 'part2.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt2Line17_Annulled[0]', type: 'checkbox', value: 'separated' },
  
  { questionId: 'part2.dateOfMarriage', pdfField: 'form1[0].#subform[2].Pt2Line18_DateOfMarriage[0]', type: 'date' },
  
  // Current spouse name
  { questionId: 'part2.currentSpouseName', pdfField: 'form1[0].#subform[2].PtLine20a_FamilyName[0]', type: 'text' },
  
  { questionId: 'part2.placeOfMarriage', pdfField: 'form1[0].#subform[2].Pt2Line19a_CityTown[0]', type: 'text' },
  
  // ============================================================================
  // PART 2: CITIZENSHIP INFORMATION
  // ============================================================================
  
  // Citizenship through
  { questionId: 'part2.citizenshipThrough', pdfField: 'form1[0].#subform[2].Pt2Line36_USCitizen[0]', type: 'radio', value: 'birth-us' },
  { questionId: 'part2.citizenshipThrough', pdfField: 'form1[0].#subform[2].Pt2Line36_LPR[0]', type: 'radio', value: 'naturalization' },
  
  { questionId: 'part2.certificateNumber', pdfField: 'form1[0].#subform[2].Pt2Line37a_CertificateNumber[0]', type: 'text' },
  { questionId: 'part2.placeOfNaturalization', pdfField: 'form1[0].#subform[2].Pt2Line37b_PlaceOfIssuance[0]', type: 'text' },
  
  // ============================================================================
  // PART 4: BENEFICIARY INFORMATION
  // ============================================================================
  
  // Alien Number
  { questionId: 'part4.alienNumber', pdfField: 'form1[0].#subform[4].#area[6].Pt4Line1_AlienNumber[0]', type: 'text' },
  
  // USCIS Online Account
  { questionId: 'part4.uscisOnlineAccount', pdfField: 'form1[0].#subform[4].#area[7].Pt4Line2_USCISOnlineActNumber[0]', type: 'text' },
  
  // SSN
  { questionId: 'part4.ssn', pdfField: 'form1[0].#subform[4].Pt4Line3_SSN[0]', type: 'ssn' },
  
  // Name
  { questionId: 'part4.lastName', pdfField: 'form1[0].#subform[4].Pt4Line4a_FamilyName[0]', type: 'text' },
  { questionId: 'part4.firstName', pdfField: 'form1[0].#subform[4].Pt4Line4b_GivenName[0]', type: 'text' },
  { questionId: 'part4.middleName', pdfField: 'form1[0].#subform[4].Pt4Line4c_MiddleName[0]', type: 'text' },
  
  // Birth information
  { questionId: 'part4.cityOfBirth', pdfField: 'form1[0].#subform[4].Pt4Line7_CityTownOfBirth[0]', type: 'text' },
  { questionId: 'part4.countryOfBirth', pdfField: 'form1[0].#subform[4].Pt4Line8_CountryOfBirth[0]', type: 'text' },
  { questionId: 'part4.dateOfBirth', pdfField: 'form1[0].#subform[4].Pt4Line9_DateOfBirth[0]', type: 'date' },
  
  // Sex
  { questionId: 'part4.sex', pdfField: 'form1[0].#subform[4].Pt4Line9_Male[0]', type: 'radio', value: 'male' },
  { questionId: 'part4.sex', pdfField: 'form1[0].#subform[4].Pt4Line9_Female[0]', type: 'radio', value: 'female' },
  
  // Has other names
  { questionId: 'part4.hasOtherNames', pdfField: 'form1[0].#subform[4].Pt4Line10_Yes[0]', type: 'radio', value: 'yes' },
  { questionId: 'part4.hasOtherNames', pdfField: 'form1[0].#subform[4].Pt4Line10_No[0]', type: 'radio', value: 'no' },
  
  // Other names
  { questionId: 'part4.otherNames', pdfField: 'form1[0].#subform[4].P4Line5a_FamilyName[0]', type: 'text' },
  
  // ============================================================================
  // PART 4: BENEFICIARY ADDRESS
  // ============================================================================
  
  { questionId: 'part4.street', pdfField: 'form1[0].#subform[4].Pt4Line11_StreetNumberName[0]', type: 'text' },
  { questionId: 'part4.aptType', pdfField: 'form1[0].#subform[4].Pt4Line11_Unit[0]', type: 'checkbox', value: 'apt' },
  { questionId: 'part4.aptType', pdfField: 'form1[0].#subform[4].Pt4Line11_Unit[1]', type: 'checkbox', value: 'ste' },
  { questionId: 'part4.aptType', pdfField: 'form1[0].#subform[4].Pt4Line11_Unit[2]', type: 'checkbox', value: 'flr' },
  { questionId: 'part4.aptNumber', pdfField: 'form1[0].#subform[4].Pt4Line11_AptSteFlrNumber[0]', type: 'text' },
  { questionId: 'part4.city', pdfField: 'form1[0].#subform[4].Pt4Line11_CityOrTown[0]', type: 'text' },
  { questionId: 'part4.state', pdfField: 'form1[0].#subform[4].Pt4Line11_State[0]', type: 'text' },
  { questionId: 'part4.zip', pdfField: 'form1[0].#subform[4].Pt4Line11_ZipCode[0]', type: 'text' },
  { questionId: 'part4.country', pdfField: 'form1[0].#subform[4].Pt4Line11_Country[0]', type: 'text' },
  
  // ============================================================================
  // PART 4: BENEFICIARY MARITAL INFORMATION
  // ============================================================================
  
  { questionId: 'part4.timesMarried', pdfField: 'form1[0].#subform[5].Pt4Line17_NumberofMarriages[0]', type: 'text' },
  
  // Marital status
  { questionId: 'part4.currentMaritalStatus', pdfField: 'form1[0].#subform[5].Pt4Line18_MaritalStatus[0]', type: 'checkbox', value: 'single' },
  { questionId: 'part4.currentMaritalStatus', pdfField: 'form1[0].#subform[5].Pt4Line18_MaritalStatus[1]', type: 'checkbox', value: 'married' },
  { questionId: 'part4.currentMaritalStatus', pdfField: 'form1[0].#subform[5].Pt4Line18_MaritalStatus[2]', type: 'checkbox', value: 'divorced' },
  { questionId: 'part4.currentMaritalStatus', pdfField: 'form1[0].#subform[5].Pt4Line18_MaritalStatus[3]', type: 'checkbox', value: 'widowed' },
  { questionId: 'part4.currentMaritalStatus', pdfField: 'form1[0].#subform[5].Pt4Line18_MaritalStatus[4]', type: 'checkbox', value: 'separated' },
  
  { questionId: 'part4.dateOfMarriage', pdfField: 'form1[0].#subform[5].Pt4Line19_DateOfMarriage[0]', type: 'date' },
  { questionId: 'part4.spouseName', pdfField: 'form1[0].#subform[5].Pt4Line18a_FamilyName[0]', type: 'text' },
  
  // ============================================================================
  // PART 4: IMMIGRATION INTENT
  // ============================================================================
  
  { questionId: 'part4.immigrationPath', pdfField: 'form1[0].#subform[7].Part4Line1_Yes[0]', type: 'radio', value: 'adjustment' },
  { questionId: 'part4.immigrationPath', pdfField: 'form1[0].#subform[7].Part4Line1_No[0]', type: 'radio', value: 'consular' },
  
  { questionId: 'part4.consularLocation', pdfField: 'form1[0].#subform[7].Pt4Line60a_CityOrTown[0]', type: 'text' },
];

// Generate TypeScript file
function generateMappingFile() {
  const timestamp = new Date().toISOString();
  
  const content = `/**
 * I-130 Field Mappings
 * Generated on: ${timestamp}
 * 
 * Maps form definition question IDs to PDF field names
 * Includes proper handling for radio buttons, checkboxes, and text fields
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string; // For radio/checkbox options - the value that triggers this field
}

export const I_130_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(I130_MAPPINGS, null, 2)};

// Total mappings: ${I130_MAPPINGS.length}
`;

  const outputPath = join(process.cwd(), 'src/lib/constants/form-mappings/i-130-field-mappings.ts');
  writeFileSync(outputPath, content, 'utf-8');
  
  console.log(`✅ Generated I-130 field mappings: ${outputPath}`);
  console.log(`📊 Total mappings: ${I130_MAPPINGS.length}`);
  
  // Generate summary
  const byType = I130_MAPPINGS.reduce((acc, m) => {
    const type = m.type || 'text';
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  console.log('\n📋 Mappings by type:');
  Object.entries(byType).forEach(([type, count]) => {
    console.log(`   ${type}: ${count}`);
  });
}

// Run the generator
generateMappingFile();
