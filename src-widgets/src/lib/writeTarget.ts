/**
 * The ONE pure rule for which OID a selection writes (Schreibziel, ADR-0090).
 *
 * @module lib/writeTarget
 * @remarks
 * See CONTEXT.md ("Schreibziel"): the write target is the control ID (`cid`) once its
 * object is resolved, otherwise the main OID. Only the write target is written; the
 * display follows the main OID's status alone. The control is read-only iff
 * `onlyDisplay` is set or the write target's OBJECT carries `write === false` — the
 * root `write` is never consulted (it belongs to the main OID, and stored widgets may
 * carry one leaked by the former control-ID handler).
 *
 * Consumed by both sides — the Zustandsmenge pattern: the editor
 * (`oidChangeHandlerAsync` derives the `onlyDisplay` suggestion, the Select's
 * display-only toggle) and the runtime (Select binds `useValueState(idName)`).
 */
import isOidReadOnly from './helper/isOidReadOnly';

/** Minimal slice of an `${id}Object` the rule reads. */
export interface WriteTargetObject {
    /** Resolved state ID — an object without it counts as unresolved. */
    _id?: string;
    /** Raw `common.write` of the state. */
    write?: boolean;
}

/** Minimal slice of widget data the rule consumes (`widget.data` at runtime, `data` in the editor). */
export interface WriteTargetData {
    /** User-forced display-only flag. */
    onlyDisplay?: boolean;
    /** Main OID metadata — the status the display follows. */
    oidObject?: WriteTargetObject | null;
    /** Control-ID metadata — the command target when resolved. */
    cidObject?: WriteTargetObject | null;
}

/** Data property name of the OID a selection writes. */
export type WriteTargetIdName = 'oid' | 'cid';

/** Result of {@link resolveWriteTarget}. */
export interface WriteTarget {
    /** Which OID property to bind the write to (`useValueState(idName)`). */
    idName: WriteTargetIdName;
    /** Whether the control must be disabled. */
    readOnly: boolean;
}

/** The control ID when resolved, otherwise the main OID. */
const targetOf = (
    data: WriteTargetData,
): { idName: WriteTargetIdName; object: WriteTargetObject | null | undefined } =>
    data.cidObject?._id ? { idName: 'cid', object: data.cidObject } : { idName: 'oid', object: data.oidObject };

/**
 * Resolves the write target of a selection.
 *
 * @param data - Widget data slice with the OID metadata objects.
 * @returns The OID property to write plus the lock decision.
 */
export function resolveWriteTarget(data: WriteTargetData): WriteTarget {
    const { idName, object } = targetOf(data);

    return { idName, readOnly: isOidReadOnly({ onlyDisplay: data.onlyDisplay, write: object?.write }) };
}

/**
 * The editor's `onlyDisplay` suggestion on OID pick.
 *
 * @param data - Widget data slice with the OID metadata objects.
 * @returns `true` when the write target is explicitly read-only (`write === false`).
 */
export function defaultOnlyDisplay(data: WriteTargetData): boolean {
    return targetOf(data).object?.write === false;
}
