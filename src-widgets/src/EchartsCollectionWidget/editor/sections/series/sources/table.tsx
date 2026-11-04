/**
 * The tabellarisch Kartenquelle (ADR-0075/0100) — one card per AUTHORED yPath binding, rendered
 * through the one {@link SeriesCard} for BOTH families (cartesian series and pie rings).
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/table
 * @remarks
 * The structural twin of the Verlauf list (`state.series` positional — add, delete, move,
 * duplicate and rebind run through the dispatcher as structure events, ADR-0099), the OID row
 * swapped for the yPath column picker. The table family owns its structure: every delete is
 * REAL (no jsonHidden deny-list). The family profile shapes the card: pie rings show Basis ·
 * Daten · JSON, no type, colour or axis, the ring icon as identity (ADR-0082 decision 1); the
 * per-series raw resolves the ring catalog (`seriesSlotOf`).
 */
import type { FC } from 'react';
import { Alert, Box } from '@mui/material';

import Generic from '../../../../../Generic';
import type { EchartsCartesianType } from '../../../../../types/field-definitions/echarts-fields';
import type { JsonTableColumn } from '../../../../../hooks/useJsonTableAnalysis';
import { InfoBox } from '../../../../../components/controls';
import { editorialOf } from '../../../../families/editorial';
import { familyOf } from '../../../../optionBuilder';
import ColumnAutocomplete from '../../../ColumnAutocomplete';
import type { OidPickerCtx } from '../../../OidPicker';
import { seriesSlotOf } from '../../../seriesTemplates';
import type { EditorSeries, EditorState } from '../../../editorState';
import { axisOptionLabel, positionalBinderName } from '../../../axisSight';
import { resolveCardCapabilities } from '../cardCapabilities';
import SeriesCard, { type SeriesCardContext, type SeriesCardFocus } from '../SeriesCard';
import { EmptyState } from '../shared';

/**
 * The table list's field ownership (ADR-0049 slice) — read-only: every write goes through the
 * dispatcher callbacks (positional update / remove / move / duplicate / rebind / add).
 */
export type TableSeriesListSlice = Pick<
    EditorState,
    // stackMode: the bar knobs' inherit target (ADR-0084 addendum 3 — the mode applies here too).
    'jsonOid' | 'chartType' | 'jsonKind' | 'series' | 'yAxes' | 'ignoreNull' | 'stackMode'
>;

/**
 * The card's display name — the positional binder chain (authored name → the yPath's last
 * segment), else the translated position fallback („Serie 2").
 */
export const tableSeriesName = (s: EditorSeries, i: number): string =>
    positionalBinderName(s) || Generic.t('echarts_series_title_fallback', String(i + 1));

interface TableSeriesListProps {
    state: TableSeriesListSlice;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /** The chosen rows array's columns (the modal's useJsonTableSchema sight). */
    columns: readonly JsonTableColumn[];
    /** The schema's rows/JSON error (shown instead of a silent blank). */
    schemaError?: string;
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    /** The Karten-Tab jump for ONE card (ticket 05): card index + tab request. */
    cardFocus?: SeriesCardFocus;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onMove: (i: number, dir: -1 | 1) => void;
    onDuplicate: (i: number) => void;
    /** Add a series bound to a yPath column (the addWithOid twin — auto-axis, no card before). */
    onAddWithColumn: (yPath: string) => void;
    onRebindAxis: (i: number, yAxisIndex: number) => void;
}

export const TableSeriesList: FC<TableSeriesListProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
    columns,
    schemaError,
    expanded,
    onToggleCard,
    cardFocus,
    onUpdate,
    onRemove,
    onMove,
    onDuplicate,
    onAddWithColumn,
    onRebindAxis,
}) => {
    const series = state.series;
    const defaultType = state.chartType as EchartsCartesianType;
    const caps = resolveCardCapabilities('table', editorialOf(state.chartType).seriesCard, series.length);
    // The binder sight is state.series itself (like Verlauf; the overlay/jsonHidden sights are
    // serien-förmig only) — the axis labels read the same positional name chain as the titles.
    const ctx: SeriesCardContext = {
        pickerCtx,
        defaultType,
        yAxes: state.yAxes,
        axisDisplayNames: state.yAxes.map((a, ai) => axisOptionLabel(ai, a, series)),
        labelColorFallback,
        stackMode: state.stackMode,
        chart: state,
    };
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
            <Box sx={{ mb: 1.5 }}>
                <InfoBox text={Generic.t('echarts_table_series_hint')} />
            </Box>
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
                <>
                    {series.map((s, i) => {
                        const isBar = !caps.ring && (s.type ?? defaultType) === 'bar';
                        return (
                            <SeriesCard
                                key={s.id ?? i}
                                caps={caps}
                                ctx={ctx}
                                meta={s}
                                title={names[i]}
                                subtitle={s.yPath || Generic.t('echarts_table_no_ypath')}
                                previewName={names[i]}
                                colorFallback={slot(i)}
                                index={i}
                                count={series.length}
                                open={!!expanded[i]}
                                onToggle={() => onToggleCard(i)}
                                focusTab={cardFocus?.index === i ? cardFocus.focus : undefined}
                                onPatch={p => onUpdate(i, p)}
                                onRebindAxis={yi => onRebindAxis(i, yi)}
                                onMove={dir => onMove(i, dir)}
                                onDuplicate={() => onDuplicate(i)}
                                onRemove={() => onRemove(i)}
                                basis={{
                                    sourceRow: (
                                        <ColumnAutocomplete
                                            label={Generic.t('echarts_editor_series_y_column')}
                                            value={s.yPath ?? ''}
                                            columns={columns}
                                            onChange={p => onUpdate(i, { yPath: p || undefined })}
                                            emptyLabel={Generic.t('echarts_table_no_ypath')}
                                        />
                                    ),
                                }}
                                // The ONE slot rule (ADR-0042): cartesian type override or the pie
                                // RING catalog (ADR-0082 decision 2 — a ring's raw is series-level).
                                rawSlot={seriesSlotOf(familyOf(state.chartType), state.chartType, s, state.jsonKind)}
                                // The Stapelmodus applies here too (ADR-0084 addendum 3).
                                rawHint={isBar ? Generic.t('echarts_stackstrategy_hint') : undefined}
                            />
                        );
                    })}
                    <Box sx={{ mt: 1.5 }}>{addPicker}</Box>
                </>
            )}
        </Box>
    );
};
