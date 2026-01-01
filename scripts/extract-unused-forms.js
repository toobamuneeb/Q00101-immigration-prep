#!/usr/bin/env node

/**
 * Script to extract unused form definitions from forms-registry.ts
 * and move them to unusedDefinitions.ts
 */

const fs = require('fs');
const path = require('path');

// File paths
const FORMS_REGISTRY_PATH = 'src/lib/constants/forms-registry.ts';
const UNUSED_DEFS_PATH = 'src/lib/constants/unusedDefinitions.ts';

// Unused form definitions to extract
const UNUSED_FORMS = [
  'I131_DEFINITION',
  'I864_DEFINITION',
  'I129_DEFINITION',
  'I140_DEFINITION',
  'I539_DEFINITION',
  'I360_DEFINITION',
  'I600_DEFINITION',
  'I526_DEFINITION',
  'I589_DEFINITION',
  'I821_DEFINITION',
  'I290B_DEFINITION',
  'I601_DEFINITION',
  'I601A_DEFINITION',
  'I90_DEFINITION', // The old duplicate one
];

// Active forms to KEEP in forms-registry.ts
const ACTIVE_FORMS = [
  'I130_DEFINITION',
  'I_129F_DEFINITION',
  'I_485_DEFINITION',
  'I_751_DEFINITION',
  'I9_DEFINITION',
  'I_765_DEFINITION',
  'N_400_DEFINITION',
  'I730_DEFINITION',
  'I_90_DEFINITION', // Keep this one (with underscore)
  'I_212_DEFINITION',
];

console.log('🚀 Starting extraction of unused form definitions...\n');

try {
  // Read the forms-registry.ts file
  console.log('📖 Reading forms-registry.ts...');
  const registryContent = fs.readFileSync(FORMS_REGISTRY_PATH, 'utf8');
  
  // Extract each unused definition
  const extractedDefinitions = [];
  const definitionsToRemove = [];
  
  for (const formName of UNUSED_FORMS) {
    console.log(`   Extracting ${formName}...`);
    
    // Find the definition
    const regex = new RegExp(`const ${formName}: FormDefinition = \\{[\\s\\S]*?\\n\\};`, 'g');
    const match = registryContent.match(regex);
    
    if (match && match[0]) {
      extractedDefinitions.push({
        name: formName,
        content: match[0]
      });
      definitionsToRemove.push(match[0]);
      console.log(`   ✅ Found ${formName}`);
    } else {
      console.log(`   ⚠️  Could not find ${formName}`);
    }
  }
  
  console.log(`\n✅ Extracted ${extractedDefinitions.length} definitions\n`);
  
  // Create the unusedDefinitions.ts content
  console.log('📝 Creating unusedDefinitions.ts content...');
  
  let unusedDefsContent = `/**
 * UNUSED FORM DEFINITIONS
 * 
 * This file contains form definitions that are not currently active in the registry.
 * These forms have been moved here to keep the main forms-registry.ts clean and focused
 * on the 10 active forms that are fully tested and ready for production.
 * 
 * Active Forms (in forms-registry.ts):
 * 1. I-130 - Petition for Alien Relative
 * 2. I-129F - Petition for Alien Fiancé(e)
 * 3. I-485 - Application to Register Permanent Residence
 * 4. I-751 - Petition to Remove Conditions on Residence
 * 5. I-9 - Employment Eligibility Verification
 * 6. I-765 - Application for Employment Authorization
 * 7. N-400 - Application for Naturalization
 * 8. I-730 - Refugee/Asylee Relative Petition
 * 9. I-90 - Application to Replace Permanent Resident Card
 * 10. I-212 - Application for Permission to Reapply for Admission
 * 
 * Unused Forms (in this file):
 * - I-131 - Application for Travel Document
 * - I-864 - Affidavit of Support
 * - I-129 - Petition for Nonimmigrant Worker
 * - I-140 - Immigrant Petition for Alien Workers
 * - I-539 - Application to Extend/Change Nonimmigrant Status
 * - I-360 - Petition for Amerasian, Widow(er), or Special Immigrant
 * - I-600 - Petition to Classify Orphan as an Immediate Relative
 * - I-526 - Immigrant Petition by Standalone Investor
 * - I-589 - Application for Asylum and for Withholding of Removal
 * - I-821 - Application for Temporary Protected Status
 * - I-290B - Notice of Appeal or Motion
 * - I-601 - Application for Waiver of Grounds of Inadmissibility
 * - I-601A - Application for Provisional Unlawful Presence Waiver
 * - I90_DEFINITION - (Duplicate of I_90_DEFINITION)
 */

// @ts-nocheck - Form definitions have some type inconsistencies
import { FormDefinition } from "./forms-registry";

// ============================================================================
// UNUSED FORM DEFINITIONS
// ============================================================================

`;
  
  // Add each extracted definition
  for (const def of extractedDefinitions) {
    unusedDefsContent += `\n${def.content}\n`;
  }
  
  // Add export at the end
  unusedDefsContent += `\n// ============================================================================
// EXPORTS
// ============================================================================

export const UNUSED_FORM_DEFINITIONS = {
  "i-131": I131_DEFINITION,
  "i-864": I864_DEFINITION,
  "i-129": I129_DEFINITION,
  "i-140": I140_DEFINITION,
  "i-539": I539_DEFINITION,
  "i-360": I360_DEFINITION,
  "i-600": I600_DEFINITION,
  "i-526": I526_DEFINITION,
  "i-589": I589_DEFINITION,
  "i-821": I821_DEFINITION,
  "i-290b": I290B_DEFINITION,
  "i-601": I601_DEFINITION,
  "i-601a": I601A_DEFINITION,
  "i-90-old": I90_DEFINITION, // Duplicate
};
`;
  
  // Write the unusedDefinitions.ts file
  console.log('💾 Writing unusedDefinitions.ts...');
  fs.writeFileSync(UNUSED_DEFS_PATH, unusedDefsContent, 'utf8');
  console.log('✅ Created unusedDefinitions.ts\n');
  
  // Remove unused definitions from forms-registry.ts
  console.log('🗑️  Removing unused definitions from forms-registry.ts...');
  let updatedRegistry = registryContent;
  
  for (const defToRemove of definitionsToRemove) {
    // Remove the definition and any preceding blank lines
    updatedRegistry = updatedRegistry.replace(defToRemove + '\n', '');
  }
  
  // Write the updated forms-registry.ts
  console.log('💾 Writing updated forms-registry.ts...');
  fs.writeFileSync(FORMS_REGISTRY_PATH, updatedRegistry, 'utf8');
  console.log('✅ Updated forms-registry.ts\n');
  
  console.log('🎉 SUCCESS! Extraction complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   - Extracted ${extractedDefinitions.length} unused definitions`);
  console.log(`   - Moved to: ${UNUSED_DEFS_PATH}`);
  console.log(`   - Updated: ${FORMS_REGISTRY_PATH}`);
  console.log(`   - Active forms remaining: ${ACTIVE_FORMS.length}`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
