/**
 * The Format tab of the series card (ADR-0100; formerly „Werte") — the per-series Wert-Formatter
 * facts (ADR-0057/0058). Identical in every Kartenquelle.
 *
 * @module EchartsCollectionWidget/editor/sections/series/tabs/FormatTab
 */
import type { FC } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { DeleteOutlineOutlined as DeleteIcon } from '@mui/icons-material';
import Generic from '../../../../../Generic';
import type { EchartsSeriesMeta } from '../../../../../types/field-definitions/echarts-fields';
import { FieldGrid, FieldLabel, OptionalNumberField, TextField2 } from '../../../../../components/controls';

/**
 * The Werte tab content of a cartesian series card (ADR-0057/0058, parity Build B) — the
 * per-series Wert-Formatter facts: unit + decimals, plus the adapter's text semantics — „Text bei
 * wahr/falsch" on a BOOLEAN OID, the state-names editor (value → text, prefilled from
 * `common.states`) on an ENUM OID; both gated by the OID type detected on selection. Shared by
 * the Verlauf card and the JSON-mode card (the facts ride the same meta and flow through
 * every cartesian surface: tooltip row, legend value, label values, and the shared-facts axis
 * inheritance).
 */
export const FormatTab: FC<{
    meta: EchartsSeriesMeta;
    onPatch: (patch: Partial<EchartsSeriesMeta>) => void;
}> = ({ meta, onPatch }) => {
    /** Rewrite the states map with one entry's key or value edited (the Zustandsnamen rows). */
    const patchState = (key: string, next: { key?: string; text?: string }): void => {
        const entries = Object.entries(meta.states ?? {});
        const out: Record<string, string> = {};
        for (const [k, v] of entries) {
            if (k === key) {
                const nk = (next.key ?? k).trim();
                if (nk) {
                    out[nk] = next.text ?? v;
                } // a cleared key DROPS the mapping (delete affordance for typos)
            } else {
                out[k] = v;
            }
        }
        onPatch({ states: Object.keys(out).length ? out : undefined });
    };
    const stateRows = Object.entries(meta.states ?? {}).sort(([a], [b]) => Number(a) - Number(b));
    return (
        <Box>
            <FieldGrid min={140}>
                <TextField2
                    label={Generic.t('echarts_series_unit')}
                    value={meta.unit ?? ''}
                    onChange={v => onPatch({ unit: v.trim() || undefined })}
                />
                <OptionalNumberField
                    label={Generic.t('echarts_series_decimals')}
                    value={meta.decimals}
                    onChange={v => onPatch({ decimals: v === undefined || v >= 0 ? v : 0 })}
                />
            </FieldGrid>
            {meta.oidType === 'boolean' && (
                <FieldGrid
                    min={140}
                    sx={{ mt: 1.5 }}
                >
                    <TextField2
                        label={Generic.t('echarts_series_text_true')}
                        value={meta.trueText ?? ''}
                        onChange={v => onPatch({ trueText: v.trim() || undefined })}
                    />
                    <TextField2
                        label={Generic.t('echarts_series_text_false')}
                        value={meta.falseText ?? ''}
                        onChange={v => onPatch({ falseText: v.trim() || undefined })}
                    />
                </FieldGrid>
            )}
            {meta.oidType === 'enum' && (
                <Box sx={{ mt: 1.5 }}>
                    <FieldLabel>{Generic.t('echarts_series_states_title')}</FieldLabel>
                    {stateRows.map(([key, text], row) => (
                        // Positional key: the mapping key CHANGES while the user types in the
                        // value field — keying by it would remount (and defocus) the row on every
                        // keystroke. Only a sort-shifting rename still moves the row.
                        <Box
                            key={row}
                            sx={{ display: 'flex', gap: 1, alignItems: 'flex-end', mb: 1 }}
                        >
                            <Box sx={{ flex: 1, minWidth: 0 }}>
                                <TextField2
                                    label={Generic.t('echarts_series_states_value')}
                                    value={key}
                                    onChange={v => patchState(key, { key: v })}
                                />
                            </Box>
                            <Box sx={{ flex: 1.6, minWidth: 0 }}>
                                <TextField2
                                    label={Generic.t('echarts_series_states_text')}
                                    value={text}
                                    onChange={v => patchState(key, { text: v })}
                                />
                            </Box>
                            <IconButton
                                size="small"
                                aria-label={Generic.t('echarts_editor_series_remove')}
                                onClick={() => patchState(key, { key: '' })}
                                sx={{ mb: 0.5 }}
                            >
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    ))}
                    <Button
                        size="small"
                        onClick={() => {
                            // The next free integer key — a fresh row is a real mapping from the
                            // start (an empty key would activate the texts with a dead entry).
                            const max = Math.max(
                                -1,
                                ...Object.keys(meta.states ?? {})
                                    .map(Number)
                                    .filter(Number.isFinite),
                            );
                            onPatch({ states: { ...(meta.states ?? {}), [String(max + 1)]: '' } });
                        }}
                    >
                        {Generic.t('echarts_series_states_add')}
                    </Button>
                </Box>
            )}
        </Box>
    );
};
