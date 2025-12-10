#!/usr/bin/env tsx
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Auto-Map PDF Fields Script
 *
 * Automatically matches questionnaire question IDs to PDF field names
 * using pattern matching and fuzzy logic.
 *
 * Usage:
 *   npx tsx src/scripts/auto-map-fields.ts <form-id> <fields-json-path>
 *   npx tsx src/scripts/auto-map-fields.ts i-130 public/pdf-templates/i-130-unlocked_fields.json
 */
require("module-alias/register");
const fs_1 = require("fs");
const path_1 = require("path");
// Pattern matching rules
const PATTERN_RULES = [
    // Name fields
    {
        questionPattern: /last_name|family_name|surname/i,
        pdfPattern: /FamilyName|LastName|Surname/i,
        score: 10,
    },
    {
        questionPattern: /first_name|given_name/i,
        pdfPattern: /GivenName|FirstName/i,
        score: 10,
    },
    { questionPattern: /middle_name/i, pdfPattern: /MiddleName/i, score: 10 },
    // Date fields
    {
        questionPattern: /dob|date_of_birth|birth_date/i,
        pdfPattern: /DateofBirth|DOB|BirthDate/i,
        score: 10,
    },
    {
        questionPattern: /marriage_date|date_of_marriage/i,
        pdfPattern: /DateOfMarriage|MarriageDate/i,
        score: 10,
    },
    {
        questionPattern: /entry_date|date_of_entry/i,
        pdfPattern: /DateOfEntry|EntryDate/i,
        score: 9,
    },
    // Address fields
    {
        questionPattern: /street|address_line_1/i,
        pdfPattern: /StreetNumberName|StreetAddress|Address/i,
        score: 9,
    },
    {
        questionPattern: /apt|apartment|unit/i,
        pdfPattern: /AptSteFlrNumber|Apt|Unit|Suite/i,
        score: 9,
    },
    { questionPattern: /city/i, pdfPattern: /CityOrTown|City/i, score: 10 },
    { questionPattern: /state/i, pdfPattern: /State/i, score: 10 },
    {
        questionPattern: /zip|postal_code/i,
        pdfPattern: /ZipCode|PostalCode/i,
        score: 10,
    },
    { questionPattern: /country/i, pdfPattern: /Country/i, score: 10 },
    // Identity fields
    {
        questionPattern: /ssn|social_security/i,
        pdfPattern: /SSN|SocialSecurity/i,
        score: 10,
    },
    {
        questionPattern: /alien_number|a_number/i,
        pdfPattern: /AlienNumber|ANumber/i,
        score: 10,
    },
    { questionPattern: /passport/i, pdfPattern: /Passport/i, score: 9 },
    // Contact fields
    { questionPattern: /email/i, pdfPattern: /Email|EmailAddress/i, score: 10 },
    {
        questionPattern: /phone|telephone/i,
        pdfPattern: /Phone|Telephone|DaytimeNumber/i,
        score: 9,
    },
    // Gender
    {
        questionPattern: /gender|sex/i,
        pdfPattern: /Male|Female|Gender|Sex/i,
        score: 8,
    },
    // Country/Place of birth
    {
        questionPattern: /country_of_birth|birth_country/i,
        pdfPattern: /CountryofBirth|BirthCountry/i,
        score: 10,
    },
    {
        questionPattern: /place_of_birth|birth_place/i,
        pdfPattern: /PlaceofBirth|BirthPlace/i,
        score: 9,
    },
    // Relationship
    { questionPattern: /spouse/i, pdfPattern: /Spouse/i, score: 10 },
    { questionPattern: /parent/i, pdfPattern: /Parent/i, score: 10 },
    { questionPattern: /child/i, pdfPattern: /Child/i, score: 10 },
    { questionPattern: /sibling/i, pdfPattern: /Sibling/i, score: 10 },
];
// Part/section mapping
const PART_MAPPING = {
    petitioner: "Pt3",
    beneficiary: "Pt2",
    preparer: "Pt4",
    interpreter: "Pt5",
    relationship: "Pt1",
};
/**
 * Calculate match score between question ID and PDF field name
 */
function calculateMatchScore(questionId, pdfFieldName, questionType) {
    let score = 0;
    const reasons = [];
    // Check part/section prefix
    for (const [prefix, pdfPart] of Object.entries(PART_MAPPING)) {
        if (questionId.startsWith(prefix) && pdfFieldName.includes(pdfPart)) {
            score += 5;
            reasons.push(`Part match: ${prefix} → ${pdfPart}`);
            break;
        }
    }
    // Check pattern rules
    for (const rule of PATTERN_RULES) {
        if (rule.questionPattern.test(questionId) &&
            rule.pdfPattern.test(pdfFieldName)) {
            score += rule.score;
            reasons.push(`Pattern match: ${rule.questionPattern.source}`);
            break;
        }
    }
    // Bonus for exact substring match
    const questionParts = questionId.split("_");
    for (const part of questionParts) {
        if (part.length > 3 &&
            pdfFieldName.toLowerCase().includes(part.toLowerCase())) {
            score += 2;
            reasons.push(`Substring match: ${part}`);
        }
    }
    // Penalty for barcode fields
    if (pdfFieldName.includes("BarCode")) {
        score -= 100;
        reasons.push("Barcode field (excluded)");
    }
    return { score, reasons };
}
/**
 * Find best PDF field match for a question
 */
function findBestMatch(question, pdfFields, usedFields) {
    let bestMatch = null;
    for (const pdfField of pdfFields) {
        // Skip already used fields
        if (usedFields.has(pdfField.name))
            continue;
        // Skip barcodes
        if (pdfField.name.includes("BarCode"))
            continue;
        const { score, reasons } = calculateMatchScore(question.id, pdfField.name, question.type);
        if (score > 0 && (!bestMatch || score > bestMatch.confidence)) {
            bestMatch = {
                questionId: question.id,
                pdfField: pdfField.name,
                confidence: score,
                matchReason: reasons.join("; "),
            };
            // Handle checkbox/radio special cases
            if (pdfField.type === "PDFCheckBox" ||
                pdfField.type === "PDFRadioGroup") {
                bestMatch.type = "checkbox";
            }
        }
    }
    return bestMatch;
}
/**
 * Auto-map all fields for a form
 */
async function autoMapFields(formId, fieldsJsonPath) {
    console.log(`\n🤖 Auto-mapping fields for ${formId.toUpperCase()}...\n`);
    // Load PDF fields
    const fieldsData = JSON.parse((0, fs_1.readFileSync)(fieldsJsonPath, "utf-8"));
    const pdfFields = fieldsData.fields;
    console.log(`📊 Loaded ${pdfFields.length} PDF fields`);
    // Load form definition
    const formRegistryPath = (0, path_1.join)(process.cwd(), "src", "lib", "constants", "forms-registry.ts");
    if (!(0, fs_1.existsSync)(formRegistryPath)) {
        console.error(`❌ Form registry not found: ${formRegistryPath}`);
        process.exit(1);
    }
    // Import form definition dynamically
    const formRegistry = await Promise.resolve(`${formRegistryPath}`).then(s => __importStar(require(s)));
    const formDef = formRegistry.getFormDefinition(formId);
    if (!formDef) {
        console.error(`❌ Form definition not found for: ${formId}`);
        console.log(`Available forms:`, formRegistry
            .getAllForms()
            .map((f) => f.id)
            .join(", "));
        process.exit(1);
    }
    console.log(`📋 Loaded form definition: ${formDef.name}`);
    console.log(`   Sections: ${formDef.sections.length}`);
    // Collect all questions
    const allQuestions = [];
    for (const section of formDef.sections) {
        for (const question of section.questions) {
            allQuestions.push(question);
        }
    }
    console.log(`   Questions: ${allQuestions.length}\n`);
    // Auto-map fields
    const mappings = [];
    const usedFields = new Set();
    const unmappedQuestions = [];
    for (const question of allQuestions) {
        const match = findBestMatch(question, pdfFields, usedFields);
        if (match && match.confidence >= 5) {
            mappings.push(match);
            usedFields.add(match.pdfField);
            console.log(`✅ ${question.id}`);
            console.log(`   → ${match.pdfField}`);
            console.log(`   Confidence: ${match.confidence} | ${match.matchReason}`);
            console.log();
        }
        else {
            unmappedQuestions.push(question);
            console.log(`❌ ${question.id} (no good match found)`);
            console.log();
        }
    }
    // Sort by confidence
    mappings.sort((a, b) => b.confidence - a.confidence);
    // Generate TypeScript output
    console.log(`\n${"=".repeat(80)}`);
    console.log(`Summary:`);
    console.log(`  ✅ Mapped: ${mappings.length}/${allQuestions.length} (${Math.round((mappings.length / allQuestions.length) * 100)}%)`);
    console.log(`  ❌ Unmapped: ${unmappedQuestions.length}`);
    console.log(`  📄 Unused PDF fields: ${pdfFields.length - usedFields.size}`);
    console.log(`${"=".repeat(80)}\n`);
    // Generate TypeScript file
    const outputPath = (0, path_1.join)(process.cwd(), "src", "lib", "constants", "form-mappings", `${formId}-auto-mappings.ts`);
    const tsContent = `/**
 * Auto-generated field mappings for ${formId.toUpperCase()}
 *
 * Generated on: ${new Date().toISOString()}
 * Mapped: ${mappings.length}/${allQuestions.length} fields (${Math.round((mappings.length / allQuestions.length) * 100)}%)
 *
 * ⚠️  IMPORTANT: Review all mappings before use in production!
 * Some mappings may be incorrect and require manual verification.
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const ${formId
        .toUpperCase()
        .replace(/-/g, "_")}_AUTO_MAPPINGS: FieldMapping[] = [
${mappings
        .map((m) => {
        const parts = [
            `  { questionId: '${m.questionId}', pdfField: '${m.pdfField}'`,
        ];
        if (m.type)
            parts.push(`type: '${m.type}'`);
        if (m.value)
            parts.push(`value: '${m.value}'`);
        parts.push(`}, // Confidence: ${m.confidence}`);
        return parts.join(", ");
    })
        .join("\n")}
];

/**
 * Unmapped questions (${unmappedQuestions.length}):
 * These need manual review and mapping.
 *
${unmappedQuestions.map((q) => ` * - ${q.id}: "${q.label}"`).join("\n")}
 */

/**
 * High-confidence mappings (score >= 15):
 * ${mappings.filter((m) => m.confidence >= 15).length} mappings
 */
export const HIGH_CONFIDENCE_MAPPINGS = ${formId
        .toUpperCase()
        .replace(/-/g, "_")}_AUTO_MAPPINGS.filter((_, i) => {
  const confidences = [${mappings.map((m) => m.confidence).join(", ")}];
  return confidences[i] >= 15;
});

/**
 * Manual review needed (score < 10):
 * ${mappings.filter((m) => m.confidence < 10).length} mappings
 */
export const NEEDS_REVIEW_MAPPINGS = ${formId
        .toUpperCase()
        .replace(/-/g, "_")}_AUTO_MAPPINGS.filter((_, i) => {
  const confidences = [${mappings.map((m) => m.confidence).join(", ")}];
  return confidences[i] < 10;
});
`;
    // Ensure directory exists
    const mappingsDir = (0, path_1.join)(process.cwd(), "src", "lib", "constants", "form-mappings");
    if (!(0, fs_1.existsSync)(mappingsDir)) {
        const { mkdirSync } = await Promise.resolve().then(() => __importStar(require("fs")));
        mkdirSync(mappingsDir, { recursive: true });
    }
    (0, fs_1.writeFileSync)(outputPath, tsContent);
    console.log(`✅ Mappings saved to: ${outputPath}\n`);
    // Save unmapped questions list
    if (unmappedQuestions.length > 0) {
        const unmappedPath = (0, path_1.join)(process.cwd(), "src", "lib", "constants", "form-mappings", `${formId}-unmapped.json`);
        (0, fs_1.writeFileSync)(unmappedPath, JSON.stringify({
            formId,
            unmappedCount: unmappedQuestions.length,
            totalQuestions: allQuestions.length,
            unmappedQuestions: unmappedQuestions.map((q) => ({
                id: q.id,
                label: q.label,
                type: q.type,
            })),
        }, null, 2));
        console.log(`📝 Unmapped questions saved to: ${unmappedPath}\n`);
    }
    console.log(`Next steps:`);
    console.log(`  1. Review ${outputPath}`);
    console.log(`  2. Verify high-confidence mappings`);
    console.log(`  3. Manually map ${unmappedQuestions.length} unmapped questions`);
    console.log(`  4. Test PDF generation with sample data\n`);
}
// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log(`
Usage: npx tsx src/scripts/auto-map-fields.ts <form-id> <fields-json-path>

Examples:
  npx tsx src/scripts/auto-map-fields.ts i-130 public/pdf-templates/i-130-unlocked_fields.json
  npx tsx src/scripts/auto-map-fields.ts i-485 public/pdf-templates/i-485-unlocked_fields.json

This script automatically maps questionnaire question IDs to PDF field names
using pattern matching and fuzzy logic.
  `);
    process.exit(1);
}
const formId = args[0];
const fieldsJsonPath = (0, path_1.resolve)(args[1]);
if (!(0, fs_1.existsSync)(fieldsJsonPath)) {
    console.error(`❌ Error: Fields JSON file not found: ${fieldsJsonPath}`);
    process.exit(1);
}
autoMapFields(formId, fieldsJsonPath);
