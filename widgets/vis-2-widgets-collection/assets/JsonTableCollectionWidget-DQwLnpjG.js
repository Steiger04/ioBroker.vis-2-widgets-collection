import { z as Po, b as ko, g as Ie, a as Ae, u as Ce, j as a, s as ee, d as ye, e as we, P as Le, c as Eo, A as No, C as Cn, D as un, E as Oo, q as Lo, F as Ho, T as w, w as pe, m as je, L as Bo, p as ne, H as Vo, J as nr, K as Wo, N as Tn, k as Se, O as Go, o as Uo, Q as qo, f as Kt, R as Yo, I as ae, U as rr, W as Jo, S as ze, B as Ko, l as $, X as J, G as m, Y as ke, Z as Ee, _ as Xo, $ as Qo, a0 as Zo, __tla as __tla_0 } from "./usePopoverPositioning-CofXyWxH.js";
import { D as Xt, q as Wr, b as nt, r as es, h as Je, C as Fe, a as ts, u as ns, l as Et, c as rs, d as os, f as ss, e as or, w as is, __tla as __tla_1 } from "./useData-BoTWPt4P.js";
import { v as y, a as ls, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { T as ve, D as as, C as Ue, a as us, b as Pn, c as ft, A as Nt, d as Ot, E as Lt, e as Ht, f as qt, g as cs, __tla as __tla_3 } from "./ColorPickerField-QNYNVWML.js";
import { C as At, __tla as __tla_4 } from "./Checkbox-D1NCQF_L.js";
import { D as kn, a as En, b as Nn, __tla as __tla_5 } from "./DialogTitle-D-0sI30G.js";
import { B as Oe, __tla as __tla_6 } from "./Button-B6dAQNhX.js";
import { S as ds, __tla as __tla_7 } from "./Slider-enbrXPpK.js";
import { F as qe, __tla as __tla_8 } from "./FormControlLabel-GKvoLPBt.js";
import { S as rt, __tla as __tla_9 } from "./Switch-B6zo6bBn.js";
import { g as fs, M as L, __tla as __tla_10 } from "./MenuItem-CFB8pAi3.js";
import { g as gs, S as ue, __tla as __tla_11 } from "./Stack-BR9CtSSf.js";
import { A as cn, __tla as __tla_12 } from "./Avatar-CajCyz2d.js";
import { T as Gr, a as Qt, __tla as __tla_13 } from "./ToggleButtonGroup-CsvD-mXK.js";
import { C as Zt, __tla as __tla_14 } from "./Close-9YkifltS.js";
import { u as ps, __tla as __tla_15 } from "./useOidValue-DKn4TCiP.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_16 } from "./SwitchBase-BkWjByuT.js";
import { __tla as __tla_17 } from "./listItemTextClasses-X-Bzt_WG.js";
let Dn;
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
  })(),
  (() => {
    try {
      return __tla_17;
    } catch {
    }
  })()
]).then(async () => {
  function hs(e, t, n, r, o) {
    const [s, i] = y.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return ko(() => {
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
  const ms = {
    ...ls
  }, Ur = ms.useSyncExternalStore;
  function ys(e, t, n, r, o) {
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
        (p) => (d.addEventListener("change", p), () => {
          d.removeEventListener("change", p);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return Ur(u, l, i);
  }
  function qr(e = {}) {
    const { themeId: t } = e;
    return function(r, o = {}) {
      let s = Po();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: u = i ? window.matchMedia : null, ssrMatchMedia: c = null, noSsr: d = false } = gs({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let p = typeof r == "function" ? r(s) : r;
      return p = p.replace(/^@media( ?)/m, ""), p.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (Ur !== void 0 ? ys : hs)(p, l, u, c, d);
    };
  }
  qr();
  function bs(e) {
    return Ie("MuiCard", e);
  }
  Ae("MuiCard", [
    "root"
  ]);
  const _s = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, bs, t);
  }, xs = ee(Le, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), vs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiCard"
    }), { className: o, raised: s = false, ...i } = r, l = {
      ...r,
      raised: s
    }, u = _s(l);
    return a.jsx(xs, {
      className: ye(u.root, o),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function sr(e) {
    return e.substring(2).toLowerCase();
  }
  function Cs(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function ws(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: r = "onClick", onClickAway: o, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), u = y.useRef(false), c = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      u.current = true;
    }, 0), () => {
      u.current = false;
    }), []);
    const d = Eo(No(t), l), p = Cn((h) => {
      const b = c.current;
      c.current = false;
      const _ = un(l.current);
      if (!u.current || !l.current || "clientX" in h && Cs(h, _)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !_.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !b) && o(h);
    }), f = (h) => (b) => {
      c.current = true;
      const _ = t.props[h];
      _ && _(b);
    }, g = {
      ref: d
    };
    return s !== false && (g[s] = f(s)), y.useEffect(() => {
      if (s !== false) {
        const h = sr(s), b = un(l.current), _ = () => {
          i.current = true;
        };
        return b.addEventListener(h, p), b.addEventListener("touchmove", _), () => {
          b.removeEventListener(h, p), b.removeEventListener("touchmove", _);
        };
      }
    }, [
      p,
      s
    ]), r !== false && (g[r] = f(r)), y.useEffect(() => {
      if (r !== false) {
        const h = sr(r), b = un(l.current);
        return b.addEventListener(h, p), () => {
          b.removeEventListener(h, p);
        };
      }
    }, [
      p,
      r
    ]), y.cloneElement(t, g);
  }
  const js = qr({
    themeId: Oo
  });
  function Ss(e) {
    return Ie("MuiInputAdornment", e);
  }
  const ir = Ae("MuiInputAdornment", [
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
  var lr;
  const Rs = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${pe(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Ms = (e) => {
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
    return we(l, Ss, t);
  }, Is = ee("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Rs
  })(je(({ theme: e }) => ({
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
          [`&.${ir.positionStart}&:not(.${ir.hiddenLabel})`]: {
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
  }))), Yr = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiInputAdornment"
    }), { children: o, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: u = false, position: c, variant: d, ...p } = r, f = Lo() || {};
    let g = d;
    d && f.variant, f && !g && (g = f.variant);
    const h = {
      ...r,
      hiddenLabel: f.hiddenLabel,
      size: f.size,
      disablePointerEvents: l,
      position: c,
      variant: g
    }, b = Ms(h);
    return a.jsx(Ho.Provider, {
      value: null,
      children: a.jsx(Is, {
        as: i,
        ownerState: h,
        className: ye(b.root, s),
        ref: n,
        ...p,
        children: typeof o == "string" && !u ? a.jsx(w, {
          color: "textSecondary",
          children: o
        }) : a.jsxs(y.Fragment, {
          children: [
            c === "start" ? lr || (lr = a.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            o
          ]
        })
      })
    });
  }), As = (e) => {
    const { alignItems: t, classes: n } = e;
    return we({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, fs, n);
  }, $s = ee("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(je(({ theme: e }) => ({
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
  }))), mt = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiListItemIcon"
    }), { className: o, ...s } = r, i = y.useContext(Bo), l = {
      ...r,
      alignItems: i.alignItems
    }, u = As(l);
    return a.jsx($s, {
      className: ye(u.root, o),
      ownerState: l,
      ref: n,
      ...s
    });
  }), Fs = ne(a.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), zs = ne(a.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Ds(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: r, open: o, resumeHideDuration: s } = e, i = Vo();
    y.useEffect(() => {
      if (!o) return;
      function x(v) {
        v.defaultPrevented || v.key === "Escape" && (r == null ? void 0 : r(v, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      o,
      r
    ]);
    const l = Cn((x, v) => {
      r == null ? void 0 : r(x, v);
    }), u = Cn((x) => {
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
    }, d = i.clear, p = y.useCallback(() => {
      t != null && u(s ?? t * 0.5);
    }, [
      t,
      s,
      u
    ]), f = (x) => (v) => {
      const R = x.onBlur;
      R == null ? void 0 : R(v), p();
    }, g = (x) => (v) => {
      const R = x.onFocus;
      R == null ? void 0 : R(v), d();
    }, h = (x) => (v) => {
      const R = x.onMouseEnter;
      R == null ? void 0 : R(v), d();
    }, b = (x) => (v) => {
      const R = x.onMouseLeave;
      R == null ? void 0 : R(v), p();
    };
    return y.useEffect(() => {
      if (!n && o) return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", d);
      };
    }, [
      n,
      o,
      p,
      d
    ]), {
      getRootProps: (x = {}) => {
        const v = {
          ...nr(e),
          ...nr(x)
        };
        return {
          role: "presentation",
          ...x,
          ...v,
          onBlur: f(v),
          onFocus: g(v),
          onMouseEnter: h(v),
          onMouseLeave: b(v)
        };
      },
      onClickAway: c
    };
  }
  function Ts(e) {
    return Ie("MuiSnackbarContent", e);
  }
  Ae("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const Ps = (e) => {
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
    }, Ts, t);
  }, ks = ee(Le, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(je(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Wo(e.palette.background.default, t);
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
  })), Es = ee("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), Ns = ee("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Os = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: o, className: s, message: i, role: l = "alert", ...u } = r, c = r, d = Ps(c);
    return a.jsxs(ks, {
      role: l,
      square: true,
      elevation: 6,
      className: ye(d.root, s),
      ownerState: c,
      ref: n,
      ...u,
      children: [
        a.jsx(Es, {
          className: d.message,
          ownerState: c,
          children: i
        }),
        o ? a.jsx(Ns, {
          className: d.action,
          ownerState: c,
          children: o
        }) : null
      ]
    });
  });
  function Ls(e) {
    return Ie("MuiSnackbar", e);
  }
  Ae("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const Hs = (e) => {
    const { classes: t, anchorOrigin: n } = e, r = {
      root: [
        "root",
        `anchorOrigin${pe(n.vertical)}${pe(n.horizontal)}`
      ]
    };
    return we(r, Ls, t);
  }, Bs = ee("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${pe(n.anchorOrigin.vertical)}${pe(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(je(({ theme: e }) => ({
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
  }))), Vs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiSnackbar"
    }), o = Tn(), s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: u } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: c = null, children: d, className: p, ClickAwayListenerProps: f, ContentProps: g, disableWindowBlurListener: h = false, message: b, onBlur: _, onClose: x, onFocus: v, onMouseEnter: R, onMouseLeave: F, open: z, resumeHideDuration: M, slots: A = {}, slotProps: S = {}, TransitionComponent: O, transitionDuration: H = s, TransitionProps: { onEnter: G, onExited: ie, ...ce } = {}, ...le } = r, re = {
      ...r,
      anchorOrigin: {
        vertical: l,
        horizontal: u
      },
      autoHideDuration: c,
      disableWindowBlurListener: h,
      TransitionComponent: O,
      transitionDuration: H
    }, de = Hs(re), { getRootProps: te, onClickAway: C } = Ds({
      ...re
    }), [P, k] = y.useState(true), E = (Pe) => {
      k(true), ie && ie(Pe);
    }, oe = (Pe, $e) => {
      k(false), G && G(Pe, $e);
    }, U = {
      slots: {
        transition: O,
        ...A
      },
      slotProps: {
        content: g,
        clickAwayListener: f,
        transition: ce,
        ...S
      }
    }, [He, Be] = Se("root", {
      ref: n,
      className: [
        de.root,
        p
      ],
      elementType: Bs,
      getSlotProps: te,
      externalForwardedProps: {
        ...U,
        ...le
      },
      ownerState: re
    }), [he, { ownerState: Ye, ...Te }] = Se("clickAwayListener", {
      elementType: ws,
      externalForwardedProps: U,
      getSlotProps: (Pe) => ({
        onClickAway: (...$e) => {
          var _a2;
          (_a2 = Pe.onClickAway) == null ? void 0 : _a2.call(Pe, ...$e), C(...$e);
        }
      }),
      ownerState: re
    }), [q, gt] = Se("content", {
      elementType: Os,
      shouldForwardComponentProp: true,
      externalForwardedProps: U,
      additionalProps: {
        message: b,
        action: i
      },
      ownerState: re
    }), [st, be] = Se("transition", {
      elementType: Go,
      externalForwardedProps: U,
      getSlotProps: (Pe) => ({
        onEnter: (...$e) => {
          var _a2;
          (_a2 = Pe.onEnter) == null ? void 0 : _a2.call(Pe, ...$e), oe(...$e);
        },
        onExited: (...$e) => {
          var _a2;
          (_a2 = Pe.onExited) == null ? void 0 : _a2.call(Pe, ...$e), E(...$e);
        }
      }),
      additionalProps: {
        appear: true,
        in: z,
        timeout: H,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: re
    });
    return !z && P ? null : a.jsx(he, {
      ...Te,
      ...A.clickAwayListener && {
        ownerState: Ye
      },
      children: a.jsx(He, {
        ...Be,
        children: a.jsx(st, {
          ...be,
          children: d || a.jsx(q, {
            ...gt
          })
        })
      })
    });
  }), Jr = y.createContext();
  function Ws(e) {
    return Ie("MuiTable", e);
  }
  Ae("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const Gs = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return we({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, Ws, t);
  }, Us = ee("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(je(({ theme: e }) => ({
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
  }))), ar = "table", qs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTable"
    }), { className: o, component: s = ar, padding: i = "normal", size: l = "medium", stickyHeader: u = false, ...c } = r, d = {
      ...r,
      component: s,
      padding: i,
      size: l,
      stickyHeader: u
    }, p = Gs(d), f = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: u
    }), [
      i,
      l,
      u
    ]);
    return a.jsx(Jr.Provider, {
      value: f,
      children: a.jsx(Us, {
        as: s,
        role: s === ar ? null : "table",
        ref: n,
        className: ye(p.root, o),
        ownerState: d,
        ...c
      })
    });
  }), on = y.createContext();
  function Ys(e) {
    return Ie("MuiTableBody", e);
  }
  Ae("MuiTableBody", [
    "root"
  ]);
  const Js = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, Ys, t);
  }, Ks = ee("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), Xs = {
    variant: "body"
  }, ur = "tbody", Qs = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableBody"
    }), { className: o, component: s = ur, ...i } = r, l = {
      ...r,
      component: s
    }, u = Js(l);
    return a.jsx(on.Provider, {
      value: Xs,
      children: a.jsx(Ks, {
        className: ye(u.root, o),
        as: s,
        ref: n,
        role: s === ur ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Zs(e) {
    return Ie("MuiTableCell", e);
  }
  const ei = Ae("MuiTableCell", [
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
  ]), ti = (e) => {
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
    return we(l, Zs, t);
  }, ni = ee("td", {
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
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Uo(Kt(e.palette.divider, 1), 0.88) : qo(Kt(e.palette.divider, 1), 0.68)}`,
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
          [`&.${ei.paddingCheckbox}`]: {
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
  }))), Xe = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableCell"
    }), { align: o = "inherit", className: s, component: i, padding: l, scope: u, size: c, sortDirection: d, variant: p, ...f } = r, g = y.useContext(Jr), h = y.useContext(on), b = h && h.variant === "head";
    let _;
    i ? _ = i : _ = b ? "th" : "td";
    let x = u;
    _ === "td" ? x = void 0 : !x && b && (x = "col");
    const v = p || h && h.variant, R = {
      ...r,
      align: o,
      component: _,
      padding: l || (g && g.padding ? g.padding : "normal"),
      size: c || (g && g.size ? g.size : "medium"),
      sortDirection: d,
      stickyHeader: v === "head" && g && g.stickyHeader,
      variant: v
    }, F = ti(R);
    let z = null;
    return d && (z = d === "asc" ? "ascending" : "descending"), a.jsx(ni, {
      as: _,
      ref: n,
      className: ye(F.root, s),
      "aria-sort": z,
      scope: x,
      ownerState: R,
      ...f
    });
  });
  function ri(e) {
    return Ie("MuiTableContainer", e);
  }
  Ae("MuiTableContainer", [
    "root"
  ]);
  const oi = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, ri, t);
  }, si = ee("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), ii = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableContainer"
    }), { className: o, component: s = "div", ...i } = r, l = {
      ...r,
      component: s
    }, u = oi(l);
    return a.jsx(si, {
      ref: n,
      as: s,
      className: ye(u.root, o),
      ownerState: l,
      ...i
    });
  });
  function li(e) {
    return Ie("MuiTableHead", e);
  }
  Ae("MuiTableHead", [
    "root"
  ]);
  const ai = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, li, t);
  }, ui = ee("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), ci = {
    variant: "head"
  }, cr = "thead", di = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableHead"
    }), { className: o, component: s = cr, ...i } = r, l = {
      ...r,
      component: s
    }, u = ai(l);
    return a.jsx(on.Provider, {
      value: ci,
      children: a.jsx(ui, {
        as: s,
        className: ye(u.root, o),
        ref: n,
        role: s === cr ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function fi(e) {
    return Ie("MuiToolbar", e);
  }
  Ae("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const gi = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return we({
      root: [
        "root",
        !n && "gutters",
        r
      ]
    }, fi, t);
  }, pi = ee("div", {
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
  })(je(({ theme: e }) => ({
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
  }))), Kr = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiToolbar"
    }), { className: o, component: s = "div", disableGutters: i = false, variant: l = "regular", ...u } = r, c = {
      ...r,
      component: s,
      disableGutters: i,
      variant: l
    }, d = gi(c);
    return a.jsx(pi, {
      as: s,
      className: ye(d.root, o),
      ref: n,
      ownerState: c,
      ...u
    });
  }), hi = ne(a.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), mi = ne(a.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), yi = y.forwardRef(function(t, n) {
    const { backIconButtonProps: r, count: o, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: u, page: c, rowsPerPage: d, showFirstButton: p, showLastButton: f, slots: g = {}, slotProps: h = {}, ...b } = t, _ = Yo(), x = (E) => {
      u(E, 0);
    }, v = (E) => {
      u(E, c - 1);
    }, R = (E) => {
      u(E, c + 1);
    }, F = (E) => {
      u(E, Math.max(0, Math.ceil(o / d) - 1));
    }, z = g.firstButton ?? ae, M = g.lastButton ?? ae, A = g.nextButton ?? ae, S = g.previousButton ?? ae, O = g.firstButtonIcon ?? Fs, H = g.lastButtonIcon ?? zs, G = g.nextButtonIcon ?? mi, ie = g.previousButtonIcon ?? hi, ce = _ ? M : z, le = _ ? A : S, re = _ ? S : A, de = _ ? z : M, te = _ ? h.lastButton : h.firstButton, C = _ ? h.nextButton : h.previousButton, P = _ ? h.previousButton : h.nextButton, k = _ ? h.firstButton : h.lastButton;
    return a.jsxs("div", {
      ref: n,
      ...b,
      children: [
        p && a.jsx(ce, {
          onClick: x,
          disabled: s || c === 0,
          "aria-label": i("first", c),
          title: i("first", c),
          ...te,
          children: _ ? a.jsx(H, {
            ...h.lastButtonIcon
          }) : a.jsx(O, {
            ...h.firstButtonIcon
          })
        }),
        a.jsx(le, {
          onClick: v,
          disabled: s || c === 0,
          color: "inherit",
          "aria-label": i("previous", c),
          title: i("previous", c),
          ...C ?? r,
          children: _ ? a.jsx(G, {
            ...h.nextButtonIcon
          }) : a.jsx(ie, {
            ...h.previousButtonIcon
          })
        }),
        a.jsx(re, {
          onClick: R,
          disabled: s || (o !== -1 ? c >= Math.ceil(o / d) - 1 : false),
          color: "inherit",
          "aria-label": i("next", c),
          title: i("next", c),
          ...P ?? l,
          children: _ ? a.jsx(ie, {
            ...h.previousButtonIcon
          }) : a.jsx(G, {
            ...h.nextButtonIcon
          })
        }),
        f && a.jsx(de, {
          onClick: F,
          disabled: s || c >= Math.ceil(o / d) - 1,
          "aria-label": i("last", c),
          title: i("last", c),
          ...k,
          children: _ ? a.jsx(O, {
            ...h.firstButtonIcon
          }) : a.jsx(H, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function bi(e) {
    return Ie("MuiTablePagination", e);
  }
  const St = Ae("MuiTablePagination", [
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
  var dr;
  const _i = ee(Xe, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(je(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), xi = ee(Kr, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${St.actions}`]: t.actions,
      ...t.toolbar
    })
  })(je(({ theme: e }) => ({
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
  }))), vi = ee("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), Ci = ee("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), wi = ee(ze, {
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
  }), ji = ee(L, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), Si = ee("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(je(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Ri({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function Mi(e) {
    return `Go to ${e} page`;
  }
  const Ii = (e) => {
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
    }, bi, t);
  }, Ai = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: o = yi, backIconButtonProps: s, colSpan: i, component: l = Xe, count: u, disabled: c = false, getItemAriaLabel: d = Mi, labelDisplayedRows: p = Ri, labelRowsPerPage: f = "Rows per page:", nextIconButtonProps: g, onPageChange: h, onRowsPerPageChange: b, page: _, rowsPerPage: x, rowsPerPageOptions: v = [
      10,
      25,
      50,
      100
    ], SelectProps: R = {}, showFirstButton: F = false, showLastButton: z = false, slotProps: M = {}, slots: A = {}, ...S } = r, O = r, H = Ii(O), G = (M == null ? void 0 : M.select) ?? R, ie = G.native ? "option" : ji;
    let ce;
    (l === Xe || l === "td") && (ce = i || 1e3);
    const le = rr(G.id), re = rr(G.labelId), de = () => u === -1 ? (_ + 1) * x : x === -1 ? u : Math.min(u, (_ + 1) * x), te = {
      slots: A,
      slotProps: M
    }, [C, P] = Se("root", {
      ref: n,
      className: H.root,
      elementType: _i,
      externalForwardedProps: {
        ...te,
        component: l,
        ...S
      },
      ownerState: O,
      additionalProps: {
        colSpan: ce
      }
    }), [k, E] = Se("toolbar", {
      className: H.toolbar,
      elementType: xi,
      externalForwardedProps: te,
      ownerState: O
    }), [oe, U] = Se("spacer", {
      className: H.spacer,
      elementType: vi,
      externalForwardedProps: te,
      ownerState: O
    }), [He, Be] = Se("selectLabel", {
      className: H.selectLabel,
      elementType: Ci,
      externalForwardedProps: te,
      ownerState: O,
      additionalProps: {
        id: re
      }
    }), [he, Ye] = Se("select", {
      className: H.select,
      elementType: wi,
      externalForwardedProps: te,
      ownerState: O
    }), [Te, q] = Se("menuItem", {
      className: H.menuItem,
      elementType: ie,
      externalForwardedProps: te,
      ownerState: O
    }), [gt, st] = Se("displayedRows", {
      className: H.displayedRows,
      elementType: Si,
      externalForwardedProps: te,
      ownerState: O
    });
    return a.jsx(C, {
      ...P,
      children: a.jsxs(k, {
        ...E,
        children: [
          a.jsx(oe, {
            ...U
          }),
          v.length > 1 && a.jsx(He, {
            ...Be,
            children: f
          }),
          v.length > 1 && a.jsx(he, {
            variant: "standard",
            ...!G.variant && {
              input: dr || (dr = a.jsx(Jo, {}))
            },
            value: x,
            onChange: b,
            id: le,
            labelId: re,
            ...G,
            classes: {
              ...G.classes,
              root: ye(H.input, H.selectRoot, (G.classes || {}).root),
              select: ye(H.select, (G.classes || {}).select),
              icon: ye(H.selectIcon, (G.classes || {}).icon)
            },
            disabled: c,
            ...Ye,
            children: v.map((be) => y.createElement(Te, {
              ...q,
              key: be.label ? be.label : be,
              value: be.value ? be.value : be
            }, be.label ? be.label : be))
          }),
          a.jsx(gt, {
            ...st,
            children: p({
              from: u === 0 ? 0 : _ * x + 1,
              to: de(),
              count: u === -1 ? -1 : u,
              page: _
            })
          }),
          a.jsx(o, {
            className: H.actions,
            backIconButtonProps: s,
            count: u,
            nextIconButtonProps: g,
            onPageChange: h,
            page: _,
            rowsPerPage: x,
            showFirstButton: F,
            showLastButton: z,
            slotProps: M.actions,
            slots: A.actions,
            getItemAriaLabel: d,
            disabled: c
          })
        ]
      })
    });
  });
  function $i(e) {
    return Ie("MuiTableRow", e);
  }
  const fr = Ae("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), Fi = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: s } = e;
    return we({
      root: [
        "root",
        n && "selected",
        r && "hover",
        o && "head",
        s && "footer"
      ]
    }, $i, t);
  }, zi = ee("tr", {
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
  })(je(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${fr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${fr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Kt(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Kt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), gr = "tr", yt = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableRow"
    }), { className: o, component: s = gr, hover: i = false, selected: l = false, ...u } = r, c = y.useContext(on), d = {
      ...r,
      component: s,
      hover: i,
      selected: l,
      head: c && c.variant === "head",
      footer: c && c.variant === "footer"
    }, p = Fi(d);
    return a.jsx(zi, {
      as: s,
      ref: n,
      className: ye(p.root, o),
      role: s === gr ? null : "row",
      ownerState: d,
      ...u
    });
  }), Di = ne(a.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function Ti(e) {
    return Ie("MuiTableSortLabel", e);
  }
  const dn = Ae("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Pi = (e) => {
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
    return we(o, Ti, t);
  }, ki = ee(Ko, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(je(({ theme: e }) => ({
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
      [`& .${dn.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${dn.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${dn.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), Ei = ee("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${pe(n.direction)}`]
      ];
    }
  })(je(({ theme: e }) => ({
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
  }))), Ni = y.forwardRef(function(t, n) {
    const r = Ce({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: o = false, children: s, className: i, direction: l = "asc", hideSortIcon: u = false, IconComponent: c = Di, slots: d = {}, slotProps: p = {}, ...f } = r, g = {
      ...r,
      active: o,
      direction: l,
      hideSortIcon: u,
      IconComponent: c
    }, h = Pi(g), b = {
      slots: d,
      slotProps: p
    }, [_, x] = Se("root", {
      elementType: ki,
      externalForwardedProps: b,
      ownerState: g,
      className: ye(h.root, i),
      ref: n
    }), [v, R] = Se("icon", {
      elementType: Ei,
      externalForwardedProps: b,
      ownerState: g,
      className: h.icon
    });
    return a.jsxs(_, {
      disableRipple: true,
      component: "span",
      ...x,
      ...f,
      children: [
        s,
        u && !o ? null : a.jsx(v, {
          as: c,
          ...R
        })
      ]
    });
  }), Xr = ne(a.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), Qr = ne(a.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Zr = ne(a.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), Oi = ne(a.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), eo = ne(a.jsx("path", {
    d: "M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4z"
  }), "BrokenImage"), pr = ne(a.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), Li = ne(a.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), Hi = ne(a.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), hr = ne(a.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), mr = ne(a.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Bi = ne(a.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Vi = ne(a.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), jt = ne(a.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), to = ne(a.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Wi = ne(a.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Gi = ne(a.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), no = ne(a.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), Rt = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    image: "#3f51b5",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Mt = {
    size: 64,
    objectFit: "contain"
  }, yr = "b64:";
  function Ui(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
    return btoa(n);
  }
  function qi(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return new TextDecoder().decode(n);
  }
  function ro(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(yr) ? qi(e.slice(yr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Yi({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: s, loading: i }) {
    const [l, u] = y.useState(""), [c, d] = y.useState(null), [p, f] = y.useState(null), [g, h] = y.useState(false), b = y.useRef(0), _ = y.useRef(/* @__PURE__ */ new Map()), x = !l, v = y.useMemo(() => {
      if (!l) return e;
      const C = l.toLowerCase();
      return e.filter((P) => P.path.toLowerCase().includes(C) || P.headerName.toLowerCase().includes(C));
    }, [
      e,
      l
    ]), R = y.useMemo(() => e.filter((C) => C.visible).length, [
      e
    ]), F = y.useCallback((C) => {
      o(e.map((P) => P.path === C ? {
        ...P,
        visible: !P.visible
      } : P));
    }, [
      e,
      o
    ]), z = y.useCallback((C, P) => {
      C.stopPropagation(), F(P);
    }, [
      F
    ]), M = y.useCallback((C) => (P) => {
      P ? _.current.set(C, P) : _.current.delete(C);
    }, []), A = y.useCallback((C) => {
      o(e.map((P) => ({
        ...P,
        visible: C
      })));
    }, [
      e,
      o
    ]), S = y.useCallback((C, P) => {
      C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", P), d(P);
    }, []), O = y.useCallback((C, P) => {
      C.preventDefault(), b.current += 1, P !== c && f(P);
    }, [
      c
    ]), H = y.useCallback((C) => {
      C.preventDefault(), b.current -= 1, b.current <= 0 && (b.current = 0, f(null));
    }, []), G = y.useCallback((C) => {
      C.preventDefault(), C.dataTransfer.dropEffect = "move";
    }, []), ie = y.useCallback((C, P) => {
      C.preventDefault(), b.current = 0, f(null), d(null);
      const k = C.dataTransfer.getData("text/plain");
      if (!k || k === P) return;
      const E = [
        ...e
      ], oe = E.findIndex((he) => he.path === k), U = E.findIndex((he) => he.path === P);
      if (oe === -1 || U === -1) return;
      const [He] = E.splice(oe, 1), Be = oe < U ? U - 1 : U;
      E.splice(Be, 0, He), o(E);
    }, [
      e,
      o
    ]), ce = y.useCallback(() => {
      b.current = 0, d(null), f(null);
    }, []), le = y.useCallback(() => {
      o(e.map((C) => ({
        path: C.path,
        visible: true,
        headerName: C.path.split(".").pop() || C.path
      }))), h(false);
    }, [
      e,
      o
    ]), re = y.useCallback(() => {
      h(true);
    }, []), de = y.useCallback(() => {
      h(false);
    }, []), te = y.useCallback((C, P, k) => {
      var _a2, _b;
      switch (C.key) {
        case "Enter":
        case " ":
          C.preventDefault(), r(P.path);
          break;
        case "ArrowDown":
          if (C.preventDefault(), k < v.length - 1) {
            const E = v[k + 1].path;
            r(E), (_a2 = _.current.get(E)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (C.preventDefault(), k > 0) {
            const E = v[k - 1].path;
            r(E), (_b = _.current.get(E)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          C.preventDefault(), F(P.path);
          break;
      }
    }, [
      v,
      r,
      F
    ]);
    return a.jsxs($, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        a.jsxs(Kr, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            a.jsx(J, {
              size: "small",
              placeholder: m.t("json_table_search_columns"),
              value: l,
              onChange: (C) => u(C.target.value),
              slotProps: {
                input: {
                  startAdornment: a.jsx(Yr, {
                    position: "start",
                    children: a.jsx(to, {
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
                  children: a.jsx(Vi, {
                    fontSize: "small"
                  })
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_show_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: () => A(true),
                "aria-label": m.t("json_table_show_all"),
                children: a.jsx(Gi, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_hide_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: () => A(false),
                "aria-label": m.t("json_table_hide_all"),
                children: a.jsx(no, {
                  fontSize: "small"
                })
              })
            }),
            a.jsx(ve, {
              title: m.t("json_table_reset_all"),
              children: a.jsx(ae, {
                size: "small",
                onClick: re,
                "aria-label": m.t("json_table_reset_all"),
                children: a.jsx(jt, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        a.jsx($, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: v.length === 0 ? a.jsx($, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: a.jsx(w, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? m.t("json_table_no_columns") : m.t("json_table_no_search_results")
            })
          }) : v.map((C, P) => {
            const k = t.find((U) => U.path === C.path), E = n === C.path, oe = (k == null ? void 0 : k.type) || "string";
            return a.jsx(vs, {
              ref: M(C.path),
              "data-column-path": C.path,
              onClick: () => r(C.path),
              onKeyDown: (U) => te(U, C, P),
              draggable: x,
              onDragStart: x ? (U) => S(U, C.path) : void 0,
              onDragEnter: x ? (U) => O(U, C.path) : void 0,
              onDragLeave: x ? H : void 0,
              onDragOver: x ? G : void 0,
              onDrop: x ? (U) => ie(U, C.path) : void 0,
              onDragEnd: x ? ce : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": E,
              "aria-label": `${C.headerName || C.path}, ${oe}, ${C.visible ? m.t("json_table_visible") : m.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: E ? "primary.main" : "divider",
                backgroundColor: E ? "action.selected" : "background.paper",
                opacity: c === C.path ? 0.4 : C.visible ? 1 : 0.55,
                borderTop: p === C.path ? "3px solid" : void 0,
                borderTopColor: p === C.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: E ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: a.jsxs($, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && a.jsx(as, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  a.jsx(At, {
                    checked: C.visible,
                    onClick: (U) => z(U, C.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${m.t("json_table_visible")}: ${C.headerName || C.path}`
                    }
                  }),
                  a.jsxs($, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      a.jsx(w, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: C.path,
                        children: C.headerName || C.path
                      }),
                      C.headerName && C.headerName !== C.path && a.jsx(w, {
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
                        title: C.path,
                        children: C.path
                      })
                    ]
                  }),
                  a.jsx(Ue, {
                    label: oe,
                    size: "small",
                    sx: {
                      backgroundColor: Rt[oe] || Rt.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${m.t("json_table_type")}: ${oe}`
                  })
                ]
              })
            }, C.path);
          })
        }),
        e.length > 0 && a.jsx($, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: a.jsxs(w, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              R,
              " / ",
              e.length,
              " ",
              m.t("json_table_columns_visible")
            ]
          })
        }),
        a.jsxs(kn, {
          open: g,
          onClose: de,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            a.jsx(En, {
              id: "reset-dialog-title",
              children: m.t("json_table_reset_all")
            }),
            a.jsx(Nn, {
              children: a.jsx(us, {
                id: "reset-dialog-description",
                children: m.t("json_table_reset_confirm_message")
              })
            }),
            a.jsxs(Pn, {
              children: [
                a.jsx(Oe, {
                  onClick: de,
                  color: "primary",
                  children: m.t("cancel")
                }),
                a.jsx(Oe, {
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
  function Yt(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const Ji = 0, Ki = 20, br = 2;
  function Xi(e) {
    if (e == null) return br;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(Ji, Math.min(Ki, Math.floor(t))) : br;
  }
  function oo(e, t = {}) {
    const { prefix: n = "", suffix: r = "", thousands: o = false } = t, s = Xi(t.decimals);
    let i = e.toFixed(s);
    if (o) {
      const [l, u] = i.split("."), c = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = u !== void 0 ? `${c}.${u}` : c;
    }
    return `${n}${i}${r}`;
  }
  const Qi = [
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
  function Zi(e, t) {
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
  function wn(e, t) {
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
  function On(e, t, n) {
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
          const [c, d, p] = u.split("-").map(Number);
          r = new Date(c, d - 1, p);
        } else r = new Date(u);
      } else if (typeof e == "number") r = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return Yt(e);
      if (isNaN(r.getTime())) return Yt(e);
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
      for (const [u, c] of Object.entries(i).sort((d, p) => p[0].length - d[0].length)) l = l.replaceAll(u, c);
      return l;
    } catch {
      return Yt(e);
    }
  }
  function jn(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Yt(e);
  }
  function so(e, t) {
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
  function el({ format: e, onChange: t, discoveredColumn: n }) {
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
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_number_format")
        }),
        a.jsxs($, {
          children: [
            a.jsxs(w, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                m.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            a.jsx(ds, {
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
        a.jsx(J, {
          label: m.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (o) => t({
            type: "number",
            numberPrefix: o.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        a.jsx(J, {
          label: m.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (o) => t({
            type: "number",
            numberSuffix: o.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        a.jsx(qe, {
          control: a.jsx(rt, {
            checked: e.numberThousandsSeparator || false,
            onChange: (o) => t({
              type: "number",
              numberThousandsSeparator: o.target.checked
            }),
            size: "small"
          }),
          label: a.jsx(w, {
            variant: "body2",
            children: m.t("json_table_number_thousands")
          })
        }),
        a.jsxs(Le, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsxs(w, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                r,
                " \u2192",
                " ",
                oo(r, {
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
  function tl({ format: e, detectedFormat: t, onChange: n }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_date_format")
        }),
        t && a.jsx(J, {
          label: m.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: m.t("json_table_date_detected_hint")
        }),
        a.jsxs(ke, {
          fullWidth: true,
          size: "small",
          children: [
            a.jsx(Ee, {
              children: m.t("json_table_date_output_format")
            }),
            a.jsx(ze, {
              label: m.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (r) => n({
                type: "date",
                dateFormat: r.target.value,
                dateInputFormat: t
              }),
              children: Qi.map((r) => a.jsx(L, {
                value: r.value,
                children: r.label
              }, r.value))
            })
          ]
        }),
        a.jsxs(Le, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsx(w, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: On(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function nl({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_boolean_format")
        }),
        a.jsx(J, {
          label: m.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        a.jsx(J, {
          label: m.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        a.jsxs(Le, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsxs(ue, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                a.jsxs(w, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    jn(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                a.jsxs(w, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    jn(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function rl({ format: e, onChange: t }) {
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_string_format")
        }),
        a.jsxs(ke, {
          size: "small",
          fullWidth: true,
          children: [
            a.jsx(Ee, {
              children: m.t("json_table_string_case")
            }),
            a.jsxs(ze, {
              label: m.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                a.jsx(L, {
                  value: "none",
                  children: m.t("json_table_string_case_none")
                }),
                a.jsx(L, {
                  value: "upper",
                  children: m.t("json_table_string_case_upper")
                }),
                a.jsx(L, {
                  value: "lower",
                  children: m.t("json_table_string_case_lower")
                }),
                a.jsx(L, {
                  value: "title",
                  children: m.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(J, {
              label: m.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            a.jsx(J, {
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
        a.jsx(qe, {
          control: a.jsx(rt, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: m.t("json_table_string_trim")
        }),
        a.jsx(J, {
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
        a.jsx(J, {
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
        e.stringRegex && a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(J, {
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
            a.jsx(J, {
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
        a.jsx(Xt, {}),
        a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            a.jsx(qe, {
              control: a.jsx(rt, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: a.jsx(w, {
                variant: "body2",
                fontWeight: "bold",
                children: m.t("json_table_string_font_weight")
              })
            }),
            a.jsx(qe, {
              control: a.jsx(rt, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: a.jsx(w, {
                variant: "body2",
                fontStyle: "italic",
                children: m.t("json_table_string_font_style")
              })
            })
          ]
        }),
        a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(J, {
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
            a.jsx(ft, {
              label: m.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              overridden: !!e.stringTextColor,
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        a.jsxs(Le, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsx(w, {
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
              children: so("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function X(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function ol(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function Ge(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        Ge(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let r = 0; r < n.length; r++) {
        const o = e[n[r]];
        if (typeof o == "object" && o) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          Ge(o, t - 1);
        }
      }
    }
    return e;
  }
  function sl(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+X(e)) && t !== null) throw NaN;
    if (Number.isNaN(+X(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function il(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) await t(o, r++, e) && n.push(o);
    return n;
  }
  async function ll(e, t) {
    let n = 0;
    for (const r of e) if (await t(r, n++, e)) return true;
    return false;
  }
  async function al(e, t) {
    let n = 0;
    for (const r of e) if (!await t(r, n++, e)) return false;
    return true;
  }
  async function ul(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) n.push(await t(o, r++, e));
    return n;
  }
  async function cl(e, t, n, r = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const o = typeof n > "u" ? 1 : 0;
    let s = Ge(o ? e[0] : n, r);
    for (let i = o; i < e.length; i++) s = Ge(await t(s, e[i]), r);
    return s;
  }
  const en = {
    filter: il,
    some: ll,
    every: al,
    map: ul,
    reduce: cl
  }, W = /* @__PURE__ */ Symbol.for("json_logic_sync"), me = /* @__PURE__ */ Symbol.for("json_logic_compiled"), De = /* @__PURE__ */ Symbol.for("json_logic_original"), _r = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function ot(e) {
    return typeof e == "function" ? e[W] === true : Array.isArray(e) ? e.every(ot) : !(e && e.asyncMethod && !e.method);
  }
  function io(e, t = true) {
    return e[W] = t, e;
  }
  function $t(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const fn = /* @__PURE__ */ new WeakMap();
  function xr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (fn.has(e) || fn.set(e, dl(e)), fn.get(e));
  }
  function dl(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function fl(e, ...t) {
    let n = "";
    const r = this;
    for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), ot(t[o]) || (r.asyncDetected = true), n += (ot(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][me] < "u" ? n += t[o][me] : n += Q(t[o], r));
    return {
      [me]: n
    };
  }
  function gl(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function tn(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => tn(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && tn(o, t, n);
    }
    return true;
  }
  function Sn(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Sn(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const r = n[0], o = e[r];
      return ot(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][W] == "function" && t.methods[r][W](e, {
        engine: t
      })) : Sn(o, t) : false;
    }
    return true;
  }
  function Q(e, t = {}) {
    const { notTraversed: n = [], async: r, processing: o = [], values: s = [], engine: i } = t;
    function l(d, p = false) {
      return gl(d, p) ? JSON.stringify(d) : (s.push(d), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let d = "";
      for (let p = 0; p < e.length; p++) p > 0 && (d += ","), d += Q(e[p], t);
      return "[" + d + "]";
    }
    let u = false;
    function c(d) {
      return t.asyncDetected = t.asyncDetected || u, r && u ? `await ${d}` : d;
    }
    if (e && typeof e == "object") {
      const d = Object.keys(e), p = d[0];
      if (!p) return l(e);
      if (!i.methods[p] || d.length > 1) {
        if (i.isData(e, p)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: p
        };
      }
      if (!t.engine.disableInline && i.methods[p] && tn(e, i, t)) return Sn(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (o.push(i.run(e).then((b) => l(b))), `__%%%${o.length - 1}%%%__`);
      let f = e[p];
      if ((!f || typeof f != "object") && !i.methods[p].lazy && (f = [
        f
      ]), i.methods[p] && i.methods[p].compile) {
        let b = i.methods[p].compile(f, t);
        if (b[me] && (b = b[me]), (b || "").startsWith("await") && (t.asyncDetected = true), b !== false) return b;
      }
      let g = i.methods[p].optimizeUnary ? "" : "coerceArray";
      !g && Array.isArray(f) && f.length === 1 && !Array.isArray(f[0]) ? f = f[0] : g && Array.isArray(f) && (g = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[p] == "function") {
        u = !ot(i.methods[p]);
        const b = h[xr(i.methods[p]) - 1] || h[2];
        return c(`engine.methods["${p}"](${g}(` + Q(f, t) + ")" + b + ")");
      } else {
        u = !!(r && i.methods[p] && i.methods[p].asyncMethod);
        const b = xr(u ? i.methods[p].asyncMethod : i.methods[p].method);
        let _ = h[b - 1] || h[2];
        return u && typeof i.methods[p][W] == "function" && i.methods[p][W](f, {
          engine: i
        }) && (u = false, _ = _.replace("engine", "engine.fallback")), i.methods[p] && !i.methods[p].lazy ? c(`engine.methods["${p}"]${u ? ".asyncMethod" : ".method"}(${g}(` + Q(f, t) + ")" + _ + ")") : (n.push(f), c(`engine.methods["${p}"]${u ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + _ + ")"));
      }
    }
    return l(e);
  }
  function nn(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: fl
    }, t));
    const n = Q(e, t);
    return pl(e, n, t);
  }
  function pl(e, t, n) {
    const { engine: r, methods: o, notTraversed: s, processing: i = [], values: l } = n, u = [];
    i.forEach((d, p) => {
      t = t.replace(`__%%%${p}%%%__`, d);
    });
    const c = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(c)(l, o, s, en, r, u, $t, X, ol, sl, Ge), {
      [W]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const hl = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, dt = hl(), bt = /* @__PURE__ */ new Map();
  function ct(e) {
    if (bt.has(e)) return bt.get(e);
    bt.size > 2048 && bt.clear();
    const t = ml(e);
    return bt.set(e, t), t;
  }
  function ml(e, t = ".", n = "\\", r = "/") {
    const o = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === r ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (o.push(s), s = "") : s += l;
    }
    return o.length !== e.length && o.push(s), o;
  }
  const Rn = {
    get: {
      [W]: true,
      method: ([e, t, n], r, o, s) => {
        const i = n === void 0 ? null : n, l = ct(String(t));
        for (let u = 0; u < l.length; u++) if (e == null || (e = e[l[u]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, r = e, o = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
          r = r.toString();
          const s = ct(r);
          return dt ? `((${Q(o, t)})${s.map((i) => `?.[${Q(i, t)}]`).join("")} ?? ${Q(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${Q(o, t)}||0)`)}, ${Q(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [De]: true,
      [W]: true,
      method: (e, t, n, r) => {
        let o;
        Array.isArray(e) && (o = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = o === void 0 ? null : o;
        if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
        const l = ct(String(e));
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
          const o = ct(n);
          if (!dt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((l, u) => `(${l}||0)[${JSON.stringify(u)}]`, "(context||0)")}, ${Q(r, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${o.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${Q(r, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [W]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let r = 0; r < e.length; r++) {
          const o = ct(String(e[r]));
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
      [W]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const r = Rn.missing.method(t, n);
        return t.length - r.length >= e ? [] : r;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let r = Rn.missing.compile(t, n);
        return r || (r = n.compile`engine.methods.missing.method(${{
          [me]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, yl = {
    ...Rn
  }, V = {
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
      return t.methods[r].lazy ? typeof t.methods[r][W] == "function" ? t.methods[r][W](o, n) : t.methods[r][W] : typeof t.methods[r][W] == "function" ? t.methods[r][W](o, n) : t.methods[r][W] && xe(o, t, n);
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
  const _t = Jt("every", true), B = {
    "+": (e) => {
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
      if (e.length === 0) throw V;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return X(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw V;
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
      if (e.length < 2) throw V;
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
      if (!e.length || typeof e[0] != "number") throw V;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw V;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw V;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw V;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: io((e) => e, true),
      [W]: () => true
    },
    if: {
      [De]: true,
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
      [W]: (e, t) => xe(e, t.engine, t),
      deterministic: (e, t) => se(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
    "<": Ke("<", (e, t) => e < t),
    "<=": Ke("<=", (e, t) => e <= t),
    ">": Ke(">", (e, t) => e > t),
    ">=": Ke(">=", (e, t) => e >= t),
    "==": Ke("==", (e, t) => e == t),
    "===": Ke("===", (e, t) => e === t),
    "!=": Ke("!=", (e, t) => e != t),
    "!==": Ke("!==", (e, t) => e !== t),
    or: {
      [W]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
      [W]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), o != null) return o;
        return o === void 0 ? null : o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), o != null) return o;
        return o === void 0 ? null : o;
      },
      deterministic: (e, t) => se(e, t.engine, t),
      compile: (e, t) => dt ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
        const o = Q(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
      }).join(" ?? ")})` : `(${Q(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [W]: (e, t) => xe(e, t.engine, t),
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
            [me]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; `
          };
        }
        if (e.length > 1) for (let r = 1; r < e.length; r++) try {
          r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r === e.length - 1 ? n = t.compile`${n} throw ${{
            [me]: JSON.stringify(o)
          }} ` : n = t.compile`${n} ${{
            [me]: `context = ${JSON.stringify(o)};`
          }}`;
        }
        else n[me].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[me].includes("await") && (n[me] = n[me].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [W]: (e, t) => xe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = Y(e[s], r, t, n), !r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
        if (!e) throw V;
        const o = Y(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw V;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!e) throw V;
        const o = await Y(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw V;
      },
      deterministic: (e, t) => se(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, r) => B.val.method(e, t, n, r, _r) !== _r,
      deterministic: false
    },
    val: {
      [De]: true,
      [W]: true,
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
          return dt ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (xe(e, t.engine, t) && se(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(dt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let r = t.compile`context`;
          for (let o = 0; o < e.length; o++) e[o] !== null && (dt ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
          return n(t.compile`(${r})`);
        }
        return false;
      }
    },
    map: Jt("map"),
    some: {
      ...Jt("some", true),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
      [W]: _t[W],
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
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
        return _t.asyncMethod(e, t, n, r);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${_t.compile([
        {
          [me]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: _t.deterministic,
      lazy: _t.lazy
    },
    none: {
      [W]: (e, t) => xe(e, t.engine, t),
      lazy: true,
      method: (e, t, n, r) => !B.some.method(e, t, n, r),
      asyncMethod: async (e, t, n, r) => !await B.some.asyncMethod(e, t, n, r),
      compile: (e, t) => {
        const n = B.some.compile(e, t);
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
    filter: Jt("filter", true),
    reduce: {
      deterministic: (e, t) => se(e[0], t.engine, t) && se(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw V;
        const { async: n } = t;
        let [r, o, s] = e;
        r = Q(r, t), typeof s < "u" && (s = Q(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        o = nn(o, i);
        const l = o.aboveDetected ? "[null, context, above]" : "null", u = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(o), n && (!ot(o) || r.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${r} || []).reduce((a,b) => ${u}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${u}(${s}))` : `(${r} || []).reduce((a,b) => ${u}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        let [o, s, i] = e;
        i = Ge(Y(i, r, t, n), r.options.maxDepth), o = Y(o, r, t, n) || [];
        let l = (u, c) => Ge(r.run(s, {
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
          l = (c, d) => Ge(u({
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
      [W]: (e, t) => xe(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw V;
        let [o, s, i] = e;
        return i = Ge(await r.run(i, t, {
          above: n
        }), r.options.maxDepth), o = await r.run(o, t, {
          above: n
        }) || [], en.reduce(o, (l, u) => r.run(s, {
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
      [De]: true,
      [W]: true,
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
      [W]: (e, t) => xe(e, t.engine, t),
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
        for (let r = 1; r < e.length; r++) n = t.compile`${nn(e[r], {
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
      [W]: (e, t) => xe(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        throw V;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${Q(e[o], t)}`), r), []).join(",")} })`;
        throw V;
      },
      asyncMethod: async (e, t, n, r) => await en.reduce(Object.keys(e), async (s, i) => {
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
  function Ke(e, t) {
    const n = {
      [me]: e
    }, r = e.length === 3;
    return {
      method: (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw V;
        if (o.length === 2) {
          const c = Y(o[0], l, s, i), d = Y(o[1], l, s, i);
          if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+X(c))) throw NaN;
          if (Number.isNaN(+X(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let u = Y(o[0], l, s, i);
        for (let c = 1; c < o.length; c++) {
          const d = Y(o[c], l, s, i);
          if ((r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) && !t(u, d)) return false;
          if (Number.isNaN(+X(d)) && u !== null) throw NaN;
          if (c === 1 && Number.isNaN(+X(u))) throw NaN;
          if (!t(+u, +d)) return false;
          u = d;
        }
        return true;
      },
      asyncMethod: async (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw V;
        if (o.length === 2) {
          const c = await Y(o[0], l, s, i), d = await Y(o[1], l, s, i);
          if (r || (typeof c == "string" || c === null) && (typeof d == "string" || d === null)) return t(c, d);
          if (Number.isNaN(+X(c))) throw NaN;
          if (Number.isNaN(+X(d)) && c !== null) throw NaN;
          return t(+c, +d);
        }
        let u = await Y(o[0], l, s, i);
        for (let c = 1; c < o.length; c++) {
          const d = await Y(o[c], l, s, i);
          if ((r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) && !t(u, d)) return false;
          if (Number.isNaN(+X(d)) && u !== null) throw NaN;
          if (c === 1 && Number.isNaN(+X(u))) throw NaN;
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
      [De]: true,
      [W]: (o, s) => xe(o, s.engine, s),
      deterministic: (o, s) => se(o, s.engine, s),
      lazy: true
    };
  }
  function Jt(e, t = false) {
    return {
      deterministic: (n, r) => se(n[0], r.engine, r) && se(n[1], r.engine, {
        ...r,
        insideIterator: true
      }),
      [De]: true,
      [W]: (n, r) => xe(n, r.engine, r),
      method: (n, r, o, s) => {
        if (!Array.isArray(n)) throw V;
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
        if (!Array.isArray(n)) throw V;
        let [i, l] = n;
        return i = await s.run(i, r, {
          above: o
        }) || [], en[e](i, async (u, c) => {
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
        if (!Array.isArray(n)) throw V;
        const { async: o } = r, [s, i] = n, l = {
          ...r,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, u = nn(i, l), c = u.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, d = t ? r.compile`engine.truthy` : r.compile``;
        return o && !ot(u) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${d}(${u}(i, x, ${c})))`) : r.compile`(${s} || [])[${e}]((i, x, z) => ${d}(${u}(i, x, ${c})))`;
      },
      lazy: true
    };
  }
  B.every = B.all;
  B["?:"] = B.if;
  Object.keys(B).forEach((e) => {
    typeof B[e] == "function" && (B[e][W] = true), B[e].deterministic = typeof B[e].deterministic > "u" ? true : B[e].deterministic;
  });
  B.if.compile = function(e, t) {
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
  function Ft(e, t) {
    if (Array.isArray(e)) return X(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + Q(e, t);
    if (typeof e == "string") return "+" + X(+e);
    const n = Q(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + X(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? X(NaN) : `(+precoerceNumber(${n}))`;
  }
  B["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Ft(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${Q(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  B["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw V;
      return `precoerceNumber(${e.map((n) => Ft(n, t)).join(" % ")})`;
    }
    return `assertSize(${Q(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  B.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  B["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw V;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Ft(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${Q(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  B["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw V;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, r) => {
        let o = Ft(n, t);
        return r && o === "+0" && X(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${Q(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  B["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Ft(n, t)).join(" * ")})` : `(${Q(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  B["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  B.not = B["!"];
  B["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  B.none.deterministic = B.some.deterministic;
  B.throw.deterministic = (e, t) => t.insideTry && se(e, t.engine, t);
  B["+"].optimizeUnary = B["-"].optimizeUnary = B["!"].optimizeUnary = B["!!"].optimizeUnary = B.cat.optimizeUnary = B.throw.optimizeUnary = true;
  const bl = {
    ...B,
    ...yl
  }, _l = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function xl(e, t, n, r) {
    const o = t.methods[n], s = o.method ? o.method : o;
    if (o.lazy) {
      const l = e[n];
      return (u, c) => s(l, u, c || r, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !o.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && o.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((u) => ge(u, t, r));
      if (l.every((u) => typeof u != "function")) return (u, c) => s(l, u, c || r, t);
      if (l.length === 1) {
        const u = l[0];
        return (c, d) => s([
          u(c, d)
        ], c, d || r, t);
      }
      if (l.length === 2) {
        const [u, c] = l;
        return typeof u == "function" && typeof c == "function" ? (d, p) => s([
          u(d, p),
          c(d, p)
        ], d, p || r, t) : typeof u == "function" ? (d, p) => s([
          u(d, p),
          c
        ], d, p || r, t) : (d, p) => s([
          u,
          c(d, p)
        ], d, p || r, t);
      }
      return (u, c) => {
        const d = l.map((p) => typeof p == "function" ? p(u, c) : p);
        return s(d, u, c || r, t);
      };
    } else {
      const l = ge(i, t, r);
      if (o.optimizeUnary) {
        const u = (c) => !c || typeof c[l] > "u" || typeof c[l] == "function" && !t.allowFunctions ? null : c[l];
        if (typeof l == "function") return (c, d) => s(l(c, d), c, d || r, t);
        if ((n === "var" || n === "val") && t.methods[n][De]) {
          if (!l && n !== "val") return (c) => c === null || typeof c > "u" || typeof c == "function" && !t.allowFunctions ? null : c;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return u;
          if (n === "var" && !l.startsWith("../")) {
            const c = ct(String(l));
            let d;
            if (c.length === 2) {
              const [p, f] = c;
              return (g) => (typeof (d = g && g[p] && g[p][f]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
            if (c.length === 3) {
              const [p, f, g] = c;
              return (h) => (typeof (d = h && h[p] && h[p][f] && h[p][f][g]) != "function" || t.allowFunctions) && typeof d < "u" ? d : null;
            }
          }
        }
        return (c, d) => s(l, c, d || r, t);
      }
      return typeof l == "function" ? (u, c) => s($t(l(u, c)), u, c || r, t) : (u, c) => s($t(l), u, c || r, t);
    }
  }
  const vr = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function vl(e, t, n) {
    if (e.val && t.methods.val[De] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[De] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [r, o, s] = e.if || e["?:"], i = ge(r, t, n), l = ge(o, t, n), u = ge(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof u == "function" ? (c, d) => t.truthy(i(c, d)) ? l(c, d) : u(c, d) : typeof i == "function" && typeof l == "function" ? (c, d) => t.truthy(i(c, d)) ? l(c, d) : u : typeof i == "function" && typeof u == "function" ? (c, d) => t.truthy(i(c, d)) ? l : u(c, d) : typeof i == "function" ? (c, d) => t.truthy(i(c, d)) ? l : u : t.truthy(i) ? l : u;
    }
    if (e.filter && t.methods.filter[De] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [r, o] = e.filter, s = ge(o, t, n);
      if (typeof s != "function") return t.truthy(s) ? ge(r, t, n) : [];
    }
    for (const r in vr) if (e[r] && Array.isArray(e[r]) && t.methods[r][De]) {
      const o = vr[r], s = r.length === 3 ? o : function(l, u) {
        if ((typeof l == "string" || l === null) && (typeof u == "string" || u === null)) return o(l, u);
        if (Number.isNaN(+X(l))) throw NaN;
        if (Number.isNaN(+X(u)) && l !== null) throw NaN;
        return o(+l, +u);
      };
      if (e[r].length === 2) {
        const [i, l] = e[r], u = ge(i, t, n), c = ge(l, t, n);
        return typeof u == "function" && typeof c == "function" ? (d, p) => s(u(d, p), c(d, p)) : typeof u == "function" ? (d, p) => s(u(d, p), c) : typeof c == "function" ? (d, p) => s(u, c(d, p)) : s(u, c);
      }
      if (e[r].length === 3) {
        const [i, l, u] = e[r], c = ge(i, t, n), d = ge(l, t, n), p = ge(u, t, n);
        let f;
        return typeof c == "function" && typeof d == "function" && typeof p == "function" ? (g, h) => s(c(g, h), f = d(g, h)) && s(f, p(g, h)) : typeof c == "function" && typeof d == "function" ? (g, h) => s(c(g, h), f = d(g, h)) && s(f, p) : typeof c == "function" && typeof p == "function" ? (g, h) => s(c(g, h), d) && s(d, p(g, h)) : typeof d == "function" && typeof p == "function" ? (g, h) => s(c, f = d(g, h)) && s(f, p(g, h)) : typeof c == "function" ? (g, h) => s(c(g, h), d) && s(d, p) : typeof d == "function" ? (g, h) => s(c, f = d(g, h)) && s(f, p) : typeof p == "function" ? (g, h) => s(c, d) && s(d, p(g, h)) : s(c, d) && s(d, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [r, o, s] = e.reduce;
      if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
        const i = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", l = o["+"][0].var === "current" || o["+"][1].var === "current";
        if (s = s || 0, i && l) return ge({
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
        if (s = typeof s > "u" ? 1 : s, i && l) return ge({
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
  function ge(e, t, n = []) {
    if (Array.isArray(e)) {
      const r = e.map((o) => ge(o, t, n));
      return r.every((o) => typeof o != "function") ? r : (o, s) => r.map((i) => typeof i == "function" ? i(o, s) : i);
    }
    if (e && typeof e == "object") {
      const r = vl(e, t, n);
      if (typeof r < "u") return r;
      const o = Object.keys(e), s = o[0];
      if (o.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (o.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && tn(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const u = xl(e, t, s, n);
        return l ? u() : u;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class Cl {
    constructor(t = bl, n = {
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
      if ((o === "var" || o === "val") && this.methods[o][De]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: r
        });
        return this.methods[o].method(l, n, r, this, null);
      }
      if (typeof this.methods[o] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : $t(this.run(i, n, {
          above: r
        }));
        return this.methods[o](l, n, r, this);
      }
      if (typeof this.methods[o] == "object") {
        const { method: l, lazy: u } = this.methods[o], c = u ? i : !i || typeof i != "object" ? [
          i
        ] : $t(this.run(i, n, {
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
      }, Object.assign(n, _l({
        deterministic: r,
        optimizeUnary: o
      })), this.methods[t] = io(n);
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
        this.optimizedMap.set(t, ge(t, this, o)), this.missesSinceSeen++;
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
      const { above: r = [], top: o = true } = n, s = nn(t, {
        engine: this,
        above: r
      });
      return o === false && s.deterministic ? s() : s;
    }
  }
  function Re(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const sn = new Cl();
  sn.addMethod("contains", ([e, t]) => Re(e).includes(Re(t)), {
    deterministic: true
  });
  sn.addMethod("startsWith", ([e, t]) => Re(e).startsWith(Re(t)), {
    deterministic: true
  });
  sn.addMethod("endsWith", ([e, t]) => Re(e).endsWith(Re(t)), {
    deterministic: true
  });
  function xt() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Mn = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), wl = {
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
  }, jl = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], Sl = {
    var: "value"
  };
  function Rl(e, t, n = "string") {
    const r = Number(t), o = n === "number", s = n === "date", i = Sl;
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
  const Ml = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function Il(e, t = "string") {
    const n = e.conditions.filter((o) => Mn.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && Ml.has(o.operator) && isNaN(Number(o.operand))));
    if (n.length === 0) return;
    const r = n.map((o) => Rl(o.operator, o.operand, t));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function Ve(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function gn(e) {
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
      if (Array.isArray(r) && r.length === 2 && Ve(r[0])) return {
        operator: n,
        operand: Re(r[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && Ve(t[0])) return t[1] === true ? {
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
      if (Array.isArray(t) && t.length === 2 && Ve(t[0])) return {
        operator: "neq",
        operand: Re(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && Ve(t[0])) return {
        operator: "contains",
        operand: Re(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && Ve(t[0])) return {
        operator: "starts_with",
        operand: Re(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && Ve(t[0])) return {
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
          if (Array.isArray(r) && Ve(r[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const r = n.contains;
          if (Array.isArray(r) && r.length === 2 && Ve(r[0])) return {
            operator: "not_contains",
            operand: Re(r[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && Ve(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Cr(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: xt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const r = n.map((o) => gn(o)).filter((o) => o !== null).map((o) => ({
          id: xt(),
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
        const r = n.map((o) => gn(o)).filter((o) => o !== null).map((o) => ({
          id: xt(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "or",
          conditions: r
        };
      }
    }
    const t = gn(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: xt(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: xt(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const Al = 200, vt = /* @__PURE__ */ new Map();
  function $l(e, t) {
    try {
      const n = JSON.stringify(e);
      let r = vt.get(n);
      if (!r) {
        if (r = sn.build(e), vt.size >= Al) {
          const o = vt.keys().next().value;
          o && vt.delete(o);
        }
        vt.set(n, r);
      }
      return !!r({
        value: t
      });
    } catch {
      return false;
    }
  }
  const Fl = /\.(png|jpe?g|gif|svg|webp|avif|bmp|ico|apng|tiff?)$/i, lo = "data:image/";
  function zl(e) {
    if (e.length === 0 || e.length > 2) return false;
    for (let t = 0; t < e.length; t++) if (e.charCodeAt(t) > 127) return true;
    return false;
  }
  function ao(e) {
    return typeof e != "string" ? null : e.trim() || null;
  }
  function Dl(e) {
    const t = ao(e);
    return t ? t.startsWith(lo) ? true : Fl.test(t) : false;
  }
  function Tl(e) {
    const t = ao(e);
    return t ? t.startsWith(lo) || Wr(t) ? true : zl(t) : false;
  }
  function Pl(e, t) {
    var _a2, _b;
    let n = false, r, o = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (o = oo(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          o = On(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          o = jn(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          o = so(String(o), t.format);
          break;
        case "image": {
          if (e != null && Tl(e)) {
            const c = t.format, d = e.trim(), p = c.imageTint || void 0;
            r = {
              src: d,
              size: c.imageSize ?? Mt.size,
              objectFit: c.imageObjectFit ?? Mt.objectFit,
              variant: c.imageVariant ?? "square",
              bgColor: c.imageBgColor || void 0,
              borderColor: c.imageBorderColor || void 0,
              borderWidth: c.imageBorderWidth,
              tint: p,
              tooltip: c.imageTooltip !== false ? d : void 0,
              showBroken: c.imageShowBroken !== false
            }, o = "";
          } else e == null && (o = "");
          break;
        }
      }
    } catch {
    }
    if (!t) return {
      displayValue: o,
      textSx: {},
      bgSx: {}
    };
    const s = !t.cellStyleMode || t.cellStyleMode === "first-match", i = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? Zi(e, t.format.dateInputFormat) : e, l = {}, u = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const c of t.cellStyle) if (c.logic && $l(c.logic, i)) {
        if (c.backgroundColor && !("background" in l) && !("backgroundColor" in l)) {
          const d = nt(c.backgroundColor);
          d ? l.background = d : l.backgroundColor = c.backgroundColor;
        }
        if (c.textColor && !("color" in u) && !("background" in u)) {
          const d = nt(c.textColor);
          d ? (u.background = d, u.backgroundClip = "text", u.WebkitBackgroundClip = "text", u.color = "transparent") : u.color = c.textColor;
        }
        if (c.fontWeight && !u.fontWeight && (u.fontWeight = c.fontWeight), c.fontStyle && !u.fontStyle && (u.fontStyle = c.fontStyle), s) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !u.fontWeight && (u.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !u.fontStyle && (u.fontStyle = "italic"), t.format.stringFontSize && !u.fontSize && (u.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in u) && !("background" in u) && (u.color = t.format.stringTextColor)), {
      displayValue: o,
      textSx: u,
      bgSx: l,
      isTruncated: n,
      image: r
    };
  }
  function wr({ value: e, config: t, valueSize: n }) {
    var _a2;
    const { displayValue: r, textSx: o, bgSx: s, isTruncated: i, image: l } = y.useMemo(() => Pl(e, t), [
      e,
      t
    ]);
    if (l) {
      const u = t == null ? void 0 : t.align, c = u === "left" ? "flex-start" : u === "right" ? "flex-end" : "center", d = (_a2 = t == null ? void 0 : t.format) == null ? void 0 : _a2.imagePadding, p = d ? `${d.top ?? 0}px ${d.right ?? 0}px ${d.bottom ?? 0}px ${d.left ?? 0}px` : "0 8px";
      return a.jsx($, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: c,
          padding: p,
          ...s
        },
        children: a.jsx(uo, {
          descriptor: l
        })
      });
    }
    return a.jsxs($, {
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
        a.jsx(w, {
          variant: "body2",
          component: $,
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
        i && a.jsx(Ue, {
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
  function uo({ descriptor: e }) {
    const { src: t, size: n, objectFit: r, variant: o, bgColor: s, borderColor: i, borderWidth: l, tint: u, tooltip: c, showBroken: d } = e, [p, f] = y.useState(false);
    if (p) return d ? a.jsx(eo, {
      sx: {
        fontSize: n,
        maxWidth: "100%",
        maxHeight: "100%",
        color: "text.disabled",
        opacity: 0.5
      }
    }) : null;
    const g = {
      height: n,
      width: "auto",
      aspectRatio: "1 / 1",
      maxWidth: "100%",
      maxHeight: "100%",
      flexShrink: 0
    }, h = o === "circular" ? "50%" : o === "rounded" ? "25%" : 0, b = i && l ? `${l}px solid ${i}` : void 0, _ = {
      ...g,
      bgcolor: s || "transparent",
      borderRadius: h,
      ...b ? {
        border: b
      } : {}
    };
    if (!t.startsWith("data:") && !Wr(t)) return a.jsx(cn, {
      variant: o,
      title: c,
      sx: {
        ..._,
        fontSize: n,
        lineHeight: 1,
        ...u ? {
          color: u
        } : {}
      },
      children: t
    });
    if (u) {
      const v = `url("${t}")`, R = r === "fill" ? "100% 100%" : r;
      return a.jsx(cn, {
        variant: o,
        title: c,
        sx: _,
        children: a.jsx($, {
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: u,
            WebkitMaskMode: "alpha",
            maskMode: "alpha",
            WebkitMaskImage: v,
            maskImage: v,
            WebkitMaskSize: R,
            maskSize: R,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center"
          }
        })
      });
    }
    return a.jsx(cn, {
      variant: o,
      src: t,
      alt: c ?? "",
      title: c,
      sx: {
        ..._,
        "& .MuiAvatar-img": {
          objectFit: r
        }
      },
      slotProps: {
        img: {
          onError: () => f(true)
        }
      }
    });
  }
  const jr = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3E%3Crect%20width='24'%20height='24'%20fill='%23000'/%3E%3C/svg%3E";
  function kl({ format: e, onChange: t }) {
    var _a2, _b, _c, _d;
    const n = {
      src: jr,
      size: e.imageSize ?? Mt.size,
      objectFit: e.imageObjectFit ?? Mt.objectFit,
      variant: e.imageVariant ?? "square",
      bgColor: e.imageBgColor || void 0,
      borderColor: e.imageBorderColor || void 0,
      borderWidth: e.imageBorderWidth,
      tint: e.imageTint || void 0,
      tooltip: e.imageTooltip !== false ? jr : void 0,
      showBroken: e.imageShowBroken !== false
    }, r = (o, s) => {
      const i = parseInt(s, 10);
      t({
        type: "image",
        imagePadding: {
          ...e.imagePadding,
          [o]: Number.isFinite(i) ? i : void 0
        }
      });
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_image_format")
        }),
        a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(J, {
              label: m.t("json_table_image_size"),
              type: "number",
              value: e.imageSize ?? "",
              onChange: (o) => {
                const s = parseInt(o.target.value, 10);
                t({
                  type: "image",
                  imageSize: Number.isFinite(s) ? s : void 0
                });
              },
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 8,
                  max: 256
                }
              },
              placeholder: "px"
            }),
            a.jsxs(ke, {
              size: "small",
              sx: {
                minWidth: 120
              },
              children: [
                a.jsx(Ee, {
                  children: m.t("json_table_image_object_fit")
                }),
                a.jsxs(ze, {
                  label: m.t("json_table_image_object_fit"),
                  value: e.imageObjectFit ?? "contain",
                  onChange: (o) => t({
                    type: "image",
                    imageObjectFit: o.target.value
                  }),
                  children: [
                    a.jsx(L, {
                      value: "contain",
                      children: m.t("json_table_image_object_fit_contain")
                    }),
                    a.jsx(L, {
                      value: "cover",
                      children: m.t("json_table_image_object_fit_cover")
                    }),
                    a.jsx(L, {
                      value: "fill",
                      children: m.t("json_table_image_object_fit_fill")
                    })
                  ]
                })
              ]
            })
          ]
        }),
        a.jsxs(ke, {
          size: "small",
          fullWidth: true,
          children: [
            a.jsx(Ee, {
              children: m.t("json_table_image_variant")
            }),
            a.jsxs(ze, {
              label: m.t("json_table_image_variant"),
              value: e.imageVariant ?? "square",
              onChange: (o) => t({
                type: "image",
                imageVariant: o.target.value
              }),
              children: [
                a.jsx(L, {
                  value: "square",
                  children: m.t("json_table_image_variant_square")
                }),
                a.jsx(L, {
                  value: "circular",
                  children: m.t("json_table_image_variant_circular")
                }),
                a.jsx(L, {
                  value: "rounded",
                  children: m.t("json_table_image_variant_rounded")
                })
              ]
            })
          ]
        }),
        a.jsx(ft, {
          label: m.t("json_table_image_bg_color"),
          value: e.imageBgColor ?? "",
          overridden: !!e.imageBgColor,
          onChange: (o) => t({
            type: "image",
            imageBgColor: o || void 0
          })
        }),
        a.jsx(ft, {
          label: m.t("json_table_image_border_color"),
          value: e.imageBorderColor ?? "",
          overridden: !!e.imageBorderColor,
          onChange: (o) => t({
            type: "image",
            imageBorderColor: o || void 0
          })
        }),
        a.jsx(J, {
          label: m.t("json_table_image_border_width"),
          type: "number",
          value: e.imageBorderWidth ?? "",
          onChange: (o) => {
            const s = parseInt(o.target.value, 10);
            t({
              type: "image",
              imageBorderWidth: Number.isFinite(s) ? s : void 0
            });
          },
          size: "small",
          fullWidth: true,
          slotProps: {
            htmlInput: {
              min: 0,
              max: 16
            }
          },
          placeholder: "px"
        }),
        a.jsx(ft, {
          label: m.t("json_table_image_tint"),
          value: e.imageTint ?? "",
          overridden: !!e.imageTint,
          onChange: (o) => t({
            type: "image",
            imageTint: o || void 0
          })
        }),
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          children: m.t("json_table_image_tint_hint")
        }),
        a.jsx(Xt, {}),
        a.jsx(qe, {
          control: a.jsx(rt, {
            size: "small",
            checked: e.imageTooltip !== false,
            onChange: (o) => t({
              type: "image",
              imageTooltip: o.target.checked
            })
          }),
          label: a.jsx(w, {
            variant: "body2",
            children: m.t("json_table_image_tooltip")
          })
        }),
        a.jsx(qe, {
          control: a.jsx(rt, {
            size: "small",
            checked: e.imageShowBroken !== false,
            onChange: (o) => t({
              type: "image",
              imageShowBroken: o.target.checked
            })
          }),
          label: a.jsx(w, {
            variant: "body2",
            children: m.t("json_table_image_show_broken")
          })
        }),
        a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: m.t("json_table_image_padding")
        }),
        a.jsxs(ue, {
          direction: "row",
          spacing: 1,
          children: [
            a.jsx(J, {
              label: m.t("json_table_image_padding_top"),
              type: "number",
              value: ((_a2 = e.imagePadding) == null ? void 0 : _a2.top) ?? "",
              onChange: (o) => r("top", o.target.value),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 0,
                  max: 64
                }
              },
              placeholder: "px"
            }),
            a.jsx(J, {
              label: m.t("json_table_image_padding_right"),
              type: "number",
              value: ((_b = e.imagePadding) == null ? void 0 : _b.right) ?? "",
              onChange: (o) => r("right", o.target.value),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 0,
                  max: 64
                }
              },
              placeholder: "px"
            }),
            a.jsx(J, {
              label: m.t("json_table_image_padding_bottom"),
              type: "number",
              value: ((_c = e.imagePadding) == null ? void 0 : _c.bottom) ?? "",
              onChange: (o) => r("bottom", o.target.value),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 0,
                  max: 64
                }
              },
              placeholder: "px"
            }),
            a.jsx(J, {
              label: m.t("json_table_image_padding_left"),
              type: "number",
              value: ((_d = e.imagePadding) == null ? void 0 : _d.left) ?? "",
              onChange: (o) => r("left", o.target.value),
              size: "small",
              sx: {
                flex: 1
              },
              slotProps: {
                htmlInput: {
                  min: 0,
                  max: 64
                }
              },
              placeholder: "px"
            })
          ]
        }),
        a.jsxs(Le, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: m.t("json_table_preview")
            }),
            a.jsxs($, {
              sx: {
                mt: 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                height: 64
              },
              children: [
                a.jsx(uo, {
                  descriptor: n
                }),
                e.imageShowBroken !== false && a.jsx(eo, {
                  sx: {
                    fontSize: e.imageSize ?? Mt.size,
                    color: "text.disabled",
                    opacity: 0.5
                  }
                })
              ]
            })
          ]
        })
      ]
    });
  }
  const El = {
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
  function Nl({ label: e, value: t, onChange: n, inputType: r }) {
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
    return a.jsx(J, {
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
  function Ol({ logic: e, columnType: t, onChange: n }) {
    const [r, o] = y.useState(() => Cr(e));
    y.useEffect(() => {
      o(Cr(e));
    }, [
      e
    ]);
    const s = wl[t] ?? jl, i = y.useCallback((f) => {
      o(f), n(Il(f, t));
    }, [
      n,
      t
    ]), l = y.useCallback((f, g) => {
      const h = r.conditions.map((b, _) => _ === f ? {
        ...b,
        ...g
      } : b);
      i({
        ...r,
        conditions: h
      });
    }, [
      r,
      i
    ]), u = y.useCallback((f) => {
      const g = r.conditions.filter((h, b) => b !== f);
      i({
        ...r,
        conditions: g
      });
    }, [
      r,
      i
    ]), c = y.useCallback(() => {
      const f = s[0] ?? "eq";
      i({
        ...r,
        conditions: [
          ...r.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: f,
            operand: ""
          }
        ]
      });
    }, [
      r,
      i,
      s
    ]), d = y.useCallback((f, g) => {
      g !== null && i({
        ...r,
        mode: g
      });
    }, [
      r,
      i
    ]), p = r.conditions.length > 1;
    return a.jsxs(ue, {
      spacing: 1,
      children: [
        p && a.jsxs($, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(Gr, {
              value: r.mode,
              exclusive: true,
              onChange: d,
              size: "small",
              "aria-label": m.t("json_table_condition_mode_label"),
              children: [
                a.jsx(Qt, {
                  value: "and",
                  "aria-label": m.t("json_table_condition_mode_all"),
                  children: m.t("json_table_condition_mode_all")
                }),
                a.jsx(Qt, {
                  value: "or",
                  "aria-label": m.t("json_table_condition_mode_any"),
                  children: m.t("json_table_condition_mode_any")
                })
              ]
            }),
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: r.mode === "and" ? m.t("json_table_condition_mode_hint_and") : m.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        r.conditions.map((f, g) => {
          const h = !Mn.has(f.operator), b = t === "date" ? "date" : t === "number" ? "number" : "text";
          return a.jsxs($, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              a.jsxs(ke, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  a.jsx(Ee, {
                    children: m.t("json_table_condition_operator")
                  }),
                  a.jsx(ze, {
                    label: m.t("json_table_condition_operator"),
                    value: f.operator,
                    onChange: (_) => {
                      const x = _.target.value, v = Mn.has(x) ? "" : f.operand;
                      l(g, {
                        operator: x,
                        operand: v
                      });
                    },
                    children: s.map((_) => a.jsx(L, {
                      value: _,
                      children: m.t(El[_])
                    }, _))
                  })
                ]
              }),
              h && a.jsx(Nl, {
                label: m.t("json_table_condition_value"),
                value: f.operand ?? "",
                onChange: (_) => l(g, {
                  operand: _
                }),
                inputType: b
              }),
              p && a.jsx(ve, {
                title: m.t("json_table_condition_remove"),
                children: a.jsx(ae, {
                  size: "small",
                  onClick: () => u(g),
                  "aria-label": m.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: a.jsx(Zt, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, f.id ?? g);
        }),
        a.jsx(Oe, {
          startIcon: a.jsx(Xr, {}),
          onClick: c,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": m.t("json_table_condition_add"),
          children: p ? m.t("json_table_condition_add") : m.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function Ll({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
    const s = y.useCallback((d, p) => {
      const f = [
        ...e || []
      ];
      f[d] = {
        ...f[d],
        ...p
      }, r(f);
    }, [
      e,
      r
    ]), i = y.useCallback((d) => {
      const p = [
        ...e || []
      ];
      p.splice(d, 1), r(p);
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
      const p = [
        ...e || []
      ];
      [p[d - 1], p[d]] = [
        p[d],
        p[d - 1]
      ], r(p);
    }, [
      e,
      r
    ]), c = y.useCallback((d) => {
      const p = e || [];
      if (d >= p.length - 1) return;
      const f = [
        ...p
      ];
      [f[d], f[d + 1]] = [
        f[d + 1],
        f[d]
      ], r(f);
    }, [
      e,
      r
    ]);
    return a.jsxs(ue, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && a.jsxs($, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            a.jsxs(Gr, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (d, p) => {
                p && o(p);
              },
              "aria-label": m.t("json_table_cell_style_mode_label"),
              children: [
                a.jsx(Qt, {
                  value: "first-match",
                  "aria-label": m.t("json_table_cell_style_mode_first"),
                  children: m.t("json_table_cell_style_mode_first")
                }),
                a.jsx(Qt, {
                  value: "all-match",
                  "aria-label": m.t("json_table_cell_style_mode_all"),
                  children: m.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            a.jsx(w, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? m.t("json_table_cell_style_mode_hint_first") : m.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && a.jsxs($, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            a.jsx(w, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: m.t("json_table_no_style_rules")
            }),
            a.jsx(w, {
              variant: "caption",
              children: m.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((d, p) => {
          const f = (e || []).length, g = d.backgroundColor ? nt(d.backgroundColor) : void 0, h = d.textColor ? nt(d.textColor) : void 0;
          return a.jsx(Le, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: a.jsxs(ue, {
              spacing: 1.5,
              children: [
                a.jsxs($, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    a.jsx($, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: a.jsxs(w, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          m.t("json_table_rule"),
                          " ",
                          p + 1
                        ]
                      })
                    }),
                    a.jsxs($, {
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
                              onClick: () => u(p),
                              disabled: p === 0,
                              "aria-label": m.t("json_table_rule_move_up"),
                              children: a.jsx(Zr, {
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
                              onClick: () => c(p),
                              disabled: p >= f - 1,
                              "aria-label": m.t("json_table_rule_move_down"),
                              children: a.jsx(Qr, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        a.jsx(ve, {
                          title: m.t("json_table_delete_rule"),
                          children: a.jsx(ae, {
                            size: "small",
                            onClick: () => i(p),
                            color: "error",
                            "aria-label": m.t("json_table_delete_rule"),
                            children: a.jsx(es, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                a.jsx(Ol, {
                  logic: d.logic,
                  columnType: n,
                  onChange: (b) => s(p, {
                    logic: b
                  })
                }, d.id ?? p),
                a.jsxs(ue, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    a.jsx(ft, {
                      label: m.t("json_table_bg_color"),
                      value: d.backgroundColor || "",
                      overridden: !!d.backgroundColor,
                      onChange: (b) => s(p, {
                        backgroundColor: b || void 0
                      })
                    }),
                    a.jsx(ft, {
                      label: m.t("json_table_text_color"),
                      value: d.textColor || "",
                      overridden: !!d.textColor,
                      onChange: (b) => s(p, {
                        textColor: b || void 0
                      })
                    })
                  ]
                }),
                a.jsxs(ue, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    a.jsx(qe, {
                      control: a.jsx(At, {
                        checked: d.fontWeight === "bold",
                        onChange: (b) => s(p, {
                          fontWeight: b.target.checked ? "bold" : "normal"
                        }),
                        icon: a.jsx(hr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(hr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(w, {
                        variant: "caption",
                        children: m.t("json_table_bold")
                      })
                    }),
                    a.jsx(qe, {
                      control: a.jsx(At, {
                        checked: d.fontStyle === "italic",
                        onChange: (b) => s(p, {
                          fontStyle: b.target.checked ? "italic" : "normal"
                        }),
                        icon: a.jsx(mr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: a.jsx(mr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: a.jsx(w, {
                        variant: "caption",
                        children: m.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (d.backgroundColor || d.textColor || d.fontWeight === "bold" || d.fontStyle === "italic") && a.jsx(Le, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...d.backgroundColor ? g ? {
                      background: g
                    } : {
                      backgroundColor: d.backgroundColor
                    } : {},
                    fontWeight: d.fontWeight || "normal",
                    fontStyle: d.fontStyle || "normal"
                  },
                  children: a.jsx(w, {
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
          }, d.id ?? p);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && a.jsx(w, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? m.t("json_table_rules_priority_hint") : m.t("json_table_rules_all_match_hint")
        }),
        a.jsx(Oe, {
          startIcon: a.jsx(Xr, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: m.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function Hl({ globalSorting: e, globalFiltering: t }) {
    return a.jsxs($, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        a.jsx(w, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: m.t("json_table_global_status")
        }),
        a.jsxs($, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            a.jsx(Ue, {
              size: "small",
              icon: e ? a.jsx(pr, {}) : a.jsx(Zt, {}),
              label: `${m.t("json_table_sorting")}: ${e ? m.t("json_table_status_on") : m.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            a.jsx(Ue, {
              size: "small",
              icon: t ? a.jsx(pr, {}) : a.jsx(Zt, {}),
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
  function tt(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function Sr(e) {
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
        const [, s, i, l, u = "0", c = "0", d = "0"] = n, p = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(u, 10), parseInt(c, 10), parseInt(d, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
      }
      const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (r) {
        const [, s, i, l, u = "0", c = "0", d = "0"] = r, p = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(u, 10), parseInt(c, 10), parseInt(d, 10));
        return isNaN(p.getTime()) ? null : p.getTime();
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
  function Rr(e) {
    const t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime();
  }
  function Bl(e, t, n) {
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
    const r = tt(e), o = tt(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const c = Sr(e), d = Sr(n);
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
  function Mr(e, t, n, r) {
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = wn(e, r), s = wn(n, r);
    if (o === null || s === null) return false;
    const i = Rr(o), l = Rr(s);
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
  function Ir(e) {
    return (t, n, r) => {
      if (r == null) return true;
      if (typeof r == "object" && r !== null && "operator" in r) {
        const o = r;
        return Mr(t.getValue(n), o.operator, o.value, e);
      }
      return typeof r == "string" || typeof r == "number" ? Mr(t.getValue(n), "equals", r, e) : true;
    };
  }
  const Vl = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const o = e.getValue(t);
      return o == null ? false : tt(o).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const o = e.getValue(t);
      if (o == null) return false;
      const s = Number(o);
      return isNaN(s) ? tt(o).includes(tt(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const o = n, s = e.getValue(t);
      return Bl(s, o.operator, o.value);
    }
    const r = e.getValue(t);
    return r == null ? false : tt(r).includes(tt(n));
  }, Wl = {
    advanced: Vl
  };
  function zt(e) {
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
      case "image":
        return {
          sortable: false,
          filterable: false,
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
  function Gl(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : zt(t).sortable && n !== false;
  }
  function Ul(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : zt(t).filterable && n === true;
  }
  function ql(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : zt(t).hiding && n !== false;
  }
  function Ar(e, t) {
    return wn(e, t) ?? 0;
  }
  function $r(e) {
    return (t, n, r) => Ar(t.getValue(r), e) - Ar(n.getValue(r), e);
  }
  function Yl(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, u = new Map(n.map((f) => [
      f.path,
      f.dateFormat
    ])), c = new Map(n.map((f) => [
      f.path,
      f.type
    ])), d = r.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: f }) => i(f),
      cell: ({ row: f }) => l(f),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let p;
    return t.length > 0 ? p = t.filter((f) => f.visible).map((f) => {
      var _a2, _b;
      const g = ((_a2 = f.format) == null ? void 0 : _a2.dateInputFormat) ?? u.get(f.path), h = c.get(f.path) || "string", b = ((_b = f.format) == null ? void 0 : _b.type) === "date" || h === "date";
      return {
        id: f.path,
        size: f.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[f.path]) ?? null,
        header: f.headerName || f.path,
        enableSorting: Gl(f, h, r.tableSorting),
        enableColumnFilter: Ul(f, h, r.tableFiltering),
        enableHiding: ql(f, h, r.tableHiding),
        ...b && {
          sortingFn: $r(g),
          filterFn: Ir(g)
        },
        cell: ({ getValue: x }) => o(x(), !f.format && h === "image" ? {
          ...f,
          format: {
            type: "image"
          }
        } : f),
        meta: {
          align: f.align || "left",
          width: f.width,
          columnType: b ? "date" : h
        }
      };
    }) : p = n.map((f) => {
      const g = f.type === "date" && f.dateFormat, h = f.dateFormat, b = zt(f.type);
      return {
        id: f.path,
        size: 150,
        accessorFn: (x) => x[f.path],
        header: f.path.split(".").pop() || f.path,
        enableSorting: b.sortable && r.tableSorting,
        enableColumnFilter: b.filterable && r.tableFiltering,
        enableHiding: b.hiding && r.tableHiding,
        ...g && {
          sortingFn: $r(h),
          filterFn: Ir(h)
        },
        cell: ({ getValue: x }) => {
          const v = x();
          return f.type === "image" ? o(v, {
            path: f.path,
            visible: true,
            headerName: f.path.split(".").pop() || f.path,
            format: {
              type: "image"
            }
          }) : s(v);
        },
        meta: {
          align: f.type === "image" ? "center" : "left",
          columnType: f.type
        }
      };
    }), d ? [
      d,
      ...p
    ] : p;
  }
  function Fr({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
    const s = t === "auto" || t === void 0, i = zt(r), l = o === "sortable" ? i.sortable : i.filterable;
    let u, c;
    t === "auto" || t === void 0 ? (u = l && e, c = "json_table_source_auto") : (u = t, c = "json_table_source_override");
    const d = t !== void 0 && t !== "auto", p = (g, h) => g.replace(/\{(\w+)\}/g, (b, _) => _ in h ? h[_] : b);
    let f;
    return t === "auto" || t === void 0 ? f = p(m.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? m.t("json_table_status_on") : m.t("json_table_status_off"),
      type: r
    }) : f = p(m.t("json_table_override_tooltip"), {
      feature: n
    }), a.jsx(ve, {
      title: f,
      arrow: true,
      children: a.jsxs($, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          a.jsx(Ue, {
            size: "small",
            label: a.jsx($, {
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
          a.jsxs(w, {
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
              s && a.jsx(Oi, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              d && a.jsx(Li, {
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
  function Jl({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
    var _a2, _b, _c, _d, _e, _f, _g;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((M) => {
      i((A) => ({
        ...A,
        [M]: !A[M]
      }));
    }, []), u = (t == null ? void 0 : t.type) || "string", c = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((M, A) => M + A, 0) : 0, [
      t
    ]), d = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), p = y.useMemo(() => e.headerName !== d || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      d
    ]), f = y.useCallback(() => {
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
    ]), g = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: M, ...A } = e;
      n(A);
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
      const { cellStyle: M, cellStyleMode: A, ...S } = e;
      n(S);
    }, [
      e,
      n
    ]), x = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), v = y.useCallback(() => {
      const { sortable: M, filterable: A, ...S } = e;
      n({
        ...S,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), R = y.useCallback((M) => {
      var _a3, _b2;
      const A = {
        ...e.format
      };
      if (M.type && M.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const S = (_b2 = e.format) == null ? void 0 : _b2.type;
        S === "number" ? (delete A.numberDecimals, delete A.numberPrefix, delete A.numberSuffix, delete A.numberThousandsSeparator) : S === "date" ? (delete A.dateFormat, delete A.dateInputFormat) : S === "boolean" ? (delete A.booleanTrue, delete A.booleanFalse) : S === "string" ? [
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
        ].forEach((H) => {
          delete A[H];
        }) : S === "image" && (delete A.imageSize, delete A.imageObjectFit, delete A.imageVariant, delete A.imageBgColor, delete A.imageBorderColor, delete A.imageBorderWidth, delete A.imageTint, delete A.imageTooltip, delete A.imageShowBroken, delete A.imagePadding);
      }
      n({
        ...e,
        format: {
          ...A,
          ...M
        }
      });
    }, [
      e,
      n
    ]), F = y.useCallback((M) => {
      n({
        ...e,
        cellStyle: M
      });
    }, [
      e,
      n
    ]), z = y.useCallback((M) => {
      n({
        ...e,
        cellStyleMode: M
      });
    }, [
      e,
      n
    ]);
    return a.jsxs($, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        a.jsxs($, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            a.jsx(Ue, {
              label: u,
              size: "small",
              sx: {
                backgroundColor: Rt[u] || Rt.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            a.jsx(w, {
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
        a.jsxs(ue, {
          spacing: 1,
          children: [
            a.jsxs(Nt, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                a.jsx(Ot, {
                  expandIcon: a.jsx(Lt, {}),
                  children: a.jsxs($, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(w, {
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
                            disabled: !p,
                            onClick: (M) => {
                              M.stopPropagation(), f();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(jt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ht, {
                  children: a.jsxs(ue, {
                    spacing: 2,
                    children: [
                      a.jsx(J, {
                        label: m.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (M) => n({
                          ...e,
                          headerName: M.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      a.jsx(J, {
                        label: m.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (M) => n({
                          ...e,
                          width: M.target.value ? parseInt(M.target.value, 10) : void 0
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
                      a.jsxs(ke, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(Ee, {
                            children: m.t("json_table_align")
                          }),
                          a.jsxs(ze, {
                            label: m.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (M) => n({
                              ...e,
                              align: M.target.value
                            }),
                            children: [
                              a.jsx(L, {
                                value: "left",
                                children: m.t("json_table_align_left")
                              }),
                              a.jsx(L, {
                                value: "center",
                                children: m.t("json_table_align_center")
                              }),
                              a.jsx(L, {
                                value: "right",
                                children: m.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      a.jsx(qe, {
                        control: a.jsx(rt, {
                          checked: e.visible,
                          onChange: (M) => n({
                            ...e,
                            visible: M.target.checked
                          })
                        }),
                        label: a.jsx(w, {
                          variant: "body2",
                          children: m.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Nt, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                a.jsx(Ot, {
                  expandIcon: a.jsx(Lt, {}),
                  children: a.jsxs($, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(w, {
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
                            disabled: !g,
                            onClick: (M) => {
                              M.stopPropagation(), h();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(jt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ht, {
                  children: a.jsxs(ue, {
                    spacing: 2,
                    children: [
                      a.jsxs(ke, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          a.jsx(Ee, {
                            children: m.t("json_table_format_type")
                          }),
                          a.jsxs(ze, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: m.t("json_table_format_type"),
                            onChange: (M) => {
                              const A = M.target.value;
                              A === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : R({
                                type: A
                              });
                            },
                            children: [
                              a.jsxs(L, {
                                value: "auto",
                                children: [
                                  m.t("json_table_format_type_auto"),
                                  ` (${u})`
                                ]
                              }),
                              a.jsx(L, {
                                value: "string",
                                children: m.t("json_table_format_type_string")
                              }),
                              a.jsx(L, {
                                value: "number",
                                children: m.t("json_table_format_type_number")
                              }),
                              a.jsx(L, {
                                value: "date",
                                children: m.t("json_table_format_type_date")
                              }),
                              a.jsx(L, {
                                value: "boolean",
                                children: m.t("json_table_format_type_boolean")
                              }),
                              a.jsx(L, {
                                value: "image",
                                children: m.t("json_table_format_type_image")
                              })
                            ]
                          })
                        ]
                      }),
                      (u === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && a.jsx(el, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: R,
                        discoveredColumn: t
                      }),
                      (u === "date" || ((_c = e.format) == null ? void 0 : _c.type) === "date") && a.jsx(tl, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: R
                      }),
                      (u === "boolean" || ((_d = e.format) == null ? void 0 : _d.type) === "boolean") && a.jsx(nl, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: R
                      }),
                      (u === "string" || ((_e = e.format) == null ? void 0 : _e.type) === "string") && a.jsx(rl, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: R
                      }),
                      (u === "image" || ((_f = e.format) == null ? void 0 : _f.type) === "image") && a.jsx(kl, {
                        format: e.format ?? {
                          type: "image"
                        },
                        onChange: R
                      }),
                      u !== "number" && u !== "date" && u !== "boolean" && u !== "string" && u !== "image" && !e.format && a.jsx(w, {
                        variant: "body2",
                        color: "text.secondary",
                        children: m.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            a.jsxs(Nt, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                a.jsx(Ot, {
                  expandIcon: a.jsx(Lt, {}),
                  children: a.jsxs($, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsxs($, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          a.jsx(w, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: m.t("json_table_section_styling")
                          }),
                          (((_g = e.cellStyle) == null ? void 0 : _g.length) ?? 0) > 0 && a.jsx(Ue, {
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
                            onClick: (M) => {
                              M.stopPropagation(), _();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(jt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ht, {
                  children: a.jsx(Ll, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: u,
                    onStyleChange: F,
                    onModeChange: z
                  })
                })
              ]
            }),
            a.jsxs(Nt, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                a.jsx(Ot, {
                  expandIcon: a.jsx(Lt, {}),
                  children: a.jsxs($, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      a.jsx(w, {
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
                            onClick: (M) => {
                              M.stopPropagation(), v();
                            },
                            "aria-label": m.t("json_table_section_reset"),
                            children: a.jsx(jt, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                a.jsx(Ht, {
                  children: a.jsxs(ue, {
                    spacing: 2,
                    children: [
                      a.jsx(Hl, {
                        globalSorting: r,
                        globalFiltering: o
                      }),
                      a.jsxs($, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(ke, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(Ee, {
                                children: m.t("json_table_sortable")
                              }),
                              a.jsxs(ze, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: m.t("json_table_sortable"),
                                onChange: (M) => n({
                                  ...e,
                                  sortable: M.target.value === "on" ? true : M.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(L, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: m.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(L, {
                                    value: "on",
                                    children: m.t("json_table_option_on")
                                  }),
                                  a.jsx(L, {
                                    value: "off",
                                    children: m.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Fr, {
                            globalEnabled: r,
                            columnOverride: e.sortable,
                            featureLabel: m.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      a.jsxs($, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          a.jsxs(ke, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              a.jsx(Ee, {
                                children: m.t("json_table_filterable")
                              }),
                              a.jsxs(ze, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: m.t("json_table_filterable"),
                                onChange: (M) => n({
                                  ...e,
                                  filterable: M.target.value === "on" ? true : M.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  a.jsx(L, {
                                    value: "auto",
                                    children: a.jsx("em", {
                                      children: m.t("json_table_option_auto")
                                    })
                                  }),
                                  a.jsx(L, {
                                    value: "on",
                                    children: m.t("json_table_option_on")
                                  }),
                                  a.jsx(L, {
                                    value: "off",
                                    children: m.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          a.jsx(Fr, {
                            globalEnabled: o,
                            columnOverride: e.filterable,
                            featureLabel: m.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && a.jsxs(Le, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          a.jsx(w, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: m.t("json_table_analysis_info")
                          }),
                          a.jsxs(ue, {
                            spacing: 0.5,
                            children: [
                              a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_type_label")
                                  }),
                                  a.jsx(Ue, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: Rt[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_confidence")
                                  }),
                                  a.jsxs(w, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_nulls")
                                  }),
                                  a.jsxs(w, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      c > 0 && ` (${Math.round(t.nullCount / c * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_distinct")
                                  }),
                                  a.jsx(w, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_range")
                                  }),
                                  a.jsxs(w, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  a.jsx(w, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: m.t("json_table_date_input_format")
                                  }),
                                  a.jsx(w, {
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
  const Kl = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Xl = /^\d{4}-\d{2}-\d{2}$/, Ql = /^(\d{2})\.(\d{2})\.(\d{4})$/, Zl = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, ea = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, ta = /^(\d{2})\/(\d{2})\/(\d{4})$/, na = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, ra = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Bt(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function pn(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Vt(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const oa = [
    {
      regex: Kl,
      format: "ISO-8601"
    },
    {
      regex: Xl,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Bt(n, t);
      }
    },
    {
      regex: ea,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Bt(t, n) && Vt(r, o, s);
      }
    },
    {
      regex: Zl,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return Bt(t, n) && Vt(r, o);
      }
    },
    {
      regex: Ql,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Bt(t, n);
      }
    },
    {
      regex: ra,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return pn(t, n) && Vt(r, o, s);
      }
    },
    {
      regex: na,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return pn(t, n) && Vt(r, o);
      }
    },
    {
      regex: ta,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return pn(t, n);
      }
    }
  ];
  function sa(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of oa) {
      const r = t.match(n.regex);
      if (r) {
        if (n.validate && !n.validate(r)) continue;
        return n.format;
      }
    }
    return null;
  }
  function ia(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function la(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = ia(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = sa(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : Dl(e) ? {
        type: "image"
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
  function aa(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : t.length === 2 && t.includes("image") && t.includes("string") ? "image" : "mixed";
  }
  function ua(e) {
    let t, n = 0;
    for (const [r, o] of Object.entries(e)) o > n && (t = r, n = o);
    return t;
  }
  function ca(e) {
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
  function zr(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function da(e, t) {
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
  function fa(e, t, n = 100, r = 0.8, o = 0.8) {
    const s = /* @__PURE__ */ new Map();
    for (const i of e) s.set(i, ca(i));
    for (const i of t) for (const l of e) {
      const u = s.get(l);
      if (!u) {
        console.warn(`[JsonTable] Missing accumulator for path: ${l}`);
        continue;
      }
      const c = i[l], d = la(c);
      if (zr(u.typeCounts, d.type), d.type === "null") {
        u.nullCount++;
        continue;
      }
      if (u.nonNullCount++, d.dateFormat && zr(u.dateFormatCounts, d.dateFormat), u.distinctValues.size < n && u.distinctValues.add(c), typeof c == "number" && Number.isFinite(c) && ((u.numMin === void 0 || c < u.numMin) && (u.numMin = c), (u.numMax === void 0 || c > u.numMax) && (u.numMax = c)), typeof c == "string") {
        const p = c.length;
        (u.strLenMin === void 0 || p < u.strLenMin) && (u.strLenMin = p), (u.strLenMax === void 0 || p > u.strLenMax) && (u.strLenMax = p);
      }
      if (d.dateFormat) {
        const p = da(c, d.dateFormat);
        p !== null && ((u.dateMin === void 0 || p < u.dateMin) && (u.dateMin = p), (u.dateMax === void 0 || p > u.dateMax) && (u.dateMax = p));
      }
    }
    return e.map((i) => {
      const l = s.get(i);
      let u = aa(l.typeCounts);
      u === "date" && l.nonNullCount > 0 && (l.typeCounts.date || 0) / l.nonNullCount < r && (u = "string"), u === "image" && l.nonNullCount > 0 && (l.typeCounts.image || 0) / l.nonNullCount < o && (u = "string");
      const c = u === "date" ? ua(l.dateFormatCounts) : void 0, d = u === "date" ? l.typeCounts.date || 0 : l.typeCounts[u] || 0, p = l.nonNullCount > 0 ? Math.round(d / l.nonNullCount * 100) / 100 : 0, f = {
        path: i,
        type: u,
        nullable: l.nullCount > 0,
        typeCounts: {
          ...l.typeCounts
        },
        nullCount: l.nullCount,
        distinctCount: l.distinctValues.size,
        confidence: p
      };
      return c && (f.dateFormat = c), u === "number" && (l.numMin !== void 0 && (f.min = l.numMin), l.numMax !== void 0 && (f.max = l.numMax)), u === "date" && (l.dateMin !== void 0 && (f.min = l.dateMin), l.dateMax !== void 0 && (f.max = l.dateMax)), (u === "string" || u === "mixed") && (l.strLenMin !== void 0 && (f.stringLengthMin = l.strLenMin), l.strLenMax !== void 0 && (f.stringLengthMax = l.strLenMax)), f;
    });
  }
  function rn(e, t, n, r, o, s, i, l) {
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
        rn(e[u], c, n, r, o, s + 1, i, l);
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
        rn(e[c], d, n, r, o, s + 1, i, l);
      }
      return;
    }
    n[t] = e, r.add(t);
  }
  function ga(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), r = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, o = [];
    for (const i of e) {
      const l = {}, u = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const c of Object.keys(i)) rn(i[c], c, l, n, u, 1, t, r);
      else rn(i, "_value", l, n, u, 0, t, r);
      o.push(l);
    }
    const s = pa([
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
  function pa(e) {
    return e.sort((t, n) => {
      const r = Dr(t), o = Dr(n), s = Math.min(r.length, o.length);
      for (let i = 0; i < s; i++) {
        const l = r[i], u = o[i], c = Tr(l), d = Tr(u);
        if (c !== null && d !== null) {
          if (c !== d) return c - d;
          continue;
        }
        if (l !== u) return l < u ? -1 : 1;
      }
      return r.length - o.length;
    });
  }
  function Dr(e) {
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
  function Tr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const ha = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8,
    imageConfidenceThreshold: 0.8
  };
  function co(e, t) {
    const n = performance.now(), r = {
      ...ha,
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
    const o = ga(e, r.maxDepth), s = fa(o.paths, o.rows, r.maxDistinct, r.dateConfidenceThreshold, r.imageConfidenceThreshold), i = o.paths.length * o.rows.length, l = s.reduce((d, p) => d + p.nullCount, 0), u = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, c = Math.round((performance.now() - n) * 100) / 100;
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
  function ma(e, t) {
    return y.useMemo(() => co(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold,
      t == null ? void 0 : t.imageConfidenceThreshold
    ]);
  }
  function ya({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: s, socket: i }) {
    const [l, u] = y.useState(n), [c, d] = y.useState(null), [p, f] = y.useState([]), [g, h] = y.useState(false), [b, _] = y.useState(false), [x, v] = y.useState(null), [R, F] = y.useState(null), z = y.useRef(false), M = y.useRef(() => Promise.resolve()), A = y.useRef(n), S = y.useMemo(() => JSON.stringify(n), [
      n
    ]), O = y.useMemo(() => JSON.stringify(l) !== S, [
      l,
      S
    ]);
    y.useEffect(() => {
      e && (u(n), A.current = n, d(n.length > 0 ? n[0].path : null), z.current = false, F(null), v(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !z.current && (z.current = true, M.current());
    }, [
      e
    ]);
    const H = y.useCallback(async () => {
      h(true), F(null), v(null);
      try {
        const C = s.oid;
        if (!C) return;
        const P = await i.getState(C);
        if ((P == null ? void 0 : P.val) === null || (P == null ? void 0 : P.val) === void 0) return;
        let k;
        const E = P.val;
        if (typeof E == "string") try {
          const q = JSON.parse(E);
          k = Array.isArray(q) ? q : [
            q
          ];
        } catch {
          return;
        }
        else if (Array.isArray(E)) k = E;
        else if (typeof E == "object" && E !== null) k = [
          E
        ];
        else return;
        const oe = s.tableMaxDepth || 10, U = co(k, {
          maxDepth: oe
        });
        if (U.meta.maxDepth > oe) {
          const q = m.t("json_table_depth_warning").replace("{{actual}}", String(U.meta.maxDepth)).replace("{{configured}}", String(oe));
          v(q);
        }
        f(U.columns);
        const He = new Map(A.current.map((q) => [
          q.path,
          q
        ])), Be = new Set(U.columns.map((q) => q.path)), he = A.current.filter((q) => Be.has(q.path)), Ye = U.columns.filter((q) => !He.has(q.path)).map((q) => ({
          path: q.path,
          visible: true,
          headerName: q.path.split(".").pop() || q.path,
          sortable: "auto",
          filterable: "auto"
        })), Te = [
          ...he,
          ...Ye
        ];
        u(Te), A.current = Te, d((q) => q === null && Te.length > 0 ? Te[0].path : q);
      } catch (C) {
        const P = C instanceof Error ? C.message : "Failed to discover columns";
        F(P);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      M.current = H;
    }, [
      H
    ]), y.useEffect(() => {
      A.current = l;
    }, [
      l
    ]);
    const G = y.useCallback((C) => {
      u((P) => P.map((k) => k.path === C.path ? C : k));
    }, []), ie = y.useCallback((C) => {
      u(C);
    }, []), ce = y.useCallback(() => {
      r(l), t();
    }, [
      l,
      r,
      t
    ]), le = y.useCallback((C, P) => {
      if (P === "backdropClick" && O) {
        _(true);
        return;
      }
      t();
    }, [
      O,
      t
    ]), re = y.useMemo(() => c ? l.find((C) => C.path === c) : null, [
      c,
      l
    ]), de = y.useMemo(() => c ? p.find((C) => C.path === c) : void 0, [
      c,
      p
    ]), te = y.useMemo(() => "json-table-column-editor-title", []);
    return a.jsxs(Xo, {
      theme: o,
      children: [
        a.jsxs(kn, {
          open: e,
          onClose: le,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": te,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            a.jsx(En, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: te,
              children: a.jsxs($, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  a.jsx(w, {
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
                    children: a.jsx(Zt, {})
                  })
                ]
              })
            }),
            a.jsxs(Nn, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && a.jsx(qt, {
                  severity: "warning",
                  onClose: () => v(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                R && a.jsx(qt, {
                  severity: "error",
                  onClose: () => F(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: R
                }),
                a.jsxs($, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    a.jsx($, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: a.jsx(Yi, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: c,
                        onSelect: d,
                        onChange: ie,
                        onRefresh: H,
                        loading: g
                      })
                    }),
                    a.jsx($, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: re ? a.jsx(Jl, {
                        column: re,
                        discoveredColumn: de,
                        onChange: G,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : a.jsx($, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: a.jsx(w, {
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
            a.jsxs(Pn, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                a.jsx(Oe, {
                  onClick: () => le(),
                  children: m.t("cancel")
                }),
                a.jsx(Oe, {
                  variant: "contained",
                  onClick: ce,
                  disabled: !O,
                  children: m.t("save")
                })
              ]
            })
          ]
        }),
        a.jsx(Vs, {
          open: b,
          autoHideDuration: 3e3,
          onClose: () => _(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: a.jsx(qt, {
            severity: "warning",
            onClose: () => _(false),
            children: m.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function ba(e, t, n, r) {
    const o = e.name || "columnConfig", s = r.context.theme, [i, l] = y.useState(false), u = y.useMemo(() => ro(t[o]), [
      t,
      o
    ]), c = u.filter((_) => _.visible).length, d = u.length, p = u.some((_) => _.format), f = u.some((_) => _.cellStyle && _.cellStyle.length > 0), g = y.useCallback((_) => {
      const x = JSON.stringify(_), v = `b64:${Ui(x)}`;
      n({
        [o]: v
      });
    }, [
      o,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), b = y.useCallback(() => {
      l(false);
    }, []);
    return a.jsxs($, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        a.jsx(Oe, {
          variant: "outlined",
          startIcon: a.jsx(Wi, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": m.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: m.t("json_table_configure_columns")
        }),
        d > 0 && a.jsxs(w, {
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
            p && ` \xB7 ${m.t("json_table_has_formatting")}`,
            f && ` \xB7 ${m.t("json_table_has_styling")}`
          ]
        }),
        a.jsx(ya, {
          open: i,
          onClose: b,
          columns: u,
          onSave: g,
          theme: s,
          data: t,
          socket: r.context.socket
        })
      ]
    });
  }
  const _a = () => [
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
      component: ba
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
    Je({
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
    Je({
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color"
    }),
    Je({
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
    Je({
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
    Je({
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
    Je({
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
    Je({
      name: "evenRowColor",
      label: "json_table_even_row_color"
    }),
    Je({
      name: "oddRowColor",
      label: "json_table_odd_row_color"
    })
  ];
  function Qe(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Me(e, t) {
    return (n) => {
      t.setState((r) => ({
        ...r,
        [e]: Qe(n, r[e])
      }));
    };
  }
  function ln(e) {
    return e instanceof Function;
  }
  function xa(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function va(e, t) {
    const n = [], r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
    return r(e), n;
  }
  function D(e, t, n) {
    let r = [], o;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== r.length || l.some((d, p) => r[p] !== d))) return o;
      r = l;
      let c;
      if (n.key && n.debug && (c = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
        const d = Math.round((Date.now() - i) * 100) / 100, p = Math.round((Date.now() - c) * 100) / 100, f = p / 16, g = (h, b) => {
          for (h = String(h); h.length < b; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${g(p, 5)} /${g(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return o;
    };
  }
  function T(e, t, n, r) {
    return {
      debug: () => {
        var o;
        return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
      },
      key: false,
      onChange: r
    };
  }
  function Ca(e, t, n, r) {
    const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: D(() => [
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
      }), T(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function wa(e, t, n, r) {
    var o, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, u = l.accessorKey;
    let c = (o = (s = l.id) != null ? s : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, d;
    if (l.accessorFn ? d = l.accessorFn : u && (u.includes(".") ? d = (f) => {
      let g = f;
      for (const b of u.split(".")) {
        var h;
        g = (h = g) == null ? void 0 : h[b];
      }
      return g;
    } : d = (f) => f[l.accessorKey]), !c) throw new Error();
    let p = {
      id: `${String(c)}`,
      accessorFn: d,
      parent: r,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: D(() => [
        true
      ], () => {
        var f;
        return [
          p,
          ...(f = p.columns) == null ? void 0 : f.flatMap((g) => g.getFlatColumns())
        ];
      }, T(e.options, "debugColumns")),
      getLeafColumns: D(() => [
        e._getOrderColumnsFn()
      ], (f) => {
        var g;
        if ((g = p.columns) != null && g.length) {
          let h = p.columns.flatMap((b) => b.getLeafColumns());
          return f(h);
        }
        return [
          p
        ];
      }, T(e.options, "debugColumns"))
    };
    for (const f of e._features) f.createColumn == null || f.createColumn(p, e);
    return p;
  }
  const fe = "debugHeaders";
  function Pr(e, t, n) {
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
  const ja = {
    createTable: (e) => {
      e.getHeaderGroups = D(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => {
        var s, i;
        const l = (s = r == null ? void 0 : r.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? s : [], u = (i = o == null ? void 0 : o.map((p) => n.find((f) => f.id === p)).filter(Boolean)) != null ? i : [], c = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
        return Wt(t, [
          ...l,
          ...c,
          ...u
        ], e);
      }, T(e.options, fe)), e.getCenterHeaderGroups = D(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), Wt(t, n, e, "center")), T(e.options, fe)), e.getLeftHeaderGroups = D(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Wt(t, s, e, "left");
      }, T(e.options, fe)), e.getRightHeaderGroups = D(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Wt(t, s, e, "right");
      }, T(e.options, fe)), e.getFooterGroups = D(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), T(e.options, fe)), e.getLeftFooterGroups = D(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), T(e.options, fe)), e.getCenterFooterGroups = D(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), T(e.options, fe)), e.getRightFooterGroups = D(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), T(e.options, fe)), e.getFlatHeaders = D(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), T(e.options, fe)), e.getLeftFlatHeaders = D(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), T(e.options, fe)), e.getCenterFlatHeaders = D(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), T(e.options, fe)), e.getRightFlatHeaders = D(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), T(e.options, fe)), e.getCenterLeafHeaders = D(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), T(e.options, fe)), e.getLeftLeafHeaders = D(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), T(e.options, fe)), e.getRightLeafHeaders = D(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), T(e.options, fe)), e.getLeafHeaders = D(() => [
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
      }, T(e.options, fe));
    }
  };
  function Wt(e, t, n, r) {
    var o, s;
    let i = 0;
    const l = function(f, g) {
      g === void 0 && (g = 1), i = Math.max(i, g), f.filter((h) => h.getIsVisible()).forEach((h) => {
        var b;
        (b = h.columns) != null && b.length && l(h.columns, g + 1);
      }, 0);
    };
    l(e);
    let u = [];
    const c = (f, g) => {
      const h = {
        depth: g,
        id: [
          r,
          `${g}`
        ].filter(Boolean).join("_"),
        headers: []
      }, b = [];
      f.forEach((_) => {
        const x = [
          ...b
        ].reverse()[0], v = _.column.depth === h.depth;
        let R, F = false;
        if (v && _.column.parent ? R = _.column.parent : (R = _.column, F = true), x && (x == null ? void 0 : x.column) === R) x.subHeaders.push(_);
        else {
          const z = Pr(n, R, {
            id: [
              r,
              g,
              R.id,
              _ == null ? void 0 : _.id
            ].filter(Boolean).join("_"),
            isPlaceholder: F,
            placeholderId: F ? `${b.filter((M) => M.column === R).length}` : void 0,
            depth: g,
            index: b.length
          });
          z.subHeaders.push(_), b.push(z);
        }
        h.headers.push(_), _.headerGroup = h;
      }), u.push(h), g > 0 && c(b, g - 1);
    }, d = t.map((f, g) => Pr(n, f, {
      depth: i,
      index: g
    }));
    c(d, i - 1), u.reverse();
    const p = (f) => f.filter((h) => h.column.getIsVisible()).map((h) => {
      let b = 0, _ = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], p(h.subHeaders).forEach((R) => {
        let { colSpan: F, rowSpan: z } = R;
        b += F, x.push(z);
      })) : b = 1;
      const v = Math.min(...x);
      return _ = _ + v, h.colSpan = b, h.rowSpan = _, {
        colSpan: b,
        rowSpan: _
      };
    });
    return p((o = (s = u[0]) == null ? void 0 : s.headers) != null ? o : []), u;
  }
  const Ln = (e, t, n, r, o, s, i) => {
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
      getLeafRows: () => va(l.subRows, (u) => u.subRows),
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
      getAllCells: D(() => [
        e.getAllLeafColumns()
      ], (u) => u.map((c) => Ca(e, l, c, c.id)), T(e.options, "debugRows")),
      _getAllCellsByColumnId: D(() => [
        l.getAllCells()
      ], (u) => u.reduce((c, d) => (c[d.column.id] = d, c), {}), T(e.options, "debugRows"))
    };
    for (let u = 0; u < e._features.length; u++) {
      const c = e._features[u];
      c == null || c.createRow == null || c.createRow(l, e);
    }
    return l;
  }, Sa = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, fo = (e, t, n) => {
    var r, o;
    const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
  };
  fo.autoRemove = (e) => Ne(e);
  const go = (e, t, n) => {
    var r;
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
  };
  go.autoRemove = (e) => Ne(e);
  const po = (e, t, n) => {
    var r;
    return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  po.autoRemove = (e) => Ne(e);
  const ho = (e, t, n) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
  };
  ho.autoRemove = (e) => Ne(e);
  const mo = (e, t, n) => !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
  mo.autoRemove = (e) => Ne(e) || !(e != null && e.length);
  const yo = (e, t, n) => n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
  yo.autoRemove = (e) => Ne(e) || !(e != null && e.length);
  const bo = (e, t, n) => e.getValue(t) === n;
  bo.autoRemove = (e) => Ne(e);
  const _o = (e, t, n) => e.getValue(t) == n;
  _o.autoRemove = (e) => Ne(e);
  const Hn = (e, t, n) => {
    let [r, o] = n;
    const s = e.getValue(t);
    return s >= r && s <= o;
  };
  Hn.resolveFilterValue = (e) => {
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
  Hn.autoRemove = (e) => Ne(e) || Ne(e[0]) && Ne(e[1]);
  const We = {
    includesString: fo,
    includesStringSensitive: go,
    equalsString: po,
    arrIncludes: ho,
    arrIncludesAll: mo,
    arrIncludesSome: yo,
    equals: bo,
    weakEquals: _o,
    inNumberRange: Hn
  };
  function Ne(e) {
    return e == null || e === "";
  }
  const Ra = {
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
        return typeof r == "string" ? We.includesString : typeof r == "number" ? We.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? We.equals : Array.isArray(r) ? We.arrIncludes : We.weakEquals;
      }, e.getFilterFn = () => {
        var n, r;
        return ln(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : We[e.columnDef.filterFn];
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
          const o = e.getFilterFn(), s = r == null ? void 0 : r.find((d) => d.id === e.id), i = Qe(n, s ? s.value : void 0);
          if (kr(o, i, e)) {
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
          return (s = Qe(t, o)) == null ? void 0 : s.filter((i) => {
            const l = n.find((u) => u.id === i.id);
            if (l) {
              const u = l.getFilterFn();
              if (kr(u, i.value, l)) return false;
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
  function kr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Ma = (e, t, n) => n.reduce((r, o) => {
    const s = o.getValue(e);
    return r + (typeof s == "number" ? s : 0);
  }, 0), Ia = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r > s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, Aa = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r < s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, $a = (e, t, n) => {
    let r, o;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
    }), [
      r,
      o
    ];
  }, Fa = (e, t) => {
    let n = 0, r = 0;
    if (t.forEach((o) => {
      let s = o.getValue(e);
      s != null && (s = +s) >= s && (++n, r += s);
    }), n) return r / n;
  }, za = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!xa(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  }, Da = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Ta = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Pa = (e, t) => t.length, hn = {
    sum: Ma,
    min: Ia,
    max: Aa,
    extent: $a,
    mean: Fa,
    median: za,
    unique: Da,
    uniqueCount: Ta,
    count: Pa
  }, ka = {
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
        if (typeof r == "number") return hn.sum;
        if (Object.prototype.toString.call(r) === "[object Date]") return hn.extent;
      }, e.getAggregationFn = () => {
        var n, r;
        if (!e) throw new Error();
        return ln(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : hn[e.columnDef.aggregationFn];
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
  function Ea(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const r = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? r : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...r
    ];
  }
  const Na = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Me("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = D((n) => [
        It(t, n)
      ], (n) => n.findIndex((r) => r.id === e.id), T(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var r;
        return ((r = It(t, n)[0]) == null ? void 0 : r.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var r;
        const o = It(t, n);
        return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = D(() => [
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
        return Ea(s, n, r);
      }, T(e.options, "debugTable"));
    }
  }, mn = () => ({
    left: [],
    right: []
  }), Oa = {
    getInitialState: (e) => ({
      columnPinning: mn(),
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
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((p) => !(r != null && r.includes(p))),
              right: [
                ...((u = o == null ? void 0 : o.right) != null ? u : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ]
            };
          }
          if (n === "left") {
            var c, d;
            return {
              left: [
                ...((c = o == null ? void 0 : o.left) != null ? c : []).filter((p) => !(r != null && r.includes(p))),
                ...r
              ],
              right: ((d = o == null ? void 0 : o.right) != null ? d : []).filter((p) => !(r != null && r.includes(p)))
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((p) => !(r != null && r.includes(p))),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((p) => !(r != null && r.includes(p)))
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
      e.getCenterVisibleCells = D(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, r, o) => {
        const s = [
          ...r ?? [],
          ...o ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, T(t.options, "debugRows")), e.getLeftVisibleCells = D(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), T(t.options, "debugRows")), e.getRightVisibleCells = D(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), T(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, r;
        return e.setColumnPinning(t ? mn() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : mn());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const r = e.getState().columnPinning;
        if (!t) {
          var o, s;
          return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e.getLeftLeafColumns = D(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), T(e.options, "debugColumns")), e.getRightLeafColumns = D(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), T(e.options, "debugColumns")), e.getCenterLeafColumns = D(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r) => {
        const o = [
          ...n ?? [],
          ...r ?? []
        ];
        return t.filter((s) => !o.includes(s.id));
      }, T(e.options, "debugColumns"));
    }
  };
  function La(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Gt = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, yn = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), Ha = {
    getDefaultColumnDef: () => Gt,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: yn(),
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
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Gt.minSize, (r = s ?? e.columnDef.size) != null ? r : Gt.size), (o = e.columnDef.maxSize) != null ? o : Gt.maxSize);
      }, e.getStart = D((n) => [
        n,
        It(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), T(t.options, "debugColumns")), e.getAfter = D((n) => [
        n,
        It(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), T(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!r || !o || (s.persist == null || s.persist(), bn(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              r.id,
              r.getSize()
            ]
          ], u = bn(s) ? Math.round(s.touches[0].clientX) : s.clientX, c = {}, d = (x, v) => {
            typeof v == "number" && (t.setColumnSizingInfo((R) => {
              var F, z;
              const M = t.options.columnResizeDirection === "rtl" ? -1 : 1, A = (v - ((F = R == null ? void 0 : R.startOffset) != null ? F : 0)) * M, S = Math.max(A / ((z = R == null ? void 0 : R.startSize) != null ? z : 0), -0.999999);
              return R.columnSizingStart.forEach((O) => {
                let [H, G] = O;
                c[H] = Math.round(Math.max(G + G * S, 0) * 100) / 100;
              }), {
                ...R,
                deltaOffset: A,
                deltaPercentage: S
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((R) => ({
              ...R,
              ...c
            })));
          }, p = (x) => d("move", x), f = (x) => {
            d("end", x), t.setColumnSizingInfo((v) => ({
              ...v,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, g = La(n), h = {
            moveHandler: (x) => p(x.clientX),
            upHandler: (x) => {
              g == null ? void 0 : g.removeEventListener("mousemove", h.moveHandler), g == null ? void 0 : g.removeEventListener("mouseup", h.upHandler), f(x.clientX);
            }
          }, b = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), p(x.touches[0].clientX), false),
            upHandler: (x) => {
              var v;
              g == null ? void 0 : g.removeEventListener("touchmove", b.moveHandler), g == null ? void 0 : g.removeEventListener("touchend", b.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), f((v = x.touches[0]) == null ? void 0 : v.clientX);
            }
          }, _ = Ba() ? {
            passive: false
          } : false;
          bn(s) ? (g == null ? void 0 : g.addEventListener("touchmove", b.moveHandler, _), g == null ? void 0 : g.addEventListener("touchend", b.upHandler, _)) : (g == null ? void 0 : g.addEventListener("mousemove", h.moveHandler, _), g == null ? void 0 : g.addEventListener("mouseup", h.upHandler, _)), t.setColumnSizingInfo((x) => ({
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
        e.setColumnSizingInfo(t ? yn() : (n = e.initialState.columnSizingInfo) != null ? n : yn());
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
  let Ut = null;
  function Ba() {
    if (typeof Ut == "boolean") return Ut;
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
    return Ut = e, Ut;
  }
  function bn(e) {
    return e.type === "touchstart";
  }
  const Va = {
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
      e._getAllVisibleCells = D(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((r) => r.column.getIsVisible()), T(t.options, "debugRows")), e.getVisibleCells = D(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, r, o) => [
        ...n,
        ...r,
        ...o
      ], T(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, r) => D(() => [
        r(),
        r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")
      ], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), T(e.options, "debugColumns"));
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
  function It(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const Wa = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, Ga = {
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
      e.getGlobalAutoFilterFn = () => We.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: r } = e.options;
        return ln(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : We[r];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, Ua = {
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
  }, In = 0, An = 10, _n = () => ({
    pageIndex: In,
    pageSize: An
  }), qa = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ..._n(),
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
        const o = (s) => Qe(r, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
      }, e.resetPagination = (r) => {
        var o;
        e.setPagination(r ? _n() : (o = e.initialState.pagination) != null ? o : _n());
      }, e.setPageIndex = (r) => {
        e.setPagination((o) => {
          let s = Qe(r, o.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...o,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (r) => {
        var o, s;
        e.setPageIndex(r ? In : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : In);
      }, e.resetPageSize = (r) => {
        var o, s;
        e.setPageSize(r ? An : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : An);
      }, e.setPageSize = (r) => {
        e.setPagination((o) => {
          const s = Math.max(1, Qe(r, o.pageSize)), i = o.pageSize * o.pageIndex, l = Math.floor(i / s);
          return {
            ...o,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (r) => e.setPagination((o) => {
        var s;
        let i = Qe(r, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...o,
          pageCount: i
        };
      }), e.getPageOptions = D(() => [
        e.getPageCount()
      ], (r) => {
        let o = [];
        return r && r > 0 && (o = [
          ...new Array(r)
        ].fill(null).map((s, i) => i)), o;
      }, T(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
  }, xn = () => ({
    top: [],
    bottom: []
  }), Ya = {
    getInitialState: (e) => ({
      rowPinning: xn(),
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
            var p, f;
            return {
              top: ((p = u == null ? void 0 : u.top) != null ? p : []).filter((b) => !(l != null && l.has(b))),
              bottom: [
                ...((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((b) => !(l != null && l.has(b))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var g, h;
            return {
              top: [
                ...((g = u == null ? void 0 : u.top) != null ? g : []).filter((b) => !(l != null && l.has(b))),
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
        return e.setRowPinning(t ? xn() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : xn());
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
      }, e.getTopRows = D(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), T(e.options, "debugRows")), e.getBottomRows = D(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), T(e.options, "debugRows")), e.getCenterRows = D(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, r) => {
        const o = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...r ?? []
        ]);
        return t.filter((s) => !o.has(s.id));
      }, T(e.options, "debugRows"));
    }
  }, Ja = {
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
          $n(o, s.id, r, true, e);
        }), o;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = D(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? vn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, T(e.options, "debugTable")), e.getFilteredSelectedRowModel = D(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? vn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, T(e.options, "debugTable")), e.getGroupedSelectedRowModel = D(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? vn(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, T(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
          return $n(l, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Bn(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Fn(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Fn(e, n) === "all";
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
  }, $n = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => $n(e, l.id, n, r, o));
  };
  function vn(e, t) {
    const n = e.getState().rowSelection, r = [], o = {}, s = function(i, l) {
      return i.map((u) => {
        var c;
        const d = Bn(u, n);
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
  function Bn(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Fn(e, t, n) {
    var r;
    if (!((r = e.subRows) != null && r.length)) return false;
    let o = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !o) && (i.getCanSelect() && (Bn(i, t) ? s = true : o = false), i.subRows && i.subRows.length)) {
        const l = Fn(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), o = false);
      }
    }), o ? "all" : s ? "some" : false;
  }
  const zn = /([0-9]+)/gm, Ka = (e, t, n) => xo(Ze(e.getValue(n)).toLowerCase(), Ze(t.getValue(n)).toLowerCase()), Xa = (e, t, n) => xo(Ze(e.getValue(n)), Ze(t.getValue(n))), Qa = (e, t, n) => Vn(Ze(e.getValue(n)).toLowerCase(), Ze(t.getValue(n)).toLowerCase()), Za = (e, t, n) => Vn(Ze(e.getValue(n)), Ze(t.getValue(n))), eu = (e, t, n) => {
    const r = e.getValue(n), o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  }, tu = (e, t, n) => Vn(e.getValue(n), t.getValue(n));
  function Vn(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function Ze(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function xo(e, t) {
    const n = e.split(zn).filter(Boolean), r = t.split(zn).filter(Boolean);
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
  const Ct = {
    alphanumeric: Ka,
    alphanumericCaseSensitive: Xa,
    text: Qa,
    textCaseSensitive: Za,
    datetime: eu,
    basic: tu
  }, nu = {
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
          if (Object.prototype.toString.call(s) === "[object Date]") return Ct.datetime;
          if (typeof s == "string" && (r = true, s.split(zn).length > 1)) return Ct.alphanumeric;
        }
        return r ? Ct.text : Ct.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, r;
        if (!e) throw new Error();
        return ln(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : Ct[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, r) => {
        const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((g) => g.id === e.id), u = i == null ? void 0 : i.findIndex((g) => g.id === e.id);
          let c = [], d, p = s ? n : o === "desc";
          if (i != null && i.length && e.getCanMultiSort() && r ? l ? d = "toggle" : d = "add" : i != null && i.length && u !== i.length - 1 ? d = "replace" : l ? d = "toggle" : d = "replace", d === "toggle" && (s || o || (d = "remove")), d === "add") {
            var f;
            c = [
              ...i,
              {
                id: e.id,
                desc: p
              }
            ], c.splice(0, c.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
          } else d === "toggle" ? c = i.map((g) => g.id === e.id ? {
            ...g,
            desc: p
          } : g) : d === "remove" ? c = i.filter((g) => g.id !== e.id) : c = [
            {
              id: e.id,
              desc: p
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
  }, ru = [
    ja,
    Va,
    Na,
    Oa,
    Sa,
    Ra,
    Wa,
    Ga,
    nu,
    ka,
    Ua,
    qa,
    Ya,
    Ja,
    Ha
  ];
  function ou(e) {
    var t, n;
    const r = [
      ...ru,
      ...(t = e._features) != null ? t : []
    ];
    let o = {
      _features: r
    };
    const s = o._features.reduce((f, g) => Object.assign(f, g.getDefaultOptions == null ? void 0 : g.getDefaultOptions(o)), {}), i = (f) => o.options.mergeOptions ? o.options.mergeOptions(s, f) : {
      ...s,
      ...f
    };
    let u = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    o._features.forEach((f) => {
      var g;
      u = (g = f.getInitialState == null ? void 0 : f.getInitialState(u)) != null ? g : u;
    });
    const c = [];
    let d = false;
    const p = {
      _features: r,
      options: {
        ...s,
        ...e
      },
      initialState: u,
      _queue: (f) => {
        c.push(f), d || (d = true, Promise.resolve().then(() => {
          for (; c.length; ) c.shift()();
          d = false;
        }).catch((g) => setTimeout(() => {
          throw g;
        })));
      },
      reset: () => {
        o.setState(o.initialState);
      },
      setOptions: (f) => {
        const g = Qe(f, o.options);
        o.options = i(g);
      },
      getState: () => o.options.state,
      setState: (f) => {
        o.options.onStateChange == null || o.options.onStateChange(f);
      },
      _getRowId: (f, g, h) => {
        var b;
        return (b = o.options.getRowId == null ? void 0 : o.options.getRowId(f, g, h)) != null ? b : `${h ? [
          h.id,
          g
        ].join(".") : g}`;
      },
      getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
      getRowModel: () => o.getPaginationRowModel(),
      getRow: (f, g) => {
        let h = (g ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[f];
        if (!h && (h = o.getCoreRowModel().rowsById[f], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: D(() => [
        o.options.defaultColumn
      ], (f) => {
        var g;
        return f = (g = f) != null ? g : {}, {
          header: (h) => {
            const b = h.header.column.columnDef;
            return b.accessorKey ? b.accessorKey : b.accessorFn ? b.id : null;
          },
          cell: (h) => {
            var b, _;
            return (b = (_ = h.renderValue()) == null || _.toString == null ? void 0 : _.toString()) != null ? b : null;
          },
          ...o._features.reduce((h, b) => Object.assign(h, b.getDefaultColumnDef == null ? void 0 : b.getDefaultColumnDef()), {}),
          ...f
        };
      }, T(e, "debugColumns")),
      _getColumnDefs: () => o.options.columns,
      getAllColumns: D(() => [
        o._getColumnDefs()
      ], (f) => {
        const g = function(h, b, _) {
          return _ === void 0 && (_ = 0), h.map((x) => {
            const v = wa(o, x, _, b), R = x;
            return v.columns = R.columns ? g(R.columns, v, _ + 1) : [], v;
          });
        };
        return g(f);
      }, T(e, "debugColumns")),
      getAllFlatColumns: D(() => [
        o.getAllColumns()
      ], (f) => f.flatMap((g) => g.getFlatColumns()), T(e, "debugColumns")),
      _getAllFlatColumnsById: D(() => [
        o.getAllFlatColumns()
      ], (f) => f.reduce((g, h) => (g[h.id] = h, g), {}), T(e, "debugColumns")),
      getAllLeafColumns: D(() => [
        o.getAllColumns(),
        o._getOrderColumnsFn()
      ], (f, g) => {
        let h = f.flatMap((b) => b.getLeafColumns());
        return g(h);
      }, T(e, "debugColumns")),
      getColumn: (f) => o._getAllFlatColumnsById()[f]
    };
    Object.assign(o, p);
    for (let f = 0; f < o._features.length; f++) {
      const g = o._features[f];
      g == null || g.createTable == null || g.createTable(o);
    }
    return o;
  }
  function su() {
    return (e) => D(() => [
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
          const d = Ln(e, e._getRowId(o[c], c, i), o[c], c, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(d), n.rowsById[d.id] = d, l.push(d), e.options.getSubRows) {
            var u;
            d.originalSubRows = e.options.getSubRows(o[c], c), (u = d.originalSubRows) != null && u.length && (d.subRows = r(d.originalSubRows, s + 1, d));
          }
        }
        return l;
      };
      return n.rows = r(t), n;
    }, T(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function iu(e) {
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
  function lu(e, t, n) {
    return n.options.filterFromLeafRows ? au(e, t, n) : uu(e, t, n);
  }
  function au(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(u, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let f = 0; f < u.length; f++) {
        var p;
        let g = u[f];
        const h = Ln(n, g.id, g.original, g.index, g.depth, void 0, g.parentId);
        if (h.columnFilters = g.columnFilters, (p = g.subRows) != null && p.length && c < i) {
          if (h.subRows = l(g.subRows, c + 1), g = h, t(g) && !h.subRows.length) {
            d.push(g), s[g.id] = g, o.push(g);
            continue;
          }
          if (t(g) || h.subRows.length) {
            d.push(g), s[g.id] = g, o.push(g);
            continue;
          }
        } else g = h, t(g) && (d.push(g), s[g.id] = g, o.push(g));
      }
      return d;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function uu(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(u, c) {
      c === void 0 && (c = 0);
      const d = [];
      for (let f = 0; f < u.length; f++) {
        let g = u[f];
        if (t(g)) {
          var p;
          if ((p = g.subRows) != null && p.length && c < i) {
            const b = Ln(n, g.id, g.original, g.index, g.depth, void 0, g.parentId);
            b.subRows = l(g.subRows, c + 1), g = b;
          }
          d.push(g), o.push(g), s[g.id] = g;
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
  function cu() {
    return (e) => D(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, r) => {
      if (!t.rows.length || !(n != null && n.length) && !r) {
        for (let f = 0; f < t.flatRows.length; f++) t.flatRows[f].columnFilters = {}, t.flatRows[f].columnFiltersMeta = {};
        return t;
      }
      const o = [], s = [];
      (n ?? []).forEach((f) => {
        var g;
        const h = e.getColumn(f.id);
        if (!h) return;
        const b = h.getFilterFn();
        b && o.push({
          id: f.id,
          filterFn: b,
          resolvedValue: (g = b.resolveFilterValue == null ? void 0 : b.resolveFilterValue(f.value)) != null ? g : f.value
        });
      });
      const i = (n ?? []).map((f) => f.id), l = e.getGlobalFilterFn(), u = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
      r && l && u.length && (i.push("__global__"), u.forEach((f) => {
        var g;
        s.push({
          id: f.id,
          filterFn: l,
          resolvedValue: (g = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(r)) != null ? g : r
        });
      }));
      let c, d;
      for (let f = 0; f < t.flatRows.length; f++) {
        const g = t.flatRows[f];
        if (g.columnFilters = {}, o.length) for (let h = 0; h < o.length; h++) {
          c = o[h];
          const b = c.id;
          g.columnFilters[b] = c.filterFn(g, b, c.resolvedValue, (_) => {
            g.columnFiltersMeta[b] = _;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            d = s[h];
            const b = d.id;
            if (d.filterFn(g, b, d.resolvedValue, (_) => {
              g.columnFiltersMeta[b] = _;
            })) {
              g.columnFilters.__global__ = true;
              break;
            }
          }
          g.columnFilters.__global__ !== true && (g.columnFilters.__global__ = false);
        }
      }
      const p = (f) => {
        for (let g = 0; g < i.length; g++) if (f.columnFilters[i[g]] === false) return false;
        return true;
      };
      return lu(t.rows, p, e);
    }, T(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function du(e) {
    return (t) => D(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, r) => {
      if (!r.rows.length) return r;
      const { pageSize: o, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: u } = r;
      const c = o * s, d = c + o;
      i = i.slice(c, d);
      let p;
      t.options.paginateExpandedRows ? p = {
        rows: i,
        flatRows: l,
        rowsById: u
      } : p = iu({
        rows: i,
        flatRows: l,
        rowsById: u
      }), p.flatRows = [];
      const f = (g) => {
        p.flatRows.push(g), g.subRows.length && g.subRows.forEach(f);
      };
      return p.rows.forEach(f), p;
    }, T(t.options, "debugTable"));
  }
  function fu() {
    return (e) => D(() => [
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
        return c.sort((d, p) => {
          for (let g = 0; g < s.length; g += 1) {
            var f;
            const h = s[g], b = i[h.id], _ = b.sortUndefined, x = (f = h == null ? void 0 : h.desc) != null ? f : false;
            let v = 0;
            if (_) {
              const R = d.getValue(h.id), F = p.getValue(h.id), z = R === void 0, M = F === void 0;
              if (z || M) {
                if (_ === "first") return z ? -1 : 1;
                if (_ === "last") return z ? 1 : -1;
                v = z && M ? 0 : z ? _ : -_;
              }
            }
            if (v === 0 && (v = b.sortingFn(d, p, h.id)), v !== 0) return x && (v *= -1), b.invertSorting && (v *= -1), v;
          }
          return d.index - p.index;
        }), c.forEach((d) => {
          var p;
          o.push(d), (p = d.subRows) != null && p.length && (d.subRows = l(d.subRows));
        }), c;
      };
      return {
        rows: l(n.rows),
        flatRows: o,
        rowsById: n.rowsById
      };
    }, T(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function wt(e, t) {
    return e ? gu(e) ? y.createElement(e, t) : e : null;
  }
  function gu(e) {
    return pu(e) || typeof e == "function" || hu(e);
  }
  function pu(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function hu(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function mu(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: ou(t)
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
  function at(e, t, n) {
    let r = n.initialDeps ?? [], o, s = true;
    function i() {
      var l, u, c;
      let d;
      n.key && ((l = n.debug) != null && l.call(n)) && (d = Date.now());
      const p = e();
      if (!(p.length !== r.length || p.some((h, b) => r[b] !== h))) return o;
      r = p;
      let g;
      if (n.key && ((u = n.debug) != null && u.call(n)) && (g = Date.now()), o = t(...p), n.key && ((c = n.debug) != null && c.call(n))) {
        const h = Math.round((Date.now() - d) * 100) / 100, b = Math.round((Date.now() - g) * 100) / 100, _ = b / 16, x = (v, R) => {
          for (v = String(v); v.length < R; ) v = " " + v;
          return v;
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
  function Er(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const yu = (e, t) => Math.abs(e - t) < 1.01, bu = (e, t, n) => {
    let r;
    return function(...o) {
      e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
    };
  }, Nr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, _u = (e) => e, xu = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let o = t; o <= n; o++) r.push(o);
    return r;
  }, vu = (e, t) => {
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
    if (o(Nr(n)), !r.ResizeObserver) return () => {
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
        o(Nr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, Or = {
    passive: true
  }, Lr = typeof window > "u" ? true : "onscrollend" in window, Cu = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    let o = 0;
    const s = e.options.useScrollendEvent && Lr ? () => {
    } : bu(r, () => {
      t(o, false);
    }, e.options.isScrollingResetDelay), i = (d) => () => {
      const { horizontal: p, isRtl: f } = e.options;
      o = p ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, s(), t(o, d);
    }, l = i(true), u = i(false);
    n.addEventListener("scroll", l, Or);
    const c = e.options.useScrollendEvent && Lr;
    return c && n.addEventListener("scrollend", u, Or), () => {
      n.removeEventListener("scroll", l), c && n.removeEventListener("scrollend", u);
    };
  }, wu = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const r = t.borderBoxSize[0];
      if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, ju = (e, { adjustments: t = 0, behavior: n }, r) => {
    var o, s;
    const i = e + t;
    (s = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || s.call(o, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class Su {
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
          getItemKey: _u,
          rangeExtractor: xu,
          onChange: () => {
          },
          measureElement: wu,
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
      }, this.maybeNotify = at(() => (this.calculateRange(), [
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
      }, this.getMeasurementOptions = at(() => [
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
      }), this.getMeasurements = at(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: s, enabled: i, lanes: l }, u) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const f of this.laneAssignments.keys()) f >= n && this.laneAssignments.delete(f);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((f) => {
          this.itemSizeCache.set(f.key, f.size);
        }));
        const c = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const d = this.measurementsCache.slice(0, c), p = new Array(l).fill(void 0);
        for (let f = 0; f < c; f++) {
          const g = d[f];
          g && (p[g.lane] = f);
        }
        for (let f = c; f < n; f++) {
          const g = s(f), h = this.laneAssignments.get(f);
          let b, _;
          if (h !== void 0 && this.options.lanes > 1) {
            b = h;
            const F = p[b], z = F !== void 0 ? d[F] : void 0;
            _ = z ? z.end + this.options.gap : r + o;
          } else {
            const F = this.options.lanes === 1 ? d[f - 1] : this.getFurthestMeasurement(d, f);
            _ = F ? F.end + this.options.gap : r + o, b = F ? F.lane : f % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(f, b);
          }
          const x = u.get(g), v = typeof x == "number" ? x : this.options.estimateSize(f), R = _ + v;
          d[f] = {
            index: f,
            start: _,
            size: v,
            end: R,
            key: g,
            lane: b
          }, p[b] = f;
        }
        return this.measurementsCache = d, d;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = at(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, r, o, s) => this.range = n.length > 0 && r > 0 ? Ru({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = at(() => {
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
      }, this.getVirtualItems = at(() => [
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
        if (r.length !== 0) return Er(r[vo(0, r.length - 1, (o) => Er(r[o]).start, n)]);
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
          const [p, f] = d;
          this._scrollToOffset(p, {
            adjustments: void 0,
            behavior: o
          }), this.targetWindow.requestAnimationFrame(() => {
            const g = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), b = this.getOffsetForIndex(n, f);
              if (!b) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              yu(b[0], h) || u(f);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(g) : g();
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
  const vo = (e, t, n, r) => {
    for (; e <= t; ) {
      const o = (e + t) / 2 | 0, s = n(o);
      if (s < r) e = o + 1;
      else if (s > r) t = o - 1;
      else return o;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Ru({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
    const o = e.length - 1, s = (u) => e[u].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: o
    };
    let i = vo(0, o, s, n), l = i;
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
  const Hr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Mu({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], r = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? Qo.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [o] = y.useState(() => new Su(r));
    return o.setOptions(r), Hr(() => o._didMount(), []), Hr(() => o._willUpdate()), o;
  }
  function Iu(e) {
    return Mu({
      observeElementRect: vu,
      observeElementOffset: Cu,
      scrollToFn: ju,
      ...e
    });
  }
  function Br(e) {
    return typeof e == "function" ? e() : e;
  }
  function ut(e, t, n = true) {
    const [r, o] = y.useState(() => {
      if (!n) return Br(t);
      try {
        const i = localStorage.getItem(e);
        if (i !== null) return JSON.parse(i);
      } catch {
      }
      return Br(t);
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
  function Vr(e) {
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
  function Au(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: u, tableSorting: c, tableQuickFilter: d, gridRowsLength: p } = e, f = y.useRef([]), g = y.useRef([]), h = y.useRef(""), b = y.useRef(c), _ = y.useRef(u), x = y.useRef(d), [v, R] = ut(`jtc_sorting_${t}`, [], c);
    y.useEffect(() => {
      c ? !b.current && f.current.length > 0 && R(f.current) : R((k) => (k.length > 0 && (f.current = k), [])), b.current = c;
    }, [
      c,
      R
    ]);
    const [F, z] = ut(`jtc_filters_${t}`, [], u);
    y.useEffect(() => {
      u ? !_.current && g.current.length > 0 && z(g.current) : z((k) => (k.length > 0 && (g.current = k), [])), _.current = u;
    }, [
      u,
      z
    ]);
    const [M, A] = ut(`jtc_global_filter_${t}`, "", d);
    y.useEffect(() => {
      d ? !x.current && h.current && A(h.current) : A((k) => (k && (h.current = k), "")), x.current = d;
    }, [
      d,
      A
    ]);
    const [S, O] = y.useState({}), [H, G] = ut(`jtc_col_sizes_${t}`, () => {
      const k = {};
      return n.forEach((E) => {
        E.width && (k[E.path] = E.width);
      }), o === true && (k.__select__ = 48), k;
    }, !r), ie = y.useMemo(() => Number(s) || 25, [
      s
    ]), [ce, le] = ut(`jtc_pagination_${t}`, {
      pageIndex: 0,
      pageSize: ie
    });
    y.useEffect(() => {
      le((k) => k.pageSize === ie ? k : {
        pageIndex: 0,
        pageSize: ie
      });
    }, [
      ie,
      le
    ]);
    const re = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(p, 1)
    } : ce, [
      l,
      p,
      ce
    ]), de = y.useMemo(() => Vr(i), [
      i
    ]), [te, C] = ut(`jtc_visibility_${t}`, {}), P = y.useCallback(() => {
      C({});
    }, [
      C
    ]);
    return {
      sorting: v,
      columnFilters: F,
      globalFilter: M,
      rowSelection: S,
      columnSizing: H,
      pagination: ce,
      effectivePagination: re,
      columnVisibility: te,
      setSorting: R,
      setColumnFilters: z,
      setGlobalFilter: A,
      setRowSelection: O,
      setColumnSizing: G,
      setPagination: le,
      setColumnVisibility: C,
      pageSizeOptions: de,
      parsePageSizeOptions: Vr,
      showAllColumns: P
    };
  }
  const $u = [
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
  ], Fu = [
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
  ], zu = [
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
  ], Du = [
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
  ], Tu = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function Pu(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function ku(e) {
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
  function Eu({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: s }) {
    const i = Tn(), l = js(i.breakpoints.down("sm")), u = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), c = y.useMemo(() => {
      switch (u) {
        case "number":
          return Fu;
        case "date":
          return zu;
        case "boolean":
          return Du;
        default:
          return $u;
      }
    }, [
      u
    ]), d = y.useMemo(() => {
      const S = Pu(u);
      if (r == null) return {
        operator: S,
        value: ""
      };
      if (typeof r == "object" && r !== null && "operator" in r) {
        const O = r;
        return c.some((G) => G.value === O.operator) ? O : {
          operator: S,
          value: O.value
        };
      }
      return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? {
        operator: S,
        value: r
      } : {
        operator: S,
        value: JSON.stringify(r)
      };
    }, [
      r,
      u,
      c
    ]), [p, f] = y.useState(d.operator), [g, h] = y.useState(typeof d.value == "boolean" ? String(d.value) : d.value), b = y.useMemo(() => r != null, [
      r
    ]);
    y.useEffect(() => {
      e && (f(d.operator), h(typeof d.value == "boolean" ? String(d.value) : d.value));
    }, [
      d,
      e
    ]);
    const _ = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(p), x = y.useCallback(() => {
      if (!_) {
        n({
          operator: p,
          value: ""
        });
        return;
      }
      if (u === "boolean") {
        n({
          operator: p,
          value: g === "true"
        });
        return;
      }
      const S = typeof g == "string" ? g.trim() : String(g).trim();
      if (S === "") n(void 0);
      else {
        const O = u === "number" ? Number(S) : S;
        n({
          operator: p,
          value: O
        });
      }
    }, [
      _,
      u,
      p,
      g,
      n
    ]), v = y.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), R = y.useCallback((S) => {
      S.key === "Enter" && !S.shiftKey && (S.preventDefault(), x());
    }, [
      x
    ]), F = y.useCallback((S) => {
      f(S), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(S) || u !== "boolean" && (g === "true" || g === "false")) && h("");
    }, [
      g,
      u
    ]), z = o.split(".").pop() || o, M = `filter-dialog-title-${o}`, A = `filter-dialog-description-${o}`;
    return a.jsxs(kn, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": M,
      "aria-describedby": A,
      children: [
        a.jsx(En, {
          id: M,
          children: a.jsxs($, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              m.t("json_table_filter_for_column").replace("{column}", z),
              b && a.jsx(Ue, {
                label: m.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        a.jsxs(Nn, {
          children: [
            a.jsx(w, {
              id: A,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: m.t("json_table_filter_dialog_description")
            }),
            a.jsxs($, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: R,
              children: [
                a.jsxs(ke, {
                  fullWidth: true,
                  children: [
                    a.jsx(Ee, {
                      id: `filter-operator-label-${o}`,
                      children: m.t("json_table_filter_operator")
                    }),
                    a.jsx(ze, {
                      value: p,
                      label: m.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${o}`,
                      onChange: (S) => F(S.target.value),
                      children: c.map((S) => a.jsx(L, {
                        value: S.value,
                        children: m.t(S.label)
                      }, S.value))
                    })
                  ]
                }),
                _ && u === "boolean" && a.jsxs(ke, {
                  fullWidth: true,
                  children: [
                    a.jsx(Ee, {
                      id: `filter-value-label-${o}`,
                      children: m.t("json_table_filter_value")
                    }),
                    a.jsx(ze, {
                      value: g === "true" || g === "false" ? g : "",
                      label: m.t("json_table_filter_value"),
                      labelId: `filter-value-label-${o}`,
                      onChange: (S) => h(S.target.value),
                      children: Tu.map((S) => a.jsx(L, {
                        value: S.value,
                        children: m.t(S.label)
                      }, S.value))
                    })
                  ]
                }),
                _ && u === "date" && a.jsx(J, {
                  label: m.t("json_table_filter_value"),
                  value: ku(g),
                  onChange: (S) => h(S.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                _ && u === "number" && a.jsx(J, {
                  label: m.t("json_table_filter_value"),
                  value: g,
                  onChange: (S) => h(S.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                _ && u === "string" && a.jsx(J, {
                  label: m.t("json_table_filter_value"),
                  value: g,
                  onChange: (S) => h(S.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !_ && a.jsx(w, {
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
        a.jsxs(Pn, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            b && a.jsx(Oe, {
              onClick: v,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: m.t("json_table_filter_clear")
            }),
            a.jsx(Oe, {
              onClick: t,
              children: m.t("cancel")
            }),
            a.jsx(Oe, {
              variant: "contained",
              onClick: x,
              disabled: _ && u === "boolean" && g !== "true" && g !== "false",
              children: m.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function Nu({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: u, onShowAllColumns: c, hasHiddenColumns: d }) {
    var _a2, _b, _c, _d, _e, _f;
    const [p, f] = y.useState(false), g = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, h = s && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, b = ((_c = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c.call(r)) === true, _ = i != null;
    if (!(g || h || b)) return null;
    const v = () => {
      r && l([
        {
          id: r.id,
          desc: false
        }
      ]), n();
    }, R = () => {
      r && l([
        {
          id: r.id,
          desc: true
        }
      ]), n();
    }, F = () => {
      r && u(r.id), n();
    }, z = () => {
      f(true);
    }, M = () => {
      f(false);
    }, A = (G) => {
      r == null ? void 0 : r.setFilterValue(G), f(false), n();
    }, S = () => {
      r == null ? void 0 : r.setFilterValue(void 0), n();
    }, O = () => {
      var _a3;
      (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
    }, H = () => {
      c == null ? void 0 : c(), n();
    };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs(Zo, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            g && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(L, {
                  onClick: v,
                  children: [
                    a.jsx(mt, {
                      children: a.jsx(Zr, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(w, {
                      variant: "body2",
                      children: m.t("json_table_sort_asc")
                    })
                  ]
                }),
                a.jsxs(L, {
                  onClick: R,
                  children: [
                    a.jsx(mt, {
                      children: a.jsx(Qr, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(w, {
                      variant: "body2",
                      children: m.t("json_table_sort_desc")
                    })
                  ]
                }),
                o && a.jsx(L, {
                  onClick: F,
                  children: a.jsx(w, {
                    variant: "body2",
                    children: m.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            g && h && a.jsx(Xt, {}),
            h && a.jsxs(a.Fragment, {
              children: [
                a.jsxs(L, {
                  onClick: z,
                  children: [
                    a.jsx(mt, {
                      children: a.jsx(Hi, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(w, {
                      variant: "body2",
                      children: m.t("json_table_set_filter")
                    })
                  ]
                }),
                _ && a.jsxs(L, {
                  onClick: S,
                  children: [
                    a.jsx(mt, {
                      children: a.jsx(cs, {
                        fontSize: "small"
                      })
                    }),
                    a.jsx(w, {
                      variant: "body2",
                      children: m.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (g || h) && b && a.jsx(Xt, {}),
            b && a.jsxs(L, {
              onClick: O,
              children: [
                a.jsx(mt, {
                  children: a.jsx(no, {
                    fontSize: "small"
                  })
                }),
                a.jsx(w, {
                  variant: "body2",
                  children: m.t("json_table_hide_column")
                })
              ]
            }),
            d && c && a.jsx(L, {
              onClick: H,
              children: a.jsx(w, {
                variant: "body2",
                children: m.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && r && p && a.jsx(Eu, {
          open: p,
          onClose: M,
          onApply: A,
          currentValue: (_d = r.getFilterValue) == null ? void 0 : _d.call(r),
          columnId: r.id,
          columnType: (_f = (_e = r.columnDef) == null ? void 0 : _e.meta) == null ? void 0 : _f.columnType
        })
      ]
    });
  }
  const Ou = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, Lu = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, Hu = (e) => {
    const { children: t, value: n, ...r } = e;
    return a.jsx(L, {
      ...r,
      value: n,
      children: a.jsx(w, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, Bu = () => {
    const e = y.useContext(ts), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = ns("oid"), s = ps("oid"), i = Tn(), l = t == null ? void 0 : t.type, u = l === "string" || l === "mixed" || l === "json", c = y.useMemo(() => {
      if (s == null) return [];
      let j;
      if (typeof s == "string") try {
        j = JSON.parse(s);
      } catch {
        return [];
      }
      else j = s;
      return Array.isArray(j) ? j : typeof j == "object" && j !== null ? [
        j
      ] : [];
    }, [
      s
    ]), d = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: p, rows: f, meta: g } = ma(c, d), h = y.useMemo(() => {
      const j = n.data.tableMaxDepth || 10;
      return g.maxDepth > j ? {
        actual: g.maxDepth,
        configured: j
      } : null;
    }, [
      g.maxDepth,
      n.data.tableMaxDepth
    ]), b = y.useMemo(() => ro(n.data.columnConfig), [
      n.data.columnConfig
    ]), _ = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || Ou[_] || 52, v = Number(n.data.tableHeaderHeight) || Lu[_] || 56, R = f, F = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, z = y.useMemo(() => Yl({
      columnConfig: b,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: F,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (j, I) => a.jsx(wr, {
        value: j,
        config: I,
        valueSize: o.valueSize
      }),
      renderAutoDetectedCell: (j) => a.jsx(wr, {
        value: j,
        valueSize: o.valueSize
      }),
      renderSelectionHeader: (j) => a.jsx(At, {
        size: "small",
        indeterminate: j.getIsSomePageRowsSelected(),
        checked: j.getIsAllPageRowsSelected(),
        onChange: j.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (j) => a.jsx(At, {
        size: "small",
        checked: j.getIsSelected(),
        onChange: j.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      b,
      p,
      n.data.tableSorting,
      F,
      n.data.tableRowSelection,
      n.data.tableHiding,
      o.valueSize
    ]), M = y.useMemo(() => {
      var _a2;
      const j = /* @__PURE__ */ new Map();
      for (const I of b) ((_a2 = I.format) == null ? void 0 : _a2.type) === "date" && j.set(I.path, {
        dateFormat: I.format.dateFormat,
        dateInputFormat: I.format.dateInputFormat
      });
      return j;
    }, [
      b
    ]), A = y.useCallback((j, I, N) => {
      const K = typeof N == "string" ? N.toLowerCase() : typeof N == "number" || typeof N == "boolean" ? String(N).toLowerCase() : "";
      if (!K) return true;
      const Z = j.getValue(I);
      if (Z == null) return false;
      const _e = M.get(I);
      return _e && On(Z, _e.dateFormat, _e.dateInputFormat).toLowerCase().includes(K) ? true : (typeof Z == "string" ? Z : typeof Z == "number" || typeof Z == "boolean" ? String(Z) : "").toLowerCase().includes(K);
    }, [
      M
    ]), S = n.data.tableAutoSize === true, { sorting: O, columnFilters: H, globalFilter: G, rowSelection: ie, columnSizing: ce, pagination: le, effectivePagination: re, columnVisibility: de, setSorting: te, setColumnFilters: C, setGlobalFilter: P, setRowSelection: k, setColumnSizing: E, setPagination: oe, setColumnVisibility: U, pageSizeOptions: He, showAllColumns: Be } = Au({
      widgetId: r,
      columnConfig: b,
      tableAutoSize: S,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: F,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: R.length
    }), he = mu({
      data: R,
      columns: z,
      getCoreRowModel: su(),
      getSortedRowModel: fu(),
      getFilteredRowModel: cu(),
      getPaginationRowModel: du(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: A,
      filterFns: Wl,
      columnResizeMode: "onChange",
      enableColumnResizing: !S,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: O,
        columnFilters: H,
        globalFilter: G,
        pagination: re,
        rowSelection: ie,
        columnSizing: ce,
        columnVisibility: de
      },
      onSortingChange: te,
      onColumnFiltersChange: C,
      onGlobalFilterChange: P,
      onPaginationChange: n.data.tablePagination !== false ? oe : void 0,
      onRowSelectionChange: k,
      onColumnSizingChange: E,
      onColumnVisibilityChange: U,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: F,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), Ye = y.useRef(null), Te = y.useRef(null), [q, gt] = y.useState({}), [st, be] = y.useState(null), Pe = y.useRef(null), [$e, Co] = y.useState(void 0), [wo, jo] = y.useState(void 0), So = y.useCallback((j, I) => {
      var _a2;
      Pe.current = j;
      const N = j.id, K = O.find((_e) => _e.id === N), Z = (_a2 = H.find((_e) => _e.id === N)) == null ? void 0 : _a2.value;
      Co(K), jo(Z), be(I);
    }, [
      O,
      H
    ]), Ro = y.useCallback(() => {
      be(null);
    }, []);
    y.useEffect(() => {
      if (!S) return;
      const j = Te.current;
      if (!j) return;
      const I = new ResizeObserver(() => {
        const N = j.querySelector("tr[data-row-index]");
        if (!N) return;
        const K = N.querySelectorAll("td"), Z = he.getHeaderGroups()[0];
        if (!Z || K.length !== Z.headers.length) return;
        const _e = {};
        Z.headers.forEach((kt, et) => {
          const tr = K[et];
          tr && (_e[kt.id] = tr.getBoundingClientRect().width);
        }), gt(_e);
      });
      return I.observe(j), () => I.disconnect();
    }, [
      S,
      he
    ]);
    const Mo = y.useMemo(() => {
      const j = {
        tableLayout: S ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) j["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const I = n.data.horizontalCellBorderWidth ?? 1, N = Et(n.data.horizontalCellBorderColor);
        j["& .MuiTableCell-root"] = {
          ...j["& .MuiTableCell-root"],
          borderBottom: `${I}px solid`,
          borderBottomColor: N || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const I = n.data.verticalCellBorderWidth ?? 1, N = Et(n.data.verticalCellBorderColor);
        j["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${I}px solid`,
          borderRightColor: N || "divider"
        };
      }
      return j;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      S
    ]), pt = n.data.tableHeaderBgColor, it = n.data.tableHeaderTextColor, lt = n.data.tableHeaderFontSize, Io = y.useMemo(() => ({
      height: v,
      padding: 0,
      whiteSpace: "nowrap",
      ...it && {
        color: it
      },
      ...lt && {
        fontSize: `${lt}px`
      }
    }), [
      v,
      it,
      lt
    ]), Wn = y.useMemo(() => ({
      ...it && {
        color: it
      },
      ...lt && {
        fontSize: `${lt}px`
      }
    }), [
      it,
      lt
    ]), Gn = n.data.noCard === true, an = n.data.headerBorderWidth ?? 0, Un = Et(n.data.headerBorderColor), Ao = y.useMemo(() => {
      const j = n.data.tableHeaderElevation ?? 6, I = Gn ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: j > 0 ? i.shadows[j] : "none"
      };
      an > 0 && (I["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${an}px`,
        backgroundColor: Un || i.palette.divider,
        pointerEvents: "none"
      });
      const N = pt ? nt(pt) : null;
      return N ? {
        ...I,
        background: N
      } : pt ? {
        ...I,
        backgroundColor: pt
      } : I;
    }, [
      Gn,
      pt,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      an,
      Un
    ]), $o = y.useMemo(() => {
      const j = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, I = n.data.borderWidth, N = n.data.borderStyle || "solid", K = Et(n.data.borderColor), Z = n.data.borderRadius;
      return I && I > 0 && (j.border = `${I}px ${N}`, j.borderColor = K || "divider"), Z && (j.borderRadius = Z), j;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Fo = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), zo = y.useCallback((j) => S ? q[j.id] ?? "auto" : j.getSize(), [
      S,
      q
    ]), qn = y.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), Dt = n.data.evenRowColor || null, Tt = n.data.oddRowColor || null, Yn = Dt ? nt(Dt) : null, Jn = Tt ? nt(Tt) : null, Kn = y.useCallback((j) => {
      const I = j % 2 === 0, N = I ? Dt : Tt, K = I ? Yn : Jn;
      if (N) return K ? {
        background: K
      } : {
        backgroundColor: N
      };
    }, [
      Dt,
      Tt,
      Yn,
      Jn
    ]), Pt = he.getRowModel().rows, Xn = Iu({
      count: Pt.length,
      getScrollElement: () => Ye.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), Do = n.data.tableVirtualizeThreshold ?? 50, ht = n.data.tablePagination === false && Pt.length > Do ? Xn.getVirtualItems() : null, To = ht == null ? void 0 : ht[0], Qn = ht == null ? void 0 : ht[ht.length - 1], Zn = (To == null ? void 0 : To.start) ?? 0, er = Qn ? Xn.getTotalSize() - (Qn.end ?? 0) : 0;
    return a.jsxs(rs, {
      isValidType: u,
      data: o,
      children: [
        a.jsx(os, {
          data: o,
          widget: n
        }),
        u && z.length > 0 ? a.jsxs($, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && a.jsx($, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: a.jsx(J, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: G,
                onChange: (j) => P(j.target.value),
                placeholder: m.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: a.jsx(Yr, {
                      position: "start",
                      children: a.jsx(to, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && a.jsx(qt, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: a.jsx(w, {
                variant: "body2",
                children: m.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            a.jsx($, {
              sx: $o,
              children: a.jsx(ii, {
                ref: Ye,
                sx: Fo,
                children: a.jsxs(qs, {
                  size: _ === "compact" ? "small" : "medium",
                  sx: Mo,
                  children: [
                    a.jsx(di, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...Ao,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: he.getHeaderGroups().map((j) => a.jsx(yt, {
                        children: j.headers.map((I) => {
                          const N = I.column.getCanSort(), K = I.column.getIsSorted(), Z = I.column.columnDef.meta, _e = I.column.id === "__select__", kt = !S;
                          return a.jsxs(Xe, {
                            component: "th",
                            colSpan: I.colSpan,
                            align: (Z == null ? void 0 : Z.align) || "left",
                            padding: _e ? "checkbox" : "normal",
                            sx: {
                              width: zo(I),
                              minWidth: _e ? 48 : 40,
                              position: "relative",
                              ...Io
                            },
                            children: [
                              _e ? wt(I.column.columnDef.header, I.getContext()) : a.jsxs($, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (Z == null ? void 0 : Z.align) === "right" ? "flex-end" : (Z == null ? void 0 : Z.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  N ? a.jsx(Ni, {
                                    active: K !== false,
                                    direction: K === "desc" ? "desc" : "asc",
                                    onClick: I.column.getToggleSortingHandler(),
                                    children: a.jsx(w, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: Wn,
                                      children: wt(I.column.columnDef.header, I.getContext())
                                    })
                                  }) : a.jsx(w, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: Wn,
                                    children: wt(I.column.columnDef.header, I.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (I.column.getCanSort() || F && I.column.getCanFilter() || I.column.getCanHide()) && a.jsx(ve, {
                                    title: m.t("json_table_column_menu"),
                                    children: a.jsx(ae, {
                                      size: "small",
                                      "aria-label": m.t("json_table_column_menu"),
                                      onClick: (et) => {
                                        et.stopPropagation(), So(I.column, et.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: a.jsx(Bi, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              kt && I.column.getCanResize() && a.jsx($, {
                                className: "resize-handle",
                                onMouseDown: I.getResizeHandler(),
                                onTouchStart: I.getResizeHandler(),
                                onClick: (et) => et.stopPropagation(),
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
                      }, j.id))
                    }),
                    a.jsx(Qs, {
                      ref: Te,
                      children: ht ? a.jsxs(a.Fragment, {
                        children: [
                          Zn > 0 && a.jsx(yt, {
                            children: a.jsx(Xe, {
                              colSpan: z.length,
                              sx: {
                                height: Zn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          ht.map((j) => {
                            const I = Pt[j.index], N = j.index;
                            return a.jsx(yt, {
                              "data-row-index": N,
                              sx: {
                                height: x,
                                ...Kn(N)
                              },
                              children: I.getVisibleCells().map((K) => {
                                var _a2;
                                const Z = K.column.id === "__select__";
                                return a.jsx(Xe, {
                                  align: ((_a2 = K.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: Z ? "checkbox" : "normal",
                                  sx: {
                                    ...qn
                                  },
                                  children: wt(K.column.columnDef.cell, K.getContext())
                                }, K.id);
                              })
                            }, I.id);
                          }),
                          er > 0 && a.jsx(yt, {
                            children: a.jsx(Xe, {
                              colSpan: z.length,
                              sx: {
                                height: er,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Pt.map((j, I) => a.jsx(yt, {
                        "data-row-index": I,
                        sx: {
                          height: x,
                          ...Kn(I)
                        },
                        children: j.getVisibleCells().map((N) => {
                          var _a2;
                          const K = N.column.id === "__select__";
                          return a.jsx(Xe, {
                            align: ((_a2 = N.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: K ? "checkbox" : "normal",
                            sx: {
                              ...qn
                            },
                            children: wt(N.column.columnDef.cell, N.getContext())
                          }, N.id);
                        })
                      }, j.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && a.jsx(Ai, {
              component: "div",
              count: he.getFilteredRowModel().rows.length,
              page: le.pageIndex,
              rowsPerPage: le.pageSize,
              rowsPerPageOptions: He,
              onPageChange: (j, I) => oe((N) => ({
                ...N,
                pageIndex: I
              })),
              onRowsPerPageChange: (j) => oe({
                pageIndex: 0,
                pageSize: parseInt(j.target.value, 10)
              }),
              labelRowsPerPage: a.jsx(w, {
                variant: "body2",
                component: "span",
                children: m.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: j, to: I, count: N }) => a.jsx(w, {
                variant: "body2",
                component: "span",
                children: `${j}\u2013${I} / ${N}`
              }),
              slots: {
                menuItem: Hu
              },
              slotProps: {
                select: {
                  renderValue: (j) => a.jsx(w, {
                    variant: "body2",
                    component: "span",
                    children: String(j)
                  })
                }
              }
            }),
            a.jsx(Nu, {
              anchorEl: st,
              open: !!st,
              onClose: Ro,
              activeColumn: Pe.current,
              isSorted: $e !== void 0,
              tableFiltering: F,
              activeColumnFilter: wo,
              onSetSorting: te,
              onClearSorting: (j) => te((I) => I.filter((N) => N.id !== j)),
              onShowAllColumns: Be,
              hasHiddenColumns: Object.keys(de).some((j) => de[j] === false)
            })
          ]
        }) : a.jsx($, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: a.jsx(w, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? m.t("json_table_no_oid") : u ? b.length > 0 && z.length === 0 ? m.t("json_table_all_columns_hidden") : m.t("json_table_no_data") : m.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, Vu = [
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
  Dn = class extends m {
    static createObjectFields() {
      const t = ss([
        "string",
        "mixed",
        "json"
      ]), n = t.find((r) => r.name === "oid");
      if (n) {
        const r = n, o = r.onChange;
        r.onChange = async (s, i, l, u) => {
          if (!i.oid) {
            for (const c of Vu) delete i[c];
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
              ...or()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Dn.createObjectFields(),
              ..._a()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...or({
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
      return Dn.getWidgetInfo();
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
      return is(this.wrapContent(a.jsx(Bu, {})), n);
    }
  };
});
export {
  __tla,
  Dn as default
};
