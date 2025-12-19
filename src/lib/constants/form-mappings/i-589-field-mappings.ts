/**
 * I-589 Field Mappings
 * Generated on: 2025-12-18T20:06:56.851Z
 * 
 * Complete field mappings for I-589 form
 * Total mappings: 9
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_589_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "partA1.2.ssn",
    "pdfField": "form1[0].#subform[1].ChildSSN1[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.8.cityOfBirth",
    "pdfField": "form1[0].#subform[0].PtAILine9_City[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.14.city",
    "pdfField": "form1[0].#subform[1].ChildCity1[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.15.state",
    "pdfField": "form1[0].#subform[0].PtAILine8_State[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.16.zipCode",
    "pdfField": "form1[0].#subform[0].PtAILine8_Zipcode[0]",
    "type": "text"
  },
  {
    "questionId": "partA2.2.spouseName",
    "pdfField": "form1[0].#subform[1].NotMarried[0].PtAIILine20_SpouseCurrentStatus[0]",
    "type": "text"
  },
  {
    "questionId": "partA2.6.childrenInfo",
    "pdfField": "form1[0].#subform[1].ChildrenCheckbox[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.17.phone",
    "pdfField": "form1[0].#subform[0].PtAILine8_TelephoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "partA1.12.gender",
    "pdfField": "form1[0].#subform[0].PartALine9Sex[0]",
    "type": "text"
  }
];
