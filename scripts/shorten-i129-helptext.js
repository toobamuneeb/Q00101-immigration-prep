const fs = require('fs');

// Read the forms registry file
const content = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Find the I_129_DEFINITION section
const i129Start = content.indexOf('const I_129_DEFINITION');
if (i129Start === -1) {
  console.error('Could not find I_129_DEFINITION');
  process.exit(1);
}

// Find the end of I_129_DEFINITION (look for the closing brace and semicolon before export)
const afterI129 = content.substring(i129Start);
const exportMatch = afterI129.match(/\n\nexport const FORM_REGISTRY/);
const i129End = exportMatch ? i129Start + exportMatch.index : content.length;

// Extract the I-129 definition
let i129Content = content.substring(i129Start, i129End);

// Comprehensive cleanup patterns
const cleanupPatterns = [
  // Remove "Part X. [Section Name]. " prefixes
  { pattern: /Part \d+\. [^.]+\. /g, replacement: '' },
  
  // Remove long instructional sentences
  { pattern: /Information about the beneficiary\/beneficiaries you are filing for\. Complete the blocks below\. Use the Attachment-1 sheet to name each beneficiary included in this petition\. /gi, replacement: '' },
  { pattern: /If you are an individual filing this petition, complete Item Number \d+\. If you are a company or an organization filing this petition, complete Item Number \d+\. /gi, replacement: '' },
  { pattern: /Provide information about yourself\. /gi, replacement: '' },
  { pattern: /Provide information about the beneficiary\. /gi, replacement: '' },
  { pattern: /Complete the blocks below\. /gi, replacement: '' },
  { pattern: /Use the Attachment-1 sheet[^.]+\. /gi, replacement: '' },
  
  // Remove redundant instructions
  { pattern: /Select only one box\. /gi, replacement: '' },
  { pattern: /Do not list a P\. O\. Box\. /gi, replacement: '' },
  { pattern: /\(do not use a post office or private mail box\)/gi, replacement: '' },
  { pattern: / as 2-digit Month, 2-digit Day,? and 4-digit Year/gi, replacement: '' },
  { pattern: /\(MM\/DD\/YYYY\)/gi, replacement: '' },
  
  // Simplify common phrases
  { pattern: /\bEnter (the |a |an |your )?/gi, replacement: '' },
  { pattern: /\bProvide (the |a |an |your )?/gi, replacement: '' },
  { pattern: /\bCheck (the |a |an )?/gi, replacement: '' },
  { pattern: /\bSelect (the |a |an )?/gi, replacement: '' },
  { pattern: /\bIndicate (the |a |an )?/gi, replacement: '' },
  
  // Simplify conditionals
  { pattern: /, if any\.?/gi, replacement: ' (optional)' },
  { pattern: /\(if applicable\)/gi, replacement: '(optional)' },
  { pattern: /if applicable,? /gi, replacement: '' },
  
  // Remove item numbers
  { pattern: /^\d+\.\s+/gm, replacement: '' },
  { pattern: /Item Number \d+\.?\s*/gi, replacement: '' },
  
  // Simplify "Select X from a List of X"
  { pattern: /([A-Za-z\s]+) from a List of \1s?/gi, replacement: '$1' },
  
  // Remove redundant words
  { pattern: /\bfull legal name\b/gi, replacement: 'name' },
  { pattern: /\bcomplete name\b/gi, replacement: 'name' },
  { pattern: /\bexact name\b/gi, replacement: 'name' },
  { pattern: /\bmailing address\b/gi, replacement: 'address' },
  { pattern: /\bphysical address\b/gi, replacement: 'address' },
  { pattern: /\bstreet address\b/gi, replacement: 'address' },
  
  // Remove extra spaces (but preserve newlines)
  { pattern: / {2,}/g, replacement: ' ' },
  
  // Clean up leading/trailing spaces and multiple periods
  { pattern: /\.{2,}/g, replacement: '.' },
  { pattern: /helpText:\s*"([^"]+)"/g, replacement: (match, text) => {
    return `helpText: "${text.trim()}"`;
  }},
];

let changeCount = 0;
let originalLength = i129Content.length;

// Apply all cleanup patterns
cleanupPatterns.forEach(({ pattern, replacement }) => {
  const before = i129Content;
  i129Content = i129Content.replace(pattern, replacement);
  if (before !== i129Content) {
    changeCount++;
  }
});

// Replace in the original content
const newContent = content.substring(0, i129Start) + i129Content + content.substring(i129End);

// Write back
fs.writeFileSync('src/lib/constants/forms-registry.ts', newContent, 'utf8');

const newLength = i129Content.length;
const reduction = ((originalLength - newLength) / originalLength * 100).toFixed(1);

console.log(`✅ Successfully shortened I-129 helpText`);
console.log(`📊 Applied ${changeCount} cleanup patterns`);
console.log(`📉 Reduced size by ${reduction}% (${originalLength} → ${newLength} chars)`);
console.log('✨ Help text is now more concise and user-friendly');
