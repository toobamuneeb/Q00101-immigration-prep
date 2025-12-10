"use strict";
// @ts-nocheck - PDF lib type issues
/**
 * PDF Fill Service
 *
 * Fills USCIS PDF forms with user answers using field mappings.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillPDF = fillPDF;
exports.fillPDFAndDownload = fillPDFAndDownload;
const pdf_lib_1 = require("pdf-lib");
const fs_1 = require("fs");
const path_1 = require("path");
const i_130_auto_mappings_1 = require("@/lib/constants/form-mappings/i-130-auto-mappings");
const i_485_auto_mappings_1 = require("@/lib/constants/form-mappings/i-485-auto-mappings");
const i_765_auto_mappings_1 = require("@/lib/constants/form-mappings/i-765-auto-mappings");
const i_131_auto_mappings_1 = require("@/lib/constants/form-mappings/i-131-auto-mappings");
const i_864_auto_mappings_1 = require("@/lib/constants/form-mappings/i-864-auto-mappings");
const n_400_auto_mappings_1 = require("@/lib/constants/form-mappings/n-400-auto-mappings");
const i_751_auto_mappings_1 = require("@/lib/constants/form-mappings/i-751-auto-mappings");
const i_90_auto_mappings_1 = require("@/lib/constants/form-mappings/i-90-auto-mappings");
const i_129_auto_mappings_1 = require("@/lib/constants/form-mappings/i-129-auto-mappings");
const i_140_auto_mappings_1 = require("@/lib/constants/form-mappings/i-140-auto-mappings");
const i_539_auto_mappings_1 = require("@/lib/constants/form-mappings/i-539-auto-mappings");
const i_9_auto_mappings_1 = require("@/lib/constants/form-mappings/i-9-auto-mappings");
const i_526_auto_mappings_1 = require("@/lib/constants/form-mappings/i-526-auto-mappings");
const i_821d_auto_mappings_1 = require("@/lib/constants/form-mappings/i-821d-auto-mappings");
const i_212_auto_mappings_1 = require("@/lib/constants/form-mappings/i-212-auto-mappings");
const i_290b_auto_mappings_1 = require("@/lib/constants/form-mappings/i-290b-auto-mappings");
const i_601_auto_mappings_1 = require("@/lib/constants/form-mappings/i-601-auto-mappings");
const i_601a_auto_mappings_1 = require("@/lib/constants/form-mappings/i-601a-auto-mappings");
const i_129f_auto_mappings_1 = require("@/lib/constants/form-mappings/i-129f-auto-mappings");
const i_360_auto_mappings_1 = require("@/lib/constants/form-mappings/i-360-auto-mappings");
const i_600_auto_mappings_1 = require("@/lib/constants/form-mappings/i-600-auto-mappings");
const i_589_auto_mappings_1 = require("@/lib/constants/form-mappings/i-589-auto-mappings");
/**
 * Get field mappings for a specific form
 */
function getFormMappings(formId) {
    switch (formId.toLowerCase()) {
        case 'i-130':
            return i_130_auto_mappings_1.I_130_AUTO_MAPPINGS;
        case 'i-485':
            return i_485_auto_mappings_1.I_485_AUTO_MAPPINGS;
        case 'i-765':
            return i_765_auto_mappings_1.I_765_AUTO_MAPPINGS;
        case 'i-131':
            return i_131_auto_mappings_1.I_131_AUTO_MAPPINGS;
        case 'i-864':
            return i_864_auto_mappings_1.I_864_AUTO_MAPPINGS;
        case 'n-400':
            return n_400_auto_mappings_1.N_400_AUTO_MAPPINGS;
        case 'i-751':
            return i_751_auto_mappings_1.I_751_AUTO_MAPPINGS;
        case 'i-90':
            return i_90_auto_mappings_1.I_90_AUTO_MAPPINGS;
        case 'i-129':
            return i_129_auto_mappings_1.I_129_AUTO_MAPPINGS;
        case 'i-140':
            return i_140_auto_mappings_1.I_140_AUTO_MAPPINGS;
        case 'i-539':
            return i_539_auto_mappings_1.I_539_AUTO_MAPPINGS;
        case 'i-9':
            return i_9_auto_mappings_1.I_9_AUTO_MAPPINGS;
        case 'i-526':
            return i_526_auto_mappings_1.I_526_AUTO_MAPPINGS;
        case 'i-821d':
            return i_821d_auto_mappings_1.I_821D_AUTO_MAPPINGS;
        case 'i-212':
            return i_212_auto_mappings_1.I_212_AUTO_MAPPINGS;
        case 'i-290b':
            return i_290b_auto_mappings_1.I_290B_AUTO_MAPPINGS;
        case 'i-601':
            return i_601_auto_mappings_1.I_601_AUTO_MAPPINGS;
        case 'i-601a':
            return i_601a_auto_mappings_1.I_601A_AUTO_MAPPINGS;
        case 'i-129f':
            return i_129f_auto_mappings_1.I_129F_AUTO_MAPPINGS;
        case 'i-360':
            return i_360_auto_mappings_1.I_360_AUTO_MAPPINGS;
        case 'i-600':
            return i_600_auto_mappings_1.I_600_AUTO_MAPPINGS;
        case 'i-589':
            return i_589_auto_mappings_1.I_589_AUTO_MAPPINGS;
        default:
            throw new Error(`No mappings available for form: ${formId}`);
    }
}
/**
 * Get PDF template path for a form
 */
function getTemplatePath(formId) {
    const templatesDir = (0, path_1.join)(process.cwd(), 'public', 'pdf-templates');
    return (0, path_1.join)(templatesDir, `${formId.toLowerCase()}-unlocked.pdf`);
}
/**
 * Format date for PDF (MM/DD/YYYY)
 */
function formatDate(dateValue) {
    if (!dateValue)
        return '';
    try {
        const date = new Date(dateValue);
        if (isNaN(date.getTime()))
            return String(dateValue);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }
    catch (error) {
        return String(dateValue);
    }
}
/**
 * Format SSN for PDF (remove dashes)
 */
function formatSSN(ssn) {
    if (!ssn)
        return '';
    return String(ssn).replace(/\D/g, ''); // Remove all non-digit characters
}
/**
 * Format Alien Number for PDF (remove 'A' prefix and dashes)
 */
function formatAlienNumber(alienNumber) {
    if (!alienNumber)
        return '';
    return String(alienNumber).replace(/[^0-9]/g, ''); // Remove all non-digit characters
}
/**
 * Fill a PDF form with user answers
 */
async function fillPDF(formId, answers) {
    // Get template path
    const templatePath = getTemplatePath(formId);
    // Load PDF
    const pdfBytes = (0, fs_1.readFileSync)(templatePath);
    const pdfDoc = await pdf_lib_1.PDFDocument.load(pdfBytes);
    const form = pdfDoc.getForm();
    // Get field mappings
    const mappings = getFormMappings(formId);
    // Track filled fields for debugging
    const filledFields = [];
    const failedFields = [];
    // Fill each field
    for (const mapping of mappings) {
        try {
            const value = answers[mapping.questionId];
            // Skip if no value provided
            if (value === undefined || value === null || value === '') {
                continue;
            }
            // Handle different field types
            if (mapping.type === 'checkbox') {
                // Checkbox field
                const checkbox = form.getCheckBox(mapping.pdfField);
                // Check if this is a conditional checkbox (e.g., relationship type)
                if (mapping.value) {
                    // Only check if the answer matches the mapping's value
                    if (value === mapping.value || value === mapping.value.toLowerCase()) {
                        checkbox.check();
                        filledFields.push(`${mapping.pdfField} = checked`);
                    }
                }
                else {
                    // Simple boolean checkbox
                    if (value === true || value === 'yes' || value === 'Yes') {
                        checkbox.check();
                        filledFields.push(`${mapping.pdfField} = checked`);
                    }
                    else {
                        checkbox.uncheck();
                        filledFields.push(`${mapping.pdfField} = unchecked`);
                    }
                }
            }
            else {
                // Try to get the field and determine its type
                try {
                    // Try as dropdown first
                    const field = form.getField(mapping.pdfField);
                    const fieldType = field.constructor.name;
                    if (fieldType === 'PDFDropdown') {
                        const dropdown = form.getDropdown(mapping.pdfField);
                        dropdown.select(String(value));
                        filledFields.push(`${mapping.pdfField} = "${value}" (dropdown)`);
                    }
                    else {
                        // Text field
                        const textField = form.getTextField(mapping.pdfField);
                        // Format value based on question ID
                        let formattedValue;
                        if (mapping.questionId.includes('ssn') || mapping.questionId.includes('SSN')) {
                            formattedValue = formatSSN(value);
                        }
                        else if (mapping.questionId.includes('alienNumber') || mapping.questionId.includes('AlienNumber')) {
                            formattedValue = formatAlienNumber(value);
                        }
                        else if (mapping.questionId.includes('date') || mapping.questionId.includes('Date')) {
                            formattedValue = formatDate(value);
                        }
                        else {
                            formattedValue = String(value);
                        }
                        textField.setText(formattedValue);
                        filledFields.push(`${mapping.pdfField} = "${formattedValue}"`);
                    }
                }
                catch (fieldError) {
                    // If getting the field fails, try as text field
                    const textField = form.getTextField(mapping.pdfField);
                    // Format value based on question ID
                    let formattedValue;
                    if (mapping.questionId.includes('ssn') || mapping.questionId.includes('SSN')) {
                        formattedValue = formatSSN(value);
                    }
                    else if (mapping.questionId.includes('alienNumber') || mapping.questionId.includes('AlienNumber')) {
                        formattedValue = formatAlienNumber(value);
                    }
                    else if (mapping.questionId.includes('date') || mapping.questionId.includes('Date')) {
                        formattedValue = formatDate(value);
                    }
                    else {
                        formattedValue = String(value);
                    }
                    textField.setText(formattedValue);
                    filledFields.push(`${mapping.pdfField} = "${formattedValue}"`);
                }
            }
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            failedFields.push({ field: mapping.pdfField, error: errorMessage });
            console.warn(`Failed to fill field ${mapping.pdfField}:`, errorMessage);
        }
    }
    // Log summary
    console.log(`\n📄 PDF Fill Summary for ${formId.toUpperCase()}:`);
    console.log(`   ✅ Filled: ${filledFields.length} fields`);
    console.log(`   ❌ Failed: ${failedFields.length} fields`);
    if (failedFields.length > 0) {
        console.log(`\n   Failed fields:`);
        failedFields.forEach(({ field, error }) => {
            console.log(`   - ${field}: ${error}`);
        });
    }
    // Save and return filled PDF
    // Note: Some forms have rich text fields that pdf-lib doesn't support
    // We need to save without updating appearances for those forms
    try {
        const filledPdfBytes = await pdfDoc.save();
        return filledPdfBytes;
    }
    catch (error) {
        // If save fails due to rich text fields, try without updating field appearances
        if (error instanceof Error && error.message.includes('rich text')) {
            console.warn('⚠️  PDF contains rich text fields. Saving without appearance updates.');
            const filledPdfBytes = await pdfDoc.save({ updateFieldAppearances: false });
            return filledPdfBytes;
        }
        throw error;
    }
}
/**
 * Fill PDF and return as a blob (for browser download)
 */
async function fillPDFAndDownload(formId, answers, filename) {
    const pdfBytes = await fillPDF(formId, answers);
    // Create blob and download
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || `${formId.toUpperCase()}-filled.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
