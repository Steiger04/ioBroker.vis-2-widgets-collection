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
    SectionTabs,
    TextField2,
} from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../validation';
import ColorField from '../colorFields';
import { FONT_STYLE_OPTIONS, FONT_WEIGHT_OPTIONS, PositionGrid } from '../controls';
import { parseFontStyle, parseFontWeight, weightToSelectValue } from '../fontOptions';
import { useEditorTheme } from '../useEditorTheme';
import { TITLE_CATALOG } from '../titleTemplates';
import RawJsonSection from './RawJsonSection';
import type { OidPickerCtx } from '../OidPicker';
import type { EditorState, SetEditor } from '../editorState';

/**
 * The title section's field ownership (ADR-0049 slice) — the flat title scalars + the
 * section raw and its template ids; the 4 palette/darkMode fields are transitively read via
 * `useEditorTheme` (the title-colour inherit preview).
 */
export type TitleSlice = Pick<
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
>;

interface TitleSectionProps {
    /** External tab jump (ADR-0073): the focus request's tab selects once. */
    focusTab?: SectionTabsFocus;
    /** This section's validation findings — the per-tab ⚠ dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: TitleSlice;
    set: SetEditor<TitleSlice>;
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

const TitleSection: FC<TitleSectionProps> = ({ focusTab, issues, state, set, pickerCtx }) => {
    // Theme tokens resolve against the collection theme (ADR-0027) — the title-colour inherit preview.
    const { themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    // dx applies only to the left-edge anchors (ADR-0009 addendum) — hide it elsewhere (no dead control).
    const dxRelevant = state.titlePos === 'topLeft' || state.titlePos === 'bottomLeft';
    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    return (
        // Sektions-Tabs (ADR-0073): Text | Position | Stil | Vorlagen — view-only regrouping of
        // the same fields, nothing moved into or out of the section.
        <SectionTabs
            focus={focusTab}
            tabs={[
                { key: 'text', label: Generic.t('echarts_tab_text'), issueCount: dots.text },
                { key: 'position', label: Generic.t('echarts_tab_position'), issueCount: dots.position },
                { key: 'style', label: Generic.t('echarts_tab_style'), issueCount: dots.style },
                { key: 'templates', label: Generic.t('echarts_tab_templates'), issueCount: dots.templates },
            ]}
        >
            <TextField2
                label={Generic.t('echarts_editor_title_text')}
                value={state.titleText}
                onChange={v => set({ titleText: v })}
                placeholder={'Living room: {0.0.temperature.val} °C'}
            />
            <Box>
                <PositionGrid
                    label={Generic.t('echarts_title_position')}
                    value={state.titlePos}
                    onChange={v => set({ titlePos: v as TitleSlice['titlePos'] })}
                    options={TITLE_POSITIONS}
                />
                <FieldGrid sx={{ mt: 1.5 }}>
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
            <FieldGrid>
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
            </FieldGrid>
            {/* The Title section's own raw escape hatch (ADR-0044) — deep-merged UNDER
                buildTitleOption's output, the GUI wins every collision. */}
            <RawJsonSection
                raw={state.titleRaw}
                onChange={v => set({ titleRaw: v || '' })}
                catalog={TITLE_CATALOG}
                snippets={state.titleSnippets}
                placeholder={'{\n  "subtext": "Unit: kWh"\n}'}
                onCommit={r => set({ titleRaw: r.text || '', titleSnippets: r.ids })}
            />
        </SectionTabs>
    );
};

export default TitleSection;
