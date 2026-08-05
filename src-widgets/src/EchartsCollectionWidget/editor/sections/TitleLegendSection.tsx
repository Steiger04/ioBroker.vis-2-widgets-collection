/**
 * Title & legend section (ADR-0010).
 *
 * @module EchartsCollectionWidget/editor/sections/TitleLegendSection
 * @remarks
 * Reunites the title config that v2 split across two tabs: the title text (with `{oid.val}`
 * binding support) plus its position and pixel offsets (ADR-0009), and the legend show/position.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { LabeledSelect, NumberField, TextField2 } from '../controls';
import { FieldGrid, SwitchList, SwitchRow } from '../layout';
import type { EditorState, SetEditor } from '../editorState';

interface TitleLegendSectionProps {
    state: EditorState;
    set: SetEditor;
}

const TitleLegendSection: FC<TitleLegendSectionProps> = ({ state, set }) => (
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
            {state.titlePos === 'topLeft' && (
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
        <SwitchList sx={{ mb: 1.5 }}>
            <SwitchRow
                label={Generic.t('echarts_legend_show')}
                checked={state.legendShow}
                onChange={v => set({ legendShow: v })}
            />
        </SwitchList>
        <FieldGrid>
            <LabeledSelect
                label={Generic.t('echarts_legend_position')}
                value={state.legendPos}
                onChange={v => set({ legendPos: v as EditorState['legendPos'] })}
                disabled={!state.legendShow}
                options={[
                    ['top', Generic.t('echarts_pos_top')],
                    ['bottom', Generic.t('echarts_pos_bottom')],
                    ['left', Generic.t('echarts_pos_left')],
                    ['right', Generic.t('echarts_pos_right')],
                ]}
            />
        </FieldGrid>
    </Box>
);

export default TitleLegendSection;
