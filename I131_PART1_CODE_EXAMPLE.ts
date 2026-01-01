// Example: How to properly structure I-131 Part 1 in forms-registry.ts
// This replaces the current simplified Part 1 section

// STEP 1: Main category selection
{
  id: "part1-application-type",
  title: "Part 1: Application Type",
  description: "Select the type of travel document you are applying for",
  questions: [
    {
      id: "part1.documentCategory",
      type: "radio",
      label: "What type of document are you applying for?",
      required: true,
      options: [
        { value: "reentry", label: "Reentry Permit" },
        { value: "refugee", label: "Refugee Travel Document" },
        { value: "tps", label: "TPS Travel Authorization Document" },
        { value: "advanceParole", label: "Advance Parole Document (inside US)" },
        { value: "initialParole", label: "Initial Parole Document (outside US)" },
        { value: "paroleInPlace", label: "Parole in Place (inside US)" },
        { value: "reparole", label: "Re-parole (new period of parole)" },
      ],
      helpText: "Choose the option that best describes your situation",
    },
  ],
},

// STEP 2: Reentry Permit (shows only if "reentry" selected)
{
  id: "part1-reentry-permit",
  title: "Part 1: Reentry Permit Confirmation",
  description: "Confirm your reentry permit application",
  questions: [
    {
      id: "part1.reentryPermit",
      type: "checkbox",
      label: "1. I am a lawful permanent resident or conditional permanent resident of the United States, and I am applying for a reentry permit.",
      options: [{ value: "confirmed", label: "I confirm this statement" }],
      required: true,
    },
  ],
  conditional: {
    dependsOn: "part1.documentCategory",
    values: ["reentry"],
  },
},

// STEP 3: Refugee Travel Document (shows only if "refugee" selected)
{
  id: "part1-refugee-travel",
  title: "Part 1: Refugee Travel Document",
  description: "Select your refugee status",
  questions: [
    {
      id: "part1.refugeeType",
      type: "radio",
      label: "Select your situation:",
      required: true,
      options: [
        {
          value: "currentStatus",
          label: "2. I now hold refugee or asylee status in the United States, and I am applying for a Refugee Travel Document",
        },
        {
          value: "lprFromRefugee",
          label: "3. I am a lawful permanent resident as a direct result of refugee or asylee status, and I am applying for a Refugee Travel Document",
        },
      ],
    },
  ],
  conditional: {
    dependsOn: "part1.documentCategory",
    values: ["refugee"],
  },
},

// STEP 4: TPS Travel Authorization (shows only if "tps" selected)
{
  id: "part1-tps-travel",
  title: "Part 1: TPS Travel Authorization",
  description: "Confirm your TPS status",
  questions: [
    {
      id: "part1.tpsConfirmation",
      type: "checkbox",
      label: "4. I am a TPS beneficiary in the United States, and I am applying for a TPS Travel Authorization Document under INA section 244(f)(3) to allow me to seek admission under TPS upon my return from abroad",
      options: [{ value: "confirmed", label: "I confirm this statement" }],
      required: true,
    },
    {
      id: "part1.tpsReceiptNumber",
      type: "text",
      label: "Enter the receipt number for your last approved Form I-821, Application for Temporary Protected Status:",
      required: true,
      placeholder: "e.g., IOE1234567890",
      helpText: "This is the receipt number from your most recent TPS approval",
    },
  ],
  conditional: {
    dependsOn: "part1.documentCategory",
    values: ["tps"],
  },
},

// STEP 5: Advance Parole (shows only if "advanceParole" selected)
{
  id: "part1-advance-parole",
  title: "Part 1: Advance Parole Document",
  description: "Select the basis for your advance parole request",
  questions: [
    {
      id: "part1.advanceParoleBasis",
      type: "radio",
      label: "5. I am located inside the United States, and I am applying for an Advance Parole Document to allow me to seek parole into the United States under INA section 212(d)(5)(A) upon my return from abroad based on:",
      required: true,
      options: [
        {
          value: "pendingI485",
          label: "5.A. A pending Form I-485, Application to Register Permanent Residence or Adjust Status",
        },
        {
          value: "pendingI589",
          label: "5.B. A pending Form I-589, Application for Asylum and for Withholding of Removal",
        },
        {
          value: "pendingI821",
          label: "5.C. A pending initial Form I-821, Application for Temporary Protected Status",
        },
        {
          value: "deferredDeparture",
          label: "5.D. Deferred Departure",
        },
        {
          value: "approvedI821D",
          label: "5.E. Approved Form I-821D, Consideration of Deferred Action for Childhood Arrivals (DACA)",
        },
        {
          value: "approvedI914",
          label: "5.F. An approved Form I-914, Application for T Nonimmigrant Status",
        },
        {
          value: "approvedI918",
          label: "5.G. An approved Form I-918, Petition for U Nonimmigrant Status",
        },
        {
          value: "currentParolee",
          label: "5.H. Being a current parolee under INA section 212(d)(5)",
        },
        {
          value: "approvedI817",
          label: "5.I. An approved Form I-817, Application for Family Unity Benefits",
        },
        {
          value: "pendingI687",
          label: "5.J. A pending Form I-687, Application for Status as a Temporary Resident",
        },
        {
          value: "approvedVStatus",
          label: "5.K. An approved V Nonimmigrant Status",
        },
        {
          value: "cnmiLongTerm",
          label: "5.L. CNMI long-term residence",
        },
        {
          value: "other",
          label: "5.M. Other",
        },
      ],
      helpText: "Select the immigration benefit or status that forms the basis of your advance parole request",
    },
  ],
  conditional: {
    dependsOn: "part1.documentCategory",
    values: ["advanceParole"],
  },
},

// STEP 5A: Receipt number for pending I-485
{
  id: "part1-advance-parole-i485",
  title: "Part 1: I-485 Receipt Number",
  description: "Provide your I-485 receipt number",
  questions: [
    {
      id: "part1.i485ReceiptNumber",
      type: "text",
      label: "Enter the receipt number for your pending Form I-485:",
      required: true,
      placeholder: "e.g., IOE1234567890",
    },
  ],
  conditional: {
    dependsOn: "part1.advanceParoleBasis",
    values: ["pendingI485"],
  },
},

// STEP 5B: Receipt number for pending I-589
{
  id: "part1-advance-parole-i589",
  title: "Part 1: I-589 Receipt Number",
  description: "Provide your I-589 receipt number",
  questions: [
    {
      id: "part1.i589ReceiptNumber",
      type: "text",
      label: "Enter the receipt number for your pending Form I-589:",
      required: true,
      placeholder: "e.g., IOE1234567890",
    },
  ],
  conditional: {
    dependsOn: "part1.advanceParoleBasis",
    values: ["pendingI589"],
  },
},

// ... Continue for other sub-options (5.C through 5.M)

// STEP 5M: Other explanation
{
  id: "part1-advance-parole-other",
  title: "Part 1: Other Basis",
  description: "Explain the basis for your advance parole request",
  questions: [
    {
      id: "part1.advanceParoleOtherExplanation",
      type: "textarea",
      label: "5.M. Explain the basis for your advance parole request:",
      required: true,
      helpText: "Provide a detailed explanation of your situation",
    },
  ],
  conditional: {
    dependsOn: "part1.advanceParoleBasis",
    values: ["other"],
  },
},

// Continue with sections for:
// - Initial Parole (6.A through 7)
// - Parole in Place (8.A through 9)
// - Re-parole (10.A through 11)

// Each with proper conditional logic
