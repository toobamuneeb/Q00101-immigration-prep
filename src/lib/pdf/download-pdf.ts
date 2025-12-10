// @ts-nocheck - PDF lib type issues
/**
 * PDF Fill Service
 *
 * Fills USCIS PDF forms with user answers using field mappings.
 */

import { PDFDocument } from "pdf-lib";
import { readFileSync } from "fs";
import { join } from "path";
import {
  I_130_AUTO_MAPPINGS,
  type FieldMapping,
} from "@/lib/constants/form-mappings/i-130-auto-mappings";
import { fillPDF } from "./fill-pdf";

/**
 * Fill PDF and return as a blob (for browser download)
 */
export async function fillPDFAndDownload(
  formId: string,
  answers: Record<string, any>,
  filename?: string
): Promise<void> {
  const pdfBytes = await fillPDF(formId, answers);

  // Create blob and download
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename || `${formId.toUpperCase()}-filled.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
