/**
 * JSON-mode series cards (cartesian + pie) — one editable card per payload series (ADR-0011/0019).
 *
 * @module EchartsCollectionWidget/editor/sections/series/JsonSeriesCards
 * @remarks
 * The payload owns series identity (count + data); the name-keyed overlay (`jsonSeriesStyle`) owns
 * presentation. Cards share the cartesian internals with the history card
 * ({@link CartesianBasisFields}/{@link CartesianSeriesKnobs}) — minus the OID row. The trash on a
 * card header HIDES the series (jsonHidden deny-list, restorable via the chips row) — payload
 * series can never be truly deleted. Pie-json renders compact slice rows (name + colour, no
 * expand).
 */
import type { FC, ReactElement } from 'react';
import { Alert, Box, Chip, IconButton, Typography } from '@mui/material';
import { DeleteOutline as DeleteIcon, Restore as RestoreIcon } from '@mui/icons-material';

import Generic from '../../../../Generic';
import type { EchartsCartesianType, EchartsSeriesMeta } from '../../../../types/field-definitions/echarts-fields';
import { EditorCard, FieldGrid, FieldLabel, InfoBox, SectionTabs } from '../../../../components/controls';
import ColorField from '../../colorFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorState } from '../../editorState';
import {
    CartesianBasisFields,
    CartesianSeriesKnobs,
    SeriesTransformFields,
    SeriesValueFormatFields,
} from './CartesianSeriesCard';
import { axisOptionLabel, jsonBindingView } from '../../axisLayout';
import { SeriesRawOverride, Swatch } from './shared';
import { snippetPatch } from '../../snippetComposition';

/**
 * The JSON series cards' field ownership (ADR-0049 slice) — read-only: every write goes
 * through the dispatcher callbacks (overlay patch / hide / rebind). Reads: the jsonOid
 * empty-state branch, the family split, the overlay + deny-list, and the axis dropdowns.
 */
export type JsonSeriesCardsSlice = Pick<
    EditorState,
    'jsonOid' | 'chartType' | 'yAxes' | 'jsonHidden' | 'jsonSeriesStyle'
>;

interface JsonSeriesCardsProps {
    state: JsonSeriesCardsSlice;
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
    onUpdateJson: (name: string, patch: Partial<EchartsSeriesMeta>) => void;
    /** Rebind a JSON payload series to a different axis (sticky; the freed axis dies, ADR-0069). */
    onRebindJsonAxis: (name: string, yAxisIndex: number) => void;
    onHideJson: (name: string) => void;
    onShowJson: (name: string) => void;
}

const JsonSeriesCards: FC<JsonSeriesCardsProps> = ({
    state,
    pickerCtx,
    slot,
    labelColorFallback,
    jsonSeriesNames,
    jsonError,
    expanded,
    onToggleCard,
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
    // jsonHidden deny-list (Problem-2): hidden payload series are filtered from the chart (builder)
    // and listed below for restore. The trash on a card header hides a series.
    const visibleNames = jsonSeriesNames.filter(n => !state.jsonHidden.includes(n));
    const hiddenNames = jsonSeriesNames.filter(n => state.jsonHidden.includes(n));
    // Duplicate payload names (F11): the overlay, the axis binding and the hide deny-list are all
    // NAME-keyed — two payload series sharing a name share style + axis binding, and hiding one
    // hits BOTH. Advisory only (the payload owns the names; no index-keying here).
    const duplicateNames = jsonSeriesNames.filter((n, i) => jsonSeriesNames.indexOf(n) !== i);
    const defaultType = state.chartType as EchartsCartesianType;
    const isPie = state.chartType === 'pie';
    // Effective axis names for the per-series binding dropdown (ADR-0025/0026): explicit →
    // inherited from the owner overlay entry → 1-based index. The label carries the 1-BASED
    // AXIS NUMBER (B1): unnamed payload series can share effective labels across axes, and a
    // rebind death re-numbers every follower (ADR-0069). The binding sight is the SHARED
    // jsonBindingView (the `||` name semantics) — a hand-mapped `??` variant would diverge on
    // an overlay entry with an empty-string name.
    const overlaySeries = jsonBindingView(jsonSeriesNames, state.jsonSeriesStyle, state.jsonHidden);
    const axisDisplayNames = state.yAxes.map((a, ai) => axisOptionLabel(ai, a, overlaySeries));

    return (
        <Box>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 1.5 }}
            >
                {Generic.t('echarts_json_series_hint')}
            </Typography>
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
                // pie-json: slice rows (name + colour, no OID, no expand).
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
                                        <IconButton
                                            size="small"
                                            onClick={() => onHideJson(name)}
                                            aria-label={Generic.t('echarts_editor_series_remove')}
                                            sx={{ flexShrink: 0 }}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </FieldGrid>
                        </Box>
                    );
                })
            ) : (
                // cartesian-json: full cards (style editable; no add/delete — payload is king).
                visibleNames.map((name, i) => {
                    const m = state.jsonSeriesStyle[name] ?? {};
                    return (
                        <EditorCard
                            key={name}
                            open={!!expanded[i]}
                            onToggle={() => onToggleCard(i)}
                            swatch={<Swatch color={m.color ?? slot(i)} />}
                            title={m.name || name}
                            subtitle={name}
                            actions={
                                <IconButton
                                    size="small"
                                    onClick={() => onHideJson(name)}
                                    aria-label={Generic.t('echarts_editor_series_remove')}
                                    sx={{ p: 0.25 }}
                                >
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            }
                        >
                            {/* Karten-Tabs (ADR-0073), mode-adapted: JSON swaps the Daten tab for
                                the value TRANSFORMS (no fetch to shape, but the pipeline applies
                                the transforms in JSON mode too — they get the Daten slot's
                                position instead of vanishing; documented spec deviation, see
                                spec.md). The Werte facts stay their own tab, like Verlauf. */}
                            <SectionTabs
                                tabs={[
                                    { key: 'basis', label: Generic.t('echarts_grp_basis') },
                                    { key: 'transform', label: Generic.t('echarts_grp_transform') },
                                    { key: 'presentation', label: Generic.t('echarts_grp_presentation') },
                                    { key: 'values', label: Generic.t('echarts_tab_values') },
                                    { key: 'advanced', label: Generic.t('echarts_tab_advanced') },
                                ]}
                            >
                                <CartesianBasisFields
                                    meta={m}
                                    defaultType={defaultType}
                                    onPatch={p =>
                                        // A yAxisIndex change rebinds (the freed axis dies, ADR-0069);
                                        // every other field updates the overlay entry in place.
                                        p.yAxisIndex !== undefined
                                            ? onRebindJsonAxis(name, p.yAxisIndex)
                                            : onUpdateJson(name, p)
                                    }
                                    pickerCtx={pickerCtx}
                                    colorFallback={slot(i)}
                                    showType
                                    yAxes={state.yAxes}
                                    axisDisplayNames={axisDisplayNames}
                                    nameClearsToUndefined
                                />
                                <SeriesTransformFields
                                    meta={m}
                                    onPatch={p => onUpdateJson(name, p)}
                                />
                                <CartesianSeriesKnobs
                                    meta={m}
                                    defaultType={defaultType}
                                    onPatch={p => onUpdateJson(name, p)}
                                    pickerCtx={pickerCtx}
                                    colorFallback={slot(i)}
                                    labelColorFallback={labelColorFallback}
                                />
                                <SeriesValueFormatFields
                                    meta={m}
                                    onPatch={p => onUpdateJson(name, p)}
                                />
                                <SeriesRawOverride
                                    slot={`cartesian-${m.type ?? defaultType}` as SeriesTemplateSlot}
                                    raw={m.raw}
                                    onChange={v => onUpdateJson(name, { raw: v })}
                                    snippets={m.snippets}
                                    onCommit={r => onUpdateJson(name, snippetPatch(r))}
                                />
                            </SectionTabs>
                        </EditorCard>
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

export default JsonSeriesCards;
