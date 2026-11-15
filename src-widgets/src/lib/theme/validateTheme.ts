/**
 * Deep, schema-driven validator for a user-supplied MUI theme object.
 *
 * @module lib/theme/validateTheme
 * @remarks
 * Unlike the previous string-based validator, this module validates a PLAIN
 * OBJECT against the {@link module:lib/theme/themeSchema.THEME_OPTIONS_SCHEMA}
 * tree. JSON (de)serialization happens only at the ioBroker state boundary —
 * the validator itself never touches JSON.
 *
 * Validation philosophy:
 * - Unknown keys are warnings (MUI allows module augmentation), never fatal.
 * - Structural / type mistakes (a color that is not a color, `mode: "purple"`,
 *   non-serializable functions) are errors.
 * - The accepted object is returned unchanged as `theme` when valid, so callers
 *   can merge it straight into `createTheme`.
 */

import type { SchemaNode, UnknownKeyPolicy } from './themeSchema';
import { THEME_OPTIONS_SCHEMA } from './themeSchema';
import type { ThemeValidationIssue, ThemeValidationResult, ThemeValueKeys } from './themeTypes';
import { isPlainObject } from './themeUtils';
import { supportsCssColor } from '../helper/colorValidation';

/**
 * Validates a plain object against the MUI `ThemeOptions` schema.
 *
 * @param value - Anything (typically `JSON.parse(state.val)`). `null` /
 * `undefined` / `{}` are treated as "no theme" and are valid.
 * @returns A structured result with `isValid`, the optional `theme` object and
 * a list of `issues` (errors and warnings).
 */
export function validateThemeOptions(value: unknown): ThemeValidationResult {
    const issues: ThemeValidationIssue[] = [];

    if (value === null || value === undefined) {
        return { isValid: true, theme: {}, issues };
    }
    if (!isPlainObject(value)) {
        issues.push({
            path: '',
            keys: [],
            severity: 'error',
            code: 'invalid-shape',
            message: 'Theme must be a plain object.',
        });
        return { isValid: false, issues };
    }
    if (Object.keys(value).length === 0) {
        return { isValid: true, theme: {}, issues };
    }

    validateNode(value, THEME_OPTIONS_SCHEMA, [], issues);

    const isValid = !issues.some(issue => issue.severity === 'error');
    return { isValid, theme: isValid ? value : undefined, issues };
}

/**
 * The display form of a value's location: object keys joined by dots, list positions in
 * brackets (`palette.primary.main`, `shadows[3]`).
 *
 * @remarks
 * For reading only — a key may itself contain a dot (`&.Mui-disabled`), so the text cannot be
 * split back into its keys. Code that needs the location takes the issue's `keys`.
 */
function formatPath(keys: ThemeValueKeys): string {
    let path = '';
    for (const key of keys) {
        if (typeof key === 'number') {
            path = `${path}[${key}]`;
        } else {
            path = path ? `${path}.${key}` : key;
        }
    }
    return path;
}

/** Pushes the "not serializable" error for a function or symbol value. */
function reportNotSerializable(keys: ThemeValueKeys, value: unknown, issues: ThemeValidationIssue[]): void {
    const path = formatPath(keys);
    issues.push({
        path,
        keys,
        severity: 'error',
        message: `Value at "${path}" is a ${typeof value}, which is not serializable.`,
    });
}

/**
 * Walks a single value against its schema node, pushing issues as it goes.
 */
function validateNode(value: unknown, schema: SchemaNode, keys: ThemeValueKeys, issues: ThemeValidationIssue[]): void {
    // Non-serializable guard — fires for every value the walker visits.
    if (typeof value === 'function' || typeof value === 'symbol') {
        reportNotSerializable(keys, value, issues);
        return;
    }

    switch (schema.kind) {
        case 'object':
            validateObjectValue(value, schema, keys, issues);
            break;
        case 'string':
            if (typeof value !== 'string') {
                reportTypeError(keys, 'string', value, issues);
            }
            break;
        case 'number':
            validateNumberValue(value, schema, keys, issues);
            break;
        case 'boolean':
            if (typeof value !== 'boolean') {
                reportTypeError(keys, 'boolean', value, issues);
            }
            break;
        case 'color':
            if (!isValidCssColor(value)) {
                reportTypeError(keys, 'color', value, issues, 'invalid-color');
            }
            break;
        case 'literal':
            if (!schema.values.includes(value as string | number)) {
                const path = formatPath(keys);
                issues.push({
                    path,
                    keys,
                    severity: 'error',
                    message: `Value at "${path}" must be one of: ${schema.values.join(', ')}.`,
                });
            }
            break;
        case 'union':
            validateUnionValue(value, schema.options, keys, issues);
            break;
        case 'array':
            validateArrayValue(value, schema.items, keys, issues);
            break;
        case 'record':
            validateRecordValue(value, schema.values, keys, issues);
            break;
        case 'cssObject':
            validateCssObjectValue(value, keys, issues);
            break;
    }
}

type ObjectSchema = Extract<SchemaNode, { kind: 'object' }>;

/** Validates an `object` schema node: known keys recurse, unknown keys follow policy. */
function validateObjectValue(
    value: unknown,
    schema: ObjectSchema,
    keys: ThemeValueKeys,
    issues: ThemeValidationIssue[],
): void {
    if (!isPlainObject(value)) {
        reportTypeError(keys, 'object', value, issues);
        return;
    }

    const policy: UnknownKeyPolicy = schema.allowUnknown ?? 'warn';

    for (const key of Object.keys(value)) {
        const childKeys = [...keys, key];
        const childSchema = schema.properties[key];
        const childValue = value[key];

        if (childSchema) {
            validateNode(childValue, childSchema, childKeys, issues);
        } else if (typeof childValue === 'function' || typeof childValue === 'symbol') {
            reportNotSerializable(childKeys, childValue, issues);
        } else if (policy === 'warn') {
            const childPath = formatPath(childKeys);
            issues.push({
                path: childPath,
                keys: childKeys,
                severity: 'warning',
                code: 'unknown-key',
                message: `Unknown theme option "${childPath}" — it may be ignored by MUI.`,
            });
        } else if (policy === 'error') {
            const childPath = formatPath(childKeys);
            issues.push({
                path: childPath,
                keys: childKeys,
                severity: 'error',
                code: 'unknown-key',
                message: `Unknown theme option "${childPath}".`,
            });
        }
        // 'ignore' → skip silently.
    }

    // Required known properties that are missing.
    for (const [key, childSchema] of Object.entries(schema.properties)) {
        if (childSchema.required && !(key in value)) {
            const childKeys = [...keys, key];
            const childPath = formatPath(childKeys);
            issues.push({
                path: childPath,
                keys: childKeys,
                severity: 'error',
                message: `Missing required option "${childPath}".`,
            });
        }
    }
}

type NumberSchema = Extract<SchemaNode, { kind: 'number' }>;

/** Validates a `number` schema node, including optional bounds. */
function validateNumberValue(
    value: unknown,
    schema: NumberSchema,
    keys: ThemeValueKeys,
    issues: ThemeValidationIssue[],
): void {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        reportTypeError(keys, 'number', value, issues, 'invalid-number');
        return;
    }
    const path = formatPath(keys);
    // The bounds for the localized "out of range (min–max)"; an open side reads as infinity.
    const params = [
        schema.min === undefined ? '-∞' : String(schema.min),
        schema.max === undefined ? '∞' : String(schema.max),
    ];
    if (schema.min !== undefined && value < schema.min) {
        issues.push({
            path,
            keys,
            severity: 'error',
            code: 'number-out-of-range',
            message: `Value at "${path}" must be >= ${schema.min}.`,
            params,
        });
    }
    if (schema.max !== undefined && value > schema.max) {
        issues.push({
            path,
            keys,
            severity: 'error',
            code: 'number-out-of-range',
            message: `Value at "${path}" must be <= ${schema.max}.`,
            params,
        });
    }
}

/**
 * Validates a `union` schema node: accepts the first option that produces no
 * new errors, keeping its warnings; otherwise reports a generic type error.
 */
function validateUnionValue(
    value: unknown,
    options: SchemaNode[],
    keys: ThemeValueKeys,
    issues: ThemeValidationIssue[],
): void {
    for (const option of options) {
        const trial: ThemeValidationIssue[] = [];
        validateNode(value, option, keys, trial);
        if (!trial.some(issue => issue.severity === 'error')) {
            issues.push(...trial);
            return;
        }
    }
    reportTypeError(keys, 'one of the allowed types', value, issues);
}

/** Validates an `array` schema node against its `items` schema. */
function validateArrayValue(
    value: unknown,
    items: SchemaNode,
    keys: ThemeValueKeys,
    issues: ThemeValidationIssue[],
): void {
    if (!Array.isArray(value)) {
        reportTypeError(keys, 'array', value, issues);
        return;
    }
    value.forEach((item, index) => {
        validateNode(item, items, [...keys, index], issues);
    });
}

/** Validates a `record` schema node: every entry must match the `values` schema. */
function validateRecordValue(
    value: unknown,
    valuesSchema: SchemaNode,
    keys: ThemeValueKeys,
    issues: ThemeValidationIssue[],
): void {
    if (!isPlainObject(value)) {
        reportTypeError(keys, 'object', value, issues);
        return;
    }
    for (const key of Object.keys(value)) {
        validateNode(value[key], valuesSchema, [...keys, key], issues);
    }
}

/**
 * Validates a `cssObject` schema node: a `CSSProperties`-ish value.
 *
 * @remarks
 * Accepts strings / numbers, and plain objects (recursing, ignoring unknown
 * keys so nested selectors and media queries pass). Rejects everything else and
 * non-serializable values.
 */
function validateCssObjectValue(value: unknown, keys: ThemeValueKeys, issues: ThemeValidationIssue[]): void {
    if (typeof value === 'function' || typeof value === 'symbol') {
        reportNotSerializable(keys, value, issues);
        return;
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return;
    }
    if (isPlainObject(value)) {
        for (const key of Object.keys(value)) {
            validateCssObjectValue(value[key], [...keys, key], issues);
        }
        return;
    }
    reportTypeError(keys, 'CSS value', value, issues);
}

/** Pushes a "wrong type" error describing what was expected vs. received. */
function reportTypeError(
    keys: ThemeValueKeys,
    expected: string,
    value: unknown,
    issues: ThemeValidationIssue[],
    code = 'invalid-type',
): void {
    const actual = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
    const path = formatPath(keys);
    issues.push({
        path,
        keys,
        severity: 'error',
        code,
        message: `Value at "${path}" must be a ${expected} (got ${actual}).`,
    });
}

/** Matches CSS gradient function names (invalid for MUI palette colors). */
const GRADIENT_RE = /\b(?:linear|radial|conic)-gradient\b/i;

/**
 * Checks whether a value is a solid CSS color.
 *
 * @remarks
 * Uses the browser-native `CSS.supports('color', value)` check (covers hex, rgb,
 * hsl, named colors, `transparent`, `currentColor`, …). Gradients are rejected
 * explicitly — they are valid backgrounds but invalid MUI palette colors. This
 * intentionally does NOT reuse the Regeln für Farbeingaben (`lib/helper/colorInputRules`),
 * which accept gradients for widget backgrounds; only the browser check itself is shared
 * (`supportsCssColor`), the fallback without it stays permissive.
 */
export function isValidCssColor(value: unknown): boolean {
    if (typeof value !== 'string') {
        return false;
    }
    const trimmed = value.trim();
    if (!trimmed || GRADIENT_RE.test(trimmed)) {
        return false;
    }
    // Defensive fallback (no CSS.supports, e.g. node) — modern browsers always expose it.
    return supportsCssColor(trimmed) ?? true;
}
