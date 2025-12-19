/**
 * I-360 Field Mappings
 * Generated on: 2025-12-18T20:06:56.849Z
 * 
 * Complete field mappings for I-360 form
 * Total mappings: 13
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_360_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.line3.sSN",
    "pdfField": "form1[0].#subform[0].#area[1].Pt1Line3_SSN[0]",
    "type": "ssn"
  },
  {
    "questionId": "part1.line6.cityOrTown",
    "pdfField": "form1[0].#subform[0].Pt1Line6_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.state",
    "pdfField": "form1[0].#subform[0].Pt1Line6_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.zipCode",
    "pdfField": "form1[0].#subform[0].Pt1Line6_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line7.cityOrTown",
    "pdfField": "form1[0].#subform[1].Pt1Line7_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.country",
    "pdfField": "form1[0].#subform[0].Pt1Line6_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part7.line7.numberofSpouseMarriages",
    "pdfField": "form1[0].#subform[7].Pt7Line7_NumberofSpouseMarriages[0]",
    "type": "text"
  },
  {
    "questionId": "part12.3.email",
    "pdfField": "form1[0].#subform[11].#subform[12].Pt9_Email[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.streetNumberName",
    "pdfField": "form1[0].#subform[0].Pt1Line6_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.unit",
    "pdfField": "form1[0].#subform[0].Pt1Line6_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line6.unit",
    "pdfField": "form1[0].#subform[0].Pt1Line6_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part6.line6e.workTelephoneNumber",
    "pdfField": "form1[0].#subform[6].Pt6Line6e_WorkTelephoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line6d.daytimeTelephoneNumber",
    "pdfField": "form1[0].#subform[6].Pt4Line6d_DaytimeTelephoneNumber[0]",
    "type": "text"
  }
];
