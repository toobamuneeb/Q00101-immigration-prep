/**
 * I90 Field Mappings
 * Generated on: 2025-12-18T20:06:56.859Z
 * 
 * Complete field mappings for I90 form
 * Total mappings: 162
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I90_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.alienNumber",
    "pdfField": "form1[0].#subform[0].#area[1].P1_Line1_AlienNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.uscisAccountNumber",
    "pdfField": "form1[0].#subform[0].P1_Line2_AcctIdentifier[0]",
    "type": "text"
  },
  {
    "questionId": "part1.familyName",
    "pdfField": "form1[0].#subform[0].P1_Line3a_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.givenName",
    "pdfField": "form1[0].#subform[0].P1_Line3b_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.middleName",
    "pdfField": "form1[0].#subform[0].P1_Line3c_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.reasonCard",
    "pdfField": "form1[0].#subform[0].P1_checkbox4[0]",
    "type": "text"
  },
  {
    "questionId": "part1.reasonCard",
    "pdfField": "form1[0].#subform[0].P1_checkbox4[1]",
    "type": "text"
  },
  {
    "questionId": "part1.reasonCard",
    "pdfField": "form1[0].#subform[0].P1_checkbox4[2]",
    "type": "text"
  },
  {
    "questionId": "part1.admissionFamilyName",
    "pdfField": "form1[0].#subform[0].P1_Line5a_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.admissionGivenName",
    "pdfField": "form1[0].#subform[0].P1_Line5b_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.admissionMiddleName",
    "pdfField": "form1[0].#subform[0].P1_Line5c_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingInCareOf",
    "pdfField": "form1[0].#subform[0].P1_Line6a_InCareofName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingStreetNumber",
    "pdfField": "form1[0].#subform[0].P1_Line6b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptNumber",
    "pdfField": "form1[0].#subform[0].P1_Line6c_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox6c_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox6c_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox6c_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingCity",
    "pdfField": "form1[0].#subform[0].P1_Line6d_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingState",
    "pdfField": "form1[0].#subform[0].P1_Line6e_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingZipCode",
    "pdfField": "form1[0].#subform[0].P1_Line6f_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingProvince",
    "pdfField": "form1[0].#subform[0].P1_Line6g_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingPostalCode",
    "pdfField": "form1[0].#subform[0].P1_Line6h_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingCountry",
    "pdfField": "form1[0].#subform[0].P1_Line6i_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalStreetNumber",
    "pdfField": "form1[0].#subform[0].P1_Line7a_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalAptNumber",
    "pdfField": "form1[0].#subform[0].P1_Line7b_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox7b_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox7b_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalUnitType",
    "pdfField": "form1[0].#subform[0].P1_checkbox7b_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalCity",
    "pdfField": "form1[0].#subform[0].P1_Line7c_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalState",
    "pdfField": "form1[0].#subform[0].P1_Line7d_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalZipCode",
    "pdfField": "form1[0].#subform[0].P1_Line7e_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalProvince",
    "pdfField": "form1[0].#subform[0].P1_Line7f_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalPostalCode",
    "pdfField": "form1[0].#subform[0].P1_Line7g_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.physicalCountry",
    "pdfField": "form1[0].#subform[0].P1_Line7h_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part1.gender",
    "pdfField": "form1[0].#subform[1].P1_Line8_male[0]",
    "type": "text"
  },
  {
    "questionId": "part1.gender",
    "pdfField": "form1[0].#subform[1].P1_Line8_female[0]",
    "type": "text"
  },
  {
    "questionId": "part1.dateOfBirth",
    "pdfField": "form1[0].#subform[1].P1_Line9_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.cityOfBirth",
    "pdfField": "form1[0].#subform[1].P1_Line10_CityTownOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.countryOfBirth",
    "pdfField": "form1[0].#subform[1].P1_Line11_CountryofBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.motherGivenName",
    "pdfField": "form1[0].#subform[1].P1_Line12_MotherGivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.fatherGivenName",
    "pdfField": "form1[0].#subform[1].P1_Line13_FatherGivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.classOfAdmission",
    "pdfField": "form1[0].#subform[1].P1_Line14_ClassOfAdmission[0]",
    "type": "text"
  },
  {
    "questionId": "part1.dateOfAdmission",
    "pdfField": "form1[0].#subform[1].P1_Line15_DateOfAdmission[0]",
    "type": "text"
  },
  {
    "questionId": "part1.socialSecurityNumber",
    "pdfField": "form1[0].#subform[1].P1_Line16_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part2.applicationType",
    "pdfField": "form1[0].#subform[1].P2_checkbox1[0]",
    "type": "text"
  },
  {
    "questionId": "part2.applicationType",
    "pdfField": "form1[0].#subform[1].P2_checkbox1[1]",
    "type": "text"
  },
  {
    "questionId": "part2.applicationType",
    "pdfField": "form1[0].#subform[1].P2_checkbox1[2]",
    "type": "text"
  },
  {
    "questionId": "part2.reasonReplacement",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[0]",
    "type": "text"
  },
  {
    "questionId": "part2.reasonReplacement",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[1]",
    "type": "text"
  },
  {
    "questionId": "part2.reasonReplacement",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[2]",
    "type": "text"
  },
  {
    "questionId": "part2.reasonReplacement",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[3]",
    "type": "text"
  },
  {
    "questionId": "part2.reasonReplacement",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[4]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[5]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[6]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[7]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[8]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[9]",
    "type": "text"
  },
  {
    "questionId": "part2.additionalReason",
    "pdfField": "form1[0].#subform[1].P2_checkbox2[10]",
    "type": "text"
  },
  {
    "questionId": "part2.cityAndState",
    "pdfField": "form1[0].#subform[1].P2_Line2h1_CityandState[0]",
    "type": "text"
  },
  {
    "questionId": "part3.locationAppliedVisa",
    "pdfField": "form1[0].#subform[2].P3_Line1_LocationAppliedVisa[0]",
    "type": "text"
  },
  {
    "questionId": "part3.locationIssuedVisa",
    "pdfField": "form1[0].#subform[2].P3_Line2_LocationIssuedVisa[0]",
    "type": "text"
  },
  {
    "questionId": "part3.destinationCityState",
    "pdfField": "form1[0].#subform[2].P3_Line3a1_CityandState[0]",
    "type": "text"
  },
  {
    "questionId": "part3.heightFeet",
    "pdfField": "form1[0].#subform[2].P3_Line8_HeightFeet[0]",
    "type": "text"
  },
  {
    "questionId": "part3.heightInches",
    "pdfField": "form1[0].#subform[2].P3_Line8_HeightInches[0]",
    "type": "text"
  },
  {
    "questionId": "part3.weight1",
    "pdfField": "form1[0].#subform[2].P3_Line9_HeightInches1[0]",
    "type": "text"
  },
  {
    "questionId": "part3.weight2",
    "pdfField": "form1[0].#subform[2].P3_Line9_HeightInches2[0]",
    "type": "text"
  },
  {
    "questionId": "part3.weight3",
    "pdfField": "form1[0].#subform[2].P3_Line9_HeightInches3[0]",
    "type": "text"
  },
  {
    "questionId": "part3.ethnicity",
    "pdfField": "form1[0].#subform[2].P3_checkbox6[0]",
    "type": "text"
  },
  {
    "questionId": "part3.ethnicity",
    "pdfField": "form1[0].#subform[2].P3_checkbox6[1]",
    "type": "text"
  },
  {
    "questionId": "part3.race",
    "pdfField": "form1[0].#subform[2].P3_checkbox7_White[0]",
    "type": "text"
  },
  {
    "questionId": "part3.race",
    "pdfField": "form1[0].#subform[2].P3_checkbox7_Asian[0]",
    "type": "text"
  },
  {
    "questionId": "part3.race",
    "pdfField": "form1[0].#subform[2].P3_checkbox7_Black[0]",
    "type": "text"
  },
  {
    "questionId": "part3.race",
    "pdfField": "form1[0].#subform[2].P3_checkbox7_Indian[0]",
    "type": "text"
  },
  {
    "questionId": "part3.race",
    "pdfField": "form1[0].#subform[2].P3_checkbox7_Hawaiian[0]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[0]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[1]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[2]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[3]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[4]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[5]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[6]",
    "type": "text"
  },
  {
    "questionId": "part3.hairColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox10[7]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[0]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[1]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[2]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[3]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[4]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[5]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[6]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[7]",
    "type": "text"
  },
  {
    "questionId": "part3.eyeColor",
    "pdfField": "form1[0].#subform[2].P3_checkbox11[8]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationNeeded",
    "pdfField": "form1[0].#subform[2].P4_checkbox1[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationNeeded",
    "pdfField": "form1[0].#subform[2].P4_checkbox1[1]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationDeaf",
    "pdfField": "form1[0].#subform[2].P4_checkbox1a[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationBlind",
    "pdfField": "form1[0].#subform[3].P4_checkbox1b[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationOther",
    "pdfField": "form1[0].#subform[3].P4_checkbox1c[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationDeafDetails",
    "pdfField": "form1[0].#subform[2].P4_Line1a_AccomodationRequested[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationBlindDetails",
    "pdfField": "form1[0].#subform[3].P4_Line1b_AccomodationRequested[0]",
    "type": "text"
  },
  {
    "questionId": "part4.accommodationOtherDetails",
    "pdfField": "form1[0].#subform[3].P4_Line1c_AccomodationRequested[0]",
    "type": "text"
  },
  {
    "questionId": "part5.readLanguage",
    "pdfField": "form1[0].#subform[3].P5_Checkbox1a[0]",
    "type": "text"
  },
  {
    "questionId": "part5.interpreterUsed",
    "pdfField": "form1[0].#subform[3].P5_Checkbox1b[0]",
    "type": "text"
  },
  {
    "questionId": "part5.interpreterLanguage",
    "pdfField": "form1[0].#subform[3].P5_Line1b_Language[0]",
    "type": "text"
  },
  {
    "questionId": "part5.preparerUsed",
    "pdfField": "form1[0].#subform[3].P5_Checkbox2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.preparerName",
    "pdfField": "form1[0].#subform[3].P5_Line2_NameofRepresentative[0]",
    "type": "text"
  },
  {
    "questionId": "part5.daytimePhone",
    "pdfField": "form1[0].#subform[3].P5_Line3_DaytimePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part5.mobilePhone",
    "pdfField": "form1[0].#subform[3].P5_Line4_MobilePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part5.emailAddress",
    "pdfField": "form1[0].#subform[3].P5_Line5_EmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part5.applicantSignature",
    "pdfField": "form1[0].#subform[3].P5_Line6a_SignatureofApplicant[0]",
    "type": "text"
  },
  {
    "questionId": "part5.signatureDate",
    "pdfField": "form1[0].#subform[3].P5_Line6b_DateofSignature[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterFamilyName",
    "pdfField": "form1[0].#subform[4].P6_Line1a_InterpretersFamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterGivenName",
    "pdfField": "form1[0].#subform[4].P6_Line1b_InterpretersGivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterBusinessName",
    "pdfField": "form1[0].#subform[4].P6_Line2_NameofBusinessor[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterStreetNumber",
    "pdfField": "form1[0].#subform[4].P6_Line3a_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterAptNumber",
    "pdfField": "form1[0].#subform[4].P6_Line3b_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterUnitType",
    "pdfField": "form1[0].#subform[4].P6_checkbox3b_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterUnitType",
    "pdfField": "form1[0].#subform[4].P6_checkbox3b_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterUnitType",
    "pdfField": "form1[0].#subform[4].P6_checkbox3b_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterCity",
    "pdfField": "form1[0].#subform[4].P6_Line3c_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterState",
    "pdfField": "form1[0].#subform[4].P6_Line3d_State[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterZipCode",
    "pdfField": "form1[0].#subform[4].P6_Line3e_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterProvince",
    "pdfField": "form1[0].#subform[4].P6_Line3f_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterPostalCode",
    "pdfField": "form1[0].#subform[4].P6_Line3g_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterCountry",
    "pdfField": "form1[0].#subform[4].P6_Line3h_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterDaytimePhone",
    "pdfField": "form1[0].#subform[4].P6_Line4_InterpretersDaytimePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterEmail",
    "pdfField": "form1[0].#subform[4].P6_Line5_InterpretersEmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterLanguage",
    "pdfField": "form1[0].#subform[4].P6_Language[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterSignature",
    "pdfField": "form1[0].#subform[4].P6_Line6a_Signature[0]",
    "type": "text"
  },
  {
    "questionId": "part6.interpreterSignatureDate",
    "pdfField": "form1[0].#subform[4].P6_Line6b_DateofSignature[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerFamilyName",
    "pdfField": "form1[0].#subform[4].P7_Line1a_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerGivenName",
    "pdfField": "form1[0].#subform[4].P7_Line1b_PreparersGivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerBusinessName",
    "pdfField": "form1[0].#subform[4].P7_Line2_NameofBusinessor[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerStreetNumber",
    "pdfField": "form1[0].#subform[4].P7_Line3a_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerAptNumber",
    "pdfField": "form1[0].#subform[4].P7_Line3b_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerUnitType",
    "pdfField": "form1[0].#subform[4].P7_checkbox3b_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerUnitType",
    "pdfField": "form1[0].#subform[4].P7_checkbox3b_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerUnitType",
    "pdfField": "form1[0].#subform[4].P7_checkbox3b_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerCity",
    "pdfField": "form1[0].#subform[4].P7_Line3c_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerState",
    "pdfField": "form1[0].#subform[4].P7_Line3d_State[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerZipCode",
    "pdfField": "form1[0].#subform[4].P7_Line3e_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerProvince",
    "pdfField": "form1[0].#subform[4].P7_Line3f_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerPostalCode",
    "pdfField": "form1[0].#subform[4].P7_Line3g_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerCountry",
    "pdfField": "form1[0].#subform[4].P7_Line3h_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerDaytimePhone",
    "pdfField": "form1[0].#subform[4].P7_Line4_PreparersDaytimePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerFaxNumber",
    "pdfField": "form1[0].#subform[4].P7_Line5_PreparersFaxNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerEmail",
    "pdfField": "form1[0].#subform[4].P7_Line6_PreparersEmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerNotAttorney",
    "pdfField": "form1[0].#subform[5].P7_checkbox7[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerAttorney",
    "pdfField": "form1[0].#subform[5].P7_checkbox7[1]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerExtends",
    "pdfField": "form1[0].#subform[5].P7_checkbox7Extend[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerSignature",
    "pdfField": "form1[0].#subform[5].P7_Line8a_SignatureofPreparer[0]",
    "type": "text"
  },
  {
    "questionId": "part7.preparerSignatureDate",
    "pdfField": "form1[0].#subform[5].P7_Line8b_DateofSignature[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo1PageNumber",
    "pdfField": "form1[0].#subform[6].P8_Line3a_PageNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo1PartNumber",
    "pdfField": "form1[0].#subform[6].P8_Line3b_PartNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo1ItemNumber",
    "pdfField": "form1[0].#subform[6].P8_Line3c_ItemNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo1",
    "pdfField": "form1[0].#subform[6].P8_Line3d_AdditionalInfo[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo2PageNumber",
    "pdfField": "form1[0].#subform[6].P8_Line4a_PageNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo2PartNumber",
    "pdfField": "form1[0].#subform[6].P8_Line4b_PartNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo2ItemNumber",
    "pdfField": "form1[0].#subform[6].P8_Line4c_ItemNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo2",
    "pdfField": "form1[0].#subform[6].P8_Line4d_AdditionalInfo[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo3PageNumber",
    "pdfField": "form1[0].#subform[6].P8_Line5a_PageNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo3PartNumber",
    "pdfField": "form1[0].#subform[6].P8_Line5b_PartNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo3ItemNumber",
    "pdfField": "form1[0].#subform[6].P8_Line5c_ItemNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part8.additionalInfo3",
    "pdfField": "form1[0].#subform[6].P8_Line5d_AdditionalInfo[0]",
    "type": "text"
  }
];
