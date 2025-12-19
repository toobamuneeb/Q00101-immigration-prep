/**
 * I-751 Field Mappings
 * Generated on: 2025-12-18T20:06:56.853Z
 * 
 * Complete field mappings for I-751 form
 * Total mappings: 13
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_751_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.mailingCity",
    "pdfField": "form1[0].#subform[1].Line17d_City_Town[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingState",
    "pdfField": "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line15f.zipCode",
    "pdfField": "form1[0].#subform[1].Pt1Line15f_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.dob",
    "pdfField": "form1[0].#subform[0].P1_Line4_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfBirth",
    "pdfField": "form1[0].#subform[0].P1_Line6_CountryOfCitizenship[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfCitizenship",
    "pdfField": "form1[0].#subform[0].P1_Line5_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line17.cityOrTown",
    "pdfField": "form1[0].#subform[1].Pt1Line17_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part4.spouseFamilyName",
    "pdfField": "form1[0].#subform[7].P5_Line6a_SignatureofSpouse[0]",
    "type": "text"
  },
  {
    "questionId": "part4.spouseDob",
    "pdfField": "form1[0].#subform[2].Line3_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part4.spouseSsn",
    "pdfField": "form1[0].#subform[0].P1_Line8_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line17.streetNumberName",
    "pdfField": "form1[0].#subform[1].Pt1Line17_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptType",
    "pdfField": "form1[0].#subform[1].Line17c_Apt_Ste_Flr_Number[0]",
    "type": "text"
  },
  {
    "questionId": "part1.mailingAptNumber",
    "pdfField": "form1[0].#subform[1].Line17c_Unit[0]",
    "type": "text"
  }
];
