/**
 * Tooltip section (ADR-0010) — trigger, decimals, units suffix and the string template.
 *
 * @module EchartsCollectionWidget/editor/sections/TooltipSection
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { LabeledSelect, NumberField, TextField2 } from '../controls';
import type { EditorState, SetEditor } from '../editorState';

interface TooltipSectionProps {
    state: EditorState;
    set: SetEditor;
}

const TooltipSection: FC<TooltipSectionProps> = ({ state, set }) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
        <LabeledSelect
            label={Generic.t('echarts_tooltip_trigger')}
            value={state.tooltipTrigger}
            onChange={v => set({ tooltipTrigger: v as EditorState['tooltipTrigger'] })}
            options={[
                ['axis', Generic.t('echarts_tooltip_axis')],
                ['item', Generic.t('echarts_tooltip_item')],
                ['none', Generic.t('echarts_tooltip_none')],
            ]}
        />
        <NumberField
            label={Generic.t('echarts_tooltip_decimals')}
            value={state.tooltipDecimals}
            onChange={v => set({ tooltipDecimals: v })}
        />
        <TextField2
            label={Generic.t('echarts_tooltip_units')}
            value={state.tooltipUnits}
            onChange={v => set({ tooltipUnits: v })}
            placeholder="°C / % / h"
        />
        <TextField2
            label={Generic.t('echarts_tooltip_template')}
            value={state.tooltipTemplate}
            onChange={v => set({ tooltipTemplate: v })}
            placeholder="{b}: {c}"
        />
    </Box>
);

export default TooltipSection;
