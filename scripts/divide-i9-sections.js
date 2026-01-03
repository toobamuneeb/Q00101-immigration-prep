const fs = require('fs');

// Read the current I-9 definition
const defPath = 'src/lib/constants/form-definitions/i-9-definition.ts';
const content = fs.readFileSync(defPath, 'utf-8');

// Extract the sections array and parse it
const sectionsMatch = content.match(/sections:\s*\[([\s\S]*?)\],\s*pdfFieldMappings/);
if (!sectionsMatch) {
  console.error('Could not find sections array');
  process.exit(1);
}

// Parse the sections
const sectionsStr = '[' + sectionsMatch[1] + ']';
let parsedSections;
try {
  parsedSections = JSON.parse(sectionsStr);
} catch (e) {
  console.error('Error parsing sections:', e.message);
  process.exit(1);
}

// Extract all questions from all sections
const questions = [];
parsedSections.forEach(section => {
  if (section.questions) {
    questions.push(...section.questions);
  }
});

console.log(`📊 Total questions: ${questions.length}`);

// Categorize questions by section based on field names and help text
const sections = {
  section1: {
    id: 'section1',
    title: 'Section 1: Employee Information and Attestation',
    questions: []
  },
  section2: {
    id: 'section2',
    title: 'Section 2: Employer Review and Verification',
    questions: []
  },
  supplementA: {
    id: 'supplementA',
    title: 'Supplement A: Preparer/Translator Certification',
    questions: []
  },
  supplementB: {
    id: 'supplementB',
    title: 'Supplement B: Reverification and Rehire',
    questions: []
  }
};

// Categorize each question
questions.forEach(q => {
  const helpText = (q.helpText || '').toLowerCase();
  const label = (q.label || '').toLowerCase();
  const id = (q.id || '').toLowerCase();
  
  if (helpText.includes('supplement b') || helpText.includes('reverification') || 
      id.includes('rehire') || id.includes('reverif')) {
    sections.supplementB.questions.push(q);
  } else if (helpText.includes('supplement a') || helpText.includes('preparer and / or translator') ||
             id.includes('preparer') || id.includes('translator') || id.includes('ptmiddleinitial')) {
    sections.supplementA.questions.push(q);
  } else if (helpText.includes('section 2') || helpText.includes('employer review') ||
             id.includes('lista') || id.includes('listb') || id.includes('listc') ||
             id.includes('firstdayemployed') || id.includes('employer')) {
    sections.section2.questions.push(q);
  } else {
    // Default to Section 1 (employee information)
    sections.section1.questions.push(q);
  }
});

// Print summary
console.log('\n📋 Section Distribution:');
console.log(`  Section 1 (Employee): ${sections.section1.questions.length} questions`);
console.log(`  Section 2 (Employer): ${sections.section2.questions.length} questions`);
console.log(`  Supplement A (Preparer): ${sections.supplementA.questions.length} questions`);
console.log(`  Supplement B (Reverification): ${sections.supplementB.questions.length} questions`);

// Generate new definition with sections
function stringifyCompact(obj, indent = 0) {
  const spaces = '  '.repeat(indent);

  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';

    const firstItem = obj[0];
    if (firstItem && firstItem.id && firstItem.type && firstItem.label) {
      // Each question on one line
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

// Create sections array (only include non-empty sections)
const sectionsArray = Object.values(sections).filter(s => s.questions.length > 0);
const newSectionsStr = stringifyCompact(sectionsArray, 1);

const newDefinition = `/**
 * I-9 Form Definition
 * Employment Eligibility Verification
 * Divided into proper sections
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
  price: 0, // I-9 is typically free for employers
  sections: ${newSectionsStr},
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

// Write the new definition
fs.writeFileSync(defPath, newDefinition);

console.log('\n✅ Updated I-9 definition with proper sections');
console.log(`📁 File: ${defPath}\n`);
