/**
 * Decision table for the OID role of an id field (ADR-0096).
 *
 * @module lib/oidRole.test
 */
import { describe, expect, it } from 'vitest';

import { oidRole } from './oidRole';

describe('oidRole — which role an id field plays', () => {
    it('makes the main OID the Haupt-OID', () => {
        expect(oidRole('oid')).toBe('main');
    });

    it("makes the Select's control ID the Steuer ID", () => {
        expect(oidRole('cid')).toBe('control');
    });

    it.each(['dialogId', 'colorLightSwitchOid', 'colorLightRedOid', 'foo'])(
        'makes every other id field (%s) a Hilfs-OID',
        name => {
            expect(oidRole(name)).toBe('auxiliary');
        },
    );
});
