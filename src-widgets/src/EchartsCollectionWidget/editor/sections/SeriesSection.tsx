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
import { useState, type FC } from 'react';
import { Box, useTheme } from '@mui/material';

import Generic from '../../../Generic';
import { echartsPalette } from '../../echartsTheme';
import { resolvePalette } from '../../presentation';
import type { EchartsSeriesMeta } from '../../../types/field-definitions/echarts-fields';
import type { OidPickerCtx } from '../OidPicker';
import type { ValidationIssue } from '../validation';
import type { EditorSeries, EditorState, SetEditor } from '../editorState';
import { axisLayout, axisPosition, isOneToOne, packStaggeredAxes } from '../axisLayout';
import { nextSeriesId } from '../seriesIdentity';
import { IssueList } from './series/shared';
import { CartesianSeriesList } from './series/CartesianSeriesCard';
import PieSliceRows from './series/PieSliceRows';
import GaugeBinding from './series/GaugeBinding';
import RadarIndicators from './series/RadarIndicators';
import JsonSeriesCards from './series/JsonSeriesCards';

interface SeriesSectionProps {
    state: EditorState;
    set: SetEditor;
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
    const theme = useTheme();
    const palette = resolvePalette(
        state.paletteSource,
        state.palettePreset,
        state.paletteCustom,
        echartsPalette(theme),
    );
    const slot = (i: number): string => palette[i % palette.length];
    const isPie = state.chartType === 'pie';
    const isGauge = state.chartType === 'gauge';
    const isRadar = state.chartType === 'radar';
    const isJson = state.mode === 'json';
    const isCartesian = state.chartType === 'line' || state.chartType === 'bar';

    const series = state.series;
    const update = (i: number, patch: Partial<EditorSeries>): void =>
        set({ series: series.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
    const remove = (i: number): void => {
        const next = series.filter((_, idx) => idx !== i);
        if (!isCartesian) {
            set({ series: next });
            return;
        }
        // Orphan-check (ADR-0018 robust): drop the deleted series' bound axis iff no surviving series
        // remains on it. 1:1 (the dense auto-layout) → always orphans; a shared axis stays put.
        const yi = series[i]?.yAxisIndex;
        const orphaned = typeof yi === 'number' && !next.some(s => s.yAxisIndex === yi);
        if (!orphaned) {
            set({ series: next });
            return;
        }
        // The bound axis is orphaned → remove it and re-index the survivors (yAxisIndex > yi shifts
        // down). Dense 1:1 → full re-stagger (position + offset, auto-layout); a manual/Shared layout
        // → keep each surviving axis' custom position, but packStaggeredAxes closes any offset gap a
        // removed staggered axis would otherwise leave floating (ADR-XXXX; conservative — only when
        // every survivor is on the auto raster).
        const dense = isOneToOne(series) && state.yAxes.length === series.length;
        const survivors = state.yAxes.filter((_, idx) => idx !== yi);
        set({
            series: next.map(s => ({
                ...s,
                yAxisIndex: typeof s.yAxisIndex === 'number' && s.yAxisIndex > yi ? s.yAxisIndex - 1 : s.yAxisIndex,
            })),
            yAxes: dense ? survivors.map((a, idx) => ({ ...a, ...axisPosition(idx) })) : packStaggeredAxes(survivors),
        });
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
        const idx = series.length;
        const patch: Partial<EditorState> = {
            series: [...series, { id: nextSeriesId(), oid, name: '', yAxisIndex: isCartesian ? idx : 0 }],
        };
        // 1:1 auto-axis (ADR-0018): a new cartesian series gets its own axis (alternating side, 80 px stagger).
        // Colour + name are NOT written — the axis inherits both from the bound series at runtime.
        if (isCartesian && idx >= state.yAxes.length) {
            patch.yAxes = [...state.yAxes, axisLayout(idx)];
        }
        set(patch);
    };
    const duplicate = (i: number): void => {
        const copy: EditorSeries = {
            ...series[i],
            id: nextSeriesId(), // fresh identity — don't share the source series' id (React key clash)
            name: `${series[i].name || `Series ${i + 1}`} (${Generic.t('echarts_editor_series_copy_suffix')})`,
        };
        const next = [...series.slice(0, i + 1), copy, ...series.slice(i + 1)];
        if (isCartesian) {
            // 1:1 auto-axis (ADR-0018) — but only while the dense auto-layout is intact. A Shared/
            // Custom layout (several series on one axis) → the copy inherits the source's yAxisIndex
            // instead, so duplicating never silently breaks a deliberate Shared-Axis setup (ADR-XXXX).
            const dense = isOneToOne(series) && state.yAxes.length === series.length;
            if (dense) {
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

    // Expanded cards (cartesian + json-cartesian). Cards start collapsed (ADR-0013 removed the
    // auto-expanded skeleton); the user expands the card they edit.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));

    return (
        <Box>
            {issues.length > 0 && <IssueList issues={issues} />}
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
                    jsonSeriesNames={jsonSeriesNames}
                    jsonError={jsonError}
                    expanded={expanded}
                    onToggleCard={toggleCard}
                    onUpdateJson={updateJson}
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
                    expanded={expanded}
                    onToggleCard={toggleCard}
                    onUpdate={update}
                    onRemove={remove}
                    onMove={move}
                    onDuplicate={duplicate}
                    onAddWithOid={addWithOid}
                />
            )}
        </Box>
    );
};

export default SeriesSection;
