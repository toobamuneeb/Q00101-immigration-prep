/**
 * I-212 Field Mappings
 * Generated with AI: 2025-12-23T23:58:06.868Z
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_212_FIELD_MAPPINGS: FieldMapping[] = [
  {
    questionId: "part1.attorneyG28Attached",
    pdfField: "form1[0].Page1[0].CheckBox1[0]",
    type: "radio",
    value: "yes",
  },
  {
    questionId: "part1.attorneyStateBarNumber",
    pdfField: "form1[0].Page1[0].AttorneyStateBarNumber[0]",
  },
  {
    questionId: "part1.attorneyUSCISAccountNumber",
    pdfField: "form1[0].Page1[0].USCISELISAcctNumber[0]",
  },
  {
    questionId: "part1.alienNumber",
    pdfField: "form1[0].Page1[0].p1Line1AlienNumber[0]",
  },
  {
    questionId: "part1.fullName.familyName",
    pdfField: "form1[0].Page1[0].p1Line2FamilyName[0]",
  },
  {
    questionId: "part1.fullName.givenName",
    pdfField: "form1[0].Page1[0].p1Line2GivenName[0]",
  },
  {
    questionId: "part1.fullName.middleName",
    pdfField: "form1[0].Page1[0].p1Line2MiddleName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.familyName",
    pdfField: "form1[0].Page1[0].p1Line3FamilyName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.givenName",
    pdfField: "form1[0].Page1[0].p1Line3GivenName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.middleName",
    pdfField: "form1[0].Page1[0].p1Line3MiddleName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.familyName2",
    pdfField: "form1[0].Page1[0].p1Line4FamilyName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.givenName2",
    pdfField: "form1[0].Page1[0].p1Line4GivenName[0]",
  },
  {
    questionId: "part1.otherNamesUsed.middleName2",
    pdfField: "form1[0].Page1[0].p1Line4MiddleName[0]",
  },
  {
    questionId: "part1.mailingAddress.inCareOfName",
    pdfField: "form1[0].Page1[0].p1Line5InCareofName[0]",
  },
  {
    questionId: "part1.mailingAddress.streetNumberName",
    pdfField: "form1[0].Page1[0].p1Line5StreetNumName[0]",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].Page1[0].p1Line5Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].Page1[0].p1Line5Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.mailingAddress.unit",
    pdfField: "form1[0].Page1[0].p1Line5Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.mailingAddress.aptSteFlrNumber",
    pdfField: "form1[0].Page1[0].p1Line5AptSteFlrNumber[0]",
  },
  {
    questionId: "part1.mailingAddress.cityOrTown",
    pdfField: "form1[0].Page1[0].p1Line5CityOrTown[0]",
  },
  {
    questionId: "part1.mailingAddress.state",
    pdfField: "form1[0].Page1[0].p1Line5State[0]",
  },
  {
    questionId: "part1.mailingAddress.zipCode",
    pdfField: "form1[0].Page1[0].p1Line5ZipCode[0]",
  },
  {
    questionId: "part1.mailingAddress.province",
    pdfField: "form1[0].Page1[0].p1Line5Province[0]",
  },
  {
    questionId: "part1.mailingAddress.postalCode",
    pdfField: "form1[0].Page1[0].p1Line5PostalCode[0]",
  },
  {
    questionId: "part1.mailingAddress.country",
    pdfField: "form1[0].Page1[0].p1Line5Country[0]",
  },
  {
    questionId: "part1.mailingAddress.sameAsPhysical",
    pdfField: "form1[0].Page2[0].p1Line6YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.mailingAddress.sameAsPhysical",
    pdfField: "form1[0].Page2[0].p1Line6YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.physicalAddress.streetNumberName",
    pdfField: "form1[0].Page2[0].p1Line7StreetNumName[0]",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].Page2[0].p1Line7Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].Page2[0].p1Line7Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part1.physicalAddress.unit",
    pdfField: "form1[0].Page2[0].p1Line7Unit[2]",
    type: "radio",
    value: "FLR",
  },
  {
    questionId: "part1.physicalAddress.aptSteFlrNumber",
    pdfField: "form1[0].Page2[0].p1Line7AptSteFlrNumber[0]",
  },
  {
    questionId: "part1.physicalAddress.cityOrTown",
    pdfField: "form1[0].Page2[0].p1Line7CityOrTown[0]",
  },
  {
    questionId: "part1.physicalAddress.state",
    pdfField: "form1[0].Page2[0].p1Line7State[0]",
  },
  {
    questionId: "part1.physicalAddress.zipCode",
    pdfField: "form1[0].Page2[0].p1Line7ZipCode[0]",
  },
  {
    questionId: "part1.physicalAddress.province",
    pdfField: "form1[0].Page2[0].p1Line7Province[0]",
  },
  {
    questionId: "part1.physicalAddress.postalCode",
    pdfField: "form1[0].Page2[0].p1Line7PostalCode[0]",
  },
  {
    questionId: "part1.physicalAddress.country",
    pdfField: "form1[0].Page2[0].p1Line7Country[0]",
  },
  {
    questionId: "part1.otherInformation.dosConsularCaseNumber",
    pdfField: "form1[0].Page2[0].p1Line19aDOSNumber[0]",
  },
  {
    questionId: "part1.otherInformation.embassyCity",
    pdfField: "form1[0].Page2[0].p1Line20City[0]",
  },
  {
    questionId: "part1.otherInformation.embassyCountry",
    pdfField: "form1[0].Page2[0].p1Line20Country[0]",
  },
  {
    questionId: "part1.otherInformation.uscisReceiptNumber",
    pdfField: "form1[0].Page2[0].p1Line21USCISReceipt[0]",
  },
  {
    questionId: "part1.otherInformation.ssn",
    pdfField: "form1[0].Page2[0].p1Line11SSN[0]",
  },
  {
    questionId: "part1.otherInformation.uscisOnlineAccountNumber",
    pdfField: "form1[0].Page2[0].p1Line12USCISNumber[0]",
  },
  {
    questionId: "part1.otherInformation.sex",
    pdfField: "form1[0].Page2[0].p1Line13Gender[0]",
    type: "radio",
    value: "F",
  },
  {
    questionId: "part1.otherInformation.sex",
    pdfField: "form1[0].Page2[0].p1Line13Gender[1]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part1.otherInformation.dateOfBirth",
    pdfField: "form1[0].Page2[0].p2Line14DateOfBirth[0]",
  },
  {
    questionId: "part1.otherInformation.cityOfBirth",
    pdfField: "form1[0].Page2[0].p1Line15CityTownofBirth[0]",
  },
  {
    questionId: "part1.otherInformation.stateProvinceOfBirth",
    pdfField: "form1[0].Page2[0].p1Line16StateProvofBirth[0]",
  },
  {
    questionId: "part1.otherInformation.countryOfBirth",
    pdfField: "form1[0].Page2[0].p1Line17CountryofBirth[0]",
  },
  {
    questionId: "part1.otherInformation.countryOfCitizenship",
    pdfField: "form1[0].Page2[0].p1Line18Citizenship[0]",
  },
  {
    questionId: "part1.otherInformation.fileLocation",
    pdfField: "form1[0].Page2[0].p1Line21FileLocation[0]",
  },
  {
    questionId: "part1.otherInformation.dateFiled",
    pdfField: "form1[0].Page2[0].p1Line21DateFiled[0]",
  },
  {
    questionId: "part1.otherInformation.submittingI601",
    pdfField: "form1[0].Page2[0].p1Line22YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part1.otherInformation.submittingI601",
    pdfField: "form1[0].Page2[0].p1Line22YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part1.otherInformation.i601ReceiptNumber",
    pdfField: "form1[0].Page2[0].p1Line23601Receipt[0]",
  },
  {
    questionId: "part1.otherInformation.i601FileLocation",
    pdfField: "form1[0].Page2[0].p1Line23FileLocation[0]",
  },
  {
    questionId: "part1.otherInformation.i601DateFiled",
    pdfField: "form1[0].Page2[0].p1Line23DateFiled[0]",
  },
  {
    questionId: "part2.removalAsArrivingAlien",
    pdfField: "form1[0].Page3[0].p2Line1CheckBox[0]",
    type: "radio",
    value: "1b",
  },
  {
    questionId: "part2.removalAsArrivingAlien",
    pdfField: "form1[0].Page3[0].p2Line1CheckBox[1]",
    type: "radio",
    value: "1c",
  },
  {
    questionId: "part2.removalAsArrivingAlien",
    pdfField: "form1[0].Page3[0].p2Line1CheckBox[2]",
    type: "radio",
    value: "1d",
  },
  {
    questionId: "part2.removalAsArrivingAlienYesNo",
    pdfField: "form1[0].Page3[0].p2Line1YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.removalAsArrivingAlienYesNo",
    pdfField: "form1[0].Page3[0].p2Line1YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.locationRemoved.city",
    pdfField: "form1[0].Page3[0].p2Line3City[0]",
  },
  {
    questionId: "part2.dateRemoved",
    pdfField: "form1[0].Page3[0].p2Line2DateRemoved[0]",
  },
  {
    questionId: "part2.locationRemoved.state",
    pdfField: "form1[0].Page3[0].p2Line4State[0]",
  },
  {
    questionId: "part2.removalAsDeportableAlien",
    pdfField: "form1[0].Page3[0].p2Line5CheckBox[0]",
    type: "radio",
    value: "5b",
  },
  {
    questionId: "part2.removalAsDeportableAlien",
    pdfField: "form1[0].Page3[0].p2Line5CheckBox[1]",
    type: "radio",
    value: "5c",
  },
  {
    questionId: "part2.removalAsDeportableAlien",
    pdfField: "form1[0].Page3[0].p2Line5CheckBox[2]",
    type: "radio",
    value: "5d",
  },
  {
    questionId: "part2.removalAsDeportableAlienYesNo",
    pdfField: "form1[0].Page3[0].p2Line5YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.removalAsDeportableAlienYesNo",
    pdfField: "form1[0].Page3[0].p2Line5YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.locationRemovedAsDeportable.city",
    pdfField: "form1[0].Page3[0].p2Line7City[0]",
  },
  {
    questionId: "part2.locationRemovedAsDeportable.state",
    pdfField: "form1[0].Page3[0].p2Line7State[0]",
  },
  {
    questionId: "part2.entryAfterUnlawfulPresenceYesNo",
    pdfField: "form1[0].Page3[0].p2Line8YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.entryAfterUnlawfulPresenceYesNo",
    pdfField: "form1[0].Page3[0].p2Line8YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.unlawfulPresence.fromDate",
    pdfField: "form1[0].Page3[0].p2Line9From[0]",
  },
  {
    questionId: "part2.unlawfulPresence.toDate",
    pdfField: "form1[0].Page3[0].p2Line9To[0]",
  },
  {
    questionId: "part2.unlawfulPresence.departureDate",
    pdfField: "form1[0].Page3[0].p2Line10DateDeparted[0]",
  },
  {
    questionId: "part2.unlawfulPresence.departureLocation.city",
    pdfField: "form1[0].Page3[0].p2Line11City[0]",
  },
  {
    questionId: "part2.unlawfulPresence.departureLocation.state",
    pdfField: "form1[0].Page3[0].p2Line11State[0]",
  },
  {
    questionId: "part2.unlawfulPresence.reentryLocation.city",
    pdfField: "form1[0].Page3[0].p2Line12City[0]",
  },
  {
    questionId: "part2.unlawfulPresence.reentryLocation.state",
    pdfField: "form1[0].Page3[0].p2Line12State[0]",
  },
  {
    questionId: "part2.unlawfulPresence.reentryDate",
    pdfField: "form1[0].Page3[0].p2Line3ReEnterDate[0]",
  },
  {
    questionId: "part2.entryAfterRemovalYesNo",
    pdfField: "form1[0].Page4[0].p2Line14YesNo[0]",
    type: "radio",
    value: "Y",
  },
  {
    questionId: "part2.entryAfterRemovalYesNo",
    pdfField: "form1[0].Page4[0].p2Line14YesNo[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part2.entryAfterRemoval.exclusionDate",
    pdfField: "form1[0].Page4[0].p2Line15DateExcluded[0]",
  },
  {
    questionId: "part2.entryAfterRemoval.reentryLocation.city",
    pdfField: "form1[0].Page4[0].p2Line16City[0]",
  },
  {
    questionId: "part2.entryAfterRemoval.reentryLocation.state",
    pdfField: "form1[0].Page4[0].p2Line16State[0]",
  },
  {
    questionId: "part2.entryAfterRemoval.reentryDate",
    pdfField: "form1[0].Page4[0].p2Line17DateEntered[0]",
  },
  {
    questionId: "part3.requestForPermission.status",
    pdfField: "form1[0].Page4[0].p3Line1CheckBox[0]",
    type: "radio",
    value: "P",
  },
  {
    questionId: "part3.requestForPermission.status",
    pdfField: "form1[0].Page4[0].p3Line1CheckBox[1]",
    type: "radio",
    value: "V",
  },
  {
    questionId: "part3.requestForPermission.status",
    pdfField: "form1[0].Page4[0].p3Line1CheckBox[2]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part3.requestForPermission.status",
    pdfField: "form1[0].Page4[0].p3Line1CheckBox[3]",
    type: "radio",
    value: "O",
  },
  {
    questionId: "part3.requestForPermission.otherStatusExplanation",
    pdfField: "form1[0].Page4[0].p3Line1OtherExplain[0]",
  },
  {
    questionId: "part3.requestForPermission.reasonForReentry",
    pdfField: "form1[0].Page4[0].p3Line2Explain[0]",
  },
  {
    questionId: "part3.familyMembers.familyName",
    pdfField: "form1[0].Page4[0].p3Line3FamilyName[0]",
  },
  {
    questionId: "part3.familyMembers.givenName",
    pdfField: "form1[0].Page4[0].p3Line3GivenName[0]",
  },
  {
    questionId: "part3.familyMembers.middleName",
    pdfField: "form1[0].Page4[0].p3Line3MiddleName[0]",
  },
  {
    questionId: "part3.familyMembers.relationship",
    pdfField: "form1[0].Page4[0].p3Line3Relationship[0]",
  },
  {
    questionId: "part3.relativeStatus",
    pdfField: "form1[0].Page4[0].p3Line4CheckBox[0]",
    type: "radio",
    value: "LPR",
  },
  {
    questionId: "part3.relativeStatus",
    pdfField: "form1[0].Page4[0].p3Line4CheckBox[1]",
    type: "radio",
    value: "CIT",
  },
  {
    questionId: "part4.ethnicity",
    pdfField: "form1[0].Page4[0].p4Line1Ethnicity[0]",
    type: "radio",
    value: "H",
  },
  {
    questionId: "part4.ethnicity",
    pdfField: "form1[0].Page4[0].p4Line1Ethnicity[1]",
    type: "radio",
    value: "N",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].Page4[0].p4Line2Race[0]",
    type: "checkbox",
    value: "AS",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].Page4[0].p4Line2Race[1]",
    type: "checkbox",
    value: "WH",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].Page4[0].p4Line2Race[2]",
    type: "checkbox",
    value: "BL",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].Page4[0].p4Line2Race[3]",
    type: "checkbox",
    value: "AI",
  },
  {
    questionId: "part4.race",
    pdfField: "form1[0].Page4[0].p4Line2Race[4]",
    type: "checkbox",
    value: "HW",
  },
  {
    questionId: "part4.heightFeet",
    pdfField: "form1[0].Page4[0].p4Line3HeightFeet[0]",
    type: "choice",
  },
  {
    questionId: "part4.heightInches",
    pdfField: "form1[0].Page4[0].p4Line3HeightInches[0]",
    type: "text",
  },
  {
    questionId: "part4.weight",
    pdfField: "form1[0].Page4[0].p4Line4HeightInches2[0]",
    type: "text",
  },
  {
    questionId: "part4.weight1",
    pdfField: "form1[0].Page4[0].p4Line4HeightInches1[0]",
    type: "text",
  },
  {
    questionId: "part4.weight2",
    pdfField: "form1[0].Page4[0].p4Line4HeightInches3[0]",
    type: "button",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[0]",
    type: "radio",
    value: "BU",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[1]",
    type: "radio",
    value: "BL",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[2]",
    type: "radio",
    value: "BN",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[3]",
    type: "radio",
    value: "GR",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[4]",
    type: "radio",
    value: "GN",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[5]",
    type: "radio",
    value: "HA",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[6]",
    type: "radio",
    value: "MA",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[7]",
    type: "radio",
    value: "PN",
  },
  {
    questionId: "part4.eyeColor",
    pdfField: "form1[0].Page4[0].p4Line5Eyecolor[8]",
    type: "radio",
    value: "UN",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[0]",
    type: "radio",
    value: "NH",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[1]",
    type: "radio",
    value: "BL",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[2]",
    type: "radio",
    value: "BN",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[3]",
    type: "radio",
    value: "BR",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[4]",
    type: "radio",
    value: "GR",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[5]",
    type: "radio",
    value: "RD",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[6]",
    type: "radio",
    value: "SA",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[7]",
    type: "radio",
    value: "WH",
  },
  {
    questionId: "part4.hairColor",
    pdfField: "form1[0].Page4[0].p4Line6Haircolor[8]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.streetNumberName",
    pdfField: "form1[0].Page5[0].p5Line1_StreetNumName[0]",
    type: "button",
  },
  {
    questionId: "part5.addressHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line1_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.addressHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line1_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.addressHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line1_Unit[2]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.aptSteFlrNumber",
    pdfField: "form1[0].Page5[0].p5Line1_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.cityOrTown",
    pdfField: "form1[0].Page5[0].p5Line1_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part5.addressHistory1.state",
    pdfField: "form1[0].Page5[0].p5Line1_State[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.zipCode",
    pdfField: "form1[0].Page5[0].p5Line1_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.province",
    pdfField: "form1[0].Page5[0].p5Line1_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.postalCode",
    pdfField: "form1[0].Page5[0].p5Line1_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.country",
    pdfField: "form1[0].Page5[0].p5Line1_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.fromDate",
    pdfField: "form1[0].Page5[0].p5Line2_From[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory1.toDate",
    pdfField: "form1[0].Page5[0].p5Line2_To[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.streetNumberName",
    pdfField: "form1[0].Page5[0].p5Line3_StreetNumName[0]",
    type: "button",
  },
  {
    questionId: "part5.addressHistory2.unitType",
    pdfField: "form1[0].Page5[0].p5Line3_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.addressHistory2.unitType",
    pdfField: "form1[0].Page5[0].p5Line3_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.addressHistory2.unitType",
    pdfField: "form1[0].Page5[0].p5Line3_Unit[2]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.aptSteFlrNumber",
    pdfField: "form1[0].Page5[0].p5Line3_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.cityOrTown",
    pdfField: "form1[0].Page5[0].p5Line3_CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part5.addressHistory2.state",
    pdfField: "form1[0].Page5[0].p5Line3_State[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.zipCode",
    pdfField: "form1[0].Page5[0].p5Line3_ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.province",
    pdfField: "form1[0].Page5[0].p5Line3_Province[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.postalCode",
    pdfField: "form1[0].Page5[0].p5Line3_PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.country",
    pdfField: "form1[0].Page5[0].p5Line3_Country[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.fromDate",
    pdfField: "form1[0].Page5[0].p5Line4_From[0]",
    type: "text",
  },
  {
    questionId: "part5.addressHistory2.toDate",
    pdfField: "form1[0].Page5[0].p5Line4_To[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.employerName",
    pdfField: "form1[0].Page5[0].p1Line24EmployerName[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.streetNumberName",
    pdfField: "form1[0].Page5[0].p1Line25StreetNumName[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.aptSteFlrNumber",
    pdfField: "form1[0].Page5[0].p5Line6_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.cityOrTown",
    pdfField: "form1[0].Page5[0].p1Line25CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part5.employmentHistory1.state",
    pdfField: "form1[0].Page5[0].p1Line25State[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.zipCode",
    pdfField: "form1[0].Page5[0].p1Line25ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.province",
    pdfField: "form1[0].Page5[0].p1Line25Province[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.postalCode",
    pdfField: "form1[0].Page5[0].p1Line25PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.country",
    pdfField: "form1[0].Page5[0].p1Line25Country[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.fromDate",
    pdfField: "form1[0].Page5[0].p1Line8From[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.toDate",
    pdfField: "form1[0].Page5[0].p1Line8To[0]",
    type: "button",
  },
  {
    questionId: "part5.employmentHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line6_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.employmentHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line6_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.employmentHistory1.unitType",
    pdfField: "form1[0].Page5[0].p5Line6_Unit[2]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory1.occupation",
    pdfField: "form1[0].Page5[0].p1Line26Occupation[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.employerName",
    pdfField: "form1[0].Page6[0].p1Line28EmployerName[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.streetNumberName",
    pdfField: "form1[0].Page6[0].p1Line29StreetNumName[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.aptSteFlrNumber",
    pdfField: "form1[0].Page6[0].p5Line10_AptSteFlrNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.cityOrTown",
    pdfField: "form1[0].Page6[0].p1Line29CityOrTown[0]",
    type: "choice",
  },
  {
    questionId: "part5.employmentHistory2.state",
    pdfField: "form1[0].Page6[0].p1Line29State[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.zipCode",
    pdfField: "form1[0].Page6[0].p1Line29ZipCode[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.province",
    pdfField: "form1[0].Page6[0].p1Line29Province[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.postalCode",
    pdfField: "form1[0].Page6[0].p1Line29PostalCode[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.country",
    pdfField: "form1[0].Page6[0].p1Line29Country[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.occupation",
    pdfField: "form1[0].Page6[0].p1Line30Occupation[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.fromDate",
    pdfField: "form1[0].Page6[0].p1Line31From[0]",
    type: "text",
  },
  {
    questionId: "part5.employmentHistory2.toDate",
    pdfField: "form1[0].Page6[0].p1Line31To[0]",
    type: "button",
  },
  {
    questionId: "part5.employmentHistory2.unitType",
    pdfField: "form1[0].Page6[0].p5Line10_Unit[0]",
    type: "radio",
    value: "APT",
  },
  {
    questionId: "part5.employmentHistory2.unitType",
    pdfField: "form1[0].Page6[0].p5Line10_Unit[1]",
    type: "radio",
    value: "STE",
  },
  {
    questionId: "part5.employmentHistory2.unitType",
    pdfField: "form1[0].Page6[0].p5Line10_Unit[2]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.familyName",
    pdfField: "form1[0].Page6[0].p5Line1FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.givenName",
    pdfField: "form1[0].Page6[0].p5Line1GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.middleName",
    pdfField: "form1[0].Page6[0].p5Line1MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherBirthName.familyName",
    pdfField: "form1[0].Page6[0].p5Line2FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherBirthName.givenName",
    pdfField: "form1[0].Page6[0].p5Line2GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherBirthName.middleName",
    pdfField: "form1[0].Page6[0].p5Line2MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.dateOfBirth",
    pdfField: "form1[0].Page6[0].p5Line3DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.countryOfBirth",
    pdfField: "form1[0].Page6[0].p5Line5CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.currentCityTownResidence",
    pdfField: "form1[0].Page6[0].p5Line6CityTownResidence[0]",
    type: "text",
  },
  {
    questionId: "part5.motherInfo.currentCountryResidence",
    pdfField: "form1[0].Page6[0].p5Line7CountryCitizenship[0]",
    type: "text",
  },
  {
    questionId: "part5.fatherInfo.familyName",
    pdfField: "form1[0].Page6[0].p5Line8FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.fatherInfo.givenName",
    pdfField: "form1[0].Page6[0].p5Line8GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersMiddleName",
    pdfField: "form1[0].Page6[0].p5Line8MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersBirthFamilyName",
    pdfField: "form1[0].Page6[0].p5Line9FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersBirthGivenName",
    pdfField: "form1[0].Page6[0].p5Line9GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersBirthMiddleName",
    pdfField: "form1[0].Page6[0].p5Line9MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersDateOfBirth",
    pdfField: "form1[0].Page6[0].p5Line10DateOfBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersCityTownOfBirth",
    pdfField: "form1[0].Page6[0].p5Line11CityTownofBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersCountryOfBirth",
    pdfField: "form1[0].Page6[0].p5Line12CountryofBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersCurrentCityTownOfResidence",
    pdfField: "form1[0].Page6[0].p5Line13CityTownofBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.fathersCurrentCountryOfResidence",
    pdfField: "form1[0].Page6[0].p5Line14Citizenship[0]",
    type: "text",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[0]",
    type: "radio",
    value: "S",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[1]",
    type: "radio",
    value: "D",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[2]",
    type: "radio",
    value: "W",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[3]",
    type: "radio",
    value: "E",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[4]",
    type: "radio",
    value: "A",
  },
  {
    questionId: "part5.currentMaritalStatusOther",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[5]",
    type: "text",
  },
  {
    questionId: "part5.numberOfMarriages",
    pdfField: "form1[0].Page6[0].p6Line2DependentChildren[0]",
    type: "text",
  },
  {
    questionId: "part5.currentMaritalStatus",
    pdfField: "form1[0].Page6[0].p6Line1MaritalStatus[6]",
    type: "radio",
    value: "M",
  },
  {
    questionId: "part5.mothersCityTownOfBirth",
    pdfField: "form1[0].Page6[0].p5Line4CityTownofBirth[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpouseFamilyName",
    pdfField: "form1[0].Page7[0].p6Line3FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpouseGivenName",
    pdfField: "form1[0].Page7[0].p6Line3GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpouseMiddleName",
    pdfField: "form1[0].Page7[0].p6Line3MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpouseDateOfBirth",
    pdfField: "form1[0].Page7[0].p6Line5Date[0]",
    type: "text",
  },
  {
    questionId: "part5.dateOfMarriageToCurrentSpouse",
    pdfField: "form1[0].Page7[0].p6Line6DateOfMarriage[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpouseAlienNumber",
    pdfField: "form1[0].Page7[0].p6Line4AlienNumber[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpousePlaceOfBirthCity",
    pdfField: "form1[0].Page7[0].p6Line7City[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpousePlaceOfBirthCountry",
    pdfField: "form1[0].Page7[0].p6Line7Country[0]",
    type: "text",
  },
  {
    questionId: "part5.currentSpousePlaceOfBirthProvince",
    pdfField: "form1[0].Page7[0].p6Line7Province[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToCurrentSpouseCity",
    pdfField: "form1[0].Page7[0].p6Line8City[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToCurrentSpouseCountry",
    pdfField: "form1[0].Page7[0].p6Line8Country[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToCurrentSpouseProvince",
    pdfField: "form1[0].Page7[0].p6Line8Province[0]",
    type: "text",
  },
  {
    questionId: "part5.priorSpouseFamilyName",
    pdfField: "form1[0].Page7[0].p6Line9FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part5.priorSpouseGivenName",
    pdfField: "form1[0].Page7[0].p6Line9GivenName[0]",
    type: "text",
  },
  {
    questionId: "part5.priorSpouseMiddleName",
    pdfField: "form1[0].Page7[0].p6Line9MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part5.priorSpouseDateOfBirth",
    pdfField: "form1[0].Page7[0]._Date[0]",
    type: "text",
  },
  {
    questionId: "part5.dateOfMarriageToPriorSpouse",
    pdfField: "form1[0].Page7[0].p6Line9DateofMarriage[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToPriorSpouseCity",
    pdfField: "form1[0].Page7[0].p6Line12City[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToPriorSpouseCountry",
    pdfField: "form1[0].Page7[0].p6Line12Country[0]",
    type: "text",
  },
  {
    questionId: "part5.placeOfMarriageToPriorSpouseProvince",
    pdfField: "form1[0].Page7[0].p6Line12Province[0]",
    type: "text",
  },
  {
    questionId: "part5.dateMarriageWithPriorSpouseEnded",
    pdfField: "form1[0].Page7[0].p6Line13Date[0]",
    type: "text",
  },
  {
    questionId: "part5.placeWhereMarriageWithPriorSpouseEndedCity",
    pdfField: "form1[0].Page7[0].p6Line14City[0]",
    type: "text",
  },
  {
    questionId: "part5.placeWhereMarriageWithPriorSpouseEndedCountry",
    pdfField: "form1[0].Page7[0].p6Line14Country[0]",
    type: "text",
  },
  {
    questionId: "part5.placeWhereMarriageWithPriorSpouseEndedProvince",
    pdfField: "form1[0].Page7[0].p6Line14Province[0]",
    type: "text",
  },
  {
    questionId: "part6.applicantDaytimePhoneNumber",
    pdfField: "form1[0].Page8[0].p7Line3DayPhone[0]",
    type: "text",
  },
  {
    questionId: "part6.applicantMobilePhoneNumber",
    pdfField: "form1[0].Page8[0].p7Line4MobilePhone[0]",
    type: "text",
  },
  {
    questionId: "part6.applicantEmailAddress",
    pdfField: "form1[0].Page8[0].p7Line5Email[0]",
    type: "text",
  },
  {
    questionId: "part6.applicantSignature",
    pdfField: "form1[0].Page8[0].p7Line6Signature[0]",
    type: "text",
  },
  {
    questionId: "part6.dateOfSignature",
    pdfField: "form1[0].Page8[0].p7Line6DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterBusinessOrOrganizationName",
    pdfField: "form1[0].Page8[0].p8Line2BusinessorOrg[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterGivenName",
    pdfField: "form1[0].Page8[0].p8Line1GivenName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterFamilyName",
    pdfField: "form1[0].Page8[0].p8Line1FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterDaytimePhoneNumber",
    pdfField: "form1[0].Page8[0].p8Line4DayPhone[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterMobilePhoneNumber",
    pdfField: "form1[0].Page8[0].p8Line5MobilePhone[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterEmailAddress",
    pdfField: "form1[0].Page8[0].p8Line6Email[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterLanguage",
    pdfField: "form1[0].Page8[0].p8InterpreterLanguage[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterSignature",
    pdfField: "form1[0].Page8[0].p8Line7Signature[0]",
    type: "text",
  },
  {
    questionId: "part7.interpreterDateOfSignature",
    pdfField: "form1[0].Page8[0].p8Line7DateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerBusinessOrOrganizationName",
    pdfField: "form1[0].Page8[0].p9Line2BusinessorOrg[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerGivenName",
    pdfField: "form1[0].Page8[0].p9Line1GivenName[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerFamilyName",
    pdfField: "form1[0].Page8[0].p9Line1FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerDaytimePhoneNumber",
    pdfField: "form1[0].Page8[0].p9Line4DayPhone[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerMobilePhoneNumber",
    pdfField: "form1[0].Page8[0].p9Line5MobilePhone[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerEmailAddress",
    pdfField: "form1[0].Page8[0].p9Line6Email[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerSignature",
    pdfField: "form1[0].Page9[0].p9Line8aSignature[0]",
    type: "text",
  },
  {
    questionId: "part8.preparerDateOfSignature",
    pdfField: "form1[0].Page9[0].p9Line8bDateofSignature[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationFamilyName",
    pdfField: "form1[0].Page11[0].p1Line2FamilyName[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationGivenName",
    pdfField: "form1[0].Page11[0].p1Line2GivenName[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationMiddleName",
    pdfField: "form1[0].Page11[0].p1Line2MiddleName[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber",
    pdfField: "form1[0].Page11[0].p10Line3PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber",
    pdfField: "form1[0].Page11[0].p10Line3PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber",
    pdfField: "form1[0].Page11[0].p10Line3ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationDetails",
    pdfField: "form1[0].Page11[0].p10Line3AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber2",
    pdfField: "form1[0].Page11[0].p10Line4PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber2",
    pdfField: "form1[0].Page11[0].p10Line4PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber2",
    pdfField: "form1[0].Page11[0].p10Line4ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationDetails2",
    pdfField: "form1[0].Page11[0].p10Line4AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber3",
    pdfField: "form1[0].Page11[0].p10Line5PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber3",
    pdfField: "form1[0].Page11[0].p10Line5PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber3",
    pdfField: "form1[0].Page11[0].p10Line5ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber4",
    pdfField: "form1[0].Page11[0].p10Line6PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber4",
    pdfField: "form1[0].Page11[0].p10Line6PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber4",
    pdfField: "form1[0].Page11[0].p10Line6ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPageNumber5",
    pdfField: "form1[0].Page11[0].p10Line7PageNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationPartNumber5",
    pdfField: "form1[0].Page11[0].p10Line7PartNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationItemNumber5",
    pdfField: "form1[0].Page11[0].p10Line7ItemNumber[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationDetails3",
    pdfField: "form1[0].Page11[0].p10Line7AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationDetails4",
    pdfField: "form1[0].Page11[0].p10Line5AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationDetails5",
    pdfField: "form1[0].Page11[0].p10Line6AdditionalInfo[0]",
    type: "text",
  },
  {
    questionId: "part9.additionalInformationAlienNumber",
    pdfField: "form1[0].Page11[0].p1Line1AlienNumber[0]",
    type: "text",
  },
];
