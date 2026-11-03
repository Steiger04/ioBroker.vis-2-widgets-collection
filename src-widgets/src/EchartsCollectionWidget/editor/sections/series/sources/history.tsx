/**
 * The Verlauf Kartenquelle (ADR-0100) — the positional `state.series` list rendered through the
 * one {@link SeriesCard}, plus the OID-first add affordances.
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/history
 * @remarks
 * The source supplies the data-path share of the card: identity (authored name, else the
 * translated „Serie N" fallback; the OID as subtitle, a missing OID in warning colour), the OID
 * + history-instance source row (ADR-0039), the fetching Daten tab, and the patch routing — every
 * structural action (move, duplicate, remove, axis rebind) goes to the dispatcher, which runs it
 * as a structure event (ADR-0099). Tabs, actions and the type gate come from the capability
 * resolution (Kartenquelle × family profile).
 */
import type { FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../../../Generic';
import type { EchartsCartesianType } from '../../../../../types/field-definitions/echarts-fields';
import { editorialOf } from '../../../../families/editorial';
import type { OidPickerCtx } from '../../../OidPicker';
import type { SeriesTemplateSlot } from '../../../seriesTemplates';
import type { EditorSeries, EditorState } from '../../../editorState';
import { axisOptionLabel } from '../../../axisSight';
import type { HistoryInstancesSight } from '../../../useHistoryInstances';
import { resolveCardCapabilities } from '../cardCapabilities';
import SeriesCard, { type SeriesCardContext } from '../SeriesCard';
import { AddSeriesViaOid, EmptyState } from '../shared';

/**
 * The Verlauf list's field ownership (ADR-0049 slice) — read-only: every write goes through the
 * dispatcher callbacks (update / remove / move / duplicate / rebind). The four data-setting keys
 * (ADR-0072) feed the Daten tab's Erben-Override UI; `ignoreNull` names the NULL select's
 * inherit target; `stackMode` the bar stack group's (ADR-0084).
 */
export type HistorySeriesListSlice = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'aggregate'
    | 'percentileValue'
    | 'integralUnit'
    | 'integralInterpolation'
    | 'ignoreNull'
    | 'stackMode'
>;

/** The card title — the authored name, else the translated position fallback („Serie 2"). */
export const historySeriesTitle = (s: EditorSeries, i: number): string =>
    s.name || Generic.t('echarts_series_title_fallback', String(i + 1));

interface HistorySeriesListProps {
    state: HistorySeriesListSlice;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /**
     * The history-instance sight (list + load state — an empty list before `loaded` is LOADING,
     * not „none installed"; the missing-adapter hint gates on exactly that).
     */
    historyInstances?: HistoryInstancesSight;
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    onUpdate: (i: number, patch: Partial<EditorSeries>) => void;
    onRemove: (i: number) => void;
    onMove: (i: number, dir: -1 | 1) => void;
    onDuplicate: (i: number) => void;
    onAddWithOid: (oid: string) => void;
    /** Rebind a series to another axis (≥ yAxes.length = „Neue Achse") — a structure event. */
    onRebindAxis: (i: number, yAxisIndex: number) => void;
}

/** The Verlauf card list: SeriesCards + the OID-first add affordances. */
export const HistorySeriesList: FC<HistorySeriesListProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
    historyInstances,
    expanded,
    onToggleCard,
    onUpdate,
    onRemove,
    onMove,
    onDuplicate,
    onAddWithOid,
    onRebindAxis,
}) => {
    const series = state.series;
    const defaultType = state.chartType as EchartsCartesianType;
    const caps = resolveCardCapabilities('history', editorialOf(state.chartType).seriesCard, series.length);
    // Effective axis names for the per-series binding dropdown (ADR-0025): explicit name →
    // inherited from the owner series → 1-based index, carrying the 1-BASED AXIS NUMBER (B1).
    const ctx: SeriesCardContext = {
        pickerCtx,
        defaultType,
        yAxes: state.yAxes,
        axisDisplayNames: state.yAxes.map((a, ai) => axisOptionLabel(ai, a, series)),
        labelColorFallback,
        stackMode: state.stackMode,
        chart: state,
        fetch: state,
    };
    const historyOnly = state.mode === 'history';
    return (
        <Box>
            {series.length === 0 && (
                <EmptyState text={Generic.t('echarts_series_empty')}>
                    <AddSeriesViaOid
                        pickerCtx={pickerCtx}
                        historyOnly={historyOnly}
                        onPick={onAddWithOid}
                        variant="cta"
                        label={Generic.t('echarts_series_add_first')}
                    />
                </EmptyState>
            )}
            {series.map((s, i) => {
                const isBar = s.type === 'bar' || (s.type === undefined && defaultType === 'bar');
                return (
                    <SeriesCard
                        key={s.id ?? i}
                        caps={caps}
                        ctx={ctx}
                        meta={s}
                        title={historySeriesTitle(s, i)}
                        subtitle={
                            <Box
                                component="span"
                                sx={{ color: s.oid ? 'text.secondary' : 'warning.main' }}
                            >
                                {s.oid || Generic.t('echarts_val_oid_missing')}
                            </Box>
                        }
                        colorFallback={slot(i)}
                        index={i}
                        count={series.length}
                        open={!!expanded[i]}
                        onToggle={() => onToggleCard(i)}
                        onPatch={p => onUpdate(i, p)}
                        onRebindAxis={yi => onRebindAxis(i, yi)}
                        onMove={dir => onMove(i, dir)}
                        onDuplicate={() => onDuplicate(i)}
                        onRemove={() => onRemove(i)}
                        basis={{
                            showInstance: historyOnly,
                            historyInstances: historyInstances?.instances,
                            instancesLoaded: historyInstances?.loaded ?? false,
                            oid: { value: s.oid, onChange: oid => onUpdate(i, { oid }), historyOnly },
                        }}
                        rawSlot={`cartesian-${s.type ?? defaultType}` as SeriesTemplateSlot}
                        // stackStrategy's condition (ADR-0084 decision 7): the bar catalog's power
                        // lever only bites with a stack in effect — say so where it is authored.
                        rawHint={isBar ? Generic.t('echarts_stackstrategy_hint') : undefined}
                    />
                );
            })}
            {series.length > 0 && (
                <AddSeriesViaOid
                    pickerCtx={pickerCtx}
                    historyOnly={historyOnly}
                    onPick={onAddWithOid}
                    variant="button"
                    label={Generic.t('echarts_editor_series_add')}
                />
            )}
        </Box>
    );
};
