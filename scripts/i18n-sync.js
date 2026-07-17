#!/usr/bin/env node

// Load environment variables from .env file without emitting startup output.
require('dotenv').config({ quiet: true });

/**
 * i18n Sync Tool for ioBroker vis-2-widgets-collection
 *
 * Synchronizes and translates i18n keys across all language files.
 * - Detects missing keys in non-reference languages
 * - Adds missing keys with placeholder values
 * - Auto-translates via z.ai API (per-language mode)
 * - Reports sync status and statistics
 *
 * Usage:
 *   node scripts/i18n-sync.js [options]
 *
 * Options:
 *   --todos              Add missing keys with [TODO] placeholder prefix
 *   --fix                Auto-translate ALL [TODO] entries via z.ai (per-language)
 *   --model <model>      LLM model for translation (default: glm-5.2)
 *   --sync               Reconcile keys, then translate all TODO entries
 *   --dry-run            Show what would happen without making changes
 *   --verbose            Show detailed logs during execution
 *   --report             Show detailed report of all keys
 *   --help               Show this help message
 *
 * Environment Variables:
 *   ZAI_API_KEY          z.ai API key for translation (required for --fix)
 *
 * @module scripts/i18n-sync
 */

const fs = require('fs');
const path = require('path');

// Configuration
const I18N_DIR = path.join(__dirname, '..', 'src-widgets', 'src', 'i18n');
const REFERENCE_LANG = 'en';
const PLACEHOLDER_PREFIX = '[TODO] ';

// ============================================
// Constants
// ============================================
const API_TIMEOUT_MS = 600_000;
const VALID_MODELS = ['glm-5.2', 'glm-4.7-flash', 'glm-4.7-flashx', 'glm-4.6', 'glm-4.5'];
const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
const PROGRESS_FEEDBACK_INTERVAL_MS = 30000; // Show progress every 30 seconds

// ============================================
// Z.AI API Configuration
// ============================================
const ZAI_CONFIG = {
    apiKey: process.env.ZAI_API_KEY || '',
    baseUrl: 'https://api.z.ai/api/coding/paas/v4',
    model: 'glm-5.2',
};
// ============================================

// All supported languages
const LANGUAGES = ['de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'uk', 'zh-cn'];

// Language names for display and translation
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

// Global verbose flag
let verboseMode = false;

// ============================================
// Type Definitions (JSDoc)
// ============================================

/**
 * @typedef {Object} SyncResult
 * @property {string[]} missing - Keys missing in this language
 * @property {string[]} extra - Extra keys not in reference
 * @property {number} totalKeys - Total keys in this language
 * @property {number} refKeys - Total keys in reference language
 * @property {boolean} isSynced - Whether language is in sync
 */

/**
 * @typedef {Object} LanguageData
 * @property {Object} data - The JSON data object
 * @property {string[]} keys - Array of keys in the language file
 * @property {string} filePath - Path to the language file
 */

/**
 * @typedef {Object} TodoEntry
 * @property {string} key - The translation key
 * @property {string} originalText - The text to translate (without [TODO] prefix)
 */

/**
 * @typedef {Object} CliArgs
 * @property {boolean} todos - Add missing keys with [TODO] placeholder
 * @property {boolean} fix - Auto-translate [TODO] entries
 * @property {boolean} dedupe - Remove duplicate keys from all language files
 * @property {boolean} sync - Reconcile keys, then translate all TODO entries
 * @property {string} model - LLM model for translation
 * @property {boolean} dryRun - Preview changes without making them
 * @property {boolean} verbose - Show detailed logs
 * @property {boolean} report - Show detailed report
 * @property {boolean} help - Show help message
 */

/**
 * @typedef {Object} TranslationResult
 * @property {number} translatedCount - Number of successfully translated entries
 * @property {number} errorCount - Number of failed translations
 * @property {number} [plannedCount] - Number of entries planned for translation in dry-run mode
 * @property {boolean} [dryRun] - Whether this was a dry run
 */

/**
 * Check Node.js version for fetch support
 */
function checkNodeVersion() {
    const nodeVersion = process.versions.node;
    const majorVersion = parseInt(nodeVersion.split('.')[0], 10);

    if (majorVersion < 18) {
        console.error(`❌ Node.js 18+ required for native fetch support.`);
        console.error(`   Current version: ${nodeVersion}`);
        console.error(`   Please upgrade Node.js to use this tool.`);
        process.exit(1);
    }
}

/**
 * Parse command line arguments
 * @returns {CliArgs}
 */
function parseArgs() {
    const args = process.argv.slice(2);

    // Extract --model parameter
    let model = ZAI_CONFIG.model; // Default from config
    const modelIndex = args.indexOf('--model');
    if (modelIndex !== -1 && args[modelIndex + 1]) {
        model = args[modelIndex + 1];
    }

    return {
        todos: args.includes('--todos'),
        fix: args.includes('--fix'),
        dedupe: args.includes('--dedupe'),
        sync: args.includes('--sync'),
        model: model,
        dryRun: args.includes('--dry-run'),
        verbose: args.includes('--verbose'),
        report: args.includes('--report'),
        help: args.includes('--help'),
    };
}

/**
 * Validate model parameter
 * @param {string} model
 * @returns {boolean}
 */
function validateModel(model) {
    if (!VALID_MODELS.includes(model)) {
        console.error(`❌ Invalid model: ${model}`);
        console.error(`   Valid models: ${VALID_MODELS.join(', ')}`);
        return false;
    }
    return true;
}

/**
 * Show help message
 */
function showHelp() {
    console.log(`
╔════════════════════════════════════════════════════════════════════╗
║                i18n Sync Tool - Translation Manager                 ║
╠════════════════════════════════════════════════════════════════════╣
║   Synchronizes and translates i18n keys across all languages       ║
╚════════════════════════════════════════════════════════════════════╝

Usage:
  node scripts/i18n-sync.js [options]

Options:
  --todos              Add missing keys with [TODO] placeholder prefix
  --fix                Auto-translate ALL [TODO] entries via z.ai (per-language)
  --dedupe             Remove duplicate keys from all language files
    --model <model>      LLM model for translation (default: glm-5.2)
    --sync               Reconcile language keys, then translate all TODO entries
  --dry-run            Show what would happen without making changes
  --verbose            Show detailed logs during execution
  --report             Show detailed report of all keys
  --help               Show this help message

Available Models:
    glm-5.2             Best quality (default)
  glm-4.7-flash       Free tier (1 concurrent request)
  glm-4.7-flashx      Fast + cheap ($0.07/$0.40)
  glm-4.6             Balanced performance
  glm-4.5             Standard

Environment Variables:
  ZAI_API_KEY         Your z.ai API key (required for --fix)

Examples:
  node scripts/i18n-sync.js                                # Check for sync issues
  node scripts/i18n-sync.js --todos                        # Mark missing keys
  node scripts/i18n-sync.js --todos --dry-run              # Preview TODO additions
    node scripts/i18n-sync.js --fix                          # Auto-translate (glm-5.2)
  ZAI_API_KEY=xxx node scripts/i18n-sync.js --fix          # With API key
  node scripts/i18n-sync.js --fix --model glm-4.7-flash    # Translate with free model
  node scripts/i18n-sync.js --fix --dry-run                # Preview translations
  node scripts/i18n-sync.js --fix --verbose                # Translate with details
    node scripts/i18n-sync.js --sync                         # Fully synchronize and translate
    node scripts/i18n-sync.js --sync --dry-run               # Preview a full synchronization
  node scripts/i18n-sync.js --report                       # Show detailed report
  node scripts/i18n-sync.js --dedupe                       # Remove duplicate keys
  node scripts/i18n-sync.js --dedupe --dry-run             # Preview duplicate removal
  node scripts/i18n-sync.js --dedupe --verbose             # Show all duplicates

Configuration:
  Set your z.ai API key via environment variable:

  Windows (PowerShell):
    $env:ZAI_API_KEY = "your-api-key-here"

  Linux/macOS:
    export ZAI_API_KEY="your-api-key-here"

Per-Language Mode:
  --fix uses ONE API call per language for reliable translations.
  This avoids token limits and provides better error isolation.

Dry-Run Mode:
  Combine --dry-run with --todos, --fix or --dedupe to preview changes
  without modifying files or making API calls.

Dedupe Mode:
  --dedupe removes duplicate keys from all language files.
  When duplicates exist, the LAST value is kept (JSON.parse behavior).
  Exit code 1 is returned if any duplicates were found and removed.
`);
}

/**
 * Verbose logging helper
 * @param {...*} args
 */
function verboseLog(...args) {
    if (verboseMode) {
        console.log('  🔍', ...args);
    }
}

/**
 * Show ASCII progress bar
 * @param {number} current
 * @param {number} total
 * @param {string} label
 */
function showProgressBar(current, total, label = '') {
    if (total === 0) return; // Guard against division by zero
    const percent = Math.round((current / total) * 100);
    const barLength = 30;
    const filled = Math.round((percent / 100) * barLength);
    const empty = barLength - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);

    process.stdout.write(`\r  [${bar}] ${percent}% (${current}/${total}) ${label}`);

    if (current === total) {
        process.stdout.write('\n');
    }
}

/**
 * Read and parse a JSON file
 * @param {string} filePath
 * @returns {Object}
 * @throws {Error} If file cannot be read or parsed
 */
function readJsonFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(content);
    } catch (error) {
        throw new Error(`Failed to parse JSON in ${filePath}: ${error.message}`);
    }
}

/**
 * Write JSON file with proper formatting
 * @param {string} filePath
 * @param {Object} data
 */
function writeJsonFile(filePath, data) {
    const content = JSON.stringify(data, Object.keys(data).sort(), 4) + '\n';
    fs.writeFileSync(filePath, content, 'utf-8');
}

/**
 * Load all language files
 * @returns {{languages: Object<string, LanguageData>, referenceData: Object}}
 */
function loadAllLanguages() {
    const languages = {};
    let referenceData = null;

    for (const lang of LANGUAGES) {
        const filePath = path.join(I18N_DIR, `${lang}.json`);

        let data;
        try {
            data = readJsonFile(filePath);
        } catch (error) {
            console.error(`Error loading ${lang}.json: ${error.message}`);
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
 * @param {LanguageData} langData
 * @param {string[]} referenceKeys
 * @returns {string[]}
 */
function findMissingKeys(langData, referenceKeys) {
    const langKeys = new Set(langData.keys);
    return referenceKeys.filter(key => !langKeys.has(key));
}

/**
 * Find extra keys in a language that don't exist in reference
 * @param {LanguageData} langData
 * @param {string[]} referenceKeys
 * @returns {string[]}
 */
function findExtraKeys(langData, referenceKeys) {
    const refKeySet = new Set(referenceKeys);
    return langData.keys.filter(key => !refKeySet.has(key));
}

/**
 * Check all languages for sync issues
 * @param {Object<string, LanguageData>} languages
 * @param {string[]} referenceKeys
 * @returns {Object<string, SyncResult>}
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
 * Find all TODO entries, grouped by language
 * @param {Object<string, LanguageData>} languages
 * @returns {{todoByLang: Object<string, TodoEntry[]>, totalCount: number}}
 */
function findAllTodoEntries(languages) {
    const todoByLang = {};
    let totalCount = 0;

    for (const [lang, langData] of Object.entries(languages)) {
        if (lang === REFERENCE_LANG) continue;

        const entries = [];
        for (const [key, value] of Object.entries(langData.data)) {
            if (typeof value === 'string' && value.startsWith(PLACEHOLDER_PREFIX)) {
                entries.push({
                    key,
                    originalText: value.slice(PLACEHOLDER_PREFIX.length),
                });
            }
        }

        if (entries.length > 0) {
            todoByLang[lang] = entries;
            totalCount += entries.length;
        }
    }

    return { todoByLang, totalCount };
}

/**
 * @typedef {Object} DuplicateInfo
 * @property {string} key - The duplicate key
 * @property {number[]} lines - Line numbers where the key appears
 * @property {number} count - Number of occurrences
 */

/**
 * @typedef {Object} DedupeResult
 * @property {number} removed - Number of duplicate keys removed
 * @property {DuplicateInfo[]} duplicates - Array of duplicate information
 * @property {boolean} [dryRun] - Whether this was a dry run
 */

/**
 * Find duplicate keys in a JSON file by analyzing raw content
 * @param {string} filePath - Path to the JSON file
 * @returns {{duplicates: DuplicateInfo[], rawContent: string}}
 */
function findDuplicateKeys(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const keyOccurrences = new Map();
    const regex = /^\s*"([^"]+)":\s*"/;

    lines.forEach((line, index) => {
        const match = line.match(regex);
        if (match) {
            const key = match[1];
            if (!keyOccurrences.has(key)) {
                keyOccurrences.set(key, []);
            }
            keyOccurrences.get(key).push(index + 1);
        }
    });

    const duplicates = [];
    keyOccurrences.forEach((occurrenceLines, key) => {
        if (occurrenceLines.length > 1) {
            duplicates.push({ key, lines: occurrenceLines, count: occurrenceLines.length });
        }
    });

    return { duplicates, rawContent: content };
}

/**
 * Remove duplicate keys from a single language file
 * @param {string} filePath - Path to the JSON file
 * @param {boolean} dryRun - Only simulate, don't write
 * @param {boolean} verbose - Show detailed logs
 * @returns {DedupeResult}
 */
function dedupeLanguageFile(filePath, dryRun = false, verbose = false) {
    const { duplicates } = findDuplicateKeys(filePath);

    if (duplicates.length === 0) {
        return { removed: 0, duplicates: [] };
    }

    if (dryRun) {
        return { removed: duplicates.length, duplicates, dryRun: true };
    }

    // Read and rewrite the file - JSON.parse keeps the LAST value for duplicate keys
    const data = readJsonFile(filePath);
    writeJsonFile(filePath, data);

    return { removed: duplicates.length, duplicates };
}

/**
 * Dedupe all language files
 * @param {Object<string, LanguageData>} languages - Language data object
 * @param {boolean} dryRun - Only simulate
 * @param {boolean} verbose - Show detailed logs
 * @returns {Object<string, DedupeResult>} - Results per language
 */
function dedupeAllLanguages(languages, dryRun = false, verbose = false) {
    const results = {};

    for (const lang of Object.keys(languages)) {
        const langData = languages[lang];
        const result = dedupeLanguageFile(langData.filePath, dryRun, verbose);
        results[lang] = result;

        if (verbose && result.duplicates.length > 0) {
            console.log(`\n  ${lang}.json: Found ${result.duplicates.length} duplicate keys`);
            for (const dup of result.duplicates) {
                console.log(`    - "${dup.key}" appears ${dup.count} times (lines: ${dup.lines.join(', ')})`);
            }
        }
    }

    return results;
}

/**
 * Print dedupe report
 * @param {Object<string, DedupeResult>} results - Dedupe results per language
 * @param {boolean} dryRun - Whether this was a dry run
 */
function printDedupeReport(results, dryRun = false) {
    console.log('\n=== i18n Dedupe Report ===\n');

    let totalDuplicates = 0;
    const languagesWithDuplicates = [];

    for (const [lang, result] of Object.entries(results)) {
        if (result.removed > 0) {
            totalDuplicates += result.removed;
            languagesWithDuplicates.push(lang);

            const langName = LANG_NAMES[lang] || lang;
            console.log(`  ${lang} (${langName}): ${result.removed} duplicate keys`);

            for (const dup of result.duplicates) {
                console.log(`    - "${dup.key}" (${dup.count} occurrences)`);
            }
        }
    }

    console.log('-'.repeat(60));

    if (totalDuplicates === 0) {
        console.log('\n✓ No duplicate keys found in any language file!\n');
    } else {
        console.log(`\n📊 Summary:`);
        console.log(`   Languages affected: ${languagesWithDuplicates.length}`);
        console.log(`   Total duplicate keys: ${totalDuplicates}`);

        if (dryRun) {
            console.log(`\n🔍 DRY-RUN MODE - No files were modified`);
            console.log(`   Run without --dry-run to remove duplicates\n`);
        } else {
            console.log(`   ✓ All duplicate keys removed (last value kept)\n`);
        }
    }

    return totalDuplicates;
}

/**
 * Sleep helper for retry delays
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Robust JSON parsing for API responses
 * Handles: pure JSON, markdown code blocks, additional explanations
 * @param {string} content
 * @returns {Object}
 * @throws {Error} If content cannot be parsed as JSON
 */
function parseJsonRobustly(content) {
    // Versuch 1: Direktes JSON
    try {
        return JSON.parse(content);
    } catch (e) {
        // Weiter zu Versuch 2
    }

    // Versuch 2: JSON aus Markdown-Code-Block extrahieren
    const codeBlockMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (codeBlockMatch) {
        try {
            return JSON.parse(codeBlockMatch[1].trim());
        } catch (e) {
            // Weiter zu Versuch 3
        }
    }

    // Versuch 3: Erstes JSON-Objekt im Text finden
    const jsonObjectMatch = content.match(/\{[\s\S]*\}/);
    if (jsonObjectMatch) {
        try {
            return JSON.parse(jsonObjectMatch[0]);
        } catch (e) {
            // Weiter zu Fehler
        }
    }

    throw new Error(`Failed to parse API response as JSON. Response preview: ${content.substring(0, 200)}...`);
}

/**
 * Translate texts for a single language with retry logic and progress feedback
 * @param {string} lang - Target language code
 * @param {string[]} texts - Array of texts to translate
 * @param {string} model - LLM model
 * @param {boolean} verbose - Verbose logging
 * @returns {Promise<string[]>} - Array of translated texts
 */
async function translateSingleLanguage(lang, texts, model, verbose = verboseMode) {
    const langName = LANG_NAMES[lang] || lang;

    const prompt = `You are a professional UI/software translator.

TASK: Translate the following ${texts.length} English texts to ${langName} (${lang}).

INPUT: A JSON array of English strings.
OUTPUT: A JSON array of translated strings in the SAME ORDER.

CRITICAL RULES:
1. Return ONLY a valid JSON array - no markdown, no code blocks, no explanations
2. Output array MUST have EXACTLY ${texts.length} elements
3. Maintain exact same order as input
4. Preserve placeholders exactly: {0}, {count}, %s, {{variable}}, %d
5. Keep technical terms, brand names, and proper nouns untranslated
6. Translate naturally for UI/software context (concise, user-friendly)

Input JSON array:
${JSON.stringify(texts)}`;

    let lastError = null;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        if (verbose && attempt > 1) {
            console.log(`    🔄 Retry attempt ${attempt}/${MAX_RETRIES} for ${lang}...`);
        }

        // Progress feedback during long waits
        const startTime = Date.now();
        let progressIntervalId = null;

        const startProgressFeedback = () => {
            progressIntervalId = setInterval(() => {
                const elapsed = Math.round((Date.now() - startTime) / 1000);
                console.log(`    ⏳ Still waiting for API response (${elapsed}s elapsed)...`);
            }, PROGRESS_FEEDBACK_INTERVAL_MS);
        };

        const stopProgressFeedback = () => {
            if (progressIntervalId) {
                clearInterval(progressIntervalId);
                progressIntervalId = null;
            }
        };

        // Timeout with AbortController
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT_MS);

        let response;
        try {
            if (verbose) {
                console.log(`    📤 Sending translation request to API...`);
            }
            startProgressFeedback();

            response = await fetch(`${ZAI_CONFIG.baseUrl}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ZAI_CONFIG.apiKey}`,
                },
                body: JSON.stringify({
                    model: model,
                    messages: [
                        {
                            role: 'system',
                            content:
                                'You are a professional translator. Always respond with valid JSON only. No markdown code blocks, no explanations. Your response must be a complete, valid JSON array.',
                        },
                        { role: 'user', content: prompt },
                    ],
                    temperature: 0.3,
                    stream: false,
                }),
                signal: controller.signal,
            });
        } catch (error) {
            stopProgressFeedback();
            clearTimeout(timeoutId);

            if (error.name === 'AbortError') {
                lastError = new Error(`API request timed out after ${API_TIMEOUT_MS / 1000} seconds`);
            } else {
                lastError = error;
            }

            // Check if we should retry
            if (attempt < MAX_RETRIES && isRetryableError(error)) {
                const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1); // Exponential backoff
                if (verbose) {
                    console.log(`    ⚠️ Request failed, retrying in ${delay / 1000}s...`);
                }
                await sleep(delay);
                continue;
            }
            throw lastError;
        }

        stopProgressFeedback();
        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorText = await response.text();
            lastError = new Error(`Z.AI API error: ${response.status} - ${errorText}`);

            // Retry on server errors (5xx) or rate limiting (429)
            if (attempt < MAX_RETRIES && (response.status >= 500 || response.status === 429)) {
                const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
                if (verbose) {
                    console.log(`    ⚠️ API error ${response.status}, retrying in ${delay / 1000}s...`);
                }
                await sleep(delay);
                continue;
            }
            throw lastError;
        }

        const data = await response.json();
        const content = data.choices[0]?.message?.content?.trim();

        if (!content) {
            lastError = new Error('Empty response from API - no content received');

            if (attempt < MAX_RETRIES) {
                const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
                if (verbose) {
                    console.log(`    ⚠️ Empty response, retrying in ${delay / 1000}s...`);
                }
                await sleep(delay);
                continue;
            }
            throw lastError;
        }

        if (verbose) {
            console.log(`    📥 Response received (${data.usage?.total_tokens || 'N/A'} tokens)`);
        }

        // Parse JSON response
        let parsed;
        try {
            parsed = parseJsonRobustly(content);
        } catch (parseError) {
            lastError = new Error(`Failed to parse API response: ${parseError.message}`);

            if (attempt < MAX_RETRIES) {
                const delay = RETRY_DELAY_MS * Math.pow(2, attempt - 1);
                if (verbose) {
                    console.log(`    ⚠️ Parse error, retrying in ${delay / 1000}s...`);
                }
                await sleep(delay);
                continue;
            }
            throw lastError;
        }

        // Validate it's an array with correct length
        if (!Array.isArray(parsed)) {
            throw new Error(`Expected JSON array, got ${typeof parsed}`);
        }
        if (parsed.length !== texts.length) {
            throw new Error(`Array length mismatch: expected ${texts.length}, got ${parsed.length}`);
        }

        return parsed;
    }

    throw lastError || new Error('Translation failed after all retries');
}

/**
 * Check if an error is retryable (network issues, timeouts)
 * @param {Error} error
 * @returns {boolean}
 */
function isRetryableError(error) {
    // Network errors, abort errors (timeouts), and fetch failures are retryable
    if (!error) return false;
    const retryableCodes = ['ECONNRESET', 'ENOTFOUND', 'ECONNREFUSED', 'ETIMEDOUT', 'EAI_AGAIN'];
    return (
        error.name === 'AbortError' ||
        error.code === 'UND_ERR_CONNECT_TIMEOUT' ||
        retryableCodes.includes(error.code) ||
        (error.message &&
            (error.message.includes('network') ||
                error.message.includes('ECONNRESET') ||
                error.message.includes('timeout')))
    );
}

/**
 * Per-Language Batch translation: One API call per language
 * @param {Object<string, TodoEntry[]>} todoByLang
 * @param {string} model
 * @param {boolean} verbose
 * @returns {Promise<Object>}
 */
async function perLanguageTranslate(todoByLang, model, verbose = verboseMode) {
    if (Object.keys(todoByLang).length === 0) {
        return {};
    }

    // Prüfe API-Key
    if (!ZAI_CONFIG.apiKey) {
        throw new Error('Z.AI API key not configured. Please set ZAI_API_KEY environment variable.');
    }

    const languages = Object.keys(todoByLang);
    const totalTexts = Object.values(todoByLang).flat().length;

    console.log(`\n🚀 Starting per-language translation...`);
    console.log(`   Model: ${model}`);
    console.log(`   Languages: ${languages.length}`);
    console.log(`   Total texts: ${totalTexts}`);
    console.log(`   API calls: ${languages.length}\n`);

    const translations = {};
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < languages.length; i++) {
        const lang = languages[i];
        const langName = LANG_NAMES[lang] || lang;
        const entries = todoByLang[lang];
        const texts = entries.map(e => e.originalText);

        console.log(`  [${i + 1}/${languages.length}] Translating ${lang} (${langName}): ${texts.length} texts...`);

        try {
            const translatedTexts = await translateSingleLanguage(lang, texts, model, verbose);
            translations[lang] = translatedTexts;
            successCount += texts.length;
            console.log(`    ✓ ${lang} completed successfully`);
        } catch (error) {
            console.error(`    ✗ ${lang} failed: ${error.message}`);
            translations[lang] = null; // Mark as failed
            errorCount += texts.length;
        }
    }

    console.log(`\n  📊 Translation Progress: ${successCount}/${totalTexts} texts`);

    if (errorCount > 0) {
        console.log(`  ⚠️  ${errorCount} texts failed to translate`);
    }

    return translations;
}

/**
 * Fix missing keys by adding placeholders
 * @param {Object<string, LanguageData>} languages
 * @param {Object} referenceData
 * @param {Object<string, SyncResult>} results
 * @param {boolean} dryRun
 * @param {boolean} verbose
 * @returns {number}
 */
function fixMissingKeys(languages, referenceData, results, dryRun = false, verbose = false) {
    let fixedCount = 0;

    for (const [lang, result] of Object.entries(results)) {
        if (result.missing.length === 0) continue;

        const langData = languages[lang];

        if (dryRun) {
            console.log(`\n  📋 Would add ${result.missing.length} keys to ${lang}.json:`);
            for (const key of result.missing) {
                const refValue = referenceData[key];
                console.log(`     + ${key}: "${PLACEHOLDER_PREFIX}${refValue}"`);
                fixedCount++;
            }
        } else {
            for (const key of result.missing) {
                const refValue = referenceData[key];
                langData.data[key] = `${PLACEHOLDER_PREFIX}${refValue}`;
                fixedCount++;

                if (verbose) {
                    console.log(`  + [${lang}] ${key}: "${PLACEHOLDER_PREFIX}${refValue}"`);
                }
            }

            writeJsonFile(langData.filePath, langData.data);
            console.log(`  ✓ Fixed ${result.missing.length} missing keys in ${lang}.json`);
        }
    }

    return fixedCount;
}

/**
 * Reconcile every language with the reference keys in memory.
 *
 * The resulting language data can be passed to the translation step. In dry-run
 * mode this makes the complete planned translation set visible without writing.
 *
 * @param {Object<string, LanguageData>} languages
 * @param {Object} referenceData
 * @param {Object<string, SyncResult>} results
 * @param {boolean} dryRun
 * @param {boolean} verbose
 * @returns {{added: number, removed: number}}
 */
function reconcileLanguageKeys(languages, referenceData, results, dryRun = false, verbose = false) {
    let added = 0;
    let removed = 0;

    for (const [lang, result] of Object.entries(results)) {
        const langData = languages[lang];
        let changed = false;

        for (const key of result.missing) {
            langData.data[key] = `${PLACEHOLDER_PREFIX}${referenceData[key]}`;
            added++;
            changed = true;

            if (verbose) {
                console.log(`  + [${lang}] ${key}: "${PLACEHOLDER_PREFIX}${referenceData[key]}"`);
            }
        }

        for (const key of result.extra) {
            delete langData.data[key];
            removed++;
            changed = true;

            if (verbose) {
                console.log(`  - [${lang}] ${key}`);
            }
        }

        if (changed && !dryRun) {
            writeJsonFile(langData.filePath, langData.data);
        }
    }

    return { added, removed };
}

/**
 * Main function for --fix with Ultra-Batch + Progress-Bar
 * @param {Object<string, LanguageData>} languages
 * @param {string} model
 * @param {boolean} dryRun
 * @param {boolean} verbose
 * @returns {Promise<TranslationResult>}
 */
async function fixWithTranslation(languages, model, dryRun = false, verbose = false) {
    // Step 1: Alle TODO-Einträge finden
    const { todoByLang, totalCount } = findAllTodoEntries(languages);

    if (totalCount === 0) {
        console.log('✓ No TODO entries found - all translations are complete!');
        return { translatedCount: 0, errorCount: 0 };
    }

    const langCount = Object.keys(todoByLang).length;
    console.log(`\n📋 Found ${totalCount} TODO entries in ${langCount} languages`);

    // Dry-Run: Nur anzeigen, was übersetzt würde
    if (dryRun) {
        console.log('\n🔍 DRY-RUN MODE - No changes will be made\n');
        console.log('Would translate the following:\n');

        for (const [lang, entries] of Object.entries(todoByLang)) {
            const langName = LANG_NAMES[lang] || lang;
            console.log(`  ${lang} (${langName}): ${entries.length} entries`);

            if (verbose) {
                for (const entry of entries) {
                    console.log(`    - ${entry.key}: "${entry.originalText}"`);
                }
            }
        }

        console.log(`\n  📊 Summary:`);
        console.log(`     Total languages: ${langCount}`);
        console.log(`     Total entries: ${totalCount}`);
        console.log(`     Model: ${model}`);
        console.log(`     API calls: ${langCount} (per-language mode)`);

        return { translatedCount: 0, errorCount: 0, plannedCount: totalCount, dryRun: true };
    }

    // Step 2: Per-Language-Übersetzung (1 API-Call pro Sprache)
    let translations = {};
    try {
        translations = await perLanguageTranslate(todoByLang, model, verbose);
        console.log('✓ All translations received!\n');
    } catch (error) {
        console.error(`\n✗ Translation failed: ${error.message}`);
        return { translatedCount: 0, errorCount: totalCount };
    }

    // Step 3: Übersetzungen anwenden mit Progress-Bar
    console.log('📝 Applying translations...\n');

    let translatedCount = 0;
    let errorCount = 0;
    let processed = 0;

    for (const [lang, entries] of Object.entries(todoByLang)) {
        const langTranslations = translations[lang];

        if (!Array.isArray(langTranslations)) {
            console.error(`  ✗ ${lang}: Invalid translation format (expected array)`);
            errorCount += entries.length;
            processed += entries.length;
            showProgressBar(processed, totalCount, `${lang} (failed)`);
            continue;
        }

        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const translatedText = langTranslations[i];

            if (translatedText && typeof translatedText === 'string') {
                languages[lang].data[entry.key] = translatedText;
                translatedCount++;

                if (verbose) {
                    console.log(`    ✓ [${lang}] ${entry.key}: "${translatedText}"`);
                }
            } else {
                console.error(`    ✗ ${lang}.${entry.key}: Missing translation`);
                errorCount++;
            }

            processed++;
            if (!verbose) {
                showProgressBar(processed, totalCount, lang);
            }
        }

        // Datei schreiben nach jeder Sprache
        writeJsonFile(languages[lang].filePath, languages[lang].data);

        if (!verbose) {
            console.log(`  ✓ Written ${lang}.json`);
        }
    }

    console.log('\n✓ All language files updated!\n');

    return { translatedCount, errorCount };
}

/**
 * Print sync status report
 * @param {Object<string, LanguageData>} languages
 * @param {Object<string, SyncResult>} results
 * @param {string[]} referenceKeys
 * @returns {boolean}
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
        console.log('  Run with --todos to mark missing keys, or --fix to auto-translate.');
        console.log('  Add --dry-run to preview changes, or --verbose for detailed logs.\n');
    }

    return allSynced;
}

/**
 * Print detailed key report
 * @param {Object<string, LanguageData>} languages
 * @param {string[]} referenceKeys
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
            const displayValue = isPlaceholder
                ? `[NEEDS TRANSLATION] ${value.slice(PLACEHOLDER_PREFIX.length)}`
                : value;
            console.log(`  ${lang}: ${displayValue}${status}${isPlaceholder ? ' [PLACEHOLDER]' : ''}`);
        }
    }
}

/**
 * Main function
 */
async function main() {
    // Check Node.js version first
    checkNodeVersion();

    const args = parseArgs();

    // Set global verbose flag
    verboseMode = args.verbose;

    if (args.help) {
        showHelp();
        process.exit(0);
    }

    // Validate the model only when a translation request can be made.
    if ((args.fix || args.sync) && !validateModel(args.model)) {
        process.exit(1);
    }

    console.log('i18n Sync Tool for ioBroker vis-2-widgets-collection\n');

    const { languages, referenceData } = loadAllLanguages();

    if (!referenceData) {
        console.error(`Failed to load reference language (${REFERENCE_LANG})`);
        process.exit(1);
    }

    const referenceKeys = Object.keys(referenceData);
    const results = checkSync(languages, referenceKeys);

    // Todos mode (ehemals --fix)
    if (args.todos) {
        if (args.dryRun) {
            console.log('🔍 DRY-RUN MODE - No changes will be made\n');
        }
        console.log(`${args.dryRun ? 'Would add' : 'Adding'} TODO placeholders for missing keys...\n`);

        const fixedCount = fixMissingKeys(languages, referenceData, results, args.dryRun, args.verbose);

        console.log(`\n${args.dryRun ? 'Would mark' : '✓ Marked'} ${fixedCount} keys with [TODO]`);

        if (!args.dryRun && fixedCount > 0) {
            console.log('  Run with --fix to translate them automatically.');
            const { languages: updatedLanguages } = loadAllLanguages();
            const updatedResults = checkSync(updatedLanguages, referenceKeys);
            printReport(updatedLanguages, updatedResults, referenceKeys);
        }
        process.exit(0);
    }

    // Dedupe mode - remove duplicate keys
    if (args.dedupe) {
        if (args.dryRun) {
            console.log('🔍 DRY-RUN MODE - No changes will be made\n');
        }
        console.log('🧹 Checking for duplicate keys in all language files...\n');

        const dedupeResults = dedupeAllLanguages(languages, args.dryRun, args.verbose);
        const totalDuplicates = printDedupeReport(dedupeResults, args.dryRun);

        // Exit with code 1 if duplicates were found (for CI/CD)
        process.exit(totalDuplicates > 0 ? 1 : 0);
    }

    // Full synchronization mode: reconcile the language key sets before translation.
    if (args.sync) {
        if (args.dryRun) {
            console.log('🔍 DRY-RUN MODE - No changes will be made\n');
        }
        console.log('🔄 Reconciling language keys...\n');

        const reconciliation = reconcileLanguageKeys(languages, referenceData, results, args.dryRun, args.verbose);
        console.log(`  ${args.dryRun ? 'Would add' : 'Added'} ${reconciliation.added} missing keys`);
        console.log(`  ${args.dryRun ? 'Would remove' : 'Removed'} ${reconciliation.removed} extra keys\n`);

        console.log('🔄 Auto-translating [TODO] entries via z.ai (per-language mode)...\n');
        console.log(`   Model: ${args.model}`);

        const result = await fixWithTranslation(languages, args.model, args.dryRun, args.verbose);

        console.log('═══════════════════════════════════════');
        console.log('       📊 Synchronization Summary');
        console.log('═══════════════════════════════════════');
        console.log(`  ${args.dryRun ? 'Would add' : 'Added'} missing keys: ${reconciliation.added}`);
        console.log(`  ${args.dryRun ? 'Would remove' : 'Removed'} extra keys: ${reconciliation.removed}`);
        const translationCount = result.dryRun ? result.plannedCount : result.translatedCount;
        console.log(`  ${args.dryRun ? 'Would translate' : 'Successfully translated'}: ${translationCount}`);
        if (result.errorCount > 0) {
            console.log(`  ✗ Failed: ${result.errorCount}`);
        }
        console.log('═══════════════════════════════════════\n');

        if (!args.dryRun) {
            const { languages: updatedLanguages, referenceData: updatedReferenceData } = loadAllLanguages();
            const updatedResults = checkSync(updatedLanguages, Object.keys(updatedReferenceData));
            printReport(updatedLanguages, updatedResults, Object.keys(updatedReferenceData));
        }

        process.exit(result.errorCount > 0 ? 1 : 0);
    }

    // Fix mode with per-language translation
    if (args.fix) {
        if (args.dryRun) {
            console.log('🔍 DRY-RUN MODE - No changes will be made\n');
        }
        console.log('🔄 Auto-translating [TODO] entries via z.ai (per-language mode)...\n');
        console.log(`   Model: ${args.model}`);

        const result = await fixWithTranslation(languages, args.model, args.dryRun, args.verbose);

        console.log('═══════════════════════════════════════');
        console.log('       📊 Translation Summary');
        console.log('═══════════════════════════════════════');

        if (result.dryRun) {
            console.log('  Mode: DRY-RUN (no changes made)');
        } else {
            console.log(`  ✓ Successfully translated: ${result.translatedCount}`);
            if (result.errorCount > 0) {
                console.log(`  ✗ Failed: ${result.errorCount}`);
            }
        }
        console.log('═══════════════════════════════════════\n');

        if (!args.dryRun && result.translatedCount > 0) {
            const { languages: updatedLanguages } = loadAllLanguages();
            const updatedResults = checkSync(updatedLanguages, referenceKeys);
            printReport(updatedLanguages, updatedResults, referenceKeys);
        }

        process.exit(result.errorCount > 0 ? 1 : 0);
    }

    // Report mode
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

main().catch(error => {
    console.error('\n❌ Fatal error:', error.message);
    if (verboseMode) {
        console.error(error.stack);
    }
    process.exit(1);
});
