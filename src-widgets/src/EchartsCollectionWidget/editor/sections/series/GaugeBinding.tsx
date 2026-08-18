/**
 * Gauge series binding — the scalar OID + label + colour (ADR-0019, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/GaugeBinding
 * @remarks
 * The dial presentation (min/max/target/progress arc/unit) lives in the Gauge options section;
 * this is the data binding only. Picking an OID auto-fills the unit from the OID's `common.unit`
 * when none is set.
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../../Generic';
import { FieldGrid, FieldLabel, TextField2 } from '../../../../components/controls';
import ColorField from '../../colorFields';
import OidPicker from '../../OidPicker';
import type { OidPickerCtx } from '../../OidPicker';
import type { EditorSeries, EditorState, SetEditor } from '../../editorState';
import { SeriesRawOverride } from './shared';

interface GaugeBindingProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of the (single) gauge series (the inherit fallback). */
    slot: (i: number) => string;
}

const GaugeBinding: FC<GaugeBindingProps> = ({ state, set, pickerCtx, slot }) => {
    const series = state.series;
    const s0 = series[0] ?? { oid: '', name: '' };
    return (
        <Box>
            <FieldGrid>
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <FieldLabel>{Generic.t('echarts_data_value_oid')}</FieldLabel>
                    <OidPicker
                        value={s0.oid ?? ''}
                        onChange={async oid => {
                            set({ series: [{ ...(series[0] ?? { oid: '' }), oid }] as EditorSeries[] });
                            // Auto-fill the unit from the OID's common.unit when none is set.
                            if (oid && !state.gauge.unit) {
                                try {
                                    const objs = (await pickerCtx.socket.getForeignObjects(oid)) as Record<
                                        string,
                                        { common?: { unit?: string } }
                                    >;
                                    const u = objs[oid]?.common?.unit;
                                    if (u) {
                                        set({ gauge: { ...state.gauge, unit: u } });
                                    }
                                } catch {
                                    /* ignore — unit stays manual */
                                }
                            }
                        }}
                        ctx={pickerCtx}
                    />
                </Box>
                <TextField2
                    label={Generic.t('echarts_editor_series_name')}
                    value={s0.name ?? ''}
                    onChange={v => set({ series: [{ ...s0, name: v }] })}
                />
                <Box>
                    <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                    <ColorField
                        value={s0.color}
                        fallback={slot(0)}
                        onChange={v => set({ series: [{ ...s0, color: v ?? undefined }] })}
                        ctx={pickerCtx}
                    />
                </Box>
            </FieldGrid>
            <SeriesRawOverride
                slot="gauge"
                raw={s0.raw}
                onChange={v => set({ series: [{ ...s0, raw: v || undefined }] })}
                analysis={{
                    slot: 'gauge',
                    gaugeUnitActive: !!state.gauge.unit,
                    // Builder guard: the two-zone track colour needs a FINITE target AND
                    // min < max (gauge.ts) — mirror it or the chip false-reds the colour.
                    gaugeTargetActive:
                        state.gauge.target !== undefined &&
                        Number.isFinite(state.gauge.target) &&
                        (state.gauge.min ?? 0) < (state.gauge.max ?? 100),
                    animationEasingActive: !!state.animationEasing,
                }}
            />
        </Box>
    );
};

export default GaugeBinding;
