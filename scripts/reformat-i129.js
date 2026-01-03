const fs = require('fs');

// Read the entire file
const content = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Split into lines
const lines = content.split('\n');

// Find the I_129_DEFINITION line number
let startLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('const I_129_DEFINITION: FormDefinition = {')) {
    startLine = i;
    break;
  }
}

if (startLine === -1) {
  console.error('I_129_DEFINITION not found');
  process.exit(1);
}

console.log(`Found at line ${startLine + 1}`);

// The definition is all on one line ending with };
const oneLine = lines[startLine];

// Simple approach: add newlines after certain patterns
let formatted = oneLine
  // Add newline after opening braces
  .replace(/\{ /g, '{\n  ')
  // Add newline after commas (but not inside strings)
  .replace(/,(?=\s*["{[])/g, ',\n  ')
  // Add newline before closing braces
  .replace(/\s*\}/g, '\n}')
  // Fix indentation
  .split('\n')
  .map((line, idx) => {
    if (idx === 0) return line;
    const depth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    return '  '.repeat(Math.max(0, depth)) + line.trim();
  })
  .join('\n');

// Replace the line
lines[startLine] = formatted;

// Write back
fs.writeFileSync('src/lib/constants/forms-registry.ts', lines.join('\n'), 'utf8');

console.log('Formatted successfully!');
