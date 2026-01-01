/**
 * I-129 Field Mappings
 * Generated on: 2025-12-18T20:06:56.842Z
 * 
 * Complete field mappings for I-129 form
 * Total mappings: 137
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_129_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.2.classification",
    "pdfField": "form1[0].#subform[1].Part2_ClassificationSymbol[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].new[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].continuation[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].previouschange[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].concurrent[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].change[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].P2Checkbox4[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1.petitionType",
    "pdfField": "form1[0].#subform[1].amended[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1a.familyName",
    "pdfField": "form1[0].#subform[0].Line1_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1b.givenName",
    "pdfField": "form1[0].#subform[0].Line1_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.1c.middleName",
    "pdfField": "form1[0].#subform[0].Line1_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.2.companyName",
    "pdfField": "form1[0].#subform[0].Line3_CompanyorOrgName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3.ein",
    "pdfField": "form1[0].#subform[0].TextField1[0]",
    "type": "text"
  },
  {
    "questionId": "part2.2a.legalName",
    "pdfField": "form1[0].#subform[0].Line3_CompanyorOrgName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.1a.familyName",
    "pdfField": "form1[0].#subform[0].Line1_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.1b.givenName",
    "pdfField": "form1[0].#subform[0].Line1_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.1c.middleName",
    "pdfField": "form1[0].#subform[0].Line1_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.3.ein",
    "pdfField": "form1[0].#subform[0].TextField1[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3a.inCareOf",
    "pdfField": "form1[0].#subform[0].Line7a_InCareofName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3b.street",
    "pdfField": "form1[0].#subform[0].Line7b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3d.city",
    "pdfField": "form1[0].#subform[0].Line_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3e.state",
    "pdfField": "form1[0].#subform[0].P1_Line3_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3f.zipCode",
    "pdfField": "form1[0].#subform[0].P1_Line3_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3g.province",
    "pdfField": "form1[0].#subform[0].P1_Line3_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3h.postalCode",
    "pdfField": "form1[0].#subform[0].P1_Line3_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3i.country",
    "pdfField": "form1[0].#subform[0].P1_Line3_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part2.3.inCareOf",
    "pdfField": "form1[0].#subform[0].Line7a_InCareofName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4a.street",
    "pdfField": "form1[0].#subform[0].Line7b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4d.city",
    "pdfField": "form1[0].#subform[0].Line_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4e.state",
    "pdfField": "form1[0].#subform[0].P1_Line3_State[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4f.zipCode",
    "pdfField": "form1[0].#subform[0].P1_Line3_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4g.province",
    "pdfField": "form1[0].#subform[0].P1_Line3_Province[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4h.postalCode",
    "pdfField": "form1[0].#subform[0].P1_Line3_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4i.country",
    "pdfField": "form1[0].#subform[0].P1_Line3_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4b.aptSteFlr",
    "pdfField": "form1[0].#subform[0].Line3_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part2.4b.aptSteFlr",
    "pdfField": "form1[0].#subform[0].Line3_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part2.4b.aptSteFlr",
    "pdfField": "form1[0].#subform[0].Line3_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part2.4c.unitNumber",
    "pdfField": "form1[0].#subform[0].Line3_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part2.5.phone",
    "pdfField": "form1[0].#subform[0].Line2_DaytimePhoneNumber1_Part8[0]",
    "type": "text"
  },
  {
    "questionId": "part2.6.mobile",
    "pdfField": "form1[0].#subform[0].Line3_MobilePhoneNumber1_Part8[0]",
    "type": "text"
  },
  {
    "questionId": "part2.7.email",
    "pdfField": "form1[0].#subform[0].Line9_EmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part2.3.inCareOf",
    "pdfField": "form1[0].#subform[0].Line7a_InCareofName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.6.question",
    "pdfField": "form1[0].#subform[0].P1Line6_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part2.6.question",
    "pdfField": "form1[0].#subform[0].P1Line6_No[0]",
    "type": "text"
  },
  {
    "questionId": "part3.1a.familyName",
    "pdfField": "form1[0].#subform[1].Part3_Line2_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part3.1b.givenName",
    "pdfField": "form1[0].#subform[1].Part3_Line2_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part3.1c.middleName",
    "pdfField": "form1[0].#subform[1].Part3_Line2_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2a.familyName1",
    "pdfField": "form1[0].#subform[2].Line3_FamilyName1[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2a.givenName1",
    "pdfField": "form1[0].#subform[2].Line3_GivenName1[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2a.middleName1",
    "pdfField": "form1[0].#subform[2].Line3_MiddleName1[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2b.familyName2",
    "pdfField": "form1[0].#subform[2].Line3_FamilyName2[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2b.givenName2",
    "pdfField": "form1[0].#subform[2].Line3_GivenName2[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2b.middleName2",
    "pdfField": "form1[0].#subform[2].Line3_MiddleName2[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2c.familyName3",
    "pdfField": "form1[0].#subform[2].Line3_FamilyName3[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2c.givenName3",
    "pdfField": "form1[0].#subform[2].Line3_GivenName3[0]",
    "type": "text"
  },
  {
    "questionId": "part3.2c.middleName3",
    "pdfField": "form1[0].#subform[2].Line3_MiddleName3[0]",
    "type": "text"
  },
  {
    "questionId": "part3.1.beneficiaryType",
    "pdfField": "form1[0].#subform[1].P3Line1_Checkbox[0]",
    "type": "text"
  },
  {
    "questionId": "part3.1.beneficiaryType",
    "pdfField": "form1[0].#subform[1].P3Line1_Checkbox[1]",
    "type": "text"
  },
  {
    "questionId": "part3.2.dateOfBirth",
    "pdfField": "form1[0].#subform[2].Line6_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part3.3.countryOfBirth",
    "pdfField": "form1[0].#subform[2].Part3Line4_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part3.4.countryOfCitizenship",
    "pdfField": "form1[0].#subform[2].Part3Line4_CountryOfCitizenship[0]",
    "type": "text"
  },
  {
    "questionId": "part3.5.gender",
    "pdfField": "form1[0].#subform[2].Line1_Gender_P3[0]",
    "type": "text"
  },
  {
    "questionId": "part3.5.gender",
    "pdfField": "form1[0].#subform[2].Line1_Gender_P3[1]",
    "type": "text"
  },
  {
    "questionId": "part3.5.alienNumber",
    "pdfField": "form1[0].#subform[2].Line1_AlienNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part3.6.ssn",
    "pdfField": "form1[0].#subform[1].Line4_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part3.taxNumber",
    "pdfField": "form1[0].#subform[1].Line3_TaxNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part3.receiptNumber",
    "pdfField": "form1[0].#subform[1].Line1_ReceiptNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part3.7.passportNumber",
    "pdfField": "form1[0].#subform[2].Part3Line5_PassportorTravDoc[0]",
    "type": "text"
  },
  {
    "questionId": "part3.8.passportCountry",
    "pdfField": "form1[0].#subform[2].Line_CountryOfIssuance[0]",
    "type": "text"
  },
  {
    "questionId": "part3.9.passportExpiration",
    "pdfField": "form1[0].#subform[15].ClassHLine5b_PassportorTravDoc[0]",
    "type": "text"
  },
  {
    "questionId": "part3.10.dateOfArrival",
    "pdfField": "form1[0].#subform[2].Part3Line5_DateofArrival[0]",
    "type": "text"
  },
  {
    "questionId": "part3.10.i94Number",
    "pdfField": "form1[0].#subform[2].Part3Line5_ArrivalDeparture[0]",
    "type": "text"
  },
  {
    "questionId": "part3.11.sevisNumber",
    "pdfField": "form1[0].#subform[2].Line5_SEVIS[0]",
    "type": "text"
  },
  {
    "questionId": "part3.11.eadNumber",
    "pdfField": "form1[0].#subform[2].Line5_EAD[0]",
    "type": "text"
  },
  {
    "questionId": "part3.usAddressUnitType",
    "pdfField": "form1[0].#subform[2].Line6_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part3.usAddressUnitType",
    "pdfField": "form1[0].#subform[2].Line6_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part3.usAddressUnitType",
    "pdfField": "form1[0].#subform[2].Line6_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part3.usAddressUnitNumber",
    "pdfField": "form1[0].#subform[2].Line6_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part3.usAddressProvince",
    "pdfField": "form1[0].#subform[2].Part4Line3_DProvince[0]",
    "type": "text"
  },
  {
    "questionId": "part4.1.beneficiaryInUS",
    "pdfField": "form1[0].#subform[3].P4Line3_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.1.beneficiaryInUS",
    "pdfField": "form1[0].#subform[3].P4Line3_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.3.i94Number",
    "pdfField": "form1[0].#subform[2].Part3Line5_ArrivalDeparture[0]",
    "type": "text"
  },
  {
    "questionId": "part4.4.statusExpiration",
    "pdfField": "form1[0].#subform[2].Line11h_DateStatusExpires[0]",
    "type": "text"
  },
  {
    "questionId": "part4.4.question",
    "pdfField": "form1[0].#subform[3].P4Line4_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.4.question",
    "pdfField": "form1[0].#subform[3].P4Line4_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.5.question",
    "pdfField": "form1[0].#subform[3].P4Line5_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.5.question",
    "pdfField": "form1[0].#subform[3].P4Line5_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.6.question",
    "pdfField": "form1[0].#subform[3].P4Line6_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.6.question",
    "pdfField": "form1[0].#subform[3].P4Line6_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.8a.question",
    "pdfField": "form1[0].#subform[3].P4Line8a_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.8a.question",
    "pdfField": "form1[0].#subform[3].P4Line8a_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.8b.question",
    "pdfField": "form1[0].#subform[3].P4Line8b_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.8b.question",
    "pdfField": "form1[0].#subform[3].P4Line8b_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.9.question",
    "pdfField": "form1[0].#subform[3].P4Line9_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.9.question",
    "pdfField": "form1[0].#subform[3].P4Line9_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.10.question",
    "pdfField": "form1[0].#subform[3].P4Line10_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.10.question",
    "pdfField": "form1[0].#subform[3].P4Line10_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.11a.question",
    "pdfField": "form1[0].#subform[3].P4Line11a_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part4.11a.question",
    "pdfField": "form1[0].#subform[3].P4Line11a_No[0]",
    "type": "text"
  },
  {
    "questionId": "part4.2.beneficiaryType",
    "pdfField": "form1[0].#subform[3].P4Line2_Checkbox[0]",
    "type": "text"
  },
  {
    "questionId": "part4.2.beneficiaryType",
    "pdfField": "form1[0].#subform[3].P4Line2_Checkbox[1]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationStreet",
    "pdfField": "form1[0].#subform[4].P5Line3a_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationCity",
    "pdfField": "form1[0].#subform[4].P5Line3a_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationState",
    "pdfField": "form1[0].#subform[4].P5Line3a_State[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationZip",
    "pdfField": "form1[0].#subform[4].P5Line3a_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationUnitType",
    "pdfField": "form1[0].#subform[4].P5Line3a_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationUnitType",
    "pdfField": "form1[0].#subform[4].P5Line3a_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationUnitType",
    "pdfField": "form1[0].#subform[4].P5Line3a_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.workLocationUnitNumber",
    "pdfField": "form1[0].#subform[4].P5Line3a_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3.workLocationType",
    "pdfField": "form1[0].#subform[4].P5Line3[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3.workLocationType",
    "pdfField": "form1[0].#subform[4].P5Line3[1]",
    "type": "text"
  },
  {
    "questionId": "part5.3a.thirdPartyOrg",
    "pdfField": "form1[0].#subform[4].P5Line3a_ThirdpartyOrganization[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationStreet2",
    "pdfField": "form1[0].#subform[4].P5Line3b_StreetNumberName2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationCity2",
    "pdfField": "form1[0].#subform[4].P5Line3b_CityTown2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationState2",
    "pdfField": "form1[0].#subform[4].P5Line3b_State2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationZip2",
    "pdfField": "form1[0].#subform[4].P5Line3b_ZipCode2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationUnitNumber2",
    "pdfField": "form1[0].#subform[4].P5Line3b_AptSteFlrNumber2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationUnitType2",
    "pdfField": "form1[0].#subform[4].P5Line3b_Unit2[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationUnitType2",
    "pdfField": "form1[0].#subform[4].P5Line3b_Unit2[1]",
    "type": "text"
  },
  {
    "questionId": "part5.3b.workLocationUnitType2",
    "pdfField": "form1[0].#subform[4].P5Line3b_Unit2[2]",
    "type": "text"
  },
  {
    "questionId": "part5.8.workLocationStreet",
    "pdfField": "form1[0].#subform[2].Line8a_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part5.8.workLocationCity",
    "pdfField": "form1[0].#subform[2].Line8d_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part5.8.workLocationState",
    "pdfField": "form1[0].#subform[2].Line8e_State[0]",
    "type": "text"
  },
  {
    "questionId": "part5.8.workLocationZip",
    "pdfField": "form1[0].#subform[2].Line8f_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part5.4.startDate",
    "pdfField": "form1[0].#subform[4].Part5_Q10_DateFrom[0]",
    "type": "text"
  },
  {
    "questionId": "part5.5.endDate",
    "pdfField": "form1[0].#subform[4].Part5_Q10_DateTo[0]",
    "type": "text"
  },
  {
    "questionId": "part5.9.hoursPerWeek",
    "pdfField": "form1[0].#subform[4].P5Line9_Hours[0]",
    "type": "text"
  },
  {
    "questionId": "part5.4.question",
    "pdfField": "form1[0].#subform[4].P5Line4_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part5.4.question",
    "pdfField": "form1[0].#subform[4].P5Line4_No[0]",
    "type": "text"
  },
  {
    "questionId": "part5.5.question",
    "pdfField": "form1[0].#subform[4].P5Line5_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part5.5.question",
    "pdfField": "form1[0].#subform[4].P5Line5_No[0]",
    "type": "text"
  },
  {
    "questionId": "part5.6.question",
    "pdfField": "form1[0].#subform[4].P5Line6_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part5.6.question",
    "pdfField": "form1[0].#subform[4].P5Line6_No[0]",
    "type": "text"
  },
  {
    "questionId": "part5.7.question",
    "pdfField": "form1[0].#subform[4].P5Line7_Yes[0]",
    "type": "text"
  },
  {
    "questionId": "part5.7.question",
    "pdfField": "form1[0].#subform[4].P5Line7_No[0]",
    "type": "text"
  },
  {
    "questionId": "part8.2.contactPhone",
    "pdfField": "form1[0].#subform[0].Line2_DaytimePhoneNumber1_Part8[0]",
    "type": "text"
  },
  {
    "questionId": "part7.line3.emailAddress",
    "pdfField": "form1[0].#subform[6].Pt7Line3_EmailAddress[0]",
    "type": "text"
  }
];
