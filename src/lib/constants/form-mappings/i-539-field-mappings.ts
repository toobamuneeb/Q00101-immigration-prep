/**
 * I-539 Field Mappings
 * Generated on: 2025-12-18T20:06:56.850Z
 * 
 * Complete field mappings for I-539 form
 * Total mappings: 14
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_539_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.5.countryOfBirth",
    "pdfField": "form1[0].#subform[1].P1_Line7_CountryOfCitizenship[0]",
    "type": "text"
  },
  {
    "questionId": "part1.6.countryOfCitizenship",
    "pdfField": "form1[0].#subform[1].P1_Line6_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part1.11.passportCountry",
    "pdfField": "form1[0].#subform[1].SupA_Line1m_CountryOfIssuance[0]",
    "type": "text"
  },
  {
    "questionId": "part1.15d.city",
    "pdfField": "form1[0].#subform[0].Part2_Item11_City[0]",
    "type": "text"
  },
  {
    "questionId": "part1.15e.state",
    "pdfField": "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.15f.zipCode",
    "pdfField": "form1[0].#subform[0].Part2_Item11_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part5.3.email",
    "pdfField": "form1[0].#subform[4].P6_Line5_EmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part1.10.passportNumber",
    "pdfField": "form1[0].#subform[1].SupA_Line1k_Passport[0]",
    "type": "text"
  },
  {
    "questionId": "part1.12.passportExpiration",
    "pdfField": "form1[0].#subform[1].SupA_Line1k_Passport[1]",
    "type": "text"
  },
  {
    "questionId": "part1.15a.street",
    "pdfField": "form1[0].#subform[4].P5_Line5_EmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part1.15b.aptSteFlr",
    "pdfField": "form1[0].#subform[0].Part1_Item4_Unit[0]",
    "type": "text"
  },
  {
    "questionId": "part1.15c.unitNumber",
    "pdfField": "form1[0].#subform[0].Part1_Item4_Unit[1]",
    "type": "text"
  },
  {
    "questionId": "part5.1.daytimePhone",
    "pdfField": "form1[0].#subform[4].P5_Line3_DaytimePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part5.2.mobilePhone",
    "pdfField": "form1[0].#subform[4].P5_Line4_MobilePhoneNumber[0]",
    "type": "text"
  }
];
