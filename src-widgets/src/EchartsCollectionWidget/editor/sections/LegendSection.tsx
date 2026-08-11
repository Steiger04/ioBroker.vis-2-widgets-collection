/**
 * Legend section (ADR-0021) — the legend half of the former "Title & Legend" section, expanded.
 *
 * @module EchartsCollectionWidget/editor/sections/LegendSection
 * @remarks
 * Show + 3×3 grid position (orient auto-derived from the edge), then three Sub-groups: text
 * (colour/size/weight), symbol (shape/size/gap/inactive colour), and frame (background/border/
 * radius/padding). The legend-as-panel styling. Interaction (`selectedMode`, `selector`, scroll
 * `type`) stays in the Advanced JSON; the symbol fill inherits the series colour. Styling lives in
 * the base64 `legendConfig` blob; `legendShow`/`legendPos` stay flat beside it.
 */
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

import Generic from '../../../Generic';
import {
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    OptionalNumberField,
    SubGroup,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import ColorField from '../colorFields';
import { PositionGrid } from '../controls';
import { useEditorTheme } from '../useEditorTheme';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

interface LegendSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** The 9 legend positions in grid row-order (a 3×3 grid). */
const LEGEND_POSITIONS: ReadonlyArray<[string, string]> = [
    ['topLeft', Generic.t('echarts_pos_top_left')],
    ['topCenter', Generic.t('echarts_pos_top_center')],
    ['topRight', Generic.t('echarts_pos_top_right')],
    ['middleLeft', Generic.t('echarts_pos_middle_left')],
    ['middleCenter', Generic.t('echarts_pos_middle_center')],
    ['middleRight', Generic.t('echarts_pos_middle_right')],
    ['bottomLeft', Generic.t('echarts_pos_bottom_left')],
    ['bottomCenter', Generic.t('echarts_pos_bottom_center')],
    ['bottomRight', Generic.t('echarts_pos_bottom_right')],
];

/** Legend symbol shapes (the `legend.icon` keywords) plus "inherit from series". */
const LEGEND_ICONS: ReadonlyArray<[string, string]> = [
    ['', Generic.t('echarts_legend_icon_inherit')],
    ['circle', Generic.t('echarts_legend_icon_circle')],
    ['rect', Generic.t('echarts_legend_icon_rect')],
    ['roundRect', Generic.t('echarts_legend_icon_roundRect')],
    ['triangle', Generic.t('echarts_legend_icon_triangle')],
    ['diamond', Generic.t('echarts_legend_icon_diamond')],
    ['pin', Generic.t('echarts_legend_icon_pin')],
    ['arrow', Generic.t('echarts_legend_icon_arrow')],
    ['none', Generic.t('echarts_legend_icon_none')],
];

const LegendSection: FC<LegendSectionProps> = ({ state, set, pickerCtx }) => {
    // Theme tokens resolve against the collection theme (ADR-0027) — the inherit previews.
    const { themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    const lg = state.legend;
    const patch = (p: Partial<typeof lg>): void => set({ legend: { ...lg, ...p } });
    // Background is "transparent"/unset when null — round-trip through the colour picker's null state.
    const bgValue = lg.bgColor && lg.bgColor !== 'transparent' ? lg.bgColor : null;
    // Offsets only nudge the legend along its EDGE; they're inert (and hidden) on the centre column /
    // middle row (a centred nudge needs container size → resize churn, out of scope).
    const offsetXRelevant = state.legendPos.endsWith('Left') || state.legendPos.endsWith('Right');
    const offsetYRelevant = state.legendPos.startsWith('top') || state.legendPos.startsWith('bottom');
    return (
        <Box>
            <SwitchList sx={{ mb: 1.5 }}>
                <SwitchRow
                    label={Generic.t('echarts_legend_show')}
                    checked={state.legendShow}
                    onChange={v => set({ legendShow: v })}
                />
            </SwitchList>
            <Box sx={{ mb: 1.5 }}>
                <PositionGrid
                    label={Generic.t('echarts_legend_position')}
                    value={state.legendPos}
                    onChange={v => set({ legendPos: v as EditorState['legendPos'] })}
                    options={LEGEND_POSITIONS}
                    disabled={!state.legendShow}
                />
                <Box sx={{ mt: 1.5 }}>
                    <LabeledSelect
                        label={Generic.t('echarts_legend_orient')}
                        value={lg.orient ?? ''}
                        onChange={v => patch({ orient: (v || undefined) as typeof lg.orient })}
                        disabled={!state.legendShow}
                        options={[
                            ['', Generic.t('echarts_legend_orient_auto')],
                            ['horizontal', Generic.t('echarts_legend_orient_horizontal')],
                            ['vertical', Generic.t('echarts_legend_orient_vertical')],
                        ]}
                    />
                </Box>
                {!lg.orient && (
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 0.5 }}
                    >
                        {Generic.t('echarts_legend_orient_hint')}
                    </Typography>
                )}
            </Box>

            {(offsetXRelevant || offsetYRelevant) && (
                <FieldGrid sx={{ mb: 1.5 }}>
                    {offsetXRelevant && (
                        <OptionalNumberField
                            label={Generic.t('echarts_legend_offset_x')}
                            value={lg.offsetX}
                            onChange={v => patch({ offsetX: v })}
                        />
                    )}
                    {offsetYRelevant && (
                        <OptionalNumberField
                            label={Generic.t('echarts_legend_offset_y')}
                            value={lg.offsetY}
                            onChange={v => patch({ offsetY: v })}
                        />
                    )}
                </FieldGrid>
            )}

            <SubGroup title={Generic.t('echarts_legend_group_text')}>
                <FieldGrid>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_legend_text_color')}</FieldLabel>
                        <ColorField
                            value={lg.color ?? null}
                            fallback={themeTokens.textSecondary}
                            onChange={v => patch({ color: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_font_size')}
                        value={lg.fontSize}
                        onChange={v => patch({ fontSize: v })}
                        step={1}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_weight')}
                        value={lg.fontWeight ?? 'normal'}
                        onChange={v => patch({ fontWeight: v as 'normal' | 'bold' })}
                        options={[
                            ['normal', Generic.t('echarts_weight_normal')],
                            ['bold', Generic.t('echarts_weight_bold')],
                        ]}
                    />
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_legend_group_symbol')}>
                <FieldGrid>
                    <LabeledSelect
                        label={Generic.t('echarts_legend_icon')}
                        value={lg.icon ?? ''}
                        onChange={v => patch({ icon: (v || undefined) as typeof lg.icon })}
                        options={LEGEND_ICONS}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_item_width')}
                        value={lg.itemWidth}
                        onChange={v => patch({ itemWidth: v })}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_item_height')}
                        value={lg.itemHeight}
                        onChange={v => patch({ itemHeight: v })}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_item_gap')}
                        value={lg.itemGap}
                        onChange={v => patch({ itemGap: v })}
                    />
                    <Box>
                        <FieldLabel>{Generic.t('echarts_legend_inactive_color')}</FieldLabel>
                        <ColorField
                            value={lg.inactiveColor ?? null}
                            fallback={themeTokens.divider}
                            onChange={v => patch({ inactiveColor: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                </FieldGrid>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_legend_group_frame')}>
                <FieldGrid>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_legend_background')}</FieldLabel>
                        <ColorField
                            value={bgValue}
                            onChange={v => patch({ bgColor: v ?? 'transparent' })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <Box>
                        <FieldLabel>{Generic.t('echarts_legend_border_color')}</FieldLabel>
                        <ColorField
                            value={lg.borderColor ?? null}
                            fallback={themeTokens.divider}
                            onChange={v => patch({ borderColor: v ?? undefined })}
                            ctx={pickerCtx}
                        />
                    </Box>
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_border_width')}
                        value={lg.borderWidth}
                        onChange={v => patch({ borderWidth: v })}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_border_radius')}
                        value={lg.borderRadius}
                        onChange={v => patch({ borderRadius: v })}
                    />
                    <OptionalNumberField
                        label={Generic.t('echarts_legend_padding')}
                        value={lg.padding}
                        onChange={v => patch({ padding: v })}
                    />
                </FieldGrid>
            </SubGroup>
        </Box>
    );
};

export default LegendSection;
