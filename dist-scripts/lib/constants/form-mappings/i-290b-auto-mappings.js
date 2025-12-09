"use strict";
/**
 * Auto-generated field mappings for I-290B
 *
 * Generated on: 2025-11-27T13:38:37.145Z
 * Mapped: 0/8 fields (0%)
 *
 * ⚠️  IMPORTANT: Review all mappings before use in production!
 * Some mappings may be incorrect and require manual verification.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NEEDS_REVIEW_MAPPINGS = exports.HIGH_CONFIDENCE_MAPPINGS = exports.I_290B_AUTO_MAPPINGS = void 0;
exports.I_290B_AUTO_MAPPINGS = [];
/**
 * Unmapped questions (8):
 * These need manual review and mapping.
 *
 * - part1.lastName: "Family Name (Last Name)"
 * - part1.firstName: "Given Name (First Name)"
 * - part1.middleName: "Middle Name"
 * - part1.alienNumber: "Alien Registration Number (A-Number)"
 * - part2.requestType: "I am filing"
 * - part2.decisionDate: "Date of Decision Being Appealed"
 * - part2.formType: "Form Number of Application Being Appealed"
 * - part2.reasonForAppeal: "Basis for Appeal or Motion"
 */
/**
 * High-confidence mappings (score >= 15):
 * 0 mappings
 */
exports.HIGH_CONFIDENCE_MAPPINGS = exports.I_290B_AUTO_MAPPINGS.filter((_, i) => {
    const confidences = [];
    return confidences[i] >= 15;
});
/**
 * Manual review needed (score < 10):
 * 0 mappings
 */
exports.NEEDS_REVIEW_MAPPINGS = exports.I_290B_AUTO_MAPPINGS.filter((_, i) => {
    const confidences = [];
    return confidences[i] < 10;
});
