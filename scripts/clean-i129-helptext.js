const fs = require('fs');

// Read the forms registry file
const content = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Find the I_129_DEFINITION section
const i129Start = content.indexOf('const I_129_DEFINITION');
if (i129Start === -1) {
  console.error('Could not find I_129_DEFINITION');
  process.exit(1);
}

// Find the end of I_129_DEFINITION (next const or export)
const afterI129 = content.substring(i129Start);
const nextConstMatch = afterI129.substring(1000).match(/\n(const |export )/);
const i129End = nextConstMatch ? i129Start + 1000 + nextConstMatch.index : content.length;

// Extract the I-129 definition
let i129Content = content.substring(i129Start, i129End);

// Clean up helpText patterns
const cleanupPatterns = [
  {
    // Remove "Part X. Petitioner Information. If you are an individual filing this petition, complete Item Number 1. If you are a company or an organization filing this petition, complete Item Number 2. "
    pattern: /Part (\d+)\. Petitioner Information\. If you are an individual filing this petition, complete Item Number 1\. If you are a company or an organization filing this petition, complete Item Number 2\. (\d+)\. /g,
    replacement: 'Part $1. '
  },
  {
    // Remove "Part X. Petitioner Information. " when followed by item number
    pattern: /Part (\d+)\. Petitioner Information\. (\d+)\. /g,
    replacement: 'Part $1. '
  },
  {
    // Remove "Part X. Petitioner Information. " when followed by text
    pattern: /Part (\d+)\. Petitioner Information\. ([A-Z])/g,
    replacement: 'Part $1. $2'
  },
  {
    // Clean up other common repetitive patterns
    pattern: /Part (\d+)\. Information About the Beneficiary\. /g,
    replacement: 'Part $1. '
  },
  {
    // Clean up processing information
    pattern: /Part (\d+)\. Processing Information\. /g,
    replacement: 'Part $1. '
  },
  {
    // Clean up additional information
    pattern: /Part (\d+)\. Additional Information\. /g,
    replacement: 'Part $1. '
  },
  {
    // Clean up preparer information
    pattern: /Part (\d+)\. Preparer Information\. /g,
    replacement: 'Part $1. '
  },
  {
    // Clean up contact information
    pattern: /Part (\d+)\. Contact Information\. /g,
    replacement: 'Part $1. '
  },
  {
    // Clean up signature
    pattern: /Part (\d+)\. Signature\. /g,
    replacement: 'Part $1. '
  }
];

let changeCount = 0;

// Apply all cleanup patterns
cleanupPatterns.forEach(({ pattern, replacement }) => {
  const matches = i129Content.match(pattern);
  if (matches) {
    changeCount += matches.length;
    i129Content = i129Content.replace(pattern, replacement);
  }
});

// Replace in the original content
const newContent = content.substring(0, i129Start) + i129Content + content.substring(i129End);

// Write back
fs.writeFileSync('src/lib/constants/forms-registry.ts', newContent, 'utf8');

console.log(`✅ Successfully cleaned up ${changeCount} helpText entries in I-129`);
console.log('Removed repetitive section headers from helpText fields');
