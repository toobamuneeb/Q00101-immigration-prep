/**
 * Form Registry Definition for I-90 (Application to Replace Permanent Resident Card)
 * Generated on: 2025-12-13T02:30:34.031Z
 * 
 * This is the complete form definition for I-90
 */

import { FormDefinition } from "./forms-registry";



export const I90_DEFINITION: FormDefinition = {
  id: "i90",
  code: "I-90",
  name: "Application to Replace Permanent Resident Card",
  description: "Use this form to apply for a replacement Permanent Resident Card (Green Card) if your card has been lost, stolen, destroyed, or contains incorrect information.",
  category: "other",
  estimatedTime: "45-60 minutes",
  filingFee: 540,
  price: 89,
  sections: [
    {
      id: "part1",
      title: "Part 1. Information About You",
      description: "Provide your personal information and reason for applying",
      questions: [
        {
          id: "part1.alienNumber",
          type: "text",
          label: "A-Number (Alien Registration Number)",
          required: true,
          placeholder: "Enter your 8 or 9 digit A-Number"
        },
        {
          id: "part1.uscisAccountNumber",
          type: "text",
          label: "USCIS Online Account Number (if any)",
          required: false,
          placeholder: "Enter your USCIS online account number"
        },
        {
          id: "part1.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
          placeholder: "Enter your family name"
        },
        {
          id: "part1.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
          placeholder: "Enter your given name"
        },
        {
          id: "part1.middleName",
          type: "text",
          label: "Middle Name",
          required: false,
          placeholder: "Enter your middle name (if any)"
        },
        {
          id: "part1.reasonCard",
          type: "radio",
          label: "My card has been:",
          required: true,
          options: [
            { value: "lost", label: "Lost" },
            { value: "stolen", label: "Stolen" },
            { value: "destroyed", label: "Destroyed" }
          ]
        },
        {
          id: "part1.admissionFamilyName",
          type: "text",
          label: "Family Name at Time of Admission",
          required: false,
          placeholder: "Enter family name at time of admission"
        },
        {
          id: "part1.admissionGivenName",
          type: "text",
          label: "Given Name at Time of Admission",
          required: false,
          placeholder: "Enter given name at time of admission"
        },
        {
          id: "part1.admissionMiddleName",
          type: "text",
          label: "Middle Name at Time of Admission",
          required: false,
          placeholder: "Enter middle name at time of admission"
        }
      ]
    },
    {
      id: "part1-address",
      title: "Current Mailing Address",
      description: "Provide your current mailing address",
      questions: [
        {
          id: "part1.mailingInCareOf",
          type: "text",
          label: "In Care Of Name (if any)",
          required: false,
          placeholder: "Enter in care of name"
        },
        {
          id: "part1.mailingStreetNumber",
          type: "text",
          label: "Street Number and Name",
          required: true,
          placeholder: "Enter street number and name"
        },
        {
          id: "part1.mailingUnitType",
          type: "radio",
          label: "Unit Type",
          required: false,
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." }
          ]
        },
        {
          id: "part1.mailingAptNumber",
          type: "text",
          label: "Unit Number",
          required: false,
          placeholder: "Enter unit number"
        },
        {
          id: "part1.mailingCity",
          type: "text",
          label: "City or Town",
          required: true,
          placeholder: "Enter city or town"
        },
        {
          id: "part1.mailingState",
          type: "select",
          label: "State",
          required: true,
          options: [
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
            { value: "WY", label: "Wyoming" }
          ]
        },
        {
          id: "part1.mailingZipCode",
          type: "text",
          label: "ZIP Code",
          required: true,
          placeholder: "Enter ZIP code"
        },
        {
          id: "part1.mailingProvince",
          type: "text",
          label: "Province (if outside US)",
          required: false,
          placeholder: "Enter province"
        },
        {
          id: "part1.mailingPostalCode",
          type: "text",
          label: "Postal Code (if outside US)",
          required: false,
          placeholder: "Enter postal code"
        },
        {
          id: "part1.mailingCountry",
          type: "text",
          label: "Country (if outside US)",
          required: false,
          placeholder: "Enter country"
        }
      ]
    },
    {
      id: "part1-personal",
      title: "Personal Information",
      description: "Provide your personal details",
      questions: [
        {
          id: "part1.gender",
          type: "radio",
          label: "Gender",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" }
          ]
        },
        {
          id: "part1.dateOfBirth",
          type: "date",
          label: "Date of Birth",
          required: true
        },
        {
          id: "part1.cityOfBirth",
          type: "text",
          label: "City or Town of Birth",
          required: true,
          placeholder: "Enter city or town of birth"
        },
        {
          id: "part1.countryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: true,
          placeholder: "Enter country of birth"
        },
        {
          id: "part1.motherGivenName",
          type: "text",
          label: "Mother's Given Name at Birth",
          required: false,
          placeholder: "Enter mother's given name"
        },
        {
          id: "part1.fatherGivenName",
          type: "text",
          label: "Father's Given Name at Birth",
          required: false,
          placeholder: "Enter father's given name"
        },
        {
          id: "part1.classOfAdmission",
          type: "text",
          label: "Class of Admission",
          required: true,
          placeholder: "Enter class of admission"
        },
        {
          id: "part1.dateOfAdmission",
          type: "date",
          label: "Date of Admission",
          required: true
        },
        {
          id: "part1.socialSecurityNumber",
          type: "text",
          label: "U.S. Social Security Number (if any)",
          required: false,
          placeholder: "Enter SSN"
        }
      ]
    },
    {
      id: "part2",
      title: "Part 2. Application Type",
      description: "Select the reason for your application",
      questions: [
        {
          id: "part2.applicationType",
          type: "radio",
          label: "I am applying because:",
          required: true,
          options: [
            { value: "card_lost_stolen_destroyed", label: "My card has been lost, stolen, or destroyed" },
            { value: "card_expired_will_expire", label: "My existing card has already expired or will expire within six months" },
            { value: "card_incorrect_data", label: "My name or other biographic information has been legally changed since the issuance of my existing card, or there is an error on my card" }
          ]
        },
        {
          id: "part2.reasonReplacement",
          type: "checkbox",
          label: "If your card was lost, stolen, or destroyed, select all that apply:",
          required: false,
          options: [
            { value: "never_received", label: "I never received my card" },
            { value: "lost", label: "My card was lost" },
            { value: "stolen", label: "My card was stolen" },
            { value: "mutilated", label: "My card was mutilated" },
            { value: "destroyed", label: "My card was destroyed" }
          ]
        }
      ]
    },
    {
      id: "part3",
      title: "Part 3. Processing Information",
      description: "Provide processing and biometric information",
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
            { value: "7", label: "7" }
          ]
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
            { value: "11", label: "11" }
          ]
        },
        {
          id: "part3.ethnicity",
          type: "radio",
          label: "Ethnicity",
          required: true,
          options: [
            { value: "hispanic", label: "Hispanic or Latino" },
            { value: "not_hispanic", label: "Not Hispanic or Latino" }
          ]
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
            { value: "american_indian", label: "American Indian or Alaska Native" },
            { value: "pacific_islander", label: "Native Hawaiian or Other Pacific Islander" }
          ]
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
            { value: "bald", label: "Bald (No Hair)" }
          ]
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
            { value: "other", label: "Other" }
          ]
        }
      ]
    },
    {
      id: "part4",
      title: "Part 4. Accommodations for Individuals With Disabilities",
      description: "Request accommodations if needed",
      questions: [
        {
          id: "part4.accommodationNeeded",
          type: "radio",
          label: "Are you requesting an accommodation for a disability?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" }
          ]
        },
        {
          id: "part4.accommodationDeaf",
          type: "checkbox",
          label: "I am deaf or hearing impaired and need a sign language interpreter",
          required: false
        },
        {
          id: "part4.accommodationBlind",
          type: "checkbox",
          label: "I am blind or sight impaired and need assistance",
          required: false
        },
        {
          id: "part4.accommodationOther",
          type: "checkbox",
          label: "I have another type of disability and need accommodation",
          required: false
        }
      ]
    },
    {
      id: "part5",
      title: "Part 5. Applicant's Statement, Contact Information, Certification, and Signature",
      description: "Provide contact information and signature",
      questions: [
        {
          id: "part5.readLanguage",
          type: "checkbox",
          label: "I can read and understand English, and I have read and understand every question and instruction on this application and my answer to every question",
          required: false
        },
        {
          id: "part5.interpreterUsed",
          type: "checkbox",
          label: "The interpreter named in Part 6 read to me every question and instruction on this application and my answer to every question in a language in which I am fluent",
          required: false
        },
        {
          id: "part5.daytimePhone",
          type: "text",
          label: "Applicant's Daytime Telephone Number",
          required: false,
          placeholder: "Enter daytime phone number"
        },
        {
          id: "part5.mobilePhone",
          type: "text",
          label: "Applicant's Mobile Telephone Number",
          required: false,
          placeholder: "Enter mobile phone number"
        },
        {
          id: "part5.emailAddress",
          type: "email",
          label: "Applicant's Email Address",
          required: false,
          placeholder: "Enter email address"
        }
      ]
    }
  ],
  requiredDocuments: [
    "Copy of your current or expired Permanent Resident Card (front and back)",
    "Two passport-style photos",
    "Copy of government-issued photo identification",
    "Filing fee payment ($540)",
    "Police report (if card was stolen)",
    "Legal documents showing name change (if applicable)"
  ],
  instructions: [
    "Complete all applicable sections of this form",
    "Use black ink when filling out the form by hand",
    "If you need extra space, use Part 8 (Additional Information)",
    "Submit required supporting documents with your application",
    "Pay the required filing fee",
    "Sign and date your application"
  ],
  pdfFieldMappings: []
};
