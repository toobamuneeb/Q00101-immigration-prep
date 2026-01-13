/**
 * I-751 Field Mappings
 * Generated with AI: 2025-12-24T19:00:11.025Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_751_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part1.g28Attached",
    pdfField: "form1[0].#subform[0].G28[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part1.attorneyStateBarNumber",
    pdfField: "form1[0].#subform[0].AttorneyStateBarNumber[0]",
  },
  {
    questionId: "part1.familyName",
    pdfField: "form1[0].#subform[0].Pt1Line1a_FamilyName[0]",
  },
  {
    questionId: "part1.givenName",
    pdfField: "form1[0].#subform[0].Pt1Line1b_GivenName[0]",
  },
  {
    questionId: "part1.middleName",
    pdfField: "form1[0].#subform[0].Pt1Line1c_MiddleName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.familyName",
    pdfField: "form1[0].#subform[0].P1_Line2a_FamilyName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.givenName",
    pdfField: "form1[0].#subform[0].P1_Line2b_GivenName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.middleName",
    pdfField: "form1[0].#subform[0].P1_Line2c_MiddleName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.familyName2",
    pdfField: "form1[0].#subform[0].P1_Line3a_FamilyName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.givenName2",
    pdfField: "form1[0].#subform[0].P1_Line3b_GivenName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.middleName2",
    pdfField: "form1[0].#subform[0].P1_Line3c_MiddleName[0]",
  },
  {
    questionId: "part1.dateOfBirth",
    pdfField: "form1[0].#subform[0].P1_Line4_DateOfBirth[0]",
  },
  {
    questionId: "part1.dateOfMarriage",
    pdfField: "form1[0].#subform[0].P1_Line11_DateOfMarriage[0]",
  },
  {
    questionId: "part1.placeOfMarriage",
    pdfField: "form1[0].#subform[0].P1_Line12_PlaceOfMarriage[0]",
  },
  {
    questionId: "part1.dateMarriageEnded",
    pdfField: "form1[0].#subform[0].P1_Line13_DateMarriageEnded[0]",
  },
  {
    questionId: "part1.conditionalResidenceExpiresOn",
    pdfField: "form1[0].#subform[0].P1_Line14_CRExpiresOn[0]",
  },
  {
    questionId: "part1.alienNumber",
    pdfField: "form1[0].#subform[0].P1_Line7_AlienNumber[0]",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[0].Part1_Line10_MaritalStatus[0]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[0].Part1_Line10_MaritalStatus[1]",
    type: "radio",
    value: "W",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[0].Part1_Line10_MaritalStatus[2]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part1.maritalStatus",
    pdfField: "form1[0].#subform[0].Part1_Line10_MaritalStatus[3]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part1.uscisElisAccountNumber",
    pdfField: "form1[0].#subform[0].P1_Line9_AcctIdentifier[0]",
  },
  {
    questionId: "part1.countryOfCitizenship",
    pdfField: "form1[0].#subform[0].P1_Line6_CountryOfCitizenship[0]",
  },
  { questionId: "part1.ssn", pdfField: "form1[0].#subform[0].P1_Line8_SSN[0]" },
  {
    questionId: "part1.countryOfBirth",
    pdfField: "form1[0].#subform[0].P1_Line5_CountryOfBirth[0]",
  },
  {
    questionId: "part1.mailingAddress.inCareOfName",
    pdfField: "form1[0].#subform[1].Line17a_InCareofName[0]",
  },
  {
    questionId: "part1.mailingAddress.cityOrTown",
    pdfField: "form1[0].#subform[1].Line17d_City_Town[0]",
  },
  {
    questionId: "part1.mailingAddress.streetNumberAndName",
    pdfField: "form1[0].#subform[1].Line17b_Street_Number_Name[0]",
  },
  {
    questionId: "part1.mailingAddress",
    pdfField: "form1[0].#subform[1].Line17c_Apt[0]",
    value: "Apt",
  },
  {
    questionId: "part1.mailingAddress",
    pdfField: "form1[0].#subform[1].Line17c_Ste[0]",
    value: "Ste",
  },
  {
    questionId: "part1.mailingAddress",
    pdfField: "form1[0].#subform[1].Line17c_Flr[0]",
    value: "Flr",
  },
  {
    questionId: "part1.mailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Line17c_Apt_Ste_Flr_Number[0]",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[1].Line17c_Unit[0]",
    type: "radio",
    value: "apt",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[1].Line17c_Unit[1]",
    type: "radio",
    value: "ste",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[1].Line17c_Unit[2]",
    type: "radio",
    value: "flr",
  },
  {
    questionId: "part1.mailingAddress.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line15f_ZipCode[0]",
  },
  {
    questionId: "part1.mailingAddress.state",
    pdfField: "form1[0].#subform[1].Pt1Line15e_State[0]",
    type: "radio",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[1].Line17c_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].#subform[1].Line17c_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.physicalAddressDifferent",
    pdfField: "form1[0].#subform[1].Line16_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.physicalAddressDifferent",
    pdfField: "form1[0].#subform[1].Line16_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.removalProceedings",
    pdfField: "form1[0].#subform[1].Line17_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.feePaidToNonAttorney",
    pdfField: "form1[0].#subform[1].Line18_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.criminalHistory",
    pdfField: "form1[0].#subform[1].Line19_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.criminalHistory",
    pdfField: "form1[0].#subform[1].Line19_Checkbox[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.feePaidToNonAttorney",
    pdfField: "form1[0].#subform[1].Line18_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.removalProceedings",
    pdfField: "form1[0].#subform[1].Line17_Checkbox[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.physicalAddress.inCareOfName",
    pdfField: "form1[0].#subform[1].Pt1Line17_InCareofName[0]",
  },
  {
    questionId: "part1.physicalAddress.cityOrTown",
    pdfField: "form1[0].#subform[1].Pt1Line17_CityOrTown[0]",
  },
  {
    questionId: "part1.physicalAddress.streetNumberAndName",
    pdfField: "form1[0].#subform[1].Pt1Line17_StreetNumberName[0]",
  },
  {
    questionId: "part1.physicalAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[1].Pt1Line17_AptSteFlrNumber[0]",
  },

  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[0]",
    value: "apt",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[1]",
    value: "ste",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[2]",
    value: "flr",
  },

  {
    questionId: "part1.physicalAddress.zipCode",
    pdfField: "form1[0].#subform[1].Pt1Line17_ZipCode[0]",
  },
  {
    questionId: "part1.physicalAddress.state",
    pdfField: "form1[0].#subform[1].Pt1Line17_State[0]",
    type: "radio",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].#subform[1].Pt1Line17_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.differentMarriage",
    pdfField: "form1[0].#subform[1].Line20_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.differentMarriage",
    pdfField: "form1[0].#subform[1].Line20_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.otherAddresses",
    pdfField: "form1[0].#subform[1].Line21_Checkbox[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.otherAddresses",
    pdfField: "form1[0].#subform[1].Line21_Checkbox[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.spouseServingOutsideUS",
    pdfField: "form1[0].#subform[1].Line22_Checkbox[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.spouseServingOutsideUS",
    pdfField: "form1[0].#subform[1].Line22_Checkbox[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.heightFeet",
    pdfField: "form1[0].#subform[1].P3_Line8_HeightFeet[0]",
    type: "radio",
  },
  {
    questionId: "part2.heightInches",
    pdfField: "form1[0].#subform[1].P3_Line8_HeightInches[0]",
    type: "radio",
  },
  {
    questionId: "part2.weightFirstDigit",
    pdfField: "form1[0].#subform[1].P3_Line9_HeightInches1[0]",
  },
  {
    questionId: "part2.weightSecondDigit",
    pdfField: "form1[0].#subform[1].P3_Line9_HeightInches2[0]",
  },
  {
    questionId: "part2.weightThirdDigit",
    pdfField: "form1[0].#subform[1].P3_Line9_HeightInches3[0]",
  },
  {
    questionId: "part2.ethnicity",
    pdfField: "form1[0].#subform[1].P3_checkbox6[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.ethnicity",
    pdfField: "form1[0].#subform[1].P3_checkbox6[1]",
    type: "radio",
    value: "H",
  },
  {
    questionId: "part2.race",
    pdfField: "form1[0].#subform[1].P3_checkbox7_Hawaiian[0]",
    type: "radio",
    value: "Hawaiian",
  },
  {
    questionId: "part2.race",
    pdfField: "form1[0].#subform[1].P3_checkbox7_Indian[0]",
    type: "radio",
    value: "AmericanIndian",
  },
  {
    questionId: "part2.race",
    pdfField: "form1[0].#subform[1].P3_checkbox7_White[0]",
    type: "radio",
    value: "white",
  },
  {
    questionId: "part2.race",
    pdfField: "form1[0].#subform[1].P3_checkbox7_Asian[0]",
    type: "radio",
    value: "asian",
  },
  {
    questionId: "part2.race",
    pdfField: "form1[0].#subform[1].P3_checkbox7_Black[0]",
    type: "radio",
    value: "black",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[0]",
    type: "radio",
    value: "BLU",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[1]",
    type: "radio",
    value: "GRN",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[2]",
    type: "radio",
    value: "HAZ",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[3]",
    type: "radio",
    value: "PNK",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[4]",
    type: "radio",
    value: "MAR",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[5]",
    type: "radio",
    value: "BRO",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[6]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[7]",
    type: "radio",
    value: "UNK",
  },
  {
    questionId: "part2.eyeColor",
    pdfField: "form1[0].#subform[1].P3_checkbox10[8]",
    type: "radio",
    value: "GRY",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[0]",
    type: "radio",
    value: "BAL",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[1]",
    type: "radio",
    value: "BLN",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[2]",
    type: "radio",
    value: "GRY",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[3]",
    type: "radio",
    value: "SDY",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[4]",
    type: "radio",
    value: "UNK",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[5]",
    type: "radio",
    value: "WHI",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[6]",
    type: "radio",
    value: "RED",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[7]",
    type: "radio",
    value: "BRO",
  },
  {
    questionId: "part2.hairColor",
    pdfField: "form1[0].#subform[1].P3_checkbox11[8]",
    type: "radio",
    value: "BLK",
  },
  {
    questionId: "part3.basisForPetition.jointFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part3.basisForPetition.jointFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part3.basisForPetition.waiverOrIndividualFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1c[0]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part3.basisForPetition.waiverOrIndividualFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1d[0]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part3.basisForPetition.waiverOrIndividualFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1e[0]",
    type: "radio",
    value: "E",
  },
  {
    questionId: "part3.basisForPetition.waiverOrIndividualFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1f[0]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part3.basisForPetition.waiverOrIndividualFiling",
    pdfField: "form1[0].#subform[2].Pt3Line1g[0]",
    type: "radio",
    value: "G",
  },
  {
    questionId: "part4.relationship",
    pdfField: "form1[0].#subform[2].Part4_Relationship[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part4.relationship",
    pdfField: "form1[0].#subform[2].Part4_Relationship[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part4.otherInformation.givenName",
    pdfField: "form1[0].#subform[2].Pt4Line2b_GivenName2[0]",
  },
  {
    questionId: "part4.otherInformation.familyName",
    pdfField: "form1[0].#subform[2].Pt4Line2a_FamilyName2[0]",
  },
  {
    questionId: "part4.otherInformation.middleName",
    pdfField: "form1[0].#subform[2].Pt4Line2c_MiddleName2[0]",
  },
  {
    questionId: "part4.dateOfBirth",
    pdfField: "form1[0].#subform[2].Line3_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part4.ssn",
    pdfField: "form1[0].#subform[2].Line4_SSN[0]",
    type: "text",
  },
  {
    questionId: "part4.alienNumber",
    pdfField: "form1[0].#subform[2].Line5_AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.cityOrTown",
    pdfField: "form1[0].#subform[2].Pt4Line6_CityOrTown[0]",
    type: "text",
  },
  {
    questionId: "part4.streetNumberName",
    pdfField: "form1[0].#subform[2].Pt4Line6_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part4.aptSteFlrNumber",
    pdfField: "form1[0].#subform[2].Pt4Line6_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part4.zipCode",
    pdfField: "form1[0].#subform[2].Pt4Line6_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part4.state",
    pdfField: "form1[0].#subform[2].Pt4Line6_State[0]",
    type: "text",
  },
  {
    questionId: "part4.postalCode",
    pdfField: "form1[0].#subform[2].Pt4Line6_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part4.country",
    pdfField: "form1[0].#subform[2].Pt4Line6_Country[0]",
    type: "button",
  },
  {
    questionId: "part4.unit",
    pdfField: "form1[0].#subform[2].Pt4Line6_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part4.unit",
    pdfField: "form1[0].#subform[2].Pt4Line6_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part4.unit",
    pdfField: "form1[0].#subform[2].Pt4Line6_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part4.province",
    pdfField: "form1[0].#subform[2].Pt4Line6_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.givenName",
    pdfField: "form1[0].#subform[2].Line1b_GivenName3[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.familyName",
    pdfField: "form1[0].#subform[2].Line1a_FamilyName3[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.middleName",
    pdfField: "form1[0].#subform[2].Line1c_MiddleName3[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.dateOfBirth",
    pdfField: "form1[0].#subform[2].Line2_DateOfBirth2[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.alienNumber",
    pdfField: "form1[0].#subform[2].Line3_AlienNumber[0]",
    type: "button",
  },
  {
    questionId: "part5.child1.livingWithYou",
    pdfField: "form1[0].#subform[2].Part5Line5[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child1.applyingWithYou",
    pdfField: "form1[0].#subform[2].Part5Line6[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child1.applyingWithYou",
    pdfField: "form1[0].#subform[2].Part5Line6[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child1.livingWithYou",
    pdfField: "form1[0].#subform[2].Part5Line5[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child1.streetNumberName",
    pdfField: "form1[0].#subform[3].Pt5Line6_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.aptSteFlrNumber",
    pdfField: "form1[0].#subform[3].Pt5Line6_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.cityOrTown",
    pdfField: "form1[0].#subform[3].Pt5Line6_CityOrTown[0]",
    type: "button",
  },
  {
    questionId: "part5.child1.unit",
    pdfField: "form1[0].#subform[3].Pt5Line6_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.child1.unit",
    pdfField: "form1[0].#subform[3].Pt5Line6_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.child1.unit",
    pdfField: "form1[0].#subform[3].Pt5Line6_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.child1.zipCode",
    pdfField: "form1[0].#subform[3].Pt5Line6_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part5.child1.state",
    pdfField: "form1[0].#subform[3].Pt5Line6_State[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.postalCode",
    pdfField: "form1[0].#subform[3].Pt5Line6_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.country",
    pdfField: "form1[0].#subform[3].Pt5Line6_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.child1.province",
    pdfField: "form1[0].#subform[3].Pt5Line6_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.givenName",
    pdfField: "form1[0].#subform[3].Line13b_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.familyName",
    pdfField: "form1[0].#subform[3].Line13a_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.middleName",
    pdfField: "form1[0].#subform[3].Line13c_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.dateOfBirth",
    pdfField: "form1[0].#subform[3].Line14_DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.alienNumber",
    pdfField: "form1[0].#subform[3].Line15_AlienNumber[0]",
    type: "button",
  },
  {
    questionId: "part5.child2.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line11[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child2.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line12[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child2.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line12[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child2.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line11[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child2.streetNumberName",
    pdfField: "form1[0].#subform[3].Pt5Line12_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.aptSteFlrNumber",
    pdfField: "form1[0].#subform[3].Pt5Line12_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.cityOrTown",
    pdfField: "form1[0].#subform[3].Pt5Line12_CityOrTown[0]",
    type: "button",
  },
  {
    questionId: "part5.child2.unit",
    pdfField: "form1[0].#subform[3].Pt5Line12_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.child2.unit",
    pdfField: "form1[0].#subform[3].Pt5Line12_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.child2.unit",
    pdfField: "form1[0].#subform[3].Pt5Line12_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.child2.zipCode",
    pdfField: "form1[0].#subform[3].Pt5Line12_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part5.child2.state",
    pdfField: "form1[0].#subform[3].Pt5Line12_State[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.postalCode",
    pdfField: "form1[0].#subform[3].Pt5Line12_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.country",
    pdfField: "form1[0].#subform[3].Pt5Line12_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.child2.province",
    pdfField: "form1[0].#subform[3].Pt5Line12_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.givenName",
    pdfField: "form1[0].#subform[3].Line13b_GivenName[1]",
    type: "text",
  },
  {
    questionId: "part5.child3.familyName",
    pdfField: "form1[0].#subform[3].Line13a_FamilyName[1]",
    type: "text",
  },
  {
    questionId: "part5.child3.middleName",
    pdfField: "form1[0].#subform[3].Line13c_MiddleName[1]",
    type: "text",
  },
  {
    questionId: "part5.child3.dateOfBirth",
    pdfField: "form1[0].#subform[3].Line14_DateOfBirth[1]",
    type: "text",
  },
  {
    questionId: "part5.child3.alienNumber",
    pdfField: "form1[0].#subform[3].Line15_AlienNumber[1]",
    type: "button",
  },
  {
    questionId: "part5.child3.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line17[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child3.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line18[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child3.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line18[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child3.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line17[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child3.streetNumberName",
    pdfField: "form1[0].#subform[3].Pt5Line18_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.aptSteFlrNumber",
    pdfField: "form1[0].#subform[3].Pt5Line18_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.cityOrTown",
    pdfField: "form1[0].#subform[3].Pt5Line18_CityOrTown[0]",
    type: "button",
  },
  {
    questionId: "part5.child3.unit",
    pdfField: "form1[0].#subform[3].Pt5Line18_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.child3.unit",
    pdfField: "form1[0].#subform[3].Pt5Line18_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.child3.unit",
    pdfField: "form1[0].#subform[3].Pt5Line18_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.child3.zipCode",
    pdfField: "form1[0].#subform[3].Pt5Line18_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part5.child3.state",
    pdfField: "form1[0].#subform[3].Pt5Line18_State[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.postalCode",
    pdfField: "form1[0].#subform[3].Pt5Line18_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.country",
    pdfField: "form1[0].#subform[3].Pt5Line18_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.child3.province",
    pdfField: "form1[0].#subform[3].Pt5Line18_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.givenName",
    pdfField: "form1[0].#subform[3].Line13b_GivenName[2]",
    type: "text",
  },
  {
    questionId: "part5.child4.familyName",
    pdfField: "form1[0].#subform[3].Line13a_FamilyName[2]",
    type: "text",
  },
  {
    questionId: "part5.child4.middleName",
    pdfField: "form1[0].#subform[3].Line13c_MiddleName[2]",
    type: "text",
  },
  {
    questionId: "part5.child4.dateOfBirth",
    pdfField: "form1[0].#subform[3].Line14_DateOfBirth[2]",
    type: "text",
  },
  {
    questionId: "part5.child4.alienNumber",
    pdfField: "form1[0].#subform[3].Line15_AlienNumber[2]",
    type: "button",
  },
  {
    questionId: "part5.child4.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line23[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child4.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line24[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child4.applyingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line24[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child4.livingWithYou",
    pdfField: "form1[0].#subform[3].Part5Line23[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child4.streetNumberName",
    pdfField: "form1[0].#subform[4].Pt5Line24_StreetNumberName[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.aptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt5Line24_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.cityOrTown",
    pdfField: "form1[0].#subform[4].Pt5Line24_CityOrTown[0]",
    type: "button",
  },
  {
    questionId: "part5.child4.unit",
    pdfField: "form1[0].#subform[4].Pt5Line24_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.child4.unit",
    pdfField: "form1[0].#subform[4].Pt5Line24_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.child4.unit",
    pdfField: "form1[0].#subform[4].Pt5Line24_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.child4.zipCode",
    pdfField: "form1[0].#subform[4].Pt5Line24_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part5.child4.state",
    pdfField: "form1[0].#subform[4].Pt5Line24_State[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.postalCode",
    pdfField: "form1[0].#subform[4].Pt5Line24_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.country",
    pdfField: "form1[0].#subform[4].Pt5Line24_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.child4.province",
    pdfField: "form1[0].#subform[4].Pt5Line24_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.child5.givenName",
    pdfField: "form1[0].#subform[4].Line13b_GivenName[3]",
    type: "text",
  },
  {
    questionId: "part5.child5.familyName",
    pdfField: "form1[0].#subform[4].Line13a_FamilyName[3]",
    type: "text",
  },
  {
    questionId: "part5.child5.middleName",
    pdfField: "form1[0].#subform[4].Line13c_MiddleName[3]",
    type: "text",
  },
  {
    questionId: "part5.child5.dateOfBirth",
    pdfField: "form1[0].#subform[4].Line14_DateOfBirth[3]",
    type: "text",
  },
  {
    questionId: "part5.child5.alienNumber",
    pdfField: "form1[0].#subform[4].Line15_AlienNumber[3]",
    type: "button",
  },
  {
    questionId: "part5.child5.livingWithYou",
    pdfField: "form1[0].#subform[4].Part5Line29[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child5.isApplyingWithYou",
    pdfField: "form1[0].#subform[4].Part5Line30[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child5.isApplyingWithYou",
    pdfField: "form1[0].#subform[4].Part5Line30[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part5.child5.isLivingWithYou",
    pdfField: "form1[0].#subform[4].Part5Line29[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part5.child5.physicalAddress.streetNumberName",
    pdfField: "form1[0].#subform[4].Pt5Line30_StreetNumberName[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[4].Pt5Line30_AptSteFlrNumber[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.cityOrTown",
    pdfField: "form1[0].#subform[4].Pt5Line30_CityOrTown[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.unit",
    pdfField: "form1[0].#subform[4].Pt5Line30_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.child5.physicalAddress.unit",
    pdfField: "form1[0].#subform[4].Pt5Line30_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.child5.physicalAddress.unit",
    pdfField: "form1[0].#subform[4].Pt5Line30_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part5.child5.physicalAddress.zipCode",
    pdfField: "form1[0].#subform[4].Pt5Line30_ZipCode[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.state",
    pdfField: "form1[0].#subform[4].Pt5Line30_State[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.postalCode",
    pdfField: "form1[0].#subform[4].Pt5Line30_PostalCode[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.country",
    pdfField: "form1[0].#subform[4].Pt5Line30_Country[0]",
  },
  {
    questionId: "part5.child5.physicalAddress.province",
    pdfField: "form1[0].#subform[4].Pt5Line30_Province[0]",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line1[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line2[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line3[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line3[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line2[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part6.accommodationsForDisabilities.requestingAccommodation",
    pdfField: "form1[0].#subform[4].Part6Line1[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part6.accommodationsForDisabilities.deafOrHardOfHearing",
    pdfField: "form1[0].#subform[4].Pt6Line4_DeafOrHardOfHearing[0]",
  },
  {
    questionId: "part6.accommodationsForDisabilities.deafOrHardOfHearing",
    pdfField: "form1[0].#subform[4].Pt6Line4a_chbx[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part6.accommodationsForDisabilities.blindOrSightImpaired",
    pdfField: "form1[0].#subform[4].Pt6Line4b_chbx[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part6.accommodationsForDisabilities.blindOrSightImpaired",
    pdfField: "form1[0].#subform[4].Pt6Line4_BlindOrSightImpaired[0]",
  },
  {
    questionId: "part6.accommodationsForDisabilities.accommodationRequested",
    pdfField: "form1[0].#subform[4].Pt6Line4_AccomodationRequested[0]",
  },
  {
    questionId: "part6.accommodationsForDisabilities.otherDisability",
    pdfField: "form1[0].#subform[4].Pt6Line4c_chbx[0]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part7.petitionersStatement",
    pdfField: "form1[0].#subform[5].P5_Checkbox1[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part7.petitionersStatement",
    pdfField: "form1[0].#subform[5].P5_Checkbox1[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part7.petitionersStatement.languageUsed",
    pdfField: "form1[0].#subform[5].Pt5Line1b_Language[0]",
  },
  {
    questionId: "part7.petitionersStatement.preparerConsent",
    pdfField: "form1[0].#subform[5].P5_Checkbox2[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part7.petitionersStatement.preparerName",
    pdfField: "form1[0].#subform[5].P5_Line2_NameofRepresentative[0]",
  },
  {
    questionId: "part7.petitionersStatement.preparerIsAttorney",
    pdfField: "form1[0].#subform[5].P5_Checkbox2_Who[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part7.petitionersStatement.preparerIsAttorney",
    pdfField: "form1[0].#subform[5].P5_Checkbox2_Who[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part7.petitionersContactInformation.emailAddress",
    pdfField: "form1[0].#subform[5].P5_Line5_EmailAddress[0]",
  },
  {
    questionId: "part7.petitionersContactInformation.daytimePhoneNumber",
    pdfField: "form1[0].#subform[5].P5_Line3_DaytimePhoneNumber[0]",
  },
  {
    questionId: "part7.petitionersContactInformation.mobilePhoneNumber",
    pdfField: "form1[0].#subform[5].P5_Line4_MobilePhoneNumber[0]",
  },
  {
    questionId: "part7.acknowledgementOfAppointment.name",
    pdfField: "form1[0].#subform[5].P7_Name[0]",
  },
  {
    questionId: "part7.petitionersSignature.dateOfSignature",
    pdfField: "form1[0].#subform[6].P5_Line6b_DateofSignature[0]",
  },
  {
    questionId: "part7.petitionersSignature.signature",
    pdfField: "form1[0].#subform[6].P5_Line6a_SignatureofPetitioner[0]",
  },
  {
    questionId: "part8.spousesStatement",
    pdfField: "form1[0].#subform[6].P8_Checkbox1[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part8.spousesStatement",
    pdfField: "form1[0].#subform[6].P8_Checkbox1[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part8.spousesStatement.languageUsed",
    pdfField: "form1[0].#subform[6].Pt7Line1b_Language[0]",
  },
  {
    questionId: "part8.spousesStatement.preparerConsent",
    pdfField: "form1[0].#subform[6].P5_Checkbox2[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part8.spousesStatement.preparerName",
    pdfField: "form1[0].#subform[6].P7Line2_NameofRepresentative[0]",
  },
  {
    questionId: "part8.spousesStatement.preparerIsAttorney",
    pdfField: "form1[0].#subform[6].P7_Checkbox2_Who[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part8.spousesStatement.preparerIsAttorney",
    pdfField: "form1[0].#subform[6].P7_Checkbox2_Who[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part8.spousesContactInformation.emailAddress",
    pdfField: "form1[0].#subform[6].P5_Line5_EmailAddress[1]",
  },
  {
    questionId: "part8.spousesContactInformation.mobilePhoneNumber",
    pdfField: "form1[0].#subform[6].P5_Line4_MobilePhoneNumber[1]",
  },
  {
    questionId: "part8.spousesContactInformation.daytimePhoneNumber",
    pdfField: "form1[0].#subform[6].P5_Line3_DaytimePhoneNumber[1]",
  },
  {
    questionId: "part8.acknowledgementOfAppointment.name",
    pdfField: "form1[0].#subform[7].Pt8_Name[0]",
  },
  {
    questionId: "part9.interpretersFullName.givenName",
    pdfField: "form1[0].#subform[7].P6_Line1b_InterpretersGivenName[0]",
  },
  {
    questionId: "part9.interpretersFullName.familyName",
    pdfField: "form1[0].#subform[7].P6_Line1a_InterpretersFamilyName[0]",
  },
  {
    questionId: "part9.interpretersBusinessOrOrganizationName",
    pdfField: "form1[0].#subform[7].P6_Line2_NameofBusinessor[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.cityOrTown",
    pdfField: "form1[0].#subform[7].Pt9Line3_CityOrTown[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.streetNumberName",
    pdfField: "form1[0].#subform[7].P6_Line3a_StreetNumberName[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[7].Pt9Line3_AptSteFlrNumber[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.province",
    pdfField: "form1[0].#subform[7].Pt9Line3_Province[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.zipCode",
    pdfField: "form1[0].#subform[7].Pt9Line3_ZipCode[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.state",
    pdfField: "form1[0].#subform[7].Pt9Line3_State[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.country",
    pdfField: "form1[0].#subform[7].Pt9Line3_Country[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.postalCode",
    pdfField: "form1[0].#subform[7].Pt9Line3_PostalCode[0]",
  },
  {
    questionId: "part9.interpretersMailingAddress.unit",
    pdfField: "form1[0].#subform[7].Pt9Line3_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part9.interpretersMailingAddress.unit",
    pdfField: "form1[0].#subform[7].Pt9Line3_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part9.interpretersMailingAddress.unit",
    pdfField: "form1[0].#subform[7].Pt9Line3_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part8.spousesSignature.dateOfSignature",
    pdfField: "form1[0].#subform[7].P5_Line6b_DateofSignature[1]",
  },
  {
    questionId: "part8.spousesSignature.signature",
    pdfField: "form1[0].#subform[7].P5_Line6a_SignatureofSpouse[0]",
  },
  {
    questionId: "part9.interpretersContactInformation.emailAddress",
    pdfField: "form1[0].#subform[7].P6_Line5_InterpretersEmailAddress[0]",
  },
  {
    questionId: "part9.interpretersContactInformation.daytimePhoneNumber",
    pdfField: "form1[0].#subform[7].P6_Line4_InterpretersDaytimePhoneNumber[0]",
  },
  {
    questionId: "part9.interpretersSignature.dateOfSignature",
    pdfField: "form1[0].#subform[8].P6_Line6b_DateofSignature[0]",
  },
  {
    questionId: "part9.interpretersSignature.signature",
    pdfField: "form1[0].#subform[8].P6_Line6a_Signature[0]",
  },
  {
    questionId: "part9.interpretersCertification.languageFluent",
    pdfField: "form1[0].#subform[8].P6_Language[0]",
  },
  {
    questionId: "part10.preparersFullName.familyName",
    pdfField: "form1[0].#subform[8].P7_Line1a_FamilyName[0]",
  },
  {
    questionId: "part10.preparersFullName.givenName",
    pdfField: "form1[0].#subform[8].P7_Line1b_PreparersGivenName[0]",
  },
  {
    questionId: "part10.preparersBusinessOrOrganizationName",
    pdfField: "form1[0].#subform[8].P7_Line2_NameofBusinessor[0]",
  },
  {
    questionId: "part10.preparersContactInformation.emailAddress",
    pdfField: "form1[0].#subform[8].P7_Line6_PreparersEmailAddress[0]",
  },
  {
    questionId: "part10.preparersContactInformation.daytimePhoneNumber",
    pdfField: "form1[0].#subform[8].P7_Line4_PreparersDaytimePhoneNumber[0]",
  },
  {
    questionId: "part10.preparersContactInformation.faxNumber",
    pdfField: "form1[0].#subform[8].P7_Line5_PreparersFaxNumber[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.cityOrTown",
    pdfField: "form1[0].#subform[8].P7_Line3c_CityTown[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.streetNumberName",
    pdfField: "form1[0].#subform[8].Pt9Line3_StreetNumberName[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].#subform[8].Pt10Line3_AptSteFlrNumber[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.province",
    pdfField: "form1[0].#subform[8].P7_Line3f_Province[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.zipCode",
    pdfField: "form1[0].#subform[8].P7_Line3e_ZipCode[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.state",
    pdfField: "form1[0].#subform[8].P7_Line3d_State[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.country",
    pdfField: "form1[0].#subform[8].P7_Line3h_Country[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.postalCode",
    pdfField: "form1[0].#subform[8].P7_Line3g_PostalCode[0]",
  },
  {
    questionId: "part10.preparersMailingAddress.unit",
    pdfField: "form1[0].#subform[8].Pt10Line3_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part10.preparersMailingAddress.unit",
    pdfField: "form1[0].#subform[8].Pt10Line3_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part10.preparersMailingAddress.unit",
    pdfField: "form1[0].#subform[8].Pt10Line3_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part10.preparersStatement",
    pdfField: "form1[0].#subform[8].P7_checkbox7[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part10.preparersStatement",
    pdfField: "form1[0].#subform[8].P7_checkbox7[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part10.preparersStatement.extendsBeyondPreparation",
    pdfField: "form1[0].#subform[8].Pt10Item7b_Extends[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part10.preparersStatement.doesNotExtendBeyondPreparation",
    pdfField: "form1[0].#subform[8].Pt10Item7b_NotExtend[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part10.preparersSignature.signature",
    pdfField: "form1[0].#subform[9].P7_Line8a_SignatureofPreparer[0]",
  },
  {
    questionId: "part10.preparersSignature.dateOfSignature",
    pdfField: "form1[0].#subform[9].P7_Line8b_DateofSignature[0]",
  },
  {
    questionId: "part11.additionalInformation.additionalInfo",
    pdfField: "form1[0].#subform[10].P8_Line3d_AdditionalInfo[0]",
  },
  {
    questionId: "part11.additionalInformation.pageNumber",
    pdfField: "form1[0].#subform[10].P8_Line3a_PageNumber[0]",
  },
  {
    questionId: "part11.additionalInformation.partNumber",
    pdfField: "form1[0].#subform[10].P8_Line3b_PartNumber[0]",
  },
  {
    questionId: "part11.additionalInformation.itemNumber",
    pdfField: "form1[0].#subform[10].P8_Line3c_ItemNumber[0]",
  },
  {
    questionId: "part11.additionalInformation.fullName.familyName",
    pdfField: "form1[0].#subform[10].Pt1Line1a_FamilyName[1]",
  },
  {
    questionId: "part11.additionalInformation.fullName.givenName",
    pdfField: "form1[0].#subform[10].Pt1Line1b_GivenName[1]",
  },
  {
    questionId: "part11.yourFullName.middleName",
    pdfField: "form1[0].#subform[10].Pt1Line1c_MiddleName[1]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.pageNumber4",
    pdfField: "form1[0].#subform[10].P8_Line4a_PageNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.partNumber4",
    pdfField: "form1[0].#subform[10].P8_Line4b_PartNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.itemNumber4",
    pdfField: "form1[0].#subform[10].P8_Line4c_ItemNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.additionalInfo4",
    pdfField: "form1[0].#subform[10].P8_Line4d_AdditionalInfo[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.pageNumber5",
    pdfField: "form1[0].#subform[10].P8_Line5a_PageNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.partNumber5",
    pdfField: "form1[0].#subform[10].P8_Line5b_PartNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.itemNumber5",
    pdfField: "form1[0].#subform[10].P8_Line5c_ItemNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.additionalInfo5",
    pdfField: "form1[0].#subform[10].P8_Line5d_AdditionalInfo[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.pageNumber6",
    pdfField: "form1[0].#subform[10].P8_Line6a_PageNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.partNumber6",
    pdfField: "form1[0].#subform[10].P8_Line6b_PartNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.itemNumber6",
    pdfField: "form1[0].#subform[10].P8_Line6c_ItemNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.additionalInfo6",
    pdfField: "form1[0].#subform[10].P8_Line6d_AdditionalInfo[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.pageNumber7",
    pdfField: "form1[0].#subform[10].P8_Line7a_PageNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.partNumber7",
    pdfField: "form1[0].#subform[10].P8_Line7b_PartNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.itemNumber7",
    pdfField: "form1[0].#subform[10].P8_Line7c_ItemNumber[0]",
    type: "Text",
  },
  {
    questionId: "part11.additionalInformation.additionalInfo7",
    pdfField: "form1[0].#subform[10].P8_Line7d_AdditionalInfo[0]",
    type: "Text",
  },
  {
    questionId: "part11.alienRegistrationNumber",
    pdfField: "form1[0].#subform[10].P1_Line7_AlienNumber[1]",
    type: "Text",
  },
];
