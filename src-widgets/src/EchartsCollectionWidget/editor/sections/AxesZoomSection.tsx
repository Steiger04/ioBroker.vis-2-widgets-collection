/**
 * Axes & zoom section — cartesian-only multi-axis + interaction config (ADR-0007/0010/0012;
 * control-kit layout per ADR-0019; card bodies decomposed into `sections/axes/*` per ADR-0051).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * The **Axis manager** (ADR-0012): one collapsible EditorCard per configured Y-axis (same shell
 * as the series cards; the card body lives in `sections/axes/AxisCard.tsx`) — cards start
 * collapsed, further axes render side-by-side via position/offset. Above the Y-cards sits the
 * **X-Karte** (ADR-0035; `sections/axes/XCard.tsx`) — the single, non-deletable card for the
 * shared time axis (the old chart-level `xSplit` row lives on as its Splitlinien switch). This
 * file owns the ORCHESTRATION: add/remove semantics (ADR-0025 — an axis is an independent
 * citizen, its series rebind to a same-format survivor, else axis 0 + advisory toast; ADR-0067 —
 * every structural event re-arranges the bound axes densely), the bound-series colour/name
 * defaults per ADR-0018 (history/live positional, JSON via the visible-payload overlay), dataZoom
 * (slider + inside as a SwitchList) and the marking cards (ADR-0061). min≥max carries advisory
 * validation (in the cards).
 */
import { useState, type FC } from 'react';
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { useEditorTheme } from '../useEditorTheme';
import { LabeledSelect, SubGroup, SwitchList, SwitchRow } from '../../../components/controls';
import type { OidPickerCtx } from '../OidPicker';
import type {
    EchartsAxisConfig,
    EchartsMarkLine,
    EchartsSeriesMeta,
} from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';
import {
    axisLayout,
    balanceAxes,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    effectiveAxisColor,
    emittedAxisRanks,
    isRealSideFlip,
    jsonBoundAxisDeletePatch,
    materializedAxisIndex,
    remapMarkAxisIndices,
    sameFormatSurvivor,
} from '../axisLayout';
import { nextStableId } from '../stableId';
import { ZOOM_IDLE_SECONDS } from '../../zoomIdleReset';
import XCard from './axes/XCard';
import AxisCard from './axes/AxisCard';
import MarkCard from './axes/MarkCard';

/**
 * The axes & zoom section's field ownership (ADR-0049 slice) — the widest honest slice: the
 * axis manager reads/writes the axis arrays (`yAxes`, `xAxis`) and the rebind cascade into
 * `series`; JSON mode branches on `mode` + the overlay (`jsonSeriesStyle`) and hides payload
 * series via `jsonHidden`; `markLines`, the two zoom toggles and the zoom idle-reset select
 * (ADR-0054) are section-owned; the 4 palette/darkMode fields are transitively read via
 * `useEditorTheme` (axis colours).
 */
export type AxesZoomSlice = Pick<
    EditorState,
    | 'mode'
    | 'series'
    | 'yAxes'
    | 'xAxis'
    | 'markLines'
    | 'dataZoomSlider'
    | 'dataZoomInside'
    | 'zoomResetAfterIdle'
    | 'jsonHidden'
    | 'jsonSeriesStyle'
    | 'paletteSource'
    | 'palettePreset'
    | 'paletteCustom'
    | 'darkMode'
>;

interface AxesZoomSectionProps {
    state: AxesZoomSlice;
    set: SetEditor<AxesZoomSlice>;
    pickerCtx: OidPickerCtx;
    /** JSON-mode payload series names, in payload order (drives the Series-card list). */
    jsonSeriesNames?: string[];
}

const AxesZoomSection: FC<AxesZoomSectionProps> = ({ state, set, pickerCtx, jsonSeriesNames }) => {
    const axes = state.yAxes;
    // Palette + tokens resolve against the COLLECTION theme (ADR-0027) — matches the canvas.
    const { palette, themeTokens } = useEditorTheme(state, pickerCtx.socket, pickerCtx.theme);

    // Expanded axis cards — same pattern as SeriesSection cartesian cards.
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const toggleCard = (i: number): void => setExpanded(e => ({ ...e, [i]: !e[i] }));
    // The X-Karte has its own expand flag (a single card, no list index).
    const [xExpanded, setXExpanded] = useState(false);
    // Advisory toast for the axis-delete rebind fallback (ADR-0025): shown when a deleted axis'
    // series are rebound to axis 0 because no survivor shares the format (a likely unit mismatch).
    const [toast, setToast] = useState<string | null>(null);
    /**
     * Effective colour of the first series bound to axis i — the axis-colour default (ADR-0018).
     * History/live: the positional `state.series`. JSON: the name-keyed overlay (`state.series` is
     * empty there — the payload owns the series); the modal axis effect writes `yAxisIndex` onto each
     * visible overlay entry, so a lookup-by-index finds it.
     */
    const boundAxisColor = (i: number): string | undefined => {
        // JSON: the "series" for palette-slot purposes is the VISIBLE payload names in payload order
        // (mirrors the Series-card list). The overlay owns each name's yAxisIndex + colour; resolving
        // the slot by visible position — NOT the axis index — keeps the swatch aligned with the Series
        // card after a rebind or a payload-name reorder (ADR-0018; the prior axis-index fallback
        // diverged there). History/live passes state.series directly (already in display order).
        if (state.mode === 'json') {
            const visibleSeries = (jsonSeriesNames ?? [])
                .filter(n => !state.jsonHidden.includes(n))
                .map(n => state.jsonSeriesStyle[n] ?? ({} as { yAxisIndex?: number; color?: string }));
            return effectiveAxisColor(i, visibleSeries, palette);
        }
        return effectiveAxisColor(i, state.series, palette);
    };
    /** Effective name of the first series bound to axis i — the axis-name default (ADR-0018). */
    const boundAxisName = (i: number): string | undefined => {
        if (state.mode === 'json') {
            // The STRICT sight (B2): only VISIBLE names bind — a hidden entry whose index
            // awaits the reconcile clear must not title the axis (and must not un-"unbenutzt"
            // its badge either, see boundIdx below).
            return boundJsonAxisName(i, jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden);
        }
        // Materialised sight (Q7): a legacy series without a stored index binds axis 0 — the
        // card title shows its name, like the chart does.
        const idx = state.series.findIndex(s => materializedAxisIndex(s) === i);
        if (idx < 0) {
            return undefined;
        }
        return state.series[idx].name || `Series ${idx + 1}`;
    };
    // The bound set (ADR-0066): every axis OUTSIDE it is unbound — kept with its config, flagged
    // „unbenutzt" on its card, never rendered. History/live reads `state.series`; JSON reads the
    // STRICT visible sight (B2): a hidden entry whose index awaits the reconcile clear never
    // binds — reading all Object.values marked such an axis bound (badge off, position locked,
    // hidden name as title) while the Series dropdown suffixed it „(unbenutzt)".
    const boundIdx: Set<number> =
        state.mode === 'json'
            ? boundJsonAxisIndices(jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden)
            : boundAxisIndices(state.series);
    // The emitted (effective) positions (Q5): the builder emits the BOUND axes compacted in array
    // order — the alignTicks gates on the card read the emitted index/total, not the configured
    // ones (the reference axis is the first BOUND axis; an unbound configured axis 0 is not it).
    const emittedRanks = emittedAxisRanks(boundIdx);
    /**
     * The balance sight (ADR-0067): what "bound" means for the auto-balance depends on the mode —
     * history/live passes the series list (a series without an index implicitly binds axis 0);
     * JSON passes the visible overlay bindings through the STRICT sight (a cleared entry is
     * unbound, never an implicit axis-0 binder). Handlers that change the overlay/hidden set pass
     * their AFTER values; the defaults read the current state.
     */
    const balanceSight = (
        overlay: Readonly<Record<string, EchartsSeriesMeta>> = state.jsonSeriesStyle,
        hidden: readonly string[] = state.jsonHidden,
    ): { yAxisIndex?: number }[] =>
        state.mode === 'json' ? boundJsonView(jsonSeriesNames ?? [], overlay, hidden) : state.series;
    const setAxis = (i: number, patch: Partial<EchartsAxisConfig>): void => {
        const next = axes.map((a, idx) => (idx === i ? { ...a, ...patch } : a));
        // A side-flip is a structural event: the FULL re-arrange runs — every bound axis re-takes
        // its standard-interleaving slot (ADR-0067 pensions ADR-0028's position-preserving pack).
        // Flipping a BOUND axis therefore snaps back to its array-position side (the card's
        // position select is LOCKED while bound, Q4); flipping an UNBOUND axis sticks (the
        // balance never touches it — its stored geometry is the re-bind preference). Any other
        // field edit (offset/name/colour/min-max/…) is fine-justure: NO re-arrange, the manual
        // geometry survives until the next structural event. The trigger fires on a REAL flip
        // only (`isRealSideFlip` — the detector's default mirrors the select's display default,
        // so re-selecting the SHOWN value on an unstored position is a no-op, Q4).
        const flipped = isRealSideFlip(axes, i, patch);
        set({ yAxes: flipped ? balanceAxes(next, balanceSight()) : next });
    };
    // Manual "add axis" uses the same 1:1 layout helper as series-add (ADR-0018): alternating side,
    // 80 px stagger, splitLine on axis 0 only. The fresh axis is UNBOUND — the balance leaves its
    // geometry alone, and axisLayout(axes.length) places it BEHIND every bound slot (the array
    // length is always ≥ the bound count), so it never coincides with a rendered axis. The add is
    // a structural event: the bound set re-arranges (ADR-0067).
    const addAxis = (): void => set({ yAxes: balanceAxes([...axes, axisLayout(axes.length)], balanceSight()) });
    const removeAxis = (i: number): void => {
        // JSON mode: `state.series` is empty — the payload owns the series, and the axes follow the
        // visible payload names via the reconcile (it APPENDS an axis for a new name; a freed axis
        // rests — it never drops one, ADR-0066). Removing an axis config directly would leave
        // `jsonSeriesStyle.yAxisIndex` stale, so the builder clamps the orphaned series to axis 0
        // (the "wrong axis gone + line lingers" chaos). The only sane "delete this axis" here is to
        // HIDE its bound payload series — ALL of them (jsonHidden, ADR-0011; 1:n means several
        // names can bind one axis) — the axis then RESTS unbound instead (see the inner comment
        // below). Symmetric to the history/live pair-delete below.
        if (state.mode === 'json') {
            const deletePatch = jsonBoundAxisDeletePatch(
                jsonSeriesNames ?? [],
                state.jsonSeriesStyle,
                state.jsonHidden,
                state.yAxes,
                i,
            );
            if (deletePatch) {
                // Hiding EVERY visible payload name bound to the axis frees it — ALL binders, not
                // the first (1:n is first-class; one leftover binder would keep the axis rendered:
                // the button must do what it says). The axis RESTS unbound (ADR-0066: nothing drops
                // it anymore); the patch snapshots the first binder's displayed name, so the card
                // keeps the label instead of collapsing to „Achse N" (the reconcile clears the
                // hidden entries' yAxisIndex only later; the VISIBILITY sight sees the transition
                // already). One patch → one undo step. Symmetric to the history/live pair-delete.
                set(deletePatch);
            } else {
                // No bound payload series (unbound axis, or already hidden) — drop the config and
                // re-index the overlay entries around the removed slot: a stale-but-in-range
                // index would otherwise silently rebind a payload series to the WRONG axis
                // (out-of-range ones the reconcile heals with a fresh axis). The delete is a
                // structural event: the surviving bound set re-arranges (ADR-0067). Marking
                // anchors re-index with the config (B4): the deleted axis' anchor stays at the
                // stack position it occupied (max(0, i-1)), higher anchors shift down.
                const reindexed = Object.fromEntries(
                    Object.entries(state.jsonSeriesStyle).map(([n, m]) => [
                        n,
                        typeof m.yAxisIndex === 'number' && m.yAxisIndex > i
                            ? { ...m, yAxisIndex: m.yAxisIndex - 1 }
                            : m,
                    ]),
                );
                set({
                    yAxes: balanceAxes(
                        axes.filter((_a, idx) => idx !== i),
                        balanceSight(reindexed, state.jsonHidden),
                    ),
                    jsonSeriesStyle: reindexed,
                    markLines: remapMarkAxisIndices(state.markLines, i, Math.max(0, i - 1)),
                });
            }
            return;
        }
        // History/live (ADR-0025): an axis is an independent citizen — deleting it NEVER deletes its
        // bound series. They rebind to a surviving axis of the same `format` (the unit proxy), else
        // axis 0 + an advisory unit-mismatch toast. Survivors re-index; the delete is a structural
        // event, so the rebound bound set ends balanced (ADR-0067). This explicit delete is the ONLY
        // axis removal since ADR-0066 — a series leaving its axis (rebind/delete) merely turns it
        // unbound, so the user deletes the axis here when they want it gone.
        const deletedAxis = axes[i];
        const survivors = axes.filter((_a, idx) => idx !== i);
        const match = sameFormatSurvivor(deletedAxis?.format, survivors);
        const target = match ?? 0; // index in survivors = the new yAxisIndex
        if (match === null) {
            setToast(Generic.t('echarts_axis_rebind_unit_mismatch'));
        }
        // The deleted axis' series rebind onto `target` — a GAINED binder clears the target's
        // stale resting name (ADR-0066: bound axes inherit live). No survivor ever LOSES a binder
        // on this path, so there is nothing to snapshot here.
        const rebinds = state.series.some(s => s.yAxisIndex === i);
        const cleaned = rebinds
            ? survivors.map((a, idx) =>
                  idx === target && a.restingName !== undefined ? { ...a, restingName: undefined } : a,
              )
            : survivors;
        const rebound = state.series.map(s => {
            const yi = s.yAxisIndex;
            if (typeof yi !== 'number') {
                return s;
            }
            if (yi === i) {
                return { ...s, yAxisIndex: target }; // rebind to the same-format survivor
            }
            return { ...s, yAxisIndex: yi > i ? yi - 1 : yi }; // re-index around the dropped axis
        });
        // Marking anchors re-index with the axes (B4): the deleted axis' markings follow the
        // rebind target (their axis' series land there), higher anchors shift down — without
        // the remap every marking above the hole silently pointed at the SHIFTED axis.
        set({
            yAxes: balanceAxes(cleaned, rebound),
            series: rebound,
            markLines: remapMarkAxisIndices(state.markLines, i, target),
        });
    };

    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        // No explicit colour → inherits the theme divider token (ADR-0027), like the builder
        // default. A new mark starts as an upper-only dashed line (the stage-1 default).
        set({
            markLines: [...state.markLines, { id: nextStableId(), upper: 0, label: '', lineStyle: 'dashed' }],
        });
    const removeMark = (i: number): void => set({ markLines: state.markLines.filter((m, idx) => idx !== i) });
    // The marking cards share the axis cards' expand pattern (one flag per list item).
    const [markExpanded, setMarkExpanded] = useState<Record<number, boolean>>({});
    const toggleMarkCard = (i: number): void => setMarkExpanded(e => ({ ...e, [i]: !e[i] }));
    /**
     * Axis select options for the marking cards (value/axis select shown with ≥2 axes only). An
     * unbound axis gets the suffix — a marking anchored to it rests (not drawn) until a series
     * re-binds the axis (ADR-0066), and the select must say so.
     */
    const axisOptions: [string, string][] = axes.map((ax, ai) => [
        String(ai),
        ((ax.name ?? ax.restingName) ? `${ai + 1} · ${ax.name ?? ax.restingName}` : String(ai + 1)) +
            (boundIdx.has(ai) ? '' : ` (${Generic.t('echarts_axis_unbound')})`),
    ]);

    return (
        <Box>
            <SubGroup
                title={Generic.t('echarts_axes')}
                hint={Generic.t('echarts_axes_hint')}
            >
                {axes.length === 0 && (
                    <Box
                        sx={{
                            mb: 1.5,
                            p: 1.5,
                            border: '1px dashed',
                            borderColor: 'divider',
                            borderRadius: 1,
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="text.secondary"
                        >
                            {Generic.t('echarts_axes_empty')}
                        </Typography>
                    </Box>
                )}
                {/* The X-Karte is the manager's first card — the shared time axis (ADR-0035). It
                    is flat config: no delete, no reorder, no series binding; its colour inherits
                    the theme's label token (the axis belongs to no series). */}
                <XCard
                    x={state.xAxis}
                    open={xExpanded}
                    onToggle={() => setXExpanded(v => !v)}
                    onChange={patch => set({ xAxis: { ...state.xAxis, ...patch } })}
                    pickerCtx={pickerCtx}
                    fallbackColor={themeTokens.textSecondary}
                    dividerColor={themeTokens.divider}
                />
                {axes.map((a, i) => (
                    <AxisCard
                        key={a.id ?? i}
                        axis={a}
                        index={i}
                        emittedIndex={emittedRanks.get(i)}
                        emittedTotal={emittedRanks.size}
                        open={!!expanded[i]}
                        onToggle={() => toggleCard(i)}
                        onChange={patch => setAxis(i, patch)}
                        onRemove={() => removeAxis(i)}
                        pickerCtx={pickerCtx}
                        seriesColor={boundAxisColor(i)}
                        seriesName={boundAxisName(i)}
                        unbound={!boundIdx.has(i)}
                        positionLocked={boundIdx.has(i)}
                        dividerColor={themeTokens.divider}
                    />
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addAxis}
                >
                    {Generic.t('echarts_axis_add')}
                </Button>
            </SubGroup>

            <SubGroup title={Generic.t('echarts_zoom')}>
                <SwitchList sx={{ mb: 1.5 }}>
                    <SwitchRow
                        label={Generic.t('echarts_zoom_slider')}
                        checked={state.dataZoomSlider}
                        onChange={v => set({ dataZoomSlider: v })}
                    />
                    <SwitchRow
                        label={Generic.t('echarts_zoom_inside')}
                        checked={state.dataZoomInside}
                        onChange={v => set({ dataZoomInside: v })}
                    />
                </SwitchList>
                {/* Zoom idle-reset (ADR-0054, adapter `resetZoom`): only offered when a zoom
                    mode is actually on — an idle reset without zoom is a no-op switch. */}
                {(state.dataZoomSlider || state.dataZoomInside) && (
                    <LabeledSelect
                        label={Generic.t('echarts_zoom_reset')}
                        value={state.zoomResetAfterIdle}
                        onChange={v => set({ zoomResetAfterIdle: (v || '') as AxesZoomSlice['zoomResetAfterIdle'] })}
                        options={[
                            ['', Generic.t('echarts_sum_off')],
                            ...ZOOM_IDLE_SECONDS.map(
                                sec =>
                                    [
                                        String(sec),
                                        sec % 60 === 0
                                            ? Generic.t('echarts_zoom_reset_minutes', String(Math.round(sec / 60)))
                                            : Generic.t('echarts_zoom_reset_seconds', String(sec)),
                                    ] as [string, string],
                            ),
                        ]}
                    />
                )}
            </SubGroup>

            {/* Markierungen (parity Build C stage 1, ADR-0061): one collapsible card per
                marking — limit + style cluster + label cluster, anchored to a Y-axis. */}
            <SubGroup
                title={Generic.t('echarts_marks')}
                hint={Generic.t('echarts_marks_hint')}
            >
                {state.markLines.map((m, i) => (
                    <MarkCard
                        key={m.id ?? i}
                        mark={m}
                        axisOptions={axisOptions}
                        open={!!markExpanded[i]}
                        onToggle={() => toggleMarkCard(i)}
                        onChange={patch => setMark(i, patch)}
                        onRemove={() => removeMark(i)}
                        pickerCtx={pickerCtx}
                        dividerColor={themeTokens.divider}
                    />
                ))}
                <Button
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={addMark}
                >
                    {Generic.t('echarts_mark_add')}
                </Button>
            </SubGroup>
            <Snackbar
                open={!!toast}
                autoHideDuration={5000}
                onClose={() => setToast(null)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="warning"
                    variant="filled"
                    onClose={() => setToast(null)}
                    sx={{ alignItems: 'center' }}
                >
                    {toast}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default AxesZoomSection;
