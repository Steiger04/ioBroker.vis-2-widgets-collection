/**
 * The Lese-Naht's pick stage as a pure derivation: what a widget reads for an id field without its
 * object, from the fields `createIdField` builds and an object read (ADR-0111, ADR-0114).
 *
 * @module lib/pickedWidgetData.test
 * @remarks
 * Observed through the module's interface: the id fields it recognises in `visAttrs` and the data
 * it hands back. The loaded objects are plain values; the socket read is pinned in
 * `hooks/usePickedWidgetData.test`. The widget-level reading lives in `aiRawDataRender.test`.
 */
import { describe, expect, it } from 'vitest';

import type { RxWidgetInfoGroup, WidgetData } from '@iobroker/types-vis-2';

import { ANY_VALUE_TYPES } from './allowedOidTypes';
import { createIdField, type PickedObject } from './commonObjectFields';
import { awaitedObjectsOf, oidPickFieldsOf, pickedWidgetData } from './pickedWidgetData';

const SETPOINT = 'hm-rpc.0.ABC.1.SET_POINT_TEMPERATURE';
const CHANNEL = 'hm-rpc.0.ABC.1';

const stateObject = (common: Partial<ioBroker.StateCommon>): ioBroker.StateObject => ({
    _id: SETPOINT,
    type: 'state',
    common: { name: 'Setpoint', type: 'number', role: 'level.temperature', read: true, write: true, ...common },
    native: {},
});

const channelObject = {
    _id: CHANNEL,
    type: 'channel',
    common: { name: 'Climate' },
    native: { TYPE: 'HEATING_CLIMATECONTROL_TRANSCEIVER' },
} as unknown as ioBroker.Object;

/** The widget's fields: one group, as `getWidgetInfo().visAttrs` carries them. */
const visAttrsOf = (...fields: RxWidgetInfoGroup['fields']): RxWidgetInfoGroup[] => [{ name: 'common', fields }];

/** The data the widget reads for `data`, with `picked` as the loaded object of every awaited field. */
const readFor = (visAttrs: RxWidgetInfoGroup[], data: WidgetData, picked: PickedObject | null): WidgetData => {
    const fields = oidPickFieldsOf(visAttrs);
    return pickedWidgetData(data, awaitedObjectsOf(data, fields), () => picked);
};

/** Freezes the data deeply: a write into the widget data throws. */
const frozen = <T>(value: T): T => {
    if (value && typeof value === 'object') {
        Object.values(value).forEach(frozen);
        Object.freeze(value);
    }
    return value;
};

describe('pickedWidgetData — an auxiliary ID with { inventRange: false } reads only the real range', () => {
    const visAttrs = visAttrsOf(createIdField('soll', ANY_VALUE_TYPES, { inventRange: false }));

    it('reads no bound the object lacks into the object copy', () => {
        const read = readFor(visAttrs, { soll: SETPOINT }, { object: stateObject({}), icon: null });

        expect(read.sollObject).toMatchObject({ _id: SETPOINT });
        expect(read.sollObject).not.toHaveProperty('minValue');
        expect(read.sollObject).not.toHaveProperty('maxValue');
    });

    it('reads a real bound, 0 included', () => {
        const read = readFor(visAttrs, { soll: SETPOINT }, { object: stateObject({ min: 0, max: 30 }), icon: null });

        expect(read.sollObject).toMatchObject({ minValue: 0, maxValue: 30 });
    });

    it('keeps the seeded copy of the main OID with the option (the Input), its root range real', () => {
        const read = readFor(
            visAttrsOf(createIdField('oid', ANY_VALUE_TYPES, { inventRange: false })),
            { oid: SETPOINT },
            { object: stateObject({}), icon: null },
        );

        expect(read.oidObject).toMatchObject({ minValue: 0, maxValue: 100 });
        expect(read).not.toHaveProperty('minValue');
        expect(read).not.toHaveProperty('maxValue');
    });

    it('keeps the seeded copy for a field without the option', () => {
        const read = readFor(
            visAttrsOf(createIdField('soll', ANY_VALUE_TYPES)),
            { soll: SETPOINT },
            { object: stateObject({}), icon: null },
        );

        expect(read.sollObject).toMatchObject({ minValue: 0, maxValue: 100 });
    });
});

describe('pickedWidgetData — a field with its own pick derivation', () => {
    /**
     * Stand-in field: derives `probeZuordnung` from the state's role and its channel's type, and
     * nothing without a channel.
     */
    const visAttrs = visAttrsOf(
        createIdField('probe', ANY_VALUE_TYPES, {
            pickDerivation: Object.assign(
                ({ object, channel }: PickedObject) =>
                    channel
                        ? { probeZuordnung: { role: object.common.role, channelType: channel.native.TYPE as unknown } }
                        : undefined,
                { keys: ['probeZuordnung'] },
            ),
        }),
    );
    const DERIVED = { role: 'level.temperature', channelType: 'HEATING_CLIMATECONTROL_TRANSCEIVER' };
    const picked: PickedObject = { object: stateObject({}), icon: null, channel: channelObject };

    it('is recognised as an id field with the shared pick', () => {
        expect(oidPickFieldsOf(visAttrs).map(field => field.name)).toEqual(['probe']);
    });

    it('reads the keys of its derivation for a missing object, besides the object copy', () => {
        const read = readFor(visAttrs, { probe: SETPOINT }, picked);

        expect(read.probeZuordnung).toEqual(DERIVED);
        expect(read.probeObject).toMatchObject({ _id: SETPOINT });
    });

    it('lets a key the data sets win', () => {
        const stored = { probe: SETPOINT, probeZuordnung: { an: [true] } };

        expect(readFor(visAttrs, stored, picked).probeZuordnung).toEqual({ an: [true] });
    });

    it('writes nothing into the stored data', () => {
        const stored = frozen({ probe: SETPOINT });

        expect(() => readFor(visAttrs, stored, picked)).not.toThrow();
        expect(stored).toEqual({ probe: SETPOINT });
    });

    it('reads no derivation without the channel object, the object copy still', () => {
        const read = readFor(visAttrs, { probe: SETPOINT }, { ...picked, channel: undefined });

        expect(read).not.toHaveProperty('probeZuordnung');
        expect(read.probeObject).toMatchObject({ _id: SETPOINT });
    });

    it('reads no derivation for an id without a usable object', () => {
        expect(readFor(visAttrs, { probe: SETPOINT }, null)).not.toHaveProperty('probeZuordnung');
    });

    it('reads its derivation for a field whose object belongs to its id but whose derived key is unset', () => {
        const own = { _id: SETPOINT, type: 'number' };
        const stored = frozen({ probe: SETPOINT, probeObject: own });

        const read = readFor(visAttrs, stored, picked);

        expect(read.probeZuordnung).toEqual(DERIVED);
        expect(read.probeObject).toBe(own);
        expect(stored).toEqual({ probe: SETPOINT, probeObject: own });
    });

    it('keeps its own object when the object read finds no usable object', () => {
        const own = { _id: SETPOINT, type: 'number' };
        const read = readFor(visAttrs, { probe: SETPOINT, probeObject: own }, null);

        expect(read.probeObject).toBe(own);
        expect(read).not.toHaveProperty('probeZuordnung');
    });

    it('awaits nothing for a field whose object belongs to its id and whose derived keys are set', () => {
        const stored = { probe: SETPOINT, probeObject: { _id: SETPOINT }, probeZuordnung: { an: [true] } };

        expect(awaitedObjectsOf(stored, oidPickFieldsOf(visAttrs))).toEqual([]);
        expect(readFor(visAttrs, stored, picked)).toBe(stored);
    });

    it('awaits nothing for a field without a derivation whose object belongs to its id', () => {
        const plain = visAttrsOf(createIdField('soll', ANY_VALUE_TYPES, { inventRange: false }));
        const stored = { soll: SETPOINT, sollObject: { _id: SETPOINT } };

        expect(awaitedObjectsOf(stored, oidPickFieldsOf(plain))).toEqual([]);
    });
});
