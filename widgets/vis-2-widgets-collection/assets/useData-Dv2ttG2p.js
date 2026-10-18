import { o as ge, i as h, g as b, G as ze, f as M, l as A, m as N, q as $e, j as K, h as P, k as he, e as re, z as _e } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { u as Te, s as ve, h as Ae, i as Ie, au as Oe, m as pe, a as we, av as Be, aw as Fe, ax as Pe, ay as X, az as Me, aA as Ee, aB as ae, aC as He, aD as Ve, aE as De, aF as We, aG as Ge, aH as Ne, aI as le, aJ as Re, t as be, aK as je, B as w, T as Q, G as ee, d as Xe, aL as Le, b as Ye, I as qe, aM as Ue, aN as Je, P as fe } from "./usePopoverPositioning-DyzF99R9.js";
const Ke = (t) => {
  const { absolute: e, children: o, classes: a, flexItem: s, light: i, orientation: c, textAlign: d, variant: u } = t;
  return Ie({ root: ["root", e && "absolute", u, i && "light", c === "vertical" && "vertical", s && "flexItem", o && "withChildren", o && c === "vertical" && "withChildrenVertical", d === "right" && c !== "vertical" && "textAlignRight", d === "left" && c !== "vertical" && "textAlignLeft"], wrapper: ["wrapper", c === "vertical" && "wrapperVertical"] }, Oe, a);
}, Ze = ve("div", { name: "MuiDivider", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, o.absolute && e.absolute, e[o.variant], o.light && e.light, o.orientation === "vertical" && e.vertical, o.flexItem && e.flexItem, o.children && e.withChildren, o.children && o.orientation === "vertical" && e.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && e.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && e.textAlignLeft];
} })(pe(({ theme: t }) => ({ margin: 0, flexShrink: 0, borderWidth: 0, borderStyle: "solid", borderColor: (t.vars || t).palette.divider, borderBottomWidth: "thin", variants: [{ props: { absolute: true }, style: { position: "absolute", bottom: 0, left: 0, width: "100%" } }, { props: { light: true }, style: { borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : we(t.palette.divider, 0.08) } }, { props: { variant: "inset" }, style: { marginLeft: 72 } }, { props: { variant: "middle", orientation: "horizontal" }, style: { marginLeft: t.spacing(2), marginRight: t.spacing(2) } }, { props: { variant: "middle", orientation: "vertical" }, style: { marginTop: t.spacing(1), marginBottom: t.spacing(1) } }, { props: { orientation: "vertical" }, style: { height: "100%", borderBottomWidth: 0, borderRightWidth: "thin" } }, { props: { flexItem: true }, style: { alignSelf: "stretch", height: "auto" } }, { props: ({ ownerState: e }) => !!e.children, style: { display: "flex", textAlign: "center", border: 0, borderTopStyle: "solid", borderLeftStyle: "solid", "&::before, &::after": { content: '""', alignSelf: "center" } } }, { props: ({ ownerState: e }) => e.children && e.orientation !== "vertical", style: { "&::before, &::after": { width: "100%", borderTop: `thin solid ${(t.vars || t).palette.divider}`, borderTopStyle: "inherit" } } }, { props: ({ ownerState: e }) => e.orientation === "vertical" && e.children, style: { flexDirection: "column", "&::before, &::after": { height: "100%", borderLeft: `thin solid ${(t.vars || t).palette.divider}`, borderLeftStyle: "inherit" } } }, { props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical", style: { "&::before": { width: "90%" }, "&::after": { width: "10%" } } }, { props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical", style: { "&::before": { width: "10%" }, "&::after": { width: "90%" } } }] }))), Qe = ve("span", { name: "MuiDivider", slot: "Wrapper", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.wrapper, o.orientation === "vertical" && e.wrapperVertical];
} })(pe(({ theme: t }) => ({ display: "inline-block", paddingLeft: `calc(${t.spacing(1)} * 1.2)`, paddingRight: `calc(${t.spacing(1)} * 1.2)`, whiteSpace: "nowrap", variants: [{ props: { orientation: "vertical" }, style: { paddingTop: `calc(${t.spacing(1)} * 1.2)`, paddingBottom: `calc(${t.spacing(1)} * 1.2)` } }] }))), ne = ge(function(e, o) {
  const a = Te({ props: e, name: "MuiDivider" }), { absolute: s = false, children: i, className: c, orientation: d = "horizontal", component: u = i || d === "vertical" ? "div" : "hr", flexItem: r = false, light: f = false, role: m = u !== "hr" ? "separator" : void 0, textAlign: n = "center", variant: l = "fullWidth", ...p } = a, g = { ...a, absolute: s, component: u, flexItem: r, light: f, orientation: d, role: m, textAlign: n, variant: l }, y = Ke(g);
  return h(Ze, { as: u, className: Ae(y.root, c), role: m, ref: o, ownerState: g, "aria-orientation": m === "separator" && (u !== "hr" || d === "vertical") ? d : void 0, ...p, children: i ? h(Qe, { className: y.wrapper, ownerState: g, children: i }) : null });
});
ne && (ne.muiSkipListHighlight = true);
const et = ["background", "background-color", "background-image", "background-position", "background-repeat", "background-size", "background-clip", "background-origin", "border", "border-width", "border-style", "border-color", "border-radius", "color", "text-align", "text-shadow", "font-family", "font-size", "font-weight", "font-style", "font-variant", "line-height", "letter-spacing", "word-spacing", "box-sizing", "box-shadow"], ce = (t) => b(() => {
  if (!t) return { backgroundStyles: void 0, borderStyles: void 0, textStyles: void 0, fontStyles: void 0, boxStyles: void 0 };
  const e = {}, o = {}, a = {}, s = {}, i = {};
  return et.forEach((c) => {
    const d = t[c];
    d !== void 0 && (c.includes("background") ? e[c] = d : c.includes("border") ? o[c] = d : c.includes("font") || c.includes("line-height") || c.includes("letter-spacing") || c.includes("word-spacing") ? s[c] = d : c.includes("text") || c.includes("color") ? a[c] = d : i[c] = d);
  }), { backgroundStyles: e, borderStyles: o, textStyles: a, fontStyles: s, boxStyles: i };
}, [t]), tt = 32, G = /* @__PURE__ */ new Map(), nt = (t) => JSON.stringify(t, (e, o) => typeof o == "function" ? String(o) : o);
function ot(t) {
  const e = nt(t), o = G.get(e);
  if (o) return G.delete(e), G.set(e, o), o;
  const a = Be(t);
  if (G.set(e, a), G.size > tt) {
    const s = G.keys().next().value;
    s !== void 0 && G.delete(s);
  }
  return a;
}
function rt() {
  return ze(Fe, Pe);
}
const it = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "button", "caption", "overline", "inherit"], at = ["breakpoints", "direction", "palette", "shape", "shadows", "transitions", "typography", "zIndex"], lt = ["getContrastText", "augmentColor"];
function ct(t) {
  const e = {};
  for (const s of at) {
    const i = t[s];
    i !== void 0 && (e[s] = i);
  }
  const { typography: o } = t;
  if (o) {
    const s = { ...o };
    for (const i of it) delete s[i];
    delete s.pxToRem, e.typography = s;
  }
  const { palette: a } = t;
  if (a) {
    const s = { ...a };
    for (const i of lt) delete s[i];
    e.palette = s;
  }
  return e;
}
function Se(t, e, o) {
  const [a, s] = M("");
  A(() => {
    let m = true;
    const n = (l, p) => {
      m && s(typeof (p == null ? void 0 : p.val) == "string" ? p.val : "");
    };
    return t.getState(X).then((l) => {
      m && s(typeof (l == null ? void 0 : l.val) == "string" ? l.val : "");
    }).catch((l) => console.error(`Cannot read theme state ${X}: ${l}`)), t.subscribeState(X, n).catch((l) => console.error(`Cannot subscribe theme state ${X}: ${l}`)), () => {
      m = false;
      try {
        t.unsubscribeState(X, n);
      } catch (l) {
        console.error(`Cannot unsubscribe theme state ${X}: ${l}`);
      }
    };
  }, [t]);
  const i = b(() => {
    if (!a) return {};
    try {
      const m = Me(JSON.parse(a));
      return m.isValid ? m.theme ?? {} : {};
    } catch {
      return {};
    }
  }, [a]), c = rt(), d = c ?? i;
  A(() => {
    Ee(d.googleFonts);
  }, [d.googleFonts]);
  const u = ae(d, "typography.fontFamily");
  A(() => {
    He(Ve(u));
  }, [u]);
  const r = b(() => JSON.stringify(i), [i]), f = N(i);
  return A(() => {
    const m = f.current !== i;
    f.current = i, c && m && De() === r && We();
  }, [c, i, r]), b(() => {
    const m = ct(e), n = ae(m, "palette.primary.main"), l = Ge(Ne(d), n), p = le(le(m, o ?? {}), l), g = ae(p, "corners"), y = Re(g), x = y ? le(p, { shape: { borderRadius: (g == null ? void 0 : g.topLeft) ?? 4 }, components: { MuiPaper: { styleOverrides: { root: { borderRadius: y } } }, MuiCard: { styleOverrides: { root: { borderRadius: y } } } } }) : p;
    return ot(x);
  }, [e, o, d]);
}
const te = (t) => t.startsWith("&") || t.includes(" ") || t.startsWith("@") ? t : t.replace(/-([a-z])/g, (e, o) => o.toUpperCase()), Ce = (t) => {
  const e = Object.fromEntries(Object.entries(t).map(([o, a]) => {
    if (Array.isArray(a)) {
      const s = a.filter((i) => i != null);
      return [te(o), s.length > 0 ? s : void 0];
    }
    return typeof a == "object" && a !== null ? [te(o), Ce(a)] : [te(o), a];
  }).filter(([, o]) => o != null));
  return Object.keys(e).length > 0 ? e : void 0;
}, oe = (t) => {
  if (!t) return {};
  const e = Object.fromEntries(Object.entries(t).map(([o, a]) => {
    const s = te(o);
    if (Array.isArray(a)) {
      const i = a.filter((c) => c != null);
      return [s, i.length > 0 ? i : void 0];
    }
    if (typeof a == "object" && a !== null) {
      const i = Ce(a);
      return [s, i];
    }
    return [s, a];
  }).filter(([, o]) => o != null));
  return Object.keys(e).length > 0 ? e : {};
}, Z = $e({});
function st({ children: t, context: e }) {
  const o = e.theme, a = e.widget, s = e.socket, { fontStyles: i, textStyles: c } = ce(a.style || {}), d = b(() => ({ components: { MuiTypography: { styleOverrides: { root: { ...oe(i), ...oe(c) } } } } }), [i, c]), u = Se(s, o, d);
  return K(be, { theme: u, children: [h(je, { styles: { html: { boxSizing: "border-box" }, "*, *::before, *::after": { boxSizing: "inherit" } } }), h(Z.Provider, { value: { ...e, theme: u }, children: t })] });
}
function Mt(t, e) {
  return h(st, { context: e, children: t });
}
const T = ({ dividerText: t = "" }) => {
  const e = { position: "absolute", left: 0, width: "100%" };
  return h(w, { sx: { display: "inline-block", pt: 1.5, pb: t ? 2 : 1.5 }, children: t ? h(ne, { sx: e, children: h(Q, { sx: { opacity: 0.7, color: "primary.main" }, variant: "caption", children: ee.t(t) }) }) : h(ne, { sx: e }) });
}, dt = Xe(h("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" }), "Delete"), E = { HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i, GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i, GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i };
function se(t) {
  if (!t || t.trim() === "") return { isValid: true, normalizedValue: "", colorType: "empty" };
  const e = t.trim();
  return E.HEX.test(e) ? { isValid: true, normalizedValue: e, colorType: "hex" } : E.RGB.test(e) ? { isValid: true, normalizedValue: e, colorType: "rgb" } : E.GRADIENT.test(e) ? { isValid: true, normalizedValue: e, colorType: "gradient" } : { isValid: false, normalizedValue: e, colorType: "invalid" };
}
function ut(t) {
  if (t == null || typeof t != "string") return false;
  const e = t.trim();
  return e === "" ? false : E.GRADIENT_PREFIX.test(e);
}
function ft(t) {
  if (!t || typeof t != "string") return null;
  const e = t.match(E.HEX);
  if (!e) return null;
  let o = e[1];
  o.length === 3 && (o = o.split("").map((d) => d + d).join(""));
  const a = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), i = parseInt(o.substring(4, 6), 16);
  let c = 1;
  if (o.length === 8) {
    const d = parseInt(o.substring(6, 8), 16);
    c = Math.round(d / 255 * 1e3) / 1e3;
  }
  return { r: a, g: s, b: i, a: c };
}
function mt(t) {
  if (!t || typeof t != "string" || !t.match(E.RGB)) return null;
  const o = t.match(/\d+\.?\d*/g);
  if (!o || o.length < 3) return null;
  const a = parseInt(o[0], 10), s = parseInt(o[1], 10), i = parseInt(o[2], 10), c = o[3] !== void 0 ? parseFloat(o[3]) : 1;
  return a < 0 || a > 255 || s < 0 || s > 255 || i < 0 || i > 255 || c < 0 || c > 1 ? null : { r: a, g: s, b: i, a: Math.round(c * 1e3) / 1e3 };
}
function Y(t) {
  if (!t || typeof t != "string") return null;
  const e = t.trim();
  return e.startsWith("#") ? ft(e) : e.toLowerCase().startsWith("rgb") ? mt(e) : null;
}
function de(t) {
  if (!t || typeof t != "string") return null;
  const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(e));
  if (o.length < 2) return null;
  const a = o.map((s, i) => {
    const c = s[1];
    let d;
    return s[2] ? d = parseFloat(s[2]) : d = i / (o.length - 1) * 100, { color: c, position: d };
  });
  return a.sort((s, i) => s.position - i.position), a;
}
function gt(t) {
  if (!t || t.length < 2) return null;
  const e = t.find((n) => n.position === 50);
  if (e) {
    const n = Y(e.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  let o = null, a = null;
  for (let n = 0; n < t.length; n++) if (t[n].position <= 50 && (o = t[n]), t[n].position > 50 && !a) {
    a = t[n];
    break;
  }
  if (!a && o) {
    const n = Y(o.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  if (!o && a) {
    const n = Y(a.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  if (!o || !a) return null;
  const s = Y(o.color), i = Y(a.color);
  if (!s || !i) return null;
  const c = a.position - o.position;
  if (c === 0) {
    const n = i;
    return n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
  }
  const d = (50 - o.position) / c, u = Math.round(s.r + (i.r - s.r) * d), r = Math.round(s.g + (i.g - s.g) * d), f = Math.round(s.b + (i.b - s.b) * d), m = Math.round((s.a + (i.a - s.a) * d) * 1e3) / 1e3;
  return m === 1 ? `rgb(${u}, ${r}, ${f})` : `rgba(${u}, ${r}, ${f}, ${m})`;
}
function ht(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (e === "") return null;
  if (!E.GRADIENT_PREFIX.test(e)) return Y(e) ? e : null;
  try {
    const a = de(e);
    return a ? gt(a) : null;
  } catch {
    return null;
  }
}
function Et(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (!e || !E.GRADIENT_PREFIX.test(e)) return null;
  const o = de(e);
  return o && o.length ? o.map((a) => a.color) : null;
}
const vt = { top: [0, -1], bottom: [0, 1], left: [-1, 0], right: [1, 0] }, pt = (t) => {
  const e = t.trim().toLowerCase();
  if (!e) return [0, 1];
  if (e.endsWith("deg")) {
    const o = parseFloat(e);
    if (!Number.isFinite(o)) return [0, 1];
    const a = o * Math.PI / 180;
    return [Math.sin(a), -Math.cos(a)];
  }
  if (e.startsWith("to ")) {
    const o = e.slice(3).split(/\s+/).filter(Boolean);
    let a = 0, s = 0;
    for (const c of o) {
      const d = vt[c];
      d && (a += d[0], s += d[1]);
    }
    if (a === 0 && s === 0) return [0, 1];
    const i = Math.hypot(a, s);
    return [a / i, s / i];
  }
  return [0, 1];
};
function Ht(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (!e.startsWith("linear-gradient(")) return null;
  const o = e.indexOf("("), a = e.lastIndexOf(")");
  if (o === -1 || a === -1 || a < o) return null;
  const s = e.slice(o + 1, a), i = s.search(/#[0-9a-fA-F]|rgba?\(/i), c = i === -1 ? "" : s.slice(0, i).replace(/[,;]?\s*$/, ""), d = i === -1 ? s : s.slice(i), [u, r] = pt(c), f = de(`linear-gradient(${d})`);
  if (!f || !f.length) return null;
  const m = (n) => Math.round(n * 1e6) / 1e6;
  return { type: "linear", x: m(0.5 - u / 2), y: m(0.5 - r / 2), x2: m(0.5 + u / 2), y2: m(0.5 + r / 2), colorStops: f.map((n) => ({ offset: n.position / 100, color: n.color })) };
}
function U(t, e) {
  switch (t) {
    case "primary":
      return e.palette.primary.main;
    case "text":
      return e.palette.text.primary;
    case "paper":
      return e.palette.background.paper;
    default:
      return "";
  }
}
function bt(t, e) {
  if (!(!e || e.length === 0)) for (const o of e) {
    if (!o) continue;
    const a = t[o];
    if (typeof a != "string" || a.trim() === "") continue;
    const s = se(a);
    if (s.isValid && s.normalizedValue.trim() !== "") return s.normalizedValue;
  }
}
function St(t, e, o, a) {
  const s = t.name ? e[t.name] : void 0;
  if (typeof s == "string" && s.trim() !== "") {
    const c = se(s);
    if (c.isValid && c.normalizedValue.trim() !== "") return c.normalizedValue;
  }
  const i = bt(e, t.fallbackFields);
  if (i !== void 0) return i;
  if (t.inheritTextStyle === true) {
    const c = a == null ? void 0 : a.color;
    if (typeof c == "string" && c.trim() !== "") return c;
  }
  return U(t.terminal, o);
}
function Ct(t) {
  var _a, _b, _c, _d, _e2;
  const e = t.context, o = ((_a = t.selectedWidgets) == null ? void 0 : _a[0]) ?? t.selectedWidget;
  return o ? (_e2 = (_d = (_c = (_b = e == null ? void 0 : e.views) == null ? void 0 : _b[t.selectedView]) == null ? void 0 : _c.widgets) == null ? void 0 : _d[o]) == null ? void 0 : _e2.style : void 0;
}
function yt({ field: t, data: e, onDataChange: o, props: a }) {
  const s = t.name, i = e[s], [c, d] = M(i || ""), [u, r] = M(false), [f, m] = M(null), n = N(i), l = N(null), p = a.context.theme, g = Se(a.context.socket, a.context.theme), y = b(() => Ct(a), [a]), x = b(() => St(t, e, g, y), [t, e, g, y]), H = typeof i == "string" && i.trim() !== "", { anchorOrigin: R, transformOrigin: V, maxHeight: j, setContentRef: $, popoverActionRef: z } = Le(f, !!f);
  A(() => () => {
    l.current !== null && clearTimeout(l.current);
  }, []);
  const k = P((S, _ = false) => {
    if (l.current !== null && (clearTimeout(l.current), l.current = null), S == null) {
      d(""), r(false), n.current = null, o({ [s]: null });
      return;
    }
    if (typeof S != "string") {
      r(true);
      return;
    }
    if (S.trim() === "") {
      d(""), r(false), n.current = null, o({ [s]: null });
      return;
    }
    const D = se(S);
    if (d(S), !D.isValid) {
      r(true);
      return;
    }
    r(false);
    let W;
    if (t.noGradient === true) {
      const F = ht(D.normalizedValue);
      if (F === null) {
        r(true);
        return;
      }
      W = F;
    } else W = D.normalizedValue || null;
    n.current = W, _ ? l.current = setTimeout(() => {
      l.current = null, o({ [s]: W });
    }, 150) : o({ [s]: W });
  }, [s, t.noGradient, o]), I = P((S) => k(S, true), [k]), O = P((S) => k(S.target.value), [k]), ie = P(() => k(null), [k]), q = !!f;
  return A(() => {
    i !== n.current && (n.current = i, d(i || ""), r(false));
  }, [i]), h(he, { children: K(be, { theme: p, children: [K(w, { sx: { display: "flex", alignItems: "flex-start", gap: 0.5, mt: 1 }, children: [h(Ye, { variant: "standard", fullWidth: true, value: c, error: u, placeholder: H ? "" : ee.t("color_inherit"), helperText: u ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "", onChange: O, slotProps: { htmlInput: { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingBottom: "2px", fontSize: "80%" } } } }), H && h(qe, { onClick: ie, title: ee.t("clear_color"), size: "large", sx: { mt: -1, mr: -1.5 }, children: h(dt, {}) }), h(w, { onClick: (S) => m(S.currentTarget), title: ee.t("choose_color"), sx: { mt: c ? "4px" : "-2px", px: "4px", py: c ? "4px" : "3px", backgroundColor: x ? p.name === "light" ? p.palette.common.white : "#121212" : "transparent", borderRadius: "1px", display: "inline-block", cursor: "pointer", verticalAlign: "middle", boxSizing: "border-box", border: u ? `1px solid ${p.palette.error.main}` : x ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`, opacity: u ? 0.6 : 1 }, children: h(w, { sx: { width: x ? "36px" : "38px", height: x ? "14px" : "18px", borderRadius: "2px", background: u ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : x } }) })] }), h(Ue, { action: z, slotProps: { paper: { elevation: 0, sx: { p: "9px", borderRadius: "6px", backgroundColor: "rgb(32,32,32)", boxSizing: "border-box", maxHeight: j, overflowX: "hidden", overflowY: "auto" } } }, open: q, anchorEl: f, onClose: () => m(null), transformOrigin: V, anchorOrigin: R, children: h(w, { ref: $, sx: { borderRadius: "6px" }, children: h(Je, { value: c || x || g.palette.primary.main, onChange: I, hidePresets: true, hideInputs: true, hideEyeDrop: true, hideInputType: true }) }) })] }) });
}
function J(t) {
  const { name: e, label: o, default: a = "", fallbackFields: s, noGradient: i, terminal: c, inheritTextStyle: d, hidden: u } = t, r = { name: e, label: o, default: a, type: "custom", component: (f, m, n, l) => h(yt, { field: f, data: m, onDataChange: n, props: l }) };
  return s !== void 0 && (r.fallbackFields = s), i !== void 0 && (r.noGradient = i), c !== void 0 && (r.terminal = c), d !== void 0 && (r.inheritTextStyle = d), u !== void 0 && (r.hidden = u), r;
}
function Vt(t, e, o) {
  return J({ name: t, label: e, fallbackFields: ["sliderColor"], terminal: "primary", ...o });
}
const Dt = (t, e) => (o) => o[t] !== e, Wt = [{ value: "normal", label: "normal" }, { value: "italic", label: "italic" }, { value: "oblique", label: "oblique" }], Gt = [{ value: "normal", label: "normal" }, { value: "bold", label: "bold" }, { value: "bolder", label: "bolder" }, { value: "lighter", label: "lighter" }, { value: "100", label: "100" }, { value: "200", label: "200" }, { value: "300", label: "300" }, { value: "400", label: "400" }, { value: "500", label: "500" }, { value: "600", label: "600" }, { value: "700", label: "700" }, { value: "800", label: "800" }, { value: "900", label: "900" }], Nt = [{ value: "both", label: "both" }, { value: "left", label: "left" }, { value: "right", label: "right" }];
function Rt(t, e) {
  const o = { label: "", type: "custom", component: () => h(T, { dividerText: t }) };
  return (e == null ? void 0 : e.hidden) !== void 0 && (o.hidden = e.hidden), o;
}
const me = (t) => {
  if (!t || typeof t != "string") return false;
  const e = t.trim();
  return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
}, jt = (t) => {
  const { groupName: e = "", allFields: o = true } = t || {}, a = [{ label: "", type: "custom", component: () => h(T, { dividerText: "icon" }), hidden: "data.noIcon" }, { name: `icon${e}`, label: "icon", type: "image", default: "" }, { name: `iconSmall${e}`, label: "small_icon", type: "icon64", default: "" }, { name: `iconSize${e}`, label: "icon_size", type: "slider", min: 1, max: 500, step: 1, hidden: "data.noIcon" }, { name: `enableIconColorMask${e}`, label: "enable_icon_color_mask", type: "checkbox", default: false, tooltip: "enable_icon_color_mask_tooltip", hidden: (i, c) => {
    let d = true;
    const u = c !== void 0 ? c : e, r = i[`icon${u}`], f = i[`iconSmall${u}`];
    return (u === "" || u === "Active") && (d = false), c !== void 0 && (d = !i.iconColor && !i.enableIconColorMask && !i[`iconColor${c}`] && !me(r) && !me(f)), d;
  } }, J({ name: `iconColor${e}`, label: "icon_color", fallbackFields: [""], noGradient: true, terminal: "primary" }), { name: `iconXOffset${e}`, label: "icon_x_offset", type: "text", hidden: "data.noIcon" }, { name: `iconYOffset${e}`, label: "icon_y_offset", type: "text", hidden: "data.noIcon" }, { label: "", type: "custom", component: () => h(T, { dividerText: "header" }), hidden: (i, c) => i.noHeader && !o }, { name: `noHeader${e}`, type: "checkbox", label: "no_header", default: false }, { name: `noHeaderIcon${e}`, type: "checkbox", label: "no_header_icon", default: false, hidden: "data.noHeader" }, { name: `header${e}`, label: "header_text", type: "html", default: "", hidden: "data.noHeader" }, { name: `headerSize${e}`, label: "header_size", type: "slider", min: 0, max: 500, step: 1, hidden: "data.noHeader" }, { label: "", type: "custom", component: () => h(T, { dividerText: "value" }) }, { name: `alias${e}`, label: "alias", type: "html", default: "" }, { name: `value${e}`, label: "value", type: "text", default: "", hidden: (i, c) => {
    var _a;
    return ((_a = i.oidObject) == null ? void 0 : _a.type) === "boolean" || i.name === "valueActive";
  } }, { name: `valueSize${e}`, label: "value_size", type: "slider", min: 0, max: 500, step: 1 }, { label: "", type: "custom", component: () => h(T, { dividerText: "footer" }), hidden: (i, c) => i.noFooter && !o }, { name: `noFooter${e}`, label: "no_footer", type: "checkbox", default: false }, { name: `footer${e}`, label: "footer_text", type: "html", default: "", hidden: "data.noFooter" }, { name: `footerSize${e}`, label: "footer_size", type: "slider", min: 0, max: 500, step: 1, hidden: "data.noFooter" }, { label: "", type: "custom", component: () => h(T, { dividerText: "characteristics" }) }, { name: `noCard${e}`, label: "without_card", type: "checkbox", default: false }, { name: `squaredCorner${e}`, label: "squared_corner", type: "checkbox", default: false }, J({ name: `textColor${e}`, label: "text_color", fallbackFields: [""], terminal: "text", inheritTextStyle: true }), { label: "", name: "allFieldsDivider", type: "custom", component: () => h(T, {}) }, { name: `outlined${e}`, label: "outlined", type: "checkbox", default: false }, { name: `outlinedFrame${e}`, label: "outlined_frame", type: "checkbox", default: false }, { label: "", name: "allFieldsDivider", type: "custom", component: () => h(T, {}) }, { name: `basePadding${e}`, label: "base_padding", type: "slider", min: 0, max: 10, step: 0.1, default: 1 }, { name: `baseElevation${e}`, label: "base_elevation", type: "slider", min: 0, max: 24, step: 1, default: 4 }, { label: "", name: "allFieldsDivider", type: "custom", component: () => h(T, { dividerText: "geometry" }) }, { name: `square${e}`, label: "square", type: "checkbox", hidden: "data.circle || data.ellipse", default: false }, { name: `ellipse${e}`, label: "ellipse", type: "checkbox", hidden: "data.circle || data.square", default: false }, { name: `circle${e}`, label: "circle", type: "checkbox", hidden: "data.ellipse || data.square" }, { label: "", type: "custom", component: () => h(T, { dividerText: "background" }) }, J({ name: `background${e}`, label: "background", fallbackFields: [], terminal: "transparent" }), { label: "", type: "custom", component: () => h(T, { dividerText: "frame_background" }) }, J({ name: `frameBackground${e}`, label: "frame_background", fallbackFields: [], terminal: "paper" })];
  if (o) {
    const i = [`alias${e}`, `value${e}`];
    return a.filter((c) => !i.includes(c.name));
  }
  const s = ["allFieldsDivider", `noHeader${e}`, `noHeaderIcon${e}`, e === "Active" ? `value${e}` : "", `noFooter${e}`, `noCard${e}`, `squaredCorner${e}`, `outlined${e}`, `outlinedFrame${e}`, `basePadding${e}`, `baseElevation${e}`, `square${e}`, `ellipse${e}`, `circle${e}`];
  return a.filter((i) => !s.includes(i.name));
}, xt = () => {
  const { isSignalVisible: t, refService: e, widget: o } = re(Z), a = b(() => {
    const i = [], c = Number(o.data["signals-count"]) || 0;
    for (let d = 0; d < c; d++) t(d) && i.push(d);
    return i;
  }, [o.data, t]), s = b(() => {
    const i = {};
    return a.forEach((c) => {
      i[c] = o.data[`signals-color-${c}`];
    }), i;
  }, [o.data, a]);
  A(() => {
    if (!(e == null ? void 0 : e.current)) return;
    const c = e.current.children, d = [];
    Array.from(c).forEach((u) => {
      const r = u.children[0];
      r && r instanceof HTMLElement && r.className === "vis-signal-icon iconOwn" && d.push(r);
    }), d.forEach((u, r) => {
      const f = a[r], m = f !== void 0 ? s[f] : void 0;
      m ? (u.style.color = m, u.style.filter = "drop-shadow(0px 10000px 0)", u.style.transform = "translateY(-10000px)") : (u.style.color = "", u.style.filter = "", u.style.transform = "");
    });
  }, [a, s, e]);
}, kt = (t, e = 28) => {
  const [o, a] = M({ width: void 0, height: void 0, maxWidth: void 0 }), s = P((c) => {
    if (c.length === 0) return;
    const d = c[0], { width: u, height: r } = d.contentRect, f = Math.round(u), m = Math.round(r), n = f <= m + e + 12 ? f - e - 12 : m;
    a({ width: f, height: m, maxWidth: n });
  }, [e]), i = b(() => t ? typeof t == "object" && "current" in t ? t.current : t : null, [t]);
  return A(() => {
    if (!i) {
      a({ width: void 0, height: void 0, maxWidth: void 0 });
      return;
    }
    const c = new ResizeObserver(s);
    try {
      c.observe(i);
    } catch (d) {
      console.warn("ResizeObserver failed to observe element:", d);
      return;
    }
    return () => {
      try {
        c.disconnect();
      } catch (d) {
        console.warn("ResizeObserver cleanup failed:", d);
      }
    };
  }, [i, s]), o;
}, zt = (t) => {
  const { widget: e } = re(Z), [o, a] = M("100%"), [s, i] = M("100%"), { width: c, height: d } = kt(t), u = b(() => ({ basePadding: e.data.basePadding || 0, isSquare: e.data.square || false, isCircle: e.data.circle || false }), [e.data.basePadding, e.data.square, e.data.circle]), r = b(() => u.basePadding * 16, [u.basePadding]);
  return A(() => {
    if (!c || !d || c < 0 || d < 0) return;
    if (!u.isSquare && !u.isCircle) {
      a("100%"), i("100%");
      return;
    }
    if (!(c >= r && d >= r)) {
      a("0px"), i("0px");
      return;
    }
    const m = c - r, n = d - r, l = Math.min(m, n);
    a(`${l}px`), i(`${l}px`);
  }, [c, d, r, u.isSquare, u.isCircle]), { width: o, height: s };
};
function L(t) {
  return t == null || typeof t != "string" || t.trim() === "" ? null : ut(t) ? t : null;
}
const $t = ge(({ children: t, data: e, oidValue: o = null, isValidType: a = true, bgActive: s = true, sx: i = {} }, c) => {
  const d = N(null), u = N(null), [r, f] = M(null), m = N(null), n = N(null), l = re(Z);
  if (!l) throw new Error("CollectionBase must be used within CollectionProvider");
  const { wrappedContent: p, widget: g } = l, { backgroundStyles: y, borderStyles: x } = ce(g.style), { width: H, height: R } = zt(r);
  xt();
  const V = g.data.oidObject, j = V == null ? void 0 : V._id, $ = b(() => {
    if (g.data.noFooter) return "";
    const I = o || o === 0 || String(o) === "false" ? `${o}${(V == null ? void 0 : V.unit) ?? ""}` : "";
    return e.footer || e.alias || e.value || I || "";
  }, [e.footer, e.alias, e.value, o, V == null ? void 0 : V.unit, g.data.noFooter]), z = b(() => oe({ overflow: "hidden", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", ...y, background: p ? e.frameBackground : e.frameBackground || "transparent", backgroundColor: p ? L(e.frameBackground) ? void 0 : e.frameBackground : L(e.frameBackground) ? "transparent" : e.frameBackground, borderColor: p ? "" : e.frameBackground || (x == null ? void 0 : x["border-color"]) }), [y, x, e.frameBackground, p]), k = b(() => oe({ overflow: "hidden", width: H, height: R, display: "flex", justifyContent: "center", alignItems: "center", background: s && p ? e.background : s ? e.background || "transparent" : p ? void 0 : "transparent", borderColor: p ? "" : e.background || (x == null ? void 0 : x["border-color"]), borderRadius: g.data.circle || g.data.ellipse ? "50%" : void 0, ...i }), [H, R, s, p, e.background, x, g.data.circle, g.data.ellipse, i]);
  return A(() => {
    g.data.noHeader || !m.current || (m.current.innerHTML = e.header);
  }, [e.header, g.data.noHeader]), A(() => {
    g.data.noFooter || !n.current || (n.current.innerHTML = String($));
  }, [$, g.data.noFooter]), _e(c, () => ({ get paper0() {
    return (d == null ? void 0 : d.current) ?? null;
  }, get paper1() {
    return (u == null ? void 0 : u.current) ?? null;
  }, get header() {
    return (m == null ? void 0 : m.current) ?? null;
  } })), K(fe, { ref: d, className: "BASE-PAPER-0", square: g.data.squaredCorner, variant: g.data.outlinedFrame ? "outlined" : "elevation", sx: z, children: [!!a && K(he, { children: [h(w, { sx: { width: g.data.noHeader ? "0%" : "100%", height: g.data.noHeader ? "0%" : "auto", mt: (g.data.basePadding ?? 8) / 2, mb: -(g.data.basePadding ?? 8) / 2 }, children: h(Q, { ref: m, noWrap: true, variant: "body2", sx: { fontSize: e.headerSize, background: L(e.textColorCm), WebkitBackgroundClip: "text", backgroundClip: "text", color: L(e.textColorCm) ? "transparent" : e.textColorCm } }) }), h(w, { className: "BASE-BOX-1", ref: f, sx: { overflow: "hidden", p: g.data.basePadding, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: h(fe, { ref: u, className: "BASE-PAPER-1", elevation: g.data.outlined ? 0 : Number(g.data.baseElevation) || 0, square: !g.data.basePadding || g.data.squaredCorner, variant: g.data.outlined ? "outlined" : "elevation", sx: k, children: t }) }), h(w, { sx: { width: g.data.noFooter ? "0%" : "100%", height: g.data.noFooter ? "0%" : "auto", mt: -(g.data.basePadding ?? 8) / 2, mb: (g.data.basePadding ?? 8) / 2 }, children: h(Q, { ref: n, noWrap: true, variant: "body2", sx: { fontSize: e.footerSize, background: L(e.textColorCm), WebkitBackgroundClip: "text", backgroundClip: "text", color: L(e.textColorCm) ? "transparent" : e.textColorCm } }) })] }), !a && h(w, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: h(Q, { variant: "body2", sx: { p: 1, width: "100%", textAlign: "center" }, children: j ? `${j} has an invalid type!` : "Please select a valid object ID" }) })] });
});
$t.displayName = "CollectionBase";
function _t(t, e) {
  return t[e];
}
function Tt(t) {
  return typeof t == "object" && t !== null && "sliderOrientation" in t;
}
const At = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
function It(t) {
  return { markerIconSize: t.markerIconSize, markerTextColor: t.markerTextColor, markerTextSize: t.markerTextSize, markerIconColor: t.markerIconColor };
}
function Ot(t) {
  return {};
}
function v(t) {
  for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
}
function wt(t) {
  const { rxData: e, oidObject: o, oidName: a, theme: s, fontStyles: i, textStyles: c, backgroundStyles: d, formatSize: u, getDataValue: r, widgetResolver: f } = t, m = (n) => n && String(n) !== "" ? String(n) : void 0;
  return { icon: (n, l) => e.noIcon ? "" : v([{ condition: l, value: r("icon", "Active") }, { condition: l, value: r("iconSmall", "Active") }, { value: r("icon", String(n)) }, { value: r("iconSmall", String(n)) }, { value: r("icon", "") }, { value: r("iconSmall", "") }]) ?? "", iconActive: (n, l) => !l || e.noIcon ? "" : v([{ value: r("icon", String(n)) }, { value: r("iconSmall", String(n)) }]) ?? "", iconSizeCm: (n, l) => v([{ condition: r("iconSize", "") === 0, value: "0px" }, { condition: !!r("iconSize", ""), value: `calc(24px * ${r("iconSize", "")} / 100)` }]) ?? "24px", iconSize: (n, l) => v([{ condition: l && r("iconSize", "Active") === 0, value: "0px" }, { condition: l && !!r("iconSize", "Active"), value: `calc(24px * ${r("iconSize", "Active")} / 100)` }, { condition: String(n) !== "" && r("iconSize", String(n)) === 0, value: "0px" }, { condition: String(n) !== "" && !!r("iconSize", String(n)), value: `calc(24px * ${r("iconSize", String(n))} / 100)` }, { condition: typeof f.markerIconSize == "number", value: `calc(24px * ${f.markerIconSize} / 100)` }, { condition: r("iconSize", "") === 0, value: "0px" }, { condition: !!r("iconSize", ""), value: `calc(24px * ${r("iconSize", "")} / 100)` }]) ?? "24px", iconSizeActive: (n, l) => l ? v([{ condition: r("iconSize", String(n)) === 0, value: "0px" }, { condition: !!r("iconSize", String(n)), value: `calc(24px * ${r("iconSize", String(n))} / 100)` }]) ?? "24px" : "24px", iconSizeOnly: (n, l) => v([{ condition: l && (!!r("iconSize", "Active") || r("iconSize", "Active") === 0), value: `${r("iconSize", "Active")}%` }, { condition: !!r("iconSize", String(n)) || r("iconSize", String(n)) === 0, value: `${r("iconSize", String(n))}%` }]) ?? "100%", iconSizeActiveOnly: (n, l) => l ? v([{ value: r("iconSize", String(n)) }]) ?? void 0 : void 0, iconWidth: (n, l) => v([{ condition: l, value: e.iconSizeActive }, { value: r("iconSize", String(n)) }, { value: f.markerIconSize }, { value: e.iconSize }, { value: 100 }]) ?? 100, iconHeight: (n, l) => v([{ condition: l, value: e.iconSizeActive }, { value: r("iconSize", String(n)) }, { value: f.markerIconSize }, { value: e.iconSize }, { value: 100 }]) ?? 100, forceColorMaskCm: (n, l) => v([{ value: r("enableIconColorMask", "") }]) ?? false, forceColorMask: (n, l) => v([{ condition: l, value: r("enableIconColorMask", "Active") }, { value: r("enableIconColorMask", String(n)) }, { condition: !!r("enableIconColorMask", String(n)), value: r("enableIconColorMask", "") }]) ?? false, forceColorMaskActive: (n, l) => l ? v([{ value: r("enableIconColorMask", String(n)) }]) ?? false : false, iconColor: (n, l) => v([{ condition: l, value: r("iconColor", "Active") }, { condition: String(n) !== "", value: r("iconColor", String(n)) }, { value: f.markerIconColor }, { value: r("iconColor", "") }]) ?? U("primary", s), iconColorActive: (n, l) => l ? v([{ value: r("iconColor", String(n)) }]) ?? "" : "", iconHover: (n, l) => v([{ value: e.iconHover ? `${e.iconHover}%` : void 0 }]) ?? "", iconHoverActive: (n, l) => l ? v([{ value: r("iconHover", String(n)) ? `${r("iconHover", String(n))}%` : void 0 }]) ?? void 0 : void 0, iconXOffsetCm: (n, l) => v([{ value: r("iconXOffset", "") }]) ?? "0px", iconYOffsetCm: (n, l) => v([{ value: r("iconYOffset", "") }]) ?? "0px", iconXOffset: (n, l) => v([{ condition: l, value: r("iconXOffset", "Active") }, { value: r("iconXOffset", String(n)) }]) ?? "0px", iconYOffset: (n, l) => v([{ condition: l, value: r("iconYOffset", "Active") }, { value: r("iconYOffset", String(n)) }]) ?? "0px", iconXOffsetActive: (n, l) => l ? v([{ condition: !r("iconXOffset", String(n)), value: "0px" }, { value: r("iconXOffset", String(n)) }]) ?? "0px" : "0px", iconYOffsetActive: (n, l) => l ? v([{ condition: !r("iconYOffset", String(n)), value: "0px" }, { value: r("iconYOffset", String(n)) }]) ?? "0px" : "0px", textColorActive: (n, l) => l ? v([{ value: r("textColor", String(n)), condition: r("textColor", String(n)) !== "" }, { value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0 }, { value: e.textColor && e.textColor !== "" ? e.textColor : void 0 }]) ?? void 0 : void 0, textColorCm: (n, l) => v([{ condition: typeof r("textColor", "") == "string", value: r("textColor", "") }, { condition: typeof (c == null ? void 0 : c.color) == "string", value: c == null ? void 0 : c.color }]) ?? U("text", s), textColor: (n, l) => v([{ condition: l && typeof r("textColor", "Active") == "string", value: r("textColor", "Active") }, { condition: typeof r("textColor", String(n)) == "string", value: r("textColor", String(n)) }, { value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0 }, { condition: typeof r("textColor", "") == "string", value: r("textColor", "") }, { condition: typeof (c == null ? void 0 : c.color) == "string", value: c == null ? void 0 : c.color }]) ?? U("text", s), fontSize: (n, l) => v([{ condition: l && typeof e.valueSizeActive == "number", value: u(e.valueSizeActive) }, { value: typeof r("valueSize", String(n)) == "number" ? u(r("valueSize", String(n))) : void 0 }, { condition: typeof f.markerTextSize == "number", value: u(f.markerTextSize) }, { value: typeof e.valueSize == "number" ? u(e.valueSize) : void 0 }, { condition: typeof (i == null ? void 0 : i["font-size"]) == "string", value: i == null ? void 0 : i["font-size"] }]) ?? null, headerSize: (n, l) => v([{ condition: l && typeof r("headerSize", "Active") == "number", value: `${u(r("headerSize", "Active"))}` }, { condition: typeof r("headerSize", String(n)) == "number", value: `${u(r("headerSize", String(n)))}` }, { condition: typeof r("headerSize", "") == "number", value: `${u(r("headerSize", ""))}` }, { condition: typeof (i == null ? void 0 : i["font-size"]) == "string", value: i == null ? void 0 : i["font-size"] }]) ?? null, footerSize: (n, l) => v([{ condition: l && typeof r("footerSize", "Active") == "number", value: `${u(r("footerSize", "Active"))}` }, { condition: typeof r("footerSize", String(n)) == "number", value: `${u(r("footerSize", String(n)))}` }, { condition: typeof r("footerSize", "") == "number", value: `${u(r("footerSize", ""))}` }, { condition: typeof (i == null ? void 0 : i["font-size"]) == "string", value: i == null ? void 0 : i["font-size"] }]) ?? null, valueSize: (n, l) => v([{ condition: l && typeof r("valueSize", "Active") == "number", value: `${u(r("valueSize", "Active"))}` }, { condition: typeof r("valueSize", String(n)) == "number", value: `${u(r("valueSize", String(n)))}` }, { condition: typeof f.markerTextSize == "number", value: u(f.markerTextSize) }, { condition: typeof r("valueSize", "") == "number", value: `${u(r("valueSize", ""))}` }, { condition: typeof (i == null ? void 0 : i["font-size"]) == "string", value: i == null ? void 0 : i["font-size"] }]) ?? null, valueSizeActive: (n, l) => l ? v([{ value: typeof r("valueSize", String(n)) == "number" ? u(r("valueSize", String(n))) : null }]) ?? null : null, header: (n, l) => String(v([{ condition: l, value: m(r("header", "Active")) }, { value: m(r("header", String(n))) }, { value: m(r("header", "")) }, { value: m(a) }]) ?? "").replace(/(\r\n|\n|\r)/gm, ""), footer: (n, l) => String(v([{ condition: l, value: m(r("footer", "Active")) }, { value: m(r("footer", String(n))) }, { value: m(r("footer", "")) }]) ?? "").replace(/(\r\n|\n|\r)/gm, ""), alias: (n, l) => String(r("alias", String(n)) || "").replace(/(\r\n|\n|\r)/gm, ""), value: (n, l) => {
    const p = r("value", String(n));
    return p != null ? `${p}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
  }, backgroundColor: (n, l) => v([{ value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0 }, { value: d == null ? void 0 : d["background-color"] }]) ?? "", backgroundColorActive: (n, l) => l ? r("backgroundColor", String(n)) : void 0, background: (n, l) => v([{ condition: l, value: r("background", "Active") }, { value: r("background", String(n)) }, { value: r("background", "") }]) ?? "", backgroundActive: (n, l) => l ? r("background", String(n)) : void 0, frameBackgroundColor: (n, l) => v([{ value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0 }, { value: d == null ? void 0 : d["background-color"] }]) ?? "", frameBackgroundColorActive: (n, l) => l ? r("frameBackgroundColor", String(n)) : void 0, frameBackground: (n, l) => v([{ condition: l, value: r("frameBackground", "Active") }, { value: r("frameBackground", String(n)) }, { value: r("frameBackground", "") }]) ?? U("paper", s), frameBackgroundActive: (n, l) => l ? r("frameBackground", String(n)) : void 0, markerIconSize: (n, l) => f.markerIconSize, markerTextColor: (n, l) => f.markerTextColor, markerTextSize: (n, l) => f.markerTextSize, markerIconColor: (n, l) => f.markerIconColor };
}
function Bt(t = "", e = false, o) {
  return { icon: o.icon(t, e), iconActive: o.iconActive(t, e), iconSizeCm: o.iconSizeCm(t, e), iconSize: o.iconSize(t, e), iconSizeActive: o.iconSizeActive(t, e), iconSizeOnly: o.iconSizeOnly(t, e), iconWidth: o.iconWidth(t, e), iconHeight: o.iconHeight(t, e), iconSizeActiveOnly: o.iconSizeActiveOnly(t, e), forceColorMaskCm: o.forceColorMaskCm(t, e), forceColorMask: o.forceColorMask(t, e), forceColorMaskActive: o.forceColorMaskActive(t, e), iconColor: o.iconColor(t, e), iconColorActive: o.iconColorActive(t, e), iconHover: o.iconHover(t, e), iconHoverActive: o.iconHoverActive(t, e), iconXOffsetCm: o.iconXOffsetCm(t, e), iconYOffsetCm: o.iconYOffsetCm(t, e), iconXOffset: o.iconXOffset(t, e), iconYOffset: o.iconYOffset(t, e), iconXOffsetActive: o.iconXOffsetActive(t, e), iconYOffsetActive: o.iconYOffsetActive(t, e), textColorActive: o.textColorActive(t, e), textColorCm: o.textColorCm(t, e), textColor: o.textColor(t, e), header: o.header(t, e), headerSize: o.headerSize(t, e), footer: o.footer(t, e), footerSize: o.footerSize(t, e), alias: o.alias(t, e), value: o.value(t, e), valueSize: o.valueSize(t, e), valueSizeActive: o.valueSizeActive(t, e), backgroundColor: o.backgroundColor(t, e), backgroundColorActive: o.backgroundColorActive(t, e), background: o.background(t, e), backgroundActive: o.backgroundActive(t, e), frameBackgroundColor: o.frameBackgroundColor(t, e), frameBackgroundColorActive: o.frameBackgroundColorActive(t, e), frameBackground: o.frameBackground(t, e), frameBackgroundActive: o.frameBackgroundActive(t, e) };
}
function Xt(t) {
  const { theme: e, widget: o, widget: { data: a }, getPropertyValue: s } = re(Z), i = a[`${t}Object`], c = s(t), d = i == null ? void 0 : i.name, { fontStyles: u, textStyles: r, backgroundStyles: f } = ce(o.style), m = P(At, []), n = P(($, z = "") => {
    const k = `${$}${z}`;
    return _t(a, k);
  }, [a]), l = b(() => Tt(a) ? It(a) : Ot(), [a]), p = b(() => wt({ rxData: a, oidObject: i, oidName: d, theme: e, fontStyles: u, textStyles: r, backgroundStyles: f, formatSize: m, getDataValue: n, widgetResolver: l }), [a, i, d, e, u, r, f, m, n, l]), g = P(($ = "", z = false) => Bt($, z, p), [p]), { states: y, widgetStates: x, minValue: H, maxValue: R } = b(() => {
    const $ = {};
    let z = null, k = null;
    const I = [], O = i == null ? void 0 : i.type, ie = (i == null ? void 0 : i.commonStates) || {}, q = Object.entries(ie);
    if (O === "number" || O === "string" || O === "boolean" || O === "mixed") {
      const S = a.ignoreCommonStates === false ? a.values_count : q.length > 0 ? q.length : a.values_count;
      for (let _ = 1; _ <= S; _++) {
        const B = n("value", String(_)), D = a[`alias${_}`], W = i == null ? void 0 : i.unit;
        if (B === void 0 || !/\S/.test(String(B))) continue;
        const F = q.find(([ke]) => ke === String(B)), ue = F ? O === "number" ? Number(F[0]) : String(F[0]) : O === "number" ? Number(B) : B, ye = String(c) === String(ue), C = g(_, ye);
        I.push({ value: ue, label: C.alias || String(C.value), alias: C.alias, fontSize: C.valueSize, textColor: C.textColor, icon: C.icon, iconSize: C.iconSize, iconSizeOnly: C.iconSizeOnly, iconWidth: C.iconWidth, iconHeight: C.iconHeight, iconXOffset: C.iconXOffset, iconYOffset: C.iconYOffset, iconColor: C.iconColor, iconHover: C.iconHover, forceColorMask: C.forceColorMask, valueSize: C.valueSize, background: C.background, frameBackground: C.frameBackground });
        const xe = String(F ? F[0] : B);
        $[xe] = D && String(D).trim() !== "" ? D : `${B}${W}`;
      }
    }
    if (O === "number" && I.length) {
      const S = I.map((_) => typeof _.value == "number" ? _.value : NaN).filter((_) => !isNaN(_));
      S.length > 0 && (z = Math.min(...S), k = Math.max(...S));
    }
    return { states: I, widgetStates: $, minValue: z, maxValue: k };
  }, [i == null ? void 0 : i.type, i == null ? void 0 : i.commonStates, i == null ? void 0 : i.unit, a, n, c, g]), { data: V, activeIndex: j } = b(() => {
    switch (i == null ? void 0 : i.type) {
      case "mixed":
      case "boolean":
      case "number":
      case "string": {
        const z = y.findIndex((k) => String(k.value) === String(c));
        return z !== -1 ? { data: g(z + 1, true), activeIndex: z + 1 } : { data: g("", true), activeIndex: void 0 };
      }
      default:
        return { data: g("", true), activeIndex: void 0 };
    }
  }, [i, c, y, g]);
  return { widgetStates: x, minValue: H, maxValue: R, data: V, activeIndex: j, oidValue: c, states: y, resolveStyleData: g };
}
export {
  Z as C,
  ne as D,
  dt as I,
  $t as a,
  J as b,
  jt as c,
  Vt as d,
  T as e,
  At as f,
  L as g,
  ht as h,
  kt as i,
  ce as j,
  oe as k,
  Rt as l,
  Dt as m,
  Wt as n,
  Gt as o,
  me as p,
  Et as q,
  Se as r,
  Nt as s,
  Ht as t,
  Xt as u,
  yt as v,
  Mt as w
};
