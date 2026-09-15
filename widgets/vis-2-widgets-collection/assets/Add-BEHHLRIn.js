import { av as de, V as pe, U as fe, aR as me, E as T, a3 as M, x as he, an as ge, ar as U, g as Q, f as _, u as F, j as E, s as L, h as ve, i as N, P as ye, p as W, aG as ke, r as Ce, n as R, a1 as be, J as P, d as Ee, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { v as f, a as we, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as Se, __tla as __tla_2 } from "./useThemeProps-BJ14EHU2.js";
let Xe, Ge, $e;
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
  })()
]).then(async () => {
  function xe(e, t, n, o, c) {
    const [r, m] = f.useState(() => c && n ? n(e).matches : o ? o(e).matches : t);
    return pe(() => {
      if (!n) return;
      const a = n(e), u = () => {
        m(a.matches);
      };
      return u(), a.addEventListener("change", u), () => {
        a.removeEventListener("change", u);
      };
    }, [
      e,
      n
    ]), r;
  }
  const Re = {
    ...we
  }, $ = Re.useSyncExternalStore;
  function Pe(e, t, n, o, c) {
    const r = f.useCallback(() => t, [
      t
    ]), m = f.useMemo(() => {
      if (c && n) return () => n(e).matches;
      if (o !== null) {
        const { matches: l } = o(e);
        return () => l;
      }
      return r;
    }, [
      r,
      e,
      o,
      c,
      n
    ]), [a, u] = f.useMemo(() => {
      if (n === null) return [
        r,
        () => () => {
        }
      ];
      const l = n(e);
      return [
        () => l.matches,
        (i) => (l.addEventListener("change", i), () => {
          l.removeEventListener("change", i);
        })
      ];
    }, [
      r,
      n,
      e
    ]);
    return $(u, a, m);
  }
  function G(e = {}) {
    const { themeId: t } = e;
    return function(o, c = {}) {
      let r = de();
      r && t && (r = r[t] || r);
      const m = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: a = false, matchMedia: u = m ? window.matchMedia : null, ssrMatchMedia: h = null, noSsr: l = false } = Se({
        name: "MuiUseMediaQuery",
        props: c,
        theme: r
      });
      let i = typeof o == "function" ? o(r) : o;
      return i = i.replace(/^@media( ?)/m, ""), i.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), ($ !== void 0 ? Pe : xe)(i, a, u, h, l);
    };
  }
  G();
  function B(e) {
    return e.substring(2).toLowerCase();
  }
  function Le(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Me(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: c, touchEvent: r = "onTouchEnd" } = e, m = f.useRef(false), a = f.useRef(null), u = f.useRef(false), h = f.useRef(false);
    f.useEffect(() => (setTimeout(() => {
      u.current = true;
    }, 0), () => {
      u.current = false;
    }), []);
    const l = fe(me(t), a), i = T((p) => {
      const g = h.current;
      h.current = false;
      const v = M(a.current);
      if (!u.current || !a.current || "clientX" in p && Le(p, v)) return;
      if (m.current) {
        m.current = false;
        return;
      }
      let s;
      p.composedPath ? s = p.composedPath().includes(a.current) : s = !v.documentElement.contains(p.target) || a.current.contains(p.target), !s && (n || !g) && c(p);
    }), w = (p) => (g) => {
      h.current = true;
      const v = t.props[p];
      v && v(g);
    }, k = {
      ref: l
    };
    return r !== false && (k[r] = w(r)), f.useEffect(() => {
      if (r !== false) {
        const p = B(r), g = M(a.current), v = () => {
          m.current = true;
        };
        return g.addEventListener(p, i), g.addEventListener("touchmove", v), () => {
          g.removeEventListener(p, i), g.removeEventListener("touchmove", v);
        };
      }
    }, [
      i,
      r
    ]), o !== false && (k[o] = w(o)), f.useEffect(() => {
      if (o !== false) {
        const p = B(o), g = M(a.current);
        return g.addEventListener(p, i), () => {
          g.removeEventListener(p, i);
        };
      }
    }, [
      i,
      o
    ]), f.cloneElement(t, k);
  }
  $e = G({
    themeId: he
  });
  function Te(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: c, resumeHideDuration: r } = e, m = ge();
    f.useEffect(() => {
      if (!c) return;
      function s(d) {
        d.defaultPrevented || d.key === "Escape" && (o == null ? void 0 : o(d, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", s), () => {
        document.removeEventListener("keydown", s);
      };
    }, [
      c,
      o
    ]);
    const a = T((s, d) => {
      o == null ? void 0 : o(s, d);
    }), u = T((s) => {
      !o || s == null || m.start(s, () => {
        a(null, "timeout");
      });
    });
    f.useEffect(() => (c && u(t), m.clear), [
      c,
      t,
      u,
      m
    ]);
    const h = (s) => {
      o == null ? void 0 : o(s, "clickaway");
    }, l = m.clear, i = f.useCallback(() => {
      t != null && u(r ?? t * 0.5);
    }, [
      t,
      r,
      u
    ]), w = (s) => (d) => {
      const C = s.onBlur;
      C == null ? void 0 : C(d), i();
    }, k = (s) => (d) => {
      const C = s.onFocus;
      C == null ? void 0 : C(d), l();
    }, p = (s) => (d) => {
      const C = s.onMouseEnter;
      C == null ? void 0 : C(d), l();
    }, g = (s) => (d) => {
      const C = s.onMouseLeave;
      C == null ? void 0 : C(d), i();
    };
    return f.useEffect(() => {
      if (!n && c) return window.addEventListener("focus", i), window.addEventListener("blur", l), () => {
        window.removeEventListener("focus", i), window.removeEventListener("blur", l);
      };
    }, [
      n,
      c,
      i,
      l
    ]), {
      getRootProps: (s = {}) => {
        const d = {
          ...U(e),
          ...U(s)
        };
        return {
          role: "presentation",
          ...s,
          ...d,
          onBlur: w(d),
          onFocus: k(d),
          onMouseEnter: p(d),
          onMouseLeave: g(d)
        };
      },
      onClickAway: h
    };
  }
  function Ae(e) {
    return Q("MuiSnackbarContent", e);
  }
  _("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const Oe = (e) => {
    const { classes: t } = e;
    return N({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, Ae, t);
  }, je = L(ye, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(W(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = ke(e.palette.background.default, t);
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
  })), He = L("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), ze = L("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), De = f.forwardRef(function(t, n) {
    const o = F({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: c, className: r, message: m, role: a = "alert", ...u } = o, h = o, l = Oe(h);
    return E.jsxs(je, {
      role: a,
      square: true,
      elevation: 6,
      className: ve(l.root, r),
      ownerState: h,
      ref: n,
      ...u,
      children: [
        E.jsx(He, {
          className: l.message,
          ownerState: h,
          children: m
        }),
        c ? E.jsx(ze, {
          className: l.action,
          ownerState: h,
          children: c
        }) : null
      ]
    });
  });
  function Ie(e) {
    return Q("MuiSnackbar", e);
  }
  _("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  let Ue, Be;
  Ue = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${P(n.vertical)}${P(n.horizontal)}`
      ]
    };
    return N(o, Ie, t);
  };
  Be = L("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${P(n.anchorOrigin.vertical)}${P(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(W(({ theme: e }) => ({
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
  })));
  Ge = f.forwardRef(function(t, n) {
    const o = F({
      props: t,
      name: "MuiSnackbar"
    }), c = Ce(), r = {
      enter: c.transitions.duration.enteringScreen,
      exit: c.transitions.duration.leavingScreen
    }, { action: m, anchorOrigin: { vertical: a, horizontal: u } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: h = null, children: l, className: i, ClickAwayListenerProps: w, ContentProps: k, disableWindowBlurListener: p = false, message: g, onBlur: v, onClose: s, onFocus: d, onMouseEnter: C, onMouseLeave: Qe, open: A, resumeHideDuration: _e, slots: O = {}, slotProps: X = {}, TransitionComponent: j, transitionDuration: H = r, TransitionProps: { onEnter: z, onExited: D, ...K } = {}, ...V } = o, S = {
      ...o,
      anchorOrigin: {
        vertical: a,
        horizontal: u
      },
      autoHideDuration: h,
      disableWindowBlurListener: p,
      TransitionComponent: j,
      transitionDuration: H
    }, Y = Ue(S), { getRootProps: J, onClickAway: Z } = Te({
      ...S
    }), [q, I] = f.useState(true), ee = (b) => {
      I(true), D && D(b);
    }, te = (b, y) => {
      I(false), z && z(b, y);
    }, x = {
      slots: {
        transition: j,
        ...O
      },
      slotProps: {
        content: k,
        clickAwayListener: w,
        transition: K,
        ...X
      }
    }, [ne, oe] = R("root", {
      ref: n,
      className: [
        Y.root,
        i
      ],
      elementType: Be,
      getSlotProps: J,
      externalForwardedProps: {
        ...x,
        ...V
      },
      ownerState: S
    }), [re, { ownerState: se, ...ae }] = R("clickAwayListener", {
      elementType: Me,
      externalForwardedProps: x,
      getSlotProps: (b) => ({
        onClickAway: (...y) => {
          var _a;
          (_a = b.onClickAway) == null ? void 0 : _a.call(b, ...y), Z(...y);
        }
      }),
      ownerState: S
    }), [ie, ce] = R("content", {
      elementType: De,
      shouldForwardComponentProp: true,
      externalForwardedProps: x,
      additionalProps: {
        message: g,
        action: m
      },
      ownerState: S
    }), [le, ue] = R("transition", {
      elementType: be,
      externalForwardedProps: x,
      getSlotProps: (b) => ({
        onEnter: (...y) => {
          var _a;
          (_a = b.onEnter) == null ? void 0 : _a.call(b, ...y), te(...y);
        },
        onExited: (...y) => {
          var _a;
          (_a = b.onExited) == null ? void 0 : _a.call(b, ...y), ee(...y);
        }
      }),
      additionalProps: {
        appear: true,
        in: A,
        timeout: H,
        direction: a === "top" ? "down" : "up"
      },
      ownerState: S
    });
    return !A && q ? null : E.jsx(re, {
      ...ae,
      ...O.clickAwayListener && {
        ownerState: se
      },
      children: E.jsx(ne, {
        ...oe,
        children: E.jsx(le, {
          ...ue,
          children: l || E.jsx(ie, {
            ...ce
          })
        })
      })
    });
  });
  Xe = Ee(E.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add");
});
export {
  Xe as I,
  Ge as S,
  __tla,
  $e as u
};
