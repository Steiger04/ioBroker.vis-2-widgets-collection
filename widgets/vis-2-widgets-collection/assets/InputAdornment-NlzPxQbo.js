import { o as _, i as r, j as C, x as I } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { f as P, g as A, u as E, a2 as x, as as L, s as S, h as z, T, j as m, i as $, m as w } from "./usePopoverPositioning-DyzF99R9.js";
function M(t) {
  return A("MuiInputAdornment", t);
}
const f = P("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var h;
const R = (t, n) => {
  const { ownerState: e } = t;
  return [n.root, n[`position${m(e.position)}`], e.disablePointerEvents === true && n.disablePointerEvents, n[e.variant]];
}, U = (t) => {
  const { classes: n, disablePointerEvents: e, hiddenLabel: a, position: s, size: i, variant: l } = t, p = { root: ["root", e && "disablePointerEvents", s && `position${m(s)}`, l, a && "hiddenLabel", i && `size${m(i)}`] };
  return $(p, M, n);
}, F = S("div", { name: "MuiInputAdornment", slot: "Root", overridesResolver: R })(w(({ theme: t }) => ({ display: "flex", maxHeight: "2em", alignItems: "center", whiteSpace: "nowrap", color: (t.vars || t).palette.action.active, variants: [{ props: { variant: "filled" }, style: { [`&.${f.positionStart}&:not(.${f.hiddenLabel})`]: { marginTop: 16 } } }, { props: { position: "start" }, style: { marginRight: 8 } }, { props: { position: "end" }, style: { marginLeft: 8 } }, { props: { disablePointerEvents: true }, style: { pointerEvents: "none" } }] }))), D = _(function(n, e) {
  const a = E({ props: n, name: "MuiInputAdornment" }), { children: s, className: i, component: l = "div", disablePointerEvents: p = false, disableTypography: b = false, position: c, variant: u, ...g } = a, o = x() || {};
  let d = u;
  u && o.variant, o && !d && (d = o.variant);
  const v = { ...a, hiddenLabel: o.hiddenLabel, size: o.size, disablePointerEvents: p, position: c, variant: d }, y = U(v);
  return r(L.Provider, { value: null, children: r(F, { as: l, ownerState: v, className: z(y.root, i), ref: e, ...g, children: typeof s == "string" && !b ? r(T, { color: "textSecondary", children: s }) : C(I, { children: [c === "start" ? h || (h = r("span", { className: "notranslate", "aria-hidden": true, children: "\u200B" })) : null, s] }) }) });
});
export {
  D as I
};
