// @ts-nocheck

import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, PDFTextField, PDFCheckBox, StandardFonts } from "pdf-lib";
import { FORM_REGISTRY } from "@/lib/constants/forms-registry";
import { checkFormAccess } from "@/lib/access-control";
import { createClient } from "@/lib/supabase/server";
import PDFKit from "pdfkit";
export const runtime = "nodejs";
import { fillPDF } from "@/lib/pdf/fill-pdf";
// Primary path uses field mappings to fill official templates;
// Fallback generation uses pdf-lib simple text rendering to avoid font path issues

export async function POST(request: NextRequest) {
  let formId: string | undefined;
  let answers: Record<string, any> | undefined;
  try {
    const body = await request.json();
    ({ formId, answers } = body);
    console.log({ answers });
    if (!formId || !answers) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Check authentication
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if user has access to this form
    const accessCheck = await checkFormAccess(formId);
    if (!accessCheck.hasAccess) {
      return NextResponse.json(
        {
          error: "Purchase required to download this form",
          reason: accessCheck.reason,
        },
        { status: 403 }
      );
    }

    const formDefinition = FORM_REGISTRY[formId];
    if (!formDefinition) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    // Use the robust fill engine with unlocked templates and field mappings
    const filledPdfBytes = await fillPDF(formId, answers);

    return new NextResponse(filledPdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${formDefinition.code}-filled.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    try {
      if (!formId || !answers) {
        return NextResponse.json(
          {
            error: "Failed to generate PDF",
            details: "Missing formId or answers in fallback",
          },
          { status: 500 }
        );
      }
      return await generateFallbackPDF(formId, answers);
    } catch (fallbackError) {
      console.error("Fallback PDF generation error:", fallbackError);
      return NextResponse.json(
        {
          error: "Failed to generate PDF",
          details:
            fallbackError instanceof Error
              ? fallbackError.message
              : "Unknown error",
        },
        { status: 500 }
      );
    }
  }
}

async function generateFallbackPDF(
  formId: string,
  answers: Record<string, any>
) {
  const formDefinition = FORM_REGISTRY[formId];
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const margin = 50;
  const titleSize = 20;
  const lineSize = 12;
  let y = height - margin;

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawText(`${formDefinition.name} - Filled Form`, {
    x: margin,
    y,
    size: titleSize,
    font,
  });
  y -= 30;

  for (const [questionId, answer] of Object.entries(answers)) {
    if (answer !== undefined && answer !== null && answer !== "") {
      const questionText =
        findQuestionText(questionId, formDefinition) || questionId;
      const text = `${questionText}: ${String(answer)}`;
      const chunks = text.match(/.{1,90}(\s|$)/g) || [text];
      for (const chunk of chunks) {
        if (y < margin) {
          page = pdfDoc.addPage();
          y = page.getSize().height - margin;
        }
        page.drawText(chunk.trim(), {
          x: margin,
          y,
          size: lineSize,
          font,
        });
        y -= 16;
      }
    }
  }

  const pdfBytes = await pdfDoc.save();
  return new NextResponse(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${formDefinition.code}-filled.pdf"`,
    },
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
