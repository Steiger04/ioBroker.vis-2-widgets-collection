import { o as Pe, i as u, q as Dr, g as H, e as Xt, j as b, p as Tr, f as U, m as he, h as D, k as Le, l as be, r as Mo, s as $o, t as Io } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as Ue, f as Je, u as Ye, s as ue, h as Fe, i as Ke, P as qe, d as Ne, m as Xe, j as Ve, l as Ao, k as Fo, a as Qt, n as jo, I as oe, o as tr, p as Oe, q as zo, S as Re, c as Do, B as F, b as X, G as h, T as S, F as Ie, r as Ae, t as To, v as Pr, w as Po } from "./usePopoverPositioning-BUV6laon.js";
import { D as Zt, g as it, p as No, I as Eo, b as Qe, e as xe, C as ko, u as Oo, h as Ht, a as Ho, c as Bo, w as Lo } from "./useData-Ogol4QJ_.js";
import { C as Vo, c as Wo } from "./CollectionBaseImage-B5OtYHDO.js";
import { T as Nr, d as Go, S as Er, R as qo, V as Uo, i as Jo, A as kr, U as Or, D as Hr, I as nr, a as Yo, b as Ko, c as Xo, u as Qo, e as Zo, f as ei, L as bt, g as ti } from "./useJsonTableAnalysis-BZautfAd.js";
import { I as Br } from "./InputAdornment-kfGfKL2i.js";
import { K as ni, a as ri, T as ve, C as We, D as oi, b as Pn, c as rr, A as Bt, d as Lt, E as Vt, e as Wt, f as Jt } from "./ExpandMore-Bp7-JYF5.js";
import { D as ii, C as mt, a as li } from "./ColorPickerField-CBif2Eff.js";
import { C as jt } from "./Checkbox-BcRF0ZdL.js";
import { D as Nn, a as En, b as kn } from "./DialogTitle-BUK_6ZWZ.js";
import { B as Te } from "./Button-DuX2ENZG.js";
import { S as si } from "./Slider-_3za_GDl.js";
import { F as Ge } from "./FormControlLabel-ClVFGdS0.js";
import { S as lt } from "./Switch-Bp8aa1mB.js";
import { M as O } from "./MenuItem-DtuolClH.js";
import { S as ie } from "./Stack-Bljw1gGe.js";
import { A as fn } from "./Avatar-BWxxOuyD.js";
import { T as Lr, a as en } from "./ToggleButtonGroup-BtkvMlIS.js";
import { C as tn } from "./Close-DDCxpCT2.js";
import { u as ai } from "./useOidValue-DDObnf5V.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./useThemeProps-Cpv6Wes_.js";
import "./SwitchBase-Dl5aEIsw.js";
import "./listItemTextClasses-BjRYSi1Q.js";
function ui(e) {
  return Ue("MuiCard", e);
}
Je("MuiCard", ["root"]);
const ci = (e) => {
  const { classes: t } = e;
  return Ke({ root: ["root"] }, ui, t);
}, di = ue(qe, { name: "MuiCard", slot: "Root", overridesResolver: (e, t) => t.root })({ overflow: "hidden" }), fi = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiCard" }), { className: o, raised: i = false, ...l } = r, s = { ...r, raised: i }, a = ci(s);
  return u(di, { className: Fe(a.root, o), elevation: i ? 8 : void 0, ref: n, ownerState: s, ...l });
}), gi = Ne(u("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), "FirstPage"), pi = Ne(u("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), "LastPage"), Vr = Dr();
function hi(e) {
  return Ue("MuiTable", e);
}
Je("MuiTable", ["root", "stickyHeader"]);
const mi = (e) => {
  const { classes: t, stickyHeader: n } = e;
  return Ke({ root: ["root", n && "stickyHeader"] }, hi, t);
}, yi = ue("table", { name: "MuiTable", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.stickyHeader && t.stickyHeader];
} })(Xe(({ theme: e }) => ({ display: "table", width: "100%", borderCollapse: "collapse", borderSpacing: 0, "& caption": { ...e.typography.body2, padding: e.spacing(2), color: (e.vars || e).palette.text.secondary, textAlign: "left", captionSide: "bottom" }, variants: [{ props: ({ ownerState: t }) => t.stickyHeader, style: { borderCollapse: "separate" } }] }))), or = "table", _i = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTable" }), { className: o, component: i = or, padding: l = "normal", size: s = "medium", stickyHeader: a = false, ...c } = r, d = { ...r, component: i, padding: l, size: s, stickyHeader: a }, p = mi(d), g = H(() => ({ padding: l, size: s, stickyHeader: a }), [l, s, a]);
  return u(Vr.Provider, { value: g, children: u(yi, { as: i, role: i === or ? null : "table", ref: n, className: Fe(p.root, o), ownerState: d, ...c }) });
}), sn = Dr();
function bi(e) {
  return Ue("MuiTableBody", e);
}
Je("MuiTableBody", ["root"]);
const vi = (e) => {
  const { classes: t } = e;
  return Ke({ root: ["root"] }, bi, t);
}, wi = ue("tbody", { name: "MuiTableBody", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "table-row-group" }), Si = { variant: "body" }, ir = "tbody", Ci = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableBody" }), { className: o, component: i = ir, ...l } = r, s = { ...r, component: i }, a = vi(s);
  return u(sn.Provider, { value: Si, children: u(wi, { className: Fe(a.root, o), as: i, ref: n, role: i === ir ? null : "rowgroup", ownerState: s, ...l }) });
});
function xi(e) {
  return Ue("MuiTableCell", e);
}
const Ri = Je("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), Mi = (e) => {
  const { classes: t, variant: n, align: r, padding: o, size: i, stickyHeader: l } = e, s = { root: ["root", n, l && "stickyHeader", r !== "inherit" && `align${Ve(r)}`, o !== "normal" && `padding${Ve(o)}`, `size${Ve(i)}`] };
  return Ke(s, xi, t);
}, $i = ue("td", { name: "MuiTableCell", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, t[n.variant], t[`size${Ve(n.size)}`], n.padding !== "normal" && t[`padding${Ve(n.padding)}`], n.align !== "inherit" && t[`align${Ve(n.align)}`], n.stickyHeader && t.stickyHeader];
} })(Xe(({ theme: e }) => ({ ...e.typography.body2, display: "table-cell", verticalAlign: "inherit", borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Ao(Qt(e.palette.divider, 1), 0.88) : Fo(Qt(e.palette.divider, 1), 0.68)}`, textAlign: "left", padding: 16, variants: [{ props: { variant: "head" }, style: { color: (e.vars || e).palette.text.primary, lineHeight: e.typography.pxToRem(24), fontWeight: e.typography.fontWeightMedium } }, { props: { variant: "body" }, style: { color: (e.vars || e).palette.text.primary } }, { props: { variant: "footer" }, style: { color: (e.vars || e).palette.text.secondary, lineHeight: e.typography.pxToRem(21), fontSize: e.typography.pxToRem(12) } }, { props: { size: "small" }, style: { padding: "6px 16px", [`&.${Ri.paddingCheckbox}`]: { width: 24, padding: "0 12px 0 16px", "& > *": { padding: 0 } } } }, { props: { padding: "checkbox" }, style: { width: 48, padding: "0 0 0 4px" } }, { props: { padding: "none" }, style: { padding: 0 } }, { props: { align: "left" }, style: { textAlign: "left" } }, { props: { align: "center" }, style: { textAlign: "center" } }, { props: { align: "right" }, style: { textAlign: "right", flexDirection: "row-reverse" } }, { props: { align: "justify" }, style: { textAlign: "justify" } }, { props: ({ ownerState: t }) => t.stickyHeader, style: { position: "sticky", top: 0, zIndex: 2, backgroundColor: (e.vars || e).palette.background.default } }] }))), et = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableCell" }), { align: o = "inherit", className: i, component: l, padding: s, scope: a, size: c, sortDirection: d, variant: p, ...g } = r, f = Xt(Vr), m = Xt(sn), y = m && m.variant === "head";
  let _;
  l ? _ = l : _ = y ? "th" : "td";
  let v = a;
  _ === "td" ? v = void 0 : !v && y && (v = "col");
  const C = p || m && m.variant, I = { ...r, align: o, component: _, padding: s || (f && f.padding ? f.padding : "normal"), size: c || (f && f.size ? f.size : "medium"), sortDirection: d, stickyHeader: C === "head" && f && f.stickyHeader, variant: C }, T = Mi(I);
  let P = null;
  return d && (P = d === "asc" ? "ascending" : "descending"), u($i, { as: _, ref: n, className: Fe(T.root, i), "aria-sort": P, scope: v, ownerState: I, ...g });
});
function Ii(e) {
  return Ue("MuiTableContainer", e);
}
Je("MuiTableContainer", ["root"]);
const Ai = (e) => {
  const { classes: t } = e;
  return Ke({ root: ["root"] }, Ii, t);
}, Fi = ue("div", { name: "MuiTableContainer", slot: "Root", overridesResolver: (e, t) => t.root })({ width: "100%", overflowX: "auto" }), ji = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableContainer" }), { className: o, component: i = "div", ...l } = r, s = { ...r, component: i }, a = Ai(s);
  return u(Fi, { ref: n, as: i, className: Fe(a.root, o), ownerState: s, ...l });
});
function zi(e) {
  return Ue("MuiTableHead", e);
}
Je("MuiTableHead", ["root"]);
const Di = (e) => {
  const { classes: t } = e;
  return Ke({ root: ["root"] }, zi, t);
}, Ti = ue("thead", { name: "MuiTableHead", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "table-header-group" }), Pi = { variant: "head" }, lr = "thead", Ni = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableHead" }), { className: o, component: i = lr, ...l } = r, s = { ...r, component: i }, a = Di(s);
  return u(sn.Provider, { value: Pi, children: u(Ti, { as: i, className: Fe(a.root, o), ref: n, role: i === lr ? null : "rowgroup", ownerState: s, ...l }) });
}), Ei = Pe(function(t, n) {
  const { backIconButtonProps: r, count: o, disabled: i = false, getItemAriaLabel: l, nextIconButtonProps: s, onPageChange: a, page: c, rowsPerPage: d, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: m = {}, ...y } = t, _ = jo(), v = (E) => {
    a(E, 0);
  }, C = (E) => {
    a(E, c - 1);
  }, I = (E) => {
    a(E, c + 1);
  }, T = (E) => {
    a(E, Math.max(0, Math.ceil(o / d) - 1));
  }, P = f.firstButton ?? oe, M = f.lastButton ?? oe, x = f.nextButton ?? oe, $ = f.previousButton ?? oe, B = f.firstButtonIcon ?? gi, q = f.lastButtonIcon ?? pi, J = f.nextButtonIcon ?? ni, ce = f.previousButtonIcon ?? ri, de = _ ? M : P, fe = _ ? x : $, ge = _ ? $ : x, me = _ ? P : M, re = _ ? m.lastButton : m.firstButton, w = _ ? m.nextButton : m.previousButton, N = _ ? m.previousButton : m.nextButton, k = _ ? m.firstButton : m.lastButton;
  return b("div", { ref: n, ...y, children: [p && u(de, { onClick: v, disabled: i || c === 0, "aria-label": l("first", c), title: l("first", c), ...re, children: _ ? u(q, { ...m.lastButtonIcon }) : u(B, { ...m.firstButtonIcon }) }), u(fe, { onClick: C, disabled: i || c === 0, color: "inherit", "aria-label": l("previous", c), title: l("previous", c), ...w ?? r, children: _ ? u(J, { ...m.nextButtonIcon }) : u(ce, { ...m.previousButtonIcon }) }), u(ge, { onClick: I, disabled: i || (o !== -1 ? c >= Math.ceil(o / d) - 1 : false), color: "inherit", "aria-label": l("next", c), title: l("next", c), ...N ?? s, children: _ ? u(ce, { ...m.previousButtonIcon }) : u(J, { ...m.nextButtonIcon }) }), g && u(me, { onClick: T, disabled: i || c >= Math.ceil(o / d) - 1, "aria-label": l("last", c), title: l("last", c), ...k, children: _ ? u(B, { ...m.firstButtonIcon }) : u(q, { ...m.lastButtonIcon }) })] });
});
function ki(e) {
  return Ue("MuiTablePagination", e);
}
const It = Je("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var sr;
const Oi = ue(et, { name: "MuiTablePagination", slot: "Root", overridesResolver: (e, t) => t.root })(Xe(({ theme: e }) => ({ overflow: "auto", color: (e.vars || e).palette.text.primary, fontSize: e.typography.pxToRem(14), "&:last-child": { padding: 0 } }))), Hi = ue(Nr, { name: "MuiTablePagination", slot: "Toolbar", overridesResolver: (e, t) => ({ [`& .${It.actions}`]: t.actions, ...t.toolbar }) })(Xe(({ theme: e }) => ({ minHeight: 52, paddingRight: 2, [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: { minHeight: 52 }, [e.breakpoints.up("sm")]: { minHeight: 52, paddingRight: 2 }, [`& .${It.actions}`]: { flexShrink: 0, marginLeft: 20 } }))), Bi = ue("div", { name: "MuiTablePagination", slot: "Spacer", overridesResolver: (e, t) => t.spacer })({ flex: "1 1 100%" }), Li = ue("p", { name: "MuiTablePagination", slot: "SelectLabel", overridesResolver: (e, t) => t.selectLabel })(Xe(({ theme: e }) => ({ ...e.typography.body2, flexShrink: 0 }))), Vi = ue(Re, { name: "MuiTablePagination", slot: "Select", overridesResolver: (e, t) => ({ [`& .${It.selectIcon}`]: t.selectIcon, [`& .${It.select}`]: t.select, ...t.input, ...t.selectRoot }) })({ color: "inherit", fontSize: "inherit", flexShrink: 0, marginRight: 32, marginLeft: 8, [`& .${It.select}`]: { paddingLeft: 8, paddingRight: 24, textAlign: "right", textAlignLast: "right" } }), Wi = ue(O, { name: "MuiTablePagination", slot: "MenuItem", overridesResolver: (e, t) => t.menuItem })({}), Gi = ue("p", { name: "MuiTablePagination", slot: "DisplayedRows", overridesResolver: (e, t) => t.displayedRows })(Xe(({ theme: e }) => ({ ...e.typography.body2, flexShrink: 0 })));
function qi({ from: e, to: t, count: n }) {
  return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function Ui(e) {
  return `Go to ${e} page`;
}
const Ji = (e) => {
  const { classes: t } = e;
  return Ke({ root: ["root"], toolbar: ["toolbar"], spacer: ["spacer"], selectLabel: ["selectLabel"], select: ["select"], input: ["input"], selectIcon: ["selectIcon"], menuItem: ["menuItem"], displayedRows: ["displayedRows"], actions: ["actions"] }, ki, t);
}, Yi = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTablePagination" }), { ActionsComponent: o = Ei, backIconButtonProps: i, colSpan: l, component: s = et, count: a, disabled: c = false, getItemAriaLabel: d = Ui, labelDisplayedRows: p = qi, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: m, onRowsPerPageChange: y, page: _, rowsPerPage: v, rowsPerPageOptions: C = [10, 25, 50, 100], SelectProps: I = {}, showFirstButton: T = false, showLastButton: P = false, slotProps: M = {}, slots: x = {}, ...$ } = r, B = r, q = Ji(B), J = (M == null ? void 0 : M.select) ?? I, ce = J.native ? "option" : Wi;
  let de;
  (s === et || s === "td") && (de = l || 1e3);
  const fe = tr(J.id), ge = tr(J.labelId), me = () => a === -1 ? (_ + 1) * v : v === -1 ? a : Math.min(a, (_ + 1) * v), re = { slots: x, slotProps: M }, [w, N] = Oe("root", { ref: n, className: q.root, elementType: Oi, externalForwardedProps: { ...re, component: s, ...$ }, ownerState: B, additionalProps: { colSpan: de } }), [k, E] = Oe("toolbar", { className: q.toolbar, elementType: Hi, externalForwardedProps: re, ownerState: B }), [le, K] = Oe("spacer", { className: q.spacer, elementType: Bi, externalForwardedProps: re, ownerState: B }), [rt, $e] = Oe("selectLabel", { className: q.selectLabel, elementType: Li, externalForwardedProps: re, ownerState: B, additionalProps: { id: ge } }), [ze, at] = Oe("select", { className: q.select, elementType: Vi, externalForwardedProps: re, ownerState: B }), [Ee, Q] = Oe("menuItem", { className: q.menuItem, elementType: ce, externalForwardedProps: re, ownerState: B }), [Pt, Nt] = Oe("displayedRows", { className: q.displayedRows, elementType: Gi, externalForwardedProps: re, ownerState: B });
  return u(w, { ...N, children: b(k, { ...E, children: [u(le, { ...K }), C.length > 1 && u(rt, { ...$e, children: g }), C.length > 1 && u(ze, { variant: "standard", ...!J.variant && { input: sr || (sr = u(zo, {})) }, value: v, onChange: y, id: fe, labelId: ge, ...J, classes: { ...J.classes, root: Fe(q.input, q.selectRoot, (J.classes || {}).root), select: Fe(q.select, (J.classes || {}).select), icon: Fe(q.selectIcon, (J.classes || {}).icon) }, disabled: c, ...at, children: C.map((Ce) => Tr(Ee, { ...Q, key: Ce.label ? Ce.label : Ce, value: Ce.value ? Ce.value : Ce }, Ce.label ? Ce.label : Ce)) }), u(Pt, { ...Nt, children: p({ from: a === 0 ? 0 : _ * v + 1, to: me(), count: a === -1 ? -1 : a, page: _ }) }), u(o, { className: q.actions, backIconButtonProps: i, count: a, nextIconButtonProps: f, onPageChange: m, page: _, rowsPerPage: v, showFirstButton: T, showLastButton: P, slotProps: M.actions, slots: x.actions, getItemAriaLabel: d, disabled: c })] }) });
});
function Ki(e) {
  return Ue("MuiTableRow", e);
}
const ar = Je("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), Xi = (e) => {
  const { classes: t, selected: n, hover: r, head: o, footer: i } = e;
  return Ke({ root: ["root", n && "selected", r && "hover", o && "head", i && "footer"] }, Ki, t);
}, Qi = ue("tr", { name: "MuiTableRow", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.head && t.head, n.footer && t.footer];
} })(Xe(({ theme: e }) => ({ color: "inherit", display: "table-row", verticalAlign: "middle", outline: 0, [`&.${ar.hover}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover }, [`&.${ar.selected}`]: { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qt(e.palette.primary.main, e.palette.action.selectedOpacity), "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity) } } }))), ur = "tr", vt = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableRow" }), { className: o, component: i = ur, hover: l = false, selected: s = false, ...a } = r, c = Xt(sn), d = { ...r, component: i, hover: l, selected: s, head: c && c.variant === "head", footer: c && c.variant === "footer" }, p = Xi(d);
  return u(Qi, { as: i, ref: n, className: Fe(p.root, o), role: i === ur ? null : "row", ownerState: d, ...a });
}), Zi = Ne(u("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }), "ArrowDownward");
function el(e) {
  return Ue("MuiTableSortLabel", e);
}
const gn = Je("MuiTableSortLabel", ["root", "active", "icon", "iconDirectionDesc", "iconDirectionAsc", "directionDesc", "directionAsc"]), tl = (e) => {
  const { classes: t, direction: n, active: r } = e, o = { root: ["root", r && "active", `direction${Ve(n)}`], icon: ["icon", `iconDirection${Ve(n)}`] };
  return Ke(o, el, t);
}, nl = ue(Do, { name: "MuiTableSortLabel", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.active && t.active];
} })(Xe(({ theme: e }) => ({ cursor: "pointer", display: "inline-flex", justifyContent: "flex-start", flexDirection: "inherit", alignItems: "center", "&:focus": { color: (e.vars || e).palette.text.secondary }, "&:hover": { color: (e.vars || e).palette.text.secondary, [`& .${gn.icon}`]: { opacity: 0.5 } }, [`&.${gn.active}`]: { color: (e.vars || e).palette.text.primary, [`& .${gn.icon}`]: { opacity: 1, color: (e.vars || e).palette.text.secondary } } }))), rl = ue("span", { name: "MuiTableSortLabel", slot: "Icon", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.icon, t[`iconDirection${Ve(n.direction)}`]];
} })(Xe(({ theme: e }) => ({ fontSize: 18, marginRight: 4, marginLeft: 4, opacity: 0, transition: e.transitions.create(["opacity", "transform"], { duration: e.transitions.duration.shorter }), userSelect: "none", variants: [{ props: { direction: "desc" }, style: { transform: "rotate(0deg)" } }, { props: { direction: "asc" }, style: { transform: "rotate(180deg)" } }] }))), ol = Pe(function(t, n) {
  const r = Ye({ props: t, name: "MuiTableSortLabel" }), { active: o = false, children: i, className: l, direction: s = "asc", hideSortIcon: a = false, IconComponent: c = Zi, slots: d = {}, slotProps: p = {}, ...g } = r, f = { ...r, active: o, direction: s, hideSortIcon: a, IconComponent: c }, m = tl(f), y = { slots: d, slotProps: p }, [_, v] = Oe("root", { elementType: nl, externalForwardedProps: y, ownerState: f, className: Fe(m.root, l), ref: n }), [C, I] = Oe("icon", { elementType: rl, externalForwardedProps: y, ownerState: f, className: m.icon });
  return b(_, { disableRipple: true, component: "span", ...v, ...g, children: [i, a && !o ? null : u(C, { as: c, ...I })] });
}), il = Ne(u("path", { d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z" }), "AutoFixHigh"), Wr = Ne(u("path", { d: "M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4z" }), "BrokenImage"), ll = Ne(u("path", { d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" }), "FilterList"), cr = Ne(u("path", { d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" }), "FormatBold"), sl = Ne(u("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" }), "MoreVert"), $t = Ne(u("path", { d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91" }), "RestartAlt"), Gr = Ne(u("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" }), "VisibilityOff"), At = { string: "#2196f3", number: "#4caf50", boolean: "#ff9800", date: "#9c27b0", image: "#3f51b5", null: "#9e9e9e", object: "#795548", array: "#00bcd4", mixed: "#f44336" }, Cn = { size: 64, objectFit: "contain" };
function qr(e) {
  if (!e) return [];
  try {
    const t = JSON.parse(Go(e));
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}
function al({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: i, loading: l }) {
  const [s, a] = U(""), [c, d] = U(null), [p, g] = U(null), [f, m] = U(false), y = he(0), _ = he(/* @__PURE__ */ new Map()), v = !s, C = H(() => {
    if (!s) return e;
    const w = s.toLowerCase();
    return e.filter((N) => N.path.toLowerCase().includes(w) || N.headerName.toLowerCase().includes(w));
  }, [e, s]), I = H(() => e.filter((w) => w.visible).length, [e]), T = D((w) => {
    o(e.map((N) => N.path === w ? { ...N, visible: !N.visible } : N));
  }, [e, o]), P = D((w, N) => {
    w.stopPropagation(), T(N);
  }, [T]), M = D((w) => (N) => {
    N ? _.current.set(w, N) : _.current.delete(w);
  }, []), x = D((w) => {
    o(e.map((N) => ({ ...N, visible: w })));
  }, [e, o]), $ = D((w, N) => {
    w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", N), d(N);
  }, []), B = D((w, N) => {
    w.preventDefault(), y.current += 1, N !== c && g(N);
  }, [c]), q = D((w) => {
    w.preventDefault(), y.current -= 1, y.current <= 0 && (y.current = 0, g(null));
  }, []), J = D((w) => {
    w.preventDefault(), w.dataTransfer.dropEffect = "move";
  }, []), ce = D((w, N) => {
    w.preventDefault(), y.current = 0, g(null), d(null);
    const k = w.dataTransfer.getData("text/plain");
    if (!k || k === N) return;
    const E = [...e], le = E.findIndex((ze) => ze.path === k), K = E.findIndex((ze) => ze.path === N);
    if (le === -1 || K === -1) return;
    const [rt] = E.splice(le, 1), $e = le < K ? K - 1 : K;
    E.splice($e, 0, rt), o(E);
  }, [e, o]), de = D(() => {
    y.current = 0, d(null), g(null);
  }, []), fe = D(() => {
    o(e.map((w) => ({ path: w.path, visible: true, headerName: w.path.split(".").pop() || w.path }))), m(false);
  }, [e, o]), ge = D(() => {
    m(true);
  }, []), me = D(() => {
    m(false);
  }, []), re = D((w, N, k) => {
    var _a2, _b;
    switch (w.key) {
      case "Enter":
      case " ":
        w.preventDefault(), r(N.path);
        break;
      case "ArrowDown":
        if (w.preventDefault(), k < C.length - 1) {
          const E = C[k + 1].path;
          r(E), (_a2 = _.current.get(E)) == null ? void 0 : _a2.focus();
        }
        break;
      case "ArrowUp":
        if (w.preventDefault(), k > 0) {
          const E = C[k - 1].path;
          r(E), (_b = _.current.get(E)) == null ? void 0 : _b.focus();
        }
        break;
      case "v":
      case "V":
        w.preventDefault(), T(N.path);
        break;
    }
  }, [C, r, T]);
  return b(F, { sx: { display: "flex", flexDirection: "column", height: "100%" }, children: [b(Nr, { variant: "dense", sx: { borderBottom: 1, borderColor: "divider", gap: 0.5, px: 1.5, minHeight: 48 }, children: [u(X, { size: "small", placeholder: h.t("json_table_search_columns"), value: s, onChange: (w) => a(w.target.value), slotProps: { input: { startAdornment: u(Br, { position: "start", children: u(Er, { fontSize: "small" }) }), "aria-label": h.t("json_table_search_columns") } }, sx: { flexGrow: 1, minWidth: 0 } }), u(ve, { title: h.t("json_table_refresh_columns"), children: u("span", { children: u(oe, { size: "small", onClick: i, disabled: l, "aria-label": h.t("json_table_refresh_columns"), children: u(qo, { fontSize: "small" }) }) }) }), u(ve, { title: h.t("json_table_show_all"), children: u(oe, { size: "small", onClick: () => x(true), "aria-label": h.t("json_table_show_all"), children: u(Uo, { fontSize: "small" }) }) }), u(ve, { title: h.t("json_table_hide_all"), children: u(oe, { size: "small", onClick: () => x(false), "aria-label": h.t("json_table_hide_all"), children: u(Gr, { fontSize: "small" }) }) }), u(ve, { title: h.t("json_table_reset_all"), children: u(oe, { size: "small", onClick: ge, "aria-label": h.t("json_table_reset_all"), children: u($t, { fontSize: "small" }) }) })] }), u(F, { sx: { flexGrow: 1, overflow: "auto", p: 1.5, display: "flex", flexDirection: "column", gap: 0.75 }, children: C.length === 0 ? u(F, { sx: { display: "flex", alignItems: "center", justifyContent: "center", py: 4 }, children: u(S, { variant: "body2", color: "text.secondary", children: e.length === 0 ? h.t("json_table_no_columns") : h.t("json_table_no_search_results") }) }) : C.map((w, N) => {
    const k = t.find((K) => K.path === w.path), E = n === w.path, le = (k == null ? void 0 : k.type) || "string";
    return u(fi, { ref: M(w.path), "data-column-path": w.path, onClick: () => r(w.path), onKeyDown: (K) => re(K, w, N), draggable: v, onDragStart: v ? (K) => $(K, w.path) : void 0, onDragEnter: v ? (K) => B(K, w.path) : void 0, onDragLeave: v ? q : void 0, onDragOver: v ? J : void 0, onDrop: v ? (K) => ce(K, w.path) : void 0, onDragEnd: v ? de : void 0, variant: "outlined", tabIndex: 0, role: "button", "aria-selected": E, "aria-label": `${w.headerName || w.path}, ${le}, ${w.visible ? h.t("json_table_visible") : h.t("json_table_hidden")}`, sx: { p: 1, cursor: v ? "grab" : "pointer", flexShrink: 0, border: 2, borderColor: E ? "primary.main" : "divider", backgroundColor: E ? "action.selected" : "background.paper", opacity: c === w.path ? 0.4 : w.visible ? 1 : 0.55, borderTop: p === w.path ? "3px solid" : void 0, borderTopColor: p === w.path ? "primary.main" : void 0, "&:hover": { backgroundColor: E ? "action.selected" : "action.hover" }, "&:focus": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: "2px" }, transition: "all 0.15s ease-in-out" }, children: b(F, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [v && u(ii, { fontSize: "small", sx: { color: "text.disabled", cursor: "grab", flexShrink: 0 }, "aria-hidden": "true" }), u(jt, { checked: w.visible, onClick: (K) => P(K, w.path), size: "small", sx: { p: 0.5 }, inputProps: { "aria-label": `${h.t("json_table_visible")}: ${w.headerName || w.path}` } }), b(F, { sx: { flexGrow: 1, minWidth: 0 }, children: [u(S, { variant: "body2", sx: { fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.8rem" }, title: w.path, children: w.headerName || w.path }), w.headerName && w.headerName !== w.path && u(S, { variant: "caption", color: "text.secondary", sx: { fontFamily: "monospace", fontSize: "0.65rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }, title: w.path, children: w.path })] }), u(We, { label: le, size: "small", sx: { backgroundColor: At[le] || At.string, color: "#fff", fontWeight: 600, fontSize: "0.65rem", height: 20, minWidth: 48, flexShrink: 0 }, "aria-label": `${h.t("json_table_type_label")}: ${le}` })] }) }, w.path);
  }) }), e.length > 0 && u(F, { sx: { borderTop: 1, borderColor: "divider", px: 2, py: 1 }, children: b(S, { variant: "caption", color: "text.secondary", "aria-live": "polite", "aria-atomic": "true", children: [I, " / ", e.length, " ", h.t("json_table_columns_visible")] }) }), b(Nn, { open: f, onClose: me, "aria-labelledby": "reset-dialog-title", "aria-describedby": "reset-dialog-description", children: [u(En, { id: "reset-dialog-title", children: h.t("json_table_reset_all") }), u(kn, { children: u(oi, { id: "reset-dialog-description", children: h.t("json_table_reset_confirm_message") }) }), b(Pn, { children: [u(Te, { onClick: me, color: "primary", children: h.t("cancel") }), u(Te, { onClick: fe, color: "error", variant: "contained", autoFocus: true, children: h.t("json_table_reset_all") })] })] })] });
}
function Yt(e) {
  return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
}
function nn(e) {
  return e >= 1e11 ? e : e * 1e3;
}
const ul = 0, cl = 20, dr = 2;
function dl(e) {
  if (e == null) return dr;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(ul, Math.min(cl, Math.floor(t))) : dr;
}
function Ur(e, t = {}) {
  const { prefix: n = "", suffix: r = "", thousands: o = false } = t, i = dl(t.decimals);
  let l = e.toFixed(i);
  if (o) {
    const [s, a] = l.split("."), c = s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    l = a !== void 0 ? `${c}.${a}` : c;
  }
  return `${n}${l}${r}`;
}
const fl = [{ label: "YYYY-MM-DD", value: "yyyy-MM-dd" }, { label: "DD.MM.YYYY", value: "dd.MM.yyyy" }, { label: "DD.MM.YYYY HH:mm", value: "dd.MM.yyyy HH:mm" }, { label: "DD.MM.YYYY HH:mm:ss", value: "dd.MM.yyyy HH:mm:ss" }, { label: "MM/DD/YYYY", value: "MM/dd/yyyy" }, { label: "MM/DD/YYYY HH:mm", value: "MM/dd/yyyy HH:mm" }, { label: "HH:mm:ss", value: "HH:mm:ss" }, { label: "HH:mm", value: "HH:mm" }, { label: "ISO-8601 (UTC)", value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" }];
function gl(e, t) {
  if (e == null) return "";
  if (typeof e == "number") {
    const o = new Date(nn(e));
    return isNaN(o.getTime()) ? "" : o.toISOString().slice(0, 10);
  }
  if (e instanceof Date) return isNaN(e.getTime()) ? "" : e.toISOString().slice(0, 10);
  if (typeof e != "string") return "";
  const n = e.trim();
  if (!n) return "";
  if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
    const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
    return o ? `${o[3]}-${o[2]}-${o[1]}` : "";
  }
  if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
    const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    return o ? `${o[3]}-${o[1]}-${o[2]}` : "";
  }
  const r = new Date(n);
  return isNaN(r.getTime()) ? "" : r.toISOString().slice(0, 10);
}
function xn(e, t) {
  if (e == null || e === "") return null;
  if (e instanceof Date) {
    const r = e.getTime();
    return isNaN(r) ? null : r;
  }
  if (typeof e == "number") {
    if (!Number.isFinite(e)) return null;
    const r = nn(e);
    return isNaN(new Date(r).getTime()) ? null : r;
  }
  if (typeof e != "string") return null;
  const n = e.trim();
  if (!n) return null;
  try {
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const i = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (i) {
        const l = new Date(parseInt(i[3], 10), parseInt(i[2], 10) - 1, parseInt(i[1], 10), parseInt(i[4] ?? "0", 10), parseInt(i[5] ?? "0", 10), parseInt(i[6] ?? "0", 10));
        return isNaN(l.getTime()) ? null : l.getTime();
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const i = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (i) {
        const l = new Date(parseInt(i[3], 10), parseInt(i[1], 10) - 1, parseInt(i[2], 10), parseInt(i[4] ?? "0", 10), parseInt(i[5] ?? "0", 10), parseInt(i[6] ?? "0", 10));
        return isNaN(l.getTime()) ? null : l.getTime();
      }
    }
    const r = n.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (r) {
      const i = new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10));
      return isNaN(i.getTime()) ? null : i.getTime();
    }
    if (/^-?\d+$/.test(n)) {
      const i = parseInt(n, 10), l = nn(i);
      return isNaN(new Date(l).getTime()) ? null : l;
    }
    const o = new Date(n);
    return isNaN(o.getTime()) ? null : o.getTime();
  } catch {
    return null;
  }
}
function Jr(e, t, n) {
  if (e == null || e === "") return "";
  try {
    let r;
    if (typeof e == "string") {
      const a = e.trim();
      if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
        const c = a.match(/^(\d{2})\.(\d{2})\.(\d{4})(.*)$/);
        r = c ? /* @__PURE__ */ new Date(`${c[3]}-${c[2]}-${c[1]}${c[4] ?? ""}`) : new Date(a);
      } else if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
        const c = a.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
        r = c ? /* @__PURE__ */ new Date(`${c[3]}-${c[1]}-${c[2]}${c[4] ?? ""}`) : new Date(a);
      } else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
        const [c, d, p] = a.split("-").map(Number);
        r = new Date(c, d - 1, p);
      } else r = new Date(a);
    } else if (typeof e == "number") r = new Date(nn(e));
    else if (e instanceof Date) r = e;
    else return Yt(e);
    if (isNaN(r.getTime())) return Yt(e);
    const o = t || "yyyy-MM-dd", i = (a, c = 2) => String(a).padStart(c, "0"), l = { yyyy: String(r.getFullYear()), MM: i(r.getMonth() + 1), dd: i(r.getDate()), HH: i(r.getHours()), mm: i(r.getMinutes()), ss: i(r.getSeconds()), SSS: i(r.getMilliseconds(), 3) };
    if (o === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(o)) return r.toISOString();
    let s = o;
    for (const [a, c] of Object.entries(l).sort((d, p) => p[0].length - d[0].length)) s = s.replaceAll(a, c);
    return s;
  } catch {
    return Yt(e);
  }
}
function Rn(e, t = "true", n = "false") {
  return typeof e == "boolean" ? e ? t : n : Yt(e);
}
function Yr(e, t) {
  let n = t.stringTrim ? e.trim() : e;
  if (t.stringRegex && t.stringRegex.length <= 200) try {
    const l = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), s = n.match(l);
    s && (n = s[t.stringRegexGroup ?? 0] ?? n);
  } catch {
  }
  t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (i) => i.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
  const r = t.stringPrefix ?? "", o = t.stringSuffix ?? "";
  return r || o ? `${r}${n}${o}` : n;
}
function pl({ format: e, onChange: t, discoveredColumn: n }) {
  const r = H(() => {
    if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
      const o = typeof n.max == "number" ? n.max : 0;
      return n.min + (o - n.min) * 0.75;
    }
    return 1234.567;
  }, [n]);
  return b(Le, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_number_format") }), b(F, { children: [b(S, { variant: "caption", color: "text.secondary", gutterBottom: true, children: [h.t("json_table_number_decimals"), ": ", e.numberDecimals ?? 2] }), u(si, { value: e.numberDecimals ?? 2, onChange: (o, i) => t({ type: "number", numberDecimals: i }), min: 0, max: 10, marks: true, step: 1, valueLabelDisplay: "auto", size: "small" })] }), u(X, { label: h.t("json_table_number_prefix"), value: e.numberPrefix || "", onChange: (o) => t({ type: "number", numberPrefix: o.target.value }), size: "small", placeholder: "$, \u20AC, \xA3" }), u(X, { label: h.t("json_table_number_suffix"), value: e.numberSuffix || "", onChange: (o) => t({ type: "number", numberSuffix: o.target.value }), size: "small", placeholder: "%, kg, \xB0C" }), u(Ge, { control: u(lt, { checked: e.numberThousandsSeparator || false, onChange: (o) => t({ type: "number", numberThousandsSeparator: o.target.checked }), size: "small" }), label: u(S, { variant: "body2", children: h.t("json_table_number_thousands") }) }), b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), b(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace" }, children: [r, " \u2192", " ", Ur(r, { decimals: e.numberDecimals, prefix: e.numberPrefix, suffix: e.numberSuffix, thousands: e.numberThousandsSeparator })] })] })] });
}
function hl({ format: e, detectedFormat: t, onChange: n }) {
  return b(Le, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_date_format") }), t && u(X, { label: h.t("json_table_date_input_format"), value: t, disabled: true, size: "small", helperText: h.t("json_table_date_detected_hint") }), b(Ie, { fullWidth: true, size: "small", children: [u(Ae, { children: h.t("json_table_date_output_format") }), u(Re, { label: h.t("json_table_date_output_format"), value: e.dateFormat || "yyyy-MM-dd", onChange: (r) => n({ type: "date", dateFormat: r.target.value, dateInputFormat: t }), children: fl.map((r) => u(O, { value: r.value, children: r.label }, r.value)) })] }), b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), u(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace" }, children: Jr(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd") })] })] });
}
function ml({ format: e, onChange: t }) {
  return b(Le, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_boolean_format") }), u(X, { label: h.t("json_table_boolean_true"), value: e.booleanTrue || "", onChange: (n) => t({ type: "boolean", booleanTrue: n.target.value }), size: "small", placeholder: "Yes, On, \u2713, Active" }), u(X, { label: h.t("json_table_boolean_false"), value: e.booleanFalse || "", onChange: (n) => t({ type: "boolean", booleanFalse: n.target.value }), size: "small", placeholder: "No, Off, \u2717, Inactive" }), b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), b(ie, { direction: "row", spacing: 2, sx: { mt: 0.5 }, children: [b(S, { variant: "body2", sx: { fontFamily: "monospace" }, children: ["true \u2192 ", Rn(true, e.booleanTrue, e.booleanFalse)] }), b(S, { variant: "body2", sx: { fontFamily: "monospace" }, children: ["false \u2192 ", Rn(false, e.booleanTrue, e.booleanFalse)] })] })] })] });
}
function yl({ format: e, onChange: t }) {
  return b(Le, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_string_format") }), b(Ie, { size: "small", fullWidth: true, children: [u(Ae, { children: h.t("json_table_string_case") }), b(Re, { label: h.t("json_table_string_case"), value: e.stringCase ?? "none", onChange: (n) => t({ type: "string", stringCase: n.target.value }), children: [u(O, { value: "none", children: h.t("json_table_string_case_none") }), u(O, { value: "upper", children: h.t("json_table_string_case_upper") }), u(O, { value: "lower", children: h.t("json_table_string_case_lower") }), u(O, { value: "title", children: h.t("json_table_string_case_title") })] })] }), b(ie, { direction: "row", spacing: 1, children: [u(X, { label: h.t("json_table_string_prefix"), value: e.stringPrefix ?? "", onChange: (n) => t({ type: "string", stringPrefix: n.target.value || void 0 }), size: "small", fullWidth: true }), u(X, { label: h.t("json_table_string_suffix"), value: e.stringSuffix ?? "", onChange: (n) => t({ type: "string", stringSuffix: n.target.value || void 0 }), size: "small", fullWidth: true })] }), u(Ge, { control: u(lt, { size: "small", checked: !!e.stringTrim, onChange: (n) => t({ type: "string", stringTrim: n.target.checked }) }), label: h.t("json_table_string_trim") }), u(X, { label: h.t("json_table_string_max_length"), type: "number", value: e.stringMaxLength ?? "", onChange: (n) => t({ type: "string", stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0 }), size: "small", fullWidth: true, slotProps: { htmlInput: { min: 1 } } }), u(X, { label: h.t("json_table_string_regex"), value: e.stringRegex ?? "", onChange: (n) => t({ type: "string", stringRegex: n.target.value || void 0 }), size: "small", fullWidth: true, placeholder: "e.g. (\\d+)" }), e.stringRegex && b(ie, { direction: "row", spacing: 1, children: [u(X, { label: h.t("json_table_string_regex_group"), type: "number", value: e.stringRegexGroup ?? 0, onChange: (n) => t({ type: "string", stringRegexGroup: parseInt(n.target.value, 10) || 0 }), size: "small", fullWidth: true, slotProps: { htmlInput: { min: 0 } } }), u(X, { label: h.t("json_table_string_regex_flags"), value: e.stringRegexFlags ?? "", onChange: (n) => t({ type: "string", stringRegexFlags: n.target.value || void 0 }), size: "small", fullWidth: true, placeholder: "i, g, m \u2026" })] }), u(Zt, {}), b(ie, { direction: "row", spacing: 1, flexWrap: "wrap", children: [u(Ge, { control: u(lt, { size: "small", checked: e.stringFontWeight === "bold", onChange: (n) => t({ type: "string", stringFontWeight: n.target.checked ? "bold" : "normal" }) }), label: u(S, { variant: "body2", fontWeight: "bold", children: h.t("json_table_string_font_weight") }) }), u(Ge, { control: u(lt, { size: "small", checked: e.stringFontStyle === "italic", onChange: (n) => t({ type: "string", stringFontStyle: n.target.checked ? "italic" : "normal" }) }), label: u(S, { variant: "body2", fontStyle: "italic", children: h.t("json_table_string_font_style") }) })] }), b(ie, { direction: "row", spacing: 1, children: [u(X, { label: h.t("json_table_string_font_size"), type: "number", value: e.stringFontSize ?? "", onChange: (n) => t({ type: "string", stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0 }), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 8, max: 72 } }, placeholder: "px" }), u(mt, { label: h.t("json_table_string_text_color"), value: e.stringTextColor ?? "", overridden: !!e.stringTextColor, onChange: (n) => t({ type: "string", stringTextColor: n || void 0 }) })] }), b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), u(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace", fontWeight: e.stringFontWeight, fontStyle: e.stringFontStyle, ...e.stringFontSize && { fontSize: `${e.stringFontSize}px` }, ...e.stringTextColor && { color: e.stringTextColor } }, children: Yr("Hello World", e ?? { type: "string" }) })] })] });
}
function Z(e) {
  if (Number.isNaN(e)) throw NaN;
  if (!e) return e;
  if (e && typeof e == "object") throw NaN;
  return e;
}
function _l(e, t) {
  if (!Array.isArray(e) || e.length < t) throw { type: "Invalid Arguments" };
  return e;
}
function Be(e, t = 0) {
  if (!e || t === 1 / 0 || typeof e != "object") return e;
  if (Array.isArray(e)) {
    for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
      if (t === 0) throw { type: "Exceeded Allowed Depth" };
      Be(e[n], t - 1);
    }
  } else {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      const o = e[n[r]];
      if (typeof o == "object" && o) {
        if (t === 0) throw { type: "Exceeded Allowed Depth" };
        Be(o, t - 1);
      }
    }
  }
  return e;
}
function bl(e, t, n) {
  if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
  if (Number.isNaN(+Z(e)) && t !== null) throw NaN;
  if (Number.isNaN(+Z(t))) throw NaN;
  return t === null && !e ? null : e === null && !t ? 0 : e;
}
async function vl(e, t) {
  const n = [];
  let r = 0;
  for (const o of e) await t(o, r++, e) && n.push(o);
  return n;
}
async function wl(e, t) {
  let n = 0;
  for (const r of e) if (await t(r, n++, e)) return true;
  return false;
}
async function Sl(e, t) {
  let n = 0;
  for (const r of e) if (!await t(r, n++, e)) return false;
  return true;
}
async function Cl(e, t) {
  const n = [];
  let r = 0;
  for (const o of e) n.push(await t(o, r++, e));
  return n;
}
async function xl(e, t, n, r = 0) {
  if (e.length === 0) {
    if (typeof n < "u") return n;
    throw new Error("Array has no elements.");
  }
  const o = typeof n > "u" ? 1 : 0;
  let i = Be(o ? e[0] : n, r);
  for (let l = o; l < e.length; l++) i = Be(await t(i, e[l]), r);
  return i;
}
const rn = { filter: vl, some: wl, every: Sl, map: Cl, reduce: xl }, G = /* @__PURE__ */ Symbol.for("json_logic_sync"), pe = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Me = /* @__PURE__ */ Symbol.for("json_logic_original"), fr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
function st(e) {
  return typeof e == "function" ? e[G] === true : Array.isArray(e) ? e.every(st) : !(e && e.asyncMethod && !e.method);
}
function Kr(e, t = true) {
  return e[G] = t, e;
}
function zt(e) {
  return Array.isArray(e) ? e : [e];
}
const pn = /* @__PURE__ */ new WeakMap();
function gr(e) {
  return !e || typeof e != "function" || !e.length ? 0 : (pn.has(e) || pn.set(e, Rl(e)), pn.get(e));
}
function Rl(e) {
  if (!e || typeof e != "function" || !e.length) return 0;
  let t = e.toString();
  return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
}
function Ml(e, ...t) {
  let n = "";
  const r = this;
  for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), st(t[o]) || (r.asyncDetected = true), n += (st(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][pe] < "u" ? n += t[o][pe] : n += ee(t[o], r));
  return { [pe]: n };
}
function $l(e, t) {
  return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || ["Number", "String", "Boolean"].includes(e.constructor.name) || !t && e.constructor.name === "Object";
}
function on(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => on(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && on(o, t, n);
  }
  return true;
}
function Mn(e, t) {
  if (!t.async) return true;
  if (Array.isArray(e)) return e.every((n) => Mn(n, t));
  if (e && typeof e == "object") {
    const n = Object.keys(e);
    if (n.length === 0) return true;
    const r = n[0], o = e[r];
    return st(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][G] == "function" && t.methods[r][G](e, { engine: t })) : Mn(o, t) : false;
  }
  return true;
}
function ee(e, t = {}) {
  const { notTraversed: n = [], async: r, processing: o = [], values: i = [], engine: l } = t;
  function s(d, p = false) {
    return $l(d, p) ? JSON.stringify(d) : (i.push(d), `values[${i.length - 1}]`);
  }
  if (Array.isArray(e)) {
    let d = "";
    for (let p = 0; p < e.length; p++) p > 0 && (d += ","), d += ee(e[p], t);
    return "[" + d + "]";
  }
  let a = false;
  function c(d) {
    return t.asyncDetected = t.asyncDetected || a, r && a ? `await ${d}` : d;
  }
  if (e && typeof e == "object") {
    const d = Object.keys(e), p = d[0];
    if (!p) return s(e);
    if (!l.methods[p] || d.length > 1) {
      if (l.isData(e, p)) return s(e, true);
      throw { type: "Unknown Operator", key: p };
    }
    if (!t.engine.disableInline && l.methods[p] && on(e, l, t)) return Mn(e, l) ? s((l.fallback || l).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${s(l.run(e))})`) : (o.push(l.run(e).then((y) => s(y))), `__%%%${o.length - 1}%%%__`);
    let g = e[p];
    if ((!g || typeof g != "object") && !l.methods[p].lazy && (g = [g]), l.methods[p] && l.methods[p].compile) {
      let y = l.methods[p].compile(g, t);
      if (y[pe] && (y = y[pe]), (y || "").startsWith("await") && (t.asyncDetected = true), y !== false) return y;
    }
    let f = l.methods[p].optimizeUnary ? "" : "coerceArray";
    !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
    const m = [", context", ", context, above", ", context, above, engine"];
    if (typeof l.methods[p] == "function") {
      a = !st(l.methods[p]);
      const y = m[gr(l.methods[p]) - 1] || m[2];
      return c(`engine.methods["${p}"](${f}(` + ee(g, t) + ")" + y + ")");
    } else {
      a = !!(r && l.methods[p] && l.methods[p].asyncMethod);
      const y = gr(a ? l.methods[p].asyncMethod : l.methods[p].method);
      let _ = m[y - 1] || m[2];
      return a && typeof l.methods[p][G] == "function" && l.methods[p][G](g, { engine: l }) && (a = false, _ = _.replace("engine", "engine.fallback")), l.methods[p] && !l.methods[p].lazy ? c(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + ee(g, t) + ")" + _ + ")") : (n.push(g), c(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + _ + ")"));
    }
  }
  return s(e);
}
function ln(e, t = {}) {
  Object.assign(t, Object.assign({ notTraversed: [], methods: [], state: {}, processing: [], async: t.engine.async, asyncDetected: false, values: [], compile: Ml }, t));
  const n = ee(e, t);
  return Il(e, n, t);
}
function Il(e, t, n) {
  const { engine: r, methods: o, notTraversed: i, processing: l = [], values: s } = n, a = [];
  l.forEach((d, p) => {
    t = t.replace(`__%%%${p}%%%__`, d);
  });
  const c = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
  return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(c)(s, o, i, rn, r, a, zt, Z, _l, bl, Be), { [G]: !n.asyncDetected, deterministic: !t.includes("("), aboveDetected: typeof t == "string" && t.includes(", above") });
}
const Al = () => {
  try {
    const e = {};
    return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
  } catch {
    return false;
  }
}, ht = Al(), wt = /* @__PURE__ */ new Map();
function pt(e) {
  if (wt.has(e)) return wt.get(e);
  wt.size > 2048 && wt.clear();
  const t = Fl(e);
  return wt.set(e, t), t;
}
function Fl(e, t = ".", n = "\\", r = "/") {
  const o = [];
  let i = "";
  for (let l = 0; l < e.length; l++) {
    const s = e[l];
    s === n ? e[l + 1] === t || e[l + 1] === r ? (i += e[l + 1], l++) : e[l + 1] === n ? (i += n, l++) : i += n : s === t ? (o.push(i), i = "") : i += s;
  }
  return o.length !== e.length && o.push(i), o;
}
const $n = { get: { [G]: true, method: ([e, t, n], r, o, i) => {
  const l = n === void 0 ? null : n, s = pt(String(t));
  for (let a = 0; a < s.length; a++) if (e == null || (e = e[s[a]], e === void 0)) return l;
  return i.allowFunctions || typeof e[t] != "function" ? e : null;
}, deterministic: true, compile: (e, t) => {
  let n = null, r = e, o = null;
  if (Array.isArray(e) && e.length <= 3) {
    if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
    r = r.toString();
    const i = pt(r);
    return ht ? `((${ee(o, t)})${i.map((l) => `?.[${ee(l, t)}]`).join("")} ?? ${ee(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((l, s) => `(${l}||0)[${JSON.stringify(s)}]`, `(${ee(o, t)}||0)`)}, ${ee(n, t)}))`;
  }
  return false;
} }, var: { [Me]: true, [G]: true, method: (e, t, n, r) => {
  let o;
  Array.isArray(e) && (o = e[1], e = e[0]);
  let i = 0;
  for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
  const l = o === void 0 ? null : o;
  if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
  const s = pt(String(e));
  for (let a = 0; a < s.length; a++) if (t == null || (t = t[s[a]], t === void 0)) return l;
  return r.allowFunctions || typeof t != "function" ? t : null;
}, deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"), optimizeUnary: true, compile: (e, t) => {
  let n = e, r = null;
  if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
    if (Array.isArray(e) && (n = e[0], r = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
    if (typeof n > "u" || n === null || n === "") return "context";
    if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
    const o = pt(n);
    if (!ht) {
      const l = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((s, a) => `(${s}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${ee(r, t)})))`;
      return t.engine.allowFunctions ? l : `(typeof (prev = ${l}) === 'function' ? null : prev)`;
    }
    const i = `(context${o.map((l) => `?.[${JSON.stringify(l)}]`).join("")} ?? ${ee(r, t)})`;
    return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
  }
  return false;
} }, missing: { [G]: true, optimizeUnary: false, method: (e, t) => {
  if (!e.length) return [];
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = pt(String(e[r]));
    let i = t, l = true;
    for (let s = 0; s < o.length; s++) {
      if (!i) {
        l = false;
        break;
      }
      if (i = i[o[s]], i === void 0) {
        l = false;
        break;
      }
    }
    l || n.push(e[r]);
  }
  return n;
}, compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false, deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0) }, missing_some: { [G]: true, optimizeUnary: false, method: ([e, t], n) => {
  const r = $n.missing.method(t, n);
  return t.length - r.length >= e ? [] : r;
}, compile: ([e, t], n) => {
  if (!Array.isArray(t)) return false;
  let r = $n.missing.compile(t, n);
  return r || (r = n.compile`engine.methods.missing.method(${{ [pe]: JSON.stringify(t) }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
}, deterministic: false } }, jl = { ...$n }, W = { type: "Invalid Arguments" };
function ne(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => ne(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && ne(o, t, n);
  }
  return true;
}
function _e(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => _e(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r][G] == "function" ? t.methods[r][G](o, n) : t.methods[r][G] : typeof t.methods[r][G] == "function" ? t.methods[r][G](o, n) : t.methods[r][G] && _e(o, t, n);
  }
  return true;
}
function Y(e, t, n, r) {
  if (!e || typeof e != "object") return e;
  if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
    const o = t.optimizedMap.get(e);
    return typeof o == "function" ? o(n, r) : o;
  }
  return t.run(e, n, { above: r });
}
const St = Kt("every", true), L = { "+": (e) => {
  if (!e) return 0;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return Z(+e);
  if (typeof e == "object" && !Array.isArray(e)) throw NaN;
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    if (e[n] && typeof e[n] == "object") throw NaN;
    t += +e[n];
  }
  if (Number.isNaN(t)) throw NaN;
  return t;
}, "*": (e) => {
  if (e.length === 0) return 1;
  let t = 1;
  for (let n = 0; n < e.length; n++) {
    if (e[n] && typeof e[n] == "object") throw NaN;
    t *= +e[n];
  }
  if (Number.isNaN(t)) throw NaN;
  return t;
}, "/": (e) => {
  if (e[0] && typeof e[0] == "object") throw NaN;
  if (e.length === 0) throw W;
  if (e.length === 1) {
    if (!+e[0] || e[0] && typeof e[0] == "object") throw NaN;
    return 1 / +e[0];
  }
  let t = +e[0];
  for (let n = 1; n < e.length; n++) {
    if (e[n] && typeof e[n] == "object" || !e[n]) throw NaN;
    t /= +e[n];
  }
  if (Number.isNaN(t) || t === 1 / 0) throw NaN;
  return t;
}, "-": (e) => {
  if (!e) return 0;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return Z(-e);
  if (typeof e == "object" && !Array.isArray(e)) throw NaN;
  if (e[0] && typeof e[0] == "object") throw NaN;
  if (e.length === 0) throw W;
  if (e.length === 1) return -e[0];
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (e[n] && typeof e[n] == "object") throw NaN;
    t -= +e[n];
  }
  if (Number.isNaN(t)) throw NaN;
  return t;
}, "%": (e) => {
  if (e[0] && typeof e[0] == "object") throw NaN;
  if (e.length < 2) throw W;
  let t = +e[0];
  for (let n = 1; n < e.length; n++) {
    if (e[n] && typeof e[n] == "object") throw NaN;
    t %= +e[n];
  }
  if (Number.isNaN(t)) throw NaN;
  return t;
}, throw: (e) => {
  throw Array.isArray(e) && (e = e[0]), typeof e == "object" ? e : { type: e };
}, max: (e) => {
  if (!e.length || typeof e[0] != "number") throw W;
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (typeof e[n] != "number") throw W;
    e[n] > t && (t = e[n]);
  }
  return t;
}, min: (e) => {
  if (!e.length || typeof e[0] != "number") throw W;
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (typeof e[n] != "number") throw W;
    e[n] < t && (t = e[n]);
  }
  return t;
}, in: ([e, t]) => (t || []).includes(e), preserve: { lazy: true, method: Kr((e) => e, true), [G]: () => true }, if: { [Me]: true, method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (e.length === 1) return Y(e[0], r, t, n);
  if (e.length < 2) return null;
  e = [...e], e.length % 2 !== 1 && e.push(null);
  const o = e.pop();
  for (; e.length; ) {
    const i = e.shift(), l = e.shift(), s = Y(i, r, t, n);
    if (r.truthy(s)) return Y(l, r, t, n);
  }
  return Y(o, r, t, n);
}, [G]: (e, t) => _e(e, t.engine, t), deterministic: (e, t) => ne(e, t.engine, t), asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (e.length === 1) return r.run(e[0], t, { above: n });
  if (e.length < 2) return null;
  e = [...e], e.length % 2 !== 1 && e.push(null);
  const o = e.pop();
  for (; e.length; ) {
    const i = e.shift(), l = e.shift(), s = await r.run(i, t, { above: n });
    if (r.truthy(s)) return r.run(l, t, { above: n });
  }
  return r.run(o, t, { above: n });
}, lazy: true }, "<": Ze("<", (e, t) => e < t), "<=": Ze("<=", (e, t) => e <= t), ">": Ze(">", (e, t) => e > t), ">=": Ze(">=", (e, t) => e >= t), "==": Ze("==", (e, t) => e == t), "===": Ze("===", (e, t) => e === t), "!=": Ze("!=", (e, t) => e != t), "!==": Ze("!==", (e, t) => e !== t), or: { [G]: (e, t) => _e(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = Y(e[i], r, t, n), r.truthy(o)) return o;
  return o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), r.truthy(o)) return o;
  return o;
}, deterministic: (e, t) => ne(e, t.engine, t), compile: (e, t) => {
  let n = t.compile``;
  if (Array.isArray(e)) {
    if (!e.length) return t.compile`null`;
    for (let r = 0; r < e.length; r++) n = t.compile`${n} engine.truthy(prev = ${e[r]}) ? prev : `;
    return n = t.compile`${n} prev`, n;
  }
  return false;
}, lazy: true }, "??": { [G]: (e, t) => _e(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  let o;
  for (let i = 0; i < e.length; i++) if (o = Y(e[i], r, t, n), o != null) return o;
  return o === void 0 ? null : o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), o != null) return o;
  return o === void 0 ? null : o;
}, deterministic: (e, t) => ne(e, t.engine, t), compile: (e, t) => ht ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
  const o = ee(n, t);
  return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
}).join(" ?? ")})` : `(${ee(e, t)}).reduce((a,b) => (a) ?? b, null)` : false, lazy: true }, try: { [G]: (e, t) => _e(e, t.engine, t), method: (e, t, n, r) => {
  Array.isArray(e) || (e = [e]);
  let o, i;
  for (let l = 0; l < e.length; l++) try {
    return i ? o = Y(e[l], r, { type: i.type || i.error || i.message || i.constructor.name }, [null, t, n]) : o = Y(e[l], r, t, n), o;
  } catch (s) {
    Number.isNaN(s) ? i = { message: "NaN" } : i = s;
  }
  throw i;
}, asyncMethod: async (e, t, n, r) => {
  Array.isArray(e) || (e = [e]);
  let o, i;
  for (let l = 0; l < e.length; l++) try {
    return i ? o = await r.run(e[l], { type: i.type || i.error || i.message || i.constructor.name }, { above: [null, t, n] }) : o = await r.run(e[l], t, { above: n }), o;
  } catch (s) {
    Number.isNaN(s) ? i = { message: "NaN" } : i = s;
  }
  throw i;
}, deterministic: (e, t) => ne(e[0], t.engine, { ...t, insideTry: true }) && ne(e, t.engine, { ...t, insideIterator: true, insideTry: true }), lazy: true, compile: (e, t) => {
  if (!Array.isArray(e) || !e.length) return false;
  let n;
  try {
    "+" in e[0] && e.length > 1 ? n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
  } catch (r) {
    Number.isNaN(r) && (r = { type: "NaN" }), n = { [pe]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; ` };
  }
  if (e.length > 1) for (let r = 1; r < e.length; r++) try {
    r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
  } catch (o) {
    Number.isNaN(o) && (o = { type: "NaN" }), r === e.length - 1 ? n = t.compile`${n} throw ${{ [pe]: JSON.stringify(o) }} ` : n = t.compile`${n} ${{ [pe]: `context = ${JSON.stringify(o)};` }}`;
  }
  else n[pe].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
  return n = t.compile`${n} } })(context, above)`, n[pe].includes("await") && (n[pe] = n[pe].replace("((context", "await (async (context")), n;
} }, and: { [G]: (e, t) => _e(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = Y(e[i], r, t, n), !r.truthy(o)) return o;
  return o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), !r.truthy(o)) return o;
  return o;
}, lazy: true, deterministic: (e, t) => ne(e, t.engine, t), compile: (e, t) => {
  let n = t.compile``;
  if (Array.isArray(e)) {
    if (!e.length) return t.compile`null`;
    for (let r = 0; r < e.length; r++) n = t.compile`${n} !engine.truthy(prev = ${e[r]}) ? prev : `;
    return n = t.compile`${n} prev`, n;
  }
  return false;
} }, substr: ([e, t, n]) => {
  if (n < 0) {
    const r = e.substr(t);
    return r.substr(0, r.length + n);
  }
  return e.substr(t, n);
}, length: { method: (e, t, n, r) => {
  if (!e) throw W;
  const o = Y(e, r, t, n), i = Array.isArray(e) ? o[0] : o;
  if (typeof i == "string" || Array.isArray(i)) return i.length;
  if (i && typeof i == "object") return Object.keys(i).length;
  throw W;
}, asyncMethod: async (e, t, n, r) => {
  if (!e) throw W;
  const o = await Y(e, r, t, n), i = Array.isArray(e) ? o[0] : o;
  if (typeof i == "string" || Array.isArray(i)) return i.length;
  if (i && typeof i == "object") return Object.keys(i).length;
  throw W;
}, deterministic: (e, t) => ne(e, t.engine, t), lazy: true }, exists: { method: (e, t, n, r) => L.val.method(e, t, n, r, fr) !== fr, deterministic: false }, val: { [Me]: true, [G]: true, method: (e, t, n, r, o = null) => {
  if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
    if (o && !(t && e in t)) return o;
    if (t == null) return null;
    const s = t[e];
    return typeof s > "u" ? null : s;
  }
  let i = t, l = 0;
  if (Array.isArray(e[0]) && e[0].length === 1) {
    l++;
    const s = +Math.abs(e[0][0]);
    let a = 0;
    for (let c = 0; c < s; c++) i = n[a++], c === n.length - 1 && Array.isArray(i) && (n = i, i = i[0], a = 1);
  }
  for (let s = l; s < e.length; s++) {
    if (o && !(i && e[s] in i)) return o;
    if (i == null) return null;
    i = i[e[s]];
  }
  return typeof i > "u" || typeof i == "function" && !r.allowFunctions ? o : i;
}, optimizeUnary: true, deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false, compile: (e, t) => {
  function n(r) {
    let o;
    return ht ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
  }
  if (typeof e == "object" && !Array.isArray(e)) if (_e(e, t.engine, t) && ne(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, { above: t.above });
  else return false;
  if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
  if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
  if (!Array.isArray(e)) return n(ht ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
  if (Array.isArray(e)) {
    let r = t.compile`context`;
    for (let o = 0; o < e.length; o++) e[o] !== null && (ht ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
    return n(t.compile`(${r})`);
  }
  return false;
} }, map: Kt("map"), some: { ...Kt("some", true), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  let [o, i] = e;
  o = Y(o, r, t, n) || [];
  for (let l = 0; l < o.length; l++) if (r.truthy(Y(i, r, o[l], [o, t, n]))) return true;
  return false;
} }, all: { [G]: St[G], method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  const o = Y(e[0], r, t, n) || [];
  if (Array.isArray(o) && o.length === 0) return false;
  const i = e[1];
  for (let l = 0; l < o.length; l++) if (!r.truthy(Y(i, r, o[l], [o, t, n]))) return false;
  return true;
}, asyncMethod: async (e, t, n, r) => {
  if (Array.isArray(e)) {
    const o = await r.run(e[0], t, n);
    if (Array.isArray(o) && o.length === 0) return false;
  }
  return St.asyncMethod(e, t, n, r);
}, compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${St.compile([{ [pe]: "prev" }, e[1]], t)}` : false, deterministic: St.deterministic, lazy: St.lazy }, none: { [G]: (e, t) => _e(e, t.engine, t), lazy: true, method: (e, t, n, r) => !L.some.method(e, t, n, r), asyncMethod: async (e, t, n, r) => !await L.some.asyncMethod(e, t, n, r), compile: (e, t) => {
  const n = L.some.compile(e, t);
  return n ? t.compile`!(${n})` : false;
} }, merge: (e) => {
  if (!Array.isArray(e)) return [e];
  const t = [];
  for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let r = 0; r < e[n].length; r++) t.push(e[n][r]);
  else t.push(e[n]);
  return t;
}, filter: Kt("filter", true), reduce: { deterministic: (e, t) => ne(e[0], t.engine, t) && ne(e[1], t.engine, { ...t, insideIterator: true }), compile: (e, t) => {
  if (!Array.isArray(e)) throw W;
  const { async: n } = t;
  let [r, o, i] = e;
  r = ee(r, t), typeof i < "u" && (i = ee(i, t));
  const l = { ...t, extraArguments: "above", avoidInlineAsync: true };
  o = ln(o, l);
  const s = o.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
  return t.methods.push(o), n && (!st(o) || r.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s})), ${a}(${i}))` : `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s})))`;
}, method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  let [o, i, l] = e;
  l = Be(Y(l, r, t, n), r.options.maxDepth), o = Y(o, r, t, n) || [];
  let s = (a, c) => Be(r.run(i, { accumulator: a, current: c }, { above: [o, t, n] }), r.options.maxDepth);
  if (r.optimizedMap.has(i) && typeof r.optimizedMap.get(i) == "function") {
    const a = r.optimizedMap.get(i);
    s = (c, d) => Be(a({ accumulator: c, current: d }, [o, t, n]), r.options.maxDepth);
  }
  return typeof l > "u" ? o.reduce(s) : o.reduce(s, l);
}, [G]: (e, t) => _e(e, t.engine, t), asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw W;
  let [o, i, l] = e;
  return l = Be(await r.run(l, t, { above: n }), r.options.maxDepth), o = await r.run(o, t, { above: n }) || [], rn.reduce(o, (s, a) => r.run(i, { accumulator: s, current: a }, { above: [o, t, n] }), l, r.options.maxDepth);
}, lazy: true }, "!": (e, t, n, r) => Array.isArray(e) ? !r.truthy(e[0]) : !r.truthy(e), "!!": (e, t, n, r) => !!(Array.isArray(e) ? r.truthy(e[0]) : r.truthy(e)), cat: { [Me]: true, [G]: true, method: (e) => {
  if (typeof e == "string") return e;
  if (!Array.isArray(e)) return e.toString();
  let t = "";
  for (let n = 0; n < e.length; n++) e[n] === null || e[n] === void 0 || (t += e[n]);
  return t;
}, deterministic: true, optimizeUnary: true, compile: (e, t) => {
  if (typeof e == "string") return JSON.stringify(e);
  if (typeof e == "number") return '"' + JSON.stringify(e) + '"';
  if (!Array.isArray(e)) return false;
  let n = t.compile`''`;
  for (let r = 0; r < e.length; r++) n = t.compile`${n} + ${e[r]}`;
  return t.compile`(${n})`;
} }, keys: ([e]) => typeof e == "object" ? Object.keys(e) : [], pipe: { lazy: true, [G]: (e, t) => _e(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
  let o = r.run(e[0], t, { above: [e, t, n] });
  for (let i = 1; i < e.length; i++) o = r.run(e[i], o, { above: [e, t, n] });
  return o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
  let o = await r.run(e[0], t, { above: [e, t, n] });
  for (let i = 1; i < e.length; i++) o = await r.run(e[i], o, { above: [e, t, n] });
  return o;
}, compile: (e, t) => {
  let n = t.compile`${e[0]}`;
  for (let r = 1; r < e.length; r++) n = t.compile`${ln(e[r], { ...t, extraArguments: "above" })}(${n}, [null, context, above])`;
  return n;
}, deterministic: (e, t) => {
  if (!Array.isArray(e)) return false;
  e = [...e];
  const n = e.shift();
  return ne(n, t.engine, t) && ne(e, t.engine, { ...t, insideIterator: true });
} }, eachKey: { lazy: true, [G]: (e, t) => _e(Object.values(e[Object.keys(e)[0]]), t.engine, t), method: (e, t, n, r) => Object.keys(e).reduce((i, l) => {
  const s = e[l];
  return Object.defineProperty(i, l, { enumerable: true, value: r.run(s, t, { above: n }) }), i;
}, {}), deterministic: (e, t) => {
  if (e && typeof e == "object") return Object.values(e).every((n) => ne(n, t.engine, t));
  throw W;
}, compile: (e, t) => {
  if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${ee(e[o], t)}`), r), []).join(",")} })`;
  throw W;
}, asyncMethod: async (e, t, n, r) => await rn.reduce(Object.keys(e), async (i, l) => {
  const s = e[l];
  return Object.defineProperty(i, l, { enumerable: true, value: await r.run(s, t, { above: n }) }), i;
}, {}, 1 / 0) } };
function Ze(e, t) {
  const n = { [pe]: e }, r = e.length === 3;
  return { method: (o, i, l, s) => {
    if (!Array.isArray(o) || o.length <= 1) throw W;
    if (o.length === 2) {
      const c = Y(o[0], s, i, l), d = Y(o[1], s, i, l);
      if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
      if (Number.isNaN(+Z(c))) throw NaN;
      if (Number.isNaN(+Z(d)) && c !== null) throw NaN;
      return t(+c, +d);
    }
    let a = Y(o[0], s, i, l);
    for (let c = 1; c < o.length; c++) {
      const d = Y(o[c], s, i, l);
      if ((r || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
      if (Number.isNaN(+Z(d)) && a !== null) throw NaN;
      if (c === 1 && Number.isNaN(+Z(a))) throw NaN;
      if (!t(+a, +d)) return false;
      a = d;
    }
    return true;
  }, asyncMethod: async (o, i, l, s) => {
    if (!Array.isArray(o) || o.length <= 1) throw W;
    if (o.length === 2) {
      const c = await Y(o[0], s, i, l), d = await Y(o[1], s, i, l);
      if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
      if (Number.isNaN(+Z(c))) throw NaN;
      if (Number.isNaN(+Z(d)) && c !== null) throw NaN;
      return t(+c, +d);
    }
    let a = await Y(o[0], s, i, l);
    for (let c = 1; c < o.length; c++) {
      const d = await Y(o[c], s, i, l);
      if ((r || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
      if (Number.isNaN(+Z(d)) && a !== null) throw NaN;
      if (c === 1 && Number.isNaN(+Z(a))) throw NaN;
      if (!t(+a, +d)) return false;
      a = d;
    }
    return true;
  }, compile: (o, i) => {
    if (!Array.isArray(o) || o.length < 2) return false;
    if (o.length === 2) return i.compile`((prev = ${o[0]}) ${n} compareCheck(${o[1]}, prev, ${r}))`;
    let l = i.compile`((prev = ${o[0]}) ${n} (prev = compareCheck(${o[1]}, prev, ${r})))`;
    for (let s = 2; s < o.length; s++) l = i.compile`(${l} && prev ${n} (prev = compareCheck(${o[s]}, prev, ${r})))`;
    return l;
  }, [Me]: true, [G]: (o, i) => _e(o, i.engine, i), deterministic: (o, i) => ne(o, i.engine, i), lazy: true };
}
function Kt(e, t = false) {
  return { deterministic: (n, r) => ne(n[0], r.engine, r) && ne(n[1], r.engine, { ...r, insideIterator: true }), [Me]: true, [G]: (n, r) => _e(n, r.engine, r), method: (n, r, o, i) => {
    if (!Array.isArray(n)) throw W;
    let [l, s] = n;
    return l = Y(l, i, r, o) || [], l[e]((a, c) => {
      if (!s || typeof s != "object") return t ? i.truthy(s) : s;
      const d = Y(s, i, a, [{ iterator: l, index: c }, r, o]);
      return t ? i.truthy(d) : d;
    });
  }, asyncMethod: async (n, r, o, i) => {
    if (!Array.isArray(n)) throw W;
    let [l, s] = n;
    return l = await i.run(l, r, { above: o }) || [], rn[e](l, async (a, c) => {
      if (!s || typeof s != "object") return t ? i.truthy(s) : s;
      const d = await i.run(s, a, { above: [{ iterator: l, index: c }, r, o] });
      return t ? i.truthy(d) : d;
    });
  }, compile: (n, r) => {
    if (!Array.isArray(n)) throw W;
    const { async: o } = r, [i, l] = n, s = { ...r, avoidInlineAsync: true, iteratorCompile: true, extraArguments: "index, above" }, a = ln(l, s), c = a.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, d = t ? r.compile`engine.truthy` : r.compile``;
    return o && !st(a) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${d}(${a}(i, x, ${c})))`) : r.compile`(${i} || [])[${e}]((i, x, z) => ${d}(${a}(i, x, ${c})))`;
  }, lazy: true };
}
L.every = L.all;
L["?:"] = L.if;
Object.keys(L).forEach((e) => {
  typeof L[e] == "function" && (L[e][G] = true), L[e].deterministic = typeof L[e].deterministic > "u" ? true : L[e].deterministic;
});
L.if.compile = function(e, t) {
  if (!Array.isArray(e) || e.length < 3) return false;
  e = [...e], e.length % 2 !== 1 && e.push(null);
  const n = e.pop();
  let r = t.compile``;
  for (; e.length; ) {
    const o = e.shift(), i = e.shift();
    r = t.compile`${r} engine.truthy(${o}) ? ${i} : `;
  }
  return t.compile`(${r} ${n})`;
};
function Dt(e, t) {
  if (Array.isArray(e)) return Z(NaN);
  if (typeof e == "number" || typeof e == "boolean") return "+" + ee(e, t);
  if (typeof e == "string") return "+" + Z(+e);
  const n = ee(e, t);
  return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + Z(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? Z(NaN) : `(+precoerceNumber(${n}))`;
}
L["+"].compile = function(e, t) {
  return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Dt(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${ee(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
};
L["%"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length < 2) throw W;
    return `precoerceNumber(${e.map((n) => Dt(n, t)).join(" % ")})`;
  }
  return `assertSize(${ee(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
};
L.in.compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
};
L["-"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length === 0) throw W;
    return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Dt(n, t)).join(" - ")})`;
  }
  return typeof e == "string" || typeof e == "number" ? `(-${ee(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
};
L["/"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length === 0) throw W;
    return e.length === 1 && (e = [1, e[0]]), `precoerceNumber(${e.map((n, r) => {
      let o = Dt(n, t);
      return r && o === "+0" && Z(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
    }).join(" / ")})`;
  }
  return `assertSize(prev = ${ee(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
};
L["*"].compile = function(e, t) {
  return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Dt(n, t)).join(" * ")})` : `(${ee(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
};
L["!"].compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
};
L.not = L["!"];
L["!!"].compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
};
L.none.deterministic = L.some.deterministic;
L.throw.deterministic = (e, t) => t.insideTry && ne(e, t.engine, t);
L["+"].optimizeUnary = L["-"].optimizeUnary = L["!"].optimizeUnary = L["!!"].optimizeUnary = L.cat.optimizeUnary = L.throw.optimizeUnary = true;
const zl = { ...L, ...jl }, Dl = function(t) {
  return Object.keys(t).forEach((n) => {
    t[n] === void 0 && delete t[n];
  }), t;
};
function Tl(e, t, n, r) {
  const o = t.methods[n], i = o.method ? o.method : o;
  if (o.lazy) {
    const s = e[n];
    return (a, c) => i(s, a, c || r, t);
  }
  let l = e[n];
  if ((!l || typeof l != "object") && !o.optimizeUnary && (l = [l]), Array.isArray(l) && l.length === 1 && o.optimizeUnary && !Array.isArray(l[0]) && (l = l[0]), Array.isArray(l)) {
    const s = l.map((a) => ae(a, t, r));
    if (s.every((a) => typeof a != "function")) return (a, c) => i(s, a, c || r, t);
    if (s.length === 1) {
      const a = s[0];
      return (c, d) => i([a(c, d)], c, d || r, t);
    }
    if (s.length === 2) {
      const [a, c] = s;
      return typeof a == "function" && typeof c == "function" ? (d, p) => i([a(d, p), c(d, p)], d, p || r, t) : typeof a == "function" ? (d, p) => i([a(d, p), c], d, p || r, t) : (d, p) => i([a, c(d, p)], d, p || r, t);
    }
    return (a, c) => {
      const d = s.map((p) => typeof p == "function" ? p(a, c) : p);
      return i(d, a, c || r, t);
    };
  } else {
    const s = ae(l, t, r);
    if (o.optimizeUnary) {
      const a = (c) => !c || typeof c[s] > "u" || typeof c[s] == "function" && !t.allowFunctions ? null : c[s];
      if (typeof s == "function") return (c, d) => i(s(c, d), c, d || r, t);
      if ((n === "var" || n === "val") && t.methods[n][Me]) {
        if (!s && n !== "val") return (c) => c === null || typeof c > "u" || typeof c == "function" && !t.allowFunctions ? null : c;
        if (n === "val" || typeof s == "number" || !s.includes(".") && !s.includes("\\")) return a;
        if (n === "var" && !s.startsWith("../")) {
          const c = pt(String(s));
          let d;
          if (c.length === 2) {
            const [p, g] = c;
            return (f) => (typeof (d = f && f[p] && f[p][g]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
          }
          if (c.length === 3) {
            const [p, g, f] = c;
            return (m) => (typeof (d = m && m[p] && m[p][g] && m[p][g][f]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
          }
        }
      }
      return (c, d) => i(s, c, d || r, t);
    }
    return typeof s == "function" ? (a, c) => i(zt(s(a, c)), a, c || r, t) : (a, c) => i(zt(s), a, c || r, t);
  }
}
const pr = { "<": (e, t) => e < t, "<=": (e, t) => e <= t, ">": (e, t) => e > t, ">=": (e, t) => e >= t, "==": (e, t) => e == t, "===": (e, t) => e === t, "!=": (e, t) => e != t, "!==": (e, t) => e !== t };
function Pl(e, t, n) {
  if (e.val && t.methods.val[Me] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
    let r;
    if (e.val.length === 1) {
      const o = e.val[0];
      return (i) => (typeof (r = i && i[o]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
    }
    if (e.val.length === 2) {
      const [o, i] = e.val;
      return (l) => (typeof (r = l && l[o] && l[o][i]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
    }
    if (e.val.length === 3) {
      const [o, i, l] = e.val;
      return (s) => (typeof (r = s && s[o] && s[o][i] && s[o][i][l]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
    }
  }
  if ((e.if || e["?:"]) && t.methods.if[Me] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
    const [r, o, i] = e.if || e["?:"], l = ae(r, t, n), s = ae(o, t, n), a = ae(i, t, n);
    return typeof l == "function" && typeof s == "function" && typeof a == "function" ? (c, d) => t.truthy(l(c, d)) ? s(c, d) : a(c, d) : typeof l == "function" && typeof s == "function" ? (c, d) => t.truthy(l(c, d)) ? s(c, d) : a : typeof l == "function" && typeof a == "function" ? (c, d) => t.truthy(l(c, d)) ? s : a(c, d) : typeof l == "function" ? (c, d) => t.truthy(l(c, d)) ? s : a : t.truthy(l) ? s : a;
  }
  if (e.filter && t.methods.filter[Me] && Array.isArray(e.filter) && e.filter.length === 2) {
    const [r, o] = e.filter, i = ae(o, t, n);
    if (typeof i != "function") return t.truthy(i) ? ae(r, t, n) : [];
  }
  for (const r in pr) if (e[r] && Array.isArray(e[r]) && t.methods[r][Me]) {
    const o = pr[r], i = r.length === 3 ? o : function(s, a) {
      if ((typeof s == "string" || s === null) && (typeof a == "string" || a === null)) return o(s, a);
      if (Number.isNaN(+Z(s))) throw NaN;
      if (Number.isNaN(+Z(a)) && s !== null) throw NaN;
      return o(+s, +a);
    };
    if (e[r].length === 2) {
      const [l, s] = e[r], a = ae(l, t, n), c = ae(s, t, n);
      return typeof a == "function" && typeof c == "function" ? (d, p) => i(a(d, p), c(d, p)) : typeof a == "function" ? (d, p) => i(a(d, p), c) : typeof c == "function" ? (d, p) => i(a, c(d, p)) : i(a, c);
    }
    if (e[r].length === 3) {
      const [l, s, a] = e[r], c = ae(l, t, n), d = ae(s, t, n), p = ae(a, t, n);
      let g;
      return typeof c == "function" && typeof d == "function" && typeof p == "function" ? (f, m) => i(c(f, m), g = d(f, m)) && i(g, p(f, m)) : typeof c == "function" && typeof d == "function" ? (f, m) => i(c(f, m), g = d(f, m)) && i(g, p) : typeof c == "function" && typeof p == "function" ? (f, m) => i(c(f, m), d) && i(d, p(f, m)) : typeof d == "function" && typeof p == "function" ? (f, m) => i(c, g = d(f, m)) && i(g, p(f, m)) : typeof c == "function" ? (f, m) => i(c(f, m), d) && i(d, p) : typeof d == "function" ? (f, m) => i(c, g = d(f, m)) && i(g, p) : typeof p == "function" ? (f, m) => i(c, d) && i(d, p(f, m)) : i(c, d) && i(d, p);
    }
  }
  if (e.reduce && Array.isArray(e.reduce)) {
    let [r, o, i] = e.reduce;
    if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
      const l = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", s = o["+"][0].var === "current" || o["+"][1].var === "current";
      if (i = i || 0, l && s) return ae({ "+": [{ "+": r }, i] }, t, n);
    }
    if (o["*"] && o["*"].length === 2 && (o["*"][0] || 0).var && (o["*"][1] || 0).var) {
      const l = o["*"][0].var === "accumulator" || o["*"][1].var === "accumulator", s = o["*"][0].var === "current" || o["*"][1].var === "current";
      if (i = typeof i > "u" ? 1 : i, l && s) return ae({ "*": [{ "*": r }, i] }, t, n);
    }
  }
}
function ae(e, t, n = []) {
  if (Array.isArray(e)) {
    const r = e.map((o) => ae(o, t, n));
    return r.every((o) => typeof o != "function") ? r : (o, i) => r.map((l) => typeof l == "function" ? l(o, i) : l);
  }
  if (e && typeof e == "object") {
    const r = Pl(e, t, n);
    if (typeof r < "u") return r;
    const o = Object.keys(e), i = o[0];
    if (o.length === 0) return e;
    if (t.isData(e, i)) return () => e;
    if (o.length > 1) throw { type: "Unknown Operator" };
    const s = !t.disableInline && on(e, t, { engine: t });
    if (i in t.methods) {
      const a = Tl(e, t, i, n);
      return s ? a() : a;
    }
    throw { type: "Unknown Operator", key: i };
  }
  return e;
}
class Nl {
  constructor(t = zl, n = { disableInline: false, disableInterpretedOptimization: false, permissive: false, maxDepth: 0, maxArrayLength: 32768, maxStringLength: 65536 }) {
    this.disableInline = n.disableInline, this.disableInterpretedOptimization = n.disableInterpretedOptimization, this.methods = { ...t }, this.optimizedMap = /* @__PURE__ */ new WeakMap(), this.missesSinceSeen = 0, this.options = { disableInline: n.disableInline, disableInterpretedOptimization: n.disableInterpretedOptimization, maxDepth: n.maxDepth || 0, maxArrayLength: n.maxArrayLength || 32768, maxStringLength: n.maxStringLength || 65536 }, this.isData || (n.permissive ? this.isData = (r, o) => !(o in this.methods) : this.isData = () => false);
  }
  truthy(t) {
    if (!t) return t;
    if (Array.isArray(t)) return t.length > 0;
    if (typeof t == "object") {
      if (t[Symbol.iterator] && ("length" in t && t.length === 0 || "size" in t && t.size === 0)) return false;
      if (t.constructor.name === "Object") return Object.keys(t).length > 0;
    }
    return t;
  }
  _parse(t, n, r, o, i) {
    const l = t[o];
    if (this.isData(t, o)) return t;
    if (!this.methods[o] || i > 1) throw { type: "Unknown Operator", key: o };
    if ((o === "var" || o === "val") && this.methods[o][Me]) {
      const s = !l || typeof l != "object" ? l : this.run(l, n, { above: r });
      return this.methods[o].method(s, n, r, this, null);
    }
    if (typeof this.methods[o] == "function") {
      const s = !l || typeof l != "object" ? [l] : zt(this.run(l, n, { above: r }));
      return this.methods[o](s, n, r, this);
    }
    if (typeof this.methods[o] == "object") {
      const { method: s, lazy: a } = this.methods[o], c = a ? l : !l || typeof l != "object" ? [l] : zt(this.run(l, n, { above: r }));
      return s(c, n, r, this);
    }
    throw new Error(`Method '${o}' is not set up properly.`);
  }
  addMethod(t, n, { deterministic: r, optimizeUnary: o } = {}) {
    typeof n == "function" ? n = { method: n, lazy: false } : n = { ...n, lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy }, Object.assign(n, Dl({ deterministic: r, optimizeUnary: o })), this.methods[t] = Kr(n);
  }
  addModule(t, n, r) {
    Object.getOwnPropertyNames(n).forEach((o) => {
      (typeof n[o] == "function" || typeof n[o] == "object") && this.addMethod(`${t}${t ? "." : ""}${o}`, n[o], r);
    });
  }
  run(t, n = {}, r = {}) {
    const { above: o = [] } = r;
    if (!this.disableInterpretedOptimization && typeof t == "object" && t) if (this.missesSinceSeen > 500 && (this.disableInterpretedOptimization = true, this.missesSinceSeen = 0), this.optimizedMap.has(t)) {
      this.missesSinceSeen = 0;
      const i = this.optimizedMap.get(t);
      return typeof i == "function" ? i(n, o) : i;
    } else {
      this.optimizedMap.set(t, ae(t, this, o)), this.missesSinceSeen++;
      const i = this.optimizedMap.get(t);
      return typeof i == "function" ? i(n, o) : i;
    }
    if (Array.isArray(t)) {
      const i = new Array(t.length);
      for (let l = 0; l < t.length; l++) i[l] = this.run(t[l], n, { above: o });
      return i;
    }
    if (t && typeof t == "object") {
      const i = Object.keys(t);
      if (i.length > 0) {
        const l = i[0];
        return this._parse(t, n, o, l, i.length);
      }
    }
    return t;
  }
  build(t, n = {}) {
    const { above: r = [], top: o = true } = n, i = ln(t, { engine: this, above: r });
    return o === false && i.deterministic ? i() : i;
  }
}
function we(e) {
  return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
}
const an = new Nl();
an.addMethod("contains", ([e, t]) => we(e).includes(we(t)), { deterministic: true });
an.addMethod("startsWith", ([e, t]) => we(e).startsWith(we(t)), { deterministic: true });
an.addMethod("endsWith", ([e, t]) => we(e).endsWith(we(t)), { deterministic: true });
function Ct() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
const In = /* @__PURE__ */ new Set(["empty", "not_empty", "is_true", "is_false"]), El = { number: ["eq", "neq", "gt", "gte", "lt", "lte", "empty", "not_empty"], string: ["eq", "neq", "contains", "not_contains", "starts_with", "ends_with", "empty", "not_empty"], boolean: ["is_true", "is_false", "empty", "not_empty"], date: ["eq", "neq", "gt", "gte", "lt", "lte", "empty", "not_empty"], mixed: ["eq", "neq", "contains", "empty", "not_empty"] }, kl = ["eq", "neq", "empty", "not_empty"], Ol = { var: "value" };
function Hl(e, t, n = "string") {
  const r = Number(t), o = n === "number", i = n === "date", l = Ol;
  switch (e) {
    case "eq":
      return { "==": [l, o ? r : t] };
    case "neq":
      return { "!=": [l, o ? r : t] };
    case "gt":
      return { ">": [l, i ? t : r] };
    case "gte":
      return { ">=": [l, i ? t : r] };
    case "lt":
      return { "<": [l, i ? t : r] };
    case "lte":
      return { "<=": [l, i ? t : r] };
    case "contains":
      return { contains: [l, t] };
    case "not_contains":
      return { "!": [{ contains: [l, t] }] };
    case "starts_with":
      return { startsWith: [l, t] };
    case "ends_with":
      return { endsWith: [l, t] };
    case "empty":
      return { "!": [{ "!!": [l] }] };
    case "not_empty":
      return { "!!": [l] };
    case "is_true":
      return { "==": [l, true] };
    case "is_false":
      return { "==": [l, false] };
  }
}
const Bl = /* @__PURE__ */ new Set(["eq", "neq", "gt", "gte", "lt", "lte"]);
function Ll(e, t = "string") {
  const n = e.conditions.filter((o) => In.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && Bl.has(o.operator) && isNaN(Number(o.operand))));
  if (n.length === 0) return;
  const r = n.map((o) => Hl(o.operator, o.operand, t));
  return r.length === 1 ? r[0] : { [e.mode]: r };
}
function ke(e) {
  return typeof e == "object" && e !== null && e.var === "value";
}
function hn(e) {
  for (const [t, n] of [[">", "gt"], [">=", "gte"], ["<", "lt"], ["<=", "lte"]]) if (t in e) {
    const r = e[t];
    if (Array.isArray(r) && r.length === 2 && ke(r[0])) return { operator: n, operand: we(r[1]) };
  }
  if ("==" in e) {
    const t = e["=="];
    if (Array.isArray(t) && t.length === 2 && ke(t[0])) return t[1] === true ? { operator: "is_true", operand: "" } : t[1] === false ? { operator: "is_false", operand: "" } : { operator: "eq", operand: we(t[1]) };
  }
  if ("!=" in e) {
    const t = e["!="];
    if (Array.isArray(t) && t.length === 2 && ke(t[0])) return { operator: "neq", operand: we(t[1]) };
  }
  if ("contains" in e) {
    const t = e.contains;
    if (Array.isArray(t) && t.length === 2 && ke(t[0])) return { operator: "contains", operand: we(t[1]) };
  }
  if ("startsWith" in e) {
    const t = e.startsWith;
    if (Array.isArray(t) && t.length === 2 && ke(t[0])) return { operator: "starts_with", operand: we(t[1]) };
  }
  if ("endsWith" in e) {
    const t = e.endsWith;
    if (Array.isArray(t) && t.length === 2 && ke(t[0])) return { operator: "ends_with", operand: we(t[1]) };
  }
  if ("!" in e) {
    const t = e["!"];
    if (Array.isArray(t) && t.length === 1) {
      const n = t[0];
      if (typeof n == "object" && n !== null && "!!" in n) {
        const r = n["!!"];
        if (Array.isArray(r) && ke(r[0])) return { operator: "empty", operand: "" };
      }
      if (typeof n == "object" && n !== null && "contains" in n) {
        const r = n.contains;
        if (Array.isArray(r) && r.length === 2 && ke(r[0])) return { operator: "not_contains", operand: we(r[1]) };
      }
    }
  }
  if ("!!" in e) {
    const t = e["!!"];
    if (Array.isArray(t) && ke(t[0])) return { operator: "not_empty", operand: "" };
  }
  return null;
}
function hr(e) {
  if (!e) return { mode: "and", conditions: [{ id: Ct(), operator: "eq", operand: "" }] };
  if ("and" in e) {
    const n = e.and;
    if (Array.isArray(n)) {
      const r = n.map((o) => hn(o)).filter((o) => o !== null).map((o) => ({ id: Ct(), ...o }));
      if (r.length > 0) return { mode: "and", conditions: r };
    }
  }
  if ("or" in e) {
    const n = e.or;
    if (Array.isArray(n)) {
      const r = n.map((o) => hn(o)).filter((o) => o !== null).map((o) => ({ id: Ct(), ...o }));
      if (r.length > 0) return { mode: "or", conditions: r };
    }
  }
  const t = hn(e);
  return t ? { mode: "and", conditions: [{ id: Ct(), ...t }] } : { mode: "and", conditions: [{ id: Ct(), operator: "eq", operand: "" }] };
}
const Vl = 200, xt = /* @__PURE__ */ new Map();
function Wl(e, t) {
  try {
    const n = JSON.stringify(e);
    let r = xt.get(n);
    if (!r) {
      if (r = an.build(e), xt.size >= Vl) {
        const o = xt.keys().next().value;
        o && xt.delete(o);
      }
      xt.set(n, r);
    }
    return !!r({ value: t });
  } catch {
    return false;
  }
}
function Xr(e, t) {
  return { src: e, size: t.imageSize ?? Cn.size, objectFit: t.imageObjectFit ?? Cn.objectFit, variant: t.imageVariant ?? "square", bgColor: t.imageBgColor || void 0, borderColor: t.imageBorderColor || void 0, borderWidth: t.imageBorderWidth, tint: t.imageTint || void 0, tooltip: t.imageTooltip !== false ? e : void 0, showBroken: t.imageShowBroken !== false };
}
function Gl(e) {
  const t = {};
  return e.stringFontWeight === "bold" && (t.fontWeight = "bold"), e.stringFontStyle === "italic" && (t.fontStyle = "italic"), e.stringFontSize && (t.fontSize = `${e.stringFontSize}px`), e.stringTextColor && (t.color = e.stringTextColor), t;
}
const Qr = { number: { format: (e, t) => typeof e == "number" || typeof e == "string" && !isNaN(Number(e)) ? { displayValue: Ur(Number(e), { decimals: t.fmt.numberDecimals, prefix: t.fmt.numberPrefix, suffix: t.fmt.numberSuffix, thousands: t.fmt.numberThousandsSeparator }) } : {} }, date: { format: (e, t) => ({ displayValue: Jr(e, t.fmt.dateFormat, t.fmt.dateInputFormat) }) }, boolean: { format: (e, t) => ({ displayValue: Rn(e, t.fmt.booleanTrue, t.fmt.booleanFalse) }) }, string: { format: (e, t) => ({ displayValue: Yr(t.defaultDisplay, t.fmt), textSx: Gl(t.fmt) }) }, image: { format: (e, t) => e != null && Jo(e) ? { image: Xr(e.trim(), t.fmt), displayValue: "" } : e == null ? { displayValue: "" } : {} } };
function ql(e, t) {
  var _a2;
  const n = {}, r = {};
  if (!e.cellStyle || e.cellStyle.length === 0) return { bgSx: n, textSx: r };
  const o = !e.cellStyleMode || e.cellStyleMode === "first-match", i = ((_a2 = e.format) == null ? void 0 : _a2.type) === "date" ? gl(t, e.format.dateInputFormat) : t;
  for (const l of e.cellStyle) if (l.logic && Wl(l.logic, i)) {
    if (l.backgroundColor && !("background" in n) && !("backgroundColor" in n)) {
      const s = it(l.backgroundColor);
      s ? n.background = s : n.backgroundColor = l.backgroundColor;
    }
    if (l.textColor && !("color" in r) && !("background" in r)) {
      const s = it(l.textColor);
      s ? (r.background = s, r.backgroundClip = "text", r.WebkitBackgroundClip = "text", r.color = "transparent") : r.color = l.textColor;
    }
    if (l.fontWeight && !r.fontWeight && (r.fontWeight = l.fontWeight), l.fontStyle && !r.fontStyle && (r.fontStyle = l.fontStyle), o) break;
  }
  return { bgSx: n, textSx: r };
}
function Ul(e, t) {
  let n = false, r;
  if (e == null ? r = "" : typeof e == "object" ? (n = true, r = JSON.stringify(e)) : r = String(e), !t) return { displayValue: r, textSx: {}, bgSx: {} };
  let o = {};
  if (t.format) try {
    o = Qr[t.format.type].format(e, { fmt: t.format, defaultDisplay: r });
  } catch {
  }
  const i = o.displayValue !== void 0 ? o.displayValue : r, l = o.textSx ?? {}, { bgSx: s, textSx: a } = ql(t, e);
  return { displayValue: i, image: o.image, isTruncated: n, textSx: { ...l, ...a }, bgSx: s };
}
function mr({ value: e, config: t, valueSize: n }) {
  var _a2;
  const { displayValue: r, textSx: o, bgSx: i, isTruncated: l, image: s } = H(() => Ul(e, t), [e, t]);
  if (s) {
    const a = t == null ? void 0 : t.align, c = a === "left" ? "flex-start" : a === "right" ? "flex-end" : "center", d = (_a2 = t == null ? void 0 : t.format) == null ? void 0 : _a2.imagePadding, p = d ? `${d.top ?? 0}px ${d.right ?? 0}px ${d.bottom ?? 0}px ${d.left ?? 0}px` : "0 8px";
    return u(F, { sx: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: c, padding: p, ...i }, children: u(Zr, { descriptor: s }) });
  }
  return b(F, { sx: { width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 0.5, padding: "0 8px", ...i }, children: [u(S, { variant: "body2", component: F, title: r, sx: { flex: 1, minWidth: 0, lineHeight: "inherit", ...n && { fontSize: n }, ...o }, dangerouslySetInnerHTML: { __html: r ?? "" } }), l && u(We, { label: "JSON", size: "small", sx: { height: 18, fontSize: "0.65rem", flexShrink: 0, opacity: 0.7 } })] });
}
function Zr({ descriptor: e }) {
  const { src: t, size: n, objectFit: r, variant: o, bgColor: i, borderColor: l, borderWidth: s, tint: a, tooltip: c, showBroken: d } = e, [p, g] = U(false);
  if (p) return d ? u(Wr, { sx: { fontSize: n, maxWidth: "100%", maxHeight: "100%", color: "text.disabled", opacity: 0.5 } }) : null;
  const f = { height: n, width: "auto", aspectRatio: "1 / 1", maxWidth: "100%", maxHeight: "100%", flexShrink: 0 }, m = o === "circular" ? "50%" : o === "rounded" ? "25%" : 0, y = l && s ? `${s}px solid ${l}` : void 0, _ = { ...f, bgcolor: i || "transparent", borderRadius: m, ...y ? { border: y } : {} };
  if (!t.startsWith("data:") && !No(t)) return u(fn, { variant: o, title: c, sx: { ..._, fontSize: n, lineHeight: 1, ...a ? { color: a } : {} }, children: t });
  if (a) {
    const C = `url("${t}")`, I = r === "fill" ? "100% 100%" : r;
    return u(fn, { variant: o, title: c, sx: _, children: u(F, { sx: { width: "100%", height: "100%", backgroundColor: a, WebkitMaskMode: "alpha", maskMode: "alpha", WebkitMaskImage: C, maskImage: C, WebkitMaskSize: I, maskSize: I, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" } }) });
  }
  return u(fn, { variant: o, src: t, alt: c ?? "", title: c, sx: { ..._, "& .MuiAvatar-img": { objectFit: r } }, slotProps: { img: { onError: () => g(true) } } });
}
const Jl = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Crect%20width='24'%20height='24'%20fill='%23000'/%3E%3C/svg%3E";
function Yl({ format: e, onChange: t }) {
  var _a2, _b, _c, _d;
  const n = Xr(Jl, e), r = (o, i) => {
    const l = parseInt(i, 10);
    t({ type: "image", imagePadding: { ...e.imagePadding, [o]: Number.isFinite(l) ? l : void 0 } });
  };
  return b(Le, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_image_format") }), b(ie, { direction: "row", spacing: 1, children: [u(X, { label: h.t("json_table_image_size"), type: "number", value: e.imageSize ?? "", onChange: (o) => {
    const i = parseInt(o.target.value, 10);
    t({ type: "image", imageSize: Number.isFinite(i) ? i : void 0 });
  }, size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 8, max: 256 } }, placeholder: "px" }), b(Ie, { size: "small", sx: { minWidth: 120 }, children: [u(Ae, { children: h.t("json_table_image_object_fit") }), b(Re, { label: h.t("json_table_image_object_fit"), value: e.imageObjectFit ?? "contain", onChange: (o) => t({ type: "image", imageObjectFit: o.target.value }), children: [u(O, { value: "contain", children: h.t("json_table_image_object_fit_contain") }), u(O, { value: "cover", children: h.t("json_table_image_object_fit_cover") }), u(O, { value: "fill", children: h.t("json_table_image_object_fit_fill") })] })] })] }), b(Ie, { size: "small", fullWidth: true, children: [u(Ae, { children: h.t("json_table_image_variant") }), b(Re, { label: h.t("json_table_image_variant"), value: e.imageVariant ?? "square", onChange: (o) => t({ type: "image", imageVariant: o.target.value }), children: [u(O, { value: "square", children: h.t("json_table_image_variant_square") }), u(O, { value: "circular", children: h.t("json_table_image_variant_circular") }), u(O, { value: "rounded", children: h.t("json_table_image_variant_rounded") })] })] }), u(mt, { label: h.t("json_table_image_bg_color"), value: e.imageBgColor ?? "", overridden: !!e.imageBgColor, onChange: (o) => t({ type: "image", imageBgColor: o || void 0 }) }), u(mt, { label: h.t("json_table_image_border_color"), value: e.imageBorderColor ?? "", overridden: !!e.imageBorderColor, onChange: (o) => t({ type: "image", imageBorderColor: o || void 0 }) }), u(X, { label: h.t("json_table_image_border_width"), type: "number", value: e.imageBorderWidth ?? "", onChange: (o) => {
    const i = parseInt(o.target.value, 10);
    t({ type: "image", imageBorderWidth: Number.isFinite(i) ? i : void 0 });
  }, size: "small", fullWidth: true, slotProps: { htmlInput: { min: 0, max: 16 } }, placeholder: "px" }), u(mt, { label: h.t("json_table_image_tint"), value: e.imageTint ?? "", overridden: !!e.imageTint, onChange: (o) => t({ type: "image", imageTint: o || void 0 }) }), u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_image_tint_hint") }), u(Zt, {}), u(Ge, { control: u(lt, { size: "small", checked: e.imageTooltip !== false, onChange: (o) => t({ type: "image", imageTooltip: o.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_image_tooltip") }) }), u(Ge, { control: u(lt, { size: "small", checked: e.imageShowBroken !== false, onChange: (o) => t({ type: "image", imageShowBroken: o.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_image_show_broken") }) }), u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_image_padding") }), b(ie, { direction: "row", spacing: 1, children: [u(X, { label: h.t("json_table_image_padding_top"), type: "number", value: ((_a2 = e.imagePadding) == null ? void 0 : _a2.top) ?? "", onChange: (o) => r("top", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(X, { label: h.t("json_table_image_padding_right"), type: "number", value: ((_b = e.imagePadding) == null ? void 0 : _b.right) ?? "", onChange: (o) => r("right", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(X, { label: h.t("json_table_image_padding_bottom"), type: "number", value: ((_c = e.imagePadding) == null ? void 0 : _c.bottom) ?? "", onChange: (o) => r("bottom", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(X, { label: h.t("json_table_image_padding_left"), type: "number", value: ((_d = e.imagePadding) == null ? void 0 : _d.left) ?? "", onChange: (o) => r("left", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" })] }), b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), b(F, { sx: { mt: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 2, height: 64 }, children: [u(Zr, { descriptor: n }), e.imageShowBroken !== false && u(Wr, { sx: { fontSize: e.imageSize ?? Cn.size, color: "text.disabled", opacity: 0.5 } })] })] })] });
}
const Kl = { eq: "json_table_op_eq", neq: "json_table_op_neq", gt: "json_table_op_gt", gte: "json_table_op_gte", lt: "json_table_op_lt", lte: "json_table_op_lte", contains: "json_table_op_contains", not_contains: "json_table_op_not_contains", starts_with: "json_table_op_starts_with", ends_with: "json_table_op_ends_with", empty: "json_table_op_empty", not_empty: "json_table_op_not_empty", is_true: "json_table_op_is_true", is_false: "json_table_op_is_false" };
function Xl({ label: e, value: t, onChange: n, inputType: r }) {
  const [o, i] = U(t);
  be(() => {
    i(t);
  }, [t]);
  const l = D(() => {
    o !== t && n(o);
  }, [o, t, n]);
  return u(X, { label: e, value: o, onChange: (s) => i(s.target.value), onBlur: l, size: "small", type: r, sx: { flex: 1, ...r === "date" && { '& input[type="date"]::-webkit-calendar-picker-indicator': { filter: "invert(0.5)", cursor: "pointer", opacity: 0.7, "&:hover": { opacity: 1 } } } }, InputLabelProps: r === "date" || r === "number" ? { shrink: true } : void 0, slotProps: r === "number" ? { htmlInput: { step: "any" } } : r === "date" ? { htmlInput: { placeholder: "YYYY-MM-DD" } } : void 0 });
}
function Ql({ logic: e, columnType: t, onChange: n }) {
  const [r, o] = U(() => hr(e));
  be(() => {
    o(hr(e));
  }, [e]);
  const i = El[t] ?? kl, l = D((g) => {
    o(g), n(Ll(g, t));
  }, [n, t]), s = D((g, f) => {
    const m = r.conditions.map((y, _) => _ === g ? { ...y, ...f } : y);
    l({ ...r, conditions: m });
  }, [r, l]), a = D((g) => {
    const f = r.conditions.filter((m, y) => y !== g);
    l({ ...r, conditions: f });
  }, [r, l]), c = D(() => {
    const g = i[0] ?? "eq";
    l({ ...r, conditions: [...r.conditions, { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, operator: g, operand: "" }] });
  }, [r, l, i]), d = D((g, f) => {
    f !== null && l({ ...r, mode: f });
  }, [r, l]), p = r.conditions.length > 1;
  return b(ie, { spacing: 1, children: [p && b(F, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [b(Lr, { value: r.mode, exclusive: true, onChange: d, size: "small", "aria-label": h.t("json_table_condition_mode_label"), children: [u(en, { value: "and", "aria-label": h.t("json_table_condition_mode_all"), children: h.t("json_table_condition_mode_all") }), u(en, { value: "or", "aria-label": h.t("json_table_condition_mode_any"), children: h.t("json_table_condition_mode_any") })] }), u(S, { variant: "caption", color: "text.secondary", children: r.mode === "and" ? h.t("json_table_condition_mode_hint_and") : h.t("json_table_condition_mode_hint_or") })] }), r.conditions.map((g, f) => {
    const m = !In.has(g.operator), y = t === "date" ? "date" : t === "number" ? "number" : "text";
    return b(F, { sx: { display: "flex", gap: 1, alignItems: "flex-start" }, children: [b(Ie, { size: "small", sx: { flex: m ? "0 0 auto" : 1, minWidth: 160 }, children: [u(Ae, { children: h.t("json_table_condition_operator") }), u(Re, { label: h.t("json_table_condition_operator"), value: g.operator, onChange: (_) => {
      const v = _.target.value, C = In.has(v) ? "" : g.operand;
      s(f, { operator: v, operand: C });
    }, children: i.map((_) => u(O, { value: _, children: h.t(Kl[_]) }, _)) })] }), m && u(Xl, { label: h.t("json_table_condition_value"), value: g.operand ?? "", onChange: (_) => s(f, { operand: _ }), inputType: y }), p && u(ve, { title: h.t("json_table_condition_remove"), children: u(oe, { size: "small", onClick: () => a(f), "aria-label": h.t("json_table_condition_remove"), sx: { mt: 0.5 }, children: u(tn, { fontSize: "small" }) }) })] }, g.id ?? f);
  }), u(Te, { startIcon: u(kr, {}), onClick: c, size: "small", variant: "text", sx: { alignSelf: "flex-start", textTransform: "none" }, "aria-label": h.t("json_table_condition_add"), children: p ? h.t("json_table_condition_add") : h.t("json_table_condition_add_first") })] });
}
function Zl({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
  const i = D((d, p) => {
    const g = [...e || []];
    g[d] = { ...g[d], ...p }, r(g);
  }, [e, r]), l = D((d) => {
    const p = [...e || []];
    p.splice(d, 1), r(p);
  }, [e, r]), s = D(() => {
    const d = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, backgroundColor: "", textColor: "", fontWeight: "normal", fontStyle: "normal" };
    r([...e || [], d]);
  }, [e, r]), a = D((d) => {
    if (d === 0) return;
    const p = [...e || []];
    [p[d - 1], p[d]] = [p[d], p[d - 1]], r(p);
  }, [e, r]), c = D((d) => {
    const p = e || [];
    if (d >= p.length - 1) return;
    const g = [...p];
    [g[d], g[d + 1]] = [g[d + 1], g[d]], r(g);
  }, [e, r]);
  return b(ie, { spacing: 1.5, children: [((e == null ? void 0 : e.length) ?? 0) >= 1 && b(F, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [b(Lr, { value: t ?? "first-match", exclusive: true, size: "small", onChange: (d, p) => {
    p && o(p);
  }, "aria-label": h.t("json_table_cell_style_mode_label"), children: [u(en, { value: "first-match", "aria-label": h.t("json_table_cell_style_mode_first"), children: h.t("json_table_cell_style_mode_first") }), u(en, { value: "all-match", "aria-label": h.t("json_table_cell_style_mode_all"), children: h.t("json_table_cell_style_mode_all") })] }), u(S, { variant: "caption", color: "text.secondary", children: (t ?? "first-match") === "first-match" ? h.t("json_table_cell_style_mode_hint_first") : h.t("json_table_cell_style_mode_hint_all") })] }), (e || []).length === 0 && b(F, { sx: { textAlign: "center", py: 2, px: 1, color: "text.secondary" }, children: [u(S, { variant: "body2", sx: { fontWeight: 500, mb: 0.5 }, children: h.t("json_table_no_style_rules") }), u(S, { variant: "caption", children: h.t("json_table_no_style_rules_hint") })] }), (e || []).map((d, p) => {
    const g = (e || []).length, f = d.backgroundColor ? it(d.backgroundColor) : void 0, m = d.textColor ? it(d.textColor) : void 0;
    return u(qe, { variant: "outlined", sx: { p: 1.5 }, children: b(ie, { spacing: 1.5, children: [b(F, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [u(F, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: b(S, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: [h.t("json_table_rule"), " ", p + 1] }) }), b(F, { sx: { display: "flex", gap: 0.5 }, children: [u(ve, { title: h.t("json_table_rule_move_up"), children: u("span", { children: u(oe, { size: "small", onClick: () => a(p), disabled: p === 0, "aria-label": h.t("json_table_rule_move_up"), children: u(Or, { fontSize: "small" }) }) }) }), u(ve, { title: h.t("json_table_rule_move_down"), children: u("span", { children: u(oe, { size: "small", onClick: () => c(p), disabled: p >= g - 1, "aria-label": h.t("json_table_rule_move_down"), children: u(Hr, { fontSize: "small" }) }) }) }), u(ve, { title: h.t("json_table_delete_rule"), children: u(oe, { size: "small", onClick: () => l(p), color: "error", "aria-label": h.t("json_table_delete_rule"), children: u(Eo, { fontSize: "small" }) }) })] })] }), u(Ql, { logic: d.logic, columnType: n, onChange: (y) => i(p, { logic: y }) }, d.id ?? p), b(ie, { direction: "row", spacing: 1, alignItems: "flex-start", children: [u(mt, { label: h.t("json_table_bg_color"), value: d.backgroundColor || "", overridden: !!d.backgroundColor, onChange: (y) => i(p, { backgroundColor: y || void 0 }) }), u(mt, { label: h.t("json_table_text_color"), value: d.textColor || "", overridden: !!d.textColor, onChange: (y) => i(p, { textColor: y || void 0 }) })] }), b(ie, { direction: "row", spacing: 1, children: [u(Ge, { control: u(jt, { checked: d.fontWeight === "bold", onChange: (y) => i(p, { fontWeight: y.target.checked ? "bold" : "normal" }), icon: u(cr, { sx: { opacity: 0.3 } }), checkedIcon: u(cr, { color: "primary" }), size: "small" }), label: u(S, { variant: "caption", children: h.t("json_table_bold") }) }), u(Ge, { control: u(jt, { checked: d.fontStyle === "italic", onChange: (y) => i(p, { fontStyle: y.target.checked ? "italic" : "normal" }), icon: u(nr, { sx: { opacity: 0.3 } }), checkedIcon: u(nr, { color: "primary" }), size: "small" }), label: u(S, { variant: "caption", children: h.t("json_table_italic") }) })] }), (d.backgroundColor || d.textColor || d.fontWeight === "bold" || d.fontStyle === "italic") && u(qe, { variant: "outlined", sx: { p: 1, ...d.backgroundColor ? f ? { background: f } : { backgroundColor: d.backgroundColor } : {}, fontWeight: d.fontWeight || "normal", fontStyle: d.fontStyle || "normal" }, children: u(S, { variant: "body2", sx: { ...d.textColor ? m ? { background: m, backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" } : { color: d.textColor } : { color: "inherit" } }, children: h.t("json_table_sample_value") }) })] }) }, d.id ?? p);
  }), ((e == null ? void 0 : e.length) ?? 0) >= 2 && u(S, { variant: "caption", color: "text.secondary", sx: { px: 0.5 }, children: (t ?? "first-match") === "first-match" ? h.t("json_table_rules_priority_hint") : h.t("json_table_rules_all_match_hint") }), u(Te, { startIcon: u(kr, {}), onClick: s, variant: "outlined", size: "small", fullWidth: true, children: h.t("json_table_add_style_rule") })] });
}
function es({ globalSorting: e, globalFiltering: t }) {
  return b(F, { sx: { p: 1, mb: 2, bgcolor: "action.hover", borderRadius: 1, border: 1, borderColor: "divider" }, children: [u(S, { variant: "caption", sx: { fontWeight: 500, display: "block", mb: 0.5 }, children: h.t("json_table_global_status") }), b(F, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: [u(We, { size: "small", icon: e ? u(rr, {}) : u(tn, {}), label: `${h.t("json_table_sorting")}: ${e ? h.t("json_table_status_on") : h.t("json_table_status_off")}`, color: e ? "success" : "default", variant: "outlined", sx: { fontSize: "0.7rem" } }), u(We, { size: "small", icon: t ? u(rr, {}) : u(tn, {}), label: `${h.t("json_table_filtering")}: ${t ? h.t("json_table_status_on") : h.t("json_table_status_off")}`, color: t ? "success" : "default", variant: "outlined", sx: { fontSize: "0.7rem" } })] })] });
}
function ot(e) {
  if (e == null) return "";
  if (typeof e == "object") try {
    return JSON.stringify(e).toLowerCase();
  } catch {
    return "[object Object]";
  }
  return String(e).toLowerCase();
}
function yr(e) {
  if (e == null) return null;
  if (e instanceof Date) {
    const t = e.getTime();
    return isNaN(t) ? null : t;
  }
  if (typeof e == "number") {
    const t = e >= 1e11 ? e : e * 1e3, n = new Date(t);
    return isNaN(n.getTime()) ? null : t;
  }
  if (typeof e == "string") {
    const t = e.trim();
    if (!t) return null;
    const n = t.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
    if (n) {
      const [, i, l, s, a = "0", c = "0", d = "0"] = n, p = new Date(parseInt(s, 10), parseInt(l, 10) - 1, parseInt(i, 10), parseInt(a, 10), parseInt(c, 10), parseInt(d, 10));
      return isNaN(p.getTime()) ? null : p.getTime();
    }
    const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
    if (r) {
      const [, i, l, s, a = "0", c = "0", d = "0"] = r, p = new Date(parseInt(s, 10), parseInt(i, 10) - 1, parseInt(l, 10), parseInt(a, 10), parseInt(c, 10), parseInt(d, 10));
      return isNaN(p.getTime()) ? null : p.getTime();
    }
    if (/^-?\d+$/.test(t)) {
      const i = parseInt(t, 10), l = i >= 1e11 ? i : i * 1e3, s = new Date(l);
      return isNaN(s.getTime()) ? null : l;
    }
    const o = new Date(t);
    return isNaN(o.getTime()) ? null : o.getTime();
  }
  return null;
}
function _r(e) {
  const t = new Date(e);
  return t.setHours(0, 0, 0, 0), t.getTime();
}
function ts(e, t, n) {
  if (e == null) return t === "isEmpty";
  if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
  if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
  if (typeof n == "boolean") {
    const c = typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
    if (c !== null) switch (t) {
      case "equals":
        return c === n;
      case "notEquals":
        return c !== n;
      default:
        return true;
    }
    return false;
  }
  const r = ot(e), o = ot(n), i = Number(e), l = Number(n), s = !isNaN(i) && !isNaN(l);
  if (["greaterThan", "greaterThanOrEqual", "lessThan", "lessThanOrEqual", "equals", "notEquals"].includes(t)) {
    const c = yr(e), d = yr(n);
    if (c !== null && d !== null) switch (t) {
      case "equals":
        return c === d;
      case "notEquals":
        return c !== d;
      case "greaterThan":
        return c > d;
      case "greaterThanOrEqual":
        return c >= d;
      case "lessThan":
        return c < d;
      case "lessThanOrEqual":
        return c <= d;
    }
  }
  switch (t) {
    case "contains":
      return r.includes(o);
    case "startsWith":
      return r.startsWith(o);
    case "endsWith":
      return r.endsWith(o);
    case "equals":
      return s ? i === l : r === o;
    case "notEquals":
      return s ? i !== l : r !== o;
    case "greaterThan":
      return s ? i > l : r > o;
    case "greaterThanOrEqual":
      return s ? i >= l : r >= o;
    case "lessThan":
      return s ? i < l : r < o;
    case "lessThanOrEqual":
      return s ? i <= l : r <= o;
    default:
      return true;
  }
}
function br(e, t, n, r) {
  if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
  if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
  const o = xn(e, r), i = xn(n, r);
  if (o === null || i === null) return false;
  const l = _r(o), s = _r(i);
  switch (t) {
    case "equals":
      return l === s;
    case "notEquals":
      return l !== s;
    case "greaterThan":
      return l > s;
    case "greaterThanOrEqual":
      return l >= s;
    case "lessThan":
      return l < s;
    case "lessThanOrEqual":
      return l <= s;
    default:
      return true;
  }
}
function vr(e) {
  return (t, n, r) => {
    if (r == null) return true;
    if (typeof r == "object" && r !== null && "operator" in r) {
      const o = r;
      return br(t.getValue(n), o.operator, o.value, e);
    }
    return typeof r == "string" || typeof r == "number" ? br(t.getValue(n), "equals", r, e) : true;
  };
}
const ns = (e, t, n) => {
  if (n == null) return true;
  if (typeof n == "string") {
    const o = e.getValue(t);
    return o == null ? false : ot(o).includes(n.toLowerCase());
  }
  if (typeof n == "number") {
    const o = e.getValue(t);
    if (o == null) return false;
    const i = Number(o);
    return isNaN(i) ? ot(o).includes(ot(n)) : i === n;
  }
  if (typeof n == "object" && n !== null && "operator" in n) {
    const o = n, i = e.getValue(t);
    return ts(i, o.operator, o.value);
  }
  const r = e.getValue(t);
  return r == null ? false : ot(r).includes(ot(n));
}, rs = { advanced: ns };
function Tt(e) {
  switch (e) {
    case "number":
    case "date":
      return { sortable: true, filterable: true, hiding: true };
    case "string":
      return { sortable: true, filterable: true, hiding: true };
    case "image":
      return { sortable: false, filterable: false, hiding: true };
    case "boolean":
      return { sortable: false, filterable: true, hiding: true };
    case "array":
    case "object":
      return { sortable: false, filterable: false, hiding: true };
    default:
      return { sortable: true, filterable: true, hiding: true };
  }
}
function os(e, t, n) {
  return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : Tt(t).sortable && n !== false;
}
function is(e, t, n) {
  return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : Tt(t).filterable && n === true;
}
function ls(e, t, n) {
  return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : Tt(t).hiding && n !== false;
}
function wr(e, t) {
  return xn(e, t) ?? 0;
}
function Sr(e) {
  return (t, n, r) => wr(t.getValue(r), e) - wr(n.getValue(r), e);
}
function ss(e) {
  const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: i, renderSelectionHeader: l, renderSelectionCell: s } = e, a = new Map(n.map((g) => [g.path, g.dateFormat])), c = new Map(n.map((g) => [g.path, g.type])), d = r.tableRowSelection && l && s ? { id: "__select__", size: 48, enableResizing: false, enableSorting: false, enableColumnFilter: false, enableHiding: false, header: ({ table: g }) => l(g), cell: ({ row: g }) => s(g), meta: { align: "center", width: 48 } } : null;
  let p;
  return t.length > 0 ? p = t.filter((g) => g.visible).map((g) => {
    var _a2, _b;
    const f = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), m = c.get(g.path) || "string", y = ((_b = g.format) == null ? void 0 : _b.type) === "date" || m === "date";
    return { id: g.path, size: g.width ?? 150, accessorFn: (v) => (v == null ? void 0 : v[g.path]) ?? null, header: g.headerName || g.path, enableSorting: os(g, m, r.tableSorting), enableColumnFilter: is(g, m, r.tableFiltering), enableHiding: ls(g, m, r.tableHiding), ...y && { sortingFn: Sr(f), filterFn: vr(f) }, cell: ({ getValue: v }) => o(v(), !g.format && m === "image" ? { ...g, format: { type: "image" } } : g), meta: { align: g.align || "left", width: g.width, columnType: y ? "date" : m } };
  }) : p = n.map((g) => {
    const f = g.type === "date" && g.dateFormat, m = g.dateFormat, y = Tt(g.type);
    return { id: g.path, size: 150, accessorFn: (v) => v[g.path], header: g.path.split(".").pop() || g.path, enableSorting: y.sortable && r.tableSorting, enableColumnFilter: y.filterable && r.tableFiltering, enableHiding: y.hiding && r.tableHiding, ...f && { sortingFn: Sr(m), filterFn: vr(m) }, cell: ({ getValue: v }) => {
      const C = v();
      return g.type === "image" ? o(C, { path: g.path, visible: true, headerName: g.path.split(".").pop() || g.path, format: { type: "image" } }) : i(C);
    }, meta: { align: g.type === "image" ? "center" : "left", columnType: g.type } };
  }), d ? [d, ...p] : p;
}
function Cr({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
  const i = t === "auto" || t === void 0, l = Tt(r), s = o === "sortable" ? l.sortable : l.filterable;
  let a, c;
  t === "auto" || t === void 0 ? (a = s && e, c = "json_table_source_auto") : (a = t, c = "json_table_source_override");
  const d = t !== void 0 && t !== "auto", p = (f, m) => f.replace(/\{(\w+)\}/g, (y, _) => _ in m ? m[_] : y);
  let g;
  return t === "auto" || t === void 0 ? g = p(h.t("json_table_auto_tooltip"), { feature: n, smart: s ? h.t("json_table_status_on") : h.t("json_table_status_off"), type: r }) : g = p(h.t("json_table_override_tooltip"), { feature: n }), u(ve, { title: g, arrow: true, children: b(F, { sx: { display: "flex", alignItems: "center", gap: 0.5, ml: "auto", cursor: "help" }, children: [u(We, { size: "small", label: u(F, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: a ? h.t("json_table_status_on") : h.t("json_table_status_off") }), color: a ? "success" : "default", variant: d ? "filled" : "outlined", sx: { height: 20, fontSize: "0.65rem", "& .MuiChip-label": { px: 0.75 } } }), b(S, { variant: "caption", color: d ? "warning.main" : "text.secondary", sx: { fontSize: "0.65rem", display: "flex", alignItems: "center", gap: 0.25 }, children: [h.t(c), i && u(il, { sx: { fontSize: 12, ml: 0.25 } }), d && u(Yo, { sx: { fontSize: 12, ml: 0.25 } })] })] }) });
}
function as({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
  var _a2, _b, _c, _d, _e2, _f, _g;
  const [i, l] = U({ basic: true, formatting: false, styling: false, advanced: false }), s = D((M) => {
    l((x) => ({ ...x, [M]: !x[M] }));
  }, []), a = (t == null ? void 0 : t.type) || "string", c = H(() => t ? Object.values(t.typeCounts).reduce((M, x) => M + x, 0) : 0, [t]), d = H(() => e.path.split(".").pop() || e.path, [e.path]), p = H(() => e.headerName !== d || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [e.headerName, e.width, e.align, e.visible, d]), g = D(() => {
    n({ ...e, headerName: d, width: void 0, align: void 0, visible: true });
  }, [e, n, d]), f = H(() => e.format !== void 0, [e.format]), m = D(() => {
    const { format: M, ...x } = e;
    n(x);
  }, [e, n]), y = H(() => {
    var _a3;
    return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
  }, [e.cellStyle, e.cellStyleMode]), _ = D(() => {
    const { cellStyle: M, cellStyleMode: x, ...$ } = e;
    n($);
  }, [e, n]), v = H(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [e.sortable, e.filterable]), C = D(() => {
    const { sortable: M, filterable: x, ...$ } = e;
    n({ ...$, sortable: "auto", filterable: "auto" });
  }, [e, n]), I = D((M) => {
    var _a3, _b2;
    const x = { ...e.format };
    if (M.type && M.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
      const $ = (_b2 = e.format) == null ? void 0 : _b2.type;
      $ === "number" ? (delete x.numberDecimals, delete x.numberPrefix, delete x.numberSuffix, delete x.numberThousandsSeparator) : $ === "date" ? (delete x.dateFormat, delete x.dateInputFormat) : $ === "boolean" ? (delete x.booleanTrue, delete x.booleanFalse) : $ === "string" ? ["stringCase", "stringPrefix", "stringSuffix", "stringTrim", "stringMaxLength", "stringRegex", "stringRegexGroup", "stringRegexFlags", "stringFontWeight", "stringFontStyle", "stringFontSize", "stringTextColor"].forEach((q) => {
        delete x[q];
      }) : $ === "image" && (delete x.imageSize, delete x.imageObjectFit, delete x.imageVariant, delete x.imageBgColor, delete x.imageBorderColor, delete x.imageBorderWidth, delete x.imageTint, delete x.imageTooltip, delete x.imageShowBroken, delete x.imagePadding);
    }
    n({ ...e, format: { ...x, ...M } });
  }, [e, n]), T = D((M) => {
    n({ ...e, cellStyle: M });
  }, [e, n]), P = D((M) => {
    n({ ...e, cellStyleMode: M });
  }, [e, n]);
  return b(F, { sx: { height: "100%", overflow: "auto", p: 2 }, children: [b(F, { sx: { display: "flex", alignItems: "center", gap: 1, mb: 2 }, children: [u(We, { label: a, size: "small", sx: { backgroundColor: At[a] || At.string, color: "#fff", fontWeight: 600, fontSize: "0.7rem" } }), u(S, { variant: "subtitle2", sx: { fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: e.path, children: e.path })] }), b(ie, { spacing: 1, children: [b(Bt, { expanded: i.basic, onChange: () => s("basic"), disableGutters: true, children: [u(Lt, { expandIcon: u(Vt, {}), children: b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_basic") }), u(ve, { title: h.t("json_table_section_reset"), children: u("span", { children: u(oe, { size: "small", disabled: !p, onClick: (M) => {
    M.stopPropagation(), g();
  }, "aria-label": h.t("json_table_section_reset"), children: u($t, { fontSize: "small" }) }) }) })] }) }), u(Wt, { children: b(ie, { spacing: 2, children: [u(X, { label: h.t("json_table_header_label"), value: e.headerName, onChange: (M) => n({ ...e, headerName: M.target.value }), fullWidth: true, size: "small" }), u(X, { label: h.t("json_table_width"), type: "number", value: e.width ?? "", onChange: (M) => n({ ...e, width: M.target.value ? parseInt(M.target.value, 10) : void 0 }), fullWidth: true, size: "small", placeholder: h.t("json_table_width_auto"), slotProps: { htmlInput: { min: 30 } } }), b(Ie, { fullWidth: true, size: "small", children: [u(Ae, { children: h.t("json_table_align") }), b(Re, { label: h.t("json_table_align"), value: e.align || "left", onChange: (M) => n({ ...e, align: M.target.value }), children: [u(O, { value: "left", children: h.t("json_table_align_left") }), u(O, { value: "center", children: h.t("json_table_align_center") }), u(O, { value: "right", children: h.t("json_table_align_right") })] })] }), u(Ge, { control: u(lt, { checked: e.visible, onChange: (M) => n({ ...e, visible: M.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_visible") }) })] }) })] }), b(Bt, { expanded: i.formatting, onChange: () => s("formatting"), disableGutters: true, children: [u(Lt, { expandIcon: u(Vt, {}), children: b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_formatting") }), u(ve, { title: h.t("json_table_section_reset"), children: u("span", { children: u(oe, { size: "small", disabled: !f, onClick: (M) => {
    M.stopPropagation(), m();
  }, "aria-label": h.t("json_table_section_reset"), children: u($t, { fontSize: "small" }) }) }) })] }) }), u(Wt, { children: b(ie, { spacing: 2, children: [b(Ie, { fullWidth: true, size: "small", children: [u(Ae, { children: h.t("json_table_format_type") }), b(Re, { value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto", label: h.t("json_table_format_type"), onChange: (M) => {
    const x = M.target.value;
    x === "auto" ? n({ ...e, format: void 0 }) : I({ type: x });
  }, children: [b(O, { value: "auto", children: [h.t("json_table_format_type_auto"), ` (${a})`] }), u(O, { value: "string", children: h.t("json_table_format_type_string") }), u(O, { value: "number", children: h.t("json_table_format_type_number") }), u(O, { value: "date", children: h.t("json_table_format_type_date") }), u(O, { value: "boolean", children: h.t("json_table_format_type_boolean") }), u(O, { value: "image", children: h.t("json_table_format_type_image") })] })] }), (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && u(pl, { format: e.format ?? { type: "number" }, onChange: I, discoveredColumn: t }), (a === "date" || ((_c = e.format) == null ? void 0 : _c.type) === "date") && u(hl, { format: e.format ?? { type: "date" }, detectedFormat: t == null ? void 0 : t.dateFormat, onChange: I }), (a === "boolean" || ((_d = e.format) == null ? void 0 : _d.type) === "boolean") && u(ml, { format: e.format ?? { type: "boolean" }, onChange: I }), (a === "string" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "string") && u(yl, { format: e.format ?? { type: "string" }, onChange: I }), (a === "image" || ((_f = e.format) == null ? void 0 : _f.type) === "image") && u(Yl, { format: e.format ?? { type: "image" }, onChange: I }), a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && a !== "image" && !e.format && u(S, { variant: "body2", color: "text.secondary", children: h.t("json_table_no_format_options") })] }) })] }), b(Bt, { expanded: i.styling, onChange: () => s("styling"), disableGutters: true, children: [u(Lt, { expandIcon: u(Vt, {}), children: b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [b(F, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_styling") }), (((_g = e.cellStyle) == null ? void 0 : _g.length) ?? 0) > 0 && u(We, { label: e.cellStyle.length, size: "small", color: "primary", sx: { height: 20, fontSize: "0.7rem" } })] }), u(ve, { title: h.t("json_table_section_reset"), children: u("span", { children: u(oe, { size: "small", disabled: !y, onClick: (M) => {
    M.stopPropagation(), _();
  }, "aria-label": h.t("json_table_section_reset"), children: u($t, { fontSize: "small" }) }) }) })] }) }), u(Wt, { children: u(Zl, { cellStyle: e.cellStyle || [], cellStyleMode: e.cellStyleMode ?? "first-match", columnType: a, onStyleChange: T, onModeChange: P }) })] }), b(Bt, { expanded: i.advanced, onChange: () => s("advanced"), disableGutters: true, children: [u(Lt, { expandIcon: u(Vt, {}), children: b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_advanced") }), u(ve, { title: h.t("json_table_section_reset"), children: u("span", { children: u(oe, { size: "small", disabled: !v, onClick: (M) => {
    M.stopPropagation(), C();
  }, "aria-label": h.t("json_table_section_reset"), children: u($t, { fontSize: "small" }) }) }) })] }) }), u(Wt, { children: b(ie, { spacing: 2, children: [u(es, { globalSorting: r, globalFiltering: o }), b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [b(Ie, { size: "small", sx: { minWidth: 120 }, children: [u(Ae, { children: h.t("json_table_sortable") }), b(Re, { value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto", label: h.t("json_table_sortable"), onChange: (M) => n({ ...e, sortable: M.target.value === "on" ? true : M.target.value === "off" ? false : "auto" }), children: [u(O, { value: "auto", children: u("em", { children: h.t("json_table_option_auto") }) }), u(O, { value: "on", children: h.t("json_table_option_on") }), u(O, { value: "off", children: h.t("json_table_option_off") })] })] }), u(Cr, { globalEnabled: r, columnOverride: e.sortable, featureLabel: h.t("json_table_sorting"), detectedType: t == null ? void 0 : t.type, featureType: "sortable" })] }), b(F, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [b(Ie, { size: "small", sx: { minWidth: 120 }, children: [u(Ae, { children: h.t("json_table_filterable") }), b(Re, { value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto", label: h.t("json_table_filterable"), onChange: (M) => n({ ...e, filterable: M.target.value === "on" ? true : M.target.value === "off" ? false : "auto" }), children: [u(O, { value: "auto", children: u("em", { children: h.t("json_table_option_auto") }) }), u(O, { value: "on", children: h.t("json_table_option_on") }), u(O, { value: "off", children: h.t("json_table_option_off") })] })] }), u(Cr, { globalEnabled: o, columnOverride: e.filterable, featureLabel: h.t("json_table_filtering"), detectedType: t == null ? void 0 : t.type, featureType: "filterable" })] }), t && b(qe, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500, display: "block", mb: 1 }, children: h.t("json_table_analysis_info") }), b(ie, { spacing: 0.5, children: [b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_type_label") }), u(We, { label: t.type, size: "small", sx: { backgroundColor: At[t.type], color: "#fff", height: 18, fontSize: "0.65rem" } })] }), b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_confidence") }), b(S, { variant: "caption", children: [Math.round(t.confidence * 100), "%"] })] }), b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_nulls") }), b(S, { variant: "caption", children: [t.nullCount, c > 0 && ` (${Math.round(t.nullCount / c * 100)}%)`] })] }), b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_distinct") }), u(S, { variant: "caption", children: t.distinctCount })] }), t.min !== void 0 && t.max !== void 0 && b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_range") }), b(S, { variant: "caption", children: [String(t.min), " \u2013 ", String(t.max)] })] }), t.dateFormat && b(F, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_date_input_format") }), u(S, { variant: "caption", children: t.dateFormat })] })] })] })] }) })] })] })] });
}
function us({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: i, socket: l }) {
  const [s, a] = U(n), [c, d] = U(null), [p, g] = U([]), [f, m] = U(false), [y, _] = U(false), [v, C] = U(null), [I, T] = U(null), P = he(false), M = he(() => Promise.resolve()), x = he(n), $ = H(() => JSON.stringify(n), [n]), B = H(() => JSON.stringify(s) !== $, [s, $]);
  be(() => {
    e && (a(n), x.current = n, d(n.length > 0 ? n[0].path : null), P.current = false, T(null), C(null));
  }, [e, n]), be(() => {
    e && !P.current && (P.current = true, M.current());
  }, [e]);
  const q = D(async () => {
    m(true), T(null), C(null);
    try {
      const w = i.oid;
      if (!w) return;
      const N = await l.getState(w);
      if ((N == null ? void 0 : N.val) === null || (N == null ? void 0 : N.val) === void 0) return;
      let k;
      const E = N.val;
      if (typeof E == "string") try {
        const Q = JSON.parse(E);
        k = Array.isArray(Q) ? Q : [Q];
      } catch {
        return;
      }
      else if (Array.isArray(E)) k = E;
      else if (typeof E == "object" && E !== null) k = [E];
      else return;
      const le = i.tableMaxDepth || 10, K = Ko(k, { maxDepth: le });
      if (K.meta.maxDepth > le) {
        const Q = h.t("json_table_depth_warning").replace("{{actual}}", String(K.meta.maxDepth)).replace("{{configured}}", String(le));
        C(Q);
      }
      g(K.columns);
      const rt = new Map(x.current.map((Q) => [Q.path, Q])), $e = new Set(K.columns.map((Q) => Q.path)), ze = x.current.filter((Q) => $e.has(Q.path)), at = K.columns.filter((Q) => !rt.has(Q.path)).map((Q) => ({ path: Q.path, visible: true, headerName: Q.path.split(".").pop() || Q.path, sortable: "auto", filterable: "auto" })), Ee = [...ze, ...at];
      a(Ee), x.current = Ee, d((Q) => Q === null && Ee.length > 0 ? Ee[0].path : Q);
    } catch (w) {
      const N = w instanceof Error ? w.message : "Failed to discover columns";
      T(N);
    } finally {
      m(false);
    }
  }, [i, l]);
  be(() => {
    M.current = q;
  }, [q]), be(() => {
    x.current = s;
  }, [s]);
  const J = D((w) => {
    a((N) => N.map((k) => k.path === w.path ? w : k));
  }, []), ce = D((w) => {
    a(w);
  }, []), de = D(() => {
    r(s), t();
  }, [s, r, t]), fe = D((w, N) => {
    if (N === "backdropClick" && B) {
      _(true);
      return;
    }
    t();
  }, [B, t]), ge = H(() => c ? s.find((w) => w.path === c) : null, [c, s]), me = H(() => c ? p.find((w) => w.path === c) : void 0, [c, p]), re = H(() => "json-table-column-editor-title", []);
  return b(To, { theme: o, children: [b(Nn, { open: e, onClose: fe, maxWidth: "lg", fullWidth: true, "aria-labelledby": re, slotProps: { paper: { sx: { height: "80vh", maxHeight: "900px" } } }, children: [u(En, { sx: { py: 1.5, px: 2.5 }, id: re, children: b(F, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [u(S, { variant: "h6", children: h.t("json_table_column_editor_title") }), u(oe, { onClick: () => fe(), size: "small", sx: { color: "text.secondary" }, "aria-label": h.t("close"), children: u(tn, {}) })] }) }), b(kn, { dividers: true, sx: { p: 0, display: "flex", flexDirection: "column", overflow: "hidden" }, children: [v && u(Jt, { severity: "warning", onClose: () => C(null), sx: { mx: 2, mt: 2 }, children: v }), I && u(Jt, { severity: "error", onClose: () => T(null), sx: { mx: 2, mt: 2 }, children: I }), b(F, { sx: { display: "flex", flex: 1, overflow: "hidden" }, children: [u(F, { sx: { width: "40%", minWidth: 280, borderRight: 1, borderColor: "divider", display: "flex", flexDirection: "column", overflow: "hidden" }, children: u(al, { columns: s, discoveredColumns: p, selectedPath: c, onSelect: d, onChange: ce, onRefresh: q, loading: f }) }), u(F, { sx: { width: "60%", display: "flex", flexDirection: "column", overflow: "hidden" }, children: ge ? u(as, { column: ge, discoveredColumn: me, onChange: J, globalSorting: i.tableSorting, globalFiltering: i.tableFiltering }) : u(F, { sx: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: u(S, { variant: "body2", color: "text.secondary", children: s.length > 0 ? h.t("json_table_select_column") : h.t("json_table_no_columns") }) }) })] })] }), b(Pn, { sx: { px: 2.5, py: 1.5 }, children: [u(Te, { onClick: () => fe(), children: h.t("cancel") }), u(Te, { variant: "contained", onClick: de, disabled: !B, children: h.t("save") })] })] }), u(Xo, { open: y, autoHideDuration: 3e3, onClose: () => _(false), anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: u(Jt, { severity: "warning", onClose: () => _(false), children: h.t("json_table_unsaved_changes") }) })] });
}
function cs(e, t, n, r) {
  const o = e.name || "columnConfig", i = r.context.theme, [l, s] = U(false), a = H(() => qr(t[o]), [t, o]), c = a.filter((_) => _.visible).length, d = a.length, p = a.some((_) => _.format), g = a.some((_) => _.cellStyle && _.cellStyle.length > 0), f = D((_) => {
    const v = JSON.stringify(_), C = `b64:${Qo(v)}`;
    n({ [o]: C });
  }, [o, n]), m = D(() => {
    s(true);
  }, []), y = D(() => {
    s(false);
  }, []);
  return b(F, { sx: { mt: 1, width: "100%" }, children: [u(Te, { variant: "outlined", startIcon: u(Zo, {}), onClick: m, fullWidth: true, sx: { textTransform: "none" }, "aria-label": h.t("json_table_configure_columns"), "aria-haspopup": "dialog", children: h.t("json_table_configure_columns") }), d > 0 && b(S, { variant: "caption", color: "primary.main", sx: { mt: 0.5, display: "block" }, "aria-live": "polite", children: [c, " / ", d, " ", h.t("json_table_columns_visible"), p && ` \xB7 ${h.t("json_table_has_formatting")}`, g && ` \xB7 ${h.t("json_table_has_styling")}`] }), u(us, { open: l, onClose: y, columns: a, onSave: f, theme: i, data: t, socket: r.context.socket })] });
}
const ds = () => [{ label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_column_config" }) }, { name: "columnConfig", label: "json_table_column_config_label", type: "custom", component: cs }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_features" }) }, { name: "tableSorting", type: "checkbox", label: "json_table_sorting", default: true, hidden: "data.tableShowHeader === false" }, { name: "tableSortingMulti", type: "checkbox", label: "json_table_sorting_multi", default: false, tooltip: "json_table_sorting_multi_tooltip", hidden: "data.tableShowHeader === false" }, { name: "tableFiltering", type: "checkbox", label: "json_table_filtering", default: true, tooltip: "json_table_filtering_tooltip", hidden: "data.tableShowHeader === false" }, { name: "tableQuickFilter", type: "checkbox", label: "json_table_quick_filter", default: false }, { name: "tableColumnMenu", type: "checkbox", label: "json_table_column_menu", default: true, hidden: "data.tableShowHeader === false" }, { name: "tableHiding", type: "checkbox", label: "json_table_hiding", default: true, tooltip: "json_table_hiding_tooltip", hidden: "data.tableShowHeader === false" }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_pagination" }) }, { name: "tablePagination", type: "checkbox", label: "json_table_pagination_enabled", default: true }, { name: "tablePageSize", type: "number", label: "json_table_page_size", default: 25, min: 1 }, { name: "tablePageSizeOptions", type: "text", label: "json_table_page_size_options", default: "10,25,50,100", tooltip: "json_table_page_size_options_tooltip" }, { name: "tableVirtualizeThreshold", type: "number", label: "json_table_virtualize_threshold", default: 50, min: 0, tooltip: "json_table_virtualize_threshold_tooltip" }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_selection" }) }, { name: "tableRowSelection", type: "checkbox", label: "json_table_row_selection", default: false }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_analysis" }) }, { name: "tableMaxDepth", type: "number", label: "json_table_max_depth", default: 10, min: 1, max: 50, tooltip: "json_table_max_depth_tooltip" }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_layout" }) }, { name: "tableDensity", label: "json_table_density", type: "select", options: [{ value: "compact", label: "compact" }, { value: "standard", label: "standard" }, { value: "comfortable", label: "comfortable" }], default: "standard", noTranslation: true }, { name: "tableRowHeight", type: "number", label: "json_table_row_height", min: 20, tooltip: "json_table_row_height_tooltip" }, { name: "tableShowHeader", type: "checkbox", label: "json_table_show_header", default: true, tooltip: "json_table_show_header_tooltip" }, { name: "tableHeaderHeight", type: "number", label: "json_table_header_height", min: 20, hidden: "data.tableShowHeader === false" }, { name: "tableHeaderElevation", label: "json_table_header_elevation", type: "slider", min: 0, max: 24, step: 1, default: 6, tooltip: "json_table_header_elevation_tooltip", hidden: "data.tableShowHeader === false" }, { name: "tableAutoSize", type: "checkbox", label: "json_table_auto_size", default: false }, { name: "jsonTablePadding", type: "number", label: "json_table_padding", default: 1, step: 0.5, min: 0 }, { label: "", type: "custom", component: () => u(xe, { dividerText: "group_table_border" }) }, { name: "borderWidth", label: "table_border_width", type: "slider", min: 0, max: 20, step: 1, default: 0 }, { name: "borderStyle", label: "table_border_style", type: "select", options: [{ value: "none", label: "none" }, { value: "dotted", label: "dotted" }, { value: "dashed", label: "dashed" }, { value: "solid", label: "solid" }, { value: "double", label: "double" }, { value: "groove", label: "groove" }, { value: "ridge", label: "ridge" }, { value: "inset", label: "inset" }, { value: "outset", label: "outset" }, { value: "hidden", label: "hidden" }], default: "solid", noTranslation: true }, Qe({ name: "borderColor", label: "table_border_color", noGradient: true }), { name: "borderRadius", label: "table_border_radius", type: "text", default: "" }, { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_header_style" }), hidden: "data.tableShowHeader === false" }, Qe({ name: "tableHeaderBgColor", label: "json_table_header_bg_color", hidden: "data.tableShowHeader === false" }), Qe({ name: "tableHeaderTextColor", label: "json_table_header_text_color", noGradient: true, hidden: "data.tableShowHeader === false" }), { name: "tableHeaderFontSize", type: "number", label: "json_table_header_font_size", min: 8, hidden: "data.tableShowHeader === false" }, { label: "", type: "custom", component: () => u(xe, {}), hidden: "data.tableShowHeader === false" }, { name: "headerBorderWidth", label: "json_table_header_border_width", type: "slider", min: 0, max: 10, step: 1, default: 0, hidden: "data.tableShowHeader === false" }, Qe({ name: "headerBorderColor", label: "json_table_header_border_color", noGradient: true, hidden: "data.tableShowHeader === false" }), { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_borders" }) }, { name: "tableShowCellBorders", type: "checkbox", label: "json_table_show_cell_borders", default: false }, { name: "verticalCellBorderWidth", label: "vertical_cell_border_width", type: "slider", min: 0, max: 10, step: 1, default: 1, hidden: "!data.tableShowCellBorders" }, Qe({ name: "verticalCellBorderColor", label: "vertical_cell_border_color", noGradient: true, hidden: "!data.tableShowCellBorders" }), { label: "", type: "custom", component: () => u(xe, {}) }, { name: "tableShowRowBorders", type: "checkbox", label: "json_table_show_row_borders", default: true }, { name: "horizontalCellBorderWidth", label: "horizontal_cell_border_width", type: "slider", min: 0, max: 10, step: 1, default: 1, hidden: "!data.tableShowRowBorders" }, Qe({ name: "horizontalCellBorderColor", label: "horizontal_cell_border_color", noGradient: true, hidden: "!data.tableShowRowBorders" }), { label: "", type: "custom", component: () => u(xe, { dividerText: "json_table_cell_style" }) }, Qe({ name: "evenRowColor", label: "json_table_even_row_color" }), Qe({ name: "oddRowColor", label: "json_table_odd_row_color" })];
function tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Se(e, t) {
  return (n) => {
    t.setState((r) => ({ ...r, [e]: tt(n, r[e]) }));
  };
}
function un(e) {
  return e instanceof Function;
}
function fs(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function gs(e, t) {
  const n = [], r = (o) => {
    o.forEach((i) => {
      n.push(i);
      const l = t(i);
      l != null && l.length && r(l);
    });
  };
  return r(e), n;
}
function j(e, t, n) {
  let r = [], o;
  return (i) => {
    let l;
    n.key && n.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== r.length || s.some((d, p) => r[p] !== d))) return o;
    r = s;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - c) * 100) / 100, g = p / 16, f = (m, y) => {
        for (m = String(m); m.length < y; ) m = " " + m;
        return m;
      };
      console.info(`%c\u23F1 ${f(p, 5)} /${f(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function z(e, t, n, r) {
  return { debug: () => {
    var o;
    return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
  }, key: false, onChange: r };
}
function ps(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = { id: `${t.id}_${n.id}`, row: t, column: n, getValue: () => t.getValue(r), renderValue: o, getContext: j(() => [e, n, t, i], (l, s, a, c) => ({ table: l, column: s, row: a, cell: c, getValue: c.getValue, renderValue: c.renderValue }), z(e.options, "debugCells")) };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function hs(e, t, n, r) {
  var o, i;
  const s = { ...e._getDefaultColumnDef(), ...t }, a = s.accessorKey;
  let c = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, d;
  if (s.accessorFn ? d = s.accessorFn : a && (a.includes(".") ? d = (g) => {
    let f = g;
    for (const y of a.split(".")) {
      var m;
      f = (m = f) == null ? void 0 : m[y];
    }
    return f;
  } : d = (g) => g[s.accessorKey]), !c) throw new Error();
  let p = { id: `${String(c)}`, accessorFn: d, parent: r, depth: n, columnDef: s, columns: [], getFlatColumns: j(() => [true], () => {
    var g;
    return [p, ...(g = p.columns) == null ? void 0 : g.flatMap((f) => f.getFlatColumns())];
  }, z(e.options, "debugColumns")), getLeafColumns: j(() => [e._getOrderColumnsFn()], (g) => {
    var f;
    if ((f = p.columns) != null && f.length) {
      let m = p.columns.flatMap((y) => y.getLeafColumns());
      return g(m);
    }
    return [p];
  }, z(e.options, "debugColumns")) };
  for (const g of e._features) g.createColumn == null || g.createColumn(p, e);
  return p;
}
const se = "debugHeaders";
function xr(e, t, n) {
  var r;
  let i = { id: (r = n.id) != null ? r : t.id, column: t, index: n.index, isPlaceholder: !!n.isPlaceholder, placeholderId: n.placeholderId, depth: n.depth, subHeaders: [], colSpan: 0, rowSpan: 0, headerGroup: null, getLeafHeaders: () => {
    const l = [], s = (a) => {
      a.subHeaders && a.subHeaders.length && a.subHeaders.map(s), l.push(a);
    };
    return s(i), l;
  }, getContext: () => ({ table: e, header: i, column: t }) };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const ms = { createTable: (e) => {
  e.getHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
    var i, l;
    const s = (i = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? l : [], c = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
    return Gt(t, [...s, ...c, ...a], e);
  }, z(e.options, se)), e.getCenterHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Gt(t, n, e, "center")), z(e.options, se)), e.getLeftHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
    var o;
    const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
    return Gt(t, i, e, "left");
  }, z(e.options, se)), e.getRightHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
    var o;
    const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
    return Gt(t, i, e, "right");
  }, z(e.options, se)), e.getFooterGroups = j(() => [e.getHeaderGroups()], (t) => [...t].reverse(), z(e.options, se)), e.getLeftFooterGroups = j(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), z(e.options, se)), e.getCenterFooterGroups = j(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), z(e.options, se)), e.getRightFooterGroups = j(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), z(e.options, se)), e.getFlatHeaders = j(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), z(e.options, se)), e.getLeftFlatHeaders = j(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), z(e.options, se)), e.getCenterFlatHeaders = j(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), z(e.options, se)), e.getRightFlatHeaders = j(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), z(e.options, se)), e.getCenterLeafHeaders = j(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), z(e.options, se)), e.getLeftLeafHeaders = j(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), z(e.options, se)), e.getRightLeafHeaders = j(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), z(e.options, se)), e.getLeafHeaders = j(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
    var o, i, l, s, a, c;
    return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (c = r[0]) == null ? void 0 : c.headers) != null ? a : []].map((d) => d.getLeafHeaders()).flat();
  }, z(e.options, se));
} };
function Gt(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(g, f) {
    f === void 0 && (f = 1), l = Math.max(l, f), g.filter((m) => m.getIsVisible()).forEach((m) => {
      var y;
      (y = m.columns) != null && y.length && s(m.columns, f + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const c = (g, f) => {
    const m = { depth: f, id: [r, `${f}`].filter(Boolean).join("_"), headers: [] }, y = [];
    g.forEach((_) => {
      const v = [...y].reverse()[0], C = _.column.depth === m.depth;
      let I, T = false;
      if (C && _.column.parent ? I = _.column.parent : (I = _.column, T = true), v && (v == null ? void 0 : v.column) === I) v.subHeaders.push(_);
      else {
        const P = xr(n, I, { id: [r, f, I.id, _ == null ? void 0 : _.id].filter(Boolean).join("_"), isPlaceholder: T, placeholderId: T ? `${y.filter((M) => M.column === I).length}` : void 0, depth: f, index: y.length });
        P.subHeaders.push(_), y.push(P);
      }
      m.headers.push(_), _.headerGroup = m;
    }), a.push(m), f > 0 && c(y, f - 1);
  }, d = t.map((g, f) => xr(n, g, { depth: l, index: f }));
  c(d, l - 1), a.reverse();
  const p = (g) => g.filter((m) => m.column.getIsVisible()).map((m) => {
    let y = 0, _ = 0, v = [0];
    m.subHeaders && m.subHeaders.length ? (v = [], p(m.subHeaders).forEach((I) => {
      let { colSpan: T, rowSpan: P } = I;
      y += T, v.push(P);
    })) : y = 1;
    const C = Math.min(...v);
    return _ = _ + C, m.colSpan = y, m.rowSpan = _, { colSpan: y, rowSpan: _ };
  });
  return p((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const On = (e, t, n, r, o, i, l) => {
  let s = { id: t, index: r, original: n, depth: o, parentId: l, _valuesCache: {}, _uniqueValuesCache: {}, getValue: (a) => {
    if (s._valuesCache.hasOwnProperty(a)) return s._valuesCache[a];
    const c = e.getColumn(a);
    if (c != null && c.accessorFn) return s._valuesCache[a] = c.accessorFn(s.original, r), s._valuesCache[a];
  }, getUniqueValues: (a) => {
    if (s._uniqueValuesCache.hasOwnProperty(a)) return s._uniqueValuesCache[a];
    const c = e.getColumn(a);
    if (c != null && c.accessorFn) return c.columnDef.getUniqueValues ? (s._uniqueValuesCache[a] = c.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[a]) : (s._uniqueValuesCache[a] = [s.getValue(a)], s._uniqueValuesCache[a]);
  }, renderValue: (a) => {
    var c;
    return (c = s.getValue(a)) != null ? c : e.options.renderFallbackValue;
  }, subRows: [], getLeafRows: () => gs(s.subRows, (a) => a.subRows), getParentRow: () => s.parentId ? e.getRow(s.parentId, true) : void 0, getParentRows: () => {
    let a = [], c = s;
    for (; ; ) {
      const d = c.getParentRow();
      if (!d) break;
      a.push(d), c = d;
    }
    return a.reverse();
  }, getAllCells: j(() => [e.getAllLeafColumns()], (a) => a.map((c) => ps(e, s, c, c.id)), z(e.options, "debugRows")), _getAllCellsByColumnId: j(() => [s.getAllCells()], (a) => a.reduce((c, d) => (c[d.column.id] = d, c), {}), z(e.options, "debugRows")) };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(s, e);
  }
  return s;
}, ys = { createColumn: (e, t) => {
  e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
    if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
  };
} }, eo = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
eo.autoRemove = (e) => je(e);
const to = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
to.autoRemove = (e) => je(e);
const no = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
no.autoRemove = (e) => je(e);
const ro = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
ro.autoRemove = (e) => je(e);
const oo = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
oo.autoRemove = (e) => je(e) || !(e != null && e.length);
const io = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
io.autoRemove = (e) => je(e) || !(e != null && e.length);
const lo = (e, t, n) => e.getValue(t) === n;
lo.autoRemove = (e) => je(e);
const so = (e, t, n) => e.getValue(t) == n;
so.autoRemove = (e) => je(e);
const Hn = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Hn.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Hn.autoRemove = (e) => je(e) || je(e[0]) && je(e[1]);
const He = { includesString: eo, includesStringSensitive: to, equalsString: no, arrIncludes: ro, arrIncludesAll: oo, arrIncludesSome: io, equals: lo, weakEquals: so, inNumberRange: Hn };
function je(e) {
  return e == null || e === "";
}
const _s = { getDefaultColumnDef: () => ({ filterFn: "auto" }), getInitialState: (e) => ({ columnFilters: [], ...e }), getDefaultOptions: (e) => ({ onColumnFiltersChange: Se("columnFilters", e), filterFromLeafRows: false, maxLeafRowFilterDepth: 100 }), createColumn: (e, t) => {
  e.getAutoFilterFn = () => {
    const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
    return typeof r == "string" ? He.includesString : typeof r == "number" ? He.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? He.equals : Array.isArray(r) ? He.arrIncludes : He.weakEquals;
  }, e.getFilterFn = () => {
    var n, r;
    return un(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : He[e.columnDef.filterFn];
  }, e.getCanFilter = () => {
    var n, r, o;
    return ((n = e.columnDef.enableColumnFilter) != null ? n : true) && ((r = t.options.enableColumnFilters) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && !!e.accessorFn;
  }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
    var n;
    return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
  }, e.getFilterIndex = () => {
    var n, r;
    return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
  }, e.setFilterValue = (n) => {
    t.setColumnFilters((r) => {
      const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), l = tt(n, i ? i.value : void 0);
      if (Rr(o, l, e)) {
        var s;
        return (s = r == null ? void 0 : r.filter((d) => d.id !== e.id)) != null ? s : [];
      }
      const a = { id: e.id, value: l };
      if (i) {
        var c;
        return (c = r == null ? void 0 : r.map((d) => d.id === e.id ? a : d)) != null ? c : [];
      }
      return r != null && r.length ? [...r, a] : [a];
    });
  };
}, createRow: (e, t) => {
  e.columnFilters = {}, e.columnFiltersMeta = {};
}, createTable: (e) => {
  e.setColumnFilters = (t) => {
    const n = e.getAllLeafColumns(), r = (o) => {
      var i;
      return (i = tt(t, o)) == null ? void 0 : i.filter((l) => {
        const s = n.find((a) => a.id === l.id);
        if (s) {
          const a = s.getFilterFn();
          if (Rr(a, l.value, s)) return false;
        }
        return true;
      });
    };
    e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
  }, e.resetColumnFilters = (t) => {
    var n, r;
    e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
  }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
} };
function Rr(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
}
const bs = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), vs = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, ws = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ss = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Cs = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, xs = (e, t) => {
  if (!t.length) return;
  const n = t.map((i) => i.getValue(e));
  if (!fs(n)) return;
  if (n.length === 1) return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Rs = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ms = (e, t) => new Set(t.map((n) => n.getValue(e))).size, $s = (e, t) => t.length, mn = { sum: bs, min: vs, max: ws, extent: Ss, mean: Cs, median: xs, unique: Rs, uniqueCount: Ms, count: $s }, Is = { getDefaultColumnDef: () => ({ aggregatedCell: (e) => {
  var t, n;
  return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
}, aggregationFn: "auto" }), getInitialState: (e) => ({ grouping: [], ...e }), getDefaultOptions: (e) => ({ onGroupingChange: Se("grouping", e), groupedColumnMode: "reorder" }), createColumn: (e, t) => {
  e.toggleGrouping = () => {
    t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
  }, e.getCanGroup = () => {
    var n, r;
    return ((n = e.columnDef.enableGrouping) != null ? n : true) && ((r = t.options.enableGrouping) != null ? r : true) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
  }, e.getIsGrouped = () => {
    var n;
    return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
  }, e.getGroupedIndex = () => {
    var n;
    return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
  }, e.getToggleGroupingHandler = () => {
    const n = e.getCanGroup();
    return () => {
      n && e.toggleGrouping();
    };
  }, e.getAutoAggregationFn = () => {
    const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
    if (typeof r == "number") return mn.sum;
    if (Object.prototype.toString.call(r) === "[object Date]") return mn.extent;
  }, e.getAggregationFn = () => {
    var n, r;
    if (!e) throw new Error();
    return un(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : mn[e.columnDef.aggregationFn];
  };
}, createTable: (e) => {
  e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
    var n, r;
    e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
  }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
}, createRow: (e, t) => {
  e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
    if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
    const r = t.getColumn(n);
    return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
  }, e._groupingValuesCache = {};
}, createCell: (e, t, n, r) => {
  e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
    var o;
    return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
  };
} };
function As(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const Fs = { getInitialState: (e) => ({ columnOrder: [], ...e }), getDefaultOptions: (e) => ({ onColumnOrderChange: Se("columnOrder", e) }), createColumn: (e, t) => {
  e.getIndex = j((n) => [Ft(t, n)], (n) => n.findIndex((r) => r.id === e.id), z(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
    var r;
    return ((r = Ft(t, n)[0]) == null ? void 0 : r.id) === e.id;
  }, e.getIsLastColumn = (n) => {
    var r;
    const o = Ft(t, n);
    return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
  };
}, createTable: (e) => {
  e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
    var n;
    e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
  }, e._getOrderColumnsFn = j(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
    let i = [];
    if (!(t != null && t.length)) i = o;
    else {
      const l = [...t], s = [...o];
      for (; s.length && l.length; ) {
        const a = l.shift(), c = s.findIndex((d) => d.id === a);
        c > -1 && i.push(s.splice(c, 1)[0]);
      }
      i = [...i, ...s];
    }
    return As(i, n, r);
  }, z(e.options, "debugTable"));
} }, yn = () => ({ left: [], right: [] }), js = { getInitialState: (e) => ({ columnPinning: yn(), ...e }), getDefaultOptions: (e) => ({ onColumnPinningChange: Se("columnPinning", e) }), createColumn: (e, t) => {
  e.pin = (n) => {
    const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
    t.setColumnPinning((o) => {
      var i, l;
      if (n === "right") {
        var s, a;
        return { left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))), right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((p) => !(r != null && r.includes(p))), ...r] };
      }
      if (n === "left") {
        var c, d;
        return { left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((p) => !(r != null && r.includes(p))), ...r], right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((p) => !(r != null && r.includes(p))) };
      }
      return { left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))), right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p))) };
    });
  }, e.getCanPin = () => e.getLeafColumns().some((r) => {
    var o, i, l;
    return ((o = r.columnDef.enablePinning) != null ? o : true) && ((i = (l = t.options.enableColumnPinning) != null ? l : t.options.enablePinning) != null ? i : true);
  }), e.getIsPinned = () => {
    const n = e.getLeafColumns().map((s) => s.id), { left: r, right: o } = t.getState().columnPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
    return i ? "left" : l ? "right" : false;
  }, e.getPinnedIndex = () => {
    var n, r;
    const o = e.getIsPinned();
    return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
  };
}, createRow: (e, t) => {
  e.getCenterVisibleCells = j(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
    const i = [...r ?? [], ...o ?? []];
    return n.filter((l) => !i.includes(l.column.id));
  }, z(t.options, "debugRows")), e.getLeftVisibleCells = j(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "left" })), z(t.options, "debugRows")), e.getRightVisibleCells = j(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "right" })), z(t.options, "debugRows"));
}, createTable: (e) => {
  e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
    var n, r;
    return e.setColumnPinning(t ? yn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : yn());
  }, e.getIsSomeColumnsPinned = (t) => {
    var n;
    const r = e.getState().columnPinning;
    if (!t) {
      var o, i;
      return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
    }
    return !!((n = r[t]) != null && n.length);
  }, e.getLeftLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), z(e.options, "debugColumns")), e.getRightLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), z(e.options, "debugColumns")), e.getCenterLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
    const o = [...n ?? [], ...r ?? []];
    return t.filter((i) => !o.includes(i.id));
  }, z(e.options, "debugColumns"));
} };
function zs(e) {
  return e || (typeof document < "u" ? document : null);
}
const qt = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER }, _n = () => ({ startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] }), Ds = { getDefaultColumnDef: () => qt, getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: _n(), ...e }), getDefaultOptions: (e) => ({ columnResizeMode: "onEnd", columnResizeDirection: "ltr", onColumnSizingChange: Se("columnSizing", e), onColumnSizingInfoChange: Se("columnSizingInfo", e) }), createColumn: (e, t) => {
  e.getSize = () => {
    var n, r, o;
    const i = t.getState().columnSizing[e.id];
    return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : qt.minSize, (r = i ?? e.columnDef.size) != null ? r : qt.size), (o = e.columnDef.maxSize) != null ? o : qt.maxSize);
  }, e.getStart = j((n) => [n, Ft(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), z(t.options, "debugColumns")), e.getAfter = j((n) => [n, Ft(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), z(t.options, "debugColumns")), e.resetSize = () => {
    t.setColumnSizing((n) => {
      let { [e.id]: r, ...o } = n;
      return o;
    });
  }, e.getCanResize = () => {
    var n, r;
    return ((n = e.columnDef.enableResizing) != null ? n : true) && ((r = t.options.enableColumnResizing) != null ? r : true);
  }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
}, createHeader: (e, t) => {
  e.getSize = () => {
    let n = 0;
    const r = (o) => {
      if (o.subHeaders.length) o.subHeaders.forEach(r);
      else {
        var i;
        n += (i = o.column.getSize()) != null ? i : 0;
      }
    };
    return r(e), n;
  }, e.getStart = () => {
    if (e.index > 0) {
      const n = e.headerGroup.headers[e.index - 1];
      return n.getStart() + n.getSize();
    }
    return 0;
  }, e.getResizeHandler = (n) => {
    const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
    return (i) => {
      if (!r || !o || (i.persist == null || i.persist(), bn(i) && i.touches && i.touches.length > 1)) return;
      const l = e.getSize(), s = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[r.id, r.getSize()]], a = bn(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (v, C) => {
        typeof C == "number" && (t.setColumnSizingInfo((I) => {
          var T, P;
          const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, x = (C - ((T = I == null ? void 0 : I.startOffset) != null ? T : 0)) * M, $ = Math.max(x / ((P = I == null ? void 0 : I.startSize) != null ? P : 0), -0.999999);
          return I.columnSizingStart.forEach((B) => {
            let [q, J] = B;
            c[q] = Math.round(Math.max(J + J * $, 0) * 100) / 100;
          }), { ...I, deltaOffset: x, deltaPercentage: $ };
        }), (t.options.columnResizeMode === "onChange" || v === "end") && t.setColumnSizing((I) => ({ ...I, ...c })));
      }, p = (v) => d("move", v), g = (v) => {
        d("end", v), t.setColumnSizingInfo((C) => ({ ...C, isResizingColumn: false, startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, columnSizingStart: [] }));
      }, f = zs(n), m = { moveHandler: (v) => p(v.clientX), upHandler: (v) => {
        f == null ? void 0 : f.removeEventListener("mousemove", m.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", m.upHandler), g(v.clientX);
      } }, y = { moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), p(v.touches[0].clientX), false), upHandler: (v) => {
        var C;
        f == null ? void 0 : f.removeEventListener("touchmove", y.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", y.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), g((C = v.touches[0]) == null ? void 0 : C.clientX);
      } }, _ = Ts() ? { passive: false } : false;
      bn(i) ? (f == null ? void 0 : f.addEventListener("touchmove", y.moveHandler, _), f == null ? void 0 : f.addEventListener("touchend", y.upHandler, _)) : (f == null ? void 0 : f.addEventListener("mousemove", m.moveHandler, _), f == null ? void 0 : f.addEventListener("mouseup", m.upHandler, _)), t.setColumnSizingInfo((v) => ({ ...v, startOffset: a, startSize: l, deltaOffset: 0, deltaPercentage: 0, columnSizingStart: s, isResizingColumn: r.id }));
    };
  };
}, createTable: (e) => {
  e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
    var n;
    e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
  }, e.resetHeaderSizeInfo = (t) => {
    var n;
    e.setColumnSizingInfo(t ? _n() : (n = e.initialState.columnSizingInfo) != null ? n : _n());
  }, e.getTotalSize = () => {
    var t, n;
    return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
  }, e.getLeftTotalSize = () => {
    var t, n;
    return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
  }, e.getCenterTotalSize = () => {
    var t, n;
    return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
  }, e.getRightTotalSize = () => {
    var t, n;
    return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
  };
} };
let Ut = null;
function Ts() {
  if (typeof Ut == "boolean") return Ut;
  let e = false;
  try {
    const t = { get passive() {
      return e = true, false;
    } }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = false;
  }
  return Ut = e, Ut;
}
function bn(e) {
  return e.type === "touchstart";
}
const Ps = { getInitialState: (e) => ({ columnVisibility: {}, ...e }), getDefaultOptions: (e) => ({ onColumnVisibilityChange: Se("columnVisibility", e) }), createColumn: (e, t) => {
  e.toggleVisibility = (n) => {
    e.getCanHide() && t.setColumnVisibility((r) => ({ ...r, [e.id]: n ?? !e.getIsVisible() }));
  }, e.getIsVisible = () => {
    var n, r;
    const o = e.columns;
    return (n = o.length ? o.some((i) => i.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : true;
  }, e.getCanHide = () => {
    var n, r;
    return ((n = e.columnDef.enableHiding) != null ? n : true) && ((r = t.options.enableHiding) != null ? r : true);
  }, e.getToggleVisibilityHandler = () => (n) => {
    e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
  };
}, createRow: (e, t) => {
  e._getAllVisibleCells = j(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), z(t.options, "debugRows")), e.getVisibleCells = j(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], z(t.options, "debugRows"));
}, createTable: (e) => {
  const t = (n, r) => j(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), z(e.options, "debugColumns"));
  e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
    var r;
    e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
  }, e.toggleAllColumnsVisible = (n) => {
    var r;
    n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, i) => ({ ...o, [i.id]: n || !(i.getCanHide != null && i.getCanHide()) }), {}));
  }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
    var r;
    e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
  };
} };
function Ft(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Ns = { createTable: (e) => {
  e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
    if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
  };
} }, Es = { getInitialState: (e) => ({ globalFilter: void 0, ...e }), getDefaultOptions: (e) => ({ onGlobalFilterChange: Se("globalFilter", e), globalFilterFn: "auto", getColumnCanGlobalFilter: (t) => {
  var n;
  const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
  return typeof r == "string" || typeof r == "number";
} }), createColumn: (e, t) => {
  e.getCanGlobalFilter = () => {
    var n, r, o, i;
    return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((r = t.options.enableGlobalFilter) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : true) && !!e.accessorFn;
  };
}, createTable: (e) => {
  e.getGlobalAutoFilterFn = () => He.includesString, e.getGlobalFilterFn = () => {
    var t, n;
    const { globalFilterFn: r } = e.options;
    return un(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : He[r];
  }, e.setGlobalFilter = (t) => {
    e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
  }, e.resetGlobalFilter = (t) => {
    e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
  };
} }, ks = { getInitialState: (e) => ({ expanded: {}, ...e }), getDefaultOptions: (e) => ({ onExpandedChange: Se("expanded", e), paginateExpandedRows: true }), createTable: (e) => {
  let t = false, n = false;
  e._autoResetExpanded = () => {
    var r, o;
    if (!t) {
      e._queue(() => {
        t = true;
      });
      return;
    }
    if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
      if (n) return;
      n = true, e._queue(() => {
        e.resetExpanded(), n = false;
      });
    }
  }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
    r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(true) : e.setExpanded({});
  }, e.resetExpanded = (r) => {
    var o, i;
    e.setExpanded(r ? {} : (o = (i = e.initialState) == null ? void 0 : i.expanded) != null ? o : {});
  }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
    r.persist == null || r.persist(), e.toggleAllRowsExpanded();
  }, e.getIsSomeRowsExpanded = () => {
    const r = e.getState().expanded;
    return r === true || Object.values(r).some(Boolean);
  }, e.getIsAllRowsExpanded = () => {
    const r = e.getState().expanded;
    return typeof r == "boolean" ? r === true : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
  }, e.getExpandedDepth = () => {
    let r = 0;
    return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
      const l = i.split(".");
      r = Math.max(r, l.length);
    }), r;
  }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
}, createRow: (e, t) => {
  e.toggleExpanded = (n) => {
    t.setExpanded((r) => {
      var o;
      const i = r === true ? true : !!(r != null && r[e.id]);
      let l = {};
      if (r === true ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
        l[s] = true;
      }) : l = r, n = (o = n) != null ? o : !i, !i && n) return { ...l, [e.id]: true };
      if (i && !n) {
        const { [e.id]: s, ...a } = l;
        return a;
      }
      return r;
    });
  }, e.getIsExpanded = () => {
    var n;
    const r = t.getState().expanded;
    return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === true || (r == null ? void 0 : r[e.id]));
  }, e.getCanExpand = () => {
    var n, r, o;
    return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : true) && !!((o = e.subRows) != null && o.length);
  }, e.getIsAllParentsExpanded = () => {
    let n = true, r = e;
    for (; n && r.parentId; ) r = t.getRow(r.parentId, true), n = r.getIsExpanded();
    return n;
  }, e.getToggleExpandedHandler = () => {
    const n = e.getCanExpand();
    return () => {
      n && e.toggleExpanded();
    };
  };
} }, An = 0, Fn = 10, vn = () => ({ pageIndex: An, pageSize: Fn }), Os = { getInitialState: (e) => ({ ...e, pagination: { ...vn(), ...e == null ? void 0 : e.pagination } }), getDefaultOptions: (e) => ({ onPaginationChange: Se("pagination", e) }), createTable: (e) => {
  let t = false, n = false;
  e._autoResetPageIndex = () => {
    var r, o;
    if (!t) {
      e._queue(() => {
        t = true;
      });
      return;
    }
    if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
      if (n) return;
      n = true, e._queue(() => {
        e.resetPageIndex(), n = false;
      });
    }
  }, e.setPagination = (r) => {
    const o = (i) => tt(r, i);
    return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
  }, e.resetPagination = (r) => {
    var o;
    e.setPagination(r ? vn() : (o = e.initialState.pagination) != null ? o : vn());
  }, e.setPageIndex = (r) => {
    e.setPagination((o) => {
      let i = tt(r, o.pageIndex);
      const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
      return i = Math.max(0, Math.min(i, l)), { ...o, pageIndex: i };
    });
  }, e.resetPageIndex = (r) => {
    var o, i;
    e.setPageIndex(r ? An : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : An);
  }, e.resetPageSize = (r) => {
    var o, i;
    e.setPageSize(r ? Fn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Fn);
  }, e.setPageSize = (r) => {
    e.setPagination((o) => {
      const i = Math.max(1, tt(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
      return { ...o, pageIndex: s, pageSize: i };
    });
  }, e.setPageCount = (r) => e.setPagination((o) => {
    var i;
    let l = tt(r, (i = e.options.pageCount) != null ? i : -1);
    return typeof l == "number" && (l = Math.max(-1, l)), { ...o, pageCount: l };
  }), e.getPageOptions = j(() => [e.getPageCount()], (r) => {
    let o = [];
    return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
  }, z(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
    const { pageIndex: r } = e.getState().pagination, o = e.getPageCount();
    return o === -1 ? true : o === 0 ? false : r < o - 1;
  }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
    var r;
    return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
  }, e.getRowCount = () => {
    var r;
    return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
  };
} }, wn = () => ({ top: [], bottom: [] }), Hs = { getInitialState: (e) => ({ rowPinning: wn(), ...e }), getDefaultOptions: (e) => ({ onRowPinningChange: Se("rowPinning", e) }), createRow: (e, t) => {
  e.pin = (n, r, o) => {
    const i = r ? e.getLeafRows().map((a) => {
      let { id: c } = a;
      return c;
    }) : [], l = o ? e.getParentRows().map((a) => {
      let { id: c } = a;
      return c;
    }) : [], s = /* @__PURE__ */ new Set([...l, e.id, ...i]);
    t.setRowPinning((a) => {
      var c, d;
      if (n === "bottom") {
        var p, g;
        return { top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((y) => !(s != null && s.has(y))), bottom: [...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((y) => !(s != null && s.has(y))), ...Array.from(s)] };
      }
      if (n === "top") {
        var f, m;
        return { top: [...((f = a == null ? void 0 : a.top) != null ? f : []).filter((y) => !(s != null && s.has(y))), ...Array.from(s)], bottom: ((m = a == null ? void 0 : a.bottom) != null ? m : []).filter((y) => !(s != null && s.has(y))) };
      }
      return { top: ((c = a == null ? void 0 : a.top) != null ? c : []).filter((y) => !(s != null && s.has(y))), bottom: ((d = a == null ? void 0 : a.bottom) != null ? d : []).filter((y) => !(s != null && s.has(y))) };
    });
  }, e.getCanPin = () => {
    var n;
    const { enableRowPinning: r, enablePinning: o } = t.options;
    return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : true;
  }, e.getIsPinned = () => {
    const n = [e.id], { top: r, bottom: o } = t.getState().rowPinning, i = n.some((s) => r == null ? void 0 : r.includes(s)), l = n.some((s) => o == null ? void 0 : o.includes(s));
    return i ? "top" : l ? "bottom" : false;
  }, e.getPinnedIndex = () => {
    var n, r;
    const o = e.getIsPinned();
    if (!o) return -1;
    const i = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((l) => {
      let { id: s } = l;
      return s;
    });
    return (r = i == null ? void 0 : i.indexOf(e.id)) != null ? r : -1;
  };
}, createTable: (e) => {
  e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
    var n, r;
    return e.setRowPinning(t ? wn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : wn());
  }, e.getIsSomeRowsPinned = (t) => {
    var n;
    const r = e.getState().rowPinning;
    if (!t) {
      var o, i;
      return !!((o = r.top) != null && o.length || (i = r.bottom) != null && i.length);
    }
    return !!((n = r[t]) != null && n.length);
  }, e._getPinnedRows = (t, n, r) => {
    var o;
    return ((o = e.options.keepPinnedRows) == null || o ? (n ?? []).map((l) => {
      const s = e.getRow(l, true);
      return s.getIsAllParentsExpanded() ? s : null;
    }) : (n ?? []).map((l) => t.find((s) => s.id === l))).filter(Boolean).map((l) => ({ ...l, position: r }));
  }, e.getTopRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), z(e.options, "debugRows")), e.getBottomRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), z(e.options, "debugRows")), e.getCenterRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
    const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
    return t.filter((i) => !o.has(i.id));
  }, z(e.options, "debugRows"));
} }, Bs = { getInitialState: (e) => ({ rowSelection: {}, ...e }), getDefaultOptions: (e) => ({ onRowSelectionChange: Se("rowSelection", e), enableRowSelection: true, enableMultiRowSelection: true, enableSubRowSelection: true }), createTable: (e) => {
  e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
    var n;
    return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
  }, e.toggleAllRowsSelected = (t) => {
    e.setRowSelection((n) => {
      t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
      const r = { ...n }, o = e.getPreGroupedRowModel().flatRows;
      return t ? o.forEach((i) => {
        i.getCanSelect() && (r[i.id] = true);
      }) : o.forEach((i) => {
        delete r[i.id];
      }), r;
    });
  }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
    const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = { ...n };
    return e.getRowModel().rows.forEach((i) => {
      jn(o, i.id, r, true, e);
    }), o;
  }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = j(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Sn(e, n) : { rows: [], flatRows: [], rowsById: {} }, z(e.options, "debugTable")), e.getFilteredSelectedRowModel = j(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Sn(e, n) : { rows: [], flatRows: [], rowsById: {} }, z(e.options, "debugTable")), e.getGroupedSelectedRowModel = j(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Sn(e, n) : { rows: [], flatRows: [], rowsById: {} }, z(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
    const t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState();
    let r = !!(t.length && Object.keys(n).length);
    return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = false), r;
  }, e.getIsAllPageRowsSelected = () => {
    const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), { rowSelection: n } = e.getState();
    let r = !!t.length;
    return r && t.some((o) => !n[o.id]) && (r = false), r;
  }, e.getIsSomeRowsSelected = () => {
    var t;
    const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
    return n > 0 && n < e.getFilteredRowModel().flatRows.length;
  }, e.getIsSomePageRowsSelected = () => {
    const t = e.getPaginationRowModel().flatRows;
    return e.getIsAllPageRowsSelected() ? false : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
  }, e.getToggleAllRowsSelectedHandler = () => (t) => {
    e.toggleAllRowsSelected(t.target.checked);
  }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
    e.toggleAllPageRowsSelected(t.target.checked);
  };
}, createRow: (e, t) => {
  e.toggleSelected = (n, r) => {
    const o = e.getIsSelected();
    t.setRowSelection((i) => {
      var l;
      if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n) return i;
      const s = { ...i };
      return jn(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : true, t), s;
    });
  }, e.getIsSelected = () => {
    const { rowSelection: n } = t.getState();
    return Bn(e, n);
  }, e.getIsSomeSelected = () => {
    const { rowSelection: n } = t.getState();
    return zn(e, n) === "some";
  }, e.getIsAllSubRowsSelected = () => {
    const { rowSelection: n } = t.getState();
    return zn(e, n) === "all";
  }, e.getCanSelect = () => {
    var n;
    return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : true;
  }, e.getCanSelectSubRows = () => {
    var n;
    return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : true;
  }, e.getCanMultiSelect = () => {
    var n;
    return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : true;
  }, e.getToggleSelectedHandler = () => {
    const n = e.getCanSelect();
    return (r) => {
      var o;
      n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
    };
  };
} }, jn = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, true);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = true)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => jn(e, s.id, n, r, o));
};
function Sn(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var c;
      const d = Bn(a, n);
      if (d && (r.push(a), o[a.id] = a), (c = a.subRows) != null && c.length && (a = { ...a, subRows: i(a.subRows) }), d) return a;
    }).filter(Boolean);
  };
  return { rows: i(t.rows), flatRows: r, rowsById: o };
}
function Bn(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : false;
}
function zn(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return false;
  let o = true, i = false;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (Bn(l, t) ? i = true : o = false), l.subRows && l.subRows.length)) {
      const s = zn(l, t);
      s === "all" ? i = true : (s === "some" && (i = true), o = false);
    }
  }), o ? "all" : i ? "some" : false;
}
const Dn = /([0-9]+)/gm, Ls = (e, t, n) => ao(nt(e.getValue(n)).toLowerCase(), nt(t.getValue(n)).toLowerCase()), Vs = (e, t, n) => ao(nt(e.getValue(n)), nt(t.getValue(n))), Ws = (e, t, n) => Ln(nt(e.getValue(n)).toLowerCase(), nt(t.getValue(n)).toLowerCase()), Gs = (e, t, n) => Ln(nt(e.getValue(n)), nt(t.getValue(n))), qs = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, Us = (e, t, n) => Ln(e.getValue(n), t.getValue(n));
function Ln(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function nt(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ao(e, t) {
  const n = e.split(Dn).filter(Boolean), r = t.split(Dn).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), i = r.shift(), l = parseInt(o, 10), s = parseInt(i, 10), a = [l, s].sort();
    if (isNaN(a[0])) {
      if (o > i) return 1;
      if (i > o) return -1;
      continue;
    }
    if (isNaN(a[1])) return isNaN(l) ? -1 : 1;
    if (l > s) return 1;
    if (s > l) return -1;
  }
  return n.length - r.length;
}
const Rt = { alphanumeric: Ls, alphanumericCaseSensitive: Vs, text: Ws, textCaseSensitive: Gs, datetime: qs, basic: Us }, Js = { getInitialState: (e) => ({ sorting: [], ...e }), getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }), getDefaultOptions: (e) => ({ onSortingChange: Se("sorting", e), isMultiSortEvent: (t) => t.shiftKey }), createColumn: (e, t) => {
  e.getAutoSortingFn = () => {
    const n = t.getFilteredRowModel().flatRows.slice(10);
    let r = false;
    for (const o of n) {
      const i = o == null ? void 0 : o.getValue(e.id);
      if (Object.prototype.toString.call(i) === "[object Date]") return Rt.datetime;
      if (typeof i == "string" && (r = true, i.split(Dn).length > 1)) return Rt.alphanumeric;
    }
    return r ? Rt.text : Rt.basic;
  }, e.getAutoSortDir = () => {
    const n = t.getFilteredRowModel().flatRows[0];
    return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
  }, e.getSortingFn = () => {
    var n, r;
    if (!e) throw new Error();
    return un(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Rt[e.columnDef.sortingFn];
  }, e.toggleSorting = (n, r) => {
    const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
    t.setSorting((l) => {
      const s = l == null ? void 0 : l.find((f) => f.id === e.id), a = l == null ? void 0 : l.findIndex((f) => f.id === e.id);
      let c = [], d, p = i ? n : o === "desc";
      if (l != null && l.length && e.getCanMultiSort() && r ? s ? d = "toggle" : d = "add" : l != null && l.length && a !== l.length - 1 ? d = "replace" : s ? d = "toggle" : d = "replace", d === "toggle" && (i || o || (d = "remove")), d === "add") {
        var g;
        c = [...l, { id: e.id, desc: p }], c.splice(0, c.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
      } else d === "toggle" ? c = l.map((f) => f.id === e.id ? { ...f, desc: p } : f) : d === "remove" ? c = l.filter((f) => f.id !== e.id) : c = [{ id: e.id, desc: p }];
      return c;
    });
  }, e.getFirstSortDir = () => {
    var n, r;
    return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
  }, e.getNextSortingOrder = (n) => {
    var r, o;
    const i = e.getFirstSortDir(), l = e.getIsSorted();
    return l ? l !== i && ((r = t.options.enableSortingRemoval) == null || r) && (!(n && (o = t.options.enableMultiRemove) != null) || o) ? false : l === "desc" ? "asc" : "desc" : i;
  }, e.getCanSort = () => {
    var n, r;
    return ((n = e.columnDef.enableSorting) != null ? n : true) && ((r = t.options.enableSorting) != null ? r : true) && !!e.accessorFn;
  }, e.getCanMultiSort = () => {
    var n, r;
    return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
  }, e.getIsSorted = () => {
    var n;
    const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
    return r ? r.desc ? "desc" : "asc" : false;
  }, e.getSortIndex = () => {
    var n, r;
    return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
  }, e.clearSorting = () => {
    t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
  }, e.getToggleSortingHandler = () => {
    const n = e.getCanSort();
    return (r) => {
      n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : false));
    };
  };
}, createTable: (e) => {
  e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
    var n, r;
    e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
  }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
} }, Ys = [ms, Ps, Fs, js, ys, _s, Ns, Es, Js, Is, ks, Os, Hs, Bs, Ds];
function Ks(e) {
  var t, n;
  const r = [...Ys, ...(t = e._features) != null ? t : []];
  let o = { _features: r };
  const i = o._features.reduce((g, f) => Object.assign(g, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), l = (g) => o.options.mergeOptions ? o.options.mergeOptions(i, g) : { ...i, ...g };
  let a = { ...{}, ...(n = e.initialState) != null ? n : {} };
  o._features.forEach((g) => {
    var f;
    a = (f = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? f : a;
  });
  const c = [];
  let d = false;
  const p = { _features: r, options: { ...i, ...e }, initialState: a, _queue: (g) => {
    c.push(g), d || (d = true, Promise.resolve().then(() => {
      for (; c.length; ) c.shift()();
      d = false;
    }).catch((f) => setTimeout(() => {
      throw f;
    })));
  }, reset: () => {
    o.setState(o.initialState);
  }, setOptions: (g) => {
    const f = tt(g, o.options);
    o.options = l(f);
  }, getState: () => o.options.state, setState: (g) => {
    o.options.onStateChange == null || o.options.onStateChange(g);
  }, _getRowId: (g, f, m) => {
    var y;
    return (y = o.options.getRowId == null ? void 0 : o.options.getRowId(g, f, m)) != null ? y : `${m ? [m.id, f].join(".") : f}`;
  }, getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()), getRowModel: () => o.getPaginationRowModel(), getRow: (g, f) => {
    let m = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
    if (!m && (m = o.getCoreRowModel().rowsById[g], !m)) throw new Error();
    return m;
  }, _getDefaultColumnDef: j(() => [o.options.defaultColumn], (g) => {
    var f;
    return g = (f = g) != null ? f : {}, { header: (m) => {
      const y = m.header.column.columnDef;
      return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null;
    }, cell: (m) => {
      var y, _;
      return (y = (_ = m.renderValue()) == null || _.toString == null ? void 0 : _.toString()) != null ? y : null;
    }, ...o._features.reduce((m, y) => Object.assign(m, y.getDefaultColumnDef == null ? void 0 : y.getDefaultColumnDef()), {}), ...g };
  }, z(e, "debugColumns")), _getColumnDefs: () => o.options.columns, getAllColumns: j(() => [o._getColumnDefs()], (g) => {
    const f = function(m, y, _) {
      return _ === void 0 && (_ = 0), m.map((v) => {
        const C = hs(o, v, _, y), I = v;
        return C.columns = I.columns ? f(I.columns, C, _ + 1) : [], C;
      });
    };
    return f(g);
  }, z(e, "debugColumns")), getAllFlatColumns: j(() => [o.getAllColumns()], (g) => g.flatMap((f) => f.getFlatColumns()), z(e, "debugColumns")), _getAllFlatColumnsById: j(() => [o.getAllFlatColumns()], (g) => g.reduce((f, m) => (f[m.id] = m, f), {}), z(e, "debugColumns")), getAllLeafColumns: j(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, f) => {
    let m = g.flatMap((y) => y.getLeafColumns());
    return f(m);
  }, z(e, "debugColumns")), getColumn: (g) => o._getAllFlatColumnsById()[g] };
  Object.assign(o, p);
  for (let g = 0; g < o._features.length; g++) {
    const f = o._features[g];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function Xs() {
  return (e) => j(() => [e.options.data], (t) => {
    const n = { rows: [], flatRows: [], rowsById: {} }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let c = 0; c < o.length; c++) {
        const d = On(e, e._getRowId(o[c], c, l), o[c], c, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, s.push(d), e.options.getSubRows) {
          var a;
          d.originalSubRows = e.options.getSubRows(o[c], c), (a = d.originalSubRows) != null && a.length && (d.subRows = r(d.originalSubRows, i + 1, d));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, z(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Qs(e) {
  const t = [], n = (r) => {
    var o;
    t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
  };
  return e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById };
}
function Zs(e, t, n) {
  return n.options.filterFromLeafRows ? ea(e, t, n) : ta(e, t, n);
}
function ea(e, t, n) {
  var r;
  const o = [], i = {}, l = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, s = function(a, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let g = 0; g < a.length; g++) {
      var p;
      let f = a[g];
      const m = On(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
      if (m.columnFilters = f.columnFilters, (p = f.subRows) != null && p.length && c < l) {
        if (m.subRows = s(f.subRows, c + 1), f = m, t(f) && !m.subRows.length) {
          d.push(f), i[f.id] = f, o.push(f);
          continue;
        }
        if (t(f) || m.subRows.length) {
          d.push(f), i[f.id] = f, o.push(f);
          continue;
        }
      } else f = m, t(f) && (d.push(f), i[f.id] = f, o.push(f));
    }
    return d;
  };
  return { rows: s(e), flatRows: o, rowsById: i };
}
function ta(e, t, n) {
  var r;
  const o = [], i = {}, l = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, s = function(a, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let g = 0; g < a.length; g++) {
      let f = a[g];
      if (t(f)) {
        var p;
        if ((p = f.subRows) != null && p.length && c < l) {
          const y = On(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
          y.subRows = s(f.subRows, c + 1), f = y;
        }
        d.push(f), o.push(f), i[f.id] = f;
      }
    }
    return d;
  };
  return { rows: s(e), flatRows: o, rowsById: i };
}
function na() {
  return (e) => j(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
      return t;
    }
    const o = [], i = [];
    (n ?? []).forEach((g) => {
      var f;
      const m = e.getColumn(g.id);
      if (!m) return;
      const y = m.getFilterFn();
      y && o.push({ id: g.id, filterFn: y, resolvedValue: (f = y.resolveFilterValue == null ? void 0 : y.resolveFilterValue(g.value)) != null ? f : g.value });
    });
    const l = (n ?? []).map((g) => g.id), s = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
    r && s && a.length && (l.push("__global__"), a.forEach((g) => {
      var f;
      i.push({ id: g.id, filterFn: s, resolvedValue: (f = s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(r)) != null ? f : r });
    }));
    let c, d;
    for (let g = 0; g < t.flatRows.length; g++) {
      const f = t.flatRows[g];
      if (f.columnFilters = {}, o.length) for (let m = 0; m < o.length; m++) {
        c = o[m];
        const y = c.id;
        f.columnFilters[y] = c.filterFn(f, y, c.resolvedValue, (_) => {
          f.columnFiltersMeta[y] = _;
        });
      }
      if (i.length) {
        for (let m = 0; m < i.length; m++) {
          d = i[m];
          const y = d.id;
          if (d.filterFn(f, y, d.resolvedValue, (_) => {
            f.columnFiltersMeta[y] = _;
          })) {
            f.columnFilters.__global__ = true;
            break;
          }
        }
        f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
      }
    }
    const p = (g) => {
      for (let f = 0; f < l.length; f++) if (g.columnFilters[l[f]] === false) return false;
      return true;
    };
    return Zs(t.rows, p, e);
  }, z(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function ra(e) {
  return (t) => j(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
    if (!r.rows.length) return r;
    const { pageSize: o, pageIndex: i } = n;
    let { rows: l, flatRows: s, rowsById: a } = r;
    const c = o * i, d = c + o;
    l = l.slice(c, d);
    let p;
    t.options.paginateExpandedRows ? p = { rows: l, flatRows: s, rowsById: a } : p = Qs({ rows: l, flatRows: s, rowsById: a }), p.flatRows = [];
    const g = (f) => {
      p.flatRows.push(f), f.subRows.length && f.subRows.forEach(g);
    };
    return p.rows.forEach(g), p;
  }, z(t.options, "debugTable"));
}
function oa() {
  return (e) => j(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length)) return n;
    const r = e.getState().sorting, o = [], i = r.filter((a) => {
      var c;
      return (c = e.getColumn(a.id)) == null ? void 0 : c.getCanSort();
    }), l = {};
    i.forEach((a) => {
      const c = e.getColumn(a.id);
      c && (l[a.id] = { sortUndefined: c.columnDef.sortUndefined, invertSorting: c.columnDef.invertSorting, sortingFn: c.getSortingFn() });
    });
    const s = (a) => {
      const c = a.map((d) => ({ ...d }));
      return c.sort((d, p) => {
        for (let f = 0; f < i.length; f += 1) {
          var g;
          const m = i[f], y = l[m.id], _ = y.sortUndefined, v = (g = m == null ? void 0 : m.desc) != null ? g : false;
          let C = 0;
          if (_) {
            const I = d.getValue(m.id), T = p.getValue(m.id), P = I === void 0, M = T === void 0;
            if (P || M) {
              if (_ === "first") return P ? -1 : 1;
              if (_ === "last") return P ? 1 : -1;
              C = P && M ? 0 : P ? _ : -_;
            }
          }
          if (C === 0 && (C = y.sortingFn(d, p, m.id)), C !== 0) return v && (C *= -1), y.invertSorting && (C *= -1), C;
        }
        return d.index - p.index;
      }), c.forEach((d) => {
        var p;
        o.push(d), (p = d.subRows) != null && p.length && (d.subRows = s(d.subRows));
      }), c;
    };
    return { rows: s(n.rows), flatRows: o, rowsById: n.rowsById };
  }, z(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
function Mt(e, t) {
  return e ? ia(e) ? Tr(e, t) : e : null;
}
function ia(e) {
  return la(e) || typeof e == "function" || sa(e);
}
function la(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function sa(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function aa(e) {
  const t = { state: {}, onStateChange: () => {
  }, renderFallbackValue: null, ...e }, [n] = U(() => ({ current: Ks(t) })), [r, o] = U(() => n.current.initialState);
  return n.current.setOptions((i) => ({ ...i, ...e, state: { ...r, ...e.state }, onStateChange: (l) => {
    o(l), e.onStateChange == null || e.onStateChange(l);
  } })), n.current;
}
function ft(e, t, n) {
  let r = n.initialDeps ?? [], o, i = true;
  function l() {
    var s, a, c;
    let d;
    n.key && ((s = n.debug) != null && s.call(n)) && (d = Date.now());
    const p = e();
    if (!(p.length !== r.length || p.some((m, y) => r[y] !== m))) return o;
    r = p;
    let f;
    if (n.key && ((a = n.debug) != null && a.call(n)) && (f = Date.now()), o = t(...p), n.key && ((c = n.debug) != null && c.call(n))) {
      const m = Math.round((Date.now() - d) * 100) / 100, y = Math.round((Date.now() - f) * 100) / 100, _ = y / 16, v = (C, I) => {
        for (C = String(C); C.length < I; ) C = " " + C;
        return C;
      };
      console.info(`%c\u23F1 ${v(y, 5)} /${v(m, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return (n == null ? void 0 : n.onChange) && !(i && n.skipInitialOnChange) && n.onChange(o), i = false, o;
  }
  return l.updateDeps = (s) => {
    r = s;
  }, l;
}
function Mr(e, t) {
  if (e === void 0) throw new Error("Unexpected undefined");
  return e;
}
const ua = (e, t) => Math.abs(e - t) < 1.01, ca = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, $r = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, da = (e) => e, fa = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++) r.push(o);
  return r;
}, ga = (e, t) => {
  const n = e.scrollElement;
  if (!n) return;
  const r = e.targetWindow;
  if (!r) return;
  const o = (l) => {
    const { width: s, height: a } = l;
    t({ width: Math.round(s), height: Math.round(a) });
  };
  if (o($r(n)), !r.ResizeObserver) return () => {
  };
  const i = new r.ResizeObserver((l) => {
    const s = () => {
      const a = l[0];
      if (a == null ? void 0 : a.borderBoxSize) {
        const c = a.borderBoxSize[0];
        if (c) {
          o({ width: c.inlineSize, height: c.blockSize });
          return;
        }
      }
      o($r(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Ir = { passive: true }, Ar = typeof window > "u" ? true : "onscrollend" in window, pa = (e, t) => {
  const n = e.scrollElement;
  if (!n) return;
  const r = e.targetWindow;
  if (!r) return;
  let o = 0;
  const i = e.options.useScrollendEvent && Ar ? () => {
  } : ca(r, () => {
    t(o, false);
  }, e.options.isScrollingResetDelay), l = (d) => () => {
    const { horizontal: p, isRtl: g } = e.options;
    o = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(o, d);
  }, s = l(true), a = l(false);
  n.addEventListener("scroll", s, Ir);
  const c = e.options.useScrollendEvent && Ar;
  return c && n.addEventListener("scrollend", a, Ir), () => {
    n.removeEventListener("scroll", s), c && n.removeEventListener("scrollend", a);
  };
}, ha = (e, t, n) => {
  if (t == null ? void 0 : t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, ma = (e, { adjustments: t = 0, behavior: n }, r) => {
  var o, i;
  const l = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, { [r.options.horizontal ? "left" : "top"]: l, behavior: n });
};
class ya {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
        o.forEach((i) => {
          const l = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      }));
      return { disconnect: () => {
        var o;
        (o = r()) == null || o.disconnect(), n = null;
      }, observe: (o) => {
        var i;
        return (i = r()) == null ? void 0 : i.observe(o, { box: "border-box" });
      }, unobserve: (o) => {
        var i;
        return (i = r()) == null ? void 0 : i.unobserve(o);
      } };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, o]) => {
        typeof o > "u" && delete n[r];
      }), this.options = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: da, rangeExtractor: fa, onChange: () => {
      }, measureElement: ha, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: "data-index", initialMeasurementsCache: [], lanes: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, ...n };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = ft(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (n) => {
      this.notify(n);
    }, { key: false, debug: () => this.options.debug, initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null] }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((o) => {
          this.observer.observe(o);
        }), this.unsubs.push(this.options.observeElementRect(this, (o) => {
          this.scrollRect = o, this.maybeNotify();
        })), this.unsubs.push(this.options.observeElementOffset(this, (o, i) => {
          this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = i, this.maybeNotify();
        })), this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 });
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
      const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let l = r - 1; l >= 0; l--) {
        const s = n[l];
        if (o.has(s.lane)) continue;
        const a = i.get(s.lane);
        if (a == null || s.end > a.end ? i.set(s.lane, s) : s.end < a.end && o.set(s.lane, true), o.size === this.options.lanes) break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((l, s) => l.end === s.end ? l.index - s.index : l.end - s.end)[0] : void 0;
    }, this.getMeasurementOptions = ft(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (n, r, o, i, l, s) => (this.prevLanes !== void 0 && this.prevLanes !== s && (this.lanesChangedFlag = true), this.prevLanes = s, this.pendingMeasuredCacheIndexes = [], { count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l, lanes: s }), { key: false }), this.getMeasurements = ft(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l, lanes: s }, a) => {
      if (!l) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
        this.itemSizeCache.set(g.key, g.size);
      }));
      const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
      const d = this.measurementsCache.slice(0, c), p = new Array(s).fill(void 0);
      for (let g = 0; g < c; g++) {
        const f = d[g];
        f && (p[f.lane] = g);
      }
      for (let g = c; g < n; g++) {
        const f = i(g), m = this.laneAssignments.get(g);
        let y, _;
        if (m !== void 0 && this.options.lanes > 1) {
          y = m;
          const T = p[y], P = T !== void 0 ? d[T] : void 0;
          _ = P ? P.end + this.options.gap : r + o;
        } else {
          const T = this.options.lanes === 1 ? d[g - 1] : this.getFurthestMeasurement(d, g);
          _ = T ? T.end + this.options.gap : r + o, y = T ? T.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, y);
        }
        const v = a.get(f), C = typeof v == "number" ? v : this.options.estimateSize(g), I = _ + C;
        d[g] = { index: g, start: _, size: C, end: I, key: f, lane: y }, p[y] = g;
      }
      return this.measurementsCache = d, d;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = ft(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (n, r, o, i) => this.range = n.length > 0 && r > 0 ? _a({ measurements: n, outerSize: r, scrollOffset: o, lanes: i }) : null, { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = ft(() => {
      let n = null, r = null;
      const o = this.calculateRange();
      return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [this.options.rangeExtractor, this.options.overscan, this.options.count, n, r];
    }, (n, r, o, i, l) => i === null || l === null ? [] : n({ startIndex: i, endIndex: l, overscan: r, count: o }), { key: false, debug: () => this.options.debug }), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, o = n.getAttribute(r);
      return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1);
    }, this._measureElement = (n, r) => {
      const o = this.indexFromElement(n), i = this.measurementsCache[o];
      if (!i) return;
      const l = i.key, s = this.elementsCache.get(l);
      s !== n && (s && this.observer.unobserve(s), this.observer.observe(n), this.elementsCache.set(l, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      const o = this.measurementsCache[n];
      if (!o) return;
      const i = this.itemSizeCache.get(o.key) ?? o.size, l = r - i;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, l, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), { adjustments: this.scrollAdjustments += l, behavior: void 0 }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(false));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, o) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = ft(() => [this.getVirtualIndexes(), this.getMeasurements()], (n, r) => {
      const o = [];
      for (let i = 0, l = n.length; i < l; i++) {
        const s = n[i], a = r[s];
        o.push(a);
      }
      return o;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0) return Mr(r[uo(0, r.length - 1, (o) => Mr(r[o]).start, n)]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const n = this.scrollElement.document.documentElement;
        return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (n, r, o = 0) => {
      if (!this.scrollElement) return 0;
      const i = this.getSize(), l = this.getScrollOffset();
      r === "auto" && (r = n >= l + i ? "end" : "start"), r === "center" ? n += (o - i) / 2 : r === "end" && (n -= i);
      const s = this.getMaxScrollOffset();
      return Math.max(Math.min(s, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const o = this.measurementsCache[n];
      if (!o) return;
      const i = this.getSize(), l = this.getScrollOffset();
      if (r === "auto") if (o.end >= l + i - this.options.scrollPaddingEnd) r = "end";
      else if (o.start <= l + this.options.scrollPaddingStart) r = "start";
      else return [l, r];
      if (r === "end" && n === this.options.count - 1) return [this.getMaxScrollOffset(), r];
      const s = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(s, r, o.size), r];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(n, r), { adjustments: void 0, behavior: o });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
      o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
      let i = 0;
      const l = 10, s = (c) => {
        if (!this.targetWindow) return;
        const d = this.getOffsetForIndex(n, c);
        if (!d) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [p, g] = d;
        this._scrollToOffset(p, { adjustments: void 0, behavior: o }), this.targetWindow.requestAnimationFrame(() => {
          const f = () => {
            if (this.currentScrollToIndex !== n) return;
            const m = this.getScrollOffset(), y = this.getOffsetForIndex(n, g);
            if (!y) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            ua(y[0], m) || a(g);
          };
          this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(f) : f();
        });
      }, a = (c) => {
        this.targetWindow && this.currentScrollToIndex === n && (i++, i < l ? this.targetWindow.requestAnimationFrame(() => s(c)) : console.warn(`Failed to scroll to index ${n} after ${l} attempts.`));
      };
      s(r);
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + n, { adjustments: void 0, behavior: r });
    }, this.getTotalSize = () => {
      var n;
      const r = this.getMeasurements();
      let o;
      if (r.length === 0) o = this.options.paddingStart;
      else if (this.options.lanes === 1) o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
      else {
        const i = Array(this.options.lanes).fill(null);
        let l = r.length - 1;
        for (; l >= 0 && i.some((s) => s === null); ) {
          const s = r[l];
          i[s.lane] === null && (i[s.lane] = s.end), l--;
        }
        o = Math.max(...i.filter((s) => s !== null));
      }
      return Math.max(o - this.options.scrollMargin + this.options.paddingEnd, 0);
    }, this._scrollToOffset = (n, { adjustments: r, behavior: o }) => {
      this.options.scrollToFn(n, { behavior: o, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(t);
  }
}
const uo = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r) e = o + 1;
    else if (i > r) t = o - 1;
    else return o;
  }
  return e > 0 ? e - 1 : 0;
};
function _a({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  const o = e.length - 1, i = (a) => e[a].start;
  if (e.length <= r) return { startIndex: 0, endIndex: o };
  let l = uo(0, o, i, n), s = l;
  if (r === 1) for (; s < o && e[s].end < n + t; ) s++;
  else if (r > 1) {
    const a = Array(r).fill(0);
    for (; s < o && a.some((d) => d < n + t); ) {
      const d = e[s];
      a[d.lane] = d.end, s++;
    }
    const c = Array(r).fill(n + t);
    for (; l >= 0 && c.some((d) => d >= n); ) {
      const d = e[l];
      c[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % r), s = Math.min(o, s + (r - 1 - s % r));
  }
  return { startIndex: l, endIndex: s };
}
const Fr = typeof document < "u" ? $o : be;
function ba({ useFlushSync: e = true, ...t }) {
  const n = Mo(() => ({}), {})[1], r = { ...t, onChange: (i, l) => {
    var s;
    e && l ? Io(n) : n(), (s = t.onChange) == null || s.call(t, i, l);
  } }, [o] = U(() => new ya(r));
  return o.setOptions(r), Fr(() => o._didMount(), []), Fr(() => o._willUpdate()), o;
}
function va(e) {
  return ba({ observeElementRect: ga, observeElementOffset: pa, scrollToFn: ma, ...e });
}
function jr(e) {
  return typeof e == "function" ? e() : e;
}
function gt(e, t, n = true) {
  const [r, o] = U(() => {
    if (!n) return jr(t);
    try {
      const l = localStorage.getItem(e);
      if (l !== null) return JSON.parse(l);
    } catch {
    }
    return jr(t);
  }), i = he(n);
  return be(() => {
    const l = i.current;
    if (i.current = n, !!n) {
      if (!l) {
        try {
          const s = localStorage.getItem(e);
          s !== null && o(JSON.parse(s));
        } catch {
        }
        return;
      }
      try {
        localStorage.setItem(e, JSON.stringify(r));
      } catch {
      }
    }
  }, [e, r, n]), [r, o];
}
function zr(e) {
  const t = [10, 25, 50, 100];
  if (!e) return t;
  const n = e.split(",").map((r) => parseInt(r.trim(), 10)).filter((r) => !isNaN(r) && r > 0);
  return n.length > 0 ? [...new Set(n)].sort((r, o) => r - o) : t;
}
function wa(e) {
  const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: i, tablePageSizeOptions: l, tablePagination: s, tableFiltering: a, tableSorting: c, tableQuickFilter: d, gridRowsLength: p } = e, g = he([]), f = he([]), m = he(""), y = he(c), _ = he(a), v = he(d), [C, I] = gt(`jtc_sorting_${t}`, [], c);
  be(() => {
    c ? !y.current && g.current.length > 0 && I(g.current) : I((k) => (k.length > 0 && (g.current = k), [])), y.current = c;
  }, [c, I]);
  const [T, P] = gt(`jtc_filters_${t}`, [], a);
  be(() => {
    a ? !_.current && f.current.length > 0 && P(f.current) : P((k) => (k.length > 0 && (f.current = k), [])), _.current = a;
  }, [a, P]);
  const [M, x] = gt(`jtc_global_filter_${t}`, "", d);
  be(() => {
    d ? !v.current && m.current && x(m.current) : x((k) => (k && (m.current = k), "")), v.current = d;
  }, [d, x]);
  const [$, B] = U({}), [q, J] = gt(`jtc_col_sizes_${t}`, () => {
    const k = {};
    return n.forEach((E) => {
      E.width && (k[E.path] = E.width);
    }), o === true && (k.__select__ = 48), k;
  }, !r), ce = H(() => Number(i) || 25, [i]), [de, fe] = gt(`jtc_pagination_${t}`, { pageIndex: 0, pageSize: ce });
  be(() => {
    fe((k) => k.pageSize === ce ? k : { pageIndex: 0, pageSize: ce });
  }, [ce, fe]);
  const ge = H(() => s === false ? { pageIndex: 0, pageSize: Math.max(p, 1) } : de, [s, p, de]), me = H(() => zr(l), [l]), [re, w] = gt(`jtc_visibility_${t}`, {}), N = D(() => {
    w({});
  }, [w]);
  return { sorting: C, columnFilters: T, globalFilter: M, rowSelection: $, columnSizing: q, pagination: de, effectivePagination: ge, columnVisibility: re, setSorting: I, setColumnFilters: P, setGlobalFilter: x, setRowSelection: B, setColumnSizing: J, setPagination: fe, setColumnVisibility: w, pageSizeOptions: me, parsePageSizeOptions: zr, showAllColumns: N };
}
const Sa = [{ value: "contains", label: "json_table_filter_contains" }, { value: "startsWith", label: "json_table_filter_starts_with" }, { value: "endsWith", label: "json_table_filter_ends_with" }, { value: "equals", label: "json_table_filter_equals" }, { value: "notEquals", label: "json_table_filter_not_equals" }, { value: "isEmpty", label: "json_table_filter_is_empty" }, { value: "isNotEmpty", label: "json_table_filter_is_not_empty" }], Ca = [{ value: "equals", label: "json_table_filter_equals" }, { value: "notEquals", label: "json_table_filter_not_equals" }, { value: "greaterThan", label: "json_table_filter_greater_than" }, { value: "greaterThanOrEqual", label: "json_table_filter_greater_than_or_equal" }, { value: "lessThan", label: "json_table_filter_less_than" }, { value: "lessThanOrEqual", label: "json_table_filter_less_than_or_equal" }, { value: "isEmpty", label: "json_table_filter_is_empty" }, { value: "isNotEmpty", label: "json_table_filter_is_not_empty" }], xa = [{ value: "equals", label: "json_table_filter_equals" }, { value: "greaterThan", label: "json_table_filter_after" }, { value: "greaterThanOrEqual", label: "json_table_filter_on_or_after" }, { value: "lessThan", label: "json_table_filter_before" }, { value: "lessThanOrEqual", label: "json_table_filter_on_or_before" }, { value: "isEmpty", label: "json_table_filter_is_empty" }, { value: "isNotEmpty", label: "json_table_filter_is_not_empty" }], Ra = [{ value: "equals", label: "json_table_filter_equals" }, { value: "notEquals", label: "json_table_filter_not_equals" }, { value: "isEmpty", label: "json_table_filter_is_empty" }, { value: "isNotEmpty", label: "json_table_filter_is_not_empty" }], Ma = [{ value: "true", label: "json_table_filter_boolean_true" }, { value: "false", label: "json_table_filter_boolean_false" }];
function $a(e) {
  switch (e) {
    case "number":
    case "date":
    case "boolean":
      return "equals";
    default:
      return "contains";
  }
}
function Ia(e) {
  if (e == null || e === "") return "";
  if (typeof e == "string" && /^\d{4}-\d{2}-\d{2}$/.test(e)) return e;
  try {
    const t = new Date(e);
    if (!isNaN(t.getTime())) {
      const n = t.getFullYear(), r = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0");
      return `${n}-${r}-${o}`;
    }
  } catch {
  }
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : "";
}
function Aa({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: i }) {
  const l = Pr(), s = ei(l.breakpoints.down("sm")), a = H(() => i === "number" || i === "date" || i === "boolean" || i === "string" ? i : "string", [i]), c = H(() => {
    switch (a) {
      case "number":
        return Ca;
      case "date":
        return xa;
      case "boolean":
        return Ra;
      default:
        return Sa;
    }
  }, [a]), d = H(() => {
    const $ = $a(a);
    if (r == null) return { operator: $, value: "" };
    if (typeof r == "object" && r !== null && "operator" in r) {
      const B = r;
      return c.some((J) => J.value === B.operator) ? B : { operator: $, value: B.value };
    }
    return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? { operator: $, value: r } : { operator: $, value: JSON.stringify(r) };
  }, [r, a, c]), [p, g] = U(d.operator), [f, m] = U(typeof d.value == "boolean" ? String(d.value) : d.value), y = H(() => r != null, [r]);
  be(() => {
    e && (g(d.operator), m(typeof d.value == "boolean" ? String(d.value) : d.value));
  }, [d, e]);
  const _ = !["isEmpty", "isNotEmpty"].includes(p), v = D(() => {
    if (!_) {
      n({ operator: p, value: "" });
      return;
    }
    if (a === "boolean") {
      n({ operator: p, value: f === "true" });
      return;
    }
    const $ = typeof f == "string" ? f.trim() : String(f).trim();
    if ($ === "") n(void 0);
    else {
      const B = a === "number" ? Number($) : $;
      n({ operator: p, value: B });
    }
  }, [_, a, p, f, n]), C = D(() => {
    n(void 0);
  }, [n]), I = D(($) => {
    $.key === "Enter" && !$.shiftKey && ($.preventDefault(), v());
  }, [v]), T = D(($) => {
    g($), (["isEmpty", "isNotEmpty"].includes($) || a !== "boolean" && (f === "true" || f === "false")) && m("");
  }, [f, a]), P = o.split(".").pop() || o, M = `filter-dialog-title-${o}`, x = `filter-dialog-description-${o}`;
  return b(Nn, { open: e, onClose: t, maxWidth: "sm", fullWidth: true, fullScreen: s, "aria-labelledby": M, "aria-describedby": x, children: [u(En, { id: M, children: b(F, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [h.t("json_table_filter_for_column").replace("{column}", P), y && u(We, { label: h.t("json_table_filter_active"), size: "small", color: "primary", variant: "outlined" })] }) }), b(kn, { children: [u(S, { id: x, variant: "body2", color: "text.secondary", sx: { mb: 2, mt: 1 }, children: h.t("json_table_filter_dialog_description") }), b(F, { sx: { display: "flex", flexDirection: "column", gap: 2 }, onKeyDown: I, children: [b(Ie, { fullWidth: true, children: [u(Ae, { id: `filter-operator-label-${o}`, children: h.t("json_table_filter_operator") }), u(Re, { value: p, label: h.t("json_table_filter_operator"), labelId: `filter-operator-label-${o}`, onChange: ($) => T($.target.value), children: c.map(($) => u(O, { value: $.value, children: h.t($.label) }, $.value)) })] }), _ && a === "boolean" && b(Ie, { fullWidth: true, children: [u(Ae, { id: `filter-value-label-${o}`, children: h.t("json_table_filter_value") }), u(Re, { value: f === "true" || f === "false" ? f : "", label: h.t("json_table_filter_value"), labelId: `filter-value-label-${o}`, onChange: ($) => m($.target.value), children: Ma.map(($) => u(O, { value: $.value, children: h.t($.label) }, $.value)) })] }), _ && a === "date" && u(X, { label: h.t("json_table_filter_value"), value: Ia(f), onChange: ($) => m($.target.value), type: "date", fullWidth: true, autoFocus: true, InputLabelProps: { shrink: true } }), _ && a === "number" && u(X, { label: h.t("json_table_filter_value"), value: f, onChange: ($) => m($.target.value), type: "number", fullWidth: true, autoFocus: true }), _ && a === "string" && u(X, { label: h.t("json_table_filter_value"), value: f, onChange: ($) => m($.target.value), type: "text", fullWidth: true, autoFocus: true }), !_ && u(S, { variant: "body2", color: "text.secondary", sx: { fontStyle: "italic" }, children: h.t("json_table_filter_no_value_needed") })] })] }), b(Pn, { sx: { px: 3, pb: 2 }, children: [y && u(Te, { onClick: C, color: "error", sx: { mr: "auto" }, children: h.t("json_table_filter_clear") }), u(Te, { onClick: t, children: h.t("cancel") }), u(Te, { variant: "contained", onClick: v, disabled: _ && a === "boolean" && f !== "true" && f !== "false", children: h.t("json_table_filter_apply") })] })] });
}
function Fa({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: i, activeColumnFilter: l, onSetSorting: s, onClearSorting: a, onShowAllColumns: c, hasHiddenColumns: d }) {
  var _a2, _b, _c, _d, _e2, _f;
  const [p, g] = U(false), f = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, m = i && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, y = ((_c = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c.call(r)) === true, _ = l != null;
  if (!(f || m || y)) return null;
  const C = () => {
    r && s([{ id: r.id, desc: false }]), n();
  }, I = () => {
    r && s([{ id: r.id, desc: true }]), n();
  }, T = () => {
    r && a(r.id), n();
  }, P = () => {
    g(true);
  }, M = () => {
    g(false);
  }, x = (J) => {
    r == null ? void 0 : r.setFilterValue(J), g(false), n();
  }, $ = () => {
    r == null ? void 0 : r.setFilterValue(void 0), n();
  }, B = () => {
    var _a3;
    (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
  }, q = () => {
    c == null ? void 0 : c(), n();
  };
  return b(Le, { children: [b(Po, { anchorEl: e, open: t, onClose: n, children: [f && b(Le, { children: [b(O, { onClick: C, children: [u(bt, { children: u(Or, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_sort_asc") })] }), b(O, { onClick: I, children: [u(bt, { children: u(Hr, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_sort_desc") })] }), o && u(O, { onClick: T, children: u(S, { variant: "body2", children: h.t("json_table_sort_clear") }) })] }), f && m && u(Zt, {}), m && b(Le, { children: [b(O, { onClick: P, children: [u(bt, { children: u(ll, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_set_filter") })] }), _ && b(O, { onClick: $, children: [u(bt, { children: u(li, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_filter_clear") })] })] }), (f || m) && y && u(Zt, {}), y && b(O, { onClick: B, children: [u(bt, { children: u(Gr, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_hide_column") })] }), d && c && u(O, { onClick: q, children: u(S, { variant: "body2", children: h.t("json_table_show_all_columns") }) })] }), m && r && p && u(Aa, { open: p, onClose: M, onApply: x, currentValue: (_d = r.getFilterValue) == null ? void 0 : _d.call(r), columnId: r.id, columnType: (_f = (_e2 = r.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType })] });
}
function ja(e) {
  var _a2;
  const t = /* @__PURE__ */ new Map();
  for (const r of e) ((_a2 = r.format) == null ? void 0 : _a2.type) === "date" && t.set(r.path, r.format);
  const n = (r, o) => Qr.date.format(r, { fmt: o, defaultDisplay: "" }).displayValue ?? "";
  return (r, o, i) => {
    const l = typeof i == "string" ? i.toLowerCase() : typeof i == "number" || typeof i == "boolean" ? String(i).toLowerCase() : "";
    if (!l) return true;
    const s = r.getValue(o);
    if (s == null) return false;
    const a = t.get(o);
    return a && n(s, a).toLowerCase().includes(l) ? true : (typeof s == "string" ? s : typeof s == "number" || typeof s == "boolean" ? String(s) : "").toLowerCase().includes(l);
  };
}
const za = { compact: 36, standard: 52, comfortable: 68 }, Da = { compact: 36, standard: 56, comfortable: 68 }, Ta = (e) => {
  const { children: t, value: n, ...r } = e;
  return u(O, { ...r, value: n, children: u(S, { variant: "body2", component: "span", children: t }) });
}, Pa = () => {
  const e = Xt(ko), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = Oo("oid"), i = ai("oid"), l = Pr(), s = t == null ? void 0 : t.type, a = s === "string" || s === "mixed" || s === "json", c = H(() => {
    if (i == null) return [];
    let R;
    if (typeof i == "string") try {
      R = JSON.parse(i);
    } catch {
      return [];
    }
    else R = i;
    return Array.isArray(R) ? R : typeof R == "object" && R !== null ? [R] : [];
  }, [i]), d = H(() => ({ maxDepth: n.data.tableMaxDepth || 10 }), [n.data.tableMaxDepth]), { columns: p, rows: g, meta: f } = ti(c, d), m = H(() => {
    const R = n.data.tableMaxDepth || 10;
    return f.maxDepth > R ? { actual: f.maxDepth, configured: R } : null;
  }, [f.maxDepth, n.data.tableMaxDepth]), y = H(() => qr(n.data.columnConfig), [n.data.columnConfig]), _ = n.data.tableDensity || "standard", v = Number(n.data.tableRowHeight) || za[_] || 52, C = Number(n.data.tableHeaderHeight) || Da[_] || 56, I = g, T = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, P = H(() => ss({ columnConfig: y, analysisColumns: p, widgetData: { tableSorting: n.data.tableSorting !== false, tableFiltering: T, tableRowSelection: n.data.tableRowSelection === true, tableHiding: n.data.tableHiding !== false }, renderConfiguredCell: (R, A) => u(mr, { value: R, config: A, valueSize: o.valueSize }), renderAutoDetectedCell: (R) => u(mr, { value: R, valueSize: o.valueSize }), renderSelectionHeader: (R) => u(jt, { size: "small", indeterminate: R.getIsSomePageRowsSelected(), checked: R.getIsAllPageRowsSelected(), onChange: R.getToggleAllPageRowsSelectedHandler(), "aria-label": "Select all rows" }), renderSelectionCell: (R) => u(jt, { size: "small", checked: R.getIsSelected(), onChange: R.getToggleSelectedHandler(), "aria-label": "Select row" }) }), [y, p, n.data.tableSorting, T, n.data.tableRowSelection, n.data.tableHiding, o.valueSize]), M = H(() => ja(y), [y]), x = n.data.tableAutoSize === true, { sorting: $, columnFilters: B, globalFilter: q, rowSelection: J, columnSizing: ce, pagination: de, effectivePagination: fe, columnVisibility: ge, setSorting: me, setColumnFilters: re, setGlobalFilter: w, setRowSelection: N, setColumnSizing: k, setPagination: E, setColumnVisibility: le, pageSizeOptions: K, showAllColumns: rt } = wa({ widgetId: r, columnConfig: y, tableAutoSize: x, tableRowSelection: n.data.tableRowSelection === true, tablePageSize: Number(n.data.tablePageSize) || 25, tablePageSizeOptions: n.data.tablePageSizeOptions, tablePagination: n.data.tablePagination !== false, tableFiltering: T, tableSorting: n.data.tableSorting !== false, tableQuickFilter: n.data.tableQuickFilter === true, gridRowsLength: I.length }), $e = aa({ data: I, columns: P, getCoreRowModel: Xs(), getSortedRowModel: oa(), getFilteredRowModel: na(), getPaginationRowModel: ra(), enableMultiSort: n.data.tableSortingMulti ?? false, globalFilterFn: M, filterFns: rs, columnResizeMode: "onChange", enableColumnResizing: !x, defaultColumn: { minSize: 40, maxSize: 2e3, filterFn: "advanced" }, state: { sorting: $, columnFilters: B, globalFilter: q, pagination: fe, rowSelection: J, columnSizing: ce, columnVisibility: ge }, onSortingChange: me, onColumnFiltersChange: re, onGlobalFilterChange: w, onPaginationChange: n.data.tablePagination !== false ? E : void 0, onRowSelectionChange: N, onColumnSizingChange: k, onColumnVisibilityChange: le, enableRowSelection: n.data.tableRowSelection === true, enableSorting: n.data.tableSorting !== false, enableColumnFilters: T, enableGlobalFilter: n.data.tableQuickFilter === true }), ze = he(null), at = he(null), [Ee, Q] = U({}), [Pt, Nt] = U(null), Ce = he(null), [co, fo] = U(void 0), [go, po] = U(void 0), ho = D((R, A) => {
    var _a2;
    Ce.current = R;
    const V = R.id, te = $.find((De) => De.id === V), ye = (_a2 = B.find((De) => De.id === V)) == null ? void 0 : _a2.value;
    fo(te), po(ye), Nt(A);
  }, [$, B]), mo = D(() => {
    Nt(null);
  }, []);
  be(() => {
    if (!x) return;
    const R = at.current;
    if (!R) return;
    const A = new ResizeObserver(() => {
      const V = R.querySelector("tr[data-row-index]");
      if (!V) return;
      const te = V.querySelectorAll("td"), ye = $e.getHeaderGroups()[0];
      if (!ye || te.length !== ye.headers.length) return;
      const De = {};
      ye.headers.forEach((dn, dt) => {
        const er = te[dt];
        er && (De[dn.id] = er.getBoundingClientRect().width);
      }), Q(De);
    });
    return A.observe(R), () => A.disconnect();
  }, [x, $e]);
  const yo = H(() => {
    const R = { tableLayout: x ? "auto" : "fixed", width: "100%" };
    if (n.data.tableShowRowBorders === false) R["& .MuiTableCell-root"] = { borderBottom: "none" };
    else {
      const A = n.data.horizontalCellBorderWidth ?? 1, V = Ht(n.data.horizontalCellBorderColor);
      R["& .MuiTableCell-root"] = { ...R["& .MuiTableCell-root"], borderBottom: `${A}px solid`, borderBottomColor: V || "divider" };
    }
    if (n.data.tableShowCellBorders === true) {
      const A = n.data.verticalCellBorderWidth ?? 1, V = Ht(n.data.verticalCellBorderColor);
      R["& .MuiTableCell-root:not(:last-child)"] = { borderRight: `${A}px solid`, borderRightColor: V || "divider" };
    }
    return R;
  }, [n.data.tableShowRowBorders, n.data.tableShowCellBorders, n.data.horizontalCellBorderWidth, n.data.horizontalCellBorderColor, n.data.verticalCellBorderWidth, n.data.verticalCellBorderColor, x]), yt = n.data.tableHeaderBgColor, ut = n.data.tableHeaderTextColor, ct = n.data.tableHeaderFontSize, _o = H(() => ({ height: C, padding: 0, whiteSpace: "nowrap", ...ut && { color: ut }, ...ct && { fontSize: `${ct}px` } }), [C, ut, ct]), Vn = H(() => ({ ...ut && { color: ut }, ...ct && { fontSize: `${ct}px` } }), [ut, ct]), Wn = n.data.noCard === true, bo = n.data.tableShowHeader !== false, cn = n.data.headerBorderWidth ?? 0, Gn = Ht(n.data.headerBorderColor), vo = H(() => {
    const R = n.data.tableHeaderElevation ?? 6, A = Wn ? { backgroundColor: "transparent", boxShadow: "none" } : { backgroundColor: "background.paper", boxShadow: R > 0 ? l.shadows[R] : "none" };
    cn > 0 && (A["&::after"] = { content: '""', position: "absolute", left: 0, right: 0, bottom: 0, height: `${cn}px`, backgroundColor: Gn || l.palette.divider, pointerEvents: "none" });
    const V = yt ? it(yt) : null;
    return V ? { ...A, background: V } : yt ? { ...A, backgroundColor: yt } : A;
  }, [Wn, yt, l.shadows, l.palette.divider, n.data.tableHeaderElevation, cn, Gn]), wo = H(() => {
    const R = { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }, A = n.data.borderWidth, V = n.data.borderStyle || "solid", te = Ht(n.data.borderColor), ye = n.data.borderRadius;
    return A && A > 0 && (R.border = `${A}px ${V}`, R.borderColor = te || "divider"), ye && (R.borderRadius = ye), R;
  }, [n.data.borderWidth, n.data.borderStyle, n.data.borderColor, n.data.borderRadius]), So = H(() => ({ flex: 1, overflow: "auto" }), []), Co = D((R) => x ? Ee[R.id] ?? "auto" : R.getSize(), [x, Ee]), qn = H(() => ({ overflow: "hidden", height: v, maxHeight: v, padding: 0, verticalAlign: "middle" }), [v]), Et = n.data.evenRowColor || null, kt = n.data.oddRowColor || null, Un = Et ? it(Et) : null, Jn = kt ? it(kt) : null, Yn = D((R) => {
    const A = R % 2 === 0, V = A ? Et : kt, te = A ? Un : Jn;
    if (V) return te ? { background: te } : { backgroundColor: V };
  }, [Et, kt, Un, Jn]), Ot = $e.getRowModel().rows, Kn = va({ count: Ot.length, getScrollElement: () => ze.current, estimateSize: () => v, overscan: 25, scrollPaddingStart: v }), xo = n.data.tableVirtualizeThreshold ?? 50, _t = n.data.tablePagination === false && Ot.length > xo ? Kn.getVirtualItems() : null, Ro = _t == null ? void 0 : _t[0], Xn = _t == null ? void 0 : _t[_t.length - 1], Qn = (Ro == null ? void 0 : Ro.start) ?? 0, Zn = Xn ? Kn.getTotalSize() - (Xn.end ?? 0) : 0;
  return b(Ho, { isValidType: a, data: o, children: [u(Vo, { data: o, widget: n }), a && P.length > 0 ? b(F, { sx: { width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", p: Number(n.data.jsonTablePadding) || 0 }, children: [n.data.tableQuickFilter === true && u(F, { sx: { p: 1, flexShrink: 0 }, children: u(X, { size: "small", variant: "outlined", fullWidth: true, value: q, onChange: (R) => w(R.target.value), placeholder: h.t("json_table_search_placeholder"), slotProps: { input: { startAdornment: u(Br, { position: "start", children: u(Er, { fontSize: "small" }) }) } } }) }), m && u(Jt, { severity: "warning", sx: { m: 1 }, children: u(S, { variant: "body2", children: h.t("json_table_depth_warning").replace("{{actual}}", String(m.actual)).replace("{{configured}}", String(m.configured)) }) }), u(F, { sx: wo, children: u(ji, { ref: ze, sx: So, children: b(_i, { size: _ === "compact" ? "small" : "medium", sx: yo, children: [bo && u(Ni, { sx: { position: "sticky", top: 0, zIndex: 2, ...vo, "& .resize-handle": { opacity: 0 }, "&:hover .resize-handle": { opacity: 1 } }, children: $e.getHeaderGroups().map((R) => u(vt, { children: R.headers.map((A) => {
    const V = A.column.getCanSort(), te = A.column.getIsSorted(), ye = A.column.columnDef.meta, De = A.column.id === "__select__", dn = !x;
    return b(et, { component: "th", colSpan: A.colSpan, align: (ye == null ? void 0 : ye.align) || "left", padding: De ? "checkbox" : "normal", sx: { width: Co(A), minWidth: De ? 48 : 40, position: "relative", ..._o }, children: [De ? Mt(A.column.columnDef.header, A.getContext()) : b(F, { sx: { display: "flex", alignItems: "center", justifyContent: (ye == null ? void 0 : ye.align) === "right" ? "flex-end" : (ye == null ? void 0 : ye.align) === "center" ? "center" : "space-between", width: "100%" }, children: [V ? u(ol, { active: te !== false, direction: te === "desc" ? "desc" : "asc", onClick: A.column.getToggleSortingHandler(), children: u(S, { variant: "body2", component: "span", fontWeight: "medium", noWrap: true, sx: Vn, children: Mt(A.column.columnDef.header, A.getContext()) }) }) : u(S, { variant: "body2", component: "span", fontWeight: "medium", noWrap: true, sx: Vn, children: Mt(A.column.columnDef.header, A.getContext()) }), n.data.tableColumnMenu !== false && (A.column.getCanSort() || T && A.column.getCanFilter() || A.column.getCanHide()) && u(ve, { title: h.t("json_table_column_menu"), children: u(oe, { size: "small", "aria-label": h.t("json_table_column_menu"), onClick: (dt) => {
      dt.stopPropagation(), ho(A.column, dt.currentTarget);
    }, sx: { ml: 0.5, opacity: 0.6 }, children: u(sl, { fontSize: "inherit" }) }) })] }), dn && A.column.getCanResize() && u(F, { className: "resize-handle", onMouseDown: A.getResizeHandler(), onTouchStart: A.getResizeHandler(), onClick: (dt) => dt.stopPropagation(), sx: { position: "absolute", right: 0, top: 0, height: "100%", width: "4px", cursor: "col-resize", userSelect: "none", touchAction: "none", zIndex: 1, opacity: A.column.getIsResizing() ? 1 : 0, bgcolor: A.column.getIsResizing() ? "primary.main" : "divider", transition: "opacity 0.15s", "&:hover": { opacity: 1, bgcolor: "primary.light" } } })] }, A.id);
  }) }, R.id)) }), u(Ci, { ref: at, children: _t ? b(Le, { children: [Qn > 0 && u(vt, { children: u(et, { colSpan: P.length, sx: { height: Qn, p: 0, border: "none" } }) }), _t.map((R) => {
    const A = Ot[R.index], V = R.index;
    return u(vt, { "data-row-index": V, sx: { height: v, ...Yn(V) }, children: A.getVisibleCells().map((te) => {
      var _a2;
      const ye = te.column.id === "__select__";
      return u(et, { align: ((_a2 = te.column.columnDef.meta) == null ? void 0 : _a2.align) || "left", padding: ye ? "checkbox" : "normal", sx: { ...qn }, children: Mt(te.column.columnDef.cell, te.getContext()) }, te.id);
    }) }, A.id);
  }), Zn > 0 && u(vt, { children: u(et, { colSpan: P.length, sx: { height: Zn, p: 0, border: "none" } }) })] }) : Ot.map((R, A) => u(vt, { "data-row-index": A, sx: { height: v, ...Yn(A) }, children: R.getVisibleCells().map((V) => {
    var _a2;
    const te = V.column.id === "__select__";
    return u(et, { align: ((_a2 = V.column.columnDef.meta) == null ? void 0 : _a2.align) || "left", padding: te ? "checkbox" : "normal", sx: { ...qn }, children: Mt(V.column.columnDef.cell, V.getContext()) }, V.id);
  }) }, R.id)) })] }) }) }), n.data.tablePagination !== false && u(Yi, { component: "div", count: $e.getFilteredRowModel().rows.length, page: de.pageIndex, rowsPerPage: de.pageSize, rowsPerPageOptions: K, onPageChange: (R, A) => E((V) => ({ ...V, pageIndex: A })), onRowsPerPageChange: (R) => E({ pageIndex: 0, pageSize: parseInt(R.target.value, 10) }), labelRowsPerPage: u(S, { variant: "body2", component: "span", children: h.t("json_table_rows_per_page") }), labelDisplayedRows: ({ from: R, to: A, count: V }) => u(S, { variant: "body2", component: "span", children: `${R}\u2013${A} / ${V}` }), slots: { menuItem: Ta }, slotProps: { select: { renderValue: (R) => u(S, { variant: "body2", component: "span", children: String(R) }) } } }), u(Fa, { anchorEl: Pt, open: !!Pt, onClose: mo, activeColumn: Ce.current, isSorted: co !== void 0, tableFiltering: T, activeColumnFilter: go, onSetSorting: me, onClearSorting: (R) => me((A) => A.filter((V) => V.id !== R)), onShowAllColumns: rt, hasHiddenColumns: Object.keys(ge).some((R) => ge[R] === false) })] }) : u(F, { sx: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", p: 2 }, children: u(S, { variant: "body2", color: "text.secondary", children: s === void 0 ? h.t("json_table_no_oid") : a ? y.length > 0 && P.length === 0 ? h.t("json_table_all_columns_hidden") : h.t("json_table_no_data") : h.t("json_table_invalid_type") }) })] });
}, Na = ["columnConfig", "tableSorting", "tableSortingMulti", "tableFiltering", "tableQuickFilter", "tableColumnMenu", "tableHiding", "tablePagination", "tablePageSize", "tablePageSizeOptions", "tableVirtualizeThreshold", "tableRowSelection", "tableMaxDepth", "tableDensity", "tableRowHeight", "tableHeaderHeight", "tableAutoSize", "tableHeaderElevation", "jsonTablePadding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "tableHeaderBgColor", "tableHeaderTextColor", "tableHeaderFontSize", "headerBorderWidth", "headerBorderColor", "tableShowCellBorders", "verticalCellBorderWidth", "verticalCellBorderColor", "tableShowRowBorders", "horizontalCellBorderWidth", "horizontalCellBorderColor", "evenRowColor", "oddRowColor"];
class Tn extends h {
  static createObjectFields() {
    const t = Wo(["string", "mixed", "json"], { unit: false, valueGroups: false }), n = t.find((r) => r.name === "oid");
    if (n) {
      const r = n, o = r.onChange;
      r.onChange = async (i, l, s, a) => {
        if (!l.oid) {
          for (const c of Na) delete l[c];
          o || s(l);
        }
        o && await o(i, l, s, a);
      };
    }
    return t;
  }
  static getWidgetInfo() {
    return { id: "tplJsonTableCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "JsonTableCollectionWidget", visWidgetLabel: "json_table_collection_widget", visOrder: 12, visAttrs: [{ name: "common", fields: [...Bo()] }, { name: "jsonTable", label: "group_json_table", fields: [...Tn.createObjectFields(), ...ds()] }], visDefaultStyle: { width: "100%", height: "400px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-json-table.png" };
  }
  getWidgetInfo() {
    return Tn.getWidgetInfo();
  }
  renderWidgetBody(t) {
    super.renderWidgetBody(t), t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
    const n = { id: t.id, refService: t.refService, style: t.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return Lo(this.wrapContent(u(Pa, {})), n);
  }
}
export {
  Tn as default
};
