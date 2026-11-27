/**
 * The Raumthermostat body by its size stage, in the body scene (ADR-0122, ADR-0123 Nr. 2, 3).
 *
 * @module HeatingThermostatCollectionWidget/HeatingThermostatCollection.test
 * @remarks
 * The scene injects the Content-Box the frame publishes. Pinned: the empty content before the
 * first measurement, the stage and arrangement per box with their places (Kartenkopf, dial or big
 * set-point, pills, operating-mode segment, readings, hint line), the Kartenkopf's form per
 * arrangement (symbol, Bezeichnung, Unterzeile, chip), the `ansicht` cap, the tile with the
 * Bezeichnung and the frame settings leaving the Kartenkopf and the hint line alone. The thresholds
 * themselves are pinned at the rule (`thermostatStages.test`); the status logic at the widget seam.
 */
import { act, createElement } from 'react';
import { describe, expect, it } from 'vitest';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../lib/testing/collectionScene';
import { FIXTURES, SETPOINT_OID } from '../lib/testing/widgetFixtures';
import { readWidgetData } from '../lib/testing/widgetReading';
import { thermostatBindingFields, thermostatValueFields } from '../lib/heating/thermostatFields';
import HeatingThermostatCollection from './HeatingThermostatCollection';
import type { MeasuredBox } from '../lib/heating/stageRule';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const mountBody = testScopedMount();

/** The start size's Content-Box (420 × 700 px outer, the grid test's frame arithmetic). */
const START_BOX = { width: 396, height: 636 };

/** A Raumthermostat scene over the fixture's data as the widget reads it, with a box when given. */
const scene = (
    data: Record<string, unknown> = {},
    box?: MeasuredBox,
    values: Record<string, unknown> = {},
): PreviewScene => {
    const plain = collectionScene(
        'heating-thermostat-test',
        readWidgetData([...thermostatBindingFields(), ...thermostatValueFields()], {
            ...FIXTURES.HeatingThermostatCollectionWidget!.data,
            ...data,
        }),
        21.5,
        SETPOINT_OID,
    );
    const valued = { ...plain, context: { ...plain.context, values: { ...plain.context.values, ...values } } };
    return box ? withContentBox(valued, box) : valued;
};

/** The value of a data attribute on the first element carrying it. */
const attribute = (container: HTMLElement, name: string): string | null =>
    container.querySelector(`[${name}]`)?.getAttribute(name) ?? null;

/** The places of the drawn arrangement that carry content, in document order. */
const filledSlots = (container: HTMLElement): string[] =>
    [...container.querySelectorAll('[data-heating-slot]')].map(slot => slot.getAttribute('data-heating-slot')!);

describe('HeatingThermostatCollection: before the first measurement', () => {
    it('leaves the content area empty: no stage, no set-point, no control', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene());

        expect(attribute(container, 'data-heating-stage')).toBeNull();
        expect(container.querySelector('[data-heating-setpoint]')).toBeNull();
        expect(container.querySelector('button')).toBeNull();
    });
});

describe('HeatingThermostatCollection: stage and arrangement', () => {
    it('starts in Voll, arrangement Groß, from the start size', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene({}, START_BOX));

        expect(attribute(container, 'data-heating-stage')).toBe('voll');
        expect(attribute(container, 'data-heating-arrangement')).toBe('gross');
    });

    it.each([
        ['Groß', START_BOX, 'voll', 'gross'],
        ['Mittel', { width: 296, height: 400 }, 'voll', 'mittel'],
        ['Quer', { width: 500, height: 150 }, 'einfach', 'quer'],
        ['Kompakt', { width: 280, height: 180 }, 'einfach', 'kompakt'],
    ])(
        'draws %s with its fixed Kartenkopf and hint-line places around a scrolling middle',
        (_case, box, stage, arrangement) => {
            const { container } = mountBody(HeatingThermostatCollection, scene({}, box));

            expect(attribute(container, 'data-heating-stage')).toBe(stage);
            expect(attribute(container, 'data-heating-arrangement')).toBe(arrangement);
            const regions = [...container.querySelectorAll('[data-heating-region]')].map(region =>
                region.getAttribute('data-heating-region'),
            );
            expect(regions).toEqual(expect.arrayContaining(['head', 'middle', 'hint']));
            const middle = container.querySelector<HTMLElement>('[data-heating-region="middle"]')!;
            expect(getComputedStyle(middle).overflowY).toBe('auto');
        },
    );

    it.each([
        ['Groß', START_BOX, 'dial', ['pills']],
        ['Mittel', { width: 296, height: 400 }, 'dial', []],
        ['Quer', { width: 500, height: 150 }, 'setpoint', []],
        ['Kompakt', { width: 280, height: 180 }, 'setpoint', []],
    ])(
        'shows the set-point in the place of %s — besides the Kartenkopf (and the pills of Groß) the other places stay empty until filled',
        (_case, box, place, more) => {
            const { container } = mountBody(HeatingThermostatCollection, scene({}, box));

            expect(filledSlots(container)).toEqual(['head', place, ...more]);
            expect(container.querySelector(`[data-heating-slot="${place}"] [data-heating-setpoint]`)?.textContent).toBe(
                '21.5 °C',
            );
        },
    );

    it('caps a Voll box at Einfach with `ansicht: einfach`', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene({ ansicht: 'einfach' }, START_BOX));

        expect(attribute(container, 'data-heating-stage')).toBe('einfach');
        expect(attribute(container, 'data-heating-arrangement')).toBe('kompakt');
    });

    it('keeps a Mini box Mini with `ansicht: einfach`', () => {
        const { container } = mountBody(
            HeatingThermostatCollection,
            scene({ ansicht: 'einfach' }, { width: 156, height: 66 }),
        );

        expect(attribute(container, 'data-heating-stage')).toBe('mini');
    });
});

describe('HeatingThermostatCollection: the tile', () => {
    const TILE_BOX = { width: 156, height: 66 };

    it('shows the Bezeichnung, the status dot and the set-point, and names itself by the Bezeichnung', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene({ bezeichnung: 'Wohnzimmer' }, TILE_BOX));
        const tile = container.querySelector('[data-heating-tile]')!;

        expect(tile.querySelector('[data-heating-tile-name]')?.textContent).toBe('Wohnzimmer');
        expect(tile.querySelector('[data-heating-status]')).not.toBeNull();
        expect(tile.querySelector('[data-heating-setpoint]')?.textContent).toBe('21.5 °C');
        expect(tile.querySelector('button')?.getAttribute('aria-label')).toBe('Wohnzimmer');
    });

    it('shows no name line without a Bezeichnung and names itself by the type', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene({}, TILE_BOX));

        expect(container.querySelector('[data-heating-tile-name]')).toBeNull();
        expect(container.querySelector('[data-heating-tile] button')?.getAttribute('aria-label')).toBe(
            'heating_thermostat_collection_widget',
        );
    });

    it('reports the neutral tone while no status is known', () => {
        const { container } = mountBody(HeatingThermostatCollection, scene({}, TILE_BOX));
        const sign = container.querySelector('[data-heating-status]')!;

        expect([sign.getAttribute('data-heating-status'), sign.getAttribute('data-tone')]).toEqual(['dot', 'neutral']);
    });
});

describe('HeatingThermostatCollection: the Kartenkopf per arrangement', () => {
    /** An operating mode reporting Auto: the chip shows it. */
    const MODE = { betriebsart: 'hz.mode', betriebsartZuordnung: { auto: [0], manuell: [1] } };
    const NAMES = { bezeichnung: 'Wohnzimmer', unterzeile: 'Heizkörper Fensterseite' };

    /** What the Kartenkopf shows: form, symbol, name, second line and chip. */
    const headOf = (container: HTMLElement): Record<string, unknown> => {
        const head = container.querySelector('[data-heating-slot="head"] [data-heating-head]')!;
        return {
            form: head.getAttribute('data-heating-head'),
            symbol: head.querySelector('[data-heating-head-symbol]') !== null,
            name: head.querySelector('[data-heating-head-name]')?.textContent ?? null,
            second: head.querySelector('[data-heating-head-second]')?.textContent ?? null,
            chip: head.querySelector('[data-heating-chip]')?.textContent ?? null,
        };
    };

    it.each([
        ['Groß: symbol, Bezeichnung, Unterzeile and chip', START_BOX, 'zeile', true, 'Heizkörper Fensterseite'],
        ['Mittel: name and chip', { width: 296, height: 400 }, 'zeile', false, null],
        ['Quer: stacked', { width: 500, height: 150 }, 'gestapelt', false, null],
        ['Kompakt: a row', { width: 280, height: 180 }, 'zeile', false, null],
    ])('%s', (_case, box, form, symbol, second) => {
        const { container } = mountBody(
            HeatingThermostatCollection,
            scene({ ...MODE, ...NAMES }, box, { 'hz.mode.val': 0 }),
        );

        expect(headOf(container)).toEqual({
            form,
            symbol,
            name: 'Wohnzimmer',
            second,
            chip: 'heating_neutral_auto',
        });
    });

    it('shows no second line for an empty Unterzeile, and no chip while nothing is known', () => {
        const { container } = mountBody(
            HeatingThermostatCollection,
            scene({ bezeichnung: 'Bad', unterzeile: '' }, START_BOX),
        );

        expect(headOf(container)).toEqual({ form: 'zeile', symbol: true, name: 'Bad', second: null, chip: null });
    });
});

describe('HeatingThermostatCollection: the frame settings', () => {
    it.each([
        ['with the header and the footer line', { noHeader: false, noFooter: false }],
        ['without them', { noHeader: true, noFooter: true }],
    ])('keep the Kartenkopf and hint-line places and the stage of the same box %s', (_case, frame) => {
        const { container } = mountBody(
            HeatingThermostatCollection,
            scene({ ...frame, bezeichnung: 'Bad' }, START_BOX),
        );

        expect(attribute(container, 'data-heating-arrangement')).toBe('gross');
        expect(container.querySelector('[data-heating-region="head"] [data-heating-head-name]')?.textContent).toBe(
            'Bad',
        );
        expect(container.querySelector('[data-heating-region="hint"]')).not.toBeNull();
    });
});

describe('HeatingThermostatCollection: the entry number (seam for the house types, ADR-0121)', () => {
    /** The numbered binding of entry 3 with the objects and mappings its pick stores. */
    const ENTRY_3 = {
        soll3: 'hz.e3.setpoint',
        soll3Object: { _id: 'hz.e3.setpoint', type: 'number', unit: '°C', write: true, minValue: 5, maxValue: 30 },
        betriebsart3: 'hz.e3.mode',
        betriebsart3Object: { _id: 'hz.e3.mode', type: 'number', write: true },
        betriebsart3Zuordnung: { auto: [0], manuell: [1] },
        boost3: 'hz.e3.boost',
        boost3Object: { _id: 'hz.e3.boost', type: 'boolean', write: true },
        boost3Zuordnung: { an: [true], aus: [false] },
    };
    const VALUES = { 'hz.e3.setpoint.val': 19.5, 'hz.e3.mode.val': 1, 'hz.e3.boost.val': false };

    it('reads and writes the numbered fields of entry 3, never the unnumbered ones', () => {
        const entry3 = (): ReturnType<typeof HeatingThermostatCollection> =>
            createElement(HeatingThermostatCollection, { entry: 3 });
        const { container, setValue } = mountBody(entry3, scene(ENTRY_3, START_BOX, VALUES));

        expect(container.querySelector('[data-heating-setpoint]')?.textContent).toBe('19.5 °C');
        expect(
            [...container.querySelectorAll('[data-heating-slot="modes"] [data-heating-pill][aria-pressed="true"]')].map(
                pill => pill.getAttribute('data-heating-pill'),
            ),
        ).toEqual(['manuell']);
        for (const pill of [
            '[data-heating-slot="modes"] [data-heating-pill="auto"]',
            '[data-heating-slot="modes"] [data-heating-pill="boost"]',
            '[data-heating-slot="pills"] [data-heating-pill="aus"]',
        ]) {
            act(() => container.querySelector<HTMLButtonElement>(pill)!.click());
        }
        expect(setValue.mock.calls).toEqual([
            ['hz.e3.mode', 0],
            ['hz.e3.boost', true],
            ['hz.e3.setpoint', 5],
        ]);
    });
});
