/**
 * Light2's switch-OID pick: the two Zustandszeilen of the button mode (Tastenmodus).
 *
 * @module lib/light2Fields.test
 * @remarks
 * Observed through the field's public contract: what its `onChange` hands to vis-2's
 * `changeData`. The socket (object database) is the system boundary and is faked. The pick
 * seeds the two rows TRUE/FALSE with the power icon — supplementing like the main-OID pick
 * (ADR-0104 §6, Nachtrag Ticket 02): rows the user already has keep order, alias and styles.
 */
import { describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/adapter-react-v5';
import type { RxWidgetInfoAttributesField, WidgetData } from '@iobroker/types-vis-2';

// The field lists render CollectionDivider and colour fields, which pull Generic (extends
// window.visRxWidget, absent outside vis-2). The handler under test never renders them.
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));

import light2Fields from './light2Fields';

const SWITCH = 'hue.0.lamp.on';

const SWITCH_OBJECT = {
    _id: SWITCH,
    type: 'state',
    common: { name: 'On', type: 'boolean', role: 'switch.light', read: true, write: true },
};

const fakeSocket = {
    getObject: (id: string): Promise<unknown> => Promise.resolve(id === SWITCH ? SWITCH_OBJECT : undefined),
    getObjectView: (): Promise<unknown> => Promise.resolve({ [SWITCH]: SWITCH_OBJECT }),
} as unknown as Connection;

const switchField = light2Fields().find(
    field => field.name === 'colorLightSwitchOid',
) as RxWidgetInfoAttributesField & {
    onChange: (
        field: RxWidgetInfoAttributesField,
        data: WidgetData,
        changeData: (newData: WidgetData) => void,
        socket: Connection,
    ) => Promise<void>;
};

/** Runs one pick of the switch OID and returns the data the handler hands to vis-2. */
async function pickSwitch(data: WidgetData): Promise<WidgetData> {
    let emitted: WidgetData | undefined;
    await switchField.onChange(
        switchField,
        { ...data, colorLightSwitchOid: SWITCH },
        newData => {
            emitted = newData;
        },
        fakeSocket,
    );
    if (!emitted) {
        throw new Error('the switch pick did not reach changeData');
    }
    return emitted;
}

/** The rows 1..values_count as `[value, alias, iconColor, iconSize]`. */
const rowsOf = (data: WidgetData): unknown[][] =>
    Array.from({ length: data.values_count as number }, (_, i) => [
        data[`value${i + 1}`],
        data[`alias${i + 1}`],
        data[`iconColor${i + 1}`],
        data[`iconSize${i + 1}`],
    ]);

describe('Light2 switch-OID pick — the two rows of the button mode', () => {
    it('seeds TRUE/FALSE with the red/green power icon on a first pick', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });

        expect(rowsOf(picked)).toEqual([
            [true, 'TRUE', 'red', 100],
            [false, 'FALSE', 'green', 100],
        ]);
        expect(picked.iconSmall1).toMatch(/^data:image\/svg\+xml/);
        expect(picked.iconSmall2).toBe(picked.iconSmall1);
        expect(picked.iconSize).toBe(0);
        expect(picked.ignoreCommonStates).toBe(false);
    });

    it('keeps order, alias and styles of the rows on a re-pick', async () => {
        const picked = await pickSwitch({ colorLightButton: true, values_count: 0 });
        const edited = {
            ...picked,
            iconSize: 50,
            value1: false,
            alias1: 'Aus',
            iconColor1: 'blue',
            iconSize1: 80,
            value2: true,
            alias2: 'An',
            iconColor2: 'yellow',
            iconSize2: 80,
        };

        const repicked = await pickSwitch(edited);

        expect(rowsOf(repicked)).toEqual([
            [false, 'Aus', 'blue', 80],
            [true, 'An', 'yellow', 80],
        ]);
        expect(repicked.iconSize).toBe(50);
    });

    it('appends only the missing row, with its power icon', async () => {
        const repicked = await pickSwitch({
            colorLightButton: true,
            values_count: 1,
            value1: true,
            alias1: 'An',
            iconColor1: 'blue',
            iconSize: 50,
        });

        expect(rowsOf(repicked)).toEqual([
            [true, 'An', 'blue', undefined],
            [false, 'FALSE', 'green', 100],
        ]);
        expect(repicked.iconSize).toBe(50);
    });
});
