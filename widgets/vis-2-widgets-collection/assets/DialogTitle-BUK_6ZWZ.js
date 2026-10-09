import { q as mo, o as k, m as go, g as bo, i as n, e as ho } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { f as S, g as P, u as w, v as xo, P as N, ad as F, o as fo, p as b, h, s as u, j as d, i as T, M as vo, b7 as yo, m as U, T as Co } from "./usePopoverPositioning-BUV6laon.js";
function Do(t) {
  return P("MuiDialog", t);
}
const D = S("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), A = mo({}), ko = u(yo, { name: "MuiDialog", slot: "Backdrop", overrides: (t, o) => o.backdrop })({ zIndex: -1 }), So = (t) => {
  const { classes: o, scroll: e, maxWidth: a, fullWidth: r, fullScreen: s } = t, i = { root: ["root"], container: ["container", `scroll${d(e)}`], paper: ["paper", `paperScroll${d(e)}`, `paperWidth${d(String(a))}`, r && "paperFullWidth", s && "paperFullScreen"] };
  return T(i, Do, o);
}, Po = u(vo, { name: "MuiDialog", slot: "Root", overridesResolver: (t, o) => o.root })({ "@media print": { position: "absolute !important" } }), wo = u("div", { name: "MuiDialog", slot: "Container", overridesResolver: (t, o) => {
  const { ownerState: e } = t;
  return [o.container, o[`scroll${d(e.scroll)}`]];
} })({ height: "100%", "@media print": { height: "auto" }, outline: 0, variants: [{ props: { scroll: "paper" }, style: { display: "flex", justifyContent: "center", alignItems: "center" } }, { props: { scroll: "body" }, style: { overflowY: "auto", overflowX: "hidden", textAlign: "center", "&::after": { content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0" } } }] }), To = u(N, { name: "MuiDialog", slot: "Paper", overridesResolver: (t, o) => {
  const { ownerState: e } = t;
  return [o.paper, o[`scrollPaper${d(e.scroll)}`], o[`paperWidth${d(String(e.maxWidth))}`], e.fullWidth && o.paperFullWidth, e.fullScreen && o.paperFullScreen];
} })(U(({ theme: t }) => ({ margin: 32, position: "relative", overflowY: "auto", "@media print": { overflowY: "visible", boxShadow: "none" }, variants: [{ props: { scroll: "paper" }, style: { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" } }, { props: { scroll: "body" }, style: { display: "inline-block", verticalAlign: "middle", textAlign: "initial" } }, { props: ({ ownerState: o }) => !o.maxWidth, style: { maxWidth: "calc(100% - 64px)" } }, { props: { maxWidth: "xs" }, style: { maxWidth: t.breakpoints.unit === "px" ? Math.max(t.breakpoints.values.xs, 444) : `max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`, [`&.${D.paperScrollBody}`]: { [t.breakpoints.down(Math.max(t.breakpoints.values.xs, 444) + 64)]: { maxWidth: "calc(100% - 64px)" } } } }, ...Object.keys(t.breakpoints.values).filter((o) => o !== "xs").map((o) => ({ props: { maxWidth: o }, style: { maxWidth: `${t.breakpoints.values[o]}${t.breakpoints.unit}`, [`&.${D.paperScrollBody}`]: { [t.breakpoints.down(t.breakpoints.values[o] + 64)]: { maxWidth: "calc(100% - 64px)" } } } })), { props: ({ ownerState: o }) => o.fullWidth, style: { width: "calc(100% - 64px)" } }, { props: ({ ownerState: o }) => o.fullScreen, style: { margin: 0, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "none", borderRadius: 0, [`&.${D.paperScrollBody}`]: { margin: 0, maxWidth: "100%" } } }] }))), Ao = k(function(o, e) {
  const a = w({ props: o, name: "MuiDialog" }), r = xo(), s = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen }, { "aria-describedby": i, "aria-labelledby": l, "aria-modal": m = true, BackdropComponent: x, BackdropProps: I, children: Y, className: j, disableEscapeKeyDown: W = false, fullScreen: L = false, fullWidth: X = false, maxWidth: z = "sm", onBackdropClick: M, onClick: _, onClose: f, open: $, PaperComponent: H = N, PaperProps: B = {}, scroll: O = "paper", slots: q = {}, slotProps: E = {}, TransitionComponent: K = F, transitionDuration: R = s, TransitionProps: V, ...G } = a, p = { ...a, disableEscapeKeyDown: W, fullScreen: L, fullWidth: X, maxWidth: z, scroll: O }, v = So(p), y = go(), J = (c) => {
    y.current = c.target === c.currentTarget;
  }, Q = (c) => {
    _ && _(c), y.current && (y.current = null, M && M(c), f && f(c, "backdropClick"));
  }, C = fo(l), Z = bo(() => ({ titleId: C }), [C]), oo = { transition: K, ...q }, to = { transition: V, paper: B, backdrop: I, ...E }, g = { slots: oo, slotProps: to }, [eo, ao] = b("root", { elementType: Po, shouldForwardComponentProp: true, externalForwardedProps: g, ownerState: p, className: h(v.root, j), ref: e }), [ro, so] = b("backdrop", { elementType: ko, shouldForwardComponentProp: true, externalForwardedProps: g, ownerState: p }), [io, lo] = b("paper", { elementType: To, shouldForwardComponentProp: true, externalForwardedProps: g, ownerState: p, className: h(v.paper, B.className) }), [no, po] = b("container", { elementType: wo, externalForwardedProps: g, ownerState: p, className: h(v.container) }), [co, uo] = b("transition", { elementType: F, externalForwardedProps: g, ownerState: p, additionalProps: { appear: true, in: $, timeout: R, role: "presentation" } });
  return n(eo, { closeAfterTransition: true, slots: { backdrop: ro }, slotProps: { backdrop: { transitionDuration: R, as: x, ...so } }, disableEscapeKeyDown: W, onClose: f, open: $, onClick: Q, ...ao, ...G, children: n(co, { ...uo, children: n(no, { onMouseDown: J, ...po, children: n(io, { as: H, elevation: 24, role: "dialog", "aria-describedby": i, "aria-labelledby": C, "aria-modal": m, ...lo, children: n(A.Provider, { value: Z, children: Y }) }) }) }) });
});
function Wo(t) {
  return P("MuiDialogContent", t);
}
S("MuiDialogContent", ["root", "dividers"]);
function Mo(t) {
  return P("MuiDialogTitle", t);
}
const _o = S("MuiDialogTitle", ["root"]), $o = (t) => {
  const { classes: o, dividers: e } = t;
  return T({ root: ["root", e && "dividers"] }, Wo, o);
}, Bo = u("div", { name: "MuiDialogContent", slot: "Root", overridesResolver: (t, o) => {
  const { ownerState: e } = t;
  return [o.root, e.dividers && o.dividers];
} })(U(({ theme: t }) => ({ flex: "1 1 auto", WebkitOverflowScrolling: "touch", overflowY: "auto", padding: "20px 24px", variants: [{ props: ({ ownerState: o }) => o.dividers, style: { padding: "16px 24px", borderTop: `1px solid ${(t.vars || t).palette.divider}`, borderBottom: `1px solid ${(t.vars || t).palette.divider}` } }, { props: ({ ownerState: o }) => !o.dividers, style: { [`.${_o.root} + &`]: { paddingTop: 0 } } }] }))), Io = k(function(o, e) {
  const a = w({ props: o, name: "MuiDialogContent" }), { className: r, dividers: s = false, ...i } = a, l = { ...a, dividers: s }, m = $o(l);
  return n(Bo, { className: h(m.root, r), ownerState: l, ref: e, ...i });
}), Ro = (t) => {
  const { classes: o } = t;
  return T({ root: ["root"] }, Mo, o);
}, Fo = u(Co, { name: "MuiDialogTitle", slot: "Root", overridesResolver: (t, o) => o.root })({ padding: "16px 24px", flex: "0 0 auto" }), Yo = k(function(o, e) {
  const a = w({ props: o, name: "MuiDialogTitle" }), { className: r, id: s, ...i } = a, l = a, m = Ro(l), { titleId: x = s } = ho(A);
  return n(Fo, { component: "h2", className: h(m.root, r), ownerState: l, ref: e, variant: "h6", id: s ?? x, ...i });
});
export {
  Ao as D,
  Yo as a,
  Io as b,
  D as d
};
