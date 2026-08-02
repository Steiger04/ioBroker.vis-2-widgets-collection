/**
 * Colours section — palette, background, and the cartesian value→colour scale (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/ColorsSection
 * @remarks
 * Everything colour in one place: the resolved-palette swatch preview + source dropdown (theme /
 * presets / custom), the chart background, and the continuous visualMap (cartesian only — it maps
 * the value axis to a colour gradient). visualMap min/max carry field-level validation.
 */
import type { FC } from 'react';
import { Box, useTheme } from '@mui/material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { PALETTE_PRESETS, resolvePalette } from '../../presentation';
import { CheckField, FieldLabel, LabeledSelect, NumberField, SectionLabel } from '../controls';
import ColorField, { ColorListField } from '../colorFields';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

interface ColorsSectionProps {
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

const ColorsSection: FC<ColorsSectionProps> = ({ state, set, pickerCtx }) => {
    const theme = useTheme();
    const isCartesian = state.chartType !== 'pie' && state.chartType !== 'gauge' && state.chartType !== 'radar';
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

    const vmapInvalid = state.visualMap.enabled && state.visualMap.min >= state.visualMap.max;

    return (
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
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                <LabeledSelect
                    label={Generic.t('echarts_palette_source')}
                    value={paletteChoice(state)}
                    onChange={onPaletteChoice}
                    options={paletteOptions}
                />
            </Box>
            {state.paletteSource === 'custom' && (
                <Box sx={{ mb: 2, maxWidth: 260 }}>
                    <FieldLabel>{Generic.t('echarts_palette_custom_colors')}</FieldLabel>
                    <ColorListField
                        value={state.paletteCustom}
                        onChange={v => set({ paletteCustom: v })}
                        ctx={pickerCtx}
                    />
                </Box>
            )}

            <Box sx={{ maxWidth: 260, mb: 2 }}>
                <FieldLabel>{Generic.t('echarts_background')}</FieldLabel>
                <ColorField
                    value={state.bgColor === 'transparent' || !state.bgColor ? null : state.bgColor}
                    onChange={v => set({ bgColor: v ?? 'transparent' })}
                    ctx={pickerCtx}
                />
            </Box>

            {/* Dark-mode policy (moved from Behaviour — it is a theme/colour concern, and the
                Colours summary already reported it, ADR-0011 companion / D5). */}
            <Box sx={{ maxWidth: 260, mb: 2 }}>
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

            {isCartesian && (
                <>
                    <SectionLabel hint={Generic.t('echarts_visualmap_hint')}>
                        {Generic.t('echarts_visualmap')}
                    </SectionLabel>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 2 }}>
                        <CheckField
                            label={Generic.t('echarts_visualmap_enable')}
                            value={state.visualMap.enabled}
                            onChange={v => set({ visualMap: { ...state.visualMap, enabled: v } })}
                        />
                        <NumberField
                            label={Generic.t('echarts_visualmap_min')}
                            value={state.visualMap.min}
                            onChange={v => set({ visualMap: { ...state.visualMap, min: v } })}
                            error={vmapInvalid}
                            helperText={vmapInvalid ? Generic.t('echarts_val_vmap_range') : undefined}
                        />
                        <NumberField
                            label={Generic.t('echarts_visualmap_max')}
                            value={state.visualMap.max}
                            onChange={v => set({ visualMap: { ...state.visualMap, max: v } })}
                            error={vmapInvalid}
                        />
                    </Box>
                    {/* A value→colour scale is a gradient: one gradient picker supplies the whole
                        scale; presentation parses it into the ordered colour array echarts needs. */}
                    <Box sx={{ maxWidth: 260 }}>
                        <FieldLabel>{Generic.t('echarts_visualmap_colors')}</FieldLabel>
                        <ColorField
                            value={state.visualMap.colors}
                            onChange={v => set({ visualMap: { ...state.visualMap, colors: v ?? '' } })}
                            ctx={pickerCtx}
                            allowGradient
                        />
                    </Box>
                </>
            )}
        </Box>
    );
};

export default ColorsSection;
