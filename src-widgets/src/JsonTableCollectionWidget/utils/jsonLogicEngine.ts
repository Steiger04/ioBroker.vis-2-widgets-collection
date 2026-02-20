/**
 * json-logic-engine integration for JsonTableCollectionWidget conditional styling.
 *
 * @module JsonTableCollectionWidget/utils/jsonLogicEngine
 * @remarks
 * Provides a safe, sandboxed rule evaluation engine based on json-logic-engine.
 * No eval(), no new Function() — rules are pure JSON data structures.
 *
 * Custom operators added:
 *   - contains(str, sub)    → str.includes(sub)
 *   - startsWith(str, pre)  → str.startsWith(pre)
 *   - endsWith(str, suf)    → str.endsWith(suf)
 */

import { LogicEngine } from 'json-logic-engine';

// ── Engine Singleton ────────────────────────────────────────────

const engine = new LogicEngine();

engine.addMethod(
    'contains',
    ([str, sub]: [unknown, unknown]) => String(str ?? '').includes(String(sub ?? '')),
    { deterministic: true },
);

engine.addMethod(
    'startsWith',
    ([str, pre]: [unknown, unknown]) => String(str ?? '').startsWith(String(pre ?? '')),
    { deterministic: true },
);

engine.addMethod(
    'endsWith',
    ([str, suf]: [unknown, unknown]) => String(str ?? '').endsWith(String(suf ?? '')),
    { deterministic: true },
);

// ── Types ───────────────────────────────────────────────────────

/** A json-logic rule object. Values can be nested. */
export type JsonLogicRule = Record<string, unknown>;

/**
 * All supported condition operators in the visual rule builder.
 * Maps 1:1 to json-logic expressions.
 */
export type ConditionOperator =
    | 'eq'
    | 'neq'
    | 'gt'
    | 'gte'
    | 'lt'
    | 'lte'
    | 'contains'
    | 'not_contains'
    | 'starts_with'
    | 'ends_with'
    | 'empty'
    | 'not_empty'
    | 'is_true'
    | 'is_false';

/** A single condition row in the visual builder. */
export interface SimpleCondition {
    /** Stable ID for React keying — generated on creation, preserved through parse/build cycles. */
    id?: string;
    operator: ConditionOperator;
    /** Always stored as string; converted to correct type on build */
    operand: string;
}

/** Generate a short random ID suitable for React keys. */
function genId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

/** Internal state of the condition builder. */
export interface BuilderState {
    mode: 'and' | 'or';
    conditions: SimpleCondition[];
}

// ── Operator Configuration ──────────────────────────────────────

/** Operators that do NOT need an operand input (no value field). */
export const NO_OPERAND_OPERATORS: ReadonlySet<ConditionOperator> = new Set([
    'empty',
    'not_empty',
    'is_true',
    'is_false',
]);

/** Operators available per detected column type. */
export const OPERATORS_BY_TYPE: Record<string, ConditionOperator[]> = {
    number: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'empty', 'not_empty'],
    string: ['eq', 'neq', 'contains', 'not_contains', 'starts_with', 'ends_with', 'empty', 'not_empty'],
    boolean: ['is_true', 'is_false', 'empty', 'not_empty'],
    date: ['eq', 'neq', 'gt', 'gte', 'lt', 'lte', 'empty', 'not_empty'],
    mixed: ['eq', 'neq', 'contains', 'empty', 'not_empty'],
};

/** Fallback operator list for unknown types. */
export const DEFAULT_OPERATORS: ConditionOperator[] = ['eq', 'neq', 'empty', 'not_empty'];

// ── Build: SimpleCondition → JsonLogicRule ──────────────────────

const VAR_VALUE = { var: 'value' };

/**
 * Convert a single operator + operand into a json-logic rule object.
 * Numbers are coerced for numeric operators.
 */
export function buildSingleRule(op: ConditionOperator, operand: string): JsonLogicRule {
    const numericOperand = Number(operand);
    const v = VAR_VALUE;

    switch (op) {
        case 'eq':
            return { '==': [v, operand] };
        case 'neq':
            return { '!=': [v, operand] };
        case 'gt':
            return { '>': [v, numericOperand] };
        case 'gte':
            return { '>=': [v, numericOperand] };
        case 'lt':
            return { '<': [v, numericOperand] };
        case 'lte':
            return { '<=': [v, numericOperand] };
        case 'contains':
            return { contains: [v, operand] };
        case 'not_contains':
            return { '!': [{ contains: [v, operand] }] };
        case 'starts_with':
            return { startsWith: [v, operand] };
        case 'ends_with':
            return { endsWith: [v, operand] };
        case 'empty':
            return { '!': [{ '!!': [v] }] };
        case 'not_empty':
            return { '!!': [v] };
        case 'is_true':
            return { '==': [v, true] };
        case 'is_false':
            return { '==': [v, false] };
    }
}

/**
 * Build a compound (AND/OR) or single rule from a BuilderState.
 * Returns undefined if conditions are incomplete (missing operand where required).
 */
const NUMERIC_OPERATORS = new Set<ConditionOperator>(['gt', 'gte', 'lt', 'lte']);

export function buildFromState(state: BuilderState): JsonLogicRule | undefined {
    const complete = state.conditions.filter(c => {
        if (NO_OPERAND_OPERATORS.has(c.operator)) return true;
        if (c.operand.trim() === '') return false;
        // Exclude numeric operators with a non-numeric operand to prevent silent NaN comparisons
        if (NUMERIC_OPERATORS.has(c.operator) && isNaN(Number(c.operand))) return false;
        return true;
    });

    if (complete.length === 0) return undefined;

    const rules = complete.map(c => buildSingleRule(c.operator, c.operand));

    if (rules.length === 1) return rules[0];

    return { [state.mode]: rules };
}

// ── Parse: JsonLogicRule → BuilderState ────────────────────────

function isVarValue(v: unknown): boolean {
    return typeof v === 'object' && v !== null && (v as Record<string, unknown>).var === 'value';
}

/**
 * Parse a single json-logic rule back into a SimpleCondition for the UI.
 * Returns null for unrecognized patterns.
 */
export function parseSingleRule(rule: JsonLogicRule): SimpleCondition | null {
    // Comparison operators with value on left
    for (const [jsonOp, condOp] of [
        ['>', 'gt'],
        ['>=', 'gte'],
        ['<', 'lt'],
        ['<=', 'lte'],
    ] as [string, ConditionOperator][]) {
        if (jsonOp in rule) {
            const args = rule[jsonOp] as unknown[];
            if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
                return { operator: condOp, operand: String(args[1] ?? '') };
            }
        }
    }

    // == operator: eq, is_true, is_false
    if ('==' in rule) {
        const args = rule['=='] as unknown[];
        if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
            if (args[1] === true) return { operator: 'is_true', operand: '' };
            if (args[1] === false) return { operator: 'is_false', operand: '' };
            return { operator: 'eq', operand: String(args[1] ?? '') };
        }
    }

    // != operator: neq
    if ('!=' in rule) {
        const args = rule['!='] as unknown[];
        if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
            return { operator: 'neq', operand: String(args[1] ?? '') };
        }
    }

    // contains
    if ('contains' in rule) {
        const args = rule.contains as unknown[];
        if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
            return { operator: 'contains', operand: String(args[1] ?? '') };
        }
    }

    // startsWith
    if ('startsWith' in rule) {
        const args = rule.startsWith as unknown[];
        if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
            return { operator: 'starts_with', operand: String(args[1] ?? '') };
        }
    }

    // endsWith
    if ('endsWith' in rule) {
        const args = rule.endsWith as unknown[];
        if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
            return { operator: 'ends_with', operand: String(args[1] ?? '') };
        }
    }

    // ! negation: not_empty or not_contains
    if ('!' in rule) {
        const inner = rule['!'];
        // not_empty: { "!": [{"!!": [{"var":"value"}]}] }
        if (Array.isArray(inner) && inner.length === 1) {
            const first = inner[0] as JsonLogicRule;
            if (typeof first === 'object' && first !== null && '!!' in first) {
                const args = first['!!'] as unknown[];
                if (Array.isArray(args) && isVarValue(args[0])) {
                    return { operator: 'empty', operand: '' };
                }
            }
            // not_contains: { "!": [{"contains": [...]}] }
            if (typeof first === 'object' && first !== null && 'contains' in first) {
                const args = first.contains as unknown[];
                if (Array.isArray(args) && args.length === 2 && isVarValue(args[0])) {
                    return { operator: 'not_contains', operand: String(args[1] ?? '') };
                }
            }
        }
    }

    // !! not_empty: { "!!": [{"var":"value"}] }
    if ('!!' in rule) {
        const args = rule['!!'] as unknown[];
        if (Array.isArray(args) && isVarValue(args[0])) {
            return { operator: 'not_empty', operand: '' };
        }
    }

    return null;
}

/**
 * Parse any json-logic rule (single or compound) into a BuilderState for the UI.
 * Returns a default empty state for unrecognized rules.
 */
export function parseBuilderState(logic: JsonLogicRule | undefined): BuilderState {
    if (!logic) {
        return { mode: 'and', conditions: [{ id: genId(), operator: 'eq', operand: '' }] };
    }

    // Compound AND
    if ('and' in logic) {
        const items = logic.and as JsonLogicRule[];
        if (Array.isArray(items)) {
            const conditions = items
                .map(r => parseSingleRule(r))
                .filter((c): c is SimpleCondition => c !== null)
                .map(c => ({ id: genId(), ...c }));
            if (conditions.length > 0) return { mode: 'and', conditions };
        }
    }

    // Compound OR
    if ('or' in logic) {
        const items = logic.or as JsonLogicRule[];
        if (Array.isArray(items)) {
            const conditions = items
                .map(r => parseSingleRule(r))
                .filter((c): c is SimpleCondition => c !== null)
                .map(c => ({ id: genId(), ...c }));
            if (conditions.length > 0) return { mode: 'or', conditions };
        }
    }

    // Single condition
    const single = parseSingleRule(logic);
    if (single) {
        return { mode: 'and', conditions: [{ id: genId(), ...single }] };
    }

    return { mode: 'and', conditions: [{ id: genId(), operator: 'eq', operand: '' }] };
}

// ── Evaluation ──────────────────────────────────────────────────

/** Maximum number of compiled rules to keep in the cache (FIFO eviction). */
const FN_CACHE_MAX_SIZE = 200;

/** Cache of compiled rule functions keyed by JSON-stringified rule. */
const fnCache = new Map<string, (data: unknown) => unknown>();

/**
 * Safely evaluate a json-logic rule against a cell value.
 * Compiled functions are cached for repeated evaluation (hot path).
 *
 * @param rule - The json-logic rule object.
 * @param value - The cell's raw value.
 * @returns Whether the rule evaluates to true.
 */
export function evaluateLogic(rule: JsonLogicRule, value: unknown): boolean {
    try {
        const key = JSON.stringify(rule);
        let fn = fnCache.get(key);
        if (!fn) {
            fn = engine.build(rule) as (data: unknown) => unknown;
            // Evict the oldest entry when the cache is full (FIFO)
            if (fnCache.size >= FN_CACHE_MAX_SIZE) {
                fnCache.delete(fnCache.keys().next().value as string);
            }
            fnCache.set(key, fn);
        }
        return Boolean(fn({ value }));
    } catch {
        return false;
    }
}
