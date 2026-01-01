/**
 * I-130 Form Definition
 * Generated: 2025-12-30T21:07:38.897Z
 */

import { FormDefinition } from './forms-registry';
import { I_130_FIELD_MAPPINGS } from './form-mappings/i-130-field-mappings';

const I_130_DEFINITION: FormDefinition = {
  id: "i-130",
  code: "I-130",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
{
  id: "part1-relationship",
  title: "Part 1: Relationship Information",
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
        { value: "child", label: "Child" }
      ]
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
        { value: "outOfWedlock", label: "Out of Wedlock" }
      ]
    },
    {
      id: "part1.relatedByAdoption",
      type: "radio",
      label: "3. Related by Adoption?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part1.gainedStatusThroughAdoption",
      type: "radio",
      label: "4. Gained Status Through Adoption?",
      required: true,
      options: [
        { value: "no", label: "No" },
        { value: "yes", label: "Yes" }
      ]
    }
  ]
},
{
  id: "part2-personal-info",
  title: "Part 2: Personal Information",
  questions: [
    {
      id: "part2.familyName",
      type: "text",
      label: "1.a. Family Name (Last Name)",
      required: true
    },
    {
      id: "part2.givenName",
      type: "text",
      label: "1.b. Given Name (First Name)",
      required: true
    },
    {
      id: "part2.middleName",
      type: "text",
      label: "1.c. Middle Name",
      required: false
    },
    {
      id: "part2.alienNumber",
      type: "text",
      label: "2. Alien Registration Number (A-Number)",
      required: false
    },
    {
      id: "part2.uscisOnlineAccountNumber",
      type: "text",
      label: "3. USCIS Online Account Number",
      required: false
    },
    {
      id: "part2.dateOfBirth",
      type: "date",
      label: "4. Date of Birth (mm/dd/yyyy)",
      required: true
    },
    {
      id: "part2.sex",
      type: "radio",
      label: "5. Sex",
      required: true,
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" }
      ]
    },
    {
      id: "part2.ssn",
      type: "ssn",
      label: "6. U.S. Social Security Number",
      required: false
    }
  ]
},
{
  id: "attorney-info",
  title: "Attorney or Accredited Representative Information",
  questions: [
    {
      id: "attorney.g28Attached",
      type: "checkbox",
      label: "1. Form G-28 is attached",
      required: false,
      options: [
        { value: "1", label: "Yes" }
      ]
    },
    {
      id: "attorney.volagNumber",
      type: "text",
      label: "2. VOLAG Number",
      required: false
    },
    {
      id: "attorney.stateBarNumber",
      type: "text",
      label: "3. Attorney State Bar Number",
      required: false
    },
    {
      id: "attorney.uscisOnlineAccountNumber",
      type: "text",
      label: "4. USCIS Online Account Number",
      required: false
    }
  ]
},
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
  ],
},
{
  id: "part2-mailing-address",
  title: "Part 2: Mailing Address",
  questions: [
    {
      id: "part2.mailingAddressSameAsPhysical",
      type: "radio",
      label: "11. Is your mailing address the same as your physical address?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" }
      ]
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "10. State",
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "14. State",
      required: false,
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
  ],
},
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
      type: "text",
      label: "13.a. Date From",
      required: true,
    },
    {
      id: "part2.physicalAddress2DateFrom",
      type: "text",
      label: "15.a. Date From",
      required: true,
    },
    {
      id: "part2.physicalAddress2DateTo",
      type: "text",
      label: "15.b. Date To",
      required: true,
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "12. State",
      required: true,
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
    }
  ]
},
{
  id: "part2-personal-info",
  title: "Part 2: Personal Information",
  questions: [
    {
      id: "part2.cityTownOfBirth",
      type: "text",
      label: "6. City/Town of Birth",
      required: true,
    },
    {
      id: "part2.otherNamesFamilyName",
      type: "text",
      label: "Other Names Used - Family Name",
      required: false,
    },
    {
      id: "part2.otherNamesGivenName",
      type: "text",
      label: "Other Names Used - Given Name",
      required: false,
    },
    {
      id: "part2.otherNamesMiddleName",
      type: "text",
      label: "Other Names Used - Middle Name",
      required: false,
    },
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
        { value: "Y", label: "Widowed" },
        { value: "Y", label: "Annulled" },
        { value: "Y", label: "Separated" },
        { value: "Y", label: "Single" },
        { value: "Y", label: "Married" }
      ]
    }
  ]
},
{
  id: "part2-marital-status",
  title: "Part 2: Marital Status",
  questions: [
    {
      id: "part2.currentMaritalStatusDivorced",
      type: "checkbox",
      label: "17. Marital Status: Divorced",
      required: false,
      options: [
        { value: "Y", label: "Yes" }
      ]
    },
  ],
},
{
  id: "part2-address-history",
  title: "Part 2: Address History",
  questions: [
    {
      id: "part2.addressHistoryPhysicalAddress1DateTo",
      type: "date",
      label: "13.b. Date To",
      required: false,
    },
  ],
},
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
  id: "part2-current-marriage",
  title: "Part 2: Current Marriage",
  questions: [
    {
      id: "part2.dateOfCurrentMarriage",
      type: "date",
      label: "18. Date of Current Marriage",
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
  ],
},
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
  ],
},
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
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.lpr",
      type: "radio",
      label: "Are you a Lawful Permanent Resident (LPR)?",
      required: true,
      options: [
        { value: "N", label: "No" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.citizenshipBirth",
      type: "checkbox",
      label: "Citizenship obtained by birth in the U.S.",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.citizenshipNaturalization",
      type: "checkbox",
      label: "Citizenship obtained through naturalization",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.citizenshipParents",
      type: "checkbox",
      label: "Citizenship obtained through parents",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.certificateNumber",
      type: "text",
      label: "Certificate Number",
      required: false
    },
    {
      id: "part2.certificateObtained",
      type: "radio",
      label: "Have you obtained a certificate?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.certificateNotObtained",
      type: "radio",
      label: "Have you not obtained a certificate?",
      required: false,
      options: [
        { value: "N", label: "No" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.dateOfIssuance",
      type: "text",
      label: "Date of Issuance",
      required: false
    },
    {
      id: "part2.placeOfIssuance",
      type: "text",
      label: "Place of Issuance",
      required: false
    },
    {
      id: "part2.parentOneSexMale",
      type: "radio",
      label: "Is Parent One Male?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.parentOneSexFemale",
      type: "radio",
      label: "Is Parent One Female?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.parentTwoSexMale",
      type: "radio",
      label: "Is Parent Two Male?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    },
    {
      id: "part2.parentTwoSexFemale",
      type: "radio",
      label: "Is Parent Two Female?",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "No" }
      ]
    }
  ]
},
{
  id: "part2-employer1",
  title: "Part 2: Employer 1 Information",
  questions: [
    {
      id: "part2.employer1Suite",
      type: "radio",
      label: "41. Suite",
      required: false,
      options: [
        { value: "STE", label: "STE" },
        { value: "Off", label: "Off" }
      ]
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
      type: "text",
      label: "41. State",
      required: true,
    },
    {
      id: "part2.employer1Country",
      type: "text",
      label: "41. Country",
      required: true,
    },
    {
      id: "part2.employer1Name",
      type: "text",
      label: "40. Employer or Company Name",
      required: true,
    },
  ],
},
{
  id: "part2-employer2",
  title: "Part 2: Employer 2 Information",
  questions: [
    {
      id: "part2.employer2StreetNumberName",
      type: "text",
      label: "45. Street Number and Name",
      required: true,
    },
    {
      id: "part2.employer2Apartment",
      type: "radio",
      label: "45. Apartment",
      required: false,
      options: [
        { value: "APT", label: "APT" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part2.employer2Suite",
      type: "radio",
      label: "45. Suite",
      required: false,
      options: [
        { value: "STE", label: "STE" },
        { value: "Off", label: "Off" }
      ]
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
      type: "text",
      label: "45. State",
      required: true,
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
  ],
},
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
        { value: "H", label: "Hispanic or Latino" }
      ]
    },
    {
      id: "part3.race",
      type: "checkbox",
      label: "2. Race (Select all that apply)",
      required: false,
      options: [
        { value: "B", label: "Black or African American" },
        { value: "AA", label: "American Indian or Alaska Native" },
        { value: "W", label: "White" },
        { value: "A", label: "Asian" },
        { value: "N", label: "Native Hawaiian or Other Pacific Islander" }
      ]
    }
  ]
},
{
  id: "part3-physical-characteristics",
  title: "Part 3: Physical Characteristics",
  questions: [
    {
      id: "part3.heightFeet",
      type: "dropdown",
      label: "3.a. Height (Feet)",
      required: true,
    },
    {
      id: "part3.heightInches",
      type: "text",
      label: "3.b. Height (Inches)",
      required: true,
    },
    {
      id: "part3.weight",
      type: "text",
      label: "4. Weight (Pounds)",
      required: true,
      helpText: "Enter your weight as a three-digit number.",
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
        { value: "OTH", label: "Other" }
      ]
    }
  ]
},
{
  id: "part2-employment",
  title: "Part 2: Employment Information",
  questions: [
    {
      id: "part2.employer2Name",
      type: "text",
      label: "44. Employer or Organization Name",
      required: false,
    },
    {
      id: "part2.occupation",
      type: "text",
      label: "42. Occupation",
      required: false,
    },
    {
      id: "part2.employmentDateFrom",
      type: "text",
      label: "43.a. Employment Date From",
      required: false,
    },
    {
      id: "part2.employmentDateTo",
      type: "checkbox",
      label: "43.b. Employment Date To",
      required: false,
    }
  ]
},
{
  id: "part2-admission",
  title: "Part 2: Admission Information",
  questions: [
    {
      id: "part2.stateOfAdmission",
      type: "text",
      label: "State of Admission",
      required: false,
    }
  ]
},
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "12.e. State",
      required: true,
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
        { value: "STE", label: "Suite" }
      ]
    }
  ]
},
{
  id: "part4-other-address",
  title: "Part 4: Other Address Information",
  questions: [
    {
      id: "part4.otherAddressFloor",
      type: "radio",
      label: "13. Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.otherAddressStreetNumberName",
      type: "text",
      label: "13.a. Street Number and Name",
      required: false
    },
    {
      id: "part4.otherAddressCityOrTown",
      type: "text",
      label: "13.b. City or Town",
      required: false
    },
    {
      id: "part4.otherAddressCountry",
      type: "text",
      label: "13.c. Country",
      required: false
    },
    {
      id: "part4.otherAddressProvince",
      type: "text",
      label: "13.d. Province",
      required: false
    }
  ]
},
{
  id: "part4-physical-address",
  title: "Part 4: Physical Address Information",
  questions: [
    {
      id: "part4.physicalAddressStreetNumberName",
      type: "text",
      label: "11.a. Street Number and Name",
      required: false
    },
    {
      id: "part4.physicalAddressApartment",
      type: "radio",
      label: "11.b. Apartment",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.physicalAddressSuite",
      type: "radio",
      label: "11.c. Suite",
      required: false,
      options: [
        { value: "STE", label: "Suite" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.physicalAddressFloor",
      type: "radio",
      label: "11.d. Floor",
      required: false,
      options: [
        { value: "FLR", label: "Floor" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.physicalAddressAptSteFlrNumber",
      type: "text",
      label: "11.e. Apt/Ste/Flr Number",
      required: false
    },
    {
      id: "part4.physicalAddressCityOrTown",
      type: "text",
      label: "11.f. City or Town",
      required: false
    },
    {
      id: "part4.physicalAddressZipCode",
      type: "text",
      label: "11.g. ZIP Code",
      required: false
    },
    {
      id: "part4.physicalAddressState",
      type: "text",
      label: "11.h. State",
      required: false
    }
  ]
},
{
  id: "part4-personal-info",
  title: "Part 4: Personal Information",
  questions: [
    {
      id: "part4.dateOfBirth",
      type: "date",
      label: "12. Date of Birth",
      required: false
    },
    {
      id: "part4.sexMale",
      type: "radio",
      label: "13. Sex - Male",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part4.sexFemale",
      type: "radio",
      label: "14. Sex - Female",
      required: false,
      options: [
        { value: "Y", label: "Yes" },
        { value: "Off", label: "Off" }
      ]
    }
  ]
},
{
  id: "part3-physical-characteristics",
  title: "Part 3: Physical Characteristics",
  questions: [
    {
      id: "part3.hairColorBald",
      type: "radio",
      label: "15. Hair Color - Bald",
      required: false,
      options: [
        { value: "BLD", label: "Bald" },
        { value: "Off", label: "Off" }
      ]
    },
    {
      id: "part3.hairColorBlack",
      type: "radio",
      label: "16. Hair Color - Black",
      required: false,
      options: [
        { value: "BLK", label: "Black" }
      ]
    }
  ]
},
{
  id: "part4-other-petition-filed",
  title: "Part 4: Other Petition Filed",
  questions: [
    {
      id: "part4.otherPetitionFiled",
      type: "radio",
      label: "10. Have you ever filed a petition for this beneficiary or any other alien?",
      required: true,
      options: [
        { value: "Y", label: "Yes" },
        { value: "N", label: "No" },
        { value: "U", label: "Unknown" }
      ]
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
        { value: "D", label: "Divorced" }
      ]
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
      type: "text",
      label: "State",
      required: true,
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
  ],
},
{
  id: "part4-person4",
  title: "Part 4: Information About Other Relatives",
  questions: [
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
        { value: "Off", label: "No" }
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
        { value: "FLR", label: "Floor" }
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
      type: "text",
      label: "Employer State",
      required: true,
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
      ]
    }
  ]
},
{
  id: "part4-beneficiary-immigration-proceedings",
  title: "Part 4: Beneficiary Immigration Proceedings",
  questions: [
    {
      id: "part4.beneficiaryImmigrationProceedings",
      type: "radio",
      label: "28. Has the beneficiary ever been in immigration proceedings?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
    {
      id: "part4.proceedingTypeRemoval",
      type: "checkbox",
      label: "54. Removal",
      required: false,
    },
    {
      id: "part4.proceedingTypeExclusion",
      type: "checkbox",
      label: "54. Exclusion",
      required: false,
    },
    {
      id: "part4.proceedingTypeRescission",
      type: "checkbox",
      label: "54. Rescission",
      required: false,
    },
    {
      id: "part4.proceedingTypeJudicial",
      type: "text",
      label: "54. Judicial Proceedings",
      required: false,
    },
    {
      id: "part4.proceedingCityOrTown",
      type: "text",
      label: "55a. City or Town",
      required: false,
    },
    {
      id: "part4.proceedingState",
      type: "text",
      label: "55b. State",
      required: false,
    },
    {
      id: "part4.proceedingDate",
      type: "date",
      label: "56. Date",
      required: false,
    }
  ]
},
{
  id: "part4-beneficiary-personal-info",
  title: "Part 4: Beneficiary Personal Information",
  questions: [
    {
      id: "part4.beneficiaryMiddleName",
      type: "text",
      label: "55c. Middle Name",
      required: false,
    },
    {
      id: "part4.beneficiaryFamilyName",
      type: "text",
      label: "55a. Family Name (Last Name)",
      required: true,
    },
    {
      id: "part4.beneficiaryGivenName",
      type: "text",
      label: "55b. Given Name (First Name)",
      required: true,
    },
    {
      id: "part4.beneficiaryUnit",
      type: "select",
      label: "Unit Type",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "STE", label: "Suite" },
        { value: "FLR", label: "Floor" }
      ]
    },
    {
      id: "part4.beneficiaryAptSteFlrNumber",
      type: "text",
      label: "Apt/Ste/Flr Number",
      required: false,
    },
    {
      id: "part4.beneficiaryCityOrTown",
      type: "text",
      label: "City or Town",
      required: true,
    },
    {
      id: "part4.beneficiaryProvince",
      type: "text",
      label: "Province",
      required: false,
    },
    {
      id: "part4.beneficiaryCountry",
      type: "text",
      label: "Country",
      required: true,
    },
    {
      id: "part4.beneficiaryPostalCode",
      type: "text",
      label: "Postal Code",
      required: true,
    }
  ]
},
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "57. State",
      required: true,
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
        { value: "N", label: "No" }
      ]
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
      type: "text",
      label: "3.b. State",
      required: true,
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
    }
  ],
},
{
  id: "part4-beneficiary",
  title: "Part 4: Beneficiary Information",
  questions: [
    {
      id: "part4.beneficiary.cityOrTown",
      type: "text",
      label: "60.a. City or Town",
      required: true,
    },
    {
      id: "part4.beneficiary.state",
      type: "text",
      label: "60.b. State",
      required: true,
    }
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
      label: "1. Statement",
      required: true,
      options: [
        { value: "A", label: "Option A" },
        { value: "B", label: "Option B" }
      ]
    },
    {
      id: "part6.petitioner.language",
      type: "text",
      label: "Language",
      required: false,
    },
    {
      id: "part6.petitioner.preparer",
      type: "radio",
      label: "Preparer",
      required: true,
      options: [
        { value: "C", label: "Option C" }
      ]
    },
    {
      id: "part6.petitioner.preparerName",
      type: "text",
      label: "Preparer's Name",
      required: false,
    },
    {
      id: "part6.petitioner.dateOfSignature",
      type: "date",
      label: "Date of Signature",
      required: true,
    },
    {
      id: "part6.petitioner.signature",
      type: "text",
      label: "Signature",
      required: true,
    }
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
    }
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
        { value: "FLR", label: "Floor" }
      ]
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
      type: "text",
      label: "3. State",
      required: false,
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
    }
  ]
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
    }
  ]
},
{
  id: "part7-interpreter-signature",
  title: "Part 7: Interpreter's Signature",
  questions: [
    {
      id: "part7.interpreterSignature.dateOfSignature",
      type: "date",
      label: "7.b. Date of Signature",
      required: true,
    },
    {
      id: "part7.interpreterSignature.signature",
      type: "text",
      label: "7.a. Signature",
      required: true,
    }
  ]
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
    }
  ]
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
    }
  ]
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
        { value: "FLR", label: "Floor" }
      ]
    },
    {
      id: "part8.preparerMailingAddress.aptSteFlrNumber",
      type: "text",
      label: "3. Apt/Ste/Flr Number",
      required: false,
    }
  ]
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
      type: "text",
      label: "3. State",
      required: true,
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
        { value: "A", label: "I am not an attorney or accredited representative but have prepared this form on behalf of the applicant." },
        { value: "B", label: "I am an attorney or accredited representative and my representation extends beyond the preparation of this form." }
      ]
    },
    {
      id: "part8.preparersStatementAttorneyRepresentation",
      type: "radio",
      label: "7.b. Attorney Representation",
      required: true,
      options: [
        { value: "Y", label: "Yes" }
      ]
    },
  ],
},
{
  id: "part8-preparers-signature",
  title: "Part 8: Preparer's Signature",
  questions: [
    {
      id: "part8.preparersSignature",
      type: "text",
      label: "8.a. Signature",
      required: true,
    },
    {
      id: "part8.preparersSignatureDate",
      type: "date",
      label: "8.b. Date of Signature",
      required: true,
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
{
  id: "part9-additional-information",
  title: "Part 9: Additional Information",
  questions: [
    {
      id: "part9.additionalInformation5cItemNumber",
      type: "text",
      label: "5.c. Item Number",
      required: true,
    },
    {
      id: "part9.additionalInformation6aPageNumber",
      type: "text",
      label: "6.a. Page Number",
      required: true,
    },
    {
      id: "part9.additionalInformation6bPartNumber",
      type: "text",
      label: "6.b. Part Number",
      required: true,
    },
    {
      id: "part9.additionalInformation6cItemNumber",
      type: "text",
      label: "6.c. Item Number",
      required: true,
    },
    {
      id: "part9.familyName",
      type: "text",
      label: "Family Name (Last Name)",
      required: true,
    },
    {
      id: "part9.givenName",
      type: "text",
      label: "Given Name (First Name)",
      required: true,
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
      required: true,
    },
    {
      id: "part9.additionalInformation7bPartNumber",
      type: "text",
      label: "7.b. Part Number",
      required: true,
    },
    {
      id: "part9.additionalInformation7cItemNumber",
      type: "text",
      label: "7.c. Item Number",
      required: true,
    },
    {
      id: "part9.additionalInformation7d",
      type: "text",
      label: "7.d. Additional Information",
      required: false,
    },
  ],
}
  ],
  pdfFieldMappings: I_130_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_130_DEFINITION;
