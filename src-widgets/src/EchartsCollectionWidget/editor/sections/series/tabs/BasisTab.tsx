/**
 * The Basis tab of the series card (ADR-0100) — identity + binding: the source row (Verlauf OID +
 * history instance, Tabelle yPath column), name, colour, type, Y-axis. The capability resolution
 * gates colour/type/axis (family profile × series count); the source supplies the source row.
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/BasisTab
 */
import type { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import Generic from '../../../../../Generic';
import type {
    EchartsAxisConfig,
    EchartsCartesianType,
    EchartsSeriesMeta,
} from '../../../../../types/field-definitions/echarts-fields';
import { FieldGrid, FieldLabel, InfoBox, LabeledSelect, TextField2 } from '../../../../../components/controls';
import ColorField from '../../../colorFields';
import OidPicker from '../../../OidPicker';
import type { OidPickerCtx } from '../../../OidPicker';
import { displayAxisIndex } from '../../../axisSight';

/**
 * The Basis tab content of a cartesian series card — identity + binding. Shared by the
 * Verlauf card (bound to `state.series[i]`, with OID row) and the JSON-mode card (bound to
 * the name-keyed overlay entry, no OID row — the payload owns the data).
 */
export const BasisTab: FC<{
    meta: EchartsSeriesMeta;
    defaultType: EchartsCartesianType;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
    pickerCtx: OidPickerCtx;
    /** Palette slot the colour picker falls back to (the inherit preview). */
    colorFallback: string;
    /** Show the per-series type override (history: only when ≥2 series; JSON: always). */
    showType: boolean;
    /**
     * Show the per-series colour field. Hidden for pie rings (ADR-0082 decision 1): the
     * category-stable palette (ADR-0075 decision 5) makes `meta.color` inert there — a colour
     * picker that paints nothing is a lie. The same gate family as {@link showAxis}.
     *
     * @default true
     */
    showColor?: boolean;
    yAxes: EchartsAxisConfig[];
    /**
     * Effective display name per axis (explicit → inherited-from-bound-series → index, ADR-0025)
     * for the binding-dropdown labels. Resolved by the owning card list (history and JSON
     * alike).
     */
    axisDisplayNames?: string[];
    /** OID binding row (history only — the JSON payload owns the data). */
    oid?: { value: string; onChange: (oid: string) => void; historyOnly: boolean };
    /**
     * Alternative source row for the families without an OID (ADR-0075): rendered in the OID
     * row's place — the tabellarische cards pass their yPath ColumnAutocomplete. Mutually
     * exclusive with {@link oid} by convention (one binding sight per family).
     */
    sourceRow?: ReactNode;
    /** Verlauf: show the per-series history-instance select (first field under the OID, ADR-0039). */
    showInstance?: boolean;
    /** Verlauf: selectable history instances (empty list = none installed → Auto only). */
    historyInstances?: string[];
    /** Verlauf: the instance list has LOADED — gates the missing-adapter hint (no loading flash). */
    instancesLoaded?: boolean;
    /** JSON overlay semantics: clearing the name writes `undefined` (fall back to the payload name). */
    nameClearsToUndefined?: boolean;
    /** Placeholder of the empty name field — JSON shows the payload name it falls back to (B10). */
    namePlaceholder?: string;
    /**
     * Show the per-series Y-axis binding select. Shown in every cartesian data mode — incl. JSON,
     * where a manual rebind is sticky and the freed axis dies (ADR-0026/0069). The gate
     * exists for non-cartesian future uses of the shared basis group.
     *
     * @default true
     */
    showAxis?: boolean;
}> = ({
    meta,
    defaultType,
    onPatch,
    pickerCtx,
    colorFallback,
    showType,
    showColor = true,
    yAxes,
    axisDisplayNames,
    oid,
    sourceRow,
    showInstance,
    historyInstances,
    instancesLoaded,
    nameClearsToUndefined,
    namePlaceholder,
    showAxis = true,
}) => (
    <Box>
        <FieldGrid>
            {oid && (
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <FieldLabel>{Generic.t('oid')}</FieldLabel>
                    <OidPicker
                        value={oid.value}
                        onChange={oid.onChange}
                        ctx={pickerCtx}
                        historyOnly={oid.historyOnly}
                    />
                </Box>
            )}
            {!oid && sourceRow && <Box sx={{ gridColumn: '1 / -1' }}>{sourceRow}</Box>}
            {showInstance && (
                <LabeledSelect
                    label={Generic.t('echarts_instance')}
                    value={meta.instance ?? ''}
                    onChange={v => onPatch({ instance: v || undefined })}
                    options={[
                        ['', Generic.t('echarts_instance_auto')],
                        ...(historyInstances ?? []).map(id => [id, id] as [string, string]),
                    ]}
                />
            )}
            {showInstance && instancesLoaded && !(historyInstances ?? []).length && (
                // Zero history adapters AFTER the list loaded (never during the load — that
                // empty is LOADING, not „none installed"): the select's silent „Auto"-only
                // shrink gets its honest explanation back.
                <Box sx={{ gridColumn: '1 / -1' }}>
                    <InfoBox text={Generic.t('echarts_instance_missing')} />
                </Box>
            )}
            <TextField2
                label={Generic.t('echarts_editor_series_name')}
                value={meta.name ?? ''}
                placeholder={namePlaceholder}
                onChange={v => onPatch({ name: nameClearsToUndefined ? v || undefined : v })}
            />
            {showColor && (
                <Box>
                    <FieldLabel>{Generic.t('echarts_editor_series_color')}</FieldLabel>
                    <ColorField
                        title={Generic.t('echarts_editor_series_color')}
                        value={meta.color}
                        fallback={colorFallback}
                        onChange={v => onPatch({ color: v ?? undefined })}
                        ctx={pickerCtx}
                    />
                </Box>
            )}
            {showType && (
                <LabeledSelect
                    label={Generic.t('echarts_editor_series_type')}
                    value={meta.type ?? defaultType}
                    onChange={v => onPatch({ type: v === defaultType ? undefined : (v as EchartsCartesianType) })}
                    options={[
                        ['line', Generic.t('echarts_type_line')],
                        ['bar', Generic.t('echarts_type_bar')],
                        ['scatter', Generic.t('echarts_type_scatter')],
                    ]}
                />
            )}
            {showAxis && (
                // Q6: the DISPLAY clamp mirrors the builder (`yi >= total ? 0 : yi`) — the select
                // shows the render truth (axis 1), the STORED value stays untouched (no silent
                // rewrite; the stale-index validation explains the divergence). The LAST entry is
                // „Neue Achse" (ADR-0069): its value is the append slot — choosing it grows the
                // axis array and binds this series in the rebind handler's single step, the
                // replacement of the retired „Achse hinzufügen" button.
                <LabeledSelect
                    label={Generic.t('echarts_editor_series_yaxis')}
                    value={String(displayAxisIndex(meta.yAxisIndex, yAxes.length))}
                    onChange={v => onPatch({ yAxisIndex: Number(v) })}
                    options={[
                        ...yAxes.map((ax, ai) => {
                            // Effective name (explicit → inherited → index, ADR-0025) when the
                            // caller resolves it; else the legacy "N · name" / "N" fallback.
                            const label =
                                axisDisplayNames?.[ai] ?? (ax.name ? `${ai + 1} · ${ax.name}` : String(ai + 1));
                            return [String(ai), label] as [string, string];
                        }),
                        [String(yAxes.length), Generic.t('echarts_axis_new')] as [string, string],
                    ]}
                />
            )}
        </FieldGrid>
    </Box>
);
