/**
 * Colours section — palette, background and chart frame (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/ColorsSection
 * @remarks
 * The chart-wide colours in one place: the resolved-palette swatch preview + source dropdown
 * (theme / presets / custom), the chart background, and the chart frame. The value→colour scale
 * is a per-series setting (ADR-0101, the series card's Stil tab) — not part of this section.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { PALETTE_PRESETS } from '../../presentation';
import { FRAME_STYLES } from '../../frameStyle';
import { chartCanvasColor } from '../../echartsTheme';
import {
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    SectionTabs,
    SliderField,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../issueTabs';
import ColorField, { ColorListField } from '../colorFields';
import { useEditorTheme } from '../useEditorTheme';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

/**
 * The colours section's field ownership (ADR-0049 slice) — the palette trio + darkMode (the
 * theme hook's read footprint), the chart background and the chart frame (parity Build D).
 */
export type ColorsSlice = Pick<
    EditorState,
    'paletteSource' | 'palettePreset' | 'paletteCustom' | 'bgColor' | 'darkMode' | 'frame'
>;

interface ColorsSectionProps {
    /** External tab jump (ADR-0073): the focus request's tab selects once. */
    focusTab?: SectionTabsFocus;
    /** This section's validation findings — the per-tab ⚠ dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: ColorsSlice;
    set: SetEditor<ColorsSlice>;
    pickerCtx: OidPickerCtx;
}

/** Dropdown value encoding the whole palette choice: theme | preset:<name> | custom. */
const paletteChoice = (state: ColorsSlice): string =>
    state.paletteSource === 'custom'
        ? 'custom'
        : state.paletteSource === 'preset'
          ? `preset:${state.palettePreset}`
          : 'theme';

const ColorsSection: FC<ColorsSectionProps> = ({ focusTab, issues, state, set, pickerCtx }) => {
    // Palette + tokens resolve against the COLLECTION theme (ADR-0027) — what the canvas renders
    // under, not the vis-2 host theme.
    const { palette, themeTokens, theme } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    // Frame colour inherit preview — the collection theme's divider (what the body defaults to).
    const frameColorFallback = themeTokens.divider;
    const paletteOptions: ReadonlyArray<[string, string]> = [
        ['theme', Generic.t('echarts_palette_theme')],
        ...Object.keys(PALETTE_PRESETS).map(k => [`preset:${k}`, k] as [string, string]),
        ['custom', Generic.t('echarts_palette_custom')],
    ];

    const onPaletteChoice = (v: string): void => {
        if (v === 'theme') {
            set({ paletteSource: 'theme' });
        } else if (v === 'custom') {
            set({ paletteSource: 'custom' });
        } else if (v.startsWith('preset:')) {
            set({ paletteSource: 'preset', palettePreset: v.slice(7) });
        }
    };

    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    return (
        // Sektions-Tabs (ADR-0073): Palette | Fläche | Rahmen — the same three tabs for every
        // family (the chart-level Farbskala tab left with ADR-0101).
        <SectionTabs
            focus={focusTab}
            tabs={[
                { key: 'palette', label: Generic.t('echarts_tab_palette'), issueCount: dots.palette },
                { key: 'surface', label: Generic.t('echarts_tab_surface'), issueCount: dots.surface },
                { key: 'frame', label: Generic.t('echarts_tab_frame'), issueCount: dots.frame },
            ]}
        >
            <Box>
                {/* Live preview of the resolved palette (the colours series inherit). */}
                <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5, flexWrap: 'wrap' }}>
                    {palette.map((c, i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 22,
                                height: 22,
                                borderRadius: '3px',
                                backgroundColor: c,
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                    ))}
                </Box>
                <FieldGrid>
                    <LabeledSelect
                        label={Generic.t('echarts_palette_source')}
                        value={paletteChoice(state)}
                        onChange={onPaletteChoice}
                        options={paletteOptions}
                    />
                    {state.paletteSource === 'custom' && (
                        <Box sx={{ gridColumn: '1 / -1' }}>
                            <FieldLabel>{Generic.t('echarts_palette_custom_colors')}</FieldLabel>
                            <ColorListField
                                title={Generic.t('echarts_palette_custom_colors')}
                                value={state.paletteCustom}
                                onChange={v => set({ paletteCustom: v })}
                                ctx={pickerCtx}
                            />
                        </Box>
                    )}
                    {/* Dark-mode policy (moved from Behaviour — it is a theme/colour concern, and
                        the Colours summary already reported it, ADR-0011 companion / D5). */}
                    <LabeledSelect
                        label={Generic.t('echarts_dark_mode')}
                        value={state.darkMode}
                        onChange={v => set({ darkMode: v as ColorsSlice['darkMode'] })}
                        options={[
                            ['auto', Generic.t('echarts_dark_auto')],
                            ['light', Generic.t('echarts_dark_light')],
                            ['dark', Generic.t('echarts_dark_dark')],
                        ]}
                    />
                </FieldGrid>
            </Box>
            <Box>
                <FieldLabel>{Generic.t('echarts_background')}</FieldLabel>
                <ColorField
                    title={Generic.t('echarts_background')}
                    value={state.bgColor === 'transparent' || !state.bgColor ? null : state.bgColor}
                    // Inherit swatch = the canvas the chart paints: transparent while it follows
                    // the host mode, the fixed canvas colour of a forced mode (shared resolver).
                    fallback={chartCanvasColor(theme, state.darkMode)}
                    onChange={v => set({ bgColor: v ?? 'transparent' })}
                    ctx={pickerCtx}
                />
            </Box>
            {/* Chart frame (parity Build D, ADR-0056) — every family: it is container CSS around
                the chart area, so it applies to cartesian AND pie alike. The tab IS the group —
                no SubGroup title echo (ADR-0073). */}
            <Box>
                <SwitchList sx={{ mb: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_frame_show')}
                        checked={state.frame.enabled}
                        onChange={v => set({ frame: { ...state.frame, enabled: v } })}
                    />
                </SwitchList>
                <FieldGrid>
                    <SliderField
                        label={Generic.t('echarts_frame_width')}
                        value={state.frame.width}
                        min={0}
                        max={10}
                        step={0.5}
                        disabled={!state.frame.enabled}
                        onChange={v => set({ frame: { ...state.frame, width: v } })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_frame_style')}
                        value={state.frame.style}
                        onChange={v => set({ frame: { ...state.frame, style: v as ColorsSlice['frame']['style'] } })}
                        // The three shared names reuse the line-style keys; the five CSS-only
                        // styles (double/groove/…) get their own — translated like every option.
                        options={FRAME_STYLES.map(
                            s =>
                                [
                                    s,
                                    Generic.t(
                                        s === 'solid' || s === 'dashed' || s === 'dotted'
                                            ? `echarts_style_${s}`
                                            : `echarts_frame_style_${s}`,
                                    ),
                                ] as [string, string],
                        )}
                    />
                    <Box>
                        <FieldLabel>{Generic.t('echarts_frame_color')}</FieldLabel>
                        <ColorField
                            title={Generic.t('echarts_frame_color')}
                            value={state.frame.color || null}
                            fallback={frameColorFallback}
                            onChange={v => set({ frame: { ...state.frame, color: v ?? '' } })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <SliderField
                        label={Generic.t('echarts_frame_padding')}
                        value={state.frame.padding}
                        min={0}
                        max={32}
                        disabled={!state.frame.enabled}
                        onChange={v => set({ frame: { ...state.frame, padding: v } })}
                    />
                </FieldGrid>
            </Box>
        </SectionTabs>
    );
};

export default ColorsSection;
