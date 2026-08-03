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
import { CheckField, LabeledSelect, NumberField, TextField2 } from '../controls';
import type { EditorState, SetEditor } from '../editorState';

interface TitleLegendSectionProps {
    state: EditorState;
    set: SetEditor;
}

const TitleLegendSection: FC<TitleLegendSectionProps> = ({ state, set }) => (
    <Box sx={{ display: 'grid', gap: 1.5 }}>
        <TextField2
            label={Generic.t('echarts_editor_title_text')}
            value={state.titleText}
            onChange={v => set({ titleText: v })}
            placeholder={'Living room: {0.0.temperature.val} °C'}
        />
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: state.titlePos === 'topLeft' ? '1fr 1fr 1fr' : '1fr 1fr',
                gap: 1.5,
            }}
        >
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
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            <CheckField
                label={Generic.t('echarts_legend_show')}
                value={state.legendShow}
                onChange={v => set({ legendShow: v })}
            />
            <LabeledSelect
                label={Generic.t('echarts_legend_position')}
                value={state.legendPos}
                onChange={v => set({ legendPos: v as EditorState['legendPos'] })}
                options={[
                    ['top', Generic.t('echarts_pos_top')],
                    ['bottom', Generic.t('echarts_pos_bottom')],
                    ['left', Generic.t('echarts_pos_left')],
                    ['right', Generic.t('echarts_pos_right')],
                ]}
            />
        </Box>
    </Box>
);

export default TitleLegendSection;
