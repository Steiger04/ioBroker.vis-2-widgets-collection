import { Ct as e, D as t, E as n, Et as r, Mt as i, O as a, Ot as o, Tt as s, Wt as c, Xt as l, _ as u, a as d, b as f, f as p, ln as m, m as h, o as g, s as _, un as v, v as y, vt as b, w as x, x as S } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { t as C } from "./createSvgIcon-CNE8PSAz.js";
import { Zt as w } from "./createStyled-C2Uprg2G.js";
import { S as T, _ as E, b as D, c as O, d as k, f as A, g as j, l as M, m as N, n as P, p as F, t as ee, y as I } from "./usePopoverPositioning-DS2NF3yn.js";
var L = `background.background-color.background-image.background-position.background-repeat.background-size.background-clip.background-origin.border.border-width.border-style.border-color.border-radius.color.text-align.text-shadow.font-family.font-size.font-weight.font-style.font-variant.line-height.letter-spacing.word-spacing.box-sizing.box-shadow`.split(`.`), R = (e2) => x(() => {
  if (!e2) return { backgroundStyles: void 0, borderStyles: void 0, textStyles: void 0, fontStyles: void 0, boxStyles: void 0 };
  let t2 = {}, n2 = {}, r2 = {}, i2 = {}, a2 = {};
  return L.forEach((o2) => {
    let s2 = e2[o2];
    s2 !== void 0 && (o2.includes(`background`) ? t2[o2] = s2 : o2.includes(`border`) ? n2[o2] = s2 : o2.includes(`font`) || o2.includes(`line-height`) || o2.includes(`letter-spacing`) || o2.includes(`word-spacing`) ? i2[o2] = s2 : o2.includes(`text`) || o2.includes(`color`) ? r2[o2] = s2 : a2[o2] = s2);
  }), { backgroundStyles: t2, borderStyles: n2, textStyles: r2, fontStyles: i2, boxStyles: a2 };
}, [e2]);
function z() {
  return a(I, E);
}
var B = [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `button`, `caption`, `overline`, `inherit`];
function te(e2) {
  let { typography: t2 } = e2;
  if (!t2) return e2;
  let n2 = { ...t2 };
  for (let e3 of B) delete n2[e3];
  return delete n2.pxToRem, { ...e2, typography: n2 };
}
function ne(e2, r2, i2) {
  let [a2, s2] = t(``);
  f(() => {
    let t2 = true, n2 = (e3, n3) => {
      t2 && s2(typeof (n3 == null ? void 0 : n3.val) == `string` ? n3.val : ``);
    };
    return e2.getState(D).then((e3) => {
      t2 && s2(typeof (e3 == null ? void 0 : e3.val) == `string` ? e3.val : ``);
    }).catch((e3) => console.error(`Cannot read theme state ${D}: ${e3}`)), e2.subscribeState(D, n2).catch((e3) => console.error(`Cannot subscribe theme state ${D}: ${e3}`)), () => {
      t2 = false;
      try {
        e2.unsubscribeState(D, n2);
      } catch (e3) {
        console.error(`Cannot unsubscribe theme state ${D}: ${e3}`);
      }
    };
  }, [e2]);
  let c2 = x(() => {
    if (!a2) return {};
    try {
      let e3 = O(JSON.parse(a2));
      return e3.isValid ? e3.theme ?? {} : {};
    } catch {
      return {};
    }
  }, [a2]), l2 = z(), u2 = l2 ?? c2;
  f(() => {
    M(u2.googleFonts);
  }, [u2.googleFonts]);
  let d2 = n(c2);
  return f(() => {
    let e3 = d2.current !== c2;
    d2.current = c2, l2 && e3 && JSON.stringify(l2) === JSON.stringify(c2) && j();
  }, [l2, c2]), x(() => {
    let e3 = te(r2), t2 = N(e3, `palette.primary.main`), n2 = A(k(u2), t2), a3 = w(w(e3, i2 ?? {}), n2), s3 = N(a3, `corners`), c3 = F(s3), l3 = c3 ? w(a3, { shape: { borderRadius: (s3 == null ? void 0 : s3.topLeft) ?? 4 }, components: { MuiPaper: { styleOverrides: { root: { borderRadius: c3 } } }, MuiCard: { styleOverrides: { root: { borderRadius: c3 } } } } }) : a3;
    return o(l3);
  }, [r2, i2, u2]);
}
var V = (e2) => e2.startsWith(`&`) || e2.includes(` `) || e2.startsWith(`@`) ? e2 : e2.replace(/-([a-z])/g, (e3, t2) => t2.toUpperCase()), re = (e2) => {
  let t2 = Object.fromEntries(Object.entries(e2).map(([e3, t3]) => {
    if (Array.isArray(t3)) {
      let n2 = t3.filter((e4) => e4 != null);
      return [V(e3), n2.length > 0 ? n2 : void 0];
    }
    return typeof t3 == `object` && t3 ? [V(e3), re(t3)] : [V(e3), t3];
  }).filter(([, e3]) => e3 != null));
  return Object.keys(t2).length > 0 ? t2 : void 0;
}, H = (e2) => {
  if (!e2) return {};
  let t2 = Object.fromEntries(Object.entries(e2).map(([e3, t3]) => {
    let n2 = V(e3);
    if (Array.isArray(t3)) {
      let e4 = t3.filter((e5) => e5 != null);
      return [n2, e4.length > 0 ? e4 : void 0];
    }
    return typeof t3 == `object` && t3 ? [n2, re(t3)] : [n2, t3];
  }).filter(([, e3]) => e3 != null));
  return Object.keys(t2).length > 0 ? t2 : {};
}, U = p({});
function ie({ children: e2, context: t2 }) {
  let n2 = t2.theme, r2 = t2.widget, a2 = t2.socket, { fontStyles: o2, textStyles: c2 } = R(r2.style || {}), l2 = ne(a2, n2, x(() => ({ components: { MuiTypography: { styleOverrides: { root: { ...H(o2), ...H(c2) } } } } }), [o2, c2]));
  return _(i, { theme: l2, children: [g(s, { styles: { html: { boxSizing: `border-box` }, "*, *::before, *::after": { boxSizing: `inherit` } } }), g(U.Provider, { value: { ...t2, theme: l2 }, children: e2 })] });
}
function ae(e2, t2) {
  return g(ie, { context: t2, children: e2 });
}
var W = ({ dividerText: t2 = `` }) => {
  let n2 = { position: `absolute`, left: 0, width: `100%` };
  return g(r, { sx: { display: `inline-block`, pt: 1.5, pb: t2 ? 2 : 1.5 }, children: t2 ? g(c, { sx: n2, children: g(e, { sx: { opacity: 0.7, color: `primary.main` }, variant: `caption`, children: T.t(t2) }) }) : g(c, { sx: n2 }) });
}, oe = C(g(`path`, { d: `M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z` }), `Delete`), G = { HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i, GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i, GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i };
function K(e2) {
  if (!e2 || e2.trim() === ``) return { isValid: true, normalizedValue: ``, colorType: `empty` };
  let t2 = e2.trim();
  return G.HEX.test(t2) ? { isValid: true, normalizedValue: t2, colorType: `hex` } : G.RGB.test(t2) ? { isValid: true, normalizedValue: t2, colorType: `rgb` } : G.GRADIENT.test(t2) ? { isValid: true, normalizedValue: t2, colorType: `gradient` } : { isValid: false, normalizedValue: t2, colorType: `invalid` };
}
function se(e2) {
  if (e2 == null || typeof e2 != `string`) return false;
  let t2 = e2.trim();
  return t2 !== `` && G.GRADIENT_PREFIX.test(t2);
}
function ce(e2) {
  if (!e2 || typeof e2 != `string`) return null;
  let t2 = e2.match(G.HEX);
  if (!t2) return null;
  let n2 = t2[1];
  n2.length === 3 && (n2 = n2.split(``).map((e3) => e3 + e3).join(``));
  let r2 = parseInt(n2.substring(0, 2), 16), i2 = parseInt(n2.substring(2, 4), 16), a2 = parseInt(n2.substring(4, 6), 16), o2 = 1;
  if (n2.length === 8) {
    let e3 = parseInt(n2.substring(6, 8), 16);
    o2 = Math.round(e3 / 255 * 1e3) / 1e3;
  }
  return { r: r2, g: i2, b: a2, a: o2 };
}
function le(e2) {
  if (!e2 || typeof e2 != `string` || !e2.match(G.RGB)) return null;
  let t2 = e2.match(/\d+\.?\d*/g);
  if (!t2 || t2.length < 3) return null;
  let n2 = parseInt(t2[0], 10), r2 = parseInt(t2[1], 10), i2 = parseInt(t2[2], 10), a2 = t2[3] === void 0 ? 1 : parseFloat(t2[3]);
  return n2 < 0 || n2 > 255 || r2 < 0 || r2 > 255 || i2 < 0 || i2 > 255 || a2 < 0 || a2 > 1 ? null : { r: n2, g: r2, b: i2, a: Math.round(a2 * 1e3) / 1e3 };
}
function q(e2) {
  if (!e2 || typeof e2 != `string`) return null;
  let t2 = e2.trim();
  return t2.startsWith(`#`) ? ce(t2) : t2.toLowerCase().startsWith(`rgb`) ? le(t2) : null;
}
function ue(e2) {
  if (!e2 || typeof e2 != `string`) return null;
  let t2 = Array.from(e2.matchAll(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi));
  if (t2.length < 2) return null;
  let n2 = t2.map((e3, n3) => {
    let r2 = e3[1], i2;
    return i2 = e3[2] ? parseFloat(e3[2]) : n3 / (t2.length - 1) * 100, { color: r2, position: i2 };
  });
  return n2.sort((e3, t3) => e3.position - t3.position), n2;
}
function de(e2) {
  if (!e2 || e2.length < 2) return null;
  let t2 = e2.find((e3) => e3.position === 50);
  if (t2) {
    let e3 = q(t2.color);
    return e3 ? e3.a === 1 ? `rgb(${e3.r}, ${e3.g}, ${e3.b})` : `rgba(${e3.r}, ${e3.g}, ${e3.b}, ${e3.a})` : null;
  }
  let n2 = null, r2 = null;
  for (let t3 = 0; t3 < e2.length; t3++) if (e2[t3].position <= 50 && (n2 = e2[t3]), e2[t3].position > 50 && !r2) {
    r2 = e2[t3];
    break;
  }
  if (!r2 && n2) {
    let e3 = q(n2.color);
    return e3 ? e3.a === 1 ? `rgb(${e3.r}, ${e3.g}, ${e3.b})` : `rgba(${e3.r}, ${e3.g}, ${e3.b}, ${e3.a})` : null;
  }
  if (!n2 && r2) {
    let e3 = q(r2.color);
    return e3 ? e3.a === 1 ? `rgb(${e3.r}, ${e3.g}, ${e3.b})` : `rgba(${e3.r}, ${e3.g}, ${e3.b}, ${e3.a})` : null;
  }
  if (!n2 || !r2) return null;
  let i2 = q(n2.color), a2 = q(r2.color);
  if (!i2 || !a2) return null;
  let o2 = r2.position - n2.position;
  if (o2 === 0) {
    let e3 = a2;
    return e3.a === 1 ? `rgb(${e3.r}, ${e3.g}, ${e3.b})` : `rgba(${e3.r}, ${e3.g}, ${e3.b}, ${e3.a})`;
  }
  let s2 = (50 - n2.position) / o2, c2 = Math.round(i2.r + (a2.r - i2.r) * s2), l2 = Math.round(i2.g + (a2.g - i2.g) * s2), u2 = Math.round(i2.b + (a2.b - i2.b) * s2), d2 = Math.round((i2.a + (a2.a - i2.a) * s2) * 1e3) / 1e3;
  return d2 === 1 ? `rgb(${c2}, ${l2}, ${u2})` : `rgba(${c2}, ${l2}, ${u2}, ${d2})`;
}
function J(e2) {
  if (e2 == null || typeof e2 != `string`) return null;
  let t2 = e2.trim();
  if (t2 === ``) return null;
  if (!G.GRADIENT_PREFIX.test(t2)) return q(t2) ? t2 : null;
  try {
    let e3 = ue(t2);
    return e3 ? de(e3) : null;
  } catch {
    return null;
  }
}
function fe(e2, t2, n2) {
  if (e2.fallbackFields && Array.isArray(e2.fallbackFields) && e2.fallbackFields.length > 0) for (let n3 of e2.fallbackFields) {
    let e3 = t2[n3];
    if (e3 && typeof e3 == `string`) {
      let t3 = K(e3);
      if (t3.isValid && t3.normalizedValue.trim() !== ``) return t3.normalizedValue;
    }
  }
  return !e2.fallbackFields || e2.fallbackFields.length > 0 ? n2 : null;
}
function pe({ field: e2, data: a2, onDataChange: o2, props: s2 }) {
  let c2 = e2.name, p2 = a2[c2], [m2, h2] = t(p2 || ``), [y2, x2] = t(false), [S2, C2] = t(null), w2 = n(false), E2 = n(p2), D2 = n(null), O2 = ne(s2.context.socket, s2.context.theme), k2 = O2.palette.primary.main, { anchorOrigin: A2, transformOrigin: j2, maxHeight: M2, setContentRef: N2, popoverActionRef: F2 } = ee(S2, !!S2);
  f(() => () => {
    D2.current !== null && clearTimeout(D2.current);
  }, []);
  let I2 = u((t2, n2 = false) => {
    if (D2.current !== null && (clearTimeout(D2.current), D2.current = null), t2 == null) {
      h2(``), x2(false), E2.current = null, o2({ [c2]: null }), w2.current = false;
      return;
    }
    if (typeof t2 != `string`) {
      x2(true);
      return;
    }
    if (t2.trim() === ``) {
      h2(``), x2(false), E2.current = null, o2({ [c2]: null }), w2.current = false;
      return;
    }
    let r2 = K(t2);
    if (h2(t2), !r2.isValid) {
      x2(true);
      return;
    }
    x2(false);
    let i2;
    if (e2.noGradient === true) {
      let e3 = J(r2.normalizedValue);
      if (e3 === null) {
        x2(true);
        return;
      }
      i2 = e3;
    } else i2 = r2.normalizedValue || null;
    E2.current = i2, n2 ? D2.current = setTimeout(() => {
      D2.current = null, o2({ [c2]: i2 });
    }, 150) : o2({ [c2]: i2 });
  }, [c2, e2.noGradient, o2]), L2 = u((e3) => I2(e3, true), [I2]), R2 = u((e3) => I2(e3.target.value), [I2]), z2 = u(() => I2(null), [I2]), B2 = !!S2;
  return f(() => {
    if (p2 !== E2.current) {
      E2.current = p2;
      let e3 = p2 || ``;
      h2(e3), x2(false), (!e3 || e3.trim() === ``) && (w2.current = false);
    }
  }, [p2]), f(() => {
    if (!B2 || w2.current) return;
    if (p2 && p2.trim() !== ``) {
      w2.current = true;
      return;
    }
    let t2 = fe(e2, a2, k2);
    if (t2) {
      let n2 = K(t2);
      if (n2.isValid) {
        if (e2.noGradient === true) {
          let e3 = J(n2.normalizedValue);
          e3 !== null && (h2(t2), x2(false), E2.current = e3, o2({ [c2]: e3 }));
        } else h2(t2), x2(false), o2({ [c2]: t2 });
      }
    }
    w2.current = true;
  }, [B2, a2, c2, e2, p2, k2, o2]), g(d, { children: _(i, { theme: O2, children: [_(r, { sx: { display: `flex`, alignItems: `flex-start`, gap: 0.5, mt: 1 }, children: [g(b, { variant: `standard`, fullWidth: true, value: m2, error: y2, helperText: y2 ? `Invalid color format (use Hex, RGB, RGBA, or Gradient)` : ``, onChange: R2, slotProps: { htmlInput: { style: { whiteSpace: `nowrap`, overflow: `hidden`, textOverflow: `ellipsis`, paddingBottom: `2px`, fontSize: `80%` } } } }), m2 && g(l, { onClick: z2, title: T.t(`clear_color`), size: `large`, sx: { mt: -1, mr: -1.5 }, children: g(oe, {}) }), g(r, { onClick: (e3) => C2(e3.currentTarget), title: T.t(`choose_color`), sx: { mt: m2 ? `4px` : `-2px`, px: `4px`, py: m2 ? `4px` : `3px`, backgroundColor: m2 ? O2.name === `light` ? O2.palette.common.white : `#121212` : `transparent`, borderRadius: `1px`, display: `inline-block`, cursor: `pointer`, verticalAlign: `middle`, boxSizing: `border-box`, border: y2 ? `1px solid ${O2.palette.error.main}` : m2 ? `1px solid ${O2.name === `light` ? O2.palette.grey[400] : O2.palette.common.black}` : `1px dashed ${O2.name === `light` ? O2.palette.grey[400] : O2.palette.text.secondary}`, opacity: y2 ? 0.6 : 1 }, children: g(r, { sx: { width: m2 ? `36px` : `38px`, height: m2 ? `14px` : `18px`, borderRadius: `2px`, background: y2 ? `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)` : m2 || `transparent` } }) })] }), g(v, { action: F2, slotProps: { paper: { elevation: 0, sx: { p: `9px`, borderRadius: `6px`, backgroundColor: `rgb(32,32,32)`, boxSizing: `border-box`, maxHeight: M2, overflowX: `hidden`, overflowY: `auto` } } }, open: B2, anchorEl: S2, onClose: () => C2(null), transformOrigin: j2, anchorOrigin: A2, children: g(r, { ref: N2, sx: { borderRadius: `6px` }, children: g(P, { value: m2 || O2.palette.primary.main, onChange: L2, hidePresets: true, hideInputs: true, hideEyeDrop: true, hideInputType: true }) }) })] }) });
}
function Y(e2) {
  let { name: t2, label: n2, default: r2 = ``, fallbackFields: i2, noGradient: a2, hidden: o2 } = e2, s2 = { name: t2, label: n2, default: r2, type: `custom`, component: (e3, t3, n3, r3) => g(pe, { field: e3, data: t3, onDataChange: n3, props: r3 }) };
  return i2 !== void 0 && (s2.fallbackFields = i2), a2 !== void 0 && (s2.noGradient = a2), o2 !== void 0 && (s2.hidden = o2), s2;
}
function me(e2, t2, n2) {
  return Y({ name: e2, label: t2, fallbackFields: [`sliderColor`], ...n2 });
}
var he = (e2, t2) => (n2) => n2[e2] !== t2, ge = [{ value: `normal`, label: `normal` }, { value: `italic`, label: `italic` }, { value: `oblique`, label: `oblique` }], _e = [{ value: `normal`, label: `normal` }, { value: `bold`, label: `bold` }, { value: `bolder`, label: `bolder` }, { value: `lighter`, label: `lighter` }, { value: `100`, label: `100` }, { value: `200`, label: `200` }, { value: `300`, label: `300` }, { value: `400`, label: `400` }, { value: `500`, label: `500` }, { value: `600`, label: `600` }, { value: `700`, label: `700` }, { value: `800`, label: `800` }, { value: `900`, label: `900` }], ve = [{ value: `both`, label: `both` }, { value: `left`, label: `left` }, { value: `right`, label: `right` }];
function ye(e2, t2) {
  let n2 = { label: ``, type: `custom`, component: () => g(W, { dividerText: e2 }) };
  return (t2 == null ? void 0 : t2.hidden) !== void 0 && (n2.hidden = t2.hidden), n2;
}
var X = (e2) => {
  if (!e2 || typeof e2 != `string`) return false;
  let t2 = e2.trim();
  return t2 === `` || t2.startsWith(`data:`) ? false : !!(t2.startsWith(`http://`) || t2.startsWith(`https://`) || t2.startsWith(`//`) || t2.startsWith(`/`) || t2.startsWith(`./`) || t2.startsWith(`../`) || (t2.includes(`/`) || t2.includes(`\\`)) && /\.[a-zA-Z0-9]+$/.test(t2));
}, be = (e2) => {
  let { groupName: t2 = ``, allFields: n2 = true } = e2 || {}, r2 = [{ label: ``, type: `custom`, component: () => g(W, { dividerText: `icon` }), hidden: `data.noIcon` }, { name: `icon${t2}`, label: `icon`, type: `image`, default: `` }, { name: `iconSmall${t2}`, label: `small_icon`, type: `icon64`, default: `` }, { name: `iconSize${t2}`, label: `icon_size`, type: `slider`, min: 1, max: 500, step: 1, hidden: `data.noIcon` }, { name: `enableIconColorMask${t2}`, label: `enable_icon_color_mask`, type: `checkbox`, default: false, tooltip: `enable_icon_color_mask_tooltip`, hidden: (e3, n3) => {
    let r3 = true, i3 = n3 === void 0 ? t2 : n3, a2 = e3[`icon${i3}`], o2 = e3[`iconSmall${i3}`];
    return (i3 === `` || i3 === `Active`) && (r3 = false), n3 !== void 0 && (r3 = !e3.iconColor && !e3.enableIconColorMask && !e3[`iconColor${n3}`] && !X(a2) && !X(o2)), r3;
  } }, Y({ name: `iconColor${t2}`, label: `icon_color`, fallbackFields: [``], noGradient: true }), { name: `iconXOffset${t2}`, label: `icon_x_offset`, type: `text`, hidden: `data.noIcon` }, { name: `iconYOffset${t2}`, label: `icon_y_offset`, type: `text`, hidden: `data.noIcon` }, { label: ``, type: `custom`, component: () => g(W, { dividerText: `header` }), hidden: (e3, t3) => e3.noHeader && !n2 }, { name: `noHeader${t2}`, type: `checkbox`, label: `no_header`, default: false }, { name: `noHeaderIcon${t2}`, type: `checkbox`, label: `no_header_icon`, default: false, hidden: `data.noHeader` }, { name: `header${t2}`, label: `header_text`, type: `html`, default: ``, hidden: `data.noHeader` }, { name: `headerSize${t2}`, label: `header_size`, type: `slider`, min: 0, max: 500, step: 1, hidden: `data.noHeader` }, { label: ``, type: `custom`, component: () => g(W, { dividerText: `value` }) }, { name: `alias${t2}`, label: `alias`, type: `html`, default: `` }, { name: `value${t2}`, label: `value`, type: `text`, default: ``, hidden: (e3, t3) => {
    var _a;
    return ((_a = e3.oidObject) == null ? void 0 : _a.type) === `boolean` || e3.name === `valueActive`;
  } }, { name: `valueSize${t2}`, label: `value_size`, type: `slider`, min: 0, max: 500, step: 1 }, { label: ``, type: `custom`, component: () => g(W, { dividerText: `footer` }), hidden: (e3, t3) => e3.noFooter && !n2 }, { name: `noFooter${t2}`, label: `no_footer`, type: `checkbox`, default: false }, { name: `footer${t2}`, label: `footer_text`, type: `html`, default: ``, hidden: `data.noFooter` }, { name: `footerSize${t2}`, label: `footer_size`, type: `slider`, min: 0, max: 500, step: 1, hidden: `data.noFooter` }, { label: ``, type: `custom`, component: () => g(W, { dividerText: `characteristics` }) }, { name: `noCard${t2}`, label: `without_card`, type: `checkbox`, default: false }, { name: `squaredCorner${t2}`, label: `squared_corner`, type: `checkbox`, default: false }, Y({ name: `textColor${t2}`, label: `text_color`, fallbackFields: [``] }), { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => g(W, {}) }, { name: `outlined${t2}`, label: `outlined`, type: `checkbox`, default: false }, { name: `outlinedFrame${t2}`, label: `outlined_frame`, type: `checkbox`, default: false }, { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => g(W, {}) }, { name: `basePadding${t2}`, label: `base_padding`, type: `slider`, min: 0, max: 10, step: 0.1, default: 1 }, { name: `baseElevation${t2}`, label: `base_elevation`, type: `slider`, min: 0, max: 24, step: 1, default: 4 }, { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => g(W, { dividerText: `geometry` }) }, { name: `square${t2}`, label: `square`, type: `checkbox`, hidden: `data.circle || data.ellipse`, default: false }, { name: `ellipse${t2}`, label: `ellipse`, type: `checkbox`, hidden: `data.circle || data.square`, default: false }, { name: `circle${t2}`, label: `circle`, type: `checkbox`, hidden: `data.ellipse || data.square` }, { label: ``, type: `custom`, component: () => g(W, { dividerText: `background` }) }, Y({ name: `background${t2}`, label: `background`, fallbackFields: [] }), { label: ``, type: `custom`, component: () => g(W, { dividerText: `frame_background` }) }, Y({ name: `frameBackground${t2}`, label: `frame_background`, fallbackFields: [] })];
  if (n2) {
    let e3 = [`alias${t2}`, `value${t2}`];
    return r2.filter((t3) => !e3.includes(t3.name));
  }
  let i2 = [`allFieldsDivider`, `noHeader${t2}`, `noHeaderIcon${t2}`, t2 === `Active` ? `value${t2}` : ``, `noFooter${t2}`, `noCard${t2}`, `squaredCorner${t2}`, `outlined${t2}`, `outlinedFrame${t2}`, `basePadding${t2}`, `baseElevation${t2}`, `square${t2}`, `ellipse${t2}`, `circle${t2}`];
  return r2.filter((e3) => !i2.includes(e3.name));
}, xe = async (e2, t2) => {
  var _a;
  let n2 = t2._id.split(`.`);
  for (let t3 = n2.length; t3 > 0; t3--) try {
    let r2 = await e2.getObject(n2.slice(0, t3).join(`.`));
    if ((_a = r2 == null ? void 0 : r2.common) == null ? void 0 : _a.icon) return r2.common.icon;
  } catch {
    continue;
  }
  return null;
}, Z = (e2, t2 = `oid`) => {
  var _a;
  Object.keys(e2).forEach((n3) => {
    n3.startsWith(t2) && n3.endsWith(`Object`) && delete e2[n3];
  });
  let n2 = `iconSmall.icon.iconSize.iconColor.iconHover.iconXOffset.iconYOffset.noHeader.header.headerSize.alias.value.valueSize.noFooter.footer.footerSize.noCard.squaredCorner.textColor.outlined.outlinedFrame.basePadding.baseElevation.square.ellipse.circle.background.backgroundColor.frameBackground.frameBackgroundColor`.split(`.`);
  if (t2 === `oid`) {
    delete e2.icon, delete e2.write;
    let t3 = typeof e2.values_count == `number` ? e2.values_count : 0, r2 = Object.keys(((_a = e2.oidObject) == null ? void 0 : _a.commonStates) || {}).length, i2 = Math.max(t3, r2);
    for (let t4 = 1; t4 <= i2; t4++) n2.forEach((n3) => {
      delete e2[`${n3}${t4}`];
    });
    e2.values_count = 0;
  }
}, Se = (e2, t2) => {
  switch (t2) {
    case `boolean`:
      return e2 === `true`;
    case `number`:
      return Number(e2);
    case `string`:
      return String(e2);
    case `mixed`:
      return e2 === `true` ? true : e2 === `false` ? false : !isNaN(Number(e2)) && e2 !== `` ? Number(e2) : String(e2);
    default:
      return String(e2);
  }
}, Ce = (e2, t2 = `oid`) => async (n2, r2, i2, a2) => {
  if (!r2[t2]) Z(r2, t2), setTimeout(() => i2(r2), 100);
  else try {
    let n3 = await a2.getObject(r2[t2]);
    if (!n3) {
      Z(r2, t2), setTimeout(() => i2(r2), 100);
      return;
    }
    let o2 = n3.common.type;
    if (!e2.includes(o2)) return;
    let s2 = { _id: n3._id, name: n3.common.name || ``, type: o2, icon: await xe(a2, n3), write: n3.common.write, onlyDisplay: !n3.common.write, unit: n3.common.unit || ``, minValue: n3.common.min || 0, maxValue: n3.common.max || 100 };
    if (r2[`${t2}Object`] = s2, r2.icon = s2.icon, r2.write = s2.write, r2.onlyDisplay = s2.onlyDisplay, r2.minValue = s2.minValue, r2.maxValue = s2.maxValue, n3.common.states) {
      let e3 = n3.common.states;
      if (Array.isArray(e3)) {
        let t3 = {};
        e3.forEach((e4) => {
          t3[e4] = e4;
        }), e3 = t3;
      }
      r2[`${t2}Object`].commonStates = e3, t2 === `oid` && (r2.values_count = Object.keys(e3).length, Object.entries(e3).forEach(([e4, t3], n4) => {
        let i3 = n4 + 1;
        r2[`value${i3}`] = Se(e4, o2), r2[`alias${i3}`] = String(t3);
      }));
    } else o2 === `boolean` && t2 === `oid` ? (r2[`${t2}Object`].commonStates = { true: `TRUE`, false: `FALSE` }, r2.values_count = 2, r2.value1 = true, r2.alias1 = `TRUE`, r2.value2 = false, r2.alias2 = `FALSE`) : t2 === `oid` && (r2.values_count = 0);
    t2 === `oid` && r2.ignoreCommonStates !== false && (r2.values_count = 0), setTimeout(() => i2(r2), 100);
  } catch (e3) {
    console.error(`Error handling OID change for ${r2[t2]}:`, e3), Z(r2, t2), setTimeout(() => i2(r2), 100);
  }
}, we = (e2) => [{ name: `oid`, type: `id`, label: `oid`, onChange: Ce(e2) }, { label: ``, type: `custom`, component: () => g(W, {}), hidden: (e3, t2) => e3.oidObject === void 0 }, { name: `unit`, label: `unit`, type: `text`, default: ``, hidden: (e3, t2) => e3.oidObject === void 0, onChange: async (e3, t2, n2, r2) => {
  t2.oidObject && (t2.oidObject.unit = t2.unit || ``, setTimeout(() => n2(t2), 100));
} }, { label: ``, type: `custom`, component: () => g(W, {}), hidden: (e3, t2) => e3.oidObject === void 0 }, { name: `ignoreCommonStates`, type: `checkbox`, default: true, label: `ignore_common_states`, tooltip: `ignore_common_states_tooltip`, hidden: (e3, t2) => e3.oidObject === void 0, onChange: async (e3, t2, n2, r2) => {
  var _a, _b;
  if (t2.ignoreCommonStates !== false) t2.values_count = 0;
  else {
    let e4 = (_a = t2.oidObject) == null ? void 0 : _a.commonStates;
    t2.values_count = e4 ? Object.keys(e4).length : ((_b = t2.oidObject) == null ? void 0 : _b.type) === `boolean` ? 2 : 0;
  }
  setTimeout(() => n2(t2), 100);
} }, { name: `values_count`, type: `number`, default: 0, label: `values_count`, hidden: (e3, t2) => {
  var _a;
  return ((_a = e3.oidObject) == null ? void 0 : _a.type) === `boolean` || e3.oidObject === void 0 || e3.ignoreCommonStates !== false;
} }], Te = () => {
  let { isSignalVisible: e2, refService: t2, widget: n2 } = y(U), r2 = x(() => {
    let t3 = [], r3 = Number(n2.data[`signals-count`]) || 0;
    for (let n3 = 0; n3 < r3; n3++) e2(n3) && t3.push(n3);
    return t3;
  }, [n2.data, e2]), i2 = x(() => {
    let e3 = {};
    return r2.forEach((t3) => {
      e3[t3] = n2.data[`signals-color-${t3}`];
    }), e3;
  }, [n2.data, r2]);
  f(() => {
    if (!(t2 == null ? void 0 : t2.current)) return;
    let e3 = t2.current.children, n3 = [];
    Array.from(e3).forEach((e4) => {
      let t3 = e4.children[0];
      t3 && t3 instanceof HTMLElement && t3.className === `vis-signal-icon iconOwn` && n3.push(t3);
    }), n3.forEach((e4, t3) => {
      let n4 = r2[t3], a2 = n4 === void 0 ? void 0 : i2[n4];
      a2 ? (e4.style.color = a2, e4.style.filter = `drop-shadow(0px 10000px 0)`, e4.style.transform = `translateY(-10000px)`) : (e4.style.color = ``, e4.style.filter = ``, e4.style.transform = ``);
    });
  }, [r2, i2, t2]);
}, Ee = (e2, n2 = 28) => {
  let [r2, i2] = t({ width: void 0, height: void 0, maxWidth: void 0 }), a2 = u((e3) => {
    if (e3.length === 0) return;
    let { width: t2, height: r3 } = e3[0].contentRect, a3 = Math.round(t2), o3 = Math.round(r3), s2 = a3 <= o3 + n2 + 12 ? a3 - n2 - 12 : o3;
    i2({ width: a3, height: o3, maxWidth: s2 });
  }, [n2]), o2 = x(() => e2 ? typeof e2 == `object` && `current` in e2 ? e2.current : e2 : null, [e2]);
  return f(() => {
    if (!o2) {
      i2({ width: void 0, height: void 0, maxWidth: void 0 });
      return;
    }
    let e3 = new ResizeObserver(a2);
    try {
      e3.observe(o2);
    } catch (e4) {
      console.warn(`ResizeObserver failed to observe element:`, e4);
      return;
    }
    return () => {
      try {
        e3.disconnect();
      } catch (e4) {
        console.warn(`ResizeObserver cleanup failed:`, e4);
      }
    };
  }, [o2, a2]), r2;
}, De = (e2) => {
  let { widget: n2 } = y(U), [r2, i2] = t(`100%`), [a2, o2] = t(`100%`), { width: s2, height: c2 } = Ee(e2), l2 = x(() => ({ basePadding: n2.data.basePadding || 0, isSquare: n2.data.square || false, isCircle: n2.data.circle || false }), [n2.data.basePadding, n2.data.square, n2.data.circle]), u2 = x(() => l2.basePadding * 16, [l2.basePadding]);
  return f(() => {
    if (!s2 || !c2 || s2 < 0 || c2 < 0) return;
    if (!l2.isSquare && !l2.isCircle) {
      i2(`100%`), o2(`100%`);
      return;
    }
    if (!(s2 >= u2 && c2 >= u2)) {
      i2(`0px`), o2(`0px`);
      return;
    }
    let e3 = s2 - u2, t2 = c2 - u2, n3 = Math.min(e3, t2);
    i2(`${n3}px`), o2(`${n3}px`);
  }, [s2, c2, u2, l2.isSquare, l2.isCircle]), { width: r2, height: a2 };
};
function Q(e2) {
  return e2 == null || typeof e2 != `string` || e2.trim() === `` ? null : se(e2) ? e2 : null;
}
var Oe = h(({ children: i2, data: a2, oidValue: o2 = null, isValidType: s2 = true, bgActive: c2 = true, sx: l2 = {} }, u2) => {
  let p2 = n(null), h2 = n(null), [v2, b2] = t(null), C2 = n(null), w2 = n(null), T2 = y(U);
  if (!T2) throw Error(`CollectionBase must be used within CollectionProvider`);
  let { wrappedContent: E2, widget: D2 } = T2, { backgroundStyles: O2, borderStyles: k2 } = R(D2.style), { width: A2, height: j2 } = De(v2);
  Te();
  let M2 = D2.data.oidObject, N2 = M2 == null ? void 0 : M2._id, P2 = x(() => {
    if (D2.data.noFooter) return ``;
    let e2 = o2 || o2 === 0 || String(o2) === `false` ? `${o2}${(M2 == null ? void 0 : M2.unit) ?? ``}` : ``;
    return a2.footer || a2.alias || a2.value || e2 || ``;
  }, [a2.footer, a2.alias, a2.value, o2, M2 == null ? void 0 : M2.unit, D2.data.noFooter]), F2 = x(() => H({ overflow: `hidden`, width: `100%`, height: `100%`, display: `flex`, flexDirection: `column`, justifyContent: `space-between`, alignItems: `center`, ...O2, background: E2 ? a2.frameBackground : a2.frameBackground || `transparent`, backgroundColor: E2 ? Q(a2.frameBackground) ? void 0 : a2.frameBackground : Q(a2.frameBackground) ? `transparent` : a2.frameBackground, borderColor: E2 ? `` : a2.frameBackground || (k2 == null ? void 0 : k2[`border-color`]) }), [O2, k2, a2.frameBackground, E2]), ee2 = x(() => H({ overflow: `hidden`, width: A2, height: j2, display: `flex`, justifyContent: `center`, alignItems: `center`, background: c2 && E2 ? a2.background : c2 ? a2.background || `transparent` : E2 ? void 0 : `transparent`, borderColor: E2 ? `` : a2.background || (k2 == null ? void 0 : k2[`border-color`]), borderRadius: D2.data.circle || D2.data.ellipse ? `50%` : void 0, ...l2 }), [A2, j2, c2, E2, a2.background, k2, D2.data.circle, D2.data.ellipse, l2]);
  return f(() => {
    !D2.data.noHeader && C2.current && (C2.current.innerHTML = a2.header);
  }, [a2.header, D2.data.noHeader]), f(() => {
    !D2.data.noFooter && w2.current && (w2.current.innerHTML = String(P2));
  }, [P2, D2.data.noFooter]), S(u2, () => ({ get paper0() {
    return (p2 == null ? void 0 : p2.current) ?? null;
  }, get paper1() {
    return (h2 == null ? void 0 : h2.current) ?? null;
  }, get header() {
    return (C2 == null ? void 0 : C2.current) ?? null;
  } })), _(m, { ref: p2, className: `BASE-PAPER-0`, square: D2.data.squaredCorner, variant: D2.data.outlinedFrame ? `outlined` : `elevation`, sx: F2, children: [!!s2 && _(d, { children: [g(r, { sx: { width: D2.data.noHeader ? `0%` : `100%`, height: D2.data.noHeader ? `0%` : `auto`, mt: (D2.data.basePadding ?? 8) / 2, mb: -(D2.data.basePadding ?? 8) / 2 }, children: g(e, { ref: C2, noWrap: true, variant: `body2`, sx: { fontSize: a2.headerSize, background: Q(a2.textColorCm), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: Q(a2.textColorCm) ? `transparent` : a2.textColorCm } }) }), g(r, { className: `BASE-BOX-1`, ref: b2, sx: { overflow: `hidden`, p: D2.data.basePadding, width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: g(m, { ref: h2, className: `BASE-PAPER-1`, elevation: D2.data.outlined ? 0 : Number(D2.data.baseElevation) || 0, square: !D2.data.basePadding || D2.data.squaredCorner, variant: D2.data.outlined ? `outlined` : `elevation`, sx: ee2, children: i2 }) }), g(r, { sx: { width: D2.data.noFooter ? `0%` : `100%`, height: D2.data.noFooter ? `0%` : `auto`, mt: -(D2.data.basePadding ?? 8) / 2, mb: (D2.data.basePadding ?? 8) / 2 }, children: g(e, { ref: w2, noWrap: true, variant: `body2`, sx: { fontSize: a2.footerSize, background: Q(a2.textColorCm), WebkitBackgroundClip: `text`, backgroundClip: `text`, color: Q(a2.textColorCm) ? `transparent` : a2.textColorCm } }) })] }), !s2 && g(r, { sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: g(e, { variant: `body2`, sx: { p: 1, width: `100%`, textAlign: `center` }, children: N2 ? `${N2} has an invalid type!` : `Please select a valid object ID` }) })] });
});
Oe.displayName = `CollectionBase`;
var ke = (e2) => !e2 || typeof e2 != `string` ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(e2), Ae = (e2, t2, n2) => !n2 && !ke(e2) || !t2 || t2 === `` ? {} : { color: t2, filter: `drop-shadow(0px 10000px 0)`, transform: `translateY(-10000px)` }, je = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`, Me = ({ src: e2, style: t2 = {}, alt: n2 = `` }) => g(`img`, { src: e2 && e2 !== `undefined` && e2 !== null ? e2 : je, alt: n2, style: t2, onError: (e3) => {
  console.log(`ERROR LOADING IMAGE, FALLING BACK TO TRANSPARENT PIXEL`);
  let t3 = e3.currentTarget;
  t3.onerror = null, t3.src = je;
} }), Ne = ({ data: e2, widget: t2 }) => {
  let n2 = y(U).theme, r2 = e2.icon, i2 = e2.iconColor || n2.palette.primary.main;
  return !t2.data.noHeaderIcon && r2 ? g(Me, { alt: ``, src: r2, style: { position: `absolute`, top: `calc(0px - ${e2.iconYOffsetCm})`, right: `calc(0px - ${e2.iconXOffsetCm})`, height: e2.iconSizeCm, ...Ae(r2, i2, !!e2.forceColorMaskCm) } }) : null;
};
function Pe(e2, t2) {
  return e2[t2];
}
function Fe(e2) {
  return typeof e2 == `object` && !!e2 && `sliderOrientation` in e2;
}
var Ie = (e2) => typeof e2 == `number` ? `calc(${e2 / 100}rem * 0.875)` : void 0;
function Le(e2) {
  return { markerIconSize: e2.markerIconSize, markerTextColor: e2.markerTextColor, markerTextSize: e2.markerTextSize, markerIconColor: e2.markerIconColor };
}
function Re(e2) {
  return {};
}
function $(e2) {
  for (let t2 of e2) if (t2.condition !== false && t2.value !== void 0 && t2.value !== null && (typeof t2.value != `string` || t2.value.trim() !== ``)) return t2.value;
}
function ze(e2) {
  let { rxData: t2, oidObject: n2, oidName: r2, theme: i2, fontStyles: a2, textStyles: o2, backgroundStyles: s2, formatSize: c2, getDataValue: l2, widgetResolver: u2 } = e2, d2 = (e3) => e3 && String(e3) !== `` ? String(e3) : void 0;
  return { icon: (e3, n3) => t2.noIcon ? `` : $([{ condition: n3, value: l2(`icon`, `Active`) }, { condition: n3, value: l2(`iconSmall`, `Active`) }, { value: l2(`icon`, String(e3)) }, { value: l2(`iconSmall`, String(e3)) }, { value: l2(`icon`, ``) }, { value: l2(`iconSmall`, ``) }]) ?? ``, iconActive: (e3, n3) => !n3 || t2.noIcon ? `` : $([{ value: l2(`icon`, String(e3)) }, { value: l2(`iconSmall`, String(e3)) }]) ?? ``, iconSizeCm: (e3, t3) => $([{ condition: l2(`iconSize`, ``) === 0, value: `0px` }, { condition: !!l2(`iconSize`, ``), value: `calc(24px * ${l2(`iconSize`, ``)} / 100)` }]) ?? `24px`, iconSize: (e3, t3) => $([{ condition: t3 && l2(`iconSize`, `Active`) === 0, value: `0px` }, { condition: t3 && !!l2(`iconSize`, `Active`), value: `calc(24px * ${l2(`iconSize`, `Active`)} / 100)` }, { condition: String(e3) !== `` && l2(`iconSize`, String(e3)) === 0, value: `0px` }, { condition: String(e3) !== `` && !!l2(`iconSize`, String(e3)), value: `calc(24px * ${l2(`iconSize`, String(e3))} / 100)` }, { condition: typeof u2.markerIconSize == `number`, value: `calc(24px * ${u2.markerIconSize} / 100)` }, { condition: l2(`iconSize`, ``) === 0, value: `0px` }, { condition: !!l2(`iconSize`, ``), value: `calc(24px * ${l2(`iconSize`, ``)} / 100)` }]) ?? `24px`, iconSizeActive: (e3, t3) => t3 ? $([{ condition: l2(`iconSize`, String(e3)) === 0, value: `0px` }, { condition: !!l2(`iconSize`, String(e3)), value: `calc(24px * ${l2(`iconSize`, String(e3))} / 100)` }]) ?? `24px` : `24px`, iconSizeOnly: (e3, t3) => $([{ condition: t3 && (!!l2(`iconSize`, `Active`) || l2(`iconSize`, `Active`) === 0), value: `${l2(`iconSize`, `Active`)}%` }, { condition: !!l2(`iconSize`, String(e3)) || l2(`iconSize`, String(e3)) === 0, value: `${l2(`iconSize`, String(e3))}%` }]) ?? `100%`, iconSizeActiveOnly: (e3, t3) => t3 ? $([{ value: l2(`iconSize`, String(e3)) }]) ?? void 0 : void 0, iconWidth: (e3, n3) => $([{ condition: n3, value: t2.iconSizeActive }, { value: l2(`iconSize`, String(e3)) }, { value: u2.markerIconSize }, { value: t2.iconSize }, { value: 100 }]) ?? 100, iconHeight: (e3, n3) => $([{ condition: n3, value: t2.iconSizeActive }, { value: l2(`iconSize`, String(e3)) }, { value: u2.markerIconSize }, { value: t2.iconSize }, { value: 100 }]) ?? 100, forceColorMaskCm: (e3, t3) => $([{ value: l2(`enableIconColorMask`, ``) }]) ?? false, forceColorMask: (e3, t3) => $([{ condition: t3, value: l2(`enableIconColorMask`, `Active`) }, { value: l2(`enableIconColorMask`, String(e3)) }, { condition: !!l2(`enableIconColorMask`, String(e3)), value: l2(`enableIconColorMask`, ``) }]) ?? false, forceColorMaskActive: (e3, t3) => t3 ? $([{ value: l2(`enableIconColorMask`, String(e3)) }]) ?? false : false, iconColor: (e3, t3) => $([{ condition: t3, value: l2(`iconColor`, `Active`) }, { condition: String(e3) !== ``, value: l2(`iconColor`, String(e3)) }, { value: u2.markerIconColor }, { value: l2(`iconColor`, ``) }]) ?? i2.palette.primary.main, iconColorActive: (e3, t3) => t3 ? $([{ value: l2(`iconColor`, String(e3)) }]) ?? `` : ``, iconHover: (e3, n3) => $([{ value: t2.iconHover ? `${t2.iconHover}%` : void 0 }]) ?? ``, iconHoverActive: (e3, t3) => t3 ? $([{ value: l2(`iconHover`, String(e3)) ? `${l2(`iconHover`, String(e3))}%` : void 0 }]) ?? void 0 : void 0, iconXOffsetCm: (e3, t3) => $([{ value: l2(`iconXOffset`, ``) }]) ?? `0px`, iconYOffsetCm: (e3, t3) => $([{ value: l2(`iconYOffset`, ``) }]) ?? `0px`, iconXOffset: (e3, t3) => $([{ condition: t3, value: l2(`iconXOffset`, `Active`) }, { value: l2(`iconXOffset`, String(e3)) }]) ?? `0px`, iconYOffset: (e3, t3) => $([{ condition: t3, value: l2(`iconYOffset`, `Active`) }, { value: l2(`iconYOffset`, String(e3)) }]) ?? `0px`, iconXOffsetActive: (e3, t3) => t3 ? $([{ condition: !l2(`iconXOffset`, String(e3)), value: `0px` }, { value: l2(`iconXOffset`, String(e3)) }]) ?? `0px` : `0px`, iconYOffsetActive: (e3, t3) => t3 ? $([{ condition: !l2(`iconYOffset`, String(e3)), value: `0px` }, { value: l2(`iconYOffset`, String(e3)) }]) ?? `0px` : `0px`, textColorActive: (e3, n3) => n3 ? $([{ value: l2(`textColor`, String(e3)), condition: l2(`textColor`, String(e3)) !== `` }, { value: u2.markerTextColor && u2.markerTextColor !== `` ? u2.markerTextColor : void 0 }, { value: t2.textColor && t2.textColor !== `` ? t2.textColor : void 0 }]) ?? void 0 : void 0, textColorCm: (e3, t3) => $([{ condition: typeof l2(`textColor`, ``) == `string`, value: l2(`textColor`, ``) }, { condition: typeof (o2 == null ? void 0 : o2.color) == `string`, value: o2 == null ? void 0 : o2.color }]) ?? ``, textColor: (e3, t3) => $([{ condition: t3 && typeof l2(`textColor`, `Active`) == `string`, value: l2(`textColor`, `Active`) }, { condition: typeof l2(`textColor`, String(e3)) == `string`, value: l2(`textColor`, String(e3)) }, { value: u2.markerTextColor && u2.markerTextColor !== `` ? u2.markerTextColor : void 0 }, { condition: typeof l2(`textColor`, ``) == `string`, value: l2(`textColor`, ``) }, { condition: typeof (o2 == null ? void 0 : o2.color) == `string`, value: o2 == null ? void 0 : o2.color }]) ?? ``, fontSize: (e3, n3) => $([{ condition: n3 && typeof t2.valueSizeActive == `number`, value: c2(t2.valueSizeActive) }, { value: typeof l2(`valueSize`, String(e3)) == `number` ? c2(l2(`valueSize`, String(e3))) : void 0 }, { condition: typeof u2.markerTextSize == `number`, value: c2(u2.markerTextSize) }, { value: typeof t2.valueSize == `number` ? c2(t2.valueSize) : void 0 }, { condition: typeof (a2 == null ? void 0 : a2[`font-size`]) == `string`, value: a2 == null ? void 0 : a2[`font-size`] }]) ?? null, headerSize: (e3, t3) => $([{ condition: t3 && typeof l2(`headerSize`, `Active`) == `number`, value: `${c2(l2(`headerSize`, `Active`))}` }, { condition: typeof l2(`headerSize`, String(e3)) == `number`, value: `${c2(l2(`headerSize`, String(e3)))}` }, { condition: typeof l2(`headerSize`, ``) == `number`, value: `${c2(l2(`headerSize`, ``))}` }, { condition: typeof (a2 == null ? void 0 : a2[`font-size`]) == `string`, value: a2 == null ? void 0 : a2[`font-size`] }]) ?? null, footerSize: (e3, t3) => $([{ condition: t3 && typeof l2(`footerSize`, `Active`) == `number`, value: `${c2(l2(`footerSize`, `Active`))}` }, { condition: typeof l2(`footerSize`, String(e3)) == `number`, value: `${c2(l2(`footerSize`, String(e3)))}` }, { condition: typeof l2(`footerSize`, ``) == `number`, value: `${c2(l2(`footerSize`, ``))}` }, { condition: typeof (a2 == null ? void 0 : a2[`font-size`]) == `string`, value: a2 == null ? void 0 : a2[`font-size`] }]) ?? null, valueSize: (e3, t3) => $([{ condition: t3 && typeof l2(`valueSize`, `Active`) == `number`, value: `${c2(l2(`valueSize`, `Active`))}` }, { condition: typeof l2(`valueSize`, String(e3)) == `number`, value: `${c2(l2(`valueSize`, String(e3)))}` }, { condition: typeof u2.markerTextSize == `number`, value: c2(u2.markerTextSize) }, { condition: typeof l2(`valueSize`, ``) == `number`, value: `${c2(l2(`valueSize`, ``))}` }, { condition: typeof (a2 == null ? void 0 : a2[`font-size`]) == `string`, value: a2 == null ? void 0 : a2[`font-size`] }]) ?? null, valueSizeActive: (e3, t3) => t3 ? $([{ value: typeof l2(`valueSize`, String(e3)) == `number` ? c2(l2(`valueSize`, String(e3))) : null }]) ?? null : null, header: (e3, t3) => String($([{ condition: t3, value: d2(l2(`header`, `Active`)) }, { value: d2(l2(`header`, String(e3))) }, { value: d2(l2(`header`, ``)) }, { value: d2(r2) }]) ?? ``).replace(/(\r\n|\n|\r)/gm, ``), footer: (e3, t3) => String($([{ condition: t3, value: d2(l2(`footer`, `Active`)) }, { value: d2(l2(`footer`, String(e3))) }, { value: d2(l2(`footer`, ``)) }]) ?? ``).replace(/(\r\n|\n|\r)/gm, ``), alias: (e3, t3) => String(l2(`alias`, String(e3)) || ``).replace(/(\r\n|\n|\r)/gm, ``), value: (e3, t3) => {
    let r3 = l2(`value`, String(e3));
    return r3 == null ? void 0 : `${r3}${(n2 == null ? void 0 : n2.unit) === void 0 ? `` : n2.unit}`;
  }, backgroundColor: (e3, n3) => $([{ value: t2.backgroundColor && t2.backgroundColor !== `` ? t2.backgroundColor : void 0 }, { value: s2 == null ? void 0 : s2[`background-color`] }]) ?? ``, backgroundColorActive: (e3, t3) => t3 ? l2(`backgroundColor`, String(e3)) : void 0, background: (e3, t3) => $([{ condition: t3, value: l2(`background`, `Active`) }, { value: l2(`background`, String(e3)) }, { value: l2(`background`, ``) }]) ?? ``, backgroundActive: (e3, t3) => t3 ? l2(`background`, String(e3)) : void 0, frameBackgroundColor: (e3, n3) => $([{ value: t2.frameBackgroundColor && t2.frameBackgroundColor !== `` ? t2.frameBackgroundColor : void 0 }, { value: s2 == null ? void 0 : s2[`background-color`] }]) ?? ``, frameBackgroundColorActive: (e3, t3) => t3 ? l2(`frameBackgroundColor`, String(e3)) : void 0, frameBackground: (e3, t3) => $([{ condition: t3, value: l2(`frameBackground`, `Active`) }, { value: l2(`frameBackground`, String(e3)) }, { value: l2(`frameBackground`, ``) }]) ?? ``, frameBackgroundActive: (e3, t3) => t3 ? l2(`frameBackground`, String(e3)) : void 0, markerIconSize: (e3, t3) => u2.markerIconSize, markerTextColor: (e3, t3) => u2.markerTextColor, markerTextSize: (e3, t3) => u2.markerTextSize, markerIconColor: (e3, t3) => u2.markerIconColor };
}
function Be(e2 = ``, t2 = false, n2) {
  return { icon: n2.icon(e2, t2), iconActive: n2.iconActive(e2, t2), iconSizeCm: n2.iconSizeCm(e2, t2), iconSize: n2.iconSize(e2, t2), iconSizeActive: n2.iconSizeActive(e2, t2), iconSizeOnly: n2.iconSizeOnly(e2, t2), iconWidth: n2.iconWidth(e2, t2), iconHeight: n2.iconHeight(e2, t2), iconSizeActiveOnly: n2.iconSizeActiveOnly(e2, t2), forceColorMaskCm: n2.forceColorMaskCm(e2, t2), forceColorMask: n2.forceColorMask(e2, t2), forceColorMaskActive: n2.forceColorMaskActive(e2, t2), iconColor: n2.iconColor(e2, t2), iconColorActive: n2.iconColorActive(e2, t2), iconHover: n2.iconHover(e2, t2), iconHoverActive: n2.iconHoverActive(e2, t2), iconXOffsetCm: n2.iconXOffsetCm(e2, t2), iconYOffsetCm: n2.iconYOffsetCm(e2, t2), iconXOffset: n2.iconXOffset(e2, t2), iconYOffset: n2.iconYOffset(e2, t2), iconXOffsetActive: n2.iconXOffsetActive(e2, t2), iconYOffsetActive: n2.iconYOffsetActive(e2, t2), textColorActive: n2.textColorActive(e2, t2), textColorCm: n2.textColorCm(e2, t2), textColor: n2.textColor(e2, t2), header: n2.header(e2, t2), headerSize: n2.headerSize(e2, t2), footer: n2.footer(e2, t2), footerSize: n2.footerSize(e2, t2), alias: n2.alias(e2, t2), value: n2.value(e2, t2), valueSize: n2.valueSize(e2, t2), valueSizeActive: n2.valueSizeActive(e2, t2), backgroundColor: n2.backgroundColor(e2, t2), backgroundColorActive: n2.backgroundColorActive(e2, t2), background: n2.background(e2, t2), backgroundActive: n2.backgroundActive(e2, t2), frameBackgroundColor: n2.frameBackgroundColor(e2, t2), frameBackgroundColorActive: n2.frameBackgroundColorActive(e2, t2), frameBackground: n2.frameBackground(e2, t2), frameBackgroundActive: n2.frameBackgroundActive(e2, t2) };
}
function Ve(e2) {
  let { theme: t2, widget: n2, widget: { data: r2 }, getPropertyValue: i2 } = y(U), a2 = r2[`${e2}Object`], o2 = i2(e2), s2 = a2 == null ? void 0 : a2.name, { fontStyles: c2, textStyles: l2, backgroundStyles: d2 } = R(n2.style), f2 = u(Ie, []), p2 = u((e3, t3 = ``) => {
    let n3 = `${e3}${t3}`;
    return Pe(r2, n3);
  }, [r2]), m2 = x(() => Fe(r2) ? Le(r2) : Re(r2), [r2]), h2 = x(() => ze({ rxData: r2, oidObject: a2, oidName: s2, theme: t2, fontStyles: c2, textStyles: l2, backgroundStyles: d2, formatSize: f2, getDataValue: p2, widgetResolver: m2 }), [r2, a2, s2, t2, c2, l2, d2, f2, p2, m2]), g2 = u((e3 = ``, t3 = false) => Be(e3, t3, h2), [h2]), { states: _2, widgetStates: v2, minValue: b2, maxValue: S2 } = x(() => {
    let e3 = {}, t3 = null, n3 = null, i3 = [], s3 = a2 == null ? void 0 : a2.type, c3 = (a2 == null ? void 0 : a2.commonStates) || {}, l3 = Object.entries(c3);
    if (s3 === `number` || s3 === `string` || s3 === `boolean` || s3 === `mixed`) {
      let t4 = r2.ignoreCommonStates === false ? r2.values_count : l3.length > 0 ? l3.length : r2.values_count;
      for (let n4 = 1; n4 <= t4; n4++) {
        let t5 = p2(`value`, String(n4)), c4 = r2[`alias${n4}`], u2 = a2 == null ? void 0 : a2.unit;
        if (t5 === void 0 || !/\S/.test(String(t5))) continue;
        let d3 = l3.find(([e4]) => e4 === String(t5)), f3 = d3 ? s3 === `number` ? Number(d3[0]) : String(d3[0]) : s3 === `number` ? Number(t5) : t5, m3 = g2(n4, String(o2) === String(f3));
        i3.push({ value: f3, label: m3.alias || String(m3.value), alias: m3.alias, fontSize: m3.valueSize, textColor: m3.textColor, icon: m3.icon, iconSize: m3.iconSize, iconSizeOnly: m3.iconSizeOnly, iconWidth: m3.iconWidth, iconHeight: m3.iconHeight, iconXOffset: m3.iconXOffset, iconYOffset: m3.iconYOffset, iconColor: m3.iconColor, iconHover: m3.iconHover, forceColorMask: m3.forceColorMask, valueSize: m3.valueSize, background: m3.background, frameBackground: m3.frameBackground });
        let h3 = String(d3 ? d3[0] : t5);
        e3[h3] = c4 && String(c4).trim() !== `` ? c4 : `${t5}${u2}`;
      }
    }
    if (s3 === `number` && i3.length) {
      let e4 = i3.map((e5) => typeof e5.value == `number` ? e5.value : NaN).filter((e5) => !isNaN(e5));
      e4.length > 0 && (t3 = Math.min(...e4), n3 = Math.max(...e4));
    }
    return { states: i3, widgetStates: e3, minValue: t3, maxValue: n3 };
  }, [a2 == null ? void 0 : a2.type, a2 == null ? void 0 : a2.commonStates, a2 == null ? void 0 : a2.unit, r2, p2, o2, g2]), { data: C2, activeIndex: w2 } = x(() => {
    switch (a2 == null ? void 0 : a2.type) {
      case `mixed`:
      case `boolean`:
      case `number`:
      case `string`: {
        let e3 = _2.findIndex((e4) => String(e4.value) === String(o2));
        return e3 === -1 ? { data: g2(``, true), activeIndex: void 0 } : { data: g2(e3 + 1, true), activeIndex: e3 + 1 };
      }
      default:
        return { data: g2(``, true), activeIndex: void 0 };
    }
  }, [a2, o2, _2, g2]);
  return { widgetStates: v2, minValue: b2, maxValue: S2, data: C2, activeIndex: w2, oidValue: o2, states: _2, resolveStyleData: g2 };
}
export {
  W as C,
  R as D,
  H as E,
  oe as S,
  U as T,
  ge as _,
  Ae as a,
  ve as b,
  Q as c,
  Ce as d,
  be as f,
  me as g,
  ye as h,
  Me as i,
  Ee as l,
  Y as m,
  Ie as n,
  ke as o,
  X as p,
  Ne as r,
  Oe as s,
  Ve as t,
  we as u,
  _e as v,
  ae as w,
  J as x,
  he as y
};
