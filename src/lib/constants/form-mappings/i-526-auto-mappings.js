"use strict";
/**
 * Auto-generated field mappings for I-526
 *
 * Generated on: 2025-11-27T05:32:42.479Z
 * Mapped: 2/8 fields (25%)
 *
 * ⚠️  IMPORTANT: Review all mappings before use in production!
 * Some mappings may be incorrect and require manual verification.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEEDS_REVIEW_MAPPINGS = exports.HIGH_CONFIDENCE_MAPPINGS = exports.I_526_AUTO_MAPPINGS = void 0;
exports.I_526_AUTO_MAPPINGS = [
    { questionId: 'investor.dob', pdfField: 'form1[0].PG1[0].P1_Line6_DateOfBirth[0]', }, // Confidence: 10
    { questionId: 'investor.countryOfBirth', pdfField: 'form1[0].PG2[0].P1_Line12_Country[0]', }, // Confidence: 10
];
/**
 * Unmapped questions (6):
 * These need manual review and mapping.
 *
 * - investor.name.last: "Legal Last Name"
 * - investor.name.first: "Legal First Name"
 * - investment.amount: "Total Investment Amount"
 * - investment.source: "Lawful Source of Investment Funds"
 * - investment.businessType: "Type of Business Enterprise"
 * - investment.jobsCreated: "Number of Jobs to be Created"
 */
/**
 * High-confidence mappings (score >= 15):
 * 0 mappings
 */
exports.HIGH_CONFIDENCE_MAPPINGS = exports.I_526_AUTO_MAPPINGS.filter((_, i) => {
    const confidences = [10, 10];
    return confidences[i] >= 15;
});
/**
 * Manual review needed (score < 10):
 * 0 mappings
 */
exports.NEEDS_REVIEW_MAPPINGS = exports.I_526_AUTO_MAPPINGS.filter((_, i) => {
    const confidences = [10, 10];
    return confidences[i] < 10;
});
