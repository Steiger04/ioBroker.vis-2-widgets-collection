import { i as a, o as w, w as z } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { d as h, f as M, g as O, u as R, p as F, at as H, h as V, s as U, j as n, i as j, a1 as N, m as L, a as S, N as I } from "./usePopoverPositioning-DyzF99R9.js";
import { S as T } from "./SwitchBase-BRuNZwQK.js";
const D = h(a("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), "CheckBoxOutlineBlank"), q = h(a("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }), "CheckBox"), A = h(a("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }), "IndeterminateCheckBox");
function E(e) {
  return O("MuiCheckbox", e);
}
const m = M("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), G = (e) => {
  const { classes: o, indeterminate: t, color: s, size: c } = e, i = { root: ["root", t && "indeterminate", `color${n(s)}`, `size${n(c)}`] }, l = j(i, E, o);
  return { ...o, ...l };
}, J = U(T, { shouldForwardProp: (e) => N(e) || e === "classes", name: "MuiCheckbox", slot: "Root", overridesResolver: (e, o) => {
  const { ownerState: t } = e;
  return [o.root, t.indeterminate && o.indeterminate, o[`size${n(t.size)}`], t.color !== "default" && o[`color${n(t.color)}`]];
} })(L(({ theme: e }) => ({ color: (e.vars || e).palette.text.secondary, variants: [{ props: { color: "default", disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : S(e.palette.action.active, e.palette.action.hoverOpacity) } } }, ...Object.entries(e.palette).filter(I()).map(([o]) => ({ props: { color: o, disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : S(e.palette[o].main, e.palette.action.hoverOpacity) } } })), ...Object.entries(e.palette).filter(I()).map(([o]) => ({ props: { color: o }, style: { [`&.${m.checked}, &.${m.indeterminate}`]: { color: (e.vars || e).palette[o].main }, [`&.${m.disabled}`]: { color: (e.vars || e).palette.action.disabled } } })), { props: { disableRipple: false }, style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } } }] }))), K = a(q, {}), Q = a(D, {}), W = a(A, {}), ee = w(function(o, t) {
  const s = R({ props: o, name: "MuiCheckbox" }), { checkedIcon: c = K, color: i = "primary", icon: l = Q, indeterminate: r = false, indeterminateIcon: v = W, inputProps: P, size: p = "medium", disableRipple: C = false, className: g, slots: f = {}, slotProps: k = {}, ...$ } = s, b = r ? v : l, x = r ? v : c, d = { ...s, disableRipple: C, color: i, indeterminate: r, size: p }, y = G(d), u = k.input ?? P, [B, _] = F("root", { ref: t, elementType: J, className: V(y.root, g), shouldForwardComponentProp: true, externalForwardedProps: { slots: f, slotProps: k, ...$ }, ownerState: d, additionalProps: { type: "checkbox", icon: z(b, { fontSize: b.props.fontSize ?? p }), checkedIcon: z(x, { fontSize: x.props.fontSize ?? p }), disableRipple: C, slots: f, slotProps: { input: H(typeof u == "function" ? u(d) : u, { "data-indeterminate": r }) } } });
  return a(B, { ..._, classes: y });
});
export {
  ee as C
};
