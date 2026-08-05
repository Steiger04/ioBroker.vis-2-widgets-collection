/**
 * Radar series binding — the indicator-OID list + polygon label/colour (ADR-0019, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/RadarIndicators
 * @remarks
 * Each indicator is a quiet hairline box (name / max / OID + delete in a responsive FieldGrid).
 * The polygon's own name/colour sits below the list; shape/split/area live in the Radar options
 * section. An empty list renders an honest empty state with a first-indicator CTA.
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { Add as AddIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../../Generic';
import { FieldLabel, NumberField, TextField2 } from '../../controls';
import { FieldGrid } from '../../layout';
import ColorField from '../../colorFields';
import OidPicker from '../../OidPicker';
import type { OidPickerCtx } from '../../OidPicker';
import type { EditorState, SetEditor } from '../../editorState';
import { nextStableId } from '../../identity';
import { EmptyState, SeriesRawOverride } from './shared';

interface RadarIndicatorsProps {
    state: EditorState;
    set: SetEditor;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of the (single) radar polygon (the inherit fallback). */
    slot: (i: number) => string;
}

const RadarIndicators: FC<RadarIndicatorsProps> = ({ state, set, pickerCtx, slot }) => {
    const series = state.series;
    const s0 = series[0] ?? { name: '' };

    const setIndicator = (i: number, patch: Partial<EditorState['radar']['indicators'][number]>): void => {
        const indicators = state.radar.indicators.map((ind, idx) => (idx === i ? { ...ind, ...patch } : ind));
        set({ radar: { ...state.radar, indicators } });
    };
    const addIndicator = (): void => {
        const indicators = [
            ...state.radar.indicators,
            { id: nextStableId(), name: `Ind ${state.radar.indicators.length + 1}`, max: 100, oid: '' },
        ];
        set({ radar: { ...state.radar, indicators } });
    };
    const removeIndicator = (i: number): void => {
        set({ radar: { ...state.radar, indicators: state.radar.indicators.filter((_, idx) => idx !== i) } });
    };

    return (
        <Box>
            {state.radar.indicators.length === 0 && (
                <EmptyState text={Generic.t('echarts_radar_empty')}>
                    <Button
                        size="small"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={addIndicator}
                        sx={{ textTransform: 'none' }}
                    >
                        {Generic.t('echarts_radar_add_first')}
                    </Button>
                </EmptyState>
            )}
            {state.radar.indicators.map((ind, i) => (
                <Box
                    key={ind.id ?? i}
                    sx={{ mb: 1, p: 1.5, border: 1, borderColor: 'divider', borderRadius: 1.5 }}
                >
                    <FieldGrid min={140}>
                        <TextField2
                            label={Generic.t('echarts_radar_indicator_name')}
                            value={ind.name}
                            onChange={v => setIndicator(i, { name: v })}
                        />
                        <NumberField
                            label={Generic.t('echarts_radar_indicator_max')}
                            value={ind.max ?? 100}
                            onChange={v => setIndicator(i, { max: v })}
                        />
                        <Box sx={{ gridColumn: '1 / -1' }}>
                            <FieldLabel>{Generic.t('oid')}</FieldLabel>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <OidPicker
                                        value={ind.oid}
                                        onChange={oid => setIndicator(i, { oid })}
                                        ctx={pickerCtx}
                                    />
                                </Box>
                                <IconButton
                                    size="small"
                                    onClick={() => removeIndicator(i)}
                                    aria-label={Generic.t('echarts_editor_series_remove')}
                                    sx={{ flexShrink: 0 }}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </FieldGrid>
                </Box>
            ))}
            {state.radar.indicators.length > 0 && (
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addIndicator}
                    sx={{ alignSelf: 'flex-start', mb: 1.5 }}
                >
                    {Generic.t('echarts_radar_add_indicator')}
                </Button>
            )}
            {/* The polygon itself: one series carries the label + colour for the whole radar. */}
            <FieldGrid>
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
                slot="radar"
                raw={s0.raw}
                onChange={v => set({ series: [{ ...s0, raw: v || undefined }] })}
            />
        </Box>
    );
};

export default RadarIndicators;
