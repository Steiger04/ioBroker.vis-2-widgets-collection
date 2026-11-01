import { p as $e, h as u, r as Lr, g as G, j as Vt, i as _, q as Wr, e as q, m as Ye, f as z, k as Oe, l as Fe, s as Go, t as Gr, u as qo } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { i as He, j as Be, k as Le, s as ue, m as Se, n as We, P as Ve, f as je, o as Ge, p as Ee, l as Uo, q as Jo, a as Ht, r as Yo, I as ne, t as cr, v as De, w as Ko, S as xe, c as Xo, G as h, B as $, b as Y, T as S, F as ze, x as Me, y as Qo, u as qr, z as Zo, C as ei } from "./usePopoverPositioning-C1_MhytU.js";
import { D as Bt, j as Xt, g as Ur, q as ti, I as ni, b as qe, e as be, f as Lt, u as ri, C as oi, c as ii } from "./useData-jkOw5Oj_.js";
import { C as li, c as si } from "./CollectionBaseImage-Cm6oCVNa.js";
import { T as Jr, p as Wt, a as ai, d as ui, S as Yr, R as ci, V as di, i as fi, A as Kr, U as Xr, D as Qr, I as dr, b as gi, c as pi, u as hi, e as mi, f as yi, L as gt } from "./encoding-BFtNtGFS.js";
import { K as _i, a as bi, C as tt, T as ge, D as vi, b as Bn, c as wi, A as zt, d as Mt, E as $t, e as jt, f as Nt } from "./ExpandMore-HXEsU0sf.js";
import { I as Zr } from "./InputAdornment-uuFvK63f.js";
import { D as Si, C as st, a as Ci } from "./ColorPickerField-Bh4TnAWM.js";
import { C as Rt } from "./Checkbox-CFTf-eTY.js";
import { D as Ln, a as Wn, b as Gn } from "./DialogTitle-BCiYQiQj.js";
import { B as Ae } from "./Button-CoSvBFy1.js";
import { S as xi } from "./Slider-M3td3o7X.js";
import { F as ke } from "./FormControlLabel-DIW0DmOa.js";
import { S as Ze } from "./Switch-COn6gwPL.js";
import { M as V } from "./MenuItem-Dv4AreQE.js";
import { S as oe } from "./Stack-Ur4a45jz.js";
import { A as fn } from "./Avatar-Bdh5EYvv.js";
import { T as eo, a as Gt } from "./ToggleButtonGroup-B3a1Bjiy.js";
import { C as qn } from "./Close-CJIHvdeL.js";
import { i as Ri, J as to } from "./allowedOidTypes-Dpd6yL-L.js";
import { u as Fi } from "./useOidValue-BvUo9TJr.js";
import "./vite-preload-helper-PPVm8Dsz.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./useThemeProps-CxKYjV9n.js";
import "./SwitchBase-BcaiVFpO.js";
import "./listItemTextClasses-BDkd_uFK.js";
function Ai(e) {
  return He("MuiCard", e);
}
Be("MuiCard", ["root"]);
const zi = (e) => {
  const { classes: t } = e;
  return We({ root: ["root"] }, Ai, t);
}, Mi = ue(Ve, { name: "MuiCard", slot: "Root", overridesResolver: (e, t) => t.root })({ overflow: "hidden" }), $i = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiCard" }), { className: o, raised: i = false, ...l } = r, s = { ...r, raised: i }, a = zi(s);
  return u(Mi, { className: Se(a.root, o), elevation: i ? 8 : void 0, ref: n, ownerState: s, ...l });
}), ji = je(u("path", { d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z" }), "FirstPage"), Ii = je(u("path", { d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" }), "LastPage"), no = Lr();
function Pi(e) {
  return He("MuiTable", e);
}
Be("MuiTable", ["root", "stickyHeader"]);
const Di = (e) => {
  const { classes: t, stickyHeader: n } = e;
  return We({ root: ["root", n && "stickyHeader"] }, Pi, t);
}, Ti = ue("table", { name: "MuiTable", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.stickyHeader && t.stickyHeader];
} })(Ge(({ theme: e }) => ({ display: "table", width: "100%", borderCollapse: "collapse", borderSpacing: 0, "& caption": { ...e.typography.body2, padding: e.spacing(2), color: (e.vars || e).palette.text.secondary, textAlign: "left", captionSide: "bottom" }, variants: [{ props: ({ ownerState: t }) => t.stickyHeader, style: { borderCollapse: "separate" } }] }))), fr = "table", Ni = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTable" }), { className: o, component: i = fr, padding: l = "normal", size: s = "medium", stickyHeader: a = false, ...c } = r, d = { ...r, component: i, padding: l, size: s, stickyHeader: a }, g = Di(d), p = G(() => ({ padding: l, size: s, stickyHeader: a }), [l, s, a]);
  return u(no.Provider, { value: p, children: u(Ti, { as: i, role: i === fr ? null : "table", ref: n, className: Se(g.root, o), ownerState: d, ...c }) });
}), Qt = Lr();
function Oi(e) {
  return He("MuiTableBody", e);
}
Be("MuiTableBody", ["root"]);
const Ei = (e) => {
  const { classes: t } = e;
  return We({ root: ["root"] }, Oi, t);
}, ki = ue("tbody", { name: "MuiTableBody", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "table-row-group" }), Vi = { variant: "body" }, gr = "tbody", Hi = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableBody" }), { className: o, component: i = gr, ...l } = r, s = { ...r, component: i }, a = Ei(s);
  return u(Qt.Provider, { value: Vi, children: u(ki, { className: Se(a.root, o), as: i, ref: n, role: i === gr ? null : "rowgroup", ownerState: s, ...l }) });
});
function Bi(e) {
  return He("MuiTableCell", e);
}
const Li = Be("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), Wi = (e) => {
  const { classes: t, variant: n, align: r, padding: o, size: i, stickyHeader: l } = e, s = { root: ["root", n, l && "stickyHeader", r !== "inherit" && `align${Ee(r)}`, o !== "normal" && `padding${Ee(o)}`, `size${Ee(i)}`] };
  return We(s, Bi, t);
}, Gi = ue("td", { name: "MuiTableCell", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, t[n.variant], t[`size${Ee(n.size)}`], n.padding !== "normal" && t[`padding${Ee(n.padding)}`], n.align !== "inherit" && t[`align${Ee(n.align)}`], n.stickyHeader && t.stickyHeader];
} })(Ge(({ theme: e }) => ({ ...e.typography.body2, display: "table-cell", verticalAlign: "inherit", borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Uo(Ht(e.palette.divider, 1), 0.88) : Jo(Ht(e.palette.divider, 1), 0.68)}`, textAlign: "left", padding: 16, variants: [{ props: { variant: "head" }, style: { color: (e.vars || e).palette.text.primary, lineHeight: e.typography.pxToRem(24), fontWeight: e.typography.fontWeightMedium } }, { props: { variant: "body" }, style: { color: (e.vars || e).palette.text.primary } }, { props: { variant: "footer" }, style: { color: (e.vars || e).palette.text.secondary, lineHeight: e.typography.pxToRem(21), fontSize: e.typography.pxToRem(12) } }, { props: { size: "small" }, style: { padding: "6px 16px", [`&.${Li.paddingCheckbox}`]: { width: 24, padding: "0 12px 0 16px", "& > *": { padding: 0 } } } }, { props: { padding: "checkbox" }, style: { width: 48, padding: "0 0 0 4px" } }, { props: { padding: "none" }, style: { padding: 0 } }, { props: { align: "left" }, style: { textAlign: "left" } }, { props: { align: "center" }, style: { textAlign: "center" } }, { props: { align: "right" }, style: { textAlign: "right", flexDirection: "row-reverse" } }, { props: { align: "justify" }, style: { textAlign: "justify" } }, { props: ({ ownerState: t }) => t.stickyHeader, style: { position: "sticky", top: 0, zIndex: 2, backgroundColor: (e.vars || e).palette.background.default } }] }))), et = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableCell" }), { align: o = "inherit", className: i, component: l, padding: s, scope: a, size: c, sortDirection: d, variant: g, ...p } = r, f = Vt(no), m = Vt(Qt), y = m && m.variant === "head";
  let b;
  l ? b = l : b = y ? "th" : "td";
  let w = a;
  b === "td" ? w = void 0 : !w && y && (w = "col");
  const v = g || m && m.variant, R = { ...r, align: o, component: b, padding: s || (f && f.padding ? f.padding : "normal"), size: c || (f && f.size ? f.size : "medium"), sortDirection: d, stickyHeader: v === "head" && f && f.stickyHeader, variant: v }, O = Wi(R);
  let D = null;
  return d && (D = d === "asc" ? "ascending" : "descending"), u(Gi, { as: b, ref: n, className: Se(O.root, i), "aria-sort": D, scope: w, ownerState: R, ...p });
});
function qi(e) {
  return He("MuiTableContainer", e);
}
Be("MuiTableContainer", ["root"]);
const Ui = (e) => {
  const { classes: t } = e;
  return We({ root: ["root"] }, qi, t);
}, Ji = ue("div", { name: "MuiTableContainer", slot: "Root", overridesResolver: (e, t) => t.root })({ width: "100%", overflowX: "auto" }), Yi = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableContainer" }), { className: o, component: i = "div", ...l } = r, s = { ...r, component: i }, a = Ui(s);
  return u(Ji, { ref: n, as: i, className: Se(a.root, o), ownerState: s, ...l });
});
function Ki(e) {
  return He("MuiTableHead", e);
}
Be("MuiTableHead", ["root"]);
const Xi = (e) => {
  const { classes: t } = e;
  return We({ root: ["root"] }, Ki, t);
}, Qi = ue("thead", { name: "MuiTableHead", slot: "Root", overridesResolver: (e, t) => t.root })({ display: "table-header-group" }), Zi = { variant: "head" }, pr = "thead", el = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableHead" }), { className: o, component: i = pr, ...l } = r, s = { ...r, component: i }, a = Xi(s);
  return u(Qt.Provider, { value: Zi, children: u(Qi, { as: i, className: Se(a.root, o), ref: n, role: i === pr ? null : "rowgroup", ownerState: s, ...l }) });
}), tl = $e(function(t, n) {
  const { backIconButtonProps: r, count: o, disabled: i = false, getItemAriaLabel: l, nextIconButtonProps: s, onPageChange: a, page: c, rowsPerPage: d, showFirstButton: g, showLastButton: p, slots: f = {}, slotProps: m = {}, ...y } = t, b = Yo(), w = (k) => {
    a(k, 0);
  }, v = (k) => {
    a(k, c - 1);
  }, R = (k) => {
    a(k, c + 1);
  }, O = (k) => {
    a(k, Math.max(0, Math.ceil(o / d) - 1));
  }, D = f.firstButton ?? ne, x = f.lastButton ?? ne, F = f.nextButton ?? ne, T = f.previousButton ?? ne, A = f.firstButtonIcon ?? ji, W = f.lastButtonIcon ?? Ii, P = f.nextButtonIcon ?? _i, ce = f.previousButtonIcon ?? bi, de = b ? x : D, te = b ? F : T, re = b ? T : F, we = b ? D : x, ie = b ? m.lastButton : m.firstButton, C = b ? m.nextButton : m.previousButton, M = b ? m.previousButton : m.nextButton, K = b ? m.firstButton : m.lastButton;
  return _("div", { ref: n, ...y, children: [g && u(de, { onClick: w, disabled: i || c === 0, "aria-label": l("first", c), title: l("first", c), ...ie, children: b ? u(W, { ...m.lastButtonIcon }) : u(A, { ...m.firstButtonIcon }) }), u(te, { onClick: v, disabled: i || c === 0, color: "inherit", "aria-label": l("previous", c), title: l("previous", c), ...C ?? r, children: b ? u(P, { ...m.nextButtonIcon }) : u(ce, { ...m.previousButtonIcon }) }), u(re, { onClick: R, disabled: i || (o !== -1 ? c >= Math.ceil(o / d) - 1 : false), color: "inherit", "aria-label": l("next", c), title: l("next", c), ...M ?? s, children: b ? u(ce, { ...m.previousButtonIcon }) : u(P, { ...m.nextButtonIcon }) }), p && u(we, { onClick: O, disabled: i || c >= Math.ceil(o / d) - 1, "aria-label": l("last", c), title: l("last", c), ...K, children: b ? u(A, { ...m.firstButtonIcon }) : u(W, { ...m.lastButtonIcon }) })] });
});
function nl(e) {
  return He("MuiTablePagination", e);
}
const Ct = Be("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]);
var hr;
const rl = ue(et, { name: "MuiTablePagination", slot: "Root", overridesResolver: (e, t) => t.root })(Ge(({ theme: e }) => ({ overflow: "auto", color: (e.vars || e).palette.text.primary, fontSize: e.typography.pxToRem(14), "&:last-child": { padding: 0 } }))), ol = ue(Jr, { name: "MuiTablePagination", slot: "Toolbar", overridesResolver: (e, t) => ({ [`& .${Ct.actions}`]: t.actions, ...t.toolbar }) })(Ge(({ theme: e }) => ({ minHeight: 52, paddingRight: 2, [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: { minHeight: 52 }, [e.breakpoints.up("sm")]: { minHeight: 52, paddingRight: 2 }, [`& .${Ct.actions}`]: { flexShrink: 0, marginLeft: 20 } }))), il = ue("div", { name: "MuiTablePagination", slot: "Spacer", overridesResolver: (e, t) => t.spacer })({ flex: "1 1 100%" }), ll = ue("p", { name: "MuiTablePagination", slot: "SelectLabel", overridesResolver: (e, t) => t.selectLabel })(Ge(({ theme: e }) => ({ ...e.typography.body2, flexShrink: 0 }))), sl = ue(xe, { name: "MuiTablePagination", slot: "Select", overridesResolver: (e, t) => ({ [`& .${Ct.selectIcon}`]: t.selectIcon, [`& .${Ct.select}`]: t.select, ...t.input, ...t.selectRoot }) })({ color: "inherit", fontSize: "inherit", flexShrink: 0, marginRight: 32, marginLeft: 8, [`& .${Ct.select}`]: { paddingLeft: 8, paddingRight: 24, textAlign: "right", textAlignLast: "right" } }), al = ue(V, { name: "MuiTablePagination", slot: "MenuItem", overridesResolver: (e, t) => t.menuItem })({}), ul = ue("p", { name: "MuiTablePagination", slot: "DisplayedRows", overridesResolver: (e, t) => t.displayedRows })(Ge(({ theme: e }) => ({ ...e.typography.body2, flexShrink: 0 })));
function cl({ from: e, to: t, count: n }) {
  return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function dl(e) {
  return `Go to ${e} page`;
}
const fl = (e) => {
  const { classes: t } = e;
  return We({ root: ["root"], toolbar: ["toolbar"], spacer: ["spacer"], selectLabel: ["selectLabel"], select: ["select"], input: ["input"], selectIcon: ["selectIcon"], menuItem: ["menuItem"], displayedRows: ["displayedRows"], actions: ["actions"] }, nl, t);
}, gl = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTablePagination" }), { ActionsComponent: o = tl, backIconButtonProps: i, colSpan: l, component: s = et, count: a, disabled: c = false, getItemAriaLabel: d = dl, labelDisplayedRows: g = cl, labelRowsPerPage: p = "Rows per page:", nextIconButtonProps: f, onPageChange: m, onRowsPerPageChange: y, page: b, rowsPerPage: w, rowsPerPageOptions: v = [10, 25, 50, 100], SelectProps: R = {}, showFirstButton: O = false, showLastButton: D = false, slotProps: x = {}, slots: F = {}, ...T } = r, A = r, W = fl(A), P = (x == null ? void 0 : x.select) ?? R, ce = P.native ? "option" : al;
  let de;
  (s === et || s === "td") && (de = l || 1e3);
  const te = cr(P.id), re = cr(P.labelId), we = () => a === -1 ? (b + 1) * w : w === -1 ? a : Math.min(a, (b + 1) * w), ie = { slots: F, slotProps: x }, [C, M] = De("root", { ref: n, className: W.root, elementType: rl, externalForwardedProps: { ...ie, component: s, ...T }, ownerState: A, additionalProps: { colSpan: de } }), [K, k] = De("toolbar", { className: W.toolbar, elementType: ol, externalForwardedProps: ie, ownerState: A }), [le, U] = De("spacer", { className: W.spacer, elementType: il, externalForwardedProps: ie, ownerState: A }), [ct, dt] = De("selectLabel", { className: W.selectLabel, elementType: ll, externalForwardedProps: ie, ownerState: A, additionalProps: { id: re } }), [Xe, ln] = De("select", { className: W.select, elementType: sl, externalForwardedProps: ie, ownerState: A }), [sn, an] = De("menuItem", { className: W.menuItem, elementType: ce, externalForwardedProps: ie, ownerState: A }), [un, cn] = De("displayedRows", { className: W.displayedRows, elementType: ul, externalForwardedProps: ie, ownerState: A });
  return u(C, { ...M, children: _(K, { ...k, children: [u(le, { ...U }), v.length > 1 && u(ct, { ...dt, children: p }), v.length > 1 && u(Xe, { variant: "standard", ...!P.variant && { input: hr || (hr = u(Ko, {})) }, value: w, onChange: y, id: te, labelId: re, ...P, classes: { ...P.classes, root: Se(W.input, W.selectRoot, (P.classes || {}).root), select: Se(W.select, (P.classes || {}).select), icon: Se(W.selectIcon, (P.classes || {}).icon) }, disabled: c, ...ln, children: v.map((pe) => Wr(sn, { ...an, key: pe.label ? pe.label : pe, value: pe.value ? pe.value : pe }, pe.label ? pe.label : pe)) }), u(un, { ...cn, children: g({ from: a === 0 ? 0 : b * w + 1, to: we(), count: a === -1 ? -1 : a, page: b }) }), u(o, { className: W.actions, backIconButtonProps: i, count: a, nextIconButtonProps: f, onPageChange: m, page: b, rowsPerPage: w, showFirstButton: O, showLastButton: D, slotProps: x.actions, slots: F.actions, getItemAriaLabel: d, disabled: c })] }) });
});
function pl(e) {
  return He("MuiTableRow", e);
}
const mr = Be("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), hl = (e) => {
  const { classes: t, selected: n, hover: r, head: o, footer: i } = e;
  return We({ root: ["root", n && "selected", r && "hover", o && "head", i && "footer"] }, pl, t);
}, ml = ue("tr", { name: "MuiTableRow", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.head && t.head, n.footer && t.footer];
} })(Ge(({ theme: e }) => ({ color: "inherit", display: "table-row", verticalAlign: "middle", outline: 0, [`&.${mr.hover}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover }, [`&.${mr.selected}`]: { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ht(e.palette.primary.main, e.palette.action.selectedOpacity), "&:hover": { backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity) } } }))), yr = "tr", Ot = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableRow" }), { className: o, component: i = yr, hover: l = false, selected: s = false, ...a } = r, c = Vt(Qt), d = { ...r, component: i, hover: l, selected: s, head: c && c.variant === "head", footer: c && c.variant === "footer" }, g = hl(d);
  return u(ml, { as: i, ref: n, className: Se(g.root, o), role: i === yr ? null : "row", ownerState: d, ...a });
}), yl = je(u("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" }), "ArrowDownward");
function _l(e) {
  return He("MuiTableSortLabel", e);
}
const gn = Be("MuiTableSortLabel", ["root", "active", "icon", "iconDirectionDesc", "iconDirectionAsc", "directionDesc", "directionAsc"]), bl = (e) => {
  const { classes: t, direction: n, active: r } = e, o = { root: ["root", r && "active", `direction${Ee(n)}`], icon: ["icon", `iconDirection${Ee(n)}`] };
  return We(o, _l, t);
}, vl = ue(Xo, { name: "MuiTableSortLabel", slot: "Root", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.root, n.active && t.active];
} })(Ge(({ theme: e }) => ({ cursor: "pointer", display: "inline-flex", justifyContent: "flex-start", flexDirection: "inherit", alignItems: "center", "&:focus": { color: (e.vars || e).palette.text.secondary }, "&:hover": { color: (e.vars || e).palette.text.secondary, [`& .${gn.icon}`]: { opacity: 0.5 } }, [`&.${gn.active}`]: { color: (e.vars || e).palette.text.primary, [`& .${gn.icon}`]: { opacity: 1, color: (e.vars || e).palette.text.secondary } } }))), wl = ue("span", { name: "MuiTableSortLabel", slot: "Icon", overridesResolver: (e, t) => {
  const { ownerState: n } = e;
  return [t.icon, t[`iconDirection${Ee(n.direction)}`]];
} })(Ge(({ theme: e }) => ({ fontSize: 18, marginRight: 4, marginLeft: 4, opacity: 0, transition: e.transitions.create(["opacity", "transform"], { duration: e.transitions.duration.shorter }), userSelect: "none", variants: [{ props: { direction: "desc" }, style: { transform: "rotate(0deg)" } }, { props: { direction: "asc" }, style: { transform: "rotate(180deg)" } }] }))), Sl = $e(function(t, n) {
  const r = Le({ props: t, name: "MuiTableSortLabel" }), { active: o = false, children: i, className: l, direction: s = "asc", hideSortIcon: a = false, IconComponent: c = yl, slots: d = {}, slotProps: g = {}, ...p } = r, f = { ...r, active: o, direction: s, hideSortIcon: a, IconComponent: c }, m = bl(f), y = { slots: d, slotProps: g }, [b, w] = De("root", { elementType: vl, externalForwardedProps: y, ownerState: f, className: Se(m.root, l), ref: n }), [v, R] = De("icon", { elementType: wl, externalForwardedProps: y, ownerState: f, className: m.icon });
  return _(b, { disableRipple: true, component: "span", ...w, ...p, children: [i, a && !o ? null : u(v, { as: c, ...R })] });
}), Cl = je(u("path", { d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z" }), "AutoFixHigh"), ro = je(u("path", { d: "M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4z" }), "BrokenImage"), xl = je(u("path", { d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" }), "FilterList"), _r = je(u("path", { d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5" }), "FormatBold"), Rl = je(u("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" }), "MoreVert"), St = je(u("path", { d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91" }), "RestartAlt"), oo = je(u("path", { d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z" }), "VisibilityOff");
function Zt(e, t) {
  return e ?? t ?? "string";
}
const pt = (e) => e !== false, It = (e) => e === true;
function Un(e) {
  const t = pt(e.tableShowHeader), n = t && pt(e.tableColumnMenu), r = t && pt(e.tableSorting);
  return { header: t, sorting: r, multiSort: r && It(e.tableSortingMulti), columnFiltering: n && It(e.tableFiltering), quickFilter: It(e.tableQuickFilter), columnMenu: n, hiding: n && pt(e.tableHiding), pagination: pt(e.tablePagination), rowSelection: It(e.tableRowSelection) };
}
function io(e) {
  switch (e) {
    case "boolean":
      return { sortable: false, filterable: true, hideable: true };
    case "image":
    case "array":
    case "object":
      return { sortable: false, filterable: false, hideable: true };
    default:
      return { sortable: true, filterable: true, hideable: true };
  }
}
const pn = (e, t) => typeof e == "boolean" ? e : t;
function Jn(e, t, n = {}) {
  const r = io(t);
  return { sortable: e.sorting && pn(n.sortable, r.sortable), filterable: e.columnFiltering && pn(n.filterable, r.filterable), hideable: e.hiding && pn(n.enableHiding, r.hideable) };
}
const ht = (e, t, n) => e >= t && e <= n, Fl = (e) => e ? Number(e.slice(0, 3).padEnd(3, "0")) : 0, br = (e) => {
  const [t, n, r, o, i] = [+e[2], +e[3], +e[4], +e[5], e[6] ? +e[6] : 0];
  return !ht(t, 1, 12) || !ht(n, 1, 31) || !ht(r, 0, 23) || !ht(o, 0, 59) || !ht(i, 0, 59) ? null : new Date(+e[1], t - 1, n, r, o, i, Fl(e[7])).getTime();
}, Al = [{ regex: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?$/, read: br }, { regex: /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})(?::(\d{2}))?$/, read: br }, { regex: /^\d+$/, read: (e) => Wt(Number(e[0])) }];
function zl(e) {
  const t = e.trim();
  for (const n of Al) {
    const r = t.match(n.regex);
    if (r) return n.read(r);
  }
  return null;
}
const Ml = (e) => (t) => Wt(t, e) ?? Wt(t), $l = (e) => e instanceof Date ? e.getTime() : Wt(e) ?? (typeof e == "string" ? zl(e) : null), jl = (e) => e !== null && Number.isFinite(new Date(e).getTime()) ? e : null;
function en(e) {
  const t = (e == null ? void 0 : e.type) === "date" ? Ml(e.dateFormat) : $l;
  return (n) => jl(t(n));
}
function qt(e) {
  const t = new Date(e);
  t.setHours(0, 0, 0, 0);
  const n = (r, o = 2) => String(r).padStart(o, "0");
  return { start: t.getTime(), key: `${n(t.getFullYear(), 4)}-${n(t.getMonth() + 1)}-${n(t.getDate())}` };
}
const Il = 10;
function Pl(e) {
  let t = e;
  if (typeof e == "string") try {
    t = JSON.parse(e);
  } catch {
    return [];
  }
  return Array.isArray(t) ? t : typeof t == "object" && t !== null ? [t] : [];
}
function Yn(e) {
  return e.split(".").pop() || e;
}
function lo(e) {
  return { path: e, visible: true, headerName: Yn(e), sortable: "auto", filterable: "auto", enableHiding: "auto" };
}
function vr(e, t) {
  var _a2;
  const n = !e.format && t.type === "image";
  return { path: e.path, header: e.headerName || e.path, config: e, detected: t, type: Zt((_a2 = e.format) == null ? void 0 : _a2.type, t.type), readDate: en(t), cellConfig: n ? { ...e, format: { type: "image" }, align: e.align ?? "center" } : e };
}
function Dl(e, t) {
  const n = new Map(t.map((o) => [o.path, o])), r = /* @__PURE__ */ new Map();
  for (const o of e) {
    const i = n.get(o.path);
    i && !r.has(o.path) && r.set(o.path, vr(o, i));
  }
  for (const o of t) r.has(o.path) || r.set(o.path, vr(lo(o.path), o));
  return [...r.values()];
}
function so(e, t, n) {
  const r = Number(n) || Il, o = ai(Pl(e), { maxDepth: r }), i = o.meta.maxDepth;
  return { rows: o.rows, columns: Dl(t, o.columns), depthWarning: i > r ? { actual: i, configured: r } : null };
}
function Tl(e, t, n) {
  return e === void 0 ? "json_table_no_oid" : t ? n.length === 0 ? "json_table_no_data" : n.some((r) => r.config.visible) ? null : "json_table_all_columns_hidden" : "json_table_invalid_type";
}
function ao(e, t) {
  return t("json_table_depth_warning").replace("{{actual}}", String(e.actual)).replace("{{configured}}", String(e.configured));
}
const Kn = (e, ...t) => h.t(e, ...t), zn = { string: "#2196f3", number: "#4caf50", boolean: "#ff9800", date: "#9c27b0", image: "#3f51b5", null: "#9e9e9e", object: "#795548", array: "#00bcd4", mixed: "#f44336" }, Mn = { size: 64, objectFit: "contain" };
function uo(e) {
  if (!e) return [];
  try {
    const t = JSON.parse(ui(e));
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}
function co(e, t) {
  const n = Zt(e, t);
  return { type: n, detected: t !== void 0 && t !== n ? t : null };
}
function Nl(e, t) {
  const n = e.detected === null ? null : t("json_table_detected_type_hint").replace("{type}", e.detected), r = `${t("json_table_type_label")}: ${e.type}`;
  return { tooltip: n, ariaLabel: n === null ? r : `${r}, ${n}` };
}
function fo({ badge: e, sx: t }) {
  const { tooltip: n, ariaLabel: r } = Nl(e, Kn), o = u(tt, { label: e.type, size: "small", "aria-label": r, sx: [{ backgroundColor: zn[e.type] || zn.string, color: "#fff", fontWeight: 600 }, ...Array.isArray(t) ? t : [t]] });
  return n === null ? o : u(ge, { title: n, children: o });
}
function Ol({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: i, loading: l }) {
  const [s, a] = q(""), [c, d] = q(null), [g, p] = q(null), [f, m] = q(false), y = Ye(0), b = Ye(/* @__PURE__ */ new Map()), w = !s, v = G(() => {
    if (!s) return e;
    const C = s.toLowerCase();
    return e.filter((M) => M.path.toLowerCase().includes(C) || M.headerName.toLowerCase().includes(C));
  }, [e, s]), R = G(() => e.filter((C) => C.visible).length, [e]), O = z((C) => {
    o(e.map((M) => M.path === C ? { ...M, visible: !M.visible } : M));
  }, [e, o]), D = z((C, M) => {
    C.stopPropagation(), O(M);
  }, [O]), x = z((C) => (M) => {
    M ? b.current.set(C, M) : b.current.delete(C);
  }, []), F = z((C) => {
    o(e.map((M) => ({ ...M, visible: C })));
  }, [e, o]), T = z((C, M) => {
    C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", M), d(M);
  }, []), A = z((C, M) => {
    C.preventDefault(), y.current += 1, M !== c && p(M);
  }, [c]), W = z((C) => {
    C.preventDefault(), y.current -= 1, y.current <= 0 && (y.current = 0, p(null));
  }, []), P = z((C) => {
    C.preventDefault(), C.dataTransfer.dropEffect = "move";
  }, []), ce = z((C, M) => {
    C.preventDefault(), y.current = 0, p(null), d(null);
    const K = C.dataTransfer.getData("text/plain");
    if (!K || K === M) return;
    const k = [...e], le = k.findIndex((Xe) => Xe.path === K), U = k.findIndex((Xe) => Xe.path === M);
    if (le === -1 || U === -1) return;
    const [ct] = k.splice(le, 1), dt = le < U ? U - 1 : U;
    k.splice(dt, 0, ct), o(k);
  }, [e, o]), de = z(() => {
    y.current = 0, d(null), p(null);
  }, []), te = z(() => {
    o(e.map((C) => lo(C.path))), m(false);
  }, [e, o]), re = z(() => {
    m(true);
  }, []), we = z(() => {
    m(false);
  }, []), ie = z((C, M, K) => {
    var _a2, _b;
    switch (C.key) {
      case "Enter":
      case " ":
        C.preventDefault(), r(M.path);
        break;
      case "ArrowDown":
        if (C.preventDefault(), K < v.length - 1) {
          const k = v[K + 1].path;
          r(k), (_a2 = b.current.get(k)) == null ? void 0 : _a2.focus();
        }
        break;
      case "ArrowUp":
        if (C.preventDefault(), K > 0) {
          const k = v[K - 1].path;
          r(k), (_b = b.current.get(k)) == null ? void 0 : _b.focus();
        }
        break;
      case "v":
      case "V":
        C.preventDefault(), O(M.path);
        break;
    }
  }, [v, r, O]);
  return _($, { sx: { display: "flex", flexDirection: "column", height: "100%" }, children: [_(Jr, { variant: "dense", sx: { borderBottom: 1, borderColor: "divider", gap: 0.5, px: 1.5, minHeight: 48 }, children: [u(Y, { size: "small", placeholder: h.t("json_table_search_columns"), value: s, onChange: (C) => a(C.target.value), slotProps: { input: { startAdornment: u(Zr, { position: "start", children: u(Yr, { fontSize: "small" }) }), "aria-label": h.t("json_table_search_columns") } }, sx: { flexGrow: 1, minWidth: 0 } }), u(ge, { title: h.t("json_table_refresh_columns"), children: u("span", { children: u(ne, { size: "small", onClick: i, disabled: l, "aria-label": h.t("json_table_refresh_columns"), children: u(ci, { fontSize: "small" }) }) }) }), u(ge, { title: h.t("json_table_show_all"), children: u(ne, { size: "small", onClick: () => F(true), "aria-label": h.t("json_table_show_all"), children: u(di, { fontSize: "small" }) }) }), u(ge, { title: h.t("json_table_hide_all"), children: u(ne, { size: "small", onClick: () => F(false), "aria-label": h.t("json_table_hide_all"), children: u(oo, { fontSize: "small" }) }) }), u(ge, { title: h.t("json_table_reset_all"), children: u(ne, { size: "small", onClick: re, "aria-label": h.t("json_table_reset_all"), children: u(St, { fontSize: "small" }) }) })] }), u($, { sx: { flexGrow: 1, overflow: "auto", p: 1.5, display: "flex", flexDirection: "column", gap: 0.75 }, children: v.length === 0 ? u($, { sx: { display: "flex", alignItems: "center", justifyContent: "center", py: 4 }, children: u(S, { variant: "body2", color: "text.secondary", children: e.length === 0 ? h.t("json_table_no_columns") : h.t("json_table_no_search_results") }) }) : v.map((C, M) => {
    var _a2;
    const K = t.find((U) => U.path === C.path), k = n === C.path, le = co((_a2 = C.format) == null ? void 0 : _a2.type, K == null ? void 0 : K.type);
    return u($i, { ref: x(C.path), "data-column-path": C.path, onClick: () => r(C.path), onKeyDown: (U) => ie(U, C, M), draggable: w, onDragStart: w ? (U) => T(U, C.path) : void 0, onDragEnter: w ? (U) => A(U, C.path) : void 0, onDragLeave: w ? W : void 0, onDragOver: w ? P : void 0, onDrop: w ? (U) => ce(U, C.path) : void 0, onDragEnd: w ? de : void 0, variant: "outlined", tabIndex: 0, role: "button", "aria-selected": k, "aria-label": `${C.headerName || C.path}, ${le.type}, ${C.visible ? h.t("json_table_visible") : h.t("json_table_hidden")}`, sx: { p: 1, cursor: w ? "grab" : "pointer", flexShrink: 0, border: 2, borderColor: k ? "primary.main" : "divider", backgroundColor: k ? "action.selected" : "background.paper", opacity: c === C.path ? 0.4 : C.visible ? 1 : 0.55, borderTop: g === C.path ? "3px solid" : void 0, borderTopColor: g === C.path ? "primary.main" : void 0, "&:hover": { backgroundColor: k ? "action.selected" : "action.hover" }, "&:focus": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: "2px" }, transition: "all 0.15s ease-in-out" }, children: _($, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [w && u(Si, { fontSize: "small", sx: { color: "text.disabled", cursor: "grab", flexShrink: 0 }, "aria-hidden": "true" }), u(Rt, { checked: C.visible, onClick: (U) => D(U, C.path), size: "small", sx: { p: 0.5 }, inputProps: { "aria-label": `${h.t("json_table_visible")}: ${C.headerName || C.path}` } }), _($, { sx: { flexGrow: 1, minWidth: 0 }, children: [u(S, { variant: "body2", sx: { fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.8rem" }, title: C.path, children: C.headerName || C.path }), C.headerName && C.headerName !== C.path && u(S, { variant: "caption", color: "text.secondary", sx: { fontFamily: "monospace", fontSize: "0.65rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }, title: C.path, children: C.path })] }), u(fo, { badge: le, sx: { fontSize: "0.65rem", height: 20, minWidth: 48, flexShrink: 0 } })] }) }, C.path);
  }) }), e.length > 0 && u($, { sx: { borderTop: 1, borderColor: "divider", px: 2, py: 1 }, children: _(S, { variant: "caption", color: "text.secondary", "aria-live": "polite", "aria-atomic": "true", children: [R, " / ", e.length, " ", h.t("json_table_columns_visible")] }) }), _(Ln, { open: f, onClose: we, "aria-labelledby": "reset-dialog-title", "aria-describedby": "reset-dialog-description", children: [u(Wn, { id: "reset-dialog-title", children: h.t("json_table_reset_all") }), u(Gn, { children: u(vi, { id: "reset-dialog-description", children: h.t("json_table_reset_confirm_message") }) }), _(Bn, { children: [u(Ae, { onClick: we, color: "primary", children: h.t("cancel") }), u(Ae, { onClick: te, color: "error", variant: "contained", autoFocus: true, children: h.t("json_table_reset_all") })] })] })] });
}
function $n(e) {
  return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
}
const El = 0, kl = 20, wr = 2;
function Vl(e) {
  if (e == null) return wr;
  const t = Number(e);
  return Number.isFinite(t) ? Math.max(El, Math.min(kl, Math.floor(t))) : wr;
}
function go(e, t = {}) {
  const { prefix: n = "", suffix: r = "", thousands: o = false } = t, i = Vl(t.decimals);
  let l = e.toFixed(i);
  if (o) {
    const [s, a] = l.split("."), c = s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    l = a !== void 0 ? `${c}.${a}` : c;
  }
  return `${n}${l}${r}`;
}
const Hl = [{ label: "YYYY-MM-DD", value: "yyyy-MM-dd" }, { label: "DD.MM.YYYY", value: "dd.MM.yyyy" }, { label: "DD.MM.YYYY HH:mm", value: "dd.MM.yyyy HH:mm" }, { label: "DD.MM.YYYY HH:mm:ss", value: "dd.MM.yyyy HH:mm:ss" }, { label: "MM/DD/YYYY", value: "MM/dd/yyyy" }, { label: "MM/DD/YYYY HH:mm", value: "MM/dd/yyyy HH:mm" }, { label: "HH:mm:ss", value: "HH:mm:ss" }, { label: "HH:mm", value: "HH:mm" }, { label: "ISO-8601 (UTC)", value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" }];
function po(e, t, n) {
  if (e == null || e === "") return "";
  const r = n(e);
  if (r === null) return $n(e);
  try {
    const o = new Date(r), i = t || "yyyy-MM-dd", l = (c, d = 2) => String(c).padStart(d, "0"), s = { yyyy: String(o.getFullYear()), MM: l(o.getMonth() + 1), dd: l(o.getDate()), HH: l(o.getHours()), mm: l(o.getMinutes()), ss: l(o.getSeconds()), SSS: l(o.getMilliseconds(), 3) };
    if (i === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(i)) return o.toISOString();
    let a = i;
    for (const [c, d] of Object.entries(s).sort((g, p) => p[0].length - g[0].length)) a = a.replaceAll(c, d);
    return a;
  } catch {
    return $n(e);
  }
}
function jn(e, t = "true", n = "false") {
  return typeof e == "boolean" ? e ? t : n : $n(e);
}
function ho(e, t) {
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
function Bl({ format: e, onChange: t, discoveredColumn: n }) {
  const r = G(() => {
    if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
      const o = typeof n.max == "number" ? n.max : 0;
      return n.min + (o - n.min) * 0.75;
    }
    return 1234.567;
  }, [n]);
  return _(Oe, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_number_format") }), _($, { children: [_(S, { variant: "caption", color: "text.secondary", gutterBottom: true, children: [h.t("json_table_number_decimals"), ": ", e.numberDecimals ?? 2] }), u(xi, { value: e.numberDecimals ?? 2, onChange: (o, i) => t({ type: "number", numberDecimals: i }), min: 0, max: 10, marks: true, step: 1, valueLabelDisplay: "auto", size: "small" })] }), u(Y, { label: h.t("json_table_number_prefix"), value: e.numberPrefix || "", onChange: (o) => t({ type: "number", numberPrefix: o.target.value }), size: "small", placeholder: "$, \u20AC, \xA3" }), u(Y, { label: h.t("json_table_number_suffix"), value: e.numberSuffix || "", onChange: (o) => t({ type: "number", numberSuffix: o.target.value }), size: "small", placeholder: "%, kg, \xB0C" }), u(ke, { control: u(Ze, { checked: e.numberThousandsSeparator || false, onChange: (o) => t({ type: "number", numberThousandsSeparator: o.target.checked }), size: "small" }), label: u(S, { variant: "body2", children: h.t("json_table_number_thousands") }) }), _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), _(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace" }, children: [r, " \u2192", " ", go(r, { decimals: e.numberDecimals, prefix: e.numberPrefix, suffix: e.numberSuffix, thousands: e.numberThousandsSeparator })] })] })] });
}
const Ll = en();
function Wl({ format: e, detectedFormat: t, onChange: n }) {
  return _(Oe, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_date_format") }), t && u(Y, { label: h.t("json_table_date_input_format"), value: t, disabled: true, size: "small", helperText: h.t("json_table_date_detected_hint") }), _(ze, { fullWidth: true, size: "small", children: [u(Me, { children: h.t("json_table_date_output_format") }), u(xe, { label: h.t("json_table_date_output_format"), value: e.dateFormat || "yyyy-MM-dd", onChange: (r) => n({ type: "date", dateFormat: r.target.value }), children: Hl.map((r) => u(V, { value: r.value, children: r.label }, r.value)) })] }), _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), u(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace" }, children: po(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd", Ll) })] })] });
}
function Gl({ format: e, onChange: t }) {
  return _(Oe, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_boolean_format") }), u(Y, { label: h.t("json_table_boolean_true"), value: e.booleanTrue || "", onChange: (n) => t({ type: "boolean", booleanTrue: n.target.value }), size: "small", placeholder: "Yes, On, \u2713, Active" }), u(Y, { label: h.t("json_table_boolean_false"), value: e.booleanFalse || "", onChange: (n) => t({ type: "boolean", booleanFalse: n.target.value }), size: "small", placeholder: "No, Off, \u2717, Inactive" }), _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), _(oe, { direction: "row", spacing: 2, sx: { mt: 0.5 }, children: [_(S, { variant: "body2", sx: { fontFamily: "monospace" }, children: ["true \u2192 ", jn(true, e.booleanTrue, e.booleanFalse)] }), _(S, { variant: "body2", sx: { fontFamily: "monospace" }, children: ["false \u2192 ", jn(false, e.booleanTrue, e.booleanFalse)] })] })] })] });
}
function ql({ format: e, onChange: t }) {
  return _(Oe, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_string_format") }), _(ze, { size: "small", fullWidth: true, children: [u(Me, { children: h.t("json_table_string_case") }), _(xe, { label: h.t("json_table_string_case"), value: e.stringCase ?? "none", onChange: (n) => t({ type: "string", stringCase: n.target.value }), children: [u(V, { value: "none", children: h.t("json_table_string_case_none") }), u(V, { value: "upper", children: h.t("json_table_string_case_upper") }), u(V, { value: "lower", children: h.t("json_table_string_case_lower") }), u(V, { value: "title", children: h.t("json_table_string_case_title") })] })] }), _(oe, { direction: "row", spacing: 1, children: [u(Y, { label: h.t("json_table_string_prefix"), value: e.stringPrefix ?? "", onChange: (n) => t({ type: "string", stringPrefix: n.target.value || void 0 }), size: "small", fullWidth: true }), u(Y, { label: h.t("json_table_string_suffix"), value: e.stringSuffix ?? "", onChange: (n) => t({ type: "string", stringSuffix: n.target.value || void 0 }), size: "small", fullWidth: true })] }), u(ke, { control: u(Ze, { size: "small", checked: !!e.stringTrim, onChange: (n) => t({ type: "string", stringTrim: n.target.checked }) }), label: h.t("json_table_string_trim") }), u(Y, { label: h.t("json_table_string_max_length"), type: "number", value: e.stringMaxLength ?? "", onChange: (n) => t({ type: "string", stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0 }), size: "small", fullWidth: true, slotProps: { htmlInput: { min: 1 } } }), u(Y, { label: h.t("json_table_string_regex"), value: e.stringRegex ?? "", onChange: (n) => t({ type: "string", stringRegex: n.target.value || void 0 }), size: "small", fullWidth: true, placeholder: "e.g. (\\d+)" }), e.stringRegex && _(oe, { direction: "row", spacing: 1, children: [u(Y, { label: h.t("json_table_string_regex_group"), type: "number", value: e.stringRegexGroup ?? 0, onChange: (n) => t({ type: "string", stringRegexGroup: parseInt(n.target.value, 10) || 0 }), size: "small", fullWidth: true, slotProps: { htmlInput: { min: 0 } } }), u(Y, { label: h.t("json_table_string_regex_flags"), value: e.stringRegexFlags ?? "", onChange: (n) => t({ type: "string", stringRegexFlags: n.target.value || void 0 }), size: "small", fullWidth: true, placeholder: "i, g, m \u2026" })] }), u(Bt, {}), _(oe, { direction: "row", spacing: 1, flexWrap: "wrap", children: [u(ke, { control: u(Ze, { size: "small", checked: e.stringFontWeight === "bold", onChange: (n) => t({ type: "string", stringFontWeight: n.target.checked ? "bold" : "normal" }) }), label: u(S, { variant: "body2", fontWeight: "bold", children: h.t("json_table_string_font_weight") }) }), u(ke, { control: u(Ze, { size: "small", checked: e.stringFontStyle === "italic", onChange: (n) => t({ type: "string", stringFontStyle: n.target.checked ? "italic" : "normal" }) }), label: u(S, { variant: "body2", fontStyle: "italic", children: h.t("json_table_string_font_style") }) })] }), _(oe, { direction: "row", spacing: 1, children: [u(Y, { label: h.t("json_table_string_font_size"), type: "number", value: e.stringFontSize ?? "", onChange: (n) => t({ type: "string", stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0 }), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 8, max: 72 } }, placeholder: "px" }), u(st, { label: h.t("json_table_string_text_color"), value: e.stringTextColor ?? "", overridden: !!e.stringTextColor, onChange: (n) => t({ type: "string", stringTextColor: n || void 0 }) })] }), _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), u(S, { variant: "body2", sx: { mt: 0.5, fontFamily: "monospace", fontWeight: e.stringFontWeight, fontStyle: e.stringFontStyle, ...e.stringFontSize && { fontSize: `${e.stringFontSize}px` }, ...e.stringTextColor && { color: e.stringTextColor } }, children: ho("Hello World", e ?? { type: "string" }) })] })] });
}
function X(e) {
  if (Number.isNaN(e)) throw NaN;
  if (!e) return e;
  if (e && typeof e == "object") throw NaN;
  return e;
}
function Ul(e, t) {
  if (!Array.isArray(e) || e.length < t) throw { type: "Invalid Arguments" };
  return e;
}
function Ne(e, t = 0) {
  if (!e || t === 1 / 0 || typeof e != "object") return e;
  if (Array.isArray(e)) {
    for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
      if (t === 0) throw { type: "Exceeded Allowed Depth" };
      Ne(e[n], t - 1);
    }
  } else {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r++) {
      const o = e[n[r]];
      if (typeof o == "object" && o) {
        if (t === 0) throw { type: "Exceeded Allowed Depth" };
        Ne(o, t - 1);
      }
    }
  }
  return e;
}
function Jl(e, t, n) {
  if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
  if (Number.isNaN(+X(e)) && t !== null) throw NaN;
  if (Number.isNaN(+X(t))) throw NaN;
  return t === null && !e ? null : e === null && !t ? 0 : e;
}
async function Yl(e, t) {
  const n = [];
  let r = 0;
  for (const o of e) await t(o, r++, e) && n.push(o);
  return n;
}
async function Kl(e, t) {
  let n = 0;
  for (const r of e) if (await t(r, n++, e)) return true;
  return false;
}
async function Xl(e, t) {
  let n = 0;
  for (const r of e) if (!await t(r, n++, e)) return false;
  return true;
}
async function Ql(e, t) {
  const n = [];
  let r = 0;
  for (const o of e) n.push(await t(o, r++, e));
  return n;
}
async function Zl(e, t, n, r = 0) {
  if (e.length === 0) {
    if (typeof n < "u") return n;
    throw new Error("Array has no elements.");
  }
  const o = typeof n > "u" ? 1 : 0;
  let i = Ne(o ? e[0] : n, r);
  for (let l = o; l < e.length; l++) i = Ne(await t(i, e[l]), r);
  return i;
}
const Ut = { filter: Yl, some: Kl, every: Xl, map: Ql, reduce: Zl }, L = /* @__PURE__ */ Symbol.for("json_logic_sync"), fe = /* @__PURE__ */ Symbol.for("json_logic_compiled"), ve = /* @__PURE__ */ Symbol.for("json_logic_original"), Sr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
function nt(e) {
  return typeof e == "function" ? e[L] === true : Array.isArray(e) ? e.every(nt) : !(e && e.asyncMethod && !e.method);
}
function mo(e, t = true) {
  return e[L] = t, e;
}
function Ft(e) {
  return Array.isArray(e) ? e : [e];
}
const hn = /* @__PURE__ */ new WeakMap();
function Cr(e) {
  return !e || typeof e != "function" || !e.length ? 0 : (hn.has(e) || hn.set(e, es(e)), hn.get(e));
}
function es(e) {
  if (!e || typeof e != "function" || !e.length) return 0;
  let t = e.toString();
  return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
}
function ts(e, ...t) {
  let n = "";
  const r = this;
  for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), nt(t[o]) || (r.asyncDetected = true), n += (nt(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][fe] < "u" ? n += t[o][fe] : n += Q(t[o], r));
  return { [fe]: n };
}
function ns(e, t) {
  return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || ["Number", "String", "Boolean"].includes(e.constructor.name) || !t && e.constructor.name === "Object";
}
function Jt(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => Jt(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && Jt(o, t, n);
  }
  return true;
}
function In(e, t) {
  if (!t.async) return true;
  if (Array.isArray(e)) return e.every((n) => In(n, t));
  if (e && typeof e == "object") {
    const n = Object.keys(e);
    if (n.length === 0) return true;
    const r = n[0], o = e[r];
    return nt(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][L] == "function" && t.methods[r][L](e, { engine: t })) : In(o, t) : false;
  }
  return true;
}
function Q(e, t = {}) {
  const { notTraversed: n = [], async: r, processing: o = [], values: i = [], engine: l } = t;
  function s(d, g = false) {
    return ns(d, g) ? JSON.stringify(d) : (i.push(d), `values[${i.length - 1}]`);
  }
  if (Array.isArray(e)) {
    let d = "";
    for (let g = 0; g < e.length; g++) g > 0 && (d += ","), d += Q(e[g], t);
    return "[" + d + "]";
  }
  let a = false;
  function c(d) {
    return t.asyncDetected = t.asyncDetected || a, r && a ? `await ${d}` : d;
  }
  if (e && typeof e == "object") {
    const d = Object.keys(e), g = d[0];
    if (!g) return s(e);
    if (!l.methods[g] || d.length > 1) {
      if (l.isData(e, g)) return s(e, true);
      throw { type: "Unknown Operator", key: g };
    }
    if (!t.engine.disableInline && l.methods[g] && Jt(e, l, t)) return In(e, l) ? s((l.fallback || l).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${s(l.run(e))})`) : (o.push(l.run(e).then((y) => s(y))), `__%%%${o.length - 1}%%%__`);
    let p = e[g];
    if ((!p || typeof p != "object") && !l.methods[g].lazy && (p = [p]), l.methods[g] && l.methods[g].compile) {
      let y = l.methods[g].compile(p, t);
      if (y[fe] && (y = y[fe]), (y || "").startsWith("await") && (t.asyncDetected = true), y !== false) return y;
    }
    let f = l.methods[g].optimizeUnary ? "" : "coerceArray";
    !f && Array.isArray(p) && p.length === 1 && !Array.isArray(p[0]) ? p = p[0] : f && Array.isArray(p) && (f = "");
    const m = [", context", ", context, above", ", context, above, engine"];
    if (typeof l.methods[g] == "function") {
      a = !nt(l.methods[g]);
      const y = m[Cr(l.methods[g]) - 1] || m[2];
      return c(`engine.methods["${g}"](${f}(` + Q(p, t) + ")" + y + ")");
    } else {
      a = !!(r && l.methods[g] && l.methods[g].asyncMethod);
      const y = Cr(a ? l.methods[g].asyncMethod : l.methods[g].method);
      let b = m[y - 1] || m[2];
      return a && typeof l.methods[g][L] == "function" && l.methods[g][L](p, { engine: l }) && (a = false, b = b.replace("engine", "engine.fallback")), l.methods[g] && !l.methods[g].lazy ? c(`engine.methods["${g}"]${a ? ".asyncMethod" : ".method"}(${f}(` + Q(p, t) + ")" + b + ")") : (n.push(p), c(`engine.methods["${g}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + b + ")"));
    }
  }
  return s(e);
}
function Yt(e, t = {}) {
  Object.assign(t, Object.assign({ notTraversed: [], methods: [], state: {}, processing: [], async: t.engine.async, asyncDetected: false, values: [], compile: ts }, t));
  const n = Q(e, t);
  return rs(e, n, t);
}
function rs(e, t, n) {
  const { engine: r, methods: o, notTraversed: i, processing: l = [], values: s } = n, a = [];
  l.forEach((d, g) => {
    t = t.replace(`__%%%${g}%%%__`, d);
  });
  const c = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
  return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(c)(s, o, i, Ut, r, a, Ft, X, Ul, Jl, Ne), { [L]: !n.asyncDetected, deterministic: !t.includes("("), aboveDetected: typeof t == "string" && t.includes(", above") });
}
const os = () => {
  try {
    const e = {};
    return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
  } catch {
    return false;
  }
}, lt = os(), mt = /* @__PURE__ */ new Map();
function it(e) {
  if (mt.has(e)) return mt.get(e);
  mt.size > 2048 && mt.clear();
  const t = is(e);
  return mt.set(e, t), t;
}
function is(e, t = ".", n = "\\", r = "/") {
  const o = [];
  let i = "";
  for (let l = 0; l < e.length; l++) {
    const s = e[l];
    s === n ? e[l + 1] === t || e[l + 1] === r ? (i += e[l + 1], l++) : e[l + 1] === n ? (i += n, l++) : i += n : s === t ? (o.push(i), i = "") : i += s;
  }
  return o.length !== e.length && o.push(i), o;
}
const Pn = { get: { [L]: true, method: ([e, t, n], r, o, i) => {
  const l = n === void 0 ? null : n, s = it(String(t));
  for (let a = 0; a < s.length; a++) if (e == null || (e = e[s[a]], e === void 0)) return l;
  return i.allowFunctions || typeof e[t] != "function" ? e : null;
}, deterministic: true, compile: (e, t) => {
  let n = null, r = e, o = null;
  if (Array.isArray(e) && e.length <= 3) {
    if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
    r = r.toString();
    const i = it(r);
    return lt ? `((${Q(o, t)})${i.map((l) => `?.[${Q(l, t)}]`).join("")} ?? ${Q(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((l, s) => `(${l}||0)[${JSON.stringify(s)}]`, `(${Q(o, t)}||0)`)}, ${Q(n, t)}))`;
  }
  return false;
} }, var: { [ve]: true, [L]: true, method: (e, t, n, r) => {
  let o;
  Array.isArray(e) && (o = e[1], e = e[0]);
  let i = 0;
  for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
  const l = o === void 0 ? null : o;
  if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
  const s = it(String(e));
  for (let a = 0; a < s.length; a++) if (t == null || (t = t[s[a]], t === void 0)) return l;
  return r.allowFunctions || typeof t != "function" ? t : null;
}, deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"), optimizeUnary: true, compile: (e, t) => {
  let n = e, r = null;
  if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
    if (Array.isArray(e) && (n = e[0], r = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
    if (typeof n > "u" || n === null || n === "") return "context";
    if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
    const o = it(n);
    if (!lt) {
      const l = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((s, a) => `(${s}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${Q(r, t)})))`;
      return t.engine.allowFunctions ? l : `(typeof (prev = ${l}) === 'function' ? null : prev)`;
    }
    const i = `(context${o.map((l) => `?.[${JSON.stringify(l)}]`).join("")} ?? ${Q(r, t)})`;
    return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
  }
  return false;
} }, missing: { [L]: true, optimizeUnary: false, method: (e, t) => {
  if (!e.length) return [];
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const o = it(String(e[r]));
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
}, compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false, deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0) }, missing_some: { [L]: true, optimizeUnary: false, method: ([e, t], n) => {
  const r = Pn.missing.method(t, n);
  return t.length - r.length >= e ? [] : r;
}, compile: ([e, t], n) => {
  if (!Array.isArray(t)) return false;
  let r = Pn.missing.compile(t, n);
  return r || (r = n.compile`engine.methods.missing.method(${{ [fe]: JSON.stringify(t) }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
}, deterministic: false } }, ls = { ...Pn }, B = { type: "Invalid Arguments" };
function ee(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => ee(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && ee(o, t, n);
  }
  return true;
}
function he(e, t, n) {
  if (Array.isArray(e)) return e.every((r) => he(r, t, n));
  if (e && typeof e == "object") {
    const r = Object.keys(e)[0], o = e[r];
    if (t.isData(e, r) || r === void 0) return true;
    if (!t.methods[r]) throw { type: "Unknown Operator", key: r };
    return t.methods[r].lazy ? typeof t.methods[r][L] == "function" ? t.methods[r][L](o, n) : t.methods[r][L] : typeof t.methods[r][L] == "function" ? t.methods[r][L](o, n) : t.methods[r][L] && he(o, t, n);
  }
  return true;
}
function J(e, t, n, r) {
  if (!e || typeof e != "object") return e;
  if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
    const o = t.optimizedMap.get(e);
    return typeof o == "function" ? o(n, r) : o;
  }
  return t.run(e, n, { above: r });
}
const yt = Et("every", true), H = { "+": (e) => {
  if (!e) return 0;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return X(+e);
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
  if (e.length === 0) throw B;
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
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return X(-e);
  if (typeof e == "object" && !Array.isArray(e)) throw NaN;
  if (e[0] && typeof e[0] == "object") throw NaN;
  if (e.length === 0) throw B;
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
  if (e.length < 2) throw B;
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
  if (!e.length || typeof e[0] != "number") throw B;
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (typeof e[n] != "number") throw B;
    e[n] > t && (t = e[n]);
  }
  return t;
}, min: (e) => {
  if (!e.length || typeof e[0] != "number") throw B;
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (typeof e[n] != "number") throw B;
    e[n] < t && (t = e[n]);
  }
  return t;
}, in: ([e, t]) => (t || []).includes(e), preserve: { lazy: true, method: mo((e) => e, true), [L]: () => true }, if: { [ve]: true, method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (e.length === 1) return J(e[0], r, t, n);
  if (e.length < 2) return null;
  e = [...e], e.length % 2 !== 1 && e.push(null);
  const o = e.pop();
  for (; e.length; ) {
    const i = e.shift(), l = e.shift(), s = J(i, r, t, n);
    if (r.truthy(s)) return J(l, r, t, n);
  }
  return J(o, r, t, n);
}, [L]: (e, t) => he(e, t.engine, t), deterministic: (e, t) => ee(e, t.engine, t), asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (e.length === 1) return r.run(e[0], t, { above: n });
  if (e.length < 2) return null;
  e = [...e], e.length % 2 !== 1 && e.push(null);
  const o = e.pop();
  for (; e.length; ) {
    const i = e.shift(), l = e.shift(), s = await r.run(i, t, { above: n });
    if (r.truthy(s)) return r.run(l, t, { above: n });
  }
  return r.run(o, t, { above: n });
}, lazy: true }, "<": Ue("<", (e, t) => e < t), "<=": Ue("<=", (e, t) => e <= t), ">": Ue(">", (e, t) => e > t), ">=": Ue(">=", (e, t) => e >= t), "==": Ue("==", (e, t) => e == t), "===": Ue("===", (e, t) => e === t), "!=": Ue("!=", (e, t) => e != t), "!==": Ue("!==", (e, t) => e !== t), or: { [L]: (e, t) => he(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = J(e[i], r, t, n), r.truthy(o)) return o;
  return o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), r.truthy(o)) return o;
  return o;
}, deterministic: (e, t) => ee(e, t.engine, t), compile: (e, t) => {
  let n = t.compile``;
  if (Array.isArray(e)) {
    if (!e.length) return t.compile`null`;
    for (let r = 0; r < e.length; r++) n = t.compile`${n} engine.truthy(prev = ${e[r]}) ? prev : `;
    return n = t.compile`${n} prev`, n;
  }
  return false;
}, lazy: true }, "??": { [L]: (e, t) => he(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  let o;
  for (let i = 0; i < e.length; i++) if (o = J(e[i], r, t, n), o != null) return o;
  return o === void 0 ? null : o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), o != null) return o;
  return o === void 0 ? null : o;
}, deterministic: (e, t) => ee(e, t.engine, t), compile: (e, t) => lt ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
  const o = Q(n, t);
  return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
}).join(" ?? ")})` : `(${Q(e, t)}).reduce((a,b) => (a) ?? b, null)` : false, lazy: true }, try: { [L]: (e, t) => he(e, t.engine, t), method: (e, t, n, r) => {
  Array.isArray(e) || (e = [e]);
  let o, i;
  for (let l = 0; l < e.length; l++) try {
    return i ? o = J(e[l], r, { type: i.type || i.error || i.message || i.constructor.name }, [null, t, n]) : o = J(e[l], r, t, n), o;
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
}, deterministic: (e, t) => ee(e[0], t.engine, { ...t, insideTry: true }) && ee(e, t.engine, { ...t, insideIterator: true, insideTry: true }), lazy: true, compile: (e, t) => {
  if (!Array.isArray(e) || !e.length) return false;
  let n;
  try {
    "+" in e[0] && e.length > 1 ? n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
  } catch (r) {
    Number.isNaN(r) && (r = { type: "NaN" }), n = { [fe]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; ` };
  }
  if (e.length > 1) for (let r = 1; r < e.length; r++) try {
    r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
  } catch (o) {
    Number.isNaN(o) && (o = { type: "NaN" }), r === e.length - 1 ? n = t.compile`${n} throw ${{ [fe]: JSON.stringify(o) }} ` : n = t.compile`${n} ${{ [fe]: `context = ${JSON.stringify(o)};` }}`;
  }
  else n[fe].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
  return n = t.compile`${n} } })(context, above)`, n[fe].includes("await") && (n[fe] = n[fe].replace("((context", "await (async (context")), n;
} }, and: { [L]: (e, t) => he(e, t.engine, t), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = J(e[i], r, t, n), !r.truthy(o)) return o;
  return o;
}, asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  if (!e.length) return null;
  let o;
  for (let i = 0; i < e.length; i++) if (o = await r.run(e[i], t, { above: n }), !r.truthy(o)) return o;
  return o;
}, lazy: true, deterministic: (e, t) => ee(e, t.engine, t), compile: (e, t) => {
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
  if (!e) throw B;
  const o = J(e, r, t, n), i = Array.isArray(e) ? o[0] : o;
  if (typeof i == "string" || Array.isArray(i)) return i.length;
  if (i && typeof i == "object") return Object.keys(i).length;
  throw B;
}, asyncMethod: async (e, t, n, r) => {
  if (!e) throw B;
  const o = await J(e, r, t, n), i = Array.isArray(e) ? o[0] : o;
  if (typeof i == "string" || Array.isArray(i)) return i.length;
  if (i && typeof i == "object") return Object.keys(i).length;
  throw B;
}, deterministic: (e, t) => ee(e, t.engine, t), lazy: true }, exists: { method: (e, t, n, r) => H.val.method(e, t, n, r, Sr) !== Sr, deterministic: false }, val: { [ve]: true, [L]: true, method: (e, t, n, r, o = null) => {
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
    return lt ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
  }
  if (typeof e == "object" && !Array.isArray(e)) if (he(e, t.engine, t) && ee(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, { above: t.above });
  else return false;
  if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
  if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
  if (!Array.isArray(e)) return n(lt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
  if (Array.isArray(e)) {
    let r = t.compile`context`;
    for (let o = 0; o < e.length; o++) e[o] !== null && (lt ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
    return n(t.compile`(${r})`);
  }
  return false;
} }, map: Et("map"), some: { ...Et("some", true), method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  let [o, i] = e;
  o = J(o, r, t, n) || [];
  for (let l = 0; l < o.length; l++) if (r.truthy(J(i, r, o[l], [o, t, n]))) return true;
  return false;
} }, all: { [L]: yt[L], method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  const o = J(e[0], r, t, n) || [];
  if (Array.isArray(o) && o.length === 0) return false;
  const i = e[1];
  for (let l = 0; l < o.length; l++) if (!r.truthy(J(i, r, o[l], [o, t, n]))) return false;
  return true;
}, asyncMethod: async (e, t, n, r) => {
  if (Array.isArray(e)) {
    const o = await r.run(e[0], t, n);
    if (Array.isArray(o) && o.length === 0) return false;
  }
  return yt.asyncMethod(e, t, n, r);
}, compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${yt.compile([{ [fe]: "prev" }, e[1]], t)}` : false, deterministic: yt.deterministic, lazy: yt.lazy }, none: { [L]: (e, t) => he(e, t.engine, t), lazy: true, method: (e, t, n, r) => !H.some.method(e, t, n, r), asyncMethod: async (e, t, n, r) => !await H.some.asyncMethod(e, t, n, r), compile: (e, t) => {
  const n = H.some.compile(e, t);
  return n ? t.compile`!(${n})` : false;
} }, merge: (e) => {
  if (!Array.isArray(e)) return [e];
  const t = [];
  for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let r = 0; r < e[n].length; r++) t.push(e[n][r]);
  else t.push(e[n]);
  return t;
}, filter: Et("filter", true), reduce: { deterministic: (e, t) => ee(e[0], t.engine, t) && ee(e[1], t.engine, { ...t, insideIterator: true }), compile: (e, t) => {
  if (!Array.isArray(e)) throw B;
  const { async: n } = t;
  let [r, o, i] = e;
  r = Q(r, t), typeof i < "u" && (i = Q(i, t));
  const l = { ...t, extraArguments: "above", avoidInlineAsync: true };
  o = Yt(o, l);
  const s = o.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
  return t.methods.push(o), n && (!nt(o) || r.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s})), ${a}(${i}))` : `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${s})))`;
}, method: (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  let [o, i, l] = e;
  l = Ne(J(l, r, t, n), r.options.maxDepth), o = J(o, r, t, n) || [];
  let s = (a, c) => Ne(r.run(i, { accumulator: a, current: c }, { above: [o, t, n] }), r.options.maxDepth);
  if (r.optimizedMap.has(i) && typeof r.optimizedMap.get(i) == "function") {
    const a = r.optimizedMap.get(i);
    s = (c, d) => Ne(a({ accumulator: c, current: d }, [o, t, n]), r.options.maxDepth);
  }
  return typeof l > "u" ? o.reduce(s) : o.reduce(s, l);
}, [L]: (e, t) => he(e, t.engine, t), asyncMethod: async (e, t, n, r) => {
  if (!Array.isArray(e)) throw B;
  let [o, i, l] = e;
  return l = Ne(await r.run(l, t, { above: n }), r.options.maxDepth), o = await r.run(o, t, { above: n }) || [], Ut.reduce(o, (s, a) => r.run(i, { accumulator: s, current: a }, { above: [o, t, n] }), l, r.options.maxDepth);
}, lazy: true }, "!": (e, t, n, r) => Array.isArray(e) ? !r.truthy(e[0]) : !r.truthy(e), "!!": (e, t, n, r) => !!(Array.isArray(e) ? r.truthy(e[0]) : r.truthy(e)), cat: { [ve]: true, [L]: true, method: (e) => {
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
} }, keys: ([e]) => typeof e == "object" ? Object.keys(e) : [], pipe: { lazy: true, [L]: (e, t) => he(e, t.engine, t), method: (e, t, n, r) => {
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
  for (let r = 1; r < e.length; r++) n = t.compile`${Yt(e[r], { ...t, extraArguments: "above" })}(${n}, [null, context, above])`;
  return n;
}, deterministic: (e, t) => {
  if (!Array.isArray(e)) return false;
  e = [...e];
  const n = e.shift();
  return ee(n, t.engine, t) && ee(e, t.engine, { ...t, insideIterator: true });
} }, eachKey: { lazy: true, [L]: (e, t) => he(Object.values(e[Object.keys(e)[0]]), t.engine, t), method: (e, t, n, r) => Object.keys(e).reduce((i, l) => {
  const s = e[l];
  return Object.defineProperty(i, l, { enumerable: true, value: r.run(s, t, { above: n }) }), i;
}, {}), deterministic: (e, t) => {
  if (e && typeof e == "object") return Object.values(e).every((n) => ee(n, t.engine, t));
  throw B;
}, compile: (e, t) => {
  if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${Q(e[o], t)}`), r), []).join(",")} })`;
  throw B;
}, asyncMethod: async (e, t, n, r) => await Ut.reduce(Object.keys(e), async (i, l) => {
  const s = e[l];
  return Object.defineProperty(i, l, { enumerable: true, value: await r.run(s, t, { above: n }) }), i;
}, {}, 1 / 0) } };
function Ue(e, t) {
  const n = { [fe]: e }, r = e.length === 3;
  return { method: (o, i, l, s) => {
    if (!Array.isArray(o) || o.length <= 1) throw B;
    if (o.length === 2) {
      const c = J(o[0], s, i, l), d = J(o[1], s, i, l);
      if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
      if (Number.isNaN(+X(c))) throw NaN;
      if (Number.isNaN(+X(d)) && c !== null) throw NaN;
      return t(+c, +d);
    }
    let a = J(o[0], s, i, l);
    for (let c = 1; c < o.length; c++) {
      const d = J(o[c], s, i, l);
      if ((r || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
      if (Number.isNaN(+X(d)) && a !== null) throw NaN;
      if (c === 1 && Number.isNaN(+X(a))) throw NaN;
      if (!t(+a, +d)) return false;
      a = d;
    }
    return true;
  }, asyncMethod: async (o, i, l, s) => {
    if (!Array.isArray(o) || o.length <= 1) throw B;
    if (o.length === 2) {
      const c = await J(o[0], s, i, l), d = await J(o[1], s, i, l);
      if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
      if (Number.isNaN(+X(c))) throw NaN;
      if (Number.isNaN(+X(d)) && c !== null) throw NaN;
      return t(+c, +d);
    }
    let a = await J(o[0], s, i, l);
    for (let c = 1; c < o.length; c++) {
      const d = await J(o[c], s, i, l);
      if ((r || (typeof d == "string" || d === null) && (typeof a == "string" || a === null)) && !t(a, d)) return false;
      if (Number.isNaN(+X(d)) && a !== null) throw NaN;
      if (c === 1 && Number.isNaN(+X(a))) throw NaN;
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
  }, [ve]: true, [L]: (o, i) => he(o, i.engine, i), deterministic: (o, i) => ee(o, i.engine, i), lazy: true };
}
function Et(e, t = false) {
  return { deterministic: (n, r) => ee(n[0], r.engine, r) && ee(n[1], r.engine, { ...r, insideIterator: true }), [ve]: true, [L]: (n, r) => he(n, r.engine, r), method: (n, r, o, i) => {
    if (!Array.isArray(n)) throw B;
    let [l, s] = n;
    return l = J(l, i, r, o) || [], l[e]((a, c) => {
      if (!s || typeof s != "object") return t ? i.truthy(s) : s;
      const d = J(s, i, a, [{ iterator: l, index: c }, r, o]);
      return t ? i.truthy(d) : d;
    });
  }, asyncMethod: async (n, r, o, i) => {
    if (!Array.isArray(n)) throw B;
    let [l, s] = n;
    return l = await i.run(l, r, { above: o }) || [], Ut[e](l, async (a, c) => {
      if (!s || typeof s != "object") return t ? i.truthy(s) : s;
      const d = await i.run(s, a, { above: [{ iterator: l, index: c }, r, o] });
      return t ? i.truthy(d) : d;
    });
  }, compile: (n, r) => {
    if (!Array.isArray(n)) throw B;
    const { async: o } = r, [i, l] = n, s = { ...r, avoidInlineAsync: true, iteratorCompile: true, extraArguments: "index, above" }, a = Yt(l, s), c = a.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, d = t ? r.compile`engine.truthy` : r.compile``;
    return o && !nt(a) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${d}(${a}(i, x, ${c})))`) : r.compile`(${i} || [])[${e}]((i, x, z) => ${d}(${a}(i, x, ${c})))`;
  }, lazy: true };
}
H.every = H.all;
H["?:"] = H.if;
Object.keys(H).forEach((e) => {
  typeof H[e] == "function" && (H[e][L] = true), H[e].deterministic = typeof H[e].deterministic > "u" ? true : H[e].deterministic;
});
H.if.compile = function(e, t) {
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
function At(e, t) {
  if (Array.isArray(e)) return X(NaN);
  if (typeof e == "number" || typeof e == "boolean") return "+" + Q(e, t);
  if (typeof e == "string") return "+" + X(+e);
  const n = Q(e, t);
  return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + X(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? X(NaN) : `(+precoerceNumber(${n}))`;
}
H["+"].compile = function(e, t) {
  return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => At(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${Q(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
};
H["%"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length < 2) throw B;
    return `precoerceNumber(${e.map((n) => At(n, t)).join(" % ")})`;
  }
  return `assertSize(${Q(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
};
H.in.compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
};
H["-"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length === 0) throw B;
    return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => At(n, t)).join(" - ")})`;
  }
  return typeof e == "string" || typeof e == "number" ? `(-${Q(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
};
H["/"].compile = function(e, t) {
  if (Array.isArray(e)) {
    if (e.length === 0) throw B;
    return e.length === 1 && (e = [1, e[0]]), `precoerceNumber(${e.map((n, r) => {
      let o = At(n, t);
      return r && o === "+0" && X(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
    }).join(" / ")})`;
  }
  return `assertSize(prev = ${Q(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
};
H["*"].compile = function(e, t) {
  return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => At(n, t)).join(" * ")})` : `(${Q(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
};
H["!"].compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
};
H.not = H["!"];
H["!!"].compile = function(e, t) {
  return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
};
H.none.deterministic = H.some.deterministic;
H.throw.deterministic = (e, t) => t.insideTry && ee(e, t.engine, t);
H["+"].optimizeUnary = H["-"].optimizeUnary = H["!"].optimizeUnary = H["!!"].optimizeUnary = H.cat.optimizeUnary = H.throw.optimizeUnary = true;
const ss = { ...H, ...ls }, as = function(t) {
  return Object.keys(t).forEach((n) => {
    t[n] === void 0 && delete t[n];
  }), t;
};
function us(e, t, n, r) {
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
      return typeof a == "function" && typeof c == "function" ? (d, g) => i([a(d, g), c(d, g)], d, g || r, t) : typeof a == "function" ? (d, g) => i([a(d, g), c], d, g || r, t) : (d, g) => i([a, c(d, g)], d, g || r, t);
    }
    return (a, c) => {
      const d = s.map((g) => typeof g == "function" ? g(a, c) : g);
      return i(d, a, c || r, t);
    };
  } else {
    const s = ae(l, t, r);
    if (o.optimizeUnary) {
      const a = (c) => !c || typeof c[s] > "u" || typeof c[s] == "function" && !t.allowFunctions ? null : c[s];
      if (typeof s == "function") return (c, d) => i(s(c, d), c, d || r, t);
      if ((n === "var" || n === "val") && t.methods[n][ve]) {
        if (!s && n !== "val") return (c) => c === null || typeof c > "u" || typeof c == "function" && !t.allowFunctions ? null : c;
        if (n === "val" || typeof s == "number" || !s.includes(".") && !s.includes("\\")) return a;
        if (n === "var" && !s.startsWith("../")) {
          const c = it(String(s));
          let d;
          if (c.length === 2) {
            const [g, p] = c;
            return (f) => (typeof (d = f && f[g] && f[g][p]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
          }
          if (c.length === 3) {
            const [g, p, f] = c;
            return (m) => (typeof (d = m && m[g] && m[g][p] && m[g][p][f]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
          }
        }
      }
      return (c, d) => i(s, c, d || r, t);
    }
    return typeof s == "function" ? (a, c) => i(Ft(s(a, c)), a, c || r, t) : (a, c) => i(Ft(s), a, c || r, t);
  }
}
const xr = { "<": (e, t) => e < t, "<=": (e, t) => e <= t, ">": (e, t) => e > t, ">=": (e, t) => e >= t, "==": (e, t) => e == t, "===": (e, t) => e === t, "!=": (e, t) => e != t, "!==": (e, t) => e !== t };
function cs(e, t, n) {
  if (e.val && t.methods.val[ve] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
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
  if ((e.if || e["?:"]) && t.methods.if[ve] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
    const [r, o, i] = e.if || e["?:"], l = ae(r, t, n), s = ae(o, t, n), a = ae(i, t, n);
    return typeof l == "function" && typeof s == "function" && typeof a == "function" ? (c, d) => t.truthy(l(c, d)) ? s(c, d) : a(c, d) : typeof l == "function" && typeof s == "function" ? (c, d) => t.truthy(l(c, d)) ? s(c, d) : a : typeof l == "function" && typeof a == "function" ? (c, d) => t.truthy(l(c, d)) ? s : a(c, d) : typeof l == "function" ? (c, d) => t.truthy(l(c, d)) ? s : a : t.truthy(l) ? s : a;
  }
  if (e.filter && t.methods.filter[ve] && Array.isArray(e.filter) && e.filter.length === 2) {
    const [r, o] = e.filter, i = ae(o, t, n);
    if (typeof i != "function") return t.truthy(i) ? ae(r, t, n) : [];
  }
  for (const r in xr) if (e[r] && Array.isArray(e[r]) && t.methods[r][ve]) {
    const o = xr[r], i = r.length === 3 ? o : function(s, a) {
      if ((typeof s == "string" || s === null) && (typeof a == "string" || a === null)) return o(s, a);
      if (Number.isNaN(+X(s))) throw NaN;
      if (Number.isNaN(+X(a)) && s !== null) throw NaN;
      return o(+s, +a);
    };
    if (e[r].length === 2) {
      const [l, s] = e[r], a = ae(l, t, n), c = ae(s, t, n);
      return typeof a == "function" && typeof c == "function" ? (d, g) => i(a(d, g), c(d, g)) : typeof a == "function" ? (d, g) => i(a(d, g), c) : typeof c == "function" ? (d, g) => i(a, c(d, g)) : i(a, c);
    }
    if (e[r].length === 3) {
      const [l, s, a] = e[r], c = ae(l, t, n), d = ae(s, t, n), g = ae(a, t, n);
      let p;
      return typeof c == "function" && typeof d == "function" && typeof g == "function" ? (f, m) => i(c(f, m), p = d(f, m)) && i(p, g(f, m)) : typeof c == "function" && typeof d == "function" ? (f, m) => i(c(f, m), p = d(f, m)) && i(p, g) : typeof c == "function" && typeof g == "function" ? (f, m) => i(c(f, m), d) && i(d, g(f, m)) : typeof d == "function" && typeof g == "function" ? (f, m) => i(c, p = d(f, m)) && i(p, g(f, m)) : typeof c == "function" ? (f, m) => i(c(f, m), d) && i(d, g) : typeof d == "function" ? (f, m) => i(c, p = d(f, m)) && i(p, g) : typeof g == "function" ? (f, m) => i(c, d) && i(d, g(f, m)) : i(c, d) && i(d, g);
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
    const r = cs(e, t, n);
    if (typeof r < "u") return r;
    const o = Object.keys(e), i = o[0];
    if (o.length === 0) return e;
    if (t.isData(e, i)) return () => e;
    if (o.length > 1) throw { type: "Unknown Operator" };
    const s = !t.disableInline && Jt(e, t, { engine: t });
    if (i in t.methods) {
      const a = us(e, t, i, n);
      return s ? a() : a;
    }
    throw { type: "Unknown Operator", key: i };
  }
  return e;
}
class ds {
  constructor(t = ss, n = { disableInline: false, disableInterpretedOptimization: false, permissive: false, maxDepth: 0, maxArrayLength: 32768, maxStringLength: 65536 }) {
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
    if ((o === "var" || o === "val") && this.methods[o][ve]) {
      const s = !l || typeof l != "object" ? l : this.run(l, n, { above: r });
      return this.methods[o].method(s, n, r, this, null);
    }
    if (typeof this.methods[o] == "function") {
      const s = !l || typeof l != "object" ? [l] : Ft(this.run(l, n, { above: r }));
      return this.methods[o](s, n, r, this);
    }
    if (typeof this.methods[o] == "object") {
      const { method: s, lazy: a } = this.methods[o], c = a ? l : !l || typeof l != "object" ? [l] : Ft(this.run(l, n, { above: r }));
      return s(c, n, r, this);
    }
    throw new Error(`Method '${o}' is not set up properly.`);
  }
  addMethod(t, n, { deterministic: r, optimizeUnary: o } = {}) {
    typeof n == "function" ? n = { method: n, lazy: false } : n = { ...n, lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy }, Object.assign(n, as({ deterministic: r, optimizeUnary: o })), this.methods[t] = mo(n);
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
    const { above: r = [], top: o = true } = n, i = Yt(t, { engine: this, above: r });
    return o === false && i.deterministic ? i() : i;
  }
}
function ye(e) {
  return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
}
const tn = new ds();
tn.addMethod("contains", ([e, t]) => ye(e).includes(ye(t)), { deterministic: true });
tn.addMethod("startsWith", ([e, t]) => ye(e).startsWith(ye(t)), { deterministic: true });
tn.addMethod("endsWith", ([e, t]) => ye(e).endsWith(ye(t)), { deterministic: true });
function _t() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
const Dn = /* @__PURE__ */ new Set(["empty", "not_empty", "is_true", "is_false"]), fs = { number: ["eq", "neq", "gt", "gte", "lt", "lte", "empty", "not_empty"], string: ["eq", "neq", "contains", "not_contains", "starts_with", "ends_with", "empty", "not_empty"], boolean: ["is_true", "is_false", "empty", "not_empty"], date: ["eq", "neq", "gt", "gte", "lt", "lte", "empty", "not_empty"], mixed: ["eq", "neq", "contains", "empty", "not_empty"] }, gs = ["eq", "neq", "empty", "not_empty"], ps = { var: "value" };
function hs(e, t, n = "string") {
  const r = Number(t), o = n === "number", i = n === "date", l = ps;
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
const ms = /* @__PURE__ */ new Set(["eq", "neq", "gt", "gte", "lt", "lte"]);
function ys(e, t = "string") {
  const n = e.conditions.filter((o) => Dn.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && ms.has(o.operator) && isNaN(Number(o.operand))));
  if (n.length === 0) return;
  const r = n.map((o) => hs(o.operator, o.operand, t));
  return r.length === 1 ? r[0] : { [e.mode]: r };
}
function Pe(e) {
  return typeof e == "object" && e !== null && e.var === "value";
}
function mn(e) {
  for (const [t, n] of [[">", "gt"], [">=", "gte"], ["<", "lt"], ["<=", "lte"]]) if (t in e) {
    const r = e[t];
    if (Array.isArray(r) && r.length === 2 && Pe(r[0])) return { operator: n, operand: ye(r[1]) };
  }
  if ("==" in e) {
    const t = e["=="];
    if (Array.isArray(t) && t.length === 2 && Pe(t[0])) return t[1] === true ? { operator: "is_true", operand: "" } : t[1] === false ? { operator: "is_false", operand: "" } : { operator: "eq", operand: ye(t[1]) };
  }
  if ("!=" in e) {
    const t = e["!="];
    if (Array.isArray(t) && t.length === 2 && Pe(t[0])) return { operator: "neq", operand: ye(t[1]) };
  }
  if ("contains" in e) {
    const t = e.contains;
    if (Array.isArray(t) && t.length === 2 && Pe(t[0])) return { operator: "contains", operand: ye(t[1]) };
  }
  if ("startsWith" in e) {
    const t = e.startsWith;
    if (Array.isArray(t) && t.length === 2 && Pe(t[0])) return { operator: "starts_with", operand: ye(t[1]) };
  }
  if ("endsWith" in e) {
    const t = e.endsWith;
    if (Array.isArray(t) && t.length === 2 && Pe(t[0])) return { operator: "ends_with", operand: ye(t[1]) };
  }
  if ("!" in e) {
    const t = e["!"];
    if (Array.isArray(t) && t.length === 1) {
      const n = t[0];
      if (typeof n == "object" && n !== null && "!!" in n) {
        const r = n["!!"];
        if (Array.isArray(r) && Pe(r[0])) return { operator: "empty", operand: "" };
      }
      if (typeof n == "object" && n !== null && "contains" in n) {
        const r = n.contains;
        if (Array.isArray(r) && r.length === 2 && Pe(r[0])) return { operator: "not_contains", operand: ye(r[1]) };
      }
    }
  }
  if ("!!" in e) {
    const t = e["!!"];
    if (Array.isArray(t) && Pe(t[0])) return { operator: "not_empty", operand: "" };
  }
  return null;
}
function Rr(e) {
  if (!e) return { mode: "and", conditions: [{ id: _t(), operator: "eq", operand: "" }] };
  if ("and" in e) {
    const n = e.and;
    if (Array.isArray(n)) {
      const r = n.map((o) => mn(o)).filter((o) => o !== null).map((o) => ({ id: _t(), ...o }));
      if (r.length > 0) return { mode: "and", conditions: r };
    }
  }
  if ("or" in e) {
    const n = e.or;
    if (Array.isArray(n)) {
      const r = n.map((o) => mn(o)).filter((o) => o !== null).map((o) => ({ id: _t(), ...o }));
      if (r.length > 0) return { mode: "or", conditions: r };
    }
  }
  const t = mn(e);
  return t ? { mode: "and", conditions: [{ id: _t(), ...t }] } : { mode: "and", conditions: [{ id: _t(), operator: "eq", operand: "" }] };
}
const _s = 200, bt = /* @__PURE__ */ new Map();
function bs(e, t) {
  try {
    const n = JSON.stringify(e);
    let r = bt.get(n);
    if (!r) {
      if (r = tn.build(e), bt.size >= _s) {
        const o = bt.keys().next().value;
        o && bt.delete(o);
      }
      bt.set(n, r);
    }
    return !!r({ value: t });
  } catch {
    return false;
  }
}
function yo(e, t) {
  return { src: e, size: t.imageSize ?? Mn.size, objectFit: t.imageObjectFit ?? Mn.objectFit, variant: t.imageVariant ?? "square", bgColor: t.imageBgColor || void 0, borderColor: t.imageBorderColor || void 0, borderWidth: t.imageBorderWidth, tint: t.imageTint || void 0, tooltip: t.imageTooltip !== false ? e : void 0, showBroken: t.imageShowBroken !== false };
}
function vs(e) {
  const t = {};
  return e.stringFontWeight === "bold" && (t.fontWeight = "bold"), e.stringFontStyle === "italic" && (t.fontStyle = "italic"), e.stringFontSize && (t.fontSize = `${e.stringFontSize}px`), e.stringTextColor && (t.color = e.stringTextColor), t;
}
const _o = { number: { format: (e, t) => typeof e == "number" || typeof e == "string" && !isNaN(Number(e)) ? { displayValue: go(Number(e), { decimals: t.fmt.numberDecimals, prefix: t.fmt.numberPrefix, suffix: t.fmt.numberSuffix, thousands: t.fmt.numberThousandsSeparator }) } : {} }, date: { format: (e, t) => ({ displayValue: po(e, t.fmt.dateFormat, t.readDate) }) }, boolean: { format: (e, t) => ({ displayValue: jn(e, t.fmt.booleanTrue, t.fmt.booleanFalse) }) }, string: { format: (e, t) => ({ displayValue: ho(t.defaultDisplay, t.fmt), textSx: vs(t.fmt) }) }, image: { format: (e, t) => e != null && fi(e) ? { image: yo(e.trim(), t.fmt), displayValue: "" } : e == null ? { displayValue: "" } : {} } };
function ws(e, t) {
  if (t.type !== "date") return e;
  const n = t.readDate(e);
  return n === null ? "" : qt(n).key;
}
function Ss(e, t, n) {
  const r = {}, o = {};
  if (!e.cellStyle || e.cellStyle.length === 0) return { bgSx: r, textSx: o };
  const i = !e.cellStyleMode || e.cellStyleMode === "first-match", l = ws(t, n);
  for (const s of e.cellStyle) if (s.logic && bs(s.logic, l)) {
    if (s.backgroundColor && !("background" in r) && !("backgroundColor" in r)) {
      const a = Xt(s.backgroundColor);
      a ? r.background = a : r.backgroundColor = s.backgroundColor;
    }
    if (s.textColor && !("color" in o) && !("background" in o)) {
      const a = Ur(s.textColor);
      a.background ? Object.assign(o, a) : o.color = s.textColor;
    }
    if (s.fontWeight && !o.fontWeight && (o.fontWeight = s.fontWeight), s.fontStyle && !o.fontStyle && (o.fontStyle = s.fontStyle), i) break;
  }
  return { bgSx: r, textSx: o };
}
function Cs(e, t, n = { type: Zt(((_a2) => (_a2 = t == null ? void 0 : t.format) == null ? void 0 : _a2.type)(), void 0), readDate: en() }) {
  let r = false, o;
  if (e == null ? o = "" : typeof e == "object" ? (r = true, o = JSON.stringify(e)) : o = String(e), !t) return { displayValue: o, textSx: {}, bgSx: {} };
  let i = {};
  if (t.format) try {
    i = _o[t.format.type].format(e, { fmt: t.format, defaultDisplay: o, readDate: n.readDate });
  } catch {
  }
  const l = i.displayValue !== void 0 ? i.displayValue : o, s = i.textSx ?? {}, { bgSx: a, textSx: c } = Ss(t, e, n);
  return { displayValue: l, image: i.image, isTruncated: r, textSx: { ...s, ...c }, bgSx: a };
}
function xs({ value: e, column: t, valueSize: n }) {
  var _a2;
  const r = t.cellConfig, { displayValue: o, textSx: i, bgSx: l, isTruncated: s, image: a } = G(() => Cs(e, t.cellConfig, t), [e, t]);
  if (a) {
    const c = r.align, d = c === "left" ? "flex-start" : c === "right" ? "flex-end" : "center", g = (_a2 = r.format) == null ? void 0 : _a2.imagePadding, p = g ? `${g.top ?? 0}px ${g.right ?? 0}px ${g.bottom ?? 0}px ${g.left ?? 0}px` : "0 8px";
    return u($, { sx: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: d, padding: p, ...l }, children: u(bo, { descriptor: a }) });
  }
  return _($, { sx: { width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 0.5, padding: "0 8px", ...l }, children: [u(S, { variant: "body2", component: $, title: o, sx: { flex: 1, minWidth: 0, lineHeight: "inherit", ...n && { fontSize: n }, ...i }, dangerouslySetInnerHTML: { __html: o ?? "" } }), s && u(tt, { label: "JSON", size: "small", sx: { height: 18, fontSize: "0.65rem", flexShrink: 0, opacity: 0.7 } })] });
}
function bo({ descriptor: e }) {
  const { src: t, size: n, objectFit: r, variant: o, bgColor: i, borderColor: l, borderWidth: s, tint: a, tooltip: c, showBroken: d } = e, [g, p] = q(false);
  if (g) return d ? u(ro, { sx: { fontSize: n, maxWidth: "100%", maxHeight: "100%", color: "text.disabled", opacity: 0.5 } }) : null;
  const f = { height: n, width: "auto", aspectRatio: "1 / 1", maxWidth: "100%", maxHeight: "100%", flexShrink: 0 }, m = o === "circular" ? "50%" : o === "rounded" ? "25%" : 0, y = l && s ? `${s}px solid ${l}` : void 0, b = { ...f, bgcolor: i || "transparent", borderRadius: m, ...y ? { border: y } : {} };
  if (!t.startsWith("data:") && !ti(t)) return u(fn, { variant: o, title: c, sx: { ...b, fontSize: n, lineHeight: 1, ...a ? { color: a } : {} }, children: t });
  if (a) {
    const v = `url("${t}")`, R = r === "fill" ? "100% 100%" : r;
    return u(fn, { variant: o, title: c, sx: b, children: u($, { sx: { width: "100%", height: "100%", backgroundColor: a, WebkitMaskMode: "alpha", maskMode: "alpha", WebkitMaskImage: v, maskImage: v, WebkitMaskSize: R, maskSize: R, WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center" } }) });
  }
  return u(fn, { variant: o, src: t, alt: c ?? "", title: c, sx: { ...b, "& .MuiAvatar-img": { objectFit: r } }, slotProps: { img: { onError: () => p(true) } } });
}
const Rs = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Crect%20width='24'%20height='24'%20fill='%23000'/%3E%3C/svg%3E";
function Fs({ format: e, onChange: t }) {
  var _a2, _b, _c, _d;
  const n = yo(Rs, e), r = (o, i) => {
    const l = parseInt(i, 10);
    t({ type: "image", imagePadding: { ...e.imagePadding, [o]: Number.isFinite(l) ? l : void 0 } });
  };
  return _(Oe, { children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_image_format") }), _(oe, { direction: "row", spacing: 1, children: [u(Y, { label: h.t("json_table_image_size"), type: "number", value: e.imageSize ?? "", onChange: (o) => {
    const i = parseInt(o.target.value, 10);
    t({ type: "image", imageSize: Number.isFinite(i) ? i : void 0 });
  }, size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 8, max: 256 } }, placeholder: "px" }), _(ze, { size: "small", sx: { minWidth: 120 }, children: [u(Me, { children: h.t("json_table_image_object_fit") }), _(xe, { label: h.t("json_table_image_object_fit"), value: e.imageObjectFit ?? "contain", onChange: (o) => t({ type: "image", imageObjectFit: o.target.value }), children: [u(V, { value: "contain", children: h.t("json_table_image_object_fit_contain") }), u(V, { value: "cover", children: h.t("json_table_image_object_fit_cover") }), u(V, { value: "fill", children: h.t("json_table_image_object_fit_fill") })] })] })] }), _(ze, { size: "small", fullWidth: true, children: [u(Me, { children: h.t("json_table_image_variant") }), _(xe, { label: h.t("json_table_image_variant"), value: e.imageVariant ?? "square", onChange: (o) => t({ type: "image", imageVariant: o.target.value }), children: [u(V, { value: "square", children: h.t("json_table_image_variant_square") }), u(V, { value: "circular", children: h.t("json_table_image_variant_circular") }), u(V, { value: "rounded", children: h.t("json_table_image_variant_rounded") })] })] }), u(st, { label: h.t("json_table_image_bg_color"), value: e.imageBgColor ?? "", overridden: !!e.imageBgColor, onChange: (o) => t({ type: "image", imageBgColor: o || void 0 }) }), u(st, { label: h.t("json_table_image_border_color"), value: e.imageBorderColor ?? "", overridden: !!e.imageBorderColor, onChange: (o) => t({ type: "image", imageBorderColor: o || void 0 }) }), u(Y, { label: h.t("json_table_image_border_width"), type: "number", value: e.imageBorderWidth ?? "", onChange: (o) => {
    const i = parseInt(o.target.value, 10);
    t({ type: "image", imageBorderWidth: Number.isFinite(i) ? i : void 0 });
  }, size: "small", fullWidth: true, slotProps: { htmlInput: { min: 0, max: 16 } }, placeholder: "px" }), u(st, { label: h.t("json_table_image_tint"), value: e.imageTint ?? "", overridden: !!e.imageTint, onChange: (o) => t({ type: "image", imageTint: o || void 0 }) }), u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_image_tint_hint") }), u(Bt, {}), u(ke, { control: u(Ze, { size: "small", checked: e.imageTooltip !== false, onChange: (o) => t({ type: "image", imageTooltip: o.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_image_tooltip") }) }), u(ke, { control: u(Ze, { size: "small", checked: e.imageShowBroken !== false, onChange: (o) => t({ type: "image", imageShowBroken: o.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_image_show_broken") }) }), u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500 }, children: h.t("json_table_image_padding") }), _(oe, { direction: "row", spacing: 1, children: [u(Y, { label: h.t("json_table_image_padding_top"), type: "number", value: ((_a2 = e.imagePadding) == null ? void 0 : _a2.top) ?? "", onChange: (o) => r("top", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(Y, { label: h.t("json_table_image_padding_right"), type: "number", value: ((_b = e.imagePadding) == null ? void 0 : _b.right) ?? "", onChange: (o) => r("right", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(Y, { label: h.t("json_table_image_padding_bottom"), type: "number", value: ((_c = e.imagePadding) == null ? void 0 : _c.bottom) ?? "", onChange: (o) => r("bottom", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" }), u(Y, { label: h.t("json_table_image_padding_left"), type: "number", value: ((_d = e.imagePadding) == null ? void 0 : _d.left) ?? "", onChange: (o) => r("left", o.target.value), size: "small", sx: { flex: 1 }, slotProps: { htmlInput: { min: 0, max: 64 } }, placeholder: "px" })] }), _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_preview") }), _($, { sx: { mt: 0.5, display: "flex", alignItems: "center", justifyContent: "center", gap: 2, height: 64 }, children: [u(bo, { descriptor: n }), e.imageShowBroken !== false && u(ro, { sx: { fontSize: e.imageSize ?? Mn.size, color: "text.disabled", opacity: 0.5 } })] })] })] });
}
const As = { eq: "json_table_op_eq", neq: "json_table_op_neq", gt: "json_table_op_gt", gte: "json_table_op_gte", lt: "json_table_op_lt", lte: "json_table_op_lte", contains: "json_table_op_contains", not_contains: "json_table_op_not_contains", starts_with: "json_table_op_starts_with", ends_with: "json_table_op_ends_with", empty: "json_table_op_empty", not_empty: "json_table_op_not_empty", is_true: "json_table_op_is_true", is_false: "json_table_op_is_false" };
function zs({ label: e, value: t, onChange: n, inputType: r }) {
  const [o, i] = q(t);
  Fe(() => {
    i(t);
  }, [t]);
  const l = z(() => {
    o !== t && n(o);
  }, [o, t, n]);
  return u(Y, { label: e, value: o, onChange: (s) => i(s.target.value), onBlur: l, size: "small", type: r, sx: { flex: 1, ...r === "date" && { '& input[type="date"]::-webkit-calendar-picker-indicator': { filter: "invert(0.5)", cursor: "pointer", opacity: 0.7, "&:hover": { opacity: 1 } } } }, InputLabelProps: r === "date" || r === "number" ? { shrink: true } : void 0, slotProps: r === "number" ? { htmlInput: { step: "any" } } : r === "date" ? { htmlInput: { placeholder: "YYYY-MM-DD" } } : void 0 });
}
function Ms({ logic: e, columnType: t, onChange: n }) {
  const [r, o] = q(() => Rr(e));
  Fe(() => {
    o(Rr(e));
  }, [e]);
  const i = fs[t] ?? gs, l = z((p) => {
    o(p), n(ys(p, t));
  }, [n, t]), s = z((p, f) => {
    const m = r.conditions.map((y, b) => b === p ? { ...y, ...f } : y);
    l({ ...r, conditions: m });
  }, [r, l]), a = z((p) => {
    const f = r.conditions.filter((m, y) => y !== p);
    l({ ...r, conditions: f });
  }, [r, l]), c = z(() => {
    const p = i[0] ?? "eq";
    l({ ...r, conditions: [...r.conditions, { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, operator: p, operand: "" }] });
  }, [r, l, i]), d = z((p, f) => {
    f !== null && l({ ...r, mode: f });
  }, [r, l]), g = r.conditions.length > 1;
  return _(oe, { spacing: 1, children: [g && _($, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [_(eo, { value: r.mode, exclusive: true, onChange: d, size: "small", "aria-label": h.t("json_table_condition_mode_label"), children: [u(Gt, { value: "and", "aria-label": h.t("json_table_condition_mode_all"), children: h.t("json_table_condition_mode_all") }), u(Gt, { value: "or", "aria-label": h.t("json_table_condition_mode_any"), children: h.t("json_table_condition_mode_any") })] }), u(S, { variant: "caption", color: "text.secondary", children: r.mode === "and" ? h.t("json_table_condition_mode_hint_and") : h.t("json_table_condition_mode_hint_or") })] }), r.conditions.map((p, f) => {
    const m = !Dn.has(p.operator), y = t === "date" ? "date" : t === "number" ? "number" : "text";
    return _($, { sx: { display: "flex", gap: 1, alignItems: "flex-start" }, children: [_(ze, { size: "small", sx: { flex: m ? "0 0 auto" : 1, minWidth: 160 }, children: [u(Me, { children: h.t("json_table_condition_operator") }), u(xe, { label: h.t("json_table_condition_operator"), value: p.operator, onChange: (b) => {
      const w = b.target.value, v = Dn.has(w) ? "" : p.operand;
      s(f, { operator: w, operand: v });
    }, children: i.map((b) => u(V, { value: b, children: h.t(As[b]) }, b)) })] }), m && u(zs, { label: h.t("json_table_condition_value"), value: p.operand ?? "", onChange: (b) => s(f, { operand: b }), inputType: y }), g && u(ge, { title: h.t("json_table_condition_remove"), children: u(ne, { size: "small", onClick: () => a(f), "aria-label": h.t("json_table_condition_remove"), sx: { mt: 0.5 }, children: u(qn, { fontSize: "small" }) }) })] }, p.id ?? f);
  }), u(Ae, { startIcon: u(Kr, {}), onClick: c, size: "small", variant: "text", sx: { alignSelf: "flex-start", textTransform: "none" }, "aria-label": h.t("json_table_condition_add"), children: g ? h.t("json_table_condition_add") : h.t("json_table_condition_add_first") })] });
}
function $s({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
  const i = z((d, g) => {
    const p = [...e || []];
    p[d] = { ...p[d], ...g }, r(p);
  }, [e, r]), l = z((d) => {
    const g = [...e || []];
    g.splice(d, 1), r(g);
  }, [e, r]), s = z(() => {
    const d = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, backgroundColor: "", textColor: "", fontWeight: "normal", fontStyle: "normal" };
    r([...e || [], d]);
  }, [e, r]), a = z((d) => {
    if (d === 0) return;
    const g = [...e || []];
    [g[d - 1], g[d]] = [g[d], g[d - 1]], r(g);
  }, [e, r]), c = z((d) => {
    const g = e || [];
    if (d >= g.length - 1) return;
    const p = [...g];
    [p[d], p[d + 1]] = [p[d + 1], p[d]], r(p);
  }, [e, r]);
  return _(oe, { spacing: 1.5, children: [((e == null ? void 0 : e.length) ?? 0) >= 1 && _($, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [_(eo, { value: t ?? "first-match", exclusive: true, size: "small", onChange: (d, g) => {
    g && o(g);
  }, "aria-label": h.t("json_table_cell_style_mode_label"), children: [u(Gt, { value: "first-match", "aria-label": h.t("json_table_cell_style_mode_first"), children: h.t("json_table_cell_style_mode_first") }), u(Gt, { value: "all-match", "aria-label": h.t("json_table_cell_style_mode_all"), children: h.t("json_table_cell_style_mode_all") })] }), u(S, { variant: "caption", color: "text.secondary", children: (t ?? "first-match") === "first-match" ? h.t("json_table_cell_style_mode_hint_first") : h.t("json_table_cell_style_mode_hint_all") })] }), (e || []).length === 0 && _($, { sx: { textAlign: "center", py: 2, px: 1, color: "text.secondary" }, children: [u(S, { variant: "body2", sx: { fontWeight: 500, mb: 0.5 }, children: h.t("json_table_no_style_rules") }), u(S, { variant: "caption", children: h.t("json_table_no_style_rules_hint") })] }), (e || []).map((d, g) => {
    const p = (e || []).length, f = d.backgroundColor ? Xt(d.backgroundColor) : void 0, m = Ur(d.textColor);
    return u(Ve, { variant: "outlined", sx: { p: 1.5 }, children: _(oe, { spacing: 1.5, children: [_($, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [u($, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: _(S, { variant: "caption", sx: { fontWeight: 600, color: "text.secondary" }, children: [h.t("json_table_rule"), " ", g + 1] }) }), _($, { sx: { display: "flex", gap: 0.5 }, children: [u(ge, { title: h.t("json_table_rule_move_up"), children: u("span", { children: u(ne, { size: "small", onClick: () => a(g), disabled: g === 0, "aria-label": h.t("json_table_rule_move_up"), children: u(Xr, { fontSize: "small" }) }) }) }), u(ge, { title: h.t("json_table_rule_move_down"), children: u("span", { children: u(ne, { size: "small", onClick: () => c(g), disabled: g >= p - 1, "aria-label": h.t("json_table_rule_move_down"), children: u(Qr, { fontSize: "small" }) }) }) }), u(ge, { title: h.t("json_table_delete_rule"), children: u(ne, { size: "small", onClick: () => l(g), color: "error", "aria-label": h.t("json_table_delete_rule"), children: u(ni, { fontSize: "small" }) }) })] })] }), u(Ms, { logic: d.logic, columnType: n, onChange: (y) => i(g, { logic: y }) }, d.id ?? g), _(oe, { direction: "row", spacing: 1, alignItems: "flex-start", children: [u(st, { label: h.t("json_table_bg_color"), value: d.backgroundColor || "", overridden: !!d.backgroundColor, onChange: (y) => i(g, { backgroundColor: y || void 0 }) }), u(st, { label: h.t("json_table_text_color"), value: d.textColor || "", overridden: !!d.textColor, onChange: (y) => i(g, { textColor: y || void 0 }) })] }), _(oe, { direction: "row", spacing: 1, children: [u(ke, { control: u(Rt, { checked: d.fontWeight === "bold", onChange: (y) => i(g, { fontWeight: y.target.checked ? "bold" : "normal" }), icon: u(_r, { sx: { opacity: 0.3 } }), checkedIcon: u(_r, { color: "primary" }), size: "small" }), label: u(S, { variant: "caption", children: h.t("json_table_bold") }) }), u(ke, { control: u(Rt, { checked: d.fontStyle === "italic", onChange: (y) => i(g, { fontStyle: y.target.checked ? "italic" : "normal" }), icon: u(dr, { sx: { opacity: 0.3 } }), checkedIcon: u(dr, { color: "primary" }), size: "small" }), label: u(S, { variant: "caption", children: h.t("json_table_italic") }) })] }), (d.backgroundColor || d.textColor || d.fontWeight === "bold" || d.fontStyle === "italic") && u(Ve, { variant: "outlined", sx: { p: 1, ...d.backgroundColor ? f ? { background: f } : { backgroundColor: d.backgroundColor } : {}, fontWeight: d.fontWeight || "normal", fontStyle: d.fontStyle || "normal" }, children: u(S, { variant: "body2", sx: { ...d.textColor ? m.background ? m : { color: d.textColor } : { color: "inherit" } }, children: h.t("json_table_sample_value") }) })] }) }, d.id ?? g);
  }), ((e == null ? void 0 : e.length) ?? 0) >= 2 && u(S, { variant: "caption", color: "text.secondary", sx: { px: 0.5 }, children: (t ?? "first-match") === "first-match" ? h.t("json_table_rules_priority_hint") : h.t("json_table_rules_all_match_hint") }), u(Ae, { startIcon: u(Kr, {}), onClick: s, variant: "outlined", size: "small", fullWidth: true, children: h.t("json_table_add_style_rule") })] });
}
function yn({ featureLabel: e, on: t }) {
  return u(tt, { size: "small", icon: t ? u(wi, {}) : u(qn, {}), label: `${h.t(e)}: ${t ? h.t("json_table_status_on") : h.t("json_table_status_off")}`, color: t ? "success" : "default", variant: "outlined", sx: { fontSize: "0.7rem" } });
}
function js({ capabilities: e }) {
  return _($, { sx: { p: 1, mb: 2, bgcolor: "action.hover", borderRadius: 1, border: 1, borderColor: "divider" }, children: [u(S, { variant: "caption", sx: { fontWeight: 500, display: "block", mb: 0.5 }, children: h.t("json_table_capabilities_status") }), _($, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: [u(yn, { featureLabel: "json_table_sorting", on: e.sorting }), u(yn, { featureLabel: "json_table_filtering", on: e.columnFiltering }), u(yn, { featureLabel: "json_table_hiding", on: e.hiding })] })] });
}
const _n = (e, t) => e.replace(/\{(\w+)\}/g, (n, r) => r in t ? t[r] : n);
function Is({ effective: e, tableEnabled: t, typeDefault: n, columnOverride: r, featureLabel: o, columnType: i }) {
  const l = r === true || r === false, s = l ? "json_table_source_override" : "json_table_source_auto";
  let a;
  return t ? l ? a = _n(h.t("json_table_override_type_default_tooltip"), { feature: o }) : a = _n(h.t("json_table_auto_tooltip"), { feature: o, smart: n ? h.t("json_table_status_on") : h.t("json_table_status_off"), type: i }) : a = _n(h.t("json_table_table_off_tooltip"), { feature: o }), u(ge, { title: a, arrow: true, children: _($, { sx: { display: "flex", alignItems: "center", gap: 0.5, ml: "auto", cursor: "help" }, children: [u(tt, { size: "small", label: u($, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: e ? h.t("json_table_status_on") : h.t("json_table_status_off") }), color: e ? "success" : "default", variant: l ? "filled" : "outlined", sx: { height: 20, fontSize: "0.65rem", "& .MuiChip-label": { px: 0.75 } } }), _(S, { variant: "caption", color: l ? "warning.main" : "text.secondary", sx: { fontSize: "0.65rem", display: "flex", alignItems: "center", gap: 0.25 }, children: [h.t(s), !l && u(Cl, { sx: { fontSize: 12, ml: 0.25 } }), l && u(gi, { sx: { fontSize: 12, ml: 0.25 } })] })] }) });
}
const Ps = { sortable: { label: "json_table_sortable", feature: "json_table_sorting", table: "sorting", key: "sortable" }, filterable: { label: "json_table_filterable", feature: "json_table_filtering", table: "columnFiltering", key: "filterable" }, hideable: { label: "json_table_hideable", feature: "json_table_hiding", table: "hiding", key: "enableHiding" } }, Ds = (e) => e === true ? "on" : e === false ? "off" : "auto", Ts = (e) => e === "on" ? true : e === "off" ? false : "auto";
function bn({ capability: e, column: t, columnType: n, capabilities: r, onChange: o }) {
  const { label: i, feature: l, table: s, key: a } = Ps[e], c = t[a];
  return _($, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [_(ze, { size: "small", sx: { minWidth: 120 }, children: [u(Me, { children: h.t(i) }), _(xe, { value: Ds(c), label: h.t(i), onChange: (d) => o({ ...t, [a]: Ts(d.target.value) }), children: [u(V, { value: "auto", children: u("em", { children: h.t("json_table_option_auto") }) }), u(V, { value: "on", children: h.t("json_table_option_on") }), u(V, { value: "off", children: h.t("json_table_option_off") })] })] }), u(Is, { effective: Jn(r, n, t)[e], tableEnabled: r[s], typeDefault: io(n)[e], columnOverride: c, featureLabel: h.t(l), columnType: n })] });
}
function Ns({ column: e, discoveredColumn: t, onChange: n, capabilities: r }) {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2;
  const [o, i] = q({ basic: true, formatting: false, styling: false, advanced: false }), l = z((x) => {
    i((F) => ({ ...F, [x]: !F[x] }));
  }, []), s = (t == null ? void 0 : t.type) || "string", a = Zt((_a2 = e.format) == null ? void 0 : _a2.type, t == null ? void 0 : t.type), c = G(() => t ? Object.values(t.typeCounts).reduce((x, F) => x + F, 0) : 0, [t]), d = G(() => Yn(e.path), [e.path]), g = G(() => e.headerName !== d || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [e.headerName, e.width, e.align, e.visible, d]), p = z(() => {
    n({ ...e, headerName: d, width: void 0, align: void 0, visible: true });
  }, [e, n, d]), f = G(() => e.format !== void 0, [e.format]), m = z(() => {
    const { format: x, ...F } = e;
    n(F);
  }, [e, n]), y = G(() => {
    var _a3;
    return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
  }, [e.cellStyle, e.cellStyleMode]), b = z(() => {
    const { cellStyle: x, cellStyleMode: F, ...T } = e;
    n(T);
  }, [e, n]), w = G(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto" || e.enableHiding !== void 0 && e.enableHiding !== "auto", [e.sortable, e.filterable, e.enableHiding]), v = z(() => {
    const { sortable: x, filterable: F, enableHiding: T, ...A } = e;
    n({ ...A, sortable: "auto", filterable: "auto", enableHiding: "auto" });
  }, [e, n]), R = z((x) => {
    var _a3, _b2;
    const F = { ...e.format };
    if (x.type && x.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
      const T = (_b2 = e.format) == null ? void 0 : _b2.type;
      T === "number" ? (delete F.numberDecimals, delete F.numberPrefix, delete F.numberSuffix, delete F.numberThousandsSeparator) : T === "date" ? delete F.dateFormat : T === "boolean" ? (delete F.booleanTrue, delete F.booleanFalse) : T === "string" ? ["stringCase", "stringPrefix", "stringSuffix", "stringTrim", "stringMaxLength", "stringRegex", "stringRegexGroup", "stringRegexFlags", "stringFontWeight", "stringFontStyle", "stringFontSize", "stringTextColor"].forEach((W) => {
        delete F[W];
      }) : T === "image" && (delete F.imageSize, delete F.imageObjectFit, delete F.imageVariant, delete F.imageBgColor, delete F.imageBorderColor, delete F.imageBorderWidth, delete F.imageTint, delete F.imageTooltip, delete F.imageShowBroken, delete F.imagePadding);
    }
    n({ ...e, format: { ...F, ...x } });
  }, [e, n]), O = z((x) => {
    n({ ...e, cellStyle: x });
  }, [e, n]), D = z((x) => {
    n({ ...e, cellStyleMode: x });
  }, [e, n]);
  return _($, { sx: { height: "100%", overflow: "auto", p: 2 }, children: [_($, { sx: { display: "flex", alignItems: "center", gap: 1, mb: 2 }, children: [u(fo, { badge: co((_b = e.format) == null ? void 0 : _b.type, t == null ? void 0 : t.type), sx: { fontSize: "0.7rem" } }), u(S, { variant: "subtitle2", sx: { fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, title: e.path, children: e.path })] }), _(oe, { spacing: 1, children: [_(zt, { expanded: o.basic, onChange: () => l("basic"), disableGutters: true, children: [u(Mt, { component: "div", expandIcon: u($t, {}), children: _($, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_basic") }), u(ge, { title: h.t("json_table_section_reset"), children: u("span", { children: u(ne, { size: "small", disabled: !g, onClick: (x) => {
    x.stopPropagation(), p();
  }, "aria-label": h.t("json_table_section_reset"), children: u(St, { fontSize: "small" }) }) }) })] }) }), u(jt, { children: _(oe, { spacing: 2, children: [u(Y, { label: h.t("json_table_header_label"), value: e.headerName, onChange: (x) => n({ ...e, headerName: x.target.value }), fullWidth: true, size: "small" }), u(Y, { label: h.t("json_table_width"), type: "number", value: e.width ?? "", onChange: (x) => n({ ...e, width: x.target.value ? parseInt(x.target.value, 10) : void 0 }), fullWidth: true, size: "small", placeholder: h.t("json_table_width_auto"), slotProps: { htmlInput: { min: 30 } } }), _(ze, { fullWidth: true, size: "small", children: [u(Me, { children: h.t("json_table_align") }), _(xe, { label: h.t("json_table_align"), value: e.align || "left", onChange: (x) => n({ ...e, align: x.target.value }), children: [u(V, { value: "left", children: h.t("json_table_align_left") }), u(V, { value: "center", children: h.t("json_table_align_center") }), u(V, { value: "right", children: h.t("json_table_align_right") })] })] }), u(ke, { control: u(Ze, { checked: e.visible, onChange: (x) => n({ ...e, visible: x.target.checked }) }), label: u(S, { variant: "body2", children: h.t("json_table_visible") }) })] }) })] }), _(zt, { expanded: o.formatting, onChange: () => l("formatting"), disableGutters: true, children: [u(Mt, { component: "div", expandIcon: u($t, {}), children: _($, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_formatting") }), u(ge, { title: h.t("json_table_section_reset"), children: u("span", { children: u(ne, { size: "small", disabled: !f, onClick: (x) => {
    x.stopPropagation(), m();
  }, "aria-label": h.t("json_table_section_reset"), children: u(St, { fontSize: "small" }) }) }) })] }) }), u(jt, { children: _(oe, { spacing: 2, children: [_(ze, { fullWidth: true, size: "small", children: [u(Me, { children: h.t("json_table_format_type") }), _(xe, { value: ((_c = e.format) == null ? void 0 : _c.type) || "auto", label: h.t("json_table_format_type"), onChange: (x) => {
    const F = x.target.value;
    F === "auto" ? n({ ...e, format: void 0 }) : R({ type: F });
  }, children: [_(V, { value: "auto", children: [h.t("json_table_format_type_auto"), ` (${s})`] }), u(V, { value: "string", children: h.t("json_table_format_type_string") }), u(V, { value: "number", children: h.t("json_table_format_type_number") }), u(V, { value: "date", children: h.t("json_table_format_type_date") }), u(V, { value: "boolean", children: h.t("json_table_format_type_boolean") }), u(V, { value: "image", children: h.t("json_table_format_type_image") })] })] }), (s === "number" || ((_d = e.format) == null ? void 0 : _d.type) === "number") && u(Bl, { format: e.format ?? { type: "number" }, onChange: R, discoveredColumn: t }), (s === "date" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "date") && u(Wl, { format: e.format ?? { type: "date" }, detectedFormat: t == null ? void 0 : t.dateFormat, onChange: R }), (s === "boolean" || ((_f = e.format) == null ? void 0 : _f.type) === "boolean") && u(Gl, { format: e.format ?? { type: "boolean" }, onChange: R }), (s === "string" || ((_g = e.format) == null ? void 0 : _g.type) === "string") && u(ql, { format: e.format ?? { type: "string" }, onChange: R }), (s === "image" || ((_h = e.format) == null ? void 0 : _h.type) === "image") && u(Fs, { format: e.format ?? { type: "image" }, onChange: R }), s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && s !== "image" && !e.format && u(S, { variant: "body2", color: "text.secondary", children: h.t("json_table_no_format_options") })] }) })] }), _(zt, { expanded: o.styling, onChange: () => l("styling"), disableGutters: true, children: [u(Mt, { component: "div", expandIcon: u($t, {}), children: _($, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [_($, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_styling") }), (((_i2 = e.cellStyle) == null ? void 0 : _i2.length) ?? 0) > 0 && u(tt, { label: e.cellStyle.length, size: "small", color: "primary", sx: { height: 20, fontSize: "0.7rem" } })] }), u(ge, { title: h.t("json_table_section_reset"), children: u("span", { children: u(ne, { size: "small", disabled: !y, onClick: (x) => {
    x.stopPropagation(), b();
  }, "aria-label": h.t("json_table_section_reset"), children: u(St, { fontSize: "small" }) }) }) })] }) }), u(jt, { children: u($s, { cellStyle: e.cellStyle || [], cellStyleMode: e.cellStyleMode ?? "first-match", columnType: a, onStyleChange: O, onModeChange: D }) })] }), _(zt, { expanded: o.advanced, onChange: () => l("advanced"), disableGutters: true, children: [u(Mt, { component: "div", expandIcon: u($t, {}), children: _($, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", mr: 1 }, children: [u(S, { variant: "subtitle2", sx: { fontWeight: 500 }, children: h.t("json_table_section_advanced") }), u(ge, { title: h.t("json_table_section_reset"), children: u("span", { children: u(ne, { size: "small", disabled: !w, onClick: (x) => {
    x.stopPropagation(), v();
  }, "aria-label": h.t("json_table_section_reset"), children: u(St, { fontSize: "small" }) }) }) })] }) }), u(jt, { children: _(oe, { spacing: 2, children: [u(js, { capabilities: r }), u(bn, { capability: "sortable", column: e, columnType: a, capabilities: r, onChange: n }), u(bn, { capability: "filterable", column: e, columnType: a, capabilities: r, onChange: n }), u(bn, { capability: "hideable", column: e, columnType: a, capabilities: r, onChange: n }), t && _(Ve, { variant: "outlined", sx: { p: 1.5, bgcolor: "action.hover" }, children: [u(S, { variant: "caption", color: "text.secondary", sx: { fontWeight: 500, display: "block", mb: 1 }, children: h.t("json_table_analysis_info") }), _(oe, { spacing: 0.5, children: [_($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_type_label") }), u(tt, { label: t.type, size: "small", sx: { backgroundColor: zn[t.type], color: "#fff", height: 18, fontSize: "0.65rem" } })] }), _($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_confidence") }), _(S, { variant: "caption", children: [Math.round(t.confidence * 100), "%"] })] }), _($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_nulls") }), _(S, { variant: "caption", children: [t.nullCount, c > 0 && ` (${Math.round(t.nullCount / c * 100)}%)`] })] }), _($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_distinct") }), u(S, { variant: "caption", children: t.distinctCount })] }), t.min !== void 0 && t.max !== void 0 && _($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_range") }), _(S, { variant: "caption", children: [String(t.min), " \u2013 ", String(t.max)] })] }), t.dateFormat && _($, { sx: { display: "flex", justifyContent: "space-between" }, children: [u(S, { variant: "caption", color: "text.secondary", children: h.t("json_table_date_input_format") }), u(S, { variant: "caption", children: t.dateFormat })] })] })] })] }) })] })] })] });
}
function Os({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: i, socket: l }) {
  const [s, a] = q(n), [c, d] = q(null), [g, p] = q([]), [f, m] = q(false), [y, b] = q(false), [w, v] = q(null), [R, O] = q(null), D = Ye(false), x = Ye(() => Promise.resolve()), F = Ye(n), T = G(() => JSON.stringify(n), [n]), A = G(() => JSON.stringify(s) !== T, [s, T]);
  Fe(() => {
    e && (a(n), F.current = n, d(n.length > 0 ? n[0].path : null), D.current = false, O(null), v(null));
  }, [e, n]), Fe(() => {
    e && !D.current && (D.current = true, x.current());
  }, [e]);
  const W = z(async () => {
    m(true), O(null), v(null);
    try {
      const M = i.oid;
      if (!M) return;
      const K = await l.getState(M), k = so(K == null ? void 0 : K.val, F.current, i.tableMaxDepth);
      if (k.columns.length === 0) return;
      k.depthWarning && v(ao(k.depthWarning, Kn)), p(k.columns.map((U) => U.detected));
      const le = k.columns.map((U) => U.config);
      a(le), F.current = le, d((U) => U === null && le.length > 0 ? le[0].path : U);
    } catch (M) {
      const K = M instanceof Error ? M.message : "Failed to discover columns";
      O(K);
    } finally {
      m(false);
    }
  }, [i, l]);
  Fe(() => {
    x.current = W;
  }, [W]), Fe(() => {
    F.current = s;
  }, [s]);
  const P = z((M) => {
    a((K) => K.map((k) => k.path === M.path ? M : k));
  }, []), ce = z((M) => {
    a(M);
  }, []), de = z(() => {
    r(s), t();
  }, [s, r, t]), te = z((M, K) => {
    if (K === "backdropClick" && A) {
      b(true);
      return;
    }
    t();
  }, [A, t]), re = G(() => c ? s.find((M) => M.path === c) : null, [c, s]), we = G(() => c ? g.find((M) => M.path === c) : void 0, [c, g]), ie = Un(i), C = G(() => "json-table-column-editor-title", []);
  return _(Qo, { theme: o, children: [_(Ln, { open: e, onClose: te, maxWidth: "lg", fullWidth: true, "aria-labelledby": C, slotProps: { paper: { sx: { height: "80vh", maxHeight: "900px" } } }, children: [u(Wn, { sx: { py: 1.5, px: 2.5 }, id: C, children: _($, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [u(S, { variant: "h6", children: h.t("json_table_column_editor_title") }), u(ne, { onClick: () => te(), size: "small", sx: { color: "text.secondary" }, "aria-label": h.t("close"), children: u(qn, {}) })] }) }), _(Gn, { dividers: true, sx: { p: 0, display: "flex", flexDirection: "column", overflow: "hidden" }, children: [w && u(Nt, { severity: "warning", onClose: () => v(null), sx: { mx: 2, mt: 2 }, children: w }), R && u(Nt, { severity: "error", onClose: () => O(null), sx: { mx: 2, mt: 2 }, children: R }), _($, { sx: { display: "flex", flex: 1, overflow: "hidden" }, children: [u($, { sx: { width: "40%", minWidth: 280, borderRight: 1, borderColor: "divider", display: "flex", flexDirection: "column", overflow: "hidden" }, children: u(Ol, { columns: s, discoveredColumns: g, selectedPath: c, onSelect: d, onChange: ce, onRefresh: W, loading: f }) }), u($, { sx: { width: "60%", display: "flex", flexDirection: "column", overflow: "hidden" }, children: re ? u(Ns, { column: re, discoveredColumn: we, onChange: P, capabilities: ie }) : u($, { sx: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: u(S, { variant: "body2", color: "text.secondary", children: s.length > 0 ? h.t("json_table_select_column") : h.t("json_table_no_columns") }) }) })] })] }), _(Bn, { sx: { px: 2.5, py: 1.5 }, children: [u(Ae, { onClick: () => te(), children: h.t("cancel") }), u(Ae, { variant: "contained", onClick: de, disabled: !A, children: h.t("save") })] })] }), u(pi, { open: y, autoHideDuration: 3e3, onClose: () => b(false), anchorOrigin: { vertical: "bottom", horizontal: "center" }, children: u(Nt, { severity: "warning", onClose: () => b(false), children: h.t("json_table_unsaved_changes") }) })] });
}
function Es(e, t, n, r) {
  const o = e.name || "columnConfig", i = r.context.theme, [l, s] = q(false), a = G(() => uo(t[o]), [t, o]), c = a.filter((b) => b.visible).length, d = a.length, g = a.some((b) => b.format), p = a.some((b) => b.cellStyle && b.cellStyle.length > 0), f = z((b) => {
    const w = JSON.stringify(b), v = `b64:${hi(w)}`;
    n({ [o]: v });
  }, [o, n]), m = z(() => {
    s(true);
  }, []), y = z(() => {
    s(false);
  }, []);
  return _($, { sx: { mt: 1, width: "100%" }, children: [u(Ae, { variant: "outlined", startIcon: u(mi, {}), onClick: m, fullWidth: true, sx: { textTransform: "none" }, "aria-label": h.t("json_table_configure_columns"), "aria-haspopup": "dialog", children: h.t("json_table_configure_columns") }), d > 0 && _(S, { variant: "caption", color: "primary.main", sx: { mt: 0.5, display: "block" }, "aria-live": "polite", children: [c, " / ", d, " ", h.t("json_table_columns_visible"), g && ` \xB7 ${h.t("json_table_has_formatting")}`, p && ` \xB7 ${h.t("json_table_has_styling")}`] }), u(Os, { open: l, onClose: y, columns: a, onSave: f, theme: i, data: t, socket: r.context.socket })] });
}
const vt = (e, t) => (n) => !Un({ ...n, [e]: true })[t], vo = () => [{ label: "", type: "custom", component: () => u(be, { dividerText: "json_table_column_config" }) }, { name: "columnConfig", label: "json_table_column_config_label", type: "custom", component: Es }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_features" }) }, { name: "tableSorting", type: "checkbox", label: "json_table_sorting", default: true, hidden: vt("tableSorting", "sorting") }, { name: "tableSortingMulti", type: "checkbox", label: "json_table_sorting_multi", default: false, tooltip: "json_table_sorting_multi_tooltip", hidden: vt("tableSortingMulti", "multiSort") }, { name: "tableFiltering", type: "checkbox", label: "json_table_filtering", default: true, tooltip: "json_table_filtering_tooltip", hidden: vt("tableFiltering", "columnFiltering") }, { name: "tableQuickFilter", type: "checkbox", label: "json_table_quick_filter", default: false }, { name: "tableColumnMenu", type: "checkbox", label: "json_table_column_menu", default: true, hidden: vt("tableColumnMenu", "columnMenu") }, { name: "tableHiding", type: "checkbox", label: "json_table_hiding", default: true, tooltip: "json_table_hiding_tooltip", hidden: vt("tableHiding", "hiding") }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_pagination" }) }, { name: "tablePagination", type: "checkbox", label: "json_table_pagination_enabled", default: true }, { name: "tablePageSize", type: "number", label: "json_table_page_size", default: 25, min: 1 }, { name: "tablePageSizeOptions", type: "text", label: "json_table_page_size_options", default: "10,25,50,100", tooltip: "json_table_page_size_options_tooltip" }, { name: "tableVirtualizeThreshold", type: "number", label: "json_table_virtualize_threshold", default: 50, min: 0, tooltip: "json_table_virtualize_threshold_tooltip" }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_selection" }) }, { name: "tableRowSelection", type: "checkbox", label: "json_table_row_selection", default: false }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_analysis" }) }, { name: "tableMaxDepth", type: "number", label: "json_table_max_depth", default: 10, min: 1, max: 50, tooltip: "json_table_max_depth_tooltip" }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_layout" }) }, { name: "tableDensity", label: "json_table_density", type: "select", options: [{ value: "compact", label: "compact" }, { value: "standard", label: "standard" }, { value: "comfortable", label: "comfortable" }], default: "standard", noTranslation: true }, { name: "tableRowHeight", type: "number", label: "json_table_row_height", min: 20, tooltip: "json_table_row_height_tooltip" }, { name: "tableShowHeader", type: "checkbox", label: "json_table_show_header", default: true, tooltip: "json_table_show_header_tooltip" }, { name: "tableHeaderHeight", type: "number", label: "json_table_header_height", min: 20, hidden: "data.tableShowHeader === false" }, { name: "tableHeaderElevation", label: "json_table_header_elevation", type: "slider", min: 0, max: 24, step: 1, default: 6, tooltip: "json_table_header_elevation_tooltip", hidden: "data.tableShowHeader === false" }, { name: "tableAutoSize", type: "checkbox", label: "json_table_auto_size", default: false }, { name: "jsonTablePadding", type: "number", label: "json_table_padding", default: 1, step: 0.5, min: 0 }, { label: "", type: "custom", component: () => u(be, { dividerText: "group_table_border" }) }, { name: "borderWidth", label: "table_border_width", type: "slider", min: 0, max: 20, step: 1, default: 0 }, { name: "borderStyle", label: "table_border_style", type: "select", options: [{ value: "none", label: "none" }, { value: "dotted", label: "dotted" }, { value: "dashed", label: "dashed" }, { value: "solid", label: "solid" }, { value: "double", label: "double" }, { value: "groove", label: "groove" }, { value: "ridge", label: "ridge" }, { value: "inset", label: "inset" }, { value: "outset", label: "outset" }, { value: "hidden", label: "hidden" }], default: "solid", noTranslation: true }, qe({ name: "borderColor", label: "table_border_color", noGradient: true }), { name: "borderRadius", label: "table_border_radius", type: "text", default: "" }, { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_header_style" }), hidden: "data.tableShowHeader === false" }, qe({ name: "tableHeaderBgColor", label: "json_table_header_bg_color", hidden: "data.tableShowHeader === false" }), qe({ name: "tableHeaderTextColor", label: "json_table_header_text_color", noGradient: true, hidden: "data.tableShowHeader === false" }), { name: "tableHeaderFontSize", type: "number", label: "json_table_header_font_size", min: 8, hidden: "data.tableShowHeader === false" }, { label: "", type: "custom", component: () => u(be, {}), hidden: "data.tableShowHeader === false" }, { name: "headerBorderWidth", label: "json_table_header_border_width", type: "slider", min: 0, max: 10, step: 1, default: 0, hidden: "data.tableShowHeader === false" }, qe({ name: "headerBorderColor", label: "json_table_header_border_color", noGradient: true, hidden: "data.tableShowHeader === false" }), { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_borders" }) }, { name: "tableShowCellBorders", type: "checkbox", label: "json_table_show_cell_borders", default: false }, { name: "verticalCellBorderWidth", label: "vertical_cell_border_width", type: "slider", min: 0, max: 10, step: 1, default: 1, hidden: "!data.tableShowCellBorders" }, qe({ name: "verticalCellBorderColor", label: "vertical_cell_border_color", noGradient: true, hidden: "!data.tableShowCellBorders" }), { label: "", type: "custom", component: () => u(be, {}) }, { name: "tableShowRowBorders", type: "checkbox", label: "json_table_show_row_borders", default: true }, { name: "horizontalCellBorderWidth", label: "horizontal_cell_border_width", type: "slider", min: 0, max: 10, step: 1, default: 1, hidden: "!data.tableShowRowBorders" }, qe({ name: "horizontalCellBorderColor", label: "horizontal_cell_border_color", noGradient: true, hidden: "!data.tableShowRowBorders" }), { label: "", type: "custom", component: () => u(be, { dividerText: "json_table_cell_style" }) }, qe({ name: "evenRowColor", label: "json_table_even_row_color" }), qe({ name: "oddRowColor", label: "json_table_odd_row_color" })];
function Je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _e(e, t) {
  return (n) => {
    t.setState((r) => ({ ...r, [e]: Je(n, r[e]) }));
  };
}
function nn(e) {
  return e instanceof Function;
}
function ks(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Vs(e, t) {
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
    if (!(s.length !== r.length || s.some((d, g) => r[g] !== d))) return o;
    r = s;
    let c;
    if (n.key && n.debug && (c = Date.now()), o = t(...s), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const d = Math.round((Date.now() - l) * 100) / 100, g = Math.round((Date.now() - c) * 100) / 100, p = g / 16, f = (m, y) => {
        for (m = String(m); m.length < y; ) m = " " + m;
        return m;
      };
      console.info(`%c\u23F1 ${f(g, 5)} /${f(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function I(e, t, n, r) {
  return { debug: () => {
    var o;
    return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
  }, key: false, onChange: r };
}
function Hs(e, t, n, r) {
  const o = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = { id: `${t.id}_${n.id}`, row: t, column: n, getValue: () => t.getValue(r), renderValue: o, getContext: j(() => [e, n, t, i], (l, s, a, c) => ({ table: l, column: s, row: a, cell: c, getValue: c.getValue, renderValue: c.renderValue }), I(e.options, "debugCells")) };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, n, t, e);
  }, {}), i;
}
function Bs(e, t, n, r) {
  var o, i;
  const s = { ...e._getDefaultColumnDef(), ...t }, a = s.accessorKey;
  let c = (o = (i = s.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof s.header == "string" ? s.header : void 0, d;
  if (s.accessorFn ? d = s.accessorFn : a && (a.includes(".") ? d = (p) => {
    let f = p;
    for (const y of a.split(".")) {
      var m;
      f = (m = f) == null ? void 0 : m[y];
    }
    return f;
  } : d = (p) => p[s.accessorKey]), !c) throw new Error();
  let g = { id: `${String(c)}`, accessorFn: d, parent: r, depth: n, columnDef: s, columns: [], getFlatColumns: j(() => [true], () => {
    var p;
    return [g, ...(p = g.columns) == null ? void 0 : p.flatMap((f) => f.getFlatColumns())];
  }, I(e.options, "debugColumns")), getLeafColumns: j(() => [e._getOrderColumnsFn()], (p) => {
    var f;
    if ((f = g.columns) != null && f.length) {
      let m = g.columns.flatMap((y) => y.getLeafColumns());
      return p(m);
    }
    return [g];
  }, I(e.options, "debugColumns")) };
  for (const p of e._features) p.createColumn == null || p.createColumn(g, e);
  return g;
}
const se = "debugHeaders";
function Fr(e, t, n) {
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
const Ls = { createTable: (e) => {
  e.getHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
    var i, l;
    const s = (i = r == null ? void 0 : r.map((g) => n.find((p) => p.id === g)).filter(Boolean)) != null ? i : [], a = (l = o == null ? void 0 : o.map((g) => n.find((p) => p.id === g)).filter(Boolean)) != null ? l : [], c = n.filter((g) => !(r != null && r.includes(g.id)) && !(o != null && o.includes(g.id)));
    return Pt(t, [...s, ...c, ...a], e);
  }, I(e.options, se)), e.getCenterHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((i) => !(r != null && r.includes(i.id)) && !(o != null && o.includes(i.id))), Pt(t, n, e, "center")), I(e.options, se)), e.getLeftHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
    var o;
    const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
    return Pt(t, i, e, "left");
  }, I(e.options, se)), e.getRightHeaderGroups = j(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
    var o;
    const i = (o = r == null ? void 0 : r.map((l) => n.find((s) => s.id === l)).filter(Boolean)) != null ? o : [];
    return Pt(t, i, e, "right");
  }, I(e.options, se)), e.getFooterGroups = j(() => [e.getHeaderGroups()], (t) => [...t].reverse(), I(e.options, se)), e.getLeftFooterGroups = j(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), I(e.options, se)), e.getCenterFooterGroups = j(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), I(e.options, se)), e.getRightFooterGroups = j(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), I(e.options, se)), e.getFlatHeaders = j(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, se)), e.getLeftFlatHeaders = j(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, se)), e.getCenterFlatHeaders = j(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, se)), e.getRightFlatHeaders = j(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), I(e.options, se)), e.getCenterLeafHeaders = j(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), I(e.options, se)), e.getLeftLeafHeaders = j(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), I(e.options, se)), e.getRightLeafHeaders = j(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
    var r;
    return !((r = n.subHeaders) != null && r.length);
  }), I(e.options, se)), e.getLeafHeaders = j(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
    var o, i, l, s, a, c;
    return [...(o = (i = t[0]) == null ? void 0 : i.headers) != null ? o : [], ...(l = (s = n[0]) == null ? void 0 : s.headers) != null ? l : [], ...(a = (c = r[0]) == null ? void 0 : c.headers) != null ? a : []].map((d) => d.getLeafHeaders()).flat();
  }, I(e.options, se));
} };
function Pt(e, t, n, r) {
  var o, i;
  let l = 0;
  const s = function(p, f) {
    f === void 0 && (f = 1), l = Math.max(l, f), p.filter((m) => m.getIsVisible()).forEach((m) => {
      var y;
      (y = m.columns) != null && y.length && s(m.columns, f + 1);
    }, 0);
  };
  s(e);
  let a = [];
  const c = (p, f) => {
    const m = { depth: f, id: [r, `${f}`].filter(Boolean).join("_"), headers: [] }, y = [];
    p.forEach((b) => {
      const w = [...y].reverse()[0], v = b.column.depth === m.depth;
      let R, O = false;
      if (v && b.column.parent ? R = b.column.parent : (R = b.column, O = true), w && (w == null ? void 0 : w.column) === R) w.subHeaders.push(b);
      else {
        const D = Fr(n, R, { id: [r, f, R.id, b == null ? void 0 : b.id].filter(Boolean).join("_"), isPlaceholder: O, placeholderId: O ? `${y.filter((x) => x.column === R).length}` : void 0, depth: f, index: y.length });
        D.subHeaders.push(b), y.push(D);
      }
      m.headers.push(b), b.headerGroup = m;
    }), a.push(m), f > 0 && c(y, f - 1);
  }, d = t.map((p, f) => Fr(n, p, { depth: l, index: f }));
  c(d, l - 1), a.reverse();
  const g = (p) => p.filter((m) => m.column.getIsVisible()).map((m) => {
    let y = 0, b = 0, w = [0];
    m.subHeaders && m.subHeaders.length ? (w = [], g(m.subHeaders).forEach((R) => {
      let { colSpan: O, rowSpan: D } = R;
      y += O, w.push(D);
    })) : y = 1;
    const v = Math.min(...w);
    return b = b + v, m.colSpan = y, m.rowSpan = b, { colSpan: y, rowSpan: b };
  });
  return g((o = (i = a[0]) == null ? void 0 : i.headers) != null ? o : []), a;
}
const Xn = (e, t, n, r, o, i, l) => {
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
  }, subRows: [], getLeafRows: () => Vs(s.subRows, (a) => a.subRows), getParentRow: () => s.parentId ? e.getRow(s.parentId, true) : void 0, getParentRows: () => {
    let a = [], c = s;
    for (; ; ) {
      const d = c.getParentRow();
      if (!d) break;
      a.push(d), c = d;
    }
    return a.reverse();
  }, getAllCells: j(() => [e.getAllLeafColumns()], (a) => a.map((c) => Hs(e, s, c, c.id)), I(e.options, "debugRows")), _getAllCellsByColumnId: j(() => [s.getAllCells()], (a) => a.reduce((c, d) => (c[d.column.id] = d, c), {}), I(e.options, "debugRows")) };
  for (let a = 0; a < e._features.length; a++) {
    const c = e._features[a];
    c == null || c.createRow == null || c.createRow(s, e);
  }
  return s;
}, Ws = { createColumn: (e, t) => {
  e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
    if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
  };
} }, wo = (e, t, n) => {
  var r, o;
  const i = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(i));
};
wo.autoRemove = (e) => Ce(e);
const So = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
So.autoRemove = (e) => Ce(e);
const Co = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
Co.autoRemove = (e) => Ce(e);
const xo = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
xo.autoRemove = (e) => Ce(e);
const Ro = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
Ro.autoRemove = (e) => Ce(e) || !(e != null && e.length);
const Fo = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
Fo.autoRemove = (e) => Ce(e) || !(e != null && e.length);
const Ao = (e, t, n) => e.getValue(t) === n;
Ao.autoRemove = (e) => Ce(e);
const zo = (e, t, n) => e.getValue(t) == n;
zo.autoRemove = (e) => Ce(e);
const Qn = (e, t, n) => {
  let [r, o] = n;
  const i = e.getValue(t);
  return i >= r && i <= o;
};
Qn.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(r) ? -1 / 0 : r, l = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Qn.autoRemove = (e) => Ce(e) || Ce(e[0]) && Ce(e[1]);
const Te = { includesString: wo, includesStringSensitive: So, equalsString: Co, arrIncludes: xo, arrIncludesAll: Ro, arrIncludesSome: Fo, equals: Ao, weakEquals: zo, inNumberRange: Qn };
function Ce(e) {
  return e == null || e === "";
}
const Gs = { getDefaultColumnDef: () => ({ filterFn: "auto" }), getInitialState: (e) => ({ columnFilters: [], ...e }), getDefaultOptions: (e) => ({ onColumnFiltersChange: _e("columnFilters", e), filterFromLeafRows: false, maxLeafRowFilterDepth: 100 }), createColumn: (e, t) => {
  e.getAutoFilterFn = () => {
    const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
    return typeof r == "string" ? Te.includesString : typeof r == "number" ? Te.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? Te.equals : Array.isArray(r) ? Te.arrIncludes : Te.weakEquals;
  }, e.getFilterFn = () => {
    var n, r;
    return nn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : Te[e.columnDef.filterFn];
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
      const o = e.getFilterFn(), i = r == null ? void 0 : r.find((d) => d.id === e.id), l = Je(n, i ? i.value : void 0);
      if (Ar(o, l, e)) {
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
      return (i = Je(t, o)) == null ? void 0 : i.filter((l) => {
        const s = n.find((a) => a.id === l.id);
        if (s) {
          const a = s.getFilterFn();
          if (Ar(a, l.value, s)) return false;
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
function Ar(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
}
const qs = (e, t, n) => n.reduce((r, o) => {
  const i = o.getValue(e);
  return r + (typeof i == "number" ? i : 0);
}, 0), Us = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r > i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Js = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const i = o.getValue(e);
    i != null && (r < i || r === void 0 && i >= i) && (r = i);
  }), r;
}, Ys = (e, t, n) => {
  let r, o;
  return n.forEach((i) => {
    const l = i.getValue(e);
    l != null && (r === void 0 ? l >= l && (r = o = l) : (r > l && (r = l), o < l && (o = l)));
  }), [r, o];
}, Ks = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let i = o.getValue(e);
    i != null && (i = +i) >= i && (++n, r += i);
  }), n) return r / n;
}, Xs = (e, t) => {
  if (!t.length) return;
  const n = t.map((i) => i.getValue(e));
  if (!ks(n)) return;
  if (n.length === 1) return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((i, l) => i - l);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Qs = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Zs = (e, t) => new Set(t.map((n) => n.getValue(e))).size, ea = (e, t) => t.length, vn = { sum: qs, min: Us, max: Js, extent: Ys, mean: Ks, median: Xs, unique: Qs, uniqueCount: Zs, count: ea }, ta = { getDefaultColumnDef: () => ({ aggregatedCell: (e) => {
  var t, n;
  return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
}, aggregationFn: "auto" }), getInitialState: (e) => ({ grouping: [], ...e }), getDefaultOptions: (e) => ({ onGroupingChange: _e("grouping", e), groupedColumnMode: "reorder" }), createColumn: (e, t) => {
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
    if (typeof r == "number") return vn.sum;
    if (Object.prototype.toString.call(r) === "[object Date]") return vn.extent;
  }, e.getAggregationFn = () => {
    var n, r;
    if (!e) throw new Error();
    return nn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : vn[e.columnDef.aggregationFn];
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
function na(e, t, n) {
  if (!(t != null && t.length) || !n) return e;
  const r = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? r : [...t.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...r];
}
const ra = { getInitialState: (e) => ({ columnOrder: [], ...e }), getDefaultOptions: (e) => ({ onColumnOrderChange: _e("columnOrder", e) }), createColumn: (e, t) => {
  e.getIndex = j((n) => [xt(t, n)], (n) => n.findIndex((r) => r.id === e.id), I(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
    var r;
    return ((r = xt(t, n)[0]) == null ? void 0 : r.id) === e.id;
  }, e.getIsLastColumn = (n) => {
    var r;
    const o = xt(t, n);
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
    return na(i, n, r);
  }, I(e.options, "debugTable"));
} }, wn = () => ({ left: [], right: [] }), oa = { getInitialState: (e) => ({ columnPinning: wn(), ...e }), getDefaultOptions: (e) => ({ onColumnPinningChange: _e("columnPinning", e) }), createColumn: (e, t) => {
  e.pin = (n) => {
    const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
    t.setColumnPinning((o) => {
      var i, l;
      if (n === "right") {
        var s, a;
        return { left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((g) => !(r != null && r.includes(g))), right: [...((a = o == null ? void 0 : o.right) != null ? a : []).filter((g) => !(r != null && r.includes(g))), ...r] };
      }
      if (n === "left") {
        var c, d;
        return { left: [...((c = o == null ? void 0 : o.left) != null ? c : []).filter((g) => !(r != null && r.includes(g))), ...r], right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((g) => !(r != null && r.includes(g))) };
      }
      return { left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((g) => !(r != null && r.includes(g))), right: ((l = o == null ? void 0 : o.right) != null ? l : []).filter((g) => !(r != null && r.includes(g))) };
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
  }, I(t.options, "debugRows")), e.getLeftVisibleCells = j(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "left" })), I(t.options, "debugRows")), e.getRightVisibleCells = j(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((i) => n.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "right" })), I(t.options, "debugRows"));
}, createTable: (e) => {
  e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
    var n, r;
    return e.setColumnPinning(t ? wn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : wn());
  }, e.getIsSomeColumnsPinned = (t) => {
    var n;
    const r = e.getState().columnPinning;
    if (!t) {
      var o, i;
      return !!((o = r.left) != null && o.length || (i = r.right) != null && i.length);
    }
    return !!((n = r[t]) != null && n.length);
  }, e.getLeftLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), I(e.options, "debugColumns")), e.getRightLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), I(e.options, "debugColumns")), e.getCenterLeafColumns = j(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
    const o = [...n ?? [], ...r ?? []];
    return t.filter((i) => !o.includes(i.id));
  }, I(e.options, "debugColumns"));
} };
function ia(e) {
  return e || (typeof document < "u" ? document : null);
}
const Dt = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER }, Sn = () => ({ startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] }), la = { getDefaultColumnDef: () => Dt, getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: Sn(), ...e }), getDefaultOptions: (e) => ({ columnResizeMode: "onEnd", columnResizeDirection: "ltr", onColumnSizingChange: _e("columnSizing", e), onColumnSizingInfoChange: _e("columnSizingInfo", e) }), createColumn: (e, t) => {
  e.getSize = () => {
    var n, r, o;
    const i = t.getState().columnSizing[e.id];
    return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Dt.minSize, (r = i ?? e.columnDef.size) != null ? r : Dt.size), (o = e.columnDef.maxSize) != null ? o : Dt.maxSize);
  }, e.getStart = j((n) => [n, xt(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, i) => o + i.getSize(), 0), I(t.options, "debugColumns")), e.getAfter = j((n) => [n, xt(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, i) => o + i.getSize(), 0), I(t.options, "debugColumns")), e.resetSize = () => {
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
      if (!r || !o || (i.persist == null || i.persist(), Cn(i) && i.touches && i.touches.length > 1)) return;
      const l = e.getSize(), s = e ? e.getLeafHeaders().map((w) => [w.column.id, w.column.getSize()]) : [[r.id, r.getSize()]], a = Cn(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, d = (w, v) => {
        typeof v == "number" && (t.setColumnSizingInfo((R) => {
          var O, D;
          const x = t.options.columnResizeDirection === "rtl" ? -1 : 1, F = (v - ((O = R == null ? void 0 : R.startOffset) != null ? O : 0)) * x, T = Math.max(F / ((D = R == null ? void 0 : R.startSize) != null ? D : 0), -0.999999);
          return R.columnSizingStart.forEach((A) => {
            let [W, P] = A;
            c[W] = Math.round(Math.max(P + P * T, 0) * 100) / 100;
          }), { ...R, deltaOffset: F, deltaPercentage: T };
        }), (t.options.columnResizeMode === "onChange" || w === "end") && t.setColumnSizing((R) => ({ ...R, ...c })));
      }, g = (w) => d("move", w), p = (w) => {
        d("end", w), t.setColumnSizingInfo((v) => ({ ...v, isResizingColumn: false, startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, columnSizingStart: [] }));
      }, f = ia(n), m = { moveHandler: (w) => g(w.clientX), upHandler: (w) => {
        f == null ? void 0 : f.removeEventListener("mousemove", m.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", m.upHandler), p(w.clientX);
      } }, y = { moveHandler: (w) => (w.cancelable && (w.preventDefault(), w.stopPropagation()), g(w.touches[0].clientX), false), upHandler: (w) => {
        var v;
        f == null ? void 0 : f.removeEventListener("touchmove", y.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", y.upHandler), w.cancelable && (w.preventDefault(), w.stopPropagation()), p((v = w.touches[0]) == null ? void 0 : v.clientX);
      } }, b = sa() ? { passive: false } : false;
      Cn(i) ? (f == null ? void 0 : f.addEventListener("touchmove", y.moveHandler, b), f == null ? void 0 : f.addEventListener("touchend", y.upHandler, b)) : (f == null ? void 0 : f.addEventListener("mousemove", m.moveHandler, b), f == null ? void 0 : f.addEventListener("mouseup", m.upHandler, b)), t.setColumnSizingInfo((w) => ({ ...w, startOffset: a, startSize: l, deltaOffset: 0, deltaPercentage: 0, columnSizingStart: s, isResizingColumn: r.id }));
    };
  };
}, createTable: (e) => {
  e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
    var n;
    e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
  }, e.resetHeaderSizeInfo = (t) => {
    var n;
    e.setColumnSizingInfo(t ? Sn() : (n = e.initialState.columnSizingInfo) != null ? n : Sn());
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
let Tt = null;
function sa() {
  if (typeof Tt == "boolean") return Tt;
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
  return Tt = e, Tt;
}
function Cn(e) {
  return e.type === "touchstart";
}
const aa = { getInitialState: (e) => ({ columnVisibility: {}, ...e }), getDefaultOptions: (e) => ({ onColumnVisibilityChange: _e("columnVisibility", e) }), createColumn: (e, t) => {
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
  e._getAllVisibleCells = j(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), I(t.options, "debugRows")), e.getVisibleCells = j(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], I(t.options, "debugRows"));
}, createTable: (e) => {
  const t = (n, r) => j(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), I(e.options, "debugColumns"));
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
function xt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const ua = { createTable: (e) => {
  e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
    if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
  };
} }, ca = { getInitialState: (e) => ({ globalFilter: void 0, ...e }), getDefaultOptions: (e) => ({ onGlobalFilterChange: _e("globalFilter", e), globalFilterFn: "auto", getColumnCanGlobalFilter: (t) => {
  var n;
  const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
  return typeof r == "string" || typeof r == "number";
} }), createColumn: (e, t) => {
  e.getCanGlobalFilter = () => {
    var n, r, o, i;
    return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((r = t.options.enableGlobalFilter) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : true) && !!e.accessorFn;
  };
}, createTable: (e) => {
  e.getGlobalAutoFilterFn = () => Te.includesString, e.getGlobalFilterFn = () => {
    var t, n;
    const { globalFilterFn: r } = e.options;
    return nn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : Te[r];
  }, e.setGlobalFilter = (t) => {
    e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
  }, e.resetGlobalFilter = (t) => {
    e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
  };
} }, da = { getInitialState: (e) => ({ expanded: {}, ...e }), getDefaultOptions: (e) => ({ onExpandedChange: _e("expanded", e), paginateExpandedRows: true }), createTable: (e) => {
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
} }, Tn = 0, Nn = 10, xn = () => ({ pageIndex: Tn, pageSize: Nn }), fa = { getInitialState: (e) => ({ ...e, pagination: { ...xn(), ...e == null ? void 0 : e.pagination } }), getDefaultOptions: (e) => ({ onPaginationChange: _e("pagination", e) }), createTable: (e) => {
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
    const o = (i) => Je(r, i);
    return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
  }, e.resetPagination = (r) => {
    var o;
    e.setPagination(r ? xn() : (o = e.initialState.pagination) != null ? o : xn());
  }, e.setPageIndex = (r) => {
    e.setPagination((o) => {
      let i = Je(r, o.pageIndex);
      const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
      return i = Math.max(0, Math.min(i, l)), { ...o, pageIndex: i };
    });
  }, e.resetPageIndex = (r) => {
    var o, i;
    e.setPageIndex(r ? Tn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? o : Tn);
  }, e.resetPageSize = (r) => {
    var o, i;
    e.setPageSize(r ? Nn : (o = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? o : Nn);
  }, e.setPageSize = (r) => {
    e.setPagination((o) => {
      const i = Math.max(1, Je(r, o.pageSize)), l = o.pageSize * o.pageIndex, s = Math.floor(l / i);
      return { ...o, pageIndex: s, pageSize: i };
    });
  }, e.setPageCount = (r) => e.setPagination((o) => {
    var i;
    let l = Je(r, (i = e.options.pageCount) != null ? i : -1);
    return typeof l == "number" && (l = Math.max(-1, l)), { ...o, pageCount: l };
  }), e.getPageOptions = j(() => [e.getPageCount()], (r) => {
    let o = [];
    return r && r > 0 && (o = [...new Array(r)].fill(null).map((i, l) => l)), o;
  }, I(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
    const { pageIndex: r } = e.getState().pagination, o = e.getPageCount();
    return o === -1 ? true : o === 0 ? false : r < o - 1;
  }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
    var r;
    return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
  }, e.getRowCount = () => {
    var r;
    return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
  };
} }, Rn = () => ({ top: [], bottom: [] }), ga = { getInitialState: (e) => ({ rowPinning: Rn(), ...e }), getDefaultOptions: (e) => ({ onRowPinningChange: _e("rowPinning", e) }), createRow: (e, t) => {
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
        var g, p;
        return { top: ((g = a == null ? void 0 : a.top) != null ? g : []).filter((y) => !(s != null && s.has(y))), bottom: [...((p = a == null ? void 0 : a.bottom) != null ? p : []).filter((y) => !(s != null && s.has(y))), ...Array.from(s)] };
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
    return e.setRowPinning(t ? Rn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Rn());
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
  }, e.getTopRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), I(e.options, "debugRows")), e.getBottomRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), I(e.options, "debugRows")), e.getCenterRows = j(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
    const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
    return t.filter((i) => !o.has(i.id));
  }, I(e.options, "debugRows"));
} }, pa = { getInitialState: (e) => ({ rowSelection: {}, ...e }), getDefaultOptions: (e) => ({ onRowSelectionChange: _e("rowSelection", e), enableRowSelection: true, enableMultiRowSelection: true, enableSubRowSelection: true }), createTable: (e) => {
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
      On(o, i.id, r, true, e);
    }), o;
  }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = j(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Fn(e, n) : { rows: [], flatRows: [], rowsById: {} }, I(e.options, "debugTable")), e.getFilteredSelectedRowModel = j(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Fn(e, n) : { rows: [], flatRows: [], rowsById: {} }, I(e.options, "debugTable")), e.getGroupedSelectedRowModel = j(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Fn(e, n) : { rows: [], flatRows: [], rowsById: {} }, I(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
      return On(s, e.id, n, (l = r == null ? void 0 : r.selectChildren) != null ? l : true, t), s;
    });
  }, e.getIsSelected = () => {
    const { rowSelection: n } = t.getState();
    return Zn(e, n);
  }, e.getIsSomeSelected = () => {
    const { rowSelection: n } = t.getState();
    return En(e, n) === "some";
  }, e.getIsAllSubRowsSelected = () => {
    const { rowSelection: n } = t.getState();
    return En(e, n) === "all";
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
} }, On = (e, t, n, r, o) => {
  var i;
  const l = o.getRow(t, true);
  n ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[t] = true)) : delete e[t], r && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => On(e, s.id, n, r, o));
};
function Fn(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, i = function(l, s) {
    return l.map((a) => {
      var c;
      const d = Zn(a, n);
      if (d && (r.push(a), o[a.id] = a), (c = a.subRows) != null && c.length && (a = { ...a, subRows: i(a.subRows) }), d) return a;
    }).filter(Boolean);
  };
  return { rows: i(t.rows), flatRows: r, rowsById: o };
}
function Zn(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : false;
}
function En(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return false;
  let o = true, i = false;
  return e.subRows.forEach((l) => {
    if (!(i && !o) && (l.getCanSelect() && (Zn(l, t) ? i = true : o = false), l.subRows && l.subRows.length)) {
      const s = En(l, t);
      s === "all" ? i = true : (s === "some" && (i = true), o = false);
    }
  }), o ? "all" : i ? "some" : false;
}
const kn = /([0-9]+)/gm, ha = (e, t, n) => Mo(Ke(e.getValue(n)).toLowerCase(), Ke(t.getValue(n)).toLowerCase()), ma = (e, t, n) => Mo(Ke(e.getValue(n)), Ke(t.getValue(n))), ya = (e, t, n) => er(Ke(e.getValue(n)).toLowerCase(), Ke(t.getValue(n)).toLowerCase()), _a = (e, t, n) => er(Ke(e.getValue(n)), Ke(t.getValue(n))), ba = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, va = (e, t, n) => er(e.getValue(n), t.getValue(n));
function er(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Ke(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Mo(e, t) {
  const n = e.split(kn).filter(Boolean), r = t.split(kn).filter(Boolean);
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
const wt = { alphanumeric: ha, alphanumericCaseSensitive: ma, text: ya, textCaseSensitive: _a, datetime: ba, basic: va }, wa = { getInitialState: (e) => ({ sorting: [], ...e }), getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }), getDefaultOptions: (e) => ({ onSortingChange: _e("sorting", e), isMultiSortEvent: (t) => t.shiftKey }), createColumn: (e, t) => {
  e.getAutoSortingFn = () => {
    const n = t.getFilteredRowModel().flatRows.slice(10);
    let r = false;
    for (const o of n) {
      const i = o == null ? void 0 : o.getValue(e.id);
      if (Object.prototype.toString.call(i) === "[object Date]") return wt.datetime;
      if (typeof i == "string" && (r = true, i.split(kn).length > 1)) return wt.alphanumeric;
    }
    return r ? wt.text : wt.basic;
  }, e.getAutoSortDir = () => {
    const n = t.getFilteredRowModel().flatRows[0];
    return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
  }, e.getSortingFn = () => {
    var n, r;
    if (!e) throw new Error();
    return nn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : wt[e.columnDef.sortingFn];
  }, e.toggleSorting = (n, r) => {
    const o = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
    t.setSorting((l) => {
      const s = l == null ? void 0 : l.find((f) => f.id === e.id), a = l == null ? void 0 : l.findIndex((f) => f.id === e.id);
      let c = [], d, g = i ? n : o === "desc";
      if (l != null && l.length && e.getCanMultiSort() && r ? s ? d = "toggle" : d = "add" : l != null && l.length && a !== l.length - 1 ? d = "replace" : s ? d = "toggle" : d = "replace", d === "toggle" && (i || o || (d = "remove")), d === "add") {
        var p;
        c = [...l, { id: e.id, desc: g }], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
      } else d === "toggle" ? c = l.map((f) => f.id === e.id ? { ...f, desc: g } : f) : d === "remove" ? c = l.filter((f) => f.id !== e.id) : c = [{ id: e.id, desc: g }];
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
} }, Sa = [Ls, aa, ra, oa, Ws, Gs, ua, ca, wa, ta, da, fa, ga, pa, la];
function Ca(e) {
  var t, n;
  const r = [...Sa, ...(t = e._features) != null ? t : []];
  let o = { _features: r };
  const i = o._features.reduce((p, f) => Object.assign(p, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), l = (p) => o.options.mergeOptions ? o.options.mergeOptions(i, p) : { ...i, ...p };
  let a = { ...{}, ...(n = e.initialState) != null ? n : {} };
  o._features.forEach((p) => {
    var f;
    a = (f = p.getInitialState == null ? void 0 : p.getInitialState(a)) != null ? f : a;
  });
  const c = [];
  let d = false;
  const g = { _features: r, options: { ...i, ...e }, initialState: a, _queue: (p) => {
    c.push(p), d || (d = true, Promise.resolve().then(() => {
      for (; c.length; ) c.shift()();
      d = false;
    }).catch((f) => setTimeout(() => {
      throw f;
    })));
  }, reset: () => {
    o.setState(o.initialState);
  }, setOptions: (p) => {
    const f = Je(p, o.options);
    o.options = l(f);
  }, getState: () => o.options.state, setState: (p) => {
    o.options.onStateChange == null || o.options.onStateChange(p);
  }, _getRowId: (p, f, m) => {
    var y;
    return (y = o.options.getRowId == null ? void 0 : o.options.getRowId(p, f, m)) != null ? y : `${m ? [m.id, f].join(".") : f}`;
  }, getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()), getRowModel: () => o.getPaginationRowModel(), getRow: (p, f) => {
    let m = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
    if (!m && (m = o.getCoreRowModel().rowsById[p], !m)) throw new Error();
    return m;
  }, _getDefaultColumnDef: j(() => [o.options.defaultColumn], (p) => {
    var f;
    return p = (f = p) != null ? f : {}, { header: (m) => {
      const y = m.header.column.columnDef;
      return y.accessorKey ? y.accessorKey : y.accessorFn ? y.id : null;
    }, cell: (m) => {
      var y, b;
      return (y = (b = m.renderValue()) == null || b.toString == null ? void 0 : b.toString()) != null ? y : null;
    }, ...o._features.reduce((m, y) => Object.assign(m, y.getDefaultColumnDef == null ? void 0 : y.getDefaultColumnDef()), {}), ...p };
  }, I(e, "debugColumns")), _getColumnDefs: () => o.options.columns, getAllColumns: j(() => [o._getColumnDefs()], (p) => {
    const f = function(m, y, b) {
      return b === void 0 && (b = 0), m.map((w) => {
        const v = Bs(o, w, b, y), R = w;
        return v.columns = R.columns ? f(R.columns, v, b + 1) : [], v;
      });
    };
    return f(p);
  }, I(e, "debugColumns")), getAllFlatColumns: j(() => [o.getAllColumns()], (p) => p.flatMap((f) => f.getFlatColumns()), I(e, "debugColumns")), _getAllFlatColumnsById: j(() => [o.getAllFlatColumns()], (p) => p.reduce((f, m) => (f[m.id] = m, f), {}), I(e, "debugColumns")), getAllLeafColumns: j(() => [o.getAllColumns(), o._getOrderColumnsFn()], (p, f) => {
    let m = p.flatMap((y) => y.getLeafColumns());
    return f(m);
  }, I(e, "debugColumns")), getColumn: (p) => o._getAllFlatColumnsById()[p] };
  Object.assign(o, g);
  for (let p = 0; p < o._features.length; p++) {
    const f = o._features[p];
    f == null || f.createTable == null || f.createTable(o);
  }
  return o;
}
function xa() {
  return (e) => j(() => [e.options.data], (t) => {
    const n = { rows: [], flatRows: [], rowsById: {} }, r = function(o, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let c = 0; c < o.length; c++) {
        const d = Xn(e, e._getRowId(o[c], c, l), o[c], c, i, void 0, l == null ? void 0 : l.id);
        if (n.flatRows.push(d), n.rowsById[d.id] = d, s.push(d), e.options.getSubRows) {
          var a;
          d.originalSubRows = e.options.getSubRows(o[c], c), (a = d.originalSubRows) != null && a.length && (d.subRows = r(d.originalSubRows, i + 1, d));
        }
      }
      return s;
    };
    return n.rows = r(t), n;
  }, I(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Ra(e) {
  const t = [], n = (r) => {
    var o;
    t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
  };
  return e.rows.forEach(n), { rows: t, flatRows: e.flatRows, rowsById: e.rowsById };
}
function Fa(e, t, n) {
  return n.options.filterFromLeafRows ? Aa(e, t, n) : za(e, t, n);
}
function Aa(e, t, n) {
  var r;
  const o = [], i = {}, l = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, s = function(a, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < a.length; p++) {
      var g;
      let f = a[p];
      const m = Xn(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
      if (m.columnFilters = f.columnFilters, (g = f.subRows) != null && g.length && c < l) {
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
function za(e, t, n) {
  var r;
  const o = [], i = {}, l = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, s = function(a, c) {
    c === void 0 && (c = 0);
    const d = [];
    for (let p = 0; p < a.length; p++) {
      let f = a[p];
      if (t(f)) {
        var g;
        if ((g = f.subRows) != null && g.length && c < l) {
          const y = Xn(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
          y.subRows = s(f.subRows, c + 1), f = y;
        }
        d.push(f), o.push(f), i[f.id] = f;
      }
    }
    return d;
  };
  return { rows: s(e), flatRows: o, rowsById: i };
}
function Ma() {
  return (e) => j(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let p = 0; p < t.flatRows.length; p++) t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
      return t;
    }
    const o = [], i = [];
    (n ?? []).forEach((p) => {
      var f;
      const m = e.getColumn(p.id);
      if (!m) return;
      const y = m.getFilterFn();
      y && o.push({ id: p.id, filterFn: y, resolvedValue: (f = y.resolveFilterValue == null ? void 0 : y.resolveFilterValue(p.value)) != null ? f : p.value });
    });
    const l = (n ?? []).map((p) => p.id), s = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((p) => p.getCanGlobalFilter());
    r && s && a.length && (l.push("__global__"), a.forEach((p) => {
      var f;
      i.push({ id: p.id, filterFn: s, resolvedValue: (f = s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(r)) != null ? f : r });
    }));
    let c, d;
    for (let p = 0; p < t.flatRows.length; p++) {
      const f = t.flatRows[p];
      if (f.columnFilters = {}, o.length) for (let m = 0; m < o.length; m++) {
        c = o[m];
        const y = c.id;
        f.columnFilters[y] = c.filterFn(f, y, c.resolvedValue, (b) => {
          f.columnFiltersMeta[y] = b;
        });
      }
      if (i.length) {
        for (let m = 0; m < i.length; m++) {
          d = i[m];
          const y = d.id;
          if (d.filterFn(f, y, d.resolvedValue, (b) => {
            f.columnFiltersMeta[y] = b;
          })) {
            f.columnFilters.__global__ = true;
            break;
          }
        }
        f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
      }
    }
    const g = (p) => {
      for (let f = 0; f < l.length; f++) if (p.columnFilters[l[f]] === false) return false;
      return true;
    };
    return Fa(t.rows, g, e);
  }, I(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function $a(e) {
  return (t) => j(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
    if (!r.rows.length) return r;
    const { pageSize: o, pageIndex: i } = n;
    let { rows: l, flatRows: s, rowsById: a } = r;
    const c = o * i, d = c + o;
    l = l.slice(c, d);
    let g;
    t.options.paginateExpandedRows ? g = { rows: l, flatRows: s, rowsById: a } : g = Ra({ rows: l, flatRows: s, rowsById: a }), g.flatRows = [];
    const p = (f) => {
      g.flatRows.push(f), f.subRows.length && f.subRows.forEach(p);
    };
    return g.rows.forEach(p), g;
  }, I(t.options, "debugTable"));
}
function ja() {
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
      return c.sort((d, g) => {
        for (let f = 0; f < i.length; f += 1) {
          var p;
          const m = i[f], y = l[m.id], b = y.sortUndefined, w = (p = m == null ? void 0 : m.desc) != null ? p : false;
          let v = 0;
          if (b) {
            const R = d.getValue(m.id), O = g.getValue(m.id), D = R === void 0, x = O === void 0;
            if (D || x) {
              if (b === "first") return D ? -1 : 1;
              if (b === "last") return D ? 1 : -1;
              v = D && x ? 0 : D ? b : -b;
            }
          }
          if (v === 0 && (v = y.sortingFn(d, g, m.id)), v !== 0) return w && (v *= -1), y.invertSorting && (v *= -1), v;
        }
        return d.index - g.index;
      }), c.forEach((d) => {
        var g;
        o.push(d), (g = d.subRows) != null && g.length && (d.subRows = s(d.subRows));
      }), c;
    };
    return { rows: s(n.rows), flatRows: o, rowsById: n.rowsById };
  }, I(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
function kt(e, t) {
  return e ? Ia(e) ? Wr(e, t) : e : null;
}
function Ia(e) {
  return Pa(e) || typeof e == "function" || Da(e);
}
function Pa(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Da(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Ta(e) {
  const t = { state: {}, onStateChange: () => {
  }, renderFallbackValue: null, ...e }, [n] = q(() => ({ current: Ca(t) })), [r, o] = q(() => n.current.initialState);
  return n.current.setOptions((i) => ({ ...i, ...e, state: { ...r, ...e.state }, onStateChange: (l) => {
    o(l), e.onStateChange == null || e.onStateChange(l);
  } })), n.current;
}
function ot(e, t, n) {
  let r = n.initialDeps ?? [], o, i = true;
  function l() {
    var s, a, c;
    let d;
    n.key && ((s = n.debug) != null && s.call(n)) && (d = Date.now());
    const g = e();
    if (!(g.length !== r.length || g.some((m, y) => r[y] !== m))) return o;
    r = g;
    let f;
    if (n.key && ((a = n.debug) != null && a.call(n)) && (f = Date.now()), o = t(...g), n.key && ((c = n.debug) != null && c.call(n))) {
      const m = Math.round((Date.now() - d) * 100) / 100, y = Math.round((Date.now() - f) * 100) / 100, b = y / 16, w = (v, R) => {
        for (v = String(v); v.length < R; ) v = " " + v;
        return v;
      };
      console.info(`%c\u23F1 ${w(y, 5)} /${w(m, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * b, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return (n == null ? void 0 : n.onChange) && !(i && n.skipInitialOnChange) && n.onChange(o), i = false, o;
  }
  return l.updateDeps = (s) => {
    r = s;
  }, l;
}
function zr(e, t) {
  if (e === void 0) throw new Error("Unexpected undefined");
  return e;
}
const Na = (e, t) => Math.abs(e - t) < 1.01, Oa = (e, t, n) => {
  let r;
  return function(...o) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
  };
}, Mr = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, Ea = (e) => e, ka = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let o = t; o <= n; o++) r.push(o);
  return r;
}, Va = (e, t) => {
  const n = e.scrollElement;
  if (!n) return;
  const r = e.targetWindow;
  if (!r) return;
  const o = (l) => {
    const { width: s, height: a } = l;
    t({ width: Math.round(s), height: Math.round(a) });
  };
  if (o(Mr(n)), !r.ResizeObserver) return () => {
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
      o(Mr(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, $r = { passive: true }, jr = typeof window > "u" ? true : "onscrollend" in window, Ha = (e, t) => {
  const n = e.scrollElement;
  if (!n) return;
  const r = e.targetWindow;
  if (!r) return;
  let o = 0;
  const i = e.options.useScrollendEvent && jr ? () => {
  } : Oa(r, () => {
    t(o, false);
  }, e.options.isScrollingResetDelay), l = (d) => () => {
    const { horizontal: g, isRtl: p } = e.options;
    o = g ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, i(), t(o, d);
  }, s = l(true), a = l(false);
  n.addEventListener("scroll", s, $r);
  const c = e.options.useScrollendEvent && jr;
  return c && n.addEventListener("scrollend", a, $r), () => {
    n.removeEventListener("scroll", s), c && n.removeEventListener("scrollend", a);
  };
}, Ba = (e, t, n) => {
  if (t == null ? void 0 : t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, La = (e, { adjustments: t = 0, behavior: n }, r) => {
  var o, i;
  const l = e + t;
  (i = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || i.call(o, { [r.options.horizontal ? "left" : "top"]: l, behavior: n });
};
class Wa {
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
      }), this.options = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: Ea, rangeExtractor: ka, onChange: () => {
      }, measureElement: Ba, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: "data-index", initialMeasurementsCache: [], lanes: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, ...n };
    }, this.notify = (n) => {
      var r, o;
      (o = (r = this.options).onChange) == null || o.call(r, this, n);
    }, this.maybeNotify = ot(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (n) => {
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
    }, this.getMeasurementOptions = ot(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (n, r, o, i, l, s) => (this.prevLanes !== void 0 && this.prevLanes !== s && (this.lanesChangedFlag = true), this.prevLanes = s, this.pendingMeasuredCacheIndexes = [], { count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l, lanes: s }), { key: false }), this.getMeasurements = ot(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: i, enabled: l, lanes: s }, a) => {
      if (!l) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > n) for (const p of this.laneAssignments.keys()) p >= n && this.laneAssignments.delete(p);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((p) => {
        this.itemSizeCache.set(p.key, p.size);
      }));
      const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
      const d = this.measurementsCache.slice(0, c), g = new Array(s).fill(void 0);
      for (let p = 0; p < c; p++) {
        const f = d[p];
        f && (g[f.lane] = p);
      }
      for (let p = c; p < n; p++) {
        const f = i(p), m = this.laneAssignments.get(p);
        let y, b;
        if (m !== void 0 && this.options.lanes > 1) {
          y = m;
          const O = g[y], D = O !== void 0 ? d[O] : void 0;
          b = D ? D.end + this.options.gap : r + o;
        } else {
          const O = this.options.lanes === 1 ? d[p - 1] : this.getFurthestMeasurement(d, p);
          b = O ? O.end + this.options.gap : r + o, y = O ? O.lane : p % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(p, y);
        }
        const w = a.get(f), v = typeof w == "number" ? w : this.options.estimateSize(p), R = b + v;
        d[p] = { index: p, start: b, size: v, end: R, key: f, lane: y }, g[y] = p;
      }
      return this.measurementsCache = d, d;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = ot(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (n, r, o, i) => this.range = n.length > 0 && r > 0 ? Ga({ measurements: n, outerSize: r, scrollOffset: o, lanes: i }) : null, { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = ot(() => {
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
    }, this.getVirtualItems = ot(() => [this.getVirtualIndexes(), this.getMeasurements()], (n, r) => {
      const o = [];
      for (let i = 0, l = n.length; i < l; i++) {
        const s = n[i], a = r[s];
        o.push(a);
      }
      return o;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0) return zr(r[$o(0, r.length - 1, (o) => zr(r[o]).start, n)]);
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
        const [g, p] = d;
        this._scrollToOffset(g, { adjustments: void 0, behavior: o }), this.targetWindow.requestAnimationFrame(() => {
          const f = () => {
            if (this.currentScrollToIndex !== n) return;
            const m = this.getScrollOffset(), y = this.getOffsetForIndex(n, p);
            if (!y) {
              console.warn("Failed to get offset for index:", n);
              return;
            }
            Na(y[0], m) || a(p);
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
const $o = (e, t, n, r) => {
  for (; e <= t; ) {
    const o = (e + t) / 2 | 0, i = n(o);
    if (i < r) e = o + 1;
    else if (i > r) t = o - 1;
    else return o;
  }
  return e > 0 ? e - 1 : 0;
};
function Ga({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
  const o = e.length - 1, i = (a) => e[a].start;
  if (e.length <= r) return { startIndex: 0, endIndex: o };
  let l = $o(0, o, i, n), s = l;
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
const Ir = typeof document < "u" ? Gr : Fe;
function qa({ useFlushSync: e = true, ...t }) {
  const n = Go(() => ({}), {})[1], r = { ...t, onChange: (i, l) => {
    var s;
    e && l ? qo(n) : n(), (s = t.onChange) == null || s.call(t, i, l);
  } }, [o] = q(() => new Wa(r));
  return o.setOptions(r), Ir(() => o._didMount(), []), Ir(() => o._willUpdate()), o;
}
function Ua(e) {
  return qa({ observeElementRect: Va, observeElementOffset: Ha, scrollToFn: La, ...e });
}
const Z = (e, t) => ({ operator: e, label: t }), rn = [Z("isEmpty", "json_table_filter_is_empty"), Z("isNotEmpty", "json_table_filter_is_not_empty")], tr = [Z("contains", "json_table_filter_contains"), Z("startsWith", "json_table_filter_starts_with"), Z("endsWith", "json_table_filter_ends_with"), Z("equals", "json_table_filter_equals"), Z("notEquals", "json_table_filter_not_equals"), ...rn], jo = [Z("equals", "json_table_filter_equals"), Z("notEquals", "json_table_filter_not_equals"), Z("greaterThan", "json_table_filter_greater_than"), Z("greaterThanOrEqual", "json_table_filter_greater_than_or_equal"), Z("lessThan", "json_table_filter_less_than"), Z("lessThanOrEqual", "json_table_filter_less_than_or_equal"), ...rn], Io = [Z("equals", "json_table_filter_equals"), Z("greaterThan", "json_table_filter_after"), Z("greaterThanOrEqual", "json_table_filter_on_or_after"), Z("lessThan", "json_table_filter_before"), Z("lessThanOrEqual", "json_table_filter_on_or_before"), ...rn], Po = [Z("equals", "json_table_filter_equals"), Z("notEquals", "json_table_filter_not_equals"), ...rn];
function nr(e) {
  switch (e) {
    case "number":
      return jo;
    case "date":
      return Io;
    case "boolean":
      return Po;
    default:
      return tr;
  }
}
function Ja(e) {
  return nr(e) === tr ? "contains" : "equals";
}
const Do = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", Ya = new Set([tr, jo, Io, Po].flatMap((e) => e.map((t) => t.operator)));
function rr(e, t) {
  if (typeof t != "object" || t === null || !("operator" in t) || !("value" in t)) return false;
  const { operator: n, value: r } = t;
  return Do(r) && (e === void 0 ? Ya.has(n) : nr(e).some((o) => o.operator === n));
}
function Vn(e) {
  return e !== "isEmpty" && e !== "isNotEmpty";
}
function or(e) {
  if (typeof e == "number") return Number.isFinite(e) ? e : null;
  if (typeof e == "string" && e.trim() !== "") {
    const t = Number(e);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}
function To(e) {
  return typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
}
const No = en();
function Pr(e, t) {
  switch (e) {
    case "number":
      return or(t) ?? void 0;
    case "boolean":
      return To(t) ?? void 0;
    case "date": {
      const n = No(t);
      return n === null ? void 0 : qt(n).key;
    }
    default: {
      const n = Do(t) ? String(t).trim() : "";
      return n === "" ? void 0 : n;
    }
  }
}
function Dr(e) {
  if (typeof e == "object" && e !== null) try {
    return JSON.stringify(e).toLowerCase();
  } catch {
    return "[object object]";
  }
  return String(e).toLowerCase();
}
function Oo(e, t, n) {
  switch (e) {
    case "equals":
      return t === n;
    case "notEquals":
      return t !== n;
    case "greaterThan":
      return t > n;
    case "greaterThanOrEqual":
      return t >= n;
    case "lessThan":
      return t < n;
    case "lessThanOrEqual":
      return t <= n;
    default:
      return false;
  }
}
function Tr(e, t, n, r) {
  const o = e(n), i = e(r);
  return o !== null && i !== null && Oo(t, o, i);
}
function Ka(e, t, n) {
  const r = Dr(t), o = Dr(n);
  switch (e) {
    case "contains":
      return r.includes(o);
    case "startsWith":
      return r.startsWith(o);
    case "endsWith":
      return r.endsWith(o);
    case "equals":
      return r === o;
    case "notEquals":
      return r !== o;
    default:
      return false;
  }
}
const Xa = (e) => e == null || e === "";
function Qa(e, t, n, r) {
  const { operator: o, value: i } = r;
  if (!Vn(o)) return Xa(n) === (o === "isEmpty");
  if (n == null) return false;
  switch (e) {
    case "number":
      return Tr(or, o, n, i);
    case "boolean":
      return Tr(To, o, n, i);
    case "date": {
      const l = t(n), s = No(i);
      return l !== null && s !== null && Oo(o, qt(l).start, qt(s).start);
    }
    default:
      return Ka(o, n, i);
  }
}
function Za(e, t) {
  return (n, r, o) => !rr(e, o) || Qa(e, t, n.getValue(r), o);
}
const eu = [10, 25, 50, 100];
function tu(e) {
  const t = (e ?? "").split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n) && n > 0);
  return t.length > 0 ? [...new Set(t)].sort((n, r) => n - r) : eu;
}
const at = (e) => typeof e == "object" && e !== null && !Array.isArray(e), Nr = (e) => typeof e == "number" && Number.isInteger(e) && e >= 0, nu = (e, t) => Array.isArray(e) ? e.filter((n) => at(n) && typeof n.id == "string" && typeof n.desc == "boolean" && Object.hasOwn(t, n.id)) : [];
function ru(e, t) {
  if (!at(e) || typeof e.id != "string") return false;
  const n = Object.hasOwn(t, e.id) ? t[e.id].type : void 0;
  return rr(n, e.value);
}
const Or = (e, t) => !Object.hasOwn(t, e.id) || !t[e.id].filterable;
function Eo(e, t) {
  const n = Array.isArray(e) ? e.filter((r) => ru(r, t.columns)) : [];
  return { applied: n.filter((r) => !Or(r, t.columns)), parked: n.filter((r) => Or(r, t.columns)) };
}
const ou = (e) => typeof e == "string" ? e : "", iu = (e) => {
  const t = {};
  for (const [n, r] of Object.entries(at(e) ? e : {})) typeof r == "boolean" && (t[n] = r);
  return t;
}, ko = (e) => at(e) && Nr(e.pageIndex) && Nr(e.pageSize) && e.pageSize > 0 ? { pageIndex: e.pageIndex, pageSize: e.pageSize, ...typeof e.pageSizeBaseline == "number" && { pageSizeBaseline: e.pageSizeBaseline } } : void 0, Er = (e) => typeof e == "number" && Number.isFinite(e) && e > 0, Vo = (e) => {
  if (!at(e)) return {};
  const t = {};
  for (const [n, r] of Object.entries(e)) if (Er(r)) t[n] = { width: r };
  else if (at(r) && Er(r.width)) {
    const { baseline: o } = r;
    t[n] = typeof o == "number" || o === null ? { width: r.width, baseline: o } : { width: r.width };
  }
  return t;
}, on = ["sorting", "columnFilters", "globalFilter", "pagination", "columnSizing", "columnVisibility"];
function ut(e, t, n) {
  switch (e) {
    case "sorting":
      return !t.sorting;
    case "columnFilters":
      return !t.columnFiltering;
    case "globalFilter":
      return !t.quickFilter;
    case "pagination":
      return !t.pagination;
    case "columnSizing":
      return n.autoSize;
    case "columnVisibility":
      return !t.hiding;
  }
}
const lu = { pageIndex: 0, pageSize: Number.MAX_SAFE_INTEGER };
function su(e, t) {
  const n = (e == null ? void 0 : e.pageSizeBaseline) !== void 0 && e.pageSizeBaseline !== t.pageSize;
  return !e || n || !t.pageSizeOptions.includes(e.pageSize) ? { pageIndex: (e == null ? void 0 : e.pageSize) === t.pageSize ? e.pageIndex : 0, pageSize: t.pageSize } : { pageIndex: e.pageIndex, pageSize: e.pageSize };
}
function au(e, t) {
  const n = {};
  for (const [r, { width: o, baseline: i }] of Object.entries(e)) (i === void 0 || (i ?? void 0) === t.columnWidths[r]) && (n[r] = o);
  return n;
}
function uu(e, t, n) {
  const r = (o) => ut(o, t, n) ? void 0 : e[o];
  return { sorting: nu(r("sorting"), n.columns), columnFilters: Eo(r("columnFilters"), n).applied, globalFilter: ou(r("globalFilter")), pagination: ut("pagination", t, n) ? lu : su(ko(e.pagination), n), columnSizing: au(Vo(r("columnSizing")), n), columnVisibility: iu(r("columnVisibility")) };
}
function cu(e, t, n) {
  const r = {}, o = ko(e.pagination);
  !ut("pagination", t, n) && o && o.pageSizeBaseline === void 0 && (r.pagination = { ...o, pageSizeBaseline: n.pageSize });
  const i = Object.entries(Vo(e.columnSizing));
  return !ut("columnSizing", t, n) && i.some(([, l]) => l.baseline === void 0) && (r.columnSizing = Object.fromEntries(i.map(([l, { width: s, baseline: a }]) => [l, { width: s, baseline: a === void 0 ? n.columnWidths[l] ?? null : a }]))), r;
}
function du(e, t) {
  if (t === void 0) return e;
  const n = Math.max(Math.ceil(t / e.pageSize) - 1, 0);
  return e.pageIndex > n ? { ...e, pageIndex: n } : e;
}
function fu(e, t, n, r) {
  switch (e) {
    case "columnFilters": {
      const o = new Set(t.columnFilters.map((l) => l.id)), { parked: i } = Eo(r.columnFilters, n);
      return [...t.columnFilters, ...i.filter((l) => !o.has(l.id))];
    }
    case "pagination":
      return { ...t.pagination, pageSizeBaseline: n.pageSize };
    case "columnSizing":
      return Object.fromEntries(Object.entries(t.columnSizing).map(([o, i]) => [o, { width: i, baseline: n.columnWidths[o] ?? null }]));
    default:
      return t[e];
  }
}
const gu = ["sorting", "columnFilters", "globalFilter"], pu = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function hu(e, t, n, r, o) {
  const i = { ...e, ...t }, l = gu.some((c) => c in t && !pu(t[c], e[c])) || i.pagination.pageSize !== e.pagination.pageSize, s = new Set(Object.keys(t));
  l && (i.pagination = { ...i.pagination, pageIndex: 0 }, s.add("pagination"));
  const a = {};
  for (const c of on) s.has(c) && !ut(c, n, r) && (a[c] = fu(c, i, r, o));
  return a;
}
const Ho = { sorting: "jtc_sorting_", columnFilters: "jtc_filters_", globalFilter: "jtc_global_filter_", pagination: "jtc_pagination_", columnSizing: "jtc_col_sizes_", columnVisibility: "jtc_visibility_" }, Kt = /* @__PURE__ */ new Map();
function mu(e) {
  if (Kt.has(e)) return Kt.get(e) ?? null;
  try {
    return localStorage.getItem(e);
  } catch {
    return null;
  }
}
function yu(e, t) {
  try {
    localStorage.setItem(e, t), Kt.delete(e);
  } catch {
    Kt.set(e, t);
  }
}
function An(e) {
  const t = {};
  for (const n of on) {
    const r = mu(`${Ho[n]}${e}`);
    if (r !== null) try {
      t[n] = JSON.parse(r);
    } catch {
    }
  }
  return t;
}
function kr(e, t) {
  for (const n of on) n in t && yu(`${Ho[n]}${e}`, JSON.stringify(t[n]));
}
const _u = (e, t) => typeof e == "function" ? e(t) : e;
function Vr(e, t, n, r) {
  const o = uu(e, t, n);
  return { ...o, pagination: du(o.pagination, r) };
}
function bu(e) {
  const { widgetId: t, capabilities: n, pageSize: r, pageSizeOptions: o, autoSize: i, columnConfig: l, columns: s } = e, a = G(() => ({ pageSize: r, pageSizeOptions: tu(o), columnWidths: Object.fromEntries(l.map((P) => [P.path, P.width])), autoSize: i, columns: s }), [r, o, l, i, s]), c = JSON.stringify([t, on.filter((P) => ut(P, n, a))]), [d, g] = q(() => ({ readKey: c, stored: An(t) }));
  let { stored: p } = d;
  d.readKey !== c && (p = An(t), g({ readKey: c, stored: p })), Fe(() => {
    const P = cu(p, n, a);
    Object.keys(P).length > 0 && (kr(t, P), g({ readKey: c, stored: { ...p, ...P } }));
  }, [t, c, p, n, a]);
  const [f, m] = q(), y = G(() => Vr(p, n, a, f), [p, n, a, f]), [b, w] = q({}), v = z((P, ce) => {
    const de = An(t), te = Vr(de, n, a, f), re = hu(te, { [P]: _u(ce, te[P]) }, n, a, de);
    Object.keys(re).length !== 0 && (kr(t, re), g({ readKey: c, stored: { ...de, ...re } }));
  }, [t, c, n, a, f]), R = z((P) => v("sorting", P), [v]), O = z((P) => v("columnFilters", P), [v]), D = z((P) => v("globalFilter", P), [v]), x = z((P) => v("pagination", P), [v]), F = z((P) => v("columnSizing", P), [v]), T = z((P) => v("columnVisibility", P), [v]), A = z(() => v("columnVisibility", {}), [v]);
  return { state: G(() => ({ ...y, rowSelection: b }), [y, b]), onSortingChange: R, onColumnFiltersChange: O, onGlobalFilterChange: D, onPaginationChange: x, onColumnSizingChange: F, onColumnVisibilityChange: T, onRowSelectionChange: w, pageSizeOptions: a.pageSizeOptions, showAllColumns: A, setRowCount: m };
}
const vu = [{ value: "true", label: "json_table_filter_boolean_true" }, { value: "false", label: "json_table_filter_boolean_false" }], wu = (e) => e === "number" || e === "date" || e === "boolean" ? e : "string";
function Su({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: i }) {
  const l = qr(), s = yi(l.breakpoints.down("sm")), a = i ?? "string", c = wu(a), d = nr(a), g = G(() => rr(a, r) ? r : { operator: Ja(a), value: "" }, [r, a]), [p, f] = q(g.operator), [m, y] = q(typeof g.value == "boolean" ? String(g.value) : g.value), b = G(() => r != null, [r]);
  Fe(() => {
    e && (f(g.operator), y(typeof g.value == "boolean" ? String(g.value) : g.value));
  }, [g, e]);
  const w = Vn(p), v = z(() => {
    if (!w) {
      n({ operator: p, value: "" });
      return;
    }
    const A = Pr(a, m);
    n(A === void 0 ? void 0 : { operator: p, value: A });
  }, [w, a, p, m, n]), R = z(() => {
    n(void 0);
  }, [n]), O = z((A) => {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), v());
  }, [v]), D = z((A) => {
    f(A), Vn(A) ? c !== "boolean" && (m === "true" || m === "false") && y("") : y("");
  }, [m, c]), x = Yn(o), F = `filter-dialog-title-${o}`, T = `filter-dialog-description-${o}`;
  return _(Ln, { open: e, onClose: t, maxWidth: "sm", fullWidth: true, fullScreen: s, "aria-labelledby": F, "aria-describedby": T, children: [u(Wn, { id: F, children: _($, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [h.t("json_table_filter_for_column").replace("{column}", x), b && u(tt, { label: h.t("json_table_filter_active"), size: "small", color: "primary", variant: "outlined" })] }) }), _(Gn, { children: [u(S, { id: T, variant: "body2", color: "text.secondary", sx: { mb: 2, mt: 1 }, children: h.t("json_table_filter_dialog_description") }), _($, { sx: { display: "flex", flexDirection: "column", gap: 2 }, onKeyDown: O, children: [_(ze, { fullWidth: true, children: [u(Me, { id: `filter-operator-label-${o}`, children: h.t("json_table_filter_operator") }), u(xe, { value: p, label: h.t("json_table_filter_operator"), labelId: `filter-operator-label-${o}`, onChange: (A) => D(A.target.value), children: d.map((A) => u(V, { value: A.operator, children: h.t(A.label) }, A.operator)) })] }), w && c === "boolean" && _(ze, { fullWidth: true, children: [u(Me, { id: `filter-value-label-${o}`, children: h.t("json_table_filter_value") }), u(xe, { value: m === "true" || m === "false" ? m : "", label: h.t("json_table_filter_value"), labelId: `filter-value-label-${o}`, onChange: (A) => y(A.target.value), children: vu.map((A) => u(V, { value: A.value, children: h.t(A.label) }, A.value)) })] }), w && c === "date" && u(Y, { label: h.t("json_table_filter_value"), value: Pr("date", m) ?? "", onChange: (A) => y(A.target.value), type: "date", fullWidth: true, autoFocus: true, InputLabelProps: { shrink: true } }), w && c === "number" && u(Y, { label: h.t("json_table_filter_value"), value: m, onChange: (A) => y(A.target.value), type: "number", fullWidth: true, autoFocus: true }), w && c === "string" && u(Y, { label: h.t("json_table_filter_value"), value: m, onChange: (A) => y(A.target.value), type: "text", fullWidth: true, autoFocus: true }), !w && u(S, { variant: "body2", color: "text.secondary", sx: { fontStyle: "italic" }, children: h.t("json_table_filter_no_value_needed") })] })] }), _(Bn, { sx: { px: 3, pb: 2 }, children: [b && u(Ae, { onClick: R, color: "error", sx: { mr: "auto" }, children: h.t("json_table_filter_clear") }), u(Ae, { onClick: t, children: h.t("cancel") }), u(Ae, { variant: "contained", onClick: v, disabled: w && c === "boolean" && m !== "true" && m !== "false", children: h.t("json_table_filter_apply") })] })] });
}
function Cu({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, capabilities: i, activeColumnFilter: l, onSetSorting: s, onClearSorting: a, onShowAllColumns: c, hasHiddenColumns: d }) {
  var _a2, _b, _c, _d, _e2, _f;
  const [g, p] = q(false), f = i.sorting && ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, m = i.columnFiltering && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, y = i.hiding && ((_c = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c.call(r)) === true, b = i.hiding && d === true && c !== void 0, w = l != null;
  if (!(f || m || y)) return null;
  const R = () => {
    r && s([{ id: r.id, desc: false }]), n();
  }, O = () => {
    r && s([{ id: r.id, desc: true }]), n();
  }, D = () => {
    r && a(r.id), n();
  }, x = () => {
    p(true);
  }, F = () => {
    p(false);
  }, T = (ce) => {
    r == null ? void 0 : r.setFilterValue(ce), p(false), n();
  }, A = () => {
    r == null ? void 0 : r.setFilterValue(void 0), n();
  }, W = () => {
    var _a3;
    (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
  }, P = () => {
    c == null ? void 0 : c(), n();
  };
  return _(Oe, { children: [_(Zo, { anchorEl: e, open: t, onClose: n, children: [f && _(Oe, { children: [_(V, { onClick: R, children: [u(gt, { children: u(Xr, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_sort_asc") })] }), _(V, { onClick: O, children: [u(gt, { children: u(Qr, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_sort_desc") })] }), o && u(V, { onClick: D, children: u(S, { variant: "body2", children: h.t("json_table_sort_clear") }) })] }), f && m && u(Bt, {}), m && _(Oe, { children: [_(V, { onClick: x, children: [u(gt, { children: u(xl, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_set_filter") })] }), w && _(V, { onClick: A, children: [u(gt, { children: u(Ci, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_filter_clear") })] })] }), (f || m) && y && u(Bt, {}), y && _(V, { onClick: W, children: [u(gt, { children: u(oo, { fontSize: "small" }) }), u(S, { variant: "body2", children: h.t("json_table_hide_column") })] }), b && u(V, { onClick: P, children: u(S, { variant: "body2", children: h.t("json_table_show_all_columns") }) })] }), m && r && g && u(Su, { open: g, onClose: F, onApply: T, currentValue: (_d = r.getFilterValue) == null ? void 0 : _d.call(r), columnId: r.id, columnType: (_f = (_e2 = r.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType })] });
}
const xu = 150;
function Bo(e) {
  const t = (n) => e(n) ?? 0;
  return (n, r, o) => t(n.getValue(o)) - t(r.getValue(o));
}
const Ru = Bo(or);
function Fu(e) {
  switch (e.type) {
    case "date":
      return Bo(e.readDate);
    case "number":
      return Ru;
    case "string":
      return "alphanumeric";
    default:
      return;
  }
}
function Au(e) {
  const { columns: t, capabilities: n, renderCell: r, renderSelectionHeader: o, renderSelectionCell: i } = e, l = n.rowSelection && o && i ? { id: "__select__", size: 48, enableResizing: false, enableSorting: false, enableColumnFilter: false, enableHiding: false, header: ({ table: a }) => o(a), cell: ({ row: a }) => i(a), meta: { align: "center", width: 48 } } : null, s = t.filter((a) => a.config.visible).map((a) => {
    const { path: c, config: d, type: g } = a, p = Jn(n, g, d), f = Fu(a);
    return { id: c, size: d.width ?? xu, accessorFn: (m) => (m == null ? void 0 : m[c]) ?? null, header: a.header, enableSorting: p.sortable, enableColumnFilter: p.filterable, enableHiding: p.hideable, ...f && { sortingFn: f }, filterFn: Za(g, a.readDate), cell: ({ getValue: m }) => r(m(), a), meta: { align: a.cellConfig.align || "left", width: d.width, columnType: g } };
  });
  return l ? [l, ...s] : s;
}
const zu = { compact: 36, standard: 52, comfortable: 68 }, Mu = { compact: 36, standard: 56, comfortable: 68 };
function $u(e, t) {
  const n = e.tableHeaderElevation ?? 6, r = e.headerBorderWidth ?? 0, o = Lt(e.headerBorderColor), i = e.tableHeaderBgColor, l = e.noCard === true ? { backgroundColor: "transparent", boxShadow: "none" } : { backgroundColor: "background.paper", boxShadow: n > 0 ? t.shadows[n] : "none" };
  r > 0 && (l["&::after"] = { content: '""', position: "absolute", left: 0, right: 0, bottom: 0, height: `${r}px`, backgroundColor: o || t.palette.divider, pointerEvents: "none" });
  const s = i ? Xt(i) : null;
  return s ? { ...l, background: s } : i ? { ...l, backgroundColor: i } : l;
}
function ju(e) {
  const t = { tableLayout: e.tableAutoSize === true ? "auto" : "fixed", width: "100%" };
  if (e.tableShowRowBorders === false) t["& .MuiTableCell-root"] = { borderBottom: "none" };
  else {
    const n = e.horizontalCellBorderWidth ?? 1, r = Lt(e.horizontalCellBorderColor);
    t["& .MuiTableCell-root"] = { borderBottom: `${n}px solid`, borderBottomColor: r || "divider" };
  }
  if (e.tableShowCellBorders === true) {
    const n = e.verticalCellBorderWidth ?? 1, r = Lt(e.verticalCellBorderColor);
    t["& .MuiTableCell-root:not(:last-child)"] = { borderRight: `${n}px solid`, borderRightColor: r || "divider" };
  }
  return t;
}
function Iu(e) {
  const t = { flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }, n = e.borderWidth, r = e.borderStyle || "solid", o = Lt(e.borderColor), i = e.borderRadius;
  return n && n > 0 && (t.border = `${n}px ${r}`, t.borderColor = o || "divider"), i && (t.borderRadius = i), t;
}
function Hr(e) {
  if (!e) return;
  const t = Xt(e);
  return t ? { background: t } : { backgroundColor: e };
}
function Pu(e, t) {
  const n = e.tableDensity || "standard", r = Number(e.tableRowHeight) || zu[n] || 52, o = Number(e.tableHeaderHeight) || Mu[n] || 56, i = e.tableHeaderTextColor, l = e.tableHeaderFontSize, s = { ...i && { color: i }, ...l && { fontSize: `${l}px` } }, a = Hr(e.evenRowColor || null), c = Hr(e.oddRowColor || null);
  return { rowHeight: r, tableSize: n === "compact" ? "small" : "medium", bodySx: { width: "100%", height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", p: Number(e.jsonTablePadding) || 0 }, frameSx: Iu(e), scrollSx: { flex: 1, overflow: "auto" }, tableSx: ju(e), headerBarSx: { position: "sticky", top: 0, zIndex: 2, ...$u(e, t), "& .resize-handle": { opacity: 0 }, "&:hover .resize-handle": { opacity: 1 } }, headerCellSx: { height: o, padding: 0, whiteSpace: "nowrap", ...s }, headerTextSx: s, rowSx: (d) => ({ height: r, ...d % 2 === 0 ? a : c }), cellSx: { overflow: "hidden", height: r, maxHeight: r, padding: 0, verticalAlign: "middle" } };
}
function Du(e) {
  var _a2;
  const t = /* @__PURE__ */ new Map();
  for (const { path: r, config: o, readDate: i } of e) ((_a2 = o.format) == null ? void 0 : _a2.type) === "date" && t.set(r, { fmt: o.format, readDate: i });
  const n = (r, { fmt: o, readDate: i }) => _o.date.format(r, { fmt: o, defaultDisplay: "", readDate: i }).displayValue ?? "";
  return (r, o, i) => {
    const l = typeof i == "string" ? i.toLowerCase() : typeof i == "number" || typeof i == "boolean" ? String(i).toLowerCase() : "";
    if (!l) return true;
    const s = r.getValue(o);
    if (s == null) return false;
    const a = t.get(o);
    return a && n(s, a).toLowerCase().includes(l) ? true : (typeof s == "string" ? s : typeof s == "number" || typeof s == "boolean" ? String(s) : "").toLowerCase().includes(l);
  };
}
function Br(e, t, n) {
  return u(Ot, { "data-row-index": t, sx: n.rowSx(t), children: e.getVisibleCells().map((r) => {
    var _a2;
    return u(et, { align: ((_a2 = r.column.columnDef.meta) == null ? void 0 : _a2.align) || "left", padding: r.column.id === "__select__" ? "checkbox" : "normal", sx: n.cellSx, children: kt(r.column.columnDef.cell, r.getContext()) }, r.id);
  }) }, e.id);
}
const Tu = (e) => {
  const { children: t, value: n, ...r } = e;
  return u(V, { ...r, value: n, children: u(S, { variant: "body2", component: "span", children: t }) });
}, Nu = () => {
  const e = Vt(ei), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = ri("oid"), i = Fi("oid"), l = qr(), s = t == null ? void 0 : t.type, a = Ri(to, s), c = G(() => uo(n.data.columnConfig), [n.data.columnConfig]), { rows: d, columns: g, depthWarning: p } = G(() => so(i, c, n.data.tableMaxDepth), [i, c, n.data.tableMaxDepth]), f = Tl(s, a, g), m = G(() => Pu(n.data, l), [n.data, l]), y = d, b = Un(n.data), w = JSON.stringify(b), v = G(() => b, [w]), R = G(() => Au({ columns: g, capabilities: v, renderCell: (N, E) => u(xs, { value: N, column: E, valueSize: o.valueSize }), renderSelectionHeader: (N) => u(Rt, { size: "small", indeterminate: N.getIsSomePageRowsSelected(), checked: N.getIsAllPageRowsSelected(), onChange: N.getToggleAllPageRowsSelectedHandler(), "aria-label": "Select all rows" }), renderSelectionCell: (N) => u(Rt, { size: "small", checked: N.getIsSelected(), onChange: N.getToggleSelectedHandler(), "aria-label": "Select row" }) }), [g, v, o.valueSize]), O = G(() => Du(g), [g]), D = n.data.tableAutoSize === true, x = G(() => JSON.stringify(Object.fromEntries(g.filter((N) => N.config.visible).map((N) => [N.path, { type: N.type, filterable: Jn(v, N.type, N.config).filterable }]))), [g, v]), F = G(() => JSON.parse(x), [x]), T = bu({ widgetId: r, capabilities: v, pageSize: Number(n.data.tablePageSize) || 25, pageSizeOptions: n.data.tablePageSizeOptions, autoSize: D, columnConfig: c, columns: F }), { sorting: A, columnFilters: W, globalFilter: P, pagination: ce, columnVisibility: de } = T.state, te = Ta({ data: y, columns: R, getCoreRowModel: xa(), getSortedRowModel: ja(), getFilteredRowModel: Ma(), getPaginationRowModel: $a(), enableMultiSort: v.multiSort, globalFilterFn: O, columnResizeMode: "onChange", enableColumnResizing: !D, defaultColumn: { minSize: 40, maxSize: 2e3 }, state: T.state, autoResetPageIndex: false, onSortingChange: T.onSortingChange, onColumnFiltersChange: T.onColumnFiltersChange, onGlobalFilterChange: T.onGlobalFilterChange, onPaginationChange: T.onPaginationChange, onRowSelectionChange: T.onRowSelectionChange, onColumnSizingChange: T.onColumnSizingChange, onColumnVisibilityChange: T.onColumnVisibilityChange, enableRowSelection: v.rowSelection, enableSorting: v.sorting, enableColumnFilters: v.columnFiltering, enableHiding: v.hiding, enableGlobalFilter: v.quickFilter }), re = te.getFilteredRowModel().rows.length, { setRowCount: we } = T;
  Gr(() => we(re), [re, we]);
  const ie = Ye(null), C = Ye(null), [M, K] = q({}), [k, le] = q(null), U = Ye(null), [ct, dt] = q(void 0), [Xe, ln] = q(void 0), sn = z((N, E) => {
    var _a2;
    U.current = N;
    const me = N.id, Qe = A.find((Re) => Re.id === me), Ie = (_a2 = W.find((Re) => Re.id === me)) == null ? void 0 : _a2.value;
    dt(Qe), ln(Ie), le(E);
  }, [A, W]), an = z(() => {
    le(null);
  }, []);
  Fe(() => {
    if (!D) return;
    const N = C.current;
    if (!N) return;
    const E = new ResizeObserver(() => {
      const me = N.querySelector("tr[data-row-index]");
      if (!me) return;
      const Qe = me.querySelectorAll("td"), Ie = te.getHeaderGroups()[0];
      if (!Ie || Qe.length !== Ie.headers.length) return;
      const Re = {};
      Ie.headers.forEach((dn, rt) => {
        const ur = Qe[rt];
        ur && (Re[dn.id] = ur.getBoundingClientRect().width);
      }), K(Re);
    });
    return E.observe(N), () => E.disconnect();
  }, [D, te]);
  const un = v.header, cn = z((N) => D ? M[N.id] ?? "auto" : N.getSize(), [D, M]), pe = te.getRowModel().rows, ir = Ua({ count: pe.length, getScrollElement: () => ie.current, estimateSize: () => m.rowHeight, overscan: 25, scrollPaddingStart: m.rowHeight }), Lo = n.data.tableVirtualizeThreshold ?? 50, ft = !v.pagination && pe.length > Lo ? ir.getVirtualItems() : null, Wo = ft == null ? void 0 : ft[0], lr = ft == null ? void 0 : ft[ft.length - 1], sr = (Wo == null ? void 0 : Wo.start) ?? 0, ar = lr ? ir.getTotalSize() - (lr.end ?? 0) : 0;
  return _(oi, { isValidType: a, data: o, children: [u(li, { data: o, widget: n }), f === null ? _($, { sx: m.bodySx, children: [v.quickFilter && u($, { sx: { p: 1, flexShrink: 0 }, children: u(Y, { size: "small", variant: "outlined", fullWidth: true, value: P, onChange: (N) => T.onGlobalFilterChange(N.target.value), placeholder: h.t("json_table_search_placeholder"), slotProps: { input: { startAdornment: u(Zr, { position: "start", children: u(Yr, { fontSize: "small" }) }) } } }) }), p && u(Nt, { severity: "warning", sx: { m: 1 }, children: u(S, { variant: "body2", children: ao(p, Kn) }) }), u($, { sx: m.frameSx, children: u(Yi, { ref: ie, sx: m.scrollSx, children: _(Ni, { size: m.tableSize, sx: m.tableSx, children: [un && u(el, { sx: m.headerBarSx, children: te.getHeaderGroups().map((N) => u(Ot, { children: N.headers.map((E) => {
    const me = E.column.getCanSort(), Qe = E.column.getIsSorted(), Ie = E.column.columnDef.meta, Re = E.column.id === "__select__", dn = !D;
    return _(et, { component: "th", colSpan: E.colSpan, align: (Ie == null ? void 0 : Ie.align) || "left", padding: Re ? "checkbox" : "normal", sx: { width: cn(E), minWidth: Re ? 48 : 40, position: "relative", ...m.headerCellSx }, children: [Re ? kt(E.column.columnDef.header, E.getContext()) : _($, { sx: { display: "flex", alignItems: "center", justifyContent: (Ie == null ? void 0 : Ie.align) === "right" ? "flex-end" : (Ie == null ? void 0 : Ie.align) === "center" ? "center" : "space-between", width: "100%" }, children: [me ? u(Sl, { active: Qe !== false, direction: Qe === "desc" ? "desc" : "asc", onClick: E.column.getToggleSortingHandler(), children: u(S, { variant: "body2", component: "span", fontWeight: "medium", noWrap: true, sx: m.headerTextSx, children: kt(E.column.columnDef.header, E.getContext()) }) }) : u(S, { variant: "body2", component: "span", fontWeight: "medium", noWrap: true, sx: m.headerTextSx, children: kt(E.column.columnDef.header, E.getContext()) }), v.columnMenu && (E.column.getCanSort() || E.column.getCanFilter() || E.column.getCanHide()) && u(ge, { title: h.t("json_table_column_menu"), children: u(ne, { size: "small", "aria-label": h.t("json_table_column_menu"), onClick: (rt) => {
      rt.stopPropagation(), sn(E.column, rt.currentTarget);
    }, sx: { ml: 0.5, opacity: 0.6 }, children: u(Rl, { fontSize: "inherit" }) }) })] }), dn && E.column.getCanResize() && u($, { className: "resize-handle", onMouseDown: E.getResizeHandler(), onTouchStart: E.getResizeHandler(), onClick: (rt) => rt.stopPropagation(), sx: { position: "absolute", right: 0, top: 0, height: "100%", width: "4px", cursor: "col-resize", userSelect: "none", touchAction: "none", zIndex: 1, opacity: E.column.getIsResizing() ? 1 : 0, bgcolor: E.column.getIsResizing() ? "primary.main" : "divider", transition: "opacity 0.15s", "&:hover": { opacity: 1, bgcolor: "primary.light" } } })] }, E.id);
  }) }, N.id)) }), u(Hi, { ref: C, children: ft ? _(Oe, { children: [sr > 0 && u(Ot, { children: u(et, { colSpan: R.length, sx: { height: sr, p: 0, border: "none" } }) }), ft.map((N) => Br(pe[N.index], N.index, m)), ar > 0 && u(Ot, { children: u(et, { colSpan: R.length, sx: { height: ar, p: 0, border: "none" } }) })] }) : pe.map((N, E) => Br(N, E, m)) })] }) }) }), v.pagination && u(gl, { component: "div", count: re, page: ce.pageIndex, rowsPerPage: ce.pageSize, rowsPerPageOptions: T.pageSizeOptions, onPageChange: (N, E) => T.onPaginationChange((me) => ({ ...me, pageIndex: E })), onRowsPerPageChange: (N) => T.onPaginationChange((E) => ({ ...E, pageSize: parseInt(N.target.value, 10) })), labelRowsPerPage: u(S, { variant: "body2", component: "span", children: h.t("json_table_rows_per_page") }), labelDisplayedRows: ({ from: N, to: E, count: me }) => u(S, { variant: "body2", component: "span", children: `${N}\u2013${E} / ${me}` }), slots: { menuItem: Tu }, slotProps: { select: { renderValue: (N) => u(S, { variant: "body2", component: "span", children: String(N) }) } } }), u(Cu, { anchorEl: k, open: !!k, onClose: an, activeColumn: U.current, isSorted: ct !== void 0, capabilities: v, activeColumnFilter: Xe, onSetSorting: T.onSortingChange, onClearSorting: (N) => T.onSortingChange((E) => E.filter((me) => me.id !== N)), onShowAllColumns: T.showAllColumns, hasHiddenColumns: Object.keys(de).some((N) => de[N] === false) })] }) : u($, { sx: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", p: 2 }, children: u(S, { variant: "body2", color: "text.secondary", children: h.t(f) }) })] });
}, Ou = vo().map((e) => e.name).filter((e) => typeof e == "string" && e.length > 0);
class Hn extends h {
  static createObjectFields() {
    const t = si(to, { unit: false, valueGroups: false }), n = t.find((r) => r.name === "oid");
    if (n) {
      const r = n, o = r.onChange;
      r.onChange = async (i, l, s, a) => {
        if (!l.oid) {
          for (const c of Ou) delete l[c];
          o || s(l);
        }
        o && await o(i, l, s, a);
      };
    }
    return t;
  }
  static getWidgetInfo() {
    return { id: "tplJsonTableCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "JsonTableCollectionWidget", visWidgetLabel: "json_table_collection_widget", visOrder: 12, visAttrs: [{ name: "common", fields: [...ii()] }, { name: "jsonTable", label: "group_json_table", fields: [...Hn.createObjectFields(), ...vo()] }], visDefaultStyle: { width: "100%", height: "400px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-json-table.png" };
  }
  getWidgetInfo() {
    return Hn.getWidgetInfo();
  }
  renderWidgetBody(t) {
    return super.renderWidgetBody(t), this.renderWithProvider(u(Nu, {}), t);
  }
}
export {
  Hn as default
};
