/**
 * OID → text-facts resolution (ADR-0058, parity Build B issue 06) — the pure half of the
 * adapter's `Line.onIdChanged`: which text facts a freshly bound OID contributes, how the user's
 * authored override survives, and what a type change cleans up.
 *
 * @module EchartsCollectionWidget/editor/oidTextFacts
 * @remarks
 * Detection rules (adapter-faithful): `common.type === 'boolean'` → bool texts (prefilled from
 * `common.states` {0,1} when the object carries them); a states-carrying object WITHOUT a unit →
 * enum (the adapter treats a unit-carrying object as numeric and drops its states); everything
 * else → no kind, all text fields cleaned. String-form / array states are not a mapping.
 */
import type { EchartsSeriesMeta } from '../../types/field-definitions/echarts-fields';

/** The (loosely typed) ioBroker object `socket.getObject` hands back. */
export type OidObjectLike = { common?: { type?: string; unit?: string; states?: unknown } } | null | undefined;

/** The detected OID kind gating the card's text fields. `undefined` = numeric/text — no fields. */
export type OidTextKind = 'boolean' | 'enum' | undefined;

/** Which text facts an OID carries, resolved from its object. */
export interface OidTextPrefill {
    kind: OidTextKind;
    trueText?: string;
    falseText?: string;
    states?: Record<string, string>;
}

/**
 * A usable states map — object-shaped only (the adapter excludes the string form
 * `'0:AUS;1:EIN'` and array forms), values stringified, empty entries dropped, and boolean-ish
 * keys normalized (`'true'`/`'false'` → `'1'`/`'0'`, the adapter's `_readOneLine` remap — the
 * pipeline hands numbers by then). An empty result is `undefined` (no mapping).
 */
const usableStates = (raw: unknown): Record<string, string> | undefined => {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
        return undefined;
    }
    const out: Record<string, string> = {};
    for (const [rawKey, v] of Object.entries(raw as Record<string, unknown>)) {
        // ioBroker states values are strings or numbers; anything else is not a usable name.
        const txt = typeof v === 'string' || typeof v === 'number' ? String(v).trim() : '';
        if (txt) {
            const key = rawKey === 'true' ? '1' : rawKey === 'false' ? '0' : rawKey;
            out[key] = txt;
        }
    }
    return Object.keys(out).length ? out : undefined;
};

/**
 * Resolve an OID's text kind + prefills from its object (the pure half; the series-section
 * effect applies them to the meta). Takes the socket's loosely typed `getObject` result.
 */
export const oidTextPrefill = (obj: unknown): OidTextPrefill => {
    const common = (obj as OidObjectLike)?.common;
    if (common?.type === 'boolean') {
        const states = usableStates(common.states);
        return {
            kind: 'boolean',
            ...(states && (states['1'] !== undefined || states['0'] !== undefined)
                ? { trueText: states['1'], falseText: states['0'] }
                : {}),
        };
    }
    // An enum: states present, object-shaped, and NO unit (a unit-carrying object is numeric).
    const states = common && !common.unit ? usableStates(common.states) : undefined;
    return states ? { kind: 'enum', states } : { kind: undefined };
};

/**
 * Apply a freshly bound OID's text facts to a series meta:
 *  - IDEMPOTENT: when the stored `oidType` already matches the detected kind, the meta is the
 *    user's truth (a re-open must not resurrect deleted prefill rows or refill cleared texts);
 *  - the detected `oidType` gates the card's fields;
 *  - enum: the object's states merge UNDER the user's authored keys (the adapter's
 *    `Object.assign(withStates, line.states)` order — an override survives, new keys add);
 *  - boolean: prefill fills only EMPTY text fields (the adapter's unit-prefill `||` idiom);
 *  - a kind change cleans up the fields the new kind does not own (bool→number clears all).
 */
export const applyOidTextFacts = <T extends EchartsSeriesMeta>(meta: T, prefill: OidTextPrefill): T => {
    // Already resolved for this kind (a prior detection round was saved): the meta IS the
    // user's truth — re-merging would resurrect prefill rows they deleted. Reference-equal
    // no-op, so the load-time heal never churns a settled series.
    if (meta.oidType === prefill.kind) {
        return meta;
    }
    if (prefill.kind === 'enum') {
        return {
            ...meta,
            oidType: 'enum',
            // The user's authored keys win over the object's states.
            states: { ...prefill.states, ...meta.states },
            trueText: undefined,
            falseText: undefined,
        };
    }
    if (prefill.kind === 'boolean') {
        return {
            ...meta,
            oidType: 'boolean',
            trueText: meta.trueText || prefill.trueText,
            falseText: meta.falseText || prefill.falseText,
            states: undefined,
        };
    }
    return {
        ...meta,
        oidType: undefined,
        trueText: undefined,
        falseText: undefined,
        states: undefined,
    };
};
