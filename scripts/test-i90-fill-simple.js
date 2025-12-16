#!/usr/bin/env node
/**
 * Simple I-90 Fill Test
 */

const testData = {
  "part1.alienNumber": "A12345678",
  "part1.familyName": "Smith",
  "part1.givenName": "John",
  "part1.middleName": "Robert",
};

console.log('🧪 Testing I-90 PDF Fill\n');
console.log('Test Data:', testData);
console.log('\nExpected: These fields should fill in the PDF');
console.log('- A-Number: A12345678');
console.log('- Family Name: Smith');
console.log('- Given Name: John');
console.log('- Middle Name: Robert\n');

console.log('✅ If you see "Filled: 4 fields" in the PDF generation, it works!');
console.log('❌ If you see "Filled: 0 fields", there is a mismatch.\n');
