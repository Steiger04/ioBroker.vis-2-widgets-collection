/**
 * The ONE pure rule for which role an id field plays (OID-Rolle, ADR-0096).
 *
 * @module lib/oidRole
 * @remarks
 * See CONTEXT.md ("OID-Rolle", "Haupt-OID", "Hilfs-OID"). The role decides which widget
 * data an OID pick owns: only the main OID owns the root fields; the control ID owns
 * `cidObject` plus the `onlyDisplay` suggestion of the write target (ADR-0090); an
 * auxiliary ID owns nothing but its own `<name>Object`.
 */
import { CONTROL_ID_FIELD } from './writeTarget';

/** Role of an id field: Haupt-OID · Steuer ID · Hilfs-OID. */
export type OidRole = 'main' | 'control' | 'auxiliary';

/**
 * Decides the role of an id field from its data property.
 *
 * @param name - Data property of an id field (`oid`, `cid`, Dialog's `dialogId`, Light2's
 *   channel IDs …).
 * @returns `'main'` for `oid`, `'control'` for {@link CONTROL_ID_FIELD}, `'auxiliary'` for
 *   every other id field.
 */
export function oidRole(name: string): OidRole {
    if (name === 'oid') {
        return 'main';
    }
    return name === CONTROL_ID_FIELD ? 'control' : 'auxiliary';
}
