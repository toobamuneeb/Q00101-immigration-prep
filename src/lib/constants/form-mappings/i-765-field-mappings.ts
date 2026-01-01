/**
 * I-765 Field Mappings
 * Generated with AI: 2025-12-24T19:27:51.082Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_765_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part2.fullLegalName.familyName",
    pdfField: "form1[0].Page1[0].Line1a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.fullLegalName.givenName",
    pdfField: "form1[0].Page1[0].Line1b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.fullLegalName.middleName",
    pdfField: "form1[0].Page1[0].Line1c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.reasonForApplying",
    pdfField: "form1[0].Page1[0].Part1_Checkbox[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part1.reasonForApplying",
    pdfField: "form1[0].Page1[0].Part1_Checkbox[1]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part1.reasonForApplying",
    pdfField: "form1[0].Page1[0].Part1_Checkbox[2]",
    type: "radio",
    value: "3",
  },
  {
    questionId: "part2.attorneyFormG28Attached",
    pdfField: "form1[0].Page1[0].CheckBox1[0]",
    type: "checkbox",
  },
  {
    questionId: "part2.otherNamesUsed.familyName",
    pdfField: "form1[0].Page1[0].Line2a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.givenName",
    pdfField: "form1[0].Page1[0].Line2b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.middleName",
    pdfField: "form1[0].Page1[0].Line2c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.familyName",
    pdfField: "form1[0].Page1[0].Line3a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.givenName",
    pdfField: "form1[0].Page1[0].Line3b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.middleName",
    pdfField: "form1[0].Page1[0].Line3c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.familyName",
    pdfField: "form1[0].Page1[0].Line3a_FamilyName[1]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.givenName",
    pdfField: "form1[0].Page1[0].Line3b_GivenName[1]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.middleName",
    pdfField: "form1[0].Page1[0].Line3c_MiddleName[1]",
    type: "text",
  },
  {
    questionId: "part2.attorneyOrRepresentativeUSCISOnlineNumber",
    pdfField: "form1[0].Page1[0].USCISELISAcctNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.sameAsPhysicalAddress",
    pdfField: "form1[0].Page2[0].Part2Line5_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.usMailingAddress.sameAsPhysicalAddress",
    pdfField: "form1[0].Page2[0].Part2Line5_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.usPhysicalAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line7_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.usPhysicalAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line7_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.usPhysicalAddress.aptSteFlrNumber",
    pdfField: "form1[0].Page2[0].Pt2Line7_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.usPhysicalAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line7_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.usPhysicalAddress.cityOrTown",
    pdfField: "form1[0].Page2[0].Pt2Line7_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.usPhysicalAddress.state",
    pdfField: "form1[0].Page2[0].Pt2Line7_State[0]",
    type: "text",
  },
  {
    questionId: "part2.usPhysicalAddress.zipCode",
    pdfField: "form1[0].Page2[0].Pt2Line7_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.usPhysicalAddress.streetNumberName",
    pdfField: "form1[0].Page2[0].Pt2Line7_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.consentForDisclosure",
    pdfField: "form1[0].Page2[0].Line14_Checkbox_No[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherInformation.consentForDisclosure",
    pdfField: "form1[0].Page2[0].Line14_Checkbox_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.otherInformation.alienNumber",
    pdfField: "form1[0].Page2[0].Line7_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.uscisOnlineAccountNumber",
    pdfField: "form1[0].Page2[0].Line8_ElisAccountNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.sex",
    pdfField: "form1[0].Page2[0].Line9_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherInformation.sex",
    pdfField: "form1[0].Page2[0].Line9_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.otherInformation.maritalStatus",
    pdfField: "form1[0].Page2[0].Line10_Checkbox[0]",
    type: "radio",
    value: "Widowed",
  },
  {
    questionId: "part2.otherInformation.maritalStatus",
    pdfField: "form1[0].Page2[0].Line10_Checkbox[1]",
    type: "radio",
    value: "Divorced",
  },
  {
    questionId: "part2.otherInformation.maritalStatus",
    pdfField: "form1[0].Page2[0].Line10_Checkbox[2]",
    type: "radio",
    value: "Single",
  },
  {
    questionId: "part2.otherInformation.maritalStatus",
    pdfField: "form1[0].Page2[0].Line10_Checkbox[3]",
    type: "radio",
    value: "Married",
  },
  {
    questionId: "part2.otherInformation.previouslyFiledFormI765",
    pdfField: "form1[0].Page2[0].Line19_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherInformation.previouslyFiledFormI765",
    pdfField: "form1[0].Page2[0].Line19_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.otherInformation.fathersName.familyName",
    pdfField: "form1[0].Page2[0].Line15a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.fathersName.givenName",
    pdfField: "form1[0].Page2[0].Line15b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.mothersName.familyName",
    pdfField: "form1[0].Page2[0].Line16a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.mothersName.givenName",
    pdfField: "form1[0].Page2[0].Line16b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.countriesOfCitizenshipOrNationality.country",
    pdfField: "form1[0].Page2[0].Line17b_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.countriesOfCitizenshipOrNationality.country",
    pdfField: "form1[0].Page2[0].Line17a_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.issueSSN",
    pdfField: "form1[0].Page2[0].Line13_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherInformation.issueSSN",
    pdfField: "form1[0].Page2[0].Line13_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.otherInformation.ssn",
    pdfField: "form1[0].Page2[0].Line12b_SSN[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line5_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.usMailingAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line5_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.usMailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].Page2[0].Pt2Line5_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.unitType",
    pdfField: "form1[0].Page2[0].Pt2Line5_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.usMailingAddress.cityOrTown",
    pdfField: "form1[0].Page2[0].Pt2Line5_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.state",
    pdfField: "form1[0].Page2[0].Pt2Line5_State[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.zipCode",
    pdfField: "form1[0].Page2[0].Pt2Line5_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.streetNumberName",
    pdfField: "form1[0].Page2[0].Line4b_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.usMailingAddress.inCareOfName",
    pdfField: "form1[0].Page2[0].Line4a_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherInformation.ssaIssuedSSN",
    pdfField: "form1[0].Page2[0].Line12a_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherInformation.ssaIssuedSSN",
    pdfField: "form1[0].Page2[0].Line12a_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.lastArrival.travelDocumentNumber",
    pdfField: "form1[0].Page3[0].Line20c_TravelDoc[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.dateOfLastEntry",
    pdfField: "form1[0].Page3[0].Line21_DateOfLastEntry[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.expirationDate",
    pdfField: "form1[0].Page3[0].Line20e_ExpDate[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.countryOfIssuance",
    pdfField: "form1[0].Page3[0].Line20d_CountryOfIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.passportNumber",
    pdfField: "form1[0].Page3[0].Line20b_Passport[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.statusLastEntry",
    pdfField: "form1[0].Page3[0].Line23_StatusLastEntry[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.currentStatus",
    pdfField: "form1[0].Page3[0].Line24_CurrentStatus[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.sevisNumber",
    pdfField: "form1[0].Page3[0].Line26_SEVISnumber[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.employerName",
    pdfField: "form1[0].Page3[0].Line27b_Everify[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.everifyIdNumber",
    pdfField: "form1[0].Page3[0].Line27c_EverifyIDNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.arrestedOrConvicted",
    pdfField: "form1[0].Page3[0].PtLine29_YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.eligibilityCategory.arrestedOrConvicted",
    pdfField: "form1[0].Page3[0].PtLine29_YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.eligibilityCategory.receiptNumber",
    pdfField: "form1[0].Page3[0].Line18a_Receipt[0].Line30a_ReceiptNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.receiptNumber",
    pdfField: "form1[0].Page3[0].Line28_ReceiptNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.degree",
    pdfField: "form1[0].Page3[0].Line27a_Degree[0]",
    type: "text",
  },
  {
    questionId: "part2.lastArrival.i94Number",
    pdfField: "form1[0].Page3[0].Line20a_I94Number[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfBirth.dateOfBirth",
    pdfField: "form1[0].Page3[0].Line19_DOB[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfBirth.countryOfBirth",
    pdfField: "form1[0].Page3[0].Line18c_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfBirth.cityTownOfBirth",
    pdfField: "form1[0].Page3[0].Line18a_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfBirth.stateProvinceOfBirth",
    pdfField: "form1[0].Page3[0].Line18b_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.eligibilityCategory",
    pdfField: "form1[0].Page3[0].#area[1].section_1[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.eligibilityCategory",
    pdfField: "form1[0].Page3[0].#area[1].section_2[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.eligibilityCategory",
    pdfField: "form1[0].Page3[0].#area[1].section_3[0]",
    type: "text",
  },
  {
    questionId: "part2.eligibilityCategory.arrestedOrConvicted",
    pdfField: "form1[0].Page3[0].PtLine30b_YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.eligibilityCategory.arrestedOrConvicted",
    pdfField: "form1[0].Page3[0].PtLine30b_YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.lastArrival.placeOfLastArrival",
    pdfField: "form1[0].Page3[0].place_entry[0]",
    type: "text",
  },
  {
    questionId: "part3.applicantStatement.interpreterUsed",
    pdfField: "form1[0].Page4[0].Pt3Line1Checkbox[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part3.applicantStatement.interpreterUsed",
    pdfField: "form1[0].Page4[0].Pt3Line1Checkbox[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part3.applicantStatement.languageFluent",
    pdfField: "form1[0].Page4[0].Pt3Line1b_Language[0]",
    type: "text",
  },
  {
    questionId: "part3.applicantStatement.preparerUsed",
    pdfField: "form1[0].Page4[0].Part3_Checkbox[0]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part3.applicantStatement.preparerName",
    pdfField: "form1[0].Page4[0].Pt3Line2_RepresentativeName[0]",
    type: "text",
  },
  {
    questionId: "part3.applicantSignature.dateOfSignature",
    pdfField: "form1[0].Page4[0].Pt3Line7b_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part3.applicantSignature.signature",
    pdfField: "form1[0].Page4[0].Pt3Line7a_Signature[0]",
    type: "text",
  },
  {
    questionId: "part3.contactInformation.daytimePhoneNumber",
    pdfField: "form1[0].Page4[0].Pt3Line3_DaytimePhoneNumber1[0]",
    type: "text",
  },
  {
    questionId: "part3.contactInformation.mobileNumber",
    pdfField: "form1[0].Page4[0].Pt3Line4_MobileNumber1[0]",
    type: "text",
  },
  {
    questionId: "part3.contactInformation.email",
    pdfField: "form1[0].Page4[0].Pt3Line5_Email[0]",
    type: "text",
  },
  {
    questionId: "part3.contactInformation.abcSettlement",
    pdfField: "form1[0].Page4[0].Pt4Line6_Checkbox[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part4.interpreterInformation.businessOrOrganizationName",
    pdfField: "form1[0].Page4[0].Pt4Line2_InterpreterBusinessorOrg[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterInformation.givenName",
    pdfField: "form1[0].Page4[0].Pt4Line1b_InterpreterGivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterInformation.familyName",
    pdfField: "form1[0].Page4[0].Pt4Line1a_InterpreterFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterContactInformation.daytimeTelephone",
    pdfField: "form1[0].Page5[0].Pt4Line4_InterpreterDaytimeTelephone[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterEmailAddress",
    pdfField: "form1[0].Page5[0].Pt4Line6_Email[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterMobileTelephoneNumber",
    pdfField: "form1[0].Page5[0].Pt4Line5_MobileNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterLanguage",
    pdfField: "form1[0].Page5[0].Part4_NameofLanguage[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerGivenName",
    pdfField: "form1[0].Page5[0].Pt5Line1b_PreparerGivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerBusinessName",
    pdfField: "form1[0].Page5[0].Pt5Line2_BusinessName[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerFamilyName",
    pdfField: "form1[0].Page5[0].Pt5Line1a_PreparerFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerCityOrTown",
    pdfField: "form1[0].Page5[0].Pt6Line3c_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerStreetNumberName",
    pdfField: "form1[0].Page5[0].Pt6Line3a_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part5.preparerUnit",
    pdfField: "form1[0].Page5[0].Pt6Line3b_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.preparerUnit",
    pdfField: "form1[0].Page5[0].Pt6Line3b_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.preparerAptSteFlrNumber",
    pdfField: "form1[0].Page5[0].Pt6Line3b_AptSteFlrNumber[0]",
    type: "button",
  },
  {
    questionId: "part5.preparerUnit",
    pdfField: "form1[0].Page5[0].Pt6Line3b_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.preparerPostalCode",
    pdfField: "form1[0].Page5[0].Pt6Line3g_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerZipCode",
    pdfField: "form1[0].Page5[0].Pt6Line3e_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part5.preparerState",
    pdfField: "form1[0].Page5[0].Pt6Line3d_State[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerCountry",
    pdfField: "form1[0].Page5[0].Pt6Line3h_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerProvince",
    pdfField: "form1[0].Page5[0].Pt6Line3f_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerFaxNumber",
    pdfField: "form1[0].Page5[0].Pt5Line5_PreparerFaxNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerDaytimePhoneNumber",
    pdfField: "form1[0].Page5[0].Pt5Line4_DaytimePhoneNumber1[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerEmailAddress",
    pdfField: "form1[0].Page5[0].Pt5Line6_Email[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterCityOrTown",
    pdfField: "form1[0].Page5[0].Pt5Line3c_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterStreetNumberName",
    pdfField: "form1[0].Page5[0].Pt5Line3a_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part4.interpreterUnit",
    pdfField: "form1[0].Page5[0].Pt5Line3b_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.interpreterUnit",
    pdfField: "form1[0].Page5[0].Pt5Line3b_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.interpreterAptSteFlrNumber",
    pdfField: "form1[0].Page5[0].Pt5Line3b_AptSteFlrNumber[0]",
    type: "button",
  },
  {
    questionId: "part4.interpreterUnit",
    pdfField: "form1[0].Page5[0].Pt5Line3b_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.interpreterPostalCode",
    pdfField: "form1[0].Page5[0].Pt5Line3g_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterZipCode",
    pdfField: "form1[0].Page5[0].Pt5Line3e_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part4.interpreterState",
    pdfField: "form1[0].Page5[0].Pt5Line3d_State[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterCountry",
    pdfField: "form1[0].Page5[0].Pt5Line3h_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterProvince",
    pdfField: "form1[0].Page5[0].Pt5Line3f_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterDateOfSignature",
    pdfField: "form1[0].Page5[0].Pt4Line6b_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part4.interpreterSignature",
    pdfField: "form1[0].Page5[0].Pt4Line6a_Signature[0]",
    type: "button",
  },
  {
    questionId: "part5.preparerStatement",
    pdfField: "form1[0].Page6[0].Part5Line7_Checkbox[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part5.preparerStatement",
    pdfField: "form1[0].Page6[0].Part5Line7_Checkbox[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part5.preparerStatement",
    pdfField: "form1[0].Page6[0].Part5Line7b_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.preparerStatement",
    pdfField: "form1[0].Page6[0].Part5Line7b_Checkbox[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.preparerSignature",
    pdfField: "form1[0].Page6[0].Pt5Line8a_Signature[0]",
    type: "text",
  },
  {
    questionId: "part5.preparerDateOfSignature",
    pdfField: "form1[0].Page6[0].Pt5Line8b_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPageNumber",
    pdfField: "form1[0].Page7[0].Pt6Line3a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPartNumber",
    pdfField: "form1[0].Page7[0].Pt6Line3b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationItemNumber",
    pdfField: "form1[0].Page7[0].Pt6Line3c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPageNumber",
    pdfField: "form1[0].Page7[0].Pt6Line4a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPartNumber",
    pdfField: "form1[0].Page7[0].Pt6Line4b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationItemNumber",
    pdfField: "form1[0].Page7[0].Pt6Line4c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformation",
    pdfField: "form1[0].Page7[0].Pt6Line4d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPageNumber",
    pdfField: "form1[0].Page7[0].Pt6Line5a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPartNumber",
    pdfField: "form1[0].Page7[0].Pt6Line5b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationItemNumber",
    pdfField: "form1[0].Page7[0].Pt6Line5c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformation",
    pdfField: "form1[0].Page7[0].Pt6Line5d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPageNumber",
    pdfField: "form1[0].Page7[0].Pt6Line6a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPartNumber",
    pdfField: "form1[0].Page7[0].Pt6Line6b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationItemNumber",
    pdfField: "form1[0].Page7[0].Pt6Line6c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformation",
    pdfField: "form1[0].Page7[0].Pt6Line6d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPageNumber",
    pdfField: "form1[0].Page7[0].Pt6Line7a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationPartNumber",
    pdfField: "form1[0].Page7[0].Pt6Line7b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformationItemNumber",
    pdfField: "form1[0].Page7[0].Pt6Line7c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformation",
    pdfField: "form1[0].Page7[0].Pt6Line7d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part6.familyName",
    pdfField: "form1[0].Page7[0].Line1a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part6.givenName",
    pdfField: "form1[0].Page7[0].Line1b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part6.middleName",
    pdfField: "form1[0].Page7[0].Line1c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part6.alienNumber",
    pdfField: "form1[0].Page7[0].Line7_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.additionalInformation",
    pdfField: "form1[0].Page7[0].Pt6Line4d_AdditionalInfo[1]",
    type: "text",
  },
];
