/**
 * Naht „Theme-Auftrag“ — what an order placed by the vis-2 assistant (Bauzeit-KI) does (ADR-0115).
 *
 * @module lib/aiThemeOrder.test
 * @remarks
 * The assistant places the type of the Theme Studio with theme data, as it places any widget
 * (vis-2 `AiChat/aiTools.ts` add_widget: the data it was asked for plus `bindings: []`, no
 * defaults, nothing checked). The widget is mounted the way the editor mounts it
 * (`lib/testing/editorStandIn`): with the project, the function that changes it and a socket.
 * In go the raw data of an order and a stored theme; checked is what comes out — the theme the
 * state holds afterwards and the project afterwards.
 *
 * The state server answers only when a test triggers it, so a test sees the order between its
 * steps: a server that answers at once hides whether the order waits for the answer.
 *
 * Orders are carried out one after the other across the whole page, so an order a test leaves
 * waiting would hold up the orders of the next test: after each test the server answers what
 * still waits.
 */
import { act } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Project } from '@iobroker/types-vis-2';

import { THEME_STATE_ID } from './constants';
import { mountEditor, stateServer, type EditorStandIn, type StateServer } from './testing/editorStandIn';
import type { UserTheme } from './theme/themeTypes';

// The host's widget base class has to stand before `Generic` is loaded.
await vi.hoisted(async () => {
    const { installHostWidgetClass } = await import('./testing/editorStandIn');
    installHostWidgetClass();
});

import { THEME_ORDER_PATIENCE_MS } from '../ThemeConfigWizard/carryOutThemeOrder';
import ThemeConfigWizard from '../ThemeConfigWizard/ThemeConfigWizard';

/** The type the assistant places for a Theme-Auftrag. */
const ORDER_TYPE = 'tplCollectionThemeWizard';
const ORDER_ID = 'w000007';
/** A second Theme-Auftrag, placed after the first. */
const SECOND_ID = 'w000008';
const SET = 'vis-2-widgets-collection';

/**
 * A stored theme with a value in every part, the parts no order can set included (Google
 * fonts, component overrides, CSS variables).
 */
const STORED: UserTheme = {
    palette: { mode: 'light', primary: { main: '#ff5722' }, background: { default: '#fafafa' } },
    typography: { fontFamily: '"Lobster", cursive', fontSize: 15 },
    shape: { borderRadius: 12 },
    corners: { topLeft: 8, bottomRight: 0 },
    spacing: 6,
    cssVariables: { cssVarPrefix: 'my' },
    components: { MuiButton: { defaultProps: { disableRipple: true } } },
    googleFonts: { Lobster: [{ weight: 400, data: 'data:font/woff2;base64,AAAA' }] },
};

/** A widget as the assistant's add_widget stores it: its data plus `bindings`, the style of the layout. */
const placed = (tpl: string, data: Record<string, unknown>, grid: boolean): Record<string, unknown> => ({
    tpl,
    widgetSet: SET,
    data: { ...data, bindings: [] },
    style: grid ? { bindings: [] } : { position: 'absolute', width: 200, height: 120, left: 20, top: 20, bindings: [] },
});

/** A view of the project besides the open one. */
const otherView = (): Record<string, unknown> => ({
    name: 'Cellar',
    settings: { style: { background_class: 'dark' } },
    widgets: { w000002: placed('tplSliderCollectionWidget', { oid: 'demo.0.level' }, false) },
    activeWidgets: [],
    filterList: [],
    rerender: false,
});

const projectSettings = (): Record<string, unknown> => ({ openedViews: ['Main', 'Cellar'], darkReloadScreen: false });

/**
 * A project whose open view is a plan (absolute layout).
 *
 * @param order - The data of the Theme-Auftrag on the view; none for the project without it.
 */
const planProject = (order?: Record<string, unknown>): Project =>
    ({
        ___settings: projectSettings(),
        Main: {
            name: 'Main',
            settings: { style: {} },
            widgets: {
                w000001: placed('tplSwitchCollectionWidget', { oid: 'demo.0.power' }, false),
                ...(order ? { [ORDER_ID]: placed(ORDER_TYPE, order, false) } : {}),
            },
            activeWidgets: [],
            filterList: [],
            rerender: false,
        },
        Cellar: otherView(),
    }) as unknown as Project;

/**
 * A project whose open view has the grid layout: the assistant's add_widget also enters the
 * widget into a section and into the order list.
 *
 * @param order - The data of the Theme-Auftrag on the view; none for the project without it.
 */
const gridProject = (order?: Record<string, unknown>): Project =>
    ({
        ___settings: projectSettings(),
        Main: {
            name: 'Main',
            settings: {
                style: {},
                layout: 'grid',
                sections: [
                    { id: 's1', widgets: ['w000001'], title: 'Lights', variant: 'panel' },
                    { id: 's2', widgets: ['w000003', ...(order ? [ORDER_ID] : [])], title: 'Main', variant: 'panel' },
                ],
                order: ['w000001', 'w000003', ...(order ? [ORDER_ID] : [])],
            },
            widgets: {
                w000001: placed('tplSwitchCollectionWidget', { oid: 'demo.0.power' }, true),
                w000003: placed('tplStateCollectionWidget', { oid: 'demo.0.scene' }, true),
                ...(order ? { [ORDER_ID]: placed(ORDER_TYPE, order, true) } : {}),
            },
            activeWidgets: [],
            filterList: [],
            rerender: false,
        },
        Cellar: otherView(),
    }) as unknown as Project;

/**
 * A plan with a second Theme-Auftrag after the first.
 *
 * @param second - The data of the second order.
 */
const withSecondOrder =
    (second: Record<string, unknown>) =>
    (order?: Record<string, unknown>): Project => {
        const project = JSON.parse(JSON.stringify(planProject(order))) as Project;
        (project.Main.widgets as Record<string, unknown>)[SECOND_ID] = placed(ORDER_TYPE, second, false);
        return project;
    };

/** Where an order is placed. */
interface Placement {
    /** The project around the order. */
    project?: (order?: Record<string, unknown>) => Project;
    /** The value of the theme state; `undefined` for a state without a value. */
    stored?: string | undefined;
    /** The runtime instead of the editor. */
    runtime?: boolean;
    /** The editor previews instead of editing. */
    preview?: boolean;
}

/** The text the theme state holds for {@link STORED}. */
const STORED_TEXT = JSON.stringify(STORED);

/** The servers of the running test. */
const servers: StateServer[] = [];

/**
 * Places a Theme-Auftrag on the open view, as the assistant does.
 *
 * @param order - The data the assistant wrote.
 * @param placement - The project, the stored theme and the host around it.
 */
const placeOrder = (
    order: Record<string, unknown>,
    placement: Placement = {},
): { server: StateServer; editor: EditorStandIn } => {
    const server = stateServer({ [THEME_STATE_ID]: 'stored' in placement ? placement.stored : STORED_TEXT });
    servers.push(server);
    const editor = mountEditor({
        types: { [ORDER_TYPE]: ThemeConfigWizard },
        project: (placement.project ?? planProject)(order),
        view: 'Main',
        socket: server.socket,
        runtime: placement.runtime,
        editMode: !placement.preview,
    });
    return { server, editor };
};

/** Lets the server answer every request, oldest first, until none waits: the order has run its course. */
const settle = async (server: StateServer): Promise<void> => {
    while (server.pendingReads() > 0 || server.pendingWrites() > 0) {
        await (server.pendingReads() > 0 ? server.answerRead() : server.answerWrite());
    }
};

/** The theme the state holds now. */
const themeOf = (server: StateServer): unknown => JSON.parse(server.valueOf(THEME_STATE_ID) as string);

/** A project without the stamp the editor puts on every change. */
const unstamped = (project: Project): unknown => {
    const { ts: _ts, ...settings } = project.___settings as unknown as Record<string, unknown>;
    return { ...project, ___settings: settings };
};

/** The widgets of the open view by their ids. */
const widgetsOf = (project: Project): string[] => Object.keys(project.Main.widgets);

/** The hints the editor shows, by their text. */
const hintsOf = (editor: EditorStandIn): (string | null)[] =>
    [...editor.container.querySelectorAll('[role="alert"]')].map(hint => hint.textContent);

/** What a person reads on an order that was not confirmed. */
const NOT_CONFIRMED = 'The theme change was not confirmed. Delete this widget and try again.';

/** Lets time pass for the widgets. */
const pass = async (ms: number): Promise<void> => {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(ms);
    });
};

afterEach(async () => {
    for (const server of servers.splice(0)) {
        await settle(server);
    }
    vi.useRealTimers();
});

describe('Naht „Theme-Auftrag“: an order placed in the editor', () => {
    it('changes only the mode of the stored theme; everything else stays, Google fonts included', async () => {
        const { server } = placeOrder({ mode: 'dark' });

        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
    });

    it.each(['light', 'dark'])('sets the mode %s on a theme that names none', async mode => {
        const { server } = placeOrder({ mode }, { stored: JSON.stringify({ spacing: 6 }) });

        await settle(server);

        expect(themeOf(server)).toEqual({ spacing: 6, palette: { mode } });
    });

    it('starts a theme where none is stored', async () => {
        const { server } = placeOrder({ mode: 'dark' }, { stored: undefined });

        await settle(server);

        expect(themeOf(server)).toEqual({ palette: { mode: 'dark' } });
    });

    it('reads the stored theme by the Rückfall-Regel: an unusable stored value falls away, the rest holds', async () => {
        const { server, editor } = placeOrder(
            { mode: 'dark' },
            {
                stored: JSON.stringify({
                    palette: { primary: { main: '#ff5722' } },
                    corners: { topLeft: -1 },
                    spacing: 6,
                }),
            },
        );

        await settle(server);

        expect(themeOf(server)).toEqual({ palette: { primary: { main: '#ff5722' }, mode: 'dark' }, spacing: 6 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('removes itself from the project and leaves every other widget and setting as it was', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });

        await settle(server);

        expect(unstamped(editor.project())).toEqual(planProject());
        // One project change, without a history entry of its own (the entry with the order stays).
        expect(editor.changes.map(change => change.ignoreHistory)).toEqual([true]);
    });

    it('on a grid view leaves its section and the order list as well', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: gridProject });

        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(unstamped(editor.project())).toEqual(gridProject());
    });

    it('stays in the project until the server has confirmed the write', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        expect(server.pendingReads()).toBe(1);
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));

        await server.answerRead();

        // The write is on its way and not confirmed: the order is still there.
        expect(server.pendingWrites()).toBe(1);
        expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));
        expect(editor.changes).toEqual([]);

        await server.answerWrite();

        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it.each<[string, Record<string, unknown>]>([
        ['an empty order', {}],
        ['a mode that does not exist', { mode: 'purple' }],
        ['a mode in other letters', { mode: 'Dark' }],
        ['an empty mode', { mode: '' }],
        ['a mode without a value', { mode: null }],
        ['a mode that is no text', { mode: true }],
        ['a binding as mode', { mode: '{javascript.0.mode}' }],
        ['a setting that does not exist', { colour: 'dark' }],
    ])('leaves the theme as it is for %s, and removes itself', async (_label, order) => {
        const { server, editor } = placeOrder(order, { project: gridProject });

        await settle(server);

        expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
        expect(server.received().writes).toBe(0);
        expect(unstamped(editor.project())).toEqual(gridProject());
    });

    it('leaves a theme alone that has the mode already, and removes itself', async () => {
        const { server, editor } = placeOrder({ mode: 'light' });

        await settle(server);

        expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('shows nothing while it waits', () => {
        const { editor } = placeOrder({ mode: 'dark' });

        expect(editor.container.querySelector(`[data-widget="${ORDER_ID}"]`)?.childNodes).toHaveLength(0);
    });
});

describe('Naht „Theme-Auftrag“: orders over time', () => {
    it('lets a second order read only once the first has written, and removes both', async () => {
        const { server, editor } = placeOrder(
            { mode: 'dark' },
            { stored: JSON.stringify({ spacing: 6 }), project: withSecondOrder({ mode: 'light' }) },
        );
        // Both orders are mounted, one reads.
        expect(widgetsOf(editor.project())).toEqual(['w000001', ORDER_ID, SECOND_ID]);
        expect(server.pendingReads()).toBe(1);

        await server.answerRead();
        expect(server.pendingReads()).toBe(0);
        await server.answerWrite();

        // The first has left; the second reads now, and finds what the first wrote.
        expect(themeOf(server)).toEqual({ spacing: 6, palette: { mode: 'dark' } });
        expect(widgetsOf(editor.project())).toEqual(['w000001', SECOND_ID]);
        expect(server.pendingReads()).toBe(1);

        await settle(server);

        // The order placed last decides: read side by side, the second would have found no mode
        // to change and the first's would have stayed.
        expect(themeOf(server)).toEqual({ spacing: 6, palette: { mode: 'light' } });
        expect(server.received()).toEqual({ reads: 2, writes: 2 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it.each<[string, (server: StateServer) => Promise<void>]>([
        ['the read', () => Promise.resolve()],
        ['the write', server => server.answerRead()],
    ])('writes the theme once when it is mounted anew while it waits for %s', async (_label, advance) => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await advance(server);

        // A widget before the order leaves the view: the host mounts the order anew.
        editor.edit(project => {
            delete (project.Main.widgets as Record<string, unknown>).w000001;
        });
        await settle(server);

        expect(server.received()).toEqual({ reads: 1, writes: 1 });
        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(widgetsOf(editor.project())).toEqual([]);
    });

    it('acts again when it comes back into the project: the same theme, and it leaves again', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await settle(server);
        const written = server.valueOf(THEME_STATE_ID);

        // A redo or the host's delayed write-back of a moved widget brings the order back.
        editor.edit(project => {
            (project.Main.widgets as Record<string, unknown>)[ORDER_ID] = placed(ORDER_TYPE, { mode: 'dark' }, false);
        });
        expect(widgetsOf(editor.project())).toEqual(['w000001', ORDER_ID]);
        await settle(server);

        expect(server.valueOf(THEME_STATE_ID)).toBe(written);
        expect(server.received()).toEqual({ reads: 2, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('leaves a project change in place that the host made while the order waited', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: gridProject });
        await server.answerRead();

        // What a person does meanwhile: on the order's view, in its settings and on another view.
        const change = (project: Project): void => {
            (project.Main.widgets.w000003.data as Record<string, unknown>).oid = 'demo.0.other';
            project.Main.settings.sections![0].title = 'Lamps';
            project.Cellar.name = 'Basement';
        };
        editor.edit(change);
        await server.answerWrite();

        const expected = JSON.parse(JSON.stringify(gridProject())) as Project;
        change(expected);
        expect(unstamped(editor.project())).toEqual(expected);
    });

    it('does not act when it is taken from the project before its turn', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: withSecondOrder({ mode: 'light' }) });

        // An undo takes the second order away while the first still reads.
        editor.edit(project => {
            delete (project.Main.widgets as Record<string, unknown>)[SECOND_ID];
        });
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(server.received()).toEqual({ reads: 1, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('does not write when it is deleted before the answer to its read comes', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });

        // The person deletes the order, as the hint of an overdue order says; the answer comes late.
        editor.edit(project => {
            delete (project.Main.widgets as Record<string, unknown>)[ORDER_ID];
        });
        await settle(server);

        expect(server.received()).toEqual({ reads: 1, writes: 0 });
        expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
        expect(unstamped(editor.project())).toEqual(planProject());
        expect(editor.changes).toEqual([]);
    });

    it('does not write while its view is not shown, and acts when the view is shown again', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });

        editor.open('Cellar');
        await settle(server);

        // Nothing tells the order that it is still in the project.
        expect(server.received()).toEqual({ reads: 1, writes: 0 });
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));

        editor.open('Main');
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(server.received()).toEqual({ reads: 2, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('stays in the project when its view is left after it wrote, and leaves when the view is shown again', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.answerRead();

        editor.open('Cellar');
        await settle(server);

        // Written, but nothing hands the order the project it could leave.
        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));

        editor.open('Main');
        await settle(server);

        expect(server.received()).toEqual({ reads: 2, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });
});

describe('Naht „Theme-Auftrag“: an order that is not confirmed', () => {
    it.each<[string, (server: StateServer) => Promise<void>]>([
        ['the read', server => server.failRead()],
        [
            'the write',
            async server => {
                await server.answerRead();
                await server.failWrite();
            },
        ],
    ])('stays in the project and shows a hint when %s fails; the theme stays', async (_label, fail) => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        expect(hintsOf(editor)).toEqual([]);

        await fail(server);
        await settle(server);

        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));
        expect(editor.changes).toEqual([]);
        expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
    });

    it('gives the whole width of the hint to its text: no icon beside it', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });

        await server.failRead();

        // The host gives a placed order 200 px of width; an icon column takes 34 px of them
        // from the text, and the hint grows out of the order's 120 px of height.
        const hint = editor.container.querySelector('[role="alert"]');
        expect(hint?.textContent).toBe(NOT_CONFIRMED);
        expect(hint?.querySelector('svg')).toBeNull();
    });

    it('lets the next order act after one that failed', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: withSecondOrder({ mode: 'dark' }) });

        await server.failRead();
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(widgetsOf(editor.project())).toEqual(['w000001', ORDER_ID]);
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);
    });

    it('tries again when it is mounted anew after a failure', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.failRead();

        editor.edit(project => {
            delete (project.Main.widgets as Record<string, unknown>).w000001;
        });
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(widgetsOf(editor.project())).toEqual([]);
        expect(hintsOf(editor)).toEqual([]);
    });

    it.each<[string, (server: StateServer) => Promise<void>]>([
        ['the read', () => Promise.resolve()],
        ['the write', server => server.answerRead()],
    ])(
        'shows the hint when the answer to %s is overdue, stays in the project and takes a late answer',
        async (_label, advance) => {
            vi.useFakeTimers();
            const { server, editor } = placeOrder({ mode: 'dark' });
            await advance(server);

            await pass(THEME_ORDER_PATIENCE_MS - 1);
            expect(hintsOf(editor)).toEqual([]);

            await pass(1);
            expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);
            expect(editor.project()).toEqual(planProject({ mode: 'dark' }));
            expect(editor.changes).toEqual([]);
            expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);

            // The answer comes after all: the order goes on where it stood.
            await settle(server);

            expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
            expect(server.received()).toEqual({ reads: 1, writes: 1 });
            expect(unstamped(editor.project())).toEqual(planProject());
            expect(hintsOf(editor)).toEqual([]);
        },
    );

    it('shows no hint for an order that was confirmed in time', async () => {
        vi.useFakeTimers();
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: withSecondOrder({ mode: 'light' }) });
        await server.answerRead();
        await server.answerWrite();

        // The first order is done; the second still reads and has its own time.
        await pass(THEME_ORDER_PATIENCE_MS - 1);

        expect(hintsOf(editor)).toEqual([]);
    });

    it('shows the hint on an order that waits behind one without an answer, and keeps it when mounted anew', async () => {
        vi.useFakeTimers();
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: withSecondOrder({ mode: 'light' }) });

        await pass(THEME_ORDER_PATIENCE_MS);
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED, NOT_CONFIRMED]);
        // The second has not read: it does not overtake the first.
        expect(server.received()).toEqual({ reads: 1, writes: 0 });

        editor.edit(project => {
            delete (project.Main.widgets as Record<string, unknown>).w000001;
        });
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED, NOT_CONFIRMED]);
        expect(server.received()).toEqual({ reads: 1, writes: 0 });
    });

    it('shows the hint only where the project is edited: not while the editor previews', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.failRead();
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);

        editor.setEditMode(false);

        expect(hintsOf(editor)).toEqual([]);
        expect(editor.container.textContent).toBe('');

        editor.setEditMode(true);

        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);
    });
});

describe('Naht „Theme-Auftrag“: an order outside the editing editor', () => {
    it.each<[string, Project]>([
        ['a plan', planProject({ mode: 'dark' })],
        ['a grid view', gridProject({ mode: 'dark' })],
    ])(
        'does nothing in the runtime on %s: nothing read or written, nothing removed, no element at all',
        async (_label, project) => {
            const { server, editor } = placeOrder({ mode: 'dark' }, { project: () => project, runtime: true });

            await settle(server);

            expect(server.received()).toEqual({ reads: 0, writes: 0 });
            expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
            expect(editor.project()).toEqual(project);
            expect(editor.changes).toEqual([]);
            // The host lays the grid cell on the element it renders around a widget: an order
            // that has an element takes a cell of the view, however empty the element is.
            expect(editor.container.querySelector(`[data-widget="${ORDER_ID}"]`)).toBeNull();
            expect(editor.container.textContent).toBe('');
        },
    );

    it('waits while the editor previews, and acts once it edits again', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { preview: true });

        await settle(server);
        expect(server.received()).toEqual({ reads: 0, writes: 0 });
        expect(editor.project()).toEqual(planProject({ mode: 'dark' }));

        editor.setEditMode(true);
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(unstamped(editor.project())).toEqual(planProject());
        expect(server.received()).toEqual({ reads: 1, writes: 1 });
    });
});
