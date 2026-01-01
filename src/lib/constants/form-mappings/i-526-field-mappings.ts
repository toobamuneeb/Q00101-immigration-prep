/**
 * I-526 Field Mappings
 * Generated on: 2025-12-18T20:06:56.850Z
 * 
 * Complete field mappings for I-526 form
 * Total mappings: 2
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_526_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "investor.dob",
    "pdfField": "form1[0].PG1[0].P1_Line6_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "investor.countryOfBirth",
    "pdfField": "form1[0].PG2[0].P1_Line12_Country[0]",
    "type": "text"
  }
];
