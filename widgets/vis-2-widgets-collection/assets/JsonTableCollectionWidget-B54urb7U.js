import { z as Mo, f as Io, g as Ie, a as $e, u as Ce, j as a, s as Z, d as ye, e as we, P as Ue, h as $o, A as Ao, C as bn, D as sn, E as Fo, q as zo, F as Do, T as S, w as pe, m as Se, L as To, c as te, H as Po, J as er, K as Eo, N as zn, b as je, O as ko, p as No, Q as Oo, i as Yt, R as Lo, I as ae, U as tr, W as Ho, S as Ee, B as Bo, n as P, X as oe, G as m, Y as Be, Z as Ve, _ as Vo, $ as Wo, a0 as Go, __tla as __tla_0 } from "./usePopoverPositioning-BqDLZSOn.js";
import { D as _n, b as tt, q as Uo, h as Ye, C as Fe, a as qo, u as Yo, l as Pt, c as Jo, d as Ko, f as Xo, e as nr, w as Qo, __tla as __tla_1 } from "./useData-Crq-Rx8l.js";
import { v as y, a as Zo, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { T as ve, D as es, C as Ge, a as ts, b as Dn, c as xn, A as Et, d as kt, E as Nt, e as Ot, f as Gt, g as ns, __tla as __tla_3 } from "./ColorPickerField-BcEAPXMG.js";
import { C as Mt, __tla as __tla_4 } from "./Checkbox-GYk87g_3.js";
import { D as Tn, a as Pn, b as En, __tla as __tla_5 } from "./DialogTitle-pmFAOxzm.js";
import { B as ke, __tla as __tla_6 } from "./Button-DAVD_7bX.js";
import { S as rs, __tla as __tla_7 } from "./Slider-EI4H9hCW.js";
import { F as nt, __tla as __tla_8 } from "./FormControlLabel-BExMnks8.js";
import { S as wt, __tla as __tla_9 } from "./Switch-DTaOi7A6.js";
import { g as os, M as U, __tla as __tla_10 } from "./MenuItem-DLJcOe5l.js";
import { g as ss, S as me, __tla as __tla_11 } from "./Stack-zIRvtdYR.js";
import { T as Hr, a as Jt, __tla as __tla_12 } from "./ToggleButtonGroup-gCQD3IkX.js";
import { C as Kt, __tla as __tla_13 } from "./Close-BceXwG1O.js";
import { u as is, __tla as __tla_14 } from "./useOidValue-BIUyG6wS.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_15 } from "./SwitchBase-CWi7Or7W.js";
import { __tla as __tla_16 } from "./listItemTextClasses-COCnrX4C.js";
let Fn;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_15;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_16;
    } catch {
    }
  })()
]).then(async () => {
  function ls(e, t, n, r, o) {
    const [s, i] = y.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return Io(() => {
      if (!n) return;
      const l = n(e), u = () => {
        i(l.matches);
      };
      return u(), l.addEventListener("change", u), () => {
        l.removeEventListener("change", u);
      };
    }, [
      e,
      n
    ]), s;
  }
  const as = {
    ...Zo
  }, Br = as.useSyncExternalStore;
  function us(e, t, n, r, o) {
    const s = y.useCallback(() => t, [
      t
    ]), i = y.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: d } = r(e);
        return () => d;
      }
      return s;
    }, [
      s,
      e,
      r,
      o,
      n
    ]), [l, u] = y.useMemo(() => {
      if (n === null) return [
        s,
        () => () => {
        }
      ];
      const d = n(e);
      return [
        () => d.matches,
        (g) => (d.addEventListener("change", g), () => {
          d.removeEventListener("change", g);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return Br(u, l, i);
  }
  function Vr(e = {}) {
    const { themeId: t } = e;
    return function(r, o = {}) {
      let s = Mo();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: u = i ? window.matchMedia : null, ssrMatchMedia: c = null, noSsr: d = false } = ss({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let g = typeof r == "function" ? r(s) : r;
      return g = g.replace(/^@media( ?)/m, ""), g.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (Br !== void 0 ? us : ls)(g, l, u, c, d);
    };
  }
  Vr();
  function cs(e) {
    return Ie("MuiCard", e);
  }
  $e("MuiCard", [
    "root"
  ]);
  const ds = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, cs, t);
  }, fs = Z(Ue, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), ps = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiCard"
    }), { className: o, raised: s = false, ...i } = r, l = {
      ...r,
      raised: s
    }, u = ds(l);
    return a.jsx(fs, {
      className: ye(u.root, o),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function rr(e) {
    return e.substring(2).toLowerCase();
  }
  function gs(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function hs(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: r = "onClick", onClickAway: o, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), u = y.useRef(false), c = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      u.current = true;
    }, 0), () => {
      u.current = false;
    }), []);
    const d = $o(Ao(t), l), g = bn((h) => {
      const b = c.current;
      c.current = false;
      const _ = sn(l.current);
      if (!u.current || !l.current || "clientX" in h && gs(h, _)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !_.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !b) && o(h);
    }), p = (h) => (b) => {
      c.current = true;
      const _ = t.props[h];
      _ && _(b);
    }, f = {
      ref: d
    };
    return s !== false && (f[s] = p(s)), y.useEffect(() => {
      if (s !== false) {
        const h = rr(s), b = sn(l.current), _ = () => {
          i.current = true;
        };
        return b.addEventListener(h, g), b.addEventListener("touchmove", _), () => {
          b.removeEventListener(h, g), b.removeEventListener("touchmove", _);
        };
      }
    }, [
      g,
      s
    ]), r !== false && (f[r] = p(r)), y.useEffect(() => {
      if (r !== false) {
        const h = rr(r), b = sn(l.current);
        return b.addEventListener(h, g), () => {
          b.removeEventListener(h, g);
        };
      }
    }, [
      g,
      r
    ]), y.cloneElement(t, f);
  }
  const ms = Vr({
    themeId: Fo
  });
  function ys(e) {
    return Ie("MuiInputAdornment", e);
  }
  const or = $e("MuiInputAdornment", [
    "root",
    "filled",
    "standard",
    "outlined",
    "positionStart",
    "positionEnd",
    "disablePointerEvents",
    "hiddenLabel",
    "sizeSmall"
  ]);
  var sr;
  const bs = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${pe(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, _s = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: r, position: o, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        o && `position${pe(o)}`,
        i,
        r && "hiddenLabel",
        s && `size${pe(s)}`
      ]
    };
    return we(l, ys, t);
  }, xs = Z("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: bs
  })(Se(({ theme: e }) => ({
    display: "flex",
    maxHeight: "2em",
    alignItems: "center",
    whiteSpace: "nowrap",
    color: (e.vars || e).palette.action.active,
    variants: [
      {
        props: {
          variant: "filled"
        },
        style: {
          [`&.${or.positionStart}&:not(.${or.hiddenLabel})`]: {
            marginTop: 16
          }
        }
      },
      {
        props: {
          position: "start"
        },
        style: {
          marginRight: 8
        }
      },
      {
        props: {
          position: "end"
        },
        style: {
          marginLeft: 8
        }
      },
      {
        props: {
          disablePointerEvents: true
        },
        style: {
          pointerEvents: "none"
        }
      }
    ]
  }))), Wr = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiInputAdornment"
    }), { children: o, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: u = false, position: c, variant: d, ...g } = r, p = zo() || {};
    let f = d;
    d && p.variant, p && !f && (f = p.variant);
    const h = {
      ...r,
      hiddenLabel: p.hiddenLabel,
      size: p.size,
      disablePointerEvents: l,
      position: c,
      variant: f
    }, b = _s(h);
    return a.jsx(Do.Provider, {
      value: null,
      children: a.jsx(xs, {
        as: i,
        ownerState: h,
        className: ye(b.root, s),
        ref: n,
        ...g,
        children: typeof o == "string" && !u ? a.jsx(S, {
          color: "textSecondary",
          children: o
        }) : a.jsxs(y.Fragment, {
          children: [
            c === "start" ? sr || (sr = a.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            o
          ]
        })
      })
    });
  }), vs = (e) => {
    const { alignItems: t, classes: n } = e;
    return we({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, os, n);
  }, Cs = Z("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(Se(({ theme: e }) => ({
    minWidth: 56,
    color: (e.vars || e).palette.action.active,
    flexShrink: 0,
    display: "inline-flex",
    variants: [
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          marginTop: 8
        }
      }
    ]
  }))), gt = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiListItemIcon"
    }), { className: o, ...s } = r, i = y.useContext(To), l = {
      ...r,
      alignItems: i.alignItems
    }, u = vs(l);
    return a.jsx(Cs, {
      className: ye(u.root, o),
      ownerState: l,
      ref: n,
      ...s
    });
  }), ws = te(a.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Ss = te(a.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function js(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: r, open: o, resumeHideDuration: s } = e, i = Po();
    y.useEffect(() => {
      if (!o) return;
      function x(C) {
        C.defaultPrevented || C.key === "Escape" && (r == null ? void 0 : r(C, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      o,
      r
    ]);
    const l = bn((x, C) => {
      r == null ? void 0 : r(x, C);
    }), u = bn((x) => {
      !r || x == null || i.start(x, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (o && u(t), i.clear), [
      o,
      t,
      u,
      i
    ]);
    const c = (x) => {
      r == null ? void 0 : r(x, "clickaway");
    }, d = i.clear, g = y.useCallback(() => {
      t != null && u(s ?? t * 0.5);
    }, [
      t,
      s,
      u
    ]), p = (x) => (C) => {
      const M = x.onBlur;
      M == null ? void 0 : M(C), g();
    }, f = (x) => (C) => {
      const M = x.onFocus;
      M == null ? void 0 : M(C), d();
    }, h = (x) => (C) => {
      const M = x.onMouseEnter;
      M == null ? void 0 : M(C), d();
    }, b = (x) => (C) => {
      const M = x.onMouseLeave;
      M == null ? void 0 : M(C), g();
    };
    return y.useEffect(() => {
      if (!n && o) return window.addEventListener("focus", g), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", g), window.removeEventListener("blur", d);
      };
    }, [
      n,
      o,
      g,
      d
    ]), {
      getRootProps: (x = {}) => {
        const C = {
          ...er(e),
          ...er(x)
        };
        return {
          role: "presentation",
          ...x,
          ...C,
          onBlur: p(C),
          onFocus: f(C),
          onMouseEnter: h(C),
          onMouseLeave: b(C)
        };
      },
      onClickAway: c
    };
  }
  function Rs(e) {
    return Ie("MuiSnackbarContent", e);
  }
  $e("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const Ms = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, Rs, t);
  }, Is = Z(Ue, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Se(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Eo(e.palette.background.default, t);
    return {
      ...e.typography.body2,
      color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
      backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      padding: "6px 16px",
      borderRadius: (e.vars || e).shape.borderRadius,
      flexGrow: 1,
      [e.breakpoints.up("sm")]: {
        flexGrow: "initial",
        minWidth: 288
      }
    };
  })), $s = Z("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), As = Z("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Fs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: o, className: s, message: i, role: l = "alert", ...u } = r, c = r, d = Ms(c);
    return a.jsxs(Is, {
      role: l,
      square: true,
      elevation: 6,
      className: ye(d.root, s),
      ownerState: c,
      ref: n,
      ...u,
      children: [
        a.jsx($s, {
          className: d.message,
          ownerState: c,
          children: i
        }),
        o ? a.jsx(As, {
          className: d.action,
          ownerState: c,
          children: o
        }) : null
      ]
    });
  });
  function zs(e) {
    return Ie("MuiSnackbar", e);
  }
  $e("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const Ds = (e) => {
    const { classes: t, anchorOrigin: n } = e, r = {
      root: [
        "root",
        `anchorOrigin${pe(n.vertical)}${pe(n.horizontal)}`
      ]
    };
    return we(r, zs, t);
  }, Ts = Z("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${pe(n.anchorOrigin.vertical)}${pe(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(Se(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top",
        style: {
          top: 8,
          [e.breakpoints.up("sm")]: {
            top: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical !== "top",
        style: {
          bottom: 8,
          [e.breakpoints.up("sm")]: {
            bottom: 24
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "left",
        style: {
          justifyContent: "flex-start",
          [e.breakpoints.up("sm")]: {
            left: 24,
            right: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "right",
        style: {
          justifyContent: "flex-end",
          [e.breakpoints.up("sm")]: {
            right: 24,
            left: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.horizontal === "center",
        style: {
          [e.breakpoints.up("sm")]: {
            left: "50%",
            right: "auto",
            transform: "translateX(-50%)"
          }
        }
      }
    ]
  }))), Ps = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiSnackbar"
    }), o = zn(), s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: u } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: c = null, children: d, className: g, ClickAwayListenerProps: p, ContentProps: f, disableWindowBlurListener: h = false, message: b, onBlur: _, onClose: x, onFocus: C, onMouseEnter: M, onMouseLeave: A, open: F, resumeHideDuration: R, slots: $ = {}, slotProps: j = {}, TransitionComponent: O, transitionDuration: L = s, TransitionProps: { onEnter: W, onExited: ie, ...ue } = {}, ...le } = r, ne = {
      ...r,
      anchorOrigin: {
        vertical: l,
        horizontal: u
      },
      autoHideDuration: c,
      disableWindowBlurListener: h,
      TransitionComponent: O,
      transitionDuration: L
    }, ce = Ds(ne), { getRootProps: ee, onClickAway: v } = js({
      ...ne
    }), [T, E] = y.useState(true), k = (Te) => {
      E(true), ie && ie(Te);
    }, re = (Te, Ae) => {
      E(false), W && W(Te, Ae);
    }, G = {
      slots: {
        transition: O,
        ...$
      },
      slotProps: {
        content: f,
        clickAwayListener: p,
        transition: ue,
        ...j
      }
    }, [Ne, Oe] = je("root", {
      ref: n,
      className: [
        ce.root,
        g
      ],
      elementType: Ts,
      getSlotProps: ee,
      externalForwardedProps: {
        ...G,
        ...le
      },
      ownerState: ne
    }), [ge, { ownerState: qe, ...De }] = je("clickAwayListener", {
      elementType: hs,
      externalForwardedProps: G,
      getSlotProps: (Te) => ({
        onClickAway: (...Ae) => {
          var _a2;
          (_a2 = Te.onClickAway) == null ? void 0 : _a2.call(Te, ...Ae), v(...Ae);
        }
      }),
      ownerState: ne
    }), [q, dt] = je("content", {
      elementType: Fs,
      shouldForwardComponentProp: true,
      externalForwardedProps: G,
      additionalProps: {
        message: b,
        action: i
      },
      ownerState: ne
    }), [ot, be] = je("transition", {
      elementType: ko,
      externalForwardedProps: G,
      getSlotProps: (Te) => ({
        onEnter: (...Ae) => {
          var _a2;
          (_a2 = Te.onEnter) == null ? void 0 : _a2.call(Te, ...Ae), re(...Ae);
        },
        onExited: (...Ae) => {
          var _a2;
          (_a2 = Te.onExited) == null ? void 0 : _a2.call(Te, ...Ae), k(...Ae);
        }
      }),
      additionalProps: {
        appear: true,
        in: F,
        timeout: L,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: ne
    });
    return !F && T ? null : a.jsx(ge, {
      ...De,
      ...$.clickAwayListener && {
        ownerState: qe
      },
      children: a.jsx(Ne, {
        ...Oe,
        children: a.jsx(ot, {
          ...be,
          children: d || a.jsx(q, {
            ...dt
          })
        })
      })
    });
  }), Gr = y.createContext();
  function Es(e) {
    return Ie("MuiTable", e);
  }
  $e("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const ks = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return we({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Es, t);
  }, Ns = Z("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(Se(({ theme: e }) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
      ...e.typography.body2,
      padding: e.spacing(2),
      color: (e.vars || e).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          borderCollapse: "separate"
        }
      }
    ]
  }))), ir = "table", Os = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTable"
    }), { className: o, component: s = ir, padding: i = "normal", size: l = "medium", stickyHeader: u = false, ...c } = r, d = {
      ...r,
      component: s,
      padding: i,
      size: l,
      stickyHeader: u
    }, g = ks(d), p = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: u
    }), [
      i,
      l,
      u
    ]);
    return a.jsx(Gr.Provider, {
      value: p,
      children: a.jsx(Ns, {
        as: s,
        role: s === ir ? null : "table",
        ref: n,
        className: ye(g.root, o),
        ownerState: d,
        ...c
      })
    });
  }), tn = y.createContext();
  function Ls(e) {
    return Ie("MuiTableBody", e);
  }
  $e("MuiTableBody", [
    "root"
  ]);
  const Hs = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Ls, t);
  }, Bs = Z("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Vs = {
    variant: "body"
  }, lr = "tbody", Ws = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableBody"
    }), { className: o, component: s = lr, ...i } = r, l = {
      ...r,
      component: s
    }, u = Hs(l);
    return a.jsx(tn.Provider, {
      value: Vs,
      children: a.jsx(Bs, {
        className: ye(u.root, o),
        as: s,
        ref: n,
        role: s === lr ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Gs(e) {
    return Ie("MuiTableCell", e);
  }
  const Us = $e("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader"
  ]), qs = (e) => {
    const { classes: t, variant: n, align: r, padding: o, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        r !== "inherit" && `align${pe(r)}`,
        o !== "normal" && `padding${pe(o)}`,
        `size${pe(s)}`
      ]
    };
    return we(l, Gs, t);
  }, Ys = Z("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${pe(n.size)}`],
        n.padding !== "normal" && t[`padding${pe(n.padding)}`],
        n.align !== "inherit" && t[`align${pe(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(Se(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? No(Yt(e.palette.divider, 1), 0.88) : Oo(Yt(e.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16,
    variants: [
      {
        props: {
          variant: "head"
        },
        style: {
          color: (e.vars || e).palette.text.primary,
          lineHeight: e.typography.pxToRem(24),
          fontWeight: e.typography.fontWeightMedium
        }
      },
      {
        props: {
          variant: "body"
        },
        style: {
          color: (e.vars || e).palette.text.primary
        }
      },
      {
        props: {
          variant: "footer"
        },
        style: {
          color: (e.vars || e).palette.text.secondary,
          lineHeight: e.typography.pxToRem(21),
          fontSize: e.typography.pxToRem(12)
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: "6px 16px",
          [`&.${Us.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }
      },
      {
        props: {
          padding: "checkbox"
        },
        style: {
          width: 48,
          padding: "0 0 0 4px"
        }
      },
      {
        props: {
          padding: "none"
        },
        style: {
          padding: 0
        }
      },
      {
        props: {
          align: "left"
        },
        style: {
          textAlign: "left"
        }
      },
      {
        props: {
          align: "center"
        },
        style: {
          textAlign: "center"
        }
      },
      {
        props: {
          align: "right"
        },
        style: {
          textAlign: "right",
          flexDirection: "row-reverse"
        }
      },
      {
        props: {
          align: "justify"
        },
        style: {
          textAlign: "justify"
        }
      },
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (e.vars || e).palette.background.default
        }
      }
    ]
  }))), Ke = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableCell"
    }), { align: o = "inherit", className: s, component: i, padding: l, scope: u, size: c, sortDirection: d, variant: g, ...p } = r, f = y.useContext(Gr), h = y.useContext(tn), b = h && h.variant === "head";
    let _;
    i ? _ = i : _ = b ? "th" : "td";
    let x = u;
    _ === "td" ? x = void 0 : !x && b && (x = "col");
    const C = g || h && h.variant, M = {
      ...r,
      align: o,
      component: _,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: c || (f && f.size ? f.size : "medium"),
      sortDirection: d,
      stickyHeader: C === "head" && f && f.stickyHeader,
      variant: C
    }, A = qs(M);
    let F = null;
    return d && (F = d === "asc" ? "ascending" : "descending"), a.jsx(Ys, {
      as: _,
      ref: n,
      className: ye(A.root, s),
      "aria-sort": F,
      scope: x,
      ownerState: M,
      ...p
    });
  });
  function Js(e) {
    return Ie("MuiTableContainer", e);
  }
  $e("MuiTableContainer", [
    "root"
  ]);
  const Ks = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Js, t);
  }, Xs = Z("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Qs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableContainer"
    }), { className: o, component: s = "div", ...i } = r, l = {
      ...r,
      component: s
    }, u = Ks(l);
    return a.jsx(Xs, {
      ref: n,
      as: s,
      className: ye(u.root, o),
      ownerState: l,
      ...i
    });
  });
  function Zs(e) {
    return Ie("MuiTableHead", e);
  }
  $e("MuiTableHead", [
    "root"
  ]);
  const ei = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Zs, t);
  }, ti = Z("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), ni = {
    variant: "head"
  }, ar = "thead", ri = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableHead"
    }), { className: o, component: s = ar, ...i } = r, l = {
      ...r,
      component: s
    }, u = ei(l);
    return a.jsx(tn.Provider, {
      value: ni,
      children: a.jsx(ti, {
        as: s,
        className: ye(u.root, o),
        ref: n,
        role: s === ar ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function oi(e) {
    return Ie("MuiToolbar", e);
  }
  $e("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const si = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return we({
      root: [
        "root",
        !n && "gutters",
        r
      ]
    }, oi, t);
  }, ii = Z("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disableGutters && t.gutters,
        t[n.variant]
      ];
    }
  })(Se(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3)
          }
        }
      },
      {
        props: {
          variant: "dense"
        },
        style: {
          minHeight: 48
        }
      },
      {
        props: {
          variant: "regular"
        },
        style: e.mixins.toolbar
      }
    ]
  }))), Ur = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiToolbar"
    }), { className: o, component: s = "div", disableGutters: i = false, variant: l = "regular", ...u } = r, c = {
      ...r,
      component: s,
      disableGutters: i,
      variant: l
    }, d = si(c);
    return a.jsx(ii, {
      as: s,
      className: ye(d.root, o),
      ref: n,
      ownerState: c,
      ...u
    });
  }), li = te(a.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), ai = te(a.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), ui = y.forwardRef(function(t, n) {
    const { backIconButtonProps: r, count: o, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: u, page: c, rowsPerPage: d, showFirstButton: g, showLastButton: p, slots: f = {}, slotProps: h = {}, ...b } = t, _ = Lo(), x = (k) => {
      u(k, 0);
    }, C = (k) => {
      u(k, c - 1);
    }, M = (k) => {
      u(k, c + 1);
    }, A = (k) => {
      u(k, Math.max(0, Math.ceil(o / d) - 1));
    }, F = f.firstButton ?? ae, R = f.lastButton ?? ae, $ = f.nextButton ?? ae, j = f.previousButton ?? ae, O = f.firstButtonIcon ?? ws, L = f.lastButtonIcon ?? Ss, W = f.nextButtonIcon ?? ai, ie = f.previousButtonIcon ?? li, ue = _ ? R : F, le = _ ? $ : j, ne = _ ? j : $, ce = _ ? F : R, ee = _ ? h.lastButton : h.firstButton, v = _ ? h.nextButton : h.previousButton, T = _ ? h.previousButton : h.nextButton, E = _ ? h.firstButton : h.lastButton;
    return a.jsxs("div", {
      ref: n,
      ...b,
      children: [
        g && a.jsx(ue, {
          onClick: x,
          disabled: s || c === 0,
          "aria-label": i("first", c),
          title: i("first", c),
          ...ee,
          children: _ ? a.jsx(L, {
            ...h.lastButtonIcon
          }) : a.jsx(O, {
            ...h.firstButtonIcon
          })
        }),
        a.jsx(le, {
          onClick: C,
          disabled: s || c === 0,
          color: "inherit",
          "aria-label": i("previous", c),
          title: i("previous", c),
          ...v ?? r,
          children: _ ? a.jsx(W, {
            ...h.nextButtonIcon
          }) : a.jsx(ie, {
            ...h.previousButtonIcon
          })
        }),
        a.jsx(ne, {
          onClick: M,
          disabled: s || (o !== -1 ? c >= Math.ceil(o / d) - 1 : false),
          color: "inherit",
          "aria-label": i("next", c),
          title: i("next", c),
          ...T ?? l,
          children: _ ? a.jsx(ie, {
            ...h.previousButtonIcon
          }) : a.jsx(W, {
            ...h.nextButtonIcon
          })
        }),
        p && a.jsx(ce, {
          onClick: A,
          disabled: s || c >= Math.ceil(o / d) - 1,
          "aria-label": i("last", c),
          title: i("last", c),
          ...E,
          children: _ ? a.jsx(O, {
            ...h.firstButtonIcon
          }) : a.jsx(L, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function ci(e) {
    return Ie("MuiTablePagination", e);
  }
  const St = $e("MuiTablePagination", [
    "root",
    "toolbar",
    "spacer",
    "selectLabel",
    "selectRoot",
    "select",
    "selectIcon",
    "input",
    "menuItem",
    "displayedRows",
    "actions"
  ]);
  var ur;
  const di = Z(Ke, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(Se(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), fi = Z(Ur, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${St.actions}`]: t.actions,
      ...t.toolbar
    })
  })(Se(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${St.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), pi = Z("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), gi = Z("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(Se(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), hi = Z(Ee, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${St.selectIcon}`]: t.selectIcon,
      [`& .${St.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${St.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), mi = Z(U, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), yi = Z("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(Se(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function bi({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function _i(e) {
    return `Go to ${e} page`;
  }
  const xi = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ],
      toolbar: [
        "toolbar"
      ],
      spacer: [
        "spacer"
      ],
      selectLabel: [
        "selectLabel"
      ],
      select: [
        "select"
      ],
      input: [
        "input"
      ],
      selectIcon: [
        "selectIcon"
      ],
      menuItem: [
        "menuItem"
      ],
      displayedRows: [
        "displayedRows"
      ],
      actions: [
        "actions"
      ]
    }, ci, t);
  }, vi = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: o = ui, backIconButtonProps: s, colSpan: i, component: l = Ke, count: u, disabled: c = false, getItemAriaLabel: d = _i, labelDisplayedRows: g = bi, labelRowsPerPage: p = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: b, page: _, rowsPerPage: x, rowsPerPageOptions: C = [
      10,
      25,
      50,
      100
    ], SelectProps: M = {}, showFirstButton: A = false, showLastButton: F = false, slotProps: R = {}, slots: $ = {}, ...j } = r, O = r, L = xi(O), W = (R == null ? void 0 : R.select) ?? M, ie = W.native ? "option" : mi;
    let ue;
    (l === Ke || l === "td") && (ue = i || 1e3);
    const le = tr(W.id), ne = tr(W.labelId), ce = () => u === -1 ? (_ + 1) * x : x === -1 ? u : Math.min(u, (_ + 1) * x), ee = {
      slots: $,
      slotProps: R
    }, [v, T] = je("root", {
      ref: n,
      className: L.root,
      elementType: di,
      externalForwardedProps: {
        ...ee,
        component: l,
        ...j
      },
      ownerState: O,
      additionalProps: {
        colSpan: ue
      }
    }), [E, k] = je("toolbar", {
      className: L.toolbar,
      elementType: fi,
      externalForwardedProps: ee,
      ownerState: O
    }), [re, G] = je("spacer", {
      className: L.spacer,
      elementType: pi,
      externalForwardedProps: ee,
      ownerState: O
    }), [Ne, Oe] = je("selectLabel", {
      className: L.selectLabel,
      elementType: gi,
      externalForwardedProps: ee,
      ownerState: O,
      additionalProps: {
        id: ne
      }
    }), [ge, qe] = je("select", {
      className: L.select,
      elementType: hi,
      externalForwardedProps: ee,
      ownerState: O
    }), [De, q] = je("menuItem", {
      className: L.menuItem,
      elementType: ie,
      externalForwardedProps: ee,
      ownerState: O
    }), [dt, ot] = je("displayedRows", {
      className: L.displayedRows,
      elementType: yi,
      externalForwardedProps: ee,
      ownerState: O
    });
    return a.jsx(v, {
      ...T,
      children: a.jsxs(E, {
        ...k,
        children: [
          a.jsx(re, {
            ...G
          }),
          C.length > 1 && a.jsx(Ne, {
            ...Oe,
            children: p
          }),
          C.length > 1 && a.jsx(ge, {
            variant: "standard",
            ...!W.variant && {
              input: ur || (ur = a.jsx(Ho, {}))
            },
            value: x,
            onChange: b,
            id: le,
            labelId: ne,
            ...W,
            classes: {
              ...W.classes,
              root: ye(L.input, L.selectRoot, (W.classes || {}).root),
              select: ye(L.select, (W.classes || {}).select),
              icon: ye(L.selectIcon, (W.classes || {}).icon)
            },
            disabled: c,
            ...qe,
            children: C.map((be) => y.createElement(De, {
              ...q,
              key: be.label ? be.label : be,
              value: be.value ? be.value : be
            }, be.label ? be.label : be))
          }),
          a.jsx(dt, {
            ...ot,
            children: g({
              from: u === 0 ? 0 : _ * x + 1,
              to: ce(),
              count: u === -1 ? -1 : u,
              page: _
            })
          }),
          a.jsx(o, {
            className: L.actions,
            backIconButtonProps: s,
            count: u,
            nextIconButtonProps: f,
            onPageChange: h,
            page: _,
            rowsPerPage: x,
            showFirstButton: A,
            showLastButton: F,
            slotProps: R.actions,
            slots: $.actions,
            getItemAriaLabel: d,
            disabled: c
          })
        ]
      })
    });
  });
  function Ci(e) {
    return Ie("MuiTableRow", e);
  }
  const cr = $e("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), wi = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: s } = e;
    return we({
      root: [
        "root",
        n && "selected",
        r && "hover",
        o && "head",
        s && "footer"
      ]
    }, Ci, t);
  }, Si = Z("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.head && t.head,
        n.footer && t.footer
      ];
    }
  })(Se(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${cr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${cr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Yt(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Yt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), dr = "tr", ht = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableRow"
    }), { className: o, component: s = dr, hover: i = false, selected: l = false, ...u } = r, c = y.useContext(tn), d = {
      ...r,
      component: s,
      hover: i,
      selected: l,
      head: c && c.variant === "head",
      footer: c && c.variant === "footer"
    }, g = wi(d);
    return a.jsx(Si, {
      as: s,
      ref: n,
      className: ye(g.root, o),
      role: s === dr ? null : "row",
      ownerState: d,
      ...u
    });
  }), ji = te(a.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function Ri(e) {
    return Ie("MuiTableSortLabel", e);
  }
  const ln = $e("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Mi = (e) => {
    const { classes: t, direction: n, active: r } = e, o = {
      root: [
        "root",
        r && "active",
        `direction${pe(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${pe(n)}`
      ]
    };
    return we(o, Ri, t);
  }, Ii = Z(Bo, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(Se(({ theme: e }) => ({
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "flex-start",
    flexDirection: "inherit",
    alignItems: "center",
    "&:focus": {
      color: (e.vars || e).palette.text.secondary
    },
    "&:hover": {
      color: (e.vars || e).palette.text.secondary,
      [`& .${ln.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${ln.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${ln.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), $i = Z("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${pe(n.direction)}`]
      ];
    }
  })(Se(({ theme: e }) => ({
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: e.transitions.create([
      "opacity",
      "transform"
    ], {
      duration: e.transitions.duration.shorter
    }),
    userSelect: "none",
    variants: [
      {
        props: {
          direction: "desc"
        },
        style: {
          transform: "rotate(0deg)"
        }
      },
      {
        props: {
          direction: "asc"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }))), Ai = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: o = false, children: s, className: i, direction: l = "asc", hideSortIcon: u = false, IconComponent: c = ji, slots: d = {}, slotProps: g = {}, ...p } = r, f = {
      ...r,
      active: o,
      direction: l,
      hideSortIcon: u,
      IconComponent: c
    }, h = Mi(f), b = {
      slots: d,
      slotProps: g
    }, [_, x] = je("root", {
      elementType: Ii,
      externalForwardedProps: b,
      ownerState: f,
      className: ye(h.root, i),
      ref: n
    }), [C, M] = je("icon", {
      elementType: $i,
      externalForwardedProps: b,
      ownerState: f,
      className: h.icon
    });
    return a.jsxs(_, {
      disableRipple: true,
      component: "span",
      ...x,
      ...p,
      children: [
        s,
        u && !o ? null : a.jsx(C, {
          as: c,
          ...M
        })
      ]
    });
  }), qr = te(a.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Yr = te(a.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Jr = te(a.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), Fi = te(a.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), fr = te(a.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), zi = te(a.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), Di = te(a.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), pr = te(a.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), gr = te(a.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Ti = te(a.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Pi = te(a.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), Ct = te(a.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Kr = te(a.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Ei = te(a.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), ki = te(a.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Xr = te(a.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), jt = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, hr = "b64:";
  function Ni(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
    return btoa(n);
  }
  function Oi(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return new TextDecoder().decode(n);
  }
  function Qr(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(hr) ? Oi(e.slice(hr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Li({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: s, loading: i }) {
    const [l, u] = y.useState(""), [c, d] = y.useState(null), [g, p] = y.useState(null), [f, h] = y.useState(false), b = y.useRef(0), _ = y.useRef(/* @__PURE__ */ new Map()), x = !l, C = y.useMemo(() => {
      if (!l) return e;
      const v = l.toLowerCase();
      return e.filter((T) => T.path.toLowerCase().includes(v) || T.headerName.toLowerCase().includes(v));
    }, [
      e,
      l
    ]), M = y.useMemo(() => e.filter((v) => v.visible).length, [
      e
    ]), A = y.useCallback((v) => {
      o(e.map((T) => T.path === v ? {
        ...T,
        visible: !T.visible
      } : T));
    }, [
      e,
      o
    ]), F = y.useCallback((v, T) => {
      v.stopPropagation(), A(T);
    }, [
      A
    ]), R = y.useCallback((v) => (T) => {
      T ? _.current.set(v, T) : _.current.delete(v);
    }, []), $ = y.useCallback((v) => {
      o(e.map((T) => ({
        ...T,
        visible: v
      })));
    }, [
      e,
      o
    ]), j = y.useCallback((v, T) => {
      v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", T), d(T);
    }, []), O = y.useCallback((v, T) => {
      v.preventDefault(), b.current += 1, T !== c && p(T);
    }, [
      c
    ]), L = y.useCallback((v) => {
      v.preventDefault(), b.current -= 1, b.current <= 0 && (b.current = 0, p(null));
    }, []), W = y.useCallback((v) => {
      v.preventDefault(), v.dataTransfer.dropEffect = "move";
    }, []), ie = y.useCallback((v, T) => {
      v.preventDefault(), b.current = 0, p(null), d(null);
      const E = v.dataTransfer.getData("text/plain");
      if (!E || E === T) return;
      const k = [
        ...e
      ], re = k.findIndex((ge) => ge.path === E), G = k.findIndex((ge) => ge.path === T);
      if (re === -1 || G === -1) return;
      const [Ne] = k.splice(re, 1), Oe = re < G ? G - 1 : G;
      k.splice(Oe, 0, Ne), o(k);
    }, [
      e,
      o
    ]), ue = y.useCallback(() => {
      b.current = 0, d(null), p(null);
    }, []), le = y.useCallback(() => {
      o(e.map((v) => ({
        path: v.path,
        visible: true,
        headerName: v.path.split(".").pop() || v.path
      }))), h(false);
    }, [
      e,
      o
    ]), ne = y.useCallback(() => {
      h(true);
    }, []), ce = y.useCallback(() => {
      h(false);
    }, []), ee = y.useCallback((v, T, E) => {
      var _a2, _b;
      switch (v.key) {
        case "Enter":
        case " ":
          v.preventDefault(), r(T.path);
          break;
        case "ArrowDown":
          if (v.preventDefault(), E < C.length - 1) {
            const k = C[E + 1].path;
            r(k), (_a2 = _.current.get(k)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (v.preventDefault(), E > 0) {
            const k = C[E - 1].path;
            r(k), (_b = _.current.get(k)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          v.preventDefault(), A(T.path);
          break;
      }
    }, [
      C,
      r,
      A
    ]);
    return a.jsxs(P, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        a.jsxs(Ur, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            a.jsx(oe, {
              size: "small",
              placeholder: m.t("json_table_search_columns"),
              value: l,
              onChange: (v) => u(v.target.value),
              slotProps: {
                input: {
                  startAdornment: a.jsx(Wr, {
                    position: "start",
                    children: a.jsx(Kr, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": m.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            a.jsx(ve, {
              title: m.t("json_table_refresh_columns"),
              children: a.jsx("span", {
                children: a.jsx(ae, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": m.t("json_table_refresh_columns"),
                  children: a.jsx(Pi, {
                    fontSize: "small"
                  })
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_show_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: () => $(true),
                "aria-label": m.t("json_table_show_all"),
                children: a.jsx(ki, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_hide_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: () => $(false),
                "aria-label": m.t("json_table_hide_all"),
                children: a.jsx(Xr, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_reset_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: ne,
                "aria-label": m.t("json_table_reset_all"),
                children: a.jsx(Ct, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        a.jsx(P, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: C.length === 0 ? a.jsx(P, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: a.jsx(S, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? m.t("json_table_no_columns") : m.t("json_table_no_search_results")
            })
          }) : C.map((v, T) => {
            const E = t.find((G) => G.path === v.path), k = n === v.path, re = (E == null ? void 0 : E.type) || "string";
            return a.jsx(ps, {
              ref: R(v.path),
              "data-column-path": v.path,
              onClick: () => r(v.path),
              onKeyDown: (G) => ee(G, v, T),
              draggable: x,
              onDragStart: x ? (G) => j(G, v.path) : void 0,
              onDragEnter: x ? (G) => O(G, v.path) : void 0,
              onDragLeave: x ? L : void 0,
              onDragOver: x ? W : void 0,
              onDrop: x ? (G) => ie(G, v.path) : void 0,
              onDragEnd: x ? ue : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": k,
              "aria-label": `${v.headerName || v.path}, ${re}, ${v.visible ? m.t("json_table_visible") : m.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: k ? "primary.main" : "divider",
                backgroundColor: k ? "action.selected" : "background.paper",
                opacity: c === v.path ? 0.4 : v.visible ? 1 : 0.55,
                borderTop: g === v.path ? "3px solid" : void 0,
                borderTopColor: g === v.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: k ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: a.jsxs(P, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && a.jsx(es, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  a.jsx(Mt, {
                    checked: v.visible,
                    onClick: (G) => F(G, v.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${m.t("json_table_visible")}: ${v.headerName || v.path}`
                    }
                  }),
                  a.jsxs(P, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      a.jsx(S, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: v.path,
                        children: v.headerName || v.path
                      }),
                      v.headerName && v.headerName !== v.path && a.jsx(S, {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                          fontFamily: "monospace",
                          fontSize: "0.65rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          display: "block"
                        },
                        title: v.path,
                        children: v.path
                      })
                    ]
                  }),
                  a.jsx(Ge, {
                    label: re,
                    size: "small",
                    sx: {
                      backgroundColor: jt[re] || jt.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${m.t("json_table_type")}: ${re}`
                  })
                ]
              })
            }, v.path);
          })
        }),
        e.length > 0 && a.jsx(P, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: a.jsxs(S, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              M,
              " / ",
              e.length,
              " ",
              m.t("json_table_columns_visible")
            ]
          })
        }),
        a.jsxs(Tn, {
          open: f,
          onClose: ce,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            a.jsx(Pn, {
              id: "reset-dialog-title",
              children: m.t("json_table_reset_all")
            }),
            a.jsx(En, {
              children: a.jsx(ts, {
                id: "reset-dialog-description",
                children: m.t("json_table_reset_confirm_message")
              })
            }),
            a.jsxs(Dn, {
              children: [
                a.jsx(ke, {
                  onClick: ce,
                  color: "primary",
                  children: m.t("cancel")
                }),
                a.jsx(ke, {
                  onClick: le,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: m.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Ut(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const Hi = 0, Bi = 20, mr = 2;
  function Vi(e) {
    if (e == null) return mr;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(Hi, Math.min(Bi, Math.floor(t))) : mr;
  }
  function Zr(e, t = {}) {
    const { prefix: n = "", suffix: r = "", thousands: o = false } = t, s = Vi(t.decimals);
    let i = e.toFixed(s);
    if (o) {
      const [l, u] = i.split("."), c = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = u !== void 0 ? `${c}.${u}` : c;
    }
    return `${n}${i}${r}`;
  }
  const Wi = [
    {
      label: "YYYY-MM-DD",
      value: "yyyy-MM-dd"
    },
    {
      label: "DD.MM.YYYY",
      value: "dd.MM.yyyy"
    },
    {
      label: "DD.MM.YYYY HH:mm",
      value: "dd.MM.yyyy HH:mm"
    },
    {
      label: "DD.MM.YYYY HH:mm:ss",
      value: "dd.MM.yyyy HH:mm:ss"
    },
    {
      label: "MM/DD/YYYY",
      value: "MM/dd/yyyy"
    },
    {
      label: "MM/DD/YYYY HH:mm",
      value: "MM/dd/yyyy HH:mm"
    },
    {
      label: "HH:mm:ss",
      value: "HH:mm:ss"
    },
    {
      label: "HH:mm",
      value: "HH:mm"
    },
    {
      label: "ISO-8601 (UTC)",
      value: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
    }
  ];
  function Gi(e, t) {
    if (e == null) return "";
    if (typeof e == "number") {
      const o = new Date(e >= 1e11 ? e : e * 1e3);
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
  function vn(e, t) {
    if (e == null || e === "") return null;
    if (e instanceof Date) {
      const r = e.getTime();
      return isNaN(r) ? null : r;
    }
    if (typeof e == "number") {
      if (!Number.isFinite(e)) return null;
      const r = e >= 1e11 ? e : e * 1e3;
      return isNaN(new Date(r).getTime()) ? null : r;
    }
    if (typeof e != "string") return null;
    const n = e.trim();
    if (!n) return null;
    try {
      if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
        const s = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[2], 10) - 1, parseInt(s[1], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
        const s = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
        if (s) {
          const i = new Date(parseInt(s[3], 10), parseInt(s[1], 10) - 1, parseInt(s[2], 10), parseInt(s[4] ?? "0", 10), parseInt(s[5] ?? "0", 10), parseInt(s[6] ?? "0", 10));
          return isNaN(i.getTime()) ? null : i.getTime();
        }
      }
      const r = n.match(/^(\d{4})-(\d{2})-(\d{2})$/);
      if (r) {
        const s = new Date(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10));
        return isNaN(s.getTime()) ? null : s.getTime();
      }
      if (/^-?\d+$/.test(n)) {
        const s = parseInt(n, 10), i = s >= 1e11 ? s : s * 1e3;
        return isNaN(new Date(i).getTime()) ? null : i;
      }
      const o = new Date(n);
      return isNaN(o.getTime()) ? null : o.getTime();
    } catch {
      return null;
    }
  }
  function kn(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let r;
      if (typeof e == "string") {
        const u = e.trim();
        if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
          const c = u.match(/^(\d{2})\.(\d{2})\.(\d{4})(.*)$/);
          r = c ? /* @__PURE__ */ new Date(`${c[3]}-${c[2]}-${c[1]}${c[4] ?? ""}`) : new Date(u);
        } else if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
          const c = u.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
          r = c ? /* @__PURE__ */ new Date(`${c[3]}-${c[1]}-${c[2]}${c[4] ?? ""}`) : new Date(u);
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(u)) {
          const [c, d, g] = u.split("-").map(Number);
          r = new Date(c, d - 1, g);
        } else r = new Date(u);
      } else if (typeof e == "number") r = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return Ut(e);
      if (isNaN(r.getTime())) return Ut(e);
      const o = t || "yyyy-MM-dd", s = (u, c = 2) => String(u).padStart(c, "0"), i = {
        yyyy: String(r.getFullYear()),
        MM: s(r.getMonth() + 1),
        dd: s(r.getDate()),
        HH: s(r.getHours()),
        mm: s(r.getMinutes()),
        ss: s(r.getSeconds()),
        SSS: s(r.getMilliseconds(), 3)
      };
      if (o === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(o)) return r.toISOString();
      let l = o;
      for (const [u, c] of Object.entries(i).sort((d, g) => g[0].length - d[0].length)) l = l.replaceAll(u, c);
      return l;
    } catch {
      return Ut(e);
    }
  }
  function Cn(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Ut(e);
  }
  function eo(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex && t.stringRegex.length <= 200) try {
      const i = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), l = n.match(i);
      l && (n = l[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (s) => s.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const r = t.stringPrefix ?? "", o = t.stringSuffix ?? "";
    return r || o ? `${r}${n}${o}` : n;
  }
  function Ui({ format: e, onChange: t, discoveredColumn: n }) {
    const r = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const o = typeof n.max == "number" ? n.max : 0;
        return n.min + (o - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(S, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_number_format")
        }),
        a.jsxs(P, {
          children: [
            a.jsxs(S, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                m.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            a.jsx(rs, {
              value: e.numberDecimals ?? 2,
              onChange: (o, s) => t({
                type: "number",
                numberDecimals: s
              }),
              min: 0,
              max: 10,
              marks: true,
              step: 1,
              valueLabelDisplay: "auto",
              size: "small"
            })
          ]
        }),
        a.jsx(oe, {
          label: m.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (o) => t({
            type: "number",
            numberPrefix: o.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        a.jsx(oe, {
          label: m.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (o) => t({
            type: "number",
            numberSuffix: o.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        a.jsx(nt, {
          control: a.jsx(wt, {
            checked: e.numberThousandsSeparator || false,
            onChange: (o) => t({
              type: "number",
              numberThousandsSeparator: o.target.checked
            }),
            size: "small"
          }),
          label: a.jsx(S, {
            variant: "body2",
            children: m.t("json_table_number_thousands")
          })
        }),
        a.jsxs(Ue, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsxs(S, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                r,
                " \u2192",
                " ",
                Zr(r, {
                  decimals: e.numberDecimals,
                  prefix: e.numberPrefix,
                  suffix: e.numberSuffix,
                  thousands: e.numberThousandsSeparator
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function qi({ format: e, detectedFormat: t, onChange: n }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(S, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_date_format")
        }),
        t && a.jsx(oe, {
          label: m.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: m.t("json_table_date_detected_hint")
        }),
        a.jsxs(Be, {
          fullWidth: true,
          size: "small",
          children: [
            a.jsx(Ve, {
              children: m.t("json_table_date_output_format")
            }),
            a.jsx(Ee, {
              label: m.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (r) => n({
                type: "date",
                dateFormat: r.target.value,
                dateInputFormat: t
              }),
              children: Wi.map((r) => a.jsx(U, {
                value: r.value,
                children: r.label
              }, r.value))
            })
          ]
        }),
        a.jsxs(Ue, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsx(S, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: kn(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function Yi({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(S, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_boolean_format")
        }),
        a.jsx(oe, {
          label: m.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        a.jsx(oe, {
          label: m.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        a.jsxs(Ue, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsxs(me, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                a.jsxs(S, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Cn(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                a.jsxs(S, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Cn(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Ji({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(S, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_string_format")
        }),
        a.jsxs(Be, {
          size: "small",
          fullWidth: true,
          children: [
            a.jsx(Ve, {
              children: m.t("json_table_string_case")
            }),
            a.jsxs(Ee, {
              label: m.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                a.jsx(U, {
                  value: "none",
                  children: m.t("json_table_string_case_none")
                }),
                a.jsx(U, {
                  value: "upper",
                  children: m.t("json_table_string_case_upper")
                }),
                a.jsx(U, {
                  value: "lower",
                  children: m.t("json_table_string_case_lower")
                }),
                a.jsx(U, {
                  value: "title",
                  children: m.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        a.jsxs(me, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(oe, {
              label: m.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            a.jsx(oe, {
              label: m.t("json_table_string_suffix"),
              value: e.stringSuffix ?? "",
              onChange: (n) => t({
                type: "string",
                stringSuffix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            })
          ]
        }),
        a.jsx(nt, {
          control: a.jsx(wt, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: m.t("json_table_string_trim")
        }),
        a.jsx(oe, {
          label: m.t("json_table_string_max_length"),
          type: "number",
          value: e.stringMaxLength ?? "",
          onChange: (n) => t({
            type: "string",
            stringMaxLength: n.target.value ? parseInt(n.target.value, 10) : void 0
          }),
          size: "small",
          fullWidth: true,
          slotProps: {
            htmlInput: {
              min: 1
            }
          }
        }),
        a.jsx(oe, {
          label: m.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && a.jsxs(me, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(oe, {
              label: m.t("json_table_string_regex_group"),
              type: "number",
              value: e.stringRegexGroup ?? 0,
              onChange: (n) => t({
                type: "string",
                stringRegexGroup: parseInt(n.target.value, 10) || 0
              }),
              size: "small",
              fullWidth: true,
              slotProps: {
                htmlInput: {
                  min: 0
                }
              }
            }),
            a.jsx(oe, {
              label: m.t("json_table_string_regex_flags"),
              value: e.stringRegexFlags ?? "",
              onChange: (n) => t({
                type: "string",
                stringRegexFlags: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true,
              placeholder: "i, g, m \u2026"
            })
          ]
        }),
        a.jsx(_n, {}),
        a.jsxs(me, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            a.jsx(nt, {
              control: a.jsx(wt, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: a.jsx(S, {
                variant: "body2",
                fontWeight: "bold",
                children: m.t("json_table_string_font_weight")
              })
            }),
            a.jsx(nt, {
              control: a.jsx(wt, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: a.jsx(S, {
                variant: "body2",
                fontStyle: "italic",
                children: m.t("json_table_string_font_style")
              })
            })
          ]
        }),
        a.jsxs(me, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(oe, {
              label: m.t("json_table_string_font_size"),
              type: "number",
              value: e.stringFontSize ?? "",
              onChange: (n) => t({
                type: "string",
                stringFontSize: n.target.value ? parseInt(n.target.value, 10) : void 0
              }),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 8,
                  max: 72
                }
              },
              placeholder: "px"
            }),
            a.jsx(xn, {
              label: m.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        a.jsxs(Ue, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsx(S, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace",
                fontWeight: e.stringFontWeight,
                fontStyle: e.stringFontStyle,
                ...e.stringFontSize && {
                  fontSize: `${e.stringFontSize}px`
                },
                ...e.stringTextColor && {
                  color: e.stringTextColor
                }
              },
              children: eo("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function K(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Ki(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function We(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        We(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        const o = e[n[r]];
        if (typeof o == "object" && o) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          We(o, t - 1);
        }
      }
    }
    return e;
  }
  function Xi(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+K(e)) && t !== null) throw NaN;
    if (Number.isNaN(+K(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Qi(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) await t(o, r++, e) && n.push(o);
    return n;
  }
  async function Zi(e, t) {
    let n = 0;
    for (const r of e) if (await t(r, n++, e)) return true;
    return false;
  }
  async function el(e, t) {
    let n = 0;
    for (const r of e) if (!await t(r, n++, e)) return false;
    return true;
  }
  async function tl(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) n.push(await t(o, r++, e));
    return n;
  }
  async function nl(e, t, n, r = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const o = typeof n > "u" ? 1 : 0;
    let s = We(o ? e[0] : n, r);
    for (let i = o; i < e.length; i++) s = We(await t(s, e[i]), r);
    return s;
  }
  const Xt = {
    filter: Qi,
    some: Zi,
    every: el,
    map: tl,
    reduce: nl
  }, V = /* @__PURE__ */ Symbol.for("json_logic_sync"), he = /* @__PURE__ */ Symbol.for("json_logic_compiled"), ze = /* @__PURE__ */ Symbol.for("json_logic_original"), yr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function rt(e) {
    return typeof e == "function" ? e[V] === true : Array.isArray(e) ? e.every(rt) : !(e && e.asyncMethod && !e.method);
  }
  function to(e, t = true) {
    return e[V] = t, e;
  }
  function It(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const an = /* @__PURE__ */ new WeakMap();
  function br(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (an.has(e) || an.set(e, rl(e)), an.get(e));
  }
  function rl(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function ol(e, ...t) {
    let n = "";
    const r = this;
    for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), rt(t[o]) || (r.asyncDetected = true), n += (rt(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][he] < "u" ? n += t[o][he] : n += X(t[o], r));
    return {
      [he]: n
    };
  }
  function sl(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Qt(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => Qt(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && Qt(o, t, n);
    }
    return true;
  }
  function wn(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => wn(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const r = n[0], o = e[r];
      return rt(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][V] == "function" && t.methods[r][V](e, {
        engine: t
      })) : wn(o, t) : false;
    }
    return true;
  }
  function X(e, t = {}) {
    const { notTraversed: n = [], async: r, processing: o = [], values: s = [], engine: i } = t;
    function l(d, g = false) {
      return sl(d, g) ? JSON.stringify(d) : (s.push(d), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let d = "";
      for (let g = 0; g < e.length; g++) g > 0 && (d += ","), d += X(e[g], t);
      return "[" + d + "]";
    }
    let u = false;
    function c(d) {
      return t.asyncDetected = t.asyncDetected || u, r && u ? `await ${d}` : d;
    }
    if (e && typeof e == "object") {
      const d = Object.keys(e), g = d[0];
      if (!g) return l(e);
      if (!i.methods[g] || d.length > 1) {
        if (i.isData(e, g)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: g
        };
      }
      if (!t.engine.disableInline && i.methods[g] && Qt(e, i, t)) return wn(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (o.push(i.run(e).then((b) => l(b))), `__%%%${o.length - 1}%%%__`);
      let p = e[g];
      if ((!p || typeof p != "object") && !i.methods[g].lazy && (p = [
        p
      ]), i.methods[g] && i.methods[g].compile) {
        let b = i.methods[g].compile(p, t);
        if (b[he] && (b = b[he]), (b || "").startsWith("await") && (t.asyncDetected = true), b !== false) return b;
      }
      let f = i.methods[g].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(p) && p.length === 1 && !Array.isArray(p[0]) ? p = p[0] : f && Array.isArray(p) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[g] == "function") {
        u = !rt(i.methods[g]);
        const b = h[br(i.methods[g]) - 1] || h[2];
        return c(`engine.methods["${g}"](${f}(` + X(p, t) + ")" + b + ")");
      } else {
        u = !!(r && i.methods[g] && i.methods[g].asyncMethod);
        const b = br(u ? i.methods[g].asyncMethod : i.methods[g].method);
        let _ = h[b - 1] || h[2];
        return u && typeof i.methods[g][V] == "function" && i.methods[g][V](p, {
          engine: i
        }) && (u = false, _ = _.replace("engine", "engine.fallback")), i.methods[g] && !i.methods[g].lazy ? c(`engine.methods["${g}"]${u ? ".asyncMethod" : ".method"}(${f}(` + X(p, t) + ")" + _ + ")") : (n.push(p), c(`engine.methods["${g}"]${u ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + _ + ")"));
      }
    }
    return l(e);
  }
  function Zt(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: ol
    }, t));
    const n = X(e, t);
    return il(e, n, t);
  }
  function il(e, t, n) {
    const { engine: r, methods: o, notTraversed: s, processing: i = [], values: l } = n, u = [];
    i.forEach((d, g) => {
      t = t.replace(`__%%%${g}%%%__`, d);
    });
    const c = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(c)(l, o, s, Xt, r, u, It, K, Ki, Xi, We), {
      [V]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const ll = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, ct = ll(), mt = /* @__PURE__ */ new Map();
  function ut(e) {
    if (mt.has(e)) return mt.get(e);
    mt.size > 2048 && mt.clear();
    const t = al(e);
    return mt.set(e, t), t;
  }
  function al(e, t = ".", n = "\\", r = "/") {
    const o = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === r ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (o.push(s), s = "") : s += l;
    }
    return o.length !== e.length && o.push(s), o;
  }
  const Sn = {
    get: {
      [V]: true,
      method: ([e, t, n], r, o, s) => {
        const i = n === void 0 ? null : n, l = ut(String(t));
        for (let u = 0; u < l.length; u++) if (e == null || (e = e[l[u]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, r = e, o = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
          r = r.toString();
          const s = ut(r);
          return ct ? `((${X(o, t)})${s.map((i) => `?.[${X(i, t)}]`).join("")} ?? ${X(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${X(o, t)}||0)`)}, ${X(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [ze]: true,
      [V]: true,
      method: (e, t, n, r) => {
        let o;
        Array.isArray(e) && (o = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = o === void 0 ? null : o;
        if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
        const l = ut(String(e));
        for (let u = 0; u < l.length; u++) if (t == null || (t = t[l[u]], t === void 0)) return i;
        return r.allowFunctions || typeof t != "function" ? t : null;
      },
      deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"),
      optimizeUnary: true,
      compile: (e, t) => {
        let n = e, r = null;
        if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
          if (Array.isArray(e) && (n = e[0], r = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
          if (typeof n > "u" || n === null || n === "") return "context";
          if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
          const o = ut(n);
          if (!ct) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((l, u) => `(${l}||0)[${JSON.stringify(u)}]`, "(context||0)")}, ${X(r, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${o.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${X(r, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [V]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let r = 0; r < e.length; r++) {
          const o = ut(String(e[r]));
          let s = t, i = true;
          for (let l = 0; l < o.length; l++) {
            if (!s) {
              i = false;
              break;
            }
            if (s = s[o[l]], s === void 0) {
              i = false;
              break;
            }
          }
          i || n.push(e[r]);
        }
        return n;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [V]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const r = Sn.missing.method(t, n);
        return t.length - r.length >= e ? [] : r;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let r = Sn.missing.compile(t, n);
        return r || (r = n.compile`engine.methods.missing.method(${{
          [he]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, ul = {
    ...Sn
  }, B = {
    type: "Invalid Arguments"
  };
  function se(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => se(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && se(o, t, n);
    }
    return true;
  }
  function xe(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => xe(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r][V] == "function" ? t.methods[r][V](o, n) : t.methods[r][V] : typeof t.methods[r][V] == "function" ? t.methods[r][V](o, n) : t.methods[r][V] && xe(o, t, n);
    }
    return true;
  }
  function Y(e, t, n, r) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const o = t.optimizedMap.get(e);
      return typeof o == "function" ? o(n, r) : o;
    }
    return t.run(e, n, {
      above: r
    });
  }
  const yt = qt("every", true), H = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return K(+e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      let t = 0;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t += +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "*": (e) => {
      if (e.length === 0) return 1;
      let t = 1;
      for (let n = 0; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t *= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    "/": (e) => {
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
    },
    "-": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return K(-e);
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
    },
    "%": (e) => {
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length < 2) throw B;
      let t = +e[0];
      for (let n = 1; n < e.length; n++) {
        if (e[n] && typeof e[n] == "object") throw NaN;
        t %= +e[n];
      }
      if (Number.isNaN(t)) throw NaN;
      return t;
    },
    throw: (e) => {
      throw Array.isArray(e) && (e = e[0]), typeof e == "object" ? e : {
        type: e
      };
    },
    max: (e) => {
      if (!e.length || typeof e[0] != "number") throw B;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw B;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw B;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw B;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: to((e) => e, true),
      [V]: () => true
    },
    if: {
      [ze]: true,
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (e.length === 1) return Y(e[0], r, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = Y(s, r, t, n);
          if (r.truthy(l)) return Y(i, r, t, n);
        }
        return Y(o, r, t, n);
      },
      [V]: (e, t) => xe(e, t.engine, t),
      deterministic: (e, t) => se(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (e.length === 1) return r.run(e[0], t, {
          above: n
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = await r.run(s, t, {
            above: n
          });
          if (r.truthy(l)) return r.run(i, t, {
            above: n
          });
        }
        return r.run(o, t, {
          above: n
        });
      },
      lazy: true
    },
    "<": Je("<", (e, t) => e < t),
    "<=": Je("<=", (e, t) => e <= t),
    ">": Je(">", (e, t) => e > t),
    ">=": Je(">=", (e, t) => e >= t),
    "==": Je("==", (e, t) => e == t),
    "===": Je("===", (e, t) => e === t),
    "!=": Je("!=", (e, t) => e != t),
    "!==": Je("!==", (e, t) => e !== t),
    or: {
      [V]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), r.truthy(o)) return o;
        return o;
      },
      deterministic: (e, t) => se(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      },
      lazy: true
    },
    "??": {
      [V]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), o != null) return o;
        return o === void 0 ? null : o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), o != null) return o;
        return o === void 0 ? null : o;
      },
      deterministic: (e, t) => se(e, t.engine, t),
      compile: (e, t) => ct ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
        const o = X(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
      }).join(" ?? ")})` : `(${X(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [V]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = Y(e[i], r, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : o = Y(e[i], r, t, n), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      asyncMethod: async (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = await r.run(e[i], {
            type: s.type || s.error || s.message || s.constructor.name
          }, {
            above: [
              null,
              t,
              n
            ]
          }) : o = await r.run(e[i], t, {
            above: n
          }), o;
        } catch (l) {
          Number.isNaN(l) ? s = {
            message: "NaN"
          } : s = l;
        }
        throw s;
      },
      deterministic: (e, t) => se(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && se(e, t.engine, {
        ...t,
        insideIterator: true,
        insideTry: true
      }),
      lazy: true,
      compile: (e, t) => {
        if (!Array.isArray(e) || !e.length) return false;
        let n;
        try {
          "+" in e[0] && e.length > 1 ? n = t.compile`((context, above) => { try { const precoerceNumber = a => a; return Number.isNaN(prev = ${e[0]}) ? ${e[1]} : prev  } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; ` : n = t.compile`((context, above) => { try { return ${e[0]} } catch(err) { above = [null, context, above]; context = { type: err.type || err.message || err.toString() }; `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), n = {
            [he]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; `
          };
        }
        if (e.length > 1) for (let r = 1; r < e.length; r++) try {
          r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r === e.length - 1 ? n = t.compile`${n} throw ${{
            [he]: JSON.stringify(o)
          }} ` : n = t.compile`${n} ${{
            [he]: `context = ${JSON.stringify(o)};`
          }}`;
        }
        else n[he].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[he].includes("await") && (n[he] = n[he].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [V]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), !r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), !r.truthy(o)) return o;
        return o;
      },
      lazy: true,
      deterministic: (e, t) => se(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let r = 0; r < e.length; r++) n = t.compile`${n} !engine.truthy(prev = ${e[r]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      }
    },
    substr: ([e, t, n]) => {
      if (n < 0) {
        const r = e.substr(t);
        return r.substr(0, r.length + n);
      }
      return e.substr(t, n);
    },
    length: {
      method: (e, t, n, r) => {
        if (!e) throw B;
        const o = Y(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw B;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!e) throw B;
        const o = await Y(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw B;
      },
      deterministic: (e, t) => se(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, r) => H.val.method(e, t, n, r, yr) !== yr,
      deterministic: false
    },
    val: {
      [ze]: true,
      [V]: true,
      method: (e, t, n, r, o = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (o && !(t && e in t)) return o;
          if (t == null) return null;
          const l = t[e];
          return typeof l > "u" ? null : l;
        }
        let s = t, i = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          i++;
          const l = +Math.abs(e[0][0]);
          let u = 0;
          for (let c = 0; c < l; c++) s = n[u++], c === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], u = 1);
        }
        for (let l = i; l < e.length; l++) {
          if (o && !(s && e[l] in s)) return o;
          if (s == null) return null;
          s = s[e[l]];
        }
        return typeof s > "u" || typeof s == "function" && !r.allowFunctions ? o : s;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function n(r) {
          let o;
          return ct ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (xe(e, t.engine, t) && se(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(ct ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let r = t.compile`context`;
          for (let o = 0; o < e.length; o++) e[o] !== null && (ct ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
          return n(t.compile`(${r})`);
        }
        return false;
      }
    },
    map: qt("map"),
    some: {
      ...qt("some", true),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        let [o, s] = e;
        o = Y(o, r, t, n) || [];
        for (let i = 0; i < o.length; i++) if (r.truthy(Y(s, r, o[i], [
          o,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [V]: yt[V],
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        const o = Y(e[0], r, t, n) || [];
        if (Array.isArray(o) && o.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < o.length; i++) if (!r.truthy(Y(s, r, o[i], [
          o,
          t,
          n
        ]))) return false;
        return true;
      },
      asyncMethod: async (e, t, n, r) => {
        if (Array.isArray(e)) {
          const o = await r.run(e[0], t, n);
          if (Array.isArray(o) && o.length === 0) return false;
        }
        return yt.asyncMethod(e, t, n, r);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${yt.compile([
        {
          [he]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: yt.deterministic,
      lazy: yt.lazy
    },
    none: {
      [V]: (e, t) => xe(e, t.engine, t),
      lazy: true,
      method: (e, t, n, r) => !H.some.method(e, t, n, r),
      asyncMethod: async (e, t, n, r) => !await H.some.asyncMethod(e, t, n, r),
      compile: (e, t) => {
        const n = H.some.compile(e, t);
        return n ? t.compile`!(${n})` : false;
      }
    },
    merge: (e) => {
      if (!Array.isArray(e)) return [
        e
      ];
      const t = [];
      for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let r = 0; r < e[n].length; r++) t.push(e[n][r]);
      else t.push(e[n]);
      return t;
    },
    filter: qt("filter", true),
    reduce: {
      deterministic: (e, t) => se(e[0], t.engine, t) && se(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw B;
        const { async: n } = t;
        let [r, o, s] = e;
        r = X(r, t), typeof s < "u" && (s = X(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        o = Zt(o, i);
        const l = o.aboveDetected ? "[null, context, above]" : "null", u = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(o), n && (!rt(o) || r.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${r} || []).reduce((a,b) => ${u}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${u}(${s}))` : `(${r} || []).reduce((a,b) => ${u}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        let [o, s, i] = e;
        i = We(Y(i, r, t, n), r.options.maxDepth), o = Y(o, r, t, n) || [];
        let l = (u, c) => We(r.run(s, {
          accumulator: u,
          current: c
        }, {
          above: [
            o,
            t,
            n
          ]
        }), r.options.maxDepth);
        if (r.optimizedMap.has(s) && typeof r.optimizedMap.get(s) == "function") {
          const u = r.optimizedMap.get(s);
          l = (c, d) => We(u({
            accumulator: c,
            current: d
          }, [
            o,
            t,
            n
          ]), r.options.maxDepth);
        }
        return typeof i > "u" ? o.reduce(l) : o.reduce(l, i);
      },
      [V]: (e, t) => xe(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw B;
        let [o, s, i] = e;
        return i = We(await r.run(i, t, {
          above: n
        }), r.options.maxDepth), o = await r.run(o, t, {
          above: n
        }) || [], Xt.reduce(o, (l, u) => r.run(s, {
          accumulator: l,
          current: u
        }, {
          above: [
            o,
            t,
            n
          ]
        }), i, r.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, n, r) => Array.isArray(e) ? !r.truthy(e[0]) : !r.truthy(e),
    "!!": (e, t, n, r) => !!(Array.isArray(e) ? r.truthy(e[0]) : r.truthy(e)),
    cat: {
      [ze]: true,
      [V]: true,
      method: (e) => {
        if (typeof e == "string") return e;
        if (!Array.isArray(e)) return e.toString();
        let t = "";
        for (let n = 0; n < e.length; n++) e[n] === null || e[n] === void 0 || (t += e[n]);
        return t;
      },
      deterministic: true,
      optimizeUnary: true,
      compile: (e, t) => {
        if (typeof e == "string") return JSON.stringify(e);
        if (typeof e == "number") return '"' + JSON.stringify(e) + '"';
        if (!Array.isArray(e)) return false;
        let n = t.compile`''`;
        for (let r = 0; r < e.length; r++) n = t.compile`${n} + ${e[r]}`;
        return t.compile`(${n})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [V]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let o = await r.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let s = 1; s < e.length; s++) o = await r.run(e[s], o, {
          above: [
            e,
            t,
            n
          ]
        });
        return o;
      },
      compile: (e, t) => {
        let n = t.compile`${e[0]}`;
        for (let r = 1; r < e.length; r++) n = t.compile`${Zt(e[r], {
          ...t,
          extraArguments: "above"
        })}(${n}, [null, context, above])`;
        return n;
      },
      deterministic: (e, t) => {
        if (!Array.isArray(e)) return false;
        e = [
          ...e
        ];
        const n = e.shift();
        return se(n, t.engine, t) && se(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [V]: (e, t) => xe(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, n, r) => Object.keys(e).reduce((s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: r.run(l, t, {
            above: n
          })
        }), s;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((n) => se(n, t.engine, t));
        throw B;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${X(e[o], t)}`), r), []).join(",")} })`;
        throw B;
      },
      asyncMethod: async (e, t, n, r) => await Xt.reduce(Object.keys(e), async (s, i) => {
        const l = e[i];
        return Object.defineProperty(s, i, {
          enumerable: true,
          value: await r.run(l, t, {
            above: n
          })
        }), s;
      }, {}, 1 / 0)
    }
  };
  function Je(e, t) {
    const n = {
      [he]: e
    }, r = e.length === 3;
    return {
      method: (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw B;
        if (o.length === 2) {
          const c = Y(o[0], l, s, i), d = Y(o[1], l, s, i);
          if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+K(c))) throw NaN;
          if (Number.isNaN(+K(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let u = Y(o[0], l, s, i);
        for (let c = 1; c < o.length; c++) {
          const d = Y(o[c], l, s, i);
          if ((r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) && !t(u, d)) return false;
          if (Number.isNaN(+K(d)) && u !== null) throw NaN;
          if (c === 1 && Number.isNaN(+K(u))) throw NaN;
          if (!t(+u, +d)) return false;
          u = d;
        }
        return true;
      },
      asyncMethod: async (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw B;
        if (o.length === 2) {
          const c = await Y(o[0], l, s, i), d = await Y(o[1], l, s, i);
          if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+K(c))) throw NaN;
          if (Number.isNaN(+K(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let u = await Y(o[0], l, s, i);
        for (let c = 1; c < o.length; c++) {
          const d = await Y(o[c], l, s, i);
          if ((r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) && !t(u, d)) return false;
          if (Number.isNaN(+K(d)) && u !== null) throw NaN;
          if (c === 1 && Number.isNaN(+K(u))) throw NaN;
          if (!t(+u, +d)) return false;
          u = d;
        }
        return true;
      },
      compile: (o, s) => {
        if (!Array.isArray(o) || o.length < 2) return false;
        if (o.length === 2) return s.compile`((prev = ${o[0]}) ${n} compareCheck(${o[1]}, prev, ${r}))`;
        let i = s.compile`((prev = ${o[0]}) ${n} (prev = compareCheck(${o[1]}, prev, ${r})))`;
        for (let l = 2; l < o.length; l++) i = s.compile`(${i} && prev ${n} (prev = compareCheck(${o[l]}, prev, ${r})))`;
        return i;
      },
      [ze]: true,
      [V]: (o, s) => xe(o, s.engine, s),
      deterministic: (o, s) => se(o, s.engine, s),
      lazy: true
    };
  }
  function qt(e, t = false) {
    return {
      deterministic: (n, r) => se(n[0], r.engine, r) && se(n[1], r.engine, {
        ...r,
        insideIterator: true
      }),
      [ze]: true,
      [V]: (n, r) => xe(n, r.engine, r),
      method: (n, r, o, s) => {
        if (!Array.isArray(n)) throw B;
        let [i, l] = n;
        return i = Y(i, s, r, o) || [], i[e]((u, c) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const d = Y(l, s, u, [
            {
              iterator: i,
              index: c
            },
            r,
            o
          ]);
          return t ? s.truthy(d) : d;
        });
      },
      asyncMethod: async (n, r, o, s) => {
        if (!Array.isArray(n)) throw B;
        let [i, l] = n;
        return i = await s.run(i, r, {
          above: o
        }) || [], Xt[e](i, async (u, c) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const d = await s.run(l, u, {
            above: [
              {
                iterator: i,
                index: c
              },
              r,
              o
            ]
          });
          return t ? s.truthy(d) : d;
        });
      },
      compile: (n, r) => {
        if (!Array.isArray(n)) throw B;
        const { async: o } = r, [s, i] = n, l = {
          ...r,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, u = Zt(i, l), c = u.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, d = t ? r.compile`engine.truthy` : r.compile``;
        return o && !rt(u) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${d}(${u}(i, x, ${c})))`) : r.compile`(${s} || [])[${e}]((i, x, z) => ${d}(${u}(i, x, ${c})))`;
      },
      lazy: true
    };
  }
  H.every = H.all;
  H["?:"] = H.if;
  Object.keys(H).forEach((e) => {
    typeof H[e] == "function" && (H[e][V] = true), H[e].deterministic = typeof H[e].deterministic > "u" ? true : H[e].deterministic;
  });
  H.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const n = e.pop();
    let r = t.compile``;
    for (; e.length; ) {
      const o = e.shift(), s = e.shift();
      r = t.compile`${r} engine.truthy(${o}) ? ${s} : `;
    }
    return t.compile`(${r} ${n})`;
  };
  function $t(e, t) {
    if (Array.isArray(e)) return K(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + X(e, t);
    if (typeof e == "string") return "+" + K(+e);
    const n = X(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + K(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? K(NaN) : `(+precoerceNumber(${n}))`;
  }
  H["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => $t(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${X(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  H["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw B;
      return `precoerceNumber(${e.map((n) => $t(n, t)).join(" % ")})`;
    }
    return `assertSize(${X(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  H.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  H["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw B;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => $t(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${X(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  H["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw B;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, r) => {
        let o = $t(n, t);
        return r && o === "+0" && K(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${X(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  H["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => $t(n, t)).join(" * ")})` : `(${X(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  H["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  H.not = H["!"];
  H["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  H.none.deterministic = H.some.deterministic;
  H.throw.deterministic = (e, t) => t.insideTry && se(e, t.engine, t);
  H["+"].optimizeUnary = H["-"].optimizeUnary = H["!"].optimizeUnary = H["!!"].optimizeUnary = H.cat.optimizeUnary = H.throw.optimizeUnary = true;
  const cl = {
    ...H,
    ...ul
  }, dl = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function fl(e, t, n, r) {
    const o = t.methods[n], s = o.method ? o.method : o;
    if (o.lazy) {
      const l = e[n];
      return (u, c) => s(l, u, c || r, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !o.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && o.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((u) => fe(u, t, r));
      if (l.every((u) => typeof u != "function")) return (u, c) => s(l, u, c || r, t);
      if (l.length === 1) {
        const u = l[0];
        return (c, d) => s([
          u(c, d)
        ], c, d || r, t);
      }
      if (l.length === 2) {
        const [u, c] = l;
        return typeof u == "function" && typeof c == "function" ? (d, g) => s([
          u(d, g),
          c(d, g)
        ], d, g || r, t) : typeof u == "function" ? (d, g) => s([
          u(d, g),
          c
        ], d, g || r, t) : (d, g) => s([
          u,
          c(d, g)
        ], d, g || r, t);
      }
      return (u, c) => {
        const d = l.map((g) => typeof g == "function" ? g(u, c) : g);
        return s(d, u, c || r, t);
      };
    } else {
      const l = fe(i, t, r);
      if (o.optimizeUnary) {
        const u = (c) => !c || typeof c[l] > "u" || typeof c[l] == "function" && !t.allowFunctions ? null : c[l];
        if (typeof l == "function") return (c, d) => s(l(c, d), c, d || r, t);
        if ((n === "var" || n === "val") && t.methods[n][ze]) {
          if (!l && n !== "val") return (c) => c === null || typeof c > "u" || typeof c == "function" && !t.allowFunctions ? null : c;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return u;
          if (n === "var" && !l.startsWith("../")) {
            const c = ut(String(l));
            let d;
            if (c.length === 2) {
              const [g, p] = c;
              return (f) => (typeof (d = f && f[g] && f[g][p]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
            if (c.length === 3) {
              const [g, p, f] = c;
              return (h) => (typeof (d = h && h[g] && h[g][p] && h[g][p][f]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
          }
        }
        return (c, d) => s(l, c, d || r, t);
      }
      return typeof l == "function" ? (u, c) => s(It(l(u, c)), u, c || r, t) : (u, c) => s(It(l), u, c || r, t);
    }
  }
  const _r = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function pl(e, t, n) {
    if (e.val && t.methods.val[ze] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
      let r;
      if (e.val.length === 1) {
        const o = e.val[0];
        return (s) => (typeof (r = s && s[o]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 2) {
        const [o, s] = e.val;
        return (i) => (typeof (r = i && i[o] && i[o][s]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
      if (e.val.length === 3) {
        const [o, s, i] = e.val;
        return (l) => (typeof (r = l && l[o] && l[o][s] && l[o][s][i]) != "function" || t.allowFunctions) && typeof r < "u" ? r : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[ze] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [r, o, s] = e.if || e["?:"], i = fe(r, t, n), l = fe(o, t, n), u = fe(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof u == "function" ? (c, d) => t.truthy(i(c, d)) ? l(c, d) : u(c, d) : typeof i == "function" && typeof l == "function" ? (c, d) => t.truthy(i(c, d)) ? l(c, d) : u : typeof i == "function" && typeof u == "function" ? (c, d) => t.truthy(i(c, d)) ? l : u(c, d) : typeof i == "function" ? (c, d) => t.truthy(i(c, d)) ? l : u : t.truthy(i) ? l : u;
    }
    if (e.filter && t.methods.filter[ze] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [r, o] = e.filter, s = fe(o, t, n);
      if (typeof s != "function") return t.truthy(s) ? fe(r, t, n) : [];
    }
    for (const r in _r) if (e[r] && Array.isArray(e[r]) && t.methods[r][ze]) {
      const o = _r[r], s = r.length === 3 ? o : function(l, u) {
        if ((typeof l == "string" || l === null) && (typeof u == "string" || u === null)) return o(l, u);
        if (Number.isNaN(+K(l))) throw NaN;
        if (Number.isNaN(+K(u)) && l !== null) throw NaN;
        return o(+l, +u);
      };
      if (e[r].length === 2) {
        const [i, l] = e[r], u = fe(i, t, n), c = fe(l, t, n);
        return typeof u == "function" && typeof c == "function" ? (d, g) => s(u(d, g), c(d, g)) : typeof u == "function" ? (d, g) => s(u(d, g), c) : typeof c == "function" ? (d, g) => s(u, c(d, g)) : s(u, c);
      }
      if (e[r].length === 3) {
        const [i, l, u] = e[r], c = fe(i, t, n), d = fe(l, t, n), g = fe(u, t, n);
        let p;
        return typeof c == "function" && typeof d == "function" && typeof g == "function" ? (f, h) => s(c(f, h), p = d(f, h)) && s(p, g(f, h)) : typeof c == "function" && typeof d == "function" ? (f, h) => s(c(f, h), p = d(f, h)) && s(p, g) : typeof c == "function" && typeof g == "function" ? (f, h) => s(c(f, h), d) && s(d, g(f, h)) : typeof d == "function" && typeof g == "function" ? (f, h) => s(c, p = d(f, h)) && s(p, g(f, h)) : typeof c == "function" ? (f, h) => s(c(f, h), d) && s(d, g) : typeof d == "function" ? (f, h) => s(c, p = d(f, h)) && s(p, g) : typeof g == "function" ? (f, h) => s(c, d) && s(d, g(f, h)) : s(c, d) && s(d, g);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [r, o, s] = e.reduce;
      if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
        const i = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", l = o["+"][0].var === "current" || o["+"][1].var === "current";
        if (s = s || 0, i && l) return fe({
          "+": [
            {
              "+": r
            },
            s
          ]
        }, t, n);
      }
      if (o["*"] && o["*"].length === 2 && (o["*"][0] || 0).var && (o["*"][1] || 0).var) {
        const i = o["*"][0].var === "accumulator" || o["*"][1].var === "accumulator", l = o["*"][0].var === "current" || o["*"][1].var === "current";
        if (s = typeof s > "u" ? 1 : s, i && l) return fe({
          "*": [
            {
              "*": r
            },
            s
          ]
        }, t, n);
      }
    }
  }
  function fe(e, t, n = []) {
    if (Array.isArray(e)) {
      const r = e.map((o) => fe(o, t, n));
      return r.every((o) => typeof o != "function") ? r : (o, s) => r.map((i) => typeof i == "function" ? i(o, s) : i);
    }
    if (e && typeof e == "object") {
      const r = pl(e, t, n);
      if (typeof r < "u") return r;
      const o = Object.keys(e), s = o[0];
      if (o.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (o.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Qt(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const u = fl(e, t, s, n);
        return l ? u() : u;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class gl {
    constructor(t = cl, n = {
      disableInline: false,
      disableInterpretedOptimization: false,
      permissive: false,
      maxDepth: 0,
      maxArrayLength: 32768,
      maxStringLength: 65536
    }) {
      this.disableInline = n.disableInline, this.disableInterpretedOptimization = n.disableInterpretedOptimization, this.methods = {
        ...t
      }, this.optimizedMap = /* @__PURE__ */ new WeakMap(), this.missesSinceSeen = 0, this.options = {
        disableInline: n.disableInline,
        disableInterpretedOptimization: n.disableInterpretedOptimization,
        maxDepth: n.maxDepth || 0,
        maxArrayLength: n.maxArrayLength || 32768,
        maxStringLength: n.maxStringLength || 65536
      }, this.isData || (n.permissive ? this.isData = (r, o) => !(o in this.methods) : this.isData = () => false);
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
    _parse(t, n, r, o, s) {
      const i = t[o];
      if (this.isData(t, o)) return t;
      if (!this.methods[o] || s > 1) throw {
        type: "Unknown Operator",
        key: o
      };
      if ((o === "var" || o === "val") && this.methods[o][ze]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: r
        });
        return this.methods[o].method(l, n, r, this, null);
      }
      if (typeof this.methods[o] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : It(this.run(i, n, {
          above: r
        }));
        return this.methods[o](l, n, r, this);
      }
      if (typeof this.methods[o] == "object") {
        const { method: l, lazy: u } = this.methods[o], c = u ? i : !i || typeof i != "object" ? [
          i
        ] : It(this.run(i, n, {
          above: r
        }));
        return l(c, n, r, this);
      }
      throw new Error(`Method '${o}' is not set up properly.`);
    }
    addMethod(t, n, { deterministic: r, optimizeUnary: o } = {}) {
      typeof n == "function" ? n = {
        method: n,
        lazy: false
      } : n = {
        ...n,
        lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy
      }, Object.assign(n, dl({
        deterministic: r,
        optimizeUnary: o
      })), this.methods[t] = to(n);
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
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      } else {
        this.optimizedMap.set(t, fe(t, this, o)), this.missesSinceSeen++;
        const s = this.optimizedMap.get(t);
        return typeof s == "function" ? s(n, o) : s;
      }
      if (Array.isArray(t)) {
        const s = new Array(t.length);
        for (let i = 0; i < t.length; i++) s[i] = this.run(t[i], n, {
          above: o
        });
        return s;
      }
      if (t && typeof t == "object") {
        const s = Object.keys(t);
        if (s.length > 0) {
          const i = s[0];
          return this._parse(t, n, o, i, s.length);
        }
      }
      return t;
    }
    build(t, n = {}) {
      const { above: r = [], top: o = true } = n, s = Zt(t, {
        engine: this,
        above: r
      });
      return o === false && s.deterministic ? s() : s;
    }
  }
  function Re(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const nn = new gl();
  nn.addMethod("contains", ([e, t]) => Re(e).includes(Re(t)), {
    deterministic: true
  });
  nn.addMethod("startsWith", ([e, t]) => Re(e).startsWith(Re(t)), {
    deterministic: true
  });
  nn.addMethod("endsWith", ([e, t]) => Re(e).endsWith(Re(t)), {
    deterministic: true
  });
  function bt() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const jn = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), hl = {
    number: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    string: [
      "eq",
      "neq",
      "contains",
      "not_contains",
      "starts_with",
      "ends_with",
      "empty",
      "not_empty"
    ],
    boolean: [
      "is_true",
      "is_false",
      "empty",
      "not_empty"
    ],
    date: [
      "eq",
      "neq",
      "gt",
      "gte",
      "lt",
      "lte",
      "empty",
      "not_empty"
    ],
    mixed: [
      "eq",
      "neq",
      "contains",
      "empty",
      "not_empty"
    ]
  }, ml = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], yl = {
    var: "value"
  };
  function bl(e, t, n = "string") {
    const r = Number(t), o = n === "number", s = n === "date", i = yl;
    switch (e) {
      case "eq":
        return {
          "==": [
            i,
            o ? r : t
          ]
        };
      case "neq":
        return {
          "!=": [
            i,
            o ? r : t
          ]
        };
      case "gt":
        return {
          ">": [
            i,
            s ? t : r
          ]
        };
      case "gte":
        return {
          ">=": [
            i,
            s ? t : r
          ]
        };
      case "lt":
        return {
          "<": [
            i,
            s ? t : r
          ]
        };
      case "lte":
        return {
          "<=": [
            i,
            s ? t : r
          ]
        };
      case "contains":
        return {
          contains: [
            i,
            t
          ]
        };
      case "not_contains":
        return {
          "!": [
            {
              contains: [
                i,
                t
              ]
            }
          ]
        };
      case "starts_with":
        return {
          startsWith: [
            i,
            t
          ]
        };
      case "ends_with":
        return {
          endsWith: [
            i,
            t
          ]
        };
      case "empty":
        return {
          "!": [
            {
              "!!": [
                i
              ]
            }
          ]
        };
      case "not_empty":
        return {
          "!!": [
            i
          ]
        };
      case "is_true":
        return {
          "==": [
            i,
            true
          ]
        };
      case "is_false":
        return {
          "==": [
            i,
            false
          ]
        };
    }
  }
  const _l = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function xl(e, t = "string") {
    const n = e.conditions.filter((o) => jn.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && _l.has(o.operator) && isNaN(Number(o.operand))));
    if (n.length === 0) return;
    const r = n.map((o) => bl(o.operator, o.operand, t));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function Le(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function un(e) {
    for (const [t, n] of [
      [
        ">",
        "gt"
      ],
      [
        ">=",
        "gte"
      ],
      [
        "<",
        "lt"
      ],
      [
        "<=",
        "lte"
      ]
    ]) if (t in e) {
      const r = e[t];
      if (Array.isArray(r) && r.length === 2 && Le(r[0])) return {
        operator: n,
        operand: Re(r[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && Le(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: Re(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && Le(t[0])) return {
        operator: "neq",
        operand: Re(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && Le(t[0])) return {
        operator: "contains",
        operand: Re(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && Le(t[0])) return {
        operator: "starts_with",
        operand: Re(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && Le(t[0])) return {
        operator: "ends_with",
        operand: Re(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const r = n["!!"];
          if (Array.isArray(r) && Le(r[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const r = n.contains;
          if (Array.isArray(r) && r.length === 2 && Le(r[0])) return {
            operator: "not_contains",
            operand: Re(r[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && Le(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function xr(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: bt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const r = n.map((o) => un(o)).filter((o) => o !== null).map((o) => ({
          id: bt(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "and",
          conditions: r
        };
      }
    }
    if ("or" in e) {
      const n = e.or;
      if (Array.isArray(n)) {
        const r = n.map((o) => un(o)).filter((o) => o !== null).map((o) => ({
          id: bt(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "or",
          conditions: r
        };
      }
    }
    const t = un(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: bt(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: bt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const vl = 200, _t = /* @__PURE__ */ new Map();
  function Cl(e, t) {
    try {
      const n = JSON.stringify(e);
      let r = _t.get(n);
      if (!r) {
        if (r = nn.build(e), _t.size >= vl) {
          const o = _t.keys().next().value;
          o && _t.delete(o);
        }
        _t.set(n, r);
      }
      return !!r({
        value: t
      });
    } catch {
      return false;
    }
  }
  const wl = {
    eq: "json_table_op_eq",
    neq: "json_table_op_neq",
    gt: "json_table_op_gt",
    gte: "json_table_op_gte",
    lt: "json_table_op_lt",
    lte: "json_table_op_lte",
    contains: "json_table_op_contains",
    not_contains: "json_table_op_not_contains",
    starts_with: "json_table_op_starts_with",
    ends_with: "json_table_op_ends_with",
    empty: "json_table_op_empty",
    not_empty: "json_table_op_not_empty",
    is_true: "json_table_op_is_true",
    is_false: "json_table_op_is_false"
  };
  function Sl({ label: e, value: t, onChange: n, inputType: r }) {
    const [o, s] = y.useState(t);
    y.useEffect(() => {
      s(t);
    }, [
      t
    ]);
    const i = y.useCallback(() => {
      o !== t && n(o);
    }, [
      o,
      t,
      n
    ]);
    return a.jsx(oe, {
      label: e,
      value: o,
      onChange: (l) => s(l.target.value),
      onBlur: i,
      size: "small",
      type: r,
      sx: {
        flex: 1,
        ...r === "date" && {
          '& input[type="date"]::-webkit-calendar-picker-indicator': {
            filter: "invert(0.5)",
            cursor: "pointer",
            opacity: 0.7,
            "&:hover": {
              opacity: 1
            }
          }
        }
      },
      InputLabelProps: r === "date" || r === "number" ? {
        shrink: true
      } : void 0,
      slotProps: r === "number" ? {
        htmlInput: {
          step: "any"
        }
      } : r === "date" ? {
        htmlInput: {
          placeholder: "YYYY-MM-DD"
        }
      } : void 0
    });
  }
  function jl({ logic: e, columnType: t, onChange: n }) {
    const [r, o] = y.useState(() => xr(e));
    y.useEffect(() => {
      o(xr(e));
    }, [
      e
    ]);
    const s = hl[t] ?? ml, i = y.useCallback((p) => {
      o(p), n(xl(p, t));
    }, [
      n,
      t
    ]), l = y.useCallback((p, f) => {
      const h = r.conditions.map((b, _) => _ === p ? {
        ...b,
        ...f
      } : b);
      i({
        ...r,
        conditions: h
      });
    }, [
      r,
      i
    ]), u = y.useCallback((p) => {
      const f = r.conditions.filter((h, b) => b !== p);
      i({
        ...r,
        conditions: f
      });
    }, [
      r,
      i
    ]), c = y.useCallback(() => {
      const p = s[0] ?? "eq";
      i({
        ...r,
        conditions: [
          ...r.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: p,
            operand: ""
          }
        ]
      });
    }, [
      r,
      i,
      s
    ]), d = y.useCallback((p, f) => {
      f !== null && i({
        ...r,
        mode: f
      });
    }, [
      r,
      i
    ]), g = r.conditions.length > 1;
    return a.jsxs(me, {
      spacing: 1,
      children: [
        g && a.jsxs(P, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(Hr, {
              value: r.mode,
              exclusive: true,
              onChange: d,
              size: "small",
              "aria-label": m.t("json_table_condition_mode_label"),
              children: [
                a.jsx(Jt, {
                  value: "and",
                  "aria-label": m.t("json_table_condition_mode_all"),
                  children: m.t("json_table_condition_mode_all")
                }),
                a.jsx(Jt, {
                  value: "or",
                  "aria-label": m.t("json_table_condition_mode_any"),
                  children: m.t("json_table_condition_mode_any")
                })
              ]
            }),
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: r.mode === "and" ? m.t("json_table_condition_mode_hint_and") : m.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        r.conditions.map((p, f) => {
          const h = !jn.has(p.operator), b = t === "date" ? "date" : t === "number" ? "number" : "text";
          return a.jsxs(P, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              a.jsxs(Be, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  a.jsx(Ve, {
                    children: m.t("json_table_condition_operator")
                  }),
                  a.jsx(Ee, {
                    label: m.t("json_table_condition_operator"),
                    value: p.operator,
                    onChange: (_) => {
                      const x = _.target.value, C = jn.has(x) ? "" : p.operand;
                      l(f, {
                        operator: x,
                        operand: C
                      });
                    },
                    children: s.map((_) => a.jsx(U, {
                      value: _,
                      children: m.t(wl[_])
                    }, _))
                  })
                ]
              }),
              h && a.jsx(Sl, {
                label: m.t("json_table_condition_value"),
                value: p.operand ?? "",
                onChange: (_) => l(f, {
                  operand: _
                }),
                inputType: b
              }),
              g && a.jsx(ve, {
                title: m.t("json_table_condition_remove"),
                children: a.jsx(ae, {
                  size: "small",
                  onClick: () => u(f),
                  "aria-label": m.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: a.jsx(Kt, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, p.id ?? f);
        }),
        a.jsx(ke, {
          startIcon: a.jsx(qr, {}),
          onClick: c,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": m.t("json_table_condition_add"),
          children: g ? m.t("json_table_condition_add") : m.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Rl({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
    const s = y.useCallback((d, g) => {
      const p = [
        ...e || []
      ];
      p[d] = {
        ...p[d],
        ...g
      }, r(p);
    }, [
      e,
      r
    ]), i = y.useCallback((d) => {
      const g = [
        ...e || []
      ];
      g.splice(d, 1), r(g);
    }, [
      e,
      r
    ]), l = y.useCallback(() => {
      const d = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      r([
        ...e || [],
        d
      ]);
    }, [
      e,
      r
    ]), u = y.useCallback((d) => {
      if (d === 0) return;
      const g = [
        ...e || []
      ];
      [g[d - 1], g[d]] = [
        g[d],
        g[d - 1]
      ], r(g);
    }, [
      e,
      r
    ]), c = y.useCallback((d) => {
      const g = e || [];
      if (d >= g.length - 1) return;
      const p = [
        ...g
      ];
      [p[d], p[d + 1]] = [
        p[d + 1],
        p[d]
      ], r(p);
    }, [
      e,
      r
    ]);
    return a.jsxs(me, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && a.jsxs(P, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(Hr, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (d, g) => {
                g && o(g);
              },
              "aria-label": m.t("json_table_cell_style_mode_label"),
              children: [
                a.jsx(Jt, {
                  value: "first-match",
                  "aria-label": m.t("json_table_cell_style_mode_first"),
                  children: m.t("json_table_cell_style_mode_first")
                }),
                a.jsx(Jt, {
                  value: "all-match",
                  "aria-label": m.t("json_table_cell_style_mode_all"),
                  children: m.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            a.jsx(S, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? m.t("json_table_cell_style_mode_hint_first") : m.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && a.jsxs(P, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            a.jsx(S, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: m.t("json_table_no_style_rules")
            }),
            a.jsx(S, {
              variant: "caption",
              children: m.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((d, g) => {
          const p = (e || []).length, f = d.backgroundColor ? tt(d.backgroundColor) : void 0, h = d.textColor ? tt(d.textColor) : void 0;
          return a.jsx(Ue, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: a.jsxs(me, {
              spacing: 1.5,
              children: [
                a.jsxs(P, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    a.jsx(P, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: a.jsxs(S, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          m.t("json_table_rule"),
                          " ",
                          g + 1
                        ]
                      })
                    }),
                    a.jsxs(P, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        a.jsx(ve, {
                          title: m.t("json_table_rule_move_up"),
                          children: a.jsx("span", {
                            children: a.jsx(ae, {
                              size: "small",
                              onClick: () => u(g),
                              disabled: g === 0,
                              "aria-label": m.t("json_table_rule_move_up"),
                              children: a.jsx(Jr, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        a.jsx(ve, {
                          title: m.t("json_table_rule_move_down"),
                          children: a.jsx("span", {
                            children: a.jsx(ae, {
                              size: "small",
                              onClick: () => c(g),
                              disabled: g >= p - 1,
                              "aria-label": m.t("json_table_rule_move_down"),
                              children: a.jsx(Yr, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        a.jsx(ve, {
                          title: m.t("json_table_delete_rule"),
                          children: a.jsx(ae, {
                            size: "small",
                            onClick: () => i(g),
                            color: "error",
                            "aria-label": m.t("json_table_delete_rule"),
                            children: a.jsx(Uo, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                a.jsx(jl, {
                  logic: d.logic,
                  columnType: n,
                  onChange: (b) => s(g, {
                    logic: b
                  })
                }, d.id ?? g),
                a.jsxs(me, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    a.jsx(xn, {
                      label: m.t("json_table_bg_color"),
                      value: d.backgroundColor || "",
                      onChange: (b) => s(g, {
                        backgroundColor: b
                      })
                    }),
                    a.jsx(xn, {
                      label: m.t("json_table_text_color"),
                      value: d.textColor || "",
                      onChange: (b) => s(g, {
                        textColor: b
                      })
                    })
                  ]
                }),
                a.jsxs(me, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    a.jsx(nt, {
                      control: a.jsx(Mt, {
                        checked: d.fontWeight === "bold",
                        onChange: (b) => s(g, {
                          fontWeight: b.target.checked ? "bold" : "normal"
                        }),
                        icon: a.jsx(pr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(pr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(S, {
                        variant: "caption",
                        children: m.t("json_table_bold")
                      })
                    }),
                    a.jsx(nt, {
                      control: a.jsx(Mt, {
                        checked: d.fontStyle === "italic",
                        onChange: (b) => s(g, {
                          fontStyle: b.target.checked ? "italic" : "normal"
                        }),
                        icon: a.jsx(gr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(gr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(S, {
                        variant: "caption",
                        children: m.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (d.backgroundColor || d.textColor || d.fontWeight === "bold" || d.fontStyle === "italic") && a.jsx(Ue, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...d.backgroundColor ? f ? {
                      background: f
                    } : {
                      backgroundColor: d.backgroundColor
                    } : {},
                    fontWeight: d.fontWeight || "normal",
                    fontStyle: d.fontStyle || "normal"
                  },
                  children: a.jsx(S, {
                    variant: "body2",
                    sx: {
                      ...d.textColor ? h ? {
                        background: h,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                      } : {
                        color: d.textColor
                      } : {
                        color: "inherit"
                      }
                    },
                    children: m.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, d.id ?? g);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && a.jsx(S, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? m.t("json_table_rules_priority_hint") : m.t("json_table_rules_all_match_hint")
        }),
        a.jsx(ke, {
          startIcon: a.jsx(qr, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: m.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function Ml({ globalSorting: e, globalFiltering: t }) {
    return a.jsxs(P, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        a.jsx(S, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: m.t("json_table_global_status")
        }),
        a.jsxs(P, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            a.jsx(Ge, {
              size: "small",
              icon: e ? a.jsx(fr, {}) : a.jsx(Kt, {}),
              label: `${m.t("json_table_sorting")}: ${e ? m.t("json_table_status_on") : m.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            a.jsx(Ge, {
              size: "small",
              icon: t ? a.jsx(fr, {}) : a.jsx(Kt, {}),
              label: `${m.t("json_table_filtering")}: ${t ? m.t("json_table_status_on") : m.t("json_table_status_off")}`,
              color: t ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            })
          ]
        })
      ]
    });
  }
  function et(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function vr(e) {
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
        const [, s, i, l, u = "0", c = "0", d = "0"] = n, g = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(u, 10), parseInt(c, 10), parseInt(d, 10));
        return isNaN(g.getTime()) ? null : g.getTime();
      }
      const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (r) {
        const [, s, i, l, u = "0", c = "0", d = "0"] = r, g = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(u, 10), parseInt(c, 10), parseInt(d, 10));
        return isNaN(g.getTime()) ? null : g.getTime();
      }
      if (/^-?\d+$/.test(t)) {
        const s = parseInt(t, 10), i = s >= 1e11 ? s : s * 1e3, l = new Date(i);
        return isNaN(l.getTime()) ? null : i;
      }
      const o = new Date(t);
      return isNaN(o.getTime()) ? null : o.getTime();
    }
    return null;
  }
  function Cr(e) {
    const t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime();
  }
  function Il(e, t, n) {
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
    const r = et(e), o = et(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const c = vr(e), d = vr(n);
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
        return l ? s === i : r === o;
      case "notEquals":
        return l ? s !== i : r !== o;
      case "greaterThan":
        return l ? s > i : r > o;
      case "greaterThanOrEqual":
        return l ? s >= i : r >= o;
      case "lessThan":
        return l ? s < i : r < o;
      case "lessThanOrEqual":
        return l ? s <= i : r <= o;
      default:
        return true;
    }
  }
  function wr(e, t, n, r) {
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = vn(e, r), s = vn(n, r);
    if (o === null || s === null) return false;
    const i = Cr(o), l = Cr(s);
    switch (t) {
      case "equals":
        return i === l;
      case "notEquals":
        return i !== l;
      case "greaterThan":
        return i > l;
      case "greaterThanOrEqual":
        return i >= l;
      case "lessThan":
        return i < l;
      case "lessThanOrEqual":
        return i <= l;
      default:
        return true;
    }
  }
  function Sr(e) {
    return (t, n, r) => {
      if (r == null) return true;
      if (typeof r == "object" && r !== null && "operator" in r) {
        const o = r;
        return wr(t.getValue(n), o.operator, o.value, e);
      }
      return typeof r == "string" || typeof r == "number" ? wr(t.getValue(n), "equals", r, e) : true;
    };
  }
  const $l = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const o = e.getValue(t);
      return o == null ? false : et(o).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const o = e.getValue(t);
      if (o == null) return false;
      const s = Number(o);
      return isNaN(s) ? et(o).includes(et(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const o = n, s = e.getValue(t);
      return Il(s, o.operator, o.value);
    }
    const r = e.getValue(t);
    return r == null ? false : et(r).includes(et(n));
  }, Al = {
    advanced: $l
  };
  function At(e) {
    switch (e) {
      case "number":
      case "date":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "string":
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
      case "boolean":
        return {
          sortable: false,
          filterable: true,
          hiding: true
        };
      case "array":
      case "object":
        return {
          sortable: false,
          filterable: false,
          hiding: true
        };
      default:
        return {
          sortable: true,
          filterable: true,
          hiding: true
        };
    }
  }
  function Fl(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : At(t).sortable && n !== false;
  }
  function zl(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : At(t).filterable && n === true;
  }
  function Dl(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : At(t).hiding && n !== false;
  }
  function jr(e, t) {
    return vn(e, t) ?? 0;
  }
  function Rr(e) {
    return (t, n, r) => jr(t.getValue(r), e) - jr(n.getValue(r), e);
  }
  function Tl(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, u = new Map(n.map((p) => [
      p.path,
      p.dateFormat
    ])), c = new Map(n.map((p) => [
      p.path,
      p.type
    ])), d = r.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: p }) => i(p),
      cell: ({ row: p }) => l(p),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let g;
    return t.length > 0 ? g = t.filter((p) => p.visible).map((p) => {
      var _a2, _b;
      const f = ((_a2 = p.format) == null ? void 0 : _a2.dateInputFormat) ?? u.get(p.path), h = c.get(p.path) || "string", b = ((_b = p.format) == null ? void 0 : _b.type) === "date" || h === "date";
      return {
        id: p.path,
        size: p.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[p.path]) ?? null,
        header: p.headerName || p.path,
        enableSorting: Fl(p, h, r.tableSorting),
        enableColumnFilter: zl(p, h, r.tableFiltering),
        enableHiding: Dl(p, h, r.tableHiding),
        ...b && {
          sortingFn: Rr(f),
          filterFn: Sr(f)
        },
        cell: ({ getValue: x }) => o(x(), p),
        meta: {
          align: p.align || "left",
          width: p.width,
          columnType: b ? "date" : h
        }
      };
    }) : g = n.map((p) => {
      const f = p.type === "date" && p.dateFormat, h = p.dateFormat, b = At(p.type);
      return {
        id: p.path,
        size: 150,
        accessorFn: (x) => x[p.path],
        header: p.path.split(".").pop() || p.path,
        enableSorting: b.sortable && r.tableSorting,
        enableColumnFilter: b.filterable && r.tableFiltering,
        enableHiding: b.hiding && r.tableHiding,
        ...f && {
          sortingFn: Rr(h),
          filterFn: Sr(h)
        },
        cell: ({ getValue: x }) => s(x()),
        meta: {
          align: "left",
          columnType: p.type
        }
      };
    }), d ? [
      d,
      ...g
    ] : g;
  }
  function Mr({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
    const s = t === "auto" || t === void 0, i = At(r), l = o === "sortable" ? i.sortable : i.filterable;
    let u, c;
    t === "auto" || t === void 0 ? (u = l && e, c = "json_table_source_auto") : (u = t, c = "json_table_source_override");
    const d = t !== void 0 && t !== "auto", g = (f, h) => f.replace(/\{(\w+)\}/g, (b, _) => _ in h ? h[_] : b);
    let p;
    return t === "auto" || t === void 0 ? p = g(m.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? m.t("json_table_status_on") : m.t("json_table_status_off"),
      type: r
    }) : p = g(m.t("json_table_override_tooltip"), {
      feature: n
    }), a.jsx(ve, {
      title: p,
      arrow: true,
      children: a.jsxs(P, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          a.jsx(Ge, {
            size: "small",
            label: a.jsx(P, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: u ? m.t("json_table_status_on") : m.t("json_table_status_off")
            }),
            color: u ? "success" : "default",
            variant: d ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          a.jsxs(S, {
            variant: "caption",
            color: d ? "warning.main" : "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 0.25
            },
            children: [
              m.t(c),
              s && a.jsx(Fi, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              d && a.jsx(zi, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              })
            ]
          })
        ]
      })
    });
  }
  function Pl({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
    var _a2, _b, _c, _d, _e, _f;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((R) => {
      i(($) => ({
        ...$,
        [R]: !$[R]
      }));
    }, []), u = (t == null ? void 0 : t.type) || "string", c = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((R, $) => R + $, 0) : 0, [
      t
    ]), d = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), g = y.useMemo(() => e.headerName !== d || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      d
    ]), p = y.useCallback(() => {
      n({
        ...e,
        headerName: d,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      d
    ]), f = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: R, ...$ } = e;
      n($);
    }, [
      e,
      n
    ]), b = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), _ = y.useCallback(() => {
      const { cellStyle: R, cellStyleMode: $, ...j } = e;
      n(j);
    }, [
      e,
      n
    ]), x = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), C = y.useCallback(() => {
      const { sortable: R, filterable: $, ...j } = e;
      n({
        ...j,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), M = y.useCallback((R) => {
      var _a3, _b2;
      const $ = {
        ...e.format
      };
      if (R.type && R.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const j = (_b2 = e.format) == null ? void 0 : _b2.type;
        j === "number" ? (delete $.numberDecimals, delete $.numberPrefix, delete $.numberSuffix, delete $.numberThousandsSeparator) : j === "date" ? (delete $.dateFormat, delete $.dateInputFormat) : j === "boolean" ? (delete $.booleanTrue, delete $.booleanFalse) : j === "string" && [
          "stringCase",
          "stringPrefix",
          "stringSuffix",
          "stringTrim",
          "stringMaxLength",
          "stringRegex",
          "stringRegexGroup",
          "stringRegexFlags",
          "stringFontWeight",
          "stringFontStyle",
          "stringFontSize",
          "stringTextColor"
        ].forEach((L) => {
          delete $[L];
        });
      }
      n({
        ...e,
        format: {
          ...$,
          ...R
        }
      });
    }, [
      e,
      n
    ]), A = y.useCallback((R) => {
      n({
        ...e,
        cellStyle: R
      });
    }, [
      e,
      n
    ]), F = y.useCallback((R) => {
      n({
        ...e,
        cellStyleMode: R
      });
    }, [
      e,
      n
    ]);
    return a.jsxs(P, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        a.jsxs(P, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            a.jsx(Ge, {
              label: u,
              size: "small",
              sx: {
                backgroundColor: jt[u] || jt.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            a.jsx(S, {
              variant: "subtitle2",
              sx: {
                fontFamily: "monospace",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              title: e.path,
              children: e.path
            })
          ]
        }),
        a.jsxs(me, {
          spacing: 1,
          children: [
            a.jsxs(Et, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                a.jsx(kt, {
                  expandIcon: a.jsx(Nt, {}),
                  children: a.jsxs(P, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(S, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: m.t("json_table_section_basic")
                      }),
                      a.jsx(ve, {
                        title: m.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(ae, {
                            size: "small",
                            disabled: !g,
                            onClick: (R) => {
                              R.stopPropagation(), p();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(Ct, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ot, {
                  children: a.jsxs(me, {
                    spacing: 2,
                    children: [
                      a.jsx(oe, {
                        label: m.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (R) => n({
                          ...e,
                          headerName: R.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      a.jsx(oe, {
                        label: m.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (R) => n({
                          ...e,
                          width: R.target.value ? parseInt(R.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: m.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      a.jsxs(Be, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(Ve, {
                            children: m.t("json_table_align")
                          }),
                          a.jsxs(Ee, {
                            label: m.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (R) => n({
                              ...e,
                              align: R.target.value
                            }),
                            children: [
                              a.jsx(U, {
                                value: "left",
                                children: m.t("json_table_align_left")
                              }),
                              a.jsx(U, {
                                value: "center",
                                children: m.t("json_table_align_center")
                              }),
                              a.jsx(U, {
                                value: "right",
                                children: m.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      a.jsx(nt, {
                        control: a.jsx(wt, {
                          checked: e.visible,
                          onChange: (R) => n({
                            ...e,
                            visible: R.target.checked
                          })
                        }),
                        label: a.jsx(S, {
                          variant: "body2",
                          children: m.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Et, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                a.jsx(kt, {
                  expandIcon: a.jsx(Nt, {}),
                  children: a.jsxs(P, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(S, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: m.t("json_table_section_formatting")
                      }),
                      a.jsx(ve, {
                        title: m.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(ae, {
                            size: "small",
                            disabled: !f,
                            onClick: (R) => {
                              R.stopPropagation(), h();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(Ct, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ot, {
                  children: a.jsxs(me, {
                    spacing: 2,
                    children: [
                      a.jsxs(Be, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(Ve, {
                            children: m.t("json_table_format_type")
                          }),
                          a.jsxs(Ee, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: m.t("json_table_format_type"),
                            onChange: (R) => {
                              const $ = R.target.value;
                              $ === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : M({
                                type: $
                              });
                            },
                            children: [
                              a.jsxs(U, {
                                value: "auto",
                                children: [
                                  m.t("json_table_format_type_auto"),
                                  ` (${u})`
                                ]
                              }),
                              a.jsx(U, {
                                value: "string",
                                children: m.t("json_table_format_type_string")
                              }),
                              a.jsx(U, {
                                value: "number",
                                children: m.t("json_table_format_type_number")
                              }),
                              a.jsx(U, {
                                value: "date",
                                children: m.t("json_table_format_type_date")
                              }),
                              a.jsx(U, {
                                value: "boolean",
                                children: m.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (u === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && a.jsx(Ui, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: M,
                        discoveredColumn: t
                      }),
                      (u === "date" || ((_c = e.format) == null ? void 0 : _c.type) === "date") && a.jsx(qi, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: M
                      }),
                      (u === "boolean" || ((_d = e.format) == null ? void 0 : _d.type) === "boolean") && a.jsx(Yi, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: M
                      }),
                      (u === "string" || ((_e = e.format) == null ? void 0 : _e.type) === "string") && a.jsx(Ji, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: M
                      }),
                      u !== "number" && u !== "date" && u !== "boolean" && u !== "string" && !e.format && a.jsx(S, {
                        variant: "body2",
                        color: "text.secondary",
                        children: m.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Et, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                a.jsx(kt, {
                  expandIcon: a.jsx(Nt, {}),
                  children: a.jsxs(P, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsxs(P, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          a.jsx(S, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: m.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && a.jsx(Ge, {
                            label: e.cellStyle.length,
                            size: "small",
                            color: "primary",
                            sx: {
                              height: 20,
                              fontSize: "0.7rem"
                            }
                          })
                        ]
                      }),
                      a.jsx(ve, {
                        title: m.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(ae, {
                            size: "small",
                            disabled: !b,
                            onClick: (R) => {
                              R.stopPropagation(), _();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(Ct, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ot, {
                  children: a.jsx(Rl, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: u,
                    onStyleChange: A,
                    onModeChange: F
                  })
                })
              ]
            }),
            a.jsxs(Et, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                a.jsx(kt, {
                  expandIcon: a.jsx(Nt, {}),
                  children: a.jsxs(P, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(S, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: m.t("json_table_section_advanced")
                      }),
                      a.jsx(ve, {
                        title: m.t("json_table_section_reset"),
                        children: a.jsx("span", {
                          children: a.jsx(ae, {
                            size: "small",
                            disabled: !x,
                            onClick: (R) => {
                              R.stopPropagation(), C();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(Ct, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ot, {
                  children: a.jsxs(me, {
                    spacing: 2,
                    children: [
                      a.jsx(Ml, {
                        globalSorting: r,
                        globalFiltering: o
                      }),
                      a.jsxs(P, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(Be, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(Ve, {
                                children: m.t("json_table_sortable")
                              }),
                              a.jsxs(Ee, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: m.t("json_table_sortable"),
                                onChange: (R) => n({
                                  ...e,
                                  sortable: R.target.value === "on" ? true : R.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(U, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: m.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(U, {
                                    value: "on",
                                    children: m.t("json_table_option_on")
                                  }),
                                  a.jsx(U, {
                                    value: "off",
                                    children: m.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Mr, {
                            globalEnabled: r,
                            columnOverride: e.sortable,
                            featureLabel: m.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      a.jsxs(P, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(Be, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(Ve, {
                                children: m.t("json_table_filterable")
                              }),
                              a.jsxs(Ee, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: m.t("json_table_filterable"),
                                onChange: (R) => n({
                                  ...e,
                                  filterable: R.target.value === "on" ? true : R.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(U, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: m.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(U, {
                                    value: "on",
                                    children: m.t("json_table_option_on")
                                  }),
                                  a.jsx(U, {
                                    value: "off",
                                    children: m.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Mr, {
                            globalEnabled: o,
                            columnOverride: e.filterable,
                            featureLabel: m.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && a.jsxs(Ue, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          a.jsx(S, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: m.t("json_table_analysis_info")
                          }),
                          a.jsxs(me, {
                            spacing: 0.5,
                            children: [
                              a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_type_label")
                                  }),
                                  a.jsx(Ge, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: jt[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_confidence")
                                  }),
                                  a.jsxs(S, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_nulls")
                                  }),
                                  a.jsxs(S, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      c > 0 && ` (${Math.round(t.nullCount / c * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_distinct")
                                  }),
                                  a.jsx(S, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_range")
                                  }),
                                  a.jsxs(S, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(S, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_date_input_format")
                                  }),
                                  a.jsx(S, {
                                    variant: "caption",
                                    children: t.dateFormat
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const El = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, kl = /^\d{4}-\d{2}-\d{2}$/, Nl = /^(\d{2})\.(\d{2})\.(\d{4})$/, Ol = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Ll = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Hl = /^(\d{2})\/(\d{2})\/(\d{4})$/, Bl = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Vl = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Lt(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function cn(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Ht(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Wl = [
    {
      regex: El,
      format: "ISO-8601"
    },
    {
      regex: kl,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Lt(n, t);
      }
    },
    {
      regex: Ll,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Lt(t, n) && Ht(r, o, s);
      }
    },
    {
      regex: Ol,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return Lt(t, n) && Ht(r, o);
      }
    },
    {
      regex: Nl,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Lt(t, n);
      }
    },
    {
      regex: Vl,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return cn(t, n) && Ht(r, o, s);
      }
    },
    {
      regex: Bl,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return cn(t, n) && Ht(r, o);
      }
    },
    {
      regex: Hl,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return cn(t, n);
      }
    }
  ];
  function Gl(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Wl) {
      const r = t.match(n.regex);
      if (r) {
        if (n.validate && !n.validate(r)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Ul(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function ql(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Ul(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = Gl(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "string"
      };
    }
    return Array.isArray(e) ? {
      type: "array"
    } : typeof e == "object" ? {
      type: "object"
    } : {
      type: "string"
    };
  }
  function Yl(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Jl(e) {
    let t, n = 0;
    for (const [r, o] of Object.entries(e)) o > n && (t = r, n = o);
    return t;
  }
  function Kl(e) {
    return {
      path: e,
      typeCounts: {},
      dateFormatCounts: {},
      nullCount: 0,
      distinctValues: /* @__PURE__ */ new Set(),
      numMin: void 0,
      numMax: void 0,
      strLenMin: void 0,
      strLenMax: void 0,
      dateMin: void 0,
      dateMax: void 0,
      nonNullCount: 0
    };
  }
  function Ir(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Xl(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", u = r[5] || "00", c = r[6] || "00";
        return `${i}-${s}-${o}T${l}:${u}:${c}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", u = r[5] || "00", c = r[6] || "00";
        return `${i}-${o}-${s}T${l}:${u}:${c}`;
      }
    }
    return null;
  }
  function Ql(e, t, n = 100, r = 0.8) {
    const o = /* @__PURE__ */ new Map();
    for (const s of e) o.set(s, Kl(s));
    for (const s of t) for (const i of e) {
      const l = o.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const u = s[i], c = ql(u);
      if (Ir(l.typeCounts, c.type), c.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, c.dateFormat && Ir(l.dateFormatCounts, c.dateFormat), l.distinctValues.size < n && l.distinctValues.add(u), typeof u == "number" && Number.isFinite(u) && ((l.numMin === void 0 || u < l.numMin) && (l.numMin = u), (l.numMax === void 0 || u > l.numMax) && (l.numMax = u)), typeof u == "string") {
        const d = u.length;
        (l.strLenMin === void 0 || d < l.strLenMin) && (l.strLenMin = d), (l.strLenMax === void 0 || d > l.strLenMax) && (l.strLenMax = d);
      }
      if (c.dateFormat) {
        const d = Xl(u, c.dateFormat);
        d !== null && ((l.dateMin === void 0 || d < l.dateMin) && (l.dateMin = d), (l.dateMax === void 0 || d > l.dateMax) && (l.dateMax = d));
      }
    }
    return e.map((s) => {
      const i = o.get(s);
      let l = Yl(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < r && (l = "string");
      const u = l === "date" ? Jl(i.dateFormatCounts) : void 0, c = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, d = i.nonNullCount > 0 ? Math.round(c / i.nonNullCount * 100) / 100 : 0, g = {
        path: s,
        type: l,
        nullable: i.nullCount > 0,
        typeCounts: {
          ...i.typeCounts
        },
        nullCount: i.nullCount,
        distinctCount: i.distinctValues.size,
        confidence: d
      };
      return u && (g.dateFormat = u), l === "number" && (i.numMin !== void 0 && (g.min = i.numMin), i.numMax !== void 0 && (g.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (g.min = i.dateMin), i.dateMax !== void 0 && (g.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (g.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (g.stringLengthMax = i.strLenMax)), g;
    });
  }
  function en(e, t, n, r, o, s, i, l) {
    if (s > l.maxDepth && (l.maxDepth = s), s > i) {
      n[t] = e, r.add(t);
      return;
    }
    if (e == null) {
      n[t] = null, r.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (let u = 0; u < e.length; u++) {
        u > l.maxArrayIndex && (l.maxArrayIndex = u);
        const c = `${t}[${u}]`;
        en(e[u], c, n, r, o, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
      if (o.has(e)) {
        n[t] = "[Circular]", r.add(t);
        return;
      }
      o.add(e);
      const u = Object.keys(e);
      if (u.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (const c of u) {
        const d = t ? `${t}.${c}` : c;
        en(e[c], d, n, r, o, s + 1, i, l);
      }
      return;
    }
    n[t] = e, r.add(t);
  }
  function Zl(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), r = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, o = [];
    for (const i of e) {
      const l = {}, u = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const c of Object.keys(i)) en(i[c], c, l, n, u, 1, t, r);
      else en(i, "_value", l, n, u, 0, t, r);
      o.push(l);
    }
    const s = ea([
      ...n
    ]);
    for (const i of o) for (const l of s) l in i || (i[l] = null);
    return {
      paths: s,
      rows: o,
      maxDepth: r.maxDepth,
      maxArrayIndex: r.maxArrayIndex
    };
  }
  function ea(e) {
    return e.sort((t, n) => {
      const r = $r(t), o = $r(n), s = Math.min(r.length, o.length);
      for (let i = 0; i < s; i++) {
        const l = r[i], u = o[i], c = Ar(l), d = Ar(u);
        if (c !== null && d !== null) {
          if (c !== d) return c - d;
          continue;
        }
        if (l !== u) return l < u ? -1 : 1;
      }
      return r.length - o.length;
    });
  }
  function $r(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], o = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (o) {
        o[1] && n.push(o[1]);
        const s = o[2].match(/\[\d+\]/g);
        s && n.push(...s);
      } else n.push(t);
      return n;
    });
  }
  function Ar(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const ta = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function no(e, t) {
    const n = performance.now(), r = {
      ...ta,
      ...t
    };
    if (!e || e.length === 0) return {
      columns: [],
      rows: [],
      meta: {
        rowCount: 0,
        columnCount: 0,
        maxDepth: 0,
        maxArrayIndex: 0,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: 0,
        nullPercentage: 0,
        analysisTimeMs: 0
      }
    };
    const o = Zl(e, r.maxDepth), s = Ql(o.paths, o.rows, r.maxDistinct, r.dateConfidenceThreshold), i = o.paths.length * o.rows.length, l = s.reduce((d, g) => d + g.nullCount, 0), u = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, c = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: s,
      rows: o.rows,
      meta: {
        rowCount: o.rows.length,
        columnCount: s.length,
        maxDepth: o.maxDepth,
        maxArrayIndex: o.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: l,
        nullPercentage: u,
        analysisTimeMs: c
      }
    };
  }
  function na(e, t) {
    return y.useMemo(() => no(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function ra({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: s, socket: i }) {
    const [l, u] = y.useState(n), [c, d] = y.useState(null), [g, p] = y.useState([]), [f, h] = y.useState(false), [b, _] = y.useState(false), [x, C] = y.useState(null), [M, A] = y.useState(null), F = y.useRef(false), R = y.useRef(() => Promise.resolve()), $ = y.useRef(n), j = y.useMemo(() => JSON.stringify(n), [
      n
    ]), O = y.useMemo(() => JSON.stringify(l) !== j, [
      l,
      j
    ]);
    y.useEffect(() => {
      e && (u(n), $.current = n, d(n.length > 0 ? n[0].path : null), F.current = false, A(null), C(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !F.current && (F.current = true, R.current());
    }, [
      e
    ]);
    const L = y.useCallback(async () => {
      h(true), A(null), C(null);
      try {
        const v = s.oid;
        if (!v) return;
        const T = await i.getState(v);
        if ((T == null ? void 0 : T.val) === null || (T == null ? void 0 : T.val) === void 0) return;
        let E;
        const k = T.val;
        if (typeof k == "string") try {
          const q = JSON.parse(k);
          E = Array.isArray(q) ? q : [
            q
          ];
        } catch {
          return;
        }
        else if (Array.isArray(k)) E = k;
        else if (typeof k == "object" && k !== null) E = [
          k
        ];
        else return;
        const re = s.tableMaxDepth || 10, G = no(E, {
          maxDepth: re
        });
        if (G.meta.maxDepth > re) {
          const q = m.t("json_table_depth_warning").replace("{{actual}}", String(G.meta.maxDepth)).replace("{{configured}}", String(re));
          C(q);
        }
        p(G.columns);
        const Ne = new Map($.current.map((q) => [
          q.path,
          q
        ])), Oe = new Set(G.columns.map((q) => q.path)), ge = $.current.filter((q) => Oe.has(q.path)), qe = G.columns.filter((q) => !Ne.has(q.path)).map((q) => ({
          path: q.path,
          visible: true,
          headerName: q.path.split(".").pop() || q.path,
          sortable: "auto",
          filterable: "auto"
        })), De = [
          ...ge,
          ...qe
        ];
        u(De), $.current = De, d((q) => q === null && De.length > 0 ? De[0].path : q);
      } catch (v) {
        const T = v instanceof Error ? v.message : "Failed to discover columns";
        A(T);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      R.current = L;
    }, [
      L
    ]), y.useEffect(() => {
      $.current = l;
    }, [
      l
    ]);
    const W = y.useCallback((v) => {
      u((T) => T.map((E) => E.path === v.path ? v : E));
    }, []), ie = y.useCallback((v) => {
      u(v);
    }, []), ue = y.useCallback(() => {
      r(l), t();
    }, [
      l,
      r,
      t
    ]), le = y.useCallback((v, T) => {
      if (T === "backdropClick" && O) {
        _(true);
        return;
      }
      t();
    }, [
      O,
      t
    ]), ne = y.useMemo(() => c ? l.find((v) => v.path === c) : null, [
      c,
      l
    ]), ce = y.useMemo(() => c ? g.find((v) => v.path === c) : void 0, [
      c,
      g
    ]), ee = y.useMemo(() => "json-table-column-editor-title", []);
    return a.jsxs(Vo, {
      theme: o,
      children: [
        a.jsxs(Tn, {
          open: e,
          onClose: le,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": ee,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            a.jsx(Pn, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: ee,
              children: a.jsxs(P, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  a.jsx(S, {
                    variant: "h6",
                    children: m.t("json_table_column_editor_title")
                  }),
                  a.jsx(ae, {
                    onClick: () => le(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": m.t("close"),
                    children: a.jsx(Kt, {})
                  })
                ]
              })
            }),
            a.jsxs(En, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && a.jsx(Gt, {
                  severity: "warning",
                  onClose: () => C(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                M && a.jsx(Gt, {
                  severity: "error",
                  onClose: () => A(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: M
                }),
                a.jsxs(P, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    a.jsx(P, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: a.jsx(Li, {
                        columns: l,
                        discoveredColumns: g,
                        selectedPath: c,
                        onSelect: d,
                        onChange: ie,
                        onRefresh: L,
                        loading: f
                      })
                    }),
                    a.jsx(P, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: ne ? a.jsx(Pl, {
                        column: ne,
                        discoveredColumn: ce,
                        onChange: W,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : a.jsx(P, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: a.jsx(S, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? m.t("json_table_select_column") : m.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            a.jsxs(Dn, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                a.jsx(ke, {
                  onClick: () => le(),
                  children: m.t("cancel")
                }),
                a.jsx(ke, {
                  variant: "contained",
                  onClick: ue,
                  disabled: !O,
                  children: m.t("save")
                })
              ]
            })
          ]
        }),
        a.jsx(Ps, {
          open: b,
          autoHideDuration: 3e3,
          onClose: () => _(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: a.jsx(Gt, {
            severity: "warning",
            onClose: () => _(false),
            children: m.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function oa(e, t, n, r) {
    const o = e.name || "columnConfig", s = r.context.theme, [i, l] = y.useState(false), u = y.useMemo(() => Qr(t[o]), [
      t,
      o
    ]), c = u.filter((_) => _.visible).length, d = u.length, g = u.some((_) => _.format), p = u.some((_) => _.cellStyle && _.cellStyle.length > 0), f = y.useCallback((_) => {
      const x = JSON.stringify(_), C = `b64:${Ni(x)}`;
      n({
        [o]: C
      });
    }, [
      o,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), b = y.useCallback(() => {
      l(false);
    }, []);
    return a.jsxs(P, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        a.jsx(ke, {
          variant: "outlined",
          startIcon: a.jsx(Ei, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": m.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: m.t("json_table_configure_columns")
        }),
        d > 0 && a.jsxs(S, {
          variant: "caption",
          color: "primary.main",
          sx: {
            mt: 0.5,
            display: "block"
          },
          "aria-live": "polite",
          children: [
            c,
            " / ",
            d,
            " ",
            m.t("json_table_columns_visible"),
            g && ` \xB7 ${m.t("json_table_has_formatting")}`,
            p && ` \xB7 ${m.t("json_table_has_styling")}`
          ]
        }),
        a.jsx(ra, {
          open: i,
          onClose: b,
          columns: u,
          onSave: f,
          theme: s,
          data: t,
          socket: r.context.socket
        })
      ]
    });
  }
  const sa = () => [
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: oa
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_features"
      })
    },
    {
      name: "tableSorting",
      type: "checkbox",
      label: "json_table_sorting",
      default: true
    },
    {
      name: "tableSortingMulti",
      type: "checkbox",
      label: "json_table_sorting_multi",
      default: false,
      tooltip: "json_table_sorting_multi_tooltip"
    },
    {
      name: "tableFiltering",
      type: "checkbox",
      label: "json_table_filtering",
      default: true,
      tooltip: "json_table_filtering_tooltip"
    },
    {
      name: "tableQuickFilter",
      type: "checkbox",
      label: "json_table_quick_filter",
      default: false
    },
    {
      name: "tableColumnMenu",
      type: "checkbox",
      label: "json_table_column_menu",
      default: true
    },
    {
      name: "tableHiding",
      type: "checkbox",
      label: "json_table_hiding",
      default: true,
      tooltip: "json_table_hiding_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_pagination"
      })
    },
    {
      name: "tablePagination",
      type: "checkbox",
      label: "json_table_pagination_enabled",
      default: true
    },
    {
      name: "tablePageSize",
      type: "number",
      label: "json_table_page_size",
      default: 25,
      min: 1
    },
    {
      name: "tablePageSizeOptions",
      type: "text",
      label: "json_table_page_size_options",
      default: "10,25,50,100",
      tooltip: "json_table_page_size_options_tooltip"
    },
    {
      name: "tableVirtualizeThreshold",
      type: "number",
      label: "json_table_virtualize_threshold",
      default: 50,
      min: 0,
      tooltip: "json_table_virtualize_threshold_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_selection"
      })
    },
    {
      name: "tableRowSelection",
      type: "checkbox",
      label: "json_table_row_selection",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_analysis"
      })
    },
    {
      name: "tableMaxDepth",
      type: "number",
      label: "json_table_max_depth",
      default: 10,
      min: 1,
      max: 50,
      tooltip: "json_table_max_depth_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_layout"
      })
    },
    {
      name: "tableDensity",
      label: "json_table_density",
      type: "select",
      options: [
        {
          value: "compact",
          label: "compact"
        },
        {
          value: "standard",
          label: "standard"
        },
        {
          value: "comfortable",
          label: "comfortable"
        }
      ],
      default: "standard",
      noTranslation: true
    },
    {
      name: "tableRowHeight",
      type: "number",
      label: "json_table_row_height",
      min: 20,
      tooltip: "json_table_row_height_tooltip"
    },
    {
      name: "tableHeaderHeight",
      type: "number",
      label: "json_table_header_height",
      min: 20
    },
    {
      name: "tableAutoSize",
      type: "checkbox",
      label: "json_table_auto_size",
      default: false
    },
    {
      name: "tableHeaderElevation",
      label: "json_table_header_elevation",
      type: "slider",
      min: 0,
      max: 24,
      step: 1,
      default: 6,
      tooltip: "json_table_header_elevation_tooltip"
    },
    {
      name: "jsonTablePadding",
      type: "number",
      label: "json_table_padding",
      default: 1,
      step: 0.5,
      min: 0
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "group_table_border"
      })
    },
    {
      name: "borderWidth",
      label: "table_border_width",
      type: "slider",
      min: 0,
      max: 20,
      step: 1,
      default: 0
    },
    {
      name: "borderStyle",
      label: "table_border_style",
      type: "select",
      options: [
        {
          value: "none",
          label: "none"
        },
        {
          value: "dotted",
          label: "dotted"
        },
        {
          value: "dashed",
          label: "dashed"
        },
        {
          value: "solid",
          label: "solid"
        },
        {
          value: "double",
          label: "double"
        },
        {
          value: "groove",
          label: "groove"
        },
        {
          value: "ridge",
          label: "ridge"
        },
        {
          value: "inset",
          label: "inset"
        },
        {
          value: "outset",
          label: "outset"
        },
        {
          value: "hidden",
          label: "hidden"
        }
      ],
      default: "solid",
      noTranslation: true
    },
    Ye({
      name: "borderColor",
      label: "table_border_color",
      noGradient: true
    }),
    {
      name: "borderRadius",
      label: "table_border_radius",
      type: "text",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_header_style"
      })
    },
    Ye({
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color"
    }),
    Ye({
      name: "tableHeaderTextColor",
      label: "json_table_header_text_color",
      noGradient: true
    }),
    {
      name: "tableHeaderFontSize",
      type: "number",
      label: "json_table_header_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {})
    },
    {
      name: "headerBorderWidth",
      label: "json_table_header_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 0
    },
    Ye({
      name: "headerBorderColor",
      label: "json_table_header_border_color",
      noGradient: true
    }),
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_borders"
      })
    },
    {
      name: "tableShowCellBorders",
      type: "checkbox",
      label: "json_table_show_cell_borders",
      default: false
    },
    {
      name: "verticalCellBorderWidth",
      label: "vertical_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowCellBorders"
    },
    Ye({
      name: "verticalCellBorderColor",
      label: "vertical_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowCellBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {})
    },
    {
      name: "tableShowRowBorders",
      type: "checkbox",
      label: "json_table_show_row_borders",
      default: true
    },
    {
      name: "horizontalCellBorderWidth",
      label: "horizontal_cell_border_width",
      type: "slider",
      min: 0,
      max: 10,
      step: 1,
      default: 1,
      hidden: "!data.tableShowRowBorders"
    },
    Ye({
      name: "horizontalCellBorderColor",
      label: "horizontal_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowRowBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => a.jsx(Fe, {
        dividerText: "json_table_cell_style"
      })
    },
    Ye({
      name: "evenRowColor",
      label: "json_table_even_row_color"
    }),
    Ye({
      name: "oddRowColor",
      label: "json_table_odd_row_color"
    })
  ];
  function Xe(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Me(e, t) {
    return (n) => {
      t.setState((r) => ({
        ...r,
        [e]: Xe(n, r[e])
      }));
    };
  }
  function rn(e) {
    return e instanceof Function;
  }
  function ia(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function la(e, t) {
    const n = [], r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
    return r(e), n;
  }
  function z(e, t, n) {
    let r = [], o;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== r.length || l.some((d, g) => r[g] !== d))) return o;
      r = l;
      let c;
      if (n.key && n.debug && (c = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
        const d = Math.round((Date.now() - i) * 100) / 100, g = Math.round((Date.now() - c) * 100) / 100, p = g / 16, f = (h, b) => {
          for (h = String(h); h.length < b; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${f(g, 5)} /${f(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * p, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return o;
    };
  }
  function D(e, t, n, r) {
    return {
      debug: () => {
        var o;
        return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
      },
      key: false,
      onChange: r
    };
  }
  function aa(e, t, n, r) {
    const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: z(() => [
        e,
        n,
        t,
        s
      ], (i, l, u, c) => ({
        table: i,
        column: l,
        row: u,
        cell: c,
        getValue: c.getValue,
        renderValue: c.renderValue
      }), D(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function ua(e, t, n, r) {
    var o, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, u = l.accessorKey;
    let c = (o = (s = l.id) != null ? s : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, d;
    if (l.accessorFn ? d = l.accessorFn : u && (u.includes(".") ? d = (p) => {
      let f = p;
      for (const b of u.split(".")) {
        var h;
        f = (h = f) == null ? void 0 : h[b];
      }
      return f;
    } : d = (p) => p[l.accessorKey]), !c) throw new Error();
    let g = {
      id: `${String(c)}`,
      accessorFn: d,
      parent: r,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: z(() => [
        true
      ], () => {
        var p;
        return [
          g,
          ...(p = g.columns) == null ? void 0 : p.flatMap((f) => f.getFlatColumns())
        ];
      }, D(e.options, "debugColumns")),
      getLeafColumns: z(() => [
        e._getOrderColumnsFn()
      ], (p) => {
        var f;
        if ((f = g.columns) != null && f.length) {
          let h = g.columns.flatMap((b) => b.getLeafColumns());
          return p(h);
        }
        return [
          g
        ];
      }, D(e.options, "debugColumns"))
    };
    for (const p of e._features) p.createColumn == null || p.createColumn(g, e);
    return g;
  }
  const de = "debugHeaders";
  function Fr(e, t, n) {
    var r;
    let s = {
      id: (r = n.id) != null ? r : t.id,
      column: t,
      index: n.index,
      isPlaceholder: !!n.isPlaceholder,
      placeholderId: n.placeholderId,
      depth: n.depth,
      subHeaders: [],
      colSpan: 0,
      rowSpan: 0,
      headerGroup: null,
      getLeafHeaders: () => {
        const i = [], l = (u) => {
          u.subHeaders && u.subHeaders.length && u.subHeaders.map(l), i.push(u);
        };
        return l(s), i;
      },
      getContext: () => ({
        table: e,
        header: s,
        column: t
      })
    };
    return e._features.forEach((i) => {
      i.createHeader == null || i.createHeader(s, e);
    }), s;
  }
  const ca = {
    createTable: (e) => {
      e.getHeaderGroups = z(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => {
        var s, i;
        const l = (s = r == null ? void 0 : r.map((g) => n.find((p) => p.id === g)).filter(Boolean)) != null ? s : [], u = (i = o == null ? void 0 : o.map((g) => n.find((p) => p.id === g)).filter(Boolean)) != null ? i : [], c = n.filter((g) => !(r != null && r.includes(g.id)) && !(o != null && o.includes(g.id)));
        return Bt(t, [
          ...l,
          ...c,
          ...u
        ], e);
      }, D(e.options, de)), e.getCenterHeaderGroups = z(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), Bt(t, n, e, "center")), D(e.options, de)), e.getLeftHeaderGroups = z(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Bt(t, s, e, "left");
      }, D(e.options, de)), e.getRightHeaderGroups = z(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Bt(t, s, e, "right");
      }, D(e.options, de)), e.getFooterGroups = z(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), D(e.options, de)), e.getLeftFooterGroups = z(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), D(e.options, de)), e.getCenterFooterGroups = z(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), D(e.options, de)), e.getRightFooterGroups = z(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), D(e.options, de)), e.getFlatHeaders = z(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), D(e.options, de)), e.getLeftFlatHeaders = z(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), D(e.options, de)), e.getCenterFlatHeaders = z(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), D(e.options, de)), e.getRightFlatHeaders = z(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), D(e.options, de)), e.getCenterLeafHeaders = z(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), D(e.options, de)), e.getLeftLeafHeaders = z(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), D(e.options, de)), e.getRightLeafHeaders = z(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), D(e.options, de)), e.getLeafHeaders = z(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, r) => {
        var o, s, i, l, u, c;
        return [
          ...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(u = (c = r[0]) == null ? void 0 : c.headers) != null ? u : []
        ].map((d) => d.getLeafHeaders()).flat();
      }, D(e.options, de));
    }
  };
  function Bt(e, t, n, r) {
    var o, s;
    let i = 0;
    const l = function(p, f) {
      f === void 0 && (f = 1), i = Math.max(i, f), p.filter((h) => h.getIsVisible()).forEach((h) => {
        var b;
        (b = h.columns) != null && b.length && l(h.columns, f + 1);
      }, 0);
    };
    l(e);
    let u = [];
    const c = (p, f) => {
      const h = {
        depth: f,
        id: [
          r,
          `${f}`
        ].filter(Boolean).join("_"),
        headers: []
      }, b = [];
      p.forEach((_) => {
        const x = [
          ...b
        ].reverse()[0], C = _.column.depth === h.depth;
        let M, A = false;
        if (C && _.column.parent ? M = _.column.parent : (M = _.column, A = true), x && (x == null ? void 0 : x.column) === M) x.subHeaders.push(_);
        else {
          const F = Fr(n, M, {
            id: [
              r,
              f,
              M.id,
              _ == null ? void 0 : _.id
            ].filter(Boolean).join("_"),
            isPlaceholder: A,
            placeholderId: A ? `${b.filter((R) => R.column === M).length}` : void 0,
            depth: f,
            index: b.length
          });
          F.subHeaders.push(_), b.push(F);
        }
        h.headers.push(_), _.headerGroup = h;
      }), u.push(h), f > 0 && c(b, f - 1);
    }, d = t.map((p, f) => Fr(n, p, {
      depth: i,
      index: f
    }));
    c(d, i - 1), u.reverse();
    const g = (p) => p.filter((h) => h.column.getIsVisible()).map((h) => {
      let b = 0, _ = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], g(h.subHeaders).forEach((M) => {
        let { colSpan: A, rowSpan: F } = M;
        b += A, x.push(F);
      })) : b = 1;
      const C = Math.min(...x);
      return _ = _ + C, h.colSpan = b, h.rowSpan = _, {
        colSpan: b,
        rowSpan: _
      };
    });
    return g((o = (s = u[0]) == null ? void 0 : s.headers) != null ? o : []), u;
  }
  const Nn = (e, t, n, r, o, s, i) => {
    let l = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (u) => {
        if (l._valuesCache.hasOwnProperty(u)) return l._valuesCache[u];
        const c = e.getColumn(u);
        if (c != null && c.accessorFn) return l._valuesCache[u] = c.accessorFn(l.original, r), l._valuesCache[u];
      },
      getUniqueValues: (u) => {
        if (l._uniqueValuesCache.hasOwnProperty(u)) return l._uniqueValuesCache[u];
        const c = e.getColumn(u);
        if (c != null && c.accessorFn) return c.columnDef.getUniqueValues ? (l._uniqueValuesCache[u] = c.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[u]) : (l._uniqueValuesCache[u] = [
          l.getValue(u)
        ], l._uniqueValuesCache[u]);
      },
      renderValue: (u) => {
        var c;
        return (c = l.getValue(u)) != null ? c : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => la(l.subRows, (u) => u.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let u = [], c = l;
        for (; ; ) {
          const d = c.getParentRow();
          if (!d) break;
          u.push(d), c = d;
        }
        return u.reverse();
      },
      getAllCells: z(() => [
        e.getAllLeafColumns()
      ], (u) => u.map((c) => aa(e, l, c, c.id)), D(e.options, "debugRows")),
      _getAllCellsByColumnId: z(() => [
        l.getAllCells()
      ], (u) => u.reduce((c, d) => (c[d.column.id] = d, c), {}), D(e.options, "debugRows"))
    };
    for (let u = 0; u < e._features.length; u++) {
      const c = e._features[u];
      c == null || c.createRow == null || c.createRow(l, e);
    }
    return l;
  }, da = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, ro = (e, t, n) => {
    var r, o;
    const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
  };
  ro.autoRemove = (e) => Pe(e);
  const oo = (e, t, n) => {
    var r;
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
  };
  oo.autoRemove = (e) => Pe(e);
  const so = (e, t, n) => {
    var r;
    return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  so.autoRemove = (e) => Pe(e);
  const io = (e, t, n) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
  };
  io.autoRemove = (e) => Pe(e);
  const lo = (e, t, n) => !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
  lo.autoRemove = (e) => Pe(e) || !(e != null && e.length);
  const ao = (e, t, n) => n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
  ao.autoRemove = (e) => Pe(e) || !(e != null && e.length);
  const uo = (e, t, n) => e.getValue(t) === n;
  uo.autoRemove = (e) => Pe(e);
  const co = (e, t, n) => e.getValue(t) == n;
  co.autoRemove = (e) => Pe(e);
  const On = (e, t, n) => {
    let [r, o] = n;
    const s = e.getValue(t);
    return s >= r && s <= o;
  };
  On.resolveFilterValue = (e) => {
    let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, s = t === null || Number.isNaN(r) ? -1 / 0 : r, i = n === null || Number.isNaN(o) ? 1 / 0 : o;
    if (s > i) {
      const l = s;
      s = i, i = l;
    }
    return [
      s,
      i
    ];
  };
  On.autoRemove = (e) => Pe(e) || Pe(e[0]) && Pe(e[1]);
  const He = {
    includesString: ro,
    includesStringSensitive: oo,
    equalsString: so,
    arrIncludes: io,
    arrIncludesAll: lo,
    arrIncludesSome: ao,
    equals: uo,
    weakEquals: co,
    inNumberRange: On
  };
  function Pe(e) {
    return e == null || e === "";
  }
  const fa = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Me("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        return typeof r == "string" ? He.includesString : typeof r == "number" ? He.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? He.equals : Array.isArray(r) ? He.arrIncludes : He.weakEquals;
      }, e.getFilterFn = () => {
        var n, r;
        return rn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : He[e.columnDef.filterFn];
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
          const o = e.getFilterFn(), s = r == null ? void 0 : r.find((d) => d.id === e.id), i = Xe(n, s ? s.value : void 0);
          if (zr(o, i, e)) {
            var l;
            return (l = r == null ? void 0 : r.filter((d) => d.id !== e.id)) != null ? l : [];
          }
          const u = {
            id: e.id,
            value: i
          };
          if (s) {
            var c;
            return (c = r == null ? void 0 : r.map((d) => d.id === e.id ? u : d)) != null ? c : [];
          }
          return r != null && r.length ? [
            ...r,
            u
          ] : [
            u
          ];
        });
      };
    },
    createRow: (e, t) => {
      e.columnFilters = {}, e.columnFiltersMeta = {};
    },
    createTable: (e) => {
      e.setColumnFilters = (t) => {
        const n = e.getAllLeafColumns(), r = (o) => {
          var s;
          return (s = Xe(t, o)) == null ? void 0 : s.filter((i) => {
            const l = n.find((u) => u.id === i.id);
            if (l) {
              const u = l.getFilterFn();
              if (zr(u, i.value, l)) return false;
            }
            return true;
          });
        };
        e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
      }, e.resetColumnFilters = (t) => {
        var n, r;
        e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
      }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
    }
  };
  function zr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const pa = (e, t, n) => n.reduce((r, o) => {
    const s = o.getValue(e);
    return r + (typeof s == "number" ? s : 0);
  }, 0), ga = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r > s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, ha = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r < s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, ma = (e, t, n) => {
    let r, o;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
    }), [
      r,
      o
    ];
  }, ya = (e, t) => {
    let n = 0, r = 0;
    if (t.forEach((o) => {
      let s = o.getValue(e);
      s != null && (s = +s) >= s && (++n, r += s);
    }), n) return r / n;
  }, ba = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!ia(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  }, _a = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), xa = (e, t) => new Set(t.map((n) => n.getValue(e))).size, va = (e, t) => t.length, dn = {
    sum: pa,
    min: ga,
    max: ha,
    extent: ma,
    mean: ya,
    median: ba,
    unique: _a,
    uniqueCount: xa,
    count: va
  }, Ca = {
    getDefaultColumnDef: () => ({
      aggregatedCell: (e) => {
        var t, n;
        return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
      },
      aggregationFn: "auto"
    }),
    getInitialState: (e) => ({
      grouping: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGroupingChange: Me("grouping", e),
      groupedColumnMode: "reorder"
    }),
    createColumn: (e, t) => {
      e.toggleGrouping = () => {
        t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [
          ...n ?? [],
          e.id
        ]);
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
        if (typeof r == "number") return dn.sum;
        if (Object.prototype.toString.call(r) === "[object Date]") return dn.extent;
      }, e.getAggregationFn = () => {
        var n, r;
        if (!e) throw new Error();
        return rn(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : dn[e.columnDef.aggregationFn];
      };
    },
    createTable: (e) => {
      e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
        var n, r;
        e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
      }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
    },
    createRow: (e, t) => {
      e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
        if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
        const r = t.getColumn(n);
        return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
      }, e._groupingValuesCache = {};
    },
    createCell: (e, t, n, r) => {
      e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
        var o;
        return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
      };
    }
  };
  function wa(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const r = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? r : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...r
    ];
  }
  const Sa = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Me("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = z((n) => [
        Rt(t, n)
      ], (n) => n.findIndex((r) => r.id === e.id), D(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var r;
        return ((r = Rt(t, n)[0]) == null ? void 0 : r.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var r;
        const o = Rt(t, n);
        return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = z(() => [
        e.getState().columnOrder,
        e.getState().grouping,
        e.options.groupedColumnMode
      ], (t, n, r) => (o) => {
        let s = [];
        if (!(t != null && t.length)) s = o;
        else {
          const i = [
            ...t
          ], l = [
            ...o
          ];
          for (; l.length && i.length; ) {
            const u = i.shift(), c = l.findIndex((d) => d.id === u);
            c > -1 && s.push(l.splice(c, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return wa(s, n, r);
      }, D(e.options, "debugTable"));
    }
  }, fn = () => ({
    left: [],
    right: []
  }), ja = {
    getInitialState: (e) => ({
      columnPinning: fn(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Me("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
        t.setColumnPinning((o) => {
          var s, i;
          if (n === "right") {
            var l, u;
            return {
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((g) => !(r != null && r.includes(g))),
              right: [
                ...((u = o == null ? void 0 : o.right) != null ? u : []).filter((g) => !(r != null && r.includes(g))),
                ...r
              ]
            };
          }
          if (n === "left") {
            var c, d;
            return {
              left: [
                ...((c = o == null ? void 0 : o.left) != null ? c : []).filter((g) => !(r != null && r.includes(g))),
                ...r
              ],
              right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((g) => !(r != null && r.includes(g)))
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((g) => !(r != null && r.includes(g))),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((g) => !(r != null && r.includes(g)))
          };
        });
      }, e.getCanPin = () => e.getLeafColumns().some((r) => {
        var o, s, i;
        return ((o = r.columnDef.enablePinning) != null ? o : true) && ((s = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? s : true);
      }), e.getIsPinned = () => {
        const n = e.getLeafColumns().map((l) => l.id), { left: r, right: o } = t.getState().columnPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "left" : i ? "right" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
      };
    },
    createRow: (e, t) => {
      e.getCenterVisibleCells = z(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, r, o) => {
        const s = [
          ...r ?? [],
          ...o ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, D(t.options, "debugRows")), e.getLeftVisibleCells = z(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), D(t.options, "debugRows")), e.getRightVisibleCells = z(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), D(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, r;
        return e.setColumnPinning(t ? fn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : fn());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const r = e.getState().columnPinning;
        if (!t) {
          var o, s;
          return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e.getLeftLeafColumns = z(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), D(e.options, "debugColumns")), e.getRightLeafColumns = z(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), D(e.options, "debugColumns")), e.getCenterLeafColumns = z(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r) => {
        const o = [
          ...n ?? [],
          ...r ?? []
        ];
        return t.filter((s) => !o.includes(s.id));
      }, D(e.options, "debugColumns"));
    }
  };
  function Ra(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Vt = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, pn = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Ma = {
    getDefaultColumnDef: () => Vt,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: pn(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Me("columnSizing", e),
      onColumnSizingInfoChange: Me("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, r, o;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Vt.minSize, (r = s ?? e.columnDef.size) != null ? r : Vt.size), (o = e.columnDef.maxSize) != null ? o : Vt.maxSize);
      }, e.getStart = z((n) => [
        n,
        Rt(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), D(t.options, "debugColumns")), e.getAfter = z((n) => [
        n,
        Rt(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), D(t.options, "debugColumns")), e.resetSize = () => {
        t.setColumnSizing((n) => {
          let { [e.id]: r, ...o } = n;
          return o;
        });
      }, e.getCanResize = () => {
        var n, r;
        return ((n = e.columnDef.enableResizing) != null ? n : true) && ((r = t.options.enableColumnResizing) != null ? r : true);
      }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
    },
    createHeader: (e, t) => {
      e.getSize = () => {
        let n = 0;
        const r = (o) => {
          if (o.subHeaders.length) o.subHeaders.forEach(r);
          else {
            var s;
            n += (s = o.column.getSize()) != null ? s : 0;
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
        return (s) => {
          if (!r || !o || (s.persist == null || s.persist(), gn(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              r.id,
              r.getSize()
            ]
          ], u = gn(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, d = (x, C) => {
            typeof C == "number" && (t.setColumnSizingInfo((M) => {
              var A, F;
              const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (C - ((A = M == null ? void 0 : M.startOffset) != null ? A : 0)) * R, j = Math.max($ / ((F = M == null ? void 0 : M.startSize) != null ? F : 0), -0.999999);
              return M.columnSizingStart.forEach((O) => {
                let [L, W] = O;
                c[L] = Math.round(Math.max(W + W * j, 0) * 100) / 100;
              }), {
                ...M,
                deltaOffset: $,
                deltaPercentage: j
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((M) => ({
              ...M,
              ...c
            })));
          }, g = (x) => d("move", x), p = (x) => {
            d("end", x), t.setColumnSizingInfo((C) => ({
              ...C,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, f = Ra(n), h = {
            moveHandler: (x) => g(x.clientX),
            upHandler: (x) => {
              f == null ? void 0 : f.removeEventListener("mousemove", h.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", h.upHandler), p(x.clientX);
            }
          }, b = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), g(x.touches[0].clientX), false),
            upHandler: (x) => {
              var C;
              f == null ? void 0 : f.removeEventListener("touchmove", b.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", b.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), p((C = x.touches[0]) == null ? void 0 : C.clientX);
            }
          }, _ = Ia() ? {
            passive: false
          } : false;
          gn(s) ? (f == null ? void 0 : f.addEventListener("touchmove", b.moveHandler, _), f == null ? void 0 : f.addEventListener("touchend", b.upHandler, _)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, _), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, _)), t.setColumnSizingInfo((x) => ({
            ...x,
            startOffset: u,
            startSize: i,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: l,
            isResizingColumn: r.id
          }));
        };
      };
    },
    createTable: (e) => {
      e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
        var n;
        e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
      }, e.resetHeaderSizeInfo = (t) => {
        var n;
        e.setColumnSizingInfo(t ? pn() : (n = e.initialState.columnSizingInfo) != null ? n : pn());
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
    }
  };
  let Wt = null;
  function Ia() {
    if (typeof Wt == "boolean") return Wt;
    let e = false;
    try {
      const t = {
        get passive() {
          return e = true, false;
        }
      }, n = () => {
      };
      window.addEventListener("test", n, t), window.removeEventListener("test", n);
    } catch {
      e = false;
    }
    return Wt = e, Wt;
  }
  function gn(e) {
    return e.type === "touchstart";
  }
  const $a = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Me("columnVisibility", e)
    }),
    createColumn: (e, t) => {
      e.toggleVisibility = (n) => {
        e.getCanHide() && t.setColumnVisibility((r) => ({
          ...r,
          [e.id]: n ?? !e.getIsVisible()
        }));
      }, e.getIsVisible = () => {
        var n, r;
        const o = e.columns;
        return (n = o.length ? o.some((s) => s.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : true;
      }, e.getCanHide = () => {
        var n, r;
        return ((n = e.columnDef.enableHiding) != null ? n : true) && ((r = t.options.enableHiding) != null ? r : true);
      }, e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      };
    },
    createRow: (e, t) => {
      e._getAllVisibleCells = z(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((r) => r.column.getIsVisible()), D(t.options, "debugRows")), e.getVisibleCells = z(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, r, o) => [
        ...n,
        ...r,
        ...o
      ], D(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, r) => z(() => [
        r(),
        r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")
      ], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), D(e.options, "debugColumns"));
      e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
        var r;
        e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
      }, e.toggleAllColumnsVisible = (n) => {
        var r;
        n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, s) => ({
          ...o,
          [s.id]: n || !(s.getCanHide != null && s.getCanHide())
        }), {}));
      }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var r;
        e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
      };
    }
  };
  function Rt(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const Aa = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Fa = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Me("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
        return typeof r == "string" || typeof r == "number";
      }
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, r, o, s;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((r = t.options.enableGlobalFilter) != null ? r : true) && ((o = t.options.enableFilters) != null ? o : true) && ((s = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? s : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => He.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: r } = e.options;
        return rn(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : He[r];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, za = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Me("expanded", e),
      paginateExpandedRows: true
    }),
    createTable: (e) => {
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
        var o, s;
        e.setExpanded(r ? {} : (o = (s = e.initialState) == null ? void 0 : s.expanded) != null ? o : {});
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
        return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((s) => {
          const i = s.split(".");
          r = Math.max(r, i.length);
        }), r;
      }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
    },
    createRow: (e, t) => {
      e.toggleExpanded = (n) => {
        t.setExpanded((r) => {
          var o;
          const s = r === true ? true : !!(r != null && r[e.id]);
          let i = {};
          if (r === true ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
            i[l] = true;
          }) : i = r, n = (o = n) != null ? o : !s, !s && n) return {
            ...i,
            [e.id]: true
          };
          if (s && !n) {
            const { [e.id]: l, ...u } = i;
            return u;
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
    }
  }, Rn = 0, Mn = 10, hn = () => ({
    pageIndex: Rn,
    pageSize: Mn
  }), Da = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...hn(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Me("pagination", e)
    }),
    createTable: (e) => {
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
        const o = (s) => Xe(r, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
      }, e.resetPagination = (r) => {
        var o;
        e.setPagination(r ? hn() : (o = e.initialState.pagination) != null ? o : hn());
      }, e.setPageIndex = (r) => {
        e.setPagination((o) => {
          let s = Xe(r, o.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...o,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (r) => {
        var o, s;
        e.setPageIndex(r ? Rn : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Rn);
      }, e.resetPageSize = (r) => {
        var o, s;
        e.setPageSize(r ? Mn : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Mn);
      }, e.setPageSize = (r) => {
        e.setPagination((o) => {
          const s = Math.max(1, Xe(r, o.pageSize)), i = o.pageSize * o.pageIndex, l = Math.floor(i / s);
          return {
            ...o,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (r) => e.setPagination((o) => {
        var s;
        let i = Xe(r, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...o,
          pageCount: i
        };
      }), e.getPageOptions = z(() => [
        e.getPageCount()
      ], (r) => {
        let o = [];
        return r && r > 0 && (o = [
          ...new Array(r)
        ].fill(null).map((s, i) => i)), o;
      }, D(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
        const { pageIndex: r } = e.getState().pagination, o = e.getPageCount();
        return o === -1 ? true : o === 0 ? false : r < o - 1;
      }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
        var r;
        return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
      }, e.getRowCount = () => {
        var r;
        return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
      };
    }
  }, mn = () => ({
    top: [],
    bottom: []
  }), Ta = {
    getInitialState: (e) => ({
      rowPinning: mn(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Me("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, r, o) => {
        const s = r ? e.getLeafRows().map((u) => {
          let { id: c } = u;
          return c;
        }) : [], i = o ? e.getParentRows().map((u) => {
          let { id: c } = u;
          return c;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((u) => {
          var c, d;
          if (n === "bottom") {
            var g, p;
            return {
              top: ((g = u == null ? void 0 : u.top) != null ? g : []).filter((b) => !(l != null && l.has(b))),
              bottom: [
                ...((p = u == null ? void 0 : u.bottom) != null ? p : []).filter((b) => !(l != null && l.has(b))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var f, h;
            return {
              top: [
                ...((f = u == null ? void 0 : u.top) != null ? f : []).filter((b) => !(l != null && l.has(b))),
                ...Array.from(l)
              ],
              bottom: ((h = u == null ? void 0 : u.bottom) != null ? h : []).filter((b) => !(l != null && l.has(b)))
            };
          }
          return {
            top: ((c = u == null ? void 0 : u.top) != null ? c : []).filter((b) => !(l != null && l.has(b))),
            bottom: ((d = u == null ? void 0 : u.bottom) != null ? d : []).filter((b) => !(l != null && l.has(b)))
          };
        });
      }, e.getCanPin = () => {
        var n;
        const { enableRowPinning: r, enablePinning: o } = t.options;
        return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : true;
      }, e.getIsPinned = () => {
        const n = [
          e.id
        ], { top: r, bottom: o } = t.getState().rowPinning, s = n.some((l) => r == null ? void 0 : r.includes(l)), i = n.some((l) => o == null ? void 0 : o.includes(l));
        return s ? "top" : i ? "bottom" : false;
      }, e.getPinnedIndex = () => {
        var n, r;
        const o = e.getIsPinned();
        if (!o) return -1;
        const s = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((i) => {
          let { id: l } = i;
          return l;
        });
        return (r = s == null ? void 0 : s.indexOf(e.id)) != null ? r : -1;
      };
    },
    createTable: (e) => {
      e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
        var n, r;
        return e.setRowPinning(t ? mn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : mn());
      }, e.getIsSomeRowsPinned = (t) => {
        var n;
        const r = e.getState().rowPinning;
        if (!t) {
          var o, s;
          return !!((o = r.top) != null && o.length || (s = r.bottom) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e._getPinnedRows = (t, n, r) => {
        var o;
        return ((o = e.options.keepPinnedRows) == null || o ? (n ?? []).map((i) => {
          const l = e.getRow(i, true);
          return l.getIsAllParentsExpanded() ? l : null;
        }) : (n ?? []).map((i) => t.find((l) => l.id === i))).filter(Boolean).map((i) => ({
          ...i,
          position: r
        }));
      }, e.getTopRows = z(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), D(e.options, "debugRows")), e.getBottomRows = z(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), D(e.options, "debugRows")), e.getCenterRows = z(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, r) => {
        const o = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...r ?? []
        ]);
        return t.filter((s) => !o.has(s.id));
      }, D(e.options, "debugRows"));
    }
  }, Pa = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Me("rowSelection", e),
      enableRowSelection: true,
      enableMultiRowSelection: true,
      enableSubRowSelection: true
    }),
    createTable: (e) => {
      e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
        var n;
        return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
      }, e.toggleAllRowsSelected = (t) => {
        e.setRowSelection((n) => {
          t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
          const r = {
            ...n
          }, o = e.getPreGroupedRowModel().flatRows;
          return t ? o.forEach((s) => {
            s.getCanSelect() && (r[s.id] = true);
          }) : o.forEach((s) => {
            delete r[s.id];
          }), r;
        });
      }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
        const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
          ...n
        };
        return e.getRowModel().rows.forEach((s) => {
          In(o, s.id, r, true, e);
        }), o;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = z(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? yn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, D(e.options, "debugTable")), e.getFilteredSelectedRowModel = z(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? yn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, D(e.options, "debugTable")), e.getGroupedSelectedRowModel = z(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? yn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, D(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
    },
    createRow: (e, t) => {
      e.toggleSelected = (n, r) => {
        const o = e.getIsSelected();
        t.setRowSelection((s) => {
          var i;
          if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n) return s;
          const l = {
            ...s
          };
          return In(l, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Ln(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return $n(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return $n(e, n) === "all";
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
    }
  }, In = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => In(e, l.id, n, r, o));
  };
  function yn(e, t) {
    const n = e.getState().rowSelection, r = [], o = {}, s = function(i, l) {
      return i.map((u) => {
        var c;
        const d = Ln(u, n);
        if (d && (r.push(u), o[u.id] = u), (c = u.subRows) != null && c.length && (u = {
          ...u,
          subRows: s(u.subRows)
        }), d) return u;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: r,
      rowsById: o
    };
  }
  function Ln(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function $n(e, t, n) {
    var r;
    if (!((r = e.subRows) != null && r.length)) return false;
    let o = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !o) && (i.getCanSelect() && (Ln(i, t) ? s = true : o = false), i.subRows && i.subRows.length)) {
        const l = $n(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), o = false);
      }
    }), o ? "all" : s ? "some" : false;
  }
  const An = /([0-9]+)/gm, Ea = (e, t, n) => fo(Qe(e.getValue(n)).toLowerCase(), Qe(t.getValue(n)).toLowerCase()), ka = (e, t, n) => fo(Qe(e.getValue(n)), Qe(t.getValue(n))), Na = (e, t, n) => Hn(Qe(e.getValue(n)).toLowerCase(), Qe(t.getValue(n)).toLowerCase()), Oa = (e, t, n) => Hn(Qe(e.getValue(n)), Qe(t.getValue(n))), La = (e, t, n) => {
    const r = e.getValue(n), o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  }, Ha = (e, t, n) => Hn(e.getValue(n), t.getValue(n));
  function Hn(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Qe(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function fo(e, t) {
    const n = e.split(An).filter(Boolean), r = t.split(An).filter(Boolean);
    for (; n.length && r.length; ) {
      const o = n.shift(), s = r.shift(), i = parseInt(o, 10), l = parseInt(s, 10), u = [
        i,
        l
      ].sort();
      if (isNaN(u[0])) {
        if (o > s) return 1;
        if (s > o) return -1;
        continue;
      }
      if (isNaN(u[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - r.length;
  }
  const xt = {
    alphanumeric: Ea,
    alphanumericCaseSensitive: ka,
    text: Na,
    textCaseSensitive: Oa,
    datetime: La,
    basic: Ha
  }, Ba = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Me("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let r = false;
        for (const o of n) {
          const s = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return xt.datetime;
          if (typeof s == "string" && (r = true, s.split(An).length > 1)) return xt.alphanumeric;
        }
        return r ? xt.text : xt.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, r;
        if (!e) throw new Error();
        return rn(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : xt[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, r) => {
        const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((f) => f.id === e.id), u = i == null ? void 0 : i.findIndex((f) => f.id === e.id);
          let c = [], d, g = s ? n : o === "desc";
          if (i != null && i.length && e.getCanMultiSort() && r ? l ? d = "toggle" : d = "add" : i != null && i.length && u !== i.length - 1 ? d = "replace" : l ? d = "toggle" : d = "replace", d === "toggle" && (s || o || (d = "remove")), d === "add") {
            var p;
            c = [
              ...i,
              {
                id: e.id,
                desc: g
              }
            ], c.splice(0, c.length - ((p = t.options.maxMultiSortColCount) != null ? p : Number.MAX_SAFE_INTEGER));
          } else d === "toggle" ? c = i.map((f) => f.id === e.id ? {
            ...f,
            desc: g
          } : f) : d === "remove" ? c = i.filter((f) => f.id !== e.id) : c = [
            {
              id: e.id,
              desc: g
            }
          ];
          return c;
        });
      }, e.getFirstSortDir = () => {
        var n, r;
        return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
      }, e.getNextSortingOrder = (n) => {
        var r, o;
        const s = e.getFirstSortDir(), i = e.getIsSorted();
        return i ? i !== s && ((r = t.options.enableSortingRemoval) == null || r) && (!(n && (o = t.options.enableMultiRemove) != null) || o) ? false : i === "desc" ? "asc" : "desc" : s;
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
    },
    createTable: (e) => {
      e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
        var n, r;
        e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
      }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
    }
  }, Va = [
    ca,
    $a,
    Sa,
    ja,
    da,
    fa,
    Aa,
    Fa,
    Ba,
    Ca,
    za,
    Da,
    Ta,
    Pa,
    Ma
  ];
  function Wa(e) {
    var t, n;
    const r = [
      ...Va,
      ...(t = e._features) != null ? t : []
    ];
    let o = {
      _features: r
    };
    const s = o._features.reduce((p, f) => Object.assign(p, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(o)), {}), i = (p) => o.options.mergeOptions ? o.options.mergeOptions(s, p) : {
      ...s,
      ...p
    };
    let u = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    o._features.forEach((p) => {
      var f;
      u = (f = p.getInitialState == null ? void 0 : p.getInitialState(u)) != null ? f : u;
    });
    const c = [];
    let d = false;
    const g = {
      _features: r,
      options: {
        ...s,
        ...e
      },
      initialState: u,
      _queue: (p) => {
        c.push(p), d || (d = true, Promise.resolve().then(() => {
          for (; c.length; ) c.shift()();
          d = false;
        }).catch((f) => setTimeout(() => {
          throw f;
        })));
      },
      reset: () => {
        o.setState(o.initialState);
      },
      setOptions: (p) => {
        const f = Xe(p, o.options);
        o.options = i(f);
      },
      getState: () => o.options.state,
      setState: (p) => {
        o.options.onStateChange == null || o.options.onStateChange(p);
      },
      _getRowId: (p, f, h) => {
        var b;
        return (b = o.options.getRowId == null ? void 0 : o.options.getRowId(p, f, h)) != null ? b : `${h ? [
          h.id,
          f
        ].join(".") : f}`;
      },
      getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
      getRowModel: () => o.getPaginationRowModel(),
      getRow: (p, f) => {
        let h = (f ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[p];
        if (!h && (h = o.getCoreRowModel().rowsById[p], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: z(() => [
        o.options.defaultColumn
      ], (p) => {
        var f;
        return p = (f = p) != null ? f : {}, {
          header: (h) => {
            const b = h.header.column.columnDef;
            return b.accessorKey ? b.accessorKey : b.accessorFn ? b.id : null;
          },
          cell: (h) => {
            var b, _;
            return (b = (_ = h.renderValue()) == null || _.toString == null ? void 0 : _.toString()) != null ? b : null;
          },
          ...o._features.reduce((h, b) => Object.assign(h, b.getDefaultColumnDef == null ? void 0 : b.getDefaultColumnDef()), {}),
          ...p
        };
      }, D(e, "debugColumns")),
      _getColumnDefs: () => o.options.columns,
      getAllColumns: z(() => [
        o._getColumnDefs()
      ], (p) => {
        const f = function(h, b, _) {
          return _ === void 0 && (_ = 0), h.map((x) => {
            const C = ua(o, x, _, b), M = x;
            return C.columns = M.columns ? f(M.columns, C, _ + 1) : [], C;
          });
        };
        return f(p);
      }, D(e, "debugColumns")),
      getAllFlatColumns: z(() => [
        o.getAllColumns()
      ], (p) => p.flatMap((f) => f.getFlatColumns()), D(e, "debugColumns")),
      _getAllFlatColumnsById: z(() => [
        o.getAllFlatColumns()
      ], (p) => p.reduce((f, h) => (f[h.id] = h, f), {}), D(e, "debugColumns")),
      getAllLeafColumns: z(() => [
        o.getAllColumns(),
        o._getOrderColumnsFn()
      ], (p, f) => {
        let h = p.flatMap((b) => b.getLeafColumns());
        return f(h);
      }, D(e, "debugColumns")),
      getColumn: (p) => o._getAllFlatColumnsById()[p]
    };
    Object.assign(o, g);
    for (let p = 0; p < o._features.length; p++) {
      const f = o._features[p];
      f == null || f.createTable == null || f.createTable(o);
    }
    return o;
  }
  function Ga() {
    return (e) => z(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, r = function(o, s, i) {
        s === void 0 && (s = 0);
        const l = [];
        for (let c = 0; c < o.length; c++) {
          const d = Nn(e, e._getRowId(o[c], c, i), o[c], c, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
            var u;
            d.originalSubRows = e.options.getSubRows(o[c], c), (u = d.originalSubRows) != null && u.length && (d.subRows = r(d.originalSubRows, s + 1, d));
          }
        }
        return l;
      };
      return n.rows = r(t), n;
    }, D(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Ua(e) {
    const t = [], n = (r) => {
      var o;
      t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
    };
    return e.rows.forEach(n), {
      rows: t,
      flatRows: e.flatRows,
      rowsById: e.rowsById
    };
  }
  function qa(e, t, n) {
    return n.options.filterFromLeafRows ? Ya(e, t, n) : Ja(e, t, n);
  }
  function Ya(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(u, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let p = 0; p < u.length; p++) {
        var g;
        let f = u[p];
        const h = Nn(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
        if (h.columnFilters = f.columnFilters, (g = f.subRows) != null && g.length && c < i) {
          if (h.subRows = l(f.subRows, c + 1), f = h, t(f) && !h.subRows.length) {
            d.push(f), s[f.id] = f, o.push(f);
            continue;
          }
          if (t(f) || h.subRows.length) {
            d.push(f), s[f.id] = f, o.push(f);
            continue;
          }
        } else f = h, t(f) && (d.push(f), s[f.id] = f, o.push(f));
      }
      return d;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Ja(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(u, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let p = 0; p < u.length; p++) {
        let f = u[p];
        if (t(f)) {
          var g;
          if ((g = f.subRows) != null && g.length && c < i) {
            const b = Nn(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
            b.subRows = l(f.subRows, c + 1), f = b;
          }
          d.push(f), o.push(f), s[f.id] = f;
        }
      }
      return d;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Ka() {
    return (e) => z(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, r) => {
      if (!t.rows.length || !(n != null && n.length) && !r) {
        for (let p = 0; p < t.flatRows.length; p++) t.flatRows[p].columnFilters = {}, t.flatRows[p].columnFiltersMeta = {};
        return t;
      }
      const o = [], s = [];
      (n ?? []).forEach((p) => {
        var f;
        const h = e.getColumn(p.id);
        if (!h) return;
        const b = h.getFilterFn();
        b && o.push({
          id: p.id,
          filterFn: b,
          resolvedValue: (f = b.resolveFilterValue == null ? void 0 : b.resolveFilterValue(p.value)) != null ? f : p.value
        });
      });
      const i = (n ?? []).map((p) => p.id), l = e.getGlobalFilterFn(), u = e.getAllLeafColumns().filter((p) => p.getCanGlobalFilter());
      r && l && u.length && (i.push("__global__"), u.forEach((p) => {
        var f;
        s.push({
          id: p.id,
          filterFn: l,
          resolvedValue: (f = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(r)) != null ? f : r
        });
      }));
      let c, d;
      for (let p = 0; p < t.flatRows.length; p++) {
        const f = t.flatRows[p];
        if (f.columnFilters = {}, o.length) for (let h = 0; h < o.length; h++) {
          c = o[h];
          const b = c.id;
          f.columnFilters[b] = c.filterFn(f, b, c.resolvedValue, (_) => {
            f.columnFiltersMeta[b] = _;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            d = s[h];
            const b = d.id;
            if (d.filterFn(f, b, d.resolvedValue, (_) => {
              f.columnFiltersMeta[b] = _;
            })) {
              f.columnFilters.__global__ = true;
              break;
            }
          }
          f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
        }
      }
      const g = (p) => {
        for (let f = 0; f < i.length; f++) if (p.columnFilters[i[f]] === false) return false;
        return true;
      };
      return qa(t.rows, g, e);
    }, D(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Xa(e) {
    return (t) => z(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, r) => {
      if (!r.rows.length) return r;
      const { pageSize: o, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: u } = r;
      const c = o * s, d = c + o;
      i = i.slice(c, d);
      let g;
      t.options.paginateExpandedRows ? g = {
        rows: i,
        flatRows: l,
        rowsById: u
      } : g = Ua({
        rows: i,
        flatRows: l,
        rowsById: u
      }), g.flatRows = [];
      const p = (f) => {
        g.flatRows.push(f), f.subRows.length && f.subRows.forEach(p);
      };
      return g.rows.forEach(p), g;
    }, D(t.options, "debugTable"));
  }
  function Qa() {
    return (e) => z(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const r = e.getState().sorting, o = [], s = r.filter((u) => {
        var c;
        return (c = e.getColumn(u.id)) == null ? void 0 : c.getCanSort();
      }), i = {};
      s.forEach((u) => {
        const c = e.getColumn(u.id);
        c && (i[u.id] = {
          sortUndefined: c.columnDef.sortUndefined,
          invertSorting: c.columnDef.invertSorting,
          sortingFn: c.getSortingFn()
        });
      });
      const l = (u) => {
        const c = u.map((d) => ({
          ...d
        }));
        return c.sort((d, g) => {
          for (let f = 0; f < s.length; f += 1) {
            var p;
            const h = s[f], b = i[h.id], _ = b.sortUndefined, x = (p = h == null ? void 0 : h.desc) != null ? p : false;
            let C = 0;
            if (_) {
              const M = d.getValue(h.id), A = g.getValue(h.id), F = M === void 0, R = A === void 0;
              if (F || R) {
                if (_ === "first") return F ? -1 : 1;
                if (_ === "last") return F ? 1 : -1;
                C = F && R ? 0 : F ? _ : -_;
              }
            }
            if (C === 0 && (C = b.sortingFn(d, g, h.id)), C !== 0) return x && (C *= -1), b.invertSorting && (C *= -1), C;
          }
          return d.index - g.index;
        }), c.forEach((d) => {
          var g;
          o.push(d), (g = d.subRows) != null && g.length && (d.subRows = l(d.subRows));
        }), c;
      };
      return {
        rows: l(n.rows),
        flatRows: o,
        rowsById: n.rowsById
      };
    }, D(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function vt(e, t) {
    return e ? Za(e) ? y.createElement(e, t) : e : null;
  }
  function Za(e) {
    return eu(e) || typeof e == "function" || tu(e);
  }
  function eu(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function tu(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function nu(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Wa(t)
    })), [r, o] = y.useState(() => n.current.initialState);
    return n.current.setOptions((s) => ({
      ...s,
      ...e,
      state: {
        ...r,
        ...e.state
      },
      onStateChange: (i) => {
        o(i), e.onStateChange == null || e.onStateChange(i);
      }
    })), n.current;
  }
  function lt(e, t, n) {
    let r = n.initialDeps ?? [], o, s = true;
    function i() {
      var l, u, c;
      let d;
      n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now());
      const g = e();
      if (!(g.length !== r.length || g.some((h, b) => r[b] !== h))) return o;
      r = g;
      let f;
      if (n.key && ((u = n.debug) != null && u.call(n)) && (f = Date.now()), o = t(...g), n.key && ((c = n.debug) != null && c.call(n))) {
        const h = Math.round((Date.now() - d) * 100) / 100, b = Math.round((Date.now() - f) * 100) / 100, _ = b / 16, x = (C, M) => {
          for (C = String(C); C.length < M; ) C = " " + C;
          return C;
        };
        console.info(`%c\u23F1 ${x(b, 5)} /${x(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(o), s = false, o;
    }
    return i.updateDeps = (l) => {
      r = l;
    }, i;
  }
  function Dr(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const ru = (e, t) => Math.abs(e - t) < 1.01, ou = (e, t, n) => {
    let r;
    return function(...o) {
      e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
    };
  }, Tr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, su = (e) => e, iu = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let o = t; o <= n; o++) r.push(o);
    return r;
  }, lu = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    const o = (i) => {
      const { width: l, height: u } = i;
      t({
        width: Math.round(l),
        height: Math.round(u)
      });
    };
    if (o(Tr(n)), !r.ResizeObserver) return () => {
    };
    const s = new r.ResizeObserver((i) => {
      const l = () => {
        const u = i[0];
        if (u == null ? void 0 : u.borderBoxSize) {
          const c = u.borderBoxSize[0];
          if (c) {
            o({
              width: c.inlineSize,
              height: c.blockSize
            });
            return;
          }
        }
        o(Tr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, Pr = {
    passive: true
  }, Er = typeof window > "u" ? true : "onscrollend" in window, au = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    let o = 0;
    const s = e.options.useScrollendEvent && Er ? () => {
    } : ou(r, () => {
      t(o, false);
    }, e.options.isScrollingResetDelay), i = (d) => () => {
      const { horizontal: g, isRtl: p } = e.options;
      o = g ? n.scrollLeft * (p && -1 || 1) : n.scrollTop, s(), t(o, d);
    }, l = i(true), u = i(false);
    n.addEventListener("scroll", l, Pr);
    const c = e.options.useScrollendEvent && Er;
    return c && n.addEventListener("scrollend", u, Pr), () => {
      n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", u);
    };
  }, uu = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const r = t.borderBoxSize[0];
      if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, cu = (e, { adjustments: t = 0, behavior: n }, r) => {
    var o, s;
    const i = e + t;
    (s = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || s.call(o, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class du {
    constructor(t) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let n = null;
        const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((o) => {
          o.forEach((s) => {
            const i = () => {
              this._measureElement(s.target, s);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
          });
        }));
        return {
          disconnect: () => {
            var o;
            (o = r()) == null || o.disconnect(), n = null;
          },
          observe: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.observe(o, {
              box: "border-box"
            });
          },
          unobserve: (o) => {
            var s;
            return (s = r()) == null ? void 0 : s.unobserve(o);
          }
        };
      })(), this.range = null, this.setOptions = (n) => {
        Object.entries(n).forEach(([r, o]) => {
          typeof o > "u" && delete n[r];
        }), this.options = {
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: su,
          rangeExtractor: iu,
          onChange: () => {
          },
          measureElement: uu,
          initialRect: {
            width: 0,
            height: 0
          },
          scrollMargin: 0,
          gap: 0,
          indexAttribute: "data-index",
          initialMeasurementsCache: [],
          lanes: 1,
          isScrollingResetDelay: 150,
          enabled: true,
          isRtl: false,
          useScrollendEvent: false,
          useAnimationFrameWithResizeObserver: false,
          ...n
        };
      }, this.notify = (n) => {
        var r, o;
        (o = (r = this.options).onChange) == null || o.call(r, this, n);
      }, this.maybeNotify = lt(() => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]), (n) => {
        this.notify(n);
      }, {
        key: false,
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }), this.cleanup = () => {
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
          })), this.unsubs.push(this.options.observeElementOffset(this, (o, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < o ? "forward" : "backward" : null, this.scrollOffset = o, this.isScrolling = s, this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, r) => {
        const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        for (let i = r - 1; i >= 0; i--) {
          const l = n[i];
          if (o.has(l.lane)) continue;
          const u = s.get(l.lane);
          if (u == null || l.end > u.end ? s.set(l.lane, l) : l.end < u.end && o.set(l.lane, true), o.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = lt(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ], (n, r, o, s, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: o,
        getItemKey: s,
        enabled: i,
        lanes: l
      }), {
        key: false
      }), this.getMeasurements = lt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: s, enabled: i, lanes: l }, u) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const p of this.laneAssignments.keys()) p >= n && this.laneAssignments.delete(p);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((p) => {
          this.itemSizeCache.set(p.key, p.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const d = this.measurementsCache.slice(0, c), g = new Array(l).fill(void 0);
        for (let p = 0; p < c; p++) {
          const f = d[p];
          f && (g[f.lane] = p);
        }
        for (let p = c; p < n; p++) {
          const f = s(p), h = this.laneAssignments.get(p);
          let b, _;
          if (h !== void 0 && this.options.lanes > 1) {
            b = h;
            const A = g[b], F = A !== void 0 ? d[A] : void 0;
            _ = F ? F.end + this.options.gap : r + o;
          } else {
            const A = this.options.lanes === 1 ? d[p - 1] : this.getFurthestMeasurement(d, p);
            _ = A ? A.end + this.options.gap : r + o, b = A ? A.lane : p % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(p, b);
          }
          const x = u.get(f), C = typeof x == "number" ? x : this.options.estimateSize(p), M = _ + C;
          d[p] = {
            index: p,
            start: _,
            size: C,
            end: M,
            key: f,
            lane: b
          }, g[b] = p;
        }
        return this.measurementsCache = d, d;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = lt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, r, o, s) => this.range = n.length > 0 && r > 0 ? fu({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = lt(() => {
        let n = null, r = null;
        const o = this.calculateRange();
        return o && (n = o.startIndex, r = o.endIndex), this.maybeNotify.updateDeps([
          this.isScrolling,
          n,
          r
        ]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      }, (n, r, o, s, i) => s === null || i === null ? [] : n({
        startIndex: s,
        endIndex: i,
        overscan: r,
        count: o
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (n) => {
        const r = this.options.indexAttribute, o = n.getAttribute(r);
        return o ? parseInt(o, 10) : (console.warn(`Missing attribute name '${r}={index}' on measured element.`), -1);
      }, this._measureElement = (n, r) => {
        const o = this.indexFromElement(n), s = this.measurementsCache[o];
        if (!s) return;
        const i = s.key, l = this.elementsCache.get(i);
        l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(i, n)), n.isConnected && this.resizeItem(o, this.options.measureElement(n, r, this));
      }, this.resizeItem = (n, r) => {
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.itemSizeCache.get(o.key) ?? o.size, i = r - s;
        i !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, i, this) : o.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += i,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, r)), this.notify(false));
      }, this.measureElement = (n) => {
        if (!n) {
          this.elementsCache.forEach((r, o) => {
            r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(o));
          });
          return;
        }
        this._measureElement(n, void 0);
      }, this.getVirtualItems = lt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, r) => {
        const o = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], u = r[l];
          o.push(u);
        }
        return o;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const r = this.getMeasurements();
        if (r.length !== 0) return Dr(r[po(0, r.length - 1, (o) => Dr(r[o]).start, n)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          const n = this.scrollElement.document.documentElement;
          return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (n, r, o = 0) => {
        if (!this.scrollElement) return 0;
        const s = this.getSize(), i = this.getScrollOffset();
        r === "auto" && (r = n >= i + s ? "end" : "start"), r === "center" ? n += (o - s) / 2 : r === "end" && (n -= s);
        const l = this.getMaxScrollOffset();
        return Math.max(Math.min(l, n), 0);
      }, this.getOffsetForIndex = (n, r = "auto") => {
        n = Math.max(0, Math.min(n, this.options.count - 1));
        const o = this.measurementsCache[n];
        if (!o) return;
        const s = this.getSize(), i = this.getScrollOffset();
        if (r === "auto") if (o.end >= i + s - this.options.scrollPaddingEnd) r = "end";
        else if (o.start <= i + this.options.scrollPaddingStart) r = "start";
        else return [
          i,
          r
        ];
        if (r === "end" && n === this.options.count - 1) return [
          this.getMaxScrollOffset(),
          r
        ];
        const l = r === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(l, r, o.size),
          r
        ];
      }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
          adjustments: void 0,
          behavior: o
        });
      }, this.scrollToIndex = (n, { align: r = "auto", behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
        let s = 0;
        const i = 10, l = (c) => {
          if (!this.targetWindow) return;
          const d = this.getOffsetForIndex(n, c);
          if (!d) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [g, p] = d;
          this._scrollToOffset(g, {
            adjustments: void 0,
            behavior: o
          }), this.targetWindow.requestAnimationFrame(() => {
            const f = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), b = this.getOffsetForIndex(n, p);
              if (!b) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              ru(b[0], h) || u(p);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(f) : f();
          });
        }, u = (c) => {
          this.targetWindow && this.currentScrollToIndex === n && (s++, s < i ? this.targetWindow.requestAnimationFrame(() => l(c)) : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
        };
        l(r);
      }, this.scrollBy = (n, { behavior: r } = {}) => {
        r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + n, {
          adjustments: void 0,
          behavior: r
        });
      }, this.getTotalSize = () => {
        var n;
        const r = this.getMeasurements();
        let o;
        if (r.length === 0) o = this.options.paddingStart;
        else if (this.options.lanes === 1) o = ((n = r[r.length - 1]) == null ? void 0 : n.end) ?? 0;
        else {
          const s = Array(this.options.lanes).fill(null);
          let i = r.length - 1;
          for (; i >= 0 && s.some((l) => l === null); ) {
            const l = r[i];
            s[l.lane] === null && (s[l.lane] = l.end), i--;
          }
          o = Math.max(...s.filter((l) => l !== null));
        }
        return Math.max(o - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (n, { adjustments: r, behavior: o }) => {
        this.options.scrollToFn(n, {
          behavior: o,
          adjustments: r
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
      }, this.setOptions(t);
    }
  }
  const po = (e, t, n, r) => {
    for (; e <= t; ) {
      const o = (e + t) / 2 | 0, s = n(o);
      if (s < r) e = o + 1;
      else if (s > r) t = o - 1;
      else return o;
    }
    return e > 0 ? e - 1 : 0;
  };
  function fu({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
    const o = e.length - 1, s = (u) => e[u].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: o
    };
    let i = po(0, o, s, n), l = i;
    if (r === 1) for (; l < o && e[l].end < n + t; ) l++;
    else if (r > 1) {
      const u = Array(r).fill(0);
      for (; l < o && u.some((d) => d < n + t); ) {
        const d = e[l];
        u[d.lane] = d.end, l++;
      }
      const c = Array(r).fill(n + t);
      for (; i >= 0 && c.some((d) => d >= n); ) {
        const d = e[i];
        c[d.lane] = d.start, i--;
      }
      i = Math.max(0, i - i % r), l = Math.min(o, l + (r - 1 - l % r));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const kr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function pu({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], r = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? Wo.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [o] = y.useState(() => new du(r));
    return o.setOptions(r), kr(() => o._didMount(), []), kr(() => o._willUpdate()), o;
  }
  function gu(e) {
    return pu({
      observeElementRect: lu,
      observeElementOffset: au,
      scrollToFn: cu,
      ...e
    });
  }
  function hu(e, t) {
    var _a2, _b;
    let n = false, r = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (r = Zr(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          r = kn(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          r = Cn(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          r = eo(String(r), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: r,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Gi(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const u of t.cellStyle) if (u.logic && Cl(u.logic, s)) {
        if (u.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const c = tt(u.backgroundColor);
          c ? i.background = c : i.backgroundColor = u.backgroundColor;
        }
        if (u.textColor && !("color" in l) && !("background" in l)) {
          const c = tt(u.textColor);
          c ? (l.background = c, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = u.textColor;
        }
        if (u.fontWeight && !l.fontWeight && (l.fontWeight = u.fontWeight), u.fontStyle && !l.fontStyle && (l.fontStyle = u.fontStyle), o) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: r,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function Nr({ value: e, config: t, valueSize: n }) {
    const { displayValue: r, textSx: o, bgSx: s, isTruncated: i } = y.useMemo(() => hu(e, t), [
      e,
      t
    ]);
    return a.jsxs(P, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        padding: "0 8px",
        ...s
      },
      children: [
        a.jsx(S, {
          variant: "body2",
          component: P,
          title: r,
          sx: {
            flex: 1,
            minWidth: 0,
            lineHeight: "inherit",
            ...n && {
              fontSize: n
            },
            ...o
          },
          dangerouslySetInnerHTML: {
            __html: r ?? ""
          }
        }),
        i && a.jsx(Ge, {
          label: "JSON",
          size: "small",
          sx: {
            height: 18,
            fontSize: "0.65rem",
            flexShrink: 0,
            opacity: 0.7
          }
        })
      ]
    });
  }
  function Or(e) {
    return typeof e == "function" ? e() : e;
  }
  function at(e, t, n = true) {
    const [r, o] = y.useState(() => {
      if (!n) return Or(t);
      try {
        const i = localStorage.getItem(e);
        if (i !== null) return JSON.parse(i);
      } catch {
      }
      return Or(t);
    }), s = y.useRef(n);
    return y.useEffect(() => {
      const i = s.current;
      if (s.current = n, !!n) {
        if (!i) {
          try {
            const l = localStorage.getItem(e);
            l !== null && o(JSON.parse(l));
          } catch {
          }
          return;
        }
        try {
          localStorage.setItem(e, JSON.stringify(r));
        } catch {
        }
      }
    }, [
      e,
      r,
      n
    ]), [
      r,
      o
    ];
  }
  function Lr(e) {
    const t = [
      10,
      25,
      50,
      100
    ];
    if (!e) return t;
    const n = e.split(",").map((r) => parseInt(r.trim(), 10)).filter((r) => !isNaN(r) && r > 0);
    return n.length > 0 ? [
      ...new Set(n)
    ].sort((r, o) => r - o) : t;
  }
  function mu(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: u, tableSorting: c, tableQuickFilter: d, gridRowsLength: g } = e, p = y.useRef([]), f = y.useRef([]), h = y.useRef(""), b = y.useRef(c), _ = y.useRef(u), x = y.useRef(d), [C, M] = at(`jtc_sorting_${t}`, [], c);
    y.useEffect(() => {
      c ? !b.current && p.current.length > 0 && M(p.current) : M((E) => (E.length > 0 && (p.current = E), [])), b.current = c;
    }, [
      c,
      M
    ]);
    const [A, F] = at(`jtc_filters_${t}`, [], u);
    y.useEffect(() => {
      u ? !_.current && f.current.length > 0 && F(f.current) : F((E) => (E.length > 0 && (f.current = E), [])), _.current = u;
    }, [
      u,
      F
    ]);
    const [R, $] = at(`jtc_global_filter_${t}`, "", d);
    y.useEffect(() => {
      d ? !x.current && h.current && $(h.current) : $((E) => (E && (h.current = E), "")), x.current = d;
    }, [
      d,
      $
    ]);
    const [j, O] = y.useState({}), [L, W] = at(`jtc_col_sizes_${t}`, () => {
      const E = {};
      return n.forEach((k) => {
        k.width && (E[k.path] = k.width);
      }), o === true && (E.__select__ = 48), E;
    }, !r), ie = y.useMemo(() => Number(s) || 25, [
      s
    ]), [ue, le] = at(`jtc_pagination_${t}`, {
      pageIndex: 0,
      pageSize: ie
    });
    y.useEffect(() => {
      le((E) => E.pageSize === ie ? E : {
        pageIndex: 0,
        pageSize: ie
      });
    }, [
      ie,
      le
    ]);
    const ne = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(g, 1)
    } : ue, [
      l,
      g,
      ue
    ]), ce = y.useMemo(() => Lr(i), [
      i
    ]), [ee, v] = at(`jtc_visibility_${t}`, {}), T = y.useCallback(() => {
      v({});
    }, [
      v
    ]);
    return {
      sorting: C,
      columnFilters: A,
      globalFilter: R,
      rowSelection: j,
      columnSizing: L,
      pagination: ue,
      effectivePagination: ne,
      columnVisibility: ee,
      setSorting: M,
      setColumnFilters: F,
      setGlobalFilter: $,
      setRowSelection: O,
      setColumnSizing: W,
      setPagination: le,
      setColumnVisibility: v,
      pageSizeOptions: ce,
      parsePageSizeOptions: Lr,
      showAllColumns: T
    };
  }
  const yu = [
    {
      value: "contains",
      label: "json_table_filter_contains"
    },
    {
      value: "startsWith",
      label: "json_table_filter_starts_with"
    },
    {
      value: "endsWith",
      label: "json_table_filter_ends_with"
    },
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], bu = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_greater_than"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_greater_than_or_equal"
    },
    {
      value: "lessThan",
      label: "json_table_filter_less_than"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_less_than_or_equal"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], _u = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "greaterThan",
      label: "json_table_filter_after"
    },
    {
      value: "greaterThanOrEqual",
      label: "json_table_filter_on_or_after"
    },
    {
      value: "lessThan",
      label: "json_table_filter_before"
    },
    {
      value: "lessThanOrEqual",
      label: "json_table_filter_on_or_before"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], xu = [
    {
      value: "equals",
      label: "json_table_filter_equals"
    },
    {
      value: "notEquals",
      label: "json_table_filter_not_equals"
    },
    {
      value: "isEmpty",
      label: "json_table_filter_is_empty"
    },
    {
      value: "isNotEmpty",
      label: "json_table_filter_is_not_empty"
    }
  ], vu = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function Cu(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function wu(e) {
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
  function Su({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: s }) {
    const i = zn(), l = ms(i.breakpoints.down("sm")), u = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), c = y.useMemo(() => {
      switch (u) {
        case "number":
          return bu;
        case "date":
          return _u;
        case "boolean":
          return xu;
        default:
          return yu;
      }
    }, [
      u
    ]), d = y.useMemo(() => {
      const j = Cu(u);
      if (r == null) return {
        operator: j,
        value: ""
      };
      if (typeof r == "object" && r !== null && "operator" in r) {
        const O = r;
        return c.some((W) => W.value === O.operator) ? O : {
          operator: j,
          value: O.value
        };
      }
      return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? {
        operator: j,
        value: r
      } : {
        operator: j,
        value: JSON.stringify(r)
      };
    }, [
      r,
      u,
      c
    ]), [g, p] = y.useState(d.operator), [f, h] = y.useState(typeof d.value == "boolean" ? String(d.value) : d.value), b = y.useMemo(() => r != null, [
      r
    ]);
    y.useEffect(() => {
      e && (p(d.operator), h(typeof d.value == "boolean" ? String(d.value) : d.value));
    }, [
      d,
      e
    ]);
    const _ = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(g), x = y.useCallback(() => {
      if (!_) {
        n({
          operator: g,
          value: ""
        });
        return;
      }
      if (u === "boolean") {
        n({
          operator: g,
          value: f === "true"
        });
        return;
      }
      const j = typeof f == "string" ? f.trim() : String(f).trim();
      if (j === "") n(void 0);
      else {
        const O = u === "number" ? Number(j) : j;
        n({
          operator: g,
          value: O
        });
      }
    }, [
      _,
      u,
      g,
      f,
      n
    ]), C = y.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), M = y.useCallback((j) => {
      j.key === "Enter" && !j.shiftKey && (j.preventDefault(), x());
    }, [
      x
    ]), A = y.useCallback((j) => {
      p(j), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(j) || u !== "boolean" && (f === "true" || f === "false")) && h("");
    }, [
      f,
      u
    ]), F = o.split(".").pop() || o, R = `filter-dialog-title-${o}`, $ = `filter-dialog-description-${o}`;
    return a.jsxs(Tn, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": R,
      "aria-describedby": $,
      children: [
        a.jsx(Pn, {
          id: R,
          children: a.jsxs(P, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              m.t("json_table_filter_for_column").replace("{column}", F),
              b && a.jsx(Ge, {
                label: m.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        a.jsxs(En, {
          children: [
            a.jsx(S, {
              id: $,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: m.t("json_table_filter_dialog_description")
            }),
            a.jsxs(P, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: M,
              children: [
                a.jsxs(Be, {
                  fullWidth: true,
                  children: [
                    a.jsx(Ve, {
                      id: `filter-operator-label-${o}`,
                      children: m.t("json_table_filter_operator")
                    }),
                    a.jsx(Ee, {
                      value: g,
                      label: m.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${o}`,
                      onChange: (j) => A(j.target.value),
                      children: c.map((j) => a.jsx(U, {
                        value: j.value,
                        children: m.t(j.label)
                      }, j.value))
                    })
                  ]
                }),
                _ && u === "boolean" && a.jsxs(Be, {
                  fullWidth: true,
                  children: [
                    a.jsx(Ve, {
                      id: `filter-value-label-${o}`,
                      children: m.t("json_table_filter_value")
                    }),
                    a.jsx(Ee, {
                      value: f === "true" || f === "false" ? f : "",
                      label: m.t("json_table_filter_value"),
                      labelId: `filter-value-label-${o}`,
                      onChange: (j) => h(j.target.value),
                      children: vu.map((j) => a.jsx(U, {
                        value: j.value,
                        children: m.t(j.label)
                      }, j.value))
                    })
                  ]
                }),
                _ && u === "date" && a.jsx(oe, {
                  label: m.t("json_table_filter_value"),
                  value: wu(f),
                  onChange: (j) => h(j.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                _ && u === "number" && a.jsx(oe, {
                  label: m.t("json_table_filter_value"),
                  value: f,
                  onChange: (j) => h(j.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                _ && u === "string" && a.jsx(oe, {
                  label: m.t("json_table_filter_value"),
                  value: f,
                  onChange: (j) => h(j.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !_ && a.jsx(S, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    fontStyle: "italic"
                  },
                  children: m.t("json_table_filter_no_value_needed")
                })
              ]
            })
          ]
        }),
        a.jsxs(Dn, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            b && a.jsx(ke, {
              onClick: C,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: m.t("json_table_filter_clear")
            }),
            a.jsx(ke, {
              onClick: t,
              children: m.t("cancel")
            }),
            a.jsx(ke, {
              variant: "contained",
              onClick: x,
              disabled: _ && u === "boolean" && f !== "true" && f !== "false",
              children: m.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function ju({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: u, onShowAllColumns: c, hasHiddenColumns: d }) {
    var _a2, _b, _c, _d, _e, _f;
    const [g, p] = y.useState(false), f = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, h = s && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, b = ((_c = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c.call(r)) === true, _ = i != null;
    if (!(f || h || b)) return null;
    const C = () => {
      r && l([
        {
          id: r.id,
          desc: false
        }
      ]), n();
    }, M = () => {
      r && l([
        {
          id: r.id,
          desc: true
        }
      ]), n();
    }, A = () => {
      r && u(r.id), n();
    }, F = () => {
      p(true);
    }, R = () => {
      p(false);
    }, $ = (W) => {
      r == null ? void 0 : r.setFilterValue(W), p(false), n();
    }, j = () => {
      r == null ? void 0 : r.setFilterValue(void 0), n();
    }, O = () => {
      var _a3;
      (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
    }, L = () => {
      c == null ? void 0 : c(), n();
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(Go, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            f && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(U, {
                  onClick: C,
                  children: [
                    a.jsx(gt, {
                      children: a.jsx(Jr, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(S, {
                      variant: "body2",
                      children: m.t("json_table_sort_asc")
                    })
                  ]
                }),
                a.jsxs(U, {
                  onClick: M,
                  children: [
                    a.jsx(gt, {
                      children: a.jsx(Yr, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(S, {
                      variant: "body2",
                      children: m.t("json_table_sort_desc")
                    })
                  ]
                }),
                o && a.jsx(U, {
                  onClick: A,
                  children: a.jsx(S, {
                    variant: "body2",
                    children: m.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            f && h && a.jsx(_n, {}),
            h && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(U, {
                  onClick: F,
                  children: [
                    a.jsx(gt, {
                      children: a.jsx(Di, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(S, {
                      variant: "body2",
                      children: m.t("json_table_set_filter")
                    })
                  ]
                }),
                _ && a.jsxs(U, {
                  onClick: j,
                  children: [
                    a.jsx(gt, {
                      children: a.jsx(ns, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(S, {
                      variant: "body2",
                      children: m.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (f || h) && b && a.jsx(_n, {}),
            b && a.jsxs(U, {
              onClick: O,
              children: [
                a.jsx(gt, {
                  children: a.jsx(Xr, {
                    fontSize: "small"
                  })
                }),
                a.jsx(S, {
                  variant: "body2",
                  children: m.t("json_table_hide_column")
                })
              ]
            }),
            d && c && a.jsx(U, {
              onClick: L,
              children: a.jsx(S, {
                variant: "body2",
                children: m.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && r && g && a.jsx(Su, {
          open: g,
          onClose: R,
          onApply: $,
          currentValue: (_d = r.getFilterValue) == null ? void 0 : _d.call(r),
          columnId: r.id,
          columnType: (_f = (_e = r.columnDef) == null ? void 0 : _e.meta) == null ? void 0 : _f.columnType
        })
      ]
    });
  }
  const Ru = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Mu = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Iu = (e) => {
    const { children: t, value: n, ...r } = e;
    return a.jsx(U, {
      ...r,
      value: n,
      children: a.jsx(S, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, $u = () => {
    const e = y.useContext(qo), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = Yo("oid"), s = is("oid"), i = zn(), l = t == null ? void 0 : t.type, u = l === "string" || l === "mixed" || l === "json", c = y.useMemo(() => {
      if (s == null) return [];
      let w;
      if (typeof s == "string") try {
        w = JSON.parse(s);
      } catch {
        return [];
      }
      else w = s;
      return Array.isArray(w) ? w : typeof w == "object" && w !== null ? [
        w
      ] : [];
    }, [
      s
    ]), d = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: g, rows: p, meta: f } = na(c, d), h = y.useMemo(() => {
      const w = n.data.tableMaxDepth || 10;
      return f.maxDepth > w ? {
        actual: f.maxDepth,
        configured: w
      } : null;
    }, [
      f.maxDepth,
      n.data.tableMaxDepth
    ]), b = y.useMemo(() => Qr(n.data.columnConfig), [
      n.data.columnConfig
    ]), _ = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || Ru[_] || 52, C = Number(n.data.tableHeaderHeight) || Mu[_] || 56, M = p, A = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, F = y.useMemo(() => Tl({
      columnConfig: b,
      analysisColumns: g,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: A,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (w, I) => a.jsx(Nr, {
        value: w,
        config: I,
        valueSize: o.valueSize
      }),
      renderAutoDetectedCell: (w) => a.jsx(Nr, {
        value: w,
        valueSize: o.valueSize
      }),
      renderSelectionHeader: (w) => a.jsx(Mt, {
        size: "small",
        indeterminate: w.getIsSomePageRowsSelected(),
        checked: w.getIsAllPageRowsSelected(),
        onChange: w.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (w) => a.jsx(Mt, {
        size: "small",
        checked: w.getIsSelected(),
        onChange: w.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      b,
      g,
      n.data.tableSorting,
      A,
      n.data.tableRowSelection,
      n.data.tableHiding,
      o.valueSize
    ]), R = y.useMemo(() => {
      var _a2;
      const w = /* @__PURE__ */ new Map();
      for (const I of b) ((_a2 = I.format) == null ? void 0 : _a2.type) === "date" && w.set(I.path, {
        dateFormat: I.format.dateFormat,
        dateInputFormat: I.format.dateInputFormat
      });
      return w;
    }, [
      b
    ]), $ = y.useCallback((w, I, N) => {
      const J = typeof N == "string" ? N.toLowerCase() : typeof N == "number" || typeof N == "boolean" ? String(N).toLowerCase() : "";
      if (!J) return true;
      const Q = w.getValue(I);
      if (Q == null) return false;
      const _e = R.get(I);
      return _e && kn(Q, _e.dateFormat, _e.dateInputFormat).toLowerCase().includes(J) ? true : (typeof Q == "string" ? Q : typeof Q == "number" || typeof Q == "boolean" ? String(Q) : "").toLowerCase().includes(J);
    }, [
      R
    ]), j = n.data.tableAutoSize === true, { sorting: O, columnFilters: L, globalFilter: W, rowSelection: ie, columnSizing: ue, pagination: le, effectivePagination: ne, columnVisibility: ce, setSorting: ee, setColumnFilters: v, setGlobalFilter: T, setRowSelection: E, setColumnSizing: k, setPagination: re, setColumnVisibility: G, pageSizeOptions: Ne, showAllColumns: Oe } = mu({
      widgetId: r,
      columnConfig: b,
      tableAutoSize: j,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: A,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: M.length
    }), ge = nu({
      data: M,
      columns: F,
      getCoreRowModel: Ga(),
      getSortedRowModel: Qa(),
      getFilteredRowModel: Ka(),
      getPaginationRowModel: Xa(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: $,
      filterFns: Al,
      columnResizeMode: "onChange",
      enableColumnResizing: !j,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: O,
        columnFilters: L,
        globalFilter: W,
        pagination: ne,
        rowSelection: ie,
        columnSizing: ue,
        columnVisibility: ce
      },
      onSortingChange: ee,
      onColumnFiltersChange: v,
      onGlobalFilterChange: T,
      onPaginationChange: n.data.tablePagination !== false ? re : void 0,
      onRowSelectionChange: E,
      onColumnSizingChange: k,
      onColumnVisibilityChange: G,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: A,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), qe = y.useRef(null), De = y.useRef(null), [q, dt] = y.useState({}), [ot, be] = y.useState(null), Te = y.useRef(null), [Ae, go] = y.useState(void 0), [ho, mo] = y.useState(void 0), yo = y.useCallback((w, I) => {
      var _a2;
      Te.current = w;
      const N = w.id, J = O.find((_e) => _e.id === N), Q = (_a2 = L.find((_e) => _e.id === N)) == null ? void 0 : _a2.value;
      go(J), mo(Q), be(I);
    }, [
      O,
      L
    ]), bo = y.useCallback(() => {
      be(null);
    }, []);
    y.useEffect(() => {
      if (!j) return;
      const w = De.current;
      if (!w) return;
      const I = new ResizeObserver(() => {
        const N = w.querySelector("tr[data-row-index]");
        if (!N) return;
        const J = N.querySelectorAll("td"), Q = ge.getHeaderGroups()[0];
        if (!Q || J.length !== Q.headers.length) return;
        const _e = {};
        Q.headers.forEach((Tt, Ze) => {
          const Zn = J[Ze];
          Zn && (_e[Tt.id] = Zn.getBoundingClientRect().width);
        }), dt(_e);
      });
      return I.observe(w), () => I.disconnect();
    }, [
      j,
      ge
    ]);
    const _o = y.useMemo(() => {
      const w = {
        tableLayout: j ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) w["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const I = n.data.horizontalCellBorderWidth ?? 1, N = Pt(n.data.horizontalCellBorderColor);
        w["& .MuiTableCell-root"] = {
          ...w["& .MuiTableCell-root"],
          borderBottom: `${I}px solid`,
          borderBottomColor: N || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const I = n.data.verticalCellBorderWidth ?? 1, N = Pt(n.data.verticalCellBorderColor);
        w["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${I}px solid`,
          borderRightColor: N || "divider"
        };
      }
      return w;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      j
    ]), ft = n.data.tableHeaderBgColor, st = n.data.tableHeaderTextColor, it = n.data.tableHeaderFontSize, xo = y.useMemo(() => ({
      height: C,
      padding: 0,
      whiteSpace: "nowrap",
      ...st && {
        color: st
      },
      ...it && {
        fontSize: `${it}px`
      }
    }), [
      C,
      st,
      it
    ]), Bn = y.useMemo(() => ({
      ...st && {
        color: st
      },
      ...it && {
        fontSize: `${it}px`
      }
    }), [
      st,
      it
    ]), Vn = n.data.noCard === true, on = n.data.headerBorderWidth ?? 0, Wn = Pt(n.data.headerBorderColor), vo = y.useMemo(() => {
      const w = n.data.tableHeaderElevation ?? 6, I = Vn ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: w > 0 ? i.shadows[w] : "none"
      };
      on > 0 && (I["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${on}px`,
        backgroundColor: Wn || i.palette.divider,
        pointerEvents: "none"
      });
      const N = ft ? tt(ft) : null;
      return N ? {
        ...I,
        background: N
      } : ft ? {
        ...I,
        backgroundColor: ft
      } : I;
    }, [
      Vn,
      ft,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      on,
      Wn
    ]), Co = y.useMemo(() => {
      const w = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, I = n.data.borderWidth, N = n.data.borderStyle || "solid", J = Pt(n.data.borderColor), Q = n.data.borderRadius;
      return I && I > 0 && (w.border = `${I}px ${N}`, w.borderColor = J || "divider"), Q && (w.borderRadius = Q), w;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), wo = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), So = y.useCallback((w) => j ? q[w.id] ?? "auto" : w.getSize(), [
      j,
      q
    ]), Gn = y.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), Ft = n.data.evenRowColor || null, zt = n.data.oddRowColor || null, Un = Ft ? tt(Ft) : null, qn = zt ? tt(zt) : null, Yn = y.useCallback((w) => {
      const I = w % 2 === 0, N = I ? Ft : zt, J = I ? Un : qn;
      if (N) return J ? {
        background: J
      } : {
        backgroundColor: N
      };
    }, [
      Ft,
      zt,
      Un,
      qn
    ]), Dt = ge.getRowModel().rows, Jn = gu({
      count: Dt.length,
      getScrollElement: () => qe.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), jo = n.data.tableVirtualizeThreshold ?? 50, pt = n.data.tablePagination === false && Dt.length > jo ? Jn.getVirtualItems() : null, Ro = pt == null ? void 0 : pt[0], Kn = pt == null ? void 0 : pt[pt.length - 1], Xn = (Ro == null ? void 0 : Ro.start) ?? 0, Qn = Kn ? Jn.getTotalSize() - (Kn.end ?? 0) : 0;
    return a.jsxs(Jo, {
      isValidType: u,
      data: o,
      children: [
        a.jsx(Ko, {
          data: o,
          widget: n
        }),
        u && F.length > 0 ? a.jsxs(P, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && a.jsx(P, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: a.jsx(oe, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: W,
                onChange: (w) => T(w.target.value),
                placeholder: m.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: a.jsx(Wr, {
                      position: "start",
                      children: a.jsx(Kr, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && a.jsx(Gt, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: a.jsx(S, {
                variant: "body2",
                children: m.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            a.jsx(P, {
              sx: Co,
              children: a.jsx(Qs, {
                ref: qe,
                sx: wo,
                children: a.jsxs(Os, {
                  size: _ === "compact" ? "small" : "medium",
                  sx: _o,
                  children: [
                    a.jsx(ri, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...vo,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: ge.getHeaderGroups().map((w) => a.jsx(ht, {
                        children: w.headers.map((I) => {
                          const N = I.column.getCanSort(), J = I.column.getIsSorted(), Q = I.column.columnDef.meta, _e = I.column.id === "__select__", Tt = !j;
                          return a.jsxs(Ke, {
                            component: "th",
                            colSpan: I.colSpan,
                            align: (Q == null ? void 0 : Q.align) || "left",
                            padding: _e ? "checkbox" : "normal",
                            sx: {
                              width: So(I),
                              minWidth: _e ? 48 : 40,
                              position: "relative",
                              ...xo
                            },
                            children: [
                              _e ? vt(I.column.columnDef.header, I.getContext()) : a.jsxs(P, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (Q == null ? void 0 : Q.align) === "right" ? "flex-end" : (Q == null ? void 0 : Q.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  N ? a.jsx(Ai, {
                                    active: J !== false,
                                    direction: J === "desc" ? "desc" : "asc",
                                    onClick: I.column.getToggleSortingHandler(),
                                    children: a.jsx(S, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: Bn,
                                      children: vt(I.column.columnDef.header, I.getContext())
                                    })
                                  }) : a.jsx(S, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: Bn,
                                    children: vt(I.column.columnDef.header, I.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (I.column.getCanSort() || A && I.column.getCanFilter() || I.column.getCanHide()) && a.jsx(ve, {
                                    title: m.t("json_table_column_menu"),
                                    children: a.jsx(ae, {
                                      size: "small",
                                      "aria-label": m.t("json_table_column_menu"),
                                      onClick: (Ze) => {
                                        Ze.stopPropagation(), yo(I.column, Ze.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: a.jsx(Ti, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              Tt && I.column.getCanResize() && a.jsx(P, {
                                className: "resize-handle",
                                onMouseDown: I.getResizeHandler(),
                                onTouchStart: I.getResizeHandler(),
                                onClick: (Ze) => Ze.stopPropagation(),
                                sx: {
                                  position: "absolute",
                                  right: 0,
                                  top: 0,
                                  height: "100%",
                                  width: "4px",
                                  cursor: "col-resize",
                                  userSelect: "none",
                                  touchAction: "none",
                                  zIndex: 1,
                                  opacity: I.column.getIsResizing() ? 1 : 0,
                                  bgcolor: I.column.getIsResizing() ? "primary.main" : "divider",
                                  transition: "opacity 0.15s",
                                  "&:hover": {
                                    opacity: 1,
                                    bgcolor: "primary.light"
                                  }
                                }
                              })
                            ]
                          }, I.id);
                        })
                      }, w.id))
                    }),
                    a.jsx(Ws, {
                      ref: De,
                      children: pt ? a.jsxs(a.Fragment, {
                        children: [
                          Xn > 0 && a.jsx(ht, {
                            children: a.jsx(Ke, {
                              colSpan: F.length,
                              sx: {
                                height: Xn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          pt.map((w) => {
                            const I = Dt[w.index], N = w.index;
                            return a.jsx(ht, {
                              "data-row-index": N,
                              sx: {
                                height: x,
                                ...Yn(N)
                              },
                              children: I.getVisibleCells().map((J) => {
                                var _a2;
                                const Q = J.column.id === "__select__";
                                return a.jsx(Ke, {
                                  align: ((_a2 = J.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: Q ? "checkbox" : "normal",
                                  sx: {
                                    ...Gn
                                  },
                                  children: vt(J.column.columnDef.cell, J.getContext())
                                }, J.id);
                              })
                            }, I.id);
                          }),
                          Qn > 0 && a.jsx(ht, {
                            children: a.jsx(Ke, {
                              colSpan: F.length,
                              sx: {
                                height: Qn,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Dt.map((w, I) => a.jsx(ht, {
                        "data-row-index": I,
                        sx: {
                          height: x,
                          ...Yn(I)
                        },
                        children: w.getVisibleCells().map((N) => {
                          var _a2;
                          const J = N.column.id === "__select__";
                          return a.jsx(Ke, {
                            align: ((_a2 = N.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: J ? "checkbox" : "normal",
                            sx: {
                              ...Gn
                            },
                            children: vt(N.column.columnDef.cell, N.getContext())
                          }, N.id);
                        })
                      }, w.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && a.jsx(vi, {
              component: "div",
              count: ge.getFilteredRowModel().rows.length,
              page: le.pageIndex,
              rowsPerPage: le.pageSize,
              rowsPerPageOptions: Ne,
              onPageChange: (w, I) => re((N) => ({
                ...N,
                pageIndex: I
              })),
              onRowsPerPageChange: (w) => re({
                pageIndex: 0,
                pageSize: parseInt(w.target.value, 10)
              }),
              labelRowsPerPage: a.jsx(S, {
                variant: "body2",
                component: "span",
                children: m.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: w, to: I, count: N }) => a.jsx(S, {
                variant: "body2",
                component: "span",
                children: `${w}\u2013${I} / ${N}`
              }),
              slots: {
                menuItem: Iu
              },
              slotProps: {
                select: {
                  renderValue: (w) => a.jsx(S, {
                    variant: "body2",
                    component: "span",
                    children: String(w)
                  })
                }
              }
            }),
            a.jsx(ju, {
              anchorEl: ot,
              open: !!ot,
              onClose: bo,
              activeColumn: Te.current,
              isSorted: Ae !== void 0,
              tableFiltering: A,
              activeColumnFilter: ho,
              onSetSorting: ee,
              onClearSorting: (w) => ee((I) => I.filter((N) => N.id !== w)),
              onShowAllColumns: Oe,
              hasHiddenColumns: Object.keys(ce).some((w) => ce[w] === false)
            })
          ]
        }) : a.jsx(P, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: a.jsx(S, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? m.t("json_table_no_oid") : u ? b.length > 0 && F.length === 0 ? m.t("json_table_all_columns_hidden") : m.t("json_table_no_data") : m.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Au = [
    "columnConfig",
    "tableSorting",
    "tableSortingMulti",
    "tableFiltering",
    "tableQuickFilter",
    "tableColumnMenu",
    "tableHiding",
    "tablePagination",
    "tablePageSize",
    "tablePageSizeOptions",
    "tableVirtualizeThreshold",
    "tableRowSelection",
    "tableMaxDepth",
    "tableDensity",
    "tableRowHeight",
    "tableHeaderHeight",
    "tableAutoSize",
    "tableHeaderElevation",
    "jsonTablePadding",
    "borderWidth",
    "borderStyle",
    "borderColor",
    "borderRadius",
    "tableHeaderBgColor",
    "tableHeaderTextColor",
    "tableHeaderFontSize",
    "headerBorderWidth",
    "headerBorderColor",
    "tableShowCellBorders",
    "verticalCellBorderWidth",
    "verticalCellBorderColor",
    "tableShowRowBorders",
    "horizontalCellBorderWidth",
    "horizontalCellBorderColor",
    "evenRowColor",
    "oddRowColor"
  ];
  Fn = class extends m {
    static createObjectFields() {
      const t = Xo([
        "string",
        "mixed",
        "json"
      ]), n = t.find((r) => r.name === "oid");
      if (n) {
        const r = n, o = r.onChange;
        r.onChange = async (s, i, l, u) => {
          if (!i.oid) {
            for (const c of Au) delete i[c];
            o || l(i);
          }
          o && await o(s, i, l, u);
        };
      }
      return t;
    }
    static getWidgetInfo() {
      return {
        id: "tplJsonTableCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "JsonTableCollectionWidget",
        visWidgetLabel: "json_table_collection_widget",
        visOrder: 11,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...nr()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Fn.createObjectFields(),
              ...sa()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...nr({
                groupName: "",
                allFields: false
              })
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "400px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-json-table.png"
      };
    }
    getWidgetInfo() {
      return Fn.getWidgetInfo();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t), t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true;
      const n = {
        id: t.id,
        refService: t.refService,
        style: t.style,
        widget: {
          data: this.state.rxData,
          style: this.state.rxStyle
        },
        setValue: this.setValue,
        setState: this.setState.bind(this),
        values: this.state.values,
        isSignalVisible: this.isSignalVisible.bind(this),
        getPropertyValue: this.getPropertyValue.bind(this),
        mode: this.props.context.themeType,
        socket: this.props.context.socket,
        theme: this.props.context.theme,
        wrappedContent: this.wrappedCollectionContent
      };
      return Qo(this.wrapContent(a.jsx($u, {})), n);
    }
  };
});
export {
  __tla,
  Fn as default
};
