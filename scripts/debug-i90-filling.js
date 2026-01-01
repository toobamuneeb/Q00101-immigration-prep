#!/usr/bin/env node
/**
 * Debug I-90 PDF Filling Issue
 * 
 * Yeh script check karega ke PDF fill kyun nahi ho raha
 */

const fs = require('fs');

console.log('🔍 I-90 PDF Filling Debug\n');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check 1: Mappings file
console.log('✅ Check 1: Mappings File');
try {
  const mappingsPath = 'src/lib/constants/form-mappings/i90-auto-mappings.ts';
  const mappingsContent = fs.readFileSync(mappingsPath, 'utf-8');
  
  if (mappingsContent.includes('I90_AUTO_MAPPINGS')) {
    console.log('   ✅ Mappings file exists');
    
    const mappingCount = (mappingsContent.match(/questionId:/g) || []).length;
    console.log(`   ✅ Found ${mappingCount} mappings`);
    
    // Show first 3 mappings
    const matches = [...mappingsContent.matchAll(/questionId: "([^"]+)", pdfField: "([^"]+)"/g)];
    console.log('   📋 First 3 mappings:');
    matches.slice(0, 3).forEach((match, i) => {
      console.log(`      ${i + 1}. "${match[1]}" → "${match[2]}"`);
    });
  } else {
    console.log('   ❌ I90_AUTO_MAPPINGS not found!');
  }
} catch (error) {
  console.log('   ❌ Mappings file not found!');
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check 2: Form Registry
console.log('✅ Check 2: Form Registry');
try {
  const registryPath = 'src/lib/constants/forms-registry.ts';
  const registryContent = fs.readFileSync(registryPath, 'utf-8');
  
  if (registryContent.includes('I90_DEFINITION')) {
    console.log('   ✅ I90_DEFINITION exists in registry');
    
    // Check if it's in FORM_REGISTRY
    if (registryContent.includes('"i-90": I90_DEFINITION')) {
      console.log('   ✅ I-90 added to FORM_REGISTRY');
    } else {
      console.log('   ❌ I-90 NOT in FORM_REGISTRY!');
    }
    
    // Extract first 3 field IDs from definition
    const fieldMatches = [...registryContent.matchAll(/id: "(part1\.[^"]+)"/g)];
    if (fieldMatches.length > 0) {
      console.log('   📋 First 3 field IDs in definition:');
      fieldMatches.slice(0, 3).forEach((match, i) => {
        console.log(`      ${i + 1}. "${match[1]}"`);
      });
    }
  } else {
    console.log('   ❌ I90_DEFINITION not found!');
  }
} catch (error) {
  console.log('   ❌ Registry file error:', error.message);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check 3: fill-pdf.ts
console.log('✅ Check 3: PDF Fill Integration');
try {
  const fillPdfPath = 'src/lib/pdf/fill-pdf.ts';
  const fillPdfContent = fs.readFileSync(fillPdfPath, 'utf-8');
  
  if (fillPdfContent.includes('I90_AUTO_MAPPINGS')) {
    console.log('   ✅ I90_AUTO_MAPPINGS imported');
  } else {
    console.log('   ❌ I90_AUTO_MAPPINGS NOT imported!');
  }
  
  if (fillPdfContent.includes('case "i-90"') || fillPdfContent.includes("case 'i-90'")) {
    console.log('   ✅ Case "i-90" exists in getFormMappings');
  } else {
    console.log('   ❌ Case "i-90" NOT found!');
  }
  
  if (fillPdfContent.includes('return I90_AUTO_MAPPINGS')) {
    console.log('   ✅ Returns I90_AUTO_MAPPINGS');
  } else {
    console.log('   ❌ Does NOT return I90_AUTO_MAPPINGS!');
  }
} catch (error) {
  console.log('   ❌ fill-pdf.ts error:', error.message);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check 4: PDF Template
console.log('✅ Check 4: PDF Template');
try {
  const pdfPath = 'public/pdf-templates/i-90-unlocked.pdf';
  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`   ✅ i-90-unlocked.pdf exists (${sizeMB} MB)`);
  } else {
    console.log('   ❌ i-90-unlocked.pdf NOT found!');
  }
} catch (error) {
  console.log('   ❌ PDF template error:', error.message);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Check 5: Field ID Matching
console.log('✅ Check 5: Field ID Matching');
try {
  const mappingsPath = 'src/lib/constants/form-mappings/i90-auto-mappings.ts';
  const registryPath = 'src/lib/constants/forms-registry.ts';
  
  const mappingsContent = fs.readFileSync(mappingsPath, 'utf-8');
  const registryContent = fs.readFileSync(registryPath, 'utf-8');
  
  // Get field IDs from mappings
  const mappingIds = [...mappingsContent.matchAll(/questionId: "([^"]+)"/g)].map(m => m[1]);
  
  // Get field IDs from registry
  const registryIds = [...registryContent.matchAll(/id: "(part1\.[^"]+)"/g)].map(m => m[1]);
  
  console.log(`   📊 Mappings have ${mappingIds.length} field IDs`);
  console.log(`   📊 Registry has ${registryIds.length} field IDs`);
  
  // Check if first 3 registry IDs exist in mappings
  const firstThree = registryIds.slice(0, 3);
  console.log('\n   🔍 Checking if registry fields exist in mappings:');
  firstThree.forEach(id => {
    if (mappingIds.includes(id)) {
      console.log(`      ✅ "${id}" - MATCH`);
    } else {
      console.log(`      ❌ "${id}" - NOT FOUND IN MAPPINGS!`);
    }
  });
  
} catch (error) {
  console.log('   ❌ Matching error:', error.message);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('💡 COMMON ISSUES:\n');
console.log('1. ❌ Data format galat hai');
console.log('   Fix: Data keys exactly match hone chahiye:');
console.log('   ✅ Correct: { "part1.familyName": "Smith" }');
console.log('   ❌ Wrong:   { "familyName": "Smith" }\n');

console.log('2. ❌ Form ID galat hai');
console.log('   Fix: fillPDF() ko "i-90" pass karo (lowercase with dash)\n');

console.log('3. ❌ Server restart nahi kiya');
console.log('   Fix: npm run dev restart karo\n');

console.log('4. ❌ Browser cache');
console.log('   Fix: Hard refresh karo (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)\n');

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('📝 SAMPLE DATA FORMAT:\n');
console.log(`const sampleData = {
  "part1.alienNumber": "123456789",
  "part1.familyName": "Smith",
  "part1.givenName": "John",
  "part1.middleName": "M",
  "part1.mailingCity": "New York",
  "part1.mailingState": "NY",
  "part1.mailingZipCode": "10001"
};

// Call fillPDF like this:
await fillPDF("i-90", sampleData);
`);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
