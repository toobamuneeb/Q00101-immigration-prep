#!/usr/bin/env node
/**
 * Smart PDF Form Analyzer and Generator
 *
 * Analyzes PDF forms and generates complete form definitions with:
 * - Intelligent field grouping into sections
 * - Smart question ID generation
 * - Proper field type detection
 * - Dynamic help text and placeholders
 * - Configurable for different form types
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Form-specific configurations
const FORM_CONFIGS = {
  "i-9": {
    name: "Employment Eligibility Verification",
    description: "Verify employee authorization to work in the United States",
    category: "work_authorization",
    estimatedTime: "15-20 minutes",
    filingFee: 0,
    price: 60,
    sectionPatterns: {
      "section1-employee-info": [
        "last name",
        "first name",
        "middle initial",
        "address",
        "date of birth",
        "social security",
        "email",
        "telephone",
      ],
      "section1-citizenship-status": [
        "citizen",
        "noncitizen",
        "lawful permanent",
        "alien authorized",
      ],
      "section1-preparer-translator": [
        "preparer",
        "translator",
        "assisted",
        "signature of preparer",
      ],
      "section2-documents": [
        "document title",
        "issuing authority",
        "document number",
        "expiration date",
        "list a",
        "list b",
        "list c",
      ],
      "section2-employer-info": [
        "employer",
        "business name",
        "business address",
        "authorized representative",
        "first day of employment",
      ],
    },
  },
  "i-90": {
    name: "Application to Replace Permanent Resident Card",
    description:
      "Form to replace a lost, stolen, or expiring Permanent Resident Card",
    category: "permanent_resident",
    estimatedTime: "30-40 minutes",
    filingFee: 455,
    price: 60,
    sectionPatterns: {
      "part1-information": [
        "alien registration",
        "a-number",
        "family name",
        "given name",
        "mailing address",
        "physical address",
        "date of birth",
        "country of birth",
      ],
      "part2-application-type": [
        "application type",
        "lawful permanent",
        "conditional permanent",
        "lost stolen",
        "mutilated",
        "expired",
      ],
      "part3-processing": [
        "processing information",
        "immigrant visa",
        "adjustment of status",
        "port of entry",
        "removal proceedings",
      ],
      "part4-biographic": [
        "ethnicity",
        "race",
        "height",
        "weight",
        "eye color",
        "hair color",
      ],
      "part5-accommodations": [
        "accommodations",
        "disabilities",
        "deaf",
        "blind",
        "impairments",
      ],
      "part6-applicant": [
        "applicant statement",
        "signature",
        "contact information",
        "daytime telephone",
        "email address",
      ],
    },
  },
};

// Common field patterns for intelligent grouping
const FIELD_CATEGORIES = {
  personal_info: ["name", "address", "date of birth", "ssn", "social security"],
  contact_info: ["email", "telephone", "phone", "address"],
  immigration_info: ["a-number", "alien", "uscis", "i-94", "passport"],
  employment_info: ["employer", "business", "organization", "work"],
  document_info: ["document", "issuing", "number", "expiration"],
  signature_info: ["signature", "date signed", "today's date"],
};

// US States for dropdowns
const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

/**
 * Extract PDF form fields using pdftk
 */
function extractPdfFields(pdfPath) {
  try {
    const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, {
      encoding: "utf-8",
      maxBuffer: 10 * 1024 * 1024,
    });

    const fields = [];
    const lines = output.split("\n");
    let currentField = {};

    for (const line of lines) {
      if (line.startsWith("FieldName:")) {
        if (currentField.name) fields.push(currentField);
        currentField = { name: line.substring(11).trim() };
      } else if (line.startsWith("FieldType:")) {
        currentField.type = line.substring(11).trim();
      } else if (line.startsWith("FieldValue:")) {
        currentField.value = line.substring(12).trim();
      } else if (line.startsWith("FieldFlags:")) {
        currentField.flags = parseInt(line.substring(12).trim()) || 0;
      } else if (line.startsWith("FieldStateOption:")) {
        if (!currentField.options) currentField.options = [];
        currentField.options.push(line.substring(18).trim());
      }
    }

    if (currentField.name) fields.push(currentField);
    return fields;
  } catch (error) {
    throw new Error(
      `pdftk failed: ${error.message}. Install with: brew install pdftk-java`
    );
  }
}

/**
 * Extract field names from PDF using pdf-lib (fallback method)
 */
async function extractFieldNamesWithPdfLib(pdfPath) {
  try {
    const { PDFDocument } = require("pdf-lib");
    const fs = require("fs");

    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    const fields = form.getFields();

    return fields.map((field) => ({
      name: field.getName(),
      type: field.constructor.name,
    }));
  } catch (error) {
    console.warn("PDF-lib extraction failed:", error.message);
    return [];
  }
}

/**
 * Generate intelligent question ID from PDF field name
 */
function generateQuestionId(fieldName, formId) {
  const fieldLower = fieldName.toLowerCase();

  // Clean and normalize field name
  let cleanName = fieldName
    .replace(/^form\d*\[.*?\]\./, "")
    .replace(/#subform\[.*?\]\./, "")
    .replace(/#pageSet\[.*?\]\./, "")
    .replace(/Page\d+\[.*?\]\./, "")
    .replace(/\[.*?\]/g, "")
    .replace(/[^a-zA-Z0-9]/g, " ")
    .trim();

  // Map common field patterns to standardized IDs
  const fieldPatterns = {
    // Personal information
    "last.*name|family.*name": "lastName",
    "first.*name|given.*name": "firstName",
    "middle.*name|middle.*initial": "middleName|middleInitial",
    "address.*street|street.*number": "streetAddress",
    "apt.*number|apartment": "aptNumber",
    "city.*town|city": "city",
    state: "state",
    "zip.*code|postal.*code": "zipCode",
    "date.*birth|dob": "dateOfBirth",
    "social.*security|ssn": "ssn",
    email: "email",
    "telephone|phone": "telephone",

    // Immigration
    "alien.*registration|a.*number": "alienNumber",
    "uscis.*number": "uscisNumber",
    "i-94.*number": "i94Number",
    "passport.*number": "passportNumber",
    "country.*issuance": "countryOfIssuance",

    // Documents
    "document.*title": "documentTitle",
    "issuing.*authority": "issuingAuthority",
    "document.*number": "documentNumber",
    "expiration.*date": "expirationDate",

    // Employer
    "employer.*name|business.*name": "employerBusinessName",
    "employer.*address": "employerAddress",
    "first.*day.*employment": "firstDayOfEmployment",
    "authorized.*representative": "employerRepresentative",

    // Signature
    signature: "signature",
    "date.*signature|today.*date": "signatureDate",

    // Checkboxes
    "checkbox1|cb_1": "citizenCheckbox",
    "checkbox2|cb_2": "noncitizenCheckbox",
    "checkbox3|cb_3": "lprCheckbox",
    "checkbox4|cb_4": "alienAuthorizedCheckbox",
    "checkbox.*alt|cb_alt": "alternativeProcedure",
  };

  // Find matching pattern
  for (const [pattern, id] of Object.entries(fieldPatterns)) {
    if (new RegExp(pattern, "i").test(fieldLower)) {
      return id.split("|")[0]; // Take first option if multiple
    }
  }

  // Fallback: convert to camelCase
  return cleanName
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

/**
 * Determine which section a field belongs to
 */
function determineSection(fieldName, fieldValue, formConfig) {
  const fieldLower = fieldName.toLowerCase();
  const valueLower = (fieldValue || "").toLowerCase();

  // Check form-specific patterns first
  if (formConfig && formConfig.sectionPatterns) {
    for (const [sectionId, patterns] of Object.entries(
      formConfig.sectionPatterns
    )) {
      for (const pattern of patterns) {
        if (
          fieldLower.includes(pattern.toLowerCase()) ||
          valueLower.includes(pattern.toLowerCase())
        ) {
          return sectionId;
        }
      }
    }
  }

  // Fallback to general categories
  if (fieldLower.includes("preparer") || fieldLower.includes("translator")) {
    return "preparer-translator";
  }
  if (fieldLower.includes("employer") || fieldLower.includes("business")) {
    return "employer-info";
  }
  if (fieldLower.includes("document") || fieldLower.includes("list")) {
    return "documents";
  }
  if (
    fieldLower.includes("citizen") ||
    fieldLower.includes("alien") ||
    fieldLower.includes("immigration")
  ) {
    return "citizenship-status";
  }
  if (
    fieldLower.includes("name") ||
    fieldLower.includes("address") ||
    fieldLower.includes("birth") ||
    fieldLower.includes("ssn")
  ) {
    return "employee-info";
  }
  if (fieldLower.includes("signature") || fieldLower.includes("date signed")) {
    return "signature";
  }

  return "other";
}

/**
 * Generate human-readable label from field name
 */
function generateLabel(fieldName) {
  const fieldLower = fieldName.toLowerCase();

  // Common label mappings
  const labelMappings = {
    lastname: "Last Name (Family Name)",
    firstname: "First Name (Given Name)",
    middleinitial: "Middle Initial",
    otherlastnames: "Other Last Names Used (if any)",
    streetaddress: "Address (Street Number and Name)",
    aptnumber: "Apt. Number",
    city: "City or Town",
    state: "State",
    zipcode: "ZIP Code",
    dateofbirth: "Date of Birth (mm/dd/yyyy)",
    ssn: "U.S. Social Security Number",
    email: "Employee's Email Address",
    telephone: "Employee's Telephone Number",
    aliennumber: "Alien Registration Number (A-Number)",
    uscisnumber: "USCIS Online Account Number",
    documenttitle: "Document Title",
    issuingauthority: "Issuing Authority",
    documentnumber: "Document Number",
    expirationdate: "Expiration Date",
    employerbusinessname: "Employer's Business or Organization Name",
    employeraddress: "Employer's Business or Organization Address",
    firstdayofemployment: "Employee's First Day of Employment",
  };

  // Try to match common patterns
  const questionId = generateQuestionId(fieldName);
  if (labelMappings[questionId]) {
    return labelMappings[questionId];
  }

  // Convert to readable format
  return fieldName
    .replace(/[^a-zA-Z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();
}

/**
 * Determine field type from PDF field data
 */
function determineFieldType(pdfField) {
  const name = pdfField.name.toLowerCase();
  const pdfType = pdfField.type;

  // Checkbox detection
  if (
    pdfType === "Button" ||
    name.includes("checkbox") ||
    name.includes("cb_")
  ) {
    return "checkbox";
  }

  // Dropdown/select detection
  if (
    pdfType === "Choice" ||
    (pdfField.options && pdfField.options.length > 0)
  ) {
    return "select";
  }

  // Special field types by name pattern
  if (
    name.includes("date") ||
    name.includes("dob") ||
    name.includes("mmddyyyy")
  ) {
    return "date";
  }
  if (name.includes("email")) {
    return "email";
  }
  if (name.includes("phone") || name.includes("telephone")) {
    return "tel";
  }
  if (name.includes("ssn") || name.includes("social")) {
    return "ssn";
  }
  if (name.includes("signature")) {
    return "signature";
  }
  if (
    name.includes("textarea") ||
    name.includes("additional") ||
    name.includes("explanation") ||
    name.includes("remarks")
  ) {
    return "textarea";
  }

  // Check for state fields
  if (name.includes("state") && !name.includes("country")) {
    return "select";
  }

  return "text";
}

/**
 * Generate help text based on field context
 */
function generateHelpText(fieldName, fieldType) {
  const name = fieldName.toLowerCase();

  if (name.includes("otherlastnames") || name.includes("other names")) {
    return "Include maiden name or any other legal last names";
  }
  if (name.includes("ssn") || name.includes("social")) {
    return "Optional unless employer participates in E-Verify";
  }
  if (name.includes("email") || name.includes("telephone")) {
    return "Optional";
  }
  if (name.includes("expiration date")) {
    return "mm/dd/yyyy";
  }
  if (name.includes("date")) {
    return "mm/dd/yyyy";
  }
  if (name.includes("alien") || name.includes("a-number")) {
    return "Format: A-123456789 or 123456789";
  }
  if (name.includes("document")) {
    return "e.g., U.S. Passport, Driver's License, etc.";
  }
  if (name.includes("issuing authority")) {
    return "e.g., U.S. Department of State, State DMV, etc.";
  }

  return "";
}

/**
 * Determine if field is required
 */
function isFieldRequired(pdfField) {
  // Check PDF flags (bit 1 = Required)
  if (pdfField.flags && pdfField.flags & 2) {
    return true;
  }

  const name = pdfField.name.toLowerCase();

  // Required field patterns
  const requiredPatterns = [
    "last.*name",
    "first.*name",
    "family.*name",
    "given.*name",
    "date.*birth",
    "dob",
    "signature",
    "address",
    "city",
    "state",
    "zip.*code",
    "employer.*name",
    "business.*name",
    "alien.*number",
  ];

  return requiredPatterns.some((pattern) =>
    new RegExp(pattern, "i").test(name)
  );
}

/**
 * Generate placeholder text
 */
function generatePlaceholder(fieldName, fieldType) {
  const name = fieldName.toLowerCase();

  if (fieldType === "date") return "MM/DD/YYYY";
  if (fieldType === "email") return "example@email.com";
  if (fieldType === "tel") return "(555) 123-4567";
  if (fieldType === "ssn") return "123-45-6789";

  if (name.includes("lastname") || name.includes("family")) return "Smith";
  if (name.includes("firstname") || name.includes("given")) return "John";
  if (name.includes("city")) return "New York";
  if (name.includes("state")) return "NY";
  if (name.includes("zipcode")) return "10001";
  if (name.includes("address")) return "123 Main Street";
  if (name.includes("apt")) return "4B";
  if (name.includes("document")) return "U.S. Passport";
  if (name.includes("issuing")) return "U.S. Department of State";
  if (name.includes("employer")) return "ABC Corporation";

  return "";
}

/**
 * Generate section metadata
 */
function generateSectionMetadata(sectionId, fieldCount) {
  const sectionTemplates = {
    "employee-info": {
      title: "Section 1: Employee Information and Attestation",
      description: "To be completed by employee on first day of work",
    },
    "citizenship-status": {
      title: "Section 1: Citizenship/Immigration Status Attestation",
      description: "Check one of the following boxes",
    },
    "preparer-translator": {
      title: "Section 1: Preparer/Translator Information",
      description: "Complete for each preparer/translator",
    },
    signature: {
      title: "Section 1: Signature and Date",
      description: "Employee must sign and date",
    },
    documents: {
      title: "Section 2: Documents Presented",
      description: "Document information for List A or List B + C",
    },
    "employer-info": {
      title: "Section 2: Employer Information",
      description: "Employer or authorized representative completes",
    },
    other: {
      title: "Additional Information",
      description: "Complete this section",
    },
  };

  return (
    sectionTemplates[sectionId] || {
      title: `Section ${sectionId}`,
      description: "Complete this section",
    }
  );
}

/**
 * Group fields into intelligent sections
 */
function groupFieldsIntoSections(fields, formConfig) {
  const sections = {};

  fields.forEach((pdfField, index) => {
    const questionId = generateQuestionId(pdfField.name, formConfig?.id);
    const sectionId = determineSection(
      pdfField.name,
      pdfField.value,
      formConfig
    );
    const fieldType = determineFieldType(pdfField);
    const required = isFieldRequired(pdfField);

    // Create section if it doesn't exist
    if (!sections[sectionId]) {
      const metadata = generateSectionMetadata(sectionId, 0);
      sections[sectionId] = {
        id: sectionId,
        title: metadata.title,
        description: metadata.description,
        questions: [],
      };
    }

    // Create question object
    const question = {
      id: questionId,
      type: fieldType,
      label: generateLabel(pdfField.name),
      required: required,
      pdfField: pdfField.name,
    };

    // Add help text
    const helpText = generateHelpText(pdfField.name, fieldType);
    if (helpText) {
      question.helpText = helpText;
    }

    // Add placeholder
    const placeholder = generatePlaceholder(pdfField.name, fieldType);
    if (placeholder && fieldType !== "checkbox" && fieldType !== "select") {
      question.placeholder = placeholder;
    }

    // Add options for select fields
    if (fieldType === "select") {
      if (pdfField.options && pdfField.options.length > 0) {
        question.options = pdfField.options.map((opt) => ({
          value: opt.toLowerCase().replace(/\s+/g, "-"),
          label: opt,
        }));
      } else if (questionId.includes("state")) {
        question.options = US_STATES.map((state) => ({
          value: state.toLowerCase(),
          label: state,
        }));
      }
    }

    // Add to section
    sections[sectionId].questions.push(question);
  });

  return Object.values(sections);
}

/**
 * Create form definition
 */
function createFormDefinition(
  formId,
  formCode,
  formName,
  sections,
  formConfig
) {
  const config = formConfig || FORM_CONFIGS[formId] || {};

  return {
    id: formId,
    code: formCode,
    name: formName,
    description: config.description || formName,
    category: config.category || "other",
    estimatedTime: config.estimatedTime || "30-45 minutes",
    filingFee: config.filingFee || 0,
    price: config.price || 60,
    sections: sections,
    pdfFieldMappings: [],
    requiredDocuments: [],
    instructions: [],
  };
}

/**
 * Create field mappings
 */
function createFieldMappings(fields, sections) {
  const mappings = [];

  sections.forEach((section) => {
    section.questions.forEach((question) => {
      if (question.type === "checkbox") {
        mappings.push({
          questionId: question.id,
          pdfField: question.pdfField,
          type: "checkbox",
        });
      } else {
        mappings.push({
          questionId: question.id,
          pdfField: question.pdfField,
        });
      }
    });
  });

  return mappings;
}

/**
 * Generate TypeScript files
 */
function generateTypeScriptFiles(formId, formCode, formDefinition, mappings) {
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  // Generate definition file
  const definitionContent = `const ${upperFormName}_DEFINITION: FormDefinition = ${JSON.stringify(
    formDefinition,
    null,
    2
  )
    .replace(/"(\w+)":/g, "$1:")
    .replace(/"/g, "'")};\n\nexport { ${upperFormName}_DEFINITION };\n`;

  // Generate mappings file
  let mappingsContent = `export interface FieldMapping {\n`;
  mappingsContent += `  questionId: string;\n`;
  mappingsContent += `  pdfField: string;\n`;
  mappingsContent += `  type?: string;\n`;
  mappingsContent += `  value?: string;\n`;
  mappingsContent += `}\n\n`;
  mappingsContent += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;

  mappings.forEach((mapping) => {
    if (mapping.type) {
      mappingsContent += `  { questionId: "${mapping.questionId}", pdfField: "${mapping.pdfField}", type: "${mapping.type}" },\n`;
    } else {
      mappingsContent += `  { questionId: "${mapping.questionId}", pdfField: "${mapping.pdfField}" },\n`;
    }
  });

  mappingsContent += `];\n\n`;
  mappingsContent += `export const HIGH_CONFIDENCE_MAPPINGS = ${upperFormName}_AUTO_MAPPINGS;\n`;
  mappingsContent += `export const NEEDS_REVIEW_MAPPINGS: FieldMapping[] = [];\n`;

  return { definitionContent, mappingsContent };
}

/**
 * Update forms registry
 */
function updateFormsRegistry(formId, formDefinition) {
  const registryPath = path.join(
    process.cwd(),
    "src/lib/constants/forms-registry.ts"
  );

  if (!fs.existsSync(registryPath)) {
    console.warn("Forms registry not found at:", registryPath);
    return;
  }

  let content = fs.readFileSync(registryPath, "utf-8");
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  // Add import if not exists
  const importStatement = `import { ${upperFormName}_DEFINITION } from "./form-definitions/${formId}-definition";\n`;
  if (!content.includes(importStatement)) {
    const lastImportIndex = content.lastIndexOf("import");
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf("\n", lastImportIndex);
      content =
        content.slice(0, endOfLine + 1) +
        importStatement +
        content.slice(endOfLine + 1);
    }
  }

  // Add to registry object
  const registryPattern =
    /const FORM_REGISTRY:\s*Record<string,\s*FormDefinition>\s*=\s*\{([^}]+)\}/;
  const match = content.match(registryPattern);

  if (match) {
    const insertPos = match.index + match[1].length + 1;
    const newEntry = `\n  "${formId}": ${upperFormName}_DEFINITION,`;
    content = content.slice(0, insertPos) + newEntry + content.slice(insertPos);
  }

  fs.writeFileSync(registryPath, content, "utf-8");
}

/**
 * Update fill-pdf.ts with new form mapping
 */
function updateFillPdf(formId) {
  const fillPdfPath = path.join(process.cwd(), "src/lib/pdf/fill-pdf.ts");

  if (!fs.existsSync(fillPdfPath)) {
    console.warn("fill-pdf.ts not found at:", fillPdfPath);
    return;
  }

  let content = fs.readFileSync(fillPdfPath, "utf-8");
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  // Add import
  const importStatement = `import { ${upperFormName}_AUTO_MAPPINGS } from "@/lib/constants/form-mappings/${formId}-auto-mappings";\n`;
  if (!content.includes(importStatement)) {
    const lastImportIndex = content.lastIndexOf("import");
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf("\n", lastImportIndex);
      content =
        content.slice(0, endOfLine + 1) +
        importStatement +
        content.slice(endOfLine + 1);
    }
  }

  // Add case to switch statement
  const switchPattern =
    /switch\s*\(\s*formId\.toLowerCase\(\)\s*\)\s*\{([^}]+)\}/;
  const switchMatch = content.match(switchPattern);

  if (switchMatch) {
    const caseStatement = `\n    case '${formId}':\n      return ${upperFormName}_AUTO_MAPPINGS;`;
    const insertPos = switchMatch.index + switchMatch[0].indexOf("{") + 1;
    content =
      content.slice(0, insertPos) + caseStatement + content.slice(insertPos);
  }

  fs.writeFileSync(fillPdfPath, content, "utf-8");
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error(
      "Usage: node scripts/analyze-pdf-form.js <pdf-path> <form-code> <form-name>"
    );
    console.error(
      'Example: node scripts/analyze-pdf-form.js public/pdf-templates/i-9.pdf I-9 "Employment Eligibility Verification"'
    );
    process.exit(1);
  }

  const [pdfPath, formCode, formName] = args;
  const formId = formCode.toLowerCase();

  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }

  console.log(`\n🔍 Analyzing PDF Form: ${formCode}\n`);

  try {
    // Step 1: Extract PDF fields
    console.log("1️⃣  Extracting PDF fields...");
    let fields = [];

    try {
      fields = extractPdfFields(pdfPath);
      console.log(`   ✅ Extracted ${fields.length} fields using pdftk`);
    } catch (pdftkError) {
      console.log(`   ⚠️  pdftk failed: ${pdftkError.message}`);
      console.log("   Trying alternative extraction method...");
      fields = await extractFieldNamesWithPdfLib(pdfPath);
      console.log(`   ✅ Extracted ${fields.length} fields using pdf-lib`);
    }

    if (fields.length === 0) {
      throw new Error("No form fields found in PDF");
    }

    // Step 2: Group fields into sections
    console.log("2️⃣  Grouping fields into sections...");
    const formConfig = FORM_CONFIGS[formId];
    const sections = groupFieldsIntoSections(fields, formConfig);
    console.log(`   ✅ Created ${sections.length} sections`);

    // Step 3: Create form definition
    console.log("3️⃣  Creating form definition...");
    const formDefinition = createFormDefinition(
      formId,
      formCode,
      formName,
      sections,
      formConfig
    );

    // Step 4: Create field mappings
    console.log("4️⃣  Creating field mappings...");
    const mappings = createFieldMappings(fields, sections);

    // Step 5: Generate TypeScript files
    console.log("5️⃣  Generating TypeScript files...");
    const { definitionContent, mappingsContent } = generateTypeScriptFiles(
      formId,
      formCode,
      formDefinition,
      mappings
    );

    // Create directories if they don't exist
    const definitionsDir = path.join(
      process.cwd(),
      "src/lib/constants/form-definitions"
    );
    const mappingsDir = path.join(
      process.cwd(),
      "src/lib/constants/form-mappings"
    );

    if (!fs.existsSync(definitionsDir))
      fs.mkdirSync(definitionsDir, { recursive: true });
    if (!fs.existsSync(mappingsDir))
      fs.mkdirSync(mappingsDir, { recursive: true });

    // Write definition file
    const definitionPath = path.join(definitionsDir, `${formId}-definition.ts`);
    fs.writeFileSync(definitionPath, definitionContent, "utf-8");
    console.log(`   ✅ Created ${definitionPath}`);

    // Write mappings file
    const mappingsPath = path.join(mappingsDir, `${formId}-auto-mappings.ts`);
    fs.writeFileSync(mappingsPath, mappingsContent, "utf-8");
    console.log(`   ✅ Created ${mappingsPath}`);

    // Step 6: Update registry and fill-pdf
    console.log("6️⃣  Updating registry and fill-pdf.ts...");
    updateFormsRegistry(formId, formDefinition);
    updateFillPdf(formId);
    console.log(`   ✅ Updated forms registry and fill-pdf.ts`);

    // Summary
    console.log("\n✨ FORM ANALYSIS COMPLETE!\n");
    console.log("📋 Summary:");
    console.log(`   Form ID: ${formId}`);
    console.log(`   Form Code: ${formCode}`);
    console.log(`   Form Name: ${formName}`);
    console.log(`   Fields Found: ${fields.length}`);
    console.log(`   Sections Created: ${sections.length}`);
    console.log(`   Mappings Generated: ${mappings.length}\n`);

    console.log("🎯 Generated Structure:");
    sections.forEach((section, index) => {
      console.log(`   ${section.id}: ${section.title}`);
      console.log(`      Questions: ${section.questions.length}`);
      if (section.questions.length > 0) {
        console.log(
          `      Sample: ${section.questions[0].id} -> "${section.questions[0].label}"`
        );
      }
      console.log("");
    });

    console.log("📁 Files Generated:");
    console.log(`   - ${definitionPath}`);
    console.log(`   - ${mappingsPath}`);
    console.log("\n⚠️  Note: Review and adjust the generated files as needed.");
    console.log(
      "   Some fields may need manual adjustment for optimal user experience.\n"
    );
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

module.exports = {
  extractPdfFields,
  generateQuestionId,
  determineSection,
  generateLabel,
  determineFieldType,
  groupFieldsIntoSections,
  createFormDefinition,
  createFieldMappings,
};
