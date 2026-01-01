/**
 * I-485 Form Definition
 * Generated: 2025-12-29T21:00:42.101Z
 */

import { FormDefinition } from './forms-registry';
import { I_485_FIELD_MAPPINGS } from './form-mappings/i-485-field-mappings';

const I_485_DEFINITION: FormDefinition = {
  id: "i-485",
  code: "I-485",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
{
  id: "attorney-information",
  title: "Attorney Information",
  questions: [
    {
      id: "attorney.stateBarNumber",
      type: "text",
      label: "Attorney State Bar Number",
      required: false,
    },
    {
      id: "attorney.formG28Attached",
      type: "checkbox",
      label: "Form G-28 Attached",
      required: false,
      options: [
        { value: "1", label: "Attached" }
      ]
    },
    {
      id: "attorney.volagNumber",
      type: "text",
      label: "VOLAG Number",
      required: false,
    },
    {
      id: "attorney.uscisOnlineAcctNumber",
      type: "text",
      label: "USCIS Online Account Number",
      required: false,
    },
  ],
},
{
  id: "part1-personal-information",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.alienNumber",
      type: "text",
      label: "Alien Registration Number (A-Number)",
      required: true,
    },
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
      label: "2.a. Other Names Used - Family Name (Last Name)",
      required: false,
    },
    {
      id: "part1.otherNamesUsed.givenName",
      type: "text",
      label: "2.b. Other Names Used - Given Name (First Name)",
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
      label: "2.a. Other Names Used 2 - Family Name (Last Name)",
      required: false,
    },
    {
      id: "part1.otherNamesUsed2.givenName",
      type: "text",
      label: "2.b. Other Names Used 2 - Given Name (First Name)",
      required: false,
    },
    {
      id: "part1.otherNamesUsed2.middleName",
      type: "text",
      label: "2.c. Other Names Used 2 - Middle Name",
      required: false,
    },
    {
      id: "part1.dateOfBirth",
      type: "date",
      label: "3. Date of Birth (mm/dd/yyyy)",
      required: true,
    },
    {
      id: "part1.usedOtherDOB",
      type: "radio",
      label: "4. Have you used other dates of birth?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.otherDOBs",
      type: "text",
      label: "5. Other Dates of Birth Used",
      required: false,
    },
    {
      id: "part1.alienNumberReadOnly",
      type: "text",
      label: "Alien Number (Read Only)",
      required: false,
    },
    {
      id: "part1.sex",
      type: "radio",
      label: "6. Sex",
      required: true,
      options: [
        { value: "F", label: "Female" },
        { value: "M", label: "Male" }
      ]
    },
    {
      id: "part1.placeOfBirth.cityTown",
      type: "text",
      label: "7.a. City/Town of Birth",
      required: true,
    },
    {
      id: "part1.placeOfBirth.country",
      type: "text",
      label: "7.b. Country of Birth",
      required: true,
    },
    {
      id: "part1.countryOfCitizenship",
      type: "text",
      label: "8. Country of Citizenship or Nationality",
      required: true,
    },
  ],
},
{
  id: "part1-personal-info",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.uscisAccountNumber",
      type: "text",
      label: "9. USCIS Online Account Number",
      required: false,
    },
    {
      id: "part1.passportNumber",
      type: "text",
      label: "10.a. Passport Number",
      required: false,
    },
    {
      id: "part1.passportExpirationDate",
      type: "text",
      label: "10.b. Passport Expiration Date",
      required: false,
    },
    {
      id: "part1.passportCountry",
      type: "text",
      label: "10.c. Country of Passport Issuance",
      required: false,
    },
    {
      id: "part1.visaNumber",
      type: "text",
      label: "10.d. Nonimmigrant Visa Number",
      required: false,
    },
    {
      id: "part1.cityOfLastArrival",
      type: "choice",
      label: "10.e. City of Last Arrival",
      required: false,
    },
    {
      id: "part1.stateOfLastArrival",
      type: "text",
      label: "10.f. State of Last Arrival",
      required: false,
    },
    {
      id: "part1.dateOfLastArrival",
      type: "text",
      label: "10.g. Date of Last Arrival",
      required: false,
    },
    {
      id: "part1.nonImmigrantVisaIssueDate",
      type: "text",
      label: "10.h. Date Visa Was Issued",
      required: false,
    },
    {
      id: "part1.alienNumber",
      type: "button",
      label: "4. Alien Registration Number (A-Number)",
      required: false,
    },
    {
      id: "part1.hasAlienNumber",
      type: "radio",
      label: "4. Do you have an Alien Registration Number (A-Number)?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.usedOtherANumber",
      type: "radio",
      label: "5. Have you ever used another Alien Registration Number (A-Number)?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.otherANumber",
      type: "text",
      label: "5.a. Other Alien Registration Number (A-Number)",
      required: false,
    },
    {
      id: "part1.otherANumberButton",
      type: "button",
      label: "5.b. Other Alien Registration Number Button",
      required: false,
    },
    {
      id: "part1.otherImmigrationHistory",
      type: "text",
      label: "Other Immigration History",
      required: false,
    },
    {
      id: "part1.admittedStatus",
      type: "text",
      label: "Admitted Status",
      required: false,
    },
    {
      id: "part1.paroledStatus",
      type: "text",
      label: "Paroled Status",
      required: false,
    },
    {
      id: "part1.familyName",
      type: "text",
      label: "1.a. Family Name (Last Name)",
      required: true,
    },
  ],
},
{
  id: "part2-special-programs",
  title: "Part 2: Special Programs",
  questions: [
    {
      id: "part2.specialPrograms",
      type: "radio",
      label: "11. Special Programs",
      required: false,
      options: [
        { value: "11A", label: "Program 11A" },
        { value: "11B", label: "Program 11B" },
        { value: "11C", label: "Program 11C" },
        { value: "11D", label: "Program 11D" }
      ]
    },
    {
      id: "part2.alienNumberReadOnly",
      type: "text",
      label: "Alien Number (Read Only)",
      required: false,
    },
  ],
},
{
  id: "part1-personal-info",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.givenName",
      type: "text",
      label: "1.a. Given Name (First Name)",
      required: true,
    },
    {
      id: "part1.expirationDateOfAuthorizedStay",
      type: "date",
      label: "1.b. Expiration Date of Authorized Stay",
      required: true,
    },
    {
      id: "part1.immigrationStatusOnI94",
      type: "text",
      label: "1.c. Immigration Status on I-94",
      required: true,
    },
    {
      id: "part1.i94ArrivalDepartureRecordNumber",
      type: "text",
      label: "1.d. I-94 Arrival/Departure Record Number",
      required: true,
    },
    {
      id: "part1.firstArrivalInUS",
      type: "radio",
      label: "1.e. Is this your first arrival in the U.S.?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.expirationDateOfCurrentStatus",
      type: "date",
      label: "1.f. Expiration Date of Current Status",
      required: true,
    },
    {
      id: "part1.alienCrewmanVisaIssued",
      type: "radio",
      label: "1.g. Was an alien crewman visa issued?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.lastArrivalAsSeamanOrCrewman",
      type: "radio",
      label: "1.h. Was your last arrival as a seaman or crewman?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part1.usUnitType",
      type: "radio",
      label: "1.i. U.S. Unit Type",
      required: true,
      options: [
        { value: "STE", label: "Suite" },
        { value: "FLR", label: "Floor" },
        { value: "APT", label: "Apartment" }
      ]
    },
    {
      id: "part1.usAptSteFlrNumber",
      type: "text",
      label: "1.j. U.S. Apt/Ste/Flr Number",
      required: true,
    },
    {
      id: "part1.cityOrTown",
      type: "text",
      label: "1.k. City or Town",
      required: true,
    },
    {
      id: "part1.state",
      type: "text",
      label: "1.l. State",
      required: true,
    },
    {
      id: "part1.zipCode",
      type: "text",
      label: "1.m. ZIP Code",
      required: true,
    },
    {
      id: "part1.streetNumberAndName",
      type: "text",
      label: "1.n. Street Number and Name",
      required: true,
    },
    {
      id: "part1.inCareOfName",
      type: "text",
      label: "1.o. In Care Of Name",
      required: false,
    },
    {
      id: "part1.dateFirstResidedAtAddress",
      type: "date",
      label: "1.p. Date First Resided at Address",
      required: true,
    },
    {
      id: "part1.currentMailingAddress",
      type: "radio",
      label: "1.q. Is this your current mailing address?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.currentMailingUnitType",
      type: "radio",
      label: "1.r. Current Mailing Unit Type",
      required: true,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "STE", label: "Suite" }
      ]
    }
  ]
},
{
  id: "part1-current-mailing-address",
  title: "Part 1: Current Mailing Address",
  questions: [
    {
      id: "part1.currentMailingAddressFloor",
      type: "radio",
      label: "Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part1.currentMailingAddressAptSteFlrNumber",
      type: "text",
      label: "Apartment, Suite, or Floor Number",
      required: false,
    },
    {
      id: "part1.currentMailingAddressCityOrTown",
      type: "text",
      label: "City or Town",
      required: true,
    },
    {
      id: "part1.currentMailingAddressState",
      type: "text",
      label: "State",
      required: true,
    },
    {
      id: "part1.currentMailingAddressZipCode",
      type: "text",
      label: "ZIP Code",
      required: true,
    },
    {
      id: "part1.currentMailingAddressStreetNumberName",
      type: "text",
      label: "Street Number and Name",
      required: true,
    },
    {
      id: "part1.currentMailingAddressInCareOfName",
      type: "text",
      label: "In Care Of Name",
      required: false,
    },
  ],
},
{
  id: "part1-immigration-status",
  title: "Part 1: Immigration Status",
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
  id: "part1-alien-registration",
  title: "Part 1: Alien Registration",
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
  id: "part1-residence-history",
  title: "Part 1: Residence History",
  questions: [
    {
      id: "part1.residedAtCurrentAddress5Years",
      type: "radio",
      label: "Have you resided at your current address for the last 5 years?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" },
        { value: "N", label: "No" }
      ]
    },
  ],
},
{
  id: "part1-prior-address",
  title: "Part 1: Prior Address",
  questions: [
    {
      id: "part1.priorAddressInCareOfName",
      type: "text",
      label: "In Care Of Name",
      required: false,
    },
    {
      id: "part1.priorAddressStreetName",
      type: "text",
      label: "Street Name",
      required: true,
    },
    {
      id: "part1.priorAddressUnitApartment",
      type: "radio",
      label: "Apartment",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part1.priorAddressUnitSuite",
      type: "radio",
      label: "Suite",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part1.priorAddressUnitFloor",
      type: "radio",
      label: "Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part1.priorAddressNumber",
      type: "text",
      label: "Street Number",
      required: true,
    },
    {
      id: "part1.priorAddressCity",
      type: "text",
      label: "City",
      required: true,
    },
    {
      id: "part1.priorAddressState",
      type: "text",
      label: "State",
      required: true,
    },
  ],
},
{
  id: "part1-recent-address",
  title: "Part 1: Most Recent Address",
  questions: [
    {
      id: "part1.mostRecentStreetName",
      type: "text",
      label: "18.a. Street Name",
      required: true,
    },
    {
      id: "part1.mostRecentUnit",
      type: "radio",
      label: "18.b. Unit Type",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "STE", label: "Suite" },
        { value: "FLR", label: "Floor" }
      ]
    },
    {
      id: "part1.mostRecentNumber",
      type: "text",
      label: "18.c. Unit Number",
      required: false,
    },
    {
      id: "part1.mostRecentCity",
      type: "text",
      label: "18.d. City or Town",
      required: true,
    },
    {
      id: "part1.mostRecentState",
      type: "text",
      label: "18.e. State",
      required: true,
    },
    {
      id: "part1.mostRecentZipCode",
      type: "text",
      label: "18.f. ZIP Code",
      required: true,
    },
    {
      id: "part1.mostRecentProvince",
      type: "text",
      label: "18.g. Province",
      required: false,
    },
    {
      id: "part1.mostRecentPostalCode",
      type: "text",
      label: "18.h. Postal Code",
      required: false,
    },
    {
      id: "part1.mostRecentCountry",
      type: "text",
      label: "18.i. Country",
      required: true,
    },
    {
      id: "part1.mostRecentDateFrom",
      type: "date",
      label: "18.j. Date From",
      required: true,
    },
    {
      id: "part1.mostRecentDateTo",
      type: "date",
      label: "18.k. Date To",
      required: false,
    }
  ],
},
{
  id: "part1-social-security",
  title: "Part 1: Social Security Information",
  questions: [
    {
      id: "part1.socialSecurityCardIssued",
      type: "radio",
      label: "19. Has a Social Security card been issued to you?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part1.socialSecurityNumber",
      type: "ssn",
      label: "19.a. Social Security Number",
      required: false,
    },
    {
      id: "part1.ssaIssueCard",
      type: "radio",
      label: "19.b. Do you want the SSA to issue you a Social Security card?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part1.consentForDisclosure",
      type: "radio",
      label: "19.c. Consent for Disclosure",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ],
},
{
  id: "part2-immigration-information",
  title: "Part 2: Immigration Information",
  questions: [
    {
      id: "part2.alienNumber",
      type: "text",
      label: "1. Alien Registration Number (A-Number)",
      required: true,
    },
    {
      id: "part2.adjustmentOfStatusWithEOIR",
      type: "radio",
      label: "2. Are you applying for adjustment of status with the EOIR?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part2.receiptNumber",
      type: "text",
      label: "3. Receipt Number",
      required: false,
    },
    {
      id: "part2.priorityDate",
      type: "date",
      label: "4. Priority Date",
      required: false,
    }
  ],
},
{
  id: "part2-principal-applicant-info",
  title: "Part 2: Principal Applicant Information",
  questions: [
    {
      id: "part2.principalApplicantFamilyName",
      type: "text",
      label: "1.a. Principal Applicant's Family Name (Last Name)",
      required: true,
    },
    {
      id: "part2.principalApplicantGivenName",
      type: "text",
      label: "1.b. Principal Applicant's Given Name (First Name)",
      required: true,
    },
    {
      id: "part2.principalApplicantMiddleName",
      type: "text",
      label: "1.c. Principal Applicant's Middle Name",
      required: false,
    },
    {
      id: "part2.dateOfBirth",
      type: "date",
      label: "2. Date of Birth",
      required: true,
    },
    {
      id: "part2.alienNumber",
      type: "text",
      label: "3. Alien Registration Number (A-Number)",
      required: false,
    },
    {
      id: "part2.applicationType",
      type: "radio",
      label: "4. Application Type",
      required: true,
      options: [
        { value: "1fA", label: "Type 1fA" },
        { value: "1fB", label: "Type 1fB" }
      ]
    },
    {
      id: "part2.familyBasedCategory",
      type: "radio",
      label: "5. Family-Based Category",
      required: false,
      options: [
        { value: "3a0", label: "Category 3a0" },
        { value: "3a1", label: "Category 3a1" },
        { value: "3a2", label: "Category 3a2" },
        { value: "3a3", label: "Category 3a3" },
        { value: "3a4", label: "Category 3a4" },
        { value: "3a5", label: "Category 3a5" },
        { value: "3a6", label: "Category 3a6" },
        { value: "3a7", label: "Category 3a7" },
        { value: "3a8", label: "Category 3a8" },
        { value: "3a9", label: "Category 3a9" },
        { value: "3a10", label: "Category 3a10" },
        { value: "3a11", label: "Category 3a11" },
        { value: "3a12", label: "Category 3a12" },
        { value: "3a13", label: "Category 3a13" }
      ]
    },
    {
      id: "part2.alienNumberReadOnly",
      type: "text",
      label: "6. Alien Number (Read Only)",
      required: false,
    },
    {
      id: "part2.employmentBasedCategory",
      type: "radio",
      label: "7. Employment-Based Category",
      required: false,
      options: [
        { value: "3b0", label: "Category 3b0" },
        { value: "3b1", label: "Category 3b1" }
      ]
    }
  ],
},
{
  id: "part2-employment-based",
  title: "Part 2: Employment-Based Preferences",
  questions: [
    {
      id: "part2.employmentBasedOutstandingProfessor",
      type: "radio",
      label: "3.b.2. Are you applying as an Outstanding Professor or Researcher?",
      required: true,
      options: [
        { value: "3b2", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedMultinationalExecutive",
      type: "radio",
      label: "3.b.3. Are you applying as a Multinational Executive or Manager?",
      required: true,
      options: [
        { value: "3b3", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedAdvancedDegree",
      type: "radio",
      label: "3.b.4. Are you applying as a Member of Professions Holding an Advanced Degree or an Alien of Exceptional Ability?",
      required: true,
      options: [
        { value: "3b4", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedProfessional",
      type: "radio",
      label: "3.b.5. Are you applying as a Professional?",
      required: true,
      options: [
        { value: "3b5", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedSkilledWorker",
      type: "radio",
      label: "3.b.6. Are you applying as a Skilled Worker?",
      required: true,
      options: [
        { value: "3b6", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedOtherWorker",
      type: "radio",
      label: "3.b.7. Are you applying as an Other Worker?",
      required: true,
      options: [
        { value: "3b7", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.employmentBasedNationalInterestWaiver",
      type: "radio",
      label: "3.b.8. Are you applying for a National Interest Waiver?",
      required: true,
      options: [
        { value: "3b8", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    }
  ]
},
{
  id: "part2-relative-filed-i140",
  title: "Part 2: Relative Filed I-140",
  questions: [
    {
      id: "part2.relativeFiledI140",
      type: "radio",
      label: "Has a relative filed Form I-140 for you?",
      required: true,
      options: [
        { value: "NA", label: "Not Applicable" },
        { value: "Off", label: "No" },
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part2-relative-type",
  title: "Part 2: Relative Type",
  questions: [
    {
      id: "part2.relativeType",
      type: "radio",
      label: "What is the type of relative?",
      required: true,
      options: [
        { value: "1", label: "Type 1" },
        { value: "Off", label: "None" },
        { value: "2", label: "Type 2" }
      ]
    }
  ]
},
{
  id: "part2-special-immigrant",
  title: "Part 2: Special Immigrant",
  questions: [
    {
      id: "part2.specialImmigrantInternationalBroadcaster",
      type: "radio",
      label: "3.c. Special Immigrant - International Broadcaster",
      required: true,
      options: [
        { value: "3c2", label: "International Broadcaster" }
      ]
    },
    {
      id: "part2.specialImmigrantPanamaCanalZoneEmployees",
      type: "radio",
      label: "3.c. Special Immigrant - Panama Canal Zone Employees",
      required: true,
      options: [
        { value: "3c5", label: "Panama Canal Zone Employees" }
      ]
    },
    {
      id: "part2.specialImmigrantUSArmedForcesMembers",
      type: "radio",
      label: "3.c. Special Immigrant - U.S. Armed Forces Members",
      required: true,
      options: [
        { value: "3c4", label: "U.S. Armed Forces Members" }
      ]
    },
    {
      id: "part2.specialImmigrantCertainPhysicians",
      type: "radio",
      label: "3.c. Special Immigrant - Certain Physicians",
      required: true,
      options: [
        { value: "3c6", label: "Certain Physicians" }
      ]
    },
    {
      id: "part2.specialImmigrantUSGovernmentEmployeeAbroad",
      type: "radio",
      label: "3.c. Special Immigrant - U.S. Government Employee Abroad",
      required: true,
      options: [
        { value: "3c7", label: "U.S. Government Employee Abroad" }
      ]
    },
    {
      id: "part2.specialImmigrantReligiousWorkerOther",
      type: "radio",
      label: "3.c. Special Immigrant - Religious Worker (Other)",
      required: true,
      options: [
        { value: "3c9", label: "Religious Worker (Other)" }
      ]
    },
    {
      id: "part2.specialImmigrantReligiousWorkerMinister",
      type: "radio",
      label: "3.c. Special Immigrant - Religious Worker (Minister)",
      required: true,
      options: [
        { value: "3c8", label: "Religious Worker (Minister)" }
      ]
    }
  ]
},
{
  id: "part2-asylee-refugee",
  title: "Part 2: Asylee or Refugee",
  questions: [
    {
      id: "part2.asyleeRefugeeAsylumStatus",
      type: "radio",
      label: "3.d. Asylee or Refugee - Asylum Status",
      required: true,
      options: [
        { value: "3d0", label: "Asylum Status" }
      ]
    },
    {
      id: "part2.asyleeRefugeeRefugeeStatus",
      type: "radio",
      label: "3.d. Asylee or Refugee - Refugee Status",
      required: true,
      options: [
        { value: "3d1", label: "Refugee Status" }
      ]
    }
  ]
},
{
  id: "part2-human-trafficking",
  title: "Part 2: Human Trafficking Victim",
  questions: [
    {
      id: "part2.humanTraffickingVictim",
      type: "radio",
      label: "3.e. Human Trafficking Victim",
      required: true,
      options: [
        { value: "3e0", label: "Human Trafficking Victim" }
      ]
    },
    {
      id: "part2.crimeVictim",
      type: "text",
      label: "3.e. Crime Victim",
      required: false
    }
  ]
},
{
  id: "part2-alien-registration",
  title: "Part 2: Alien Registration",
  questions: [
    {
      id: "part2.alienRegistrationNumber",
      type: "text",
      label: "Alien Registration Number",
      required: true
    }
  ]
},
{
  id: "part2-special-programs",
  title: "Part 2: Special Programs",
  questions: [
    {
      id: "part2.specialProgramsCubanAdjustmentAct",
      type: "radio",
      label: "3.f. Special Programs - Cuban Adjustment Act",
      required: true,
      options: [
        { value: "3f0", label: "Cuban Adjustment Act" }
      ]
    },
    {
      id: "part2.specialProgramsCubanAdjustmentActVictim",
      type: "radio",
      label: "3.f. Special Programs - Cuban Adjustment Act Victim",
      required: true,
      options: [
        { value: "3f2", label: "Cuban Adjustment Act Victim" }
      ]
    },
    {
      id: "part2.specialProgramsHaitianRefugeeImmigrantFairnessAct",
      type: "radio",
      label: "3.f. Special Programs - Haitian Refugee Immigrant Fairness Act",
      required: true,
      options: [
        { value: "3f3", label: "Haitian Refugee Immigrant Fairness Act" }
      ]
    },
    {
      id: "part2.specialProgramsHaitianRefugeeImmigrantFairnessActVictim",
      type: "radio",
      label: "3.f. Special Programs - Haitian Refugee Immigrant Fairness Act Victim",
      required: true,
      options: [
        { value: "3f4", label: "Haitian Refugee Immigrant Fairness Act Victim" }
      ]
    },
    {
      id: "part2.specialProgramsLautenbergParolees",
      type: "radio",
      label: "3.f. Special Programs - Lautenberg Parolees",
      required: true,
      options: [
        { value: "3f5", label: "Lautenberg Parolees" }
      ]
    },
    {
      id: "part2.specialProgramsDiplomatsHighRankingOfficials",
      type: "radio",
      label: "3.f. Special Programs - Diplomats and High Ranking Officials",
      required: true,
      options: [
        { value: "3f6", label: "Diplomats and High Ranking Officials" }
      ]
    },
    {
      id: "part2.specialProgramsVietnamCambodiaLaosNationals",
      type: "text",
      label: "3.f. Special Programs - Vietnam, Cambodia, Laos Nationals",
      required: false
    }
  ]
},
{
  id: "part2-additional-options",
  title: "Part 2: Additional Options",
  questions: [
    {
      id: "part2.additionalOptionsOtherEligibility",
      type: "text",
      label: "3.g. Additional Options - Other Eligibility",
      required: false
    },
    {
      id: "part2.additionalOptionsDiversityVisaProgram",
      type: "radio",
      label: "3.g. Additional Options - Diversity Visa Program",
      required: true,
      options: [
        { value: "3g0", label: "Diversity Visa Program" }
      ]
    },
    {
      id: "part2.additionalOptionsContinuousResidence",
      type: "radio",
      label: "3.g. Additional Options - Continuous Residence",
      required: true,
      options: [
        { value: "3g1", label: "Continuous Residence" }
      ]
    },
    {
      id: "part2.additionalOptionsBornInUSUnderDiplomaticStatus",
      type: "radio",
      label: "3.g. Additional Options - Born in U.S. Under Diplomatic Status",
      required: true,
      options: [
        { value: "3g2", label: "Born in U.S. Under Diplomatic Status" }
      ]
    },
    {
      id: "part2.additionalOptionsSNonimmigrants",
      type: "radio",
      label: "3.g. Additional Options - S Nonimmigrants",
      required: true,
      options: [
        { value: "3g3", label: "S Nonimmigrants" }
      ]
    },
    {
      id: "part2.additionalOptionsOtherEligibilityText",
      type: "text",
      label: "3.g. Additional Options - Other Eligibility Text",
      required: false
    }
  ]
},
{
  id: "part2-eligibility",
  title: "Part 2: Eligibility Information",
  questions: [
    {
      id: "part2.asylumDate",
      type: "date",
      label: "3.d. Date of Asylum",
      required: true,
    },
    {
      id: "part2.refugeeAdmissionDate",
      type: "date",
      label: "3.d. Date of Refugee Admission",
      required: true,
    },
    {
      id: "part2.diversityVisaRankNumber",
      type: "text",
      label: "1.g. Diversity Visa Rank Number",
      required: true,
    },
    {
      id: "part2.amerasianAct",
      type: "radio",
      label: "3.f. Amerasian Act",
      required: true,
      options: [
        { value: "3f8", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.cspaEligibility",
      type: "radio",
      label: "5. CSPA Eligibility",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part2.ina245i",
      type: "radio",
      label: "4. INA 245(i) Eligibility",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part2.alienNumber",
      type: "text",
      label: "Alien Number",
      required: true,
    },
  ],
},
{
  id: "part3-exemption",
  title: "Part 3: Exemption Information",
  questions: [
    {
      id: "part3.exemptionReason",
      type: "radio",
      label: "1. Exemption Reason",
      required: true,
      options: [
        { value: "0", label: "Reason 0" },
        { value: "1", label: "Reason 1" },
        { value: "2", label: "Reason 2" },
        { value: "3", label: "Reason 3" },
        { value: "4", label: "Reason 4" }
      ]
    },
  ],
},
{
  id: "part4-visa",
  title: "Part 4: Visa Information",
  questions: [
    {
      id: "part4.appliedForImmigrantVisa",
      type: "radio",
      label: "1. Have you applied for an immigrant visa?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part4.dateOfDecision",
      type: "date",
      label: "4. Date of Decision",
      required: false,
    },
    {
      id: "part4.embassyCity",
      type: "text",
      label: "Embassy City",
      required: true,
    },
    {
      id: "part4.embassyCountry",
      type: "text",
      label: "Embassy Country",
      required: true,
    },
    {
      id: "part4.previousPermanentResidence",
      type: "radio",
      label: "Previous Permanent Residence",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part4.rescindedLprStatus",
      type: "radio",
      label: "Rescinded LPR Status",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part4.employerOrSchool",
      type: "text",
      label: "Employer or School",
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
  id: "part4-employment-history",
  title: "Part 4: Employment History",
  questions: [
    {
      id: "part4.employmentHistoryEmployerName",
      type: "text",
      label: "7. Employer Name",
      required: true,
    },
    {
      id: "part4.decision",
      type: "radio",
      label: "3. Decision",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part4.employerAddressStreetName",
      type: "text",
      label: "7.a. Street Name",
      required: true,
    },
    {
      id: "part4.employerAddressUnitApartment",
      type: "radio",
      label: "7.b. Unit - Apartment",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.employerAddressUnitSuite",
      type: "radio",
      label: "7.c. Unit - Suite",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.employerAddressUnitFloor",
      type: "radio",
      label: "7.d. Unit - Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.employerAddressUnitNumber",
      type: "text",
      label: "7.e. Unit Number",
      required: false,
    },
    {
      id: "part4.employerAddressCity",
      type: "text",
      label: "7.f. City",
      required: true,
    },
    {
      id: "part4.employerAddressState",
      type: "text",
      label: "7.g. State",
      required: true,
    },
    {
      id: "part4.employerAddressZipCode",
      type: "text",
      label: "7.h. ZIP Code",
      required: true,
    },
    {
      id: "part4.employerAddressPostalCode",
      type: "text",
      label: "7.i. Postal Code",
      required: false,
    },
    {
      id: "part4.employerAddressProvince",
      type: "text",
      label: "7.j. Province",
      required: false,
    },
    {
      id: "part4.employerAddressCountry",
      type: "text",
      label: "7.k. Country",
      required: true,
    },
    {
      id: "part4.employmentDatesFrom",
      type: "date",
      label: "8. Employment Dates From",
      required: true,
    },
    {
      id: "part4.employmentDatesTo",
      type: "date",
      label: "9. Employment Dates To",
      required: true,
    },
    {
      id: "part4.financialSupportSource",
      type: "text",
      label: "10. Source of Financial Support",
      required: false,
    },
    {
      id: "part4.recentOccupation",
      type: "text",
      label: "11. Recent Occupation",
      required: true,
    },
    {
      id: "part4.recentEmployerName",
      type: "text",
      label: "12. Recent Employer Name",
      required: true,
    },
    {
      id: "part4.recentEmployerAddressStreetName",
      type: "text",
      label: "13. Recent Employer Street Name",
      required: true,
    }
  ]
},
{
  id: "part3-exemption-request",
  title: "Part 3: Exemption Request",
  questions: [
    {
      id: "part3.exemptionRequest",
      type: "radio",
      label: "1. Exemption Request",
      required: true,
      options: [
        { value: "5", label: "Option 5" },
        { value: "Off", label: "Off" }
      ]
    }
  ]
},
{
  id: "alien-number",
  title: "Alien Number",
  questions: [
    {
      id: "alienNumber",
      type: "text",
      label: "Alien Number",
      required: true,
    }
  ]
},
{
  id: "part4-employment-history",
  title: "Part 4: Employment History",
  questions: [
    {
      id: "part4.employerCity",
      type: "text",
      label: "8.a. Employer's City",
      required: true,
    },
    {
      id: "part4.employerState",
      type: "text",
      label: "8.b. Employer's State",
      required: true,
    },
    {
      id: "part4.employerZipCode",
      type: "text",
      label: "8.c. Employer's ZIP Code",
      required: true,
    },
    {
      id: "part4.employerPostalCode",
      type: "text",
      label: "8.d. Employer's Postal Code",
      required: false,
    },
    {
      id: "part4.employerProvince",
      type: "text",
      label: "8.e. Employer's Province",
      required: false,
    },
    {
      id: "part4.employerCountry",
      type: "text",
      label: "8.f. Employer's Country",
      required: true,
    },
    {
      id: "part4.employmentDateFrom",
      type: "date",
      label: "8.g. Employment Date From",
      required: true,
    },
    {
      id: "part4.employmentDateTo",
      type: "date",
      label: "8.h. Employment Date To",
      required: true,
    },
    {
      id: "part4.financialSupportSource",
      type: "text",
      label: "8.i. Financial Support Source",
      required: false,
    },
  ],
},
{
  id: "part5-parent-information",
  title: "Part 5: Parent Information",
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
      label: "2.a. Parent 1 Birth Given Name (First Name)",
      required: false,
    },
    {
      id: "part5.parent1DateOfBirth",
      type: "date",
      label: "3. Parent 1 Date of Birth",
      required: true,
    },
    {
      id: "part5.parent1BirthFamilyName",
      type: "text",
      label: "2.b. Parent 1 Birth Family Name (Last Name)",
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
      label: "4. Parent 1 Alien Registration Number (A-Number)",
      required: false,
    },
    {
      id: "part5.parent1CityOfBirth",
      type: "text",
      label: "5. Parent 1 City/Town of Birth",
      required: true,
    },
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
      label: "7. Parent 2 Date of Birth",
      required: true,
    },
    {
      id: "part5.parent2BirthFamilyName",
      type: "text",
      label: "8.a. Parent 2 Birth Family Name (Last Name)",
      required: false,
    },
    {
      id: "part5.parent2BirthGivenName",
      type: "text",
      label: "8.b. Parent 2 Birth Given Name (First Name)",
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
      label: "10. Parent 2's Country of Birth",
      required: true,
    },
    {
      id: "part5.spouseMilitaryStatus",
      type: "radio",
      label: "2. Is your spouse currently serving in the U.S. Armed Forces?",
      required: true,
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" },
        { value: "notApplicable", label: "Not Applicable" }
      ]
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
      id: "part6.maritalStatus",
      type: "radio",
      label: "1. What is your current marital status?",
      required: true,
      options: [
        { value: "divorced", label: "Divorced" },
        { value: "singleNeverMarried", label: "Single, Never Married" },
        { value: "widowed", label: "Widowed" },
        { value: "married", label: "Married" },
        { value: "marriageAnnulled", label: "Marriage Annulled" },
        { value: "legallySeparated", label: "Legally Separated" }
      ]
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
      required: false,
    },
    {
      id: "part6.currentSpouseAlienNumber",
      type: "text",
      label: "5. Current Spouse's Alien Registration Number (A-Number)",
      required: false,
    },
    {
      id: "part6.currentSpouseDateOfBirth",
      type: "date",
      label: "6. Current Spouse's Date of Birth",
      required: true,
    },
    {
      id: "part6.currentSpouseCountryOfBirth",
      type: "text",
      label: "7. Current Spouse's Country of Birth",
      required: true,
    },
    {
      id: "part6.currentSpouseCurrentAddressCountry",
      type: "text",
      label: "8.a. Current Spouse's Current Address - Country",
      required: true,
    },
    {
      id: "part6.currentSpouseCurrentAddressStreet",
      type: "text",
      label: "8.b. Current Spouse's Current Address - Street",
      required: true,
    },
    {
      id: "part6.currentSpouseCurrentAddressCity",
      type: "text",
      label: "8.c. Current Spouse's Current Address - City",
      required: true,
    },
    {
      id: "part6.currentSpouseCurrentAddressPostalCode",
      type: "text",
      label: "8.d. Current Spouse's Current Address - Postal Code",
      required: true,
    },
    {
      id: "part6.currentSpouseCurrentAddressProvince",
      type: "text",
      label: "8.e. Current Spouse's Current Address - Province",
      required: false,
    },
    {
      id: "part6.interpreterMailingAddressUnit",
      type: "select",
      label: "9. Interpreter's Mailing Address Unit",
      required: false,
      options: [
        { value: "apartment", label: "Apartment" },
        { value: "suite", label: "Suite" },
        { value: "floor", label: "Floor" }
      ]
    },
  ],
},
{
  id: "part6-interpreter-mailing-address",
  title: "Part 6: Interpreter Mailing Address",
  questions: [
    {
      id: "part6.interpreterMailingAddressApartmentSuiteFloorNumber",
      type: "text",
      label: "8. Apartment, Suite, or Floor Number",
      required: false,
    },
    {
      id: "part6.interpreterMailingAddressState",
      type: "text",
      label: "8. State",
      required: true,
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
  id: "part6-alien-registration",
  title: "Part 6: Alien Registration",
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
  id: "part6-current-marriage",
  title: "Part 6: Current Marriage Information",
  questions: [
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
      label: "10. Date of Marriage",
      required: true,
    },
    {
      id: "part6.currentSpouseApplyingWithYou",
      type: "radio",
      label: "11. Is your current spouse applying with you?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
  ],
},
{
  id: "part6-prior-spouse",
  title: "Part 6: Prior Spouse Information",
  questions: [
    {
      id: "part6.priorSpouseFamilyName",
      type: "text",
      label: "12. Prior Spouse's Family Name",
      required: true,
    },
    {
      id: "part6.priorSpouseGivenName",
      type: "text",
      label: "12. Prior Spouse's Given Name",
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
      label: "12. Prior Spouse's Date of Birth",
      required: true,
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
      label: "Prior Marriage Date of Marriage",
      required: true,
    },
    {
      id: "part6.priorMarriagePlaceCityOrTown",
      type: "text",
      label: "Prior Marriage Place City or Town",
      required: true,
    },
    {
      id: "part6.priorMarriagePlaceStateOrProvince",
      type: "text",
      label: "Prior Marriage Place State or Province",
      required: true,
    },
    {
      id: "part6.priorMarriagePlaceCountry",
      type: "text",
      label: "Prior Marriage Place Country",
      required: true,
    },
    {
      id: "part6.priorMarriageEndPlaceCityOrTown",
      type: "text",
      label: "Prior Marriage End Place City or Town",
      required: true,
    },
    {
      id: "part6.priorMarriageEndPlaceStateOrProvince",
      type: "text",
      label: "Prior Marriage End Place State or Province",
      required: true,
    },
    {
      id: "part6.priorMarriageEndPlaceCountry",
      type: "text",
      label: "Prior Marriage End Place Country",
      required: true,
    },
    {
      id: "part6.priorMarriageEndDate",
      type: "date",
      label: "Prior Marriage End Date",
      required: true,
    },
    {
      id: "part6.priorMarriageEndReason",
      type: "select",
      label: "Reason for Prior Marriage Ending",
      required: true,
      options: [
        { value: "3", label: "Divorce" }
      ]
    },
  ],
},
{
  id: "part6-marriage-info",
  title: "Part 6: Marriage Information",
  questions: [
    {
      id: "part6.howMarriageEnded",
      type: "radio",
      label: "19. How did your marriage end?",
      required: true,
      options: [
        { value: "annulled", label: "Annulled" },
        { value: "other", label: "Other" },
        { value: "divorced", label: "Divorced" }
      ]
    },
    {
      id: "part6.howMarriageEndedOtherExplanation",
      type: "text",
      label: "19.a. If 'Other', please explain",
      required: false
    }
  ]
},
{
  id: "part6-alien-number",
  title: "Part 6: Alien Number",
  questions: [
    {
      id: "alienNumber",
      type: "text",
      label: "Alien Registration Number (A-Number)",
      required: true
    }
  ]
},
{
  id: "part7-children-info",
  title: "Part 7: Information About Your Children",
  questions: [
    {
      id: "part7.totalChildren",
      type: "text",
      label: "1. Total Number of Children",
      required: true
    },
    {
      id: "part7.child1.familyName",
      type: "text",
      label: "2.a. Child 1 - Family Name (Last Name)",
      required: true
    },
    {
      id: "part7.child1.givenName",
      type: "text",
      label: "2.b. Child 1 - Given Name (First Name)",
      required: true
    },
    {
      id: "part7.child1.middleName",
      type: "text",
      label: "2.c. Child 1 - Middle Name",
      required: false
    },
    {
      id: "part7.child1.alienNumber",
      type: "text",
      label: "2.d. Child 1 - Alien Registration Number (A-Number)",
      required: false
    },
    {
      id: "part7.child1.dateOfBirth",
      type: "text",
      label: "2.e. Child 1 - Date of Birth",
      required: true
    },
    {
      id: "part7.child1.countryOfBirth",
      type: "text",
      label: "2.f. Child 1 - Country of Birth",
      required: true
    },
    {
      id: "part7.child1.applyingNow",
      type: "radio",
      label: "2.g. Is Child 1 applying with you?",
      required: true,
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" }
      ]
    },
    {
      id: "part7.child1.relationship",
      type: "text",
      label: "2.h. Child 1 - Relationship to You",
      required: true
    },
    {
      id: "part7.child2.familyName",
      type: "text",
      label: "3.a. Child 2 - Family Name (Last Name)",
      required: false
    },
    {
      id: "part7.child2.givenName",
      type: "text",
      label: "3.b. Child 2 - Given Name (First Name)",
      required: false
    },
    {
      id: "part7.child2.middleName",
      type: "text",
      label: "3.c. Child 2 - Middle Name",
      required: false
    },
    {
      id: "part7.child2.alienNumber",
      type: "text",
      label: "3.d. Child 2 - Alien Registration Number (A-Number)",
      required: false
    },
    {
      id: "part7.child2.dateOfBirth",
      type: "text",
      label: "3.e. Child 2 - Date of Birth",
      required: false
    },
    {
      id: "part7.child2.countryOfBirth",
      type: "text",
      label: "3.f. Child 2 - Country of Birth",
      required: false
    },
    {
      id: "part7.child2.applyingNow",
      type: "radio",
      label: "3.g. Is Child 2 applying with you?",
      required: false,
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" }
      ]
    },
    {
      id: "part7.child2.relationship",
      type: "text",
      label: "3.h. Child 2 - Relationship to You",
      required: false
    }
  ]
},
{
  id: "part8-ethnicity",
  title: "Part 8: Ethnicity",
  questions: [
    {
      id: "part8.ethnicity",
      type: "radio",
      label: "1. Ethnicity",
      required: true,
      options: [
        { value: "H", label: "Hispanic or Latino" },
        { value: "N", label: "Not Hispanic or Latino" }
      ]
    },
  ],
},
{
  id: "part8-race",
  title: "Part 8: Race",
  questions: [
    {
      id: "part8.race",
      type: "checkbox",
      label: "2. Race (Select all that apply)",
      required: false,
      options: [
        { value: "AS", label: "Asian" },
        { value: "WH", label: "White" },
        { value: "BL", label: "Black or African American" },
        { value: "AI", label: "American Indian or Alaska Native" },
        { value: "HW", label: "Native Hawaiian or Other Pacific Islander" }
      ]
    },
  ],
},
{
  id: "part8-physical-characteristics",
  title: "Part 8: Physical Characteristics",
  questions: [
    {
      id: "part8.heightFeet",
      type: "dropdown",
      label: "3.a. Height - Feet",
      required: true,
    },
    {
      id: "part8.heightInches",
      type: "text",
      label: "3.b. Height - Inches",
      required: true,
    },
    {
      id: "part8.weightFirstDigit",
      type: "text",
      label: "4.a. Weight - First Digit",
      required: true,
    },
    {
      id: "part8.weightSecondDigit",
      type: "text",
      label: "4.b. Weight - Second Digit",
      required: true,
    },
    {
      id: "part8.weightThirdDigit",
      type: "checkbox",
      label: "4.c. Weight - Third Digit",
      required: false,
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
        { value: "UN", label: "Unknown" }
      ]
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
        { value: "BR", label: "Brown" }
      ]
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
        { value: "GR", label: "Gray" },
        { value: "RD", label: "Red" },
        { value: "SA", label: "Sandy" },
        { value: "WH", label: "White" },
        { value: "OT", label: "Unknown" }
      ]
    },
  ],
},
{
  id: "part9-organization-membership",
  title: "Part 9: Organization Membership",
  questions: [
    {
      id: "part9.organizationMembership",
      type: "radio",
      label: "1. Are you a member of any organization?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
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
      label: "2. Name of Organization 1",
      required: false,
    },
    {
      id: "part9.organization1City",
      type: "text",
      label: "3.a. City",
      required: false,
    },
    {
      id: "part9.organization1State",
      type: "text",
      label: "3.b. State",
      required: false,
    },
    {
      id: "part9.organization1Country",
      type: "text",
      label: "3.c. Country",
      required: false,
    },
    {
      id: "part9.organization1Nature",
      type: "text",
      label: "4.a. Nature of Organization",
      required: false,
    },
    {
      id: "part9.organization1Involvement",
      type: "text",
      label: "4.b. Your Involvement",
      required: false,
    },
    {
      id: "part9.organization1DateFrom",
      type: "text",
      label: "5.a. Date From",
      required: false,
    },
    {
      id: "part9.organization1DateTo",
      type: "text",
      label: "5.b. Date To",
      required: false,
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
      label: "6. Name of Organization 2",
      required: false,
    },
    {
      id: "part9.organization2City",
      type: "text",
      label: "7.a. City",
      required: false,
    },
    {
      id: "part9.organization2State",
      type: "text",
      label: "7.b. State",
      required: false,
    },
    {
      id: "part9.organization2Country",
      type: "text",
      label: "7.c. Country",
      required: false,
    },
    {
      id: "part9.organization2Nature",
      type: "text",
      label: "8.a. Nature of Organization",
      required: false,
    },
    {
      id: "part9.organization2Involvement",
      type: "text",
      label: "8.b. Your Involvement",
      required: false,
    },
    {
      id: "part9.organization2DateFrom",
      type: "text",
      label: "9.a. Date From",
      required: false,
    },
    {
      id: "part9.organization2DateTo",
      type: "text",
      label: "9.b. Date To",
      required: false,
    },
  ],
},
{
  id: "part9-denied-admission",
  title: "Part 9: Admission Details",
  questions: [
    {
      id: "part9.deniedAdmission",
      type: "radio",
      label: "10. Have you ever been denied admission?",
      required: true,
      options: [
        { value: "N", label: "No" }
      ]
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
      label: "Alien Registration Number",
      required: true,
    },
  ],
},
{
  id: "part9-admission",
  title: "Part 9: Admission Information",
  questions: [
    {
      id: "part9.deniedAdmission",
      type: "radio",
      label: "10. Have you ever been denied admission to the United States?",
      required: true,
      options: [
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.deniedVisa",
      type: "radio",
      label: "11. Have you ever been denied a visa to the United States?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.violationOfStatus",
      type: "radio",
      label: "13. Have you ever violated the terms of your nonimmigrant status?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.removalProceedings",
      type: "radio",
      label: "18. Are you currently in removal proceedings?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.finalOrder",
      type: "radio",
      label: "19. Have you ever been ordered removed from the United States?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.unauthorizedWork",
      type: "radio",
      label: "12. Have you ever worked in the United States without authorization?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.reinstatedOrder",
      type: "radio",
      label: "20. Have you ever had a removal order reinstated?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.voluntaryDeparture",
      type: "radio",
      label: "17. Have you ever been granted voluntary departure by an immigration judge?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.appliedForRelief",
      type: "radio",
      label: "23. Have you ever applied for any kind of relief from removal?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.jVisaRequirement",
      type: "radio",
      label: "Have you ever been subject to the J visa two-year foreign residence requirement?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.compliedWithRequirement",
      type: "radio",
      label: "Have you complied with the J visa two-year foreign residence requirement?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.grantedWaiver",
      type: "radio",
      label: "Have you been granted a waiver of the J visa two-year foreign residence requirement?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.criminalActs",
      type: "radio",
      label: "Have you ever committed any crimes or offenses?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-criminal-history",
  title: "Part 9: Criminal History",
  questions: [
    {
      id: "part9.alienNumber",
      type: "text",
      label: "Alien Number",
      required: true,
    },
    {
      id: "part9.crimeCommitted",
      type: "radio",
      label: "Have you ever committed a crime?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.pledGuilty",
      type: "radio",
      label: "Have you ever pled guilty to a crime?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.punishedByJudge",
      type: "radio",
      label: "Have you ever been punished by a judge?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.controlledSubstanceViolation",
      type: "radio",
      label: "Have you ever violated any controlled substance laws?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.traffickingControlledSubstances",
      type: "radio",
      label: "Have you ever been involved in trafficking controlled substances?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.spouseTraffickingBenefit",
      type: "radio",
      label: "Has your spouse ever benefited from trafficking?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.knowledgeOfBenefit",
      type: "radio",
      label: "Were you aware of any benefits from trafficking?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.engagedInProstitution",
      type: "radio",
      label: "Have you ever engaged in prostitution?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.procuringProstitutes",
      type: "radio",
      label: "Have you ever procured prostitutes?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.receivedProstitutionProceeds",
      type: "radio",
      label: "Have you ever received proceeds from prostitution?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.illegalGamblingIntent",
      type: "radio",
      label: "Have you ever intended to engage in illegal gambling?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.exercisedImmunity",
      type: "radio",
      label: "Have you ever exercised immunity from prosecution?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-foreign-government-official",
  title: "Part 9: Foreign Government Official",
  questions: [
    {
      id: "part9.servedAsForeignGovernmentOfficial",
      type: "radio",
      label: "1. Have you ever served as a foreign government official?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-sex-trafficking",
  title: "Part 9: Sex Trafficking",
  questions: [
    {
      id: "part9.inducedSexTrafficking",
      type: "radio",
      label: "2. Have you ever induced someone into sex trafficking?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-involuntary-servitude",
  title: "Part 9: Involuntary Servitude",
  questions: [
    {
      id: "part9.traffickedPersonInvoluntaryServitude",
      type: "radio",
      label: "3. Have you ever trafficked a person for involuntary servitude?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-religious-freedoms",
  title: "Part 9: Violations of Religious Freedoms",
  questions: [
    {
      id: "part9.violationsOfReligiousFreedoms",
      type: "radio",
      label: "4. Have you ever violated religious freedoms?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-alien-registration",
  title: "Part 9: Alien Registration",
  questions: [
    {
      id: "part9.alienRegistrationNumber",
      type: "text",
      label: "5. Alien Registration Number",
      required: false
    }
  ]
},
{
  id: "part9-aided-trafficking",
  title: "Part 9: Aided Trafficking",
  questions: [
    {
      id: "part9.aidedTrafficking",
      type: "radio",
      label: "6. Have you ever aided in trafficking?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-benefits-from-trafficking",
  title: "Part 9: Benefits from Trafficking",
  questions: [
    {
      id: "part9.receivedBenefitsFromTrafficking",
      type: "radio",
      label: "7. Have you ever received benefits from trafficking?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-money-laundering",
  title: "Part 9: Money Laundering",
  questions: [
    {
      id: "part9.engagedInMoneyLaundering",
      type: "radio",
      label: "8. Have you ever engaged in money laundering?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-knowledge-of-benefits",
  title: "Part 9: Knowledge of Benefits from Trafficking",
  questions: [
    {
      id: "part9.knowledgeOfBenefitsFromTrafficking",
      type: "radio",
      label: "9. Did you have knowledge of benefits from trafficking?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-espionage",
  title: "Part 9: Espionage",
  questions: [
    {
      id: "part9.engageInEspionage",
      type: "radio",
      label: "10. Have you ever engaged in espionage?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-illegal-export",
  title: "Part 9: Illegal Export",
  questions: [
    {
      id: "part9.engageInIllegalExport",
      type: "radio",
      label: "11. Have you ever engaged in illegal export?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-overthrowing-government",
  title: "Part 9: Overthrowing Government",
  questions: [
    {
      id: "part9.engageInOverthrowingGovernment",
      type: "radio",
      label: "12. Have you ever engaged in overthrowing a government?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-military-training",
  title: "Part 9: Military Training",
  questions: [
    {
      id: "part9.receivedMilitaryTraining",
      type: "radio",
      label: "13. Have you ever received military training?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-unlawful-activity",
  title: "Part 9: Unlawful Activities",
  questions: [
    {
      id: "part9.engageUnlawfulActivity",
      type: "radio",
      label: "1. Have you ever engaged in any unlawful activity?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.committedKidnapping",
      type: "radio",
      label: "2. Have you ever committed kidnapping?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.usedWeapon",
      type: "radio",
      label: "3. Have you ever used a weapon unlawfully?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.threatenedActivities",
      type: "radio",
      label: "4. Have you ever threatened any unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.recruitedMembers",
      type: "radio",
      label: "5. Have you ever recruited members for unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.providedSupport",
      type: "radio",
      label: "6. Have you ever provided support for unlawful activities?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.incitedActivities",
      type: "radio",
      label: "7. Have you ever incited unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.participatedGroup",
      type: "radio",
      label: "8. Have you ever participated in a group involved in unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.intendEngageActivities",
      type: "radio",
      label: "9. Do you intend to engage in unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.providedSupportIndividual",
      type: "radio",
      label: "10. Have you ever provided support to an individual involved in unlawful activities?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.endangerUS",
      type: "radio",
      label: "11. Have you ever engaged in activities that endanger the United States?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.alienNumber",
      type: "text",
      label: "12. Alien Registration Number (A-Number)",
      required: true,
    },
    {
      id: "part9.spouseChildActivities",
      type: "radio",
      label: "13. Have your spouse or children engaged in unlawful activities?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-weapons",
  title: "Part 9: Security and Background Information - Weapons",
  questions: [
    {
      id: "part9.securityWeapons",
      type: "radio",
      label: "Have you ever used any weapon against another person?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-detention",
  title: "Part 9: Security and Background Information - Detention",
  questions: [
    {
      id: "part9.securityDetention",
      type: "radio",
      label: "Have you ever been detained by any law enforcement officer?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-group-weapons",
  title: "Part 9: Security and Background Information - Group Weapons",
  questions: [
    {
      id: "part9.securityGroupWeapons",
      type: "radio",
      label: "Have you ever been a member of a group that used weapons?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-military-police",
  title: "Part 9: Security and Background Information - Military or Police",
  questions: [
    {
      id: "part9.securityMilitaryPolice",
      type: "radio",
      label: "Have you ever served in the military or police?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-communist-party",
  title: "Part 9: Security and Background Information - Communist Party",
  questions: [
    {
      id: "part9.securityCommunistParty",
      type: "radio",
      label: "Have you ever been a member of the Communist Party?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-armed-group",
  title: "Part 9: Security and Background Information - Armed Group",
  questions: [
    {
      id: "part9.securityArmedGroup",
      type: "radio",
      label: "Have you ever been a member of an armed group?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-child-hostilities",
  title: "Part 9: Security and Background Information - Child Hostilities",
  questions: [
    {
      id: "part9.securityChildHostilities",
      type: "radio",
      label: "Have you ever recruited or used child soldiers?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-injury",
  title: "Part 9: Security and Background Information - Injury",
  questions: [
    {
      id: "part9.securityInjury",
      type: "radio",
      label: "Have you ever caused injury to another person?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-child-recruitment",
  title: "Part 9: Security and Background Information - Child Recruitment",
  questions: [
    {
      id: "part9.securityChildRecruitment",
      type: "radio",
      label: "Have you ever recruited children for military service?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-security-torture",
  title: "Part 9: Security and Background Information - Torture",
  questions: [
    {
      id: "part9.securityTorture",
      type: "radio",
      label: "Have you ever engaged in torture?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-genocide",
  title: "Part 9: Security and Background Information - Genocide",
  questions: [
    {
      id: "part9.securityGenocide",
      type: "radio",
      label: "Have you ever participated in genocide?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-security-killing",
  title: "Part 9: Security and Background Information - Killing",
  questions: [
    {
      id: "part9.securityKilling",
      type: "radio",
      label: "Have you ever killed another person?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-alien-number",
  title: "Part 9: Alien Number",
  questions: [
    {
      id: "part9.alienNumber",
      type: "text",
      label: "Alien Registration Number (A-Number)",
      required: true,
    }
  ]
},
{
  id: "part9-public-charge-exemption",
  title: "Part 9: Public Charge Exemption",
  questions: [
    {
      id: "part9.publicChargeExemption",
      type: "radio",
      label: "1. Public Charge Exemption",
      required: true,
      options: [
        { value: "0", label: "Exemption 0" },
        { value: "1", label: "Exemption 1" },
        { value: "2", label: "Exemption 2" },
        { value: "3", label: "Exemption 3" },
        { value: "4", label: "Exemption 4" },
        { value: "5", label: "Exemption 5" },
        { value: "6", label: "Exemption 6" },
        { value: "7", label: "Exemption 7" },
        { value: "8", label: "Exemption 8" },
        { value: "9", label: "Exemption 9" },
        { value: "10", label: "Exemption 10" },
        { value: "11", label: "Exemption 11" },
        { value: "12", label: "Exemption 12" },
        { value: "13", label: "Exemption 13" },
        { value: "14", label: "Exemption 14" },
        { value: "15", label: "Exemption 15" },
        { value: "16", label: "Exemption 16" },
        { value: "17", label: "Exemption 17" },
        { value: "18", label: "Exemption 18" },
        { value: "19", label: "Exemption 19" },
        { value: "20", label: "Exemption 20" }
      ]
    }
  ]
},
{
  id: "part9-alien-registration-number",
  title: "Part 9: Alien Registration Number",
  questions: [
    {
      id: "alienRegistrationNumber",
      type: "text",
      label: "2. Alien Registration Number",
      required: true
    }
  ]
},
{
  id: "part9-household-size",
  title: "Part 9: Household Size",
  questions: [
    {
      id: "part9.householdSize",
      type: "text",
      label: "3. Household Size",
      required: true
    }
  ]
},
{
  id: "part9-annual-household-income",
  title: "Part 9: Annual Household Income",
  questions: [
    {
      id: "part9.annualHouseholdIncome",
      type: "radio",
      label: "4. Annual Household Income",
      required: true,
      options: [
        { value: "A", label: "Income A" }
      ]
    }
  ]
},
{
  id: "part9-annual-household-income",
  title: "Part 9: Annual Household Income",
  questions: [
    {
      id: "part9.annualHouseholdIncome",
      type: "radio",
      label: "53. Annual Household Income",
      required: true,
      options: [
        { value: "27001-52000", label: "$27,001 - $52,000" },
        { value: "52001-85000", label: "$52,001 - $85,000" },
        { value: "85001-141000", label: "$85,001 - $141,000" },
        { value: "over141001", label: "Over $141,001" }
      ]
    },
  ],
},
{
  id: "part9-household-assets",
  title: "Part 9: Household Assets",
  questions: [
    {
      id: "part9.householdAssets",
      type: "radio",
      label: "59. Household Assets",
      required: true,
      options: [
        { value: "0-18400", label: "$0 - $18,400" },
        { value: "18401-136000", label: "$18,401 - $136,000" },
        { value: "136001-321400", label: "$136,001 - $321,400" },
        { value: "321401-707100", label: "$321,401 - $707,100" },
        { value: "over707100", label: "Over $707,100" }
      ]
    },
  ],
},
{
  id: "part9-household-liabilities",
  title: "Part 9: Household Liabilities",
  questions: [
    {
      id: "part9.householdLiabilities",
      type: "radio",
      label: "60. Household Liabilities",
      required: true,
      options: [
        { value: "0", label: "$0" },
        { value: "1-10100", label: "$1 - $10,100" },
        { value: "10101-57700", label: "$10,101 - $57,700" },
        { value: "57701-186800", label: "$57,701 - $186,800" },
        { value: "over186800", label: "Over $186,800" }
      ]
    },
  ],
},
{
  id: "part9-public-charge-exemption",
  title: "Part 9: Public Charge Exemption",
  questions: [
    {
      id: "part9.publicChargeExemption",
      type: "radio",
      label: "56. Public Charge Exemption",
      required: true,
      options: [
        { value: "spouseChildParentUSServiceMember", label: "Spouse/Child/Parent of U.S. Service Member" },
        { value: "noExemption", label: "No Exemption" }
      ]
    },
  ],
},
{
  id: "part9-highest-education-level",
  title: "Part 9: Highest Education Level",
  questions: [
    {
      id: "part9.highestEducationLevel",
      type: "radio",
      label: "Highest Education Level",
      required: true,
      options: [
        { value: "lessThanHighSchool", label: "Less than High School" },
        { value: "someCollegeNoDegree", label: "Some College, No Degree" },
        { value: "highSchoolDiploma", label: "High School Diploma" },
        { value: "associatesDegree", label: "Associate's Degree" },
        { value: "bachelorsDegree", label: "Bachelor's Degree" },
        { value: "mastersDegree", label: "Master's Degree" },
        { value: "professionalDegree", label: "Professional Degree" },
        { value: "doctorateDegree", label: "Doctorate Degree" }
      ]
    },
  ],
},
{
  id: "part9-public-charge-exemption",
  title: "Part 9: Public Charge Exemption",
  questions: [
    {
      id: "part9.publicChargeExemption",
      type: "radio",
      label: "56. Are you exempt from the public charge ground of inadmissibility?",
      required: true,
      options: [
        { value: "24", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-received-cash-benefits",
  title: "Part 9: Received Cash Benefits",
  questions: [
    {
      id: "part9.receivedCashBenefits",
      type: "radio",
      label: "63. Have you received cash benefits for income maintenance?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-received-institutionalization",
  title: "Part 9: Received Institutionalization",
  questions: [
    {
      id: "part9.receivedInstitutionalization",
      type: "radio",
      label: "64. Have you been institutionalized for long-term care at government expense?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-additional-information",
  title: "Part 9: Additional Information",
  questions: [
    {
      id: "part9.textField1",
      type: "text",
      label: "Additional Information 1",
      required: false
    },
    {
      id: "part9.textField2",
      type: "text",
      label: "Additional Information 2",
      required: false
    },
    {
      id: "part9.textField3",
      type: "text",
      label: "Additional Information 3",
      required: false
    },
    {
      id: "part9.textField4",
      type: "text",
      label: "Additional Information 4",
      required: false
    },
    {
      id: "part9.textField5",
      type: "text",
      label: "Additional Information 5",
      required: false
    },
    {
      id: "part9.textField6",
      type: "text",
      label: "Additional Information 6",
      required: false
    },
    {
      id: "part9.textField7",
      type: "text",
      label: "Additional Information 7",
      required: false
    },
    {
      id: "part9.textField8",
      type: "text",
      label: "Additional Information 8",
      required: false
    }
  ]
},
{
  id: "part9-alien-number",
  title: "Part 9: Alien Number",
  questions: [
    {
      id: "part9.alienNumber",
      type: "text",
      label: "Alien Registration Number (A-Number)",
      required: true
    }
  ]
},
{
  id: "part9-institutionalization-details",
  title: "Part 9: Institutionalization Details",
  questions: [
    {
      id: "part9.institutionNameCityStateRow1",
      type: "text",
      label: "Institution Name, City, and State - Row 1",
      required: false
    },
    {
      id: "part9.institutionNameCityStateRow2",
      type: "text",
      label: "Institution Name, City, and State - Row 2",
      required: false
    },
    {
      id: "part9.institutionNameCityStateRow3",
      type: "text",
      label: "Institution Name, City, and State - Row 3",
      required: false
    },
    {
      id: "part9.institutionNameCityStateRow4",
      type: "text",
      label: "Institution Name, City, and State - Row 4",
      required: false
    },
    {
      id: "part9.reasonForInstitutionalizationRow1",
      type: "text",
      label: "Reason for Institutionalization - Row 1",
      required: false
    },
    {
      id: "part9.reasonForInstitutionalizationRow2",
      type: "text",
      label: "Reason for Institutionalization - Row 2",
      required: false
    },
    {
      id: "part9.reasonForInstitutionalizationRow3",
      type: "text",
      label: "Reason for Institutionalization - Row 3",
      required: false
    },
    {
      id: "part9.reasonForInstitutionalizationRow4",
      type: "text",
      label: "Reason for Institutionalization - Row 4",
      required: false
    },
    {
      id: "part9.institutionDatesRow1",
      type: "text",
      label: "Dates of Institutionalization - Row 1",
      required: false
    },
    {
      id: "part9.institutionDatesRow2",
      type: "text",
      label: "Dates of Institutionalization - Row 2",
      required: false
    },
    {
      id: "part9.institutionDatesRow3",
      type: "text",
      label: "Dates of Institutionalization - Row 3",
      required: false
    }
  ]
},
{
  id: "part9-public-charge",
  title: "Part 9: Public Charge Information",
  questions: [
    {
      id: "part9.publicChargeInstitutionRow4",
      type: "text",
      label: "Institution Name (Row 4)",
      required: true,
    },
    {
      id: "part9.publicChargeInstitutionRow1",
      type: "text",
      label: "Institution Name (Row 1)",
      required: true,
    },
    {
      id: "part9.publicChargeInstitutionRow2",
      type: "text",
      label: "Institution Name (Row 2)",
      required: true,
    },
    {
      id: "part9.publicChargeInstitutionRow3",
      type: "text",
      label: "Institution Name (Row 3)",
      required: true,
    },
    {
      id: "part9.publicChargeInstitutionEndDateRow4",
      type: "date",
      label: "End Date (Row 4)",
      required: true,
    },
    {
      id: "part9.benefitReceivedRow1",
      type: "text",
      label: "Benefit Received (Row 1)",
      required: true,
    },
    {
      id: "part9.benefitReceivedRow2",
      type: "text",
      label: "Benefit Received (Row 2)",
      required: true,
    },
    {
      id: "part9.benefitReceivedRow3",
      type: "text",
      label: "Benefit Received (Row 3)",
      required: true,
    },
    {
      id: "part9.benefitDollarAmountRow1",
      type: "text",
      label: "Benefit Dollar Amount (Row 1)",
      required: true,
    },
    {
      id: "part9.benefitDollarAmountRow2",
      type: "text",
      label: "Benefit Dollar Amount (Row 2)",
      required: true,
    },
    {
      id: "part9.benefitDollarAmountRow3",
      type: "text",
      label: "Benefit Dollar Amount (Row 3)",
      required: true,
    },
    {
      id: "part9.benefitDollarAmountRow4",
      type: "text",
      label: "Benefit Dollar Amount (Row 4)",
      required: true,
    },
    {
      id: "part9.benefitReceivedRow4",
      type: "text",
      label: "Benefit Received (Row 4)",
      required: true,
    },
    {
      id: "part9.benefitStartDateRow1",
      type: "date",
      label: "Benefit Start Date (Row 1)",
      required: true,
    },
    {
      id: "part9.benefitStartDateRow2",
      type: "date",
      label: "Benefit Start Date (Row 2)",
      required: true,
    },
    {
      id: "part9.benefitStartDateRow3",
      type: "date",
      label: "Benefit Start Date (Row 3)",
      required: true,
    },
    {
      id: "part9.benefitStartDateRow4",
      type: "date",
      label: "Benefit Start Date (Row 4)",
      required: true,
    },
    {
      id: "part9.benefitEndDateRow1",
      type: "date",
      label: "Benefit End Date (Row 1)",
      required: true,
    },
    {
      id: "part9.benefitEndDateRow2",
      type: "date",
      label: "Benefit End Date (Row 2)",
      required: true,
    },
    {
      id: "part9.benefitEndDateRow3",
      type: "date",
      label: "Benefit End Date (Row 3)",
      required: true,
    },
    {
      id: "part9.benefitEndDateRow4",
      type: "date",
      label: "Benefit End Date (Row 4)",
      required: true,
    },
    {
      id: "part9.publicChargeYesNoRow1",
      type: "radio",
      label: "Public Charge Question (Row 1)",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.publicChargeYesNoRow2",
      type: "radio",
      label: "Public Charge Question (Row 2)",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-public-charge",
  title: "Part 9: Public Charge",
  questions: [
    {
      id: "part9.publicChargeRow3",
      type: "radio",
      label: "3. Are you a public charge?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.publicChargeRow4",
      type: "radio",
      label: "4. Have you ever been a public charge?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-long-term-institutionalization",
  title: "Part 9: Long Term Institutionalization",
  questions: [
    {
      id: "part9.longTermInstitutionalizationRow1",
      type: "radio",
      label: "1. Have you been institutionalized for long-term care?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.longTermInstitutionalizationRow2",
      type: "radio",
      label: "2. Are you currently institutionalized for long-term care?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.longTermInstitutionalizationRow3",
      type: "radio",
      label: "3. Have you ever been institutionalized for long-term care?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part9.longTermInstitutionalizationRow4",
      type: "radio",
      label: "4. Are you planning to be institutionalized for long-term care?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-removal-proceeding",
  title: "Part 9: Removal Proceeding",
  questions: [
    {
      id: "part9.removalProceeding",
      type: "radio",
      label: "1. Are you currently in removal proceedings?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-fraudulent-documentation",
  title: "Part 9: Fraudulent Documentation",
  questions: [
    {
      id: "part9.fraudulentDocumentation",
      type: "radio",
      label: "1. Have you ever used fraudulent documentation?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-final-order-civil-penalty",
  title: "Part 9: Final Order Civil Penalty",
  questions: [
    {
      id: "part9.finalOrderCivilPenalty",
      type: "radio",
      label: "1. Have you received a final order of civil penalty?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-stowaway",
  title: "Part 9: Stowaway",
  questions: [
    {
      id: "part9.stowaway",
      type: "radio",
      label: "1. Have you ever been a stowaway?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-alien-smuggling",
  title: "Part 9: Alien Smuggling",
  questions: [
    {
      id: "part9.alienSmuggling",
      type: "radio",
      label: "1. Have you ever engaged in alien smuggling?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-false-us-citizen-claim",
  title: "Part 9: False US Citizen Claim",
  questions: [
    {
      id: "part9.falseUSCitizenClaim",
      type: "radio",
      label: "1. Have you ever falsely claimed to be a US citizen?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-misrepresentation",
  title: "Part 9: Misrepresentation",
  questions: [
    {
      id: "part9.misrepresentation",
      type: "radio",
      label: "1. Have you ever misrepresented a material fact to obtain a visa or other immigration benefit?",
      required: true,
      options: [
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-illegal-entries-misrepresentation",
  title: "Part 9: Illegal Entries and Misrepresentation",
  questions: [
    {
      id: "part9.illegalEntriesMisrepresentation",
      type: "radio",
      label: "69. Have you ever entered the U.S. illegally or misrepresented yourself?",
      required: true,
      options: [
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-removal-deportation",
  title: "Part 9: Removal and Deportation",
  questions: [
    {
      id: "part9.removalDeportation",
      type: "radio",
      label: "74. Have you ever been removed or deported from the U.S.?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-unlawful-entry",
  title: "Part 9: Unlawful Entry",
  questions: [
    {
      id: "part9.unlawfulEntry",
      type: "radio",
      label: "75. Have you ever entered the U.S. unlawfully?",
      required: true,
      options: [
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "alien-number",
  title: "Alien Number",
  questions: [
    {
      id: "alienNumber",
      type: "text",
      label: "Alien Number",
      required: true
    }
  ]
},
{
  id: "part9-trafficking-reason",
  title: "Part 9: Trafficking Reason",
  questions: [
    {
      id: "part9.traffickingReason",
      type: "radio",
      label: "77. Have you ever been involved in human trafficking?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-reentry-after-unlawful-presence",
  title: "Part 9: Reentry After Unlawful Presence",
  questions: [
    {
      id: "part9.reentryAfterUnlawfulPresence",
      type: "radio",
      label: "78.a. Have you reentered the U.S. after unlawful presence?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-reentry-after-deportation",
  title: "Part 9: Reentry After Deportation",
  questions: [
    {
      id: "part9.reentryAfterDeportation",
      type: "radio",
      label: "78.b. Have you reentered the U.S. after deportation?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-unlawful-presence",
  title: "Part 9: Unlawful Presence",
  questions: [
    {
      id: "part9.unlawfulPresence",
      type: "radio",
      label: "76. Have you ever been unlawfully present in the U.S.?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-polygamy",
  title: "Part 9: Polygamy",
  questions: [
    {
      id: "part9.polygamy",
      type: "radio",
      label: "79. Have you ever practiced polygamy?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-accompanying-inadmissible-alien",
  title: "Part 9: Accompanying Inadmissible Alien",
  questions: [
    {
      id: "part9.accompanyingInadmissibleAlien",
      type: "radio",
      label: "Have you ever accompanied an inadmissible alien?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-custody-of-us-citizen-child",
  title: "Part 9: Custody of U.S. Citizen Child",
  questions: [
    {
      id: "part9.custodyOfUSCitizenChild",
      type: "radio",
      label: "Do you have custody of a U.S. citizen child?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-illegal-voting",
  title: "Part 9: Illegal Voting",
  questions: [
    {
      id: "part9.illegalVoting",
      type: "radio",
      label: "Have you ever voted illegally in the U.S.?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part9-renounced-citizenship",
  title: "Part 9: Renounced Citizenship",
  questions: [
    {
      id: "part9.renouncedCitizenship",
      type: "radio",
      label: "Have you ever renounced U.S. citizenship?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-exemption-from-military-service",
  title: "Part 9: Exemption from Military Service",
  questions: [
    {
      id: "part9.exemptionFromMilitaryService",
      type: "radio",
      label: "Have you ever been exempted from military service?",
      required: true,
      options: [
        { value: "N", label: "No" }
      ]
    }
  ]
},
{
  id: "part9-military-service",
  title: "Part 9: Military Service",
  questions: [
    {
      id: "part9.appliedForExemption",
      type: "radio",
      label: "1. Have you ever applied for any exemption from military service?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part9.beenRelievedOrDischarged",
      type: "radio",
      label: "2. Have you ever been relieved or discharged from military service?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.beenConvictedOfDesertion",
      type: "radio",
      label: "3. Have you ever been convicted of desertion?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    },
    {
      id: "part9.nationalityOrImmigrationStatus",
      type: "text",
      label: "4. Nationality or Immigration Status",
      required: true,
    },
    {
      id: "part9.leftOrRemainedOutsideUS",
      type: "radio",
      label: "5. Have you ever left or remained outside the United States to avoid military service?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Y", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part10-contact-information",
  title: "Part 10: Contact Information",
  questions: [
    {
      id: "part10.alienRegistrationNumber",
      type: "text",
      label: "1. Alien Registration Number (A-Number)",
      required: true,
    },
    {
      id: "part10.daytimePhoneNumber",
      type: "tel",
      label: "2. Daytime Phone Number",
      required: true,
    },
    {
      id: "part10.emailAddress",
      type: "email",
      label: "3. Email Address",
      required: true,
    },
    {
      id: "part10.mobilePhoneNumber",
      type: "tel",
      label: "4. Mobile Phone Number",
      required: true,
    },
    {
      id: "part10.applicantSignature",
      type: "text",
      label: "5. Applicant's Signature",
      required: true,
    },
    {
      id: "part10.dateOfSignature",
      type: "date",
      label: "6. Date of Signature",
      required: true,
    }
  ]
},
{
  id: "part11-interpreter-information",
  title: "Part 11: Interpreter Information",
  questions: [
    {
      id: "part11.interpreterGivenName",
      type: "text",
      label: "1. Interpreter's Given Name",
      required: true,
    },
    {
      id: "part11.interpreterFamilyName",
      type: "text",
      label: "2. Interpreter's Family Name",
      required: true,
    },
    {
      id: "part11.interpreterBusinessName",
      type: "text",
      label: "3. Interpreter's Business Name",
      required: false,
    },
    {
      id: "part11.interpreterDaytimePhoneNumber",
      type: "tel",
      label: "4. Interpreter's Daytime Phone Number",
      required: true,
    },
    {
      id: "part11.interpreterMobilePhoneNumber",
      type: "tel",
      label: "5. Interpreter's Mobile Phone Number",
      required: false,
    },
    {
      id: "part11.interpreterEmail",
      type: "email",
      label: "6. Interpreter's Email Address",
      required: false,
    },
    {
      id: "part11.languageOfInterpretation",
      type: "text",
      label: "7. Language of Interpretation",
      required: true,
    },
    {
      id: "part11.interpreterSignature",
      type: "text",
      label: "8. Interpreter's Signature",
      required: true,
    },
    {
      id: "part11.interpreterDateOfSignature",
      type: "date",
      label: "9. Date of Interpreter's Signature",
      required: true,
    }
  ]
},
{
  id: "part12-preparer-information",
  title: "Part 12: Preparer Information",
  questions: [
    {
      id: "part12.preparerBusinessName",
      type: "text",
      label: "1. Preparer's Business Name",
      required: false,
    }
  ]
},
{
  id: "part12-preparer-information",
  title: "Part 12: Preparer Information",
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
    {
      id: "part12.signaturePreparer",
      type: "text",
      label: "6. Signature of Preparer",
      required: true,
    },
    {
      id: "part12.dateOfSignature",
      type: "date",
      label: "6.a. Date of Signature",
      required: true,
    },
  ],
},
{
  id: "part13-signatures",
  title: "Part 13: Signatures",
  questions: [
    {
      id: "part13.uscisSignature",
      type: "text",
      label: "USCIS Signature",
      required: true,
    },
    {
      id: "part13.uscisOfficer",
      type: "text",
      label: "USCIS Officer",
      required: true,
    },
    {
      id: "part13.applicantSignature",
      type: "text",
      label: "Applicant's Signature",
      required: true,
    },
    {
      id: "part13.dateOfSignature",
      type: "date",
      label: "Date of Signature",
      required: true,
    },
    {
      id: "part13.correctionsFirstNumber",
      type: "text",
      label: "Corrections - First Number",
      required: false,
    },
    {
      id: "part13.correctionsSecondNumber",
      type: "text",
      label: "Corrections - Second Number",
      required: false,
    },
    {
      id: "part13.pagesFirstNumber",
      type: "text",
      label: "Pages - First Number",
      required: false,
    },
    {
      id: "part13.pagesSecondNumber",
      type: "text",
      label: "Pages - Second Number",
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
      label: "Alien Registration Number (A-Number)",
      required: true,
    },
    {
      id: "part14.familyName",
      type: "text",
      label: "Family Name (Last Name)",
      required: true,
    },
    {
      id: "part14.givenName",
      type: "text",
      label: "Given Name (First Name)",
      required: true,
    },
    {
      id: "part14.middleName",
      type: "text",
      label: "Middle Name",
      required: false,
    },
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
      id: "part14.itemNumber",
      type: "text",
      label: "Item Number",
      required: false,
    },
  ],
},
{
  id: "part14-additional-information",
  title: "Part 14: Additional Information",
  questions: [
    {
      id: "part14.additionalInformation3ItemNumber",
      type: "text",
      label: "3.c. Item Number",
      required: true,
    },
    {
      id: "part14.additionalInformation4PageNumber",
      type: "text",
      label: "4.a. Page Number",
      required: true,
    },
    {
      id: "part14.additionalInformation4PartNumber",
      type: "text",
      label: "4.b. Part Number",
      required: true,
    },
    {
      id: "part14.additionalInformation4ItemNumber",
      type: "text",
      label: "4.c. Item Number",
      required: true,
    },
    {
      id: "part14.additionalInformation5PageNumber",
      type: "text",
      label: "5.a. Page Number",
      required: true,
    },
    {
      id: "part14.additionalInformation5PartNumber",
      type: "text",
      label: "5.b. Part Number",
      required: true,
    },
    {
      id: "part14.additionalInformation5ItemNumber",
      type: "text",
      label: "5.c. Item Number",
      required: true,
    },
    {
      id: "part14.additionalInformation5AdditionalInfo",
      type: "text",
      label: "5. Additional Information",
      required: true,
    },
    {
      id: "part14.additionalInformation4AdditionalInfo",
      type: "text",
      label: "4. Additional Information",
      required: true,
    },
    {
      id: "part14.additionalInformation3AdditionalInfo",
      type: "text",
      label: "3. Additional Information",
      required: true,
    },
    {
      id: "part14.additionalInformation2AdditionalInfo",
      type: "text",
      label: "2. Additional Information",
      required: true,
    },
  ],
}
  ],
  pdfFieldMappings: I_485_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_485_DEFINITION;
