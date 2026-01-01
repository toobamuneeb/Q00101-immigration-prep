/**
 * I-129F Form Definition
 * Generated with AI: 2025-12-24T23:58:09.423Z
 */

import { FormDefinition } from './forms-registry';
import { I_129F_FIELD_MAPPINGS } from './form-mappings/i-129f-field-mappings';
import { US_STATES } from './constants';

const I_129F_DEFINITION: FormDefinition = {
  id: "i-129f",
  code: "I-129F",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
  {
    id: "part1-personal-information",
    title: "Part 1: Personal Information",
    description: "Provide your personal details and identification numbers.",
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
        helpText: "Enter your A-Number, if applicable.",
      },
      {
        id: "part1.uscisOnlineAccountNumber",
        type: "text",
        label: "3. USCIS Online Account Number",
        helpText: "Enter your USCIS Online Account Number, if applicable.",
      },
      {
        id: "part1.socialSecurityNumber",
        type: "ssn",
        label: "4. U.S. Social Security Number (if any)",
        placeholder: "###-##-####",
        helpText: "Leave blank if you do not have one.",
      },
    ],
  },
  {
    id: "part1-other-names-used",
    title: "Part 1: Other Names Used",
    description: "List any other names you have used.",
    questions: [
      {
        id: "part1.otherNamesUsed.familyName",
        type: "text",
        label: "5.a. Family Name (Last Name)",
      },
      {
        id: "part1.otherNamesUsed.givenName",
        type: "text",
        label: "5.b. Given Name (First Name)",
      },
      {
        id: "part1.otherNamesUsed.middleName",
        type: "text",
        label: "5.c. Middle Name",
      },
    ],
  },
  {
    id: "part1-classification-requested",
    title: "Part 1: Classification Requested",
    description: "Select the classification you are requesting.",
    questions: [
      {
        id: "part1.classificationRequested",
        type: "radio",
        label: "6. Classification Requested",
        required: true,
        options: [
          { value: "A", label: "K-1 (Fiancé(e))" },
          { value: "B", label: "K-3 (Spouse)" },
        ],
      },
      {
        id: "part1.k3FormI130Filed",
        type: "radio",
        label: "7. Have you filed Form I-130?",
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
        label: "8. Is your mailing address the same as your physical address?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part1.mailingAddress.streetNumberName",
        type: "text",
        label: "9.a. Street Number and Name",
        required: true,
      },
      {
        id: "part1.mailingAddress.unitType",
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
        id: "part1.mailingAddress.country",
        type: "text",
        label: "9.g. Country",
        required: true,
      },
      {
        id: "part1.mailingAddress.province",
        type: "text",
        label: "9.h. Province",
      },
      {
        id: "part1.mailingAddress.postalCode",
        type: "text",
        label: "9.i. Postal Code",
      },
      {
        id: "part1.mailingAddress.inCareOfName",
        type: "text",
        label: "9.j. In Care Of Name",
      },
    ],
  },
  {
    id: "part1-address-history",
    title: "Part 1: Address History",
    description: "Provide your physical address history for the past five years.",
    questions: [
      {
        id: "part1.addressHistory.physicalAddressOne.streetNumberName",
        type: "text",
        label: "10.a. Street Number and Name",
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.cityOrTown",
        type: "text",
        label: "10.b. City or Town",
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.state",
        type: "select",
        label: "10.c. State",
        options: US_STATES,
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.zipCode",
        type: "text",
        label: "10.d. ZIP Code",
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.country",
        type: "text",
        label: "10.e. Country",
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.province",
        type: "text",
        label: "10.f. Province",
      },
      {
        id: "part1.addressHistory.physicalAddressOne.postalCode",
        type: "text",
        label: "10.g. Postal Code",
      },
      {
        id: "part1.addressHistory.physicalAddressOne.dateFrom",
        type: "date",
        label: "10.h. Date From (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part1.addressHistory.physicalAddressOne.dateTo",
        type: "date",
        label: "10.i. Date To (mm/dd/yyyy)",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.streetNumberName",
        type: "text",
        label: "11.a. Street Number and Name",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.cityOrTown",
        type: "text",
        label: "11.b. City or Town",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.state",
        type: "select",
        label: "11.c. State",
        options: US_STATES,
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.zipCode",
        type: "text",
        label: "11.d. ZIP Code",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.country",
        type: "text",
        label: "11.e. Country",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.province",
        type: "text",
        label: "11.f. Province",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.postalCode",
        type: "text",
        label: "11.g. Postal Code",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.dateFrom",
        type: "date",
        label: "11.h. Date From (mm/dd/yyyy)",
      },
      {
        id: "part1.addressHistory.physicalAddressTwo.dateTo",
        type: "date",
        label: "11.i. Date To (mm/dd/yyyy)",
      },
    ],
  },
  {
    id: "part1-employment-history",
    title: "Part 1: Employment History",
    description: "Provide your employment history for the past five years.",
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
      },
      {
        id: "part1.employmentHistory.employerOne.cityOrTown",
        type: "text",
        label: "12.c. City or Town",
      },
      {
        id: "part1.employmentHistory.employerOne.state",
        type: "select",
        label: "12.d. State",
        options: US_STATES,
      },
      {
        id: "part1.employmentHistory.employerOne.zipCode",
        type: "text",
        label: "12.e. ZIP Code",
      },
      {
        id: "part1.employmentHistory.employerOne.country",
        type: "text",
        label: "12.f. Country",
      },
      {
        id: "part1.employmentHistory.employerOne.province",
        type: "text",
        label: "12.g. Province",
      },
      {
        id: "part1.employmentHistory.employerOne.postalCode",
        type: "text",
        label: "12.h. Postal Code",
      },
      {
        id: "part1.employmentHistory.employerOne.startDate",
        type: "date",
        label: "12.i. Start Date (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part1.employmentHistory.employerOne.endDate",
        type: "date",
        label: "12.j. End Date (mm/dd/yyyy)",
      },
      {
        id: "part1.employmentHistory.employerOne.occupation",
        type: "text",
        label: "12.k. Occupation",
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
        id: "part1.employmentHistory.employerTwo.cityOrTown",
        type: "text",
        label: "13.c. City or Town",
      },
      {
        id: "part1.employmentHistory.employerTwo.state",
        type: "select",
        label: "13.d. State",
        options: US_STATES,
      },
      {
        id: "part1.employmentHistory.employerTwo.zipCode",
        type: "text",
        label: "13.e. ZIP Code",
      },
      {
        id: "part1.employmentHistory.employerTwo.country",
        type: "text",
        label: "13.f. Country",
      },
      {
        id: "part1.employmentHistory.employerTwo.province",
        type: "text",
        label: "13.g. Province",
      },
      {
        id: "part1.employmentHistory.employerTwo.postalCode",
        type: "text",
        label: "13.h. Postal Code",
      },
      {
        id: "part1.employmentHistory.employerTwo.startDate",
        type: "date",
        label: "13.i. Start Date (mm/dd/yyyy)",
      },
      {
        id: "part1.employmentHistory.employerTwo.endDate",
        type: "date",
        label: "13.j. End Date (mm/dd/yyyy)",
      },
      {
        id: "part1.employmentHistory.employerTwo.occupation",
        type: "text",
        label: "13.k. Occupation",
      },
    ],
  },
  {
    id: "part1-other-information",
    title: "Part 1: Other Information",
    description: "Provide additional personal and family information.",
    questions: [
      {
        id: "part1.otherInformation.cityTownOfBirth",
        type: "text",
        label: "14.a. City or Town of Birth",
        required: true,
      },
      {
        id: "part1.otherInformation.countryOfBirth",
        type: "text",
        label: "14.b. Country of Birth",
        required: true,
      },
      {
        id: "part1.otherInformation.provinceOrStateOfBirth",
        type: "text",
        label: "14.c. Province or State of Birth",
      },
      {
        id: "part1.otherInformation.maritalStatus",
        type: "select",
        label: "15. Marital Status",
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
        required: true,
      },
      {
        id: "part1.otherInformation.dateOfBirth",
        type: "date",
        label: "16. Date of Birth (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part1.otherInformation.sex",
        type: "radio",
        label: "17. Sex",
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
        required: true,
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
        label: "18.a. Parent 1 Family Name (Last Name)",
        required: true,
      },
      {
        id: "part1.parentOne.givenName",
        type: "text",
        label: "18.b. Parent 1 Given Name (First Name)",
        required: true,
      },
      {
        id: "part1.parentOne.middleName",
        type: "text",
        label: "18.c. Parent 1 Middle Name",
      },
      {
        id: "part1.parentOne.dateOfBirth",
        type: "date",
        label: "18.d. Parent 1 Date of Birth (mm/dd/yyyy)",
      },
      {
        id: "part1.parentOne.sex",
        type: "radio",
        label: "18.e. Parent 1 Sex",
        options: [
          { value: "M", label: "Male" },
          { value: "F", label: "Female" },
        ],
      },
      {
        id: "part1.parentOne.countryOfBirth",
        type: "text",
        label: "18.f. Parent 1 Country of Birth",
      },
      {
        id: "part1.parentOne.countryOfResidence",
        type: "text",
        label: "18.g. Parent 1 Country of Residence",
      },
      {
        id: "part1.parentOne.cityTownOfResidence",
        type: "text",
        label: "18.h. Parent 1 City or Town of Residence",
      },
      {
        id: "part1.parentTwo.familyName",
        type: "text",
        label: "19.a. Parent 2 Family Name (Last Name)",
      },
      {
        id: "part1.parentTwo.givenName",
        type: "text",
        label: "19.b. Parent 2 Given Name (First Name)",
      },
      {
        id: "part1.parentTwo.middleName",
        type: "text",
        label: "19.c. Parent 2 Middle Name",
      },
      {
        id: "part1.parentTwo.dateOfBirth",
        type: "date",
        label: "19.d. Parent 2 Date of Birth (mm/dd/yyyy)",
      },
      {
        id: "part1.parentTwo.sex",
        type: "radio",
        label: "19.e. Parent 2 Sex",
        options: [
          { value: "M", label: "Male" },
          { value: "F", label: "Female" },
        ],
      },
      {
        id: "part1.parentTwo.countryOfBirth",
        type: "text",
        label: "19.f. Parent 2 Country of Birth",
      },
      {
        id: "part1.parentTwo.countryOfResidence",
        type: "text",
        label: "19.g. Parent 2 Country of Residence",
      },
      {
        id: "part1.parentTwo.cityTownOfResidence",
        type: "text",
        label: "19.h. Parent 2 City or Town of Residence",
      },
    ],
  },
  {
    id: "part1-previous-marriages",
    title: "Part 1: Previous Marriages",
    description: "Provide information about any previous marriages.",
    questions: [
      {
        id: "part1.parentTwoPreviouslyMarried",
        type: "radio",
        label: "20. Was Parent 2 previously married?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part1.previousSpouseFamilyName",
        type: "text",
        label: "21.a. Previous Spouse Family Name (Last Name)",
      },
      {
        id: "part1.previousSpouseGivenName",
        type: "text",
        label: "21.b. Previous Spouse Given Name (First Name)",
      },
      {
        id: "part1.previousSpouseMiddleName",
        type: "text",
        label: "21.c. Previous Spouse Middle Name",
      },
      {
        id: "part1.dateMarriageEnded",
        type: "date",
        label: "21.d. Date Marriage Ended (mm/dd/yyyy)",
      },
    ],
  },
  {
    id: "part1-citizenship-information",
    title: "Part 1: Citizenship Information",
    description: "Provide details about your citizenship status.",
    questions: [
      {
        id: "part1.citizenshipThrough",
        type: "select",
        label: "22. Citizenship Through",
        options: [
          { value: "birth", label: "Birth" },
          { value: "naturalization", label: "Naturalization" },
          { value: "derivation", label: "Derivation" },
        ],
        required: true,
      },
      {
        id: "part1.certificateObtained",
        type: "radio",
        label: "23. Certificate Obtained?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part1.certificateNumber",
        type: "text",
        label: "24. Certificate Number",
      },
      {
        id: "part1.placeOfIssuance",
        type: "text",
        label: "25. Place of Issuance",
      },
      {
        id: "part1.dateOfIssuance",
        type: "date",
        label: "26. Date of Issuance (mm/dd/yyyy)",
      },
    ],
  },
  {
    id: "part1-additional-names",
    title: "Part 1: Additional Names",
    description: "List any additional names you have used.",
    questions: [
      {
        id: "part1.additionalFamilyName",
        type: "text",
        label: "27.a. Additional Family Name (Last Name)",
      },
      {
        id: "part1.additionalGivenName",
        type: "text",
        label: "27.b. Additional Given Name (First Name)",
      },
      {
        id: "part1.additionalMiddleName",
        type: "text",
        label: "27.c. Additional Middle Name",
      },
    ],
  },
  {
    id: "part1-filing-information",
    title: "Part 1: Filing Information",
    description: "Provide details about your filing.",
    questions: [
      {
        id: "part1.dateOfFiling",
        type: "date",
        label: "28. Date of Filing (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part1.uscisAction",
        type: "text",
        label: "29. USCIS Action",
      },
      {
        id: "part1.filedForOtherBeneficiary",
        type: "radio",
        label: "30. Have you filed for another beneficiary?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: "part1-children-information",
    title: "Part 1: Children Information",
    description: "Provide information about your children.",
    questions: [
      {
        id: "part1.childrenUnder18",
        type: "radio",
        label: "31. Do you have children under 18?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part1.childAge1",
        type: "text",
        label: "32.a. Child 1 Age",
      },
      {
        id: "part1.childAge2",
        type: "text",
        label: "32.b. Child 2 Age",
      },
    ],
  },
  {
    id: "part1-residence-information",
    title: "Part 1: Residence Information",
    description: "Provide information about your residences.",
    questions: [
      {
        id: "part1.residenceOneCountry",
        type: "text",
        label: "33.a. Residence 1 Country",
      },
      {
        id: "part1.residenceOneState",
        type: "select",
        label: "33.b. Residence 1 State",
        options: US_STATES,
      },
      {
        id: "part1.residenceTwoCountry",
        type: "text",
        label: "34.a. Residence 2 Country",
      },
      {
        id: "part1.residenceTwoState",
        type: "select",
        label: "34.b. Residence 2 State",
        options: US_STATES,
      },
    ],
  },


  {
    id: "part2-beneficiary-personal-info",
    title: "Part 2: Beneficiary's Personal Information",
    description: "Provide the personal details of the beneficiary.",
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
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      {
        id: "part2.beneficiaryMaritalStatus",
        type: "radio",
        label: "6. Marital Status",
        required: true,
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
      },
      {
        id: "part2.beneficiaryCityTownOfBirth",
        type: "text",
        label: "7. City or Town of Birth",
        required: true,
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
    ],
  },
  {
    id: "part2-beneficiary-other-names",
    title: "Part 2: Other Names Used by Beneficiary",
    description: "List any other names the beneficiary has used.",
    questions: [
      {
        id: "part2.beneficiaryOtherFamilyName",
        type: "text",
        label: "10.a. Other Family Name (Last Name)",
      },
      {
        id: "part2.beneficiaryOtherGivenName",
        type: "text",
        label: "10.b. Other Given Name (First Name)",
      },
      {
        id: "part2.beneficiaryOtherMiddleName",
        type: "text",
        label: "10.c. Other Middle Name",
      },
    ],
  },
  {
    id: "part2-beneficiary-mailing-address",
    title: "Part 2: Beneficiary's Mailing Address",
    description: "Provide the mailing address for the beneficiary.",
    questions: [
      {
        id: "part2.beneficiaryMailingInCareOfName",
        type: "text",
        label: "11.a. In Care Of Name",
      },
      {
        id: "part2.beneficiaryMailingStreetNumberName",
        type: "text",
        label: "11.b. Street Number and Name",
        required: true,
      },
      {
        id: "part2.beneficiaryMailingUnit",
        type: "select",
        label: "11.c. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.beneficiaryMailingAptSteFlrNumber",
        type: "text",
        label: "11.d. Unit Number",
      },
      {
        id: "part2.beneficiaryMailingCityOrTown",
        type: "text",
        label: "11.e. City or Town",
        required: true,
      },
      {
        id: "part2.beneficiaryMailingState",
        type: "select",
        label: "11.f. State",
        options: US_STATES,
      },
      {
        id: "part2.beneficiaryMailingZipCode",
        type: "text",
        label: "11.g. ZIP Code",
        required: true,
      },
      {
        id: "part2.beneficiaryMailingCountry",
        type: "text",
        label: "11.h. Country",
        required: true,
      },
    ],
  },
  {
    id: "part2-beneficiary-physical-address",
    title: "Part 2: Beneficiary's Physical Address",
    description: "Provide the physical address where the beneficiary resides.",
    questions: [
      {
        id: "part2.beneficiaryPhysicalStreetNumberName",
        type: "text",
        label: "12.a. Street Number and Name",
        required: true,
      },
      {
        id: "part2.beneficiaryPhysicalUnit",
        type: "select",
        label: "12.b. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.beneficiaryPhysicalAptSteFlrNumber",
        type: "text",
        label: "12.c. Unit Number",
      },
      {
        id: "part2.beneficiaryPhysicalCityOrTown",
        type: "text",
        label: "12.d. City or Town",
        required: true,
      },
      {
        id: "part2.beneficiaryPhysicalState",
        type: "select",
        label: "12.e. State",
        options: US_STATES,
      },
      {
        id: "part2.beneficiaryPhysicalZipCode",
        type: "text",
        label: "12.f. ZIP Code",
        required: true,
      },
      {
        id: "part2.beneficiaryPhysicalCountry",
        type: "text",
        label: "12.g. Country",
        required: true,
      },
      {
        id: "part2.beneficiaryPhysicalDateFrom",
        type: "date",
        label: "12.h. Date From (mm/dd/yyyy)",
        helpText: "Enter the date from which the beneficiary has lived at this address.",
      },
    ],
  },
  {
    id: "part2-beneficiary-employment-history",
    title: "Part 2: Beneficiary's Employment History",
    description: "Provide the employment history of the beneficiary.",
    questions: [
      {
        id: "part2.beneficiaryEmployerOneName",
        type: "text",
        label: "13.a. Employer 1 Name",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOneStreetNumberName",
        type: "text",
        label: "13.b. Street Number and Name",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOne.selectFloor",
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
        id: "part2.beneficiaryEmployerOne.enterAptSteFlrNumber",
        type: "text",
        label: "13.d. Unit Number",
      },
      {
        id: "part2.beneficiaryEmployerOne.cityOrTown",
        type: "text",
        label: "13.e. City or Town",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOne.state",
        type: "select",
        label: "13.f. State",
        options: US_STATES,
      },
      {
        id: "part2.beneficiaryEmployerOne.zipCode",
        type: "text",
        label: "13.g. ZIP Code",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOne.country",
        type: "text",
        label: "13.h. Country",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOne.employmentStartDate",
        type: "date",
        label: "13.i. Employment Start Date (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerOneEndDate",
        type: "date",
        label: "13.j. Employment End Date (mm/dd/yyyy)",
        helpText: "Leave blank if currently employed.",
      },
      {
        id: "part2.beneficiaryEmployerOne.occupation",
        type: "text",
        label: "13.k. Occupation",
        required: true,
      },
      {
        id: "part2.beneficiaryEmployerTwo.nameOfEmployer",
        type: "text",
        label: "14.a. Employer 2 Name",
      },
      {
        id: "part2.beneficiaryEmployerTwo.streetNumberName",
        type: "text",
        label: "14.b. Street Number and Name",
      },
      {
        id: "part2.beneficiaryEmployerTwo.selectFloor",
        type: "select",
        label: "14.c. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.beneficiaryEmployerTwo.enterAptSteFlrNumber",
        type: "text",
        label: "14.d. Unit Number",
      },
      {
        id: "part2.beneficiaryEmployerTwo.cityOrTown",
        type: "text",
        label: "14.e. City or Town",
      },
      {
        id: "part2.beneficiaryEmployerTwo.state",
        type: "select",
        label: "14.f. State",
        options: US_STATES,
      },
      {
        id: "part2.beneficiaryEmployerTwo.zipCode",
        type: "text",
        label: "14.g. ZIP Code",
      },
      {
        id: "part2.beneficiaryEmployerTwo.country",
        type: "text",
        label: "14.h. Country",
      },
      {
        id: "part2.beneficiaryEmployerTwo.employmentStartDate",
        type: "date",
        label: "14.i. Employment Start Date (mm/dd/yyyy)",
      },
      {
        id: "part2.beneficiaryEmployerTwo.employmentEndDate",
        type: "date",
        label: "14.j. Employment End Date (mm/dd/yyyy)",
        helpText: "Leave blank if currently employed.",
      },
      {
        id: "part2.beneficiaryEmployerTwo.occupation",
        type: "text",
        label: "14.k. Occupation",
      },
    ],
  },
  {
    id: "part2-beneficiary-parents-info",
    title: "Part 2: Beneficiary's Parents Information",
    description: "Provide information about the beneficiary's parents.",
    questions: [
      {
        id: "part2.beneficiaryParentOne.familyName",
        type: "text",
        label: "15.a. Parent 1 Family Name (Last Name)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentOne.givenName",
        type: "text",
        label: "15.b. Parent 1 Given Name (First Name)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentOne.middleName",
        type: "text",
        label: "15.c. Parent 1 Middle Name",
      },
      {
        id: "part2.beneficiaryParentOne.dateOfBirth",
        type: "date",
        label: "15.d. Parent 1 Date of Birth (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentOne.sex",
        type: "radio",
        label: "15.e. Parent 1 Sex",
        required: true,
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      {
        id: "part2.beneficiaryParentOne.countryOfBirth",
        type: "text",
        label: "15.f. Parent 1 Country of Birth",
        required: true,
      },
      {
        id: "part2.beneficiaryParentOne.countryOfResidence",
        type: "text",
        label: "15.g. Parent 1 Country of Residence",
        required: true,
      },
      {
        id: "part2.beneficiaryParentOne.cityTownOfResidence",
        type: "text",
        label: "15.h. Parent 1 City or Town of Residence",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.familyName",
        type: "text",
        label: "16.a. Parent 2 Family Name (Last Name)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.givenName",
        type: "text",
        label: "16.b. Parent 2 Given Name (First Name)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.middleName",
        type: "text",
        label: "16.c. Parent 2 Middle Name",
      },
      {
        id: "part2.beneficiaryParentTwo.dateOfBirth",
        type: "date",
        label: "16.d. Parent 2 Date of Birth (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.sex",
        type: "radio",
        label: "16.e. Parent 2 Sex",
        required: true,
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      {
        id: "part2.beneficiaryParentTwo.countryOfBirth",
        type: "text",
        label: "16.f. Parent 2 Country of Birth",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.countryOfResidence",
        type: "text",
        label: "16.g. Parent 2 Country of Residence",
        required: true,
      },
      {
        id: "part2.beneficiaryParentTwo.cityTownOfResidence",
        type: "text",
        label: "16.h. Parent 2 City or Town of Residence",
        required: true,
      },
    ],
  },
  {
    id: "part2-beneficiary-marital-history",
    title: "Part 2: Beneficiary's Marital History",
    description: "Provide details about the beneficiary's marital history.",
    questions: [
      {
        id: "part2.beneficiaryPreviouslyMarried",
        type: "radio",
        label: "17. Has the beneficiary been previously married?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part2.previousSpouse.familyName",
        type: "text",
        label: "18.a. Previous Spouse Family Name (Last Name)",
        helpText: "Provide if the beneficiary was previously married.",
      },
      {
        id: "part2.previousSpouse.givenName",
        type: "text",
        label: "18.b. Previous Spouse Given Name (First Name)",
        helpText: "Provide if the beneficiary was previously married.",
      },
      {
        id: "part2.previousSpouse.middleName",
        type: "text",
        label: "18.c. Previous Spouse Middle Name",
      },
      {
        id: "part2.previousSpouse.dateMarriageEnded",
        type: "date",
        label: "18.d. Date Marriage Ended (mm/dd/yyyy)",
        helpText: "Provide if the beneficiary was previously married.",
      },
    ],
  },
  {
    id: "part2-beneficiary-us-entry",
    title: "Part 2: Beneficiary's U.S. Entry Information",
    description: "Provide details about the beneficiary's entry into the United States.",
    questions: [
      {
        id: "part2.beneficiaryInUS",
        type: "radio",
        label: "19. Is the beneficiary currently in the United States?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part2.beneficiaryLastArrivedAs",
        type: "text",
        label: "20. Last Arrival as (e.g., visitor, student)",
        helpText: "Provide the status at last entry into the U.S.",
      },
      {
        id: "part2.beneficiaryArrivalDepartureRecordNumber",
        type: "text",
        label: "21. Arrival/Departure Record Number (I-94)",
        helpText: "Provide the I-94 number if applicable.",
      },
      {
        id: "part2.beneficiaryDateOfArrival",
        type: "date",
        label: "22. Date of Arrival (mm/dd/yyyy)",
        helpText: "Provide the date of last arrival in the U.S.",
      },
      {
        id: "part2.beneficiaryCountryOfIssuance",
        type: "text",
        label: "23. Country of Issuance for Passport",
        helpText: "Provide the country that issued the passport.",
      },
      {
        id: "part2.beneficiaryPassportExpirationDate",
        type: "date",
        label: "24. Passport Expiration Date (mm/dd/yyyy)",
        helpText: "Provide the expiration date of the passport.",
      },
      {
        id: "part2.beneficiaryPassportNumber",
        type: "text",
        label: "25. Passport Number",
        helpText: "Provide the passport number.",
      },
      {
        id: "part2.beneficiaryTravelDocumentNumber",
        type: "text",
        label: "26. Travel Document Number",
        helpText: "Provide if applicable.",
      },
      {
        id: "part2.beneficiaryDateAuthorizedStayExpired",
        type: "date",
        label: "27. Date Authorized Stay Expired (mm/dd/yyyy)",
        helpText: "Provide if applicable.",
      },
    ],
  },
  {
    id: "part2-beneficiary-children-info",
    title: "Part 2: Beneficiary's Children Information",
    description: "Provide information about the beneficiary's children.",
    questions: [
      {
        id: "part2.beneficiaryHasChildren",
        type: "radio",
        label: "28. Does the beneficiary have any children?",
        required: true,
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "part2.child.familyName",
        type: "text",
        label: "29.a. Child Family Name (Last Name)",
        helpText: "Provide if the beneficiary has children.",
      },
      {
        id: "part2.child.givenName",
        type: "text",
        label: "29.b. Child Given Name (First Name)",
        helpText: "Provide if the beneficiary has children.",
      },
      {
        id: "part2.child.middleName",
        type: "text",
        label: "29.c. Child Middle Name",
      },
      {
        id: "part2.child.countryOfBirth",
        type: "text",
        label: "29.d. Child Country of Birth",
        helpText: "Provide if the beneficiary has children.",
      },
      {
        id: "part2.child.dateOfBirth",
        type: "date",
        label: "29.e. Child Date of Birth (mm/dd/yyyy)",
        helpText: "Provide if the beneficiary has children.",
      },
      {
        id: "part2.childResidesWithBeneficiary",
        type: "radio",
        label: "29.f. Does the child reside with the beneficiary?",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
        helpText: "Provide if the beneficiary has children.",
      },
    ],
  },


  {
    id: "part3-criminal-history",
    title: "Part 3: Criminal History and Domestic Violence",
    description: "Provide information regarding any criminal history or protection orders.",
    questions: [
      {
        id: "part3.protectionOrder",
        type: "radio",
        label: "1. Have you ever had a protection or restraining order issued against you?",
        required: true,
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" },
        ],
        helpText: "Include any orders issued by a court to prevent harassment or violence.",
      },
      {
        id: "part3.domesticViolenceArrest",
        type: "radio",
        label: "2.a. Have you ever been arrested for domestic violence?",
        required: true,
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" },
        ],
        helpText: "Include any arrests related to domestic violence incidents.",
      },
      {
        id: "part3.homicideArrest",
        type: "radio",
        label: "2.b. Have you ever been arrested for homicide?",
        required: true,
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" },
        ],
        helpText: "Include any arrests related to charges of homicide.",
      },
      {
        id: "part3.substanceArrest",
        type: "radio",
        label: "2.c. Have you ever been arrested for any substance-related offenses?",
        required: true,
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" },
        ],
        helpText: "Include any arrests related to illegal drugs or substances.",
      },
      {
        id: "part3.selfDefense",
        type: "radio",
        label: "3. Have you ever claimed self-defense in a criminal case?",
        options: [
          { value: "A", label: "Yes, claimed self-defense" },
          { value: "B", label: "Yes, violated a protection order" },
          { value: "C", label: "Yes, connected to another crime" },
        ],
        helpText: "Select the option that best describes your situation.",
      },
      {
        id: "part3.multipleFilerWaiver",
        type: "radio",
        label: "5. Are you requesting a waiver for multiple filings?",
        options: [
          { value: "A", label: "Yes, first waiver request" },
          { value: "B", label: "Yes, second waiver request" },
          { value: "C", label: "Yes, third or more waiver request" },
          { value: "D", label: "No waiver requested" },
        ],
        helpText: "Indicate if you are requesting a waiver due to multiple filings.",
      },
      {
        id: "part3.arrestRecord",
        type: "radio",
        label: "4.a. Do you have any arrest records?",
        required: true,
        options: [
          { value: "Y", label: "Yes" },
          { value: "N", label: "No" },
        ],
        helpText: "Include any records of arrests, even if charges were dismissed.",
      },
      {
        id: "part3.arrestDetails",
        type: "textarea",
        label: "4.b. Provide details of any arrests.",
        helpText: "Include dates, locations, and outcomes of any arrests.",
      },
    ],
  },


  {
    id: "part4-ethnicity-race",
    title: "Part 4: Ethnicity and Race",
    description: "Provide your ethnicity and race information.",
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
          { value: "Y", label: "Native Hawaiian or Other Pacific Islander", questionId: "part4.raceNativeHawaiian" },
          { value: "Y", label: "American Indian or Alaska Native", questionId: "part4.raceAmericanIndian" },
          { value: "Y", label: "White", questionId: "part4.raceWhite" },
          { value: "Y", label: "Asian", questionId: "part4.raceAsian" },
          { value: "Y", label: "Black or African American", questionId: "part4.raceBlack" },
        ],
        helpText: "Select all options that apply to your race.",
      },
    ],
  },
  {
    id: "part4-physical-characteristics",
    title: "Part 4: Physical Characteristics",
    description: "Provide your height, weight, eye color, and hair color.",
    questions: [
      {
        id: "part4.height",
        type: "group",
        label: "3. Height",
        questions: [
          {
            id: "part4.heightFeet",
            type: "select",
            label: "Feet",
            required: true,
            options: Array.from({ length: 8 }, (_, i) => ({ value: (i + 1).toString(), label: (i + 1).toString() })),
            helpText: "Select your height in feet.",
          },
          {
            id: "part4.heightInches",
            type: "select",
            label: "Inches",
            required: true,
            options: Array.from({ length: 12 }, (_, i) => ({ value: i.toString(), label: i.toString() })),
            helpText: "Select your height in inches.",
          },
        ],
      },
      {
        id: "part4.weight",
        type: "group",
        label: "4. Weight (in pounds)",
        questions: [
          {
            id: "part4.weightFirstDigit",
            type: "text",
            label: "First Digit",
            required: true,
            maxLength: 1,
            helpText: "Enter the first digit of your weight.",
          },
          {
            id: "part4.weightSecondDigit",
            type: "text",
            label: "Second Digit",
            required: true,
            maxLength: 1,
            helpText: "Enter the second digit of your weight.",
          },
          {
            id: "part4.weightThirdDigit",
            type: "text",
            label: "Third Digit",
            required: true,
            maxLength: 1,
            helpText: "Enter the third digit of your weight.",
          },
        ],
      },
      {
        id: "part4.eyeColor",
        type: "radio",
        label: "5. Eye Color",
        required: true,
        options: [
          { value: "BLU", label: "Blue", questionId: "part4.eyeColorBlue" },
          { value: "GRY", label: "Gray", questionId: "part4.eyeColorGray" },
          { value: "HAZ", label: "Hazel", questionId: "part4.eyeColorHazel" },
          { value: "PNK", label: "Pink", questionId: "part4.eyeColorPink" },
          { value: "MAR", label: "Maroon", questionId: "part4.eyeColorMaroon" },
          { value: "GRN", label: "Green", questionId: "part4.eyeColorGreen" },
          { value: "BRO", label: "Brown", questionId: "part4.eyeColorBrown" },
          { value: "BLK", label: "Black", questionId: "part4.eyeColorBlack" },
          { value: "UNK", label: "Unknown", questionId: "part4.eyeColorUnknown" },
        ],
        helpText: "Select the color that best matches your eye color.",
      },
      {
        id: "part4.hairColor",
        type: "radio",
        label: "6. Hair Color",
        required: true,
        options: [
          { value: "BAL", label: "Bald", questionId: "part4.hairColorBald" },
          { value: "BLN", label: "Blond", questionId: "part4.hairColorBlond" },
          { value: "GRY", label: "Gray", questionId: "part4.hairColorGray" },
          { value: "SDY", label: "Sandy", questionId: "part4.hairColorSandy" },
          { value: "UNK", label: "Unknown", questionId: "part4.hairColorUnknown" },
          { value: "WHT", label: "White", questionId: "part4.hairColorWhite" },
          { value: "RED", label: "Red", questionId: "part4.hairColorRed" },
          { value: "BRO", label: "Brown", questionId: "part4.hairColorBrown" },
          { value: "BLK", label: "Black", questionId: "part4.hairColorBlack" },
        ],
        helpText: "Select the color that best matches your hair color.",
      },
    ],
  },


  {
    id: "part5-petitioner-contact-info",
    title: "Part 5: Petitioner Contact Information",
    description: "Provide your contact details for correspondence.",
    questions: [
      {
        id: "part5.petitionerDaytimePhoneNumber",
        type: "tel",
        label: "1. Daytime Telephone Number",
        required: true,
        placeholder: "(555) 123-4567",
        helpText: "Enter a phone number where you can be reached during the day.",
      },
      {
        id: "part5.petitionerMobileNumber",
        type: "tel",
        label: "2. Mobile Telephone Number",
        placeholder: "(555) 123-4567",
        helpText: "Provide your mobile number if different from your daytime number.",
      },
      {
        id: "part5.petitionerEmail",
        type: "email",
        label: "3. Email Address",
        placeholder: "example@email.com",
        helpText: "Enter your email address for electronic correspondence.",
      },
    ],
  },



  {
    id: "part6-interpreter-info",
    title: "Part 6: Interpreter's Contact Information, Certification, and Signature",
    description: "Provide the interpreter's details if someone helped you complete this form.",
    questions: [
      {
        id: "part6.interpreterGivenName",
        type: "text",
        label: "1.a. Interpreter's Given Name (First Name)",
        required: true,
        helpText: "Enter the first name of the interpreter.",
      },
      {
        id: "part6.interpreterFamilyName",
        type: "text",
        label: "1.b. Interpreter's Family Name (Last Name)",
        required: true,
        helpText: "Enter the last name of the interpreter.",
      },
      {
        id: "part6.interpreterBusinessName",
        type: "text",
        label: "2. Name of Business or Organization (if applicable)",
        helpText: "Enter the name of the business or organization the interpreter is affiliated with, if any.",
      },
      {
        id: "part6.interpreterDaytimePhoneNumber",
        type: "tel",
        label: "4.a. Interpreter's Daytime Telephone Number",
        required: true,
        placeholder: "(555) 123-4567",
        helpText: "Provide a phone number where the interpreter can be reached during the day.",
      },
      {
        id: "part6.interpreterMobilePhoneNumber",
        type: "tel",
        label: "4.b. Interpreter's Mobile Telephone Number",
        placeholder: "(555) 123-4567",
        helpText: "Provide a mobile phone number for the interpreter, if different from the daytime number.",
      },
      {
        id: "part6.interpreterEmail",
        type: "email",
        label: "5. Interpreter's Email Address",
        placeholder: "example@email.com",
        helpText: "Provide the interpreter's email address for contact purposes.",
      },
      {
        id: "part6.languageFluency",
        type: "text",
        label: "6. Language in which you are fluent",
        required: true,
        helpText: "Specify the language(s) the interpreter is fluent in, used to interpret this form.",
      },
    
    ],
  },


  {
    id: "part7-preparer-information",
    title: "Part 7: Preparer's Information",
    description: "Provide the details of the person who prepared this form, if applicable.",
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
        helpText: "Enter the first name of the person who prepared this form.",
      },
      {
        id: "part7.preparerBusinessName",
        type: "text",
        label: "2. Name of Business/Organization",
        helpText: "Enter the name of the business or organization, if applicable.",
      },
      {
        id: "part7.preparerDaytimePhoneNumber",
        type: "tel",
        label: "3. Preparer's Daytime Telephone Number",
        required: true,
        placeholder: "(555) 123-4567",
        helpText: "Provide a phone number where the preparer can be reached during business hours.",
      },
      {
        id: "part7.preparerMobileNumber",
        type: "tel",
        label: "4. Preparer's Mobile Telephone Number",
        placeholder: "(555) 123-4567",
        helpText: "Provide a mobile phone number for the preparer, if different from the daytime number.",
      },
      {
        id: "part7.preparerEmail",
        type: "email",
        label: "5. Preparer's Email Address",
        placeholder: "example@email.com",
        helpText: "Enter the email address of the preparer.",
      },
    
    ],
  },


  {
    id: "part8-additional-information",
    title: "Part 8: Additional Information",
    description: "Provide additional information as needed for previous sections.",
    questions: [
      {
        id: "part8.pageNumber3a",
        type: "text",
        label: "3.a. Page Number",
        helpText: "Enter the page number of the form where additional information is needed.",
      },
      {
        id: "part8.partNumber3b",
        type: "text",
        label: "3.b. Part Number",
        helpText: "Enter the part number of the form where additional information is needed.",
      },
      {
        id: "part8.itemNumber3c",
        type: "text",
        label: "3.c. Item Number",
        helpText: "Enter the item number of the form where additional information is needed.",
      },
      {
        id: "part8.additionalInfo3d",
        type: "textarea",
        label: "3.d. Additional Information",
        helpText: "Provide any additional information that could not be included in the previous sections.",
      },
      {
        id: "part8.pageNumber4a",
        type: "text",
        label: "4.a. Page Number",
        helpText: "Enter the page number of the form where additional information is needed.",
      },
      {
        id: "part8.partNumber4b",
        type: "text",
        label: "4.b. Part Number",
        helpText: "Enter the part number of the form where additional information is needed.",
      },
      {
        id: "part8.itemNumber4c",
        type: "text",
        label: "4.c. Item Number",
        helpText: "Enter the item number of the form where additional information is needed.",
      },
      {
        id: "part8.additionalInfo4d",
        type: "textarea",
        label: "4.d. Additional Information",
        helpText: "Provide any additional information that could not be included in the previous sections.",
      },
      {
        id: "part8.pageNumber5a",
        type: "text",
        label: "5.a. Page Number",
        helpText: "Enter the page number of the form where additional information is needed.",
      },
      {
        id: "part8.partNumber5b",
        type: "text",
        label: "5.b. Part Number",
        helpText: "Enter the part number of the form where additional information is needed.",
      },
      {
        id: "part8.itemNumber5c",
        type: "text",
        label: "5.c. Item Number",
        helpText: "Enter the item number of the form where additional information is needed.",
      },
      {
        id: "part8.additionalInfo5d",
        type: "textarea",
        label: "5.d. Additional Information",
        helpText: "Provide any additional information that could not be included in the previous sections.",
      },
      {
        id: "part8.pageNumber6a",
        type: "text",
        label: "6.a. Page Number",
        helpText: "Enter the page number of the form where additional information is needed.",
      },
      {
        id: "part8.partNumber6b",
        type: "text",
        label: "6.b. Part Number",
        helpText: "Enter the part number of the form where additional information is needed.",
      },
      {
        id: "part8.itemNumber6c",
        type: "text",
        label: "6.c. Item Number",
        helpText: "Enter the item number of the form where additional information is needed.",
      },
      {
        id: "part8.additionalInfo6d",
        type: "textarea",
        label: "6.d. Additional Information",
        helpText: "Provide any additional information that could not be included in the previous sections.",
      },
      {
        id: "part8.pageNumber7a",
        type: "text",
        label: "7.a. Page Number",
        helpText: "Enter the page number of the form where additional information is needed.",
      },
      {
        id: "part8.partNumber7b",
        type: "text",
        label: "7.b. Part Number",
        helpText: "Enter the part number of the form where additional information is needed.",
      },
      {
        id: "part8.itemNumber7c",
        type: "text",
        label: "7.c. Item Number",
        helpText: "Enter the item number of the form where additional information is needed.",
      },
      {
        id: "part8.additionalInfo7d",
        type: "textarea",
        label: "7.d. Additional Information",
        helpText: "Provide any additional information that could not be included in the previous sections.",
      },
    ],
  },
  {
    id: "part8-personal-information",
    title: "Part 8: Personal Information",
    description: "Provide your personal information as required.",
    questions: [
      {
        id: "part8.familyName",
        type: "text",
        label: "Family Name (Last Name)",
        required: true,
        helpText: "Enter your family name as it appears on your legal documents.",
      },
      {
        id: "part8.givenName",
        type: "text",
        label: "Given Name (First Name)",
        required: true,
        helpText: "Enter your given name as it appears on your legal documents.",
      },
      {
        id: "part8.middleName",
        type: "text",
        label: "Middle Name",
        helpText: "Enter your middle name if applicable.",
      },
      {
        id: "part8.alienNumber",
        type: "text",
        label: "Alien Registration Number (A-Number)",
        helpText: "Enter your A-Number if you have been assigned one.",
      },
    ],
  },
],
  pdfFieldMappings: I_129F_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_129F_DEFINITION;
