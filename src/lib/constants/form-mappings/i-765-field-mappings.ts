/**
 * I-765 Field Mappings
 * Generated on: 2025-12-18T20:06:56.854Z
 * 
 * Complete field mappings for I-765 form
 * Total mappings: 14
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_765_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part2.line7.cityOrTown",
    "pdfField": "form1[0].Page2[0].Pt2Line7_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line7.state",
    "pdfField": "form1[0].Page2[0].Pt2Line7_State[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line7.zipCode",
    "pdfField": "form1[0].Page2[0].Pt2Line7_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part2.hasSSN",
    "pdfField": "form1[0].Page2[0].Line12b_SSN[0]",
    "type": "text"
  },
  {
    "questionId": "part5.line2.businessName",
    "pdfField": "form1[0].Page5[0].Pt5Line2_BusinessName[0]",
    "type": "ssn"
  },
  {
    "questionId": "part2.line5.cityOrTown",
    "pdfField": "form1[0].Page2[0].Pt2Line5_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line5.state",
    "pdfField": "form1[0].Page2[0].Pt2Line5_State[0]",
    "type": "text"
  },
  {
    "questionId": "part2.countryOfBirth",
    "pdfField": "form1[0].Page2[0].Line17b_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.dob",
    "pdfField": "form1[0].Page3[0].Line19_DOB[0]",
    "type": "text"
  },
  {
    "questionId": "part2.passportCountry",
    "pdfField": "form1[0].Page2[0].Line17a_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line7.streetNumberName",
    "pdfField": "form1[0].Page2[0].Pt2Line7_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line7.unit",
    "pdfField": "form1[0].Page2[0].Pt2Line7_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part2.line7.unit",
    "pdfField": "form1[0].Page2[0].Pt2Line7_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part2.passportNumber",
    "pdfField": "form1[0].Page3[0].Line20b_Passport[0]",
    "type": "text"
  }
];
