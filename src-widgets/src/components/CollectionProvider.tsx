/**
 * React context provider for Collection widgets.
 *
 * @module components/CollectionProvider
 * @remarks
 * This module provides:
 * - `CollectionContext`: the shared runtime context for all collection widgets
 * - stages 2–4 of the Lese-Naht (stage 1, the Rückfall-Regel, runs in `Generic`): the widget data
 *   with the editor's OID pick read in for an id field without its object (2) and the palette's
 *   defaults for the unset keys (3) ({@link module:hooks/usePickedWidgetData}, KI-Integration), then
 *   the Rahmenvorgaben of the Leinwand-Theme for the unset frame settings (4)
 *   ({@link module:lib/widgetFrame}, {@link module:lib/theme/canvasTheme})
 * - the card decision (`wrappedContent`, "the card is shown"): the host's permission (`hostAllowsCard`,
 *   not embedded), taken away by the effective `noCard` — own or inherited
 * - a `ThemeProvider` wrapper exposing the effective theme (host + collection
 *   overrides + user theme). The shared theme-building/subscribe logic lives in
 *   {@link module:hooks/useCollectionTheme.useCollectionTheme}.
 */

import { createContext, useMemo, type JSX } from 'react';
import { GlobalStyles, ThemeProvider } from '@mui/material';

import useStyles from '../hooks/useStyles';
import { useCollectionThemeFrom } from '../hooks/useCollectionTheme';
import usePickedWidgetData from '../hooks/usePickedWidgetData';

import type { AllCollectionContextProps } from '../types';
import type { WidgetDataReading } from '../lib/pickedWidgetData';
import type { ThemeOptions } from '@mui/material/styles';
import { cleanSx } from '../lib/helper/sxUtils';
import { useCanvasTheme } from '../lib/theme/canvasTheme';
import { widgetFramePresetsOf, withWidgetFrame, type WidgetFrameKey } from '../lib/widgetFrame';

/** No frame settings: the data reads as it is. */
const NO_FRAME_KEYS: readonly WidgetFrameKey[] = [];

/**
 * Runtime context used by all Collection widgets.
 */
const CollectionContext = createContext<AllCollectionContextProps>({} as AllCollectionContextProps);

/**
 * What the provider reads besides the context — the widget's reading of its fields and the host's
 * permission to carry a card (`Generic`). Every key may be absent.
 */
export interface CollectionProviderInput {
    /**
     * What the pick and the field defaults take from the widget's fields (`Generic`, from its
     * `getWidgetInfo()`): an id without its object reads the object and the keys of the pick, an
     * unset key the palette's default. Absent: the data as it is.
     */
    reading?: WidgetDataReading;
    /**
     * The frame settings the widget offers (`Generic`, from its `getWidgetInfo()`): unset, they read
     * the Rahmenvorgabe of the Leinwand-Theme, else the built-in standard. Absent: none.
     */
    frameKeys?: readonly WidgetFrameKey[];
    /**
     * Whether the host lets the widget carry its card (`Generic`: not embedded in another widget).
     * The context's `wrappedContent` the provider hands down is this permission, taken away by the
     * effective `noCard`; an incoming `wrappedContent` decides nothing. Absent: allowed.
     */
    hostAllowsCard?: boolean;
}

/**
 * Props for {@link module:components/CollectionProvider.default}: the context and its children, plus
 * the provider input ({@link CollectionProviderInput}).
 */
interface CollectionProviderProps extends CollectionProviderInput {
    /** Child element(s) to render inside the provider. */
    children: JSX.Element | JSX.Element[] | null;
    /** The fully-typed collection context provided by vis-2. */
    context: AllCollectionContextProps;
}

/**
 * Provides `CollectionContext` and an MUI theme for collection widgets.
 *
 * @param props - Provider props.
 * @param props.children - Child element(s) to render inside the provider.
 * @param props.context - The fully-typed collection context provided by vis-2.
 * @param props.reading - What the pick and the field defaults take from the widget's fields.
 * @param props.frameKeys - The frame settings the widget offers.
 * @param props.hostAllowsCard - Whether the host lets the widget carry its card.
 * @returns Provider subtree.
 */
function CollectionProvider({
    children,
    context,
    reading,
    frameKeys = NO_FRAME_KEYS,
    hostAllowsCard = true,
}: CollectionProviderProps): JSX.Element | JSX.Element[] | null {
    const theme = context.theme;
    const socket = context.socket;

    // Stages 2 and 3 of the Lese-Naht: a widget the vis-2 assistant inserted reads like the palette's:
    // an id set without the field's onChange reads its object and what the pick would have written, an
    // unset key its default; the stored data stays as it is. Unchanged data keeps its identity.
    const picked = usePickedWidgetData(context.widget.data, reading, socket);

    const { fontStyles, textStyles } = useStyles(context.widget.style || {});

    // Collection-specific overrides layered between the host theme and the user
    // theme (see useCollectionTheme): widget-level font/text styles. Memoized so
    // the merged theme only recomputes when these change — the user theme
    // (highest priority) is read inside the hook. No hardcoded fontSize here:
    // widget text sizes come from the theme's typography variants, regenerated
    // from the user's `typography.fontSize` in useCollectionTheme.
    const overrides = useMemo<ThemeOptions>(
        () => ({
            components: {
                MuiTypography: {
                    styleOverrides: {
                        root: {
                            // Merge fontStyles and textStyles into the root style overrides
                            // so CSS properties like textShadow are applied as styles, not props
                            ...cleanSx(fontStyles),
                            ...cleanSx(textStyles),
                        },
                    },
                },
            },
        }),
        [fontStyles, textStyles],
    );

    // The user theme the canvas shows (the Studio draft, else the stored theme; this widget's own
    // subscription), and the effective theme: host → collection overrides → user theme (user wins).
    const canvas = useCanvasTheme(socket);
    const _theme = useCollectionThemeFrom(canvas, theme, overrides);

    // Stage 4, the last of the Lese-Naht (ADR-0117): an unset frame setting the widget offers reads the
    // Rahmenvorgabe of the Leinwand-Theme — the Studio draft while one is open — else its standard
    // (lib/widgetFrame). The one cascade every reader of the widget data sees.
    const userTheme = canvas.theme;
    const data = useMemo(
        () => withWidgetFrame(picked, frameKeys, widgetFramePresetsOf(userTheme)),
        [picked, frameKeys, userTheme],
    );
    const widget = data === context.widget.data ? context.widget : { ...context.widget, data };

    // The card decision (ADR-0117), the one place it falls: the host's permission (not embedded),
    // taken away by the effective noCard — inherited or own, the one value the frame, the Select
    // popup and the table header read. Its readers only paint; the outer size follows (`Generic`).
    const wrappedContent = hostAllowsCard && !data.noCard;

    // No <CssBaseline />: MUI's CssBaseline also spreads theme.typography.body1
    // — whose fontFamily the user's choice is forced onto (see
    // useCollectionTheme) — onto the global <body>, leaking the configured font
    // into vis-2's palette and attributes panels. But vis-2 itself sets NO global
    // `box-sizing`, so dropping CssBaseline entirely reverted MUI components
    // inside widgets to `content-box` and broke horizontal padding (the BASE-BOX-1
    // container has width:100% + overflow:hidden + p; under content-box the
    // horizontal padding overflows and gets clipped). Restore only the border-box
    // reset, scoped to nothing extra — without the body-font leak.
    return (
        <ThemeProvider theme={_theme}>
            <GlobalStyles
                styles={{
                    html: { boxSizing: 'border-box' },
                    '*, *::before, *::after': { boxSizing: 'inherit' },
                }}
            />
            <CollectionContext.Provider value={{ ...context, widget, theme: _theme, wrappedContent }}>
                {children}
            </CollectionContext.Provider>
        </ThemeProvider>
    );
}

export { CollectionContext };
export default CollectionProvider;
