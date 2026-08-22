/**
 * Pie slice rows (history/live) — name + OID + colour + delete per slice (ADR-0019, WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/series/PieSliceRows
 * @remarks
 * Slices bind their own data (the OID picker was missing in v2 — slices could never bind data).
 * Each row is a quiet hairline box with a responsive FieldGrid; the per-slice raw override lives
 * inside the row, the whole-pie raw override (the `pie`-slot templates) above the list.
 */
import type { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import { DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../../Generic';
import { FieldGrid, FieldLabel, TextField2 } from '../../../../components/controls';
import ColorField from '../../colorFields';
import OidPicker from '../../OidPicker';
import type { OidPickerCtx } from '../../OidPicker';
import type { EditorSeries, EditorState, SetEditor } from '../../editorState';
import { AddSeriesViaOid, EmptyState, SeriesRawOverride } from './shared';
import { snippetPatch } from '../../snippetComposition';

/**
 * The pie slice rows' field ownership (ADR-0049 slice) — the slice list, the whole-pie raw
 * (riding the pie blob), and the mode for the history-only OID picker.
 */
export type PieSliceRowsSlice = Pick<EditorState, 'series' | 'pie' | 'mode'>;

interface PieSliceRowsProps {
    state: PieSliceRowsSlice;
    set: SetEditor<PieSliceRowsSlice>;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of slice i (the inherit fallback). */
    slot: (i: number) => string;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onAddWithOid: (oid: string) => void;
}

const PieSliceRows: FC<PieSliceRowsProps> = ({ state, set, pickerCtx, slot, onUpdate, onRemove, onAddWithOid }) => {
    const series = state.series;
    return (
        <Box>
            {/* Whole-pie raw (the pie component itself — radius/center/labelLine/…), above the slices. */}
            <SeriesRawOverride
                slot="pie"
                raw={state.pie.raw}
                onChange={v => set({ pie: { ...state.pie, raw: v || undefined } })}
                snippets={state.pie.snippets}
                onCommit={r => set({ pie: { ...state.pie, ...snippetPatch(r) } })}
            />
            {series.length === 0 && (
                <EmptyState text={Generic.t('echarts_series_empty')}>
                    <AddSeriesViaOid
                        pickerCtx={pickerCtx}
                        historyOnly={state.mode === 'history'}
                        onPick={onAddWithOid}
                        variant="cta"
                        label={Generic.t('echarts_series_add_first')}
                    />
                </EmptyState>
            )}
            {series.map((s, i) => (
                <Box
                    key={s.id ?? i}
                    sx={{ mb: 1, p: 1.5, border: 1, borderColor: 'divider', borderRadius: 1.5 }}
                >
                    <FieldGrid min={140}>
                        <TextField2
                            label={Generic.t('echarts_editor_series_name')}
                            value={s.name ?? ''}
                            onChange={v => onUpdate(i, { name: v })}
                        />
                        <Box>
                            <FieldLabel>{Generic.t('oid')}</FieldLabel>
                            <OidPicker
                                value={s.oid}
                                onChange={oid => onUpdate(i, { oid })}
                                ctx={pickerCtx}
                                historyOnly={state.mode === 'history'}
                            />
                        </Box>
                        <Box>
                            <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                    <ColorField
                                        value={s.color}
                                        fallback={slot(i)}
                                        onChange={v => onUpdate(i, { color: v ?? undefined })}
                                        ctx={pickerCtx}
                                    />
                                </Box>
                                <IconButton
                                    size="small"
                                    onClick={() => onRemove(i)}
                                    aria-label={Generic.t('echarts_editor_series_remove')}
                                    sx={{ flexShrink: 0 }}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </FieldGrid>
                    <SeriesRawOverride
                        slot="pie-slice"
                        raw={s.raw}
                        onChange={v => onUpdate(i, { raw: v || undefined })}
                        snippets={s.snippets}
                        onCommit={r => onUpdate(i, snippetPatch(r))}
                    />
                </Box>
            ))}
            {series.length > 0 && (
                <AddSeriesViaOid
                    pickerCtx={pickerCtx}
                    historyOnly={state.mode === 'history'}
                    onPick={onAddWithOid}
                    variant="button"
                    label={Generic.t('echarts_editor_series_add')}
                />
            )}
        </Box>
    );
};

export default PieSliceRows;
