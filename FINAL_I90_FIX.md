# ✅ I-90 Form - Final Fix

## Problem Kya Thi?
PDF fill ho raha tha lekin fields khali aa rahe the.

## Solution

### Step 1: Server Restart Karo
```bash
# Pehle server band karo (Ctrl+C)
# Phir dobara start karo
npm run dev
```

### Step 2: Browser Cache Clear Karo
- **Mac:** Cmd + Shift + R
- **Windows/Linux:** Ctrl + Shift + R

### Step 3: Data Format Check Karo

**✅ SAHI FORMAT:**
```javascript
const formData = {
  "part1.alienNumber": "123456789",
  "part1.uscisAccountNumber": "ABC123",
  "part1.familyName": "Smith",
  "part1.givenName": "John",
  "part1.middleName": "Michael",
  "part1.reasonCard": "lost",
  "part1.mailingStreetNumber": "123 Main St",
  "part1.mailingCity": "New York",
  "part1.mailingState": "NY",
  "part1.mailingZipCode": "10001",
  "part1.gender": "male",
  "part1.dateOfBirth": "1990-01-15",
  "part1.cityOfBirth": "Los Angeles",
  "part1.countryOfBirth": "United States"
};

// PDF fill karo
await fillPDF("i-90", formData);
```

**❌ GALAT FORMAT:**
```javascript
// Yeh NAHI chalega
const formData = {
  "alienNumber": "123456789",  // ❌ "part1." missing
  "familyName": "Smith"         // ❌ "part1." missing
};
```

### Step 4: Form ID Check Karo

```javascript
// ✅ SAHI
await fillPDF("i-90", formData);  // lowercase with dash

// ❌ GALAT
await fillPDF("I-90", formData);  // uppercase
await fillPDF("i90", formData);   // no dash
```

## Debug Script

Agar abhi bhi problem hai toh yeh run karo:

```bash
node scripts/debug-i90-filling.js
```

Yeh batayega ke exactly kya problem hai.

## Test Kaise Karein?

1. **Server start karo:**
   ```bash
   npm run dev
   ```

2. **Browser mein jao:**
   ```
   http://localhost:3000/browse
   ```

3. **I-90 form select karo**

4. **Form fill karo** with sample data

5. **Download karo** aur check karo

## Common Issues

### Issue 1: Fields khali hain
**Solution:** 
- Data keys check karo: `"part1.familyName"` not `"familyName"`
- Server restart karo
- Browser cache clear karo

### Issue 2: PDF download nahi ho raha
**Solution:**
- Console mein errors check karo
- Network tab mein API call check karo
- Server logs check karo

### Issue 3: Form list mein nahi dikh raha
**Solution:**
- Server restart karo
- `src/lib/constants/forms-registry.ts` check karo
- `"i-90": I90_DEFINITION` hona chahiye

## Files Check Karo

```bash
# Yeh files honi chahiye:
ls -lh src/lib/constants/form-mappings/i90-auto-mappings.ts
ls -lh src/lib/constants/i90-definition.ts
ls -lh public/pdf-templates/i-90-unlocked.pdf
```

## Final Checklist

- [ ] Server restart kiya?
- [ ] Browser cache clear kiya?
- [ ] Data format sahi hai?
- [ ] Form ID "i-90" hai (lowercase with dash)?
- [ ] i-90-unlocked.pdf exists?
- [ ] Console mein koi error nahi?

## Agar Phir Bhi Nahi Chala?

Mujhe yeh information do:

1. Browser console ka screenshot
2. Network tab ka screenshot (API call)
3. Server logs
4. Data format jo tum use kar rahe ho

---

**Status:** ✅ FIXED
**Date:** December 13, 2025
