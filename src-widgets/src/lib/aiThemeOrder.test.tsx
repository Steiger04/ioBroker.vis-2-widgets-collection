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
import { act } from 'react';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';

import type { Project } from '@iobroker/types-vis-2';

import en from '../i18n/en.json';
import { STUDIO_COLOR_FIELDS } from '../ThemeConfigWizard/studioColorFields';
import { THEME_STATE_ID } from './constants';
import { mountEditor, stateServer, type EditorStandIn, type StateServer } from './testing/editorStandIn';
import { FONT_CATALOGUE } from './theme/fontCatalogue';
import { applyPreset, THEME_PRESETS } from './theme/presets';
import type { UserTheme } from './theme/themeTypes';
import { THEME_CONTROL_RANGES } from './theme/themeUtils';
import { validateThemeOptions } from './theme/validateTheme';

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
    });

    describe('what the KI-Leitfaden tells the assistant', () => {
        const guide = (): string =>
            (en as Record<string, string>)[orderFields().find(field => field.type === 'help')!.label!];
        // The description of the theme state is the other AI channel to the same theme (an MCP client).
        const stateDescription = (): string => {
            const ioPackage = JSON.parse(readFileSync(resolve(process.cwd(), '..', 'io-package.json'), 'utf8')) as {
                instanceObjects: { _id: string; common: { desc?: string } }[];
            };
            return ioPackage.instanceObjects.find(object => object._id === 'theme')?.common.desc ?? '';
        };

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
