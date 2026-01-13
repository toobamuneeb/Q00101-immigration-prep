// Load environment variables from .env file manually
const envPath = require("path").join(__dirname, "..", ".env");
if (require("fs").existsSync(envPath)) {
  const envContent = require("fs").readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Check for API key
const OPENAI_API_KEY =
  "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";

if (!OPENAI_API_KEY) {
  console.error("❌ Error: OPENAI_API_KEY environment variable not set");
  console.error('\nSet it with: export OPENAI_API_KEY="sk-..."');
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
            "You are an expert at creating USCIS form definitions. Generate high-quality TypeScript code. Output ONLY code for EVERY field provided - do not skip any. Always output valid code without explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.2,
      max_tokens: 16000,
    };

    const data = JSON.stringify(payload);

    const options = {
      hostname: "api.openai.com",
      port: 443,
      path: "/v1/chat/completions",
      method: "POST",
      timeout: 120000,
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

    req.on("error", (error) => reject(error));
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });

    req.setTimeout(120000);
    req.write(data);
    req.end();
  });
}

// Extract code from AI response
function extractCode(response) {
  let code = response
    .replace(/```typescript\n?/g, "")
    .replace(/```javascript\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();

  // Remove explanatory text before code
  const codeStartMatch = code.match(/^[^{[\n]*([{\[])/);
  if (codeStartMatch) {
    const startIndex = code.indexOf(codeStartMatch[1]);
    if (startIndex > 0) {
      code = code.substring(startIndex);
    }
  }

  // Remove explanatory text after code
  const lastBrace = Math.max(code.lastIndexOf("}"), code.lastIndexOf("]"));
  if (lastBrace > 0 && lastBrace < code.length - 10) {
    code = code.substring(0, lastBrace + 1);
  }

  return code;
}

// Generate mappings AND definitions together (batch by batch)
async function generateBatchByBatch(fields, formCode) {
  console.log("🤖 Generating mappings AND definitions (batch by batch)...\n");
  console.log(`   Processing ${fields.length} fields...\n`);

  const batchSize = 25;
  const batches = [];

  for (let i = 0; i < fields.length; i += batchSize) {
    batches.push(fields.slice(i, i + batchSize));
  }

  console.log(`   Split into ${batches.length} batches\n`);

  const allMappings = [];
  const allSections = [];
  const allQuestionIds = new Set();
  const processedFields = new Set();

  for (let i = 0; i < batches.length; i++) {
    console.log(`📦 BATCH ${i + 1}/${batches.length}`);

    const fieldData = batches[i].map((f) => {
      processedFields.add(f.name);
      return {
        pdfField: f.name,
        altName: (f.alt || "").replace(/[\x00-\x1F\x7F-\x9F]/g, " ").trim(),
        type: f.type,
        options: f.options || [],
      };
    });

    // STEP 1: Generate mappings for this batch
    console.log(`   Step 1: Generating ${fieldData.length} mappings...`);

    const mappingPrompt = `Create field mappings for ${formCode.toUpperCase()}.

PDF FIELDS:
${JSON.stringify(fieldData, null, 2)}

⚠️ CRITICAL RULES:
1. Create questionId for ALL ${fieldData.length} fields - DO NOT SKIP ANY
2. Use camelCase (e.g., "part1.familyName", "part2.dateOfBirth")
3. For radio buttons with SAME base field name but different indices [0], [1], [2]:
   - Use SAME questionId for all
   - Add unique "value" for each option
   - Example: Pt8Line1_CB[0], Pt8Line1_CB[1] → both use questionId: "part8.ethnicity"
4. For checkboxes that are SEPARATE questions:
   - Use different questionIds
   - Example: Pt8Line2_Race[0] → "part8.race" (can be checkbox type for multiple selection)

EXAMPLES:
{ questionId: "part1.applicationType", pdfField: "form1[0].P1[0].CB_Type[0]", type: "radio", value: "a" }
{ questionId: "part1.applicationType", pdfField: "form1[0].P1[0].CB_Type[1]", type: "radio", value: "b" }
{ questionId: "part2.familyName", pdfField: "form1[0].P2[0].FamilyName[0]" }

Generate EXACTLY ${
      fieldData.length
    } mapping objects. No array brackets, no explanations.`;

    let mappingResponse;
    let retries = 3;

    while (retries > 0) {
      try {
        mappingResponse = await callOpenAI(mappingPrompt);
        break;
      } catch (error) {
        retries--;
        if (retries === 0) throw error;
        const waitTime = (3 - retries) * 5000;
        console.log(`   Retry ${3 - retries}/3... waiting ${waitTime / 1000}s`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }

    const mappingCode = extractCode(mappingResponse);
    const mappingCount = (mappingCode.match(/questionId:/g) || []).length;

    if (mappingCount < fieldData.length) {
      console.log(
        `   ⚠️  WARNING: Expected ${fieldData.length} mappings, got ${mappingCount}`
      );
    } else {
      console.log(
        `   ✅ Mappings: ${mappingCount}/${fieldData.length} created`
      );
    }

    allMappings.push(mappingCode);

    // Extract question IDs
    const batchQuestionIds = [];
    const idMatches = mappingCode.matchAll(/questionId:\s*["']([^"']+)["']/g);
    for (const match of idMatches) {
      allQuestionIds.add(match[1]);
      batchQuestionIds.push(match[1]);
    }

    // STEP 2: Analyze mappings to extract values for each questionId
    const questionIdToValues = new Map();
    const questionIdToFieldInfo = new Map();

    // Extract values and field info from mappings
    const idMatches2 = mappingCode.matchAll(
      /\{\s*questionId:\s*["']([^"']+)["'][^}]*pdfField:\s*["']([^"']+)["'][^}]*(?:value:\s*["']([^"']+)["'])?\s*\}/g
    );
    for (const match of idMatches2) {
      const qid = match[1];
      const pdfField = match[2];
      const val = match[3];

      // Store field info
      if (!questionIdToFieldInfo.has(qid)) {
        questionIdToFieldInfo.set(qid, { pdfFields: [], hasValues: false });
      }
      questionIdToFieldInfo.get(qid).pdfFields.push(pdfField);

      // Store values if present
      if (val) {
        if (!questionIdToValues.has(qid)) {
          questionIdToValues.set(qid, []);
        }
        if (!questionIdToValues.get(qid).includes(val)) {
          questionIdToValues.get(qid).push(val);
        }
        questionIdToFieldInfo.get(qid).hasValues = true;
      }
    }

    // Build mapping context with values and field type hints
    const uniqueQuestionIds = [...new Set(batchQuestionIds)]; // Remove duplicates
    const mappingContext = uniqueQuestionIds
      .map((qid) => {
        const values = questionIdToValues.get(qid) || [];
        const fieldInfo = questionIdToFieldInfo.get(qid);
        const pdfFields = fieldInfo?.pdfFields || [];

        // Detect field type based on PDF field name patterns
        const fieldNameLower = pdfFields.join(" ").toLowerCase();

        // Check for dropdown indicators
        const isState =
          fieldNameLower.includes("state") &&
          !fieldNameLower.includes("statement");
        const isCountry = fieldNameLower.includes("country");
        const isProvince = fieldNameLower.includes("province");
        const isCity =
          fieldNameLower.includes("city") || fieldNameLower.includes("town");
        const isZipCode =
          fieldNameLower.includes("zip") || fieldNameLower.includes("postal");

        // Check for unit type fields (APT, STE, FLR)
        const isUnitType =
          fieldNameLower.includes("unit") &&
          (fieldNameLower.includes("apt") ||
            fieldNameLower.includes("ste") ||
            fieldNameLower.includes("flr") ||
            values.some((v) =>
              ["APT", "STE", "FLR", "apt", "ste", "flr"].includes(v)
            ));

        // Determine field type
        let typeHint = "";
        if (values.length > 0) {
          if (isState || isCountry || isProvince) {
            typeHint = " [DROPDOWN-LOCATION]";
          } else if (isUnitType) {
            typeHint = " [RADIO-UNIT]";
          } else if (
            values.length === 2 &&
            (values.includes("Y") ||
              values.includes("N") ||
              values.includes("yes") ||
              values.includes("no"))
          ) {
            typeHint = " [RADIO-YESNO]";
          } else if (values.length === 2) {
            typeHint = " [RADIO]";
          } else if (values.length >= 3 && values.length <= 5) {
            typeHint = " [RADIO-MULTI]";
          } else {
            typeHint = " [CHECKBOX]";
          }
          return `${qid} → values: [${values
            .map((v) => `"${v}"`)
            .join(", ")}]${typeHint}`;
        }

        // For fields without values, detect type from name
        if (isZipCode) return `${qid} [TEXT-ZIP]`;
        if (isCity) return `${qid} [TEXT-CITY]`;

        return qid;
      })
      .join("\n");

    // STEP 2: Generate definition for these mappings IMMEDIATELY
    console.log(
      `   Step 2: Generating definition for ${uniqueQuestionIds.length} unique questions...`
    );

    const defPrompt = `Generate form sections for ${formCode.toUpperCase()}.

QUESTION IDs WITH VALUES AND PDF LABELS:
${uniqueQuestionIds
  .map((qid) => {
    const values = questionIdToValues.get(qid) || [];
    const fieldInfo = questionIdToFieldInfo.get(qid);
    const pdfFields = fieldInfo?.pdfFields || [];

    // Find the original field data to get the alt name (label)
    const originalField = fieldData.find((f) => pdfFields.includes(f.pdfField));
    const pdfLabel = originalField?.altName || "";

    // Detect field type
    const fieldNameLower = pdfFields.join(" ").toLowerCase();
    const isState =
      fieldNameLower.includes("state") && !fieldNameLower.includes("statement");
    const isCountry = fieldNameLower.includes("country");
    const isProvince = fieldNameLower.includes("province");
    const isUnitType =
      fieldNameLower.includes("unit") &&
      (fieldNameLower.includes("apt") ||
        fieldNameLower.includes("ste") ||
        fieldNameLower.includes("flr") ||
        values.some((v) =>
          ["APT", "STE", "FLR", "apt", "ste", "flr"].includes(v)
        ));

    let typeHint = "";
    if (values.length > 0) {
      if (isState || isCountry || isProvince) {
        typeHint = " [DROPDOWN-LOCATION]";
      } else if (isUnitType) {
        typeHint = " [RADIO-UNIT]";
      } else if (
        values.length === 2 &&
        (values.includes("Y") ||
          values.includes("N") ||
          values.includes("yes") ||
          values.includes("no"))
      ) {
        typeHint = " [RADIO-YESNO]";
      } else if (values.length === 2) {
        typeHint = " [RADIO]";
      } else if (values.length >= 3 && values.length <= 5) {
        typeHint = " [RADIO-MULTI]";
      } else {
        typeHint = " [CHECKBOX]";
      }
      return `${qid} → PDF Label: "${pdfLabel}" → values: [${values
        .map((v) => `"${v}"`)
        .join(", ")}]${typeHint}`;
    }

    return `${qid} → PDF Label: "${pdfLabel}"`;
  })
  .join("\n")}

FULL MAPPINGS (for reference):
${mappingCode.substring(0, 2000)}

⚠️ CRITICAL RULES - READ CAREFULLY:

1. **USE EXACT PDF LABELS**: Use the "PDF Label" text shown above as the question label
   - Keep the exact formatting, numbering, and punctuation from the PDF
   - Example: If PDF Label is "1.a. Family Name (Last Name)" use that EXACTLY

2. **NO DUPLICATES**: Each questionId must appear ONLY ONCE in the output

3. **Process ALL questions**: Create question for ALL ${
      uniqueQuestionIds.length
    } unique questionIds

4. **Field Type Detection** - Use the [TYPE HINT] to determine the correct type:
   - [DROPDOWN-LOCATION]: Use type "select" for state/country/province dropdowns
   - [RADIO-UNIT]: Use type "radio" for unit types (Apt/Ste/Flr)
   - [RADIO-YESNO]: Use type "radio" for Yes/No questions
   - [RADIO]: Use type "radio" for 2-option questions
   - [RADIO-MULTI]: Use type "radio" for 3-5 option "select one" questions
   - [CHECKBOX]: Use type "checkbox" for "select all that apply" (6+ options)
   - No hint: Detect from PDF label or use "text"

5. **Options Format**:
   - For [DROPDOWN-LOCATION]: { value: "CODE", label: "Full Name" }
     Example: { value: "CA", label: "California" }
   - For [RADIO-UNIT]: { value: "APT", label: "Apartment" }, { value: "STE", label: "Suite" }, { value: "FLR", label: "Floor" }
   - For [RADIO-YESNO]: { value: "yes", label: "Yes" }, { value: "no", label: "No" }
   - For others: Use EXACT values from mappings

6. **Section Organization**:
   - Group questions by Part number (Part 1, Part 2, etc.)
   - Extract Part number from PDF Label (e.g., "Part 1 Line 2a" → Part 1)
   - Create logical section titles based on the content

7. **Required Fields**: Set required: true for:
   - Name fields (familyName, givenName)
   - Date of birth
   - Address fields (street, city, state, zip)
   - Country fields
   - Any field marked as required in the PDF

8. **Field Types from PDF Labels**:
   - If label contains "Date" or "DOB" → type: "date"
   - If label contains "Email" → type: "email"
   - If label contains "Phone" or "Telephone" → type: "tel"
   - If label contains "SSN" or "Social Security" → type: "ssn"
   - If label contains "ZIP" or "Postal Code" → type: "text"
   - Otherwise use the [TYPE HINT]

EXAMPLES:

// Example with exact PDF label
// part1.familyName → PDF Label: "1.a. Family Name (Last Name)"
{
  id: "part1-personal-info",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.familyName",
      type: "text",
      label: "1.a. Family Name (Last Name)",
      required: true
    }
  ]
}

// Dropdown with PDF label
// part1.state → PDF Label: "1.e. State" → values: ["AL", "AK"] [DROPDOWN-LOCATION]
{
  id: "part1-address",
  title: "Part 1: Address",
  questions: [
    {
      id: "part1.state",
      type: "select",
      label: "1.e. State",
      required: true,
      options: [
        { value: "AL", label: "Alabama" },
        { value: "AK", label: "Alaska" }
      ]
    }
  ]
}

// Radio with PDF label
// part1.unitType → PDF Label: "1.g. Unit Type" → values: ["APT", "STE", "FLR"] [RADIO-UNIT]
{
  id: "part1-address-unit",
  title: "Part 1: Unit Information",
  questions: [
    {
      id: "part1.unitType",
      type: "radio",
      label: "1.g. Unit Type",
      required: false,
      options: [
        { value: "APT", label: "Apartment" },
        { value: "STE", label: "Suite" },
        { value: "FLR", label: "Floor" }
      ]
    }
  ]
}

// Date field with PDF label
// part1.dateOfBirth → PDF Label: "1.n. Date of Birth (mm/dd/yyyy)"
{
  id: "part1-personal-info",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.dateOfBirth",
      type: "date",
      label: "1.n. Date of Birth (mm/dd/yyyy)",
      required: true,
      placeholder: "MM/DD/YYYY"
    }
  ]
}

⚠️ OUTPUT FORMAT:
- Use EXACT PDF labels as shown in "PDF Label:" above
- Generate section objects separated by commas
- DO NOT wrap in "sections: [...]"
- Each questionId appears ONLY ONCE
- Group by Part numbers from PDF labels
`;

    let defResponse;
    retries = 3;

    while (retries > 0) {
      try {
        defResponse = await callOpenAI(defPrompt);
        break;
      } catch (error) {
        retries--;
        if (retries === 0) throw error;
        const waitTime = (3 - retries) * 5000;
        console.log(`   Retry ${3 - retries}/3... waiting ${waitTime / 1000}s`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
    }

    let defCode = extractCode(defResponse);

    // Remove "sections: [" wrapper if present
    defCode = defCode.replace(/^sections:\s*\[/i, "").replace(/\]$/, "");

    const questionCount = (defCode.match(/\bid:\s*["'][^"']+["']/g) || [])
      .length;

    if (questionCount < uniqueQuestionIds.length) {
      console.log(
        `   ⚠️  WARNING: Expected ${uniqueQuestionIds.length} questions, got ${questionCount}`
      );
    } else {
      console.log(
        `   ✅ Definition: ${questionCount}/${uniqueQuestionIds.length} questions created`
      );
    }

    // Add the section code
    allSections.push(defCode.trim());

    // Track which questionIds were included in this batch
    const batchQuestionsInDef = new Set();
    const defIdMatches = defCode.matchAll(/\bid:\s*["']([^"']+)["']/g);
    for (const match of defIdMatches) {
      batchQuestionsInDef.add(match[1]);
    }

    // Check for missing questions
    const missingInDef = batchQuestionIds.filter(
      (qid) => !batchQuestionsInDef.has(qid)
    );
    if (missingInDef.length > 0) {
      console.log(`   ⚠️  Missing in definition: ${missingInDef.join(", ")}`);
    }

    console.log(`   ✅ Batch ${i + 1} complete!\n`);

    // Delay between batches
    if (i < batches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }

  // Verify completeness
  const skippedFields = fields.filter((f) => !processedFields.has(f.name));
  if (skippedFields.length > 0) {
    console.log(`❌ ERROR: ${skippedFields.length} fields NOT processed!`);
  } else {
    console.log(`✅ SUCCESS: All ${fields.length} fields processed!\n`);
  }

  // Build final code
  const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");

  // Deduplicate and format mappings
  const seenMappings = new Set();
  const formattedMappings = allMappings
    .map((batch) =>
      batch
        .split("\n")
        .map((line) => {
          const trimmed = line.trim();
          if (!trimmed) return "";

          const pdfFieldMatch = trimmed.match(/pdfField:\s*["']([^"']+)["']/);
          if (pdfFieldMatch) {
            const pdfField = pdfFieldMatch[1];
            if (seenMappings.has(pdfField)) return "";
            seenMappings.add(pdfField);
          }

          if (
            trimmed.startsWith("{") &&
            trimmed.endsWith("}") &&
            !trimmed.endsWith("},")
          ) {
            return line + ",";
          }
          if (trimmed.endsWith(",,")) {
            return line.slice(0, -1);
          }
          return line;
        })
        .filter((line) => line.trim() !== "")
        .join("\n")
    )
    .join(",\n");

  const fullMappings = `export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const ${upperCode}_FIELD_MAPPINGS: FieldMapping[] = [
${formattedMappings}
];`;

  // Format sections properly
  const formattedSections = allSections
    .map((section) => section.trim())
    .filter((section) => section.length > 0)
    .join(",\n");

  const fullDefinition = `const ${upperCode}_DEFINITION: FormDefinition = {
  id: "${formCode.toLowerCase()}",
  code: "${formCode.toUpperCase()}",
  name: "TODO: Add form name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
${formattedSections}
  ],
  pdfFieldMappings: ${upperCode}_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};`;

  return {
    mappingsCode: fullMappings,
    definitionCode: fullDefinition,
    questionIds: Array.from(allQuestionIds),
  };
}

// Main function
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: node scripts/ai-form-generator-v2.js <pdf-path>");
    process.exit(1);
  }

  const pdfPath = args[0];

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }

  const formCode = path.basename(pdfPath, ".pdf").replace(/[^a-zA-Z0-9]/g, "-");

  console.log(`\n🚀 AI Form Generator V2 - Batch-by-Batch Approach`);
  console.log(`📋 Form: ${formCode.toUpperCase()}\n`);

  try {
    const fields = extractFields(pdfPath);
    console.log(`✅ Extracted ${fields.length} fields\n`);

    const { mappingsCode, definitionCode, questionIds } =
      await generateBatchByBatch(fields, formCode);

    const lowerCode = formCode.toLowerCase();
    const upperCode = formCode.toUpperCase().replace(/[^A-Z0-9]/g, "_");

    const fullDefinition = `/**
 * ${formCode.toUpperCase()} Form Definition
 * Generated: ${new Date().toISOString()}
 */

import { FormDefinition } from './forms-registry';
import { ${upperCode}_FIELD_MAPPINGS } from './form-mappings/${lowerCode}-field-mappings';

${definitionCode}

export default ${upperCode}_DEFINITION;
`;

    const fullMappings = `/**
 * ${formCode.toUpperCase()} Field Mappings
 * Generated: ${new Date().toISOString()}
 */

${mappingsCode}
`;

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

    // Validation
    console.log("📊 VALIDATION:\n");
    console.log(`   PDF Fields: ${fields.length}`);
    console.log(`   Question IDs: ${questionIds.length}`);
    const mappingCount = (fullMappings.match(/questionId:/g) || []).length;
    console.log(`   Mappings: ${mappingCount}`);
    const coverage = Math.round((mappingCount / fields.length) * 100);
    console.log(`   Coverage: ${coverage}%\n`);

    if (coverage < 95) {
      console.log(`⚠️⚠️⚠️  WARNING: INCOMPLETE (${coverage}%) ⚠️⚠️⚠️`);
      console.log(`Missing ${fields.length - mappingCount} fields!\n`);
    } else {
      console.log(`✅✅✅  SUCCESS: ${coverage}% COMPLETE! ✅✅✅\n`);
    }

    console.log("📝 NEXT STEPS:");
    console.log("1. Review generated files");
    console.log("2. Update form metadata (name, description, fees)");
    console.log("3. Add to forms-registry.ts");
    console.log("4. Test PDF generation\n");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

main();
