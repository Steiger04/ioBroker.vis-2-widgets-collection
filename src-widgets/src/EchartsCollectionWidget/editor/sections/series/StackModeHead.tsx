/**
 * The Balken-Stapelmodus head of the Series section (ADR-0084 addendum 3) — the chart-wide bar
 * presentation mode, placed directly above the cards that inherit from it.
 *
 * @module EchartsCollectionWidget/editor/sections/series/StackModeHead
 * @remarks
 * Rendered for bar charts in EVERY cartesian data mode (Verlauf, serien-förmig JSON,
 * tabellarisch) — the builder applies the mode everywhere, so the select must be reachable
 * everywhere (the suspicion of the configurator review, confirmed by
 * `stackModeAcrossModes.test`). The Summen-Anker is offered only under Gestapelt (verdeckt at
 * percent: the sum is a constant 100 %); the percent mode carries its InfoBox. The time-axis
 * advisory with its Ein-Klick-Fix stays beside the Balken-Intervall in the Data source section
 * — the fix writes that interval, which only Verlauf has.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../../Generic';
import { InfoBox, LabeledSelect, SwitchList, SwitchRow } from '../../../../components/controls';
import type { EditorState, SetEditor } from '../../editorState';

/** The head's field ownership — the two blob fields of the Stapelmodus. */
export type StackModeHeadSlice = Pick<EditorState, 'stackMode' | 'stackSum'>;

const StackModeHead: FC<{ state: StackModeHeadSlice; set: SetEditor<StackModeHeadSlice> }> = ({ state, set }) => (
    <Box sx={{ mb: 1.5 }}>
        <LabeledSelect
            label={Generic.t('echarts_stack_mode')}
            value={state.stackMode}
            onChange={v => set({ stackMode: v as EditorState['stackMode'] })}
            options={[
                ['none', Generic.t('echarts_stack_mode_none')],
                ['stack', Generic.t('echarts_stack_mode_stack')],
                ['percent', Generic.t('echarts_stack_mode_percent')],
            ]}
        />
        {state.stackMode === 'stack' && (
            <SwitchList sx={{ mt: 1 }}>
                <SwitchRow
                    label={Generic.t('echarts_stack_sum')}
                    checked={state.stackSum}
                    onChange={v => set({ stackSum: v })}
                />
            </SwitchList>
        )}
        {state.stackMode === 'percent' && <InfoBox text={Generic.t('echarts_stack_percent_info')} />}
    </Box>
);

export default StackModeHead;
