/**
 * Unit tests for the toolbox option builder (ADR-0045): the sparse GUI-authored emit + the
 * echarts-token literal guards.
 *
 * @module EchartsCollectionWidget/optionBuilders/toolbox.test
 * @remarks
 * Builder rules (spec D11): `show` falsy/unset → NO `toolbox` key (no ghost — `toolbox` rides
 * `replaceMerge`, so the absent block removes the component); `show: true` → sparse emit of the
 * set fields only, EXCEPT the icon/hover/border token colours which the GUI owns (user decision
 * 2026-08-22, legend-inactiveColor precedent): unset emits the themeBase-resolved echarts token
 * literal — our chart never registers echarts' builtin dark theme, so echarts itself would always
 * apply the light tokens, and the GUI emit makes the inherit swatch honest by construction.
 * `feature` only with ≥1 active feature; magicType cartesian-only; `dataView.readOnly` always
 * rides an active dataView (our deliberate default-delta vs echarts' `false`).
 */
import { describe, expect, it } from 'vitest';
// Test-only deep import: echarts ships no type declarations for the tokens module (and the
// widget source must never import it — the bundle rule; this file is not part of the bundle).
// @ts-expect-error TS7016 — no declaration file for 'echarts/lib/visual/tokens.js'
import tokens from 'echarts/lib/visual/tokens.js';

import { buildToolbox, TOOLBOX_TOKENS } from './toolbox';
import type { EchartsToolboxConfig } from '../../types/field-definitions/echarts-fields';

describe('TOOLBOX_TOKENS — echarts 6.1.0 literal guard (D10)', () => {
    it('the light/dark literals are the installed echarts tokens (fails red on an echarts upgrade)', () => {
        expect(TOOLBOX_TOKENS.light.icon).toBe(tokens.color.accent50);
        expect(TOOLBOX_TOKENS.light.hover).toBe(tokens.color.accent70);
        expect(TOOLBOX_TOKENS.light.border).toBe(tokens.color.border);
        expect(TOOLBOX_TOKENS.dark.icon).toBe(tokens.darkColor.accent50);
        expect(TOOLBOX_TOKENS.dark.hover).toBe(tokens.darkColor.accent70);
        expect(TOOLBOX_TOKENS.dark.border).toBe(tokens.darkColor.border);
    });

    it('the layout size defaults match the installed echarts size tokens (spec F "Tokens")', () => {
        // itemGap = tokens.size.s, padding = tokens.size.m — the display defaults the UI shows
        // (ToolboxSection `?? 10` / `?? 15`) must stay what the installed echarts resolves.
        expect(tokens.size.s).toBe(10);
        expect(tokens.size.m).toBe(15);
    });
});

describe('buildToolbox — show gate (no ghost)', () => {
    it('undefined config → undefined (no toolbox key)', () => {
        expect(buildToolbox(undefined, 'cartesian', false)).toBeUndefined();
    });

    it('empty config → undefined', () => {
        expect(buildToolbox({}, 'cartesian', false)).toBeUndefined();
    });

    it('show: false → undefined even with features configured (the master switch off wins)', () => {
        const cfg: EchartsToolboxConfig = {
            show: false,
            features: { restore: { show: true } },
        };
        expect(buildToolbox(cfg, 'cartesian', false)).toBeUndefined();
    });
});

describe('buildToolbox — sparse emit at show: true', () => {
    it('bare on: only show + the two GUI-owned token colours; no feature block, no layout keys', () => {
        const out = buildToolbox({ show: true }, 'cartesian', false);
        expect(out).toEqual({
            show: true,
            iconStyle: { borderColor: TOOLBOX_TOKENS.light.icon },
            emphasis: { iconStyle: { borderColor: TOOLBOX_TOKENS.light.hover } },
        });
    });

    it('dark themeBase resolves the token literals (the GUI owns the theme default)', () => {
        const out = buildToolbox({ show: true }, 'cartesian', true);
        expect((out?.iconStyle as Record<string, unknown>)?.borderColor).toBe(TOOLBOX_TOKENS.dark.icon);
        expect(((out?.emphasis as Record<string, unknown>)?.iconStyle as Record<string, unknown>)?.borderColor).toBe(
            TOOLBOX_TOKENS.dark.hover,
        );
    });

    it('explicit icon/hover colours override the token literals', () => {
        const out = buildToolbox({ show: true, iconColor: '#f00', iconHoverColor: '#0f0' }, 'cartesian', true);
        expect((out?.iconStyle as Record<string, unknown>)?.borderColor).toBe('#f00');
        expect(((out?.emphasis as Record<string, unknown>)?.iconStyle as Record<string, unknown>)?.borderColor).toBe(
            '#0f0',
        );
    });

    it('position maps the 3×3 grid onto left/top/right/bottom anchors (topRight explicit = echarts default)', () => {
        const at = (pos: NonNullable<EchartsToolboxConfig['pos']>): Record<string, unknown> =>
            buildToolbox({ show: true, pos }, 'cartesian', false) ?? {};
        expect(at('topLeft')).toMatchObject({ left: 0, top: 0 });
        expect(at('topRight')).toMatchObject({ right: 0, top: 0 });
        expect(at('bottomCenter')).toMatchObject({ bottom: 0, left: 'center' });
        expect(at('middleLeft')).toMatchObject({ left: 0, top: 'middle' });
        expect(at('middleCenter')).toMatchObject({ left: 'center', top: 'middle' });
    });

    it('unset position emits no anchor keys (echarts default = topRight)', () => {
        const out = buildToolbox({ show: true }, 'cartesian', false) as Record<string, unknown>;
        for (const key of ['left', 'top', 'right', 'bottom']) {
            expect(key in out, `anchor key '${key}' must not emit when pos is unset`).toBe(false);
        }
    });

    it('layout scalars emit only when set (itemSize/itemGap/padding/borderRadius/orient)', () => {
        const out = buildToolbox(
            {
                show: true,
                itemSize: 18,
                itemGap: 8,
                padding: 10,
                borderRadius: 6,
                orient: 'vertical',
            },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(out.itemSize).toBe(18);
        expect(out.itemGap).toBe(8);
        expect(out.padding).toBe(10);
        expect(out.borderRadius).toBe(6);
        expect(out.orient).toBe('vertical');
        // showTitle unset → not emitted (echarts default true)
        expect('showTitle' in out).toBe(false);
    });

    it('showTitle: false emits (the GUI switch owns the off state)', () => {
        const out = buildToolbox({ show: true, showTitle: false }, 'cartesian', false) as Record<string, unknown>;
        expect(out.showTitle).toBe(false);
    });

    it('border: width > 0 emits width + colour (explicit ?? token literal); width 0/unset emits neither', () => {
        const withBorder = buildToolbox({ show: true, borderWidth: 2 }, 'cartesian', false) as Record<string, unknown>;
        expect(withBorder.borderWidth).toBe(2);
        expect(withBorder.borderColor).toBe(TOOLBOX_TOKENS.light.border);
        const explicit = buildToolbox(
            { show: true, borderWidth: 1, borderColor: '#abc' },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(explicit.borderColor).toBe('#abc');
        const off = buildToolbox({ show: true, borderWidth: 0 }, 'cartesian', false) as Record<string, unknown>;
        expect('borderWidth' in off).toBe(false);
        expect('borderColor' in off).toBe(false);
    });

    it('background transparent/unset does not emit; a set colour does', () => {
        expect('backgroundColor' in (buildToolbox({ show: true }, 'cartesian', false) ?? {})).toBe(false);
        expect(
            'backgroundColor' in
                (buildToolbox({ show: true, backgroundColor: 'transparent' }, 'cartesian', false) ?? {}),
        ).toBe(false);
        const out = buildToolbox({ show: true, backgroundColor: '#112233' }, 'cartesian', false) as Record<
            string,
            unknown
        >;
        expect(out.backgroundColor).toBe('#112233');
    });
});

describe('buildToolbox — feature block', () => {
    it('no features → no feature key', () => {
        const out = buildToolbox({ show: true, features: {} }, 'cartesian', false) as Record<string, unknown>;
        expect('feature' in out).toBe(false);
    });

    it('the D8 hero preset: 4 features declared, each sparse', () => {
        const out = buildToolbox(
            {
                show: true,
                features: {
                    saveAsImage: { show: true },
                    restore: { show: true },
                    dataView: { show: true, readOnly: true },
                    dataZoom: { show: true, filterMode: 'filter' },
                },
            },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(out.feature).toEqual({
            saveAsImage: {},
            restore: {},
            dataView: { readOnly: true },
            dataZoom: { filterMode: 'filter' },
        });
    });

    it('disabled features are omitted entirely (replaceMerge removes them — no show:false ghosts)', () => {
        const out = buildToolbox(
            {
                show: true,
                features: { restore: { show: false }, dataView: { show: true } },
            },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(out.feature).toEqual({ dataView: { readOnly: true } });
    });

    it('saveAsImage sub-options ride only when set; pixelRatio unset emits nothing (device ratio)', () => {
        const out = buildToolbox(
            {
                show: true,
                features: {
                    saveAsImage: { show: true, type: 'svg', name: 'chart', pixelRatio: 2 },
                },
            },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(out.feature).toEqual({ saveAsImage: { type: 'svg', name: 'chart', pixelRatio: 2 } });
        const minimal = buildToolbox(
            { show: true, features: { saveAsImage: { show: true, name: '' } } },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(minimal.feature).toEqual({ saveAsImage: {} });
    });

    it('dataView readOnly ALWAYS rides an active dataView — true (our default-delta) or explicit false', () => {
        const on = buildToolbox({ show: true, features: { dataView: { show: true } } }, 'cartesian', false) as Record<
            string,
            unknown
        >;
        expect(on.feature).toEqual({ dataView: { readOnly: true } });
        const off = buildToolbox(
            { show: true, features: { dataView: { show: true, readOnly: false } } },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(off.feature).toEqual({ dataView: { readOnly: false } });
    });

    it('dataZoom filterMode unset emits {} (echarts default filter)', () => {
        const out = buildToolbox({ show: true, features: { dataZoom: { show: true } } }, 'cartesian', false) as Record<
            string,
            unknown
        >;
        expect(out.feature).toEqual({ dataZoom: {} });
    });

    it('magicType emits on cartesian with its type list', () => {
        const out = buildToolbox(
            { show: true, features: { magicType: { show: true, type: ['line', 'bar'] } } },
            'cartesian',
            false,
        ) as Record<string, unknown>;
        expect(out.feature).toEqual({ magicType: { type: ['line', 'bar'] } });
    });

    it('magicType is filtered out on non-cartesian families even when configured (D4)', () => {
        for (const family of ['pie'] as const) {
            const out = buildToolbox(
                { show: true, features: { magicType: { show: true, type: ['line'] }, restore: { show: true } } },
                family,
                false,
            ) as Record<string, unknown>;
            expect((out.feature as Record<string, unknown>).magicType, family).toBeUndefined();
            expect((out.feature as Record<string, unknown>).restore).toEqual({});
        }
    });
});
