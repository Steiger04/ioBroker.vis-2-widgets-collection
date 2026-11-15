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
 */
import { describe, expect, it, vi } from 'vitest';

import type { Project } from '@iobroker/types-vis-2';

import { THEME_STATE_ID } from './constants';
import { mountEditor, stateServer, type EditorStandIn, type StateServer } from './testing/editorStandIn';
import type { UserTheme } from './theme/themeTypes';

// The host's widget base class has to stand before `Generic` is loaded.
await vi.hoisted(async () => {
    const { installHostWidgetClass } = await import('./testing/editorStandIn');
    installHostWidgetClass();
});

import ThemeConfigWizard from '../ThemeConfigWizard/ThemeConfigWizard';

/** The type the assistant places for a Theme-Auftrag. */
const ORDER_TYPE = 'tplCollectionThemeWizard';
const ORDER_ID = 'w000007';
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

describe('Naht „Theme-Auftrag“: an order outside the editing editor', () => {
    it.each<[string, Project]>([
        ['a plan', planProject({ mode: 'dark' })],
        ['a grid view', gridProject({ mode: 'dark' })],
    ])(
        'does nothing in the runtime on %s: nothing read or written, nothing removed, nothing shown',
        async (_label, project) => {
            const { server, editor } = placeOrder({ mode: 'dark' }, { project: () => project, runtime: true });

            await settle(server);

            expect(server.received()).toEqual({ reads: 0, writes: 0 });
            expect(server.valueOf(THEME_STATE_ID)).toBe(STORED_TEXT);
            expect(editor.project()).toEqual(project);
            expect(editor.changes).toEqual([]);
            expect(editor.container.querySelector(`[data-widget="${ORDER_ID}"]`)?.childNodes).toHaveLength(0);
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
