// @ts-nocheck - Form definitions have some type inconsistencies
import { z } from "zod";
import { I_600_FIELD_MAPPINGS } from "./form-mappings/i-600-field-mappings";
import { I_129_FIELD_MAPPINGS } from "./form-mappings/i-129-field-mappings";
import { I_131_FIELD_MAPPINGS } from "./form-mappings/i-131-field-mappings";
import { I_765_FIELD_MAPPINGS } from "./form-mappings/i-765-field-mappings";
import { N_400_FIELD_MAPPINGS } from "./form-mappings/n-400-field-mappings";

import { I_212_FIELD_MAPPINGS } from "./form-mappings/i-212-field-mappings";
import { I_751_FIELD_MAPPINGS } from "./form-mappings/i-751-field-mappings";
import { I_129F_FIELD_MAPPINGS } from "./form-mappings/i-129f-field-mappings";
import { I_485_FIELD_MAPPINGS } from "./form-mappings/i-485-fieldmappings";

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type QuestionType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "select"
  | "radio"
  | "checkbox"
  | "textarea"
  | "address"
  | "name"
  | "ssn"
  | "file";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  options?: QuestionOption[];
  validation?: z.ZodType<any>;
  conditional?: {
    dependsOn: string;
    values: string[];
  };
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

export interface PDFFieldMapping {
  questionId: string;
  pdfFieldName: string;
  transform?: (value: string) => string;
}

export interface FormDefinition {
  id: string;
  code: string; // e.g., "I-130", "N-400"
  name: string;
  description: string;
  category:
    | "family"
    | "employment"
    | "citizenship"
    | "travel"
    | "humanitarian"
    | "work_authorization"
    | "status_change"
    | "other";
  estimatedTime: string;
  filingFee: number; // USCIS government filing fee
  price?: number; // Our service price (in dollars, for display)
  sections: FormSection[];
  pdfFieldMappings: PDFFieldMapping[];
  requiredDocuments: string[];
  instructions: string[];
  status?: "active" | "beta"; // Status flag for form availability
}

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

const nameSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
});

const addressSchema = z.object({
  street: z.string().min(1, "Street address is required"),
  apt: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
});

const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format");
const emailSchema = z.string().email("Invalid email address");
const phoneSchema = z.string().regex(/^\d{10}$/, "Phone must be 10 digits");
const ssnSchema = z.string().regex(/^\d{3}-\d{2}-\d{4}$/, "Invalid SSN format");

// ============================================================================
// US STATES
// ============================================================================

const US_STATES = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

// ============================================================================
// FORM DEFINITIONS
// ============================================================================

const I_751_DEFINITION: FormDefinition = {
  id: "i-751",
  code: "I-751",
  name: "Petition to Remove Conditions on Residence",
  description: "Remove conditions from your 2-year conditional green card",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "part1-attorney-representation",
      title: "Part 1: Attorney or Accredited Representative",
      description:
        "Information about your attorney or accredited representative, if applicable.",
      questions: [
        {
          id: "part1.g28Attached",
          type: "radio",
          label: "Is Form G-28 attached?",
          options: [
            { value: "1", label: "Yes" },
            { value: "0", label: "No" },
          ],
          helpText:
            "Attach Form G-28 if you have an attorney or accredited representative.",
        },
        {
          id: "part1.attorneyStateBarNumber",
          type: "text",
          label: "Attorney State Bar Number",
          helpText:
            "Enter the state bar number of your attorney, if applicable.",
        },
        {
          id: "part1.uscisElisAccountNumber",
          type: "text",
          label: "USCIS Online Account Number",
          helpText: "Enter your USCIS online account number, if you have one.",
        },
      ],
    },
    {
<<<<<<< HEAD
      id: "part2-mailing-address",
      title: "Part 2: Your Mailing Address",
      questions: [
        {
          id: "part2.mailingInCareOf",
          type: "text",
          label: "In Care Of Name",
          helpText: "Optional - if mail should be sent c/o someone else",
        },
        {
          id: "part2.mailingStreet",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.mailingAptType",
          type: "select",
          label: "Apt/Ste/Flr",
          options: [
            { value: "", label: "None" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part2.mailingAptNumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
        },
        {
          id: "part2.mailingCity",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.mailingState",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.mailingZip",
          type: "text",
          label: "ZIP Code",
          required: true,
          placeholder: "12345",
        },
        {
          id: "part2.province",
          type: "text",
          label: "Province",
          helpText: "For foreign addresses only",
        },
        {
          id: "part2.postalCode",
          type: "text",
          label: "Postal Code",
          helpText: "For foreign addresses only",
        },
        {
          id: "part2.country",
          type: "text",
          label: "Country",
          helpText: "For foreign addresses only",
        },
      ],
    },
    {
      id: "part2-marital-info",
      title: "Part 2: Your Marital Information",
      questions: [
        {
          id: "part2.timesMarried",
          type: "text",
          label: "How many times have you been married?",
          required: true,
          placeholder: "Enter a number",
        },
        {
          id: "part2.currentMaritalStatus",
          type: "select",
          label: "Current Marital Status",
          required: true,
          options: [
            { value: "single", label: "Single, Never Married" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
            { value: "separated", label: "Marriage Annulled or Other" },
          ],
        },
        {
          id: "part2.currentSpouseName",
          type: "text",
          label: "Current Spouse's Full Name",
          helpText: "If currently married",
        },
        {
          id: "part2.dateOfMarriage",
          type: "date",
          label: "Date of Current Marriage",
          helpText: "If currently married",
        },
        {
          id: "part2.placeOfMarriage",
          type: "text",
          label: "Place of Current Marriage (City, State, Country)",
          helpText: "If currently married",
        },
      ],
    },
    {
      id: "part2-citizenship",
      title: "Part 2: Information About Your U.S. Citizenship",
      description: "Complete this section if you are a U.S. citizen",
      questions: [
        {
          id: "part2.citizenshipThrough",
          type: "radio",
          label: "How did you acquire U.S. citizenship?",
          options: [
            { value: "birth-us", label: "Birth in the United States" },
            { value: "naturalization", label: "Naturalization" },
            {
              value: "parents",
              label:
                "Parents (acquired after birth through U.S. citizen parents)",
            },
          ],
          helpText: "Select one",
        },
        {
          id: "part2.certificateNumber",
          type: "text",
          label:
            "Certificate of Naturalization Number or Certificate of Citizenship Number",
          helpText: "If you naturalized or acquired citizenship",
        },
        {
          id: "part2.placeOfNaturalization",
          type: "text",
          label: "Place of Naturalization or Acquisition (City, State)",
          helpText: "If you naturalized or acquired citizenship",
        },
      ],
    },
    {
      id: "part4-beneficiary-info",
      title: "Part 4: Information About Your Relative (Beneficiary)",
      description:
        "Provide information about the person you are petitioning for",
      questions: [
        {
          id: "part4.alienNumber",
          type: "text",
          label: "Beneficiary's Alien Registration Number (A-Number)",
          placeholder: "A-",
          helpText: "If they have one",
        },
        {
          id: "part4.uscisOnlineAccount",
          type: "text",
          label: "Beneficiary's USCIS Online Account Number",
        },
        {
          id: "part4.ssn",
          type: "ssn",
          label: "Beneficiary's U.S. Social Security Number",
          helpText: "If they have one",
        },
        {
          id: "part4.lastName",
          type: "text",
          label: "Beneficiary's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.firstName",
          type: "text",
          label: "Beneficiary's Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.middleName",
          type: "text",
          label: "Beneficiary's Middle Name",
        },
        {
          id: "part4.cityOfBirth",
          type: "text",
          label: "Beneficiary's City or Town of Birth",
          required: true,
        },
        {
          id: "part4.countryOfBirth",
          type: "text",
          label: "Beneficiary's Country of Birth",
          required: true,
        },
        {
          id: "part4.dateOfBirth",
          type: "date",
          label: "Beneficiary's Date of Birth",
          required: true,
        },
        {
          id: "part4.sex",
          type: "radio",
          label: "Beneficiary's Sex",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        {
          id: "part4.hasOtherNames",
          type: "radio",
          label: "Has your relative ever used other names?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part4.otherNames",
          type: "textarea",
          label: "Other Names Used by Beneficiary",
          helpText: "If yes, list all other names",
        },
      ],
    },
    {
      id: "part4-beneficiary-address",
      title: "Part 4: Beneficiary's Address",
      questions: [
        {
          id: "part4.street",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part4.aptType",
          type: "select",
          label: "Apt/Ste/Flr",
          options: [
            { value: "", label: "None" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part4.aptNumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
        },
        {
          id: "part4.city",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part4.state",
          type: "text",
          label: "State or Province",
        },
        {
          id: "part4.zip",
          type: "text",
          label: "ZIP or Postal Code",
        },
        {
          id: "part4.country",
          type: "text",
          label: "Country",
          required: true,
        },
      ],
    },
    {
      id: "part4-beneficiary-marital",
      title: "Part 4: Beneficiary's Marital Information",
      questions: [
        {
          id: "part4.timesMarried",
          type: "text",
          label: "How many times has the beneficiary been married?",
          required: true,
        },
        {
          id: "part4.currentMaritalStatus",
          type: "select",
          label: "Beneficiary's Current Marital Status",
          required: true,
          options: [
            { value: "single", label: "Single, Never Married" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
            { value: "separated", label: "Marriage Annulled or Other" },
          ],
        },
        {
          id: "part4.spouseName",
          type: "text",
          label: "Beneficiary's Current Spouse's Full Name",
          helpText: "If currently married",
        },
        {
          id: "part4.dateOfMarriage",
          type: "date",
          label: "Date of Marriage",
          helpText: "If currently married",
        },
      ],
    },
    {
      id: "part4-immigration-intent",
      title: "Part 4: Immigration Intent",
      description: "Indicate how the beneficiary will immigrate",
      questions: [
        {
          id: "part4.immigrationPath",
          type: "radio",
          label: "The beneficiary will apply for:",
          required: true,
          options: [
            {
              value: "adjustment",
              label: "Adjustment of status in the United States (Form I-485)",
            },
            {
              value: "consular",
              label: "An immigrant visa abroad at a U.S. Embassy or consulate",
            },
          ],
          helpText: "IMPORTANT: You must select only ONE option",
        },
        {
          id: "part4.consularLocation",
          type: "text",
          label:
            "If applying for an immigrant visa abroad, provide the location (City, Country) where the beneficiary will apply",
          helpText: "E.g., London, United Kingdom",
        },
      ],
    },
  ],
  pdfFieldMappings: [
    // { questionId: "part2.lastName", pdfFieldName: "Pt2Line4a_FamilyName" },
    // { questionId: "part2.firstName", pdfFieldName: "Pt2Line4b_GivenName" },
    // { questionId: "part2.middleName", pdfFieldName: "Pt2Line4c_MiddleName" },
    // { questionId: "part4.lastName", pdfFieldName: "Pt4Line4a_FamilyName" },
    // { questionId: "part4.firstName", pdfFieldName: "Pt4Line4b_GivenName" },
  ],
  requiredDocuments: [
    "Proof of your U.S. citizenship (birth certificate, naturalization certificate, or U.S. passport)",
    "Proof of relationship to beneficiary (birth certificate, marriage certificate, etc.)",
    "Evidence of legal name change (if applicable)",
    "Two passport-style photos of the beneficiary",
  ],
  instructions: [
    "Complete all applicable sections",
    "Answer all questions - use N/A if not applicable",
    "Sign and date Part 6",
    "Include the $535 filing fee",
    "Mail to the appropriate USCIS Lockbox facility",
  ],
};

// const I485_DEFINITION: FormDefinition = {
//   id: "i-485",
//   code: "I-485",
//   name: "Application to Register Permanent Residence or Adjust Status",
//   description: "Apply for a green card while in the United States",
//   category: "family",
//   estimatedTime: "90-120 minutes",
//   filingFee: 1140,
//   price: 70,
//   sections: [
//     // ... (your existing sections remain the same)
//   ],
//   pdfFieldMappings: [
//     // ==================== PART 1: Information About You ====================

//     // 1. Your Current Legal Name
//     { questionId: "part1.familyName", pdfFieldName: "Pt1Line1a_FamilyName" },
//     { questionId: "part1.givenName", pdfFieldName: "Pt1Line1b_GivenName" },
//     { questionId: "part1.middleName", pdfFieldName: "Pt1Line1c_MiddleName" },

//     // 2. Other Names You Have Used Since Birth
//     {
//       questionId: "part1.otherNameUsed",
//       pdfFieldName: "Pt1Line2a_FamilyName",
//       transform: (value: string) =>
//         value === "yes" ? "See Additional Information" : "",
//     },

//     // 5. Date of Birth
//     { questionId: "part1.dob", pdfFieldName: "Pt1Line3_DOB" },

//     // 6. Sex
//     {
//       questionId: "part1.sex",
//       pdfFieldName: "Pt1Line6_Male",
//       transform: (value: string) => (value === "male" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part1.sex",
//       pdfFieldName: "Pt1Line6_Female",
//       transform: (value: string) => (value === "female" ? "Yes" : "Off"),
//     },

//     // 7. Place of Birth
//     { questionId: "part1.cityOfBirth", pdfFieldName: "Pt1Line7a_CityTown" },
//     { questionId: "part1.countryOfBirth", pdfFieldName: "Pt1Line7b_Country" },

//     // 8. Country of Citizenship or Nationality
//     {
//       questionId: "part1.countryOfCitizenship",
//       pdfFieldName: "Pt1Line8_Country",
//     },

//     // 10. Alien Registration Number (A-Number)
//     { questionId: "part1.alienNumber", pdfFieldName: "Pt1Line4_ANumber" },

//     // 11. USCIS Online Account Number
//     {
//       questionId: "part1.uscisAccount",
//       pdfFieldName: "Pt1Line9_OnlineAccount",
//     },

//     // 12. U.S. Social Security Number
//     { questionId: "part1.ssn", pdfFieldName: "Pt1Line19_SSN" },

//     // 13. Current U.S. Mailing Address
//     {
//       questionId: "part1.mailingCareOfName",
//       pdfFieldName: "Pt1Line13a_InCareOf",
//     },
//     { questionId: "part1.mailingStreet", pdfFieldName: "Pt1Line13b_Street" },
//     { questionId: "part1.mailingAptType", pdfFieldName: "Pt1Line13c_AptType" },
//     {
//       questionId: "part1.mailingAptNumber",
//       pdfFieldName: "Pt1Line13d_AptNumber",
//     },
//     { questionId: "part1.mailingCity", pdfFieldName: "Pt1Line13e_City" },
//     { questionId: "part1.mailingState", pdfFieldName: "Pt1Line13f_State" },
//     { questionId: "part1.mailingZip", pdfFieldName: "Pt1Line13g_ZIP" },

//     // 15-18. Passport/Travel Document Information
//     {
//       questionId: "part1.passportNumber",
//       pdfFieldName: "Pt1Line15_PassportNumber",
//     },
//     {
//       questionId: "part1.travelDocNumber",
//       pdfFieldName: "Pt1Line16_TravelDocNumber",
//     },
//     {
//       questionId: "part1.passportExpiration",
//       pdfFieldName: "Pt1Line17_ExpirationDate",
//     },
//     { questionId: "part1.passportCountry", pdfFieldName: "Pt1Line18_Country" },

//     // 19. Nonimmigrant Visa Number
//     { questionId: "part1.visaNumber", pdfFieldName: "Pt1Line19_VisaNumber" },

//     // 20-21. Last Arrival Information
//     { questionId: "part1.entryCity", pdfFieldName: "Pt1Line20a_City" },
//     { questionId: "part1.entryState", pdfFieldName: "Pt1Line20b_State" },
//     { questionId: "part1.dateOfLastEntry", pdfFieldName: "Pt1Line21_Date" },

//     // 22. Arrival Status
//     {
//       questionId: "part1.inspected",
//       pdfFieldName: "Pt1Line22a_Inspected",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part1.inspected",
//       pdfFieldName: "Pt1Line22c_WithoutAdmission",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // 23. I-94 Information
//     { questionId: "part1.i94Number", pdfFieldName: "Pt1Line23a_I94Number" },
//     { questionId: "part1.statusAtEntry", pdfFieldName: "Pt1Line23c_Status" },

//     // 24. Current Immigration Status
//     {
//       questionId: "part1.currentStatus",
//       pdfFieldName: "Pt1Line24_CurrentStatus",
//     },

//     // ==================== PART 2: Application Type ====================

//     // 1. Filing with EOIR
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line1_EOIR",
//       transform: (value: string) => "No", // Default to No unless specified
//     },

//     // 2. Receipt Number of Underlying Petition
//     // Note: This would need a separate question in your form

//     // 3. Filing as Principal or Derivative Applicant
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3_Principal",
//       transform: (value: string) => "Yes", // Assuming principal for now
//     },

//     // 3.a. Family-based categories
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3a_SpouseCitizen",
//       transform: (value: string) =>
//         value === "family-immediate" ? "Yes" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3a_ChildUnder21",
//       transform: (value: string) =>
//         value === "family-immediate" ? "Off" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3a_ParentCitizen",
//       transform: (value: string) =>
//         value === "family-immediate" ? "Off" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3a_Fiance",
//       transform: (value: string) =>
//         value === "family-immediate" ? "Off" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3a_Widow",
//       transform: (value: string) => (value === "widow" ? "Yes" : "Off"),
//     },

//     // 3.b. Employment-based categories
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3b_EB1",
//       transform: (value: string) =>
//         value === "employment-eb1" ? "Yes" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3b_EB2",
//       transform: (value: string) =>
//         value === "employment-eb2" ? "Yes" : "Off",
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3b_EB3",
//       transform: (value: string) =>
//         value === "employment-eb3" ? "Yes" : "Off",
//     },

//     // 3.c. Special Immigrant
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3c_SpecialImmigrant",
//       transform: (value: string) =>
//         value === "special-immigrant" ? "Yes" : "Off",
//     },

//     // 3.d. Asylee or Refugee
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3d_Asylee",
//       transform: (value: string) => (value === "asylee" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3d_Refugee",
//       transform: (value: string) => (value === "refugee" ? "Yes" : "Off"),
//     },

//     // 3.g. Additional Options
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3g_Diversity",
//       transform: (value: string) => (value === "diversity" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part2.filingCategory",
//       pdfFieldName: "Pt2Line3g_Cuban",
//       transform: (value: string) =>
//         value === "cuban-adjustment" ? "Yes" : "Off",
//     },

//     // 4. Section 245(i)
//     {
//       questionId: "part2.section245i",
//       pdfFieldName: "Pt2Line4_245iYes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part2.section245i",
//       pdfFieldName: "Pt2Line4_245iNo",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // ==================== PART 7: Biographic Information ====================

//     // 1. Ethnicity
//     {
//       questionId: "part7.ethnicity",
//       pdfFieldName: "Pt7Line1_Hispanic",
//       transform: (value: string) => (value === "hispanic" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part7.ethnicity",
//       pdfFieldName: "Pt7Line1_NotHispanic",
//       transform: (value: string) => (value === "not-hispanic" ? "Yes" : "Off"),
//     },

//     // 2. Race
//     {
//       questionId: "part7.race",
//       pdfFieldName: "Pt7Line2_White",
//       transform: (value: string) => (value.includes("white") ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part7.race",
//       pdfFieldName: "Pt7Line2_Asian",
//       transform: (value: string) => (value.includes("asian") ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part7.race",
//       pdfFieldName: "Pt7Line2_Black",
//       transform: (value: string) => (value.includes("black") ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part7.race",
//       pdfFieldName: "Pt7Line2_NativeAmerican",
//       transform: (value: string) =>
//         value.includes("native-american") ? "Yes" : "Off",
//     },
//     {
//       questionId: "part7.race",
//       pdfFieldName: "Pt7Line2_Pacific",
//       transform: (value: string) => (value.includes("pacific") ? "Yes" : "Off"),
//     },

//     // 3. Height
//     {
//       questionId: "part7.height",
//       pdfFieldName: "Pt7Line3_Height",
//       transform: (value: string) => {
//         // Convert "5 feet 8 inches" to "5'8" format
//         const match = value.match(/(\d+)\s*feet?\s*(\d+)\s*inches?/i);
//         if (match) {
//           return `${match[1]}'${match[2]}"`;
//         }
//         return value;
//       },
//     },

//     // 4. Weight
//     { questionId: "part7.weight", pdfFieldName: "Pt7Line4_Weight" },

//     // 5. Eye Color
//     { questionId: "part7.eyeColor", pdfFieldName: "Pt7Line5_EyeColor" },

//     // 6. Hair Color
//     { questionId: "part7.hairColor", pdfFieldName: "Pt7Line6_HairColor" },

//     // ==================== PART 8: Eligibility Questions ====================

//     // Criminal History (Question 22)
//     {
//       questionId: "part8.criminalHistory",
//       pdfFieldName: "Pt9Line22_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.criminalHistory",
//       pdfFieldName: "Pt9Line22_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Crime Conviction (Question 24)
//     {
//       questionId: "part8.crimeConviction",
//       pdfFieldName: "Pt9Line24_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.crimeConviction",
//       pdfFieldName: "Pt9Line24_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Controlled Substance (Question 26)
//     {
//       questionId: "part8.controlledSubstance",
//       pdfFieldName: "Pt9Line26_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.controlledSubstance",
//       pdfFieldName: "Pt9Line26_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Prostitution (Question 30)
//     {
//       questionId: "part8.prostitution",
//       pdfFieldName: "Pt9Line30_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.prostitution",
//       pdfFieldName: "Pt9Line30_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Human Trafficking (Question 36)
//     {
//       questionId: "part8.humanTrafficking",
//       pdfFieldName: "Pt9Line36_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.humanTrafficking",
//       pdfFieldName: "Pt9Line36_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Money Laundering (Question 41)
//     {
//       questionId: "part8.moneyLaundering",
//       pdfFieldName: "Pt9Line41_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.moneyLaundering",
//       pdfFieldName: "Pt9Line41_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Terrorist Activity (Question 42-45)
//     {
//       questionId: "part8.terroristActivity",
//       pdfFieldName: "Pt9Line42a_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.terroristActivity",
//       pdfFieldName: "Pt9Line42a_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Totalitarian Party (Question 52)
//     {
//       questionId: "part8.totalitarianParty",
//       pdfFieldName: "Pt9Line52_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.totalitarianParty",
//       pdfFieldName: "Pt9Line52_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Persecution (Question 53)
//     {
//       questionId: "part8.persecution",
//       pdfFieldName: "Pt9Line53a_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.persecution",
//       pdfFieldName: "Pt9Line53a_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Torture (Question 53.a)
//     {
//       questionId: "part8.torture",
//       pdfFieldName: "Pt9Line53a_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.torture",
//       pdfFieldName: "Pt9Line53a_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Genocide (Question 53.b)
//     {
//       questionId: "part8.genocide",
//       pdfFieldName: "Pt9Line53b_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.genocide",
//       pdfFieldName: "Pt9Line53b_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Child Soldier (Question 54-55)
//     {
//       questionId: "part8.childSoldier",
//       pdfFieldName: "Pt9Line54_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.childSoldier",
//       pdfFieldName: "Pt9Line54_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Religious Freedom (Question 35.b)
//     {
//       questionId: "part8.religiousFreedom",
//       pdfFieldName: "Pt9Line35b_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.religiousFreedom",
//       pdfFieldName: "Pt9Line35b_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Immigration Fraud (Question 68-69)
//     {
//       questionId: "part8.immigrationFraud",
//       pdfFieldName: "Pt9Line68_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.immigrationFraud",
//       pdfFieldName: "Pt9Line68_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // False U.S. Citizen Claim (Question 70)
//     {
//       questionId: "part8.falseUSCitizen",
//       pdfFieldName: "Pt9Line70_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.falseUSCitizen",
//       pdfFieldName: "Pt9Line70_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Voted Illegally (Question 82)
//     {
//       questionId: "part8.votedIllegally",
//       pdfFieldName: "Pt9Line82_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.votedIllegally",
//       pdfFieldName: "Pt9Line82_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Renounced Citizenship (Question 83)
//     {
//       questionId: "part8.renounced",
//       pdfFieldName: "Pt9Line83_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.renounced",
//       pdfFieldName: "Pt9Line83_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // Unlawfully Present (Question 76)
//     {
//       questionId: "part8.unlawfullyPresent",
//       pdfFieldName: "Pt9Line76_Yes",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.unlawfullyPresent",
//       pdfFieldName: "Pt9Line76_No",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },

//     // ==================== ADDITIONAL MAPPINGS ====================

//     // Note: For textarea fields (address history, employment history),
//     // these would typically go in Part 14 (Additional Information)
//     {
//       questionId: "part3.addressHistory",
//       pdfFieldName: "Pt14_AddressHistory",
//       transform: (value: string) => value, // Goes to Additional Information section
//     },
//     {
//       questionId: "part3.employmentHistory",
//       pdfFieldName: "Pt14_EmploymentHistory",
//       transform: (value: string) => value, // Goes to Additional Information section
//     },
//     {
//       questionId: "part6.childrenDetails",
//       pdfFieldName: "Pt14_ChildrenInfo",
//       transform: (value: string) => value, // Goes to Additional Information section
//     },

//     // Parents Information
//     {
//       questionId: "part4.parent1FamilyName",
//       pdfFieldName: "Pt5Line1a_Parent1FamilyName",
//     },
//     {
//       questionId: "part4.parent1GivenName",
//       pdfFieldName: "Pt5Line1b_Parent1GivenName",
//     },
//     { questionId: "part4.parent1Dob", pdfFieldName: "Pt5Line3_Parent1DOB" },
//     {
//       questionId: "part4.parent1CountryOfBirth",
//       pdfFieldName: "Pt5Line4_Parent1Country",
//     },

//     {
//       questionId: "part4.parent2FamilyName",
//       pdfFieldName: "Pt5Line5a_Parent2FamilyName",
//     },
//     {
//       questionId: "part4.parent2GivenName",
//       pdfFieldName: "Pt5Line5b_Parent2GivenName",
//     },
//     { questionId: "part4.parent2Dob", pdfFieldName: "Pt5Line7_Parent2DOB" },
//     {
//       questionId: "part4.parent2CountryOfBirth",
//       pdfFieldName: "Pt5Line8_Parent2Country",
//     },

//     // Marital History
//     {
//       questionId: "part5.currentMaritalStatus",
//       pdfFieldName: "Pt6Line1_Single",
//       transform: (value: string) => (value === "single" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part5.currentMaritalStatus",
//       pdfFieldName: "Pt6Line1_Married",
//       transform: (value: string) => (value === "married" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part5.currentMaritalStatus",
//       pdfFieldName: "Pt6Line1_Divorced",
//       transform: (value: string) => (value === "divorced" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part5.currentMaritalStatus",
//       pdfFieldName: "Pt6Line1_Widowed",
//       transform: (value: string) => (value === "widowed" ? "Yes" : "Off"),
//     },

//     { questionId: "part5.timesMarried", pdfFieldName: "Pt6Line3_TimesMarried" },
//     {
//       questionId: "part5.currentSpouseFamilyName",
//       pdfFieldName: "Pt6Line4a_SpouseFamilyName",
//     },
//     {
//       questionId: "part5.currentSpouseGivenName",
//       pdfFieldName: "Pt6Line4b_SpouseGivenName",
//     },
//     {
//       questionId: "part5.dateOfMarriage",
//       pdfFieldName: "Pt6Line9_DateOfMarriage",
//     },
//     {
//       questionId: "part5.placeOfMarriage",
//       pdfFieldName: "Pt6Line9_PlaceOfMarriage",
//     },

//     // Children Information (in Part 14)
//     {
//       questionId: "part6.totalChildren",
//       pdfFieldName: "Pt7Line1_TotalChildren",
//     },

//     // Public Charge (Question 56)
//     {
//       questionId: "part8.publicCharge",
//       pdfFieldName: "Pt9Line56_Exempt",
//       transform: (value: string) => (value === "no" ? "Yes" : "Off"),
//     },
//     {
//       questionId: "part8.publicCharge",
//       pdfFieldName: "Pt9Line56_NotExempt",
//       transform: (value: string) => (value === "yes" ? "Yes" : "Off"),
//     },
//   ],
//   requiredDocuments: [
//     "Copy of I-130 approval notice (if family-based)",
//     "Birth certificate with certified English translation",
//     "Passport biographical pages",
//     "Two passport-style photos",
//     "Medical examination (Form I-693) in sealed envelope",
//     "Affidavit of Support (Form I-864) if required",
//     "Evidence of lawful entry (I-94, visa, etc.)",
//     "Marriage certificate (if applicable)",
//     "Divorce/death certificates for prior marriages (if applicable)",
//   ],
//   instructions: [],
// };

const I485_DEFINITION: FormDefinition = {
  id: "i-485",
  code: "I-485",
  name: "Application to Register Permanent Residence or Adjust Status",
  description: "Apply for a green card while in the United States",
  category: "family",
  estimatedTime: "90-120 minutes",
  filingFee: 1140,
  price: 60,
  sections: [
    // PART 1: Information About You
    {
=======
>>>>>>> Test
      id: "part1-personal-info",
      title: "Part 1: Personal Information",
      description: "Provide your personal information.",
      questions: [
        {
          id: "part1.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part1.otherNamesUsed.familyName",
          type: "text",
          label: "2.a. Other Names Used - Family Name (Last Name)",
          helpText: "Enter any other last names you have used.",
        },
        {
          id: "part1.otherNamesUsed.givenName",
          type: "text",
          label: "2.b. Other Names Used - Given Name (First Name)",
          helpText: "Enter any other first names you have used.",
        },
        {
          id: "part1.otherNamesUsed.middleName",
          type: "text",
          label: "2.c. Other Names Used - Middle Name",
        },
        {
          id: "part1.otherNamesUsed.familyName2",
          type: "text",
          label: "3.a. Other Names Used - Family Name (Last Name)",
          helpText: "Enter any additional last names you have used.",
        },
        {
          id: "part1.otherNamesUsed.givenName2",
          type: "text",
          label: "3.b. Other Names Used - Given Name (First Name)",
          helpText: "Enter any additional first names you have used.",
        },
        {
          id: "part1.otherNamesUsed.middleName2",
          type: "text",
          label: "3.c. Other Names Used - Middle Name",
        },
        {
          id: "part1.dateOfBirth",
          type: "date",
          label: "4. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.countryOfBirth",
          type: "text",
          label: "5. Country of Birth",
          required: true,
        },
        {
          id: "part1.countryOfCitizenship",
          type: "text",
          label: "6. Country of Citizenship",
          required: true,
        },
        {
          id: "part1.alienNumber",
          type: "text",
          label: "7. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number, if you have one.",
        },
        {
          id: "part1.ssn",
          type: "ssn",
          label: "8. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Enter your SSN, if you have one.",
        },
        {
          id: "part1.maritalStatus",
          type: "radio",
          label: "10. Marital Status",
          required: true,
          options: [
            { value: "M", label: "Married" },
            { value: "W", label: "Widowed" },
            { value: "S", label: "Single" },
            { value: "D", label: "Divorced" },
          ],
        },
        {
          id: "part1.dateOfMarriage",
          type: "date",
          label: "11. Date of Marriage (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.placeOfMarriage",
          type: "text",
          label: "12. Place of Marriage",
        },
        {
          id: "part1.dateMarriageEnded",
          type: "date",
          label: "13. Date Marriage Ended (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date your marriage ended, if applicable.",
        },
        {
          id: "part1.conditionalResidenceExpiresOn",
          type: "date",
          label: "14. Conditional Residence Expires On (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
          required: true,
        },
      ],
    },
    {
      id: "part1-mailing-address",
      title: "Part 1: Mailing Address",
      description: "Provide your current mailing address.",
      questions: [
        {
          id: "part1.mailingAddress.inCareOfName",
          type: "text",
          label: "17.a. In Care Of Name",
          helpText:
            "Enter the name of the person who receives mail at this address, if applicable.",
        },
        {
          id: "part1.mailingAddress.streetNumberAndName",
          type: "text",
          label: "17.b. Street Number and Name",
          required: true,
        },
        {
          id: "part1.mailingAddress.aptSteFlrNumber",
          type: "text",
          label: "17.c. Apt./Ste./Flr. Number",
        },

        {
          id: "part1.mailingAddress.unit",
          type: "radio",
          label: "6.b. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },

        {
          id: "part1.mailingAddress.cityOrTown",
          type: "text",
          label: "17.d. City or Town",
          required: true,
        },
        {
          id: "part1.mailingAddress.state",
          type: "select",
          label: "17.e. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.mailingAddress.zipCode",
          type: "text",
          label: "17.f. ZIP Code",
          required: true,
        },
        {
          id: "part1.physicalAddressDifferent",
          type: "radio",
          label:
            "Is your physical address different from your mailing address?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part1-physical-address",
      title: "Part 1: Physical Address",
      description:
        "Provide your current physical address, if different from mailing address.",
      questions: [
        {
          id: "part1.physicalAddress.inCareOfName",
          type: "text",
          label: "18.a. In Care Of Name",
          helpText:
            "Enter the name of the person who receives mail at this address, if applicable.",
        },
        {
          id: "part1.physicalAddress.streetNumberAndName",
          type: "text",
          label: "18.b. Street Number and Name",
          required: true,
        },
        {
          id: "part1.physicalAddress.aptSteFlrNumber",
          type: "text",
          label: "18.c. Apt./Ste./Flr. Number",
        },

        {
          id: "part1.mailingAddress.u",
          type: "radio",
          label: "6.b. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },

        {
          id: "part1.physicalAddress.cityOrTown",
          type: "text",
          label: "18.d. City or Town",
          required: true,
        },
        {
          id: "part1.physicalAddress.state",
          type: "select",
          label: "18.e. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.physicalAddress.zipCode",
          type: "text",
          label: "18.f. ZIP Code",
          required: true,
        },
      ],
    },
    {
      id: "part1-additional-info",
      title: "Part 1: Additional Information",
      description:
        "Provide additional information relevant to your application.",
      questions: [
        {
          id: "part1.removalProceedings",
          type: "radio",
          label: "Are you currently in removal proceedings?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.feePaidToNonAttorney",
          type: "radio",
          label:
            "Did you pay anyone other than an attorney or accredited representative to assist you in preparing this form?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.criminalHistory",
          type: "radio",
          label: "Do you have any criminal history?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "Include any arrests, charges, or convictions.",
        },
        {
          id: "part1.differentMarriage",
          type: "radio",
          label:
            "Is this application based on a different marriage than the one that granted you conditional residence?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.otherAddresses",
          type: "radio",
          label:
            "Have you lived at any other addresses since becoming a conditional resident?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.spouseServingOutsideUS",
          type: "radio",
          label:
            "Is your spouse currently serving outside the United States in the U.S. Armed Forces or other government service?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },

    {
      id: "part2-physical-characteristics",
      title: "Part 2: Physical Characteristics",
      description:
        "Provide your physical characteristics as they appear on your identification documents.",
      questions: [
        {
          id: "part2.heightFeet",
          type: "radio",
          label: "Height (Feet)",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
          helpText: "Select the number of feet in your height.",
        },
        {
          id: "part2.heightInches",
          type: "radio",
          label: "Height (Inches)",
          required: true,
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
          helpText: "Select the number of inches in your height.",
        },
        {
          id: "part2.weightFirstDigit",
          type: "text",
          label: "Weight (First Digit)",
          required: true,
          helpText: "Enter the first digit of your weight in pounds.",
        },
        {
          id: "part2.weightSecondDigit",
          type: "text",
          label: "Weight (Second Digit)",
          required: true,
          helpText: "Enter the second digit of your weight in pounds.",
        },
        {
          id: "part2.weightThirdDigit",
          type: "text",
          label: "Weight (Third Digit)",
          required: true,
          helpText: "Enter the third digit of your weight in pounds.",
        },
      ],
    },
    {
      id: "part2-ethnicity-race",
      title: "Part 2: Ethnicity and Race",
      description: "Select your ethnicity and race as they best describe you.",
      questions: [
        {
          id: "part2.ethnicity",
          type: "radio",
          label: "Ethnicity",
          required: true,
          options: [
            { value: "N", label: "Not Hispanic or Latino" },
            { value: "H", label: "Hispanic or Latino" },
          ],
          helpText: "Select your ethnicity.",
        },
        {
          id: "part2.race",
          type: "radio",
          label: "Race",
          required: true,
          options: [
            {
              value: "Hawaiian",
              label: "Native Hawaiian or Other Pacific Islander",
            },
            {
              value: "AmericanIndian",
              label: "American Indian or Alaska Native",
            },
            { value: "white", label: "White" },
            { value: "asian", label: "Asian" },
            { value: "black", label: "Black or African American" },
          ],
          helpText: "Select all races that apply.",
        },
      ],
    },
    {
      id: "part2-eye-hair-color",
      title: "Part 2: Eye and Hair Color",
      description:
        "Provide your eye and hair color as they appear on your identification documents.",
      questions: [
        {
          id: "part2.eyeColor",
          type: "radio",
          label: "Eye Color",
          required: true,
          options: [
            { value: "BLU", label: "Blue" },
            { value: "GRN", label: "Green" },
            { value: "HAZ", label: "Hazel" },
            { value: "PNK", label: "Pink" },
            { value: "MAR", label: "Maroon" },
            { value: "BRO", label: "Brown" },
            { value: "BLK", label: "Black" },
            { value: "UNK", label: "Unknown" },
            { value: "GRY", label: "Gray" },
          ],
          helpText: "Select your eye color.",
        },
        {
          id: "part2.hairColor",
          type: "radio",
          label: "Hair Color",
          required: true,
          options: [
            { value: "BAL", label: "Bald" },
            { value: "BLN", label: "Blonde" },
            { value: "GRY", label: "Gray" },
            { value: "SDY", label: "Sandy" },
            { value: "UNK", label: "Unknown" },
            { value: "BLK", label: "Black" },
            { value: "BRO", label: "Brown" },
            { value: "RED", label: "Red" },
          ],
          helpText: "Select your hair color.",
        },
      ],
    },

    {
      id: "part3-basis-for-petition",
      title: "Part 3: Basis for Petition",
      description:
        "Select the basis for your petition to remove conditions on residence.",
      questions: [
        {
          id: "part3.basisForPetition.jointFiling",
          type: "radio",
          label: "1. I am filing this petition jointly with my spouse.",
          required: true,
          options: [
            {
              value: "A",
              label:
                "A. Our marriage was entered in good faith, and we are still married.",
            },
            {
              value: "B",
              label:
                "B. Our marriage was entered in good faith, but my spouse is deceased.",
            },
          ],
          helpText:
            "Select the option that best describes your current marital situation.",
        },
        {
          id: "part3.basisForPetition.waiverOrIndividualFiling",
          type: "radio",
          label: "2. I am requesting a waiver or filing individually.",
          required: true,
          options: [
            {
              value: "C",
              label:
                "C. Our marriage was entered in good faith, but has ended in divorce or annulment.",
            },
            {
              value: "D",
              label:
                "D. Our marriage was entered in good faith, but I have been battered or subjected to extreme cruelty by my spouse.",
            },
            {
              value: "E",
              label:
                "E. The termination of my status and removal would result in extreme hardship.",
            },
            {
              value: "F",
              label:
                "F. I am a child of a marriage that was entered in good faith, but I have been battered or subjected to extreme cruelty by my parent.",
            },
            {
              value: "G",
              label:
                "G. I am a child of a marriage that was entered in good faith, but the marriage has ended in divorce or annulment.",
            },
          ],
          helpText:
            "Select the option that best describes your situation if you are not filing jointly with your spouse.",
        },
      ],
    },

    {
      id: "part4-relationship",
      title: "Part 4: Relationship to Conditional Permanent Resident",
      description:
        "Specify your relationship to the conditional permanent resident.",
      questions: [
        {
          id: "part4.relationship",
          type: "radio",
          label: "Relationship to the conditional permanent resident:",
          required: true,
          options: [
            { value: "A", label: "Spouse" },
            { value: "B", label: "Parent" },
          ],
          helpText: "Select the option that best describes your relationship.",
        },
      ],
    },
    {
      id: "part4-other-information",
      title: "Part 4: Other Information About You",
      description: "Provide additional personal information.",
      questions: [
        {
          id: "part4.otherInformation.familyName",
          type: "text",
          label: "2.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.otherInformation.givenName",
          type: "text",
          label: "2.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.otherInformation.middleName",
          type: "text",
          label: "2.c. Middle Name",
        },
        {
          id: "part4.dateOfBirth",
          type: "date",
          label: "3. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.ssn",
          type: "ssn",
          label: "4. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part4.alienNumber",
          type: "text",
          label: "5. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number if you have one.",
        },
      ],
    },
    {
      id: "part4-address",
      title: "Part 4: Address Information",
      description: "Provide your current physical address.",
      questions: [
        {
          id: "part4.streetNumberName",
          type: "text",
          label: "6.a. Street Number and Name",
          required: true,
        },
        {
          id: "part4.unit",
          type: "radio",
          label: "6.b. Unit Type",
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part4.aptSteFlrNumber",
          type: "text",
          label: "6.c. Unit Number",
        },
        {
          id: "part4.cityOrTown",
          type: "text",
          label: "6.d. City or Town",
          required: true,
        },
        {
          id: "part4.state",
          type: "select",
          label: "6.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part4.zipCode",
          type: "text",
          label: "6.f. ZIP Code",
          required: true,
        },
        {
          id: "part4.province",
          type: "text",
          label: "6.g. Province",
          helpText:
            "Complete this field if you live outside the United States.",
        },
        {
          id: "part4.postalCode",
          type: "text",
          label: "6.h. Postal Code",
          helpText:
            "Complete this field if you live outside the United States.",
        },
        {
          id: "part4.country",
          type: "text",
          label: "6.i. Country",
          required: true,
        },
      ],
    },

    {
      id: "part5-child-info",
      title: "Part 5: Information About Your Children Child 1",
      description: "Provide details about each child related to this petition.",
      questions: [
        {
          id: "part5.child1.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
        },
        {
          id: "part5.child1.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
        },
        {
          id: "part5.child1.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part5.child1.dateOfBirth",
          type: "date",
          label: "2. Date of Birth (mm/dd/yyyy)",

          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.child1.alienNumber",
          type: "text",
          label: "3. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part5.child1.livingWithYou",
          type: "radio",
          label: "5. Is this child living with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child1.applyingWithYou",
          type: "radio",
          label: "6. Is this child applying with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child1.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
        },
        {
          id: "part5.child1.unit",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.child1.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part5.child1.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
        },
        {
          id: "part5.child1.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
        },
        {
          id: "part5.child1.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
        },
        {
          id: "part5.child1.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part5.child1.country",
          type: "text",
          label: "7.h. Country",
        },
        {
          id: "part5.child1.province",
          type: "text",
          label: "7.i. Province",
        },
        // Repeat similar structure for child2 to child5
      ],
    },
    //
    {
      id: "part5-child-info-2",
      title: "Part 5: Information About Your Children Child 2",
      description: "Provide details about each child related to this petition.",
      questions: [
        {
          id: "part5.child2.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
        },
        {
          id: "part5.child2.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
        },
        {
          id: "part5.child2.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part5.child2.dateOfBirth",
          type: "date",
          label: "2. Date of Birth (mm/dd/yyyy)",

          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.child2.alienNumber",
          type: "text",
          label: "3. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part5.child2.livingWithYou",
          type: "radio",
          label: "5. Is this child living with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child2.applyingWithYou",
          type: "radio",
          label: "6. Is this child applying with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child2.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
        },
        {
          id: "part5.child2.unit",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.child2.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part5.child2.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
        },
        {
          id: "part5.child2.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
        },
        {
          id: "part5.child2.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
        },
        {
          id: "part5.child2.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part5.child2.country",
          type: "text",
          label: "7.h. Country",
        },
        {
          id: "part5.child2.province",
          type: "text",
          label: "7.i. Province",
        },
        // Repeat similar structure for child2 to child5
      ],
    },
    {
      id: "part5-child-info-3",
      title: "Part 5: Information About Your Children Child 3",
      description: "Provide details about each child related to this petition.",
      questions: [
        {
          id: "part5.child3.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
        },
        {
          id: "part5.child3.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
        },
        {
          id: "part5.child3.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part5.child3.dateOfBirth",
          type: "date",
          label: "2. Date of Birth (mm/dd/yyyy)",

          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.child3.alienNumber",
          type: "text",
          label: "3. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part5.child3.livingWithYou",
          type: "radio",
          label: "5. Is this child living with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child3.applyingWithYou",
          type: "radio",
          label: "6. Is this child applying with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child3.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
        },
        {
          id: "part5.child3.unit",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.child3.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part5.child3.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
        },
        {
          id: "part5.child3.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
        },
        {
          id: "part5.child3.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
        },
        {
          id: "part5.child3.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part5.child3.country",
          type: "text",
          label: "7.h. Country",
        },
        {
          id: "part5.child3.province",
          type: "text",
          label: "7.i. Province",
        },
        // Repeat similar structure for child2 to child5
      ],
    },
    {
      id: "part5-child-info-4",
      title: "Part 5: Information About Your Children Child 4",
      description: "Provide details about each child related to this petition.",
      questions: [
        {
          id: "part5.child4.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
        },
        {
          id: "part5.child4.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
        },
        {
          id: "part5.child4.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part5.child4.dateOfBirth",
          type: "date",
          label: "2. Date of Birth (mm/dd/yyyy)",

          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.child4.alienNumber",
          type: "text",
          label: "3. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part5.child4.livingWithYou",
          type: "radio",
          label: "5. Is this child living with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child4.applyingWithYou",
          type: "radio",
          label: "6. Is this child applying with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child4.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
        },
        {
          id: "part5.child4.unit",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.child4.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part5.child4.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
        },
        {
          id: "part5.child4.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
        },
        {
          id: "part5.child4.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
        },
        {
          id: "part5.child4.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part5.child4.country",
          type: "text",
          label: "7.h. Country",
        },
        {
          id: "part5.child4.province",
          type: "text",
          label: "7.i. Province",
        },
        // Repeat similar structure for child2 to child5
      ],
    },
    {
      id: "part5-child-info-5",
      title: "Part 5: Information About Your Children Child 5",
      description: "Provide details about each child related to this petition.",
      questions: [
        {
          id: "part5.child5.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
        },
        {
          id: "part5.child5.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
        },
        {
          id: "part5.child5.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part5.child5.dateOfBirth",
          type: "date",
          label: "2. Date of Birth (mm/dd/yyyy)",

          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.child5.alienNumber",
          type: "text",
          label: "3. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part5.child5.livingWithYou",
          type: "radio",
          label: "5. Is this child living with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child5.applyingWithYou",
          type: "radio",
          label: "6. Is this child applying with you?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.child5.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
        },
        {
          id: "part5.child5.unit",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.child5.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part5.child5.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
        },
        {
          id: "part5.child5.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
        },
        {
          id: "part5.child5.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
        },
        {
          id: "part5.child5.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part5.child5.country",
          type: "text",
          label: "7.h. Country",
        },
        {
          id: "part5.child5.province",
          type: "text",
          label: "7.i. Province",
        },
        // Repeat similar structure for child2 to child5
      ],
    },

    {
      id: "part6-accommodations-for-disabilities",
      title:
        "Part 6: Accommodations for Individuals with Disabilities and/or Impairments",
      description:
        "Request accommodations for disabilities or impairments to ensure you can participate in the immigration process.",
      questions: [
        {
          id: "part6.accommodationsForDisabilities.requestingAccommodation",
          type: "radio",
          label:
            "Are you requesting an accommodation because of your disabilities and/or impairments?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText:
            "Select 'Yes' if you need any special accommodations during your interview or other interactions with USCIS.",
        },
        {
          id: "part6.accommodationsForDisabilities.deafOrHardOfHearing",
          type: "checkbox",
          label:
            "I am deaf or hard of hearing and request the following accommodation(s):",
          options: [
            { value: "A", label: "Sign language interpreter" },
            { value: "B", label: "Other accommodations" },
          ],
          helpText:
            "Specify if you need a sign language interpreter or any other accommodations related to hearing impairments.",
        },
        {
          id: "part6.accommodationsForDisabilities.blindOrSightImpaired",
          type: "checkbox",
          label:
            "I am blind or sight-impaired and request the following accommodation(s):",
          options: [
            { value: "A", label: "Braille materials" },
            { value: "B", label: "Large print materials" },
          ],
          helpText:
            "Indicate if you require Braille or large print materials due to vision impairments.",
        },
        {
          id: "part6.accommodationsForDisabilities.accommodationRequested",
          type: "textarea",
          label: "Describe any other accommodation(s) requested:",
          helpText:
            "Provide details about any other accommodations you require that are not listed above.",
        },
        {
          id: "part6.accommodationsForDisabilities.otherDisability",
          type: "checkbox",
          label:
            "I have another type of disability and request the following accommodation(s):",
          options: [{ value: "C", label: "Other accommodations" }],
          helpText:
            "Specify any accommodations needed for disabilities not covered in the previous sections.",
        },
      ],
    },

    {
      id: "part7-petitioners-statement",
      title: "Part 7: Petitioner's Statement",
      description:
        "Provide information about your statement and the use of an interpreter or preparer.",
      questions: [
        {
          id: "part7.petitionersStatement",
          type: "radio",
          label: "Petitioner's Statement",
          required: true,
          options: [
            {
              value: "A",
              label:
                "I can read and understand English, and have read and understand every question and instruction on this petition and my answer to every question.",
            },
            {
              value: "B",
              label:
                "The interpreter named in Part 8 read to me every question and instruction on this petition and my answer to every question in a language in which I am fluent, and I understood everything.",
            },
          ],
        },
        {
          id: "part7.petitionersStatement.languageUsed",
          type: "text",
          label: "Language Used",
          description: "If you used an interpreter, specify the language used.",
          helpText:
            "Enter the language in which the interpreter communicated with you.",
        },
        {
          id: "part7.petitionersStatement.preparerConsent",
          type: "radio",
          label: "Preparer's Consent",
          options: [
            {
              value: "Y",
              label:
                "Yes, I have requested the preparer to complete this petition.",
            },
            { value: "N", label: "No, I did not use a preparer." },
          ],
        },
        {
          id: "part7.petitionersStatement.preparerName",
          type: "text",
          label: "Preparer's Name",
          description:
            "Name of the person who prepared this petition, if applicable.",
          helpText: "Enter the full name of the preparer.",
        },
        {
          id: "part7.petitionersStatement.preparerIsAttorney",
          type: "radio",
          label: "Is the Preparer an Attorney?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part7-petitioners-contact-information",
      title: "Part 7: Petitioner's Contact Information",
      description: "Provide your contact information.",
      questions: [
        {
          id: "part7.petitionersContactInformation.emailAddress",
          type: "email",
          label: "Email Address",
          placeholder: "example@email.com",
          helpText: "Provide a valid email address where you can be reached.",
        },
        {
          id: "part7.petitionersContactInformation.daytimePhoneNumber",
          type: "tel",
          label: "Daytime Phone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a phone number where you can be reached during the day.",
        },
        {
          id: "part7.petitionersContactInformation.mobilePhoneNumber",
          type: "tel",
          label: "Mobile Phone Number",
          placeholder: "(555) 123-4567",
          helpText: "Provide your mobile phone number.",
        },
      ],
    },
    {
      id: "part7-acknowledgement-of-appointment",
      title: "Part 7: Acknowledgement of Appointment",
      description:
        "Acknowledge the appointment of the representative, if applicable.",
      questions: [
        {
          id: "part7.acknowledgementOfAppointment.name",
          type: "text",
          label: "Name of Appointed Representative",
          description:
            "Enter the name of the person you have appointed as your representative.",
          helpText:
            "This is typically the name of your attorney or accredited representative.",
        },
      ],
    },
    // {
    //   id: "part7-petitioners-signature",
    //   title: "Part 7: Petitioner's Signature",
    //   description: "Sign and date the petition to confirm your statements.",
    //   questions: [
    //     {
    //       id: "part7.petitionersSignature.signature",
    //       type: "text",
    //       label: "Petitioner's Signature",
    //       required: true,
    //       helpText:
    //         "Sign your full legal name as it appears on your official documents.",
    //     },
    //     {
    //       id: "part7.petitionersSignature.dateOfSignature",
    //       type: "date",
    //       label: "Date of Signature",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //       helpText: "Enter the date you signed this petition.",
    //     },
    //   ],
    // },

    {
      id: "part8-spouses-statement",
      title: "Part 8: Spouse's Statement",
      description:
        "Provide the necessary information regarding the spouse's statement and preparer details.",
      questions: [
        {
          id: "part8.spousesStatement",
          type: "radio",
          label: "Spouse's Statement",
          required: true,
          options: [
            {
              value: "A",
              label:
                "I can read and understand English, and have read and understand every question and instruction on this petition and my answer to every question.",
            },
            {
              value: "B",
              label:
                "The interpreter named in Part 9 read to me every question and instruction on this petition and my answer to every question in a language in which I am fluent, and I understood everything.",
            },
          ],
        },
        {
          id: "part8.spousesStatement.languageUsed",
          type: "text",
          label: "Language Used",
          helpText: "If you used an interpreter, specify the language used.",
        },
        {
          id: "part8.spousesStatement.preparerConsent",
          type: "radio",
          label: "Preparer's Consent",
          options: [
            {
              value: "Y",
              label:
                "Yes, the preparer has consented to assist in the completion of this form.",
            },
          ],
          helpText: "Select 'Yes' if the preparer has consented to assist.",
        },
        {
          id: "part8.spousesStatement.preparerName",
          type: "text",
          label: "Preparer's Name",
          helpText: "Enter the full name of the preparer if applicable.",
        },
        {
          id: "part8.spousesStatement.preparerIsAttorney",
          type: "radio",
          label: "Is the Preparer an Attorney?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "Indicate whether the preparer is an attorney.",
        },
      ],
    },
    {
      id: "part8-spouses-contact-information",
      title: "Part 8: Spouse's Contact Information",
      description:
        "Provide the spouse's contact details for communication purposes.",
      questions: [
        {
          id: "part8.spousesContactInformation.emailAddress",
          type: "email",
          label: "Email Address",
          placeholder: "example@email.com",
          helpText: "Provide a valid email address for correspondence.",
        },
        {
          id: "part8.spousesContactInformation.mobilePhoneNumber",
          type: "tel",
          label: "Mobile Phone Number",
          placeholder: "(555) 123-4567",
          helpText: "Enter the mobile phone number including area code.",
        },
        {
          id: "part8.spousesContactInformation.daytimePhoneNumber",
          type: "tel",
          label: "Daytime Phone Number",
          placeholder: "(555) 123-4567",
          helpText: "Provide a daytime phone number where you can be reached.",
        },
      ],
    },
    {
      id: "part8-acknowledgement-of-appointment",
      title: "Part 8: Acknowledgement of Appointment",
      description: "Acknowledge the appointment details as required.",
      questions: [
        {
          id: "part8.acknowledgementOfAppointment.name",
          type: "text",
          label: "Name",
          helpText:
            "Enter the name of the person acknowledging the appointment.",
        },
      ],
    },
    // {
    //   id: "part8-spouses-signature",
    //   title: "Part 8: Spouse's Signature",
    //   description:
    //     "Sign and date the form to confirm the information provided.",
    //   questions: [
    //     {
    //       id: "part8.spousesSignature.dateOfSignature",
    //       type: "date",
    //       label: "Date of Signature",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //       helpText: "Enter the date you are signing this form.",
    //     },
    //     {
    //       id: "part8.spousesSignature.signature",
    //       type: "text",
    //       label: "Signature of Spouse",
    //       required: true,
    //       helpText:
    //         "Sign your full name to certify the information provided is true and correct.",
    //     },
    //   ],
    // },

    {
      id: "part9-interpreter-information",
      title: "Part 9: Interpreter's Information",
      description:
        "Provide details about the interpreter who assisted in completing this form.",
      questions: [
        {
          id: "part9.interpretersFullName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
          helpText:
            "Enter the interpreter's last name as it appears on official documents.",
        },
        {
          id: "part9.interpretersFullName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
          helpText:
            "Enter the interpreter's first name as it appears on official documents.",
        },
        {
          id: "part9.interpretersBusinessOrOrganizationName",
          type: "text",
          label: "2. Name of Business or Organization (if applicable)",
          helpText:
            "Provide the name of the business or organization the interpreter is affiliated with, if any.",
        },
      ],
    },
    {
      id: "part9-interpreter-mailing-address",
      title: "Part 9: Interpreter's Mailing Address",
      description: "Enter the mailing address of the interpreter.",
      questions: [
        {
          id: "part9.interpretersMailingAddress.streetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
          helpText:
            "Provide the street number and name of the interpreter's mailing address.",
        },
        {
          id: "part9.interpretersMailingAddress.unit",
          type: "radio",
          label: "3.b. Unit Type",
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
          helpText: "Select the type of unit if applicable.",
        },
        {
          id: "part9.interpretersMailingAddress.aptSteFlrNumber",
          type: "text",
          label: "3.c. Unit Number",
          helpText: "Enter the unit number if applicable.",
        },
        {
          id: "part9.interpretersMailingAddress.cityOrTown",
          type: "text",
          label: "3.d. City or Town",
          required: true,
        },
        {
          id: "part9.interpretersMailingAddress.state",
          type: "select",
          label: "3.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part9.interpretersMailingAddress.zipCode",
          type: "text",
          label: "3.f. ZIP Code",
          required: true,
          helpText: "Enter the 5-digit ZIP code.",
        },
        {
          id: "part9.interpretersMailingAddress.province",
          type: "text",
          label: "3.g. Province",
          helpText: "Provide the province if applicable.",
        },
        {
          id: "part9.interpretersMailingAddress.postalCode",
          type: "text",
          label: "3.h. Postal Code",
          helpText: "Enter the postal code if applicable.",
        },
        {
          id: "part9.interpretersMailingAddress.country",
          type: "text",
          label: "3.i. Country",
          required: true,
        },
      ],
    },
    {
      id: "part9-interpreter-contact-information",
      title: "Part 9: Interpreter's Contact Information",
      description: "Provide contact details for the interpreter.",
      questions: [
        {
          id: "part9.interpretersContactInformation.daytimePhoneNumber",
          type: "tel",
          label: "4. Daytime Phone Number",
          required: true,
          placeholder: "(555) 123-4567",
          helpText:
            "Enter a phone number where the interpreter can be reached during the day.",
        },
        {
          id: "part9.interpretersContactInformation.emailAddress",
          type: "email",
          label: "5. Email Address",
          placeholder: "example@email.com",
          helpText: "Provide an email address for the interpreter.",
        },
      ],
    },
    {
      id: "part9-interpreter-certification",
      title: "Part 9: Interpreter's Certification",
      description:
        "Certification of the interpreter's proficiency in the language used.",
      questions: [
        {
          id: "part9.interpretersCertification.languageFluent",
          type: "text",
          label: "6. Language in which you are fluent",
          required: true,
          helpText:
            "Specify the language in which the interpreter is fluent and used to interpret.",
        },
      ],
    },
    // {
    //   id: "part9-interpreter-signature",
    //   title: "Part 9: Interpreter's Signature",
    //   description: "The interpreter must sign and date this section.",
    //   questions: [
    //     {
    //       id: "part9.interpretersSignature.signature",
    //       type: "text",
    //       label: "7.a. Signature",
    //       required: true,
    //       helpText: "The interpreter must sign here.",
    //     },
    //     {
    //       id: "part9.interpretersSignature.dateOfSignature",
    //       type: "date",
    //       label: "7.b. Date of Signature",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //       helpText: "Enter the date the interpreter signed this form.",
    //     },
    //   ],
    // },

    {
      id: "part10-preparers-information",
      title: "Part 10: Preparer's Information",
      description:
        "Provide details about the person who prepared this petition, if applicable.",
      questions: [
        {
          id: "part10.preparersFullName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
          helpText: "Enter the preparer's last name.",
        },
        {
          id: "part10.preparersFullName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
          helpText: "Enter the preparer's first name.",
        },
        {
          id: "part10.preparersBusinessOrOrganizationName",
          type: "text",
          label: "2. Name of Business or Organization",
          helpText:
            "Enter the name of the business or organization, if applicable.",
        },
      ],
    },
    {
      id: "part10-preparers-contact-information",
      title: "Part 10: Preparer's Contact Information",
      description: "Provide the contact details of the preparer.",
      questions: [
        {
          id: "part10.preparersContactInformation.emailAddress",
          type: "email",
          label: "6. Email Address",
          helpText: "Enter the preparer's email address.",
          placeholder: "example@email.com",
        },
        {
          id: "part10.preparersContactInformation.daytimePhoneNumber",
          type: "tel",
          label: "4. Daytime Telephone Number",
          helpText: "Enter the preparer's daytime phone number.",
          placeholder: "(555) 123-4567",
        },
        {
          id: "part10.preparersContactInformation.faxNumber",
          type: "tel",
          label: "5. Fax Number",
          helpText: "Enter the preparer's fax number, if applicable.",
          placeholder: "(555) 123-4567",
        },
      ],
    },
    {
      id: "part10-preparers-mailing-address",
      title: "Part 10: Preparer's Mailing Address",
      description: "Provide the mailing address of the preparer.",
      questions: [
        {
          id: "part10.preparersMailingAddress.streetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
          helpText: "Enter the street number and name.",
        },
        {
          id: "part10.preparersMailingAddress.unit",
          type: "radio",
          label: "3.b. Unit Type",
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part10.preparersMailingAddress.aptSteFlrNumber",
          type: "text",
          label: "3.c. Unit Number",
          helpText: "Enter the unit number, if applicable.",
        },
        {
          id: "part10.preparersMailingAddress.cityOrTown",
          type: "text",
          label: "3.d. City or Town",
          required: true,
          helpText: "Enter the city or town.",
        },
        {
          id: "part10.preparersMailingAddress.state",
          type: "select",
          label: "3.e. State",
          options: US_STATES,
          required: true,
          helpText: "Select the state.",
        },
        {
          id: "part10.preparersMailingAddress.zipCode",
          type: "text",
          label: "3.f. ZIP Code",
          required: true,
          helpText: "Enter the ZIP code.",
        },
        {
          id: "part10.preparersMailingAddress.province",
          type: "text",
          label: "3.g. Province",
          helpText: "Enter the province, if applicable.",
        },
        {
          id: "part10.preparersMailingAddress.postalCode",
          type: "text",
          label: "3.h. Postal Code",
          helpText: "Enter the postal code, if applicable.",
        },
        {
          id: "part10.preparersMailingAddress.country",
          type: "text",
          label: "3.i. Country",
          required: true,
          helpText: "Enter the country.",
        },
      ],
    },
    {
      id: "part10-preparers-statement",
      title: "Part 10: Preparer's Statement",
      description:
        "Indicate the preparer's involvement in completing this form.",
      questions: [
        {
          id: "part10.preparersStatement",
          type: "radio",
          label: "7. Preparer's Statement",
          options: [
            {
              value: "A",
              label:
                "I am not an attorney or accredited representative but have prepared this form on behalf of the petitioner and with the petitioner's consent.",
            },
            {
              value: "B",
              label:
                "I am an attorney or accredited representative and my representation extends beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part10.preparersStatement.extendsBeyondPreparation",
          type: "radio",
          label: "7.b. My representation extends beyond preparation",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    // {
    //   id: "part10-preparers-signature",
    //   title: "Part 10: Preparer's Signature",
    //   description: "The preparer must sign and date this section.",
    //   questions: [
    //     {
    //       id: "part10.preparersSignature.signature",
    //       type: "text",
    //       label: "8.a. Signature of Preparer",
    //       required: true,
    //       helpText: "The preparer must sign here.",
    //     },
    //     {
    //       id: "part10.preparersSignature.dateOfSignature",
    //       type: "date",
    //       label: "8.b. Date of Signature",
    //       required: true,
    //       helpText: "Enter the date the preparer signed the form.",
    //       placeholder: "MM/DD/YYYY",
    //     },
    //   ],
    // },

    {
      id: "part11-additional-information",
      title: "Part 11: Additional Information",
      description:
        "Provide any additional information that does not fit in other sections of this form.",
      questions: [
        {
          id: "part11.additionalInformation.pageNumber",
          type: "text",
          label: "3.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.partNumber",
          type: "text",
          label: "3.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.itemNumber",
          type: "text",
          label: "3.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.additionalInfo",
          type: "textarea",
          label: "3.d. Additional Information",
          helpText:
            "Provide additional details or explanations related to the specified page, part, and item numbers.",
        },
        {
          id: "part11.additionalInformation.pageNumber4",
          type: "text",
          label: "4.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.partNumber4",
          type: "text",
          label: "4.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.itemNumber4",
          type: "text",
          label: "4.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.additionalInfo4",
          type: "textarea",
          label: "4.d. Additional Information",
          helpText:
            "Provide additional details or explanations related to the specified page, part, and item numbers.",
        },
        {
          id: "part11.additionalInformation.pageNumber5",
          type: "text",
          label: "5.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.partNumber5",
          type: "text",
          label: "5.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.itemNumber5",
          type: "text",
          label: "5.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.additionalInfo5",
          type: "textarea",
          label: "5.d. Additional Information",
          helpText:
            "Provide additional details or explanations related to the specified page, part, and item numbers.",
        },
        {
          id: "part11.additionalInformation.pageNumber6",
          type: "text",
          label: "6.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.partNumber6",
          type: "text",
          label: "6.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.itemNumber6",
          type: "text",
          label: "6.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.additionalInfo6",
          type: "textarea",
          label: "6.d. Additional Information",
          helpText:
            "Provide additional details or explanations related to the specified page, part, and item numbers.",
        },
        {
          id: "part11.additionalInformation.pageNumber7",
          type: "text",
          label: "7.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.partNumber7",
          type: "text",
          label: "7.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.itemNumber7",
          type: "text",
          label: "7.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part11.additionalInformation.additionalInfo7",
          type: "textarea",
          label: "7.d. Additional Information",
          helpText:
            "Provide additional details or explanations related to the specified page, part, and item numbers.",
        },
      ],
    },
    {
      id: "part11-your-full-name",
      title: "Part 11: Your Full Name",
      description:
        "Provide your full legal name as it appears on official documents.",
      questions: [
        {
          id: "part11.additionalInformation.fullName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part11.additionalInformation.fullName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part11.yourFullName.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
      ],
    },
    {
      id: "part11-identification",
      title: "Part 11: Identification",
      description: "Provide your Alien Registration Number if applicable.",
      questions: [
        {
          id: "part11.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          helpText:
            "Enter your A-Number if you have one. It is an 8 or 9 digit number.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_751_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};
const I_485_DEFINITION: FormDefinition = {
  id: "i-485",
  code: "I-485",
  name: "Application to Register Permanent Residence or Adjust Status",
  description: "Apply for a green card while in the United States",
  category: "family",
  estimatedTime: "90-120 minutes",
  filingFee: 1140,
  price: 70,
  sections: [
    {
      id: "attorney-info",
      title: "Attorney Information",
      questions: [
        {
          id: "attorney.stateBarNumber",
          type: "text",
          label: "State Bar Number",
          required: false,
          helpText: "Enter the attorney's state bar number.",
        },
        {
          id: "attorney.formG28Attached",
          type: "radio",
          label: "Form G-28 Attached",
          required: false,
          options: [
            { value: "1", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
        {
          id: "attorney.volagNumber",
          type: "text",
          label: "VOLAG Number",
          required: false,
          helpText: "Enter the VOLAG number if applicable.",
        },
        {
          id: "attorney.uscisOnlineAccountNumber",
          type: "text",
          label: "USCIS Online Account Number",
          required: false,
          helpText: "Enter the USCIS online account number if available.",
        },
      ],
    },
    {
      id: "applicant-info",
      title: "Applicant Information",
      questions: [
        {
          id: "applicant.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
          helpText: "Enter your A-Number, if any.",
        },
      ],
    },
    {
      id: "part1-personal-info",
      title: "Part 1: Personal Information",
      questions: [
        {
          id: "part1.currentLegalName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.currentLegalName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.currentLegalName.middleName",
          type: "text",
          label: "1.c. Middle Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.familyName",
          type: "text",
          label: "2.a. Other Names Used - Family Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.givenName",
          type: "text",
          label: "2.b. Other Names Used - Given Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.middleName",
          type: "text",
          label: "2.c. Other Names Used - Middle Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed2.familyName",
          type: "text",
          label: "2.a. Additional Other Names Used - Family Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed2.givenName",
          type: "text",
          label: "2.b. Additional Other Names Used - Given Name",
          required: false,
        },
        {
          id: "part1.otherNamesUsed2.middleName",
          type: "text",
          label: "2.c. Additional Other Names Used - Middle Name",
          required: false,
        },
        {
          id: "part1.dateOfBirth",
          type: "date",
          label: "3. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.usedOtherDob",
          type: "radio",
          label: "Have you used other dates of birth?",
          required: false,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.otherDob1",
          type: "date",
          label: "Other Date of Birth 1 (mm/dd/yyyy)",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.otherDob2",
          type: "date",
          label: "Other Date of Birth 2 (mm/dd/yyyy)",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.sex",
          type: "select",
          label: "4. Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part1.placeOfBirth.cityTown",
          type: "text",
          label: "5.a. City/Town of Birth",
          required: true,
        },
        {
          id: "part1.placeOfBirth.country",
          type: "text",
          label: "5.b. Country of Birth",
          required: true,
        },
        {
          id: "part1.countryOfCitizenship",
          type: "text",
          label: "6. Country of Citizenship/Nationality",
          required: true,
        },
      ],
    },

    {
      id: "part1-info",
      title: "Part 1: Information",
      questions: [
        {
          id: "part1.uscisAccountNumber",
          type: "text",
          label: "USCIS Online Account Number",
          required: false,
          helpText: "Enter your USCIS Online Account Number, if any.",
        },
        {
          id: "part1.passportNumber",
          type: "text",
          label: "Passport Number",
          required: true,
          helpText: "Enter your passport number.",
        },
        {
          id: "part1.passportExpirationDate",
          type: "date",
          label: "Passport Expiration Date",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the expiration date of your passport.",
        },
        {
          id: "part1.passportCountry",
          type: "text",
          label: "Country of Issuance for Passport",
          required: true,
          helpText: "Enter the country that issued your passport.",
        },
        {
          id: "part1.visaNumber",
          type: "text",
          label: "Nonimmigrant Visa Number",
          required: false,
          helpText: "Enter your nonimmigrant visa number, if applicable.",
        },
        {
          id: "part1.cityOfLastArrival",
          type: "text",
          label: "City of Last Arrival",
          required: true,
          helpText: "Enter the city where you last arrived in the U.S.",
        },
        {
          id: "part1.stateOfLastArrival",
          type: "select",
          label: "State of Last Arrival",
          required: true,
          options: US_STATES,
          helpText: "Enter the state where you last arrived in the U.S.",
        },
        {
          id: "part1.dateOfLastArrival",
          type: "date",
          label: "Date of Last Arrival",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date of your last arrival in the U.S.",
        },
        {
          id: "part1.nonImmigrantVisaIssueDate",
          type: "date",
          label: "Nonimmigrant Visa Issue Date",
          required: false,
          placeholder: "MM/DD/YYYY",
          helpText:
            "Enter the issue date of your nonimmigrant visa, if applicable.",
        },
        {
          id: "part1.alienNumber",
          type: "button",
          label: "Alien Registration Number (A-Number)",
          required: false,
          helpText: "Click to enter your Alien Registration Number.",
        },
        {
          id: "part1.hasAlienNumber",
          type: "radio",
          label: "Do you have an Alien Registration Number (A-Number)?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.usedOtherANumber",
          type: "radio",
          label: "Have you ever used another A-Number?",
          required: false,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.otherANumber",
          type: "text",
          label: "Other Alien Registration Number (A-Number)",
          required: false,
          helpText: "Enter any other A-Number you have used.",
        },
        {
          id: "part1.otherANumberButton",
          type: "button",
          label: "Enter Other A-Number",
          required: false,
        },

        //
        {
          id: "part2.cubanAdjustmentAct",
          type: "radio",
          label: "Are you applying under the Cuban Adjustment Act?",
          required: false,
          options: [
            {
              value: "11A",
              label:
                "I was inspected at a Port of Entry and admitted as (for example, exchange visitor, visitor, temporary worker, student):",
            },
            {
              value: "11B",
              label:
                "I was inspected at a Port of Entry and paroled as (for example, humanitarian parole, Cuban parole):",
            },
            {
              value: "11C",
              label:
                "I came into the United States without admission or parole.",
            },
            { value: "11D", label: "Other." },
          ],
        },

        {
          id: "part1.otherImmigrationHistory",
          type: "",
          label: "Other Immigration History",
          required: false,
          helpText: "Provide details of any other immigration history.",
          conditional: { dependsOn: "part2.cubanAdjustmentAct", value: "11D" },
        },
        {
          id: "part1.admitted",
          type: "text",
          label: "Admitted to the U.S.",
          required: false,
          helpText: "Check if you were admitted to the U.S.",
          conditional: { dependsOn: "part2.cubanAdjustmentAct", value: "11A" },
        },
        {
          id: "part1.paroled",
          type: "text",
          label: "Paroled into the U.S.",
          required: false,
          helpText: "Check if you were paroled into the U.S.",
          conditional: { dependsOn: "part2.cubanAdjustmentAct", value: "11B" },
        },
        {
          id: "part1.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
          helpText: "Enter your family name or last name.",
        },
      ],
    },

    {
      id: "part1-info-2",
      title: "Part 1: Information",
      questions: [
        {
          id: "part1.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.expirationDateOfAuthorizedStay",
          type: "date",
          label: "2. Expiration Date of Authorized Stay (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.immigrationStatusOnI94",
          type: "text",
          label: "3. Immigration Status on I-94",
          required: true,
        },
        {
          id: "part1.i94ArrivalDepartureRecordNumber",
          type: "text",
          label: "4. I-94 Arrival/Departure Record Number",
          required: true,
        },
        {
          id: "part1.lastArrivalFirstTime",
          type: "radio",
          label: "5. Is this your first arrival?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },

        {
          id: "part1.expirationDateOfCurrentStatus",
          type: "date",
          label: "6. Expiration Date of Current Status (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.alienCrewmanVisa",
          type: "radio",
          label: "7. Are you an alien crewman?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },

        {
          id: "part1.arrivalToJoinVessel",
          type: "radio",
          label: "8. Did you arrive to join a vessel? No",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },

        {
          id: "part1.usUnit",
          type: "select",
          label: "9. U.S. Unit",
          options: [
            { value: "STE", label: "Suite" },
            { value: "APT", label: "Apartment" },
            { value: "FLR", label: "Floor" },
          ],
        },

        {
          id: "part1.aptSteFlrNumber",
          type: "text",
          label: "10. Apt/Ste/Flr Number",
        },

        {
          id: "part1.cityOrTown",
          type: "text",
          label: "11. City or Town",
          required: true,
        },
        {
          id: "part1.state",
          type: "select",
          label: "12. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.zipCode",
          type: "text",
          label: "13. ZIP Code",
          required: true,
        },
        {
          id: "part1.streetNumberAndName",
          type: "text",
          label: "14. Street Number and Name",
          required: true,
        },
        {
          id: "part1.inCareOfName",
          type: "text",
          label: "15. In Care Of Name",
        },
        {
          id: "part1.dateFirstResidedAtAddress",
          type: "date",
          label: "16. Date First Resided at Address (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },

    {
      id: "part1-currentMailingAddress",
      title: "Part 1: Current Mailing Address",
      questions: [
        {
          id: "part1.currentMailingAddress",
          type: "radio",
          label: "17. Is this your current mailing address? Yes",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "currentMailingAddressUnitType",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
          required: true,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressAptSteFlrNumber",
          type: "text",
          label: "Apartment, Suite, or Floor Number",
          required: true,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressCityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressState",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressStreetNumberName",
          type: "text",
          label: "Street Number and Name",
          required: true,
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
        },
        {
          id: "part1.currentMailingAddressInCareOfName",
          type: "text",
          label: "In Care Of Name",
          conditional: { dependsOn: "part1.currentMailingAddress", value: "N" },
          helpText:
            "Enter the name of the person who receives mail at this address, if applicable.",
        },
      ],
    },
    {
      id: "part1-currentImmigrationStatus",
      title: "Part 1: Current Immigration Status",
      questions: [
        {
          id: "part1.currentImmigrationStatus",
          type: "text",
          label: "Current Immigration Status",
          required: true,
        },
      ],
    },
    {
      id: "part1-alienRegistrationNumber",
      title: "Part 1: Alien Registration Number",
      questions: [
        {
          id: "alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },

    {
      id: "part1-priorAddress",
      title: "Part 1: Prior Address",
      description:
        "Provide your prior address if you have not lived at your current address for 5 years.",
      questions: [
        {
          id: "part1.residedAtCurrentAddress5YearsYes",
          type: "radio",
          label:
            "Have you resided at your current address for at least 5 years?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part1.priorAddressInCareOfName",
          type: "text",
          label: "In Care Of Name",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
          helpText:
            "Enter the name of the person who received mail at this address, if applicable.",
        },
        {
          id: "part1.priorAddressStreetName",
          type: "text",
          label: "Street Name",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
          required: true,
        },
        {
          id: "part1.priorAddressUnit",
          type: "select",
          label: "Unit Type",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },

        {
          id: "part1.priorAddressAptSteFlrNumber",
          type: "text",
          label: "Apartment, Suite, or Floor Number",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressCityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressState",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressProvince",
          type: "text",
          label: "Province",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressPostalCode",
          type: "text",
          label: "Postal Code",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressCountry",
          type: "text",
          label: "Country",
          required: true,
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressDateFrom",
          type: "date",
          label: "Date From",
          required: true,
          placeholder: "MM/DD/YYYY",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
        {
          id: "part1.priorAddressDateTo",
          type: "date",
          label: "Date To",
          required: true,
          placeholder: "MM/DD/YYYY",
          conditional: {
            dependsOn: "part1.residedAtCurrentAddress5YearsYes",
            value: "N",
          },
        },
      ],
    },
    {
      id: "part1-address",
      title: "Part 1: Recent Address",
      description:
        "Provide your most recent physical address outside the United States where you lived for more than one year",
      questions: [
        {
          id: "part1.recentStreetName",
          type: "text",
          label: "18.a. Street Name",
          required: true,
        },
        {
          id: "part1.recentUnit",
          type: "select",
          label: "18.b. Unit Type",
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part1.recentNumber",
          type: "text",
          label: "18.c. Unit Number",
        },
        {
          id: "part1.recentCity",
          type: "text",
          label: "18.d. City or Town",
          required: true,
        },
        {
          id: "part1.recentState",
          type: "select",
          label: "18.e. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.recentZipCode",
          type: "text",
          label: "18.f. ZIP Code",
          required: true,
        },
        {
          id: "part1.recentProvince",
          type: "text",
          label: "18.g. Province",
        },
        {
          id: "part1.recentPostalCode",
          type: "text",
          label: "18.h. Postal Code",
        },
        {
          id: "part1.recentCountry",
          type: "text",
          label: "18.i. Country",
          required: true,
        },
        {
          id: "part1.recentDateFrom",
          type: "date",
          label: "18.j. Date From",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.recentDateTo",
          type: "date",
          label: "18.k. Date To",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part1-ssa",
      title: "Part 1: Social Security Administration",
      description: "Provide information about your Social Security card.",
      questions: [
        {
          id: "part1.socialSecurityCardIssued",
          type: "radio",
          label: "19. Has the SSA ever issued you a Social Security card?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.socialSecurityNumber",
          type: "ssn",
          label: "19.a. Social Security Number",
          helpText: "Provide your SSN if you have one.",
        },
        {
          id: "part1.ssaIssueCard",
          type: "radio",
          label:
            "19.b. Do you want the SSA to issue you a Social Security card?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.consentForDisclosure",
          type: "radio",
          label: "19.c. Consent for Disclosure",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText:
            "Do you consent to the disclosure of your information to the SSA?",
        },
      ],
    },
    {
      id: "part2-status",
      title: "Part 2: Adjustment of Status",
      questions: [
        {
          id: "alienNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part2.adjustmentOfStatus",
          type: "radio",
          label: "2. Are you applying for adjustment of status?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.receiptNumber",
          type: "text",
          label: "3. Receipt Number",
          helpText: "Provide the receipt number of your application.",
        },
        {
          id: "part2.priorityDate",
          type: "date",
          label: "4. Priority Date",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part2-applicant-info",
      title: "Part 2: Applicant Information",
      questions: [
        {
          id: "part2.principalApplicantFamilyName",
          type: "text",
          label: "2.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.principalApplicantGivenName",
          type: "text",
          label: "2.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.principalApplicantMiddleName",
          type: "text",
          label: "2.c. Middle Name",
          required: false,
        },
        {
          id: "part2.dateOfBirth",
          type: "date",
          label: "2.d. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.alienNumber",
          type: "text",
          label: "2.e. Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part2.applicationTypePrincipal",
          type: "radio",
          label: "2.f. Application Type",
          options: [
            { value: "1fA", label: "Principal Applicant" },
            { value: "1fB", label: "Derivative Applicant" },
          ],
          required: true,
        },

        {
          id: "part2.categoryCitizen",
          type: "radio",
          label: "3.a. Category",
          helpText:
            "Immediate relative of a U.S. citizen, Form I-130, I-129F, or I-360 (select your specific category below)",
          options: [
            { value: "3a0", label: "Spouse of a U.S. Citizen" },
            {
              value: "3a1",
              label: "Unmarried Child Under 21 of a U.S. Citizen",
            },
            { value: "3a2", label: "Parent of a U.S. Citizen" },
            { value: "3a3", label: "Fiancé(e) of a U.S. Citizen" },
            { value: "3a4", label: "Widow(er) of a U.S. Citizen" },
            {
              value: "3a5",
              label: "Spouse/Child/Parent of Deceased Service Member",
            },
            {
              value: "3a6",
              label: "Unmarried Son/Daughter of a U.S. Citizen",
            },
            { value: "3a7", label: "Married Son/Daughter of a U.S. Citizen" },
            { value: "3a8", label: "Brother/Sister of a U.S. Citizen" },
            { value: "3a9", label: "Spouse of a Lawful Permanent Resident" },
            {
              value: "3a10",
              label: "Unmarried Child of a Lawful Permanent Resident",
            },
            {
              value: "3a11",
              label: "Unmarried Son/Daughter of a Lawful Permanent Resident",
            },
            { value: "3a12", label: "VAWA Self-Petitioner (Spouse)" },
            { value: "3a13", label: "VAWA Self-Petitioner (Child)" },
            { value: "3a14", label: "VAWA Self-Petitioner (Parent)" },
            { value: "3a15", label: "Alien Investor" },
            { value: "3a16", label: "Alien of Extraordinary Ability" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part2-employmentBased",
      title: "Part 2: Employment-Based Preferences",
      questions: [
        {
          id: "part2.employmentBasedOutstandingProfessor",
          type: "radio",
          label: "3.b.2. Outstanding Professor or Researcher",
          options: [
            {
              value: "3b2",
              label: "3.b.2. Outstanding Professor or Researcher",
            },
          ],
        },
        {
          id: "part2.employmentBasedMultinationalExecutive",
          type: "radio",
          label: "3.b.3. Multinational Executive or Manager",
          options: [
            {
              value: "3b3",
              label: "3.b.3. Multinational Executive or Manager",
            },
          ],
        },
        {
          id: "part2.employmentBasedAdvancedDegree",
          type: "radio",
          label: "3.b.4. Advanced Degree Professional",
          options: [
            {
              value: "3b4",
              label: "3.b.4. Advanced Degree Professional",
            },
          ],
        },
        {
          id: "part2.employmentBasedProfessional",
          type: "radio",
          label: "3.b.5. Professional",
          options: [
            {
              value: "3b5",
              label: "3.b.5. Professional",
            },
          ],
        },
        {
          id: "part2.employmentBasedSkilledWorker",
          type: "radio",
          label: "3.b.6. Skilled Worker",
          options: [
            {
              value: "3b6",
              label: "3.b.6. Skilled Worker",
            },
          ],
        },
        {
          id: "part2.employmentBasedOtherWorker",
          type: "radio",
          label: "3.b.7. Other Worker",
          options: [
            {
              value: "3b7",
              label: "3.b.7. Other Worker",
            },
          ],
        },
        {
          id: "part2.employmentBasedNationalInterestWaiver",
          type: "radio",
          label: "3.b.8. National Interest Waiver",
          options: [
            {
              value: "3b8",
              label: "3.b.8. National Interest Waiver",
            },
          ],
        },
      ],
    },
    {
      id: "part2-relativeFiledI140",
      title: "Part 2: Relative Filed I-140",
      questions: [
        {
          id: "part2.relativeFiledI140",
          type: "radio",
          label: "Relative Filed I-140: Not Applicable",
          required: true,
          options: [
            {
              value: "NA",
              label: "Not Applicable",
            },
            {
              value: "Y",
              label: "yes",
            },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.relativeType",
          type: "radio", // or "select"
          label: "Relationship to U.S. Citizen/LPR",
          helpText: "Select your relationship to the petitioner",
          required: true,
          conditional: {
            dependsOn: "part2.relativeFiledI140",
            value: "Y",
          },
          options: [
            { value: "1", label: "Father" },
            { value: "2", label: "Mother" },
            { value: "3", label: "Child" },
            { value: "4", label: "Adult Son" },
            { value: "5", label: "Adult Daughter" },
            { value: "6", label: "Brother" },
            { value: "7", label: "Sister" },
            { value: "8", label: "None of These" },
          ],
        },
        {
          id: "part2.relativeStatus",
          type: "radio",
          label: "Relative's Immigration Status",
          conditional: {
            dependsOn: "part2.relativeFiledI140",
            value: "Y",
          },
          helpText: "Select the immigration status of your relative/petitioner",
          required: true,
          options: [
            { value: "1", label: "U.S. Citizen" },
            { value: "2", label: "U.S. National" },
            { value: "3", label: "Lawful Permanent Resident" },
            { value: "4", label: "None of These" },
          ],
        },
      ],
    },

    {
      id: "part2-specialImmigrant",
      title: "Part 2: Special Immigrant",
      questions: [
        {
          id: "part2.specialImmigrantAfghanIraqi",
          type: "radio",
          label: "3.c.1. Special Immigrant: Afghan or Iraqi",
          options: [
            { value: "3c1", label: "Afghan or Iraqi" },
            { value: "3c0", label: "3.c.3. Special Immigrant: Juvenile" },
            { value: "3c3", label: "3.c.10. Special Immigrant: G-4 or NATO-6" },
            { value: "N/A", label: "None" },
          ],
        },
      ],
    },
    {
      id: "part2-specialImmigrant-2",
      title: "Part 2: Special Immigrant Category",
      questions: [
        {
          id: "part2.specialImmigrantCategory",
          type: "radio",
          label: "3.c. Special Immigrant Category",
          required: true,
          options: [
            { value: "3c2", label: "Certain International Broadcaster" },
            { value: "3c4", label: "Certain US Armed Forces Member" },
            { value: "3c5", label: "Panama Canal Zone Employee" },
            { value: "3c6", label: "Certain Physician" },
            {
              value: "3c7",
              label:
                "Certain Employee or Former Employee of US Government Abroad",
            },
            { value: "3c8", label: "Minister of Religion" },
            { value: "3c9", label: "Other Religious Worker" },
            { value: "N/A", label: "None" },
          ],
        },
      ],
    },
    {
      id: "part2-asyleeOrRefugee",
      title: "Part 2: Asylee or Refugee",
      questions: [
        {
          id: "part2.asyleeOrRefugee",
          type: "select",
          label: "3.d. Asylee or Refugee Status",
          required: true,
          options: [
            { value: "3d0", label: "Asylum Status" },
            { value: "3d1", label: "Refugee Status" },
            { value: "N/A", label: "None" },
          ],
        },
      ],
    },
    {
      id: "part2-humanTraffickingVictimOrCrimeVictim",
      title: "Part 2: Human Trafficking Victim or Crime Victim",
      questions: [
        {
          id: "part2.humanTraffickingVictimOrCrimeVictim",
          type: "radio",
          label: "3.e. Human Trafficking Victim or Crime Victim",
          required: true,
          options: [
            { value: "3e0", label: "Human Trafficking Victim" },
            { value: "3e1", label: "Victim of Qualifying Criminal Activity" },
          ],
        },
      ],
    },
    {
      id: "part2-alienRegistrationNumber",
      title: "Part 2: Alien Registration Number",
      questions: [
        {
          id: "part2.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part2-specialProgramsBasedOnCertainPublicLaws",
      title: "Part 2: Special Programs Based on Certain Public Laws",
      questions: [
        {
          id: "part2.specialPrograms",
          type: "radio",
          label: "3.f. Special Programs Based on Certain Public Laws",
          required: true,
          options: [
            { value: "3f0", label: "Cuban Adjustment Act" },
            {
              value: "3f1",
              label:
                "Victim of Battery or Extreme Cruelty under Cuban Adjustment Act",
            },
            {
              value: "3f2",
              label:
                "Dependent Status under Haitian Refugee Immigrant Fairness Act",
            },
            {
              value: "3f3",
              label:
                "Victim of Battery or Extreme Cruelty under Haitian Refugee Immigrant Fairness Act",
            },
            { value: "3f4", label: "Lautenberg Parolee" },
            {
              value: "3f5",
              label: "Diplomat or High-Ranking Official Unable to Return Home",
            },
            { value: "3f6", label: "National of Vietnam, Cambodia, or Laos" },
          ],
        },
      ],
    },
    {
      id: "part2-additionalOptions",
      title: "Part 2: Additional Options",
      questions: [
        {
          id: "part2.additionalOptions",
          type: "radio",
          label: "3.g. Additional Eligibility Options",
          required: true,
          options: [
            { value: "3g0", label: "Diversity Visa Program" },
            {
              value: "3g1",
              label: "Continuous Residence in US Since Before 1972",
            },
            {
              value: "3g2",
              label: "Individual Born in US Under Diplomatic Status",
            },
            {
              value: "3g3",
              label: "S Nonimmigrant or Qualifying Family Member",
            },
            { value: "3g4", label: "Other Eligibility" },
          ],
        },
        {
          id: "part2.additionalOptions.enterOtherEligibility",
          type: "text",
          label: "Specify Other Eligibility",
          required: false,
          conditional: { dependsOn: "part2.additionalOptions", value: "3g4" },
        },
      ],
    },
    {
      id: "part2-eligibility",
      title: "Part 2: Application Type or Filing Category",
      questions: [
        {
          id: "part2.asyleeDateGranted",
          type: "date",
          label: "3.d. Date Asylee Status Granted",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.refugeeDateOfAdmission",
          type: "date",
          label: "3.d. Date of Refugee Admission",
          required: true,
          placeholder: "MM/DD/YYYY",
        },

        {
          id: "part2.cspa",
          type: "radio",
          label: "5. CSPA Not Applicable",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },

        {
          id: "part2.ina245i",
          type: "radio",
          label: "4. INA 245(i) Not Applicable",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part7-alien-number",
      title: "Part 7: Alien Registration Number",
      questions: [
        {
          id: "part7.alienNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part4-immigrant-visa",
      title: "Part 4: Information About Your Immigration History",
      questions: [
        {
          id: "part4.appliedForImmigrantVisa",
          type: "radio",
          label: "1. Have you ever applied for an immigrant visa?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },

        {
          id: "part4.dateOfDecision",
          type: "date",
          label: "4. Date of Decision",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.locationOfEmbassyCity",
          type: "text",
          label: "Location of U.S. Embassy or Consulate City",
          required: true,
        },
        {
          id: "part4.locationOfEmbassyCountry",
          type: "text",
          label: "Location of U.S. Embassy or Consulate Country",
          required: true,
        },
        {
          id: "part4.appliedForPermanentResidence",
          type: "radio",
          label: "Have you ever applied for permanent residence?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },

        {
          id: "part4.lprStatusRescinded",
          type: "radio",
          label: "Has your LPR status ever been rescinded? No",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part3.exemption",
          type: "radio",
          label: "1. Exemption from Affidavit of Support",
          required: true,
          options: [
            { value: "0", label: "40 Quarters of Coverage" },
            { value: "1", label: "Under 18 Years of Age" },
            { value: "2", label: "Widow/Widower" },
            { value: "3", label: "VAWA Self-Petitioner" },
            { value: "4", label: "None Apply" },
          ],
        },
        {
          id: "part4.employmentOrSchoolName",
          type: "text",
          label: "Name of Employer or School",
          required: true,
        },
        {
          id: "part4.occupation",
          type: "text",
          label: "Occupation",
          required: true,
        },
      ],
    },

    {
      id: "part3-exemption-request",
      title: "Part 3: Exemption Request",
      questions: [
        {
          id: "part3.exemptionRequest",
          type: "radio",
          label: "1. Exemption from Affidavit of Support",
          helpText:
            "Select if you qualify for an exemption from the Affidavit of Support requirement",
          required: false,
          options: [
            { value: "0", label: "40 Qualifying Quarters of Work" },
            { value: "1", label: "Under 18 Years of Age" },
            { value: "2", label: "Widow(er) of U.S. Citizen" },
            { value: "3", label: "VAWA Self-Petitioner" },
            { value: "4", label: "Other Exemption" },
            { value: "5", label: "None Apply" },
          ],
        },
      ],
    },
    {
      id: "part4-employment-history",
      title: "Part 4: Employment History",
      questions: [
        {
          id: "part4.employmentHistory.employerName",
          type: "text",
          label: "7. Employer Name",
          required: true,
        },
        {
          id: "part4.employerAddress.streetName",
          type: "text",
          label: "7.a. Street Name",
          required: true,
        },
        {
          id: "part4.employerAddress.unit",

          type: "select",

          label: "7.b. Unit Type",

          options: [
            { value: "", label: "Select if applicable" },

            { value: "APT", label: "Apartment" },

            { value: "STE", label: "Suite" },

            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.employerAddress.unitNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part4.employerAddress.city",
          type: "text",
          label: "7.d. City",
          required: true,
        },
        {
          id: "part4.employerAddress.state",
          type: "text",
          label: "7.e. State",
          required: true,
        },
        {
          id: "part4.employerAddress.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
          required: true,
        },
        {
          id: "part4.employerAddress.postalCode",
          type: "text",
          label: "7.g. Postal Code",
        },
        {
          id: "part4.employerAddress.province",
          type: "text",
          label: "7.h. Province",
        },
        {
          id: "part4.employerAddress.country",
          type: "text",
          label: "7.i. Country",
          required: true,
        },
        {
          id: "part4.employmentDates.dateFrom",
          type: "date",
          label: "7.j. Date From",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.employmentDates.dateTo",
          type: "date",
          label: "7.k. Date To",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.unemploymentSupport.source",
          type: "text",
          label: "8. Source of Unemployment Support",
        },
        {
          id: "part4.recentEmployerOccupation",
          type: "text",
          label: "9. Recent Employer Occupation",
        },
        {
          id: "part4.recentEmployerName",
          type: "text",
          label: "10. Recent Employer Name",
        },
        {
          id: "part4.recentEmployerAddress.streetName",
          type: "text",
          label: "10.a. Street Name",
        },
        {
          id: "part4.recentEmployerAddress.unitType",

          type: "select",

          label: "10.b. Unit Type",

          options: [
            { value: "", label: "Select if applicable" },

            { value: "APT", label: "Apartment" },

            { value: "STE", label: "Suite" },

            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.recentEmployerAddress.unitNumber",
          type: "text",
          label: "10.c. Unit Number",
        },
      ],
    },
    {
      id: "part4-additional-info",
      title: "Part 4: Additional Information",
      questions: [
        {
          id: "part4.additionalInfo.decision",
          type: "radio",
          label: "3. Decision",
          required: true,
          options: [{ value: "approved", label: "Approved" }],
        },
      ],
    },
    {
      id: "alien-registration",
      title: "Alien Registration",
      questions: [
        {
          id: "alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part4-employment",
      title: "Part 4: Employment Information",
      questions: [
        {
          id: "part4.employerCity",
          type: "text",
          label: "8.a. Employer City",
          required: true,
        },
        {
          id: "part4.employerState",
          type: "text",
          label: "8.b. Employer State",
          required: true,
        },
        {
          id: "part4.employerZipCode",
          type: "text",
          label: "8.c. Employer ZIP Code",
          required: true,
        },
        {
          id: "part4.employerPostalCode",
          type: "text",
          label: "8.d. Employer Postal Code",
          required: false,
        },
        {
          id: "part4.employerProvince",
          type: "text",
          label: "8.e. Employer Province",
          required: false,
        },
        {
          id: "part4.employerCountry",
          type: "text",
          label: "8.f. Employer Country",
          required: true,
        },
        {
          id: "part4.employmentDateFrom",
          type: "date",
          label: "8.g. Employment Date From",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.employmentDateTo",
          type: "date",
          label: "8.h. Employment Date To",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part4.financialSupportSource",
          type: "text",
          label: "8.i. Source of Financial Support",
          required: false,
        },
      ],
    },
    {
      id: "part5-parent1",
      title: "Part 5: Parent 1 Information",
      questions: [
        {
          id: "part5.parent1FamilyName",
          type: "text",
          label: "1.a. Parent 1 Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.parent1GivenName",
          type: "text",
          label: "1.b. Parent 1 Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.parent1MiddleName",
          type: "text",
          label: "1.c. Parent 1 Middle Name",
          required: false,
        },
        {
          id: "part5.parent1BirthGivenName",
          type: "text",
          label: "2.a. Parent 1 Birth Given Name",
          required: false,
        },
        {
          id: "part5.parent1DateOfBirth",
          type: "date",
          label: "3. Parent 1 Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.parent1BirthFamilyName",
          type: "text",
          label: "2.b. Parent 1 Birth Family Name",
          required: false,
        },
        {
          id: "part5.parent1BirthMiddleName",
          type: "text",
          label: "2.c. Parent 1 Birth Middle Name",
          required: false,
        },
        {
          id: "part5.alienNumber",
          type: "text",
          label: "4. Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part5.parent1CityOfBirth",
          type: "text",
          label: "5. Parent 1 City of Birth",
          required: true,
        },
      ],
    },
    {
      id: "part5-parent2",
      title: "Part 5: Parent 2 Information",
      questions: [
        {
          id: "part5.parent2FamilyName",
          type: "text",
          label: "6.a. Parent 2 Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.parent2GivenName",
          type: "text",
          label: "6.b. Parent 2 Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.parent2MiddleName",
          type: "text",
          label: "6.c. Parent 2 Middle Name",
          required: false,
        },
        {
          id: "part5.parent2DateOfBirth",
          type: "date",
          label: "7. Parent 2 Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.parent2BirthFamilyName",
          type: "text",
          label: "8.a. Parent 2 Birth Family Name",
          required: false,
        },
        {
          id: "part5.parent2BirthGivenName",
          type: "text",
          label: "8.b. Parent 2 Birth Given Name",
          required: false,
        },
        {
          id: "part5.parent2BirthMiddleName",
          type: "text",
          label: "8.c. Parent 2 Birth Middle Name",
          required: false,
        },
      ],
    },
    {
      id: "part5-parent-info",
      title: "Part 5: Parent Information",
      questions: [
        {
          id: "part5.parent2CountryOfBirth",
          type: "text",
          label: "10. Parent 2 Country of Birth",
          required: true,
        },
        {
          id: "part5.spouseUsArmedForces",
          type: "radio",
          label:
            "2. Is your spouse currently serving in the U.S. Armed Forces?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part5.timesMarried",
          type: "text",
          label: "3. How many times have you been married?",
          required: true,
        },
      ],
    },
    {
      id: "part6-marital-info",
      title: "Part 6: Marital Information",
      questions: [
        {
          id: "part6.currentMaritalStatus",
          type: "radio",
          label: "1. Current Marital Status",
          options: [
            { label: "Married", value: "1" },
            { label: "Single", value: "2" },
            { label: "Divorced", value: "3" },
            { label: "Widowed", value: "4" },
            { label: "Separated", value: "5" },
            { label: "Annulled", value: "7" },
          ],
          required: true,
        },
        {
          id: "part6.currentSpouseFamilyName",
          type: "text",
          label: "4.a. Current Spouse's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part6.currentSpouseGivenName",
          type: "text",
          label: "4.b. Current Spouse's Given Name (First Name)",
          required: true,
        },
        {
          id: "part6.currentSpouseMiddleName",
          type: "text",
          label: "4.c. Current Spouse's Middle Name",
        },
        {
          id: "part6.currentSpouseAlienNumber",
          type: "text",
          label: "5. Current Spouse's Alien Registration Number (A-Number)",
        },
        {
          id: "part6.currentSpouseDateOfBirth",
          type: "date",
          label: "8. Current Spouse's Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part6.currentSpouseCountryOfBirth",
          type: "text",
          label: "9. Current Spouse's Country of Birth",
          required: true,
        },
        {
          id: "part6.currentSpouseCurrentAddressCountry",
          type: "text",
          label: "Current Spouse's Current Address - Country",
          required: true,
        },
        {
          id: "part6.currentSpouseCurrentAddressStreet",
          type: "text",
          label: "Current Spouse's Current Address - Street",
          required: true,
        },
        {
          id: "part6.currentSpouseCurrentAddressCity",
          type: "text",
          label: "Current Spouse's Current Address - City",
          required: true,
        },
        {
          id: "part6.currentSpouseCurrentAddressPostalCode",
          type: "text",
          label: "Current Spouse's Current Address - Postal Code",
          required: true,
        },
        {
          id: "part6.currentSpouseCurrentAddressProvince",
          type: "text",
          label: "Current Spouse's Current Address - Province",
        },
        {
          id: "part6.interpreterMailingAddressUnit",
          type: "text",
          label: "Interpreter's Mailing Address - Unit",
        },
      ],
    },
    {
      id: "part6-interpreter-mailing-address",
      title: "Part 6: Interpreter Mailing Address",

      questions: [
        {
          id: "part6.interpreterMailingAddressApartmentSuiteOrFloorNumber",
          type: "text",
          label: "8. Apartment, Suite, or Floor Number",
          required: false,
        },
        {
          id: "part6.interpreterMailingAddressState",
          type: "select",
          label: "8. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part6.interpreterMailingAddressZipCode",
          type: "text",
          label: "8. ZIP Code",
          required: true,
        },
      ],
    },
    {
      id: "part6-current-marriage",
      title: "Part 6: Current Marriage Information",
      questions: [
        {
          id: "alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part6.currentMarriagePlaceCityOrTown",
          type: "text",
          label: "10. City or Town of Marriage",
          required: true,
        },
        {
          id: "part6.currentMarriagePlaceStateOrProvince",
          type: "text",
          label: "10. State or Province of Marriage",
          required: true,
        },
        {
          id: "part6.currentMarriagePlaceCountry",
          type: "text",
          label: "10. Country of Marriage",
          required: true,
        },
        {
          id: "part6.currentMarriageDateOfMarriage",
          type: "date",
          label: "10. Date of Marriage (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part6.currentSpouseApplyingWithYou",
          type: "radio",
          label: "11. Is your current spouse applying with you?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part6-prior-marriage",
      title: "Part 6: Prior Marriage Information",
      description: "Information About Your Prior Spouse",
      questions: [
        {
          id: "part6.priorSpouseFamilyName",
          type: "text",
          label: "12. Prior Spouse's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part6.priorSpouseGivenName",
          type: "text",
          label: "12. Prior Spouse's Given Name (First Name)",
          required: true,
        },
        {
          id: "part6.priorSpouseMiddleName",
          type: "text",
          label: "12. Prior Spouse's Middle Name",
          required: false,
        },
        {
          id: "part6.priorSpouseDateOfBirth",
          type: "date",
          label: "12. Prior Spouse's Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part6.priorSpouseCountryOfCitizenshipOrNationality",
          type: "text",
          label: "15. Prior Spouse's Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part6.priorSpouseCountryOfBirth",
          type: "text",
          label: "14. Prior Spouse's Country of Birth",
          required: true,
        },
        {
          id: "part6.priorMarriageDateOfMarriage",
          type: "date",
          label: "16. Date of Prior Marriage (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part6.priorMarriagePlaceCityOrTown",
          type: "text",
          label: "16. City or Town of Prior Marriage",
          required: true,
        },
        {
          id: "part6.priorMarriagePlaceStateOrProvince",
          type: "text",
          label: "16. State or Province of Prior Marriage",
          required: true,
        },
        {
          id: "part6.priorMarriagePlaceCountry",
          type: "text",
          label: "16. Country of Prior Marriage",
          required: true,
        },
        {
          id: "part6.priorMarriageEndPlaceCityOrTown",
          type: "text",
          label: "16. City or Town Where Prior Marriage Ended",
          required: true,
        },
        {
          id: "part6.priorMarriageEndPlaceStateOrProvince",
          type: "text",
          label: "16. State or Province Where Prior Marriage Ended",
          required: true,
        },
        {
          id: "part6.priorMarriageEndPlaceCountry",
          type: "text",
          label: "16. Country Where Prior Marriage Ended",
          required: true,
        },
        {
          id: "part6.priorMarriageEndDate",
          type: "date",
          label: "16. Date Prior Marriage Ended (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part6.howMarriageEndedWithPriorSpouseSpouseDeceased",
          type: "text",
          label: "16. How Prior Marriage Ended (e.g., Spouse Deceased)",
          required: true,
        },
      ],
    },
    {
      id: "part6-marital-history",
      title: "Part 6: Marital History",
      description: "Information About Your Prior Marriages",
      questions: [
        {
          id: "part6.howMarriageEnded",
          type: "radio",
          label: "19. How did your prior marriage end?",
          required: true,
          options: [
            { value: "3", label: "Spouse Deceased" },
            { value: "1", label: "Annulled" },
            { value: "4", label: "Other" },
            { value: "2", label: "Divorced" },
          ],
        },
        {
          id: "part6.howMarriageEndedOtherExplanation",
          type: "text",
          label: "19. Explanation if Other",
          helpText:
            "Provide details if the marriage ended in a way not listed.",
          required: false,
          conditional: {
            dependsOn: "part6.howMarriageEnded",
            value: "4",
          },
        },
      ],
    },
    {
      id: "part7-children",
      title: "Part 7: Information About Your Children",
      questions: [
        {
          id: "alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part7.children.totalChildren",
          type: "text",
          label: "1. Total Number of Children",
          required: true,
        },
        {
          id: "part7.children.child1.familyName",
          type: "text",
          label: "2.a. Child 1 Family Name (Last Name)",
          required: true,
        },
        {
          id: "part7.children.child1.givenName",
          type: "text",
          label: "2.b. Child 1 Given Name (First Name)",
          required: true,
        },
        {
          id: "part7.children.child1.middleName",
          type: "text",
          label: "2.c. Child 1 Middle Name",
          required: false,
        },
        {
          id: "part7.children.child1.alienNumber",
          type: "text",
          label: "2.d. Child 1 Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part7.children.child1.dateOfBirth",
          type: "date",
          label: "2.e. Child 1 Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part7.children.child1.countryOfBirth",
          type: "texr",
          label: "2.f. Child 1 Country of Birth",
        },
        {
          id: "part7.children.child1.applyingWithI485",
          type: "radio",
          label: "2.g. Is Child 1 Applying with a Separate Form I-485?",

          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part7.children.child1.relationship",
          type: "text",
          label: "2.h. Child 1 Relationship to You",
          required: true,
        },
        {
          id: "part7.children.child2.familyName",
          type: "text",
          label: "3.a. Child 2 Family Name (Last Name)",
          required: false,
        },
        {
          id: "part7.children.child2.givenName",
          type: "text",
          label: "3.b. Child 2 Given Name (First Name)",
          required: false,
        },
        {
          id: "part7.children.child2.middleName",
          type: "text",
          label: "3.c. Child 2 Middle Name",
          required: false,
        },
        {
          id: "part7.children.child2.alienNumber",
          type: "text",
          label: "3.d. Child 2 Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part7.children.child2.dateOfBirth",
          type: "date",
          label: "3.e. Child 2 Date of Birth (mm/dd/yyyy)",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part7.children.child2.countryOfBirth",
          type: "text",
          label: "3.f. Child 2 Country of Birth",
        },
        {
          id: "part7.children.child2.applyingWithI45",
          type: "radio",
          label: "3.g. Is Child 2 Applying with a Separate Form I-485?",
          required: false,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part7.children.child2.relationship",
          type: "text",
          label: "3.h. Child 2 Relationship to You",
          required: false,
        },
        {
          id: "alienNumberReadOnly",
          type: "text",
          label: "Alien Registration Number (Read-Only)",
          required: false,
          readOnly: true,
        },
      ],
    },
    {
      id: "part8-ethnicity-race",
      title: "Part 8: Ethnicity and Race",
      questions: [
        {
          id: "part8.ethnicity",
          type: "radio",
          label: "1. Ethnicity",
          required: true,
          options: [
            { value: "H", label: "Hispanic or Latino" },
            { value: "no", label: "Not Hispanic or Latino" },
          ],
        },
        {
          id: "part8.race",
          type: "radio",
          label: "2. Race (Select all that apply)",
          helpText: "You may select one or more races",
          required: false,
          options: [
            { value: "AS", label: "Asian" },
            { value: "WH", label: "White" },
            { value: "BL", label: "Black or African American" },
            { value: "AI", label: "American Indian or Alaska Native" },
            { value: "HW", label: "Native Hawaiian or Other Pacific Islander" },
          ],
        },
      ],
    },
    {
      id: "part8-physical-characteristics",
      title: "Part 8: Physical Characteristics",
      questions: [
        {
          id: "part8.heightFeet",
          type: "select",
          label: "3. Height: Feet",
          required: true,
          options: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
            { value: "8", label: "8" },
            { value: "9", label: "9" },
          ],
        },
        {
          id: "part8.heightInches",
          type: "select",
          label: "3. Height: Inches",
          required: true,
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
        {
          id: "part8.weightFirstDigit",
          type: "text",
          label: "4. Weight: First Digit",
          required: true,
        },
        {
          id: "part8.weightSecondDigit",
          type: "text",
          label: "4. Weight: Second Digit",
          required: true,
        },
        {
          id: "part8.weightThirdDigit",
          type: "text",
          label: "4. Weight: Third Digit",
          required: true,
        },
      ],
    },
    {
      id: "part8-eye-color",
      title: "Part 8: Eye Color",
      questions: [
        {
          id: "part8.eyeColor",
          type: "radio",
          label: "5. Eye Color",
          required: true,
          options: [
            { value: "BU", label: "Blue" },
            { value: "BL", label: "Black" },
            { value: "BN", label: "Brown" },
            { value: "GR", label: "Gray" },
            { value: "GN", label: "Green" },
            { value: "HA", label: "Hazel" },
            { value: "MA", label: "Maroon" },
            { value: "PN", label: "Pink" },
            { value: "UN", label: "Unknown/Other" },
          ],
        },
      ],
    },
    {
      id: "part8-hair-color",
      title: "Part 8: Hair Color",
      questions: [
        {
          id: "part8.hairColor",
          type: "radio",
          label: "6. Hair Color",
          required: true,
          options: [
            { value: "NH", label: "Bald (No Hair)" },
            { value: "BL", label: "Black" },
            { value: "BN", label: "Blond" },
            { value: "BR", label: "Brown" },
            { value: "GR", label: "Gray" },
            { value: "RD", label: "Red" },
            { value: "SA", label: "Sandy" },
            { value: "WH", label: "White" },
            { value: "OT", label: "Unknown/Other" },
          ],
        },
      ],
    },
    {
      id: "part9-organizationInvolvement",
      title: "Part 9: Organization Involvement",
      questions: [
        {
          id: "part9.organizationInvolvement",
          type: "radio",
          label:
            "1. Have you EVER been a member of, involved in, or in any way associated with any organization, association, fund, foundation, party, club, society, or similar group in the United States or in any other location in the world?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-organization1",
      title: "Part 9: Organization 1 Details",
      questions: [
        {
          id: "part9.organization1Name",
          type: "text",
          label: "Organization Name",
          required: false,
        },
        {
          id: "part9.organization1CityTown",
          type: "text",
          label: "City/Town",
          required: false,
        },
        {
          id: "part9.organization1StateProvince",
          type: "select",
          label: "State/Province",
          options: US_STATES,
          required: false,
        },
        {
          id: "part9.organization1Country",
          type: "text",
          label: "Country",
          required: false,
        },
        {
          id: "part9.organization1Nature",
          type: "text",
          label: "Nature of Organization",
          required: false,
        },
        {
          id: "part9.organization1InvolvementNature",
          type: "text",
          label: "Nature of Involvement",
          required: false,
        },
        {
          id: "part9.organization1DateFrom",
          type: "date",
          label: "Date From",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part9.organization1DateTo",
          type: "date",
          label: "Date To",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part9-organization2",
      title: "Part 9: Organization 2 Details",
      questions: [
        {
          id: "part9.organization2Name",
          type: "text",
          label: "Organization Name",
          required: false,
        },
        {
          id: "part9.organization2CityTown",
          type: "text",
          label: "City/Town",
          required: false,
        },
        {
          id: "part9.organization2StateProvince",
          type: "select",
          label: "State/Province",
          options: US_STATES,
          required: false,
        },
        {
          id: "part9.organization2Country",
          type: "text",
          label: "Country",
          required: false,
        },
        {
          id: "part9.organization2Nature",
          type: "text",
          label: "Nature of Organization",
          required: false,
        },
        {
          id: "part9.organization2InvolvementNature",
          type: "text",
          label: "Nature of Involvement",
          required: false,
        },
        {
          id: "part9.organization2DateFrom",
          type: "date",
          label: "Date From",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part9.organization2DateTo",
          type: "date",
          label: "Date To",
          required: false,
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part9-additionalInformation",
      title: "Part 9: Additional Information",
      questions: [
        {
          id: "alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
        // {
        //   id: "part9.deniedAdmission",
        //   type: "radio",
        //   label: "denied admission to the United States",

        //   required: true,
        //   options: [
        //     { label: "Yes", value: "Y" },
        //     { label: "No", value: "N" },
        //   ],
        // },
      ],
    },
    {
      id: "part9-admissions",
      title: "Part 9: Admissions and Immigration History",
      questions: [
        {
          id: "part9.deniedAdmission",
          type: "radio",
          label:
            "10. Have you ever been denied admission to the United States?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.deniedVisa",
          type: "radio",
          label: "11. Have you ever been denied a visa to the United States?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.violatedNonimmigrantStatus",
          type: "radio",
          label:
            "13. Have you ever violated the terms of your nonimmigrant status?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.removalProceedings",
          type: "radio",
          label: "18. Are you currently in removal proceedings?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.finalOrder",
          type: "radio",
          label:
            "19. Have you ever been ordered removed from the United States?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.workedWithoutAuthorization",
          type: "radio",
          label:
            "12. Have you ever worked in the United States without authorization?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.reinstatedOrder",
          type: "radio",
          label: "20. Have you ever had a removal order reinstated?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.voluntaryDeparture",
          type: "radio",
          label:
            "17. Have you ever been granted voluntary departure by an immigration officer or judge?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.appliedForRelief",
          type: "radio",
          label: "23. Have you ever applied for any relief from removal?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.jNonimmigrant",
          type: "radio",
          label: "Have you ever been a J nonimmigrant exchange visitor?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.compliedWithRequirement",
          type: "radio",
          label:
            "Have you complied with the two-year foreign residence requirement?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.grantedWaiver",
          type: "radio",
          label:
            "Have you been granted a waiver of the two-year foreign residence requirement?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.arrested",
          type: "radio",
          label:
            "Have you ever been arrested, cited, charged, or detained for any reason by any law enforcement official?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-criminalHistory",
      title: "Part 9: Criminal History and Immigration Violations",
      questions: [
        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
          readonly: true,
        },
        {
          id: "part9.criminalActsCommitted",
          type: "radio",
          label:
            "Have you ever committed a crime or offense for which you were not arrested?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },
        {
          id: "part9.crimeConviction",
          type: "radio",
          label: "Have you ever been convicted of a crime or offense?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.punishmentOrdered",
          type: "radio",
          label: "Have you ever been ordered to pay a fine or restitution?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.controlledSubstanceViolation",
          type: "radio",
          label:
            "Have you ever violated any law related to controlled substances?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.traffickingControlledSubstances",
          type: "radio",
          label:
            "Have you ever been involved in trafficking of controlled substances?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.spouseTraffickingBenefit",
          type: "radio",
          label:
            "Has your spouse ever benefited from trafficking of controlled substances?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.knowledgeOfBenefit",
          type: "radio",
          label:
            "Did you have knowledge of any benefit from trafficking activities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.engagedInProstitution",
          type: "radio",
          label: "Have you ever engaged in prostitution?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.procuredProstitution",
          type: "radio",
          label: "Have you ever procured anyone for prostitution?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.receivedProstitutionProceeds",
          type: "radio",
          label: "Have you ever received proceeds from prostitution?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.exercisedImmunity",
          type: "radio",
          label:
            "Have you ever exercised diplomatic immunity to avoid prosecution?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.illegalGamblingIntent",
          type: "radio",
          label: "Have you ever intended to engage in illegal gambling?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-eligibility",
      title: "Part 9: Eligibility and Inadmissibility Grounds",
      questions: [
        {
          id: "part9.servedAsForeignGovernmentOfficial",
          type: "radio",
          label: "35.a. Have you ever served as a foreign government official?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.involvedInSexTrafficking",
          type: "radio",
          label: "36. Have you ever been involved in sex trafficking?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.traffickedPersonForLabor",
          type: "radio",
          label: "37. Have you ever trafficked a person for labor?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.violationsOfReligiousFreedoms",
          type: "radio",
          label:
            "35.b. Have you ever been involved in violations of religious freedoms?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: false,
          helpText: "Enter your Alien Registration Number if applicable.",
        },
        {
          id: "part9.aidedInTrafficking",
          type: "radio",
          label: "38. Have you ever aided in trafficking?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.receivedBenefitsFromTrafficking",
          type: "radio",
          label: "39. Have you ever received benefits from trafficking?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.engagedInMoneyLaundering",
          type: "radio",
          label: "41. Have you ever engaged in money laundering?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.knewAboutBenefitsFromTrafficking",
          type: "radio",
          label: "39. Did you know about benefits from trafficking?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.espionageOrSabotage",
          type: "radio",
          label: "Have you ever engaged in espionage or sabotage?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.exportViolation",
          type: "radio",
          label: "Have you ever been involved in export violations?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.overthrowGovernment",
          type: "radio",
          label: "Have you ever attempted to overthrow a government?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.receivedMilitaryTraining",
          type: "radio",
          label: "Have you ever received military training?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-unlawful-activity",
      title: "Part 9: Unlawful Activity",
      questions: [
        {
          id: "part9.engageUnlawfulActivity",
          type: "radio",
          label: "Have you ever engaged in any unlawful activity?",

          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },

        {
          id: "part9.committedKidnapping",
          type: "radio",
          label: "Have you ever committed kidnapping?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.usedWeapon",
          type: "radio",
          label: "Have you ever used a weapon unlawfully?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.threatenedActivity",
          type: "radio",
          label: "Have you ever threatened any unlawful activity?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.recruitedMembers",
          type: "radio",
          label: "Have you ever recruited members for unlawful activities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.providedSupport",
          type: "radio",
          label: "Have you ever provided support for unlawful activities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.incitedActivity",
          type: "radio",
          label: "Have you ever incited any unlawful activity?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.participatedGroup",
          type: "radio",
          label:
            "Have you ever participated in a group involved in unlawful activities?",

          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.intendEngageActivity",
          type: "radio",
          label: "Do you intend to engage in any unlawful activity?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.providedSupportIndividual",
          type: "radio",
          label:
            "Have you ever provided support to an individual involved in unlawful activities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.endangerUS",
          type: "radio",
          label:
            "Have you ever engaged in activities that endanger the United States?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part9.spouseChildActivity",
          type: "radio",
          label:
            "Has your spouse or child ever engaged in unlawful activities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-security",
      title: "Part 9: Security and Background Information",
      questions: [
        {
          id: "part9.securityWeapons",
          type: "radio",
          label: "Have you ever used a weapon against another person?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityDetention",
          type: "radio",
          label: "Have you ever been detained by any law enforcement officer?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityGroupWeapon",
          type: "radio",
          label: "Have you ever been a member of a group that used weapons?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.securityMilitary",
          type: "radio",
          label: "Have you ever served in the military?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityCommunist",
          type: "radio",
          label: "Have you ever been a member of the Communist Party?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityArmedGroup",
          type: "radio",
          label: "Have you ever been a member of an armed group?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.securityChildHostilities",
          type: "radio",
          label:
            "Have you ever recruited a child under 15 to participate in hostilities?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.securityInjury",
          type: "radio",
          label: "Have you ever caused serious injury to another person?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityChildRecruitment",
          type: "radio",
          label:
            "Have you ever recruited a child under 15 for military service?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },

        {
          id: "part9.securityTorture",
          type: "radio",
          label: "Have you ever engaged in torture?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.securityGenocide",
          type: "radio",
          label: "Have you ever participated in genocide?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.securityKilling",
          type: "radio",
          label: "Have you ever killed another person?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },

        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
          helpText: "Enter your A-Number, if applicable.",
        },
      ],
    },
    {
      id: "part9-publicChargeExemption",
      title: "Part 9: Public Charge Exemption",
      questions: [
        {
          id: "part9.publicChargeExemption.afghanIraqiNational",
          type: "radio",
          label: "Afghan or Iraqi National",
          options: [{ value: "0", label: "Afghan or Iraqi National" }],
        },
        {
          id: "part2.applicationType.lautenbergParolees",
          type: "radio",
          label: "Lautenberg Parolees",
          options: [{ value: "1", label: "Lautenberg Parolees" }],
        },
        {
          id: "part9.publicChargeExemption.victimQualifyingCriminalActivity",
          type: "radio",
          label: "Victim of Qualifying Criminal Activity",
          options: [
            { value: "2", label: "Victim of Qualifying Criminal Activity" },
          ],
        },
        {
          id: "part9.publicChargeExemption.asylee",
          type: "radio",
          label: "Asylee",

          options: [{ value: "3", label: "Asylee" }],
        },
        {
          id: "part9.publicChargeExemption.uNonimmigrantStatus",
          type: "radio",
          label: "U Nonimmigrant Status",

          options: [{ value: "4", label: "U Nonimmigrant Status" }],
        },
        {
          id: "part9.publicChargeExemption.vawaSelfPetitioner",
          type: "radio",
          label: "VAWA Self-Petitioner",

          options: [{ value: "5", label: "VAWA Self-Petitioner" }],
        },
        {
          id: "part9.publicChargeExemption.specialImmigrantJuvenile",
          type: "radio",
          label: "Special Immigrant Juvenile",

          options: [{ value: "6", label: "Special Immmigrant Juvenile" }],
        },
        {
          id: "part9.publicChargeExemption.cubanAdjustmentAct",
          type: "radio",
          label: "Cuban Adjustment Act",

          options: [{ value: "7", label: "Cuban Adjustment Act" }],
        },
        {
          id: "part9.publicChargeExemption.haitianRefugeeDependent",
          type: "radio",
          label: "Haitian Refugee Dependent",

          options: [{ value: "8", label: "Haitian Refugee Dependent" }],
        },
        {
          id: "part9.publicChargeExemption.humanTraffickingVictim",
          type: "radio",
          label: "Victim of Human Trafficking",

          options: [{ value: "9", label: "Victim of Human Trafficking" }],
        },
        {
          id: "part9.publicChargeExemption.cubanAdjustmentActBattered",
          type: "radio",
          label: "Cuban Adjustment Act - Battered Spouse/Child",

          options: [
            {
              value: "10",
              label: "Cuban Adjustment Act - Battered Spouse/Child",
            },
          ],
        },
        {
          id: "part9.publicChargeExemption.haitianRefugeeDependentGeneral",
          type: "radio",
          label: "Haitian Refugee Dependent (General)",

          options: [
            { value: "11", label: "Haitian Refugee Dependent (General)" },
          ],
        },
        {
          id: "part9.publicChargeExemption.tNonimmigrantStatus",
          type: "radio",
          label: "T Nonimmigrant Status",

          options: [{ value: "12", label: "T Nonimmigrant Status" }],
        },
        {
          id: "part9.publicChargeExemption.registry",
          type: "radio",
          label: "Registry",

          options: [{ value: "13", label: "Registry" }],
        },
        {
          id: "part9.publicChargeExemption.nicaraguansCentralAmericans",
          type: "radio",
          label: "Nicaraguans and Central Americans",

          options: [
            { value: "14", label: "Nicaraguans and Central Americans" },
          ],
        },
        {
          id: "part9.publicChargeExemption.amerasianHomecomingAct",
          type: "radio",
          label: "Amerasian Homecoming Act",

          options: [{ value: "15", label: "Amerasian Homecoming Act" }],
        },
        {
          id: "part9.publicChargeExemption.polishHungarianParolee",
          type: "radio",
          label: "Polish or Hungarian Parolee",

          options: [{ value: "16", label: "Polish or Hungarian Parolee" }],
        },
        {
          id: "part9.publicChargeExemption.cubanHaitianEntrants",
          type: "radio",
          label: "Cuban or Haitian Entrants",

          options: [{ value: "17", label: "Cuban or Haitian Entrants" }],
        },
        {
          id: "part9.publicChargeExemption.lautenbergParolee",
          type: "radio",
          label: "Lautenberg Parolee",

          options: [{ value: "18", label: "Lautenberg Parolee" }],
        },
        {
          id: "part9.publicChargeExemption.vietnamCambodiaLaosNational",
          type: "radio",
          label: "Vietnam, Cambodia, or Laos National",

          options: [
            { value: "19", label: "Vietnam, Cambodia, or Laos National" },
          ],
        },
        {
          id: "part9.publicChargeExemption.americanIndianBornCanada",
          type: "radio",
          label: "American Indian Born in Canada",

          options: [{ value: "20", label: "American Indian Born in Canada" }],
        },
        {
          id: "part9.publicChargeExemption.liberianRefugeeImmigrationFairness",
          type: "radio",
          label: "Liberian Refugee Immigration Fairness",

          options: [{ value: "21", label: "Liberian Refugeee" }],
        },
      ],
    },
    {
      id: "part9-additionalInformation-2",
      title: "Part 9: Additional Information",
      questions: [
        {
          id: "part9.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part9.householdSize",
          type: "text",
          label: "Household Size",
          required: true,
        },
        {
          id: "part9.annualHouseholdIncome",
          type: "text",
          label: "Annual Household Income",
          required: true,
        },
      ],
    },

    {
      id: "part9-financialInformation",
      title: "Part 9: Financial Information",
      questions: [
        {
          id: "part9.annualHouseholdIncome",
          type: "radio",
          label: "Annual Household Income",
          required: true,
          options: [
            { value: "A", label: "$0-27,000" },
            { value: "B", label: "$27,001-52,000" },
            { value: "C", label: "$52,001-85,000" },
            { value: "D", label: "$85,001-141,000" },
            { value: "E", label: "Over $141,000" },
          ],
        },
        {
          id: "part9.householdAssetsValue",
          type: "radio",
          label: "Household Assets Value",
          required: true,
          options: [
            { value: "A", label: "$0-18,400" },
            { value: "B", label: "$18,401-136,000" },
            { value: "C", label: "$136,001-321,400" },
            { value: "D", label: "$321,401-707,100" },
            { value: "E", label: "Over $707,100" },
          ],
        },
        {
          id: "part9.householdLiabilitiesValue",
          type: "radio",
          label: "Household Liabilities Value",
          required: true,
          options: [
            { value: "A", label: "$0" },
            { value: "B", label: "$1-10,100" },
            { value: "C", label: "$10,101-57,700" },
            { value: "D", label: "$57,701-186,800" },
            { value: "E", label: "Over $186,800" },
          ],
        },
        // {
        //   id: "part9.exemptionReason",
        //   type: "radio",
        //   label: "Exemption Reason",
        //   required: false,
        //   options: [{ value: "22", label: "Exemption Reason" }],
        // },
        // {
        //   id: "part9.exemptionReasonText",
        //   type: "text",
        //   label: "Other Exemption Reason",
        //   required: false,
        //   helpText: "Provide additional details if applicable.",
        // },

        {
          id: "part9.highestEducationLevel",
          type: "select",
          label: "Highest Education Level",
          required: false,
          options: [
            { value: "C", label: "Less than a high school diploma" },
            { value: "1", label: "No formal education" },
            { value: "2", label: "Primary education" },
            { value: "3", label: "Secondary education" },
            { value: "4", label: "Vocational qualification" },
            { value: "5", label: "Bachelor's degree" },
            { value: "6", label: "Master's degree" },
            { value: "7", label: "Doctorate or higher" },
          ],
        },
        {
          id: "part9.highestGradeCompleted",
          type: "text",
          label: "Highest Grade Completed",
          required: false,
          helpText: "Enter the highest grade level you have completed.",
          conditional: {
            dependsOn: "part9.highestEducationLevel",
            value: "C",
          },
        },
      ],
    },
    {
      id: "part9-publicChargeExemption-2",
      title: "Part 9: Public Charge Exemption",
      questions: [
        {
          id: "part9.exemptFromPublicChargeSyrianNational",
          type: "radio",
          label:
            "56. Are you exempt from the public charge ground of inadmissibility as a Syrian national?",
          options: [
            { value: "24", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-ssiOrTanf",
      title: "Part 9: SSI or TANF Benefits",
      questions: [
        {
          id: "part9.receivedSSIOrTANF",
          type: "radio",
          label: "63. Have you received SSI or TANF benefits?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-longTermInstitutionalization",
      title: "Part 9: Long-Term Institutionalization",
      questions: [
        {
          id: "part9.receivedLongTermInstitutionalization",
          type: "radio",
          label: "64. Have you been subject to long-term institutionalization?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-additionalInformation-3",
      title:
        "Part 9: List your certifications, licenses, skills obtained through work experience, and educational certificates.",
      questions: [
        {
          id: "part9.textField1",
          type: "text",
          label: "List your certifications 1",
          required: false,
        },
        {
          id: "part9.textField2",
          type: "text",
          label: "List your certifications 2",
          required: false,
        },
        {
          id: "part9.textField3",
          type: "text",
          label: "List your certifications 3",
          required: false,
        },
        {
          id: "part9.textField4",
          type: "text",
          label: "List your certifications 4",
          required: false,
        },
        {
          id: "part9.textField5",
          type: "text",
          label: "List your certifications  5",
          required: false,
        },
        {
          id: "part9.textField6",
          type: "text",
          label: "List your certifications 6",
          required: false,
        },
        {
          id: "part9.textField7",
          type: "text",
          label: "Additional Information 7",
          required: false,
        },
        {
          id: "part9.textField8",
          type: "text",
          label: "List your certifications 8",
          required: false,
        },
      ],
    },
    {
      id: "part9-alienRegistration",
      title: "Part 9: Alien Registration Number",
      questions: [
        {
          id: "part9.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part9-institutionalizationDetails",
      title: "Part 9: Institutionalization Details",
      questions: [
        {
          id: "part9.institutionNameCityStateRow1",
          type: "text",
          label: "Institution Name, City, State (Row 1)",
          required: false,
        },
        {
          id: "part9.institutionNameCityStateRow2",
          type: "text",
          label: "Institution Name, City, State (Row 2)",
          required: false,
        },
        {
          id: "part9.institutionNameCityStateRow3",
          type: "text",
          label: "Institution Name, City, State (Row 3)",
          required: false,
        },
        {
          id: "part9.institutionNameCityStateRow4",
          type: "text",
          label: "Institution Name, City, State (Row 4)",
          required: false,
        },
        {
          id: "part9.reasonForInstitutionalizationRow1",
          type: "text",
          label: "Reason for Institutionalization (Row 1)",
          required: false,
        },
        {
          id: "part9.reasonForInstitutionalizationRow2",
          type: "text",
          label: "Reason for Institutionalization (Row 2)",
          required: false,
        },
        {
          id: "part9.reasonForInstitutionalizationRow3",
          type: "text",
          label: "Reason for Institutionalization (Row 3)",
          required: false,
        },
        {
          id: "part9.reasonForInstitutionalizationRow4",
          type: "text",
          label: "Reason for Institutionalization (Row 4)",
          required: false,
        },
        {
          id: "part9.institutionalizationDatesRow1",
          type: "date",
          label: "Institutionalization Dates (Row 1)",
          required: false,
        },
        {
          id: "part9.institutionalizationDatesRow2",
          type: "date",
          label: "Institutionalization Dates (Row 2)",
          required: false,
        },
        {
          id: "part9.institutionalizationDatesRow3",
          type: "date",
          label: "Institutionalization Dates (Row 3)",
          required: false,
        },
        {
          id: "part9.publicChargeInstitutionRow4",
          label: "Institutionalization Dates (Row 4)",
          required: false,
          type: "date",
        },

        //
        {
          id: "part9.publicChargeInstitutionRow1",
          type: "date",
          label: "Institutionalization Dates (Row 4) End Date (Row 1)",
          required: true,
          helpText: "Enter the institutionalization End Date for Row 1.",
        },
        {
          id: "part9.publicChargeInstitutionRow2",
          type: "date",
          label: "Institutionalization Dates (Row 4) End Date (Row 2)",
          required: true,
          helpText: "Enter the institutionalization End Date for Row 2.",
        },
        {
          id: "part9.publicChargeInstitutionRow3",
          type: "date",
          label: "Institutionalization Dates (Row 4) End Date (Row 3)",
          required: true,
          helpText: "Enter the institutionalization End Date for Row 3.",
        },
        {
          id: "part9.publicChargeInstitutionEndDateRow4",
          type: "date",
          label: "Institutionalization Dates (Row 4) End Date (Row 4)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the institutionalization End Date for Row 4.",
        },
      ],
    },
    {
      id: "part9-public-charge",
      title: "Part 9: Public Charge Information",
      questions: [
        {
          id: "part9.benefitReceivedRow1",
          type: "text",
          label: "Benefit Received (Row 1)",
          required: true,
          helpText: "Specify the benefit received for Row 1.",
        },
        {
          id: "part9.benefitReceivedRow2",
          type: "text",
          label: "Benefit Received (Row 2)",
          required: true,
          helpText: "Specify the benefit received for Row 2.",
        },
        {
          id: "part9.benefitReceivedRow3",
          type: "text",
          label: "Benefit Received (Row 3)",
          required: true,
          helpText: "Specify the benefit received for Row 3.",
        },
        {
          id: "part9.benefitReceivedRow4",
          type: "text",
          label: "Benefit Received (Row 4)",
          required: true,
          helpText: "Specify the benefit received for Row 4.",
        },
        {
          id: "part9.benefitReceivedDollarAmountRow1",
          type: "text",
          label: "Dollar Amount (Row 1)",
          required: true,
          helpText:
            "Enter the dollar amount of the benefit received for Row 1.",
        },
        {
          id: "part9.benefitReceivedDollarAmountRow2",
          type: "text",
          label: "Dollar Amount (Row 2)",
          required: true,
          helpText:
            "Enter the dollar amount of the benefit received for Row 2.",
        },
        {
          id: "part9.benefitReceivedDollarAmountRow3",
          type: "text",
          label: "Dollar Amount (Row 3)",
          required: true,
          helpText:
            "Enter the dollar amount of the benefit received for Row 3.",
        },
        {
          id: "part9.benefitReceivedDollarAmountRow4",
          type: "text",
          label: "Dollar Amount (Row 4)",
          required: true,
          helpText:
            "Enter the dollar amount of the benefit received for Row 4.",
        },

        {
          id: "part9.benefitReceivedStartDateRow1",
          type: "date",
          label: "Start Date (Row 1)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the start date for the benefit received in Row 1.",
        },
        {
          id: "part9.benefitReceivedStartDateRow2",
          type: "date",
          label: "Start Date (Row 2)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the start date for the benefit received in Row 2.",
        },
        {
          id: "part9.benefitReceivedStartDateRow3",
          type: "date",
          label: "Start Date (Row 3)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the start date for the benefit received in Row 3.",
        },
        {
          id: "part9.benefitReceivedStartDateRow4",
          type: "date",
          label: "Start Date (Row 4)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the start date for the benefit received in Row 4.",
        },
        {
          id: "part9.benefitReceivedEndDateRow1",
          type: "date",
          label: "End Date (Row 1)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the end date for the benefit received in Row 1.",
        },
        {
          id: "part9.benefitReceivedEndDateRow2",
          type: "date",
          label: "End Date (Row 2)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the end date for the benefit received in Row 2.",
        },
        {
          id: "part9.benefitReceivedEndDateRow3",
          type: "date",
          label: "End Date (Row 3)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the end date for the benefit received in Row 3.",
        },
        {
          id: "part9.benefitReceivedEndDateRow4",
          type: "date",
          label: "End Date (Row 4)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the end date for the benefit received in Row 4.",
        },
        {
          id: "part9.publicChargeYesRow1",
          type: "radio",
          label: "Public Charge - Yes (Row 1)",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText: "Indicate if you are a public charge for Row 1.",
        },

        {
          id: "part9.publicChargeYesRow2",
          type: "radio",
          label: "Public Charge - Yes (Row 2)",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "Indicate if you are a public charge for Row 2.",
        },
      ],
    },
    {
      id: "part9-publicCharge",
      title: "Part 9: Public Charge",
      questions: [
        {
          id: "part9.publicCharge65Row3",
          type: "radio",
          label: "65. Have you ever received public assistance?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-longTermInstitutionalization-2",
      title: "Part 9: Long-term Institutionalization",
      questions: [
        {
          id: "part9.longTermInstitutionalization66Row1",
          type: "radio",
          label: "66. Have you ever been institutionalized for long-term care?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.longTermInstitutionalization66Row2",
          type: "radio",
          label:
            "66. Have you been institutionalized for mental health reasons?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.longTermInstitutionalization66Row3",
          type: "radio",
          label:
            "66. Have you been institutionalized for physical health reasons?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.longTermInstitutionalization66Row4",
          type: "radio",
          label: "66. Have you been institutionalized for other reasons?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-illegalEntries",
      title: "Part 9: Illegal Entries",
      questions: [
        {
          id: "part9.illegalEntries67",
          type: "radio",
          label: "67. Have you ever entered the U.S. illegally?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries68",
          type: "radio",
          label: "68. Have you ever been deported from the U.S.?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries73",
          type: "radio",
          label: "73. Have you ever been denied entry to the U.S.?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries71",
          type: "radio",
          label: "71. Have you ever overstayed a visa in the U.S.?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries72",
          type: "radio",
          label:
            "72. Have you ever been involved in smuggling people into the U.S.?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries70",
          type: "radio",
          label:
            "70. Have you ever been involved in illegal activities in the U.S.?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          required: true,
        },
        {
          id: "part9.illegalEntries69",
          type: "radio",
          label: "69. Have you ever been arrested in the U.S.?",
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-immigrationHistory",
      title: "Part 9: Immigration History",
      questions: [
        {
          id: "part9.illegalEntriesLied",
          type: "radio",
          label: "Have you ever lied to gain entry into the United States?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.removalExcluded",
          type: "radio",
          label:
            "Have you ever been removed or excluded from the United States?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part9.enteredWithoutInspection",
          type: "radio",
          label: "Did you enter the United States without inspection?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
          helpText: "Enter your A-Number if applicable.",
        },
        {
          id: "part9.traffickingReason",
          type: "radio",
          label: "Have you ever been involved in human trafficking?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.reenteredAfterUnlawfulPresence",
          type: "radio",
          label: "Have you reentered the U.S. after being unlawfully present?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part9.deportedAfterReentry",
          type: "radio",
          label: "Have you been deported after reentry?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.unlawfullyPresent",
          type: "radio",
          label: "Have you ever been unlawfully present in the U.S.?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part9.planToPracticePolygamy",
          type: "radio",
          label: "Do you plan to practice polygamy in the U.S.?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.accompanyInadmissibleAlien",
          type: "radio",
          label: "Have you ever accompanied an inadmissible alien?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part9.assistedInCustodyViolation",
          type: "radio",
          label: "Have you assisted in a custody violation?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.votedInViolation",
          type: "radio",
          label: "Have you ever voted in violation of any law?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
        {
          id: "part9.renouncedCitizenshipToAvoidTax",
          type: "radio",
          label: "Have you renounced citizenship to avoid tax?",
          options: [
            { label: "Yes", value: "Y" },
            { label: "No", value: "N" },
          ],
          required: true,
        },
        {
          id: "part9.appliedForExemption",
          type: "radio",
          label: "Have you applied for an exemption from military service?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part9-military-service-1",
      title: "Part 9: Military Service",
      questions: [
        {
          id: "part9.appliedForExemption",
          type: "radio",
          label:
            "84.a. Have you ever applied for any exemption from military service?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
        },

        {
          id: "part9.beenRelievedDischarged",
          type: "radio",
          label:
            "84.b. Have you ever been relieved or discharged from military service?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
        },

        {
          id: "part9.beenConvictedDesertion",
          type: "radio",
          label: "84.c. Have you ever been convicted of desertion?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },

        {
          id: "part9.nationalityStatus",
          type: "text",
          label: "86. Nationality or Citizenship Status",
          required: true,
        },
        {
          id: "part9.leftToAvoidService",
          type: "radio",
          label:
            "85. Have you ever left the United States to avoid military service?",
          options: [
            { label: "No", value: "N" },
            { label: "Yes", value: "Y" },
          ],
          required: true,
        },
      ],
    },
    {
      id: "part10-applicant-contact",
      title: "Part 10: Applicant's Contact Information",
      questions: [
        {
          id: "part10.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part10.daytimePhoneNumber",
          type: "tel",
          label: "Daytime Telephone Number",
          required: true,
        },
        {
          id: "part10.emailAddress",
          type: "email",
          label: "Email Address",
          required: true,
        },
        {
          id: "part10.mobilePhoneNumber",
          type: "tel",
          label: "Mobile Telephone Number",
          required: true,
        },
      ],
    },
    {
      id: "part11-interpreter-info",
      title: "Part 11: Interpreter's Information",
      questions: [
        {
          id: "part11.interpreterGivenName",
          type: "text",
          label: "Interpreter's Given Name (First Name)",
          required: true,
        },
        {
          id: "part11.interpreterFamilyName",
          type: "text",
          label: "Interpreter's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part11.interpreterBusinessName",
          type: "text",
          label: "Interpreter's Business or Organization Name",
        },
        {
          id: "part11.interpreterDaytimePhoneNumber",
          type: "tel",
          label: "Interpreter's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part11.interpreterMobilePhoneNumber",
          type: "tel",
          label: "Interpreter's Mobile Telephone Number",
        },
        {
          id: "part11.interpreterEmail",
          type: "email",
          label: "Interpreter's Email Address",
          required: true,
        },
        {
          id: "part11.interpreterLanguage",
          type: "text",
          label: "Language Used by Interpreter",
          required: true,
        },
      ],
    },
    {
      id: "part12-preparer-info",
      title: "Part 12: Preparer's Information",
      questions: [
        {
          id: "part12.preparerBusinessName",
          type: "text",
          label: "Preparer's Business or Organization Name",
        },
      ],
    },
    {
      id: "part12-preparer",
      title: "Part 12: Preparer's Information",
      questions: [
        {
          id: "part12.preparerFamilyName",
          type: "text",
          label: "1. Preparer's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part12.preparerGivenName",
          type: "text",
          label: "1.a. Preparer's Given Name (First Name)",
          required: true,
        },
        {
          id: "part12.preparerDaytimePhoneNumber",
          type: "tel",
          label: "3. Preparer's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part12.preparerEmail",
          type: "email",
          label: "5. Preparer's Email Address",
          required: false,
        },
        {
          id: "part12.preparerMobileNumber",
          type: "tel",
          label: "4. Preparer's Mobile Telephone Number",
          required: false,
        },
      ],
    },

    {
      id: "part14-additional",
      title: "Part 14: Additional Information",
      questions: [
        {
          id: "part14.alienNumber",
          type: "text",
          label: "Alien Number",
          required: false,
        },
        {
          id: "part14.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: false,
        },
        {
          id: "part14.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: false,
        },
        {
          id: "part14.middleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
      ],
    },
    {
      id: "part14-additionalInformation",
      title: "Part 14: Additional Information",
      questions: [
        {
          id: "part14.pageNumber",
          type: "text",
          label: "Page Number",
          required: false,
        },
        {
          id: "part14.partNumber",
          type: "text",
          label: "Part Number",
          required: false,
        },
        {
          id: "part8.itemNumber",
          type: "text",
          label: "Item Number",
          required: false,
        },
        {
          id: "part14.additionalInformation2AdditionalInfo",
          type: "text",
          label: "5. Additional Information",

          helpText:
            "Provide any additional information relevant to this section.",
        },
        {
          id: "part14.pageNumberDuplicate",
          type: "text",
          label: "Page Number (Duplicate)",
          required: false,
        },
        {
          id: "part14.partNumberDuplicate",
          type: "text",
          label: "Part Number (Duplicate)",
          required: false,
        },
        {
          id: "part14.additionalInformation3ItemNumber",
          type: "text",

          helpText: "Enter the item number for additional information.",
        },
        {
          id: "part14.additionalInformation3AdditionalInfo",
          type: "text",
          label: "2. Additional Information",

          helpText:
            "Provide any additional information relevant to this section.",
        },

        {
          id: "part14.additionalInformation4PageNumber",
          type: "text",
          label: "4.a. Page Number",

          helpText:
            "Enter the page number where additional information is located.",
        },
        {
          id: "part14.additionalInformation4PartNumber",
          type: "text",
          label: "4.b. Part Number",

          helpText: "Enter the part number for additional information.",
        },
        {
          id: "part14.additionalInformation4ItemNumber",
          type: "text",
          label: "4.c. Item Number",

          helpText: "Enter the item number for additional information.",
        },
        {
          id: "part14.additionalInformation4AdditionalInfo",
          type: "text",
          label: "4. Additional Information",

          helpText:
            "Provide any additional information relevant to this section.",
        },
        {
          id: "part14.additionalInformation5PageNumber",
          type: "text",
          label: "5.a. Page Number",

          helpText:
            "Enter the page number where additional information is located.",
        },
        {
          id: "part14.additionalInformation5PartNumber",
          type: "text",
          label: "5.b. Part Number",

          helpText: "Enter the part number for additional information.",
        },
        {
          id: "part14.additionalInformation5ItemNumber",
          type: "text",
          label: "5.c. Item Number",

          helpText: "Enter the item number for additional information.",
        },

        {
          id: "part14.additionalInformation5AdditionalInfo",
          type: "text",
          label: "5. Additional Information",

          helpText:
            "Provide any additional information relevant to this section.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_485_FIELD_MAPPINGS,
  requiredDocuments: [
    "Copy of birth certificate with certified English translation",
    "Copy of passport biographical pages",
    "Two passport-style photos",
    "Medical examination (Form I-693) in sealed envelope",
    "Copy of I-94 arrival/departure record",
    "Copy of approved immigrant petition (if applicable)",
    "Affidavit of Support (Form I-864) if required",
    "Evidence of lawful entry to the United States",
    "Marriage certificate (if applicable)",
    "Divorce/death certificates for prior marriages (if applicable)",
  ],
  instructions: [
    "Complete all applicable sections of this form",
    "Use black ink when completing by hand",
    "If you need more space, use Part 8 or attach additional sheets",
    "Submit required supporting documents with your application",
    "Pay the required filing fee",
    "Sign and date your application",
  ],
};
const I_765_DEFINITION: FormDefinition = {
  id: "i-765",
  code: "I-765",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "part2-full-legal-name",
      title: "Part 2: Your Full Legal Name",
      description:
        "Provide your current legal name as it appears on official documents.",
      questions: [
        {
          id: "part2.fullLegalName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.fullLegalName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.fullLegalName.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
      ],
    },
    {
      id: "part2-other-names-used",
      title: "Part 2: Other Names Used",
      description:
        "List any other names you have used, including maiden names.",
      questions: [
        {
          id: "part2.otherNamesUsed.familyName",
          type: "text",
          label: "2.a. Family Name (Last Name)",
        },
        {
          id: "part2.otherNamesUsed.givenName",
          type: "text",
          label: "2.b. Given Name (First Name)",
        },
        {
          id: "part2.otherNamesUsed.middleName",
          type: "text",
          label: "2.c. Middle Name",
        },
      ],
    },
    {
      id: "part2-us-mailing-address",
      title: "Part 2: U.S. Mailing Address",
      description:
        "Provide the address where you want USCIS to send your documents.",
      questions: [
        {
          id: "part2.usMailingAddress.sameAsPhysicalAddress",
          type: "radio",
          label:
            "5. Is your mailing address the same as your physical address?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.usMailingAddress.streetNumberName",
          type: "text",
          label: "5.a. Street Number and Name",
          required: true,
        },
        {
          id: "part2.usMailingAddress.unitType",
          type: "select",
          label: "5.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part2.usMailingAddress.aptSteFlrNumber",
          type: "text",
          label: "5.c. Unit Number",
        },
        {
          id: "part2.usMailingAddress.cityOrTown",
          type: "text",
          label: "5.d. City or Town",
          required: true,
        },
        {
          id: "part2.usMailingAddress.state",
          type: "select",
          label: "5.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.usMailingAddress.zipCode",
          type: "text",
          label: "5.f. ZIP Code",
          required: true,
        },
        {
          id: "part2.usMailingAddress.inCareOfName",
          type: "text",
          label: "5.g. In Care Of Name",
        },
      ],
    },
    {
      id: "part2-us-physical-address",
      title: "Part 2: U.S. Physical Address",
      description:
        "Provide your current physical address if different from your mailing address.",
      questions: [
        {
          id: "part2.usPhysicalAddress.streetNumberName",
          type: "text",
          label: "7.a. Street Number and Name",
          required: true,
        },
        {
          id: "part2.usPhysicalAddress.unitType",
          type: "select",
          label: "7.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part2.usPhysicalAddress.aptSteFlrNumber",
          type: "text",
          label: "7.c. Unit Number",
        },
        {
          id: "part2.usPhysicalAddress.cityOrTown",
          type: "text",
          label: "7.d. City or Town",
          required: true,
        },
        {
          id: "part2.usPhysicalAddress.state",
          type: "select",
          label: "7.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.usPhysicalAddress.zipCode",
          type: "text",
          label: "7.f. ZIP Code",
          required: true,
        },
      ],
    },
    {
      id: "part2-other-information",
      title: "Part 2: Other Information",
      description: "Provide additional personal information.",
      questions: [
        {
          id: "part2.otherInformation.consentForDisclosure",
          type: "radio",
          label: "14. Do you consent to disclosure of information?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.otherInformation.alienNumber",
          type: "text",
          label: "15. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number if you have one.",
        },
        {
          id: "part2.otherInformation.uscisOnlineAccountNumber",
          type: "text",
          label: "16. USCIS Online Account Number",
          helpText: "Enter your USCIS Online Account Number if you have one.",
        },
        {
          id: "part2.otherInformation.sex",
          type: "radio",
          label: "17. Sex",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        {
          id: "part2.otherInformation.maritalStatus",
          type: "select",
          label: "18. Marital Status",
          options: [
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ],
        },
        {
          id: "part2.otherInformation.previouslyFiledI765",
          type: "radio",
          label: "19. Have you previously filed Form I-765?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.otherInformation.fathersName.familyName",
          type: "text",
          label: "20.a. Father's Family Name (Last Name)",
        },
        {
          id: "part2.otherInformation.fathersName.givenName",
          type: "text",
          label: "20.b. Father's Given Name (First Name)",
        },
        {
          id: "part2.otherInformation.mothersName.familyName",
          type: "text",
          label: "21.a. Mother's Family Name (Last Name)",
        },
        {
          id: "part2.otherInformation.mothersName.givenName",
          type: "text",
          label: "21.b. Mother's Given Name (First Name)",
        },
        {
          id: "part2.countryOfCitizenshipOrNationality",
          type: "text",
          label: "22. Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part2.otherInformation.wantSSACard",
          type: "radio",
          label: "23. Do you want the SSA to issue you a Social Security card?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.otherInformation.ssn",
          type: "ssn",
          label: "24. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part2.otherInformation.ssaCardIssued",
          type: "radio",
          label: "25. Has the SSA ever issued you a Social Security card?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part2-last-arrival",
      title: "Part 2: Last Arrival in the United States",
      description:
        "Provide information about your most recent arrival in the United States.",
      questions: [
        {
          id: "part2.lastArrival.i94Number",
          type: "text",
          label: "26. I-94 Arrival-Departure Record Number",
          helpText: "Enter your I-94 number if applicable.",
        },
        {
          id: "part2.lastArrival.passportNumber",
          type: "text",
          label: "27. Passport Number",
        },
        {
          id: "part2.lastArrival.travelDocumentNumber",
          type: "text",
          label: "28. Travel Document Number",
        },
        {
          id: "part2.lastArrival.countryOfIssuance",
          type: "text",
          label: "29. Country of Issuance for Passport/Travel Document",
        },
        {
          id: "part2.lastArrival.expirationDate",
          type: "date",
          label: "30. Expiration Date for Passport/Travel Document",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.lastArrival.dateOfLastEntry",
          type: "date",
          label: "31. Date of Last Entry into the U.S.",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.lastArrival.placeOfLastArrival",
          type: "text",
          label: "32. Place of Last Arrival",
        },
        {
          id: "part2.lastArrival.statusLastEntry",
          type: "text",
          label: "33. Status at Last Entry",
        },
        {
          id: "part2.lastArrival.currentStatus",
          type: "text",
          label: "34. Current Immigration Status",
        },
        {
          id: "part2.lastArrival.sevisNumber",
          type: "text",
          label: "35. SEVIS Number (if applicable)",
        },
      ],
    },
    {
      id: "part2-eligibility-category",
      title: "Part 2: Eligibility Category",
      description:
        "Provide information about your eligibility category for employment authorization.",
      questions: [
        {
          id: "part2.eligibilityCategory.category",
          type: "text",
          label: "36. Eligibility Category",
          required: true,
          helpText:
            "Enter the code for your eligibility category (e.g., (c)(3)(C)).",
        },
        {
          id: "part2.eligibilityCategory.employerNameEverify",
          type: "text",
          label: "37. Employer's Name as Listed in E-Verify",
        },
        {
          id: "part2.eligibilityCategory.everifyIDNumber",
          type: "text",
          label: "38. Employer's E-Verify Company Identification Number",
        },
        {
          id: "part2.eligibilityCategory.c8ArrestedConvicted",
          type: "radio",
          label: "39. Have you ever been arrested or convicted of any crime?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.eligibilityCategory.c35c36ReceiptNumber",
          type: "text",
          label: "40. Receipt Number for Pending Form I-140 (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.c26ReceiptNumber",
          type: "text",
          label: "41. Receipt Number for Pending Form I-129 (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.degree",
          type: "text",
          label: "42. Degree (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.c35c36ArrestedConvicted",
          type: "radio",
          label: "43. Have you ever been arrested or convicted of any crime?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part2-place-of-birth",
      title: "Part 2: Place of Birth",
      description: "Provide information about your place of birth.",
      questions: [
        {
          id: "part2.placeOfBirth.cityTownOfBirth",
          type: "text",
          label: "44.a. City or Town of Birth",
        },
        {
          id: "part2.placeOfBirth.stateProvinceOfBirth",
          type: "text",
          label: "44.b. State or Province of Birth",
        },
        {
          id: "part2.placeOfBirth.countryOfBirth",
          type: "text",
          label: "44.c. Country of Birth",
          required: true,
        },
        {
          id: "part2.placeOfBirth.dateOfBirth",
          type: "date",
          label: "45. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
      ],
    },

    {
      id: "part1-reason-for-applying",
      title: "Part 1: Reason for Applying",
      description:
        "Select the reason you are applying for employment authorization.",
      questions: [
        {
          id: "part1.reasonForApplying",
          type: "radio",
          label: "I am applying for (select one):",
          required: true,
          options: [
            { value: "1", label: "1. Initial permission to accept employment" },
            {
              value: "2",
              label:
                "2. Replacement of lost, stolen, or damaged employment authorization document",
            },
            {
              value: "3",
              label:
                "3. Renewal of my permission to accept employment (attach a copy of your previous employment authorization document)",
            },
          ],
          helpText:
            "Choose the option that best describes your current situation. If renewing, ensure to attach a copy of your previous employment authorization document.",
        },
      ],
    },

    {
      id: "attorneyOrRepresentative",
      title: "Attorney or Accredited Representative",
      description:
        "Provide details about your attorney or accredited representative, if applicable.",
      questions: [
        {
          id: "attorneyOrRepresentative",
          type: "radio",
          label:
            "Is an attorney or accredited representative assisting you with this application?",
          required: true,
          options: [
            { value: "1", label: "Yes" },
            { value: "0", label: "No" },
          ],
          helpText:
            "Select 'Yes' if you have an attorney or accredited representative assisting you with this application.",
        },
        {
          id: "attorneyOrRepresentative.uscisOnlineNumber",
          type: "text",
          label: "USCIS Online Account Number (if any)",
          helpText:
            "Enter the USCIS Online Account Number of your attorney or representative, if applicable.",
        },
      ],
    },

    {
      id: "part3-applicant-statement",
      title: "Part 3: Applicant's Statement",
      description:
        "Provide information about the use of interpreters and preparers.",
      questions: [
        {
          id: "part3.applicantStatement.interpreterUsed",
          type: "radio",
          label: "1. Did you use an interpreter to complete this application?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText:
            "Select 'Yes' if someone helped you translate or interpret the form.",
        },
        {
          id: "part3.applicantStatement.languageFluent",
          type: "text",
          label: "1.b. If yes, specify the language:",
          helpText: "Enter the language in which you are fluent.",
        },
        {
          id: "part3.applicantStatement.preparerUsed",
          type: "radio",
          label: "2. Did you use a preparer to complete this application?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText: "Select 'Yes' if someone helped you fill out the form.",
        },
        {
          id: "part3.applicantStatement.preparerName",
          type: "text",
          label: "2.a. Preparer's Name",
          helpText:
            "Enter the full name of the person who prepared your application.",
        },
      ],
    },

    {
      id: "part3-contact-information",
      title: "Part 3: Contact Information",
      description: "Provide your contact details.",
      questions: [
        {
          id: "part3.contactInformation.daytimePhoneNumber",
          type: "tel",
          label: "3. Daytime Phone Number",
          required: true,
          placeholder: "(555) 123-4567",
          helpText:
            "Enter a phone number where you can be reached during the day.",
        },
        {
          id: "part3.contactInformation.mobileNumber",
          type: "tel",
          label: "4. Mobile Phone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Enter your mobile phone number, if different from your daytime number.",
        },
        {
          id: "part3.contactInformation.email",
          type: "email",
          label: "5. Email Address",
          placeholder: "example@email.com",
          helpText:
            "Provide an email address where you can receive correspondence.",
        },
        {
          id: "part3.contactInformation.abcSettlement",
          type: "radio",
          label: "6. Are you eligible for ABC Settlement benefits?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText:
            "Select 'Yes' if you are eligible for benefits under the ABC Settlement.",
        },
      ],
    },

    {
      id: "part4-interpreter-contact-information",
      title: "Part 4: Interpreter's Contact Information",
      description:
        "Provide the contact details of the interpreter assisting with this application.",
      questions: [
        {
          id: "part4.interpreterContactInformation.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.interpreterContactInformation.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.interpreterContactInformation.businessOrOrgName",
          type: "text",
          label: "2. Business or Organization Name",
          helpText:
            "Enter the name of the business or organization, if applicable.",
        },
        {
          id: "part4.interpreterContactInformation.daytimeTelephone",
          type: "tel",
          label: "4. Daytime Telephone Number",
          placeholder: "(555) 123-4567",
          required: true,
        },
        {
          id: "part4.interpretersMobileNumber",
          type: "tel",
          label: "5. Mobile Telephone Number",
          placeholder: "(555) 123-4567",
        },
        {
          id: "part4.interpretersEmailAddress",
          type: "email",
          label: "6. Email Address",
          placeholder: "example@email.com",
        },
        {
          id: "part4.languageInterpreterFluentIn",
          type: "text",
          label: "7. Language the Interpreter is Fluent In",
          required: true,
          helpText: "Specify the language(s) the interpreter is fluent in.",
        },
      ],
    },
    {
      id: "part4-interpreter-address",
      title: "Part 4: Interpreter's Mailing Address",
      description: "Provide the mailing address of the interpreter.",
      questions: [
        {
          id: "part4.interpretersStreetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
        },
        {
          id: "part4.interpretersUnit",
          type: "select",
          label: "3.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part4.interpreterUnit",
          type: "radio",
          label: "3.b. Unit Type",
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part4.interpretersAptSteFlrNumber",
          type: "text",
          label: "3.b. Unit Number",
        },
        {
          id: "part4.interpretersCityOrTown",
          type: "text",
          label: "3.c. City or Town",
          required: true,
        },
        {
          id: "part4.interpretersState",
          type: "select",
          label: "3.d. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part4.interpretersZipCode",
          type: "text",
          label: "3.e. ZIP Code",
          required: true,
        },
        {
          id: "part4.interpretersProvince",
          type: "text",
          label: "3.f. Province",
          helpText: "If applicable, provide the province.",
        },
        {
          id: "part4.interpretersPostalCode",
          type: "text",
          label: "3.g. Postal Code",
          helpText: "If applicable, provide the postal code.",
        },
        {
          id: "part4.interpretersCountry",
          type: "text",
          label: "3.h. Country",
          required: true,
        },
      ],
    },

    {
      id: "part5-preparer-info",
      title: "Part 5: Preparer's Information",
      description:
        "Provide details about the person who prepared this application, if applicable.",
      questions: [
        {
          id: "part5.preparersGivenName",
          type: "text",
          label: "1.b. Preparer's Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.preparersFamilyName",
          type: "text",
          label: "1.a. Preparer's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.preparersBusinessName",
          type: "text",
          label: "2. Preparer's Business or Organization Name",
        },
      ],
    },
    {
      id: "part5-preparer-address",
      title: "Part 5: Preparer's Mailing Address",
      description: "Enter the mailing address of the preparer.",
      questions: [
        {
          id: "part5.preparersStreetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
        },
        {
          id: "part5.preparersUnit",
          type: "select",
          label: "3.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part5.preparersAptSteFlrNumber",
          type: "text",
          label: "3.b. Unit Number",
        },
        {
          id: "part5.preparersCityOrTown",
          type: "text",
          label: "3.c. City or Town",
          required: true,
        },
        {
          id: "part5.preparersState",
          type: "select",
          label: "3.d. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part5.preparersZipCode",
          type: "text",
          label: "3.e. ZIP Code",
          required: true,
        },
        {
          id: "part5.preparersProvince",
          type: "text",
          label: "3.f. Province",
        },
        {
          id: "part5.preparersPostalCode",
          type: "text",
          label: "3.g. Postal Code",
        },
        {
          id: "part5.preparersCountry",
          type: "text",
          label: "3.h. Country",
          required: true,
        },
      ],
    },
    {
      id: "part5-preparer-contact",
      title: "Part 5: Preparer's Contact Information",
      description: "Provide the contact details of the preparer.",
      questions: [
        {
          id: "part5.preparersDaytimeTelephoneNumber",
          type: "tel",
          label: "4. Daytime Telephone Number",
          placeholder: "(555) 123-4567",
          required: true,
        },
        {
          id: "part5.preparersMobileTelephoneNumber",
          type: "tel",
          label: "5. Mobile Telephone Number",
          placeholder: "(555) 123-4567",
        },
        {
          id: "part5.preparersEmailAddress",
          type: "email",
          label: "6. Email Address",
          placeholder: "example@email.com",
        },
      ],
    },
    {
      id: "part5-preparer-statement",
      title: "Part 5: Preparer's Statement",
      description: "Indicate the preparer's role and representation.",
      questions: [
        {
          id: "part5.preparersStatement",
          type: "radio",
          label: "7. Preparer's Statement",
          required: true,
          options: [
            {
              value: "A",
              label:
                "A. I am not an attorney or accredited representative but have prepared this form on behalf of the applicant.",
            },
            {
              value: "B",
              label:
                "B. I am an attorney or accredited representative and my representation extends beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part5.preparersRepresentation",
          type: "radio",
          label: "7.b. Preparer's Representation",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText:
            "Indicate if the preparer is an attorney or accredited representative.",
        },
      ],
    },

    {
      id: "part6-additional-information",
      title: "Part 6: Additional Information",
      description:
        "Provide additional information as needed for any of the sections in this form.",
      questions: [
        {
          id: "part6.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part6.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part6.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part6.alienNumber",
          type: "text",
          label: "7. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number if you have one.",
        },
        {
          id: "part6.additionalInformationPageNumber",
          type: "text",
          label: "3.a. Page Number",
          helpText: "Enter the page number where the information appears.",
        },
        {
          id: "part6.additionalInformationPartNumber",
          type: "text",
          label: "3.b. Part Number",
          helpText: "Enter the part number where the information appears.",
        },
        {
          id: "part6.additionalInformationItemNumber",
          type: "text",
          label: "3.c. Item Number",
          helpText: "Enter the item number where the information appears.",
        },
        {
          id: "part6.additionalInformation",
          type: "textarea",
          label: "3.d. Additional Information",
          helpText:
            "Provide any additional information related to the sections in this form.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_765_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};
const N_400_DEFINITION: FormDefinition = {
  id: "n-400",
  code: "N-400",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "part1-eligibility",
      title: "Part 1: Eligibility Information",
      questions: [
        {
          id: "part1.eligibility",
          type: "radio",
          label:
            "1. I am applying for naturalization under the following provision:",
          required: true,
          options: [
            { value: "A", label: "General Provision (Section 316(a) INA)" },
            {
              value: "B",
              label: "Spouse of a U.S. Citizen (Section 319(a) INA)",
            },
            { value: "C", label: "VAWA Self-Petitioner (Section 319(a) INA)" },
            {
              value: "D",
              label:
                "Spouse of U.S. Citizen Employed Abroad (Section 319(b) INA)",
            },
            {
              value: "E",
              label: "Member of the U.S. Armed Forces (Section 328 or 329 INA)",
            },
            {
              value: "F",
              label: "Child of U.S. Citizen Parent(s) (Section 322 INA)",
            },
            { value: "G", label: "Other Reason for Filing Not Listed Above" },
          ],
        },
        {
          id: "part1.otherReasonForFiling",
          type: "text",
          label: "1.f. If Other, explain:",
          required: false,
          conditional: {
            dependsOn: "part1.eligibility",
            value: "G",
          },
        },
        {
          id: "part1.alienNumber",
          type: "text",
          label: "2. Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part1.fieldOfficeSelection",
          type: "text",
          label: "3. Field Office Selection",
          required: false,
        },
      ],
    },

    {
      id: "part2-personal-information",
      title: "Part 2: Personal Information",
      description: "Information About You (Person applying for naturalization)",
      questions: [
        {
          id: "part2.middleName",
          type: "text",
          label: "1.a. Middle Name",
          required: false,
        },
        {
          id: "part2.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.familyName",
          type: "text",
          label: "1.c. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.otherNamesUsedMiddleName2",
          type: "text",
          label: "2.a. Other Names Used - Middle Name 2",
          required: false,
        },
        {
          id: "part2.otherNamesUsedGivenName2",
          type: "text",
          label: "2.b. Other Names Used - Given Name 2",
          required: false,
        },
        {
          id: "part2.otherNamesUsedMiddleName1",
          type: "text",
          label: "2.c. Other Names Used - Middle Name 1",
          required: false,
        },
        {
          id: "part2.otherNamesUsedGivenName1",
          type: "text",
          label: "2.d. Other Names Used - Given Name 1",
          required: false,
        },
        {
          id: "part2.otherNamesUsedFamilyName1",
          type: "text",
          label: "2.e. Other Names Used - Family Name 1",
          required: false,
        },
        {
          id: "part2.otherNamesUsedFamilyName2",
          type: "text",
          label: "2.f. Other Names Used - Family Name 2",
          required: false,
        },
        {
          id: "part2.dateOfBirth",
          type: "date",
          label: "3. Date of Birth",
          required: true,
        },
        {
          id: "part2.gender",
          type: "radio",
          label: "4. Gender",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part2.uscisOnlineAccountNumber",
          type: "text",
          label: "5. USCIS Online Account Number",
          required: false,
        },
        {
          id: "part2.dateBecamePermanentResident",
          type: "date",
          label: "6. Date Became a Permanent Resident",
          required: true,
        },
      ],
    },
    {
      id: "part2-nationality",
      title: "Part 2: Nationality Information",
      questions: [
        {
          id: "part2.countryOfNationality",
          type: "text",
          label: "11. Country of Nationality",
          required: true,
        },
        {
          id: "part2.countryOfBirth",
          type: "text",
          label: "10. Country of Birth",
          required: true,
        },
      ],
    },
    {
      id: "part2-parent-us-citizen",
      title: "Part 2: Parent's Citizenship",
      questions: [
        {
          id: "part2.parentUsCitizen",
          type: "radio",
          label: "10. Is your parent a U.S. citizen?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part2-social-security",
      title: "Part 2: Social Security Information",
      questions: [
        {
          id: "part2.socialSecurityUpdate",
          type: "radio",
          label:
            "12.a. Do you want to update your Social Security information?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part2.socialSecurityNumber",
          type: "text",
          label: "12.b. Social Security Number",
          required: true,
        },
      ],
    },
    {
      id: "part2-consent-disclosure",
      title: "Part 2: Consent for Disclosure",
      questions: [
        {
          id: "part2.consentForDisclosure",
          type: "radio",
          label: "12.c. Do you consent to disclosure of your information?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part2-disability-claim",
      title: "Part 2: Disability Claim",
      questions: [
        {
          id: "part2.disabilityClaim",
          type: "radio",
          label: "11. Are you claiming a disability?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part2-name-information",
      title: "Part 2: Change Name Information",
      questions: [
        {
          id: "part2.nameChange",
          type: "radio",
          label: "34. Do you want to legally change your name?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part2.middleNameChange",
          type: "text",
          label: "4.a. Middle Name",
          required: false,
          conditional: {
            dependsOn: "part2.nameChange",
            value: "Y",
          },
        },
        {
          id: "part2.givenNameChange",
          type: "text",
          label: "4.a. Given Name (First Name)",
          required: true,
          conditional: {
            dependsOn: "part2.nameChange",
            value: "Y",
          },
        },

        {
          id: "part2.familyNameChange",
          type: "text",
          label: "3. Family Name (Last Name)",
          required: true,
          conditional: {
            dependsOn: "part2.nameChange",
            value: "Y",
          },
        },
      ],
    },

    {
      id: "part4-race-ethnicity",
      title: "Part 4: Race and Ethnicity",
      questions: [
        {
          id: "part4.race",
          type: "select",
          label: "Race (Select all that apply)",
          required: false,
          options: [
            { value: "0", label: "American Indian or Alaska Native" },
            { value: "1", label: "Asian" },
            { value: "2", label: "Black or African American" },
            { value: "4", label: "White" },
          ],
        },
        {
          id: "part4.ethnicity",
          type: "radio",
          label: "Ethnicity",
          required: true,
          options: [
            { value: "N", label: "Not Hispanic or Latino" },
            { value: "Y", label: "Hispanic or Latino" },
          ],
        },
      ],
    },

    {
      id: "part4-physical-characteristics",
      title: "Part 4: Physical Characteristics",
      questions: [
        {
          id: "part4.heightFeet",
          type: "select",
          label: "3. Height - Feet",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
          helpText: "Select your height in feet.",
        },
        {
          id: "part4.heightInches",
          type: "select",
          label: "3. Height - Inches",
          required: true,
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
        {
          id: "part4.weightPoundsFirstDigit",
          type: "text",
          label: "3. Weight (Pounds) - First Digit",
          required: true,
        },
        {
          id: "part4.weightSecondDigit",
          type: "text",
          label: "Weight (Second Digit)",
          required: false,
        },
        {
          id: "part4.weightPoundsThirdDigit",
          type: "button",
          label: "4. Weight (Pounds) - Third Digit",
          required: true,
        },
        {
          id: "part4.eyeColor",
          type: "radio",
          label: "5. Eye Color",
          required: true,
          options: [
            { value: "BRO", label: "Brown" },
            { value: "BLU", label: "Blue" },
            { value: "GRN", label: "Green" },
            { value: "HAZ", label: "Hazel" },
            { value: "GRY", label: "Gray" },
            { value: "BLK", label: "Black" },
            { value: "PNK", label: "Pink" },
            { value: "MAR", label: "Maroon" },
            { value: "XXX", label: "Other" },
          ],
        },
        {
          id: "part4.hairColor",
          type: "radio",
          label: "6. Hair Color",
          required: true,
          options: [
            { value: "BAL", label: "Bald" },
            { value: "SDY", label: "Sandy" },
            { value: "RED", label: "Red" },
            { value: "WHI", label: "White" },
            { value: "GRY", label: "Gray" },
            { value: "BLN", label: "Blonde" },
            { value: "BRO", label: "Brown" },
            { value: "BLK", label: "Black" },
          ],
        },
      ],
    },
    {
      id: "part3-physical-address",
      title: "Part 3: Physical Address",
      description:
        "List every location where you have lived during the last 5 years",
      questions: [
        {
          id: "part3.physicalAddressLine1",
          type: "text",
          label: "1.a. Physical Address - Line 1",
          required: true,
        },
        {
          id: "part3.physicalAddressLine2",
          type: "text",
          label: "1.b. Physical Address - Line 2",
          required: false,
        },
        {
          id: "part3.physicalAddressLine3",
          type: "text",
          label: "1.c. Physical Address - Line 3",
          required: false,
        },
      ],
    },
    {
      id: "part3-physical-addresses",
      title: "Part 3: Physical Addresses",
      questions: [
        {
          id: "part3.physicalAddresses.line1.cityTown",
          type: "text",
          label: "1. City or Town (Line 1)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line1.toDate",
          type: "date",
          label: "2. To Date (Line 1)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line1.fromDate",
          type: "date",
          label: "2. From Date (Line 1)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line1.zipCode",
          type: "text",
          label: "3. ZIP Code (Line 1)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line1.state",
          type: "select",
          label: "4. State (Line 1)",
          required: true,
          options: US_STATES,
        },
        {
          id: "part3.physicalAddresses.line1.country",
          type: "text",
          label: "5. Country (Line 1)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line2.cityTown",
          type: "text",
          label: "6. City or Town (Line 2)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line2.fromDate",
          type: "date",
          label: "7. From Date (Line 2)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line2.toDate",
          type: "date",
          label: "8. To Date (Line 2)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line2.zipCode",
          type: "text",
          label: "9. ZIP Code (Line 2)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line2.state",
          type: "select",
          label: "10. State (Line 2)",
          required: true,
          options: US_STATES,
        },
        {
          id: "part3.physicalAddresses.line2.country",
          type: "text",
          label: "11. Country (Line 2)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line3.cityTown",
          type: "text",
          label: "12. City or Town (Line 3)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line3.fromDate",
          type: "date",
          label: "13. From Date (Line 3)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line3.toDate",
          type: "date",
          label: "14. To Date (Line 3)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line3.zipCode",
          type: "text",
          label: "15. ZIP Code (Line 3)",
          required: true,
        },
        {
          id: "part3.physicalAddresses.line3.state",

          label: "16. State (Line 3)",

          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part3.physicalAddresses.line3.country",
          type: "text",
          label: "17. Country (Line 3)",
          required: true,
        },
        {
          id: "part3.currentPhysicalAddressMailingAddress",
          type: "radio",
          label:
            "18. Is your current physical address also your mailing address?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    // {
    //   id: "part3-current-mailing-address",
    //   title: "Part 3: Current Mailing Address",
    //   questions: [

    // ],/
    // },
    {
      id: "part3-current-mailing-address",
      title: "Part 3: Current Mailing Address",
      questions: [
        {
          id: "part3.currentMailingAddress.inCareOfName",
          type: "text",
          label: "In Care Of Name",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.apartmentSuiteFloorNumber",
          type: "text",
          label: "Apartment, Suite, or Floor Number",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.unit",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "FLR", label: "Floor" },
            { value: "Off", label: "Office" },
            { value: "STE", label: "Suite" },
          ],
        },
        {
          id: "part3.currentMailingAddress.streetNumberAndName",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.city",
          type: "text",
          label: "19. City",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.state",
          type: "text",
          label: "20. State",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.zipCode",
          type: "text",
          label: "21. ZIP Code",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.postalCode",
          type: "text",
          label: "22. Postal Code",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.province",
          type: "text",
          label: "23. Province",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.streetName",
          type: "text",
          label: "24. Street Name",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.state",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part3.currentMailingAddress.zipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.postalCode",
          type: "text",
          label: "Postal Code",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.provinceOrRegion",
          type: "text",
          label: "Province or Region",
          required: false,
        },
        {
          id: "part3.currentMailingAddress.country",
          type: "text",
          label: "Country",
          required: true,
        },
      ],
    },
    {
      id: "part3-dates-of-residence",
      title: "Part 3: Dates of Residence",
      questions: [
        {
          id: "part3.datesOfResidence",
          type: "date",
          label: "Dates of Residence",
          required: false,
        },
      ],
    },

    {
      id: "page2-alien-registration-number",
      title: "Page 2: Alien Registration Number",
      questions: [
        {
          id: "page2.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part7-marital-status",
      title: "Part 7: Marital Status",
      questions: [
        {
          id: "part7.maritalStatus",
          type: "radio",
          label: "1. Marital Status",
          required: true,
          options: [
            { value: "W", label: "Widowed" },
            { value: "M", label: "Married" },
            { value: "A", label: "Annulled" },
            { value: "E", label: "Divorced" },
          ],
        },
        {
          id: "part7.spouseArmedForces",
          type: "radio",
          label: "2. Is your spouse in the U.S. Armed Forces?",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part7.currentSpouseMiddleName",
          type: "text",
          label: "4.a. Current Spouse's Middle Name",
          required: false,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.currentSpouseGivenName",
          type: "text",
          label: "4.a. Current Spouse's Given Name (First Name)",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.currentSpouseFamilyName",
          type: "text",
          label: "4.a. Current Spouse's Family Name (Last Name)",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.currentSpouseDateOfBirth",
          type: "date",
          label: "4.d. Current Spouse's Date of Birth",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.dateEnteredMarriage",
          type: "date",
          label: "4.e. Date You Entered into Marriage",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.spouseEmployer",
          type: "text",
          label: "Spouse's Employer",
          required: false,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.spouseCitizenDate",
          type: "date",
          label: "5.b. Date Spouse Became a U.S. Citizen",
          required: false,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
        {
          id: "part7.spouseCitizenBy",
          type: "radio",
          label: "5.a. How did your spouse become a U.S. Citizen?",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },

          options: [
            { value: "B", label: "By Birth" },
            { value: "O", label: "Other" },
          ],
        },
        {
          id: "part7.spouseAlienNumber",
          type: "text",
          label: "Spouse's Alien Registration Number (A-Number)",
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
          required: false,
        },
        {
          id: "part7.spouseMarriagesCount",
          type: "text",
          label: "Number of Times Your Spouse Has Been Married",
          required: true,
          conditional: { dependsOn: "part7.maritalStatus", value: "M" },
        },
      ],
    },

    {
      id: "page5-alien-number",
      title: "Page 5: Alien Number",
      questions: [
        {
          id: "page5.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },

    {
      id: "part8-total-children",
      title: "Part 8: Total Children",
      questions: [
        {
          id: "part8.totalChildren",
          type: "text",
          label: "Total Number of Children",
          required: true,
        },
      ],
    },
    {
      id: "part6-children-info",
      title: "Part 6: Children Information",
      questions: [
        {
          id: "part6.child1Name",
          type: "text",
          label: "Child 1 Name",
          required: false,
        },
        {
          id: "part6.child2Name",
          type: "text",
          label: "Child 2 Name",
          required: false,
        },
        {
          id: "part6.child3Name",
          type: "text",
          label: "Child 3 Name",
          required: false,
        },
        {
          id: "part6.child1DateOfBirth",
          type: "date",
          label: "Child 1 Date of Birth",
          required: false,
        },
        {
          id: "part6.child2DateOfBirth",
          type: "date",
          label: "Child 2 Date of Birth",
          required: true,
        },
        {
          id: "part6.child3DateOfBirth",
          type: "date",
          label: "Child 3 Date of Birth",
          required: true,
        },
        {
          id: "part6.child1Residence",
          type: "text",
          label: "Child 1 Residence",
          required: true,
        },
        {
          id: "part6.child2Residence",
          type: "text",
          label: "Child 2 Residence",
          required: true,
        },
        {
          id: "part6.child3Residence",
          type: "text",
          label: "Child 3 Residence",
          required: true,
        },
        {
          id: "part6.child1Relationship",
          type: "text",
          label: "Child 1 Relationship",
          required: true,
        },
        {
          id: "part6.child2Relationship",
          type: "text",
          label: "Child 2 Relationship",
          required: true,
        },
        {
          id: "part6.child3Relationship",
          type: "text",
          label: "Child 3 Relationship",
          required: true,
        },
        {
          id: "part6.child1Support",
          type: "radio",
          label: "Do you support Child 1?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part6.child2Support",
          type: "radio",
          label: "Do you support Child 2?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part6.child3Support",
          type: "radio",
          label: "Do you support Child 3?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },

    {
      id: "part5-employment-history",
      title: "Part 5: Employment History",
      description:
        "List where you have worked or attended school full time or part time during the last 5 years",
      questions: [
        {
          id: "part5.employer1Name",
          type: "text",
          label: "Employer 1 Name",
        },
        {
          id: "part5.employer2Name",
          type: "text",
          label: "Employer 2 Name",
        },
        {
          id: "part5.employer3Name",
          type: "text",
          label: "Employer 3 Name",
        },
        {
          id: "part5.employer3City",
          type: "text",
          label: "Employer 3 City",
        },
        {
          id: "part5.employer2City",
          type: "text",
          label: "Employer 2 City",
        },
        {
          id: "part5.employer1City",
          type: "text",
          label: "Employer 1 City",
        },
        {
          id: "part5.employment1FromDate",
          type: "date",
          label: "Employment 1 From Date",
        },
        {
          id: "part5.employment2FromDate",
          type: "date",
          label: "Employment 2 From Date",
        },
        {
          id: "part5.employment3FromDate",
          type: "date",
          label: "Employment 3 From Date",
        },
        {
          id: "part5.employment2ToDate",
          type: "date",
          label: "Employment 2 To Date",
        },
        {
          id: "part5.employment3ToDate",
          type: "date",
          label: "Employment 3 To Date",
        },
        {
          id: "part5.occupationFieldStudy1",
          type: "text",
          label: "1. Occupation or Field of Study (1)",
        },
        {
          id: "part5.occupationFieldStudy2",
          type: "text",
          label: "2. Occupation or Field of Study (2)",
        },
        {
          id: "part5.occupationFieldStudy3",
          type: "text",
          label: "3. Occupation or Field of Study (3)",
        },
        {
          id: "part5.employerState1",
          type: "select",
          label: "4. Employer State (1)",
          options: US_STATES,
        },
        {
          id: "part5.employerState2",
          type: "select",
          label: "5. Employer State (2)",
          options: US_STATES,
        },

        {
          id: "part5.employerState3",
          type: "select",
          label: "6. Employer State (3)",
          options: US_STATES,
        },
        {
          id: "part5.employerZipCode1",
          type: "text",
          label: "7. Employer Zip Code (1)",
        },
        {
          id: "part5.employerZipCode2",
          type: "text",
          label: "8. Employer Zip Code (2)",
        },
        {
          id: "part5.employerZipCode3",
          type: "text",
          label: "9. Employer Zip Code (3)",
        },
        {
          id: "part5.country1",
          type: "text",
          label: "10. Country (1)",
        },
        {
          id: "part5.country2",
          type: "text",
          label: "11. Country (2)",
        },
        {
          id: "part5.country3",
          type: "text",
          label: "12. Country (3)",
        },
      ],
    },

    {
      id: "part6-travel-history",
      title: "Part 6: Travel History",
      description:
        "List below all the trips that you have taken outside the United States during the last 5 years",
      questions: [
        {
          id: "part6.trip1DateReturn",
          type: "date",
          label: "1. Date of Return from Trip (1)",
          required: true,
        },
        {
          id: "part6.tripOneDateLeft",
          type: "date",
          label: "Date Left for First Trip",
          required: true,
        },
        {
          id: "part6.tripTwoDateLeft",
          type: "date",
          label: "Date Left for Second Trip",
          required: true,
        },

        {
          id: "part6.tripTwoDateReturned",
          type: "date",
          label: "Date Returned from Second Trip",
          required: true,
        },

        {
          id: "part6.trip3DateReturn",
          type: "date",
          label: "2. Date of Return from Trip (3)",
          required: true,
        },
        {
          id: "part6.trip3DateLeft",
          type: "date",
          label: "12. Date Left for Trip (3)",
          required: true,
        },
        {
          id: "part6.trip4DateReturn",
          type: "date",
          label: "11. Date of Return from Trip (4)",
          required: true,
        },
        {
          id: "part6.trip4DateLeft",
          type: "date",
          label: "10. Date Left for Trip (4)",
          required: true,
        },
        {
          id: "part6.trip5DateReturn",
          type: "date",
          label: "3. Date of Return from Trip (5)",
          required: true,
        },

        {
          id: "part6.trip5DateLeft",
          type: "date",
          label: "7. Date Left for Trip (5)",
          required: true,
        },
        {
          id: "part6.trip6DateReturn",
          type: "date",
          label: "6. Date of Return from Trip (6)",
          required: true,
        },
        {
          id: "part6.trip6DateLeft",
          type: "date",
          label: "5. Date Left for Trip (6)",
          required: true,
        },

        {
          id: "part6.trip6Countries",
          type: "text",
          label: "4. Countries Visited on Trip (6)",
          required: true,
        },

        {
          id: "part6.trip5Countries",
          type: "text",
          label: "8. Countries Visited on Trip (5)",
          required: true,
        },
        {
          id: "part6.trip4Countries",
          type: "text",
          label: "9. Countries Visited on Trip (4)",
          required: true,
        },

        {
          id: "part6.trip3Countries",
          type: "text",
          label: "13. Countries Visited on Trip (3)",
          required: true,
        },
        {
          id: "part6.tripTwoCountriesTraveled",
          type: "text",
          label: "Countries Traveled During Second Trip",
          required: true,
        },

        {
          id: "part6.tripOneCountriesTraveled",
          type: "text",
          label: "Countries Traveled During First Trip",
          required: true,
        },
      ],
    },

    {
      id: "page5-alien-registration",
      title: "Page 5: Alien Registration",
      questions: [
        {
          id: "page5.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
      ],
    },
    {
      id: "part9-voting-and-citizenship",
      title: "Part 9: Voting and Citizenship",
      questions: [
        {
          id: "part9.registeredToVote",
          type: "radio",
          label:
            "Have you ever registered to vote in any Federal, state, or local election in the United States?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.claimedUSCitizen",
          type: "radio",
          label:
            "Have you ever claimed to be a U.S. citizen (in writing or any other way)?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.oweOverdueTaxes",
          type: "radio",
          label: "Do you owe any overdue Federal, state, or local taxes?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.calledNonUSResident",
          type: "radio",
          label:
            "Have you ever called yourself a 'non-U.S. resident' on a Federal, state, or local tax return?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.communistPartyMember",
          type: "radio",
          label:
            "Have you ever been a member of, or in any way affiliated with, the Communist Party?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.groupOppositionToGovernment",
          type: "radio",
          label:
            "Have you ever been a member of any group or organization that advocates the overthrow of any government by force or violence?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.groupUsedWeapon",
          type: "radio",
          label:
            "Have you ever been a member of any group or organization that used weapons against any person or government?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.groupEngagedInKidnapping",
          type: "radio",
          label:
            "Have you ever been a member of any group or organization that engaged in kidnapping?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.groupThreatenedActs",
          type: "radio",
          label:
            "Have you ever been a member of any group or organization that threatened to commit any acts of violence?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.participatedInTorture",
          type: "radio",
          label: "Have you ever participated in torture?",
          required: true,
          options: [{ value: "N", label: "No" }],
        },
      ],
    },
    {
      id: "part9-torture",
      title: "Part 9: Torture and Genocide",
      questions: [
        {
          id: "part9.torture",
          type: "radio",
          label:
            "7.a. Have you ever committed, assisted in committing, or attempted to commit torture?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.genocide",
          type: "radio",
          label:
            "7.b. Have you ever committed, assisted in committing, or attempted to commit genocide?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.killing",
          type: "radio",
          label: "7.c. Have you ever killed, or attempted to kill, someone?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.sexualContact",
          type: "radio",
          label:
            "7.e. Have you ever forced, or attempted to force, someone to have any kind of sexual contact or relations?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.religion",
          type: "radio",
          label:
            "7.f. Have you ever persecuted, either directly or indirectly, any person because of race, religion, national origin, membership in a particular social group, or political opinion?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.harm",
          type: "radio",
          label:
            "7.g. Have you ever intentionally inflicted severe harm on another person?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.injury",
          type: "radio",
          label: "7.d. Have you ever caused serious injury to another person?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part9.armedGroup",
          type: "radio",
          label:
            "8.a. Have you ever been a member of, or in any way associated (either directly or indirectly) with a group or organization that used a weapon against any person or threatened to do so?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.detained",
          type: "radio",
          label:
            "9. Have you ever been detained, cited, or arrested for any reason?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.weaponUse",
          type: "radio",
          label: "Have you ever used a weapon against another person?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
        {
          id: "part9.weaponThreat",
          type: "radio",
          label:
            "Have you ever threatened to use a weapon against another person?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part9.groupWeapon",
          type: "radio",
          label: "Have you ever been part of a group that used weapons?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-armed-group-participation",
      title: "Part 9: Armed Group Participation",
      questions: [
        {
          id: "part9.armedGroupParticipation",
          type: "radio",
          label:
            "8.b. Have you ever been a member of, or in any way associated (either directly or indirectly) with a group or organization that used weapons?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },

            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part9-weapons-transport",
      title: "Part 9: Weapons Transport",
      questions: [
        {
          id: "part9.weaponsTransport",
          type: "radio",
          label: "11. Have you ever transported weapons?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-weapons-training",
      title: "Part 9: Weapons Training",
      questions: [
        {
          id: "part9.weaponsTraining",
          type: "radio",
          label: "12. Have you ever received any type of weapons training?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-recruitment-of-minors",
      title: "Part 9: Recruitment of Minors",
      questions: [
        {
          id: "part9.recruitmentOfMinors",
          type: "radio",
          label: "13. Have you ever recruited or used child soldiers?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-use-of-minors-in-hostilities",
      title: "Part 9: Use of Minors in Hostilities",
      questions: [
        {
          id: "part9.useOfMinorsInHostilities",
          type: "radio",
          label: "14. Have you ever used minors in hostilities?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-alien-number",
      title: "Part 9: Alien Number",
      questions: [
        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Number",
          required: true,
        },
      ],
    },
    {
      id: "part9-unarrested-crimes",
      title: "Part 9: Unarrested Crimes",
      questions: [
        {
          id: "part9.unarrestedCrimes",
          type: "radio",
          label:
            "15.a. Have you ever committed a crime or offense for which you were not arrested?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-arrest-history",
      title: "Part 9: Arrest History",
      questions: [
        {
          id: "part9.arrestHistory",
          type: "radio",
          label:
            "15.b. Have you ever been arrested, cited, or detained by any law enforcement officer?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-crime-or-offense",
      title: "Part 9: Crime or Offense Details",
      questions: [
        {
          id: "part9.crimeOrOffense1",
          type: "text",
          label: "Crime or Offense 1",
          required: false,
        },
        {
          id: "part9.crimeOrOffense2",
          type: "text",
          label: "Crime or Offense 2",
          required: false,
        },
        {
          id: "part9.crimeOrOffense3",
          type: "text",
          label: "Crime or Offense 3",
          required: false,
        },
        {
          id: "part9.crimeOrOffense4",
          type: "text",
          label: "Crime or Offense 4",
          required: false,
        },
        {
          id: "part9.crimeOrOffense5",
          type: "text",
          label: "Crime or Offense 5",
          required: false,
        },
      ],
    },
    {
      id: "part9-crime-dates",
      title: "Part 9: Crime Dates",
      questions: [
        {
          id: "part9.crimeDate1",
          type: "date",
          label: "Crime Date 1",
          required: false,
        },
        {
          id: "part9.crimeDate2",
          type: "date",
          label: "Crime Date 2",
          required: false,
        },
        {
          id: "part9.crimeDate3",
          type: "date",
          label: "Crime Date 3",
          required: false,
        },
        {
          id: "part9.crimeDate4",
          type: "date",
          label: "Crime Date 4",
          required: false,
        },
        {
          id: "part9.crimeDate5",
          type: "date",
          label: "Crime Date 5",
          required: false,
        },
      ],
    },
    {
      id: "part9-crime-outcome",
      title: "Part 9: Crime Outcome",
      questions: [
        {
          id: "part9.crimeOutcome5",
          type: "text",
          label: "Outcome of Crime 5",
          required: false,
        },
      ],
    },
    {
      id: "part9-crime-outcomes",
      title: "Part 9: Crime Outcomes",
      questions: [
        {
          id: "part9.crimeOutcomeLine4",
          type: "text",
          label: "Crime Outcome Line 4",
          required: false,
        },
        {
          id: "part9.crimeOutcomeLine3",
          type: "text",
          label: "Crime Outcome Line 3",
          required: false,
        },
        {
          id: "part9.crimeOutcomeLine2",
          type: "text",
          label: "Crime Outcome Line 2",
          required: false,
        },
        {
          id: "part9.crimeOutcomeLine1",
          type: "text",
          label: "Crime Outcome Line 1",
          required: false,
        },
        {
          id: "part9.placeOfCrimeLine5",
          type: "text",
          label: "Place of Crime Line 5",
          required: false,
        },
        {
          id: "part9.placeOfCrimeLine4",
          type: "text",
          label: "Place of Crime Line 4",
          required: false,
        },
        {
          id: "part9.placeOfCrimeLine3",
          type: "text",
          label: "Place of Crime Line 3",
          required: false,
        },
        {
          id: "part9.placeOfCrimeLine2",
          type: "text",
          label: "Place of Crime Line 2",
          required: false,
        },
        {
          id: "part9.placeOfCrimeLine1",
          type: "text",
          label: "Place of Crime Line 1",
          required: false,
        },
        {
          id: "part9.sentenceLine5",
          type: "text",
          label: "Sentence Line 5",
          required: false,
        },
        {
          id: "part9.sentenceLine4",
          type: "text",
          label: "Sentence Line 4",
          required: false,
        },
        {
          id: "part9.sentenceLine3",
          type: "text",
          label: "Sentence Line 3",
          required: false,
        },
        {
          id: "part9.sentenceLine2",
          type: "text",
          label: "Sentence Line 2",
          required: false,
        },
        {
          id: "part9.sentenceLine1",
          type: "text",
          label: "Sentence Line 1",
          required: false,
        },
        {
          id: "part9.dateOfConvictionLine5",
          type: "text",
          label: "Date of Conviction Line 5",
          required: false,
        },
        {
          id: "part9.dateOfConvictionLine4",
          type: "text",
          label: "Date of Conviction Line 4",
          required: false,
        },
        {
          id: "part9.dateOfConvictionLine3",
          type: "text",
          label: "Date of Conviction Line 3",
          required: false,
        },
        {
          id: "part9.dateOfConvictionLine2",
          type: "text",
          label: "Date of Conviction Line 2",
          required: false,
        },
        {
          id: "part9.dateOfConvictionLine1",
          type: "text",
          label: "Date of Conviction Line 1",
          required: false,
        },
        {
          id: "part9.completedSentence",
          type: "radio",
          label: "Have you completed your sentence?",
          required: false,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.engagedInProstitution",
          type: "radio",
          label: "Have you ever engaged in prostitution?",
          required: false,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.drugTrafficking",
          type: "radio",
          label: "Have you ever been involved in drug trafficking?",
          required: false,
          options: [{ value: "N", label: "No" }],
        },
      ],
    },
    {
      id: "part12-alien-number",
      title: "Part 12: Alien Number",
      questions: [
        {
          id: "part12.alienNumber",
          type: "text",
          label: "Alien Number",
          required: true,
        },
      ],
    },
    {
      id: "part9-controlled-substances",
      title: "Part 9: Controlled Substances",
      questions: [
        {
          id: "part9.manufacturedControlledSubstances",
          type: "radio",
          label:
            "Have you ever manufactured, sold, or distributed controlled substances?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part9-marriage",
      title: "Part 9: Marriage Information",
      questions: [
        {
          id: "part9.marriedMultiplePersons",
          type: "radio",
          label:
            "Have you ever been married to more than one person at the same time?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.marriedForImmigrationBenefit",
          type: "radio",
          label:
            "Have you ever married someone to obtain an immigration benefit?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-illegal-entry",
      title: "Part 9: Illegal Entry",
      questions: [
        {
          id: "part9.helpedIllegalEntry",
          type: "radio",
          label:
            "Have you ever helped anyone enter or try to enter the United States illegally?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-misrepresentation",
      title: "Part 9: Misrepresentation",
      questions: [
        {
          id: "part9.misrepresentationForBenefit",
          type: "radio",
          label: "Have you ever lied to obtain a public benefit?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-support-dependents",
      title: "Part 9: Support for Dependents",
      questions: [
        {
          id: "part9.failedToSupportDependents",
          type: "radio",
          label: "Have you ever failed to support your dependents?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-gambling",
      title: "Part 9: Gambling",
      questions: [
        {
          id: "part9.illegalGambling",
          type: "radio",
          label: "Have you ever been involved in illegal gambling?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part9-removal",
      title: "Part 9: Removal and Deportation",
      questions: [
        {
          id: "part9.removedOrDeported",
          type: "radio",
          label:
            "Have you ever been removed or deported from the United States?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.removalProceedings",
          type: "radio",
          label: "Are you currently in removal proceedings?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-military-service-2",
      title: "Part 9: Military Service",
      questions: [
        {
          id: "part9.maleLivedInUS",
          type: "radio",
          label:
            "If you are male, have you lived in the United States between your 18th and 26th birthdays?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.registrationDate",
          type: "date",
          label: "Date of Registration for Selective Service",
          required: false,
        },
        {
          id: "part9.selectiveServiceNumber",
          type: "text",
          label: "Selective Service Number",
          required: false,
        },
        {
          id: "part9.registeredForSelectiveService",
          type: "radio",
          label: "Have you registered for Selective Service?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-lying",
      title: "Part 9: Lying to Officials",
      questions: [
        {
          id: "part9.liedToUSOfficials",
          type: "radio",
          label: "Have you ever lied to any U.S. government officials?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part9-military-service-3",
      title: "Part 9: Military Service",
      questions: [
        {
          id: "part9.falseInformation",
          type: "radio",
          label:
            "Have you ever given false information to avoid military service?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.avoidDraft",
          type: "radio",
          label: "Have you ever avoided the draft?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.exemptionFromMilitary",
          type: "radio",
          label: "Have you ever claimed exemption from military service?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.servedInMilitary",
          type: "radio",
          label: "Have you ever served in the military?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.alienNumber",
          type: "text",
          label: "Alien Registration Number",
          required: true,
        },
        {
          id: "part9.currentMilitaryMember",
          type: "radio",
          label: "Are you currently a member of the military?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.scheduledToDeploy",
          type: "radio",
          label: "Are you scheduled to deploy overseas?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.stationedOutsideUS",
          type: "radio",
          label: "Are you stationed outside the United States?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part12.stationedOverseas",
          type: "radio",
          label: "Are you stationed overseas?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.courtMartialed",
          type: "radio",
          label: "Have you ever been court-martialed?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.dischargedAsAlien",
          type: "radio",
          label: "Have you ever been discharged as an alien?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.desertedMilitary",
          type: "radio",
          label: "Have you ever deserted the military?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.hereditaryTitle",
          type: "radio",
          label: "Do you hold any hereditary titles?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part9-oath-of-allegiance",
      title: "Part 9: Oath of Allegiance",
      questions: [
        {
          id: "part9.willingToGiveUpTitles",
          type: "radio",
          label: "1. Are you willing to give up any titles of nobility?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.supportConstitution",
          type: "radio",
          label: "2. Do you support the Constitution of the United States?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.understandOath",
          type: "radio",
          label: "3. Do you understand the Oath of Allegiance?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.willingToBearArms",
          type: "radio",
          label:
            "4. Are you willing to bear arms on behalf of the United States?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.willingToPerformNoncombatant",
          type: "radio",
          label:
            "5. Are you willing to perform noncombatant service in the U.S. Armed Forces?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.willingToTakeOath",
          type: "radio",
          label: "6. Are you willing to take the full Oath of Allegiance?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
        {
          id: "part9.willingToPerformWork",
          type: "radio",
          label:
            "7. Are you willing to perform work of national importance under civilian direction?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part9.unableToTakeOath",
          type: "radio",
          label: "8. Are you unable to take the Oath of Allegiance?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part10-contact-information",
      title: "Part 10: Contact Information",
      questions: [
        {
          id: "part10.daytimeTelephone",
          type: "tel",
          label: "1. Daytime Telephone Number",
          required: true,
        },
        {
          id: "part10.mobileTelephone",
          type: "tel",
          label: "2. Mobile Telephone Number",
          required: false,
        },
        {
          id: "part10.email",
          type: "email",
          label: "3. Email Address",
          required: false,
        },
      ],
    },

    {
      id: "part8-family-information",
      title: "Part 8: Family Information",
      questions: [
        {
          id: "part8.totalChildren",
          type: "text",
          label: "1. Total Number of Children",
          required: true,
        },
      ],
    },
    {
      id: "part8-children",
      title: "Part 8: Information About Your Children",
      questions: [
        {
          id: "part8.totalNumberOfChildren",
          type: "text",
          label: "1. Total Number of Children",
          required: true,
        },
      ],
    },
    {
      id: "part7-spouse-address",
      title: "Part 7: Information About Your Spouse",
      questions: [
        {
          id: "part7.currentSpouseAddressSame",
          type: "radio",
          label: "1. Is your current spouse's address the same as yours?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part9-constitution-support",
      title: "Part 9: Support for the Constitution",
      questions: [
        {
          id: "part9.supportConstitution",
          type: "radio",
          label: "1. Do you support the Constitution of the United States?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "page15-alien-registration",
      title: "Page 15: Alien Registration Number",
      questions: [
        {
          id: "page15.alienRegistrationNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },
    {
      id: "part11-interpreter-info",
      title: "Part 11: Interpreter's Information",
      questions: [
        {
          id: "part11.interpreterBusinessName",
          type: "text",
          label: "1. Interpreter's Business Name",
          required: false,
        },
        {
          id: "part11.interpreterGivenName",
          type: "text",
          label: "2. Interpreter's Given Name",
          required: true,
        },
        {
          id: "part11.interpreterFamilyName",
          type: "text",
          label: "3. Interpreter's Family Name",
          required: true,
        },
        {
          id: "part11.interpreterEmailAddress",
          type: "email",
          label: "4. Interpreter's Email Address",
          required: false,
        },
        {
          id: "part11.interpreterDaytimeTelephone",
          type: "tel",
          label: "5. Interpreter's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part11.interpreterMobileTelephone",
          type: "tel",
          label: "6. Interpreter's Mobile Telephone Number",
          required: false,
        },
      ],
    },
    {
      id: "part14-language-fluency",
      title: "Part 14: Language Fluency",
      questions: [
        {
          id: "part14.languageFluent",
          type: "text",
          label: "1. Language(s) Fluent",
          required: true,
        },
      ],
    },
    {
      id: "part12-preparer-info",
      title: "Part 12: Preparer's Information",
      questions: [
        {
          id: "part12.preparerGivenName",
          type: "text",
          label: "1. Preparer's Given Name",
          required: true,
        },
        {
          id: "part12.preparerFamilyName",
          type: "text",
          label: "2. Preparer's Family Name",
          required: true,
        },
        {
          id: "part12.preparerBusinessName",
          type: "text",
          label: "3. Preparer's Business Name",
          required: false,
        },
        {
          id: "part12.preparerEmailAddress",
          type: "email",
          label: "4. Preparer's Email Address",
          required: false,
        },
        {
          id: "part12.preparerDaytimeTelephone",
          type: "tel",
          label: "5. Preparer's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part12.preparerMobileTelephone",
          type: "tel",
          label: "6. Preparer's Mobile Telephone Number",
          required: false,
        },
      ],
    },
    {
      id: "alien-registration-number",
      title: "Alien Registration Number",
      questions: [
        {
          id: "alienRegistrationNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },
    {
      id: "part14-additional-information",
      title: "Part 14: Additional Information",
      questions: [
        {
          id: "part14.additionalInformation5AdditionalInfo",
          type: "text",
          label: "5.d. Additional Information",
          required: false,
        },
        {
          id: "part14.additionalInformation6PageNumber",
          type: "text",
          label: "6.a. Page Number",
          required: false,
        },
        {
          id: "part14.additionalInformation6PartNumber",
          type: "text",
          label: "6.b. Part Number",
          required: false,
        },
        {
          id: "part14.additionalInformation6ItemNumber",
          type: "text",
          label: "6.c. Item Number",
          required: false,
        },
        {
          id: "part14.additionalInformation6AdditionalInfo",
          type: "text",
          label: "6.d. Additional Information",
          required: false,
        },
        {
          id: "part14.additionalInformation5ItemNumber",
          type: "text",
          label: "5.c. Item Number",
          required: false,
        },
        {
          id: "part14.additionalInformation5PartNumber",
          type: "text",
          label: "5.b. Part Number",
          required: false,
        },
        {
          id: "part14.additionalInformation5PageNumber",
          type: "text",
          label: "5.a. Page Number",
          required: false,
        },
        {
          id: "part14.additionalInformation3PageNumber",
          type: "text",
          label: "3.a. Page Number",
          required: false,
        },
        {
          id: "part14.additionalInformation3PartNumber",
          type: "text",
          label: "3.b. Part Number",
          required: false,
        },
        {
          id: "part14.additionalInformation3ItemNumber",
          type: "text",
          label: "3.c. Item Number",
          required: false,
        },
        {
          id: "part14.additionalInformation3AdditionalInfo",
          type: "text",
          label: "3.d. Additional Information",
          required: false,
        },
        {
          id: "part14.noEntryFamilyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: false,
        },
        {
          id: "part14.noEntryGivenName",
          type: "text",
          label: "Given Name (First Name)",
          required: false,
        },
        {
          id: "part14.noEntryMiddleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part14.additionalInformation4PageNumber",
          type: "text",
          label: "4.a. Page Number",
          required: false,
        },
        {
          id: "part14.additionalInformation4PartNumber",
          type: "text",
          label: "4.b. Part Number",
          required: false,
        },
        {
          id: "part14.additionalInformation4ItemNumber",
          type: "text",
          label: "4.c. Item Number",
          required: false,
        },
        {
          id: "part14.additionalInformation4AdditionalInfo",
          type: "text",
          label: "4.d. Additional Information",
          required: false,
        },
      ],
    },
    {
      id: "page20-alien-registration",
      title: "Page 20: Alien Registration",
      questions: [
        {
          id: "page20.alienRegistrationNumber",
          type: "text",
          label: "Alien Registration Number",
          required: false,
        },
      ],
    },
  ],
  pdfFieldMappings: N_400_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};
const I_129F_DEFINITION: FormDefinition = {
  id: "i-129f",
  code: "I-129F",
  name: "Petition for Alien Fiancé(e)",
  description: "K-1 fiancé visa or K-3 spouse visa petition",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 535,
  price: 60,
  sections: [
    {
      id: "part1-personal-information",
      title: "Part 1: Personal Information",
      description: "Provide your personal details as requested below.",
      questions: [
        {
          id: "part1.yourFullName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.yourFullName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.yourFullName.middleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part1.alienRegistrationNumber",
          type: "text",
          label: "2. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number, if any.",
        },
        {
          id: "part1.uscisOnlineAccountNumber",
          type: "text",
          label: "3. USCIS Online Account Number",
          helpText: "Enter your USCIS Online Account Number, if any.",
        },
        {
          id: "part1.socialSecurityNumber",
          type: "ssn",
          label: "4. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part1.otherNamesUsed.givenName",
          type: "text",
          label: "5.a. Other Names Used - Given Name",
          helpText: "Enter any other first names you have used.",
        },
        {
          id: "part1.otherNamesUsed.middleName",
          type: "text",
          label: "5.b. Other Names Used - Middle Name",
          helpText: "Enter any other middle names you have used.",
        },
        {
          id: "part1.otherNamesUsed.familyName",
          type: "text",
          label: "5.c. Other Names Used - Family Name",
          helpText: "Enter any other last names you have used.",
        },
      ],
    },
    {
      id: "part1-classification-request",
      title: "Part 1: Classification Request",
      description: "Select the classification you are requesting.",
      questions: [
        {
          id: "part1.classificationRequest",
          type: "radio",
          label: "6. Classification Requested",
          required: true,
          options: [
            { value: "A", label: "K-1 (Fiancé(e))" },
            { value: "B", label: "K-3 (Spouse)" },
          ],
        },
        {
          id: "part1.spouseK3FiledI130",
          type: "radio",
          label: "7. Has Form I-130 been filed by your spouse?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part1-mailing-address",
      title: "Part 1: Mailing Address",
      description: "Provide your current mailing address.",
      questions: [
        {
          id: "part1.mailingAddressSameAsPhysical",
          type: "radio",
          label:
            "8. Is your mailing address the same as your physical address?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.mailingAddress.streetNumberName",
          type: "text",
          label: "9.a. Street Number and Name",
          required: true,
        },
        {
          id: "part1.mailingAddress.unit",
          type: "select",
          label: "9.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.mailingAddress.aptSteFlrNumber",
          type: "text",
          label: "9.c. Unit Number",
        },
        {
          id: "part1.mailingAddress.cityOrTown",
          type: "text",
          label: "9.d. City or Town",
          required: true,
        },
        {
          id: "part1.mailingAddress.state",
          type: "select",
          label: "9.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part1.mailingAddress.zipCode",
          type: "text",
          label: "9.f. ZIP Code",
          required: true,
        },
        {
          id: "part1.mailingAddress.province",
          type: "text",
          label: "9.g. Province",
          helpText: "If applicable, enter your province.",
        },
        {
          id: "part1.mailingAddress.postalCode",
          type: "text",
          label: "9.h. Postal Code",
          helpText: "If applicable, enter your postal code.",
        },
        {
          id: "part1.mailingAddress.country",
          type: "text",
          label: "9.i. Country",
          required: true,
        },
        {
          id: "part1.mailingAddress.inCareOfName",
          type: "text",
          label: "9.j. In Care Of Name",
          helpText: "If someone else receives your mail, enter their name.",
        },
      ],
    },
    {
      id: "part1-address-history",
      title: "Part 1: Address History",
      description: "List your physical addresses for the past five years.",
      questions: [
        {
          id: "part1.addressHistory.physicalAddressOne.streetNumberName",
          type: "text",
          label: "10.a. Street Number and Name",
          required: true,
        },
        {
          id: "part1.addressHistory.physicalAddressOne.unit",
          type: "select",
          label: "10.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.addressHistory.physicalAddressOne.aptSteFlrNumber",
          type: "text",
          label: "10.c. Unit Number",
        },
        {
          id: "part1.addressHistory.physicalAddressOne.cityOrTown",
          type: "text",
          label: "10.d. City or Town",
          required: true,
        },
        {
          id: "part1.addressHistory.physicalAddressOne.state",
          type: "select",
          label: "10.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part1.addressHistory.physicalAddressOne.zipCode",
          type: "text",
          label: "10.f. ZIP Code",
          required: true,
        },
        {
          id: "part1.addressHistory.physicalAddressOne.province",
          type: "text",
          label: "10.g. Province",
          helpText: "If applicable, enter your province.",
        },
        {
          id: "part1.addressHistory.physicalAddressOne.postalCode",
          type: "text",
          label: "10.h. Postal Code",
          helpText: "If applicable, enter your postal code.",
        },
        {
          id: "part1.addressHistory.physicalAddressOne.country",
          type: "text",
          label: "10.i. Country",
          required: true,
        },
        {
          id: "part1.addressHistory.physicalAddressOne.dateFrom",
          type: "date",
          label: "10.j. Date From",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.addressHistory.physicalAddressOne.dateTo",
          type: "date",
          label: "10.k. Date To",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.streetNumberName",
          type: "text",
          label: "11.a. Street Number and Name",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.unit",
          type: "select",
          label: "11.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.aptSteFlrNumber",
          type: "text",
          label: "11.c. Unit Number",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.cityOrTown",
          type: "text",
          label: "11.d. City or Town",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.state",
          type: "select",
          label: "11.e. State",
          options: US_STATES,
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.zipCode",
          type: "text",
          label: "11.f. ZIP Code",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.province",
          type: "text",
          label: "11.g. Province",
          helpText: "If applicable, enter your province.",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.postalCode",
          type: "text",
          label: "11.h. Postal Code",
          helpText: "If applicable, enter your postal code.",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.country",
          type: "text",
          label: "11.i. Country",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.dateFrom",
          type: "date",
          label: "11.j. Date From",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.addressHistory.physicalAddressTwo.dateTo",
          type: "date",
          label: "11.k. Date To",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part1-employment-history",
      title: "Part 1: Employment History",
      description: "Provide details of your employment history.",
      questions: [
        {
          id: "part1.employmentHistory.employerOne.name",
          type: "text",
          label: "12.a. Employer Name",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.streetNumberName",
          type: "text",
          label: "12.b. Street Number and Name",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.unit",
          type: "select",
          label: "12.c. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.employmentHistory.employerOne.aptSteFlrNumber",
          type: "text",
          label: "12.d. Unit Number",
        },
        {
          id: "part1.employmentHistory.employerOne.cityOrTown",
          type: "text",
          label: "12.e. City or Town",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.state",
          type: "select",
          label: "12.f. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.zipCode",
          type: "text",
          label: "12.g. ZIP Code",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.province",
          type: "text",
          label: "12.h. Province",
          helpText: "If applicable, enter your province.",
        },
        {
          id: "part1.employmentHistory.employerOne.postalCode",
          type: "text",
          label: "12.i. Postal Code",
          helpText: "If applicable, enter your postal code.",
        },
        {
          id: "part1.employmentHistory.employerOne.country",
          type: "text",
          label: "12.j. Country",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerOne.startDate",
          type: "date",
          label: "12.k. Start Date",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.employmentHistory.employerOne.endDate",
          type: "date",
          label: "12.l. End Date",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.employmentHistory.employerOne.occupation",
          type: "text",
          label: "12.m. Occupation",
          required: true,
        },
        {
          id: "part1.employmentHistory.employerTwo.name",
          type: "text",
          label: "13.a. Employer Name",
        },
        {
          id: "part1.employmentHistory.employerTwo.streetNumberName",
          type: "text",
          label: "13.b. Street Number and Name",
        },
        {
          id: "part1.employmentHistory.employerTwo.unit",
          type: "select",
          label: "13.c. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.employmentHistory.employerTwo.aptSteFlrNumber",
          type: "text",
          label: "13.d. Unit Number",
        },
        {
          id: "part1.employmentHistory.employerTwo.cityOrTown",
          type: "text",
          label: "13.e. City or Town",
        },
        {
          id: "part1.employmentHistory.employerTwo.state",
          type: "select",
          label: "13.f. State",
          options: US_STATES,
        },
        {
          id: "part1.employmentHistory.employerTwo.zipCode",
          type: "text",
          label: "13.g. ZIP Code",
        },
        {
          id: "part1.employmentHistory.employerTwo.province",
          type: "text",
          label: "13.h. Province",
          helpText: "If applicable, enter your province.",
        },
        {
          id: "part1.employmentHistory.employerTwo.postalCode",
          type: "text",
          label: "13.i. Postal Code",
          helpText: "If applicable, enter your postal code.",
        },
        {
          id: "part1.employmentHistory.employerTwo.country",
          type: "text",
          label: "13.j. Country",
        },
        {
          id: "part1.employmentHistory.employerTwo.startDate",
          type: "date",
          label: "13.k. Start Date",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.employmentHistory.employerTwo.endDate",
          type: "date",
          label: "13.l. End Date",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.employmentHistory.employerTwo.occupation",
          type: "text",
          label: "13.m. Occupation",
        },
      ],
    },
    {
      id: "part1-other-information",
      title: "Part 1: Other Information",
      description: "Provide additional personal information as requested.",
      questions: [
        {
          id: "part1.otherInformation.cityTownOfBirth",
          type: "text",
          label: "14.a. City or Town of Birth",
          required: true,
        },
        {
          id: "part1.otherInformation.provinceOrStateOfBirth",
          type: "text",
          label: "14.b. Province or State of Birth",
        },
        {
          id: "part1.otherInformation.countryOfBirth",
          type: "text",
          label: "14.c. Country of Birth",
          required: true,
        },
        {
          id: "part1.otherInformation.dateOfBirth",
          type: "date",
          label: "15. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.sex",
          type: "radio",
          label: "16. Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part1.maritalStatus",
          type: "select",
          label: "17. Marital Status",
          required: true,
          options: [
            { value: "S", label: "Single" },
            { value: "M", label: "Married" },
            { value: "D", label: "Divorced" },
            { value: "W", label: "Widowed" },
          ],
        },
      ],
    },
    {
      id: "part1-parents-information",
      title: "Part 1: Parents Information",
      description: "Provide information about your parents.",
      questions: [
        {
          id: "part1.parentOne.familyName",
          type: "text",
          label: "Parent 1: Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.parentOne.givenName",
          type: "text",
          label: "Parent 1: Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.parentOne.middleName",
          type: "text",
          label: "Parent 1: Middle Name",
        },
        {
          id: "part1.parentOne.dateOfBirth",
          type: "date",
          label: "Parent 1: Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part1.parentOne.sex",
          type: "radio",
          label: "Parent 1: Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part1.parentOne.countryOfBirth",
          type: "text",
          label: "Parent 1: Country of Birth",
          required: true,
        },
        {
          id: "part1.parentOneCountryOfResidence",
          type: "text",
          label: "Parent 1: Country of Residence",
          required: true,
        },
        {
          id: "part1.parentOneCityTownOfResidence",
          type: "text",
          label: "Parent 1: City or Town of Residence",
          required: true,
        },
        {
          id: "part1.parentTwoFamilyName",
          type: "text",
          label: "Parent 2: Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.parentTwoGivenName",
          type: "text",
          label: "Parent 2: Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.parentTwoMiddleName",
          type: "text",
          label: "Parent 2: Middle Name",
        },
        {
          id: "part1.parentTwoDateOfBirth",
          type: "date",
          label: "Parent 2: Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part1.parentTwoSex",
          type: "radio",
          label: "Parent 2: Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part1.parentTwoCountryOfBirth",
          type: "text",
          label: "Parent 2: Country of Birth",
          required: true,
        },
        {
          id: "part1.parentTwoCountryOfResidence",
          type: "text",
          label: "Parent 2: Country of Residence",
          required: true,
        },
        {
          id: "part1.parentTwoCityTownOfResidence",
          type: "text",
          label: "Parent 2: City or Town of Residence",
          required: true,
        },
      ],
    },
    {
      id: "part1-marriage-history",
      title: "Part 1: Marriage History",
      description: "Provide information about your marriage history.",
      questions: [
        {
          id: "part1.previousMarriage",
          type: "radio",
          label: "Have you been previously married?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.previousSpouseFamilyName",
          type: "text",
          label: "Previous Spouse: Family Name (Last Name)",
          conditional: {
            dependsOn: "part1.previousMarriage",
            values: ["Y"],
          },
        },
        {
          id: "part1.previousSpouseGivenName",
          type: "text",
          label: "Previous Spouse: Given Name (First Name)",
          conditional: {
            dependsOn: "part1.previousMarriage",
            values: ["Y"],
          },
        },
        {
          id: "part1.previousSpouseMiddleName",
          type: "text",
          label: "Previous Spouse: Middle Name",
          conditional: {
            dependsOn: "part1.previousMarriage",
            values: ["Y"],
          },
        },
        {
          id: "part1.dateMarriageEnded",
          type: "date",
          label: "Date Marriage Ended (mm/dd/yyyy)",
          conditional: {
            dependsOn: "part1.previousMarriage",
            values: ["Y"],
          },
        },
      ],
    },
    {
      id: "part1-citizenship-information",
      title: "Part 1: Citizenship Information",
      description: "Provide information about your U.S. citizenship.",
      questions: [
        {
          id: "part1.citizenshipThrough",
          type: "radio",
          label: "How did you acquire U.S. citizenship?",
          required: true,
          options: [
            { value: "A", label: "Birth in the United States" },
            { value: "B", label: "Naturalization" },
            { value: "C", label: "Parents" },
          ],
        },
        {
          id: "part1.certificateObtained",
          type: "radio",
          label:
            "Have you obtained a Certificate of Naturalization or Citizenship?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.certificateNumber",
          type: "text",
          label: "Certificate Number",
          conditional: {
            dependsOn: "part1.certificateObtained",
            values: ["Y"],
          },
        },
        {
          id: "part1.placeOfIssuance",
          type: "text",
          label: "Place of Issuance",
          conditional: {
            dependsOn: "part1.certificateObtained",
            values: ["Y"],
          },
        },
        {
          id: "part1.dateOfIssuance",
          type: "date",
          label: "Date of Issuance (mm/dd/yyyy)",
          conditional: {
            dependsOn: "part1.certificateObtained",
            values: ["Y"],
          },
        },
      ],
    },
    {
      id: "part1-prior-petitions",
      title: "Part 1: Prior Petitions",
      description: "Information about any prior petitions you have filed.",
      questions: [
        {
          id: "part1.filedForOtherBeneficiary",
          type: "radio",
          label: "Have you ever filed a petition for any other person?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.additionalFamilyName",
          type: "text",
          label: "Other Beneficiary: Family Name (Last Name)",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
        {
          id: "part1.additionalGivenName",
          type: "text",
          label: "Other Beneficiary: Given Name (First Name)",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
        {
          id: "part1.additionalMiddleName",
          type: "text",
          label: "Other Beneficiary: Middle Name",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
        {
          id: "part1.dateOfFiling",
          type: "date",
          label: "Date of Filing (mm/dd/yyyy)",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
        {
          id: "part1.uscisAction",
          type: "text",
          label: "USCIS Action on Petition",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
        {
          id: "part1.alienNumber",
          type: "text",
          label: "Other Beneficiary's Alien Registration Number",
          conditional: {
            dependsOn: "part1.filedForOtherBeneficiary",
            values: ["Y"],
          },
        },
      ],
    },
    {
      id: "part1-children-information",
      title: "Part 1: Children Information",
      description: "Information about children under 18 years of age.",
      questions: [
        {
          id: "part1.childrenUnder18",
          type: "radio",
          label: "Do you have any unmarried children under 18 years of age?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.childAge49a",
          type: "text",
          label: "Child 1: Age",
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
        {
          id: "part1.childAge49b",
          type: "text",
          label: "Child 2: Age",
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
        {
          id: "part1.residenceOneState",
          type: "select",
          label: "Child 1: State of Residence",
          options: US_STATES,
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
        {
          id: "part1.residenceOneCountry",
          type: "text",
          label: "Child 1: Country of Residence",
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
        {
          id: "part1.residenceTwoState",
          type: "select",
          label: "Child 2: State of Residence",
          options: US_STATES,
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
        {
          id: "part1.residenceTwoCountry",
          type: "text",
          label: "Child 2: Country of Residence",
          conditional: {
            dependsOn: "part1.childrenUnder18",
            values: ["Y"],
          },
        },
      ],
    },
    {
      id: "part2-relationship-information",
      title: "Part 2: Relationship Information",
      description: "Information about your relationship with the beneficiary.",
      questions: [
        {
          id: "part2.isFianceRelated",
          type: "radio",
          label: "Are you related to your fiancé(e)?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
            { value: "A", label: "Not Applicable" },
          ],
        },
        {
          id: "part2.relationshipDescription",
          type: "text",
          label: "Describe the relationship",
          conditional: {
            dependsOn: "part2.isFianceRelated",
            values: ["Y"],
          },
        },
        {
          id: "part2.haveMetInPerson",
          type: "radio",
          label:
            "Have you met your fiancé(e) in person within the 2 years before filing this petition?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
            { value: "A", label: "Not Applicable" },
          ],
        },
        {
          id: "part2.meetingExplanation",
          type: "textarea",
          label: "Describe when and where you met",
          conditional: {
            dependsOn: "part2.haveMetInPerson",
            values: ["Y"],
          },
        },
        {
          id: "part2.metThroughImb",
          type: "radio",
          label: "Did you meet through an International Marriage Broker (IMB)?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part2-imb-information",
      title: "Part 2: International Marriage Broker Information",
      description:
        "Information about the International Marriage Broker (if applicable).",
      questions: [
        {
          id: "part2.imbName",
          type: "text",
          label: "IMB Name",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbFamilyName",
          type: "text",
          label: "IMB Representative: Family Name",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbGivenName",
          type: "text",
          label: "IMB Representative: Given Name",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbOrgName",
          type: "text",
          label: "IMB Organization Name",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbWebsite",
          type: "text",
          label: "IMB Website",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbStreetNumberName",
          type: "text",
          label: "IMB Street Number and Name",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbUnit",
          type: "select",
          label: "IMB Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
            { value: "APT", label: "Apt." },
          ],
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbAptSteFlrNumber",
          type: "text",
          label: "IMB Unit Number",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbCityOrTown",
          type: "text",
          label: "IMB City or Town",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbProvince",
          type: "text",
          label: "IMB Province",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbPostalCode",
          type: "text",
          label: "IMB Postal Code",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbCountry",
          type: "text",
          label: "IMB Country",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
        {
          id: "part2.imbDaytimeTelephoneNum",
          type: "tel",
          label: "IMB Daytime Telephone Number",
          conditional: {
            dependsOn: "part2.metThroughImb",
            values: ["Y"],
          },
        },
      ],
    },
    {
      id: "part2-consular-information",
      title: "Part 2: Consular Processing Information",
      description:
        "Information about where the beneficiary will apply for the visa.",
      questions: [
        {
          id: "part2.consularCityTown",
          type: "text",
          label: "City and Town of U.S. Consulate or Embassy",
          required: true,
        },
        {
          id: "part2.consularCountry",
          type: "text",
          label: "Country of U.S. Consulate or Embassy",
          required: true,
        },
      ],
    },
    {
      id: "part2-beneficiary-additional-fields",
      title: "Part 2: Additional Beneficiary Information",
      description: "Additional required information about the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryMailingInCareOf",
          type: "text",
          label: "Mailing Address - In Care Of Name",
        },
        {
          id: "part2.beneficiaryMailingProvince",
          type: "text",
          label: "Mailing Address - Province",
        },
        {
          id: "part2.beneficiaryMailingPostalCode",
          type: "text",
          label: "Mailing Address - Postal Code",
        },
        {
          id: "part2.beneficiaryAptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryStreetNumberName",
          type: "text",
          label: "Street Number and Name",
        },
        {
          id: "part2.beneficiaryCityOrTown",
          type: "text",
          label: "City or Town",
        },
        {
          id: "part2.beneficiaryPostalCode",
          type: "text",
          label: "Postal Code",
        },
        {
          id: "part2.beneficiaryCountry",
          type: "text",
          label: "Country",
        },
        {
          id: "part2.beneficiaryProvince",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryUnit",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "FLR", label: "Flr." },
            { value: "STE", label: "Ste." },
            { value: "APT", label: "Apt." },
          ],
        },
      ],
    },
    {
      id: "part2-beneficiary-info",
      title: "Part 2: Beneficiary Information",
      description: "Provide details about the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryFamilyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryGivenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryMiddleName",
          type: "text",
          label: "1.c. Middle Name",
        },
        {
          id: "part2.beneficiaryAlienNumber",
          type: "text",
          label: "2. Alien Registration Number (A-Number)",
          helpText: "Enter the A-Number if applicable.",
        },
        {
          id: "part2.beneficiaryCountryOfBirth",
          type: "text",
          label: "8. Country of Birth",
          required: true,
        },
        {
          id: "part2.beneficiaryCountryOfCitizenship",
          type: "text",
          label: "9. Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part2.beneficiaryCityTownOfBirth",
          type: "text",
          label: "7. City or Town of Birth",
          required: true,
        },
        {
          id: "part2.beneficiaryMaritalStatus",
          type: "radio",
          label: "6. Marital Status",
          required: true,
          options: [
            { value: "W", label: "Widowed" },
            { value: "D", label: "Divorced" },
            { value: "S", label: "Single" },
            { value: "M", label: "Married" },
          ],
        },
        {
          id: "part2.beneficiarySSN",
          type: "ssn",
          label: "3. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part2.beneficiaryDateOfBirth",
          type: "date",
          label: "4. Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiarySex",
          type: "radio",
          label: "5. Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
      ],
    },
    {
      id: "part2-other-names",
      title: "Part 2: Other Names Used",
      description: "Provide any other names the beneficiary has used.",
      questions: [
        {
          id: "part2.otherNamesFamilyName",
          type: "text",
          label: "10.a. Family Name (Last Name)",
        },
        {
          id: "part2.otherNamesGivenName",
          type: "text",
          label: "10.b. Given Name (First Name)",
        },
        {
          id: "part2.otherNamesMiddleName",
          type: "text",
          label: "10.c. Middle Name",
        },
      ],
    },

    {
      id: "part2-beneficiary-mailing-address",
      title: "Part 2: Beneficiary Mailing Address",
      description: "Provide the mailing address for the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryMailingStreet",
          type: "text",
          label: "11. Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryMailingUnitType",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryMailingUnitNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryMailingCity",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryMailingState",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryMailingZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryMailingCountry",
          type: "text",
          label: "Country",
          required: true,
        },
      ],
    },

    {
      id: "part2-beneficiary-physical-address-one",
      title: "Part 2: Beneficiary Physical Address",
      description:
        "Provide the physical address where the beneficiary resides.",
      questions: [
        {
          id: "part2.beneficiaryPhysicalAddressOneStreet",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneUnitType",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneUnitNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneCity",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneState",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneCountry",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneProvince",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryPhysicalAddressOnePostalCode",
          type: "text",
          label: "Postal Code",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneDateFrom",
          type: "date",
          label: "Date From (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressOneDateTo",
          type: "date",
          label: "Date To (mm/dd/yyyy)",
        },
      ],
    },
    {
      id: "part2-beneficiary-physical-address",
      title: "Part 2: Beneficiary Physical Address 2",
      description:
        "Provide the physical address where the beneficiary resides.",
      questions: [
        {
          id: "part2.beneficiaryPhysicalAddressTwoStreet",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoUnitType",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoUnitNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoCity",
          type: "text",
          label: "City or Town",
          required: true,
        },
        //
        {
          id: "part2.beneficiaryPhysicalAddressTwoProvince",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoPostalCode",
          type: "text",
          label: "Postal Code",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoState",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoCountry",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoDateFrom",
          type: "date",
          label: "Date From (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressTwoDateTo",
          type: "date",
          label: "Date To (mm/dd/yyyy)",
        },
      ],
    },
    // =======
    {
      id: "part2-beneficiary-employment",
      title: "Part 2: Beneficiary Employment History",
      description: "Provide the employment history for the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryEmployerOneName",
          type: "text",
          label: "Employer Name",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOneStreet",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.selectSuite",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },

        {
          id: "part2.beneficiaryEmployerOne.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryEmployerOne.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.province",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryEmployerOne.postalCode",
          type: "text",
          label: "Postal Code",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.state",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.zipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.country",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOne.employmentStartDate",
          type: "date",
          label: "Employment Start Date (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerOneEndDate",
          type: "date",
          label: "Employment End Date (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryEmployerOne.occupation",
          type: "text",
          label: "Occupation",
          required: true,
        },
      ],
    },

    //    =====

    {
      id: "part2-beneficiary-employment-Two",
      title: "Part 2: Beneficiary Employment History",
      description: "Provide the employment history for the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryEmployerTwo.nameOfEmployer",
          type: "text",
          label: "Full Employer Name",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwoName",
          type: "text",
          label: "Employer Name",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwoStreet",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.selectSuite",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryEmployerTwo.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryEmployerTwo.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.province",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryEmployerTwo.postalCode",
          type: "text",
          label: "Postal Code",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.state",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.zipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.country",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwo.employmentStartDate",
          type: "date",
          label: "Employment Start Date (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryEmployerTwoEndDate",
          type: "date",
          label: "Employment End Date (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryEmployerTwo.occupation",
          type: "text",
          label: "Occupation",
          required: true,
        },
      ],
    },
    //    =====
    {
      id: "part2-beneficiary-parents",
      title: "Part 2: Beneficiary's Parents",
      description: "Provide information about the beneficiary's parents.",
      questions: [
        {
          id: "part2.beneficiaryParents.parentOne.familyName",
          type: "text",
          label: "Parent 1: Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentOne.givenName",
          type: "text",
          label: "Parent 1: Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentOne.middleName",
          type: "text",
          label: "Parent 1: Middle Name",
        },
        {
          id: "part2.beneficiaryParents.parentOne.dateOfBirth",
          type: "date",
          label: "Parent 1: Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentOne.sex",
          type: "radio",
          label: "Parent 1: Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part2.beneficiaryParents.parentOne.countryOfBirth",
          type: "text",
          label: "Parent 1: Country of Birth",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentOne.countryOfResidence",
          type: "text",
          label: "Parent 1: Country of Residence",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentOne.cityTownOfResidence",
          type: "text",
          label: "Parent 1: City or Town of Residence",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.familyName",
          type: "text",
          label: "Parent 2: Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.givenName",
          type: "text",
          label: "Parent 2: Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.middleName",
          type: "text",
          label: "Parent 2: Middle Name",
        },
        {
          id: "part2.beneficiaryParents.parentTwo.dateOfBirth",
          type: "date",
          label: "Parent 2: Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.sex",
          type: "radio",
          label: "Parent 2: Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part2.beneficiaryParents.parentTwo.countryOfBirth",
          type: "text",
          label: "Parent 2: Country of Birth",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.countryOfResidence",
          type: "text",
          label: "Parent 2: Country of Residence",
          required: true,
        },
        {
          id: "part2.beneficiaryParents.parentTwo.cityTownOfResidence",
          type: "text",
          label: "Parent 2: City or Town of Residence",
          required: true,
        },
      ],
    },
    {
      id: "part2-beneficiary-other-info",
      title: "Part 2: Other Information About Beneficiary",
      description: "Provide additional information about the beneficiary.",
      questions: [
        {
          id: "part2.beneficiaryOtherInfo.previouslyMarried",
          type: "radio",
          label: "Has the beneficiary been previously married?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.beneficiaryOtherInfo.previousSpouse.familyName",
          type: "text",
          label: "Previous Spouse: Family Name (Last Name)",
        },
        {
          id: "part2.beneficiaryOtherInfo.previousSpouse.givenName",
          type: "text",
          label: "Previous Spouse: Given Name (First Name)",
        },
        {
          id: "part2.beneficiaryOtherInfo.previousSpouse.middleName",
          type: "text",
          label: "Previous Spouse: Middle Name",
        },
        {
          id: "part2.beneficiaryOtherInfo.previousSpouse.dateMarriageEnded",
          type: "date",
          label: "Date Marriage Ended (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryOtherInfo.everInUS",
          type: "radio",
          label: "Has the beneficiary ever been in the U.S.?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.beneficiaryOtherInfo.lastArrivedAs",
          type: "text",
          label: "Last Arrived As",
          helpText:
            "Enter the status in which the beneficiary last arrived in the U.S.",
        },
        {
          id: "part2.beneficiaryOtherInfo.arrivalDepartureRecordNumber",
          type: "text",
          label: "Arrival/Departure Record Number (I-94)",
        },
        {
          id: "part2.beneficiaryOtherInfo.dateOfArrival",
          type: "date",
          label: "Date of Arrival (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryOtherInfo.countryOfIssuance",
          type: "text",
          label: "Country of Issuance",
        },
        {
          id: "part2.beneficiaryOtherInfo.passportExpirationDate",
          type: "date",
          label: "Passport Expiration Date (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryOtherInfo.passportNumber",
          type: "text",
          label: "Passport Number",
        },
        {
          id: "part2.beneficiaryOtherInfo.travelDocumentNumber",
          type: "text",
          label: "Travel Document Number",
        },
        {
          id: "part2.beneficiaryOtherInfo.dateAuthorizedStayExpired",
          type: "date",
          label: "Date Authorized Stay Expired (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryOtherInfo.children",
          type: "radio",
          label: "Does the beneficiary have any children?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.beneficiaryOtherInfo.child.familyName",
          type: "text",
          label: "Child: Family Name (Last Name)",
        },
        {
          id: "part2.beneficiaryOtherInfo.child.givenName",
          type: "text",
          label: "Child: Given Name (First Name)",
        },
        {
          id: "part2.beneficiaryOtherInfo.child.middleName",
          type: "text",
          label: "Child: Middle Name",
        },
        {
          id: "part2.beneficiaryOtherInfo.child.countryOfBirth",
          type: "text",
          label: "Child: Country of Birth",
        },
        {
          id: "part2.beneficiaryOtherInfo.child.dateOfBirth",
          type: "date",
          label: "Child: Date of Birth (mm/dd/yyyy)",
        },
        {
          id: "part2.beneficiaryOtherInfo.child.residesWithBeneficiary",
          type: "radio",
          label: "Does the child reside with the beneficiary?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part2-beneficiary-address-in-us",
      title: "Part 2: Beneficiary Address in the U.S.",
      description:
        "Provide the address where the beneficiary will reside in the U.S.",
      questions: [
        {
          id: "part2.beneficiaryAddressInUS.streetNumberName",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryAddressInUS.selectSuite",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryAddressInUS.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryAddressInUS.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryAddressInUS.state",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.beneficiaryAddressInUS.zipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryAddressInUS.daytimeTelephoneNumber",
          type: "tel",
          label: "Daytime Telephone Number",
          placeholder: "(555) 123-4567",
        },
      ],
    },
    {
      id: "part2-beneficiary-physical-address-abroad",
      title: "Part 2: Beneficiary Physical Address Abroad",
      description:
        "Provide the physical address where the beneficiary resides abroad.",
      questions: [
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.streetNumberName",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.selectSuite",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.province",
          type: "text",
          label: "Province",
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.postalCode",
          type: "text",
          label: "Postal Code",
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.country",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryPhysicalAddressAbroad.daytimeTelephoneNumber",
          type: "tel",
          label: "Daytime Telephone Number",
          placeholder: "(555) 123-4567",
        },
      ],
    },

    {
      id: "part3-legal-issues",
      title: "Part 3: Legal Issues",
      description:
        "Provide information regarding any legal issues or criminal history.",
      questions: [
        {
          id: "part3.subjectToProtectionOrder",
          type: "radio",
          label: "1. Are you subject to a protection or restraining order?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText:
            "Indicate if you are currently subject to any court-issued protection or restraining orders.",
        },
        {
          id: "part3.arrestedForCrimeA",
          type: "radio",
          label:
            "2.a. Have you ever been arrested for a crime involving moral turpitude?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "This includes crimes such as fraud, theft, or assault.",
        },
        {
          id: "part3.arrestedForCrimeB",
          type: "radio",
          label:
            "2.b. Have you ever been arrested for a crime involving a controlled substance?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "This refers to any offenses related to illegal drugs.",
        },
        {
          id: "part3.arrestedForCrimeC",
          type: "radio",
          label:
            "2.c. Have you ever been arrested for a crime involving firearms or explosives?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText:
            "Include any arrests related to illegal possession or use of firearms or explosives.",
        },
        {
          id: "part3.convictionCircumstances",
          type: "radio",
          label: "3. Under what circumstances were you convicted?",
          required: true,
          options: [
            { value: "A", label: "Convicted in a court of law" },
            { value: "B", label: "Plea bargain" },
            { value: "C", label: "Other circumstances" },
          ],
          helpText:
            "Select the option that best describes the circumstances of your conviction.",
        },
        {
          id: "part3.waiverRequest",
          type: "radio",
          label: "5. Are you requesting a waiver for any of the above issues?",
          required: true,
          options: [
            { value: "A", label: "Yes, for moral turpitude" },
            { value: "B", label: "Yes, for controlled substances" },
            { value: "C", label: "Yes, for firearms/explosives" },
            { value: "D", label: "No waiver requested" },
          ],
          helpText:
            "Indicate if you are seeking a waiver for any of the legal issues mentioned.",
        },
        {
          id: "part3.arrestedForLawViolation",
          type: "radio",
          label: "4.a. Have you ever been arrested for violating any law?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
          helpText: "Include any arrests not previously mentioned.",
        },
        {
          id: "part3.arrestDetails",
          type: "textarea",
          label: "4.b. Provide details of the arrest(s)",
          helpText:
            "If you answered 'Yes' to any arrest questions, provide details including dates, locations, and outcomes.",
        },
      ],
    },

    {
      id: "part4-physical-characteristics",
      title: "Part 4: Physical Characteristics",
      description:
        "Provide your physical characteristics as required by USCIS.",
      questions: [
        {
          id: "part4.ethnicity",
          type: "radio",
          label: "1. Ethnicity",
          required: true,
          options: [
            { value: "N", label: "Not Hispanic or Latino" },
            { value: "H", label: "Hispanic or Latino" },
          ],
          helpText: "Select the option that best describes your ethnicity.",
        },
        {
          id: "part4.race",
          type: "checkbox",
          label: "2. Race",
          required: true,
          options: [
            { value: "Y", label: "White" },
            { value: "Y", label: "Black or African American" },
            { value: "Y", label: "American Indian or Alaska Native" },
            { value: "Y", label: "Asian" },
            { value: "Y", label: "Native Hawaiian or Other Pacific Islander" },
          ],
          helpText: "You may select more than one option.",
        },
        {
          id: "part4.heightFeet",
          type: "select",
          label: "3. Height - Feet",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
          helpText: "Select your height in feet.",
        },
        {
          id: "part4.heightInches",
          type: "select",
          label: "3. Height - Inches",
          required: true,
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
          helpText: "Select your height in inches.",
        },
        {
          id: "part4.weightFirstDigit",
          type: "text",
          label: "4. Weight - First Digit",
          required: true,
          placeholder: "#",
          helpText: "Enter the first digit of your weight in pounds.",
        },
        {
          id: "part4.weightSecondDigit",
          type: "text",
          label: "4. Weight - Second Digit",
          required: true,
          placeholder: "#",
          helpText: "Enter the second digit of your weight in pounds.",
        },
        {
          id: "part4.weightThirdDigit",
          type: "text",
          label: "4. Weight - Third Digit",
          required: true,
          placeholder: "#",
          helpText: "Enter the third digit of your weight in pounds.",
        },
        {
          id: "part4.eyeColor",
          type: "radio",
          label: "5. Eye Color",
          required: true,
          options: [
            { value: "BLU", label: "Blue" },
            { value: "GRN", label: "Green" },
            { value: "HAZ", label: "Hazel" },
            { value: "PNK", label: "Pink" },
            { value: "MAR", label: "Maroon" },
            { value: "GRY", label: "Gray" },
            { value: "BRO", label: "Brown" },
            { value: "BLK", label: "Black" },
            { value: "UNK", label: "Unknown" },
          ],
          helpText: "Select the color that best describes your eyes.",
        },
        {
          id: "part4.hairColor",
          type: "radio",
          label: "6. Hair Color",
          required: true,
          options: [
            { value: "BAL", label: "Bald" },
            { value: "BLN", label: "Blond" },
            { value: "GRY", label: "Gray" },
            { value: "SDY", label: "Sandy" },
            { value: "BRO", label: "Brown" },
            { value: "BLK", label: "Black" },
            { value: "RED", label: "Red" },
            { value: "WHI", label: "White" },
            { value: "UNK", label: "Unknown" },
          ],
          helpText: "Select the color that best describes your hair.",
        },
      ],
    },

    {
      id: "part5-petitioner-contact-info",
      title: "Part 5: Petitioner Contact Information",
      description: "Provide your contact details for communication purposes.",
      questions: [
        {
          id: "part5.petitionerDaytimePhoneNumber",
          type: "tel",
          label: "1. Daytime Telephone Number",
          placeholder: "(555) 123-4567",
          required: true,
          helpText:
            "Enter a phone number where you can be reached during the day.",
        },
        {
          id: "part5.petitionerMobileNumber",
          type: "tel",
          label: "2. Mobile Telephone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Enter your mobile phone number, if different from your daytime number.",
        },
        {
          id: "part5.petitionerEmail",
          type: "email",
          label: "3. Email Address",
          placeholder: "example@email.com",
          helpText:
            "Provide an email address where you can receive correspondence.",
        },
      ],
    },

    {
      id: "part6-interpreter-info",
      title:
        "Part 6: Interpreter's Contact Information, Certification, and Signature",
      description:
        "Provide the interpreter's details and certification information.",
      questions: [
        {
          id: "part6.interpreterGivenName",
          type: "text",
          label: "1.a. Interpreter's Given Name (First Name)",
          required: true,
          helpText:
            "Enter the first name of the interpreter assisting with this form.",
        },
        {
          id: "part6.interpreterFamilyName",
          type: "text",
          label: "1.b. Interpreter's Family Name (Last Name)",
          required: true,
          helpText:
            "Enter the last name of the interpreter assisting with this form.",
        },
        {
          id: "part6.interpreterBusinessName",
          type: "text",
          label: "2. Name of Business or Organization (if applicable)",
          helpText:
            "Enter the name of the business or organization the interpreter is affiliated with, if any.",
        },
        {
          id: "part6.interpreterDaytimeTelephone",
          type: "tel",
          label: "4.a. Interpreter's Daytime Telephone Number",
          required: true,
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a daytime telephone number where the interpreter can be reached.",
        },
        {
          id: "part6.interpreterMobileTelephone",
          type: "tel",
          label: "4.b. Interpreter's Mobile Telephone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a mobile telephone number for the interpreter, if different from the daytime number.",
        },
        {
          id: "part6.interpreterEmail",
          type: "email",
          label: "5. Interpreter's Email Address",
          placeholder: "example@email.com",
          helpText: "Provide an email address for the interpreter.",
        },
        {
          id: "part6.interpreterLanguage",
          type: "text",
          label: "3. Language Used for Interpretation",
          required: true,
          helpText:
            "Specify the language used by the interpreter to translate this form.",
        },
        {
          id: "part6.interpreterDateOfSignature",
          type: "date",
          label: "6.a. Date of Signature (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date when the interpreter signed this form.",
        },
        {
          id: "part6.interpreterSignature",
          type: "text",
          label: "6.b. Interpreter's Signature",
          required: true,
          helpText:
            "The interpreter must sign here to certify the accuracy of the translation.",
        },
      ],
    },

    {
      id: "part7-preparer-information",
      title: "Part 7: Preparer's Information",
      description:
        "Provide details about the person who prepared this form, if applicable.",
      questions: [
        {
          id: "part7.preparerFamilyName",
          type: "text",
          label: "1.a. Preparer's Family Name (Last Name)",
          required: true,
          helpText: "Enter the last name of the person who prepared this form.",
        },
        {
          id: "part7.preparerGivenName",
          type: "text",
          label: "1.b. Preparer's Given Name (First Name)",
          required: true,
          helpText:
            "Enter the first name of the person who prepared this form.",
        },
        {
          id: "part7.preparerBusinessName",
          type: "text",
          label: "2. Preparer's Business or Organization Name",
          helpText:
            "If the preparer is associated with a business or organization, enter the name here.",
        },
        {
          id: "part7.preparerDaytimePhoneNumber",
          type: "tel",
          label: "3. Preparer's Daytime Telephone Number",
          required: true,
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a phone number where the preparer can be reached during the day.",
        },
        {
          id: "part7.preparerMobileNumber",
          type: "tel",
          label: "4. Preparer's Mobile Telephone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a mobile phone number for the preparer, if available.",
        },
        {
          id: "part7.preparerEmail",
          type: "email",
          label: "5. Preparer's Email Address",
          placeholder: "example@email.com",
          helpText: "Provide an email address for the preparer.",
        },
        {
          id: "part7.preparerSignature",
          type: "text",
          label: "6.a. Preparer's Signature",
          required: true,
          helpText:
            "The preparer must sign here to confirm the information provided.",
        },
        {
          id: "part7.dateOfSignature",
          type: "date",
          label: "6.b. Date of Signature (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date when the preparer signed this form.",
        },
      ],
    },

    {
      id: "part8-additional-information",
      title: "Part 8: Additional Information",
      description:
        "Provide additional information for any of the questions in this form. Use the space below to explain your answers further.",
      questions: [
        {
          id: "part8.pageNumber3a",
          type: "text",
          label: "3.a. Page Number",
          helpText:
            "Enter the page number from the form where the additional information applies.",
        },
        {
          id: "part8.partNumber3b",
          type: "text",
          label: "3.b. Part Number",
          helpText:
            "Enter the part number from the form where the additional information applies.",
        },
        {
          id: "part8.itemNumber3c",
          type: "text",
          label: "3.c. Item Number",
          helpText:
            "Enter the item number from the form where the additional information applies.",
        },
        {
          id: "part8.additionalInfo3d",
          type: "textarea",
          label: "3.d. Additional Information",
          helpText:
            "Provide any additional information or explanation related to the specified page, part, and item number.",
        },
        {
          id: "part8.pageNumber4a",
          type: "text",
          label: "4.a. Page Number",
          helpText:
            "Enter the page number from the form where the additional information applies.",
        },
        {
          id: "part8.partNumber4b",
          type: "text",
          label: "4.b. Part Number",
          helpText:
            "Enter the part number from the form where the additional information applies.",
        },
        {
          id: "part8.itemNumber4c",
          type: "text",
          label: "4.c. Item Number",
          helpText:
            "Enter the item number from the form where the additional information applies.",
        },
        {
          id: "part8.additionalInfo4d",
          type: "textarea",
          label: "4.d. Additional Information",
          helpText:
            "Provide any additional information or explanation related to the specified page, part, and item number.",
        },
        {
          id: "part8.pageNumber5a",
          type: "text",
          label: "5.a. Page Number",
          helpText:
            "Enter the page number from the form where the additional information applies.",
        },
        {
          id: "part8.partNumber5b",
          type: "text",
          label: "5.b. Part Number",
          helpText:
            "Enter the part number from the form where the additional information applies.",
        },
        {
          id: "part8.itemNumber5c",
          type: "text",
          label: "5.c. Item Number",
          helpText:
            "Enter the item number from the form where the additional information applies.",
        },
        {
          id: "part8.additionalInfo5d",
          type: "textarea",
          label: "5.d. Additional Information",
          helpText:
            "Provide any additional information or explanation related to the specified page, part, and item number.",
        },
        {
          id: "part8.pageNumber6a",
          type: "text",
          label: "6.a. Page Number",
          helpText:
            "Enter the page number from the form where the additional information applies.",
        },
        {
          id: "part8.partNumber6b",
          type: "text",
          label: "6.b. Part Number",
          helpText:
            "Enter the part number from the form where the additional information applies.",
        },
        {
          id: "part8.itemNumber6c",
          type: "text",
          label: "6.c. Item Number",
          helpText:
            "Enter the item number from the form where the additional information applies.",
        },
        {
          id: "part8.additionalInfo6d",
          type: "textarea",
          label: "6.d. Additional Information",
          helpText:
            "Provide any additional information or explanation related to the specified page, part, and item number.",
        },
        {
          id: "part8.pageNumber7a",
          type: "text",
          label: "7.a. Page Number",
          helpText:
            "Enter the page number from the form where the additional information applies.",
        },
        {
          id: "part8.partNumber7b",
          type: "text",
          label: "7.b. Part Number",
          helpText:
            "Enter the part number from the form where the additional information applies.",
        },
        {
          id: "part8.itemNumber7c",
          type: "text",
          label: "7.c. Item Number",
          helpText:
            "Enter the item number from the form where the additional information applies.",
        },
        {
          id: "part8.additionalInfo7d",
          type: "textarea",
          label: "7.d. Additional Information",
          helpText:
            "Provide any additional information or explanation related to the specified page, part, and item number.",
        },
      ],
    },
    {
      id: "part8-personal-information",
      title: "Part 8: Personal Information",
      description: "Provide your personal information as requested below.",
      questions: [
        {
          id: "part8.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part8.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part8.middleName",
          type: "text",
          label: "Middle Name",
        },
        {
          id: "part8.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number if you have one.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_129F_FIELD_MAPPINGS,
  requiredDocuments: [
    "Copy of your birth certificate or naturalization certificate",
    "Copy of beneficiary's birth certificate with certified English translation",
    "Copy of beneficiary's passport biographical pages",
    "Evidence of legal termination of any prior marriages (divorce decrees, death certificates)",
    "Two passport-style photos of the beneficiary",
    "Evidence that you met in person within 2 years (photos, travel records, etc.)",
    "Form G-325A (Biographical Information) for both petitioner and beneficiary",
    "Evidence of financial support (Form I-864 Affidavit of Support may be required later)",
  ],
  instructions: [
    "Complete all sections that apply to your situation",
    "Use black ink and print clearly",
    "If you need more space, use Part 8 (Additional Information)",
    "Submit original signatures - photocopies are not acceptable",
    "Include all required supporting documents",
    "Pay the correct filing fee",
  ],
};
const I600_DEFINITION: FormDefinition = {
  id: "i-600",
  code: "I-600",
  name: "Petition to Classify Orphan as an Immediate Relative",
  description:
    "For U.S. citizens adopting orphan children from non-Hague Convention countries",
  category: "family",
  estimatedTime: "90-120 minutes",
  filingFee: 775,
  price: 60,
  sections: [
    {
      id: "part1-petitioner-info",
      title: "Part 1: Information About the U.S. Citizen Petitioner",
      description: "Information about the adoptive parent(s)",
      questions: [
        {
          id: "part1.1.familyName",
          type: "text",
          label: "1. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.2.givenName",
          type: "text",
          label: "2. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.3.middleName",
          type: "text",
          label: "3. Middle Name",
        },
        {
          id: "part1.4.dateOfBirth",
          type: "date",
          label: "4. Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part1.5.countryOfBirth",
          type: "text",
          label: "5. Country of Birth",
          required: true,
        },
        {
          id: "part1.6.citizenship",
          type: "select",
          label: "6. U.S. Citizenship Obtained Through",
          required: true,
          options: [
            { value: "birth-us", label: "Birth in the United States" },
            { value: "naturalization", label: "Naturalization" },
            { value: "parents", label: "Parents" },
          ],
        },
        {
          id: "part1.7.maritalStatus",
          type: "select",
          label: "7. Current Marital Status",
          required: true,
          options: [
            { value: "married", label: "Married" },
            {
              value: "single",
              label: "Single (must be at least 24 years old)",
            },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ],
          helpText: "Must be married or single and at least 24 years old",
        },
      ],
    },
    {
      id: "part1-petitioner-address",
      title: "Part 1: Petitioner Physical Address",
      questions: [
        {
          id: "part1.8.streetNumber",
          type: "text",
          label: "8. Street Number and Name",
          required: true,
        },
        {
          id: "part1.9.city",
          type: "text",
          label: "9. City or Town",
          required: true,
        },
        {
          id: "part1.10.state",
          type: "text",
          label: "10. State",
          required: true,
        },
        {
          id: "part1.11.zipCode",
          type: "text",
          label: "11. ZIP Code",
          required: true,
        },
        {
          id: "part1.12.phone",
          type: "tel",
          label: "12. Daytime Phone Number",
          required: true,
        },
        {
          id: "part1.13.email",
          type: "email",
          label: "13. Email Address (if any)",
        },
      ],
    },
    {
      id: "part2-spouse-info",
      title: "Part 2: Information About Your Spouse (if married)",
      description: "Complete only if you are married",
      questions: [
        {
          id: "part2.1.spouseFamilyName",
          type: "text",
          label: "1. Spouse's Family Name (Last Name)",
          helpText: "If married",
        },
        {
          id: "part2.2.spouseGivenName",
          type: "text",
          label: "2. Spouse's Given Name (First Name)",
          helpText: "If married",
        },
        {
          id: "part2.3.spouseDateOfBirth",
          type: "date",
          label: "3. Spouse's Date of Birth (mm/dd/yyyy)",
          helpText: "If married",
        },
        {
          id: "part2.4.spouseCountryOfBirth",
          type: "text",
          label: "4. Spouse's Country of Birth",
          helpText: "If married",
        },
        {
          id: "part2.5.spouseCitizenship",
          type: "text",
          label: "5. Spouse's Country of Citizenship",
          helpText: "If married",
        },
        {
          id: "part2.6.dateOfMarriage",
          type: "date",
          label: "6. Date of Marriage (mm/dd/yyyy)",
          helpText: "If married",
        },
        {
          id: "part2.7.placeOfMarriage",
          type: "text",
          label: "7. Place of Marriage (City, State/Province, Country)",
          helpText: "If married",
        },
      ],
    },
    {
      id: "part3-prior-marriages",
      title: "Part 3: Information About Prior Marriages",
      description: "Complete for you and your spouse (if applicable)",
      questions: [
        {
          id: "part3.1.petitionerPriorMarriages",
          type: "radio",
          label: "1. Have you been previously married?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part3.2.numberOfPriorMarriages",
          type: "text",
          label: "2. Number of prior marriages",
          helpText: "If yes, how many times?",
        },
        {
          id: "part3.3.priorMarriageEnded",
          type: "select",
          label: "3. How did your most recent prior marriage end?",
          options: [
            { value: "divorce", label: "Divorce" },
            { value: "death", label: "Death of spouse" },
            { value: "annulment", label: "Annulment" },
          ],
          helpText: "If previously married",
        },
        {
          id: "part3.4.spousePriorMarriages",
          type: "radio",
          label: "4. Has your current spouse been previously married?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText: "If currently married",
        },
      ],
    },
    {
      id: "part4-orphan-info",
      title: "Part 4: Information About the Orphan Beneficiary",
      description: "Information about the child you wish to adopt",
      questions: [
        {
          id: "part4.1.childFamilyName",
          type: "text",
          label: "1. Child's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.2.childGivenName",
          type: "text",
          label: "2. Child's Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.3.childMiddleName",
          type: "text",
          label: "3. Child's Middle Name",
        },
        {
          id: "part4.4.childDateOfBirth",
          type: "date",
          label: "4. Child's Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part4.5.childCityOfBirth",
          type: "text",
          label: "5. City or Town of Birth",
          required: true,
        },
        {
          id: "part4.6.childCountryOfBirth",
          type: "text",
          label: "6. Country of Birth",
          required: true,
        },
        {
          id: "part4.7.childGender",
          type: "radio",
          label: "7. Gender",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        {
          id: "part4.8.currentAddress",
          type: "text",
          label: "8. Child's Current Physical Address",
          required: true,
          helpText: "Include street, city, country",
        },
      ],
    },
    {
      id: "part5-orphan-status",
      title: "Part 5: Orphan Status Information",
      description:
        "Information establishing that the child meets the definition of an orphan",
      questions: [
        {
          id: "part5.1.orphanBasis",
          type: "select",
          label: "1. The child is an orphan because:",
          required: true,
          options: [
            { value: "both-deceased", label: "Both parents are deceased" },
            {
              value: "one-deceased-sole",
              label:
                "One parent is deceased, and the surviving parent cannot provide care",
            },
            {
              value: "abandoned",
              label: "Child has been abandoned by both parents",
            },
            {
              value: "separated",
              label: "Child has been separated from both parents",
            },
            {
              value: "unwed-mother",
              label: "Child has an unwed mother who cannot provide care",
            },
          ],
        },
        {
          id: "part5.2.biologicalMotherName",
          type: "text",
          label: "2. Biological Mother's Full Name",
          helpText: "If known",
        },
        {
          id: "part5.3.biologicalMotherStatus",
          type: "select",
          label: "3. Biological Mother's Status",
          options: [
            { value: "deceased", label: "Deceased" },
            {
              value: "living-relinquished",
              label: "Living, relinquished parental rights",
            },
            { value: "living-unable", label: "Living, unable to provide care" },
            { value: "unknown", label: "Unknown" },
          ],
        },
        {
          id: "part5.4.biologicalFatherName",
          type: "text",
          label: "4. Biological Father's Full Name",
          helpText: "If known",
        },
        {
          id: "part5.5.biologicalFatherStatus",
          type: "select",
          label: "5. Biological Father's Status",
          options: [
            { value: "deceased", label: "Deceased" },
            {
              value: "living-relinquished",
              label: "Living, relinquished parental rights",
            },
            { value: "living-unable", label: "Living, unable to provide care" },
            { value: "unknown", label: "Unknown" },
          ],
        },
      ],
    },
    {
      id: "part6-adoption-status",
      title: "Part 6: Adoption and Custody Information",
      description: "Information about adoption or custody of the orphan",
      questions: [
        {
          id: "part6.1.adoptionStatus",
          type: "radio",
          label: "1. Has the child been adopted abroad?",
          required: true,
          options: [
            { value: "yes", label: "Yes - adopted abroad" },
            {
              value: "no-will-adopt-us",
              label: "No - will be adopted in the United States",
            },
            {
              value: "no-custody",
              label:
                "No - have legal custody for adoption in the United States",
            },
          ],
        },
        {
          id: "part6.2.adoptionDate",
          type: "date",
          label: "2. Date of Adoption (if adopted abroad) (mm/dd/yyyy)",
          helpText: "If child has been adopted",
        },
        {
          id: "part6.3.adoptionPlace",
          type: "text",
          label: "3. Place of Adoption (City, Country)",
          helpText: "If child has been adopted",
        },
        {
          id: "part6.4.legalCustodyDate",
          type: "date",
          label:
            "4. Date Legal Custody Granted (if not yet adopted) (mm/dd/yyyy)",
          helpText: "If you have legal custody for U.S. adoption",
        },
        {
          id: "part6.5.stateOfAdoption",
          type: "text",
          label: "5. U.S. State Where Child Will Be Adopted",
          helpText: "If child will be adopted in the United States",
        },
        {
          id: "part6.6.preAdoptionRequirements",
          type: "radio",
          label: "6. Have pre-adoption requirements of the state been met?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "will-meet", label: "Will be met" },
            {
              value: "not-applicable",
              label: "Not applicable (already adopted)",
            },
          ],
        },
      ],
    },
    {
      id: "part7-i600a-approval",
      title: "Part 7: Advanced Processing (Form I-600A)",
      description: "Information about prior Form I-600A approval",
      questions: [
        {
          id: "part7.1.i600aApproved",
          type: "radio",
          label:
            "1. Was Form I-600A (Application for Advance Processing) previously approved?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part7.2.approvalDate",
          type: "date",
          label: "2. Date of I-600A Approval (mm/dd/yyyy)",
          helpText: "If previously approved",
        },
        {
          id: "part7.3.approvalOffice",
          type: "text",
          label: "3. USCIS Office That Approved I-600A",
          helpText: "If previously approved",
        },
        {
          id: "part7.4.homestudyDate",
          type: "date",
          label: "4. Date of Home Study Approval (mm/dd/yyyy)",
          required: true,
          helpText: "Date the favorable home study was completed",
        },
        {
          id: "part7.5.homestudyAgency",
          type: "text",
          label: "5. Name of Home Study Agency",
          required: true,
        },
      ],
    },
    {
      id: "part8-certification",
      title: "Part 8: Petitioner's Certification and Signature",
      description: "Certification of duty of disclosure and signature",
      questions: [
        {
          id: "part8.1.certification",
          type: "checkbox",
          label:
            "I certify that I will care for the orphan properly if admitted to the United States",
          required: true,
        },
        {
          id: "part8.2.dutyOfDisclosure",
          type: "checkbox",
          label:
            "I understand my duty to notify USCIS of any change in circumstances that affects eligibility",
          required: true,
        },
        {
          id: "part8.3.penaltyOfPerjury",
          type: "checkbox",
          label:
            "I certify, under penalty of perjury, that all information in this petition is true and correct",
          required: true,
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "PETITIONER DOCUMENTS:",
    "  - Proof of U.S. citizenship (birth certificate, passport, or naturalization certificate)",
    "  - Copy of marriage certificate (if married)",
    "  - Divorce decrees or death certificates for any prior marriages",
    "  - Favorable home study report from licensed agency (less than 6 months old)",
    "  - Proof of compliance with state pre-adoption requirements",
    "ORPHAN DOCUMENTS:",
    "  - Child's birth certificate",
    "  - Death certificate(s) of deceased parent(s) (if applicable)",
    "  - Relinquishment or consent documents from living parent(s)",
    "  - Evidence child meets orphan definition under U.S. law",
    "  - Adoption decree (if adopted abroad)",
    "  - Legal custody documents (if custody granted for U.S. adoption)",
    "  - Passport-style photograph of child",
    "ADDITIONAL DOCUMENTS:",
    "  - Copy of I-600A approval notice (if previously filed)",
    "  - Evidence of efforts to locate missing parent (if applicable)",
    "  - Translation of all foreign language documents with certification",
  ],
  instructions: [
    "Must be filed by U.S. citizen who is married OR unmarried and at least 24 years old",
    "This form is for NON-HAGUE CONVENTION countries only (for Hague countries, use Form I-800)",
    "Child must be under 16 years old (or under 18 if sibling of child already adopted)",
    "Must have approved home study from licensed adoption agency",
    "Orphan must meet legal definition: both parents deceased, abandoned, or sole/surviving parent unable to provide care",
    "Can file Form I-600A for advance processing before identifying specific child",
    "If adopted abroad, adoption must be full and final",
    "If will adopt in U.S., must show compliance with state pre-adoption requirements",
    "Child will receive immigrant visa and enter U.S. as lawful permanent resident",
    "Child must have medical examination by authorized physician",
  ],
};
const I526_DEFINITION: FormDefinition = {
  id: "i-526",
  code: "I-526",
  name: "Immigrant Petition by Standalone Investor",
  description: "EB-5 investor visa petition for foreign investors",
  category: "work_authorization",
  estimatedTime: "180-240 minutes",
  filingFee: 3675,
  price: 60,
  status: "beta",
  sections: [
    {
      id: "investor-info",
      title: "Investor Information",
      questions: [
        {
          id: "investor.name.last",
          type: "text",
          label: "Legal Last Name",
          required: true,
        },
        {
          id: "investor.name.first",
          type: "text",
          label: "Legal First Name",
          required: true,
        },
        {
          id: "investor.dob",
          type: "date",
          label: "Date of Birth",
          required: true,
        },
        {
          id: "investor.countryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: true,
        },
      ],
    },
    {
      id: "investment-details",
      title: "Investment Details",
      questions: [
        {
          id: "investment.amount",
          type: "text",
          label: "Total Investment Amount",
          required: true,
          placeholder: "$800,000 or $1,050,000",
          helpText: "Minimum $800,000 for TEA, $1,050,000 for standard",
        },
        {
          id: "investment.source",
          type: "textarea",
          label: "Lawful Source of Investment Funds",
          required: true,
          helpText: "Detailed explanation of how funds were obtained",
        },
        {
          id: "investment.businessType",
          type: "text",
          label: "Type of Business Enterprise",
          required: true,
        },
        {
          id: "investment.jobsCreated",
          type: "text",
          label: "Number of Jobs to be Created",
          required: true,
          helpText: "Minimum 10 full-time jobs required",
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "Business plan",
    "Evidence of investment amount",
    "Source of funds documentation",
    "Tax returns and financial statements",
    "Evidence of job creation",
    "Organizational documents",
  ],
  instructions: [],
};
const I589_DEFINITION: FormDefinition = {
  id: "i-589",
  code: "I-589",
  name: "Application for Asylum and for Withholding of Removal",
  description:
    "Apply for asylum protection in the United States based on persecution or fear of persecution",
  category: "humanitarian",
  estimatedTime: "180-240 minutes",
  filingFee: 0,
  price: 60,
  status: "active",
  sections: [
    {
      id: "parta1-about-you",
      title: "Part A.I: Information About You",
      description: "Your personal identifying information",
      questions: [
        {
          id: "partA1.1.alienNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number) (if any)",
          helpText: "Format: A-123456789 or 123456789",
        },
        {
          id: "partA1.2.ssn",
          type: "ssn",
          label: "2. U.S. Social Security Number (if any)",
        },
        {
          id: "partA1.3.familyName",
          type: "text",
          label: "3. Family Name (Last Name)",
          required: true,
        },
        {
          id: "partA1.4.givenName",
          type: "text",
          label: "4. Given Name (First Name)",
          required: true,
        },
        {
          id: "partA1.5.middleName",
          type: "text",
          label: "5. Middle Name",
        },
        {
          id: "partA1.6.otherNamesUsed",
          type: "text",
          label: "6. Other Names Used (include maiden name and aliases)",
          helpText: "List all other names you have ever used",
        },
        {
          id: "partA1.7.dateOfBirth",
          type: "date",
          label: "7. Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "partA1.8.cityOfBirth",
          type: "text",
          label: "8. City and Country of Birth",
          required: true,
        },
        {
          id: "partA1.9.nationality",
          type: "text",
          label: "9. Current Nationality (Citizenship)",
          required: true,
        },
        {
          id: "partA1.10.race",
          type: "text",
          label: "10. Race, Ethnic, or Tribal Group",
          required: true,
        },
        {
          id: "partA1.11.religion",
          type: "text",
          label: "11. Religion",
          required: true,
        },
        {
          id: "partA1.12.gender",
          type: "radio",
          label: "12. Sex/Gender",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
      ],
    },
    {
      id: "parta1-address",
      title: "Part A.I: Address and Contact Information",
      questions: [
        {
          id: "partA1.13.mailingAddress",
          type: "text",
          label: "13. U.S. Mailing Address (Street Number and Name)",
          required: true,
        },
        {
          id: "partA1.14.city",
          type: "text",
          label: "14. City or Town",
          required: true,
        },
        {
          id: "partA1.15.state",
          type: "text",
          label: "15. State",
          required: true,
        },
        {
          id: "partA1.16.zipCode",
          type: "text",
          label: "16. ZIP Code",
          required: true,
        },
        {
          id: "partA1.17.phone",
          type: "tel",
          label: "17. Telephone Number",
          required: true,
        },
        {
          id: "partA1.18.dateOfLastArrival",
          type: "date",
          label: "18. Date of Last Arrival in the U.S. (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "partA1.19.i94Number",
          type: "text",
          label: "19. I-94 Number (if any)",
          helpText: "Find at https://i94.cbp.dhs.gov",
        },
        {
          id: "partA1.20.currentImmigrationStatus",
          type: "text",
          label: "20. Current Immigration Status",
          required: true,
          helpText:
            "e.g., B-2 visitor, F-1 student, entered without inspection",
        },
      ],
    },
    {
      id: "parta2-spouse-children",
      title: "Part A.II: Information About Your Spouse and Children",
      description:
        "List your spouse and all children regardless of age or marital status",
      questions: [
        {
          id: "partA2.1.maritalStatus",
          type: "select",
          label: "1. Current Marital Status",
          required: true,
          options: [
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ],
        },
        {
          id: "partA2.2.spouseName",
          type: "text",
          label: "2. Spouse's Full Name (if married)",
          helpText: "List your spouse even if not applying with you",
        },
        {
          id: "partA2.3.spouseDateOfBirth",
          type: "date",
          label: "3. Spouse's Date of Birth (mm/dd/yyyy)",
          helpText: "If married",
        },
        {
          id: "partA2.4.spouseNationality",
          type: "text",
          label: "4. Spouse's Nationality",
          helpText: "If married",
        },
        {
          id: "partA2.5.spouseLocation",
          type: "text",
          label: "5. Spouse's Current Location",
          helpText: "City and country where spouse currently resides",
        },
        {
          id: "partA2.6.childrenInfo",
          type: "textarea",
          label: "6. Information About All Children",
          helpText:
            "List all children: name, date of birth, nationality, and current location",
        },
      ],
    },
    {
      id: "parta3-background",
      title: "Part A.III: Information About Your Background",
      description: "Residence and travel history",
      questions: [
        {
          id: "partA3.1.lastResidenceAbroad",
          type: "text",
          label: "1. Last Residence Before Coming to the U.S.",
          required: true,
          helpText: "Full address including city and country",
        },
        {
          id: "partA3.2.lastOccupationAbroad",
          type: "text",
          label: "2. Last Occupation Abroad",
          required: true,
        },
        {
          id: "partA3.3.lastEducation",
          type: "text",
          label: "3. Last School Attended",
          helpText: "School name and location",
        },
        {
          id: "partA3.4.languagesSpoken",
          type: "text",
          label: "4. Languages You Speak Fluently",
          required: true,
        },
        {
          id: "partA3.5.traveledToUS",
          type: "textarea",
          label: "5. List All Trips to the U.S.",
          helpText: "Include dates of entry and departure for each trip",
        },
      ],
    },
    {
      id: "partb-asylum-basis",
      title:
        "Part B: Information About Your Application - Why You Are Seeking Asylum",
      description: "The heart of your asylum claim",
      questions: [
        {
          id: "partB.1.applyingFor",
          type: "checkbox",
          label: "I am applying for asylum or withholding of removal",
          required: true,
        },
        {
          id: "partB.2.persecutionGrounds",
          type: "select",
          label:
            "Primary Ground for Asylum (check all that apply in your detailed statement)",
          required: true,
          options: [
            { value: "race", label: "Race" },
            { value: "religion", label: "Religion" },
            { value: "nationality", label: "Nationality" },
            { value: "political-opinion", label: "Political Opinion" },
            {
              value: "particular-social-group",
              label: "Membership in a Particular Social Group",
            },
          ],
          helpText: "Select the main reason you fear persecution",
        },
        {
          id: "partB.3.pastPersecution",
          type: "radio",
          label:
            "1.A. Have you, your family, or close friends or colleagues ever experienced harm or mistreatment in the past?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partB.4.fearFuturePersecution",
          type: "radio",
          label:
            "1.B. Do you fear harm or mistreatment if you return to your home country?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText: 'You must check "Yes" to be eligible for asylum',
        },
        {
          id: "partB.5.detailedExplanation",
          type: "textarea",
          label: "2. Detailed Explanation of Your Asylum Claim",
          required: true,
          helpText:
            "Describe in detail: What happened? When? Where? Who harmed you? Why? How are incidents connected to one of the five protected grounds?",
        },
        {
          id: "partB.6.governmentInvolvement",
          type: "radio",
          label:
            "3. Was the persecution by government officials or people the government cannot or will not control?",
          options: [
            { value: "government", label: "Government officials" },
            { value: "nongovernment", label: "Non-government actors" },
            { value: "both", label: "Both" },
          ],
        },
        {
          id: "partB.7.attemptedRelocation",
          type: "radio",
          label:
            "4. Did you try to relocate within your country before coming to the U.S.?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "partc-additional-info",
      title: "Part C: Additional Information About Your Application",
      description:
        "Prior asylum applications, criminal history, and other important information",
      questions: [
        {
          id: "partC.1.appliedAsylumBefore",
          type: "radio",
          label: "1. Have you ever applied for asylum in any other country?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partC.2.appliedAsylumBeforeDetails",
          type: "textarea",
          label: "2. If yes, provide details (country, date, result)",
          helpText: "If you applied for asylum in another country",
        },
        {
          id: "partC.3.excludableOffenses",
          type: "radio",
          label: "3. Have you ever committed a crime or been arrested?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partC.4.crimeDetails",
          type: "textarea",
          label:
            "4. If yes, provide details of any arrests or criminal convictions",
          helpText: "Include dates, charges, and outcomes",
        },
        {
          id: "partC.5.militaryService",
          type: "radio",
          label: "5. Have you ever served in any military or armed group?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partC.6.terroristOrganization",
          type: "radio",
          label:
            "6. Have you ever been a member of or supported any organization?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText: "Political parties, social groups, or any organizations",
        },
        {
          id: "partC.7.persecutedOthers",
          type: "radio",
          label:
            "7. Have you ever persecuted another person because of their race, religion, nationality, membership in a social group, or political opinion?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partC.8.oneYearDeadline",
          type: "radio",
          label:
            "8. Are you filing within 1 year of your last arrival in the U.S.?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            {
              value: "no",
              label:
                "No - will explain changed circumstances or extraordinary circumstances",
            },
          ],
          helpText:
            "If no, you must explain why you did not file within 1 year",
        },
      ],
    },
    {
      id: "partd-signature",
      title: "Part D: Your Signature",
      description: "Certification and signature",
      questions: [
        {
          id: "partD.1.interpreterUsed",
          type: "radio",
          label: "1. Did someone assist you in completing this application?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "partD.2.assistantName",
          type: "text",
          label: "2. Name of person who helped you (if any)",
          helpText: "Attorney, interpreter, or other preparer",
        },
        {
          id: "partD.3.certification",
          type: "checkbox",
          label:
            "I certify, under penalty of perjury under U.S. law, that this application and the evidence submitted with it are true and correct",
          required: true,
        },
        {
          id: "partD.4.warnings",
          type: "checkbox",
          label:
            "I understand that knowingly making a false statement may result in criminal prosecution and denial of my application",
          required: true,
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "REQUIRED DOCUMENTS:",
    "  - Two identical passport-style photographs taken within 30 days",
    "  - Copy of any immigration documents (passport, I-94, visa, EAD, etc.)",
    "  - Supporting evidence of your claim",
    "HIGHLY RECOMMENDED EVIDENCE:",
    "  - Detailed personal statement describing persecution (attach as supplement)",
    "  - Country condition reports (State Department, Human Rights Watch, Amnesty International)",
    "  - News articles about persecution in your country",
    "  - Witness affidavits from people with knowledge of your situation",
    "  - Medical records or psychological evaluations documenting trauma",
    "  - Police reports, court documents, arrest warrants",
    "  - Membership documents for political party, religious group, or social organization",
    "  - Death certificates or evidence of harm to family members",
    "  - Photos or videos documenting persecution or threats",
    "  - Expert opinions on country conditions",
    "  - Documents showing you are a member of the persecuted group",
  ],
  instructions: [
    "CRITICAL DEADLINE: Must file within 1 year of arriving in the U.S. (unless changed/extraordinary circumstances)",
    "File with USCIS if you are NOT in removal proceedings",
    "File with Immigration Court if you ARE in removal proceedings",
    "Include TWO copies of the complete application (one for your records)",
    "Sign and date the application in blue ink",
    "You may include your spouse and unmarried children under 21 on your application",
    "No filing fee required for Form I-589",
    "Attach all supporting evidence with translations if not in English",
    "Write a detailed personal statement as an attachment - be specific about dates, locations, and perpetrators",
    "Clearly explain how your persecution is connected to one of the five grounds: race, religion, nationality, membership in a particular social group, or political opinion",
    "If you miss the 1-year deadline, you MUST explain changed circumstances in your country OR extraordinary circumstances that prevented timely filing",
    "Apply for employment authorization (Form I-765) 150 days after filing I-589",
    "Attend all asylum interviews and hearings - failure to appear may result in denial",
    "Consult with an immigration attorney if possible - asylum law is complex",
  ],
};
const I730_DEFINITION: FormDefinition = {
  id: "i-730",
  code: "I-730",
  name: "Refugee/Asylee Relative Petition",
  description: "Petition for qualifying family members of refugees or asylees",
  category: "humanitarian",
  estimatedTime: "60-90 minutes",
  filingFee: 0,
  price: 60, // Medium-complex form
  sections: [
    {
      id: "part1-number-of-relatives",
      title: "Part 1: Number of Relatives",
      questions: [
        {
          id: "numberOfRelativesTotalForms",
          type: "text",
          label: "1. Total Number of Forms",
          required: true,
        },
        {
          id: "numberOfRelativesSequence",
          type: "text",
          label: "2. Sequence Number of This Form",
          required: true,
        },
        {
          id: "numberOfRelativesTotal",
          type: "button",
          label: "3. Total Number of Relatives",
          required: true,
        },
      ],
    },
    {
      id: "part1-my-status",
      title: "Part 1: My Status",
      questions: [
        {
          id: "myStatus",
          type: "radio",
          label: "4. My Status (Select one)",
          required: true,
          options: [
            { value: "REF", label: "Refugee" },
            { value: "ASL", label: "Asylee" },
            { value: "LRE", label: "Lawful Resident" },
            { value: "LAS", label: "Lawful Asylee" },
          ],
        },
      ],
    },
    {
      id: "part1-beneficiary-relation",
      title: "Part 1: Beneficiary Relation",
      questions: [
        {
          id: "beneficiaryRelation",
          type: "radio",
          label: "5. Beneficiary Relation (Select one)",
          required: true,
          options: [
            { value: "S", label: "Spouse" },
            { value: "U", label: "Unmarried Child" },
          ],
        },
      ],
    },
    {
      id: "part1-unmarried-child-type",
      title: "Part 1: Unmarried Child Type",
      questions: [
        {
          id: "unmarriedChildType",
          type: "checkbox",
          label: "6. Unmarried Child Type (Select all that apply)",
          required: false,
          options: [
            { value: "BC", label: "Biological Child" },
            { value: "SC", label: "Stepchild" },
            { value: "Other", label: "Other (Specify)" },
          ],
        },
      ],
    },
    {
      id: "part1-personal-information",
      title: "Part 1: Personal Information",
      questions: [
        {
          id: "part1.familyName",
          type: "text",
          label: "7.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.givenName",
          type: "text",
          label: "7.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.middleName",
          type: "text",
          label: "7.c. Middle Name",
          required: false,
        },
      ],
    },
    // {
    //   id: "part1-address",
    //   title: "Part 1: Address",
    //   questions: [
    //     {
    //       id: "part1.cityOrTown",
    //       type: "text",
    //       label: "8.a. City or Town",
    //       required: true,
    //     },
    //     {
    //       id: "part1.province",
    //       type: "text",
    //       label: "8.b. Province",
    //       required: false,
    //     },
    //     {
    //       id: "part1.postalCode",
    //       type: "choice",
    //       label: "8.c. Postal Code",
    //       required: true,
    //     },
    //     {
    //       id: "part1.state",
    //       type: "select",
    //       label: "8.d. State",
    //       required: true,
    //       options: US_STATES,
    //     },
    //     {
    //       id: "part1.streetName",
    //       type: "button",
    //       label: "8.e. Street Name",
    //       required: true,
    //     },
    //     {
    //       id: "part1.unitType",
    //       type: "radio",
    //       label: "8.f. Unit Type (Select one)",
    //       required: false,
    //       options: [
    //         { value: "STE", label: "Suite" },
    //         { value: "APT", label: "Apartment" },
    //         { value: "FLR", label: "Floor" },
    //       ],
    //     },
    //     {
    //       id: "part1.apartmentSuiteFloorNumber",
    //       type: "text",
    //       label: "8.g. Apartment/Suite/Floor Number",
    //       required: false,
    //     },
    //     {
    //       id: "part1.country",
    //       type: "text",
    //       label: "8.h. Country",
    //       required: true,
    //     },
    //   ],
    // },
    {
      id: "part1-address",
      title: "Part 1: Address",
      questions: [
        {
          id: "part1.addressOfResidenceZipCode",
          type: "text",
          label: "1.f. Address of Residence Zip Code",
          required: true,
        },
        {
          id: "part1.cityOrTown",
          type: "text",
          label: "1.d. City or Town",
          required: true,
        },
        {
          id: "part1.zipCode",
          type: "choice",
          label: "1.f. Zip Code",
          required: true,
        },
        {
          id: "part1.state",
          type: "select",
          label: "1.e. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.streetNumberAndName",
          type: "button",
          label: "1.c. Street Number and Name",
          required: true,
        },
        {
          id: "part1.unitType",
          type: "radio",
          label: "1.g. Unit Type",
          required: false,
          options: [
            { value: "STE", label: "Suite" },
            { value: "APT", label: "Apartment" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part1.streetName",
          type: "text",
          label: "8.e. Street Name",
          required: true,
        },
        {
          id: "part1.apartmentSuiteFloorNumber",
          type: "text",
          label: "8.g. Apartment/Suite/Floor Number",
          required: false,
        },
        {
          id: "part1.postalCode",
          type: "text",
          label: "1.i. Postal Code",
          required: false,
        },
        {
          id: "part1.province",
          type: "text",
          label: "1.j. Province",
          required: false,
        },
        {
          id: "part1.country",
          type: "text",
          label: "1.k. Country",
          required: true,
        },
        {
          id: "part1.emailAddress",
          type: "email",
          label: "1.l. Email Address",
          required: false,
        },
        {
          id: "part1.telephoneNumber",
          type: "tel",
          label: "1.m. Telephone Number",
          required: false,
        },
        {
          id: "part1.dateOfBirth",
          type: "date",
          label: "1.n. Date of Birth",
          required: true,
        },
        {
          id: "part1.countryOfBirth",
          type: "text",
          label: "1.o. Country of Birth",
          required: true,
        },
        {
          id: "part1.sex",
          type: "radio",
          label: "1.p. Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part1.countryOfCitizenshipNationality",
          type: "text",
          label: "1.q. Country of Citizenship/Nationality",
          required: true,
        },
        {
          id: "part1.alienRegistrationNumber",
          type: "text",
          label: "1.r. Alien Registration Number",
          required: false,
        },
      ],
    },
    {
      id: "part2-care-of",
      title: "Part 2: In Care Of",
      questions: [
        {
          id: "part2.inCareOfName",
          type: "text",
          label: "2.a. In Care Of Name",
          required: false,
        },
      ],
    },
    {
      id: "attorney-information",
      title: "Attorney Information",
      questions: [
        {
          id: "attorney.stateBarNumber",
          type: "button",
          label: "Attorney State Bar Number",
          required: false,
        },
        {
          id: "attorney.formG28Attached",
          type: "checkbox",
          label: "Form G-28 Attached",
          required: false,
          options: [{ value: "1", label: "Yes" }],
        },
        {
          id: "attorney.volagNumber",
          type: "text",
          label: "Volag Number",
          required: false,
        },
        {
          id: "attorney.uscisOnlineAccountNumber",
          type: "text",
          label: "USCIS Online Account Number",
          required: false,
        },
      ],
    },
    {
      id: "part1-personal-info",
      title: "Part 1: Personal Information",
      questions: [
        {
          id: "part1.usSocialSecurityNumber",
          type: "ssn",
          label: "10. U.S. Social Security Number",
          required: true,
        },
        {
          id: "part1.otherNamesUsed.familyName1",
          type: "text",
          label: "11.a. Other Names Used - Family Name 1",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.givenName1",
          type: "text",
          label: "11.b. Other Names Used - Given Name 1",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.middleName1",
          type: "text",
          label: "11.c. Other Names Used - Middle Name 1",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.familyName2",
          type: "text",
          label: "11.d. Other Names Used - Family Name 2",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.givenName2",
          type: "text",
          label: "11.e. Other Names Used - Given Name 2",
          required: false,
        },
        {
          id: "part1.otherNamesUsed.middleName2",
          type: "text",
          label: "11.f. Other Names Used - Middle Name 2",
          required: false,
        },
        {
          id: "part1.dateOfPresentMarriage",
          type: "date",
          label: "13. Date of Present Marriage",
          required: true,
        },
        {
          id: "part1.currentSpouseLegalName.familyName",
          type: "text",
          label: "12.a. Current Spouse's Legal Name - Family Name",
          required: true,
        },
        {
          id: "part1.currentSpouseLegalName.givenName",
          type: "text",
          label: "12.b. Current Spouse's Legal Name - Given Name",
          required: true,
        },
        {
          id: "part1.currentSpouseLegalName.middleName",
          type: "text",
          label: "12.c. Current Spouse's Legal Name - Middle Name",
          required: false,
        },
        {
          id: "part1.placeOfMarriage.country",
          type: "text",
          label: "14.a. Place of Marriage - Country",
          required: true,
        },
        {
          id: "part1.placeOfMarriage.stateOrProvince",
          type: "select",
          label: "14.b. Place of Marriage - State or Province",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.placeOfMarriage.cityOrTown",
          type: "text",
          label: "14.c. Place of Marriage - City or Town",
          required: true,
        },
        {
          id: "part1.priorSpouseName1.familyName",
          type: "text",
          label: "15.a. Prior Spouse Name 1 - Family Name",
          required: false,
        },
        {
          id: "part1.priorSpouseName1.givenName",
          type: "text",
          label: "15.b. Prior Spouse Name 1 - Given Name",
          required: false,
        },
        {
          id: "part1.priorSpouseName1.middleName",
          type: "text",
          label: "15.c. Prior Spouse Name 1 - Middle Name",
          required: false,
        },
        {
          id: "part1.dateOfPriorMarriageEnded",
          type: "date",
          label: "16. Date Prior Marriage Ended",
          required: false,
        },
        {
          id: "part1.placePreviousMarriageEnded.country",
          type: "text",
          label: "17.a. Place Previous Marriage Ended - Country",
          required: false,
        },
        {
          id: "part1.placePreviousMarriageEnded.stateOrProvince",
          type: "select",
          label: "17.b. Place Previous Marriage Ended - State or Province",
          required: false,
          options: US_STATES,
        },
        {
          id: "part1.placePreviousMarriageEnded.cityOrTown",
          type: "text",
          label: "17.c. Place Previous Marriage Ended - City or Town",
          required: false,
        },
        {
          id: "part1.dateAsyleeStatusGranted",
          type: "date",
          label: "18. Date Asylee Status Granted",
          required: true,
        },
        {
          id: "part1.placeAsyleeStatusGranted.stateOrProvince",
          type: "select",
          label: "19.a. Place Asylee Status Granted - State or Province",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.placeAsyleeStatusGranted.cityOrTown",
          type: "text",
          label: "19.b. Place Asylee Status Granted - City or Town",
          required: true,
        },
        {
          id: "part1.priorSpouseName2.familyName",
          type: "text",
          label: "20.a. Prior Spouse Name 2 - Family Name",
          required: false,
        },
      ],
    },
    {
      id: "part1-prior-spouse-info",
      title: "Part 1: Prior Spouse Information",
      questions: [
        {
          id: "part1.priorSpouse2GivenName",
          type: "text",
          label: "18.a. Prior Spouse 2 Given Name",
          required: true,
        },
        {
          id: "part1.priorSpouse2MiddleName",
          type: "text",
          label: "18.b. Prior Spouse 2 Middle Name",
          required: false,
        },
        {
          id: "part1.datePriorMarriagesEnded",
          type: "date",
          label: "19.a. Date Prior Marriages Ended",
          required: true,
        },
        {
          id: "part1.placePreviousMarriageEndedCountry",
          type: "text",
          label: "19.b. Country Where Previous Marriage Ended",
          required: true,
        },
        {
          id: "part1.placePreviousMarriageEndedStateOrProvince",
          type: "text",
          label: "19.c. State or Province Where Previous Marriage Ended",
          required: false,
        },
        {
          id: "part1.placePreviousMarriageEndedCityTown",
          type: "text",
          label: "19.d. City or Town Where Previous Marriage Ended",
          required: false,
        },
      ],
    },
    {
      id: "part1-refugee-status-info",
      title: "Part 1: Refugee Status Information",
      questions: [
        {
          id: "part1.dateRefugeeStatusApproved",
          type: "date",
          label: "23. Date Refugee Status Approved",
          required: true,
        },
        {
          id: "part1.placeRefugeeStatusApprovedCountry",
          type: "text",
          label: "24.a. Country Where Refugee Status Approved",
          required: true,
        },
        {
          id: "part1.placeRefugeeStatusApprovedStateOrProvince",
          type: "text",
          label: "24.b. State or Province Where Refugee Status Approved",
          required: false,
        },
        {
          id: "part1.placeRefugeeStatusApprovedCityTown",
          type: "text",
          label: "24.c. City or Town Where Refugee Status Approved",
          required: false,
        },
        {
          id: "part1.dateAdmittedAsRefugee",
          type: "date",
          label: "25. Date Admitted as Refugee",
          required: true,
        },
        {
          id: "part1.placeAdmittedAsRefugeeState",
          type: "text",
          label: "26.a. State Where Admitted as Refugee",
          required: false,
        },
        {
          id: "part1.placeAdmittedAsRefugeeCityTown",
          type: "text",
          label: "26.b. City or Town Where Admitted as Refugee",
          required: false,
        },
      ],
    },
    {
      id: "part2-beneficiary-info",
      title: "Part 2: Beneficiary Information",
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
          required: false,
        },
        {
          id: "part2.residenceCity",
          type: "text",
          label: "2.a. Residence City",
          required: true,
        },
        {
          id: "part2.residenceProvince",
          type: "text",
          label: "2.b. Residence Province",
          required: false,
        },
        {
          id: "part2.residencePostalCode",
          type: "text",
          label: "2.c. Residence Postal Code",
          required: true,
        },
        {
          id: "part2.residenceState",
          type: "text",
          label: "2.d. Residence State",
          required: true,
        },
        {
          id: "part2.residenceStreetName",
          type: "text",
          label: "2.e. Residence Street Name",
          required: true,
        },
        {
          id: "part2.residenceUnit",
          type: "text",
          label: "2.f. Residence Unit",
          required: false,
        },
        {
          id: "part2.residenceNumber",
          type: "text",
          label: "2.g. Residence Number",
          required: true,
        },
        {
          id: "part2.residenceApartment",
          type: "text",
          label: "2.h. Residence Apartment",
          required: false,
        },
      ],
    },
    {
      id: "part2-address-of-residence",
      title: "Part 2: Address of Residence",
      questions: [
        {
          id: "part2.addressOfResidenceCountry",
          type: "text",
          label: "2.a. Country",
          required: true,
        },
        {
          id: "part2.addressOfResidenceZipCode",
          type: "text",
          label: "2.b. ZIP Code",
          required: true,
        },
      ],
    },
    {
      id: "part2-contact-information",
      title: "Part 2: Contact Information",
      questions: [
        {
          id: "part2.beneficiaryEmailAddress",
          type: "email",
          label: "3.a. Beneficiary Email Address",
          required: true,
        },
        {
          id: "part2.beneficiaryTelephoneNumber",
          type: "tel",
          label: "3.b. Beneficiary Telephone Number",
          required: true,
        },
      ],
    },
    {
      id: "part2-personal-information",
      title: "Part 2: Personal Information",
      questions: [
        {
          id: "part2.dateOfBirth",
          type: "date",
          label: "4.a. Date of Birth",
          required: true,
        },
        {
          id: "part2.countryOfBirth",
          type: "text",
          label: "4.b. Country of Birth",
          required: true,
        },
        {
          id: "part2.sex",
          type: "radio",
          label: "4.c. Sex",
          required: true,
          options: [
            { value: "1", label: "Male" },
            { value: "2", label: "Female" },
          ],
        },
        {
          id: "part2.countryOfCitizenshipNationality",
          type: "text",
          label: "4.d. Country of Citizenship/Nationality",
          required: true,
        },
      ],
    },
    {
      id: "part2-mailing-address",
      title: "Part 2: Mailing Address",
      questions: [
        {
          id: "part2.mailingAddressCityTown",
          type: "text",
          label: "5.a. City or Town",
          required: true,
        },
        {
          id: "part2.mailingAddressZipCode",
          type: "text",
          label: "5.b. ZIP Code",
          required: true,
        },
        {
          id: "part2.mailingAddressState",
          type: "text",
          label: "5.c. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.mailingAddressInCareOfName",
          type: "text",
          label: "5.d. In Care Of Name",
          required: false,
        },
        {
          id: "part2.mailingAddressStreetNumberName",
          type: "text",
          label: "5.e. Street Number and Name",
          required: true,
        },
        {
          id: "part2.mailingAddressUnit",
          type: "radio",
          label: "5.f. Unit",
          required: false,
          options: [
            { value: "STE", label: "Suite" },
            { value: "APT", label: "Apartment" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part2.mailingAddressAptSteFlrNumber",
          type: "text",
          label: "5.g. Apt./Ste./Flr. Number",
          required: false,
        },
        {
          id: "part2.mailingAddressPostalCode",
          type: "text",
          label: "5.h. Postal Code",
          required: false,
        },
        {
          id: "part2.mailingAddressProvince",
          type: "text",
          label: "5.i. Province",
          required: false,
        },
        {
          id: "part2.mailingAddressCountry",
          type: "text",
          label: "5.j. Country",
          required: true,
        },
      ],
    },
    {
      id: "part2-identification-numbers",
      title: "Part 2: Identification Numbers",
      questions: [
        {
          id: "part2.alienRegistrationNumber",
          type: "text",
          label: "6.a. Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part2.socialSecurityNumber",
          type: "ssn",
          label: "6.b. Social Security Number",
          required: false,
        },
      ],
    },
    {
      id: "part2-other-names-used-1",
      title: "Part 2: Other Names Used",
      questions: [
        {
          id: "part2.otherNamesFamilyName",
          type: "text",
          label: "7.a. Other Names Used - Family Name (Last Name)",
          required: false,
        },
        {
          id: "part2.otherNamesGivenName",
          type: "text",
          label: "7.b. Other Names Used - Given Name (First Name)",
          required: false,
        },
      ],
    },
    {
      id: "part2-other-names-used",
      title: "Part 2: Other Names Used",
      questions: [
        {
          id: "part2.otherNamesUsed.middleName1",
          type: "text",
          label: "11.c. Middle Name 1",
          required: false,
        },
        {
          id: "part2.otherNamesUsed.familyName2",
          type: "text",
          label: "11.d. Family Name 2",
          required: false,
        },
        {
          id: "part2.otherNamesUsed.givenName2",
          type: "text",
          label: "11.e. Given Name 2",
          required: false,
        },
        {
          id: "part2.otherNamesUsed.middleName2",
          type: "text",
          label: "11.f. Middle Name 2",
          required: false,
        },
      ],
    },
    {
      id: "part2-current-marriage",
      title: "Part 2: Current Marriage",
      questions: [
        {
          id: "part2.dateOfPresentMarriage",
          type: "date",
          label: "13. Date of Present Marriage",
          required: true,
        },
        {
          id: "part2.currentSpouse.legalName.familyName",
          type: "text",
          label: "12.a. Current Spouse's Family Name",
          required: true,
        },
        {
          id: "part2.currentSpouse.legalName.givenName",
          type: "text",
          label: "12.b. Current Spouse's Given Name",
          required: true,
        },
        {
          id: "part2.currentSpouse.legalName.middleName",
          type: "text",
          label: "12.c. Current Spouse's Middle Name",
          required: false,
        },
        {
          id: "part2.placeOfMarriage.stateOrProvince",
          type: "select",
          label: "14.b. State or Province of Marriage",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.placeOfMarriage.cityOrTown",
          type: "text",
          label: "14.a. City or Town of Marriage",
          required: true,
        },
      ],
    },
    {
      id: "part2-prior-marriages",
      title: "Part 2: Prior Marriages",
      questions: [
        {
          id: "part2.priorSpouse1.familyName",
          type: "text",
          label: "15.a. Prior Spouse 1 Family Name",
          required: false,
        },
        {
          id: "part2.priorSpouse1.givenName",
          type: "text",
          label: "15.b. Prior Spouse 1 Given Name",
          required: false,
        },
        {
          id: "part2.priorSpouse1.middleName",
          type: "text",
          label: "15.c. Prior Spouse 1 Middle Name",
          required: false,
        },
        {
          id: "part2.placePreviousMarriage1Ended.country",
          type: "text",
          label: "19.a. Country Where Prior Marriage 1 Ended",
          required: false,
        },
        {
          id: "part2.datePriorMarriage1Ended",
          type: "date",
          label: "19.b. Date Prior Marriage 1 Ended",
          required: false,
        },
        {
          id: "part2.placePreviousMarriage1Ended.stateOrProvince",
          type: "select",
          label: "19.c. State or Province Where Prior Marriage 1 Ended",
          required: false,
          options: US_STATES,
        },
        {
          id: "part2.placePreviousMarriage1Ended.cityOrTown",
          type: "text",
          label: "19.d. City or Town Where Prior Marriage 1 Ended",
          required: false,
        },
        {
          id: "part2.priorSpouse2.familyName",
          type: "text",
          label: "20.a. Prior Spouse 2 Family Name",
          required: false,
        },
        {
          id: "part2.priorSpouse2.givenName",
          type: "text",
          label: "20.b. Prior Spouse 2 Given Name",
          required: false,
        },
        {
          id: "part2.priorSpouse2.middleName",
          type: "text",
          label: "20.c. Prior Spouse 2 Middle Name",
          required: false,
        },
        {
          id: "part2.datePriorMarriage2Ended",
          type: "date",
          label: "20.d. Date Prior Marriage 2 Ended",
          required: false,
        },
        {
          id: "part2.placePreviousMarriage2Ended.country",
          type: "text",
          label: "20.e. Country Where Prior Marriage 2 Ended",
          required: false,
        },
        {
          id: "part2.placePreviousMarriage2Ended.stateOrProvince",
          type: "select",
          label: "20.f. State or Province Where Prior Marriage 2 Ended",
          required: false,
          options: US_STATES,
        },
        {
          id: "part2.placePreviousMarriage2Ended.cityOrTown",
          type: "text",
          label: "20.g. City or Town Where Prior Marriage 2 Ended",
          required: false,
        },
      ],
    },
    {
      id: "part2-beneficiary-outside-us",
      title: "Part 2: Beneficiary Outside the U.S.",
      questions: [
        {
          id: "part2.beneficiaryOutsideUS",
          type: "radio",
          label: "Is the beneficiary currently outside the United States?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part2-beneficiary-information",
      title: "Part 2: Beneficiary Information",
      questions: [
        {
          id: "part2.beneficiaryInUS",
          type: "radio",
          label: "Is the beneficiary currently in the United States?",
          required: true,
          options: [
            { value: "A", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
        {
          id: "part2.cityCountry",
          type: "text",
          label: "City and Country of Birth",
          required: true,
        },
        {
          id: "part2.beneficiaryCityTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part2.beneficiaryZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part2.beneficiaryState",
          type: "text",
          label: "State",
          required: true,
        },
        {
          id: "part2.beneficiaryStreetNumberName",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part2.beneficiaryUnitSuite",
          type: "radio",
          label: "Unit Type (Suite)",
          required: false,
          options: [
            { value: "STE", label: "Suite" },
            { value: "APT", label: "Apartment" },
            { value: "FLR", label: "Floor" },
          ],
        },

        {
          id: "part2.beneficiaryUnitNumber",
          type: "text",
          label: "Unit Number",
          required: false,
        },
        {
          id: "part2.beneficiaryPostalCode",
          type: "text",
          label: "Postal Code",
          required: false,
        },
        {
          id: "part2.beneficiaryProvince",
          type: "text",
          label: "Province",
          required: false,
        },
        {
          id: "part2.beneficiaryCountry",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part2.beneficiaryFamilyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryGivenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part2.beneficiaryMiddleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part2.beneficiaryInCareOfName",
          type: "text",
          label: "In Care Of Name",
          required: false,
        },
        {
          id: "part2.placeOfMarriageCountry",
          type: "text",
          label: "Country of Marriage",
          required: true,
        },
        {
          id: "part2.beneficiaryStatusA",
          type: "radio",
          label: "Beneficiary Status A",
          required: true,
          options: [
            { value: "A", label: "Status A" },
            { value: "Off", label: "None" },
          ],
        },
        {
          id: "part2.beneficiaryStatusB",
          type: "text",
          label: "Beneficiary Status B",
          required: false,
        },
      ],
    },
    {
      id: "part2-beneficiary-language",
      title: "Part 2: Beneficiary Language Proficiency",
      questions: [
        {
          id: "part2.beneficiaryFluentInEnglish",
          type: "radio",
          label: "Is the beneficiary fluent in English?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.otherLanguagesSpoken",
          type: "text",
          label: "Other languages spoken by the beneficiary",
          required: false,
        },
      ],
    },
    {
      id: "part2-arrival-information",
      title: "Part 2: Arrival Information",
      questions: [
        {
          id: "part2.dateOfArrival",
          type: "date",
          label: "Date of Arrival",
          required: true,
        },
        {
          id: "part2.placeOfArrivalCity",
          type: "text",
          label: "City of Arrival",
          required: true,
        },
        {
          id: "part2.placeOfArrivalState",
          type: "text",
          label: "State of Arrival",
          required: true,
        },
        {
          id: "part2.passportNumber",
          type: "text",
          label: "Passport Number",
          required: true,
        },
        {
          id: "part2.statusUponArrival",
          type: "text",
          label: "Status Upon Arrival",
          required: true,
        },
        {
          id: "part2.i94Number",
          type: "text",
          label: "I-94 Number",
          required: true,
        },
        {
          id: "part2.dateStatusExpires",
          type: "date",
          label: "Date Status Expires",
          required: true,
        },
        {
          id: "part2.passportExpirationDate",
          type: "date",
          label: "Passport Expiration Date",
          required: true,
        },
        {
          id: "part2.travelDocumentNumber",
          type: "text",
          label: "Travel Document Number",
          required: false,
        },
        {
          id: "part2.travelDocumentExpirationDate",
          type: "date",
          label: "Travel Document Expiration Date",
          required: false,
        },
        {
          id: "part2.countryOfIssuancePassport",
          type: "text",
          label: "Country of Issuance for Passport",
          required: true,
        },
        {
          id: "part2.countryOfIssuanceTravelDocument",
          type: "text",
          label: "Country of Issuance for Travel Document",
          required: false,
        },
        {
          id: "part2.secondDateOfArrival",
          type: "date",
          label: "Second Date of Arrival",
          required: false,
        },
        {
          id: "part2.secondPlaceOfArrivalCity",
          type: "text",
          label: "Second City of Arrival",
          required: false,
        },
        {
          id: "part2.secondPlaceOfArrivalState",
          type: "text",
          label: "Second State of Arrival",
          required: false,
        },
        {
          id: "part2.secondStatusUponArrival",
          type: "text",
          label: "Second Status Upon Arrival",
          required: false,
        },
        {
          id: "part2.secondI94Number",
          type: "text",
          label: "Second I-94 Number",
          required: false,
        },
        {
          id: "part2.secondDateStatusExpires",
          type: "date",
          label: "Second Date Status Expires",
          required: false,
        },
        {
          id: "part2.secondPassportNumber",
          type: "text",
          label: "Second Passport Number",
          required: false,
        },
        {
          id: "part2.secondPassportExpirationDate",
          type: "date",
          label: "Second Passport Expiration Date",
          required: false,
        },
      ],
    },

    {
      id: "part3-filing-deadline",
      title: "Part 3: Two-Year Filing Deadline Explanation",
      questions: [
        {
          id: "part3.twoYearFilingDeadlineExplanation",
          type: "text",
          label: "1. Explanation for Filing After Two-Year Deadline",
          required: true,
        },
        {
          id: "part3.twoYearFilingDeadline",
          type: "date",
          label: "Two-Year Filing Deadline",
          required: true,
        },
      ],
    },
    {
      id: "part2-beneficiary-travel-document",
      title: "Part 2: Beneficiary Travel Document Information",
      questions: [
        {
          id: "part2.beneficiaryTravelDocumentNumber",
          type: "text",
          label: "1. Beneficiary's Travel Document Number",
          required: true,
        },
        {
          id: "part2.beneficiaryTravelDocumentExpirationDate",
          type: "date",
          label: "2. Travel Document Expiration Date",
          required: true,
        },
        {
          id: "part2.beneficiaryCountryOfIssuanceForTravelDocument",
          type: "text",
          label: "3. Country of Issuance for Travel Document",
          required: true,
        },
        {
          id: "part2.beneficiaryCountryOfIssuanceForPassport",
          type: "button",
          label: "4. Country of Issuance for Passport",
          required: true,
        },
      ],
    },
    {
      id: "part5-preparer-information",
      title: "Part 5: Preparer's Information",
      questions: [
        {
          id: "part5.preparerStatement",
          type: "radio",
          label: "1. Preparer's Statement",
          required: true,
          options: [
            { value: "C", label: "Prepared by Preparer" },
            { value: "Off", label: "Not Prepared by Preparer" },
          ],
        },
        {
          id: "part5.preparerName",
          type: "text",
          label: "2. Preparer's Name",
          required: true,
        },
        {
          id: "part5.interpreterLanguage",
          type: "button",
          label: "3. Language Used by Interpreter",
          required: true,
        },
        {
          id: "part5.interpreterStatement",
          type: "radio",
          label: "4. Interpreter's Statement",
          required: true,
          options: [
            { value: "B", label: "Interpreter Used" },
            { value: "Off", label: "Interpreter Not Used" },
          ],
        },
        {
          id: "part5.petitionerStatement",
          type: "radio",
          label: "5. Petitioner's Statement",
          required: true,
          options: [
            { value: "A", label: "Petitioner Prepared" },
            { value: "Off", label: "Petitioner Did Not Prepare" },
          ],
        },
        {
          id: "part5.petitionerEmailAddress",
          type: "email",
          label: "6. Petitioner's Email Address",
          required: true,
        },
        {
          id: "part5.petitionerDaytimeTelephoneNumber",
          type: "tel",
          label: "7. Petitioner's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part5.petitionerMobileTelephoneNumber",
          type: "tel",
          label: "8. Petitioner's Mobile Telephone Number",
          required: true,
        },
      ],
    },
    {
      id: "part6-beneficiary-preparer-information",
      title: "Part 6: Beneficiary's Preparer Information",
      questions: [
        {
          id: "part6.beneficiaryPreparerStatement",
          type: "radio",
          label: "1. Beneficiary's Preparer Statement",
          required: true,
          options: [
            { value: "C", label: "Prepared by Preparer" },
            { value: "Off", label: "Not Prepared by Preparer" },
          ],
        },
        {
          id: "part6.beneficiaryPreparerName",
          type: "text",
          label: "2. Beneficiary's Preparer Name",
          required: true,
        },
        {
          id: "part6.beneficiaryInterpreterLanguage",
          type: "button",
          label: "3. Language Used by Beneficiary's Interpreter",
          required: true,
        },
        {
          id: "part6.beneficiaryInterpreterStatement",
          type: "radio",
          label: "4. Beneficiary's Interpreter Statement",
          required: true,
          options: [
            { value: "B", label: "Interpreter Used" },
            { value: "Off", label: "Interpreter Not Used" },
          ],
        },
        {
          id: "part6.beneficiaryStatement",
          type: "radio",
          label: "5. Beneficiary's Statement",
          required: true,
          options: [
            { value: "A", label: "Beneficiary Prepared" },
            { value: "Off", label: "Beneficiary Did Not Prepare" },
          ],
        },
        {
          id: "part6.beneficiaryEmailAddress",
          type: "email",
          label: "6. Beneficiary's Email Address",
          required: true,
        },
        {
          id: "part6.beneficiaryDaytimeTelephoneNumber",
          type: "tel",
          label: "7. Beneficiary's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part6.beneficiaryMobileTelephoneNumber",
          type: "tel",
          label: "8. Beneficiary's Mobile Telephone Number",
          required: true,
        },
      ],
    },
    {
      id: "part7-interpreter-information",
      title: "Part 7: Interpreter's Information",
      questions: [
        {
          id: "part7.interpreterFamilyName",
          type: "text",
          label: "1.a. Interpreter's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part7.interpreterGivenName",
          type: "text",
          label: "1.b. Interpreter's Given Name (First Name)",
          required: true,
        },
        {
          id: "part7.interpreterBusinessName",
          type: "text",
          label: "2. Interpreter's Business or Organization Name",
          required: false,
        },
        {
          id: "part7.interpreterStreetName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
        },
        {
          id: "part7.interpreterUnit",
          type: "radio",
          label: "3.b. Suite/Unit",
          required: false,
          options: [
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
            { value: "APT", label: "Apartment" },
          ],
        },

        {
          id: "part7.interpreterApartmentNumber",
          type: "text",
          label: "3.d. Apartment Number",
          required: false,
        },

        {
          id: "part7.interpreterCity",
          type: "text",
          label: "3.f. City or Town",
          required: true,
        },
        {
          id: "part7.interpreterState",
          type: "select",
          label: "3.g. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part7.interpreterProvince",
          type: "text",
          label: "3.h. Province",
          required: false,
        },
        {
          id: "part7.interpreterPostalCode",
          type: "text",
          label: "3.i. Postal Code",
          required: false,
        },
        {
          id: "part7.interpreterCountry",
          type: "text",
          label: "3.j. Country",
          required: true,
        },
        {
          id: "part7.interpreterZipCode",
          type: "text",
          label: "3.k. ZIP Code",
          required: true,
        },
        {
          id: "part7.interpreterEmailAddress",
          type: "email",
          label: "4. Interpreter's Email Address",
          required: true,
        },
        {
          id: "part7.interpreterDaytimeTelephone",
          type: "tel",
          label: "5. Interpreter's Daytime Telephone Number",
          required: true,
        },
        {
          id: "part7.interpreterMobileTelephone",
          type: "tel",
          label: "6. Interpreter's Mobile Telephone Number",
          required: false,
        },
        {
          id: "part7.interpreterLanguage",
          type: "text",
          label: "7. Language Used to Interpret",
          required: true,
        },
      ],
    },
    {
      id: "part8-preparer-information",
      title: "Part 8: Preparer's Information",
      questions: [
        {
          id: "part8.preparerFamilyName",
          type: "text",
          label: "1.a. Preparer's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part8.preparerGivenName",
          type: "text",
          label: "1.b. Preparer's Given Name (First Name)",
          required: true,
        },
      ],
    },
    {
      id: "part8-preparers-address",
      title: "Part 8: Preparer's Address",
      questions: [
        {
          id: "part8.preparersPostalCode",
          type: "text",
          label: "3. Postal Code",
          required: true,
        },
        {
          id: "part8.preparersState",
          type: "select",
          label: "3.b. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part8.preparersStreetName",
          type: "text",
          label: "3.c. Street Name",
          required: true,
        },
        {
          id: "part8.preparersUnit",
          type: "radio",
          label: "3.d. Preparers Unit",
          required: false,
          options: [
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
            { value: "APT", label: "Apartment" },
          ],
        },

        {
          id: "part8.preparersApartmentNumber",
          type: "button",
          label: "3.f. Apartment Number",
          required: false,
        },

        {
          id: "part8.preparersCountry",
          type: "text",
          label: "3.h. Country",
          required: true,
        },
        {
          id: "part8.preparersZipCode",
          type: "text",
          label: "3.i. Zip Code",
          required: true,
        },
      ],
    },
    {
      id: "part8-preparers-contact",
      title: "Part 8: Preparer's Contact Information",
      questions: [
        {
          id: "part8.preparersEmailAddress",
          type: "email",
          label: "6. Email Address",
          required: true,
        },
        {
          id: "part8.preparersDaytimeTelephone",
          type: "tel",
          label: "4. Daytime Telephone Number",
          required: true,
        },
        {
          id: "part8.preparersMobileTelephone",
          type: "text",
          label: "5. Mobile Telephone Number",
          required: false,
        },
      ],
    },
    {
      id: "part8-preparers-statement",
      title: "Part 8: Preparer's Statement",
      questions: [
        {
          id: "part8.preparersStatement",
          type: "radio",
          label: "7. Preparer's Statement",
          required: true,
          options: [
            {
              value: "A",
              label:
                "I am not an attorney or accredited representative but have prepared this form at the request of the applicant.",
            },
            {
              value: "Off",
              label:
                "I am an attorney or accredited representative and my representation does not extend beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part8.preparersAttorneyStatement",
          type: "radio",
          label: "8. Preparer's Attorney Statement",
          required: false,
          options: [
            {
              value: "A",
              label:
                "I am an attorney or accredited representative and my representation extends beyond the preparation of this form.",
            },
            {
              value: "Off",
              label:
                "My representation does not extend beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part8.preparersRepresentationDoesNotExtend",
          type: "radio",
          label: "9. Representation Does Not Extend",
          required: false,
          options: [
            {
              value: "A",
              label:
                "My representation does not extend beyond the preparation of this form.",
            },
            {
              value: "Off",
              label:
                "My representation extends beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part8.preparersRepresentationExtends",
          type: "radio",
          label: "10. Representation Extends",
          required: false,
          options: [
            {
              value: "A",
              label:
                "My representation extends beyond the preparation of this form.",
            },
            {
              value: "Off",
              label:
                "My representation does not extend beyond the preparation of this form.",
            },
          ],
        },
      ],
    },

    {
      id: "part9-beneficiary-travel",
      title: "Part 9: Beneficiary Travel Approval",
      questions: [
        {
          id: "part9.beneficiaryApprovedForTravel",
          type: "checkbox",
          label: "2. Beneficiary Approved for Travel",
          required: false,
          options: [{ value: "1", label: "Approved" }],
        },
      ],
    },
    {
      id: "part8-petition-return",
      title: "Part 8: Petition Return",
      questions: [
        {
          id: "part8.petitionReturnedToServiceCenter",
          type: "checkbox",
          label: "1. Petition Returned to Service Center",
          required: false,
          options: [{ value: "1", label: "Returned" }],
        },
      ],
    },
    {
      id: "part8-admission-code",
      title: "Part 8: Admission Code",
      questions: [
        {
          id: "part8.admissionCode",
          type: "text",
          label: "2. Admission Code",
          required: true,
        },
      ],
    },
    {
      id: "part9-cbp-action",
      title: "Part 9: CBP Action Block",
      questions: [
        {
          id: "part9.cbpActionBlock",
          type: "text",
          label: "3. CBP Action Block",
          required: true,
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "Copy of asylum approval notice",
    "Birth certificate",
    "Marriage certificate (if applicable)",
    "Passport photos",
  ],
  instructions: [
    "Must file within 2 years of asylum grant",
    "Relationship must have existed before asylum grant",
  ],
};
const I9_DEFINITION: FormDefinition = {
  id: "i-9",
  code: "I-9",
  name: "Employment Eligibility Verification",
  description: "Verify employee authorization to work in the United States",
  category: "work_authorization",
  estimatedTime: "15-20 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "section1-employee-info",
      title: "Section 1: Employee Information and Attestation",
      description: "To be completed by employee on first day of work",
      questions: [
        {
          id: "section1.lastName",
          type: "text",
          label: "Last Name (Family Name)",
          required: true,
          helpText: "Employees with two last names must include both names",
        },
        {
          id: "section1.firstName",
          type: "text",
          label: "First Name (Given Name)",
          required: true,
          helpText: "Employees with two first names should include both",
        },
        {
          id: "section1.middleInitial",
          type: "text",
          label: "Middle Initial",
        },
        {
          id: "section1.otherLastNames",
          type: "text",
          label: "Other Last Names Used (if any)",
          helpText: "Include maiden name or any other legal last names",
        },
        {
          id: "section1.streetAddress",
          type: "text",
          label: "Address (Street Number and Name)",
          required: true,
        },
        {
          id: "section1.aptNumber",
          type: "text",
          label: "Apt. Number",
        },
        {
          id: "section1.city",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "section1.state",
          type: "text",
          label: "State",
          required: true,
        },
        {
          id: "section1.zipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "section1.dateOfBirth",
          type: "date",
          label: "Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "section1.ssn",
          type: "ssn",
          label: "U.S. Social Security Number",
          helpText: "Optional unless employer participates in E-Verify",
        },
        {
          id: "section1.email",
          type: "email",
          label: "Employee's Email Address",
          helpText: "Optional",
        },
        {
          id: "section1.telephone",
          type: "tel",
          label: "Employee's Telephone Number",
          helpText: "Optional",
        },
      ],
    },
    {
      id: "section1-citizenship-status",
      title: "Section 1: Citizenship/Immigration Status Attestation",
      description: "Check one of the following boxes",
      questions: [
        {
          id: "section1.citizenshipStatus",
          type: "radio",
          label:
            "I attest, under penalty of perjury, that I am (check one of the following boxes):",
          required: true,
          options: [
            { value: "citizen", label: "1. A citizen of the United States" },
            {
              value: "noncitizen-national",
              label: "2. A noncitizen national of the United States",
            },
            { value: "lpr", label: "3. A lawful permanent resident" },
            {
              value: "alien-authorized",
              label: "4. An alien authorized to work",
            },
          ],
        },
        {
          id: "section1.workAuthorizationExpiration",
          type: "date",
          label: "Employment Authorization Expiration Date (if any)",
          helpText:
            "mm/dd/yyyy - Only if you checked box 4 (alien authorized to work)",
          dependsOn: {
            id: "section1.citizenshipStatus",
            value: "alien-authorized",
          },
        },
        {
          id: "section1.uscisANumber",
          type: "text",
          label: "USCIS A-Number",
          helpText: "For lawful permanent resident or alien authorized to work",
          dependsOn: {
            id: "section1.citizenshipStatus",
            operator: "in",
            value: ["lpr", "alien-authorized"],
          },
        },
        {
          id: "section1.i94Number",
          type: "text",
          label: "Form I-94 Admission Number",
          helpText: "Alternative to A-Number for alien authorized to work",
          dependsOn: {
            id: "section1.citizenshipStatus",
            value: "alien-authorized",
          },
        },
        {
          id: "section1.foreignPassportNumber",
          type: "text",
          label: "Foreign Passport Number and Country of Issuance",
          helpText: "Format: PassportNumber, Country",
          dependsOn: {
            id: "section1.citizenshipStatus",
            value: "alien-authorized",
          },
        },
      ],
    },

    {
      id: "section2-documents",
      title: "Section 2: Documents Presented",
      description: "Document information for List A or List B + C",
      questions: [
        {
          id: "section2.documentType",
          type: "radio",
          label: "Document Type Presented",
          required: true,
          options: [
            { value: "listA", label: "List A (single document)" },
            { value: "listBAndC", label: "List B + List C (two documents)" },
          ],
        },
        // List A Document
        {
          id: "section2.listA.documentTitle",
          type: "text",
          label: "List A - Document Title",
          dependsOn: { id: "section2.documentType", value: "listA" },
        },
        {
          id: "section2.listA.issuingAuthority",
          type: "text",
          label: "List A - Issuing Authority",
          dependsOn: { id: "section2.documentType", value: "listA" },
        },
        {
          id: "section2.listA.documentNumber",
          type: "text",
          label: "List A - Document Number",
          dependsOn: { id: "section2.documentType", value: "listA" },
        },
        {
          id: "section2.listA.expirationDate",
          type: "date",
          label: "List A - Expiration Date (if any)",
          dependsOn: { id: "section2.documentType", value: "listA" },
        },
        // List B Document
        {
          id: "section2.listB.documentTitle",
          type: "text",
          label: "List B - Document Title",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listB.issuingAuthority",
          type: "text",
          label: "List B - Issuing Authority",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listB.documentNumber",
          type: "text",
          label: "List B - Document Number",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listB.expirationDate",
          type: "date",
          label: "List B - Expiration Date (if any)",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        // List C Document
        {
          id: "section2.listC.documentTitle",
          type: "text",
          label: "List C - Document Title",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listC.issuingAuthority",
          type: "text",
          label: "List C - Issuing Authority",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listC.documentNumber",
          type: "text",
          label: "List C - Document Number",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.listC.expirationDate",
          type: "date",
          label: "List C - Expiration Date (if any)",
          dependsOn: { id: "section2.documentType", value: "listBAndC" },
        },
        {
          id: "section2.additionalInformation",
          type: "textarea",
          label: "Additional Information",
          helpText: "Optional - for notes about extensions or discrepancies",
        },
        {
          id: "section2.alternativeProcedure",
          type: "checkbox",
          label: "Used alternative procedure authorized by DHS",
          helpText:
            "Check if you used DHS-authorized remote document examination",
        },
      ],
    },

    {
      id: "section1-preparer-translator",
      title: "Section 1: Preparer/Translator Information",
      description: "Complete for each preparer/translator (up to 4)",
      questions: [
        {
          id: "preparer1.lastName",
          type: "text",
          label: "Preparer 1 Last Name (Family Name)",
        },
        {
          id: "preparer1.firstName",
          type: "text",
          label: "Preparer 1 First Name (Given Name)",
        },
        {
          id: "preparer1.middleInitial",
          type: "text",
          label: "Preparer 1 Middle Initial",
        },
        {
          id: "preparer1.streetAddress",
          type: "text",
          label: "Preparer 1 Address (Street Number and Name)",
        },
        {
          id: "preparer1.city",
          type: "text",
          label: "Preparer 1 City or Town",
        },
        {
          id: "preparer1.state",
          type: "select",
          label: "Preparer 1 State",
          options: US_STATES,
        },
        { id: "preparer1.zipCode", type: "text", label: "Preparer 1 ZIP Code" },
        { id: "preparer1.date", type: "date", label: "Preparer 1 Date" },
        {
          id: "preparer2.lastName",
          type: "text",
          label: "Preparer 2 Last Name (Family Name)",
        },
        {
          id: "preparer2.firstName",
          type: "text",
          label: "Preparer 2 First Name (Given Name)",
        },
        {
          id: "preparer2.middleInitial",
          type: "text",
          label: "Preparer 2 Middle Initial",
        },
        {
          id: "preparer2.streetAddress",
          type: "text",
          label: "Preparer 2 Address (Street Number and Name)",
        },
        {
          id: "preparer2.city",
          type: "text",
          label: "Preparer 2 City or Town",
        },
        {
          id: "preparer2.state",
          type: "select",
          label: "Preparer 2 State",
          options: US_STATES,
        },
        { id: "preparer2.zipCode", type: "text", label: "Preparer 2 ZIP Code" },
        { id: "preparer2.date", type: "date", label: "Preparer 2 Date" },
        {
          id: "preparer3.lastName",
          type: "text",
          label: "Preparer 3 Last Name (Family Name)",
        },
        {
          id: "preparer3.firstName",
          type: "text",
          label: "Preparer 3 First Name (Given Name)",
        },
        {
          id: "preparer3.middleInitial",
          type: "text",
          label: "Preparer 3 Middle Initial",
        },
        {
          id: "preparer3.streetAddress",
          type: "text",
          label: "Preparer 3 Address (Street Number and Name)",
        },
        {
          id: "preparer3.city",
          type: "text",
          label: "Preparer 3 City or Town",
        },
        {
          id: "preparer3.state",
          type: "select",
          label: "Preparer 3 State",
          options: US_STATES,
        },
        { id: "preparer3.zipCode", type: "text", label: "Preparer 3 ZIP Code" },
        { id: "preparer3.date", type: "date", label: "Preparer 3 Date" },
        {
          id: "preparer4.lastName",
          type: "text",
          label: "Preparer 4 Last Name (Family Name)",
        },
        {
          id: "preparer4.firstName",
          type: "text",
          label: "Preparer 4 First Name (Given Name)",
        },
        {
          id: "preparer4.middleInitial",
          type: "text",
          label: "Preparer 4 Middle Initial",
        },
        {
          id: "preparer4.streetAddress",
          type: "text",
          label: "Preparer 4 Address (Street Number and Name)",
        },
        {
          id: "preparer4.city",
          type: "text",
          label: "Preparer 4 City or Town",
        },
        {
          id: "preparer4.state",
          type: "select",
          label: "Preparer 4 State",
          options: US_STATES,
        },
        { id: "preparer4.zipCode", type: "text", label: "Preparer 4 ZIP Code" },
        { id: "preparer4.date", type: "date", label: "Preparer 4 Date" },
      ],
    },
    {
      id: "section2-employer-info",
      title: "Section 2: Employer Information",
      description: "Employer or authorized representative completes",
      questions: [
        {
          id: "section2.firstDayOfEmployment",
          type: "date",
          label: "Employee's First Day of Employment (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "section2.employerNameTitle",
          type: "text",
          label:
            "Last Name, First Name and Title of Employer or Authorized Representative",
          required: true,
        },

        {
          id: "section2.employerDate",
          type: "date",
          label: "Today's Date (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "section2.employerBusinessName",
          type: "text",
          label: "Employer's Business or Organization Name",
          required: true,
        },
        {
          id: "section2.employerAddress",
          type: "text",
          label: "Employer's Business or Organization Address",
          required: true,
          helpText: "Street Number and Name, City or Town, State, ZIP Code",
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "EMPLOYEE MUST PRESENT (choose one):",
    "Option 1: ONE document from List A (establishes both identity and employment authorization):",
    "  - U.S. Passport or U.S. Passport Card",
    "  - Permanent Resident Card or Alien Registration Receipt Card (Form I-551)",
    "  - Foreign passport with Form I-94 or I-94A with Arrival-Departure Record",
    "  - Employment Authorization Document (Form I-766)",
    "Option 2: ONE document from List B (establishes identity) AND ONE document from List C (establishes employment authorization):",
    "List B (Identity):",
    "  - Driver's license or ID card with photo issued by state or outlying possession",
    "  - ID card issued by federal, state, or local government with photo",
    "  - School ID card with photo",
    "  - Voter registration card",
    "  - U.S. Military card or draft record",
    "List C (Employment Authorization):",
    "  - Social Security Account Number card (unrestricted)",
    "  - U.S. birth certificate or birth abroad certificate",
    "  - Native American tribal document",
    "  - U.S. Citizen ID Card (Form I-197)",
    "  - Employment authorization document issued by DHS",
  ],
  instructions: [
    "SECTION 1: Employee must complete Section 1 no later than first day of employment",
    "SECTION 2: Employer must complete Section 2 within 3 business days of employee's first day of work",
    "Employees must present original unexpired documents (no photocopies)",
    "Employers must physically examine the documents and verify they appear genuine and relate to the employee",
    "If employee provides List A document, do NOT complete List B and C",
    "If employee provides List B and C documents, both must be completed",
    "List B documents must include a photograph if employer participates in E-Verify",
    "Retain Form I-9 for 3 years after hire date OR 1 year after employment ends, whichever is later",
    "Form I-9 is NOT filed with USCIS - employer keeps it on file for inspection",
    "Forms can be stored electronically or in paper format",
  ],
};
const I_90_DEFINITION: FormDefinition = {
  id: "i-90",
  code: "I-90",
  name: "Application to Replace Permanent Resident Card",
  description:
    "Use this form to apply for a replacement Permanent Resident Card (Green Card) if your card has been lost, stolen, destroyed, or contains incorrect information.",
  category: "other",
  estimatedTime: "45-60 minutes",
  filingFee: 540,
  price: 60,
  sections: [
    {
      id: "part1",
      title: "Part 1. Information About You",
      description: "Provide your personal information and contact details",
      questions: [
        {
          id: "part1.line1.aliennumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
          placeholder: "Enter your 8 or 9 digit A-Number",
        },
        {
          id: "part1.line2.acctidentifier",
          type: "text",
          label: "USCIS Online Account Number (if any)",
          required: false,
          placeholder: "Enter your USCIS online account number",
        },
        {
          id: "part1.line3a.familyname",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
          placeholder: "Enter your family name",
        },
        {
          id: "part1.line3b.givenname",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
          placeholder: "Enter your given name",
        },
        {
          id: "part1.line3c.middlename",
          type: "text",
          label: "Middle Name",
          required: false,
          placeholder: "Enter your middle name (if any)",
        },
      ],
    },

    {
      id: "part1-name-change",
      title: "Name Change Information",
      description:
        "Complete this section only if your name has legally changed",
      questions: [
        {
          id: "part1.line5a.familyname",
          type: "text",
          label: "Previous Family Name (Last Name)",
          required: false,
          placeholder: "Enter your previous family name",
        },
        {
          id: "part1.line5b.givenname",
          type: "text",
          label: "Previous Given Name (First Name)",
          required: false,
          placeholder: "Enter your previous given name",
        },
        {
          id: "part1.line5c.middlename",
          type: "text",
          label: "Previous Middle Name",
          required: false,
          placeholder: "Enter your previous middle name",
        },
      ],
    },
    {
      id: "part1-mailing-address",
      title: "Mailing Address",
      description: "Provide your current mailing address",
      questions: [
        {
          id: "part1.line6a.incareofname",
          type: "text",
          label: "In Care Of Name (if any)",
          required: false,
          placeholder: "Enter in care of name",
        },
        {
          id: "part1.line6b.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: true,
          placeholder: "Enter street number and name",
        },
        {
          id: "part1.mailingUnitType",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.line6c.aptsteflrnumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
          required: false,
          placeholder: "Enter unit number",
        },
        {
          id: "part1.line6d.cityortown",
          type: "text",
          label: "City or Town",
          required: true,
          placeholder: "Enter city or town",
        },
        {
          id: "part1.line6e.state",
          type: "select",
          label: "State",
          required: true,
          options: [
            { value: "", label: "Select State" },
            { value: "AL", label: "Alabama" },
            { value: "AK", label: "Alaska" },
            { value: "AZ", label: "Arizona" },
            { value: "AR", label: "Arkansas" },
            { value: "CA", label: "California" },
            { value: "CO", label: "Colorado" },
            { value: "CT", label: "Connecticut" },
            { value: "DE", label: "Delaware" },
            { value: "DC", label: "District of Columbia" },
            { value: "FL", label: "Florida" },
            { value: "GA", label: "Georgia" },
            { value: "HI", label: "Hawaii" },
            { value: "ID", label: "Idaho" },
            { value: "IL", label: "Illinois" },
            { value: "IN", label: "Indiana" },
            { value: "IA", label: "Iowa" },
            { value: "KS", label: "Kansas" },
            { value: "KY", label: "Kentucky" },
            { value: "LA", label: "Louisiana" },
            { value: "ME", label: "Maine" },
            { value: "MD", label: "Maryland" },
            { value: "MA", label: "Massachusetts" },
            { value: "MI", label: "Michigan" },
            { value: "MN", label: "Minnesota" },
            { value: "MS", label: "Mississippi" },
            { value: "MO", label: "Missouri" },
            { value: "MT", label: "Montana" },
            { value: "NE", label: "Nebraska" },
            { value: "NV", label: "Nevada" },
            { value: "NH", label: "New Hampshire" },
            { value: "NJ", label: "New Jersey" },
            { value: "NM", label: "New Mexico" },
            { value: "NY", label: "New York" },
            { value: "NC", label: "North Carolina" },
            { value: "ND", label: "North Dakota" },
            { value: "OH", label: "Ohio" },
            { value: "OK", label: "Oklahoma" },
            { value: "OR", label: "Oregon" },
            { value: "PA", label: "Pennsylvania" },
            { value: "RI", label: "Rhode Island" },
            { value: "SC", label: "South Carolina" },
            { value: "SD", label: "South Dakota" },
            { value: "TN", label: "Tennessee" },
            { value: "TX", label: "Texas" },
            { value: "UT", label: "Utah" },
            { value: "VT", label: "Vermont" },
            { value: "VA", label: "Virginia" },
            { value: "WA", label: "Washington" },
            { value: "WV", label: "West Virginia" },
            { value: "WI", label: "Wisconsin" },
            { value: "WY", label: "Wyoming" },
            { value: "AA", label: "Armed Forces Americas" },
            { value: "AE", label: "Armed Forces Europe" },
            { value: "AP", label: "Armed Forces Pacific" },
            { value: "AS", label: "American Samoa" },
            { value: "FM", label: "Federated States of Micronesia" },
            { value: "GU", label: "Guam" },
            { value: "MH", label: "Marshall Islands" },
            { value: "MP", label: "Northern Mariana Islands" },
            { value: "PW", label: "Palau" },
            { value: "PR", label: "Puerto Rico" },
            { value: "VI", label: "Virgin Islands" },
          ],
        },

        {
          id: "part1.line6f.zipcode",
          type: "text",
          label: "ZIP Code",
          required: true,
          placeholder: "Enter ZIP code",
        },
        {
          id: "part1.line6g.province",
          type: "text",
          label: "Province (if outside U.S.)",
          required: false,
          placeholder: "Enter province",
        },
        {
          id: "part1.line6h.postalcode",
          type: "text",
          label: "Postal Code (if outside U.S.)",
          required: false,
          placeholder: "Enter postal code",
        },
        {
          id: "part1.line6i.country",
          type: "text",
          label: "Country (if outside U.S.)",
          required: false,
          placeholder: "Enter country",
        },
      ],
    },
    {
      id: "part1-physical-address",
      title: "Physical Address (if different)",
      description:
        "Provide your physical address if different from mailing address",
      questions: [
        {
          id: "part1.line7a.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: false,
          placeholder: "Enter street number and name",
        },
        {
          id: "part1.physicalUnitType",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.line7b.aptsteflrnumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
          required: false,
          placeholder: "Enter unit number",
        },
        {
          id: "part1.line7c.cityortown",
          type: "text",
          label: "City or Town",
          required: false,
          placeholder: "Enter city or town",
        },
        {
          id: "part1.line7d.state",
          type: "select",
          label: "State",
          required: false,
          options: [
            { value: "", label: "Select State" },
            { value: "AL", label: "Alabama" },
            { value: "AK", label: "Alaska" },
            { value: "AZ", label: "Arizona" },
            { value: "AR", label: "Arkansas" },
            { value: "CA", label: "California" },
            { value: "CO", label: "Colorado" },
            { value: "CT", label: "Connecticut" },
            { value: "DE", label: "Delaware" },
            { value: "DC", label: "District of Columbia" },
            { value: "FL", label: "Florida" },
            { value: "GA", label: "Georgia" },
            { value: "HI", label: "Hawaii" },
            { value: "ID", label: "Idaho" },
            { value: "IL", label: "Illinois" },
            { value: "IN", label: "Indiana" },
            { value: "IA", label: "Iowa" },
            { value: "KS", label: "Kansas" },
            { value: "KY", label: "Kentucky" },
            { value: "LA", label: "Louisiana" },
            { value: "ME", label: "Maine" },
            { value: "MD", label: "Maryland" },
            { value: "MA", label: "Massachusetts" },
            { value: "MI", label: "Michigan" },
            { value: "MN", label: "Minnesota" },
            { value: "MS", label: "Mississippi" },
            { value: "MO", label: "Missouri" },
            { value: "MT", label: "Montana" },
            { value: "NE", label: "Nebraska" },
            { value: "NV", label: "Nevada" },
            { value: "NH", label: "New Hampshire" },
            { value: "NJ", label: "New Jersey" },
            { value: "NM", label: "New Mexico" },
            { value: "NY", label: "New York" },
            { value: "NC", label: "North Carolina" },
            { value: "ND", label: "North Dakota" },
            { value: "OH", label: "Ohio" },
            { value: "OK", label: "Oklahoma" },
            { value: "OR", label: "Oregon" },
            { value: "PA", label: "Pennsylvania" },
            { value: "RI", label: "Rhode Island" },
            { value: "SC", label: "South Carolina" },
            { value: "SD", label: "South Dakota" },
            { value: "TN", label: "Tennessee" },
            { value: "TX", label: "Texas" },
            { value: "UT", label: "Utah" },
            { value: "VT", label: "Vermont" },
            { value: "VA", label: "Virginia" },
            { value: "WA", label: "Washington" },
            { value: "WV", label: "West Virginia" },
            { value: "WI", label: "Wisconsin" },
            { value: "WY", label: "Wyoming" },
            { value: "AA", label: "Armed Forces Americas" },
            { value: "AE", label: "Armed Forces Europe" },
            { value: "AP", label: "Armed Forces Pacific" },
            { value: "AS", label: "American Samoa" },
            { value: "FM", label: "Federated States of Micronesia" },
            { value: "GU", label: "Guam" },
            { value: "MH", label: "Marshall Islands" },
            { value: "MP", label: "Northern Mariana Islands" },
            { value: "PW", label: "Palau" },
            { value: "PR", label: "Puerto Rico" },
            { value: "VI", label: "Virgin Islands" },
          ],
        },
        {
          id: "part1.line7e.zipcode",
          type: "text",
          label: "ZIP Code",
          required: false,
          placeholder: "Enter ZIP code",
        },
        {
          id: "part1.line7f.province",
          type: "text",
          label: "Province (if outside U.S.)",
          required: false,
          placeholder: "Enter province",
        },
        {
          id: "part1.line7g.postalcode",
          type: "text",
          label: "Postal Code (if outside U.S.)",
          required: false,
          placeholder: "Enter postal code",
        },
        {
          id: "part1.line7h.country",
          type: "text",
          label: "Country (if outside U.S.)",
          required: false,
          placeholder: "Enter country",
        },
      ],
    },
    {
      id: "part1-personal-info",
      title: "Personal Information",
      description: "Provide your personal details",
      questions: [
        {
          id: "part1.line8.gender",
          type: "radio",
          label: "Sex",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        {
          id: "part1.line9.dateofbirth",
          type: "date",
          label: "Date of Birth",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.line10.citytownofbirth",
          type: "text",
          label: "City/Town/Village of Birth",
          required: true,
          placeholder: "Enter city/town of birth",
        },
        {
          id: "part1.line11.countryofbirth",
          type: "text",
          label: "Country of Birth",
          required: true,
          placeholder: "Enter country of birth",
        },
        {
          id: "part1.line12.mothergivenname",
          type: "text",
          label: "Mother's Given Name (First Name)",
          required: true,
          placeholder: "Enter mother's first name",
        },
        {
          id: "part1.line13.fathergivenname",
          type: "text",
          label: "Father's Given Name (First Name)",
          required: true,
          placeholder: "Enter father's first name",
        },
      ],
    },
    {
      id: "part1-admission-info",
      title: "Admission Information",
      description: "Provide your admission details to the United States",
      questions: [
        {
          id: "part1.line14.classofadmission",
          type: "text",
          label: "Class of Admission",
          required: true,
          placeholder: "Enter class of admission (e.g., IR1, F1)",
        },
        {
          id: "part1.line15.dateofadmission",
          type: "date",
          label: "Date of Admission",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.line16.ssn",
          type: "text",
          label: "U.S. Social Security Number (if any)",
          required: false,
          placeholder: "###-##-####",
        },
      ],
    },
    {
      id: "part2",
      title: "Part 2. Application Type",
      description: "Select the reason for your application",
      questions: [
        {
          id: "part2.applicationType",
          type: "radio",
          label: "My status is:",
          required: true,
          options: [
            {
              value: "lawful_permanent_resident",
              label: "Lawful Permanent Resident",
            },
            {
              value: "permanent_resident_commuter",
              label: "Permanent Resident - In Commuter Status",
            },
            {
              value: "conditional_permanent_resident",
              label: "Conditional Permanent Resident",
            },
          ],
        },
        {
          id: "part2.reasonApplication",
          type: "radio",
          label: "Reason for Application (Select only one):",
          required: true,
          options: [
            {
              value: "lost_stolen_destroyed",
              label: "My previous card has been lost, stolen, or destroyed",
            },
            {
              value: "never_received",
              label: "My previous card was issued but never received",
            },
            {
              value: "mutilated",
              label: "My existing card has been mutilated",
            },
            {
              value: "incorrect_data_dhs",
              label: "My existing card has incorrect data because of DHS error",
            },
            {
              value: "name_changed",
              label:
                "My name or other biographic information has been legally changed",
            },
            {
              value: "expired",
              label:
                "My existing card has already expired or will expire within six months",
            },
            {
              value: "14_birthday",
              label:
                "I have reached my 14th birthday and am registering as required",
            },
            {
              value: "taking_commuter",
              label:
                "I am a permanent resident who is taking up commuter status",
            },
            {
              value: "commuter_residence",
              label:
                "I am a commuter who is taking up actual residence in the U.S.",
            },
            {
              value: "converted_lpr",
              label:
                "I have been automatically converted to lawful permanent resident status",
            },
            { value: "other", label: "Other reason not specified above" },
          ],
        },
        {
          id: "part2.line2h.cityandstate",
          type: "text",
          label:
            "Port-of-Entry into the United States (City or Town and State)",
          required: false,
          placeholder: "Enter city and state (if taking up commuter status)",
        },
      ],
    },
    {
      id: "part3",
      title: "Part 3. Processing Information",
      description: "Provide processing and biometric information",
      questions: [
        {
          id: "part3.line1.locationappliedvisa",
          type: "text",
          label:
            "Location where you applied for an immigrant visa or adjustment of status",
          required: false,
          placeholder: "Enter location",
        },
        {
          id: "part3.line2.locationissuedvisa",
          type: "text",
          label:
            "Location where your immigrant visa was issued or USCIS office where you were granted adjustment",
          required: false,
          placeholder: "Enter location",
        },
        {
          id: "part3.line3a.destination",
          type: "text",
          label: "Destination in the United States at time of admission",
          required: false,
          placeholder: "Enter destination",
        },
        {
          id: "part3.line3a.cityandstate",
          type: "text",
          label:
            "Port-of-Entry where admitted to the United States (City or Town and State)",
          required: false,
          placeholder: "Enter city and state",
        },
        {
          id: "part3.line8.heightfeet",
          type: "select",
          label: "Height (Feet)",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
        },
        {
          id: "part3.line8.heightinches",
          type: "select",
          label: "Height (Inches)",
          required: true,
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
        {
          id: "part3.line9.weight1",
          type: "text",
          label: "Weight (Pounds) - First Digit",
          required: true,
          placeholder: "0",
          maxLength: 1,
        },
        {
          id: "part3.line9.weight2",
          type: "text",
          label: "Weight (Pounds) - Second Digit",
          required: true,
          placeholder: "0",
          maxLength: 1,
        },
        {
          id: "part3.line9.weight3",
          type: "text",
          label: "Weight (Pounds) - Third Digit",
          required: true,
          placeholder: "0",
          maxLength: 1,
        },
        {
          id: "part3.ethnicity",
          type: "radio",
          label: "Ethnicity",
          required: true,
          options: [
            { value: "hispanic", label: "Hispanic or Latino" },
            { value: "not_hispanic", label: "Not Hispanic or Latino" },
          ],
        },

        {
          id: "part3.race",
          type: "checkbox",
          label: "Race (Select all that apply)",
          required: true,
          options: [
            { value: "white", label: "White" },
            { value: "asian", label: "Asian" },
            { value: "black", label: "Black or African American" },
            {
              value: "american_indian",
              label: "American Indian or Alaska Native",
            },
            {
              value: "pacific_islander",
              label: "Native Hawaiian or Other Pacific Islander",
            },
          ],
        },
        {
          id: "part3.hairColor",
          type: "radio",
          label: "Hair Color",
          required: true,
          options: [
            { value: "black", label: "Black" },
            { value: "brown", label: "Brown" },
            { value: "blonde", label: "Blonde" },
            { value: "gray", label: "Gray" },
            { value: "white", label: "White" },
            { value: "red", label: "Red" },
            { value: "sandy", label: "Sandy" },
            { value: "bald", label: "Bald (No Hair)" },
          ],
        },
        {
          id: "part3.eyeColor",
          type: "radio",
          label: "Eye Color",
          required: true,
          options: [
            { value: "brown", label: "Brown" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "hazel", label: "Hazel" },
            { value: "gray", label: "Gray" },
            { value: "black", label: "Black" },
            { value: "pink", label: "Pink" },
            { value: "maroon", label: "Maroon" },
            { value: "other", label: "Other" },
          ],
        },
      ],
    },
    {
      id: "part4",
      title: "Part 4. Accommodations for Individuals with Disabilities",
      description: "Request accommodations if needed",
      questions: [
        {
          id: "part4.accommodationNeeded",
          type: "radio",
          label:
            "Are you requesting an accommodation because of your disabilities and/or impairments?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part4.accommodationDeaf",
          type: "checkbox",
          label:
            "I am deaf or hard of hearing and request the following accommodation",
          required: false,
        },
        {
          id: "part4.accommodationBlind",
          type: "checkbox",
          label:
            "I am blind or have low vision and request the following accommodation",
          required: false,
        },
        {
          id: "part4.accommodationOther",
          type: "checkbox",
          label: "I have another type of disability and/or impairment",
          required: false,
        },
      ],
    },
    {
      id: "part5",
      title:
        "Part 5. Applicant's Statement, Contact Information, Certification, and Signature",
      description: "Provide contact information and signature",
      questions: [
        {
          id: "part5.readLanguage",
          type: "radio",
          label: "Language Proficiency",
          required: true,
          options: [
            {
              value: "english",
              label:
                "I can read and understand English, and I have read and understand every question and instruction on this application and my answer to every question",
            },
            {
              value: "interpreter",
              label:
                "The interpreter named in Part 6 read to me every question and instruction on this application and my answer to every question",
            },
          ],
        },
        {
          id: "part5.line2.nameofrepresentative",
          type: "text",
          label: "Preparer Name (if applicable)",
          required: false,
          placeholder: "Enter preparer name",
        },
        {
          id: "part5.line3.daytimephonenumber",
          type: "tel",
          label: "Applicant's Daytime Telephone Number",
          required: false,
          placeholder: "(555) 123-4567",
        },
        {
          id: "part5.line4.mobilephonenumber",
          type: "tel",
          label: "Applicant's Mobile Telephone Number (if any)",
          required: false,
          placeholder: "(555) 123-4567",
        },
        {
          id: "part5.line5.emailaddress",
          type: "email",
          label: "Applicant's Email Address (if any)",
          required: false,
          placeholder: "example@email.com",
        },
      ],
    },
    {
      id: "part6",
      title:
        "Part 6. Interpreter's Contact Information, Certification, and Signature",
      description: "Complete if an interpreter was used",
      questions: [
        {
          id: "part6.line1a.interpretersfamilyname",
          type: "text",
          label: "Interpreter's Family Name (Last Name)",
          required: false,
          placeholder: "Enter interpreter's last name",
        },
        {
          id: "part6.line1b.interpretersgivenname",
          type: "text",
          label: "Interpreter's Given Name (First Name)",
          required: false,
          placeholder: "Enter interpreter's first name",
        },
        {
          id: "part6.line2.nameofbusinessor",
          type: "text",
          label: "Interpreter's Business or Organization Name (if any)",
          required: false,
          placeholder: "Enter business or organization name",
        },
        {
          id: "part6.line3a.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: false,
          placeholder: "Enter street address",
        },
        {
          id: "part6.unitType",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part6.line3b.aptsteflrnumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
          required: false,
          placeholder: "Enter unit number",
        },
        {
          id: "part6.line3c.citytown",
          type: "text",
          label: "City or Town",
          required: false,
          placeholder: "Enter city or town",
        },
        {
          id: "part6.line3d.state",
          type: "select",
          label: "State",
          required: false,
          options: [
            { value: "", label: "Select State" },
            { value: "AL", label: "Alabama" },
            { value: "AK", label: "Alaska" },
            { value: "AZ", label: "Arizona" },
            { value: "AR", label: "Arkansas" },
            { value: "CA", label: "California" },
            { value: "CO", label: "Colorado" },
            { value: "CT", label: "Connecticut" },
            { value: "DE", label: "Delaware" },
            { value: "DC", label: "District of Columbia" },
            { value: "FL", label: "Florida" },
            { value: "GA", label: "Georgia" },
            { value: "HI", label: "Hawaii" },
            { value: "ID", label: "Idaho" },
            { value: "IL", label: "Illinois" },
            { value: "IN", label: "Indiana" },
            { value: "IA", label: "Iowa" },
            { value: "KS", label: "Kansas" },
            { value: "KY", label: "Kentucky" },
            { value: "LA", label: "Louisiana" },
            { value: "ME", label: "Maine" },
            { value: "MD", label: "Maryland" },
            { value: "MA", label: "Massachusetts" },
            { value: "MI", label: "Michigan" },
            { value: "MN", label: "Minnesota" },
            { value: "MS", label: "Mississippi" },
            { value: "MO", label: "Missouri" },
            { value: "MT", label: "Montana" },
            { value: "NE", label: "Nebraska" },
            { value: "NV", label: "Nevada" },
            { value: "NH", label: "New Hampshire" },
            { value: "NJ", label: "New Jersey" },
            { value: "NM", label: "New Mexico" },
            { value: "NY", label: "New York" },
            { value: "NC", label: "North Carolina" },
            { value: "ND", label: "North Dakota" },
            { value: "OH", label: "Ohio" },
            { value: "OK", label: "Oklahoma" },
            { value: "OR", label: "Oregon" },
            { value: "PA", label: "Pennsylvania" },
            { value: "RI", label: "Rhode Island" },
            { value: "SC", label: "South Carolina" },
            { value: "SD", label: "South Dakota" },
            { value: "TN", label: "Tennessee" },
            { value: "TX", label: "Texas" },
            { value: "UT", label: "Utah" },
            { value: "VT", label: "Vermont" },
            { value: "VA", label: "Virginia" },
            { value: "WA", label: "Washington" },
            { value: "WV", label: "West Virginia" },
            { value: "WI", label: "Wisconsin" },
            { value: "WY", label: "Wyoming" },
            { value: "AA", label: "Armed Forces Americas" },
            { value: "AE", label: "Armed Forces Europe" },
            { value: "AP", label: "Armed Forces Pacific" },
            { value: "AS", label: "American Samoa" },
            { value: "FM", label: "Federated States of Micronesia" },
            { value: "GU", label: "Guam" },
            { value: "MH", label: "Marshall Islands" },
            { value: "MP", label: "Northern Mariana Islands" },
            { value: "PW", label: "Palau" },
            { value: "PR", label: "Puerto Rico" },
            { value: "VI", label: "Virgin Islands" },
          ],
        },
        {
          id: "part6.line3e.zipcode",
          type: "text",
          label: "ZIP Code",
          required: false,
          placeholder: "Enter ZIP code",
        },
        {
          id: "part6.line3f.province",
          type: "text",
          label: "Province (if outside U.S.)",
          required: false,
          placeholder: "Enter province",
        },
        {
          id: "part6.line3g.postalcode",
          type: "text",
          label: "Postal Code (if outside U.S.)",
          required: false,
          placeholder: "Enter postal code",
        },
        {
          id: "part6.line3h.country",
          type: "text",
          label: "Country (if outside U.S.)",
          required: false,
          placeholder: "Enter country",
        },
        {
          id: "part6.line4.interpretersdaytimephonenumber",
          type: "tel",
          label: "Interpreter's Daytime Telephone Number",
          required: false,
          placeholder: "(555) 123-4567",
        },
        {
          id: "part6.line5.interpretersemailaddress",
          type: "email",
          label: "Interpreter's Email Address (if any)",
          required: false,
          placeholder: "example@email.com",
        },
        {
          id: "part6.interpreter.language",
          type: "text",
          label: "Language in which interpreter is fluent",
          required: false,
          placeholder: "Enter language",
        },
      ],
    },
    {
      id: "part7",
      title:
        "Part 7. Contact Information, Declaration, and Signature of the Person Preparing this Application",
      description:
        "Complete if someone other than the applicant prepared this form",
      questions: [
        {
          id: "part7.line1a.familyname",
          type: "text",
          label: "Preparer's Family Name (Last Name)",
          required: false,
          placeholder: "Enter preparer's last name",
        },
        {
          id: "part7.line1b.preparersgivenname",
          type: "text",
          label: "Preparer's Given Name (First Name)",
          required: false,
          placeholder: "Enter preparer's first name",
        },
        {
          id: "part7.line2.nameofbusinessor",
          type: "text",
          label: "Preparer's Business or Organization Name (if any)",
          required: false,
          placeholder: "Enter business or organization name",
        },
        {
          id: "part7.line3a.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: false,
          placeholder: "Enter street address",
        },
        {
          id: "part7.unitType",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part7.line3b.aptsteflrnumber",
          type: "text",
          label: "Apartment/Suite/Floor Number",
          required: false,
          placeholder: "Enter unit number",
        },
        {
          id: "part7.line3c.citytown",
          type: "text",
          label: "City or Town",
          required: false,
          placeholder: "Enter city or town",
        },
        {
          id: "part7.line3d.state",
          type: "select",
          label: "State",
          required: false,
          options: [
            { value: "", label: "Select State" },
            { value: "AL", label: "Alabama" },
            { value: "AK", label: "Alaska" },
            { value: "AZ", label: "Arizona" },
            { value: "AR", label: "Arkansas" },
            { value: "CA", label: "California" },
            { value: "CO", label: "Colorado" },
            { value: "CT", label: "Connecticut" },
            { value: "DE", label: "Delaware" },
            { value: "DC", label: "District of Columbia" },
            { value: "FL", label: "Florida" },
            { value: "GA", label: "Georgia" },
            { value: "HI", label: "Hawaii" },
            { value: "ID", label: "Idaho" },
            { value: "IL", label: "Illinois" },
            { value: "IN", label: "Indiana" },
            { value: "IA", label: "Iowa" },
            { value: "KS", label: "Kansas" },
            { value: "KY", label: "Kentucky" },
            { value: "LA", label: "Louisiana" },
            { value: "ME", label: "Maine" },
            { value: "MD", label: "Maryland" },
            { value: "MA", label: "Massachusetts" },
            { value: "MI", label: "Michigan" },
            { value: "MN", label: "Minnesota" },
            { value: "MS", label: "Mississippi" },
            { value: "MO", label: "Missouri" },
            { value: "MT", label: "Montana" },
            { value: "NE", label: "Nebraska" },
            { value: "NV", label: "Nevada" },
            { value: "NH", label: "New Hampshire" },
            { value: "NJ", label: "New Jersey" },
            { value: "NM", label: "New Mexico" },
            { value: "NY", label: "New York" },
            { value: "NC", label: "North Carolina" },
            { value: "ND", label: "North Dakota" },
            { value: "OH", label: "Ohio" },
            { value: "OK", label: "Oklahoma" },
            { value: "OR", label: "Oregon" },
            { value: "PA", label: "Pennsylvania" },
            { value: "RI", label: "Rhode Island" },
            { value: "SC", label: "South Carolina" },
            { value: "SD", label: "South Dakota" },
            { value: "TN", label: "Tennessee" },
            { value: "TX", label: "Texas" },
            { value: "UT", label: "Utah" },
            { value: "VT", label: "Vermont" },
            { value: "VA", label: "Virginia" },
            { value: "WA", label: "Washington" },
            { value: "WV", label: "West Virginia" },
            { value: "WI", label: "Wisconsin" },
            { value: "WY", label: "Wyoming" },
            { value: "AA", label: "Armed Forces Americas" },
            { value: "AE", label: "Armed Forces Europe" },
            { value: "AP", label: "Armed Forces Pacific" },
            { value: "AS", label: "American Samoa" },
            { value: "FM", label: "Federated States of Micronesia" },
            { value: "GU", label: "Guam" },
            { value: "MH", label: "Marshall Islands" },
            { value: "MP", label: "Northern Mariana Islands" },
            { value: "PW", label: "Palau" },
            { value: "PR", label: "Puerto Rico" },
            { value: "VI", label: "Virgin Islands" },
          ],
        },
        {
          id: "part7.line3e.zipcode",
          type: "text",
          label: "ZIP Code",
          required: false,
          placeholder: "Enter ZIP code",
        },
        {
          id: "part7.line3f.province",
          type: "text",
          label: "Province (if outside U.S.)",
          required: false,
          placeholder: "Enter province",
        },
        {
          id: "part7.line3g.postalcode",
          type: "text",
          label: "Postal Code (if outside U.S.)",
          required: false,
          placeholder: "Enter postal code",
        },
        {
          id: "part7.line3h.country",
          type: "text",
          label: "Country (if outside U.S.)",
          required: false,
          placeholder: "Enter country",
        },
        {
          id: "part7.line4.preparersdaytimephonenumber",
          type: "tel",
          label: "Preparer's Daytime Telephone Number",
          required: false,
          placeholder: "(555) 123-4567",
        },
        {
          id: "part7.line5.preparersfaxnumber",
          type: "text",
          label: "Preparer's Fax Number (if any)",
          required: false,
          placeholder: "(555) 123-4567",
        },
        {
          id: "part7.line6.preparersemailaddress",
          type: "email",
          label: "Preparer's Email Address (if any)",
          required: false,
          placeholder: "example@email.com",
        },
        {
          id: "part7.representation.extends",
          type: "radio",
          label: "Representation of the applicant in this case",
          required: false,
          options: [
            {
              value: "extends",
              label: "Extends beyond preparation of this application",
            },
            {
              value: "does-not-extend",
              label: "Does not extend beyond preparation of this application",
            },
          ],
        },
      ],
    },
    {
      id: "part8",
      title: "Part 8. Additional Information",
      description:
        "Use this space for any additional information or explanations",
      questions: [
        {
          id: "part8.line1a.familyname",
          type: "text",
          label: "Your Full Name - Family Name (Last Name)",
          required: false,
          placeholder: "Enter your last name",
        },
        {
          id: "part8.line1b.givenname",
          type: "text",
          label: "Your Full Name - Given Name (First Name)",
          required: false,
          placeholder: "Enter your first name",
        },
        {
          id: "part8.line1c.middlename",
          type: "text",
          label: "Your Full Name - Middle Name",
          required: false,
          placeholder: "Enter your middle name",
        },
        {
          id: "part8.line2.anumber",
          type: "text",
          label: "A-Number (if any)",
          required: false,
          placeholder: "Enter A-Number",
        },
        {
          id: "part8.line3a.pagenumber",
          type: "text",
          label: "Page Number (for additional information)",
          required: false,
          placeholder: "Enter page number",
        },
        {
          id: "part8.line3b.partnumber",
          type: "text",
          label: "Part Number (for additional information)",
          required: false,
          placeholder: "Enter part number",
        },
        {
          id: "part8.line3c.itemnumber",
          type: "text",
          label: "Item Number (for additional information)",
          required: false,
          placeholder: "Enter item number",
        },
        {
          id: "part8.line3d.additionalinfo",
          type: "textarea",
          label: "Additional Information",
          required: false,
          placeholder: "Enter any additional information here",
        },
      ],
    },
  ],
  pdfFieldMappings: [],
  requiredDocuments: [
    "Copy of your current or expired Permanent Resident Card (front and back)",
    "Two passport-style photos",
    "Copy of government-issued photo identification",
    "Filing fee payment ($540)",
    "Police report (if card was stolen)",
    "Legal documents showing name change (if applicable)",
  ],
  instructions: [
    "Complete all applicable sections of this form",
    "Use black ink when filling out the form by hand",
    "If you need extra space, use Part 8 (Additional Information)",
    "Submit required supporting documents with your application",
    "Pay the required filing fee",
    "Sign and date your application",
  ],
};
const I130_DEFINITION: FormDefinition = {
  id: "i-130",
  code: "I-130",
  name: "Petition for Alien Relative",
  description:
    "Petition to establish a qualifying family relationship for immigration",
  category: "family",
  estimatedTime: "45-60 minutes",
  filingFee: 535,
  price: 70,
  sections: [
    // 1
    {
      id: "part1-relationship",
      title: "Part 1: Relationship Information",
      description: "(You are the Petitioner. Your relative is the Beneficiary)",
      questions: [
        {
          id: "part1.relationship",
          type: "radio",
          label: "1. Relationship to the Beneficiary",
          required: true,
          options: [
            { value: "spouse", label: "Spouse" },
            { value: "siblings", label: "Siblings" },
            { value: "parent", label: "Parent" },
            { value: "child", label: "Child" },
          ],
        },
        {
          id: "part1.childRelationship",
          type: "radio",
          label: "2. Child Relationship",
          required: true,
          options: [
            { value: "inWedlock", label: "In Wedlock" },
            { value: "adoptedChild", label: "Adopted Child" },
            { value: "stepchild", label: "Stepchild" },
            { value: "outOfWedlock", label: "Out of Wedlock" },
          ],
        },
        {
          id: "part1.relatedByAdoption",
          type: "radio",
          label: "3. Related by Adoption?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part1.gainedStatusThroughAdoption",
          type: "radio",
          label: "4. Gained Status Through Adoption?",
          required: true,
          options: [
            { value: "no", label: "No" },
            { value: "yes", label: "Yes" },
          ],
        },
      ],
    },
    // 2
    {
      id: "part2-personal-info",
      title: "Part 2: Personal Information",
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
          required: false,
        },
        {
          id: "part2.alienNumber",
          type: "text",
          label: "2. Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part2.uscisOnlineAccountNumber",
          type: "text",
          label: "3. USCIS Online Account Number",
          required: false,
        },

        {
          id: "part2.ssn",
          type: "ssn",
          label: "6. U.S. Social Security Number",
          required: false,
        },
      ],
    },
    // 3
    {
      id: "attorney-info",
      title: "Attorney or Accredited Representative Information",
      questions: [
        {
          id: "attorney.g28Attached",
          type: "checkbox",
          label: "1. Form G-28 is attached",
          required: false,
          options: [{ value: "1", label: "Yes" }],
        },
        {
          id: "attorney.volagNumber",
          type: "text",
          label: "2. VOLAG Number",
          required: false,
        },
        {
          id: "attorney.stateBarNumber",
          type: "text",
          label: "3. Attorney State Bar Number",
          required: false,
        },
        {
          id: "attorney.uscisOnlineAccountNumber",
          type: "text",
          label: "4. USCIS Online Account Number",
          required: false,
        },
      ],
    },
    // 4
    {
      id: "part2-country-of-birth",
      title: "Part 2: Country of Birth",
      questions: [
        {
          id: "part2.countryOfBirth",
          type: "text",
          label: "7. Country of Birth",
          required: true,
        },
        {
          id: "part2.cityTownOfBirth",
          type: "text",
          label: "City /Town",
          required: true,
        },
        {
          id: "part2.dateOfBirth",
          type: "date",
          label: "4. Date of Birth (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.sex",
          type: "radio",
          label: "5. Sex",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
      ],
    },
    // 5
    {
      id: "part2-mailing-address",
      title: "Part 2: Mailing Address",
      questions: [
        {
          id: "part2.mailingAddressSameAsPhysical",
          type: "radio",
          label:
            "11. Is your mailing address the same as your physical address?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part2.streetNumberName",
          type: "text",
          label: "10. Street Number and Name",
          required: true,
        },
        {
          id: "part2.unitType",
          type: "radio",
          label: "10. Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part2.aptSteFlrNumber",
          type: "text",
          label: "10. Apt/Ste/Flr Number",
          required: false,
        },
        {
          id: "part2.cityOrTown",
          type: "text",
          label: "10. City or Town",
          required: true,
        },
        {
          id: "part2.province",
          type: "text",
          label: "10. Province",
          required: false,
        },
        {
          id: "part2.postalCode",
          type: "text",
          label: "10. Postal Code",
          required: false,
        },
        {
          id: "part2.zipCode",
          type: "text",
          label: "10. ZIP Code",
          required: true,
        },
        {
          id: "part2.state",
          type: "select",
          label: "10. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.country",
          type: "text",
          label: "10. Country",
          required: true,
        },
        {
          id: "part2.inCareOfName",
          type: "text",
          label: "10. In Care Of Name",
          required: false,
        },
      ],
    },
    // 6
    {
      id: "part2-physical-address",
      title: "Part 2: Physical Address",
      questions: [
        {
          id: "part2.physicalAddress2PostalCode",
          type: "text",
          label: "14. Postal Code",
          required: true,
        },
        {
          id: "part2.physicalAddress1DateFrom",
          type: "date",
          label: "13.a. Date From",
          required: true,
        },
        {
          id: "part2.addressHistoryPhysicalAddress1DateTo",
          type: "date",
          label: "13.b. Date To",
          required: false,
        },

        {
          id: "part2.physicalAddress1StreetNumberName",
          type: "text",
          label: "12. Street Number and Name",
          required: true,
        },
        {
          id: "part2.physicalAddress1Unit",
          type: "radio",
          label: "12. Unit",
          required: true,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part2.physicalAddress1AptSteFlrNumber",
          type: "text",
          label: "12. Apt/Ste/Flr Number",
          required: true,
        },
        {
          id: "part2.physicalAddress1CityOrTown",
          type: "text",
          label: "12. City or Town",
          required: true,
        },
        {
          id: "part2.physicalAddress1State",
          type: "select",
          label: "12. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.physicalAddress1ZipCode",
          type: "text",
          label: "12. ZIP Code",
          required: true,
        },
        {
          id: "part2.physicalAddress1Province",
          type: "text",
          label: "12. Province",
          required: true,
        },
        {
          id: "part2.physicalAddress1Country",
          type: "text",
          label: "12. Country",
          required: true,
        },
        {
          id: "part2.physicalAddress1PostalCode",
          type: "text",
          label: "12. Postal Code",
          required: true,
        },
      ],
    },
    // 7
    {
      id: "part2-physical-address-2",
      title: "Part 2: Physical Address 2",
      questions: [
        {
          id: "part2.physicalAddress2StreetNumberName",
          type: "text",
          label: "14. Street Number and Name",
          required: false,
        },
        {
          id: "part2.physicalAddress2UnitType",
          type: "radio",
          label: "14. Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part2.physicalAddress2AptSteFlrNumber",
          type: "text",
          label: "14. Apt/Ste/Flr Number",
          required: false,
        },
        {
          id: "part2.physicalAddress2CityOrTown",
          type: "text",
          label: "14. City or Town",
          required: false,
        },
        {
          id: "part2.physicalAddress2State",
          type: "select",
          label: "14. State",
          required: false,
          options: US_STATES,
        },
        {
          id: "part2.physicalAddress2ZipCode",
          type: "text",
          label: "14. ZIP Code",
          required: false,
        },
        {
          id: "part2.physicalAddress2Province",
          type: "text",
          label: "14. Province",
          required: false,
        },
        {
          id: "part2.physicalAddress2Country",
          type: "text",
          label: "14. Country",
          required: false,
        },
        {
          id: "part2.physicalAddress2DateFrom",
          type: "date",
          label: "15.a. Date From",
          required: true,
        },
        {
          id: "part2.physicalAddress2DateTo",
          type: "date",
          label: "15.b. Date To",
          required: true,
        },
      ],
    },
    // 8
    {
      id: "part2-additional-personal-info",
      title: "Part 2: Marital Information",
      questions: [
        {
          id: "part2.numberOfMarriages",
          type: "text",
          label: "Number of Marriages",
          required: true,
        },
        {
          id: "part2.maritalStatus",
          type: "radio",
          label: "Marital Status",
          required: true,
          options: [
            { value: "0", label: "Single, Never Married" },
            { value: "1", label: "Married" },
            { value: "2", label: "Divorced" },
            { value: "3", label: "Widowed" },
            { value: "4", label: "Separated" },
            { value: "5", label: "Annulled" },
          ],
        },
        {
          id: "part2.dateOfCurrentMarriage",
          type: "date",
          label: "18. Date of Current Marriage",
          required: false,
        },
        //
        {
          id: "part1.line19a.citytown",
          type: "text",
          label: "19.a City",
          required: false,
        },
        {
          id: "part1.line19b.state",
          type: "select",
          label: "19.b. State",
          required: false,
          options: US_STATES,
        },
        {
          id: "part1.line19c.province",
          type: "text",
          label: "19.c. Province",
          required: false,
        },
        {
          id: "part1.line19d.country",
          type: "text",
          label: "19.d. Country",
          required: false,
        },
      ],
    },
    // 9
    {
      id: "part2-spouse1-info",
      title: "Part 2: Spouse 1 Information",
      questions: [
        {
          id: "part2.spouse1FamilyName",
          type: "text",
          label: "20.a. Family Name (Last Name)",
          required: false,
        },
        {
          id: "part2.spouse1GivenName",
          type: "text",
          label: "20.b. Given Name (First Name)",
          required: false,
        },
        {
          id: "part2.spouse1MiddleName",
          type: "text",
          label: "20.c. Middle Name",
          required: false,
        },
        {
          id: "part2.spouse1DateMarriageEnded",
          type: "date",
          label: "21. Date Marriage Ended",
          required: false,
        },
      ],
    },
    // 10
    {
      id: "part2-spouse2-info",
      title: "Part 2: Spouse 2 Information",
      questions: [
        {
          id: "part2.spouse2FamilyName",
          type: "text",
          label: "22.a. Family Name (Last Name)",
          required: false,
        },
        {
          id: "part2.spouse2GivenName",
          type: "text",
          label: "22.b. Given Name (First Name)",
          required: false,
        },
        {
          id: "part2.spouse2MiddleName",
          type: "text",
          label: "22.c. Middle Name",
          required: false,
        },
        {
          id: "part2.spouse2DateMarriageEnded",
          type: "date",
          label: "23. Date Marriage Ended",
          required: false,
        },
      ],
    },

    {
      id: "part2-parent1-info",
      title: "Part 2: Parent 1 Information",
      questions: [
        {
          id: "part2.parent1FamilyName",
          type: "text",
          label: "24. Family Name (Last Name)",
          required: false,
        },
        {
          id: "part2.parent1GivenName",
          type: "text",
          label: "24. Given Name (First Name)",
          required: false,
        },
        {
          id: "part2.parent1MiddleName",
          type: "text",
          label: "24. Middle Name",
          required: false,
        },
        {
          id: "part2.parent1DateOfBirth",
          type: "date",
          label: "25. Date of Birth",
          required: false,
        },
        {
          id: "part2.parent1CityTownOrVillageOfResidence",
          type: "text",
          label: "28. City/Town/Village of Residence",
          required: false,
        },
        {
          id: "part2.parent1CountryOfResidence",
          type: "text",
          label: "Country of Residence",
          required: false,
        },
        {
          id: "part2.parent1CountryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: false,
        },
        {
          id: "part2.parentOneSex",
          type: "radio",
          label: "Parent One Sex?",
          required: false,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
      ],
    },
    // 11
    {
      id: "part2-parent2-info",
      title: "Part 2: Parent 2 Information",
      questions: [
        {
          id: "part2.parent2FamilyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: false,
        },
        {
          id: "part2.parent2GivenName",
          type: "text",
          label: "Given Name (First Name)",
          required: false,
        },
        {
          id: "part2.parent2MiddleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part2.parent2DateOfBirth",
          type: "date",
          label: "Date of Birth",
          required: false,
        },
        {
          id: "part2.parent2CityTownOrVillageOfResidence",
          type: "text",
          label: "City/Town/Village of Residence",
          required: false,
        },
        {
          id: "part2.parent2CountryOfResidence",
          type: "text",
          label: "Country of Residence",
          required: false,
        },
        {
          id: "part2.parent2CountryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: false,
        },

        {
          id: "part2.parentTwoSex",
          type: "radio",
          label: "Parent Two Sex?",
          required: false,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
      ],
    },
    // 12
    {
      id: "part2-citizenship-status",
      title: "Part 2: Citizenship Status",
      questions: [
        {
          id: "part2.usCitizen",
          type: "radio",
          label: "Are you a U.S. Citizen?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
        {
          id: "part2.lpr",
          type: "radio",
          label: "Are you a Lawful Permanent Resident (LPR)?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Off", label: "Off" },
          ],
        },
        {
          id: "part2.citizenship",
          type: "radio",
          label: "Citizenship obtained by birth in the U.S.",
          required: false,
          options: [
            { value: "0", label: "Birth in the United States" },
            { value: "1", label: "Naturalization" },
            { value: "2", label: "Parents" },
          ],
        },

        {
          id: "part2.certificateNumber",
          type: "text",
          label: "Certificate Number",
          required: false,
        },
        {
          id: "part2.certificateObtained",
          type: "radio",
          label: "Have you obtained a certificate?",
          required: false,
          options: [
            { value: "Y", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
        {
          id: "part2.certificateNotObtained",
          type: "radio",
          label: "Have you not obtained a certificate?",
          required: false,
          options: [
            { value: "N", label: "No" },
            { value: "Off", label: "Off" },
          ],
        },
        {
          id: "part2.dateOfIssuance",
          type: "date",
          label: "Date of Issuance",
          required: false,
        },
        {
          id: "part2.placeOfIssuance",
          type: "text",
          label: "Place of Issuance",
          required: false,
        },
      ],
    },
    // 13
    {
      id: "part2-employer1",
      title: "Part 2: Employer 1 Information",
      description:
        "Provide your employment history for the last five years, whether inside or outside the United States.",
      questions: [
        {
          id: "part2.employer1Unit",
          type: "radio",
          label: "41. Suite",
          required: false,
          options: [
            { value: "STE", label: "STE" },
            { value: "APT", label: "APT" },
            { value: "FLR", label: "FLR" },
          ],
        },
        {
          id: "part2.employer1Floor",
          type: "text",
          label: "41. Floor",
          required: false,
        },
        {
          id: "part2.employer1AptSteFlrNumber",
          type: "text",
          label: "41. Apt/Ste/Flr Number",
          required: false,
        },

        {
          id: "part2.employerOrCompName",
          type: "text",
          label: "Name of Employer/Company",
          required: false,
        },
        {
          id: "part2.streetnumbername",
          type: "text",
          label: "43.a. Street Number and Name",
          required: false,
        },

        {
          id: "part2.employer1CityOrTown",
          type: "text",
          label: "41. City or Town",
          required: true,
        },
        {
          id: "part2.employer1Province",
          type: "text",
          label: "41. Province",
          required: false,
        },
        {
          id: "part2.employer1PostalCode",
          type: "text",
          label: "41. Postal Code",
          required: false,
        },
        {
          id: "part2.employer1ZipCode",
          type: "text",
          label: "41. ZIP Code",
          required: true,
        },
        {
          id: "part2.employer1State",
          type: "select",
          label: "41. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.employer1Country",
          type: "text",
          label: "41. Country",
          required: true,
        },
        {
          id: "part2.yourOccupation",
          type: "text",
          label: "44. Your Occupation",
          required: false,
        },
        {
          id: "part2.yourDateFrom1",
          type: "date",
          label: "45.a. Date From (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.yourDateTo1",
          type: "date",
          label: "45.b. Date To (mm/dd/yyyy)",
          required: true,
        },
      ],
    },
    // 14
    {
      id: "part2-employer2",
      title: "Part 2: Employer 2 Information",
      questions: [
        {
          id: "part2.employer2Name",
          type: "text",
          label: "40. Employer or Company Name",
          required: true,
        },
        {
          id: "part2.employer2StreetNumberName",
          type: "text",
          label: "45. Street Number and Name",
          required: true,
        },
        {
          id: "part2.employer2Unit",
          type: "radio",
          label: "45. Apartment",
          required: false,
          options: [
            { value: "STE", label: "STE" },
            { value: "APT", label: "APT" },

            { value: "FLR", label: "FLR" },
          ],
        },

        {
          id: "part2.employer2Floor",
          type: "text",
          label: "45. Floor",
          required: false,
        },
        {
          id: "part2.employer2AptSteFlrNumber",
          type: "text",
          label: "45. Apt/Ste/Flr Number",
          required: false,
        },
        {
          id: "part2.employer2CityOrTown",
          type: "text",
          label: "45. City or Town",
          required: true,
        },
        {
          id: "part2.employer2Province",
          type: "text",
          label: "45. Province",
          required: false,
        },
        {
          id: "part2.employer2PostalCode",
          type: "text",
          label: "45. Postal Code",
          required: false,
        },
        {
          id: "part2.employer2ZipCode",
          type: "text",
          label: "45. ZIP Code",
          required: true,
        },
        {
          id: "part2.employer2State",
          type: "select",
          label: "45. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.employer2Country",
          type: "text",
          label: "45. Country",
          required: true,
        },
        {
          id: "part2.employer2Occupation",
          type: "text",
          label: "45. Occupation",
          required: true,
        },
        {
          id: "part2.yourDateFrom",
          type: "date",
          label: "45.a. Date From (mm/dd/yyyy)",
          required: true,
        },
        {
          id: "part2.yourDateTo",
          type: "date",
          label: "45.b. Date To (mm/dd/yyyy)",
          required: true,
        },
      ],
    },
    // 15
    {
      id: "part3-ethnicity-race",
      title: "Part 3: Ethnicity and Race",
      questions: [
        {
          id: "part3.ethnicity",
          type: "radio",
          label: "1. Ethnicity",
          required: true,
          options: [
            { value: "0", label: "Hispanic or Latino" },
            { value: "1", label: "Not Hispanic or Latino" },
          ],
        },
        {
          id: "part3.race",
          type: "radio",
          label: "2. Race (Select all that apply)",
          required: false,
          options: [
            { value: "B", label: "Black or African American" },
            { value: "AA", label: "American Indian or Alaska Native" },
            { value: "W", label: "White" },
            { value: "A", label: "Asian" },
            { value: "N", label: "Native Hawaiian or Other Pacific Islander" },
          ],
        },
      ],
    },
    // 16
    {
      id: "part3-physical-characteristics",
      title: "Part 3: Physical Characteristics",
      questions: [
        {
          id: "part3.heightFeet",
          type: "select",
          label: "Height (Feet)",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
        },
        {
          id: "part3.heightInches",
          type: "select",
          label: "Height (Inches)",
          required: true,
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
        {
          id: "part3.weightFirstDigit",
          type: "text",
          label: "4. Weight First(Pounds)",
          required: false,
          helpText: "Enter your weight as a First number.",
        },
        {
          id: "part3.weightSecondDigit",
          type: "text",
          label: "4. Weight Second(Pounds)",
          required: false,
          helpText: "Enter your weight as a Second number.",
        },
        {
          id: "part3.weightThirdDigit",
          type: "text",
          label: "4. Weight Third(Pounds)",
          required: false,
          helpText: "Enter your weight as a Third number.",
        },
        {
          id: "part3.eyeColor",
          type: "radio",
          label: "5. Eye Color",
          required: true,
          options: [
            { value: "BLU", label: "Blue" },
            { value: "BRN", label: "Brown" },
            { value: "HZL", label: "Hazel" },
            { value: "PNK", label: "Pink" },
            { value: "MRN", label: "Maroon" },
            { value: "GRN", label: "Green" },
            { value: "GRAY", label: "Gray" },
            { value: "BLK", label: "Black" },
            { value: "OTH", label: "Other" },
          ],
        },
      ],
    },
    // 17
    {
      id: "part2-admission",
      title: "Part 2: Admission Information",
      questions: [
        {
          id: "part1.classofadmission",
          type: "select",
          label: "State of Admission",
          required: false,
        },
        {
          id: "part1.dateofadmission",
          type: "select",
          label: "Date of Admission",
          required: false,
        },

        {
          id: "part2.stateOfAdmission",
          type: "select",
          label: "State of Admission",
          required: false,
          options: US_STATES,
        },
        {
          id: "part1.cityortown",
          type: "text",
          label: "40.c. City or Town",
          required: false,
        },
      ],
    },
    // 18
    {
      id: "part4-beneficiary-information",
      title: "Part 4: Beneficiary Information",
      questions: [
        {
          id: "part4.alienNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part4.uscisOnlineAccountNumber",
          type: "text",
          label: "2. USCIS Online Account Number",
          required: false,
        },
        {
          id: "part4.beneficiaryFamilyName",
          type: "text",
          label: "4.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.beneficiaryGivenName",
          type: "text",
          label: "4.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.beneficiaryMiddleName",
          type: "text",
          label: "4.c. Middle Name",
          required: false,
        },
        {
          id: "part4.otherNamesFamilyName",
          type: "text",
          label: "5.a. Other Names Used - Family Name (Last Name)",
          required: false,
        },
        {
          id: "part4.otherNamesGivenName",
          type: "text",
          label: "5.b. Other Names Used - Given Name (First Name)",
          required: false,
        },
        {
          id: "part4.otherNamesMiddleName",
          type: "text",
          label: "5.c. Other Names Used - Middle Name",
          required: false,
        },
        {
          id: "part4.cityTownOfBirth",
          type: "text",
          label: "7. City or Town of Birth",
          required: true,
        },
        {
          id: "part4.countryOfBirth",
          type: "text",
          label: "8. Country of Birth",
          required: true,
        },
        {
          id: "part4.beneficiaryProvince",
          type: "text",
          label: "11. Province",
          required: false,
        },
        {
          id: "part4.beneficiaryPostalCode",
          type: "text",
          label: "11. Postal Code",
          required: false,
        },
        {
          id: "part4.beneficiaryCountry",
          type: "text",
          label: "11. Country",
          required: true,
        },
        {
          id: "part4.streetNumberName",
          type: "text",
          label: "12.a. Street Number and Name",
          required: true,
        },
        {
          id: "part4.unitType",
          type: "radio",
          label: "12.b. Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.aptSteFlrNumber",
          type: "text",
          label: "12.b. Apartment/Suite/Floor Number",
          required: false,
        },
        {
          id: "part4.cityOrTown",
          type: "text",
          label: "12.c. City or Town",
          required: true,
        },
        {
          id: "part4.zipCode",
          type: "text",
          label: "12.d. ZIP Code",
          required: true,
        },
        {
          id: "part4.state",
          type: "select",
          label: "12.e. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part4.otherPostalCode",
          type: "text",
          label: "12.f. Other Postal Code",
          required: false,
        },
        {
          id: "part4.otherAptSteFlrNumber",
          type: "text",
          label: "12.g. Other Apartment/Suite/Floor Number",
          required: false,
        },
        {
          id: "part4.otherUnitType",
          type: "radio",
          label: "12.h. Other Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.otherAddressStreetNumberName",
          type: "text",
          label: "13.a. Street Number and Name",
          required: false,
        },
        {
          id: "part4.otherAddressCityOrTown",
          type: "text",
          label: "13.b. City or Town",
          required: false,
        },
        {
          id: "part4.otherAddressCountry",
          type: "text",
          label: "13.c. Country",
          required: false,
        },
        {
          id: "part4.otherAddressProvince",
          type: "text",
          label: "13.d. Province",
          required: false,
        },
      ],
    },

    {
      id: "part4-physical-address",
      title: "Part 4: Physical Address Information",
      questions: [
        {
          id: "part4.physicalAddressStreetNumberName",
          type: "text",
          label: "11.a. Street Number and Name",
          required: false,
        },
        {
          id: "part4.physicalAddressApartment",
          type: "radio",
          label: "11.b. Apartment",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },

        {
          id: "part4.physicalAddressAptSteFlrNumber",
          type: "text",
          label: "11.e. Apt/Ste/Flr Number",
          required: false,
        },
        {
          id: "part4.physicalAddressCityOrTown",
          type: "text",
          label: "11.f. City or Town",
          required: false,
        },
        {
          id: "part4.physicalAddressZipCode",
          type: "text",
          label: "11.g. ZIP Code",
          required: false,
        },
        {
          id: "part4.physicalAddressState",
          type: "select",
          label: "11.h. State",
          required: false,
          options: US_STATES,
        },
      ],
    },
    {
      id: "part4-personal-info",
      title: "Part 4: Personal Information",
      questions: [
        {
          id: "part4.dateOfBirth",
          type: "date",
          label: "12. Date of Birth",
          required: false,
        },
        {
          id: "part4.sex",
          type: "radio",
          label: "13. Sex - Male",
          required: false,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
      ],
    },
    {
      id: "part3-hairColorBald",
      title: "Part 3: Hair Color",
      questions: [
        {
          id: "part3.hairColor",
          type: "select",
          label: "15. Hair Color",
          required: false,
          options: [
            { value: "BLD", label: "Bald" },
            { value: "BLK", label: "Black" },
            { value: "BD", label: "Blond" },
            { value: "BRN", label: "Brown" },
            { value: "GRY", label: "Gray" },
            { value: "RED", label: "Red" },
            { value: "SD", label: "Sandy" },
            { value: "WHI", label: "White" },
            { value: "OTH", label: "Other" },
          ],
        },
      ],
    },
    {
      id: "part4-other-petition-filed",
      title: "Part 4: Other Petition Filed",
      questions: [
        {
          id: "part4.otherPetitionFiled",
          type: "radio",
          label:
            "10. Have you ever filed a petition for this beneficiary or any other alien?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
            { value: "U", label: "Unknown" },
          ],
        },
      ],
    },
    {
      id: "part4-contact-information",
      title: "Part 4: Contact Information",
      questions: [
        {
          id: "part4.daytimePhoneNumber",
          type: "tel",
          label: "14. Daytime Phone Number",
          required: true,
        },
        {
          id: "part4.mobilePhoneNumber",
          type: "tel",
          label: "15. Mobile Phone Number",
          required: false,
        },
        {
          id: "part4.emailAddress",
          type: "email",
          label: "16. Email Address",
          required: false,
        },
      ],
    },
    {
      id: "part4-marriage-information",
      title: "Part 4: Marriage Information",
      questions: [
        {
          id: "part4.ssn",
          type: "ssn",
          label: "3. Social Security Number (SSN)",
          required: false,
        },
        {
          id: "part4.provinceOfMarriage",
          type: "text",
          label: "20.c. Province of Marriage",
          required: false,
        },
        {
          id: "part4.numberOfMarriages",
          type: "text",
          label: "17. Number of Marriages",
          required: true,
        },
        {
          id: "part4.currentMaritalStatus",
          type: "radio",
          label: "18. Current Marital Status",
          required: true,
          options: [
            { value: "W", label: "Widowed" },
            { value: "A", label: "Annulled" },
            { value: "S", label: "Separated" },
            { value: "SNM", label: "Single, Never Married" },
            { value: "M", label: "Married" },
            { value: "D", label: "Divorced" },
          ],
        },
        {
          id: "part4.dateOfCurrentMarriage",
          type: "date",
          label: "19. Date of Current Marriage",
          required: false,
        },
      ],
    },
    {
      id: "part4-spouse-information",
      title: "Part 4: Spouse Information",
      questions: [
        {
          id: "part4.spouse1FamilyName",
          type: "text",
          label: "Spouse 1 Family Name (Last Name)",
          required: false,
        },
        {
          id: "part4.spouse1GivenName",
          type: "text",
          label: "Spouse 1 Given Name (First Name)",
          required: false,
        },
        {
          id: "part4.spouse1MiddleName",
          type: "text",
          label: "Spouse 1 Middle Name",
          required: false,
        },
        {
          id: "part4.spouse1DateMarriageEnded",
          type: "date",
          label: "Date Marriage Ended for Spouse 1",
          required: false,
        },
        {
          id: "part4.spouse2FamilyName",
          type: "text",
          label: "Spouse 2 Family Name (Last Name)",
          required: false,
        },
        {
          id: "part4.spouse2GivenName",
          type: "text",
          label: "Spouse 2 Given Name (First Name)",
          required: false,
        },
        {
          id: "part4.spouse2MiddleName",
          type: "text",
          label: "Spouse 2 Middle Name",
          required: false,
        },
        {
          id: "part4.spouse2DateMarriageEnded",
          type: "date",
          label: "Date Marriage Ended for Spouse 2",
          required: false,
        },
      ],
    },
    {
      id: "part4-relationship",
      title: "Part 4: Relationship Information",
      questions: [
        {
          id: "part4.relationshipPerson1",
          type: "text",
          label: "Relationship to Person 1",
          required: true,
        },
      ],
    },
    {
      id: "part4-person1",
      title: "Part 4: Person 1 Information",
      questions: [
        {
          id: "part4.person1.familyName",
          type: "text",
          label: "30.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.person1.givenName",
          type: "text",
          label: "30.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.person1.middleName",
          type: "text",
          label: "30.c. Middle Name",
          required: false,
        },
        {
          id: "part4.person1.dateOfBirth",
          type: "date",
          label: "32. Date of Birth",
          required: true,
        },
        {
          id: "part4.person1.countryOfBirth",
          type: "text",
          label: "49. Country of Birth",
          required: true,
        },
      ],
    },
    {
      id: "part4-person2",
      title: "Part 4: Person 2 Information",
      questions: [
        {
          id: "part4.person2.relationship",
          type: "text",
          label: "35. Relationship",
          required: true,
        },
        {
          id: "part4.person2.dateOfBirth",
          type: "date",
          label: "36. Date of Birth",
          required: true,
        },
        {
          id: "part4.person2.countryOfBirth",
          type: "text",
          label: "37. Country of Birth",
          required: true,
        },
        {
          id: "part4.person2.familyName",
          type: "text",
          label: "34.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.person2.givenName",
          type: "text",
          label: "34.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.person2.middleName",
          type: "text",
          label: "34.c. Middle Name",
          required: false,
        },
      ],
    },
    {
      id: "part4-person3",
      title: "Part 4: Person 3 Information",
      questions: [
        {
          id: "part4.person3.givenName",
          type: "text",
          label: "38.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.person3.middleName",
          type: "text",
          label: "38.c. Middle Name",
          required: false,
        },
        {
          id: "part4.person3.familyName",
          type: "text",
          label: "38.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.person3.countryOfBirth",
          type: "text",
          label: "41. Country of Birth",
          required: true,
        },
        {
          id: "part4.person3.dateOfBirth",
          type: "date",
          label: "40. Date of Birth",
          required: true,
        },
        {
          id: "part4.person3.relationship",
          type: "text",
          label: "39. Relationship",
          required: true,
        },
      ],
    },
    {
      id: "part4-current-marriage",
      title: "Part 4: Current Marriage Information",
      questions: [
        {
          id: "part4.currentMarriage.cityTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part4.currentMarriage.state",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part4.currentMarriage.country",
          type: "text",
          label: "Country",
          required: true,
        },
      ],
    },
    {
      id: "part4-person4",
      title: "Part 4: Person 4 Information",
      questions: [
        {
          id: "part4.person4.middleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part4.person4.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.person4.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.person4.countryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: true,
        },
        {
          id: "part4.person4.dateOfBirth",
          type: "date",
          label: "Date of Birth",
          required: true,
        },
        {
          id: "part4.person4Relationship",
          type: "text",
          label: "43. Relationship to You",
          required: true,
        },
      ],
    },

    {
      id: "part4-person5",
      title: "Part 4: Information About Other Relatives",
      questions: [
        {
          id: "part4.person5FamilyName",
          type: "text",
          label: "46.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.person5GivenName",
          type: "text",
          label: "46.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.person5MiddleName",
          type: "text",
          label: "46.c. Middle Name",
          required: false,
        },
        {
          id: "part4.person5Relationship",
          type: "text",
          label: "47. Relationship to You",
          required: true,
        },
        {
          id: "part4.person5CountryOfBirth",
          type: "text",
          label: "49. Country of Birth",
          required: true,
        },
        {
          id: "part4.person5DateOfBirth",
          type: "date",
          label: "48. Date of Birth",
          required: true,
        },
      ],
    },
    {
      id: "part4-beneficiary",
      title: "Part 4: Beneficiary Information",
      questions: [
        {
          id: "part4.beneficiaryEverInUS",
          type: "radio",
          label: "20. Has the beneficiary ever been in the U.S.?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "Off", label: "No" },
          ],
        },
        {
          id: "part4.dateAuthorizedStayExpired",
          type: "date",
          label: "21.d. Date Authorized Stay Expired",
          required: false,
        },
        {
          id: "part4.classOfAdmission",
          type: "text",
          label: "21.a. Class of Admission",
          required: true,
        },
        {
          id: "part4.arrivalDepartureRecordNumber",
          type: "text",
          label: "21.b. Arrival/Departure Record Number (I-94)",
          required: true,
        },
        {
          id: "part4.dateOfArrival",
          type: "date",
          label: "21.c. Date of Arrival",
          required: true,
        },
        {
          id: "part4.passportNumber",
          type: "text",
          label: "22. Passport Number",
          required: true,
        },
        {
          id: "part4.travelDocumentNumber",
          type: "text",
          label: "23. Travel Document Number",
          required: false,
        },
        {
          id: "part4.countryOfIssuance",
          type: "text",
          label: "24. Country of Issuance",
          required: true,
        },
        {
          id: "part4.passportExpirationDate",
          type: "date",
          label: "Passport Expiration Date",
          required: true,
        },
        {
          id: "part4.beneficiary.cityOrTown",
          type: "text",
          label: "60.a. City or Town",
          required: true,
        },
        {
          id: "part4.beneficiary.state",
          type: "select",
          label: "60.b. State",
          required: true,
          options: US_STATES,
        },
      ],
    },
    {
      id: "part4-employment",
      title: "Part 4: Employment Information",
      questions: [
        {
          id: "part4.currentEmployerName",
          type: "text",
          label: "Employer Name",
          required: true,
        },
        {
          id: "part4.employerStreetNumberName",
          type: "text",
          label: "Employer Street Number and Name",
          required: true,
        },
        {
          id: "part4.employerUnitType",
          type: "select",
          label: "Employer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.employerAptSteFlrNumber",
          type: "text",
          label: "Employer Apartment/Suite/Floor Number",
          required: false,
        },
        {
          id: "part4.employerCityOrTown",
          type: "text",
          label: "Employer City or Town",
          required: true,
        },
        {
          id: "part4.employerState",
          type: "select",
          label: "Employer State",
          required: true,
          options: US_STATES,
        },
      ],
    },
    {
      id: "part4-beneficiary-employment",
      title: "Part 4: Beneficiary Employment Information",
      questions: [
        {
          id: "part4.beneficiaryEmploymentZipCode",
          type: "text",
          label: "26. Employment Zip Code",
          required: true,
        },
        {
          id: "part4.beneficiaryEmploymentProvince",
          type: "text",
          label: "26. Employment Province",
          required: true,
        },
        {
          id: "part4.beneficiaryEmploymentDateBegan",
          type: "date",
          label: "27. Date Employment Began",
          required: true,
        },
        {
          id: "part4.beneficiaryEmploymentPostalCode",
          type: "text",
          label: "26. Employment Postal Code",
          required: true,
        },
        {
          id: "part4.beneficiaryEmploymentCountry",
          type: "select",
          label: "26. Employment Country",
          required: true,
          options: [
            { value: "USA", label: "United States" },
            { value: "CAN", label: "Canada" },
            // Add more countries as needed
          ],
        },
      ],
    },
    {
      id: "part4-beneficiary-immigration-proceedings",
      title: "Part 4: Beneficiary Immigration Proceedings",
      questions: [
        {
          id: "part4.beneficiaryImmigrationProceedings",
          type: "radio",
          label:
            "28. Has the beneficiary ever been in immigration proceedings?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part4.proceedingType",
          type: "radio",
          label: "Select the type of proceedings",
          required: false,
          conditional: {
            dependsOn: "part4.beneficiaryImmigrationProceedings",
            values: "yes",
          },
          options: [
            { value: "0", label: "Removal" },
            { value: "1", label: "Exclusion" },
            { value: "2", label: "Rescission" },
            { value: "3", label: "Other Judicial Proceedings" },
          ],
        },

        {
          id: "part4.proceedingCityOrTown",
          type: "text",
          label: "55a. City or Town",
          required: false,
        },
        {
          id: "part4.proceedingState",
          type: "select",
          label: "55b. State",
          required: false,
          options: US_STATES,
        },
        {
          id: "part4.proceedingDate",
          type: "date",
          label: "56. Date",
          required: false,
        },
      ],
    },
    // {
    //   id: "part4-beneficiary-personal-info",
    //   title: "Part 4: Beneficiary Personal Information",
    //   questions: [
    //     {
    //       id: "part4.beneficiaryMiddleName",
    //       type: "text",
    //       label: "55c. Middle Name",
    //       required: false,
    //     },
    //     {
    //       id: "part4.beneficiaryFamilyName",
    //       type: "text",
    //       label: "55a. Family Name (Last Name)",
    //       required: true,
    //     },
    //     {
    //       id: "part4.beneficiaryGivenName",
    //       type: "text",
    //       label: "55b. Given Name (First Name)",
    //       required: true,
    //     },
    //     {
    //       id: "part4.beneficiaryUnit",
    //       type: "select",
    //       label: "Unit Type",
    //       required: false,
    //       options: [
    //         { value: "APT", label: "Apartment" },
    //         { value: "STE", label: "Suite" },
    //         { value: "FLR", label: "Floor" },
    //       ],
    //     },
    //     {
    //       id: "part4.beneficiaryAptSteFlrNumber",
    //       type: "text",
    //       label: "Apt/Ste/Flr Number",
    //       required: false,
    //     },
    //     {
    //       id: "part4.beneficiaryCityOrTown",
    //       type: "text",
    //       label: "City or Town",
    //       required: true,
    //     },
    //     {
    //       id: "part4.beneficiaryProvince",
    //       type: "text",
    //       label: "Province",
    //       required: false,
    //     },
    //     {
    //       id: "part4.beneficiaryCountry",
    //       type: "text",
    //       label: "Country",
    //       required: true,
    //     },
    //     {
    //       id: "part4.beneficiaryPostalCode",
    //       type: "text",
    //       label: "Postal Code",
    //       required: true,
    //     },
    //   ],
    // },
    {
      id: "part4-beneficiary-address",
      title: "Part 4: Beneficiary's Address",
      questions: [
        {
          id: "part4.beneficiaryStreetNumberName",
          type: "text",
          label: "56. Street Number and Name",
          required: true,
        },
        {
          id: "part4.beneficiaryUnit",
          type: "radio",
          label: "57. Unit",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part4.beneficiaryAptSteFlrNumber",
          type: "text",
          label: "57. Apartment/Suite/Floor Number",
          required: false,
        },
        {
          id: "part4.beneficiaryStreetNumberNameIfSpouse",
          type: "text",
          label: "57. Street Number and Name (if different from spouse)",
          required: false,
        },
        {
          id: "part4.beneficiaryCityOrTown",
          type: "text",
          label: "57. City or Town",
          required: true,
        },
        {
          id: "part4.beneficiaryZipCode",
          type: "text",
          label: "57. ZIP Code",
          required: true,
        },
        {
          id: "part4.beneficiaryState",
          type: "select",
          label: "57. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part4.beneficiaryDateFrom",
          type: "date",
          label: "58.a. Date From",
          required: false,
        },
        {
          id: "part4.beneficiaryDateTo",
          type: "date",
          label: "58.b. Date To",
          required: false,
        },
        {
          id: "part4.beneficiaryProvince",
          type: "text",
          label: "57. Province",
          required: false,
        },
        {
          id: "part4.beneficiaryCountry",
          type: "text",
          label: "57. Country",
          required: true,
        },
        {
          id: "part4.beneficiaryPostalCode",
          type: "text",
          label: "57. Postal Code",
          required: false,
        },
        {
          id: "part4.beneficiaryVisaCityOrTown",
          type: "text",
          label: "61.a. City or Town for Visa",
          required: false,
        },
        {
          id: "part4.beneficiaryVisaProvince",
          type: "text",
          label: "61.b. Province for Visa",
          required: false,
        },
        {
          id: "part4.beneficiaryVisaCountry",
          type: "text",
          label: "61.c. Country for Visa",
          required: false,
        },
      ],
    },
    {
      id: "part5-previous-petition",
      title: "Part 5: Previous Petition Information",
      questions: [
        {
          id: "part5.previousPetition",
          type: "radio",
          label: "Have you previously filed a petition for this beneficiary?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part5.previousPetitionFamilyName",
          type: "text",
          label: "Family Name (Last Name) on Previous Petition",
          required: false,
        },
        {
          id: "part5.previousPetitionGivenName",
          type: "text",
          label: "Given Name (First Name) on Previous Petition",
          required: false,
        },
        {
          id: "part5.previousPetitionMiddleName",
          type: "text",
          label: "Middle Name on Previous Petition",
          required: false,
        },
        {
          id: "part5.previousPetitionResult",
          type: "text",
          label: "Result of Previous Petition",
          required: false,
        },
        {
          id: "part5.previousPetitionDateFiled",
          type: "date",
          label: "Date Filed for Previous Petition",
          required: false,
        },
        {
          id: "part5.previousPetitionCityOrTown",
          type: "text",
          label: "City or Town where Previous Petition was Filed",
          required: false,
        },
      ],
    },
    {
      id: "part5-other-information",
      title: "Part 5: Other Information",
      questions: [
        {
          id: "part5.otherInformation.state",
          type: "select",
          label: "3.b. State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part5.otherInformation.relative1.relationship",
          type: "text",
          label: "7. Relationship to You",
          required: true,
        },
        {
          id: "part5.otherInformation.relative1.familyName",
          type: "text",
          label: "6.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.otherInformation.relative1.givenName",
          type: "text",
          label: "6.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.otherInformation.relative1.middleName",
          type: "text",
          label: "6.c. Middle Name",
          required: false,
        },
        {
          id: "part5.otherInformation.relative2.familyName",
          type: "text",
          label: "8.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.otherInformation.relative2.givenName",
          type: "text",
          label: "8.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.otherInformation.relative2.middleName",
          type: "text",
          label: "8.c. Middle Name",
          required: false,
        },
        {
          id: "part5.otherInformation.relative2.relationship",
          type: "text",
          label: "9. Relationship to You",
          required: true,
        },
      ],
    },

    {
      id: "part6-petitioner",
      title: "Part 6: Petitioner Information",
      questions: [
        {
          id: "part6.petitioner.daytimePhoneNumber",
          type: "tel",
          label: "3. Daytime Phone Number",
          required: true,
        },
        {
          id: "part6.petitioner.email",
          type: "email",
          label: "5. Email Address",
          required: true,
        },
        {
          id: "part6.petitioner.mobileNumber",
          type: "tel",
          label: "4. Mobile Phone Number",
          required: false,
        },
        {
          id: "part6.petitioner.statement",
          type: "radio",
          label: "1. Statement 1",
          required: true,
          options: [
            {
              value: "A",
              label:
                "I can read and understand English, and I have read and understand every question and instruction on this petition and my answer to every question.",
            },
          ],
        },
        {
          id: "part6.petitioner.statementB",
          type: "radio",
          label: "1. Statement 2",
          required: true,
          options: [
            {
              value: "B",
              label:
                "I am fluent. I understood all of this information as interpreted.",
            },
          ],
        },
        {
          id: "part6.petitioner.preparer",
          type: "checkbox",
          label: "I provided or authorized.",
          required: true,
          options: [{ value: "C", label: "I provided or authorized." }],
        },

        {
          id: "part6.petitioner.language",
          type: "text",
          label: "Language",
          required: false,
        },

        {
          id: "part6.petitioner.preparerName",
          type: "text",
          label: "Preparer's Name",
          required: false,
        },
      ],
    },
    {
      id: "part7-interpreter",
      title: "Part 7: Interpreter Information",
      questions: [
        {
          id: "part7.interpreter.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part7.interpreter.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part7.interpreter.businessOrOrg",
          type: "text",
          label: "Business or Organization Name",
          required: false,
        },
        {
          id: "part7.interpreter.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
      ],
    },
    {
      id: "part7-interpreter-mailing-address",
      title: "Part 7: Interpreter's Mailing Address",
      questions: [
        {
          id: "part7.interpreterMailingAddress.streetNumberName",
          type: "text",
          label: "3. Street Number and Name",
          required: true,
        },
        {
          id: "part7.interpreterMailingAddress.unit",
          type: "radio",
          label: "3. Unit",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part7.interpreterMailingAddress.aptSteFlrNumber",
          type: "text",
          label: "3. Apt/Ste/Flr Number",
          required: false,
        },
        {
          id: "part7.interpreterMailingAddress.postalCode",
          type: "text",
          label: "3. Postal Code",
          required: false,
        },
        {
          id: "part7.interpreterMailingAddress.zipCode",
          type: "text",
          label: "3. ZIP Code",
          required: false,
        },
        {
          id: "part7.interpreterMailingAddress.state",
          type: "select",
          label: "3. State",
          required: false,
          options: US_STATES,
        },
        {
          id: "part7.interpreterMailingAddress.country",
          type: "text",
          label: "3. Country",
          required: false,
        },
        {
          id: "part7.interpreterMailingAddress.province",
          type: "text",
          label: "3. Province",
          required: false,
        },
      ],
    },
    {
      id: "part7-interpreter-certification",
      title: "Part 7: Interpreter's Certification",
      questions: [
        {
          id: "part7.interpreterCertification.language",
          type: "text",
          label: "4. Language",
          required: true,
        },
      ],
    },

    {
      id: "part7-interpreter-contact-information",
      title: "Part 7: Interpreter's Contact Information",
      questions: [
        {
          id: "part7.interpreterContactInformation.daytimeTelephone",
          type: "tel",
          label: "5. Daytime Telephone Number",
          required: false,
        },
        {
          id: "part7.interpreterContactInformation.email",
          type: "email",
          label: "6. Email Address",
          required: false,
        },
        {
          id: "part7.interpreterContactInformation.mobileTelephone",
          type: "tel",
          label: "5. Mobile Telephone Number",
          required: false,
        },
      ],
    },
    {
      id: "part8-preparer-full-name",
      title: "Part 8: Preparer's Full Name",
      questions: [
        {
          id: "part8.preparerFullName.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part8.preparerFullName.businessName",
          type: "text",
          label: "2. Business or Organization Name",
          required: false,
        },
        {
          id: "part8.preparerFullName.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
      ],
    },
    {
      id: "part8-preparer-mailing-address",
      title: "Part 8: Preparer's Mailing Address",
      questions: [
        {
          id: "part8.preparerMailingAddress.cityOrTown",
          type: "text",
          label: "3. City or Town",
          required: true,
        },
        {
          id: "part8.preparerMailingAddress.streetNumberName",
          type: "text",
          label: "3. Street Number and Name",
          required: true,
        },
        {
          id: "part8.preparerMailingAddress.unit",
          type: "radio",
          label: "3. Unit",
          required: false,
          options: [
            { value: "APT", label: "Apartment" },
            { value: "STE", label: "Suite" },
            { value: "FLR", label: "Floor" },
          ],
        },
        {
          id: "part8.preparerMailingAddress.aptSteFlrNumber",
          type: "text",
          label: "3. Apt/Ste/Flr Number",
          required: false,
        },
      ],
    },
    {
      id: "part8-preparers-mailing-address",
      title: "Part 8: Preparer's Mailing Address",
      questions: [
        {
          id: "part8.preparersMailingAddressPostalCode",
          type: "text",
          label: "3. Postal Code",
          required: true,
        },
        {
          id: "part8.preparersMailingAddressZipCode",
          type: "text",
          label: "3. Zip Code",
          required: true,
        },
        {
          id: "part8.preparersMailingAddressState",
          type: "select",
          label: "3. State",
          required: US_STATES,
        },
        {
          id: "part8.preparersMailingAddressCountry",
          type: "text",
          label: "3. Country",
          required: true,
        },
        {
          id: "part8.preparersMailingAddressProvince",
          type: "text",
          label: "3. Province",
          required: true,
        },
      ],
    },
    {
      id: "part8-preparers-contact-information",
      title: "Part 8: Preparer's Contact Information",
      questions: [
        {
          id: "part8.preparersContactInformationFaxNumber",
          type: "tel",
          label: "5. Fax Number",
          required: false,
        },
        {
          id: "part8.preparersContactInformationDaytimePhoneNumber",
          type: "tel",
          label: "4. Daytime Phone Number",
          required: true,
        },
        {
          id: "part8.preparersContactInformationEmail",
          type: "email",
          label: "6. Email Address",
          required: false,
        },
      ],
    },
    {
      id: "part8-preparers-statement",
      title: "Part 8: Preparer's Statement",
      questions: [
        {
          id: "part8.preparersStatement",
          type: "radio",
          label: "7. Preparer's Statement",
          required: true,
          options: [
            {
              value: "A",
              label:
                "I am not an attorney or accredited representative but have prepared this form on behalf of the applicant.",
            },
            {
              value: "B",
              label:
                "I am an attorney or accredited representative and my representation extends beyond the preparation of this form.",
            },
          ],
        },
        {
          id: "part8.preparersStatementAttorneyRepresentation",
          type: "radio",
          label: "7.b. Attorney Representation",
          required: true,
          options: [{ value: "Y", label: "Yes" }],
        },
      ],
    },

    {
      id: "part9-alien-registration-number",
      title: "Part 9: Alien Registration Number",
      questions: [
        {
          id: "part9.alienRegistrationNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },

    {
      id: "part9-additional-information",
      title: "Part 9: Additional Information",
      questions: [
        {
          id: "part9.additionalInformation5cItemNumber",
          type: "text",
          label: "5.c. Item Number",
          required: false,
        },
        {
          id: "part9.additionalInformation6aPageNumber",
          type: "text",
          label: "6.a. Page Number",
          required: false,
        },
        {
          id: "part9.additionalInformation6bPartNumber",
          type: "text",
          label: "6.b. Part Number",
          required: false,
        },
        {
          id: "part9.additionalInformation6cItemNumber",
          type: "text",
          label: "6.c. Item Number",
          required: false,
        },
        {
          id: "part9.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: false,
        },
        {
          id: "part9.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: false,
        },
        {
          id: "part9.middleName",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part9.additionalInformation6d",
          type: "text",
          label: "6.d. Additional Information",
          required: false,
        },
        {
          id: "part9.additionalInformation5d",
          type: "text",
          label: "5.d. Additional Information",
          required: false,
        },
        {
          id: "part9.additionalInformation9aPageNumber",
          type: "text",
          label: "9.a. Page Number",
          required: false,
        },
        {
          id: "part9.additionalInformation7bPartNumber",
          type: "text",
          label: "7.b. Part Number",
          required: false,
        },
        {
          id: "part9.additionalInformation7cItemNumber",
          type: "text",
          label: "7.c. Item Number",
          required: false,
        },
        {
          id: "part9.additionalInformation7d",
          type: "text",
          label: "7.d. Additional Information",
          required: false,
        },
        {
          id: "part9.additionalInformationPageNumber3a",
          type: "text",
          label: "3.a. Page Number",
          required: false,
        },
        {
          id: "part9.additionalInformationPartNumber3b",
          type: "text",
          label: "3.b. Part Number",
          required: false,
        },
        {
          id: "part9.additionalInformationItemNumber3c",
          type: "text",
          label: "3.c. Item Number",
          required: false,
        },
        {
          id: "part9.additionalInformation3d",
          type: "text",
          label: "3.d. Additional Information",
          required: false,
        },
        {
          id: "part9.additionalInformationPageNumber4a",
          type: "text",
          label: "4.a. Page Number",
          required: false,
        },
        {
          id: "part9.additionalInformationPartNumber4b",
          type: "text",
          label: "4.b. Part Number",
          required: false,
        },
        {
          id: "part9.additionalInformationItemNumber4c",
          type: "text",
          label: "4.c. Item Number",
          required: false,
        },
        {
          id: "part9.additionalInformation4d",
          type: "text",
          label: "4.d. Additional Information",
          required: false,
        },
        {
          id: "part9.additionalInformationPageNumber5a",
          type: "text",
          label: "5.a. Page Number",
          required: false,
        },
        {
          id: "part9.additionalInformationPartNumber5b",
          type: "text",
          label: "5.b. Part Number",
          required: false,
        },
      ],
    },
  ],
  pdfFieldMappings: [
    // { questionId: "part2.lastName", pdfFieldName: "Pt2Line4a_FamilyName" },
    // { questionId: "part2.firstName", pdfFieldName: "Pt2Line4b_GivenName" },
    // { questionId: "part2.middlename", pdfFieldName: "Pt2Line4c_MiddleName" },
    // { questionId: "part4.lastName", pdfFieldName: "Pt4Line4a_FamilyName" },
    // { questionId: "part4.firstName", pdfFieldName: "Pt4Line4b_GivenName" },
  ],
  requiredDocuments: [
    "Proof of your U.S. citizenship (birth certificate, naturalization certificate, or U.S. passport)",
    "Proof of relationship to beneficiary (birth certificate, marriage certificate, etc.)",
    "Evidence of legal name change (if applicable)",
    "Two passport-style photos of the beneficiary",
  ],
  instructions: [
    "Complete all applicable sections",
    "Answer all questions - use N/A if not applicable",
    "Sign and date Part 6",
    "Include the $535 filing fee",
    "Mail to the appropriate USCIS Lockbox facility",
  ],
};
const I_212_DEFINITION: FormDefinition = {
  id: "i-212",
  code: "I-212",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "part1-attorney-information",
      title: "Part 1: Attorney or Accredited Representative Information",
      description:
        "Provide details about your attorney or accredited representative, if applicable.",
      questions: [
        {
          id: "part1.attorneyG28Attached",
          type: "radio",
          label: "Is Form G-28 attached?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
          helpText:
            "Form G-28 is required if you have an attorney or accredited representative.",
        },
        {
          id: "part1.attorneyStateBarNumber",
          type: "text",
          label: "Attorney State Bar Number",
          helpText: "Enter the state bar number of your attorney.",
        },
        {
          id: "part1.attorneyUSCISAccountNumber",
          type: "text",
          label: "Attorney USCIS Online Account Number",
          helpText:
            "Provide the USCIS online account number if your attorney has one.",
        },
      ],
    },
    {
      id: "part1-applicant-information",
      title: "Part 1: Applicant Information",
      description: "Enter your personal information as the applicant.",
      questions: [
        {
          id: "part1.aliennumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          helpText:
            "Your A-Number is an 8- or 9-digit number assigned by USCIS.",
        },
        {
          id: "part1.fullName.familyname",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.fullName.givenname",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.fullName.middlename",
          type: "text",
          label: "Middle Name",
        },
        {
          id: "part1.otherNamesUsed.familyname",
          type: "text",
          label: "Other Names Used - Family Name (Last Name)",
          helpText: "Include any other names you have used.",
        },
        {
          id: "part1.otherNamesUsed.givenname",
          type: "text",
          label: "Other Names Used - Given Name (First Name)",
        },
        {
          id: "part1.otherNamesUsed.middlename",
          type: "text",
          label: "Other Names Used - Middle Name",
        },
        {
          id: "part1.otherNamesUsed.familyName2",
          type: "text",
          label: "Other Names Used - Additional Family Name (Last Name)",
        },
        {
          id: "part1.otherNamesUsed.givenName2",
          type: "text",
          label: "Other Names Used - Additional Given Name (First Name)",
        },
        {
          id: "part1.otherNamesUsed.middleName2",
          type: "text",
          label: "Other Names Used - Additional Middle Name",
        },
      ],
    },
    {
      id: "part1-mailing-address",
      title: "Part 1: Mailing Address",
      description: "Provide your current mailing address.",
      questions: [
        {
          id: "part1.mailingAddress.inCareOfName",
          type: "text",
          label: "In Care Of Name",
          helpText:
            "If applicable, enter the name of the person who receives your mail.",
        },
        {
          id: "part1.mailingAddress.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part1.mailingAddress.unit",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.mailingAddress.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part1.mailingAddress.cityortown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part1.mailingAddress.state",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part1.mailingAddress.zipcode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part1.mailingAddress.province",
          type: "text",
          label: "Province",
          helpText: "If applicable, enter the province.",
        },
        {
          id: "part1.mailingAddress.postalcode",
          type: "text",
          label: "Postal Code",
          helpText: "If applicable, enter the postal code.",
        },
        {
          id: "part1.mailingAddress.country",
          type: "text",
          label: "Country",
          required: true,
        },
        {
          id: "part1.mailingAddress.sameAsPhysical",
          type: "radio",
          label: "Is your mailing address the same as your physical address?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
      ],
    },
    {
      id: "part1-physical-address",
      title: "Part 1: Physical Address",
      description: "Provide your current physical address.",
      questions: [
        {
          id: "part1.physicalAddress.streetnumbername",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part1.physicalAddress.unit",
          type: "select",
          label: "Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part1.physicalAddress.aptSteFlrNumber",
          type: "text",
          label: "Unit Number",
        },
        {
          id: "part1.physicalAddress.cityortown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part1.physicalAddress.state",
          type: "select",
          label: "State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part1.physicalAddress.zipcode",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part1.physicalAddress.province",
          type: "text",
          label: "Province",
          helpText: "If applicable, enter the province.",
        },
        {
          id: "part1.physicalAddress.postalcode",
          type: "text",
          label: "Postal Code",
          helpText: "If applicable, enter the postal code.",
        },
        {
          id: "part1.physicalAddress.country",
          type: "text",
          label: "Country",
          required: true,
        },
      ],
    },
    {
      id: "part1-other-information",
      title: "Part 1: Other Information",
      description:
        "Provide additional information related to your application.",
      questions: [
        {
          id: "part1.otherInformation.dosConsularCaseNumber",
          type: "text",
          label: "DOS Consular Case Number",
          helpText:
            "Enter your Department of State consular case number, if applicable.",
        },
        {
          id: "part1.otherInformation.embassyCity",
          type: "text",
          label: "Embassy City",
          helpText:
            "Enter the city of the U.S. embassy or consulate handling your case.",
        },
        {
          id: "part1.otherInformation.embassyCountry",
          type: "text",
          label: "Embassy Country",
          helpText:
            "Enter the country of the U.S. embassy or consulate handling your case.",
        },
        {
          id: "part1.otherInformation.uscisReceiptNumber",
          type: "text",
          label: "USCIS Receipt Number",
          helpText: "Enter your USCIS receipt number, if applicable.",
        },
        {
          id: "part1.otherInformation.ssn",
          type: "ssn",
          label: "U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part1.otherInformation.uscisOnlineAccountNumber",
          type: "text",
          label: "USCIS Online Account Number",
          helpText: "Provide your USCIS online account number, if applicable.",
        },
        {
          id: "part1.otherInformation.sex",
          type: "radio",
          label: "Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
          helpText: "Select your gender as per your official documents.",
        },
        {
          id: "part1.otherInformation.dateofbirth",
          type: "date",
          label: "Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.otherInformation.cityOfBirth",
          type: "text",
          label: "City of Birth",
          required: true,
        },
        {
          id: "part1.otherInformation.stateProvinceOfBirth",
          type: "text",
          label: "State/Province of Birth",
          helpText: "Enter the state or province of your birth, if applicable.",
        },
        {
          id: "part1.otherInformation.countryofbirth",
          type: "text",
          label: "Country of Birth",
          required: true,
        },
        {
          id: "part1.otherInformation.countryofcitizenship",
          type: "text",
          label: "Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part1.otherInformation.fileLocation",
          type: "text",
          label: "File Location",
          helpText:
            "Provide the location where your file is currently held, if known.",
        },
        {
          id: "part1.otherInformation.dateFiled",
          type: "date",
          label: "Date Filed (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date you filed your application, if applicable.",
        },
        {
          id: "part1.otherInformation.submittingI601",
          type: "radio",
          label: "Are you submitting Form I-601?",
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.otherInformation.i601ReceiptNumber",
          type: "text",
          label: "I-601 Receipt Number",
          helpText:
            "Enter the receipt number for your Form I-601, if applicable.",
        },
        {
          id: "part1.otherInformation.i601FileLocation",
          type: "text",
          label: "I-601 File Location",
          helpText:
            "Provide the location where your I-601 file is currently held, if known.",
        },
        {
          id: "part1.otherInformation.i601DateFiled",
          type: "date",
          label: "I-601 Date Filed (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
          helpText: "Enter the date you filed your Form I-601, if applicable.",
        },
      ],
    },

    {
      id: "part2-removal-as-arriving-alien",
      title: "Part 2: Removal as Arriving Alien",
      description: "Provide details about your removal as an arriving alien.",
      questions: [
        {
          id: "part1.removalAsArrivingAlien",
          type: "radio",
          label: "1. Were you removed as an arriving alien?",
          required: true,
          options: [
            { value: "1b", label: "Yes, under section 235(b)(1)" },
            { value: "1c", label: "Yes, under section 240" },
            { value: "1d", label: "No" },
          ],
        },
        {
          id: "part1.removalAsArrivingAlienYesNo",
          type: "radio",
          label: "1. Were you removed as an arriving alien?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.locationRemoved.city",
          type: "text",
          label: "2. City where you were removed",
          required: true,
        },
        {
          id: "part1.dateRemoved",
          type: "date",
          label: "3. Date of removal (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.locationRemoved.state",
          type: "select",
          label: "4. State where you were removed",
          required: true,
          options: US_STATES,
        },
      ],
    },
    {
      id: "part2-removal-as-deportable-alien",
      title: "Part 2: Removal as Deportable Alien",
      description: "Provide details about your removal as a deportable alien.",
      questions: [
        {
          id: "part1.removalAsDeportableAlien",
          type: "radio",
          label: "5. Were you removed as a deportable alien?",
          required: true,
          options: [
            { value: "5b", label: "Yes, under section 237(a)(1)(B)" },
            { value: "5c", label: "Yes, under section 237(a)(1)(C)" },
            { value: "5d", label: "No" },
          ],
        },
        {
          id: "part1.removalAsDeportableAlienYesNo",
          type: "radio",
          label: "5. Were you removed as a deportable alien?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.locationRemovedAsDeportable.city",
          type: "text",
          label: "6. City where you were removed as a deportable alien",
          required: true,
        },
        {
          id: "part1.locationRemovedAsDeportable.state",
          type: "select",
          label: "7. State where you were removed as a deportable alien",
          required: true,
          options: US_STATES,
        },
      ],
    },
    {
      id: "part2-unlawful-presence",
      title: "Part 2: Unlawful Presence",
      description: "Provide details about any unlawful presence in the U.S.",
      questions: [
        {
          id: "part1.entryAfterUnlawfulPresenceYesNo",
          type: "radio",
          label: "8. Did you re-enter the U.S. after unlawful presence?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.unlawfulPresence.fromDate",
          type: "date",
          label: "9. Unlawful presence start date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.unlawfulPresence.toDate",
          type: "date",
          label: "10. Unlawful presence end date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.unlawfulPresence.departureDate",
          type: "date",
          label: "11. Date of departure (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.unlawfulPresence.departureLocation.city",
          type: "text",
          label: "12. City of departure",
          required: true,
        },
        {
          id: "part1.unlawfulPresence.departureLocation.state",
          type: "select",
          label: "13. State of departure",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.unlawfulPresence.reentryLocation.city",
          type: "text",
          label: "14. City of re-entry",
          required: true,
        },
        {
          id: "part1.unlawfulPresence.reentryLocation.state",
          type: "select",
          label: "15. State of re-entry",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.unlawfulPresence.reentryDate",
          type: "date",
          label: "16. Date of re-entry (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part2-entry-after-removal",
      title: "Part 2: Entry After Removal",
      description:
        "Provide details about any entry into the U.S. after removal.",
      questions: [
        {
          id: "part1.entryAfterRemovalYesNo",
          type: "radio",
          label: "17. Did you enter the U.S. after removal?",
          required: true,
          options: [
            { value: "Y", label: "Yes" },
            { value: "N", label: "No" },
          ],
        },
        {
          id: "part1.entryAfterRemoval.exclusionDate",
          type: "date",
          label: "18. Date of exclusion (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part1.entryAfterRemoval.reentryLocation.city",
          type: "text",
          label: "19. City of re-entry after removal",
          required: true,
        },
        {
          id: "part1.entryAfterRemoval.reentryLocation.state",
          type: "select",
          label: "20. State of re-entry after removal",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1.entryAfterRemoval.reentryDate",
          type: "date",
          label: "21. Date of re-entry after removal (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part3-request-for-permission",
      title: "Part 3: Request for Permission to Reapply",
      description:
        "Provide details about your request for permission to reapply for admission into the United States.",
      questions: [
        {
          id: "part3.requestForPermission.status",
          type: "radio",
          label: "1. Current Status",
          required: true,
          options: [
            { value: "P", label: "Parolee" },
            { value: "V", label: "Visa Holder" },
            { value: "S", label: "Student" },
            { value: "O", label: "Other" },
          ],
          helpText:
            "Select your current immigration status. If 'Other', provide an explanation below.",
        },
        {
          id: "part3.requestForPermission.otherStatusExplanation",
          type: "text",
          label: "1.a. Other Status Explanation",
          helpText:
            "Provide a detailed explanation of your current status if it does not fit the listed categories.",
        },
        {
          id: "part3.requestForPermission.reasonForReentry",
          type: "textarea",
          label: "2. Reason for Reentry",
          required: true,

          helpText:
            "Provide a detailed explanation of your reasons for reentry, including any supporting information.",
        },
      ],
    },
    {
      id: "part3-family-members",
      title: "Part 3: Family Members",
      description:
        "Provide information about your family members related to this application.",
      questions: [
        {
          id: "part3.familyMembers.familyname",
          type: "text",
          label: "3.a. Family Name (Last Name)",
          required: true,
          helpText: "Enter the last name of the family member.",
        },
        {
          id: "part3.familyMembers.givenname",
          type: "text",
          label: "3.b. Given Name (First Name)",
          required: true,
          helpText: "Enter the first name of the family member.",
        },
        {
          id: "part3.familyMembers.middlename",
          type: "text",
          label: "3.c. Middle Name",
          helpText:
            "Enter the middle name of the family member, if applicable.",
        },
        {
          id: "part3.familyMembers.relationship",
          type: "text",
          label: "3.d. Relationship",
          required: true,
          helpText:
            "Describe your relationship to the family member (e.g., spouse, child).",
        },
      ],
    },
    {
      id: "part3-relative-status",
      title: "Part 3: Relative's Immigration Status",
      description:
        "Indicate the immigration status of your relative in the United States.",
      questions: [
        {
          id: "part3.relativeStatus",
          type: "radio",
          label: "4. Relative's Status",
          required: true,
          options: [
            { value: "LPR", label: "Lawful Permanent Resident" },
            { value: "CIT", label: "U.S. Citizen" },
          ],
          helpText:
            "Select the current immigration status of your relative in the United States.",
        },
      ],
    },
    {
      id: "part4-physical-attributes",
      title: "Part 4: Physical Attributes",
      description: "Provide information about your physical characteristics.",
      questions: [
        {
          id: "part4.ethnicity",
          type: "radio",
          label: "1. Ethnicity",
          required: true,
          options: [
            { value: "H", label: "Hispanic or Latino" },
            { value: "N", label: "Not Hispanic or Latino" },
          ],
          helpText: "Select the option that best describes your ethnicity.",
        },
        {
          id: "part4.race",
          type: "checkbox",
          label: "2. Race",
          required: true,
          options: [
            { value: "AS", label: "Asian" },
            { value: "WH", label: "White" },
            { value: "BL", label: "Black or African American" },
            { value: "AI", label: "American Indian or Alaska Native" },
            { value: "HW", label: "Native Hawaiian or Other Pacific Islander" },
          ],
          helpText: "You may select one or more races.",
        },
        {
          id: "part4.heightFeet",
          type: "select",
          label: "3.a. Height (Feet)",
          required: true,
          options: [
            { value: "4", label: "4" },
            { value: "5", label: "5" },
            { value: "6", label: "6" },
            { value: "7", label: "7" },
          ],
          helpText: "Select your height in feet.",
        },
        {
          id: "part4.heightInches",
          type: "text",
          label: "3.b. Height (Inches)",
          required: true,
          placeholder: "0-11",
          helpText: "Enter the remaining inches of your height.",
        },
        {
          id: "part4.weight",
          type: "text",
          label: "4. Weight (in pounds) First Box",
          required: true,
          placeholder: "e.g., if you weigh 150 pounds, enter First Box 1 ",
          helpText: "Enter your weight in pounds.",
        },
        {
          id: "part4.weight1",
          type: "text",
          label: "4. Weight (in pounds) Second Box",
          required: true,
          placeholder: "e.g., if you weigh 150 pounds, enter Second Box 5 ",
          helpText: "Enter your weight in pounds.",
        },
        {
          id: "part4.weight2",
          type: "text",
          label: "4. Weight (in pounds) Third Box",
          required: true,
          placeholder: "e.g., if you weigh 150 pounds, enter Third Box 0",
          helpText: "Enter your weight in pounds.",
        },
        {
          id: "part4.eyeColor",
          type: "radio",
          label: "5. Eye Color",
          required: true,
          options: [
            { value: "BU", label: "Blue" },
            { value: "BL", label: "Black" },
            { value: "BN", label: "Brown" },
            { value: "GR", label: "Green" },
            { value: "GN", label: "Gray" },
            { value: "HA", label: "Hazel" },
            { value: "MA", label: "Maroon" },
            { value: "PN", label: "Pink" },
            { value: "UN", label: "Unknown" },
          ],
          helpText: "Select the color that best matches your eyes.",
        },
        {
          id: "part4.hairColor",
          type: "radio",
          label: "6. Hair Color",
          required: true,
          options: [
            { value: "NH", label: "No Hair" },
            { value: "BL", label: "Black" },
            { value: "BN", label: "Brown" },
            { value: "BR", label: "Blond" },
            { value: "GR", label: "Gray" },
            { value: "RD", label: "Red" },
            { value: "SD", label: "Sandy" },
            { value: "WH", label: "White" },
            { value: "OT", label: "Other" },
          ],
          helpText: "Select the color that best matches your hair.",
        },
      ],
    },
    {
      id: "part5-address-history",
      title: "Part 5: Address History",
      description: "Provide your address history for the past five years.",
      questions: [
        {
          id: "part5.addressHistory1.streetnumbername",
          type: "text",
          label: "1.a. Street Number and Name",
          required: true,
        },
        {
          id: "part5.addressHistory1.unitType",
          type: "select",
          label: "1.b. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.addressHistory1.aptSteFlrNumber",
          type: "text",
          label: "1.c. Unit Number",
        },
        {
          id: "part5.addressHistory1.cityortown",
          type: "text",
          label: "1.d. City or Town",
          required: true,
        },
        {
          id: "part5.addressHistory1.state",
          type: "select",
          label: "1.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part5.addressHistory1.zipcode",
          type: "text",
          label: "1.f. ZIP Code",
          required: true,
        },
        {
          id: "part5.addressHistory1.province",
          type: "text",
          label: "1.g. Province",
        },
        {
          id: "part5.addressHistory1.postalcode",
          type: "text",
          label: "1.h. Postal Code",
        },
        {
          id: "part5.addressHistory1.country",
          type: "text",
          label: "1.i. Country",
          required: true,
        },
        {
          id: "part5.addressHistory1.fromDate",
          type: "date",
          label: "1.j. From Date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.addressHistory1.toDate",
          type: "date",
          label: "1.k. To Date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.addressHistory2.streetnumbername",
          type: "text",
          label: "2.a. Street Number and Name",
        },
        {
          id: "part5.addressHistory2.unitType",
          type: "select",
          label: "2.b. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.addressHistory2.aptSteFlrNumber",
          type: "text",
          label: "2.c. Unit Number",
        },
        {
          id: "part5.addressHistory2.cityortown",
          type: "text",
          label: "2.d. City or Town",
        },
        {
          id: "part5.addressHistory2.state",
          type: "select",
          label: "2.e. State",
          options: US_STATES,
        },
        {
          id: "part5.addressHistory2.zipcode",
          type: "text",
          label: "2.f. ZIP Code",
        },
        {
          id: "part5.addressHistory2.province",
          type: "text",
          label: "2.g. Province",
        },
        {
          id: "part5.addressHistory2.postalcode",
          type: "text",
          label: "2.h. Postal Code",
        },
        {
          id: "part5.addressHistory2.country",
          type: "text",
          label: "2.i. Country",
        },
        {
          id: "part5.addressHistory2.fromDate",
          type: "date",
          label: "2.j. From Date (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.addressHistory2.toDate",
          type: "date",
          label: "2.k. To Date (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part5-employment-history",
      title: "Part 5: Employment History",
      description: "Provide your employment history for the past five years.",
      questions: [
        {
          id: "part5.employmentHistory1.employerName",
          type: "text",
          label: "3.a. Employer Name",
          required: true,
        },
        {
          id: "part5.employmentHistory1.streetnumbername",
          type: "text",
          label: "3.b. Street Number and Name",
          required: true,
        },
        {
          id: "part5.employmentHistory1.unitType",
          type: "select",
          label: "3.c. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.employmentHistory1.aptSteFlrNumber",
          type: "text",
          label: "3.d. Unit Number",
        },
        {
          id: "part5.employmentHistory1.cityortown",
          type: "text",
          label: "3.e. City or Town",
          required: true,
        },
        {
          id: "part5.employmentHistory1.state",
          type: "select",
          label: "3.f. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part5.employmentHistory1.zipcode",
          type: "text",
          label: "3.g. ZIP Code",
          required: true,
        },
        {
          id: "part5.employmentHistory1.province",
          type: "text",
          label: "3.h. Province",
        },
        {
          id: "part5.employmentHistory1.postalcode",
          type: "text",
          label: "3.i. Postal Code",
        },
        {
          id: "part5.employmentHistory1.country",
          type: "text",
          label: "3.j. Country",
          required: true,
        },
        {
          id: "part5.employmentHistory1.occupation",
          type: "text",
          label: "3.k. Occupation",
          required: true,
        },
        {
          id: "part5.employmentHistory1.fromDate",
          type: "date",
          label: "3.l. From Date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.employmentHistory1.toDate",
          type: "date",
          label: "3.m. To Date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.employmentHistory2.employerName",
          type: "text",
          label: "4.a. Employer Name",
        },
        {
          id: "part5.employmentHistory2.streetnumbername",
          type: "text",
          label: "4.b. Street Number and Name",
        },
        {
          id: "part5.employmentHistory2.unitType",
          type: "select",
          label: "4.c. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.employmentHistory2.aptSteFlrNumber",
          type: "text",
          label: "4.d. Unit Number",
        },
        {
          id: "part5.employmentHistory2.cityortown",
          type: "text",
          label: "4.e. City or Town",
        },
        {
          id: "part5.employmentHistory2.state",
          type: "select",
          label: "4.f. State",
          options: US_STATES,
        },
        {
          id: "part5.employmentHistory2.zipcode",
          type: "text",
          label: "4.g. ZIP Code",
        },
        {
          id: "part5.employmentHistory2.province",
          type: "text",
          label: "4.h. Province",
        },
        {
          id: "part5.employmentHistory2.postalcode",
          type: "text",
          label: "4.i. Postal Code",
        },
        {
          id: "part5.employmentHistory2.country",
          type: "text",
          label: "4.j. Country",
        },
        {
          id: "part5.employmentHistory2.occupation",
          type: "text",
          label: "4.k. Occupation",
        },
        {
          id: "part5.employmentHistory2.fromDate",
          type: "date",
          label: "4.l. From Date (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.employmentHistory2.toDate",
          type: "date",
          label: "4.m. To Date (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
      ],
    },
    {
      id: "part5-parental-info",
      title: "Part 5: Parental Information",
      description: "Provide information about your parents.",
      questions: [
        {
          id: "part5.motherInfo.familyname",
          type: "text",
          label: "5.a. Mother's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.motherInfo.givenname",
          type: "text",
          label: "5.b. Mother's Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.motherInfo.middlename",
          type: "text",
          label: "5.c. Mother's Middle Name",
        },
        {
          id: "part5.motherBirthName.familyname",
          type: "text",
          label: "5.d. Mother's Birth Family Name (Last Name)",
        },
        {
          id: "part5.motherBirthName.givenname",
          type: "text",
          label: "5.e. Mother's Birth Given Name (First Name)",
        },
        {
          id: "part5.motherBirthName.middlename",
          type: "text",
          label: "5.f. Mother's Birth Middle Name",
        },
        {
          id: "part5.motherInfo.dateofbirth",
          type: "date",
          label: "5.g. Mother's Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.motherInfo.countryofbirth",
          type: "text",
          label: "5.h. Mother's Country of Birth",
          required: true,
        },
        {
          id: "part5.motherInfo.currentCityTownResidence",
          type: "text",
          label: "5.i. Mother's Current City/Town of Residence",
        },
        {
          id: "part5.motherInfo.currentCountryResidence",
          type: "text",
          label: "5.j. Mother's Current Country of Residence",
        },
        {
          id: "part5.fatherInfo.familyname",
          type: "text",
          label: "6.a. Father's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.fatherInfo.givenname",
          type: "text",
          label: "6.b. Father's Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.fathersMiddleName",
          type: "text",
          label: "6.c. Father's Middle Name",
        },
        {
          id: "part5.fathersBirthFamilyName",
          type: "text",
          label: "6.d. Father's Birth Family Name (Last Name)",
        },
        {
          id: "part5.fathersBirthGivenName",
          type: "text",
          label: "6.e. Father's Birth Given Name (First Name)",
        },
        {
          id: "part5.fathersBirthMiddleName",
          type: "text",
          label: "6.f. Father's Birth Middle Name",
        },
        {
          id: "part5.fathersDateOfBirth",
          type: "date",
          label: "6.g. Father's Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.fathersCityTownOfBirth",
          type: "text",
          label: "6.h. Father's City/Town of Birth",
        },
        {
          id: "part5.fathersCountryOfBirth",
          type: "text",
          label: "6.i. Father's Country of Birth",
          required: true,
        },
        {
          id: "part5.fathersCurrentCityTownOfResidence",
          type: "text",
          label: "6.j. Father's Current City/Town of Residence",
        },
        {
          id: "part5.fathersCurrentCountryOfResidence",
          type: "text",
          label: "6.k. Father's Current Country of Residence",
        },
      ],
    },
    {
      id: "part5-marital-info",
      title: "Part 5: Marital Information",
      description: "Provide your current and prior marital information.",
      questions: [
        {
          id: "part5.currentMaritalStatus",
          type: "select",
          label: "7.a. Current Marital Status",
          options: [
            { value: "S", label: "Single" },
            { value: "M", label: "Married" },
            { value: "D", label: "Divorced" },
            { value: "W", label: "Widowed" },
            { value: "O", label: "Other" },
          ],
          required: true,
        },
        {
          id: "part5.currentMaritalStatusOther",
          type: "text",
          label: "7.b. If Other, specify",
        },
        {
          id: "part5.numberOfMarriages",
          type: "text",
          label: "7.c. Number of Marriages (including current marriage)",
          required: true,
        },
        {
          id: "part5.mothersCityTownOfBirth",
          type: "text",
          label: "7.d. Mother's City/Town of Birth",
        },
        {
          id: "part5.currentSpouseFamilyName",
          type: "text",
          label: "8.a. Current Spouse's Family Name (Last Name)",
        },
        {
          id: "part5.currentSpouseGivenName",
          type: "text",
          label: "8.b. Current Spouse's Given Name (First Name)",
        },
        {
          id: "part5.currentSpouseMiddleName",
          type: "text",
          label: "8.c. Current Spouse's Middle Name",
        },
        {
          id: "part5.currentSpouseDateOfBirth",
          type: "date",
          label: "8.d. Current Spouse's Date of Birth (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.dateOfMarriageToCurrentSpouse",
          type: "date",
          label: "8.e. Date of Marriage to Current Spouse (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.currentSpouseAlienNumber",
          type: "text",
          label: "8.f. Current Spouse's Alien Registration Number (A-Number)",
        },
        {
          id: "part5.currentSpousePlaceOfBirthCity",
          type: "text",
          label: "8.g. Current Spouse's Place of Birth (City)",
        },
        {
          id: "part5.currentSpousePlaceOfBirthCountry",
          type: "text",
          label: "8.h. Current Spouse's Place of Birth (Country)",
        },
        {
          id: "part5.currentSpousePlaceOfBirthProvince",
          type: "text",
          label: "8.i. Current Spouse's Place of Birth (Province)",
        },
        {
          id: "part5.placeOfMarriageToCurrentSpouseCity",
          type: "text",
          label: "8.j. Place of Marriage to Current Spouse (City)",
        },
        {
          id: "part5.placeOfMarriageToCurrentSpouseCountry",
          type: "text",
          label: "8.k. Place of Marriage to Current Spouse (Country)",
        },
        {
          id: "part5.placeOfMarriageToCurrentSpouseProvince",
          type: "text",
          label: "8.l. Place of Marriage to Current Spouse (Province)",
        },
        {
          id: "part5.priorSpouseFamilyName",
          type: "text",
          label: "9.a. Prior Spouse's Family Name (Last Name)",
        },
        {
          id: "part5.priorSpouseGivenName",
          type: "text",
          label: "9.b. Prior Spouse's Given Name (First Name)",
        },
        {
          id: "part5.priorSpouseMiddleName",
          type: "text",
          label: "9.c. Prior Spouse's Middle Name",
        },
        {
          id: "part5.priorSpouseDateOfBirth",
          type: "date",
          label: "9.d. Prior Spouse's Date of Birth (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.dateOfMarriageToPriorSpouse",
          type: "date",
          label: "9.e. Date of Marriage to Prior Spouse (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.placeOfMarriageToPriorSpouseCity",
          type: "text",
          label: "9.f. Place of Marriage to Prior Spouse (City)",
        },
        {
          id: "part5.placeOfMarriageToPriorSpouseCountry",
          type: "text",
          label: "9.g. Place of Marriage to Prior Spouse (Country)",
        },
        {
          id: "part5.placeOfMarriageToPriorSpouseProvince",
          type: "text",
          label: "9.h. Place of Marriage to Prior Spouse (Province)",
        },
        {
          id: "part5.dateMarriageWithPriorSpouseEnded",
          type: "date",
          label: "9.i. Date Marriage with Prior Spouse Ended (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.placeWhereMarriageWithPriorSpouseEndedCity",
          type: "text",
          label: "9.j. Place Where Marriage with Prior Spouse Ended (City)",
        },
        {
          id: "part5.placeWhereMarriageWithPriorSpouseEndedCountry",
          type: "text",
          label: "9.k. Place Where Marriage with Prior Spouse Ended (Country)",
        },
        {
          id: "part5.placeWhereMarriageWithPriorSpouseEndedProvince",
          type: "text",
          label: "9.l. Place Where Marriage with Prior Spouse Ended (Province)",
        },
      ],
    },
    {
      id: "part6-contact-information",
      title: "Part 6: Applicant's Contact Information",
      description:
        "Provide your current contact details so USCIS can reach you if needed.",
      questions: [
        {
          id: "part6.applicantDaytimePhoneNumber",
          type: "tel",
          label: "3. Daytime Phone Number",
          required: true,
          placeholder: "(555) 123-4567",
          helpText:
            "Enter a phone number where you can be reached during business hours.",
        },
        {
          id: "part6.applicantMobilePhoneNumber",
          type: "tel",
          label: "4. Mobile Phone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Enter your mobile phone number if different from your daytime phone number.",
        },
        {
          id: "part6.applicantEmailAddress",
          type: "email",
          label: "5. Email Address",
          placeholder: "example@email.com",
          helpText:
            "Provide a valid email address for electronic correspondence.",
        },
      ],
    },
    // {
    //   id: "part6-signature",
    //   title: "Part 6: Applicant's Signature",
    //   description: "Sign and date the application to certify the information provided.",
    //   questions: [
    //     {
    //       id: "part6.applicantSignature",
    //       type: "text",
    //       label: "6. Applicant's Signature",
    //       required: true,
    //       helpText: "Sign your full legal name as it appears on your application.",
    //     },
    //     {
    //       id: "part6.dateOfSignature",
    //       type: "date",
    //       label: "Date of Signature (mm/dd/yyyy)",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //       helpText: "Enter the date you signed this form.",
    //     },
    //   ],
    // },

    {
      id: "part7-interpreter-info",
      title: "Part 7: Interpreter's Information",
      description:
        "Provide details about the interpreter assisting with this application.",
      questions: [
        {
          id: "part7.interpreterGivenName",
          type: "text",
          label: "1.a. Interpreter's Given Name (First Name)",
          required: true,
        },
        {
          id: "part7.interpreterFamilyName",
          type: "text",
          label: "1.b. Interpreter's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part7.interpreterBusinessOrOrganizationName",
          type: "text",
          label: "2. Interpreter's Business or Organization Name",
          helpText:
            "If applicable, provide the name of the business or organization the interpreter is affiliated with.",
        },
        {
          id: "part7.interpreterDaytimePhoneNumber",
          type: "tel",
          label: "4. Interpreter's Daytime Telephone Number",
          placeholder: "(555) 123-4567",
          required: true,
          helpText:
            "Provide a phone number where the interpreter can be reached during business hours.",
        },
        {
          id: "part7.interpreterMobilePhoneNumber",
          type: "tel",
          label: "5. Interpreter's Mobile Telephone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a mobile phone number if different from the daytime number.",
        },
        {
          id: "part7.interpreterEmailAddress",
          type: "email",
          label: "6. Interpreter's Email Address",
          placeholder: "example@email.com",
          helpText: "Provide an email address for the interpreter.",
        },
        {
          id: "part7.interpreterLanguage",
          type: "text",
          label: "Interpreter's Language",
          required: true,
          helpText:
            "Specify the language in which the interpreter is fluent and providing assistance.",
        },
        // {
        //   id: "part7.interpreterSignature",
        //   type: "text",
        //   label: "7.a. Interpreter's Signature",
        //   required: true,
        //   helpText: "The interpreter must sign here to confirm the information provided.",
        // },
        // {
        //   id: "part7.interpreterDateOfSignature",
        //   type: "date",
        //   label: "7.b. Date of Signature (mm/dd/yyyy)",
        //   placeholder: "MM/DD/YYYY",
        //   required: true,
        //   helpText: "Enter the date the interpreter signed this form.",
        // },
      ],
    },

    {
      id: "part8-preparer-info",
      title: "Part 8: Preparer's Information",
      description:
        "Provide the details of the person who prepared this form, if applicable.",
      questions: [
        {
          id: "part8.preparerBusinessOrOrganizationName",
          type: "text",
          label: "2. Preparer's Business or Organization Name",
          helpText:
            "Enter the name of the business or organization, if the preparer is affiliated with one.",
        },
        {
          id: "part8.preparerGivenName",
          type: "text",
          label: "1.b. Preparer's Given Name (First Name)",
          required: true,
          helpText:
            "Enter the first name of the person who prepared this form.",
        },
        {
          id: "part8.preparerFamilyName",
          type: "text",
          label: "1.a. Preparer's Family Name (Last Name)",
          required: true,
          helpText: "Enter the last name of the person who prepared this form.",
        },
        {
          id: "part8.preparerDaytimePhoneNumber",
          type: "tel",
          label: "4. Preparer's Daytime Phone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a phone number where the preparer can be reached during the day.",
        },
        {
          id: "part8.preparerMobilePhoneNumber",
          type: "tel",
          label: "5. Preparer's Mobile Phone Number",
          placeholder: "(555) 123-4567",
          helpText:
            "Provide a mobile phone number for the preparer, if available.",
        },
        {
          id: "part8.preparerEmailAddress",
          type: "email",
          label: "6. Preparer's Email Address",
          placeholder: "example@email.com",
          helpText: "Enter the email address of the preparer.",
        },
        // {
        //   id: "part8.preparerSignature",
        //   type: "text",
        //   label: "8.a. Preparer's Signature",
        //   required: true,
        //   helpText:
        //     "The preparer must sign here to certify the information provided.",
        // },
        // {
        //   id: "part8.preparerDateOfSignature",
        //   type: "date",
        //   label: "8.b. Date of Signature",
        //   required: true,
        //   placeholder: "MM/DD/YYYY",
        //   helpText: "Enter the date the preparer signed this form.",
        // },
      ],
    },

    {
      id: "part9-additional-information",
      title: "Part 9: Additional Information",
      description:
        "Provide additional information if you need more space to complete any item within this application.",
      questions: [
        {
          id: "part9.additionalInformationAlienNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
          helpText:
            "Enter your A-Number if applicable. This number is typically found on your immigration documents.",
        },
        {
          id: "part9.additionalInformationFamilyName",
          type: "text",
          label: "2.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part9.additionalInformationGivenName",
          type: "text",
          label: "2.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part9.additionalInformationMiddleName",
          type: "text",
          label: "2.c. Middle Name",
        },
        {
          id: "part9.additionalInformationPageNumber",
          type: "text",
          label: "3.a. Page Number",
          helpText:
            "Enter the page number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationPartNumber",
          type: "text",
          label: "3.b. Part Number",
          helpText:
            "Enter the part number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationItemNumber",
          type: "text",
          label: "3.c. Item Number",
          helpText:
            "Enter the item number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationDetails",
          type: "textarea",
          label: "3.d. Additional Information",
          helpText:
            "Provide any additional information necessary for the item specified above.",
        },
        {
          id: "part9.additionalInformationPageNumber2",
          type: "text",
          label: "4.a. Page Number",
          helpText:
            "Enter the page number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationPartNumber2",
          type: "text",
          label: "4.b. Part Number",
          helpText:
            "Enter the part number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationItemNumber2",
          type: "text",
          label: "4.c. Item Number",
          helpText:
            "Enter the item number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationDetails2",
          type: "textarea",
          label: "4.d. Additional Information",
          helpText:
            "Provide any additional information necessary for the item specified above.",
        },
        {
          id: "part9.additionalInformationPageNumber3",
          type: "text",
          label: "5.a. Page Number",
          helpText:
            "Enter the page number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationPartNumber3",
          type: "text",
          label: "5.b. Part Number",
          helpText:
            "Enter the part number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationItemNumber3",
          type: "text",
          label: "5.c. Item Number",
          helpText:
            "Enter the item number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationDetails3",
          type: "textarea",
          label: "5.d. Additional Information",
          helpText:
            "Provide any additional information necessary for the item specified above.",
        },
        {
          id: "part9.additionalInformationPageNumber4",
          type: "text",
          label: "6.a. Page Number",
          helpText:
            "Enter the page number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationPartNumber4",
          type: "text",
          label: "6.b. Part Number",
          helpText:
            "Enter the part number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationItemNumber4",
          type: "text",
          label: "6.c. Item Number",
          helpText:
            "Enter the item number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationDetails4",
          type: "textarea",
          label: "6.d. Additional Information",
          helpText:
            "Provide any additional information necessary for the item specified above.",
        },
        {
          id: "part9.additionalInformationPageNumber5",
          type: "text",
          label: "7.a. Page Number",
          helpText:
            "Enter the page number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationPartNumber5",
          type: "text",
          label: "7.b. Part Number",
          helpText:
            "Enter the part number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationItemNumber5",
          type: "text",
          label: "7.c. Item Number",
          helpText:
            "Enter the item number of the form where additional information is needed.",
        },
        {
          id: "part9.additionalInformationDetails5",
          type: "textarea",
          label: "7.d. Additional Information",
          helpText:
            "Provide any additional information necessary for the item specified above.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_212_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};
export const FORM_REGISTRY: Record<string, FormDefinition> = {
  // Family-Based Forms
  "i-130": I130_DEFINITION, //=====1
  "i-129f": I_129F_DEFINITION, //=====--2
  "i-485": I_485_DEFINITION, //=====5
  "i-751": I_751_DEFINITION, //=====---3

  // Employment/Work Authorization Forms
  "i-9": I9_DEFINITION, //=====4
  "i-765": I_765_DEFINITION, //=====8
  // Citizenship

  "n-400": N_400_DEFINITION, //=====10
  // Humanitarian

  "i-730": I730_DEFINITION, //=====9
  // Other
  "i-90": I_90_DEFINITION, //=====6

  // Waivers
  "i-212": I_212_DEFINITION, //=====7

  // Family-Based Forms
  // "i-360": I360_DEFINITION,
  // "i-600": I600_DEFINITION,
  // "i-864": I864_DEFINITION,

  // Employment/Work Authorization Forms
  // "i-129": I129_DEFINITION,
  // "i-140": I140_DEFINITION,

  // "i-526": I526_DEFINITION,

  // Status Change/Extension
  // "i-539": I539_DEFINITION,

  // Travel
  // "i-131": I131_DEFINITION,

  // Humanitarian
  // "i-589": I589_DEFINITION,

  // "i-821": I821_DEFINITION,
  // "i-821d": I821D_DEFINITION,

  // Waivers
  // "i-601": I601_DEFINITION,
  // "i-601a": I601A_DEFINITION,

  // Appeals
  // "i-290b": I290B_DEFINITION,

  // Other
  // "i-90": I90_DEFINITION,
  // "i-90": I_90_DEFINITION,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFormDefinition(formId: string): FormDefinition | null {
  return FORM_REGISTRY[formId] || null;
}

export function getAllForms(): FormDefinition[] {
  return Object.values(FORM_REGISTRY);
}

export function getFormsByCategory(
  category: FormDefinition["category"]
): FormDefinition[] {
  return getAllForms().filter((form) => form.category === category);
}

export function getFormByCode(code: string): FormDefinition | null {
  return getAllForms().find((form) => form.code === code) || null;
}
