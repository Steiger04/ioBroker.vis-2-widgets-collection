import { o as H, j as J, i as K } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as Q, f as V, O as W, a2 as X, p as C, s as F, j as Y, i as Z, c as ee, a1 as oe } from "./usePopoverPositioning-DyzF99R9.js";
function te(t) {
  return Q("PrivateSwitchBase", t);
}
V("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const se = (t) => {
  const { classes: s, checked: l, disabled: c, edge: n } = t, d = { root: ["root", l && "checked", c && "disabled", n && `edge${Y(n)}`], input: ["input"] };
  return Z(d, te, s);
}, ae = F(ee, { name: "MuiSwitchBase" })({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: t, ownerState: s }) => t === "start" && s.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: t, ownerState: s }) => t === "end" && s.size !== "small", style: { marginRight: -12 } }] }), ne = F("input", { name: "MuiSwitchBase", shouldForwardProp: oe })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), le = H(function(s, l) {
  const { autoFocus: c, checked: n, checkedIcon: d, defaultChecked: u, disabled: b, disableFocusRipple: h = false, edge: k = false, icon: y, id: R, inputProps: _, inputRef: x, name: I, onBlur: f, onChange: m, onFocus: g, readOnly: z, required: U = false, tabIndex: v, type: r, value: S, slots: L = {}, slotProps: j = {}, ...E } = s, [B, M] = W({ controlled: n, default: !!u, name: "SwitchBase", state: "checked" }), a = X(), N = (e) => {
    g && g(e), a && a.onFocus && a.onFocus(e);
  }, O = (e) => {
    f && f(e), a && a.onBlur && a.onBlur(e);
  }, T = (e) => {
    if (e.nativeEvent.defaultPrevented) return;
    const o = e.target.checked;
    M(o), m && m(e, o);
  };
  let i = b;
  a && typeof i > "u" && (i = a.disabled);
  const q = r === "checkbox" || r === "radio", p = { ...s, checked: B, disabled: i, disableFocusRipple: h, edge: k }, P = se(p), w = { slots: L, slotProps: { input: _, ...j } }, [$, A] = C("root", { ref: l, elementType: ae, className: P.root, shouldForwardComponentProp: true, externalForwardedProps: { ...w, component: "span", ...E }, getSlotProps: (e) => ({ ...e, onFocus: (o) => {
    var _a;
    (_a = e.onFocus) == null ? void 0 : _a.call(e, o), N(o);
  }, onBlur: (o) => {
    var _a;
    (_a = e.onBlur) == null ? void 0 : _a.call(e, o), O(o);
  } }), ownerState: p, additionalProps: { centerRipple: true, focusRipple: !h, disabled: i, role: void 0, tabIndex: null } }), [D, G] = C("input", { ref: x, elementType: ne, className: P.input, externalForwardedProps: w, getSlotProps: (e) => ({ onChange: (o) => {
    var _a;
    (_a = e.onChange) == null ? void 0 : _a.call(e, o), T(o);
  } }), ownerState: p, additionalProps: { autoFocus: c, checked: n, defaultChecked: u, disabled: i, id: q ? R : void 0, name: I, readOnly: z, required: U, tabIndex: v, type: r, ...r === "checkbox" && S === void 0 ? {} : { value: S } } });
  return J($, { ...A, children: [K(D, { ...G }), B ? d : y] });
});
export {
  le as S
};
