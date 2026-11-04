/**
 * Family options sections — the chart-family-specific knobs that take the axes slot for
 * non-cartesian families (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/FamilySections
 * @remarks
 * Pie: slice aggregation (exposes the previously state-only `pie.aggregate` knob), donut inner
 * radius, slice label mode + colour (ADR-0080 addendum), rose mode. (The gauge and radar
 * sections died with their families, ADR-0071.)
 */
import type { FC } from 'react';

import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { FieldGrid, FieldLabel, InfoBox, LabeledSelect, SectionTabs, SliderField } from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import ColorField from '../colorFields';
import { pieLabelColorOf } from '../../presentation';
import { issueCountsByTab, type ValidationIssue } from '../issueTabs';
import type { EditorState, SetEditor } from '../editorState';
import type { OidPickerCtx } from '../OidPicker';
import { SeriesRawOverride } from './series/shared';
import { snippetPatch } from '../snippetComposition';

/**
 * The pie options section's field ownership (ADR-0049 slice) — the pie blob (incl. the whole-pie
 * raw, homed here for EVERY data mode — ADR-0082 decision 3) plus the mode/kind READ (ADR-0075:
 * the aggregate cluster hides tabellarisch — every row IS the value, there is nothing to collapse).
 */
export type PieOptionsSlice = Pick<EditorState, 'pie' | 'mode' | 'jsonKind'>;

interface PieOptionsSectionProps {
    /** External tab jump (ADR-0073): the focus request tab selects once. */
    focusTab?: SectionTabsFocus;
    /** Validation findings — the per-tab warning dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: PieOptionsSlice;
    set: SetEditor<PieOptionsSlice>;
    /** Editor context (socket + theme) — drilled to the label colour's picker. */
    pickerCtx: OidPickerCtx;
    /**
     * The primary text token — the label colour's „Erbt" resolution (ADR-0080 addendum). Resolved
     * by the rail slot (the section is the token boundary, like MarkCard's textSecondary).
     */
    textPrimary: string;
}

export const PieOptionsSection: FC<PieOptionsSectionProps> = ({
    focusTab,
    issues,
    state,
    set,
    pickerCtx,
    textPrimary,
}) => {
    const setPie = (patch: Partial<PieOptionsSlice['pie']>): void => set({ pie: { ...state.pie, ...patch } });
    // Tabellarisch (ADR-0075 decision 5): the aggregates are meaningless — each row IS the
    // value, nothing collapses; the cluster hides (innerRadius/rose/label stay).
    const isJsonTable = state.mode === 'json' && state.jsonKind === 'table';

    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    return (
        // Sektions-Tabs (ADR-0073): Form (donut/rose) | Werte (aggregation + label) | Erweitert
        // (the whole-pie raw — mode-uniform since ADR-0082 decision 3; it left the Verlauf slice
        // rows so every pie data mode reaches it at one place).
        <SectionTabs
            focus={focusTab}
            tabs={[
                { key: 'shape', label: Generic.t('echarts_tab_shape'), issueCount: dots.shape },
                { key: 'values', label: Generic.t('echarts_tab_values'), issueCount: dots.values },
                { key: 'advanced', label: Generic.t('echarts_tab_advanced'), issueCount: dots.advanced },
            ]}
        >
            <FieldGrid>
                <SliderField
                    label={Generic.t('echarts_pie_inner_radius')}
                    value={state.pie.innerRadius ?? 0}
                    min={0}
                    max={0.9}
                    step={0.05}
                    onChange={v => setPie({ innerRadius: v })}
                />
                <LabeledSelect
                    label={Generic.t('echarts_pie_rose')}
                    value={state.pie.rose ?? 'none'}
                    onChange={v => setPie({ rose: v as PieOptionsSlice['pie']['rose'] })}
                    options={[
                        ['none', Generic.t('echarts_rose_none')],
                        ['radius', Generic.t('echarts_rose_radius')],
                        ['area', Generic.t('echarts_rose_area')],
                    ]}
                />
            </FieldGrid>
            <Box>
                {/* ADR-0082 ticket 03: the collapse composition said out loud — the fetch
                    aggregate (Data source → Datenabruf) shapes the points, THIS collapses them. */}
                {!isJsonTable && <InfoBox text={Generic.t('echarts_pie_aggregate_hint')} />}
                <FieldGrid>
                    {!isJsonTable && (
                        <LabeledSelect
                            label={Generic.t('echarts_pie_aggregate')}
                            value={state.pie.aggregate ?? 'latest'}
                            onChange={v => setPie({ aggregate: v as PieOptionsSlice['pie']['aggregate'] })}
                            options={[
                                ['latest', Generic.t('echarts_pie_agg_latest')],
                                ['sum', Generic.t('echarts_pie_agg_sum')],
                                ['avg', Generic.t('echarts_pie_agg_avg')],
                                ['min', Generic.t('echarts_pie_agg_min')],
                                ['max', Generic.t('echarts_pie_agg_max')],
                            ]}
                        />
                    )}
                    <LabeledSelect
                        label={Generic.t('echarts_pie_label')}
                        value={state.pie.label ?? 'namePercent'}
                        onChange={v => setPie({ label: v as PieOptionsSlice['pie']['label'] })}
                        options={[
                            ['none', Generic.t('echarts_label_none')],
                            ['name', Generic.t('echarts_label_name')],
                            ['percent', Generic.t('echarts_label_percent')],
                            ['namePercent', Generic.t('echarts_label_name_percent')],
                        ]}
                    />
                    {/* ADR-0080 addendum: the slice label colour, „Erbt" = the primary text token
                        (the ONE resolver the builder emits — the swatch never lies). Rests while
                        the label mode is none (nothing to colour, the aggregate-rest idiom). */}
                    {(state.pie.label ?? 'namePercent') !== 'none' && (
                        <Box>
                            <FieldLabel>{Generic.t('echarts_pie_label_color')}</FieldLabel>
                            <ColorField
                                title={Generic.t('echarts_pie_label_color')}
                                value={state.pie.labelColor}
                                fallback={pieLabelColorOf(state.pie, textPrimary)}
                                onChange={v => setPie({ labelColor: v ?? undefined })}
                                ctx={pickerCtx}
                            />
                        </Box>
                    )}
                </FieldGrid>
            </Box>
            <SeriesRawOverride
                slot="pie"
                raw={state.pie.raw}
                onChange={v => setPie({ raw: v || undefined })}
                snippets={state.pie.snippets}
                onCommit={r => setPie(snippetPatch(r))}
            />
        </SectionTabs>
    );
};
