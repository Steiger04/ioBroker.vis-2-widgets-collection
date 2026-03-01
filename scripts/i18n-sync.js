#!/usr/bin/env node

/**
 * i18n Sync Tool for ioBroker vis-2-widgets-collection
 *
 * Synchronizes translation keys across all language files.
 * - Detects missing keys in non-reference languages
 * - Adds missing keys with placeholder values
 * - Reports sync status and statistics
 *
 * Usage:
 *   node scripts/i18n-sync.js [options]
 *
 * Options:
 *   --check      Only check, don't modify files (dry run)
 *   --fix        Add missing keys with placeholders
 *   --report     Show detailed report
 *   --help       Show help
 *
 * @module scripts/i18n-sync
 */

const fs = require('fs');
const path = require('path');

// Configuration
const I18N_DIR = path.join(__dirname, '..', 'src-widgets', 'src', 'i18n');
const REFERENCE_LANG = 'en';
const PLACEHOLDER_PREFIX = '[TODO] ';

// All supported languages
const LANGUAGES = [
    'de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'uk', 'zh-cn',
];

// Language names for display
const LANG_NAMES = {
    de: 'German',
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    it: 'Italian',
    nl: 'Dutch',
    pl: 'Polish',
    pt: 'Portuguese',
    ru: 'Russian',
    uk: 'Ukrainian',
    'zh-cn': 'Chinese (Simplified)',
};

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    return {
        fix: args.includes('--fix'),
        report: args.includes('--report'),
        help: args.includes('--help'),
    };
}

/**
 * Show help message
 */
function showHelp() {
    console.log(`
i18n Sync Tool - Synchronize translation keys across all language files

Usage:
  node scripts/i18n-sync.js [options]

Options:
  --fix        Add missing keys with placeholder values
  --report     Show detailed report of all keys
  --help       Show this help message

Examples:
  node scripts/i18n-sync.js             # Check for issues (default)
  node scripts/i18n-sync.js --fix       # Fix missing keys
  node scripts/i18n-sync.js --report    # Show detailed report
`);
}

/**
 * Read and parse a JSON file
 */
function readJsonFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error reading ${filePath}: ${error.message}`);
        return null;
    }
}

/**
 * Write JSON file with proper formatting
 */
function writeJsonFile(filePath, data) {
    const content = JSON.stringify(data, Object.keys(data).sort(), 4) + '\n';
    fs.writeFileSync(filePath, content, 'utf-8');
}

/**
 * Load all language files
 */
function loadAllLanguages() {
    const languages = {};
    let referenceData = null;

    for (const lang of LANGUAGES) {
        const filePath = path.join(I18N_DIR, `${lang}.json`);
        const data = readJsonFile(filePath);

        if (data === null) {
            console.error(`Failed to load ${lang}.json`);
            continue;
        }

        languages[lang] = {
            data,
            keys: Object.keys(data),
            filePath,
        };

        if (lang === REFERENCE_LANG) {
            referenceData = data;
        }
    }

    return { languages, referenceData };
}

/**
 * Find missing keys in a language compared to reference
 */
function findMissingKeys(langData, referenceKeys) {
    const langKeys = new Set(langData.keys);
    return referenceKeys.filter(key => !langKeys.has(key));
}

/**
 * Find extra keys in a language that don't exist in reference
 */
function findExtraKeys(langData, referenceKeys) {
    const refKeySet = new Set(referenceKeys);
    return langData.keys.filter(key => !refKeySet.has(key));
}

/**
 * Check all languages for sync issues
 */
function checkSync(languages, referenceKeys) {
    const results = {};

    for (const [lang, langData] of Object.entries(languages)) {
        if (lang === REFERENCE_LANG) continue;

        const missing = findMissingKeys(langData, referenceKeys);
        const extra = findExtraKeys(langData, referenceKeys);

        results[lang] = {
            missing,
            extra,
            totalKeys: langData.keys.length,
            refKeys: referenceKeys.length,
            isSynced: missing.length === 0 && extra.length === 0,
        };
    }

    return results;
}

/**
 * Fix missing keys by adding placeholders
 */
function fixMissingKeys(languages, referenceData, results) {
    let fixedCount = 0;

    for (const [lang, result] of Object.entries(results)) {
        if (result.missing.length === 0) continue;

        const langData = languages[lang];

        for (const key of result.missing) {
            const refValue = referenceData[key];
            // Add placeholder with reference value for translation
            langData.data[key] = `${PLACEHOLDER_PREFIX}${refValue}`;
            fixedCount++;
        }

        // Write updated file
        writeJsonFile(langData.filePath, langData.data);
        console.log(`  Fixed ${result.missing.length} missing keys in ${lang}.json`);
    }

    return fixedCount;
}

/**
 * Print sync status report
 */
function printReport(languages, results, referenceKeys) {
    console.log('\n=== i18n Sync Report ===\n');
    console.log(`Reference language: ${REFERENCE_LANG} (${LANG_NAMES[REFERENCE_LANG]})`);
    console.log(`Total keys in reference: ${referenceKeys.length}\n`);

    console.log('Language Status:');
    console.log('-'.repeat(60));

    let allSynced = true;

    for (const [lang, result] of Object.entries(results)) {
        const status = result.isSynced ? '✓ Synced' : '✗ Out of sync';
        const langName = LANG_NAMES[lang] || lang;
        console.log(`  ${lang.padEnd(6)} (${langName.padEnd(20)}): ${result.totalKeys} keys - ${status}`);

        if (!result.isSynced) {
            allSynced = false;
            if (result.missing.length > 0) {
                console.log(`         Missing: ${result.missing.length} keys`);
                if (result.missing.length <= 10) {
                    result.missing.forEach(k => console.log(`           - ${k}`));
                } else {
                    result.missing.slice(0, 5).forEach(k => console.log(`           - ${k}`));
                    console.log(`           ... and ${result.missing.length - 5} more`);
                }
            }
            if (result.extra.length > 0) {
                console.log(`         Extra: ${result.extra.length} keys`);
            }
        }
    }

    console.log('-'.repeat(60));

    if (allSynced) {
        console.log('\n✓ All language files are in sync!\n');
    } else {
        console.log('\n✗ Some language files need synchronization.');
        console.log('  Run with --fix to add missing keys with placeholders.\n');
    }

    return allSynced;
}

/**
 * Print detailed key report
 */
function printDetailedReport(languages, referenceKeys) {
    console.log('\n=== Detailed Key Report ===\n');

    for (const key of referenceKeys.sort()) {
        console.log(`\nKey: ${key}`);
        for (const lang of LANGUAGES) {
            if (!languages[lang]) continue;
            const value = languages[lang].data[key];
            const status = value ? '' : ' (MISSING)';
            const isPlaceholder = value && value.startsWith(PLACEHOLDER_PREFIX);
            const displayValue = isPlaceholder ? `[NEEDS TRANSLATION] ${value.slice(PLACEHOLDER_PREFIX.length)}` : value;
            console.log(`  ${lang}: ${displayValue}${status}${isPlaceholder ? ' [PLACEHOLDER]' : ''}`);
        }
    }
}

/**
 * Main function
 */
function main() {
    const args = parseArgs();

    if (args.help) {
        showHelp();
        process.exit(0);
    }

    console.log('i18n Sync Tool for ioBroker vis-2-widgets-collection\n');

    // Load all language files
    const { languages, referenceData } = loadAllLanguages();

    if (!referenceData) {
        console.error(`Failed to load reference language (${REFERENCE_LANG})`);
        process.exit(1);
    }

    const referenceKeys = Object.keys(referenceData);

    // Check sync status
    const results = checkSync(languages, referenceKeys);

    // Fix mode
    if (args.fix) {
        console.log('Fixing missing keys...\n');
        const fixedCount = fixMissingKeys(languages, referenceData, results);
        console.log(`\nTotal keys fixed: ${fixedCount}`);

        // Re-check after fixing
        const { languages: updatedLanguages } = loadAllLanguages();
        const updatedResults = checkSync(updatedLanguages, referenceKeys);
        printReport(updatedLanguages, updatedResults, referenceKeys);
        process.exit(0);
    }

    // Detailed report mode
    if (args.report) {
        printDetailedReport(languages, referenceKeys);
        process.exit(0);
    }

    // Check mode (default)
    const allSynced = printReport(languages, results, referenceKeys);

    if (!allSynced) {
        process.exit(1); // Exit with error code for CI
    }

    process.exit(0);
}

main();
