/**
 * I-765 Form Definition
 * Generated with AI: 2025-12-24T19:27:51.081Z
 */

import { FormDefinition } from "./forms-registry";
import { I_765_FIELD_MAPPINGS } from "./form-mappings/i-765-field-mappings";
import { US_STATES } from "./constants";

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
      title: "Part 2: Full Legal Name",
      description:
        "Provide your full legal name as it appears on official documents.",
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
      id: "part2-attorney-representation",
      title: "Part 2: Attorney or Accredited Representative",
      description:
        "Indicate if you have an attorney or accredited representative.",
      questions: [
        {
          id: "part2.attorneyFormG28Attached",
          type: "checkbox",
          label: "Form G-28 is attached",
          helpText: "Check this box if Form G-28 is attached.",
        },
        {
          id: "part2.attorneyOrRepresentativeUSCISOnlineNumber",
          type: "text",
          label: "USCIS Online Account Number (if any)",
          helpText: "Provide the USCIS Online Account Number if applicable.",
        },
      ],
    },
    {
      id: "part2-other-names-used",
      title: "Part 2: Other Names Used",
      description: "List any other names you have used, including maiden name.",
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
      description: "Provide your current U.S. mailing address.",
      questions: [
        {
          id: "part2.usMailingAddress.sameAsPhysicalAddress",
          type: "radio",
          label: "Is your mailing address the same as your physical address?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.usMailingAddress.streetNumberName",
          type: "text",
          label: "5.b. Street Number and Name",
          required: true,
        },
        {
          id: "part2.usMailingAddress.unitType",
          type: "select",
          label: "5.c. Unit Type",
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
          label: "5.d. Unit Number",
        },
        {
          id: "part2.usMailingAddress.cityOrTown",
          type: "text",
          label: "5.e. City or Town",
          required: true,
        },
        {
          id: "part2.usMailingAddress.state",
          type: "select",
          label: "5.f. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part2.usMailingAddress.zipCode",
          type: "text",
          label: "5.g. ZIP Code",
          required: true,
        },
        {
          id: "part2.usMailingAddress.inCareOfName",
          type: "text",
          label: "5.a. In Care Of Name",
          helpText:
            "Provide the name of the person who receives mail at this address, if applicable.",
        },
      ],
    },
    {
      id: "part2-us-physical-address",
      title: "Part 2: U.S. Physical Address",
      description: "Provide your current U.S. physical address.",
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
          type: "checkbox",
          label: "Consent for Disclosure",
          helpText:
            "Check this box if you consent to the disclosure of your information.",
        },
        {
          id: "part2.otherInformation.alienNumber",
          type: "text",
          label: "8. Alien Registration Number (A-Number)",
          helpText: "Enter your A-Number if you have one.",
        },
        {
          id: "part2.otherInformation.uscisOnlineAccountNumber",
          type: "text",
          label: "9. USCIS Online Account Number (if any)",
          helpText: "Provide your USCIS Online Account Number if applicable.",
        },
        {
          id: "part2.otherInformation.sex",
          type: "radio",
          label: "10. Sex",
          required: true,
          options: [
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ],
        },
        {
          id: "part2.otherInformation.maritalStatus",
          type: "select",
          label: "11. Marital Status",
          options: [
            { value: "single", label: "Single" },
            { value: "married", label: "Married" },
            { value: "divorced", label: "Divorced" },
            { value: "widowed", label: "Widowed" },
          ],
        },
        {
          id: "part2.otherInformation.previouslyFiledFormI765",
          type: "radio",
          label: "12. Have you previously filed Form I-765?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.otherInformation.fathersName.familyName",
          type: "text",
          label: "13.a. Father's Family Name (Last Name)",
        },
        {
          id: "part2.otherInformation.fathersName.givenName",
          type: "text",
          label: "13.b. Father's Given Name (First Name)",
        },
        {
          id: "part2.otherInformation.mothersName.familyName",
          type: "text",
          label: "14.a. Mother's Family Name (Last Name)",
        },
        {
          id: "part2.otherInformation.mothersName.givenName",
          type: "text",
          label: "14.b. Mother's Given Name (First Name)",
        },
        {
          id: "part2.countriesOfCitizenshipOrNationality.country",
          type: "text",
          label: "15. Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part2.otherInformation.issueSSN",
          type: "radio",
          label: "16. Do you want the SSA to issue you a Social Security card?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.otherInformation.ssn",
          type: "ssn",
          label: "17. U.S. Social Security Number (if any)",
          placeholder: "###-##-####",
          helpText: "Leave blank if you do not have one.",
        },
        {
          id: "part2.otherInformation.ssaIssuedSSN",
          type: "radio",
          label: "18. Has the SSA ever issued you a Social Security card?",
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
        "Provide details about your most recent arrival in the United States.",
      questions: [
        {
          id: "part2.lastArrival.travelDocumentNumber",
          type: "text",
          label: "19. Travel Document Number (if any)",
        },
        {
          id: "part2.lastArrival.dateOfLastEntry",
          type: "date",
          label: "20. Date of Last Entry (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.lastArrival.expirationDate",
          type: "date",
          label: "21. Passport Expiration Date (mm/dd/yyyy)",
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.lastArrival.countryOfIssuance",
          type: "text",
          label: "22. Country of Issuance for Passport or Travel Document",
        },
        {
          id: "part2.lastArrival.passportNumber",
          type: "text",
          label: "23. Passport Number",
        },
        {
          id: "part2.lastArrival.statusLastEntry",
          type: "text",
          label: "24. Status at Last Entry",
        },
        {
          id: "part2.lastArrival.currentStatus",
          type: "text",
          label: "25. Current Immigration Status",
        },
        {
          id: "part2.lastArrival.sevisNumber",
          type: "text",
          label: "26. SEVIS Number (if any)",
        },
        {
          id: "part2.lastArrival.i94Number",
          type: "text",
          label: "27. I-94 Arrival-Departure Record Number",
        },
        {
          id: "part2.lastArrival.placeOfLastArrival",
          type: "text",
          label: "28. Place of Last Arrival",
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
          id: "part2.eligibilityCategory.eligibilityCategory",
          type: "text",
          label: "29. Eligibility Category",
          required: true,
          helpText:
            "Enter the eligibility category that applies to your situation.",
        },
        {
          id: "part2.eligibilityCategory.employerName",
          type: "text",
          label: "30. Employer's Name (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.everifyIdNumber",
          type: "text",
          label: "31. E-Verify Company Identification Number (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.arrestedOrConvicted",
          type: "radio",
          label: "32. Have you ever been arrested or convicted of a crime?",
          options: [
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: "part2.eligibilityCategory.receiptNumber",
          type: "text",
          label: "33. Receipt Number (if applicable)",
        },
        {
          id: "part2.eligibilityCategory.degree",
          type: "text",
          label: "34. Degree (if applicable)",
        },
      ],
    },
    {
      id: "part2-place-of-birth",
      title: "Part 2: Place of Birth",
      description: "Provide details about your place of birth.",
      questions: [
        {
          id: "part2.placeOfBirth.dateOfBirth",
          type: "date",
          label: "35. Date of Birth (mm/dd/yyyy)",
          required: true,
          placeholder: "MM/DD/YYYY",
        },
        {
          id: "part2.placeOfBirth.countryOfBirth",
          type: "text",
          label: "36. Country of Birth",
          required: true,
        },
        {
          id: "part2.placeOfBirth.cityTownOfBirth",
          type: "text",
          label: "37. City or Town of Birth",
        },
        {
          id: "part2.placeOfBirth.stateProvinceOfBirth",
          type: "text",
          label: "38. State or Province of Birth",
        },
      ],
    },

    {
      id: "part1-reason-for-applying",
      title: "Part 1: Reason for Applying",
      description:
        "Indicate the reason you are applying for employment authorization.",
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
                "2. Replacement (of lost employment authorization document)",
            },
            {
              value: "3",
              label:
                "3. Renewal of my permission to accept employment (attach a copy of your previous employment authorization document)",
            },
          ],
          helpText:
            "Select the option that best describes your situation. If you are renewing, ensure to attach a copy of your previous employment authorization document.",
        },
      ],
    },

    {
      id: "part3-applicant-statement",
      title: "Part 3: Applicant's Statement",
      description:
        "Provide details about the use of an interpreter or preparer.",
      questions: [
        {
          id: "part3.applicantStatement.interpreterUsed",
          type: "radio",
          label: "1. Did you use an interpreter to complete this application?",
          required: true,
          options: [
            { value: "A", label: "Yes" },
            { value: "B", label: "No" },
          ],
          helpText:
            "Select 'Yes' if someone helped you translate or interpret the form.",
        },
        {
          id: "part3.applicantStatement.languageFluent",
          type: "text",
          label: "1.b. Language in which you are fluent",
          helpText: "Specify the language you are fluent in, if applicable.",
        },
        {
          id: "part3.applicantStatement.preparerUsed",
          type: "radio",
          label: "2. Did someone else prepare this application for you?",
          required: true,
          options: [
            { value: "C", label: "Yes" },
            { value: "D", label: "No" },
          ],
          helpText:
            "Select 'Yes' if someone else filled out the form on your behalf.",
        },
        {
          id: "part3.applicantStatement.preparerName",
          type: "text",
          label: "2.a. Preparer's Full Name",
          helpText:
            "Enter the full name of the person who prepared the form, if applicable.",
        },
      ],
    },
    // {
    //   id: "part3-applicant-signature",
    //   title: "Part 3: Applicant's Signature",
    //   description: "Sign and date the application.",
    //   questions: [
    //     {
    //       id: "part3.applicantSignature.dateOfSignature",
    //       type: "date",
    //       label: "7.b. Date of Signature (mm/dd/yyyy)",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //       helpText: "Enter the date you are signing this form.",
    //     },
    //     {
    //       id: "part3.applicantSignature.signature",
    //       type: "text",
    //       label: "7.a. Signature",
    //       required: true,
    //       helpText: "Sign your name as it appears on your official documents.",
    //     },
    //   ],
    // },
    {
      id: "part3-contact-information",
      title: "Part 3: Contact Information",
      description: "Provide your contact details.",
      questions: [
        {
          id: "part3.contactInformation.daytimePhoneNumber",
          type: "tel",
          label: "3. Daytime Phone Number",
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
          helpText: "Provide your email address for electronic communication.",
        },
        {
          id: "part3.contactInformation.abcSettlement",
          type: "radio",
          label: "6. Are you eligible for ABC Settlement benefits?",
          options: [
            { value: "A", label: "Yes" },
            { value: "B", label: "No" },
          ],
          helpText:
            "Select 'Yes' if you are eligible for benefits under the ABC Settlement agreement.",
        },
      ],
    },

    {
      id: "part4-interpreter-information",
      title: "Part 4: Interpreter's Information",
      description:
        "Provide the interpreter's personal and contact information.",
      questions: [
        {
          id: "part4.interpreterInformation.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part4.interpreterInformation.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
        {
          id: "part4.interpreterInformation.businessOrOrganizationName",
          type: "text",
          label: "2. Business or Organization Name",
          helpText:
            "Enter the name of the business or organization the interpreter is affiliated with, if applicable.",
        },
      ],
    },
    {
      id: "part4-interpreter-contact-information",
      title: "Part 4: Interpreter's Contact Information",
      description: "Enter the interpreter's contact details.",
      questions: [
        {
          id: "part4.interpreterContactInformation.daytimeTelephone",
          type: "tel",
          label: "4. Daytime Telephone Number",
          placeholder: "(555) 123-4567",
          required: true,
        },
        {
          id: "part4.interpreterMobileTelephoneNumber",
          type: "tel",
          label: "5. Mobile Telephone Number",
          placeholder: "(555) 123-4567",
        },
        {
          id: "part4.interpreterEmailAddress",
          type: "email",
          label: "6. Email Address",
          placeholder: "example@email.com",
        },
        {
          id: "part4.interpreterLanguage",
          type: "text",
          label: "Language",
          required: true,
          helpText:
            "Specify the language in which the interpreter is providing assistance.",
        },
      ],
    },
    {
      id: "part4-interpreter-address",
      title: "Part 4: Interpreter's Address",
      description: "Provide the interpreter's physical address.",
      questions: [
        {
          id: "part4.interpreterStreetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
        },
        {
          id: "part4.interpreterUnit",
          type: "select",
          label: "3.b. Unit Type",
          options: [
            { value: "", label: "Select if applicable" },
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part4.interpreterAptSteFlrNumber",
          type: "text",
          label: "3.b. Unit Number",
        },
        {
          id: "part4.interpreterCityOrTown",
          type: "text",
          label: "3.c. City or Town",
          required: true,
        },
        {
          id: "part4.interpreterState",
          type: "select",
          label: "3.d. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part4.interpreterZipCode",
          type: "text",
          label: "3.e. ZIP Code",
          required: true,
        },
        {
          id: "part4.interpreterProvince",
          type: "text",
          label: "3.f. Province",
          helpText: "If applicable, provide the province.",
        },
        {
          id: "part4.interpreterPostalCode",
          type: "text",
          label: "3.g. Postal Code",
          helpText: "Enter the postal code if outside the U.S.",
        },
        {
          id: "part4.interpreterCountry",
          type: "text",
          label: "3.h. Country",
          required: true,
        },
      ],
    },
    // {
    //   id: "part4-interpreter-signature",
    //   title: "Part 4: Interpreter's Signature",
    //   description: "The interpreter must sign and date this section.",
    //   questions: [
    //     {
    //       id: "part4.interpreterSignature",
    //       type: "button",
    //       label: "6.a. Signature of Interpreter",
    //       required: true,
    //     },
    //     {
    //       id: "part4.interpreterDateOfSignature",
    //       type: "date",
    //       label: "6.b. Date of Signature (mm/dd/yyyy)",
    //       required: true,
    //       placeholder: "MM/DD/YYYY",
    //     },
    //   ],
    // },

    {
      id: "part5-preparer-info",
      title: "Part 5: Preparer's Information",
      description:
        "Provide the details of the person who prepared this application, if applicable.",
      questions: [
        {
          id: "part5.preparerFamilyName",
          type: "text",
          label: "1.a. Preparer's Family Name (Last Name)",
          required: true,
        },
        {
          id: "part5.preparerGivenName",
          type: "text",
          label: "1.b. Preparer's Given Name (First Name)",
          required: true,
        },
        {
          id: "part5.preparerBusinessName",
          type: "text",
          label: "2. Preparer's Business or Organization Name",
        },
        {
          id: "part5.preparerStreetNumberName",
          type: "text",
          label: "3.a. Street Number and Name",
          required: true,
        },
        {
          id: "part5.preparerUnit",
          type: "select",
          label: "3.b. Unit Type",
          options: [
            { value: "apt", label: "Apt." },
            { value: "ste", label: "Ste." },
            { value: "flr", label: "Flr." },
          ],
        },
        {
          id: "part5.preparerAptSteFlrNumber",
          type: "text",
          label: "3.c. Unit Number",
        },
        {
          id: "part5.preparerCityOrTown",
          type: "text",
          label: "3.d. City or Town",
          required: true,
        },
        {
          id: "part5.preparerState",
          type: "select",
          label: "3.e. State",
          options: US_STATES,
          required: true,
        },
        {
          id: "part5.preparerZipCode",
          type: "text",
          label: "3.f. ZIP Code",
          required: true,
        },
        {
          id: "part5.preparerProvince",
          type: "text",
          label: "3.g. Province",
          helpText: "Complete if outside the U.S.",
        },
        {
          id: "part5.preparerPostalCode",
          type: "text",
          label: "3.h. Postal Code",
          helpText: "Complete if outside the U.S.",
        },
        {
          id: "part5.preparerCountry",
          type: "text",
          label: "3.i. Country",
          required: true,
        },
        {
          id: "part5.preparerDaytimePhoneNumber",
          type: "tel",
          label: "4. Preparer's Daytime Phone Number",
          placeholder: "(555) 123-4567",
          required: true,
        },
        {
          id: "part5.preparerFaxNumber",
          type: "tel",
          label: "5. Preparer's Fax Number",
          placeholder: "(555) 123-4567",
        },
        {
          id: "part5.preparerEmailAddress",
          type: "email",
          label: "6. Preparer's Email Address",
          placeholder: "example@email.com",
        },
        {
          id: "part5.preparerStatement",
          type: "radio",
          label: "7. Preparer's Statement",
          options: [
            {
              value: "A",
              label:
                "I am not an attorney or accredited representative but have prepared this application on behalf of the applicant.",
            },
            {
              value: "B",
              label:
                "I am an attorney or accredited representative and my representation of the applicant in this case extends/does not extend beyond the preparation of this application.",
            },
          ],
        },
        // {
        //   id: "part5.preparerSignature",
        //   type: "text",
        //   label: "8.a. Preparer's Signature",
        //   required: true,
        // },
        // {
        //   id: "part5.preparerDateOfSignature",
        //   type: "date",
        //   label: "8.b. Date of Signature (mm/dd/yyyy)",
        //   required: true,
        // },
      ],
    },

    {
      id: "part6-additional-information",
      title: "Part 6: Additional Information",
      description:
        "Provide additional information if you need extra space to complete any item within this application.",
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
          helpText: "Enter your A-Number, if any.",
        },
        {
          id: "part6.additionalInformationPageNumber",
          type: "text",
          label: "3.a. Page Number",
          helpText:
            "Enter the page number from the form where additional information is needed.",
        },
        {
          id: "part6.additionalInformationPartNumber",
          type: "text",
          label: "3.b. Part Number",
          helpText:
            "Enter the part number from the form where additional information is needed.",
        },
        {
          id: "part6.additionalInformationItemNumber",
          type: "text",
          label: "3.c. Item Number",
          helpText:
            "Enter the item number from the form where additional information is needed.",
        },
        {
          id: "part6.additionalInformation",
          type: "textarea",
          label: "4.d. Additional Information",
          helpText:
            "Provide any additional information that does not fit in the standard fields of this form.",
        },
      ],
    },
  ],
  pdfFieldMappings: I_765_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default I_765_DEFINITION;
