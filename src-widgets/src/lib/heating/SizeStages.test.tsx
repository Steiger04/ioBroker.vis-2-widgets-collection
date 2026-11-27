/**
 * The size-stage module in the body scene, with a stand-in type (ADR-0122 Nr. 3, 5; ADR-0124 Nr. 4).
 *
 * @module lib/heating/SizeStages.test
 * @remarks
 * A stand-in type hands the module its rule, its stages, its tile and its status through the
 * interface — no Raumthermostat logic. The scene injects the Content-Box the frame publishes.
 * Pinned: the empty content before the first measurement, the `ansicht` cap, the tile hull (whole
 * surface a button, name, open symbol, status dot with the precedence Störung > Hinweis > the
 * chip's tone, the status in the accessible name) and motion under `prefers-reduced-motion`.
 */
import { afterEach, describe, expect, it, vi } from 'vitest';

import { act, type FC } from 'react';

import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
} from '../testing/collectionScene';
import CollectionBase from '../../components/CollectionBase';
import useData from '../../hooks/useData';
import SizeStages, { type TileStatus } from './SizeStages';
import type { MeasuredBox, SizeStage } from './stageRule';

installInertResizeObserver();

const mountBody = testScopedMount();

/** The stand-in's rule: Voll from 300 px wide, Einfach from 150 px, else Mini. */
const standInRule = (box: MeasuredBox): SizeStage =>
    box.width >= 300 ? 'voll' : box.width >= 150 ? 'einfach' : 'mini';

/** What the stand-in type hands the module. */
interface StandIn {
    status?: TileStatus;
    name?: string;
    ansicht?: unknown;
}

/** A stand-in type body in its frame. */
const standIn = ({ status = { tone: 'neutral' }, name = 'Wohnzimmer', ansicht = 'voll' }: StandIn = {}): FC =>
    function StandInBody() {
        const { data } = useData('');
        return (
            <CollectionBase
                data={data}
                cornerIcon={false}
            >
                <SizeStages
                    rule={standInRule}
                    data={{}}
                    ansicht={ansicht}
                    renderStage={stage => <span data-stand-in={stage}>{stage}</span>}
                    renderTile={() => ({ main: <span data-stand-in="main">21°</span> })}
                    name={name}
                    typeName="Raumthermostat"
                    status={status}
                    fullSize={{ width: 420, height: 700 }}
                />
            </CollectionBase>
        );
    };

/** The scene, with a box when given. */
const scene = (box?: MeasuredBox): ReturnType<typeof collectionScene> => {
    const plain = collectionScene('size-stages-test', { noHeader: true, noFooter: true }, undefined);
    return box ? withContentBox(plain, box) : plain;
};

/** The stage the module drew, if any. */
const stageIn = (container: HTMLElement): string | null =>
    container.querySelector('[data-heating-stage]')?.getAttribute('data-heating-stage') ?? null;

/** The tile's button. */
const tileButton = (container: HTMLElement): HTMLElement => {
    const button = container.querySelector<HTMLElement>('[data-heating-tile] button[aria-haspopup="dialog"]');
    if (!button) {
        throw new Error('tile button not rendered');
    }
    return button;
};

/** The status sign of the tile: its kind and its tone. */
const statusSign = (container: HTMLElement): { kind: string | null; tone: string | null } => {
    const sign = container.querySelector('[data-heating-status]');
    return { kind: sign?.getAttribute('data-heating-status') ?? null, tone: sign?.getAttribute('data-tone') ?? null };
};

describe('SizeStages: before the first measurement', () => {
    it('leaves the content area empty: no stage, no tile, no control', () => {
        const { container } = mountBody(standIn(), scene());

        expect(stageIn(container)).toBeNull();
        expect(container.querySelector('[data-stand-in]')).toBeNull();
        expect(container.querySelector('[data-heating-tile]')).toBeNull();
        expect(container.querySelector('button')).toBeNull();
    });
});

describe('SizeStages: the stage', () => {
    it.each([
        ['Voll', 320, 'voll'],
        ['Einfach', 200, 'einfach'],
        ['Mini', 100, 'mini'],
    ])('draws %s for the box the rule gives it', (_case, width, stage) => {
        const { container } = mountBody(standIn(), scene({ width, height: 200 }));

        expect(stageIn(container)).toBe(stage);
    });

    it('hands Voll and Einfach to the type, Mini to the tile', () => {
        const voll = mountBody(standIn(), scene({ width: 320, height: 200 }));
        expect(voll.container.querySelector('[data-stand-in="voll"]')).not.toBeNull();
        expect(voll.container.querySelector('[data-heating-tile]')).toBeNull();

        const mini = mountBody(standIn(), scene({ width: 100, height: 200 }));
        expect(mini.container.querySelector('[data-heating-tile] [data-stand-in="main"]')).not.toBeNull();
    });

    it('caps a Voll box at Einfach with `ansicht: einfach`', () => {
        const { container } = mountBody(standIn({ ansicht: 'einfach' }), scene({ width: 320, height: 200 }));

        expect(stageIn(container)).toBe('einfach');
        expect(container.querySelector('[data-stand-in="einfach"]')).not.toBeNull();
    });

    it('keeps a Mini box Mini with `ansicht: einfach` — the cap never raises', () => {
        const { container } = mountBody(standIn({ ansicht: 'einfach' }), scene({ width: 100, height: 200 }));

        expect(stageIn(container)).toBe('mini');
    });

    it('follows the box when it changes', () => {
        const handle = mountBody(standIn(), scene({ width: 320, height: 200 }));
        handle.rerender(scene({ width: 100, height: 200 }));

        expect(stageIn(handle.container)).toBe('mini');
    });
});

describe('SizeStages: the tile hull', () => {
    const MINI = { width: 100, height: 200 };

    it('is one button over the whole tile, operable by keyboard as a native button', () => {
        const { container } = mountBody(standIn(), scene(MINI));
        const button = tileButton(container);

        expect(button.tagName).toBe('BUTTON');
        expect(button.hasAttribute('disabled')).toBe(false);
        expect(button.getAttribute('aria-expanded')).toBe('false');

        act(() => {
            button.click();
        });
        expect(tileButton(container).getAttribute('aria-expanded')).toBe('true');
    });

    it('shows the name, the status dot and the open symbol', () => {
        const { container } = mountBody(standIn(), scene(MINI));
        const tile = container.querySelector('[data-heating-tile]')!;

        expect(tile.textContent).toContain('Wohnzimmer');
        expect(statusSign(container).kind).toBe('dot');
        expect(tile.querySelector('[data-heating-open]')).not.toBeNull();
    });

    it('names the status in its accessible name', () => {
        const { container } = mountBody(standIn({ status: { tone: 'heizt', label: 'Heizt' } }), scene(MINI));

        expect(tileButton(container).getAttribute('aria-label')).toBe('Wohnzimmer, Heizt');
    });

    it('shows no name line without a name and falls back to the type name for assistive technology', () => {
        const { container } = mountBody(standIn({ name: '' }), scene(MINI));

        expect(container.querySelector('[data-heating-tile-name]')).toBeNull();
        expect(tileButton(container).getAttribute('aria-label')).toBe('Raumthermostat');
    });

    it.each<[string, TileStatus, { kind: string; tone: string }]>([
        [
            'a Störung over a Hinweis tone',
            { tone: 'heizt', message: 'störung', label: 'Nicht erreichbar' },
            { kind: 'triangle', tone: 'störung' },
        ],
        [
            'a Hinweis over the chip tone',
            { tone: 'kühl', message: 'hinweis', label: 'Batterie schwach' },
            { kind: 'triangle', tone: 'hinweis' },
        ],
        ['the chip tone without a Meldung (heizt)', { tone: 'heizt', label: 'Heizt' }, { kind: 'dot', tone: 'heizt' }],
        [
            'the chip tone without a Meldung (kühl)',
            { tone: 'kühl', label: 'Fenster offen' },
            { kind: 'dot', tone: 'kühl' },
        ],
        ['the chip tone without a Meldung (neutral)', { tone: 'neutral' }, { kind: 'dot', tone: 'neutral' }],
    ])('takes %s for its status sign', (_case, status, sign) => {
        const { container } = mountBody(standIn({ status }), scene(MINI));

        expect(statusSign(container)).toEqual(sign);
    });
});

describe('SizeStages: motion', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    /** Answers `prefers-reduced-motion: reduce` as given. */
    const reducedMotion = (reduce: boolean): void => {
        vi.spyOn(window, 'matchMedia').mockImplementation(
            query =>
                ({
                    matches: reduce && query.includes('prefers-reduced-motion: reduce'),
                    media: query,
                    onchange: null,
                    addListener: () => {},
                    removeListener: () => {},
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    dispatchEvent: () => false,
                }) as MediaQueryList,
        );
    };

    const HEATING = { tone: 'heizt', label: 'Heizt' } as const;

    it('pulses the heating dot and ripples the tile by default', () => {
        reducedMotion(false);
        const { container } = mountBody(standIn({ status: HEATING }), scene({ width: 100, height: 200 }));

        expect(container.querySelector('[data-heating-status]')!.hasAttribute('data-pulse')).toBe(true);
        act(() => {
            tileButton(container).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(container.querySelector('[data-heating-tile] .MuiTouchRipple-root')).not.toBeNull();
        expect(getComputedStyle(tileButton(container)).transition).toContain('background');
    });

    it('runs no animation under prefers-reduced-motion: no pulse, no ripple, no transition', () => {
        reducedMotion(true);
        const { container } = mountBody(standIn({ status: HEATING }), scene({ width: 100, height: 200 }));

        expect(container.querySelector('[data-heating-status]')!.hasAttribute('data-pulse')).toBe(false);
        act(() => {
            tileButton(container).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(container.querySelector('[data-heating-tile] .MuiTouchRipple-root')).toBeNull();
        expect(getComputedStyle(tileButton(container)).transition).not.toContain('background');
    });
});
