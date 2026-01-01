/**
 * USCIS PDF → AUTO_MAPPINGS + DEFINITION generator
 * Node.js 18+
 *
 * Usage:
 * node generate-uscis-form.js i-131 i-131-unlocked.pdf
 */

const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const [, , FORM_CODE, PDF_FILE] = process.argv;

if (!FORM_CODE || !PDF_FILE) {
  console.error("Usage: node generate-uscis-form.js i-131 i-131-unlocked.pdf");
  process.exit(1);
}

const PDF_PATH = path.join(process.cwd(), "public", "pdf-templates", PDF_FILE);
const OUTPUT_DIR = path.join(process.cwd(), "src", "uscis", "generated");

// Detect field type
function detectType(field) {
  const name = field.constructor.name;
  if (name === "PDFCheckBox") return "checkbox";
  if (name === "PDFRadioGroup") return "radio";
  if (name === "PDFDropdown") return "select";
  return "text";
}

// Normalize field name for questionId
function normalizeId(pdfField) {
  return pdfField
    .replace(/^form1\[0\]\.#subform\[\d+\]\.?/, "")
    .replace(/\[.*?\]/g, "")
    .replace(/_/g, ".")
    .toLowerCase();
}

// Detect part number
function detectPart(pdfField) {
  const m = pdfField.match(/P(\d+)_/);
  return m ? `part${m[1]}` : "unknown";
}

// Generate human-readable label
function generateLabel(pdfField) {
  if (/PDF417BarCode|#PageSet|^form1\[\d+\]\.$/.test(pdfField)) {
    return null;
  }
  let label = pdfField.replace(/^form1\[0\]\.#subform\[\d+\]\.?/, "");
  label = label.replace(/\[.*?\]/g, "");
  label = label.replace(/[_\.]/g, " ");
  label = label.replace(/\b\w/g, (c) => c.toUpperCase());
  return label.trim();
}

// Detect if field is required (PDF-lib supports widget flags)
function isRequired(field) {
  try {
    const widgets = field.acroField.acroField.getWidgets?.() || [];
    for (const w of widgets) {
      const flags = w.getFlags?.() || {};
      if (flags.required) return true;
    }
  } catch (err) {
    // PDF-lib may not expose required flag for some PDFs
  }
  return false;
}

(async function main() {
  if (!fs.existsSync(PDF_PATH)) {
    throw new Error(`PDF not found: ${PDF_PATH}`);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const pdfBytes = fs.readFileSync(PDF_PATH);
  const pdf = await PDFDocument.load(pdfBytes);
  const form = pdf.getForm();
  const fields = form.getFields();

  const AUTO_MAPPINGS = [];
  const sections = {};

  for (const field of fields) {
    const pdfField = field.getName();
    const type = detectType(field);
    const questionId = normalizeId(pdfField);
    const part = detectPart(pdfField);
    const label = generateLabel(pdfField);
    const required = isRequired(field);

    if (!label) continue; // skip system/internal fields

    AUTO_MAPPINGS.push({
      questionId,
      pdfField,
      ...(type !== "text" ? { type } : {}),
    });

    if (!sections[part]) sections[part] = [];

    sections[part].push({
      id: questionId.replace(`${part}.`, ""),
      type,
      label,
      required,
    });
  }

  const CONST_NAME = FORM_CODE.toUpperCase().replace("-", "_");

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${FORM_CODE}_AUTO_MAPPINGS.ts`),
    `export const ${CONST_NAME}_AUTO_MAPPINGS = ${JSON.stringify(
      AUTO_MAPPINGS,
      null,
      2
    )};\n`
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, `${FORM_CODE}_DEFINITION.ts`),
    `export const ${CONST_NAME}_DEFINITION = ${JSON.stringify(
      {
        id: FORM_CODE,
        code: FORM_CODE.toUpperCase(),
        name: "USCIS Form " + FORM_CODE.toUpperCase(),
        sections: Object.entries(sections).map(([id, questions]) => ({
          id,
          title: id.toUpperCase(),
          questions,
        })),
      },
      null,
      2
    )};\n`
  );

  console.log(`SUCCESS: ${FORM_CODE} generated at ${OUTPUT_DIR}`);
})();
