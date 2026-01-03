const fs = require('fs');
const path = require('path');

console.log('🔍 Checking all forms for field ID mismatches...\n');

// Read the forms registry
const registryPath = 'src/lib/constants/forms-registry.ts';
const registryContent = fs.readFileSync(registryPath, 'utf-8');

// List of forms to check
const forms = [
  'i-130', 'i-485', 'i-765', 'i-131', 'i-864', 
  'i-129', 'i-129f', 'i-751', 'i-90', 'i-9',
  'n-400', 'i-212', 'i-601', 'i-589'
];

const allMismatches = {};

forms.forEach(formId => {
  const upperFormId = formId.toUpperCase().replace(/-/g, '_');
  const mappingsFile = `src/lib/constants/form-mappings/${formId}-field-mappings.ts`;
  
  // Check if mappings file exists
  if (!fs.existsSync(mappingsFile)) {
    console.log(`⚠️  ${formId}: Mappings file not found`);
    return;
  }
  
  // Extract definition from registry
  const defPattern = new RegExp(`const ${upperFormId}_DEFINITION[\\s\\S]*?pdfFieldMappings: ${upperFormId}_FIELD_MAPPINGS`);
  const defMatch = registryContent.match(defPattern);
  
  if (!defMatch) {
    console.log(`⚠️  ${formId}: Definition not found in registry`);
    return;
  }
  
  const definition = defMatch[0];
  
  // Extract question IDs from definition
  const questionIdPattern = /id:\s*["']([^"']+)["']/g;
  const definitionIds = new Set();
  let match;
  
  while ((match = questionIdPattern.exec(definition)) !== null) {
    definitionIds.add(match[1]);
  }
  
  // Read mappings file
  const mappingsContent = fs.readFileSync(mappingsFile, 'utf-8');
  
  // Extract question IDs from mappings
  const mappingIdPattern = /questionId:\s*["']([^"']+)["']/g;
  const mappingIds = new Set();
  
  while ((match = mappingIdPattern.exec(mappingsContent)) !== null) {
    mappingIds.add(match[1]);
  }
  
  // Find IDs in mappings but not in definition
  const missingInDef = [];
  mappingIds.forEach(mappingId => {
    if (!definitionIds.has(mappingId)) {
      missingInDef.push(mappingId);
    }
  });
  
  // Find IDs in definition but not in mappings
  const missingInMappings = [];
  definitionIds.forEach(defId => {
    if (!mappingIds.has(defId)) {
      missingInMappings.push(defId);
    }
  });
  
  if (missingInDef.length > 0 || missingInMappings.length > 0) {
    allMismatches[formId] = {
      missingInDef,
      missingInMappings,
      defCount: definitionIds.size,
      mapCount: mappingIds.size
    };
    
    console.log(`\n📋 ${formId.toUpperCase()}:`);
    console.log(`   Definition: ${definitionIds.size} IDs`);
    console.log(`   Mappings: ${mappingIds.size} IDs`);
    
    if (missingInDef.length > 0) {
      console.log(`   ❌ ${missingInDef.length} IDs in mappings but NOT in definition:`);
      missingInDef.slice(0, 5).forEach(id => console.log(`      - ${id}`));
      if (missingInDef.length > 5) {
        console.log(`      ... and ${missingInDef.length - 5} more`);
      }
    }
    
    if (missingInMappings.length > 0) {
      console.log(`   ⚠️  ${missingInMappings.length} IDs in definition but NOT in mappings:`);
      missingInMappings.slice(0, 5).forEach(id => console.log(`      - ${id}`));
      if (missingInMappings.length > 5) {
        console.log(`      ... and ${missingInMappings.length - 5} more`);
      }
    }
  } else {
    console.log(`✅ ${formId.toUpperCase()}: All IDs match (${definitionIds.size} IDs)`);
  }
});

console.log('\n\n📊 Summary:');
const formsWithIssues = Object.keys(allMismatches).length;
if (formsWithIssues === 0) {
  console.log('✅ All forms have matching field IDs!');
} else {
  console.log(`⚠️  ${formsWithIssues} forms have mismatches`);
  console.log('\nForms with issues:');
  Object.keys(allMismatches).forEach(formId => {
    const { missingInDef, missingInMappings } = allMismatches[formId];
    console.log(`  - ${formId}: ${missingInDef.length} extra in mappings, ${missingInMappings.length} missing from mappings`);
  });
}

console.log('');
