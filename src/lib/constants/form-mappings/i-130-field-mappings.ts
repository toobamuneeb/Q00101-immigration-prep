/**
 * I-130 Complete Field Mappings
 * Generated on: 2025-12-18T20:30:56.301Z
 *
 * Comprehensive mappings for ALL I-130 form fields
 * Maps form definition question IDs to PDF field names
 * Total mappings: 112
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: "text" | "radio" | "checkbox" | "date" | "ssn";
  value?: string; // For radio/checkbox options - the value that triggers this field
}

export const I_130_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Spouse[0]",
    type: "checkbox",
    value: "spouse",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Parent[0]",
    type: "checkbox",
    value: "parent",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Child[0]",
    type: "checkbox",
    value: "child",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Siblings[0]",
    type: "checkbox",
    value: "sibling",
  },
  {
    questionId: "part1.petitionerStatus",
    pdfField: "form1[0].#subform[0].Pt1Line3_Yes[0]",
    type: "radio",
    value: "citizen",
  },
  {
    questionId: "part1.petitionerStatus",
    pdfField: "form1[0].#subform[0].Pt1Line3_No[0]",
    type: "radio",
    value: "lpr",
  },
  {
    questionId: "part1.gainedLPRThroughAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line4_Yes[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part1.gainedLPRThroughAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line4_No[0]",
    type: "radio",
    value: "no",
  },
  {
    questionId: "part2.alienNumber",
    pdfField: "form1[0].#subform[0].#area[4].Pt2Line1_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.uscisOnlineAccount",
    pdfField: "form1[0].#subform[0].#area[5].Pt2Line2_USCISOnlineActNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.ssn",
    pdfField: "form1[0].#subform[0].Pt2Line11_SSN[0]",
    type: "ssn",
  },
  {
    questionId: "part2.lastName",
    pdfField: "form1[0].#subform[0].Pt2Line4a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.firstName",
    pdfField: "form1[0].#subform[0].Pt2Line4b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].#subform[0].Pt2Line4c_MiddleName[0]",
    type: "text",
  },

  {
    questionId: "part2.otherGivenName",
    pdfField: "form1[0].#subform[1].Pt2Line5b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherMiddleName",
    pdfField: "form1[0].#subform[1].Pt2Line5c_MiddleName[0]",
    type: "text",
  },

  {
    questionId: "part2.otherfamilyName",
    pdfField: "form1[0].#subform[1].Pt2Line5a_FamilyName[0]",
    type: "text",
  },

  {
    questionId: "part2.cityOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line6_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.countryOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line7_CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line8_DateofBirth[0]",
    type: "date",
  },
  {
    questionId: "part2.sex",
    pdfField: "form1[0].#subform[1].Pt2Line9_Male[0]",
    type: "radio",
    value: "male",
  },
  {
    questionId: "part2.sex",
    pdfField: "form1[0].#subform[1].Pt2Line9_Female[0]",
    type: "radio",
    value: "female",
  },
  {
    questionId: "part2.mailingInCareOf",
    pdfField: "form1[0].#subform[1].Pt2Line10_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingStreet",
    pdfField: "form1[0].#subform[1].Pt2Line10_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAptType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[0]",
    type: "checkbox",
    value: "apt",
  },
  {
    questionId: "part2.mailingAptType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[1]",
    type: "checkbox",
    value: "ste",
  },
  {
    questionId: "part2.mailingAptType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[2]",
    type: "checkbox",
    value: "flr",
  },
  {
    questionId: "part2.mailingAptNumber",
    pdfField: "form1[0].#subform[1].Pt2Line10_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingCity",
    pdfField: "form1[0].#subform[1].Pt2Line10_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingState",
    pdfField: "form1[0].#subform[1].Pt2Line10_State[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingZip",
    pdfField: "form1[0].#subform[1].Pt2Line10_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.province",
    pdfField: "form1[0].#subform[1].Pt2Line10_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.postalCode",
    pdfField: "form1[0].#subform[1].Pt2Line10_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.country",
    pdfField: "form1[0].#subform[1].Pt2Line10_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalStreet",
    pdfField: "form1[0].#subform[1].Pt2Line12_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAptType",
    pdfField: "form1[0].#subform[1].Pt2Line12_Unit[0]",
    type: "checkbox",
    value: "apt",
  },
  {
    questionId: "part2.physicalAptNumber",
    pdfField: "form1[0].#subform[1].Pt2Line12_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalCity",
    pdfField: "form1[0].#subform[1].Pt2Line12_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalState",
    pdfField: "form1[0].#subform[1].Pt2Line12_State[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalZip",
    pdfField: "form1[0].#subform[1].Pt2Line12_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.timesMarried",
    pdfField: "form1[0].#subform[1].Pt2Line16_NumberofMarriages[0]",
    type: "text",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Single[0]",
    type: "checkbox",
    value: "single",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Married[0]",
    type: "checkbox",
    value: "married",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Divorced[0]",
    type: "checkbox",
    value: "divorced",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Widowed[0]",
    type: "checkbox",
    value: "widowed",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Annulled[0]",
    type: "checkbox",
    value: "separated",
  },
  {
    questionId: "part2.dateOfMarriage",
    pdfField: "form1[0].#subform[2].Pt2Line18_DateOfMarriage[0]",
    type: "date",
  },
  {
    questionId: "part2.placeOfMarriage",
    pdfField: "form1[0].#subform[2].Pt2Line19a_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.currentSpouseName",
    pdfField: "form1[0].#subform[2].PtLine20a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherLastName",
    pdfField: "form1[0].#subform[2].Pt2Line24_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherFirstName",
    pdfField: "form1[0].#subform[2].Pt2Line24_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherMiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line24_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherDateOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line25_DateofBirth[0]",
    type: "date",
  },
  {
    questionId: "part2.fatherCountryOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line27_CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherCityOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line28_CityTownOrVillageOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.fatherCountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line29_CountryOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.motherLastName",
    pdfField: "form1[0].#subform[2].Pt2Line30a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.motherFirstName",
    pdfField: "form1[0].#subform[2].Pt2Line30b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.motherMiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line30c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.motherDateOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line31_DateofBirth[0]",
    type: "date",
  },
  {
    questionId: "part2.motherCountryOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line33_CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.motherCityOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line34_CityTownOrVillageOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.motherCountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line35_CountryOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.citizenshipThrough",
    pdfField: "form1[0].#subform[2].Pt2Line36_USCitizen[0]",
    type: "radio",
    value: "birth-us",
  },
  {
    questionId: "part2.citizenshipThrough",
    pdfField: "form1[0].#subform[2].Pt2Line36_LPR[0]",
    type: "radio",
    value: "naturalization",
  },
  {
    questionId: "part2.certificateNumber",
    pdfField: "form1[0].#subform[2].Pt2Line37a_CertificateNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfNaturalization",
    pdfField: "form1[0].#subform[2].Pt2Line37b_PlaceOfIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfNaturalization",
    pdfField: "form1[0].#subform[2].Pt2Line37c_DateOfIssuance[0]",
    type: "date",
  },
  {
    questionId: "part2.employerName",
    pdfField: "form1[0].#subform[3].Pt2Line40_EmployerOrCompName[0]",
    type: "text",
  },
  {
    questionId: "part2.employerStreet",
    pdfField: "form1[0].#subform[3].Pt2Line41_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.employerCity",
    pdfField: "form1[0].#subform[3].Pt2Line41_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.employerState",
    pdfField: "form1[0].#subform[3].Pt2Line41_State[0]",
    type: "text",
  },
  {
    questionId: "part2.employerZip",
    pdfField: "form1[0].#subform[3].Pt2Line41_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.occupation",
    pdfField: "form1[0].#subform[3].Pt2Line42_Occupation[0]",
    type: "text",
  },
  {
    questionId: "part2.employmentDateFrom",
    pdfField: "form1[0].#subform[3].Pt2Line43a_DateFrom[0]",
    type: "date",
  },
  {
    questionId: "part2.employmentDateTo",
    pdfField: "form1[0].#subform[3].Pt2Line43b_DateTo[0]",
    type: "date",
  },
  {
    questionId: "part4.alienNumber",
    pdfField: "form1[0].#subform[4].#area[6].Pt4Line1_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.uscisOnlineAccount",
    pdfField: "form1[0].#subform[4].#area[7].Pt4Line2_USCISOnlineActNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.ssn",
    pdfField: "form1[0].#subform[4].Pt4Line3_SSN[0]",
    type: "ssn",
  },
  {
    questionId: "part4.lastName",
    pdfField: "form1[0].#subform[4].Pt4Line4a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.firstName",
    pdfField: "form1[0].#subform[4].Pt4Line4b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.middleName",
    pdfField: "form1[0].#subform[4].Pt4Line4c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.hasOtherNames",
    pdfField: "form1[0].#subform[4].Pt4Line10_Yes[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part4.hasOtherNames",
    pdfField: "form1[0].#subform[4].Pt4Line10_No[0]",
    type: "radio",
    value: "no",
  },
  {
    questionId: "part4.otherNames",
    pdfField: "form1[0].#subform[4].P4Line5a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.cityOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line7_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.countryOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line8_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.dateOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line9_DateOfBirth[0]",
    type: "date",
  },
  {
    questionId: "part4.sex",
    pdfField: "form1[0].#subform[4].Pt4Line9_Male[0]",
    type: "radio",
    value: "male",
  },
  {
    questionId: "part4.sex",
    pdfField: "form1[0].#subform[4].Pt4Line9_Female[0]",
    type: "radio",
    value: "female",
  },
  {
    questionId: "part4.street",
    pdfField: "form1[0].#subform[4].Pt4Line11_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part4.aptType",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[0]",
    type: "checkbox",
    value: "apt",
  },
  {
    questionId: "part4.aptType",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[1]",
    type: "checkbox",
    value: "ste",
  },
  {
    questionId: "part4.aptType",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[2]",
    type: "checkbox",
    value: "flr",
  },
  {
    questionId: "part4.aptNumber",
    pdfField: "form1[0].#subform[4].Pt4Line11_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.city",
    pdfField: "form1[0].#subform[4].Pt4Line11_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.state",
    pdfField: "form1[0].#subform[4].Pt4Line11_State[0]",
    type: "text",
  },
  {
    questionId: "part4.zip",
    pdfField: "form1[0].#subform[4].Pt4Line11_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part4.country",
    pdfField: "form1[0].#subform[4].Pt4Line11_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.daytimePhone",
    pdfField: "form1[0].#subform[4].Pt4Line14_DaytimePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.mobilePhone",
    pdfField: "form1[0].#subform[5].Pt4Line15_MobilePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.email",
    pdfField: "form1[0].#subform[5].Pt4Line16_EmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part4.timesMarried",
    pdfField: "form1[0].#subform[5].Pt4Line17_NumberofMarriages[0]",
    type: "text",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[0]",
    type: "checkbox",
    value: "single",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[1]",
    type: "checkbox",
    value: "married",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[2]",
    type: "checkbox",
    value: "divorced",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[3]",
    type: "checkbox",
    value: "widowed",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[4]",
    type: "checkbox",
    value: "separated",
  },
  {
    questionId: "part4.dateOfMarriage",
    pdfField: "form1[0].#subform[5].Pt4Line19_DateOfMarriage[0]",
    type: "date",
  },
  {
    questionId: "part4.placeOfMarriage",
    pdfField: "form1[0].#subform[5].Pt4Line20a_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part4.spouseName",
    pdfField: "form1[0].#subform[5].Pt4Line18a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.immigrationPath",
    pdfField: "form1[0].#subform[7].Part4Line1_Yes[0]",
    type: "radio",
    value: "adjustment",
  },
  {
    questionId: "part4.immigrationPath",
    pdfField: "form1[0].#subform[7].Part4Line1_No[0]",
    type: "radio",
    value: "consular",
  },
  {
    questionId: "part4.consularLocation",
    pdfField: "form1[0].#subform[7].Pt4Line60a_CityOrTown[0]",
    type: "text",
  },
];
