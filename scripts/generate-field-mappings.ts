import { PDFDocument, PDFName, PDFDict, PDFArray } from 'pdf-lib';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Script to generate FieldMapping[] for a given PDF.
 * Usage: npx tsx scripts/generate-field-mappings.ts <path-to-pdf> <form-name> [output-path]
 * 
 * Example: npx tsx scripts/generate-field-mappings.ts public/pdf-templates/i-129.pdf I_129
 */

interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
  options?: string[];
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: npx tsx scripts/generate-field-mappings.ts <path-to-pdf> <form-name> [output-path]');
    process.exit(1);
  }

  const pdfPath = args[0];
  const formName = args[1];
  const outputPath = args[2];

  if (!fs.existsSync(pdfPath)) {
    console.error(`File not found: ${pdfPath}`);
    process.exit(1);
  }

  try {
    const pdfBytes = fs.readFileSync(pdfPath);
    // Load with ignoreEncryption: true to handle encrypted/secured PDFs
    const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
    const form = pdfDoc.getForm();
    const fields = form.getFields();

    const mappings: FieldMapping[] = [];
    const usedIds = new Map<string, number>();

    console.log(`Found ${fields.length} fields in ${pdfPath}`);

    for (const field of fields) {
      const pdfField = field.getName();
      const type = field.constructor.name;
      
      // Attempt to generate a clean questionId from the PDF field name
      // Remove XFA prefixes and array indices for cleaner IDs
      let questionId = pdfField
        .replace(/form\d+\[\d+\]\.#subform\[\d+\]\./, '') // Remove XFA prefixes
        .replace(/#pageSet\[\d+\]\./, '') // Remove pageSet prefixes
        .replace(/Page\d+\[\d+\]\./, '') // Remove Page prefixes
        .replace(/#area\[\d+\]\./, '') // Remove area prefixes
        .replace(/\[\d+\]/g, '') // Remove array indices
        .replace(/_/g, '.') // Replace underscores with dots
        .replace(/\.+/g, '.') // Remove duplicate dots
        .replace(/^[.]+/, '') // Remove leading dots
        .replace(/[.]+$/, ''); // Remove trailing dots

      // Convert to camelCase parts
      questionId = questionId.split('.').map((part, index) => {
        // Keep first part lowercase
        return part.charAt(0).toLowerCase() + part.slice(1);
      }).join('.');

      // Handle duplicate IDs
      if (usedIds.has(questionId)) {
        const count = usedIds.get(questionId)! + 1;
        usedIds.set(questionId, count);
        questionId = `${questionId}_${count}`;
      } else {
        usedIds.set(questionId, 1);
      }

      const mapping: FieldMapping = {
        questionId,
        pdfField,
      };

      if (type === 'PDFCheckBox') {
        mapping.type = 'checkbox';
        // Try to find the export value
        const widgets = field.acroField.getWidgets();
        // Checkboxes often have an export value for "On" state
        // We can inspect the OnValue of the widget
        // If multiple widgets (rare for single checkbox), take first
        if (widgets.length > 0) {
             const onValue = widgets[0].getOnValue();
             if (onValue) {
                 mapping.value = onValue.decodeText();
             }
        }
        if (!mapping.value) mapping.value = 'Yes'; // Default if no specific export value found
      } else if (type === 'PDFRadioGroup') {
        mapping.type = 'radio';
        const options = (field as any).getOptions();
        if (options && options.length > 0) {
           mapping.options = options;
           // For radio groups, typically we want to know WHICH option this mapping selects.
           // But a single PDFRadioGroup field represents the *whole* group in AcroForms.
           // The value would be the selected option.
           // In our mapping schema, if we map a single question to a radio group, 
           // we usually don't specify 'value' in the mapping unless we are mapping a specific 
           // boolean answer to a specific radio button (which is weird for radio groups).
           // Usually, we map the question answer directly to the radio group value.
        }
      } else if (type === 'PDFTextField') {
        mapping.type = 'text';
      } else if (type === 'PDFDropdown') {
          mapping.type = 'choice';
          const options = (field as any).getOptions();
          if (options) mapping.options = options;
      }

      mappings.push(mapping);
    }

    // Sort mappings by questionId for better readability
    mappings.sort((a, b) => a.questionId.localeCompare(b.questionId));

    // Generate output content
    const outputContent = `/**
 * ${formName.toUpperCase()} Field Mappings
 * Generated with script: ${new Date().toISOString()}
 */

export interface FieldMapping {
  questionId: string;
  pdfField: string;
  type?: string;
  value?: string;
  options?: string[];
}

export const ${formName.toUpperCase()}_FIELD_MAPPINGS: FieldMapping[] = ${JSON.stringify(mappings, null, 2)};
`;

    if (outputPath) {
        fs.writeFileSync(outputPath, outputContent);
        console.log(`Mappings written to ${outputPath}`);
    } else {
        console.log(outputContent);
    }

  } catch (error) {
    console.error('Error generating mappings:', error);
    process.exit(1);
  }
}

main().catch(console.error);
