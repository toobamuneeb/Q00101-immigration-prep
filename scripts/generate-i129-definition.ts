
import fs from 'fs';
import path from 'path';
import { I_129_FIELD_MAPPINGS } from '../src/lib/constants/form-mappings/i-129-field-mappings';

const OUTPUT_PATH = path.join(process.cwd(), 'src/lib/constants/form-definitions/i-129-definition.ts');

interface FormQuestion {
  id: string;
  type: string;
  label: string;
  required: boolean;
  options?: Array<{ label: string; value: string }>;
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
  description: string;
  category: string;
  estimatedTime: string;
  filingFee: number;
  price: number;
  sections: FormSection[];
  pdfFieldMappings: any[];
}

function generateLabel(id: string, value?: string, type?: string): string {
  // 1. Explicit Mappings for Gender (and similar confusing fields)
  if (id.includes('gender')) {
    if (value === 'M' || id.toLowerCase().includes('male')) return 'Male';
    if (value === 'F' || id.toLowerCase().includes('female')) return 'Female';
    return 'Gender'; // Fallback
  }

  // 2. If it's a checkbox with a meaningful value (not "Yes"/"1"), use that value
  if (type === 'checkbox' && value && value !== 'Yes' && value !== '1') {
    return value.trim();
  }

  // 3. Common overrides for confusing auto-generated labels
  if (id.includes('unit') || id.includes('apt')) {
    return 'Apt. / Ste. / Flr.';
  }
  
  // 4. Default: Convert "line1.name" to "Line 1 Name"
  let label = id
    .split('.')
    .map(part => part.replace(/([A-Z])/g, ' $1').trim()) // Add space before caps
    .map(part => part.charAt(0).toUpperCase() + part.slice(1)) // Capitalize first letter
    .join(' - ');

  // 5. Clean up common patterns
  label = label.replace(/_ \d+$/, ''); // Remove trailing counters like "_ 2"
  label = label.replace(/Part \d+ - /, ''); // Remove "Part X -" prefix if redundant
  
  return label;
}

function mapType(mappingType: string | undefined): string {
  switch (mappingType) {
    case 'checkbox': return 'checkbox';
    case 'radio': return 'radio';
    case 'choice': return 'select';
    default: return 'text';
  }
}

function main() {
  const sectionsMap = new Map<string, FormQuestion[]>();

  I_129_FIELD_MAPPINGS.forEach(mapping => {
    // Extract subform index from pdfField (e.g., form1[0].#subform[11]...)
    const subformMatch = mapping.pdfField.match(/#subform\[(\d+)\]/);
    const subformIndex = subformMatch ? parseInt(subformMatch[1]) : 9999;
    const sectionId = `section_${subformIndex}`;

    if (!sectionsMap.has(sectionId)) {
      sectionsMap.set(sectionId, []);
    }

    const question: FormQuestion = {
      id: mapping.questionId,
      type: mapType(mapping.type),
      label: generateLabel(mapping.questionId, mapping.value, mapping.type),
      required: false, // Default to false
    };

    if (mapping.options) {
      question.options = mapping.options.map(opt => ({ label: opt, value: opt }));
    }

    sectionsMap.get(sectionId)?.push(question);
  });

  // Sort sections by index
  const sortedSectionIds = Array.from(sectionsMap.keys()).sort((a, b) => {
    const numA = parseInt(a.split('_')[1]);
    const numB = parseInt(b.split('_')[1]);
    return numA - numB;
  });

  const sections: FormSection[] = sortedSectionIds.map(id => ({
    id,
    title: `Section ${id.split('_')[1]}`, // Placeholder title
    questions: sectionsMap.get(id) || [],
  }));

  const definition: FormDefinition = {
    id: 'i-129',
    code: 'I-129',
    name: 'Petition for a Nonimmigrant Worker',
    description: 'Petition for nonimmigrant worker classification (H-1B, L-1, O-1, etc.)',
    category: 'employment',
    estimatedTime: '45-60 minutes',
    filingFee: 460,
    price: 60,
    sections,
    pdfFieldMappings: [],
  };

  const fileContent = `/**
 * I-129 Form Definition
 * Generated automatically from field mappings
 * Date: ${new Date().toISOString()}
 */

import { FormDefinition } from "../forms-registry";
import { I_129_FIELD_MAPPINGS } from "../form-mappings/i-129-field-mappings";

export const I_129_DEFINITION: FormDefinition = ${JSON.stringify(definition, null, 2).replace('"pdfFieldMappings": []', '"pdfFieldMappings": I_129_FIELD_MAPPINGS')};
`;

  fs.writeFileSync(OUTPUT_PATH, fileContent);
  console.log(`Generated definition at ${OUTPUT_PATH} with ${sections.length} sections.`);
}

main();
