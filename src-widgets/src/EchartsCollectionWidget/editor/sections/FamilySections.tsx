/**
 * Family options sections — the chart-family-specific knobs that take the axes slot for
 * non-cartesian families (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/FamilySections
 * @remarks
 * Pie: slice aggregation (exposes the previously state-only `pie.aggregate` knob), donut inner
 * radius, slice label mode, rose mode. (The gauge and radar sections died with their families,
 * ADR-0071.)
 */
import type { FC } from 'react';

import Generic from '../../../Generic';
import { FieldGrid, LabeledSelect, SectionTabs, SliderField } from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../validation';
import type { EditorState, SetEditor } from '../editorState';

/** The pie options section's field ownership (ADR-0049 slice) — the pie blob. */
export type PieOptionsSlice = Pick<EditorState, 'pie'>;

interface PieOptionsSectionProps {
    /** External tab jump (ADR-0073): the focus request tab selects once. */
    focusTab?: SectionTabsFocus;
    /** Validation findings — the per-tab warning dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: PieOptionsSlice;
    set: SetEditor<PieOptionsSlice>;
}

export const PieOptionsSection: FC<PieOptionsSectionProps> = ({ focusTab, issues, state, set }) => {
    const setPie = (patch: Partial<PieOptionsSlice['pie']>): void => set({ pie: { ...state.pie, ...patch } });

    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    return (
        // Sektions-Tabs (ADR-0073): Form (donut/rose) | Werte (aggregation + label) — the
        // strict-uniformity rule reaches the family sections too (deliberately thin tabs).
        <SectionTabs
            focus={focusTab}
            tabs={[
                { key: 'shape', label: Generic.t('echarts_tab_shape'), issueCount: dots.shape },
                { key: 'values', label: Generic.t('echarts_tab_values'), issueCount: dots.values },
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
            <FieldGrid>
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
            </FieldGrid>
        </SectionTabs>
    );
};
