/**
 * Attribut-Panel-Naht — which header and footer fields the attribute panel shows under the
 * effective value of "no header" / "no footer" (ADR-0117, Ticket 06).
 *
 * @module lib/widgetFramePanel.test
 * @remarks
 * The groups of a real widget (the slider: Allgemein and the Active group, which both carry
 * header and footer fields) go through the replica of vis-2's group body
 * (`lib/testing/vis2GroupBody`): a field whose `hidden` predicate holds for every selected widget's
 * stored data is left out. vis-2 hands the predicates the raw stored data only; what is checked is
 * that they hide by the value the widget renders — the Rückfall-Regel, then the cascade own value →
 * Rahmenvorgabe → standard — never where that value is read.
 *
 * Ticket 05 adds the frame settings themselves (the Erb-Adapter): its blocks open the state widget's
 * Allgemein group in a test host that plays the rest of vis-2 — it stores the data per selected
 * widget, hands the fields the first widget's data (under multi-selection vis-2's `commonValues`)
 * and the project in `context.views`, and applies a patch the way vis-2's custom branch does
 * (`WidgetField.tsx`): `null` deletes the key in every selected widget, a missing key keeps the old
 * value. The theme comes from a socket in the field context whose theme state holds the stored user
 * theme, so the panel reads the Rahmenvorgaben the way the widget does. Texts there are the English
 * words of `en.json`, placeholders filled.
 */
import { act, useState } from 'react';
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

// The colour fields and dividers come back as rows; their own rendering is covered by their tests.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

import en from '../i18n/en.json';
import useCollectionTheme from '../hooks/useCollectionTheme';
import StateCollectionWidget from '../StateCollectionWidget/StateCollectionWidget';
import SliderCollectionWidget from '../SliderCollectionWidget/SliderCollectionWidget';
import { THEME_STATE_ID } from './constants';
import { setDraftTheme } from './theme/draftThemeStore';
import { renderComponent, renderHook, type RenderComponentHandle } from './testing/testHarness';
import type { UserTheme } from './theme/themeTypes';
import { vis2CommonValues, Vis2GroupBody, vis2HostTheme, type Vis2PanelField } from './testing/vis2GroupBody';

/** The fields of the slider's attribute group `name`. */
const groupFields = (name: string): readonly Vis2PanelField[] =>
    (SliderCollectionWidget.getWidgetInfo().visAttrs.find(group => group.name === name)?.fields ??
        []) as readonly Vis2PanelField[];

/** The fields under Allgemein that hang on the header. */
const HEADER_FIELDS = ['noHeaderIcon', 'header', 'headerSize'];
/** The fields under Allgemein that hang on the footer. */
const FOOTER_FIELDS = ['footer', 'footerSize'];

type PanelProps = {
    fields: readonly Vis2PanelField[];
    /** The stored data per selected widget. */
    widgets: Record<string, WidgetData>;
    /** The vis-2 host theme in the custom-field context. */
    hostTheme?: object;
};

/**
 * The socket of the panel's own fields (the frame settings' Erb-Adapter reads the theme through it):
 * its read never answers, so only the canvas widgets of a test decide what the page knows of the theme.
 */
const pendingSocket = {
    getState: () => new Promise<never>(() => undefined),
    subscribeState: () => Promise.resolve(),
    unsubscribeState: () => undefined,
};

/** The group body as vis-2 renders it for the selected widgets. */
function Panel({ fields, widgets, hostTheme = vis2HostTheme }: PanelProps): React.JSX.Element {
    const ids = Object.keys(widgets);
    const props = {
        context: {
            theme: hostTheme,
            socket: pendingSocket,
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
            projectName: 'main',
            instance: 0,
            adapterName: 'vis-2',
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor: () => null,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    return (
        <Vis2GroupBody
            fields={fields}
            data={vis2CommonValues(widgets)}
            stored={Object.values(widgets)}
            onDataChange={() => undefined}
            props={props}
        />
    );
}

let panel: RenderComponentHandle<PanelProps> | null = null;
/** The props the panel was opened with. */
let lastProps: PanelProps | null = null;

type StateHandler = (id: string, state: ioBroker.State | null) => void;

/** The canvas widgets mounted by a test (their theme hooks), unmounted after it. */
const canvases: { unmount: () => void }[] = [];

/**
 * A collection widget on the canvas: its theme hook over a socket whose theme state holds `theme`
 * (none: the state is unset). Resolves once the read has been answered; `store` reports a change
 * of the stored theme, `unanswered` keeps the read pending.
 */
const canvasWidget = async (
    theme?: UserTheme,
    { unanswered = false } = {},
): Promise<{ store: (next: UserTheme) => void }> => {
    const handlers = new Set<StateHandler>();
    const answer = Promise.resolve(theme === undefined ? null : ({ val: JSON.stringify(theme) } as ioBroker.State));
    const socket = {
        getState: () => (unanswered ? new Promise<never>(() => undefined) : answer),
        subscribeState: (_id: string, cb: StateHandler) => {
            handlers.add(cb);
            return Promise.resolve();
        },
        unsubscribeState: (_id: string, cb: StateHandler) => {
            handlers.delete(cb);
        },
    } as unknown as Connection;
    canvases.push(renderHook(() => useCollectionTheme(socket, vis2HostTheme)));
    await act(async () => {
        await answer;
    });
    return {
        store: next =>
            act(() => {
                for (const handler of [...handlers]) {
                    handler(THEME_STATE_ID, { val: JSON.stringify(next) } as ioBroker.State);
                }
            }),
    };
};

/** A stored theme with Rahmenvorgaben. */
const withPresets = (widgetFrame: Record<string, boolean>): UserTheme => ({ widgetFrame });

/** Opens the group `group` for the selected widgets; returns the names of the rows it shows. */
const openPanel = (widgets: Record<string, WidgetData>, group = 'common', hostTheme?: object): (() => string[]) => {
    panel?.unmount();
    lastProps = { fields: groupFields(group), widgets, hostTheme };
    panel = renderComponent(Panel, lastProps);
    return () => [...panel!.container.querySelectorAll('tr[data-field]')].map(row => row.getAttribute('data-field')!);
};

/** Renders the open panel again, as vis-2 does on its next render (a selection, a project change). */
const hostRender = (): void => panel!.rerender({ ...lastProps! });

/** Puts a Studio draft on the canvas (null: takes it off), as the open Theme Studio does; waits for the flush. */
const studioDraft = (draft: UserTheme | null): Promise<void> => {
    setDraftTheme(draft);
    return act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );
};

afterEach(async () => {
    await studioDraft(null);
    panel?.unmount();
    panel = null;
    for (const canvas of canvases.splice(0)) {
        canvas.unmount();
    }
});

// The test file is one page, which knows the theme once a canvas widget or a panel field has read
// it: the next two blocks run first, before anything here has read one.
describe('fix: the header and footer fields follow the value the widget reads', () => {
    it.each([
        ['noHeader', HEADER_FIELDS],
        ['noFooter', FOOTER_FIELDS],
    ])('an unusable stored %s reads as unset: its fields stay, as the widget shows that part', (key, names) => {
        // The vis-2 assistant writes text into a checkbox field; the widget reads it as unset (ADR-0114).
        const rows = openPanel({ w1: { [key]: 'true' } });

        expect(rows()).toEqual(expect.arrayContaining(names));
    });

    it.each([
        ['noHeader', HEADER_FIELDS],
        ['noFooter', FOOTER_FIELDS],
    ])('a stored %s: true still hides its fields', (key, names) => {
        const rows = openPanel({ w1: { [key]: true } });

        for (const name of names) {
            expect(rows()).not.toContain(name);
        }
    });
});

describe('ticket 06: before the editor knows the theme the built-in standard applies (header and footer on)', () => {
    it('without a canvas widget an unset header shows its fields, a set "off" hides them', () => {
        expect(openPanel({ w1: {} })()).toEqual(expect.arrayContaining(HEADER_FIELDS));
        expect(openPanel({ w1: { noHeader: true } })()).not.toContain('header');
    });

    it('while the canvas widget still waits for the theme, the fields show as on its canvas', async () => {
        await canvasWidget(withPresets({ noHeader: true }), { unanswered: true });

        expect(openPanel({ w1: {} })()).toEqual(expect.arrayContaining(HEADER_FIELDS));
    });

    it('a theme without Rahmenvorgaben reads the standard', async () => {
        await canvasWidget({});

        expect(openPanel({ w1: {} })()).toEqual(expect.arrayContaining(HEADER_FIELDS));
    });

    it('a widget mounting later keeps what an earlier one read until its own read answers', async () => {
        await canvasWidget(withPresets({ noHeader: true }));
        await canvasWidget(withPresets({ noHeader: true }), { unanswered: true });

        expect(openPanel({ w1: {} })()).not.toContain('header');
    });
});

describe('ticket 06: the header and footer fields follow the inherited value', () => {
    it('an inherited "no header" hides the header fields, the footer fields stay', async () => {
        await canvasWidget(withPresets({ noHeader: true }));
        const rows = openPanel({ w1: {} });

        for (const name of HEADER_FIELDS) {
            expect(rows()).not.toContain(name);
        }
        expect(rows()).toEqual(expect.arrayContaining(['noHeader', ...FOOTER_FIELDS]));
    });

    it('an inherited "no footer" hides the footer fields, the header fields stay', async () => {
        await canvasWidget(withPresets({ noFooter: true }));
        const rows = openPanel({ w1: {} });

        for (const name of FOOTER_FIELDS) {
            expect(rows()).not.toContain(name);
        }
        expect(rows()).toEqual(expect.arrayContaining(['noFooter', ...HEADER_FIELDS]));
    });

    it('an inherited header and footer show their fields', async () => {
        await canvasWidget(withPresets({ noHeader: false, noFooter: false }));
        const rows = openPanel({ w1: {} });

        expect(rows()).toEqual(expect.arrayContaining([...HEADER_FIELDS, ...FOOTER_FIELDS]));
    });

    it('a set value beats the Rahmenvorgabe, both ways', async () => {
        await canvasWidget(withPresets({ noHeader: true, noFooter: false }));
        const rows = openPanel({ w1: { noHeader: false, noFooter: true } });

        expect(rows()).toEqual(expect.arrayContaining(HEADER_FIELDS));
        for (const name of FOOTER_FIELDS) {
            expect(rows()).not.toContain(name);
        }
    });

    it('a cleared value (null) inherits like an unset one', async () => {
        await canvasWidget(withPresets({ noHeader: true }));
        const rows = openPanel({ w1: { noHeader: null } });

        expect(rows()).not.toContain('header');
    });

    it('the Active group hides its header divider and header fields by the inherited value', async () => {
        const fields = groupFields('active');
        const divider = `#${fields.findIndex(field => field.name === 'headerActive') - 1}`;
        await canvasWidget(withPresets({ noHeader: true }));
        const rows = openPanel({ w1: {} }, 'active');

        expect(rows()).not.toContain('headerActive');
        expect(rows()).not.toContain(divider);
        expect(rows()).toContain('footerActive');
    });

    describe('multi-selection: hidden only when it holds for every selected widget', () => {
        it.each<[string, WidgetData, WidgetData, Record<string, boolean>, boolean]>([
            ['one sets the header on, one inherits "off"', { noHeader: false }, {}, { noHeader: true }, false],
            ['both inherit "off"', {}, {}, { noHeader: true }, true],
            ['one sets "off", one inherits "off"', { noHeader: true }, {}, { noHeader: true }, true],
            ['one inherits "off", one sets "off" (other order)', {}, { noHeader: true }, { noHeader: true }, true],
            ['one sets "off", one inherits the standard "on"', { noHeader: true }, {}, {}, false],
        ])('%s', async (_case, w1, w2, presets, hidden) => {
            await canvasWidget(withPresets(presets));
            const rows = openPanel({ w1, w2 });

            for (const name of HEADER_FIELDS) {
                expect(rows().includes(name)).toBe(!hidden);
            }
        });
    });

    it('a changed Rahmenvorgabe takes effect with the next render of the open panel', async () => {
        const canvas = await canvasWidget(withPresets({ noHeader: true }));
        const rows = openPanel({ w1: {} });
        expect(rows()).not.toContain('header');

        canvas.store(withPresets({ noHeader: false }));
        hostRender();

        expect(rows()).toEqual(expect.arrayContaining(HEADER_FIELDS));
    });

    describe('a Studio draft beats the stored Rahmenvorgabe while it lasts', () => {
        it('a draft with the header on shows the fields an inherited stored "off" hides', async () => {
            await canvasWidget(withPresets({ noHeader: true }));
            await studioDraft(withPresets({ noHeader: false }));
            const rows = openPanel({ w1: {} });
            expect(rows()).toEqual(expect.arrayContaining(HEADER_FIELDS));

            // Discarded: the stored Rahmenvorgabe applies again with the panel's next render.
            await studioDraft(null);
            hostRender();
            expect(rows()).not.toContain('header');
        });

        it('a draft "no header" hides the fields before anything is stored', async () => {
            await canvasWidget({});
            await studioDraft(withPresets({ noHeader: true }));

            expect(openPanel({ w1: {} })()).not.toContain('header');
        });
    });

    it('takes no Rahmenvorgabe from the host theme (ADR-0078)', async () => {
        await canvasWidget({});
        const host = { ...vis2HostTheme, widgetFrame: { noHeader: true } };

        expect(openPanel({ w1: {} }, 'common', host)()).toEqual(expect.arrayContaining(HEADER_FIELDS));
    });
});

/** The fields of the state widget's Allgemein group. */
const ALLGEMEIN = (StateCollectionWidget.getWidgetInfo().visAttrs.find(group => group.name === 'common')?.fields ??
    []) as readonly Vis2PanelField[];

/** A socket whose theme state holds `theme`; `push` sends a new value, as a change from elsewhere. */
const themeSocket = (theme?: object): { socket: unknown; push: (theme: object) => Promise<void> } => {
    const listeners = new Set<(id: string, state: { val: string }) => void>();
    const socket = {
        getState: (id: string): Promise<{ val: string } | null> =>
            Promise.resolve(id === THEME_STATE_ID && theme ? { val: JSON.stringify(theme) } : null),
        subscribeState: (_id: string, onChange: (id: string, state: { val: string }) => void): Promise<void> => {
            listeners.add(onChange);
            return Promise.resolve();
        },
        unsubscribeState: (_id: string, onChange: (id: string, state: { val: string }) => void): void => {
            listeners.delete(onChange);
        },
    };
    return {
        socket,
        push: async next => {
            await act(async () => {
                for (const listener of listeners) {
                    listener(THEME_STATE_ID, { val: JSON.stringify(next) });
                }
                await Promise.resolve();
            });
        },
    };
};

type HostProps = {
    /** The stored data per selected widget, in selection order. */
    initial: Record<string, WidgetData>;
    socket: unknown;
    /** Receives every patch a field reports. */
    onPatch: (patch: WidgetData) => void;
};

/** vis-2's attribute panel for the selected widgets: the Allgemein group, patches applied. */
function PanelHost({ initial, socket, onPatch }: HostProps): React.JSX.Element {
    const [widgets, setWidgets] = useState(initial);
    const ids = Object.keys(widgets);
    const props = {
        context: {
            theme: vis2HostTheme,
            socket,
            views: { v: { widgets: Object.fromEntries(ids.map(id => [id, { data: widgets[id] }])) } },
        },
        selectedView: 'v',
        selectedWidgets: ids,
        selectedWidget: ids[0],
        Editor: () => null,
    } as unknown as RxWidgetInfoCustomComponentProperties;
    const onDataChange = (patch: WidgetData): void => {
        onPatch(patch);
        setWidgets(current =>
            Object.fromEntries(
                Object.entries(current).map(([id, data]) => {
                    const next: WidgetData = { ...data };
                    for (const [key, value] of Object.entries(patch)) {
                        if (value === null) {
                            delete next[key];
                        } else {
                            next[key] = value;
                        }
                    }
                    return [id, next];
                }),
            ),
        );
    };
    return (
        <Vis2GroupBody
            fields={ALLGEMEIN}
            data={ids.length > 1 ? vis2CommonValues(widgets) : widgets[ids[0]]}
            stored={Object.values(widgets)}
            onDataChange={onDataChange}
            props={props}
        />
    );
}

let framePanel: RenderComponentHandle<HostProps> | null = null;

afterEach(() => {
    framePanel?.unmount();
    framePanel = null;
});

/** Opens Allgemein for the selected widgets under the stored theme; the theme read settles first. */
const openFramePanel = async (
    widgets: Record<string, WidgetData>,
    theme?: object,
): Promise<{ patches: WidgetData[]; push: (theme: object) => Promise<void> }> => {
    const { socket, push } = themeSocket(theme);
    const patches: WidgetData[] = [];
    framePanel = renderComponent<HostProps>(PanelHost, {
        initial: widgets,
        socket,
        onPatch: patch => void patches.push(patch),
    });
    await act(async () => {
        await Promise.resolve();
    });
    return { patches, push };
};

/** The value cell of the field `name`. */
const cellOf = (name: string): HTMLElement => {
    const cell = framePanel!.container.querySelector<HTMLElement>(`tr[data-field="${name}"] td:last-child`);
    if (!cell) {
        throw new Error(`no row ${name}`);
    }
    return cell;
};

/** What the choice of a boolean frame setting shows. */
const shownChoice = (name: string): string =>
    cellOf(name).querySelector<HTMLElement>('[role="combobox"]')?.textContent ?? '(no choice)';

/** Opens the choice of `name` and picks the option `value` (`inherit`, `on`, `off`), as a click does. */
const choose = (name: string, value: string): void => {
    const combobox = cellOf(name).querySelector<HTMLElement>('[role="combobox"]');
    act(() => {
        combobox?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
    });
    const option = document.body.querySelector<HTMLElement>(`[role="listbox"] li[data-value="${value}"]`);
    if (!option) {
        throw new Error(`no option ${value} for ${name}`);
    }
    act(() => option.click());
};

/** The options the open or closed choice of `name` offers, by their words (opens it to read them). */
const offeredChoices = (name: string): string[] => {
    const combobox = cellOf(name).querySelector<HTMLElement>('[role="combobox"]');
    act(() => {
        combobox?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
    });
    const offered = [...document.body.querySelectorAll<HTMLElement>('[role="listbox"] li')]
        .filter(item => getComputedStyle(item).display !== 'none' && item.getAttribute('aria-disabled') !== 'true')
        .map(item => item.textContent ?? '');
    act(() => {
        document.body
            .querySelector('[role="listbox"]')
            ?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    return offered;
};

/** Sets the native value of an input and fires its event, as a drag or typing does. */
const setInput = (input: HTMLInputElement | null, value: string, event: 'change' | 'input'): void => {
    if (!input) {
        throw new Error('no input');
    }
    act(() => {
        Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, value);
        input.dispatchEvent(new Event(event, { bubbles: true }));
    });
};

/** What the slider of a number frame setting shows: position, number, caption, whether × is offered. */
const shownSlider = (name: string): { position: string; number: string; caption: string; clear: boolean } => {
    const cell = cellOf(name);
    return {
        position: cell.querySelector<HTMLInputElement>('input[type="range"]')?.value ?? '(no slider)',
        number: cell.querySelector<HTMLInputElement>('input[type="number"]')?.value ?? '(no number)',
        caption: cell.querySelector<HTMLElement>('[data-frame-caption]')?.textContent ?? '',
        clear: cell.querySelector('button[aria-label]') !== null,
    };
};

/** Drags the slider of `name` to `value`. */
const drag = (name: string, value: number): void =>
    setInput(cellOf(name).querySelector<HTMLInputElement>('input[type="range"]'), String(value), 'change');

/** Clicks the × of `name`. */
const clear = (name: string): void => {
    const button = cellOf(name).querySelector<HTMLButtonElement>('button[aria-label]');
    if (!button) {
        throw new Error(`no × for ${name}`);
    }
    act(() => button.click());
};

/** The host's `t` of the dom test project, put back after this file. */
let keyTranslator: unknown;

beforeAll(() => {
    const host = (window as unknown as { visRxWidget: { t: unknown } }).visRxWidget;
    keyTranslator = host.t;
    // The words of en.json for the host's `t`, `%s` filled in order.
    host.t = (key: string, ...args: string[]): string =>
        args.reduce((text, arg) => text.replace('%s', arg), (en as Record<string, string>)[key] ?? key);
});

afterAll(() => {
    (window as unknown as { visRxWidget: { t: unknown } }).visRxWidget.t = keyTranslator;
});

describe('ticket 05: a boolean frame setting', () => {
    it('without an own value shows "As theme" with the standard, or with the Rahmenvorgabe', async () => {
        await openFramePanel({ w1: {} });
        expect(shownChoice('noCard')).toBe('As theme (off)');

        framePanel!.unmount();
        await openFramePanel({ w1: {} }, { widgetFrame: { noCard: true } });
        expect(shownChoice('noCard')).toBe('As theme (on)');
    });

    it('offers "As theme" with the inherited value, "On" and "Off" — under the field\'s own label', async () => {
        await openFramePanel({ w1: {} }, { widgetFrame: { noHeader: true } });

        expect(offeredChoices('noHeader')).toEqual(['As theme (on)', 'On', 'Off']);
        expect(framePanel!.container.querySelector('tr[data-field="noHeader"] td')?.textContent).toBe('no_header');
    });

    it('follows a changed Rahmenvorgabe while the panel is open', async () => {
        const { push } = await openFramePanel({ w1: {} }, { widgetFrame: { outlined: false } });
        expect(shownChoice('outlined')).toBe('As theme (off)');

        await push({ widgetFrame: { outlined: true } });

        expect(shownChoice('outlined')).toBe('As theme (on)');
    });

    it('shows nothing it writes: opening and showing report no patch', async () => {
        const { patches } = await openFramePanel({ w1: {} }, { widgetFrame: { noCard: true } });
        offeredChoices('noCard');

        expect(patches).toEqual([]);
    });

    it('"On" and "Off" report the value, also where it equals the inherited one; "As theme" reports null', async () => {
        const { patches } = await openFramePanel({ w1: {} });

        choose('noFooter', 'off');
        expect(shownChoice('noFooter')).toBe('Off');
        choose('noFooter', 'on');
        expect(shownChoice('noFooter')).toBe('On');
        choose('noFooter', 'inherit');
        expect(shownChoice('noFooter')).toBe('As theme (off)');

        expect(patches).toEqual([{ noFooter: false }, { noFooter: true }, { noFooter: null }]);
    });

    it('an existing widget with the stored old default shows it as set ("Off"), not as inheriting', async () => {
        await openFramePanel({ w1: { noCard: false, noHeader: false, outlinedFrame: false } });

        expect(shownChoice('noCard')).toBe('Off');
        expect(shownChoice('noHeader')).toBe('Off');
        expect(shownChoice('outlinedFrame')).toBe('Off');
    });

    it('reads a stored value the widget cannot use as inheriting, as the widget does (Rückfall-Regel)', async () => {
        // The vis-2 assistant writes text into a boolean field; the widget reads it as unset (ADR-0114).
        const { patches } = await openFramePanel({ w1: { noCard: 'true' } }, { widgetFrame: { noCard: true } });
        expect(shownChoice('noCard')).toBe('As theme (on)');

        choose('noCard', 'off');
        expect(patches).toEqual([{ noCard: false }]);
    });

    // configurator-design: a slider move does not write the project on every step (vis-2 writes it
    // for every patch). The slider shows each move at once; the latest value is written 150 ms after
    // the first unwritten move, at once on release, and on unmount.
    describe('review: dragging the slider writes every 150 ms, and on release', () => {
        /** Presses the slider of `name` at `value` (a 240 px track: 10 px per shadow step). */
        const pointerOn = (
            name: string,
        ): { down: (v: number) => void; move: (v: number) => void; up: (v: number) => void } => {
            const root = cellOf(name).querySelector<HTMLElement>('.MuiSlider-root')!;
            root.getBoundingClientRect = () =>
                ({ left: 0, top: 0, width: 240, height: 20, right: 240, bottom: 20, x: 0, y: 0 }) as DOMRect;
            const at = (type: string, value: number, target: EventTarget): void => {
                act(() => {
                    target.dispatchEvent(
                        new PointerEvent(type, {
                            bubbles: true,
                            cancelable: true,
                            pointerId: 1,
                            button: 0,
                            buttons: type === 'pointerup' ? 0 : 1,
                            clientX: value * 10,
                            clientY: 10,
                        }),
                    );
                });
            };
            return {
                down: value => at('pointerdown', value, root),
                move: value => at('pointermove', value, document),
                up: value => at('pointerup', value, document),
            };
        };

        afterEach(() => {
            vi.useRealTimers();
        });

        it('shows every move at once and writes the latest one 150 ms after the first, then on release', async () => {
            vi.useFakeTimers();
            const { patches } = await openFramePanel({ w1: {} });
            const slider = pointerOn('baseElevation');

            slider.down(5);
            slider.move(7);
            slider.move(9);
            expect(shownSlider('baseElevation').position).toBe('9');
            expect(patches).toEqual([]);

            act(() => {
                vi.advanceTimersByTime(150);
            });
            expect(patches).toEqual([{ baseElevation: 9 }]);

            slider.move(12);
            slider.up(12);
            expect(patches).toEqual([{ baseElevation: 9 }, { baseElevation: 12 }]);
            expect(shownSlider('baseElevation')).toMatchObject({ position: '12', number: '12' });

            // Nothing waits any more.
            act(() => {
                vi.advanceTimersByTime(500);
            });
            expect(patches).toHaveLength(2);
        });

        it('writes a move still waiting when the panel closes', async () => {
            vi.useFakeTimers();
            const { patches } = await openFramePanel({ w1: {} });
            const slider = pointerOn('baseElevation');

            slider.down(6);
            framePanel!.unmount();
            framePanel = null;

            expect(patches).toEqual([{ baseElevation: 6 }]);
        });
    });

    describe('multi-selection', () => {
        it.each<[string, Record<string, WidgetData>]>([
            ['set against inheriting', { w1: { noCard: true }, w2: {} }],
            ['inheriting against set (the first widget lacks the key)', { w1: {}, w2: { noCard: true } }],
            ['two own values', { w1: { noCard: true }, w2: { noCard: false } }],
        ])('%s shows the mixed state', async (_case, widgets) => {
            await openFramePanel(widgets);

            expect(shownChoice('noCard')).toBe('Mixed');
            expect(offeredChoices('noCard')).toEqual(['As theme (off)', 'On', 'Off']);
        });

        it('shows the common state where the widgets agree', async () => {
            await openFramePanel({ w1: { noCard: true }, w2: { noCard: true }, w3: { noCard: true } });
            expect(shownChoice('noCard')).toBe('On');

            framePanel!.unmount();
            await openFramePanel({ w1: {}, w2: { noCard: null } }, { widgetFrame: { noCard: true } });
            expect(shownChoice('noCard')).toBe('As theme (on)');
        });

        it('a choice reports one patch for all selected widgets, and all show it', async () => {
            const { patches } = await openFramePanel({ w1: {}, w2: { noCard: true } });

            choose('noCard', 'off');
            expect(shownChoice('noCard')).toBe('Off');
            choose('noCard', 'inherit');
            expect(shownChoice('noCard')).toBe('As theme (off)');

            expect(patches).toEqual([{ noCard: false }, { noCard: null }]);
        });
    });
});

describe('ticket 05: a number frame setting', () => {
    it('without an own value shows the slider at the inherited value, "inherits · Standard: n", no ×', async () => {
        await openFramePanel({ w1: {} });

        expect(shownSlider('baseElevation')).toEqual({
            position: '4',
            number: '',
            caption: 'inherits · Standard: 4',
            clear: false,
        });
        expect(shownSlider('basePadding').caption).toBe('inherits · Standard: 1');
    });

    it('names the Rahmenvorgabe as "Theme" and follows it while the panel is open', async () => {
        const { push } = await openFramePanel({ w1: {} }, { widgetFrame: { baseElevation: 10 } });
        expect(shownSlider('baseElevation')).toMatchObject({ position: '10', caption: 'inherits · Theme: 10' });

        await push({ widgetFrame: { baseElevation: 0 } });

        expect(shownSlider('baseElevation')).toMatchObject({ position: '0', caption: 'inherits · Theme: 0' });
    });

    it('dragging stores the value and offers ×; × reports null and the setting erbt again', async () => {
        const { patches } = await openFramePanel({ w1: {} }, { widgetFrame: { baseElevation: 10 } });

        drag('baseElevation', 7);
        expect(shownSlider('baseElevation')).toEqual({ position: '7', number: '7', caption: '', clear: true });

        clear('baseElevation');
        expect(shownSlider('baseElevation')).toMatchObject({
            position: '10',
            caption: 'inherits · Theme: 10',
            clear: false,
        });

        expect(patches).toEqual([{ baseElevation: 7 }, { baseElevation: null }]);
    });

    it('typing a number stores it within the range', async () => {
        const { patches } = await openFramePanel({ w1: {} });
        const input = cellOf('basePadding').querySelector<HTMLInputElement>('input[type="number"]');

        setInput(input, '2.5', 'input');
        setInput(input, '40', 'input');

        expect(patches).toEqual([{ basePadding: 2.5 }, { basePadding: 10 }]);
    });

    // A typed number lands on the slider's step: MUI draws no shadow for an elevation of 2.5 (and
    // logs an error), the Rahmenvorgabe drops such a shadow already.
    describe('review: a typed number snaps to the step of the setting', () => {
        it.each<[string, string, number]>([
            ['baseElevation', '2.5', 3],
            ['baseElevation', '7.4', 7],
            ['basePadding', '1.23', 1.2],
            ['basePadding', '2.57', 2.6],
        ])('%s: typing %s stores %s', async (name, typed, stored) => {
            const { patches } = await openFramePanel({ w1: {} });

            setInput(cellOf(name).querySelector<HTMLInputElement>('input[type="number"]'), typed, 'input');

            expect(patches).toEqual([{ [name]: stored }]);
        });
    });

    // The widget reads an own shadow it cannot draw as unset (Rückfall-Regel): the panel says so.
    it('review: a stored shadow of 2.5 or 30 shows as inheriting, as the widget renders it', async () => {
        await openFramePanel({ w1: { baseElevation: 2.5 } }, { widgetFrame: { baseElevation: 10 } });
        expect(shownSlider('baseElevation')).toMatchObject({ position: '10', caption: 'inherits · Theme: 10' });

        framePanel!.unmount();
        await openFramePanel({ w1: { baseElevation: 30 } });
        expect(shownSlider('baseElevation')).toMatchObject({ position: '4', caption: 'inherits · Standard: 4' });
    });

    it('an existing widget with the stored old defaults shows them as set, with ×', async () => {
        await openFramePanel({ w1: { basePadding: 1, baseElevation: 4 } });

        expect(shownSlider('basePadding')).toEqual({ position: '1', number: '1', caption: '', clear: true });
        expect(shownSlider('baseElevation')).toEqual({ position: '4', number: '4', caption: '', clear: true });
    });

    it('shows nothing it writes: opening reports no patch', async () => {
        const { patches } = await openFramePanel({ w1: { basePadding: 1 } }, { widgetFrame: { basePadding: 3 } });

        expect(shownSlider('basePadding').position).toBe('1');
        expect(patches).toEqual([]);
    });

    describe('multi-selection', () => {
        it.each<[string, Record<string, WidgetData>]>([
            ['set against inheriting', { w1: { baseElevation: 8 }, w2: {} }],
            ['inheriting against set (the first widget lacks the key)', { w1: {}, w2: { baseElevation: 8 } }],
            ['two own values', { w1: { baseElevation: 8 }, w2: { baseElevation: 2 } }],
        ])('%s shows the mixed state and offers ×', async (_case, widgets) => {
            await openFramePanel(widgets);

            expect(shownSlider('baseElevation')).toMatchObject({ number: '', caption: 'Mixed', clear: true });
        });

        it('dragging and × report one patch for all selected widgets', async () => {
            const { patches } = await openFramePanel({ w1: {}, w2: { baseElevation: 8 } });

            drag('baseElevation', 12);
            expect(shownSlider('baseElevation')).toMatchObject({ number: '12', clear: true });
            clear('baseElevation');
            expect(shownSlider('baseElevation')).toMatchObject({ caption: 'inherits · Standard: 4', clear: false });

            expect(patches).toEqual([{ baseElevation: 12 }, { baseElevation: null }]);
        });
    });
});
