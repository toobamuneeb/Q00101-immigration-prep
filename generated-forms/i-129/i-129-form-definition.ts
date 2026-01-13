/**
 * I-129 Complete Form Definition with Proper PDF Mappings
 * Generated: 2026-01-05T22:09:05.457Z
 * Source: Actual PDF fields from i-129-unlocked_fields.json
 */

export interface I129Field {
  fieldId: string;
  fieldLabel: string;
  pdfField: string | null;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'radio' | 'checkbox';
  required: boolean;
  pattern?: string;
  options?: string[] | Array<{ value: string; label: string; pdfField?: string | null }>;
}

export interface I129Question {
  questionId: string;
  questionText: string;
  required: boolean;
  fields: I129Field[];
}

export interface I129Section {
  sectionId: string;
  sectionTitle: string;
  sectionNumber: number;
  questions: I129Question[];
}

export interface I129FormDefinition {
  formId: string;
  formName: string;
  formVersion: string;
  sections: I129Section[];
}

export const I_129_FORM_DEFINITION: I129FormDefinition = {
  "formId": "i-129",
  "formName": "Petition for a Nonimmigrant Worker",
  "formVersion": "2024",
  "sections": [
    {
      "sectionId": "part1",
      "sectionTitle": "Part 1: Information About You (Petitioner)",
      "sectionNumber": 1,
      "questions": [
        {
          "questionId": "petitioner_legal_name",
          "questionText": "Your Full Legal Name",
          "required": true,
          "fields": [
            {
              "fieldId": "family_name",
              "fieldLabel": "Family Name (Last Name)",
              "pdfField": "form1[0].#subform[0].Line1_FamilyName[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "given_name",
              "fieldLabel": "Given Name (First Name)",
              "pdfField": "form1[0].#subform[0].Line1_GivenName[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "middle_name",
              "fieldLabel": "Middle Name",
              "pdfField": "form1[0].#subform[0].Line1_MiddleName[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "petitioner_company",
          "questionText": "Company or Organization Name",
          "required": true,
          "fields": [
            {
              "fieldId": "company_name",
              "fieldLabel": "Company or Organization Name",
              "pdfField": "form1[0].#subform[0].Line3_CompanyorOrgName[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "petitioner_address",
          "questionText": "Mailing Address",
          "required": true,
          "fields": [
            {
              "fieldId": "street",
              "fieldLabel": "Street Number and Name",
              "pdfField": "form1[0].#subform[0].Line7b_StreetNumberName[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "unit_type",
              "fieldLabel": "Unit Type",
              "pdfField": "form1[0].#subform[0].Line3_Unit[0]",
              "type": "select",
              "options": [
                "Apt",
                "Ste",
                "Flr"
              ],
              "required": false
            },
            {
              "fieldId": "unit_number",
              "fieldLabel": "Unit Number",
              "pdfField": "form1[0].#subform[0].Line3_AptSteFlrNumber[0]",
              "type": "text",
              "required": false
            },
            {
              "fieldId": "city",
              "fieldLabel": "City or Town",
              "pdfField": "form1[0].#subform[0].Line_CityTown[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "state",
              "fieldLabel": "State",
              "pdfField": "form1[0].#subform[0].P1_Line3_State[0]",
              "type": "select",
              "required": true
            },
            {
              "fieldId": "zip_code",
              "fieldLabel": "ZIP Code",
              "pdfField": "form1[0].#subform[0].P1_Line3_ZipCode[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "petitioner_ein",
          "questionText": "U.S. Employer Identification Number (EIN)",
          "required": true,
          "fields": [
            {
              "fieldId": "ein",
              "fieldLabel": "EIN",
              "pdfField": "form1[0].#subform[1].Line3_TaxNumber[0]",
              "type": "text",
              "required": true,
              "pattern": "^\\d{2}-\\d{7}$"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "part2",
      "sectionTitle": "Part 2: Petition Type",
      "sectionNumber": 2,
      "questions": [
        {
          "questionId": "petition_type",
          "questionText": "This petition is being filed for",
          "required": true,
          "fields": [
            {
              "fieldId": "petition_type",
              "fieldLabel": "Petition Type",
              "pdfField": null,
              "type": "radio",
              "required": true,
              "options": [
                {
                  "value": "new",
                  "label": "New employment",
                  "pdfField": "form1[0].#subform[1].new[0]"
                },
                {
                  "value": "continuation",
                  "label": "Continuation of previously approved employment",
                  "pdfField": "form1[0].#subform[1].continuation[0]"
                },
                {
                  "value": "change",
                  "label": "Change in previously approved employment",
                  "pdfField": "form1[0].#subform[1].previouschange[0]"
                },
                {
                  "value": "amended",
                  "label": "Amended petition",
                  "pdfField": "form1[0].#subform[1].amended[0]"
                },
                {
                  "value": "concurrent",
                  "label": "Concurrent employment",
                  "pdfField": "form1[0].#subform[1].concurrent[0]"
                }
              ]
            }
          ]
        },
        {
          "questionId": "classification",
          "questionText": "Classification Sought",
          "required": true,
          "fields": [
            {
              "fieldId": "classification_symbol",
              "fieldLabel": "Classification Symbol",
              "pdfField": "form1[0].#subform[1].Part2_ClassificationSymbol[0]",
              "type": "select",
              "required": true,
              "options": [
                "H-1B",
                "H-1B1",
                "H-2A",
                "H-2B",
                "H-3",
                "L-1A",
                "L-1B",
                "O-1",
                "O-2",
                "P-1",
                "P-2",
                "P-3",
                "Q-1",
                "R-1",
                "E-1",
                "E-2",
                "E-3",
                "TN"
              ]
            }
          ]
        },
        {
          "questionId": "total_workers",
          "questionText": "Total number of workers in this petition",
          "required": true,
          "fields": [
            {
              "fieldId": "total_workers",
              "fieldLabel": "Number of Workers",
              "pdfField": "form1[0].#subform[1].TtlNumbersofWorker[0]",
              "type": "text",
              "required": true,
              "pattern": "^\\d+$"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "part3",
      "sectionTitle": "Part 3: Information About the Beneficiary",
      "sectionNumber": 3,
      "questions": [
        {
          "questionId": "beneficiary_name",
          "questionText": "Beneficiary's Full Legal Name",
          "required": true,
          "fields": [
            {
              "fieldId": "family_name",
              "fieldLabel": "Family Name (Last Name)",
              "pdfField": "form1[0].#subform[1].Part3_Line2_FamilyName[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "given_name",
              "fieldLabel": "Given Name (First Name)",
              "pdfField": "form1[0].#subform[1].Part3_Line2_GivenName[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "middle_name",
              "fieldLabel": "Middle Name",
              "pdfField": "form1[0].#subform[1].Part3_Line2_MiddleName[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "beneficiary_dob",
          "questionText": "Date of Birth",
          "required": true,
          "fields": [
            {
              "fieldId": "date_of_birth",
              "fieldLabel": "Date of Birth (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[2].Line6_DateOfBirth[0]",
              "type": "date",
              "required": true
            }
          ]
        },
        {
          "questionId": "beneficiary_country",
          "questionText": "Country Information",
          "required": true,
          "fields": [
            {
              "fieldId": "country_of_birth",
              "fieldLabel": "Country of Birth",
              "pdfField": "form1[0].#subform[2].Part3Line4_CountryOfBirth[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "country_of_citizenship",
              "fieldLabel": "Country of Citizenship",
              "pdfField": "form1[0].#subform[2].Part3Line4_CountryOfCitizenship[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "beneficiary_passport",
          "questionText": "Passport Information",
          "required": true,
          "fields": [
            {
              "fieldId": "passport_number",
              "fieldLabel": "Passport Number",
              "pdfField": "form1[0].#subform[2].Part3Line5_PassportorTravDoc[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "country_of_issuance",
              "fieldLabel": "Country of Issuance",
              "pdfField": "form1[0].#subform[2].Line_CountryOfIssuance[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "beneficiary_arrival",
          "questionText": "Date of Last Arrival in the U.S.",
          "required": false,
          "fields": [
            {
              "fieldId": "date_of_arrival",
              "fieldLabel": "Date of Arrival (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[2].Part3Line5_DateofArrival[0]",
              "type": "date",
              "required": false
            },
            {
              "fieldId": "i94_number",
              "fieldLabel": "I-94 Arrival-Departure Record Number",
              "pdfField": "form1[0].#subform[2].Part3Line5_ArrivalDeparture[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "beneficiary_status",
          "questionText": "Current Nonimmigrant Status",
          "required": false,
          "fields": [
            {
              "fieldId": "current_status",
              "fieldLabel": "Current Status",
              "pdfField": "form1[0].#subform[2].Line11g_CurrentNon[0]",
              "type": "select",
              "required": false
            },
            {
              "fieldId": "status_expires",
              "fieldLabel": "Status Expires (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[2].Line11h_DateStatusExpires[0]",
              "type": "date",
              "required": false
            }
          ]
        },
        {
          "questionId": "beneficiary_ssn",
          "questionText": "U.S. Social Security Number (if any)",
          "required": false,
          "fields": [
            {
              "fieldId": "ssn",
              "fieldLabel": "Social Security Number",
              "pdfField": "form1[0].#subform[2].Line5_SSN[0]",
              "type": "text",
              "required": false,
              "pattern": "^\\d{3}-\\d{2}-\\d{4}$"
            }
          ]
        }
      ]
    },
    {
      "sectionId": "part5",
      "sectionTitle": "Part 5: Basic Information About the Proposed Employment",
      "sectionNumber": 5,
      "questions": [
        {
          "questionId": "job_title",
          "questionText": "Job Title",
          "required": true,
          "fields": [
            {
              "fieldId": "job_title",
              "fieldLabel": "Job Title",
              "pdfField": "form1[0].#subform[4].Part5_Q1_JobTitle[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "employment_dates",
          "questionText": "Requested Employment Dates",
          "required": true,
          "fields": [
            {
              "fieldId": "start_date",
              "fieldLabel": "Start Date (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[4].Part5_Q10_DateFrom[0]",
              "type": "date",
              "required": true
            },
            {
              "fieldId": "end_date",
              "fieldLabel": "End Date (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[4].Part5_Q10_DateTo[0]",
              "type": "date",
              "required": true
            }
          ]
        },
        {
          "questionId": "work_location",
          "questionText": "Is this a full-time position?",
          "required": true,
          "fields": [
            {
              "fieldId": "full_time",
              "fieldLabel": "Full-time Position",
              "pdfField": "form1[0].#subform[4].P5Line4_Yes[0]",
              "type": "radio",
              "required": true,
              "options": [
                {
                  "value": "yes",
                  "label": "Yes",
                  "pdfField": "form1[0].#subform[4].P5Line4_Yes[0]"
                },
                {
                  "value": "no",
                  "label": "No",
                  "pdfField": "form1[0].#subform[4].P5Line4_No[0]"
                }
              ]
            }
          ]
        },
        {
          "questionId": "wages",
          "questionText": "Wages or Other Compensation",
          "required": true,
          "fields": [
            {
              "fieldId": "wage_amount",
              "fieldLabel": "Wage Amount",
              "pdfField": "form1[0].#subform[4].Line8_Wages[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "wage_period",
              "fieldLabel": "Per",
              "pdfField": "form1[0].#subform[4].Line8_Per[0]",
              "type": "select",
              "required": true,
              "options": [
                "Hour",
                "Week",
                "Month",
                "Year"
              ]
            }
          ]
        },
        {
          "questionId": "work_hours",
          "questionText": "Number of Hours Per Week",
          "required": true,
          "fields": [
            {
              "fieldId": "hours_per_week",
              "fieldLabel": "Hours Per Week",
              "pdfField": "form1[0].#subform[4].P5Line9_Hours[0]",
              "type": "text",
              "required": true,
              "pattern": "^\\d+$"
            }
          ]
        },
        {
          "questionId": "business_type",
          "questionText": "Type of Business",
          "required": true,
          "fields": [
            {
              "fieldId": "business_type",
              "fieldLabel": "Describe the type of business",
              "pdfField": "form1[0].#subform[5].Part5Line12_TypeofBusiness[0]",
              "type": "text",
              "required": true
            }
          ]
        },
        {
          "questionId": "company_info",
          "questionText": "Company Information",
          "required": true,
          "fields": [
            {
              "fieldId": "year_established",
              "fieldLabel": "Year Established",
              "pdfField": "form1[0].#subform[5].P5Line13_YearEstablished[0]",
              "type": "text",
              "required": true,
              "pattern": "^\\d{4}$"
            },
            {
              "fieldId": "number_of_employees",
              "fieldLabel": "Current Number of Employees",
              "pdfField": "form1[0].#subform[5].P5Line14_NumberofEmployees[0]",
              "type": "text",
              "required": true,
              "pattern": "^\\d+$"
            },
            {
              "fieldId": "gross_annual_income",
              "fieldLabel": "Gross Annual Income",
              "pdfField": "form1[0].#subform[5].Line15_GrossAnnualIncome[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "net_annual_income",
              "fieldLabel": "Net Annual Income",
              "pdfField": "form1[0].#subform[5].Line16_NetAnnualIncome[0]",
              "type": "text",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "sectionId": "part6",
      "sectionTitle": "Part 6: Petitioner's Statement, Contact Information, Certification, and Signature",
      "sectionNumber": 6,
      "questions": [
        {
          "questionId": "petitioner_contact",
          "questionText": "Contact Information",
          "required": true,
          "fields": [
            {
              "fieldId": "daytime_phone",
              "fieldLabel": "Daytime Phone Number",
              "pdfField": "form1[0].#subform[6].Pt7Line3_DaytimePhoneNumber1[0]",
              "type": "tel",
              "required": true
            },
            {
              "fieldId": "email",
              "fieldLabel": "Email Address",
              "pdfField": "form1[0].#subform[6].Pt7Line3_EmailAddress[0]",
              "type": "email",
              "required": true
            }
          ]
        },
        {
          "questionId": "petitioner_signature",
          "questionText": "Signature",
          "required": true,
          "fields": [
            {
              "fieldId": "signature",
              "fieldLabel": "Signature of Petitioner",
              "pdfField": "form1[0].#subform[6].P5_Line6a_SignatureofApplicant[0]",
              "type": "text",
              "required": true
            },
            {
              "fieldId": "signature_date",
              "fieldLabel": "Date of Signature (mm/dd/yyyy)",
              "pdfField": "form1[0].#subform[6].Line1b_DateofSignature[0]",
              "type": "date",
              "required": true
            }
          ]
        }
      ]
    },
    {
      "sectionId": "part8",
      "sectionTitle": "Part 8: Preparer's Contact Information, Certification, and Signature",
      "sectionNumber": 8,
      "questions": [
        {
          "questionId": "preparer_name",
          "questionText": "Preparer's Full Name",
          "required": false,
          "fields": [
            {
              "fieldId": "family_name",
              "fieldLabel": "Family Name (Last Name)",
              "pdfField": "form1[0].#subform[6].Line_PreparerFamilyName[0]",
              "type": "text",
              "required": false
            },
            {
              "fieldId": "given_name",
              "fieldLabel": "Given Name (First Name)",
              "pdfField": "form1[0].#subform[6].Line_PreparerGivenName[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "preparer_business",
          "questionText": "Preparer's Business or Organization Name",
          "required": false,
          "fields": [
            {
              "fieldId": "business_name",
              "fieldLabel": "Business Name",
              "pdfField": "form1[0].#subform[6].Line_BusinessName[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "preparer_address",
          "questionText": "Preparer's Mailing Address",
          "required": false,
          "fields": [
            {
              "fieldId": "street",
              "fieldLabel": "Street Number and Name",
              "pdfField": "form1[0].#subform[6].Line7b_StreetNumberName[1]",
              "type": "text",
              "required": false
            },
            {
              "fieldId": "city",
              "fieldLabel": "City or Town",
              "pdfField": "form1[0].#subform[6].Line_CityTown[1]",
              "type": "text",
              "required": false
            },
            {
              "fieldId": "state",
              "fieldLabel": "State",
              "pdfField": "form1[0].#subform[6].P8_Line3_State[0]",
              "type": "select",
              "required": false
            },
            {
              "fieldId": "zip_code",
              "fieldLabel": "ZIP Code",
              "pdfField": "form1[0].#subform[6].P8_Line3_ZipCode[0]",
              "type": "text",
              "required": false
            }
          ]
        },
        {
          "questionId": "preparer_contact",
          "questionText": "Preparer's Contact Information",
          "required": false,
          "fields": [
            {
              "fieldId": "daytime_phone",
              "fieldLabel": "Daytime Phone Number",
              "pdfField": "form1[0].#subform[0].Line2_DaytimePhoneNumber1_Part8[0]",
              "type": "tel",
              "required": false
            },
            {
              "fieldId": "mobile_phone",
              "fieldLabel": "Mobile Phone Number",
              "pdfField": "form1[0].#subform[0].Line3_MobilePhoneNumber1_Part8[0]",
              "type": "tel",
              "required": false
            },
            {
              "fieldId": "email",
              "fieldLabel": "Email Address",
              "pdfField": "form1[0].#subform[0].Line9_EmailAddress[0]",
              "type": "email",
              "required": false
            }
          ]
        }
      ]
    }
  ]
};

// Helper function to get all PDF field mappings
export function getAllPdfFieldMappings(): Map<string, string> {
  const mappings = new Map<string, string>();
  
  I_129_FORM_DEFINITION.sections.forEach(section => {
    section.questions.forEach(question => {
      question.fields.forEach(field => {
        if (field.pdfField) {
          const key = `${section.sectionId}.${question.questionId}.${field.fieldId}`;
          mappings.set(key, field.pdfField);
        }
        // Handle radio/checkbox options with individual PDF fields
        if (field.options && Array.isArray(field.options)) {
          field.options.forEach((opt: any) => {
            if (typeof opt === 'object' && opt.pdfField) {
              const key = `${section.sectionId}.${question.questionId}.${field.fieldId}.${opt.value}`;
              mappings.set(key, opt.pdfField);
            }
          });
        }
      });
    });
  });
  
  return mappings;
}

// Helper function to get section by ID
export function getSectionById(sectionId: string): I129Section | undefined {
  return I_129_FORM_DEFINITION.sections.find(s => s.sectionId === sectionId);
}

// Helper function to get question by ID
export function getQuestionById(sectionId: string, questionId: string): I129Question | undefined {
  const section = getSectionById(sectionId);
  return section?.questions.find(q => q.questionId === questionId);
}

// Helper function to get field by ID
export function getFieldById(sectionId: string, questionId: string, fieldId: string): I129Field | undefined {
  const question = getQuestionById(sectionId, questionId);
  return question?.fields.find(f => f.fieldId === fieldId);
}

// Export section IDs for easy reference
export const SECTION_IDS = {
  PART1: 'part1',
  PART2: 'part2',
  PART3: 'part3',
  PART5: 'part5',
  PART6: 'part6',
  PART8: 'part8'
} as const;
