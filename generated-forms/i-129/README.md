# I-129 Complete Form Definition

**Generated:** 2026-01-05T21:58:29.173Z

## Form Overview

- **Form ID**: i-129
- **Form Code**: I-129
- **Name**: Petition for a Nonimmigrant Worker
- **Category**: Work Authorization
- **Filing Fee**: $460
- **Estimated Time**: 90-120 minutes
- **Total Fields**: 287

## Purpose

This form is used to petition USCIS for a nonimmigrant worker in the following classifications:
- **H-1B**: Specialty Occupation
- **H-2A**: Temporary Agricultural Worker
- **H-2B**: Temporary Non-Agricultural Worker
- **H-3**: Trainee or Special Education Exchange Visitor
- **L-1A**: Intracompany Transferee Executive or Manager
- **L-1B**: Intracompany Transferee Specialized Knowledge
- **O-1**: Individual with Extraordinary Ability or Achievement
- **O-2**: Individual Accompanying O-1
- **P-1**: Internationally Recognized Athlete or Entertainment Group
- **P-2**: Artist or Entertainer in Reciprocal Exchange Program
- **P-3**: Artist or Entertainer in Culturally Unique Program
- **Q-1**: International Cultural Exchange Visitor
- **R-1**: Religious Worker
- **E-1**: Treaty Trader
- **E-2**: Treaty Investor
- **E-3**: Certain Specialty Occupation Professionals from Australia
- **TN**: NAFTA Professional (Trade NAFTA)
- **H-1B1**: Free Trade Agreement Professional (Chile/Singapore)

## Form Structure

### Main Form (9 Parts)

#### Part 1: Petitioner Information (22 fields)
Information about the employer or individual filing the petition:
- Petitioner type (Individual/Company)
- Name and contact information
- Mailing address
- Federal Employer Identification Number (FEIN)
- Tax identification numbers
- Nonprofit status

#### Part 2: Petition Information (6 fields)
Details about the petition being filed:
- Requested nonimmigrant classification
- Basis for classification (new, extension, change, etc.)
- Previous petition receipt number
- Requested action
- Total number of workers

#### Part 3: Beneficiary Information (29 fields)
Information about the worker(s):
- Personal information (name, date of birth, gender)
- Identification numbers (SSN, A-Number)
- Country of birth and citizenship
- Passport information
- Current immigration status
- US address (if in US)
- Foreign address
- SEVIS and EAD numbers

#### Part 4: Processing Information (26 fields)
Processing and eligibility questions:
- Consulate or port of entry information
- Valid passport status
- Other pending petitions
- Dependent information
- Immigration history
- J-1 exchange visitor status
- Foreign residence address

#### Part 5: Employment Information (34 fields)
Job and wage details:
- Job title
- LCA/ETA case number
- Work location address(es)
- Third-party worksite information
- Full-time/part-time status
- Hours per week
- Wages and compensation
- Employment start and end dates
- Company information (type, year established, employees)
- Financial information (gross/net income)

#### Part 6: Export Control (1 field)
- Export control certification (for certain classifications)

#### Part 7: Petitioner Declaration (7 fields)
Signature and certification:
- Signatory name and title
- Signature and date
- Contact information

#### Part 8: Preparer Information (17 fields)
If using a preparer:
- Preparer name and business
- Address and contact information
- Signature and date

#### Part 9: Additional Information (17 fields)
- Additional explanations
- Continuation sheets
- Page/Part/Item references

### Classification Supplements (128 fields)

#### E-1/E-2 Treaty Trader/Investor Supplement
- Treaty country information
- Company relationship and ownership
- Financial information (assets, net worth, income)
- Trade or investment details
- Employee information

#### Trade Agreement Supplement (TN, H-1B1)
- Employer type
- Foreign country
- Request type
- Certification

#### H Classification Supplement
- Classification type (H-1B, H-2A, H-2B, H-3)
- Prior H status periods
- H-1B registration information
- Proposed duties
- Present occupation

#### H-1B Data Collection Supplement
- Dependent employer status
- Willful violator status
- Exemption information

#### L Classification Supplement
- Petition type (individual/blanket)
- 50+ employee requirement

#### O and P Classification Supplement
- Classification type
- Consultation requirements

#### Q-1 Cultural Exchange Supplement
- Program certification

#### R-1 Religious Worker Supplement
- Religious organization information

## Field Mapping Format

Each field in the form maps to a PDF field using this structure:

```typescript
{
  questionId: string,    // Unique identifier (e.g., "part1_company_name")
  pdfField: string,      // PDF field path (e.g., "form1[0].#subform[0].CompanyName[0]")
  type: string,          // Field type (text, radio, date, checkbox, etc.)
}
```

## Required Documents

1. Copy of petitioner's IRS tax returns or annual reports
2. Evidence of petitioner's ability to pay the offered wage
3. Labor Condition Application (LCA) for H-1B petitions
4. Beneficiary's resume or curriculum vitae
5. Beneficiary's educational credentials and evaluations
6. Evidence of beneficiary's work experience
7. Copy of beneficiary's passport biographical page
8. Evidence of current immigration status (if in US)
9. Copies of previous approvals (if applicable)
10. Classification-specific evidence as required

## Filing Instructions

1. Complete all applicable sections of the form
2. Include the appropriate classification supplement
3. Sign and date the petition
4. Include all required supporting documentation
5. Pay the correct filing fee ($460 base + supplements if applicable)
6. File at the appropriate USCIS Service Center
7. Keep copies of everything you submit

## Processing Times

Processing times vary by:
- Service Center
- Classification type
- Premium Processing election ($2,500 for 15-day processing)

Check current processing times at: https://egov.uscis.gov/processing-times/

## File Locations

- **Field Mappings**: `src/lib/constants/form-mappings/i-129-field-mappings.ts`
- **Auto Mappings**: `src/lib/constants/form-mappings/i-129-auto-mappings.ts`
- **Form Definition**: `src/lib/constants/forms-registry.ts`

---

*This documentation was auto-generated. For the most current information, always refer to the official USCIS website and form instructions.*
