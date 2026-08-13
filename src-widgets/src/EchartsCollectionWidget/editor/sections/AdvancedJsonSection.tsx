/**
 * Advanced JSON section — the demoted expert escape hatch (ADR-0007/0010/0014/0017).
 *
 * @module EchartsCollectionWidget/editor/sections/AdvancedJsonSection
 * @remarks
 * Strictly supplemental and **chart-wide only** (ADR-0017): the GUI owns all presentation, and
 * per-series presentation now lives on the series cards (Series raw), so this U textarea is the escape
 * hatch for echarts keys the GUI does not expose AT THE CHART LEVEL. Its one-click templates are the
 * complete `title` / `legend` / `tooltip` scaffolds (every GUI-uncovered subkey, default-pre-filled —
 * ADR-0030/0032) plus the radar presets; the free text also accepts the standalone `graphic` / `aria` /
 * `axisPointer` / `textStyle` components and exotic `animationEasing`. title/legend/tooltip are only
 * PARTIALLY managed, so their non-GUI subkeys DO merge through.
 * `series` is a fully-managed key (a U `series` is ignored — use the per-card Series raw instead).
 * Carries the honesty affordances: the managed-keys box, chart-wide one-click templates, JSON
 * validity, and the 3-state sub-key merge preview (ADR-0030: ✓ effective / ◐ partial / ✗ managed).
 */
import type { FC } from 'react';
import { Box, Button, Chip, Typography } from '@mui/material';

import Generic from '../../../Generic';
import { familyOf, parseUserJson } from '../../optionBuilder';
import JsonEditor from '../JsonEditor';
import { MANAGED_KEYS, classifyUserKeys } from '../advancedJsonAnalysis';
import type { EchartsChartFamily, EchartsChartType } from '../../../types/field-definitions/echarts-fields';
import type { SetEditor } from '../editorState';

interface AdvancedJsonSectionProps {
    userText: string;
    setUserText: (value: string) => void;
    set: SetEditor;
    /** The chart type drives the type-aware template catalog (ADR-0014). */
    chartType: EchartsChartType;
}

/** Top-level option keys the GUI owns — re-exported from the analysis module (single source). */

interface Template {
    label: string;
    json: string;
}

// ── Family-agnostic templates (chart-level GUI-uncovered keys → clean ✓) ──
const TPL_ALL: Template[] = [
    {
        // ADR-0030: complete scaffold of EVERY title subkey the GUI does NOT own (text/placement/
        // textStyle colour-size-weight-style are GUI-owned → omitted), pre-filled with the echarts
        // default (a best-effort literal where the real default is a theme token / 'auto' / undefined).
        label: 'echarts_tpl_title',
        json: '{\n  "title": {\n    "show": true,\n    "link": "",\n    "target": "blank",\n    "subtext": "",\n    "sublink": "",\n    "subtarget": "blank",\n    "triggerEvent": false,\n    "textVerticalAlign": "auto",\n    "zlevel": 0,\n    "z": 2,\n    "itemGap": 10,\n    "padding": 5,\n    "backgroundColor": "transparent",\n    "borderColor": "#ccc",\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "silent": false,\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 18,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "none"\n    },\n    "subtextStyle": {\n      "color": "#aaa",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 12,\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 12,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    }\n  }\n}',
    },
    {
        // ADR-0030: complete scaffold of EVERY legend subkey the GUI does NOT own (show/data/
        // placement/orient/items/frame + textStyle colour-size-weight-style are GUI-owned → omitted).
        label: 'echarts_tpl_legend',
        json: '{\n  "legend": {\n    "type": "plain",\n    "zlevel": 0,\n    "z": 2,\n    "align": "auto",\n    "width": "auto",\n    "height": "auto",\n    "selectedMode": true,\n    "selected": {},\n    "formatter": null,\n    "symbolRotate": 0,\n    "inactiveBorderColor": "#ccc",\n    "inactiveBorderWidth": "auto",\n    "borderType": "solid",\n    "borderDashOffset": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "scrollDataIndex": 0,\n    "pageButtonItemGap": 5,\n    "pageButtonGap": null,\n    "pageButtonPosition": "end",\n    "pageFormatter": "{current}/{total}",\n    "pageIcons": {\n      "horizontal": ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],\n      "vertical": ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]\n    },\n    "pageIconColor": "#2f4554",\n    "pageIconInactiveColor": "#aaa",\n    "pageIconSize": 15,\n    "animation": true,\n    "animationDurationUpdate": 800,\n    "selector": false,\n    "selectorPosition": "auto",\n    "selectorItemGap": 7,\n    "selectorButtonGap": 10,\n    "silent": false,\n    "itemStyle": {\n      "color": "inherit",\n      "opacity": "inherit",\n      "borderColor": "inherit",\n      "borderWidth": "auto",\n      "borderType": "inherit",\n      "borderDashOffset": "inherit",\n      "borderCap": "inherit",\n      "borderJoin": "inherit",\n      "borderMiterLimit": "inherit"\n    },\n    "lineStyle": {\n      "width": "auto",\n      "color": "inherit",\n      "opacity": "inherit",\n      "type": "inherit",\n      "cap": "inherit",\n      "join": "inherit",\n      "dashOffset": "inherit",\n      "miterLimit": "inherit",\n      "inactiveColor": "#ccc",\n      "inactiveWidth": 2\n    },\n    "textStyle": {\n      "align": "left",\n      "verticalAlign": "auto",\n      "lineHeight": 14,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "overflow": "none"\n    },\n    "selectorLabel": {\n      "show": true,\n      "color": "#666",\n      "fontSize": 12,\n      "borderColor": "#ccc",\n      "borderWidth": 1,\n      "borderRadius": 10,\n      "padding": [3, 5, 3, 5]\n    },\n    "pageTextStyle": {\n      "color": "#666"\n    },\n    "emphasis": {\n      "selectorLabel": {\n        "show": true,\n        "color": "#666"\n      }\n    },\n    "tooltip": {\n      "show": false\n    }\n  }\n}',
    },
    {
        // ADR-0032: complete scaffold of EVERY tooltip subkey the GUI does NOT own (trigger/formatter/
        // valueFormatter/show are GUI-owned → omitted), pre-filled with the echarts default (best-effort
        // literal where the real default is a theme token / 'auto' / undefined). axisPointer is filled to
        // its direct keys + a full `label` (the crosshair case); the line/cross/shadow/handle style sub-
        // trees and fontFamily are omitted. Verified against TooltipModel / CommonAxisPointerOption.
        label: 'echarts_tpl_tooltip',
        json: '{\n  "tooltip": {\n    "showContent": true,\n    "triggerOn": "mousemove|click",\n    "alwaysShowContent": false,\n    "showDelay": 0,\n    "hideDelay": 100,\n    "enterable": false,\n    "confine": false,\n    "renderMode": "auto",\n    "transitionDuration": 0.4,\n    "displayTransition": true,\n    "backgroundColor": "rgba(50, 50, 50, 0.7)",\n    "borderColor": "#333",\n    "borderWidth": 1,\n    "borderRadius": 4,\n    "padding": 5,\n    "extraCssText": "",\n    "shadowBlur": 10,\n    "shadowColor": "rgba(0, 0, 0, 0.2)",\n    "shadowOffsetX": 1,\n    "shadowOffsetY": 2,\n    "textStyle": {\n      "color": "#fff",\n      "fontStyle": "normal",\n      "fontWeight": "normal",\n      "fontSize": 14,\n      "align": "left",\n      "verticalAlign": "top",\n      "lineHeight": 18,\n      "backgroundColor": "transparent",\n      "borderColor": "#333",\n      "borderWidth": 0,\n      "borderType": "solid",\n      "borderDashOffset": 0,\n      "borderRadius": 0,\n      "padding": 0,\n      "shadowBlur": 0,\n      "shadowColor": "transparent",\n      "shadowOffsetX": 0,\n      "shadowOffsetY": 0,\n      "textBorderColor": "transparent",\n      "textBorderWidth": 0,\n      "textBorderType": "solid",\n      "textBorderDashOffset": 0,\n      "textBorderRadius": 0,\n      "textShadowBlur": 0,\n      "textShadowColor": "transparent",\n      "textShadowOffsetX": 0,\n      "textShadowOffsetY": 0,\n      "overflow": "break"\n    },\n    "axisPointer": {\n      "type": "line",\n      "axis": "auto",\n      "snap": false,\n      "triggerOn": "mousemove|click",\n      "triggerTooltip": true,\n      "triggerEmphasis": true,\n      "value": null,\n      "status": "hide",\n      "animation": "auto",\n      "animationDurationUpdate": 200,\n      "animationEasingUpdate": "cubicOut",\n      "label": {\n        "show": true,\n        "precision": "auto",\n        "formatter": null,\n        "margin": 3,\n        "color": "#fff",\n        "fontStyle": "normal",\n        "fontWeight": "normal",\n        "fontSize": 12,\n        "lineHeight": 12,\n        "align": "left",\n        "verticalAlign": "top",\n        "backgroundColor": "auto",\n        "borderColor": "#333",\n        "borderWidth": 0,\n        "borderType": "solid",\n        "borderDashOffset": 0,\n        "borderRadius": 3,\n        "padding": 3,\n        "shadowBlur": 0,\n        "shadowColor": "transparent",\n        "shadowOffsetX": 0,\n        "shadowOffsetY": 0,\n        "textBorderColor": "transparent",\n        "textBorderWidth": 0,\n        "textBorderType": "solid",\n        "textBorderDashOffset": 0,\n        "textBorderRadius": 0,\n        "textShadowBlur": 0,\n        "textShadowColor": "transparent",\n        "textShadowOffsetX": 0,\n        "textShadowOffsetY": 0,\n        "overflow": "truncate"\n      }\n    }\n  }\n}',
    },
    {
        // ADR-0030: complete scaffold of EVERY toolbox subkey the GUI does NOT own — the GUI owns NONE
        // (toolbox is wholly user-owned, so it classifies ✓ effective). Pre-filled with the echarts default
        // (best-effort literal where the real default is a theme token / 'auto' / undefined). Three
        // deliberate deviations for the ioBroker vis context: (1) theme-token COLOUR keys (iconStyle,
        // emphasis, toolbox.borderColor, dataView colours, dataZoom.brushStyle.color) are OMITTED so the
        // live theme (light/dark) drives them; (2) dataView.readOnly is `true` (echarts default false) —
        // vis state is read-only, an editable data view only misleads; (3) magicType & brush ship
        // `show:false` (echarts default true) so the template does not flood the chart with a 6-icon bar.
        // Also omitted as pathologic: per-feature `icon` SVG paths, locale-auto `title`/`lang` (echarts
        // localises), and the dataView `optionToContent`/`contentToOption` functions. Verified against
        // echarts 6.1.0 ToolboxModel + the six features' defaultOption.
        label: 'echarts_tpl_toolbox',
        json: '{\n  "toolbox": {\n    "show": true,\n    "orient": "horizontal",\n    "itemSize": 15,\n    "itemGap": 10,\n    "showTitle": true,\n    "right": 0,\n    "top": 0,\n    "zlevel": 0,\n    "z": 2,\n    "silent": false,\n    "backgroundColor": "transparent",\n    "padding": 15,\n    "borderWidth": 0,\n    "borderType": "solid",\n    "borderRadius": 0,\n    "shadowBlur": 0,\n    "shadowColor": "transparent",\n    "shadowOffsetX": 0,\n    "shadowOffsetY": 0,\n    "tooltip": { "show": false, "position": "bottom" },\n    "feature": {\n      "saveAsImage": { "show": true, "type": "png", "name": "", "pixelRatio": null, "excludeComponents": ["toolbox"] },\n      "restore": { "show": true },\n      "dataView": { "show": true, "readOnly": true },\n      "dataZoom": { "show": true, "filterMode": "filter" },\n      "magicType": { "show": false, "type": ["line", "bar"] },\n      "brush": { "show": false, "type": ["rect", "polygon", "lineX", "lineY"] }\n    }\n  }\n}',
    },
];

// ── Family-specific templates (ADR-0017: chart-wide/component keys only — the series-riding
//    presets moved to the per-card Series raw catalogs in seriesTemplates.ts). ──
const TEMPLATES_BY_FAMILY: Record<EchartsChartFamily, Template[]> = {
    cartesian: [],
    pie: [],
    gauge: [],
    radar: [
        {
            label: 'echarts_tpl_radar_splitarea',
            json: '{\n  "radar": { "splitArea": { "show": true, "areaStyle": { "color": ["#f5f5f5", "#e8e8e8"] } } }\n}',
        },
        {
            label: 'echarts_tpl_radar_axisname',
            json: '{\n  "radar": { "axisName": { "formatter": "{value}", "color": "#666" } }\n}',
        },
    ],
};

const AdvancedJsonSection: FC<AdvancedJsonSectionProps> = ({ userText, setUserText, set: _set, chartType }) => {
    const parsed = parseUserJson(userText);
    const chips = parsed.ok ? classifyUserKeys(parsed.value) : [];

    /** Merge a snippet's keys into the current U text (accumulates; invalid current text is replaced). */
    const insertSnippet = (json: string): void => {
        const cur = parseUserJson(userText);
        const base = cur.ok ? cur.value : {};
        const snip = parseUserJson(json);
        const merged = { ...base, ...(snip.ok ? snip.value : {}) };
        setUserText(JSON.stringify(merged, null, 2));
    };

    const templates = [...TEMPLATES_BY_FAMILY[familyOf(chartType)], ...TPL_ALL];

    return (
        <Box>
            <Box
                sx={{
                    mb: 1,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderLeft: 3,
                    borderColor: 'text.disabled',
                    borderRadius: 0.5,
                }}
            >
                <Typography
                    variant="caption"
                    color="text.secondary"
                >
                    {Generic.t('echarts_editor_managed_keys')}
                </Typography>
                <Typography
                    variant="caption"
                    component="div"
                >
                    <code>{MANAGED_KEYS.join(' · ')}</code>
                </Typography>
            </Box>

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mb: 0.5 }}
            >
                {Generic.t('echarts_advanced_templates')}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                {templates.map(s => (
                    <Button
                        key={s.label}
                        size="small"
                        variant="outlined"
                        onClick={() => insertSnippet(s.json)}
                        sx={{ textTransform: 'none' }}
                    >
                        {Generic.t(s.label)}
                    </Button>
                ))}
            </Box>

            <JsonEditor
                value={userText}
                onChange={setUserText}
                minRows={6}
                placeholder={'{\n  "tooltip": { … }\n}'}
            />
            <Typography
                variant="caption"
                sx={{ color: parsed.ok ? 'success.main' : 'error.main', display: 'block', mt: 0.5 }}
            >
                {parsed.ok ? Generic.t('echarts_editor_valid_json') : `✗ ${parsed.error}`}
            </Typography>

            {parsed.ok && chips.length > 0 && (
                <Box sx={{ mt: 1 }}>
                    <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: 'block', mb: 0.5 }}
                    >
                        {Generic.t('echarts_advanced_effect')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 0.5 }}>
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
                    <Typography
                        variant="caption"
                        color="text.secondary"
                    >
                        {Generic.t('echarts_advanced_effect_legend')}
                    </Typography>
                </Box>
            )}

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: 'block', mt: 1 }}
            >
                {Generic.t('echarts_editor_advanced_note')}
            </Typography>
        </Box>
    );
};

export default AdvancedJsonSection;
