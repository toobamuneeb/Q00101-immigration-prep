/**
 * I-140 Field Mappings
 * Generated on: 2025-12-18T20:06:56.847Z
 * 
 * Complete field mappings for I-140 form
 * Total mappings: 12
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_140_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.3d.city",
    "pdfField": "form1[0].#subform[0].Line6d_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3e.state",
    "pdfField": "form1[0].#subform[0].attyStateBarNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3f.zipCode",
    "pdfField": "form1[0].#subform[0].Line6g_PostalCode[0]",
    "type": "text"
  },
  {
    "questionId": "part3.4.cityOfBirth",
    "pdfField": "form1[0].#subform[1].Line2d_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part3.5.countryOfBirth",
    "pdfField": "form1[0].#subform[0].Line6i_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part3.6.countryOfCitizenship",
    "pdfField": "form1[0].#subform[1].Line2i_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part8.2.contactEmail",
    "pdfField": "form1[0].#subform[5].Part7_Item7_Email[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3a.street",
    "pdfField": "form1[0].#subform[0].Line6b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3b.aptSteFlr",
    "pdfField": "form1[0].#subform[0].Line6c_AptSteFlrNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.3c.unitNumber",
    "pdfField": "form1[0].#subform[0].Line6c_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.4.phone",
    "pdfField": "form1[0].#subform[5].Part7_Item6_MobilePhone[0]",
    "type": "text"
  },
  {
    "questionId": "part8.3.contactPhone",
    "pdfField": "form1[0].#subform[5].Part7_Item5_DayPhone[0]",
    "type": "text"
  }
];
