/**
 * Widget-Render-Naht — what a placeable widget renders of its Widget-Rahmen from its stored data
 * under the stored theme and a Studio draft (ADR-0117).
 *
 * @module lib/widgetFrameRender.test
 * @remarks
 * Each widget is rendered the way vis-2 renders it (pattern of Naht 2, `lib/aiRawDataRender.test`):
 * an instance of its class, `renderWidgetBody` with the stored data as `rxData`, over a socket
 * that answers the theme state with the stored theme. A Studio draft goes through the draft
 * store, as the open Theme Studio puts it there. What is checked is what the user sees of the
 * frame — here the shadow of the content paper — never where the cascade sits:
 * - the widget's own value → the Rahmenvorgabe → the built-in standard;
 * - Bestandsgarantie: an unset setting and the stored old default render alike without a
 *   Rahmenvorgabe, as before ADR-0117;
 * - a draft beats the stored Rahmenvorgabe while it lasts;
 * - rendering writes nothing.
 * A follow-up setting adds its cases next to the shadow's, over the same mount.
 */
import { act } from 'react';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { Theme } from '@iobroker/gui-components';
import type { RxWidgetInfo } from '@iobroker/types-vis-2';

import { THEME_STATE_ID } from './constants';
import { clearDraftTheme, setDraftTheme } from './theme/draftThemeStore';
import { installInertResizeObserver } from './testing/collectionScene';
import { FRAME_DEFAULTS_BEFORE_ADR_0117, paletteInsertData, PLACEABLE_WIDGETS } from './testing/aiSeams';
import { createTestRoot } from './testing/testRoots';
import { FIXTURES } from './testing/widgetFixtures';
import type { UserTheme } from './theme/themeTypes';
import type { WidgetName } from './testing/aiSeams';

// The host base class with what renderWidgetBody reaches (as in Naht 2): props, state, the signal
// check. Its `t` reads `this` like the host's (see lib/testing/visRxWidgetStub).
vi.hoisted(() => {
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            void this.getI18nPrefix;
            return key;
        }

        props: unknown;

        state: unknown = {};

        constructor(props: unknown) {
            this.props = props;
        }

        // eslint-disable-next-line class-methods-use-this
        renderWidgetBody(): null {
            return null;
        }

        // eslint-disable-next-line class-methods-use-this
        isSignalVisible(): boolean {
            return false;
        }

        // eslint-disable-next-line class-methods-use-this
        setState(): void {}

        // The Dialog's view renderer: no view is opened here.
        // eslint-disable-next-line class-methods-use-this
        getWidgetView(): null {
            return null;
        }
    };
});

// canvas-gauges needs a real canvas: the gauge shows the option set it is handed instead.
vi.mock('../GaugeCollectionWidget/Gauge', () => ({
    default: ({ options }: { options: unknown }) => <pre data-gauge-options="">{JSON.stringify(options)}</pre>,
}));

// echarts needs a real canvas: the chart shows what it is handed instead.
vi.mock('../EchartsCollectionWidget/EChart', () => ({
    default: (props: { option: unknown }) => <pre data-echart="">{JSON.stringify(props.option)}</pre>,
}));

installInertResizeObserver();

type WidgetClass = (new (props: unknown) => {
    state: unknown;
    renderWidgetBody: (props: unknown) => React.JSX.Element;
}) & { getWidgetInfo: () => RxWidgetInfo };

/** The socket a mounted widget talks to; its writes are recorded. */
interface ThemeSocket {
    getState: (id: string) => Promise<ioBroker.State | null>;
    subscribeState: () => Promise<void>;
    unsubscribeState: () => void;
    getObject: () => Promise<undefined>;
    setState: ReturnType<typeof vi.fn>;
    setObject: ReturnType<typeof vi.fn>;
}

/** A socket whose theme state holds `theme` (none: the state is unset); writes are recorded. */
const themeSocket = (theme?: UserTheme | string): ThemeSocket => ({
    getState: (id: string): Promise<ioBroker.State | null> =>
        Promise.resolve(
            id === THEME_STATE_ID && theme !== undefined
                ? ({ val: typeof theme === 'string' ? theme : JSON.stringify(theme) } as ioBroker.State)
                : null,
        ),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
    getObject: (): Promise<undefined> => Promise.resolve(undefined),
    setState: vi.fn((): Promise<void> => Promise.resolve()),
    setObject: vi.fn((): Promise<void> => Promise.resolve()),
});

/** Waits for the draft store's rAF flush and what it re-renders. */
const nextFrame = (): Promise<void> =>
    act(
        () =>
            new Promise<void>(resolve => {
                requestAnimationFrame(() => resolve());
            }),
    );

/** A mounted widget: what it shows of its frame. */
interface MountedWidget {
    /** The shadow of the content paper (its MUI elevation); null without a content paper. */
    elevation: () => number | null;
    /** The markup of the widget's body, without React's mount ids. */
    markup: () => string;
    /** The markup of the whole widget — outer size and card included —, without React's mount ids. */
    widgetMarkup: () => string;
    /** Whether the widget shows its card: the inset of the card around the frame (`Generic`). */
    hasCard: () => boolean;
    /** The background the frame paints (its outer paper). */
    frameBackground: () => string;
    /** What the frame shows of the other frame settings (ticket 03); null where a part is absent. */
    frame: () => FrameView;
    /** The element the widget renders into (portalled modals live in the document body). */
    container: HTMLElement;
    socket: ThemeSocket;
}

/** What the frame shows of the frame settings besides the shadow (tickets 03, 04). */
interface FrameView {
    /** Whether the widget shows its card (ticket 04). */
    card: boolean;
    /** The content box's padding in spacing units (the default theme's 8px a unit). */
    padding: number | null;
    /** Whether the frame paper is outlined. */
    frameOutlined: boolean;
    /** Whether the content paper is outlined. */
    contentOutlined: boolean;
    /** Whether the header line shows its text. */
    header: boolean;
    /** Whether the corner icon shows. */
    headerIcon: boolean;
    /** Whether the footer line shows its text. */
    footer: boolean;
    /** The top margin of the header line in spacing units: half the padding. */
    headerOffset: number | null;
}

/** A computed length in spacing units of the default theme (8px). */
const spacingUnits = (element: Element | null | undefined, property: 'paddingTop' | 'marginTop'): number | null =>
    element ? Number.parseFloat(getComputedStyle(element)[property] || '0') / 8 : null;

const mounted: (() => void)[] = [];

afterEach(async () => {
    mounted.splice(0).forEach(unmount => unmount());
    clearDraftTheme();
    await nextFrame();
});

/**
 * Mounts the widget the way vis-2 renders it, its theme state holding `theme`.
 *
 * @param widget - The widget class.
 * @param data - The stored data (`rxData` and `props.widget.data`).
 * @param values - The subscribed state values.
 * @param theme - The stored theme; none: the theme state is unset.
 * @param hostTheme - The vis-2 host theme the widget receives (default: the light host theme).
 * @param embedded - Whether the widget renders inside another widget (`usedInWidget`).
 */
async function mountWidget(
    widget: WidgetClass,
    data: Record<string, unknown>,
    values: Record<string, unknown>,
    theme?: UserTheme | string,
    hostTheme: object = Theme('light'),
    embedded = false,
): Promise<MountedWidget> {
    const socket = themeSocket(theme);
    const instance = new widget({
        context: { socket, themeType: 'light', lang: 'en', theme: hostTheme },
    });
    instance.state = { rxData: data, rxStyle: {}, values, editMode: false };
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createTestRoot(container);
    // Async act: the theme hook's socket read resolves before anything is read.
    await act(() => {
        root.render(
            instance.renderWidgetBody({
                id: 'preview-widget-frame',
                widget: embedded ? { data, style: {}, usedInWidget: true } : { data, style: {} },
                style: {},
                refService: { current: null },
            }),
        );
        return Promise.resolve();
    });
    await act(() => new Promise<void>(resolve => setTimeout(resolve, 0)));
    mounted.push(() => {
        act(() => root.unmount());
        container.remove();
    });
    // The card shows as its inset around the frame (`Generic`), which sets the outer size.
    const hasCard = (): boolean => {
        const { width, height } = getComputedStyle(container.querySelector('.GENERIC-1')!);
        if (width === 'calc(100% - 8px)' && height === 'calc(100% - 8px)') {
            return true;
        }
        if (width === '100%' && height === '100%') {
            return false;
        }
        throw new Error(`unexpected outer size ${width} × ${height}`);
    };
    return {
        elevation: () => {
            const paper = container.querySelector('.BASE-PAPER-1');
            const match = paper && /\bMuiPaper-elevation(\d+)\b/.exec(paper.className);
            return match ? Number(match[1]) : null;
        },
        markup: () => (container.querySelector('.GENERIC-1')?.innerHTML ?? '').replace(/_r_[0-9a-z]+_/g, '_r_'),
        widgetMarkup: () => container.innerHTML.replace(/_r_[0-9a-z]+_/g, '_r_'),
        hasCard,
        frameBackground: () => getComputedStyle(container.querySelector('.BASE-PAPER-0')!).backgroundColor,
        frame: () => {
            const contentBox = container.querySelector('.BASE-BOX-1');
            const header = container.querySelector('.BASE-HEADER');
            return {
                card: hasCard(),
                padding: spacingUnits(contentBox, 'paddingTop'),
                frameOutlined: Boolean(
                    container.querySelector('.BASE-PAPER-0')?.classList.contains('MuiPaper-outlined'),
                ),
                contentOutlined: Boolean(
                    container.querySelector('.BASE-PAPER-1')?.classList.contains('MuiPaper-outlined'),
                ),
                header: (header?.textContent ?? '') !== '',
                // The corner icon: the content paper's absolutely positioned image.
                headerIcon: container.querySelector('.BASE-PAPER-1 > img[style*="absolute"]') !== null,
                footer: (contentBox?.nextElementSibling?.textContent ?? '') !== '',
                headerOffset: spacingUnits(header, 'marginTop'),
            };
        },
        container,
        socket,
    };
}

/** Puts a Studio draft on the canvas, as the open Theme Studio does. */
const showDraft = async (draft: UserTheme): Promise<void> => {
    setDraftTheme(draft);
    await nextFrame();
};

/** A tiny image as the widget's icon, so the corner icon has something to show. */
const ICON = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=';

/**
 * A frame setting of tickets 03 and 04 as the render seam checks it: values of the setting's own kind, and
 * how the frame shows the setting's value (read back from what is visible).
 */
interface FrameSettingCase {
    key: string;
    /** The built-in standard: what the field stored as its default before ADR-0117. */
    standard: number | boolean;
    /** A Rahmenvorgabe that differs from the standard. */
    preset: number | boolean;
    /** An own value of the widget that differs from the preset. */
    own: number | boolean;
    /** A Studio draft that differs from the preset. */
    draft: number | boolean;
    /** The setting's value as the frame shows it. */
    shown: (frame: FrameView) => number | boolean | null;
    /** Widgets that do not show this setting, and why. */
    notShownBy?: readonly WidgetName[];
}

const FRAME_SETTING_CASES: readonly FrameSettingCase[] = [
    // Ticket 04: the card and the outer size; embedding and Erben = Setzen in `ticket 04: without card`.
    { key: 'noCard', standard: false, preset: true, own: false, draft: false, shown: f => !f.card },
    { key: 'basePadding', standard: 1, preset: 3, own: 0.5, draft: 2, shown: frame => frame.padding },
    { key: 'outlinedFrame', standard: false, preset: true, own: false, draft: false, shown: f => f.frameOutlined },
    { key: 'outlined', standard: false, preset: true, own: false, draft: false, shown: f => f.contentOutlined },
    { key: 'noHeader', standard: false, preset: true, own: false, draft: false, shown: f => !f.header },
    {
        key: 'noHeaderIcon',
        standard: false,
        preset: true,
        own: false,
        draft: false,
        shown: f => !f.headerIcon,
        // The chart draws no corner icon at all; the gauge's is the active highlight zone's (none here).
        notShownBy: ['EchartsCollectionWidget', 'GaugeCollectionWidget'],
    },
    { key: 'noFooter', standard: false, preset: true, own: false, draft: false, shown: f => !f.footer },
];

describe('Widget-Render-Naht: the Widget-Rahmen of every placeable widget', () => {
    describe.each(PLACEABLE_WIDGETS)('%s', name => {
        const fixture = FIXTURES[name]!;
        let widget: WidgetClass;

        beforeAll(async () => {
            widget = ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;
        }, 60_000);

        const mount = (data: Record<string, unknown>, theme?: UserTheme | string): Promise<MountedWidget> =>
            mountWidget(widget, data, fixture.values, theme);

        describe('shadow', () => {
            it('renders an unset shadow without a Rahmenvorgabe like the standard 4, and a stored 4 alike', async () => {
                const unset = await mount(fixture.data);
                const storedDefault = await mount({ ...fixture.data, baseElevation: 4 });

                expect(unset.elevation()).toBe(4);
                expect(unset.markup()).toBe(storedDefault.markup());
            });

            it('renders the Rahmenvorgabe for an unset shadow; an own value beats it', async () => {
                const theme: UserTheme = { widgetFrame: { baseElevation: 10 } };
                const unset = await mount(fixture.data, theme);
                const own = await mount({ ...fixture.data, baseElevation: 2 }, theme);
                const ownDefault = await mount({ ...fixture.data, baseElevation: 4 }, theme);

                expect([unset.elevation(), own.elevation(), ownDefault.elevation()]).toEqual([10, 2, 4]);
                // Reading the Rahmenvorgabe writes nothing.
                for (const { socket } of [unset, own, ownDefault]) {
                    expect(socket.setState).not.toHaveBeenCalled();
                    expect(socket.setObject).not.toHaveBeenCalled();
                }
            });

            // vis-2 stores the default of every field on a drop: a widget dropped now stores no shadow.
            it('renders the Rahmenvorgabe on a widget dropped from the palette', async () => {
                const dropped = paletteInsertData(widget.getWidgetInfo().visAttrs ?? [], fixture.data);
                expect((await mount(dropped, { widgetFrame: { baseElevation: 10 } })).elevation()).toBe(10);
            });

            it('drops an unusable stored Rahmenvorgabe alone: the standard holds, the rest of the theme too', async () => {
                const stored = JSON.stringify({ widgetFrame: { baseElevation: 99 }, spacing: 6 });
                expect((await mount(fixture.data, stored)).elevation()).toBe(4);
            });

            // Host-Theme-Grenze (ADR-0078): a Rahmenvorgabe is Collection configuration only.
            it('takes no Rahmenvorgabe from the host theme', async () => {
                const host = { ...Theme('light'), widgetFrame: { baseElevation: 12 } };
                expect((await mountWidget(widget, fixture.data, fixture.values, undefined, host)).elevation()).toBe(4);
            });

            it('renders a Studio draft over the stored Rahmenvorgabe; without a draft the stored one holds again', async () => {
                const widgetOnCanvas = await mount(fixture.data, { widgetFrame: { baseElevation: 10 } });
                expect(widgetOnCanvas.elevation()).toBe(10);

                await showDraft({ widgetFrame: { baseElevation: 7 } });
                expect(widgetOnCanvas.elevation()).toBe(7);

                // An unusable draft value (the draft reaches the canvas unvalidated) falls away alone.
                await showDraft({ widgetFrame: { baseElevation: 'deep' as unknown as number } });
                expect(widgetOnCanvas.elevation()).toBe(4);

                clearDraftTheme();
                await nextFrame();
                expect(widgetOnCanvas.elevation()).toBe(10);
            });
        });

        describe('ticket 04: without card', () => {
            const presetWithoutCard: UserTheme = { widgetFrame: { noCard: true } };

            it('keeps the card for an unset noCard without a Rahmenvorgabe, as for a stored false', async () => {
                const unset = await mount(fixture.data);
                const storedFalse = await mount({ ...fixture.data, noCard: false });

                expect(unset.hasCard()).toBe(true);
                expect(unset.widgetMarkup()).toBe(storedFalse.widgetMarkup());
            });

            // Erben und Setzen sehen gleich aus: size, edge and background (ADR-0004: transparent).
            it('drops the card for an unset noCard under the Rahmenvorgabe, exactly like an own noCard', async () => {
                const inherited = await mount(fixture.data, presetWithoutCard);
                const own = await mount({ ...fixture.data, noCard: true });

                expect(inherited.hasCard()).toBe(false);
                expect(inherited.frameBackground()).toBe(own.frameBackground());
                expect(inherited.widgetMarkup()).toBe(own.widgetMarkup());
                expect(inherited.socket.setState).not.toHaveBeenCalled();
                expect(inherited.socket.setObject).not.toHaveBeenCalled();
            });

            it('renders an embedded widget without card, with and without the Rahmenvorgabe', async () => {
                const host = Theme('light');
                const plain = await mountWidget(widget, fixture.data, fixture.values, undefined, host, true);
                const withPreset = await mountWidget(
                    widget,
                    fixture.data,
                    fixture.values,
                    { widgetFrame: { noCard: false } },
                    host,
                    true,
                );

                expect([plain.hasCard(), withPreset.hasCard()]).toEqual([false, false]);
            });
        });

        describe('ticket 03: padding, outlines, header, header icon and footer (ticket 04: without card)', () => {
            describe.each(FRAME_SETTING_CASES.filter(({ notShownBy }) => !notShownBy?.includes(name)))(
                '$key',
                ({ key, standard, preset, own, draft, shown }) => {
                    // The icon lets the corner icon show; the fixture's header and footer have text.
                    const data = { ...fixture.data, icon: ICON };
                    const presetTheme: UserTheme = { widgetFrame: { [key]: preset } };

                    it('renders an unset value without a Rahmenvorgabe like the standard, and the stored old default alike', async () => {
                        const unset = await mount(data);
                        const storedDefault = await mount({ ...data, [key]: FRAME_DEFAULTS_BEFORE_ADR_0117[key] });

                        expect(shown(unset.frame())).toBe(standard);
                        expect(unset.markup()).toBe(storedDefault.markup());
                    });

                    it('renders the Rahmenvorgabe for an unset value, on a dropped widget too; an own value beats it', async () => {
                        const unset = await mount(data, presetTheme);
                        const dropped = await mount(
                            paletteInsertData(widget.getWidgetInfo().visAttrs ?? [], data),
                            presetTheme,
                        );
                        const ownValue = await mount({ ...data, [key]: own }, presetTheme);

                        expect([shown(unset.frame()), shown(dropped.frame()), shown(ownValue.frame())]).toEqual([
                            preset,
                            preset,
                            own,
                        ]);
                        for (const { socket } of [unset, dropped, ownValue]) {
                            expect(socket.setState).not.toHaveBeenCalled();
                            expect(socket.setObject).not.toHaveBeenCalled();
                        }
                    });

                    it('renders a Studio draft over the stored Rahmenvorgabe; without a draft the stored one holds again', async () => {
                        const widgetOnCanvas = await mount(data, presetTheme);
                        expect(shown(widgetOnCanvas.frame())).toBe(preset);

                        await showDraft({ widgetFrame: { [key]: draft } });
                        expect(shown(widgetOnCanvas.frame())).toBe(draft);

                        clearDraftTheme();
                        await nextFrame();
                        expect(shown(widgetOnCanvas.frame())).toBe(preset);
                    });
                },
            );

            it('sets header and footer half the effective padding into it', async () => {
                const theme: UserTheme = { widgetFrame: { basePadding: 3 } };
                const standard = await mount(fixture.data);
                const inherited = await mount(fixture.data, theme);
                const own = await mount({ ...fixture.data, basePadding: 2 }, theme);

                expect([standard, inherited, own].map(m => m.frame().headerOffset)).toEqual([0.5, 1.5, 1]);
            });
        });
    });
});

// The two readers of noCard beside the frame, which follow noCard alone, never the embedding: each
// sees the effective value, an inherited noCard like an own one.
describe('ticket 04: the readers of noCard beside the frame', () => {
    const presetWithoutCard: UserTheme = { widgetFrame: { noCard: true } };

    const load = async (name: 'SelectCollectionWidget' | 'JsonTableCollectionWidget'): Promise<WidgetClass> =>
        ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;

    describe('Select popup', () => {
        /** Opens the popup and returns its surface. */
        const popupSurface = (): { boxShadow: string; backgroundColor: string } => {
            const combobox = document.querySelector<HTMLElement>('[role="combobox"]');
            act(() => {
                combobox!.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, button: 0 }));
            });
            const { boxShadow, backgroundColor } = getComputedStyle(document.querySelector('.MuiMenu-paper')!);
            return { boxShadow, backgroundColor };
        };

        it('draws the same flat popup for an inherited and an own noCard', async () => {
            const widget = await load('SelectCollectionWidget');
            const fixture = FIXTURES.SelectCollectionWidget!;

            await mountWidget(widget, fixture.data, fixture.values, presetWithoutCard);
            const inherited = popupSurface();
            // Unmounting takes the portaled popup along.
            mounted.splice(0).forEach(unmount => unmount());

            await mountWidget(widget, { ...fixture.data, noCard: true }, fixture.values);
            const own = popupSurface();

            expect(inherited.boxShadow).toBe('none');
            expect(inherited).toEqual(own);
        }, 60_000);
    });

    describe('JsonTable header bar', () => {
        const headerBar = (): { boxShadow: string; backgroundColor: string } => {
            const { boxShadow, backgroundColor } = getComputedStyle(document.querySelector('.MuiTableHead-root')!);
            return { boxShadow, backgroundColor };
        };

        it('draws the same transparent, flat header bar for an inherited and an own noCard', async () => {
            const widget = await load('JsonTableCollectionWidget');
            const fixture = FIXTURES.JsonTableCollectionWidget!;

            await mountWidget(widget, fixture.data, fixture.values);
            const withCard = headerBar();
            mounted.splice(0).forEach(unmount => unmount());

            await mountWidget(widget, fixture.data, fixture.values, presetWithoutCard);
            const inherited = headerBar();
            mounted.splice(0).forEach(unmount => unmount());

            await mountWidget(widget, { ...fixture.data, noCard: true }, fixture.values);
            const own = headerBar();

            expect(withCard.boxShadow).not.toBe('none');
            expect(inherited).toEqual({ boxShadow: 'none', backgroundColor: 'transparent' });
            expect(inherited).toEqual(own);
        }, 60_000);
    });
});

// Readers of the frame settings outside the frame building block: they read the widget data of the
// context, so they follow the cascade like the frame does.
describe('ticket 03: what Light2 and the button group read of the Widget-Rahmen themselves', () => {
    /** Imports a placeable widget's class. */
    const widgetClass = async (name: WidgetName): Promise<WidgetClass> =>
        ((await import(`../${name}/${name}.tsx`)) as { default: WidgetClass }).default;

    describe('Light2: the modal of the single value slider is as wide as the drawn content', () => {
        const fixture = FIXTURES.Light2CollectionWidget!;
        // A dimmer in Button-Modus: the long press opens the modal; its auto width counts the frame
        // padding and the outlines of frame and content paper.
        const data = {
            ...fixture.data,
            colorLightType: 'dimmer',
            colorLightButton: true,
            colorLightDelayLongPress: 800,
        };

        /** The width of the modal content a long press on the face opens. */
        const modalWidth = async (stored: Record<string, unknown>, theme?: UserTheme): Promise<string> => {
            const lamp = await mountWidget(await widgetClass('Light2CollectionWidget'), stored, fixture.values, theme);
            const face = lamp.container.querySelector('.BASE-PAPER-1 button')!;
            const press = (type: 'pointerdown' | 'pointerup'): void =>
                act(() => {
                    face.dispatchEvent(
                        new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: 1, button: 0 }),
                    );
                });
            vi.useFakeTimers();
            try {
                press('pointerdown');
                act(() => {
                    vi.advanceTimersByTime(800);
                });
                press('pointerup');
            } finally {
                vi.useRealTimers();
            }
            const content = [...(document.body.querySelector('.MuiModal-root')?.children ?? [])].find(
                child => child.querySelector('[data-testid="PowerSettingsNewIcon"]') !== null,
            );
            return content ? getComputedStyle(content).width : 'no modal';
        };

        // Default slider width and paddings (1 each): 8 + 42 + 1 + 8 + 28 + 8 + 8 = 103px; a frame
        // padding of 2 adds 2 × 8px, the two outlines 2 × 2 × 1px.
        it.each([
            ['the standard padding without a Rahmenvorgabe', data, undefined, '103px'],
            ['the padding Rahmenvorgabe', data, { widgetFrame: { basePadding: 2 } }, '119px'],
            ['the outline Rahmenvorgaben', data, { widgetFrame: { outlined: true, outlinedFrame: true } }, '107px'],
            [
                'an own padding over the Rahmenvorgabe',
                { ...data, basePadding: 1 },
                { widgetFrame: { basePadding: 2 } },
                '103px',
            ],
        ] as const)('sizes the modal by %s', async (_case, stored, theme, width) => {
            expect(await modalWidth(stored, theme)).toBe(width);
        });
    });

    describe('Button group: without a frame padding the group ends are square', () => {
        const fixture = FIXTURES.ButtonGroupCollectionWidget!;

        /** The top left corner radius of the group's first button. */
        const firstButtonRadius = async (stored: Record<string, unknown>, theme?: UserTheme): Promise<string> => {
            const group = await mountWidget(
                await widgetClass('ButtonGroupCollectionWidget'),
                stored,
                fixture.values,
                theme,
            );
            const first = group.container.querySelector('.MuiToggleButtonGroup-firstButton');
            return first ? getComputedStyle(first).borderTopLeftRadius : 'no button';
        };

        it('rounds the ends at the standard padding and squares them at a padding Rahmenvorgabe of 0', async () => {
            expect(await firstButtonRadius(fixture.data)).not.toBe('0px');
            expect(await firstButtonRadius(fixture.data, { widgetFrame: { basePadding: 0 } })).toBe('0px');
        });

        it('keeps the ends of an own padding over the Rahmenvorgabe', async () => {
            expect(
                await firstButtonRadius({ ...fixture.data, basePadding: 1 }, { widgetFrame: { basePadding: 0 } }),
            ).not.toBe('0px');
        });
    });
});

// MUI draws a shadow only for a whole elevation (`theme.shadows` is a list): a Rahmenvorgabe of 2.5
// would leave the widget without a shadow and log errors. It is unusable and falls away alone.
describe('ticket 07: a shadow preset that is no whole number', () => {
    const load = async (): Promise<WidgetClass> =>
        ((await import('../SwitchCollectionWidget/SwitchCollectionWidget')) as { default: WidgetClass }).default;
    const fixture = FIXTURES.SwitchCollectionWidget!;

    it('falls away from the stored theme: the standard 4 shows, the other presets hold', async () => {
        const shown = await mountWidget(await load(), fixture.data, fixture.values, {
            widgetFrame: { baseElevation: 2.5, outlinedFrame: true },
        });

        expect(shown.elevation()).toBe(4);
        expect(shown.frame().frameOutlined).toBe(true);
    }, 60_000);

    // The draft is the whole theme while it lasts: without a usable shadow the standard shows.
    it('falls away from a Studio draft: the standard 4 shows, the other presets of the draft hold', async () => {
        const shown = await mountWidget(await load(), fixture.data, fixture.values, {
            widgetFrame: { baseElevation: 8 },
        });
        await showDraft({ widgetFrame: { baseElevation: 2.5, outlinedFrame: true } });

        expect(shown.elevation()).toBe(4);
        expect(shown.frame().frameOutlined).toBe(true);
    }, 60_000);
});

// The Rückfall-Regel (ADR-0114) for an own shadow: MUI draws a shadow only for a whole elevation
// within `theme.shadows` (0–24) and logs an error otherwise. An own value outside it — written by
// the vis-2 assistant or typed before the panel kept to the step — is unusable and reads as unset,
// like such a Rahmenvorgabe: the widget inherits. Nothing is written.
describe('review: an own shadow the widget cannot use', () => {
    const load = async (): Promise<WidgetClass> =>
        ((await import('../SwitchCollectionWidget/SwitchCollectionWidget')) as { default: WidgetClass }).default;
    const fixture = FIXTURES.SwitchCollectionWidget!;

    it.each<[string, unknown]>([
        ['no whole number', 2.5],
        ['no whole number, as text', '2.5'],
        ['above the shadows', 30],
        ['below the shadows', -1],
    ])(
        '%s (%s) inherits: the standard 4, else the Rahmenvorgabe',
        async (_case, own) => {
            const widget = await load();
            const standard = await mountWidget(widget, { ...fixture.data, baseElevation: own }, fixture.values);
            const preset = await mountWidget(widget, { ...fixture.data, baseElevation: own }, fixture.values, {
                widgetFrame: { baseElevation: 10 },
            });

            expect([standard.elevation(), preset.elevation()]).toEqual([4, 10]);
            expect(preset.socket.setObject).not.toHaveBeenCalled();
        },
        60_000,
    );

    it('a whole own shadow as text holds', async () => {
        const shown = await mountWidget(await load(), { ...fixture.data, baseElevation: '7' }, fixture.values);
        expect(shown.elevation()).toBe(7);
    }, 60_000);
});
