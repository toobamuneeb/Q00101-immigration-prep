/**
 * I-90 PDF Field Mappings
 * Maps form definition questionIds to actual PDF field names
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_90_MAPPINGS: FieldMapping[] = [
  // Part 1 - Basic Information
  { questionId: "part1.alienNumber", pdfField: "form1[0].#subform[0].#area[1].P1_Line1_AlienNumber[0]" },
  { questionId: "part1.uscisAccountNumber", pdfField: "form1[0].#subform[0].P1_Line2_AcctIdentifier[0]" },
  { questionId: "part1.familyName", pdfField: "form1[0].#subform[0].P1_Line3a_FamilyName[0]" },
  { questionId: "part1.givenName", pdfField: "form1[0].#subform[0].P1_Line3b_GivenName[0]" },
  { questionId: "part1.middleName", pdfField: "form1[0].#subform[0].P1_Line3c_MiddleName[0]" },
  
  // Part 1 - Name at Admission
  { questionId: "part1.admissionFamilyName", pdfField: "form1[0].#subform[0].P1_Line5a_FamilyName[0]" },
  { questionId: "part1.admissionGivenName", pdfField: "form1[0].#subform[0].P1_Line5b_GivenName[0]" },
  { questionId: "part1.admissionMiddleName", pdfField: "form1[0].#subform[0].P1_Line5c_MiddleName[0]" },
  
  // Part 1 - Mailing Address
  { questionId: "part1.mailingInCareOf", pdfField: "form1[0].#subform[0].P1_Line6a_InCareofName[0]" },
  { questionId: "part1.mailingStreetNumber", pdfField: "form1[0].#subform[0].P1_Line6b_StreetNumberName[0]" },
  { questionId: "part1.mailingAptNumber", pdfField: "form1[0].#subform[0].P1_Line6c_AptSteFlrNumber[0]" },
  { questionId: "part1.mailingCity", pdfField: "form1[0].#subform[0].P1_Line6d_CityOrTown[0]" },
  { questionId: "part1.mailingState", pdfField: "form1[0].#subform[0].P1_Line6e_State[0]" },
  { questionId: "part1.mailingZipCode", pdfField: "form1[0].#subform[0].P1_Line6f_ZipCode[0]" },
  { questionId: "part1.mailingProvince", pdfField: "form1[0].#subform[0].P1_Line6g_Province[0]" },
  { questionId: "part1.mailingPostalCode", pdfField: "form1[0].#subform[0].P1_Line6h_PostalCode[0]" },
  { questionId: "part1.mailingCountry", pdfField: "form1[0].#subform[0].P1_Line6i_Country[0]" },
  
  // Part 1 - Unit Type (radio buttons)
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[2]", type: "radio", value: "flr" },
  
  // Part 1 - Physical Address (if different)
  { questionId: "part1.physicalStreetNumber", pdfField: "form1[0].#subform[0].P1_Line7a_StreetNumberName[0]" },
  { questionId: "part1.physicalAptNumber", pdfField: "form1[0].#subform[0].P1_Line7b_AptSteFlrNumber[0]" },
  { questionId: "part1.physicalCity", pdfField: "form1[0].#subform[0].P1_Line7c_CityOrTown[0]" },
  { questionId: "part1.physicalState", pdfField: "form1[0].#subform[0].P1_Line7d_State[0]" },
  { questionId: "part1.physicalZipCode", pdfField: "form1[0].#subform[0].P1_Line7e_ZipCode[0]" },
  { questionId: "part1.physicalProvince", pdfField: "form1[0].#subform[0].P1_Line7f_Province[0]" },
  { questionId: "part1.physicalPostalCode", pdfField: "form1[0].#subform[0].P1_Line7g_PostalCode[0]" },
  { questionId: "part1.physicalCountry", pdfField: "form1[0].#subform[0].P1_Line7h_Country[0]" },
  
  // Part 1 - Physical Unit Type (radio buttons)
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[2]", type: "radio", value: "flr" },
  
  // Part 1 - Gender (radio buttons)
  { questionId: "part1.gender", pdfField: "form1[0].#subform[1].P1_Line8_male[0]", type: "radio", value: "male" },
  { questionId: "part1.gender", pdfField: "form1[0].#subform[1].P1_Line8_female[0]", type: "radio", value: "female" },
  
  // Part 1 - Personal Information
  { questionId: "part1.dateOfBirth", pdfField: "form1[0].#subform[1].P1_Line9_DateOfBirth[0]" },
  { questionId: "part1.cityOfBirth", pdfField: "form1[0].#subform[1].P1_Line10_CityTownOfBirth[0]" },
  { questionId: "part1.countryOfBirth", pdfField: "form1[0].#subform[1].P1_Line11_CountryofBirth[0]" },
  { questionId: "part1.motherGivenName", pdfField: "form1[0].#subform[1].P1_Line12_MotherGivenName[0]" },
  { questionId: "part1.fatherGivenName", pdfField: "form1[0].#subform[1].P1_Line13_FatherGivenName[0]" },
  { questionId: "part1.classOfAdmission", pdfField: "form1[0].#subform[1].P1_Line14_ClassOfAdmission[0]" },
  { questionId: "part1.dateOfAdmission", pdfField: "form1[0].#subform[1].P1_Line15_DateOfAdmission[0]" },
  { questionId: "part1.socialSecurityNumber", pdfField: "form1[0].#subform[1].P1_Line16_SSN[0]" },
  
  // Part 2 - Application Type (radio buttons)
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[0]", type: "radio", value: "card_lost_stolen_destroyed" },
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[1]", type: "radio", value: "card_expired_will_expire" },
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[2]", type: "radio", value: "card_incorrect_data" },
  
  // Part 2 - Reason for Replacement (checkboxes)
  { questionId: "part2.reasonReplacement", pdfField: "form1[0].#subform[1].P2_checkbox2[0]", type: "checkbox", value: "never_received" },
  { questionId: "part2.reasonReplacement", pdfField: "form1[0].#subform[1].P2_checkbox2[1]", type: "checkbox", value: "lost" },
  { questionId: "part2.reasonReplacement", pdfField: "form1[0].#subform[1].P2_checkbox2[2]", type: "checkbox", value: "stolen" },
  { questionId: "part2.reasonReplacement", pdfField: "form1[0].#subform[1].P2_checkbox2[3]", type: "checkbox", value: "mutilated" },
  { questionId: "part2.reasonReplacement", pdfField: "form1[0].#subform[1].P2_checkbox2[4]", type: "checkbox", value: "destroyed" },
  
  // Part 3 - Processing Information
  { questionId: "part3.heightFeet", pdfField: "form1[0].#subform[2].P3_Line8_HeightFeet[0]" },
  { questionId: "part3.heightInches", pdfField: "form1[0].#subform[2].P3_Line8_HeightInches[0]" },
  
  // Part 3 - Ethnicity (radio buttons)
  { questionId: "part3.ethnicity", pdfField: "form1[0].#subform[2].P3_checkbox6[0]", type: "radio", value: "hispanic" },
  { questionId: "part3.ethnicity", pdfField: "form1[0].#subform[2].P3_checkbox6[1]", type: "radio", value: "not_hispanic" },
  
  // Part 3 - Race (checkboxes)
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_White[0]", type: "checkbox", value: "white" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Asian[0]", type: "checkbox", value: "asian" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Black[0]", type: "checkbox", value: "black" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Indian[0]", type: "checkbox", value: "american_indian" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Hawaiian[0]", type: "checkbox", value: "pacific_islander" },
  
  // Part 3 - Hair Color (radio buttons)
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[0]", type: "radio", value: "black" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[1]", type: "radio", value: "brown" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[2]", type: "radio", value: "blonde" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[3]", type: "radio", value: "gray" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[4]", type: "radio", value: "white" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[5]", type: "radio", value: "red" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[6]", type: "radio", value: "sandy" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox10[7]", type: "radio", value: "bald" },
  
  // Part 3 - Eye Color (radio buttons)
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[0]", type: "radio", value: "brown" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[1]", type: "radio", value: "blue" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[2]", type: "radio", value: "green" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[3]", type: "radio", value: "hazel" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[4]", type: "radio", value: "gray" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[5]", type: "radio", value: "black" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[6]", type: "radio", value: "pink" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[7]", type: "radio", value: "maroon" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox11[8]", type: "radio", value: "other" },
  
  // Part 4 - Accommodations
  { questionId: "part4.accommodationNeeded", pdfField: "form1[0].#subform[2].P4_checkbox1a[0]", type: "radio", value: "yes" },
  { questionId: "part4.accommodationNeeded", pdfField: "form1[0].#subform[3].P4_checkbox1b[0]", type: "radio", value: "no" },
  
  { questionId: "part4.accommodationDeaf", pdfField: "form1[0].#subform[2].P4_Line1a_AccomodationRequested[0]", type: "checkbox" },
  { questionId: "part4.accommodationBlind", pdfField: "form1[0].#subform[3].P4_Line1b_AccomodationRequested[0]", type: "checkbox" },
  { questionId: "part4.accommodationOther", pdfField: "form1[0].#subform[3].P4_Line1c_AccomodationRequested[0]", type: "checkbox" },
  
  // Part 5 - Contact Information
  { questionId: "part5.readLanguage", pdfField: "form1[0].#subform[3].P5_Checkbox1a[0]", type: "checkbox" },
  { questionId: "part5.interpreterUsed", pdfField: "form1[0].#subform[3].P5_Checkbox1b[0]", type: "checkbox" },
  { questionId: "part5.daytimePhone", pdfField: "form1[0].#subform[3].P5_Line3_DaytimePhoneNumber[0]" },
  { questionId: "part5.mobilePhone", pdfField: "form1[0].#subform[3].P5_Line4_MobilePhoneNumber[0]" },
  { questionId: "part5.emailAddress", pdfField: "form1[0].#subform[3].P5_Line5_EmailAddress[0]" },
  
  // Part 6 - Interpreter Information
  { questionId: "part6.interpreterFamilyName", pdfField: "form1[0].#subform[4].P6_Line1a_InterpretersFamilyName[0]" },
  { questionId: "part6.interpreterGivenName", pdfField: "form1[0].#subform[4].P6_Line1b_InterpretersGivenName[0]" },
  { questionId: "part6.interpreterBusinessName", pdfField: "form1[0].#subform[4].P6_Line2_NameofBusinessor[0]" },
  { questionId: "part6.interpreterStreet", pdfField: "form1[0].#subform[4].P6_Line3a_StreetNumberName[0]" },
  { questionId: "part6.interpreterAptNumber", pdfField: "form1[0].#subform[4].P6_Line3b_AptSteFlrNumber[0]" },
  { questionId: "part6.interpreterCity", pdfField: "form1[0].#subform[4].P6_Line3c_CityTown[0]" },
  { questionId: "part6.interpreterState", pdfField: "form1[0].#subform[4].P6_Line3d_State[0]" },
  { questionId: "part6.interpreterZipCode", pdfField: "form1[0].#subform[4].P6_Line3e_ZipCode[0]" },
  { questionId: "part6.interpreterProvince", pdfField: "form1[0].#subform[4].P6_Line3f_Province[0]" },
  { questionId: "part6.interpreterPostalCode", pdfField: "form1[0].#subform[4].P6_Line3g_PostalCode[0]" },
  { questionId: "part6.interpreterCountry", pdfField: "form1[0].#subform[4].P6_Line3h_Country[0]" },
  { questionId: "part6.interpreterPhone", pdfField: "form1[0].#subform[4].P6_Line4_InterpretersDaytimePhoneNumber[0]" },
  { questionId: "part6.interpreterEmail", pdfField: "form1[0].#subform[4].P6_Line5_InterpretersEmailAddress[0]" },
  { questionId: "part6.interpreterLanguage", pdfField: "form1[0].#subform[4].P6_Language[0]" },
  
  // Part 7 - Preparer Information
  { questionId: "part7.preparerFamilyName", pdfField: "form1[0].#subform[4].P7_Line1a_FamilyName[0]" },
  { questionId: "part7.preparerGivenName", pdfField: "form1[0].#subform[4].P7_Line1b_PreparersGivenName[0]" },
  { questionId: "part7.preparerBusinessName", pdfField: "form1[0].#subform[4].P7_Line2_NameofBusinessor[0]" },
  { questionId: "part7.preparerStreet", pdfField: "form1[0].#subform[4].P7_Line3a_StreetNumberName[0]" },
  { questionId: "part7.preparerAptNumber", pdfField: "form1[0].#subform[4].P7_Line3b_AptSteFlrNumber[0]" },
  { questionId: "part7.preparerCity", pdfField: "form1[0].#subform[4].P7_Line3c_CityTown[0]" },
  { questionId: "part7.preparerState", pdfField: "form1[0].#subform[4].P7_Line3d_State[0]" },
  { questionId: "part7.preparerZipCode", pdfField: "form1[0].#subform[4].P7_Line3e_ZipCode[0]" },
  { questionId: "part7.preparerProvince", pdfField: "form1[0].#subform[4].P7_Line3f_Province[0]" },
  { questionId: "part7.preparerPostalCode", pdfField: "form1[0].#subform[4].P7_Line3g_PostalCode[0]" },
  { questionId: "part7.preparerCountry", pdfField: "form1[0].#subform[4].P7_Line3h_Country[0]" },
  { questionId: "part7.preparerPhone", pdfField: "form1[0].#subform[4].P7_Line4_PreparersDaytimePhoneNumber[0]" },
  { questionId: "part7.preparerFax", pdfField: "form1[0].#subform[4].P7_Line5_PreparersFaxNumber[0]" },
  { questionId: "part7.preparerEmail", pdfField: "form1[0].#subform[4].P7_Line6_PreparersEmailAddress[0]" },
];
