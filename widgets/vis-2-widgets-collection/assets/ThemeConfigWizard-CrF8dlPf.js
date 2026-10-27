import { $t as e, Bt as t, Ct as n, D as r, E as i, Et as a, Ht as o, It as s, Jt as c, Kt as l, Lt as u, Mt as d, Ot as f, Qt as p, Rt as m, St as h, Ut as g, Vt as _, Xt as v, Yt as y, _ as b, a as x, an as S, b as C, bt as w, fn as T, gn as E, jt as D, ln as O, lt as k, mn as A, o as j, qt as M, s as N, sn as P, st as F, vt as I, w as L, yt as R, zt as ee } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { t as z } from "./createSvgIcon-CNE8PSAz.js";
import { S as B, a as te, b as V, c as H, d as ne, f as re, g as ie, h as ae, i as U, l as W, m as G, o as K, r as q, s as J, u as oe, v as se } from "./usePopoverPositioning-DS2NF3yn.js";
import { t as ce } from "./Close-CpgZEyM5.js";
import { n as Y, r as le, t as X } from "./ColorPickerField-TUyvHySt.js";
var ue = z(j(`path`, { d: `M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z` }), `Download`), Z = z(j(`path`, { d: `M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4` }), `HelpOutlineOutlined`), Q = z(j(`path`, { d: `M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5` }), `Link`), de = z(j(`path`, { d: `M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5m-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3z` }), `LinkOff`), fe = z(j(`path`, { d: `M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.2-.64-1.67-.08-.1-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9m5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9M5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13 5 12.33 5 11.5m6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5 8.67 6 9.5 6s1.5.67 1.5 1.5` }), `Palette`);
function pe({ initial: e3 } = {}) {
  let [t2, n2] = r(e3 ?? { x: 0, y: 0 }), a2 = i(null), o2 = i(t2);
  o2.current = t2;
  let s2 = i(null), c2 = b((e4, t3) => {
    if (typeof window > `u`) return { x: e4, y: t3 };
    let n3 = a2.current, r2 = (n3 == null ? void 0 : n3.offsetWidth) ?? 0, i2 = (n3 == null ? void 0 : n3.offsetHeight) ?? 0;
    return { x: Math.max(0, Math.min(e4, window.innerWidth - r2)), y: Math.max(0, Math.min(t3, window.innerHeight - i2)) };
  }, []), l2 = b((e4) => {
    let t3 = s2.current;
    t3 && e4.pointerId === t3.pointerId && n2(c2(t3.originX + (e4.clientX - t3.startX), t3.originY + (e4.clientY - t3.startY)));
  }, [c2]), u2 = b((e4) => {
    let t3 = s2.current;
    t3 && e4.pointerId === t3.pointerId && (s2.current = null, window.removeEventListener(`pointermove`, l2), window.removeEventListener(`pointerup`, u2), window.removeEventListener(`pointercancel`, u2));
  }, [l2]), d2 = b((e4) => {
    e4.button === 0 && (s2.current = { pointerId: e4.pointerId, startX: e4.clientX, startY: e4.clientY, originX: o2.current.x, originY: o2.current.y }, e4.preventDefault(), window.addEventListener(`pointermove`, l2), window.addEventListener(`pointerup`, u2), window.addEventListener(`pointercancel`, u2));
  }, [l2, u2]);
  return C(() => () => {
    window.removeEventListener(`pointermove`, l2), window.removeEventListener(`pointerup`, u2), window.removeEventListener(`pointercancel`, u2);
  }, [l2, u2]), { position: t2, setPosition: n2, panelRef: a2, dragHandlers: { onPointerDown: d2, style: { touchAction: `none`, cursor: `move`, userSelect: `none` } } };
}
var me = [{ id: `graphit`, labelKey: `theme_studio_preset_graphit`, theme: { palette: { mode: `dark`, primary: { main: `#38bdf8` }, secondary: { main: `#818cf8` }, background: { default: `#0f1216`, paper: `#181c23` } } } }, { id: `sunset`, labelKey: `theme_studio_preset_sunset`, theme: { palette: { mode: `dark`, primary: { main: `#f97316` }, secondary: { main: `#f43f5e` }, background: { default: `#171210`, paper: `#211a16` } } } }, { id: `daylight`, labelKey: `theme_studio_preset_daylight`, theme: { palette: { mode: `light`, primary: { main: `#2563eb` }, secondary: { main: `#0ea5e9` }, background: { default: `#f8fafc`, paper: `#ffffff` } } } }, { id: `salbei`, labelKey: `theme_studio_preset_salbei`, theme: { palette: { mode: `light`, primary: { main: `#5b8c6a` }, secondary: { main: `#c2724f` }, background: { default: `#f6f7f3`, paper: `#ffffff` } } } }, { id: `mono`, labelKey: `theme_studio_preset_mono`, theme: { palette: { mode: `dark`, primary: { main: `#a1a1aa` }, secondary: { main: `#d4d4d8` }, background: { default: `#18181b`, paper: `#27272a` } } } }, { id: `smaragd`, labelKey: `theme_studio_preset_smaragd`, theme: { palette: { mode: `dark`, primary: { main: `#34d399` }, secondary: { main: `#2dd4bf` }, background: { default: `#0d1410`, paper: `#161f1a` } } } }, { id: `amethyst`, labelKey: `theme_studio_preset_amethyst`, theme: { palette: { mode: `dark`, primary: { main: `#a78bfa` }, secondary: { main: `#f0abfc` }, background: { default: `#130e1a`, paper: `#1d1626` } } } }, { id: `rubin`, labelKey: `theme_studio_preset_rubin`, theme: { palette: { mode: `dark`, primary: { main: `#f87171` }, secondary: { main: `#fb7185` }, background: { default: `#190d0d`, paper: `#241414` } } } }, { id: `bernstein`, labelKey: `theme_studio_preset_bernstein`, theme: { palette: { mode: `dark`, primary: { main: `#fbbf24` }, secondary: { main: `#facc15` }, background: { default: `#18140a`, paper: `#221c11` } } } }];
function $({ title: e3 }) {
  return j(h, { title: e3, arrow: true, placement: `top`, slotProps: { tooltip: { sx: { maxWidth: 280 } } }, children: j(v, { size: `small`, sx: { p: 0.5 }, "aria-label": typeof e3 == `string` ? e3 : `help`, children: j(Z, { fontSize: `small`, color: `action` }) }) });
}
var he = [{ labelKey: `theme_studio_group_status`, fields: [{ path: `palette.error.main`, labelKey: `theme_wizard_palette_error` }, { path: `palette.warning.main`, labelKey: `theme_wizard_palette_warning` }, { path: `palette.info.main`, labelKey: `theme_wizard_palette_info` }, { path: `palette.success.main`, labelKey: `theme_wizard_palette_success` }] }, { labelKey: `theme_studio_group_text`, fields: [{ path: `palette.text.primary`, labelKey: `theme_wizard_palette_text_primary` }, { path: `palette.text.secondary`, labelKey: `theme_wizard_palette_text_secondary` }] }, { labelKey: `theme_studio_group_surface`, fields: [{ path: `palette.background.default`, labelKey: `theme_wizard_palette_background_default` }, { path: `palette.background.paper`, labelKey: `theme_wizard_palette_background_paper` }, { path: `palette.divider`, labelKey: `theme_wizard_palette_divider` }] }];
function ge({ theme: e3, onChange: t2, defaultExpanded: r2, resolved: i2 }) {
  let o2 = G(e3, `spacing`) ?? 8, s2 = G(e3, `direction`), u2 = G(e3, `cssVariables`), d2 = u2 === true || typeof u2 == `object` && !!u2, f2 = G(e3, `cssVariables.cssVarPrefix`) ?? ``;
  return N(F, { defaultExpanded: r2 ?? false, children: [j(l, { expandIcon: j(Y, {}), children: j(n, { children: B.t(`theme_studio_section_advanced`) }) }), j(m, { children: N(E, { spacing: 2, children: [he.map((r3) => N(a, { children: [j(n, { variant: `caption`, color: `text.secondary`, sx: { display: `block`, mb: 0.5 }, children: B.t(r3.labelKey) }), j(a, { children: r3.fields.map((n2) => {
    let r4 = G(e3, n2.path), a2 = i2 ? G(i2, n2.path) ?? `` : ``;
    return j(X, { label: B.t(n2.labelKey), value: r4 ?? a2, overridden: r4 !== void 0, onChange: (e4) => t2(n2.path, e4 || void 0) }, n2.path);
  }) })] }, r3.labelKey)), N(a, { sx: { display: `flex`, alignItems: `center`, gap: 1, flexWrap: `wrap` }, children: [N(a, { sx: { display: `flex`, alignItems: `center`, gap: 0.5 }, children: [j(n, { variant: `body2`, color: `text.secondary`, sx: { flexShrink: 0 }, children: B.t(`theme_wizard_layout_direction`) }), j($, { title: B.t(`theme_studio_help_direction`) })] }), N(w, { exclusive: true, size: `small`, value: s2 === `rtl` ? `rtl` : `ltr`, onChange: (e4, n2) => {
    t2(`direction`, n2 ?? void 0);
  }, children: [j(R, { value: `ltr`, children: B.t(`theme_wizard_layout_direction_ltr`) }), j(R, { value: `rtl`, children: B.t(`theme_wizard_layout_direction_rtl`) })] }), s2 === void 0 ? j(n, { variant: `caption`, color: `text.secondary`, children: B.t(`theme_studio_default_value`) }) : null] }), N(a, { children: [N(a, { sx: { display: `flex`, alignItems: `center`, gap: 0.5, mb: 0.5 }, children: [N(n, { variant: `body2`, color: `text.secondary`, children: [B.t(`theme_wizard_layout_spacing`), `: `, o2] }), j($, { title: B.t(`theme_studio_help_spacing`) })] }), j(A, { value: o2, min: 0, max: 16, step: 0.5, valueLabelDisplay: `auto`, onChange: (e4, n2) => {
    t2(`spacing`, n2);
  } })] }), N(a, { children: [j(c, { control: j(k, { checked: d2, onChange: (e4, n2) => {
    t2(`cssVariables`, n2 ? true : void 0);
  } }), label: N(a, { component: `span`, sx: { display: `inline-flex`, alignItems: `center`, gap: 0.5 }, children: [B.t(`theme_wizard_css_variables_enable`), j($, { title: B.t(`theme_studio_help_css_vars`) })] }) }), d2 ? j(I, { fullWidth: true, size: `small`, label: B.t(`theme_wizard_css_var_prefix`), value: f2, onChange: (e4) => {
    let n2 = e4.target.value;
    t2(`cssVariables`, !n2 || { cssVarPrefix: n2 });
  }, sx: { mt: 1 } }) : null] })] }) })] });
}
var _e = [{ path: `palette.primary.main`, labelKey: `theme_wizard_palette_primary` }, { path: `palette.secondary.main`, labelKey: `theme_wizard_palette_secondary` }];
function ve({ theme: e3, onChange: t2, defaultExpanded: r2, resolved: i2 }) {
  let o2 = G(e3, `palette.mode`), s2 = o2 === `light` || o2 === `dark` ? o2 : `auto`, c2 = (i2 == null ? void 0 : i2.palette.mode) === `dark` ? `dark` : `light`;
  return N(F, { defaultExpanded: r2 ?? true, children: [j(l, { expandIcon: j(Y, {}), children: j(n, { children: B.t(`theme_wizard_section_palette`) }) }), j(m, { children: N(E, { spacing: 1.5, children: [N(a, { children: [j(n, { variant: `body2`, color: `text.secondary`, sx: { display: `block`, mb: 0.5 }, children: B.t(`theme_wizard_palette_mode`) }), N(w, { exclusive: true, size: `small`, value: s2, onChange: (e4, n2) => {
    t2(`palette.mode`, n2 === `light` || n2 === `dark` ? n2 : void 0);
  }, children: [j(R, { value: `light`, children: B.t(`theme_wizard_palette_mode_light`) }), j(R, { value: `dark`, children: B.t(`theme_wizard_palette_mode_dark`) }), j(R, { value: `auto`, children: B.t(`theme_wizard_palette_mode_auto`) })] }), s2 === `auto` ? N(n, { variant: `caption`, color: `text.secondary`, sx: { display: `block`, mt: 0.5 }, children: [B.t(`theme_studio_mode_follows`), `:`, ` `, B.t(c2 === `dark` ? `theme_wizard_palette_mode_dark` : `theme_wizard_palette_mode_light`)] }) : null] }), j(a, { children: _e.map((n2) => {
    let r3 = G(e3, n2.path), a2 = i2 ? G(i2, n2.path) ?? `` : ``, o3 = n2.path === `palette.secondary.main` && !r3 ? `${B.t(n2.labelKey)} \xB7 ${B.t(`theme_studio_secondary_derived`)}` : B.t(n2.labelKey);
    return j(X, { label: o3, value: r3 ?? a2, overridden: r3 !== void 0, onChange: (e4) => t2(n2.path, e4 || void 0) }, n2.path);
  }) })] }) })] });
}
var ye = [100, 200, 300, 400, 500, 600, 700, 800, 900], be = [{ path: `typography.fontWeightLight`, labelKey: `theme_wizard_typography_weight_light` }, { path: `typography.fontWeightRegular`, labelKey: `theme_wizard_typography_weight_regular` }, { path: `typography.fontWeightMedium`, labelKey: `theme_wizard_typography_weight_medium` }, { path: `typography.fontWeightBold`, labelKey: `theme_wizard_typography_weight_bold` }], xe = [{ path: `corners.topLeft`, labelKey: `theme_studio_corner_top_left` }, { path: `corners.topRight`, labelKey: `theme_studio_corner_top_right` }, { path: `corners.bottomRight`, labelKey: `theme_studio_corner_bottom_right` }, { path: `corners.bottomLeft`, labelKey: `theme_studio_corner_bottom_left` }];
function Se({ theme: t2, onChange: i2, defaultExpanded: o2 }) {
  let c2 = G(t2, `typography.fontSize`) ?? 14, d2 = G(t2, `typography.fontFamily`), f2 = G(t2, `typography.allVariants.lineHeight`), [h2, g2] = r(J(d2) === U), [_2, b2] = r(() => {
    let e3 = [G(t2, `corners.topLeft`) ?? 4, G(t2, `corners.topRight`) ?? 4, G(t2, `corners.bottomRight`) ?? 4, G(t2, `corners.bottomLeft`) ?? 4];
    return e3.every((t3) => t3 === e3[0]);
  }), x2 = h2 ? U : J(d2), w2 = t2.googleFonts, O2 = w2 ? Object.keys(w2) : [], [k2, L2] = r(``), [R2, ee2] = r(false), [z2, V2] = r(null);
  C(() => {
    W(w2);
  }, [w2]);
  let H2 = async () => {
    let e3 = k2.trim();
    if (e3 && !R2) {
      ee2(true), V2(null);
      try {
        let t3 = await oe(e3);
        i2(`googleFonts.${e3}`, t3), i2(`typography.fontFamily`, `'${e3}', sans-serif`), L2(``);
      } catch (e4) {
        V2(e4 instanceof Error ? e4.message : String(e4));
      } finally {
        ee2(false);
      }
    }
  }, ne2 = (e3) => {
    let t3 = e3.target.value;
    t3 === `__custom__` ? g2(true) : t3 === `` ? (g2(false), i2(`typography.fontFamily`, void 0)) : (g2(false), i2(`typography.fontFamily`, t3));
  }, re2 = (e3, t3) => {
    let n2 = Array.isArray(t3) ? t3[0] : t3;
    _2 ? i2(`corners`, { topLeft: n2, topRight: n2, bottomRight: n2, bottomLeft: n2 }) : i2(e3, n2);
  };
  return N(F, { defaultExpanded: o2 ?? false, children: [j(l, { expandIcon: j(Y, {}), children: j(n, { children: B.t(`theme_studio_section_schrift_form`) }) }), j(m, { children: N(E, { spacing: 2, children: [N(E, { spacing: 1, children: [N(a, { sx: { display: `flex`, alignItems: `center`, gap: 0.5 }, children: [N(M, { fullWidth: true, size: `small`, children: [j(p, { id: `theme-font-family-label`, children: B.t(`theme_wizard_typography_font_family`) }), N(T, { labelId: `theme-font-family-label`, label: B.t(`theme_wizard_typography_font_family`), value: x2, onChange: ne2, renderValue: (e3) => {
    if (!e3) return B.t(`theme_wizard_typography_font_family_default`);
    if (e3 === `__custom__`) return B.t(`theme_wizard_typography_font_family_custom`);
    let t3 = te.find((t4) => t4.value === e3);
    return j(`span`, { style: { fontFamily: e3 }, children: (t3 == null ? void 0 : t3.label) ?? e3 });
  }, children: [j(P, { value: ``, children: B.t(`theme_wizard_typography_font_family_default`) }), j(S, { children: B.t(`theme_wizard_typography_font_family_group_bundled`) }), q.map((e3) => j(P, { value: e3.value, sx: { fontFamily: e3.value }, children: e3.label }, e3.value)), j(S, { children: B.t(`theme_wizard_typography_font_family_group_system`) }), K.map((e3) => j(P, { value: e3.value, sx: { fontFamily: e3.value }, children: e3.label }, e3.value)), j(P, { value: U, children: B.t(`theme_wizard_typography_font_family_custom`) })] })] }), j($, { title: B.t(`theme_studio_help_fonts`) })] }), h2 ? j(I, { fullWidth: true, size: `small`, label: B.t(`theme_wizard_typography_font_family_custom`), value: d2 ?? ``, onChange: (e3) => i2(`typography.fontFamily`, e3.target.value || void 0) }) : null, d2 ? j(n, { variant: `body2`, color: `text.secondary`, sx: { fontFamily: d2 }, children: B.t(`theme_wizard_typography_font_family_sample`) }) : null] }), N(E, { spacing: 1, children: [N(a, { sx: { display: `flex`, alignItems: `center`, justifyContent: `space-between` }, children: [j(n, { variant: `body2`, color: `text.secondary`, children: B.t(`theme_wizard_typography_google_font`) }), j(e, { href: `https://fonts.google.com`, target: `_blank`, rel: `noreferrer`, variant: `caption`, children: B.t(`theme_studio_google_fonts_link`) })] }), N(a, { sx: { display: `flex`, gap: 1 }, children: [j(I, { fullWidth: true, size: `small`, placeholder: B.t(`theme_wizard_typography_google_font_hint`), value: k2, onChange: (e3) => L2(e3.target.value), onKeyDown: (e3) => {
    e3.key === `Enter` && (e3.preventDefault(), H2());
  }, disabled: R2 }), j(D, { size: `small`, variant: `outlined`, startIcon: R2 ? j(u, { size: 16 }) : j(ue, {}), onClick: () => void H2(), disabled: R2 || !k2.trim(), children: B.t(`theme_wizard_typography_google_font_load`) })] }), z2 ? j(y, { severity: `error`, onClose: () => V2(null), children: z2 }) : null, O2.length > 0 ? j(a, { sx: { display: `flex`, flexWrap: `wrap`, gap: 0.5 }, children: O2.map((e3) => j(s, { label: e3, size: `small`, onClick: () => i2(`typography.fontFamily`, `'${e3}', sans-serif`), onDelete: () => i2(`googleFonts.${e3}`, void 0) }, e3)) }) : null] }), N(a, { children: [N(n, { variant: `body2`, color: `text.secondary`, gutterBottom: true, children: [B.t(`theme_wizard_typography_font_size`), `: `, c2] }), j(A, { value: c2, min: 8, max: 24, step: 0.5, valueLabelDisplay: `auto`, onChange: (e3, t3) => i2(`typography.fontSize`, t3) })] }), N(a, { children: [N(a, { sx: { display: `flex`, alignItems: `center`, gap: 0.5, mb: 1 }, children: [j(n, { variant: `body2`, color: `text.secondary`, children: B.t(`theme_wizard_typography_weight_section`) }), j($, { title: B.t(`theme_wizard_typography_weight_hint`) })] }), j(a, { sx: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 1 }, children: be.map((e3) => {
    let n2 = G(t2, e3.path);
    return N(M, { size: `small`, fullWidth: true, children: [j(p, { children: B.t(e3.labelKey) }), N(T, { label: B.t(e3.labelKey), value: n2 === void 0 ? `` : String(n2), onChange: (t3) => i2(e3.path, t3.target.value === `` ? void 0 : Number(t3.target.value)), children: [j(P, { value: ``, children: `\u2014` }), ye.map((e4) => j(P, { value: String(e4), children: e4 }, e4))] })] }, e3.path);
  }) })] }), N(a, { children: [N(n, { variant: `body2`, color: `text.secondary`, gutterBottom: true, children: [B.t(`theme_wizard_typography_line_height`), `: `, f2 ?? `\u2014`] }), j(A, { value: f2 ?? 1.43, min: 1, max: 2, step: 0.05, valueLabelDisplay: `auto`, onChange: (e3, t3) => i2(`typography.allVariants.lineHeight`, t3) })] }), N(a, { children: [N(a, { sx: { display: `flex`, alignItems: `center`, justifyContent: `space-between`, mb: 1 }, children: [j(n, { variant: `body2`, color: `text.secondary`, children: B.t(`theme_wizard_layout_border_radius`) }), j(v, { size: `small`, onClick: () => b2((e3) => !e3), title: B.t(`theme_studio_corners_link`), color: _2 ? `primary` : `default`, children: j(_2 ? Q : de, { fontSize: `small` }) })] }), j(a, { sx: { display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 1.5 }, children: xe.map((e3) => {
    let r2 = G(t2, e3.path) ?? 4;
    return N(a, { children: [N(n, { variant: `caption`, color: `text.secondary`, children: [B.t(e3.labelKey), `: `, r2] }), j(A, { value: r2, min: 0, max: 32, step: 0.5, valueLabelDisplay: `auto`, size: `small`, onChange: (t3, n2) => re2(e3.path, n2) })] }, e3.path);
  }) })] })] }) })] });
}
var Ce = 380, we = { "invalid-color": `theme_studio_valid_color`, "invalid-number": `theme_studio_valid_number`, "number-out-of-range": `theme_studio_valid_range`, "invalid-type": `theme_studio_valid_type`, "unknown-key": `theme_studio_valid_unknown`, "invalid-shape": `theme_studio_valid_shape` }, Te = (e3) => e3.code && we[e3.code] ? B.t(we[e3.code]) : e3.message;
function Ee({ open: e3, onClose: i2, socket: s2, themeType: c2 }) {
  let [l2, p2] = r({}), [m2, h2] = r(false), [S2, w2] = r(false), [T2, k2] = r(false), [A2, M2] = r(null), [P2, F2] = r(false), [I2] = r(() => typeof window > `u` ? { x: 24, y: 24 } : { x: Math.max(0, window.innerWidth - Ce - 24), y: 24 }), { position: R2, panelRef: z2, dragHandlers: te2 } = pe({ initial: I2 }), U2 = L(() => f({ palette: { mode: c2 === `dark` ? `dark` : `light` } }), [c2]);
  C(() => {
    if (!e3) return;
    let t2 = true;
    return h2(true), M2(null), s2.getState(V).then((e4) => {
      if (!t2) return;
      let n2 = typeof (e4 == null ? void 0 : e4.val) == `string` ? e4.val : ``;
      if (!n2) p2({});
      else try {
        let e5 = JSON.parse(n2), t3 = H(e5);
        p2(t3.isValid ? t3.theme ?? {} : {});
      } catch {
        p2({});
      }
    }).catch((e4) => console.error(`Cannot read theme state ${V}: ${e4}`)).finally(() => {
      t2 && (h2(false), w2(false));
    }), () => {
      t2 = false;
    };
  }, [e3, s2]), C(() => {
    e3 && se(l2);
  }, [e3, l2]);
  let W2 = L(() => H(l2), [l2]), K2 = L(() => {
    let e4 = G(l2, `palette.mode`), t2 = e4 === `light` || e4 === `dark` ? e4 : c2 === `dark` ? `dark` : `light`, n2 = ne({ ...l2, palette: { ...l2.palette, mode: t2 } }), r2 = f(n2).palette.primary.main;
    return f(re(n2, r2));
  }, [l2, c2]), q2 = b(() => {
    S2 ? F2(true) : (ie(), i2());
  }, [S2, i2]);
  C(() => {
    if (!e3) return;
    let t2 = (e4) => {
      e4.key === `Escape` && q2();
    };
    return window.addEventListener(`keydown`, t2), () => window.removeEventListener(`keydown`, t2);
  }, [e3, q2]);
  let J2 = b((e4, t2) => {
    p2((n2) => ae(n2, e4, t2)), w2(true);
  }, []), oe2 = b(() => {
    p2({}), w2(true);
  }, []), Y2 = b((e4) => {
    p2(e4), w2(true);
  }, []), X2 = b(async () => {
    if (W2.isValid && !T2) {
      k2(true), M2(null);
      try {
        await s2.setState(V, JSON.stringify(l2)), w2(false), i2();
      } catch (e4) {
        M2(B.t(`theme_studio_save_error`)), console.error(`Cannot write theme state ${V}: ${e4}`);
      } finally {
        k2(false);
      }
    }
  }, [s2, l2, W2.isValid, T2, i2]), ue2 = b(() => {
    F2(false), ie(), i2();
  }, [i2]);
  if (!e3) return null;
  let Z2 = W2.issues.filter((e4) => e4.severity === `error`), Q2 = W2.issues.filter((e4) => e4.severity === `warning`);
  return N(d, { theme: U2, children: [N(O, { ref: z2, elevation: 8, sx: { position: `fixed`, left: R2.x, top: R2.y, width: Ce, maxHeight: `80vh`, display: `flex`, flexDirection: `column`, zIndex: 1300 }, children: [N(a, { ...te2, sx: { display: `flex`, alignItems: `center`, justifyContent: `space-between`, px: 1, py: 0.5, borderBottom: 1, borderColor: `divider` }, children: [N(E, { direction: `row`, sx: { alignItems: `center` }, spacing: 0.5, children: [j(le, { fontSize: `small`, color: `action` }), j(n, { variant: `subtitle2`, children: B.t(`theme_wizard_title`) })] }), j(v, { size: `small`, onClick: q2, children: j(ce, { fontSize: `small` }) })] }), j(a, { sx: { overflowY: `auto`, p: 2 }, children: m2 ? j(a, { sx: { display: `flex`, justifyContent: `center`, p: 3 }, children: j(u, {}) }) : N(x, { children: [N(a, { sx: { mb: 2 }, children: [j(n, { variant: `caption`, color: `text.secondary`, sx: { display: `block`, mb: 0.75 }, children: B.t(`theme_studio_presets`) }), j(E, { direction: `row`, spacing: 1, sx: { flexWrap: `wrap` }, useFlexGap: true, children: me.map((e4) => {
    let t2 = G(e4.theme, `palette.primary.main`) ?? `#888888`;
    return N(a, { onClick: () => Y2(e4.theme), sx: { display: `inline-flex`, alignItems: `center`, gap: 0.5, px: 1, py: 0.25, borderRadius: 16, border: 1, borderColor: `divider`, cursor: `pointer`, "&:hover": { bgcolor: `action.hover` } }, children: [j(a, { sx: { width: 12, height: 12, borderRadius: `50%`, bgcolor: t2 } }), j(n, { variant: `caption`, children: B.t(e4.labelKey) })] }, e4.id);
  }) })] }), j(ve, { theme: l2, onChange: J2, resolved: K2 }), j(Se, { theme: l2, onChange: J2 }), j(ge, { theme: l2, onChange: J2, resolved: K2 }), A2 ? j(y, { severity: `error`, sx: { mt: 2 }, children: A2 }) : null, Z2.length > 0 ? N(y, { severity: `error`, sx: { mt: 2 }, children: [j(n, { variant: `body2`, children: B.t(`theme_wizard_validation_issues`) }), j(a, { component: `ul`, sx: { margin: `4px 0 0`, paddingLeft: 3, mb: 0 }, children: Z2.map((e4, t2) => j(`li`, { children: N(n, { variant: `body2`, children: [e4.path ? `${e4.path}: ` : ``, Te(e4)] }) }, `${e4.path}-${t2}`)) })] }) : null, Q2.length > 0 ? j(y, { severity: `warning`, sx: { mt: 2 }, icon: false, children: j(a, { component: `ul`, sx: { margin: 0, paddingLeft: 3, mb: 0 }, children: Q2.map((e4, t2) => j(`li`, { children: N(n, { variant: `body2`, children: [e4.path ? `${e4.path}: ` : ``, Te(e4)] }) }, `${e4.path}-${t2}`)) }) }) : null] }) }), N(a, { sx: { display: `flex`, gap: 1, p: 1.5, borderTop: 1, borderColor: `divider` }, children: [j(D, { onClick: oe2, color: `inherit`, disabled: m2 || T2 || Object.keys(l2).length === 0, children: B.t(`theme_wizard_reset`) }), j(a, { sx: { flex: 1 } }), j(D, { onClick: q2, color: `inherit`, children: B.t(`cancel`) }), j(D, { onClick: X2, variant: `contained`, disabled: !W2.isValid || m2 || T2, children: T2 ? j(u, { size: 20 }) : B.t(`save`) })] })] }), N(ee, { open: P2, onClose: () => F2(false), children: [j(g, { children: B.t(`theme_studio_discard_title`) }), j(_, { children: j(o, { children: B.t(`theme_studio_discard_text`) }) }), N(t, { children: [j(D, { onClick: () => F2(false), color: `inherit`, children: B.t(`cancel`) }), j(D, { onClick: ue2, color: `error`, variant: `contained`, children: B.t(`theme_studio_discard`) })] })] })] });
}
function De(e3) {
  let [t2, n2] = r(false);
  return N(x, { children: [j(D, { variant: `outlined`, fullWidth: true, startIcon: j(fe, {}), onClick: () => n2(true), sx: { m: 0.5 }, children: B.t(`theme_wizard_button`) }), j(Ee, { open: t2, onClose: () => n2(false), socket: e3.socket, themeType: e3.themeType })] });
}
var Oe = class e2 extends B {
  static getWidgetInfo() {
    return { id: `tplCollectionThemeWizard`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `ThemeConfigWizard`, visWidgetLabel: `theme_config_wizard`, visOrder: 0, visAttrs: [], visPrev: ``, customPalette: (e3) => j(De, { ...e3 }) };
  }
  getWidgetInfo() {
    return e2.getWidgetInfo();
  }
  renderWidgetBody() {
    return null;
  }
};
export {
  Oe as default
};
