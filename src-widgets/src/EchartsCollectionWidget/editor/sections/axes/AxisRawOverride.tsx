/**
 * Axis raw override — the per-axis echarts-JSON escape hatch (ADR-0037).
 *
 * @module EchartsCollectionWidget/editor/sections/axes/AxisRawOverride
 * @remarks
 * Series-raw anatomy (ADR-0015/0017) one level down: a `+/−` toggle, a lazy-mounted
 * {@link JsonEditor}, the categorised axis template menu (`axisTemplates.ts`), a validity caption
 * — PLUS the state-aware ✓/◐/✗ key analysis (`axisRawAnalysis.ts`), a deliberate divergence from
 * the series sibling: the axis builder ALWAYS-emits keys (type/position/offset/alignTicks/
 * splitLine.show/axisTick.show/nameLocation/nameGap) that would silently eat raw keys, and its
 * managed set is partly conditional (colour/format/min/max…), so the chips resolve against the
 * card's actual state. The raw is deep-merged UNDER the built yAxis entry — the card wins every
 * collision; every builder-uncovered key (label/name fonts, minorTick, splitArea, logBase, …)
 * merges through.
 */
import { useState, type FC } from 'react';
import { Box, Button, Chip, Collapse, Typography } from '@mui/material';

import Generic from '../../../../Generic';
import JsonEditor from '../../JsonEditor';
import {
    AXIS_CATEGORY_I18N,
    AXIS_CATEGORY_ORDER,
    AXIS_TEMPLATES,
    injectAxisTemplate,
    parseRawObject,
} from '../../axisTemplates';
import { classifyAxisKeys } from '../../axisRawAnalysis';
import TemplateMenu from '../TemplateMenu';
import type { EchartsAxisConfig } from '../../../../types/field-definitions/echarts-fields';

/**
 * Collapsible per-axis raw echarts JSON override (ADR-0037). The analysis chips need the card
 * state (axis config + inherited colour/name) so conditional managed keys classify honestly.
 */
const AxisRawOverride: FC<{
    raw: string | undefined;
    onChange: (value: string) => void;
    /** The card's axis config — drives the state-aware ✓/◐/✗ classification. */
    axis: EchartsAxisConfig;
    /** Effective colour of the first bound series (the axis-colour default, ADR-0018). */
    seriesColor?: string;
    /** Effective name of the first bound series (the axis-name default, ADR-0018). */
    seriesName?: string;
}> = ({ raw, onChange, axis, seriesColor, seriesName }) => {
    const [open, setOpen] = useState(false);
    const trimmed = (raw ?? '').trim();
    const parsed = parseRawObject(raw ?? '');
    const valid = !trimmed || !!parsed;
    // State-aware key analysis (ADR-0037): ✓ effective · ◐ partial · ✗ card-managed.
    const chips = parsed ? classifyAxisKeys(parsed, { axis, seriesColor, seriesName }) : [];
    return (
        <Box sx={{ mt: 1 }}>
            <Button
                size="small"
                onClick={() => setOpen(v => !v)}
                sx={{ textTransform: 'none', color: 'text.secondary', minWidth: 0 }}
            >
                {open ? '−' : '+'} {Generic.t('echarts_axis_raw')}
            </Button>
            {/* mountOnEnter: the JsonEditor (Prism highlighting) is expensive — mount it only when
                the raw override is actually opened, never for a collapsed one (ADR-0019 lesson). */}
            <Collapse
                in={open}
                mountOnEnter
            >
                <TemplateMenu
                    templates={AXIS_TEMPLATES}
                    categoryOrder={AXIS_CATEGORY_ORDER}
                    categoryI18n={AXIS_CATEGORY_I18N}
                    onInject={json => onChange(injectAxisTemplate(raw, json))}
                />
                <JsonEditor
                    value={raw ?? ''}
                    onChange={onChange}
                    minRows={3}
                    placeholder={'{\n  "minorTick": { "show": true }\n}'}
                />
                <Typography
                    variant="caption"
                    sx={{ color: valid ? 'success.main' : 'error.main', display: 'block' }}
                >
                    {valid ? Generic.t('echarts_editor_valid_json') : `✗ ${Generic.t('echarts_axis_raw_invalid')}`}
                </Typography>
                {chips.length > 0 && (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
                        {chips.map(c => {
                            if (c.cls === 'effective') {
                                return (
                                    <Chip
                                        key={c.key}
                                        size="small"
                                        color="success"
                                        variant="outlined"
                                        label={`${c.key} ✓`}
                                    />
                                );
                            }
                            if (c.cls === 'partial') {
                                return (
                                    <Chip
                                        key={c.key}
                                        size="small"
                                        color="warning"
                                        variant="outlined"
                                        label={`${c.key} ◐`}
                                        title={`${Generic.t('echarts_advanced_gui_managed')} ${c.managed.join(', ')}`}
                                    />
                                );
                            }
                            return (
                                <Chip
                                    key={c.key}
                                    size="small"
                                    variant="outlined"
                                    label={`${c.key} ✗`}
                                    sx={{ opacity: 0.6, textDecoration: 'line-through' }}
                                />
                            );
                        })}
                    </Box>
                )}
                <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 0.5 }}
                >
                    {Generic.t('echarts_axis_raw_hint')}
                </Typography>
            </Collapse>
        </Box>
    );
};

export default AxisRawOverride;
