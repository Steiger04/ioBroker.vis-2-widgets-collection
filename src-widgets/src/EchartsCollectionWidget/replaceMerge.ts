/**
 * The `replaceMerge` contract of the {@link EChart} wrapper (ADR-0036).
 *
 * @module EchartsCollectionWidget/replaceMerge
 * @remarks
 * Components whose presence in the option is CONDITIONAL (array add/remove or a GUI toggle). Each
 * mainType here is REPLACED on `setOption`, so an absent or shrunk component is actually removed —
 * without its mainType echarts MERGES and keeps a stale ghost: a shortened axis array lingers at
 * the tail, a position switch retains the now-unused edge key, a switched-off toolbox keeps
 * rendering its icons.
 *
 * Grouping: `series`/`dataZoom`/`visualMap`/`yAxis`/`xAxis`/`title`/`legend`/`tooltip`/`grid` are
 * GUI-managed (the builders always emit them, so replacing with the freshly merged option is
 * lossless); `toolbox` (the ADR-0045 master switch — off emits NO block)
 * (family-conditional) is GUI-managed but only SOMETIMES emitted; `graphic`/`axisPointer` are
 * free-text-only keys the GUI never emits. Without replaceMerge, every conditional of these
 * leaves a merge-retained ghost.
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
    // GUI-managed but conditional: the toolbox master switch (ADR-0045).
    'toolbox',
    // Free-text-only, never builder-emitted.
    'graphic',
    'axisPointer',
] as const;
