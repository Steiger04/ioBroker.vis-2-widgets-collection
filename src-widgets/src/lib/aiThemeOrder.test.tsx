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
 * still waits. Every theme an order wrote in a test has to pass the theme validator.
 */
import { act, type ComponentType, type FC } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Connection } from '@iobroker/gui-components';
import type { Project } from '@iobroker/types-vis-2';

import en from '../i18n/en.json';
import { STUDIO_COLOR_FIELDS } from '../ThemeConfigWizard/studioColorFields';
import { THEME_STATE_ID } from './constants';
import { mountEditor, stateServer, type EditorStandIn, type StateServer } from './testing/editorStandIn';
import { renderComponent } from './testing/testHarness';
import { createTestRoot } from './testing/testRoots';
import { themeStateDescription } from './testing/themeStateDescription';
import { FONT_CATALOGUE } from './theme/fontCatalogue';
import { lastStoredTheme, noteSavedTheme } from './theme/canvasTheme';
import { applyPreset, THEME_PRESETS } from './theme/presets';
import type { UserTheme } from './theme/themeTypes';
import { THEME_CONTROL_RANGES } from './theme/themeUtils';
import { validateThemeOptions } from './theme/validateTheme';
import { WIDGET_FRAME_KEYS, WIDGET_FRAME_SETTINGS } from './widgetFrame';

// The host's widget base class has to stand before `Generic` is loaded.
await vi.hoisted(async () => {
    const { installHostWidgetClass } = await import('./testing/editorStandIn');
    installHostWidgetClass();
});

import { THEME_ORDER_PATIENCE_MS } from '../ThemeConfigWizard/carryOutThemeOrder';
import ThemeConfigWizard from '../ThemeConfigWizard/ThemeConfigWizard';
import ThemeWizardButton from '../ThemeConfigWizard/ThemeWizardButton';
import { applyThemeOrder } from '../ThemeConfigWizard/themeOrder';

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
    /** The host's project change takes its time: its promise settles when the test says so. */
    slowProjectChanges?: boolean;
}

/** The text the theme state holds for {@link STORED}. */
const STORED_TEXT = JSON.stringify(STORED);

/** The servers of the running test. */
const servers: StateServer[] = [];

/** The editors of the running test. */
const editors: EditorStandIn[] = [];

/**
 * An editor that shows the open view of a project: a browser tab of the person.
 *
 * @param server - The server the editor is connected to.
 * @param project - The project it shows.
 * @param placement - The host around the widgets.
 */
const openEditor = (server: StateServer, project: Project, placement: Placement = {}): EditorStandIn => {
    const editor = mountEditor({
        types: { [ORDER_TYPE]: ThemeConfigWizard },
        project,
        view: 'Main',
        socket: server.socket,
        runtime: placement.runtime,
        editMode: !placement.preview,
        slowProjectChanges: placement.slowProjectChanges,
    });
    editors.push(editor);
    return editor;
};

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
    return { server, editor: openEditor(server, (placement.project ?? planProject)(order), placement) };
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

/** Takes a widget from the open view, as a person deletes it or an undo takes it back. */
const remove = (editor: EditorStandIn, id: string): void =>
    editor.edit(project => {
        delete (project.Main.widgets as Record<string, unknown>)[id];
    });

/** Puts a Theme-Auftrag on the open view, as the assistant places it or a redo brings it back. */
const place = (editor: EditorStandIn, order: Record<string, unknown>, id = ORDER_ID): void =>
    editor.edit(project => {
        (project.Main.widgets as Record<string, unknown>)[id] = placed(ORDER_TYPE, order, false);
    });

/**
 * Mounts the order alone and hands it the projects the test chooses: a host that does not take
 * over what the order asks for. For what the editor stand-in, which always does, cannot show.
 *
 * @param server - The server the widget is connected to.
 */
const mountAlone = (server: StateServer): { hand: (views: Project) => void; changes: Project[] } => {
    const changes: Project[] = [];
    const Order = ThemeConfigWizard as unknown as ComponentType<Record<string, unknown>>;
    const root = createTestRoot(document.body.appendChild(document.createElement('div')));
    const changeProject = (project: Project): Promise<void> => {
        changes.push(project);
        return Promise.resolve();
    };
    return {
        changes,
        hand: views =>
            act(() => {
                root.render(
                    <Order
                        id={ORDER_ID}
                        view="Main"
                        tpl={ORDER_TYPE}
                        editMode
                        runtime={false}
                        context={{ views, projectName: 'main', socket: server.socket, runtime: false, changeProject }}
                    />,
                );
            }),
    };
};

/** Lets what follows a commit of the editor run: the person's next step comes later. */
const later = (): Promise<void> => act(() => Promise.resolve());

afterEach(async () => {
    for (const editor of editors.splice(0)) {
        while (editor.waitingChanges() > 0) {
            await editor.confirmChange();
        }
    }
    for (const server of servers.splice(0)) {
        await settle(server);
        // Whatever an order writes is a theme the validator accepts.
        for (const text of server.stored()) {
            expect(validateThemeOptions(JSON.parse(text as string)).isValid, text as string).toBe(true);
        }
    }
    vi.useRealTimers();
});

/** A copy of a theme with one value at a dot path. */
const withValue = (theme: UserTheme, path: string, value: unknown): UserTheme => {
    const copy = JSON.parse(JSON.stringify(theme)) as Record<string, unknown>;
    const segments = path.split('.');
    let node = copy;
    for (const segment of segments.slice(0, -1)) {
        node = (node[segment] ??= {}) as Record<string, unknown>;
    }
    node[segments[segments.length - 1]] = value;
    return copy;
};

/** The fields of the order, as the host's type description flattens them. */
const orderFields = (): { name: string; type?: string; label?: string }[] =>
    (ThemeConfigWizard.getWidgetInfo().visAttrs ?? []).flatMap(
        group => (group.fields ?? []) as { name: string; type?: string; label?: string }[],
    );

/** The name of the field the assistant finds under a label of the Theme Studio. */
const fieldLabelled = (labelKey: string): string => {
    const field = orderFields().find(one => one.label === labelKey);
    if (!field) {
        throw new Error(`No field is labelled ${labelKey}`);
    }
    return field.name;
};

/**
 * The theme the state holds after an order has run its course.
 *
 * @param order - The data the assistant wrote.
 * @param stored - The theme stored before; {@link STORED} when left out.
 */
const themeAfter = async (order: Record<string, unknown>, stored: UserTheme = STORED): Promise<unknown> => {
    const { server, editor } = placeOrder(order, { stored: JSON.stringify(stored) });
    await settle(server);
    expect(unstamped(editor.project())).toEqual(planProject());
    return themeOf(server);
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

    // An order that stayed on the view (its hint) can be put into a group by hand.
    it('leaves the group a person has put it into as well', async () => {
        const grouped = (order?: Record<string, unknown>): Project => {
            const project = JSON.parse(JSON.stringify(planProject(order))) as Project;
            const widgets = project.Main.widgets as unknown as Record<string, Record<string, unknown>>;
            widgets.w000001.groupid = 'g000001';
            if (order) {
                widgets[ORDER_ID].groupid = 'g000001';
            }
            widgets.g000001 = {
                tpl: '_tplGroup',
                data: { members: ['w000001', ...(order ? [ORDER_ID] : [])] },
                style: {},
                widgetSet: 'basic',
            };
            return project;
        };
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: grouped });

        await settle(server);

        expect(unstamped(editor.project())).toEqual(grouped());
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

describe('Naht „Theme-Auftrag“: what an order can set', () => {
    describe('a preset', () => {
        it('replaces the colours of the stored theme by the preset’s; font, size, radius, spacing and Google fonts stay', async () => {
            expect(await themeAfter({ preset: 'graphit' })).toEqual({
                ...STORED,
                palette: {
                    mode: 'dark',
                    primary: { main: '#38bdf8' },
                    secondary: { main: '#818cf8' },
                    background: { default: '#0f1216', paper: '#181c23' },
                },
            });
        });

        it.each(THEME_PRESETS.map(preset => [preset.id, preset] as const))(
            '%s leaves the theme the Theme Studio leaves when the preset is clicked there',
            async (id, preset) => {
                const stored = withValue(
                    withValue(STORED, 'palette.divider', '#445566'),
                    'palette.text.primary',
                    '#ffeedd',
                );

                expect(await themeAfter({ preset: id }, stored)).toEqual(applyPreset(stored, preset));
            },
        );

        it('lies under a single colour of the same order', async () => {
            expect(
                await themeAfter({ preset: 'graphit', [fieldLabelled('theme_wizard_palette_primary')]: '#ff9800' }),
            ).toEqual({
                ...STORED,
                palette: {
                    mode: 'dark',
                    primary: { main: '#ff9800' },
                    secondary: { main: '#818cf8' },
                    background: { default: '#0f1216', paper: '#181c23' },
                },
            });
        });

        it('lies under the mode of the same order', async () => {
            const theme = (await themeAfter({ preset: 'graphit', mode: 'light' })) as UserTheme;

            expect(theme.palette).toEqual({
                mode: 'light',
                primary: { main: '#38bdf8' },
                secondary: { main: '#818cf8' },
                background: { default: '#0f1216', paper: '#181c23' },
            });
        });
    });

    describe('a reset', () => {
        it('writes the empty theme', async () => {
            const { server } = placeOrder({ reset: true });
            await settle(server);

            expect(server.valueOf(THEME_STATE_ID)).toBe('{}');
        });

        it('with further fields leaves the empty theme plus these fields', async () => {
            expect(await themeAfter({ reset: true, mode: 'dark', spacing: 4, fontFamily: 'Inter' })).toEqual({
                palette: { mode: 'dark' },
                spacing: 4,
                typography: { fontFamily: "'Inter', system-ui, sans-serif" },
            });
        });

        it('with a preset leaves only the colours of the preset', async () => {
            expect(await themeAfter({ reset: true, preset: 'graphit' })).toEqual({
                palette: {
                    mode: 'dark',
                    primary: { main: '#38bdf8' },
                    secondary: { main: '#818cf8' },
                    background: { default: '#0f1216', paper: '#181c23' },
                },
            });
        });

        it('writes nothing where the theme is empty already', async () => {
            const { server, editor } = placeOrder({ reset: true }, { stored: '{}' });
            await settle(server);

            expect(server.received().writes).toBe(0);
            expect(unstamped(editor.project())).toEqual(planProject());
        });

        it.each([['yes'], ['true'], [1], [false]])('happens only for true, not for %j', async value => {
            expect(await themeAfter({ reset: value, spacing: 4 })).toEqual({ ...STORED, spacing: 4 });
        });
    });

    describe('single values', () => {
        it.each(STUDIO_COLOR_FIELDS.map(field => [field.path, field] as const))(
            'the colour of %s changes exactly this colour',
            async (path, field) => {
                expect(await themeAfter({ [fieldLabelled(field.labelKey)]: '#123456' })).toEqual(
                    withValue(STORED, path, '#123456'),
                );
            },
        );

        it.each(['#1976d2', '#abc', 'rgb(25, 118, 210)', 'hsl(210, 79%, 46%)'])(
            'takes the colour notation %s',
            async colour => {
                expect(await themeAfter({ [fieldLabelled('theme_wizard_palette_primary')]: colour })).toEqual(
                    withValue(STORED, 'palette.primary.main', colour),
                );
            },
        );

        it.each(FONT_CATALOGUE.map(font => [font.label, font.value] as const))(
            'the font family %s stores the font stack the Theme Studio stores',
            async (label, stack) => {
                expect(await themeAfter({ fontFamily: label })).toEqual(
                    withValue(STORED, 'typography.fontFamily', stack),
                );
            },
        );

        it('the font size changes exactly the font size', async () => {
            expect(await themeAfter({ fontSize: 18 })).toEqual(withValue(STORED, 'typography.fontSize', 18));
        });

        it('the corner radius sets all four corners, as the linked radius of the Theme Studio does', async () => {
            expect(await themeAfter({ cornerRadius: 10 })).toEqual({
                ...STORED,
                corners: { topLeft: 10, topRight: 10, bottomRight: 10, bottomLeft: 10 },
            });
        });

        it('the spacing changes exactly the spacing', async () => {
            expect(await themeAfter({ spacing: 4 })).toEqual({ ...STORED, spacing: 4 });
        });

        it('takes a number written as text', async () => {
            expect(await themeAfter({ fontSize: '18', cornerRadius: '10', spacing: '4' })).toEqual({
                ...STORED,
                typography: { ...STORED.typography, fontSize: 18 },
                corners: { topLeft: 10, topRight: 10, bottomRight: 10, bottomLeft: 10 },
                spacing: 4,
            });
        });

        it('sets every kind of value in one order', async () => {
            expect(
                await themeAfter({
                    mode: 'dark',
                    [fieldLabelled('theme_wizard_palette_secondary')]: '#00897b',
                    [fieldLabelled('theme_wizard_palette_text_primary')]: '#eeeeee',
                    fontFamily: 'Georgia',
                    fontSize: 16,
                    cornerRadius: 0,
                    spacing: 8,
                }),
            ).toEqual({
                ...STORED,
                palette: {
                    ...STORED.palette,
                    mode: 'dark',
                    secondary: { main: '#00897b' },
                    text: { primary: '#eeeeee' },
                },
                typography: { fontFamily: "'Georgia', serif", fontSize: 16 },
                corners: { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 },
                spacing: 8,
            });
        });
    });

    describe('values that cannot be used', () => {
        const primary = (): string => fieldLabelled('theme_wizard_palette_primary');
        const textColour = (): string => fieldLabelled('theme_wizard_palette_text_primary');

        it.each<[string, () => Record<string, unknown>]>([
            ['a colour that is none', () => ({ [primary()]: 'not a colour' })],
            ['a gradient as colour', () => ({ [textColour()]: 'linear-gradient(#000, #fff)' })],
            ['a colour that is no text', () => ({ [textColour()]: 42 })],
            // MUI cannot compute with a colour name in an accent or status colour; the studio refuses to save one.
            ['a colour name where MUI has to compute', () => ({ [primary()]: 'red' })],
            ['a font that is not in the catalogue', () => ({ fontFamily: 'Comic Sans MS' })],
            ['a font stack instead of a catalogue name', () => ({ fontFamily: "'Inter', system-ui, sans-serif" })],
            ['a font size of zero', () => ({ fontSize: 0 })],
            ['a font size beyond every screen', () => ({ fontSize: 500 })],
            // The theme itself may hold these (a hand-written one); the studio's sliders end before.
            ['a font size below the studio’s slider', () => ({ fontSize: 7 })],
            ['a font size above the studio’s slider', () => ({ fontSize: 30 })],
            ['a font size above the studio’s slider, as text', () => ({ fontSize: '30' })],
            ['a font size in words', () => ({ fontSize: 'big' })],
            // What JavaScript would read as 16 and as 10: no person writes a size that way.
            ['a font size in hexadecimal writing', () => ({ fontSize: '0x10' })],
            ['a font size in exponent writing', () => ({ fontSize: '1e1' })],
            ['a negative corner radius', () => ({ cornerRadius: -1 })],
            ['a corner radius beyond the studio’s limit', () => ({ cornerRadius: 97 })],
            ['a corner radius in words', () => ({ cornerRadius: 'round' })],
            ['a negative spacing', () => ({ spacing: -1 })],
            ['a spacing above the studio’s slider', () => ({ spacing: 500 })],
            ['a spacing in words', () => ({ spacing: 'wide' })],
            ['an empty spacing', () => ({ spacing: '' })],
            ['a spacing that is a switch', () => ({ spacing: true })],
            ['a preset that does not exist', () => ({ preset: 'neon' })],
            ['a preset in other letters', () => ({ preset: 'Graphit' })],
        ])('skips %s and applies the usable values of the same order', async (_label, unusable) => {
            expect(await themeAfter({ ...unusable(), mode: 'dark' })).toEqual(
                withValue(STORED, 'palette.mode', 'dark'),
            );
        });

        it('skips each unusable value of an order full of them, and applies the usable ones in between', async () => {
            expect(
                await themeAfter({
                    preset: 'neon',
                    mode: 'dark',
                    [primary()]: 'red',
                    [textColour()]: '#eeeeee',
                    fontFamily: 'Comic Sans MS',
                    fontSize: 16,
                    cornerRadius: 200,
                    spacing: 'wide',
                }),
            ).toEqual({
                ...STORED,
                palette: { ...STORED.palette, mode: 'dark', text: { primary: '#eeeeee' } },
                typography: { ...STORED.typography, fontSize: 16 },
            });
        });

        // MUI computes with every colour of the palette (alpha, lighten, darken, contrast) and
        // throws on a notation it cannot take apart: a colour name stored in any of them took the
        // widgets down. So the theme carries none, and the Theme Studio saves none either.
        describe.each(['white', 'transparent', 'currentColor', 'var(--my-colour)'])(
            'a colour the widgets cannot compute with (%s)',
            colour => {
                it.each(STUDIO_COLOR_FIELDS.map(field => [field.path, field] as const))(
                    'is skipped for %s, and the rest of the order applies',
                    async (_path, field) => {
                        expect(await themeAfter({ [fieldLabelled(field.labelKey)]: colour, mode: 'dark' })).toEqual(
                            withValue(STORED, 'palette.mode', 'dark'),
                        );
                    },
                );
            },
        );
    });

    describe('the same order again', () => {
        it.each<[string, Record<string, unknown>]>([
            ['single values', { mode: 'dark', fontSize: 16, cornerRadius: 6, spacing: 4, fontFamily: 'Inter' }],
            ['a reset', { reset: true }],
            ['a reset with values', { reset: true, mode: 'dark', spacing: 4 }],
            ['a preset', { preset: 'sunset' }],
            ['a preset with values', { preset: 'sunset', fontSize: 16, mode: 'light' }],
            ['a reset with a preset', { reset: true, preset: 'salbei', cornerRadius: 12 }],
        ])('with %s leaves the theme it left the first time, and writes nothing', async (_label, order) => {
            const { server, editor } = placeOrder(order);
            await settle(server);
            const first = server.valueOf(THEME_STATE_ID);

            editor.edit(project => {
                (project.Main.widgets as Record<string, unknown>)[ORDER_ID] = placed(ORDER_TYPE, order, false);
            });
            await settle(server);

            expect(server.valueOf(THEME_STATE_ID)).toBe(first);
            expect(server.received()).toEqual({ reads: 2, writes: 1 });
            expect(unstamped(editor.project())).toEqual(planProject());
        });

        // A theme written by hand, or by another tool, lists the same values in its own sequence.
        it('writes nothing where the stored theme holds its values in another sequence', async () => {
            const stored = JSON.stringify({
                corners: { bottomLeft: 8, topLeft: 8, bottomRight: 8, topRight: 8 },
                shape: { borderRadius: 8 },
            });
            const { server, editor } = placeOrder({ cornerRadius: 8 }, { stored });
            await settle(server);

            expect(server.valueOf(THEME_STATE_ID)).toBe(stored);
            expect(server.received()).toEqual({ reads: 1, writes: 0 });
            expect(unstamped(editor.project())).toEqual(planProject());
        });
    });

    describe('what the KI-Leitfaden tells the assistant', () => {
        const guide = (): string =>
            (en as Record<string, string>)[orderFields().find(field => field.type === 'help')!.label!];
        // The description of the theme state is the other AI channel to the same theme (an MCP client).
        const stateDescription = themeStateDescription;

        it('names the state the theme is read at', () => {
            expect(guide()).toContain(THEME_STATE_ID);
        });

        // The ranges are written once, where the studio's sliders read them
        // (lib/theme/themeUtils.THEME_CONTROL_RANGES): both wordings and the order are held to
        // that place, so no bound stands a second time as a number.
        it.each([
            { field: 'fontSize', inState: 'typography.fontSize: number' },
            { field: 'cornerRadius', inState: 'each a number' },
            { field: 'spacing', inState: 'spacing: number' },
        ] as const)(
            'states the range of $field as the description of the theme state does, and the order takes exactly it',
            async ({ field, inState }) => {
                const { min, max } = THEME_CONTROL_RANGES[field];
                expect(guide()).toContain(`"${field}": ${min} to ${max}`);
                expect(stateDescription()).toContain(`${inState} from ${min} to ${max}`);

                for (const end of [min, max]) {
                    expect(await themeAfter({ reset: true, [field]: end }), `${field} ${end}`).not.toEqual({});
                }
                for (const beyond of [min - 0.5, max + 0.5]) {
                    expect(await themeAfter({ reset: true, [field]: beyond }), `${field} ${beyond}`).toEqual({});
                }
            },
        );

        it('names the colour notations the description of the theme state names', () => {
            const notations = 'hex like #1976d2, rgb() or hsl()';

            expect(guide()).toContain(notations);
            expect(stateDescription()).toContain(notations);
        });
    });
});

// ADR-0117, addendum ADR-0115: the order sets the Rahmenvorgaben of the Widget-Rahmen too, by the
// names of the widget fields they stand in for, under the same merge rule.
describe('ticket 07: Naht „Theme-Auftrag“ — the Rahmenvorgaben', () => {
    /** A stored theme with Rahmenvorgaben besides the rest. */
    const WITH_FRAME: UserTheme = { ...STORED, widgetFrame: { basePadding: 2, noFooter: true } };

    it('sets a named Rahmenvorgabe; the other Rahmenvorgaben and the rest of the theme stay', async () => {
        expect(await themeAfter({ noCard: true }, WITH_FRAME)).toEqual({
            ...STORED,
            widgetFrame: { basePadding: 2, noFooter: true, noCard: true },
        });
    });

    // A value that differs from the stored one and from the standard; booleans keep the field's sense.
    it.each<[string, unknown]>([
        ['noHeader', true],
        ['noHeaderIcon', true],
        ['noFooter', false],
        ['noCard', true],
        ['outlined', true],
        ['outlinedFrame', true],
        ['basePadding', 0.5],
        ['baseElevation', 0],
    ])('%s changes exactly this Rahmenvorgabe', async (name, value) => {
        expect(await themeAfter({ [name]: value }, WITH_FRAME)).toEqual(
            withValue(WITH_FRAME, `widgetFrame.${name}`, value),
        );
    });

    it('sets several Rahmenvorgaben and other values in one order', async () => {
        expect(await themeAfter({ noCard: true, outlined: true, baseElevation: 0, mode: 'dark' }, WITH_FRAME)).toEqual({
            ...STORED,
            palette: { ...STORED.palette, mode: 'dark' },
            widgetFrame: { basePadding: 2, noFooter: true, noCard: true, outlined: true, baseElevation: 0 },
        });
    });

    it('takes a number written as text', async () => {
        expect(await themeAfter({ basePadding: '0.5', baseElevation: '8' }, WITH_FRAME)).toEqual({
            ...STORED,
            widgetFrame: { basePadding: 0.5, noFooter: true, baseElevation: 8 },
        });
    });

    it('a reset clears the Rahmenvorgaben with the rest; named ones are set afterwards', async () => {
        expect(await themeAfter({ reset: true, mode: 'dark' }, WITH_FRAME)).toEqual({ palette: { mode: 'dark' } });
        expect(await themeAfter({ reset: true, noCard: true }, WITH_FRAME)).toEqual({ widgetFrame: { noCard: true } });
    });

    it('a preset replaces only the colours and leaves the Rahmenvorgaben', async () => {
        const preset = THEME_PRESETS.find(one => one.id === 'graphit')!;

        expect(await themeAfter({ preset: 'graphit' }, WITH_FRAME)).toEqual(applyPreset(WITH_FRAME, preset));
        expect(((await themeAfter({ preset: 'graphit' }, WITH_FRAME)) as UserTheme).widgetFrame).toEqual(
            WITH_FRAME.widgetFrame,
        );
    });

    it.each<[string, Record<string, unknown>]>([
        ['a switch written as text', { noCard: 'true' }],
        ['a switch written as a number', { noHeader: 1 }],
        ['a padding beyond the field', { basePadding: 11 }],
        ['a negative padding', { basePadding: -1 }],
        ['a padding in words', { basePadding: 'wide' }],
        ['a shadow beyond the field', { baseElevation: 25 }],
        // MUI draws a shadow only for a whole elevation; the studio's slider moves in whole steps.
        ['a shadow that is no whole number', { baseElevation: 2.5 }],
        ['a shadow that is no whole number, as text', { baseElevation: '2.5' }],
        ['a shadow that is a switch', { baseElevation: true }],
    ])('skips %s and applies the usable values of the same order', async (_label, unusable) => {
        expect(await themeAfter({ ...unusable, outlined: true, mode: 'dark' }, WITH_FRAME)).toEqual({
            ...withValue(WITH_FRAME, 'palette.mode', 'dark'),
            widgetFrame: { ...WITH_FRAME.widgetFrame, outlined: true },
        });
    });

    // ADR-0117 addendum 2026-11-17, decision 8: the order's fields carry the names of the frame
    // settings, so the frame stage of the Lese-Naht would fill every one the order leaves unset —
    // from the Rahmenvorgabe, else the standard — and the order would write it into the theme.
    it('without frame values writes no Rahmenvorgabe, though the theme has Rahmenvorgaben', async () => {
        const names = orderFields().map(field => field.name);
        expect(names).toEqual(expect.arrayContaining([...WIDGET_FRAME_KEYS]));

        expect(await themeAfter({ mode: 'dark' }, WITH_FRAME)).toEqual(withValue(WITH_FRAME, 'palette.mode', 'dark'));

        const { server } = placeOrder({}, { stored: JSON.stringify(WITH_FRAME) });
        await settle(server);
        expect(server.received()).toEqual({ reads: 1, writes: 0 });
    });

    it('the same order again leaves the theme it left the first time, and writes nothing', async () => {
        const order = { noCard: true, basePadding: 0.5 };
        const { server, editor } = placeOrder(order, { stored: JSON.stringify(WITH_FRAME) });
        await settle(server);
        const first = server.valueOf(THEME_STATE_ID);

        place(editor, order);
        await settle(server);

        expect(server.valueOf(THEME_STATE_ID)).toBe(first);
        expect(server.received()).toEqual({ reads: 2, writes: 1 });
    });

    describe('what the KI-Leitfaden tells the assistant', () => {
        const guide = (): string =>
            (en as Record<string, string>)[orderFields().find(field => field.type === 'help')!.label!];

        it('names every Rahmenvorgabe by its field, and that a reset clears them and a preset leaves them', () => {
            for (const key of WIDGET_FRAME_KEYS) {
                expect(guide(), key).toContain(`"${key}"`);
            }
            expect(guide()).toContain('a reset clears them, a preset leaves them');
        });

        // The bounds are the one table's (lib/widgetFrame); guide and state description are held to it.
        it.each([
            { field: 'basePadding', inState: 'widgetFrame.basePadding: number', inGuide: '' },
            { field: 'baseElevation', inState: 'widgetFrame.baseElevation: whole number', inGuide: 'whole number ' },
        ] as const)(
            'states the range of $field as the description of the theme state does, and the order takes exactly it',
            async ({ field, inState, inGuide }) => {
                const { min, max } = WIDGET_FRAME_SETTINGS[field];
                expect(guide()).toContain(`"${field}": ${inGuide}${min} to ${max}`);
                expect(themeStateDescription()).toContain(`${inState} from ${min} to ${max}`);

                for (const end of [min, max]) {
                    expect(await themeAfter({ reset: true, [field]: end }), `${field} ${end}`).toEqual({
                        widgetFrame: { [field]: end },
                    });
                }
                for (const beyond of [min - 1, max + 1]) {
                    expect(await themeAfter({ reset: true, [field]: beyond }), `${field} ${beyond}`).toEqual({});
                }
            },
        );
    });
});

describe('Naht „Theme-Auftrag“: orders over time', () => {
    it('works two orders with different fields into the theme one after the other: it holds the values of both', async () => {
        const second = { [fieldLabelled('theme_wizard_palette_primary')]: '#00897b', fontSize: 18 };
        const { server, editor } = placeOrder({ mode: 'dark', spacing: 4 }, { project: withSecondOrder(second) });
        // Both orders are mounted, one reads.
        expect(server.pendingReads()).toBe(1);

        await server.answerRead();
        // The first writes; the second has not read what the first is about to change.
        expect(server.received()).toEqual({ reads: 1, writes: 1 });

        await settle(server);

        expect(themeOf(server)).toEqual({
            ...STORED,
            palette: { ...STORED.palette, mode: 'dark', primary: { main: '#00897b' } },
            typography: { ...STORED.typography, fontSize: 18 },
            spacing: 4,
        });
        expect(server.received()).toEqual({ reads: 2, writes: 2 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

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

    // The host's `changeProject` settles some time after the project is changed (150 ms were
    // measured); its delayed write-back of a moved widget (200 ms) falls into that time.
    it('acts again when it comes back while it is still on its way out, and leaves again', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { slowProjectChanges: true });
        await settle(server);
        const written = server.valueOf(THEME_STATE_ID);
        expect(widgetsOf(editor.project())).toEqual(['w000001']);
        expect(editor.waitingChanges()).toBe(1);

        place(editor, { mode: 'dark' });
        await editor.confirmChange();
        await settle(server);
        await editor.confirmChange();

        expect(server.valueOf(THEME_STATE_ID)).toBe(written);
        expect(server.received()).toEqual({ reads: 2, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
        expect(hintsOf(editor)).toEqual([]);
    });

    // The host gives a new widget the highest number plus one: the id a deleted order had.
    it('applies a new order that got the id of a deleted one whose write was still under way', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.answerRead();

        remove(editor, ORDER_ID);
        await later();
        place(editor, { spacing: 12 });
        // The write of the deleted order may still land: the new one waits for its answer.
        expect(server.received()).toEqual({ reads: 1, writes: 1 });

        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' }, spacing: 12 });
        expect(server.received()).toEqual({ reads: 2, writes: 2 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('applies the new data when an order is changed while its write is under way', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.answerRead();

        // The assistant updates the placed order instead of placing a second one.
        editor.edit(project => {
            (project.Main.widgets[ORDER_ID].data as Record<string, unknown>).spacing = 12;
        });
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' }, spacing: 12 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('goes on when one of two editors that show its view leaves the view', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' });
        const second = openEditor(server, planProject({ mode: 'dark' }));

        second.open('Cellar');
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(server.received()).toEqual({ reads: 1, writes: 1 });
        expect(unstamped(editor.project())).toEqual(planProject());
    });

    it('is taken up once the project the host hands it holds the order', async () => {
        const server = stateServer({ [THEME_STATE_ID]: STORED_TEXT });
        servers.push(server);
        const host = mountAlone(server);

        // The widget is mounted from a project that does not hold its view yet.
        host.hand({ ___settings: projectSettings(), Cellar: otherView() } as unknown as Project);
        expect(server.received()).toEqual({ reads: 0, writes: 0 });

        host.hand(planProject({ mode: 'dark' }));
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        expect(host.changes.map(widgetsOf)).toEqual([['w000001']]);
    });

    // The host may take the project without the order and the one that holds it again in one
    // pass: the widget stays mounted and only sees another project.
    it('acts again when it stays mounted and is handed another project that holds it', async () => {
        const server = stateServer({ [THEME_STATE_ID]: STORED_TEXT });
        servers.push(server);
        const host = mountAlone(server);
        const project = planProject({ mode: 'dark' });
        host.hand(project);
        await settle(server);

        // The same project once more: the order has left it, nothing is to do.
        host.hand(project);
        expect(server.received()).toEqual({ reads: 1, writes: 1 });

        host.hand(planProject({ mode: 'dark' }));
        await settle(server);

        expect(server.received()).toEqual({ reads: 2, writes: 1 });
        expect(host.changes.map(widgetsOf)).toEqual([['w000001'], ['w000001']]);
    });

    // The palette entry of the studio is in the editor beside the view.
    it('leaves the theme it wrote as the one the Theme Studio opens with', async () => {
        noteSavedTheme(STORED);
        const { server } = placeOrder({ mode: 'dark' });
        const PaletteEntry = ThemeWizardButton as unknown as FC<{ socket: Connection; themeType: string }>;
        const entry = renderComponent(PaletteEntry, { socket: server.socket, themeType: 'light' });
        try {
            await settle(server);

            expect(lastStoredTheme()).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' } });
        } finally {
            entry.unmount();
        }
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

    // A widget at the top of a view carries its name plate inside, over its own first 14 px (the
    // host's `vis-editmode-widget-name-bottom`), and the plates lie above every widget. On a grid
    // view an order has no cell and sits at the view's top left corner: its plate, and the one of
    // the first cell's widget 8 px further down, covered the beginning of the hint.
    it('starts the text of the hint below the name plates the host draws at the top of a view', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: gridProject });

        await server.failRead();

        const hint = editor.container.querySelector('[role="alert"]')!;
        const text = hint.querySelector('.MuiAlert-message')!;
        const textStart = parseFloat(getComputedStyle(hint).paddingTop) + parseFloat(getComputedStyle(text).paddingTop);
        // The plate of the first cell's widget ends at 8 + 14 px.
        expect(textStart).toBeGreaterThanOrEqual(22);
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

    // The hint says: delete this widget and try again.
    it.each<[string, Record<string, unknown>]>([
        ['the same order', { mode: 'dark' }],
        ['another order', { spacing: 12 }],
    ])('lets %s act once the person has deleted one whose read was never answered', async (_label, again) => {
        vi.useFakeTimers();
        const { server, editor } = placeOrder({ mode: 'dark' });
        server.loseRead();
        await pass(THEME_ORDER_PATIENCE_MS);
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);

        remove(editor, ORDER_ID);
        await later();
        // The host gives the new order the freed id.
        place(editor, again);
        await settle(server);

        expect(themeOf(server)).toEqual(applyThemeOrder(STORED, again));
        expect(unstamped(editor.project())).toEqual(planProject());
        expect(hintsOf(editor)).toEqual([]);
    });

    it('lets a waiting order act once the one before it, whose read was never answered, is deleted', async () => {
        const { server, editor } = placeOrder({ mode: 'dark' }, { project: withSecondOrder({ spacing: 12 }) });
        server.loseRead();

        remove(editor, ORDER_ID);
        await later();
        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, spacing: 12 });
        expect(widgetsOf(editor.project())).toEqual(['w000001']);
    });

    // A write that is under way may still land: nothing passes it (the late write would undo
    // the later one). The new order waits, says so after its time, and acts on the answer.
    it('keeps a new order waiting behind the unanswered write of a deleted one, and tells it', async () => {
        vi.useFakeTimers();
        const { server, editor } = placeOrder({ mode: 'dark' });
        await server.answerRead();

        remove(editor, ORDER_ID);
        await later();
        place(editor, { spacing: 12 });
        await pass(THEME_ORDER_PATIENCE_MS);

        expect(server.received()).toEqual({ reads: 1, writes: 1 });
        expect(hintsOf(editor)).toEqual([NOT_CONFIRMED]);

        await settle(server);

        expect(themeOf(server)).toEqual({ ...STORED, palette: { ...STORED.palette, mode: 'dark' }, spacing: 12 });
        expect(unstamped(editor.project())).toEqual(planProject());
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
