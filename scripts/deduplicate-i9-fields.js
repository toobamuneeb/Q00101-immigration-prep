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

console.log('📊 Analyzing I-9 form for duplicates...\n');

// Track all fields by label and type
const fieldsByLabel = new Map();
const fieldsByPattern = new Map();

// First pass: collect all fields
sections.forEach(section => {
  if (!section.questions) return;
  
  section.questions.forEach(q => {
    const key = `${q.label.toLowerCase()}|${q.type}`;
    
    if (!fieldsByLabel.has(key)) {
      fieldsByLabel.set(key, []);
    }
    fieldsByLabel.get(key).push({
      section: section.id,
      question: q
    });
  });
});

// Find duplicates
const duplicates = [];
fieldsByLabel.forEach((instances, key) => {
  if (instances.length > 1) {
    duplicates.push({
      key,
      count: instances.length,
      instances
    });
  }
});

console.log(`Found ${duplicates.length} duplicate field patterns:\n`);

duplicates.forEach(dup => {
  const [label, type] = dup.key.split('|');
  console.log(`"${label}" (${type}) - ${dup.count} instances:`);
  dup.instances.forEach(inst => {
    console.log(`  - ${inst.section}: ${inst.question.id}`);
  });
  console.log('');
});

// Now let's deduplicate by keeping only unique fields per section
let totalRemoved = 0;

sections.forEach(section => {
  if (!section.questions) return;
  
  const seen = new Set();
  const originalLength = section.questions.length;
  
  section.questions = section.questions.filter(q => {
    // Create a unique key based on label, type, and options
    const optionsKey = q.options ? JSON.stringify(q.options) : '';
    const key = `${q.label.toLowerCase()}|${q.type}|${optionsKey}`;
    
    if (seen.has(key)) {
      console.log(`  ✗ Removing duplicate in ${section.id}: "${q.label}" (${q.id})`);
      totalRemoved++;
      return false;
    }
    
    seen.add(key);
    return true;
  });
  
  if (originalLength !== section.questions.length) {
    console.log(`  ${section.title}: ${originalLength} → ${section.questions.length} questions\n`);
  }
});

// Also check for fields that are clearly duplicates based on ID patterns
console.log('\n📋 Checking for numbered duplicates (e.g., field0, field1, field2)...\n');

sections.forEach(section => {
  if (!section.questions) return;
  
  // Group by base ID (without numbers)
  const baseIds = new Map();
  
  section.questions.forEach(q => {
    const baseId = q.id.replace(/\d+$/, '');
    if (!baseIds.has(baseId)) {
      baseIds.set(baseId, []);
    }
    baseIds.get(baseId).push(q);
  });
  
  // Find groups with multiple instances
  baseIds.forEach((questions, baseId) => {
    if (questions.length > 1) {
      // Check if they're truly duplicates (same label and type)
      const firstQ = questions[0];
      const allSame = questions.every(q => 
        q.label === firstQ.label && 
        q.type === firstQ.type &&
        JSON.stringify(q.options) === JSON.stringify(firstQ.options)
      );
      
      if (allSame) {
        console.log(`  Found ${questions.length} identical fields with base ID "${baseId}":`);
        questions.forEach(q => console.log(`    - ${q.id}: "${q.label}"`));
        console.log('');
      }
    }
  });
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
 * Deduplicated and optimized
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

console.log(`\n✅ Deduplication complete:`);
console.log(`   - Removed ${totalRemoved} duplicate fields`);
console.log(`📁 File: ${defPath}\n`);
