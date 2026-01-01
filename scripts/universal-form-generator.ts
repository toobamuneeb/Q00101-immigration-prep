/**
 * UNIVERSAL FORM GENERATOR
 * 
 * This script generates COMPLETE mappings for ALL forms by:
 * 1. Reading auto-mappings (PDF field names) for each form
 * 2. Creating comprehensive field mappings
 * 3. Works for ALL forms, not just one specific form
 * 
 * Usage: npx tsx scripts/universal-form-generator.ts
 */

import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

/**
 * Get all form IDs that have auto-mappings
 */
function getAllFormIds(): string[] {
  const mappingsDir = join(process.cwd(), 'src/lib/constants/form-mappings');
  const files = readdirSync(mappingsDir);
  
  const formIds = files
    .filter(f => f.endsWith('-auto-mappings.ts'))
    .map(f => f.replace('-auto-mappings.ts', ''))
    .filter(f => f !== 'i90unlocked'); // Skip duplicates
  
  return formIds;
}

/**
 * Load auto-mappings for a form
 */
function loadAutoMappings(formId: string): any[] {
  try {
    const mappingPath = join(
      process.cwd(),
      'src/lib/constants/form-mappings',
      `${formId}-auto-mappings.ts`
    );

    const content = readFileSync(mappingPath, 'utf-8');
    
    // Extract the export constant name
    const exportMatch = content.match(/export const (\w+_AUTO_MAPPINGS)/);
    if (!exportMatch) return [];
    
    // Extract the array
    const arrayMatch = content.match(/export const \w+_AUTO_MAPPINGS[^=]*=\s*(\[[\s\S]*?\]);/);
    if (!arrayMatch) return [];

    // Parse the array
    const arrayStr = arrayMatch[1]
      .replace(/\/\/.*/g, '') // Remove comments
      .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
    
    const mappings = eval(`(${arrayStr})`);
    return mappings;
  } catch (error) {
    console.error(`   ❌ Error loading auto-mappings for ${formId}:`, error instanceof Error ? error.message : String(error));
    return [];
  }
}

/**
 * Generate smart mappings from auto-mappings
 * This creates intelligent question IDs based on PDF field names
 */
function generateSmartMappings(formId: string, autoMappings: any[]): FieldMapping[] {
  const mappings: FieldMapping[] = [];
  
  for (const auto of autoMappings) {
    const pdfField = auto.pdfField || auto.pdfFieldName;
    if (!pdfField) continue;
    
    // Extract meaningful parts from PDF field name
    // Example: "form1[0].#subform[0].Pt2Line4a_FamilyName[0]" -> "part2.line4a.familyName"
    const fieldMatch = pdfField.match(/Pt(\d+)Line(\d+[a-z]?)_(\w+)/i);
    
    let questionId: string;
    let type: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn' = 'text';
    let value: string | undefined;
    
    if (fieldMatch) {
      const part = fieldMatch[1];
      const line = fieldMatch[2];
      const fieldName = fieldMatch[3];
      
      // Convert field name to camelCase
      const camelFieldName = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
      
      // Create question ID
      questionId = `part${part}.line${line}.${camelFieldName}`;
      
      // Determine field type based on field name
      const fieldLower = fieldName.toLowerCase();
      
      if (fieldLower.includes('date') || fieldLower.includes('dob')) {
        type = 'date';
      } else if (fieldLower.includes('ssn')) {
        type = 'ssn';
      } else if (fieldLower.includes('yes') || fieldLower.includes('no') || 
                 fieldLower.includes('male') || fieldLower.includes('female')) {
        type = 'radio';
        // Extract the value from field name
        if (fieldLower.includes('yes')) value = 'yes';
        else if (fieldLower.includes('no')) value = 'no';
        else if (fieldLower.includes('male')) value = 'male';
        else if (fieldLower.includes('female')) value = 'female';
      } else if (pdfField.includes('_checkbox') || pdfField.includes('Checkbox')) {
        type = 'checkbox';
      }
    } else {
      // Fallback: use the original questionId if available
      questionId = auto.questionId || `field_${mappings.length}`;
    }
    
    mappings.push({
      questionId,
      pdfField,
      type,
      value,
    });
  }
  
  return mappings;
}

/**
 * Save mappings to file
 */
function saveMappings(formId: string, mappings: FieldMapping[]): void {
  const timestamp = new Date().toISOString();
  const formIdUpper = formId.toUpperCase().replace(/-/g, '_');

  const content = `/**
 * ${formId.toUpperCase()} Field Mappings
 * Generated on: ${timestamp}
 * 
 * Complete field mappings for ${formId.toUpperCase()} form
 * Total mappings: ${mappings.length}
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

export const ${formIdUpper}_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(mappings, null, 2)};
`;

  const outputPath = join(
    process.cwd(),
    'src/lib/constants/form-mappings',
    `${formId}-field-mappings.ts`
  );

  writeFileSync(outputPath, content, 'utf-8');
}

/**
 * Update fill-pdf.ts to use new mappings
 */
function updateFillPdf(formIds: string[]): void {
  const fillPdfPath = join(process.cwd(), 'src/lib/pdf/fill-pdf.ts');
  let content = readFileSync(fillPdfPath, 'utf-8');
  
  // Add imports for all field mappings
  const imports: string[] = [];
  const cases: string[] = [];
  
  for (const formId of formIds) {
    const formIdUpper = formId.toUpperCase().replace(/-/g, '_');
    const importName = `${formIdUpper}_FIELD_MAPPINGS`;
    
    imports.push(`import { ${importName} } from "@/lib/constants/form-mappings/${formId}-field-mappings";`);
    cases.push(`    case "${formId}":\n      return ${importName};`);
  }
  
  console.log(`\n📝 To use these mappings, add these imports to fill-pdf.ts:`);
  console.log(imports.join('\n'));
  console.log(`\nAnd update the switch statement with these cases:`);
  console.log(cases.join('\n'));
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 UNIVERSAL FORM GENERATOR');
  console.log('=' .repeat(70));
  
  // Check if a specific form ID was provided
  const targetFormId = process.argv[2];
  
  // Get all form IDs
  let formIds = getAllFormIds();
  
  if (targetFormId) {
    // Filter to only the specified form
    if (formIds.includes(targetFormId)) {
      formIds = [targetFormId];
      console.log(`Generating mappings for: ${targetFormId.toUpperCase()}\n`);
    } else {
      console.error(`❌ Form "${targetFormId}" not found!`);
      console.log(`\nAvailable forms:`);
      formIds.forEach(id => console.log(`   - ${id}`));
      process.exit(1);
    }
  } else {
    console.log('Generating complete mappings for ALL forms...\n');
    console.log(`📋 Found ${formIds.length} forms with auto-mappings:\n`);
    formIds.forEach(id => console.log(`   - ${id.toUpperCase()}`));
    console.log();
  }

  const results: Record<string, { success: boolean; count: number; error?: string }> = {};

  // Process each form
  for (const formId of formIds) {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`📄 Processing ${formId.toUpperCase()}...`);
    console.log('='.repeat(70));
    
    try {
      // Load auto-mappings
      const autoMappings = loadAutoMappings(formId);
      
      if (autoMappings.length === 0) {
        console.log(`   ⚠️  No auto-mappings found`);
        results[formId] = { success: false, count: 0, error: 'No auto-mappings' };
        continue;
      }
      
      console.log(`   📥 Loaded ${autoMappings.length} auto-mappings`);
      
      // Generate smart mappings
      const mappings = generateSmartMappings(formId, autoMappings);
      console.log(`   ✨ Generated ${mappings.length} field mappings`);
      
      // Count by type
      const byType = mappings.reduce((acc, m) => {
        const type = m.type || 'text';
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      console.log(`   📊 Breakdown:`);
      Object.entries(byType).forEach(([type, count]) => {
        console.log(`      ${type}: ${count}`);
      });
      
      // Save mappings
      saveMappings(formId, mappings);
      console.log(`   💾 Saved to: ${formId}-field-mappings.ts`);
      
      results[formId] = { success: true, count: mappings.length };
      
    } catch (error) {
      console.error(`   ❌ Error: ${error instanceof Error ? error.message : String(error)}`);
      results[formId] = { success: false, count: 0, error: error instanceof Error ? error.message : String(error) };
    }
  }

  // Print summary
  console.log(`\n${'='.repeat(70)}`);
  console.log('📊 SUMMARY');
  console.log('='.repeat(70));
  
  const successful = Object.entries(results).filter(([_, r]) => r.success);
  const failed = Object.entries(results).filter(([_, r]) => !r.success);
  
  console.log(`\n✅ Successfully generated mappings for ${successful.length} forms:\n`);
  successful.forEach(([form, result]) => {
    console.log(`   ${form.toUpperCase().padEnd(15)} ${result.count} mappings`);
  });
  
  if (failed.length > 0) {
    console.log(`\n⚠️  Failed for ${failed.length} forms:\n`);
    failed.forEach(([form, result]) => {
      console.log(`   ${form.toUpperCase().padEnd(15)} ${result.error}`);
    });
  }
  
  const totalMappings = successful.reduce((sum, [_, r]) => sum + r.count, 0);
  console.log(`\n📈 Total mappings generated: ${totalMappings}`);
  
  // Show next steps
  console.log(`\n${'='.repeat(70)}`);
  console.log('📝 NEXT STEPS');
  console.log('='.repeat(70));
  console.log(`
1. Update src/lib/pdf/fill-pdf.ts to import and use the new mappings
2. Update form definitions in src/lib/constants/forms-registry.ts
3. Test PDF generation for each form

The mappings are saved in:
   src/lib/constants/form-mappings/[form-id]-field-mappings.ts
`);

  updateFillPdf(successful.map(([id]) => id));
  
  console.log('\n✅ Done!\n');
}

// Run the generator
main().catch(console.error);
