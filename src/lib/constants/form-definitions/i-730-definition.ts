/**
 * I-730 Form Definition
 * Generated: 2026-01-01T01:40:45.351Z
 */

import { FormDefinition } from './forms-registry';
import { I_730_FIELD_MAPPINGS } from './form-mappings/i-730-field-mappings';

const I_730_DEFINITION: FormDefinition = {
  id: "i-730",
  code: "I-730",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
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
{
  id: "part1-address",
  title: "Part 1: Address",
  questions: [
    {
      id: "part1.cityOrTown",
      type: "text",
      label: "8.a. City or Town",
      required: true,
    },
    {
      id: "part1.province",
      type: "text",
      label: "8.b. Province",
      required: false,
    },
    {
      id: "part1.postalCode",
      type: "choice",
      label: "8.c. Postal Code",
      required: true,
    },
    {
      id: "part1.state",
      type: "text",
      label: "8.d. State",
      required: true,
    },
    {
      id: "part1.streetName",
      type: "button",
      label: "8.e. Street Name",
      required: true,
    },
    {
      id: "part1.unitType",
      type: "radio",
      label: "8.f. Unit Type (Select one)",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "APT", label: "Apartment" },
        { value: "FLR", label: "Floor" },
      ],
    },
    {
      id: "part1.apartmentSuiteFloorNumber",
      type: "text",
      label: "8.g. Apartment/Suite/Floor Number",
      required: false,
    },
    {
      id: "part1.country",
      type: "text",
      label: "8.h. Country",
      required: true,
    },
  ],
},
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
      type: "text",
      label: "1.e. State",
      required: true,
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
        { value: "FLR", label: "Floor" }
      ]
    },
    {
      id: "part1.unitNumber",
      type: "text",
      label: "1.h. Unit Number",
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
        { value: "F", label: "Female" }
      ]
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
    }
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
    }
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
      options: [
        { value: "1", label: "Yes" }
      ]
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
    }
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
      type: "text",
      label: "14.b. Place of Marriage - State or Province",
      required: true,
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
      type: "text",
      label: "17.b. Place Previous Marriage Ended - State or Province",
      required: false,
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
      type: "text",
      label: "19.a. Place Asylee Status Granted - State or Province",
      required: true,
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
      type: "select",
      label: "5.b. ZIP Code",
      required: true,
      options: [
        { value: "12345", label: "12345" },
        { value: "67890", label: "67890" },
      ],
    },
    {
      id: "part2.mailingAddressState",
      type: "text",
      label: "5.c. State",
      required: true,
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
  id: "part2-other-names-used",
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
      type: "text",
      label: "14.b. State or Province of Marriage",
      required: true,
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
      type: "text",
      label: "19.c. State or Province Where Prior Marriage 1 Ended",
      required: false,
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
      type: "text",
      label: "20.f. State or Province Where Prior Marriage 2 Ended",
      required: false,
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
        { value: "no", label: "No" }
      ]
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
        { value: "Off", label: "No" }
      ]
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
      id: "part2.beneficiaryUnitType",
      type: "radio",
      label: "Unit Type",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "APT", label: "Apartment" },
        { value: "FLR", label: "Floor" }
      ]
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
        { value: "Off", label: "None" }
      ]
    },
    {
      id: "part2.beneficiaryStatusB",
      type: "text",
      label: "Beneficiary Status B",
      required: false,
    }
  ]
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
        { value: "N", label: "No" }
      ]
    },
    {
      id: "part2.otherLanguagesSpoken",
      type: "text",
      label: "Other languages spoken by the beneficiary",
      required: false
    }
  ]
},
{
  id: "part2-arrival-information",
  title: "Part 2: Arrival Information",
  questions: [
    {
      id: "part2.dateOfArrival",
      type: "date",
      label: "Date of Arrival",
      required: true
    },
    {
      id: "part2.placeOfArrivalCity",
      type: "text",
      label: "City of Arrival",
      required: true
    },
    {
      id: "part2.placeOfArrivalState",
      type: "text",
      label: "State of Arrival",
      required: true
    },
    {
      id: "part2.passportNumber",
      type: "text",
      label: "Passport Number",
      required: true
    },
    {
      id: "part2.statusUponArrival",
      type: "text",
      label: "Status Upon Arrival",
      required: true
    },
    {
      id: "part2.i94Number",
      type: "text",
      label: "I-94 Number",
      required: true
    },
    {
      id: "part2.dateStatusExpires",
      type: "date",
      label: "Date Status Expires",
      required: true
    },
    {
      id: "part2.passportExpirationDate",
      type: "date",
      label: "Passport Expiration Date",
      required: true
    },
    {
      id: "part2.travelDocumentNumber",
      type: "text",
      label: "Travel Document Number",
      required: false
    },
    {
      id: "part2.travelDocumentExpirationDate",
      type: "date",
      label: "Travel Document Expiration Date",
      required: false
    },
    {
      id: "part2.countryOfIssuancePassport",
      type: "text",
      label: "Country of Issuance for Passport",
      required: true
    },
    {
      id: "part2.countryOfIssuanceTravelDocument",
      type: "text",
      label: "Country of Issuance for Travel Document",
      required: false
    },
    {
      id: "part2.secondDateOfArrival",
      type: "date",
      label: "Second Date of Arrival",
      required: false
    },
    {
      id: "part2.secondPlaceOfArrivalCity",
      type: "text",
      label: "Second City of Arrival",
      required: false
    },
    {
      id: "part2.secondPlaceOfArrivalState",
      type: "text",
      label: "Second State of Arrival",
      required: false
    },
    {
      id: "part2.secondStatusUponArrival",
      type: "text",
      label: "Second Status Upon Arrival",
      required: false
    },
    {
      id: "part2.secondI94Number",
      type: "text",
      label: "Second I-94 Number",
      required: false
    },
    {
      id: "part2.secondDateStatusExpires",
      type: "date",
      label: "Second Date Status Expires",
      required: false
    },
    {
      id: "part2.secondPassportNumber",
      type: "text",
      label: "Second Passport Number",
      required: false
    },
    {
      id: "part2.secondPassportExpirationDate",
      type: "date",
      label: "Second Passport Expiration Date",
      required: false
    }
  ]
},
{
  id: "part3-filing-deadline",
  title: "Part 3: Filing Deadline",
  questions: [
    {
      id: "part3.twoYearFilingDeadline",
      type: "date",
      label: "Two-Year Filing Deadline",
      required: true
    }
  ]
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
        { value: "Off", label: "Not Prepared by Preparer" }
      ]
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
        { value: "Off", label: "Interpreter Not Used" }
      ]
    },
    {
      id: "part5.petitionerStatement",
      type: "radio",
      label: "5. Petitioner's Statement",
      required: true,
      options: [
        { value: "A", label: "Petitioner Prepared" },
        { value: "Off", label: "Petitioner Did Not Prepare" }
      ]
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
    {
      id: "part5.petitionerSignature",
      type: "text",
      label: "9. Petitioner's Signature",
      required: true,
    },
    {
      id: "part5.dateOfPetitionerSignature",
      type: "date",
      label: "10. Date of Petitioner's Signature",
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
        { value: "Off", label: "Not Prepared by Preparer" }
      ]
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
        { value: "Off", label: "Interpreter Not Used" }
      ]
    },
    {
      id: "part6.beneficiaryStatement",
      type: "radio",
      label: "5. Beneficiary's Statement",
      required: true,
      options: [
        { value: "A", label: "Beneficiary Prepared" },
        { value: "Off", label: "Beneficiary Did Not Prepare" }
      ]
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
    {
      id: "part6.beneficiarySignature",
      type: "text",
      label: "9. Beneficiary's Signature",
      required: true,
    },
    {
      id: "part6.dateOfBeneficiarySignature",
      type: "date",
      label: "10. Date of Beneficiary's Signature",
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
      id: "part7.interpreterSuite",
      type: "checkbox",
      label: "3.b. Suite/Unit",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "Off", label: "Office" }
      ]
    },
    {
      id: "part7.interpreterFloor",
      type: "checkbox",
      label: "3.c. Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Office" }
      ]
    },
    {
      id: "part7.interpreterApartmentNumber",
      type: "text",
      label: "3.d. Apartment Number",
      required: false,
    },
    {
      id: "part7.interpreterApartment",
      type: "checkbox",
      label: "3.e. Apartment",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "Off", label: "Office" }
      ]
    },
    {
      id: "part7.interpreterCity",
      type: "text",
      label: "3.f. City or Town",
      required: true,
    },
    {
      id: "part7.interpreterState",
      type: "text",
      label: "3.g. State",
      required: true,
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
    {
      id: "part7.interpreterSignatureDate",
      type: "date",
      label: "8.a. Date of Signature",
      required: true,
    },
    {
      id: "part7.interpreterSignature",
      type: "text",
      label: "8.b. Interpreter's Signature",
      required: true,
    }
  ]
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
    }
  ]
},
{
  id: "part8-preparers-address",
  title: "Part 8: Preparer's Address",
  questions: [
    {
      id: "part8.preparersPostalCode",
      type: "select",
      label: "3. Postal Code",
      required: true,
      options: [
        { value: "F[0].#subform[10].P8_Line3_PostalCode[0]", label: "Postal Code" }
      ]
    },
    {
      id: "part8.preparersState",
      type: "text",
      label: "3.b. State",
      required: true,
    },
    {
      id: "part8.preparersStreetName",
      type: "button",
      label: "3.c. Street Name",
      required: true,
    },
    {
      id: "part8.preparersSuite",
      type: "checkbox",
      label: "3.d. Suite",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "Off", label: "Office" }
      ]
    },
    {
      id: "part8.preparersFloor",
      type: "checkbox",
      label: "3.e. Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Office" }
      ]
    },
    {
      id: "part8.preparersApartmentNumber",
      type: "button",
      label: "3.f. Apartment Number",
      required: false,
    },
    {
      id: "part8.preparersApartment",
      type: "checkbox",
      label: "3.g. Apartment",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "Off", label: "Office" }
      ]
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
    }
  ]
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
      type: "button",
      label: "5. Mobile Telephone Number",
      required: false,
    }
  ]
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
        { value: "A", label: "I am not an attorney or accredited representative but have prepared this form at the request of the applicant." },
        { value: "Off", label: "I am an attorney or accredited representative and my representation does not extend beyond the preparation of this form." }
      ]
    },
    {
      id: "part8.preparersAttorneyStatement",
      type: "radio",
      label: "8. Preparer's Attorney Statement",
      required: false,
      options: [
        { value: "A", label: "I am an attorney or accredited representative and my representation extends beyond the preparation of this form." },
        { value: "Off", label: "My representation does not extend beyond the preparation of this form." }
      ]
    },
    {
      id: "part8.preparersRepresentationDoesNotExtend",
      type: "radio",
      label: "9. Representation Does Not Extend",
      required: false,
      options: [
        { value: "A", label: "My representation does not extend beyond the preparation of this form." },
        { value: "Off", label: "My representation extends beyond the preparation of this form." }
      ]
    },
    {
      id: "part8.preparersRepresentationExtends",
      type: "radio",
      label: "10. Representation Extends",
      required: false,
      options: [
        { value: "A", label: "My representation extends beyond the preparation of this form." },
        { value: "Off", label: "My representation does not extend beyond the preparation of this form." }
      ]
    }
  ]
},
{
  id: "part8-preparers-signature",
  title: "Part 8: Preparer's Signature",
  questions: [
    {
      id: "part8.preparersSignatureDate",
      type: "date",
      label: "11. Date of Signature",
      required: true,
    },
    {
      id: "part8.preparersSignature",
      type: "text",
      label: "12. Signature",
      required: true,
    }
  ]
},
{
  id: "part9-officer-signature",
  title: "Part 9: Officer Signature",
  questions: [
    {
      id: "part9.signatureOfOfficer",
      type: "text",
      label: "1. Signature of Officer",
      required: true,
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
      options: [
        { value: "1", label: "Approved" }
      ]
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
      options: [
        { value: "1", label: "Returned" }
      ]
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
}
  ],
  pdfFieldMappings: I_730_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_730_DEFINITION;
