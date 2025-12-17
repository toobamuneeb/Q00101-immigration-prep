/**
 * Auto-generated field mappings for I-90
 * Generated on: 2025-12-16T01:00:38.545Z
 * Total fields: 182
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_90_AUTO_MAPPINGS: FieldMapping[] = [
  // Gender - Support both old and new field naming conventions
  { questionId: "part1.line8.gender", pdfField: "form1[0].#subform[1].P1_Line8_male[0]", type: "radio", value: "male" },
  { questionId: "part1.gender", pdfField: "form1[0].#subform[1].P1_Line8_male[0]", type: "radio", value: "male" },
  { questionId: "part1.line8.gender", pdfField: "form1[0].#subform[1].P1_Line8_female[0]", type: "radio", value: "female" },
  { questionId: "part1.gender", pdfField: "form1[0].#subform[1].P1_Line8_female[0]", type: "radio", value: "female" },
  
  // Ethnicity (radio buttons)
  { questionId: "part3.ethnicity", pdfField: "form1[0].#subform[2].P3_checkbox6[0]", type: "radio", value: "hispanic" },
  { questionId: "part3.ethnicity", pdfField: "form1[0].#subform[2].P3_checkbox6[1]", type: "radio", value: "not_hispanic" },
  
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Hawaiian[0]", type: "checkbox", value: "pacific_islander" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Indian[0]", type: "checkbox", value: "american_indian" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_White[0]", type: "checkbox", value: "white" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Asian[0]", type: "checkbox", value: "asian" },
  { questionId: "part3.race", pdfField: "form1[0].#subform[2].P3_checkbox7_Black[0]", type: "checkbox", value: "black" },
  
  // Hair Color (radio buttons) - P3_checkbox11
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[0]", type: "radio", value: "bald" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[1]", type: "radio", value: "blonde" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[2]", type: "radio", value: "gray" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[3]", type: "radio", value: "sandy" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[5]", type: "radio", value: "white" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[6]", type: "radio", value: "red" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[7]", type: "radio", value: "brown" },
  { questionId: "part3.hairColor", pdfField: "form1[0].#subform[2].P3_checkbox11[8]", type: "radio", value: "black" },
  
  // Eye Color (radio buttons) - P3_checkbox10
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[0]", type: "radio", value: "blue" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[1]", type: "radio", value: "green" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[2]", type: "radio", value: "hazel" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[3]", type: "radio", value: "pink" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[4]", type: "radio", value: "maroon" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[5]", type: "radio", value: "brown" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[6]", type: "radio", value: "black" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[7]", type: "radio", value: "other" },
  { questionId: "part3.eyeColor", pdfField: "form1[0].#subform[2].P3_checkbox10[8]", type: "radio", value: "gray" },
  
  { questionId: "part7.representation.extends", pdfField: "form1[0].#subform[5].P7_checkbox7Extend[0]", type: "radio", value: "extends" },
  { questionId: "part7.representation.extends", pdfField: "form1[0].#subform[5].P7_checkbox7Extend[1]", type: "radio", value: "does-not-extend" },
  // Full Name - Support both old and new field naming conventions
  { questionId: "part1.line3a.familyname", pdfField: "form1[0].#subform[0].P1_Line3a_FamilyName[0]" },
  { questionId: "part1.familyName", pdfField: "form1[0].#subform[0].P1_Line3a_FamilyName[0]" },
  
  { questionId: "part1.line3b.givenname", pdfField: "form1[0].#subform[0].P1_Line3b_GivenName[0]" },
  { questionId: "part1.givenName", pdfField: "form1[0].#subform[0].P1_Line3b_GivenName[0]" },
  
  { questionId: "part1.line3c.middlename", pdfField: "form1[0].#subform[0].P1_Line3c_MiddleName[0]" },
  { questionId: "part1.middleName", pdfField: "form1[0].#subform[0].P1_Line3c_MiddleName[0]" },
  // Mailing Address - Support both old and new field naming conventions
  { questionId: "part1.line6a.incareofname", pdfField: "form1[0].#subform[0].P1_Line6a_InCareofName[0]" },
  { questionId: "part1.mailingInCareOf", pdfField: "form1[0].#subform[0].P1_Line6a_InCareofName[0]" },
  
  { questionId: "part1.line6b.streetnumbername", pdfField: "form1[0].#subform[0].P1_Line6b_StreetNumberName[0]" },
  { questionId: "part1.mailingStreetNumber", pdfField: "form1[0].#subform[0].P1_Line6b_StreetNumberName[0]" },
  
  // Part 1 - Mailing Unit Type (radio buttons)
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part1.mailingUnitType", pdfField: "form1[0].#subform[0].P1_checkbox6c_Unit[2]", type: "radio", value: "flr" },
  
  { questionId: "part1.line6c.aptsteflrnumber", pdfField: "form1[0].#subform[0].P1_Line6c_AptSteFlrNumber[0]" },
  { questionId: "part1.mailingAptNumber", pdfField: "form1[0].#subform[0].P1_Line6c_AptSteFlrNumber[0]" },
  
  { questionId: "part1.line6d.cityortown", pdfField: "form1[0].#subform[0].P1_Line6d_CityOrTown[0]" },
  { questionId: "part1.mailingCity", pdfField: "form1[0].#subform[0].P1_Line6d_CityOrTown[0]" },
  
  { questionId: "part1.line6e.state", pdfField: "form1[0].#subform[0].P1_Line6e_State[0]" },
  { questionId: "part1.mailingState", pdfField: "form1[0].#subform[0].P1_Line6e_State[0]" },
  
  { questionId: "part1.line6f.zipcode", pdfField: "form1[0].#subform[0].P1_Line6f_ZipCode[0]" },
  { questionId: "part1.mailingZipCode", pdfField: "form1[0].#subform[0].P1_Line6f_ZipCode[0]" },
  
  { questionId: "part1.line6g.province", pdfField: "form1[0].#subform[0].P1_Line6g_Province[0]" },
  { questionId: "part1.mailingProvince", pdfField: "form1[0].#subform[0].P1_Line6g_Province[0]" },
  
  { questionId: "part1.line6h.postalcode", pdfField: "form1[0].#subform[0].P1_Line6h_PostalCode[0]" },
  { questionId: "part1.mailingPostalCode", pdfField: "form1[0].#subform[0].P1_Line6h_PostalCode[0]" },
  
  { questionId: "part1.line6i.country", pdfField: "form1[0].#subform[0].P1_Line6i_Country[0]" },
  { questionId: "part1.mailingCountry", pdfField: "form1[0].#subform[0].P1_Line6i_Country[0]" },
  // Name at Admission - Support both old and new field naming conventions
  { questionId: "part1.line5a.familyname", pdfField: "form1[0].#subform[0].P1_Line5a_FamilyName[0]" },
  { questionId: "part1.admissionFamilyName", pdfField: "form1[0].#subform[0].P1_Line5a_FamilyName[0]" },
  
  { questionId: "part1.line5b.givenname", pdfField: "form1[0].#subform[0].P1_Line5b_GivenName[0]" },
  { questionId: "part1.admissionGivenName", pdfField: "form1[0].#subform[0].P1_Line5b_GivenName[0]" },
  
  { questionId: "part1.line5c.middlename", pdfField: "form1[0].#subform[0].P1_Line5c_MiddleName[0]" },
  { questionId: "part1.admissionMiddleName", pdfField: "form1[0].#subform[0].P1_Line5c_MiddleName[0]" },
  
  // USCIS Account Number
  { questionId: "part1.line2.acctidentifier", pdfField: "form1[0].#subform[0].P1_Line2_AcctIdentifier[0]" },
  { questionId: "part1.uscisAccountNumber", pdfField: "form1[0].#subform[0].P1_Line2_AcctIdentifier[0]" },
  { questionId: "part1.line6g.province", pdfField: "form1[0].#subform[0].P1_Line6g_Province[0]" },
  // A-Number - Support both old and new field naming conventions
  { questionId: "part1.line1.aliennumber", pdfField: "form1[0].#subform[0].#area[1].P1_Line1_AlienNumber[0]" },
  { questionId: "part1.alienNumber", pdfField: "form1[0].#subform[0].#area[1].P1_Line1_AlienNumber[0]" },
  
  // Physical Address - Support both old and new field naming conventions
  { questionId: "part1.line7a.streetnumbername", pdfField: "form1[0].#subform[0].P1_Line7a_StreetNumberName[0]" },
  { questionId: "part1.physicalStreetNumber", pdfField: "form1[0].#subform[0].P1_Line7a_StreetNumberName[0]" },
  
  // Part 1 - Physical Address Unit Type (radio buttons)
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part1.physicalUnitType", pdfField: "form1[0].#subform[0].P1_checkbox7b_Unit[2]", type: "radio", value: "flr" },
  
  { questionId: "part1.line7b.aptsteflrnumber", pdfField: "form1[0].#subform[0].P1_Line7b_AptSteFlrNumber[0]" },
  { questionId: "part1.physicalAptNumber", pdfField: "form1[0].#subform[0].P1_Line7b_AptSteFlrNumber[0]" },
  
  { questionId: "part1.line7c.cityortown", pdfField: "form1[0].#subform[0].P1_Line7c_CityOrTown[0]" },
  { questionId: "part1.physicalCity", pdfField: "form1[0].#subform[0].P1_Line7c_CityOrTown[0]" },
  
  { questionId: "part1.line7d.state", pdfField: "form1[0].#subform[0].P1_Line7d_State[0]" },
  { questionId: "part1.physicalState", pdfField: "form1[0].#subform[0].P1_Line7d_State[0]" },
  
  { questionId: "part1.line7e.zipcode", pdfField: "form1[0].#subform[0].P1_Line7e_ZipCode[0]" },
  { questionId: "part1.physicalZipCode", pdfField: "form1[0].#subform[0].P1_Line7e_ZipCode[0]" },
  
  { questionId: "part1.line7f.province", pdfField: "form1[0].#subform[0].P1_Line7f_Province[0]" },
  { questionId: "part1.physicalProvince", pdfField: "form1[0].#subform[0].P1_Line7f_Province[0]" },
  
  { questionId: "part1.line7g.postalcode", pdfField: "form1[0].#subform[0].P1_Line7g_PostalCode[0]" },
  { questionId: "part1.physicalPostalCode", pdfField: "form1[0].#subform[0].P1_Line7g_PostalCode[0]" },
  
  { questionId: "part1.line7h.country", pdfField: "form1[0].#subform[0].P1_Line7h_Country[0]" },
  { questionId: "part1.physicalCountry", pdfField: "form1[0].#subform[0].P1_Line7h_Country[0]" },
  // Personal Information - Support both old and new field naming conventions
  { questionId: "part1.line9.dateofbirth", pdfField: "form1[0].#subform[1].P1_Line9_DateOfBirth[0]" },
  { questionId: "part1.dateOfBirth", pdfField: "form1[0].#subform[1].P1_Line9_DateOfBirth[0]" },
  
  { questionId: "part1.line10.citytownofbirth", pdfField: "form1[0].#subform[1].P1_Line10_CityTownOfBirth[0]" },
  { questionId: "part1.cityOfBirth", pdfField: "form1[0].#subform[1].P1_Line10_CityTownOfBirth[0]" },
  
  { questionId: "part1.line11.countryofbirth", pdfField: "form1[0].#subform[1].P1_Line11_CountryofBirth[0]" },
  { questionId: "part1.countryOfBirth", pdfField: "form1[0].#subform[1].P1_Line11_CountryofBirth[0]" },
  // Additional Personal Information - Support both old and new field naming conventions
  { questionId: "part1.line12.mothergivenname", pdfField: "form1[0].#subform[1].P1_Line12_MotherGivenName[0]" },
  { questionId: "part1.motherGivenName", pdfField: "form1[0].#subform[1].P1_Line12_MotherGivenName[0]" },
  
  { questionId: "part1.line13.fathergivenname", pdfField: "form1[0].#subform[1].P1_Line13_FatherGivenName[0]" },
  { questionId: "part1.fatherGivenName", pdfField: "form1[0].#subform[1].P1_Line13_FatherGivenName[0]" },
  
  { questionId: "part1.line14.classofadmission", pdfField: "form1[0].#subform[1].P1_Line14_ClassOfAdmission[0]" },
  { questionId: "part1.classOfAdmission", pdfField: "form1[0].#subform[1].P1_Line14_ClassOfAdmission[0]" },
  
  { questionId: "part1.line15.dateofadmission", pdfField: "form1[0].#subform[1].P1_Line15_DateOfAdmission[0]" },
  { questionId: "part1.dateOfAdmission", pdfField: "form1[0].#subform[1].P1_Line15_DateOfAdmission[0]" },
  
  { questionId: "part1.line16.ssn", pdfField: "form1[0].#subform[1].P1_Line16_SSN[0]" },
  { questionId: "part1.ssn", pdfField: "form1[0].#subform[1].P1_Line16_SSN[0]" },
  
  // Part 2 - Application Type (radio buttons) - Status
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[0]", type: "radio", value: "lawful_permanent_resident" },
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[1]", type: "radio", value: "permanent_resident_commuter" },
  { questionId: "part2.applicationType", pdfField: "form1[0].#subform[1].P2_checkbox1[2]", type: "radio", value: "conditional_permanent_resident" },
  
  // Part 2 - Reason for Application (radio buttons - select only one)
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[0]", type: "radio", value: "never_received" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[1]", type: "radio", value: "lost_stolen_destroyed" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[2]", type: "radio", value: "mutilated" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[3]", type: "radio", value: "incorrect_data_dhs" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[4]", type: "radio", value: "name_changed" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[5]", type: "radio", value: "expired" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[6]", type: "radio", value: "14_birthday" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[7]", type: "radio", value: "taking_commuter" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[8]", type: "radio", value: "commuter_residence" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[9]", type: "radio", value: "converted_lpr" },
  { questionId: "part2.reasonApplication", pdfField: "form1[0].#subform[1].P2_checkbox2[10]", type: "radio", value: "other" },
  
  { questionId: "part2.line2h.cityandstate", pdfField: "form1[0].#subform[1].P2_Line2h1_CityandState[0]" },
  { questionId: "part3.line1.locationappliedvisa", pdfField: "form1[0].#subform[2].P3_Line1_LocationAppliedVisa[0]" },
  { questionId: "part3.line2.locationissuedvisa", pdfField: "form1[0].#subform[2].P3_Line2_LocationIssuedVisa[0]" },
  { questionId: "part3.line8.heightfeet", pdfField: "form1[0].#subform[2].P3_Line8_HeightFeet[0]" },
  { questionId: "part3.heightFeet", pdfField: "form1[0].#subform[2].P3_Line8_HeightFeet[0]" },
  { questionId: "part3.line8.heightinches", pdfField: "form1[0].#subform[2].P3_Line8_HeightInches[0]" },
  { questionId: "part3.heightInches", pdfField: "form1[0].#subform[2].P3_Line8_HeightInches[0]" },
  // Part 3 - Weight (3 separate digit boxes)
  { questionId: "part3.line9.weight1", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches1[0]" },
  { questionId: "part3.line9.weight2", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches2[0]" },
  { questionId: "part3.line9.weight3", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches3[0]" },
  { questionId: "part3.weight1", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches1[0]" },
  { questionId: "part3.weight2", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches2[0]" },
  { questionId: "part3.weight3", pdfField: "form1[0].#subform[2].P3_Line9_HeightInches3[0]" },
  { questionId: "part3.line3a.cityandstate", pdfField: "form1[0].#subform[2].P3_Line3a1_CityandState[0]" },
  { questionId: "part3.line3a.destination", pdfField: "form1[0].#subform[2].P3_Line3a_Destination[0]", type: "checkbox" },
  // Part 4 - Accommodations (Yes/No)
  { questionId: "part4.accommodationNeeded", pdfField: "form1[0].#subform[2].P4_checkbox1[0]", type: "radio", value: "yes" },
  { questionId: "part4.accommodationNeeded", pdfField: "form1[0].#subform[2].P4_checkbox1[1]", type: "radio", value: "no" },
  
  // Part 4 - Specific Accommodations (checkboxes)
  { questionId: "part4.accommodationDeaf", pdfField: "form1[0].#subform[2].P4_checkbox1a[0]", type: "checkbox" },
  { questionId: "part4.accommodationBlind", pdfField: "form1[0].#subform[3].P4_checkbox1b[0]", type: "checkbox" },
  { questionId: "part4.accommodationOther", pdfField: "form1[0].#subform[3].P4_checkbox1c[0]", type: "checkbox" },
  // Part 5 - Applicant Statement
  { questionId: "part5.readLanguage", pdfField: "form1[0].#subform[3].P5_Checkbox1a[0]", type: "checkbox" },
  { questionId: "part5.interpreterUsed", pdfField: "form1[0].#subform[3].P5_Checkbox1b[0]", type: "checkbox" },
  { questionId: "part5.line2.nameofrepresentative", pdfField: "form1[0].#subform[3].P5_Line2_NameofRepresentative[0]" },
  { questionId: "part5.line5.emailaddress", pdfField: "form1[0].#subform[3].P5_Line5_EmailAddress[0]" },
  { questionId: "part5.line3.daytimephonenumber", pdfField: "form1[0].#subform[3].P5_Line3_DaytimePhoneNumber[0]" },
  { questionId: "part5.line4.mobilephonenumber", pdfField: "form1[0].#subform[3].P5_Line4_MobilePhoneNumber[0]" },
  { questionId: "part6.line1b.interpretersgivenname", pdfField: "form1[0].#subform[4].P6_Line1b_InterpretersGivenName[0]" },
  { questionId: "part6.line1a.interpretersfamilyname", pdfField: "form1[0].#subform[4].P6_Line1a_InterpretersFamilyName[0]" },
  { questionId: "part6.line2.nameofbusinessor", pdfField: "form1[0].#subform[4].P6_Line2_NameofBusinessor[0]" },
  { questionId: "part6.line3c.citytown", pdfField: "form1[0].#subform[4].P6_Line3c_CityTown[0]" },
  { questionId: "part6.line3a.streetnumbername", pdfField: "form1[0].#subform[4].P6_Line3a_StreetNumberName[0]" },
  // Part 6 - Interpreter Address Unit Type (radio buttons)
  { questionId: "part6.unitType", pdfField: "form1[0].#subform[4].P6_checkbox3b_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part6.unitType", pdfField: "form1[0].#subform[4].P6_checkbox3b_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part6.unitType", pdfField: "form1[0].#subform[4].P6_checkbox3b_Unit[2]", type: "radio", value: "flr" },
  { questionId: "part6.line3b.aptsteflrnumber", pdfField: "form1[0].#subform[4].P6_Line3b_AptSteFlrNumber[0]" },
  { questionId: "part6.line3f.province", pdfField: "form1[0].#subform[4].P6_Line3f_Province[0]" },
  { questionId: "part6.line3e.zipcode", pdfField: "form1[0].#subform[4].P6_Line3e_ZipCode[0]" },
  { questionId: "part6.line3d.state", pdfField: "form1[0].#subform[4].P6_Line3d_State[0]" },
  { questionId: "part6.line3h.country", pdfField: "form1[0].#subform[4].P6_Line3h_Country[0]" },
  { questionId: "part6.line3g.postalcode", pdfField: "form1[0].#subform[4].P6_Line3g_PostalCode[0]" },
  { questionId: "part6.line4.interpretersdaytimephonenumber", pdfField: "form1[0].#subform[4].P6_Line4_InterpretersDaytimePhoneNumber[0]" },
  { questionId: "part6.line5.interpretersemailaddress", pdfField: "form1[0].#subform[4].P6_Line5_InterpretersEmailAddress[0]" },
  { questionId: "part6.interpreter.language", pdfField: "form1[0].#subform[4].P6_Language[0]" },
  { questionId: "part7.line1a.familyname", pdfField: "form1[0].#subform[4].P7_Line1a_FamilyName[0]" },
  { questionId: "part7.line1b.preparersgivenname", pdfField: "form1[0].#subform[4].P7_Line1b_PreparersGivenName[0]" },
  { questionId: "part7.line2.nameofbusinessor", pdfField: "form1[0].#subform[4].P7_Line2_NameofBusinessor[0]" },
  { questionId: "part7.line3c.citytown", pdfField: "form1[0].#subform[4].P7_Line3c_CityTown[0]" },
  { questionId: "part7.line3a.streetnumbername", pdfField: "form1[0].#subform[4].P7_Line3a_StreetNumberName[0]" },
  // Part 7 - Preparer Address Unit Type (radio buttons)
  { questionId: "part7.unitType", pdfField: "form1[0].#subform[4].P7_checkbox3b_Unit[0]", type: "radio", value: "apt" },
  { questionId: "part7.unitType", pdfField: "form1[0].#subform[4].P7_checkbox3b_Unit[1]", type: "radio", value: "ste" },
  { questionId: "part7.unitType", pdfField: "form1[0].#subform[4].P7_checkbox3b_Unit[2]", type: "radio", value: "flr" },
  { questionId: "part7.line3b.aptsteflrnumber", pdfField: "form1[0].#subform[4].P7_Line3b_AptSteFlrNumber[0]" },
  { questionId: "part7.line3f.province", pdfField: "form1[0].#subform[4].P7_Line3f_Province[0]" },
  { questionId: "part7.line3e.zipcode", pdfField: "form1[0].#subform[4].P7_Line3e_ZipCode[0]" },
  { questionId: "part7.line3d.state", pdfField: "form1[0].#subform[4].P7_Line3d_State[0]" },
  { questionId: "part7.line3h.country", pdfField: "form1[0].#subform[4].P7_Line3h_Country[0]" },
  { questionId: "part7.line3g.postalcode", pdfField: "form1[0].#subform[4].P7_Line3g_PostalCode[0]" },
  { questionId: "part7.line6.preparersemailaddress", pdfField: "form1[0].#subform[4].P7_Line6_PreparersEmailAddress[0]" },
  { questionId: "part7.line4.preparersdaytimephonenumber", pdfField: "form1[0].#subform[4].P7_Line4_PreparersDaytimePhoneNumber[0]" },
  { questionId: "part7.line5.preparersfaxnumber", pdfField: "form1[0].#subform[4].P7_Line5_PreparersFaxNumber[0]" },
  { questionId: "part8.line3d.additionalinfo", pdfField: "form1[0].#subform[6].P8_Line3d_AdditionalInfo[0]" },
  { questionId: "part8.line5a.pagenumber", pdfField: "form1[0].#subform[6].P8_Line5a_PageNumber[0]" },
  { questionId: "part8.line5b.partnumber", pdfField: "form1[0].#subform[6].P8_Line5b_PartNumber[0]" },
  { questionId: "part8.line5c.itemnumber", pdfField: "form1[0].#subform[6].P8_Line5c_ItemNumber[0]" },
  { questionId: "part8.line5d.additionalinfo", pdfField: "form1[0].#subform[6].P8_Line5d_AdditionalInfo[0]" },
  { questionId: "part8.line4d.additionalinfo", pdfField: "form1[0].#subform[6].P8_Line4d_AdditionalInfo[0]" },
  { questionId: "part8.line3a.pagenumber", pdfField: "form1[0].#subform[6].P8_Line3a_PageNumber[0]" },
  { questionId: "part8.line3b.partnumber", pdfField: "form1[0].#subform[6].P8_Line3b_PartNumber[0]" },
  { questionId: "part8.line3c.itemnumber", pdfField: "form1[0].#subform[6].P8_Line3c_ItemNumber[0]" },
  { questionId: "part8.line4a.pagenumber", pdfField: "form1[0].#subform[6].P8_Line4a_PageNumber[0]" },
  { questionId: "part8.line4b.partnumber", pdfField: "form1[0].#subform[6].P8_Line4b_PartNumber[0]" },
  { questionId: "part8.line4c.itemnumber", pdfField: "form1[0].#subform[6].P8_Line4c_ItemNumber[0]" },
  { questionId: "part1.line3a.familyname", pdfField: "form1[0].#subform[6].P1_Line3a_FamilyName[1]" },
  { questionId: "part1.line3b.givenname", pdfField: "form1[0].#subform[6].P1_Line3b_GivenName[1]" },
  { questionId: "part1.line3c.middlename", pdfField: "form1[0].#subform[6].P1_Line3c_MiddleName[1]" },
  { questionId: "part8.line5a.pagenumber", pdfField: "form1[0].#subform[6].P8_Line5a_PageNumber[1]" },
  { questionId: "part8.line5b.partnumber", pdfField: "form1[0].#subform[6].P8_Line5b_PartNumber[1]" },
  { questionId: "part8.line5c.itemnumber", pdfField: "form1[0].#subform[6].P8_Line5c_ItemNumber[1]" },
  { questionId: "part8.line5d.additionalinfo", pdfField: "form1[0].#subform[6].P8_Line5d_AdditionalInfo[1]" },
  { questionId: "part8.line5a.pagenumber", pdfField: "form1[0].#subform[6].P8_Line5a_PageNumber[2]" },
  { questionId: "part8.line5b.partnumber", pdfField: "form1[0].#subform[6].P8_Line5b_PartNumber[2]" },
  { questionId: "part8.line5c.itemnumber", pdfField: "form1[0].#subform[6].P8_Line5c_ItemNumber[2]" },
  { questionId: "part8.line5d.additionalinfo", pdfField: "form1[0].#subform[6].P8_Line5d_AdditionalInfo[2]" },
  { questionId: "part1.line1.aliennumber", pdfField: "form1[0].#subform[6].#area[3].P1_Line1_AlienNumber[1]" },
];

// Total mappings: 118
