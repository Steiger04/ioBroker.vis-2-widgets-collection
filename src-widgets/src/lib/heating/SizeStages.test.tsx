/**
 * The size-stage module in the body scene, with a stand-in type (ADR-0122 Nr. 3, 5; ADR-0124 Nr. 4).
 *
 * @module lib/heating/SizeStages.test
 * @remarks
 * A stand-in type hands the module its rule, its stages, its tile and its status through the
 * interface — no Raumthermostat logic. The scene injects the Content-Box the frame publishes.
 * Pinned: the empty content before the first measurement, the `ansicht` cap, the tile hull (whole
 * surface a button, name, open symbol, the warning triangle for a Meldung with the precedence
 * Störung > Hinweis and no sign without one (ADR-0124 Nachtrag 2), the status in the accessible name), motion under `prefers-reduced-motion` and the
 * Mini-Dialog (ADR-0122 Nr. 6, 7): its own measured box — fed here by a ResizeObserver fake, since
 * happy-dom lays nothing out — with the floor Einfach and no `ansicht` cap, open while the widget
 * grows out of Mini, closing back to the tile, in the collection theme. The focus trap and the real
 * layout are left to the acceptance in the browser.
 */
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest';

import { useTheme, type Theme } from '@mui/material';
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

/** The box the ResizeObserver fake reports for the Mini-Dialog's content area; `undefined` reports nothing. */
let dialogBox: MeasuredBox | undefined;

const nativeResizeObserver = globalThis.ResizeObserver;

/** Reports {@link dialogBox} for the dialog's content area, nothing for anything else. */
class DialogBoxObserver {
    readonly #callback: ResizeObserverCallback;

    constructor(callback: ResizeObserverCallback) {
        this.#callback = callback;
    }

    observe(element: Element): void {
        if (dialogBox && element.hasAttribute('data-heating-dialog-box')) {
            this.#callback([{ contentRect: dialogBox } as unknown as ResizeObserverEntry], this);
        }
    }

    // eslint-disable-next-line class-methods-use-this -- nothing to stop
    unobserve(): void {}

    // eslint-disable-next-line class-methods-use-this -- nothing to stop
    disconnect(): void {}
}

globalThis.ResizeObserver = DialogBoxObserver;
installInertResizeObserver();

afterAll(() => {
    globalThis.ResizeObserver = nativeResizeObserver;
});

/** The themes the stand-in's stages render under, where they render. */
const themesSeen: { where: 'widget' | 'dialog'; theme: Theme }[] = [];

/**
 * The stand-in's drawn stage: names its stage and records the theme it renders under.
 *
 * @param props - Component props.
 * @param props.stage - The drawn stage.
 */
function StandInStage({ stage }: { stage: string }): React.JSX.Element {
    const theme = useTheme();
    return (
        <span
            data-stand-in={stage}
            ref={element => {
                if (element) {
                    themesSeen.push({ where: element.closest('[role="dialog"]') ? 'dialog' : 'widget', theme });
                }
            }}
        >
            {stage}
        </span>
    );
}

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
                    renderStage={stage => <StandInStage stage={stage} />}
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

    it('shows the name and the open symbol, and no status sign without a Meldung', () => {
        const { container } = mountBody(standIn(), scene(MINI));
        const tile = container.querySelector('[data-heating-tile]')!;

        expect(tile.textContent).toContain('Wohnzimmer');
        expect(statusSign(container).kind).toBeNull();
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

    it.each<[string, TileStatus, { kind: string | null; tone: string | null }]>([
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
        ['no sign for heizt without a Meldung', { tone: 'heizt', label: 'Heizt' }, { kind: null, tone: null }],
        ['no sign for kühl without a Meldung', { tone: 'kühl', label: 'Fenster offen' }, { kind: null, tone: null }],
        ['no sign for neutral without a Meldung', { tone: 'neutral' }, { kind: null, tone: null }],
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

    it('ripples the tile by default, and nothing pulses', () => {
        reducedMotion(false);
        const { container } = mountBody(standIn({ status: HEATING }), scene({ width: 100, height: 200 }));

        expect(container.querySelector('[data-pulse]')).toBeNull();
        act(() => {
            tileButton(container).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(container.querySelector('[data-heating-tile] .MuiTouchRipple-root')).not.toBeNull();
        expect(getComputedStyle(tileButton(container)).transition).toContain('background');
    });

    it('runs no animation under prefers-reduced-motion: no ripple, no transition', () => {
        reducedMotion(true);
        const { container } = mountBody(standIn({ status: HEATING }), scene({ width: 100, height: 200 }));

        act(() => {
            tileButton(container).dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(container.querySelector('[data-heating-tile] .MuiTouchRipple-root')).toBeNull();
        expect(getComputedStyle(tileButton(container)).transition).not.toContain('background');
    });
});

describe('SizeStages: the Mini-Dialog', () => {
    const MINI = { width: 100, height: 200 };
    const VOLL = { width: 320, height: 200 };

    afterEach(() => {
        dialogBox = undefined;
        themesSeen.length = 0;
    });

    /** The open dialog (portalled into the document body), if any. */
    const dialog = (): HTMLElement | null => document.body.querySelector<HTMLElement>('[role="dialog"]');

    /** The stage drawn inside the dialog, if any. */
    const dialogStage = (): string | null =>
        dialog()?.querySelector('[data-heating-stage]')?.getAttribute('data-heating-stage') ?? null;

    /** Mounts the stand-in as Mini and taps its tile. */
    const openFromTile = (props: StandIn = {}): ReturnType<typeof mountBody> => {
        const handle = mountBody(standIn(props), scene(MINI));
        act(() => {
            tileButton(handle.container).click();
        });
        return handle;
    };

    /** Lets the dialog's exit transition run out. */
    const transitionOut = async (): Promise<void> => {
        await act(async () => {
            await new Promise(resolve => setTimeout(resolve, 400));
        });
    };

    it('opens from the tile, titled with the type name and labelled with the Bezeichnung', () => {
        dialogBox = { width: 388, height: 684 };
        const { container } = openFromTile();

        expect(dialog()).not.toBeNull();
        expect(dialog()!.querySelector('[data-heating-dialog-title]')!.textContent).toBe('Raumthermostat');
        expect(dialog()!.getAttribute('aria-label')).toBe('Wohnzimmer');
        expect(dialog()!.hasAttribute('aria-labelledby')).toBe(false);
        expect(tileButton(container).getAttribute('aria-expanded')).toBe('true');
    });

    it('falls back to the type name as the accessible name without a Bezeichnung', () => {
        dialogBox = { width: 388, height: 684 };
        openFromTile({ name: '' });

        expect(dialog()!.getAttribute('aria-label')).toBe('Raumthermostat');
    });

    it('shows nothing in the dialog before its area is measured', () => {
        openFromTile();

        expect(dialog()).not.toBeNull();
        expect(dialogStage()).toBeNull();
        expect(dialog()!.querySelector('[data-stand-in]')).toBeNull();
    });

    it('draws the stage the rule gives the dialog box (Voll)', () => {
        dialogBox = { width: 388, height: 684 };
        openFromTile();

        expect(dialogStage()).toBe('voll');
        expect(dialog()!.querySelector('[data-stand-in="voll"]')).not.toBeNull();
    });

    it('never goes below Einfach in the dialog: a small dialog box gives Einfach, no tile', () => {
        dialogBox = { width: 100, height: 200 };
        openFromTile();

        expect(dialogStage()).toBe('einfach');
        expect(dialog()!.querySelector('[data-heating-tile]')).toBeNull();
    });

    it('does not cap the dialog at `ansicht: einfach`', () => {
        dialogBox = { width: 388, height: 684 };
        openFromTile({ ansicht: 'einfach' });

        expect(dialogStage()).toBe('voll');
    });

    it('stays open when the widget grows out of Mini', () => {
        dialogBox = { width: 388, height: 684 };
        const handle = openFromTile();
        handle.rerender(scene(VOLL));

        expect(stageIn(handle.container)).toBe('voll');
        expect(dialog()).not.toBeNull();
        expect(dialogStage()).toBe('voll');
    });

    it('draws dialog and content in the collection theme', () => {
        dialogBox = { width: 388, height: 684 };
        const handle = openFromTile();
        handle.rerender(scene(VOLL));

        const widgetTheme = themesSeen.find(seen => seen.where === 'widget')?.theme;
        const dialogTheme = themesSeen.find(seen => seen.where === 'dialog')?.theme;
        expect(widgetTheme).toBeDefined();
        expect(dialogTheme).toBe(widgetTheme);
    });

    it("sets the collection theme's font on the content in widget and dialog, for text outside Typography too", () => {
        dialogBox = { width: 388, height: 684 };
        const handle = openFromTile();
        handle.rerender(scene(VOLL));

        // Quotes around family names are the one thing the computed value normalises.
        const unquoted = (family: string | undefined): string | undefined => family?.replace(/["']/g, '');
        const fontFamily = unquoted(themesSeen.find(seen => seen.where === 'widget')!.theme.typography.fontFamily);
        const widgetContent = handle.container.querySelector<HTMLElement>('[data-heating-stage]')!;
        const dialogContent = dialog()!.querySelector<HTMLElement>('[data-heating-stage]')!;
        expect(fontFamily).toBeTruthy();
        expect(unquoted(getComputedStyle(widgetContent).fontFamily)).toBe(fontFamily);
        expect(unquoted(getComputedStyle(dialogContent).fontFamily)).toBe(fontFamily);
    });

    it.each<[string, () => void]>([
        [
            'the close button',
            () => dialog()!.querySelector<HTMLElement>('button[aria-label="heating_dialog_close"]')!.click(),
        ],
        [
            'Escape',
            () =>
                dialog()!.dispatchEvent(
                    new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }),
                ),
        ],
        [
            'a tap beside the dialog',
            () => {
                const backdrop = document.body.querySelector<HTMLElement>('.MuiDialog-container')!;
                backdrop.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
                backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            },
        ],
    ])('closes on %s and returns the focus to the tile', async (_case, close) => {
        dialogBox = { width: 388, height: 684 };
        const { container } = openFromTile();
        expect(document.activeElement).not.toBe(tileButton(container));

        act(close);
        await transitionOut();

        expect(dialog()).toBeNull();
        expect(tileButton(container).getAttribute('aria-expanded')).toBe('false');
        expect(document.activeElement).toBe(tileButton(container));
    });
});
