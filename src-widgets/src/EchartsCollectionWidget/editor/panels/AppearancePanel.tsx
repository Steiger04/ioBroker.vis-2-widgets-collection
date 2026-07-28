/**
 * Appearance tab — type-independent chart-wide presentation (ADR-0007, Q5).
 *
 * @module EchartsCollectionWidget/editor/panels/AppearancePanel
 * @remarks
 * The chart-type-independent layer: title position, legend, tooltip (template + OID-bindings +
 * units/decimals), animation, background, the global palette (theme/preset/custom), and the
 * dark-mode policy. Pie-global knobs (donut radius / rose / label) live here too.
 *
 * Every colour input (background, palette stops) goes through the shared
 * `CollectionGradientColorPicker`. The palette section shows a live swatch preview of the resolved
 * palette + a single source dropdown (Theme / presets / Custom) — clearer than the old
 * source-then-preset pair, and the preview makes the "palette has an effect" fact visible.
 */
import type { FC } from 'react';
import { Box, useTheme } from '@mui/material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { PALETTE_PRESETS, resolvePalette } from '../../presentation';
import { CheckField, FieldLabel, LabeledSelect, NumberField, SectionLabel, TextField2 } from '../controls';
import ColorField, { ColorListField } from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

interface PanelProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** Dropdown value encoding the whole palette choice: theme | preset:<name> | custom. */
const paletteChoice = (state: EditorState): string =>
    state.paletteSource === 'custom'
        ? 'custom'
        : state.paletteSource === 'preset'
          ? `preset:${state.palettePreset}`
          : 'theme';

const AppearancePanel: FC<PanelProps> = ({ state, set, pickerCtx }) => {
    const theme = useTheme();
    const isPie = state.chartType === 'pie';
    // Palette source options with localized labels (presets keep their proper-name label).
    const paletteOptions: ReadonlyArray<[string, string]> = [
        ['theme', Generic.t('echarts_palette_theme')],
        ...Object.keys(PALETTE_PRESETS).map(k => [`preset:${k}`, k] as [string, string]),
        ['custom', Generic.t('echarts_palette_custom')],
    ];
    const palette = resolvePalette(
        state.paletteSource,
        state.palettePreset,
        state.paletteCustom,
        echartsPalette(theme),
    );

    const onPaletteChoice = (v: string): void => {
        if (v === 'theme') {
            set({ paletteSource: 'theme' });
        } else if (v === 'custom') {
            set({ paletteSource: 'custom' });
        } else if (v.startsWith('preset:')) {
            set({ paletteSource: 'preset', palettePreset: v.slice(7) });
        }
    };

    return (
        <Box>
            {/* Title */}
            <SectionLabel>{Generic.t('echarts_appearance_title')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <LabeledSelect
                    label={Generic.t('echarts_title_position')}
                    value={state.titlePos}
                    onChange={v => set({ titlePos: v as EditorState['titlePos'] })}
                    options={[
                        ['topLeft', Generic.t('echarts_pos_top_left')],
                        ['topCenter', Generic.t('echarts_pos_top_center')],
                        ['topRight', Generic.t('echarts_pos_top_right')],
                    ]}
                />
            </Box>

            {/* Legend */}
            <SectionLabel>{Generic.t('echarts_appearance_legend')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <CheckField
                    label={Generic.t('echarts_legend_show')}
                    value={state.legendShow}
                    onChange={v => set({ legendShow: v })}
                />
                <LabeledSelect
                    label={Generic.t('echarts_legend_position')}
                    value={state.legendPos}
                    onChange={v => set({ legendPos: v as EditorState['legendPos'] })}
                    options={[
                        ['top', Generic.t('echarts_pos_top')],
                        ['bottom', Generic.t('echarts_pos_bottom')],
                        ['left', Generic.t('echarts_pos_left')],
                        ['right', Generic.t('echarts_pos_right')],
                    ]}
                />
            </Box>

            {/* Tooltip */}
            <SectionLabel>{Generic.t('echarts_appearance_tooltip')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <LabeledSelect
                    label={Generic.t('echarts_tooltip_trigger')}
                    value={state.tooltipTrigger}
                    onChange={v => set({ tooltipTrigger: v as EditorState['tooltipTrigger'] })}
                    options={[
                        ['axis', Generic.t('echarts_tooltip_axis')],
                        ['item', Generic.t('echarts_tooltip_item')],
                        ['none', Generic.t('echarts_tooltip_none')],
                    ]}
                />
                <NumberField
                    label={Generic.t('echarts_tooltip_decimals')}
                    value={state.tooltipDecimals}
                    onChange={v => set({ tooltipDecimals: v })}
                />
                <TextField2
                    label={Generic.t('echarts_tooltip_units')}
                    value={state.tooltipUnits}
                    onChange={v => set({ tooltipUnits: v })}
                    placeholder="°C / % / h"
                />
                <TextField2
                    label={Generic.t('echarts_tooltip_template')}
                    value={state.tooltipTemplate}
                    onChange={v => set({ tooltipTemplate: v })}
                    placeholder="{b}: {c}"
                />
            </Box>

            {/* Pie-global */}
            {isPie && (
                <>
                    <SectionLabel>{Generic.t('echarts_appearance_pie')}</SectionLabel>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                        <NumberField
                            label={Generic.t('echarts_pie_inner_radius')}
                            value={state.pie.innerRadius ?? 0}
                            step={0.1}
                            onChange={v => set({ pie: { ...state.pie, innerRadius: v } })}
                        />
                        <LabeledSelect
                            label={Generic.t('echarts_pie_label')}
                            value={state.pie.label ?? 'namePercent'}
                            onChange={v => set({ pie: { ...state.pie, label: v as EditorState['pie']['label'] } })}
                            options={[
                                ['none', Generic.t('echarts_label_none')],
                                ['name', Generic.t('echarts_label_name')],
                                ['percent', Generic.t('echarts_label_percent')],
                                ['namePercent', Generic.t('echarts_label_name_percent')],
                            ]}
                        />
                        <LabeledSelect
                            label={Generic.t('echarts_pie_rose')}
                            value={state.pie.rose ?? 'none'}
                            onChange={v => set({ pie: { ...state.pie, rose: v as EditorState['pie']['rose'] } })}
                            options={[
                                ['none', Generic.t('echarts_rose_none')],
                                ['radius', Generic.t('echarts_rose_radius')],
                                ['area', Generic.t('echarts_rose_area')],
                            ]}
                        />
                    </Box>
                </>
            )}

            {/* Animation + background */}
            <SectionLabel>{Generic.t('echarts_appearance_general')}</SectionLabel>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <CheckField
                    label={Generic.t('echarts_animation')}
                    value={state.animation}
                    onChange={v => set({ animation: v })}
                />
                <NumberField
                    label={Generic.t('echarts_animation_duration')}
                    value={state.animationDuration}
                    onChange={v => set({ animationDuration: v })}
                />
                <LabeledSelect
                    label={Generic.t('echarts_renderer')}
                    value={state.renderer}
                    onChange={v => set({ renderer: v as EditorState['renderer'] })}
                    options={[
                        ['canvas', Generic.t('echarts_renderer_canvas')],
                        ['svg', Generic.t('echarts_renderer_svg')],
                    ]}
                />
            </Box>
            <Box sx={{ maxWidth: 260, mb: 2 }}>
                <FieldLabel>{Generic.t('echarts_background')}</FieldLabel>
                <ColorField
                    value={state.bgColor === 'transparent' || !state.bgColor ? null : state.bgColor}
                    onChange={v => set({ bgColor: v ?? 'transparent' })}
                    ctx={pickerCtx}
                />
            </Box>

            {/* Palette */}
            <SectionLabel hint={Generic.t('echarts_palette_hint')}>
                {Generic.t('echarts_appearance_palette')}
            </SectionLabel>
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
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                <LabeledSelect
                    label={Generic.t('echarts_palette_source')}
                    value={paletteChoice(state)}
                    onChange={onPaletteChoice}
                    options={paletteOptions}
                />
                <LabeledSelect
                    label={Generic.t('echarts_dark_mode')}
                    value={state.darkMode}
                    onChange={v => set({ darkMode: v as EditorState['darkMode'] })}
                    options={[
                        ['auto', Generic.t('echarts_dark_auto')],
                        ['light', Generic.t('echarts_dark_light')],
                        ['dark', Generic.t('echarts_dark_dark')],
                    ]}
                />
            </Box>
            {state.paletteSource === 'custom' && (
                <Box sx={{ mt: 1.5, maxWidth: 260 }}>
                    <FieldLabel>{Generic.t('echarts_palette_custom_colors')}</FieldLabel>
                    <ColorListField
                        value={state.paletteCustom}
                        onChange={v => set({ paletteCustom: v })}
                        ctx={pickerCtx}
                    />
                </Box>
            )}
        </Box>
    );
};

export default AppearancePanel;
