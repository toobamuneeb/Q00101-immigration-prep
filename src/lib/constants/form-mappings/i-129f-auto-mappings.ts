/**
 * Field mappings for I-129F (Petition for Alien Fiancé(e))
 *
 * Updated on: 2025-12-17
 * Based on actual PDF field extraction
 *
 * Covers:
 * - Part 1: Petitioner Information (U.S. Citizen)
 * - Part 2: Beneficiary Information (Foreign Fiancé(e)/Spouse)
 * - Part 3: Relationship Information
 * - Part 4: Additional Questions
 * - Part 5: Contact Information
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_129F_AUTO_MAPPINGS: FieldMapping[] = [
  // ============================================================================
  // PART 1 - INFORMATION ABOUT YOU (PETITIONER)
  // ============================================================================
  
  // Line 1 - Alien Number (if any) - Support multiple field name conventions
  { questionId: 'part1.alienNumber', pdfField: 'form1[0].#subform[0].Pt1Line1_AlienNumber[0]' },
  { questionId: 'part1.1.alienNumber', pdfField: 'form1[0].#subform[0].Pt1Line1_AlienNumber[0]' },
  
  // Line 2 - USCIS Online Account Number - Support multiple field name conventions
  { questionId: 'part1.uscisAccountNumber', pdfField: 'form1[0].#subform[0].Pt1Line2_AcctIdentifier[0]' },
  { questionId: 'part1.2.uscisAccountNumber', pdfField: 'form1[0].#subform[0].Pt1Line2_AcctIdentifier[0]' },
  
  // Line 3 - SSN - Support multiple field name conventions
  { questionId: 'part1.3.ssn', pdfField: 'form1[0].#subform[0].Pt1Line3_SSN[0]' },
  { questionId: 'part1.4.ssn', pdfField: 'form1[0].#subform[0].Pt1Line3_SSN[0]' },
  
  // Line 4.a - Classification (K-1 or K-3) - Support multiple field name conventions
  { questionId: 'part1.4.classification', pdfField: 'form1[0].#subform[0].Pt1Line4a_Checkboxes[0]', type: 'checkbox', value: 'k1' },
  { questionId: 'part1.4.classification', pdfField: 'form1[0].#subform[0].Pt1Line4a_Checkboxes[1]', type: 'checkbox', value: 'k3' },
  { questionId: 'part1.1.classification', pdfField: 'form1[0].#subform[0].Pt1Line4a_Checkboxes[0]', type: 'checkbox', value: 'k1' },
  { questionId: 'part1.1.classification', pdfField: 'form1[0].#subform[0].Pt1Line4a_Checkboxes[1]', type: 'checkbox', value: 'k3' },
  
  // Line 5 - I-130 Filed (Yes/No) for K-3
  { questionId: 'part1.5.i130Filed', pdfField: 'form1[0].#subform[0].Pt1Line5_Checkboxes[0]', type: 'checkbox', value: 'yes' },
  { questionId: 'part1.5.i130Filed', pdfField: 'form1[0].#subform[0].Pt1Line5_Checkboxes[1]', type: 'checkbox', value: 'no' },
  
  // Line 6 - Your Full Name - Support multiple field name conventions
  { questionId: 'part1.6a.familyName', pdfField: 'form1[0].#subform[0].Pt1Line6a_FamilyName[0]' },
  { questionId: 'part1.6b.givenName', pdfField: 'form1[0].#subform[0].Pt1Line6b_GivenName[0]' },
  { questionId: 'part1.6c.middleName', pdfField: 'form1[0].#subform[0].Pt1Line6c_MiddleName[0]' },
  { questionId: 'part1.2a.familyName', pdfField: 'form1[0].#subform[0].Pt1Line6a_FamilyName[0]' },
  { questionId: 'part1.2b.givenName', pdfField: 'form1[0].#subform[0].Pt1Line6b_GivenName[0]' },
  { questionId: 'part1.2c.middleName', pdfField: 'form1[0].#subform[0].Pt1Line6c_MiddleName[0]' },
  
  // Line 7 - Other Names Used (single field maps to family name, or use separate fields)
  { questionId: 'part1.7.otherNamesUsed', pdfField: 'form1[0].#subform[0].Pt1Line7a_FamilyName[0]' },
  { questionId: 'part1.3.otherNamesUsed', pdfField: 'form1[0].#subform[0].Pt1Line7a_FamilyName[0]' },
  // If form collects separate other name fields, use these:
  { questionId: 'part1.3.otherNames.familyName', pdfField: 'form1[0].#subform[0].Pt1Line7a_FamilyName[0]' },
  { questionId: 'part1.3.otherNames.givenName', pdfField: 'form1[0].#subform[0].Pt1Line7b_GivenName[0]' },
  { questionId: 'part1.3.otherNames.middleName', pdfField: 'form1[0].#subform[0].Pt1Line7c_MiddleName[0]' },
  
  // Line 8 - Your Mailing Address
  { questionId: 'part1.8.inCareOf', pdfField: 'form1[0].#subform[0].Pt1Line8_InCareofName[0]' },
  { questionId: 'part1.8.mailingInCareOf', pdfField: 'form1[0].#subform[0].Pt1Line8_InCareofName[0]' },
  { questionId: 'part1.8a.mailingStreet', pdfField: 'form1[0].#subform[0].Pt1Line8_StreetNumberName[0]' },
  { questionId: 'part1.8b.aptSteFlr', pdfField: 'form1[0].#subform[0].Pt1Line8_Unit[0]', type: 'checkbox', value: 'apt' },
  { questionId: 'part1.8b.aptSteFlr', pdfField: 'form1[0].#subform[0].Pt1Line8_Unit[1]', type: 'checkbox', value: 'ste' },
  { questionId: 'part1.8b.aptSteFlr', pdfField: 'form1[0].#subform[0].Pt1Line8_Unit[2]', type: 'checkbox', value: 'flr' },
  { questionId: 'part1.8c.unitNumber', pdfField: 'form1[0].#subform[0].Pt1Line8_AptSteFlrNumber[0]' },
  { questionId: 'part1.8d.city', pdfField: 'form1[0].#subform[0].Pt1Line8_CityOrTown[0]' },
  { questionId: 'part1.8e.state', pdfField: 'form1[0].#subform[0].Pt1Line8_State[0]' },
  { questionId: 'part1.8f.zipCode', pdfField: 'form1[0].#subform[0].Pt1Line8_ZipCode[0]' },
  { questionId: 'part1.8g.province', pdfField: 'form1[0].#subform[0].Pt1Line8_Province[0]' },
  { questionId: 'part1.8h.postalCode', pdfField: 'form1[0].#subform[0].Pt1Line8_PostalCode[0]' },
  { questionId: 'part1.8i.country', pdfField: 'form1[0].#subform[0].Pt1Line8_Country[0]' },
  
  // Foreign address fields (for non-US addresses)
  { questionId: 'part1.8.province', pdfField: 'form1[0].#subform[0].Pt1Line8_Province[0]' },
  { questionId: 'part1.8.postalCode', pdfField: 'form1[0].#subform[0].Pt1Line8_PostalCode[0]' },
  { questionId: 'part1.8.country', pdfField: 'form1[0].#subform[0].Pt1Line8_Country[0]' },
  
  // Line 8.j - Physical Address Same as Mailing
  { questionId: 'part1.9.physicalAddressSameAsMailing', pdfField: 'form1[0].#subform[0].Pt1Line8j_Checkboxes[0]', type: 'checkbox', value: 'yes' },
  { questionId: 'part1.9.physicalAddressSameAsMailing', pdfField: 'form1[0].#subform[0].Pt1Line8j_Checkboxes[1]', type: 'checkbox', value: 'no' },
  
  // Line 9 - Physical Address (if different) - on subform[1]
  { questionId: 'part1.9.physicalStreet', pdfField: 'form1[0].#subform[1].Pt1Line9_StreetNumberName[0]' },
  { questionId: 'part1.9.physicalUnit', pdfField: 'form1[0].#subform[1].Pt1Line9_Unit[0]', type: 'checkbox', value: 'apt' },
  { questionId: 'part1.9.physicalUnit', pdfField: 'form1[0].#subform[1].Pt1Line9_Unit[1]', type: 'checkbox', value: 'ste' },
  { questionId: 'part1.9.physicalUnit', pdfField: 'form1[0].#subform[1].Pt1Line9_Unit[2]', type: 'checkbox', value: 'flr' },
  { questionId: 'part1.9.physicalCity', pdfField: 'form1[0].#subform[1].Pt1Line9_CityOrTown[0]' },
  { questionId: 'part1.9.physicalState', pdfField: 'form1[0].#subform[1].Pt1Line9_State[0]' },
  { questionId: 'part1.9.physicalZipCode', pdfField: 'form1[0].#subform[1].Pt1Line9_ZipCode[0]' },
  { questionId: 'part1.9.physicalProvince', pdfField: 'form1[0].#subform[1].Pt1Line9_Province[0]' },
  { questionId: 'part1.9.physicalPostalCode', pdfField: 'form1[0].#subform[1].Pt1Line9_PostalCode[0]' },
  { questionId: 'part1.9.physicalCountry', pdfField: 'form1[0].#subform[1].Pt1Line9_Country[0]' },
  
  // Date of Birth, Place of Birth, Citizenship - Need to find these fields
  { questionId: 'part1.5.dateOfBirth', pdfField: 'form1[0].#subform[0].Pt1Line5_DOB[0]' },
  { questionId: 'part1.6.placeOfBirth.city', pdfField: 'form1[0].#subform[0].Pt1Line6_CityTown[0]' },
  { questionId: 'part1.6.placeOfBirth.country', pdfField: 'form1[0].#subform[0].Pt1Line6_Country[0]' },
  { questionId: 'part1.7.howCitizenshipObtained', pdfField: 'form1[0].#subform[0].Pt1Line7_Birth[0]', type: 'checkbox', value: 'birth' },
  { questionId: 'part1.7.howCitizenshipObtained', pdfField: 'form1[0].#subform[0].Pt1Line7_Naturalization[0]', type: 'checkbox', value: 'naturalization' },
  { questionId: 'part1.7.howCitizenshipObtained', pdfField: 'form1[0].#subform[0].Pt1Line7_Parents[0]', type: 'checkbox', value: 'parents' },
  
  // Marital Status, Occupation, Employer - on subform[1]
  { questionId: 'part1.10.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt1Line10_Single[0]', type: 'checkbox', value: 'single' },
  { questionId: 'part1.10.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt1Line10_Married[0]', type: 'checkbox', value: 'married' },
  { questionId: 'part1.10.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt1Line10_Divorced[0]', type: 'checkbox', value: 'divorced' },
  { questionId: 'part1.10.currentMaritalStatus', pdfField: 'form1[0].#subform[1].Pt1Line10_Widowed[0]', type: 'checkbox', value: 'widowed' },
  
  { questionId: 'part1.11.numberOfPriorMarriages', pdfField: 'form1[0].#subform[1].Pt1Line11_NumberMarriages[0]' },
  { questionId: 'part1.12.dateLastMarriageEnded', pdfField: 'form1[0].#subform[1].Pt1Line12_DateEnded[0]' },
  
  { questionId: 'part1.13.howLastMarriageEnded', pdfField: 'form1[0].#subform[1].Pt1Line13_Death[0]', type: 'checkbox', value: 'death' },
  { questionId: 'part1.13.howLastMarriageEnded', pdfField: 'form1[0].#subform[1].Pt1Line13_Divorce[0]', type: 'checkbox', value: 'divorce' },
  { questionId: 'part1.13.howLastMarriageEnded', pdfField: 'form1[0].#subform[1].Pt1Line13_Annulment[0]', type: 'checkbox', value: 'annulment' },
  
  { questionId: 'part1.14.occupation', pdfField: 'form1[0].#subform[1].Pt1Line15_Occupation[0]' },
  { questionId: 'part1.15.employerName', pdfField: 'form1[0].#subform[1].Pt1Line13_NameofEmployer[0]' },
  
  // Employer Address
  { questionId: 'part1.16.employerAddress.street', pdfField: 'form1[0].#subform[1].Pt1Line18_StreetNumberName[0]' },
  { questionId: 'part1.16.employerAddress.city', pdfField: 'form1[0].#subform[1].Pt1Line18_CityOrTown[0]' },
  { questionId: 'part1.16.employerAddress.state', pdfField: 'form1[0].#subform[1].Pt1Line18_State[0]' },
  
  // ============================================================================
  // PART 2 - INFORMATION ABOUT YOUR BENEFICIARY
  // ============================================================================
  
  // Line 1 - Beneficiary Full Name
  { questionId: 'part2.1a.familyName', pdfField: 'form1[0].#subform[3].Pt2Line1a_FamilyName[0]' },
  { questionId: 'part2.1b.givenName', pdfField: 'form1[0].#subform[3].Pt2Line1b_GivenName[0]' },
  { questionId: 'part2.1c.middleName', pdfField: 'form1[0].#subform[3].Pt2Line1c_MiddleName[0]' },
  
  // Line 2 - Alien Number
  { questionId: 'part2.3.alienNumber', pdfField: 'form1[0].#subform[3].Pt2Line2_AlienNumber[0]' },
  
  // Line 3 - SSN
  { questionId: 'part2.4.ssn', pdfField: 'form1[0].#subform[3].Pt2Line3_SSN[0]' },
  
  // Line 4 - Date of Birth
  { questionId: 'part2.5.dateOfBirth', pdfField: 'form1[0].#subform[3].Pt2Line4_DateOfBirth[0]' },
  
  // Line 5 - Gender
  { questionId: 'part2.5.gender', pdfField: 'form1[0].#subform[3].Pt2Line5_Checkboxes[0]', type: 'checkbox', value: 'male' },
  { questionId: 'part2.5.gender', pdfField: 'form1[0].#subform[3].Pt2Line5_Checkboxes[1]', type: 'checkbox', value: 'female' },
  
  // Line 6 - Marital Status
  { questionId: 'part2.9.currentMaritalStatus', pdfField: 'form1[0].#subform[3].Pt2Line6_Checkboxes[0]', type: 'checkbox', value: 'single' },
  { questionId: 'part2.9.currentMaritalStatus', pdfField: 'form1[0].#subform[3].Pt2Line6_Checkboxes[1]', type: 'checkbox', value: 'married' },
  { questionId: 'part2.9.currentMaritalStatus', pdfField: 'form1[0].#subform[3].Pt2Line6_Checkboxes[2]', type: 'checkbox', value: 'divorced' },
  { questionId: 'part2.9.currentMaritalStatus', pdfField: 'form1[0].#subform[3].Pt2Line6_Checkboxes[3]', type: 'checkbox', value: 'widowed' },
  
  // Line 7 - City/Town of Birth
  { questionId: 'part2.6.cityOfBirth', pdfField: 'form1[0].#subform[3].Pt2Line7_CityTownOfBirth[0]' },
  
  // Line 8 - Country of Birth
  { questionId: 'part2.6.countryOfBirth', pdfField: 'form1[0].#subform[3].Pt2Line8_CountryOfBirth[0]' },
  
  // Line 9 - Country of Citizenship
  { questionId: 'part2.7.countryOfCitizenship', pdfField: 'form1[0].#subform[3].Pt2Line9_CountryofCitzOrNationality[0]' },
  
  // Line 10 - Other Names Used
  { questionId: 'part2.2.otherNamesUsed', pdfField: 'form1[0].#subform[3].Pt2Line10a_FamilyName[0]' },
  { questionId: 'part2.2.otherNamesGiven', pdfField: 'form1[0].#subform[3].Pt2Line10b_GivenName[0]' },
  { questionId: 'part2.2.otherNamesMiddle', pdfField: 'form1[0].#subform[3].Pt2Line10c_MiddleName[0]' },
  
  // Line 11 - Beneficiary Address (on subform[4])
  { questionId: 'part2.8.inCareOf', pdfField: 'form1[0].#subform[4].Pt2Line11_InCareOfName[0]' },
  { questionId: 'part2.8.addressStreet', pdfField: 'form1[0].#subform[4].Pt2Line11_StreetNumberName[0]' },
  { questionId: 'part2.8.unit', pdfField: 'form1[0].#subform[4].Pt2Line11_Unit[0]', type: 'checkbox', value: 'apt' },
  { questionId: 'part2.8.unit', pdfField: 'form1[0].#subform[4].Pt2Line11_Unit[1]', type: 'checkbox', value: 'ste' },
  { questionId: 'part2.8.unit', pdfField: 'form1[0].#subform[4].Pt2Line11_Unit[2]', type: 'checkbox', value: 'flr' },
  { questionId: 'part2.8.unitNumber', pdfField: 'form1[0].#subform[4].Pt2Line11_AptSteFlrNumber[0]' },
  { questionId: 'part2.8.city', pdfField: 'form1[0].#subform[4].Pt2Line11_CityOrTown[0]' },
  { questionId: 'part2.8.state', pdfField: 'form1[0].#subform[4].Pt2Line11_State[0]' },
  { questionId: 'part2.8.zipCode', pdfField: 'form1[0].#subform[4].Pt2Line11_ZipCode[0]' },
  { questionId: 'part2.8.province', pdfField: 'form1[0].#subform[4].Pt2Line11_Province[0]' },
  { questionId: 'part2.8.postalCode', pdfField: 'form1[0].#subform[4].Pt2Line11_PostalCode[0]' },
  { questionId: 'part2.8.country', pdfField: 'form1[0].#subform[4].Pt2Line11_Country[0]' },
  
  // Additional beneficiary info
  { questionId: 'part2.10.numberOfPriorMarriages', pdfField: 'form1[0].#subform[4].Pt2Line10_NumberMarriages[0]' },
  { questionId: 'part2.11.dateLastMarriageEnded', pdfField: 'form1[0].#subform[4].Pt2Line11_DateEnded[0]' },
  { questionId: 'part2.12.children', pdfField: 'form1[0].#subform[4].Pt2Line12_NumberChildren[0]' },
  
  // ============================================================================
  // PART 3 - INFORMATION ABOUT YOUR RELATIONSHIP
  // ============================================================================
  
  { questionId: 'part3.1.dateFirstMet', pdfField: 'form1[0].#subform[5].Pt3Line1_DateMet[0]' },
  { questionId: 'part3.2.placeFirstMet.city', pdfField: 'form1[0].#subform[5].Pt3Line2_CityTown[0]' },
  { questionId: 'part3.2.placeFirstMet.country', pdfField: 'form1[0].#subform[5].Pt3Line2_Country[0]' },
  { questionId: 'part3.3.howMet', pdfField: 'form1[0].#subform[5].Pt3Line3_HowMet[0]' },
  
  { questionId: 'part3.4.metThroughIMB', pdfField: 'form1[0].#subform[5].Pt3Line4_Yes[0]', type: 'checkbox', value: 'yes' },
  { questionId: 'part3.4.metThroughIMB', pdfField: 'form1[0].#subform[5].Pt3Line4_No[0]', type: 'checkbox', value: 'no' },
  
  { questionId: 'part3.5.dateOfMarriage', pdfField: 'form1[0].#subform[5].Pt3Line5_DateMarriage[0]' },
  { questionId: 'part3.6.placeOfMarriage', pdfField: 'form1[0].#subform[5].Pt3Line6_PlaceMarriage[0]' },
  
  // ============================================================================
  // PART 4 - ADDITIONAL INFORMATION
  // ============================================================================
  
  { questionId: 'part4.1.criminalConvictions', pdfField: 'form1[0].#subform[6].Pt4Line1_Yes[0]', type: 'checkbox', value: 'yes' },
  { questionId: 'part4.1.criminalConvictions', pdfField: 'form1[0].#subform[6].Pt4Line1_No[0]', type: 'checkbox', value: 'no' },
  
  { questionId: 'part4.2.filedPreviousPetitions', pdfField: 'form1[0].#subform[6].Pt4Line2_Yes[0]', type: 'checkbox', value: 'yes' },
  { questionId: 'part4.2.filedPreviousPetitions', pdfField: 'form1[0].#subform[6].Pt4Line2_No[0]', type: 'checkbox', value: 'no' },
  
  { questionId: 'part4.3.previousK1Petitions', pdfField: 'form1[0].#subform[6].Pt4Line3_Number[0]' },
  
  // ============================================================================
  // PART 5 - CONTACT INFORMATION
  // ============================================================================
  
  { questionId: 'part5.1.daytimePhone', pdfField: 'form1[0].#subform[7].Pt5Line1_DaytimePhone[0]' },
  { questionId: 'part5.2.mobilePhone', pdfField: 'form1[0].#subform[7].Pt5Line2_MobilePhone[0]' },
  { questionId: 'part5.3.email', pdfField: 'form1[0].#subform[7].Pt5Line3_Email[0]' },
];
