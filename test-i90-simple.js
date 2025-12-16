// Simple test to check I-90 mappings
const mappings = require('./src/lib/constants/form-mappings/i-90-mappings.ts');

console.log('I-90 Mappings loaded:', mappings.I_90_MAPPINGS ? 'YES' : 'NO');
console.log('Total mappings:', mappings.I_90_MAPPINGS?.length || 0);
console.log('\nFirst 5 mappings:');
mappings.I_90_MAPPINGS?.slice(0, 5).forEach(m => {
  console.log(`  ${m.questionId} -> ${m.pdfField}`);
});
