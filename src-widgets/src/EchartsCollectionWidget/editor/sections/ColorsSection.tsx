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
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { PALETTE_PRESETS } from '../../presentation';
import {
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    NumberField,
    SubGroup,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import ColorField, { ColorListField } from '../colorFields';
import { useEditorTheme } from '../useEditorTheme';
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
    // Palette + tokens resolve against the COLLECTION theme (ADR-0027) — what the canvas renders
    // under, not the vis-2 host theme.
    const { palette, themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    const isCartesian = state.chartType !== 'pie' && state.chartType !== 'gauge' && state.chartType !== 'radar';
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
                            value={state.paletteCustom}
                            onChange={v => set({ paletteCustom: v })}
                            ctx={pickerCtx}
                        />
                    </Box>
                )}
                <Box>
                    <FieldLabel>{Generic.t('echarts_background')}</FieldLabel>
                    <ColorField
                        value={state.bgColor === 'transparent' || !state.bgColor ? null : state.bgColor}
                        onChange={v => set({ bgColor: v ?? 'transparent' })}
                        ctx={pickerCtx}
                    />
                </Box>
                {/* Dark-mode policy (moved from Behaviour — it is a theme/colour concern, and the
                    Colours summary already reported it, ADR-0011 companion / D5). */}
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
            </FieldGrid>

            {isCartesian && (
                <SubGroup
                    title={Generic.t('echarts_visualmap')}
                    hint={Generic.t('echarts_visualmap_hint')}
                    sx={{ mt: 2 }}
                >
                    <SwitchList sx={{ mb: 1.5 }}>
                        <SwitchRow
                            label={Generic.t('echarts_visualmap_enable')}
                            checked={state.visualMap.enabled}
                            onChange={v => set({ visualMap: { ...state.visualMap, enabled: v } })}
                        />
                    </SwitchList>
                    <FieldGrid>
                        <NumberField
                            label={Generic.t('echarts_visualmap_min')}
                            value={state.visualMap.min}
                            onChange={v => set({ visualMap: { ...state.visualMap, min: v } })}
                            error={vmapInvalid}
                            helperText={vmapInvalid ? Generic.t('echarts_val_vmap_range') : undefined}
                            disabled={!state.visualMap.enabled}
                        />
                        <NumberField
                            label={Generic.t('echarts_visualmap_max')}
                            value={state.visualMap.max}
                            onChange={v => set({ visualMap: { ...state.visualMap, max: v } })}
                            error={vmapInvalid}
                            disabled={!state.visualMap.enabled}
                        />
                        {/* A value→colour scale is a gradient: one gradient picker supplies the whole
                            scale; presentation parses it into the ordered colour array echarts needs.
                            The inherit preview is the theme-derived default ramp (ADR-0027). */}
                        <Box>
                            <FieldLabel>{Generic.t('echarts_visualmap_colors')}</FieldLabel>
                            <ColorField
                                value={state.visualMap.colors}
                                fallback={`linear-gradient(90deg, ${themeTokens.primary}, ${themeTokens.success}, ${themeTokens.warning}, ${themeTokens.error})`}
                                onChange={v => set({ visualMap: { ...state.visualMap, colors: v ?? '' } })}
                                ctx={pickerCtx}
                                allowGradient
                            />
                        </Box>
                    </FieldGrid>
                </SubGroup>
            )}
        </Box>
    );
};

export default ColorsSection;
