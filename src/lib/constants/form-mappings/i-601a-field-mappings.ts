/**
 * I-601A Field Mappings
 * Generated on: 2025-12-18T20:06:56.853Z
 * 
 * Complete field mappings for I-601A form
 * Total mappings: 1
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_601A_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.line2.sSN",
    "pdfField": "form1[0].#subform[0].#area[1].Pt1Line2_SSN[0]",
    "type": "ssn"
  }
];
