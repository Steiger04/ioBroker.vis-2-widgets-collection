/**
 * Tooltip section (ADR-0010) — trigger, decimals, units suffix and the string template.
 *
 * @module EchartsCollectionWidget/editor/sections/TooltipSection
 * @remarks
 * The `axis` trigger is meaningful only for cartesian charts (ADR-0012 WS2): pie/gauge/radar get
 * `item`/`none`. A non-cartesian that still stores `axis` (e.g. switched from cartesian) displays
 * and renders as `item` (coerced here for the editor, in `toPresentationConfig` for the runtime).
 *
 * The template's token legend + live example teach OUR cartesian dialect (ADR-0052): echarts'
 * own string-template path renders an EMPTY `{b}` on a time axis (no name dimension — verified
 * against the echarts 6.1.0 source), so the cartesian builder resolves the tokens itself, `{b}`
 * being the time in the X-Karte's Time format. Non-cartesian keeps the echarts-native string
 * (real `{b}` category / `{d}` share there).
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { FieldGrid, InfoBox, LabeledSelect, NumberField, TextField2 } from '../../../components/controls';
import { familyOf } from '../../optionBuilder';
import { makeValueFormatter, resolveTooltipTokens } from '../../optionBuilders/tooltip';
import { SAMPLE_TS, resolveHostLang } from '../../timeFormat';
import { TOOLTIP_CATALOG } from '../tooltipTemplates';
import RawJsonSection from './RawJsonSection';
import type { EditorState, SetEditor } from '../editorState';

/**
 * The tooltip section's field ownership (ADR-0049 slice) — `chartType` for the family-aware
 * trigger coercion, the four flat tooltip fields, the section raw + its template ids, and the
 * X-Karte's Time format (read-only: it drives the `{b}` token + the live example, ADR-0052).
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
    | 'xAxis'
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
                    {/* Token legend + live example (ADR-0052) in the renderer-info callout idiom:
                        one InfoBox, code-chip legend (family-aware) + the template rendered
                        against a demo series line with this section's units/decimals and the
                        X-Karte's Time format. One line per series in the rendered chart. */}
                    <InfoBox>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                columnGap: 1.5,
                                rowGap: 0.25,
                            }}
                        >
                            <Box component="code">{'{a}'}</Box>
                            {Generic.t('echarts_tooltip_tpl_a')}
                            <Box component="code">{'{b}'}</Box>
                            {Generic.t(isCartesian ? 'echarts_tooltip_tpl_b_time' : 'echarts_tooltip_tpl_b_cat')}
                            <Box component="code">{'{c}'}</Box>
                            {Generic.t('echarts_tooltip_tpl_c')}
                            {!isCartesian && (
                                <>
                                    <Box component="code">{'{d}'}</Box>
                                    {Generic.t('echarts_tooltip_tpl_d')}
                                </>
                            )}
                        </Box>
                        {state.tooltipTemplate && isCartesian && (
                            <Box sx={{ mt: 0.5, whiteSpace: 'pre-line' }}>
                                {Generic.t('echarts_tooltip_tpl_example')}:{' '}
                                <Box
                                    component="code"
                                    sx={{ color: 'text.primary' }}
                                >
                                    {resolveTooltipTokens(
                                        state.tooltipTemplate,
                                        { seriesName: 'Temp', ts: SAMPLE_TS, value: 21.56 },
                                        {
                                            format: state.xAxis?.format,
                                            lang: resolveHostLang(),
                                            valueFmt:
                                                state.tooltipUnits || state.tooltipDecimals !== undefined
                                                    ? makeValueFormatter(state.tooltipUnits, state.tooltipDecimals)
                                                    : undefined,
                                        },
                                    )}
                                </Box>
                            </Box>
                        )}
                    </InfoBox>
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
