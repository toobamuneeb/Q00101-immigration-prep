# AI-Powered Form Generator

Generate **HIGH-QUALITY** form definitions matching the I-131 quality level using OpenAI API.

## Features

✅ **Intelligent Label Extraction** - Parses FieldNameAlt to create proper labels  
✅ **Helpful Descriptions** - Generates user-friendly section descriptions  
✅ **Smart Help Text** - Adds contextual help for complex fields  
✅ **Proper Field Types** - Detects date, SSN, email, phone, etc.  
✅ **Organized Sections** - Groups fields logically  
✅ **Complete Mappings** - Generates PDF field mappings automatically  

## Setup

### 1. Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Create a new API key
3. Copy the key (starts with `sk-proj-...`)

### 2. Set Environment Variable

```bash
export OPENAI_API_KEY="sk-proj-your-key-here"
```

Or add to your `~/.zshrc` or `~/.bashrc`:

```bash
echo 'export OPENAI_API_KEY="sk-proj-your-key-here"' >> ~/.zshrc
source ~/.zshrc
```

## Usage

### Basic Usage

```bash
node scripts/ai-form-generator.js public/pdf-templates/i-131.pdf
```

### What It Does

1. **Extracts** all fields from the PDF using pdftk
2. **Sends** field data to OpenAI GPT-4
3. **Generates** high-quality TypeScript definition
4. **Creates** field mappings automatically
5. **Saves** files to:
   - `src/lib/constants/form-definitions/{form}-definition.ts`
   - `src/lib/constants/form-mappings/{form}-field-mappings.ts`

## Example Output

The AI generates definitions like this:

```typescript
const I131_DEFINITION: FormDefinition = {
  id: "i-131",
  code: "I-131",
  name: "Application for Travel Document",
  description: "Apply for advance parole, reentry permit, or refugee travel document",
  category: "travel",
  estimatedTime: "30-45 minutes",
  filingFee: 575,
  price: 60,
  sections: [
    {
      id: "part1-application-type",
      title: "Part 1: Application Type",
      description: "What type of travel document are you applying for?",
      questions: [
        {
          id: "part1.documentType",
          type: "select",
          label: "I am applying for (select one):",
          required: true,
          options: [
            {
              value: "1",
              label: "1. A Reentry Permit (for LPRs who will be outside U.S. for 1-2 years)"
            },
            {
              value: "4",
              label: "4. Advance Parole Document to allow me to return to the U.S."
            },
          ],
          helpText: "Most marriage-based green card applicants select option 4",
        },
      ],
    },
    {
      id: "part2-personal-info",
      title: "Part 2: Your Legal Name",
      description: "Enter your current legal name",
      questions: [
        {
          id: "part2.familyName",
          type: "text",
          label: "1.a. Family Name (Last Name)",
          required: true,
        },
        {
          id: "part2.givenName",
          type: "text",
          label: "1.b. Given Name (First Name)",
          required: true,
        },
      ],
    },
  ],
  pdfFieldMappings: I131_FIELD_MAPPINGS,
  requiredDocuments: [],
  instructions: [],
};
```

## Quality Features

### 1. Proper Labels
- ✅ "1.a. Family Name (Last Name)" 
- ❌ NOT "FamilyName" or "Part2Line1FamilyName"

### 2. Helpful Descriptions
- ✅ "Where should USCIS mail your travel document?"
- ❌ NOT "Complete the following information"

### 3. Smart Help Text
- ✅ "Most marriage-based green card applicants select option 4"
- ✅ "Found on your EAD, green card, or other USCIS documents"
- ❌ NOT empty or generic text

### 4. Proper Field Types
- `date` with placeholder "MM/DD/YYYY"
- `ssn` with placeholder "###-##-####"
- `tel` with placeholder "(555) 123-4567"
- `email` with placeholder "example@email.com"
- `select` with US_STATES for state fields
- `radio` for yes/no, male/female
- `textarea` for long text fields

### 5. Organized Sections
- Multiple subsections per part (e.g., "part2-personal-info", "part2-address", "part2-identification")
- Logical grouping of related fields
- Clear section titles and descriptions

## Cost

OpenAI API costs approximately:
- **GPT-4o**: ~$0.10-0.30 per form (depending on form size)
- **GPT-4**: ~$0.50-1.00 per form

The script uses GPT-4o by default for best quality at lower cost.

## Troubleshooting

### Error: "OPENAI_API_KEY environment variable not set"

```bash
export OPENAI_API_KEY="sk-proj-your-key-here"
```

### Error: "API key invalid"

1. Check your API key at https://platform.openai.com/api-keys
2. Make sure it starts with `sk-proj-` or `sk-`
3. Ensure you have credits in your OpenAI account

### Error: "Rate limit exceeded"

Wait a few minutes and try again. Or upgrade your OpenAI plan.

### Generated code has errors

The AI might occasionally make mistakes. Review and fix:
1. Check TypeScript syntax
2. Verify field types
3. Ensure questionIds are unique
4. Test the form in your application

## Comparison with Other Scripts

| Feature | smart-pdf-mapper | comprehensive-form-generator | advanced-form-generator | **ai-form-generator** ✅ |
|---------|------------------|------------------------------|-------------------------|--------------------------|
| Proper labels | ❌ | ❌ | ❌ | ✅ |
| Helpful descriptions | ❌ | ❌ | ❌ | ✅ |
| Smart help text | ❌ | ❌ | ❌ | ✅ |
| Organized subsections | ❌ | ❌ | ❌ | ✅ |
| Proper option labels | ❌ | ❌ | ❌ | ✅ |
| I-131 quality level | ❌ | ❌ | ❌ | ✅ |
| Requires API key | ❌ | ❌ | ❌ | ✅ |
| Cost | Free | Free | Free | ~$0.10-0.30 |

## Tips for Best Results

1. **Review the output** - AI is smart but not perfect
2. **Update form metadata** - Set correct filing fee, category, etc.
3. **Add required documents** - List what users need to submit
4. **Test thoroughly** - Generate a PDF and verify all fields work
5. **Enhance help text** - Add more context where needed

## Next Steps After Generation

1. **Review** the generated files
2. **Update** form name, description, filing fee
3. **Add** required documents list
4. **Add** instructions array
5. **Import** into forms-registry:

```typescript
import { I131_DEFINITION } from './form-definitions/i-131-definition';

export const FORMS_REGISTRY: FormDefinition[] = [
  // ... other forms
  I131_DEFINITION,
];
```

6. **Test** PDF generation with sample data

## Support

If you encounter issues:
1. Check the generated TypeScript for syntax errors
2. Verify your OpenAI API key is valid
3. Review the PDF field data in the console output
4. Try regenerating if the output isn't satisfactory

## Example: Generate I-131

```bash
# Set API key
export OPENAI_API_KEY="sk-proj-..."

# Generate form
node scripts/ai-form-generator.js public/pdf-templates/i-131.pdf

# Output:
# ✅ src/lib/constants/form-definitions/i-131-definition.ts
# ✅ src/lib/constants/form-mappings/i-131-field-mappings.ts
```

## Limitations

- Processes first 100 fields (to stay within API limits)
- May need manual review for complex forms
- Requires internet connection
- Costs money (though minimal)

## Advantages

- **Saves hours** of manual work
- **Consistent quality** across all forms
- **Intelligent understanding** of form context
- **Proper labels and descriptions** automatically
- **Ready to use** with minimal editing

---

**Ready to generate high-quality form definitions? Set your API key and run the script!** 🚀
