/**
 * I-130 Form Definition
 * Generated on: 2025-12-18T20:13:37.525Z
 * 
 * Complete form definition with ALL fields from the PDF
 * Total sections: 9
 * Total questions: 222
 */

// FormDefinition type is already imported in forms-registry.ts

const I130_DEFINITION: FormDefinition = {
  id: "i-130",
  code: "I-130",
  name: "I-130 Form",
  description: "Complete I-130 form with all fields",
  category: "family",
  estimatedTime: "60-90 minutes",
  filingFee: 0,
  price: 60,
  sections: [
  {
    "id": "part2",
    "title": "Part 2",
    "description": "Complete all fields in Part 2",
    "questions": [
      {
        "id": "part2.line11.sSN",
        "type": "radio",
        "label": "U.S. Social Security Number (SSN)",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line4a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part2.line4b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part2.line4c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part2.line1.alienNumber",
        "type": "text",
        "label": "Alien Registration Number (A-Number)",
        "required": true
      },
      {
        "id": "part2.line2.uSCISOnlineActNumber",
        "type": "text",
        "label": "U S C I S Online Act Number",
        "required": true
      },
      {
        "id": "part2.line8.dateofBirth",
        "type": "date",
        "label": "Date of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line9.male",
        "type": "radio",
        "label": "Male",
        "required": true,
        "options": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      },
      {
        "id": "part2.line7.countryofBirth",
        "type": "select",
        "label": "Country of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line10.streetNumberName",
        "type": "text",
        "label": "Street Number and Name",
        "required": true
      },
      {
        "id": "part2.line14.streetNumberName",
        "type": "text",
        "label": "Street Number and Name",
        "required": true
      },
      {
        "id": "part2.line13a.dateFrom",
        "type": "date",
        "label": "Date From",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line15a.dateFrom",
        "type": "date",
        "label": "Date From",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line15b.dateTo",
        "type": "date",
        "label": "Date To",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line12.streetNumberName",
        "type": "text",
        "label": "Street Number and Name",
        "required": true
      },
      {
        "id": "part2.line6.cityTownOfBirth",
        "type": "radio",
        "label": "City Town Of Birth",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line5a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part2.line5b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part2.line5c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part2.line16.numberofMarriages",
        "type": "text",
        "label": "Numberof Marriages",
        "required": false
      },
      {
        "id": "part2.line17.widowed",
        "type": "text",
        "label": "Widowed",
        "required": false
      },
      {
        "id": "part2.line13b.dateTo",
        "type": "date",
        "label": "Date To",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line20b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part2.line20c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part2.line23.dateMarriageEnded",
        "type": "date",
        "label": "Date Marriage Ended",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line22c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part2.line22b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part2.line22a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part2.line21.dateMarriageEnded",
        "type": "date",
        "label": "Date Marriage Ended",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line18.dateOfMarriage",
        "type": "date",
        "label": "Date Of Marriage",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line24.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part2.line25.dateofBirth",
        "type": "date",
        "label": "Date of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line28.cityTownOrVillageOfResidence",
        "type": "radio",
        "label": "City Town Or Village Of Residence",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line29.countryOfResidence",
        "type": "select",
        "label": "Country Of Residence",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line27.countryofBirth",
        "type": "select",
        "label": "Country of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line30b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part2.line30c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part2.line30a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part2.line31.dateofBirth",
        "type": "date",
        "label": "Date of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line34.cityTownOrVillageOfResidence",
        "type": "radio",
        "label": "City Town Or Village Of Residence",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line35.countryOfResidence",
        "type": "select",
        "label": "Country Of Residence",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line33.countryofBirth",
        "type": "select",
        "label": "Country of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line36.uSCitizen",
        "type": "radio",
        "label": "U S Citizen",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line23a.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": false
      },
      {
        "id": "part2.line23b.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": false
      },
      {
        "id": "part2.line23c.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": false
      },
      {
        "id": "part2.line37a.certificateNumber",
        "type": "text",
        "label": "Certificate Number",
        "required": false
      },
      {
        "id": "part2.line37c.dateOfIssuance",
        "type": "date",
        "label": "Date Of Issuance",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line37b.placeOfIssuance",
        "type": "text",
        "label": "Place Of Issuance",
        "required": false
      },
      {
        "id": "part2.line26.male",
        "type": "radio",
        "label": "Male",
        "required": true,
        "options": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      },
      {
        "id": "part2.line32.male",
        "type": "radio",
        "label": "Male",
        "required": true,
        "options": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      },
      {
        "id": "part2.line19a.cityTown",
        "type": "text",
        "label": "City Town",
        "required": true
      },
      {
        "id": "part2.line19b.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      },
      {
        "id": "part2.line19c.province",
        "type": "text",
        "label": "Province",
        "required": false
      },
      {
        "id": "part2.line19d.country",
        "type": "select",
        "label": "Country",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part2.line40a.classOfAdmission",
        "type": "text",
        "label": "Class Of Admission",
        "required": false
      },
      {
        "id": "part2.line40b.dateOfAdmission",
        "type": "date",
        "label": "Date Of Admission",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line40d.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part2.line41.no",
        "type": "radio",
        "label": "No",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part2.line40.employerOrCompName",
        "type": "text",
        "label": "Employer Or Comp Name",
        "required": true
      },
      {
        "id": "part2.line45.streetNumberName",
        "type": "text",
        "label": "Street Number and Name",
        "required": true
      },
      {
        "id": "part2.line46.occupation",
        "type": "text",
        "label": "Occupation",
        "required": false
      },
      {
        "id": "part2.line47a.dateFrom",
        "type": "date",
        "label": "Date From",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line47b.dateTo",
        "type": "date",
        "label": "Date To",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line44.employerOrOrgName",
        "type": "text",
        "label": "Employer Or Org Name",
        "required": true
      },
      {
        "id": "part2.line42.occupation",
        "type": "text",
        "label": "Occupation",
        "required": false
      },
      {
        "id": "part2.line43a.dateFrom",
        "type": "date",
        "label": "Date From",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line43b.dateTo",
        "type": "date",
        "label": "Date To",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part2.line40e.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      }
    ]
  },
  {
    "id": "part1",
    "title": "Part 1",
    "description": "Complete all fields in Part 1",
    "questions": [
      {
        "id": "part1.line1.spouse",
        "type": "text",
        "label": "Spouse",
        "required": true
      },
      {
        "id": "part1.line2.inWedlock",
        "type": "text",
        "label": "In Wedlock",
        "required": true
      },
      {
        "id": "part1.line3.yes",
        "type": "radio",
        "label": "Yes",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part1.line4.no",
        "type": "radio",
        "label": "No",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      }
    ]
  },
  {
    "id": "part3",
    "title": "Part 3",
    "description": "Complete all fields in Part 3",
    "questions": [
      {
        "id": "part3.line1.ethnicity",
        "type": "text",
        "label": "Ethnicity",
        "required": true
      },
      {
        "id": "part3.line2.race_Black",
        "type": "radio",
        "label": "Race_ Black",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part3.line3.heightFeet",
        "type": "text",
        "label": "Height Feet",
        "required": true
      },
      {
        "id": "part3.line4.pound1",
        "type": "text",
        "label": "Pound1",
        "required": true
      },
      {
        "id": "part3.line5.eyeColor",
        "type": "text",
        "label": "Eye Color",
        "required": true
      },
      {
        "id": "part3.line6.hairColor",
        "type": "text",
        "label": "Hair Color",
        "required": true
      }
    ]
  },
  {
    "id": "part4",
    "title": "Part 4",
    "description": "Complete all fields in Part 4",
    "questions": [
      {
        "id": "part4.line1.alienNumber",
        "type": "text",
        "label": "Alien Registration Number (A-Number)",
        "required": true
      },
      {
        "id": "part4.line2.uSCISOnlineActNumber",
        "type": "text",
        "label": "U S C I S Online Act Number",
        "required": true
      },
      {
        "id": "part4.line4a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line4b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line4c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line5b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line5c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line7.cityTownOfBirth",
        "type": "radio",
        "label": "City Town Of Birth",
        "required": true,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part4.line8.countryOfBirth",
        "type": "select",
        "label": "Country Of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line11.province",
        "type": "text",
        "label": "Province",
        "required": false
      },
      {
        "id": "part4.line12a.streetNumberName",
        "type": "text",
        "label": "Street Number and Name",
        "required": true
      },
      {
        "id": "part4.line12b.unit",
        "type": "text",
        "label": "Unit",
        "required": false
      },
      {
        "id": "part4.line12c.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part4.line12e.zipCode",
        "type": "text",
        "label": "ZIP Code",
        "required": true
      },
      {
        "id": "part4.line12d.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      },
      {
        "id": "part4.line13.postalCode",
        "type": "text",
        "label": "Postal Code",
        "required": false
      },
      {
        "id": "part4.line9.dateOfBirth",
        "type": "radio",
        "label": "Date Of Birth",
        "required": true,
        "options": [
          {
            "value": "male",
            "label": "Male"
          },
          {
            "value": "female",
            "label": "Female"
          }
        ]
      },
      {
        "id": "part4.line10.yes",
        "type": "radio",
        "label": "Yes",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part4.line14.daytimePhoneNumber",
        "type": "tel",
        "label": "Daytime Phone Number",
        "required": false,
        "placeholder": "(###) ###-####"
      },
      {
        "id": "part4.line3.sSN",
        "type": "ssn",
        "label": "U.S. Social Security Number (SSN)",
        "required": true,
        "placeholder": "###-##-####"
      },
      {
        "id": "part4.line20c.province",
        "type": "text",
        "label": "Province",
        "required": false
      },
      {
        "id": "part4.line17.numberofMarriages",
        "type": "text",
        "label": "Numberof Marriages",
        "required": false
      },
      {
        "id": "part4.line18.maritalStatus",
        "type": "select",
        "label": "Marital Status",
        "required": true,
        "options": [
          {
            "value": "single",
            "label": "Single, Never Married"
          },
          {
            "value": "married",
            "label": "Married"
          },
          {
            "value": "divorced",
            "label": "Divorced"
          },
          {
            "value": "widowed",
            "label": "Widowed"
          },
          {
            "value": "separated",
            "label": "Separated"
          }
        ]
      },
      {
        "id": "part4.line15.mobilePhoneNumber",
        "type": "tel",
        "label": "Mobile Phone Number",
        "required": false,
        "placeholder": "(###) ###-####"
      },
      {
        "id": "part4.line16.emailAddress",
        "type": "email",
        "label": "Email Address",
        "required": true,
        "placeholder": "email@example.com"
      },
      {
        "id": "part4.line19.dateOfMarriage",
        "type": "date",
        "label": "Date Of Marriage",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line18a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line18b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line18c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line16a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line16b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line16c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line31.relationship",
        "type": "text",
        "label": "Relationship",
        "required": true
      },
      {
        "id": "part4.line30a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line30b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line30c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line32.dateOfBirth",
        "type": "date",
        "label": "Date Of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line49.countryOfBirth",
        "type": "select",
        "label": "Country Of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line35.relationship",
        "type": "text",
        "label": "Relationship",
        "required": true
      },
      {
        "id": "part4.line36.dateOfBirth",
        "type": "date",
        "label": "Date Of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line37.countryOfBirth",
        "type": "select",
        "label": "Country Of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line34a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line34b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line34c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line38b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line38c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line38a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line41.countryOfBirth",
        "type": "select",
        "label": "Country Of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line40.dateOfBirth",
        "type": "date",
        "label": "Date Of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line39.relationship",
        "type": "text",
        "label": "Relationship",
        "required": true
      },
      {
        "id": "part4.line20a.cityTown",
        "type": "text",
        "label": "City Town",
        "required": true
      },
      {
        "id": "part4.line20b.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      },
      {
        "id": "part4.line20d.country",
        "type": "select",
        "label": "Country",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line42c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line42b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line42a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line45.countryOfBirth",
        "type": "select",
        "label": "Country Of Birth",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line44.dateOfBirth",
        "type": "date",
        "label": "Date Of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line43.relationship",
        "type": "text",
        "label": "Relationship",
        "required": true
      },
      {
        "id": "part4.line46a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line46b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line46c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line47.relationship",
        "type": "text",
        "label": "Relationship",
        "required": true
      },
      {
        "id": "part4.line48.dateOfBirth",
        "type": "date",
        "label": "Date Of Birth",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line20.yes",
        "type": "radio",
        "label": "Yes",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part4.line21d.dateExpired",
        "type": "date",
        "label": "Date Expired",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line21a.classOfAdmission",
        "type": "text",
        "label": "Class Of Admission",
        "required": false
      },
      {
        "id": "part4.line21b.arrivalDeparture",
        "type": "text",
        "label": "Arrival Departure",
        "required": false
      },
      {
        "id": "part4.line21c.dateOfArrival",
        "type": "date",
        "label": "Date Of Arrival",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line22.passportNumber",
        "type": "text",
        "label": "Passport Number",
        "required": false
      },
      {
        "id": "part4.line23.travelDocNumber",
        "type": "text",
        "label": "Travel Doc Number",
        "required": false
      },
      {
        "id": "part4.line24.countryOfIssuance",
        "type": "select",
        "label": "Country Of Issuance",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line25.expDate",
        "type": "date",
        "label": "Exp Date",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line26.nameOfCompany",
        "type": "text",
        "label": "Name Of Company",
        "required": true
      },
      {
        "id": "part4.line27.dateEmploymentBegan",
        "type": "date",
        "label": "Date Employment Began",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line28.no",
        "type": "radio",
        "label": "No",
        "required": false,
        "options": [
          {
            "value": "yes",
            "label": "Yes"
          },
          {
            "value": "no",
            "label": "No"
          }
        ]
      },
      {
        "id": "part4.line54.removal",
        "type": "text",
        "label": "Removal",
        "required": false
      },
      {
        "id": "part4.line55a.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part4.line55b.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      },
      {
        "id": "part4.line56.date",
        "type": "date",
        "label": "Date",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line55c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line57.unit",
        "type": "text",
        "label": "Unit",
        "required": false
      },
      {
        "id": "part4.line58a.dateFrom",
        "type": "date",
        "label": "Date From",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line58b.dateTo",
        "type": "date",
        "label": "Date To",
        "required": false,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part4.line61a.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part4.line61b.province",
        "type": "text",
        "label": "Province",
        "required": false
      },
      {
        "id": "part4.line61c.country",
        "type": "select",
        "label": "Country",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select Country"
          },
          {
            "value": "US",
            "label": "United States"
          },
          {
            "value": "CA",
            "label": "Canada"
          },
          {
            "value": "MX",
            "label": "Mexico"
          },
          {
            "value": "UK",
            "label": "United Kingdom"
          }
        ]
      },
      {
        "id": "part4.line60a.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part4.line60b.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      },
      {
        "id": "part4.line6a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line6b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line6c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line8c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part4.line8b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part4.line8a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part4.line53.daytimePhoneNumber",
        "type": "tel",
        "label": "Daytime Phone Number",
        "required": false,
        "placeholder": "(###) ###-####"
      }
    ]
  },
  {
    "id": "part5",
    "title": "Part 5",
    "description": "Complete all fields in Part 5",
    "questions": [
      {
        "id": "part5.line2a.familyName",
        "type": "text",
        "label": "Family Name (Last Name)",
        "required": true
      },
      {
        "id": "part5.line2b.givenName",
        "type": "text",
        "label": "Given Name (First Name)",
        "required": true
      },
      {
        "id": "part5.line2c.middleName",
        "type": "text",
        "label": "Middle Name",
        "required": true
      },
      {
        "id": "part5.line5.result",
        "type": "text",
        "label": "Result",
        "required": true
      },
      {
        "id": "part5.line4.dateFiled",
        "type": "date",
        "label": "Date Filed",
        "required": true,
        "placeholder": "MM/DD/YYYY"
      },
      {
        "id": "part5.line3a.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part5.line3b.state",
        "type": "select",
        "label": "State",
        "required": true,
        "options": [
          {
            "value": "",
            "label": "Select State"
          },
          {
            "value": "AL",
            "label": "Alabama"
          },
          {
            "value": "AK",
            "label": "Alaska"
          },
          {
            "value": "AZ",
            "label": "Arizona"
          },
          {
            "value": "CA",
            "label": "California"
          },
          {
            "value": "NY",
            "label": "New York"
          },
          {
            "value": "TX",
            "label": "Texas"
          }
        ]
      }
    ]
  },
  {
    "id": "part6",
    "title": "Part 6",
    "description": "Complete all fields in Part 6",
    "questions": [
      {
        "id": "part6.line3.daytimePhoneNumber",
        "type": "tel",
        "label": "Daytime Phone Number",
        "required": true,
        "placeholder": "(###) ###-####"
      },
      {
        "id": "part6.line5.email",
        "type": "email",
        "label": "Email",
        "required": true,
        "placeholder": "email@example.com"
      },
      {
        "id": "part6.line4.mobileNumber",
        "type": "text",
        "label": "Mobile Number",
        "required": true
      },
      {
        "id": "part6.line1b.language",
        "type": "text",
        "label": "Language",
        "required": false
      },
      {
        "id": "part6.line2.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": true
      }
    ]
  },
  {
    "id": "part7",
    "title": "Part 7",
    "description": "Complete all fields in Part 7",
    "questions": [
      {
        "id": "part7.line1b.interpreterGivenName",
        "type": "text",
        "label": "Interpreter Given Name",
        "required": true
      },
      {
        "id": "part7.line1a.interpreterFamilyName",
        "type": "text",
        "label": "Interpreter Family Name",
        "required": true
      },
      {
        "id": "part7.line2.interpreterBusinessorOrg",
        "type": "text",
        "label": "Interpreter Businessor Org",
        "required": true
      },
      {
        "id": "part7.line3.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part7.line4.interpreterDaytimeTelephone",
        "type": "tel",
        "label": "Interpreter Daytime Telephone",
        "required": true,
        "placeholder": "(###) ###-####"
      },
      {
        "id": "part7.line5.email",
        "type": "email",
        "label": "Email",
        "required": true,
        "placeholder": "email@example.com"
      }
    ]
  },
  {
    "id": "part8",
    "title": "Part 8",
    "description": "Complete all fields in Part 8",
    "questions": [
      {
        "id": "part8.line1b.preparerGivenName",
        "type": "text",
        "label": "Preparer Given Name",
        "required": true
      },
      {
        "id": "part8.line2.businessName",
        "type": "ssn",
        "label": "Business Name",
        "required": true,
        "placeholder": "###-##-####"
      },
      {
        "id": "part8.line1a.preparerFamilyName",
        "type": "text",
        "label": "Preparer Family Name",
        "required": true
      },
      {
        "id": "part8.line3.cityOrTown",
        "type": "text",
        "label": "City or Town",
        "required": true
      },
      {
        "id": "part8.line5.preparerFaxNumber",
        "type": "text",
        "label": "Preparer Fax Number",
        "required": true
      },
      {
        "id": "part8.line4.daytimePhoneNumber",
        "type": "tel",
        "label": "Daytime Phone Number",
        "required": true,
        "placeholder": "(###) ###-####"
      },
      {
        "id": "part8.line6.email",
        "type": "email",
        "label": "Email",
        "required": true,
        "placeholder": "email@example.com"
      },
      {
        "id": "part8.line7.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": true,
        "options": [
          {
            "value": "",
            "label": ""
          },
          {
            "value": "",
            "label": ""
          }
        ]
      },
      {
        "id": "part8.line7b.checkbox",
        "type": "checkbox",
        "label": "Checkbox",
        "required": false,
        "options": [
          {
            "value": "",
            "label": ""
          },
          {
            "value": "",
            "label": ""
          }
        ]
      }
    ]
  },
  {
    "id": "part9",
    "title": "Part 9",
    "description": "Complete all fields in Part 9",
    "questions": [
      {
        "id": "part9.line3a.pageNumber",
        "type": "text",
        "label": "Page Number",
        "required": false
      },
      {
        "id": "part9.line3b.partNumber",
        "type": "text",
        "label": "Part Number",
        "required": false
      },
      {
        "id": "part9.line3c.itemNumber",
        "type": "text",
        "label": "Item Number",
        "required": false
      },
      {
        "id": "part9.line3d.additionalInfo",
        "type": "text",
        "label": "Additional Info",
        "required": false
      },
      {
        "id": "part9.line4a.pageNumber",
        "type": "text",
        "label": "Page Number",
        "required": false
      },
      {
        "id": "part9.line4b.partNumber",
        "type": "text",
        "label": "Part Number",
        "required": false
      },
      {
        "id": "part9.line4c.itemNumber",
        "type": "text",
        "label": "Item Number",
        "required": false
      },
      {
        "id": "part9.line4d.additionalInfo",
        "type": "text",
        "label": "Additional Info",
        "required": false
      },
      {
        "id": "part9.line5a.pageNumber",
        "type": "text",
        "label": "Page Number",
        "required": false
      },
      {
        "id": "part9.line5b.partNumber",
        "type": "text",
        "label": "Part Number",
        "required": false
      },
      {
        "id": "part9.line5c.itemNumber",
        "type": "text",
        "label": "Item Number",
        "required": false
      },
      {
        "id": "part9.line6a.pageNumber",
        "type": "text",
        "label": "Page Number",
        "required": false
      },
      {
        "id": "part9.line6b.partNumber",
        "type": "text",
        "label": "Part Number",
        "required": false
      },
      {
        "id": "part9.line6c.itemNumber",
        "type": "text",
        "label": "Item Number",
        "required": false
      },
      {
        "id": "part9.line6d.additionalInfo",
        "type": "text",
        "label": "Additional Info",
        "required": false
      },
      {
        "id": "part9.line5d.additionalInfo",
        "type": "text",
        "label": "Additional Info",
        "required": false
      },
      {
        "id": "part9.line9a.pageNumber",
        "type": "text",
        "label": "Page Number",
        "required": false
      },
      {
        "id": "part9.line7b.partNumber",
        "type": "text",
        "label": "Part Number",
        "required": false
      },
      {
        "id": "part9.line7c.itemNumber",
        "type": "text",
        "label": "Item Number",
        "required": false
      },
      {
        "id": "part9.line7d.additionalInfo",
        "type": "text",
        "label": "Additional Info",
        "required": false
      }
    ]
  }
],
  pdfFieldMappings: [],
  requiredDocuments: [],
  instructions: [
    "Complete all applicable sections",
    "Answer all questions accurately",
    "Sign and date the form"
  ],
  status: "active"
};
