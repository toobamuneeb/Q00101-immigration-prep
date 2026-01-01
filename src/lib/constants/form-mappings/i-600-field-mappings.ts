/**
 * I-600 Field Mappings
 * Generated on: 2025-12-18T20:06:56.852Z
 * 
 * Complete field mappings for I-600 form
 * Total mappings: 21
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const I_600_FIELD_MAPPINGS: FieldMapping[] = [
  {
    "questionId": "part1.line6g.country",
    "pdfField": "form1[0].#subform[2].Pt1Line6g_Country[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3d.cityOrTown",
    "pdfField": "form1[0].#subform[1].Pt1Line3d_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.10.state",
    "pdfField": "form1[0].#subform[0].AttorneyStateBarNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3f.zipCode",
    "pdfField": "form1[0].#subform[1].Pt1Line3f_ZipCode[0]",
    "type": "text"
  },
  {
    "questionId": "part3.line5.email",
    "pdfField": "form1[0].#subform[2].Pt3Line5_Email[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line23.spouseUSCISOnlineActNum",
    "pdfField": "form1[0].#subform[3].Pt1Line23_SpouseUSCISOnlineActNum[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line23.spouseImmigrationStatus",
    "pdfField": "form1[0].#subform[3].Pt1Line23_SpouseImmigrationStatus[0]",
    "type": "text"
  },
  {
    "questionId": "part2.3.spouseDateOfBirth",
    "pdfField": "form1[0].#subform[4].P7_Line6_SpousesEmailAddress[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line10.countryOfBirth",
    "pdfField": "form1[0].#subform[2].Pt1Line10_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part2.5.spouseCitizenship",
    "pdfField": "form1[0].#subform[4].P7_Line4_SpousesDaytimePhoneNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part3.4.spousePriorMarriages",
    "pdfField": "form1[0].#subform[4].P7_Line5_SpousesMobileNumber[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line1.row1RelationshiptoChild",
    "pdfField": "form1[0].#subform[14].Table3[0].Row1[0].Pt4Line1_Row1RelationshiptoChild[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line1.row2RelationshiptoChild",
    "pdfField": "form1[0].#subform[14].Table3[0].Row2[0].Pt4Line1_Row2RelationshiptoChild[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line1.row3RelationshiptoChild",
    "pdfField": "form1[0].#subform[14].Table3[0].Row3[0].Pt4Line1_Row3RelationshiptoChild[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line1.row4RelationshiptoChild",
    "pdfField": "form1[0].#subform[14].Table3[0].Row4[0].Pt4Line1_Row4RelationshiptoChild[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line5c.cityOrTown",
    "pdfField": "form1[0].#subform[1].Pt1Line5c_CityOrTown[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line23.countryOfBirth",
    "pdfField": "form1[0].#subform[3].Pt1Line23_CountryOfBirth[0]",
    "type": "text"
  },
  {
    "questionId": "part4.line2.row1RelationshiptoChild",
    "pdfField": "form1[0].#subform[14].Table3[1].Row1[0].Pt4Line2_Row1RelationshiptoChild[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3e.state",
    "pdfField": "form1[0].#subform[1].Pt1Line3e_State[0]",
    "type": "text"
  },
  {
    "questionId": "part1.line3b.streetNumberName",
    "pdfField": "form1[0].#subform[1].Pt1Line3b_StreetNumberName[0]",
    "type": "text"
  },
  {
    "questionId": "part3.line3.daytimePhoneNumber1",
    "pdfField": "form1[0].#subform[2].Pt3Line3_DaytimePhoneNumber1[0]",
    "type": "text"
  }
];
