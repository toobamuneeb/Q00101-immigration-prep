const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Extract fields from PDF
function extractFields(pdfPath) {
  console.log("📄 Extracting fields from PDF...");

  const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, {
    encoding: "utf-8",
    maxBuffer: 10 * 1024 * 1024,
  });

  const fields = [];
  const lines = output.split("\n");
  let current = {};

  for (const line of lines) {
    if (line.startsWith("FieldName:")) {
      if (current.name) fields.push(current);
      current = { name: line.substring(11).trim() };
    } else if (line.startsWith("FieldNameAlt:")) {
      current.alt = line.substring(14).trim();
    } else if (line.startsWith("FieldType:")) {
      current.type = line.substring(11).trim();
    } else if (line.startsWith("FieldStateOption:")) {
      if (!current.options) current.options = [];
      current.options.push(line.substring(18).trim());
    }
  }
  if (current.name) fields.push(current);

  return fields.filter(
    (f) => !f.name.includes("BarCode") && !f.name.includes("PDF417")
  );
}

// Generate question ID from PDF field name
function generateQuestionId(pdfFieldName) {
  // Extract part number and field info
  const partMatch = pdfFieldName.match(/[Pp](?:art)?(\d+)/);
  const lineMatch = pdfFieldName.match(/[Ll]ine(\d+[a-z]?)/i);

  let qid = "";

  if (partMatch) {
    qid = `part${partMatch[1]}.`;
  }

  // Try to extract meaningful field name
  const fieldName = pdfFieldName
    .replace(/^.*?\[0\]\./, "")
    .replace(/\[0\]/g, "")
    .replace(/[Pp](?:art)?\d+/, "")
    .replace(/[Ll]ine\d+[a-z]?/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .replace(/^_+|_+$/g, "");

  if (fieldName) {
    // Convert to camelCase
    const camelCase = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    qid += camelCase;
  } else {
    qid += "field" + Math.random().toString(36).substr(2, 9);
  }

  return qid;
}

// Detect field type
function detectFieldType(field) {
  const name = field.name.toLowerCase();
  const alt = (field.alt || "").toLowerCase();
  const combined = name + " " + alt;

  // Check for specific types
  if (combined.includes("date") || combined.includes("dob")) return "date";
  if (combined.includes("email")) return "email";
  if (combined.includes("phone") || combined.includes("telephone"))
    return "tel";
  if (combined.includes("ssn") || combined.includes("social security"))
    return "ssn";

  // Check for selection types
  if (field.options && field.options.length > 0) {
    const isState =
      combined.includes("state") && !combined.includes("statement");
    const isCountry = combined.includes("country");
    const isProvince = combined.includes("province");
    const isUnit =
      combined.includes("unit") &&
      field.options.some((o) => ["APT", "STE", "FLR"].includes(o));

    if (isState || isCountry || isProvince) {
      return "select";
    } else if (isUnit) {
      return "radio";
    } else if (field.options.length === 2) {
      return "radio";
    } else if (field.options.length <= 5) {
      return "radio";
    } else {
      return "checkbox";
    }
  }

  if (field.type === "Button") return "radio";

  return "text";
}

// Generate label from alt text or field name
function generateLabel(field) {
  let label = "";

  if (field.alt && field.alt.trim()) {
    let altText = field.alt
      .trim()
      .replace(/[\x00-\x1F\x7F-\x9F]/g, " ")
      .trim();

    // Try to extract the actual question/field label from the alt text
    // Pattern 1: "Part X. Title. Question. A. Enter Field Name."
    // Pattern 2: "Part X. Title. X. Field Name."

    // Look for patterns like "Enter Field Name" or "X. Field Name"
    const enterMatch = altText.match(/Enter\s+([^.]+?)\.?\s*$/i);
    if (enterMatch) {
      label = enterMatch[1].trim();
    } else {
      // Look for numbered items like "1. Field Name" or "A. Field Name"
      const numberedMatch = altText.match(/[A-Z0-9]+\.\s+([^.]+?)\.?\s*$/i);
      if (numberedMatch) {
        label = numberedMatch[1].trim();
      } else {
        // Look for the last sentence
        const sentences = altText.split(/\.\s+/);
        if (sentences.length > 0) {
          label = sentences[sentences.length - 1].trim();
        }
      }
    }

    // If we still don't have a good label, use the whole alt text but clean it
    if (!label || label.length < 3) {
      label = altText;
    }
  } else {
    // Generate from field name
    label = field.name
      .replace(/^.*?\[0\]\./, "")
      .replace(/\[0\]/g, "")
      .replace(/[^a-zA-Z0-9]/g, " ")
      .trim();
  }

  // Clean up the label to make it shorter and more readable
  label = label
    // Remove "Part X Line Y" prefixes
    .replace(/^Part\s*\d+\s*Line\s*\d+[a-z]?\s*[-:.]?\s*/i, "")
    .replace(/^Pt\s*\d+\s*Line\s*\d+[a-z]?\s*[-:.]?\s*/i, "")
    .replace(/^Line\s*\d+[a-z]?\s*[-:.]?\s*/i, "")

    // Remove "Part X." at the beginning
    .replace(/^Part\s*\d+\.\s*/i, "")

    // Remove numbering like "1.a.", "2.b.", etc.
    .replace(/^\d+\s*[a-z]?\s*[.)\-:]\s*/i, "")

    // Remove redundant words
    .replace(/\s+Enter\s+/gi, " ")
    .replace(/\s+Provide\s+/gi, " ")
    .replace(/\s+Indicate\s+/gi, " ")
    .replace(/\s+Select\s+/gi, " ")

    // Clean up spacing
    .replace(/\s+/g, " ")
    .trim();

  // Capitalize first letter
  if (label.length > 0) {
    label = label.charAt(0).toUpperCase() + label.slice(1);
  }

  // If label is still too long (>100 chars), try to shorten it
  if (label.length > 100) {
    // Take first sentence or clause
    const firstSentence = label.split(/[.;]/)[0];
    if (firstSentence.length > 0 && firstSentence.length < label.length) {
      label = firstSentence.trim();
    } else {
      // Take first 100 chars
      label = label.substring(0, 97) + "...";
    }
  }

  return label || "Field";
}

// Group fields by part
function groupByPart(fields) {
  const parts = new Map();

  fields.forEach((field) => {
    const partMatch = field.name.match(/[Pp](?:art)?(\d+)/);
    const partNum = partMatch ? parseInt(partMatch[1]) : 0;

    if (!parts.has(partNum)) {
      parts.set(partNum, []);
    }
    parts.get(partNum).push(field);
  });

  return parts;
}

// Generate mappings
function generateMappings(fields, formCode) {
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");
  const mappings = [];
  const questionIdMap = new Map();

  fields.forEach((field) => {
    const questionId = generateQuestionId(field.name);
    const type = detectFieldType(field);

    if (field.options && field.options.length > 0) {
      // Create mapping for each option
      field.options.forEach((option, idx) => {
        mappings.push({
          questionId,
          pdfField: field.name,
          type: type === "select" ? "choice" : type,
          value: option,
        });
      });

      // Store field info with options
      if (!questionIdMap.has(questionId)) {
        questionIdMap.set(questionId, {
          field,
          type,
          options: field.options || [],
          altText: field.alt || "",
        });
      }
    } else {
      mappings.push({
        questionId,
        pdfField: field.name,
        type: field.type,
      });

      if (!questionIdMap.has(questionId)) {
        questionIdMap.set(questionId, {
          field,
          type,
          options: [],
          altText: field.alt || "",
        });
      }
    }
  });

  return { mappings, questionIdMap };
}

// Generate definition sections
function generateDefinition(questionIdMap, formCode) {
  const sections = [];
  const questionsByPart = new Map();

  // US States mapping
  const US_STATES = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
    DC: "District of Columbia",
    AS: "American Samoa",
    GU: "Guam",
    MP: "Northern Mariana Islands",
    PR: "Puerto Rico",
    VI: "U.S. Virgin Islands",
  };

  // Common option mappings
  const optionLabels = {
    STE: "Suite",
    APT: "Apartment",
    FLR: "Floor",
    ste: "Ste.",
    apt: "Apt.",
    flr: "Flr.",
    Y: "Yes",
    N: "No",
    yes: "Yes",
    no: "No",
    M: "Male",
    F: "Female",
    Male: "Male",
    Female: "Female",
  };

  // Function to check if this is a unit type field
  function isUnitTypeField(options, altText) {
    const unitOptions = ["STE", "APT", "FLR", "ste", "apt", "flr"];
    return (
      options.some((opt) => unitOptions.includes(opt)) ||
      (altText &&
        (altText.toLowerCase().includes("apartment") ||
          altText.toLowerCase().includes("suite") ||
          altText.toLowerCase().includes("floor")))
    );
  }

  // Function to check if this is a state field
  function isStateField(options, altText, fieldName) {
    const stateCount = options.filter((opt) => US_STATES[opt]).length;
    return (
      stateCount > 10 || // Has many state codes
      (altText && altText.toLowerCase().includes("state")) ||
      (fieldName && fieldName.toLowerCase().includes("state"))
    );
  }

  // Function to generate human-readable label from option value
  function getOptionLabel(optionValue, altText) {
    // Check common mappings first
    if (optionLabels[optionValue]) {
      return optionLabels[optionValue];
    }

    // Try to extract from alt text if available
    if (altText) {
      // Look for patterns like "1B1 - Description" or "Option: Description"
      const match = altText.match(
        new RegExp(optionValue + "[:\\s-]+([^,;]+)", "i")
      );
      if (match) {
        return match[1].trim();
      }

      // If alt text contains the option, try to extract context
      if (altText.includes(optionValue)) {
        const parts = altText.split(/[,;]/);
        for (const part of parts) {
          if (part.includes(optionValue)) {
            return (
              part
                .replace(optionValue, "")
                .replace(/[:\-\s]+/, "")
                .trim() || optionValue
            );
          }
        }
      }
    }

    // For codes like "1B1", "1B2", try to make them more readable
    if (/^\d+[A-Z]\d+$/.test(optionValue)) {
      return `Option ${optionValue}`;
    }

    // For simple numbers
    if (/^\d+$/.test(optionValue)) {
      return `Option ${optionValue}`;
    }

    // Default: return the value itself
    return optionValue;
  }

  // Group questions by part
  questionIdMap.forEach((info, questionId) => {
    const partMatch = questionId.match(/^part(\d+)\./);
    const partNum = partMatch ? parseInt(partMatch[1]) : 0;

    if (!questionsByPart.has(partNum)) {
      questionsByPart.set(partNum, []);
    }

    const question = {
      id: questionId,
      type: info.type,
      label: generateLabel(info.field),
      required: info.type !== "checkbox",
    };

    if (info.options.length > 0) {
      // Check if this is a state field
      if (isStateField(info.options, info.altText, info.field.name)) {
        question.type = "select";
        question.options = info.options.map((opt) => ({
          value: opt,
          label: US_STATES[opt] || opt,
        }));
      }
      // Check if this is a unit type field
      else if (isUnitTypeField(info.options, info.altText)) {
        question.options = [
          { value: "", label: "None" },
          ...info.options.map((opt) => {
            const lowerOpt = opt.toLowerCase();
            return {
              value: lowerOpt,
              label: optionLabels[lowerOpt] || optionLabels[opt] || opt,
            };
          }),
        ];
      }
      // For other options, use standard mapping
      else {
        question.options = info.options.map((opt) => ({
          value: opt,
          label: getOptionLabel(opt, info.altText),
        }));
      }
    }

    // Add help text from alt text if available and different from label
    if (info.altText && info.altText !== question.label) {
      question.helpText = info.altText;
    }

    questionsByPart.get(partNum).push(question);
  });

  // Create sections with better titles
  const sortedParts = Array.from(questionsByPart.keys()).sort((a, b) => a - b);

  // Common section titles for USCIS forms
  const sectionTitles = {
    0: "General Information",
    1: "Information About You",
    2: "Information About the Beneficiary",
    3: "Processing Information",
    4: "Additional Information",
    5: "Preparer Information",
    6: "Interpreter Information",
    7: "Contact Information",
    8: "Signature",
    9: "Additional Information",
  };

  sortedParts.forEach((partNum) => {
    const questions = questionsByPart.get(partNum);
    if (questions.length > 0) {
      sections.push({
        id: `part${partNum}`,
        title: sectionTitles[partNum] || `Part ${partNum}`,
        questions,
      });
    }
  });

  return sections;
}

// Main function
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: node scripts/manual-form-generator.js <pdf-path>");
    process.exit(1);
  }

  const pdfPath = args[0];

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }

  const formCode = path.basename(pdfPath, ".pdf").replace(/[^a-zA-Z0-9]/g, "-");
  const lowerCode = formCode.toLowerCase();
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  console.log(`\n🚀 Manual Form Generator (No AI)`);
  console.log(`📋 Form: ${formCode.toUpperCase()}\n`);

  try {
    const fields = extractFields(pdfPath);
    console.log(`✅ Extracted ${fields.length} fields\n`);

    console.log(`🔨 Generating mappings...`);
    const { mappings, questionIdMap } = generateMappings(fields, formCode);
    console.log(`✅ Generated ${mappings.length} mappings\n`);

    console.log(`🔨 Generating definition...`);
    const sections = generateDefinition(questionIdMap, formCode);
    console.log(`✅ Generated ${sections.length} sections\n`);

    // Generate mapping file
    const mappingCode = `/**
 * ${formCode.toUpperCase()} Field Mappings
 * Generated: ${new Date().toISOString()}
 * Note: Auto-generated, may need manual refinement
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const ${upperCode}_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(
      mappings,
      null,
      2
    )};
`;

    // Custom JSON stringify that keeps each question on one line
    function stringifyCompact(obj, indent = 0) {
      const spaces = "  ".repeat(indent);

      if (Array.isArray(obj)) {
        if (obj.length === 0) return "[]";

        // Check if this is a questions array
        const firstItem = obj[0];
        if (firstItem && firstItem.id && firstItem.type && firstItem.label) {
          // Each question on one line
          const items = obj.map((q) => JSON.stringify(q));
          return (
            "[\n" +
            spaces +
            "  " +
            items.join(",\n" + spaces + "  ") +
            "\n" +
            spaces +
            "]"
          );
        }

        // Check if this is a sections array
        if (
          firstItem &&
          firstItem.id &&
          firstItem.title &&
          firstItem.questions
        ) {
          const items = obj.map((section) => {
            const questionsStr = stringifyCompact(
              section.questions,
              indent + 1
            );
            return `{\n${spaces}  "id": "${section.id}",\n${spaces}  "title": "${section.title}",\n${spaces}  "questions": ${questionsStr}\n${spaces}}`;
          });
          return (
            "[\n" +
            spaces +
            items.join(",\n" + spaces) +
            "\n" +
            spaces.substring(2) +
            "]"
          );
        }

        // Regular array
        const items = obj.map((item) => stringifyCompact(item, indent + 1));
        return (
          "[\n" +
          spaces +
          "  " +
          items.join(",\n" + spaces + "  ") +
          "\n" +
          spaces +
          "]"
        );
      }

      if (obj && typeof obj === "object") {
        const keys = Object.keys(obj);
        if (keys.length === 0) return "{}";

        const items = keys.map((key) => {
          const value = stringifyCompact(obj[key], indent + 1);
          return `"${key}": ${value}`;
        });

        return (
          "{\n" +
          spaces +
          "  " +
          items.join(",\n" + spaces + "  ") +
          "\n" +
          spaces +
          "}"
        );
      }

      return JSON.stringify(obj);
    }

    // Generate definition file
    const sectionsStr = stringifyCompact(sections, 1);

    const definitionCode = `/**
 * ${formCode.toUpperCase()} Form Definition
 * Generated: ${new Date().toISOString()}
 * Note: Auto-generated, may need manual refinement
 */

import { FormDefinition } from '../forms-registry';
import { ${upperCode}_FIELD_MAPPINGS } from '../form-mappings/${lowerCode}-field-mappings';

const ${upperCode}_DEFINITION: FormDefinition = {
  id: "${lowerCode}",
  code: "${formCode.toUpperCase()}",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: ${sectionsStr},
  pdfFieldMappings: ${upperCode}_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};

export default ${upperCode}_DEFINITION;
`;

    const defPath = `src/lib/constants/form-definitions/${lowerCode}-definition.ts`;
    const mapPath = `src/lib/constants/form-mappings/${lowerCode}-field-mappings.ts`;

    [
      "src/lib/constants/form-definitions",
      "src/lib/constants/form-mappings",
    ].forEach((dir) => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });

    fs.writeFileSync(defPath, definitionCode);
    fs.writeFileSync(mapPath, mappingCode);

    console.log("📁 FILES GENERATED:\n");
    console.log(`✅ ${defPath}`);
    console.log(`✅ ${mapPath}\n`);

    console.log("📊 SUMMARY:\n");
    console.log(`   PDF Fields: ${fields.length}`);
    console.log(`   Unique Questions: ${questionIdMap.size}`);
    console.log(`   Mappings: ${mappings.length}`);
    console.log(`   Sections: ${sections.length}\n`);

    console.log("📝 NEXT STEPS:");
    console.log("1. Review and refine the generated files");
    console.log("2. Update labels to match PDF exactly");
    console.log("3. Fix question types if needed");
    console.log("4. Update form metadata (name, description, fees)");
    console.log("5. Add to forms-registry.ts\n");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

main();
