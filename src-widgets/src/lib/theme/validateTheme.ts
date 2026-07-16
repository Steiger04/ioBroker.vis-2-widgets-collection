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
import type { ThemeValidationIssue, ThemeValidationResult, UserTheme } from './themeTypes';
import { isPlainObject } from './themeUtils';

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
        issues.push({ path: '', severity: 'error', code: 'invalid-shape', message: 'Theme must be a plain object.' });
        return { isValid: false, issues };
    }
    if (Object.keys(value).length === 0) {
        return { isValid: true, theme: {}, issues };
    }

    validateNode(value, THEME_OPTIONS_SCHEMA, '', issues);

    const isValid = !issues.some(issue => issue.severity === 'error');
    return { isValid, theme: isValid ? (value as UserTheme) : undefined, issues };
}

/**
 * Walks a single value against its schema node, pushing issues as it goes.
 */
function validateNode(value: unknown, schema: SchemaNode, path: string, issues: ThemeValidationIssue[]): void {
    // Non-serializable guard — fires for every value the walker visits.
    if (typeof value === 'function' || typeof value === 'symbol') {
        issues.push({
            path,
            severity: 'error',
            message: `Value at "${path}" is a ${typeof value}, which is not serializable.`,
        });
        return;
    }

    switch (schema.kind) {
        case 'object':
            validateObjectValue(value, schema, path, issues);
            break;
        case 'string':
            if (typeof value !== 'string') {
                reportTypeError(path, 'string', value, issues);
            }
            break;
        case 'number':
            validateNumberValue(value, schema, path, issues);
            break;
        case 'boolean':
            if (typeof value !== 'boolean') {
                reportTypeError(path, 'boolean', value, issues);
            }
            break;
        case 'color':
            if (!isValidCssColor(value)) {
                reportTypeError(path, 'color', value, issues, 'invalid-color');
            }
            break;
        case 'literal':
            if (!schema.values.includes(value as string | number)) {
                issues.push({
                    path,
                    severity: 'error',
                    message: `Value at "${path}" must be one of: ${schema.values.join(', ')}.`,
                });
            }
            break;
        case 'union':
            validateUnionValue(value, schema.options, path, issues);
            break;
        case 'array':
            validateArrayValue(value, schema.items, path, issues);
            break;
        case 'record':
            validateRecordValue(value, schema.values, path, issues);
            break;
        case 'cssObject':
            validateCssObjectValue(value, path, issues);
            break;
    }
}

type ObjectSchema = Extract<SchemaNode, { kind: 'object' }>;

/** Validates an `object` schema node: known keys recurse, unknown keys follow policy. */
function validateObjectValue(value: unknown, schema: ObjectSchema, path: string, issues: ThemeValidationIssue[]): void {
    if (!isPlainObject(value)) {
        reportTypeError(path, 'object', value, issues);
        return;
    }

    const policy: UnknownKeyPolicy = schema.allowUnknown ?? 'warn';

    for (const key of Object.keys(value)) {
        const childPath = path ? `${path}.${key}` : key;
        const childSchema = schema.properties[key];
        const childValue = value[key];

        if (childSchema) {
            validateNode(childValue, childSchema, childPath, issues);
        } else if (typeof childValue === 'function' || typeof childValue === 'symbol') {
            issues.push({
                path: childPath,
                severity: 'error',
                message: `Value at "${childPath}" is a ${typeof childValue}, which is not serializable.`,
            });
        } else if (policy === 'warn') {
            issues.push({
                path: childPath,
                severity: 'warning',
                code: 'unknown-key',
                message: `Unknown theme option "${childPath}" — it may be ignored by MUI.`,
            });
        } else if (policy === 'error') {
            issues.push({
                path: childPath,
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
            const childPath = path ? `${path}.${key}` : key;
            issues.push({ path: childPath, severity: 'error', message: `Missing required option "${childPath}".` });
        }
    }
}

type NumberSchema = Extract<SchemaNode, { kind: 'number' }>;

/** Validates a `number` schema node, including optional bounds. */
function validateNumberValue(value: unknown, schema: NumberSchema, path: string, issues: ThemeValidationIssue[]): void {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        reportTypeError(path, 'number', value, issues, 'invalid-number');
        return;
    }
    if (schema.min !== undefined && value < schema.min) {
        issues.push({
            path,
            severity: 'error',
            code: 'number-out-of-range',
            message: `Value at "${path}" must be >= ${schema.min}.`,
        });
    }
    if (schema.max !== undefined && value > schema.max) {
        issues.push({
            path,
            severity: 'error',
            code: 'number-out-of-range',
            message: `Value at "${path}" must be <= ${schema.max}.`,
        });
    }
}

/**
 * Validates a `union` schema node: accepts the first option that produces no
 * new errors, keeping its warnings; otherwise reports a generic type error.
 */
function validateUnionValue(value: unknown, options: SchemaNode[], path: string, issues: ThemeValidationIssue[]): void {
    for (const option of options) {
        const trial: ThemeValidationIssue[] = [];
        validateNode(value, option, path, trial);
        if (!trial.some(issue => issue.severity === 'error')) {
            issues.push(...trial);
            return;
        }
    }
    reportTypeError(path, 'one of the allowed types', value, issues);
}

/** Validates an `array` schema node against its `items` schema. */
function validateArrayValue(value: unknown, items: SchemaNode, path: string, issues: ThemeValidationIssue[]): void {
    if (!Array.isArray(value)) {
        reportTypeError(path, 'array', value, issues);
        return;
    }
    value.forEach((item, index) => {
        validateNode(item, items, `${path}[${index}]`, issues);
    });
}

/** Validates a `record` schema node: every entry must match the `values` schema. */
function validateRecordValue(
    value: unknown,
    valuesSchema: SchemaNode,
    path: string,
    issues: ThemeValidationIssue[],
): void {
    if (!isPlainObject(value)) {
        reportTypeError(path, 'object', value, issues);
        return;
    }
    for (const key of Object.keys(value)) {
        validateNode(value[key], valuesSchema, path ? `${path}.${key}` : key, issues);
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
function validateCssObjectValue(value: unknown, path: string, issues: ThemeValidationIssue[]): void {
    if (typeof value === 'function' || typeof value === 'symbol') {
        issues.push({
            path,
            severity: 'error',
            message: `Value at "${path}" is a ${typeof value}, which is not serializable.`,
        });
        return;
    }
    if (typeof value === 'string' || typeof value === 'number') {
        return;
    }
    if (isPlainObject(value)) {
        for (const key of Object.keys(value)) {
            validateCssObjectValue(value[key], path ? `${path}.${key}` : key, issues);
        }
        return;
    }
    reportTypeError(path, 'CSS value', value, issues);
}

/** Pushes a "wrong type" error describing what was expected vs. received. */
function reportTypeError(
    path: string,
    expected: string,
    value: unknown,
    issues: ThemeValidationIssue[],
    code = 'invalid-type',
): void {
    const actual = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
    issues.push({
        path,
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
 * intentionally does NOT reuse `validateColorInput` from `lib/helper/colorValidation`,
 * which accepts gradients for widget backgrounds.
 */
export function isValidCssColor(value: unknown): boolean {
    if (typeof value !== 'string') {
        return false;
    }
    const trimmed = value.trim();
    if (!trimmed || GRADIENT_RE.test(trimmed)) {
        return false;
    }
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
        return CSS.supports('color', trimmed);
    }
    // Defensive fallback — modern browsers always expose CSS.supports.
    return true;
}
