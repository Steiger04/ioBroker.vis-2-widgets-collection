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
import { FieldGrid, LabeledSelect, NumberField, TextField2 } from '../../../components/controls';
import { familyOf } from '../../optionBuilder';
import { TOOLTIP_CATALOG } from '../tooltipTemplates';
import RawJsonSection from './RawJsonSection';
import type { EditorState, SetEditor } from '../editorState';

/**
 * The tooltip section's field ownership (ADR-0049 slice) — `chartType` for the family-aware
 * trigger coercion, the four flat tooltip fields, and the section raw + its template ids.
 */
export type TooltipSlice = Pick<
    EditorState,
    | 'chartType'
    | 'tooltipTrigger'
    | 'tooltipDecimals'
    | 'tooltipUnits'
    | 'tooltipTemplate'
    | 'tooltipRaw'
    | 'tooltipSnippets'
>;

interface TooltipSectionProps {
    state: TooltipSlice;
    set: SetEditor<TooltipSlice>;
}

const TooltipSection: FC<TooltipSectionProps> = ({ state, set }) => {
    const isCartesian = familyOf(state.chartType) === 'cartesian';
    const effectiveTrigger: TooltipSlice['tooltipTrigger'] =
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
        <Box>
            <FieldGrid>
                <LabeledSelect
                    label={Generic.t('echarts_tooltip_trigger')}
                    value={effectiveTrigger}
                    onChange={v => set({ tooltipTrigger: v as TooltipSlice['tooltipTrigger'] })}
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
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <TextField2
                        label={Generic.t('echarts_tooltip_template')}
                        value={state.tooltipTemplate}
                        onChange={v => set({ tooltipTemplate: v })}
                        placeholder="{b}: {c}"
                    />
                </Box>
            </FieldGrid>
            {/* The Tooltip section's own raw escape hatch (ADR-0044) — deep-merged UNDER
                buildTooltip's output, the GUI wins every collision. */}
            <RawJsonSection
                raw={state.tooltipRaw}
                onChange={v => set({ tooltipRaw: v || '' })}
                catalog={TOOLTIP_CATALOG}
                snippets={state.tooltipSnippets}
                placeholder={'{\n  "axisPointer": { "type": "cross" }\n}'}
                onCommit={r => set({ tooltipRaw: r.text || '', tooltipSnippets: r.ids })}
            />
        </Box>
    );
};

export default TooltipSection;
