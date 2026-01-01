const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function listN400Fields() {
  const pdfPath = 'public/pdf-templates/n-400.pdf';
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
  const form = pdfDoc.getForm();
  const fields = form.getFields();
  
  console.log(`Total fields in N-400: ${fields.length}\n`);
  
  // Show first 20 fields
  console.log('First 20 fields:');
  fields.slice(0, 20).forEach((field, index) => {
    const name = field.getName();
    const type = field.constructor.name;
    console.log(`${index + 1}. ${name} (${type})`);
  });
  
  // Check if the fields from mappings exist
  console.log('\n\nChecking mapped fields:');
  const testFields = [
    'form1[0].#subform[0].Part1_Eligibility[0]',
    'form1[0].#subform[0].#area[0].Line1_AlienNumber[0]',
    'form1[0].#subform[0].P2_Line1_FamilyName[0]',
  ];
  
  testFields.forEach(fieldName => {
    try {
      const field = form.getField(fieldName);
      console.log(`✓ ${fieldName} EXISTS`);
    } catch (e) {
      console.log(`✗ ${fieldName} NOT FOUND`);
    }
  });
}

listN400Fields().catch(console.error);
