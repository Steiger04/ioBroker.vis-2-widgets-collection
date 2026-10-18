import { o as at, m as ct, i as O, q as Ao, h as To, u as Mo, g as eo, j as Wt, e as Eo, f as Bt, z as ko, l as ye, v as Qt, w as me, x as Io } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as ft, f as vt, u as gt, b4 as Do, J as Lo, v as oo, aq as te, a9 as re, s as U, h as _, i as mt, b5 as Le, m as ot, O as ro, p as q, P as no, c as $e, d as ht, I as zo, j as D, k as ze, l as Be, N as Tt, ah as We, b6 as Bo, aa as Ne, a0 as Wo, n as ao, a as tt, T as No, a1 as jo, o as Fo, Q as je, ap as Ho, af as Uo, b7 as Vo, b1 as Fe } from "./usePopoverPositioning-DyzF99R9.js";
function _o(t) {
  return ft("MuiCollapse", t);
}
vt("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const qo = (t) => {
  const { orientation: e, classes: o } = t, r = { root: ["root", `${e}`], entered: ["entered"], hidden: ["hidden"], wrapper: ["wrapper", `${e}`], wrapperInner: ["wrapperInner", `${e}`] };
  return mt(r, _o, o);
}, Go = U("div", { name: "MuiCollapse", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, e[o.orientation], o.state === "entered" && e.entered, o.state === "exited" && !o.in && o.collapsedSize === "0px" && e.hidden];
} })(ot(({ theme: t }) => ({ height: 0, overflow: "hidden", transition: t.transitions.create("height"), variants: [{ props: { orientation: "horizontal" }, style: { height: "auto", width: 0, transition: t.transitions.create("width") } }, { props: { state: "entered" }, style: { height: "auto", overflow: "visible" } }, { props: { state: "entered", orientation: "horizontal" }, style: { width: "auto" } }, { props: ({ ownerState: e }) => e.state === "exited" && !e.in && e.collapsedSize === "0px", style: { visibility: "hidden" } }] }))), Ko = U("div", { name: "MuiCollapse", slot: "Wrapper", overridesResolver: (t, e) => e.wrapper })({ display: "flex", width: "100%", variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }] }), Xo = U("div", { name: "MuiCollapse", slot: "WrapperInner", overridesResolver: (t, e) => e.wrapperInner })({ width: "100%", variants: [{ props: { orientation: "horizontal" }, style: { width: "auto", height: "100%" } }] }), Pe = at(function(e, o) {
  const r = gt({ props: e, name: "MuiCollapse" }), { addEndListener: n, children: i, className: l, collapsedSize: a = "0px", component: s, easing: c, in: p, onEnter: f, onEntered: $, onEntering: u, onExit: y, onExited: v, onExiting: b, orientation: m = "vertical", style: P, timeout: h = Do.standard, TransitionComponent: d = Lo, ...x } = r, g = { ...r, orientation: m, collapsedSize: a }, C = qo(g), M = oo(), E = te(), w = ct(null), S = ct(), B = typeof a == "number" ? `${a}px` : a, A = m === "horizontal", z = A ? "width" : "height", j = ct(null), L = re(o, j), k = (R) => (V) => {
    if (R) {
      const N = j.current;
      V === void 0 ? R(N) : R(N, V);
    }
  }, F = () => w.current ? w.current[A ? "clientWidth" : "clientHeight"] : 0, W = k((R, V) => {
    w.current && A && (w.current.style.position = "absolute"), R.style[z] = B, f && f(R, V);
  }), J = k((R, V) => {
    const N = F();
    w.current && A && (w.current.style.position = "");
    const { duration: Q, easing: Ct } = Le({ style: P, timeout: h, easing: c }, { mode: "enter" });
    if (h === "auto") {
      const yt = M.transitions.getAutoHeightDuration(N);
      R.style.transitionDuration = `${yt}ms`, S.current = yt;
    } else R.style.transitionDuration = typeof Q == "string" ? Q : `${Q}ms`;
    R.style[z] = `${N}px`, R.style.transitionTimingFunction = Ct, u && u(R, V);
  }), xt = k((R, V) => {
    R.style[z] = "auto", $ && $(R, V);
  }), it = k((R) => {
    R.style[z] = `${F()}px`, y && y(R);
  }), wt = k(v), X = k((R) => {
    const V = F(), { duration: N, easing: Q } = Le({ style: P, timeout: h, easing: c }, { mode: "exit" });
    if (h === "auto") {
      const Ct = M.transitions.getAutoHeightDuration(V);
      R.style.transitionDuration = `${Ct}ms`, S.current = Ct;
    } else R.style.transitionDuration = typeof N == "string" ? N : `${N}ms`;
    R.style[z] = B, R.style.transitionTimingFunction = Q, b && b(R);
  });
  return O(d, { in: p, onEnter: W, onEntered: xt, onEntering: J, onExit: it, onExited: wt, onExiting: X, addEndListener: (R) => {
    h === "auto" && E.start(S.current || 0, R), n && n(j.current, R);
  }, nodeRef: j, timeout: h === "auto" ? null : h, ...x, children: (R, { ownerState: V, ...N }) => O(Go, { as: s, className: _(C.root, l, { entered: C.entered, exited: !p && B === "0px" && C.hidden }[R]), style: { [A ? "minWidth" : "minHeight"]: B, ...P }, ref: L, ownerState: { ...g, state: R }, ...N, children: O(Ko, { ownerState: { ...g, state: R }, className: C.wrapper, ref: w, children: O(Xo, { ownerState: { ...g, state: R }, className: C.wrapperInner, children: i }) }) }) });
});
Pe && (Pe.muiSupportAuto = true);
const io = Ao({});
function Yo(t) {
  return ft("MuiAccordion", t);
}
const ue = vt("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]), Zo = (t) => {
  const { classes: e, square: o, expanded: r, disabled: n, disableGutters: i } = t;
  return mt({ root: ["root", !o && "rounded", r && "expanded", n && "disabled", !i && "gutters"], heading: ["heading"], region: ["region"] }, Yo, e);
}, Jo = U(no, { name: "MuiAccordion", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [{ [`& .${ue.region}`]: e.region }, e.root, !o.square && e.rounded, !o.disableGutters && e.gutters];
} })(ot(({ theme: t }) => {
  const e = { duration: t.transitions.duration.shortest };
  return { position: "relative", transition: t.transitions.create(["margin"], e), overflowAnchor: "none", "&::before": { position: "absolute", left: 0, top: -1, right: 0, height: 1, content: '""', opacity: 1, backgroundColor: (t.vars || t).palette.divider, transition: t.transitions.create(["opacity", "background-color"], e) }, "&:first-of-type": { "&::before": { display: "none" } }, [`&.${ue.expanded}`]: { "&::before": { opacity: 0 }, "&:first-of-type": { marginTop: 0 }, "&:last-of-type": { marginBottom: 0 }, "& + &": { "&::before": { display: "none" } } }, [`&.${ue.disabled}`]: { backgroundColor: (t.vars || t).palette.action.disabledBackground } };
}), ot(({ theme: t }) => ({ variants: [{ props: (e) => !e.square, style: { borderRadius: 0, "&:first-of-type": { borderTopLeftRadius: (t.vars || t).shape.borderRadius, borderTopRightRadius: (t.vars || t).shape.borderRadius }, "&:last-of-type": { borderBottomLeftRadius: (t.vars || t).shape.borderRadius, borderBottomRightRadius: (t.vars || t).shape.borderRadius, "@supports (-ms-ime-align: auto)": { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } } } }, { props: (e) => !e.disableGutters, style: { [`&.${ue.expanded}`]: { margin: "16px 0" } } }] }))), Qo = U("h3", { name: "MuiAccordion", slot: "Heading", overridesResolver: (t, e) => e.heading })({ all: "unset" }), Qn = at(function(e, o) {
  const r = gt({ props: e, name: "MuiAccordion" }), { children: n, className: i, defaultExpanded: l = false, disabled: a = false, disableGutters: s = false, expanded: c, onChange: p, square: f = false, slots: $ = {}, slotProps: u = {}, TransitionComponent: y, TransitionProps: v, ...b } = r, [m, P] = ro({ controlled: c, default: l, name: "Accordion", state: "expanded" }), h = To((F) => {
    P(!m), p && p(F, !m);
  }, [m, p, P]), [d, ...x] = Mo.toArray(n), g = eo(() => ({ expanded: m, disabled: a, disableGutters: s, toggle: h }), [m, a, s, h]), C = { ...r, square: f, disabled: a, disableGutters: s, expanded: m }, M = Zo(C), E = { transition: y, ...$ }, w = { transition: v, ...u }, S = { slots: E, slotProps: w }, [B, A] = q("root", { elementType: Jo, externalForwardedProps: { ...S, ...b }, className: _(M.root, i), shouldForwardComponentProp: true, ownerState: C, ref: o, additionalProps: { square: f } }), [z, j] = q("heading", { elementType: Qo, externalForwardedProps: S, className: M.heading, ownerState: C }), [L, k] = q("transition", { elementType: Pe, externalForwardedProps: S, ownerState: C });
  return Wt(B, { ...A, children: [O(z, { ...j, children: O(io.Provider, { value: g, children: d }) }), O(L, { in: m, timeout: "auto", ...k, children: O("div", { "aria-labelledby": d.props.id, id: d.props["aria-controls"], role: "region", className: M.region, children: x }) })] });
});
function tr(t) {
  return ft("MuiAccordionDetails", t);
}
vt("MuiAccordionDetails", ["root"]);
const er = (t) => {
  const { classes: e } = t;
  return mt({ root: ["root"] }, tr, e);
}, or = U("div", { name: "MuiAccordionDetails", slot: "Root", overridesResolver: (t, e) => e.root })(ot(({ theme: t }) => ({ padding: t.spacing(1, 2, 2) }))), ta = at(function(e, o) {
  const r = gt({ props: e, name: "MuiAccordionDetails" }), { className: n, ...i } = r, l = r, a = er(l);
  return O(or, { className: _(a.root, n), ref: o, ownerState: l, ...i });
});
function rr(t) {
  return ft("MuiAccordionSummary", t);
}
const zt = vt("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]), nr = (t) => {
  const { classes: e, expanded: o, disabled: r, disableGutters: n } = t;
  return mt({ root: ["root", o && "expanded", r && "disabled", !n && "gutters"], focusVisible: ["focusVisible"], content: ["content", o && "expanded", !n && "contentGutters"], expandIconWrapper: ["expandIconWrapper", o && "expanded"] }, rr, e);
}, ar = U($e, { name: "MuiAccordionSummary", slot: "Root", overridesResolver: (t, e) => e.root })(ot(({ theme: t }) => {
  const e = { duration: t.transitions.duration.shortest };
  return { display: "flex", width: "100%", minHeight: 48, padding: t.spacing(0, 2), transition: t.transitions.create(["min-height", "background-color"], e), [`&.${zt.focusVisible}`]: { backgroundColor: (t.vars || t).palette.action.focus }, [`&.${zt.disabled}`]: { opacity: (t.vars || t).palette.action.disabledOpacity }, [`&:hover:not(.${zt.disabled})`]: { cursor: "pointer" }, variants: [{ props: (o) => !o.disableGutters, style: { [`&.${zt.expanded}`]: { minHeight: 64 } } }] };
})), ir = U("span", { name: "MuiAccordionSummary", slot: "Content", overridesResolver: (t, e) => e.content })(ot(({ theme: t }) => ({ display: "flex", textAlign: "start", flexGrow: 1, margin: "12px 0", variants: [{ props: (e) => !e.disableGutters, style: { transition: t.transitions.create(["margin"], { duration: t.transitions.duration.shortest }), [`&.${zt.expanded}`]: { margin: "20px 0" } } }] }))), sr = U("span", { name: "MuiAccordionSummary", slot: "ExpandIconWrapper", overridesResolver: (t, e) => e.expandIconWrapper })(ot(({ theme: t }) => ({ display: "flex", color: (t.vars || t).palette.action.active, transform: "rotate(0deg)", transition: t.transitions.create("transform", { duration: t.transitions.duration.shortest }), [`&.${zt.expanded}`]: { transform: "rotate(180deg)" } }))), ea = at(function(e, o) {
  const r = gt({ props: e, name: "MuiAccordionSummary" }), { children: n, className: i, expandIcon: l, focusVisibleClassName: a, onClick: s, slots: c, slotProps: p, ...f } = r, { disabled: $ = false, disableGutters: u, expanded: y, toggle: v } = Eo(io), b = (w) => {
    v && v(w), s && s(w);
  }, m = { ...r, expanded: y, disabled: $, disableGutters: u }, P = nr(m), h = { slots: c, slotProps: p }, [d, x] = q("root", { ref: o, shouldForwardComponentProp: true, className: _(P.root, i), elementType: ar, externalForwardedProps: { ...h, ...f }, ownerState: m, additionalProps: { focusRipple: false, disableRipple: true, disabled: $, "aria-expanded": y, focusVisibleClassName: _(P.focusVisible, a) }, getSlotProps: (w) => ({ ...w, onClick: (S) => {
    var _a;
    (_a = w.onClick) == null ? void 0 : _a.call(w, S), b(S);
  } }) }), [g, C] = q("content", { className: P.content, elementType: ir, externalForwardedProps: h, ownerState: m }), [M, E] = q("expandIconWrapper", { className: P.expandIconWrapper, elementType: sr, externalForwardedProps: h, ownerState: m });
  return Wt(d, { ...x, children: [O(g, { ...C, children: n }), l && O(M, { ...E, children: l })] });
});
function lr(t) {
  return ft("MuiAlert", t);
}
const He = vt("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), pr = ht(O("path", { d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" }), "SuccessOutlined"), cr = ht(O("path", { d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" }), "ReportProblemOutlined"), dr = ht(O("path", { d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }), "ErrorOutline"), ur = ht(O("path", { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z" }), "InfoOutlined"), fr = ht(O("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), "Close"), vr = (t) => {
  const { variant: e, color: o, severity: r, classes: n } = t, i = { root: ["root", `color${D(o || r)}`, `${e}${D(o || r)}`, `${e}`], icon: ["icon"], message: ["message"], action: ["action"] };
  return mt(i, lr, n);
}, gr = U(no, { name: "MuiAlert", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, e[o.variant], e[`${o.variant}${D(o.color || o.severity)}`]];
} })(ot(({ theme: t }) => {
  const e = t.palette.mode === "light" ? ze : Be, o = t.palette.mode === "light" ? Be : ze;
  return { ...t.typography.body2, backgroundColor: "transparent", display: "flex", padding: "6px 16px", variants: [...Object.entries(t.palette).filter(Tt(["light"])).map(([r]) => ({ props: { colorSeverity: r, variant: "standard" }, style: { color: t.vars ? t.vars.palette.Alert[`${r}Color`] : e(t.palette[r].light, 0.6), backgroundColor: t.vars ? t.vars.palette.Alert[`${r}StandardBg`] : o(t.palette[r].light, 0.9), [`& .${He.icon}`]: t.vars ? { color: t.vars.palette.Alert[`${r}IconColor`] } : { color: t.palette[r].main } } })), ...Object.entries(t.palette).filter(Tt(["light"])).map(([r]) => ({ props: { colorSeverity: r, variant: "outlined" }, style: { color: t.vars ? t.vars.palette.Alert[`${r}Color`] : e(t.palette[r].light, 0.6), border: `1px solid ${(t.vars || t).palette[r].light}`, [`& .${He.icon}`]: t.vars ? { color: t.vars.palette.Alert[`${r}IconColor`] } : { color: t.palette[r].main } } })), ...Object.entries(t.palette).filter(Tt(["dark"])).map(([r]) => ({ props: { colorSeverity: r, variant: "filled" }, style: { fontWeight: t.typography.fontWeightMedium, ...t.vars ? { color: t.vars.palette.Alert[`${r}FilledColor`], backgroundColor: t.vars.palette.Alert[`${r}FilledBg`] } : { backgroundColor: t.palette.mode === "dark" ? t.palette[r].dark : t.palette[r].main, color: t.palette.getContrastText(t.palette[r].main) } } }))] };
})), mr = U("div", { name: "MuiAlert", slot: "Icon", overridesResolver: (t, e) => e.icon })({ marginRight: 12, padding: "7px 0", display: "flex", fontSize: 22, opacity: 0.9 }), hr = U("div", { name: "MuiAlert", slot: "Message", overridesResolver: (t, e) => e.message })({ padding: "8px 0", minWidth: 0, overflow: "auto" }), yr = U("div", { name: "MuiAlert", slot: "Action", overridesResolver: (t, e) => e.action })({ display: "flex", alignItems: "flex-start", padding: "4px 0 0 16px", marginLeft: "auto", marginRight: -8 }), Ue = { success: O(pr, { fontSize: "inherit" }), warning: O(cr, { fontSize: "inherit" }), error: O(dr, { fontSize: "inherit" }), info: O(ur, { fontSize: "inherit" }) }, oa = at(function(e, o) {
  const r = gt({ props: e, name: "MuiAlert" }), { action: n, children: i, className: l, closeText: a = "Close", color: s, components: c = {}, componentsProps: p = {}, icon: f, iconMapping: $ = Ue, onClose: u, role: y = "alert", severity: v = "success", slotProps: b = {}, slots: m = {}, variant: P = "standard", ...h } = r, d = { ...r, color: s, severity: v, variant: P, colorSeverity: s || v }, x = vr(d), g = { slots: { closeButton: c.CloseButton, closeIcon: c.CloseIcon, ...m }, slotProps: { ...p, ...b } }, [C, M] = q("root", { ref: o, shouldForwardComponentProp: true, className: _(x.root, l), elementType: gr, externalForwardedProps: { ...g, ...h }, ownerState: d, additionalProps: { role: y, elevation: 0 } }), [E, w] = q("icon", { className: x.icon, elementType: mr, externalForwardedProps: g, ownerState: d }), [S, B] = q("message", { className: x.message, elementType: hr, externalForwardedProps: g, ownerState: d }), [A, z] = q("action", { className: x.action, elementType: yr, externalForwardedProps: g, ownerState: d }), [j, L] = q("closeButton", { elementType: zo, externalForwardedProps: g, ownerState: d }), [k, F] = q("closeIcon", { elementType: fr, externalForwardedProps: g, ownerState: d });
  return Wt(C, { ...M, children: [f !== false ? O(E, { ...w, children: f || $[v] || Ue[v] }) : null, O(S, { ...B, children: i }), n != null ? O(A, { ...z, children: n }) : null, n == null && u ? O(A, { ...z, children: O(j, { size: "small", "aria-label": a, title: a, color: "inherit", onClick: u, ...L, children: O(k, { fontSize: "small", ...F }) }) }) : null] });
});
var G = "top", rt = "bottom", nt = "right", K = "left", Ae = "auto", ie = [G, rt, nt, K], Nt = "start", ne = "end", br = "clippingParents", so = "viewport", Zt = "popper", xr = "reference", Ve = ie.reduce(function(t, e) {
  return t.concat([e + "-" + Nt, e + "-" + ne]);
}, []), lo = [].concat(ie, [Ae]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Nt, e + "-" + ne]);
}, []), wr = "beforeRead", Cr = "read", $r = "afterRead", Pr = "beforeMain", Sr = "main", Or = "afterMain", Rr = "beforeWrite", Ar = "write", Tr = "afterWrite", Mr = [wr, Cr, $r, Pr, Sr, Or, Rr, Ar, Tr];
function ut(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function Z(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Et(t) {
  var e = Z(t).Element;
  return t instanceof e || t instanceof Element;
}
function et(t) {
  var e = Z(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Te(t) {
  if (typeof ShadowRoot > "u") return false;
  var e = Z(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Er(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(o) {
    var r = e.styles[o] || {}, n = e.attributes[o] || {}, i = e.elements[o];
    !et(i) || !ut(i) || (Object.assign(i.style, r), Object.keys(n).forEach(function(l) {
      var a = n[l];
      a === false ? i.removeAttribute(l) : i.setAttribute(l, a === true ? "" : a);
    }));
  });
}
function kr(t) {
  var e = t.state, o = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, o.popper), e.styles = o, e.elements.arrow && Object.assign(e.elements.arrow.style, o.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var n = e.elements[r], i = e.attributes[r] || {}, l = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : o[r]), a = l.reduce(function(s, c) {
        return s[c] = "", s;
      }, {});
      !et(n) || !ut(n) || (Object.assign(n.style, a), Object.keys(i).forEach(function(s) {
        n.removeAttribute(s);
      }));
    });
  };
}
const Ir = { name: "applyStyles", enabled: true, phase: "write", fn: Er, effect: kr, requires: ["computeStyles"] };
function dt(t) {
  return t.split("-")[0];
}
var Mt = Math.max, be = Math.min, jt = Math.round;
function Se() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function po() {
  return !/^((?!chrome|android).)*safari/i.test(Se());
}
function Ft(t, e, o) {
  e === void 0 && (e = false), o === void 0 && (o = false);
  var r = t.getBoundingClientRect(), n = 1, i = 1;
  e && et(t) && (n = t.offsetWidth > 0 && jt(r.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && jt(r.height) / t.offsetHeight || 1);
  var l = Et(t) ? Z(t) : window, a = l.visualViewport, s = !po() && o, c = (r.left + (s && a ? a.offsetLeft : 0)) / n, p = (r.top + (s && a ? a.offsetTop : 0)) / i, f = r.width / n, $ = r.height / i;
  return { width: f, height: $, top: p, right: c + f, bottom: p + $, left: c, x: c, y: p };
}
function Me(t) {
  var e = Ft(t), o = t.offsetWidth, r = t.offsetHeight;
  return Math.abs(e.width - o) <= 1 && (o = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), { x: t.offsetLeft, y: t.offsetTop, width: o, height: r };
}
function co(t, e) {
  var o = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return true;
  if (o && Te(o)) {
    var r = e;
    do {
      if (r && t.isSameNode(r)) return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function bt(t) {
  return Z(t).getComputedStyle(t);
}
function Dr(t) {
  return ["table", "td", "th"].indexOf(ut(t)) >= 0;
}
function Pt(t) {
  return ((Et(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function xe(t) {
  return ut(t) === "html" ? t : t.assignedSlot || t.parentNode || (Te(t) ? t.host : null) || Pt(t);
}
function _e(t) {
  return !et(t) || bt(t).position === "fixed" ? null : t.offsetParent;
}
function Lr(t) {
  var e = /firefox/i.test(Se()), o = /Trident/i.test(Se());
  if (o && et(t)) {
    var r = bt(t);
    if (r.position === "fixed") return null;
  }
  var n = xe(t);
  for (Te(n) && (n = n.host); et(n) && ["html", "body"].indexOf(ut(n)) < 0; ) {
    var i = bt(n);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none") return n;
    n = n.parentNode;
  }
  return null;
}
function se(t) {
  for (var e = Z(t), o = _e(t); o && Dr(o) && bt(o).position === "static"; ) o = _e(o);
  return o && (ut(o) === "html" || ut(o) === "body" && bt(o).position === "static") ? e : o || Lr(t) || e;
}
function Ee(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function ee(t, e, o) {
  return Mt(t, be(e, o));
}
function zr(t, e, o) {
  var r = ee(t, e, o);
  return r > o ? o : r;
}
function uo() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function fo(t) {
  return Object.assign({}, uo(), t);
}
function vo(t, e) {
  return e.reduce(function(o, r) {
    return o[r] = t, o;
  }, {});
}
var Br = function(e, o) {
  return e = typeof e == "function" ? e(Object.assign({}, o.rects, { placement: o.placement })) : e, fo(typeof e != "number" ? e : vo(e, ie));
};
function Wr(t) {
  var e, o = t.state, r = t.name, n = t.options, i = o.elements.arrow, l = o.modifiersData.popperOffsets, a = dt(o.placement), s = Ee(a), c = [K, nt].indexOf(a) >= 0, p = c ? "height" : "width";
  if (!(!i || !l)) {
    var f = Br(n.padding, o), $ = Me(i), u = s === "y" ? G : K, y = s === "y" ? rt : nt, v = o.rects.reference[p] + o.rects.reference[s] - l[s] - o.rects.popper[p], b = l[s] - o.rects.reference[s], m = se(i), P = m ? s === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, h = v / 2 - b / 2, d = f[u], x = P - $[p] - f[y], g = P / 2 - $[p] / 2 + h, C = ee(d, g, x), M = s;
    o.modifiersData[r] = (e = {}, e[M] = C, e.centerOffset = C - g, e);
  }
}
function Nr(t) {
  var e = t.state, o = t.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
  n != null && (typeof n == "string" && (n = e.elements.popper.querySelector(n), !n) || co(e.elements.popper, n) && (e.elements.arrow = n));
}
const jr = { name: "arrow", enabled: true, phase: "main", fn: Wr, effect: Nr, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ht(t) {
  return t.split("-")[1];
}
var Fr = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Hr(t, e) {
  var o = t.x, r = t.y, n = e.devicePixelRatio || 1;
  return { x: jt(o * n) / n || 0, y: jt(r * n) / n || 0 };
}
function qe(t) {
  var e, o = t.popper, r = t.popperRect, n = t.placement, i = t.variation, l = t.offsets, a = t.position, s = t.gpuAcceleration, c = t.adaptive, p = t.roundOffsets, f = t.isFixed, $ = l.x, u = $ === void 0 ? 0 : $, y = l.y, v = y === void 0 ? 0 : y, b = typeof p == "function" ? p({ x: u, y: v }) : { x: u, y: v };
  u = b.x, v = b.y;
  var m = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), h = K, d = G, x = window;
  if (c) {
    var g = se(o), C = "clientHeight", M = "clientWidth";
    if (g === Z(o) && (g = Pt(o), bt(g).position !== "static" && a === "absolute" && (C = "scrollHeight", M = "scrollWidth")), g = g, n === G || (n === K || n === nt) && i === ne) {
      d = rt;
      var E = f && g === x && x.visualViewport ? x.visualViewport.height : g[C];
      v -= E - r.height, v *= s ? 1 : -1;
    }
    if (n === K || (n === G || n === rt) && i === ne) {
      h = nt;
      var w = f && g === x && x.visualViewport ? x.visualViewport.width : g[M];
      u -= w - r.width, u *= s ? 1 : -1;
    }
  }
  var S = Object.assign({ position: a }, c && Fr), B = p === true ? Hr({ x: u, y: v }, Z(o)) : { x: u, y: v };
  if (u = B.x, v = B.y, s) {
    var A;
    return Object.assign({}, S, (A = {}, A[d] = P ? "0" : "", A[h] = m ? "0" : "", A.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + v + "px)" : "translate3d(" + u + "px, " + v + "px, 0)", A));
  }
  return Object.assign({}, S, (e = {}, e[d] = P ? v + "px" : "", e[h] = m ? u + "px" : "", e.transform = "", e));
}
function Ur(t) {
  var e = t.state, o = t.options, r = o.gpuAcceleration, n = r === void 0 ? true : r, i = o.adaptive, l = i === void 0 ? true : i, a = o.roundOffsets, s = a === void 0 ? true : a, c = { placement: dt(e.placement), variation: Ht(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: n, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, qe(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: l, roundOffsets: s })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, qe(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: s })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
const Vr = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: Ur, data: {} };
var fe = { passive: true };
function _r(t) {
  var e = t.state, o = t.instance, r = t.options, n = r.scroll, i = n === void 0 ? true : n, l = r.resize, a = l === void 0 ? true : l, s = Z(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(p) {
    p.addEventListener("scroll", o.update, fe);
  }), a && s.addEventListener("resize", o.update, fe), function() {
    i && c.forEach(function(p) {
      p.removeEventListener("scroll", o.update, fe);
    }), a && s.removeEventListener("resize", o.update, fe);
  };
}
const qr = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: _r, data: {} };
var Gr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function he(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return Gr[e];
  });
}
var Kr = { start: "end", end: "start" };
function Ge(t) {
  return t.replace(/start|end/g, function(e) {
    return Kr[e];
  });
}
function ke(t) {
  var e = Z(t), o = e.pageXOffset, r = e.pageYOffset;
  return { scrollLeft: o, scrollTop: r };
}
function Ie(t) {
  return Ft(Pt(t)).left + ke(t).scrollLeft;
}
function Xr(t, e) {
  var o = Z(t), r = Pt(t), n = o.visualViewport, i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
  if (n) {
    i = n.width, l = n.height;
    var c = po();
    (c || !c && e === "fixed") && (a = n.offsetLeft, s = n.offsetTop);
  }
  return { width: i, height: l, x: a + Ie(t), y: s };
}
function Yr(t) {
  var e, o = Pt(t), r = ke(t), n = (e = t.ownerDocument) == null ? void 0 : e.body, i = Mt(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = Mt(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -r.scrollLeft + Ie(t), s = -r.scrollTop;
  return bt(n || o).direction === "rtl" && (a += Mt(o.clientWidth, n ? n.clientWidth : 0) - i), { width: i, height: l, x: a, y: s };
}
function De(t) {
  var e = bt(t), o = e.overflow, r = e.overflowX, n = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + r);
}
function go(t) {
  return ["html", "body", "#document"].indexOf(ut(t)) >= 0 ? t.ownerDocument.body : et(t) && De(t) ? t : go(xe(t));
}
function oe(t, e) {
  var o;
  e === void 0 && (e = []);
  var r = go(t), n = r === ((o = t.ownerDocument) == null ? void 0 : o.body), i = Z(r), l = n ? [i].concat(i.visualViewport || [], De(r) ? r : []) : r, a = e.concat(l);
  return n ? a : a.concat(oe(xe(l)));
}
function Oe(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function Zr(t, e) {
  var o = Ft(t, false, e === "fixed");
  return o.top = o.top + t.clientTop, o.left = o.left + t.clientLeft, o.bottom = o.top + t.clientHeight, o.right = o.left + t.clientWidth, o.width = t.clientWidth, o.height = t.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ke(t, e, o) {
  return e === so ? Oe(Xr(t, o)) : Et(e) ? Zr(e, o) : Oe(Yr(Pt(t)));
}
function Jr(t) {
  var e = oe(xe(t)), o = ["absolute", "fixed"].indexOf(bt(t).position) >= 0, r = o && et(t) ? se(t) : t;
  return Et(r) ? e.filter(function(n) {
    return Et(n) && co(n, r) && ut(n) !== "body";
  }) : [];
}
function Qr(t, e, o, r) {
  var n = e === "clippingParents" ? Jr(t) : [].concat(e), i = [].concat(n, [o]), l = i[0], a = i.reduce(function(s, c) {
    var p = Ke(t, c, r);
    return s.top = Mt(p.top, s.top), s.right = be(p.right, s.right), s.bottom = be(p.bottom, s.bottom), s.left = Mt(p.left, s.left), s;
  }, Ke(t, l, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function mo(t) {
  var e = t.reference, o = t.element, r = t.placement, n = r ? dt(r) : null, i = r ? Ht(r) : null, l = e.x + e.width / 2 - o.width / 2, a = e.y + e.height / 2 - o.height / 2, s;
  switch (n) {
    case G:
      s = { x: l, y: e.y - o.height };
      break;
    case rt:
      s = { x: l, y: e.y + e.height };
      break;
    case nt:
      s = { x: e.x + e.width, y: a };
      break;
    case K:
      s = { x: e.x - o.width, y: a };
      break;
    default:
      s = { x: e.x, y: e.y };
  }
  var c = n ? Ee(n) : null;
  if (c != null) {
    var p = c === "y" ? "height" : "width";
    switch (i) {
      case Nt:
        s[c] = s[c] - (e[p] / 2 - o[p] / 2);
        break;
      case ne:
        s[c] = s[c] + (e[p] / 2 - o[p] / 2);
        break;
    }
  }
  return s;
}
function ae(t, e) {
  e === void 0 && (e = {});
  var o = e, r = o.placement, n = r === void 0 ? t.placement : r, i = o.strategy, l = i === void 0 ? t.strategy : i, a = o.boundary, s = a === void 0 ? br : a, c = o.rootBoundary, p = c === void 0 ? so : c, f = o.elementContext, $ = f === void 0 ? Zt : f, u = o.altBoundary, y = u === void 0 ? false : u, v = o.padding, b = v === void 0 ? 0 : v, m = fo(typeof b != "number" ? b : vo(b, ie)), P = $ === Zt ? xr : Zt, h = t.rects.popper, d = t.elements[y ? P : $], x = Qr(Et(d) ? d : d.contextElement || Pt(t.elements.popper), s, p, l), g = Ft(t.elements.reference), C = mo({ reference: g, element: h, placement: n }), M = Oe(Object.assign({}, h, C)), E = $ === Zt ? M : g, w = { top: x.top - E.top + m.top, bottom: E.bottom - x.bottom + m.bottom, left: x.left - E.left + m.left, right: E.right - x.right + m.right }, S = t.modifiersData.offset;
  if ($ === Zt && S) {
    var B = S[n];
    Object.keys(w).forEach(function(A) {
      var z = [nt, rt].indexOf(A) >= 0 ? 1 : -1, j = [G, rt].indexOf(A) >= 0 ? "y" : "x";
      w[A] += B[j] * z;
    });
  }
  return w;
}
function tn(t, e) {
  e === void 0 && (e = {});
  var o = e, r = o.placement, n = o.boundary, i = o.rootBoundary, l = o.padding, a = o.flipVariations, s = o.allowedAutoPlacements, c = s === void 0 ? lo : s, p = Ht(r), f = p ? a ? Ve : Ve.filter(function(y) {
    return Ht(y) === p;
  }) : ie, $ = f.filter(function(y) {
    return c.indexOf(y) >= 0;
  });
  $.length === 0 && ($ = f);
  var u = $.reduce(function(y, v) {
    return y[v] = ae(t, { placement: v, boundary: n, rootBoundary: i, padding: l })[dt(v)], y;
  }, {});
  return Object.keys(u).sort(function(y, v) {
    return u[y] - u[v];
  });
}
function en(t) {
  if (dt(t) === Ae) return [];
  var e = he(t);
  return [Ge(t), e, Ge(e)];
}
function on(t) {
  var e = t.state, o = t.options, r = t.name;
  if (!e.modifiersData[r]._skip) {
    for (var n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? true : l, s = o.fallbackPlacements, c = o.padding, p = o.boundary, f = o.rootBoundary, $ = o.altBoundary, u = o.flipVariations, y = u === void 0 ? true : u, v = o.allowedAutoPlacements, b = e.options.placement, m = dt(b), P = m === b, h = s || (P || !y ? [he(b)] : en(b)), d = [b].concat(h).reduce(function(X, Y) {
      return X.concat(dt(Y) === Ae ? tn(e, { placement: Y, boundary: p, rootBoundary: f, padding: c, flipVariations: y, allowedAutoPlacements: v }) : Y);
    }, []), x = e.rects.reference, g = e.rects.popper, C = /* @__PURE__ */ new Map(), M = true, E = d[0], w = 0; w < d.length; w++) {
      var S = d[w], B = dt(S), A = Ht(S) === Nt, z = [G, rt].indexOf(B) >= 0, j = z ? "width" : "height", L = ae(e, { placement: S, boundary: p, rootBoundary: f, altBoundary: $, padding: c }), k = z ? A ? nt : K : A ? rt : G;
      x[j] > g[j] && (k = he(k));
      var F = he(k), W = [];
      if (i && W.push(L[B] <= 0), a && W.push(L[k] <= 0, L[F] <= 0), W.every(function(X) {
        return X;
      })) {
        E = S, M = false;
        break;
      }
      C.set(S, W);
    }
    if (M) for (var J = y ? 3 : 1, xt = function(Y) {
      var R = d.find(function(V) {
        var N = C.get(V);
        if (N) return N.slice(0, Y).every(function(Q) {
          return Q;
        });
      });
      if (R) return E = R, "break";
    }, it = J; it > 0; it--) {
      var wt = xt(it);
      if (wt === "break") break;
    }
    e.placement !== E && (e.modifiersData[r]._skip = true, e.placement = E, e.reset = true);
  }
}
const rn = { name: "flip", enabled: true, phase: "main", fn: on, requiresIfExists: ["offset"], data: { _skip: false } };
function Xe(t, e, o) {
  return o === void 0 && (o = { x: 0, y: 0 }), { top: t.top - e.height - o.y, right: t.right - e.width + o.x, bottom: t.bottom - e.height + o.y, left: t.left - e.width - o.x };
}
function Ye(t) {
  return [G, nt, rt, K].some(function(e) {
    return t[e] >= 0;
  });
}
function nn(t) {
  var e = t.state, o = t.name, r = e.rects.reference, n = e.rects.popper, i = e.modifiersData.preventOverflow, l = ae(e, { elementContext: "reference" }), a = ae(e, { altBoundary: true }), s = Xe(l, r), c = Xe(a, n, i), p = Ye(s), f = Ye(c);
  e.modifiersData[o] = { referenceClippingOffsets: s, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: f }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": f });
}
const an = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: nn };
function sn(t, e, o) {
  var r = dt(t), n = [K, G].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, e, { placement: t })) : o, l = i[0], a = i[1];
  return l = l || 0, a = (a || 0) * n, [K, nt].indexOf(r) >= 0 ? { x: a, y: l } : { x: l, y: a };
}
function ln(t) {
  var e = t.state, o = t.options, r = t.name, n = o.offset, i = n === void 0 ? [0, 0] : n, l = lo.reduce(function(p, f) {
    return p[f] = sn(f, e.rects, i), p;
  }, {}), a = l[e.placement], s = a.x, c = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += s, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = l;
}
const pn = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: ln };
function cn(t) {
  var e = t.state, o = t.name;
  e.modifiersData[o] = mo({ reference: e.rects.reference, element: e.rects.popper, placement: e.placement });
}
const dn = { name: "popperOffsets", enabled: true, phase: "read", fn: cn, data: {} };
function un(t) {
  return t === "x" ? "y" : "x";
}
function fn(t) {
  var e = t.state, o = t.options, r = t.name, n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? false : l, s = o.boundary, c = o.rootBoundary, p = o.altBoundary, f = o.padding, $ = o.tether, u = $ === void 0 ? true : $, y = o.tetherOffset, v = y === void 0 ? 0 : y, b = ae(e, { boundary: s, rootBoundary: c, padding: f, altBoundary: p }), m = dt(e.placement), P = Ht(e.placement), h = !P, d = Ee(m), x = un(d), g = e.modifiersData.popperOffsets, C = e.rects.reference, M = e.rects.popper, E = typeof v == "function" ? v(Object.assign({}, e.rects, { placement: e.placement })) : v, w = typeof E == "number" ? { mainAxis: E, altAxis: E } : Object.assign({ mainAxis: 0, altAxis: 0 }, E), S = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, B = { x: 0, y: 0 };
  if (g) {
    if (i) {
      var A, z = d === "y" ? G : K, j = d === "y" ? rt : nt, L = d === "y" ? "height" : "width", k = g[d], F = k + b[z], W = k - b[j], J = u ? -M[L] / 2 : 0, xt = P === Nt ? C[L] : M[L], it = P === Nt ? -M[L] : -C[L], wt = e.elements.arrow, X = u && wt ? Me(wt) : { width: 0, height: 0 }, Y = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : uo(), R = Y[z], V = Y[j], N = ee(0, C[L], X[L]), Q = h ? C[L] / 2 - J - N - R - w.mainAxis : xt - N - R - w.mainAxis, Ct = h ? -C[L] / 2 + J + N + V + w.mainAxis : it + N + V + w.mainAxis, yt = e.elements.arrow && se(e.elements.arrow), st = yt ? d === "y" ? yt.clientTop || 0 : yt.clientLeft || 0 : 0, kt = (A = S == null ? void 0 : S[d]) != null ? A : 0, St = k + Q - kt - st, It = k + Ct - kt, Ut = ee(u ? be(F, St) : F, k, u ? Mt(W, It) : W);
      g[d] = Ut, B[d] = Ut - k;
    }
    if (a) {
      var Ot, Dt = d === "x" ? G : K, Vt = d === "x" ? rt : nt, pt = g[x], Rt = x === "y" ? "height" : "width", _t = pt + b[Dt], qt = pt - b[Vt], Gt = [G, K].indexOf(m) !== -1, le = (Ot = S == null ? void 0 : S[x]) != null ? Ot : 0, pe = Gt ? _t : pt - C[Rt] - M[Rt] - le + w.altAxis, Lt = Gt ? pt + C[Rt] + M[Rt] - le - w.altAxis : qt, ce = u && Gt ? zr(pe, pt, Lt) : ee(u ? pe : _t, pt, u ? Lt : qt);
      g[x] = ce, B[x] = ce - pt;
    }
    e.modifiersData[r] = B;
  }
}
const vn = { name: "preventOverflow", enabled: true, phase: "main", fn, requiresIfExists: ["offset"] };
function gn(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function mn(t) {
  return t === Z(t) || !et(t) ? ke(t) : gn(t);
}
function hn(t) {
  var e = t.getBoundingClientRect(), o = jt(e.width) / t.offsetWidth || 1, r = jt(e.height) / t.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function yn(t, e, o) {
  o === void 0 && (o = false);
  var r = et(e), n = et(e) && hn(e), i = Pt(e), l = Ft(t, n, o), a = { scrollLeft: 0, scrollTop: 0 }, s = { x: 0, y: 0 };
  return (r || !r && !o) && ((ut(e) !== "body" || De(i)) && (a = mn(e)), et(e) ? (s = Ft(e, true), s.x += e.clientLeft, s.y += e.clientTop) : i && (s.x = Ie(i))), { x: l.left + a.scrollLeft - s.x, y: l.top + a.scrollTop - s.y, width: l.width, height: l.height };
}
function bn(t) {
  var e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function n(i) {
    o.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function(a) {
      if (!o.has(a)) {
        var s = e.get(a);
        s && n(s);
      }
    }), r.push(i);
  }
  return t.forEach(function(i) {
    o.has(i.name) || n(i);
  }), r;
}
function xn(t) {
  var e = bn(t);
  return Mr.reduce(function(o, r) {
    return o.concat(e.filter(function(n) {
      return n.phase === r;
    }));
  }, []);
}
function wn(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(o) {
      Promise.resolve().then(function() {
        e = void 0, o(t());
      });
    })), e;
  };
}
function Cn(t) {
  var e = t.reduce(function(o, r) {
    var n = o[r.name];
    return o[r.name] = n ? Object.assign({}, n, r, { options: Object.assign({}, n.options, r.options), data: Object.assign({}, n.data, r.data) }) : r, o;
  }, {});
  return Object.keys(e).map(function(o) {
    return e[o];
  });
}
var Ze = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Je() {
  for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function $n(t) {
  t === void 0 && (t = {});
  var e = t, o = e.defaultModifiers, r = o === void 0 ? [] : o, n = e.defaultOptions, i = n === void 0 ? Ze : n;
  return function(a, s, c) {
    c === void 0 && (c = i);
    var p = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ze, i), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, f = [], $ = false, u = { state: p, setOptions: function(m) {
      var P = typeof m == "function" ? m(p.options) : m;
      v(), p.options = Object.assign({}, i, p.options, P), p.scrollParents = { reference: Et(a) ? oe(a) : a.contextElement ? oe(a.contextElement) : [], popper: oe(s) };
      var h = xn(Cn([].concat(r, p.options.modifiers)));
      return p.orderedModifiers = h.filter(function(d) {
        return d.enabled;
      }), y(), u.update();
    }, forceUpdate: function() {
      if (!$) {
        var m = p.elements, P = m.reference, h = m.popper;
        if (Je(P, h)) {
          p.rects = { reference: yn(P, se(h), p.options.strategy === "fixed"), popper: Me(h) }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(w) {
            return p.modifiersData[w.name] = Object.assign({}, w.data);
          });
          for (var d = 0; d < p.orderedModifiers.length; d++) {
            if (p.reset === true) {
              p.reset = false, d = -1;
              continue;
            }
            var x = p.orderedModifiers[d], g = x.fn, C = x.options, M = C === void 0 ? {} : C, E = x.name;
            typeof g == "function" && (p = g({ state: p, options: M, name: E, instance: u }) || p);
          }
        }
      }
    }, update: wn(function() {
      return new Promise(function(b) {
        u.forceUpdate(), b(p);
      });
    }), destroy: function() {
      v(), $ = true;
    } };
    if (!Je(a, s)) return u;
    u.setOptions(c).then(function(b) {
      !$ && c.onFirstUpdate && c.onFirstUpdate(b);
    });
    function y() {
      p.orderedModifiers.forEach(function(b) {
        var m = b.name, P = b.options, h = P === void 0 ? {} : P, d = b.effect;
        if (typeof d == "function") {
          var x = d({ state: p, name: m, instance: u, options: h }), g = function() {
          };
          f.push(x || g);
        }
      });
    }
    function v() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return u;
  };
}
var Pn = [qr, dn, Vr, Ir, pn, rn, vn, jr, an], Sn = $n({ defaultModifiers: Pn });
function On(t) {
  return ft("MuiPopper", t);
}
vt("MuiPopper", ["root"]);
function Rn(t, e) {
  if (e === "ltr") return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function Re(t) {
  return typeof t == "function" ? t() : t;
}
function An(t) {
  return t.nodeType !== void 0;
}
const Tn = (t) => {
  const { classes: e } = t;
  return mt({ root: ["root"] }, On, e);
}, Mn = {}, En = at(function(e, o) {
  const { anchorEl: r, children: n, direction: i, disablePortal: l, modifiers: a, open: s, placement: c, popperOptions: p, popperRef: f, slotProps: $ = {}, slots: u = {}, TransitionProps: y, ownerState: v, ...b } = e, m = ct(null), P = re(m, o), h = ct(null), d = re(h, f), x = ct(d);
  Ne(() => {
    x.current = d;
  }, [d]), ko(f, () => h.current, []);
  const g = Rn(c, i), [C, M] = Bt(g), [E, w] = Bt(Re(r));
  ye(() => {
    h.current && h.current.forceUpdate();
  }), ye(() => {
    r && w(Re(r));
  }, [r]), Ne(() => {
    if (!E || !s) return;
    const j = (F) => {
      M(F.placement);
    };
    let L = [{ name: "preventOverflow", options: { altBoundary: l } }, { name: "flip", options: { altBoundary: l } }, { name: "onUpdate", enabled: true, phase: "afterWrite", fn: ({ state: F }) => {
      j(F);
    } }];
    a != null && (L = L.concat(a)), p && p.modifiers != null && (L = L.concat(p.modifiers));
    const k = Sn(E, m.current, { placement: g, ...p, modifiers: L });
    return x.current(k), () => {
      k.destroy(), x.current(null);
    };
  }, [E, l, a, s, p, g]);
  const S = { placement: C };
  y !== null && (S.TransitionProps = y);
  const B = Tn(e), A = u.root ?? "div", z = Wo({ elementType: A, externalSlotProps: $.root, externalForwardedProps: b, additionalProps: { role: "tooltip", ref: P }, ownerState: e, className: B.root });
  return O(A, { ...z, children: typeof n == "function" ? n(S) : n });
}), kn = at(function(e, o) {
  const { anchorEl: r, children: n, container: i, direction: l = "ltr", disablePortal: a = false, keepMounted: s = false, modifiers: c, open: p, placement: f = "bottom", popperOptions: $ = Mn, popperRef: u, style: y, transition: v = false, slotProps: b = {}, slots: m = {}, ...P } = e, [h, d] = Bt(true), x = () => {
    d(false);
  }, g = () => {
    d(true);
  };
  if (!s && !p && (!v || h)) return null;
  let C;
  if (i) C = i;
  else if (r) {
    const w = Re(r);
    C = w && An(w) ? We(w).body : We(null).body;
  }
  const M = !p && s && (!v || h) ? "none" : void 0, E = v ? { in: p, onEnter: x, onExited: g } : void 0;
  return O(Bo, { disablePortal: a, container: C, children: O(En, { anchorEl: r, direction: l, disablePortal: a, modifiers: c, ref: o, open: v ? !h : p, placement: f, popperOptions: $, popperRef: u, slotProps: b, slots: m, ...P, style: { position: "fixed", top: 0, left: 0, display: M, ...y }, TransitionProps: E, children: n }) });
}), In = U(kn, { name: "MuiPopper", slot: "Root", overridesResolver: (t, e) => e.root })({}), ho = at(function(e, o) {
  const r = ao(), n = gt({ props: e, name: "MuiPopper" }), { anchorEl: i, component: l, components: a, componentsProps: s, container: c, disablePortal: p, keepMounted: f, modifiers: $, open: u, placement: y, popperOptions: v, popperRef: b, transition: m, slots: P, slotProps: h, ...d } = n, x = (P == null ? void 0 : P.root) ?? (a == null ? void 0 : a.Root), g = { anchorEl: i, container: c, disablePortal: p, keepMounted: f, modifiers: $, open: u, placement: y, popperOptions: v, popperRef: b, transition: m, ...d };
  return O(In, { as: l, direction: r ? "rtl" : "ltr", slots: { root: x }, slotProps: h ?? s, ...g, ref: o });
}), Dn = ht(O("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" }), "Cancel");
function Ln(t) {
  return ft("MuiChip", t);
}
const I = vt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), zn = (t) => {
  const { classes: e, disabled: o, size: r, color: n, iconColor: i, onDelete: l, clickable: a, variant: s } = t, c = { root: ["root", s, o && "disabled", `size${D(r)}`, `color${D(n)}`, a && "clickable", a && `clickableColor${D(n)}`, l && "deletable", l && `deletableColor${D(n)}`, `${s}${D(n)}`], label: ["label", `label${D(r)}`], avatar: ["avatar", `avatar${D(r)}`, `avatarColor${D(n)}`], icon: ["icon", `icon${D(r)}`, `iconColor${D(i)}`], deleteIcon: ["deleteIcon", `deleteIcon${D(r)}`, `deleteIconColor${D(n)}`, `deleteIcon${D(s)}Color${D(n)}`] };
  return mt(c, Ln, e);
}, Bn = U("div", { name: "MuiChip", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t, { color: r, iconColor: n, clickable: i, onDelete: l, size: a, variant: s } = o;
  return [{ [`& .${I.avatar}`]: e.avatar }, { [`& .${I.avatar}`]: e[`avatar${D(a)}`] }, { [`& .${I.avatar}`]: e[`avatarColor${D(r)}`] }, { [`& .${I.icon}`]: e.icon }, { [`& .${I.icon}`]: e[`icon${D(a)}`] }, { [`& .${I.icon}`]: e[`iconColor${D(n)}`] }, { [`& .${I.deleteIcon}`]: e.deleteIcon }, { [`& .${I.deleteIcon}`]: e[`deleteIcon${D(a)}`] }, { [`& .${I.deleteIcon}`]: e[`deleteIconColor${D(r)}`] }, { [`& .${I.deleteIcon}`]: e[`deleteIcon${D(s)}Color${D(r)}`] }, e.root, e[`size${D(a)}`], e[`color${D(r)}`], i && e.clickable, i && r !== "default" && e[`clickableColor${D(r)})`], l && e.deletable, l && r !== "default" && e[`deletableColor${D(r)}`], e[s], e[`${s}${D(r)}`]];
} })(ot(({ theme: t }) => {
  const e = t.palette.mode === "light" ? t.palette.grey[700] : t.palette.grey[300];
  return { maxWidth: "100%", fontFamily: t.typography.fontFamily, fontSize: t.typography.pxToRem(13), display: "inline-flex", alignItems: "center", justifyContent: "center", height: 32, color: (t.vars || t).palette.text.primary, backgroundColor: (t.vars || t).palette.action.selected, borderRadius: 32 / 2, whiteSpace: "nowrap", transition: t.transitions.create(["background-color", "box-shadow"]), cursor: "unset", outline: 0, textDecoration: "none", border: 0, padding: 0, verticalAlign: "middle", boxSizing: "border-box", [`&.${I.disabled}`]: { opacity: (t.vars || t).palette.action.disabledOpacity, pointerEvents: "none" }, [`& .${I.avatar}`]: { marginLeft: 5, marginRight: -6, width: 24, height: 24, color: t.vars ? t.vars.palette.Chip.defaultAvatarColor : e, fontSize: t.typography.pxToRem(12) }, [`& .${I.avatarColorPrimary}`]: { color: (t.vars || t).palette.primary.contrastText, backgroundColor: (t.vars || t).palette.primary.dark }, [`& .${I.avatarColorSecondary}`]: { color: (t.vars || t).palette.secondary.contrastText, backgroundColor: (t.vars || t).palette.secondary.dark }, [`& .${I.avatarSmall}`]: { marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: t.typography.pxToRem(10) }, [`& .${I.icon}`]: { marginLeft: 5, marginRight: -6 }, [`& .${I.deleteIcon}`]: { WebkitTapHighlightColor: "transparent", color: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.26)` : tt(t.palette.text.primary, 0.26), fontSize: 22, cursor: "pointer", margin: "0 5px 0 -6px", "&:hover": { color: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.4)` : tt(t.palette.text.primary, 0.4) } }, variants: [{ props: { size: "small" }, style: { height: 24, [`& .${I.icon}`]: { fontSize: 18, marginLeft: 4, marginRight: -4 }, [`& .${I.deleteIcon}`]: { fontSize: 16, marginRight: 4, marginLeft: -4 } } }, ...Object.entries(t.palette).filter(Tt(["contrastText"])).map(([o]) => ({ props: { color: o }, style: { backgroundColor: (t.vars || t).palette[o].main, color: (t.vars || t).palette[o].contrastText, [`& .${I.deleteIcon}`]: { color: t.vars ? `rgba(${t.vars.palette[o].contrastTextChannel} / 0.7)` : tt(t.palette[o].contrastText, 0.7), "&:hover, &:active": { color: (t.vars || t).palette[o].contrastText } } } })), { props: (o) => o.iconColor === o.color, style: { [`& .${I.icon}`]: { color: t.vars ? t.vars.palette.Chip.defaultIconColor : e } } }, { props: (o) => o.iconColor === o.color && o.color !== "default", style: { [`& .${I.icon}`]: { color: "inherit" } } }, { props: { onDelete: true }, style: { [`&.${I.focusVisible}`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : tt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.focusOpacity) } } }, ...Object.entries(t.palette).filter(Tt(["dark"])).map(([o]) => ({ props: { color: o, onDelete: true }, style: { [`&.${I.focusVisible}`]: { background: (t.vars || t).palette[o].dark } } })), { props: { clickable: true }, style: { userSelect: "none", WebkitTapHighlightColor: "transparent", cursor: "pointer", "&:hover": { backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : tt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity) }, [`&.${I.focusVisible}`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette.action.selectedChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : tt(t.palette.action.selected, t.palette.action.selectedOpacity + t.palette.action.focusOpacity) }, "&:active": { boxShadow: (t.vars || t).shadows[1] } } }, ...Object.entries(t.palette).filter(Tt(["dark"])).map(([o]) => ({ props: { color: o, clickable: true }, style: { [`&:hover, &.${I.focusVisible}`]: { backgroundColor: (t.vars || t).palette[o].dark } } })), { props: { variant: "outlined" }, style: { backgroundColor: "transparent", border: t.vars ? `1px solid ${t.vars.palette.Chip.defaultBorder}` : `1px solid ${t.palette.mode === "light" ? t.palette.grey[400] : t.palette.grey[700]}`, [`&.${I.clickable}:hover`]: { backgroundColor: (t.vars || t).palette.action.hover }, [`&.${I.focusVisible}`]: { backgroundColor: (t.vars || t).palette.action.focus }, [`& .${I.avatar}`]: { marginLeft: 4 }, [`& .${I.avatarSmall}`]: { marginLeft: 2 }, [`& .${I.icon}`]: { marginLeft: 4 }, [`& .${I.iconSmall}`]: { marginLeft: 2 }, [`& .${I.deleteIcon}`]: { marginRight: 5 }, [`& .${I.deleteIconSmall}`]: { marginRight: 3 } } }, ...Object.entries(t.palette).filter(Tt()).map(([o]) => ({ props: { variant: "outlined", color: o }, style: { color: (t.vars || t).palette[o].main, border: `1px solid ${t.vars ? `rgba(${t.vars.palette[o].mainChannel} / 0.7)` : tt(t.palette[o].main, 0.7)}`, [`&.${I.clickable}:hover`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : tt(t.palette[o].main, t.palette.action.hoverOpacity) }, [`&.${I.focusVisible}`]: { backgroundColor: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / ${t.vars.palette.action.focusOpacity})` : tt(t.palette[o].main, t.palette.action.focusOpacity) }, [`& .${I.deleteIcon}`]: { color: t.vars ? `rgba(${t.vars.palette[o].mainChannel} / 0.7)` : tt(t.palette[o].main, 0.7), "&:hover, &:active": { color: (t.vars || t).palette[o].main } } } }))] };
})), Wn = U("span", { name: "MuiChip", slot: "Label", overridesResolver: (t, e) => {
  const { ownerState: o } = t, { size: r } = o;
  return [e.label, e[`label${D(r)}`]];
} })({ overflow: "hidden", textOverflow: "ellipsis", paddingLeft: 12, paddingRight: 12, whiteSpace: "nowrap", variants: [{ props: { variant: "outlined" }, style: { paddingLeft: 11, paddingRight: 11 } }, { props: { size: "small" }, style: { paddingLeft: 8, paddingRight: 8 } }, { props: { size: "small", variant: "outlined" }, style: { paddingLeft: 7, paddingRight: 7 } }] });
function Qe(t) {
  return t.key === "Backspace" || t.key === "Delete";
}
const ra = at(function(e, o) {
  const r = gt({ props: e, name: "MuiChip" }), { avatar: n, className: i, clickable: l, color: a = "default", component: s, deleteIcon: c, disabled: p = false, icon: f, label: $, onClick: u, onDelete: y, onKeyDown: v, onKeyUp: b, size: m = "medium", variant: P = "filled", tabIndex: h, skipFocusWhenDisabled: d = false, ...x } = r, g = ct(null), C = re(g, o), M = (W) => {
    W.stopPropagation(), y && y(W);
  }, E = (W) => {
    W.currentTarget === W.target && Qe(W) && W.preventDefault(), v && v(W);
  }, w = (W) => {
    W.currentTarget === W.target && y && Qe(W) && y(W), b && b(W);
  }, S = l !== false && u ? true : l, B = S || y ? $e : s || "div", A = { ...r, component: B, disabled: p, size: m, color: a, iconColor: Qt(f) && f.props.color || a, onDelete: !!y, clickable: S, variant: P }, z = zn(A), j = B === $e ? { component: s || "div", focusVisibleClassName: z.focusVisible, ...y && { disableRipple: true } } : {};
  let L = null;
  y && (L = c && Qt(c) ? me(c, { className: _(c.props.className, z.deleteIcon), onClick: M }) : O(Dn, { className: _(z.deleteIcon), onClick: M }));
  let k = null;
  n && Qt(n) && (k = me(n, { className: _(z.avatar, n.props.className) }));
  let F = null;
  return f && Qt(f) && (F = me(f, { className: _(z.icon, f.props.className) })), Wt(Bn, { as: B, className: _(z.root, i), disabled: S && p ? true : void 0, onClick: u, onKeyDown: E, onKeyUp: w, ref: C, tabIndex: d && p ? -1 : h, ownerState: A, ...j, ...x, children: [k || F, O(Wn, { className: _(z.label), ownerState: A, children: $ }), L] });
});
function Nn(t) {
  return ft("MuiDialogActions", t);
}
vt("MuiDialogActions", ["root", "spacing"]);
const jn = (t) => {
  const { classes: e, disableSpacing: o } = t;
  return mt({ root: ["root", !o && "spacing"] }, Nn, e);
}, Fn = U("div", { name: "MuiDialogActions", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, !o.disableSpacing && e.spacing];
} })({ display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end", flex: "0 0 auto", variants: [{ props: ({ ownerState: t }) => !t.disableSpacing, style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } } }] }), na = at(function(e, o) {
  const r = gt({ props: e, name: "MuiDialogActions" }), { className: n, disableSpacing: i = false, ...l } = r, a = { ...r, disableSpacing: i }, s = jn(a);
  return O(Fn, { className: _(s.root, n), ownerState: a, ref: o, ...l });
});
function Hn(t) {
  return ft("MuiDialogContentText", t);
}
vt("MuiDialogContentText", ["root"]);
const Un = (t) => {
  const { classes: e } = t, r = mt({ root: ["root"] }, Hn, e);
  return { ...e, ...r };
}, Vn = U(No, { shouldForwardProp: (t) => jo(t) || t === "classes", name: "MuiDialogContentText", slot: "Root", overridesResolver: (t, e) => e.root })({}), aa = at(function(e, o) {
  const r = gt({ props: e, name: "MuiDialogContentText" }), { children: n, className: i, ...l } = r, a = Un(l);
  return O(Vn, { component: "p", variant: "body1", color: "textSecondary", ref: o, ownerState: l, className: _(a.root, i), ...r, classes: a });
});
function _n(t) {
  return ft("MuiTooltip", t);
}
const H = vt("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function qn(t) {
  return Math.round(t * 1e5) / 1e5;
}
const Gn = (t) => {
  const { classes: e, disableInteractive: o, arrow: r, touch: n, placement: i } = t, l = { popper: ["popper", !o && "popperInteractive", r && "popperArrow"], tooltip: ["tooltip", r && "tooltipArrow", n && "touch", `tooltipPlacement${D(i.split("-")[0])}`], arrow: ["arrow"] };
  return mt(l, _n, e);
}, Kn = U(ho, { name: "MuiTooltip", slot: "Popper", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.popper, !o.disableInteractive && e.popperInteractive, o.arrow && e.popperArrow, !o.open && e.popperClose];
} })(ot(({ theme: t }) => ({ zIndex: (t.vars || t).zIndex.tooltip, pointerEvents: "none", variants: [{ props: ({ ownerState: e }) => !e.disableInteractive, style: { pointerEvents: "auto" } }, { props: ({ open: e }) => !e, style: { pointerEvents: "none" } }, { props: ({ ownerState: e }) => e.arrow, style: { [`&[data-popper-placement*="bottom"] .${H.arrow}`]: { top: 0, marginTop: "-0.71em", "&::before": { transformOrigin: "0 100%" } }, [`&[data-popper-placement*="top"] .${H.arrow}`]: { bottom: 0, marginBottom: "-0.71em", "&::before": { transformOrigin: "100% 0" } }, [`&[data-popper-placement*="right"] .${H.arrow}`]: { height: "1em", width: "0.71em", "&::before": { transformOrigin: "100% 100%" } }, [`&[data-popper-placement*="left"] .${H.arrow}`]: { height: "1em", width: "0.71em", "&::before": { transformOrigin: "0 0" } } } }, { props: ({ ownerState: e }) => e.arrow && !e.isRtl, style: { [`&[data-popper-placement*="right"] .${H.arrow}`]: { left: 0, marginLeft: "-0.71em" } } }, { props: ({ ownerState: e }) => e.arrow && !!e.isRtl, style: { [`&[data-popper-placement*="right"] .${H.arrow}`]: { right: 0, marginRight: "-0.71em" } } }, { props: ({ ownerState: e }) => e.arrow && !e.isRtl, style: { [`&[data-popper-placement*="left"] .${H.arrow}`]: { right: 0, marginRight: "-0.71em" } } }, { props: ({ ownerState: e }) => e.arrow && !!e.isRtl, style: { [`&[data-popper-placement*="left"] .${H.arrow}`]: { left: 0, marginLeft: "-0.71em" } } }] }))), Xn = U("div", { name: "MuiTooltip", slot: "Tooltip", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.tooltip, o.touch && e.touch, o.arrow && e.tooltipArrow, e[`tooltipPlacement${D(o.placement.split("-")[0])}`]];
} })(ot(({ theme: t }) => ({ backgroundColor: t.vars ? t.vars.palette.Tooltip.bg : tt(t.palette.grey[700], 0.92), borderRadius: (t.vars || t).shape.borderRadius, color: (t.vars || t).palette.common.white, fontFamily: t.typography.fontFamily, padding: "4px 8px", fontSize: t.typography.pxToRem(11), maxWidth: 300, margin: 2, wordWrap: "break-word", fontWeight: t.typography.fontWeightMedium, [`.${H.popper}[data-popper-placement*="left"] &`]: { transformOrigin: "right center" }, [`.${H.popper}[data-popper-placement*="right"] &`]: { transformOrigin: "left center" }, [`.${H.popper}[data-popper-placement*="top"] &`]: { transformOrigin: "center bottom", marginBottom: "14px" }, [`.${H.popper}[data-popper-placement*="bottom"] &`]: { transformOrigin: "center top", marginTop: "14px" }, variants: [{ props: ({ ownerState: e }) => e.arrow, style: { position: "relative", margin: 0 } }, { props: ({ ownerState: e }) => e.touch, style: { padding: "8px 16px", fontSize: t.typography.pxToRem(14), lineHeight: `${qn(16 / 14)}em`, fontWeight: t.typography.fontWeightRegular } }, { props: ({ ownerState: e }) => !e.isRtl, style: { [`.${H.popper}[data-popper-placement*="left"] &`]: { marginRight: "14px" }, [`.${H.popper}[data-popper-placement*="right"] &`]: { marginLeft: "14px" } } }, { props: ({ ownerState: e }) => !e.isRtl && e.touch, style: { [`.${H.popper}[data-popper-placement*="left"] &`]: { marginRight: "24px" }, [`.${H.popper}[data-popper-placement*="right"] &`]: { marginLeft: "24px" } } }, { props: ({ ownerState: e }) => !!e.isRtl, style: { [`.${H.popper}[data-popper-placement*="left"] &`]: { marginLeft: "14px" }, [`.${H.popper}[data-popper-placement*="right"] &`]: { marginRight: "14px" } } }, { props: ({ ownerState: e }) => !!e.isRtl && e.touch, style: { [`.${H.popper}[data-popper-placement*="left"] &`]: { marginLeft: "24px" }, [`.${H.popper}[data-popper-placement*="right"] &`]: { marginRight: "24px" } } }, { props: ({ ownerState: e }) => e.touch, style: { [`.${H.popper}[data-popper-placement*="top"] &`]: { marginBottom: "24px" } } }, { props: ({ ownerState: e }) => e.touch, style: { [`.${H.popper}[data-popper-placement*="bottom"] &`]: { marginTop: "24px" } } }] }))), Yn = U("span", { name: "MuiTooltip", slot: "Arrow", overridesResolver: (t, e) => e.arrow })(ot(({ theme: t }) => ({ overflow: "hidden", position: "absolute", width: "1em", height: "0.71em", boxSizing: "border-box", color: t.vars ? t.vars.palette.Tooltip.bg : tt(t.palette.grey[700], 0.9), "&::before": { content: '""', margin: "auto", display: "block", width: "100%", height: "100%", backgroundColor: "currentColor", transform: "rotate(45deg)" } })));
let ve = false;
const to = new Vo();
let Jt = { x: 0, y: 0 };
function ge(t, e) {
  return (o, ...r) => {
    e && e(o, ...r), t(o, ...r);
  };
}
const ia = at(function(e, o) {
  const r = gt({ props: e, name: "MuiTooltip" }), { arrow: n = false, children: i, classes: l, components: a = {}, componentsProps: s = {}, describeChild: c = false, disableFocusListener: p = false, disableHoverListener: f = false, disableInteractive: $ = false, disableTouchListener: u = false, enterDelay: y = 100, enterNextDelay: v = 0, enterTouchDelay: b = 700, followCursor: m = false, id: P, leaveDelay: h = 0, leaveTouchDelay: d = 1500, onClose: x, onOpen: g, open: C, placement: M = "bottom", PopperComponent: E, PopperProps: w = {}, slotProps: S = {}, slots: B = {}, title: A, TransitionComponent: z, TransitionProps: j, ...L } = r, k = Qt(i) ? i : O("span", { children: i }), F = oo(), W = ao(), [J, xt] = Bt(), [it, wt] = Bt(null), X = ct(false), Y = $ || m, R = te(), V = te(), N = te(), Q = te(), [Ct, yt] = ro({ controlled: C, default: false, name: "Tooltip", state: "open" });
  let st = Ct;
  const kt = Fo(P), St = ct(), It = je(() => {
    St.current !== void 0 && (document.body.style.WebkitUserSelect = St.current, St.current = void 0), Q.clear();
  });
  ye(() => It, [It]);
  const Ut = (T) => {
    to.clear(), ve = true, yt(true), g && !st && g(T);
  }, Ot = je((T) => {
    to.start(800 + h, () => {
      ve = false;
    }), yt(false), x && st && x(T), R.start(F.transitions.duration.shortest, () => {
      X.current = false;
    });
  }), Dt = (T) => {
    X.current && T.type !== "touchstart" || (J && J.removeAttribute("title"), V.clear(), N.clear(), y || ve && v ? V.start(ve ? v : y, () => {
      Ut(T);
    }) : Ut(T));
  }, Vt = (T) => {
    V.clear(), N.start(h, () => {
      Ot(T);
    });
  }, [, pt] = Bt(false), Rt = (T) => {
    Fe(T.target) || (pt(false), Vt(T));
  }, _t = (T) => {
    J || xt(T.currentTarget), Fe(T.target) && (pt(true), Dt(T));
  }, qt = (T) => {
    X.current = true;
    const $t = k.props;
    $t.onTouchStart && $t.onTouchStart(T);
  }, Gt = (T) => {
    qt(T), N.clear(), R.clear(), It(), St.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(b, () => {
      document.body.style.WebkitUserSelect = St.current, Dt(T);
    });
  }, le = (T) => {
    k.props.onTouchEnd && k.props.onTouchEnd(T), It(), N.start(d, () => {
      Ot(T);
    });
  };
  ye(() => {
    if (!st) return;
    function T($t) {
      $t.key === "Escape" && Ot($t);
    }
    return document.addEventListener("keydown", T), () => {
      document.removeEventListener("keydown", T);
    };
  }, [Ot, st]);
  const pe = re(Ho(k), xt, o);
  !A && A !== 0 && (st = false);
  const Lt = ct(), ce = (T) => {
    const $t = k.props;
    $t.onMouseMove && $t.onMouseMove(T), Jt = { x: T.clientX, y: T.clientY }, Lt.current && Lt.current.update();
  }, Kt = {}, we = typeof A == "string";
  c ? (Kt.title = !st && we && !f ? A : null, Kt["aria-describedby"] = st ? kt : null) : (Kt["aria-label"] = we ? A : null, Kt["aria-labelledby"] = st && !we ? kt : null);
  const lt = { ...Kt, ...L, ...k.props, className: _(L.className, k.props.className), onTouchStart: qt, ref: pe, ...m ? { onMouseMove: ce } : {} }, Xt = {};
  u || (lt.onTouchStart = Gt, lt.onTouchEnd = le), f || (lt.onMouseOver = ge(Dt, lt.onMouseOver), lt.onMouseLeave = ge(Vt, lt.onMouseLeave), Y || (Xt.onMouseOver = Dt, Xt.onMouseLeave = Vt)), p || (lt.onFocus = ge(_t, lt.onFocus), lt.onBlur = ge(Rt, lt.onBlur), Y || (Xt.onFocus = _t, Xt.onBlur = Rt));
  const At = { ...r, isRtl: W, arrow: n, disableInteractive: Y, placement: M, PopperComponentProp: E, touch: X.current }, Yt = typeof S.popper == "function" ? S.popper(At) : S.popper, yo = eo(() => {
    var _a, _b;
    let T = [{ name: "arrow", enabled: !!it, options: { element: it, padding: 4 } }];
    return ((_a = w.popperOptions) == null ? void 0 : _a.modifiers) && (T = T.concat(w.popperOptions.modifiers)), ((_b = Yt == null ? void 0 : Yt.popperOptions) == null ? void 0 : _b.modifiers) && (T = T.concat(Yt.popperOptions.modifiers)), { ...w.popperOptions, ...Yt == null ? void 0 : Yt.popperOptions, modifiers: T };
  }, [it, w.popperOptions, Yt == null ? void 0 : Yt.popperOptions]), Ce = Gn(At), bo = typeof S.transition == "function" ? S.transition(At) : S.transition, de = { slots: { popper: a.Popper, transition: a.Transition ?? z, tooltip: a.Tooltip, arrow: a.Arrow, ...B }, slotProps: { arrow: S.arrow ?? s.arrow, popper: { ...w, ...Yt ?? s.popper }, tooltip: S.tooltip ?? s.tooltip, transition: { ...j, ...bo ?? s.transition } } }, [xo, wo] = q("popper", { elementType: Kn, externalForwardedProps: de, ownerState: At, className: _(Ce.popper, w == null ? void 0 : w.className) }), [Co, $o] = q("transition", { elementType: Uo, externalForwardedProps: de, ownerState: At }), [Po, So] = q("tooltip", { elementType: Xn, className: Ce.tooltip, externalForwardedProps: de, ownerState: At }), [Oo, Ro] = q("arrow", { elementType: Yn, className: Ce.arrow, externalForwardedProps: de, ownerState: At, ref: wt });
  return Wt(Io, { children: [me(k, lt), O(xo, { as: E ?? ho, placement: M, anchorEl: m ? { getBoundingClientRect: () => ({ top: Jt.y, left: Jt.x, right: Jt.x, bottom: Jt.y, width: 0, height: 0 }) } : J, popperRef: Lt, open: J ? st : false, id: kt, transition: true, ...Xt, ...wo, popperOptions: yo, children: ({ TransitionProps: T }) => O(Co, { timeout: F.transitions.duration.shorter, ...T, ...$o, children: Wt(Po, { ...So, children: [A, n ? O(Oo, { ...Ro }) : null] }) }) })] });
}), sa = ht(O("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" }), "KeyboardArrowLeft"), la = ht(O("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" }), "KeyboardArrowRight"), pa = ht(O("path", { d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }), "Check"), ca = ht(O("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }), "ExpandMore");
export {
  Qn as A,
  ra as C,
  aa as D,
  ca as E,
  la as K,
  ho as P,
  ia as T,
  sa as a,
  na as b,
  pa as c,
  ea as d,
  ta as e,
  oa as f,
  fr as g,
  Pe as h
};
