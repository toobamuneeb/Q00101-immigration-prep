/**
 * I-131 Field Mappings
 * Generated on: 2025-12-18T20:06:56.847Z
 * 
 * Complete field mappings for I-131 form
 * Total mappings: 12
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_131_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part2.mailingCity",
    "pdfField": "form1[0].P5[0].Part2_Line3_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingState",
    "pdfField": "form1[0].P5[0].Part2_Line3_State[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingZip",
    "pdfField": "form1[0].P5[0].Part2_Line3_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.dob",
    "pdfField": "form1[0].P5[0].Part2_Line9_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfBirth",
    "pdfField": "form1[0].P5[0].Part2_Line3_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfCitizenship",
    "pdfField": "form1[0].P5[0].Part2_Line4_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part2.ssn",
    "pdfField": "form1[0].P5[0].#area[1].Part2_Line10_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part3.ethnicity",
    "pdfField": "form1[0].P5[0].Part2_Line4_CityTown[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingStreet",
    "pdfField": "form1[0].P5[0].Part2_Line3_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingAptType",
    "pdfField": "form1[0].P5[0].Part2_Line3_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingAptNumber",
    "pdfField": "form1[0].P5[0].Part2_Line3_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part2.gender",
    "pdfField": "form1[0].P5[0].Part2_Line8_Gender[0]",
    "type": "text"
  }
];
