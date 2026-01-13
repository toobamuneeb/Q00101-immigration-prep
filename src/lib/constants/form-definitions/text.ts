const I_129_DEFINITION: FormDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for H-1B, L-1, O-1, and other temporary work visas",
  category: "work_authorization",
  estimatedTime: "90-120 minutes",
  filingFee: 460,
  price: 60,
  status: "active",
  sections: [

    {
      id: "part1_petitioner",
      title: "Part 1. Petitioner Information",
      questions: [
        {
          id: "petitioner_type",
          type: "radio",
          label: "Petitioner Type",
          required: true,
          options: [
            { value: "INDIVIDUAL", label: "Individual" },
            { value: "COMPANY", label: "Company/Organization" }
          ]
        },
        {
          id: "individual_last_name",
          type: "text",
          label: "Individual Petitioner - Family Name (Last Name)",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "INDIVIDUAL" }
        },
        {
          id: "individual_first_name",
          type: "text",
          label: "Individual Petitioner - Given Name (First Name)",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "INDIVIDUAL" }
        },
        {
          id: "individual_middle_name",
          type: "text",
          label: "Individual Petitioner - Middle Name",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "INDIVIDUAL" }
        },
        {
          id: "company_name",
          type: "text",
          label: "Company or Organization Name",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "COMPANY" }
        },
        {
          id: "mailing_care_of",
          type: "text",
          label: "In Care Of Name",
          required: false
        },
        {
          id: "mailing_street",
          type: "text",
          label: "Street Number and Name",
          required: true
        },
        {
          id: "mailing_unit_type",
          type: "radio",
          label: "Unit Type",
          required: true,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "mailing_unit_number",
          type: "text",
          label: "Unit Number",
          required: false
        },
        {
          id: "mailing_city",
          type: "text",
          label: "City or Town",
          required: true
        },
        {
          id: "mailing_state",
          type: "text",
          label: "State",
          required: true
        },
        {
          id: "mailing_zip",
          type: "text",
          label: "ZIP Code",
          required: true
        },
        {
          id: "mailing_province",
          type: "text",
          label: "Province",
          required: false
        },
        {
          id: "mailing_postal_code",
          type: "text",
          label: "Postal Code",
          required: false
        },
        {
          id: "mailing_country",
          type: "text",
          label: "Country",
          required: true
        },
        {
          id: "daytime_phone",
          type: "text",
          label: "Daytime Telephone Number",
          required: true
        },
        {
          id: "mobile_phone",
          type: "text",
          label: "Mobile Telephone Number",
          required: false
        },
        {
          id: "email_address",
          type: "email",
          label: "Email Address",
          required: false
        },
        {
          id: "fein",
          type: "text",
          label: "Federal Employer Identification Number (FEIN)",
          required: true
        },
        {
          id: "nonprofit_question",
          type: "text",
          label: "Nonprofit Organization Question",
          required: true
        },
        {
          id: "individual_tax_number",
          type: "text",
          label: "Individual IRS Tax Number",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "INDIVIDUAL" }
        },
        {
          id: "petitioner_ssn",
          type: "text",
          label: "U.S. Social Security Number",
          required: false,
          conditional: { dependsOn: "petitioner_type", value: "INDIVIDUAL" }
        }
      ]
    },
    // PART 2 - PETITION INFORMATION
    {
      id: "part2_petition",
      title: "Part 2. Information About This Petition",
      questions: [
        {
          id: "requested_classification",
          type: "text",
          label: "Requested Nonimmigrant Classification",
          required: true,
          helpText: "Write classification symbol (e.g., H-1B, L-1A)"
        },
        {
          id: "basis_classification",
          type: "radio",
          label: "Basis for Classification",
          required: true,
          options: [
            { value: "A", label: "New employment" },
            { value: "B", label: "Continuation of previously approved employment without change with the same employer" },
            { value: "C", label: "Change in previously approved employment" },
            { value: "D", label: "New concurrent employment" },
            { value: "E", label: "Change of employer" },
            { value: "F", label: "Amended petition" }
          ]
        },
        {
          id: "previous_receipt",
          type: "text",
          label: "Previous Petition Receipt Number",
          required: false
        },
        {
          id: "requested_action",
          type: "radio",
          label: "Requested Action",
          required: true,
          options: [
            { value: "A", label: "Notify the office in Part 4 for visa/admission" },
            { value: "B", label: "Change status and extend stay" },
            { value: "C", label: "Extend stay" },
            { value: "D", label: "Amend stay" },
            { value: "E", label: "Extend status based on free trade agreement" },
            { value: "F", label: "Change status based on free trade agreement" }
          ]
        },
        {
          id: "total_workers",
          type: "number",
          label: "Total Number of Workers",
          required: true,
          min: 1
        }
      ]
    },
    // PART 3 - BENEFICIARY INFORMATION
    {
      id: "part3_beneficiary",
      title: "Part 3. Beneficiary Information",
      questions: [
        {
          id: "beneficiary_type",
          type: "radio",
          label: "Type of Beneficiaries Requested",
          required: true,
          options: [
            { value: "INDIVIDUAL", label: "Individual" },
            { value: "GROUP", label: "Entertainment Group" }
          ]
        },
        {
          id: "group_name",
          type: "text",
          label: "Entertainment Group Name",
          required: false,
          conditional: { dependsOn: "beneficiary_type", value: "GROUP" }
        },
        {
          id: "beneficiary_last_name",
          type: "text",
          label: "Family Name (Last Name)",
          required: true
        },
        {
          id: "beneficiary_first_name",
          type: "text",
          label: "Given Name (First Name)",
          required: true
        },
        {
          id: "beneficiary_middle_name",
          type: "text",
          label: "Middle Name",
          required: false
        },
        {
          id: "other_names",
          type: "text",
          label: "Other Names Used",
          required: false
        },
        {
          id: "date_of_birth",
          type: "date",
          label: "Date of Birth",
          required: true
        },
        {
          id: "sex",
          type: "radio",
          label: "Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" }
          ]
        },
        {
          id: "beneficiary_ssn",
          type: "text",
          label: "U.S. Social Security Number",
          required: false
        },
        {
          id: "a_number",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: false
        },
        {
          id: "country_of_birth",
          type: "text",
          label: "Country of Birth",
          required: true
        },
        {
          id: "province_of_birth",
          type: "text",
          label: "Province of Birth",
          required: false
        },
        {
          id: "country_of_citizenship",
          type: "text",
          label: "Country of Citizenship or Nationality",
          required: true
        },
        {
          id: "in_us",
          type: "radio",
          label: "Is beneficiary in the United States?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "i94_number",
          type: "text",
          label: "I-94 Arrival-Departure Record Number",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "last_arrival_date",
          type: "date",
          label: "Date of Last Arrival",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "passport_number",
          type: "text",
          label: "Passport or Travel Document Number",
          required: true
        },
        {
          id: "passport_issue_date",
          type: "date",
          label: "Passport Issue Date",
          required: true
        },
        {
          id: "passport_expiry_date",
          type: "date",
          label: "Passport Expiry Date",
          required: true
        },
        {
          id: "passport_country",
          type: "text",
          label: "Passport Country of Issuance",
          required: true
        },
        {
          id: "current_status",
          type: "text",
          label: "Current Nonimmigrant Status",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "status_expires",
          type: "date",
          label: "Date Status Expires",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "us_address_street",
          type: "text",
          label: "Current U.S. Address - Street",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "us_address_unit_type",
          type: "radio",
          label: "U.S. Address Unit Type",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "us_address_unit_number",
          type: "text",
          label: "U.S. Address Unit Number",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "us_address_city",
          type: "text",
          label: "U.S. Address City",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "us_address_state",
          type: "text",
          label: "U.S. Address State",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "us_address_zip",
          type: "text",
          label: "U.S. Address ZIP Code",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "sevis_number",
          type: "text",
          label: "SEVIS Number",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        },
        {
          id: "ead_number",
          type: "text",
          label: "EAD Number",
          required: false,
          conditional: { dependsOn: "in_us", value: "YES" }
        }
      ]
    },
    // PART 4 - PROCESSING INFORMATION
    {
      id: "part4_processing",
      title: "Part 4. Processing Information",
      questions: [
        {
          id: "office_type",
          type: "radio",
          label: "Type of Office",
          required: false,
          options: [
            { value: "CONSULATE", label: "Consulate" },
            { value: "POE", label: "Port of Entry" },
            { value: "PFI", label: "Pre-flight inspection" }
          ]
        },
        {
          id: "office_city",
          type: "text",
          label: "Office City",
          required: false
        },
        {
          id: "office_state_country",
          type: "text",
          label: "Office State/Country",
          required: false
        },
        {
          id: "valid_passport",
          type: "radio",
          label: "Does each person have valid passport?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "other_petitions",
          type: "radio",
          label: "Filing other petitions?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "other_petitions_count",
          type: "number",
          label: "Number of other petitions",
          required: false,
          conditional: { dependsOn: "other_petitions", value: "YES" }
        },
        {
          id: "replacement_i94",
          type: "radio",
          label: "Filing replacement I-94?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "replacement_i94_count",
          type: "number",
          label: "Number of I-94 applications",
          required: false,
          conditional: { dependsOn: "replacement_i94", value: "YES" }
        },
        {
          id: "filing_dependents",
          type: "radio",
          label: "Filing for dependents?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "dependents_count",
          type: "number",
          label: "Number of dependents",
          required: false,
          conditional: { dependsOn: "filing_dependents", value: "YES" }
        },
        {
          id: "removal_proceedings",
          type: "radio",
          label: "Beneficiary in removal proceedings?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "immigrant_petition",
          type: "radio",
          label: "Filed immigrant petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "previous_nonimmigrant",
          type: "radio",
          label: "Previous nonimmigrant petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "filing_new",
          type: "radio",
          label: "Filing new petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "given_classification",
          type: "radio",
          label: "Previously given classification?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "denied_classification",
          type: "radio",
          label: "Previously denied classification?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "group_year",
          type: "radio",
          label: "With group less than 1 year?",
          required: false,
          conditional: { dependsOn: "beneficiary_type", value: "GROUP" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "j1_exchange",
          type: "radio",
          label: "J-1 exchange visitor?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "j1_dates",
          type: "text",
          label: "J-1 status dates",
          required: false,
          conditional: { dependsOn: "j1_exchange", value: "YES" }
        },
        {
          id: "foreign_address_street",
          type: "text",
          label: "Foreign Address - Street",
          required: false
        },
        {
          id: "foreign_unit_type",
          type: "radio",
          label: "Foreign Address Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "foreign_unit_number",
          type: "text",
          label: "Foreign Address Unit Number",
          required: false
        },
        {
          id: "foreign_city",
          type: "text",
          label: "Foreign Address City",
          required: false
        },
        {
          id: "foreign_state",
          type: "text",
          label: "Foreign Address State",
          required: false
        },
        {
          id: "foreign_country",
          type: "text",
          label: "Foreign Address Country",
          required: false
        },
        {
          id: "foreign_postal_code",
          type: "text",
          label: "Foreign Address Postal Code",
          required: false
        },
        {
          id: "foreign_province",
          type: "text",
          label: "Foreign Address Province",
          required: false
        }
      ]
    },
    // PART 5 - EMPLOYMENT INFORMATION
    {
      id: "part5_employment",
      title: "Part 5. Basic Information About Proposed Employment",
      questions: [
        {
          id: "job_title",
          type: "text",
          label: "Job Title",
          required: true
        },
        {
          id: "lca_case_number",
          type: "text",
          label: "LCA or ETA Case Number",
          required: false
        },
        {
          id: "address1_street",
          type: "text",
          label: "Address 1 - Street",
          required: false
        },
        {
          id: "address1_unit_type",
          type: "radio",
          label: "Address 1 Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "address1_unit_number",
          type: "text",
          label: "Address 1 Unit Number",
          required: false
        },
        {
          id: "address1_city",
          type: "text",
          label: "Address 1 City",
          required: false
        },
        {
          id: "address1_state",
          type: "text",
          label: "Address 1 State",
          required: false
        },
        {
          id: "address1_zip",
          type: "text",
          label: "Address 1 ZIP Code",
          required: false
        },
        {
          id: "address1_third_party",
          type: "radio",
          label: "Address 1 third-party?",
          required: false,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "address1_third_party_name",
          type: "text",
          label: "Third-party name for Address 1",
          required: false,
          conditional: { dependsOn: "address1_third_party", value: "YES" }
        },
        {
          id: "address2_street",
          type: "text",
          label: "Address 2 - Street",
          required: false
        },
        {
          id: "address2_unit_type",
          type: "radio",
          label: "Address 2 Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "address2_unit_number",
          type: "text",
          label: "Address 2 Unit Number",
          required: false
        },
        {
          id: "address2_city",
          type: "text",
          label: "Address 2 City",
          required: false
        },
        {
          id: "address2_state",
          type: "text",
          label: "Address 2 State",
          required: false
        },
        {
          id: "address2_zip",
          type: "text",
          label: "Address 2 ZIP Code",
          required: false
        },
        {
          id: "address2_third_party",
          type: "radio",
          label: "Address 2 third-party?",
          required: false,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "address2_third_party_name",
          type: "text",
          label: "Third-party name for Address 2",
          required: false,
          conditional: { dependsOn: "address2_third_party", value: "YES" }
        },
        {
          id: "include_itinerary",
          type: "radio",
          label: "Include itinerary?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "work_off_site",
          type: "radio",
          label: "Work off-site?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "work_cnmi",
          type: "radio",
          label: "Work exclusively in CNMI?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "full_time",
          type: "radio",
          label: "Full-time position?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "hours_per_week",
          type: "number",
          label: "Hours per week",
          required: false,
          conditional: { dependsOn: "full_time", value: "NO" }
        },
        {
          id: "wages_amount",
          type: "currency",
          label: "Wages Amount",
          required: true
        },
        {
          id: "wages_period",
          type: "select",
          label: "Wages Period",
          required: true,
          options: ["Hour", "Week", "Month", "Year"]
        },
        {
          id: "other_compensation",
          type: "text",
          label: "Other Compensation",
          required: false
        },
        {
          id: "employment_start",
          type: "date",
          label: "Employment Start Date",
          required: true
        },
        {
          id: "employment_end",
          type: "date",
          label: "Employment End Date",
          required: true
        },
        {
          id: "business_type",
          type: "text",
          label: "Type of Business",
          required: true
        },
        {
          id: "year_established",
          type: "number",
          label: "Year Established",
          required: true
        },
        {
          id: "employees_us",
          type: "number",
          label: "Employees in U.S.",
          required: true
        },
        {
          id: "small_business",
          type: "radio",
          label: "25 or fewer employees?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "gross_income",
          type: "currency",
          label: "Gross Annual Income",
          required: false
        },
        {
          id: "net_income",
          type: "currency",
          label: "Net Annual Income",
          required: false
        }
      ]
    },
    // PART 6 - EXPORT CONTROL
    {
      id: "part6_export",
      title: "Part 6. Export Control Certification",
      questions: [
        {
          id: "export_certification",
          type: "radio",
          label: "Export Control Certification",
          required: false,
          conditional: { dependsOn: "requested_classification", value: ["H-1B", "H-1B1", "L-1", "O-1A"] },
          options: [
            { value: "1", label: "License not required" },
            { value: "2", label: "License required" }
          ]
        }
      ]
    },
    // PART 7 - PETITIONER DECLARATION
    {
      id: "part7_declaration",
      title: "Part 7. Petitioner Declaration and Signature",
      questions: [
        {
          id: "signatory_last_name",
          type: "text",
          label: "Signatory - Family Name",
          required: true
        },
        {
          id: "signatory_first_name",
          type: "text",
          label: "Signatory - Given Name",
          required: true
        },
        {
          id: "signatory_title",
          type: "text",
          label: "Title",
          required: true
        },
        {
          id: "signatory_signature",
          type: "signature",
          label: "Signature",
          required: true
        },
        {
          id: "signatory_date",
          type: "date",
          label: "Date of Signature",
          required: true
        },
        {
          id: "signatory_phone",
          type: "text",
          label: "Daytime Phone",
          required: true
        },
        {
          id: "signatory_email",
          type: "email",
          label: "Email Address",
          required: false
        }
      ]
    },
    // PART 8 - PREPARER INFORMATION
    {
      id: "part8_preparer",
      title: "Part 8. Preparer Information",
      questions: [
        {
          id: "preparer_last_name",
          type: "text",
          label: "Preparer - Family Name",
          required: false
        },
        {
          id: "preparer_first_name",
          type: "text",
          label: "Preparer - Given Name",
          required: false
        },
        {
          id: "preparer_business",
          type: "text",
          label: "Preparer Business Name",
          required: false
        },
        {
          id: "preparer_street",
          type: "text",
          label: "Preparer Address - Street",
          required: false
        },
        {
          id: "preparer_unit_type",
          type: "radio",
          label: "Preparer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "preparer_unit_number",
          type: "text",
          label: "Preparer Unit Number",
          required: false
        },
        {
          id: "preparer_city",
          type: "text",
          label: "Preparer City",
          required: false
        },
        {
          id: "preparer_state",
          type: "text",
          label: "Preparer State",
          required: false
        },
        {
          id: "preparer_zip",
          type: "text",
          label: "Preparer ZIP Code",
          required: false
        },
        {
          id: "preparer_province",
          type: "text",
          label: "Preparer Province",
          required: false
        },
        {
          id: "preparer_postal_code",
          type: "text",
          label: "Preparer Postal Code",
          required: false
        },
        {
          id: "preparer_country",
          type: "text",
          label: "Preparer Country",
          required: false
        },
        {
          id: "preparer_phone",
          type: "text",
          label: "Preparer Daytime Phone",
          required: false
        },
        {
          id: "preparer_fax",
          type: "text",
          label: "Preparer Fax",
          required: false
        },
        {
          id: "preparer_email",
          type: "email",
          label: "Preparer Email",
          required: false
        },
        {
          id: "preparer_signature",
          type: "signature",
          label: "Preparer Signature",
          required: false
        },
        {
          id: "preparer_signature_date",
          type: "date",
          label: "Preparer Signature Date",
          required: false
        }
      ]
    },
    // PART 9 - ADDITIONAL INFORMATION
    {
      id: "part9_additional",
      title: "Part 9. Additional Information",
      questions: [
        {
          id: "additional_a_number",
          type: "text",
          label: "A-Number",
          required: false
        },
        {
          id: "info1_page",
          type: "text",
          label: "Information 1 - Page",
          required: false
        },
        {
          id: "info1_part",
          type: "text",
          label: "Information 1 - Part",
          required: false
        },
        {
          id: "info1_item",
          type: "text",
          label: "Information 1 - Item",
          required: false
        },
        {
          id: "info1_text",
          type: "textarea",
          label: "Information 1 - Text",
          required: false
        },
        {
          id: "info2_page",
          type: "text",
          label: "Information 2 - Page",
          required: false
        },
        {
          id: "info2_part",
          type: "text",
          label: "Information 2 - Part",
          required: false
        },
        {
          id: "info2_item",
          type: "text",
          label: "Information 2 - Item",
          required: false
        },
        {
          id: "info2_text",
          type: "textarea",
          label: "Information 2 - Text",
          required: false
        },
        {
          id: "info3_page",
          type: "text",
          label: "Information 3 - Page",
          required: false
        },
        {
          id: "info3_part",
          type: "text",
          label: "Information 3 - Part",
          required: false
        },
        {
          id: "info3_item",
          type: "text",
          label: "Information 3 - Item",
          required: false
        },
        {
          id: "info3_text",
          type: "textarea",
          label: "Information 3 - Text",
          required: false
        },
        {
          id: "info4_page",
          type: "text",
          label: "Information 4 - Page",
          required: false
        },
        {
          id: "info4_part",
          type: "text",
          label: "Information 4 - Part",
          required: false
        },
        {
          id: "info4_item",
          type: "text",
          label: "Information 4 - Item",
          required: false
        },
        {
          id: "info4_text",
          type: "textarea",
          label: "Information 4 - Text",
          required: false
        }
      ]
    },
    // E-1/E-2 SUPPLEMENT
    {
      id: "e_supplement",
      title: "E-1/E-2 Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["E-1", "E-2"] },
      questions: [
        {
          id: "e_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "e_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "e_classification",
          type: "radio",
          label: "E Classification",
          required: true,
          options: [
            { value: "E-1", label: "E-1 Treaty Trader" },
            { value: "E-2", label: "E-2 Treaty Investor" },
            { value: "E-2C", label: "E-2 CNMI Investor" }
          ]
        },
        {
          id: "e_treaty_country",
          type: "text",
          label: "Treaty Country",
          required: true
        },
        {
          id: "e_substantive_changes",
          type: "radio",
          label: "Seeking advice on substantive changes?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "e_employer_abroad_name",
          type: "text",
          label: "Employer Abroad Name",
          required: false
        },
        {
          id: "e_employer_total_employees",
          type: "number",
          label: "Total Employees Abroad",
          required: false
        },
        {
          id: "e_employer_address_street",
          type: "text",
          label: "Employer Address - Street",
          required: false
        },
        {
          id: "e_employer_address_unit_type",
          type: "radio",
          label: "Employer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "e_employer_address_unit_number",
          type: "text",
          label: "Employer Unit Number",
          required: false
        },
        {
          id: "e_employer_address_city",
          type: "text",
          label: "Employer City",
          required: false
        },
        {
          id: "e_employer_address_state",
          type: "text",
          label: "Employer State",
          required: false
        },
        {
          id: "e_employer_address_zip",
          type: "text",
          label: "Employer ZIP",
          required: false
        },
        {
          id: "e_employer_province",
          type: "text",
          label: "Employer Province",
          required: false
        },
        {
          id: "e_employer_postal_code",
          type: "text",
          label: "Employer Postal Code",
          required: false
        },
        {
          id: "e_employer_country",
          type: "text",
          label: "Employer Country",
          required: false
        },
        {
          id: "e_principal_product",
          type: "text",
          label: "Principal Product/Service",
          required: false
        },
        {
          id: "e_employee_position",
          type: "text",
          label: "Employee Position",
          required: false
        },
        {
          id: "e_company_relationship",
          type: "radio",
          label: "Company Relationship",
          required: true,
          options: [
            { value: "PARENT", label: "Parent" },
            { value: "BRANCH", label: "Branch" },
            { value: "SUBSIDIARY", label: "Subsidiary" },
            { value: "AFFILIATE", label: "Affiliate" },
            { value: "JOINT", label: "Joint Venture" }
          ]
        },
        {
          id: "e_incorporation_place",
          type: "text",
          label: "Place of Incorporation",
          required: true
        },
        {
          id: "e_incorporation_date",
          type: "date",
          label: "Date of Incorporation",
          required: true
        },
        {
          id: "e_nationality_ownership",
          type: "table",
          label: "Nationality of Ownership",
          required: true,
          columns: ["Name", "Nationality", "Immigration Status", "Percent Ownership"]
        },
        {
          id: "e_assets",
          type: "currency",
          label: "Assets",
          required: true
        },
        {
          id: "e_net_worth",
          type: "currency",
          label: "Net Worth",
          required: true
        },
        {
          id: "e_net_annual_income",
          type: "currency",
          label: "Net Annual Income",
          required: true
        },
        {
          id: "e_executive_employees",
          type: "number",
          label: "Executive/Managerial Employees",
          required: true
        },
        {
          id: "e_special_qualifications",
          type: "number",
          label: "Persons with Special Qualifications",
          required: true
        },
        {
          id: "e_total_executives",
          type: "number",
          label: "Total Executives in U.S.",
          required: true
        },
        {
          id: "e_total_special_positions",
          type: "number",
          label: "Total Special Positions",
          required: true
        },
        {
          id: "e_supervision_count",
          type: "number",
          label: "Number Supervised",
          required: false
        },
        {
          id: "e_special_qualifications_explanation",
          type: "textarea",
          label: "Special Qualifications Explanation",
          required: false
        },
        {
          id: "e1_gross_trade",
          type: "currency",
          label: "Total Annual Gross Trade",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-1" }
        },
        {
          id: "e1_year_ending",
          type: "number",
          label: "Year Ending",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-1" }
        },
        {
          id: "e1_percent_trade",
          type: "percentage",
          label: "Percent of Total Trade",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-1" }
        },
        {
          id: "e2_investment_cash",
          type: "currency",
          label: "Cash Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        },
        {
          id: "e2_investment_equipment",
          type: "currency",
          label: "Equipment Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        },
        {
          id: "e2_investment_inventory",
          type: "currency",
          label: "Inventory Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        },
        {
          id: "e2_investment_premises",
          type: "currency",
          label: "Premises Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        },
        {
          id: "e2_investment_other",
          type: "currency",
          label: "Other Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        },
        {
          id: "e2_investment_total",
          type: "currency",
          label: "Total Investment",
          required: false,
          conditional: { dependsOn: "e_classification", value: "E-2" }
        }
      ]
    },
    // TRADE AGREEMENT SUPPLEMENT
    {
      id: "trade_supplement",
      title: "Trade Agreement Supplement",
      conditional: { dependsOn: "requested_classification", value: ["TN", "H-1B1"] },
      questions: [
        {
          id: "trade_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "trade_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "trade_employer_type",
          type: "radio",
          label: "Employer Type",
          required: true,
          options: [
            { value: "US", label: "U.S. Employer" },
            { value: "FOREIGN", label: "Foreign Employer" }
          ]
        },
        {
          id: "trade_foreign_country",
          type: "text",
          label: "Foreign Country",
          required: false,
          conditional: { dependsOn: "trade_employer_type", value: "FOREIGN" }
        },
        {
          id: "trade_request_type",
          type: "radio",
          label: "Free Trade Status Request",
          required: true,
          options: [
            { value: "TN1", label: "Free Trade, Canada (TN1)" },
            { value: "TN2", label: "Free Trade, Mexico (TN2)" },
            { value: "H1B1C", label: "Free Trade, Chile (H-1B1)" },
            { value: "H1B1S", label: "Free Trade, Singapore (H-1B1)" },
            { value: "OTHER", label: "Free Trade, Other" },
            { value: "SIXTH", label: "Sixth consecutive request for Chile/Singapore" }
          ]
        },
        {
          id: "trade_petitioner_name_full",
          type: "text",
          label: "Petitioner Name (Declaration)",
          required: true
        },
        {
          id: "trade_petitioner_signature",
          type: "signature",
          label: "Petitioner Signature",
          required: true
        },
        {
          id: "trade_petitioner_date",
          type: "date",
          label: "Signature Date",
          required: true
        },
        {
          id: "trade_petitioner_phone",
          type: "text",
          label: "Petitioner Phone",
          required: true
        },
        {
          id: "trade_petitioner_mobile",
          type: "text",
          label: "Petitioner Mobile",
          required: false
        },
        {
          id: "trade_petitioner_email",
          type: "email",
          label: "Petitioner Email",
          required: false
        },
        {
          id: "trade_preparer_last_name",
          type: "text",
          label: "Preparer - Family Name",
          required: false
        },
        {
          id: "trade_preparer_first_name",
          type: "text",
          label: "Preparer - Given Name",
          required: false
        },
        {
          id: "trade_preparer_business",
          type: "text",
          label: "Preparer Business",
          required: false
        },
        {
          id: "trade_preparer_street",
          type: "text",
          label: "Preparer Street",
          required: false
        },
        {
          id: "trade_preparer_unit_type",
          type: "radio",
          label: "Preparer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "trade_preparer_unit_number",
          type: "text",
          label: "Preparer Unit Number",
          required: false
        },
        {
          id: "trade_preparer_city",
          type: "text",
          label: "Preparer City",
          required: false
        },
        {
          id: "trade_preparer_state",
          type: "text",
          label: "Preparer State",
          required: false
        },
        {
          id: "trade_preparer_zip",
          type: "text",
          label: "Preparer ZIP",
          required: false
        },
        {
          id: "trade_preparer_province",
          type: "text",
          label: "Preparer Province",
          required: false
        },
        {
          id: "trade_preparer_postal_code",
          type: "text",
          label: "Preparer Postal Code",
          required: false
        },
        {
          id: "trade_preparer_country",
          type: "text",
          label: "Preparer Country",
          required: false
        },
        {
          id: "trade_preparer_phone",
          type: "text",
          label: "Preparer Phone",
          required: false
        },
        {
          id: "trade_preparer_fax",
          type: "text",
          label: "Preparer Fax",
          required: false
        },
        {
          id: "trade_preparer_email",
          type: "email",
          label: "Preparer Email",
          required: false
        },
        {
          id: "trade_preparer_signature",
          type: "signature",
          label: "Preparer Signature",
          required: false
        },
        {
          id: "trade_preparer_date",
          type: "date",
          label: "Preparer Signature Date",
          required: false
        }
      ]
    },
    // H CLASSIFICATION SUPPLEMENT
    {
      id: "h_supplement",
      title: "H Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["H-1B", "H-1B1", "H-1B2", "H-1B3", "H-2A", "H-2B", "H-3"] },
      questions: [
        {
          id: "h_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "h_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: false
        },
        {
          id: "h_total_beneficiaries",
          type: "number",
          label: "Total Beneficiaries",
          required: false
        },
        {
          id: "h_classification",
          type: "radio",
          label: "H Classification Type",
          required: true,
          options: [
            { value: "H-1B", label: "H-1B Specialty Occupation" },
            { value: "H-1B1", label: "H-1B1 Chile and Singapore" },
            { value: "H-1B2", label: "H-1B2 DOD Cooperative R&D" },
            { value: "H-1B3", label: "H-1B3 Fashion Model" },
            { value: "H-2A", label: "H-2A Agricultural Worker" },
            { value: "H-2B", label: "H-2B Non-agricultural Worker" },
            { value: "H-3", label: "H-3 Trainee" },
            { value: "H-3E", label: "H-3 Special Education" }
          ]
        },
        {
          id: "h_prior_stays",
          type: "table",
          label: "Prior Periods of Stay",
          required: true,
          columns: ["Subject's Name", "Period From", "Period To"]
        },
        {
          id: "h_confirmation_number",
          type: "text",
          label: "H-1B Confirmation Number",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h_registration_passport",
          type: "text",
          label: "Registration Passport Number",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h_registration_country",
          type: "text",
          label: "Registration Passport Country",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h_registration_expiry",
          type: "date",
          label: "Registration Passport Expiry",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h_guam_cnmi",
          type: "radio",
          label: "Guam-CNMI Cap Exemption?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h_change_employer_guam",
          type: "radio",
          label: "Change Employer - Previously Guam-CNMI?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h_controlling_interest",
          type: "radio",
          label: "Beneficiary Controlling Interest?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h_controlling_explanation",
          type: "textarea",
          label: "Controlling Interest Explanation",
          required: false,
          conditional: { dependsOn: "h_controlling_interest", value: "YES" }
        },
        {
          id: "h1b_proposed_duties",
          type: "textarea",
          label: "Proposed Duties",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h1b_present_occupation",
          type: "textarea",
          label: "Present Occupation",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h1b_petitioner_name",
          type: "text",
          label: "H-1B Petitioner Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h1b_petitioner_signature",
          type: "signature",
          label: "H-1B Petitioner Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h1b_petitioner_date",
          type: "date",
          label: "H-1B Signature Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B" }
        },
        {
          id: "h1b_dod_employer_signature",
          type: "signature",
          label: "DOD Employer Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h1b_dod_employer_name",
          type: "text",
          label: "DOD Employer Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h1b_dod_employer_date",
          type: "date",
          label: "DOD Employer Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h1b_dod_manager_signature",
          type: "signature",
          label: "DOD Project Manager Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h1b_dod_manager_name",
          type: "text",
          label: "DOD Project Manager Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h1b_dod_manager_date",
          type: "date",
          label: "DOD Manager Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-1B2" }
        },
        {
          id: "h2a_employment_type",
          type: "radio",
          label: "H-2A Employment Type",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "SEASONAL", label: "Seasonal" },
            { value: "PEAK", label: "Peak load" },
            { value: "INTERMITTENT", label: "Intermittent" },
            { value: "ONETIME", label: "One-time occurrence" }
          ]
        },
        {
          id: "h2a_temporary_need",
          type: "radio",
          label: "Temporary Need Type",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "UNPREDICTABLE", label: "Unpredictable" },
            { value: "PERIODIC", label: "Periodic" },
            { value: "RECURRENT", label: "Recurrent annually" }
          ]
        },
        {
          id: "h2a_temporary_explanation",
          type: "textarea",
          label: "Temporary Need Explanation",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] }
        },
        {
          id: "h2a_previous_admission",
          type: "radio",
          label: "Previously admitted H-2A/H-2B?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_restart_limit",
          type: "radio",
          label: "Restart 3-year limit?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_use_agent",
          type: "radio",
          label: "Use agent/recruiter?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_agent_last_name",
          type: "text",
          label: "Agent - Family Name",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_first_name",
          type: "text",
          label: "Agent - Given Name",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_middle_name",
          type: "text",
          label: "Agent - Middle Name",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_organization",
          type: "text",
          label: "Agent Organization",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_street",
          type: "text",
          label: "Agent Street",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_unit_type",
          type: "radio",
          label: "Agent Unit Type",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "h2a_agent_unit_number",
          type: "text",
          label: "Agent Unit Number",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_city",
          type: "text",
          label: "Agent City",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_state",
          type: "text",
          label: "Agent State",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_agent_zip",
          type: "text",
          label: "Agent ZIP",
          required: false,
          conditional: { dependsOn: "h2a_use_agent", value: "YES" }
        },
        {
          id: "h2a_prohibited_fees",
          type: "radio",
          label: "Paid prohibited fees?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_fees_types",
          type: "textarea",
          label: "Types and amounts of fees",
          required: false,
          conditional: { dependsOn: "h2a_prohibited_fees", value: "YES" }
        },
        {
          id: "h2a_reimbursed",
          type: "radio",
          label: "Fees reimbursed?",
          required: false,
          conditional: { dependsOn: "h2a_prohibited_fees", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_exception_request",
          type: "radio",
          label: "Request exception?",
          required: false,
          conditional: { dependsOn: "h2a_prohibited_fees", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_previous_denial",
          type: "radio",
          label: "Previous denial/revocation?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_previous_reimbursed",
          type: "radio",
          label: "Previous fees reimbursed?",
          required: false,
          conditional: { dependsOn: "h2a_previous_denial", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_current_debarment",
          type: "radio",
          label: "Current debarment?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_revoked_certification",
          type: "radio",
          label: "Revoked certification?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_fraud_denial",
          type: "radio",
          label: "Fraud denial/revocation?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_violation_revocation",
          type: "radio",
          label: "Violation revocation?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_section_274a",
          type: "radio",
          label: "INA section 274(a) violation?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_other_violations",
          type: "radio",
          label: "Other violations?",
          required: false,
          conditional: { dependsOn: "h_classification", value: ["H-2A", "H-2B"] },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h2a_petitioner_signature",
          type: "signature",
          label: "H-2A Petitioner Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_petitioner_name",
          type: "text",
          label: "H-2A Petitioner Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_petitioner_date",
          type: "date",
          label: "H-2A Signature Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_employer_signature",
          type: "signature",
          label: "Employer Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_employer_name",
          type: "text",
          label: "Employer Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_employer_date",
          type: "date",
          label: "Employer Signature Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_last_name",
          type: "text",
          label: "Joint Employer - Family Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_first_name",
          type: "text",
          label: "Joint Employer - Given Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_middle_name",
          type: "text",
          label: "Joint Employer - Middle Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_company",
          type: "text",
          label: "Joint Employer Company",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_street",
          type: "text",
          label: "Joint Employer Street",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_unit_type",
          type: "radio",
          label: "Joint Employer Unit Type",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "h2a_joint_unit_number",
          type: "text",
          label: "Joint Employer Unit Number",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_city",
          type: "text",
          label: "Joint Employer City",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_state",
          type: "text",
          label: "Joint Employer State",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_zip",
          type: "text",
          label: "Joint Employer ZIP",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_province",
          type: "text",
          label: "Joint Employer Province",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_postal_code",
          type: "text",
          label: "Joint Employer Postal Code",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_country",
          type: "text",
          label: "Joint Employer Country",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_care_of",
          type: "text",
          label: "Joint Employer Care Of",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_phone",
          type: "text",
          label: "Joint Employer Phone",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_mobile",
          type: "text",
          label: "Joint Employer Mobile",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_email",
          type: "email",
          label: "Joint Employer Email",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_ein",
          type: "text",
          label: "Joint Employer EIN",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_itin",
          type: "text",
          label: "Joint Employer ITIN",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_ssn",
          type: "text",
          label: "Joint Employer SSN",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_business",
          type: "text",
          label: "Joint Employer Business",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_year_established",
          type: "number",
          label: "Joint Year Established",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_employees",
          type: "number",
          label: "Joint Employees",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_gross_income",
          type: "currency",
          label: "Joint Gross Income",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_net_income",
          type: "currency",
          label: "Joint Net Income",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_signatory_last",
          type: "text",
          label: "Joint Signatory - Family Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_signatory_first",
          type: "text",
          label: "Joint Signatory - Given Name",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_signatory_title",
          type: "text",
          label: "Joint Signatory Title",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_signatory_signature",
          type: "signature",
          label: "Joint Signatory Signature",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h2a_joint_signatory_date",
          type: "date",
          label: "Joint Signatory Date",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-2A" }
        },
        {
          id: "h3_training_available",
          type: "radio",
          label: "Training available in country?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_benefit_career",
          type: "radio",
          label: "Benefit career abroad?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_productive_employment",
          type: "radio",
          label: "Productive employment?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_existing_skills",
          type: "radio",
          label: "Existing skills?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_labor_shortage",
          type: "radio",
          label: "Overcome labor shortage?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_employ_abroad",
          type: "radio",
          label: "Employ abroad after training?",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h3_training_cost_explanation",
          type: "textarea",
          label: "Training cost explanation",
          required: false,
          conditional: { dependsOn: "h_classification", value: "H-3" }
        }
      ]
    },
    // H-1B DATA COLLECTION SUPPLEMENT
    {
      id: "h1b_data",
      title: "H-1B Data Collection Supplement",
      conditional: { dependsOn: "h_classification", value: ["H-1B", "H-1B1"] },
      questions: [
        {
          id: "h1b_data_petitioner",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "h1b_data_beneficiary",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "h1b_dependent_employer",
          type: "radio",
          label: "H-1B dependent employer?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_willful_violator",
          type: "radio",
          label: "Willful violator?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_attestation",
          type: "radio",
          label: "Exempt from attestation?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_pay",
          type: "radio",
          label: "Exempt due to $60,000+ pay?",
          required: false,
          conditional: { dependsOn: "h1b_exempt_attestation", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_masters",
          type: "radio",
          label: "Exempt due to master's degree?",
          required: false,
          conditional: { dependsOn: "h1b_exempt_attestation", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_50_employees",
          type: "radio",
          label: "50+ employees?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_50_percent_h1b",
          type: "radio",
          label: "50%+ in H-1B/L-1 status?",
          required: false,
          conditional: { dependsOn: "h1b_50_employees", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_education_level",
          type: "radio",
          label: "Highest Education Level",
          required: true,
          options: [
            { value: "NODIPLOMA", label: "No diploma" },
            { value: "HS", label: "High school graduate" },
            { value: "SOMECOLLEGE", label: "Some college credit" },
            { value: "1YEAR", label: "One or more years college" },
            { value: "ASSOCIATES", label: "Associate's degree" },
            { value: "BACHELORS", label: "Bachelor's degree" },
            { value: "MASTERS", label: "Master's degree" },
            { value: "PROFESSIONAL", label: "Professional degree" },
            { value: "DOCTORATE", label: "Doctorate degree" }
          ]
        },
        {
          id: "h1b_major_field",
          type: "text",
          label: "Major/Primary Field of Study",
          required: true
        },
        {
          id: "h1b_rate_of_pay",
          type: "currency",
          label: "Rate of Pay Per Year",
          required: true
        },
        {
          id: "h1b_dot_code",
          type: "text",
          label: "DOT Code",
          required: true
        },
        {
          id: "h1b_naics_code",
          type: "text",
          label: "NAICS Code",
          required: true
        },
        {
          id: "h1b_institution_higher_ed",
          type: "radio",
          label: "Institution of higher education?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_nonprofit_affiliated",
          type: "radio",
          label: "Nonprofit affiliated with institution?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_research_organization",
          type: "radio",
          label: "Nonprofit/government research org?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_second_extension",
          type: "radio",
          label: "Second/subsequent extension?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_amended_no_extension",
          type: "radio",
          label: "Amended petition no extension?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_correct_uscis_error",
          type: "radio",
          label: "Correct USCIS error?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_primary_secondary",
          type: "radio",
          label: "Primary/secondary education?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_nonprofit_clinical",
          type: "radio",
          label: "Nonprofit clinical training?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_25_or_fewer",
          type: "radio",
          label: "25 or fewer employees?",
          required: false,
          conditional: "h1b_institution_higher_ed === 'NO' && h1b_nonprofit_affiliated === 'NO' && h1b_research_organization === 'NO' && h1b_second_extension === 'NO' && h1b_amended_no_extension === 'NO' && h1b_correct_uscis_error === 'NO' && h1b_primary_secondary === 'NO' && h1b_nonprofit_clinical === 'NO'",
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_petition_type",
          type: "radio",
          label: "H-1B Petition Type",
          required: true,
          options: [
            { value: "CAPBACHELORS", label: "Cap H-1B Bachelor's Degree" },
            { value: "CAPMASTERS", label: "Cap H-1B U.S. Master's Degree or Higher" },
            { value: "CAPH1B1", label: "Cap H-1B1 Chile/Singapore" },
            { value: "CAPEXEMPT", label: "Cap Exempt" }
          ]
        },
        {
          id: "h1b_institution_name",
          type: "text",
          label: "U.S. Institution Name",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_degree_awarded",
          type: "date",
          label: "Degree Awarded Date",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_degree_type",
          type: "text",
          label: "Degree Type",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_institution_street",
          type: "text",
          label: "Institution Street",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_institution_unit_type",
          type: "radio",
          label: "Institution Unit Type",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "h1b_institution_unit_number",
          type: "text",
          label: "Institution Unit Number",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_institution_city",
          type: "text",
          label: "Institution City",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_institution_state",
          type: "text",
          label: "Institution State",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_institution_zip",
          type: "text",
          label: "Institution ZIP",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPMASTERS" }
        },
        {
          id: "h1b_exempt_reason_a",
          type: "radio",
          label: "Exempt - Institution of higher education",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_b",
          type: "radio",
          label: "Exempt - Nonprofit affiliated with institution",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_c",
          type: "radio",
          label: "Exempt - Nonprofit/government research org",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_d",
          type: "radio",
          label: "Exempt - Employed at cap exempt institution",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_e",
          type: "radio",
          label: "Exempt - Concurrent employment at cap exempt",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_f",
          type: "radio",
          label: "Exempt - J-1 physician waiver",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_g",
          type: "radio",
          label: "Exempt - Previously counted against cap",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_exempt_reason_h",
          type: "radio",
          label: "Exempt - Guam-CNMI cap exemption",
          required: false,
          conditional: { dependsOn: "h1b_petition_type", value: "CAPEXEMPT" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_off_site_assignment",
          type: "radio",
          label: "Off-site assignment?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_comply_requirements",
          type: "radio",
          label: "Comply with H-1B requirements?",
          required: false,
          conditional: { dependsOn: "h1b_off_site_assignment", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "h1b_higher_wage",
          type: "radio",
          label: "Higher prevailing/actual wage?",
          required: false,
          conditional: { dependsOn: "h1b_off_site_assignment", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        }
      ]
    },
    // L CLASSIFICATION SUPPLEMENT
    {
      id: "l_supplement",
      title: "L Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["L-1"] },
      questions: [
        {
          id: "l_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "l_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "l_petition_type",
          type: "radio",
          label: "Petition Type",
          required: true,
          options: [
            { value: "INDIVIDUAL", label: "Individual petition" },
            { value: "BLANKET", label: "Blanket petition" }
          ]
        },
        {
          id: "l_50_employees",
          type: "radio",
          label: "50+ employees?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "l_50_percent_h1b",
          type: "radio",
          label: "50%+ in H-1B/L-1 status?",
          required: false,
          conditional: { dependsOn: "l_50_employees", value: "YES" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "l_classification",
          type: "radio",
          label: "L Classification",
          required: true,
          options: [
            { value: "L-1A", label: "L-1A Manager or Executive" },
            { value: "L-1B", label: "L-1B Specialized Knowledge" }
          ]
        },
        {
          id: "l_prior_stays",
          type: "table",
          label: "Prior Periods of Stay",
          required: true,
          columns: ["Subject's Name", "Period From", "Period To"]
        },
        {
          id: "l_employer_abroad",
          type: "text",
          label: "Employer Abroad Name",
          required: true
        },
        {
          id: "l_employer_street",
          type: "text",
          label: "Employer Abroad Street",
          required: true
        },
        {
          id: "l_employer_unit_type",
          type: "radio",
          label: "Employer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "l_employer_unit_number",
          type: "text",
          label: "Employer Unit Number",
          required: false
        },
        {
          id: "l_employer_city",
          type: "text",
          label: "Employer Abroad City",
          required: true
        },
        {
          id: "l_employer_state",
          type: "text",
          label: "Employer Abroad State",
          required: false
        },
        {
          id: "l_employer_zip",
          type: "text",
          label: "Employer Abroad ZIP",
          required: false
        },
        {
          id: "l_employer_province",
          type: "text",
          label: "Employer Abroad Province",
          required: false
        },
        {
          id: "l_employer_postal_code",
          type: "text",
          label: "Employer Abroad Postal Code",
          required: false
        },
        {
          id: "l_employer_country",
          type: "text",
          label: "Employer Abroad Country",
          required: true
        },
        {
          id: "l_employment_dates",
          type: "table",
          label: "Employment Dates",
          required: true,
          columns: ["From", "To", "Explanation of Interruptions"]
        },
        {
          id: "l_duties_abroad",
          type: "textarea",
          label: "Duties Abroad (3 years)",
          required: true
        },
        {
          id: "l_proposed_duties_us",
          type: "textarea",
          label: "Proposed Duties in U.S.",
          required: true
        },
        {
          id: "l_education_experience",
          type: "textarea",
          label: "Education and Work Experience",
          required: true
        },
        {
          id: "l_company_relationship",
          type: "radio",
          label: "Company Relationship",
          required: true,
          options: [
            { value: "PARENT", label: "Parent" },
            { value: "BRANCH", label: "Branch" },
            { value: "SUBSIDIARY", label: "Subsidiary" },
            { value: "AFFILIATE", label: "Affiliate" },
            { value: "JOINT", label: "Joint Venture" }
          ]
        },
        {
          id: "l_stock_ownership",
          type: "table",
          label: "Stock Ownership and Control",
          required: true,
          columns: ["Percentage and Control", "FEIN"]
        },
        {
          id: "l_same_relationship",
          type: "radio",
          label: "Same qualifying relationship?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "l_new_office",
          type: "radio",
          label: "Opening new office?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "l_stationed_offsite",
          type: "radio",
          label: "Stationed primarily offsite?",
          required: false,
          conditional: { dependsOn: "l_classification", value: "L-1B" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "l_offsite_supervision",
          type: "textarea",
          label: "Offsite supervision description",
          required: false,
          conditional: { dependsOn: "l_stationed_offsite", value: "YES" }
        },
        {
          id: "l_offsite_reasons",
          type: "textarea",
          label: "Offsite placement reasons",
          required: false,
          conditional: { dependsOn: "l_stationed_offsite", value: "YES" }
        },
        {
          id: "l_blanket_companies",
          type: "table",
          label: "Blanket Petition Companies",
          required: false,
          conditional: { dependsOn: "l_petition_type", value: "BLANKET" },
          columns: ["Name and Address", "Relationship"]
        }
      ]
    },
    // O AND P CLASSIFICATION SUPPLEMENT
    {
      id: "o_p_supplement",
      title: "O and P Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["O-1", "O-2", "P-1", "P-2", "P-3"] },
      questions: [
        {
          id: "op_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "op_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: false
        },
        {
          id: "op_total_beneficiaries",
          type: "number",
          label: "Total Beneficiaries",
          required: false
        },
        {
          id: "op_classification",
          type: "radio",
          label: "Classification",
          required: true,
          options: [
            { value: "O-1A", label: "O-1A Sciences, education, business, athletics" },
            { value: "O-1B", label: "O-1B Arts or motion picture/TV" },
            { value: "O-2", label: "O-2 Accompanying alien" },
            { value: "P-1M", label: "P-1 Major League Sports" },
            { value: "P-1", label: "P-1 Athlete or Group" },
            { value: "P-1S", label: "P-1S Essential Support" },
            { value: "P-2", label: "P-2 Reciprocal exchange" },
            { value: "P-2S", label: "P-2S Essential Support" },
            { value: "P-3", label: "P-3 Culturally unique" },
            { value: "P-3S", label: "P-3S Essential Support" }
          ]
        },
        {
          id: "op_nature_event",
          type: "textarea",
          label: "Nature of Event",
          required: true
        },
        {
          id: "op_duties_performed",
          type: "textarea",
          label: "Duties to be Performed",
          required: true
        },
        {
          id: "op_prior_experience",
          type: "textarea",
          label: "Prior Work Experience",
          required: false
        },
        {
          id: "op_ownership_interest",
          type: "radio",
          label: "Ownership interest?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "op_ownership_explanation",
          type: "textarea",
          label: "Ownership Explanation",
          required: false,
          conditional: { dependsOn: "op_ownership_interest", value: "YES" }
        },
        {
          id: "op_labor_organization",
          type: "radio",
          label: "Appropriate labor organization exists?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "op_consultation_submitted",
          type: "radio",
          label: "Consultation submitted?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO_COPY", label: "No - copy attached" },
            { value: "NA", label: "N/A" }
          ]
        },
        {
          id: "op_o1a_organization",
          type: "text",
          label: "O-1A Organization Name",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_street",
          type: "text",
          label: "O-1A Organization Street",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_unit_type",
          type: "radio",
          label: "O-1A Unit Type",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "op_o1a_unit_number",
          type: "text",
          label: "O-1A Unit Number",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_city",
          type: "text",
          label: "O-1A Organization City",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_state",
          type: "text",
          label: "O-1A Organization State",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_zip",
          type: "text",
          label: "O-1A Organization ZIP",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_date_sent",
          type: "date",
          label: "O-1A Date Sent",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1a_phone",
          type: "text",
          label: "O-1A Phone",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor",
          type: "text",
          label: "O-1B Labor Organization",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_street",
          type: "text",
          label: "O-1B Labor Street",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_unit_type",
          type: "radio",
          label: "O-1B Labor Unit Type",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "op_o1b_labor_unit_number",
          type: "text",
          label: "O-1B Labor Unit Number",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_city",
          type: "text",
          label: "O-1B Labor City",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_state",
          type: "text",
          label: "O-1B Labor State",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_zip",
          type: "text",
          label: "O-1B Labor ZIP",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_date",
          type: "date",
          label: "O-1B Labor Date Sent",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_labor_phone",
          type: "text",
          label: "O-1B Labor Phone",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_management",
          type: "text",
          label: "O-1B Management Organization",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_street",
          type: "text",
          label: "O-1B Management Street",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_unit_type",
          type: "radio",
          label: "O-1B Management Unit Type",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "op_o1b_mgmt_unit_number",
          type: "text",
          label: "O-1B Management Unit Number",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_city",
          type: "text",
          label: "O-1B Management City",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_state",
          type: "text",
          label: "O-1B Management State",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_zip",
          type: "text",
          label: "O-1B Management ZIP",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_date",
          type: "date",
          label: "O-1B Management Date Sent",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_o1b_mgmt_phone",
          type: "text",
          label: "O-1B Management Phone",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor",
          type: "text",
          label: "O-2/P Labor Organization",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_street",
          type: "text",
          label: "O-2/P Labor Street",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_unit_type",
          type: "radio",
          label: "O-2/P Labor Unit Type",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "op_op_labor_unit_number",
          type: "text",
          label: "O-2/P Labor Unit Number",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_city",
          type: "text",
          label: "O-2/P Labor City",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_state",
          type: "text",
          label: "O-2/P Labor State",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_zip",
          type: "text",
          label: "O-2/P Labor ZIP",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_date",
          type: "date",
          label: "O-2/P Labor Date Sent",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_op_labor_phone",
          type: "text",
          label: "O-2/P Labor Phone",
          required: false,
          conditional: { dependsOn: "op_consultation_submitted", value: "NO_COPY" }
        },
        {
          id: "op_petitioner_last",
          type: "text",
          label: "Petitioner - Family Name",
          required: true
        },
        {
          id: "op_petitioner_first",
          type: "text",
          label: "Petitioner - Given Name",
          required: true
        },
        {
          id: "op_petitioner_middle",
          type: "text",
          label: "Petitioner - Middle Name",
          required: false
        },
        {
          id: "op_petitioner_signature",
          type: "signature",
          label: "Petitioner Signature",
          required: true
        },
        {
          id: "op_petitioner_date",
          type: "date",
          label: "Signature Date",
          required: true
        },
        {
          id: "op_petitioner_phone",
          type: "text",
          label: "Petitioner Phone",
          required: true
        },
        {
          id: "op_petitioner_email",
          type: "email",
          label: "Petitioner Email",
          required: false
        }
      ]
    },
    // Q-1 SUPPLEMENT
    {
      id: "q_supplement",
      title: "Q-1 Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["Q-1"] },
      questions: [
        {
          id: "q_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "q_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "q_certification_age",
          type: "radio",
          label: "Certify 18+ years old?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "q_certification_qualified",
          type: "radio",
          label: "Certify qualified?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "q_certification_communicate",
          type: "radio",
          label: "Certify communicate effectively?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "q_certification_resided",
          type: "radio",
          label: "Certify resided outside U.S.?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "q_certification_wages",
          type: "radio",
          label: "Certify offer comparable wages?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "q_petitioner_last",
          type: "text",
          label: "Petitioner - Family Name",
          required: true
        },
        {
          id: "q_petitioner_first",
          type: "text",
          label: "Petitioner - Given Name",
          required: true
        },
        {
          id: "q_petitioner_middle",
          type: "text",
          label: "Petitioner - Middle Name",
          required: false
        },
        {
          id: "q_petitioner_signature",
          type: "signature",
          label: "Petitioner Signature",
          required: true
        },
        {
          id: "q_petitioner_date",
          type: "date",
          label: "Signature Date",
          required: true
        },
        {
          id: "q_petitioner_phone",
          type: "text",
          label: "Petitioner Phone",
          required: true
        },
        {
          id: "q_petitioner_email",
          type: "email",
          label: "Petitioner Email",
          required: false
        }
      ]
    },
    // R-1 SUPPLEMENT
    {
      id: "r_supplement",
      title: "R-1 Classification Supplement",
      conditional: { dependsOn: "requested_classification", value: ["R-1"] },
      questions: [
        {
          id: "r_petitioner_name",
          type: "text",
          label: "Petitioner Name",
          required: true
        },
        {
          id: "r_beneficiary_name",
          type: "text",
          label: "Beneficiary Name",
          required: true
        },
        {
          id: "r_members_count",
          type: "number",
          label: "Number of Members",
          required: true
        },
        {
          id: "r_employees_same_location",
          type: "number",
          label: "Employees at Same Location",
          required: true
        },
        {
          id: "r_aliens_employed",
          type: "number",
          label: "Aliens with Religious Status",
          required: true
        },
        {
          id: "r_petitions_filed",
          type: "number",
          label: "Petitions Filed (5 years)",
          required: true
        },
        {
          id: "r_previous_admission",
          type: "radio",
          label: "Previously admitted R visa?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_prior_stays",
          type: "table",
          label: "Prior Periods of Stay",
          required: false,
          conditional: { dependsOn: "r_previous_admission", value: "YES" },
          columns: ["Name", "Period From", "Period To"]
        },
        {
          id: "r_responsibilities",
          type: "table",
          label: "Employee Responsibilities",
          required: true,
          columns: ["Position", "Responsibilities"]
        },
        {
          id: "r_relationship_abroad",
          type: "textarea",
          label: "Relationship with Organization Abroad",
          required: true
        },
        {
          id: "r_position_title",
          type: "text",
          label: "Position Title",
          required: true
        },
        {
          id: "r_daily_duties",
          type: "textarea",
          label: "Daily Duties",
          required: true
        },
        {
          id: "r_qualifications",
          type: "textarea",
          label: "Qualifications",
          required: true
        },
        {
          id: "r_compensation",
          type: "textarea",
          label: "Compensation",
          required: true
        },
        {
          id: "r_work_locations",
          type: "textarea",
          label: "Work Locations",
          required: true
        },
        {
          id: "r_bona_fide",
          type: "radio",
          label: "Bona fide nonprofit?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_willing_able_compensate",
          type: "radio",
          label: "Willing and able to compensate?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_previous_compensation",
          type: "radio",
          label: "Previous compensation?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_secular_employment",
          type: "radio",
          label: "No secular employment?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_20_hours",
          type: "radio",
          label: "20+ hours per week?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_member_2_years",
          type: "radio",
          label: "Member 2+ years?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_notify_uscis",
          type: "radio",
          label: "Notify USCIS?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" }
          ]
        },
        {
          id: "r_petitioner_name_attest",
          type: "text",
          label: "Petitioner Name (Attestation)",
          required: true
        },
        {
          id: "r_petitioner_title",
          type: "text",
          label: "Title",
          required: true
        },
        {
          id: "r_petitioner_signature",
          type: "signature",
          label: "Signature",
          required: true
        },
        {
          id: "r_petitioner_date",
          type: "date",
          label: "Date",
          required: true
        },
        {
          id: "r_employer_name",
          type: "text",
          label: "Employer/Organization Name",
          required: true
        },
        {
          id: "r_employer_street",
          type: "text",
          label: "Employer Street",
          required: true
        },
        {
          id: "r_employer_unit_type",
          type: "radio",
          label: "Employer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "r_employer_unit_number",
          type: "text",
          label: "Employer Unit Number",
          required: false
        },
        {
          id: "r_employer_city",
          type: "text",
          label: "Employer City",
          required: true
        },
        {
          id: "r_employer_state",
          type: "text",
          label: "Employer State",
          required: true
        },
        {
          id: "r_employer_zip",
          type: "text",
          label: "Employer ZIP",
          required: true
        },
        {
          id: "r_employer_phone",
          type: "text",
          label: "Employer Phone",
          required: true
        },
        {
          id: "r_employer_fax",
          type: "text",
          label: "Employer Fax",
          required: false
        },
        {
          id: "r_employer_email",
          type: "email",
          label: "Employer Email",
          required: false
        },
        {
          id: "r_employing_organization",
          type: "text",
          label: "Employing Organization Name",
          required: false
        },
        {
          id: "r_religious_denomination",
          type: "text",
          label: "Religious Denomination",
          required: false
        },
        {
          id: "r_authorized_rep_name",
          type: "text",
          label: "Authorized Representative Name",
          required: false
        },
        {
          id: "r_authorized_rep_title",
          type: "text",
          label: "Title",
          required: false
        },
        {
          id: "r_authorized_rep_signature",
          type: "signature",
          label: "Representative Signature",
          required: false
        },
        {
          id: "r_authorized_rep_date",
          type: "date",
          label: "Representative Date",
          required: false
        },
        {
          id: "r_attesting_org_name",
          type: "text",
          label: "Attesting Organization Name",
          required: false
        },
        {
          id: "r_attesting_street",
          type: "text",
          label: "Attesting Street",
          required: false
        },
        {
          id: "r_attesting_unit_type",
          type: "radio",
          label: "Attesting Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "r_attesting_unit_number",
          type: "text",
          label: "Attesting Unit Number",
          required: false
        },
        {
          id: "r_attesting_city",
          type: "text",
          label: "Attesting City",
          required: false
        },
        {
          id: "r_attesting_state",
          type: "text",
          label: "Attesting State",
          required: false
        },
        {
          id: "r_attesting_zip",
          type: "text",
          label: "Attesting ZIP",
          required: false
        },
        {
          id: "r_attesting_phone",
          type: "text",
          label: "Attesting Phone",
          required: false
        },
        {
          id: "r_attesting_fax",
          type: "text",
          label: "Attesting Fax",
          required: false
        },
        {
          id: "r_attesting_email",
          type: "email",
          label: "Attesting Email",
          required: false
        }
      ]
    },
    // ATTACHMENT-1
    {
      id: "attachment1",
      title: "Attachment-1 (Additional Beneficiaries)",
      questions: [
        {
          id: "attach1_last_name",
          type: "text",
          label: "Family Name",
          required: false
        },
        {
          id: "attach1_first_name",
          type: "text",
          label: "Given Name",
          required: false
        },
        {
          id: "attach1_middle_name",
          type: "text",
          label: "Middle Name",
          required: false
        },
        {
          id: "attach1_dob",
          type: "date",
          label: "Date of Birth",
          required: false
        },
        {
          id: "attach1_sex",
          type: "radio",
          label: "Sex",
          required: false,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" }
          ]
        },
        {
          id: "attach1_ssn",
          type: "text",
          label: "Social Security Number",
          required: false
        },
        {
          id: "attach1_a_number",
          type: "text",
          label: "A-Number",
          required: false
        },
        {
          id: "attach1_other_last_name",
          type: "text",
          label: "Other Name - Family Name",
          required: false
        },
        {
          id: "attach1_other_first_name",
          type: "text",
          label: "Other Name - Given Name",
          required: false
        },
        {
          id: "attach1_other_middle_name",
          type: "text",
          label: "Other Name - Middle Name",
          required: false
        },
        {
          id: "attach1_us_street",
          type: "text",
          label: "U.S. Address - Street",
          required: false
        },
        {
          id: "attach1_us_unit_type",
          type: "radio",
          label: "U.S. Address Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "attach1_us_unit_number",
          type: "text",
          label: "U.S. Address Unit Number",
          required: false
        },
        {
          id: "attach1_us_city",
          type: "text",
          label: "U.S. Address City",
          required: false
        },
        {
          id: "attach1_us_state",
          type: "text",
          label: "U.S. Address State",
          required: false
        },
        {
          id: "attach1_us_zip",
          type: "text",
          label: "U.S. Address ZIP",
          required: false
        },
        {
          id: "attach1_foreign_street",
          type: "text",
          label: "Foreign Address - Street",
          required: false
        },
        {
          id: "attach1_foreign_unit_type",
          type: "radio",
          label: "Foreign Address Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." }
          ]
        },
        {
          id: "attach1_foreign_unit_number",
          type: "text",
          label: "Foreign Address Unit Number",
          required: false
        },
        {
          id: "attach1_foreign_city",
          type: "text",
          label: "Foreign Address City",
          required: false
        },
        {
          id: "attach1_foreign_state",
          type: "text",
          label: "Foreign Address State",
          required: false
        },
        {
          id: "attach1_foreign_province",
          type: "text",
          label: "Foreign Address Province",
          required: false
        },
        {
          id: "attach1_foreign_postal_code",
          type: "text",
          label: "Foreign Address Postal Code",
          required: false
        },
        {
          id: "attach1_foreign_country",
          type: "text",
          label: "Foreign Address Country",
          required: false
        },
        {
          id: "attach1_country_of_birth",
          type: "text",
          label: "Country of Birth",
          required: false
        },
        {
          id: "attach1_country_citizenship",
          type: "text",
          label: "Country of Citizenship",
          required: false
        },
        {
          id: "attach1_last_arrival",
          type: "date",
          label: "Last Arrival Date",
          required: false
        },
        {
          id: "attach1_i94_number",
          type: "text",
          label: "I-94 Number",
          required: false
        },
        {
          id: "attach1_passport_number",
          type: "text",
          label: "Passport Number",
          required: false
        },
        {
          id: "attach1_passport_issue",
          type: "date",
          label: "Passport Issue Date",
          required: false
        },
        {
          id: "attach1_passport_expiry",
          type: "date",
          label: "Passport Expiry Date",
          required: false
        },
        {
          id: "attach1_passport_country",
          type: "text",
          label: "Passport Country",
          required: false
        },
        {
          id: "attach1_current_status",
          type: "text",
          label: "Current Status",
          required: false
        },
        {
          id: "attach1_status_expires",
          type: "date",
          label: "Status Expires",
          required: false
        },
        {
          id: "attach1_sevis_number",
          type: "text",
          label: "SEVIS Number",
          required: false
        },
        {
          id: "attach1_ead_number",
          type: "text",
          label: "EAD Number",
          required: false
        }
      ]
    }
  ]
};