const fs = require('fs');

// Read the field mappings file
const fieldMappingsContent = fs.readFileSync('src/lib/constants/form-mappings/i-129f-field-mappings.ts', 'utf8');

// Extract all questionIds from field mappings
const questionIdMatches = fieldMappingsContent.match(/questionId:\s*"([^"]+)"/g);
const fieldMappingQuestionIds = questionIdMatches ? questionIdMatches.map(match => 
  match.replace(/questionId:\s*"([^"]+)"/, '$1')
) : [];

// Read the forms registry file
const formsRegistryContent = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Extract all question ids from the I-129F form definition
const formQuestionMatches = formsRegistryContent.match(/id:\s*"([^"]+)"/g);
const formQuestionIds = formQuestionMatches ? formQuestionMatches.map(match => 
  match.replace(/id:\s*"([^"]+)"/, '$1')
).filter(id => id.startsWith('part')) : [];

console.log('=== I-129F FIELD ANALYSIS ===\n');
console.log(`Total fields in field mappings: ${fieldMappingQuestionIds.length}`);
console.log(`Total questions in form definition: ${formQuestionIds.length}\n`);

// Find unique question IDs from field mappings
const uniqueFieldMappingIds = [...new Set(fieldMappingQuestionIds)];
console.log(`Unique question IDs in field mappings: ${uniqueFieldMappingIds.length}\n`);

// Find missing fields (in field mappings but not in form definition)
const missingInForm = uniqueFieldMappingIds.filter(id => !formQuestionIds.includes(id));
console.log(`Fields missing from form definition: ${missingInForm.length}\n`);

if (missingInForm.length > 0) {
  console.log('MISSING FIELDS:');
  missingInForm.forEach((field, index) => {
    console.log(`${index + 1}. ${field}`);
  });
}

// Find extra fields (in form definition but not in field mappings)
const extraInForm = formQuestionIds.filter(id => !uniqueFieldMappingIds.includes(id));
console.log(`\nFields in form definition but not in field mappings: ${extraInForm.length}\n`);

if (extraInForm.length > 0) {
  console.log('EXTRA FIELDS IN FORM:');
  extraInForm.forEach((field, index) => {
    console.log(`${index + 1}. ${field}`);
  });
}

// Group missing fields by part
const missingByPart = {};
missingInForm.forEach(field => {
  const part = field.split('.')[0];
  if (!missingByPart[part]) {
    missingByPart[part] = [];
  }
  missingByPart[part].push(field);
});

console.log('\n=== MISSING FIELDS BY PART ===');
Object.keys(missingByPart).sort().forEach(part => {
  console.log(`\n${part.toUpperCase()}: ${missingByPart[part].length} missing fields`);
  missingByPart[part].forEach(field => {
    console.log(`  - ${field}`);
  });
});