/**
 * N-400 Form Definition
 * Generated: 2025-12-29T21:22:30.550Z
 */

import { FormDefinition } from "./forms-registry";
import { N_400_FIELD_MAPPINGS } from "./form-mappings/n-400-field-mappings";

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
          id: "part1.eligibilityVawa",
          type: "radio",
          label: "1. Eligibility under VAWA",
          required: true,
          options: [{ value: "C", label: "VAWA" }],
        },
        {
          id: "part1.eligibilitySpouseOfUSCitizen",
          type: "radio",
          label: "2. Eligibility as Spouse of U.S. Citizen",
          required: true,
          options: [{ value: "B", label: "Spouse of U.S. Citizen" }],
        },
        {
          id: "part1.eligibilityGeneralProvision",
          type: "text",
          label: "3. General Provision Eligibility",
          required: false,
        },
        {
          id: "part1.alienNumber",
          type: "button",
          label: "4. Alien Registration Number (A-Number)",
          required: true,
        },
        {
          id: "part1.eligibilityMilitaryService",
          type: "radio",
          label: "5. Eligibility through Military Service",
          required: true,
          options: [{ value: "E", label: "Military Service" }],
        },
        {
          id: "part1.eligibilityHonorableMilitaryService",
          type: "text",
          label: "6. Honorable Military Service",
          required: false,
        },
        {
          id: "part1.otherReasonForFiling",
          type: "button",
          label: "7. Other Reason for Filing",
          required: false,
        },
        {
          id: "part1.eligibilityOtherReason",
          type: "radio",
          label: "8. Other Eligibility Reason",
          required: true,
          options: [{ value: "G", label: "Other Reason" }],
        },
        {
          id: "part1.eligibilitySpouseOfUSCitizenOutsideUS",
          type: "choice",
          label: "9. Spouse of U.S. Citizen Outside the U.S.",
          required: true,
          options: [{ value: "D", label: "Spouse Outside U.S." }],
        },
        {
          id: "part1.fieldOfficeSelection",
          type: "text",
          label: "10. Field Office Selection",
          required: false,
        },
      ],
    },
    {
      id: "part2-personal-information",
      title: "Part 2: Personal Information",
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
      title: "Part 2: Name Information",
      questions: [
        {
          id: "part2.middleName",
          type: "text",
          label: "4.a. Middle Name",
          required: false,
        },
        {
          id: "part2.givenName",
          type: "text",
          label: "4.a. Given Name (First Name)",
          required: true,
        },
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
          id: "part2.familyName",
          type: "text",
          label: "3. Family Name (Last Name)",
          required: true,
        },
      ],
    },
    {
      id: "part1-alien-number",
      title: "Part 1: Alien Registration Number",
      questions: [
        {
          id: "part1.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: true,
        },
      ],
    },
    {
      id: "part4-race-ethnicity",
      title: "Part 4: Race and Ethnicity",
      questions: [
        {
          id: "part4.race",
          type: "checkbox",
          label: "Race (Select all that apply)",
          required: false,
          options: [
            { value: "I", label: "American Indian or Alaska Native" },
            { value: "A", label: "Asian" },
            { value: "B", label: "Black or African American" },
            { value: "W", label: "White" },
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
      id: "part4-weight",
      title: "Part 4: Physical Characteristics",
      questions: [
        {
          id: "part4.weightSecondDigit",
          type: "text",
          label: "Weight (Second Digit)",
          required: false,
        },
      ],
    },
    {
      id: "part4-physical-characteristics",
      title: "Part 4: Physical Characteristics",
      questions: [
        {
          id: "part4.heightFeet",
          type: "choice",
          label: "1. Height (Feet)",
          required: true,
        },
        {
          id: "part4.heightInches",
          type: "text",
          label: "2. Height (Inches)",
          required: true,
        },
        {
          id: "part4.weightPoundsFirstDigit",
          type: "text",
          label: "3. Weight (Pounds) - First Digit",
          required: true,
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
          type: "text",
          label: "4. State (Line 1)",
          required: true,
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
          type: "text",
          label: "10. State (Line 2)",
          required: true,
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
          type: "text",
          label: "16. State (Line 3)",
          required: true,
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
    {
      id: "part3-current-mailing-address",
      title: "Part 3: Current Mailing Address",
      questions: [
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
      ],
    },
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
          id: "part3.currentMailingAddress.cityOrTown",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part3.currentMailingAddress.state",
          type: "text",
          label: "State",
          required: true,
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
          type: "text",
          label: "Dates of Residence",
          required: false,
        },
      ],
    },
    {
      id: "part3-physical-addresses",
      title: "Part 3: Physical Addresses",
      questions: [
        {
          id: "part3.physicalAddresses.fromDate",
          type: "text",
          label: "From Date",
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
      ],
    },
    {
      id: "part7-spouse-armed-forces",
      title: "Part 7: Spouse Armed Forces",
      questions: [
        {
          id: "part7.spouseArmedForces",
          type: "radio",
          label: "2. Is your spouse in the U.S. Armed Forces?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part7-current-spouse-info",
      title: "Part 7: Current Spouse Information",
      questions: [
        {
          id: "part7.currentSpouseMiddleName",
          type: "text",
          label: "4.a. Current Spouse's Middle Name",
          required: false,
        },
        {
          id: "part7.currentSpouseGivenName",
          type: "text",
          label: "4.a. Current Spouse's Given Name (First Name)",
          required: true,
        },
        {
          id: "part7.currentSpouseFamilyName",
          type: "text",
          label: "4.a. Current Spouse's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part7.currentSpouseDateOfBirth",
          type: "date",
          label: "4.d. Current Spouse's Date of Birth",
          required: true,
        },
        {
          id: "part7.dateEnteredMarriage",
          type: "date",
          label: "4.e. Date You Entered into Marriage",
          required: true,
        },
      ],
    },
    {
      id: "part7-spouse-address",
      title: "Part 7: Spouse Address",
      questions: [
        {
          id: "part7.spouseSameAddress",
          type: "radio",
          label: "5. Does your spouse live at the same address as you?",
          required: true,
          options: [
            { value: "N", label: "No" },
            { value: "Y", label: "Yes" },
          ],
        },
      ],
    },
    {
      id: "part7-spouse-citizenship",
      title: "Part 7: Spouse Citizenship",
      questions: [
        {
          id: "part7.spouseCitizenDate",
          type: "date",
          label: "5.b. Date Spouse Became a U.S. Citizen",
          required: false,
        },
        {
          id: "part7.spouseCitizenBy",
          type: "radio",
          label: "5.a. How did your spouse become a U.S. Citizen?",
          required: true,
          options: [
            { value: "B", label: "By Birth" },
            { value: "O", label: "Other" },
          ],
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
      id: "part7-spouse-alien-number",
      title: "Part 7: Spouse Alien Number",
      questions: [
        {
          id: "part7.spouseAlienNumber",
          type: "text",
          label: "Spouse's Alien Registration Number (A-Number)",
          required: false,
        },
      ],
    },
    {
      id: "part7-spouse-marriages",
      title: "Part 7: Spouse Marriages",
      questions: [
        {
          id: "part7.spouseMarriagesCount",
          type: "text",
          label: "Number of Times Your Spouse Has Been Married",
          required: true,
        },
      ],
    },
    {
      id: "part7-spouse-employer",
      title: "Part 7: Spouse Employer",
      questions: [
        {
          id: "part7.spouseEmployer",
          type: "text",
          label: "Spouse's Employer",
          required: false,
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
      ],
    },
    {
      id: "part6-children-info",
      title: "Part 6: Information About Your Children",
      questions: [
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
          type: "button",
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
          options: [{ value: "N", label: "No" }],
        },
      ],
    },
    {
      id: "part5-employment-history",
      title: "Part 5: Employment History",
      questions: [
        {
          id: "part5.employer1Name",
          type: "text",
          label: "Employer 1 Name",
          required: true,
        },
        {
          id: "part5.employer2Name",
          type: "text",
          label: "Employer 2 Name",
          required: true,
        },
        {
          id: "part5.employer3Name",
          type: "text",
          label: "Employer 3 Name",
          required: true,
        },
        {
          id: "part5.employer3City",
          type: "text",
          label: "Employer 3 City",
          required: true,
        },
        {
          id: "part5.employer2City",
          type: "text",
          label: "Employer 2 City",
          required: true,
        },
        {
          id: "part5.employer1City",
          type: "text",
          label: "Employer 1 City",
          required: true,
        },
        {
          id: "part5.employment1FromDate",
          type: "date",
          label: "Employment 1 From Date",
          required: true,
        },
        {
          id: "part5.employment2FromDate",
          type: "date",
          label: "Employment 2 From Date",
          required: true,
        },
        {
          id: "part5.employment3FromDate",
          type: "date",
          label: "Employment 3 From Date",
          required: true,
        },
        {
          id: "part5.employment2ToDate",
          type: "date",
          label: "Employment 2 To Date",
          required: true,
        },
        {
          id: "part5.employment3ToDate",
          type: "date",
          label: "Employment 3 To Date",
          required: true,
        },
      ],
    },
    {
      id: "part5-employment-history",
      title: "Part 5: Employment and Education History",
      questions: [
        {
          id: "part5.occupationFieldStudy1",
          type: "text",
          label: "1. Occupation or Field of Study (1)",
          required: true,
        },
        {
          id: "part5.occupationFieldStudy2",
          type: "text",
          label: "2. Occupation or Field of Study (2)",
          required: true,
        },
        {
          id: "part5.occupationFieldStudy3",
          type: "text",
          label: "3. Occupation or Field of Study (3)",
          required: true,
        },
        {
          id: "part5.employerState1",
          type: "text",
          label: "4. Employer State (1)",
          required: true,
        },
        {
          id: "part5.employerState2",
          type: "text",
          label: "5. Employer State (2)",
          required: true,
        },
        {
          id: "part5.employerState3",
          type: "text",
          label: "6. Employer State (3)",
          required: true,
        },
        {
          id: "part5.employerZipCode1",
          type: "text",
          label: "7. Employer Zip Code (1)",
          required: true,
        },
        {
          id: "part5.employerZipCode2",
          type: "text",
          label: "8. Employer Zip Code (2)",
          required: true,
        },
        {
          id: "part5.employerZipCode3",
          type: "text",
          label: "9. Employer Zip Code (3)",
          required: true,
        },
        {
          id: "part5.country1",
          type: "text",
          label: "10. Country (1)",
          required: true,
        },
        {
          id: "part5.country2",
          type: "text",
          label: "11. Country (2)",
          required: true,
        },
        {
          id: "part5.country3",
          type: "text",
          label: "12. Country (3)",
          required: true,
        },
      ],
    },
    {
      id: "part6-travel-history",
      title: "Part 6: Travel History",
      questions: [
        {
          id: "part6.trip1DateReturn",
          type: "date",
          label: "1. Date of Return from Trip (1)",
          required: true,
        },
        {
          id: "part6.trip3DateReturn",
          type: "date",
          label: "2. Date of Return from Trip (3)",
          required: true,
        },
        {
          id: "part6.trip5DateReturn",
          type: "date",
          label: "3. Date of Return from Trip (5)",
          required: true,
        },
        {
          id: "part6.trip6Countries",
          type: "text",
          label: "4. Countries Visited on Trip (6)",
          required: true,
        },
        {
          id: "part6.trip6DateLeft",
          type: "date",
          label: "5. Date Left for Trip (6)",
          required: true,
        },
        {
          id: "part6.trip6DateReturn",
          type: "date",
          label: "6. Date of Return from Trip (6)",
          required: true,
        },
        {
          id: "part6.trip5DateLeft",
          type: "date",
          label: "7. Date Left for Trip (5)",
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
          id: "part6.trip4DateLeft",
          type: "date",
          label: "10. Date Left for Trip (4)",
          required: true,
        },
        {
          id: "part6.trip4DateReturn",
          type: "date",
          label: "11. Date of Return from Trip (4)",
          required: true,
        },
        {
          id: "part6.trip3DateLeft",
          type: "date",
          label: "12. Date Left for Trip (3)",
          required: true,
        },
        {
          id: "part6.trip3Countries",
          type: "text",
          label: "13. Countries Visited on Trip (3)",
          required: true,
        },
      ],
    },
    {
      id: "part6-travel-history",
      title: "Part 6: Travel History",
      questions: [
        {
          id: "part6.tripTwoCountriesTraveled",
          type: "text",
          label: "Countries Traveled During Second Trip",
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
          id: "part6.tripOneDateLeft",
          type: "date",
          label: "Date Left for First Trip",
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
          options: [{ value: "yes", label: "Yes" }],
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
        {
          id: "part9.armedGroupParticipation",
          type: "radio",
          label: "Have you ever participated in an armed group?",
          required: true,
          options: [{ value: "no", label: "No" }],
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
            { value: "Off", label: "No" },
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
      id: "part9-military-service",
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
      id: "part9-military-service",
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
      id: "part14-additional-information",
      title: "Part 14: Additional Information",
      questions: [
        {
          id: "part14.alienNumber",
          type: "text",
          label: "1. Alien Registration Number (A-Number)",
          required: true,
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

export default N_400_DEFINITION;
