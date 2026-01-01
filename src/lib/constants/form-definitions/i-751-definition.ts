/**
 * I-751 Form Definition
 * Generated with AI: 2025-12-24T19:00:11.024Z
 */

import { FormDefinition } from './forms-registry';
import { I_751_FIELD_MAPPINGS } from './form-mappings/i-751-field-mappings';
import { US_STATES } from './constants';

const I_751_DEFINITION: FormDefinition = {
  id: "i-751",
  code: "I-751",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
  {
    id: "part1-attorney-representation",
    title: "Part 1: Attorney or Accredited Representative",
    description: "Information about your attorney or accredited representative, if applicable.",
    questions: [
      {
        id: "part1.g28Attached",
        type: "radio",
        label: "Is Form G-28 attached?",
        options: [
          { value: "1", label: "Yes" },
          { value: "0", label: "No" }
        ],
        helpText: "Attach Form G-28 if you have an attorney or accredited representative.",
      },
      {
        id: "part1.attorneyStateBarNumber",
        type: "text",
        label: "Attorney State Bar Number",
        helpText: "Enter the state bar number of your attorney, if applicable.",
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
          { value: "D", label: "Divorced" }
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
        helpText: "Enter the name of the person who receives mail at this address, if applicable.",
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
        label: "Is your physical address different from your mailing address?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
    ],
  },
  {
    id: "part1-physical-address",
    title: "Part 1: Physical Address",
    description: "Provide your current physical address, if different from mailing address.",
    questions: [
      {
        id: "part1.physicalAddress.inCareOfName",
        type: "text",
        label: "18.a. In Care Of Name",
        helpText: "Enter the name of the person who receives mail at this address, if applicable.",
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
    description: "Provide additional information relevant to your application.",
    questions: [
      {
        id: "part1.removalProceedings",
        type: "radio",
        label: "Are you currently in removal proceedings?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
      {
        id: "part1.feePaidToNonAttorney",
        type: "radio",
        label: "Did you pay anyone other than an attorney or accredited representative to assist you in preparing this form?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
      {
        id: "part1.criminalHistory",
        type: "radio",
        label: "Do you have any criminal history?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
        helpText: "Include any arrests, charges, or convictions.",
      },
      {
        id: "part1.differentMarriage",
        type: "radio",
        label: "Is this application based on a different marriage than the one that granted you conditional residence?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
      {
        id: "part1.otherAddresses",
        type: "radio",
        label: "Have you lived at any other addresses since becoming a conditional resident?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
      {
        id: "part1.spouseServingOutsideUS",
        type: "radio",
        label: "Is your spouse currently serving outside the United States in the U.S. Armed Forces or other government service?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ],
      },
    ],
  },
,

  {
    id: "part2-physical-characteristics",
    title: "Part 2: Physical Characteristics",
    description: "Provide your physical characteristics as they appear on your identification documents.",
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
        type: "checkbox",
        label: "Race",
        required: true,
        options: [
          { value: "nativeHawaiian", label: "Native Hawaiian or Other Pacific Islander" },
          { value: "americanIndian", label: "American Indian or Alaska Native" },
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
    description: "Provide your eye and hair color as they appear on your identification documents.",
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
,

  {
    id: "part3-basis-for-petition",
    title: "Part 3: Basis for Petition",
    description: "Select the basis for your petition to remove conditions on residence.",
    questions: [
      {
        id: "part3.basisForPetition.jointFiling",
        type: "radio",
        label: "1. I am filing this petition jointly with my spouse.",
        required: true,
        options: [
          { value: "A", label: "A. Our marriage was entered in good faith, and we are still married." },
          { value: "B", label: "B. Our marriage was entered in good faith, but my spouse is deceased." },
        ],
        helpText: "Select the option that best describes your current marital situation.",
      },
      {
        id: "part3.basisForPetition.waiverOrIndividualFiling",
        type: "radio",
        label: "2. I am requesting a waiver or filing individually.",
        required: true,
        options: [
          { value: "C", label: "C. Our marriage was entered in good faith, but has ended in divorce or annulment." },
          { value: "D", label: "D. Our marriage was entered in good faith, but I have been battered or subjected to extreme cruelty by my spouse." },
          { value: "E", label: "E. The termination of my status and removal would result in extreme hardship." },
          { value: "F", label: "F. I am a child of a marriage that was entered in good faith, but I have been battered or subjected to extreme cruelty by my parent." },
          { value: "G", label: "G. I am a child of a marriage that was entered in good faith, but the marriage has ended in divorce or annulment." },
        ],
        helpText: "Select the option that best describes your situation if you are not filing jointly with your spouse.",
      },
    ],
  },
,

  {
    id: "part4-relationship",
    title: "Part 4: Relationship to Conditional Permanent Resident",
    description: "Specify your relationship to the conditional permanent resident.",
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
        helpText: "Complete this field if you live outside the United States.",
      },
      {
        id: "part4.postalCode",
        type: "text",
        label: "6.h. Postal Code",
        helpText: "Complete this field if you live outside the United States.",
      },
      {
        id: "part4.country",
        type: "text",
        label: "6.i. Country",
        required: true,
      },
    ],
  },
,

  {
    id: "part5-child-info",
    title: "Part 5: Information About Your Children",
    description: "Provide details about each child related to this petition.",
    questions: [
      {
        id: "part5.child1.givenName",
        type: "text",
        label: "1.b. Given Name (First Name)",
        required: true,
      },
      {
        id: "part5.child1.familyName",
        type: "text",
        label: "1.a. Family Name (Last Name)",
        required: true,
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
        required: true,
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
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part5.child1.applyingWithYou",
        type: "radio",
        label: "6. Is this child applying with you?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
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
,

  {
    id: "part6-accommodations-for-disabilities",
    title: "Part 6: Accommodations for Individuals with Disabilities and/or Impairments",
    description: "Request accommodations for disabilities or impairments to ensure you can participate in the immigration process.",
    questions: [
      {
        id: "part6.accommodationsForDisabilities.requestingAccommodation",
        type: "radio",
        label: "Are you requesting an accommodation because of your disabilities and/or impairments?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        helpText: "Select 'Yes' if you need any special accommodations during your interview or other interactions with USCIS.",
      },
      {
        id: "part6.accommodationsForDisabilities.deafOrHardOfHearing",
        type: "checkbox",
        label: "I am deaf or hard of hearing and request the following accommodation(s):",
        options: [
          { value: "A", label: "Sign language interpreter" },
          { value: "B", label: "Other accommodations" },
        ],
        helpText: "Specify if you need a sign language interpreter or any other accommodations related to hearing impairments.",
      },
      {
        id: "part6.accommodationsForDisabilities.blindOrSightImpaired",
        type: "checkbox",
        label: "I am blind or sight-impaired and request the following accommodation(s):",
        options: [
          { value: "A", label: "Braille materials" },
          { value: "B", label: "Large print materials" },
        ],
        helpText: "Indicate if you require Braille or large print materials due to vision impairments.",
      },
      {
        id: "part6.accommodationsForDisabilities.accommodationRequested",
        type: "textarea",
        label: "Describe any other accommodation(s) requested:",
        helpText: "Provide details about any other accommodations you require that are not listed above.",
      },
      {
        id: "part6.accommodationsForDisabilities.otherDisability",
        type: "checkbox",
        label: "I have another type of disability and request the following accommodation(s):",
        options: [
          { value: "C", label: "Other accommodations" },
        ],
        helpText: "Specify any accommodations needed for disabilities not covered in the previous sections.",
      },
    ],
  },
,

  {
    id: "part7-petitioners-statement",
    title: "Part 7: Petitioner's Statement",
    description: "Provide information about your statement and the use of an interpreter or preparer.",
    questions: [
      {
        id: "part7.petitionersStatement",
        type: "radio",
        label: "Petitioner's Statement",
        required: true,
        options: [
          { value: "A", label: "I can read and understand English, and have read and understand every question and instruction on this petition and my answer to every question." },
          { value: "B", label: "The interpreter named in Part 8 read to me every question and instruction on this petition and my answer to every question in a language in which I am fluent, and I understood everything." }
        ],
      },
      {
        id: "part7.petitionersStatement.languageUsed",
        type: "text",
        label: "Language Used",
        description: "If you used an interpreter, specify the language used.",
        helpText: "Enter the language in which the interpreter communicated with you.",
      },
      {
        id: "part7.petitionersStatement.preparerConsent",
        type: "radio",
        label: "Preparer's Consent",
        options: [
          { value: "Y", label: "Yes, I have requested the preparer to complete this petition." },
          { value: "N", label: "No, I did not use a preparer." }
        ],
      },
      {
        id: "part7.petitionersStatement.preparerName",
        type: "text",
        label: "Preparer's Name",
        description: "Name of the person who prepared this petition, if applicable.",
        helpText: "Enter the full name of the preparer.",
      },
      {
        id: "part7.petitionersStatement.preparerIsAttorney",
        type: "radio",
        label: "Is the Preparer an Attorney?",
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" }
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
        helpText: "Provide a phone number where you can be reached during the day.",
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
    description: "Acknowledge the appointment of the representative, if applicable.",
    questions: [
      {
        id: "part7.acknowledgementOfAppointment.name",
        type: "text",
        label: "Name of Appointed Representative",
        description: "Enter the name of the person you have appointed as your representative.",
        helpText: "This is typically the name of your attorney or accredited representative.",
      },
    ],
  },
  {
    id: "part7-petitioners-signature",
    title: "Part 7: Petitioner's Signature",
    description: "Sign and date the petition to confirm your statements.",
    questions: [
      {
        id: "part7.petitionersSignature.signature",
        type: "text",
        label: "Petitioner's Signature",
        required: true,
        helpText: "Sign your full legal name as it appears on your official documents.",
      },
      {
        id: "part7.petitionersSignature.dateOfSignature",
        type: "date",
        label: "Date of Signature",
        required: true,
        placeholder: "MM/DD/YYYY",
        helpText: "Enter the date you signed this petition.",
      },
    ],
  },
,

  {
    id: "part8-spouses-statement",
    title: "Part 8: Spouse's Statement",
    description: "Provide the necessary information regarding the spouse's statement and preparer details.",
    questions: [
      {
        id: "part8.spousesStatement",
        type: "radio",
        label: "Spouse's Statement",
        required: true,
        options: [
          { value: "A", label: "I can read and understand English, and have read and understand every question and instruction on this petition and my answer to every question." },
          { value: "B", label: "The interpreter named in Part 9 read to me every question and instruction on this petition and my answer to every question in a language in which I am fluent, and I understood everything." },
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
          { value: "Y", label: "Yes, the preparer has consented to assist in the completion of this form." },
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
    description: "Provide the spouse's contact details for communication purposes.",
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
        helpText: "Enter the name of the person acknowledging the appointment.",
      },
    ],
  },
  {
    id: "part8-spouses-signature",
    title: "Part 8: Spouse's Signature",
    description: "Sign and date the form to confirm the information provided.",
    questions: [
      {
        id: "part8.spousesSignature.dateOfSignature",
        type: "date",
        label: "Date of Signature",
        required: true,
        placeholder: "MM/DD/YYYY",
        helpText: "Enter the date you are signing this form.",
      },
      {
        id: "part8.spousesSignature.signature",
        type: "text",
        label: "Signature of Spouse",
        required: true,
        helpText: "Sign your full name to certify the information provided is true and correct.",
      },
    ],
  },
,

  {
    id: "part9-interpreter-information",
    title: "Part 9: Interpreter's Information",
    description: "Provide details about the interpreter who assisted in completing this form.",
    questions: [
      {
        id: "part9.interpretersFullName.familyName",
        type: "text",
        label: "1.a. Family Name (Last Name)",
        required: true,
        helpText: "Enter the interpreter's last name as it appears on official documents.",
      },
      {
        id: "part9.interpretersFullName.givenName",
        type: "text",
        label: "1.b. Given Name (First Name)",
        required: true,
        helpText: "Enter the interpreter's first name as it appears on official documents.",
      },
      {
        id: "part9.interpretersBusinessOrOrganizationName",
        type: "text",
        label: "2. Name of Business or Organization (if applicable)",
        helpText: "Provide the name of the business or organization the interpreter is affiliated with, if any.",
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
        helpText: "Provide the street number and name of the interpreter's mailing address.",
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
        helpText: "Enter a phone number where the interpreter can be reached during the day.",
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
    description: "Certification of the interpreter's proficiency in the language used.",
    questions: [
      {
        id: "part9.interpretersCertification.languageFluent",
        type: "text",
        label: "6. Language in which you are fluent",
        required: true,
        helpText: "Specify the language in which the interpreter is fluent and used to interpret.",
      },
    ],
  },
  {
    id: "part9-interpreter-signature",
    title: "Part 9: Interpreter's Signature",
    description: "The interpreter must sign and date this section.",
    questions: [
      {
        id: "part9.interpretersSignature.signature",
        type: "text",
        label: "7.a. Signature",
        required: true,
        helpText: "The interpreter must sign here.",
      },
      {
        id: "part9.interpretersSignature.dateOfSignature",
        type: "date",
        label: "7.b. Date of Signature",
        required: true,
        placeholder: "MM/DD/YYYY",
        helpText: "Enter the date the interpreter signed this form.",
      },
    ],
  },
,

  {
    id: "part10-preparers-information",
    title: "Part 10: Preparer's Information",
    description: "Provide details about the person who prepared this petition, if applicable.",
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
        helpText: "Enter the name of the business or organization, if applicable.",
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
    description: "Indicate the preparer's involvement in completing this form.",
    questions: [
      {
        id: "part10.preparersStatement",
        type: "radio",
        label: "7. Preparer's Statement",
        options: [
          { value: "A", label: "I am not an attorney or accredited representative but have prepared this form on behalf of the petitioner and with the petitioner's consent." },
          { value: "B", label: "I am an attorney or accredited representative and my representation extends beyond the preparation of this form." },
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
  {
    id: "part10-preparers-signature",
    title: "Part 10: Preparer's Signature",
    description: "The preparer must sign and date this section.",
    questions: [
      {
        id: "part10.preparersSignature.signature",
        type: "text",
        label: "8.a. Signature of Preparer",
        required: true,
        helpText: "The preparer must sign here.",
      },
      {
        id: "part10.preparersSignature.dateOfSignature",
        type: "date",
        label: "8.b. Date of Signature",
        required: true,
        helpText: "Enter the date the preparer signed the form.",
        placeholder: "MM/DD/YYYY",
      },
    ],
  },
,

  {
    id: "part11-additional-information",
    title: "Part 11: Additional Information",
    description: "Provide any additional information that does not fit in other sections of this form.",
    questions: [
      {
        id: "part11.additionalInformation.pageNumber",
        type: "text",
        label: "3.a. Page Number",
        helpText: "Enter the page number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.partNumber",
        type: "text",
        label: "3.b. Part Number",
        helpText: "Enter the part number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.itemNumber",
        type: "text",
        label: "3.c. Item Number",
        helpText: "Enter the item number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.additionalInfo",
        type: "textarea",
        label: "3.d. Additional Information",
        helpText: "Provide additional details or explanations related to the specified page, part, and item numbers.",
      },
      {
        id: "part11.additionalInformation.pageNumber4",
        type: "text",
        label: "4.a. Page Number",
        helpText: "Enter the page number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.partNumber4",
        type: "text",
        label: "4.b. Part Number",
        helpText: "Enter the part number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.itemNumber4",
        type: "text",
        label: "4.c. Item Number",
        helpText: "Enter the item number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.additionalInfo4",
        type: "textarea",
        label: "4.d. Additional Information",
        helpText: "Provide additional details or explanations related to the specified page, part, and item numbers.",
      },
      {
        id: "part11.additionalInformation.pageNumber5",
        type: "text",
        label: "5.a. Page Number",
        helpText: "Enter the page number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.partNumber5",
        type: "text",
        label: "5.b. Part Number",
        helpText: "Enter the part number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.itemNumber5",
        type: "text",
        label: "5.c. Item Number",
        helpText: "Enter the item number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.additionalInfo5",
        type: "textarea",
        label: "5.d. Additional Information",
        helpText: "Provide additional details or explanations related to the specified page, part, and item numbers.",
      },
      {
        id: "part11.additionalInformation.pageNumber6",
        type: "text",
        label: "6.a. Page Number",
        helpText: "Enter the page number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.partNumber6",
        type: "text",
        label: "6.b. Part Number",
        helpText: "Enter the part number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.itemNumber6",
        type: "text",
        label: "6.c. Item Number",
        helpText: "Enter the item number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.additionalInfo6",
        type: "textarea",
        label: "6.d. Additional Information",
        helpText: "Provide additional details or explanations related to the specified page, part, and item numbers.",
      },
      {
        id: "part11.additionalInformation.pageNumber7",
        type: "text",
        label: "7.a. Page Number",
        helpText: "Enter the page number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.partNumber7",
        type: "text",
        label: "7.b. Part Number",
        helpText: "Enter the part number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.itemNumber7",
        type: "text",
        label: "7.c. Item Number",
        helpText: "Enter the item number from the form where additional information is needed.",
      },
      {
        id: "part11.additionalInformation.additionalInfo7",
        type: "textarea",
        label: "7.d. Additional Information",
        helpText: "Provide additional details or explanations related to the specified page, part, and item numbers.",
      },
    ],
  },
  {
    id: "part11-your-full-name",
    title: "Part 11: Your Full Name",
    description: "Provide your full legal name as it appears on official documents.",
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
        helpText: "Enter your A-Number if you have one. It is an 8 or 9 digit number.",
      },
    ],
  },
],
  pdfFieldMappings: I_751_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_751_DEFINITION;
