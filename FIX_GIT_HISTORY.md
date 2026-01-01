# Fix Git History - Remove Stripe Keys

## Problem
GitHub is blocking the push because commit `a48654d` contains real Stripe API keys in `STRIPE_COMPLETE_SETUP.md`.

## Solution Options

### Option 1: Force Push (Easiest - if you're the only one working on this branch)

```bash
# 1. Reset to the commit before the problematic one
git reset --soft 189a399

# 2. Re-commit all changes
git add .
git commit -m "feat(payments): integrate Stripe payment system with form access control (sanitized)"

# 3. Force push
git push origin chat:chat --force
```

### Option 2: Interactive Rebase (Safer)

```bash
# 1. Start interactive rebase from before the problematic commit
git rebase -i 189a399

# 2. In the editor that opens, change 'pick' to 'edit' for commit a48654d
# Save and close

# 3. Amend the commit to fix the file
# (The file is already fixed in your working directory)
git add STRIPE_COMPLETE_SETUP.md
git commit --amend --no-edit

# 4. Continue the rebase
git rebase --continue

# 5. Force push
git push origin chat:chat --force
```

### Option 3: Use GitHub's "Allow Secret" (Not Recommended)

GitHub provided a link to allow the secret:
https://github.com/toobamuneeb/Q00101-immigration-prep/security/secret-scanning/unblock-secret/36zboSYkTlHDY2jzbcKfvi78lDd

**⚠️ WARNING:** This is NOT recommended because:
- The key will be visible in git history forever
- Anyone with access to the repo can see it
- You should rotate the key after this

## Recommended: Option 1 (Force Push)

This is the cleanest solution if you're the only one working on the `chat` branch.

```bash
# Step 1: Reset to before the problematic commit
git reset --soft 189a399

# Step 2: Stage all changes
git add .

# Step 3: Create a new commit with sanitized keys
git commit -m "feat(payments): integrate Stripe payment system with form access control

- Add Stripe checkout integration
- Implement webhook handling
- Add purchase tracking
- Implement form access control
- Add dual purchase options (single form + packages)
- All API keys sanitized in documentation"

# Step 4: Force push (overwrites remote history)
git push origin chat:chat --force
```

## After Fixing

### Important: Rotate Your Stripe Keys

Since the keys were exposed in git history (even temporarily), you should rotate them:

1. Go to Stripe Dashboard → Developers → API keys
2. Click "Roll key" for the secret key
3. Update your `.env` file with the new key
4. Update Vercel environment variables (if deployed)
5. Restart your application

### Verify .env is Ignored

```bash
# Check if .env is in .gitignore
cat .gitignore | grep .env

# Should show: .env*

# Verify .env is not tracked
git ls-files | grep .env

# Should return nothing
```

## Prevention

To prevent this in the future:

1. ✅ `.env*` is already in `.gitignore`
2. ✅ Never put real keys in documentation files
3. ✅ Use placeholders like `sk_test_ABC123...` in examples
4. ✅ Use git hooks to scan for secrets before commit (optional)

## Run This Now

```bash
# Quick fix - run these commands:
git reset --soft 189a399
git add .
git commit -m "feat(payments): integrate Stripe payment system (sanitized)"
git push origin chat:chat --force
```

Done! ✅
