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
 * (positional for Verlauf AND Tabellarisch — ADR-0075; serien-förmig JSON via the
 * visible-payload overlay), dataZoom (slider + inside as
 * a SwitchList) and the marking cards (ADR-0061). min≥max carries advisory validation (in the
 * cards).
 */
import { useState, type FC } from 'react';
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { useEditorTheme } from '../useEditorTheme';
import { LabeledSelect, SectionTabs, SubGroup, SwitchList, SwitchRow } from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../validation';
import type { OidPickerCtx } from '../OidPicker';
import type {
    EchartsAxisConfig,
    EchartsMarkLine,
    EchartsSeriesMeta,
} from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';
import {
    axisLayout,
    axisOptionLabel,
    axisPlace,
    balanceAxes,
    binderIndexOf,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    boundJsonView,
    displayPosition,
    effectiveAxisColor,
    emittedAxisRanks,
    insertAxisAtPlace,
    jsonBindingView,
    jsonBoundAxisDeletePatch,
    moveAxisPlace,
    ownerPatch,
    positionalBinderName,
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
 * `series`; the SERIEN-FÖRMIG JSON family branches on `mode` + `jsonKind` + the overlay
 * (`jsonSeriesStyle`) and hides payload series via `jsonHidden` (the tabellarisch family rides
 * the positional paths alongside Verlauf, ADR-0075); `markLines`, the two zoom toggles and the
 * zoom idle-reset select
 * (ADR-0054) are section-owned; the 4 palette/darkMode fields are transitively read via
 * `useEditorTheme` (axis colours).
 */
export type AxesZoomSlice = Pick<
    EditorState,
    | 'mode'
    | 'jsonKind'
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
    /** External tab jump (ADR-0073): the focus request's tab selects once. */
    focusTab?: SectionTabsFocus;
    /** This section's validation findings — the per-tab ⚠ dot feed (the header rollup stays). */
    issues?: ValidationIssue[];
    state: AxesZoomSlice;
    set: SetEditor<AxesZoomSlice>;
    pickerCtx: OidPickerCtx;
    /** JSON-mode payload series names, in payload order (drives the Series-card list). */
    jsonSeriesNames?: string[];
    /** The effective X is a CATEGORY axis (ADR-0075 json-table) — hides the X-Karte's Time format. */
    xIsCategory?: boolean;
}

const AxesZoomSection: FC<AxesZoomSectionProps> = ({
    focusTab,
    issues,
    state,
    set,
    pickerCtx,
    jsonSeriesNames,
    xIsCategory,
}) => {
    const axes = state.yAxes;
    // The payload-family gate (ADR-0075): only the SERIEN-FÖRMIG family binds axes through the
    // name-keyed overlay. The tabellarisch family is positional (state.series + yPath — the
    // Verlauf twin), so every JSON branch below is serien-förmig-exclusive; table falls through
    // to the positional paths, where `jsonSeriesNames` would be an EMPTY sight (the payload is
    // a rows array, not a series list — the modal gates the name subscription on this gate too).
    const isJsonSeries = state.mode === 'json' && state.jsonKind === 'series';
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
     * Verlauf + Tabellarisch: the positional `state.series`. Serien-förmig JSON: the name-keyed
     * overlay (`state.series` is empty there — the payload owns the series); the modal axis
     * effect writes `yAxisIndex` onto each visible overlay entry, so a lookup-by-index finds it.
     */
    const boundAxisColor = (i: number): string | undefined => {
        // JSON serien-förmig: the "series" for palette-slot purposes is the VISIBLE payload names in
        // payload order (mirrors the Series-card list). The overlay owns each name's yAxisIndex +
        // colour; resolving the slot by visible position — NOT the axis index — keeps the swatch
        // aligned with the Series card after a rebind or a payload-name reorder (ADR-0018; the
        // prior axis-index fallback diverged there). The positional families pass state.series
        // directly (already in display order). All resolve OWNER-first (ADR-0068): the axis'
        // incumbent series paints the swatch.
        if (isJsonSeries) {
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
        if (isJsonSeries) {
            // The STRICT sight (B2): only VISIBLE names bind — a hidden entry whose index
            // awaits the reconcile clear must not title the axis (and must not un-"unbenutzt"
            // its badge either, see boundIdx below).
            return boundJsonAxisName(axes[i], i, jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden);
        }
        // Materialised sight (Q7): a legacy series without a stored index binds axis 0 — the
        // card title shows its name, like the chart does. The name reads the positional
        // default chain — a tabellarisch series without an authored name titles the axis with
        // its bound COLUMN (ADR-0075), never the "Achse N"/"Series N" fallbacks.
        const idx = binderIndexOf(axes[i], i, state.series);
        if (idx < 0) {
            return undefined;
        }
        return positionalBinderName(state.series[idx]) || `Series ${idx + 1}`;
    };
    // The bound set — under ADR-0069 every axis is IN it (an axis outside died at the structural
    // event that emptied it); the set still feeds the emitted-rank computation. The positional
    // families read `state.series`; serien-förmig JSON reads the STRICT visible sight (B2): a
    // hidden entry whose index awaits the re-index never binds.
    const boundIdx: Set<number> = isJsonSeries
        ? boundJsonAxisIndices(jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden)
        : boundAxisIndices(state.series);
    // The emitted (effective) positions (Q5): the builder emits the axes compacted in array
    // order — the alignTicks gates on the card read the emitted index/total, not the configured
    // ones (the reference axis is the first emitted one).
    const emittedRanks = emittedAxisRanks(boundIdx);
    /**
     * The balance sight (ADR-0067): what "bound" means for the auto-balance depends on the
     * family — the positional families pass the series list (a series without an index
     * implicitly binds axis 0); serien-förmig JSON passes the visible overlay bindings through
     * the STRICT sight (a cleared entry is unbound, never an implicit axis-0 binder). Handlers
     * that change the overlay/hidden set pass their AFTER values; the defaults read the
     * current state.
     */
    const balanceSight = (
        overlay: Readonly<Record<string, EchartsSeriesMeta>> = state.jsonSeriesStyle,
        hidden: readonly string[] = state.jsonHidden,
    ): { yAxisIndex?: number }[] =>
        isJsonSeries ? boundJsonView(jsonSeriesNames ?? [], overlay, hidden) : state.series;
    const setAxis = (i: number, patch: Partial<EchartsAxisConfig>): void => {
        // A REAL side-flip inserts the axis at its PLACE on the target side (ADR-0079, replacing
        // ADR-0028's array-order repack): the rank travels, the displaced shift one outward, the
        // source side closes, every personal offset deviation travels. The flip check runs
        // through `displayPosition`, so re-selecting the value the card SHOWS is no flip:
        // hand-tuned offsets survive. Any other edit (offset/name/colour/min-max/…) is plain
        // fine-justure — no re-place either.
        const target = patch.position;
        if (target !== undefined && target !== displayPosition(axes[i], i)) {
            const placed = insertAxisAtPlace(axes, i, target);
            if (placed) {
                // The patch's OTHER keys ride along on the flipped axis — the merge contract is
                // the pre-ADR-0079 one (single-key patches today, but nothing gets dropped).
                set({ yAxes: placed.map((a, idx) => (idx === i ? { ...a, ...patch } : a)) });
                return;
            }
        }
        set({ yAxes: axes.map((a, idx) => (idx === i ? { ...a, ...patch } : a)) });
    };
    // Manual "add axis" is retired (ADR-0069): the button created an axis nothing bound — an
    // unbound axis, which the new invariant drops on the spot. Axes are born in the Series
    // section alone (the auto-bind, the reconcile append, the dropdown's „Neue Achse" entry).
    const removeAxis = (i: number): void => {
        // JSON serien-förmig: `state.series` is empty — the payload owns the series, and the axes
        // follow the visible payload names via the reconcile. Removing an axis config directly
        // would leave `jsonSeriesStyle.yAxisIndex` stale, so the builder clamps the orphaned
        // series to axis 0 (the "wrong axis gone + line lingers" chaos). The only sane "delete
        // this axis" here is to HIDE its bound payload series — ALL of them (jsonHidden,
        // ADR-0011; 1:n means several names can bind one axis) — and the axis DIES with its last
        // binder in the same patch (ADR-0069): dropped, overlay entries + marking anchors
        // re-indexed, survivors re-arranged. The TABELLARISCH family takes the positional path
        // below (its `state.series` is materialised — the hide-and-die branch would drop the
        // axis over an empty name sight and rebind nothing).
        if (isJsonSeries) {
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
        // Verlauf + Tabellarisch (ADR-0025): deleting an axis NEVER deletes its bound series. They
        // rebind to a surviving axis of the same `format` (the unit proxy), else axis 0 + an
        // advisory unit-mismatch toast. Survivors re-index; the delete is a structural event, so
        // the rebound bound set ends balanced (ADR-0067). Deleting the LAST axis while series
        // remain must not leave them stale-indexed (every axis is bound, ADR-0069) — a fresh
        // default axis takes the rebind instead, keeping the section consistent.
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
     * Axis select options for the marking cards (value/axis select shown with ≥2 axes only):
     * the SAME effective-name resolution the Series dropdowns use (explicit axis name → the
     * binder's display name → Series N, {@link axisOptionLabel}) — the number never stands
     * naked while a binder names the axis (serien-förmig reads the visible overlay sight,
     * the positional families read state.series).
     */
    const markAxisSight = isJsonSeries
        ? jsonBindingView(jsonSeriesNames ?? [], state.jsonSeriesStyle, state.jsonHidden)
        : state.series;
    const axisOptions: [string, string][] = axes.map((ax, ai) => [String(ai), axisOptionLabel(ai, ax, markAxisSight)]);

    // Per-tab warning dot feed (ADR-0073): issues placed on their tab; the header rollup stays.
    const dots = issueCountsByTab(issues);

    return (
        <Box>
            {/* Sektions-Tabs (ADR-0073): Achsen | Markierungen | Zoom — the three Sub-groups
                become tabs (Sub-group structure inside a tab stays for the card clusters). */}
            <SectionTabs
                focus={focusTab}
                tabs={[
                    { key: 'axes', label: Generic.t('echarts_tab_axes'), issueCount: dots.axes },
                    { key: 'marks', label: Generic.t('echarts_tab_marks'), issueCount: dots.marks },
                    { key: 'zoom', label: Generic.t('echarts_tab_zoom'), issueCount: dots.zoom },
                ]}
            >
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
                        isCategory={xIsCategory}
                    />
                    {axes.map((a, i) => {
                        // The place sight (ADR-0079): the card's subtitle + stepper bounds read
                        // the SAME offset order the chart draws; the stepper writes insert-shift
                        // with a travelling deviation — one click, one undo step (a no-move
                        // returns undefined and never reaches set).
                        const sight = axisPlace(axes, i);
                        return (
                            <AxisCard
                                key={a.id ?? i}
                                axis={a}
                                index={i}
                                emittedIndex={emittedRanks.get(i)}
                                emittedTotal={emittedRanks.size}
                                sight={sight ?? undefined}
                                open={!!expanded[i]}
                                onToggle={() => toggleCard(i)}
                                onChange={patch => setAxis(i, patch)}
                                onMovePlace={dir => {
                                    const moved = moveAxisPlace(axes, i, dir);
                                    if (moved) {
                                        set({ yAxes: moved });
                                    }
                                }}
                                onRemove={() => removeAxis(i)}
                                pickerCtx={pickerCtx}
                                seriesColor={boundAxisColor(i)}
                                seriesName={boundAxisName(i)}
                                dividerColor={themeTokens.divider}
                            />
                        );
                    })}
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

                {/* The zoom tab needs no SubGroup of its own — the tab IS the group (ADR-0073:
                    sub-groups are fine grouping WITHIN a tab, not a 1:1 title echo). */}
                <Box>
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
                            onChange={v =>
                                set({ zoomResetAfterIdle: (v || '') as AxesZoomSlice['zoomResetAfterIdle'] })
                            }
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
                </Box>
            </SectionTabs>
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
