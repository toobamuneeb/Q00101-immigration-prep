const fs = require('fs');

// Read the current I-9 definition
const defPath = 'src/lib/constants/form-definitions/i-9-definition.ts';
const content = fs.readFileSync(defPath, 'utf-8');

// Extract the sections array
const sectionsMatch = content.match(/sections:\s*\[([\s\S]*?)\],\s*pdfFieldMappings/);
if (!sectionsMatch) {
  console.error('Could not find sections array');
  process.exit(1);
}

const sectionsStr = '[' + sectionsMatch[1] + ']';
const sections = JSON.parse(sectionsStr);

console.log('📊 Processing I-9 form...\n');

let removedCount = 0;
let shortenedCount = 0;

// Function to shorten help text
function shortenHelpText(text) {
  if (!text) return text;
  
  // Remove common prefixes
  let shortened = text
    .replace(/^Section \d+\.,?\s*/i, '')
    .replace(/^Supplement [AB],?\s*/i, '')
    .replace(/^Reverification and Rehire\.\s*/i, '')
    .replace(/^Employee Information and Attestation\.\s*/i, '')
    .replace(/^Employer Review and Verification\.\s*/i, '')
    .replace(/^Preparer and \/ or Translator Certification for Section \d+\.\s*/i, '')
    .replace(/^Re verification and Rehire \(formerly Section \d+\)\.\s*/i, '')
    .replace(/^Employee Information from Section \d+\.\s*/i, '')
    .replace(/^List [ABC]\.\s*/i, '')
    .replace(/^Enter\s+/i, '')
    .replace(/^The\s+/i, '')
    .replace(/\s+Instructions:.*$/i, '')
    .replace(/\s+Additional guidance can be found.*$/i, '')
    .trim();
  
  // If still too long, take first sentence
  if (shortened.length > 100) {
    const firstSentence = shortened.split(/[.;]/)[0];
    if (firstSentence.length > 0 && firstSentence.length < shortened.length) {
      shortened = firstSentence.trim();
    }
  }
  
  return shortened || text;
}

// Process each section
sections.forEach(section => {
  if (!section.questions) return;
  
  // Filter out signature and signature date fields
  const originalLength = section.questions.length;
  section.questions = section.questions.filter(q => {
    const id = q.id.toLowerCase();
    const label = (q.label || '').toLowerCase();
    
    // Remove signature fields
    if (id.includes('signature') || label.includes('signature')) {
      removedCount++;
      return false;
    }
    
    // Remove signature date fields
    if (id.includes('sigdate') || id.includes('signaturedate')) {
      removedCount++;
      return false;
    }
    
    // Remove "today's date" fields that are signature dates
    if ((id.includes('todaysdate') || id.includes('todayapossdate')) && 
        (q.helpText || '').toLowerCase().includes('signature')) {
      removedCount++;
      return false;
    }
    
    return true;
  });
  
  // Shorten help text for remaining questions
  section.questions.forEach(q => {
    if (q.helpText) {
      const original = q.helpText;
      q.helpText = shortenHelpText(original);
      if (q.helpText !== original) {
        shortenedCount++;
      }
    }
  });
  
  console.log(`✓ ${section.title}: ${originalLength} → ${section.questions.length} questions`);
});

// Generate compact JSON
function stringifyCompact(obj, indent = 0) {
  const spaces = '  '.repeat(indent);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';

    const firstItem = obj[0];
    if (firstItem && firstItem.id && firstItem.type && firstItem.label) {
      const items = obj.map(q => JSON.stringify(q));
      return '[\n' + spaces + '  ' + items.join(',\n' + spaces + '  ') + '\n' + spaces + ']';
    }

    if (firstItem && firstItem.id && firstItem.title && firstItem.questions) {
      const items = obj.map(section => {
        const questionsStr = stringifyCompact(section.questions, indent + 1);
        return `{\n${spaces}  "id": "${section.id}",\n${spaces}  "title": "${section.title}",\n${spaces}  "questions": ${questionsStr}\n${spaces}}`;
      });
      return '[\n' + spaces + items.join(',\n' + spaces) + '\n' + spaces.substring(2) + ']';
    }

    const items = obj.map(item => stringifyCompact(item, indent + 1));
    return '[\n' + spaces + '  ' + items.join(',\n' + spaces + '  ') + '\n' + spaces + ']';
  }

  if (obj && typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';

    const items = keys.map(key => {
      const value = stringifyCompact(obj[key], indent + 1);
      return `"${key}": ${value}`;
    });

    return '{\n' + spaces + '  ' + items.join(',\n' + spaces + '  ') + '\n' + spaces + '}';
  }

  return JSON.stringify(obj);
}

const sectionsStrNew = stringifyCompact(sections, 1);

const newDefinition = `/**
 * I-9 Form Definition
 * Employment Eligibility Verification
 * Cleaned: Removed signature fields, shortened help text
 */

import { FormDefinition } from '../forms-registry';
import { I_9_FIELD_MAPPINGS } from '../form-mappings/i-9-field-mappings';

const I_9_DEFINITION: FormDefinition = {
  id: "i-9",
  code: "I-9",
  name: "Employment Eligibility Verification",
  description: "Form I-9 is used to verify the identity and employment authorization of individuals hired for employment in the United States.",
  category: "employment",
  estimatedTime: "15-20 minutes",
  filingFee: 0,
  price: 0,
  sections: ${sectionsStrNew},
  pdfFieldMappings: I_9_FIELD_MAPPINGS,
  requiredDocuments: [
    "One document from List A (proving both identity and employment authorization), OR",
    "One document from List B (proving identity) AND one document from List C (proving employment authorization)"
  ],
  instructions: [
    "Employees must complete Section 1 on or before their first day of employment",
    "Employers must complete Section 2 within 3 business days of the employee's first day of employment",
    "Use Supplement A if a preparer or translator assisted with Section 1",
    "Use Supplement B for reverification or rehire within 3 years"
  ],
};

export default I_9_DEFINITION;
`;

fs.writeFileSync(defPath, newDefinition);

console.log(`\n✅ Cleaned I-9 definition:`);
console.log(`   - Removed ${removedCount} signature/date fields`);
console.log(`   - Shortened ${shortenedCount} help texts`);
console.log(`📁 File: ${defPath}\n`);
