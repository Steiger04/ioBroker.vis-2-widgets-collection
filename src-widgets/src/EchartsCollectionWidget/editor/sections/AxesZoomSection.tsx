/**
 * Axes & zoom section — cartesian-only multi-axis + interaction config (ADR-0007/0010/0012;
 * control-kit layout per ADR-0019; card bodies decomposed into `sections/axes/*` per ADR-0051).
 *
 * @module EchartsCollectionWidget/editor/sections/AxesZoomSection
 * @remarks
 * The **Axis manager** (ADR-0012): one collapsible EditorCard per configured Y-axis (same shell
 * as the series cards; the card body lives in `sections/axes/AxisCard.tsx`) — cards start
 * collapsed, further axes render side-by-side via position/offset. Every card is BOUND (an axis
 * exists exactly while a series binds it, ADR-0069 — axes are born in the Series section: the
 * auto-bind, the reconcile append or the dropdown's „Neue Achse" entry). Above the Y-cards sits
 * the **X-Karte** (ADR-0035; `sections/axes/XCard.tsx`) — the single, non-deletable card for the
 * shared time axis (the old chart-level `xSplit` row lives on as its Splitlinien switch). This
 * file owns the ORCHESTRATION: the delete semantics (ADR-0025 — an axis' series rebind to a
 * same-format survivor, else axis 0 + advisory toast; ADR-0067 — every structural event
 * re-arranges the bound axes densely), the bound-series colour/name defaults per ADR-0018
 * (history positional, JSON via the visible-payload overlay), dataZoom (slider + inside as
 * a SwitchList) and the marking cards (ADR-0061). min≥max carries advisory validation (in the
 * cards).
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
    binderIndexOf,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    displayPosition,
    effectiveAxisColor,
    emittedAxisRanks,
    packStaggeredAxes,
    jsonBindingView,
    jsonBoundAxisDeletePatch,
    ownerPatch,
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
     * History: the positional `state.series`. JSON: the name-keyed overlay (`state.series` is
     * empty there — the payload owns the series); the modal axis effect writes `yAxisIndex` onto each
     * visible overlay entry, so a lookup-by-index finds it.
     */
    const boundAxisColor = (i: number): string | undefined => {
        // JSON: the "series" for palette-slot purposes is the VISIBLE payload names in payload order
        // (mirrors the Series-card list). The overlay owns each name's yAxisIndex + colour; resolving
        // the slot by visible position — NOT the axis index — keeps the swatch aligned with the Series
        // card after a rebind or a payload-name reorder (ADR-0018; the prior axis-index fallback
        // diverged there). History passes state.series directly (already in display order).
        // Both resolve OWNER-first (ADR-0068): the axis' incumbent series paints the swatch.
        if (state.mode === 'json') {
            const visibleSeries = jsonBindingView(jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden).map(
                b => ({
                    id: b.id,
                    yAxisIndex: b.yAxisIndex,
                    color: b.id ? state.jsonSeriesStyle[b.id]?.color : undefined,
                }),
            );
            return effectiveAxisColor(axes[i], i, visibleSeries, palette);
        }
        return effectiveAxisColor(axes[i], i, state.series, palette);
    };
    /** Effective name of the axis' display series (owner-first, ADR-0068) — the axis-name default (ADR-0018). */
    const boundAxisName = (i: number): string | undefined => {
        if (state.mode === 'json') {
            // The STRICT sight (B2): only VISIBLE names bind — a hidden entry whose index
            // awaits the reconcile clear must not title the axis (and must not un-"unbenutzt"
            // its badge either, see boundIdx below).
            return boundJsonAxisName(axes[i], i, jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden);
        }
        // Materialised sight (Q7): a legacy series without a stored index binds axis 0 — the
        // card title shows its name, like the chart does.
        const idx = binderIndexOf(axes[i], i, state.series);
        if (idx < 0) {
            return undefined;
        }
        return state.series[idx].name || `Series ${idx + 1}`;
    };
    // The bound set — under ADR-0069 every axis is IN it (an axis outside died at the structural
    // event that emptied it); the set still feeds the emitted-rank computation. History
    // reads `state.series`; JSON reads the STRICT visible sight (B2): a hidden entry whose index
    // awaits the re-index never binds.
    const boundIdx: Set<number> =
        state.mode === 'json'
            ? boundJsonAxisIndices(jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden)
            : boundAxisIndices(state.series);
    // The emitted (effective) positions (Q5): the builder emits the axes compacted in array
    // order — the alignTicks gates on the card read the emitted index/total, not the configured
    // ones (the reference axis is the first emitted one).
    const emittedRanks = emittedAxisRanks(boundIdx);
    /**
     * The balance sight (ADR-0067): what "bound" means for the auto-balance depends on the mode —
     * history passes the series list (a series without an index implicitly binds axis 0);
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
        // A REAL side-flip re-staggers both sides densely, sides preserved (ADR-0028's flip
        // semantics, re-introduced for the manual fine-justure flip — ADR-0067's interleaving
        // balance stays reserved for structural events). The flip check runs through
        // `displayPosition`, so re-selecting the value the card SHOWS is no flip: hand-tuned
        // offsets survive. Any other edit (offset/name/colour/min-max/…) is plain fine-justure —
        // no re-pack either.
        const flipped = 'position' in patch && patch.position !== displayPosition(axes[i], i);
        set({ yAxes: flipped ? packStaggeredAxes(next) : next });
    };
    // Manual "add axis" is retired (ADR-0069): the button created an axis nothing bound — an
    // unbound axis, which the new invariant drops on the spot. Axes are born in the Series
    // section alone (the auto-bind, the reconcile append, the dropdown's „Neue Achse" entry).
    const removeAxis = (i: number): void => {
        // JSON mode: `state.series` is empty — the payload owns the series, and the axes follow the
        // visible payload names via the reconcile. Removing an axis config directly would leave
        // `jsonSeriesStyle.yAxisIndex` stale, so the builder clamps the orphaned series to axis 0
        // (the "wrong axis gone + line lingers" chaos). The only sane "delete this axis" here is to
        // HIDE its bound payload series — ALL of them (jsonHidden, ADR-0011; 1:n means several
        // names can bind one axis) — and the axis DIES with its last binder in the same patch
        // (ADR-0069): dropped, overlay entries + marking anchors re-indexed, survivors re-arranged.
        if (state.mode === 'json') {
            const deletePatch = jsonBoundAxisDeletePatch(
                jsonSeriesNames ?? [],
                state.jsonSeriesStyle,
                state.jsonHidden,
                state.yAxes,
                i,
                state.markLines,
            );
            if (deletePatch) {
                // Hiding EVERY visible payload name bound to the axis frees it — ALL binders, not
                // the first (1:n is first-class; one leftover binder would keep the axis rendered:
                // the button must do what it says) — and the freed axis is DROPPED (ADR-0069).
                // One patch → one undo step, no snackbar (an explicit delete says what it does).
                set(deletePatch);
            } else {
                // No bound payload series — drop the config and
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
        // History (ADR-0025): deleting an axis NEVER deletes its bound series. They rebind to
        // a surviving axis of the same `format` (the unit proxy), else axis 0 + an advisory
        // unit-mismatch toast. Survivors re-index; the delete is a structural event, so the
        // rebound bound set ends balanced (ADR-0067). Deleting the LAST axis while series remain
        // must not leave them stale-indexed (every axis is bound, ADR-0069) — a fresh default
        // axis takes the rebind instead, keeping the section consistent.
        const deletedAxis = axes[i];
        let survivors = axes.filter((_a, idx) => idx !== i);
        const match = sameFormatSurvivor(deletedAxis?.format, survivors);
        const freshFallback = !survivors.length;
        if (freshFallback) {
            survivors = [axisLayout(0)];
        }
        const target = match ?? 0; // index in survivors = the new yAxisIndex
        // The mismatch toast warns about a CHOSEN fallback — with the fresh-axis fallback there
        // was no survivor to mismatch against, so it stays silent (nothing to check against).
        if (match === null && !freshFallback) {
            setToast(Generic.t('echarts_axis_rebind_unit_mismatch'));
        }
        // The deleted axis' series rebind onto `target`; every stored index above the hole
        // shifts down around it.
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
        // The owner rule keeps/assigns each survivor's display series (ADR-0068 — the rebound
        // series respect an existing incumbent on the target axis; the surviving half of the
        // retired resting-name patch).
        const patched = ownerPatch(state.series, rebound, survivors) ?? survivors;
        // Marking anchors re-index with the axes (B4): the deleted axis' markings follow the
        // rebind target (their axis' series land there), higher anchors shift down — without
        // the remap every marking above the hole silently pointed at the SHIFTED axis.
        set({
            yAxes: balanceAxes(patched, rebound),
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
     * Axis select options for the marking cards (value/axis select shown with ≥2 axes only).
     * Every axis is bound (ADR-0069) — an explicit name labels the entry, else the bare number.
     */
    const axisOptions: [string, string][] = axes.map((ax, ai) => [
        String(ai),
        ax.name ? `${ai + 1} · ${ax.name}` : String(ai + 1),
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
                        dividerColor={themeTokens.divider}
                    />
                ))}
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
