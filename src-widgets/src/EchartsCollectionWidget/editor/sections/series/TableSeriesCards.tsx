/**
 * Tabellarische series cards (cartesian + pie) — one card per AUTHORED yPath binding
 * (ADR-0075 tickets 04/06).
 *
 * @module EchartsCollectionWidget/editor/sections/series/TableSeriesCards
 * @remarks
 * The structural twin of the Verlauf card list (state.series positional — the history handlers
 * Add/Delete/Move/Rebind incl. axis death run unchanged through the dispatcher), with the OID
 * row swapped for the yPath ColumnAutocomplete ({@link CartesianBasisFields}' `sourceRow`
 * slot — the sub-components themselves untouched). What the serien-förmig view owns that this
 * one deliberately does NOT: duplicate, hide (jsonHidden deny-list) — the table family owns
 * its structure, every delete is REAL (decision 2). BOTH families render the full cards
 * (ticket 06); pie drops only the Basis-Tab's axis dropdown (`showAxis={false}` — pie knows
 * no axes, its series are the concentric rings).
 */
import type { FC } from 'react';
import { Alert, Box, IconButton, Typography } from '@mui/material';
import { ArrowDownward as DownIcon, ArrowUpward as UpIcon, DeleteOutline as DeleteIcon } from '@mui/icons-material';

import Generic from '../../../../Generic';
import type { EchartsCartesianType } from '../../../../types/field-definitions/echarts-fields';
import type { JsonTableColumn } from '../../../../hooks/useJsonTableAnalysis';
import { EditorCard, InfoBox, SectionTabs } from '../../../../components/controls';
import ColumnAutocomplete from '../../ColumnAutocomplete';
import type { OidPickerCtx } from '../../OidPicker';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorSeries, EditorState } from '../../editorState';
import {
    CartesianBasisFields,
    CartesianSeriesKnobs,
    SeriesTransformFields,
    SeriesValueFormatFields,
} from './CartesianSeriesCard';
import { axisOptionLabel, positionalBinderName } from '../../axisLayout';
import { SeriesRawOverride, Swatch, EmptyState } from './shared';
import { snippetPatch } from '../../snippetComposition';

/**
 * The table series cards' field ownership (ADR-0049 slice) — read-only: every write goes
 * through the dispatcher callbacks (positional update / remove / move / rebind / add).
 */
export type TableSeriesCardsSlice = Pick<EditorState, 'jsonOid' | 'chartType' | 'series' | 'yAxes' | 'ignoreNull'>;

interface TableSeriesCardsProps {
    state: TableSeriesCardsSlice;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /** The chosen rows array's columns (the modal's useJsonTableSchema sight). */
    columns: readonly JsonTableColumn[];
    /** The schema's rows/JSON error (shown instead of a silent blank). */
    schemaError?: string;
    /** Show the per-series Y-axis binding row (cartesian only — pie knows no axes, ADR-0075). */
    showAxis?: boolean;
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onMove: (i: number, dir: -1 | 1) => void;
    /** Add a series bound to a yPath column (the addWithOid twin — auto-axis, no card before). */
    onAddWithColumn: (yPath: string) => void;
    onRebindAxis: (i: number, yAxisIndex: number) => void;
}

/** The card's display name — authored name wins, the default is the path's last segment. */
export const tableSeriesName = (s: EditorSeries, i: number): string => positionalBinderName(s) || `Series ${i + 1}`;

const TableSeriesCards: FC<TableSeriesCardsProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
    columns,
    schemaError,
    showAxis = true,
    expanded,
    onToggleCard,
    onUpdate,
    onRemove,
    onMove,
    onAddWithColumn,
    onRebindAxis,
}) => {
    const series = state.series;
    const defaultType = state.chartType as EchartsCartesianType;
    // Effective axis names for the per-series binding dropdown (ADR-0025) — the binder sight is
    // state.series itself (like Verlauf; the overlay/jsonHidden sights are serien-förmig only).
    const axisDisplayNames = state.yAxes.map((a, ai) => axisOptionLabel(ai, a, series));
    // Duplicate display names (F11 logic over state.series): legend and tooltip cannot tell two
    // same-named series apart — advisory, the names are the user's.
    const names = series.map((s, i) => tableSeriesName(s, i));
    const duplicates = names.filter((n, i) => names.indexOf(n) !== i);
    // The add affordance („keine Serie vor Spaltenwahl" — the addWithOid parity): picking a
    // column appends the card immediately; the picker itself never holds the value.
    const addPicker = (
        <ColumnAutocomplete
            label={Generic.t('echarts_table_add_column')}
            value=""
            columns={columns}
            onChange={p => {
                if (p) {
                    onAddWithColumn(p);
                }
            }}
            emptyLabel={Generic.t('echarts_table_add_column')}
            disabled={!columns.length}
        />
    );

    return (
        <Box>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 1.5 }}
            >
                {Generic.t('echarts_table_series_hint')}
            </Typography>
            {!schemaError && duplicates.length > 0 && (
                <Box sx={{ mb: 1.5 }}>
                    <InfoBox
                        tone="warning"
                        text={Generic.t('echarts_table_duplicate_names')}
                    />
                </Box>
            )}
            {schemaError ? (
                <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ py: 0 }}
                >
                    {schemaError}
                </Alert>
            ) : !state.jsonOid ? (
                <InfoBox text={Generic.t('echarts_json_no_oid')} />
            ) : series.length === 0 ? (
                <EmptyState text={Generic.t('echarts_series_empty')}>{addPicker}</EmptyState>
            ) : (
                // Full cards for BOTH cartesian and pie (ticket 06: pie-tabellarisch renders the
                // same cards, only the Basis-Tab drops the axis dropdown — pie knows no axes).
                // The Verlauf card's structure, the OID row swapped for the yPath picker; no
                // duplicate, no hide (decision 2: structure is authored).
                <>
                    {series.map((s, i) => (
                        <EditorCard
                            key={s.id ?? i}
                            open={!!expanded[i]}
                            onToggle={() => onToggleCard(i)}
                            swatch={<Swatch color={s.color ?? slot(i)} />}
                            title={tableSeriesName(s, i)}
                            subtitle={s.yPath || Generic.t('echarts_table_no_ypath')}
                            actions={
                                <>
                                    <IconButton
                                        size="small"
                                        disabled={i === 0}
                                        onClick={() => onMove(i, -1)}
                                        aria-label={Generic.t('echarts_editor_series_move_up')}
                                        sx={{ p: 0.25 }}
                                    >
                                        <UpIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        disabled={i === series.length - 1}
                                        onClick={() => onMove(i, 1)}
                                        aria-label={Generic.t('echarts_editor_series_move_down')}
                                        sx={{ p: 0.25 }}
                                    >
                                        <DownIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                        size="small"
                                        onClick={() => onRemove(i)}
                                        aria-label={Generic.t('echarts_editor_series_remove')}
                                        sx={{ p: 0.25 }}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </>
                            }
                        >
                            {/* Karten-Tabs (ADR-0073): Basis | Transformation | Darstellung | Werte |
                                Erweitert — the json-cards' tab set (Transformation instead of
                                Daten: the payload needs no fetch, the pipeline still applies the
                                transforms — the documented ADR-0073 deviation). */}
                            <SectionTabs
                                tabs={[
                                    { key: 'basis', label: Generic.t('echarts_grp_basis') },
                                    { key: 'transform', label: Generic.t('echarts_grp_transform') },
                                    { key: 'presentation', label: Generic.t('echarts_grp_presentation') },
                                    { key: 'values', label: Generic.t('echarts_tab_values') },
                                    { key: 'advanced', label: Generic.t('echarts_tab_advanced') },
                                ]}
                            >
                                <CartesianBasisFields
                                    meta={s}
                                    defaultType={defaultType}
                                    onPatch={p =>
                                        // A yAxisIndex change rebinds (the freed axis dies, ADR-0069);
                                        // every other field updates in place — the history twin.
                                        p.yAxisIndex !== undefined ? onRebindAxis(i, p.yAxisIndex) : onUpdate(i, p)
                                    }
                                    pickerCtx={pickerCtx}
                                    colorFallback={slot(i)}
                                    showType
                                    showAxis={showAxis}
                                    yAxes={state.yAxes}
                                    axisDisplayNames={axisDisplayNames}
                                    sourceRow={
                                        <ColumnAutocomplete
                                            label={Generic.t('echarts_editor_series_y_column')}
                                            value={s.yPath ?? ''}
                                            columns={columns}
                                            onChange={p => onUpdate(i, { yPath: p || undefined })}
                                            emptyLabel={Generic.t('echarts_table_no_ypath')}
                                        />
                                    }
                                />
                                <SeriesTransformFields
                                    meta={s}
                                    onPatch={p => onUpdate(i, p)}
                                    chartNullMode={state.ignoreNull}
                                />
                                <CartesianSeriesKnobs
                                    meta={s}
                                    defaultType={defaultType}
                                    onPatch={p => onUpdate(i, p)}
                                    pickerCtx={pickerCtx}
                                    colorFallback={slot(i)}
                                    labelColorFallback={labelColorFallback}
                                />
                                <SeriesValueFormatFields
                                    meta={s}
                                    onPatch={p => onUpdate(i, p)}
                                />
                                <SeriesRawOverride
                                    slot={`cartesian-${s.type ?? defaultType}` as SeriesTemplateSlot}
                                    raw={s.raw}
                                    onChange={v => onUpdate(i, { raw: v })}
                                    snippets={s.snippets}
                                    onCommit={r => onUpdate(i, snippetPatch(r))}
                                />
                            </SectionTabs>
                        </EditorCard>
                    ))}
                    <Box sx={{ mt: 1.5 }}>{addPicker}</Box>
                </>
            )}
        </Box>
    );
};

export default TableSeriesCards;
