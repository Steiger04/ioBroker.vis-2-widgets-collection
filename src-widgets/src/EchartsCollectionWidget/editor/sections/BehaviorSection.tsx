/**
 * Behaviour section — output / render policy (ADR-0010; the JSON escape hatch split out into its
 * own section in the v3.1 junk-drawer cleanup, ADR-0011 companion / D5).
 *
 * @module EchartsCollectionWidget/editor/sections/BehaviorSection
 * @remarks
 * Animation / animation duration / renderer only. `darkMode` moved to Colours (it is a theme/
 * colour concern, and the Colours summary already reported it). The chart-level Advanced JSON
 * escape hatch was retired entirely (ADR-0045) — the raw escape hatches live on the component
 * sections and the Series/Axis cards. The FIRST SectionTabs reference integration (ADR-0073):
 * Bewegung (the animation cluster) | Renderer (the output policy + its canvas/svg hint) —
 * tickets 06/07 roll the idiom over the other sections and cards.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import {
    FieldGrid,
    InfoBox,
    LabeledSelect,
    SectionTabs,
    SliderField,
    SwitchList,
    SwitchRow,
} from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../validation';
import type { EditorState, SetEditor } from '../editorState';

/** The behaviour section's field ownership (ADR-0049 slice) — animation policy + renderer. */
export type BehaviorSlice = Pick<EditorState, 'animation' | 'animationDuration' | 'animationEasing' | 'renderer'>;

interface BehaviorSectionProps {
    /** External tab jump (ADR-0073): the focus request tab selects once. */
    focusTab?: SectionTabsFocus;
    /** Validation findings — the per-tab warning dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: BehaviorSlice;
    set: SetEditor<BehaviorSlice>;
}

const BehaviorSection: FC<BehaviorSectionProps> = ({ focusTab, issues, state, set }) => {
    // Per-tab ⚠ dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);
    return (
        <SectionTabs
            focus={focusTab}
            tabs={[
                { key: 'motion', label: Generic.t('echarts_tab_motion'), issueCount: dots.motion },
                { key: 'renderer', label: Generic.t('echarts_renderer'), issueCount: dots.renderer },
            ]}
        >
            <Box>
                <SwitchList sx={{ mb: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_animation')}
                        checked={state.animation}
                        onChange={v => set({ animation: v })}
                    />
                </SwitchList>
                <FieldGrid>
                    <SliderField
                        label={Generic.t('echarts_animation_duration')}
                        value={state.animationDuration}
                        min={0}
                        max={2000}
                        step={50}
                        disabled={!state.animation}
                        onChange={v => set({ animationDuration: v })}
                    />
                    <LabeledSelect
                        label={Generic.t('echarts_animation_easing')}
                        value={state.animationEasing}
                        onChange={v => set({ animationEasing: v })}
                        disabled={!state.animation}
                        options={[
                            ['', Generic.t('echarts_easing_default')],
                            ['linear', Generic.t('echarts_easing_linear')],
                            ['cubicOut', Generic.t('echarts_easing_cubic_out')],
                            ['cubicInOut', Generic.t('echarts_easing_cubic_inout')],
                            ['elasticOut', Generic.t('echarts_easing_elastic_out')],
                        ]}
                    />
                </FieldGrid>
            </Box>
            <Box>
                {/* Renderer is an output/render policy, not an animation setting — its own tab +
                a canvas-vs-svg hint (the performance/export trade-off is not obvious without it). */}
                <LabeledSelect
                    label={Generic.t('echarts_renderer')}
                    value={state.renderer}
                    onChange={v => set({ renderer: v as BehaviorSlice['renderer'] })}
                    options={[
                        ['canvas', Generic.t('echarts_renderer_canvas')],
                        ['svg', Generic.t('echarts_renderer_svg')],
                    ]}
                />
                <InfoBox text={Generic.t('echarts_renderer_info')} />
            </Box>
        </SectionTabs>
    );
};

export default BehaviorSection;
