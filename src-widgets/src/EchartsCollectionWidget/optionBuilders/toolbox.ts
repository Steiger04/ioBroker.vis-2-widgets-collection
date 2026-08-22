/**
 * Toolbox option builder — the GUI-authored `toolbox` block (ADR-0045).
 *
 * @module EchartsCollectionWidget/optionBuilders/toolbox
 * @remarks
 * Sparse emit (spec D11): `show` falsy/unset → NO block at all — `'toolbox'` rides
 * `replaceMerge`, so the absent key removes the component instead of leaving a ghost; `show: true`
 * emits only the set fields, and the `feature` object only when at least one feature is active
 * (a disabled feature is OMITTED, not `show:false` — the replace removes it). Two deliberate
 * non-sparse exceptions, both GUI-owns-the-default in the `legend.inactiveColor` precedent:
 *  - icon + hover colour always emit — unset resolves to the themeBase-aware echarts token
 *    LITERAL, because our chart never registers echarts' builtin dark theme (it is only applied
 *    via `init(el, 'dark')`, which EChart does not do), so echarts itself would always apply the
 *    light tokens; the GUI emit makes the editor's inherit swatch honest by construction
 *    (user decision 2026-08-22).
 *  - `dataView.readOnly` always rides an active dataView — our default is ON (echarts' is OFF;
 *    vis state is read-only, ADR-0043-scaffold-D5 precedent), so the delta must be in the option.
 *
 * `magicType` is cartesian-only (spec D4): filtered here in the builder (a stored blob survives a
 * family switch untouched — the UI hides the row, the emit simply drops it) and in the UI.
 */
import type {
    EchartsChartFamily,
    EchartsGrid9Position,
    EchartsToolboxConfig,
} from '../../types/field-definitions/echarts-fields';

/**
 * The echarts 6.1.0 toolbox token literals (spec D10) — VERBATIM from the locally installed
 * `echarts/lib/visual/tokens.js`, resolved against echarts' builtin light/dark theme (the same
 * mapping the old ADR-0030 scaffold build used), NOT against our MUI-derived `themeTokens`
 * (ADR-0027 honesty rule: the swatch shows what renders, and what renders is echarts' token).
 * The guard test compares these against the installed echarts tokens, so an echarts upgrade that
 * shifts a token value fails red here instead of silently desynchronising the swatch.
 */
export const TOOLBOX_TOKENS = {
    light: {
        /** `iconStyle.borderColor` — tokens.color.accent50 */
        icon: '#6578ba',
        /** `emphasis.iconStyle.borderColor` — tokens.color.accent70 */
        hover: '#404c76',
        /** `borderColor` — tokens.color.border (neutral30) */
        border: '#b7b9be',
    },
    dark: {
        /** tokens.darkColor.accent50 (modifyHSL-derived, alpha 1) */
        icon: 'rgba(175,181,201,1)',
        /** tokens.darkColor.accent70 */
        hover: 'rgba(238,239,243,1)',
        /** tokens.darkColor.border (neutral30 dark) */
        border: 'rgba(91,94,100,1)',
    },
} as const;

/**
 * Map a 3×3 grid position onto echarts' left/top/right/bottom anchors. Flush 0-px edges (the
 * echarts toolbox default is `left:'right'`/`top:'top'` ≡ right:0/top:0); the middle row/column
 * takes the responsive `'middle'`/`'center'` named anchors. `'toolbox'` is in `replaceMerge`, so
 * a position switch never leaves a stale edge key.
 */
const gridPlacement = (pos: EchartsGrid9Position): Record<string, unknown> => {
    const col = pos.endsWith('Left') ? 'left' : pos.endsWith('Right') ? 'right' : 'center';
    const row = pos.startsWith('top') ? 'top' : pos.startsWith('bottom') ? 'bottom' : 'middle';
    const out: Record<string, unknown> = {};
    if (row === 'top') {
        out.top = 0;
    } else if (row === 'bottom') {
        out.bottom = 0;
    } else {
        out.top = 'middle';
    }
    if (col === 'left') {
        out.left = 0;
    } else if (col === 'right') {
        out.right = 0;
    } else {
        out.left = 'center';
    }
    return out;
};

/**
 * Build the sparse `toolbox` option block.
 *
 * @param cfg - The decoded `toolboxConfig` blob (ADR-0045). Unset/`show` falsy → no block.
 * @param family - The chart family — filters `magicType` to cartesian (spec D4).
 * @param dark - The effective chart dark mode (the token literals resolve against it).
 * @returns The `toolbox` fragment, or `undefined` when nothing should emit.
 */
export const buildToolbox = (
    cfg: EchartsToolboxConfig | undefined,
    family: EchartsChartFamily,
    dark: boolean,
): Record<string, unknown> | undefined => {
    if (!cfg?.show) {
        return undefined;
    }
    const token = dark ? TOOLBOX_TOKENS.dark : TOOLBOX_TOKENS.light;
    const out: Record<string, unknown> = {
        show: true,
        // GUI-owned theme defaults (see module remarks): unset → the resolved token literal.
        iconStyle: { borderColor: cfg.iconColor ?? token.icon },
        emphasis: { iconStyle: { borderColor: cfg.iconHoverColor ?? token.hover } },
    };

    if (cfg.pos) {
        Object.assign(out, gridPlacement(cfg.pos));
    }
    if (cfg.orient) {
        out.orient = cfg.orient;
    }
    if (cfg.itemSize !== undefined) {
        out.itemSize = cfg.itemSize;
    }
    if (cfg.itemGap !== undefined) {
        out.itemGap = cfg.itemGap;
    }
    if (cfg.showTitle !== undefined) {
        out.showTitle = cfg.showTitle;
    }
    // Frame-as-panel: colour only emits when a width would draw it (buildLegend precedent).
    if (cfg.borderWidth) {
        out.borderWidth = cfg.borderWidth;
        out.borderColor = cfg.borderColor ?? token.border;
    }
    if (cfg.borderRadius !== undefined) {
        out.borderRadius = cfg.borderRadius;
    }
    if (cfg.padding !== undefined) {
        out.padding = cfg.padding;
    }
    if (cfg.backgroundColor && cfg.backgroundColor !== 'transparent') {
        out.backgroundColor = cfg.backgroundColor;
    }

    // Features: only ACTIVE ones declare (an undeclared feature does not render; a disabled one
    // must be omitted so the replaceMerge rebuild drops its icons).
    const f = cfg.features;
    const feature: Record<string, unknown> = {};
    if (f?.saveAsImage?.show) {
        const s: Record<string, unknown> = {};
        if (f.saveAsImage.type) {
            s.type = f.saveAsImage.type;
        }
        if (f.saveAsImage.name) {
            s.name = f.saveAsImage.name;
        }
        if (f.saveAsImage.pixelRatio !== undefined) {
            s.pixelRatio = f.saveAsImage.pixelRatio;
        }
        feature.saveAsImage = s;
    }
    if (f?.restore?.show) {
        feature.restore = {};
    }
    if (f?.dataView?.show) {
        // readOnly always rides (our default-delta vs echarts' false — see module remarks).
        feature.dataView = { readOnly: f.dataView.readOnly ?? true };
    }
    if (f?.dataZoom?.show) {
        const z: Record<string, unknown> = {};
        if (f.dataZoom.filterMode) {
            z.filterMode = f.dataZoom.filterMode;
        }
        feature.dataZoom = z;
    }
    if (f?.magicType?.show && family === 'cartesian') {
        const m: Record<string, unknown> = {};
        if (f.magicType.type?.length) {
            m.type = f.magicType.type;
        }
        feature.magicType = m;
    }
    if (Object.keys(feature).length) {
        out.feature = feature;
    }
    return out;
};
