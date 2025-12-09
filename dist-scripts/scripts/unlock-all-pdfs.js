#!/usr/bin/env tsx
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Unlock All PDFs Script
 *
 * Removes encryption/restrictions from all PDF files in the pdf-templates directory.
 * Creates unlocked versions that can be used for field mapping and PDF generation.
 *
 * Usage:
 *   npx tsx src/scripts/unlock-all-pdfs.ts
 *   npx tsx src/scripts/unlock-all-pdfs.ts --overwrite
 */
require("module-alias/register");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
async function unlockAllPDFs(overwrite = false) {
    const pdfDir = (0, path_1.join)(process.cwd(), "public", "pdf-templates");
    // Check if directory exists
    if (!(0, fs_1.existsSync)(pdfDir)) {
        console.error(`❌ Error: Directory not found: ${pdfDir}`);
        process.exit(1);
    }
    // Check if qpdf is installed
    try {
        (0, child_process_1.execSync)("which qpdf", { stdio: "ignore" });
    }
    catch (error) {
        console.error(`❌ Error: qpdf is not installed`);
        console.log(`\nInstall qpdf:`);
        console.log(`  Mac:     brew install qpdf`);
        console.log(`  Ubuntu:  sudo apt-get install qpdf`);
        console.log(`  Windows: choco install qpdf`);
        process.exit(1);
    }
    // Get all PDF files
    const files = (0, fs_1.readdirSync)(pdfDir).filter((file) => file.endsWith(".pdf"));
    if (files.length === 0) {
        console.log(`⚠️  No PDF files found in ${pdfDir}`);
        return;
    }
    console.log(`\n🔓 Unlocking ${files.length} PDF file(s)...`);
    console.log(`   Directory: ${pdfDir}\n`);
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;
    for (const file of files) {
        // Skip already unlocked files
        if (file.includes("-unlocked")) {
            skipCount++;
            continue;
        }
        // Skip field list JSON files
        if (file.includes("_fields.json")) {
            skipCount++;
            continue;
        }
        const inputPath = (0, path_1.join)(pdfDir, file);
        const baseName = (0, path_1.basename)(file, (0, path_1.extname)(file));
        const outputPath = (0, path_1.join)(pdfDir, `${baseName}-unlocked.pdf`);
        const tempPath = (0, path_1.join)(pdfDir, `${baseName}-temp.pdf`);
        try {
            console.log(`Processing: ${file}`);
            // Unlock the PDF
            const command = `qpdf --decrypt "${inputPath}" "${tempPath}"`;
            (0, child_process_1.execSync)(command, { stdio: "pipe" });
            if (overwrite) {
                // Overwrite original file
                (0, fs_1.renameSync)(tempPath, inputPath);
                console.log(`  ✅ Unlocked and replaced original`);
            }
            else {
                // Save as separate unlocked file
                (0, fs_1.renameSync)(tempPath, outputPath);
                console.log(`  ✅ Saved to: ${baseName}-unlocked.pdf`);
            }
            successCount++;
        }
        catch (error) {
            console.error(`  ❌ Failed: ${error instanceof Error ? error.message : "Unknown error"}`);
            errorCount++;
            // Clean up temp file if it exists
            if ((0, fs_1.existsSync)(tempPath)) {
                try {
                    (0, child_process_1.execSync)(`rm "${tempPath}"`);
                }
                catch (cleanupError) {
                    // Ignore cleanup errors
                }
            }
        }
    }
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Summary:`);
    console.log(`  ✅ Successfully unlocked: ${successCount}`);
    console.log(`  ⏭️  Skipped: ${skipCount}`);
    console.log(`  ❌ Failed: ${errorCount}`);
    console.log(`${"=".repeat(60)}\n`);
    if (overwrite) {
        console.log(`Original PDFs have been replaced with unlocked versions.`);
    }
    else {
        console.log(`Unlocked PDFs saved with '-unlocked.pdf' suffix.`);
    }
    console.log(`\nNext steps:`);
    console.log(`  1. Run list-pdf-fields.ts on unlocked PDFs`);
    console.log(`  2. Create field mappings`);
    console.log(`  3. Implement fillable PDF generation\n`);
}
// Main execution
async function main() {
    const args = process.argv.slice(2);
    const overwrite = args.includes("--overwrite");
    if (overwrite) {
        console.log(`\n⚠️  WARNING: This will OVERWRITE original PDF files!`);
        console.log(`Original files will be replaced with unlocked versions.`);
        console.log(`Press Ctrl+C to cancel, or wait 3 seconds to continue...\n`);
        // Give user time to cancel
        await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    unlockAllPDFs(overwrite);
}
main();
