#!/usr/bin/env node
/**
 * Test Label Generation
 * 
 * Tests the improved label generation to ensure we get good labels
 */

// Test cases: PDF field name → Expected label
const testCases = [
  // Good cases - should generate proper labels
  { input: 'form1[0].#subform[0].P1_Line3a_FamilyName[0]', expected: 'Family Name (Last Name)' },
  { input: 'form1[0].#subform[0].P1_Line3b_GivenName[0]', expected: 'Given Name (First Name)' },
  { input: 'form1[0].#subform[0].P1_Line3c_MiddleName[0]', expected: 'Middle Name' },
  { input: 'form1[0].#subform[0].#area[1].P1_Line1_AlienNumber[0]', expected: 'A-Number (Alien Registration Number)' },
  { input: 'form1[0].#subform[0].P1_Line2_AcctIdentifier[0]', expected: 'USCIS Online Account Number' },
  { input: 'form1[0].#subform[0].P1_Line6b_StreetNumberName[0]', expected: 'Street Number and Name' },
  { input: 'form1[0].#subform[0].P1_Line6c_AptSteFlrNumber[0]', expected: 'Apartment/Suite/Floor Number' },
  { input: 'form1[0].#subform[0].P1_Line6d_CityOrTown[0]', expected: 'City or Town' },
  { input: 'form1[0].#subform[0].P1_Line6f_ZipCode[0]', expected: 'ZIP Code' },
  { input: 'form1[0].#subform[1].P1_Line16_SSN[0]', expected: 'U.S. Social Security Number (SSN)' },
  { input: 'form1[0].#subform[3].P5_Line3_DaytimePhoneNumber[0]', expected: 'Daytime Phone Number' },
  { input: 'form1[0].#subform[3].P5_Line5_EmailAddress[0]', expected: 'Email Address' },
  
  // Bad cases - should return null (filtered out)
  { input: 'form1[0].#subform[0].P1_checkbox6c_Unit[0]', expected: null },
  { input: 'form1[0].#subform[0].P1_checkbox4[0]', expected: null },
  { input: 'form1[0].#subform[2].P3_checkbox10[0]', expected: null },
];

// Copy the generateLabel function from universal-form-generator.js
function generateLabel(pdfFieldName) {
  let clean = pdfFieldName
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/#area\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/, '');
  
  const patterns = [
    /^P\d+_Line\w+_(.+)$/,
    /^P\d+_(.+)$/,
    /^Line\w+_(.+)$/,
    /^(.+)_\d+$/,
  ];
  
  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match) {
      clean = match[1];
      break;
    }
  }
  
  if (clean.match(/^(checkbox|Checkbox)\w*$/i)) {
    return null;
  }
  
  let label = clean
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  label = label.split(' ').map(word => {
    if (word.match(/^[A-Z]+$/)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  
  const improvements = {
    'Apt Ste Flr Number': 'Apartment/Suite/Floor Number',
    'Street Number Name': 'Street Number and Name',
    'City Or Town': 'City or Town',
    'Zip Code': 'ZIP Code',
    'Postal Code': 'Postal Code',
    'In Careof Name': 'In Care Of Name',
    'Given Name': 'Given Name (First Name)',
    'Family Name': 'Family Name (Last Name)',
    'Middle Name': 'Middle Name',
    'Alien Number': 'A-Number (Alien Registration Number)',
    'Acct Identifier': 'USCIS Online Account Number',
    'Date Of Birth': 'Date of Birth',
    'Country Of Birth': 'Country of Birth',
    'City Town Of Birth': 'City or Town of Birth',
    'Ssn': 'U.S. Social Security Number (SSN)',
    'Phone Number': 'Phone Number',
    'Daytime Phone Number': 'Daytime Phone Number',
    'Mobile Phone Number': 'Mobile Phone Number',
    'Email Address': 'Email Address',
    'Date Of Signature': 'Date of Signature',
    'Signature Of Applicant': 'Applicant\'s Signature',
  };
  
  return improvements[label] || label;
}

// Run tests
console.log('🧪 Testing Label Generation\n');

let passed = 0;
let failed = 0;

testCases.forEach(({ input, expected }, index) => {
  const result = generateLabel(input);
  const success = result === expected;
  
  if (success) {
    passed++;
    console.log(`✅ Test ${index + 1}: PASS`);
  } else {
    failed++;
    console.log(`❌ Test ${index + 1}: FAIL`);
    console.log(`   Input:    ${input}`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${result}`);
  }
});

console.log(`\n📊 Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All tests passed!');
  process.exit(0);
} else {
  console.log('❌ Some tests failed');
  process.exit(1);
}
