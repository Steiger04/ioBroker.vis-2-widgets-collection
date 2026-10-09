import { o as D, i as U, j as u, w as A } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { f as j, g as z, u as B, a2 as E, a3 as H, p as I, T as y, h as P, s as v, j as F, i as W, m as L } from "./usePopoverPositioning-BUV6laon.js";
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
  const r = B({ props: o, name: "MuiFormControlLabel" }), { checked: p, className: c, componentsProps: m = {}, control: a, disabled: _, disableTypography: x, inputRef: Q, label: R, labelPlacement: T = "end", name: V, onChange: X, required: k, slots: q = {}, slotProps: S = {}, value: Y, ...$ } = r, f = E(), C = _ ?? a.props.disabled ?? (f == null ? void 0 : f.disabled), d = k ?? a.props.required, g = { disabled: C, required: d };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((i) => {
    typeof a.props[i] > "u" && typeof r[i] < "u" && (g[i] = r[i]);
  });
  const w = H({ props: r, muiFormControl: f, states: ["error"] }), n = { ...r, disabled: C, labelPlacement: T, required: d, error: w.error }, b = J(n), M = { slots: q, slotProps: { ...m, ...S } }, [N, h] = I("typography", { elementType: y, externalForwardedProps: M, ownerState: n });
  let s = R;
  return s != null && s.type !== y && !x && (s = U(N, { component: "span", ...h, className: P(b.label, h == null ? void 0 : h.className), children: s })), u(K, { className: P(b.root, c), ownerState: n, ref: l, ...$, children: [A(a, g), d ? u("div", { children: [s, u(O, { ownerState: n, "aria-hidden": true, className: b.asterisk, children: ["\u2009", "*"] })] }) : s] });
});
export {
  oe as F
};
