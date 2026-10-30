import { h as n, i as E, r as W, j as Z, p as A, x as P } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { f as B, s as l, a6 as $, o as w, j as H, i as J, k as K, a7 as L, at as Q, v as X, m as Y, p as c, n as oo, a as _, W as I } from "./usePopoverPositioning-C1_MhytU.js";
import { S as ao } from "./SwitchBase-BcaiVFpO.js";
const to = B(n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "RadioButtonUnchecked"), eo = B(n("path", { d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" }), "RadioButtonChecked"), so = l("span", { name: "MuiRadioButtonIcon", shouldForwardProp: $ })({ position: "relative", display: "flex" }), no = l(to, { name: "MuiRadioButtonIcon" })({ transform: "scale(1)" }), ro = l(eo, { name: "MuiRadioButtonIcon" })(w(({ theme: o }) => ({ left: 0, position: "absolute", transform: "scale(0)", transition: o.transitions.create("transform", { easing: o.transitions.easing.easeIn, duration: o.transitions.duration.shortest }), variants: [{ props: { checked: true }, style: { transform: "scale(1)", transition: o.transitions.create("transform", { easing: o.transitions.easing.easeOut, duration: o.transitions.duration.shortest }) } }] })));
function F(o) {
  const { checked: a = false, classes: t = {}, fontSize: e } = o, s = { ...o, checked: a };
  return E(so, { className: t.root, ownerState: s, children: [n(no, { fontSize: e, className: t.background, ownerState: s }), n(ro, { fontSize: e, className: t.dot, ownerState: s })] });
}
const io = W(void 0);
function co() {
  return Z(io);
}
function lo(o) {
  return J("MuiRadio", o);
}
const z = H("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), po = (o) => {
  const { classes: a, color: t, size: e } = o, s = { root: ["root", `color${c(t)}`, e !== "medium" && `size${c(e)}`] };
  return { ...a, ...oo(s, lo, a) };
}, uo = l(ao, { shouldForwardProp: (o) => $(o) || o === "classes", name: "MuiRadio", slot: "Root", overridesResolver: (o, a) => {
  const { ownerState: t } = o;
  return [a.root, t.size !== "medium" && a[`size${c(t.size)}`], a[`color${c(t.color)}`]];
} })(w(({ theme: o }) => ({ color: (o.vars || o).palette.text.secondary, [`&.${z.disabled}`]: { color: (o.vars || o).palette.action.disabled }, variants: [{ props: { color: "default", disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : _(o.palette.action.active, o.palette.action.hoverOpacity) } } }, ...Object.entries(o.palette).filter(I()).map(([a]) => ({ props: { color: a, disabled: false, disableRipple: false }, style: { "&:hover": { backgroundColor: o.vars ? `rgba(${o.vars.palette[a].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : _(o.palette[a].main, o.palette.action.hoverOpacity) } } })), ...Object.entries(o.palette).filter(I()).map(([a]) => ({ props: { color: a, disabled: false }, style: { [`&.${z.checked}`]: { color: (o.vars || o).palette[a].main } } })), { props: { disableRipple: false }, style: { "&:hover": { "@media (hover: none)": { backgroundColor: "transparent" } } } }] })));
function fo(o, a) {
  return typeof a == "object" && a !== null ? o === a : String(o) === String(a);
}
const mo = n(F, { checked: true }), Co = n(F, {}), go = A(function(a, t) {
  const e = K({ props: a, name: "MuiRadio" }), { checked: s, checkedIcon: C = mo, color: M = "primary", icon: R = Co, name: x, onChange: O, size: d = "medium", className: U, disabled: j, disableRipple: N = false, slots: v = {}, slotProps: y = {}, inputProps: G, ...D } = e, g = L();
  let r = j;
  g && typeof r > "u" && (r = g.disabled), r ??= false;
  const p = { ...e, disabled: r, disableRipple: N, color: M, size: d }, h = po(p), i = co();
  let u = s;
  const T = Q(O, i && i.onChange);
  let f = x;
  i && (typeof u > "u" && (u = fo(i.value, e.value)), typeof f > "u" && (f = i.name));
  const m = y.input ?? G, [V, q] = X("root", { ref: t, elementType: uo, className: Y(h.root, U), shouldForwardComponentProp: true, externalForwardedProps: { slots: v, slotProps: y, ...D }, getSlotProps: (S) => ({ ...S, onChange: (b, ...k) => {
    var _a;
    (_a = S.onChange) == null ? void 0 : _a.call(S, b, ...k), T(b, ...k);
  } }), ownerState: p, additionalProps: { type: "radio", icon: P(R, { fontSize: R.props.fontSize ?? d }), checkedIcon: P(C, { fontSize: C.props.fontSize ?? d }), disabled: r, name: f, checked: u, slots: v, slotProps: { input: typeof m == "function" ? m(p) : m } } });
  return n(V, { ...q, classes: h });
});
export {
  go as R
};
