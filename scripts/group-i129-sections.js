const fs = require('fs');

// Read the forms registry file
const content = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Define the groups for I-129 sections
const sectionGroups = {
  part0: { group: 'petitioner', groupTitle: 'Petitioner Information' },
  part1: { group: 'petitioner', groupTitle: 'Petitioner Information' },
  part2: { group: 'beneficiary', groupTitle: 'Beneficiary Information' },
  part3: { group: 'processing', groupTitle: 'Processing & Classification' },
  part4: { group: 'additional', groupTitle: 'Additional Information' },
  part5: { group: 'preparer', groupTitle: 'Preparer & Contact' },
  part7: { group: 'preparer', groupTitle: 'Preparer & Contact' },
  part8: { group: 'signature', groupTitle: 'Signature' },
};

// Find the I_129_DEFINITION section
const i129Start = content.indexOf('const I_129_DEFINITION');
const i129End = content.indexOf('};', i129Start + 1000) + 2; // Find the closing of the definition

if (i129Start === -1) {
  console.error('Could not find I_129_DEFINITION');
  process.exit(1);
}

// Extract the I-129 definition
let i129Content = content.substring(i129Start, i129End);

// Add group properties to each section
Object.entries(sectionGroups).forEach(([partId, groupInfo]) => {
  const sectionPattern = new RegExp(
    `(\\s+{\\s+id: "${partId}",\\s+title: "[^"]+",)`,
    'g'
  );
  
  i129Content = i129Content.replace(
    sectionPattern,
    `$1\n      group: "${groupInfo.group}",\n      groupTitle: "${groupInfo.groupTitle}",`
  );
});

// Replace in the original content
const newContent = content.substring(0, i129Start) + i129Content + content.substring(i129End);

// Write back
fs.writeFileSync('src/lib/constants/forms-registry.ts', newContent, 'utf8');

console.log('✅ Successfully added groups to I-129 sections');
console.log('Groups added:');
Object.entries(sectionGroups).forEach(([partId, groupInfo]) => {
  console.log(`  - ${partId}: ${groupInfo.groupTitle} (${groupInfo.group})`);
});
