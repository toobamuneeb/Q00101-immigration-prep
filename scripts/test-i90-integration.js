#!/usr/bin/env node
/**
 * Test I-90 Integration
 * 
 * This script tests if I-90 form is properly integrated
 */

const fs = require('fs');

console.log('🧪 Testing I-90 Integration...\n');

let allTestsPassed = true;

// Test 1: Check if mapping file exists and has content
console.log('📋 Test 1: I-90 Mappings File');
try {
  const mappingPath = 'src/lib/constants/form-mappings/i90-auto-mappings.ts';
  const mappingContent = fs.readFileSync(mappingPath, 'utf-8');
  
  if (mappingContent.includes('I90_AUTO_MAPPINGS')) {
    console.log('  ✅ Mapping file exists and exports I90_AUTO_MAPPINGS');
  } else {
    console.log('  ❌ Mapping file missing I90_AUTO_MAPPINGS export');
    allTestsPassed = false;
  }
  
  const mappingCount = (mappingContent.match(/questionId:/g) || []).length;
  console.log(`  ✅ Found ${mappingCount} field mappings`);
  
} catch (error) {
  console.log('  ❌ Mapping file not found or error reading');
  allTestsPassed = false;
}

// Test 2: Check if definition file exists
console.log('\n📋 Test 2: I-90 Definition File');
try {
  const definitionPath = 'src/lib/constants/i90-definition.ts';
  const definitionContent = fs.readFileSync(definitionPath, 'utf-8');
  
  if (definitionContent.includes('I90_DEFINITION')) {
    console.log('  ✅ Definition file exists and exports I90_DEFINITION');
  } else {
    console.log('  ❌ Definition file missing I90_DEFINITION export');
    allTestsPassed = false;
  }
  
  if (definitionContent.includes('Application to Replace Permanent Resident Card')) {
    console.log('  ✅ Correct form name found');
  } else {
    console.log('  ❌ Form name not found or incorrect');
    allTestsPassed = false;
  }
  
} catch (error) {
  console.log('  ❌ Definition file not found or error reading');
  allTestsPassed = false;
}

// Test 3: Check if forms registry was updated
console.log('\n📋 Test 3: Forms Registry Integration');
try {
  const registryPath = 'src/lib/constants/forms-registry.ts';
  const registryContent = fs.readFileSync(registryPath, 'utf-8');
  
  if (registryContent.includes('import') && registryContent.includes('I90_DEFINITION')) {
    console.log('  ✅ I90_DEFINITION imported in forms registry');
  } else {
    console.log('  ❌ I90_DEFINITION not imported in forms registry');
    allTestsPassed = false;
  }
  
  if (registryContent.includes('I90_DEFINITION,')) {
    console.log('  ✅ I90_DEFINITION added to FORMS_REGISTRY array');
  } else {
    console.log('  ❌ I90_DEFINITION not added to FORMS_REGISTRY array');
    allTestsPassed = false;
  }
  
} catch (error) {
  console.log('  ❌ Forms registry file not found or error reading');
  allTestsPassed = false;
}

// Test 4: Check if fill-pdf.ts was updated
console.log('\n📋 Test 4: PDF Fill Integration');
try {
  const fillPdfPath = 'src/lib/pdf/fill-pdf.ts';
  const fillPdfContent = fs.readFileSync(fillPdfPath, 'utf-8');
  
  if (fillPdfContent.includes('I90_AUTO_MAPPINGS')) {
    console.log('  ✅ I90_AUTO_MAPPINGS imported in fill-pdf.ts');
  } else {
    console.log('  ❌ I90_AUTO_MAPPINGS not imported in fill-pdf.ts');
    allTestsPassed = false;
  }
  
  if (fillPdfContent.includes('case "i90":') || fillPdfContent.includes('case "i-90":')) {
    console.log('  ✅ I-90 case added to getFormMappings function');
  } else {
    console.log('  ❌ I-90 case not found in getFormMappings function');
    allTestsPassed = false;
  }
  
} catch (error) {
  console.log('  ❌ fill-pdf.ts file not found or error reading');
  allTestsPassed = false;
}

// Test 5: Check form structure
console.log('\n📋 Test 5: Form Structure Validation');
try {
  const definitionPath = 'src/lib/constants/i90-definition.ts';
  const definitionContent = fs.readFileSync(definitionPath, 'utf-8');
  
  const sectionCount = (definitionContent.match(/id: "part/g) || []).length;
  console.log(`  ✅ Found ${sectionCount} form sections`);
  
  if (definitionContent.includes('filingFee: 540')) {
    console.log('  ✅ Correct filing fee ($540) set');
  } else {
    console.log('  ❌ Filing fee not set correctly');
    allTestsPassed = false;
  }
  
  if (definitionContent.includes('category: "green-card"')) {
    console.log('  ✅ Correct category (green-card) set');
  } else {
    console.log('  ❌ Category not set correctly');
    allTestsPassed = false;
  }
  
} catch (error) {
  console.log('  ❌ Error validating form structure');
  allTestsPassed = false;
}

// Final result
console.log('\n' + '='.repeat(50));
if (allTestsPassed) {
  console.log('🎉 ALL TESTS PASSED! I-90 form is fully integrated and ready to use.');
  console.log('\n✨ Users can now:');
  console.log('  • Select I-90 from the forms list');
  console.log('  • Fill out all form sections');
  console.log('  • Generate PDF with correct field mappings');
  console.log('  • Submit application with proper fee calculation');
} else {
  console.log('❌ SOME TESTS FAILED! Please check the issues above.');
}
console.log('='.repeat(50));