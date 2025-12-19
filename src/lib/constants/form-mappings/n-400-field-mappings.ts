/**
 * N-400 Field Mappings
 * Generated on: 2025-12-18T20:06:56.860Z
 * 
 * Complete field mappings for N-400 form
 * Total mappings: 12
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const N_400_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part2.mailingCity",
    "pdfField": "form1[0].#subform[2].P7_Line1_Ethnicity[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingState",
    "pdfField": "form1[0].#subform[2].P4_Line3_State1[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingZip",
    "pdfField": "form1[0].#subform[2].P4_Line3_ZipCode1[0]",
    "type": "text"
  },
  {
    "questionId": "part3.dob",
    "pdfField": "form1[0].#subform[1].P2_Line8_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part3.countryOfBirth",
    "pdfField": "form1[0].#subform[1].P2_Line11_CountryOfNationality[0]",
    "type": "text"
  },
  {
    "questionId": "part3.countryOfCitizenship",
    "pdfField": "form1[0].#subform[1].P2_Line10_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part3.ethnicity",
    "pdfField": "form1[0].#subform[2].P7_Line1_Ethnicity[1]",
    "type": "text"
  },
  {
    "questionId": "part6.totalChildren",
    "pdfField": "form1[0].#subform[4].P11_Line1_TotalChildren[0]",
    "type": "text"
  },
  {
    "questionId": "part6.childrenDetails",
    "pdfField": "form1[0].#subform[4].P6_ChildTwo[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingStreet",
    "pdfField": "form1[0].#subform[2].P4_Line3_PhysicalAddress1[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingAptType",
    "pdfField": "form1[0].#subform[2].P4_Line1_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part2.mailingAptNumber",
    "pdfField": "form1[0].#subform[2].P4_Line1_Unit[1]",
    "type": "text"
  }
];
