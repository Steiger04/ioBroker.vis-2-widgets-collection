/**
 * Series section — OID binding + per-item styling for EVERY family (ADR-0007/0008 r3, ADR-0010;
 * decomposed into `sections/series/*` per ADR-0019 WS5).
 *
 * @module EchartsCollectionWidget/editor/sections/SeriesSection
 * @remarks
 * This file is the thin dispatcher: it owns the shared series state orchestration (add / remove /
 * move / duplicate incl. the 1:1 auto-axis pair semantics of ADR-0018, and the JSON overlay +
 * hide/show deny-list of ADR-0011) and renders the family-specific view:
 *  - cartesian — {@link CartesianSeriesList}: EditorCards (swatch, name, OID, ↑↓, duplicate,
 *    delete) expanding to the type-sensitive knob SubGroups.
 *  - pie — {@link PieSliceRows}: name + OID + colour + delete rows. (The OID picker was missing in
 *    v2 — slices could never bind data.)
 *  - gauge — {@link GaugeBinding}: the scalar OID + label + colour (dial lives in Gauge options).
 *  - radar — {@link RadarIndicators}: the indicator-OID list + polygon label/colour.
 *  - json (cartesian + pie) — {@link JsonSeriesCards}: one card per payload series.
 *
 * Validation issues surface as a compact warning list on top (they are item-scoped).
 */
import { useEffect, useRef, useState, type FC } from 'react';
import { Box } from '@mui/material';

import Generic from '../../../Generic';
import { InfoBox } from '../../../components/controls';
import { useEditorTheme } from '../useEditorTheme';
import { useHistoryInstances } from '../useHistoryInstances';
import { applyOidTextFacts, oidTextPrefill } from '../oidTextFacts';
import type { EchartsSeriesMeta } from '../../../types/field-definitions/echarts-fields';
import type { OidPickerCtx } from '../OidPicker';
import type { ValidationIssue } from '../validation';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';
import { axisLayout, isOneToOneBound, reconcileJsonAxes } from '../axisLayout';
import { nextStableId } from '../stableId';
import { IssueList } from './series/shared';
import { CartesianSeriesList } from './series/CartesianSeriesCard';
import PieSliceRows from './series/PieSliceRows';
import GaugeBinding from './series/GaugeBinding';
import RadarIndicators from './series/RadarIndicators';
import JsonSeriesCards from './series/JsonSeriesCards';

/**
 * The series section dispatcher's field ownership (ADR-0049 slice) — the widest honest
 * slice: its own footprint (the family/mode split, the series orchestration incl. the
 * series-leave→unbound-axis semantics (ADR-0066), the JSON overlay + deny-list, the theme hook's 4 fields)
 * PLUS the union its sub-views consume (it hands them this same state object; each keeps
 * its own narrower slice at its own file head).
 */
export type SeriesSlice = Pick<
    EditorState,
    | 'chartType'
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'gauge'
    | 'radar'
    | 'pie'
    | 'jsonOid'
    | 'jsonHidden'
    | 'jsonSeriesStyle'
    | 'paletteSource'
    | 'palettePreset'
    | 'paletteCustom'
    | 'darkMode'
>;

interface SeriesSectionProps {
    state: SeriesSlice;
    set: SetEditor<SeriesSlice>;
    pickerCtx: OidPickerCtx;
    /** Issues for this section (item-scoped: missing OID, radar max). */
    issues?: ValidationIssue[];
    /** JSON mode (ADR-0011): the payload series names, in payload order. Drives the card list. */
    jsonSeriesNames?: string[];
    /** JSON mode: parse error from the jsonOid payload (shown instead of a silent blank). */
    jsonError?: string;
}

const SeriesSection: FC<SeriesSectionProps> = ({
    state,
    set,
    pickerCtx,
    issues = [],
    jsonSeriesNames = [],
    jsonError,
}) => {
    // Palette resolves against the COLLECTION theme (ADR-0027) — matches the canvas.
    const { palette, themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);
    const slot = (i: number): string => palette[i % palette.length];
    // Bar label colour inherit preview (parity Build D) — the theme's text primary, dark-mode-aware.
    const labelColorFallback = themeTokens.textPrimary;
    const isPie = state.chartType === 'pie';
    const isGauge = state.chartType === 'gauge';
    const isRadar = state.chartType === 'radar';
    const isJson = state.mode === 'json';
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
    // Series-leave keeps the axis (ADR-0066): deleting a series turns its bound axis UNBOUND iff no
    // surviving series remains on it — kept with its config (a persistent resting state), never
    // rendered until a series binds it again. Only an explicit axis-delete in the Axis manager
    // removes an axis; no re-index/re-stagger here, so axis indices stay stable across deletes.
    const remove = (i: number): void => {
        set({ series: series.filter((_s, idx) => idx !== i) });
    };
    // Rebind a series to a different axis via the per-series Y-axis dropdown (ADR-0025). The OLD
    // axis turns unbound when no series remains on it (ADR-0066) — it stays selectable in the
    // dropdown with its config, and the builder simply stops emitting it (no phantom axis). No
    // re-index: every other series' yAxisIndex keeps pointing at the same slot. `update` handles
    // every other field; yAxisIndex lands here, routed by the CartesianSeriesList onPatch.
    const rebindAxis = (i: number, newYi: number): void => {
        set({ series: series.map((s, idx) => (idx === i ? { ...s, yAxisIndex: newYi } : s)) });
    };
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
        // Strict 1:1 auto-axis (ADR-0018/0066): a new cartesian series ALWAYS gets a fresh axis
        // appended at the end — it never claims an unbound slot (that return path is the per-series
        // dropdown's explicit assignment alone). Binding to `yAxes.length` (the appended index)
        // rather than the series count also keeps shared-setups consistent. Colour + name are NOT
        // written — the axis inherits both from the bound series at runtime.
        const axIdx = state.yAxes.length;
        const patch: Partial<SeriesSlice> = {
            series: [...series, { id: nextStableId('sr-'), oid, name: '', yAxisIndex: isCartesian ? axIdx : 0 }],
        };
        if (isCartesian) {
            patch.yAxes = [...state.yAxes, axisLayout(axIdx)];
        }
        set(patch);
    };
    const duplicate = (i: number): void => {
        const copy: EditorSeries = {
            ...series[i],
            id: nextStableId('sr-'), // fresh identity — don't share the source series' id (React key clash)
            name: `${series[i].name || `Series ${i + 1}`} (${Generic.t('echarts_editor_series_copy_suffix')})`,
        };
        const next = [...series.slice(0, i + 1), copy, ...series.slice(i + 1)];
        if (isCartesian) {
            // 1:1 auto-axis (ADR-0018) — but only while every series owns its bound axis (dense,
            // bound-aware since ADR-0066: unbound axes don't count). A genuinely shared axis (2+
            // series on it) → the copy inherits the source's yAxisIndex instead, so duplicating
            // never silently breaks a deliberate Shared-Axis setup.
            if (isOneToOneBound(series)) {
                // Colour + name inherit the copy at runtime — not written (ADR-0018).
                const axIdx = state.yAxes.length;
                copy.yAxisIndex = axIdx;
                set({
                    series: next,
                    yAxes: [...state.yAxes, axisLayout(axIdx)],
                });
            } else {
                copy.yAxisIndex = series[i].yAxisIndex;
                set({ series: next });
            }
        } else {
            set({ series: next });
        }
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
    // jsonHidden deny-list (Problem-2): hide/show a JSON payload series by name. The payload still
    // owns the series; hiding only suppresses it (chart + legend + axis) — restorable.
    const hideJson = (name: string): void => set({ jsonHidden: [...state.jsonHidden, name] });
    const showJson = (name: string): void => set({ jsonHidden: state.jsonHidden.filter(n => n !== name) });
    // Rebind a JSON payload series to a different axis via the Y-axis dropdown (ADR-0026 JSON 1:n):
    // write the new yAxisIndex onto the overlay entry, then the sticky reconcile orphan-cleans the
    // freed axis. Manual bindings survive payload changes — the modal reconcile effect keeps every
    // valid yAxisIndex (it only auto-assigns names lacking one).
    const rebindJsonAxis = (name: string, newYi: number): void => {
        const overlay = {
            ...state.jsonSeriesStyle,
            [name]: { ...state.jsonSeriesStyle[name], yAxisIndex: newYi },
        };
        const visibleNames = (jsonSeriesNames ?? []).filter(n => !state.jsonHidden.includes(n));
        const { yAxes, overlay: reconciled } = reconcileJsonAxes(visibleNames, overlay, state.yAxes);
        set({ jsonSeriesStyle: reconciled, yAxes });
    };

    // Expanded cards (cartesian + json-cartesian). Cards start collapsed (ADR-0013 removed the
    // auto-expanded skeleton); the user expands the card they edit.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));

    return (
        <Box>
            {issues.length > 0 && <IssueList issues={issues} />}
            {isHistory && !isGauge && !isRadar && !isJson && (
                <Box sx={{ mb: 1.5 }}>
                    <InfoBox text={Generic.t('echarts_instance_auto_hint')} />
                </Box>
            )}
            {isGauge && (
                <GaugeBinding
                    state={state}
                    set={set}
                    pickerCtx={pickerCtx}
                    slot={slot}
                />
            )}
            {isRadar && (
                <RadarIndicators
                    state={state}
                    set={set}
                    pickerCtx={pickerCtx}
                    slot={slot}
                />
            )}
            {!isGauge && !isRadar && isJson && (
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
            {!isGauge && !isRadar && !isJson && isPie && (
                <PieSliceRows
                    state={state}
                    set={set}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    onUpdate={update}
                    onRemove={remove}
                    onAddWithOid={addWithOid}
                />
            )}
            {!isGauge && !isRadar && !isJson && isCartesian && (
                <CartesianSeriesList
                    state={state}
                    pickerCtx={pickerCtx}
                    slot={slot}
                    labelColorFallback={labelColorFallback}
                    historyInstances={isHistory ? historyInstances : []}
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
