/**
 * I-821D Field Mappings
 * Generated on: 2025-12-18T20:06:56.855Z
 * 
 * Complete field mappings for I-821D form
 * Total mappings: 6
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_821D_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part2.ssn",
    "pdfField": "form1[0].#subform[1].P1_Line8_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingCity",
    "pdfField": "form1[0].#subform[0].P1_Line4d_City[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingState",
    "pdfField": "form1[0].#subform[0].P1_Line4e_State[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingZip",
    "pdfField": "form1[0].#subform[0].P1_Line4f_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfBirth",
    "pdfField": "form1[0].#subform[1].P1_Line11b_CountryBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfCitizenship",
    "pdfField": "form1[0].#subform[1].P1_Line12_CountryRes[0]",
    "type": "text"
  }
];
