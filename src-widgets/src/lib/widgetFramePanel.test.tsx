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
 */
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

// The colour fields and dividers come back as rows; their own rendering is covered by their tests.
vi.mock('../components/ContractColorField', () => ({ default: () => null }));
vi.mock('../components/PlainColorField', () => ({ default: () => null }));
vi.mock('../components/CollectionDivider', () => ({ default: () => null }));

import type { Connection } from '@iobroker/gui-components';
import type { RxWidgetInfoCustomComponentProperties, WidgetData } from '@iobroker/types-vis-2';

import useCollectionTheme from '../hooks/useCollectionTheme';
import SliderCollectionWidget from '../SliderCollectionWidget/SliderCollectionWidget';
import { THEME_STATE_ID } from './constants';
import { setDraftTheme } from './theme/draftThemeStore';
import { setLastKnownTheme } from './theme/lastKnownTheme';
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

/** The group body as vis-2 renders it for the selected widgets. */
function Panel({ fields, widgets, hostTheme = vis2HostTheme }: PanelProps): React.JSX.Element {
    const ids = Object.keys(widgets);
    const props = {
        context: {
            theme: hostTheme,
            socket: {},
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
    // The page forgets its theme: the next test opens a fresh editor.
    setLastKnownTheme(null);
});

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

    describe('before the editor knows the theme the built-in standard applies (header and footer on)', () => {
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
        const host = Object.assign(Object.create(vis2HostTheme), { widgetFrame: { noHeader: true } });

        expect(openPanel({ w1: {} }, 'common', host)()).toEqual(expect.arrayContaining(HEADER_FIELDS));
    });
});
