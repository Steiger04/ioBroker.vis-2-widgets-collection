/**
 * The serien-förmig JSON Kartenquelle (ADR-0011/0100) — one card per VISIBLE payload series,
 * rendered through the one {@link SeriesCard}; pie keeps its flat slice rows (ADR-0082).
 *
 * @module EchartsCollectionWidget/editor/sections/series/sources/json
 * @remarks
 * The payload owns series identity (count + data); the name-keyed overlay (`jsonSeriesStyle`)
 * owns presentation. The source supplies the data-path share of the card: identity (overlay
 * name, else the payload name; the payload name as subtitle), the overlay patch routing, the
 * name-keyed axis rebind (a structure event, ADR-0099), the transform-only Daten tab and the
 * only action — HIDE, an eye (B4): the series lands in the jsonHidden deny-list and is
 * restorable from the chips row; payload series can never be truly deleted.
 */
import type { FC, ReactElement } from 'react';
import { Alert, Box, Chip, IconButton, Typography } from '@mui/material';
import { Restore as RestoreIcon, VisibilityOff as HideIcon } from '@mui/icons-material';

import Generic from '../../../../../Generic';
import type { EchartsCartesianType, EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';
import { FieldGrid, FieldLabel, InfoBox } from '../../../../../components/controls';
import { editorialOf } from '../../../../families/editorial';
import ColorField from '../../../colorFields';
import type { OidPickerCtx } from '../../../OidPicker';
import type { SeriesTemplateSlot } from '../../../seriesTemplates';
import type { EditorState } from '../../../editorState';
import { axisOptionLabel, jsonBindingView } from '../../../axisSight';
import { resolveCardCapabilities } from '../cardCapabilities';
import SeriesCard, { type SeriesCardContext, type SeriesCardFocus } from '../SeriesCard';
import { JsonTab } from '../tabs/JsonTab';

/**
 * The JSON list's field ownership (ADR-0049 slice) — read-only: every write goes through the
 * dispatcher callbacks (overlay patch / hide / show / rebind). Reads: the jsonOid empty-state
 * branch, the family split, the overlay + deny-list, the axis dropdowns, the NULL select's and
 * the bar stack group's inherit targets.
 */
export type JsonSeriesListSlice = Pick<
    EditorState,
    'jsonOid' | 'chartType' | 'yAxes' | 'jsonHidden' | 'jsonSeriesStyle' | 'ignoreNull' | 'stackMode'
>;

interface JsonSeriesListProps {
    state: JsonSeriesListSlice;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of payload series i (the inherit fallback). */
    slot: (i: number) => string;
    /** Theme text-primary — the bar label colour's inherit preview. */
    labelColorFallback: string;
    /** The payload series names, in payload order. Drives the card list. */
    jsonSeriesNames: string[];
    /** Parse error from the jsonOid payload (shown instead of a silent blank). */
    jsonError?: string;
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    /** The Karten-Tab jump for ONE card (ticket 05): card index + tab request. */
    cardFocus?: SeriesCardFocus;
    onUpdateJson: (name: string, patch: Partial<EchartsSeriesMeta>) => void;
    /** Rebind a payload series to a different axis (sticky; the freed axis dies, ADR-0069). */
    onRebindJsonAxis: (name: string, yAxisIndex: number) => void;
    onHideJson: (name: string) => void;
    onShowJson: (name: string) => void;
}

export const JsonSeriesList: FC<JsonSeriesListProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
    jsonSeriesNames,
    jsonError,
    expanded,
    onToggleCard,
    cardFocus,
    onUpdateJson,
    onRebindJsonAxis,
    onHideJson,
    onShowJson,
}) => {
    const dashed = (text: string): ReactElement => (
        <Box sx={{ border: '1px dashed', borderColor: 'divider', borderRadius: 1.5, p: 2, textAlign: 'center' }}>
            <Typography
                variant="caption"
                color="text.secondary"
            >
                {text}
            </Typography>
        </Box>
    );
    // jsonHidden deny-list: hidden payload series are filtered from the chart (builder) and
    // listed below for restore.
    const visibleNames = jsonSeriesNames.filter(n => !state.jsonHidden.includes(n));
    const hiddenNames = jsonSeriesNames.filter(n => state.jsonHidden.includes(n));
    // Duplicate payload names (F11): the overlay, the axis binding and the hide deny-list are all
    // NAME-keyed — two payload series sharing a name share style + axis binding, and hiding one
    // hits BOTH. Advisory only (the payload owns the names; no index-keying here).
    const duplicateNames = jsonSeriesNames.filter((n, i) => jsonSeriesNames.indexOf(n) !== i);
    const defaultType = state.chartType as EchartsCartesianType;
    const isPie = state.chartType === 'pie';
    const caps = resolveCardCapabilities('json', editorialOf(state.chartType).seriesCard, visibleNames.length);
    // The binding sight is the SHARED jsonBindingView (the `||` name semantics) — a hand-mapped
    // `??` variant would diverge on an overlay entry with an empty-string name. The label
    // carries the 1-BASED AXIS NUMBER (B1).
    const overlaySeries = jsonBindingView(jsonSeriesNames, state.jsonSeriesStyle, state.jsonHidden);
    const ctx: SeriesCardContext = {
        pickerCtx,
        defaultType,
        yAxes: state.yAxes,
        axisDisplayNames: state.yAxes.map((a, ai) => axisOptionLabel(ai, a, overlaySeries)),
        labelColorFallback,
        stackMode: state.stackMode,
        chart: state,
    };

    return (
        <Box>
            <Box sx={{ mb: 1.5 }}>
                <InfoBox text={Generic.t('echarts_json_series_hint')} />
            </Box>
            {!jsonError && state.jsonOid && duplicateNames.length > 0 && (
                <Box sx={{ mb: 1.5 }}>
                    <InfoBox
                        tone="warning"
                        text={Generic.t('echarts_json_duplicate_names')}
                    />
                </Box>
            )}
            {jsonError ? (
                <Alert
                    severity="error"
                    variant="outlined"
                    sx={{ py: 0 }}
                >
                    {Generic.t('echarts_json_parse_error')}: {jsonError}
                </Alert>
            ) : !state.jsonOid ? (
                dashed(Generic.t('echarts_json_no_oid'))
            ) : jsonSeriesNames.length === 0 ? (
                dashed(Generic.t('echarts_json_series_empty'))
            ) : isPie ? (
                // pie-json: flat slice rows (name + colour + per-slice raw, no expand — the
                // Verlauf rows' anatomy, ADR-0082 decision 3; not a SeriesCard, ADR-0100 decision 1).
                visibleNames.map((name, i) => {
                    const m = state.jsonSeriesStyle[name] ?? {};
                    return (
                        <Box
                            key={name}
                            sx={{ mb: 1, p: 1.5, border: 1, borderColor: 'divider', borderRadius: 1.5 }}
                        >
                            <FieldGrid min={140}>
                                <Box>
                                    <FieldLabel>{Generic.t('echarts_editor_series_name')}</FieldLabel>
                                    <Typography
                                        variant="body2"
                                        noWrap
                                        title={name}
                                        sx={{ py: 0.75 }}
                                    >
                                        {name}
                                    </Typography>
                                </Box>
                                <Box>
                                    <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                            <ColorField
                                                value={m.color}
                                                fallback={slot(i)}
                                                onChange={v => onUpdateJson(name, { color: v ?? undefined })}
                                                ctx={pickerCtx}
                                            />
                                        </Box>
                                        {/* The same restorable hide as the cards (B4) — an eye, not a trash can. */}
                                        <IconButton
                                            size="small"
                                            onClick={() => onHideJson(name)}
                                            aria-label={Generic.t('echarts_editor_series_hide')}
                                            sx={{ flexShrink: 0 }}
                                        >
                                            <HideIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </FieldGrid>
                            <JsonTab
                                meta={m}
                                onPatch={p => onUpdateJson(name, p)}
                                // Static by construction: this branch only mounts serien-förmig
                                // (the tabellarisch family renders its ring cards) — a payload
                                // series here IS a slice.
                                slot="pie-slice"
                            />
                        </Box>
                    );
                })
            ) : (
                // cartesian-json: SeriesCards (style editable; no add/delete — payload is king).
                visibleNames.map((name, i) => {
                    const m = state.jsonSeriesStyle[name] ?? {};
                    return (
                        <SeriesCard
                            key={name}
                            caps={caps}
                            ctx={ctx}
                            meta={m}
                            title={m.name || name}
                            subtitle={name}
                            colorFallback={slot(i)}
                            index={i}
                            count={visibleNames.length}
                            open={!!expanded[i]}
                            onToggle={() => onToggleCard(i)}
                            cardFocus={cardFocus}
                            onPatch={p => onUpdateJson(name, p)}
                            onRebindAxis={yi => onRebindJsonAxis(name, yi)}
                            onHide={() => onHideJson(name)}
                            basis={{ nameClearsToUndefined: true, namePlaceholder: name }}
                            rawSlot={`cartesian-${m.type ?? defaultType}` as SeriesTemplateSlot}
                            // The Stapelmodus applies in JSON too (ADR-0084 addendum 3) — the bar
                            // catalog's stackStrategy hint follows it here.
                            rawHint={
                                (m.type ?? defaultType) === 'bar' ? Generic.t('echarts_stackstrategy_hint') : undefined
                            }
                        />
                    );
                })
            )}
            {hiddenNames.length > 0 && (
                <Box sx={{ mt: 1.5, p: 1, border: '1px dashed', borderColor: 'divider', borderRadius: 1 }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mb: 0.5 }}
                    >
                        {Generic.t('echarts_json_hidden')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {hiddenNames.map(name => (
                            <Chip
                                key={name}
                                label={name}
                                size="small"
                                variant="outlined"
                                onDelete={() => onShowJson(name)}
                                deleteIcon={<RestoreIcon />}
                            />
                        ))}
                    </Box>
                </Box>
            )}
        </Box>
    );
};
