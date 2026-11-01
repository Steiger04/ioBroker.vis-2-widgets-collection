import { p as be, h as v, e as H, m as K, g as y, l as E, f as O, k as de, i as Z, j as Q } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { k as Se, s as fe, m as Ce, n as xe, aA as ye, o as me, a as ke, B, T as L, G as U, f as ze, ab as $e, aB as _e, y as Ae, b as Ie, I as Te, aC as we, aD as Be, C as ee, e as ge, d as ae, P as le } from "./usePopoverPositioning-C1_MhytU.js";
const Oe = (t) => {
  const { absolute: e, children: o, classes: l, flexItem: s, light: a, orientation: c, textAlign: u, variant: d } = t;
  return xe({ root: ["root", e && "absolute", d, a && "light", c === "vertical" && "vertical", s && "flexItem", o && "withChildren", o && c === "vertical" && "withChildrenVertical", u === "right" && c !== "vertical" && "textAlignRight", u === "left" && c !== "vertical" && "textAlignLeft"], wrapper: ["wrapper", c === "vertical" && "wrapperVertical"] }, ye, l);
}, Fe = fe("div", { name: "MuiDivider", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, o.absolute && e.absolute, e[o.variant], o.light && e.light, o.orientation === "vertical" && e.vertical, o.flexItem && e.flexItem, o.children && e.withChildren, o.children && o.orientation === "vertical" && e.withChildrenVertical, o.textAlign === "right" && o.orientation !== "vertical" && e.textAlignRight, o.textAlign === "left" && o.orientation !== "vertical" && e.textAlignLeft];
} })(me(({ theme: t }) => ({ margin: 0, flexShrink: 0, borderWidth: 0, borderStyle: "solid", borderColor: (t.vars || t).palette.divider, borderBottomWidth: "thin", variants: [{ props: { absolute: true }, style: { position: "absolute", bottom: 0, left: 0, width: "100%" } }, { props: { light: true }, style: { borderColor: t.vars ? `rgba(${t.vars.palette.dividerChannel} / 0.08)` : ke(t.palette.divider, 0.08) } }, { props: { variant: "inset" }, style: { marginLeft: 72 } }, { props: { variant: "middle", orientation: "horizontal" }, style: { marginLeft: t.spacing(2), marginRight: t.spacing(2) } }, { props: { variant: "middle", orientation: "vertical" }, style: { marginTop: t.spacing(1), marginBottom: t.spacing(1) } }, { props: { orientation: "vertical" }, style: { height: "100%", borderBottomWidth: 0, borderRightWidth: "thin" } }, { props: { flexItem: true }, style: { alignSelf: "stretch", height: "auto" } }, { props: ({ ownerState: e }) => !!e.children, style: { display: "flex", textAlign: "center", border: 0, borderTopStyle: "solid", borderLeftStyle: "solid", "&::before, &::after": { content: '""', alignSelf: "center" } } }, { props: ({ ownerState: e }) => e.children && e.orientation !== "vertical", style: { "&::before, &::after": { width: "100%", borderTop: `thin solid ${(t.vars || t).palette.divider}`, borderTopStyle: "inherit" } } }, { props: ({ ownerState: e }) => e.orientation === "vertical" && e.children, style: { flexDirection: "column", "&::before, &::after": { height: "100%", borderLeft: `thin solid ${(t.vars || t).palette.divider}`, borderLeftStyle: "inherit" } } }, { props: ({ ownerState: e }) => e.textAlign === "right" && e.orientation !== "vertical", style: { "&::before": { width: "90%" }, "&::after": { width: "10%" } } }, { props: ({ ownerState: e }) => e.textAlign === "left" && e.orientation !== "vertical", style: { "&::before": { width: "10%" }, "&::after": { width: "90%" } } }] }))), Pe = fe("span", { name: "MuiDivider", slot: "Wrapper", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.wrapper, o.orientation === "vertical" && e.wrapperVertical];
} })(me(({ theme: t }) => ({ display: "inline-block", paddingLeft: `calc(${t.spacing(1)} * 1.2)`, paddingRight: `calc(${t.spacing(1)} * 1.2)`, whiteSpace: "nowrap", variants: [{ props: { orientation: "vertical" }, style: { paddingTop: `calc(${t.spacing(1)} * 1.2)`, paddingBottom: `calc(${t.spacing(1)} * 1.2)` } }] }))), J = be(function(e, o) {
  const l = Se({ props: e, name: "MuiDivider" }), { absolute: s = false, children: a, className: c, orientation: u = "horizontal", component: d = a || u === "vertical" ? "div" : "hr", flexItem: i = false, light: f = false, role: m = d !== "hr" ? "separator" : void 0, textAlign: n = "center", variant: r = "fullWidth", ...p } = l, b = { ...l, absolute: s, component: d, flexItem: i, light: f, orientation: u, role: m, textAlign: n, variant: r }, C = Oe(b);
  return v(Fe, { as: d, className: Ce(C.root, c), role: m, ref: o, ownerState: b, "aria-orientation": m === "separator" && (d !== "hr" || u === "vertical") ? u : void 0, ...p, children: a ? v(Pe, { className: C.wrapper, ownerState: b, children: a }) : null });
});
J && (J.muiSkipListHighlight = true);
const I = ({ dividerText: t = "" }) => {
  const e = { position: "absolute", left: 0, width: "100%" };
  return v(B, { sx: { display: "inline-block", pt: 1.5, pb: t ? 2 : 1.5 }, children: t ? v(J, { sx: e, children: v(L, { sx: { opacity: 0.7, color: "primary.main" }, variant: "caption", children: U.t(t) }) }) : v(J, { sx: e }) });
}, Ve = ze(v("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" }), "Delete"), F = { HEX: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/, RGB: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i, GRADIENT: /^(linear-gradient|radial-gradient)\(.*\)$/i, GRADIENT_PREFIX: /^(linear-gradient|radial-gradient)\(/i };
function oe(t) {
  if (!t || t.trim() === "") return { isValid: true, normalizedValue: "", colorType: "empty" };
  const e = t.trim();
  return F.HEX.test(e) ? { isValid: true, normalizedValue: e, colorType: "hex" } : F.RGB.test(e) ? { isValid: true, normalizedValue: e, colorType: "rgb" } : F.GRADIENT.test(e) ? { isValid: true, normalizedValue: e, colorType: "gradient" } : { isValid: false, normalizedValue: e, colorType: "invalid" };
}
function Me(t) {
  if (t == null || typeof t != "string") return false;
  const e = t.trim();
  return e === "" ? false : F.GRADIENT_PREFIX.test(e);
}
function De(t) {
  if (!t || typeof t != "string") return null;
  const e = t.match(F.HEX);
  if (!e) return null;
  let o = e[1];
  o.length === 3 && (o = o.split("").map((u) => u + u).join(""));
  const l = parseInt(o.substring(0, 2), 16), s = parseInt(o.substring(2, 4), 16), a = parseInt(o.substring(4, 6), 16);
  let c = 1;
  if (o.length === 8) {
    const u = parseInt(o.substring(6, 8), 16);
    c = Math.round(u / 255 * 1e3) / 1e3;
  }
  return { r: l, g: s, b: a, a: c };
}
function He(t) {
  if (!t || typeof t != "string" || !t.match(F.RGB)) return null;
  const o = t.match(/\d+\.?\d*/g);
  if (!o || o.length < 3) return null;
  const l = parseInt(o[0], 10), s = parseInt(o[1], 10), a = parseInt(o[2], 10), c = o[3] !== void 0 ? parseFloat(o[3]) : 1;
  return l < 0 || l > 255 || s < 0 || s > 255 || a < 0 || a > 255 || c < 0 || c > 1 ? null : { r: l, g: s, b: a, a: Math.round(c * 1e3) / 1e3 };
}
function G(t) {
  if (!t || typeof t != "string") return null;
  const e = t.trim();
  return e.startsWith("#") ? De(e) : e.toLowerCase().startsWith("rgb") ? He(e) : null;
}
function ie(t) {
  if (!t || typeof t != "string") return null;
  const e = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\))\s*(\d+(?:\.\d+)?%)?/gi, o = Array.from(t.matchAll(e));
  if (o.length < 2) return null;
  const l = o.map((s, a) => {
    const c = s[1];
    let u;
    return s[2] ? u = parseFloat(s[2]) : u = a / (o.length - 1) * 100, { color: c, position: u };
  });
  return l.sort((s, a) => s.position - a.position), l;
}
function Ee(t) {
  if (!t || t.length < 2) return null;
  const e = t.find((n) => n.position === 50);
  if (e) {
    const n = G(e.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  let o = null, l = null;
  for (let n = 0; n < t.length; n++) if (t[n].position <= 50 && (o = t[n]), t[n].position > 50 && !l) {
    l = t[n];
    break;
  }
  if (!l && o) {
    const n = G(o.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  if (!o && l) {
    const n = G(l.color);
    return n ? n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})` : null;
  }
  if (!o || !l) return null;
  const s = G(o.color), a = G(l.color);
  if (!s || !a) return null;
  const c = l.position - o.position;
  if (c === 0) {
    const n = a;
    return n.a === 1 ? `rgb(${n.r}, ${n.g}, ${n.b})` : `rgba(${n.r}, ${n.g}, ${n.b}, ${n.a})`;
  }
  const u = (50 - o.position) / c, d = Math.round(s.r + (a.r - s.r) * u), i = Math.round(s.g + (a.g - s.g) * u), f = Math.round(s.b + (a.b - s.b) * u), m = Math.round((s.a + (a.a - s.a) * u) * 1e3) / 1e3;
  return m === 1 ? `rgb(${d}, ${i}, ${f})` : `rgba(${d}, ${i}, ${f}, ${m})`;
}
function We(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (e === "") return null;
  if (!F.GRADIENT_PREFIX.test(e)) return G(e) ? e : null;
  try {
    const l = ie(e);
    return l ? Ee(l) : null;
  } catch {
    return null;
  }
}
function at(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (!e || !F.GRADIENT_PREFIX.test(e)) return null;
  const o = ie(e);
  return o && o.length ? o.map((l) => l.color) : null;
}
const Ne = { top: [0, -1], bottom: [0, 1], left: [-1, 0], right: [1, 0] }, Ge = (t) => {
  const e = t.trim().toLowerCase();
  if (!e) return [0, 1];
  if (e.endsWith("deg")) {
    const o = parseFloat(e);
    if (!Number.isFinite(o)) return [0, 1];
    const l = o * Math.PI / 180;
    return [Math.sin(l), -Math.cos(l)];
  }
  if (e.startsWith("to ")) {
    const o = e.slice(3).split(/\s+/).filter(Boolean);
    let l = 0, s = 0;
    for (const c of o) {
      const u = Ne[c];
      u && (l += u[0], s += u[1]);
    }
    if (l === 0 && s === 0) return [0, 1];
    const a = Math.hypot(l, s);
    return [l / a, s / a];
  }
  return [0, 1];
};
function lt(t) {
  if (t == null || typeof t != "string") return null;
  const e = t.trim();
  if (!e.startsWith("linear-gradient(")) return null;
  const o = e.indexOf("("), l = e.lastIndexOf(")");
  if (o === -1 || l === -1 || l < o) return null;
  const s = e.slice(o + 1, l), a = s.search(/#[0-9a-fA-F]|rgba?\(/i), c = a === -1 ? "" : s.slice(0, a).replace(/[,;]?\s*$/, ""), u = a === -1 ? s : s.slice(a), [d, i] = Ge(c), f = ie(`linear-gradient(${u})`);
  if (!f || !f.length) return null;
  const m = (n) => Math.round(n * 1e6) / 1e6;
  return { type: "linear", x: m(0.5 - d / 2), y: m(0.5 - i / 2), x2: m(0.5 + d / 2), y2: m(0.5 + i / 2), colorStops: f.map((n) => ({ offset: n.position / 100, color: n.color })) };
}
function R(t, e) {
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
function Xe(t, e) {
  if (!(!e || e.length === 0)) for (const o of e) {
    if (!o) continue;
    const l = t[o];
    if (typeof l != "string" || l.trim() === "") continue;
    const s = oe(l);
    if (s.isValid && s.normalizedValue.trim() !== "") return s.normalizedValue;
  }
}
function qe(t, e, o, l) {
  const s = t.name ? e[t.name] : void 0;
  if (typeof s == "string" && s.trim() !== "") {
    const c = oe(s);
    if (c.isValid && c.normalizedValue.trim() !== "") return c.normalizedValue;
  }
  const a = Xe(e, t.fallbackFields);
  if (a !== void 0) return a;
  if (t.inheritTextStyle === true) {
    const c = l == null ? void 0 : l.color;
    if (typeof c == "string" && c.trim() !== "") return c;
  }
  return R(t.terminal, o);
}
function Re(t) {
  var _a, _b, _c, _d, _e2;
  const e = t.context, o = ((_a = t.selectedWidgets) == null ? void 0 : _a[0]) ?? t.selectedWidget;
  return o ? (_e2 = (_d = (_c = (_b = e == null ? void 0 : e.views) == null ? void 0 : _b[t.selectedView]) == null ? void 0 : _c.widgets) == null ? void 0 : _d[o]) == null ? void 0 : _e2.style : void 0;
}
function Ye({ field: t, data: e, onDataChange: o, props: l }) {
  const s = t.name, a = e[s], [c, u] = H(a || ""), [d, i] = H(false), [f, m] = H(null), n = K(a), r = K(null), p = l.context.theme, b = $e(l.context.socket, l.context.theme), C = y(() => Re(l), [l]), z = y(() => qe(t, e, b, C), [t, e, b, C]), P = typeof a == "string" && a.trim() !== "", { anchorOrigin: V, transformOrigin: W, maxHeight: N, setContentRef: X, popoverActionRef: $ } = _e(f, !!f);
  E(() => () => {
    r.current !== null && clearTimeout(r.current);
  }, []);
  const h = O((x, D = false) => {
    if (r.current !== null && (clearTimeout(r.current), r.current = null), x == null) {
      u(""), i(false), n.current = null, o({ [s]: null });
      return;
    }
    if (typeof x != "string") {
      i(true);
      return;
    }
    if (x.trim() === "") {
      u(""), i(false), n.current = null, o({ [s]: null });
      return;
    }
    const A = oe(x);
    if (u(x), !A.isValid) {
      i(true);
      return;
    }
    i(false);
    let w;
    if (t.noGradient === true) {
      const j = We(A.normalizedValue);
      if (j === null) {
        i(true);
        return;
      }
      w = j;
    } else w = A.normalizedValue || null;
    n.current = w, D ? r.current = setTimeout(() => {
      r.current = null, o({ [s]: w });
    }, 150) : o({ [s]: w });
  }, [s, t.noGradient, o]), _ = O((x) => h(x, true), [h]), M = O((x) => h(x.target.value), [h]), T = O(() => h(null), [h]), te = !!f;
  return E(() => {
    a !== n.current && (n.current = a, u(a || ""), i(false));
  }, [a]), v(de, { children: Z(Ae, { theme: p, children: [Z(B, { sx: { display: "flex", alignItems: "flex-start", gap: 0.5, mt: 1 }, children: [v(Ie, { variant: "standard", fullWidth: true, value: c, error: d, placeholder: P ? "" : U.t("color_inherit"), helperText: d ? "Invalid color format (use Hex, RGB, RGBA, or Gradient)" : "", onChange: M, slotProps: { htmlInput: { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", paddingBottom: "2px", fontSize: "80%" } } } }), P && v(Te, { onClick: T, title: U.t("clear_color"), size: "large", sx: { mt: -1, mr: -1.5 }, children: v(Ve, {}) }), v(B, { onClick: (x) => m(x.currentTarget), title: U.t("choose_color"), sx: { mt: c ? "4px" : "-2px", px: "4px", py: c ? "4px" : "3px", backgroundColor: z ? p.name === "light" ? p.palette.common.white : "#121212" : "transparent", borderRadius: "1px", display: "inline-block", cursor: "pointer", verticalAlign: "middle", boxSizing: "border-box", border: d ? `1px solid ${p.palette.error.main}` : z ? `1px solid ${p.name === "light" ? p.palette.grey[400] : p.palette.common.black}` : `1px dashed ${p.name === "light" ? p.palette.grey[400] : p.palette.text.secondary}`, opacity: d ? 0.6 : 1 }, children: v(B, { sx: { width: z ? "36px" : "38px", height: z ? "14px" : "18px", borderRadius: "2px", background: d ? "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,0,0,0.1) 2px, rgba(255,0,0,0.1) 4px)" : z } }) })] }), v(we, { action: $, slotProps: { paper: { elevation: 0, sx: { p: "9px", borderRadius: "6px", backgroundColor: "rgb(32,32,32)", boxSizing: "border-box", maxHeight: N, overflowX: "hidden", overflowY: "auto" } } }, open: te, anchorEl: f, onClose: () => m(null), transformOrigin: W, anchorOrigin: V, children: v(B, { ref: X, sx: { borderRadius: "6px" }, children: v(Be, { value: c || z || b.palette.primary.main, onChange: _, hidePresets: true, hideInputs: true, hideEyeDrop: true, hideInputType: true }) }) })] }) });
}
function Y(t) {
  const { name: e, label: o, default: l = "", fallbackFields: s, noGradient: a, terminal: c, inheritTextStyle: u, hidden: d } = t, i = { name: e, label: o, default: l, type: "custom", component: (f, m, n, r) => v(Ye, { field: f, data: m, onDataChange: n, props: r }) };
  return s !== void 0 && (i.fallbackFields = s), a !== void 0 && (i.noGradient = a), c !== void 0 && (i.terminal = c), u !== void 0 && (i.inheritTextStyle = u), d !== void 0 && (i.hidden = d), i;
}
function ct(t, e, o) {
  return Y({ name: t, label: e, fallbackFields: ["sliderColor"], terminal: "primary", ...o });
}
const st = (t, e) => (o) => o[t] !== e, ut = [{ value: "normal", label: "normal" }, { value: "italic", label: "italic" }, { value: "oblique", label: "oblique" }], dt = [{ value: "normal", label: "normal" }, { value: "bold", label: "bold" }, { value: "bolder", label: "bolder" }, { value: "lighter", label: "lighter" }, { value: "100", label: "100" }, { value: "200", label: "200" }, { value: "300", label: "300" }, { value: "400", label: "400" }, { value: "500", label: "500" }, { value: "600", label: "600" }, { value: "700", label: "700" }, { value: "800", label: "800" }, { value: "900", label: "900" }], ft = [{ value: "both", label: "both" }, { value: "left", label: "left" }, { value: "right", label: "right" }];
function mt(t, e) {
  const o = { label: "", type: "custom", component: () => v(I, { dividerText: t }) };
  return (e == null ? void 0 : e.hidden) !== void 0 && (o.hidden = e.hidden), o;
}
function gt(t = (e) => e.write === false) {
  return { name: "onlyDisplay", type: "checkbox", label: "only_display", disabled: t, default: false, hidden: t };
}
const ce = (t) => {
  if (!t || typeof t != "string") return false;
  const e = t.trim();
  return e === "" || e.startsWith("data:") ? false : !!(e.startsWith("http://") || e.startsWith("https://") || e.startsWith("//") || e.startsWith("/") || e.startsWith("./") || e.startsWith("../") || (e.includes("/") || e.includes("\\")) && /\.[a-zA-Z0-9]+$/.test(e));
}, vt = (t) => {
  const { groupName: e = "", allFields: o = true } = t || {}, l = [{ label: "", type: "custom", component: () => v(I, { dividerText: "icon" }), hidden: "data.noIcon" }, { name: `icon${e}`, label: "icon", type: "image", default: "" }, { name: `iconSmall${e}`, label: "small_icon", type: "icon64", default: "" }, { name: `iconSize${e}`, label: "icon_size", type: "slider", min: 1, max: 500, step: 1, hidden: "data.noIcon" }, { name: `enableIconColorMask${e}`, label: "enable_icon_color_mask", type: "checkbox", default: false, tooltip: "enable_icon_color_mask_tooltip", hidden: (a, c) => {
    let u = true;
    const d = c !== void 0 ? c : e, i = a[`icon${d}`], f = a[`iconSmall${d}`];
    return (d === "" || d === "Active") && (u = false), c !== void 0 && (u = !a.iconColor && !a.enableIconColorMask && !a[`iconColor${c}`] && !ce(i) && !ce(f)), u;
  } }, Y({ name: `iconColor${e}`, label: "icon_color", fallbackFields: [""], noGradient: true, terminal: "primary" }), { name: `iconXOffset${e}`, label: "icon_x_offset", type: "text", hidden: "data.noIcon" }, { name: `iconYOffset${e}`, label: "icon_y_offset", type: "text", hidden: "data.noIcon" }, { label: "", type: "custom", component: () => v(I, { dividerText: "header" }), hidden: (a, c) => a.noHeader && !o }, { name: `noHeader${e}`, type: "checkbox", label: "no_header", default: false }, { name: `noHeaderIcon${e}`, type: "checkbox", label: "no_header_icon", default: false, hidden: "data.noHeader" }, { name: `header${e}`, label: "header_text", type: "html", default: "", hidden: "data.noHeader" }, { name: `headerSize${e}`, label: "header_size", type: "slider", min: 0, max: 500, step: 1, hidden: "data.noHeader" }, { label: "", type: "custom", component: () => v(I, { dividerText: "value" }) }, { name: `alias${e}`, label: "alias", type: "html", default: "" }, { name: `value${e}`, label: "value", type: "text", default: "", hidden: (a, c) => {
    var _a;
    return ((_a = a.oidObject) == null ? void 0 : _a.type) === "boolean" || a.name === "valueActive";
  } }, { name: `valueSize${e}`, label: "value_size", type: "slider", min: 0, max: 500, step: 1 }, { label: "", type: "custom", component: () => v(I, { dividerText: "footer" }), hidden: (a, c) => a.noFooter && !o }, { name: `noFooter${e}`, label: "no_footer", type: "checkbox", default: false }, { name: `footer${e}`, label: "footer_text", type: "html", default: "", hidden: "data.noFooter" }, { name: `footerSize${e}`, label: "footer_size", type: "slider", min: 0, max: 500, step: 1, hidden: "data.noFooter" }, { label: "", type: "custom", component: () => v(I, { dividerText: "characteristics" }) }, { name: `noCard${e}`, label: "without_card", type: "checkbox", default: false }, { name: `squaredCorner${e}`, label: "squared_corner", type: "checkbox", default: false }, Y({ name: `textColor${e}`, label: "text_color", fallbackFields: [""], terminal: "text", inheritTextStyle: true }), { label: "", name: "allFieldsDivider", type: "custom", component: () => v(I, {}) }, { name: `outlined${e}`, label: "outlined", type: "checkbox", default: false }, { name: `outlinedFrame${e}`, label: "outlined_frame", type: "checkbox", default: false }, { label: "", name: "allFieldsDivider", type: "custom", component: () => v(I, {}) }, { name: `basePadding${e}`, label: "base_padding", type: "slider", min: 0, max: 10, step: 0.1, default: 1 }, { name: `baseElevation${e}`, label: "base_elevation", type: "slider", min: 0, max: 24, step: 1, default: 4 }, { label: "", name: "allFieldsDivider", type: "custom", component: () => v(I, { dividerText: "geometry" }) }, { name: `square${e}`, label: "square", type: "checkbox", hidden: "data.circle || data.ellipse", default: false }, { name: `ellipse${e}`, label: "ellipse", type: "checkbox", hidden: "data.circle || data.square", default: false }, { name: `circle${e}`, label: "circle", type: "checkbox", hidden: "data.ellipse || data.square" }, { label: "", type: "custom", component: () => v(I, { dividerText: "background" }) }, Y({ name: `background${e}`, label: "background", fallbackFields: [], terminal: "transparent" }), { label: "", type: "custom", component: () => v(I, { dividerText: "frame_background" }) }, Y({ name: `frameBackground${e}`, label: "frame_background", fallbackFields: [], terminal: "paper" })];
  if (o) {
    const a = [`alias${e}`, `value${e}`];
    return l.filter((c) => !a.includes(c.name));
  }
  const s = ["allFieldsDivider", `noHeader${e}`, `noHeaderIcon${e}`, e === "Active" ? `value${e}` : "", `noFooter${e}`, `noCard${e}`, `squaredCorner${e}`, `outlined${e}`, `outlinedFrame${e}`, `basePadding${e}`, `baseElevation${e}`, `square${e}`, `ellipse${e}`, `circle${e}`];
  return l.filter((a) => !s.includes(a.name));
}, je = ({ valuesCount: t, commonStatesCount: e, ignoreCommonStates: o }) => {
  const l = t ?? 0;
  if (o === false) return l;
  const s = e ?? 0;
  return s > 0 ? s : l;
}, Le = () => {
  const { isSignalVisible: t, refService: e, widget: o } = Q(ee), l = y(() => {
    const a = [], c = Number(o.data["signals-count"]) || 0;
    for (let u = 0; u < c; u++) t(u) && a.push(u);
    return a;
  }, [o.data, t]), s = y(() => {
    const a = {};
    return l.forEach((c) => {
      a[c] = o.data[`signals-color-${c}`];
    }), a;
  }, [o.data, l]);
  E(() => {
    if (!(e == null ? void 0 : e.current)) return;
    const c = e.current.children, u = [];
    Array.from(c).forEach((d) => {
      const i = d.children[0];
      i && i instanceof HTMLElement && i.className === "vis-signal-icon iconOwn" && u.push(i);
    }), u.forEach((d, i) => {
      const f = l[i], m = f !== void 0 ? s[f] : void 0;
      m ? (d.style.color = m, d.style.filter = "drop-shadow(0px 10000px 0)", d.style.transform = "translateY(-10000px)") : (d.style.color = "", d.style.filter = "", d.style.transform = "");
    });
  }, [l, s, e]);
}, Ue = (t, e = 28) => {
  const [o, l] = H({ width: void 0, height: void 0, maxWidth: void 0 }), s = O((c) => {
    if (c.length === 0) return;
    const u = c[0], { width: d, height: i } = u.contentRect, f = Math.round(d), m = Math.round(i), n = f <= m + e + 12 ? f - e - 12 : m;
    l({ width: f, height: m, maxWidth: n });
  }, [e]), a = y(() => t ? typeof t == "object" && "current" in t ? t.current : t : null, [t]);
  return E(() => {
    if (!a) {
      l({ width: void 0, height: void 0, maxWidth: void 0 });
      return;
    }
    const c = new ResizeObserver(s);
    try {
      c.observe(a);
    } catch (u) {
      console.warn("ResizeObserver failed to observe element:", u);
      return;
    }
    return () => {
      try {
        c.disconnect();
      } catch (u) {
        console.warn("ResizeObserver cleanup failed:", u);
      }
    };
  }, [a, s]), o;
}, Ke = (t) => {
  const { widget: e } = Q(ee), [o, l] = H("100%"), [s, a] = H("100%"), { width: c, height: u } = Ue(t), d = y(() => ({ basePadding: e.data.basePadding || 0, isSquare: e.data.square || false, isCircle: e.data.circle || false }), [e.data.basePadding, e.data.square, e.data.circle]), i = y(() => d.basePadding * 16, [d.basePadding]);
  return E(() => {
    if (!c || !u || c < 0 || u < 0) return;
    if (!d.isSquare && !d.isCircle) {
      l("100%"), a("100%");
      return;
    }
    if (!(c >= i && u >= i)) {
      l("0px"), a("0px");
      return;
    }
    const m = c - i, n = u - i, r = Math.min(m, n);
    l(`${r}px`), a(`${r}px`);
  }, [c, u, i, d.isSquare, d.isCircle]), { width: o, height: s };
};
function ne(t) {
  return t == null || typeof t != "string" || t.trim() === "" ? null : Me(t) ? t : null;
}
function se(t) {
  const e = ne(t);
  return { background: e, WebkitBackgroundClip: "text", backgroundClip: "text", color: e ? "transparent" : t ?? void 0 };
}
function pt({ children: t, data: e, oidValue: o = null, isValidType: l = true, bgActive: s = true, hideHeader: a = false, sx: c = {} }) {
  const [u, d] = H(null), i = K(null), f = K(null), m = Q(ee);
  if (!m) throw new Error("CollectionBase must be used within CollectionProvider");
  const { wrappedContent: n, widget: r } = m, p = r.data.noHeader || a, { backgroundStyles: b, borderStyles: C } = ge(r.style), { width: z, height: P } = Ke(u);
  Le();
  const V = r.data.oidObject, W = V == null ? void 0 : V._id, N = y(() => {
    if (r.data.noFooter) return "";
    const h = o || o === 0 || String(o) === "false" ? `${o}${(V == null ? void 0 : V.unit) ?? ""}` : "";
    return e.footer || e.alias || e.value || h || "";
  }, [e.footer, e.alias, e.value, o, V == null ? void 0 : V.unit, r.data.noFooter]), X = y(() => ae({ overflow: "hidden", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", ...b, background: n ? e.frameBackground : e.frameBackground || "transparent", backgroundColor: n ? ne(e.frameBackground) ? void 0 : e.frameBackground : ne(e.frameBackground) ? "transparent" : e.frameBackground, borderColor: n ? "" : e.frameBackground || (C == null ? void 0 : C["border-color"]) }), [b, C, e.frameBackground, n]), $ = y(() => ae({ overflow: "hidden", width: z, height: P, display: "flex", justifyContent: "center", alignItems: "center", background: s && n ? e.background : s ? e.background || "transparent" : n ? void 0 : "transparent", borderColor: n ? "" : e.background || (C == null ? void 0 : C["border-color"]), borderRadius: r.data.circle || r.data.ellipse ? "50%" : void 0, ...c }), [z, P, s, n, e.background, C, r.data.circle, r.data.ellipse, c]);
  return E(() => {
    p || !i.current || (i.current.innerHTML = e.header);
  }, [e.header, p]), E(() => {
    r.data.noFooter || !f.current || (f.current.innerHTML = String(N));
  }, [N, r.data.noFooter]), Z(le, { className: "BASE-PAPER-0", square: r.data.squaredCorner, variant: r.data.outlinedFrame ? "outlined" : "elevation", sx: X, children: [!!l && Z(de, { children: [v(B, { className: "BASE-HEADER", sx: { width: p ? "0%" : "100%", height: p ? "0%" : "auto", mt: (r.data.basePadding ?? 8) / 2, mb: -(r.data.basePadding ?? 8) / 2 }, children: v(L, { ref: i, noWrap: true, variant: "body2", sx: { fontSize: e.headerSize, ...se(e.textColorCm) } }) }), v(B, { className: "BASE-BOX-1", ref: d, sx: { overflow: "hidden", p: r.data.basePadding, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: v(le, { className: "BASE-PAPER-1", elevation: r.data.outlined ? 0 : Number(r.data.baseElevation) || 0, square: !r.data.basePadding || r.data.squaredCorner, variant: r.data.outlined ? "outlined" : "elevation", sx: $, children: t }) }), v(B, { sx: { width: r.data.noFooter ? "0%" : "100%", height: r.data.noFooter ? "0%" : "auto", mt: -(r.data.basePadding ?? 8) / 2, mb: (r.data.basePadding ?? 8) / 2 }, children: v(L, { ref: f, noWrap: true, variant: "body2", sx: { fontSize: e.footerSize, ...se(e.textColorCm) } }) })] }), !l && v(B, { sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: v(L, { variant: "body2", sx: { p: 1, width: "100%", textAlign: "center" }, children: W ? `${W} has an invalid type!` : "Please select a valid object ID" }) })] });
}
function Ze(t, e) {
  return t[e];
}
function Je(t) {
  return typeof t == "object" && t !== null && "sliderOrientation" in t;
}
const Qe = (t) => typeof t == "number" ? `calc(${t / 100}rem * 0.875)` : void 0;
function et(t) {
  return { markerIconSize: t.markerIconSize, markerTextColor: t.markerTextColor, markerTextSize: t.markerTextSize, markerIconColor: t.markerIconColor };
}
function tt(t) {
  return {};
}
function g(t) {
  for (const e of t) if (e.condition !== false && e.value !== void 0 && e.value !== null && !(typeof e.value == "string" && e.value.trim() === "")) return e.value;
}
function nt(t) {
  const { rxData: e, oidObject: o, oidName: l, theme: s, fontStyles: a, textStyles: c, backgroundStyles: u, formatSize: d, getDataValue: i, widgetResolver: f } = t, m = (n) => n && String(n) !== "" ? String(n) : void 0;
  return { icon: (n, r) => e.noIcon ? "" : g([{ condition: r, value: i("icon", "Active") }, { condition: r, value: i("iconSmall", "Active") }, { value: i("icon", String(n)) }, { value: i("iconSmall", String(n)) }, { value: i("icon", "") }, { value: i("iconSmall", "") }]) ?? "", iconActive: (n, r) => !r || e.noIcon ? "" : g([{ value: i("icon", String(n)) }, { value: i("iconSmall", String(n)) }]) ?? "", iconSizeCm: (n, r) => g([{ condition: i("iconSize", "") === 0, value: "0px" }, { condition: !!i("iconSize", ""), value: `calc(24px * ${i("iconSize", "")} / 100)` }]) ?? "24px", iconSize: (n, r) => g([{ condition: r && i("iconSize", "Active") === 0, value: "0px" }, { condition: r && !!i("iconSize", "Active"), value: `calc(24px * ${i("iconSize", "Active")} / 100)` }, { condition: String(n) !== "" && i("iconSize", String(n)) === 0, value: "0px" }, { condition: String(n) !== "" && !!i("iconSize", String(n)), value: `calc(24px * ${i("iconSize", String(n))} / 100)` }, { condition: typeof f.markerIconSize == "number", value: `calc(24px * ${f.markerIconSize} / 100)` }, { condition: i("iconSize", "") === 0, value: "0px" }, { condition: !!i("iconSize", ""), value: `calc(24px * ${i("iconSize", "")} / 100)` }]) ?? "24px", iconSizeActive: (n, r) => r ? g([{ condition: i("iconSize", String(n)) === 0, value: "0px" }, { condition: !!i("iconSize", String(n)), value: `calc(24px * ${i("iconSize", String(n))} / 100)` }]) ?? "24px" : "24px", iconSizeOnly: (n, r) => g([{ condition: r && (!!i("iconSize", "Active") || i("iconSize", "Active") === 0), value: `${i("iconSize", "Active")}%` }, { condition: !!i("iconSize", String(n)) || i("iconSize", String(n)) === 0, value: `${i("iconSize", String(n))}%` }]) ?? "100%", iconSizeActiveOnly: (n, r) => r ? g([{ value: i("iconSize", String(n)) }]) ?? void 0 : void 0, iconWidth: (n, r) => g([{ condition: r, value: e.iconSizeActive }, { value: i("iconSize", String(n)) }, { value: f.markerIconSize }, { value: e.iconSize }, { value: 100 }]) ?? 100, iconHeight: (n, r) => g([{ condition: r, value: e.iconSizeActive }, { value: i("iconSize", String(n)) }, { value: f.markerIconSize }, { value: e.iconSize }, { value: 100 }]) ?? 100, forceColorMaskCm: (n, r) => g([{ value: i("enableIconColorMask", "") }]) ?? false, forceColorMask: (n, r) => g([{ condition: r, value: i("enableIconColorMask", "Active") }, { value: i("enableIconColorMask", String(n)) }, { condition: !!i("enableIconColorMask", String(n)), value: i("enableIconColorMask", "") }]) ?? false, forceColorMaskActive: (n, r) => r ? g([{ value: i("enableIconColorMask", String(n)) }]) ?? false : false, iconColor: (n, r) => g([{ condition: r, value: i("iconColor", "Active") }, { condition: String(n) !== "", value: i("iconColor", String(n)) }, { value: f.markerIconColor }, { value: i("iconColor", "") }]) ?? R("primary", s), iconColorActive: (n, r) => r ? g([{ value: i("iconColor", String(n)) }]) ?? "" : "", iconHover: (n, r) => g([{ value: e.iconHover ? `${e.iconHover}%` : void 0 }]) ?? "", iconHoverActive: (n, r) => r ? g([{ value: i("iconHover", String(n)) ? `${i("iconHover", String(n))}%` : void 0 }]) ?? void 0 : void 0, iconXOffsetCm: (n, r) => g([{ value: i("iconXOffset", "") }]) ?? "0px", iconYOffsetCm: (n, r) => g([{ value: i("iconYOffset", "") }]) ?? "0px", iconXOffset: (n, r) => g([{ condition: r, value: i("iconXOffset", "Active") }, { value: i("iconXOffset", String(n)) }]) ?? "0px", iconYOffset: (n, r) => g([{ condition: r, value: i("iconYOffset", "Active") }, { value: i("iconYOffset", String(n)) }]) ?? "0px", iconXOffsetActive: (n, r) => r ? g([{ condition: !i("iconXOffset", String(n)), value: "0px" }, { value: i("iconXOffset", String(n)) }]) ?? "0px" : "0px", iconYOffsetActive: (n, r) => r ? g([{ condition: !i("iconYOffset", String(n)), value: "0px" }, { value: i("iconYOffset", String(n)) }]) ?? "0px" : "0px", textColorActive: (n, r) => r ? g([{ value: i("textColor", String(n)), condition: i("textColor", String(n)) !== "" }, { value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0 }, { value: e.textColor && e.textColor !== "" ? e.textColor : void 0 }]) ?? void 0 : void 0, textColorCm: (n, r) => g([{ condition: typeof i("textColor", "") == "string", value: i("textColor", "") }, { condition: typeof (c == null ? void 0 : c.color) == "string", value: c == null ? void 0 : c.color }]) ?? R("text", s), textColor: (n, r) => g([{ condition: r && typeof i("textColor", "Active") == "string", value: i("textColor", "Active") }, { condition: typeof i("textColor", String(n)) == "string", value: i("textColor", String(n)) }, { value: f.markerTextColor && f.markerTextColor !== "" ? f.markerTextColor : void 0 }, { condition: typeof i("textColor", "") == "string", value: i("textColor", "") }, { condition: typeof (c == null ? void 0 : c.color) == "string", value: c == null ? void 0 : c.color }]) ?? R("text", s), fontSize: (n, r) => g([{ condition: r && typeof e.valueSizeActive == "number", value: d(e.valueSizeActive) }, { value: typeof i("valueSize", String(n)) == "number" ? d(i("valueSize", String(n))) : void 0 }, { condition: typeof f.markerTextSize == "number", value: d(f.markerTextSize) }, { value: typeof e.valueSize == "number" ? d(e.valueSize) : void 0 }, { condition: typeof (a == null ? void 0 : a["font-size"]) == "string", value: a == null ? void 0 : a["font-size"] }]) ?? null, headerSize: (n, r) => g([{ condition: r && typeof i("headerSize", "Active") == "number", value: `${d(i("headerSize", "Active"))}` }, { condition: typeof i("headerSize", String(n)) == "number", value: `${d(i("headerSize", String(n)))}` }, { condition: typeof i("headerSize", "") == "number", value: `${d(i("headerSize", ""))}` }, { condition: typeof (a == null ? void 0 : a["font-size"]) == "string", value: a == null ? void 0 : a["font-size"] }]) ?? null, footerSize: (n, r) => g([{ condition: r && typeof i("footerSize", "Active") == "number", value: `${d(i("footerSize", "Active"))}` }, { condition: typeof i("footerSize", String(n)) == "number", value: `${d(i("footerSize", String(n)))}` }, { condition: typeof i("footerSize", "") == "number", value: `${d(i("footerSize", ""))}` }, { condition: typeof (a == null ? void 0 : a["font-size"]) == "string", value: a == null ? void 0 : a["font-size"] }]) ?? null, valueSize: (n, r) => g([{ condition: r && typeof i("valueSize", "Active") == "number", value: `${d(i("valueSize", "Active"))}` }, { condition: typeof i("valueSize", String(n)) == "number", value: `${d(i("valueSize", String(n)))}` }, { condition: typeof f.markerTextSize == "number", value: d(f.markerTextSize) }, { condition: typeof i("valueSize", "") == "number", value: `${d(i("valueSize", ""))}` }, { condition: typeof (a == null ? void 0 : a["font-size"]) == "string", value: a == null ? void 0 : a["font-size"] }]) ?? null, valueSizeActive: (n, r) => r ? g([{ value: typeof i("valueSize", String(n)) == "number" ? d(i("valueSize", String(n))) : null }]) ?? null : null, header: (n, r) => String(g([{ condition: r, value: m(i("header", "Active")) }, { value: m(i("header", String(n))) }, { value: m(i("header", "")) }, { value: m(l) }]) ?? "").replace(/(\r\n|\n|\r)/gm, ""), footer: (n, r) => String(g([{ condition: r, value: m(i("footer", "Active")) }, { value: m(i("footer", String(n))) }, { value: m(i("footer", "")) }]) ?? "").replace(/(\r\n|\n|\r)/gm, ""), alias: (n, r) => String(i("alias", String(n)) || "").replace(/(\r\n|\n|\r)/gm, ""), value: (n, r) => {
    const p = i("value", String(n));
    return p != null ? `${p}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
  }, backgroundColor: (n, r) => g([{ value: e.backgroundColor && e.backgroundColor !== "" ? e.backgroundColor : void 0 }, { value: u == null ? void 0 : u["background-color"] }]) ?? "", backgroundColorActive: (n, r) => r ? i("backgroundColor", String(n)) : void 0, background: (n, r) => g([{ condition: r, value: i("background", "Active") }, { value: i("background", String(n)) }, { value: i("background", "") }]) ?? "", backgroundActive: (n, r) => r ? i("background", String(n)) : void 0, frameBackgroundColor: (n, r) => g([{ value: e.frameBackgroundColor && e.frameBackgroundColor !== "" ? e.frameBackgroundColor : void 0 }, { value: u == null ? void 0 : u["background-color"] }]) ?? "", frameBackgroundColorActive: (n, r) => r ? i("frameBackgroundColor", String(n)) : void 0, frameBackground: (n, r) => g([{ condition: r, value: i("frameBackground", "Active") }, { value: i("frameBackground", String(n)) }, { value: i("frameBackground", "") }]) ?? R("paper", s), frameBackgroundActive: (n, r) => r ? i("frameBackground", String(n)) : void 0, markerIconSize: (n, r) => f.markerIconSize, markerTextColor: (n, r) => f.markerTextColor, markerTextSize: (n, r) => f.markerTextSize, markerIconColor: (n, r) => f.markerIconColor };
}
function ot(t = "", e = false, o) {
  return { icon: o.icon(t, e), iconActive: o.iconActive(t, e), iconSizeCm: o.iconSizeCm(t, e), iconSize: o.iconSize(t, e), iconSizeActive: o.iconSizeActive(t, e), iconSizeOnly: o.iconSizeOnly(t, e), iconWidth: o.iconWidth(t, e), iconHeight: o.iconHeight(t, e), iconSizeActiveOnly: o.iconSizeActiveOnly(t, e), forceColorMaskCm: o.forceColorMaskCm(t, e), forceColorMask: o.forceColorMask(t, e), forceColorMaskActive: o.forceColorMaskActive(t, e), iconColor: o.iconColor(t, e), iconColorActive: o.iconColorActive(t, e), iconHover: o.iconHover(t, e), iconHoverActive: o.iconHoverActive(t, e), iconXOffsetCm: o.iconXOffsetCm(t, e), iconYOffsetCm: o.iconYOffsetCm(t, e), iconXOffset: o.iconXOffset(t, e), iconYOffset: o.iconYOffset(t, e), iconXOffsetActive: o.iconXOffsetActive(t, e), iconYOffsetActive: o.iconYOffsetActive(t, e), textColorActive: o.textColorActive(t, e), textColorCm: o.textColorCm(t, e), textColor: o.textColor(t, e), header: o.header(t, e), headerSize: o.headerSize(t, e), footer: o.footer(t, e), footerSize: o.footerSize(t, e), alias: o.alias(t, e), value: o.value(t, e), valueSize: o.valueSize(t, e), valueSizeActive: o.valueSizeActive(t, e), backgroundColor: o.backgroundColor(t, e), backgroundColorActive: o.backgroundColorActive(t, e), background: o.background(t, e), backgroundActive: o.backgroundActive(t, e), frameBackgroundColor: o.frameBackgroundColor(t, e), frameBackgroundColorActive: o.frameBackgroundColorActive(t, e), frameBackground: o.frameBackground(t, e), frameBackgroundActive: o.frameBackgroundActive(t, e) };
}
function ue(t, e) {
  return String(t) === String(e);
}
function ht(t) {
  const { theme: e, widget: o, widget: { data: l }, getPropertyValue: s } = Q(ee), a = l[`${t}Object`], c = s(t), u = a == null ? void 0 : a.name, { fontStyles: d, textStyles: i, backgroundStyles: f } = ge(o.style), m = O(Qe, []), n = O(($, h = "") => {
    const _ = `${$}${h}`;
    return Ze(l, _);
  }, [l]), r = y(() => Je(l) ? et(l) : tt(), [l]), p = y(() => nt({ rxData: l, oidObject: a, oidName: u, theme: e, fontStyles: d, textStyles: i, backgroundStyles: f, formatSize: m, getDataValue: n, widgetResolver: r }), [l, a, u, e, d, i, f, m, n, r]), b = O(($ = "", h = false) => ot($, h, p), [p]), { states: C, widgetStates: z, minValue: P, maxValue: V } = y(() => {
    const $ = {};
    let h = null, _ = null;
    const M = [], T = a == null ? void 0 : a.type, te = (a == null ? void 0 : a.commonStates) || {}, x = Object.entries(te);
    if (T === "number" || T === "string" || T === "boolean" || T === "mixed") {
      const D = je({ valuesCount: l.values_count, commonStatesCount: x.length, ignoreCommonStates: l.ignoreCommonStates });
      for (let k = 1; k <= D; k++) {
        const A = n("value", String(k)), w = l[`alias${k}`], j = a == null ? void 0 : a.unit;
        if (A === void 0 || !/\S/.test(String(A))) continue;
        const q = x.find(([he]) => he === String(A)), re = q ? T === "number" ? Number(q[0]) : String(q[0]) : T === "number" ? Number(A) : A, ve = ue(c, re), S = b(k, ve);
        M.push({ fieldNumber: k, value: re, label: S.alias || String(S.value), alias: S.alias, fontSize: S.valueSize, textColor: S.textColor, icon: S.icon, iconSize: S.iconSize, iconSizeOnly: S.iconSizeOnly, iconWidth: S.iconWidth, iconHeight: S.iconHeight, iconXOffset: S.iconXOffset, iconYOffset: S.iconYOffset, iconColor: S.iconColor, iconHover: S.iconHover, forceColorMask: S.forceColorMask, valueSize: S.valueSize, background: S.background, frameBackground: S.frameBackground });
        const pe = String(q ? q[0] : A);
        $[pe] = w && String(w).trim() !== "" ? w : `${A}${j}`;
      }
    }
    if (T === "number" && M.length) {
      const D = M.map((k) => typeof k.value == "number" ? k.value : NaN).filter((k) => !isNaN(k));
      D.length > 0 && (h = Math.min(...D), _ = Math.max(...D));
    }
    return { states: M, widgetStates: $, minValue: h, maxValue: _ };
  }, [a == null ? void 0 : a.type, a == null ? void 0 : a.commonStates, a == null ? void 0 : a.unit, l, n, c, b]), { data: W, activeFieldNumber: N, activePosition: X } = y(() => {
    switch (a == null ? void 0 : a.type) {
      case "mixed":
      case "boolean":
      case "number":
      case "string": {
        const h = C.findIndex((_) => ue(_.value, c));
        if (h !== -1) {
          const { fieldNumber: _ } = C[h];
          return { data: b(_, true), activeFieldNumber: _, activePosition: h };
        }
        return { data: b("", true), activeFieldNumber: void 0, activePosition: void 0 };
      }
      default:
        return { data: b("", true), activeFieldNumber: void 0, activePosition: void 0 };
    }
  }, [a, c, C, b]);
  return { widgetStates: z, minValue: P, maxValue: V, data: W, activeFieldNumber: N, activePosition: X, oidValue: c, states: C, resolveStyleData: b };
}
export {
  pt as C,
  J as D,
  Ve as I,
  gt as a,
  Y as b,
  vt as c,
  ct as d,
  I as e,
  We as f,
  se as g,
  Qe as h,
  je as i,
  ne as j,
  Ue as k,
  mt as l,
  st as m,
  ft as n,
  ut as o,
  dt as p,
  ce as q,
  qe as r,
  ue as s,
  at as t,
  ht as u,
  lt as v,
  Ye as w
};
