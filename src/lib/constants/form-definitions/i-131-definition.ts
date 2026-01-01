/**
 * I-131 Form Definition
 * Generated with AI: 2025-12-22T22:09:40.219Z
 */

import type { FormDefinition } from '../forms-registry';
import { I_131_FIELD_MAPPINGS } from '../form-mappings/i-131-field-mappings';

// Note: US_STATES should be passed in or imported where this definition is used
// For now, we'll use a placeholder that will be replaced when imported into forms-registry
const US_STATES: any[] = [];

const I_131_DEFINITION: FormDefinition = {
  id: "i-131",
  code: "I-131",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
  {
    id: "attorney-representative",
    title: "Attorney or Representative Information",
    description: "To be completed by an attorney or representative, if any.",
    questions: [
      {
        id: "attorney.g28Attached",
        type: "checkbox",
        label: "Check if Form G-28 is attached to represent the applicant.",
        options: [{ value: "Y", label: "Yes" }],
      },
    ],
  },
  {
    id: "part1-application-type",
    title: "Part 1: Application Type",
    description: "Select the type of travel document you are applying for.",
    questions: [
      {
        id: "part1.applicationType",
        type: "radio",
        label: "I am applying for (select one):",
        required: true,
        options: [
          { value: "1", label: "1. Reentry Permit (for lawful permanent residents)" },
          { value: "2", label: "2. Refugee Travel Document (for refugees/asylees)" },
          { value: "3", label: "3. Refugee Travel Document (for LPRs as a result of refugee/asylee status)" },
          { value: "4", label: "4. TPS Travel Authorization Document" },
          { value: "5", label: "5. Advance Parole Document (for aliens inside the U.S.)" },
          { value: "6", label: "6. Initial Parole Document (for aliens outside the U.S.)" },
        ],
        helpText: "Choose the option that best describes your current status and needs.",
      },
      {
        id: "part1.tpsReceiptNumber",
        type: "text",
        label: "Enter the receipt number for your last approved Form I-821, Application for Temporary Protected Status:",
        helpText: "Only applicable if you are applying for a TPS Travel Authorization Document.",
      },
    ],
  },
  {
    id: "part2-personal-info",
    title: "Part 2: Information About You",
    description: "Provide your personal information.",
    questions: [
      {
        id: "part2.fullName",
        type: "group",
        label: "1. Your Full Name",
        questions: [
          {
            id: "part2.familyName",
            type: "text",
            label: "1.a. Family Name (Last Name)",
            required: true,
          },
          {
            id: "part2.givenName",
            type: "text",
            label: "1.b. Given Name (First Name)",
            required: true,
          },
          {
            id: "part2.middleName",
            type: "text",
            label: "1.c. Middle Name",
          },
        ],
      },
    ],
  },
  {
    id: "part2-address",
    title: "Part 2: Current Mailing Address",
    description: "Where should USCIS mail your travel document?",
    questions: [
      {
        id: "part2.inCareOfName",
        type: "text",
        label: "3.a. In Care Of Name (if any)",
      },
      {
        id: "part2.streetNumberName",
        type: "text",
        label: "3.b. Street Number and Name",
        required: true,
      },
      {
        id: "part2.cityTown",
        type: "text",
        label: "3.c. City or Town",
        required: true,
      },
      {
        id: "part2.state",
        type: "select",
        label: "3.d. State",
        options: US_STATES,
        required: true,
      },
      {
        id: "part2.zipCode",
        type: "text",
        label: "3.e. ZIP Code",
        required: true,
      },
    ],
  },
  {
    id: "part2-refugee-status",
    title: "Part 2: Refugee Status",
    description: "Indicate your refugee status.",
    questions: [
      {
        id: "part2.refugeeStatus",
        type: "radio",
        label: "13. Do you hold status as a refugee, were you paroled as a refugee, or are you a lawful permanent resident as a direct result of being a refugee?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
,

  {
    id: "part2-current-mailing-address",
    title: "Part 2: Current Mailing Address",
    description: "Provide your current mailing address or a safe address if applicable.",
    questions: [
      {
        id: "part2.mailingStreet",
        type: "text",
        label: "3.a. Street Number and Name",
        required: true,
      },
      {
        id: "part2.mailingUnitType",
        type: "select",
        label: "3.b. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.mailingUnitNumber",
        type: "text",
        label: "3.c. Unit Number",
      },
      {
        id: "part2.mailingCity",
        type: "text",
        label: "3.d. City or Town",
        required: true,
      },
      {
        id: "part2.mailingState",
        type: "select",
        label: "3.e. State",
        options: US_STATES,
        required: true,
      },
      {
        id: "part2.mailingZipCode",
        type: "text",
        label: "3.f. ZIP Code",
        required: true,
      },
      {
        id: "part2.mailingCountry",
        type: "text",
        label: "3.g. Country",
        required: true,
      },
    ],
  },
  {
    id: "part2-current-physical-address",
    title: "Part 2: Current Physical Address",
    description: "Provide your current physical address if different from the mailing address.",
    questions: [
      {
        id: "part2.physicalStreet",
        type: "text",
        label: "4.a. Street Number and Name",
      },
      {
        id: "part2.physicalUnitType",
        type: "select",
        label: "4.b. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.physicalUnitNumber",
        type: "text",
        label: "4.c. Unit Number",
      },
      {
        id: "part2.physicalCity",
        type: "text",
        label: "4.d. City or Town",
      },
      {
        id: "part2.physicalState",
        type: "select",
        label: "4.e. State",
        options: US_STATES,
      },
      {
        id: "part2.physicalZipCode",
        type: "text",
        label: "4.f. ZIP Code",
      },
      {
        id: "part2.physicalCountry",
        type: "text",
        label: "4.g. Country",
      },
    ],
  },
  {
    id: "part2-other-information",
    title: "Part 2: Other Information",
    description: "Provide additional identification information.",
    questions: [
      {
        id: "part2.alienNumber",
        type: "text",
        label: "5. Alien Registration Number (A-Number) (if any)",
      },
      {
        id: "part2.countryOfBirth",
        type: "text",
        label: "6. Country of Birth",
        required: true,
      },
      {
        id: "part2.countryOfCitizenship",
        type: "text",
        label: "7. Country of Citizenship or Nationality",
        required: true,
      },
      {
        id: "part2.gender",
        type: "radio",
        label: "8. Gender",
        required: true,
        options: [
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
        ],
        helpText: "Must match your birth certificate",
      },
      {
        id: "part2.dob",
        type: "date",
        label: "9. Date of Birth (mm/dd/yyyy)",
        required: true,
        placeholder: "MM/DD/YYYY",
      },
      {
        id: "part2.ssn",
        type: "ssn",
        label: "10. U.S. Social Security Number (if any)",
        placeholder: "###-##-####",
        helpText: "Leave blank if you do not have one",
      },
      {
        id: "part2.uscisOnlineAccountNumber",
        type: "text",
        label: "11. USCIS Online Account Number (if any)",
      },
      {
        id: "part2.classOfAdmission",
        type: "text",
        label: "12. Class of Admission (if any)",
      },
      {
        id: "part2.i94RecordNumber",
        type: "text",
        label: "13. Most recent Form I-94 Arrival/Departure Record Number (if any)",
      },
    ],
  },
,

  {
    id: "part2-other-information",
    title: "Part 2: Other Information",
    description: "Provide additional identification details if applicable.",
    questions: [
      {
        id: "part2.eMedicalUsParoleeId",
        type: "text",
        label: "15. eMedical U.S. Parolee ID (USP ID) (if any)",
        helpText: "Enter your eMedical U.S. Parolee ID if you have one.",
      },
      {
        id: "part2.i94ExpirationDate",
        type: "text",
        label: "14. Expiration Date of Authorized Stay (Shown on Form I-94) (if any)",
        placeholder: "MM/DD/YYYY",
        helpText: "Enter as 2-digit month, 2-digit day, and 4-digit year.",
      },
      {
        id: "part2.classOfAdmission",
        type: "text",
        label: "26. Class of Admission (COA) (if any)",
        helpText: "Enter your Class of Admission.",
      },
      {
        id: "part2.i94RecordNumber",
        type: "text",
        label: "27. Most Recent Form I-94 Arrival/Departure Record Number (if any)",
        helpText: "Enter your most recent I-94 number if available.",
      },
    ],
  },
  {
    id: "part3-biographic-information",
    title: "Part 3: Biographic Information",
    description: "Provide biographic details of the person who will receive the travel document.",
    questions: [
      {
        id: "part3.ethnicity",
        type: "radio",
        label: "1. Ethnicity",
        options: [
          { value: "notHispanicOrLatino", label: "Not Hispanic or Latino" },
          { value: "hispanicOrLatino", label: "Hispanic or Latino" },
        ],
      },
      {
        id: "part3.race",
        type: "checkbox",
        label: "2. Race (Select all applicable boxes)",
        options: [
          { value: "blackOrAfricanAmerican", label: "Black or African American" },
          { value: "nativeHawaiianOrOtherPacificIslander", label: "Native Hawaiian or Other Pacific Islander" },
          { value: "americanIndianOrAlaskaNative", label: "American Indian or Alaska Native" },
          { value: "asian", label: "Asian" },
          { value: "white", label: "White" },
        ],
      },
      {
        id: "part3.height",
        type: "group",
        label: "3. Height",
        questions: [
          {
            id: "part3.heightFeet",
            type: "select",
            label: "Feet",
            options: [
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
            ],
          },
          {
            id: "part3.heightInches",
            type: "select",
            label: "Inches",
            options: [
              { value: "0", label: "0" },
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "4", label: "4" },
              { value: "5", label: "5" },
              { value: "6", label: "6" },
              { value: "7", label: "7" },
              { value: "8", label: "8" },
              { value: "9", label: "9" },
              { value: "10", label: "10" },
              { value: "11", label: "11" },
            ],
          },
        ],
      },
      {
        id: "part3.weight",
        type: "text",
        label: "4. Weight in Pounds",
        helpText: "Enter your weight in pounds.",
      },
      {
        id: "part3.eyeColor",
        type: "radio",
        label: "5. Eye Color (Select only one box)",
        options: [
          { value: "brown", label: "Brown" },
          { value: "gray", label: "Gray" },
          { value: "maroon", label: "Maroon" },
          { value: "unknownOrOther", label: "Unknown or Other" },
          { value: "pink", label: "Pink" },
          { value: "hazel", label: "Hazel" },
          { value: "green", label: "Green" },
          { value: "blue", label: "Blue" },
          { value: "black", label: "Black" },
        ],
      },
      {
        id: "part3.hairColor",
        type: "radio",
        label: "6. Hair Color (Select only one box)",
        options: [
          { value: "bald", label: "Bald (No Hair)" },
          { value: "blond", label: "Blond" },
          { value: "gray", label: "Gray" },
          { value: "sandy", label: "Sandy" },
          { value: "unknownOrOther", label: "Unknown or Other" },
          { value: "white", label: "White" },
          { value: "red", label: "Red" },
          { value: "brown", label: "Brown" },
          { value: "black", label: "Black" },
        ],
      },
    ],
  },
  {
    id: "part4-processing-information",
    title: "Part 4: Processing Information",
    description: "Provide details about previous travel documents and processing requests.",
    questions: [
      {
        id: "part4.previousReentryPermitOrRefugeeTravelDocument",
        type: "radio",
        label: "2. A. Have you EVER been issued a Reentry Permit or Refugee Travel Document?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part4.previousAdvanceParoleDocument",
        type: "radio",
        label: "3. A. Have you EVER been issued an Advance Parole Document?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part4.replacementRequest",
        type: "radio",
        label: "4. Are you requesting a replacement document?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part4.replacementReason",
        type: "radio",
        label: "5. Reason for Replacement",
        options: [
          { value: "notReceived", label: "Document was issued, but I did not receive it." },
          { value: "lostOrStolen", label: "Received document, but it was lost, stolen, or damaged." },
          { value: "incorrectInfo", label: "Received document, but it has incorrect information due to my error or change." },
          { value: "uscisError", label: "Received document, but it has incorrect information due to USCIS error." },
        ],
      },
    ],
  },
  {
    id: "part5-reentry-permit",
    title: "Part 5: Reentry Permit Information",
    description: "Complete this section only if applying for a Reentry Permit.",
    questions: [
      {
        id: "part5.timeOutsideUs",
        type: "radio",
        label: "1. Total time spent outside the United States since becoming a permanent resident",
        options: [
          { value: "lessThan6Months", label: "Less Than 6 Months" },
          { value: "6MonthsTo1Year", label: "6 Months to 1 Year" },
          { value: "1To2Years", label: "1 to 2 Years" },
          { value: "2To3Years", label: "2 to 3 Years" },
          { value: "3To4Years", label: "3 to 4 Years" },
          { value: "moreThan4Years", label: "More Than 4 Years" },
        ],
      },
    ],
  },
,

  {
    id: "part4-processing-information",
    title: "Part 4: Processing Information",
    description: "Provide details for processing your application.",
    questions: [
      {
        id: "part4.aptSteFlrNumber",
        type: "text",
        label: "9.a. If Apartment, Suite or Floor is Checked, Enter Apartment, Suite or Floor Number.",
        helpText: "Enter the number of your apartment, suite, or floor if applicable.",
      },
      {
        id: "part4.postalCode",
        type: "text",
        label: "9.a. Enter Postal Code.",
        required: true,
        helpText: "Provide the postal code for your address.",
      },
      {
        id: "part4.province",
        type: "text",
        label: "9.a. Enter Province.",
        helpText: "Provide the province if applicable.",
      },
      {
        id: "part4.country",
        type: "text",
        label: "9.a. Enter Country.",
        required: true,
        helpText: "Provide the country for your address.",
      },
      {
        id: "part4.email",
        type: "email",
        label: "9.c. Enter Email Address.",
        placeholder: "example@email.com",
        helpText: "Provide a valid email address for communication.",
      },
      {
        id: "part4.daytimePhone",
        type: "tel",
        label: "9.b. Enter Daytime Phone Number",
        placeholder: "(555) 123-4567",
        helpText: "Provide a daytime phone number where you can be reached.",
      },
    ],
  },
  {
    id: "part6-refugee-travel-document",
    title: "Part 6: Refugee Travel Document",
    description: "Complete this section only if applying for a Refugee Travel Document.",
    questions: [
      {
        id: "part6.travelToCountry",
        type: "radio",
        label: "2. Do you plan to travel to the country named above in Item Number 1?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        helpText: "Indicate if you plan to travel to the country from which you are a refugee or asylee.",
      },
      {
        id: "part6.countryRefugee",
        type: "text",
        label: "1. Country from which you are a refugee or asylee:",
        required: true,
        helpText: "Provide the name of the country from which you are a refugee or asylee.",
      },
      {
        id: "part6.nationalPassport",
        type: "radio",
        label: "3.b. Applied for and/or obtained a national passport, passport renewal, or entry permit from the country in Item Number 1?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.receivedBenefits",
        type: "radio",
        label: "3.c. Applied for and/or received any benefit from the country named in Item Number 1. (for example, health insurance benefits)?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.returnedToCountry",
        type: "radio",
        label: "3.a. Returned to the country named above in Item Number 1?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.reacquiredNationality",
        type: "radio",
        label: "4.a. Reacquired the nationality of the country named above in Item Number 1?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.acquiredNewNationality",
        type: "radio",
        label: "4.b. Acquired a new nationality?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.filingBeforeDeparture",
        type: "radio",
        label: "5. Are you filing for a Refugee Travel Document before departing the United States?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.outsideUS",
        type: "radio",
        label: "6.a. Are you currently outside the United States?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part6.currentLocation",
        type: "text",
        label: "6.b. If you answered 'Yes,' what is your current location (City or Town and Country)?",
        helpText: "Provide your current location if you are outside the United States.",
      },
      {
        id: "part6.traveledCountries",
        type: "text",
        label: "6.c. If you answered 'Yes,' what other countries have you traveled to since leaving the United States?",
        helpText: "List the countries you have traveled to since leaving the United States.",
      },
    ],
  },
  {
    id: "part7-proposed-travel",
    title: "Part 7: Information About Your Proposed Travel",
    description: "Complete this section only if you are applying for an Advance Parole Document.",
    questions: [
      {
        id: "part7.dateOfDeparture",
        type: "text",
        label: "1. Date of Intended Departure. Enter 2-digit Month, 2-digit Day, and 4-digit Year.",
        placeholder: "MM/DD/YYYY",
        helpText: "Provide the date you intend to depart.",
      },
      {
        id: "part7.purposeOfTrip",
        type: "textarea",
        label: "2. Purpose of trip.",
        helpText: "Describe the purpose of your trip. Use Part 13 for additional space if needed.",
      },
      {
        id: "part7.countriesToVisit",
        type: "textarea",
        label: "3. List the countries you intend to visit.",
        helpText: "List all countries you plan to visit. Use Part 13 for additional space if needed.",
      },
      {
        id: "part7.numberOfTrips",
        type: "radio",
        label: "4. How many trips do you intend to use this document?",
        options: [
          { value: "one", label: "One Trip" },
          { value: "multiple", label: "More than one trip" },
        ],
      },
      {
        id: "part7.expectedLengthOfTrip",
        type: "text",
        label: "5. Expected Length of Trip (in days)",
        helpText: "Provide the expected duration of your trip in days.",
      },
    ],
  },
  {
    id: "part10-applicant-contact",
    title: "Part 10: Applicant's Contact Information, Certification, and Signature",
    description: "Provide your contact information and certify the information provided.",
    questions: [
      {
        id: "part10.daytimePhone",
        type: "tel",
        label: "1. Applicant's Daytime Telephone Number.",
        placeholder: "(555) 123-4567",
        helpText: "Provide a telephone number where you can be reached during the day.",
      },
      {
        id: "part10.mobilePhone",
        type: "tel",
        label: "2. Applicant Mobile Telephone Number (if any).",
        placeholder: "(555) 123-4567",
      },
      {
        id: "part10.email",
        type: "email",
        label: "3. Applicant's Email Address (if any)",
        placeholder: "example@email.com",
      },
      {
        id: "part10.applicantSignature",
        type: "text",
        label: "4. Applicant's Signature",
        required: true,
        helpText: "Sign your name in ink. Digital signatures are not accepted.",
      },
      {
        id: "part10.dateOfSignature",
        type: "text",
        label: "4. Date of Signature. Enter as 2 digit month, 2 digit day and 4 digit year.",
        placeholder: "MM/DD/YYYY",
        required: true,
      },
    ],
  },
  {
    id: "part11-interpreter-contact",
    title: "Part 11: Interpreter's Contact Information, Certification, and Signature",
    description: "Complete this section if an interpreter assisted you.",
    questions: [
      {
        id: "part11.interpreterFamilyName",
        type: "text",
        label: "1. Interpreter's Family Name (Last Name)",
        helpText: "Provide the last name of the interpreter.",
      },
      {
        id: "part11.interpreterGivenName",
        type: "text",
        label: "1. Interpreter's Given Name (First Name)",
        helpText: "Provide the first name of the interpreter.",
      },
      {
        id: "part11.interpreterBusinessName",
        type: "text",
        label: "2. Interpreter's Business or Organization Name (if any)",
      },
      {
        id: "part11.daytimePhone",
        type: "tel",
        label: "3. Interpreter's Daytime Telephone Number.",
        placeholder: "(555) 123-4567",
      },
      {
        id: "part11.mobilePhone",
        type: "tel",
        label: "4. Interpreter's Mobile Telephone Number (if any)",
        placeholder: "(555) 123-4567",
      },
      {
        id: "part11.email",
        type: "email",
        label: "5. Interpreter's Email Address (if any)",
        placeholder: "example@email.com",
      },
      {
        id: "part11.language",
        type: "text",
        label: "Interpreter's Certification and Signature. Enter language",
        helpText: "Provide the language in which the interpreter is fluent.",
      },
      {
        id: "part11.interpreterSignature",
        type: "text",
        label: "6. Interpreter's Signature",
        helpText: "Sign your name in ink. Digital signatures are not accepted.",
      },
      {
        id: "part11.dateOfSignature",
        type: "text",
        label: "6. Date of Signature. Enter as 2 digit month, 2 digit day and 4 digit year.",
        placeholder: "MM/DD/YYYY",
      },
    ],
  },
  {
    id: "part12-preparer-contact",
    title: "Part 12: Preparer's Contact Information, Certification, and Signature",
    description: "Complete this section if someone else prepared this application for you.",
    questions: [
      {
        id: "part12.preparerFamilyName",
        type: "text",
        label: "1. Enter Preparer's Family Name (Last Name).",
        helpText: "Provide the last name of the preparer.",
      },
      {
        id: "part12.preparerGivenName",
        type: "text",
        label: "1. Enter Preparer's Given Name (First Name).",
        helpText: "Provide the first name of the preparer.",
      },
      {
        id: "part12.preparerBusinessName",
        type: "text",
        label: "2. Enter Preparer's Business or Organization Name.",
      },
      {
        id: "part12.daytimePhone",
        type: "tel",
        label: "3. Enter Preparer's Daytime Telephone Number.",
        placeholder: "(555) 123-4567",
      },
      {
        id: "part12.mobilePhone",
        type: "tel",
        label: "4. Enter Preparer's Mobile Telephone Number, if any.",
        placeholder: "(555) 123-4567",
      },
      {
        id: "part12.email",
        type: "email",
        label: "5. Enter Preparer's Email Address, if any.",
        placeholder: "example@email.com",
      },
      {
        id: "part12.preparerSignature",
        type: "text",
        label: "6. Preparer's Signature",
        helpText: "Sign your name in ink. Digital signatures are not accepted.",
      },
      {
        id: "part12.dateOfSignature",
        type: "text",
        label: "6. Date of Signature. Enter as 2 digit month, 2 digit day and 4 digit year.",
        placeholder: "MM/DD/YYYY",
      },
    ],
  },
  {
    id: "part13-additional-information",
    title: "Part 13: Additional Information",
    description: "Use this section to provide additional information as needed.",
    questions: [
      {
        id: "part13.familyName",
        type: "text",
        label: "1. Family Name (Last Name)",
        helpText: "This field pre-populates from page 1.",
      },
      {
        id: "part13.givenName",
        type: "text",
        label: "1. Given Name (First Name)",
        helpText: "This field pre-populates from page 1.",
      },
      {
        id: "part13.middleName",
        type: "text",
        label: "1. Middle Name",
        helpText: "This field pre-populates from page 1.",
      },
      {
        id: "part13.alienNumber",
        type: "text",
        label: "2. Alien Registration Number (A. Number), if any",
        helpText: "This field pre-populates from page 1.",
      },
      {
        id: "part13.pageNumber",
        type: "text",
        label: "3. Enter Page Number.",
      },
      {
        id: "part13.partNumber",
        type: "text",
        label: "3. Enter Part Number.",
      },
      {
        id: "part13.itemNumber",
        type: "text",
        label: "3. Enter Item Number.",
      },
      {
        id: "part13.additionalInfo",
        type: "textarea",
        label: "3. Enter Additional Information.",
        helpText: "Provide any additional information related to your application.",
      },
    ],
  },
,

  {
    id: "part13-additional-info",
    title: "Part 13: Additional Information",
    description: "Provide any additional information that could not be included in the previous sections. Reference the page, part, and item numbers for clarity.",
    questions: [
      {
        id: "part13.additionalInfo6",
        type: "textarea",
        label: "6. Enter Additional Information",
        helpText: "Use this space to provide any extra details that do not fit elsewhere on the form.",
      },
      {
        id: "part13.pageNumber",
        type: "text",
        label: "7.a. Page Number",
        helpText: "Indicate the page number of the form where additional information is needed.",
      },
      {
        id: "part13.partNumber",
        type: "text",
        label: "7.b. Part Number",
        helpText: "Specify the part number of the form related to your additional information.",
      },
      {
        id: "part13.itemNumber",
        type: "text",
        label: "7.c. Item Number",
        helpText: "Identify the item number on the form that corresponds to your additional information.",
      },
      {
        id: "part13.additionalInfo7",
        type: "textarea",
        label: "7.d. Enter Additional Information",
        helpText: "Provide further details or explanations as necessary for the referenced page, part, and item numbers.",
      },
    ],
  },
],
  pdfFieldMappings: I_131_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_131_DEFINITION;
