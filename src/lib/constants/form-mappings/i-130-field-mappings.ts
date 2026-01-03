/**
 * I-130 Field Mappings
 * Generated: 2025-12-30T21:07:38.899Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_130_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part2.ssn",
    pdfField: "form1[0].#subform[0].Pt2Line11_SSN[0]",
    type: "text",
  },
  {
    questionId: "attorney.g28Attached",
    pdfField: "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "attorney.volagNumber",
    pdfField: "form1[0].#subform[0].VolagNumber[0]",
    type: "text",
  },
  {
    questionId: "attorney.stateBarNumber",
    pdfField: "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    type: "text",
  },
  {
    questionId: "attorney.uscisOnlineAccountNumber",
    pdfField: "form1[0].#subform[0].USCISOnlineAcctNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Spouse[0]",
    type: "radio",
    value: "spouse",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Siblings[0]",
    type: "radio",
    value: "siblings",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Parent[0]",
    type: "radio",
    value: "parent",
  },
  {
    questionId: "part1.relationship",
    pdfField: "form1[0].#subform[0].Pt1Line1_Child[0]",
    type: "radio",
    value: "child",
  },
  {
    questionId: "part1.childRelationship",
    pdfField: "form1[0].#subform[0].Pt1Line2_InWedlock[0]",
    type: "radio",
    value: "inWedlock",
  },
  {
    questionId: "part1.childRelationship",
    pdfField: "form1[0].#subform[0].Pt1Line2_AdoptedChild[0]",
    type: "radio",
    value: "adoptedChild",
  },
  {
    questionId: "part1.childRelationship",
    pdfField: "form1[0].#subform[0].Pt1Line2_Stepchild[0]",
    type: "radio",
    value: "stepchild",
  },
  {
    questionId: "part1.childRelationship",
    pdfField: "form1[0].#subform[0].Pt1Line2_OutOfWedlock[0]",
    type: "radio",
    value: "outOfWedlock",
  },
  {
    questionId: "part1.relatedByAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line3_Yes[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part1.gainedStatusThroughAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line4_No[0]",
    type: "radio",
    value: "no",
  },
  {
    questionId: "part1.gainedStatusThroughAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line4_Yes[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part1.relatedByAdoption",
    pdfField: "form1[0].#subform[0].Pt1Line3_No[0]",
    type: "radio",
    value: "no",
  },
  {
    questionId: "part2.familyName",
    pdfField: "form1[0].#subform[0].Pt2Line4a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.givenName",
    pdfField: "form1[0].#subform[0].Pt2Line4b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.middleName",
    pdfField: "form1[0].#subform[0].Pt2Line4c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.familyNameOther",
    pdfField: "form1[0].#subform[1].Pt2Line5a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.givenNameOther",
    pdfField: "form1[0].#subform[1].Pt2Line5b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.middleNameOther",
    pdfField: "form1[0].#subform[1].Pt2Line5c_MiddleName[0]",
    type: "text",
  },
  //
  {
    questionId: "part2.alienNumber",
    pdfField: "form1[0].#subform[0].#area[4].Pt2Line1_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.uscisOnlineAccountNumber",
    pdfField: "form1[0].#subform[0].#area[5].Pt2Line2_USCISOnlineActNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line8_DateofBirth[0]",
    type: "text",
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
    questionId: "part2.countryOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line7_CountryofBirth[0]",
    type: "button",
  },
  {
    questionId: "part2.mailingAddressSameAsPhysical",
    pdfField: "form1[0].#subform[1].Pt2Line11_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.mailingAddressSameAsPhysical",
    pdfField: "form1[0].#subform[1].Pt2Line11_No[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.streetNumberName",
    pdfField: "form1[0].#subform[1].Pt2Line10_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.unitType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.unitType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.unitType",
    pdfField: "form1[0].#subform[1].Pt2Line10_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt2Line10_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt2Line10_CityOrTown[0]",
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
    questionId: "part2.zipCode",
    pdfField: "form1[0].#subform[1].Pt2Line10_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part2.state",
    pdfField: "form1[0].#subform[1].Pt2Line10_State[0]",
    type: "select",
  },
  {
    questionId: "part2.country",
    pdfField: "form1[0].#subform[1].Pt2Line10_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.inCareOfName",
    pdfField: "form1[0].#subform[1].Pt2Line10_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2StreetNumberName",
    pdfField: "form1[0].#subform[1].Pt2Line14_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part2.physicalAddress2UnitType",
    pdfField: "form1[0].#subform[1].Pt2Line14_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.physicalAddress2UnitType",
    pdfField: "form1[0].#subform[1].Pt2Line14_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.physicalAddress2UnitType",
    pdfField: "form1[0].#subform[1].Pt2Line14_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.physicalAddress2AptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt2Line14_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2CityOrTown",
    pdfField: "form1[0].#subform[1].Pt2Line14_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part2.physicalAddress2State",
    pdfField: "form1[0].#subform[1].Pt2Line14_State[0]",
    type: "select",
  },
  {
    questionId: "part2.physicalAddress2ZipCode",
    pdfField: "form1[0].#subform[1].Pt2Line14_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2Province",
    pdfField: "form1[0].#subform[1].Pt2Line14_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2Country",
    pdfField: "form1[0].#subform[1].Pt2Line14_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2PostalCode",
    pdfField: "form1[0].#subform[1].Pt2Line14_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1DateFrom",
    pdfField: "form1[0].#subform[1].Pt2Line13a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2DateFrom",
    pdfField: "form1[0].#subform[1].Pt2Line15a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress2DateTo",
    pdfField: "form1[0].#subform[1].Pt2Line15b_DateTo[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1StreetNumberName",
    pdfField: "form1[0].#subform[1].Pt2Line12_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1Unit",
    pdfField: "form1[0].#subform[1].Pt2Line12_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.physicalAddress1Unit",
    pdfField: "form1[0].#subform[1].Pt2Line12_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.physicalAddress1Unit",
    pdfField: "form1[0].#subform[1].Pt2Line12_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.physicalAddress1AptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt2Line12_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1CityOrTown",
    pdfField: "form1[0].#subform[1].Pt2Line12_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part2.physicalAddress1State",
    pdfField: "form1[0].#subform[1].Pt2Line12_State[0]",
    type: "select",
  },
  {
    questionId: "part2.physicalAddress1ZipCode",
    pdfField: "form1[0].#subform[1].Pt2Line12_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1Province",
    pdfField: "form1[0].#subform[1].Pt2Line12_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1Country",
    pdfField: "form1[0].#subform[1].Pt2Line12_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.physicalAddress1PostalCode",
    pdfField: "form1[0].#subform[1].Pt2Line12_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.cityTownOfBirth",
    pdfField: "form1[0].#subform[1].Pt2Line6_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesFamilyName",
    pdfField: "form1[0].#subform[1].Pt2Line5a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesGivenName",
    pdfField: "form1[0].#subform[1].Pt2Line5b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesMiddleName",
    pdfField: "form1[0].#subform[1].Pt2Line5c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.numberOfMarriages",
    pdfField: "form1[0].#subform[1].Pt2Line16_NumberofMarriages[0]",
    type: "button",
  },
  {
    questionId: "part2.maritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Widowed[0]",
    type: "radio",
    value: "0",
  },
  {
    questionId: "part2.maritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Annulled[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part2.maritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Separated[0]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part2.maritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Single[0]",
    type: "radio",
    value: "3",
  },
  {
    questionId: "part2.maritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Married[0]",
    type: "radio",
    value: "4",
  },
  {
    questionId: "part2.currentMaritalStatus",
    pdfField: "form1[0].#subform[1].Pt2Line17_Divorced[0]",
    type: "checkbox",
    value: "5",
  },
  {
    questionId: "part2.addressHistoryPhysicalAddress1DateTo",
    pdfField: "form1[0].#subform[1].Pt2Line13b_DateTo[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse1FamilyName",
    pdfField: "form1[0].#subform[2].PtLine20a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse1GivenName",
    pdfField: "form1[0].#subform[2].Pt2Line20b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse1MiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line20c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse2DateMarriageEnded",
    pdfField: "form1[0].#subform[2].Pt2Line23_DateMarriageEnded[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse2MiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line22c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse2GivenName",
    pdfField: "form1[0].#subform[2].Pt2Line22b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse2FamilyName",
    pdfField: "form1[0].#subform[2].Pt2Line22a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.spouse1DateMarriageEnded",
    pdfField: "form1[0].#subform[2].Pt2Line21_DateMarriageEnded[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfCurrentMarriage",
    pdfField: "form1[0].#subform[2].Pt2Line18_DateOfMarriage[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1FamilyName",
    pdfField: "form1[0].#subform[2].Pt2Line24_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1GivenName",
    pdfField: "form1[0].#subform[2].Pt2Line24_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1MiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line24_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1DateOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line25_DateofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1CityTownOrVillageOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line28_CityTownOrVillageOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1CountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line29_CountryOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.parent1CountryOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line27_CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2GivenName",
    pdfField: "form1[0].#subform[2].Pt2Line30b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2MiddleName",
    pdfField: "form1[0].#subform[2].Pt2Line30c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2FamilyName",
    pdfField: "form1[0].#subform[2].Pt2Line30a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2DateOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line31_DateofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2CityTownOrVillageOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line34_CityTownOrVillageOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2CountryOfResidence",
    pdfField: "form1[0].#subform[2].Pt2Line35_CountryOfResidence[0]",
    type: "text",
  },
  {
    questionId: "part2.parent2CountryOfBirth",
    pdfField: "form1[0].#subform[2].Pt2Line33_CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part2.usCitizen",
    pdfField: "form1[0].#subform[2].Pt2Line36_USCitizen[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.lpr",
    pdfField: "form1[0].#subform[2].Pt2Line36_LPR[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.citizenship",
    pdfField: "form1[0].#subform[2].Pt2Line23a_checkbox[0]",
    type: "radio",
    value: "0",
  },
  {
    questionId: "part2.citizenship",
    pdfField: "form1[0].#subform[2].Pt2Line23b_checkbox[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part2.citizenship",
    pdfField: "form1[0].#subform[2].Pt2Line23c_checkbox[0]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part2.certificateNumber",
    pdfField: "form1[0].#subform[2].Pt2Line37a_CertificateNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.certificateObtained",
    pdfField: "form1[0].#subform[2].Pt2Line36_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.certificateNotObtained",
    pdfField: "form1[0].#subform[2].Pt2Line36_No[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.dateOfIssuance",
    pdfField: "form1[0].#subform[2].Pt2Line37c_DateOfIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfIssuance",
    pdfField: "form1[0].#subform[2].Pt2Line37b_PlaceOfIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.parentOneSex",
    pdfField: "form1[0].#subform[2].Pt2Line26_Male[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.parentOneSex",
    pdfField: "form1[0].#subform[2].Pt2Line26_Female[0]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part2.parentTwoSex",
    pdfField: "form1[0].#subform[2].Pt2Line32_Male[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part2.parentTwoSex",
    pdfField: "form1[0].#subform[2].Pt2Line32_Female[0]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part2.employer1Unit",
    pdfField: "form1[0].#subform[3].Pt2Line41_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.employer1Unit",
    pdfField: "form1[0].#subform[3].Pt2Line41_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.employer1Unit",
    pdfField: "form1[0].#subform[3].Pt2Line41_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.employer1Floor",
    pdfField: "form1[0].#subform[3].Pt2Line41_Unit[2]",
    type: "text",
  },
  {
    questionId: "part2.employer1AptSteFlrNumber",
    pdfField: "form1[0].#subform[3].Pt2Line41_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.employerOrCompName",
    pdfField: "form1[0].#subform[3].Pt2Line40_EmployerOrCompName[0]",
  },

  {
    questionId: "part2.streetnumbername",
    pdfField: "form1[0].#subform[3].Pt2Line41_StreetNumberName[0]",
  },

  {
    questionId: "part2.streetnumbername",
    pdfField: "form1[0].#subform[3].Pt2Line45_StreetNumberName[0]",
  },
  {
    questionId: "part2.employer1CityOrTown",
    pdfField: "form1[0].#subform[3].Pt2Line41_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.employer1Province",
    pdfField: "form1[0].#subform[3].Pt2Line41_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.employer1PostalCode",
    pdfField: "form1[0].#subform[3].Pt2Line41_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.employer1ZipCode",
    pdfField: "form1[0].#subform[3].Pt2Line41_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part2.employer1State",
    pdfField: "form1[0].#subform[3].Pt2Line41_State[0]",
    type: "text",
  },
  {
    questionId: "part2.employer1Country",
    pdfField: "form1[0].#subform[3].Pt2Line41_Country[0]",
    type: "text",
  },

  {
    questionId: "part2.yourOccupation",
    pdfField: "form1[0].#subform[3].Pt2Line42_Occupation[0]",
  },
  //

  {
    questionId: "part2.yourDateFrom1",
    pdfField: "form1[0].#subform[3].Pt2Line43a_DateFrom[0]",
  },
  {
    questionId: "part2.yourDateTo1",
    pdfField: "form1[0].#subform[3].Pt2Line43b_DateTo[0]",
  },
  //
  {
    questionId: "part2.yourDateFrom",
    pdfField: "form1[0].#subform[3].Pt2Line47a_DateFrom[0]",
  },
  {
    questionId: "part2.yourDateTo",
    pdfField: "form1[0].#subform[3].Pt2Line47b_DateTo[0]",
  },

  {
    questionId: "part2.employer2Name",
    pdfField: "form1[0].#subform[3].Pt2Line42_EmployerOrCompName[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2StreetNumberName",
    pdfField: "form1[0].#subform[3].Pt2Line45_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part2.employer2Unit",
    pdfField: "form1[0].#subform[3].Pt2Line45_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.employer2Unit",
    pdfField: "form1[0].#subform[3].Pt2Line45_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.employer2Unit",
    pdfField: "form1[0].#subform[3].Pt2Line45_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.employer2Floor",
    pdfField: "form1[0].#subform[3].Pt2Line45_Unit[2]",
    type: "text",
  },
  {
    questionId: "part2.employer2AptSteFlrNumber",
    pdfField: "form1[0].#subform[3].Pt2Line45_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2CityOrTown",
    pdfField: "form1[0].#subform[3].Pt2Line45_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2Province",
    pdfField: "form1[0].#subform[3].Pt2Line45_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2PostalCode",
    pdfField: "form1[0].#subform[3].Pt2Line45_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2ZipCode",
    pdfField: "form1[0].#subform[3].Pt2Line45_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part2.employer2State",
    pdfField: "form1[0].#subform[3].Pt2Line45_State[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2Country",
    pdfField: "form1[0].#subform[3].Pt2Line45_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2Occupation",
    pdfField: "form1[0].#subform[3].Pt2Line46_Occupation[0]",
    type: "text",
  },
  {
    questionId: "part3.ethnicity",
    pdfField: "form1[0].#subform[3].Pt3Line1_Ethnicity[0]",
    type: "radio",
    value: "0",
  },
  {
    questionId: "part3.ethnicity",
    pdfField: "form1[0].#subform[3].Pt3Line1_Ethnicity[1]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].#subform[3].Pt3Line2_Race_Black[0]",
    type: "checkbox",
    value: "B",
  },
  {
    questionId: "part3.race",
    pdfField:
      "form1[0].#subform[3].Pt3Line2_Race_AmericanIndianAlaskaNative[0]",
    type: "checkbox",
    value: "AA",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].#subform[3].Pt3Line2_Race_White[0]",
    type: "checkbox",
    value: "W",
  },
  {
    questionId: "part3.race",
    pdfField: "form1[0].#subform[3].Pt3Line2_Race_Asian[0]",
    type: "checkbox",
    value: "A",
  },
  {
    questionId: "part3.race",
    pdfField:
      "form1[0].#subform[3].Pt3Line2_Race_NativeHawaiianOtherPacificIslander[0]",
    type: "checkbox",
    value: "N",
  },
  {
    questionId: "part3.heightFeet",
    pdfField: "form1[0].#subform[3].Pt3Line3_HeightFeet[0]",
    type: "dropdown",
  },
  {
    questionId: "part3.heightInches",
    pdfField: "form1[0].#subform[3].Pt3Line3_HeightInches[0]",
    type: "text",
  },
  {
    questionId: "part3.weightFirstDigit",
    pdfField: "form1[0].#subform[3].Pt3Line4_Pound1[0]",
    type: "text",
  },
  {
    questionId: "part3.weightSecondDigit",
    pdfField: "form1[0].#subform[3].Pt3Line4_Pound2[0]",
    type: "text",
  },
  {
    questionId: "part3.weightThirdDigit",
    pdfField: "form1[0].#subform[3].Pt3Line4_Pound3[0]",
    type: "text",
  },
  {
    questionId: "part2.employer2Name",
    pdfField: "form1[0].#subform[3].Pt2Line44_EmployerOrOrgName[0]",
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
    type: "text",
  },
  {
    questionId: "part2.employmentDateTo",
    pdfField: "form1[0].#subform[3].Pt2Line43b_DateTo[0]",
    type: "checkbox",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[0]",
    type: "radio",
    value: "BLU",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[1]",
    type: "radio",
    value: "BRN",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[2]",
    type: "radio",
    value: "HZL",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[3]",
    type: "radio",
    value: "PNK",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[4]",
    type: "radio",
    value: "MRN",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[5]",
    type: "radio",
    value: "GRN",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[6]",
    type: "radio",
    value: "GRAY",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[7]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part3.eyeColor",
    pdfField: "form1[0].#subform[3].Pt3Line5_EyeColor[8]",
    type: "radio",
    value: "OTH",
  },
  //

  {
    questionId: "part1.classofadmission",
    pdfField: "form1[0].#subform[3].Pt2Line40a_ClassOfAdmission[0]",
  },
  {
    questionId: "part1.dateofadmission",
    pdfField: "form1[0].#subform[3].Pt2Line40b_DateOfAdmission[0]",
  },
  {
    questionId: "part1.cityortown",
    pdfField: "form1[0].#subform[3].Pt2Line40d_CityOrTown[0]",
  },

  //
  {
    questionId: "part2.ClassOfAdmission",
    pdfField: "form1[0].#subform[3].Pt2Line40a_State[0]",
    type: "radio",
  },
  {
    questionId: "part2.stateOfAdmission",
    pdfField: "form1[0].#subform[3].Pt2Line40e_State[0]",
    type: "radio",
  },
  {
    questionId: "part2.stateOfAdmission",
    pdfField: "form1[0].#subform[3].Pt2Line40e_State[0]",
    type: "radio",
  },
  {
    questionId: "part2.stateOfAdmission",
    pdfField: "form1[0].#subform[3].Pt2Line40e_State[0]",
    type: "radio",
  },
  {
    questionId: "part4.alienNumber",
    pdfField: "form1[0].#subform[4].#area[6].Pt4Line1_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.uscisOnlineAccountNumber",
    pdfField: "form1[0].#subform[4].#area[7].Pt4Line2_USCISOnlineActNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryFamilyName",
    pdfField: "form1[0].#subform[4].Pt4Line4a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryGivenName",
    pdfField: "form1[0].#subform[4].Pt4Line4b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryMiddleName",
    pdfField: "form1[0].#subform[4].Pt4Line4c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.otherNamesFamilyName",
    pdfField: "form1[0].#subform[4].P4Line5a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.otherNamesGivenName",
    pdfField: "form1[0].#subform[4].Pt4Line5b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.otherNamesMiddleName",
    pdfField: "form1[0].#subform[4].Pt4Line5c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.cityTownOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line7_CityTownOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.countryOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line8_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryProvince",
    pdfField: "form1[0].#subform[4].Pt4Line11_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryPostalCode",
    pdfField: "form1[0].#subform[4].Pt4Line11_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryCountry",
    pdfField: "form1[0].#subform[4].Pt4Line11_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.streetNumberName",
    pdfField: "form1[0].#subform[4].Pt4Line12a_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part4.unitType",
    pdfField: "form1[0].#subform[4].Pt4Line12b_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.unitType",
    pdfField: "form1[0].#subform[4].Pt4Line12b_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.unitType",
    pdfField: "form1[0].#subform[4].Pt4Line12b_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.aptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt4Line12b_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.cityOrTown",
    pdfField: "form1[0].#subform[4].Pt4Line12c_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.zipCode",
    pdfField: "form1[0].#subform[4].Pt4Line12e_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part4.state",
    pdfField: "form1[0].#subform[4].Pt4Line12d_State[0]",
    type: "select",
  },
  {
    questionId: "part4.otherPostalCode",
    pdfField: "form1[0].#subform[4].Pt4Line13_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.otherAptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt4Line13_AptSteFlrNumber[0]",
    type: "button",
  },
  {
    questionId: "part4.otherUnitType",
    pdfField: "form1[0].#subform[4].Pt4Line13_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.otherUnitType",
    pdfField: "form1[0].#subform[4].Pt4Line13_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.otherAddress",
    pdfField: "form1[0].#subform[4].Pt4Line13_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.otherAddressStreetNumberName",
    pdfField: "form1[0].#subform[4].Pt4Line13_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part4.otherAddressCityOrTown",
    pdfField: "form1[0].#subform[4].Pt4Line13_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.otherAddressCountry",
    pdfField: "form1[0].#subform[4].Pt4Line13_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.otherAddressProvince",
    pdfField: "form1[0].#subform[4].Pt4Line13_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.physicalAddressStreetNumberName",
    pdfField: "form1[0].#subform[4].Pt4Line11_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part4.physicalAddress",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.physicalAddress",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.physicalAddress",
    pdfField: "form1[0].#subform[4].Pt4Line11_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.physicalAddressAptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt4Line11_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.physicalAddressCityOrTown",
    pdfField: "form1[0].#subform[4].Pt4Line11_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.physicalAddressZipCode",
    pdfField: "form1[0].#subform[4].Pt4Line11_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part4.physicalAddressState",
    pdfField: "form1[0].#subform[4].Pt4Line11_State[0]",
    type: "text",
  },
  {
    questionId: "part4.dateOfBirth",
    pdfField: "form1[0].#subform[4].Pt4Line9_DateOfBirth[0]",
    type: "button",
  },
  {
    questionId: "part4.sex",
    pdfField: "form1[0].#subform[4].Pt4Line9_Male[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part4.sex",
    pdfField: "form1[0].#subform[4].Pt4Line9_Female[0]",
    type: "radio",
    value: "F",
  },
  //
  {
    questionId: "part3.hairColorBald",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[0]",
    type: "radio",
    value: "BLD",
  },
  {
    questionId: "part3.hairColorBlack",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[1]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part3.hairColorBlond",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[2]",
    type: "radio",
    value: "BD",
  },
  {
    questionId: "part3.hairColorBrown",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[3]",
    type: "radio",
    value: "BRN",
  },
  //
  {
    questionId: "part3.hairColorGray",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[4]",
    type: "radio",
    value: "GRY",
  },
  {
    questionId: "part3.hairColorRed",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[5]",
    type: "radio",
    value: "RED",
  },
  {
    questionId: "part3.hairColorSandy",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[6]",
    type: "radio",
    value: "SD",
  },
  {
    questionId: "part3.hairColorWhite",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[7]",
    type: "radio",
    value: "WHI",
  },
  {
    questionId: "part3.hairColorOther",
    pdfField: "form1[0].#subform[4].Pt3Line6_HairColor[8]",
    type: "radio",
    value: "OTH",
  },
  //
  {
    questionId: "part4.otherPetitionFiled",
    pdfField: "form1[0].#subform[4].Pt4Line10_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.otherPetitionFiled",
    pdfField: "form1[0].#subform[4].Pt4Line10_No[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part4.otherPetitionFiled",
    pdfField: "form1[0].#subform[4].Pt4Line10_Unknown[0]",
    type: "radio",
    value: "U",
  },
  {
    questionId: "part4.daytimePhoneNumber",
    pdfField: "form1[0].#subform[4].Pt4Line14_DaytimePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.ssn",
    pdfField: "form1[0].#subform[4].Pt4Line3_SSN[0]",
    type: "text",
  },
  {
    questionId: "part4.provinceOfMarriage",
    pdfField: "form1[0].#subform[5].Pt4Line20c_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.numberOfMarriages",
    pdfField: "form1[0].#subform[5].Pt4Line17_NumberofMarriages[0]",
    type: "text",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[0]",
    type: "radio",
    value: "W",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[2]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[3]",
    type: "radio",
    value: "SNM",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[4]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part4.currentMaritalStatus",
    pdfField: "form1[0].#subform[5].Pt4Line18_MaritalStatus[5]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part4.mobilePhoneNumber",
    pdfField: "form1[0].#subform[5].Pt4Line15_MobilePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.emailAddress",
    pdfField: "form1[0].#subform[5].Pt4Line16_EmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part4.dateOfCurrentMarriage",
    pdfField: "form1[0].#subform[5].Pt4Line19_DateOfMarriage[0]",
    type: "text",
  },
  {
    questionId: "part1.line19a.citytown",
    pdfField: "form1[0].#subform[2].Pt2Line19a_CityTown[0]",
  },
  {
    questionId: "part1.line19b.state",
    pdfField: "form1[0].#subform[2].Pt2Line19b_State[0]",
    type: "select",
  },
  {
    questionId: "part1.line19c.province",
    pdfField: "form1[0].#subform[2].Pt2Line19c_Province[0]",
  },
  {
    questionId: "part1.line19d.country",
    pdfField: "form1[0].#subform[2].Pt2Line19d_Country[0]",
  },
  {
    questionId: "part4.spouse2FamilyName",
    pdfField: "form1[0].#subform[5].Pt4Line18a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse2GivenName",
    pdfField: "form1[0].#subform[5].Pt4Line18b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse2MiddleName",
    pdfField: "form1[0].#subform[5].Pt4Line18c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse1FamilyName",
    pdfField: "form1[0].#subform[5].Pt4Line16a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse1GivenName",
    pdfField: "form1[0].#subform[5].Pt4Line16b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse1MiddleName",
    pdfField: "form1[0].#subform[5].Pt4Line16c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse1DateMarriageEnded",
    pdfField: "form1[0].#subform[5].Pt4Line17_DateMarriageEnded[0]",
    type: "text",
  },
  {
    questionId: "part4.spouse2DateMarriageEnded",
    pdfField: "form1[0].#subform[5].Pt4Line17_DateMarriageEnded[1]",
    type: "text",
  },
  {
    questionId: "part4.relationshipPerson1",
    pdfField: "form1[0].#subform[5].Pt4Line31_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part4.person1.familyName",
    pdfField: "form1[0].#subform[5].Pt4Line30a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.person1.givenName",
    pdfField: "form1[0].#subform[5].Pt4Line30b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.person1.middleName",
    pdfField: "form1[0].#subform[5].Pt4Line30c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.person1.dateOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line32_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person1.countryOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line49_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.relationship",
    pdfField: "form1[0].#subform[5].Pt4Line35_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.dateOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line36_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.countryOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line37_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.familyName",
    pdfField: "form1[0].#subform[5].Pt4Line34a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.givenName",
    pdfField: "form1[0].#subform[5].Pt4Line34b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.person2.middleName",
    pdfField: "form1[0].#subform[5].Pt4Line34c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.givenName",
    pdfField: "form1[0].#subform[5].Pt4Line38b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.middleName",
    pdfField: "form1[0].#subform[5].Pt4Line38c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.familyName",
    pdfField: "form1[0].#subform[5].Pt4Line38a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.countryOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line41_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.dateOfBirth",
    pdfField: "form1[0].#subform[5].Pt4Line40_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person3.relationship",
    pdfField: "form1[0].#subform[5].Pt4Line39_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part4.currentMarriage.cityTown",
    pdfField: "form1[0].#subform[5].Pt4Line20a_CityTown[0]",
    type: "choice",
  },
  {
    questionId: "part4.currentMarriage.state",
    pdfField: "form1[0].#subform[5].Pt4Line20b_State[0]",
    type: "select",
  },
  {
    questionId: "part4.currentMarriage.country",
    pdfField: "form1[0].#subform[5].Pt4Line20d_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.person4.middleName",
    pdfField: "form1[0].#subform[6].Pt4Line42c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.person4.givenName",
    pdfField: "form1[0].#subform[6].Pt4Line42b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.person4.familyName",
    pdfField: "form1[0].#subform[6].Pt4Line42a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.person4.countryOfBirth",
    pdfField: "form1[0].#subform[6].Pt4Line45_CountryOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person4.dateOfBirth",
    pdfField: "form1[0].#subform[6].Pt4Line44_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.person4Relationship",
    pdfField: "form1[0].#subform[6].Pt4Line43_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part4.person5FamilyName",
    pdfField: "form1[0].#subform[6].Pt4Line46a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.person5GivenName",
    pdfField: "form1[0].#subform[6].Pt4Line46b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.person5MiddleName",
    pdfField: "form1[0].#subform[6].Pt4Line46c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.person5Relationship",
    pdfField: "form1[0].#subform[6].Pt4Line47_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part4.person5CountryOfBirth",
    pdfField: "form1[0].#subform[6].Pt4Line49_CountryOfBirth[1]",
    type: "text",
  },
  {
    questionId: "part4.person5DateOfBirth",
    pdfField: "form1[0].#subform[6].Pt4Line48_DateOfBirth[0]",
    type: "button",
  },
  {
    questionId: "part4.beneficiaryEverInUS",
    pdfField: "form1[0].#subform[6].Pt4Line20_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part4.beneficiaryEverInUS",
    pdfField: "form1[0].#subform[6].Pt4Line20_No[0]",
    type: "radio",
    value: "Off",
  },
  {
    questionId: "part4.dateAuthorizedStayExpired",
    pdfField: "form1[0].#subform[6].Pt4Line21d_DateExpired[0]",
    type: "choice",
  },
  {
    questionId: "part4.classOfAdmission",
    pdfField: "form1[0].#subform[6].Pt4Line21a_ClassOfAdmission[0]",
    type: "text",
  },
  {
    questionId: "part4.arrivalDepartureRecordNumber",
    pdfField: "form1[0].#subform[6].#area[8].Pt4Line21b_ArrivalDeparture[0]",
    type: "text",
  },
  {
    questionId: "part4.dateOfArrival",
    pdfField: "form1[0].#subform[6].Pt4Line21c_DateOfArrival[0]",
    type: "text",
  },
  {
    questionId: "part4.passportNumber",
    pdfField: "form1[0].#subform[6].Pt4Line22_PassportNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.travelDocumentNumber",
    pdfField: "form1[0].#subform[6].Pt4Line23_TravelDocNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.countryOfIssuance",
    pdfField: "form1[0].#subform[6].Pt4Line24_CountryOfIssuance[0]",
    type: "text",
  },
  {
    questionId: "part4.passportExpirationDate",
    pdfField: "form1[0].#subform[6].Pt4Line25_ExpDate[0]",
    type: "text",
  },
  {
    questionId: "part4.currentEmployerName",
    pdfField: "form1[0].#subform[6].Pt4Line26_NameOfCompany[0]",
    type: "text",
  },
  {
    questionId: "part4.employerStreetNumberName",
    pdfField: "form1[0].#subform[6].Pt4Line26_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part4.employerUnitType",
    pdfField: "form1[0].#subform[6].Pt4Line26_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.employerUnitType",
    pdfField: "form1[0].#subform[6].Pt4Line26_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.employerUnitType",
    pdfField: "form1[0].#subform[6].Pt4Line26_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.employerAptSteFlrNumber",
    pdfField: "form1[0].#subform[6].Pt4Line26_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.employerCityOrTown",
    pdfField: "form1[0].#subform[6].Pt4Line26_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part4.employerState",
    pdfField: "form1[0].#subform[6].Pt4Line26_State[0]",
    type: "select",
  },
  {
    questionId: "part4.beneficiaryEmploymentZipCode",
    pdfField: "form1[0].#subform[6].Pt4Line26_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryEmploymentProvince",
    pdfField: "form1[0].#subform[6].Pt4Line26_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryEmploymentDateBegan",
    pdfField: "form1[0].#subform[6].Pt4Line27_DateEmploymentBegan[0]",
    type: "button",
  },
  {
    questionId: "part4.beneficiaryImmigrationProceedings",
    pdfField: "form1[0].#subform[6].Pt4Line28_No[0]",
    type: "radio",
    value: "no",
  },
  {
    questionId: "part4.beneficiaryImmigrationProceedings",
    pdfField: "form1[0].#subform[6].Pt4Line28_Yes[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part4.proceedingType",
    pdfField: "form1[0].#subform[6].Pt4Line54_Removal[0]",
    type: "radio",
    value: "0",
  },
  {
    questionId: "part4.proceedingType",
    pdfField: "form1[0].#subform[6].Pt4Line54_Exclusion[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part4.proceedingType",
    pdfField: "form1[0].#subform[6].Pt4Line54_Rescission[0]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part4.proceedingType",
    pdfField: "form1[0].#subform[6].Pt4Line54_JudicialProceedings[0]",
    type: "radio",
    value: "3",
  },
  {
    questionId: "part4.proceedingCityOrTown",
    pdfField: "form1[0].#subform[6].Pt4Line55a_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryEmploymentPostalCode",
    pdfField: "form1[0].#subform[6].Pt4Line26_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryEmploymentCountry",
    pdfField: "form1[0].#subform[6].Pt4Line26_Country[0]",
    type: "choice",
  },
  {
    questionId: "part4.proceedingState",
    pdfField: "form1[0].#subform[6].Pt4Line55b_State[0]",
    type: "text",
  },
  {
    questionId: "part4.proceedingDate",
    pdfField: "form1[0].#subform[6].Pt4Line56_Date[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryMiddleName",
    pdfField: "form1[0].#subform[7].Pt4Line55c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryFamilyName",
    pdfField: "form1[0].#subform[7].Pt4Line55a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryGivenName",
    pdfField: "form1[0].#subform[7].Pt4Line55b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line56_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line56_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line56_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.beneficiaryAptSteFlrNumber",
    pdfField: "form1[0].#subform[7].Pt4Line56_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryCityOrTown",
    pdfField: "form1[0].#subform[7].Pt4Line56_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryProvince",
    pdfField: "form1[0].#subform[7].Pt4Line56_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryCountry",
    pdfField: "form1[0].#subform[7].Pt4Line56_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryPostalCode",
    pdfField: "form1[0].#subform[7].Pt4Line56_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryStreetNumberName",
    pdfField: "form1[0].#subform[7].Pt4Line56_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line57_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line57_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.beneficiaryAptSteFlrNumber",
    pdfField: "form1[0].#subform[7].Pt4Line57_AptSteFlrNumber[0]",
    type: "button",
  },
  {
    questionId: "part4.beneficiaryUnit",
    pdfField: "form1[0].#subform[7].Pt4Line57_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.beneficiaryStreetNumberNameIfSpouse",
    pdfField: "form1[0].#subform[7].Pt4Line57_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryCityOrTown",
    pdfField: "form1[0].#subform[7].Pt4Line57_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryZipCode",
    pdfField: "form1[0].#subform[7].Pt4Line57_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part4.beneficiaryState",
    pdfField: "form1[0].#subform[7].Pt4Line57_State[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryDateFrom",
    pdfField: "form1[0].#subform[7].Pt4Line58a_DateFrom[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryDateTo",
    pdfField: "form1[0].#subform[7].Pt4Line58b_DateTo[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryProvince",
    pdfField: "form1[0].#subform[7].Pt4Line57_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryCountry",
    pdfField: "form1[0].#subform[7].Pt4Line57_Country[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryPostalCode",
    pdfField: "form1[0].#subform[7].Pt4Line57_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryVisaCityOrTown",
    pdfField: "form1[0].#subform[7].Pt4Line61a_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryVisaProvince",
    pdfField: "form1[0].#subform[7].Pt4Line61b_Province[0]",
    type: "text",
  },
  {
    questionId: "part4.beneficiaryVisaCountry",
    pdfField: "form1[0].#subform[7].Pt4Line61c_Country[0]",
    type: "button",
  },
  {
    questionId: "part5.previousPetition",
    pdfField: "form1[0].#subform[7].Part4Line1_Yes[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.previousPetition",
    pdfField: "form1[0].#subform[7].Part4Line1_No[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.previousPetitionFamilyName",
    pdfField: "form1[0].#subform[7].Pt5Line2a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.previousPetitionGivenName",
    pdfField: "form1[0].#subform[7].Pt5Line2b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.previousPetitionMiddleName",
    pdfField: "form1[0].#subform[7].Pt5Line2c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.previousPetitionResult",
    pdfField: "form1[0].#subform[7].Pt5Line5_Result[0]",
    type: "text",
  },
  {
    questionId: "part5.previousPetitionDateFiled",
    pdfField: "form1[0].#subform[7].Pt5Line4_DateFiled[0]",
    type: "text",
  },
  {
    questionId: "part5.previousPetitionCityOrTown",
    pdfField: "form1[0].#subform[7].Pt5Line3a_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part5.otherInformation.state",
    pdfField: "form1[0].#subform[7].Pt5Line3b_State[0]",
    type: "select",
  },
  {
    questionId: "part4.beneficiary.cityOrTown",
    pdfField: "form1[0].#subform[7].Pt4Line60a_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part4.beneficiary.state",
    pdfField: "form1[0].#subform[7].Pt4Line60b_State[0]",
    type: "select",
  },
  {
    questionId: "part5.otherInformation.relative1.relationship",
    pdfField: "form1[0].#subform[7].Pt4Line7_Relationship[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative1.familyName",
    pdfField: "form1[0].#subform[7].Pt4Line6a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative1.givenName",
    pdfField: "form1[0].#subform[7].Pt4Line6b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative1.middleName",
    pdfField: "form1[0].#subform[7].Pt4Line6c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part6.petitioner.daytimePhoneNumber",
    pdfField: "form1[0].#subform[8].Pt6Line3_DaytimePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part6.petitioner.email",
    pdfField: "form1[0].#subform[8].Pt6Line5_Email[0]",
    type: "text",
  },
  {
    questionId: "part6.petitioner.mobileNumber",
    pdfField: "form1[0].#subform[8].Pt6Line4_MobileNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative2.middleName",
    pdfField: "form1[0].#subform[8].Pt4Line8c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative2.givenName",
    pdfField: "form1[0].#subform[8].Pt4Line8b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative2.familyName",
    pdfField: "form1[0].#subform[8].Pt4Line8a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.otherInformation.relative2.relationship",
    pdfField: "form1[0].#subform[8].Pt4Line9_Relationship[0]",
    type: "button",
  },
  {
    questionId: "part6.petitioner.statement",
    pdfField: "form1[0].#subform[8].Pt6Line1Checkbox[0]",
    type: "button",
    value: "A",
  },
  {
    questionId: "part6.petitioner.statementB",
    pdfField: "form1[0].#subform[8].Pt6Line1Checkbox[1]",
    type: "text",
    value: "B",
  },
  {
    questionId: "part6.petitioner.language",
    pdfField: "form1[0].#subform[8].Pt6Line1b_Language[0]",
    type: "button",
  },
  {
    questionId: "part6.petitioner.preparer",
    pdfField: "form1[0].#subform[8].Pt6Line2_Checkbox[0]",
    type: "text",
    value: "C",
  },
  {
    questionId: "part6.petitioner.preparerName",
    pdfField: "form1[0].#subform[8].Pt6Line2_RepresentativeName[0]",
    type: "text",
  },
  {
    questionId: "part6.petitioner.dateOfSignature",
    pdfField: "form1[0].#subform[8].Pt6Line6b_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part6.petitioner.signature",
    pdfField: "form1[0].#subform[8].P5_Line6a_SignatureofApplicant[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreter.givenName",
    pdfField: "form1[0].#subform[9].Pt7Line1b_InterpreterGivenName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreter.familyName",
    pdfField: "form1[0].#subform[9].Pt7Line1a_InterpreterFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreter.businessOrOrg",
    pdfField: "form1[0].#subform[9].Pt7Line2_InterpreterBusinessorOrg[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreter.cityOrTown",
    pdfField: "form1[0].#subform[9].Pt7Line3_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterMailingAddress.streetNumberName",
    pdfField: "form1[0].#subform[9].Pt7Line3_StreetNumberName[0]",
  },
  {
    questionId: "part7.interpreterMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt7Line3_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part7.interpreterMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt7Line3_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part7.interpreterMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt7Line3_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part7.interpreterMailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[9].Pt7Line3_AptSteFlrNumber[0]",
  },
  {
    questionId: "part7.interpreterMailingAddress.postalCode",
    pdfField: "form1[0].#subform[9].Pt7Line3_PostalCode[0]",
  },
  {
    questionId: "part7.interpreterMailingAddress.zipCode",
    pdfField: "form1[0].#subform[9].Pt7Line3_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part7.interpreterMailingAddress.state",
    pdfField: "form1[0].#subform[9].Pt7Line3_State[0]",
    type: "select",
  },
  {
    questionId: "part7.interpreterMailingAddress.country",
    pdfField: "form1[0].#subform[9].Pt7Line3_Country[0]",
  },
  {
    questionId: "part7.interpreterMailingAddress.province",
    pdfField: "form1[0].#subform[9].Pt7Line3_Province[0]",
  },
  {
    questionId: "part7.interpreterCertification.language",
    pdfField: "form1[0].#subform[9].Pt7_NameofLanguage[0]",
  },
  {
    questionId: "part7.interpreterSignature.dateOfSignature",
    pdfField: "form1[0].#subform[9].Pt7Line7b_DateofSignature[0]",
  },
  {
    questionId: "part7.interpreterSignature.signature",
    pdfField: "form1[0].#subform[9].Pt7Line7a_Signature[0]",
  },
  {
    questionId: "part8.preparerFullName.givenName",
    pdfField: "form1[0].#subform[9].Pt8Line1b_PreparerGivenName[0]",
  },
  {
    questionId: "part8.preparerFullName.businessName",
    pdfField: "form1[0].#subform[9].Pt8Line2_BusinessName[0]",
  },
  {
    questionId: "part8.preparerFullName.familyName",
    pdfField: "form1[0].#subform[9].Pt8Line1a_PreparerFamilyName[0]",
  },
  {
    questionId: "part7.interpreterContactInformation.daytimeTelephone",
    pdfField: "form1[0].#subform[9].Pt7Line4_InterpreterDaytimeTelephone[0]",
  },
  {
    questionId: "part7.interpreterContactInformation.email",
    pdfField: "form1[0].#subform[9].Pt7Line5_Email[0]",
  },
  {
    questionId: "part7.interpreterContactInformation.mobileTelephone",
    pdfField: "form1[0].#subform[9].Pt4Line53_DaytimePhoneNumber[0]",
  },
  {
    questionId: "part8.preparerMailingAddress.cityOrTown",
    pdfField: "form1[0].#subform[9].Pt8Line3_CityOrTown[0]",
  },
  {
    questionId: "part8.preparerMailingAddress.streetNumberName",
    pdfField: "form1[0].#subform[9].Pt8Line3_StreetNumberName[0]",
  },
  {
    questionId: "part8.preparerMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt8Line3_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part8.preparerMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt8Line3_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part8.preparerMailingAddress.unit",
    pdfField: "form1[0].#subform[9].Pt8Line3_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part8.preparerMailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[9].Pt8Line3_AptSteFlrNumber[0]",
  },
  {
    questionId: "part8.preparersMailingAddressPostalCode",
    pdfField: "form1[0].#subform[9].Pt8Line3_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersMailingAddressZipCode",
    pdfField: "form1[0].#subform[9].Pt8Line3_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part8.preparersMailingAddressState",
    pdfField: "form1[0].#subform[9].Pt8Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersMailingAddressCountry",
    pdfField: "form1[0].#subform[9].Pt8Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersMailingAddressProvince",
    pdfField: "form1[0].#subform[9].Pt8Line3_Province[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersContactInformationFaxNumber",
    pdfField: "form1[0].#subform[10].Pt8Line5_PreparerFaxNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersContactInformationDaytimePhoneNumber",
    pdfField: "form1[0].#subform[10].Pt8Line4_DaytimePhoneNumber[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersContactInformationEmail",
    pdfField: "form1[0].#subform[10].Pt8Line6_Email[0]",
    type: "email",
  },
  {
    questionId: "part8.preparersStatement",
    pdfField: "form1[0].#subform[10].Pt8Line7_Checkbox[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part8.preparersStatement",
    pdfField: "form1[0].#subform[10].Pt8Line7_Checkbox[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part8.preparersStatementAttorneyRepresentation",
    pdfField: "form1[0].#subform[10].Pt8Line7b_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part8.preparersStatementAttorneyRepresentation",
    pdfField: "form1[0].#subform[10].Pt8Line7b_Checkbox[1]",
    type: "text",
  },
  {
    questionId: "part8.preparersSignature",
    pdfField: "form1[0].#subform[10].Pt8Line8a_Signature[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersSignatureDate",
    pdfField: "form1[0].#subform[10].Pt8Line8b_DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part9.alienRegistrationNumber",
    pdfField: "form1[0].#subform[11].Pt2Line1_AlienNumber[1]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber3a",
    pdfField: "form1[0].#subform[11].Pt9Line3a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber3b",
    pdfField: "form1[0].#subform[11].Pt9Line3b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber3c",
    pdfField: "form1[0].#subform[11].Pt9Line3c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation3d",
    pdfField: "form1[0].#subform[11].Pt9Line3d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber4a",
    pdfField: "form1[0].#subform[11].Pt9Line4a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber4b",
    pdfField: "form1[0].#subform[11].Pt9Line4b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber4c",
    pdfField: "form1[0].#subform[11].Pt9Line4c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation4d",
    pdfField: "form1[0].#subform[11].Pt9Line4d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber5a",
    pdfField: "form1[0].#subform[11].Pt9Line5a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber5b",
    pdfField: "form1[0].#subform[11].Pt9Line5b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation5cItemNumber",
    pdfField: "form1[0].#subform[11].Pt9Line5c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation6aPageNumber",
    pdfField: "form1[0].#subform[11].Pt9Line6a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation6bPartNumber",
    pdfField: "form1[0].#subform[11].Pt9Line6b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation6cItemNumber",
    pdfField: "form1[0].#subform[11].Pt9Line6c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.familyName",
    pdfField: "form1[0].#subform[11].Pt2Line4a_FamilyName[1]",
    type: "text",
  },
  {
    questionId: "part9.givenName",
    pdfField: "form1[0].#subform[11].Pt2Line4b_GivenName[1]",
    type: "text",
  },
  {
    questionId: "part9.middleName",
    pdfField: "form1[0].#subform[11].Pt2Line4c_MiddleName[1]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation6d",
    pdfField: "form1[0].#subform[11].Pt9Line6d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation5d",
    pdfField: "form1[0].#subform[11].Pt9Line5d_AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation9aPageNumber",
    pdfField: "form1[0].#subform[11].Pt9Line9a_PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation7bPartNumber",
    pdfField: "form1[0].#subform[11].Pt9Line7b_PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation7cItemNumber",
    pdfField: "form1[0].#subform[11].Pt9Line7c_ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformation7d",
    pdfField: "form1[0].#subform[11].Pt9Line7d_AdditionalInfo[0]",
    type: "text",
  },
];
