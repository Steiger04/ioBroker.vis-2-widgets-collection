import { o as w, e as T, g as V, m as F, i as b } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { f as M, g as _, u as P, ak as y, aa as U, a9 as G, s as N, h as C, i as D, c as H, a1 as z, m as E, a as l, bb as I } from "./usePopoverPositioning-BUV6laon.js";
import { l as $ } from "./listItemTextClasses-BjRYSi1Q.js";
function X(e) {
  return _("MuiListItemIcon", e);
}
const x = M("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
function j(e) {
  return _("MuiMenuItem", e);
}
const n = M("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), W = (e, a) => {
  const { ownerState: t } = e;
  return [a.root, t.dense && a.dense, t.divider && a.divider, !t.disableGutters && a.gutters];
}, q = (e) => {
  const { disabled: a, dense: t, divider: s, disableGutters: r, selected: c, classes: o } = e, i = D({ root: ["root", t && "dense", a && "disabled", !r && "gutters", s && "divider", c && "selected"] }, j, o);
  return { ...o, ...i };
}, A = N(H, { shouldForwardProp: (e) => z(e) || e === "classes", name: "MuiMenuItem", slot: "Root", overridesResolver: W })(E(({ theme: e }) => ({ ...e.typography.body1, display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: "border-box", whiteSpace: "nowrap", "&:hover": { textDecoration: "none", backgroundColor: (e.vars || e).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${n.selected}`]: { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : l(e.palette.primary.main, e.palette.action.selectedOpacity), [`&.${n.focusVisible}`]: { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : l(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity) } }, [`&.${n.selected}:hover`]: { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : l(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : l(e.palette.primary.main, e.palette.action.selectedOpacity) } }, [`&.${n.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus }, [`&.${n.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity }, [`& + .${I.root}`]: { marginTop: e.spacing(1), marginBottom: e.spacing(1) }, [`& + .${I.inset}`]: { marginLeft: 52 }, [`& .${$.root}`]: { marginTop: 0, marginBottom: 0 }, [`& .${$.inset}`]: { paddingLeft: 36 }, [`& .${x.root}`]: { minWidth: 36 }, variants: [{ props: ({ ownerState: a }) => !a.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: a }) => a.divider, style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}`, backgroundClip: "padding-box" } }, { props: ({ ownerState: a }) => !a.dense, style: { [e.breakpoints.up("sm")]: { minHeight: "auto" } } }, { props: ({ ownerState: a }) => a.dense, style: { minHeight: 32, paddingTop: 4, paddingBottom: 4, ...e.typography.body2, [`& .${x.root} svg`]: { fontSize: "1.25rem" } } }] }))), Y = w(function(a, t) {
  const s = P({ props: a, name: "MuiMenuItem" }), { autoFocus: r = false, component: c = "li", dense: o = false, divider: u = false, disableGutters: i = false, focusVisibleClassName: O, role: k = "menuitem", tabIndex: g, className: B, ...L } = s, f = T(y), m = V(() => ({ dense: o || f.dense || false, disableGutters: i }), [f.dense, o, i]), d = F(null);
  U(() => {
    r && d.current && d.current.focus();
  }, [r]);
  const R = { ...s, dense: m.dense, divider: u, disableGutters: i }, p = q(s), S = G(d, t);
  let v;
  return s.disabled || (v = g !== void 0 ? g : -1), b(y.Provider, { value: m, children: b(A, { ref: S, role: k, tabIndex: v, component: c, focusVisibleClassName: C(p.focusVisible, O), className: C(p.root, B), ...L, ownerState: R, classes: p }) });
});
export {
  Y as M,
  X as g
};
