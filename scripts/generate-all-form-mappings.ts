/**
 * Universal Form Mapping Generator
 * 
 * This script generates complete field mappings for ALL forms by:
 * 1. Reading the form definition from forms-registry.ts
 * 2. Reading the auto-mappings (PDF field names)
 * 3. Creating intelligent mappings based on field types and names
 * 4. Ensuring NO fields are left out
 */

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

interface FormQuestion {
  id: string;
  type: string;
  label: string;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
}

interface FormSection {
  id: string;
  title: string;
  questions: FormQuestion[];
}

interface FormDefinition {
  id: string;
  code: string;
  name: string;
  sections: FormSection[];
}

interface AutoMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string;
}

/**
 * Load auto-mappings for a form
 */
function loadAutoMappings(formId: string): AutoMapping[] {
  const mappingPath = join(
    process.cwd(),
    'src/lib/constants/form-mappings',
    `${formId}-auto-mappings.ts`
  );

  if (!existsSync(mappingPath)) {
    console.warn(`⚠️  No auto-mappings found for ${formId}`);
    return [];
  }

  const content = readFileSync(mappingPath, 'utf-8');
  
  // Extract the mappings array using regex
  const match = content.match(/export const \w+_AUTO_MAPPINGS[^=]*=\s*(\[[\s\S]*?\]);/);
  if (!match) {
    console.warn(`⚠️  Could not parse auto-mappings for ${formId}`);
    return [];
  }

  try {
    // Clean up the array string and parse it
    const arrayStr = match[1]
      .replace(/\/\/.*/g, '') // Remove comments
      .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
    
    const mappings = eval(`(${arrayStr})`);
    return mappings;
  } catch (error) {
    console.error(`❌ Error parsing auto-mappings for ${formId}:`, error);
    return [];
  }
}

/**
 * Extract form definition from forms-registry.ts
 */
function extractFormDefinition(formId: string): FormDefinition | null {
  const registryPath = join(process.cwd(), 'src/lib/constants/forms-registry.ts');
  const content = readFileSync(registryPath, 'utf-8');

  // Find the form definition
  const formVarName = `${formId.toUpperCase().replace(/-/g, '_')}_DEFINITION`;
  const regex = new RegExp(`const ${formVarName}[^=]*=\\s*\\{([\\s\\S]*?)\\n\\};`, 'm');
  const match = content.match(regex);

  if (!match) {
    console.warn(`⚠️  Could not find form definition for ${formId}`);
    return null;
  }

  try {
    // Extract sections using a more robust approach
    const sectionsMatch = match[0].match(/sections:\s*\[([\s\S]*?)\n\s*\],\s*pdfFieldMappings/);
    if (!sectionsMatch) {
      console.warn(`⚠️  Could not extract sections for ${formId}`);
      return null;
    }

    // Parse sections to extract questions
    const sections: FormSection[] = [];
    const sectionRegex = /\{\s*id:\s*["']([^"']+)["'][^}]*questions:\s*\[([\s\S]*?)\n\s*\]/g;
    let sectionMatch;

    while ((sectionMatch = sectionRegex.exec(sectionsMatch[1])) !== null) {
      const sectionId = sectionMatch[1];
      const questionsStr = sectionMatch[2];

      // Extract questions
      const questions: FormQuestion[] = [];
      const questionRegex = /\{\s*id:\s*["']([^"']+)["'][^}]*type:\s*["']([^"']+)["'][^}]*label:\s*["']([^"']*?)["']/g;
      let questionMatch;

      while ((questionMatch = questionRegex.exec(questionsStr)) !== null) {
        const questionId = questionMatch[1];
        const type = questionMatch[2];
        const label = questionMatch[3];

        // Extract options if present
        const optionsRegex = new RegExp(
          `id:\\s*["']${questionId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][\\s\\S]*?options:\\s*\\[([\\s\\S]*?)\\]`,
          'm'
        );
        const optionsMatch = questionsStr.match(optionsRegex);
        let options: Array<{ value: string; label: string }> | undefined;

        if (optionsMatch) {
          const optionsStr = optionsMatch[1];
          const optionRegex = /\{\s*value:\s*["']([^"']+)["'],\s*label:\s*["']([^"']+)["']\s*\}/g;
          options = [];
          let optionMatch;
          while ((optionMatch = optionRegex.exec(optionsStr)) !== null) {
            options.push({ value: optionMatch[1], label: optionMatch[2] });
          }
        }

        questions.push({ id: questionId, type, label, options });
      }

      sections.push({ id: sectionId, title: '', questions });
    }

    return {
      id: formId,
      code: formId.toUpperCase(),
      name: '',
      sections,
    };
  } catch (error) {
    console.error(`❌ Error parsing form definition for ${formId}:`, error);
    return null;
  }
}

/**
 * Find best matching PDF field for a question
 */
function findBestMatch(
  questionId: string,
  autoMappings: AutoMapping[]
): AutoMapping[] {
  // Direct match
  const directMatches = autoMappings.filter(m => m.questionId === questionId);
  if (directMatches.length > 0) return directMatches;

  // Try to match by parts of the question ID
  const parts = questionId.split('.');
  const lastPart = parts[parts.length - 1].toLowerCase();

  // Look for fields that contain the last part of the question ID
  const partialMatches = autoMappings.filter(m => {
    const pdfFieldLower = m.pdfField.toLowerCase();
    return pdfFieldLower.includes(lastPart);
  });

  if (partialMatches.length > 0) return partialMatches;

  // Try matching with the second-to-last part
  if (parts.length > 1) {
    const secondLastPart = parts[parts.length - 2].toLowerCase();
    const combinedMatches = autoMappings.filter(m => {
      const pdfFieldLower = m.pdfField.toLowerCase();
      return pdfFieldLower.includes(secondLastPart) && pdfFieldLower.includes(lastPart);
    });
    if (combinedMatches.length > 0) return combinedMatches;
  }

  return [];
}

/**
 * Generate field mappings for a form
 */
function generateFormMappings(formId: string): FieldMapping[] {
  console.log(`\n📋 Processing ${formId.toUpperCase()}...`);

  // Load auto-mappings
  const autoMappings = loadAutoMappings(formId);
  if (autoMappings.length === 0) {
    console.log(`   ⚠️  No auto-mappings available`);
    return [];
  }
  console.log(`   📄 Loaded ${autoMappings.length} auto-mappings`);

  // Load form definition
  const formDef = extractFormDefinition(formId);
  if (!formDef) {
    console.log(`   ⚠️  No form definition found`);
    return [];
  }

  const allQuestions = formDef.sections.flatMap(s => s.questions);
  console.log(`   📝 Found ${allQuestions.length} questions in form definition`);

  const mappings: FieldMapping[] = [];
  const unmappedQuestions: string[] = [];

  // Process each question
  for (const question of allQuestions) {
    const matches = findBestMatch(question.id, autoMappings);

    if (matches.length === 0) {
      unmappedQuestions.push(question.id);
      continue;
    }

    // Handle different question types
    if (question.type === 'radio' || question.type === 'select') {
      if (question.options && question.options.length > 0) {
        // Create a mapping for each option
        for (const option of question.options) {
          // Find the specific PDF field for this option
          const optionMatch = matches.find(m => {
            const pdfLower = m.pdfField.toLowerCase();
            const valueLower = option.value.toLowerCase();
            return (
              pdfLower.includes(valueLower) ||
              pdfLower.includes(option.label.toLowerCase()) ||
              (valueLower === 'yes' && pdfLower.includes('_yes')) ||
              (valueLower === 'no' && pdfLower.includes('_no')) ||
              (valueLower === 'male' && pdfLower.includes('_male')) ||
              (valueLower === 'female' && pdfLower.includes('_female'))
            );
          });

          if (optionMatch) {
            mappings.push({
              questionId: question.id,
              pdfField: optionMatch.pdfField,
              type: question.type === 'radio' ? 'radio' : 'checkbox',
              value: option.value,
            });
          }
        }
      } else {
        // No options, just map to first match
        mappings.push({
          questionId: question.id,
          pdfField: matches[0].pdfField,
          type: 'text',
        });
      }
    } else if (question.type === 'checkbox') {
      if (question.options && question.options.length > 0) {
        for (const option of question.options) {
          const optionMatch = matches.find(m =>
            m.pdfField.toLowerCase().includes(option.value.toLowerCase())
          );
          if (optionMatch) {
            mappings.push({
              questionId: question.id,
              pdfField: optionMatch.pdfField,
              type: 'checkbox',
              value: option.value,
            });
          }
        }
      } else {
        mappings.push({
          questionId: question.id,
          pdfField: matches[0].pdfField,
          type: 'checkbox',
        });
      }
    } else {
      // Text, date, ssn, etc.
      let fieldType: 'text' | 'date' | 'ssn' = 'text';
      
      if (question.type === 'date' || question.id.toLowerCase().includes('date')) {
        fieldType = 'date';
      } else if (question.type === 'ssn' || question.id.toLowerCase().includes('ssn')) {
        fieldType = 'ssn';
      }

      mappings.push({
        questionId: question.id,
        pdfField: matches[0].pdfField,
        type: fieldType,
      });
    }
  }

  console.log(`   ✅ Generated ${mappings.length} mappings`);
  if (unmappedQuestions.length > 0) {
    console.log(`   ⚠️  ${unmappedQuestions.length} questions could not be mapped:`);
    unmappedQuestions.slice(0, 5).forEach(q => console.log(`      - ${q}`));
    if (unmappedQuestions.length > 5) {
      console.log(`      ... and ${unmappedQuestions.length - 5} more`);
    }
  }

  return mappings;
}

/**
 * Save mappings to file
 */
function saveMappings(formId: string, mappings: FieldMapping[]) {
  const timestamp = new Date().toISOString();
  const formIdUpper = formId.toUpperCase().replace(/-/g, '_');

  const content = `/**
 * ${formId.toUpperCase()} Field Mappings
 * Generated on: ${timestamp}
 * 
 * Maps form definition question IDs to PDF field names
 * Total mappings: ${mappings.length}
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: 'text' | 'radio' | 'checkbox' | 'date' | 'ssn';
  value?: string; // For radio/checkbox options - the value that triggers this field
}

export const ${formIdUpper}_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(mappings, null, 2)};
`;

  const outputPath = join(
    process.cwd(),
    'src/lib/constants/form-mappings',
    `${formId}-field-mappings.ts`
  );

  writeFileSync(outputPath, content, 'utf-8');
  console.log(`   💾 Saved to: ${formId}-field-mappings.ts`);
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Universal Form Mapping Generator\n');
  console.log('=' .repeat(60));

  // List of all forms to process
  const forms = [
    'i-130',
    'i-90',
    'i-485',
    'i-765',
    'i-131',
    'i-864',
    'n-400',
    'i-751',
    'i-129',
    'i-140',
    'i-539',
    'i-9',
    'i-526',
    'i-821d',
    'i-212',
    'i-290b',
    'i-601',
    'i-601a',
    'i-129f',
    'i-360',
    'i-600',
    'i-589',
  ];

  const results: Record<string, number> = {};

  for (const formId of forms) {
    try {
      const mappings = generateFormMappings(formId);
      if (mappings.length > 0) {
        saveMappings(formId, mappings);
        results[formId] = mappings.length;
      }
    } catch (error) {
      console.error(`   ❌ Error processing ${formId}:`, error);
      results[formId] = 0;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n📊 Summary:\n');
  
  const successful = Object.entries(results).filter(([_, count]) => count > 0);
  const failed = Object.entries(results).filter(([_, count]) => count === 0);

  console.log(`✅ Successfully generated mappings for ${successful.length} forms:`);
  successful.forEach(([form, count]) => {
    console.log(`   ${form.toUpperCase()}: ${count} mappings`);
  });

  if (failed.length > 0) {
    console.log(`\n⚠️  Failed to generate mappings for ${failed.length} forms:`);
    failed.forEach(([form]) => {
      console.log(`   ${form.toUpperCase()}`);
    });
  }

  console.log('\n✅ Done!');
}

// Run the generator
main().catch(console.error);
