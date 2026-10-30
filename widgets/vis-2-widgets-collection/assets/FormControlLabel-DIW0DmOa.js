import { p as D, h as U, i as u, x as A } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { j, i as z, k as B, a7 as E, a8 as H, v as I, T as y, m as P, s as v, p as F, n as W, o as L } from "./usePopoverPositioning-C1_MhytU.js";
function G(e) {
  return z("MuiFormControlLabel", e);
}
const t = j("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), J = (e) => {
  const { classes: o, disabled: l, labelPlacement: r, error: p, required: c } = e, m = { root: ["root", l && "disabled", `labelPlacement${F(r)}`, p && "error", c && "required"], label: ["label", l && "disabled"], asterisk: ["asterisk", p && "error"] };
  return W(m, G, o);
}, K = v("label", { name: "MuiFormControlLabel", slot: "Root", overridesResolver: (e, o) => {
  const { ownerState: l } = e;
  return [{ [`& .${t.label}`]: o.label }, o.root, o[`labelPlacement${F(l.labelPlacement)}`]];
} })(L(({ theme: e }) => ({ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", WebkitTapHighlightColor: "transparent", marginLeft: -11, marginRight: 16, [`&.${t.disabled}`]: { cursor: "default" }, [`& .${t.label}`]: { [`&.${t.disabled}`]: { color: (e.vars || e).palette.text.disabled } }, variants: [{ props: { labelPlacement: "start" }, style: { flexDirection: "row-reverse", marginRight: -11 } }, { props: { labelPlacement: "top" }, style: { flexDirection: "column-reverse" } }, { props: { labelPlacement: "bottom" }, style: { flexDirection: "column" } }, { props: ({ labelPlacement: o }) => o === "start" || o === "top" || o === "bottom", style: { marginLeft: 16 } }] }))), O = v("span", { name: "MuiFormControlLabel", slot: "Asterisk", overridesResolver: (e, o) => o.asterisk })(L(({ theme: e }) => ({ [`&.${t.error}`]: { color: (e.vars || e).palette.error.main } }))), oe = D(function(o, l) {
  const r = B({ props: o, name: "MuiFormControlLabel" }), { checked: p, className: c, componentsProps: m = {}, control: a, disabled: _, disableTypography: x, inputRef: Q, label: k, labelPlacement: R = "end", name: V, onChange: X, required: T, slots: q = {}, slotProps: S = {}, value: Y, ...$ } = r, f = E(), C = _ ?? a.props.disabled ?? (f == null ? void 0 : f.disabled), d = T ?? a.props.required, g = { disabled: C, required: d };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((i) => {
    typeof a.props[i] > "u" && typeof r[i] < "u" && (g[i] = r[i]);
  });
  const M = H({ props: r, muiFormControl: f, states: ["error"] }), n = { ...r, disabled: C, labelPlacement: R, required: d, error: M.error }, b = J(n), N = { slots: q, slotProps: { ...m, ...S } }, [w, h] = I("typography", { elementType: y, externalForwardedProps: N, ownerState: n });
  let s = k;
  return s != null && s.type !== y && !x && (s = U(w, { component: "span", ...h, className: P(b.label, h == null ? void 0 : h.className), children: s })), u(K, { className: P(b.root, c), ownerState: n, ref: l, ...$, children: [A(a, g), d ? u("div", { children: [s, u(O, { ownerState: n, "aria-hidden": true, className: b.asterisk, children: ["\u2009", "*"] })] }) : s] });
});
export {
  oe as F
};
