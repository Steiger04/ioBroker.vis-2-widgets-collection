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
import { paletteInsertData, PLACEABLE_WIDGETS } from './testing/aiSeams';
import { createTestRoot } from './testing/testRoots';
import { FIXTURES } from './testing/widgetFixtures';
import type { UserTheme } from './theme/themeTypes';

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
    socket: ThemeSocket;
}

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
    return {
        elevation: () => {
            const paper = container.querySelector('.BASE-PAPER-1');
            const match = paper && /\bMuiPaper-elevation(\d+)\b/.exec(paper.className);
            return match ? Number(match[1]) : null;
        },
        markup: () => (container.querySelector('.GENERIC-1')?.innerHTML ?? '').replace(/_r_[0-9a-z]+_/g, '_r_'),
        widgetMarkup: () => container.innerHTML.replace(/_r_[0-9a-z]+_/g, '_r_'),
        hasCard: () => {
            const { width, height } = getComputedStyle(container.querySelector('.GENERIC-1')!);
            if (width === 'calc(100% - 8px)' && height === 'calc(100% - 8px)') {
                return true;
            }
            if (width === '100%' && height === '100%') {
                return false;
            }
            throw new Error(`unexpected outer size ${width} × ${height}`);
        },
        frameBackground: () => getComputedStyle(container.querySelector('.BASE-PAPER-0')!).backgroundColor,
        socket,
    };
}

/** Puts a Studio draft on the canvas, as the open Theme Studio does. */
const showDraft = async (draft: UserTheme): Promise<void> => {
    setDraftTheme(draft);
    await nextFrame();
};

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

            it('lets an own noCard beat the Rahmenvorgabe', async () => {
                const ownCard = await mount({ ...fixture.data, noCard: false }, presetWithoutCard);
                const ownWithout = await mount({ ...fixture.data, noCard: true }, { widgetFrame: { noCard: false } });

                expect([ownCard.hasCard(), ownWithout.hasCard()]).toEqual([true, false]);
            });

            it('follows a Studio draft over the stored Rahmenvorgabe; without a draft the stored one holds again', async () => {
                const widgetOnCanvas = await mount(fixture.data, presetWithoutCard);
                expect(widgetOnCanvas.hasCard()).toBe(false);

                await showDraft({ widgetFrame: { noCard: false } });
                expect(widgetOnCanvas.hasCard()).toBe(true);

                clearDraftTheme();
                await nextFrame();
                expect(widgetOnCanvas.hasCard()).toBe(false);
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
