#!/bin/bash

# Script to generate complete I-129 mapping and definition
# Usage: bash scripts/generate-i129-mapping.sh

echo "🚀 Generating I-129 Complete Mapping and Definition..."
echo ""

# Create output directory
mkdir -p generated-forms/i-129

# Generate mapping summary
echo "📋 Step 1: Generating field mapping summary..."
cat > generated-forms/i-129/MAPPING.md << 'EOF'
# I-129 Complete Field Mapping

## Overview
- **Form**: I-129 - Petition for a Nonimmigrant Worker
- **Total Fields**: 200+
- **Sections**: 9 main parts + 8 supplements
- **Filing Fee**: $460

## Field Mapping Structure

Each field mapping follows this format:
```typescript
{
  questionId: string,    // Unique identifier for the question
  pdfField: string,      // PDF form field name
  type: string,          // Field type (text, radio, date, etc.)
}
```

## Main Sections

### Part 1: Petitioner Information (22 fields)
- Petitioner type (Individual/Company)
- Name and contact information
- Mailing address
- Tax identification numbers

### Part 2: Petition Information (5 fields)
- Requested classification
- Basis for classification
- Requested action
- Number of workers

### Part 3: Beneficiary Information (28 fields)
- Personal information
- Passport details
- Current immigration status
- US and foreign addresses

### Part 4: Processing Information (23 fields)
- Processing location
- Previous petitions
- Immigration history
- Dependent information

### Part 5: Employment Information (28 fields)
- Job title and duties
- Work location(s)
- Wages and compensation
- Employment dates
- Company information

### Part 6: Export Control (1 field)
- Export control certification

### Part 7: Petitioner Declaration (7 fields)
- Signatory information
- Signature and date

### Part 8: Preparer Information (17 fields)
- Preparer details
- Business information
- Signature

### Part 9: Additional Information (17 fields)
- Additional explanations
- Continuation sheets

## Classification Supplements

### E-1/E-2 Treaty Trader/Investor (30+ fields)
### Trade Agreement (TN, H-1B1) (11 fields)
### H Classification (H-1B, H-2A, H-2B, H-3) (15+ fields)
### H-1B Data Collection (5 fields)
### L Classification (L-1A, L-1B) (4 fields)
### O and P Classification (3 fields)
### Q-1 Cultural Exchange (2 fields)
### R-1 Religious Worker (2 fields)

EOF

echo "✅ Mapping summary created"
echo ""

# Generate TypeScript definition template
echo "📝 Step 2: Generating TypeScript definition template..."
cat > generated-forms/i-129/definition-template.ts << 'EOF'
import { FormDefinition } from "@/lib/constants/forms-registry";
import { I_129_FIELD_MAPPINGS } from "@/lib/constants/form-mappings/i-129-field-mappings";
import { US_STATES } from "@/lib/constants/us-states";

export const I_129_DEFINITION: FormDefinition = {
  id: "i-129",
  code: "I-129",
  name: "Petition for a Nonimmigrant Worker",
  description: "Petition for H-1B, L-1, O-1, and other temporary work visas",
  category: "work_authorization",
  estimatedTime: "90-120 minutes",
  filingFee: 460,
  price: 60,
  status: "active",
  
  pdfFieldMappings: I_129_FIELD_MAPPINGS.map(mapping => ({
    questionId: mapping.questionId,
    pdfField: mapping.pdfField,
    transform: mapping.type === "date" 
      ? (value: string) => {
          const [year, month, day] = value.split('-');
          return `${month}/${day}/${year}`;
        }
      : undefined
  })),
  
  requiredDocuments: [
    "Copy of petitioner's IRS tax returns or annual reports",
    "Evidence of petitioner's ability to pay the offered wage",
    "Labor Condition Application (LCA) for H-1B petitions",
    "Beneficiary's resume or curriculum vitae",
    "Beneficiary's educational credentials and evaluations",
    "Evidence of beneficiary's work experience",
    "Copy of beneficiary's passport biographical page",
  ],
  
  instructions: [
    "Complete all applicable sections of the form",
    "Include classification-specific supplement",
    "Sign and date the petition",
    "Include all required supporting documentation",
    "Pay the correct filing fee",
    "File at the appropriate USCIS Service Center",
  ],

  sections: [
    // TODO: Add all sections here
    // See MAPPING.md for complete field list
  ]
};
EOF

echo "✅ TypeScript template created"
echo ""

# Generate JSON mapping
echo "🔧 Step 3: Generating JSON mapping..."
cat > generated-forms/i-129/field-mapping.json << 'EOF'
{
  "formId": "i-129",
  "formCode": "I-129",
  "formName": "Petition for a Nonimmigrant Worker",
  "totalFields": 200,
  "sections": {
    "part1": {
      "title": "Petitioner Information",
      "fieldCount": 22
    },
    "part2": {
      "title": "Petition Information",
      "fieldCount": 5
    },
    "part3": {
      "title": "Beneficiary Information",
      "fieldCount": 28
    },
    "part4": {
      "title": "Processing Information",
      "fieldCount": 23
    },
    "part5": {
      "title": "Employment Information",
      "fieldCount": 28
    },
    "part6": {
      "title": "Export Control",
      "fieldCount": 1
    },
    "part7": {
      "title": "Petitioner Declaration",
      "fieldCount": 7
    },
    "part8": {
      "title": "Preparer Information",
      "fieldCount": 17
    },
    "part9": {
      "title": "Additional Information",
      "fieldCount": 17
    }
  },
  "supplements": [
    "E-1/E-2 Treaty Trader/Investor",
    "Trade Agreement (TN, H-1B1)",
    "H Classification",
    "H-1B Data Collection",
    "L Classification",
    "O and P Classification",
    "Q-1 Cultural Exchange",
    "R-1 Religious Worker"
  ]
}
EOF

echo "✅ JSON mapping created"
echo ""

echo "✨ Generation complete!"
echo ""
echo "📁 Output files:"
echo "   - generated-forms/i-129/MAPPING.md"
echo "   - generated-forms/i-129/definition-template.ts"
echo "   - generated-forms/i-129/field-mapping.json"
echo ""
echo "📖 Next steps:"
echo "   1. Review the generated files"
echo "   2. Copy definition-template.ts to your forms registry"
echo "   3. Add all section questions based on MAPPING.md"
echo ""
