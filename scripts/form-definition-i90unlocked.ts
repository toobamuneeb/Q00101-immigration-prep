/**
 * Form Registry Definition for I90UNLOCKED
 * Generated on: 2025-12-13T02:26:58.165Z
 * 
 * Copy this to src/lib/constants/forms-registry.ts
 */

const I90UNLOCKED_DEFINITION: FormDefinition = {
  id: "i90unlocked",
  code: "I90UNLOCKED",
  name: "TODO: Add Form Name",
  description: "TODO: Add description",
  category: "other",
  estimatedTime: "30-45 minutes",
  filingFee: 0,
  price: 60,
  sections: [
    {
      id: "part1",
      title: "Part 1: Information",
      description: "TODO: Add section description",
      questions: [
        {
          id: "part1.checkbox6c_Unit",
          type: "text",
          label: "P1 checkbox6c  Unit",
          required: false,
        },
      ],
    },
  ],
  requiredDocuments: [
    "TODO: List required documents",
  ],
  instructions: [
    "TODO: Add instructions",
  ],
};

// Add to FORMS_REGISTRY array:
// I90UNLOCKED_DEFINITION,
