/**
 * Test N-400 PDF Fill
 * Verify that the new N-400 mappings work correctly
 */

const fs = require('fs');
const path = require('path');

// Sample test data for N-400
const testData = {
  'part1.eligibility': 'A',
  'part1.alienNumber': 'A123456789',
  'part2.familyName': 'Smith',
  'part2.givenName': 'John',
  'part2.middleName': 'Michael',
  'part3.dateOfBirth': '1990-01-15',
  'part3.countryOfBirth': 'Mexico',
  'part3.countryOfCitizenship': 'Mexico',
  'part4.mailingStreet': '123 Main Street',
  'part4.mailingCity': 'Los Angeles',
  'part4.mailingState': 'CA',
  'part4.mailingZip': '90001',
};

console.log('N-400 Test Data:');
console.log(JSON.stringify(testData, null, 2));
console.log('\nTo test:');
console.log('1. Go to http://localhost:3000/dashboard/forms/n-400');
console.log('2. Fill out the form with the above data');
console.log('3. Generate PDF and check for errors');
console.log('\nExpected: All 232 fields should fill without "PDFDocument has no form field" errors');
