import { o as it, i as s, f as T, v as ne, w as le, j as g, x as Yt, m as st, l as N, h as lt, z as De, u as Fe, k as $e, H as Ne } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as at, f as ct, u as dt, s as F, h as P, j as q, i as ut, m as pt, b0 as gt, a as xt, v as se, T as W, N as He, b1 as jt, c as ie, aa as Oe, b2 as ae, b3 as ce, n as de, a0 as Ct, Q as Lt, p as j, ah as Ue, d as Rt, G as V, I as qt, B as S, b as Q } from "./usePopoverPositioning-DyzF99R9.js";
import { D as Ke, a as Ve, b as Xe } from "./DialogTitle-CJ37XAIs.js";
import { a as Ge, K as Ye, D as je, b as qe, T as Qt, A as Qe, d as Je, C as Ze, E as ue, e as to, h as eo } from "./ExpandMore-BbzlpSTZ.js";
import { B as Jt } from "./Button-lNrCVlWO.js";
import { S as pe } from "./Slider-jucZjQ77.js";
import { M as oo } from "./MenuItem-gWYWtG25.js";
import { S as ro } from "./Switch-DUJn33o3.js";
function no(t) {
  return at("MuiListSubheader", t);
}
ct("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const lo = (t) => {
  const { classes: e, color: o, disableGutters: r, inset: n, disableSticky: l } = t, a = { root: ["root", o !== "default" && `color${q(o)}`, !r && "gutters", n && "inset", !l && "sticky"] };
  return ut(a, no, e);
}, so = F("li", { name: "MuiListSubheader", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, o.color !== "default" && e[`color${q(o.color)}`], !o.disableGutters && e.gutters, o.inset && e.inset, !o.disableSticky && e.sticky];
} })(pt(({ theme: t }) => ({ boxSizing: "border-box", lineHeight: "48px", listStyle: "none", color: (t.vars || t).palette.text.secondary, fontFamily: t.typography.fontFamily, fontWeight: t.typography.fontWeightMedium, fontSize: t.typography.pxToRem(14), variants: [{ props: { color: "primary" }, style: { color: (t.vars || t).palette.primary.main } }, { props: { color: "inherit" }, style: { color: "inherit" } }, { props: ({ ownerState: e }) => !e.disableGutters, style: { paddingLeft: 16, paddingRight: 16 } }, { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 72 } }, { props: ({ ownerState: e }) => !e.disableSticky, style: { position: "sticky", top: 0, zIndex: 1, backgroundColor: (t.vars || t).palette.background.paper } }] }))), Zt = it(function(e, o) {
  const r = dt({ props: e, name: "MuiListSubheader" }), { className: n, color: l = "default", component: a = "li", disableGutters: p = false, disableSticky: d = false, inset: u = false, ...b } = r, f = { ...r, color: l, component: a, disableGutters: p, disableSticky: d, inset: u }, m = lo(f);
  return s(so, { as: a, className: P(m.root, n), ref: o, ownerState: f, ...b });
});
Zt && (Zt.muiSkipListHighlight = true);
function io(t) {
  return at("MuiLink", t);
}
const ao = ct("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), co = ({ theme: t, ownerState: e }) => {
  const o = e.color, r = gt(t, `palette.${o}.main`, false) || gt(t, `palette.${o}`, false) || e.color, n = gt(t, `palette.${o}.mainChannel`) || gt(t, `palette.${o}Channel`);
  return "vars" in t && n ? `rgba(${n} / 0.4)` : xt(r, 0.4);
}, te = { primary: true, secondary: true, error: true, info: true, success: true, warning: true, textPrimary: true, textSecondary: true, textDisabled: true }, uo = (t) => {
  const { classes: e, component: o, focusVisible: r, underline: n } = t, l = { root: ["root", `underline${q(n)}`, o === "button" && "button", r && "focusVisible"] };
  return ut(l, io, e);
}, po = F(W, { name: "MuiLink", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, e[`underline${q(o.underline)}`], o.component === "button" && e.button];
} })(pt(({ theme: t }) => ({ variants: [{ props: { underline: "none" }, style: { textDecoration: "none" } }, { props: { underline: "hover" }, style: { textDecoration: "none", "&:hover": { textDecoration: "underline" } } }, { props: { underline: "always" }, style: { textDecoration: "underline", "&:hover": { textDecorationColor: "inherit" } } }, { props: ({ underline: e, ownerState: o }) => e === "always" && o.color !== "inherit", style: { textDecorationColor: "var(--Link-underlineColor)" } }, ...Object.entries(t.palette).filter(He()).map(([e]) => ({ props: { underline: "always", color: e }, style: { "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette[e].mainChannel} / 0.4)` : xt(t.palette[e].main, 0.4) } })), { props: { underline: "always", color: "textPrimary" }, style: { "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / 0.4)` : xt(t.palette.text.primary, 0.4) } }, { props: { underline: "always", color: "textSecondary" }, style: { "--Link-underlineColor": t.vars ? `rgba(${t.vars.palette.text.secondaryChannel} / 0.4)` : xt(t.palette.text.secondary, 0.4) } }, { props: { underline: "always", color: "textDisabled" }, style: { "--Link-underlineColor": (t.vars || t).palette.text.disabled } }, { props: { component: "button" }, style: { position: "relative", WebkitTapHighlightColor: "transparent", backgroundColor: "transparent", outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: "pointer", userSelect: "none", verticalAlign: "middle", MozAppearance: "none", WebkitAppearance: "none", "&::-moz-focus-inner": { borderStyle: "none" }, [`&.${ao.focusVisible}`]: { outline: "auto" } } }] }))), Go = it(function(e, o) {
  const r = dt({ props: e, name: "MuiLink" }), n = se(), { className: l, color: a = "primary", component: p = "a", onBlur: d, onFocus: u, TypographyClasses: b, underline: f = "always", variant: m = "inherit", sx: x, ..._ } = r, [w, C] = T(false), X = (B) => {
    jt(B.target) || C(false), d && d(B);
  }, I = (B) => {
    jt(B.target) && C(true), u && u(B);
  }, H = { ...r, color: a, component: p, focusVisible: w, underline: f, variant: m }, M = uo(H);
  return s(po, { color: a, className: P(M.root, l), classes: b, component: p, onBlur: X, onFocus: I, ref: o, ownerState: H, variant: m, ..._, sx: [...te[a] === void 0 ? [{ color: a }] : [], ...Array.isArray(x) ? x : [x]], style: { ..._.style, ...f === "always" && a !== "inherit" && !te[a] && { "--Link-underlineColor": co({ theme: n, ownerState: H }) } } });
});
function bo(t) {
  return at("MuiTab", t);
}
const k = ct("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]), fo = (t) => {
  const { classes: e, textColor: o, fullWidth: r, wrapped: n, icon: l, label: a, selected: p, disabled: d } = t, u = { root: ["root", l && a && "labelIcon", `textColor${q(o)}`, r && "fullWidth", n && "wrapped", p && "selected", d && "disabled"], icon: ["iconWrapper", "icon"] };
  return ut(u, bo, e);
}, ho = F(ie, { name: "MuiTab", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, o.label && o.icon && e.labelIcon, e[`textColor${q(o.textColor)}`], o.fullWidth && e.fullWidth, o.wrapped && e.wrapped, { [`& .${k.iconWrapper}`]: e.iconWrapper }, { [`& .${k.icon}`]: e.icon }];
} })(pt(({ theme: t }) => ({ ...t.typography.button, maxWidth: 360, minWidth: 90, position: "relative", minHeight: 48, flexShrink: 0, padding: "12px 16px", overflow: "hidden", whiteSpace: "normal", textAlign: "center", lineHeight: 1.25, variants: [{ props: ({ ownerState: e }) => e.label && (e.iconPosition === "top" || e.iconPosition === "bottom"), style: { flexDirection: "column" } }, { props: ({ ownerState: e }) => e.label && e.iconPosition !== "top" && e.iconPosition !== "bottom", style: { flexDirection: "row" } }, { props: ({ ownerState: e }) => e.icon && e.label, style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 } }, { props: ({ ownerState: e, iconPosition: o }) => e.icon && e.label && o === "top", style: { [`& > .${k.icon}`]: { marginBottom: 6 } } }, { props: ({ ownerState: e, iconPosition: o }) => e.icon && e.label && o === "bottom", style: { [`& > .${k.icon}`]: { marginTop: 6 } } }, { props: ({ ownerState: e, iconPosition: o }) => e.icon && e.label && o === "start", style: { [`& > .${k.icon}`]: { marginRight: t.spacing(1) } } }, { props: ({ ownerState: e, iconPosition: o }) => e.icon && e.label && o === "end", style: { [`& > .${k.icon}`]: { marginLeft: t.spacing(1) } } }, { props: { textColor: "inherit" }, style: { color: "inherit", opacity: 0.6, [`&.${k.selected}`]: { opacity: 1 }, [`&.${k.disabled}`]: { opacity: (t.vars || t).palette.action.disabledOpacity } } }, { props: { textColor: "primary" }, style: { color: (t.vars || t).palette.text.secondary, [`&.${k.selected}`]: { color: (t.vars || t).palette.primary.main }, [`&.${k.disabled}`]: { color: (t.vars || t).palette.text.disabled } } }, { props: { textColor: "secondary" }, style: { color: (t.vars || t).palette.text.secondary, [`&.${k.selected}`]: { color: (t.vars || t).palette.secondary.main }, [`&.${k.disabled}`]: { color: (t.vars || t).palette.text.disabled } } }, { props: ({ ownerState: e }) => e.fullWidth, style: { flexShrink: 1, flexGrow: 1, flexBasis: 0, maxWidth: "none" } }, { props: ({ ownerState: e }) => e.wrapped, style: { fontSize: t.typography.pxToRem(12) } }] }))), mo = it(function(e, o) {
  const r = dt({ props: e, name: "MuiTab" }), { className: n, disabled: l = false, disableFocusRipple: a = false, fullWidth: p, icon: d, iconPosition: u = "top", indicator: b, label: f, onChange: m, onClick: x, onFocus: _, selected: w, selectionFollowsFocus: C, textColor: X = "inherit", value: I, wrapped: H = false, ...M } = r, B = { ...r, disabled: l, disableFocusRipple: a, selected: w, icon: !!d, iconPosition: u, label: !!f, fullWidth: p, textColor: X, wrapped: H }, Z = fo(B), tt = d && f && ne(d) ? le(d, { className: P(Z.icon, d.props.className) }) : d, bt = (z) => {
    !w && m && m(z, I), x && x(z);
  }, G = (z) => {
    C && !w && m && m(z, I), _ && _(z);
  };
  return g(ho, { focusRipple: !a, className: P(Z.root, n), ref: o, role: "tab", "aria-selected": w, disabled: l, onClick: bt, onFocus: G, ownerState: B, tabIndex: w ? 0 : -1, ...M, children: [u === "top" || u === "start" ? g(Yt, { children: [tt, f] }) : g(Yt, { children: [f, tt] }), b] });
});
function yo(t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
}
function go(t, e, o, r = {}, n = () => {
}) {
  const { ease: l = yo, duration: a = 300 } = r;
  let p = null;
  const d = e[t];
  let u = false;
  const b = () => {
    u = true;
  }, f = (m) => {
    if (u) {
      n(new Error("Animation cancelled"));
      return;
    }
    p === null && (p = m);
    const x = Math.min(1, (m - p) / a);
    if (e[t] = l(x) * (o - d) + d, x >= 1) {
      requestAnimationFrame(() => {
        n(null);
      });
      return;
    }
    requestAnimationFrame(f);
  };
  return d === o ? (n(new Error("Element already at target position")), b) : (requestAnimationFrame(f), b);
}
const So = { width: 99, height: 99, position: "absolute", top: -9999, overflow: "scroll" };
function vo(t) {
  const { onChange: e, ...o } = t, r = st(), n = st(null), l = () => {
    r.current = n.current.offsetHeight - n.current.clientHeight;
  };
  return Oe(() => {
    const a = ae(() => {
      const d = r.current;
      l(), d !== r.current && e(r.current);
    }), p = ce(n.current);
    return p.addEventListener("resize", a), () => {
      a.clear(), p.removeEventListener("resize", a);
    };
  }, [e]), N(() => {
    l(), e(r.current);
  }, [e]), s("div", { style: So, ...o, ref: n });
}
function xo(t) {
  return at("MuiTabScrollButton", t);
}
const Co = ct("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), wo = (t) => {
  const { classes: e, orientation: o, disabled: r } = t;
  return ut({ root: ["root", o, r && "disabled"] }, xo, e);
}, Bo = F(ie, { name: "MuiTabScrollButton", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.root, o.orientation && e[o.orientation]];
} })({ width: 40, flexShrink: 0, opacity: 0.8, [`&.${Co.disabled}`]: { opacity: 0 }, variants: [{ props: { orientation: "vertical" }, style: { width: "100%", height: 40, "& svg": { transform: "var(--TabScrollButton-svgRotate)" } } }] }), ko = it(function(e, o) {
  const r = dt({ props: e, name: "MuiTabScrollButton" }), { className: n, slots: l = {}, slotProps: a = {}, direction: p, orientation: d, disabled: u, ...b } = r, f = de(), m = { isRtl: f, ...r }, x = wo(m), _ = l.StartScrollButtonIcon ?? Ge, w = l.EndScrollButtonIcon ?? Ye, C = Ct({ elementType: _, externalSlotProps: a.startScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: m }), X = Ct({ elementType: w, externalSlotProps: a.endScrollButtonIcon, additionalProps: { fontSize: "small" }, ownerState: m });
  return s(Bo, { component: "div", className: P(x.root, n), ref: o, role: null, ownerState: m, tabIndex: null, ...b, style: { ...b.style, ...d === "vertical" && { "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)` } }, children: p === "left" ? s(_, { ...C }) : s(w, { ...X }) });
});
function To(t) {
  return at("MuiTabs", t);
}
const _t = ct("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), ee = (t, e) => t === e ? t.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t.firstChild, oe = (t, e) => t === e ? t.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t.lastChild, St = (t, e, o) => {
  let r = false, n = o(t, e);
  for (; n; ) {
    if (n === t.firstChild) {
      if (r) return;
      r = true;
    }
    const l = n.disabled || n.getAttribute("aria-disabled") === "true";
    if (!n.hasAttribute("tabindex") || l) n = o(t, n);
    else {
      n.focus();
      return;
    }
  }
}, Io = (t) => {
  const { vertical: e, fixed: o, hideScrollbar: r, scrollableX: n, scrollableY: l, centered: a, scrollButtonsHideMobile: p, classes: d } = t;
  return ut({ root: ["root", e && "vertical"], scroller: ["scroller", o && "fixed", r && "hideScrollbar", n && "scrollableX", l && "scrollableY"], list: ["list", "flexContainer", e && "flexContainerVertical", e && "vertical", a && "centered"], indicator: ["indicator"], scrollButtons: ["scrollButtons", p && "scrollButtonsHideMobile"], scrollableX: [n && "scrollableX"], hideScrollbar: [r && "hideScrollbar"] }, To, d);
}, Mo = F("div", { name: "MuiTabs", slot: "Root", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [{ [`& .${_t.scrollButtons}`]: e.scrollButtons }, { [`& .${_t.scrollButtons}`]: o.scrollButtonsHideMobile && e.scrollButtonsHideMobile }, e.root, o.vertical && e.vertical];
} })(pt(({ theme: t }) => ({ overflow: "hidden", minHeight: 48, WebkitOverflowScrolling: "touch", display: "flex", variants: [{ props: ({ ownerState: e }) => e.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: e }) => e.scrollButtonsHideMobile, style: { [`& .${_t.scrollButtons}`]: { [t.breakpoints.down("sm")]: { display: "none" } } } }] }))), Lo = F("div", { name: "MuiTabs", slot: "Scroller", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.scroller, o.fixed && e.fixed, o.hideScrollbar && e.hideScrollbar, o.scrollableX && e.scrollableX, o.scrollableY && e.scrollableY];
} })({ position: "relative", display: "inline-block", flex: "1 1 auto", whiteSpace: "nowrap", variants: [{ props: ({ ownerState: t }) => t.fixed, style: { overflowX: "hidden", width: "100%" } }, { props: ({ ownerState: t }) => t.hideScrollbar, style: { scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } } }, { props: ({ ownerState: t }) => t.scrollableX, style: { overflowX: "auto", overflowY: "hidden" } }, { props: ({ ownerState: t }) => t.scrollableY, style: { overflowY: "auto", overflowX: "hidden" } }] }), _o = F("div", { name: "MuiTabs", slot: "List", overridesResolver: (t, e) => {
  const { ownerState: o } = t;
  return [e.list, e.flexContainer, o.vertical && e.flexContainerVertical, o.centered && e.centered];
} })({ display: "flex", variants: [{ props: ({ ownerState: t }) => t.vertical, style: { flexDirection: "column" } }, { props: ({ ownerState: t }) => t.centered, style: { justifyContent: "center" } }] }), Ro = F("span", { name: "MuiTabs", slot: "Indicator", overridesResolver: (t, e) => e.indicator })(pt(({ theme: t }) => ({ position: "absolute", height: 2, bottom: 0, width: "100%", transition: t.transitions.create(), variants: [{ props: { indicatorColor: "primary" }, style: { backgroundColor: (t.vars || t).palette.primary.main } }, { props: { indicatorColor: "secondary" }, style: { backgroundColor: (t.vars || t).palette.secondary.main } }, { props: ({ ownerState: e }) => e.vertical, style: { height: "100%", width: 2, right: 0 } }] }))), Eo = F(vo)({ overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }), re = {}, Po = it(function(e, o) {
  const r = dt({ props: e, name: "MuiTabs" }), n = se(), l = de(), { "aria-label": a, "aria-labelledby": p, action: d, centered: u = false, children: b, className: f, component: m = "div", allowScrollButtonsMobile: x = false, indicatorColor: _ = "primary", onChange: w, orientation: C = "horizontal", ScrollButtonComponent: X, scrollButtons: I = "auto", selectionFollowsFocus: H, slots: M = {}, slotProps: B = {}, TabIndicatorProps: Z = {}, TabScrollButtonProps: tt = {}, textColor: bt = "primary", value: G, variant: z = "standard", visibleScrollbar: Bt = false, ...be } = r, R = z === "scrollable", L = C === "vertical", et = L ? "scrollTop" : "scrollLeft", ft = L ? "top" : "left", ht = L ? "bottom" : "right", kt = L ? "clientHeight" : "clientWidth", ot = L ? "height" : "width", A = { ...r, component: m, allowScrollButtonsMobile: x, indicatorColor: _, orientation: C, vertical: L, scrollButtons: I, textColor: bt, variant: z, visibleScrollbar: Bt, fixed: !R, hideScrollbar: R && !Bt, scrollableX: R && !L, scrollableY: R && L, centered: u && !R, scrollButtonsHideMobile: !x }, $ = Io(A), fe = Ct({ elementType: M.StartScrollButtonIcon, externalSlotProps: B.startScrollButtonIcon, ownerState: A }), he = Ct({ elementType: M.EndScrollButtonIcon, externalSlotProps: B.endScrollButtonIcon, ownerState: A }), [Et, me] = T(false), [O, Pt] = T(re), [Wt, ye] = T(false), [zt, ge] = T(false), [At, Se] = T(false), [Dt, ve] = T({ overflow: "hidden", scrollbarWidth: 0 }), Ft = /* @__PURE__ */ new Map(), D = st(null), U = st(null), Y = { slots: M, slotProps: { indicator: Z, scrollButton: tt, ...B } }, $t = () => {
    const i = D.current;
    let c;
    if (i) {
      const h = i.getBoundingClientRect();
      c = { clientWidth: i.clientWidth, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop, scrollWidth: i.scrollWidth, top: h.top, bottom: h.bottom, left: h.left, right: h.right };
    }
    let y;
    if (i && G !== false) {
      const h = U.current.children;
      if (h.length > 0) {
        const v = h[Ft.get(G)];
        y = v ? v.getBoundingClientRect() : null;
      }
    }
    return { tabsMeta: c, tabMeta: y };
  }, rt = Lt(() => {
    const { tabsMeta: i, tabMeta: c } = $t();
    let y = 0, h;
    L ? (h = "top", c && i && (y = c.top - i.top + i.scrollTop)) : (h = l ? "right" : "left", c && i && (y = (l ? -1 : 1) * (c[h] - i[h] + i.scrollLeft)));
    const v = { [h]: y, [ot]: c ? c[ot] : 0 };
    if (typeof O[h] != "number" || typeof O[ot] != "number") Pt(v);
    else {
      const E = Math.abs(O[h] - v[h]), K = Math.abs(O[ot] - v[ot]);
      (E >= 1 || K >= 1) && Pt(v);
    }
  }), Tt = (i, { animation: c = true } = {}) => {
    c ? go(et, D.current, i, { duration: n.transitions.duration.standard }) : D.current[et] = i;
  }, Nt = (i) => {
    let c = D.current[et];
    L ? c += i : c += i * (l ? -1 : 1), Tt(c);
  }, Ht = () => {
    const i = D.current[kt];
    let c = 0;
    const y = Array.from(U.current.children);
    for (let h = 0; h < y.length; h += 1) {
      const v = y[h];
      if (c + v[kt] > i) {
        h === 0 && (c = i);
        break;
      }
      c += v[kt];
    }
    return c;
  }, xe = () => {
    Nt(-1 * Ht());
  }, Ce = () => {
    Nt(Ht());
  }, [we, { onChange: Ot, ...Be }] = j("scrollbar", { className: P($.scrollableX, $.hideScrollbar), elementType: Eo, shouldForwardComponentProp: true, externalForwardedProps: Y, ownerState: A }), ke = lt((i) => {
    Ot == null ? void 0 : Ot(i), ve({ overflow: null, scrollbarWidth: i });
  }, [Ot]), [Ut, Kt] = j("scrollButtons", { className: P($.scrollButtons, tt.className), elementType: ko, externalForwardedProps: Y, ownerState: A, additionalProps: { orientation: C, slots: { StartScrollButtonIcon: M.startScrollButtonIcon || M.StartScrollButtonIcon, EndScrollButtonIcon: M.endScrollButtonIcon || M.EndScrollButtonIcon }, slotProps: { startScrollButtonIcon: fe, endScrollButtonIcon: he } } }), Te = () => {
    const i = {};
    i.scrollbarSizeListener = R ? s(we, { ...Be, onChange: ke }) : null;
    const y = R && (I === "auto" && (Wt || zt) || I === true);
    return i.scrollButtonStart = y ? s(Ut, { direction: l ? "right" : "left", onClick: xe, disabled: !Wt, ...Kt }) : null, i.scrollButtonEnd = y ? s(Ut, { direction: l ? "left" : "right", onClick: Ce, disabled: !zt, ...Kt }) : null, i;
  }, Vt = Lt((i) => {
    const { tabsMeta: c, tabMeta: y } = $t();
    if (!(!y || !c)) {
      if (y[ft] < c[ft]) {
        const h = c[et] + (y[ft] - c[ft]);
        Tt(h, { animation: i });
      } else if (y[ht] > c[ht]) {
        const h = c[et] + (y[ht] - c[ht]);
        Tt(h, { animation: i });
      }
    }
  }), mt = Lt(() => {
    R && I !== false && Se(!At);
  });
  N(() => {
    const i = ae(() => {
      D.current && rt();
    });
    let c;
    const y = (E) => {
      E.forEach((K) => {
        K.removedNodes.forEach((nt) => {
          c == null ? void 0 : c.unobserve(nt);
        }), K.addedNodes.forEach((nt) => {
          c == null ? void 0 : c.observe(nt);
        });
      }), i(), mt();
    }, h = ce(D.current);
    h.addEventListener("resize", i);
    let v;
    return typeof ResizeObserver < "u" && (c = new ResizeObserver(i), Array.from(U.current.children).forEach((E) => {
      c.observe(E);
    })), typeof MutationObserver < "u" && (v = new MutationObserver(y), v.observe(U.current, { childList: true })), () => {
      i.clear(), h.removeEventListener("resize", i), v == null ? void 0 : v.disconnect(), c == null ? void 0 : c.disconnect();
    };
  }, [rt, mt]), N(() => {
    const i = Array.from(U.current.children), c = i.length;
    if (typeof IntersectionObserver < "u" && c > 0 && R && I !== false) {
      const y = i[0], h = i[c - 1], v = { root: D.current, threshold: 0.99 }, E = (Mt) => {
        ye(!Mt[0].isIntersecting);
      }, K = new IntersectionObserver(E, v);
      K.observe(y);
      const nt = (Mt) => {
        ge(!Mt[0].isIntersecting);
      }, Gt = new IntersectionObserver(nt, v);
      return Gt.observe(h), () => {
        K.disconnect(), Gt.disconnect();
      };
    }
  }, [R, I, At, b == null ? void 0 : b.length]), N(() => {
    me(true);
  }, []), N(() => {
    rt();
  }), N(() => {
    Vt(re !== O);
  }, [Vt, O]), De(d, () => ({ updateIndicator: rt, updateScrollButtons: mt }), [rt, mt]);
  const [Ie, Me] = j("indicator", { className: P($.indicator, Z.className), elementType: Ro, externalForwardedProps: Y, ownerState: A, additionalProps: { style: O } }), Xt = s(Ie, { ...Me });
  let yt = 0;
  const Le = Fe.map(b, (i) => {
    if (!ne(i)) return null;
    const c = i.props.value === void 0 ? yt : i.props.value;
    Ft.set(c, yt);
    const y = c === G;
    return yt += 1, le(i, { fullWidth: z === "fullWidth", indicator: y && !Et && Xt, selected: y, selectionFollowsFocus: H, onChange: w, textColor: bt, value: c, ...yt === 1 && G === false && !i.props.tabIndex ? { tabIndex: 0 } : {} });
  }), _e = (i) => {
    if (i.altKey || i.shiftKey || i.ctrlKey || i.metaKey) return;
    const c = U.current, y = Ue(c).activeElement;
    if (y.getAttribute("role") !== "tab") return;
    let v = C === "horizontal" ? "ArrowLeft" : "ArrowUp", E = C === "horizontal" ? "ArrowRight" : "ArrowDown";
    switch (C === "horizontal" && l && (v = "ArrowRight", E = "ArrowLeft"), i.key) {
      case v:
        i.preventDefault(), St(c, y, oe);
        break;
      case E:
        i.preventDefault(), St(c, y, ee);
        break;
      case "Home":
        i.preventDefault(), St(c, null, ee);
        break;
      case "End":
        i.preventDefault(), St(c, null, oe);
        break;
    }
  }, It = Te(), [Re, Ee] = j("root", { ref: o, className: P($.root, f), elementType: Mo, externalForwardedProps: { ...Y, ...be, component: m }, ownerState: A }), [Pe, We] = j("scroller", { ref: D, className: $.scroller, elementType: Lo, externalForwardedProps: Y, ownerState: A, additionalProps: { style: { overflow: Dt.overflow, [L ? `margin${l ? "Left" : "Right"}` : "marginBottom"]: Bt ? void 0 : -Dt.scrollbarWidth } } }), [ze, Ae] = j("list", { ref: U, className: P($.list, $.flexContainer), elementType: _o, externalForwardedProps: Y, ownerState: A, getSlotProps: (i) => ({ ...i, onKeyDown: (c) => {
    var _a;
    _e(c), (_a = i.onKeyDown) == null ? void 0 : _a.call(i, c);
  } }) });
  return g(Re, { ...Ee, children: [It.scrollButtonStart, It.scrollbarSizeListener, g(Pe, { ...We, children: [s(ze, { "aria-label": a, "aria-labelledby": p, "aria-orientation": C === "vertical" ? "vertical" : null, role: "tablist", ...Ae, children: Le }), Et && Xt] }), It.scrollButtonEnd] });
}), Yo = Rt(s("path", { d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5" }), "Link"), Wo = Rt(s("path", { d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7z" }), "Redo"), zo = Rt(s("path", { d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8" }), "Undo");
function jo({ open: t, text: e, onCancel: o, onConfirm: r }) {
  return g(Ke, { open: t, onClose: o, children: [s(Ve, { children: V.t("theme_studio_discard_title") }), s(Xe, { children: s(je, { children: e }) }), g(qe, { children: [s(Jt, { onClick: o, color: "inherit", children: V.t("cancel") }), s(Jt, { onClick: r, color: "error", variant: "contained", children: V.t("theme_studio_discard") })] })] });
}
function qo({ canUndo: t, canRedo: e, onUndo: o, onRedo: r, size: n = "small", sx: l }) {
  return g($e, { children: [s(Qt, { title: V.t("theme_studio_undo"), children: s("span", { children: s(qt, { onClick: o, disabled: !t, size: n, sx: l, "aria-label": V.t("theme_studio_undo"), children: s(zo, { fontSize: n }) }) }) }), s(Qt, { title: V.t("theme_studio_redo"), children: s("span", { children: s(qt, { onClick: r, disabled: !e, size: n, sx: l, "aria-label": V.t("theme_studio_redo"), children: s(Wo, { fontSize: n }) }) }) })] });
}
function Qo({ title: t, summary: e, issueCount: o = 0, expanded: r, onExpandedChange: n, children: l }) {
  const [a, p] = T(false), d = r ?? a, u = (b) => {
    r === void 0 && p(b), n == null ? void 0 : n(b);
  };
  return g(Qe, { expanded: d, onChange: (b, f) => u(f), disableGutters: true, elevation: 0, slotProps: { transition: { mountOnEnter: true } }, sx: { border: 1, borderColor: "divider", borderRadius: "12px !important", mb: 1, "&::before": { display: "none" }, overflow: "hidden" }, children: [g(Je, { expandIcon: s(ue, {}), sx: { minHeight: 44, "& .MuiAccordionSummary-content": { alignItems: "baseline", gap: 1 } }, children: [s(W, { variant: "body2", sx: { fontWeight: 600, flexShrink: 0 }, children: t }), !d && e ? s(W, { variant: "caption", color: "text.secondary", noWrap: true, sx: { flex: 1, minWidth: 0, textAlign: "right" }, children: e }) : null, o > 0 && s(Ze, { size: "small", color: "warning", variant: "outlined", label: `\u26A0 ${o}`, sx: { ml: "auto", flexShrink: 0 } })] }), s(to, { sx: { pt: 0.5 }, children: l })] });
}
const wt = { "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button": { WebkitAppearance: "none", margin: 0 }, "& input[type=number]": { MozAppearance: "textfield", appearance: "textfield" } }, J = ({ children: t }) => s(W, { variant: "caption", color: "text.secondary", noWrap: true, title: typeof t == "string" ? t : void 0, sx: { display: "block", mb: 0.5 }, children: t }), Jo = ({ label: t, value: e, onChange: o, options: r, disabled: n }) => g(S, { children: [s(J, { children: t }), s(Q, { select: true, size: "small", value: e, onChange: (l) => o(l.target.value), disabled: n, fullWidth: true, slotProps: { select: { displayEmpty: true } }, children: r.map(([l, a]) => s(oo, { value: l, children: a }, l)) })] }), Zo = ({ label: t, value: e, onChange: o, step: r = 1, error: n, helperText: l, disabled: a }) => g(S, { children: [s(J, { children: t }), s(Q, { size: "small", type: "number", value: e, inputProps: { step: r }, onChange: (p) => o(Number(p.target.value) || 0), error: n, helperText: l, disabled: a, fullWidth: true, sx: wt })] }), tr = ({ label: t, value: e, onChange: o, step: r = 1, error: n, helperText: l, disabled: a, placeholder: p }) => g(S, { children: [s(J, { children: t }), s(Q, { size: "small", type: "number", value: e ?? "", inputProps: { step: r }, error: n, helperText: l, disabled: a, placeholder: p, onChange: (d) => {
  const u = d.target.value;
  if (u === "") {
    o(void 0);
    return;
  }
  const b = Number(u);
  o(Number.isFinite(b) ? b : void 0);
}, fullWidth: true, sx: wt })] }), er = ({ label: t, value: e, onChange: o, placeholder: r, error: n, helperText: l, disabled: a }) => g(S, { children: [s(J, { children: t }), s(Q, { size: "small", value: e, onChange: (p) => o(p.target.value), placeholder: r, error: n, helperText: l, disabled: a, fullWidth: true })] }), or = ({ children: t, min: e = 150, sx: o }) => s(S, { sx: { display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${e}px, 1fr))`, gap: 1.5, ...o }, children: t }), rr = ({ title: t, hint: e, children: o, sx: r }) => g(S, { sx: { mb: 2, "&:last-child": { mb: 0 }, ...r }, children: [g(S, { sx: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 1, mb: 1 }, children: [s(W, { variant: "caption", sx: { fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "text.secondary" }, children: t }), e && s(W, { variant: "caption", color: "text.secondary", noWrap: true, children: e })] }), o] }), nr = ({ label: t, checked: e, onChange: o, disabled: r }) => {
  const n = Ne();
  return g(S, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1, pl: 1, pr: 0.5, py: 0.25, minHeight: 32 }, children: [s(W, { component: "label", htmlFor: n, variant: "body2", noWrap: true, sx: { flex: 1, minWidth: 0, cursor: r ? "default" : "pointer" }, children: t }), s(ro, { id: n, size: "small", checked: e, disabled: r, onChange: (l) => o(l.target.checked) })] });
}, lr = ({ children: t, sx: e }) => s(S, { sx: { border: 1, borderColor: "divider", borderRadius: 1.5, overflow: "hidden", "& > *:not(:last-child)": { borderBottom: 1, borderColor: "divider" }, ...e }, children: t }), sr = ({ label: t, value: e, min: o, max: r, step: n = 1, onChange: l, disabled: a }) => {
  const [p, d] = T(null), u = (b) => Math.min(Math.max(b, o), r);
  return g(S, { children: [s(J, { children: t }), g(S, { sx: { display: "flex", alignItems: "center", gap: 1.5, px: 0.5 }, children: [s(pe, { size: "small", value: e, min: o, max: r, step: n, disabled: a, onChange: (b, f) => l(f), "aria-label": t, sx: { flex: 1, minWidth: 0 } }), s(Q, { size: "small", type: "number", disabled: a, value: p ?? String(e), inputProps: { min: o, max: r, step: n, "aria-label": t }, onFocus: () => d(String(e)), onChange: (b) => {
    if (d(b.target.value), b.target.value !== "") {
      const f = Number(b.target.value);
      Number.isFinite(f) && l(u(f));
    }
  }, onBlur: () => d(null), sx: { width: 64, flexShrink: 0, ...wt } })] })] });
}, ir = ({ label: t, value: e, min: o, max: r, step: n = 1, fallback: l, onChange: a }) => {
  const [p, d] = T(null), u = (m) => Math.min(Math.max(m, o), r), b = e ?? l, f = e === void 0;
  return g(S, { children: [s(J, { children: t }), g(S, { sx: { display: "flex", alignItems: "center", gap: 1.5, px: 0.5 }, children: [s(pe, { size: "small", value: b, min: o, max: r, step: n, onChange: (m, x) => a(x), "aria-label": t, sx: { flex: 1, minWidth: 0 } }), s(Q, { size: "small", type: "number", value: p ?? (f ? "" : String(e)), inputProps: { min: o, max: r, step: n, "aria-label": t }, placeholder: f ? String(l) : void 0, onFocus: () => d(f ? "" : String(e)), onChange: (m) => {
    if (d(m.target.value), m.target.value === "") {
      a(void 0);
      return;
    }
    const x = Number(m.target.value);
    Number.isFinite(x) && a(u(x));
  }, onBlur: () => d(null), sx: { width: 64, flexShrink: 0, ...wt } })] })] });
}, ar = ({ open: t, onToggle: e, swatch: o, title: r, subtitle: n, actions: l, children: a }) => g(S, { sx: { border: 1, borderColor: t ? "primary.main" : "divider", borderRadius: 1.5, mb: 1, overflow: "hidden", transition: "border-color 150ms" }, children: [g(S, { sx: { display: "flex", alignItems: "center", gap: 0.75, pl: 1, pr: 0.5, py: 0.5, borderRadius: "inherit", "&:hover": { bgcolor: "action.hover" } }, children: [g(S, { component: "button", type: "button", onClick: e, "aria-expanded": t, sx: { display: "flex", alignItems: "center", gap: 0.75, flex: 1, minWidth: 0, border: 0, p: 0, bgcolor: "transparent", color: "inherit", font: "inherit", textAlign: "left", cursor: "pointer" }, children: [s(ue, { sx: { fontSize: 16, color: "text.secondary", transform: t ? "rotate(180deg)" : "none", transition: "transform 150ms", flexShrink: 0 } }), o, g(S, { sx: { flex: 1, minWidth: 0 }, children: [s(W, { variant: "body2", noWrap: true, children: r }), n != null && s(W, { variant: "caption", noWrap: true, sx: { display: "block", color: "text.secondary" }, children: n })] })] }), l] }), s(eo, { in: t, mountOnEnter: true, children: s(S, { sx: { px: 1.5, pb: 1.5, pt: 0.5 }, children: a }) })] }), cr = ({ text: t, children: e, tone: o = "info" }) => s(S, { sx: { mt: 1, p: 1, bgcolor: "action.hover", borderLeft: 3, borderColor: o === "warning" ? "warning.main" : "primary.main", borderRadius: 0.5 }, children: s(W, { variant: "caption", color: "text.secondary", children: e ?? t }) }), dr = ({ tabs: t, children: e, focus: o }) => {
  var _a;
  const [r, n] = T(((_a = t[0]) == null ? void 0 : _a.key) ?? ""), l = o == null ? void 0 : o.key, a = o == null ? void 0 : o.token;
  N(() => {
    l !== void 0 && n(l);
  }, [l, a]);
  const p = Array.isArray(e) ? e : [e], d = Math.max(0, t.findIndex((u) => u.key === r));
  return g(S, { children: [s(Po, { value: d, onChange: (u, b) => {
    var _a2;
    return n(((_a2 = t[b]) == null ? void 0 : _a2.key) ?? "");
  }, variant: "scrollable", scrollButtons: "auto", sx: { minHeight: 36, "& .MuiTab-root": { minHeight: 36, py: 0.5, px: 1.5, fontSize: "0.8rem" } }, children: t.map((u) => s(mo, { disableRipple: true, "aria-label": u.label, label: g(S, { component: "span", sx: { display: "inline-flex", alignItems: "center", gap: 0.5 }, children: [u.label, !!u.issueCount && s(S, { component: "span", "data-issue-dot": true, "aria-hidden": true, sx: { width: 6, height: 6, borderRadius: "50%", bgcolor: "warning.main" } })] }) }, u.key)) }), s(S, { sx: { mt: 1.5 }, children: p[d] })] });
}, Ao = 800, Do = (t, e, o) => t !== null && t.key === e && o - t.time < Ao;
function vt(t, e) {
  switch (e.type) {
    case "set": {
      const o = typeof e.next == "function" ? e.next(t.present) : e.next;
      return e.coalesce ? { ...t, present: o } : { past: [...t.past.slice(-49), t.present], present: o, future: [] };
    }
    case "undo":
      return t.past.length === 0 ? t : { past: t.past.slice(0, -1), present: t.past[t.past.length - 1], future: [t.present, ...t.future] };
    case "redo":
      return t.future.length === 0 ? t : { past: [...t.past.slice(-49), t.present], present: t.future[0], future: t.future.slice(1) };
    case "rebase":
      return { past: [], present: e.value, future: [] };
  }
}
const Fo = (t) => {
  if (!(t instanceof HTMLElement)) return false;
  const e = t.tagName;
  return e === "INPUT" || e === "TEXTAREA" || e === "SELECT" || t.isContentEditable;
};
function ur(t, e) {
  const { undo: o, redo: r } = t;
  N(() => {
    if (!e) return;
    const n = (l) => {
      if (Fo(l.target)) return;
      const a = l.ctrlKey || l.metaKey;
      a && !l.altKey && l.key.toLowerCase() === "z" ? (l.preventDefault(), l.shiftKey ? r() : o()) : a && !l.altKey && l.key.toLowerCase() === "y" && (l.preventDefault(), r());
    };
    return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
  }, [e, o, r]);
}
function pr(t) {
  const [e, o] = T({ past: [], present: t, future: [] }), r = st(null), n = lt((d, u) => {
    const b = Date.now(), f = u !== void 0 && Do(r.current, u, b);
    r.current = u !== void 0 ? { key: u, time: b } : null, o((m) => vt(m, { type: "set", next: d, coalesce: f }));
  }, []), l = lt(() => {
    r.current = null, o((d) => vt(d, { type: "undo" }));
  }, []), a = lt(() => {
    r.current = null, o((d) => vt(d, { type: "redo" }));
  }, []), p = lt((d) => {
    r.current = null, o((u) => vt(u, { type: "rebase", value: d }));
  }, []);
  return { present: e.present, set: n, undo: l, redo: a, canUndo: e.past.length > 0, canRedo: e.future.length > 0, rebase: p };
}
export {
  jo as C,
  ar as E,
  J as F,
  cr as I,
  Zt as L,
  Zo as N,
  tr as O,
  dr as S,
  er as T,
  or as a,
  Jo as b,
  sr as c,
  ir as d,
  lr as e,
  nr as f,
  Go as g,
  Po as h,
  mo as i,
  Yo as j,
  rr as k,
  Qo as l,
  ur as m,
  wt as n,
  qo as o,
  _t as t,
  pr as u
};
