/**
 * Tooltip section (ADR-0010) — trigger, decimals, units suffix and the string template.
 *
 * @module EchartsCollectionWidget/editor/sections/TooltipSection
 * @remarks
 * The `axis` trigger is meaningful only for cartesian charts (ADR-0012 WS2): pie/gauge/radar get
 * `item`/`none`. A non-cartesian that still stores `axis` (e.g. switched from cartesian) displays
 * and renders as `item` (coerced here for the editor, in `toPresentationConfig` for the runtime).
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { LabeledSelect, NumberField, TextField2 } from '../controls';
import { familyOf } from '../../optionBuilder';
import type { EditorState, SetEditor } from '../editorState';

interface TooltipSectionProps {
    state: EditorState;
    set: SetEditor;
}

const TooltipSection: FC<TooltipSectionProps> = ({ state, set }) => {
    const isCartesian = familyOf(state.chartType) === 'cartesian';
    const effectiveTrigger: EditorState['tooltipTrigger'] =
        !isCartesian && state.tooltipTrigger === 'axis' ? 'item' : state.tooltipTrigger;
    const triggerOptions: ReadonlyArray<[string, string]> = isCartesian
        ? [
              ['axis', Generic.t('echarts_tooltip_axis')],
              ['item', Generic.t('echarts_tooltip_item')],
              ['none', Generic.t('echarts_tooltip_none')],
          ]
        : [
              ['item', Generic.t('echarts_tooltip_item')],
              ['none', Generic.t('echarts_tooltip_none')],
          ];

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            <LabeledSelect
                label={Generic.t('echarts_tooltip_trigger')}
                value={effectiveTrigger}
                onChange={v => set({ tooltipTrigger: v as EditorState['tooltipTrigger'] })}
                options={triggerOptions}
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
};

export default TooltipSection;
