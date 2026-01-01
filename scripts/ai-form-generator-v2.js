
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Check for API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

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
    const idMatches2 = mappingCode.matchAll(/\{\s*questionId:\s*["']([^"']+)["'][^}]*pdfField:\s*["']([^"']+)["'][^}]*(?:value:\s*["']([^"']+)["'])?\s*\}/g);
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
    const mappingContext = batchQuestionIds.map(qid => {
      const values = questionIdToValues.get(qid) || [];
      const fieldInfo = questionIdToFieldInfo.get(qid);
      const pdfFields = fieldInfo?.pdfFields || [];
      
      // Check if this is a state/country dropdown by looking at PDF field name
      const isStateOrCountry = pdfFields.some(f => 
        f.toLowerCase().includes('state') || 
        f.toLowerCase().includes('country') ||
        f.toLowerCase().includes('province')
      );
      
      if (values.length > 0) {
        const typeHint = isStateOrCountry ? ' [DROPDOWN]' : (values.length === 2 ? ' [RADIO]' : ' [CHECKBOX/RADIO]');
        return `${qid} → values: [${values.map(v => `"${v}"`).join(', ')}]${typeHint}`;
      }
      return qid;
    }).join('\n');

    // STEP 2: Generate definition for these mappings IMMEDIATELY
    console.log(
      `   Step 2: Generating definition for ${batchQuestionIds.length} questions...`
    );

    const defPrompt = `Generate form sections for ${formCode.toUpperCase()}.

QUESTION IDs WITH VALUES:
${mappingContext}

FULL MAPPINGS (for reference):
${mappingCode.substring(0, 2000)}

⚠️ CRITICAL RULES:
1. Create question for ALL ${batchQuestionIds.length} questionIds - DO NOT SKIP ANY
2. If questionId has multiple values listed above:
   - Check the [TYPE HINT] at the end of the line
   - [DROPDOWN]: Use type "select" for state/country dropdowns - options should have value=id and label=name
   - [RADIO]: Use type "radio" for "select one" questions (typically 2 options like yes/no)
   - [CHECKBOX/RADIO]: Use type "checkbox" for "select all that apply" questions (3+ options)
   - Use EXACT values from mappings as the option values
   - DO NOT create separate questions for each value
3. If questionId has NO values listed:
   - It's a text/date/email field
4. Use proper types: text, date, ssn, tel, email, select, radio, checkbox
5. For radio/select/checkbox: ALWAYS include options array with EXACT values from mappings
6. For dropdowns [DROPDOWN]: value should be the ID/code, label should be human-readable
7. For radio [RADIO]: value and label can be the same or value can be code
8. For checkbox [CHECKBOX/RADIO]: value should match mapping exactly
9. Set required: true for essential fields
10. Add helpful labels and helpText
11. DO NOT duplicate questionIds - each questionId should appear ONCE

EXAMPLES:

// Example 1: Text field (no values in mapping)
// part1.familyName → no values
{
  id: "part1-personal-info",
  title: "Part 1: Personal Information",
  questions: [
    {
      id: "part1.familyName",
      type: "text",
      label: "1.a. Family Name (Last Name)",
      required: true,
    },
  ],
}

// Example 2: State/Country Dropdown [DROPDOWN]
// part1.state → values: ["AL", "AK", "AZ", ...] [DROPDOWN]
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
        { value: "AK", label: "Alaska" },
        { value: "AZ", label: "Arizona" }
      ]
    },
  ],
}

// Example 3: Radio for "Select One" [RADIO]
// part1.applicationType → values: ["a", "b"] [RADIO]
{
  id: "part1-application",
  title: "Part 1: Application Type",
  questions: [
    {
      id: "part1.applicationType",
      type: "radio",
      label: "2. Application Type (Select one)",
      required: true,
      options: [
        { value: "a", label: "Type A" },
        { value: "b", label: "Type B" }
      ]
    },
  ],
}

// Example 4: Yes/No Radio [RADIO]
// part2.hasSpouse → values: ["yes", "no"] [RADIO]
{
  id: "part2-spouse",
  title: "Part 2: Spouse Information",
  questions: [
    {
      id: "part2.hasSpouse",
      type: "radio",
      label: "1. Do you have a spouse?",
      required: true,
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    },
  ],
}

// Example 5: Checkbox for "Select All That Apply" [CHECKBOX/RADIO]
// part8.race → values: ["AS", "WH", "BL", "AI", "HW"] [CHECKBOX/RADIO]
{
  id: "part8-race",
  title: "Part 8: Race",
  questions: [
    {
      id: "part8.race",
      type: "checkbox",
      label: "1. Race (Select all that apply)",
      required: false,
      options: [
        { value: "AS", label: "Asian" },
        { value: "WH", label: "White" },
        { value: "BL", label: "Black or African American" },
        { value: "AI", label: "American Indian or Alaska Native" },
        { value: "HW", label: "Native Hawaiian or Other Pacific Islander" }
      ]
    },
  ],
}

⚠️ IMPORTANT: 
- Generate complete section objects with proper structure
- Each section must have: id, title, questions array
- Use EXACT values from the "QUESTION IDs WITH VALUES" list above
- DO NOT wrap in "sections: [...]" - just output the section objects separated by commas
- Each questionId should appear ONLY ONCE in the output
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
    defCode = defCode.replace(/^sections:\s*\[/i, '').replace(/\]$/, '');
    
    const questionCount = (defCode.match(/\bid:\s*["'][^"']+["']/g) || [])
      .length;

    if (questionCount < batchQuestionIds.length) {
      console.log(
        `   ⚠️  WARNING: Expected ${batchQuestionIds.length} questions, got ${questionCount}`
      );
    } else {
      console.log(
        `   ✅ Definition: ${questionCount}/${batchQuestionIds.length} questions created`
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
    const missingInDef = batchQuestionIds.filter(qid => !batchQuestionsInDef.has(qid));
    if (missingInDef.length > 0) {
      console.log(`   ⚠️  Missing in definition: ${missingInDef.join(', ')}`);
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
    .map(section => section.trim())
    .filter(section => section.length > 0)
    .join(',\n');

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
