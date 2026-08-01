import { v as c, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { Q as le, aB as ue, U as T, V as M, a8 as de, W as F, g as _, f as U, u as W, j as w, s as L, h as pe, i as N, P as fe, p as $, an as me, r as ge, n as P, aC as he, y as R, d as ve, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
let ze, He;
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
  })()
]).then(async () => {
  function I(e) {
    return e.substring(2).toLowerCase();
  }
  function ke(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Ce(e) {
    const { children: t, disableReactTree: a = false, mouseEvent: o = "onClick", onClickAway: l, touchEvent: u = "onTouchEnd" } = e, m = c.useRef(false), d = c.useRef(null), g = c.useRef(false), h = c.useRef(false);
    c.useEffect(() => (setTimeout(() => {
      g.current = true;
    }, 0), () => {
      g.current = false;
    }), []);
    const f = le(ue(t), d), p = T((s) => {
      const i = h.current;
      h.current = false;
      const v = M(d.current);
      if (!g.current || !d.current || "clientX" in s && ke(s, v)) return;
      if (m.current) {
        m.current = false;
        return;
      }
      let n;
      s.composedPath ? n = s.composedPath().includes(d.current) : n = !v.documentElement.contains(s.target) || d.current.contains(s.target), !n && (a || !i) && l(s);
    }), E = (s) => (i) => {
      h.current = true;
      const v = t.props[s];
      v && v(i);
    }, y = {
      ref: f
    };
    return u !== false && (y[u] = E(u)), c.useEffect(() => {
      if (u !== false) {
        const s = I(u), i = M(d.current), v = () => {
          m.current = true;
        };
        return i.addEventListener(s, p), i.addEventListener("touchmove", v), () => {
          i.removeEventListener(s, p), i.removeEventListener("touchmove", v);
        };
      }
    }, [
      p,
      u
    ]), o !== false && (y[o] = E(o)), c.useEffect(() => {
      if (o !== false) {
        const s = I(o), i = M(d.current);
        return i.addEventListener(s, p), () => {
          i.removeEventListener(s, p);
        };
      }
    }, [
      p,
      o
    ]), c.cloneElement(t, y);
  }
  function be(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: a = false, onClose: o, open: l, resumeHideDuration: u } = e, m = de();
    c.useEffect(() => {
      if (!l) return;
      function n(r) {
        r.defaultPrevented || r.key === "Escape" && (o == null ? void 0 : o(r, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", n), () => {
        document.removeEventListener("keydown", n);
      };
    }, [
      l,
      o
    ]);
    const d = T((n, r) => {
      o == null ? void 0 : o(n, r);
    }), g = T((n) => {
      !o || n == null || m.start(n, () => {
        d(null, "timeout");
      });
    });
    c.useEffect(() => (l && g(t), m.clear), [
      l,
      t,
      g,
      m
    ]);
    const h = (n) => {
      o == null ? void 0 : o(n, "clickaway");
    }, f = m.clear, p = c.useCallback(() => {
      t != null && g(u ?? t * 0.5);
    }, [
      t,
      u,
      g
    ]), E = (n) => (r) => {
      const C = n.onBlur;
      C == null ? void 0 : C(r), p();
    }, y = (n) => (r) => {
      const C = n.onFocus;
      C == null ? void 0 : C(r), f();
    }, s = (n) => (r) => {
      const C = n.onMouseEnter;
      C == null ? void 0 : C(r), f();
    }, i = (n) => (r) => {
      const C = n.onMouseLeave;
      C == null ? void 0 : C(r), p();
    };
    return c.useEffect(() => {
      if (!a && l) return window.addEventListener("focus", p), window.addEventListener("blur", f), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", f);
      };
    }, [
      a,
      l,
      p,
      f
    ]), {
      getRootProps: (n = {}) => {
        const r = {
          ...F(e),
          ...F(n)
        };
        return {
          role: "presentation",
          ...n,
          ...r,
          onBlur: E(r),
          onFocus: y(r),
          onMouseEnter: s(r),
          onMouseLeave: i(r)
        };
      },
      onClickAway: h
    };
  }
  function we(e) {
    return _("MuiSnackbarContent", e);
  }
  U("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ye = (e) => {
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
    }, we, t);
  }, Ee = L(fe, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })($(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, a = me(e.palette.background.default, t);
    return {
      ...e.typography.body2,
      color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(a),
      backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : a,
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
  })), Se = L("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), xe = L("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Pe = c.forwardRef(function(t, a) {
    const o = W({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: l, className: u, message: m, role: d = "alert", ...g } = o, h = o, f = ye(h);
    return w.jsxs(Ee, {
      role: d,
      square: true,
      elevation: 6,
      className: pe(f.root, u),
      ownerState: h,
      ref: a,
      ...g,
      children: [
        w.jsx(Se, {
          className: f.message,
          ownerState: h,
          children: m
        }),
        l ? w.jsx(xe, {
          className: f.action,
          ownerState: h,
          children: l
        }) : null
      ]
    });
  });
  function Re(e) {
    return _("MuiSnackbar", e);
  }
  U("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  let Le, Me;
  Le = (e) => {
    const { classes: t, anchorOrigin: a } = e, o = {
      root: [
        "root",
        `anchorOrigin${R(a.vertical)}${R(a.horizontal)}`
      ]
    };
    return N(o, Re, t);
  };
  Me = L("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        t[`anchorOrigin${R(a.anchorOrigin.vertical)}${R(a.anchorOrigin.horizontal)}`]
      ];
    }
  })($(({ theme: e }) => ({
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
  He = c.forwardRef(function(t, a) {
    const o = W({
      props: t,
      name: "MuiSnackbar"
    }), l = ge(), u = {
      enter: l.transitions.duration.enteringScreen,
      exit: l.transitions.duration.leavingScreen
    }, { action: m, anchorOrigin: { vertical: d, horizontal: g } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: h = null, children: f, className: p, ClickAwayListenerProps: E, ContentProps: y, disableWindowBlurListener: s = false, message: i, onBlur: v, onClose: n, onFocus: r, onMouseEnter: C, onMouseLeave: Te, open: A, resumeHideDuration: Ae, slots: O = {}, slotProps: G = {}, TransitionComponent: j, transitionDuration: H = u, TransitionProps: { onEnter: z, onExited: B, ...X } = {}, ...K } = o, S = {
      ...o,
      anchorOrigin: {
        vertical: d,
        horizontal: g
      },
      autoHideDuration: h,
      disableWindowBlurListener: s,
      TransitionComponent: j,
      transitionDuration: H
    }, V = Le(S), { getRootProps: q, onClickAway: Q } = be({
      ...S
    }), [Y, D] = c.useState(true), J = (b) => {
      D(true), B && B(b);
    }, Z = (b, k) => {
      D(false), z && z(b, k);
    }, x = {
      slots: {
        transition: j,
        ...O
      },
      slotProps: {
        content: y,
        clickAwayListener: E,
        transition: X,
        ...G
      }
    }, [ee, te] = P("root", {
      ref: a,
      className: [
        V.root,
        p
      ],
      elementType: Me,
      getSlotProps: q,
      externalForwardedProps: {
        ...x,
        ...K
      },
      ownerState: S
    }), [ne, { ownerState: oe, ...re }] = P("clickAwayListener", {
      elementType: Ce,
      externalForwardedProps: x,
      getSlotProps: (b) => ({
        onClickAway: (...k) => {
          var _a;
          (_a = b.onClickAway) == null ? void 0 : _a.call(b, ...k), Q(...k);
        }
      }),
      ownerState: S
    }), [se, ae] = P("content", {
      elementType: Pe,
      shouldForwardComponentProp: true,
      externalForwardedProps: x,
      additionalProps: {
        message: i,
        action: m
      },
      ownerState: S
    }), [ie, ce] = P("transition", {
      elementType: he,
      externalForwardedProps: x,
      getSlotProps: (b) => ({
        onEnter: (...k) => {
          var _a;
          (_a = b.onEnter) == null ? void 0 : _a.call(b, ...k), Z(...k);
        },
        onExited: (...k) => {
          var _a;
          (_a = b.onExited) == null ? void 0 : _a.call(b, ...k), J(...k);
        }
      }),
      additionalProps: {
        appear: true,
        in: A,
        timeout: H,
        direction: d === "top" ? "down" : "up"
      },
      ownerState: S
    });
    return !A && Y ? null : w.jsx(ne, {
      ...re,
      ...O.clickAwayListener && {
        ownerState: oe
      },
      children: w.jsx(ee, {
        ...te,
        children: w.jsx(ie, {
          ...ce,
          children: f || w.jsx(se, {
            ...ae
          })
        })
      })
    });
  });
  ze = ve(w.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add");
});
export {
  ze as I,
  He as S,
  __tla
};
