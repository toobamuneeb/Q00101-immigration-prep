

const fs = require('fs');
const path = require('path');

const REGISTRY_PATH = path.join(__dirname, '../src/lib/constants/forms-registry.ts');

// Forms where A-Number is required (green card holders)
const A_NUMBER_REQUIRED_FORMS = ['i-751', 'i-90', 'n-400'];

// Patterns that indicate a field should be required
const REQUIRED_PATTERNS = [
  // Name fields (but not spouse/dependent names - those are conditional)
  /^1\.a\.\s*family name/i,
  /^1\.b\.\s*given name/i,
  /^2\.a\.\s*family name/i,
  /^2\.b\.\s*given name/i,
  /your family name/i,
  /your given name/i,
  /your last name/i,
  /your first name/i,
  /applicant.*family name/i,
  /applicant.*given name/i,
  
  // Date of birth
  /^.*date of birth/i,
  /\bdob\b/i,
  
  // Address fields (primary address)
  /^.*street number and name/i,
  /^.*street address/i,
  /^.*city or town/i,
  /^.*city\/town/i,
  /^.*\bstate\b.*$/i,
  /^.*zip code/i,
  /^.*postal code/i,
  
  // Country fields
  /country of birth/i,
  /country of citizenship/i,
  /country of nationality/i,
  
  // Contact information
  /daytime phone/i,
  /mobile.*number/i,
  /telephone.*number/i,
  /email address/i,
  
  // Marital status (the question itself, not spouse details)
  /^.*marital status.*$/i,
  
  // Gender/Sex
  /^.*\bgender\b.*$/i,
  /^.*\bsex\b.*$/i,
  
  // Physical characteristics
  /^.*height.*feet/i,
  /^.*height.*inches/i,
  /^.*weight/i,
  /^.*eye color/i,
  /^.*hair color/i,
  /^.*\brace\b.*$/i,
  /^.*ethnicity/i,
  
  // Immigration fields
  /class of admission/i,
  /date of entry/i,
  /date.*last.*arrived/i,
  /port of entry/i,
  /i-94 number/i,
  /date.*status.*expires/i,
  /current.*immigration.*status/i,
  
  // SSN (typically required)
  /social security number/i,
  /\bssn\b/i,
  
  // Conditional residence expiration (I-751)
  /conditional residence expires/i,
  
  // Green card number (for forms where you must have one)
  /green card number/i,
  /permanent resident card/i,
];

// Patterns that should NOT be required
const OPTIONAL_PATTERNS = [
  /middle name/i,
  /middle initial/i,
  /receipt number/i,
  /case number/i,
  /uscis online account/i,
  /apt\./i,
  /ste\./i,
  /flr\./i,
  /apartment/i,
  /suite/i,
  /\bunit\b/i,
  /in care of/i,
  /other names/i,
  /other.*used/i,
  /previous.*name/i,
  /maiden name/i,
  /alias/i,
  
  // Spouse/dependent fields (these are conditional)
  /spouse/i,
  /husband/i,
  /wife/i,
  /child/i,
  /children/i,
  /dependent/i,
  /parent/i,
  /mother/i,
  /father/i,
  /beneficiary/i,
  /petitioner/i,
  /relative/i,
  /interpreter/i,
  /preparer/i,
  /attorney/i,
  
  // Optional immigration fields
  /passport.*number/i,
  /travel.*document/i,
  /visa.*number/i,
  
  // A-Number is handled separately by form type
  /a-number.*if any/i,
  /alien registration.*if any/i,
];

function getCurrentFormId(lines, currentIndex) {
  // Look backwards to find the form definition
  for (let i = currentIndex; i >= 0; i--) {
    const match = lines[i].match(/id:\s*["']([^"']+)["']/);
    if (match && match[1]) {
      const formId = match[1];
      if (formId.startsWith('i-') || formId.startsWith('n-')) {
        return formId;
      }
    }
  }
  return null;
}

function shouldBeRequired(label, hasConditional, formId) {
  // Never add required to conditional fields
  if (hasConditional) {
    return false;
  }
  
  // Special handling for A-Number based on form type
  if (/a-number|alien registration number/i.test(label)) {
    if (formId && A_NUMBER_REQUIRED_FORMS.includes(formId)) {
      console.log(`  → A-Number is required for ${formId.toUpperCase()}`);
      return true;
    }
    // For other forms, A-Number is optional
    return false;
  }
  
  // Check if it matches optional patterns first
  for (const pattern of OPTIONAL_PATTERNS) {
    if (pattern.test(label)) {
      return false;
    }
  }
  
  // Check if it matches required patterns
  for (const pattern of REQUIRED_PATTERNS) {
    if (pattern.test(label)) {
      return true;
    }
  }
  
  return false;
}

function addRequiredFields() {
  console.log('📋 Reading forms-registry.ts...\n');
  let content = fs.readFileSync(REGISTRY_PATH, 'utf8');
  
  let modifiedCount = 0;
  let skippedConditional = 0;
  let skippedExisting = 0;
  let lines = content.split('\n');
  let result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    result.push(line);
    
    // Look for label lines
    const labelMatch = line.match(/label:\s*["'](.+?)["']/);
    if (labelMatch) {
      const label = labelMatch[1];
      const formId = getCurrentFormId(lines, i);
      
      // Look ahead to check for 'required' or 'conditional'
      let hasRequired = false;
      let hasConditional = false;
      let j = i + 1;
      
      // Check next lines until we find the closing brace
      while (j < lines.length && j < i + 20) {
        if (lines[j].includes('required:')) {
          hasRequired = true;
        }
        if (lines[j].includes('conditional:')) {
          hasConditional = true;
        }
        if (lines[j].trim() === '},') {
          break;
        }
        j++;
      }
      
      // Skip if already has required
      if (hasRequired) {
        skippedExisting++;
        continue;
      }
      
      // Skip if has conditional
      if (hasConditional) {
        skippedConditional++;
        continue;
      }
      
      // Check if this field should be required
      if (shouldBeRequired(label, hasConditional, formId)) {
        // Find the indentation of the current line
        const indent = line.match(/^(\s*)/)[1];
        result.push(`${indent}required: true,`);
        modifiedCount++;
        console.log(`✓ Added required to: ${label}`);
      }
    }
  }
  
  // Write back to file
  const newContent = result.join('\n');
  
  // Create backup first
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5) + 'Z';
  const backupPath = REGISTRY_PATH + '.backup-' + timestamp;
  fs.writeFileSync(backupPath, content);
  console.log(`\n📦 Backup created: ${path.basename(backupPath)}`);
  
  // Write modified content
  fs.writeFileSync(REGISTRY_PATH, newContent);
  
  console.log(`\n✅ Done!`);
  console.log(`   Added 'required: true' to ${modifiedCount} fields`);
  console.log(`   Skipped ${skippedConditional} conditional fields`);
  console.log(`   Skipped ${skippedExisting} fields that already have 'required'`);
  console.log(`\n⚠️  Please review the changes and test your forms.`);
  console.log(`   If something goes wrong, restore from: ${path.basename(backupPath)}`);
}

// Run the script
try {
  addRequiredFields();
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
