/**
 * Type pins for the section slices (ADR-0049) — the machine-readable field-ownership
 * inventory of every rendering surface over the working copy.
 *
 * @module EchartsCollectionWidget/editor/slices.test
 * @remarks
 * Three pin kinds per slice: (1) an EQUALITY pin with the key list written out — growing a
 * slice forces a test touch, so ownership cannot drift silently; (2) an `@ts-expect-error`
 * NEGATIVE proving a foreign write no longer compiles (if the error ever disappears, tsc
 * flags the unused directive — the guard is self-checking); (3) the rail-pass-through
 * POSITIVE: the full-state `SetEditor` satisfies every slice setter via parameter
 * contravariance, and the full `EditorState` satisfies every slice. These bite through the
 * tsc gate; at vitest runtime `expectTypeOf` is inert. Component-mount tests are
 * consciously deferred (ADR-0049).
 */
import { describe, expectTypeOf, it } from 'vitest';

import type { EditorState, SetEditor } from './editorState';
import type { EditorThemeSource } from './useEditorTheme';
import type { AxesZoomSlice } from './sections/AxesZoomSection';
import type { TitleSlice } from './sections/TitleSection';
import type { TooltipSlice } from './sections/TooltipSection';

describe('section slices (ADR-0049)', () => {
    it('TooltipSlice equals the tooltip section ownership', () => {
        expectTypeOf<TooltipSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'chartType'
                | 'tooltipTrigger'
                | 'tooltipDecimals'
                | 'tooltipUnits'
                | 'tooltipTemplate'
                | 'tooltipRaw'
                | 'tooltipSnippets'
            >
        >();
    });

    it('TitleSlice equals the title section ownership', () => {
        expectTypeOf<TitleSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'titleText'
                | 'titlePos'
                | 'titleDx'
                | 'titleDy'
                | 'titleColor'
                | 'titleFontSize'
                | 'titleWeight'
                | 'titleFontStyle'
                | 'titleRaw'
                | 'titleSnippets'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('AxesZoomSlice equals the axes & zoom section ownership', () => {
        expectTypeOf<AxesZoomSlice>().toEqualTypeOf<
            Pick<
                EditorState,
                | 'mode'
                | 'series'
                | 'yAxes'
                | 'xAxis'
                | 'markLines'
                | 'dataZoomSlider'
                | 'dataZoomInside'
                | 'jsonHidden'
                | 'jsonSeriesStyle'
                | 'paletteSource'
                | 'palettePreset'
                | 'paletteCustom'
                | 'darkMode'
            >
        >();
    });

    it('EditorThemeSource equals the theme-resolution read footprint', () => {
        expectTypeOf<EditorThemeSource>().toEqualTypeOf<
            Pick<EditorState, 'paletteSource' | 'palettePreset' | 'paletteCustom' | 'darkMode'>
        >();
    });

    it('foreign writes do not compile', () => {
        const tooltip: SetEditor<TooltipSlice> = () => undefined;
        // @ts-expect-error legendShow is not the tooltip section's field
        tooltip({ legendShow: false });

        const title: SetEditor<TitleSlice> = () => undefined;
        // @ts-expect-error tooltipTemplate is not the title section's field
        title({ tooltipTemplate: '{c}' });

        const axes: SetEditor<AxesZoomSlice> = () => undefined;
        // @ts-expect-error titleText is not the axes & zoom section's field
        axes({ titleText: 'no' });
    });

    it('the rail pass-through compiles: full state and full setter satisfy every slice', () => {
        const railSet: SetEditor = () => undefined;
        const asTooltip: SetEditor<TooltipSlice> = railSet;
        const asTitle: SetEditor<TitleSlice> = railSet;
        const asAxes: SetEditor<AxesZoomSlice> = railSet;
        const railState = {} as EditorState;
        const tooltipState: TooltipSlice = railState;
        const titleState: TitleSlice = railState;
        const axesState: AxesZoomSlice = railState;
        // Reference everything so lint stays quiet — the assignments ARE the assertion.
        expectTypeOf([asTooltip, asTitle, asAxes]).not.toBeAny();
        expectTypeOf([tooltipState, titleState, axesState]).not.toBeAny();
    });
});
