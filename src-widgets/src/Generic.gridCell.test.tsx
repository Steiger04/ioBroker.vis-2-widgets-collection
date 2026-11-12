/**
 * The height contract of a Collection widget in the host's grid layout.
 *
 * @module Generic.gridCell.test
 * @remarks
 * The rows of a grid section grow with their content (`gridAutoRows: minmax(<rowHeight>px, auto)`,
 * vis-2 Vis/visView.tsx:2961). A widget with a fixed number of rows (`gridRow: span N`, from
 * `style.gridRows` or a px `style.height`, Vis/visGridLayout.ts:281-297) must stay as high as its
 * rows and clip inside, as in the absolute layout; a widget whose rows are `auto` keeps growing
 * with its content, which is what `auto` means there. The service div takes its cell from the
 * host's `VisBaseWidget.getGridCellStyle` (Vis/visBaseWidget.tsx:1901-1915, :2090-2100); the
 * hoisted host below carries that static with the host's row rule, and a widget is rendered the
 * way vis-2 renders it: an instance of its class, `renderWidgetBody` with the host's props.
 */
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Theme } from '@iobroker/gui-components';
import type { RxRenderWidgetProps, RxWidgetInfo } from '@iobroker/types-vis-2';

import { createTestRoot } from './lib/testing/testRoots';

const host = vi.hoisted(() => {
    /** The host's row rule (Vis/visGridLayout.ts getRowSpan), enough for the cases below. */
    const rowsOf = (style: Record<string, unknown> | undefined): number | 'auto' => {
        if (style?.gridRows === 'auto') {
            return 'auto';
        }
        if (typeof style?.gridRows === 'number') {
            return style.gridRows;
        }
        const height = typeof style?.height === 'string' ? /^(\d+)(px)?$/.exec(style.height) : null;
        return height ? Math.max(1, Math.round((Number(height[1]) + 8) / (56 + 8))) : 'auto';
    };

    const visRxWidget = class {
        static getI18nPrefix(): string {
            return '';
        }

        static t(key: string): string {
            void this.getI18nPrefix;
            return key;
        }

        static getGridCellStyle(
            style: Record<string, unknown> | undefined,
            _settings: unknown,
            order: number,
            span?: { rows: number | 'auto' } | null,
        ): Record<string, unknown> {
            const rows = span ? span.rows : rowsOf(style);
            return {
                gridColumn: '1 / -1',
                gridRow: rows === 'auto' ? 'auto' : `span ${rows}`,
                order,
                position: 'relative',
                width: 'auto',
                height: 'auto',
                minWidth: '0',
            };
        }

        props: unknown;

        state: unknown;

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
    };
    (window as unknown as { visRxWidget: unknown }).visRxWidget = visRxWidget;

    return { visRxWidget };
});

import Generic from './Generic';

/** What the `CollectionContext` reads from the host's socket while the widget mounts. */
const stubSocket = {
    getState: (): Promise<null> => Promise.resolve(null),
    subscribeState: (): Promise<void> => Promise.resolve(),
    unsubscribeState: (): void => undefined,
    getObject: (): Promise<null> => Promise.resolve(null),
};

class ProbeWidget extends Generic<Record<string, unknown>> {
    static getWidgetInfo(): RxWidgetInfo {
        return { id: 'tplProbe', visAttrs: [] } as unknown as RxWidgetInfo;
    }

    renderWidgetBody(props: RxRenderWidgetProps): React.JSX.Element {
        super.renderWidgetBody(props);
        return this.renderWithProvider(<div data-body="" />, props);
    }
}

/** A running grid resize of the host (`state.gridGesture`): the cells shown while the handle moves. */
interface GridGesture {
    span: { columns: number | 'full'; rows: number | 'auto' };
}

/** Where the widget sits: the absolute layout, the column layout or a cell of the grid layout. */
interface Placement {
    isRelative: boolean;
    gridCell?: boolean;
}

/**
 * Renders the probe widget as vis-2 does and returns its outermost element.
 *
 * @param placement - The host's layout props.
 * @param style - The widget style (`state.style`; `rxStyle` carries the same here).
 * @param gridGesture - A running grid resize (`state.gridGesture`).
 */
const renderWidget = async (
    placement: Placement,
    style: Record<string, unknown>,
    gridGesture?: GridGesture,
): Promise<HTMLElement> => {
    const widget = new ProbeWidget({
        ...placement,
        id: 'w000001',
        view: 'main',
        context: {
            socket: stubSocket,
            themeType: 'light',
            lang: 'en',
            theme: Theme('light'),
            views: { main: { settings: { layout: 'grid' }, widgets: {} } },
        },
    } as never);
    (widget as unknown as { state: unknown }).state = {
        rxData: {},
        rxStyle: style,
        style,
        values: {},
        editMode: false,
        gridGesture,
    };
    const props = {
        id: 'w000001',
        style: {},
        className: '',
        refService: { current: null },
        widget: { data: {}, style },
        overlayClassNames: [],
    } as unknown as RxRenderWidgetProps;

    const container = document.createElement('div');
    document.body.appendChild(container);
    // Async act: the theme hook's socket read resolves before the element is read.
    await act(() => {
        createTestRoot(container).render(widget.renderWidgetBody(props));
        return Promise.resolve();
    });
    const root = container.querySelector<HTMLElement>('.GENERIC-0');
    expect(root).not.toBeNull();
    return root!;
};

const containOf = (element: HTMLElement): string => getComputedStyle(element).contain;

describe('Generic: the widget in the host grid layout', () => {
    it.each([
        ['a px height', { height: '400px' }],
        ['grid rows', { gridRows: 4 }],
    ])(
        'with a fixed row span (%s) stays as high as its rows: its content takes no part in sizing them',
        async (_, style) => {
            expect(containOf(await renderWidget({ isRelative: true, gridCell: true }, style))).toBe('size');
        },
    );

    it.each([
        ['rows set to auto', { gridRows: 'auto', height: '400px' }],
        ['no height', {}],
        ['a height in percent', { height: '100%' }],
    ])('with auto rows (%s) keeps growing with its content', async (_, style) => {
        expect(containOf(await renderWidget({ isRelative: true, gridCell: true }, style))).not.toBe('size');
    });

    it('follows the rows of a running grid resize over those of its style', async () => {
        expect(
            containOf(
                await renderWidget(
                    { isRelative: true, gridCell: true },
                    { gridRows: 'auto' },
                    { span: { columns: 4, rows: 3 } },
                ),
            ),
        ).toBe('size');
    });

    it('in a host without the grid cell style renders as before', async () => {
        const getGridCellStyle = host.visRxWidget.getGridCellStyle;
        (host.visRxWidget as { getGridCellStyle?: unknown }).getGridCellStyle = undefined;
        try {
            expect(containOf(await renderWidget({ isRelative: true, gridCell: true }, { height: '400px' }))).not.toBe(
                'size',
            );
        } finally {
            host.visRxWidget.getGridCellStyle = getGridCellStyle;
        }
    });

    it('renders unchanged in the absolute and the column layout', async () => {
        const style = { height: '400px', gridRows: 4 };
        const absolute = await renderWidget({ isRelative: false }, style);
        const columns = await renderWidget({ isRelative: true }, style);
        const gridAuto = await renderWidget({ isRelative: true, gridCell: true }, { gridRows: 'auto' });

        expect(containOf(absolute)).not.toBe('size');
        expect(containOf(columns)).not.toBe('size');
        // The same element and the same styles as a widget whose rows grow, i.e. as before.
        expect(absolute.outerHTML).toBe(gridAuto.outerHTML);
        expect(columns.outerHTML).toBe(gridAuto.outerHTML);
    });
});
