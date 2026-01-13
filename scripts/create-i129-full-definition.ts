#!/usr/bin/env tsx
/**
 * Complete I-129 Form Definition Generator
 * 
 * This script generates a complete I-129 form definition with:
 * - All field mappings
 * - All sections with questions
 * - Proper TypeScript types
 * 
 * Usage: npm run generate:i129
 */

import fs from 'fs';
import path from 'path';

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

interface Question {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  helpText?: string;
  conditional?: {
    dependsOn: string;
    values: string[];
  };
}

interface Section {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
}

// Define all sections with their questions
const sections: Section[] = [
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
          { value: "COMPANY", label: "Company/Organization" }
        ],
        helpText: "Select whether you are filing as an individual or on behalf of a company"
      },
      {
        id: "part1_individual_last_name",
        type: "text",
        label: "Individual Petitioner - Family Name (Last Name)",
        required: false,
        conditional: {
          dependsOn: "part1_petitioner_type",
          values: ["INDIVIDUAL"]
        }
      },
      {
        id: "part1_individual_first_name",
        type: "text",
        label: "Individual Petitioner - Given Name (First Name)",
        required: false,
        conditional: {
          dependsOn: "part1_petitioner_type",
          values: ["INDIVIDUAL"]
        }
      },
      {
        id: "part1_individual_middle_name",
        type: "text",
        label: "Individual Petitioner - Middle Name",
        required: false,
        conditional: {
          dependsOn: "part1_petitioner_type",
          values: ["INDIVIDUAL"]
        }
      },
      {
        id: "part1_company_name",
        type: "text",
        label: "Company or Organization Name",
        required: true,
        conditional: {
          dependsOn: "part1_petitioner_type",
          values: ["COMPANY"]
        }
      },
      {
        id: "part1_mailing_care_of",
        type: "text",
        label: "In Care Of Name (if any)",
        required: false
      },
      {
        id: "part1_mailing_street",
        type: "text",
        label: "Street Number and Name",
        required: true
      },
