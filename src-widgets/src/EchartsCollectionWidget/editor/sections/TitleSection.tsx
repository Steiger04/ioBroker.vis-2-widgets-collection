/**
 * Title section (ADR-0021) — the title half of the former "Title & Legend" section.
 *
 * @module EchartsCollectionWidget/editor/sections/TitleSection
 * @remarks
 * The chart title: its text (with vis-2 `{oid.val}` binding), colour + font size + weight, and its
 * 3×2 grid position with the ADR-0009 pixel offsets (dx applies to the left-edge anchors only).
 * The bottom row + colour/size/weight were added in ADR-0021.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import {
    FieldGrid,
    FieldLabel,
    LabeledSelect,
    NumberField,
    OptionalNumberField,
    TextField2,
} from '../../../components/controls';
import ColorField from '../colorFields';
import { FONT_STYLE_OPTIONS, FONT_WEIGHT_OPTIONS, PositionGrid } from '../controls';
import { parseFontStyle, parseFontWeight, weightToSelectValue } from '../fontOptions';
import { useEditorTheme } from '../useEditorTheme';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

interface TitleSectionProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
}

/** The 6 title positions in grid row-order (a 3×2 grid). */
const TITLE_POSITIONS: ReadonlyArray<[string, string]> = [
    ['topLeft', Generic.t('echarts_pos_top_left')],
    ['topCenter', Generic.t('echarts_pos_top_center')],
    ['topRight', Generic.t('echarts_pos_top_right')],
    ['bottomLeft', Generic.t('echarts_pos_bottom_left')],
    ['bottomCenter', Generic.t('echarts_pos_bottom_center')],
    ['bottomRight', Generic.t('echarts_pos_bottom_right')],
];

const TitleSection: FC<TitleSectionProps> = ({ state, set, pickerCtx }) => {
    // Theme tokens resolve against the collection theme (ADR-0027) — the title-colour inherit preview.
    const { themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    // dx applies only to the left-edge anchors (ADR-0009 addendum) — hide it elsewhere (no dead control).
    const dxRelevant = state.titlePos === 'topLeft' || state.titlePos === 'bottomLeft';
    return (
        <Box>
            <FieldGrid sx={{ mb: 1.5 }}>
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <TextField2
                        label={Generic.t('echarts_editor_title_text')}
                        value={state.titleText}
                        onChange={v => set({ titleText: v })}
                        placeholder={'Living room: {0.0.temperature.val} °C'}
                    />
                </Box>
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <PositionGrid
                        label={Generic.t('echarts_title_position')}
                        value={state.titlePos}
                        onChange={v => set({ titlePos: v as EditorState['titlePos'] })}
                        options={TITLE_POSITIONS}
                    />
                </Box>
                <Box>
                    <FieldLabel>{Generic.t('echarts_title_color')}</FieldLabel>
                    <ColorField
                        value={state.titleColor}
                        fallback={themeTokens.textPrimary}
                        onChange={v => set({ titleColor: v })}
                        ctx={pickerCtx}
                    />
                </Box>
                <OptionalNumberField
                    label={Generic.t('echarts_title_font_size')}
                    value={state.titleFontSize}
                    onChange={v => set({ titleFontSize: v })}
                    step={1}
                />
                <LabeledSelect
                    label={Generic.t('echarts_weight')}
                    value={weightToSelectValue(state.titleWeight)}
                    onChange={v => set({ titleWeight: parseFontWeight(v) })}
                    options={FONT_WEIGHT_OPTIONS}
                />
                <LabeledSelect
                    label={Generic.t('echarts_font_style')}
                    value={state.titleFontStyle}
                    onChange={v => set({ titleFontStyle: parseFontStyle(v) })}
                    options={FONT_STYLE_OPTIONS}
                />
                {dxRelevant && (
                    <NumberField
                        label={Generic.t('echarts_title_dx')}
                        value={state.titleDx}
                        onChange={v => set({ titleDx: v })}
                    />
                )}
                <NumberField
                    label={Generic.t('echarts_title_dy')}
                    value={state.titleDy}
                    onChange={v => set({ titleDy: v })}
                />
            </FieldGrid>
        </Box>
    );
};

export default TitleSection;
