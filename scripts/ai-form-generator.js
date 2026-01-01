#!/usr/bin/env node
/**
 * AI-POWERED FORM GENERATOR
 *
 * Uses OpenAI API to generate HIGH-QUALITY form definitions
 * matching the I-131 quality level in forms-registry
 *
 * Setup:
 * 1. Set your OpenAI API key: export OPENAI_API_KEY="sk-..."
 * 2. Run: node scripts/ai-form-generator.js <pdf-path>
 *
 * Example:
 * export OPENAI_API_KEY="sk-proj-..."
 * node scripts/ai-form-generator.js public/pdf-templates/i-131.pdf
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Check for API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("❌ Error: OPENAI_API_KEY environment variable not set");
  console.error('\nSet it with: export OPENAI_API_KEY="sk-..."');
  console.error(
    "Get your API key from: https://platform.openai.com/api-keys\n"
  );
  process.exit(1);
}

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

  // Filter out barcodes
  return fields.filter(
    (f) => !f.name.includes("BarCode") && !f.name.includes("PDF417")
  );
}

// Call OpenAI API
function callOpenAI(prompt) {
  return new Promise((resolve, reject) => {
    const payload = {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are an expert at creating USCIS form definitions. You generate high-quality TypeScript form definitions with proper labels, descriptions, help text, and options. You MUST output code for EVERY field provided - do not skip any fields. Always output valid TypeScript/JavaScript code without explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2, // Lower temperature for more consistent output
      max_tokens: 16000,
    };

    let data;
    try {
      data = JSON.stringify(payload);
    } catch (error) {
      reject(new Error("Failed to stringify payload: " + error.message));
      return;
    }

    const options = {
      hostname: "api.openai.com",
      port: 443,
      path: "/v1/chat/completions",
      method: "POST",
      timeout: 120000, // 2 minutes timeout
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Length": Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      let body = "";

      res.on("data", (chunk) => {
        body += chunk;
      });

      res.on("end", () => {
        try {
          const response = JSON.parse(body);
          if (response.error) {
            reject(new Error(response.error.message));
          } else {
            resolve(response.choices[0].message.content);
          }
        } catch (error) {
          reject(new Error("Failed to parse response: " + error.message));
        }
      });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout - API call took too long"));
    });

    req.setTimeout(120000); // 2 minutes timeout
    req.write(data);
    req.end();
  });
}

// Generate mappings AND definitions together (batch by batch)
async function generateMappingsAndDefinitions(fields, formCode) {
  console.log(
    "🤖 Generating field mappings AND definitions (batch by batch)..."
  );
  console.log(`   Processing ${fields.length} fields...`);

  const batchSize = 25; // Reduced batch size to avoid rate limits and ensure all fields are processed
  const batches = [];

  for (let i = 0; i < fields.length; i += batchSize) {
    batches.push(fields.slice(i, i + batchSize));
  }

  console.log(`   Split into ${batches.length} batches\n`);

  const allMappings = [];
  const allSections = [];
  const allQuestionIds = new Set();
  const processedFields = new Set(); // Track which fields we've processed

  for (let i = 0; i < batches.length; i++) {
    console.log(`📦 Batch ${i + 1}/${batches.length}`);

    const fieldData = batches[i].map((f) => {
      processedFields.add(f.name); // Track this field
      return {
        pdfField: f.name,
        altName: (f.alt || "").replace(/[\x00-\x1F\x7F-\x9F]/g, " ").trim(),
        type: f.type,
        options: f.options || [],
      };
    });

    const prompt = `Analyze these PDF fields from ${formCode.toUpperCase()} and create field mappings.

PDF FIELDS:
${JSON.stringify(fieldData, null, 2)}

CRITICAL RULES - MUST FOLLOW EXACTLY:
1. ⚠️ MANDATORY: Create a questionId for EVERY SINGLE PDF field - you MUST output EXACTLY ${
      fieldData.length
    } mappings
2. ⚠️ DO NOT SKIP ANY FIELDS - if you skip even one field, the output is invalid
3. Use camelCase for questionIds (e.g., "part1.applicationType", "part2.familyName")
4. Group related fields under the same questionId (e.g., multiple checkboxes for same question)
5. For checkbox groups, use type: "radio" and add value field
6. Extract the part number and field purpose from altName
7. For text fields, do NOT add type or value - just questionId and pdfField
8. For checkboxes with same question, add type: "radio" and unique value for each option
9. ⚠️ VERIFY: Count your output - it must have ${
      fieldData.length
    } mapping objects

EXAMPLES:
- PDF: "form1[0].P1[0].CB_AppType[0]" with altName "Part 1. Application Type. Select 5.A"
  → { questionId: "part1.applicationType", pdfField: "form1[0].P1[0].CB_AppType[0]", type: "radio", value: "5a" }

- PDF: "form1[0].P2[0].CB_AppType[1]" with altName "Part 1. Select 5.G. Form I-918"
  → { questionId: "part1.advanceParoleBasis", pdfField: "form1[0].P2[0].CB_AppType[1]", type: "radio", value: "5g" }

- PDF: "form1[0].P4[0].Part2_Line1_FamilyName[0]" with altName "Part 2. Family Name"
  → { questionId: "part2.familyName", pdfField: "form1[0].P4[0].Part2_Line1_FamilyName[0]" }

- PDF: "form1[0].P2[0].P1_Line5C[0]" with altName "Receipt number for Form I-821"
  → { questionId: "part1.i821ReceiptNumber", pdfField: "form1[0].P2[0].P1_Line5C[0]" }

⚠️ CRITICAL REQUIREMENT: Output EXACTLY ${
      fieldData.length
    } mapping objects, one for each PDF field above.
⚠️ DO NOT SKIP ANY FIELDS - every field in the list must have a mapping
⚠️ VERIFY YOUR OUTPUT: Count the number of mapping objects before responding

Generate ONLY the mappings (objects), no array brackets, no other code, no explanations.`;

    let response;
    let retries = 3;

    while (retries > 0) {
      try {
        response = await callOpenAI(prompt);
        break;
      } catch (error) {
        retries--;
        console.log(`   Retry ${3 - retries}/3 for batch ${i + 1}...`);

        // Handle rate limit errors with longer delays
        if (
          error.message.includes("Rate limit") ||
          error.message.includes("rate limit")
        ) {
          const waitTime = retries === 2 ? 5000 : retries === 1 ? 10000 : 15000; // 5s, 10s, 15s
          console.log(
            `   Rate limit hit, waiting ${waitTime / 1000} seconds...`
          );
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        } else {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds for other errors
        }

        if (retries === 0) throw error;
      }
    }

    // Add delay between batches to avoid rate limits
    if (i < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 seconds between batches
    }

    const code = extractCode(response);

    // Validate that we got mappings for all fields in this batch
    const mappingCount = (code.match(/questionId:/g) || []).length;
    if (mappingCount < fieldData.length) {
      console.log(
        `   ⚠️  ERROR: Expected ${fieldData.length} mappings but got ${mappingCount}`
      );
      console.log(
        `   ${
          fieldData.length - mappingCount
        } fields were SKIPPED in this batch!`
      );

      // Try to identify which fields were skipped
      const mappedFields = new Set();
      const pdfFieldMatches = code.matchAll(/pdfField:\s*["']([^"']+)["']/g);
      for (const match of pdfFieldMatches) {
        mappedFields.add(match[1]);
      }

      const skippedInBatch = fieldData.filter(
        (f) => !mappedFields.has(f.pdfField)
      );
      if (skippedInBatch.length > 0) {
        console.log(
          `   Skipped: ${skippedInBatch
            .slice(0, 3)
            .map((f) => f.pdfField)
            .join(", ")}...`
        );
      }

      // If too many fields were skipped, warn about incomplete output
      if (mappingCount < fieldData.length * 0.8) {
        console.log(
          `   ⚠️  CRITICAL: Less than 80% of batch was mapped - output will be incomplete!`
        );
      }
    } else {
      console.log(`   ✅ All ${fieldData.length} fields mapped successfully`);
    }

    allMappings.push(code);

    // Extract question IDs from this batch
    const idMatches = code.matchAll(/questionId:\s*["']([^"']+)["']/g);
    for (const match of idMatches) {
      allQuestionIds.add(match[1]);
    }
  }

  // Verify all fields were processed
  const skippedFields = fields.filter((f) => !processedFields.has(f.name));
  if (skippedFields.length > 0) {
    console.log(
      `\n   ❌ CRITICAL ERROR: ${skippedFields.length} fields were NOT processed!`
    );
    console.log(
      `   Skipped fields: ${skippedFields
        .slice(0, 10)
        .map((f) => f.name)
        .join(", ")}...`
    );
    console.log(`   This means the output is INCOMPLETE!\n`);
  } else {
    console.log(
      `\n   ✅ SUCCESS: All ${fields.length} fields were processed!\n`
    );
  }

  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  // Ensure all mappings end with commas and deduplicate
  const seenMappings = new Set();
  const mappingsWithCommas = allMappings.map((batch) => {
    return batch
      .split("\n")
      .map((line) => {
        const trimmed = line.trim();
        // Skip empty lines
        if (!trimmed) return line;

        // Check for duplicate mappings (same pdfField)
        const pdfFieldMatch = trimmed.match(/pdfField:\s*["']([^"']+)["']/);
        if (pdfFieldMatch) {
          const pdfField = pdfFieldMatch[1];
          if (seenMappings.has(pdfField)) {
            console.log(`   ⚠️  Skipping duplicate mapping for: ${pdfField}`);
            return ""; // Skip this line
          }
          seenMappings.add(pdfField);
        }

        // Add comma if line starts with { and ends with } but doesn't have comma
        if (
          trimmed.startsWith("{") &&
          trimmed.endsWith("}") &&
          !trimmed.endsWith("},")
        ) {
          return line + ",";
        }
        // Remove double commas
        if (trimmed.endsWith(",,")) {
          return line.slice(0, -1);
        }
        return line;
      })
      .filter((line) => line.trim() !== "") // Remove empty lines
      .join("\n");
  });

  const fullMappings = `export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const ${upperCode}_FIELD_MAPPINGS: FieldMapping[] = [
${mappingsWithCommas.join(",\n")}
];`;

  console.log(`✅ Extracted ${allQuestionIds.size} unique question IDs\n`);

  return {
    mappingsCode: fullMappings,
    questionIds: Array.from(allQuestionIds),
    allMappings: allMappings.join(",\n"),
  };
}

// Generate form definition using the extracted question IDs (in batches)
async function generateDefinitionFromMappings(
  questionIds,
  fields,
  formCode,
  allMappings
) {
  console.log("🤖 STEP 2: Generating form definition from mappings...");
  console.log(
    `   Creating questions for ${questionIds.length} question IDs...`
  );

  // Group question IDs by part
  const partGroups = {};
  for (const qid of questionIds) {
    const part = qid.split(".")[0];
    if (!partGroups[part]) partGroups[part] = [];
    partGroups[part].push(qid);
  }

  console.log(`   Organized into ${Object.keys(partGroups).length} parts`);

  const allSections = [];

  for (const [part, qids] of Object.entries(partGroups)) {
    console.log(`   Processing ${part} (${qids.length} questions)...`);

    // Get relevant mappings for this part
    const partMappings = allMappings
      .split("\n")
      .filter((line) => qids.some((qid) => line.includes(`"${qid}"`)))
      .join("\n");

    const prompt = `Generate form sections for ${formCode.toUpperCase()} ${part.toUpperCase()}.

QUESTION IDs TO CREATE:
${qids.join("\n")}

RELEVANT MAPPINGS (for context):
${partMappings.substring(0, 3000)}

CRITICAL INSTRUCTIONS:
1. Create a question definition for EVERY question ID in the list above
2. For radio/checkbox groups (same questionId with different values), create ONE question with ALL options
3. Extract proper labels from the mapping altNames
4. Add helpful descriptions and helpText
5. Set required: true for essential fields
6. Use proper types: text, date, ssn, tel, email, select, radio, checkbox, textarea

EXAMPLE OUTPUT (match this quality):

sections: [
  {
    id: "part1-application-type",
    title: "Part 1: Application Type",
    description: "What type of travel document are you applying for?",
    questions: [
      {
        id: "part1.documentType",
        type: "select",
        label: "I am applying for (select one):",
        required: true,
        options: [
          { value: "1", label: "1. A Reentry Permit (for LPRs who will be outside U.S. for 1-2 years)" },
          { value: "2", label: "2. A Refugee Travel Document (for refugees/asylees)" },
          { value: "4", label: "4. Advance Parole Document to allow me to return to the U.S. after temporary foreign travel" },
        ],
        helpText: "Most marriage-based green card applicants select option 4 or 5.b (Advance Parole)",
      },
    ],
  },
  {
    id: "part2-personal-info",
    title: "Part 2: Your Legal Name",
    description: "Enter your current legal name",
    questions: [
      {
        id: "part2.familyName",
        type: "text",
        label: "1.a. Family Name (Last Name)",
        required: true,
      },
      {
        id: "part2.givenName",
        type: "text",
        label: "1.b. Given Name (First Name)",
        required: true,
      },
      {
        id: "part2.middleName",
        type: "text",
        label: "1.c. Middle Name",
      },
    ],
  },
  {
    id: "part2-address",
    title: "Part 2: U.S. Mailing Address",
    description: "Where should USCIS mail your travel document?",
    questions: [
      {
        id: "part2.mailingStreet",
        type: "text",
        label: "2.b. Street Number and Name",
        required: true,
      },
      {
        id: "part2.mailingAptType",
        type: "select",
        label: "2.c. Unit Type",
        options: [
          { value: "", label: "Select if applicable" },
          { value: "apt", label: "Apt." },
          { value: "ste", label: "Ste." },
          { value: "flr", label: "Flr." },
        ],
      },
      {
        id: "part2.mailingAptNumber",
        type: "text",
        label: "2.d. Unit Number",
      },
    ],
  },
  {
    id: "part2-identification",
    title: "Part 2: Identification",
    description: "Provide your identification numbers and personal information",
    questions: [
      {
        id: "part2.dob",
        type: "date",
        label: "6. Date of Birth (mm/dd/yyyy)",
        required: true,
      },
      {
        id: "part2.gender",
        type: "radio",
        label: "8. Gender",
        required: true,
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
        helpText: "Must match your birth certificate",
      },
      {
        id: "part2.ssn",
        type: "ssn",
        label: "10. U.S. Social Security Number (if any)",
        placeholder: "###-##-####",
        helpText: "Leave blank if you do not have one",
      },
    ],
  },
]

CRITICAL REQUIREMENTS - MUST FOLLOW:
1. ⚠️ Create a question for EVERY questionId in the list above - DO NOT SKIP ANY
2. Extract proper labels from altName (e.g., "Part 2. Information About You. 1. Your Full Name. Enter Family Name (Last Name)" → "1.a. Family Name (Last Name)")
3. Create helpful section descriptions (e.g., "Where should USCIS mail your travel document?")
4. Add helpful helpText for complex fields
5. Use proper types: text, date, ssn, tel, email, select, radio, checkbox, textarea
6. Set required: true for essential fields (names, DOB, etc.)
7. For state fields: options: US_STATES
8. Add placeholders (MM/DD/YYYY, ###-##-####, (555) 123-4567, example@email.com)
9. Create proper questionId (camelCase like "part2.familyName")
10. Organize into logical subsections (personal-info, address, identification, etc.)
11. ⚠️ VERIFY: Count your questions - must match the number of questionIds provided

CHECKBOX/RADIO GROUPS - VERY IMPORTANT:
- If multiple checkboxes are for the same field (like Apt/Ste/Flr), create ONE question with type "select" or "radio"
- Group related checkboxes into options array
- For options: value should match label (e.g., { value: "apt", label: "Apt." })
- Example unit types: { value: "apt", label: "Apt." }, { value: "ste", label: "Ste." }, { value: "flr", label: "Flr." }

YES/NO FIELDS:
- Use type: "radio"
- Options: [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]

MALE/FEMALE FIELDS:
- Use type: "radio"  
- Options: [{ value: "male", label: "Male" }, { value: "female", label: "Female" }]

⚠️ CRITICAL: Generate questions for ALL ${qids.length} questionIds listed above
⚠️ DO NOT SKIP ANY QUESTIONS - every questionId must have a corresponding question definition
⚠️ VERIFY YOUR OUTPUT: Count the questions before responding

Generate ONLY the sections array matching the example quality above. No other code, no explanations.`;

    let response;
    let retries = 3;

    while (retries > 0) {
      try {
        response = await callOpenAI(prompt);
        break;
      } catch (error) {
        retries--;
        console.log(`   Retry ${3 - retries}/3 for ${part}...`);

        // Handle rate limit errors with longer delays
        if (
          error.message.includes("Rate limit") ||
          error.message.includes("rate limit")
        ) {
          const waitTime = retries === 2 ? 5000 : retries === 1 ? 10000 : 15000; // 5s, 10s, 15s
          console.log(
            `   Rate limit hit, waiting ${waitTime / 1000} seconds...`
          );
          await new Promise((resolve) => setTimeout(resolve, waitTime));
        } else {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds for other errors
        }

        if (retries === 0) throw error;
      }
    }

    // Add delay between parts to avoid rate limits
    await new Promise((resolve) => setTimeout(resolve, 4000)); // 4 seconds between parts
    const code = extractCode(response);

    // Validate that we got sections
    if (!code.includes("sections:") && !code.includes("id:")) {
      console.log(
        `   ⚠️  ERROR: Response for ${part} is incomplete or malformed`
      );
    }

    // Count questions in this part
    const questionCount = (code.match(/\bid:\s*["'][^"']+["']/g) || []).length;
    console.log(
      `   Generated ${questionCount} questions for ${qids.length} questionIds`
    );

    // Extract sections from response
    try {
      // Parse the sections array
      const sectionsMatch = code.match(/sections:\s*\[([\s\S]*)\]/);
      if (sectionsMatch) {
        allSections.push(sectionsMatch[1]);
      }
    } catch (e) {
      console.log(`   Warning: Could not parse batch ${i + 1}`);
    }
  }

  // Combine all sections
  const combinedSections = `sections: [${allSections.join(",\n")}]`;

  // Generate the full definition
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");
  const fullDefinition = `const ${upperCode}_DEFINITION: FormDefinition = {
  id: "${formCode.toLowerCase()}",
  code: "${formCode.toUpperCase()}",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  ${combinedSections},
  pdfFieldMappings: ${upperCode}_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};`;

  return fullDefinition;
}

// Extract code from AI response
function extractCode(response) {
  // Remove markdown code blocks
  let code = response
    .replace(/```typescript\n?/g, "")
    .replace(/```javascript\n?/g, "")
    .replace(/```\n?/g, "");

  // Remove any leading/trailing whitespace
  code = code.trim();

  // Remove any explanatory text before the code (common AI behavior)
  // Look for the first { or [ that starts actual code
  const codeStartMatch = code.match(/^[^{[\n]*([{\[])/);
  if (codeStartMatch) {
    const startIndex = code.indexOf(codeStartMatch[1]);
    if (startIndex > 0) {
      code = code.substring(startIndex);
    }
  }

  // Remove any explanatory text after the code
  // Find the last } or ] that ends actual code
  const lastBrace = Math.max(code.lastIndexOf("}"), code.lastIndexOf("]"));
  if (lastBrace > 0 && lastBrace < code.length - 10) {
    code = code.substring(0, lastBrace + 1);
  }

  return code;
}

// Main function
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: node scripts/ai-form-generator.js <pdf-path>");
    console.error("\nExample:");
    console.error('  export OPENAI_API_KEY="sk-..."');
    console.error(
      "  node scripts/ai-form-generator.js public/pdf-templates/i-131.pdf\n"
    );
    process.exit(1);
  }

  const pdfPath = args[0];

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }

  const formCode = path.basename(pdfPath, ".pdf").replace(/[^a-zA-Z0-9]/g, "-");

  console.log(`\n🚀 AI-Powered Form Generator`);
  console.log(`📋 Form: ${formCode.toUpperCase()}\n`);

  try {
    // Extract fields
    const fields = extractFields(pdfPath);
    console.log(`✅ Extracted ${fields.length} fields\n`);

    // Generate mappings AND definitions together (batch by batch)
    const { mappingsCode, definitionCode, questionIds } =
      await generateMappingsAndDefinitions(fields, formCode);
    console.log("✅ Generated field mappings AND definitions together!\n");

    // Extract clean code
    const cleanDefinition = extractCode(definitionCode);
    const cleanMappings = extractCode(mappingsCode);

    // Add imports to definition
    const lowerCode = formCode.toLowerCase();
    const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");

    const fullDefinition = `/**
 * ${formCode.toUpperCase()} Form Definition
 * Generated with AI: ${new Date().toISOString()}
 */

import { FormDefinition } from './forms-registry';
import { ${upperCode}_FIELD_MAPPINGS } from './form-mappings/${lowerCode}-field-mappings';


${cleanDefinition}

export default ${upperCode}_DEFINITION;
`;

    const fullMappings = `/**
 * ${formCode.toUpperCase()} Field Mappings
 * Generated with AI: ${new Date().toISOString()}
 */

${cleanMappings}
`;

    // Save files
    const defPath = `src/lib/constants/form-definitions/${lowerCode}-definition.ts`;
    const mapPath = `src/lib/constants/form-mappings/${lowerCode}-field-mappings.ts`;

    [
      "src/lib/constants/form-definitions",
      "src/lib/constants/form-mappings",
    ].forEach((dir) => {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    });

    fs.writeFileSync(defPath, fullDefinition);
    fs.writeFileSync(mapPath, fullMappings);

    console.log("📁 FILES GENERATED:\n");
    console.log(`✅ ${defPath}`);
    console.log(`✅ ${mapPath}\n`);

    // Validation summary
    console.log("📊 VALIDATION SUMMARY:\n");
    console.log(`   PDF Fields: ${fields.length}`);
    console.log(`   Question IDs: ${questionIds.length}`);
    console.log(
      `   Mappings: ${(fullMappings.match(/questionId:/g) || []).length}`
    );

    // Check for potential issues
    const mappingCount = (fullMappings.match(/questionId:/g) || []).length;
    const coveragePercent = Math.round((mappingCount / fields.length) * 100);

    console.log(`   Coverage: ${coveragePercent}%`);

    if (mappingCount < fields.length * 0.95) {
      console.log(
        `\n   ❌ INCOMPLETE: Only ${coveragePercent}% of PDF fields were mapped!`
      );
      console.log(`   Expected: ${fields.length} mappings`);
      console.log(`   Got: ${mappingCount} mappings`);
      console.log(`   Missing: ${fields.length - mappingCount} fields`);
      console.log(
        `\n   ⚠️  The generated files are INCOMPLETE and need manual fixes!\n`
      );
    } else if (mappingCount < fields.length) {
      console.log(
        `   ⚠️  Nearly complete but ${
          fields.length - mappingCount
        } fields missing`
      );
    } else {
      console.log(`   ✅ COMPLETE: All fields successfully mapped!\n`);
    }
    console.log();

    console.log("📝 NEXT STEPS:\n");
    console.log("1. Review the generated files");
    console.log("2. Update form name, description, and filing fee if needed");
    console.log(
      "3. Copy definition into forms-registry.ts (replace old definition)"
    );
    console.log("4. Verify question IDs match between definition and mappings");
    console.log("5. Test the form in your application\n");

    console.log("✅ DONE! High-quality AI-generated definition created.\n");
    console.log(
      "💡 NEW APPROACH: Mappings generated FIRST to ensure ALL fields are extracted!\n"
    );
    console.log(
      `💡 Found ${questionIds.length} unique question IDs from ${fields.length} PDF fields\n`
    );

    // Final completeness check
    const finalMappingCount = (fullMappings.match(/questionId:/g) || []).length;
    const completeness = Math.round((finalMappingCount / fields.length) * 100);

    if (completeness < 95) {
      console.log(
        `\n⚠️⚠️⚠️  WARNING: INCOMPLETE OUTPUT (${completeness}%) ⚠️⚠️⚠️`
      );
      console.log(
        `The generated files are missing ${
          fields.length - finalMappingCount
        } fields!`
      );
      console.log(`You may need to:`);
      console.log(`  1. Re-run the script (sometimes helps)`);
      console.log(`  2. Manually add missing fields`);
      console.log(`  3. Check the batch warnings above for skipped fields\n`);
    } else {
      console.log(`\n✅✅✅  SUCCESS: ${completeness}% COMPLETE! ✅✅✅`);
      console.log(`All fields successfully mapped and ready to use!\n`);
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
    if (error.message.includes("API key")) {
      console.error("\nMake sure your OpenAI API key is set correctly:");
      console.error('export OPENAI_API_KEY="sk-..."\n');
    }
    process.exit(1);
  }
}

main();
