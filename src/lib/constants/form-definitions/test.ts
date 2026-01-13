import { US_STATES } from "../us-states";

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
      id: "part1_petitioner_info",
      title: "Part 1. Petitioner Information",
      questions: [
        {
          id: "part1_petitioner_type",
          type: "radio",
          label: "Petitioner Type",
          required: true,
          options: [
            { value: "INDIVIDUAL", label: "Individual" },
            { value: "COMPANY", label: "Company/Organization" },
          ],
        },
        {
          id: "part1_individual_last_name",
          type: "text",
          label: "Individual Petitioner - Family Name (Last Name)",
          required: false,
          conditional: {
            dependsOn: "part1_petitioner_type",
            value: "INDIVIDUAL",
          },
        },
        {
          id: "part1_individual_first_name",
          type: "text",
          label: "Individual Petitioner - Given Name (First Name)",
          required: false,
          conditional: {
            dependsOn: "part1_petitioner_type",
            value: "INDIVIDUAL",
          },
        },
        {
          id: "part1_individual_middle_name",
          type: "text",
          label: "Individual Petitioner - Middle Name",
          required: false,
          conditional: {
            dependsOn: "part1_petitioner_type",
            value: "INDIVIDUAL",
          },
        },
        {
          id: "part1_company_name",
          type: "text",
          label: "Company or Organization Name",
          required: false,
          conditional: { dependsOn: "part1_petitioner_type", value: "COMPANY" },
        },
        {
          id: "part1_mailing_care_of",
          type: "text",
          label: "In Care Of Name",
          required: false,
        },
        {
          id: "part1_mailing_street",
          type: "text",
          label: "Street Number and Name",
          required: true,
        },
        {
          id: "part1_mailing_unit_type",
          type: "radio",
          label: "Unit Type",
          required: true,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part1_mailing_unit_number",
          type: "text",
          label: "Unit Number",
          required: false,
        },
        {
          id: "part1_mailing_city",
          type: "text",
          label: "City or Town",
          required: true,
        },
        {
          id: "part1_mailing_state",
          type: "select",
          label: "State",
          required: true,
          options: US_STATES,
        },
        {
          id: "part1_mailing_zip",
          type: "text",
          label: "ZIP Code",
          required: true,
        },
        {
          id: "part1_mailing_province",
          type: "text",
          label: "Province",
          required: false,
        },
        {
          id: "part1_mailing_postal_code",
          type: "text",
          label: "Postal Code",
          required: false,
        },
        {
          id: "part1_mailing_country",
          type: "text",
          label: "text",
          required: true,
        },
        {
          id: "part1_daytime_phone",
          type: "text",
          label: "Daytime Telephone Number",
          required: true,
        },
        {
          id: "part1_mobile_phone",
          type: "text",
          label: "Mobile Telephone Number",
          required: false,
        },
        {
          id: "part1_email_address",
          type: "email",
          label: "Email Address",
          required: false,
        },
        {
          id: "part1_fein",
          type: "text",
          label: "Federal Employer Identification Number (FEIN)",
          required: true,
        },
        {
          id: "part1_nonprofit_status",
          type: "radio",
          label: "Nonprofit Organization Status",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part1_individual_tax_number",
          type: "text",
          label: "Individual IRS Tax Number",
          required: false,
          conditional: {
            dependsOn: "part1_petitioner_type",
            value: "INDIVIDUAL",
          },
        },
        {
          id: "part1_petitioner_ssn",
          type: "text",
          label: "U.S. Social Security Number",
          required: false,
          conditional: {
            dependsOn: "part1_petitioner_type",
            value: "INDIVIDUAL",
          },
        },
      ],
    },
    {
      id: "part2_petition_info",
      title: "Part 2. Information About This Petition",
      questions: [
        {
          id: "part2_requested_classification",
          type: "text",
          label: "Requested Nonimmigrant Classification",
          required: true,
        },
        {
          id: "part2_basis_classification",
          type: "radio",
          label: "Basis for Classification",
          required: true,
          options: [
            { value: "A", label: "New employment" },
            {
              value: "B",
              label:
                "Continuation of previously approved employment without change with the same employer",
            },
            { value: "C", label: "Change in previously approved employment" },
            { value: "D", label: "New concurrent employment" },
            { value: "E", label: "Change of employer" },
            { value: "F", label: "Amended petition" },
          ],
        },
        {
          id: "part2_previous_receipt",
          type: "text",
          label: "Previous Petition Receipt Number",
          required: false,
        },
        {
          id: "part2_requested_action",
          type: "radio",
          label: "Requested Action",
          required: true,
          options: [
            {
              value: "A",
              label: "Notify the office in Part 4 for visa/admission",
            },
            { value: "B", label: "Change status and extend stay" },
            { value: "C", label: "Extend stay" },
            { value: "D", label: "Amend stay" },
            {
              value: "E",
              label: "Extend status based on free trade agreement",
            },
            {
              value: "F",
              label: "Change status based on free trade agreement",
            },
          ],
        },
        {
          id: "part2_total_workers",
          type: "number",
          label: "Total Number of Workers",
          required: true,
        },
      ],
    },
    {
      id: "part3_beneficiary_info",
      title: "Part 3. Beneficiary Information",
      questions: [
        {
          id: "part3_beneficiary_type",
          type: "radio",
          label: "Type of Beneficiaries Requested",
          required: true,
          options: [
            { value: "INDIVIDUAL", label: "Individual" },
            { value: "GROUP", label: "Entertainment Group" },
          ],
        },
        {
          id: "part3_group_name",
          type: "text",
          label: "Entertainment Group Name",
          required: false,
          conditional: { dependsOn: "part3_beneficiary_type", value: "GROUP" },
        },
        {
          id: "part3_beneficiary_last_name",
          type: "text",
          label: "Family Name (Last Name)",
          required: true,
        },
        {
          id: "part3_beneficiary_first_name",
          type: "text",
          label: "Given Name (First Name)",
          required: true,
        },
        {
          id: "part3_beneficiary_middle_name",
          type: "text",
          label: "Middle Name",
          required: false,
        },
        {
          id: "part3_other_names",
          type: "text",
          label: "Other Names Used",
          required: false,
        },
        {
          id: "part3_date_of_birth",
          type: "date",
          label: "Date of Birth",
          required: true,
        },
        {
          id: "part3_sex",
          type: "radio",
          label: "Sex",
          required: true,
          options: [
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
          ],
        },
        {
          id: "part3_beneficiary_ssn",
          type: "text",
          label: "U.S. Social Security Number",
          required: false,
        },
        {
          id: "part3_a_number",
          type: "text",
          label: "Alien Registration Number (A-Number)",
          required: false,
        },
        {
          id: "part3_country_of_birth",
          type: "text",
          label: "Country of Birth",
          required: true,
        },
        {
          id: "part3_province_of_birth",
          type: "text",
          label: "Province of Birth",
          required: false,
        },
        {
          id: "part3_country_of_citizenship",
          type: "text",
          label: "Country of Citizenship or Nationality",
          required: true,
        },
        {
          id: "part3_in_us",
          type: "radio",
          label: "Is beneficiary in the United States?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part3_i94_number",
          type: "text",
          label: "I-94 Arrival-Departure Record Number",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_last_arrival_date",
          type: "date",
          label: "Date of Last Arrival",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_passport_number",
          type: "text",
          label: "Passport or Travel Document Number",
          required: true,
        },
        {
          id: "part3_passport_issue_date",
          type: "date",
          label: "Passport Issue Date",
          required: true,
        },
        {
          id: "part3_passport_expiry_date",
          type: "date",
          label: "Passport Expiry Date",
          required: true,
        },
        {
          id: "part3_passport_country",
          type: "text",
          label: "Passport Country of Issuance",
          required: true,
        },
        {
          id: "part3_current_status",
          type: "text",
          label: "Current Nonimmigrant Status",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_status_expires",
          type: "date",
          label: "Date Status Expires",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_us_address_street",
          type: "text",
          label: "Current U.S. Address - Street",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_us_address_unit_type",
          type: "radio",
          label: "U.S. Address Unit Type",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part3_us_address_unit_number",
          type: "text",
          label: "U.S. Address Unit Number",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_us_address_city",
          type: "text",
          label: "U.S. Address City",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_us_address_state",
          type: "text",
          label: "U.S. Address State",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_us_address_zip",
          type: "text",
          label: "U.S. Address ZIP Code",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_sevis_number",
          type: "text",
          label: "SEVIS Number",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
        {
          id: "part3_ead_number",
          type: "text",
          label: "EAD Number",
          required: false,
          conditional: { dependsOn: "part3_in_us", value: "YES" },
        },
      ],
    },
    {
      id: "part4_processing_info",
      title: "Part 4. Processing Information",
      questions: [
        {
          id: "part4_office_type",
          type: "radio",
          label: "Type of Office",
          required: false,
          options: [
            { value: "CONSULATE", label: "Consulate" },
            { value: "POE", label: "Port of Entry" },
            { value: "PFI", label: "Pre-flight inspection" },
          ],
        },
        {
          id: "part4_office_city",
          type: "text",
          label: "Office City",
          required: false,
        },
        {
          id: "part4_office_state_country",
          type: "text",
          label: "Office State/Country",
          required: false,
        },
        {
          id: "part4_valid_passport",
          type: "radio",
          label: "Does each person have valid passport?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_other_petitions",
          type: "radio",
          label: "Filing other petitions?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_other_petitions_count",
          type: "number",
          label: "Number of other petitions",
          required: false,
          conditional: { dependsOn: "part4_other_petitions", value: "YES" },
        },
        {
          id: "part4_replacement_i94",
          type: "radio",
          label: "Filing replacement I-94?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_replacement_i94_count",
          type: "number",
          label: "Number of I-94 applications",
          required: false,
          conditional: { dependsOn: "part4_replacement_i94", value: "YES" },
        },
        {
          id: "part4_filing_dependents",
          type: "radio",
          label: "Filing for dependents?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_dependents_count",
          type: "number",
          label: "Number of dependents",
          required: false,
          conditional: { dependsOn: "part4_filing_dependents", value: "YES" },
        },
        {
          id: "part4_removal_proceedings",
          type: "radio",
          label: "Beneficiary in removal proceedings?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_immigrant_petition",
          type: "radio",
          label: "Filed immigrant petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_previous_nonimmigrant",
          type: "radio",
          label: "Previous nonimmigrant petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_filing_new",
          type: "radio",
          label: "Filing new petition?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_given_classification",
          type: "radio",
          label: "Previously given classification?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_denied_classification",
          type: "radio",
          label: "Previously denied classification?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_group_year",
          type: "radio",
          label: "With group less than 1 year?",
          required: false,
          conditional: { dependsOn: "part3_beneficiary_type", value: "GROUP" },
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_j1_exchange",
          type: "radio",
          label: "J-1 exchange visitor?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part4_j1_dates",
          type: "text",
          label: "J-1 status dates",
          required: false,
          conditional: { dependsOn: "part4_j1_exchange", value: "YES" },
        },
        {
          id: "part4_foreign_address_street",
          type: "text",
          label: "Foreign Address - Street",
          required: false,
        },
        {
          id: "part4_foreign_unit_type",
          type: "radio",
          label: "Foreign Address Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part4_foreign_unit_number",
          type: "text",
          label: "Foreign Address Unit Number",
          required: false,
        },
        {
          id: "part4_foreign_city",
          type: "text",
          label: "Foreign Address City",
          required: false,
        },
        {
          id: "part4_foreign_state",
          type: "text",
          label: "Foreign Address State",
          required: false,
        },
        {
          id: "part4_foreign_country",
          type: "text",
          label: "Foreign Address Country",
          required: false,
        },
        {
          id: "part4_foreign_postal_code",
          type: "text",
          label: "Foreign Address Postal Code",
          required: false,
        },
        {
          id: "part4_foreign_province",
          type: "text",
          label: "Foreign Address Province",
          required: false,
        },
      ],
    },
    {
      id: "part5_employment_info",
      title: "Part 5. Basic Information About Proposed Employment",
      questions: [
        {
          id: "part5_job_title",
          type: "text",
          label: "Job Title",
          required: true,
        },
        {
          id: "part5_lca_case_number",
          type: "text",
          label: "LCA or ETA Case Number",
          required: false,
        },
        {
          id: "part5_address1_street",
          type: "text",
          label: "Address 1 - Street",
          required: false,
        },
        {
          id: "part5_address1_unit_type",
          type: "radio",
          label: "Address 1 Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part5_address1_unit_number",
          type: "text",
          label: "Address 1 Unit Number",
          required: false,
        },
        {
          id: "part5_address1_city",
          type: "text",
          label: "Address 1 City",
          required: false,
        },
        {
          id: "part5_address1_state",
          type: "text",
          label: "Address 1 State",
          required: false,
        },
        {
          id: "part5_address1_zip",
          type: "text",
          label: "Address 1 ZIP Code",
          required: false,
        },
        {
          id: "part5_address1_third_party",
          type: "radio",
          label: "Address 1 third-party?",
          required: false,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_address1_third_party_name",
          type: "text",
          label: "Third-party name for Address 1",
          required: false,
          conditional: {
            dependsOn: "part5_address1_third_party",
            value: "YES",
          },
        },
        {
          id: "part5_address2_street",
          type: "text",
          label: "Address 2 - Street",
          required: false,
        },
        {
          id: "part5_address2_unit_type",
          type: "radio",
          label: "Address 2 Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part5_address2_unit_number",
          type: "text",
          label: "Address 2 Unit Number",
          required: false,
        },
        {
          id: "part5_address2_city",
          type: "text",
          label: "Address 2 City",
          required: false,
        },
        {
          id: "part5_address2_state",
          type: "text",
          label: "Address 2 State",
          required: false,
        },
        {
          id: "part5_address2_zip",
          type: "text",
          label: "Address 2 ZIP Code",
          required: false,
        },
        {
          id: "part5_address2_third_party",
          type: "radio",
          label: "Address 2 third-party?",
          required: false,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_address2_third_party_name",
          type: "text",
          label: "Third-party name for Address 2",
          required: false,
          conditional: {
            dependsOn: "part5_address2_third_party",
            value: "YES",
          },
        },
        {
          id: "part5_include_itinerary",
          type: "radio",
          label: "Include itinerary?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_work_off_site",
          type: "radio",
          label: "Work off-site?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_work_cnmi",
          type: "radio",
          label: "Work exclusively in CNMI?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_full_time",
          type: "radio",
          label: "Full-time position?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_hours_per_week",
          type: "number",
          label: "Hours per week",
          required: false,
          conditional: { dependsOn: "part5_full_time", value: "NO" },
        },
        {
          id: "part5_wages_amount",
          type: "currency",
          label: "Wages Amount",
          required: true,
        },
        {
          id: "part5_wages_period",
          type: "select",
          label: "Wages Period",
          required: true,
          options: ["Hour", "Week", "Month", "Year"],
        },
        {
          id: "part5_other_compensation",
          type: "text",
          label: "Other Compensation",
          required: false,
        },
        {
          id: "part5_employment_start",
          type: "date",
          label: "Employment Start Date",
          required: true,
        },
        {
          id: "part5_employment_end",
          type: "date",
          label: "Employment End Date",
          required: true,
        },
        {
          id: "part5_business_type",
          type: "text",
          label: "Type of Business",
          required: true,
        },
        {
          id: "part5_year_established",
          type: "number",
          label: "Year Established",
          required: true,
        },
        {
          id: "part5_employees_us",
          type: "number",
          label: "Employees in U.S.",
          required: true,
        },
        {
          id: "part5_small_business",
          type: "radio",
          label: "25 or fewer employees?",
          required: true,
          options: [
            { value: "YES", label: "Yes" },
            { value: "NO", label: "No" },
          ],
        },
        {
          id: "part5_gross_income",
          type: "currency",
          label: "Gross Annual Income",
          required: false,
        },
        {
          id: "part5_net_income",
          type: "currency",
          label: "Net Annual Income",
          required: false,
        },
      ],
    },
    {
      id: "part6_export_control",
      title: "Part 6. Export Control Certification",
      questions: [
        {
          id: "part6_export_certification",
          type: "radio",
          label: "Export Control Certification",
          required: false,
          conditional: {
            dependsOn: "part2_requested_classification",
            value: ["H-1B", "H-1B1", "L-1", "O-1A"],
          },
          options: [
            { value: "1", label: "License not required" },
            { value: "2", label: "License required" },
          ],
        },
      ],
    },
    {
      id: "part7_petitioner_declaration",
      title: "Part 7. Petitioner Declaration and Signature",
      questions: [
        {
          id: "part7_signatory_last_name",
          type: "text",
          label: "Signatory - Family Name",
          required: true,
        },
        {
          id: "part7_signatory_first_name",
          type: "text",
          label: "Signatory - Given Name",
          required: true,
        },
        {
          id: "part7_signatory_title",
          type: "text",
          label: "Title",
          required: true,
        },
        {
          id: "part7_signatory_signature",
          type: "signature",
          label: "Signature",
          required: true,
        },
        {
          id: "part7_signatory_date",
          type: "date",
          label: "Date of Signature",
          required: true,
        },
        {
          id: "part7_signatory_phone",
          type: "text",
          label: "Daytime Phone",
          required: true,
        },
        {
          id: "part7_signatory_email",
          type: "email",
          label: "Email Address",
          required: false,
        },
      ],
    },
    {
      id: "part8_preparer_info",
      title: "Part 8. Preparer Information",
      questions: [
        {
          id: "part8_preparer_last_name",
          type: "text",
          label: "Preparer - Family Name",
          required: false,
        },
        {
          id: "part8_preparer_first_name",
          type: "text",
          label: "Preparer - Given Name",
          required: false,
        },
        {
          id: "part8_preparer_business",
          type: "text",
          label: "Preparer Business Name",
          required: false,
        },
        {
          id: "part8_preparer_street",
          type: "text",
          label: "Preparer Address - Street",
          required: false,
        },
        {
          id: "part8_preparer_unit_type",
          type: "radio",
          label: "Preparer Unit Type",
          required: false,
          options: [
            { value: "APT", label: "Apt." },
            { value: "STE", label: "Ste." },
            { value: "FLR", label: "Flr." },
          ],
        },
        {
          id: "part8_preparer_unit_number",
          type: "text",
          label: "Preparer Unit Number",
          required: false,
        },
        {
          id: "part8_preparer_city",
          type: "text",
          label: "Preparer City",
          required: false,
        },
        {
          id: "part8_preparer_state",
          type: "text",
          label: "Preparer State",
          required: false,
        },
        {
          id: "part8_preparer_zip",
          type: "text",
          label: "Preparer ZIP Code",
          required: false,
        },
        {
          id: "part8_preparer_province",
          type: "text",
          label: "Preparer Province",
          required: false,
        },
        {
          id: "part8_preparer_postal_code",
          type: "text",
          label: "Preparer Postal Code",
          required: false,
        },
        {
          id: "part8_preparer_country",
          type: "text",
          label: "Preparer Country",
          required: false,
        },
        {
          id: "part8_preparer_phone",
          type: "text",
          label: "Preparer Daytime Phone",
          required: false,
        },
        {
          id: "part8_preparer_fax",
          type: "text",
          label: "Preparer Fax",
          required: false,
        },
        {
          id: "part8_preparer_email",
          type: "email",
          label: "Preparer Email",
          required: false,
        },
        {
          id: "part8_preparer_signature",
          type: "signature",
          label: "Preparer Signature",
          required: false,
        },
        {
          id: "part8_preparer_signature_date",
          type: "date",
          label: "Preparer Signature Date",
          required: false,
        },
      ],
    },
    {
      id: "part9_additional_info",
      title: "Part 9. Additional Information",
      questions: [
        {
          id: "part9_additional_a_number",
          type: "text",
          label: "A-Number",
          required: false,
        },
        {
          id: "part9_info1_page",
          type: "text",
          label: "Information 1 - Page",
          required: false,
        },
        {
          id: "part9_info1_part",
          type: "text",
          label: "Information 1 - Part",
          required: false,
        },
        {
          id: "part9_info1_item",
          type: "text",
          label: "Information 1 - Item",
          required: false,
        },
        {
          id: "part9_info1_text",
          type: "textarea",
          label: "Information 1 - Text",
          required: false,
        },
        {
          id: "part9_info2_page",
          type: "text",
          label: "Information 2 - Page",
          required: false,
        },
        {
          id: "part9_info2_part",
          type: "text",
          label: "Information 2 - Part",
          required: false,
        },
        {
          id: "part9_info2_item",
          type: "text",
          label: "Information 2 - Item",
          required: false,
        },
        {
          id: "part9_info2_text",
          type: "textarea",
          label: "Information 2 - Text",
          required: false,
        },
        {
          id: "part9_info3_page",
          type: "text",
          label: "Information 3 - Page",
          required: false,
        },
        {
          id: "part9_info3_part",
          type: "text",
          label: "Information 3 - Part",
          required: false,
        },
        {
          id: "part9_info3_item",
          type: "text",
          label: "Information 3 - Item",
          required: false,
        },
        {
          id: "part9_info3_text",
          type: "textarea",
          label: "Information 3 - Text",
          required: false,
        },
        {
          id: "part9_info4_page",
          type: "text",
          label: "Information 4 - Page",
          required: false,
        },
        {
          id: "part9_info4_part",
          type: "text",
          label: "Information 4 - Part",
          required: false,
        },
        {
          id: "part9_info4_item",
          type: "text",
          label: "Information 4 - Item",
          required: false,
        },
        {
          id: "part9_info4_text",
          type: "textarea",
          label: "Information 4 - Text",
          required: false,
        },
      ],
    },
  ],
};

const I_129_FIELD_MAPPINGS: FieldMapping[] = [
  // PART 1 MAPPINGS
  {
    questionId: "part1_petitioner_type",
    pdfField: "form1[0].#subform[0].PetitionerType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part1_individual_last_name",
    pdfField: "form1[0].#subform[0].IndividualLastName[0]",
    type: "Text",
  },
  {
    questionId: "part1_individual_first_name",
    pdfField: "form1[0].#subform[0].IndividualFirstName[0]",
    type: "Text",
  },
  {
    questionId: "part1_individual_middle_name",
    pdfField: "form1[0].#subform[0].IndividualMiddleName[0]",
    type: "Text",
  },
  {
    questionId: "part1_company_name",
    pdfField: "form1[0].#subform[0].CompanyName[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_care_of",
    pdfField: "form1[0].#subform[0].CareOfName[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_street",
    pdfField: "form1[0].#subform[0].StreetNumberName[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_unit_type",
    pdfField: "form1[0].#subform[0].UnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part1_mailing_unit_number",
    pdfField: "form1[0].#subform[0].UnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_city",
    pdfField: "form1[0].#subform[0].CityTown[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_state",
    pdfField: "form1[0].#subform[0].State[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_zip",
    pdfField: "form1[0].#subform[0].ZIPCode[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_province",
    pdfField: "form1[0].#subform[0].Province[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_postal_code",
    pdfField: "form1[0].#subform[0].PostalCode[0]",
    type: "Text",
  },
  {
    questionId: "part1_mailing_country",
    pdfField: "form1[0].#subform[0].Country[0]",
    type: "Text",
  },
  {
    questionId: "part1_daytime_phone",
    pdfField: "form1[0].#subform[0].DaytimePhone[0]",
    type: "Text",
  },
  {
    questionId: "part1_mobile_phone",
    pdfField: "form1[0].#subform[0].MobilePhone[0]",
    type: "Text",
  },
  {
    questionId: "part1_email_address",
    pdfField: "form1[0].#subform[0].EmailAddress[0]",
    type: "Text",
  },
  {
    questionId: "part1_fein",
    pdfField: "form1[0].#subform[0].FEIN[0]",
    type: "Text",
  },
  {
    questionId: "part1_nonprofit_status",
    pdfField: "form1[0].#subform[0].NonprofitStatus[0]",
    type: "RadioButton",
  },
  {
    questionId: "part1_individual_tax_number",
    pdfField: "form1[0].#subform[0].IndividualTaxNumber[0]",
    type: "Text",
  },
  {
    questionId: "part1_petitioner_ssn",
    pdfField: "form1[0].#subform[0].PetitionerSSN[0]",
    type: "Text",
  },

  // PART 2 MAPPINGS
  {
    questionId: "part2_requested_classification",
    pdfField: "form1[0].#subform[0].RequestedClassification[0]",
    type: "Text",
  },
  {
    questionId: "part2_basis_classification",
    pdfField: "form1[0].#subform[0].BasisClassification[0]",
    type: "RadioButton",
  },
  {
    questionId: "part2_previous_receipt",
    pdfField: "form1[0].#subform[0].PreviousReceipt[0]",
    type: "Text",
  },
  {
    questionId: "part2_requested_action",
    pdfField: "form1[0].#subform[0].RequestedAction[0]",
    type: "RadioButton",
  },
  {
    questionId: "part2_total_workers",
    pdfField: "form1[0].#subform[0].TotalWorkers[0]",
    type: "Number",
  },

  // PART 3 MAPPINGS
  {
    questionId: "part3_beneficiary_type",
    pdfField: "form1[0].#subform[0].BeneficiaryType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part3_group_name",
    pdfField: "form1[0].#subform[0].GroupName[0]",
    type: "Text",
  },
  {
    questionId: "part3_beneficiary_last_name",
    pdfField: "form1[0].#subform[0].BeneficiaryLastName[0]",
    type: "Text",
  },
  {
    questionId: "part3_beneficiary_first_name",
    pdfField: "form1[0].#subform[0].BeneficiaryFirstName[0]",
    type: "Text",
  },
  {
    questionId: "part3_beneficiary_middle_name",
    pdfField: "form1[0].#subform[0].BeneficiaryMiddleName[0]",
    type: "Text",
  },
  {
    questionId: "part3_other_names",
    pdfField: "form1[0].#subform[0].OtherNames[0]",
    type: "Text",
  },
  {
    questionId: "part3_date_of_birth",
    pdfField: "form1[0].#subform[0].DateOfBirth[0]",
    type: "Date",
  },
  {
    questionId: "part3_sex",
    pdfField: "form1[0].#subform[0].Sex[0]",
    type: "RadioButton",
  },
  {
    questionId: "part3_beneficiary_ssn",
    pdfField: "form1[0].#subform[0].BeneficiarySSN[0]",
    type: "Text",
  },
  {
    questionId: "part3_a_number",
    pdfField: "form1[0].#subform[0].ANumber[0]",
    type: "Text",
  },
  {
    questionId: "part3_country_of_birth",
    pdfField: "form1[0].#subform[0].CountryOfBirth[0]",
    type: "Text",
  },
  {
    questionId: "part3_province_of_birth",
    pdfField: "form1[0].#subform[0].ProvinceOfBirth[0]",
    type: "Text",
  },
  {
    questionId: "part3_country_of_citizenship",
    pdfField: "form1[0].#subform[0].CountryOfCitizenship[0]",
    type: "Text",
  },
  {
    questionId: "part3_in_us",
    pdfField: "form1[0].#subform[0].InUS[0]",
    type: "RadioButton",
  },
  {
    questionId: "part3_i94_number",
    pdfField: "form1[0].#subform[0].I94Number[0]",
    type: "Text",
  },
  {
    questionId: "part3_last_arrival_date",
    pdfField: "form1[0].#subform[0].LastArrivalDate[0]",
    type: "Date",
  },
  {
    questionId: "part3_passport_number",
    pdfField: "form1[0].#subform[0].PassportNumber[0]",
    type: "Text",
  },
  {
    questionId: "part3_passport_issue_date",
    pdfField: "form1[0].#subform[0].PassportIssueDate[0]",
    type: "Date",
  },
  {
    questionId: "part3_passport_expiry_date",
    pdfField: "form1[0].#subform[0].PassportExpiryDate[0]",
    type: "Date",
  },
  {
    questionId: "part3_passport_country",
    pdfField: "form1[0].#subform[0].PassportCountry[0]",
    type: "Text",
  },
  {
    questionId: "part3_current_status",
    pdfField: "form1[0].#subform[0].CurrentStatus[0]",
    type: "Text",
  },
  {
    questionId: "part3_status_expires",
    pdfField: "form1[0].#subform[0].StatusExpires[0]",
    type: "Date",
  },
  {
    questionId: "part3_us_address_street",
    pdfField: "form1[0].#subform[0].USAddressStreet[0]",
    type: "Text",
  },
  {
    questionId: "part3_us_address_unit_type",
    pdfField: "form1[0].#subform[0].USAddressUnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part3_us_address_unit_number",
    pdfField: "form1[0].#subform[0].USAddressUnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part3_us_address_city",
    pdfField: "form1[0].#subform[0].USAddressCity[0]",
    type: "Text",
  },
  {
    questionId: "part3_us_address_state",
    pdfField: "form1[0].#subform[0].USAddressState[0]",
    type: "Text",
  },
  {
    questionId: "part3_us_address_zip",
    pdfField: "form1[0].#subform[0].USAddressZIP[0]",
    type: "Text",
  },
  {
    questionId: "part3_sevis_number",
    pdfField: "form1[0].#subform[0].SEVISNumber[0]",
    type: "Text",
  },
  {
    questionId: "part3_ead_number",
    pdfField: "form1[0].#subform[0].EADNumber[0]",
    type: "Text",
  },

  // PART 4 MAPPINGS
  {
    questionId: "part4_office_type",
    pdfField: "form1[0].#subform[0].OfficeType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_office_city",
    pdfField: "form1[0].#subform[0].OfficeCity[0]",
    type: "Text",
  },
  {
    questionId: "part4_office_state_country",
    pdfField: "form1[0].#subform[0].OfficeStateCountry[0]",
    type: "Text",
  },
  {
    questionId: "part4_valid_passport",
    pdfField: "form1[0].#subform[0].ValidPassport[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_other_petitions",
    pdfField: "form1[0].#subform[0].OtherPetitions[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_other_petitions_count",
    pdfField: "form1[0].#subform[0].OtherPetitionsCount[0]",
    type: "Number",
  },
  {
    questionId: "part4_replacement_i94",
    pdfField: "form1[0].#subform[0].ReplacementI94[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_replacement_i94_count",
    pdfField: "form1[0].#subform[0].ReplacementI94Count[0]",
    type: "Number",
  },
  {
    questionId: "part4_filing_dependents",
    pdfField: "form1[0].#subform[0].FilingDependents[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_dependents_count",
    pdfField: "form1[0].#subform[0].DependentsCount[0]",
    type: "Number",
  },
  {
    questionId: "part4_removal_proceedings",
    pdfField: "form1[0].#subform[0].RemovalProceedings[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_immigrant_petition",
    pdfField: "form1[0].#subform[0].ImmigrantPetition[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_previous_nonimmigrant",
    pdfField: "form1[0].#subform[0].PreviousNonimmigrant[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_filing_new",
    pdfField: "form1[0].#subform[0].FilingNew[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_given_classification",
    pdfField: "form1[0].#subform[0].GivenClassification[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_denied_classification",
    pdfField: "form1[0].#subform[0].DeniedClassification[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_group_year",
    pdfField: "form1[0].#subform[0].GroupYear[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_j1_exchange",
    pdfField: "form1[0].#subform[0].J1Exchange[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_j1_dates",
    pdfField: "form1[0].#subform[0].J1Dates[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_address_street",
    pdfField: "form1[0].#subform[0].ForeignAddressStreet[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_unit_type",
    pdfField: "form1[0].#subform[0].ForeignUnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part4_foreign_unit_number",
    pdfField: "form1[0].#subform[0].ForeignUnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_city",
    pdfField: "form1[0].#subform[0].ForeignCity[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_state",
    pdfField: "form1[0].#subform[0].ForeignState[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_country",
    pdfField: "form1[0].#subform[0].ForeignCountry[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_postal_code",
    pdfField: "form1[0].#subform[0].ForeignPostalCode[0]",
    type: "Text",
  },
  {
    questionId: "part4_foreign_province",
    pdfField: "form1[0].#subform[0].ForeignProvince[0]",
    type: "Text",
  },

  // PART 5 MAPPINGS
  {
    questionId: "part5_job_title",
    pdfField: "form1[0].#subform[0].JobTitle[0]",
    type: "Text",
  },
  {
    questionId: "part5_lca_case_number",
    pdfField: "form1[0].#subform[0].LCACaseNumber[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_street",
    pdfField: "form1[0].#subform[0].Address1Street[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_unit_type",
    pdfField: "form1[0].#subform[0].Address1UnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_address1_unit_number",
    pdfField: "form1[0].#subform[0].Address1UnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_city",
    pdfField: "form1[0].#subform[0].Address1City[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_state",
    pdfField: "form1[0].#subform[0].Address1State[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_zip",
    pdfField: "form1[0].#subform[0].Address1ZIP[0]",
    type: "Text",
  },
  {
    questionId: "part5_address1_third_party",
    pdfField: "form1[0].#subform[0].Address1ThirdParty[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_address1_third_party_name",
    pdfField: "form1[0].#subform[0].Address1ThirdPartyName[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_street",
    pdfField: "form1[0].#subform[0].Address2Street[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_unit_type",
    pdfField: "form1[0].#subform[0].Address2UnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_address2_unit_number",
    pdfField: "form1[0].#subform[0].Address2UnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_city",
    pdfField: "form1[0].#subform[0].Address2City[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_state",
    pdfField: "form1[0].#subform[0].Address2State[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_zip",
    pdfField: "form1[0].#subform[0].Address2ZIP[0]",
    type: "Text",
  },
  {
    questionId: "part5_address2_third_party",
    pdfField: "form1[0].#subform[0].Address2ThirdParty[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_address2_third_party_name",
    pdfField: "form1[0].#subform[0].Address2ThirdPartyName[0]",
    type: "Text",
  },
  {
    questionId: "part5_include_itinerary",
    pdfField: "form1[0].#subform[0].IncludeItinerary[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_work_off_site",
    pdfField: "form1[0].#subform[0].WorkOffSite[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_work_cnmi",
    pdfField: "form1[0].#subform[0].WorkCNMI[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_full_time",
    pdfField: "form1[0].#subform[0].FullTime[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_hours_per_week",
    pdfField: "form1[0].#subform[0].HoursPerWeek[0]",
    type: "Number",
  },
  {
    questionId: "part5_wages_amount",
    pdfField: "form1[0].#subform[0].WagesAmount[0]",
    type: "Currency",
  },
  {
    questionId: "part5_wages_period",
    pdfField: "form1[0].#subform[0].WagesPeriod[0]",
    type: "Text",
  },
  {
    questionId: "part5_other_compensation",
    pdfField: "form1[0].#subform[0].OtherCompensation[0]",
    type: "Text",
  },
  {
    questionId: "part5_employment_start",
    pdfField: "form1[0].#subform[0].EmploymentStart[0]",
    type: "Date",
  },
  {
    questionId: "part5_employment_end",
    pdfField: "form1[0].#subform[0].EmploymentEnd[0]",
    type: "Date",
  },
  {
    questionId: "part5_business_type",
    pdfField: "form1[0].#subform[0].BusinessType[0]",
    type: "Text",
  },
  {
    questionId: "part5_year_established",
    pdfField: "form1[0].#subform[0].YearEstablished[0]",
    type: "Number",
  },
  {
    questionId: "part5_employees_us",
    pdfField: "form1[0].#subform[0].EmployeesUS[0]",
    type: "Number",
  },
  {
    questionId: "part5_small_business",
    pdfField: "form1[0].#subform[0].SmallBusiness[0]",
    type: "RadioButton",
  },
  {
    questionId: "part5_gross_income",
    pdfField: "form1[0].#subform[0].GrossIncome[0]",
    type: "Currency",
  },
  {
    questionId: "part5_net_income",
    pdfField: "form1[0].#subform[0].NetIncome[0]",
    type: "Currency",
  },

  // PART 6 MAPPINGS
  {
    questionId: "part6_export_certification",
    pdfField: "form1[0].#subform[0].ExportCertification[0]",
    type: "RadioButton",
  },

  // PART 7 MAPPINGS
  {
    questionId: "part7_signatory_last_name",
    pdfField: "form1[0].#subform[0].SignatoryLastName[0]",
    type: "Text",
  },
  {
    questionId: "part7_signatory_first_name",
    pdfField: "form1[0].#subform[0].SignatoryFirstName[0]",
    type: "Text",
  },
  {
    questionId: "part7_signatory_title",
    pdfField: "form1[0].#subform[0].SignatoryTitle[0]",
    type: "Text",
  },
  {
    questionId: "part7_signatory_signature",
    pdfField: "form1[0].#subform[0].SignatorySignature[0]",
    type: "Signature",
  },
  {
    questionId: "part7_signatory_date",
    pdfField: "form1[0].#subform[0].SignatoryDate[0]",
    type: "Date",
  },
  {
    questionId: "part7_signatory_phone",
    pdfField: "form1[0].#subform[0].SignatoryPhone[0]",
    type: "Text",
  },
  {
    questionId: "part7_signatory_email",
    pdfField: "form1[0].#subform[0].SignatoryEmail[0]",
    type: "Text",
  },

  // PART 8 MAPPINGS
  {
    questionId: "part8_preparer_last_name",
    pdfField: "form1[0].#subform[0].PreparerLastName[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_first_name",
    pdfField: "form1[0].#subform[0].PreparerFirstName[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_business",
    pdfField: "form1[0].#subform[0].PreparerBusiness[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_street",
    pdfField: "form1[0].#subform[0].PreparerStreet[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_unit_type",
    pdfField: "form1[0].#subform[0].PreparerUnitType[0]",
    type: "RadioButton",
  },
  {
    questionId: "part8_preparer_unit_number",
    pdfField: "form1[0].#subform[0].PreparerUnitNumber[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_city",
    pdfField: "form1[0].#subform[0].PreparerCity[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_state",
    pdfField: "form1[0].#subform[0].PreparerState[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_zip",
    pdfField: "form1[0].#subform[0].PreparerZIP[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_province",
    pdfField: "form1[0].#subform[0].PreparerProvince[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_postal_code",
    pdfField: "form1[0].#subform[0].PreparerPostalCode[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_country",
    pdfField: "form1[0].#subform[0].PreparerCountry[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_phone",
    pdfField: "form1[0].#subform[0].PreparerPhone[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_fax",
    pdfField: "form1[0].#subform[0].PreparerFax[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_email",
    pdfField: "form1[0].#subform[0].PreparerEmail[0]",
    type: "Text",
  },
  {
    questionId: "part8_preparer_signature",
    pdfField: "form1[0].#subform[0].PreparerSignature[0]",
    type: "Signature",
  },
  {
    questionId: "part8_preparer_signature_date",
    pdfField: "form1[0].#subform[0].PreparerSignatureDate[0]",
    type: "Date",
  },

  // PART 9 MAPPINGS
  {
    questionId: "part9_additional_a_number",
    pdfField: "form1[0].#subform[0].AdditionalANumber[0]",
    type: "Text",
  },
  {
    questionId: "part9_info1_page",
    pdfField: "form1[0].#subform[0].Info1Page[0]",
    type: "Text",
  },
  {
    questionId: "part9_info1_part",
    pdfField: "form1[0].#subform[0].Info1Part[0]",
    type: "Text",
  },
  {
    questionId: "part9_info1_item",
    pdfField: "form1[0].#subform[0].Info1Item[0]",
    type: "Text",
  },
  {
    questionId: "part9_info1_text",
    pdfField: "form1[0].#subform[0].Info1Text[0]",
    type: "TextArea",
  },
  {
    questionId: "part9_info2_page",
    pdfField: "form1[0].#subform[0].Info2Page[0]",
    type: "Text",
  },
  {
    questionId: "part9_info2_part",
    pdfField: "form1[0].#subform[0].Info2Part[0]",
    type: "Text",
  },
  {
    questionId: "part9_info2_item",
    pdfField: "form1[0].#subform[0].Info2Item[0]",
    type: "Text",
  },
  {
    questionId: "part9_info2_text",
    pdfField: "form1[0].#subform[0].Info2Text[0]",
    type: "TextArea",
  },
  {
    questionId: "part9_info3_page",
    pdfField: "form1[0].#subform[0].Info3Page[0]",
    type: "Text",
  },
  {
    questionId: "part9_info3_part",
    pdfField: "form1[0].#subform[0].Info3Part[0]",
    type: "Text",
  },
  {
    questionId: "part9_info3_item",
    pdfField: "form1[0].#subform[0].Info3Item[0]",
    type: "Text",
  },
  {
    questionId: "part9_info3_text",
    pdfField: "form1[0].#subform[0].Info3Text[0]",
    type: "TextArea",
  },
  {
    questionId: "part9_info4_page",
    pdfField: "form1[0].#subform[0].Info4Page[0]",
    type: "Text",
  },
  {
    questionId: "part9_info4_part",
    pdfField: "form1[0].#subform[0].Info4Part[0]",
    type: "Text",
  },
  {
    questionId: "part9_info4_item",
    pdfField: "form1[0].#subform[0].Info4Item[0]",
    type: "Text",
  },
  {
    questionId: "part9_info4_text",
    pdfField: "form1[0].#subform[0].Info4Text[0]",
    type: "TextArea",
  },

  // Note: For supplements (E-1/E-2, H, L, O/P, etc.), you would continue with the same pattern:
  // 1. Add supplement sections to the definition with consistent IDs
  // 2. Add corresponding mappings with matching questionIds
];
