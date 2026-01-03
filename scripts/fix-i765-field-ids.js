const fs = require('fs');

console.log('🔧 Fixing I-765 field ID mismatches...\n');

// Read the field mappings file
const mappingsPath = 'src/lib/constants/form-mappings/i-765-field-mappings.ts';
let mappingsContent = fs.readFileSync(mappingsPath, 'utf-8');

// Read the form definition from forms-registry
const registryPath = 'src/lib/constants/forms-registry.ts';
const registryContent = fs.readFileSync(registryPath, 'utf-8');

// Extract I-765 definition section
const i765Match = registryContent.match(/const I_765_DEFINITION[\s\S]*?pdfFieldMappings: I_765_FIELD_MAPPINGS/);
if (!i765Match) {
  console.error('Could not find I_765_DEFINITION in forms-registry.ts');
  process.exit(1);
}

const i765Definition = i765Match[0];

// Extract all question IDs from the definition
const questionIdPattern = /id:\s*["']([^"']+)["']/g;
const definitionIds = new Set();
let match;

while ((match = questionIdPattern.exec(i765Definition)) !== null) {
  definitionIds.add(match[1]);
}

console.log(`Found ${definitionIds.size} unique question IDs in definition\n`);

// Extract all question IDs from mappings
const mappingIdPattern = /questionId:\s*["']([^"']+)["']/g;
const mappingIds = new Set();

while ((match = mappingIdPattern.exec(mappingsContent)) !== null) {
  mappingIds.add(match[1]);
}

console.log(`Found ${mappingIds.size} unique question IDs in mappings\n`);

// Find mismatches
const mismatches = [];

// Check for IDs in mappings that don't exist in definition
mappingIds.forEach(mappingId => {
  if (!definitionIds.has(mappingId)) {
    // Try to find a similar ID in definition
    const similar = Array.from(definitionIds).find(defId => {
      // Remove "Form" from mapping ID and compare
      const normalizedMapping = mappingId.replace(/Form/g, '');
      const normalizedDef = defId.replace(/Form/g, '');
      return normalizedMapping === normalizedDef;
    });
    
    if (similar) {
      mismatches.push({
        wrong: mappingId,
        correct: similar
      });
    }
  }
});

console.log(`Found ${mismatches.length} mismatches:\n`);

mismatches.forEach(({ wrong, correct }) => {
  console.log(`  ❌ "${wrong}"`);
  console.log(`  ✅ "${correct}"\n`);
});

// Apply fixes
let fixedCount = 0;
mismatches.forEach(({ wrong, correct }) => {
  const regex = new RegExp(`questionId:\\s*["']${wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
  const newContent = mappingsContent.replace(regex, `questionId: "${correct}"`);
  
  if (newContent !== mappingsContent) {
    const count = (mappingsContent.match(regex) || []).length;
    fixedCount += count;
    console.log(`  Fixed ${count} occurrences of "${wrong}"`);
    mappingsContent = newContent;
  }
});

// Write the fixed content
fs.writeFileSync(mappingsPath, mappingsContent);

console.log(`\n✅ Fixed ${fixedCount} field ID mismatches in I-765 mappings`);
console.log(`📁 File: ${mappingsPath}\n`);
