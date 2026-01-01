/**
 * I-864 Field Mappings
 * Generated on: 2025-12-18T20:06:56.855Z
 * 
 * Complete field mappings for I-864 form
 * Total mappings: 11
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_864_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part2.immigrantDob",
    "pdfField": "form1[0].#subform[1].P4_Line6_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.immigrantCountryOfCitizenship",
    "pdfField": "form1[0].#subform[1].P4_Line2j_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingCity",
    "pdfField": "form1[0].#subform[1].P4_Line2e_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingState",
    "pdfField": "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingZip",
    "pdfField": "form1[0].#subform[1].P4_Line2g_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part4.dob",
    "pdfField": "form1[0].#subform[2].P2_Line4_DateOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part4.ssn",
    "pdfField": "form1[0].#subform[1].P4_Line10_SocialSecurityNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part5.children",
    "pdfField": "form1[0].#subform[4].P5_Line4_DependentChildren[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingStreet",
    "pdfField": "form1[0].#subform[1].P4_Line2b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingAptType",
    "pdfField": "form1[0].#subform[1].P4_Line2c_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part4.mailingAptNumber",
    "pdfField": "form1[0].#subform[1].P4_Line2c_Unit[1]",
    "type": "text"
  }
];
