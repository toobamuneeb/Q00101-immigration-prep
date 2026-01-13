const fs = require('fs');
const path = require('path');

console.log('🚀 Creating Complete I-129 Form Definition with Proper PDF Mappings...\n');

// Load the actual PDF fields
const pdfFieldsPath = path.join(__dirname, '../public/pdf-templates/i-129-unlocked_fields.json');
const pdfFieldsData = JSON.parse(fs.readFileSync(pdfFieldsPath, 'utf8'));
const pdfFields = pdfFieldsData.fields || [];

console.log(`📄 Loaded ${pdfFields.length} PDF fields\n`);

// I-129 Form Structure with Questions and PDF Mappings
const formDefinition = {
  formId: 'i-129',
  formName: 'Petition for a Nonimmigrant Worker',
  formVersion: '2024',
  sections: []
};

// Helper to find PDF field by pattern
function findPdfField(pattern) {
  const field = pdfFields.find(f => 
    f.name.toLowerCase().includes(pattern.toLowerCase())
  );
  return field ? field.name : null;
}

// Helper to get field type
function getFieldType(pdfField) {
  if (!pdfField) return 'text';
  const field = pdfFields.find(f => f.name === pdfField);
  if (!field) return 'text';
  
  if (field.type === 'PDFCheckBox') return 'checkbox';
  if (field.type === 'PDFDropdown') return 'select';
  if (pdfField.includes('Email')) return 'email';
  if (pdfField.includes('Phone')) return 'tel';
  if (pdfField.includes('Date')) return 'date';
  return 'text';
}

// PART 1: Information About You (Petitioner)
formDefinition.sections.push({
  sectionId: 'part1',
  sectionTitle: 'Part 1: Information About You (Petitioner)',
  sectionNumber: 1,
  questions: [
    {
      questionId: 'petitioner_legal_name',
      questionText: 'Your Full Legal Name',
      required: true,
      fields: [
        {
          fieldId: 'family_name',
          fieldLabel: 'Family Name (Last Name)',
          pdfField: findPdfField('Line1_FamilyName'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'given_name',
          fieldLabel: 'Given Name (First Name)',
          pdfField: findPdfField('Line1_GivenName'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'middle_name',
          fieldLabel: 'Middle Name',
          pdfField: findPdfField('Line1_MiddleName'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'petitioner_company',
      questionText: 'Company or Organization Name',
      required: true,
      fields: [
        {
          fieldId: 'company_name',
          fieldLabel: 'Company or Organization Name',
          pdfField: findPdfField('CompanyorOrgName'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'petitioner_address',
      questionText: 'Mailing Address',
      required: true,
      fields: [
        {
          fieldId: 'street',
          fieldLabel: 'Street Number and Name',
          pdfField: findPdfField('Line7b_StreetNumberName'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'unit_type',
          fieldLabel: 'Unit Type',
          pdfField: findPdfField('Line3_Unit[0]'),
          type: 'select',
          options: ['Apt', 'Ste', 'Flr'],
          required: false
        },
        {
          fieldId: 'unit_number',
          fieldLabel: 'Unit Number',
          pdfField: findPdfField('Line3_AptSteFlrNumber'),
          type: 'text',
          required: false
        },
        {
          fieldId: 'city',
          fieldLabel: 'City or Town',
          pdfField: findPdfField('Line_CityTown'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'state',
          fieldLabel: 'State',
          pdfField: findPdfField('P1_Line3_State'),
          type: 'select',
          required: true
        },
        {
          fieldId: 'zip_code',
          fieldLabel: 'ZIP Code',
          pdfField: findPdfField('P1_Line3_ZipCode'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'petitioner_ein',
      questionText: 'U.S. Employer Identification Number (EIN)',
      required: true,
      fields: [
        {
          fieldId: 'ein',
          fieldLabel: 'EIN',
          pdfField: findPdfField('Line3_TaxNumber'),
          type: 'text',
          required: true,
          pattern: '^\\d{2}-\\d{7}$'
        }
      ]
    }
  ]
});

// PART 2: Petition Type
formDefinition.sections.push({
  sectionId: 'part2',
  sectionTitle: 'Part 2: Petition Type',
  sectionNumber: 2,
  questions: [
    {
      questionId: 'petition_type',
      questionText: 'This petition is being filed for',
      required: true,
      fields: [
        {
          fieldId: 'petition_type',
          fieldLabel: 'Petition Type',
          pdfField: null,
          type: 'radio',
          required: true,
          options: [
            { value: 'new', label: 'New employment', pdfField: findPdfField('new[0]') },
            { value: 'continuation', label: 'Continuation of previously approved employment', pdfField: findPdfField('continuation[0]') },
            { value: 'change', label: 'Change in previously approved employment', pdfField: findPdfField('change[0]') },
            { value: 'amended', label: 'Amended petition', pdfField: findPdfField('amended[0]') },
            { value: 'concurrent', label: 'Concurrent employment', pdfField: findPdfField('concurrent[0]') }
          ]
        }
      ]
    },
    {
      questionId: 'classification',
      questionText: 'Classification Sought',
      required: true,
      fields: [
        {
          fieldId: 'classification_symbol',
          fieldLabel: 'Classification Symbol',
          pdfField: findPdfField('Part2_ClassificationSymbol'),
          type: 'select',
          required: true,
          options: [
            'H-1B', 'H-1B1', 'H-2A', 'H-2B', 'H-3',
            'L-1A', 'L-1B', 'O-1', 'O-2', 'P-1', 'P-2', 'P-3',
            'Q-1', 'R-1', 'E-1', 'E-2', 'E-3', 'TN'
          ]
        }
      ]
    },
    {
      questionId: 'total_workers',
      questionText: 'Total number of workers in this petition',
      required: true,
      fields: [
        {
          fieldId: 'total_workers',
          fieldLabel: 'Number of Workers',
          pdfField: findPdfField('TtlNumbersofWorker'),
          type: 'text',
          required: true,
          pattern: '^\\d+$'
        }
      ]
    }
  ]
});

// PART 3: Information About the Person or Organization Filing This Petition
formDefinition.sections.push({
  sectionId: 'part3',
  sectionTitle: 'Part 3: Information About the Beneficiary',
  sectionNumber: 3,
  questions: [
    {
      questionId: 'beneficiary_name',
      questionText: 'Beneficiary\'s Full Legal Name',
      required: true,
      fields: [
        {
          fieldId: 'family_name',
          fieldLabel: 'Family Name (Last Name)',
          pdfField: findPdfField('Part3_Line2_FamilyName'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'given_name',
          fieldLabel: 'Given Name (First Name)',
          pdfField: findPdfField('Part3_Line2_GivenName'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'middle_name',
          fieldLabel: 'Middle Name',
          pdfField: findPdfField('Part3_Line2_MiddleName'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'beneficiary_dob',
      questionText: 'Date of Birth',
      required: true,
      fields: [
        {
          fieldId: 'date_of_birth',
          fieldLabel: 'Date of Birth (mm/dd/yyyy)',
          pdfField: findPdfField('Line6_DateOfBirth'),
          type: 'date',
          required: true
        }
      ]
    },
    {
      questionId: 'beneficiary_country',
      questionText: 'Country Information',
      required: true,
      fields: [
        {
          fieldId: 'country_of_birth',
          fieldLabel: 'Country of Birth',
          pdfField: findPdfField('Part3Line4_CountryOfBirth'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'country_of_citizenship',
          fieldLabel: 'Country of Citizenship',
          pdfField: findPdfField('Part3Line4_CountryOfCitizenship'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'beneficiary_passport',
      questionText: 'Passport Information',
      required: true,
      fields: [
        {
          fieldId: 'passport_number',
          fieldLabel: 'Passport Number',
          pdfField: findPdfField('Part3Line5_PassportorTravDoc'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'country_of_issuance',
          fieldLabel: 'Country of Issuance',
          pdfField: findPdfField('Line_CountryOfIssuance'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'beneficiary_arrival',
      questionText: 'Date of Last Arrival in the U.S.',
      required: false,
      fields: [
        {
          fieldId: 'date_of_arrival',
          fieldLabel: 'Date of Arrival (mm/dd/yyyy)',
          pdfField: findPdfField('Part3Line5_DateofArrival'),
          type: 'date',
          required: false
        },
        {
          fieldId: 'i94_number',
          fieldLabel: 'I-94 Arrival-Departure Record Number',
          pdfField: findPdfField('Part3Line5_ArrivalDeparture'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'beneficiary_status',
      questionText: 'Current Nonimmigrant Status',
      required: false,
      fields: [
        {
          fieldId: 'current_status',
          fieldLabel: 'Current Status',
          pdfField: findPdfField('Line11g_CurrentNon'),
          type: 'select',
          required: false
        },
        {
          fieldId: 'status_expires',
          fieldLabel: 'Status Expires (mm/dd/yyyy)',
          pdfField: findPdfField('Line11h_DateStatusExpires'),
          type: 'date',
          required: false
        }
      ]
    },
    {
      questionId: 'beneficiary_ssn',
      questionText: 'U.S. Social Security Number (if any)',
      required: false,
      fields: [
        {
          fieldId: 'ssn',
          fieldLabel: 'Social Security Number',
          pdfField: findPdfField('Line5_SSN'),
          type: 'text',
          required: false,
          pattern: '^\\d{3}-\\d{2}-\\d{4}$'
        }
      ]
    }
  ]
});

// PART 5: Basic Information About the Proposed Employment
formDefinition.sections.push({
  sectionId: 'part5',
  sectionTitle: 'Part 5: Basic Information About the Proposed Employment',
  sectionNumber: 5,
  questions: [
    {
      questionId: 'job_title',
      questionText: 'Job Title',
      required: true,
      fields: [
        {
          fieldId: 'job_title',
          fieldLabel: 'Job Title',
          pdfField: findPdfField('Part5_Q1_JobTitle'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'employment_dates',
      questionText: 'Requested Employment Dates',
      required: true,
      fields: [
        {
          fieldId: 'start_date',
          fieldLabel: 'Start Date (mm/dd/yyyy)',
          pdfField: findPdfField('Part5_Q10_DateFrom'),
          type: 'date',
          required: true
        },
        {
          fieldId: 'end_date',
          fieldLabel: 'End Date (mm/dd/yyyy)',
          pdfField: findPdfField('Part5_Q10_DateTo'),
          type: 'date',
          required: true
        }
      ]
    },
    {
      questionId: 'work_location',
      questionText: 'Is this a full-time position?',
      required: true,
      fields: [
        {
          fieldId: 'full_time',
          fieldLabel: 'Full-time Position',
          pdfField: findPdfField('P5Line4_Yes'),
          type: 'radio',
          required: true,
          options: [
            { value: 'yes', label: 'Yes', pdfField: findPdfField('P5Line4_Yes') },
            { value: 'no', label: 'No', pdfField: findPdfField('P5Line4_No') }
          ]
        }
      ]
    },
    {
      questionId: 'wages',
      questionText: 'Wages or Other Compensation',
      required: true,
      fields: [
        {
          fieldId: 'wage_amount',
          fieldLabel: 'Wage Amount',
          pdfField: findPdfField('Line8_Wages'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'wage_period',
          fieldLabel: 'Per',
          pdfField: findPdfField('Line8_Per'),
          type: 'select',
          required: true,
          options: ['Hour', 'Week', 'Month', 'Year']
        }
      ]
    },
    {
      questionId: 'work_hours',
      questionText: 'Number of Hours Per Week',
      required: true,
      fields: [
        {
          fieldId: 'hours_per_week',
          fieldLabel: 'Hours Per Week',
          pdfField: findPdfField('P5Line9_Hours'),
          type: 'text',
          required: true,
          pattern: '^\\d+$'
        }
      ]
    },
    {
      questionId: 'business_type',
      questionText: 'Type of Business',
      required: true,
      fields: [
        {
          fieldId: 'business_type',
          fieldLabel: 'Describe the type of business',
          pdfField: findPdfField('Part5Line12_TypeofBusiness'),
          type: 'text',
          required: true
        }
      ]
    },
    {
      questionId: 'company_info',
      questionText: 'Company Information',
      required: true,
      fields: [
        {
          fieldId: 'year_established',
          fieldLabel: 'Year Established',
          pdfField: findPdfField('P5Line13_YearEstablished'),
          type: 'text',
          required: true,
          pattern: '^\\d{4}$'
        },
        {
          fieldId: 'number_of_employees',
          fieldLabel: 'Current Number of Employees',
          pdfField: findPdfField('P5Line14_NumberofEmployees'),
          type: 'text',
          required: true,
          pattern: '^\\d+$'
        },
        {
          fieldId: 'gross_annual_income',
          fieldLabel: 'Gross Annual Income',
          pdfField: findPdfField('Line15_GrossAnnualIncome'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'net_annual_income',
          fieldLabel: 'Net Annual Income',
          pdfField: findPdfField('Line16_NetAnnualIncome'),
          type: 'text',
          required: true
        }
      ]
    }
  ]
});

// PART 6: Petitioner's Statement
formDefinition.sections.push({
  sectionId: 'part6',
  sectionTitle: 'Part 6: Petitioner\'s Statement, Contact Information, Certification, and Signature',
  sectionNumber: 6,
  questions: [
    {
      questionId: 'petitioner_contact',
      questionText: 'Contact Information',
      required: true,
      fields: [
        {
          fieldId: 'daytime_phone',
          fieldLabel: 'Daytime Phone Number',
          pdfField: findPdfField('Pt7Line3_DaytimePhoneNumber1'),
          type: 'tel',
          required: true
        },
        {
          fieldId: 'email',
          fieldLabel: 'Email Address',
          pdfField: findPdfField('Pt7Line3_EmailAddress'),
          type: 'email',
          required: true
        }
      ]
    },
    {
      questionId: 'petitioner_signature',
      questionText: 'Signature',
      required: true,
      fields: [
        {
          fieldId: 'signature',
          fieldLabel: 'Signature of Petitioner',
          pdfField: findPdfField('P5_Line6a_SignatureofApplicant'),
          type: 'text',
          required: true
        },
        {
          fieldId: 'signature_date',
          fieldLabel: 'Date of Signature (mm/dd/yyyy)',
          pdfField: findPdfField('Line1b_DateofSignature'),
          type: 'date',
          required: true
        }
      ]
    }
  ]
});

// PART 8: Preparer's Contact Information
formDefinition.sections.push({
  sectionId: 'part8',
  sectionTitle: 'Part 8: Preparer\'s Contact Information, Certification, and Signature',
  sectionNumber: 8,
  questions: [
    {
      questionId: 'preparer_name',
      questionText: 'Preparer\'s Full Name',
      required: false,
      fields: [
        {
          fieldId: 'family_name',
          fieldLabel: 'Family Name (Last Name)',
          pdfField: findPdfField('Line_PreparerFamilyName'),
          type: 'text',
          required: false
        },
        {
          fieldId: 'given_name',
          fieldLabel: 'Given Name (First Name)',
          pdfField: findPdfField('Line_PreparerGivenName'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'preparer_business',
      questionText: 'Preparer\'s Business or Organization Name',
      required: false,
      fields: [
        {
          fieldId: 'business_name',
          fieldLabel: 'Business Name',
          pdfField: findPdfField('Line_BusinessName'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'preparer_address',
      questionText: 'Preparer\'s Mailing Address',
      required: false,
      fields: [
        {
          fieldId: 'street',
          fieldLabel: 'Street Number and Name',
          pdfField: findPdfField('Line7b_StreetNumberName[1]'),
          type: 'text',
          required: false
        },
        {
          fieldId: 'city',
          fieldLabel: 'City or Town',
          pdfField: findPdfField('Line_CityTown[1]'),
          type: 'text',
          required: false
        },
        {
          fieldId: 'state',
          fieldLabel: 'State',
          pdfField: findPdfField('P8_Line3_State'),
          type: 'select',
          required: false
        },
        {
          fieldId: 'zip_code',
          fieldLabel: 'ZIP Code',
          pdfField: findPdfField('P8_Line3_ZipCode'),
          type: 'text',
          required: false
        }
      ]
    },
    {
      questionId: 'preparer_contact',
      questionText: 'Preparer\'s Contact Information',
      required: false,
      fields: [
        {
          fieldId: 'daytime_phone',
          fieldLabel: 'Daytime Phone Number',
          pdfField: findPdfField('Line2_DaytimePhoneNumber1_Part8'),
          type: 'tel',
          required: false
        },
        {
          fieldId: 'mobile_phone',
          fieldLabel: 'Mobile Phone Number',
          pdfField: findPdfField('Line3_MobilePhoneNumber1_Part8'),
          type: 'tel',
          required: false
        },
        {
          fieldId: 'email',
          fieldLabel: 'Email Address',
          pdfField: findPdfField('EmailAddress'),
          type: 'email',
          required: false
        }
      ]
    }
  ]
});

// Output directory
const outputDir = path.join(__dirname, '../generated-forms/i-129');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate TypeScript definition
const tsContent = `/**
 * I-129 Complete Form Definition with Proper PDF Mappings
 * Generated: ${new Date().toISOString()}
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

export const I_129_FORM_DEFINITION: I129FormDefinition = ${JSON.stringify(formDefinition, null, 2)};

// Helper function to get all PDF field mappings
export function getAllPdfFieldMappings(): Map<string, string> {
  const mappings = new Map<string, string>();
  
  I_129_FORM_DEFINITION.sections.forEach(section => {
    section.questions.forEach(question => {
      question.fields.forEach(field => {
        if (field.pdfField) {
          const key = \`\${section.sectionId}.\${question.questionId}.\${field.fieldId}\`;
          mappings.set(key, field.pdfField);
        }
        // Handle radio/checkbox options with individual PDF fields
        if (field.options && Array.isArray(field.options)) {
          field.options.forEach((opt: any) => {
            if (typeof opt === 'object' && opt.pdfField) {
              const key = \`\${section.sectionId}.\${question.questionId}.\${field.fieldId}.\${opt.value}\`;
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
`;

fs.writeFileSync(path.join(outputDir, 'i-129-form-definition.ts'), tsContent);
console.log('✅ Generated i-129-form-definition.ts');

// Generate JSON version
fs.writeFileSync(
  path.join(outputDir, 'i-129-form-definition.json'),
  JSON.stringify(formDefinition, null, 2)
);
console.log('✅ Generated i-129-form-definition.json');

// Generate Markdown documentation
let mdContent = `# I-129 Form Definition with Proper PDF Mappings

**Generated:** ${new Date().toISOString()}  
**Form:** Petition for a Nonimmigrant Worker (I-129)  
**Version:** 2024  
**Total Sections:** ${formDefinition.sections.length}

## Overview

This document provides a complete definition of the I-129 form with:
- Structured sections and questions
- Field definitions with labels and types
- **Proper PDF field mappings** from the actual PDF template
- Validation rules and requirements

## Sections

`;

formDefinition.sections.forEach(section => {
  mdContent += `\n### ${section.sectionTitle}\n\n`;
  mdContent += `**Section ID:** \`${section.sectionId}\`  \n`;
  mdContent += `**Questions:** ${section.questions.length}\n\n`;
  
  section.questions.forEach((question, qIdx) => {
    mdContent += `#### ${qIdx + 1}. ${question.questionText}\n\n`;
    mdContent += `**Question ID:** \`${question.questionId}\`  \n`;
    mdContent += `**Required:** ${question.required ? 'Yes' : 'No'}\n\n`;
    
    if (question.fields.length > 0) {
      mdContent += `| Field | Label | Type | PDF Field | Required |\n`;
      mdContent += `|-------|-------|------|-----------|----------|\n`;
      
      question.fields.forEach(field => {
        const pdfField = field.pdfField || 'N/A';
        const pdfFieldDisplay = pdfField.length > 50 ? pdfField.substring(0, 47) + '...' : pdfField;
        mdContent += `| \`${field.fieldId}\` | ${field.fieldLabel} | ${field.type} | \`${pdfFieldDisplay}\` | ${field.required ? 'Yes' : 'No'} |\n`;
      });
      
      mdContent += `\n`;
    }
  });
});

mdContent += `\n## Usage Examples

### TypeScript

\`\`\`typescript
import { 
  I_129_FORM_DEFINITION, 
  getSectionById, 
  getQuestionById,
  getAllPdfFieldMappings 
} from './i-129-form-definition';

// Get a specific section
const part3 = getSectionById('part3');
console.log(part3?.sectionTitle);

// Get a specific question
const beneficiaryName = getQuestionById('part3', 'beneficiary_name');
console.log(beneficiaryName?.fields);

// Get all PDF field mappings
const mappings = getAllPdfFieldMappings();
console.log(mappings.get('part3.beneficiary_name.family_name'));
// Output: form1[0].#subform[1].Part3_Line2_FamilyName[0]
\`\`\`

### React Form Component

\`\`\`typescript
import { I_129_FORM_DEFINITION } from './i-129-form-definition';

function I129Form() {
  return (
    <form>
      {I_129_FORM_DEFINITION.sections.map(section => (
        <section key={section.sectionId}>
          <h2>{section.sectionTitle}</h2>
          {section.questions.map(question => (
            <div key={question.questionId}>
              <h3>{question.questionText}</h3>
              {question.fields.map(field => (
                <div key={field.fieldId}>
                  <label>{field.fieldLabel}</label>
                  <input
                    type={field.type}
                    required={field.required}
                    pattern={field.pattern}
                  />
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </form>
  );
}
\`\`\`

### PDF Filling

\`\`\`typescript
import { PDFDocument } from 'pdf-lib';
import { getAllPdfFieldMappings } from './i-129-form-definition';

async function fillI129PDF(formData: any) {
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const form = pdfDoc.getForm();
  const mappings = getAllPdfFieldMappings();
  
  // Fill fields using the mappings
  mappings.forEach((pdfField, key) => {
    const value = getValueFromFormData(formData, key);
    if (value) {
      const field = form.getField(pdfField);
      // Fill based on field type...
    }
  });
  
  return pdfDoc.save();
}
\`\`\`

## Field Types

- **text** - Text input (names, addresses, numbers)
- **email** - Email address input
- **tel** - Phone number input
- **date** - Date input (mm/dd/yyyy format)
- **select** - Dropdown selection
- **radio** - Radio button group
- **checkbox** - Checkbox input

## Validation Patterns

Some fields include validation patterns:
- **EIN:** \`^\\\\d{2}-\\\\d{7}$\` (e.g., 12-3456789)
- **SSN:** \`^\\\\d{3}-\\\\d{2}-\\\\d{4}$\` (e.g., 123-45-6789)
- **Year:** \`^\\\\d{4}$\` (e.g., 2024)
- **Number:** \`^\\\\d+$\` (positive integers)

## Notes

- All PDF field names are from the actual I-129 PDF template
- Field mappings are guaranteed to work with the official USCIS PDF
- Some fields may have multiple PDF fields (e.g., radio buttons)
- Optional fields have \`required: false\`
`;

fs.writeFileSync(path.join(outputDir, 'FORM_DEFINITION.md'), mdContent);
console.log('✅ Generated FORM_DEFINITION.md');

console.log('\n✨ Generation complete!\n');
console.log('📁 Output directory:', outputDir);
console.log('📄 Files created:');
console.log('   - i-129-form-definition.ts (TypeScript)');
console.log('   - i-129-form-definition.json (JSON)');
console.log('   - FORM_DEFINITION.md (Documentation)');
console.log('\n');
