const fs = require('fs');
const path = require('path');

console.log('🔄 Converting I-129 definition to production format...\n');

// Load our generated definition
const defPath = path.join(__dirname, '../generated-forms/i-129/i-129-form-definition.json');
const definition = JSON.parse(fs.readFileSync(defPath, 'utf8'));

// Convert to production format
const productionSections = [];

definition.sections.forEach(section => {
  const prodSection = {
    id: section.sectionId,
    title: section.sectionTitle,
    description: `Complete ${section.sectionTitle.toLowerCase()}`,
    questions: []
  };
  
  section.questions.forEach(question => {
    const prodQuestion = {
      id: question.questionId,
      text: question.questionText,
      type: question.fields.length === 1 ? question.fields[0].type : 'group',
      required: question.required,
      fields: []
    };
    
    // Convert fields
    question.fields.forEach(field => {
      const prodField = {
        id: field.fieldId,
        label: field.fieldLabel,
        type: field.type,
        required: field.required,
        pdfField: field.pdfField
      };
      
      if (field.pattern) prodField.validation = { pattern: field.pattern };
      if (field.options) prodField.options = field.options;
      
      prodQuestion.fields.push(prodField);
    });
    
    prodSection.questions.push(prodQuestion);
  });
  
  productionSections.push(prodSection);
});

// Generate field mappings
const fieldMappings = [];

definition.sections.forEach(section => {
  section.questions.forEach(question => {
    question.fields.forEach(field => {
      if (field.pdfField) {
        fieldMappings.push({
          questionId: `${section.sectionId}.${question.questionId}.${field.fieldId}`,
          pdfField: field.pdfField,
          type: field.type
        });
        
        // Handle radio/checkbox options with individual PDF fields
        if (field.options && Array.isArray(field.options)) {
          field.options.forEach(opt => {
            if (typeof opt === 'object' && opt.pdfField) {
              fieldMappings.push({
                questionId: `${section.sectionId}.${question.questionId}.${field.fieldId}.${opt.value}`,
                pdfField: opt.pdfField,
                type: field.type,
                value: opt.value
              });
            }
          });
        }
      }
    });
  });
});

console.log(`✅ Converted ${productionSections.length} sections`);
console.log(`✅ Generated ${fieldMappings.length} field mappings\n`);

// Generate form definition file
const formDefContent = `/**
 * I-129 Form Definition
 * Generated: ${new Date().toISOString()}
 */

import { FormDefinition } from '../forms-registry';
import { I_129_FIELD_MAPPINGS } from '../form-mappings/i-129-field-mappings';
import { US_STATES } from '../constants';

const I_129_DEFINITION: FormDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for nonimmigrant worker classification",
  category: "employment",
  estimatedTime: "45-60 minutes",
  filingFee: 460,
  price: 60,
  sections: ${JSON.stringify(productionSections, null, 2)},
  pdfFieldMappings: I_129_FIELD_MAPPINGS,
  requiredDocuments: [
    "Copy of beneficiary's passport",
    "Copy of beneficiary's current visa (if in U.S.)",
    "Copy of beneficiary's I-94 (if in U.S.)",
    "Educational credentials",
    "Employment letter",
    "LCA (for H-1B)",
    "Company documentation"
  ],
  instructions: [
    "Complete all required fields accurately",
    "Ensure all dates are in MM/DD/YYYY format",
    "Provide supporting documentation",
    "Sign and date the petition",
    "Include filing fee payment"
  ],
};

export default I_129_DEFINITION;
`;

// Generate field mappings file
const fieldMappingsContent = `/**
 * I-129 Field Mappings
 * Generated: ${new Date().toISOString()}
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
}

export const I_129_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(fieldMappings, null, 2)};
`;

// Write files
const defOutputPath = path.join(__dirname, '../src/lib/constants/form-definitions/i-129-definition.ts');
const mappingsOutputPath = path.join(__dirname, '../src/lib/constants/form-mappings/i-129-field-mappings.ts');

fs.writeFileSync(defOutputPath, formDefContent);
fs.writeFileSync(mappingsOutputPath, fieldMappingsContent);

console.log('📁 FILES GENERATED:\n');
console.log(`✅ ${defOutputPath}`);
console.log(`✅ ${mappingsOutputPath}\n`);

console.log('✨ Conversion complete!\n');
console.log('📊 Summary:');
console.log(`   - Sections: ${productionSections.length}`);
console.log(`   - Questions: ${productionSections.reduce((sum, s) => sum + s.questions.length, 0)}`);
console.log(`   - Field Mappings: ${fieldMappings.length}`);
console.log('');
