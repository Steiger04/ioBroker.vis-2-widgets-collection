/**
 * The xAxis Advanced-JSON scaffold (ADR-0035) — extracted from AdvancedJsonSection so the
 * "duplicates no GUI-owned key" audit is unit-testable without importing the MUI section.
 *
 * @module EchartsCollectionWidget/editor/xAxisScaffold
 * @remarks
 * Complete scaffold of EVERY xAxis subkey the GUI does NOT own (type/name/nameLocation/nameGap/
 * nameRotate, splitNumber/minInterval, label formatter+colour+rotate, axis line + tick + splitline
 * show are GUI-owned → omitted; only the axisLine.lineStyle COLOUR is GUI-owned when an axis
 * colour is set — width/type merge through), pre-filled with the echarts 6 TIME-axis default
 * (valueAxis merge + the time overrides: showMinLabel/showMaxLabel false). Theme-token COLOUR literals
 * (axisLine.lineStyle.color, axisLabel.color, splitLine.lineStyle.color) are deliberately OMITTED
 * so the live theme floor (light/dark) keeps driving them — the toolbox-scaffold precedent
 * (ADR-0030/D4). Also omitted as pathologic: the time `rich` primary-unit styling and the v6
 * axis-break sub-trees (breakArea/breakLabelLayout). Verified against src/coord/axisDefault.ts.
 */
export const X_AXIS_SCAFFOLD_JSON =
    '{\n  "xAxis": {\n    "show": true,\n    "gridIndex": 0,\n    "position": "bottom",\n    "offset": 0,\n    "inverse": false,\n    "z": 0,\n    "silent": false,\n    "triggerEvent": false,\n    "boundaryGap": [0, 0],\n    "nameTruncate": { "maxWidth": null, "ellipsis": "...", "placeholder": "." },\n    "tooltip": { "show": false },\n    "axisLine": { "onZero": "auto", "onZeroAxisIndex": null, "symbol": ["none", "none"], "symbolSize": [10, 15], "breakLine": true, "lineStyle": { "width": 1, "type": "solid" } },\n    "axisTick": { "inside": false, "length": 5, "lineStyle": { "width": 1 } },\n    "axisLabel": { "show": true, "inside": false, "showMinLabel": false, "showMaxLabel": false, "margin": 8, "fontSize": 12, "textMargin": [0, 3] },\n    "splitLine": { "showMinLine": true, "showMaxLine": true, "lineStyle": { "width": 1, "type": "solid" } },\n    "minorTick": { "show": false, "splitNumber": 5, "length": 3 },\n    "minorSplitLine": { "show": false, "lineStyle": { "color": "rgba(192, 192, 192, 0.2)", "width": 1 } },\n    "splitArea": { "show": false, "areaStyle": { "color": ["rgba(248, 248, 248, 1)", "rgba(248, 248, 248, 0)"] } }\n  }\n}';
