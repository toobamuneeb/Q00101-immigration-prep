// utils/pdf-field-extractor.ts
import { PDFDocument } from "pdf-lib";
import { readFile } from "fs/promises";
import { join } from "path";

export async function extractPdfFieldNames(formId: string) {
  const pdfTemplatePath = join(
    process.cwd(),
    "public",
    "forms",
    `${formId}.pdf`
  );

  try {
    const pdfBytes = await readFile(pdfTemplatePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    const fields = form.getFields();

    const fieldInfo = fields.map((field) => ({
      name: field.getName(),
      type: field.constructor.name,
      // For text fields, you can also get the default value
      ...(field.constructor.name === "PDFTextField" && {
        defaultValue: (field as any).getText(),
      }),
    }));

    return fieldInfo;
  } catch (error) {
    console.error("Error extracting PDF field names:", error);
    return [];
  }
}

// Usage: Run this to get field names for mapping
export async function printPdfFieldNames(formId: string) {
  const fields = await extractPdfFieldNames(formId);
  console.log(`PDF Fields for ${formId}:`);
  fields.forEach((field) => {
    console.log(`- ${field.name} (${field.type})`);
  });
}
