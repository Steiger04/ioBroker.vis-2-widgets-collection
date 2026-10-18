import { u as E, v as H, q as M, o as P, e as L, i as z, h as N, g as I } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { f as S, g as w, bb as J, u as U, s as A, h as D, j as h, i as F, c as K, m as V, a as g, N as Q } from "./usePopoverPositioning-DyzF99R9.js";
function X(t) {
  return E.toArray(t).filter((o) => H(o));
}
function Y(t) {
  return w("MuiToggleButton", t);
}
const f = S("MuiToggleButton", ["root", "disabled", "selected", "standard", "primary", "secondary", "sizeSmall", "sizeMedium", "sizeLarge", "fullWidth"]), j = M({}), q = M(void 0);
function Z(t, o) {
  return o === void 0 || t === void 0 ? false : Array.isArray(o) ? o.includes(t) : t === o;
}
const tt = (t) => {
  const { classes: o, fullWidth: r, selected: l, disabled: i, size: c, color: v } = t, d = { root: ["root", l && "selected", i && "disabled", r && "fullWidth", `size${h(c)}`, v] };
  return F(d, Y, o);
}, ot = A(K, { name: "MuiToggleButton", slot: "Root", overridesResolver: (t, o) => {
  const { ownerState: r } = t;
  return [o.root, o[`size${h(r.size)}`]];
} })(V(({ theme: t }) => ({ ...t.typography.button, borderRadius: (t.vars || t).shape.borderRadius, padding: 11, border: `1px solid ${(t.vars || t).palette.divider}`, color: (t.vars || t).palette.action.active, [`&.${f.disabled}`]: { color: (t.vars || t).palette.action.disabled, border: `1px solid ${(t.vars || t).palette.action.disabledBackground}` }, "&:hover": { textDecoration: "none", backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : g(t.palette.text.primary, t.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: "transparent" } }, variants: [{ props: { color: "standard" }, style: { [`&.${f.selected}`]: { color: (t.vars || t).palette.text.primary, backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : g(t.palette.text.primary, t.palette.action.selectedOpacity), "&:hover": { backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : g(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : g(t.palette.text.primary, t.palette.action.selectedOpacity) } } } } }, ...Object.entries(t.palette).filter(Q()).map(([o]) => ({ props: { color: o }, style: { [`&.${f.selected}`]: { color: (t.vars || t).palette[o].main, backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : g(t.palette[o].main, t.palette.action.selectedOpacity), "&:hover": { backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : g(t.palette[o].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : g(t.palette[o].main, t.palette.action.selectedOpacity) } } } } })), { props: { fullWidth: true }, style: { width: "100%" } }, { props: { size: "small" }, style: { padding: 7, fontSize: t.typography.pxToRem(13) } }, { props: { size: "large" }, style: { padding: 15, fontSize: t.typography.pxToRem(15) } }] }))), lt = P(function(o, r) {
  const { value: l, ...i } = L(j), c = L(q), v = J({ ...i, selected: Z(o.value, l) }, o), d = U({ props: v, name: "MuiToggleButton" }), { children: R, className: b, color: u = "standard", disabled: m = false, disableFocusRipple: B = false, fullWidth: s = false, onChange: y, onClick: C, selected: p, size: _ = "medium", value: $, ...G } = d, T = { ...d, color: u, disabled: m, disableFocusRipple: B, fullWidth: s, size: _ }, W = tt(T), k = (a) => {
    C && (C(a, $), a.defaultPrevented) || y && y(a, $);
  }, n = c || "";
  return z(ot, { className: D(i.className, W.root, b, n), disabled: m, focusRipple: !B, ref: r, onClick: k, onChange: y, value: $, ownerState: T, "aria-pressed": p, ...G, children: R });
});
function et(t) {
  return w("MuiToggleButtonGroup", t);
}
const e = S("MuiToggleButtonGroup", ["root", "selected", "horizontal", "vertical", "disabled", "grouped", "groupedHorizontal", "groupedVertical", "fullWidth", "firstButton", "lastButton", "middleButton"]), at = (t) => {
  const { classes: o, orientation: r, fullWidth: l, disabled: i } = t, c = { root: ["root", r, l && "fullWidth"], grouped: ["grouped", `grouped${h(r)}`, i && "disabled"], firstButton: ["firstButton"], lastButton: ["lastButton"], middleButton: ["middleButton"] };
  return F(c, et, o);
}, rt = A("div", { name: "MuiToggleButtonGroup", slot: "Root", overridesResolver: (t, o) => {
  const { ownerState: r } = t;
  return [{ [`& .${e.grouped}`]: o.grouped }, { [`& .${e.grouped}`]: o[`grouped${h(r.orientation)}`] }, { [`& .${e.firstButton}`]: o.firstButton }, { [`& .${e.lastButton}`]: o.lastButton }, { [`& .${e.middleButton}`]: o.middleButton }, o.root, r.orientation === "vertical" && o.vertical, r.fullWidth && o.fullWidth];
} })(V(({ theme: t }) => ({ display: "inline-flex", borderRadius: (t.vars || t).shape.borderRadius, variants: [{ props: { orientation: "vertical" }, style: { flexDirection: "column", [`& .${e.grouped}`]: { [`&.${e.selected} + .${e.grouped}.${e.selected}`]: { borderTop: 0, marginTop: 0 } }, [`& .${e.firstButton},& .${e.middleButton}`]: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }, [`& .${e.lastButton},& .${e.middleButton}`]: { marginTop: -1, borderTop: "1px solid transparent", borderTopLeftRadius: 0, borderTopRightRadius: 0 }, [`& .${e.lastButton}.${f.disabled},& .${e.middleButton}.${f.disabled}`]: { borderTop: "1px solid transparent" } } }, { props: { fullWidth: true }, style: { width: "100%" } }, { props: { orientation: "horizontal" }, style: { [`& .${e.grouped}`]: { [`&.${e.selected} + .${e.grouped}.${e.selected}`]: { borderLeft: 0, marginLeft: 0 } }, [`& .${e.firstButton},& .${e.middleButton}`]: { borderTopRightRadius: 0, borderBottomRightRadius: 0 }, [`& .${e.lastButton},& .${e.middleButton}`]: { marginLeft: -1, borderLeft: "1px solid transparent", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }, [`& .${e.lastButton}.${f.disabled},& .${e.middleButton}.${f.disabled}`]: { borderLeft: "1px solid transparent" } } }] }))), it = P(function(o, r) {
  const l = U({ props: o, name: "MuiToggleButtonGroup" }), { children: i, className: c, color: v = "standard", disabled: d = false, exclusive: R = false, fullWidth: b = false, onChange: u, orientation: m = "horizontal", size: B = "medium", value: s, ...y } = l, C = { ...l, disabled: d, fullWidth: b, orientation: m, size: B }, p = at(C), _ = N((n, a) => {
    if (!u) return;
    const x = s && s.indexOf(a);
    let O;
    s && x >= 0 ? (O = s.slice(), O.splice(x, 1)) : O = s ? s.concat(a) : [a], u(n, O);
  }, [u, s]), $ = N((n, a) => {
    u && u(n, s === a ? null : a);
  }, [u, s]), G = I(() => ({ className: p.grouped, onChange: R ? $ : _, value: s, size: B, fullWidth: b, color: v, disabled: d }), [p.grouped, R, $, _, s, B, b, v, d]), T = X(i), W = T.length, k = (n) => {
    const a = n === 0, x = n === W - 1;
    return a && x ? "" : a ? p.firstButton : x ? p.lastButton : p.middleButton;
  };
  return z(rt, { role: "group", className: D(p.root, c), ref: r, ownerState: C, ...y, children: z(j.Provider, { value: G, children: T.map((n, a) => z(q.Provider, { value: k(a), children: n }, a)) }) });
});
export {
  it as T,
  lt as a
};
