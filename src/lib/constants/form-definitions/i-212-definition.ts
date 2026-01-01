/**
 * I-212 Form Definition
 * Generated with AI: 2025-12-23T23:58:06.868Z
 */

import { I_212_FIELD_MAPPINGS } from "../form-mappings/i-212-field-mappings";
import { FormDefinition, US_STATES } from "../forms-registry";

export const I_212_DEFINITION: FormDefinition = {
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
          id: "part1.alienNumber",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          helpText:
            "Your A-Number is an 8- or 9-digit number assigned by USCIS.",
        },
        {
          id: "part1.fullName.familyName",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part1.fullName.givenName",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part1.fullName.middleName",
          type: "text",
          label: "Middle Name",
        },
        {
          id: "part1.otherNamesUsed.familyName",
          type: "text",
          label: "Other Names Used - Family Name (Last Name)",
          helpText: "Include any other names you have used.",
        },
        {
          id: "part1.otherNamesUsed.givenName",
          type: "text",
          label: "Other Names Used - Given Name (First Name)",
        },
        {
          id: "part1.otherNamesUsed.middleName",
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
          id: "part1.mailingAddress.streetNumberName",
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
          id: "part1.mailingAddress.cityOrTown",
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
          id: "part1.mailingAddress.zipCode",
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
          id: "part1.mailingAddress.postalCode",
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
          id: "part1.physicalAddress.streetNumberName",
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
          id: "part1.physicalAddress.cityOrTown",
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
          id: "part1.physicalAddress.zipCode",
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
          id: "part1.physicalAddress.postalCode",
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
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
          helpText: "Select your gender as per your official documents.",
        },
        {
          id: "part1.otherInformation.dateOfBirth",
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
          id: "part1.otherInformation.countryOfBirth",
          type: "text",
          label: "Country of Birth",
          required: true,
        },
        {
          id: "part1.otherInformation.countryOfCitizenship",
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
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
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
          id: "part2.removalAsArrivingAlien",
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
          id: "part2.removalAsArrivingAlienYesNo",
          type: "radio",
          label: "1. Were you removed as an arriving alien?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.locationRemoved.city",
          type: "text",
          label: "2. City where you were removed",
          required: true,
        },
        {
          id: "part2.dateRemoved",
          type: "date",
          label: "3. Date of removal (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.locationRemoved.state",
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
          id: "part2.removalAsDeportableAlien",
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
          id: "part2.removalAsDeportableAlienYesNo",
          type: "radio",
          label: "5. Were you removed as a deportable alien?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.locationRemovedAsDeportable.city",
          type: "text",
          label: "6. City where you were removed as a deportable alien",
          required: true,
        },
        {
          id: "part2.locationRemovedAsDeportable.state",
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
          id: "part2.entryAfterUnlawfulPresenceYesNo",
          type: "radio",
          label: "8. Did you re-enter the U.S. after unlawful presence?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.unlawfulPresence.fromDate",
          type: "date",
          label: "9. Unlawful presence start date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.unlawfulPresence.toDate",
          type: "date",
          label: "10. Unlawful presence end date (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.unlawfulPresence.departureDate",
          type: "date",
          label: "11. Date of departure (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.unlawfulPresence.departureLocation.city",
          type: "text",
          label: "12. City of departure",
          required: true,
        },
        {
          id: "part2.unlawfulPresence.departureLocation.state",
          type: "select",
          label: "13. State of departure",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.unlawfulPresence.reentryLocation.city",
          type: "text",
          label: "14. City of re-entry",
          required: true,
        },
        {
          id: "part2.unlawfulPresence.reentryLocation.state",
          type: "select",
          label: "15. State of re-entry",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.unlawfulPresence.reentryDate",
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
          id: "part2.entryAfterRemovalYesNo",
          type: "radio",
          label: "17. Did you enter the U.S. after removal?",
          required: true,
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.entryAfterRemoval.exclusionDate",
          type: "date",
          label: "18. Date of exclusion (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.entryAfterRemoval.reentryLocation.city",
          type: "text",
          label: "19. City of re-entry after removal",
          required: true,
        },
        {
          id: "part2.entryAfterRemoval.reentryLocation.state",
          type: "select",
          label: "20. State of re-entry after removal",
          required: true,
          options: US_STATES,
        },
        {
          id: "part2.entryAfterRemoval.reentryDate",
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
          id: "part3.familyMembers.familyName",
          type: "text",
          label: "3.a. Family Name (Last Name)",
          required: true,
          helpText: "Enter the last name of the family member.",
        },
        {
          id: "part3.familyMembers.givenName",
          type: "text",
          label: "3.b. Given Name (First Name)",
          required: true,
          helpText: "Enter the first name of the family member.",
        },
        {
          id: "part3.familyMembers.middleName",
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
          label: "4. Weight (in pounds)",
          required: true,
          placeholder: "e.g., 150",
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
          id: "part5.addressHistory1.streetNumberName",
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
          id: "part5.addressHistory1.cityOrTown",
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
          id: "part5.addressHistory1.zipCode",
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
          id: "part5.addressHistory1.postalCode",
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
          id: "part5.addressHistory2.streetNumberName",
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
          id: "part5.addressHistory2.cityOrTown",
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
          id: "part5.addressHistory2.zipCode",
          type: "text",
          label: "2.f. ZIP Code",
        },
        {
          id: "part5.addressHistory2.province",
          type: "text",
          label: "2.g. Province",
        },
        {
          id: "part5.addressHistory2.postalCode",
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
          id: "part5.employmentHistory1.streetNumberName",
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
          id: "part5.employmentHistory1.cityOrTown",
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
          id: "part5.employmentHistory1.zipCode",
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
          id: "part5.employmentHistory1.postalCode",
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
          id: "part5.employmentHistory2.streetNumberName",
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
          id: "part5.employmentHistory2.cityOrTown",
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
          id: "part5.employmentHistory2.zipCode",
          type: "text",
          label: "4.g. ZIP Code",
        },
        {
          id: "part5.employmentHistory2.province",
          type: "text",
          label: "4.h. Province",
        },
        {
          id: "part5.employmentHistory2.postalCode",
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
          id: "part5.motherInfo.familyName",
          type: "text",
          label: "5.a. Mother's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.motherInfo.givenName",
          type: "text",
          label: "5.b. Mother's Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.motherInfo.middleName",
          type: "text",
          label: "5.c. Mother's Middle Name",
        },
        {
          id: "part5.motherBirthName.familyName",
          type: "text",
          label: "5.d. Mother's Birth Family Name (Last Name)",
        },
        {
          id: "part5.motherBirthName.givenName",
          type: "text",
          label: "5.e. Mother's Birth Given Name (First Name)",
        },
        {
          id: "part5.motherBirthName.middleName",
          type: "text",
          label: "5.f. Mother's Birth Middle Name",
        },
        {
          id: "part5.motherInfo.dateOfBirth",
          type: "date",
          label: "5.g. Mother's Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part5.motherInfo.countryOfBirth",
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
          id: "part5.fatherInfo.familyName",
          type: "text",
          label: "6.a. Father's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.fatherInfo.givenName",
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
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
            { value: "other", label: "Other" },
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
  pdfFieldMappings: I_212_FIELD_MAPPINGS as any,
  requiredDocuments: [],
  instructions: [],
};

export default I_212_DEFINITION;
