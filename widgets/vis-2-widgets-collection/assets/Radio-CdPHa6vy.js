import { i as n, j as E, q as Z, e as A, o as H, w as P } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { d as B, s as l, a1 as w, m as $, f as J, g as K, u as L, a2 as Q, an as W, p as X, h as Y, j as c, i as oo, a as _, N as I } from "./usePopoverPositioning-DyzF99R9.js";
import { S as ao } from "./SwitchBase-BRuNZwQK.js";
const to = B(n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "RadioButtonUnchecked"), eo = B(n("path", { d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" }), "RadioButtonChecked"), so = l("span", { name: "MuiRadioButtonIcon", shouldForwardProp: w })({ position: "relative", display: "flex" }), no = l(to, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }), ro = l(eo, { name: "MuiRadioButtonIcon" })($(({ theme: o }) => ({ left: 0, position: "absolute", transform: "scale(0)", transition: o.transitions.create("transform", { easing: o.transitions.easing.easeIn, duration: o.transitions.duration.shortest }), variants: [{ props: { checked: true }, style: { transform: "scale(1)", transition: o.transitions.create("transform", { easing: o.transitions.easing.easeOut, duration: o.transitions.duration.shortest }) } }] })));
function F(o) {
  const { checked: a = false, classes: t = {}, fontSize: e } = o, s = { ...o, checked: a };
  return E(so, { className: t.root, ownerState: s, children: [n(no, { fontSize: e, className: t.background, ownerState: s }), n(ro, { fontSize: e, className: t.dot, ownerState: s })] });
}
const io = Z(void 0);
function co() {
  return A(io);
}
function lo(o) {
  return K("MuiRadio", o);
}
const z = J("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), po = (o) => {
  const { classes: a, color: t, size: e } = o, s = { root: ["root", `color${c(t)}`, e !== "medium" && `size${c(e)}`] };
  return { ...a, ...oo(s, lo, a) };
}, uo = l(ao, { shouldForwardProp: (o) => w(o) || o === "classes", name: "MuiRadio", slot: "Root", overridesResolver: (o, a) => {
  const { ownerState: t } = o;
  return [a.root, t.size !== "medium" && a[`size${c(t.size)}`], a[`color${c(t.color)}`]];
} })($(({ theme: o }) => ({ color: (o.vars || o).palette.text.secondary, [`&.${z.disabled}`]: { color: (o.vars || o).palette.action.disabled }, variants: [{ props: { color: "default", disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : _(o.palette.action.active, o.palette.action.hoverOpacity) } } }, ...Object.entries(o.palette).filter(I()).map(([a]) => ({ props: { color: a, disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: o.vars ? `rgba(${o.vars.palette[a].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : _(o.palette[a].main, o.palette.action.hoverOpacity) } } })), ...Object.entries(o.palette).filter(I()).map(([a]) => ({ props: { color: a, disabled: false }, style: { [`&.${z.checked}`]: { color: (o.vars || o).palette[a].main } } })), { props: { disableRipple: false }, style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } } }] })));
function fo(o, a) {
  return typeof a == "object" && a !== null ? o === a : String(o) === String(a);
}
const mo = n(F, { checked: true }), Co = n(F, {}), yo = H(function(a, t) {
  const e = L({ props: a, name: "MuiRadio" }), { checked: s, checkedIcon: C = mo, color: M = "primary", icon: R = Co, name: x, onChange: O, size: d = "medium", className: N, disabled: U, disableRipple: j = false, slots: v = {}, slotProps: g = {}, inputProps: G, ...q } = e, y = Q();
  let r = U;
  y && typeof r > "u" && (r = y.disabled), r ??= false;
  const p = { ...e, disabled: r, disableRipple: j, color: M, size: d }, h = po(p), i = co();
  let u = s;
  const D = W(O, i && i.onChange);
  let f = x;
  i && (typeof u > "u" && (u = fo(i.value, e.value)), typeof f > "u" && (f = i.name));
  const m = g.input ?? G, [T, V] = X("root", { ref: t, elementType: uo, className: Y(h.root, N), shouldForwardComponentProp: true, externalForwardedProps: { slots: v, slotProps: g, ...q }, getSlotProps: (S) => ({ ...S, onChange: (b, ...k) => {
    var _a;
    (_a = S.onChange) == null ? void 0 : _a.call(S, b, ...k), D(b, ...k);
  } }), ownerState: p, additionalProps: { type: "radio", icon: P(R, { fontSize: R.props.fontSize ?? d }), checkedIcon: P(C, { fontSize: C.props.fontSize ?? d }), disabled: r, name: f, checked: u, slots: v, slotProps: { input: typeof m == "function" ? m(p) : m } } });
  return n(T, { ...V, classes: h });
});
export {
  yo as R
};
