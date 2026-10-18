import { o as F, e as U, g as Q, m as X, i as f, u as st, j as E } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as W, f as H, u as V, ak as I, aa as ot, a9 as Z, s as B, h, i as D, c as at, a1 as nt, m as tt, a as w, z as rt, al as J, p as z, T as M, am as K } from "./usePopoverPositioning-DyzF99R9.js";
import { g as it, l as O } from "./listItemTextClasses-0JtKP2Ki.js";
function lt(t) {
  return W("MuiListItem", t);
}
H("MuiListItem", ["root", "container", "dense", "alignItemsFlexStart", "divider", "gutters", "padding", "secondaryAction"]);
function dt(t) {
  return W("MuiListItemButton", t);
}
const P = H("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), ct = (t, e) => {
  const { ownerState: s } = t;
  return [e.root, s.dense && e.dense, s.alignItems === "flex-start" && e.alignItemsFlexStart, s.divider && e.divider, !s.disableGutters && e.gutters];
}, pt = (t) => {
  const { alignItems: e, classes: s, dense: o, disabled: a, disableGutters: r, divider: n, selected: i } = t, m = D({ root: ["root", o && "dense", !r && "gutters", n && "divider", a && "disabled", e === "flex-start" && "alignItemsFlexStart", i && "selected"] }, dt, s);
  return { ...s, ...m };
}, mt = B(at, { shouldForwardProp: (t) => nt(t) || t === "classes", name: "MuiListItemButton", slot: "Root", overridesResolver: ct })(tt(({ theme: t }) => ({ display: "flex", flexGrow: 1, justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", minWidth: 0, boxSizing: "border-box", textAlign: "left", paddingTop: 8, paddingBottom: 8, transition: t.transitions.create("background-color", { duration: t.transitions.duration.shortest }), "&:hover": { textDecoration: "none", backgroundColor: (t.vars || t).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } }, [`&.${P.selected}`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : w(t.palette.primary.main, t.palette.action.selectedOpacity), [`&.${P.focusVisible}`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : w(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity) } }, [`&.${P.selected}:hover`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : w(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity), "@media (hover: none)": { backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : w(t.palette.primary.main, t.palette.action.selectedOpacity) } }, [`&.${P.focusVisible}`]: { backgroundColor: (t.vars || t).palette.action.focus }, [`&.${P.disabled}`]: { opacity: (t.vars || t).palette.action.disabledOpacity }, variants: [{ props: ({ ownerState: e }) => e.divider, style: { borderBottom: `1px solid ${(t.vars || t).palette.divider}`, backgroundClip: "padding-box" } }, { props: { alignItems: "flex-start" }, style: { alignItems: "flex-start" } }, { props: ({ ownerState: e }) => !e.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: e }) => e.dense, style: { paddingTop: 4, paddingBottom: 4 } }] }))), ht = F(function(e, s) {
  const o = V({ props: e, name: "MuiListItemButton" }), { alignItems: a = "center", autoFocus: r = false, component: n = "div", children: i, dense: d = false, disableGutters: m = false, divider: x = false, focusVisibleClassName: $, selected: R = false, className: C, ...c } = o, v = U(I), p = Q(() => ({ dense: d || v.dense || false, alignItems: a, disableGutters: m }), [a, v.dense, d, m]), l = X(null);
  ot(() => {
    r && l.current && l.current.focus();
  }, [r]);
  const u = { ...o, alignItems: a, dense: p.dense, disableGutters: m, divider: x, selected: R }, y = pt(u), b = Z(l, s);
  return f(I.Provider, { value: p, children: f(mt, { ref: b, href: c.href || c.to, component: (c.href || c.to) && n === "div" ? "button" : n, focusVisibleClassName: h(y.focusVisible, $), ownerState: u, className: h(y.root, C), ...c, classes: y, children: i }) });
});
function ut(t) {
  return W("MuiListItemSecondaryAction", t);
}
H("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const yt = (t) => {
  const { disableGutters: e, classes: s } = t;
  return D({ root: ["root", e && "disableGutters"] }, ut, s);
}, gt = B("div", { name: "MuiListItemSecondaryAction", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: s } = t;
  return [e.root, s.disableGutters && e.disableGutters];
} })({ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", variants: [{ props: ({ ownerState: t }) => t.disableGutters, style: { right: 0 } }] }), et = F(function(e, s) {
  const o = V({ props: e, name: "MuiListItemSecondaryAction" }), { className: a, ...r } = o, n = U(I), i = { ...o, disableGutters: n.disableGutters }, d = yt(i);
  return f(gt, { className: h(d.root, a), ownerState: i, ref: s, ...r });
});
et.muiName = "ListItemSecondaryAction";
const ft = (t, e) => {
  const { ownerState: s } = t;
  return [e.root, s.dense && e.dense, s.alignItems === "flex-start" && e.alignItemsFlexStart, s.divider && e.divider, !s.disableGutters && e.gutters, !s.disablePadding && e.padding, s.hasSecondaryAction && e.secondaryAction];
}, vt = (t) => {
  const { alignItems: e, classes: s, dense: o, disableGutters: a, disablePadding: r, divider: n, hasSecondaryAction: i } = t;
  return D({ root: ["root", o && "dense", !a && "gutters", !r && "padding", n && "divider", e === "flex-start" && "alignItemsFlexStart", i && "secondaryAction"], container: ["container"] }, lt, s);
}, bt = B("div", { name: "MuiListItem", slot: "Root", overridesResolver: ft })(tt(({ theme: t }) => ({ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative", textDecoration: "none", width: "100%", boxSizing: "border-box", textAlign: "left", variants: [{ props: ({ ownerState: e }) => !e.disablePadding, style: { paddingTop: 8, paddingBottom: 8 } }, { props: ({ ownerState: e }) => !e.disablePadding && e.dense, style: { paddingTop: 4, paddingBottom: 4 } }, { props: ({ ownerState: e }) => !e.disablePadding && !e.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: e }) => !e.disablePadding && !!e.secondaryAction, style: { paddingRight: 48 } }, { props: ({ ownerState: e }) => !!e.secondaryAction, style: { [`& > .${P.root}`]: { paddingRight: 48 } } }, { props: { alignItems: "flex-start" }, style: { alignItems: "flex-start" } }, { props: ({ ownerState: e }) => e.divider, style: { borderBottom: `1px solid ${(t.vars || t).palette.divider}`, backgroundClip: "padding-box" } }, { props: ({ ownerState: e }) => e.button, style: { transition: t.transitions.create("background-color", { duration: t.transitions.duration.shortest }), "&:hover": { textDecoration: "none", backgroundColor: (t.vars || t).palette.action.hover, "@media (hover: none)": { backgroundColor: "transparent" } } } }, { props: ({ ownerState: e }) => e.hasSecondaryAction, style: { paddingRight: 48 } }] }))), It = B("li", { name: "MuiListItem", slot: "Container", overridesResolver: (t, e) => e.container })({ position: "relative" }), $t = F(function(e, s) {
  const o = V({ props: e, name: "MuiListItem" }), { alignItems: a = "center", children: r, className: n, component: i, components: d = {}, componentsProps: m = {}, ContainerComponent: x = "li", ContainerProps: { className: $, ...R } = {}, dense: C = false, disableGutters: c = false, disablePadding: v = false, divider: p = false, secondaryAction: l, slotProps: u = {}, slots: y = {}, ...b } = o, k = U(I), A = Q(() => ({ dense: C || k.dense || false, alignItems: a, disableGutters: c }), [a, k.dense, C, c]), j = X(null), g = st.toArray(r), G = g.length && rt(g[g.length - 1], ["ListItemSecondaryAction"]), S = { ...o, alignItems: a, dense: A.dense, disableGutters: c, disablePadding: v, divider: p, hasSecondaryAction: G }, Y = vt(S), q = Z(j, s), N = y.root || d.Root || bt, T = u.root || m.root || {}, _ = { className: h(Y.root, T.className, n), ...b };
  let L = i || "li";
  return G ? (L = !_.component && !i ? "div" : L, x === "li" && (L === "li" ? L = "div" : _.component === "li" && (_.component = "div")), f(I.Provider, { value: A, children: E(It, { as: x, className: h(Y.container, $), ref: q, ownerState: S, ...R, children: [f(N, { ...T, ...!J(N) && { as: L, ownerState: { ...S, ...T.ownerState } }, ..._, children: g }), g.pop()] }) })) : f(I.Provider, { value: A, children: E(N, { ...T, as: L, ref: q, ...!J(N) && { ownerState: { ...S, ...T.ownerState } }, ..._, children: [g, l && f(et, { children: l })] }) });
}), xt = (t) => {
  const { classes: e, inset: s, primary: o, secondary: a, dense: r } = t;
  return D({ root: ["root", s && "inset", r && "dense", o && a && "multiline"], primary: ["primary"], secondary: ["secondary"] }, it, e);
}, Ct = B("div", { name: "MuiListItemText", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: s } = t;
  return [{ [`& .${O.primary}`]: e.primary }, { [`& .${O.secondary}`]: e.secondary }, e.root, s.inset && e.inset, s.primary && s.secondary && e.multiline, s.dense && e.dense];
} })({ flex: "1 1 auto", minWidth: 0, marginTop: 4, marginBottom: 4, [`.${K.root}:where(& .${O.primary})`]: { display: "block" }, [`.${K.root}:where(& .${O.secondary})`]: { display: "block" }, variants: [{ props: ({ ownerState: t }) => t.primary && t.secondary, style: { marginTop: 6, marginBottom: 6 } }, { props: ({ ownerState: t }) => t.inset, style: { paddingLeft: 56 } }] }), Rt = F(function(e, s) {
  const o = V({ props: e, name: "MuiListItemText" }), { children: a, className: r, disableTypography: n = false, inset: i = false, primary: d, primaryTypographyProps: m, secondary: x, secondaryTypographyProps: $, slots: R = {}, slotProps: C = {}, ...c } = o, { dense: v } = U(I);
  let p = d ?? a, l = x;
  const u = { ...o, disableTypography: n, inset: i, primary: !!p, secondary: !!l, dense: v }, y = xt(u), b = { slots: R, slotProps: { primary: m, secondary: $, ...C } }, [k, A] = z("root", { className: h(y.root, r), elementType: Ct, externalForwardedProps: { ...b, ...c }, ownerState: u, ref: s }), [j, g] = z("primary", { className: y.primary, elementType: M, externalForwardedProps: b, ownerState: u }), [G, S] = z("secondary", { className: y.secondary, elementType: M, externalForwardedProps: b, ownerState: u });
  return p != null && p.type !== M && !n && (p = f(j, { variant: v ? "body2" : "body1", component: (g == null ? void 0 : g.variant) ? void 0 : "span", ...g, children: p })), l != null && l.type !== M && !n && (l = f(G, { variant: "body2", color: "textSecondary", ...S, children: l })), E(k, { ...A, children: [p, l] });
});
export {
  $t as L,
  ht as a,
  Rt as b
};
