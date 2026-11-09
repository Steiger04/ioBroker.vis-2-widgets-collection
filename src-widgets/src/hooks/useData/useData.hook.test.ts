/**
 * useData — the Feldnummer behind each resolved state.
 *
 * @module hooks/useData/useData.hook.test
 * @remarks
 * Pins the state identity across a blank value row, where a state's Feldnummer and its
 * position in `states` diverge (CONTEXT.md "Feldnummer"). Mounted on the real
 * CollectionProvider over a preview scene (the Select/ButtonGroup DOM-test pattern), so
 * the style resolution runs exactly as inside a widget.
 */
import { useContext, type FC } from 'react';
import { afterEach, describe, expect, it } from 'vitest';

import { CollectionContext } from '../../components/CollectionProvider';
import { collectionScene, mountCollectionBody, type MountedCollectionBody } from '../../lib/testing/collectionScene';
import useData from './useData';
import type { StateStyleData, UseDataResult } from './types';
import type { PreviewScene } from '../../preview/types';

const OID = 'demo.0.mode';

/** Text colour configured on the blank row — it must never reach a state. */
const BLANK_ROW_COLOR = '#00aa00';
/** Text colour of the row the status matches. */
const MATCHED_ROW_COLOR = '#0000aa';

/** Three authored rows, the middle one blank: field 1 'a', field 2 '' (styled, no value), field 3 'c'. */
const gapRows = {
    values_count: 3,
    value1: 'a',
    value2: '',
    textColor2: BLANK_ROW_COLOR,
    value3: 'c',
    textColor3: MATCHED_ROW_COLOR,
};

const scene = (data: Record<string, unknown>, status: unknown): PreviewScene =>
    collectionScene('use-data-test', { oid: OID, oidObject: { _id: OID, type: 'string' }, ...data }, status);

const mounted: MountedCollectionBody[] = [];

/** Mounts `useData('oid', options)` inside the real provider and returns its result. */
const resolve = (
    data: Record<string, unknown>,
    status: unknown,
    options?: Parameters<typeof useData>[1],
): UseDataResult => {
    const captured: { current?: UseDataResult } = {};

    const Probe: FC = () => {
        captured.current = useData('oid', options);
        return null;
    };

    mounted.push(mountCollectionBody(Probe, scene(data, status)));

    if (!captured.current) {
        throw new Error('useData did not render');
    }
    return captured.current;
};

describe('useData — Feldnummer across a blank value row', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    it('numbers each resolved state by its field row — the blank row leaves a gap', () => {
        const { states } = resolve(gapRows, 'c');

        expect(states.map(state => [state.value, state.fieldNumber])).toEqual([
            ['a', 1],
            ['c', 3],
        ]);
    });

    it('resolves the active state by its Feldnummer, not by its list position', () => {
        const { states, activePosition, data } = resolve(gapRows, 'c');

        expect({ fieldNumber: states[activePosition!].fieldNumber, textColor: data.textColor }).toEqual({
            fieldNumber: 3,
            textColor: MATCHED_ROW_COLOR,
        });
    });

    it('reports the active list position for consumers that index the state list', () => {
        const { activePosition } = resolve(gapRows, 'c');

        expect(activePosition).toBe(1);
    });

    it('reports no position while no state matches the status', () => {
        const { activePosition } = resolve(gapRows, 'x');

        expect(activePosition).toBeUndefined();
    });
});

/** Icon colour of the base tier. */
const BASE_ICON_COLOR = '#aa0000';
/** Icon colour carried by the marker layer. */
const MARKER_ICON_COLOR = '#00aaaa';
/** Text colour of the base tier. */
const BASE_TEXT_COLOR = '#aa00aa';
/** Text colour carried by the marker layer. */
const MARKER_TEXT_COLOR = '#aaaa00';

/** One state row ('a', no own style) over a styled base tier. */
const markedRows = {
    values_count: 1,
    value1: 'a',
    iconColor: BASE_ICON_COLOR,
    iconSize: 200,
    textColor: BASE_TEXT_COLOR,
    valueSize: 16,
};

/** All four marker values, each differing from the base tier. */
const markerLayer = { iconColor: MARKER_ICON_COLOR, iconSize: 50, textColor: MARKER_TEXT_COLOR, textSize: 18 };

/** The four marker-bearing values of a resolved style. */
const markerFields = (
    style: Pick<StateStyleData, 'iconColor' | 'iconSize' | 'textColor' | 'valueSize'>,
): Record<string, unknown> => ({
    iconColor: style.iconColor,
    iconSize: style.iconSize,
    textColor: style.textColor,
    valueSize: style.valueSize,
});

const BASE_FIELDS = {
    iconColor: BASE_ICON_COLOR,
    iconSize: 'calc(24px * 200 / 100)',
    textColor: BASE_TEXT_COLOR,
    valueSize: 'calc(0.16rem * 0.875)',
};

const MARKER_FIELDS = {
    iconColor: MARKER_ICON_COLOR,
    iconSize: 'calc(24px * 50 / 100)',
    textColor: MARKER_TEXT_COLOR,
    valueSize: 'calc(0.18rem * 0.875)',
};

describe('useData — the marker layer applies to marks only', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    it.each([
        ['a state is active', 'a'],
        ['no state is active', 'x'],
    ])('resolves the active style `data` without the marker layer (%s)', (_case, status) => {
        const { data } = resolve(markedRows, status, { markerLayer });

        expect(markerFields(data)).toEqual(BASE_FIELDS);
    });

    it('resolves every state with the marker layer — a state without its own style takes the marker', () => {
        const { states } = resolve(markedRows, 'x', { markerLayer });

        expect(markerFields(states[0])).toEqual(MARKER_FIELDS);
    });

    it("resolves the marks' base style with the marker layer, inactive and active", () => {
        const { markBaseStyle } = resolve(markedRows, 'x', { markerLayer });

        expect([markerFields(markBaseStyle.inactive), markerFields(markBaseStyle.active)]).toEqual([
            MARKER_FIELDS,
            MARKER_FIELDS,
        ]);
    });

    it('ignores slider marker fields in the widget data when no marker layer is passed — no type detection', () => {
        const { states, markBaseStyle } = resolve(
            {
                ...markedRows,
                sliderOrientation: 'horizontal',
                markerIconColor: MARKER_ICON_COLOR,
                markerIconSize: 50,
                markerTextColor: MARKER_TEXT_COLOR,
                markerTextSize: 18,
            },
            'x',
        );

        expect([markerFields(states[0]), markerFields(markBaseStyle.inactive)]).toEqual([BASE_FIELDS, BASE_FIELDS]);
    });
});

/** Three rows, the first and the third sharing the value 'a' (a duplicate). */
const duplicateRows = {
    values_count: 3,
    value1: 'a',
    value2: 'b',
    value3: 'a',
};

describe('useData — the label of a state — ticket 12', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    const labelledRow = (alias: unknown): StateStyleData => {
        const { states } = resolve(
            {
                oidObject: { _id: OID, type: 'number', unit: ' °C' },
                values_count: 1,
                value1: 21,
                alias1: alias,
            },
            21,
        );
        return states[0];
    };

    it.each<[string, unknown]>([
        ['only spaces', '  '],
        ['spaces and a tab', ' \t '],
        ['a non-breaking space', ' '],
        ['an empty alias', ''],
        ['no alias', undefined],
    ])('falls back to the value with its unit: %s', (_label, alias) => {
        expect(labelledRow(alias).label).toBe('21 °C');
    });

    it('keeps a set alias as it is, edge spaces included', () => {
        expect(labelledRow(' warm ').label).toBe(' warm ');
    });

    it('leaves the alias of the state raw', () => {
        expect(labelledRow('  ').alias).toBe('  ');
    });

    it.each<[string, unknown]>([
        ['an object', { a: 1 }],
        ['NaN', NaN],
    ])('has no text for a row value that gives none: %s', (_label, value1) => {
        const { states } = resolve({ values_count: 1, value1 }, 'x');

        expect(states[0].label).toBe('');
    });
});

describe('useData — the active flag of each state (Aktiver Zustand)', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    it('flags the state matching the status as active, every other state as inactive', () => {
        const { states } = resolve(gapRows, 'c');

        expect(states.map(state => [state.value, state.active])).toEqual([
            ['a', false],
            ['c', true],
        ]);
    });

    it('flags every duplicate of the matching value as active', () => {
        const { states } = resolve(duplicateRows, 'a');

        expect(states.map(state => [state.value, state.active])).toEqual([
            ['a', true],
            ['b', false],
            ['a', true],
        ]);
    });

    it('keeps activePosition on the first duplicate', () => {
        const { states, activePosition } = resolve(duplicateRows, 'a');

        expect([activePosition, states[activePosition!].fieldNumber]).toEqual([0, 1]);
    });

    it('flags no state as active while no state matches the status', () => {
        const { states } = resolve(duplicateRows, 'x');

        expect(states.map(state => state.active)).toEqual([false, false, false]);
    });
});

/**
 * A body that builds from `oidValue` (the gauge's canvas options) would build twice per change
 * if a render saw the old value next to the new context data.
 */
describe('useData — oidValue, in the render that brings it', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    /** Per render what useData publishes and what the context reads in that same render. */
    let renders: { oidValue: unknown; read: unknown }[] = [];

    const Probe: FC = () => {
        const { getPropertyValue } = useContext(CollectionContext);
        renders.push({ oidValue: useData('oid').oidValue, read: getPropertyValue('oid') });
        return null;
    };

    const mountProbe = (status: unknown): MountedCollectionBody => {
        renders = [];
        const host = mountCollectionBody(Probe, scene({}, status));
        mounted.push(host);
        return host;
    };

    it.each([
        ['a string', 'a'],
        ['zero', 0],
        ['false', false],
        ['null', null],
        ['no value yet', undefined],
    ])('reads the same value as getPropertyValue: %s', (_label, status) => {
        mountProbe(status);

        expect(renders.at(-1)).toEqual({ oidValue: status, read: status });
    });

    it('has the new value in the render that brings it — no render with the old one', () => {
        const host = mountProbe(1);
        renders = [];

        host.rerender(scene({}, 2));

        expect(renders.map(render => render.oidValue)).toEqual([2]);
    });
});

describe('useData — the OID name behind the header', () => {
    afterEach(() => {
        for (const host of mounted.splice(0)) {
            host.unmount();
        }
    });

    /** The header without a header text, for an object named `name`, in the host language `lang`. */
    const headerOf = (name: unknown, lang: string): string | undefined => {
        const captured: { current?: UseDataResult } = {};
        const Probe: FC = () => {
            captured.current = useData('oid');
            return null;
        };
        mounted.push(
            mountCollectionBody(Probe, scene({ oidObject: { _id: OID, type: 'string', name } }, 'a'), { lang }),
        );
        return captured.current?.data.header;
    };

    it('reads a name in several languages in the host language', () => {
        expect(headerOf({ en: 'Lamp', de: 'Lampe' }, 'de')).toBe('Lampe');
    });

    it('falls back to the English name when the host language has none', () => {
        expect(headerOf({ en: 'Lamp', de: 'Lampe' }, 'fr')).toBe('Lamp');
    });

    it('stays empty when the name has neither the host language nor English', () => {
        expect(headerOf({ de: 'Lampe' }, 'fr')).toBe('');
    });

    it('leaves a plain name as it is', () => {
        expect(headerOf('LAMP_1.2', 'de')).toBe('LAMP_1.2');
    });

    it('leaves the text of a name in several languages as it is, like a plain one', () => {
        expect(headerOf({ de: 'MY_LAMP.1' }, 'de')).toBe('MY_LAMP.1');
    });
});
