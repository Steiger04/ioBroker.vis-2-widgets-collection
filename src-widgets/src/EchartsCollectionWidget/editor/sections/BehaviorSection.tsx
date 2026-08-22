/**
 * Behaviour section — output / render policy (ADR-0010; the JSON escape hatch split out into its
 * own section in the v3.1 junk-drawer cleanup, ADR-0011 companion / D5).
 *
 * @module EchartsCollectionWidget/editor/sections/BehaviorSection
 * @remarks
 * Animation / animation duration / renderer only. `darkMode` moved to Colours (it is a theme/
 * colour concern, and the Colours summary already reported it). The chart-level Advanced JSON
 * escape hatch was retired entirely (ADR-0045) — the raw escape hatches live on the component
 * sections and the Series/Axis cards.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { FieldGrid, InfoBox, LabeledSelect, SliderField, SwitchList, SwitchRow } from '../../../components/controls';
import type { EditorState, SetEditor } from '../editorState';

interface BehaviorSectionProps {
    state: EditorState;
    set: SetEditor;
}

const BehaviorSection: FC<BehaviorSectionProps> = ({ state, set }) => (
    <Box>
        <SwitchList sx={{ mb: 1.5 }}>
            <SwitchRow
                label={Generic.t('echarts_animation')}
                checked={state.animation}
                onChange={v => set({ animation: v })}
            />
        </SwitchList>
        <FieldGrid sx={{ mb: 1.5 }}>
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
        {/* Renderer is an output/render policy, not an animation setting — its own row + a
            canvas-vs-svg hint (the performance/export trade-off is not obvious without it). */}
        <FieldGrid>
            <Box sx={{ gridColumn: '1 / -1' }}>
                <LabeledSelect
                    label={Generic.t('echarts_renderer')}
                    value={state.renderer}
                    onChange={v => set({ renderer: v as EditorState['renderer'] })}
                    options={[
                        ['canvas', Generic.t('echarts_renderer_canvas')],
                        ['svg', Generic.t('echarts_renderer_svg')],
                    ]}
                />
                <InfoBox text={Generic.t('echarts_renderer_info')} />
            </Box>
        </FieldGrid>
    </Box>
);

export default BehaviorSection;
