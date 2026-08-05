/**
 * JSON-mode series cards (cartesian + pie) — one editable card per payload series (ADR-0011/0019).
 *
 * @module EchartsCollectionWidget/editor/sections/series/JsonSeriesCards
 * @remarks
 * The payload owns series identity (count + data); the name-keyed overlay (`jsonSeriesStyle`) owns
 * presentation. Cards share the cartesian internals with the history/live card
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
import { EditorCard, FieldGrid, FieldLabel } from '../../../../components/controls';
import ColorField from '../../colorFields';
import type { OidPickerCtx } from '../../OidPicker';
import type { SeriesTemplateSlot } from '../../seriesTemplates';
import type { EditorState } from '../../editorState';
import { CartesianBasisFields, CartesianSeriesKnobs } from './CartesianSeriesCard';
import { SeriesRawOverride, Swatch } from './shared';

interface JsonSeriesCardsProps {
    state: EditorState;
    pickerCtx: OidPickerCtx;
    /** Palette-slot colour of payload series i (the inherit fallback). */
    slot: (i: number) => string;
    /** The payload series names, in payload order. Drives the card list. */
    jsonSeriesNames: string[];
    /** Parse error from the jsonOid payload (shown instead of a silent blank). */
    jsonError?: string;
    expanded: Record<number, boolean>;
    onToggleCard: (i: number) => void;
    onUpdateJson: (name: string, patch: Partial<EchartsSeriesMeta>) => void;
    onHideJson: (name: string) => void;
    onShowJson: (name: string) => void;
}

const JsonSeriesCards: FC<JsonSeriesCardsProps> = ({
    state,
    pickerCtx,
    slot,
    jsonSeriesNames,
    jsonError,
    expanded,
    onToggleCard,
    onUpdateJson,
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
    const defaultType = state.chartType as EchartsCartesianType;
    const isPie = state.chartType === 'pie';

    return (
        <Box>
            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 1.5 }}
            >
                {Generic.t('echarts_json_series_hint')}
            </Typography>
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
                            <CartesianBasisFields
                                meta={m}
                                defaultType={defaultType}
                                onPatch={p => onUpdateJson(name, p)}
                                pickerCtx={pickerCtx}
                                colorFallback={slot(i)}
                                showType
                                yAxes={state.yAxes}
                                nameClearsToUndefined
                            />
                            <CartesianSeriesKnobs
                                meta={m}
                                defaultType={defaultType}
                                onPatch={p => onUpdateJson(name, p)}
                                pickerCtx={pickerCtx}
                            />
                            <SeriesRawOverride
                                slot={`cartesian-${m.type ?? defaultType}` as SeriesTemplateSlot}
                                raw={m.raw}
                                onChange={v => onUpdateJson(name, { raw: v })}
                            />
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
