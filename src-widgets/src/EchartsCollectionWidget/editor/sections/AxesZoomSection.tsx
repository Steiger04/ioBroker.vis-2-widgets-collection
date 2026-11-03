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
 * shared time axis (the old chart-level `xSplit` row lives on as its Splitlinien switch). The
 * structural axis edits — side flip, delete, place move — are structure events (ADR-0099,
 * `editor/structureEvents`); their notice (the ADR-0025 unit mismatch) goes to the modal's
 * notice host, and this file owns the bound-series colour/name defaults per ADR-0018
 * (positional for Verlauf AND Tabellarisch — ADR-0075; serien-förmig JSON via the
 * visible-payload overlay), dataZoom (slider + inside as
 * a SwitchList) and the marking cards (ADR-0061). min≥max carries advisory validation (in the
 * cards).
 */
import { Fragment, useState, type FC } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

import Generic from '../../../Generic';
import { useEditorTheme } from '../useEditorTheme';
import { InfoBox, LabeledSelect, SectionTabs, SubGroup, SwitchList, SwitchRow } from '../../../components/controls';
import type { SectionTabsFocus } from '../../../components/controls';
import { issueCountsByTab, type ValidationIssue } from '../issueTabs';
import type { OidPickerCtx } from '../OidPicker';
import type { EchartsAxisConfig, EchartsMarkLine } from '../../../types/field-definitions/echarts-fields';
import type { EditorState, SetEditor } from '../editorState';
import {
    axisCardOrder,
    axisOptionLabel,
    axisPlace,
    binderIndexOf,
    boundAxisIndices,
    boundJsonAxisIndices,
    boundJsonAxisName,
    displayPosition,
    effectiveAxisColor,
    emittedAxisRanks,
    jsonBindingView,
    positionalBinderName,
} from '../axisSight';
import { dispatchStructureEvent, type StructureAdvisory, type StructureEvent } from '../structureEvents';
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
    // The structure-event view (ADR-0099) reads the family and the data point too.
    | 'chartType'
    | 'jsonOid'
    | 'mode'
    | 'jsonKind'
    | 'series'
    | 'yAxes'
    | 'xAxis'
    | 'axisSlotMemory'
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
    /** The modal's notice host (ADR-0067 addendum 2026-11-03) — the ADR-0025 unit-mismatch advisory. */
    onAdvisory?: (advisory: StructureAdvisory) => void;
}

const AxesZoomSection: FC<AxesZoomSectionProps> = ({
    focusTab,
    issues,
    state,
    set,
    pickerCtx,
    jsonSeriesNames,
    xIsCategory,
    onAdvisory,
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
    // Keyed by the axis' STABLE ID (healed on load): the card list renders in DRAW order
    // (ADR-0079 addendum 3), so an array index would attach the open state to a LIST SLOT —
    // after a place swap the wrong card would unfold. The id travels with its card.
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const toggleCard = (key: string): void => setExpanded(e => ({ ...e, [key]: !e[key] }));
    // The X-Karte has its own expand flag (a single card, no list index).
    const [xExpanded, setXExpanded] = useState(false);
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
    // The structure events (ADR-0099): side flip, delete and place move return their complete
    // follow-up (re-place, rebind/hide, re-index, balance) as ONE patch plus the notice.
    // The axis-delete rebind fallback (ADR-0025) reports through the same notice: a deleted
    // axis' series went to axis 0 because no survivor shares the format (likely unit mismatch).
    const structure = (event: StructureEvent): void =>
        dispatchStructureEvent({ ...state, payloadNames: jsonSeriesNames ?? [] }, event, set, onAdvisory);
    const setAxis = (i: number, patch: Partial<EchartsAxisConfig>): void => {
        // A side change is a structure event (ADR-0079 place insert); every other edit
        // (offset/name/colour/min-max/…) is plain fine-adjustment.
        if (patch.position !== undefined) {
            structure({ type: 'flipAxisSide', index: i, patch });
            return;
        }
        set({ yAxes: axes.map((a, idx) => (idx === i ? { ...a, ...patch } : a)) });
    };
    // Manual "add axis" is retired (ADR-0069): axes are born in the Series section alone.
    const removeAxis = (i: number): void => structure({ type: 'deleteAxis', index: i });

    const setMark = (i: number, patch: Partial<EchartsMarkLine>): void =>
        set({ markLines: state.markLines.map((m, idx) => (idx === i ? { ...m, ...patch } : m)) });
    const addMark = (): void =>
        // No explicit colour → inherits the theme divider token (ADR-0027), like the builder
        // default. A new mark starts as an upper-only dashed line (the stage-1 default); no
        // label text → the edge shows its bound value (the Wert-Fallback, ADR-0081).
        set({
            markLines: [...state.markLines, { id: nextStableId(), upper: 0, lineStyle: 'dashed' }],
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
    // The cards' draw order (ADR-0079 addendum 3) + which indices OPEN a group (a hairline
    // renders before each non-empty side group — never between absent ones).
    const cardOrder = axisCardOrder(axes);
    const groupFirst = new Set(
        (['left', 'right'] as const)
            .map(side => cardOrder.find(i => displayPosition(axes[i], i) === side))
            .filter(i => i !== undefined),
    );

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
                <SubGroup title={Generic.t('echarts_axes')}>
                    {/* B6 (review 2026-11-03): a wrapping InfoBox, not the overline caption that
                        cut the hint off ("Infotexte immer als InfoBox"). It explains the place
                        arrows, so it shows only once there are axes to arrange. */}
                    {axes.length > 0 && (
                        <Box sx={{ mb: 1.5 }}>
                            <InfoBox text={Generic.t('echarts_axes_hint')} />
                        </Box>
                    )}
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
                        the theme's PRIMARY token — the head of the colour chain, no series involved
                        (X-Default-Farbe spec revision 2026-10-19). */}
                    <XCard
                        x={state.xAxis}
                        open={xExpanded}
                        onToggle={() => setXExpanded(v => !v)}
                        onChange={patch => set({ xAxis: { ...state.xAxis, ...patch } })}
                        pickerCtx={pickerCtx}
                        fallbackColor={themeTokens.primary}
                        dividerColor={themeTokens.divider}
                        isCategory={xIsCategory}
                    />
                    {cardOrder.map(i => {
                        // Draw order (ADR-0079 addendum 3): the list mirrors the chart — left
                        // side complete (place 1 on top), then right. A hairline separates the
                        // X-Karte from the first group and the two sides from each other — but
                        // only where a group actually follows (a lone left side gets exactly one
                        // divider, none between absent groups).
                        const cardKey = axes[i].id ?? String(i);
                        return (
                            <Fragment key={cardKey}>
                                {groupFirst.has(i) && <Divider sx={{ my: 0.5 }} />}
                                <AxisCard
                                    axis={axes[i]}
                                    index={i}
                                    emittedIndex={emittedRanks.get(i)}
                                    emittedTotal={emittedRanks.size}
                                    sight={axisPlace(axes, i) ?? undefined}
                                    open={!!expanded[cardKey]}
                                    onToggle={() => toggleCard(cardKey)}
                                    onChange={patch => setAxis(i, patch)}
                                    onMovePlace={dir => structure({ type: 'moveAxis', index: i, dir })}
                                    onRemove={() => removeAxis(i)}
                                    pickerCtx={pickerCtx}
                                    seriesColor={boundAxisColor(i)}
                                    seriesName={boundAxisName(i)}
                                    dividerColor={themeTokens.divider}
                                />
                            </Fragment>
                        );
                    })}
                </SubGroup>

                {/* Markierungen (parity Build C stage 1, ADR-0061): one collapsible card per
                    marking — limit + style cluster + label cluster, anchored to a Y-axis. */}
                <SubGroup title={Generic.t('echarts_marks')}>
                    <Box sx={{ mb: 1.5 }}>
                        <InfoBox text={Generic.t('echarts_marks_hint')} />
                    </Box>
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
                            textSecondary={themeTokens.textSecondary}
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
        </Box>
    );
};

export default AxesZoomSection;
