import { ao as Tt, aa as kt, a9 as _t, ap as Rt, Q as F, ah as H, D as Dt, u as A, ak as Pt, s as L, h as V, i as $, m as Y, aq as At, ar as q, g as B, f as j, P as $t, $ as Yt, v as Ot, p as T, af as Ht, j as D, d as v } from "./usePopoverPositioning-DyzF99R9.js";
import { h as rt, g as U, R as Nt, f as st, m as k, l as S, w as Ft, o as O, e as Ut, i as y, j as zt } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { g as Vt } from "./useThemeProps-CfkhST6j.js";
import { g as Bt } from "./MenuItem-gWYWtG25.js";
import { p as jt } from "./useData-Dv2ttG2p.js";
function Wt(t, n, o, e, a) {
  const [i, l] = st(() => a && o ? o(t).matches : e ? e(t).matches : n);
  return kt(() => {
    if (!o) return;
    const s = o(t), r = () => {
      l(s.matches);
    };
    return r(), s.addEventListener("change", r), () => {
      s.removeEventListener("change", r);
    };
  }, [t, o]), i;
}
const Qt = { ...Nt }, at = Qt.useSyncExternalStore;
function Gt(t, n, o, e, a) {
  const i = rt(() => n, [n]), l = U(() => {
    if (a && o) return () => o(t).matches;
    if (e !== null) {
      const { matches: u } = e(t);
      return () => u;
    }
    return i;
  }, [i, t, e, a, o]), [s, r] = U(() => {
    if (o === null) return [i, () => () => {
    }];
    const u = o(t);
    return [() => u.matches, (d) => (u.addEventListener("change", d), () => {
      u.removeEventListener("change", d);
    })];
  }, [i, o, t]);
  return at(r, s, l);
}
function it(t = {}) {
  const { themeId: n } = t;
  return function(e, a = {}) {
    let i = Tt();
    i && n && (i = i[n] || i);
    const l = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: s = false, matchMedia: r = l ? window.matchMedia : null, ssrMatchMedia: c = null, noSsr: u = false } = Vt({ name: "MuiUseMediaQuery", props: a, theme: i });
    let d = typeof e == "function" ? e(i) : e;
    return d = d.replace(/^@media( ?)/m, ""), d.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (at !== void 0 ? Gt : Wt)(d, s, r, c, u);
  };
}
it();
function tt(t) {
  return t.substring(2).toLowerCase();
}
function Xt(t, n) {
  return n.documentElement.clientWidth < t.clientX || n.documentElement.clientHeight < t.clientY;
}
function Jt(t) {
  const { children: n, disableReactTree: o = false, mouseEvent: e = "onClick", onClickAway: a, touchEvent: i = "onTouchEnd" } = t, l = k(false), s = k(null), r = k(false), c = k(false);
  S(() => (setTimeout(() => {
    r.current = true;
  }, 0), () => {
    r.current = false;
  }), []);
  const u = _t(Rt(n), s), d = F((m) => {
    const g = c.current;
    c.current = false;
    const C = H(s.current);
    if (!r.current || !s.current || "clientX" in m && Xt(m, C)) return;
    if (l.current) {
      l.current = false;
      return;
    }
    let f;
    m.composedPath ? f = m.composedPath().includes(s.current) : f = !C.documentElement.contains(m.target) || s.current.contains(m.target), !f && (o || !g) && a(m);
  }), h = (m) => (g) => {
    c.current = true;
    const C = n.props[m];
    C && C(g);
  }, M = { ref: u };
  return i !== false && (M[i] = h(i)), S(() => {
    if (i !== false) {
      const m = tt(i), g = H(s.current), C = () => {
        l.current = true;
      };
      return g.addEventListener(m, d), g.addEventListener("touchmove", C), () => {
        g.removeEventListener(m, d), g.removeEventListener("touchmove", C);
      };
    }
  }, [d, i]), e !== false && (M[e] = h(e)), S(() => {
    if (e !== false) {
      const m = tt(e), g = H(s.current);
      return g.addEventListener(m, d), () => {
        g.removeEventListener(m, d);
      };
    }
  }, [d, e]), Ft(n, M);
}
const Gn = it({ themeId: Dt }), Kt = (t) => {
  const { alignItems: n, classes: o } = t;
  return $({ root: ["root", n === "flex-start" && "alignItemsFlexStart"] }, Bt, o);
}, Zt = L("div", { name: "MuiListItemIcon", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, o.alignItems === "flex-start" && n.alignItemsFlexStart];
} })(Y(({ theme: t }) => ({ minWidth: 56, color: (t.vars || t).palette.action.active, flexShrink: 0, display: "inline-flex", variants: [{ props: { alignItems: "flex-start" }, style: { marginTop: 8 } }] }))), Xn = O(function(n, o) {
  const e = A({ props: n, name: "MuiListItemIcon" }), { className: a, ...i } = e, l = Ut(Pt), s = { ...e, alignItems: l.alignItems }, r = Kt(s);
  return y(Zt, { className: V(r.root, a), ownerState: s, ref: o, ...i });
});
function qt(t = {}) {
  const { autoHideDuration: n = null, disableWindowBlurListener: o = false, onClose: e, open: a, resumeHideDuration: i } = t, l = At();
  S(() => {
    if (!a) return;
    function f(p) {
      p.defaultPrevented || p.key === "Escape" && (e == null ? void 0 : e(p, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [a, e]);
  const s = F((f, p) => {
    e == null ? void 0 : e(f, p);
  }), r = F((f) => {
    !e || f == null || l.start(f, () => {
      s(null, "timeout");
    });
  });
  S(() => (a && r(n), l.clear), [a, n, r, l]);
  const c = (f) => {
    e == null ? void 0 : e(f, "clickaway");
  }, u = l.clear, d = rt(() => {
    n != null && r(i ?? n * 0.5);
  }, [n, i, r]), h = (f) => (p) => {
    const x = f.onBlur;
    x == null ? void 0 : x(p), d();
  }, M = (f) => (p) => {
    const x = f.onFocus;
    x == null ? void 0 : x(p), u();
  }, m = (f) => (p) => {
    const x = f.onMouseEnter;
    x == null ? void 0 : x(p), u();
  }, g = (f) => (p) => {
    const x = f.onMouseLeave;
    x == null ? void 0 : x(p), d();
  };
  return S(() => {
    if (!o && a) return window.addEventListener("focus", d), window.addEventListener("blur", u), () => {
      window.removeEventListener("focus", d), window.removeEventListener("blur", u);
    };
  }, [o, a, d, u]), { getRootProps: (f = {}) => {
    const p = { ...q(t), ...q(f) };
    return { role: "presentation", ...f, ...p, onBlur: h(p), onFocus: M(p), onMouseEnter: m(p), onMouseLeave: g(p) };
  }, onClickAway: c };
}
function tn(t) {
  return B("MuiSnackbarContent", t);
}
j("MuiSnackbarContent", ["root", "message", "action"]);
const nn = (t) => {
  const { classes: n } = t;
  return $({ root: ["root"], action: ["action"], message: ["message"] }, tn, n);
}, en = L($t, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (t, n) => n.root })(Y(({ theme: t }) => {
  const n = t.palette.mode === "light" ? 0.8 : 0.98, o = Yt(t.palette.background.default, n);
  return { ...t.typography.body2, color: t.vars ? t.vars.palette.SnackbarContent.color : t.palette.getContrastText(o), backgroundColor: t.vars ? t.vars.palette.SnackbarContent.bg : o, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (t.vars || t).shape.borderRadius, flexGrow: 1, [t.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), on = L("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (t, n) => n.message })({ padding: "8px 0" }), rn = L("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (t, n) => n.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), sn = O(function(n, o) {
  const e = A({ props: n, name: "MuiSnackbarContent" }), { action: a, className: i, message: l, role: s = "alert", ...r } = e, c = e, u = nn(c);
  return zt(en, { role: s, square: true, elevation: 6, className: V(u.root, i), ownerState: c, ref: o, ...r, children: [y(on, { className: u.message, ownerState: c, children: l }), a ? y(rn, { className: u.action, ownerState: c, children: a }) : null] });
});
function an(t) {
  return B("MuiSnackbar", t);
}
j("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const cn = (t) => {
  const { classes: n, anchorOrigin: o } = t, e = { root: ["root", `anchorOrigin${D(o.vertical)}${D(o.horizontal)}`] };
  return $(e, an, n);
}, ln = L("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, n[`anchorOrigin${D(o.anchorOrigin.vertical)}${D(o.anchorOrigin.horizontal)}`]];
} })(Y(({ theme: t }) => ({ zIndex: (t.vars || t).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: n }) => n.anchorOrigin.vertical === "top", style: { top: 8, [t.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: n }) => n.anchorOrigin.vertical !== "top", style: { bottom: 8, [t.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [t.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [t.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "center", style: { [t.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), Jn = O(function(n, o) {
  const e = A({ props: n, name: "MuiSnackbar" }), a = Ot(), i = { enter: a.transitions.duration.enteringScreen, exit: a.transitions.duration.leavingScreen }, { action: l, anchorOrigin: { vertical: s, horizontal: r } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: c = null, children: u, className: d, ClickAwayListenerProps: h, ContentProps: M, disableWindowBlurListener: m = false, message: g, onBlur: C, onClose: f, onFocus: p, onMouseEnter: x, onMouseLeave: Un, open: W, resumeHideDuration: zn, slots: Q = {}, slotProps: ut = {}, TransitionComponent: G, transitionDuration: X = i, TransitionProps: { onEnter: J, onExited: K, ...dt } = {}, ...ft } = e, I = { ...e, anchorOrigin: { vertical: s, horizontal: r }, autoHideDuration: c, disableWindowBlurListener: m, TransitionComponent: G, transitionDuration: X }, mt = cn(I), { getRootProps: pt, onClickAway: ht } = qt({ ...I }), [yt, Z] = st(true), gt = (w) => {
    Z(true), K && K(w);
  }, Mt = (w, b) => {
    Z(false), J && J(w, b);
  }, E = { slots: { transition: G, ...Q }, slotProps: { content: M, clickAwayListener: h, transition: dt, ...ut } }, [Ct, bt] = T("root", { ref: o, className: [mt.root, d], elementType: ln, getSlotProps: pt, externalForwardedProps: { ...E, ...ft }, ownerState: I }), [vt, { ownerState: xt, ...wt }] = T("clickAwayListener", { elementType: Jt, externalForwardedProps: E, getSlotProps: (w) => ({ onClickAway: (...b) => {
    var _a;
    (_a = w.onClickAway) == null ? void 0 : _a.call(w, ...b), ht(...b);
  } }), ownerState: I }), [It, St] = T("content", { elementType: sn, shouldForwardComponentProp: true, externalForwardedProps: E, additionalProps: { message: g, action: l }, ownerState: I }), [Lt, Et] = T("transition", { elementType: Ht, externalForwardedProps: E, getSlotProps: (w) => ({ onEnter: (...b) => {
    var _a;
    (_a = w.onEnter) == null ? void 0 : _a.call(w, ...b), Mt(...b);
  }, onExited: (...b) => {
    var _a;
    (_a = w.onExited) == null ? void 0 : _a.call(w, ...b), gt(...b);
  } }), additionalProps: { appear: true, in: W, timeout: X, direction: s === "top" ? "down" : "up" }, ownerState: I });
  return !W && yt ? null : y(vt, { ...wt, ...Q.clickAwayListener && { ownerState: xt }, children: y(Ct, { ...bt, children: y(Lt, { ...Et, children: u || y(It, { ...St }) }) }) });
});
function un(t) {
  return B("MuiToolbar", t);
}
j("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const dn = (t) => {
  const { classes: n, disableGutters: o, variant: e } = t;
  return $({ root: ["root", !o && "gutters", e] }, un, n);
}, fn = L("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, !o.disableGutters && n.gutters, n[o.variant]];
} })(Y(({ theme: t }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: n }) => !n.disableGutters, style: { paddingLeft: t.spacing(2), paddingRight: t.spacing(2), [t.breakpoints.up("sm")]: { paddingLeft: t.spacing(3), paddingRight: t.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: t.mixins.toolbar }] }))), Kn = O(function(n, o) {
  const e = A({ props: n, name: "MuiToolbar" }), { className: a, component: i = "div", disableGutters: l = false, variant: s = "regular", ...r } = e, c = { ...e, component: i, disableGutters: l, variant: s }, u = dn(c);
  return y(fn, { as: i, className: V(u.root, a), ref: o, ownerState: c, ...r });
}), Zn = v(y("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"), qn = v(y("path", { d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" }), "ArrowDownward"), te = v(y("path", { d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z" }), "ArrowUpward"), ne = v(y("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" }), "Edit"), ee = v(y("path", { d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" }), "FormatItalic"), oe = v(y("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" }), "Refresh"), re = v(y("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" }), "Search"), se = v(y("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6" }), "Settings"), ae = v(y("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" }), "Visibility"), z = "b64:", mn = (t) => {
  const n = new TextEncoder().encode(t);
  let o = "";
  for (let e = 0; e < n.length; e++) o += String.fromCharCode(n[e]);
  return btoa(o);
}, pn = (t) => {
  const n = atob(t), o = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) o[e] = n.charCodeAt(e);
  return new TextDecoder().decode(o);
}, ie = (t) => t ? t.startsWith(z) ? pn(t.slice(z.length)) : t : "", ce = (t) => `${z}${mn(t)}`, hn = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico|apng|tiff?)$/i, ct = "data:image/";
function yn(t) {
  if (t.length === 0 || t.length > 2) return false;
  for (let n = 0; n < t.length; n++) if (t.charCodeAt(n) > 127) return true;
  return false;
}
function lt(t) {
  return typeof t != "string" ? null : t.trim() || null;
}
function gn(t) {
  const n = lt(t);
  return n ? n.startsWith(ct) ? true : hn.test(n) : false;
}
function le(t) {
  const n = lt(t);
  return n ? n.startsWith(ct) || jt(n) ? true : yn(n) : false;
}
const Mn = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Cn = /^\d{4}-\d{2}-\d{2}$/, bn = /^(\d{2})\.(\d{2})\.(\d{4})$/, vn = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, xn = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, wn = /^(\d{2})\/(\d{2})\/(\d{4})$/, In = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Sn = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
function _(t, n) {
  return n >= 1 && n <= 12 && t >= 1 && t <= 31;
}
function N(t, n) {
  return t >= 1 && t <= 12 && n >= 1 && n <= 31;
}
function R(t, n, o) {
  return t >= 0 && t <= 23 && n >= 0 && n <= 59 && (o === void 0 || o >= 0 && o <= 59);
}
const Ln = [{ regex: Mn, format: "ISO-8601" }, { regex: Cn, format: "YYYY-MM-DD", validate: (t) => {
  const n = parseInt(t[0].slice(5, 7), 10), o = parseInt(t[0].slice(8, 10), 10);
  return _(o, n);
} }, { regex: xn, format: "dd.MM.yyyy HH:mm:ss", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10), i = parseInt(t[6], 10);
  return _(n, o) && R(e, a, i);
} }, { regex: vn, format: "dd.MM.yyyy HH:mm", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10);
  return _(n, o) && R(e, a);
} }, { regex: bn, format: "dd.MM.yyyy", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10);
  return _(n, o);
} }, { regex: Sn, format: "MM/dd/yyyy HH:mm:ss", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10), i = parseInt(t[6], 10);
  return N(n, o) && R(e, a, i);
} }, { regex: In, format: "MM/dd/yyyy HH:mm", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10);
  return N(n, o) && R(e, a);
} }, { regex: wn, format: "MM/dd/yyyy", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10);
  return N(n, o);
} }];
function En(t, n) {
  const o = t.trim();
  if (!o) return null;
  for (const e of Ln) {
    if (n && e.format !== n) continue;
    const a = o.match(e.regex);
    if (a) {
      if (e.validate && !e.validate(a)) continue;
      return { format: e.format, match: a };
    }
  }
  return null;
}
function Tn(t) {
  var _a;
  return ((_a = En(t)) == null ? void 0 : _a.format) ?? null;
}
function kn(t) {
  return !Number.isFinite(t) || t < 0 ? null : t >= 1e11 ? "epoch-ms" : t >= 1e9 ? "epoch-s" : null;
}
function _n(t) {
  if (t == null) return { type: "null" };
  if (typeof t == "boolean") return { type: "boolean" };
  if (typeof t == "number") {
    const n = kn(t);
    return n ? { type: "date", dateFormat: n } : { type: "number" };
  }
  if (typeof t == "string") {
    const n = Tn(t);
    return n ? { type: "date", dateFormat: n } : gn(t) ? { type: "image" } : { type: "string" };
  }
  return Array.isArray(t) ? { type: "array" } : typeof t == "object" ? { type: "object" } : { type: "string" };
}
function Rn(t) {
  const n = Object.keys(t).filter((o) => o !== "null");
  return n.length === 0 ? "null" : n.length === 1 ? n[0] : n.length === 2 && n.includes("date") && n.includes("string") ? "date" : n.length === 2 && n.includes("image") && n.includes("string") ? "image" : "mixed";
}
function Dn(t) {
  let n, o = 0;
  for (const [e, a] of Object.entries(t)) a > o && (n = e, o = a);
  return n;
}
const Pn = 3;
function An(t) {
  return { path: t, typeCounts: {}, dateFormatCounts: {}, nullCount: 0, distinctValues: /* @__PURE__ */ new Set(), numMin: void 0, numMax: void 0, strLenMin: void 0, strLenMax: void 0, dateMin: void 0, dateMax: void 0, nonNullCount: 0, samples: [], sampleSeen: /* @__PURE__ */ new Set() };
}
function nt(t, n) {
  t[n] = (t[n] || 0) + 1;
}
function $n(t, n) {
  if (t == null) return null;
  if (typeof t == "number") return n === "epoch-ms" ? new Date(t).toISOString() : n === "epoch-s" ? new Date(t * 1e3).toISOString() : null;
  if (typeof t != "string") return null;
  const o = t.trim();
  if (n === "ISO-8601" || n === "YYYY-MM-DD") return o;
  if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
    const e = o.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
    if (e) {
      const a = e[1], i = e[2], l = e[3], s = e[4] || "00", r = e[5] || "00", c = e[6] || "00";
      return `${l}-${i}-${a}T${s}:${r}:${c}`;
    }
  }
  if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
    const e = o.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
    if (e) {
      const a = e[1], i = e[2], l = e[3], s = e[4] || "00", r = e[5] || "00", c = e[6] || "00";
      return `${l}-${a}-${i}T${s}:${r}:${c}`;
    }
  }
  return null;
}
function Yn(t, n, o = 100, e = 0.8, a = 0.8) {
  const i = /* @__PURE__ */ new Map();
  for (const l of t) i.set(l, An(l));
  for (const l of n) for (const s of t) {
    const r = i.get(s);
    if (!r) {
      console.warn(`[JsonTable] Missing accumulator for path: ${s}`);
      continue;
    }
    const c = l[s], u = _n(c);
    if (nt(r.typeCounts, u.type), u.type === "null") {
      r.nullCount++;
      continue;
    }
    if (r.nonNullCount++, r.samples.length < Pn && (typeof c == "string" || typeof c == "number" || typeof c == "boolean") && !r.sampleSeen.has(c) && (r.sampleSeen.add(c), r.samples.push(c)), u.dateFormat && nt(r.dateFormatCounts, u.dateFormat), r.distinctValues.size < o && r.distinctValues.add(c), typeof c == "number" && Number.isFinite(c) && ((r.numMin === void 0 || c < r.numMin) && (r.numMin = c), (r.numMax === void 0 || c > r.numMax) && (r.numMax = c)), typeof c == "string") {
      const d = c.length;
      (r.strLenMin === void 0 || d < r.strLenMin) && (r.strLenMin = d), (r.strLenMax === void 0 || d > r.strLenMax) && (r.strLenMax = d);
    }
    if (u.dateFormat) {
      const d = $n(c, u.dateFormat);
      d !== null && ((r.dateMin === void 0 || d < r.dateMin) && (r.dateMin = d), (r.dateMax === void 0 || d > r.dateMax) && (r.dateMax = d));
    }
  }
  return t.map((l) => {
    const s = i.get(l);
    let r = Rn(s.typeCounts);
    r === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < e && (r = "string"), r === "image" && s.nonNullCount > 0 && (s.typeCounts.image || 0) / s.nonNullCount < a && (r = "string");
    const c = r === "date" ? Dn(s.dateFormatCounts) : void 0, u = r === "date" ? s.typeCounts.date || 0 : s.typeCounts[r] || 0, d = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, h = { path: l, type: r, nullable: s.nullCount > 0, typeCounts: { ...s.typeCounts }, nullCount: s.nullCount, distinctCount: s.distinctValues.size, confidence: d };
    return c && (h.dateFormat = c), r === "number" && (s.numMin !== void 0 && (h.min = s.numMin), s.numMax !== void 0 && (h.max = s.numMax)), r === "date" && (s.dateMin !== void 0 && (h.min = s.dateMin), s.dateMax !== void 0 && (h.max = s.dateMax)), (r === "string" || r === "mixed") && (s.strLenMin !== void 0 && (h.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (h.stringLengthMax = s.strLenMax)), s.samples.length > 0 && (h.samples = s.samples), h;
  });
}
function P(t, n, o, e, a, i, l, s) {
  if (i > s.maxDepth && (s.maxDepth = i), i > l) {
    o[n] = t, e.add(n);
    return;
  }
  if (t == null) {
    o[n] = null, e.add(n);
    return;
  }
  if (Array.isArray(t)) {
    if (t.length === 0) {
      o[n] = null, e.add(n);
      return;
    }
    for (let r = 0; r < t.length; r++) {
      r > s.maxArrayIndex && (s.maxArrayIndex = r);
      const c = `${n}[${r}]`;
      P(t[r], c, o, e, a, i + 1, l, s);
    }
    return;
  }
  if (t !== null && typeof t == "object") {
    if (a.has(t)) {
      o[n] = "[Circular]", e.add(n);
      return;
    }
    a.add(t);
    const r = Object.keys(t);
    if (r.length === 0) {
      o[n] = null, e.add(n);
      return;
    }
    for (const c of r) {
      const u = n ? `${n}.${c}` : c;
      P(t[c], u, o, e, a, i + 1, l, s);
    }
    return;
  }
  o[n] = t, e.add(n);
}
function On(t, n = 10) {
  const o = /* @__PURE__ */ new Set(), e = { maxDepth: 0, maxArrayIndex: 0 }, a = [];
  for (const l of t) {
    const s = {}, r = /* @__PURE__ */ new WeakSet();
    if (l != null && typeof l == "object" && !Array.isArray(l)) for (const c of Object.keys(l)) P(l[c], c, s, o, r, 1, n, e);
    else P(l, "_value", s, o, r, 0, n, e);
    a.push(s);
  }
  const i = Hn([...o]);
  for (const l of a) for (const s of i) s in l || (l[s] = null);
  return { paths: i, rows: a, maxDepth: e.maxDepth, maxArrayIndex: e.maxArrayIndex };
}
function Hn(t) {
  return t.sort((n, o) => {
    const e = et(n), a = et(o), i = Math.min(e.length, a.length);
    for (let l = 0; l < i; l++) {
      const s = e[l], r = a[l], c = ot(s), u = ot(r);
      if (c !== null && u !== null) {
        if (c !== u) return c - u;
        continue;
      }
      if (s !== r) return s < r ? -1 : 1;
    }
    return e.length - a.length;
  });
}
function et(t) {
  return t.split(/\./).flatMap((n) => {
    const o = [], a = /^([^[]*)((?:\[\d+\])*)$/.exec(n);
    if (a) {
      a[1] && o.push(a[1]);
      const i = a[2].match(/\[\d+\]/g);
      i && o.push(...i);
    } else o.push(n);
    return o;
  });
}
function ot(t) {
  const n = /^\[(\d+)\]$/.exec(t);
  return n ? parseInt(n[1], 10) : null;
}
const Nn = { maxDepth: 10, maxDistinct: 100, dateConfidenceThreshold: 0.8, imageConfidenceThreshold: 0.8 };
function Fn(t, n) {
  const o = performance.now(), e = { ...Nn, ...n };
  if (!t || t.length === 0) return { columns: [], rows: [], meta: { rowCount: 0, columnCount: 0, maxDepth: 0, maxArrayIndex: 0, arrayPolicy: "index-columns", flattenPolicy: "dot-paths", dateDetectionPolicy: "heuristic", totalNullValues: 0, nullPercentage: 0, analysisTimeMs: 0 } };
  const a = On(t, e.maxDepth), i = Yn(a.paths, a.rows, e.maxDistinct, e.dateConfidenceThreshold, e.imageConfidenceThreshold), l = a.paths.length * a.rows.length, s = i.reduce((u, d) => u + d.nullCount, 0), r = l > 0 ? Math.round(s / l * 1e3) / 10 : 0, c = Math.round((performance.now() - o) * 100) / 100;
  return { columns: i, rows: a.rows, meta: { rowCount: a.rows.length, columnCount: i.length, maxDepth: a.maxDepth, maxArrayIndex: a.maxArrayIndex, arrayPolicy: "index-columns", flattenPolicy: "dot-paths", dateDetectionPolicy: "heuristic", totalNullValues: s, nullPercentage: r, analysisTimeMs: c } };
}
function ue(t, n) {
  return U(() => Fn(t, n), [t, n == null ? void 0 : n.maxDepth, n == null ? void 0 : n.maxDistinct, n == null ? void 0 : n.dateConfidenceThreshold, n == null ? void 0 : n.imageConfidenceThreshold]);
}
export {
  Zn as A,
  qn as D,
  ee as I,
  Xn as L,
  oe as R,
  re as S,
  Kn as T,
  te as U,
  ae as V,
  ne as a,
  Fn as b,
  Jn as c,
  ie as d,
  se as e,
  Gn as f,
  ue as g,
  _n as h,
  le as i,
  ce as j,
  En as m,
  Rn as r,
  mn as u
};
