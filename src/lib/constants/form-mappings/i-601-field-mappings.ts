/**
 * I-601 Field Mappings
 * Generated on: 2025-12-18T20:06:56.853Z
 * 
 * Complete field mappings for I-601 form
 * Total mappings: 1
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_601_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.countryOfBirth",
    "pdfField": "form1[0].#subform[0].p1Line5Country[0]",
    "type": "text"
  }
];
