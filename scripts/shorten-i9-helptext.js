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

console.log('📊 Shortening I-9 help text...\n');

let shortenedCount = 0;
let removedCount = 0;

// Function to aggressively shorten help text
function shortenHelpText(text, label) {
  if (!text) return undefined;
  
  // If help text is same as label or very similar, remove it
  if (text.toLowerCase() === label.toLowerCase()) {
    return undefined;
  }
  
  // If help text just adds a period to the label, remove it
  if (text === label + '.' || text === label + '.') {
    return undefined;
  }
  
  // Remove all common prefixes and patterns
  let shortened = text
    // Remove section references
    .replace(/^Section \d+:?\s*/i, '')
    .replace(/^Supplement [AB],?\s*/i, '')
    .replace(/^Reverification and Rehire\.?\s*/i, '')
    .replace(/^Re verification and Rehire \(formerly Section \d+\)\.?\s*/i, '')
    
    // Remove subsection references
    .replace(/^Employee Information and Attestation\.?\s*/i, '')
    .replace(/^Employer Review and Verification\.?\s*/i, '')
    .replace(/^Preparer and \/ or Translator Certification for Section \d+\.?\s*/i, '')
    .replace(/^Employee Information from Section \d+\.?\s*/i, '')
    .replace(/^List [ABC]\.?\s*/i, '')
    
    // Remove action verbs
    .replace(/^Enter\s+/i, '')
    .replace(/^Select\s+/i, '')
    .replace(/^Choose\s+/i, '')
    .replace(/^Provide\s+/i, '')
    .replace(/^Input\s+/i, '')
    
    // Remove articles
    .replace(/^The\s+/i, '')
    .replace(/^A\s+/i, '')
    .replace(/^An\s+/i, '')
    
    // Remove redundant phrases
    .replace(/\s+from the drop down list\.?$/i, '')
    .replace(/\s+if any\.?$/i, '')
    .replace(/\s+\(if any\)\.?$/i, '')
    
    // Remove instructions and guidance
    .replace(/\s+Instructions:.*$/i, '')
    .replace(/\s+Additional guidance.*$/i, '')
    .replace(/\s+See page \d+.*$/i, '')
    .replace(/\s+\(See.*?\)\.?$/i, '')
    
    // Clean up
    .replace(/\s+/g, ' ')
    .trim();
  
  // If shortened text is now same as label, remove it
  if (shortened.toLowerCase() === label.toLowerCase()) {
    return undefined;
  }
  
  // If shortened text is very short or just punctuation, remove it
  if (shortened.length < 3 || /^[.\s,;:!?-]+$/.test(shortened)) {
    return undefined;
  }
  
  // If it's just repeating the label with minor changes, remove it
  const labelWords = label.toLowerCase().split(/\s+/);
  const shortenedWords = shortened.toLowerCase().split(/\s+/);
  const commonWords = labelWords.filter(w => shortenedWords.includes(w));
  if (commonWords.length >= labelWords.length * 0.8) {
    return undefined;
  }
  
  // If still too long, take first clause or sentence
  if (shortened.length > 80) {
    // Try to find first sentence
    const sentences = shortened.split(/[.;]/);
    if (sentences[0] && sentences[0].length < shortened.length) {
      shortened = sentences[0].trim();
    } else {
      // Take first 80 chars at word boundary
      if (shortened.length > 80) {
        shortened = shortened.substring(0, 77);
        const lastSpace = shortened.lastIndexOf(' ');
        if (lastSpace > 50) {
          shortened = shortened.substring(0, lastSpace) + '...';
        } else {
          shortened = shortened + '...';
        }
      }
    }
  }
  
  return shortened || undefined;
}

// Process each section
sections.forEach(section => {
  if (!section.questions) return;
  
  console.log(`Processing: ${section.title}`);
  
  section.questions.forEach(q => {
    if (q.helpText) {
      const original = q.helpText;
      const shortened = shortenHelpText(original, q.label);
      
      if (shortened === undefined) {
        delete q.helpText;
        removedCount++;
        console.log(`  ✗ Removed: "${original.substring(0, 50)}..."`);
      } else if (shortened !== original) {
        q.helpText = shortened;
        shortenedCount++;
        console.log(`  ✓ Shortened: "${original.substring(0, 40)}..." → "${shortened.substring(0, 40)}..."`);
      }
    }
  });
  
  console.log('');
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
 * Cleaned and optimized
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

console.log(`\n✅ Help text optimization complete:`);
console.log(`   - Removed ${removedCount} redundant help texts`);
console.log(`   - Shortened ${shortenedCount} help texts`);
console.log(`📁 File: ${defPath}\n`);
