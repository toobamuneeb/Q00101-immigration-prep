# 🚀 How to Run I-90 Form

## Quick Start

### 1. Start Your Application
```bash
npm run dev
```

### 2. Open in Browser
Go to: `http://localhost:3000/browse`

### 3. Select I-90 Form
Look for: **"I-90 - Application to Replace Permanent Resident Card"**

---

## ✅ Everything is Already Set Up!

The I-90 form is **fully integrated** and ready to use. No additional setup needed!

---

## 📝 Data Format

When users fill the form, the data should be structured like this:

```javascript
{
  // Part 1: Personal Information
  "part1.alienNumber": "123456789",
  "part1.uscisAccountNumber": "ABC123456",
  "part1.familyName": "Smith",
  "part1.givenName": "John",
  "part1.middleName": "Michael",
  
  // Reason for card
  "part1.reasonCard": "lost", // or "stolen" or "destroyed"
  
  // Mailing Address
  "part1.mailingStreetNumber": "123 Main Street",
  "part1.mailingCity": "New York",
  "part1.mailingState": "NY",
  "part1.mailingZipCode": "10001",
  
  // Personal Details
  "part1.gender": "male", // or "female"
  "part1.dateOfBirth": "1990-01-15",
  "part1.cityOfBirth": "Los Angeles",
  "part1.countryOfBirth": "United States",
  
  // Part 2: Application Type
  "part2.applicationType": "card_lost_stolen_destroyed",
  
  // Part 3: Physical Characteristics
  "part3.heightFeet": "5",
  "part3.heightInches": "10",
  "part3.ethnicity": "not_hispanic",
  "part3.race": ["white"],
  "part3.hairColor": "brown",
  "part3.eyeColor": "blue",
  
  // Part 4: Accommodations
  "part4.accommodationNeeded": "no",
  
  // Part 5: Contact Info
  "part5.daytimePhone": "212-555-0100",
  "part5.emailAddress": "john.smith@example.com"
}
```

---

## 🧪 Test Scripts

### Test Integration
```bash
node scripts/test-i90-integration.js
```

### Test PDF Fields
```bash
node scripts/test-i90-pdf-fill.js
```

### Complete Guide
```bash
node scripts/test-i90-complete.js
```

---

## 🔍 Troubleshooting

### PDF Fields Not Filling?

**Check these:**
1. ✅ Data keys match exactly (case-sensitive): `"part1.familyName"` not `"familyName"`
2. ✅ Using unlocked PDF: `i-90-unlocked.pdf`
3. ✅ Data is passed correctly to `fillPDF()` function
4. ✅ Check browser console for errors

### Form Not Showing?

**Try this:**
1. Restart dev server: `npm run dev`
2. Clear browser cache
3. Check `src/lib/constants/forms-registry.ts` includes `"i-90": I90_DEFINITION`

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `src/lib/constants/forms-registry.ts` | Form definition (line ~9582) |
| `src/lib/constants/form-mappings/i90-auto-mappings.ts` | Field mappings (163 fields) |
| `public/pdf-templates/i-90-unlocked.pdf` | PDF template |
| `src/lib/pdf/fill-pdf.ts` | PDF filling logic |

---

## 💡 Key Points

- ✅ **163 field mappings** created
- ✅ **6 form sections** with 52 questions
- ✅ **Filing fee:** $540
- ✅ **Service price:** $89
- ✅ **All tests passed**

---

## 🎯 What Users Can Do

1. **Fill out the form** with all required information
2. **Generate PDF** with their data
3. **Download** the filled PDF
4. **Submit** to USCIS

---

## 📞 Need Help?

Run the complete guide:
```bash
node scripts/test-i90-complete.js
```

This will show you:
- Current status
- File locations
- Data format
- Common issues & solutions

---

**Status:** ✅ READY TO USE  
**Last Updated:** December 13, 2025
