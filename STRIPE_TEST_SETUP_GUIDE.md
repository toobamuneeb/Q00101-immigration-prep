# Stripe Test Account Setup - Complete A to Z Guide

## 🎯 Overview

This guide will walk you through setting up Stripe for testing your immigration prep platform. You'll learn how to:
1. Switch to test mode
2. Get test API keys
3. Set up webhook for local testing
4. Test payments with test cards
5. Verify everything works

---

## 📋 Prerequisites

Before starting, you need:
- ✅ A Stripe account (sign up at https://stripe.com if you don't have one)
- ✅ Your application running locally (`npm run dev`)
- ✅ Stripe CLI installed (for webhook testing)

---

## STEP 1: Switch to Test Mode

### 1.1 Log into Stripe Dashboard

Go to: https://dashboard.stripe.com

### 1.2 Switch to Test Mode

Look at the top right corner of the dashboard. You'll see a toggle switch that says:
- **"Live"** (red/orange) - Real payments
- **"Test"** (blue) - Test payments

**Click the toggle to switch to "Test" mode** (it should turn blue)

```
┌─────────────────────────────────────┐
│  Stripe Dashboard                   │
│                                     │
│  [Test Mode] ← Should be blue       │
└─────────────────────────────────────┘
```

**Important:** 
- ✅ Test mode = No real money charged
- ✅ Use test cards (4242 4242 4242 4242)
- ❌ Live mode = Real money charged (don't use for testing!)

---

## STEP 2: Get Your Test API Keys

### 2.1 Navigate to API Keys

1. In Stripe Dashboard (Test Mode), click **"Developers"** in the left sidebar
2. Click **"API keys"**
3. You'll see this page: https://dashboard.stripe.com/test/apikeys

### 2.2 Copy Your Keys

You'll see two types of keys:

#### Publishable Key (starts with `pk_test_`)
```
pk_test_51ABC123...
```
- ✅ Safe to expose in client-side code
- ✅ Used in browser/frontend
- Click "Copy" button to copy it

#### Secret Key (starts with `sk_test_`)
```
sk_test_51ABC123...
```
- ⚠️ NEVER expose this publicly
- ⚠️ Only use server-side
- Click "Reveal test key" button first
- Then click "Copy" to copy it

### 2.3 Update Your .env File

Open your `.env` or `.env.local` file and update these values:

```bash
# Replace with your TEST keys
STRIPE_SECRET_KEY=sk_test_51ABC123YourActualTestKeyHere
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123YourActualTestKeyHere
```

**Before:**
```bash
STRIPE_SECRET_KEY=sk_live_51ABC123...  # Live key (example)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51ABC123...  # Live key (example)
```

**After:**
```bash
STRIPE_SECRET_KEY=sk_test_51ABC123...  # Test key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123...  # Test key
```

### 2.4 Restart Your Dev Server

```bash
# Stop your server (Ctrl+C)
# Then restart it
npm run dev
```

**Why?** Environment variables are loaded when the server starts. You need to restart for the new keys to take effect.

---

## STEP 3: Set Up Webhook for Local Testing

Webhooks are how Stripe tells your server "Hey, a payment was successful!" You need to set this up to test the complete flow.

### 3.1 Install Stripe CLI

The Stripe CLI lets you receive webhooks on your local machine.

#### On macOS (using Homebrew):
```bash
brew install stripe/stripe-cli/stripe
```

#### On Windows:
Download from: https://github.com/stripe/stripe-cli/releases/latest

#### On Linux:
```bash
# Download and install
wget https://github.com/stripe/stripe-cli/releases/download/v1.19.4/stripe_1.19.4_linux_x86_64.tar.gz
tar -xvf stripe_1.19.4_linux_x86_64.tar.gz
sudo mv stripe /usr/local/bin/
```

### 3.2 Login to Stripe CLI

```bash
stripe login
```

This will:
1. Open your browser
2. Ask you to confirm the login
3. Click "Allow access"
4. Return to terminal

You should see:
```
✔ Done! The Stripe CLI is configured for [your-account]
```

### 3.3 Start Webhook Forwarding

Open a **NEW terminal window** (keep your dev server running in the first one) and run:

```bash
stripe listen --forward-to localhost:3000/api/payments/webhook
```

You should see output like this:

```
> Ready! You are using Stripe API Version [2024-11-20]. Your webhook signing secret is whsec_abc123xyz... (^C to quit)
```

**IMPORTANT:** Copy the webhook signing secret (starts with `whsec_`)

### 3.4 Update Webhook Secret in .env

Add the webhook secret to your `.env` file:

```bash
STRIPE_WEBHOOK_SECRET=whsec_abc123xyz...YourActualSecretHere
```

### 3.5 Restart Your Dev Server Again

```bash
# In your first terminal, stop the server (Ctrl+C)
npm run dev
```

**Now you have:**
- ✅ Terminal 1: Running `npm run dev` (your app)
- ✅ Terminal 2: Running `stripe listen` (webhook forwarding)

---

## STEP 4: Test the Complete Flow

### 4.1 Sign Up for a Test Account

1. Go to: http://localhost:3000/auth/signup
2. Enter a test email: `test@example.com`
3. Enter a password: `TestPassword123!`
4. Click "Sign Up"

**Note:** In test mode, you might need to check your actual email for confirmation, or you can disable email confirmation in Supabase for testing.

### 4.2 Log In

1. Go to: http://localhost:3000/auth/login
2. Enter your test credentials
3. Click "Log In"

### 4.3 Try to Access a Form

1. Go to: http://localhost:3000/dashboard
2. Click on any form (e.g., "I-130")
3. You should see the **"Purchase Required"** screen with 2 options:
   - Option 1: Buy Single Form - $60
   - Option 2: Buy Package - $60

### 4.4 Start a Test Purchase

Click **"Buy Single Form"** or **"Buy Package"**

You should be redirected to Stripe Checkout page.

### 4.5 Complete Test Payment

On the Stripe Checkout page, use these **TEST CARD DETAILS**:

#### Card Number:
```
4242 4242 4242 4242
```

#### Expiry Date:
```
Any future date (e.g., 12/25, 01/26, etc.)
```

#### CVC:
```
Any 3 digits (e.g., 123, 456, 789)
```

#### ZIP Code:
```
Any 5 digits (e.g., 12345, 90210)
```

#### Email:
```
Your test email (test@example.com)
```

Click **"Pay"**

### 4.6 Watch the Webhook Terminal

In your **Terminal 2** (where `stripe listen` is running), you should see:

```
2024-12-17 10:30:45   --> checkout.session.completed [evt_abc123]
2024-12-17 10:30:45  <--  [200] POST http://localhost:3000/api/payments/webhook [evt_abc123]
```

This means:
- ✅ Stripe sent the webhook
- ✅ Your server received it
- ✅ Your server responded with 200 (success)

### 4.7 Verify Success Page

You should be redirected to:
```
http://localhost:3000/dashboard/purchase/success?session_id=cs_test_...
```

You should see a success message!

### 4.8 Verify Database Records

Open Supabase Dashboard and check:

#### Check purchases table:
```sql
SELECT * FROM purchases 
WHERE status = 'completed' 
ORDER BY created_at DESC 
LIMIT 1;
```

You should see your purchase record with:
- ✅ `user_id` = your user ID
- ✅ `package_id` = "single-form-i-130" or package ID
- ✅ `forms_included` = array of form IDs
- ✅ `status` = "completed"
- ✅ `amount_paid` = 6000 (cents)

#### Check user_form_access table:
```sql
SELECT * FROM user_form_access 
WHERE is_active = true 
ORDER BY created_at DESC;
```

You should see access records for the forms you purchased.

### 4.9 Verify Form Access

1. Go back to: http://localhost:3000/dashboard
2. Click on the form you purchased
3. **It should load!** (No "Purchase Required" screen)
4. Fill out some fields
5. Click "Download PDF"
6. **PDF should download!**

### 4.10 Verify Access Control

1. Try to access a form you DIDN'T purchase
2. You should see "Purchase Required" screen
3. This confirms access control is working! ✅

---

## STEP 5: Test Different Scenarios

### Test 1: Single Form Purchase

1. Purchase a single form (e.g., I-130)
2. Verify you can access ONLY that form
3. Verify you CANNOT access other forms

### Test 2: Package Purchase

1. Purchase a package (e.g., Marriage Green Card)
2. Verify you can access ALL forms in the package
3. Verify you CANNOT access forms outside the package

### Test 3: Multiple Purchases

1. Purchase a single form
2. Then purchase a package
3. Verify you can access forms from both purchases

### Test 4: Returning User

1. Log out
2. Log back in
3. Go to dashboard
4. Verify purchased forms are still accessible
5. Verify unpurchased forms still show "Purchase Required"

### Test 5: My Purchases Page

1. Go to: http://localhost:3000/dashboard/my-purchases
2. Verify all your purchases are listed
3. Verify form access is shown correctly

---

## 🧪 Stripe Test Cards

Stripe provides different test cards for different scenarios:

### Successful Payment:
```
Card: 4242 4242 4242 4242
Result: Payment succeeds
```

### Payment Declined:
```
Card: 4000 0000 0000 0002
Result: Payment is declined
```

### Requires Authentication (3D Secure):
```
Card: 4000 0025 0000 3155
Result: Requires additional authentication
```

### Insufficient Funds:
```
Card: 4000 0000 0000 9995
Result: Declined due to insufficient funds
```

### Expired Card:
```
Card: 4000 0000 0000 0069
Result: Declined because card is expired
```

**For all cards:**
- Expiry: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

Full list: https://stripe.com/docs/testing

---

## 🔍 Debugging Tips

### Problem: Webhook not receiving events

**Check:**
1. Is `stripe listen` running in Terminal 2?
2. Is the webhook secret in `.env` correct?
3. Did you restart the dev server after updating `.env`?

**Solution:**
```bash
# Terminal 2
stripe listen --forward-to localhost:3000/api/payments/webhook

# Copy the webhook secret (whsec_...)
# Update .env with the secret
# Restart dev server in Terminal 1
```

### Problem: "Invalid API key"

**Check:**
1. Are you using TEST keys (start with `sk_test_` and `pk_test_`)?
2. Did you copy the full key (no spaces)?
3. Did you restart the dev server?

**Solution:**
```bash
# Go to: https://dashboard.stripe.com/test/apikeys
# Copy both keys again
# Update .env
# Restart dev server
```

### Problem: Payment succeeds but no access granted

**Check:**
1. Is webhook receiving events? (Check Terminal 2)
2. Is webhook returning 200? (Check Terminal 2)
3. Check server logs for errors

**Solution:**
```bash
# In Terminal 1 (dev server), look for logs like:
# 🛒 Create checkout session request received
# ✅ Stripe session created
# 📥 Webhook received: checkout.session.completed
# ✅ Purchase created
# ✅ Access granted
```

### Problem: "Purchase Required" still showing after purchase

**Check:**
1. Did webhook fire? (Check Terminal 2)
2. Check database records:
```sql
SELECT * FROM user_form_access 
WHERE user_id = 'your-user-id' 
AND form_id = 'i-130';
```

**Solution:**
- If no record exists, webhook didn't process correctly
- Check webhook logs in Terminal 2
- Check server logs in Terminal 1
- Try the purchase again

---

## 📊 Viewing Test Data in Stripe Dashboard

### View Test Payments

1. Go to: https://dashboard.stripe.com/test/payments
2. You'll see all test payments
3. Click on a payment to see details

### View Test Customers

1. Go to: https://dashboard.stripe.com/test/customers
2. You'll see all test customers
3. Each customer is created automatically during checkout

### View Webhook Events

1. Go to: https://dashboard.stripe.com/test/webhooks
2. Click on your webhook endpoint
3. You'll see all events sent to your webhook
4. Click on an event to see the payload and response

### View Logs

1. Go to: https://dashboard.stripe.com/test/logs
2. You'll see all API requests
3. Useful for debugging issues

---

## 🔄 Switching Between Test and Live Mode

### For Testing (Current Setup):
```bash
# .env
STRIPE_SECRET_KEY=sk_test_51ABC123...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51ABC123...
STRIPE_WEBHOOK_SECRET=whsec_abc123...  # From stripe listen
```

### For Production (When Ready):
```bash
# .env.production or Vercel environment variables
STRIPE_SECRET_KEY=sk_live_51ABC123...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51ABC123...
STRIPE_WEBHOOK_SECRET=whsec_xyz789...  # From Stripe Dashboard webhook
```

**Important:** 
- ⚠️ NEVER commit live keys to git
- ⚠️ Use environment variables in production
- ⚠️ Test thoroughly in test mode before going live

---

## 🎯 Complete Testing Checklist

Use this checklist to verify everything works:

### Setup:
- [ ] Switched to Stripe Test Mode
- [ ] Copied test API keys
- [ ] Updated .env with test keys
- [ ] Installed Stripe CLI
- [ ] Logged into Stripe CLI
- [ ] Started `stripe listen` in Terminal 2
- [ ] Copied webhook secret to .env
- [ ] Restarted dev server

### Single Form Purchase:
- [ ] Signed up test account
- [ ] Logged in
- [ ] Clicked on a form
- [ ] Saw "Purchase Required" screen
- [ ] Clicked "Buy Single Form"
- [ ] Redirected to Stripe Checkout
- [ ] Entered test card: 4242 4242 4242 4242
- [ ] Payment succeeded
- [ ] Webhook fired (saw in Terminal 2)
- [ ] Redirected to success page
- [ ] Can access purchased form
- [ ] Cannot access other forms
- [ ] Can download PDF for purchased form

### Package Purchase:
- [ ] Clicked on a form in a package
- [ ] Saw "Purchase Required" screen
- [ ] Clicked "Buy Package"
- [ ] Completed payment with test card
- [ ] Webhook fired
- [ ] Can access ALL forms in package
- [ ] Cannot access forms outside package
- [ ] Can download PDFs for all package forms

### Returning User:
- [ ] Logged out
- [ ] Logged back in
- [ ] Purchased forms still accessible
- [ ] Unpurchased forms still show "Purchase Required"

### My Purchases:
- [ ] Went to /dashboard/my-purchases
- [ ] All purchases listed
- [ ] Form access shown correctly

### Database:
- [ ] Purchase records in `purchases` table
- [ ] Access records in `user_form_access` table
- [ ] Correct user_id, form_id, status

---

## 🚀 Next Steps

Once testing is complete:

### 1. Test Refunds (Optional)
```bash
# In Stripe Dashboard (Test Mode)
# Go to Payments → Click on a payment → Click "Refund"
# Verify access is revoked in your app
```

### 2. Test Failed Payments
```bash
# Use declined card: 4000 0000 0000 0002
# Verify error handling works
```

### 3. Test 3D Secure
```bash
# Use 3DS card: 4000 0025 0000 3155
# Complete authentication flow
# Verify payment succeeds
```

### 4. Prepare for Production
- Get live API keys from Stripe
- Set up production webhook in Stripe Dashboard
- Update environment variables in production
- Test with small real payment first

---

## 📞 Support Resources

### Stripe Documentation:
- Testing: https://stripe.com/docs/testing
- Webhooks: https://stripe.com/docs/webhooks
- Checkout: https://stripe.com/docs/payments/checkout

### Stripe CLI:
- Installation: https://stripe.com/docs/stripe-cli
- Commands: https://stripe.com/docs/stripe-cli/commands

### Your Documentation:
- HOW_VERIFICATION_WORKS.md - How verification works
- PURCHASE_FLOW_DIAGRAM.md - Visual flow diagrams
- COMPLETE_SETUP_SUMMARY.md - System overview

---

## 🎉 Summary

You now know how to:
- ✅ Switch to Stripe test mode
- ✅ Get test API keys
- ✅ Set up local webhook testing
- ✅ Test payments with test cards
- ✅ Verify the complete purchase flow
- ✅ Debug common issues
- ✅ View test data in Stripe Dashboard

**Your test environment is ready!** 🚀

Start testing by running:
```bash
# Terminal 1
npm run dev

# Terminal 2
stripe listen --forward-to localhost:3000/api/payments/webhook
```

Then go to http://localhost:3000 and start testing!
