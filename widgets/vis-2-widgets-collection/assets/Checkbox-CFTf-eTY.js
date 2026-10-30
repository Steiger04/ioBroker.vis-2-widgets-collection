import { h as a, p as M, x as y } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { f as h, j as O, i as R, k as w, v as F, az as H, m as V, s as U, p as n, n as j, a6 as L, o as N, a as S, W as I } from "./usePopoverPositioning-C1_MhytU.js";
import { S as T } from "./SwitchBase-BcaiVFpO.js";
const D = h(a("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }), "CheckBoxOutlineBlank"), W = h(a("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }), "CheckBox"), q = h(a("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }), "IndeterminateCheckBox");
function A(e) {
  return R("MuiCheckbox", e);
}
const m = O("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), E = (e) => {
  const { classes: o, indeterminate: t, color: s, size: c } = e, i = { root: ["root", t && "indeterminate", `color${n(s)}`, `size${n(c)}`] }, l = j(i, A, o);
  return { ...o, ...l };
}, G = U(T, { shouldForwardProp: (e) => L(e) || e === "classes", name: "MuiCheckbox", slot: "Root", overridesResolver: (e, o) => {
  const { ownerState: t } = e;
  return [o.root, t.indeterminate && o.indeterminate, o[`size${n(t.size)}`], t.color !== "default" && o[`color${n(t.color)}`]];
} })(N(({ theme: e }) => ({ color: (e.vars || e).palette.text.secondary, variants: [{ props: { color: "default", disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : S(e.palette.action.active, e.palette.action.hoverOpacity) } } }, ...Object.entries(e.palette).filter(I()).map(([o]) => ({ props: { color: o, disableRipple: false }, style: { "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : S(e.palette[o].main, e.palette.action.hoverOpacity) } } })), ...Object.entries(e.palette).filter(I()).map(([o]) => ({ props: { color: o }, style: { [`&.${m.checked}, &.${m.indeterminate}`]: { color: (e.vars || e).palette[o].main }, [`&.${m.disabled}`]: { color: (e.vars || e).palette.action.disabled } } })), { props: { disableRipple: false }, style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } } }] }))), J = a(W, {}), K = a(D, {}), Q = a(q, {}), ee = M(function(o, t) {
  const s = w({ props: o, name: "MuiCheckbox" }), { checkedIcon: c = J, color: i = "primary", icon: l = K, indeterminate: r = false, indeterminateIcon: v = Q, inputProps: P, size: p = "medium", disableRipple: C = false, className: $, slots: f = {}, slotProps: k = {}, ...g } = s, b = r ? v : l, x = r ? v : c, d = { ...s, disableRipple: C, color: i, indeterminate: r, size: p }, z = E(d), u = k.input ?? P, [B, _] = F("root", { ref: t, elementType: G, className: V(z.root, $), shouldForwardComponentProp: true, externalForwardedProps: { slots: f, slotProps: k, ...g }, ownerState: d, additionalProps: { type: "checkbox", icon: y(b, { fontSize: b.props.fontSize ?? p }), checkedIcon: y(x, { fontSize: x.props.fontSize ?? p }), disableRipple: C, slots: f, slotProps: { input: H(typeof u == "function" ? u(d) : u, { "data-indeterminate": r }) } } });
  return a(B, { ..._, classes: z });
});
export {
  ee as C
};
