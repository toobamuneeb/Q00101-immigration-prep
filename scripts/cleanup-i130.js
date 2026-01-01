#!/usr/bin/env node

/**
 * Cleanup I-130 Definition
 * 1. Remove the commented out I_130_DEFINITION
 * 2. Keep only the active I130_DEFINITION
 * 3. Fix question IDs to match i-130-auto-mappings
 */

const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = path.join(__dirname, '../src/lib/constants/forms-registry.ts');

console.log('🚀 Cleaning up I-130 Definition...\n');

// Create backup
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
const backupDir = path.join(__dirname, '../backups', timestamp);
fs.mkdirSync(backupDir, { recursive: true });
fs.copyFileSync(REGISTRY_PATH, path.join(backupDir, 'forms-registry.ts'));
console.log(`✅ Created backup: ${timestamp}\n`);

// Read file
let content = fs.readFileSync(REGISTRY_PATH, 'utf8');

// Step 1: Remove commented I_130_DEFINITION
console.log('🔧 Step 1: Removing commented I_130_DEFINITION...');
const commentedStart = content.indexOf('// export const I_130_DEFINITION: FormDefinition = {');
if (commentedStart !== -1) {
  // Find the end of the commented section (look for next non-commented export or const)
  let commentedEnd = commentedStart;
  const lines = content.substring(commentedStart).split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    if (i > 0 && lines[i].trim() && !lines[i].trim().startsWith('//')) {
      // Found first non-commented line
      commentedEnd = commentedStart + lines.slice(0, i).join('\n').length;
      break;
    }
  }
  
  content = content.substring(0, commentedStart) + content.substring(commentedEnd);
  console.log('  ✅ Removed commented definition\n');
} else {
  console.log('  ℹ️  No commented definition found\n');
}

// Step 2: Fix question IDs in active I130_DEFINITION
console.log('🔧 Step 2: Fixing question IDs to match mappings...');

// The active definition uses simplified IDs like:
// - part1.relationship
// - part2.familyName
// But mappings use detailed IDs like:
// - part1.line1.spouse
// - part1.line4a.familyname

// We need to update the definition to match the mapping structure
const fixes = [
  // Part 1 - Relationship
  { from: '"part1.relationship"', to: '"part1.line1.relationship"' },
  { from: '"part1.childRelationship"', to: '"part1.line2.childrelationship"' },
  { from: '"part1.relatedByAdoption"', to: '"part1.line3.relatedbyadoption"' },
  { from: '"part1.gainedStatusThroughAdoption"', to: '"part1.line4.gainedstatusthroughadoption"' },
  
  // Part 2 - Personal Info (these map to part1.line4a, part1.line4b, etc in mappings)
  { from: '"part2.familyName"', to: '"part1.line4a.familyname"' },
  { from: '"part2.givenName"', to: '"part1.line4b.givenname"' },
  { from: '"part2.middleName"', to: '"part1.line4c.middlename"' },
  { from: '"part2.alienNumber"', to: '"part1.line1.aliennumber"' },
  { from: '"part2.uscisOnlineAccountNumber"', to: '"part1.line2.uscisonlineactnumber"' },
  { from: '"part2.dateOfBirth"', to: '"part1.line8.dateofbirth"' },
  { from: '"part2.sex"', to: '"part1.line9.sex"' },
  { from: '"part2.countryOfBirth"', to: '"part1.line7.countryofbirth"' },
  { from: '"part2.cityOfBirth"', to: '"part1.line6.citytownofbirth"' },
];

let fixCount = 0;
fixes.forEach(({ from, to }) => {
  if (content.includes(from)) {
    content = content.replace(new RegExp(from, 'g'), to);
    fixCount++;
  }
});

console.log(`  ✅ Fixed ${fixCount} question IDs\n`);

// Write updated file
fs.writeFileSync(REGISTRY_PATH, content, 'utf8');

console.log('✅ Cleanup Complete!\n');
console.log('📋 Summary:');
console.log('  - Removed commented definition');
console.log(`  - Fixed ${fixCount} question IDs to match mappings`);
console.log(`  - Backup: ${timestamp}\n`);
console.log('🧪 Next: Test I-130 form generation');
