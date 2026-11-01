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

/**
 * The widget data the rule consumes (`widget.data` at runtime, `data` in the editor).
 *
 * @remarks
 * Only the three named fields are read; their reads stay typed. The open `any` index
 * signature admits the rest of the widget data, like vis-2's own `WidgetData`, so both
 * the editor's `WidgetData` and the runtime's typed RxData pass without a cast. Without it
 * the all-optional interface is a weak type that `WidgetData` shares no property with;
 * an `unknown` index signature would in turn refuse the RxData interfaces, which carry
 * no index signature.
 */
export interface WriteTargetData {
    /** User-forced display-only flag. */
    onlyDisplay?: boolean;
    /** Main OID metadata — the status the display follows. */
    oidObject?: WriteTargetObject | null;
    /** Control-ID metadata — the command target when resolved. */
    cidObject?: WriteTargetObject | null;
    /** Any other widget data — not read. */
    [field: string]: any;
}

/**
 * Data property name of the control ID (Steuer ID): the Select's command target, whose
 * metadata lives in `cidObject` (ADR-0090). Which id field plays which role is decided
 * by {@link module:lib/oidRole}.
 */
export const CONTROL_ID_FIELD = 'cid';

/** Data property name of the OID a selection writes. */
export type WriteTargetIdName = 'oid' | typeof CONTROL_ID_FIELD;

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
    data.cidObject?._id
        ? { idName: CONTROL_ID_FIELD, object: data.cidObject }
        : { idName: 'oid', object: data.oidObject };

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
 * Whether the write target's OBJECT explicitly denies writes (`write === false`).
 *
 * @param data - Widget data slice with the OID metadata objects.
 * @returns `true` iff the write target's object carries `write === false`; a missing `write`
 *   counts as writable.
 * @remarks
 * Not {@link WriteTarget.readOnly}: the user's `onlyDisplay` plays no part here. That is what
 * lets the editor use it twice without feeding back on itself — as the `onlyDisplay`
 * suggestion on OID pick, and as the lock that hides and disables the display-only toggle.
 */
export function writeTargetDeniesWrite(data: WriteTargetData): boolean {
    return targetOf(data).object?.write === false;
}
