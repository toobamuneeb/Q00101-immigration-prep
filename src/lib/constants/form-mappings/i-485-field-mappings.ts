/**
 * I-485 Field Mappings
 * Generated on: 2025-12-18T20:06:56.850Z
 * 
 * Complete field mappings for I-485 form
 * Total mappings: 53
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_485_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.line1.familyName",
    "pdfField": "form1[0].#subform[0].Pt1Line1_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line1.givenName",
    "pdfField": "form1[0].#subform[0].Pt1Line1_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line1.middleName",
    "pdfField": "form1[0].#subform[0].Pt1Line1_MiddleName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3.dOB",
    "pdfField": "form1[0].#subform[0].Pt1Line3_DOB[0]",
    "type": "date"
  },
  {
    "questionId": "part1.line7.cityTownOfBirth",
    "pdfField": "form1[0].#subform[1].Pt1Line7_CityTownOfBirth[0]",
    "type": "radio",
    "value": "no"
  },
  {
    "questionId": "part1.line7.countryOfBirth",
    "pdfField": "form1[0].#subform[1].Pt1Line7_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line8.countryofCitizenshipNationality",
    "pdfField": "form1[0].#subform[1].Pt1Line8_CountryofCitizenshipNationality[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line19.sSN",
    "pdfField": "form1[0].#subform[3].Pt1Line19_SSN[0]",
    "type": "ssn"
  },
  {
    "questionId": "part1.line18.cityOrTown",
    "pdfField": "form1[0].#subform[2].Pt1Line18_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line18.state",
    "pdfField": "form1[0].#subform[2].Pt1Line18_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line18.zipCode",
    "pdfField": "form1[0].#subform[2].Pt1Line18_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.passport",
    "pdfField": "form1[0].#subform[1].Pt1Line10_Passport[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.cityTown",
    "pdfField": "form1[0].#subform[1].Pt1Line10_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.state",
    "pdfField": "form1[0].#subform[1].Pt1Line10_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3A.otherDOB",
    "pdfField": "form1[0].#subform[0].Pt1Line3A_OtherDOB[0]",
    "type": "date"
  },
  {
    "questionId": "part1.line18.recentCountry",
    "pdfField": "form1[0].#subform[3].Pt1Line18_RecentCountry[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line18.currentCityOrTown",
    "pdfField": "form1[0].#subform[2].Pt1Line18_CurrentCityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part4.parent1CountryOfResidence",
    "pdfField": "form1[0].#subform[8].P4Line7_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3B.otherDOB",
    "pdfField": "form1[0].#subform[0].Pt1Line3B_OtherDOB[0]",
    "type": "date"
  },
  {
    "questionId": "part4.parent2CountryOfBirth",
    "pdfField": "form1[0].#subform[8].P4Line8_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.totalChildren",
    "pdfField": "form1[0].#subform[11].Pt6Line1_TotalChildren[0]",
    "type": "text"
  },
  {
    "questionId": "part7.line1.ethnicity",
    "pdfField": "form1[0].#subform[12].Pt7Line1_Ethnicity[0]",
    "type": "text"
  },
  {
    "questionId": "part7.line1.ethnicity",
    "pdfField": "form1[0].#subform[12].Pt7Line1_Ethnicity[1]",
    "type": "text"
  },
  {
    "questionId": "part1.line18.streetNumberName",
    "pdfField": "form1[0].#subform[2].Pt1Line18_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptType",
    "pdfField": "form1[0].#subform[2].Pt1Line18US_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptType",
    "pdfField": "form1[0].#subform[2].Pt1Line18US_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptType",
    "pdfField": "form1[0].#subform[2].Pt1Line18US_Unit[2]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptNumber",
    "pdfField": "form1[0].#subform[2].Pt1Line18US_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.passportNum",
    "pdfField": "form1[0].#subform[1].Pt1Line10_PassportNum[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.expDate",
    "pdfField": "form1[0].#subform[1].Pt1Line10_ExpDate[0]",
    "type": "date"
  },
  {
    "questionId": "part1.line6.cB_Sex",
    "pdfField": "form1[0].#subform[1].Pt1Line6_CB_Sex[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.cB_Sex",
    "pdfField": "form1[0].#subform[1].Pt1Line6_CB_Sex[1]",
    "type": "text"
  },
  {
    "questionId": "part1.line4.alienNumber",
    "pdfField": "form1[0].#subform[1].Pt1Line4_AlienNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line9.uSCISAccountNumber",
    "pdfField": "form1[0].#subform[1].Pt1Line9_USCISAccountNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingCareOfName",
    "pdfField": "form1[0].#subform[2].Part1_Item18_InCareOfName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.visaNum",
    "pdfField": "form1[0].#subform[1].Pt1Line10_VisaNum[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.dateofArrival",
    "pdfField": "form1[0].#subform[1].Pt1Line10_DateofArrival[0]",
    "type": "date"
  },
  {
    "questionId": "part1.i94Number",
    "pdfField": "form1[0].#subform[2].P1Line12_I94[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line12.status",
    "pdfField": "form1[0].#subform[2].Pt1Line12_Status[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line14.status",
    "pdfField": "form1[0].#subform[2].Pt1Line14_Status[0]",
    "type": "text"
  },
  {
    "questionId": "part5.line1.familyName",
    "pdfField": "form1[0].#subform[8].Pt5Line1_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part5.line1.givenName",
    "pdfField": "form1[0].#subform[8].Pt5Line1_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part5.line6.familyName",
    "pdfField": "form1[0].#subform[9].Pt5Line6_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part5.line6.givenName",
    "pdfField": "form1[0].#subform[9].Pt5Line6_GivenName[0]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[0]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[1]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[2]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[3]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[4]",
    "type": "text"
  },
  {
    "questionId": "part6.line1.maritalStatus",
    "pdfField": "form1[0].#subform[9].Pt6Line1_MaritalStatus[5]",
    "type": "text"
  },
  {
    "questionId": "part6.line3.timesMarried",
    "pdfField": "form1[0].#subform[9].Pt6Line3_TimesMarried[0]",
    "type": "text"
  },
  {
    "questionId": "part6.line4.familyName",
    "pdfField": "form1[0].#subform[9].Pt6Line4_FamilyName[0]",
    "type": "text"
  },
  {
    "questionId": "part6.line4.givenName",
    "pdfField": "form1[0].#subform[9].Pt6Line4_GivenName[0]",
    "type": "text"
  }
];
