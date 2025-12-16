#!/usr/bin/env node
/**
 * Test I-90 PDF Filling
 */

const { fillPDF } = require('../dist/lib/pdf/fill-pdf');
const fs = require('fs');
const path = require('path');

async function testI90Fill() {
  console.log('\n🧪 Testing I-90 PDF Fill...\n');

  // Sample answers matching the form definition
  const answers = {
    // Part 1 - Basic Info
    'part1.alienNumber': '123456789',
    'part1.uscisAccountNumber': 'ABC123456',
    'part1.familyName': 'Smith',
    'part1.givenName': 'John',
    'part1.middleName': 'Michael',
    
    // Part 1 - Name at Admission
    'part1.admissionFamilyName': 'Smith',
    'part1.admissionGivenName': 'John',
    'part1.admissionMiddleName': 'Michael',
    
    // Part 1 - Mailing Address
    'part1.mailingInCareOf': '',
    'part1.mailingStreetNumber': '123 Main Street',
    'part1.mailingUnitType': 'apt',
    'part1.mailingAptNumber': '4B',
    'part1.mailingCity': 'New York',
    'part1.mailingState': 'NY',
    'part1.mailingZipCode': '10001',
    'part1.mailingProvince': '',
    'part1.mailingPostalCode': '',
    'part1.mailingCountry': '',
    
    // Part 1 - Personal Info
    'part1.gender': 'male',
    'part1.dateOfBirth': '1990-05-15',
    'part1.cityOfBirth': 'London',
    'part1.countryOfBirth': 'United Kingdom',
    'part1.motherGivenName': 'Mary',
    'part1.fatherGivenName': 'Robert',
    'part1.classOfAdmission': 'IR1',
    'part1.dateOfAdmission': '2015-03-20',
    'part1.socialSecurityNumber': '123-45-6789',
    
    // Part 2 - Application Type
    'part2.applicationType': 'card_lost_stolen_destroyed',
    'part2.reasonReplacement': ['lost'],
    
    // Part 3 - Processing Info
    'part3.heightFeet': '5',
    'part3.heightInches': '10',
    'part3.ethnicity': 'not_hispanic',
    'part3.race': ['white'],
    'part3.hairColor': 'brown',
    'part3.eyeColor': 'blue',
    
    // Part 4 - Accommodations
    'part4.accommodationNeeded': 'no',
    
    // Part 5 - Contact Info
    'part5.readLanguage': true,
    'part5.daytimePhone': '212-555-1234',
    'part5.mobilePhone': '917-555-5678',
    'part5.emailAddress': 'john.smith@example.com',
  };

  try {
    const pdfBytes = await fillPDF('i-90', answers);
    
    // Save the filled PDF
    const outputPath = path.join(process.cwd(), 'output', 'i-90-filled-test.pdf');
    const outputDir = path.dirname(outputPath);
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, pdfBytes);
    
    console.log(`\n✅ PDF filled successfully!`);
    console.log(`📁 Saved to: ${outputPath}\n`);
    
  } catch (error) {
    console.error('\n❌ Error filling PDF:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

testI90Fill();
