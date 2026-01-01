/**
 * I-129F Field Mappings
 * Generated with AI: 2025-12-25T01:25:25.532Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_129F_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part1.yourFullName.familyName",
    pdfField: "form1[0].#subform[0].Pt1Line6a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.yourFullName.givenName",
    pdfField: "form1[0].#subform[0].Pt1Line6b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.yourFullName.middleName",
    pdfField: "form1[0].#subform[0].Pt1Line6c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.classificationRequest",
    pdfField: "form1[0].#subform[0].Pt1Line4a_Checkboxes[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part1.classificationRequest",
    pdfField: "form1[0].#subform[0].Pt1Line4a_Checkboxes[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part1.spouseK3FiledI130",
    pdfField: "form1[0].#subform[0].Pt1Line5_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.spouseK3FiledI130",
    pdfField: "form1[0].#subform[0].Pt1Line5_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.alienRegistrationNumber",
    pdfField: "form1[0].#subform[0].Pt1Line1_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.uscisOnlineAccountNumber",
    pdfField: "form1[0].#subform[0].Pt1Line2_AcctIdentifier[0]",
    type: "text",
  },
  {
    questionId: "part1.socialSecurityNumber",
    pdfField: "form1[0].#subform[0].Pt1Line3_SSN[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.givenName",
    pdfField: "form1[0].#subform[0].Pt1Line7b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.middleName",
    pdfField: "form1[0].#subform[0].Pt1Line7c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.familyName",
    pdfField: "form1[0].#subform[0].Pt1Line7a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddressSameAsPhysical",
    pdfField: "form1[0].#subform[0].Pt1Line8j_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.mailingAddressSameAsPhysical",
    pdfField: "form1[0].#subform[0].Pt1Line8j_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.mailingAddress.streetNumberName",
    pdfField: "form1[0].#subform[0].Pt1Line8_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[0].Pt1Line8_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[0].Pt1Line8_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.mailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[0].Pt1Line8_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[0].Pt1Line8_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.mailingAddress.cityOrTown",
    pdfField: "form1[0].#subform[0].Pt1Line8_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.province",
    pdfField: "form1[0].#subform[0].Pt1Line8_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.postalCode",
    pdfField: "form1[0].#subform[0].Pt1Line8_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.zipCode",
    pdfField: "form1[0].#subform[0].Pt1Line8_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.state",
    pdfField: "form1[0].#subform[0].Pt1Line8_State[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.country",
    pdfField: "form1[0].#subform[0].Pt1Line8_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.mailingAddress.inCareOfName",
    pdfField: "form1[0].#subform[0].Pt1Line8_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.dateTo",
    pdfField: "form1[0].#subform[1].Pt1Line10b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.streetNumberName",
    pdfField: "form1[0].#subform[1].Pt1Line9_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt1Line9_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.province",
    pdfField: "form1[0].#subform[1].Pt1Line9_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.postalCode",
    pdfField: "form1[0].#subform[1].Pt1Line9_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line9_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.state",
    pdfField: "form1[0].#subform[1].Pt1Line9_State[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.country",
    pdfField: "form1[0].#subform[1].Pt1Line9_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.dateFrom",
    pdfField: "form1[0].#subform[1].Pt1Line10a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.dateTo",
    pdfField: "form1[0].#subform[1].Pt1Line12b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.streetNumberName",
    pdfField: "form1[0].#subform[1].Pt1Line11_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line11_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line11_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt1Line11_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line11_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt1Line11_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.province",
    pdfField: "form1[0].#subform[1].Pt1Line11_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.postalCode",
    pdfField: "form1[0].#subform[1].Pt1Line11_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line11_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.state",
    pdfField: "form1[0].#subform[1].Pt1Line11_State[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.country",
    pdfField: "form1[0].#subform[1].Pt1Line11_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressTwo.dateFrom",
    pdfField: "form1[0].#subform[1].Pt1Line12a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.name",
    pdfField: "form1[0].#subform[1].Pt1Line13_NameofEmployer[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.endDate",
    pdfField: "form1[0].#subform[1].Pt1Line16b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.streetNumberName",
    pdfField: "form1[0].#subform[1].Pt1Line14_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line14_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.employmentHistory.employerOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line14_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.employmentHistory.employerOne.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt1Line14_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line14_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.employmentHistory.employerOne.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt1Line14_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.province",
    pdfField: "form1[0].#subform[1].Pt1Line14_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.postalCode",
    pdfField: "form1[0].#subform[1].Pt1Line14_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line14_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.state",
    pdfField: "form1[0].#subform[1].Pt1Line14_State[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.country",
    pdfField: "form1[0].#subform[1].Pt1Line14_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.startDate",
    pdfField: "form1[0].#subform[1].Pt1Line16a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerOne.occupation",
    pdfField: "form1[0].#subform[1].Pt1Line15_Occupation[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.name",
    pdfField: "form1[0].#subform[1].Pt1Line17_NameofEmployer[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.streetNumberName",
    pdfField: "form1[0].#subform[1].Pt1Line18_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line18_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line18_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt1Line18_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.unit",
    pdfField: "form1[0].#subform[1].Pt1Line18_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt1Line18_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.province",
    pdfField: "form1[0].#subform[1].Pt1Line18_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.postalCode",
    pdfField: "form1[0].#subform[1].Pt1Line18_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line18_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.state",
    pdfField: "form1[0].#subform[1].Pt1Line18_State[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.country",
    pdfField: "form1[0].#subform[1].Pt1Line18_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.occupation",
    pdfField: "form1[0].#subform[1].Pt1Line19_Occupation[0]",
    type: "text",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line9_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line9_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.unit",
    pdfField: "form1[0].#subform[1].Pt1Line9_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.addressHistory.physicalAddressOne.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt1Line9_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.endDate",
    pdfField: "form1[0].#subform[2].Pt1Line20b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.employmentHistory.employerTwo.startDate",
    pdfField: "form1[0].#subform[2].Pt1Line20a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part1.otherInformation.cityTownOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line24_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.otherInformation.countryOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line26_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.otherInformation.provinceOrStateOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line25_ProvinceOrStateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[2].Pt1Line23_Checkbox[0]",
    type: "radio",
    value: "W",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[2].Pt1Line23_Checkbox[1]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[2].Pt1Line23_Checkbox[2]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[2].Pt1Line23_Checkbox[3]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.otherInformation.dateOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line22_DateofBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.sex",
    pdfField: "form1[0].#subform[2].Pt1Line21_Checkbox[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.sex",
    pdfField: "form1[0].#subform[2].Pt1Line21_Checkbox[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part1.parentOne.familyName",
    pdfField: "form1[0].#subform[2].Pt1Line27a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOne.givenName",
    pdfField: "form1[0].#subform[2].Pt1Line27b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOne.middleName",
    pdfField: "form1[0].#subform[2].Pt1Line27c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOne.dateOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line28_DateofBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOne.sex",
    pdfField: "form1[0].#subform[2].Pt1Line29_Checkbox[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.parentOne.sex",
    pdfField: "form1[0].#subform[2].Pt1Line29_Checkbox[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part1.parentOne.countryOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line30_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOneCountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt1Line31_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.parentOneCityTownOfResidence",
    pdfField: "form1[0].#subform[2].Pt1Line31_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoFamilyName",
    pdfField: "form1[0].#subform[2].Pt1Line32a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoGivenName",
    pdfField: "form1[0].#subform[2].Pt1Line32b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoMiddleName",
    pdfField: "form1[0].#subform[2].Pt1Line32c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoDateOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line33_DateofBirth[0]",
    type: "date",
  },
  {
    questionId: "part1.parentTwoSex",
    pdfField: "form1[0].#subform[2].Pt1Line34_Checkbox[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.parentTwoSex",
    pdfField: "form1[0].#subform[2].Pt1Line34_Checkbox[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part1.parentTwoCountryOfBirth",
    pdfField: "form1[0].#subform[2].Pt1Line35_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoCountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt1Line36b_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.parentTwoCityTownOfResidence",
    pdfField: "form1[0].#subform[2].Pt1Line36a_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.previousMarriage",
    pdfField: "form1[0].#subform[2].Pt1Line37_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.previousMarriage",
    pdfField: "form1[0].#subform[2].Pt1Line37_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.previousSpouseFamilyName",
    pdfField: "form1[0].#subform[2].Pt1Line38a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.previousSpouseGivenName",
    pdfField: "form1[0].#subform[2].Pt1Line38b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.previousSpouseMiddleName",
    pdfField: "form1[0].#subform[2].Pt1Line38c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.dateMarriageEnded",
    pdfField: "form1[0].#subform[2].Pt1Line39_DateMarriageEnded[0]",
    type: "date",
  },
  {
    questionId: "part1.citizenshipThrough",
    pdfField: "form1[0].#subform[2].Pt1Line40_Checkbox[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part1.citizenshipThrough",
    pdfField: "form1[0].#subform[2].Pt1Line40_Checkbox[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part1.citizenshipThrough",
    pdfField: "form1[0].#subform[2].Pt1Line40_Checkbox[2]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part1.certificateObtained",
    pdfField: "form1[0].#subform[2].Pt1Line20_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.certificateObtained",
    pdfField: "form1[0].#subform[2].Pt1Line20_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.certificateNumber",
    pdfField: "form1[0].#subform[3].Pt1Line21a_CertificateNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.placeOfIssuance",
    pdfField: "form1[0].#subform[3].Pt1Line21b_PlaceofIssuance[0]",
    type: "text",
  },
  {
    questionId: "part1.dateOfIssuance",
    pdfField: "form1[0].#subform[3].Pt1Line21c_DateOfIssuance[0]",
    type: "date",
  },
  {
    questionId: "part1.additionalFamilyName",
    pdfField: "form1[0].#subform[3].Pt1Line45a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.additionalGivenName",
    pdfField: "form1[0].#subform[3].Pt1Line45b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.additionalMiddleName",
    pdfField: "form1[0].#subform[3].Pt1Line45c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.dateOfFiling",
    pdfField: "form1[0].#subform[3].Pt1Line46_DateOfFiling[0]",
    type: "date",
  },
  {
    questionId: "part1.uscisAction",
    pdfField: "form1[0].#subform[3].Pt1Line47_Result[0]",
    type: "text",
  },
  {
    questionId: "part1.filedForOtherBeneficiary",
    pdfField: "form1[0].#subform[3].Pt1Line43_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.filedForOtherBeneficiary",
    pdfField: "form1[0].#subform[3].Pt1Line43_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.alienNumber",
    pdfField: "form1[0].#subform[3].Pt1Line44_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.childrenUnder18",
    pdfField: "form1[0].#subform[3].Pt1Line48_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.childrenUnder18",
    pdfField: "form1[0].#subform[3].Pt1Line48_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.childAge49a",
    pdfField: "form1[0].#subform[3].Pt1Line49a_Age[0]",
    type: "text",
  },
  {
    questionId: "part1.childAge49b",
    pdfField: "form1[0].#subform[3].Pt1Line49b_Age[0]",
    type: "text",
  },
  {
    questionId: "part1.residenceOneCountry",
    pdfField: "form1[0].#subform[3].Pt1Line50b_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.residenceOneState",
    pdfField: "form1[0].#subform[3].Pt1Line50a_State[0]",
    type: "text",
  },
  {
    questionId: "part1.residenceTwoCountry",
    pdfField: "form1[0].#subform[3].Pt1Line51b_CountryOfCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.residenceTwoState",
    pdfField: "form1[0].#subform[3].Pt1Line51a_State[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryFamilyName",
    pdfField: "form1[0].#subform[3].Pt2Line1a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryGivenName",
    pdfField: "form1[0].#subform[3].Pt2Line1b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMiddleName",
    pdfField: "form1[0].#subform[3].Pt2Line1c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryAlienNumber",
    pdfField: "form1[0].#subform[3].Pt2Line2_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCountryOfBirth",
    pdfField: "form1[0].#subform[3].Pt2Line8_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCountryOfCitizenship",
    pdfField: "form1[0].#subform[3].Pt2Line9_CountryofCitzOrNationality[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCityTownOfBirth",
    pdfField: "form1[0].#subform[3].Pt2Line7_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMaritalStatus",
    pdfField: "form1[0].#subform[3].Pt2Line6_Checkboxes[0]",
    type: "radio",
    value: "W",
  },
  {
    questionId: "part2.beneficiaryMaritalStatus",
    pdfField: "form1[0].#subform[3].Pt2Line6_Checkboxes[1]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part2.beneficiaryMaritalStatus",
    pdfField: "form1[0].#subform[3].Pt2Line6_Checkboxes[2]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part2.beneficiaryMaritalStatus",
    pdfField: "form1[0].#subform[3].Pt2Line6_Checkboxes[3]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.beneficiarySSN",
    pdfField: "form1[0].#subform[3].Pt2Line3_SSN[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryDateOfBirth",
    pdfField: "form1[0].#subform[3].Pt2Line4_DateOfBirth[0]",
    type: "date",
  },
  {
    questionId: "part2.beneficiarySex",
    pdfField: "form1[0].#subform[3].Pt2Line5_Checkboxes[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.beneficiarySex",
    pdfField: "form1[0].#subform[3].Pt2Line5_Checkboxes[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part2.otherNamesFamilyName",
    pdfField: "form1[0].#subform[3].Pt2Line10a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesGivenName",
    pdfField: "form1[0].#subform[3].Pt2Line10b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesMiddleName",
    pdfField: "form1[0].#subform[3].Pt2Line10c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingCity",
    pdfField: "form1[0].#subform[4].Pt2Line11_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingInCareOf",
    pdfField: "form1[0].#subform[4].Pt2Line11_InCareOfName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingStreet",
    pdfField: "form1[0].#subform[4].Pt2Line11_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line11_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryMailingUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line11_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryMailingUnitNumber",
    pdfField: "form1[0].#subform[4].Pt2Line11_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line11_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.beneficiaryMailingCountry",
    pdfField: "form1[0].#subform[4].Pt2Line11_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingProvince",
    pdfField: "form1[0].#subform[4].Pt2Line11_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingZipCode",
    pdfField: "form1[0].#subform[4].Pt2Line11_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingState",
    pdfField: "form1[0].#subform[4].Pt2Line11_State[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMailingPostalCode",
    pdfField: "form1[0].#subform[4].Pt2Line11_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneDateTo",
    pdfField: "form1[0].#subform[4].Pt2Line13b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneStreet",
    pdfField: "form1[0].#subform[4].Pt2Line12_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line12_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line12_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneUnitNumber",
    pdfField: "form1[0].#subform[4].Pt2Line12_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line12_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneCity",
    pdfField: "form1[0].#subform[4].Pt2Line12_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneProvince",
    pdfField: "form1[0].#subform[4].Pt2Line12_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOnePostalCode",
    pdfField: "form1[0].#subform[4].Pt2Line12_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneZipCode",
    pdfField: "form1[0].#subform[4].Pt2Line12_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneState",
    pdfField: "form1[0].#subform[4].Pt2Line12_State[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneCountry",
    pdfField: "form1[0].#subform[4].Pt2Line12_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressOneDateFrom",
    pdfField: "form1[0].#subform[4].Pt2Line13a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoDateTo",
    pdfField: "form1[0].#subform[4].Pt2Line15b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoStreet",
    pdfField: "form1[0].#subform[4].Pt2Line14_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line14_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line14_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoUnitNumber",
    pdfField: "form1[0].#subform[4].Pt2Line14_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoUnitType",
    pdfField: "form1[0].#subform[4].Pt2Line14_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoCity",
    pdfField: "form1[0].#subform[4].Pt2Line14_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoProvince",
    pdfField: "form1[0].#subform[4].Pt2Line14_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoPostalCode",
    pdfField: "form1[0].#subform[4].Pt2Line14_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoZipCode",
    pdfField: "form1[0].#subform[4].Pt2Line14_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoState",
    pdfField: "form1[0].#subform[4].Pt2Line14_State[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoCountry",
    pdfField: "form1[0].#subform[4].Pt2Line14_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressTwoDateFrom",
    pdfField: "form1[0].#subform[4].Pt2Line15a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryEmployerOneName",
    pdfField: "form1[0].#subform[4].Pt2Line16_NameofEmployer[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryEmployerOneEndDate",
    pdfField: "form1[0].#subform[4].Pt2Line19b_ToFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryEmployerOneStreet",
    pdfField: "form1[0].#subform[4].Pt2Line17_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.selectFloor",
    pdfField: "form1[0].#subform[4].Pt2Line17_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.selectApartment",
    pdfField: "form1[0].#subform[4].Pt2Line17_Unit[1]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.aptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt2Line17_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.selectSuite",
    pdfField: "form1[0].#subform[4].Pt2Line17_Unit[2]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.cityOrTown",
    pdfField: "form1[0].#subform[4].Pt2Line17_CityOrTown[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.province",
    pdfField: "form1[0].#subform[4].Pt2Line17_Province[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.postalCode",
    pdfField: "form1[0].#subform[4].Pt2Line17_PostalCode[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.zipCode",
    pdfField: "form1[0].#subform[4].Pt2Line17_ZipCode[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.state",
    pdfField: "form1[0].#subform[4].Pt2Line17_State[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.country",
    pdfField: "form1[0].#subform[4].Pt2Line17_Country[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.employmentStartDate",
    pdfField: "form1[0].#subform[4].Pt2Line19a_DateFrom[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerOne.occupation",
    pdfField: "form1[0].#subform[4].Pt2Line18_Occupation[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.nameOfEmployer",
    pdfField: "form1[0].#subform[5].Pt2Line20_NameofEmployer[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.employmentEndDate",
    pdfField: "form1[0].#subform[5].Pt2Line23b_ToFrom[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.streetNumberName",
    pdfField: "form1[0].#subform[5].Pt2Line21_StreetNumberName[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.selectFloor",
    pdfField: "form1[0].#subform[5].Pt2Line21_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.selectApartment",
    pdfField: "form1[0].#subform[5].Pt2Line21_Unit[1]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.aptSteFlrNumber",
    pdfField: "form1[0].#subform[5].Pt2Line21_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.selectSuite",
    pdfField: "form1[0].#subform[5].Pt2Line21_Unit[0]",
    value: "APT",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.selectSuite",
    pdfField: "form1[0].#subform[5].Pt2Line21_Unit[1]",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.selectSuite",
    pdfField: "form1[0].#subform[5].Pt2Line21_Unit[2]",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.cityOrTown",
    pdfField: "form1[0].#subform[5].Pt2Line21_CityOrTown[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.province",
    pdfField: "form1[0].#subform[5].Pt2Line21_Province[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.postalCode",
    pdfField: "form1[0].#subform[5].Pt2Line21_PostalCode[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.zipCode",
    pdfField: "form1[0].#subform[5].Pt2Line21_ZipCode[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.state",
    pdfField: "form1[0].#subform[5].Pt2Line21_State[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.country",
    pdfField: "form1[0].#subform[5].Pt2Line21_Country[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.employmentStartDate",
    pdfField: "form1[0].#subform[5].Pt2Line23a_DateFrom[0]",
  },
  {
    questionId: "part2.beneficiaryEmployerTwo.occupation",
    pdfField: "form1[0].#subform[5].Pt2Line22_Occupation[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.familyName",
    pdfField: "form1[0].#subform[5].Pt2Line24a_FamilyName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.givenName",
    pdfField: "form1[0].#subform[5].Pt2Line24b_GivenName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.middleName",
    pdfField: "form1[0].#subform[5].Pt2Line24c_MiddleName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.dateOfBirth",
    pdfField: "form1[0].#subform[5].Pt1Line11_DateofBirth[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.sex",
    pdfField: "form1[0].#subform[5].Pt2Line26_Checkbox[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.sex",
    pdfField: "form1[0].#subform[5].Pt2Line26_Checkbox[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.countryOfBirth",
    pdfField: "form1[0].#subform[5].Pt2Line27_CountryOfCitzOrNationality[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.countryOfResidence",
    pdfField: "form1[0].#subform[5].Pt2Line28b_CountryOfCitzOrNationality[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentOne.cityTownOfResidence",
    pdfField: "form1[0].#subform[5].Pt2Line28a_CityTownOfBirth[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.familyName",
    pdfField: "form1[0].#subform[5].Pt2Line29a_FamilyName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.givenName",
    pdfField: "form1[0].#subform[5].Pt2Line29b_GivenName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.middleName",
    pdfField: "form1[0].#subform[5].Pt2Line29c_MiddleName[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.dateOfBirth",
    pdfField: "form1[0].#subform[5].Pt2Line30_DateofBirth[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.sex",
    pdfField: "form1[0].#subform[5].Pt2Line31_Checkbox[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.sex",
    pdfField: "form1[0].#subform[5].Pt2Line31_Checkbox[1]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.countryOfBirth",
    pdfField: "form1[0].#subform[5].Pt2Line32_CountryOfCitzOrNationality[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.countryOfResidence",
    pdfField: "form1[0].#subform[5].Pt2Line33b_CountryOfCitzOrNationality[0]",
  },
  {
    questionId: "part2.beneficiaryParents.parentTwo.cityTownOfResidence",
    pdfField: "form1[0].#subform[5].Pt2Line33a_CityTownOfBirth[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previouslyMarried",
    pdfField: "form1[0].#subform[5].Pt2Line34_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previouslyMarried",
    pdfField: "form1[0].#subform[5].Pt2Line34_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previousSpouse.familyName",
    pdfField: "form1[0].#subform[5].Pt2Line35a_FamilyName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previousSpouse.givenName",
    pdfField: "form1[0].#subform[5].Pt2Line35b_GivenName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previousSpouse.middleName",
    pdfField: "form1[0].#subform[5].Pt2Line35c_MiddleName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.previousSpouse.dateMarriageEnded",
    pdfField: "form1[0].#subform[5].Pt2Line36_DateMarriageEnded[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.everInUS",
    pdfField: "form1[0].#subform[5].Pt2Line37_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.everInUS",
    pdfField: "form1[0].#subform[5].Pt2Line37_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.lastArrivedAs",
    pdfField: "form1[0].#subform[5].Pt2Line38a_LastArrivedAs[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.arrivalDepartureRecordNumber",
    pdfField: "form1[0].#subform[5].Pt2Line38b_ArrivalDeparture[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.dateOfArrival",
    pdfField: "form1[0].#subform[5].Pt2Line38c_DateofArrival[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.countryOfIssuance",
    pdfField: "form1[0].#subform[6].Pt2Line38g_CountryOfIssuance[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.passportExpirationDate",
    pdfField: "form1[0].#subform[6].Pt2Line38h_ExpDate[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.passportNumber",
    pdfField: "form1[0].#subform[6].Pt2Line38e_Passport[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.travelDocumentNumber",
    pdfField: "form1[0].#subform[6].Pt2Line38f_TravelDoc[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.dateAuthorizedStayExpired",
    pdfField: "form1[0].#subform[6].Pt2Line38d_DateExpired[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.children",
    pdfField: "form1[0].#subform[6].Pt2Line39_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.children",
    pdfField: "form1[0].#subform[6].Pt2Line39_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.familyName",
    pdfField: "form1[0].#subform[6].Pt2Line40a_FamilyName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.givenName",
    pdfField: "form1[0].#subform[6].Pt2Line40b_GivenName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.middleName",
    pdfField: "form1[0].#subform[6].Pt2Line40c_MiddleName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.countryOfBirth",
    pdfField: "form1[0].#subform[6].Pt2Line41_CountryOfBirth[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.dateOfBirth",
    pdfField: "form1[0].#subform[6].Pt2Line42_DateofBirth[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.residesWithBeneficiary",
    pdfField: "form1[0].#subform[6].Pt2Line43_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.child.residesWithBeneficiary",
    pdfField: "form1[0].#subform[6].Pt2Line43_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.zipCode",
    pdfField: "form1[0].#subform[6].Pt2Line45e_ZipCode[0]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.cityOrTown",
    pdfField: "form1[0].#subform[6].Pt2Line45c_CityOrTown[0]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.streetNumberName",
    pdfField: "form1[0].#subform[6].Pt2Line45a_StreetNumberName[0]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.selectSuite",
    pdfField: "form1[0].#subform[6].Pt2Line45b_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.selectFloor",
    pdfField: "form1[0].#subform[6].Pt2Line45b_Unit[1]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.aptSteFlrNumber",
    pdfField: "form1[0].#subform[6].Pt2Line45b_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.selectApartment",
    pdfField: "form1[0].#subform[6].Pt2Line45b_Unit[2]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.state",
    pdfField: "form1[0].#subform[6].Pt2Line45d_State[0]",
  },
  {
    questionId: "part2.beneficiaryAddressInUS.daytimeTelephoneNumber",
    pdfField: "form1[0].#subform[6].Pt2Line46_DayTimeTelephoneNumber[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.country",
    pdfField: "form1[0].#subform[6].Pt2Line47_Country[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.province",
    pdfField: "form1[0].#subform[6].Pt2Line47_Province[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.selectApartment",
    pdfField: "form1[0].#subform[6].Pt2Line47_Unit[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.aptSteFlrNumber",
    pdfField: "form1[0].#subform[6].Pt2Line47_AptSteFlrNumber[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.selectFloor",
    pdfField: "form1[0].#subform[6].Pt2Line47_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.selectSuite",
    pdfField: "form1[0].#subform[6].Pt2Line47_Unit[2]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.streetNumberName",
    pdfField: "form1[0].#subform[6].Pt2Line47_StreetNumberName[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.cityOrTown",
    pdfField: "form1[0].#subform[6].Pt2Line47_CityOrTown[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.daytimeTelephoneNumber",
    pdfField: "form1[0].#subform[6].Pt2Line48_DaytimeTelephoneNum[0]",
  },
  {
    questionId: "part2.beneficiaryPhysicalAddressAbroad.postalCode",
    pdfField: "form1[0].#subform[6].Pt2Line47_PostalCode[0]",
  },
  {
    questionId:
      "part2.beneficiaryOtherInfo.childPhysicalResidence.streetNumberName",
    pdfField: "form1[0].#subform[6].Pt2Line44_StreetNumberName[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.selectSuite",
    pdfField: "form1[0].#subform[6].Pt2Line44_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.selectFloor",
    pdfField: "form1[0].#subform[6].Pt2Line44_Unit[1]",
  },
  {
    questionId:
      "part2.beneficiaryOtherInfo.childPhysicalResidence.aptSteFlrNumber",
    pdfField: "form1[0].#subform[6].Pt2Line44_AptSteFlrNumber[0]",
  },
  {
    questionId:
      "part2.beneficiaryOtherInfo.childPhysicalResidence.selectApartment",
    pdfField: "form1[0].#subform[6].Pt2Line44_Unit[2]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.cityOrTown",
    pdfField: "form1[0].#subform[6].Pt2Line44_CityOrTown[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.state",
    pdfField: "form1[0].#subform[6].Pt2Line44_State[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.province",
    pdfField: "form1[0].#subform[6].Pt2Line44_Province[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.zipCode",
    pdfField: "form1[0].#subform[6].Pt2Line44_ZipCode[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.country",
    pdfField: "form1[0].#subform[6].Pt2Line44_Country[0]",
  },
  {
    questionId: "part2.beneficiaryOtherInfo.childPhysicalResidence.postalCode",
    pdfField: "form1[0].#subform[6].Pt2Line44_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryFamilyName",
    pdfField: "form1[0].#subform[6].Pt2Line49a_FamilyName[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryGivenName",
    pdfField: "form1[0].#subform[6].Pt2Line49b_GivenName[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryMiddleName",
    pdfField: "form1[0].#subform[6].Pt2Line49c_MiddleName[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryAptSteFlrNumber",
    pdfField: "form1[0].#subform[6].Pt2Line50_AptSteFlrNumber[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryStreetNumberName",
    pdfField: "form1[0].#subform[6].Pt2Line50_StreetNumberName[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryCityOrTown",
    pdfField: "form1[0].#subform[6].Pt2Line28c_CityOrTown[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryPostalCode",
    pdfField: "form1[0].#subform[6].Pt2Line28e_PostalCode[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryCountry",
    pdfField: "form1[0].#subform[6].Pt2Line28f_Country[0]",
    type: "Text",
  },
  {
    questionId: "part2.beneficiaryProvince",
    pdfField: "form1[0].#subform[6].Pt2Line28d_Province[0]",
    type: "Button",
  },
  {
    questionId: "part2.beneficiaryUnit",
    pdfField: "form1[0].#subform[6].Pt2Line50_Unit[0]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryUnit",
    pdfField: "form1[0].#subform[6].Pt2Line50_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryUnit",
    pdfField: "form1[0].#subform[6].Pt2Line50_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.isFianceRelated",
    pdfField: "form1[0].#subform[7].Pt2Line51_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.isFianceRelated",
    pdfField: "form1[0].#subform[7].Pt2Line51_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.relationshipDescription",
    pdfField: "form1[0].#subform[7].Pt2Line52_Relationship[0]",
    type: "Button",
  },
  {
    questionId: "part2.isFianceRelated",
    pdfField: "form1[0].#subform[7].Pt2Line51_Checkboxes[2]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part2.haveMetInPerson",
    pdfField: "form1[0].#subform[7].Pt2Line53_Checkboxes[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part2.haveMetInPerson",
    pdfField: "form1[0].#subform[7].Pt2Line53_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.haveMetInPerson",
    pdfField: "form1[0].#subform[7].Pt2Line53_Checkboxes[2]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.meetingExplanation",
    pdfField: "form1[0].#subform[7].Pt2Line54_Describe[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbStreetNumberName",
    pdfField: "form1[0].#subform[7].Pt2Line60a_StreetNumberName[0]",
    type: "Button",
  },
  {
    questionId: "part2.imbUnit",
    pdfField: "form1[0].#subform[7].Pt2Line60_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.imbUnit",
    pdfField: "form1[0].#subform[7].Pt2Line60_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.imbAptSteFlrNumber",
    pdfField: "form1[0].#subform[7].Pt2Line60_AptSteFlrNumber[0]",
    type: "Button",
  },
  {
    questionId: "part2.imbUnit",
    pdfField: "form1[0].#subform[7].Pt2Line60_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.imbCityOrTown",
    pdfField: "form1[0].#subform[7].Pt2Line60_CityOrTown[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbProvince",
    pdfField: "form1[0].#subform[7].Pt2Line60_Province[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbCountry",
    pdfField: "form1[0].#subform[7].Pt2Line60_Country[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbPostalCode",
    pdfField: "form1[0].#subform[7].Pt2Line60_PostalCode[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbOrgName",
    pdfField: "form1[0].#subform[7].Pt2Line58_IMBOrgName[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbWebsite",
    pdfField: "form1[0].#subform[7].Pt2Line59_IMBWebsite[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbDaytimeTelephoneNum",
    pdfField: "form1[0].#subform[7].Pt2Line61_DaytimeTelephoneNum[0]",
    type: "Text",
  },
  {
    questionId: "part2.consularCityTown",
    pdfField: "form1[0].#subform[7].Pt2Line62a_CityTown[0]",
    type: "Text",
  },
  {
    questionId: "part2.consularCountry",
    pdfField: "form1[0].#subform[7].Pt2Line62b_Country[0]",
    type: "Button",
  },
  {
    questionId: "part2.metThroughImb",
    pdfField: "form1[0].#subform[7].Pt2Line55_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.metThroughImb",
    pdfField: "form1[0].#subform[7].Pt2Line55_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.imbFamilyName",
    pdfField: "form1[0].#subform[7].Pt2Line57a_IMBFamilyName[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbGivenName",
    pdfField: "form1[0].#subform[7].Pt2Line57b_IMB_GivenName[0]",
    type: "Text",
  },
  {
    questionId: "part2.imbName",
    pdfField: "form1[0].#subform[7].Pt2Line56_IMBName[0]",
    type: "Button",
  },
  {
    questionId: "part3.subjectToProtectionOrder",
    pdfField: "form1[0].#subform[7].Pt3Line1_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.subjectToProtectionOrder",
    pdfField: "form1[0].#subform[7].Pt3Line1_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.arrestedForCrimeA",
    pdfField: "form1[0].#subform[7].P3Line2a_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.arrestedForCrimeA",
    pdfField: "form1[0].#subform[7].P3Line2a_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.arrestedForCrimeB",
    pdfField: "form1[0].#subform[8].P3Line2b_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.arrestedForCrimeB",
    pdfField: "form1[0].#subform[8].P3Line2b_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.arrestedForCrimeC",
    pdfField: "form1[0].#subform[8].P3Line2c_Checkboxes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.arrestedForCrimeC",
    pdfField: "form1[0].#subform[8].P3Line2c_Checkboxes[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.convictionCircumstances",
    pdfField: "form1[0].#subform[8].Pt3Line3_Checkboxes[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part3.convictionCircumstances",
    pdfField: "form1[0].#subform[8].Pt3Line3_Checkboxes[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part3.convictionCircumstances",
    pdfField: "form1[0].#subform[8].Pt3Line3_Checkboxes[2]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part3.waiverRequest",
    pdfField: "form1[0].#subform[8].Pt3Line5_Checkboxes[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part3.waiverRequest",
    pdfField: "form1[0].#subform[8].Pt3Line5_Checkboxes[1]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part3.waiverRequest",
    pdfField: "form1[0].#subform[8].Pt3Line5_Checkboxes[2]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part3.waiverRequest",
    pdfField: "form1[0].#subform[8].Pt3Line5_Checkboxes[3]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part4.ethnicity",
    pdfField: "form1[0].#subform[8].Pt4Line1_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part4.ethnicity",
    pdfField: "form1[0].#subform[8].Pt4Line1_Checkbox[1]",
    type: "radio",
    value: "H",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].#subform[8].Pt4Line2_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].#subform[8].Pt4Line2_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].#subform[8].Pt4Line2_Checkbox[2]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].#subform[8].Pt4Line2_Checkbox[3]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].#subform[8].Pt4Line2_Checkbox[4]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.heightFeet",
    pdfField: "form1[0].#subform[8].Pt4Line3_HeightFeet[0]",
    type: "Choice",
  },
  {
    questionId: "part4.heightInches",
    pdfField: "form1[0].#subform[8].Pt4Line3_HeightInches[0]",
    type: "radio",
    value: "",
  },
  {
    questionId: "part3.arrestedForLawViolation",
    pdfField: "form1[0].#subform[8].Part3Line4a_Checkboxes[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.arrestedForLawViolation",
    pdfField: "form1[0].#subform[8].Part3Line4a_Checkboxes[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.arrestDetails",
    pdfField: "form1[0].#subform[8].Pt3Line4B_Describe[0]",
    type: "Text",
  },
  {
    questionId: "part4.weightFirstDigit",
    pdfField: "form1[0].#subform[8].Pt4Line4_HeightInches1[0]",
    type: "Text",
  },
  {
    questionId: "part4.weightSecondDigit",
    pdfField: "form1[0].#subform[8].Pt4Line4_HeightInches2[0]",
    type: "Text",
  },
  {
    questionId: "part4.weightThirdDigit",
    pdfField: "form1[0].#subform[8].Pt4Line4_HeightInches3[0]",
    type: "Button",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[0]",
    type: "radio",
    value: "BLU",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[1]",
    type: "radio",
    value: "GRN",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[2]",
    type: "radio",
    value: "HAZ",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[3]",
    type: "radio",
    value: "PNK",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[4]",
    type: "radio",
    value: "MAR",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[5]",
    type: "radio",
    value: "GRY",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[6]",
    type: "radio",
    value: "BRO",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[7]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].#subform[8].Pt4Line5_Checkbox[8]",
    type: "radio",
    value: "UNK",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[0]",
    type: "radio",
    value: "BAL",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[1]",
    type: "radio",
    value: "BLN",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[2]",
    type: "radio",
    value: "GRY",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[3]",
    type: "radio",
    value: "SDY",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[4]",
    type: "radio",
    value: "UNK",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[5]",
    type: "radio",
    value: "WHI",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[6]",
    type: "radio",
    value: "RED",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[7]",
    type: "radio",
    value: "BRO",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].#subform[8].Pt4Line6_HairColor[8]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part5.petitionerEmail",
    pdfField: "form1[0].#subform[9].Pt5Line3_Email[0]",
    type: "Text",
  },
  {
    questionId: "part5.petitionerMobileNumber",
    pdfField: "form1[0].#subform[9].Pt5Line2_MobileNumber1[0]",
    type: "Text",
  },
  {
    questionId: "part5.petitionerDaytimePhoneNumber",
    pdfField: "form1[0].#subform[9].Pt5Line1_DaytimePhoneNumber1[0]",
    type: "Text",
  },
  {
    questionId: "part5.dateOfSignature",
    pdfField: "form1[0].#subform[9].Pt5Line4_DateOfSignature[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterGivenName",
    pdfField: "form1[0].#subform[9].Pt6Line1_InterpreterGivenName[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterFamilyName",
    pdfField: "form1[0].#subform[9].Pt6Line1_InterpreterFamilyName[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterBusinessName",
    pdfField: "form1[0].#subform[9].Pt6Line2_NameofBusinessorOrgName[0]",
    type: "Text",
  },
  {
    questionId: "part5.petitionerSignature",
    pdfField: "form1[0].#subform[9].Pt6Line4_Signature[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterDaytimeTelephone",
    pdfField: "form1[0].#subform[9].Pt6Line4_InterpreterDaytimeTelephone[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterEmail",
    pdfField: "form1[0].#subform[9].Pt6Line5_Email[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterLanguage",
    pdfField: "form1[0].#subform[9].Pt6_NameOfLanguage[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterMobileTelephone",
    pdfField: "form1[0].#subform[9].Pt6Line4_InterpreterDaytimeTelephone[1]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterDateOfSignature",
    pdfField: "form1[0].#subform[9].Pt6Line6_DateofSignature[0]",
    type: "Text",
  },
  {
    questionId: "part6.interpreterSignature",
    pdfField: "form1[0].#subform[9].Pt6Line6_Signature[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerFamilyName",
    pdfField: "form1[0].#subform[9].Pt7Line1_PreparerFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerGivenName",
    pdfField: "form1[0].#subform[9].Pt7Line1b_PreparerGivenName[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerBusinessName",
    pdfField: "form1[0].#subform[9].Pt7Line2_NameofBusinessorOrgName[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerDaytimePhoneNumber",
    pdfField: "form1[0].#subform[9].Pt7Line3_DaytimePhoneNumber1[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerMobileNumber",
    pdfField: "form1[0].#subform[9].Pt7Line4_PreparerMobileNumber[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerEmail",
    pdfField: "form1[0].#subform[9].Pt7Line5_Email[0]",
    type: "text",
  },
  {
    questionId: "part7.preparerSignature",
    pdfField: "form1[0].#subform[10].Pt7Line6_SignatureofPreparer[0]",
    type: "text",
  },
  {
    questionId: "part7.dateOfSignature",
    pdfField: "form1[0].#subform[10].Pt7Line6_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part8.additionalInfo3d",
    pdfField: "form1[0].#subform[11].Line3d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part8.familyName",
    pdfField: "form1[0].#subform[11].Pt1Line6a_FamilyName[1]",
    type: "text",
  },
  {
    questionId: "part8.givenName",
    pdfField: "form1[0].#subform[11].Pt1Line6b_GivenName[1]",
    type: "text",
  },
  {
    questionId: "part8.middleName",
    pdfField: "form1[0].#subform[11].Pt1Line6c_MiddleName[1]",
    type: "text",
  },
  {
    questionId: "part8.pageNumber3a",
    pdfField: "form1[0].#subform[11].Line3a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.partNumber3b",
    pdfField: "form1[0].#subform[11].Line3b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.itemNumber3c",
    pdfField: "form1[0].#subform[11].Line3c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.additionalInfo4d",
    pdfField: "form1[0].#subform[11].Line4d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part8.pageNumber4a",
    pdfField: "form1[0].#subform[11].Line4a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.partNumber4b",
    pdfField: "form1[0].#subform[11].Line4b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.itemNumber4c",
    pdfField: "form1[0].#subform[11].Line4c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.additionalInfo5d",
    pdfField: "form1[0].#subform[11].Line5d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part8.pageNumber5a",
    pdfField: "form1[0].#subform[11].Line5a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.partNumber5b",
    pdfField: "form1[0].#subform[11].Line5b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.itemNumber5c",
    pdfField: "form1[0].#subform[11].Line5c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.additionalInfo6d",
    pdfField: "form1[0].#subform[11].Line6d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part8.pageNumber6a",
    pdfField: "form1[0].#subform[11].Line6a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.partNumber6b",
    pdfField: "form1[0].#subform[11].Line6b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.itemNumber6c",
    pdfField: "form1[0].#subform[11].Line6c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.alienNumber",
    pdfField: "form1[0].#subform[11].Pt1Line1_AlienNumber[1]",
    type: "text",
  },
  {
    questionId: "part8.additionalInfo7d",
    pdfField: "form1[0].#subform[11].Line7d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part8.pageNumber7a",
    pdfField: "form1[0].#subform[11].Line7a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.partNumber7b",
    pdfField: "form1[0].#subform[11].Line7b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.itemNumber7c",
    pdfField: "form1[0].#subform[11].Line7c_ItemNumber[0]",
    type: "text",
  },
];
