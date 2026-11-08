/**
 * CollectionBase — the frame header and the Content-Box, rendered.
 *
 * @module components/CollectionBase.test
 * @remarks
 * DOM contract of the frame on the preview context: a host's `hideHeader` keeps the header out
 * of the frame exactly like the widget's own `noHeader` — the same collapsed header box, its text
 * slot left empty. Header and footer (CONTEXT "Rahmen-Kopfzeile"/"Rahmen-Fußzeile") carry their text
 * from the moment they appear — also when they mount late, after an invalid type turned valid with
 * the text already known (the editor's OID pick stores `oid` before `oidObject`). The frame owns the corner icon (CONTEXT "Eck-Icon"): rendered from its data as
 * the content slot's first element, substituted by a `cornerIcon` override, absent for
 * `cornerIcon={false}`, `noHeaderIcon` and an invalid type. The frame publishes its Content-Box (ADR-0098) to its children: the injected
 * box of the test scene, else the measured inner paper (BASE-PAPER-1); `undefined` until the
 * first measurement and outside the frame.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.hoisted(() => {
    // Mirrors vis-2's VisRxWidget.t, which reads `this.getI18nPrefix()` (an unbound
    // Generic.t throws in the host; identity stubs would hide that). Generic overrides the
    // prefix, so a correctly bound call carries Generic's. Arguments are appended so the
    // %s substitution stays visible.
    (window as unknown as { visRxWidget: unknown }).visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(this: { getI18nPrefix(): string }, key: string, ...args: string[]): string {
            return `${this.getI18nPrefix()}${key}${args.length ? `(${args.join(',')})` : ''}`;
        }
    };
});

import { act, createElement, useState, type ComponentProps, type FC } from 'react';
import { useTheme } from '@mui/material/styles';

import CollectionBase from './CollectionBase';
import useContentBox, { type ContentBox } from '../hooks/useContentBox';
import useData from '../hooks/useData/useData';
import type { StyleData } from '../hooks/useData/types';
import {
    collectionScene,
    installInertResizeObserver,
    testScopedMount,
    withContentBox,
    type MountedCollectionBody,
} from '../lib/testing/collectionScene';
import type { PreviewScene } from '../preview/types';

installInertResizeObserver();

const OID = 'demo.0.frame';

const mountBody = testScopedMount();

const frameScene = (data: Record<string, unknown> = {}): PreviewScene =>
    collectionScene(
        'collection-base-test',
        { oid: OID, oidObject: { _id: OID, type: 'number' }, header: 'Küche', noFooter: true, ...data },
        0,
    );

/** Mounts the frame around the scene's widget, the host passing `hideHeader`. */
const mountFrame = (data: Record<string, unknown>, hideHeader?: boolean): MountedCollectionBody => {
    const Frame: FC = () => {
        const { data: styleData } = useData('oid');
        return createElement(CollectionBase, { data: styleData, hideHeader });
    };
    return mountBody(Frame, frameScene(data));
};

/** The frame header's box: the slot above the frame's content box. */
const headerBox = ({ container }: MountedCollectionBody): Element | null => container.querySelector('.BASE-HEADER');

describe('CollectionBase frame header', () => {
    it('shows the header text in the frame by default', () => {
        const frame = mountFrame({});

        expect(headerBox(frame)?.textContent).toBe('Küche');
    });

    it('hideHeader collapses the header like noHeader and leaves its text slot empty', () => {
        const hidden = mountFrame({}, true);
        const noHeader = mountFrame({ noHeader: true });
        const shown = mountFrame({});

        expect(headerBox(hidden)?.textContent).toBe('');
        expect(headerBox(hidden)?.outerHTML).toBe(headerBox(noHeader)?.outerHTML);
        expect(headerBox(hidden)?.className).not.toBe(headerBox(shown)?.className);
    });
});

describe('CollectionBase frame lines appearing with a valid type', () => {
    /** Switches the mounted frame's `isValidType`, standing in for the late `oidObject` of an OID pick. */
    let setValidType: (valid: boolean) => void = () => {};

    /**
     * Mounts the frame invalid first — the editor's state between the stored `oid` and the
     * arriving `oidObject` — with the OID value already present and constant.
     */
    const mountLateValidFrame = (): MountedCollectionBody => {
        const Frame: FC = () => {
            const { data: styleData } = useData('oid');
            const [isValidType, setIsValidType] = useState(false);
            setValidType = setIsValidType;
            return createElement(CollectionBase, { data: styleData, oidValue: 42, isValidType });
        };
        return mountBody(Frame, frameScene({ noFooter: false }));
    };

    /** The frame's lines: the header box first, the footer box last in the outer paper. */
    const lines = (frame: MountedCollectionBody): { header?: string | null; footer?: string | null } => ({
        header: headerBox(frame)?.textContent,
        footer: frame.container.querySelector('.BASE-PAPER-0')?.lastElementChild?.textContent,
    });

    it('the Rahmen-Fußzeile shows the current value as soon as it appears, without a value change', () => {
        const frame = mountLateValidFrame();

        act(() => setValidType(true));

        expect(lines(frame).footer).toBe('42');
    });

    it('the Rahmen-Kopfzeile shows its text as soon as it appears', () => {
        const frame = mountLateValidFrame();

        act(() => setValidType(true));

        expect(lines(frame).header).toBe('Küche');
    });
});

describe('CollectionBase Rahmen-Fußzeile', () => {
    /** The footer's text over the given widget data and OID value. */
    const footerOf = (data: Record<string, unknown>, oidValue: unknown): string | null | undefined => {
        const Frame: FC = () => {
            const { data: styleData } = useData('oid');
            return createElement(CollectionBase, { data: styleData, oidValue: oidValue as ioBroker.StateValue });
        };
        return mountBody(Frame, frameScene({ noFooter: false, ...data })).container.querySelector('.BASE-PAPER-0')
            ?.lastElementChild?.textContent;
    };

    const WITH_UNIT = { oidObject: { _id: OID, type: 'number', unit: '°C' } };

    it.each([
        ['an object', { a: 1 }],
        ['an array', [1, 2]],
        ['NaN', NaN],
    ])('shows no text for %s', (_what, value) => {
        expect(footerOf(WITH_UNIT, value)).toBe('');
    });

    it.each([
        ['a number', 21, '21°C'],
        ['a zero', 0, '0°C'],
        ['a string', 'warm', 'warm°C'],
        ['a true', true, 'true°C'],
        ['a false', false, 'false°C'],
        ['an empty string', '', ''],
        ['null', null, ''],
    ])('shows %s with its unit', (_what, value, text) => {
        expect(footerOf(WITH_UNIT, value)).toBe(text);
    });

    it('shows a false as text without a unit, too', () => {
        expect(footerOf({}, false)).toBe('false');
    });

    // The scene's state is 0, so `value1: 0` is the matching row; the frame's own `oidValue` differs.
    const MATCHING_ROW = { values_count: 1, value1: 0 };

    it('lets the footer text win over the alias and the row value', () => {
        expect(footerOf({ ...MATCHING_ROW, alias1: 'warm', footer1: 'Fuß' }, 21)).toBe('Fuß');
    });

    it('lets the alias of the matching row win over its value', () => {
        expect(footerOf({ ...MATCHING_ROW, alias1: 'warm' }, 21)).toBe('warm');
    });

    it('lets the value of the matching row win over the current value', () => {
        expect(footerOf({ ...WITH_UNIT, ...MATCHING_ROW }, 21)).toBe('0°C');
    });
});

describe('CollectionBase invalid object hint', () => {
    const PREFIX = 'vis_2_widgets_collection_';

    /** The frame's text with an invalid type reported by its widget. */
    const hint = (data: Record<string, unknown>): string | null | undefined => {
        const Frame: FC = () => {
            const { data: styleData } = useData('oid');
            return createElement(CollectionBase, { data: styleData, isValidType: false });
        };
        return mountBody(Frame, frameScene({ noHeader: true, ...data })).container.querySelector('.MuiTypography-root')
            ?.textContent;
    };

    it('names the bound object through the translation', () => {
        expect(hint({})).toBe(`${PREFIX}collection_base_invalid_type(${OID})`);
    });

    it('asks for an object through the translation while none is bound', () => {
        expect(hint({ oid: '', oidObject: undefined })).toBe(`${PREFIX}collection_base_select_oid`);
    });
});

describe('CollectionBase corner icon (Eck-Icon)', () => {
    /** The widget's common icon fields: source, size (percent of 24 px) and offsets. */
    const ICON_FIELDS = { icon: 'corner.svg', iconSize: 50, iconXOffset: '5px', iconYOffset: '7px' };

    /**
     * Mounts the frame around a marker child, fed from the widget data; `props` derives the
     * frame's further props from the resolved style data (e.g. a `cornerIcon` override).
     */
    const mountIconFrame = (
        data: Record<string, unknown> = {},
        props: (styleData: StyleData) => Partial<ComponentProps<typeof CollectionBase>> = () => ({}),
    ): MountedCollectionBody => {
        const Frame: FC = () => {
            const { data: styleData } = useData('oid');
            return createElement(
                CollectionBase,
                { data: styleData, ...props(styleData) },
                createElement('span', { className: 'frame-child' }),
            );
        };
        return mountBody(Frame, frameScene({ ...ICON_FIELDS, ...data }));
    };

    /** The corner icon: the only image in the frame (its child is a plain marker). */
    const cornerIcon = ({ container }: MountedCollectionBody): HTMLImageElement | null =>
        container.querySelector('img');

    it('renders the icon from the frame data: source, height and offsets', () => {
        const icon = cornerIcon(mountIconFrame());

        expect(icon?.getAttribute('src')).toBe('corner.svg');
        expect(icon?.style.position).toBe('absolute');
        expect(icon?.style.height).toBe('calc(24px * 50 / 100)');
        expect(icon?.style.top).toBe('calc(0px - 7px)');
        expect(icon?.style.right).toBe('calc(0px - 5px)');
    });

    it('a cornerIcon override substitutes the icon data', () => {
        const icon = cornerIcon(mountIconFrame({}, styleData => ({ cornerIcon: { ...styleData, icon: 'zone.svg' } })));

        expect(icon?.getAttribute('src')).toBe('zone.svg');
    });

    it('cornerIcon={false} renders no icon', () => {
        expect(cornerIcon(mountIconFrame({}, () => ({ cornerIcon: false })))).toBeNull();
    });

    it('noHeaderIcon renders no icon', () => {
        expect(cornerIcon(mountIconFrame({ noHeaderIcon: true }))).toBeNull();
    });

    it('an invalid type renders no icon', () => {
        expect(cornerIcon(mountIconFrame({}, () => ({ isValidType: false })))).toBeNull();
    });

    it('sits as the first element of the content slot, before the children', () => {
        const frame = mountIconFrame();
        const slot = frame.container.querySelector('.BASE-PAPER-1');

        expect(slot?.firstElementChild).toBe(cornerIcon(frame));
        expect(slot?.firstElementChild?.nextElementSibling?.className).toBe('frame-child');
    });
});

describe('CollectionBase Content-Box (ADR-0098)', () => {
    /** The box the probe last read through useContentBox(). */
    let seen: ContentBox | undefined;

    const Probe: FC = () => {
        seen = useContentBox();
        return null;
    };

    /** The probe as the frame's child — where a widget body reads the box. */
    const FramedProbe: FC = () => {
        const { data } = useData('oid');
        return createElement(CollectionBase, { data }, createElement(Probe));
    };

    beforeEach(() => {
        seen = undefined;
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('publishes the box the test scene injects to its children', () => {
        mountBody(FramedProbe, withContentBox(frameScene(), { width: 300, height: 90 }));

        expect(seen).toStrictEqual({ width: 300, height: 90 });
    });

    it('leaves the box undefined until the first measurement', () => {
        mountBody(FramedProbe, frameScene());

        expect(seen).toStrictEqual({ width: undefined, height: undefined });
    });

    it('publishes the measured inner paper (BASE-PAPER-1), not the padded box around it', () => {
        // Reports each observed element at its own size: the inner paper differs from BASE-BOX-1.
        const sizeOf = (target: Element): { width: number; height: number } =>
            target.classList.contains('BASE-PAPER-1') ? { width: 300.4, height: 89.6 } : { width: 480, height: 120 };
        vi.stubGlobal(
            'ResizeObserver',
            class {
                private readonly callback: ResizeObserverCallback;

                constructor(callback: ResizeObserverCallback) {
                    this.callback = callback;
                }

                observe(target: Element): void {
                    this.callback(
                        [{ target, contentRect: sizeOf(target) } as unknown as ResizeObserverEntry],
                        this as unknown as ResizeObserver,
                    );
                }

                /* eslint-disable class-methods-use-this -- nothing to release */
                unobserve(): void {}
                disconnect(): void {}
                /* eslint-enable class-methods-use-this */
            },
        );

        mountBody(FramedProbe, frameScene());

        // Rounded to whole pixels, like every measurement of useElementDimensions.
        expect(seen).toStrictEqual({ width: 300, height: 90 });
    });

    it('is undefined outside the frame — an injected box stays inside CollectionBase', () => {
        mountBody(Probe, withContentBox(frameScene(), { width: 300, height: 90 }));

        expect(seen).toStrictEqual({ width: undefined, height: undefined });
    });
});

describe('CollectionBase content background (ADR-0004, ticket 12)', () => {
    /** The palette paper of the theme the frame renders in, read by a child of the frame. */
    let themePaper: string | undefined;

    const PaperProbe: FC = () => {
        themePaper = useTheme().palette.background.paper;
        return null;
    };

    /**
     * Mounts the frame on the scene's widget data, inside its card (`wrappedContent`) or not —
     * Generic derives `wrappedContent` from `noCard` / embedding, the scene stands in for it.
     */
    const mountBackgroundFrame = (data: Record<string, unknown>, wrappedContent: boolean): MountedCollectionBody => {
        const Frame: FC = () => {
            const { data: styleData } = useData('oid');
            return createElement(CollectionBase, { data: styleData }, createElement(PaperProbe));
        };
        const scene = frameScene(data);
        return mountBody(Frame, { ...scene, context: { ...scene.context, wrappedContent } } as PreviewScene);
    };

    /** The background the content slot (BASE-PAPER-1) paints. */
    const contentBackground = ({ container }: MountedCollectionBody): string => {
        const slot = container.querySelector('.BASE-PAPER-1');
        expect(slot).not.toBeNull();
        const style = getComputedStyle(slot!);
        return style.background || style.backgroundColor;
    };

    beforeEach(() => {
        themePaper = undefined;
    });

    it('in the card, without a value, paints the theme paper (MUI Paper default) — the swatch terminal', () => {
        const frame = mountBackgroundFrame({}, true);

        expect(themePaper).toBeTruthy();
        expect(getComputedStyle(frame.container.querySelector('.BASE-PAPER-1')!).backgroundColor).toBe(themePaper);
    });

    it('in the card, the paper stays under a coloured frame background', () => {
        const frame = mountBackgroundFrame({ frameBackground: '#336699' }, true);

        expect(getComputedStyle(frame.container.querySelector('.BASE-PAPER-1')!).backgroundColor).toBe(themePaper);
    });

    it('without the card (noCard / embedded), without a value, paints transparent — the documented divergence', () => {
        expect(contentBackground(mountBackgroundFrame({ noCard: true }, false))).toBe('transparent');
    });

    it.each([true, false])('an explicit value paints as set (card: %s)', wrappedContent => {
        expect(contentBackground(mountBackgroundFrame({ background: '#aa0000' }, wrappedContent))).toBe('#aa0000');
    });
});
