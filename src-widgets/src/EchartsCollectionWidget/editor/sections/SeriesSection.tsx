/**
 * Series section — OID binding + per-item styling for EVERY family (ADR-0007/0008 r3, ADR-0010;
 * decomposed into `sections/series/*` per ADR-0019 WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/SeriesSection
 * @remarks
 * This file is the thin dispatcher: it owns the shared series state orchestration (add / remove /
 * move / duplicate incl. the 1:1 auto-axis pair semantics of ADR-0018, the axis death of ADR-0069
 * — a series leaving its axis drops it when no binder remains — the bound-axes auto-balance of
 * ADR-0067, and the JSON overlay + hide/show deny-list of ADR-0011) and renders the
 * family-specific view:
 *  - cartesian — {@link CartesianSeriesList}: EditorCards (swatch, name, OID, ↑↓, duplicate,
 *    delete) expanding to the type-sensitive knob SubGroups.
 *  - pie — {@link PieSliceRows}: name + OID + colour + delete rows. (The OID picker was missing in
 *    v2 — slices could never bind data.)
 *  - json (cartesian + pie) — {@link JsonSeriesCards}: one card per payload series.
 *
 * Validation issues surface as a compact warning list on top (they are item-scoped). An axis death
 * by side effect (series-delete, rebind, JSON hide) reports as an advisory to the modal's notice
 * host — the ADR-0069 snackbar with undo (the triggering `set` IS the undoable step).
 */
import { useEffect, useRef, useState, type FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { InfoBox } from '../../../components/controls';
import { useEditorTheme } from '../useEditorTheme';
import { useHistoryInstances, type HistoryInstancesSight } from '../useHistoryInstances';
import { applyOidTextFacts, oidTextPrefill } from '../oidTextFacts';
import type { EchartsSeriesMeta } from '../../../types/field-definitions/echarts-fields';
import type { OidPickerCtx } from '../OidPicker';
import type { ValidationIssue } from '../validation';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';
import { applyStructureEvent, type StructureAdvisory, type StructureEvent } from '../structureEvents';
import { nextStableId } from '../stableId';
import { IssueList } from './series/shared';
import { CartesianSeriesList } from './series/CartesianSeriesCard';
import PieSliceRows from './series/PieSliceRows';
import JsonSeriesCards from './series/JsonSeriesCards';
import TableSeriesCards from './series/TableSeriesCards';
import type { JsonTableColumn } from '../../../hooks/useJsonTableAnalysis';

/**
 * The series section dispatcher's field ownership (ADR-0049 slice) — the widest honest
 * slice: its own footprint (the family/mode split, the series orchestration incl. the
 * ADR-0069 axis-death semantics, the JSON overlay + deny-list, the theme hook's 4 fields)
 * PLUS the union its sub-views consume (it hands them this same state object; each keeps
 * its own narrower slice at its own file head).
 */
export type SeriesSlice = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'markLines'
    | 'axisSlotMemory'
    | 'pie'
    | 'jsonOid'
    | 'jsonKind'
    | 'jsonHidden'
    | 'jsonSeriesStyle'
    | 'paletteSource'
    | 'palettePreset'
    | 'paletteCustom'
    | 'darkMode'
    // ADR-0072: the chart-level data settings ride down as the series cards' Erben-Override
    // inherit targets (the Daten cluster reads them; nothing here is written).
    | 'aggregate'
    | 'percentileValue'
    | 'integralUnit'
    | 'integralInterpolation'
    // The NULL select's inherit entry names the chart-level target (toter-Regler fix).
    | 'ignoreNull'
    // ADR-0084: the Stapelmodus rides down for the bar card's inherit entry (what erben resolves).
    | 'stackMode'
>;

interface SeriesSectionProps {
    state: SeriesSlice;
    set: SetEditor<SeriesSlice>;
    pickerCtx: OidPickerCtx;
    /** Issues for this section (item-scoped: missing OID). */
    issues?: ValidationIssue[];
    /** JSON mode (ADR-0011): the payload series names, in payload order. Drives the card list. */
    jsonSeriesNames?: string[];
    /** JSON mode: parse error from the jsonOid payload (shown instead of a silent blank). */
    jsonError?: string;
    /**
     * Tabellarisch (ADR-0075): the CHOSEN rows array's columns — the modal's useJsonTableSchema
     * sight, driving the yPath pickers. Absent/empty in every other mode.
     */
    tableColumns?: readonly JsonTableColumn[];
    /** Tabellarisch: the schema's rows/JSON error surface. */
    tableSchemaError?: string;
    /**
     * The modal's notice host (ADR-0067 addendum 2026-11-03) — receives the ADR-0069 axis-death
     * advisory. The triggering `set` is one history step, so the host's undo restores series +
     * axis + anchors together. Absent (tests, non-modal callers): no notice.
     */
    onAdvisory?: (advisory: StructureAdvisory) => void;
}

/** The non-Verlauf fallback sight — `loaded: true` so the missing-adapter hint never flashes. */
const NO_HISTORY_INSTANCES: HistoryInstancesSight = { instances: [], loaded: true };

const SeriesSection: FC<SeriesSectionProps> = ({
    state,
    set,
    pickerCtx,
    issues = [],
    jsonSeriesNames = [],
    jsonError,
    tableColumns,
    tableSchemaError,
    onAdvisory,
}) => {
    // Palette resolves against the COLLECTION theme (ADR-0027) — matches the canvas.
    const { palette, themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    const slot = (i: number): string => palette[i % palette.length];
    // Bar label colour inherit preview (parity Build D) — the theme's text primary, dark-mode-aware.
    const labelColorFallback = themeTokens.textPrimary;
    const isPie = state.chartType === 'pie';
    const isJson = state.mode === 'json';
    // The tabellarische family (ADR-0075): cards from state.series, yPath-bound — the overlay,
    // the deny-list and the payload-name sight stay serien-förmig-exclusive (decision 2).
    const isJsonTable = isJson && state.jsonKind === 'table';
    const isCartesian = state.chartType === 'line' || state.chartType === 'bar' || state.chartType === 'scatter';
    // Verlauf: the per-series history-instance pins live on the series cards (ADR-0039). The
    // instance list is fetched ONCE here and passed down — every card fetching its own would
    // fire one socket round-trip per series.
    const isHistory = state.mode === 'history';
    const historyInstances = useHistoryInstances(pickerCtx.socket);

    const series = state.series;
    const update = (i: number, patch: Partial<EditorSeries>): void =>
        set({ series: series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });

    // OID → text facts (ADR-0058, parity Build B): resolve each NEWLY bound OID's object once
    // and prefill/clean the series' text fields (bool texts, enum state names). Runs on load too
    // (a load-time heal like the rawLevels' — existing widgets get their oidType). The seen-set
    // is keyed per SERIES + oid (a second series binding the same OID gets its own detection),
    // so an authored override survives re-picking; `applyOidTextFacts` is a no-op once the
    // stored `oidType` matches (re-opens never resurrect deleted prefill rows). There is
    // deliberately NO cancellation: a cancelled in-flight patch would be un-re-fetchable (the
    // seen-set already consumed the key) — instead the optimistic `seriesRef` update lets
    // same-tick resolutions stack, and a set() after unmount is a React-18 no-op.
    const seriesRef = useRef(series);
    seriesRef.current = series;
    const oidFactsSeen = useRef<Set<string>>(new Set());
    useEffect(() => {
        for (const s of series) {
            const oid = s.oid;
            const seenKey = `${s.id ?? ''}:${oid}`;
            if (!oid || oid === 'nothing_selected' || oidFactsSeen.current.has(seenKey)) {
                continue;
            }
            oidFactsSeen.current.add(seenKey); // marked before the fetch — a re-render never re-fetches
            pickerCtx.socket
                .getObject(oid)
                .then(obj => {
                    const pre = oidTextPrefill(obj);
                    const current = seriesRef.current;
                    const patched = current.map(x => (x.oid === oid ? applyOidTextFacts(x, pre) : x));
                    if (patched.some((x, i) => x !== current[i])) {
                        seriesRef.current = patched; // optimistic — a same-tick sibling builds on it
                        set({ series: patched });
                    }
                })
                .catch(() => {
                    /* unreadable object → keep the meta as authored */
                });
        }
    }, [series, pickerCtx.socket, set]);
    // The structure events (ADR-0099): the module returns the complete follow-up — axis
    // coupling, death, balance, per data path — as ONE patch (one set() = one undo step) plus
    // the notice; the handlers below never branch on the data path or the family.
    const structure = (event: StructureEvent): void => {
        const r = applyStructureEvent({ ...state, payloadNames: jsonSeriesNames }, event);
        if (r.patch) {
            set(r.patch);
        }
        if (r.advisory && onAdvisory) {
            onAdvisory(r.advisory);
        }
    };
    // Series-leave kills the axis without a remaining binder (ADR-0069).
    const remove = (i: number): void => structure({ type: 'removeSeries', index: i });
    // The per-series Y-axis dropdown (ADR-0025); a value ≥ yAxes.length is „Neue Achse" (ADR-0069).
    const rebindAxis = (i: number, newYi: number): void => structure({ type: 'rebindSeries', index: i, axis: newYi });
    const move = (i: number, dir: -1 | 1): void => {
        const j = i + dir;
        if (j < 0 || j >= series.length) {
            return;
        }
        const next = series.slice();
        [next[i], next[j]] = [next[j], next[i]];
        set({ series: next });
    };
    // No series is created before an OID is chosen (the user's "keine Serie vor OID-Auswahl"): the
    // add affordances open the OID picker, and a series is appended only on selection. No name is
    // pre-filled (the builder falls back to "Series N" at render if left blank); colour/type inherit.
    const addWithOid = (oid: string): void => {
        if (!oid || oid === 'nothing_selected') {
            return;
        }
        // Strict 1:1 auto-axis (ADR-0018) + auto-balance (ADR-0067) — the addSeries event.
        structure({ type: 'addSeries', id: nextStableId('sr-'), oid });
    };
    // 1:1 auto-axis while dense, the source axis in a shared setup (ADR-0018).
    const duplicate = (i: number): void =>
        structure({
            type: 'duplicateSeries',
            id: nextStableId('sr-'), // fresh identity — don't share the source series' id (React key clash)
            index: i,
            copySuffix: Generic.t('echarts_editor_series_copy_suffix'),
        });
    // Tabellarisch (ADR-0075): a series is appended only on COLUMN choice („keine Serie vor
    // Spaltenwahl"), bound via `yPath` — the same addSeries event.
    const addWithColumn = (yPath: string): void => {
        if (!yPath) {
            return;
        }
        structure({ type: 'addSeries', id: nextStableId('sr-'), yPath });
    };
    // JSON mode: per-series presentation lives in the name-keyed overlay (ADR-0011), not state.series.
    // The payload owns series identity (count + data); the overlay re-attaches style by name.
    const updateJson = (name: string, patch: Partial<EchartsSeriesMeta>): void =>
        set({
            jsonSeriesStyle: {
                ...state.jsonSeriesStyle,
                [name]: { ...state.jsonSeriesStyle[name], ...patch },
            },
        });
    // jsonHidden deny-list (Problem-2): hide/show a JSON payload series by name — restorable.
    // Hiding the LAST binder of an axis kills it (ADR-0069, the snackbar carries the death); a
    // re-show is a re-birth with a valid axis in the same step (B3).
    const hideJson = (name: string): void => structure({ type: 'hideSeries', name });
    const showJson = (name: string): void => structure({ type: 'showSeries', name });
    // Rebind a JSON payload series by name (ADR-0026 JSON 1:n) — the same rebindSeries event;
    // the module's name-keyed adapter writes the overlay entry.
    const rebindJsonAxis = (name: string, newYi: number): void =>
        structure({ type: 'rebindSeries', name, axis: newYi });

    // Expanded cards (cartesian + json-cartesian). Cards start collapsed (ADR-0013 removed the
    // auto-expanded skeleton); the user expands the card they edit.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));

    return (
        <Box>
            {issues.length > 0 && <IssueList issues={issues} />}
            {isHistory && !isJson && (
                <Box sx={{ mb: 1.5 }}>
                    <InfoBox text={Generic.t('echarts_instance_auto_hint')} />
                </Box>
            )}
            {isJsonTable && (
                <TableSeriesCards
                    state={state}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    labelColorFallback={labelColorFallback}
                    columns={tableColumns ?? []}
                    schemaError={tableSchemaError}
                    showAxis={!isPie}
                    expanded={expanded}
                    onToggleCard={toggleCard}
                    onUpdate={update}
                    onRemove={remove}
                    onMove={move}
                    onAddWithColumn={addWithColumn}
                    onRebindAxis={rebindAxis}
                />
            )}
            {isJson && !isJsonTable && (
                <JsonSeriesCards
                    state={state}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    labelColorFallback={labelColorFallback}
                    jsonSeriesNames={jsonSeriesNames}
                    jsonError={jsonError}
                    expanded={expanded}
                    onToggleCard={toggleCard}
                    onUpdateJson={updateJson}
                    onRebindJsonAxis={rebindJsonAxis}
                    onHideJson={hideJson}
                    onShowJson={showJson}
                />
            )}
            {!isJson && isPie && (
                <PieSliceRows
                    state={state}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    onUpdate={update}
                    onRemove={remove}
                    onAddWithOid={addWithOid}
                />
            )}
            {!isJson && isCartesian && (
                <CartesianSeriesList
                    state={state}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    labelColorFallback={labelColorFallback}
                    historyInstances={isHistory ? historyInstances : NO_HISTORY_INSTANCES}
                    expanded={expanded}
                    onToggleCard={toggleCard}
                    onUpdate={update}
                    onRemove={remove}
                    onMove={move}
                    onDuplicate={duplicate}
                    onAddWithOid={addWithOid}
                    onRebindAxis={rebindAxis}
                />
            )}
        </Box>
    );
};

export default SeriesSection;
