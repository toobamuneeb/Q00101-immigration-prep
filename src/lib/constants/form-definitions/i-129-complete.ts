import { FormDefinition } from "../forms-registry";
import { I_129_FIELD_MAPPINGS } from "../form-mappings/i-129-field-mappings";
import { US_STATES } from "../us-states";

/**
 * Complete I-129 Form Definition
 * Petition for a Nonimmigrant Worker
 * 
 * This form is used for:
 * - H-1B (Specialty Occupation)
 * - L-1 (Intracompany Transferee)
 * - O-1 (Extraordinary Ability)
 * - P-1 (Athlete/Entertainer)
 * - E-1/E-2 (Treaty Trader/Investor)
 * - TN (NAFTA Professional)
 * - And other nonimmigrant work classifications
 */

export const I_129_COMPLETE_DEFINITION: FormDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for H-1B, L-1, O-1, and other temporary work visas",
  category: "work_authorization",
  estimatedTime: "90-120 minutes",
  filingFee: 460,
  price: 60,
  status: "active",
  
  pdfFieldMappings: I_129_FIELD_MAPPINGS.map(mapping => ({
    questionId: mapping.questionId,
    pdfField: mapping.pdfField,
    transform: mapping.type === "date" 
      ? (value: string) => {
          // Transform YYYY-MM-DD to MM/DD/YYYY for PDF
          const [year, month, day] = value.split('-');
          return `${month}/${day}/${year}`;
        }
      : undefined
  })),
  
  requiredDocuments: [
    "Copy of petitioner's IRS tax returns or annual reports",
    "Evidence of petitioner's ability to pay the offered wage",
    "Labor Condition Application (LCA) for H-1B petitions",
    "Beneficiary's resume or curriculum vitae",
    "Beneficiary's educational credentials and evaluations",
    "Evidence of beneficiary's work experience",
    "Copy of beneficiary's passport biographical page",
  ],

  instructions: [
    "Complete all applicable sections of the form",
    "Sign and date the petition",
    "Include all required supporting documentation",
    "Pay the correct filing fee",
    "File at the appropriate USCIS Service Center",
    "Keep copies of everything you submit",
  ],

  sections: [
    // PART 1: PETITIONER INFORMATION
    {
      id: "part1_petitioner_info",
      title: "Part 1. Petitioner Information",
      description: "Information about the employer or individual filing the petition",
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
          helpText: "Select whether you are filing as an individual or on behalf of a company/organization"
        },
