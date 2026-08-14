/**
 * The `replaceMerge` contract of the {@link EChart} wrapper (ADR-0036).
 *
 * @module EchartsCollectionWidget/replaceMerge
 * @remarks
 * Components whose presence in the option is CONDITIONAL (array add/remove, a GUI toggle, or an
 * Advanced-JSON add the GUI never emits). Each mainType here is REPLACED on `setOption`, so an
 * absent or shrunk component is actually removed — without its mainType echarts MERGES and keeps a
 * stale ghost: a deleted Advanced-JSON template keeps rendering, a shortened axis array lingers at
 * the tail, a position switch retains the now-unused edge key.
 *
 * INVARIANT (ADR-0036): EVERY echarts component mainType a template (or the free text) can set MUST
 * be listed here — deleting the template must revert the preview AND the widget. The guard test
 * (`editor/advancedJsonTemplates.test.ts`) enforces this for every template mechanically: a future
 * template whose mainType is missing here fails red instead of shipping a delete-does-nothing bug
 * (the exact class ADR-0036 was written for — the xAxis template was deletable but its keys kept
 * rendering because `'xAxis'` was absent).
 *
 * Grouping: `series`/`dataZoom`/`visualMap`/`yAxis`/`xAxis`/`title`/`legend`/`tooltip`/`grid` are
 * GUI-managed (the builders always emit them, so replacing with the freshly merged option is
 * lossless); `toolbox`/`graphic`/`axisPointer`/`radar` are Advanced-JSON-only or family-conditional
 * (the GUI never or only sometimes emits them — without replaceMerge, deleting the template or
 * switching the family away leaves a merge-retained ghost).
 *
 * `aria` is deliberately NOT listed: it registers only a preprocessor (no component model), so
 * ComponentModel.hasClass('aria') is false and echarts REJECTS it in replaceMerge — and its
 * preprocessor re-derives from `option.aria` every setOption, so it has no ghost to fix anyway.
 * `dataset` is out for the same preprocessor reason (not a replaceMerge-able mainType).
 */
export const REPLACE_MERGE = [
    // GUI-managed, always fully emitted by the builders.
    'series',
    'dataZoom',
    'visualMap',
    'yAxis',
    'xAxis',
    'title',
    'legend',
    'tooltip',
    'grid',
    // Advanced-JSON-only (toolbox/graphic/axisPointer) or family-conditional (radar).
    'toolbox',
    'radar',
    'graphic',
    'axisPointer',
] as const;
