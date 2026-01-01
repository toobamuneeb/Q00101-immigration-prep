/**
 * I-730 Field Mappings
 * Generated: 2026-01-01T01:40:45.351Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_730_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "numberOfRelativesTotalForms",
    pdfField: "F[0].P4[0].TextField1[0]",
    type: "text",
  },
  {
    questionId: "numberOfRelativesSequence",
    pdfField: "F[0].P4[0].TextField1[1]",
    type: "text",
  },
  {
    questionId: "numberOfRelativesTotal",
    pdfField: "F[0].P4[0].TextField1[2]",
    type: "button",
  },
  {
    questionId: "myStatus",
    pdfField: "F[0].P4[0].Status[0]",
    type: "radio",
    value: "REF",
  },
  {
    questionId: "myStatus",
    pdfField: "F[0].P4[0].Status[1]",
    type: "radio",
    value: "ASL",
  },
  {
    questionId: "myStatus",
    pdfField: "F[0].P4[0].Status[2]",
    type: "radio",
    value: "LRE",
  },
  {
    questionId: "myStatus",
    pdfField: "F[0].P4[0].Status[3]",
    type: "radio",
    value: "LAS",
  },
  {
    questionId: "beneficiaryRelation",
    pdfField: "F[0].P4[0].Beneficiary[0]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "beneficiaryRelation",
    pdfField: "F[0].P4[0].Beneficiary[1]",
    type: "radio",
    value: "U",
  },
  {
    questionId: "unmarriedChildType",
    pdfField: "F[0].P4[0].Child[0]",
    type: "radio",
    value: "BC",
  },
  {
    questionId: "unmarriedChildType",
    pdfField: "F[0].P4[0].Child[1]",
    type: "radio",
    value: "SC",
  },
  {
    questionId: "unmarriedChildType",
    pdfField: "F[0].P4[0].Child[2]",
    type: "text",
  },
  {
    questionId: "part1.familyName",
    pdfField: "F[0].P4[0].Pt1Line1_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.givenName",
    pdfField: "F[0].P4[0].Pt1Line1_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.middleName",
    pdfField: "F[0].P4[0].Pt1Line1_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.cityOrTown",
    pdfField: "F[0].P4[0].P1_Line2_City[0]",
    type: "text",
  },
  {
    questionId: "part1.province",
    pdfField: "F[0].P4[0].P1_Line2_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.postalCode",
    pdfField: "F[0].P4[0].P1_Line2_PostalCode[0]",
    type: "choice",
  },
  {
    questionId: "part1.state",
    pdfField: "F[0].P4[0].P1_Line2_State[0]",
    type: "text",
  },
  {
    questionId: "part1.streetName",
    pdfField: "F[0].P4[0].P1_Line2_StreetName[0]",
    type: "text",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].P4[0].P1_Line2_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].P4[0].P1_Line2_Unit[1]",
    type: "text",
  },
  {
    questionId: "part1.apartmentSuiteFloorNumber",
    pdfField: "F[0].P4[0].P1_Line2_Number[0]",
    type: "text",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].P4[0].P1_Line2_Unit[2]",
    type: "text",
  },
  {
    questionId: "part1.country",
    pdfField: "F[0].P4[0].P1_Line2_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.addressOfResidenceZipCode",
    pdfField: "F[0].P4[0].P1_Line2_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "attorney.stateBarNumber",
    pdfField: "F[0].P4[0].AttorneyStateBarNumber[0]",
    type: "button",
  },
  {
    questionId: "attorney.formG28Attached",
    pdfField: "F[0].P4[0].CheckBox1[0]",
    type: "checkbox",
    value: "1",
  },
  {
    questionId: "attorney.volagNumber",
    pdfField: "F[0].P4[0].VolagNumber[0]",
    type: "text",
  },
  {
    questionId: "attorney.uscisOnlineAccountNumber",
    pdfField: "F[0].P4[0].USCISOnlineAcctNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.cityOrTown",
    pdfField: "F[0].#subform[1].P1_Line3_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part1.zipCode",
    pdfField: "F[0].#subform[1].P1_Line3_ZipCode[0]",
    type: "choice",
  },
  {
    questionId: "part1.state",
    pdfField: "F[0].#subform[1].P1_Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part2.inCareOfName",
    pdfField: "F[0].#subform[1].P1_Line3_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part1.streetNumberAndName",
    pdfField: "F[0].#subform[1].P1_Line3_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].#subform[1].P1_Line3__Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].#subform[1].P1_Line3__Unit[1]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.unitType",
    pdfField: "F[0].#subform[1].P1_Line3__Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.unitNumber",
    pdfField: "F[0].#subform[1].P1_Line3__UnitAptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part1.postalCode",
    pdfField: "F[0].#subform[1].P1_Line3_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part1.province",
    pdfField: "F[0].#subform[1].P1_Line3_Province[0]",
    type: "text",
  },
  {
    questionId: "part1.country",
    pdfField: "F[0].#subform[1].P1_Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.emailAddress",
    pdfField: "F[0].#subform[1].E-mailAddress[0]",
    type: "text",
  },
  {
    questionId: "part1.telephoneNumber",
    pdfField: "F[0].#subform[1].TelephoneNumber\\.[0]",
    type: "text",
  },
  {
    questionId: "part1.dateOfBirth",
    pdfField: "F[0].#subform[1].DateofBirth[0]",
    type: "text",
  },
  {
    questionId: "part1.countryOfBirth",
    pdfField: "F[0].#subform[1].CountryofBirth[0]",
    type: "button",
  },
  {
    questionId: "part1.sex",
    pdfField: "F[0].#subform[1].sex[0]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part1.sex",
    pdfField: "F[0].#subform[1].sex[1]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part1.countryOfCitizenshipNationality",
    pdfField: "F[0].#subform[1].CountryofCitizenshipNationality[0]",
    type: "text",
  },
  {
    questionId: "part1.alienRegistrationNumber",
    pdfField: "F[0].#subform[1].Part1_Item9_AlienNum[0]",
    type: "text",
  },
  {
    questionId: "part1.usSocialSecurityNumber",
    pdfField: "F[0].#subform[1].P1_Line10_SSN[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.familyName1",
    pdfField: "F[0].#subform[1].Part1_Line11_FamilyName1[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.givenName1",
    pdfField: "F[0].#subform[1].Part1_Line11_GivenName1[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.middleName1",
    pdfField: "F[0].#subform[1].Part1_Line11_MiddleName1[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.familyName2",
    pdfField: "F[0].#subform[1].Part1_Line11_FamilyName2[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.givenName2",
    pdfField: "F[0].#subform[1].Part1_Line11_GivenName2[0]",
    type: "text",
  },
  {
    questionId: "part1.otherNamesUsed.middleName2",
    pdfField: "F[0].#subform[1].Part1_Line11_MiddleName2[0]",
    type: "text",
  },
  {
    questionId: "part1.dateOfPresentMarriage",
    pdfField: "F[0].#subform[1].Pt1_Line13_DateofPresentMarriage[0]",
    type: "text",
  },
  {
    questionId: "part1.currentSpouseLegalName.familyName",
    pdfField: "F[0].#subform[1].Pt1Line12_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.currentSpouseLegalName.givenName",
    pdfField: "F[0].#subform[1].Pt1Line12_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.currentSpouseLegalName.middleName",
    pdfField: "F[0].#subform[1].Pt1Line12_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.placeOfMarriage.country",
    pdfField: "F[0].#subform[1].Pt1_Line14_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.placeOfMarriage.stateOrProvince",
    pdfField: "F[0].#subform[1].Pt1_Line14_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part1.placeOfMarriage.cityOrTown",
    pdfField: "F[0].#subform[1].Pt1_Line14_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouseName1.familyName",
    pdfField: "F[0].#subform[1].Part1_Line15_FamilyName1[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouseName1.givenName",
    pdfField: "F[0].#subform[1].Part1_Line15_GivenName1[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouseName1.middleName",
    pdfField: "F[0].#subform[1].Part1_Line15_MiddleName1[0]",
    type: "text",
  },
  {
    questionId: "part1.dateOfPriorMarriageEnded",
    pdfField: "F[0].#subform[2].Pt1Line16_DateofPriorMarriage[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEnded.country",
    pdfField: "F[0].#subform[2].Pt1Line17_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEnded.stateOrProvince",
    pdfField: "F[0].#subform[2].Pt1Line17_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEnded.cityOrTown",
    pdfField: "F[0].#subform[2].Pt1Line17_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part1.dateAsyleeStatusGranted",
    pdfField: "F[0].#subform[2].Pt1Line21_DateofAsyleeStatus[0]",
    type: "text",
  },
  {
    questionId: "part1.placeAsyleeStatusGranted.stateOrProvince",
    pdfField: "F[0].#subform[2].Pt1Line22_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part1.placeAsyleeStatusGranted.cityOrTown",
    pdfField: "F[0].#subform[2].Pt1Line22_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouseName2.familyName",
    pdfField: "F[0].#subform[2].Part1_Line18_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouse2GivenName",
    pdfField: "F[0].#subform[2].Part1_Line18_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part1.priorSpouse2MiddleName",
    pdfField: "F[0].#subform[2].Part1_Line18_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.datePriorMarriagesEnded",
    pdfField: "F[0].#subform[2].Pt1Line19_DateofPriorMarriage[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEndedCountry",
    pdfField: "F[0].#subform[2].Pt1Line19_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEndedStateOrProvince",
    pdfField: "F[0].#subform[2].Pt1Line19_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part1.placePreviousMarriageEndedCityTown",
    pdfField: "F[0].#subform[2].Pt1Line19_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part1.dateRefugeeStatusApproved",
    pdfField: "F[0].#subform[2].Pt1Line23_DateRefugeeStatusApproved[0]",
    type: "text",
  },
  {
    questionId: "part1.placeRefugeeStatusApprovedCountry",
    pdfField: "F[0].#subform[2].Pt1Line24_Country[0]",
    type: "text",
  },
  {
    questionId: "part1.placeRefugeeStatusApprovedStateOrProvince",
    pdfField: "F[0].#subform[2].Pt1Line24_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part1.placeRefugeeStatusApprovedCityTown",
    pdfField: "F[0].#subform[2].Pt1Line24_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.familyName",
    pdfField: "F[0].#subform[2].Pt2_Line1_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.givenName",
    pdfField: "F[0].#subform[2].Pt2_Line1_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.middleName",
    pdfField: "F[0].#subform[2].Pt1_Line1_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part1.dateAdmittedAsRefugee",
    pdfField: "F[0].#subform[2].Pt1Line25_DateRefugeeStatusApproved[0]",
    type: "text",
  },
  {
    questionId: "part1.placeAdmittedAsRefugeeState",
    pdfField: "F[0].#subform[2].Pt1Line26_State[0]",
    type: "text",
  },
  {
    questionId: "part1.placeAdmittedAsRefugeeCityTown",
    pdfField: "F[0].#subform[2].Pt1Line26_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.residenceCity",
    pdfField: "F[0].#subform[3].P2_Line2_City[0]",
    type: "text",
  },
  {
    questionId: "part2.residenceProvince",
    pdfField: "F[0].#subform[3].P2_Line2_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.residencePostalCode",
    pdfField: "F[0].#subform[3].P2_Line2_PostalCode[0]",
    type: "choice",
  },
  {
    questionId: "part2.residenceState",
    pdfField: "F[0].#subform[3].P2_Line2_State[0]",
    type: "text",
  },
  {
    questionId: "part2.residenceStreetName",
    pdfField: "F[0].#subform[3].P2_Line2_StreetName[0]",
    type: "button",
  },
  {
    questionId: "part2.residenceUnit",
    pdfField: "F[0].#subform[3].P2_Line2_Unit[0]",
    type: "button",
    value: "STE",
  },
  {
    questionId: "part2.residenceUnit",
    pdfField: "F[0].#subform[3].P2_Line2_Unit[1]",
    type: "text",
    value: "FLR",
  },
  {
    questionId: "part2.residenceNumber",
    pdfField: "F[0].#subform[3].P2_Line2_Number[0]",
    type: "button",
  },
  {
    questionId: "part2.residenceApartment",
    pdfField: "F[0].#subform[3].P2_Line2_Unit[2]",
    type: "text",
    value: "APT",
  },
  {
    questionId: "part2.addressOfResidenceCountry",
    pdfField: "F[0].#subform[3].P2_Line2_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.addressOfResidenceZipCode",
    pdfField: "F[0].#subform[3].P2_Line2_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryEmailAddress",
    pdfField: "F[0].#subform[3].BeneficiaryE-mailAddress[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryTelephoneNumber",
    pdfField: "F[0].#subform[3].TelephoneNumber\\.[1]",
    type: "text",
  },
  {
    questionId: "part2.dateOfBirth",
    pdfField: "F[0].#subform[3].DateofBirth[1]",
    type: "text",
  },
  {
    questionId: "part2.countryOfBirth",
    pdfField: "F[0].#subform[3].CountryofBirth[1]",
    type: "button",
  },
  {
    questionId: "part2.sex",
    pdfField: "F[0].#subform[3].sex[2]",
    type: "radio",
    value: "1",
  },
  {
    questionId: "part2.sex",
    pdfField: "F[0].#subform[3].sex[3]",
    type: "radio",
    value: "2",
  },
  {
    questionId: "part2.countryOfCitizenshipNationality",
    pdfField: "F[0].#subform[3].CountryofCitizenshipNationality[1]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressCityTown",
    pdfField: "F[0].#subform[3].P2_Line3_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressZipCode",
    pdfField: "F[0].#subform[3].P2_Line3_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressState",
    pdfField: "F[0].#subform[3].P2_Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressInCareOfName",
    pdfField: "F[0].#subform[3].P2_Line3_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressStreetNumberName",
    pdfField: "F[0].#subform[3].P2_Line3_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part2.mailingAddressUnit",
    pdfField: "F[0].#subform[3].P2_Line3_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.mailingAddressUnit",
    pdfField: "F[0].#subform[3].P2_Line3_Unit[1]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.mailingAddressUnit",
    pdfField: "F[0].#subform[3].P2_Line3_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.mailingAddressAptSteFlrNumber",
    pdfField: "F[0].#subform[3].P2_Line3_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressPostalCode",
    pdfField: "F[0].#subform[3].P2_Line3_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressProvince",
    pdfField: "F[0].#subform[3].P2_Line3_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.mailingAddressCountry",
    pdfField: "F[0].#subform[3].P2_Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.alienRegistrationNumber",
    pdfField: "F[0].#subform[3].Part2_Iine9_AlienNum[0]",
    type: "text",
  },
  {
    questionId: "part2.socialSecurityNumber",
    pdfField: "F[0].#subform[3].Part2_Iine9_SSN[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesFamilyName",
    pdfField: "F[0].#subform[3].Part2_Line11_FamilyName1[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesGivenName",
    pdfField: "F[0].#subform[3].Part2_Line11_GivenName1[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.middleName1",
    pdfField: "F[0].#subform[3].Part2_Line11_MiddleName1[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.familyName2",
    pdfField: "F[0].#subform[3].Part2_Line11_FamilyName2[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.givenName2",
    pdfField: "F[0].#subform[3].Part2_Line11_GivenName2[0]",
    type: "text",
  },
  {
    questionId: "part2.otherNamesUsed.middleName2",
    pdfField: "F[0].#subform[3].Part2_Line11_MiddleName2[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfPresentMarriage",
    pdfField: "F[0].#subform[3].Part2_Line13_DateofPresentMarriage[0]",
    type: "text",
  },
  {
    questionId: "part2.currentSpouse.legalName.familyName",
    pdfField: "F[0].#subform[3].Part2_Line12_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.currentSpouse.legalName.givenName",
    pdfField: "F[0].#subform[3].Part2_Line12_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.currentSpouse.legalName.middleName",
    pdfField: "F[0].#subform[3].Part2_Line12_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfMarriage.stateOrProvince",
    pdfField: "F[0].#subform[3].Part2_Line14_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfMarriage.cityOrTown",
    pdfField: "F[0].#subform[3].Part2_Line14_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse1.familyName",
    pdfField: "F[0].#subform[4].Part2_Line15_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse1.givenName",
    pdfField: "F[0].#subform[4].Part2_Line15_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse1.middleName",
    pdfField: "F[0].#subform[4].Part2_Line15_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage2Ended.country",
    pdfField: "F[0].#subform[4].Part2_Line20_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage2Ended.stateOrProvince",
    pdfField: "F[0].#subform[4].Part2_Line20_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage2Ended.cityOrTown",
    pdfField: "F[0].#subform[4].Part2_Line20_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage1Ended.country",
    pdfField: "F[0].#subform[4].Part2_Line17_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.datePriorMarriage1Ended",
    pdfField: "F[0].#subform[4].Part2_Line16_DateofPriorMarriage[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage1Ended.stateOrProvince",
    pdfField: "F[0].#subform[4].Part2_Line17_StateorProvince[0]",
    type: "text",
  },
  {
    questionId: "part2.placePreviousMarriage1Ended.cityOrTown",
    pdfField: "F[0].#subform[4].Part2_Line17_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse2.familyName",
    pdfField: "F[0].#subform[4].Part2_Line18_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse2.givenName",
    pdfField: "F[0].#subform[4].Part2_Line18_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.priorSpouse2.middleName",
    pdfField: "F[0].#subform[4].Part2_Line18_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.datePriorMarriage2Ended",
    pdfField: "F[0].#subform[4].Part2_Line19_DateofPriorMarriage[0]",
    type: "button",
  },
  {
    questionId: "part2.beneficiaryOutsideUS",
    pdfField: "F[0].#subform[4].Part2_Beneficiary[0]",
    type: "button",
    value: "B",
  },
  {
    questionId: "part2.beneficiaryInUS",
    pdfField: "F[0].#subform[4].Part2_Beneficiary[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part2.cityCountry",
    pdfField: "F[0].#subform[4].Pt2_CityCountry[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCityTown",
    pdfField: "F[0].#subform[4].P2_Line22_CityTown[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryZipCode",
    pdfField: "F[0].#subform[4].P2_Line22_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryState",
    pdfField: "F[0].#subform[4].P2_Line22_State[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryStreetNumberName",
    pdfField: "F[0].#subform[4].Part2_Line22_StreetNumberName[0]",
    type: "button",
  },
  {
    questionId: "part2.beneficiaryUnitType",
    pdfField: "F[0].#subform[4].P2_Line22_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part2.beneficiaryUnitType",
    pdfField: "F[0].#subform[4].P2_Line22_Unit[1]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part2.beneficiaryUnitType",
    pdfField: "F[0].#subform[4].P2_Line22_Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part2.beneficiaryUnitNumber",
    pdfField: "F[0].#subform[4].P2_Line22_Unit_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryPostalCode",
    pdfField: "F[0].#subform[4].P2_Line22_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryProvince",
    pdfField: "F[0].#subform[4].P2_Line22_Province[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCountry",
    pdfField: "F[0].#subform[4].P2_Line22_Country[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryFamilyName",
    pdfField: "F[0].#subform[4].Part2_Line22_FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryGivenName",
    pdfField: "F[0].#subform[4].Part2_Line22_GivenName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryMiddleName",
    pdfField: "F[0].#subform[4].Part2_Line22_MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryInCareOfName",
    pdfField: "F[0].#subform[4].Part2_Line22_InCareofName[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfMarriageCountry",
    pdfField: "F[0].#subform[4].Part2_Line14_Country[0]",
    type: "button",
  },
  {
    questionId: "part2.beneficiaryStatusA",
    pdfField: "F[0].#subform[5].Part2_Bene_Info[0]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part2.beneficiaryStatusB",
    pdfField: "F[0].#subform[5].Part2_Bene_Info[1]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part2.beneficiaryFluentInEnglish",
    pdfField: "F[0].#subform[5].Part2_bene_english[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.beneficiaryFluentInEnglish",
    pdfField: "F[0].#subform[5].Part2_bene_english[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.otherLanguagesSpoken",
    pdfField: "F[0].#subform[5].Pt2_Line26_FluentLanguage[0]",
    type: "text",
  },
  {
    questionId: "part2.dateOfArrival",
    pdfField: "F[0].#subform[5].P2_Line26_DateOfArrival[0]",
    type: "text",
  },
  {
    questionId: "part2.placeOfArrivalCity",
    pdfField: "F[0].#subform[5].Pt2_Line28_City[0]",
    type: "choice",
  },
  {
    questionId: "part2.placeOfArrivalState",
    pdfField: "F[0].#subform[5].Pt2_Line28__State[0]",
    type: "text",
  },
  {
    questionId: "part2.passportNumber",
    pdfField: "F[0].#subform[5].Pt2_Line24_PassportNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.statusUponArrival",
    pdfField: "F[0].#subform[5].Pt2_Line29_ArrivalStatus[0]",
    type: "text",
  },
  {
    questionId: "part2.i94Number",
    pdfField: "F[0].#subform[5].Pt2_Line30_I94Number[0]",
    type: "text",
  },
  {
    questionId: "part2.dateStatusExpires",
    pdfField: "F[0].#subform[5].P2_Line31_DateStatusExpires[0]",
    type: "text",
  },
  {
    questionId: "part2.passportExpirationDate",
    pdfField: "F[0].#subform[5].P2_Line33_DatePassportExpire[0]",
    type: "text",
  },
  {
    questionId: "part2.travelDocumentNumber",
    pdfField: "F[0].#subform[5].Pt2_Line24_TravelDocumentNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.travelDocumentExpirationDate",
    pdfField: "F[0].#subform[5].P2_Line36_TravelDocExpire[0]",
    type: "text",
  },
  {
    questionId: "part2.countryOfIssuancePassport",
    pdfField: "F[0].#subform[5].Pt2_Line34_CountryIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.countryOfIssuanceTravelDocument",
    pdfField: "F[0].#subform[5].Pt2_Line24_CountryTravDocIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.secondDateOfArrival",
    pdfField: "F[0].#subform[5].P2_Line38_DateOfArrival[0]",
    type: "text",
  },
  {
    questionId: "part2.secondPlaceOfArrivalCity",
    pdfField: "F[0].#subform[5].Pt2_Line39_City[0]",
    type: "choice",
  },
  {
    questionId: "part2.secondPlaceOfArrivalState",
    pdfField: "F[0].#subform[5].Pt2_Line39_State[0]",
    type: "text",
  },
  {
    questionId: "part2.secondStatusUponArrival",
    pdfField: "F[0].#subform[5].Pt2_Line40_ArrivalStatus[0]",
    type: "text",
  },
  {
    questionId: "part2.secondI94Number",
    pdfField: "F[0].#subform[5].Pt2_Line41_I94Number[0]",
    type: "text",
  },
  {
    questionId: "part2.secondDateStatusExpires",
    pdfField: "F[0].#subform[5].Pt2_Line42_StatusExpires[0]",
    type: "text",
  },
  {
    questionId: "part2.secondPassportNumber",
    pdfField: "F[0].#subform[5].Pt2_Line43_PassportNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.secondPassportExpirationDate",
    pdfField: "F[0].#subform[5].Pt2_Line44_PassportExpiration[0]",
    type: "button",
  },
  {
    questionId: "part3.twoYearFilingDeadline",
    pdfField: "F[0].#subform[6].Part3_2year[0]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part3.twoYearFilingDeadline",
    pdfField: "F[0].#subform[6].Part3_2year[1]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part3.twoYearFilingDeadlineExplanation",
    pdfField: "F[0].#subform[6].Explanation[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryTravelDocumentNumber",
    pdfField: "F[0].#subform[6].Pt2_Line46_TravelDocumentNumber[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryTravelDocumentExpirationDate",
    pdfField: "F[0].#subform[6].Pt2_Line47_TravelDocExpiration[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCountryOfIssuanceForTravelDocument",
    pdfField: "F[0].#subform[6].Pt2_Line48_CountryTravelDocIssuance[0]",
    type: "text",
  },
  {
    questionId: "part2.beneficiaryCountryOfIssuanceForPassport",
    pdfField: "F[0].#subform[6].Pt2_Line45_CountryIssuancePassport[0]",
    type: "button",
  },
  {
    questionId: "part5.preparerStatement",
    pdfField: "F[0].#subform[7].P5_Line2_Checkbox[0]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part5.preparerName",
    pdfField: "F[0].#subform[7].P5_Line2b_Consented[0]",
    type: "text",
  },
  {
    questionId: "part5.interpreterLanguage",
    pdfField: "F[0].#subform[7].P5_Line1b_NameofInterpreter[0]",
    type: "button",
  },
  {
    questionId: "part5.interpreterStatement",
    pdfField: "F[0].#subform[7].P5_Line1_Checkbox[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part5.petitionerStatement",
    pdfField: "F[0].#subform[7].P5_Line1_Checkbox[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part5.petitionerEmailAddress",
    pdfField: "F[0].#subform[7].P5_Line5_PetitionerEmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part5.petitionerDaytimeTelephoneNumber",
    pdfField: "F[0].#subform[7].P5_Line3_PetitionerDayTel[0]",
    type: "text",
  },
  {
    questionId: "part5.petitionerMobileTelephoneNumber",
    pdfField: "F[0].#subform[7].P5_Line4_PetitionerMobileTel[0]",
    type: "text",
  },
  {
    questionId: "part5.petitionerSignature",
    pdfField: "F[0].#subform[7].P5_L6a_PetitionerSignature[0]",
    type: "text",
  },
  {
    questionId: "part5.dateOfPetitionerSignature",
    pdfField: "F[0].#subform[7].P5_L6b_PretitionerSignature[0]",
    type: "button",
  },
  {
    questionId: "part6.beneficiaryPreparerStatement",
    pdfField: "F[0].#subform[8].P6_Line2_Checkbox[0]",
    type: "radio",
    value: "C",
  },
  {
    questionId: "part6.beneficiaryPreparerName",
    pdfField: "F[0].#subform[8].P6_Line2b_Consented[0]",
    type: "text",
  },
  {
    questionId: "part6.beneficiaryInterpreterLanguage",
    pdfField: "F[0].#subform[8].P6_Line1b_NameofInterpreter[0]",
    type: "button",
  },
  {
    questionId: "part6.beneficiaryInterpreterStatement",
    pdfField: "F[0].#subform[8].P6_Line1_Checkbox[0]",
    type: "radio",
    value: "B",
  },
  {
    questionId: "part6.beneficiaryStatement",
    pdfField: "F[0].#subform[8].P6_Line1_Checkbox[1]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part6.beneficiaryEmailAddress",
    pdfField: "F[0].#subform[8].P6_Line5_BenEmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part6.beneficiaryDaytimeTelephoneNumber",
    pdfField: "F[0].#subform[8].P6_Line3_BenDayTel[0]",
    type: "text",
  },
  {
    questionId: "part6.beneficiaryMobileTelephoneNumber",
    pdfField: "F[0].#subform[8].P6_Line4_BenMobileTel[0]",
    type: "text",
  },
  {
    questionId: "part6.beneficiarySignature",
    pdfField: "F[0].#subform[8].P6_L6a_BenSignature[0]",
    type: "text",
  },
  {
    questionId: "part6.dateOfBeneficiarySignature",
    pdfField: "F[0].#subform[8].P6_L6b_BenSignature[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterFamilyName",
    pdfField: "F[0].#subform[9].P7_Line1a_InterpreterFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterGivenName",
    pdfField: "F[0].#subform[9].P7_Line1b_InterpreterGivenName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterBusinessName",
    pdfField: "F[0].#subform[9].P7_Line2_InterpreterBusiness[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterCity",
    pdfField: "F[0].#subform[9].P7_Line3_City[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterProvince",
    pdfField: "F[0].#subform[9].P7_Line3_Province[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterPostalCode",
    pdfField: "F[0].#subform[9].P7_Line3_PostalCode[0]",
    type: "choice",
  },
  {
    questionId: "part7.interpreterState",
    pdfField: "F[0].#subform[9].P7_Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterStreetName",
    pdfField: "F[0].#subform[9].P7_Line3_InterpretersStreetName[0]",
    type: "button",
  },
  {
    questionId: "part7.interpreterUnit",
    pdfField: "F[0].#subform[9].P7_Line3_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part7.interpreterUnit",
    pdfField: "F[0].#subform[9].P7_Line3_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part7.interpreterApartmentNumber",
    pdfField: "F[0].#subform[9].P7_Line3_Number[0]",
    type: "button",
  },
  {
    questionId: "part7.interpreterUnit",
    pdfField: "F[0].#subform[9].P7_Line3_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part7.interpreterCountry",
    pdfField: "F[0].#subform[9].P7_Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterZipCode",
    pdfField: "F[0].#subform[9].P7_Line3_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterEmailAddress",
    pdfField: "F[0].#subform[9].P7_Line6_InterEmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterDaytimeTelephone",
    pdfField: "F[0].#subform[9].P7_Line4_DayTelephone[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterMobileTelephone",
    pdfField: "F[0].#subform[9].P7_Line5_MobileTelephone[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterLanguage",
    pdfField: "F[0].#subform[9].P7_Language[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterSignatureDate",
    pdfField: "F[0].#subform[9].P7_L7b_InterSignature[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterSignature",
    pdfField: "F[0].#subform[9].P7_L7a_InterSignature[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerFamilyName",
    pdfField: "F[0].#subform[10].P8_Line1a_PrepFamilyName[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerGivenName",
    pdfField: "F[0].#subform[10].P8_Line1a_PrepGivenName[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersPostalCode",
    pdfField: "F[0].#subform[10].P8_Line3_PostalCode[0]",
    type: "choice",
  },
  {
    questionId: "part8.preparersState",
    pdfField: "F[0].#subform[10].P8_Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersStreetName",
    pdfField: "F[0].#subform[10].P8_Line3_PrepStreetName[0]",
    type: "button",
  },
  {
    questionId: "part8.preparersUnit",
    pdfField: "F[0].#subform[10].P8_Line3_Unit[0]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part8.preparersUnit",
    pdfField: "F[0].#subform[10].P8_Line3_Unit[1]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part8.preparersApartmentNumber",
    pdfField: "F[0].#subform[10].P8_Line3_Number[0]",
    type: "button",
  },
  {
    questionId: "part8.preparersUnit",
    pdfField: "F[0].#subform[10].P8_Line3_Unit[2]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part8.preparersCountry",
    pdfField: "F[0].#subform[10].P8_Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersZipCode",
    pdfField: "F[0].#subform[10].P8_Line3_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersEmailAddress",
    pdfField: "F[0].#subform[10].P8_Line6_PrepEmailAddress[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersDaytimeTelephone",
    pdfField: "F[0].#subform[10].P8_Line4_DayTelephone[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersMobileTelephone",
    pdfField: "F[0].#subform[10].P8_Line5_MobileTelephone[0]",
    type: "button",
  },
  {
    questionId: "part8.preparersStatement",
    pdfField: "F[0].#subform[10].Pt8_Line7_chkbx[0]",
    type: "button",
    value: "A",
  },
  {
    questionId: "part8.preparersAttorneyStatement",
    pdfField: "F[0].#subform[10].Pt8_Line7_chkbx[1]",
    type: "button",
    value: "B",
  },
  {
    questionId: "part8.preparersRepresentationDoesNotExtend",
    pdfField: "F[0].#subform[10].Pt8_Line7b_DoesNotExtend[0]",
    type: "button",
    value: "N",
  },
  {
    questionId: "part8.preparersRepresentationExtends",
    pdfField: "F[0].#subform[10].Pt8_Line7b_Extend[0]",
    type: "text",
    value: "Y",
  },
  {
    questionId: "part8.preparersSignatureDate",
    pdfField: "F[0].#subform[10].P8_L8b_DatePrepSignature[0]",
    type: "text",
  },
  {
    questionId: "part8.preparersSignature",
    pdfField: "F[0].#subform[10].P8_L8a_PrepSignature[0]",
    type: "button",
  },
  {
    questionId: "part9.signatureOfOfficer",
    pdfField: "F[0].#subform[11].TextField1[4]",
    type: "button",
  },
  {
    questionId: "part9.beneficiaryApprovedForTravel",
    pdfField: "F[0].#subform[11].CheckBox1[2]",
    type: "checkbox",
    value: "1",
  },
  {
    questionId: "part8.petitionReturnedToServiceCenter",
    pdfField: "F[0].#subform[11].CheckBox1[3]",
    type: "checkbox",
    value: "1",
  },
  {
    questionId: "part8.admissionCode",
    pdfField: "F[0].#subform[11].TextField1[5]",
    type: "text",
  },
  {
    questionId: "part9.cbpActionBlock",
    pdfField: "F[0].#subform[11].TextField1[6]",
    type: "text",
  },
];
