#!/usr/bin/env node
/**
 * Test I-90 PDF Filling
 * 
 * This script tests if the I-90 PDF fields are being filled correctly
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🧪 Testing I-90 PDF Field Filling...\n');

// First, let's check what fields are in the PDF
console.log('📋 Step 1: Extracting PDF fields from i-90.pdf...');
try {
  const output = execSync('pdftk public/pdf-templates/i-90.pdf dump_data_fields', { 
    encoding: 'utf-8',
    maxBuffer: 10 * 1024 * 1024
  });
  
  const lines = output.split('\n');
  const fields = [];
  let currentField = {};
  
  for (const line of lines) {
    if (line.startsWith('FieldName:')) {
      if (currentField.name) fields.push(currentField);
      currentField = { name: line.substring(11).trim() };
    } else if (line.startsWith('FieldType:')) {
      currentField.type = line.substring(11).trim();
    }
  }
  
  if (currentField.name) fields.push(currentField);
  
  console.log(`✅ Found ${fields.length} fields in PDF\n`);
  
  // Show first 10 fields
  console.log('📋 First 10 PDF fields:');
  fields.slice(0, 10).forEach((field, i) => {
    console.log(`  ${i + 1}. ${field.name} (${field.type})`);
  });
  
  console.log('\n📋 Step 2: Checking mappings...');
  const mappingsContent = fs.readFileSync('src/lib/constants/form-mappings/i90-auto-mappings.ts', 'utf-8');
  
  // Extract first few mappings
  const mappingMatches = mappingsContent.match(/questionId: "([^"]+)", pdfField: "([^"]+)"/g);
  if (mappingMatches) {
    console.log(`✅ Found ${mappingMatches.length} mappings\n`);
    console.log('📋 First 5 mappings:');
    mappingMatches.slice(0, 5).forEach((match, i) => {
      const [, questionId, pdfField] = match.match(/questionId: "([^"]+)", pdfField: "([^"]+)"/);
      console.log(`  ${i + 1}. ${questionId} → ${pdfField}`);
    });
  }
  
  console.log('\n📋 Step 3: Verifying field names match...');
  
  // Check if the first mapping's PDF field exists in the actual PDF
  const firstMapping = mappingsContent.match(/pdfField: "([^"]+)"/);
  if (firstMapping) {
    const pdfFieldName = firstMapping[1];
    const fieldExists = fields.some(f => f.name === pdfFieldName);
    
    if (fieldExists) {
      console.log(`✅ First mapping field "${pdfFieldName}" exists in PDF`);
    } else {
      console.log(`❌ First mapping field "${pdfFieldName}" NOT found in PDF`);
      console.log('\n🔍 Searching for similar field names...');
      const similar = fields.filter(f => 
        f.name.toLowerCase().includes('alien') || 
        f.name.toLowerCase().includes('number')
      );
      if (similar.length > 0) {
        console.log('   Similar fields found:');
        similar.forEach(f => console.log(`     - ${f.name}`));
      }
    }
  }
  
  console.log('\n📋 Step 4: Sample test data...');
  console.log('To test PDF filling, use this sample data:');
  console.log(`
{
  "part1.alienNumber": "123456789",
  "part1.uscisAccountNumber": "ABC123456",
  "part1.familyName": "Smith",
  "part1.givenName": "John",
  "part1.middleName": "Michael",
  "part1.reasonCard": "lost",
  "part1.mailingCity": "New York",
  "part1.mailingState": "NY",
  "part1.mailingZipCode": "10001"
}
  `);
  
  console.log('\n✅ Test complete!');
  console.log('\n💡 Next steps:');
  console.log('1. Make sure you are passing the correct data structure to fillPDF()');
  console.log('2. Check that the form data keys match the questionId in mappings');
  console.log('3. Verify the PDF template is the unlocked version');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n💡 Make sure pdftk is installed: brew install pdftk-java');
}
