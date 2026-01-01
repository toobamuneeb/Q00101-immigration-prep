/**
 * I-131 Field Mappings
 * Generated with AI: 2025-12-22T22:09:40.219Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_131_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "attorney.g28Attached",
    pdfField: "form1[0].P1[0].G28_Attached[0]",
  },
  {
    questionId: "part1.applicationType",
    pdfField: "form1[0].P1[0].CB_AppType[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part1.applicationType",
    pdfField: "form1[0].P1[0].CB_AppType[1]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part1.applicationType",
    pdfField: "form1[0].P1[0].CB_AppType[2]",
    type: "radio",
    value: "3",
  },
  {
    questionId: "part1.applicationType",
    pdfField: "form1[0].P1[0].CB_AppType[3]",
    type: "radio",
    value: "4",
  },
  {
    questionId: "part1.applicationType",
    pdfField: "form1[0].P1[0].CB_AppType[4]",
    type: "radio",
    value: "5",
  },
  {
    questionId: "part1.tpsReceiptNumber",
    pdfField: "form1[0].P1[0].P1_Line4[0]",
  },
  {
    questionId: "part2.fullName",
    pdfField: "form1[0].P4[0].Part2_Line1_MiddleName[0]",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].P4[0].Part2_Line1_GivenName[0]",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].P4[0].Part2_Line1_FamilyName[0]",
  },
  {
    questionId: "part2.refugeeStatus",
    pdfField: "form1[0].P4[0].P1_Line13_YesNo[0]",
  },
  {
    questionId: "part2.refugeeStatus",
    pdfField: "form1[0].P4[0].P1_Line13_YesNo[1]",
  },
  {
    questionId: "part2.mailingCity",
    pdfField: "form1[0].P5[0].Part2_Line3_CityTown[0]",
  },
  {
    questionId: "part2.mailingZipCode",
    pdfField: "form1[0].P5[0].Part2_Line3_ZipCode[0]",
  },
  {
    questionId: "part2.mailingState",
    pdfField: "form1[0].P5[0].Part2_Line3_State[0]",
  },
  {
    questionId: "part2.inCareOfName",
    pdfField: "form1[0].P5[0].Part2_Line3_InCareofName[0]",
  },
  {
    questionId: "part2.streetNumberName",
    pdfField: "form1[0].P5[0].Part2_Line3_StreetNumberName[0]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P5[0].Part2_Line3_Unit[0]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P5[0].Part2_Line3_Unit[1]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P5[0].Part2_Line3_Unit[2]",
  },
  {
    questionId: "part2.mailingUnitNumber",
    pdfField: "form1[0].P5[0].Part2_Line3_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.mailingCountry",
    pdfField: "form1[0].P5[0].Part2_Line3_Country[0]",
  },
  {
    questionId: "part2.physicalCity",
    pdfField: "form1[0].P5[0].Part2_Line4_CityTown[0]",
  },
  {
    questionId: "part2.physicalZipCode",
    pdfField: "form1[0].P5[0].Part2_Line4_ZipCode[0]",
  },
  {
    questionId: "part2.physicalState",
    pdfField: "form1[0].P5[0].Part2_Line4_State[0]",
  },
  {
    questionId: "part2.inCareOfName",
    pdfField: "form1[0].P5[0].Part2_Line4_InCareofName[0]",
  },
  {
    questionId: "part2.streetNumberName",
    pdfField: "form1[0].P5[0].Part2_Line4_StreetNumberName[0]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P5[0].Part2_Line4_Unit[0]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P5[0].Part2_Line4_Unit[1]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P5[0].Part2_Line4_Unit[2]",
  },
  {
    questionId: "part2.physicalUnitNumber",
    pdfField: "form1[0].P5[0].Part2_Line4_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.physicalCountry",
    pdfField: "form1[0].P5[0].Part2_Line4_Country[0]",
  },
  {
    questionId: "part2.uscisOnlineAccountNumber",
    pdfField: "form1[0].P5[0].Part2_Line11_USCISOnlineAcctNumber[0]",
  },
  {
    questionId: "part2.alienNumber",
    pdfField: "form1[0].P5[0].#area[0].Part2_Line5_AlienNumber[0]",
  },
  {
    questionId: "part2.ssn",
    pdfField: "form1[0].P5[0].#area[1].Part2_Line10_SSN[0]",
  },
  {
    questionId: "part2.gender",
    pdfField: "form1[0].P5[0].Part2_Line8_Gender[0]",
  },
  {
    questionId: "part2.gender",
    pdfField: "form1[0].P5[0].Part2_Line8_Gender[1]",
  },
  {
    questionId: "part2.dob",
    pdfField: "form1[0].P5[0].Part2_Line9_DateOfBirth[0]",
  },
  {
    questionId: "part2.countryOfBirth",
    pdfField: "form1[0].P5[0].Part2_Line6_CountryOfBirth[0]",
  },
  {
    questionId: "part2.countryOfCitizenship",
    pdfField: "form1[0].P5[0].Part2_Line7_CountryOfCitizenshiporNationality[0]",
  },
  {
    questionId: "part2.classOfAdmission",
    pdfField: "form1[0].P5[0].Part2_Line12_ClassofAdmission[0]",
  },
  {
    questionId: "part2.i94RecordNumber",
    pdfField: "form1[0].P5[0].Part2_Line13_I94RecordNo[0]",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].P5[0].Part2_Line2_MiddleName2[0]",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].P5[0].Part2_Line2_MiddleName1[0]",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].P5[0].Part2_Line2_GivenName1[0]",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].P5[0].Part2_Line2_FamilyName1[0]",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].P5[0].Part2_Line2_GivenName2[0]",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].P5[0].Part2_Line2_FamilyName2[0]",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].P5[0].Part2_Line2_MiddleName3[0]",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].P5[0].Part2_Line2_GivenName3[0]",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].P5[0].Part2_Line2_FamilyName3[0]",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].P6[0].P2_Line16_FamilyName[0]",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].P6[0].P2_Line16_GivenName[0]",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].P6[0].P2_Line16_MiddleName[0]",
  },
  {
    questionId: "part2.dob",
    pdfField: "form1[0].P6[0].P2_Line18_DateOfBirth[0]",
  },
  {
    questionId: "part2.countryOfBirth",
    pdfField: "form1[0].P6[0].P2_Line19_CountryOfBirth[0]",
  },
  {
    questionId: "part2.countryOfCitizenship",
    pdfField: "form1[0].P6[0].P2_Line20_CountryOfCitizenship[0]",
  },
  {
    questionId: "part4.daytimePhone",
    pdfField: "form1[0].P6[0].P2_Line21_DaytimeTelephoneNumber[0]",
  },
  { questionId: "part4.email", pdfField: "form1[0].P6[0].P2_Line22_Email[0]" },
  {
    questionId: "part2.alienNumber",
    pdfField: "form1[0].P6[0].ANumber[0].P2_Line23_AlienNumber[0]",
  },
  {
    questionId: "part2.cityTown",
    pdfField: "form1[0].P6[0].P2_Line24_CityTown[0]",
  },
  {
    questionId: "part2.zipCode",
    pdfField: "form1[0].P6[0].P2_Line24_ZipCode[0]",
  },
  { questionId: "part2.state", pdfField: "form1[0].P6[0].P2_Line24_State[0]" },
  {
    questionId: "part2.inCareOfName",
    pdfField: "form1[0].P6[0].P2_Line24_InCareofName[0]",
  },
  {
    questionId: "part2.streetNumberName",
    pdfField: "form1[0].P6[0].P2_Line24_StreetNumberName[0]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P6[0].P2_Line24_Unit[0]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P6[0].P2_Line24_Unit[1]",
  },
  {
    questionId: "part2.mailingUnitType",
    pdfField: "form1[0].P6[0].P2_Line24_Unit[2]",
  },
  {
    questionId: "part4.aptSteFlrNumber",
    pdfField: "form1[0].P6[0].P2_Line24_AptSteFlrNumber[0]",
  },
  {
    questionId: "part4.postalCode",
    pdfField: "form1[0].P6[0].P2_Line24_PostalCode[0]",
  },
  {
    questionId: "part4.province",
    pdfField: "form1[0].P6[0].P2_Line24_Province[0]",
  },
  {
    questionId: "part4.country",
    pdfField: "form1[0].P6[0].P2_Line24_Country[0]",
  },
  {
    questionId: "part2.physicalCity",
    pdfField: "form1[0].P6[0].P2_Line25_CityTown[0]",
  },
  {
    questionId: "part2.physicalZipCode",
    pdfField: "form1[0].P6[0].P2_Line25_ZipCode[0]",
  },
  {
    questionId: "part2.physicalState",
    pdfField: "form1[0].P6[0].P2_Line25_State[0]",
  },
  {
    questionId: "part2.inCareOfName",
    pdfField: "form1[0].P6[0].P2_Line25_InCareofName[0]",
  },
  {
    questionId: "part2.physicalStreet",
    pdfField: "form1[0].P6[0].P2_Line25_StreetNumberName[0]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P6[0].P2_Line25_Unit[0]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P6[0].P2_Line25_Unit[1]",
  },
  {
    questionId: "part2.physicalUnitType",
    pdfField: "form1[0].P6[0].P2_Line25_Unit[2]",
  },
  {
    questionId: "part4.aptSteFlrNumber",
    pdfField: "form1[0].P6[0].P2_Line25_AptSteFlrNumber[0]",
  },
  {
    questionId: "part4.postalCode",
    pdfField: "form1[0].P6[0].P2_Line25_PostalCode[0]",
  },
  {
    questionId: "part4.province",
    pdfField: "form1[0].P6[0].P2_Line25_Province[0]",
  },
  {
    questionId: "part4.country",
    pdfField: "form1[0].P6[0].P2_Line25_Country[0]",
  },
  {
    questionId: "part2.eMedicalUsParoleeId",
    pdfField: "form1[0].P6[0].Par2_Line15_eMedicalParoleeID[0]",
  },
  {
    questionId: "part2.i94ExpirationDate",
    pdfField: "form1[0].P6[0].Part2_Line14_I94ExpDate[0]",
  },
  {
    questionId: "part2.classOfAdmission",
    pdfField: "form1[0].P7[0].P2_Line26_ClassofAdmission[0]",
  },
  {
    questionId: "part2.i94RecordNumber",
    pdfField: "form1[0].P7[0].P2_Line27_I94RecordNo[0]",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].P7[0].P3_Line2_Race_Black[0]",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].P7[0].P3_Line2_Race_Hawaiian[0]",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].P7[0].P3_Line2_Race_American[0]",
  },
  {
    questionId: "part3.heightFeet",
    pdfField: "form1[0].P7[0].P3_Line3_HeightFeet[0]",
  },
  {
    questionId: "part3.heightInches",
    pdfField: "form1[0].P7[0].P3_Line3_HeightInches[0]",
  },
  { questionId: "part3.weight", pdfField: "form1[0].P7[0].P3_Line4_Pound1[0]" },
  { questionId: "part3.weight", pdfField: "form1[0].P7[0].P3_Line4_Pound2[0]" },
  { questionId: "part3.weight", pdfField: "form1[0].P7[0].P3_Line4_Pound3[0]" },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[0]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[1]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[2]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[3]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[4]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[5]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[6]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[7]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[0]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[1]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[2]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[3]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[4]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[5]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[6]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[7]",
  },
  {
    questionId: "part3.hairColor",
    pdfField: "form1[0].P7[0].P3_Line6_HairColor[8]",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].P7[0].P3_Line2_Race_Asian[0]",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].P7[0].P3_Line2_Race_White[0]",
  },
  {
    questionId: "part3.ethnicity",
    pdfField: "form1[0].P7[0].P3_Line1_Ethnicity[0]",
  },
  {
    questionId: "part3.ethnicity",
    pdfField: "form1[0].P7[0].P3_Line1_Ethnicity[1]",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].P7[0].P3_Line5_EyeColor[8]",
  },
  {
    questionId: "part4.previousReentryPermitOrRefugeeTravelDocument",
    pdfField: "form1[0].P7[0].P4_Line2c_Disposition[0]",
  },
  {
    questionId: "part4.previousReentryPermitOrRefugeeTravelDocument",
    pdfField: "form1[0].P7[0].P4_Line2a_YesNo[0]",
  },
  {
    questionId: "part4.previousReentryPermitOrRefugeeTravelDocument",
    pdfField: "form1[0].P7[0].P4_Line2a_YesNo[1]",
  },
  {
    questionId: "part4.previousReentryPermitOrRefugeeTravelDocument",
    pdfField: "form1[0].P7[0].P4_Line2b_DateIssued[0]",
  },
  {
    questionId: "part4.previousAdvanceParoleDocument",
    pdfField: "form1[0].P7[0].P4_Line1_YesNo[0]",
  },
  {
    questionId: "part4.previousAdvanceParoleDocument",
    pdfField: "form1[0].P7[0].P4_Line1_YesNo[1]",
  },
  {
    questionId: "part4.previousAdvanceParoleDocument",
    pdfField: "form1[0].P7[0].P4_Line3a_YesNo[0]",
  },
  {
    questionId: "part4.previousAdvanceParoleDocument",
    pdfField: "form1[0].P7[0].P4_Line3a_YesNo[1]",
  },
  {
    questionId: "part4.replacementRequest",
    pdfField: "form1[0].P7[0].P4_Line4_YesNo[0]",
  },
  {
    questionId: "part4.replacementRequest",
    pdfField: "form1[0].P7[0].P4_Line4_YesNo[1]",
  },
  {
    questionId: "part4.replacementReason",
    pdfField: "form1[0].#subform[7].P4_Line5[0]",
  },
  {
    questionId: "part4.replacementReason",
    pdfField: "form1[0].#subform[7].P4_Line5[1]",
  },
  {
    questionId: "part4.replacementReason",
    pdfField: "form1[0].#subform[7].P4_Line5[2]",
  },
  {
    questionId: "part4.replacementReason",
    pdfField: "form1[0].#subform[7].P4_Line5[3]",
  },
  {
    questionId: "part4.email",
    pdfField: "form1[0].#subform[8].P4_Line9c_Email[0]",
  },
  {
    questionId: "part4.daytimePhone",
    pdfField: "form1[0].#subform[8].P4_Line9b_Email[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_Lessthan6[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_6months[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_1to2[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_2to3[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_3to4[0]",
  },
  {
    questionId: "part5.timeOutsideUs",
    pdfField: "form1[0].#subform[8].P5_Line1_morethan[0]",
  },
  {
    questionId: "part6.travelToCountry",
    pdfField: "form1[0].#subform[8].P6_Line2_YesNo[0]",
  },
  {
    questionId: "part6.travelToCountry",
    pdfField: "form1[0].#subform[8].P6_Line2_YesNo[1]",
  },
  {
    questionId: "part6.countryRefugee",
    pdfField: "form1[0].#subform[8].P6_Line1_CountryRefugee[0]",
  },
  {
    questionId: "part6.nationalPassport",
    pdfField: "form1[0].#subform[8].P6_Line3b_YesNo[0]",
  },
  {
    questionId: "part6.nationalPassport",
    pdfField: "form1[0].#subform[8].P6_Line3b_YesNo[1]",
  },
  {
    questionId: "part6.receivedBenefits",
    pdfField: "form1[0].#subform[8].P6_Line3c_YesNo[0]",
  },
  {
    questionId: "part6.receivedBenefits",
    pdfField: "form1[0].#subform[8].P6_Line3c_YesNo[1]",
  },
  {
    questionId: "part6.returnedToCountry",
    pdfField: "form1[0].#subform[8].P6_Line3a_YesNo[0]",
  },
  {
    questionId: "part6.returnedToCountry",
    pdfField: "form1[0].#subform[8].P6_Line3a_YesNo[1]",
  },
  {
    questionId: "part6.reacquiredNationality",
    pdfField: "form1[0].#subform[9].P6_Line4a_YesNo[0]",
  },
  {
    questionId: "part6.reacquiredNationality",
    pdfField: "form1[0].#subform[9].P6_Line4a_YesNo[1]",
  },
  {
    questionId: "part6.acquiredNewNationality",
    pdfField: "form1[0].#subform[9].P6_Line4b_YesNo[0]",
  },
  {
    questionId: "part6.acquiredNewNationality",
    pdfField: "form1[0].#subform[9].P6_Line4b_YesNo[1]",
  },
  {
    questionId: "part6.filingBeforeDeparture",
    pdfField: "form1[0].#subform[9].P6_Line5_YesNo[0]",
  },
  {
    questionId: "part6.filingBeforeDeparture",
    pdfField: "form1[0].#subform[9].P6_Line5_YesNo[1]",
  },
  {
    questionId: "part6.outsideUS",
    pdfField: "form1[0].#subform[9].P6_Line6a_YesNo[0]",
  },
  {
    questionId: "part6.outsideUS",
    pdfField: "form1[0].#subform[9].P6_Line6a_YesNo[1]",
  },
  {
    questionId: "part6.currentLocation",
    pdfField: "form1[0].#subform[9].P6_Line6b_CityOrTown[0]",
  },
  {
    questionId: "part6.traveledCountries",
    pdfField: "form1[0].#subform[9].P6_Line6c_Country[0]",
  },
  {
    questionId: "part7.dateOfDeparture",
    pdfField: "form1[0].#subform[9].P7_Line1_DateOfDeparture[0]",
  },
  {
    questionId: "part7.purposeOfTrip",
    pdfField: "form1[0].#subform[9].P7_Line2_Purpose[0]",
  },
  {
    questionId: "part7.countriesToVisit",
    pdfField: "form1[0].#subform[9].P7_Line3_ListCountries[0]",
  },
  {
    questionId: "part7.numberOfTrips",
    pdfField: "form1[0].#subform[9].P7_Line4_CB[0]",
  },
  {
    questionId: "part7.numberOfTrips",
    pdfField: "form1[0].#subform[9].P7_Line4_CB[1]",
  },
  {
    questionId: "part7.expectedLengthOfTrip",
    pdfField: "form1[0].#subform[9].P7_Line5_ExpectedLengthTrip[0]",
  },
  {
    questionId: "part10.daytimePhone",
    pdfField: "form1[0].#subform[10].Part10_Line1_DayPhone[0]",
  },
  {
    questionId: "part10.mobilePhone",
    pdfField: "form1[0].#subform[10].Part10_Line2_MobilePhone[0]",
  },
  {
    questionId: "part10.email",
    pdfField: "form1[0].#subform[10].Part10_Line3_Email[0]",
  },
  {
    questionId: "part10.applicantSignature",
    pdfField: "form1[0].#subform[10].Part10_Line4_ApplicantSignature[0]",
  },
  {
    questionId: "part10.dateOfSignature",
    pdfField: "form1[0].#subform[10].Part10_Line4_DateofSignature[0]",
  },
  {
    questionId: "part11.interpreterFamilyName",
    pdfField: "form1[0].#subform[11].Part11_Line1_InterpreterFamilyName[0]",
  },
  {
    questionId: "part11.interpreterGivenName",
    pdfField: "form1[0].#subform[11].Part11_Line1_InterpreterGivenName[0]",
  },
  {
    questionId: "part11.interpreterBusinessName",
    pdfField: "form1[0].#subform[11].Part11_Line2_NameofBusinessorOrgName[0]",
  },
  {
    questionId: "part11.daytimePhone",
    pdfField: "form1[0].#subform[11].Part11_Line3_DayPhone[0]",
  },
  {
    questionId: "part11.mobilePhone",
    pdfField: "form1[0].#subform[11].Part11_Line4_MobilePhone[0]",
  },
  {
    questionId: "part11.email",
    pdfField: "form1[0].#subform[11].Part11_Line5_Email[0]",
  },
  {
    questionId: "part11.language",
    pdfField: "form1[0].#subform[11].P11_Language[0]",
  },
  {
    questionId: "part11.interpreterSignature",
    pdfField: "form1[0].#subform[11].Part11_Line6_InterpreterSig[0]",
  },
  {
    questionId: "part11.dateOfSignature",
    pdfField: "form1[0].#subform[11].Part11_Line6_DateofSignature[0]",
  },
  {
    questionId: "part12.preparerFamilyName",
    pdfField: "form1[0].#subform[12].Part12_Line1_FamilyName[0]",
  },
  {
    questionId: "part12.preparerGivenName",
    pdfField: "form1[0].#subform[12].Part12_Line1_GivenName[0]",
  },
  {
    questionId: "part12.preparerBusinessName",
    pdfField: "form1[0].#subform[12].Part12_Line2_NameofBusinessorOrgName[0]",
  },
  {
    questionId: "part12.daytimePhone",
    pdfField: "form1[0].#subform[12].Part12_Line3_DayPhone[0]",
  },
  {
    questionId: "part12.email",
    pdfField: "form1[0].#subform[12].Part12_Line5_Email[0]",
  },
  {
    questionId: "part12.preparerSignature",
    pdfField: "form1[0].#subform[12].Part12_Line6_PreparerSig[0]",
  },
  {
    questionId: "part12.dateOfSignature",
    pdfField: "form1[0].#subform[12].Part12_Line6_DateofSignature[0]",
  },
  {
    questionId: "part12.mobilePhone",
    pdfField: "form1[0].#subform[12].Part12_Line4_MobilePhone[0]",
  },
  {
    questionId: "part13.familyName",
    pdfField: "form1[0].#subform[13].Part2_Line1_FamilyName[0]",
  },
  {
    questionId: "part13.givenName",
    pdfField: "form1[0].#subform[13].Part2_Line1_GivenName[0]",
  },
  {
    questionId: "part13.middleName",
    pdfField: "form1[0].#subform[13].Part2_Line1_MiddleName[0]",
  },
  {
    questionId: "part13.alienNumber",
    pdfField:
      "form1[0].#subform[13].Global_ANumber[0].Part2_Line5_AlienNumber[0]",
  },
  {
    questionId: "part13.pageNumber",
    pdfField: "form1[0].#subform[13].Part13_Line3_PageNumber[0]",
  },
  {
    questionId: "part13.partNumber",
    pdfField: "form1[0].#subform[13].Part13_Line3_PartNumber[0]",
  },
  {
    questionId: "part13.itemNumber",
    pdfField: "form1[0].#subform[13].Part13_Line3_ItemNumber[0]",
  },
  {
    questionId: "part13.additionalInfo",
    pdfField: "form1[0].#subform[13].Part13_Line3_AdditionalInfo[0]",
  },
  {
    questionId: "part13.pageNumber",
    pdfField: "form1[0].#subform[13].Part13_Line4_PageNumber[0]",
  },
  {
    questionId: "part13.partNumber",
    pdfField: "form1[0].#subform[13].Part13_Line4_PartNumber[0]",
  },
  {
    questionId: "part13.itemNumber",
    pdfField: "form1[0].#subform[13].Part13_Line4_ItemNumber[0]",
  },
  {
    questionId: "part13.additionalInfo",
    pdfField: "form1[0].#subform[13].Part13_Line4_AdditionalInfo[0]",
  },
  {
    questionId: "part13.pageNumber",
    pdfField: "form1[0].#subform[13].Part13_Line5_PageNumber[0]",
  },
  {
    questionId: "part13.partNumber",
    pdfField: "form1[0].#subform[13].Part13_Line5_PartNumber[0]",
  },
  {
    questionId: "part13.itemNumber",
    pdfField: "form1[0].#subform[13].Part13_Line5_ItemNumber[0]",
  },
  {
    questionId: "part13.additionalInfo",
    pdfField: "form1[0].#subform[13].Part13_Line5_AdditionalInfo[0]",
  },
  {
    questionId: "part13.pageNumber",
    pdfField: "form1[0].#subform[13].Part13_Line6_PageNumber[0]",
  },
  {
    questionId: "part13.partNumber",
    pdfField: "form1[0].#subform[13].Part13_Line6_PartNumber[0]",
  },
  {
    questionId: "part13.itemNumber",
    pdfField: "form1[0].#subform[13].Part13_Line6_ItemNumber[0]",
  },
  {
    questionId: "part13.additionalInfo6",
    pdfField: "form1[0].#subform[13].Part13_Line6_AdditionalInfo[0]",
  },
  {
    questionId: "part13.pageNumber",
    pdfField: "form1[0].#subform[13].Part13_Line7_PageNumber[0]",
  },
  {
    questionId: "part13.partNumber",
    pdfField: "form1[0].#subform[13].Part13_Line7_PartNumber[0]",
  },
  {
    questionId: "part13.itemNumber",
    pdfField: "form1[0].#subform[13].Part13_Line7_ItemNumber[0]",
  },
  {
    questionId: "part13.additionalInfo7",
    pdfField: "form1[0].#subform[13].Part13_Line7_AdditionalInfo[0]",
  },
];
