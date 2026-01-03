/**
 * I-9 Form Definition
 * Employment Eligibility Verification
 * Deduplicated and optimized
 */

import { FormDefinition } from '../forms-registry';
import { I_9_FIELD_MAPPINGS } from '../form-mappings/i-9-field-mappings';

const I_9_DEFINITION: FormDefinition = {
  id: "i-9",
  code: "I-9",
  name: "Employment Eligibility Verification",
  description: "Form I-9 is used to verify the identity and employment authorization of individuals hired for employment in the United States.",
  category: "employment",
  estimatedTime: "15-20 minutes",
  filingFee: 0,
  price: 0,
  sections: [
  {
    "id": "section1",
    "title": "Section 1: Employee Information and Attestation",
    "questions": [
      {"id":"3AlawfulpermanentresidentEnterUSCISorANumber","type":"text","label":"Alien Registration Number or USCIS Number","required":true},
      {"id":"firstNameGivenName","type":"text","label":"First Name (Given Name)","required":true},
      {"id":"employeeMiddleInitialifany","type":"text","label":"Middle Initial, if any","required":true},
      {"id":"employeeOtherLastNamesUsedifany","type":"text","label":"Other Last Names Used (if any)","required":true},
      {"id":"additionalInformation","type":"text","label":"Additional Information","required":true},
      {"id":"zipCode0","type":"text","label":"Preparer or Translator Zip Code.","required":true},
      {"id":"zipCode2","type":"text","label":"Preparer or Translator ZIP Code","required":true},
      {"id":"zipCode3","type":"radio","label":"Preparer or Translator ZIP Code","required":true},
      {"id":"cB1","type":"select","label":"A citizen of the United States","required":true,"options":[{"value":"On","label":"On"},{"value":"Off","label":"Off"}],"helpText":"I am aware that federal law provides for imprisonment and/or fines for false..."},
      {"id":"cB2","type":"select","label":"(See Instructions)","required":true,"options":[{"value":"On","label":"On"},{"value":"Off","label":"Off"}],"helpText":"2. A noncitizen of the United States."},
      {"id":"cB3","type":"radio","label":"A lawful permanent resident","required":true,"options":[{"value":"On","label":"1.  Employee Information and Attestation. 3. A lawful permanent resident."},{"value":"Off","label":"Off"}],"helpText":"3. A lawful permanent resident."},
      {"id":"cB4","type":"date","label":"Date, if any)","required":true,"options":[{"value":"On","label":"1.  Employee Information and Attestation.  4.  An alien authorized to work until (exp. date"},{"value":"Off","label":"Off"}]},
      {"id":"cBAlt0","type":"radio","label":"Check here if you used an alternative procedure authorized by DHS to examine documents.","required":true,"options":[{"value":"Off","label":"Off"},{"value":"Yes","label":"Yes"}]},
      {"id":"state","type":"select","label":"Section 1., State from the drop down list.","required":true,"options":[{"value":"","label":""},{"value":"AK","label":"Alaska"},{"value":"AL","label":"Alabama"},{"value":"AR","label":"Arkansas"},{"value":"AS","label":"American Samoa"},{"value":"AZ","label":"Arizona"},{"value":"CA","label":"California"},{"value":"CO","label":"Colorado"},{"value":"CT","label":"Connecticut"},{"value":"DC","label":"District of Columbia"},{"value":"DE","label":"Delaware"},{"value":"FL","label":"Florida"},{"value":"GA","label":"Georgia"},{"value":"GU","label":"Guam"},{"value":"HI","label":"Hawaii"},{"value":"IA","label":"Iowa"},{"value":"ID","label":"Idaho"},{"value":"IL","label":"Illinois"},{"value":"IN","label":"Indiana"},{"value":"KS","label":"Kansas"},{"value":"KY","label":"Kentucky"},{"value":"LA","label":"Louisiana"},{"value":"MA","label":"Massachusetts"},{"value":"MD","label":"Maryland"},{"value":"ME","label":"Maine"},{"value":"MI","label":"Michigan"},{"value":"MN","label":"Minnesota"},{"value":"MO","label":"Missouri"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"MS","label":"Mississippi"},{"value":"MT","label":"Montana"},{"value":"NC","label":"North Carolina"},{"value":"ND","label":"North Dakota"},{"value":"NE","label":"Nebraska"},{"value":"NH","label":"New Hampshire"},{"value":"NJ","label":"New Jersey"},{"value":"NM","label":"New Mexico"},{"value":"NV","label":"Nevada"},{"value":"NY","label":"New York"},{"value":"OH","label":"Ohio"},{"value":"OK","label":"Oklahoma"},{"value":"OR","label":"Oregon"},{"value":"PA","label":"Pennsylvania"},{"value":"PR","label":"Puerto Rico"},{"value":"RI","label":"Rhode Island"},{"value":"SC","label":"South Carolina"},{"value":"SD","label":"South Dakota"},{"value":"TN","label":"Tennessee"},{"value":"TX","label":"Texas"},{"value":"UT","label":"Utah"},{"value":"VA","label":"Virginia"},{"value":"VI","label":"U.S. Virgin Islands"},{"value":"VT","label":"Vermont"},{"value":"WA","label":"Washington"},{"value":"WI","label":"Wisconsin"},{"value":"WV","label":"West Virginia"},{"value":"WY","label":"Wyoming"},{"value":"CAN","label":"CAN"},{"value":"MEX","label":"MEX"}],"helpText":"State"},
      {"id":"zIPCode","type":"text","label":"ZIP Code","required":true},
      {"id":"dateofBirthmmddyyyy","type":"date","label":"Date of Birth as 2-digit Month, 2-digit Day, and 4-digit Year","required":true},
      {"id":"uSSocialSecurityNumber","type":"ssn","label":"Social Security Number","required":true,"helpText":"U.S. Social Security Number."},
      {"id":"telephoneNumber","type":"tel","label":"Employee&apos;s Telephone Number","required":true},
      {"id":"lastNameFamilyName","type":"text","label":"Employee Last Name (Family Name)","required":true},
      {"id":"addressStreetNumberandName","type":"text","label":"Address (Street Number and Name)","required":true},
      {"id":"aptNumberifany","type":"text","label":"Apartment Number, if any","required":true},
      {"id":"cityorTown","type":"text","label":"City or Town","required":true},
      {"id":"employeesEmailAddress","type":"text","label":"Employee&apos;s E-mail Address","required":true},
      {"id":"expDatemmddyyyy","type":"date","label":"Date mmddyyyy","required":true},
      {"id":"uSCISANumber","type":"text","label":"USCIS Alien Registration Number","required":true,"helpText":"If you checked Item Number 4"},
      {"id":"formI94AdmissionNumber","type":"text","label":"Form I-94 Admission Number","required":true},
      {"id":"foreignPassportNumberandCountryofIssuanceRow1","type":"text","label":"Foreign Passport Number and Country of Issuance","required":true},
      {"id":"documentTitle1","type":"text","label":"Document Title 1","required":true}
    ]
  },
  {
    "id": "section2",
    "title": "Section 2: Employer Review and Verification",
    "questions": [
      {"id":"listADocument2ExpirationDateifany","type":"date","label":"Expiration Date 2 as 2 digit for the month, 2 digit for the day and 4 digit for the year (if any)","required":true},
      {"id":"listADocumentTitle3Ifany","type":"text","label":"If any","required":true,"helpText":"Document Title 3."},
      {"id":"listADocument3EnterIssuingAuthority","type":"text","label":"Issuing Authority 3","required":true},
      {"id":"listBDocument1Title","type":"text","label":"List B Document 1 Title","required":true},
      {"id":"issuingAuthority1","type":"text","label":"Issuing Authority 1","required":true},
      {"id":"documentNumber0ifany","type":"text","label":"(if any)","required":true,"helpText":"Document Number 1."},
      {"id":"issuingAuthority2","type":"text","label":"Issuing Authority 2","required":true},
      {"id":"documentNumberifany3","type":"date","label":"Expiration Date 3 as 2 digit for the month, 2 digit for the day and 4 digit for the year (if any)","required":true},
      {"id":"listCExpirationDate1","type":"date","label":"Expiration Date as 2 digit for the month, 2 digit for the day and 4 digit for the year (if any)","required":true},
      {"id":"listCDocumentNumber1","type":"text","label":"Document Number","required":true},
      {"id":"listCIssuingAuthority1","type":"text","label":"Issuing Authority","required":true},
      {"id":"listCDocumentTitle1","type":"text","label":"Document Title","required":true},
      {"id":"firstDayEmployedmmddyyyy","type":"text","label":"First Day of Employment as 2-digit Month, 2-digit Day, and 4-digit Year","required":true},
      {"id":"lastNameFirstNameandTitleofEmployerorAuthorizedRepresentative","type":"text","label":"Last Name, First Name and Title of Employer or Authorized Representative","required":true},
      {"id":"employersBusinessorOrgName","type":"text","label":"Employer&apos;s Business or Organization Name","required":true},
      {"id":"employersBusinessorOrgAddress","type":"text","label":"Employer&apos;s Business or Organization Address","required":true},
      {"id":"expirationDateifany","type":"date","label":"(if any)","required":true,"helpText":"Expiration Date 1."}
    ]
  },
  {
    "id": "supplementA",
    "title": "Supplement A: Preparer/Translator Certification",
    "questions": [
      {"id":"lastNameFamilyNamefromSection1","type":"text","label":"The Last Name (Family Name)","required":true,"helpText":"Last Name (Family Name)."},
      {"id":"firstNameGivenNamefromSection1","type":"text","label":"The First Name (Given Name)","required":true,"helpText":"First Name (Given Name)."},
      {"id":"middleinitialifanyfromSection1","type":"text","label":"The Middle Initial (if any)","required":true,"helpText":"Middle Initial"},
      {"id":"preparerorTranslatorLastNameFamilyName0","type":"text","label":"Preparer or Translator Last Name (Family Name)","required":true},
      {"id":"preparerorTranslatorAddressStreetNumberandName0","type":"text","label":"Preparer or Translator Address (Street Number and Name)","required":true},
      {"id":"preparerorTranslatorFirstNameGivenName0","type":"text","label":"Preparer or Translator First Name (Given Name)","required":true},
      {"id":"preparerorTranslatorLastNameFamilyName1","type":"text","label":"Preparer or Translator Last Name Family Name 1","required":true},
      {"id":"preparerorTranslatorCityorTown0","type":"text","label":"Preparer or Translator City or Town","required":true},
      {"id":"preparerState0","type":"select","label":"The State","required":true,"options":[{"value":"","label":""},{"value":"AK","label":"Alaska"},{"value":"AL","label":"Alabama"},{"value":"AR","label":"Arkansas"},{"value":"AS","label":"American Samoa"},{"value":"AZ","label":"Arizona"},{"value":"CA","label":"California"},{"value":"CO","label":"Colorado"},{"value":"CT","label":"Connecticut"},{"value":"DC","label":"District of Columbia"},{"value":"DE","label":"Delaware"},{"value":"FL","label":"Florida"},{"value":"GA","label":"Georgia"},{"value":"GU","label":"Guam"},{"value":"HI","label":"Hawaii"},{"value":"IA","label":"Iowa"},{"value":"ID","label":"Idaho"},{"value":"IL","label":"Illinois"},{"value":"IN","label":"Indiana"},{"value":"KS","label":"Kansas"},{"value":"KY","label":"Kentucky"},{"value":"LA","label":"Louisiana"},{"value":"MA","label":"Massachusetts"},{"value":"MD","label":"Maryland"},{"value":"ME","label":"Maine"},{"value":"MI","label":"Michigan"},{"value":"MN","label":"Minnesota"},{"value":"MO","label":"Missouri"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"MS","label":"Mississippi"},{"value":"MT","label":"Montana"},{"value":"NC","label":"North Carolina"},{"value":"ND","label":"North Dakota"},{"value":"NE","label":"Nebraska"},{"value":"NH","label":"New Hampshire"},{"value":"NJ","label":"New Jersey"},{"value":"NM","label":"New Mexico"},{"value":"NV","label":"Nevada"},{"value":"NY","label":"New York"},{"value":"OH","label":"Ohio"},{"value":"OK","label":"Oklahoma"},{"value":"OR","label":"Oregon"},{"value":"PA","label":"Pennsylvania"},{"value":"PR","label":"Puerto Rico"},{"value":"RI","label":"Rhode Island"},{"value":"SC","label":"South Carolina"},{"value":"SD","label":"South Dakota"},{"value":"TN","label":"Tennessee"},{"value":"TX","label":"Texas"},{"value":"UT","label":"Utah"},{"value":"VA","label":"Virginia"},{"value":"VI","label":"U.S. Virgin Islands"},{"value":"VT","label":"Vermont"},{"value":"WA","label":"Washington"},{"value":"WI","label":"Wisconsin"},{"value":"WV","label":"West Virginia"},{"value":"WY","label":"Wyoming"},{"value":"CAN","label":"CAN"},{"value":"MEX","label":"MEX"}],"helpText":"Preparer and or Translator State: Enter the State."},
      {"id":"zipCode1","type":"text","label":"Zip Code","required":true,"helpText":"Preparer and or Translator Certification for Section 1. Enter Zip Code."},
      {"id":"pTMiddleInitial0","type":"text","label":"Preparer or Translator Middle Initial (if any)","required":true}
    ]
  },
  {
    "id": "supplementB",
    "title": "Supplement B: Reverification and Rehire",
    "questions": [
      {"id":"middleinitialifanyfromSection12","type":"date","label":"Additional guidance can be found in the Handbood for Employers: Guidance for Completing Form I-9 (M-274) at https://www","required":true,"helpText":"Middle Initial"},
      {"id":"dateofRehire0","type":"date","label":"Date as 2 digit month, 2 digit day and 4 digit year","required":true},
      {"id":"dateofRehire2","type":"date","label":"Date mmddyyyy","required":true},
      {"id":"lastName0","type":"text","label":"Last Name (Family Name)","required":true,"helpText":"New Name, if applicable. Enter Last Name (Family Name)."},
      {"id":"firstName0","type":"text","label":"First Name (Given Name)","required":true,"helpText":"New Name, if applicable. First Name (Given Name)."},
      {"id":"middleInitial0","type":"text","label":"Middle Initial","required":true,"helpText":"New Name, if applicable. Enter Middle Initial."},
      {"id":"documentTitle0","type":"text","label":"The Document Title","required":true,"helpText":"Document Title."},
      {"id":"documentNumber0","type":"text","label":"The Document Number (if any)","required":true,"helpText":"Document Number"},
      {"id":"expirationDate0","type":"date","label":"Expiration Date as 2 digit for the month, 2 digit for the day and 4 digit for the year (if any)","required":true},
      {"id":"nameofEmporAuthRep0","type":"text","label":"Name of Employer or Authorized Representative","required":true},
      {"id":"addtlInfo0","type":"date","label":"Enter Additional Information (Initial and date each notation.)","required":true}
    ]
  }
],
  pdfFieldMappings: I_9_FIELD_MAPPINGS,
  requiredDocuments: [
    "One document from List A (proving both identity and employment authorization), OR",
    "One document from List B (proving identity) AND one document from List C (proving employment authorization)"
  ],
  instructions: [
    "Employees must complete Section 1 on or before their first day of employment",
    "Employers must complete Section 2 within 3 business days of the employee's first day of employment",
    "Use Supplement A if a preparer or translator assisted with Section 1",
    "Use Supplement B for reverification or rehire within 3 years"
  ],
};

export default I_9_DEFINITION;
