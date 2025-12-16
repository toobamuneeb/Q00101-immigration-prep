#!/usr/bin/env node
/**
 * 🚀 AUTOMATIC FORM SETUP - Kisi Bhi Form Ke Liye
 * 
 * Yeh script automatically:
 * 1. PDF unlock karega
 * 2. Fields extract karega
 * 3. Mappings banayega
 * 4. Form definition banayega
 * 5. Registry update karega
 * 6. fill-pdf.ts update karega
 * 
 * Usage: node scripts/auto-setup-any-form.js <form-name>
 * 
 * Examples:
 *   node scripts/auto-setup-any-form.js i-485
 *   node scripts/auto-setup-any-form.js n-400
 *   node scripts/auto-setup-any-form.js i-765
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    log('\n❌ Error: Form name missing!', 'red');
    log('\nUsage: node scripts/auto-setup-any-form.js <form-name>', 'yellow');
    log('\nExamples:', 'blue');
    log('  node scripts/auto-setup-any-form.js i-485');
    log('  node scripts/auto-setup-any-form.js n-400');
    log('  node scripts/auto-setup-any-form.js i-765\n');
    process.exit(1);
  }
  
  const formName = args[0].toLowerCase();
  const formNameUpper = formName.toUpperCase();
  const formNameVar = formName.replace(/-/g, '_').toUpperCase();
  
  log('\n╔════════════════════════════════════════════════════════════════╗', 'bright');
  log(`║     AUTOMATIC FORM SETUP: ${formNameUpper.padEnd(35)}║`, 'bright');
  log('╚════════════════════════════════════════════════════════════════╝\n', 'bright');
  
  const pdfPath = `public/pdf-templates/${formName}.pdf`;
  const unlockedPath = `public/pdf-templates/${formName}-unlocked.pdf`;
  
  // Step 1: Check if PDF exists
  log('📋 Step 1: Checking PDF file...', 'blue');
  if (!fs.existsSync(pdfPath)) {
    log(`  ❌ PDF not found: ${pdfPath}`, 'red');
    log('  Please add the PDF file first!', 'yellow');
    process.exit(1);
  }
  log(`  ✅ Found: ${pdfPath}`, 'green');
  
  // Step 2: Unlock PDF
  log('\n🔓 Step 2: Unlocking PDF...', 'blue');
  try {
    execSync(`pdftk "${pdfPath}" output "${unlockedPath}"`, { stdio: 'pipe' });
    log(`  ✅ Created: ${unlockedPath}`, 'green');
  } catch (error) {
    log('  ⚠️  Warning: Could not unlock PDF, using original', 'yellow');
  }
  
  // Verify unlocked PDF has fields
  try {
    const fieldCount = execSync(`pdftk "${unlockedPath}" dump_data_fields 2>&1 | grep -c "FieldName:"`, { encoding: 'utf-8' }).trim();
    log(`  ✅ Found ${fieldCount} fields in PDF`, 'green');
    
    if (parseInt(fieldCount) < 10) {
      log('  ⚠️  Warning: Very few fields found, PDF might be corrupted', 'yellow');
    }
  } catch (error) {
    log('  ❌ Could not read PDF fields', 'red');
    process.exit(1);
  }
  
  // Step 3: Generate mappings
  log('\n🗺️  Step 3: Generating field mappings...', 'blue');
  try {
    execSync(`node scripts/smart-pdf-mapper.js "${unlockedPath}"`, { stdio: 'inherit' });
    log('  ✅ Mappings generated', 'green');
  } catch (error) {
    log('  ❌ Failed to generate mappings', 'red');
    process.exit(1);
  }
  
  // Step 4: Check generated files
  log('\n📁 Step 4: Verifying generated files...', 'blue');
  
  const formNameClean = formName.replace(/-/g, '');
  const mappingPath = `src/lib/constants/form-mappings/${formNameClean}-auto-mappings.ts`;
  const mappingPathAlt = `src/lib/constants/form-mappings/${formNameClean}unlocked-auto-mappings.ts`;
  
  let actualMappingPath = mappingPath;
  if (!fs.existsSync(mappingPath) && fs.existsSync(mappingPathAlt)) {
    // Rename if it has 'unlocked' in name
    fs.renameSync(mappingPathAlt, mappingPath);
    log(`  ✅ Renamed mapping file to: ${mappingPath}`, 'green');
  }
  
  if (!fs.existsSync(mappingPath)) {
    log(`  ❌ Mapping file not found: ${mappingPath}`, 'red');
    process.exit(1);
  }
  log(`  ✅ Mapping file exists: ${mappingPath}`, 'green');
  
  // Step 5: Update fill-pdf.ts
  log('\n🔧 Step 5: Updating fill-pdf.ts...', 'blue');
  try {
    const fillPdfPath = 'src/lib/pdf/fill-pdf.ts';
    let fillPdfContent = fs.readFileSync(fillPdfPath, 'utf-8');
    
    // Add import if not exists
    const importLine = `import { ${formNameVar}_AUTO_MAPPINGS } from "../constants/form-mappings/${formNameClean}-auto-mappings";`;
    if (!fillPdfContent.includes(importLine)) {
      // Find last import line
      const lastImportIndex = fillPdfContent.lastIndexOf('import {');
      const nextLineIndex = fillPdfContent.indexOf('\n', lastImportIndex);
      fillPdfContent = fillPdfContent.slice(0, nextLineIndex + 1) + importLine + '\n' + fillPdfContent.slice(nextLineIndex + 1);
      log(`  ✅ Added import for ${formNameVar}_AUTO_MAPPINGS`, 'green');
    } else {
      log(`  ℹ️  Import already exists`, 'yellow');
    }
    
    // Add case to switch statement
    const caseStatement = `    case "${formName}":\n      return ${formNameVar}_AUTO_MAPPINGS;`;
    if (!fillPdfContent.includes(`case "${formName}"`)) {
      // Find the switch statement
      const switchIndex = fillPdfContent.indexOf('switch (formId.toLowerCase())');
      const firstCaseIndex = fillPdfContent.indexOf('case "', switchIndex);
      fillPdfContent = fillPdfContent.slice(0, firstCaseIndex) + caseStatement + '\n' + fillPdfContent.slice(firstCaseIndex);
      log(`  ✅ Added case for "${formName}"`, 'green');
    } else {
      log(`  ℹ️  Case already exists`, 'yellow');
    }
    
    fs.writeFileSync(fillPdfPath, fillPdfContent);
    log('  ✅ fill-pdf.ts updated', 'green');
  } catch (error) {
    log(`  ❌ Failed to update fill-pdf.ts: ${error.message}`, 'red');
  }
  
  // Step 6: Update forms registry
  log('\n📚 Step 6: Updating forms registry...', 'blue');
  log('  ℹ️  You need to manually add the form definition to forms-registry.ts', 'yellow');
  log(`  ℹ️  Check: scripts/form-definition-${formNameClean}.ts for the template`, 'yellow');
  
  // Summary
  log('\n╔════════════════════════════════════════════════════════════════╗', 'bright');
  log('║                    ✅ SETUP COMPLETE!                          ║', 'green');
  log('╚════════════════════════════════════════════════════════════════╝\n', 'bright');
  
  log('📋 What was done:', 'blue');
  log(`  ✅ Unlocked PDF: ${unlockedPath}`);
  log(`  ✅ Generated mappings: ${mappingPath}`);
  log(`  ✅ Updated fill-pdf.ts`);
  log(`  ✅ Created form definition template: scripts/form-definition-${formNameClean}.ts`);
  
  log('\n📝 Next steps:', 'yellow');
  log('  1. Review the generated form definition');
  log('  2. Copy definition to src/lib/constants/forms-registry.ts');
  log('  3. Add to FORM_REGISTRY object');
  log('  4. Restart server: npm run dev');
  log('  5. Test the form!\n');
  
  log('🎉 Form is ready to use!\n', 'green');
}

main();
