// @ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, PDFTextField, PDFCheckBox } from "pdf-lib";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { FORM_REGISTRY } from "@/lib/constants/forms-registry";
import PDFKit from "pdfkit";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formId, answers } = body;
    console.log({ answers });
    if (!formId || !answers) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const formDefinition = FORM_REGISTRY[formId];
    if (!formDefinition) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Get the PDF template path
    const pdfTemplatePath = join(
      process.cwd(),
      "public",
      "pdf-templates",
      `${formId}.pdf`
    );

    // Read the PDF template
    const pdfBytes = await readFile(pdfTemplatePath);

    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();

    // Get all form fields
    const fields = form.getFields();

    // Apply the field mappings from your form definition
    if (
      formDefinition.pdfFieldMappings &&
      formDefinition.pdfFieldMappings.length > 0
    ) {
      for (const mapping of formDefinition.pdfFieldMappings) {
        const answer = answers[mapping.questionId];
        if (answer !== undefined && answer !== null && answer !== "") {
          const field = form.getField(mapping.pdfFieldName);
          if (field) {
            if (field instanceof PDFTextField) {
              field.setText(String(answer));
            } else if (field instanceof PDFCheckBox) {
              const value = mapping.transform
                ? mapping.transform(String(answer))
                : String(answer);
              if (
                value === "Yes" ||
                value === "true" ||
                value === "1" ||
                value === true
              ) {
                field.check();
              } else {
                field.uncheck();
              }
            }
          }
        }
      }
    } else {
      // Fallback: Try to map based on field names
      for (const field of fields) {
        const fieldName = field.getName();

        // Try to find matching answer by question ID
        let answer = null;
        for (const [questionId, ansValue] of Object.entries(answers)) {
          // Simple matching logic - can be improved
          if (
            fieldName
              .toLowerCase()
              .includes(questionId.toLowerCase().replace(/\./g, ""))
          ) {
            answer = ansValue;
            break;
          }
        }

        if (answer !== null && answer !== undefined && answer !== "") {
          if (field instanceof PDFTextField) {
            field.setText(String(answer));
          } else if (field instanceof PDFCheckBox) {
            const value = String(answer);
            if (value === "Yes" || value === "true" || value === "1") {
              field.check();
            } else {
              field.uncheck();
            }
          }
        }
      }
    }

    // Flatten the form (make it non-editable)
    form.flatten();

    // Save the PDF
    const filledPdfBytes = await pdfDoc.save();

    // Return as blob
    return new NextResponse(filledPdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${formDefinition.code}-filled.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);

    // Fallback: Generate a simple PDF with form data
    return generateFallbackPDF(formId, answers);
  }
}

async function generateFallbackPDF(
  formId: string,
  answers: Record<string, any>
) {
  const formDefinition = FORM_REGISTRY[formId];
  const chunks: Buffer[] = [];

  return new Promise<NextResponse>((resolve) => {
    const doc = new PDFKit();

    doc.on("data", (chunk: Buffer) => chunks.push(chunk));
    doc.on("end", () => {
      const pdfBytes = Buffer.concat(chunks);
      resolve(
        new NextResponse(pdfBytes, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${formDefinition.code}-filled.pdf"`,
          },
        })
      );
    });

    doc
      .fontSize(20)
      .text(`${formDefinition.name} - Filled Form`, { align: "center" });
    doc.moveDown();

    for (const [questionId, answer] of Object.entries(answers)) {
      if (answer !== undefined && answer !== null && answer !== "") {
        const questionText = findQuestionText(questionId, formDefinition);
        doc
          .fontSize(12)
          .text(`${questionText || questionId}:`, { continued: true });
        doc.text(` ${String(answer)}`);
        doc.moveDown(0.5);
      }
    }

    doc.end();
  });
}
function findQuestionText(questionId: string, formDefinition: any): string {
  for (const section of formDefinition.sections) {
    for (const question of section.questions) {
      if (question.id === questionId) {
        return question.label;
      }
    }
  }
  return "";
}
