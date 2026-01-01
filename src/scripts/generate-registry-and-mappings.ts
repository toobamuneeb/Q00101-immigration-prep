#!/usr/bin/env tsx

import { PDFDocument } from "pdf-lib";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, join } from "path";

type FieldType = "PDFTextField" | "PDFCheckBox" | "PDFRadioGroup" | "PDFDropdown";

interface FieldInfo {
  name: string;
  type: FieldType;
  value?: string;
  options?: string[];
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: string;
  type: "text" | "email" | "tel" | "date" | "select" | "radio" | "checkbox" | "textarea" | "ssn";
  label: string;
  options?: QuestionOption[];
}

interface FormSection {
  id: string;
  title: string;
  questions: Question[];
}

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ".")
    .replace(/\.+/g, ".")
    .replace(/^\.+|\.+$/g, "");
}

function detectQuestionType(name: string, fieldType: FieldType): Question["type"] {
  if (fieldType === "PDFDropdown") return "select";
  if (fieldType === "PDFCheckBox") return "checkbox";
  const n = name.toLowerCase();
  if (n.includes("email")) return "email";
  if (n.includes("telephone") || n.includes("phone")) return "tel";
  if (n.includes("ssn")) return "ssn";
  if (n.includes("date")) return "date";
  return "text";
}

function loadFields(inputPath: string): FieldInfo[] {
  const resolved = resolve(inputPath);
  if (resolved.endsWith(".json")) {
    const json = JSON.parse(readFileSync(resolved, "utf-8"));
    const fields: FieldInfo[] = json.fields || [];
    return fields.filter((f) => typeof f.name === "string" && typeof f.type === "string");
  }
  const pdfBytes = readFileSync(resolved);
  const pdfDocPromise = PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  return require("deasync").loopWhile(() => false) || [];
}

async function loadFieldsAsync(inputPath: string): Promise<FieldInfo[]> {
  const resolved = resolve(inputPath);
  if (resolved.endsWith(".json")) {
    const json = JSON.parse(readFileSync(resolved, "utf-8"));
    const fields: FieldInfo[] = json.fields || [];
    return fields.filter((f) => typeof f.name === "string" && typeof f.type === "string");
  }
  const pdfBytes = readFileSync(resolved);
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  const infos: FieldInfo[] = [];
  for (const field of fields) {
    const name = field.getName();
    const type = field.constructor.name as FieldType;
    const info: FieldInfo = { name, type };
    if (type === "PDFDropdown") {
      const dropdown = form.getDropdown(name);
      const options = dropdown.getOptions();
      info.options = options;
    }
    infos.push(info);
  }
  return infos;
}

function groupPreparerFields(fields: FieldInfo[]) {
  const groups: Record<string, FieldInfo[]> = {};
  for (const f of fields) {
    if (
      /Preparer or Translator|Preparer State|PT Middle Initial|Sig Date mmddyyyy|Zip Code/i.test(
        f.name
      )
    ) {
      const m = f.name.match(/(\s)([0-3])$/);
      const idx = m ? m[2] : "0";
      const key = `preparer${idx}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(f);
    }
  }
  return groups;
}

function buildPreparerSection(groups: Record<string, FieldInfo[]>): FormSection | null {
  const keys = Object.keys(groups).sort();
  if (keys.length === 0) return null;
  const questions: Question[] = [];
  for (const key of keys) {
    const idx = parseInt(key.replace("preparer", ""), 10);
    const fields = groups[key];
    const byName: Record<string, FieldInfo | undefined> = {};
    for (const f of fields) byName[f.name] = f;
    const want = [
      { label: `Preparer ${idx + 1} Last Name (Family Name)`, match: /Last Name \(Family Name\)/i },
      { label: `Preparer ${idx + 1} First Name (Given Name)`, match: /First Name \(Given Name\)/i },
      { label: `Preparer ${idx + 1} Middle Initial`, match: /PT Middle Initial/i },
      { label: `Preparer ${idx + 1} Address (Street Number and Name)`, match: /Address \(Street Number and Name\)/i },
      { label: `Preparer ${idx + 1} City or Town`, match: /City or Town/i },
      { label: `Preparer ${idx + 1} State`, match: /^Preparer State/i },
      { label: `Preparer ${idx + 1} ZIP Code`, match: /^Zip Code/i },
      { label: `Preparer ${idx + 1} Date`, match: /^Sig Date mmddyyyy/i },
    ];
    for (const w of want) {
      const candidate = fields.find((f) => w.match.test(f.name));
      if (!candidate) continue;
      const qType = detectQuestionType(candidate.name, candidate.type);
      const idBase = `preparer${idx + 1}.` + slugify(w.label).split(".").slice(-1)[0];
      const question: Question = {
        id: idBase,
        type: qType,
        label: w.label,
        options: qType === "select" && candidate.options ? candidate.options.map((o) => ({ value: o, label: o })) : undefined,
      };
      questions.push(question);
    }
  }
  return {
    id: "section1-preparer-translator",
    title: "Section 1: Preparer/Translator Information",
    questions,
  };
}

function buildGenericSection(formId: string, fields: FieldInfo[]): FormSection {
  const questions: Question[] = [];
  for (const f of fields) {
    const qType = detectQuestionType(f.name, f.type);
    const id = `auto.${slugify(f.name)}`;
    const label = f.name;
    const q: Question = {
      id,
      type: qType,
      label,
      options: qType === "select" && f.options ? f.options.map((o) => ({ value: o, label: o })) : undefined,
    };
    questions.push(q);
  }
  return { id: `${formId}-auto`, title: "Auto-Generated", questions };
}

function buildMappings(sections: FormSection[], fields: FieldInfo[]): FieldMapping[] {
  const nameToField: Record<string, FieldInfo> = {};
  for (const f of fields) nameToField[f.name] = f;
  const mappings: FieldMapping[] = [];
  for (const section of sections) {
    for (const q of section.questions) {
      const candidates = fields.filter((f) => f.name.toLowerCase().includes(q.label.toLowerCase().split(" ")[0]));
      let selected: FieldInfo | undefined = undefined;
      if (section.id === "section1-preparer-translator") {
        const m = q.label.match(/Preparer\s+(\d+)/i);
        const idx = m ? parseInt(m[1], 10) - 1 : 0;
        const byIdx = candidates.find((f) => new RegExp(`\\s${idx}$`).test(f.name));
        selected = byIdx || candidates[0];
      } else {
        selected = candidates[0];
      }
      if (!selected) {
        selected = fields.find((f) => slugify(f.name) === slugify(q.label));
      }
      if (!selected) continue;
      mappings.push({
        questionId: q.id,
        pdfField: selected.name,
      });
    }
  }
  return mappings;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log("Usage: npx tsx src/scripts/generate-registry-and-mappings.ts <form-id> <pdf-or-json-path> [--out-mappings=path] [--out-registry=path]");
    process.exit(1);
  }
  const formId = args[0];
  const inputPath = resolve(args[1]);
  let outMappings: string | undefined;
  let outRegistry: string | undefined;
  for (const a of args.slice(2)) {
    const m = a.match(/^--out-mappings=(.+)$/);
    if (m) outMappings = resolve(m[1]);
    const r = a.match(/^--out-registry=(.+)$/);
    if (r) outRegistry = resolve(r[1]);
  }
  const fields = await loadFieldsAsync(inputPath);
  const preparerGroups = groupPreparerFields(fields);
  const preparerSection = buildPreparerSection(preparerGroups);
  const genericSection = buildGenericSection(formId, fields);
  const sections = preparerSection ? [preparerSection, genericSection] : [genericSection];
  const mappings = buildMappings(sections, fields);
  const mappingsTs =
    `export interface FieldMapping { questionId: string; pdfField: string; type?: string; value?: string; }\n` +
    `export const ${formId.toUpperCase().replace(/-/g, "_")}_AUTO_MAPPINGS: FieldMapping[] = [\n` +
    mappings.map((m) => `  { questionId: "${m.questionId}", pdfField: "${m.pdfField}" }`).join("\n") +
    `\n];\n`;
  const registryJson = JSON.stringify(
    {
      id: formId,
      code: formId.toUpperCase(),
      sections: sections,
    },
    null,
    2
  );
  const outDir = join(process.cwd(), "output");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const mappingsPath = outMappings || join(outDir, `${formId}-auto-mappings.ts`);
  const registryPath = outRegistry || join(outDir, `${formId}-auto-registry.json`);
  writeFileSync(mappingsPath, mappingsTs);
  writeFileSync(registryPath, registryJson);
  console.log(`Mappings: ${mappingsPath}`);
  console.log(`Registry: ${registryPath}`);
}

main();
