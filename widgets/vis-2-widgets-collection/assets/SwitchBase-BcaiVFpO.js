import { p as G, i as H, h as J } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { i as K, j as Q, X as V, a7 as W, v as C, s as F, p as Y, n as Z, c as ee, a6 as oe } from "./usePopoverPositioning-C1_MhytU.js";
function te(t) {
  return K("PrivateSwitchBase", t);
}
Q("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const se = (t) => {
  const { classes: s, checked: l, disabled: c, edge: n } = t, d = { root: ["root", l && "checked", c && "disabled", n && `edge${Y(n)}`], input: ["input"] };
  return Z(d, te, s);
}, ae = F(ee, { name: "MuiSwitchBase" })({ padding: 9, borderRadius: "50%", variants: [{ props: { edge: "start", size: "small" }, style: { marginLeft: -3 } }, { props: ({ edge: t, ownerState: s }) => t === "start" && s.size !== "small", style: { marginLeft: -12 } }, { props: { edge: "end", size: "small" }, style: { marginRight: -3 } }, { props: ({ edge: t, ownerState: s }) => t === "end" && s.size !== "small", style: { marginRight: -12 } }] }), ne = F("input", { name: "MuiSwitchBase", shouldForwardProp: oe })({ cursor: "inherit", position: "absolute", opacity: 0, width: "100%", height: "100%", top: 0, left: 0, margin: 0, padding: 0, zIndex: 1 }), le = G(function(s, l) {
  const { autoFocus: c, checked: n, checkedIcon: d, defaultChecked: u, disabled: b, disableFocusRipple: h = false, edge: k = false, icon: y, id: R, inputProps: _, inputRef: x, name: I, onBlur: m, onChange: f, onFocus: g, readOnly: z, required: v = false, tabIndex: U, type: r, value: S, slots: L = {}, slotProps: E = {}, ...M } = s, [B, N] = V({ controlled: n, default: !!u, name: "SwitchBase", state: "checked" }), a = W(), T = (e) => {
    g && g(e), a && a.onFocus && a.onFocus(e);
  }, j = (e) => {
    m && m(e), a && a.onBlur && a.onBlur(e);
  }, q = (e) => {
    if (e.nativeEvent.defaultPrevented) return;
    const o = e.target.checked;
    N(o), f && f(e, o);
  };
  let i = b;
  a && typeof i > "u" && (i = a.disabled);
  const O = r === "checkbox" || r === "radio", p = { ...s, checked: B, disabled: i, disableFocusRipple: h, edge: k }, P = se(p), w = { slots: L, slotProps: { input: _, ...E } }, [X, $] = C("root", { ref: l, elementType: ae, className: P.root, shouldForwardComponentProp: true, externalForwardedProps: { ...w, component: "span", ...M }, getSlotProps: (e) => ({ ...e, onFocus: (o) => {
    var _a;
    (_a = e.onFocus) == null ? void 0 : _a.call(e, o), T(o);
  }, onBlur: (o) => {
    var _a;
    (_a = e.onBlur) == null ? void 0 : _a.call(e, o), j(o);
  } }), ownerState: p, additionalProps: { centerRipple: true, focusRipple: !h, disabled: i, role: void 0, tabIndex: null } }), [A, D] = C("input", { ref: x, elementType: ne, className: P.input, externalForwardedProps: w, getSlotProps: (e) => ({ onChange: (o) => {
    var _a;
    (_a = e.onChange) == null ? void 0 : _a.call(e, o), q(o);
  } }), ownerState: p, additionalProps: { autoFocus: c, checked: n, defaultChecked: u, disabled: i, id: O ? R : void 0, name: I, readOnly: z, required: v, tabIndex: U, type: r, ...r === "checkbox" && S === void 0 ? {} : { value: S } } });
  return H(X, { ...$, children: [J(A, { ...D }), B ? d : y] });
});
export {
  le as S
};
