import { au as _t, ag as Rt, af as Dt, av as Pt, Y as U, an as O, N as At, k as Y, aq as Yt, s as E, m as V, n as $, o as H, aw as $t, ax as q, i as B, j, P as Ht, a4 as Nt, u as Ot, v as T, al as Ft, p as P, f as x } from "./usePopoverPositioning-C1_MhytU.js";
import { f as st, g as tt, R as Ut, e as at, m as _, l as L, x as zt, p as N, j as Vt, h, i as Bt } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { g as jt } from "./useThemeProps-CxKYjV9n.js";
import { g as Wt } from "./MenuItem-Dv4AreQE.js";
import { q as Gt } from "./useData-uC1Kpd-M.js";
function Qt(t, n, o, e, a) {
  const [i, c] = at(() => a && o ? o(t).matches : e ? e(t).matches : n);
  return Rt(() => {
    if (!o) return;
    const s = o(t), r = () => {
      c(s.matches);
    };
    return r(), s.addEventListener("change", r), () => {
      s.removeEventListener("change", r);
    };
  }, [t, o]), i;
}
const Xt = { ...Ut }, it = Xt.useSyncExternalStore;
function Jt(t, n, o, e, a) {
  const i = st(() => n, [n]), c = tt(() => {
    if (a && o) return () => o(t).matches;
    if (e !== null) {
      const { matches: u } = e(t);
      return () => u;
    }
    return i;
  }, [i, t, e, a, o]), [s, r] = tt(() => {
    if (o === null) return [i, () => () => {
    }];
    const u = o(t);
    return [() => u.matches, (d) => (u.addEventListener("change", d), () => {
      u.removeEventListener("change", d);
    })];
  }, [i, o, t]);
  return it(r, s, c);
}
function ct(t = {}) {
  const { themeId: n } = t;
  return function(e, a = {}) {
    let i = _t();
    i && n && (i = i[n] || i);
    const c = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: s = false, matchMedia: r = c ? window.matchMedia : null, ssrMatchMedia: l = null, noSsr: u = false } = jt({ name: "MuiUseMediaQuery", props: a, theme: i });
    let d = typeof e == "function" ? e(i) : e;
    return d = d.replace(/^@media( ?)/m, ""), d.includes("print") && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", "Using the print media query to modify print styles can lead to unexpected results.", "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (it !== void 0 ? Jt : Qt)(d, s, r, l, u);
  };
}
ct();
function nt(t) {
  return t.substring(2).toLowerCase();
}
function Kt(t, n) {
  return n.documentElement.clientWidth < t.clientX || n.documentElement.clientHeight < t.clientY;
}
function Zt(t) {
  const { children: n, disableReactTree: o = false, mouseEvent: e = "onClick", onClickAway: a, touchEvent: i = "onTouchEnd" } = t, c = _(false), s = _(null), r = _(false), l = _(false);
  L(() => (setTimeout(() => {
    r.current = true;
  }, 0), () => {
    r.current = false;
  }), []);
  const u = Dt(Pt(n), s), d = U((m) => {
    const g = l.current;
    l.current = false;
    const b = O(s.current);
    if (!r.current || !s.current || "clientX" in m && Kt(m, b)) return;
    if (c.current) {
      c.current = false;
      return;
    }
    let f;
    m.composedPath ? f = m.composedPath().includes(s.current) : f = !b.documentElement.contains(m.target) || s.current.contains(m.target), !f && (o || !g) && a(m);
  }), y = (m) => (g) => {
    l.current = true;
    const b = n.props[m];
    b && b(g);
  }, M = { ref: u };
  return i !== false && (M[i] = y(i)), L(() => {
    if (i !== false) {
      const m = nt(i), g = O(s.current), b = () => {
        c.current = true;
      };
      return g.addEventListener(m, d), g.addEventListener("touchmove", b), () => {
        g.removeEventListener(m, d), g.removeEventListener("touchmove", b);
      };
    }
  }, [d, i]), e !== false && (M[e] = y(e)), L(() => {
    if (e !== false) {
      const m = nt(e), g = O(s.current);
      return g.addEventListener(m, d), () => {
        g.removeEventListener(m, d);
      };
    }
  }, [d, e]), zt(n, M);
}
const Qn = ct({ themeId: At }), qt = (t) => {
  const { alignItems: n, classes: o } = t;
  return $({ root: ["root", n === "flex-start" && "alignItemsFlexStart"] }, Wt, o);
}, tn = E("div", { name: "MuiListItemIcon", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, o.alignItems === "flex-start" && n.alignItemsFlexStart];
} })(H(({ theme: t }) => ({ minWidth: 56, color: (t.vars || t).palette.action.active, flexShrink: 0, display: "inline-flex", variants: [{ props: { alignItems: "flex-start" }, style: { marginTop: 8 } }] }))), Xn = N(function(n, o) {
  const e = Y({ props: n, name: "MuiListItemIcon" }), { className: a, ...i } = e, c = Vt(Yt), s = { ...e, alignItems: c.alignItems }, r = qt(s);
  return h(tn, { className: V(r.root, a), ownerState: s, ref: o, ...i });
});
function nn(t = {}) {
  const { autoHideDuration: n = null, disableWindowBlurListener: o = false, onClose: e, open: a, resumeHideDuration: i } = t, c = $t();
  L(() => {
    if (!a) return;
    function f(p) {
      p.defaultPrevented || p.key === "Escape" && (e == null ? void 0 : e(p, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", f), () => {
      document.removeEventListener("keydown", f);
    };
  }, [a, e]);
  const s = U((f, p) => {
    e == null ? void 0 : e(f, p);
  }), r = U((f) => {
    !e || f == null || c.start(f, () => {
      s(null, "timeout");
    });
  });
  L(() => (a && r(n), c.clear), [a, n, r, c]);
  const l = (f) => {
    e == null ? void 0 : e(f, "clickaway");
  }, u = c.clear, d = st(() => {
    n != null && r(i ?? n * 0.5);
  }, [n, i, r]), y = (f) => (p) => {
    const v = f.onBlur;
    v == null ? void 0 : v(p), d();
  }, M = (f) => (p) => {
    const v = f.onFocus;
    v == null ? void 0 : v(p), u();
  }, m = (f) => (p) => {
    const v = f.onMouseEnter;
    v == null ? void 0 : v(p), u();
  }, g = (f) => (p) => {
    const v = f.onMouseLeave;
    v == null ? void 0 : v(p), d();
  };
  return L(() => {
    if (!o && a) return window.addEventListener("focus", d), window.addEventListener("blur", u), () => {
      window.removeEventListener("focus", d), window.removeEventListener("blur", u);
    };
  }, [o, a, d, u]), { getRootProps: (f = {}) => {
    const p = { ...q(t), ...q(f) };
    return { role: "presentation", ...f, ...p, onBlur: y(p), onFocus: M(p), onMouseEnter: m(p), onMouseLeave: g(p) };
  }, onClickAway: l };
}
function en(t) {
  return B("MuiSnackbarContent", t);
}
j("MuiSnackbarContent", ["root", "message", "action"]);
const on = (t) => {
  const { classes: n } = t;
  return $({ root: ["root"], action: ["action"], message: ["message"] }, en, n);
}, rn = E(Ht, { name: "MuiSnackbarContent", slot: "Root", overridesResolver: (t, n) => n.root })(H(({ theme: t }) => {
  const n = t.palette.mode === "light" ? 0.8 : 0.98, o = Nt(t.palette.background.default, n);
  return { ...t.typography.body2, color: t.vars ? t.vars.palette.SnackbarContent.color : t.palette.getContrastText(o), backgroundColor: t.vars ? t.vars.palette.SnackbarContent.bg : o, display: "flex", alignItems: "center", flexWrap: "wrap", padding: "6px 16px", borderRadius: (t.vars || t).shape.borderRadius, flexGrow: 1, [t.breakpoints.up("sm")]: { flexGrow: "initial", minWidth: 288 } };
})), sn = E("div", { name: "MuiSnackbarContent", slot: "Message", overridesResolver: (t, n) => n.message })({ padding: "8px 0" }), an = E("div", { name: "MuiSnackbarContent", slot: "Action", overridesResolver: (t, n) => n.action })({ display: "flex", alignItems: "center", marginLeft: "auto", paddingLeft: 16, marginRight: -8 }), cn = N(function(n, o) {
  const e = Y({ props: n, name: "MuiSnackbarContent" }), { action: a, className: i, message: c, role: s = "alert", ...r } = e, l = e, u = on(l);
  return Bt(rn, { role: s, square: true, elevation: 6, className: V(u.root, i), ownerState: l, ref: o, ...r, children: [h(sn, { className: u.message, ownerState: l, children: c }), a ? h(an, { className: u.action, ownerState: l, children: a }) : null] });
});
function ln(t) {
  return B("MuiSnackbar", t);
}
j("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const un = (t) => {
  const { classes: n, anchorOrigin: o } = t, e = { root: ["root", `anchorOrigin${P(o.vertical)}${P(o.horizontal)}`] };
  return $(e, ln, n);
}, dn = E("div", { name: "MuiSnackbar", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, n[`anchorOrigin${P(o.anchorOrigin.vertical)}${P(o.anchorOrigin.horizontal)}`]];
} })(H(({ theme: t }) => ({ zIndex: (t.vars || t).zIndex.snackbar, position: "fixed", display: "flex", left: 8, right: 8, justifyContent: "center", alignItems: "center", variants: [{ props: ({ ownerState: n }) => n.anchorOrigin.vertical === "top", style: { top: 8, [t.breakpoints.up("sm")]: { top: 24 } } }, { props: ({ ownerState: n }) => n.anchorOrigin.vertical !== "top", style: { bottom: 8, [t.breakpoints.up("sm")]: { bottom: 24 } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "left", style: { justifyContent: "flex-start", [t.breakpoints.up("sm")]: { left: 24, right: "auto" } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "right", style: { justifyContent: "flex-end", [t.breakpoints.up("sm")]: { right: 24, left: "auto" } } }, { props: ({ ownerState: n }) => n.anchorOrigin.horizontal === "center", style: { [t.breakpoints.up("sm")]: { left: "50%", right: "auto", transform: "translateX(-50%)" } } }] }))), Jn = N(function(n, o) {
  const e = Y({ props: n, name: "MuiSnackbar" }), a = Ot(), i = { enter: a.transitions.duration.enteringScreen, exit: a.transitions.duration.leavingScreen }, { action: c, anchorOrigin: { vertical: s, horizontal: r } = { vertical: "bottom", horizontal: "left" }, autoHideDuration: l = null, children: u, className: d, ClickAwayListenerProps: y, ContentProps: M, disableWindowBlurListener: m = false, message: g, onBlur: b, onClose: f, onFocus: p, onMouseEnter: v, onMouseLeave: Un, open: W, resumeHideDuration: zn, slots: G = {}, slotProps: ft = {}, TransitionComponent: Q, transitionDuration: X = i, TransitionProps: { onEnter: J, onExited: K, ...mt } = {}, ...pt } = e, S = { ...e, anchorOrigin: { vertical: s, horizontal: r }, autoHideDuration: l, disableWindowBlurListener: m, TransitionComponent: Q, transitionDuration: X }, yt = un(S), { getRootProps: ht, onClickAway: gt } = nn({ ...S }), [Mt, Z] = at(true), bt = (w) => {
    Z(true), K && K(w);
  }, Ct = (w, C) => {
    Z(false), J && J(w, C);
  }, k = { slots: { transition: Q, ...G }, slotProps: { content: M, clickAwayListener: y, transition: mt, ...ft } }, [xt, vt] = T("root", { ref: o, className: [yt.root, d], elementType: dn, getSlotProps: ht, externalForwardedProps: { ...k, ...pt }, ownerState: S }), [wt, { ownerState: It, ...St }] = T("clickAwayListener", { elementType: Zt, externalForwardedProps: k, getSlotProps: (w) => ({ onClickAway: (...C) => {
    var _a;
    (_a = w.onClickAway) == null ? void 0 : _a.call(w, ...C), gt(...C);
  } }), ownerState: S }), [Lt, Et] = T("content", { elementType: cn, shouldForwardComponentProp: true, externalForwardedProps: k, additionalProps: { message: g, action: c }, ownerState: S }), [kt, Tt] = T("transition", { elementType: Ft, externalForwardedProps: k, getSlotProps: (w) => ({ onEnter: (...C) => {
    var _a;
    (_a = w.onEnter) == null ? void 0 : _a.call(w, ...C), Ct(...C);
  }, onExited: (...C) => {
    var _a;
    (_a = w.onExited) == null ? void 0 : _a.call(w, ...C), bt(...C);
  } }), additionalProps: { appear: true, in: W, timeout: X, direction: s === "top" ? "down" : "up" }, ownerState: S });
  return !W && Mt ? null : h(wt, { ...St, ...G.clickAwayListener && { ownerState: It }, children: h(xt, { ...vt, children: h(kt, { ...Tt, children: u || h(Lt, { ...Et }) }) }) });
});
function fn(t) {
  return B("MuiToolbar", t);
}
j("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const mn = (t) => {
  const { classes: n, disableGutters: o, variant: e } = t;
  return $({ root: ["root", !o && "gutters", e] }, fn, n);
}, pn = E("div", { name: "MuiToolbar", slot: "Root", overridesResolver: (t, n) => {
  const { ownerState: o } = t;
  return [n.root, !o.disableGutters && n.gutters, n[o.variant]];
} })(H(({ theme: t }) => ({ position: "relative", display: "flex", alignItems: "center", variants: [{ props: ({ ownerState: n }) => !n.disableGutters, style: { paddingLeft: t.spacing(2), paddingRight: t.spacing(2), [t.breakpoints.up("sm")]: { paddingLeft: t.spacing(3), paddingRight: t.spacing(3) } } }, { props: { variant: "dense" }, style: { minHeight: 48 } }, { props: { variant: "regular" }, style: t.mixins.toolbar }] }))), Kn = N(function(n, o) {
  const e = Y({ props: n, name: "MuiToolbar" }), { className: a, component: i = "div", disableGutters: c = false, variant: s = "regular", ...r } = e, l = { ...e, component: i, disableGutters: c, variant: s }, u = mn(l);
  return h(pn, { as: i, className: V(u.root, a), ref: o, ownerState: l, ...r });
}), Zn = x(h("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" }), "Add"), qn = x(h("path", { d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z" }), "ArrowDownward"), te = x(h("path", { d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z" }), "ArrowUpward"), ne = x(h("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z" }), "Edit"), ee = x(h("path", { d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z" }), "FormatItalic"), oe = x(h("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z" }), "Refresh"), re = x(h("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14" }), "Search"), se = x(h("path", { d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6" }), "Settings"), ae = x(h("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" }), "Visibility"), yn = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico|apng|tiff?)$/i, lt = "data:image/";
function hn(t) {
  if (t.length === 0 || t.length > 2) return false;
  for (let n = 0; n < t.length; n++) if (t.charCodeAt(n) > 127) return true;
  return false;
}
function ut(t) {
  return typeof t != "string" ? null : t.trim() || null;
}
function gn(t) {
  const n = ut(t);
  return n ? n.startsWith(lt) ? true : yn.test(n) : false;
}
function ie(t) {
  const n = ut(t);
  return n ? n.startsWith(lt) || Gt(n) ? true : hn(n) : false;
}
const Mn = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, bn = /^\d{4}-\d{2}-\d{2}$/, Cn = /^(\d{2})\.(\d{2})\.(\d{4})$/, xn = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, vn = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, wn = /^(\d{2})\/(\d{2})\/(\d{4})$/, In = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Sn = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
function R(t, n) {
  return n >= 1 && n <= 12 && t >= 1 && t <= 31;
}
function F(t, n) {
  return t >= 1 && t <= 12 && n >= 1 && n <= 31;
}
function D(t, n, o) {
  return t >= 0 && t <= 23 && n >= 0 && n <= 59 && (o === void 0 || o >= 0 && o <= 59);
}
const Ln = [{ regex: Mn, format: "ISO-8601" }, { regex: bn, format: "YYYY-MM-DD", validate: (t) => {
  const n = parseInt(t[0].slice(5, 7), 10), o = parseInt(t[0].slice(8, 10), 10);
  return R(o, n);
} }, { regex: vn, format: "dd.MM.yyyy HH:mm:ss", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10), i = parseInt(t[6], 10);
  return R(n, o) && D(e, a, i);
} }, { regex: xn, format: "dd.MM.yyyy HH:mm", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10);
  return R(n, o) && D(e, a);
} }, { regex: Cn, format: "dd.MM.yyyy", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10);
  return R(n, o);
} }, { regex: Sn, format: "MM/dd/yyyy HH:mm:ss", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10), i = parseInt(t[6], 10);
  return F(n, o) && D(e, a, i);
} }, { regex: In, format: "MM/dd/yyyy HH:mm", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10), e = parseInt(t[4], 10), a = parseInt(t[5], 10);
  return F(n, o) && D(e, a);
} }, { regex: wn, format: "MM/dd/yyyy", validate: (t) => {
  const n = parseInt(t[1], 10), o = parseInt(t[2], 10);
  return F(n, o);
} }];
function dt(t, n) {
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
function En(t) {
  var _a;
  return ((_a = dt(t)) == null ? void 0 : _a.format) ?? null;
}
function kn(t) {
  return !Number.isFinite(t) || t < 0 ? null : t >= 1e11 ? "epoch-ms" : t >= 1e9 ? "epoch-s" : null;
}
function Tn(t) {
  if (t == null) return { type: "null" };
  if (typeof t == "boolean") return { type: "boolean" };
  if (typeof t == "number") {
    const n = kn(t);
    return n ? { type: "date", dateFormat: n } : { type: "number" };
  }
  if (typeof t == "string") {
    const n = En(t);
    return n ? { type: "date", dateFormat: n } : gn(t) ? { type: "image" } : { type: "string" };
  }
  return Array.isArray(t) ? { type: "array" } : typeof t == "object" ? { type: "object" } : { type: "string" };
}
function _n(t) {
  const n = Object.keys(t).filter((o) => o !== "null");
  return n.length === 0 ? "null" : n.length === 1 ? n[0] : n.length === 2 && n.includes("date") && n.includes("string") ? "date" : n.length === 2 && n.includes("image") && n.includes("string") ? "image" : "mixed";
}
function Rn(t) {
  let n, o = 0;
  for (const [e, a] of Object.entries(t)) a > o && (n = e, o = a);
  return n;
}
const Dn = 3;
function Pn(t) {
  return { path: t, typeCounts: {}, dateFormatCounts: {}, nullCount: 0, distinctValues: /* @__PURE__ */ new Set(), numMin: void 0, numMax: void 0, strLenMin: void 0, strLenMax: void 0, dateMin: void 0, dateMax: void 0, nonNullCount: 0, samples: [], sampleSeen: /* @__PURE__ */ new Set() };
}
function et(t, n) {
  t[n] = (t[n] || 0) + 1;
}
function An(t, n) {
  if (t == null) return null;
  if (typeof t == "number") return n === "epoch-ms" ? new Date(t).toISOString() : n === "epoch-s" ? new Date(t * 1e3).toISOString() : null;
  if (typeof t != "string") return null;
  const o = t.trim();
  if (n === "ISO-8601" || n === "YYYY-MM-DD") return o;
  if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
    const e = o.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
    if (e) {
      const a = e[1], i = e[2], c = e[3], s = e[4] || "00", r = e[5] || "00", l = e[6] || "00";
      return `${c}-${i}-${a}T${s}:${r}:${l}`;
    }
  }
  if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
    const e = o.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
    if (e) {
      const a = e[1], i = e[2], c = e[3], s = e[4] || "00", r = e[5] || "00", l = e[6] || "00";
      return `${c}-${a}-${i}T${s}:${r}:${l}`;
    }
  }
  return null;
}
function Yn(t, n, o = 100, e = 0.8, a = 0.8) {
  const i = /* @__PURE__ */ new Map();
  for (const c of t) i.set(c, Pn(c));
  for (const c of n) for (const s of t) {
    const r = i.get(s);
    if (!r) {
      console.warn(`[JsonTable] Missing accumulator for path: ${s}`);
      continue;
    }
    const l = c[s], u = Tn(l);
    if (et(r.typeCounts, u.type), u.type === "null") {
      r.nullCount++;
      continue;
    }
    if (r.nonNullCount++, r.samples.length < Dn && (typeof l == "string" || typeof l == "number" || typeof l == "boolean") && !r.sampleSeen.has(l) && (r.sampleSeen.add(l), r.samples.push(l)), u.dateFormat && et(r.dateFormatCounts, u.dateFormat), r.distinctValues.size < o && r.distinctValues.add(l), typeof l == "number" && Number.isFinite(l) && ((r.numMin === void 0 || l < r.numMin) && (r.numMin = l), (r.numMax === void 0 || l > r.numMax) && (r.numMax = l)), typeof l == "string") {
      const d = l.length;
      (r.strLenMin === void 0 || d < r.strLenMin) && (r.strLenMin = d), (r.strLenMax === void 0 || d > r.strLenMax) && (r.strLenMax = d);
    }
    if (u.dateFormat) {
      const d = An(l, u.dateFormat);
      d !== null && ((r.dateMin === void 0 || d < r.dateMin) && (r.dateMin = d), (r.dateMax === void 0 || d > r.dateMax) && (r.dateMax = d));
    }
  }
  return t.map((c) => {
    const s = i.get(c);
    let r = _n(s.typeCounts);
    r === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < e && (r = "string"), r === "image" && s.nonNullCount > 0 && (s.typeCounts.image || 0) / s.nonNullCount < a && (r = "string");
    const l = r === "date" ? Rn(s.dateFormatCounts) : void 0, u = r === "date" ? s.typeCounts.date || 0 : s.typeCounts[r] || 0, d = s.nonNullCount > 0 ? Math.round(u / s.nonNullCount * 100) / 100 : 0, y = { path: c, type: r, nullable: s.nullCount > 0, typeCounts: { ...s.typeCounts }, nullCount: s.nullCount, distinctCount: s.distinctValues.size, confidence: d };
    return l && (y.dateFormat = l), r === "number" && (s.numMin !== void 0 && (y.min = s.numMin), s.numMax !== void 0 && (y.max = s.numMax)), r === "date" && (s.dateMin !== void 0 && (y.min = s.dateMin), s.dateMax !== void 0 && (y.max = s.dateMax)), (r === "string" || r === "mixed") && (s.strLenMin !== void 0 && (y.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (y.stringLengthMax = s.strLenMax)), s.samples.length > 0 && (y.samples = s.samples), y;
  });
}
function A(t, n, o, e, a, i, c, s) {
  if (i > s.maxDepth && (s.maxDepth = i), i > c) {
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
      const l = `${n}[${r}]`;
      A(t[r], l, o, e, a, i + 1, c, s);
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
    for (const l of r) {
      const u = n ? `${n}.${l}` : l;
      A(t[l], u, o, e, a, i + 1, c, s);
    }
    return;
  }
  o[n] = t, e.add(n);
}
function $n(t, n = 10) {
  const o = /* @__PURE__ */ new Set(), e = { maxDepth: 0, maxArrayIndex: 0 }, a = [];
  for (const c of t) {
    const s = {}, r = /* @__PURE__ */ new WeakSet();
    if (c != null && typeof c == "object" && !Array.isArray(c)) for (const l of Object.keys(c)) A(c[l], l, s, o, r, 1, n, e);
    else A(c, "_value", s, o, r, 0, n, e);
    a.push(s);
  }
  const i = Hn([...o]);
  for (const c of a) for (const s of i) s in c || (c[s] = null);
  return { paths: i, rows: a, maxDepth: e.maxDepth, maxArrayIndex: e.maxArrayIndex };
}
function Hn(t) {
  return t.sort((n, o) => {
    const e = ot(n), a = ot(o), i = Math.min(e.length, a.length);
    for (let c = 0; c < i; c++) {
      const s = e[c], r = a[c], l = rt(s), u = rt(r);
      if (l !== null && u !== null) {
        if (l !== u) return l - u;
        continue;
      }
      if (s !== r) return s < r ? -1 : 1;
    }
    return e.length - a.length;
  });
}
function ot(t) {
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
function rt(t) {
  const n = /^\[(\d+)\]$/.exec(t);
  return n ? parseInt(n[1], 10) : null;
}
const Nn = { maxDepth: 10, maxDistinct: 100, dateConfidenceThreshold: 0.8, imageConfidenceThreshold: 0.8 };
function ce(t, n) {
  const o = performance.now(), e = { ...Nn, ...n };
  if (!t || t.length === 0) return { columns: [], rows: [], meta: { rowCount: 0, columnCount: 0, maxDepth: 0, maxArrayIndex: 0, arrayPolicy: "index-columns", flattenPolicy: "dot-paths", dateDetectionPolicy: "heuristic", totalNullValues: 0, nullPercentage: 0, analysisTimeMs: 0 } };
  const a = $n(t, e.maxDepth), i = Yn(a.paths, a.rows, e.maxDistinct, e.dateConfidenceThreshold, e.imageConfidenceThreshold), c = a.paths.length * a.rows.length, s = i.reduce((u, d) => u + d.nullCount, 0), r = c > 0 ? Math.round(s / c * 1e3) / 10 : 0, l = Math.round((performance.now() - o) * 100) / 100;
  return { columns: i, rows: a.rows, meta: { rowCount: a.rows.length, columnCount: i.length, maxDepth: a.maxDepth, maxArrayIndex: a.maxArrayIndex, arrayPolicy: "index-columns", flattenPolicy: "dot-paths", dateDetectionPolicy: "heuristic", totalNullValues: s, nullPercentage: r, analysisTimeMs: l } };
}
const I = (t, n, o, e = 0, a = 0, i = 0) => {
  const c = new Date(t, n - 1, o, e, a, i).getTime();
  return Number.isFinite(c) ? c : null;
}, le = (t, n) => {
  if (typeof t == "number") return !Number.isFinite(t) || t < 0 ? null : t >= 1e11 ? t : t >= 1e9 ? t * 1e3 : null;
  if (typeof t != "string") return null;
  const o = dt(t, n);
  if (!o) return null;
  const e = o.match;
  switch (o.format) {
    case "ISO-8601": {
      const a = Date.parse(e[0]);
      return Number.isNaN(a) ? null : a;
    }
    case "YYYY-MM-DD":
      return I(+e[0].slice(0, 4), +e[0].slice(5, 7), +e[0].slice(8, 10));
    case "dd.MM.yyyy":
      return I(+e[3], +e[2], +e[1]);
    case "dd.MM.yyyy HH:mm":
      return I(+e[3], +e[2], +e[1], +e[4], +e[5]);
    case "dd.MM.yyyy HH:mm:ss":
      return I(+e[3], +e[2], +e[1], +e[4], +e[5], +e[6]);
    case "MM/dd/yyyy":
      return I(+e[3], +e[1], +e[2]);
    case "MM/dd/yyyy HH:mm":
      return I(+e[3], +e[1], +e[2], +e[4], +e[5]);
    case "MM/dd/yyyy HH:mm:ss":
      return I(+e[3], +e[1], +e[2], +e[4], +e[5], +e[6]);
    case "epoch-s":
    case "epoch-ms":
      return null;
    default:
      return null;
  }
}, z = "b64:", On = (t) => {
  const n = new TextEncoder().encode(t);
  let o = "";
  for (let e = 0; e < n.length; e++) o += String.fromCharCode(n[e]);
  return btoa(o);
}, Fn = (t) => {
  const n = atob(t), o = new Uint8Array(n.length);
  for (let e = 0; e < n.length; e++) o[e] = n.charCodeAt(e);
  return new TextDecoder().decode(o);
}, ue = (t) => t ? t.startsWith(z) ? Fn(t.slice(z.length)) : t : "", de = (t) => `${z}${On(t)}`;
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
  ce as a,
  ne as b,
  Jn as c,
  ue as d,
  se as e,
  Qn as f,
  Tn as g,
  de as h,
  ie as i,
  le as p,
  _n as r,
  On as u
};
