const fs = require('fs');

// Read the file
const content = fs.readFileSync('src/lib/constants/forms-registry.ts', 'utf8');

// Find the I_129_DEFINITION line
const lines = content.split('\n');
let i129LineIndex = -1;
let i129Line = '';

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('const I_129_DEFINITION: FormDefinition = {')) {
    i129LineIndex = i;
    i129Line = lines[i];
    break;
  }
}

if (i129LineIndex === -1) {
  console.error('I_129_DEFINITION not found');
  process.exit(1);
}

console.log(`Found I_129_DEFINITION at line ${i129LineIndex + 1}`);
console.log(`Line length: ${i129Line.length} characters`);

// Parse the JSON-like structure and format it
try {
  // Extract the object part (everything after the = sign)
  const match = i129Line.match(/const I_129_DEFINITION: FormDefinition = (.+);$/);
  if (!match) {
    console.error('Could not extract definition');
    process.exit(1);
  }
  
  const objStr = match[1];
  
  // Parse it as JSON (with some fixes for JavaScript object notation)
  const obj = eval('(' + objStr + ')');
  
  // Format it nicely
  const formatted = `const I_129_DEFINITION: FormDefinition = ${JSON.stringify(obj, null, 2)};`;
  
  // Replace the line in the content
  const newLines = [...lines];
  newLines[i129LineIndex] = formatted;
  
  // Write back
  fs.writeFileSync('src/lib/constants/forms-registry.ts', newLines.join('\n'), 'utf8');
  
  console.log('Successfully formatted I_129_DEFINITION');
} catch (error) {
  console.error('Error formatting:', error.message);
  process.exit(1);
}
