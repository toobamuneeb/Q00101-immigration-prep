/**
 * I-212 Field Mappings
 * Generated on: 2025-12-18T20:06:56.848Z
 * 
 * Complete field mappings for I-212 form
 * Total mappings: 2
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_212_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.cityOfBirth",
    "pdfField": "form1[0].Page1[0].p1Line5CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.countryOfBirth",
    "pdfField": "form1[0].Page1[0].p1Line5Country[0]",
    "type": "text"
  }
];
