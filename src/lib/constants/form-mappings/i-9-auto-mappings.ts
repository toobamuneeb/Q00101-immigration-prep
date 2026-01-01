/**
 * Auto-generated field mappings for I-9
 *
 * Generated on: 2025-11-27T05:32:42.199Z
 * Mapped: 8/46 fields (17%)
 *
 * ⚠️  IMPORTANT: Review all mappings before use in production!
 * Some mappings may be incorrect and require manual verification.
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

// export const I_9_AUTO_MAPPINGS: FieldMapping[] = [
//   { questionId: 'section1.city', pdfField: 'Preparer or Translator City or Town 0', }, // Confidence: 10
//   { questionId: 'section1.state', pdfField: 'Preparer State 0', }, // Confidence: 10
//   { questionId: 'section2.employerCity', pdfField: 'Preparer or Translator City or Town 1', }, // Confidence: 10
//   { questionId: 'section2.employerState', pdfField: 'Preparer State 1', }, // Confidence: 10
//   { questionId: 'section1.streetAddress', pdfField: 'Preparer or Translator Address (Street Number and Name) 0', }, // Confidence: 9
//   { questionId: 'section1.aptNumber', pdfField: 'Apt Number (if any)', }, // Confidence: 9
//   { questionId: 'section1.telephone', pdfField: 'Telephone Number', }, // Confidence: 9
//   { questionId: 'section1.foreignPassportNumber', pdfField: 'Foreign Passport Number and Country of IssuanceRow1', }, // Confidence: 9
// ];
export const I_9_AUTO_MAPPINGS: FieldMapping[] = [
  // Section 1: Employee Information
  { questionId: "section1.lastName", pdfField: "Last Name (Family Name)" },
  { questionId: "section1.firstName", pdfField: "First Name Given Name" },
  { questionId: "section1.middleInitial", pdfField: "Employee Middle Initial (if any)" },
  {
    questionId: "section1.otherLastNames",
    pdfField: "Employee Other Last Names Used (if any)",
  },
  {
    questionId: "section1.streetAddress",
    pdfField: "Address Street Number and Name",
  },
  { questionId: "section1.aptNumber", pdfField: "Apt Number (if any)" },
  { questionId: "section1.city", pdfField: "City or Town" },
  { questionId: "section1.state", pdfField: "State" },
  { questionId: "section1.zipCode", pdfField: "ZIP Code" },
  {
    questionId: "section1.dateOfBirth",
    pdfField: "Date of Birth mmddyyyy",
  },
  { questionId: "section1.ssn", pdfField: "US Social Security Number" },
  { questionId: "section1.email", pdfField: "Employees E-mail Address" },
  {
    questionId: "section1.telephone",
    pdfField: "Telephone Number",
  },

  // Section 1: Citizenship Status Checkboxes
  {
    questionId: "section1.citizenshipStatus",
    pdfField: "CB_1",
    type: "checkbox",
    value: "citizen",
  },
  {
    questionId: "section1.citizenshipStatus",
    pdfField: "CB_2",
    type: "checkbox",
    value: "noncitizen-national",
  },
  {
    questionId: "section1.citizenshipStatus",
    pdfField: "CB_3",
    type: "checkbox",
    value: "lpr",
  },
  {
    questionId: "section1.citizenshipStatus",
    pdfField: "CB_4",
    type: "checkbox",
    value: "alien-authorized",
  },

  // Section 1: Additional Information for Status 4
  {
    questionId: "section1.workAuthorizationExpiration",
    pdfField: "Exp Date mmddyyyy",
  },
  { questionId: "section1.uscisANumber", pdfField: "USCIS ANumber" },
  { questionId: "section1.uscisANumber", pdfField: "3 A lawful permanent resident Enter USCIS or ANumber" },
  { questionId: "section1.i94Number", pdfField: "Form I94 Admission Number" },
  {
    questionId: "section1.foreignPassportNumber",
    pdfField: "Foreign Passport Number and Country of IssuanceRow1",
  },
  { questionId: "section1.lastName", pdfField: "Last Name Family Name from Section 1" },
  { questionId: "section1.firstName", pdfField: "First Name Given Name from Section 1" },
  { questionId: "section1.middleInitial", pdfField: "Middle initial if any from Section 1" },
  { questionId: "section1.lastName", pdfField: "Last Name Family Name from Section 1-2" },
  { questionId: "section1.firstName", pdfField: "First Name Given Name from Section 1-2" },
  { questionId: "section1.middleInitial", pdfField: "Middle initial if any from Section 1-2" },

  // Section 1: Signature
  {
    questionId: "section1.signatureDate",
    pdfField: "Todays Date 0",
  },
  { questionId: "section1.signatureDate", pdfField: "Today's Date mmddyyy" },

  // Section 2: Document Information - Based on document type
  // List A Document (if using List A)
  { questionId: "section2.listA.documentTitle", pdfField: "Document Title 0" },
  { questionId: "section2.listA.documentTitle", pdfField: "Document Title 1" },
  {
    questionId: "section2.listA.issuingAuthority",
    pdfField: "List A. Document 3.  Enter Issuing Authority",
  },
  { questionId: "section2.listA.issuingAuthority", pdfField: "Issuing Authority 1" },
  {
    questionId: "section2.listA.documentNumber",
    pdfField: "Document Number 0",
  },
  { questionId: "section2.listA.documentNumber", pdfField: "Document Number 0 (if any)" },
  {
    questionId: "section2.listA.expirationDate",
    pdfField: "Expiration Date 0",
  },
  { questionId: "section2.listA.expirationDate", pdfField: "Expiration Date if any" },

  // List B Document (if using List B + C)
  { questionId: "section2.listB.documentTitle", pdfField: "List B Document 1 Title" },
  {
    questionId: "section2.listB.issuingAuthority",
    pdfField: "List B Issuing Authority 1",
  },
  {
    questionId: "section2.listB.documentNumber",
    pdfField: "List B Document Number 1",
  },
  {
    questionId: "section2.listB.expirationDate",
    pdfField: "List B Expiration Date 1",
  },

  // List C Document (if using List B + C)
  {
    questionId: "section2.listC.documentTitle",
    pdfField: "List C Document Title 1",
  },
  {
    questionId: "section2.listC.issuingAuthority",
    pdfField: "List C Issuing Authority 1",
  },
  {
    questionId: "section2.listC.documentNumber",
    pdfField: "List C Document Number 1",
  },
  {
    questionId: "section2.listC.expirationDate",
    pdfField: "List C Expiration Date 1",
  },

  // Section 2: Additional Information
  {
    questionId: "section2.additionalInformation",
    pdfField: "Additional Information",
  },
  { questionId: "section2.additionalInformation", pdfField: "Addtl Info 0" },
  { questionId: "section2.additionalInformation", pdfField: "Addtl Info 1" },
  { questionId: "section2.additionalInformation", pdfField: "Addtl Info 2" },
  {
    questionId: "section2.alternativeProcedure",
    pdfField: "CB_Alt",
    type: "checkbox",
  },
  { questionId: "section2.alternativeProcedure", pdfField: "CB_Alt_0", type: "checkbox" },
  { questionId: "section2.alternativeProcedure", pdfField: "CB_Alt_1", type: "checkbox" },
  { questionId: "section2.alternativeProcedure", pdfField: "CB_Alt_2", type: "checkbox" },

  // Section 2: Employer Information
  {
    questionId: "section2.firstDayOfEmployment",
    pdfField: "FirstDayEmployed mmddyyyy",
  },
  {
    questionId: "section2.employerNameTitle",
    pdfField: "Last Name First Name and Title of Employer or Authorized Representative",
  },
  { questionId: "section2.employerNameTitle", pdfField: "Name of Emp or Auth Rep 0" },
  { questionId: "section2.employerNameTitle", pdfField: "Name of Emp or Auth Rep 1" },
  { questionId: "section2.employerNameTitle", pdfField: "Name of Emp or Auth Rep 2" },
  
  {
    questionId: "section2.employerDate",
    pdfField: "S2 Todays Date mmddyyyy",
  },
  {
    questionId: "section2.employerBusinessName",
    pdfField: "Employers Business or Org Name",
  },
  {
    questionId: "section2.employerAddress",
    pdfField: "Employers Business or Org Address",
  },
  { questionId: "preparer1.lastName", pdfField: "Preparer or Translator Last Name (Family Name) 0" },
  { questionId: "preparer1.firstName", pdfField: "Preparer or Translator First Name (Given Name) 0" },
  { questionId: "preparer1.middleInitial", pdfField: "PT Middle Initial 0" },
  { questionId: "preparer1.streetAddress", pdfField: "Preparer or Translator Address (Street Number and Name) 0" },
  { questionId: "preparer1.city", pdfField: "Preparer or Translator City or Town 0" },
  { questionId: "preparer1.state", pdfField: "Preparer State 0" },
  { questionId: "preparer1.zipCode", pdfField: "Zip Code 0" },
  { questionId: "preparer1.date", pdfField: "Sig Date mmddyyyy 0" },
  { questionId: "preparer2.lastName", pdfField: "Preparer or Translator Last Name (Family Name) 1" },
  { questionId: "preparer2.firstName", pdfField: "Preparer or Translator First Name (Given Name) 2" },
  { questionId: "preparer2.middleInitial", pdfField: "PT Middle Initial 1" },
  { questionId: "preparer2.streetAddress", pdfField: "Preparer or Translator Address (Street Number and Name) 1" },
  { questionId: "preparer2.city", pdfField: "Preparer or Translator City or Town 1" },
  { questionId: "preparer2.state", pdfField: "Preparer State 1" },
  { questionId: "preparer2.zipCode", pdfField: "Zip Code 1" },
  { questionId: "preparer2.date", pdfField: "Sig Date mmddyyyy 1" },
  { questionId: "preparer3.lastName", pdfField: "Preparer or Translator Last Name (Family Name) 2" },
  { questionId: "preparer3.firstName", pdfField: "Preparer or Translator First Name (Given Name) 2" },
  { questionId: "preparer3.middleInitial", pdfField: "PT Middle Initial 2" },
  { questionId: "preparer3.streetAddress", pdfField: "Preparer or Translator Address (Street Number and Name) 2" },
  { questionId: "preparer3.city", pdfField: "Preparer or Translator City or Town 2" },
  { questionId: "preparer3.state", pdfField: "Preparer State 2" },
  { questionId: "preparer3.zipCode", pdfField: "Zip Code 2" },
  { questionId: "preparer3.date", pdfField: "Sig Date mmddyyyy 2" },
  { questionId: "preparer4.lastName", pdfField: "Preparer or Translator Last Name (Family Name) 3" },
  { questionId: "preparer4.firstName", pdfField: "Preparer or Translator First Name (Given Name) 3" },
  { questionId: "preparer4.middleInitial", pdfField: "PT Middle Initial 3" },
  { questionId: "preparer4.streetAddress", pdfField: "Preparer or Translator Address (Street Number and Name) 3" },
  { questionId: "preparer4.city", pdfField: "Preparer or Translator City or Town 3" },
  { questionId: "preparer4.state", pdfField: "Preparer State 3" },
  { questionId: "preparer4.zipCode", pdfField: "Zip Code 3" },
  { questionId: "preparer4.date", pdfField: "Sig Date mmddyyyy 3" },
];
/**
 * Unmapped questions (38):
 * These need manual review and mapping.
 *
 * - section1.lastName: "Last Name (Family Name)"
 * - section1.firstName: "First Name (Given Name)"
 * - section1.middleInitial: "Middle Initial"
 * - section1.otherLastNames: "Other Last Names Used (if any)"
 * - section1.zipCode: "ZIP Code"
 * - section1.dateOfBirth: "Date of Birth (mm/dd/yyyy)"
 * - section1.ssn: "U.S. Social Security Number"
 * - section1.email: "Employee's Email Address"
 * - section1.citizenshipStatus: "I attest, under penalty of perjury, that I am (check one of the following boxes):"
 * - section1.uscisNumber: "USCIS Number (for LPR or alien authorized to work)"
 * - section1.alienNumber: "Alien Registration Number/USCIS Number"
 * - section1.i94Number: "Form I-94 Admission Number"
 * - section1.passportCountry: "Country of Issuance"
 * - section1.workAuthorizationExpiration: "Employment Authorization Expiration Date (if any)"
 * - section2.employeeLastName: "Employee Last Name from Section 1"
 * - section2.employeeFirstName: "Employee First Name from Section 1"
 * - section2.employeeMiddleInitial: "Employee Middle Initial from Section 1"
 * - section2.citizenshipStatus: "Citizenship/Immigration Status from Section 1"
 * - section2.listA.documentTitle: "Document Title"
 * - section2.listA.issuingAuthority: "Issuing Authority"
 * - section2.listA.documentNumber: "Document Number"
 * - section2.listA.expirationDate: "Expiration Date (if any)"
 * - section2.listB.documentTitle: "Document Title"
 * - section2.listB.issuingAuthority: "Issuing Authority"
 * - section2.listB.documentNumber: "Document Number"
 * - section2.listB.expirationDate: "Expiration Date (if any)"
 * - section2.listC.documentTitle: "Document Title"
 * - section2.listC.issuingAuthority: "Issuing Authority"
 * - section2.listC.documentNumber: "Document Number"
 * - section2.listC.expirationDate: "Expiration Date (if any)"
 * - section2.additionalInformation: "Additional Information"
 * - section2.firstDayOfEmployment: "Employee's First Day of Employment (mm/dd/yyyy)"
 * - section2.employerLastName: "Last Name of Employer or Authorized Representative"
 * - section2.employerFirstName: "First Name of Employer or Authorized Representative"
 * - section2.employerTitle: "Title of Employer or Authorized Representative"
 * - section2.employerBusinessName: "Employer's Business or Organization Name"
 * - section2.employerAddress: "Employer's Business Address (Street Number and Name)"
 * - section2.employerZipCode: "ZIP Code"
 */

/**
 * High-confidence mappings (score >= 15):
 * 0 mappings
 */
export const HIGH_CONFIDENCE_MAPPINGS = I_9_AUTO_MAPPINGS.filter((_, i) => {
  const confidences = [10, 10, 10, 10, 9, 9, 9, 9];
  return confidences[i] >= 15;
});

/**
 * Manual review needed (score < 10):
 * 4 mappings
 */
export const NEEDS_REVIEW_MAPPINGS = I_9_AUTO_MAPPINGS.filter((_, i) => {
  const confidences = [10, 10, 10, 10, 9, 9, 9, 9];
  return confidences[i] < 10;
});
