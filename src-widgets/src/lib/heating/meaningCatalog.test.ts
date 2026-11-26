/**
 * The catalogue of Thermostat-Bedeutungen of the heating family (ADR-0119, ADR-0120).
 *
 * @module lib/heating/meaningCatalog.test
 * @remarks
 * Observed through the catalogue's public reading: the Bedeutungen a type's subset offers, with
 * the shape of their Wertezuordnung and the stored keys of the numbering scheme (ADR-0121). The
 * expected values are the stage-1 spec's table „Form der Wertezuordnung“ and its field names.
 */
import { describe, expect, it } from 'vitest';

import { MEANINGS, ROOM_THERMOSTAT, meaningKeys } from './meaningCatalog';

/** The Wertezuordnung of a Bedeutung as the spec's table reads: neutral keys and additions. */
const mappingOf = (field: string): { keys: readonly string[]; additions: readonly string[] } | undefined => {
    const mapping = MEANINGS[field as keyof typeof MEANINGS].mapping;
    return mapping && { keys: mapping.keys, additions: mapping.additions };
};

describe('meaning catalogue — the subset of the Raumthermostat', () => {
    it('offers exactly the Bedeutungen of the stage-1 spec, the main Bedeutung soll first', () => {
        expect(ROOM_THERMOSTAT.main).toBe('soll');
        expect(ROOM_THERMOSTAT.meanings).toEqual([
            'soll',
            'ist',
            'luftfeuchte',
            'betriebsart',
            'betriebsartSetzen',
            'boost',
            'boostBeenden',
            'boostRestzeit',
            'urlaub',
            'urlaubEnde',
            'fenster',
            'batterieSchwach',
            'batteriestand',
            'erreichbarkeit',
        ]);
    });

    it('carries the neutral keys and additions of the table „Form der Wertezuordnung“', () => {
        const mappings = Object.fromEntries(ROOM_THERMOSTAT.meanings.map(field => [field, mappingOf(field)]));

        expect(mappings).toEqual({
            soll: undefined,
            ist: undefined,
            luftfeuchte: undefined,
            betriebsart: { keys: ['auto', 'manuell', 'aus', 'boost', 'urlaub'], additions: [] },
            betriebsartSetzen: { keys: ['auto', 'manuell', 'aus'], additions: [] },
            boost: { keys: ['an', 'aus'], additions: [] },
            boostBeenden: { keys: ['beenden'], additions: [] },
            boostRestzeit: { keys: [], additions: ['einheit', 'zeitformat'] },
            urlaub: { keys: ['an', 'aus'], additions: [] },
            urlaubEnde: { keys: [], additions: ['zeitformat'] },
            fenster: { keys: ['zu', 'offen'], additions: [] },
            batterieSchwach: { keys: ['schwach', 'ok'], additions: [] },
            batteriestand: undefined,
            erreichbarkeit: { keys: ['erreichbar', 'unerreichbar'], additions: [] },
        });
    });

    it('marks only betriebsartSetzen and boostBeenden as write only', () => {
        const writeOnly = ROOM_THERMOSTAT.meanings.filter(field => MEANINGS[field].writeOnly);

        expect(writeOnly).toEqual(['betriebsartSetzen', 'boostBeenden']);
    });

    it('labels every Bedeutung with a heating_ key', () => {
        for (const field of ROOM_THERMOSTAT.meanings) {
            expect(MEANINGS[field].label).toMatch(/^heating_[a-z_]+$/);
        }
    });
});

describe('meaning catalogue — Bedeutungen no type offers yet', () => {
    it('holds Boost-Dauer, Urlaub Beginn and Urlaubstemperatur outside the Raumthermostat, marked unassigned', () => {
        const outside = (Object.keys(MEANINGS) as (keyof typeof MEANINGS)[]).filter(
            field => !ROOM_THERMOSTAT.meanings.includes(field),
        );

        expect(outside).toEqual(['boostDauer', 'urlaubBeginn', 'urlaubTemperatur']);
        expect(outside.every(field => MEANINGS[field].unassigned)).toBe(true);
        expect(ROOM_THERMOSTAT.meanings.some(field => MEANINGS[field].unassigned)).toBe(false);
    });

    it('gives Boost-Dauer a unit and Urlaub Beginn a time format', () => {
        expect(mappingOf('boostDauer')).toEqual({ keys: [], additions: ['einheit'] });
        expect(mappingOf('urlaubBeginn')).toEqual({ keys: [], additions: ['zeitformat'] });
        expect(mappingOf('urlaubTemperatur')).toBeUndefined();
    });

    it('names no field with a trailing digit (the host digit rule)', () => {
        for (const field of Object.keys(MEANINGS)) {
            expect(field).not.toMatch(/\d$/);
        }
    });
});

describe('meaning catalogue — stored keys of a Bedeutung', () => {
    it('stores the unnumbered field, its object and its Wertezuordnung', () => {
        expect(meaningKeys('betriebsart')).toEqual({
            field: 'betriebsart',
            object: 'betriebsartObject',
            mapping: 'betriebsartZuordnung',
        });
    });

    it('puts an entry number before every suffix (ADR-0121)', () => {
        expect(meaningKeys('soll', 3)).toEqual({ field: 'soll3', object: 'soll3Object', mapping: 'soll3Zuordnung' });
        expect(meaningKeys('betriebsart', 3).mapping).toBe('betriebsart3Zuordnung');
    });
});
