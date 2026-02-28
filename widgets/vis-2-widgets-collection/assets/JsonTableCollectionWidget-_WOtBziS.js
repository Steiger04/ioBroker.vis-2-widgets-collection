import { g as ye, a as ve, u as be, Z as zi, _ as ki, $ as Sn, a0 as Gt, h as Yt, j as c, s as q, d as se, e as xe, a1 as Jo, m as fe, a2 as Wr, b as le, P as ot, B as Yn, c as ue, I as Se, W as H, a3 as yo, M as vo, X as Ft, a4 as dn, a5 as Ti, f as Ko, a6 as Di, a7 as Eo, i as ke, a8 as Gr, a9 as yn, T as F, r as Ei, U as Oi, aa as Ni, ab as Xo, ac as Li, ad as Ur, ae as bo, af as Vi, ag as Qo, ah as Hi, R as Jt, o as U, ai as Ae, G as x, aj as vn, ak as bn, al as Bi, am as Wi, D as Gi, w as zt, an as Ui, ao as qi, C as Ye, F as Ct, ap as Yi, n as Ji, q as Ki, K as Pn, x as Xi, y as Qi, aq as Zi, A as es, z as Zo, E as ts, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { v as y, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as xn, __tla as __tla_2 } from "./Checkbox-CjPg9dWs.js";
import { D as qr, a as Yr, b as Jr, __tla as __tla_3 } from "./DialogTitle-CJWtNrVp.js";
import { B as Dt, __tla as __tla_4 } from "./Button-BOWf2z70.js";
import { S as ns, __tla as __tla_5 } from "./Slider-DgHpn0IP.js";
import { F as mt, __tla as __tla_6 } from "./FormControlLabel-BAm8tbJK.js";
import { S as kt, __tla as __tla_7 } from "./Switch-hq_W31Xv.js";
import { M as je, __tla as __tla_8 } from "./MenuItem-CzBojcp8.js";
import { S as De, __tla as __tla_9 } from "./Stack-CzOOYs5P.js";
import { T as Kr, a as Jn, __tla as __tla_10 } from "./ToggleButtonGroup-DG2CiFmV.js";
import { C as Xr, __tla as __tla_11 } from "./Close-CQt1dGJP.js";
import { u as os, __tla as __tla_12 } from "./useOidValue-DFyPWDrl.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-Dz75iFvF.js";
import { __tla as __tla_14 } from "./listItemTextClasses-CJ06hn_z.js";
let Do;
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
  })()
]).then(async () => {
  function rs(e) {
    return ye("MuiCollapse", e);
  }
  ve("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const is = (e) => {
    const { orientation: t, classes: n } = e, o = {
      root: [
        "root",
        `${t}`
      ],
      entered: [
        "entered"
      ],
      hidden: [
        "hidden"
      ],
      wrapper: [
        "wrapper",
        `${t}`
      ],
      wrapperInner: [
        "wrapperInner",
        `${t}`
      ]
    };
    return xe(o, rs, n);
  }, ss = q("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.state === "entered" && t.entered,
        n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden
      ];
    }
  })(fe(({ theme: e }) => ({
    height: 0,
    overflow: "hidden",
    transition: e.transitions.create("height"),
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "auto",
          width: 0,
          transition: e.transitions.create("width")
        }
      },
      {
        props: {
          state: "entered"
        },
        style: {
          height: "auto",
          overflow: "visible"
        }
      },
      {
        props: {
          state: "entered",
          orientation: "horizontal"
        },
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  }))), ls = q("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper
  })({
    display: "flex",
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  }), as = q("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner
  })({
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  }), xo = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: r, children: i, className: s, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: p, onEntered: g, onEntering: f, onExit: h, onExited: m, onExiting: v, orientation: b = "vertical", style: C, timeout: _ = zi.standard, TransitionComponent: w = ki, ...S } = o, R = {
      ...o,
      orientation: b,
      collapsedSize: l
    }, P = is(R), D = Sn(), z = Gt(), $ = y.useRef(null), A = y.useRef(), B = typeof l == "number" ? `${l}px` : l, T = b === "horizontal", Y = T ? "width" : "height", J = y.useRef(null), E = Yt(n, J), k = (N) => (W) => {
      if (N) {
        const ie = J.current;
        W === void 0 ? N(ie) : N(ie, W);
      }
    }, j = () => $.current ? $.current[T ? "clientWidth" : "clientHeight"] : 0, I = k((N, W) => {
      $.current && T && ($.current.style.position = "absolute"), N.style[Y] = B, p && p(N, W);
    }), Z = k((N, W) => {
      const ie = j();
      $.current && T && ($.current.style.position = "");
      const { duration: $e, easing: Ee } = Jo({
        style: C,
        timeout: _,
        easing: d
      }, {
        mode: "enter"
      });
      if (_ === "auto") {
        const Re = D.transitions.getAutoHeightDuration(ie);
        N.style.transitionDuration = `${Re}ms`, A.current = Re;
      } else N.style.transitionDuration = typeof $e == "string" ? $e : `${$e}ms`;
      N.style[Y] = `${ie}px`, N.style.transitionTimingFunction = Ee, f && f(N, W);
    }), G = k((N, W) => {
      N.style[Y] = "auto", g && g(N, W);
    }), ae = k((N) => {
      N.style[Y] = `${j()}px`, h && h(N);
    }), ee = k(m), ge = k((N) => {
      const W = j(), { duration: ie, easing: $e } = Jo({
        style: C,
        timeout: _,
        easing: d
      }, {
        mode: "exit"
      });
      if (_ === "auto") {
        const Ee = D.transitions.getAutoHeightDuration(W);
        N.style.transitionDuration = `${Ee}ms`, A.current = Ee;
      } else N.style.transitionDuration = typeof ie == "string" ? ie : `${ie}ms`;
      N.style[Y] = B, N.style.transitionTimingFunction = $e, v && v(N);
    }), re = (N) => {
      _ === "auto" && z.start(A.current || 0, N), r && r(J.current, N);
    };
    return c.jsx(w, {
      in: u,
      onEnter: I,
      onEntered: G,
      onEntering: Z,
      onExit: ae,
      onExited: ee,
      onExiting: ge,
      addEndListener: re,
      nodeRef: J,
      timeout: _ === "auto" ? null : _,
      ...S,
      children: (N, { ownerState: W, ...ie }) => c.jsx(ss, {
        as: a,
        className: se(P.root, s, {
          entered: P.entered,
          exited: !u && B === "0px" && P.hidden
        }[N]),
        style: {
          [T ? "minWidth" : "minHeight"]: B,
          ...C
        },
        ref: E,
        ownerState: {
          ...R,
          state: N
        },
        ...ie,
        children: c.jsx(ls, {
          ownerState: {
            ...R,
            state: N
          },
          className: P.wrapper,
          ref: $,
          children: c.jsx(as, {
            ownerState: {
              ...R,
              state: N
            },
            className: P.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  xo && (xo.muiSupportAuto = true);
  const Qr = y.createContext({});
  function cs(e) {
    return ye("MuiAccordion", e);
  }
  const In = ve("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), us = (e) => {
    const { classes: t, square: n, expanded: o, disabled: r, disableGutters: i } = e;
    return xe({
      root: [
        "root",
        !n && "rounded",
        o && "expanded",
        r && "disabled",
        !i && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, cs, t);
  }, ds = q(ot, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${In.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(fe(({ theme: e }) => {
    const t = {
      duration: e.transitions.duration.shortest
    };
    return {
      position: "relative",
      transition: e.transitions.create([
        "margin"
      ], t),
      overflowAnchor: "none",
      "&::before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: (e.vars || e).palette.divider,
        transition: e.transitions.create([
          "opacity",
          "background-color"
        ], t)
      },
      "&:first-of-type": {
        "&::before": {
          display: "none"
        }
      },
      [`&.${In.expanded}`]: {
        "&::before": {
          opacity: 0
        },
        "&:first-of-type": {
          marginTop: 0
        },
        "&:last-of-type": {
          marginBottom: 0
        },
        "& + &": {
          "&::before": {
            display: "none"
          }
        }
      },
      [`&.${In.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), fe(({ theme: e }) => ({
    variants: [
      {
        props: (t) => !t.square,
        style: {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
            borderTopRightRadius: (e.vars || e).shape.borderRadius
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
            borderBottomRightRadius: (e.vars || e).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        }
      },
      {
        props: (t) => !t.disableGutters,
        style: {
          [`&.${In.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), ps = q("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Fn = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiAccordion"
    }), { children: r, className: i, defaultExpanded: s = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: p = false, slots: g = {}, slotProps: f = {}, TransitionComponent: h, TransitionProps: m, ...v } = o, [b, C] = Wr({
      controlled: d,
      default: s,
      name: "Accordion",
      state: "expanded"
    }), _ = y.useCallback((j) => {
      C(!b), u && u(j, !b);
    }, [
      b,
      u,
      C
    ]), [w, ...S] = y.Children.toArray(r), R = y.useMemo(() => ({
      expanded: b,
      disabled: l,
      disableGutters: a,
      toggle: _
    }), [
      b,
      l,
      a,
      _
    ]), P = {
      ...o,
      square: p,
      disabled: l,
      disableGutters: a,
      expanded: b
    }, D = us(P), z = {
      transition: h,
      ...g
    }, $ = {
      transition: m,
      ...f
    }, A = {
      slots: z,
      slotProps: $
    }, [B, T] = le("root", {
      elementType: ds,
      externalForwardedProps: {
        ...A,
        ...v
      },
      className: se(D.root, i),
      shouldForwardComponentProp: true,
      ownerState: P,
      ref: n,
      additionalProps: {
        square: p
      }
    }), [Y, J] = le("heading", {
      elementType: ps,
      externalForwardedProps: A,
      className: D.heading,
      ownerState: P
    }), [E, k] = le("transition", {
      elementType: xo,
      externalForwardedProps: A,
      ownerState: P
    });
    return c.jsxs(B, {
      ...T,
      children: [
        c.jsx(Y, {
          ...J,
          children: c.jsx(Qr.Provider, {
            value: R,
            children: w
          })
        }),
        c.jsx(E, {
          in: b,
          timeout: "auto",
          ...k,
          children: c.jsx("div", {
            "aria-labelledby": w.props.id,
            id: w.props["aria-controls"],
            role: "region",
            className: D.region,
            children: S
          })
        })
      ]
    });
  });
  function fs(e) {
    return ye("MuiAccordionDetails", e);
  }
  ve("MuiAccordionDetails", [
    "root"
  ]);
  const gs = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, fs, t);
  }, hs = q("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), zn = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: r, ...i } = o, s = o, l = gs(s);
    return c.jsx(hs, {
      className: se(l.root, r),
      ref: n,
      ownerState: s,
      ...i
    });
  });
  function ms(e) {
    return ye("MuiAccordionSummary", e);
  }
  const Ut = ve("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), ys = (e) => {
    const { classes: t, expanded: n, disabled: o, disableGutters: r } = e;
    return xe({
      root: [
        "root",
        n && "expanded",
        o && "disabled",
        !r && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        n && "expanded",
        !r && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        n && "expanded"
      ]
    }, ms, t);
  }, vs = q(Yn, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => {
    const t = {
      duration: e.transitions.duration.shortest
    };
    return {
      display: "flex",
      width: "100%",
      minHeight: 48,
      padding: e.spacing(0, 2),
      transition: e.transitions.create([
        "min-height",
        "background-color"
      ], t),
      [`&.${Ut.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Ut.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Ut.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Ut.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), bs = q("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(fe(({ theme: e }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (t) => !t.disableGutters,
        style: {
          transition: e.transitions.create([
            "margin"
          ], {
            duration: e.transitions.duration.shortest
          }),
          [`&.${Ut.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), xs = q("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(fe(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${Ut.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), kn = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: r, className: i, expandIcon: s, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...p } = o, { disabled: g = false, disableGutters: f, expanded: h, toggle: m } = y.useContext(Qr), v = ($) => {
      m && m($), a && a($);
    }, b = {
      ...o,
      expanded: h,
      disabled: g,
      disableGutters: f
    }, C = ys(b), _ = {
      slots: d,
      slotProps: u
    }, [w, S] = le("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(C.root, i),
      elementType: vs,
      externalForwardedProps: {
        ..._,
        ...p
      },
      ownerState: b,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: se(C.focusVisible, l)
      },
      getSlotProps: ($) => ({
        ...$,
        onClick: (A) => {
          var _a2;
          (_a2 = $.onClick) == null ? void 0 : _a2.call($, A), v(A);
        }
      })
    }), [R, P] = le("content", {
      className: C.content,
      elementType: bs,
      externalForwardedProps: _,
      ownerState: b
    }), [D, z] = le("expandIconWrapper", {
      className: C.expandIconWrapper,
      elementType: xs,
      externalForwardedProps: _,
      ownerState: b
    });
    return c.jsxs(w, {
      ...S,
      children: [
        c.jsx(R, {
          ...P,
          children: r
        }),
        s && c.jsx(D, {
          ...z,
          children: s
        })
      ]
    });
  });
  function ws(e) {
    return ye("MuiAlert", e);
  }
  const er = ve("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError"
  ]), Cs = ue(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), _s = ue(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), Ss = ue(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), js = ue(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), Rs = ue(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), Ms = (e) => {
    const { variant: t, color: n, severity: o, classes: r } = e, i = {
      root: [
        "root",
        `color${H(n || o)}`,
        `${t}${H(n || o)}`,
        `${t}`
      ],
      icon: [
        "icon"
      ],
      message: [
        "message"
      ],
      action: [
        "action"
      ]
    };
    return xe(i, ws, r);
  }, $s = q(ot, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${H(n.color || n.severity)}`]
      ];
    }
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? yo : vo, n = e.palette.mode === "light" ? vo : yo;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Ft([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${o}StandardBg`] : n(e.palette[o].light, 0.9),
            [`& .${er.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Ft([
          "light"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${o}Color`] : t(e.palette[o].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[o].light}`,
            [`& .${er.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${o}IconColor`]
            } : {
              color: e.palette[o].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Ft([
          "dark"
        ])).map(([o]) => ({
          props: {
            colorSeverity: o,
            variant: "filled"
          },
          style: {
            fontWeight: e.typography.fontWeightMedium,
            ...e.vars ? {
              color: e.vars.palette.Alert[`${o}FilledColor`],
              backgroundColor: e.vars.palette.Alert[`${o}FilledBg`]
            } : {
              backgroundColor: e.palette.mode === "dark" ? e.palette[o].dark : e.palette[o].main,
              color: e.palette.getContrastText(e.palette[o].main)
            }
          }
        }))
      ]
    };
  })), As = q("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), Ps = q("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), Is = q("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), tr = {
    success: c.jsx(Cs, {
      fontSize: "inherit"
    }),
    warning: c.jsx(_s, {
      fontSize: "inherit"
    }),
    error: c.jsx(Ss, {
      fontSize: "inherit"
    }),
    info: c.jsx(js, {
      fontSize: "inherit"
    })
  }, nr = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiAlert"
    }), { action: r, children: i, className: s, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: p, iconMapping: g = tr, onClose: f, role: h = "alert", severity: m = "success", slotProps: v = {}, slots: b = {}, variant: C = "standard", ..._ } = o, w = {
      ...o,
      color: a,
      severity: m,
      variant: C,
      colorSeverity: a || m
    }, S = Ms(w), R = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...b
      },
      slotProps: {
        ...u,
        ...v
      }
    }, [P, D] = le("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: se(S.root, s),
      elementType: $s,
      externalForwardedProps: {
        ...R,
        ..._
      },
      ownerState: w,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [z, $] = le("icon", {
      className: S.icon,
      elementType: As,
      externalForwardedProps: R,
      ownerState: w
    }), [A, B] = le("message", {
      className: S.message,
      elementType: Ps,
      externalForwardedProps: R,
      ownerState: w
    }), [T, Y] = le("action", {
      className: S.action,
      elementType: Is,
      externalForwardedProps: R,
      ownerState: w
    }), [J, E] = le("closeButton", {
      elementType: Se,
      externalForwardedProps: R,
      ownerState: w
    }), [k, j] = le("closeIcon", {
      elementType: Rs,
      externalForwardedProps: R,
      ownerState: w
    });
    return c.jsxs(P, {
      ...D,
      children: [
        p !== false ? c.jsx(z, {
          ...$,
          children: p || g[m] || tr[m]
        }) : null,
        c.jsx(A, {
          ...B,
          children: i
        }),
        r != null ? c.jsx(T, {
          ...Y,
          children: r
        }) : null,
        r == null && f ? c.jsx(T, {
          ...Y,
          children: c.jsx(J, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: f,
            ...E,
            children: c.jsx(k, {
              fontSize: "small",
              ...j
            })
          })
        }) : null
      ]
    });
  });
  var Le = "top", Xe = "bottom", Qe = "right", Ve = "left", Oo = "auto", jn = [
    Le,
    Xe,
    Qe,
    Ve
  ], Kt = "start", wn = "end", Fs = "clippingParents", Zr = "viewport", tn = "popper", zs = "reference", or = jn.reduce(function(e, t) {
    return e.concat([
      t + "-" + Kt,
      t + "-" + wn
    ]);
  }, []), ei = [].concat(jn, [
    Oo
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Kt,
      t + "-" + wn
    ]);
  }, []), ks = "beforeRead", Ts = "read", Ds = "afterRead", Es = "beforeMain", Os = "main", Ns = "afterMain", Ls = "beforeWrite", Vs = "write", Hs = "afterWrite", Bs = [
    ks,
    Ts,
    Ds,
    Es,
    Os,
    Ns,
    Ls,
    Vs,
    Hs
  ];
  function lt(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function Ge(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Et(e) {
    var t = Ge(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Ke(e) {
    var t = Ge(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function No(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ge(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Ws(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
      !Ke(i) || !lt(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(s) {
        var l = r[s];
        l === false ? i.removeAttribute(s) : i.setAttribute(s, l === true ? "" : l);
      }));
    });
  }
  function Gs(e) {
    var t = e.state, n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
      Object.keys(t.elements).forEach(function(o) {
        var r = t.elements[o], i = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = s.reduce(function(a, d) {
          return a[d] = "", a;
        }, {});
        !Ke(r) || !lt(r) || (Object.assign(r.style, l), Object.keys(i).forEach(function(a) {
          r.removeAttribute(a);
        }));
      });
    };
  }
  const Us = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Ws,
    effect: Gs,
    requires: [
      "computeStyles"
    ]
  };
  function st(e) {
    return e.split("-")[0];
  }
  var Tt = Math.max, Kn = Math.min, Xt = Math.round;
  function wo() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ti() {
    return !/^((?!chrome|android).)*safari/i.test(wo());
  }
  function Qt(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, i = 1;
    t && Ke(e) && (r = e.offsetWidth > 0 && Xt(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Xt(o.height) / e.offsetHeight || 1);
    var s = Et(e) ? Ge(e) : window, l = s.visualViewport, a = !ti() && n, d = (o.left + (a && l ? l.offsetLeft : 0)) / r, u = (o.top + (a && l ? l.offsetTop : 0)) / i, p = o.width / r, g = o.height / i;
    return {
      width: p,
      height: g,
      top: u,
      right: d + p,
      bottom: u + g,
      left: d,
      x: d,
      y: u
    };
  }
  function Lo(e) {
    var t = Qt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function ni(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && No(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function yt(e) {
    return Ge(e).getComputedStyle(e);
  }
  function qs(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(lt(e)) >= 0;
  }
  function Rt(e) {
    return ((Et(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function to(e) {
    return lt(e) === "html" ? e : e.assignedSlot || e.parentNode || (No(e) ? e.host : null) || Rt(e);
  }
  function rr(e) {
    return !Ke(e) || yt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Ys(e) {
    var t = /firefox/i.test(wo()), n = /Trident/i.test(wo());
    if (n && Ke(e)) {
      var o = yt(e);
      if (o.position === "fixed") return null;
    }
    var r = to(e);
    for (No(r) && (r = r.host); Ke(r) && [
      "html",
      "body"
    ].indexOf(lt(r)) < 0; ) {
      var i = yt(r);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function Rn(e) {
    for (var t = Ge(e), n = rr(e); n && qs(n) && yt(n).position === "static"; ) n = rr(n);
    return n && (lt(n) === "html" || lt(n) === "body" && yt(n).position === "static") ? t : n || Ys(e) || t;
  }
  function Vo(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function pn(e, t, n) {
    return Tt(e, Kn(t, n));
  }
  function Js(e, t, n) {
    var o = pn(e, t, n);
    return o > n ? n : o;
  }
  function oi() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function ri(e) {
    return Object.assign({}, oi(), e);
  }
  function ii(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Ks = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, ri(typeof t != "number" ? t : ii(t, jn));
  };
  function Xs(e) {
    var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = st(n.placement), a = Vo(l), d = [
      Ve,
      Qe
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!i || !s)) {
      var p = Ks(r.padding, n), g = Lo(i), f = a === "y" ? Le : Ve, h = a === "y" ? Xe : Qe, m = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], v = s[a] - n.rects.reference[a], b = Rn(i), C = b ? a === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, _ = m / 2 - v / 2, w = p[f], S = C - g[u] - p[h], R = C / 2 - g[u] / 2 + _, P = pn(w, R, S), D = a;
      n.modifiersData[o] = (t = {}, t[D] = P, t.centerOffset = P - R, t);
    }
  }
  function Qs(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || ni(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Zs = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Xs,
    effect: Qs,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Zt(e) {
    return e.split("-")[1];
  }
  var el = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function tl(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: Xt(n * r) / r || 0,
      y: Xt(o * r) / r || 0
    };
  }
  function ir(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, p = e.isFixed, g = s.x, f = g === void 0 ? 0 : g, h = s.y, m = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: f,
      y: m
    }) : {
      x: f,
      y: m
    };
    f = v.x, m = v.y;
    var b = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), _ = Ve, w = Le, S = window;
    if (d) {
      var R = Rn(n), P = "clientHeight", D = "clientWidth";
      if (R === Ge(n) && (R = Rt(n), yt(R).position !== "static" && l === "absolute" && (P = "scrollHeight", D = "scrollWidth")), R = R, r === Le || (r === Ve || r === Qe) && i === wn) {
        w = Xe;
        var z = p && R === S && S.visualViewport ? S.visualViewport.height : R[P];
        m -= z - o.height, m *= a ? 1 : -1;
      }
      if (r === Ve || (r === Le || r === Xe) && i === wn) {
        _ = Qe;
        var $ = p && R === S && S.visualViewport ? S.visualViewport.width : R[D];
        f -= $ - o.width, f *= a ? 1 : -1;
      }
    }
    var A = Object.assign({
      position: l
    }, d && el), B = u === true ? tl({
      x: f,
      y: m
    }, Ge(n)) : {
      x: f,
      y: m
    };
    if (f = B.x, m = B.y, a) {
      var T;
      return Object.assign({}, A, (T = {}, T[w] = C ? "0" : "", T[_] = b ? "0" : "", T.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", T));
    }
    return Object.assign({}, A, (t = {}, t[w] = C ? m + "px" : "", t[_] = b ? f + "px" : "", t.transform = "", t));
  }
  function nl(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, i = n.adaptive, s = i === void 0 ? true : i, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: st(t.placement),
      variation: Zt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ir(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ir(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const ol = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: nl,
    data: {}
  };
  var Tn = {
    passive: true
  };
  function rl(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? true : r, s = o.resize, l = s === void 0 ? true : s, a = Ge(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Tn);
    }), l && a.addEventListener("resize", n.update, Tn), function() {
      i && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Tn);
      }), l && a.removeEventListener("resize", n.update, Tn);
    };
  }
  const il = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: rl,
    data: {}
  };
  var sl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Wn(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return sl[t];
    });
  }
  var ll = {
    start: "end",
    end: "start"
  };
  function sr(e) {
    return e.replace(/start|end/g, function(t) {
      return ll[t];
    });
  }
  function Ho(e) {
    var t = Ge(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function Bo(e) {
    return Qt(Rt(e)).left + Ho(e).scrollLeft;
  }
  function al(e, t) {
    var n = Ge(e), o = Rt(e), r = n.visualViewport, i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
    if (r) {
      i = r.width, s = r.height;
      var d = ti();
      (d || !d && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
    }
    return {
      width: i,
      height: s,
      x: l + Bo(e),
      y: a
    };
  }
  function cl(e) {
    var t, n = Rt(e), o = Ho(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = Tt(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = Tt(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + Bo(e), a = -o.scrollTop;
    return yt(r || n).direction === "rtl" && (l += Tt(n.clientWidth, r ? r.clientWidth : 0) - i), {
      width: i,
      height: s,
      x: l,
      y: a
    };
  }
  function Wo(e) {
    var t = yt(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function si(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(lt(e)) >= 0 ? e.ownerDocument.body : Ke(e) && Wo(e) ? e : si(to(e));
  }
  function fn(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = si(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Ge(o), s = r ? [
      i
    ].concat(i.visualViewport || [], Wo(o) ? o : []) : o, l = t.concat(s);
    return r ? l : l.concat(fn(to(s)));
  }
  function Co(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function ul(e, t) {
    var n = Qt(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function lr(e, t, n) {
    return t === Zr ? Co(al(e, n)) : Et(t) ? ul(t, n) : Co(cl(Rt(e)));
  }
  function dl(e) {
    var t = fn(to(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(yt(e).position) >= 0, o = n && Ke(e) ? Rn(e) : e;
    return Et(o) ? t.filter(function(r) {
      return Et(r) && ni(r, o) && lt(r) !== "body";
    }) : [];
  }
  function pl(e, t, n, o) {
    var r = t === "clippingParents" ? dl(e) : [].concat(t), i = [].concat(r, [
      n
    ]), s = i[0], l = i.reduce(function(a, d) {
      var u = lr(e, d, o);
      return a.top = Tt(u.top, a.top), a.right = Kn(u.right, a.right), a.bottom = Kn(u.bottom, a.bottom), a.left = Tt(u.left, a.left), a;
    }, lr(e, s, o));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function li(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? st(o) : null, i = o ? Zt(o) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (r) {
      case Le:
        a = {
          x: s,
          y: t.y - n.height
        };
        break;
      case Xe:
        a = {
          x: s,
          y: t.y + t.height
        };
        break;
      case Qe:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case Ve:
        a = {
          x: t.x - n.width,
          y: l
        };
        break;
      default:
        a = {
          x: t.x,
          y: t.y
        };
    }
    var d = r ? Vo(r) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (i) {
        case Kt:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case wn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function Cn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? Fs : l, d = n.rootBoundary, u = d === void 0 ? Zr : d, p = n.elementContext, g = p === void 0 ? tn : p, f = n.altBoundary, h = f === void 0 ? false : f, m = n.padding, v = m === void 0 ? 0 : m, b = ri(typeof v != "number" ? v : ii(v, jn)), C = g === tn ? zs : tn, _ = e.rects.popper, w = e.elements[h ? C : g], S = pl(Et(w) ? w : w.contextElement || Rt(e.elements.popper), a, u, s), R = Qt(e.elements.reference), P = li({
      reference: R,
      element: _,
      placement: r
    }), D = Co(Object.assign({}, _, P)), z = g === tn ? D : R, $ = {
      top: S.top - z.top + b.top,
      bottom: z.bottom - S.bottom + b.bottom,
      left: S.left - z.left + b.left,
      right: z.right - S.right + b.right
    }, A = e.modifiersData.offset;
    if (g === tn && A) {
      var B = A[r];
      Object.keys($).forEach(function(T) {
        var Y = [
          Qe,
          Xe
        ].indexOf(T) >= 0 ? 1 : -1, J = [
          Le,
          Xe
        ].indexOf(T) >= 0 ? "y" : "x";
        $[T] += B[J] * Y;
      });
    }
    return $;
  }
  function fl(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? ei : a, u = Zt(o), p = u ? l ? or : or.filter(function(h) {
      return Zt(h) === u;
    }) : jn, g = p.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = p);
    var f = g.reduce(function(h, m) {
      return h[m] = Cn(e, {
        placement: m,
        boundary: r,
        rootBoundary: i,
        padding: s
      })[st(m)], h;
    }, {});
    return Object.keys(f).sort(function(h, m) {
      return f[h] - f[m];
    });
  }
  function gl(e) {
    if (st(e) === Oo) return [];
    var t = Wn(e);
    return [
      sr(e),
      t,
      sr(t)
    ];
  }
  function hl(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? true : s, a = n.fallbackPlacements, d = n.padding, u = n.boundary, p = n.rootBoundary, g = n.altBoundary, f = n.flipVariations, h = f === void 0 ? true : f, m = n.allowedAutoPlacements, v = t.options.placement, b = st(v), C = b === v, _ = a || (C || !h ? [
        Wn(v)
      ] : gl(v)), w = [
        v
      ].concat(_).reduce(function(ge, re) {
        return ge.concat(st(re) === Oo ? fl(t, {
          placement: re,
          boundary: u,
          rootBoundary: p,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : re);
      }, []), S = t.rects.reference, R = t.rects.popper, P = /* @__PURE__ */ new Map(), D = true, z = w[0], $ = 0; $ < w.length; $++) {
        var A = w[$], B = st(A), T = Zt(A) === Kt, Y = [
          Le,
          Xe
        ].indexOf(B) >= 0, J = Y ? "width" : "height", E = Cn(t, {
          placement: A,
          boundary: u,
          rootBoundary: p,
          altBoundary: g,
          padding: d
        }), k = Y ? T ? Qe : Ve : T ? Xe : Le;
        S[J] > R[J] && (k = Wn(k));
        var j = Wn(k), I = [];
        if (i && I.push(E[B] <= 0), l && I.push(E[k] <= 0, E[j] <= 0), I.every(function(ge) {
          return ge;
        })) {
          z = A, D = false;
          break;
        }
        P.set(A, I);
      }
      if (D) for (var Z = h ? 3 : 1, G = function(re) {
        var N = w.find(function(W) {
          var ie = P.get(W);
          if (ie) return ie.slice(0, re).every(function($e) {
            return $e;
          });
        });
        if (N) return z = N, "break";
      }, ae = Z; ae > 0; ae--) {
        var ee = G(ae);
        if (ee === "break") break;
      }
      t.placement !== z && (t.modifiersData[o]._skip = true, t.placement = z, t.reset = true);
    }
  }
  const ml = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: hl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function ar(e, t, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function cr(e) {
    return [
      Le,
      Qe,
      Xe,
      Ve
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function yl(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, s = Cn(t, {
      elementContext: "reference"
    }), l = Cn(t, {
      altBoundary: true
    }), a = ar(s, o), d = ar(l, r, i), u = cr(a), p = cr(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: p
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": p
    });
  }
  const vl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: yl
  };
  function bl(e, t, n) {
    var o = st(e), r = [
      Ve,
      Le
    ].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = i[0], l = i[1];
    return s = s || 0, l = (l || 0) * r, [
      Ve,
      Qe
    ].indexOf(o) >= 0 ? {
      x: l,
      y: s
    } : {
      x: s,
      y: l
    };
  }
  function xl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [
      0,
      0
    ] : r, s = ei.reduce(function(u, p) {
      return u[p] = bl(p, t.rects, i), u;
    }, {}), l = s[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const wl = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: xl
  };
  function Cl(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = li({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const _l = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: Cl,
    data: {}
  };
  function Sl(e) {
    return e === "x" ? "y" : "x";
  }
  function jl(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? true : r, s = n.altAxis, l = s === void 0 ? false : s, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, p = n.padding, g = n.tether, f = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = Cn(t, {
      boundary: a,
      rootBoundary: d,
      padding: p,
      altBoundary: u
    }), b = st(t.placement), C = Zt(t.placement), _ = !C, w = Vo(b), S = Sl(w), R = t.modifiersData.popperOffsets, P = t.rects.reference, D = t.rects.popper, z = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, $ = typeof z == "number" ? {
      mainAxis: z,
      altAxis: z
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, z), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
      x: 0,
      y: 0
    };
    if (R) {
      if (i) {
        var T, Y = w === "y" ? Le : Ve, J = w === "y" ? Xe : Qe, E = w === "y" ? "height" : "width", k = R[w], j = k + v[Y], I = k - v[J], Z = f ? -D[E] / 2 : 0, G = C === Kt ? P[E] : D[E], ae = C === Kt ? -D[E] : -P[E], ee = t.elements.arrow, ge = f && ee ? Lo(ee) : {
          width: 0,
          height: 0
        }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : oi(), N = re[Y], W = re[J], ie = pn(0, P[E], ge[E]), $e = _ ? P[E] / 2 - Z - ie - N - $.mainAxis : G - ie - N - $.mainAxis, Ee = _ ? -P[E] / 2 + Z + ie + W + $.mainAxis : ae + ie + W + $.mainAxis, Re = t.elements.arrow && Rn(t.elements.arrow), de = Re ? w === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, _e = (T = A == null ? void 0 : A[w]) != null ? T : 0, pe = k + $e - _e - de, He = k + Ee - _e, Mt = pn(f ? Kn(j, pe) : j, k, f ? Tt(I, He) : I);
        R[w] = Mt, B[w] = Mt - k;
      }
      if (l) {
        var rt, at = w === "x" ? Le : Ve, ct = w === "x" ? Xe : Qe, Be = R[S], ut = S === "y" ? "height" : "width", $t = Be + v[at], At = Be - v[ct], it = [
          Le,
          Ve
        ].indexOf(b) !== -1, Pt = (rt = A == null ? void 0 : A[S]) != null ? rt : 0, dt = it ? $t : Be - P[ut] - D[ut] - Pt + $.altAxis, Ze = it ? Be + P[ut] + D[ut] - Pt - $.altAxis : At, It = f && it ? Js(dt, Be, Ze) : pn(f ? dt : $t, Be, f ? Ze : At);
        R[S] = It, B[S] = It - Be;
      }
      t.modifiersData[o] = B;
    }
  }
  const Rl = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: jl,
    requiresIfExists: [
      "offset"
    ]
  };
  function Ml(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function $l(e) {
    return e === Ge(e) || !Ke(e) ? Ho(e) : Ml(e);
  }
  function Al(e) {
    var t = e.getBoundingClientRect(), n = Xt(t.width) / e.offsetWidth || 1, o = Xt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function Pl(e, t, n) {
    n === void 0 && (n = false);
    var o = Ke(t), r = Ke(t) && Al(t), i = Rt(t), s = Qt(e, r, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((lt(t) !== "body" || Wo(i)) && (l = $l(t)), Ke(t) ? (a = Qt(t, true), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Bo(i))), {
      x: s.left + l.scrollLeft - a.x,
      y: s.top + l.scrollTop - a.y,
      width: s.width,
      height: s.height
    };
  }
  function Il(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(i) {
      t.set(i.name, i);
    });
    function r(i) {
      n.add(i.name);
      var s = [].concat(i.requires || [], i.requiresIfExists || []);
      s.forEach(function(l) {
        if (!n.has(l)) {
          var a = t.get(l);
          a && r(a);
        }
      }), o.push(i);
    }
    return e.forEach(function(i) {
      n.has(i.name) || r(i);
    }), o;
  }
  function Fl(e) {
    var t = Il(e);
    return Bs.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function zl(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function kl(e) {
    var t = e.reduce(function(n, o) {
      var r = n[o.name];
      return n[o.name] = r ? Object.assign({}, r, o, {
        options: Object.assign({}, r.options, o.options),
        data: Object.assign({}, r.data, o.data)
      }) : o, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var ur = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function dr() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Tl(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? ur : r;
    return function(l, a, d) {
      d === void 0 && (d = i);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ur, i),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, p = [], g = false, f = {
        state: u,
        setOptions: function(b) {
          var C = typeof b == "function" ? b(u.options) : b;
          m(), u.options = Object.assign({}, i, u.options, C), u.scrollParents = {
            reference: Et(l) ? fn(l) : l.contextElement ? fn(l.contextElement) : [],
            popper: fn(a)
          };
          var _ = Fl(kl([].concat(o, u.options.modifiers)));
          return u.orderedModifiers = _.filter(function(w) {
            return w.enabled;
          }), h(), f.update();
        },
        forceUpdate: function() {
          if (!g) {
            var b = u.elements, C = b.reference, _ = b.popper;
            if (dr(C, _)) {
              u.rects = {
                reference: Pl(C, Rn(_), u.options.strategy === "fixed"),
                popper: Lo(_)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
                return u.modifiersData[$.name] = Object.assign({}, $.data);
              });
              for (var w = 0; w < u.orderedModifiers.length; w++) {
                if (u.reset === true) {
                  u.reset = false, w = -1;
                  continue;
                }
                var S = u.orderedModifiers[w], R = S.fn, P = S.options, D = P === void 0 ? {} : P, z = S.name;
                typeof R == "function" && (u = R({
                  state: u,
                  options: D,
                  name: z,
                  instance: f
                }) || u);
              }
            }
          }
        },
        update: zl(function() {
          return new Promise(function(v) {
            f.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!dr(l, a)) return f;
      f.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var b = v.name, C = v.options, _ = C === void 0 ? {} : C, w = v.effect;
          if (typeof w == "function") {
            var S = w({
              state: u,
              name: b,
              instance: f,
              options: _
            }), R = function() {
            };
            p.push(S || R);
          }
        });
      }
      function m() {
        p.forEach(function(v) {
          return v();
        }), p = [];
      }
      return f;
    };
  }
  var Dl = [
    il,
    _l,
    ol,
    Us,
    wl,
    ml,
    Rl,
    Zs,
    vl
  ], El = Tl({
    defaultModifiers: Dl
  });
  function Ol(e) {
    return ye("MuiPopper", e);
  }
  ve("MuiPopper", [
    "root"
  ]);
  function Nl(e, t) {
    if (t === "ltr") return e;
    switch (e) {
      case "bottom-end":
        return "bottom-start";
      case "bottom-start":
        return "bottom-end";
      case "top-end":
        return "top-start";
      case "top-start":
        return "top-end";
      default:
        return e;
    }
  }
  function _o(e) {
    return typeof e == "function" ? e() : e;
  }
  function Ll(e) {
    return e.nodeType !== void 0;
  }
  const Vl = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Ol, t);
  }, Hl = {}, Bl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: i, disablePortal: s, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: p, slotProps: g = {}, slots: f = {}, TransitionProps: h, ownerState: m, ...v } = t, b = y.useRef(null), C = Yt(b, n), _ = y.useRef(null), w = Yt(_, p), S = y.useRef(w);
    Ko(() => {
      S.current = w;
    }, [
      w
    ]), y.useImperativeHandle(p, () => _.current, []);
    const R = Nl(d, i), [P, D] = y.useState(R), [z, $] = y.useState(_o(o));
    y.useEffect(() => {
      _.current && _.current.forceUpdate();
    }), y.useEffect(() => {
      o && $(_o(o));
    }, [
      o
    ]), Ko(() => {
      if (!z || !a) return;
      const J = (j) => {
        D(j.placement);
      };
      let E = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: s
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: s
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: j }) => {
            J(j);
          }
        }
      ];
      l != null && (E = E.concat(l)), u && u.modifiers != null && (E = E.concat(u.modifiers));
      const k = El(z, b.current, {
        placement: R,
        ...u,
        modifiers: E
      });
      return S.current(k), () => {
        k.destroy(), S.current(null);
      };
    }, [
      z,
      s,
      l,
      a,
      u,
      R
    ]);
    const A = {
      placement: P
    };
    h !== null && (A.TransitionProps = h);
    const B = Vl(t), T = f.root ?? "div", Y = Di({
      elementType: T,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: C
      },
      ownerState: t,
      className: B.root
    });
    return c.jsx(T, {
      ...Y,
      children: typeof r == "function" ? r(A) : r
    });
  }), Wl = y.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: i, direction: s = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: p = "bottom", popperOptions: g = Hl, popperRef: f, style: h, transition: m = false, slotProps: v = {}, slots: b = {}, ...C } = t, [_, w] = y.useState(true), S = () => {
      w(false);
    }, R = () => {
      w(true);
    };
    if (!a && !u && (!m || _)) return null;
    let P;
    if (i) P = i;
    else if (o) {
      const $ = _o(o);
      P = $ && Ll($) ? dn($).body : dn(null).body;
    }
    const D = !u && a && (!m || _) ? "none" : void 0, z = m ? {
      in: u,
      onEnter: S,
      onExited: R
    } : void 0;
    return c.jsx(Ti, {
      disablePortal: l,
      container: P,
      children: c.jsx(Bl, {
        anchorEl: o,
        direction: s,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !_ : u,
        placement: p,
        popperOptions: g,
        popperRef: f,
        slotProps: v,
        slots: b,
        ...C,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: D,
          ...h
        },
        TransitionProps: z,
        children: r
      })
    });
  }), Gl = q(Wl, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), ai = y.forwardRef(function(t, n) {
    const o = Eo(), r = be({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: s, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: p, modifiers: g, open: f, placement: h, popperOptions: m, popperRef: v, transition: b, slots: C, slotProps: _, ...w } = r, S = (C == null ? void 0 : C.root) ?? (l == null ? void 0 : l.Root), R = {
      anchorEl: i,
      container: d,
      disablePortal: u,
      keepMounted: p,
      modifiers: g,
      open: f,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: b,
      ...w
    };
    return c.jsx(Gl, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: S
      },
      slotProps: _ ?? a,
      ...R,
      ref: n
    });
  }), Ul = ue(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function ql(e) {
    return ye("MuiChip", e);
  }
  const X = ve("MuiChip", [
    "root",
    "sizeSmall",
    "sizeMedium",
    "colorDefault",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "clickable",
    "clickableColorPrimary",
    "clickableColorSecondary",
    "deletable",
    "deletableColorPrimary",
    "deletableColorSecondary",
    "outlined",
    "filled",
    "outlinedPrimary",
    "outlinedSecondary",
    "filledPrimary",
    "filledSecondary",
    "avatar",
    "avatarSmall",
    "avatarMedium",
    "avatarColorPrimary",
    "avatarColorSecondary",
    "icon",
    "iconSmall",
    "iconMedium",
    "iconColorPrimary",
    "iconColorSecondary",
    "label",
    "labelSmall",
    "labelMedium",
    "deleteIcon",
    "deleteIconSmall",
    "deleteIconMedium",
    "deleteIconColorPrimary",
    "deleteIconColorSecondary",
    "deleteIconOutlinedColorPrimary",
    "deleteIconOutlinedColorSecondary",
    "deleteIconFilledColorPrimary",
    "deleteIconFilledColorSecondary",
    "focusVisible"
  ]), Yl = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: i, onDelete: s, clickable: l, variant: a } = e, d = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${H(o)}`,
        `color${H(r)}`,
        l && "clickable",
        l && `clickableColor${H(r)}`,
        s && "deletable",
        s && `deletableColor${H(r)}`,
        `${a}${H(r)}`
      ],
      label: [
        "label",
        `label${H(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${H(o)}`,
        `avatarColor${H(r)}`
      ],
      icon: [
        "icon",
        `icon${H(o)}`,
        `iconColor${H(i)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${H(o)}`,
        `deleteIconColor${H(r)}`,
        `deleteIcon${H(a)}Color${H(r)}`
      ]
    };
    return xe(d, ql, t);
  }, Jl = q("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: i, onDelete: s, size: l, variant: a } = n;
      return [
        {
          [`& .${X.avatar}`]: t.avatar
        },
        {
          [`& .${X.avatar}`]: t[`avatar${H(l)}`]
        },
        {
          [`& .${X.avatar}`]: t[`avatarColor${H(o)}`]
        },
        {
          [`& .${X.icon}`]: t.icon
        },
        {
          [`& .${X.icon}`]: t[`icon${H(l)}`]
        },
        {
          [`& .${X.icon}`]: t[`iconColor${H(r)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${H(l)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIconColor${H(o)}`]
        },
        {
          [`& .${X.deleteIcon}`]: t[`deleteIcon${H(a)}Color${H(o)}`]
        },
        t.root,
        t[`size${H(l)}`],
        t[`color${H(o)}`],
        i && t.clickable,
        i && o !== "default" && t[`clickableColor${H(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${H(o)}`],
        t[a],
        t[`${a}${H(o)}`]
      ];
    }
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
    return {
      maxWidth: "100%",
      fontFamily: e.typography.fontFamily,
      fontSize: e.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: (e.vars || e).palette.text.primary,
      backgroundColor: (e.vars || e).palette.action.selected,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: e.transitions.create([
        "background-color",
        "box-shadow"
      ]),
      cursor: "unset",
      outline: 0,
      textDecoration: "none",
      border: 0,
      padding: 0,
      verticalAlign: "middle",
      boxSizing: "border-box",
      [`&.${X.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${X.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${X.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${X.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${X.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${X.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${X.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : ke(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : ke(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${X.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${X.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Ft([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : ke(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${X.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${X.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ke(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Ft([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${X.focusVisible}`]: {
              background: (e.vars || e).palette[n].dark
            }
          }
        })),
        {
          props: {
            clickable: true
          },
          style: {
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ke(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ke(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Ft([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${X.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[n].dark
            }
          }
        })),
        {
          props: {
            variant: "outlined"
          },
          style: {
            backgroundColor: "transparent",
            border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
            [`&.${X.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${X.avatar}`]: {
              marginLeft: 4
            },
            [`& .${X.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${X.icon}`]: {
              marginLeft: 4
            },
            [`& .${X.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${X.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${X.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Ft()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ke(e.palette[n].main, 0.7)}`,
            [`&.${X.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ke(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${X.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : ke(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${X.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : ke(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Kl = q("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${H(o)}`]
      ];
    }
  })({
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          variant: "outlined"
        },
        style: {
          paddingLeft: 11,
          paddingRight: 11
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          paddingLeft: 8,
          paddingRight: 8
        }
      },
      {
        props: {
          size: "small",
          variant: "outlined"
        },
        style: {
          paddingLeft: 7,
          paddingRight: 7
        }
      }
    ]
  });
  function pr(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const Gn = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: i, clickable: s, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: p, label: g, onClick: f, onDelete: h, onKeyDown: m, onKeyUp: v, size: b = "medium", variant: C = "filled", tabIndex: _, skipFocusWhenDisabled: w = false, ...S } = o, R = y.useRef(null), P = Yt(R, n), D = (I) => {
      I.stopPropagation(), h && h(I);
    }, z = (I) => {
      I.currentTarget === I.target && pr(I) && I.preventDefault(), m && m(I);
    }, $ = (I) => {
      I.currentTarget === I.target && h && pr(I) && h(I), v && v(I);
    }, A = s !== false && f ? true : s, B = A || h ? Yn : a || "div", T = {
      ...o,
      component: B,
      disabled: u,
      size: b,
      color: l,
      iconColor: y.isValidElement(p) && p.props.color || l,
      onDelete: !!h,
      clickable: A,
      variant: C
    }, Y = Yl(T), J = B === Yn ? {
      component: a || "div",
      focusVisibleClassName: Y.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let E = null;
    h && (E = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: se(d.props.className, Y.deleteIcon),
      onClick: D
    }) : c.jsx(Ul, {
      className: se(Y.deleteIcon),
      onClick: D
    }));
    let k = null;
    r && y.isValidElement(r) && (k = y.cloneElement(r, {
      className: se(Y.avatar, r.props.className)
    }));
    let j = null;
    return p && y.isValidElement(p) && (j = y.cloneElement(p, {
      className: se(Y.icon, p.props.className)
    })), c.jsxs(Jl, {
      as: B,
      className: se(Y.root, i),
      disabled: A && u ? true : void 0,
      onClick: f,
      onKeyDown: z,
      onKeyUp: $,
      ref: P,
      tabIndex: w && u ? -1 : _,
      ownerState: T,
      ...J,
      ...S,
      children: [
        k || j,
        c.jsx(Kl, {
          className: se(Y.label),
          ownerState: T,
          children: g
        }),
        E
      ]
    });
  });
  function Xl(e) {
    return ye("MuiCard", e);
  }
  ve("MuiCard", [
    "root"
  ]);
  const Ql = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Xl, t);
  }, Zl = q(ot, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), ea = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: i = false, ...s } = o, l = {
      ...o,
      raised: i
    }, a = Ql(l);
    return c.jsx(Zl, {
      className: se(a.root, r),
      elevation: i ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...s
    });
  });
  function fr(e) {
    return e.substring(2).toLowerCase();
  }
  function ta(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function na(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: i = "onTouchEnd" } = e, s = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Yt(Gr(t), l), p = yn((h) => {
      const m = d.current;
      d.current = false;
      const v = dn(l.current);
      if (!a.current || !l.current || "clientX" in h && ta(h, v)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let b;
      h.composedPath ? b = h.composedPath().includes(l.current) : b = !v.documentElement.contains(h.target) || l.current.contains(h.target), !b && (n || !m) && r(h);
    }), g = (h) => (m) => {
      d.current = true;
      const v = t.props[h];
      v && v(m);
    }, f = {
      ref: u
    };
    return i !== false && (f[i] = g(i)), y.useEffect(() => {
      if (i !== false) {
        const h = fr(i), m = dn(l.current), v = () => {
          s.current = true;
        };
        return m.addEventListener(h, p), m.addEventListener("touchmove", v), () => {
          m.removeEventListener(h, p), m.removeEventListener("touchmove", v);
        };
      }
    }, [
      p,
      i
    ]), o !== false && (f[o] = g(o)), y.useEffect(() => {
      if (o !== false) {
        const h = fr(o), m = dn(l.current);
        return m.addEventListener(h, p), () => {
          m.removeEventListener(h, p);
        };
      }
    }, [
      p,
      o
    ]), y.cloneElement(t, f);
  }
  function oa(e) {
    return ye("MuiDialogActions", e);
  }
  ve("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const ra = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return xe({
      root: [
        "root",
        !n && "spacing"
      ]
    }, oa, t);
  }, ia = q("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        !n.disableSpacing && t.spacing
      ];
    }
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableSpacing,
        style: {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }
      }
    ]
  }), ci = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiDialogActions"
    }), { className: r, disableSpacing: i = false, ...s } = o, l = {
      ...o,
      disableSpacing: i
    }, a = ra(l);
    return c.jsx(ia, {
      className: se(a.root, r),
      ownerState: l,
      ref: n,
      ...s
    });
  });
  function sa(e) {
    return ye("MuiDialogContentText", e);
  }
  ve("MuiDialogContentText", [
    "root"
  ]);
  const la = (e) => {
    const { classes: t } = e, o = xe({
      root: [
        "root"
      ]
    }, sa, t);
    return {
      ...t,
      ...o
    };
  }, aa = q(F, {
    shouldForwardProp: (e) => Ei(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), ca = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiDialogContentText"
    }), { children: r, className: i, ...s } = o, l = la(s);
    return c.jsx(aa, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: s,
      className: se(l.root, i),
      ...o,
      classes: l
    });
  });
  function ua(e) {
    return ye("MuiInputAdornment", e);
  }
  const gr = ve("MuiInputAdornment", [
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
  var hr;
  const da = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${H(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, pa = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: i, variant: s } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${H(r)}`,
        s,
        o && "hiddenLabel",
        i && `size${H(i)}`
      ]
    };
    return xe(l, ua, t);
  }, fa = q("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: da
  })(fe(({ theme: e }) => ({
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
          [`&.${gr.positionStart}&:not(.${gr.hiddenLabel})`]: {
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
  }))), So = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: i, component: s = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...p } = o, g = Oi() || {};
    let f = u;
    u && g.variant, g && !f && (f = g.variant);
    const h = {
      ...o,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: f
    }, m = pa(h);
    return c.jsx(Ni.Provider, {
      value: null,
      children: c.jsx(fa, {
        as: s,
        ownerState: h,
        className: se(m.root, i),
        ref: n,
        ...p,
        children: typeof r == "string" && !a ? c.jsx(F, {
          color: "textSecondary",
          children: r
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? hr || (hr = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  }), ga = ue(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), ha = ue(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function ma(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: o, open: r, resumeHideDuration: i } = e, s = Gt();
    y.useEffect(() => {
      if (!r) return;
      function b(C) {
        C.defaultPrevented || C.key === "Escape" && (o == null ? void 0 : o(C, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", b), () => {
        document.removeEventListener("keydown", b);
      };
    }, [
      r,
      o
    ]);
    const l = yn((b, C) => {
      o == null ? void 0 : o(b, C);
    }), a = yn((b) => {
      !o || b == null || s.start(b, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (r && a(t), s.clear), [
      r,
      t,
      a,
      s
    ]);
    const d = (b) => {
      o == null ? void 0 : o(b, "clickaway");
    }, u = s.clear, p = y.useCallback(() => {
      t != null && a(i ?? t * 0.5);
    }, [
      t,
      i,
      a
    ]), g = (b) => (C) => {
      const _ = b.onBlur;
      _ == null ? void 0 : _(C), p();
    }, f = (b) => (C) => {
      const _ = b.onFocus;
      _ == null ? void 0 : _(C), u();
    }, h = (b) => (C) => {
      const _ = b.onMouseEnter;
      _ == null ? void 0 : _(C), u();
    }, m = (b) => (C) => {
      const _ = b.onMouseLeave;
      _ == null ? void 0 : _(C), p();
    };
    return y.useEffect(() => {
      if (!n && r) return window.addEventListener("focus", p), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", u);
      };
    }, [
      n,
      r,
      p,
      u
    ]), {
      getRootProps: (b = {}) => {
        const C = {
          ...Xo(e),
          ...Xo(b)
        };
        return {
          role: "presentation",
          ...b,
          ...C,
          onBlur: g(C),
          onFocus: f(C),
          onMouseEnter: h(C),
          onMouseLeave: m(C)
        };
      },
      onClickAway: d
    };
  }
  function ya(e) {
    return ye("MuiSnackbarContent", e);
  }
  ve("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const va = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, ya, t);
  }, ba = q(ot, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = Li(e.palette.background.default, t);
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
  })), xa = q("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), wa = q("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), Ca = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: r, className: i, message: s, role: l = "alert", ...a } = o, d = o, u = va(d);
    return c.jsxs(ba, {
      role: l,
      square: true,
      elevation: 6,
      className: se(u.root, i),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(xa, {
          className: u.message,
          ownerState: d,
          children: s
        }),
        r ? c.jsx(wa, {
          className: u.action,
          ownerState: d,
          children: r
        }) : null
      ]
    });
  });
  function _a(e) {
    return ye("MuiSnackbar", e);
  }
  ve("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const Sa = (e) => {
    const { classes: t, anchorOrigin: n } = e, o = {
      root: [
        "root",
        `anchorOrigin${H(n.vertical)}${H(n.horizontal)}`
      ]
    };
    return xe(o, _a, t);
  }, ja = q("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${H(n.anchorOrigin.vertical)}${H(n.anchorOrigin.horizontal)}`]
      ];
    }
  })(fe(({ theme: e }) => ({
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
  }))), Ra = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiSnackbar"
    }), r = Sn(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { action: s, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: p, ClickAwayListenerProps: g, ContentProps: f, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: b, onFocus: C, onMouseEnter: _, onMouseLeave: w, open: S, resumeHideDuration: R, slots: P = {}, slotProps: D = {}, TransitionComponent: z, transitionDuration: $ = i, TransitionProps: { onEnter: A, onExited: B, ...T } = {}, ...Y } = o, J = {
      ...o,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: z,
      transitionDuration: $
    }, E = Sa(J), { getRootProps: k, onClickAway: j } = ma({
      ...J
    }), [I, Z] = y.useState(true), G = (_e) => {
      Z(true), B && B(_e);
    }, ae = (_e, pe) => {
      Z(false), A && A(_e, pe);
    }, ee = {
      slots: {
        transition: z,
        ...P
      },
      slotProps: {
        content: f,
        clickAwayListener: g,
        transition: T,
        ...D
      }
    }, [ge, re] = le("root", {
      ref: n,
      className: [
        E.root,
        p
      ],
      elementType: ja,
      getSlotProps: k,
      externalForwardedProps: {
        ...ee,
        ...Y
      },
      ownerState: J
    }), [N, { ownerState: W, ...ie }] = le("clickAwayListener", {
      elementType: na,
      externalForwardedProps: ee,
      getSlotProps: (_e) => ({
        onClickAway: (...pe) => {
          var _a2;
          (_a2 = _e.onClickAway) == null ? void 0 : _a2.call(_e, ...pe), j(...pe);
        }
      }),
      ownerState: J
    }), [$e, Ee] = le("content", {
      elementType: Ca,
      shouldForwardComponentProp: true,
      externalForwardedProps: ee,
      additionalProps: {
        message: m,
        action: s
      },
      ownerState: J
    }), [Re, de] = le("transition", {
      elementType: Ur,
      externalForwardedProps: ee,
      getSlotProps: (_e) => ({
        onEnter: (...pe) => {
          var _a2;
          (_a2 = _e.onEnter) == null ? void 0 : _a2.call(_e, ...pe), ae(...pe);
        },
        onExited: (...pe) => {
          var _a2;
          (_a2 = _e.onExited) == null ? void 0 : _a2.call(_e, ...pe), G(...pe);
        }
      }),
      additionalProps: {
        appear: true,
        in: S,
        timeout: $,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: J
    });
    return !S && I ? null : c.jsx(N, {
      ...ie,
      ...P.clickAwayListener && {
        ownerState: W
      },
      children: c.jsx(ge, {
        ...re,
        children: c.jsx(Re, {
          ...de,
          children: u || c.jsx($e, {
            ...Ee
          })
        })
      })
    });
  });
  function Ma(e) {
    return ye("MuiTooltip", e);
  }
  const Ce = ve("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow"
  ]);
  function $a(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Aa = (e) => {
    const { classes: t, disableInteractive: n, arrow: o, touch: r, placement: i } = e, s = {
      popper: [
        "popper",
        !n && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        r && "touch",
        `tooltipPlacement${H(i.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return xe(s, Ma, t);
  }, Pa = q(ai, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose
      ];
    }
  })(fe(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.tooltip,
    pointerEvents: "none",
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableInteractive,
        style: {
          pointerEvents: "auto"
        }
      },
      {
        props: ({ open: t }) => !t,
        style: {
          pointerEvents: "none"
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          [`&[data-popper-placement*="bottom"] .${Ce.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${Ce.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "0 0"
            }
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${Ce.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${Ce.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Ia = q("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${H(n.placement.split("-")[0])}`]
      ];
    }
  })(fe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : ke(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
      transformOrigin: "center top",
      marginTop: "14px"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.arrow,
        style: {
          position: "relative",
          margin: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          padding: "8px 16px",
          fontSize: e.typography.pxToRem(14),
          lineHeight: `${$a(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${Ce.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${Ce.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Fa = q("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(fe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : ke(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)"
    }
  })));
  let Dn = false;
  const mr = new Vi();
  let nn = {
    x: 0,
    y: 0
  };
  function En(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const Ne = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: i, classes: s, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: p = false, disableInteractive: g = false, disableTouchListener: f = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: b = false, id: C, leaveDelay: _ = 0, leaveTouchDelay: w = 1500, onClose: S, onOpen: R, open: P, placement: D = "bottom", PopperComponent: z, PopperProps: $ = {}, slotProps: A = {}, slots: B = {}, title: T, TransitionComponent: Y, TransitionProps: J, ...E } = o, k = y.isValidElement(i) ? i : c.jsx("span", {
      children: i
    }), j = Sn(), I = Eo(), [Z, G] = y.useState(), [ae, ee] = y.useState(null), ge = y.useRef(false), re = g || b, N = Gt(), W = Gt(), ie = Gt(), $e = Gt(), [Ee, Re] = Wr({
      controlled: P,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let de = Ee;
    const _e = bo(C), pe = y.useRef(), He = yn(() => {
      pe.current !== void 0 && (document.body.style.WebkitUserSelect = pe.current, pe.current = void 0), $e.clear();
    });
    y.useEffect(() => He, [
      He
    ]);
    const Mt = (K) => {
      mr.clear(), Dn = true, Re(true), R && !de && R(K);
    }, rt = yn((K) => {
      mr.start(800 + _, () => {
        Dn = false;
      }), Re(false), S && de && S(K), N.start(j.transitions.duration.shortest, () => {
        ge.current = false;
      });
    }), at = (K) => {
      ge.current && K.type !== "touchstart" || (Z && Z.removeAttribute("title"), W.clear(), ie.clear(), h || Dn && m ? W.start(Dn ? m : h, () => {
        Mt(K);
      }) : Mt(K));
    }, ct = (K) => {
      W.clear(), ie.start(_, () => {
        rt(K);
      });
    }, [, Be] = y.useState(false), ut = (K) => {
      Qo(K.target) || (Be(false), ct(K));
    }, $t = (K) => {
      Z || G(K.currentTarget), Qo(K.target) && (Be(true), at(K));
    }, At = (K) => {
      ge.current = true;
      const wt = k.props;
      wt.onTouchStart && wt.onTouchStart(K);
    }, it = (K) => {
      At(K), ie.clear(), N.clear(), He(), pe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", $e.start(v, () => {
        document.body.style.WebkitUserSelect = pe.current, at(K);
      });
    }, Pt = (K) => {
      k.props.onTouchEnd && k.props.onTouchEnd(K), He(), ie.start(w, () => {
        rt(K);
      });
    };
    y.useEffect(() => {
      if (!de) return;
      function K(wt) {
        wt.key === "Escape" && rt(wt);
      }
      return document.addEventListener("keydown", K), () => {
        document.removeEventListener("keydown", K);
      };
    }, [
      rt,
      de
    ]);
    const dt = Yt(Gr(k), G, n);
    !T && T !== 0 && (de = false);
    const Ze = y.useRef(), It = (K) => {
      const wt = k.props;
      wt.onMouseMove && wt.onMouseMove(K), nn = {
        x: K.clientX,
        y: K.clientY
      }, Ze.current && Ze.current.update();
    }, vt = {}, Nt = typeof T == "string";
    d ? (vt.title = !de && Nt && !p ? T : null, vt["aria-describedby"] = de ? _e : null) : (vt["aria-label"] = Nt ? T : null, vt["aria-labelledby"] = de && !Nt ? _e : null);
    const Pe = {
      ...vt,
      ...E,
      ...k.props,
      className: se(E.className, k.props.className),
      onTouchStart: At,
      ref: dt,
      ...b ? {
        onMouseMove: It
      } : {}
    }, bt = {};
    f || (Pe.onTouchStart = it, Pe.onTouchEnd = Pt), p || (Pe.onMouseOver = En(at, Pe.onMouseOver), Pe.onMouseLeave = En(ct, Pe.onMouseLeave), re || (bt.onMouseOver = at, bt.onMouseLeave = ct)), u || (Pe.onFocus = En($t, Pe.onFocus), Pe.onBlur = En(ut, Pe.onBlur), re || (bt.onFocus = $t, bt.onBlur = ut));
    const pt = {
      ...o,
      isRtl: I,
      arrow: r,
      disableInteractive: re,
      placement: D,
      PopperComponentProp: z,
      touch: ge.current
    }, Lt = typeof A.popper == "function" ? A.popper(pt) : A.popper, et = y.useMemo(() => {
      var _a2, _b;
      let K = [
        {
          name: "arrow",
          enabled: !!ae,
          options: {
            element: ae,
            padding: 4
          }
        }
      ];
      return ((_a2 = $.popperOptions) == null ? void 0 : _a2.modifiers) && (K = K.concat($.popperOptions.modifiers)), ((_b = Lt == null ? void 0 : Lt.popperOptions) == null ? void 0 : _b.modifiers) && (K = K.concat(Lt.popperOptions.modifiers)), {
        ...$.popperOptions,
        ...Lt == null ? void 0 : Lt.popperOptions,
        modifiers: K
      };
    }, [
      ae,
      $.popperOptions,
      Lt == null ? void 0 : Lt.popperOptions
    ]), Vt = Aa(pt), $n = typeof A.transition == "function" ? A.transition(pt) : A.transition, M = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? Y,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...B
      },
      slotProps: {
        arrow: A.arrow ?? a.arrow,
        popper: {
          ...$,
          ...Lt ?? a.popper
        },
        tooltip: A.tooltip ?? a.tooltip,
        transition: {
          ...J,
          ...$n ?? a.transition
        }
      }
    }, [O, Q] = le("popper", {
      elementType: Pa,
      externalForwardedProps: M,
      ownerState: pt,
      className: se(Vt.popper, $ == null ? void 0 : $.className)
    }), [we, Ie] = le("transition", {
      elementType: Ur,
      externalForwardedProps: M,
      ownerState: pt
    }), [qe, en] = le("tooltip", {
      elementType: Ia,
      className: Vt.tooltip,
      externalForwardedProps: M,
      ownerState: pt
    }), [xt, An] = le("arrow", {
      elementType: Fa,
      className: Vt.arrow,
      externalForwardedProps: M,
      ownerState: pt,
      ref: ee
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(k, Pe),
        c.jsx(O, {
          as: z ?? ai,
          placement: D,
          anchorEl: b ? {
            getBoundingClientRect: () => ({
              top: nn.y,
              left: nn.x,
              right: nn.x,
              bottom: nn.y,
              width: 0,
              height: 0
            })
          } : Z,
          popperRef: Ze,
          open: Z ? de : false,
          id: _e,
          transition: true,
          ...bt,
          ...Q,
          popperOptions: et,
          children: ({ TransitionProps: K }) => c.jsx(we, {
            timeout: j.transitions.duration.shorter,
            ...K,
            ...Ie,
            children: c.jsxs(qe, {
              ...en,
              children: [
                T,
                r ? c.jsx(xt, {
                  ...An
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), ui = y.createContext();
  function za(e) {
    return ye("MuiTable", e);
  }
  ve("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const ka = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return xe({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, za, t);
  }, Ta = q("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(fe(({ theme: e }) => ({
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
  }))), yr = "table", Da = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTable"
    }), { className: r, component: i = yr, padding: s = "normal", size: l = "medium", stickyHeader: a = false, ...d } = o, u = {
      ...o,
      component: i,
      padding: s,
      size: l,
      stickyHeader: a
    }, p = ka(u), g = y.useMemo(() => ({
      padding: s,
      size: l,
      stickyHeader: a
    }), [
      s,
      l,
      a
    ]);
    return c.jsx(ui.Provider, {
      value: g,
      children: c.jsx(Ta, {
        as: i,
        role: i === yr ? null : "table",
        ref: n,
        className: se(p.root, r),
        ownerState: u,
        ...d
      })
    });
  }), no = y.createContext();
  function Ea(e) {
    return ye("MuiTableBody", e);
  }
  ve("MuiTableBody", [
    "root"
  ]);
  const Oa = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Ea, t);
  }, Na = q("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), La = {
    variant: "body"
  }, vr = "tbody", Va = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableBody"
    }), { className: r, component: i = vr, ...s } = o, l = {
      ...o,
      component: i
    }, a = Oa(l);
    return c.jsx(no.Provider, {
      value: La,
      children: c.jsx(Na, {
        className: se(a.root, r),
        as: i,
        ref: n,
        role: i === vr ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function Ha(e) {
    return ye("MuiTableCell", e);
  }
  const Ba = ve("MuiTableCell", [
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
  ]), Wa = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: i, stickyHeader: s } = e, l = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${H(o)}`,
        r !== "normal" && `padding${H(r)}`,
        `size${H(i)}`
      ]
    };
    return xe(l, Ha, t);
  }, Ga = q("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${H(n.size)}`],
        n.padding !== "normal" && t[`padding${H(n.padding)}`],
        n.align !== "inherit" && t[`align${H(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? vo(ke(e.palette.divider, 1), 0.88) : yo(ke(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Ba.paddingCheckbox}`]: {
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
  }))), tt = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: i, component: s, padding: l, scope: a, size: d, sortDirection: u, variant: p, ...g } = o, f = y.useContext(ui), h = y.useContext(no), m = h && h.variant === "head";
    let v;
    s ? v = s : v = m ? "th" : "td";
    let b = a;
    v === "td" ? b = void 0 : !b && m && (b = "col");
    const C = p || h && h.variant, _ = {
      ...o,
      align: r,
      component: v,
      padding: l || (f && f.padding ? f.padding : "normal"),
      size: d || (f && f.size ? f.size : "medium"),
      sortDirection: u,
      stickyHeader: C === "head" && f && f.stickyHeader,
      variant: C
    }, w = Wa(_);
    let S = null;
    return u && (S = u === "asc" ? "ascending" : "descending"), c.jsx(Ga, {
      as: v,
      ref: n,
      className: se(w.root, i),
      "aria-sort": S,
      scope: b,
      ownerState: _,
      ...g
    });
  });
  function Ua(e) {
    return ye("MuiTableContainer", e);
  }
  ve("MuiTableContainer", [
    "root"
  ]);
  const qa = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Ua, t);
  }, Ya = q("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Ja = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableContainer"
    }), { className: r, component: i = "div", ...s } = o, l = {
      ...o,
      component: i
    }, a = qa(l);
    return c.jsx(Ya, {
      ref: n,
      as: i,
      className: se(a.root, r),
      ownerState: l,
      ...s
    });
  });
  function Ka(e) {
    return ye("MuiTableHead", e);
  }
  ve("MuiTableHead", [
    "root"
  ]);
  const Xa = (e) => {
    const { classes: t } = e;
    return xe({
      root: [
        "root"
      ]
    }, Ka, t);
  }, Qa = q("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), Za = {
    variant: "head"
  }, br = "thead", ec = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableHead"
    }), { className: r, component: i = br, ...s } = o, l = {
      ...o,
      component: i
    }, a = Xa(l);
    return c.jsx(no.Provider, {
      value: Za,
      children: c.jsx(Qa, {
        as: i,
        className: se(a.root, r),
        ref: n,
        role: i === br ? null : "rowgroup",
        ownerState: l,
        ...s
      })
    });
  });
  function tc(e) {
    return ye("MuiToolbar", e);
  }
  ve("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const nc = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return xe({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, tc, t);
  }, oc = q("div", {
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
  })(fe(({ theme: e }) => ({
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
  }))), di = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: i = "div", disableGutters: s = false, variant: l = "regular", ...a } = o, d = {
      ...o,
      component: i,
      disableGutters: s,
      variant: l
    }, u = nc(d);
    return c.jsx(oc, {
      as: i,
      className: se(u.root, r),
      ref: n,
      ownerState: d,
      ...a
    });
  }), rc = ue(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), ic = ue(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), sc = y.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: i = false, getItemAriaLabel: s, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: p, showLastButton: g, slots: f = {}, slotProps: h = {}, ...m } = t, v = Eo(), b = (G) => {
      a(G, 0);
    }, C = (G) => {
      a(G, d - 1);
    }, _ = (G) => {
      a(G, d + 1);
    }, w = (G) => {
      a(G, Math.max(0, Math.ceil(r / u) - 1));
    }, S = f.firstButton ?? Se, R = f.lastButton ?? Se, P = f.nextButton ?? Se, D = f.previousButton ?? Se, z = f.firstButtonIcon ?? ga, $ = f.lastButtonIcon ?? ha, A = f.nextButtonIcon ?? ic, B = f.previousButtonIcon ?? rc, T = v ? R : S, Y = v ? P : D, J = v ? D : P, E = v ? S : R, k = v ? h.lastButton : h.firstButton, j = v ? h.nextButton : h.previousButton, I = v ? h.previousButton : h.nextButton, Z = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        p && c.jsx(T, {
          onClick: b,
          disabled: i || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...k,
          children: v ? c.jsx($, {
            ...h.lastButtonIcon
          }) : c.jsx(z, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(Y, {
          onClick: C,
          disabled: i || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...j ?? o,
          children: v ? c.jsx(A, {
            ...h.nextButtonIcon
          }) : c.jsx(B, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(J, {
          onClick: _,
          disabled: i || (r !== -1 ? d >= Math.ceil(r / u) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...I ?? l,
          children: v ? c.jsx(B, {
            ...h.previousButtonIcon
          }) : c.jsx(A, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(E, {
          onClick: w,
          disabled: i || d >= Math.ceil(r / u) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ...Z,
          children: v ? c.jsx(z, {
            ...h.firstButtonIcon
          }) : c.jsx($, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function lc(e) {
    return ye("MuiTablePagination", e);
  }
  const gn = ve("MuiTablePagination", [
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
  var xr;
  const ac = q(tt, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), cc = q(di, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${gn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(fe(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${gn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), uc = q("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), dc = q("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), pc = q(Jt, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${gn.selectIcon}`]: t.selectIcon,
      [`& .${gn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${gn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), fc = q(je, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), gc = q("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function hc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function mc(e) {
    return `Go to ${e} page`;
  }
  const yc = (e) => {
    const { classes: t } = e;
    return xe({
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
    }, lc, t);
  }, vc = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = sc, backIconButtonProps: i, colSpan: s, component: l = tt, count: a, disabled: d = false, getItemAriaLabel: u = mc, labelDisplayedRows: p = hc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: f, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: b, rowsPerPageOptions: C = [
      10,
      25,
      50,
      100
    ], SelectProps: _ = {}, showFirstButton: w = false, showLastButton: S = false, slotProps: R = {}, slots: P = {}, ...D } = o, z = o, $ = yc(z), A = (R == null ? void 0 : R.select) ?? _, B = A.native ? "option" : fc;
    let T;
    (l === tt || l === "td") && (T = s || 1e3);
    const Y = bo(A.id), J = bo(A.labelId), E = () => a === -1 ? (v + 1) * b : b === -1 ? a : Math.min(a, (v + 1) * b), k = {
      slots: P,
      slotProps: R
    }, [j, I] = le("root", {
      ref: n,
      className: $.root,
      elementType: ac,
      externalForwardedProps: {
        ...k,
        component: l,
        ...D
      },
      ownerState: z,
      additionalProps: {
        colSpan: T
      }
    }), [Z, G] = le("toolbar", {
      className: $.toolbar,
      elementType: cc,
      externalForwardedProps: k,
      ownerState: z
    }), [ae, ee] = le("spacer", {
      className: $.spacer,
      elementType: uc,
      externalForwardedProps: k,
      ownerState: z
    }), [ge, re] = le("selectLabel", {
      className: $.selectLabel,
      elementType: dc,
      externalForwardedProps: k,
      ownerState: z,
      additionalProps: {
        id: J
      }
    }), [N, W] = le("select", {
      className: $.select,
      elementType: pc,
      externalForwardedProps: k,
      ownerState: z
    }), [ie, $e] = le("menuItem", {
      className: $.menuItem,
      elementType: B,
      externalForwardedProps: k,
      ownerState: z
    }), [Ee, Re] = le("displayedRows", {
      className: $.displayedRows,
      elementType: gc,
      externalForwardedProps: k,
      ownerState: z
    });
    return c.jsx(j, {
      ...I,
      children: c.jsxs(Z, {
        ...G,
        children: [
          c.jsx(ae, {
            ...ee
          }),
          C.length > 1 && c.jsx(ge, {
            ...re,
            children: g
          }),
          C.length > 1 && c.jsx(N, {
            variant: "standard",
            ...!A.variant && {
              input: xr || (xr = c.jsx(Hi, {}))
            },
            value: b,
            onChange: m,
            id: Y,
            labelId: J,
            ...A,
            classes: {
              ...A.classes,
              root: se($.input, $.selectRoot, (A.classes || {}).root),
              select: se($.select, (A.classes || {}).select),
              icon: se($.selectIcon, (A.classes || {}).icon)
            },
            disabled: d,
            ...W,
            children: C.map((de) => y.createElement(ie, {
              ...$e,
              key: de.label ? de.label : de,
              value: de.value ? de.value : de
            }, de.label ? de.label : de))
          }),
          c.jsx(Ee, {
            ...Re,
            children: p({
              from: a === 0 ? 0 : v * b + 1,
              to: E(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(r, {
            className: $.actions,
            backIconButtonProps: i,
            count: a,
            nextIconButtonProps: f,
            onPageChange: h,
            page: v,
            rowsPerPage: b,
            showFirstButton: w,
            showLastButton: S,
            slotProps: R.actions,
            slots: P.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function bc(e) {
    return ye("MuiTableRow", e);
  }
  const wr = ve("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), xc = (e) => {
    const { classes: t, selected: n, hover: o, head: r, footer: i } = e;
    return xe({
      root: [
        "root",
        n && "selected",
        o && "hover",
        r && "head",
        i && "footer"
      ]
    }, bc, t);
  }, wc = q("tr", {
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
  })(fe(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${wr.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${wr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ke(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Cr = "tr", Ht = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableRow"
    }), { className: r, component: i = Cr, hover: s = false, selected: l = false, ...a } = o, d = y.useContext(no), u = {
      ...o,
      component: i,
      hover: s,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, p = xc(u);
    return c.jsx(wc, {
      as: i,
      ref: n,
      className: se(p.root, r),
      role: i === Cr ? null : "row",
      ownerState: u,
      ...a
    });
  }), Cc = ue(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function _c(e) {
    return ye("MuiTableSortLabel", e);
  }
  const io = ve("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), Sc = (e) => {
    const { classes: t, direction: n, active: o } = e, r = {
      root: [
        "root",
        o && "active",
        `direction${H(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${H(n)}`
      ]
    };
    return xe(r, _c, t);
  }, jc = q(Yn, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.active && t.active
      ];
    }
  })(fe(({ theme: e }) => ({
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
      [`& .${io.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${io.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${io.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), Rc = q("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${H(n.direction)}`]
      ];
    }
  })(fe(({ theme: e }) => ({
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
  }))), Mc = y.forwardRef(function(t, n) {
    const o = be({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: i, className: s, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = Cc, slots: u = {}, slotProps: p = {}, ...g } = o, f = {
      ...o,
      active: r,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = Sc(f), m = {
      slots: u,
      slotProps: p
    }, [v, b] = le("root", {
      elementType: jc,
      externalForwardedProps: m,
      ownerState: f,
      className: se(h.root, s),
      ref: n
    }), [C, _] = le("icon", {
      elementType: Rc,
      externalForwardedProps: m,
      ownerState: f,
      className: h.icon
    });
    return c.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...b,
      ...g,
      children: [
        i,
        a && !r ? null : c.jsx(C, {
          as: d,
          ..._
        })
      ]
    });
  }), pi = ue(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), fi = ue(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), gi = ue(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), jo = ue(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), $c = ue(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), On = ue(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), _r = ue(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Sr = ue(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), Ac = ue(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), Pc = ue(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), un = ue(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), hi = ue(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), Ic = ue(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), Fc = ue(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), zc = ue(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), hn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, jr = "b64:";
  function kc(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let o = 0; o < t.length; o++) n += String.fromCharCode(t[o]);
    return btoa(n);
  }
  function Tc(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let o = 0; o < t.length; o++) n[o] = t.charCodeAt(o);
    return new TextDecoder().decode(n);
  }
  function mi(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(jr) ? Tc(e.slice(jr.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function Dc({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: o, onChange: r, onRefresh: i, loading: s }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [p, g] = y.useState(null), [f, h] = y.useState(false), m = y.useRef(0), v = y.useRef(/* @__PURE__ */ new Map()), b = !l, C = y.useMemo(() => {
      if (!l) return e;
      const j = l.toLowerCase();
      return e.filter((I) => I.path.toLowerCase().includes(j) || I.headerName.toLowerCase().includes(j));
    }, [
      e,
      l
    ]), _ = y.useMemo(() => e.filter((j) => j.visible).length, [
      e
    ]), w = y.useCallback((j) => {
      r(e.map((I) => I.path === j ? {
        ...I,
        visible: !I.visible
      } : I));
    }, [
      e,
      r
    ]), S = y.useCallback((j, I) => {
      j.stopPropagation(), w(I);
    }, [
      w
    ]), R = y.useCallback((j) => (I) => {
      I ? v.current.set(j, I) : v.current.delete(j);
    }, []), P = y.useCallback((j) => {
      r(e.map((I) => ({
        ...I,
        visible: j
      })));
    }, [
      e,
      r
    ]), D = y.useCallback((j, I) => {
      j.dataTransfer.effectAllowed = "move", j.dataTransfer.setData("text/plain", I), u(I);
    }, []), z = y.useCallback((j, I) => {
      j.preventDefault(), m.current += 1, I !== d && g(I);
    }, [
      d
    ]), $ = y.useCallback((j) => {
      j.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, g(null));
    }, []), A = y.useCallback((j) => {
      j.preventDefault(), j.dataTransfer.dropEffect = "move";
    }, []), B = y.useCallback((j, I) => {
      j.preventDefault(), m.current = 0, g(null), u(null);
      const Z = j.dataTransfer.getData("text/plain");
      if (!Z || Z === I) return;
      const G = [
        ...e
      ], ae = G.findIndex((re) => re.path === Z), ee = G.findIndex((re) => re.path === I);
      if (ae === -1 || ee === -1) return;
      const [ge] = G.splice(ae, 1);
      G.splice(ee, 0, ge), r(G);
    }, [
      e,
      r
    ]), T = y.useCallback(() => {
      m.current = 0, u(null), g(null);
    }, []), Y = y.useCallback(() => {
      r(e.map((j) => ({
        path: j.path,
        visible: true,
        headerName: j.path.split(".").pop() || j.path
      }))), h(false);
    }, [
      e,
      r
    ]), J = y.useCallback(() => {
      h(true);
    }, []), E = y.useCallback(() => {
      h(false);
    }, []), k = y.useCallback((j, I, Z) => {
      var _a2, _b;
      switch (j.key) {
        case "Enter":
        case " ":
          j.preventDefault(), o(I.path);
          break;
        case "ArrowDown":
          if (j.preventDefault(), Z < C.length - 1) {
            const G = C[Z + 1].path;
            o(G), (_a2 = v.current.get(G)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (j.preventDefault(), Z > 0) {
            const G = C[Z - 1].path;
            o(G), (_b = v.current.get(G)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          j.preventDefault(), w(I.path);
          break;
      }
    }, [
      C,
      o,
      w
    ]);
    return c.jsxs(U, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(di, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx(Ae, {
              size: "small",
              placeholder: x.t("json_table_search_columns"),
              value: l,
              onChange: (j) => a(j.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(So, {
                    position: "start",
                    children: c.jsx(hi, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": x.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            c.jsx(Ne, {
              title: x.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(Se, {
                  size: "small",
                  onClick: i,
                  disabled: s,
                  "aria-label": x.t("json_table_refresh_columns"),
                  children: c.jsx(Pc, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_show_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: () => P(true),
                "aria-label": x.t("json_table_show_all"),
                children: c.jsx(Fc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_hide_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: () => P(false),
                "aria-label": x.t("json_table_hide_all"),
                children: c.jsx(zc, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: x.t("json_table_reset_all"),
              children: c.jsx(Se, {
                size: "small",
                onClick: J,
                "aria-label": x.t("json_table_reset_all"),
                children: c.jsx(un, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(U, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: C.length === 0 ? c.jsx(U, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(F, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? x.t("json_table_no_columns") : x.t("json_table_no_search_results")
            })
          }) : C.map((j, I) => {
            const Z = t.find((ee) => ee.path === j.path), G = n === j.path, ae = (Z == null ? void 0 : Z.type) || "string";
            return c.jsx(ea, {
              ref: R(j.path),
              "data-column-path": j.path,
              onClick: () => o(j.path),
              onKeyDown: (ee) => k(ee, j, I),
              draggable: b,
              onDragStart: b ? (ee) => D(ee, j.path) : void 0,
              onDragEnter: b ? (ee) => z(ee, j.path) : void 0,
              onDragLeave: b ? $ : void 0,
              onDragOver: b ? A : void 0,
              onDrop: b ? (ee) => B(ee, j.path) : void 0,
              onDragEnd: b ? T : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": G,
              "aria-label": `${j.headerName || j.path}, ${ae}, ${j.visible ? x.t("json_table_visible") : x.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: b ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: G ? "primary.main" : "divider",
                backgroundColor: G ? "action.selected" : "background.paper",
                opacity: d === j.path ? 0.4 : j.visible ? 1 : 0.55,
                borderTop: p === j.path ? "3px solid" : void 0,
                borderTopColor: p === j.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: G ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(U, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  b && c.jsx($c, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  c.jsx(xn, {
                    checked: j.visible,
                    onClick: (ee) => S(ee, j.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${x.t("json_table_visible")}: ${j.headerName || j.path}`
                    }
                  }),
                  c.jsxs(U, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(F, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: j.path,
                        children: j.headerName || j.path
                      }),
                      j.headerName && j.headerName !== j.path && c.jsx(F, {
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
                        title: j.path,
                        children: j.path
                      })
                    ]
                  }),
                  c.jsx(Gn, {
                    label: ae,
                    size: "small",
                    sx: {
                      backgroundColor: hn[ae] || hn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${x.t("json_table_type")}: ${ae}`
                  })
                ]
              })
            }, j.path);
          })
        }),
        e.length > 0 && c.jsx(U, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(F, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              _,
              " / ",
              e.length,
              " ",
              x.t("json_table_columns_visible")
            ]
          })
        }),
        c.jsxs(qr, {
          open: f,
          onClose: E,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            c.jsx(Yr, {
              id: "reset-dialog-title",
              children: x.t("json_table_reset_all")
            }),
            c.jsx(Jr, {
              children: c.jsx(ca, {
                id: "reset-dialog-description",
                children: x.t("json_table_reset_confirm_message")
              })
            }),
            c.jsxs(ci, {
              children: [
                c.jsx(Dt, {
                  onClick: E,
                  color: "primary",
                  children: x.t("cancel")
                }),
                c.jsx(Dt, {
                  onClick: Y,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: x.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Un(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  function yi(e, t = {}) {
    const { decimals: n = 2, prefix: o = "", suffix: r = "", thousands: i = false } = t;
    let s = e.toFixed(n);
    if (i) {
      const [l, a] = s.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      s = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${o}${s}${r}`;
  }
  const Ec = [
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
  function vi(e, t) {
    if (e == null) return "";
    if (typeof e == "number") {
      const r = new Date(e >= 1e11 ? e : e * 1e3);
      return isNaN(r.getTime()) ? "" : r.toISOString().slice(0, 10);
    }
    if (e instanceof Date) return isNaN(e.getTime()) ? "" : e.toISOString().slice(0, 10);
    if (typeof e != "string") return "";
    const n = e.trim();
    if (!n) return "";
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})/);
      return r ? `${r[3]}-${r[2]}-${r[1]}` : "";
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
      return r ? `${r[3]}-${r[1]}-${r[2]}` : "";
    }
    const o = new Date(n);
    return isNaN(o.getTime()) ? "" : o.toISOString().slice(0, 10);
  }
  function bi(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let o;
      if (typeof e == "string") {
        const a = e.trim();
        if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [d, u, p] = a.split("-").map(Number);
          o = new Date(d, u - 1, p);
        } else o = new Date(a);
      } else if (typeof e == "number") o = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) o = e;
      else return Un(e);
      if (isNaN(o.getTime())) return Un(e);
      const r = t || "yyyy-MM-dd", i = (a, d = 2) => String(a).padStart(d, "0"), s = {
        yyyy: String(o.getFullYear()),
        MM: i(o.getMonth() + 1),
        dd: i(o.getDate()),
        HH: i(o.getHours()),
        mm: i(o.getMinutes()),
        ss: i(o.getSeconds()),
        SSS: i(o.getMilliseconds(), 3)
      };
      if (r === "yyyy-MM-dd'T'HH:mm:ss.SSSxxx" || /xxx$/.test(r)) return o.toISOString();
      let l = r;
      for (const [a, d] of Object.entries(s).sort((u, p) => p[0].length - u[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return Un(e);
    }
  }
  function Ro(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : Un(e);
  }
  function xi(e, t) {
    let n = t.stringTrim ? e.trim() : e;
    if (t.stringRegex && t.stringRegex.length <= 200) try {
      const s = new RegExp(t.stringRegex, t.stringRegexFlags ?? ""), l = n.match(s);
      l && (n = l[t.stringRegexGroup ?? 0] ?? n);
    } catch {
    }
    t.stringCase === "upper" ? n = n.toUpperCase() : t.stringCase === "lower" ? n = n.toLowerCase() : t.stringCase === "title" && (n = n.replace(/\b\w/g, (i) => i.toUpperCase())), t.stringMaxLength && n.length > t.stringMaxLength && (n = `${n.slice(0, t.stringMaxLength)}\u2026`);
    const o = t.stringPrefix ?? "", r = t.stringSuffix ?? "";
    return o || r ? `${o}${n}${r}` : n;
  }
  function Oc({ format: e, onChange: t, discoveredColumn: n }) {
    const o = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const r = typeof n.max == "number" ? n.max : 0;
        return n.min + (r - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_number_format")
        }),
        c.jsxs(U, {
          children: [
            c.jsxs(F, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                x.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(ns, {
              value: e.numberDecimals ?? 2,
              onChange: (r, i) => t({
                type: "number",
                numberDecimals: i
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
        c.jsx(Ae, {
          label: x.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (r) => t({
            type: "number",
            numberPrefix: r.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx(Ae, {
          label: x.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (r) => t({
            type: "number",
            numberSuffix: r.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(mt, {
          control: c.jsx(kt, {
            checked: e.numberThousandsSeparator || false,
            onChange: (r) => t({
              type: "number",
              numberThousandsSeparator: r.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(F, {
            variant: "body2",
            children: x.t("json_table_number_thousands")
          })
        }),
        c.jsxs(ot, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsxs(F, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                o,
                " \u2192",
                " ",
                yi(o, {
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
  function Nc({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_date_format")
        }),
        t && c.jsx(Ae, {
          label: x.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: x.t("json_table_date_detected_hint")
        }),
        c.jsxs(vn, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(bn, {
              children: x.t("json_table_date_output_format")
            }),
            c.jsx(Jt, {
              label: x.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (o) => n({
                type: "date",
                dateFormat: o.target.value,
                dateInputFormat: t
              }),
              children: Ec.map((o) => c.jsx(je, {
                value: o.value,
                children: o.label
              }, o.value))
            })
          ]
        }),
        c.jsxs(ot, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsx(F, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: bi(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function Lc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_boolean_format")
        }),
        c.jsx(Ae, {
          label: x.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx(Ae, {
          label: x.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        c.jsxs(ot, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsxs(De, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                c.jsxs(F, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Ro(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(F, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Ro(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Mo({ value: e, onChange: t, label: n }) {
    const o = Sn(), [r, i] = y.useState(null), s = y.useRef(null), [l, a] = y.useState(null), d = !!r;
    return y.useEffect(() => {
      if (!d || !l) return;
      const u = new ResizeObserver(() => {
        var _a2;
        (_a2 = s.current) == null ? void 0 : _a2.updatePosition();
      });
      return u.observe(l), () => {
        u.disconnect();
      };
    }, [
      d,
      l
    ]), c.jsxs(U, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: o.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (u) => {
            i(u.currentTarget);
          },
          children: [
            c.jsx(F, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(U, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: e || "transparent",
                border: e ? `1px solid ${o.palette.divider}` : `1px dashed ${o.palette.text.disabled}`
              }
            }),
            e && c.jsx(Se, {
              size: "small",
              onClick: (u) => {
                u.stopPropagation(), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(jo, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(Bi, {
          action: s,
          open: d,
          anchorEl: r,
          onClose: () => i(null),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                maxHeight: "calc(100vh - 100px)",
                overflow: "auto"
              }
            }
          },
          children: c.jsx(U, {
            ref: a,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(Wi, {
              value: e || "#ffffff",
              onChange: t,
              hidePresets: true,
              hideInputs: true,
              hideEyeDrop: true,
              hideInputType: true
            })
          })
        })
      ]
    });
  }
  function Vc({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: x.t("json_table_string_format")
        }),
        c.jsxs(vn, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(bn, {
              children: x.t("json_table_string_case")
            }),
            c.jsxs(Jt, {
              label: x.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(je, {
                  value: "none",
                  children: x.t("json_table_string_case_none")
                }),
                c.jsx(je, {
                  value: "upper",
                  children: x.t("json_table_string_case_upper")
                }),
                c.jsx(je, {
                  value: "lower",
                  children: x.t("json_table_string_case_lower")
                }),
                c.jsx(je, {
                  value: "title",
                  children: x.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
              label: x.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx(Ae, {
              label: x.t("json_table_string_suffix"),
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
        c.jsx(mt, {
          control: c.jsx(kt, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: x.t("json_table_string_trim")
        }),
        c.jsx(Ae, {
          label: x.t("json_table_string_max_length"),
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
        c.jsx(Ae, {
          label: x.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
              label: x.t("json_table_string_regex_group"),
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
            c.jsx(Ae, {
              label: x.t("json_table_string_regex_flags"),
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
        c.jsx(Gi, {}),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(mt, {
              control: c.jsx(kt, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(F, {
                variant: "body2",
                fontWeight: "bold",
                children: x.t("json_table_string_font_weight")
              })
            }),
            c.jsx(mt, {
              control: c.jsx(kt, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(F, {
                variant: "body2",
                fontStyle: "italic",
                children: x.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(De, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(Ae, {
              label: x.t("json_table_string_font_size"),
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
            c.jsx(Mo, {
              label: x.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        c.jsxs(ot, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: x.t("json_table_preview")
            }),
            c.jsx(F, {
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
              children: xi("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function he(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Hc(e, t) {
    if (!Array.isArray(e) || e.length < t) throw {
      type: "Invalid Arguments"
    };
    return e;
  }
  function ht(e, t = 0) {
    if (!e || t === 1 / 0 || typeof e != "object") return e;
    if (Array.isArray(e)) {
      for (let n = 0; n < e.length; n++) if (typeof e[n] == "object" && e[n]) {
        if (t === 0) throw {
          type: "Exceeded Allowed Depth"
        };
        ht(e[n], t - 1);
      }
    } else {
      const n = Object.keys(e);
      for (let o = 0; o < n.length; o++) {
        const r = e[n[o]];
        if (typeof r == "object" && r) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          ht(r, t - 1);
        }
      }
    }
    return e;
  }
  function Bc(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+he(e)) && t !== null) throw NaN;
    if (Number.isNaN(+he(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Wc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) await t(r, o++, e) && n.push(r);
    return n;
  }
  async function Gc(e, t) {
    let n = 0;
    for (const o of e) if (await t(o, n++, e)) return true;
    return false;
  }
  async function Uc(e, t) {
    let n = 0;
    for (const o of e) if (!await t(o, n++, e)) return false;
    return true;
  }
  async function qc(e, t) {
    const n = [];
    let o = 0;
    for (const r of e) n.push(await t(r, o++, e));
    return n;
  }
  async function Yc(e, t, n, o = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const r = typeof n > "u" ? 1 : 0;
    let i = ht(r ? e[0] : n, o);
    for (let s = r; s < e.length; s++) i = ht(await t(i, e[s]), o);
    return i;
  }
  const Xn = {
    filter: Wc,
    some: Gc,
    every: Uc,
    map: qc,
    reduce: Yc
  }, oe = /* @__PURE__ */ Symbol.for("json_logic_sync"), Te = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Je = /* @__PURE__ */ Symbol.for("json_logic_original"), Rr = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Ot(e) {
    return typeof e == "function" ? e[oe] === true : Array.isArray(e) ? e.every(Ot) : !(e && e.asyncMethod && !e.method);
  }
  function wi(e, t = true) {
    return e[oe] = t, e;
  }
  function _n(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const so = /* @__PURE__ */ new WeakMap();
  function Mr(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (so.has(e) || so.set(e, Jc(e)), so.get(e));
  }
  function Jc(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Kc(e, ...t) {
    let n = "";
    const o = this;
    for (let r = 0; r < e.length; r++) n += e[r], r < t.length && (typeof t[r] == "function" ? (this.methods.push(t[r]), Ot(t[r]) || (o.asyncDetected = true), n += (Ot(t[r]) ? "" : " await ") + "methods[" + (o.methods.length - 1) + "]") : t[r] && typeof t[r][Te] < "u" ? n += t[r][Te] : n += me(t[r], o));
    return {
      [Te]: n
    };
  }
  function Xc(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function Qn(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Qn(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Qn(r, t, n);
    }
    return true;
  }
  function $o(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => $o(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const o = n[0], r = e[o];
      return Ot(t.methods[o]) ? t.methods[o].lazy ? !!(typeof t.methods[o][oe] == "function" && t.methods[o][oe](e, {
        engine: t
      })) : $o(r, t) : false;
    }
    return true;
  }
  function me(e, t = {}) {
    const { notTraversed: n = [], async: o, processing: r = [], values: i = [], engine: s } = t;
    function l(u, p = false) {
      return Xc(u, p) ? JSON.stringify(u) : (i.push(u), `values[${i.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let p = 0; p < e.length; p++) p > 0 && (u += ","), u += me(e[p], t);
      return "[" + u + "]";
    }
    let a = false;
    function d(u) {
      return t.asyncDetected = t.asyncDetected || a, o && a ? `await ${u}` : u;
    }
    if (e && typeof e == "object") {
      const u = Object.keys(e), p = u[0];
      if (!p) return l(e);
      if (!s.methods[p] || u.length > 1) {
        if (s.isData(e, p)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: p
        };
      }
      if (!t.engine.disableInline && s.methods[p] && Qn(e, s, t)) return $o(e, s) ? l((s.fallback || s).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(s.run(e))})`) : (r.push(s.run(e).then((m) => l(m))), `__%%%${r.length - 1}%%%__`);
      let g = e[p];
      if ((!g || typeof g != "object") && !s.methods[p].lazy && (g = [
        g
      ]), s.methods[p] && s.methods[p].compile) {
        let m = s.methods[p].compile(g, t);
        if (m[Te] && (m = m[Te]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let f = s.methods[p].optimizeUnary ? "" : "coerceArray";
      !f && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : f && Array.isArray(g) && (f = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof s.methods[p] == "function") {
        a = !Ot(s.methods[p]);
        const m = h[Mr(s.methods[p]) - 1] || h[2];
        return d(`engine.methods["${p}"](${f}(` + me(g, t) + ")" + m + ")");
      } else {
        a = !!(o && s.methods[p] && s.methods[p].asyncMethod);
        const m = Mr(a ? s.methods[p].asyncMethod : s.methods[p].method);
        let v = h[m - 1] || h[2];
        return a && typeof s.methods[p][oe] == "function" && s.methods[p][oe](g, {
          engine: s
        }) && (a = false, v = v.replace("engine", "engine.fallback")), s.methods[p] && !s.methods[p].lazy ? d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(${f}(` + me(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${p}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function Zn(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Kc
    }, t));
    const n = me(e, t);
    return Qc(e, n, t);
  }
  function Qc(e, t, n) {
    const { engine: o, methods: r, notTraversed: i, processing: s = [], values: l } = n, a = [];
    s.forEach((u, p) => {
      t = t.replace(`__%%%${p}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, r, i, Xn, o, a, _n, he, Hc, Bc, ht), {
      [oe]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Zc = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, qt = Zc(), on = /* @__PURE__ */ new Map();
  function Wt(e) {
    if (on.has(e)) return on.get(e);
    on.size > 2048 && on.clear();
    const t = eu(e);
    return on.set(e, t), t;
  }
  function eu(e, t = ".", n = "\\", o = "/") {
    const r = [];
    let i = "";
    for (let s = 0; s < e.length; s++) {
      const l = e[s];
      l === n ? e[s + 1] === t || e[s + 1] === o ? (i += e[s + 1], s++) : e[s + 1] === n ? (i += n, s++) : i += n : l === t ? (r.push(i), i = "") : i += l;
    }
    return r.length !== e.length && r.push(i), r;
  }
  const Ao = {
    get: {
      [oe]: true,
      method: ([e, t, n], o, r, i) => {
        const s = n === void 0 ? null : n, l = Wt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return s;
        return i.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, o = e, r = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (r = e[0], o = e[1], n = typeof e[2] > "u" ? null : e[2], o && typeof o == "object") return false;
          o = o.toString();
          const i = Wt(o);
          return qt ? `((${me(r, t)})${i.map((s) => `?.[${me(s, t)}]`).join("")} ?? ${me(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${i.reduce((s, l) => `(${s}||0)[${JSON.stringify(l)}]`, `(${me(r, t)}||0)`)}, ${me(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Je]: true,
      [oe]: true,
      method: (e, t, n, o) => {
        let r;
        Array.isArray(e) && (r = e[1], e = e[0]);
        let i = 0;
        for (; typeof e == "string" && e.startsWith("../") && i < n.length; ) t = n[i++], e = e.substring(3), i === n.length && Array.isArray(t) && (i = 0, n = t, t = n[i++]);
        const s = r === void 0 ? null : r;
        if (typeof e > "u" || e === "" || e === null) return o.allowFunctions || typeof t != "function" ? t : null;
        const l = Wt(String(e));
        for (let a = 0; a < l.length; a++) if (t == null || (t = t[l[a]], t === void 0)) return s;
        return o.allowFunctions || typeof t != "function" ? t : null;
      },
      deterministic: (e, t) => t.insideIterator && !String(e).includes("../../"),
      optimizeUnary: true,
      compile: (e, t) => {
        let n = e, o = null;
        if (!n || typeof e == "string" || typeof e == "number" || Array.isArray(e) && e.length <= 2) {
          if (Array.isArray(e) && (n = e[0], o = typeof e[1] > "u" ? null : e[1]), n === "../index" && t.iteratorCompile) return "index";
          if (typeof n > "u" || n === null || n === "") return "context";
          if (typeof n != "string" && typeof n != "number" || (n = n.toString(), n.includes("../"))) return false;
          const r = Wt(n);
          if (!qt) {
            const s = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${r.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${me(o, t)})))`;
            return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
          }
          const i = `(context${r.map((s) => `?.[${JSON.stringify(s)}]`).join("")} ?? ${me(o, t)})`;
          return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
        }
        return false;
      }
    },
    missing: {
      [oe]: true,
      optimizeUnary: false,
      method: (e, t) => {
        if (!e.length) return [];
        const n = [];
        for (let o = 0; o < e.length; o++) {
          const r = Wt(String(e[o]));
          let i = t, s = true;
          for (let l = 0; l < r.length; l++) {
            if (!i) {
              s = false;
              break;
            }
            if (i = i[r[l]], i === void 0) {
              s = false;
              break;
            }
          }
          s || n.push(e[o]);
        }
        return n;
      },
      compile: (e, t) => Array.isArray(e) ? e.length === 0 ? t.compile`[]` : e.length === 1 && typeof e[0] == "string" && !e[0].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? [${e[0]}] : []` : e.length === 2 && typeof e[0] == "string" && typeof e[1] == "string" && !e[0].includes(".") && !e[1].includes(".") ? t.compile`(context || 0)[${e[0]}] === undefined ? (context || 0)[${e[1]}] === undefined ? [${e[0]}, ${e[1]}] : [${e[0]}] : (context || 0)[${e[1]}] === undefined ? [${e[1]}] : []` : false : false,
      deterministic: (e, t) => !!(Array.isArray(e) && e.length === 0)
    },
    missing_some: {
      [oe]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const o = Ao.missing.method(t, n);
        return t.length - o.length >= e ? [] : o;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let o = Ao.missing.compile(t, n);
        return o || (o = n.compile`engine.methods.missing.method(${{
          [Te]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${o}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, tu = {
    ...Ao
  }, ne = {
    type: "Invalid Arguments"
  };
  function Me(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Me(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic : typeof t.methods[o].deterministic == "function" ? t.methods[o].deterministic(r, n) : t.methods[o].deterministic && Me(r, t, n);
    }
    return true;
  }
  function Oe(e, t, n) {
    if (Array.isArray(e)) return e.every((o) => Oe(o, t, n));
    if (e && typeof e == "object") {
      const o = Object.keys(e)[0], r = e[o];
      if (t.isData(e, o) || o === void 0) return true;
      if (!t.methods[o]) throw {
        type: "Unknown Operator",
        key: o
      };
      return t.methods[o].lazy ? typeof t.methods[o][oe] == "function" ? t.methods[o][oe](r, n) : t.methods[o][oe] : typeof t.methods[o][oe] == "function" ? t.methods[o][oe](r, n) : t.methods[o][oe] && Oe(r, t, n);
    }
    return true;
  }
  function ce(e, t, n, o) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const r = t.optimizedMap.get(e);
      return typeof r == "function" ? r(n, o) : r;
    }
    return t.run(e, n, {
      above: o
    });
  }
  const rn = qn("every", true), te = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return he(+e);
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
      if (e.length === 0) throw ne;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return he(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw ne;
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
      if (e.length < 2) throw ne;
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
      if (!e.length || typeof e[0] != "number") throw ne;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ne;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw ne;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw ne;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: wi((e) => e, true),
      [oe]: () => true
    },
    if: {
      [Je]: true,
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (e.length === 1) return ce(e[0], o, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const i = e.shift(), s = e.shift(), l = ce(i, o, t, n);
          if (o.truthy(l)) return ce(s, o, t, n);
        }
        return ce(r, o, t, n);
      },
      [oe]: (e, t) => Oe(e, t.engine, t),
      deterministic: (e, t) => Me(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (e.length === 1) return o.run(e[0], t, {
          above: n
        });
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const r = e.pop();
        for (; e.length; ) {
          const i = e.shift(), s = e.shift(), l = await o.run(i, t, {
            above: n
          });
          if (o.truthy(l)) return o.run(s, t, {
            above: n
          });
        }
        return o.run(r, t, {
          above: n
        });
      },
      lazy: true
    },
    "<": _t("<", (e, t) => e < t),
    "<=": _t("<=", (e, t) => e <= t),
    ">": _t(">", (e, t) => e > t),
    ">=": _t(">=", (e, t) => e >= t),
    "==": _t("==", (e, t) => e == t),
    "===": _t("===", (e, t) => e === t),
    "!=": _t("!=", (e, t) => e != t),
    "!==": _t("!==", (e, t) => e !== t),
    or: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), o.truthy(r)) return r;
        return r;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let o = 0; o < e.length; o++) n = t.compile`${n} engine.truthy(prev = ${e[o]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      },
      lazy: true
    },
    "??": {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), r != null) return r;
        return r === void 0 ? null : r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), r != null) return r;
        return r === void 0 ? null : r;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      compile: (e, t) => qt ? Array.isArray(e) && e.length ? `(${e.map((n, o) => {
        const r = me(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || o === e.length - 1 ? r : "(" + r + ")";
      }).join(" ?? ")})` : `(${me(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, i;
        for (let s = 0; s < e.length; s++) try {
          return i ? r = ce(e[s], o, {
            type: i.type || i.error || i.message || i.constructor.name
          }, [
            null,
            t,
            n
          ]) : r = ce(e[s], o, t, n), r;
        } catch (l) {
          Number.isNaN(l) ? i = {
            message: "NaN"
          } : i = l;
        }
        throw i;
      },
      asyncMethod: async (e, t, n, o) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let r, i;
        for (let s = 0; s < e.length; s++) try {
          return i ? r = await o.run(e[s], {
            type: i.type || i.error || i.message || i.constructor.name
          }, {
            above: [
              null,
              t,
              n
            ]
          }) : r = await o.run(e[s], t, {
            above: n
          }), r;
        } catch (l) {
          Number.isNaN(l) ? i = {
            message: "NaN"
          } : i = l;
        }
        throw i;
      },
      deterministic: (e, t) => Me(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && Me(e, t.engine, {
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
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), n = {
            [Te]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(o)}; `
          };
        }
        if (e.length > 1) for (let o = 1; o < e.length; o++) try {
          o === e.length - 1 ? n = t.compile`${n} try { return ${e[o]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[o]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (r) {
          Number.isNaN(r) && (r = {
            type: "NaN"
          }), o === e.length - 1 ? n = t.compile`${n} throw ${{
            [Te]: JSON.stringify(r)
          }} ` : n = t.compile`${n} ${{
            [Te]: `context = ${JSON.stringify(r)};`
          }}`;
        }
        else n[Te].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[Te].includes("await") && (n[Te] = n[Te].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = ce(e[i], o, t, n), !o.truthy(r)) return r;
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        if (!e.length) return null;
        let r;
        for (let i = 0; i < e.length; i++) if (r = await o.run(e[i], t, {
          above: n
        }), !o.truthy(r)) return r;
        return r;
      },
      lazy: true,
      deterministic: (e, t) => Me(e, t.engine, t),
      compile: (e, t) => {
        let n = t.compile``;
        if (Array.isArray(e)) {
          if (!e.length) return t.compile`null`;
          for (let o = 0; o < e.length; o++) n = t.compile`${n} !engine.truthy(prev = ${e[o]}) ? prev : `;
          return n = t.compile`${n} prev`, n;
        }
        return false;
      }
    },
    substr: ([e, t, n]) => {
      if (n < 0) {
        const o = e.substr(t);
        return o.substr(0, o.length + n);
      }
      return e.substr(t, n);
    },
    length: {
      method: (e, t, n, o) => {
        if (!e) throw ne;
        const r = ce(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw ne;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!e) throw ne;
        const r = await ce(e, o, t, n), i = Array.isArray(e) ? r[0] : r;
        if (typeof i == "string" || Array.isArray(i)) return i.length;
        if (i && typeof i == "object") return Object.keys(i).length;
        throw ne;
      },
      deterministic: (e, t) => Me(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, o) => te.val.method(e, t, n, o, Rr) !== Rr,
      deterministic: false
    },
    val: {
      [Je]: true,
      [oe]: true,
      method: (e, t, n, o, r = null) => {
        if (Array.isArray(e) && e.length === 1 && !Array.isArray(e[0]) && (e = e[0]), !Array.isArray(e)) {
          if (r && !(t && e in t)) return r;
          if (t == null) return null;
          const l = t[e];
          return typeof l > "u" ? null : l;
        }
        let i = t, s = 0;
        if (Array.isArray(e[0]) && e[0].length === 1) {
          s++;
          const l = +Math.abs(e[0][0]);
          let a = 0;
          for (let d = 0; d < l; d++) i = n[a++], d === n.length - 1 && Array.isArray(i) && (n = i, i = i[0], a = 1);
        }
        for (let l = s; l < e.length; l++) {
          if (r && !(i && e[l] in i)) return r;
          if (i == null) return null;
          i = i[e[l]];
        }
        return typeof i > "u" || typeof i == "function" && !o.allowFunctions ? r : i;
      },
      optimizeUnary: true,
      deterministic: (e, t) => t.insideIterator ? !(Array.isArray(e) && Array.isArray(e[0]) && Math.abs(e[0][0]) >= 2) : false,
      compile: (e, t) => {
        function n(o) {
          let r;
          return qt ? r = t.compile`(${o} ?? null)` : r = t.compile`(((a) => a === null || a === undefined ? null : a)(${o}))`, t.engine.allowFunctions || (r = t.compile`(typeof (prev = ${r}) === 'function' ? null : prev)`), r;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Oe(e, t.engine, t) && Me(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(qt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let o = t.compile`context`;
          for (let r = 0; r < e.length; r++) e[r] !== null && (qt ? o = t.compile`${o}?.[${e[r]}]` : o = t.compile`(${o}|| 0)[${e[r]}]`);
          return n(t.compile`(${o})`);
        }
        return false;
      }
    },
    map: qn("map"),
    some: {
      ...qn("some", true),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, i] = e;
        r = ce(r, o, t, n) || [];
        for (let s = 0; s < r.length; s++) if (o.truthy(ce(i, o, r[s], [
          r,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [oe]: rn[oe],
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        const r = ce(e[0], o, t, n) || [];
        if (Array.isArray(r) && r.length === 0) return false;
        const i = e[1];
        for (let s = 0; s < r.length; s++) if (!o.truthy(ce(i, o, r[s], [
          r,
          t,
          n
        ]))) return false;
        return true;
      },
      asyncMethod: async (e, t, n, o) => {
        if (Array.isArray(e)) {
          const r = await o.run(e[0], t, n);
          if (Array.isArray(r) && r.length === 0) return false;
        }
        return rn.asyncMethod(e, t, n, o);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${rn.compile([
        {
          [Te]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: rn.deterministic,
      lazy: rn.lazy
    },
    none: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      lazy: true,
      method: (e, t, n, o) => !te.some.method(e, t, n, o),
      asyncMethod: async (e, t, n, o) => !await te.some.asyncMethod(e, t, n, o),
      compile: (e, t) => {
        const n = te.some.compile(e, t);
        return n ? t.compile`!(${n})` : false;
      }
    },
    merge: (e) => {
      if (!Array.isArray(e)) return [
        e
      ];
      const t = [];
      for (let n = 0; n < e.length; n++) if (Array.isArray(e[n])) for (let o = 0; o < e[n].length; o++) t.push(e[n][o]);
      else t.push(e[n]);
      return t;
    },
    filter: qn("filter", true),
    reduce: {
      deterministic: (e, t) => Me(e[0], t.engine, t) && Me(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw ne;
        const { async: n } = t;
        let [o, r, i] = e;
        o = me(o, t), typeof i < "u" && (i = me(i, t));
        const s = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        r = Zn(r, s);
        const l = r.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(r), n && (!Ot(r) || o.includes("await")) ? (t.asyncDetected = true, typeof i < "u" ? `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${i}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${o} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof i < "u" ? `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${i}))` : `(${o} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, i, s] = e;
        s = ht(ce(s, o, t, n), o.options.maxDepth), r = ce(r, o, t, n) || [];
        let l = (a, d) => ht(o.run(i, {
          accumulator: a,
          current: d
        }, {
          above: [
            r,
            t,
            n
          ]
        }), o.options.maxDepth);
        if (o.optimizedMap.has(i) && typeof o.optimizedMap.get(i) == "function") {
          const a = o.optimizedMap.get(i);
          l = (d, u) => ht(a({
            accumulator: d,
            current: u
          }, [
            r,
            t,
            n
          ]), o.options.maxDepth);
        }
        return typeof s > "u" ? r.reduce(l) : r.reduce(l, s);
      },
      [oe]: (e, t) => Oe(e, t.engine, t),
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw ne;
        let [r, i, s] = e;
        return s = ht(await o.run(s, t, {
          above: n
        }), o.options.maxDepth), r = await o.run(r, t, {
          above: n
        }) || [], Xn.reduce(r, (l, a) => o.run(i, {
          accumulator: l,
          current: a
        }, {
          above: [
            r,
            t,
            n
          ]
        }), s, o.options.maxDepth);
      },
      lazy: true
    },
    "!": (e, t, n, o) => Array.isArray(e) ? !o.truthy(e[0]) : !o.truthy(e),
    "!!": (e, t, n, o) => !!(Array.isArray(e) ? o.truthy(e[0]) : o.truthy(e)),
    cat: {
      [Je]: true,
      [oe]: true,
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
        for (let o = 0; o < e.length; o++) n = t.compile`${n} + ${e[o]}`;
        return t.compile`(${n})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, o) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let r = o.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let i = 1; i < e.length; i++) r = o.run(e[i], r, {
          above: [
            e,
            t,
            n
          ]
        });
        return r;
      },
      asyncMethod: async (e, t, n, o) => {
        if (!Array.isArray(e)) throw new Error("Data for pipe must be an array");
        let r = await o.run(e[0], t, {
          above: [
            e,
            t,
            n
          ]
        });
        for (let i = 1; i < e.length; i++) r = await o.run(e[i], r, {
          above: [
            e,
            t,
            n
          ]
        });
        return r;
      },
      compile: (e, t) => {
        let n = t.compile`${e[0]}`;
        for (let o = 1; o < e.length; o++) n = t.compile`${Zn(e[o], {
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
        return Me(n, t.engine, t) && Me(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [oe]: (e, t) => Oe(Object.values(e[Object.keys(e)[0]]), t.engine, t),
      method: (e, t, n, o) => Object.keys(e).reduce((i, s) => {
        const l = e[s];
        return Object.defineProperty(i, s, {
          enumerable: true,
          value: o.run(l, t, {
            above: n
          })
        }), i;
      }, {}),
      deterministic: (e, t) => {
        if (e && typeof e == "object") return Object.values(e).every((n) => Me(n, t.engine, t));
        throw ne;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((o, r) => (o.push(`${JSON.stringify(r)}: ${me(e[r], t)}`), o), []).join(",")} })`;
        throw ne;
      },
      asyncMethod: async (e, t, n, o) => await Xn.reduce(Object.keys(e), async (i, s) => {
        const l = e[s];
        return Object.defineProperty(i, s, {
          enumerable: true,
          value: await o.run(l, t, {
            above: n
          })
        }), i;
      }, {}, 1 / 0)
    }
  };
  function _t(e, t) {
    const n = {
      [Te]: e
    }, o = e.length === 3;
    return {
      method: (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ne;
        if (r.length === 2) {
          const d = ce(r[0], l, i, s), u = ce(r[1], l, i, s);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+he(d))) throw NaN;
          if (Number.isNaN(+he(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = ce(r[0], l, i, s);
        for (let d = 1; d < r.length; d++) {
          const u = ce(r[d], l, i, s);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+he(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (r, i, s, l) => {
        if (!Array.isArray(r) || r.length <= 1) throw ne;
        if (r.length === 2) {
          const d = await ce(r[0], l, i, s), u = await ce(r[1], l, i, s);
          if (o || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+he(d))) throw NaN;
          if (Number.isNaN(+he(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await ce(r[0], l, i, s);
        for (let d = 1; d < r.length; d++) {
          const u = await ce(r[d], l, i, s);
          if ((o || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+he(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+he(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      compile: (r, i) => {
        if (!Array.isArray(r) || r.length < 2) return false;
        if (r.length === 2) return i.compile`((prev = ${r[0]}) ${n} compareCheck(${r[1]}, prev, ${o}))`;
        let s = i.compile`((prev = ${r[0]}) ${n} (prev = compareCheck(${r[1]}, prev, ${o})))`;
        for (let l = 2; l < r.length; l++) s = i.compile`(${s} && prev ${n} (prev = compareCheck(${r[l]}, prev, ${o})))`;
        return s;
      },
      [Je]: true,
      [oe]: (r, i) => Oe(r, i.engine, i),
      deterministic: (r, i) => Me(r, i.engine, i),
      lazy: true
    };
  }
  function qn(e, t = false) {
    return {
      deterministic: (n, o) => Me(n[0], o.engine, o) && Me(n[1], o.engine, {
        ...o,
        insideIterator: true
      }),
      [Je]: true,
      [oe]: (n, o) => Oe(n, o.engine, o),
      method: (n, o, r, i) => {
        if (!Array.isArray(n)) throw ne;
        let [s, l] = n;
        return s = ce(s, i, o, r) || [], s[e]((a, d) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const u = ce(l, i, a, [
            {
              iterator: s,
              index: d
            },
            o,
            r
          ]);
          return t ? i.truthy(u) : u;
        });
      },
      asyncMethod: async (n, o, r, i) => {
        if (!Array.isArray(n)) throw ne;
        let [s, l] = n;
        return s = await i.run(s, o, {
          above: r
        }) || [], Xn[e](s, async (a, d) => {
          if (!l || typeof l != "object") return t ? i.truthy(l) : l;
          const u = await i.run(l, a, {
            above: [
              {
                iterator: s,
                index: d
              },
              o,
              r
            ]
          });
          return t ? i.truthy(u) : u;
        });
      },
      compile: (n, o) => {
        if (!Array.isArray(n)) throw ne;
        const { async: r } = o, [i, s] = n, l = {
          ...o,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = Zn(s, l), d = a.aboveDetected ? o.compile`[{ iterator: z, index: x }, context, above]` : o.compile`null`, u = t ? o.compile`engine.truthy` : o.compile``;
        return r && !Ot(a) ? (o.asyncDetected = true, o.compile`await asyncIterators[${e}](${i} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : o.compile`(${i} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  te.every = te.all;
  te["?:"] = te.if;
  Object.keys(te).forEach((e) => {
    typeof te[e] == "function" && (te[e][oe] = true), te[e].deterministic = typeof te[e].deterministic > "u" ? true : te[e].deterministic;
  });
  te.if.compile = function(e, t) {
    if (!Array.isArray(e) || e.length < 3) return false;
    e = [
      ...e
    ], e.length % 2 !== 1 && e.push(null);
    const n = e.pop();
    let o = t.compile``;
    for (; e.length; ) {
      const r = e.shift(), i = e.shift();
      o = t.compile`${o} engine.truthy(${r}) ? ${i} : `;
    }
    return t.compile`(${o} ${n})`;
  };
  function Mn(e, t) {
    if (Array.isArray(e)) return he(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + me(e, t);
    if (typeof e == "string") return "+" + he(+e);
    const n = me(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + he(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? he(NaN) : `(+precoerceNumber(${n}))`;
  }
  te["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Mn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  te["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw ne;
      return `precoerceNumber(${e.map((n) => Mn(n, t)).join(" % ")})`;
    }
    return `assertSize(${me(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  te.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  te["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ne;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Mn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${me(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  te["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw ne;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, o) => {
        let r = Mn(n, t);
        return o && r === "+0" && he(NaN), o && (r = `precoerceNumber(${r} || NaN)`), r;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${me(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  te["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Mn(n, t)).join(" * ")})` : `(${me(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  te["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  te.not = te["!"];
  te["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  te.none.deterministic = te.some.deterministic;
  te.throw.deterministic = (e, t) => t.insideTry && Me(e, t.engine, t);
  te["+"].optimizeUnary = te["-"].optimizeUnary = te["!"].optimizeUnary = te["!!"].optimizeUnary = te.cat.optimizeUnary = te.throw.optimizeUnary = true;
  const nu = {
    ...te,
    ...tu
  }, ou = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function ru(e, t, n, o) {
    const r = t.methods[n], i = r.method ? r.method : r;
    if (r.lazy) {
      const l = e[n];
      return (a, d) => i(l, a, d || o, t);
    }
    let s = e[n];
    if ((!s || typeof s != "object") && !r.optimizeUnary && (s = [
      s
    ]), Array.isArray(s) && s.length === 1 && r.optimizeUnary && !Array.isArray(s[0]) && (s = s[0]), Array.isArray(s)) {
      const l = s.map((a) => ze(a, t, o));
      if (l.every((a) => typeof a != "function")) return (a, d) => i(l, a, d || o, t);
      if (l.length === 1) {
        const a = l[0];
        return (d, u) => i([
          a(d, u)
        ], d, u || o, t);
      }
      if (l.length === 2) {
        const [a, d] = l;
        return typeof a == "function" && typeof d == "function" ? (u, p) => i([
          a(u, p),
          d(u, p)
        ], u, p || o, t) : typeof a == "function" ? (u, p) => i([
          a(u, p),
          d
        ], u, p || o, t) : (u, p) => i([
          a,
          d(u, p)
        ], u, p || o, t);
      }
      return (a, d) => {
        const u = l.map((p) => typeof p == "function" ? p(a, d) : p);
        return i(u, a, d || o, t);
      };
    } else {
      const l = ze(s, t, o);
      if (r.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => i(l(d, u), d, u || o, t);
        if ((n === "var" || n === "val") && t.methods[n][Je]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Wt(String(l));
            let u;
            if (d.length === 2) {
              const [p, g] = d;
              return (f) => (typeof (u = f && f[p] && f[p][g]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
            if (d.length === 3) {
              const [p, g, f] = d;
              return (h) => (typeof (u = h && h[p] && h[p][g] && h[p][g][f]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
          }
        }
        return (d, u) => i(l, d, u || o, t);
      }
      return typeof l == "function" ? (a, d) => i(_n(l(a, d)), a, d || o, t) : (a, d) => i(_n(l), a, d || o, t);
    }
  }
  const $r = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function iu(e, t, n) {
    if (e.val && t.methods.val[Je] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((o) => typeof o != "object")) {
      let o;
      if (e.val.length === 1) {
        const r = e.val[0];
        return (i) => (typeof (o = i && i[r]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 2) {
        const [r, i] = e.val;
        return (s) => (typeof (o = s && s[r] && s[r][i]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
      if (e.val.length === 3) {
        const [r, i, s] = e.val;
        return (l) => (typeof (o = l && l[r] && l[r][i] && l[r][i][s]) != "function" || t.allowFunctions) && typeof o < "u" ? o : null;
      }
    }
    if ((e.if || e["?:"]) && t.methods.if[Je] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [o, r, i] = e.if || e["?:"], s = ze(o, t, n), l = ze(r, t, n), a = ze(i, t, n);
      return typeof s == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a(d, u) : typeof s == "function" && typeof l == "function" ? (d, u) => t.truthy(s(d, u)) ? l(d, u) : a : typeof s == "function" && typeof a == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a(d, u) : typeof s == "function" ? (d, u) => t.truthy(s(d, u)) ? l : a : t.truthy(s) ? l : a;
    }
    if (e.filter && t.methods.filter[Je] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [o, r] = e.filter, i = ze(r, t, n);
      if (typeof i != "function") return t.truthy(i) ? ze(o, t, n) : [];
    }
    for (const o in $r) if (e[o] && Array.isArray(e[o]) && t.methods[o][Je]) {
      const r = $r[o], i = o.length === 3 ? r : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return r(l, a);
        if (Number.isNaN(+he(l))) throw NaN;
        if (Number.isNaN(+he(a)) && l !== null) throw NaN;
        return r(+l, +a);
      };
      if (e[o].length === 2) {
        const [s, l] = e[o], a = ze(s, t, n), d = ze(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, p) => i(a(u, p), d(u, p)) : typeof a == "function" ? (u, p) => i(a(u, p), d) : typeof d == "function" ? (u, p) => i(a, d(u, p)) : i(a, d);
      }
      if (e[o].length === 3) {
        const [s, l, a] = e[o], d = ze(s, t, n), u = ze(l, t, n), p = ze(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof p == "function" ? (f, h) => i(d(f, h), g = u(f, h)) && i(g, p(f, h)) : typeof d == "function" && typeof u == "function" ? (f, h) => i(d(f, h), g = u(f, h)) && i(g, p) : typeof d == "function" && typeof p == "function" ? (f, h) => i(d(f, h), u) && i(u, p(f, h)) : typeof u == "function" && typeof p == "function" ? (f, h) => i(d, g = u(f, h)) && i(g, p(f, h)) : typeof d == "function" ? (f, h) => i(d(f, h), u) && i(u, p) : typeof u == "function" ? (f, h) => i(d, g = u(f, h)) && i(g, p) : typeof p == "function" ? (f, h) => i(d, u) && i(u, p(f, h)) : i(d, u) && i(u, p);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [o, r, i] = e.reduce;
      if (r["+"] && r["+"].length === 2 && (r["+"][0] || 0).var && (r["+"][1] || 0).var) {
        const s = r["+"][0].var === "accumulator" || r["+"][1].var === "accumulator", l = r["+"][0].var === "current" || r["+"][1].var === "current";
        if (i = i || 0, s && l) return ze({
          "+": [
            {
              "+": o
            },
            i
          ]
        }, t, n);
      }
      if (r["*"] && r["*"].length === 2 && (r["*"][0] || 0).var && (r["*"][1] || 0).var) {
        const s = r["*"][0].var === "accumulator" || r["*"][1].var === "accumulator", l = r["*"][0].var === "current" || r["*"][1].var === "current";
        if (i = typeof i > "u" ? 1 : i, s && l) return ze({
          "*": [
            {
              "*": o
            },
            i
          ]
        }, t, n);
      }
    }
  }
  function ze(e, t, n = []) {
    if (Array.isArray(e)) {
      const o = e.map((r) => ze(r, t, n));
      return o.every((r) => typeof r != "function") ? o : (r, i) => o.map((s) => typeof s == "function" ? s(r, i) : s);
    }
    if (e && typeof e == "object") {
      const o = iu(e, t, n);
      if (typeof o < "u") return o;
      const r = Object.keys(e), i = r[0];
      if (r.length === 0) return e;
      if (t.isData(e, i)) return () => e;
      if (r.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && Qn(e, t, {
        engine: t
      });
      if (i in t.methods) {
        const a = ru(e, t, i, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: i
      };
    }
    return e;
  }
  class su {
    constructor(t = nu, n = {
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
      }, this.isData || (n.permissive ? this.isData = (o, r) => !(r in this.methods) : this.isData = () => false);
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
    _parse(t, n, o, r, i) {
      const s = t[r];
      if (this.isData(t, r)) return t;
      if (!this.methods[r] || i > 1) throw {
        type: "Unknown Operator",
        key: r
      };
      if ((r === "var" || r === "val") && this.methods[r][Je]) {
        const l = !s || typeof s != "object" ? s : this.run(s, n, {
          above: o
        });
        return this.methods[r].method(l, n, o, this, null);
      }
      if (typeof this.methods[r] == "function") {
        const l = !s || typeof s != "object" ? [
          s
        ] : _n(this.run(s, n, {
          above: o
        }));
        return this.methods[r](l, n, o, this);
      }
      if (typeof this.methods[r] == "object") {
        const { method: l, lazy: a } = this.methods[r], d = a ? s : !s || typeof s != "object" ? [
          s
        ] : _n(this.run(s, n, {
          above: o
        }));
        return l(d, n, o, this);
      }
      throw new Error(`Method '${r}' is not set up properly.`);
    }
    addMethod(t, n, { deterministic: o, optimizeUnary: r } = {}) {
      typeof n == "function" ? n = {
        method: n,
        lazy: false
      } : n = {
        ...n,
        lazy: typeof n.traverse < "u" ? !n.traverse : n.lazy
      }, Object.assign(n, ou({
        deterministic: o,
        optimizeUnary: r
      })), this.methods[t] = wi(n);
    }
    addModule(t, n, o) {
      Object.getOwnPropertyNames(n).forEach((r) => {
        (typeof n[r] == "function" || typeof n[r] == "object") && this.addMethod(`${t}${t ? "." : ""}${r}`, n[r], o);
      });
    }
    run(t, n = {}, o = {}) {
      const { above: r = [] } = o;
      if (!this.disableInterpretedOptimization && typeof t == "object" && t) if (this.missesSinceSeen > 500 && (this.disableInterpretedOptimization = true, this.missesSinceSeen = 0), this.optimizedMap.has(t)) {
        this.missesSinceSeen = 0;
        const i = this.optimizedMap.get(t);
        return typeof i == "function" ? i(n, r) : i;
      } else {
        this.optimizedMap.set(t, ze(t, this, r)), this.missesSinceSeen++;
        const i = this.optimizedMap.get(t);
        return typeof i == "function" ? i(n, r) : i;
      }
      if (Array.isArray(t)) {
        const i = new Array(t.length);
        for (let s = 0; s < t.length; s++) i[s] = this.run(t[s], n, {
          above: r
        });
        return i;
      }
      if (t && typeof t == "object") {
        const i = Object.keys(t);
        if (i.length > 0) {
          const s = i[0];
          return this._parse(t, n, r, s, i.length);
        }
      }
      return t;
    }
    build(t, n = {}) {
      const { above: o = [], top: r = true } = n, i = Zn(t, {
        engine: this,
        above: o
      });
      return r === false && i.deterministic ? i() : i;
    }
  }
  function We(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const oo = new su();
  oo.addMethod("contains", ([e, t]) => We(e).includes(We(t)), {
    deterministic: true
  });
  oo.addMethod("startsWith", ([e, t]) => We(e).startsWith(We(t)), {
    deterministic: true
  });
  oo.addMethod("endsWith", ([e, t]) => We(e).endsWith(We(t)), {
    deterministic: true
  });
  function sn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Po = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), lu = {
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
  }, au = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], cu = {
    var: "value"
  };
  function uu(e, t, n = "string") {
    const o = Number(t), r = n === "number", i = n === "date", s = cu;
    switch (e) {
      case "eq":
        return {
          "==": [
            s,
            r ? o : t
          ]
        };
      case "neq":
        return {
          "!=": [
            s,
            r ? o : t
          ]
        };
      case "gt":
        return {
          ">": [
            s,
            i ? t : o
          ]
        };
      case "gte":
        return {
          ">=": [
            s,
            i ? t : o
          ]
        };
      case "lt":
        return {
          "<": [
            s,
            i ? t : o
          ]
        };
      case "lte":
        return {
          "<=": [
            s,
            i ? t : o
          ]
        };
      case "contains":
        return {
          contains: [
            s,
            t
          ]
        };
      case "not_contains":
        return {
          "!": [
            {
              contains: [
                s,
                t
              ]
            }
          ]
        };
      case "starts_with":
        return {
          startsWith: [
            s,
            t
          ]
        };
      case "ends_with":
        return {
          endsWith: [
            s,
            t
          ]
        };
      case "empty":
        return {
          "!": [
            {
              "!!": [
                s
              ]
            }
          ]
        };
      case "not_empty":
        return {
          "!!": [
            s
          ]
        };
      case "is_true":
        return {
          "==": [
            s,
            true
          ]
        };
      case "is_false":
        return {
          "==": [
            s,
            false
          ]
        };
    }
  }
  const du = /* @__PURE__ */ new Set([
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function pu(e, t = "string") {
    const n = e.conditions.filter((r) => Po.has(r.operator) ? true : !(r.operand.trim() === "" || t === "number" && du.has(r.operator) && isNaN(Number(r.operand))));
    if (n.length === 0) return;
    const o = n.map((r) => uu(r.operator, r.operand, t));
    return o.length === 1 ? o[0] : {
      [e.mode]: o
    };
  }
  function ft(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function lo(e) {
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
      const o = e[t];
      if (Array.isArray(o) && o.length === 2 && ft(o[0])) return {
        operator: n,
        operand: We(o[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return t[1] === true ? {
        operator: "is_true",
        operand: ""
      } : t[1] === false ? {
        operator: "is_false",
        operand: ""
      } : {
        operator: "eq",
        operand: We(t[1])
      };
    }
    if ("!=" in e) {
      const t = e["!="];
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "neq",
        operand: We(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "contains",
        operand: We(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "starts_with",
        operand: We(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && ft(t[0])) return {
        operator: "ends_with",
        operand: We(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const o = n["!!"];
          if (Array.isArray(o) && ft(o[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const o = n.contains;
          if (Array.isArray(o) && o.length === 2 && ft(o[0])) return {
            operator: "not_contains",
            operand: We(o[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && ft(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Ar(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: sn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const o = n.map((r) => lo(r)).filter((r) => r !== null).map((r) => ({
          id: sn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "and",
          conditions: o
        };
      }
    }
    if ("or" in e) {
      const n = e.or;
      if (Array.isArray(n)) {
        const o = n.map((r) => lo(r)).filter((r) => r !== null).map((r) => ({
          id: sn(),
          ...r
        }));
        if (o.length > 0) return {
          mode: "or",
          conditions: o
        };
      }
    }
    const t = lo(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: sn(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: sn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const fu = 200, ln = /* @__PURE__ */ new Map();
  function gu(e, t) {
    try {
      const n = JSON.stringify(e);
      let o = ln.get(n);
      return o || (o = oo.build(e), ln.size >= fu && ln.delete(ln.keys().next().value), ln.set(n, o)), !!o({
        value: t
      });
    } catch {
      return false;
    }
  }
  const hu = {
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
  function mu({ logic: e, columnType: t, onChange: n }) {
    const [o, r] = y.useState(() => Ar(e));
    y.useEffect(() => {
      r(Ar(e));
    }, [
      e
    ]);
    const i = lu[t] ?? au, s = y.useCallback((g) => {
      r(g), n(pu(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, f) => {
      const h = o.conditions.map((m, v) => v === g ? {
        ...m,
        ...f
      } : m);
      s({
        ...o,
        conditions: h
      });
    }, [
      o,
      s
    ]), a = y.useCallback((g) => {
      const f = o.conditions.filter((h, m) => m !== g);
      s({
        ...o,
        conditions: f
      });
    }, [
      o,
      s
    ]), d = y.useCallback(() => {
      const g = i[0] ?? "eq";
      s({
        ...o,
        conditions: [
          ...o.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: g,
            operand: ""
          }
        ]
      });
    }, [
      o,
      s,
      i
    ]), u = y.useCallback((g, f) => {
      f !== null && s({
        ...o,
        mode: f
      });
    }, [
      o,
      s
    ]), p = o.conditions.length > 1;
    return c.jsxs(De, {
      spacing: 1,
      children: [
        p && c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Kr, {
              value: o.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": x.t("json_table_condition_mode_label"),
              children: [
                c.jsx(Jn, {
                  value: "and",
                  "aria-label": x.t("json_table_condition_mode_all"),
                  children: x.t("json_table_condition_mode_all")
                }),
                c.jsx(Jn, {
                  value: "or",
                  "aria-label": x.t("json_table_condition_mode_any"),
                  children: x.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: o.mode === "and" ? x.t("json_table_condition_mode_hint_and") : x.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        o.conditions.map((g, f) => {
          const h = !Po.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(U, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(vn, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(bn, {
                    children: x.t("json_table_condition_operator")
                  }),
                  c.jsx(Jt, {
                    label: x.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const b = v.target.value, C = Po.has(b) ? "" : g.operand;
                      l(f, {
                        operator: b,
                        operand: C
                      });
                    },
                    children: i.map((v) => c.jsx(je, {
                      value: v,
                      children: x.t(hu[v])
                    }, v))
                  })
                ]
              }),
              h && c.jsx(Ae, {
                label: x.t("json_table_condition_value"),
                value: g.operand,
                onChange: (v) => l(f, {
                  operand: v.target.value
                }),
                size: "small",
                type: m,
                sx: {
                  flex: 1
                },
                slotProps: m === "number" ? {
                  htmlInput: {
                    step: "any"
                  }
                } : void 0
              }),
              p && c.jsx(Ne, {
                title: x.t("json_table_condition_remove"),
                children: c.jsx(Se, {
                  size: "small",
                  onClick: () => a(f),
                  "aria-label": x.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(Xr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? f);
        }),
        c.jsx(Dt, {
          startIcon: c.jsx(pi, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": x.t("json_table_condition_add"),
          children: p ? x.t("json_table_condition_add") : x.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function yu({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: o, onModeChange: r }) {
    const i = y.useCallback((u, p) => {
      const g = [
        ...e || []
      ];
      g[u] = {
        ...g[u],
        ...p
      }, o(g);
    }, [
      e,
      o
    ]), s = y.useCallback((u) => {
      const p = [
        ...e || []
      ];
      p.splice(u, 1), o(p);
    }, [
      e,
      o
    ]), l = y.useCallback(() => {
      const u = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      o([
        ...e || [],
        u
      ]);
    }, [
      e,
      o
    ]), a = y.useCallback((u) => {
      if (u === 0) return;
      const p = [
        ...e || []
      ];
      [p[u - 1], p[u]] = [
        p[u],
        p[u - 1]
      ], o(p);
    }, [
      e,
      o
    ]), d = y.useCallback((u) => {
      const p = e || [];
      if (u >= p.length - 1) return;
      const g = [
        ...p
      ];
      [g[u], g[u + 1]] = [
        g[u + 1],
        g[u]
      ], o(g);
    }, [
      e,
      o
    ]);
    return c.jsxs(De, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(Kr, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, p) => {
                p && r(p);
              },
              "aria-label": x.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(Jn, {
                  value: "first-match",
                  "aria-label": x.t("json_table_cell_style_mode_first"),
                  children: x.t("json_table_cell_style_mode_first")
                }),
                c.jsx(Jn, {
                  value: "all-match",
                  "aria-label": x.t("json_table_cell_style_mode_all"),
                  children: x.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(F, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? x.t("json_table_cell_style_mode_hint_first") : x.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(U, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            c.jsx(F, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: x.t("json_table_no_style_rules")
            }),
            c.jsx(F, {
              variant: "caption",
              children: x.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, p) => {
          const g = (e || []).length, f = u.backgroundColor ? zt(u.backgroundColor) : void 0, h = u.textColor ? zt(u.textColor) : void 0;
          return c.jsx(ot, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(De, {
              spacing: 1.5,
              children: [
                c.jsxs(U, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(U, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: c.jsxs(F, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          x.t("json_table_rule"),
                          " ",
                          p + 1
                        ]
                      })
                    }),
                    c.jsxs(U, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Ne, {
                          title: x.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(Se, {
                              size: "small",
                              onClick: () => a(p),
                              disabled: p === 0,
                              "aria-label": x.t("json_table_rule_move_up"),
                              children: c.jsx(gi, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: x.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(Se, {
                              size: "small",
                              onClick: () => d(p),
                              disabled: p >= g - 1,
                              "aria-label": x.t("json_table_rule_move_down"),
                              children: c.jsx(fi, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: x.t("json_table_delete_rule"),
                          children: c.jsx(Se, {
                            size: "small",
                            onClick: () => s(p),
                            color: "error",
                            "aria-label": x.t("json_table_delete_rule"),
                            children: c.jsx(Ui, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(mu, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => i(p, {
                    logic: m
                  })
                }, u.id ?? p),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(Mo, {
                      label: x.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => i(p, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(Mo, {
                      label: x.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => i(p, {
                        textColor: m
                      })
                    })
                  ]
                }),
                c.jsxs(De, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(mt, {
                      control: c.jsx(xn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => i(p, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(_r, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(_r, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(F, {
                        variant: "caption",
                        children: x.t("json_table_bold")
                      })
                    }),
                    c.jsx(mt, {
                      control: c.jsx(xn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => i(p, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(Sr, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Sr, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(F, {
                        variant: "caption",
                        children: x.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && c.jsx(ot, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...u.backgroundColor ? f ? {
                      background: f
                    } : {
                      backgroundColor: u.backgroundColor
                    } : {},
                    fontWeight: u.fontWeight || "normal",
                    fontStyle: u.fontStyle || "normal"
                  },
                  children: c.jsx(F, {
                    variant: "body2",
                    sx: {
                      ...u.textColor ? h ? {
                        background: h,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                      } : {
                        color: u.textColor
                      } : {
                        color: "inherit"
                      }
                    },
                    children: x.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, u.id ?? p);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? x.t("json_table_rules_priority_hint") : x.t("json_table_rules_all_match_hint")
        }),
        c.jsx(Dt, {
          startIcon: c.jsx(pi, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: x.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function vu({ column: e, discoveredColumn: t, onChange: n }) {
    var _a2, _b, _c2, _d2, _e, _f;
    const [o, r] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), i = y.useCallback((w) => {
      r((S) => ({
        ...S,
        [w]: !S[w]
      }));
    }, []), s = (t == null ? void 0 : t.type) || "string", l = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, S) => w + S, 0) : 0, [
      t
    ]), a = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), d = y.useMemo(() => e.headerName !== a || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      a
    ]), u = y.useCallback(() => {
      n({
        ...e,
        headerName: a,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      a
    ]), p = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), g = y.useCallback(() => {
      const { format: w, ...S } = e;
      n(S);
    }, [
      e,
      n
    ]), f = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), h = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: S, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), m = y.useMemo(() => e.sortable !== void 0 || e.filterable !== void 0, [
      e.sortable,
      e.filterable
    ]), v = y.useCallback(() => {
      const { sortable: w, filterable: S, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), b = y.useCallback((w) => {
      var _a3, _b2;
      const S = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const R = (_b2 = e.format) == null ? void 0 : _b2.type;
        R === "number" ? (delete S.numberDecimals, delete S.numberPrefix, delete S.numberSuffix, delete S.numberThousandsSeparator) : R === "date" ? (delete S.dateFormat, delete S.dateInputFormat) : R === "boolean" ? (delete S.booleanTrue, delete S.booleanFalse) : R === "string" && [
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
        ].forEach((D) => {
          delete S[D];
        });
      }
      n({
        ...e,
        format: {
          ...S,
          ...w
        }
      });
    }, [
      e,
      n
    ]), C = y.useCallback((w) => {
      n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), _ = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return c.jsxs(U, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(U, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(Gn, {
              label: s,
              size: "small",
              sx: {
                backgroundColor: hn[s] || hn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(F, {
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
        c.jsxs(De, {
          spacing: 1,
          children: [
            c.jsxs(Fn, {
              expanded: o.basic,
              onChange: () => i("basic"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(On, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_basic")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !d,
                            onClick: (w) => {
                              w.stopPropagation(), u();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(zn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(Ae, {
                        label: x.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(Ae, {
                        label: x.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (w) => n({
                          ...e,
                          width: w.target.value ? parseInt(w.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: x.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      c.jsxs(vn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(bn, {
                            children: x.t("json_table_align")
                          }),
                          c.jsxs(Jt, {
                            label: x.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(je, {
                                value: "left",
                                children: x.t("json_table_align_left")
                              }),
                              c.jsx(je, {
                                value: "center",
                                children: x.t("json_table_align_center")
                              }),
                              c.jsx(je, {
                                value: "right",
                                children: x.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(F, {
                          variant: "body2",
                          children: x.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Fn, {
              expanded: o.formatting,
              onChange: () => i("formatting"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(On, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_formatting")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(zn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsxs(vn, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(bn, {
                            children: x.t("json_table_format_type")
                          }),
                          c.jsxs(Jt, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: x.t("json_table_format_type"),
                            onChange: (w) => {
                              const S = w.target.value;
                              S === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : b({
                                type: S
                              });
                            },
                            children: [
                              c.jsxs(je, {
                                value: "auto",
                                children: [
                                  x.t("json_table_format_type_auto"),
                                  ` (${s})`
                                ]
                              }),
                              c.jsx(je, {
                                value: "string",
                                children: x.t("json_table_format_type_string")
                              }),
                              c.jsx(je, {
                                value: "number",
                                children: x.t("json_table_format_type_number")
                              }),
                              c.jsx(je, {
                                value: "date",
                                children: x.t("json_table_format_type_date")
                              }),
                              c.jsx(je, {
                                value: "boolean",
                                children: x.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (s === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsx(Oc, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: b,
                        discoveredColumn: t
                      }),
                      (s === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && c.jsx(Nc, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: b
                      }),
                      (s === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && c.jsx(Lc, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: b
                      }),
                      (s === "string" || ((_e = e.format) == null ? void 0 : _e.type) === "string") && c.jsx(Vc, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: b
                      }),
                      s !== "number" && s !== "date" && s !== "boolean" && s !== "string" && !e.format && c.jsx(F, {
                        variant: "body2",
                        color: "text.secondary",
                        children: x.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Fn, {
              expanded: o.styling,
              onChange: () => i("styling"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(On, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(U, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(F, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: x.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && c.jsx(Gn, {
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
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(zn, {
                  children: c.jsx(yu, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: s,
                    onStyleChange: C,
                    onModeChange: _
                  })
                })
              ]
            }),
            c.jsxs(Fn, {
              expanded: o.advanced,
              onChange: () => i("advanced"),
              disableGutters: true,
              children: [
                c.jsx(kn, {
                  expandIcon: c.jsx(On, {}),
                  children: c.jsxs(U, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(F, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: x.t("json_table_section_advanced")
                      }),
                      c.jsx(Ne, {
                        title: x.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Se, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": x.t("json_table_section_reset"),
                            children: c.jsx(un, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(zn, {
                  children: c.jsxs(De, {
                    spacing: 2,
                    children: [
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.sortable ?? true,
                          onChange: (w) => n({
                            ...e,
                            sortable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(F, {
                          variant: "body2",
                          children: x.t("json_table_sortable")
                        })
                      }),
                      c.jsx(mt, {
                        control: c.jsx(kt, {
                          checked: e.filterable ?? false,
                          onChange: (w) => n({
                            ...e,
                            filterable: w.target.checked
                          }),
                          size: "small"
                        }),
                        label: c.jsx(F, {
                          variant: "body2",
                          children: x.t("json_table_filterable")
                        })
                      }),
                      t && c.jsxs(ot, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(F, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: x.t("json_table_analysis_info")
                          }),
                          c.jsxs(De, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_type_label")
                                  }),
                                  c.jsx(Gn, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: hn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_confidence")
                                  }),
                                  c.jsxs(F, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_nulls")
                                  }),
                                  c.jsxs(F, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      l > 0 && ` (${Math.round(t.nullCount / l * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_distinct")
                                  }),
                                  c.jsx(F, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_range")
                                  }),
                                  c.jsxs(F, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(U, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(F, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: x.t("json_table_date_input_format")
                                  }),
                                  c.jsx(F, {
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
  const bu = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, xu = /^\d{4}-\d{2}-\d{2}$/, wu = /^(\d{2})\.(\d{2})\.(\d{4})$/, Cu = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, _u = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Su = /^(\d{2})\/(\d{2})\/(\d{4})$/, ju = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Ru = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Nn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function ao(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Ln(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Mu = [
    {
      regex: bu,
      format: "ISO-8601"
    },
    {
      regex: xu,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Nn(n, t);
      }
    },
    {
      regex: _u,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return Nn(t, n) && Ln(o, r, i);
      }
    },
    {
      regex: Cu,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Nn(t, n) && Ln(o, r);
      }
    },
    {
      regex: wu,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Nn(t, n);
      }
    },
    {
      regex: Ru,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), i = parseInt(e[6], 10);
        return ao(t, n) && Ln(o, r, i);
      }
    },
    {
      regex: ju,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return ao(t, n) && Ln(o, r);
      }
    },
    {
      regex: Su,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return ao(t, n);
      }
    }
  ];
  function $u(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Mu) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Au(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Pu(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Au(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = $u(e);
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
  function Iu(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Fu(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function zu(e) {
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
  function Pr(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function ku(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", d = o[6] || "00";
        return `${s}-${i}-${r}T${l}:${a}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], i = o[2], s = o[3], l = o[4] || "00", a = o[5] || "00", d = o[6] || "00";
        return `${s}-${r}-${i}T${l}:${a}:${d}`;
      }
    }
    return null;
  }
  function Tu(e, t, n = 100, o = 0.8) {
    const r = /* @__PURE__ */ new Map();
    for (const i of e) r.set(i, zu(i));
    for (const i of t) for (const s of e) {
      const l = r.get(s), a = i[s], d = Pu(a);
      if (Pr(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && Pr(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = ku(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((i) => {
      const s = r.get(i);
      let l = Iu(s.typeCounts);
      l === "date" && s.nonNullCount > 0 && (s.typeCounts.date || 0) / s.nonNullCount < o && (l = "string");
      const a = l === "date" ? Fu(s.dateFormatCounts) : void 0, d = l === "date" ? s.typeCounts.date || 0 : s.typeCounts[l] || 0, u = s.nonNullCount > 0 ? Math.round(d / s.nonNullCount * 100) / 100 : 0, p = {
        path: i,
        type: l,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: u
      };
      return a && (p.dateFormat = a), l === "number" && (s.numMin !== void 0 && (p.min = s.numMin), s.numMax !== void 0 && (p.max = s.numMax)), l === "date" && (s.dateMin !== void 0 && (p.min = s.dateMin), s.dateMax !== void 0 && (p.max = s.dateMax)), (l === "string" || l === "mixed") && (s.strLenMin !== void 0 && (p.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (p.stringLengthMax = s.strLenMax)), p;
    });
  }
  function eo(e, t, n, o, r, i, s, l) {
    if (i > l.maxDepth && (l.maxDepth = i), i > s) {
      n[t] = e, o.add(t);
      return;
    }
    if (e == null) {
      n[t] = null, o.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (let a = 0; a < e.length; a++) {
        a > l.maxArrayIndex && (l.maxArrayIndex = a);
        const d = `${t}[${a}]`;
        eo(e[a], d, n, o, r, i + 1, s, l);
      }
      return;
    }
    if (typeof e == "object") {
      if (r.has(e)) {
        n[t] = "[Circular]", o.add(t);
        return;
      }
      r.add(e);
      const a = Object.keys(e);
      if (a.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (const d of a) {
        const u = t ? `${t}.${d}` : d;
        eo(e[d], u, n, o, r, i + 1, s, l);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Du(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) eo(s[d], d, l, n, a, 1, t, o);
      else eo(s, "_value", l, n, a, 0, t, o);
      r.push(l);
    }
    const i = Eu([
      ...n
    ]);
    for (const s of r) for (const l of i) l in s || (s[l] = null);
    return {
      paths: i,
      rows: r,
      maxDepth: o.maxDepth,
      maxArrayIndex: o.maxArrayIndex
    };
  }
  function Eu(e) {
    return e.sort((t, n) => {
      const o = Ir(t), r = Ir(n), i = Math.min(o.length, r.length);
      for (let s = 0; s < i; s++) {
        const l = o[s], a = r[s], d = Fr(l), u = Fr(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return o.length - r.length;
    });
  }
  function Ir(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], r = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (r) {
        r[1] && n.push(r[1]);
        const i = r[2].match(/\[\d+\]/g);
        i && n.push(...i);
      } else n.push(t);
      return n;
    });
  }
  function Fr(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const Ou = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Ci(e, t) {
    const n = performance.now(), o = {
      ...Ou,
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
    const r = Du(e, o.maxDepth), i = Tu(r.paths, r.rows, o.maxDistinct, o.dateConfidenceThreshold), s = r.paths.length * r.rows.length, l = i.reduce((u, p) => u + p.nullCount, 0), a = s > 0 ? Math.round(l / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: i,
      rows: r.rows,
      meta: {
        rowCount: r.rows.length,
        columnCount: i.length,
        maxDepth: r.maxDepth,
        maxArrayIndex: r.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: l,
        nullPercentage: a,
        analysisTimeMs: d
      }
    };
  }
  function Nu(e, t) {
    return y.useMemo(() => Ci(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function Lu({ open: e, onClose: t, columns: n, onSave: o, theme: r, data: i, socket: s }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [p, g] = y.useState([]), [f, h] = y.useState(false), [m, v] = y.useState(false), [b, C] = y.useState(null), _ = y.useRef(false), w = y.useRef(() => Promise.resolve()), S = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), P = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), S.current = n, u(n.length > 0 ? n[0].path : null), _.current = false, C(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !_.current && (_.current = true, w.current());
    }, [
      e
    ]);
    const D = y.useCallback(async () => {
      h(true), C(null);
      try {
        const E = i.oid;
        if (!E) return;
        const k = await s.getState(E);
        if ((k == null ? void 0 : k.val) === null || (k == null ? void 0 : k.val) === void 0) return;
        let j;
        const I = k.val;
        if (typeof I == "string") try {
          const W = JSON.parse(I);
          j = Array.isArray(W) ? W : [
            W
          ];
        } catch {
          return;
        }
        else if (Array.isArray(I)) j = I;
        else if (typeof I == "object" && I !== null) j = [
          I
        ];
        else return;
        const Z = i.tableMaxDepth || 10, G = Ci(j, {
          maxDepth: Z
        });
        g(G.columns);
        const ae = new Map(S.current.map((W) => [
          W.path,
          W
        ])), ee = new Set(G.columns.map((W) => W.path)), ge = S.current.filter((W) => ee.has(W.path)), re = G.columns.filter((W) => !ae.has(W.path)).map((W) => ({
          path: W.path,
          visible: true,
          headerName: W.path.split(".").pop() || W.path
        })), N = [
          ...ge,
          ...re
        ];
        a(N), S.current = N, u((W) => W === null && N.length > 0 ? N[0].path : W);
      } catch (E) {
        const k = E instanceof Error ? E.message : "Failed to discover columns";
        C(k);
      } finally {
        h(false);
      }
    }, [
      i,
      s
    ]);
    y.useEffect(() => {
      w.current = D;
    }, [
      D
    ]), y.useEffect(() => {
      S.current = l;
    }, [
      l
    ]);
    const z = y.useCallback((E) => {
      a((k) => k.map((j) => j.path === E.path ? E : j));
    }, []), $ = y.useCallback((E) => {
      a(E);
    }, []), A = y.useCallback(() => {
      o(l), t();
    }, [
      l,
      o,
      t
    ]), B = y.useCallback((E, k) => {
      if (k === "backdropClick" && P) {
        v(true);
        return;
      }
      t();
    }, [
      P,
      t
    ]), T = y.useMemo(() => d ? l.find((E) => E.path === d) : null, [
      d,
      l
    ]), Y = y.useMemo(() => d ? p.find((E) => E.path === d) : void 0, [
      d,
      p
    ]), J = y.useMemo(() => "json-table-column-editor-title", []);
    return c.jsxs(qi, {
      theme: r,
      children: [
        c.jsxs(qr, {
          open: e,
          onClose: B,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": J,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            c.jsx(Yr, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: J,
              children: c.jsxs(U, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(F, {
                    variant: "h6",
                    children: x.t("json_table_column_editor_title")
                  }),
                  c.jsx(Se, {
                    onClick: () => B(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": x.t("close"),
                    children: c.jsx(Xr, {})
                  })
                ]
              })
            }),
            c.jsxs(Jr, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                b && c.jsx(nr, {
                  severity: "error",
                  onClose: () => C(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: b
                }),
                c.jsxs(U, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(U, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(Dc, {
                        columns: l,
                        discoveredColumns: p,
                        selectedPath: d,
                        onSelect: u,
                        onChange: $,
                        onRefresh: D,
                        loading: f
                      })
                    }),
                    c.jsx(U, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: T ? c.jsx(vu, {
                        column: T,
                        discoveredColumn: Y,
                        onChange: z
                      }) : c.jsx(U, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(F, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? x.t("json_table_select_column") : x.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            c.jsxs(ci, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(Dt, {
                  onClick: () => B(),
                  children: x.t("cancel")
                }),
                c.jsx(Dt, {
                  variant: "contained",
                  onClick: A,
                  disabled: !P,
                  children: x.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(Ra, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(nr, {
            severity: "warning",
            onClose: () => v(false),
            children: x.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Vu(e, t, n, o) {
    const r = e.name || "columnConfig", i = o.context.theme, [s, l] = y.useState(false), a = y.useMemo(() => mi(t[r]), [
      t,
      r
    ]), d = a.filter((v) => v.visible).length, u = a.length, p = a.some((v) => v.format), g = a.some((v) => v.cellStyle && v.cellStyle.length > 0), f = y.useCallback((v) => {
      const b = JSON.stringify(v), C = `b64:${kc(b)}`;
      n({
        [r]: C
      });
    }, [
      r,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return c.jsxs(U, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(Dt, {
          variant: "outlined",
          startIcon: c.jsx(Ic, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": x.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: x.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(F, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            mt: 0.5,
            display: "block"
          },
          "aria-live": "polite",
          children: [
            d,
            " / ",
            u,
            " ",
            x.t("json_table_columns_visible"),
            p && ` \xB7 ${x.t("json_table_has_formatting")}`,
            g && ` \xB7 ${x.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(Lu, {
          open: s,
          onClose: m,
          columns: a,
          onSave: f,
          theme: i,
          data: t,
          socket: o.context.socket
        })
      ]
    });
  }
  const Hu = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
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
      component: () => c.jsx(Ye, {
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
      component: () => c.jsx(Ye, {
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
      default: false
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
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
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
    {
      name: "borderColor",
      label: "table_border_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      name: "borderRadius",
      label: "table_border_radius",
      type: "text",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
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
      component: () => c.jsx(Ye, {
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
    {
      name: "verticalCellBorderColor",
      label: "vertical_cell_border_color",
      default: "",
      type: "custom",
      hidden: "!data.tableShowCellBorders",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {})
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
    {
      name: "horizontalCellBorderColor",
      label: "horizontal_cell_border_color",
      default: "",
      type: "custom",
      hidden: "!data.tableShowRowBorders",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: e,
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      name: "tableHeaderTextColor",
      label: "json_table_header_text_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      name: "tableHeaderFontSize",
      type: "number",
      label: "json_table_header_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {})
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
    {
      name: "headerBorderColor",
      label: "json_table_header_border_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: {
          ...e,
          noGradient: true
        },
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "evenRowColor",
      label: "json_table_even_row_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: e,
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      name: "oddRowColor",
      label: "json_table_odd_row_color",
      default: "",
      type: "custom",
      component: (e, t, n, o) => c.jsx(Ct, {
        field: e,
        data: t,
        onDataChange: n,
        props: o
      })
    },
    {
      name: "tableCellFontSize",
      type: "number",
      label: "json_table_cell_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ye, {
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
      component: () => c.jsx(Ye, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Vu
    }
  ];
  function St(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ue(e, t) {
    return (n) => {
      t.setState((o) => ({
        ...o,
        [e]: St(n, o[e])
      }));
    };
  }
  function ro(e) {
    return e instanceof Function;
  }
  function Bu(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Wu(e, t) {
    const n = [], o = (r) => {
      r.forEach((i) => {
        n.push(i);
        const s = t(i);
        s != null && s.length && o(s);
      });
    };
    return o(e), n;
  }
  function L(e, t, n) {
    let o = [], r;
    return (i) => {
      let s;
      n.key && n.debug && (s = Date.now());
      const l = e(i);
      if (!(l.length !== o.length || l.some((u, p) => o[p] !== u))) return r;
      o = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), r = t(...l), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - d) * 100) / 100, g = p / 16, f = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${f(p, 5)} /${f(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return r;
    };
  }
  function V(e, t, n, o) {
    return {
      debug: () => {
        var r;
        return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
      },
      key: false,
      onChange: o
    };
  }
  function Gu(e, t, n, o) {
    const r = () => {
      var s;
      return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
    }, i = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(o),
      renderValue: r,
      getContext: L(() => [
        e,
        n,
        t,
        i
      ], (s, l, a, d) => ({
        table: s,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), V(e.options, "debugCells"))
    };
    return e._features.forEach((s) => {
      s.createCell == null || s.createCell(i, n, t, e);
    }, {}), i;
  }
  function Uu(e, t, n, o) {
    var r, i;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (r = (i = l.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (g) => {
      let f = g;
      for (const m of a.split(".")) {
        var h;
        f = (h = f) == null ? void 0 : h[m];
      }
      return f;
    } : u = (g) => g[l.accessorKey]), !d) throw new Error();
    let p = {
      id: `${String(d)}`,
      accessorFn: u,
      parent: o,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: L(() => [
        true
      ], () => {
        var g;
        return [
          p,
          ...(g = p.columns) == null ? void 0 : g.flatMap((f) => f.getFlatColumns())
        ];
      }, V(e.options, "debugColumns")),
      getLeafColumns: L(() => [
        e._getOrderColumnsFn()
      ], (g) => {
        var f;
        if ((f = p.columns) != null && f.length) {
          let h = p.columns.flatMap((m) => m.getLeafColumns());
          return g(h);
        }
        return [
          p
        ];
      }, V(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(p, e);
    return p;
  }
  const Fe = "debugHeaders";
  function zr(e, t, n) {
    var o;
    let i = {
      id: (o = n.id) != null ? o : t.id,
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
        const s = [], l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), s.push(a);
        };
        return l(i), s;
      },
      getContext: () => ({
        table: e,
        header: i,
        column: t
      })
    };
    return e._features.forEach((s) => {
      s.createHeader == null || s.createHeader(i, e);
    }), i;
  }
  const qu = {
    createTable: (e) => {
      e.getHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => {
        var i, s;
        const l = (i = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? i : [], a = (s = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], d = n.filter((p) => !(o != null && o.includes(p.id)) && !(r != null && r.includes(p.id)));
        return Vn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, V(e.options, Fe)), e.getCenterHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), Vn(t, n, e, "center")), V(e.options, Fe)), e.getLeftHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return Vn(t, i, e, "left");
      }, V(e.options, Fe)), e.getRightHeaderGroups = L(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, o) => {
        var r;
        const i = (r = o == null ? void 0 : o.map((s) => n.find((l) => l.id === s)).filter(Boolean)) != null ? r : [];
        return Vn(t, i, e, "right");
      }, V(e.options, Fe)), e.getFooterGroups = L(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Fe)), e.getLeftFooterGroups = L(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Fe)), e.getCenterFooterGroups = L(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Fe)), e.getRightFooterGroups = L(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Fe)), e.getFlatHeaders = L(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Fe)), e.getLeftFlatHeaders = L(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Fe)), e.getCenterFlatHeaders = L(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Fe)), e.getRightFlatHeaders = L(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Fe)), e.getCenterLeafHeaders = L(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Fe)), e.getLeftLeafHeaders = L(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Fe)), e.getRightLeafHeaders = L(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var o;
        return !((o = n.subHeaders) != null && o.length);
      }), V(e.options, Fe)), e.getLeafHeaders = L(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, o) => {
        var r, i, s, l, a, d;
        return [
          ...(r = (i = t[0]) == null ? void 0 : i.headers) != null ? r : [],
          ...(s = (l = n[0]) == null ? void 0 : l.headers) != null ? s : [],
          ...(a = (d = o[0]) == null ? void 0 : d.headers) != null ? a : []
        ].map((u) => u.getLeafHeaders()).flat();
      }, V(e.options, Fe));
    }
  };
  function Vn(e, t, n, o) {
    var r, i;
    let s = 0;
    const l = function(g, f) {
      f === void 0 && (f = 1), s = Math.max(s, f), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, f + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const d = (g, f) => {
      const h = {
        depth: f,
        id: [
          o,
          `${f}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((v) => {
        const b = [
          ...m
        ].reverse()[0], C = v.column.depth === h.depth;
        let _, w = false;
        if (C && v.column.parent ? _ = v.column.parent : (_ = v.column, w = true), b && (b == null ? void 0 : b.column) === _) b.subHeaders.push(v);
        else {
          const S = zr(n, _, {
            id: [
              o,
              f,
              _.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: w,
            placeholderId: w ? `${m.filter((R) => R.column === _).length}` : void 0,
            depth: f,
            index: m.length
          });
          S.subHeaders.push(v), m.push(S);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), f > 0 && d(m, f - 1);
    }, u = t.map((g, f) => zr(n, g, {
      depth: s,
      index: f
    }));
    d(u, s - 1), a.reverse();
    const p = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, b = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (b = [], p(h.subHeaders).forEach((_) => {
        let { colSpan: w, rowSpan: S } = _;
        m += w, b.push(S);
      })) : m = 1;
      const C = Math.min(...b);
      return v = v + C, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return p((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
  }
  const Go = (e, t, n, o, r, i, s) => {
    let l = {
      id: t,
      index: o,
      original: n,
      depth: r,
      parentId: s,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return l._valuesCache[a] = d.accessorFn(l.original, o), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = d.columnDef.getUniqueValues(l.original, o), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var d;
        return (d = l.getValue(a)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Wu(l.subRows, (a) => a.subRows),
      getParentRow: () => l.parentId ? e.getRow(l.parentId, true) : void 0,
      getParentRows: () => {
        let a = [], d = l;
        for (; ; ) {
          const u = d.getParentRow();
          if (!u) break;
          a.push(u), d = u;
        }
        return a.reverse();
      },
      getAllCells: L(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Gu(e, l, d, d.id)), V(e.options, "debugRows")),
      _getAllCellsByColumnId: L(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), V(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, Yu = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, _i = (e, t, n) => {
    var o, r;
    const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
  };
  _i.autoRemove = (e) => nt(e);
  const Si = (e, t, n) => {
    var o;
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
  };
  Si.autoRemove = (e) => nt(e);
  const ji = (e, t, n) => {
    var o;
    return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  ji.autoRemove = (e) => nt(e);
  const Ri = (e, t, n) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
  };
  Ri.autoRemove = (e) => nt(e);
  const Mi = (e, t, n) => !n.some((o) => {
    var r;
    return !((r = e.getValue(t)) != null && r.includes(o));
  });
  Mi.autoRemove = (e) => nt(e) || !(e != null && e.length);
  const $i = (e, t, n) => n.some((o) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
  });
  $i.autoRemove = (e) => nt(e) || !(e != null && e.length);
  const Ai = (e, t, n) => e.getValue(t) === n;
  Ai.autoRemove = (e) => nt(e);
  const Pi = (e, t, n) => e.getValue(t) == n;
  Pi.autoRemove = (e) => nt(e);
  const Uo = (e, t, n) => {
    let [o, r] = n;
    const i = e.getValue(t);
    return i >= o && i <= r;
  };
  Uo.resolveFilterValue = (e) => {
    let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(o) ? -1 / 0 : o, s = n === null || Number.isNaN(r) ? 1 / 0 : r;
    if (i > s) {
      const l = i;
      i = s, s = l;
    }
    return [
      i,
      s
    ];
  };
  Uo.autoRemove = (e) => nt(e) || nt(e[0]) && nt(e[1]);
  const gt = {
    includesString: _i,
    includesStringSensitive: Si,
    equalsString: ji,
    arrIncludes: Ri,
    arrIncludesAll: Mi,
    arrIncludesSome: $i,
    equals: Ai,
    weakEquals: Pi,
    inNumberRange: Uo
  };
  function nt(e) {
    return e == null || e === "";
  }
  const Ju = {
    getDefaultColumnDef: () => ({
      filterFn: "auto"
    }),
    getInitialState: (e) => ({
      columnFilters: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnFiltersChange: Ue("columnFilters", e),
      filterFromLeafRows: false,
      maxLeafRowFilterDepth: 100
    }),
    createColumn: (e, t) => {
      e.getAutoFilterFn = () => {
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        return typeof o == "string" ? gt.includesString : typeof o == "number" ? gt.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? gt.equals : Array.isArray(o) ? gt.arrIncludes : gt.weakEquals;
      }, e.getFilterFn = () => {
        var n, o;
        return ro(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : gt[e.columnDef.filterFn];
      }, e.getCanFilter = () => {
        var n, o, r;
        return ((n = e.columnDef.enableColumnFilter) != null ? n : true) && ((o = t.options.enableColumnFilters) != null ? o : true) && ((r = t.options.enableFilters) != null ? r : true) && !!e.accessorFn;
      }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
        var n;
        return (n = t.getState().columnFilters) == null || (n = n.find((o) => o.id === e.id)) == null ? void 0 : n.value;
      }, e.getFilterIndex = () => {
        var n, o;
        return (n = (o = t.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
      }, e.setFilterValue = (n) => {
        t.setColumnFilters((o) => {
          const r = e.getFilterFn(), i = o == null ? void 0 : o.find((u) => u.id === e.id), s = St(n, i ? i.value : void 0);
          if (kr(r, s, e)) {
            var l;
            return (l = o == null ? void 0 : o.filter((u) => u.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: s
          };
          if (i) {
            var d;
            return (d = o == null ? void 0 : o.map((u) => u.id === e.id ? a : u)) != null ? d : [];
          }
          return o != null && o.length ? [
            ...o,
            a
          ] : [
            a
          ];
        });
      };
    },
    createRow: (e, t) => {
      e.columnFilters = {}, e.columnFiltersMeta = {};
    },
    createTable: (e) => {
      e.setColumnFilters = (t) => {
        const n = e.getAllLeafColumns(), o = (r) => {
          var i;
          return (i = St(t, r)) == null ? void 0 : i.filter((s) => {
            const l = n.find((a) => a.id === s.id);
            if (l) {
              const a = l.getFilterFn();
              if (kr(a, s.value, l)) return false;
            }
            return true;
          });
        };
        e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
      }, e.resetColumnFilters = (t) => {
        var n, o;
        e.setColumnFilters(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? n : []);
      }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
    }
  };
  function kr(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const Ku = (e, t, n) => n.reduce((o, r) => {
    const i = r.getValue(e);
    return o + (typeof i == "number" ? i : 0);
  }, 0), Xu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o > i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Qu = (e, t, n) => {
    let o;
    return n.forEach((r) => {
      const i = r.getValue(e);
      i != null && (o < i || o === void 0 && i >= i) && (o = i);
    }), o;
  }, Zu = (e, t, n) => {
    let o, r;
    return n.forEach((i) => {
      const s = i.getValue(e);
      s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
    }), [
      o,
      r
    ];
  }, ed = (e, t) => {
    let n = 0, o = 0;
    if (t.forEach((r) => {
      let i = r.getValue(e);
      i != null && (i = +i) >= i && (++n, o += i);
    }), n) return o / n;
  }, td = (e, t) => {
    if (!t.length) return;
    const n = t.map((i) => i.getValue(e));
    if (!Bu(n)) return;
    if (n.length === 1) return n[0];
    const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
    return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
  }, nd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), od = (e, t) => new Set(t.map((n) => n.getValue(e))).size, rd = (e, t) => t.length, co = {
    sum: Ku,
    min: Xu,
    max: Qu,
    extent: Zu,
    mean: ed,
    median: td,
    unique: nd,
    uniqueCount: od,
    count: rd
  }, id = {
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
      onGroupingChange: Ue("grouping", e),
      groupedColumnMode: "reorder"
    }),
    createColumn: (e, t) => {
      e.toggleGrouping = () => {
        t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((o) => o !== e.id) : [
          ...n ?? [],
          e.id
        ]);
      }, e.getCanGroup = () => {
        var n, o;
        return ((n = e.columnDef.enableGrouping) != null ? n : true) && ((o = t.options.enableGrouping) != null ? o : true) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
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
        const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
        if (typeof o == "number") return co.sum;
        if (Object.prototype.toString.call(o) === "[object Date]") return co.extent;
      }, e.getAggregationFn = () => {
        var n, o;
        if (!e) throw new Error();
        return ro(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : co[e.columnDef.aggregationFn];
      };
    },
    createTable: (e) => {
      e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
        var n, o;
        e.setGrouping(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.grouping) != null ? n : []);
      }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
    },
    createRow: (e, t) => {
      e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
        if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
        const o = t.getColumn(n);
        return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
      }, e._groupingValuesCache = {};
    },
    createCell: (e, t, n, o) => {
      e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
        var r;
        return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = n.subRows) != null && r.length);
      };
    }
  };
  function sd(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const o = e.filter((i) => !t.includes(i.id));
    return n === "remove" ? o : [
      ...t.map((i) => e.find((s) => s.id === i)).filter(Boolean),
      ...o
    ];
  }
  const ld = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ue("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = L((n) => [
        mn(t, n)
      ], (n) => n.findIndex((o) => o.id === e.id), V(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var o;
        return ((o = mn(t, n)[0]) == null ? void 0 : o.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var o;
        const r = mn(t, n);
        return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = L(() => [
        e.getState().columnOrder,
        e.getState().grouping,
        e.options.groupedColumnMode
      ], (t, n, o) => (r) => {
        let i = [];
        if (!(t != null && t.length)) i = r;
        else {
          const s = [
            ...t
          ], l = [
            ...r
          ];
          for (; l.length && s.length; ) {
            const a = s.shift(), d = l.findIndex((u) => u.id === a);
            d > -1 && i.push(l.splice(d, 1)[0]);
          }
          i = [
            ...i,
            ...l
          ];
        }
        return sd(i, n, o);
      }, V(e.options, "debugTable"));
    }
  }, uo = () => ({
    left: [],
    right: []
  }), ad = {
    getInitialState: (e) => ({
      columnPinning: uo(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ue("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
        t.setColumnPinning((r) => {
          var i, s;
          if (n === "right") {
            var l, a;
            return {
              left: ((l = r == null ? void 0 : r.left) != null ? l : []).filter((p) => !(o != null && o.includes(p))),
              right: [
                ...((a = r == null ? void 0 : r.right) != null ? a : []).filter((p) => !(o != null && o.includes(p))),
                ...o
              ]
            };
          }
          if (n === "left") {
            var d, u;
            return {
              left: [
                ...((d = r == null ? void 0 : r.left) != null ? d : []).filter((p) => !(o != null && o.includes(p))),
                ...o
              ],
              right: ((u = r == null ? void 0 : r.right) != null ? u : []).filter((p) => !(o != null && o.includes(p)))
            };
          }
          return {
            left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((p) => !(o != null && o.includes(p))),
            right: ((s = r == null ? void 0 : r.right) != null ? s : []).filter((p) => !(o != null && o.includes(p)))
          };
        });
      }, e.getCanPin = () => e.getLeafColumns().some((o) => {
        var r, i, s;
        return ((r = o.columnDef.enablePinning) != null ? r : true) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : true);
      }), e.getIsPinned = () => {
        const n = e.getLeafColumns().map((l) => l.id), { left: o, right: r } = t.getState().columnPinning, i = n.some((l) => o == null ? void 0 : o.includes(l)), s = n.some((l) => r == null ? void 0 : r.includes(l));
        return i ? "left" : s ? "right" : false;
      }, e.getPinnedIndex = () => {
        var n, o;
        const r = e.getIsPinned();
        return r ? (n = (o = t.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? n : -1 : 0;
      };
    },
    createRow: (e, t) => {
      e.getCenterVisibleCells = L(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, o, r) => {
        const i = [
          ...o ?? [],
          ...r ?? []
        ];
        return n.filter((s) => !i.includes(s.column.id));
      }, V(t.options, "debugRows")), e.getLeftVisibleCells = L(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "left"
      })), V(t.options, "debugRows")), e.getRightVisibleCells = L(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
        ...i,
        position: "right"
      })), V(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, o;
        return e.setColumnPinning(t ? uo() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : uo());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const o = e.getState().columnPinning;
        if (!t) {
          var r, i;
          return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e.getLeftLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), V(e.options, "debugColumns")), e.getRightLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), V(e.options, "debugColumns")), e.getCenterLeafColumns = L(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, o) => {
        const r = [
          ...n ?? [],
          ...o ?? []
        ];
        return t.filter((i) => !r.includes(i.id));
      }, V(e.options, "debugColumns"));
    }
  };
  function cd(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Hn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, po = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), ud = {
    getDefaultColumnDef: () => Hn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: po(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      columnResizeMode: "onEnd",
      columnResizeDirection: "ltr",
      onColumnSizingChange: Ue("columnSizing", e),
      onColumnSizingInfoChange: Ue("columnSizingInfo", e)
    }),
    createColumn: (e, t) => {
      e.getSize = () => {
        var n, o, r;
        const i = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Hn.minSize, (o = i ?? e.columnDef.size) != null ? o : Hn.size), (r = e.columnDef.maxSize) != null ? r : Hn.maxSize);
      }, e.getStart = L((n) => [
        n,
        mn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), V(t.options, "debugColumns")), e.getAfter = L((n) => [
        n,
        mn(t, n),
        t.getState().columnSizing
      ], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, i) => r + i.getSize(), 0), V(t.options, "debugColumns")), e.resetSize = () => {
        t.setColumnSizing((n) => {
          let { [e.id]: o, ...r } = n;
          return r;
        });
      }, e.getCanResize = () => {
        var n, o;
        return ((n = e.columnDef.enableResizing) != null ? n : true) && ((o = t.options.enableColumnResizing) != null ? o : true);
      }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
    },
    createHeader: (e, t) => {
      e.getSize = () => {
        let n = 0;
        const o = (r) => {
          if (r.subHeaders.length) r.subHeaders.forEach(o);
          else {
            var i;
            n += (i = r.column.getSize()) != null ? i : 0;
          }
        };
        return o(e), n;
      }, e.getStart = () => {
        if (e.index > 0) {
          const n = e.headerGroup.headers[e.index - 1];
          return n.getStart() + n.getSize();
        }
        return 0;
      }, e.getResizeHandler = (n) => {
        const o = t.getColumn(e.column.id), r = o == null ? void 0 : o.getCanResize();
        return (i) => {
          if (!o || !r || (i.persist == null || i.persist(), fo(i) && i.touches && i.touches.length > 1)) return;
          const s = e.getSize(), l = e ? e.getLeafHeaders().map((b) => [
            b.column.id,
            b.column.getSize()
          ]) : [
            [
              o.id,
              o.getSize()
            ]
          ], a = fo(i) ? Math.round(i.touches[0].clientX) : i.clientX, d = {}, u = (b, C) => {
            typeof C == "number" && (t.setColumnSizingInfo((_) => {
              var w, S;
              const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, P = (C - ((w = _ == null ? void 0 : _.startOffset) != null ? w : 0)) * R, D = Math.max(P / ((S = _ == null ? void 0 : _.startSize) != null ? S : 0), -0.999999);
              return _.columnSizingStart.forEach((z) => {
                let [$, A] = z;
                d[$] = Math.round(Math.max(A + A * D, 0) * 100) / 100;
              }), {
                ..._,
                deltaOffset: P,
                deltaPercentage: D
              };
            }), (t.options.columnResizeMode === "onChange" || b === "end") && t.setColumnSizing((_) => ({
              ..._,
              ...d
            })));
          }, p = (b) => u("move", b), g = (b) => {
            u("end", b), t.setColumnSizingInfo((C) => ({
              ...C,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, f = cd(n), h = {
            moveHandler: (b) => p(b.clientX),
            upHandler: (b) => {
              f == null ? void 0 : f.removeEventListener("mousemove", h.moveHandler), f == null ? void 0 : f.removeEventListener("mouseup", h.upHandler), g(b.clientX);
            }
          }, m = {
            moveHandler: (b) => (b.cancelable && (b.preventDefault(), b.stopPropagation()), p(b.touches[0].clientX), false),
            upHandler: (b) => {
              var C;
              f == null ? void 0 : f.removeEventListener("touchmove", m.moveHandler), f == null ? void 0 : f.removeEventListener("touchend", m.upHandler), b.cancelable && (b.preventDefault(), b.stopPropagation()), g((C = b.touches[0]) == null ? void 0 : C.clientX);
            }
          }, v = dd() ? {
            passive: false
          } : false;
          fo(i) ? (f == null ? void 0 : f.addEventListener("touchmove", m.moveHandler, v), f == null ? void 0 : f.addEventListener("touchend", m.upHandler, v)) : (f == null ? void 0 : f.addEventListener("mousemove", h.moveHandler, v), f == null ? void 0 : f.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((b) => ({
            ...b,
            startOffset: a,
            startSize: s,
            deltaOffset: 0,
            deltaPercentage: 0,
            columnSizingStart: l,
            isResizingColumn: o.id
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
        e.setColumnSizingInfo(t ? po() : (n = e.initialState.columnSizingInfo) != null ? n : po());
      }, e.getTotalSize = () => {
        var t, n;
        return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
      }, e.getLeftTotalSize = () => {
        var t, n;
        return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
      }, e.getCenterTotalSize = () => {
        var t, n;
        return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
      }, e.getRightTotalSize = () => {
        var t, n;
        return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
      };
    }
  };
  let Bn = null;
  function dd() {
    if (typeof Bn == "boolean") return Bn;
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
    return Bn = e, Bn;
  }
  function fo(e) {
    return e.type === "touchstart";
  }
  const pd = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ue("columnVisibility", e)
    }),
    createColumn: (e, t) => {
      e.toggleVisibility = (n) => {
        e.getCanHide() && t.setColumnVisibility((o) => ({
          ...o,
          [e.id]: n ?? !e.getIsVisible()
        }));
      }, e.getIsVisible = () => {
        var n, o;
        const r = e.columns;
        return (n = r.length ? r.some((i) => i.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : true;
      }, e.getCanHide = () => {
        var n, o;
        return ((n = e.columnDef.enableHiding) != null ? n : true) && ((o = t.options.enableHiding) != null ? o : true);
      }, e.getToggleVisibilityHandler = () => (n) => {
        e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
      };
    },
    createRow: (e, t) => {
      e._getAllVisibleCells = L(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((o) => o.column.getIsVisible()), V(t.options, "debugRows")), e.getVisibleCells = L(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, o, r) => [
        ...n,
        ...o,
        ...r
      ], V(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, o) => L(() => [
        o(),
        o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")
      ], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), V(e.options, "debugColumns"));
      e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
        var o;
        e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
      }, e.toggleAllColumnsVisible = (n) => {
        var o;
        n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
          ...r,
          [i.id]: n || !(i.getCanHide != null && i.getCanHide())
        }), {}));
      }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
        var o;
        e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
      };
    }
  };
  function mn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const fd = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, gd = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ue("globalFilter", e),
      globalFilterFn: "auto",
      getColumnCanGlobalFilter: (t) => {
        var n;
        const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
        return typeof o == "string" || typeof o == "number";
      }
    }),
    createColumn: (e, t) => {
      e.getCanGlobalFilter = () => {
        var n, o, r, i;
        return ((n = e.columnDef.enableGlobalFilter) != null ? n : true) && ((o = t.options.enableGlobalFilter) != null ? o : true) && ((r = t.options.enableFilters) != null ? r : true) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : true) && !!e.accessorFn;
      };
    },
    createTable: (e) => {
      e.getGlobalAutoFilterFn = () => gt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: o } = e.options;
        return ro(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : gt[o];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, hd = {
    getInitialState: (e) => ({
      expanded: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onExpandedChange: Ue("expanded", e),
      paginateExpandedRows: true
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetExpanded = () => {
        var o, r;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetExpanded(), n = false;
          });
        }
      }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
        o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(true) : e.setExpanded({});
      }, e.resetExpanded = (o) => {
        var r, i;
        e.setExpanded(o ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
      }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((o) => o.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (o) => {
        o.persist == null || o.persist(), e.toggleAllRowsExpanded();
      }, e.getIsSomeRowsExpanded = () => {
        const o = e.getState().expanded;
        return o === true || Object.values(o).some(Boolean);
      }, e.getIsAllRowsExpanded = () => {
        const o = e.getState().expanded;
        return typeof o == "boolean" ? o === true : !(!Object.keys(o).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
      }, e.getExpandedDepth = () => {
        let o = 0;
        return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
          const s = i.split(".");
          o = Math.max(o, s.length);
        }), o;
      }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
    },
    createRow: (e, t) => {
      e.toggleExpanded = (n) => {
        t.setExpanded((o) => {
          var r;
          const i = o === true ? true : !!(o != null && o[e.id]);
          let s = {};
          if (o === true ? Object.keys(t.getRowModel().rowsById).forEach((l) => {
            s[l] = true;
          }) : s = o, n = (r = n) != null ? r : !i, !i && n) return {
            ...s,
            [e.id]: true
          };
          if (i && !n) {
            const { [e.id]: l, ...a } = s;
            return a;
          }
          return o;
        });
      }, e.getIsExpanded = () => {
        var n;
        const o = t.getState().expanded;
        return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : o === true || (o == null ? void 0 : o[e.id]));
      }, e.getCanExpand = () => {
        var n, o, r;
        return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((o = t.options.enableExpanding) != null ? o : true) && !!((r = e.subRows) != null && r.length);
      }, e.getIsAllParentsExpanded = () => {
        let n = true, o = e;
        for (; n && o.parentId; ) o = t.getRow(o.parentId, true), n = o.getIsExpanded();
        return n;
      }, e.getToggleExpandedHandler = () => {
        const n = e.getCanExpand();
        return () => {
          n && e.toggleExpanded();
        };
      };
    }
  }, Io = 0, Fo = 10, go = () => ({
    pageIndex: Io,
    pageSize: Fo
  }), md = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...go(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ue("pagination", e)
    }),
    createTable: (e) => {
      let t = false, n = false;
      e._autoResetPageIndex = () => {
        var o, r;
        if (!t) {
          e._queue(() => {
            t = true;
          });
          return;
        }
        if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
          if (n) return;
          n = true, e._queue(() => {
            e.resetPageIndex(), n = false;
          });
        }
      }, e.setPagination = (o) => {
        const r = (i) => St(o, i);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
      }, e.resetPagination = (o) => {
        var r;
        e.setPagination(o ? go() : (r = e.initialState.pagination) != null ? r : go());
      }, e.setPageIndex = (o) => {
        e.setPagination((r) => {
          let i = St(o, r.pageIndex);
          const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return i = Math.max(0, Math.min(i, s)), {
            ...r,
            pageIndex: i
          };
        });
      }, e.resetPageIndex = (o) => {
        var r, i;
        e.setPageIndex(o ? Io : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : Io);
      }, e.resetPageSize = (o) => {
        var r, i;
        e.setPageSize(o ? Fo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Fo);
      }, e.setPageSize = (o) => {
        e.setPagination((r) => {
          const i = Math.max(1, St(o, r.pageSize)), s = r.pageSize * r.pageIndex, l = Math.floor(s / i);
          return {
            ...r,
            pageIndex: l,
            pageSize: i
          };
        });
      }, e.setPageCount = (o) => e.setPagination((r) => {
        var i;
        let s = St(o, (i = e.options.pageCount) != null ? i : -1);
        return typeof s == "number" && (s = Math.max(-1, s)), {
          ...r,
          pageCount: s
        };
      }), e.getPageOptions = L(() => [
        e.getPageCount()
      ], (o) => {
        let r = [];
        return o && o > 0 && (r = [
          ...new Array(o)
        ].fill(null).map((i, s) => s)), r;
      }, V(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
        const { pageIndex: o } = e.getState().pagination, r = e.getPageCount();
        return r === -1 ? true : r === 0 ? false : o < r - 1;
      }, e.previousPage = () => e.setPageIndex((o) => o - 1), e.nextPage = () => e.setPageIndex((o) => o + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
        var o;
        return (o = e.options.pageCount) != null ? o : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
      }, e.getRowCount = () => {
        var o;
        return (o = e.options.rowCount) != null ? o : e.getPrePaginationRowModel().rows.length;
      };
    }
  }, ho = () => ({
    top: [],
    bottom: []
  }), yd = {
    getInitialState: (e) => ({
      rowPinning: ho(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ue("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, o, r) => {
        const i = o ? e.getLeafRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], s = r ? e.getParentRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...s,
          e.id,
          ...i
        ]);
        t.setRowPinning((a) => {
          var d, u;
          if (n === "bottom") {
            var p, g;
            return {
              top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
              bottom: [
                ...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var f, h;
            return {
              top: [
                ...((f = a == null ? void 0 : a.top) != null ? f : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ],
              bottom: ((h = a == null ? void 0 : a.bottom) != null ? h : []).filter((m) => !(l != null && l.has(m)))
            };
          }
          return {
            top: ((d = a == null ? void 0 : a.top) != null ? d : []).filter((m) => !(l != null && l.has(m))),
            bottom: ((u = a == null ? void 0 : a.bottom) != null ? u : []).filter((m) => !(l != null && l.has(m)))
          };
        });
      }, e.getCanPin = () => {
        var n;
        const { enableRowPinning: o, enablePinning: r } = t.options;
        return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : true;
      }, e.getIsPinned = () => {
        const n = [
          e.id
        ], { top: o, bottom: r } = t.getState().rowPinning, i = n.some((l) => o == null ? void 0 : o.includes(l)), s = n.some((l) => r == null ? void 0 : r.includes(l));
        return i ? "top" : s ? "bottom" : false;
      }, e.getPinnedIndex = () => {
        var n, o;
        const r = e.getIsPinned();
        if (!r) return -1;
        const i = (n = r === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
          let { id: l } = s;
          return l;
        });
        return (o = i == null ? void 0 : i.indexOf(e.id)) != null ? o : -1;
      };
    },
    createTable: (e) => {
      e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
        var n, o;
        return e.setRowPinning(t ? ho() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : ho());
      }, e.getIsSomeRowsPinned = (t) => {
        var n;
        const o = e.getState().rowPinning;
        if (!t) {
          var r, i;
          return !!((r = o.top) != null && r.length || (i = o.bottom) != null && i.length);
        }
        return !!((n = o[t]) != null && n.length);
      }, e._getPinnedRows = (t, n, o) => {
        var r;
        return ((r = e.options.keepPinnedRows) == null || r ? (n ?? []).map((s) => {
          const l = e.getRow(s, true);
          return l.getIsAllParentsExpanded() ? l : null;
        }) : (n ?? []).map((s) => t.find((l) => l.id === s))).filter(Boolean).map((s) => ({
          ...s,
          position: o
        }));
      }, e.getTopRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), V(e.options, "debugRows")), e.getBottomRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), V(e.options, "debugRows")), e.getCenterRows = L(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, o) => {
        const r = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...o ?? []
        ]);
        return t.filter((i) => !r.has(i.id));
      }, V(e.options, "debugRows"));
    }
  }, vd = {
    getInitialState: (e) => ({
      rowSelection: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowSelectionChange: Ue("rowSelection", e),
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
          const o = {
            ...n
          }, r = e.getPreGroupedRowModel().flatRows;
          return t ? r.forEach((i) => {
            i.getCanSelect() && (o[i.id] = true);
          }) : r.forEach((i) => {
            delete o[i.id];
          }), o;
        });
      }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
        const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
          ...n
        };
        return e.getRowModel().rows.forEach((i) => {
          zo(r, i.id, o, true, e);
        }), r;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? mo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getFilteredSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? mo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getGroupedSelectedRowModel = L(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? mo(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
        const t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState();
        let o = !!(t.length && Object.keys(n).length);
        return o && t.some((r) => r.getCanSelect() && !n[r.id]) && (o = false), o;
      }, e.getIsAllPageRowsSelected = () => {
        const t = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), { rowSelection: n } = e.getState();
        let o = !!t.length;
        return o && t.some((r) => !n[r.id]) && (o = false), o;
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
      e.toggleSelected = (n, o) => {
        const r = e.getIsSelected();
        t.setRowSelection((i) => {
          var s;
          if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n) return i;
          const l = {
            ...i
          };
          return zo(l, e.id, n, (s = o == null ? void 0 : o.selectChildren) != null ? s : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return qo(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return ko(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return ko(e, n) === "all";
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
        return (o) => {
          var r;
          n && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
        };
      };
    }
  }, zo = (e, t, n, o, r) => {
    var i;
    const s = r.getRow(t, true);
    n ? (s.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), s.getCanSelect() && (e[t] = true)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((l) => zo(e, l.id, n, o, r));
  };
  function mo(e, t) {
    const n = e.getState().rowSelection, o = [], r = {}, i = function(s, l) {
      return s.map((a) => {
        var d;
        const u = qo(a, n);
        if (u && (o.push(a), r[a.id] = a), (d = a.subRows) != null && d.length && (a = {
          ...a,
          subRows: i(a.subRows)
        }), u) return a;
      }).filter(Boolean);
    };
    return {
      rows: i(t.rows),
      flatRows: o,
      rowsById: r
    };
  }
  function qo(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function ko(e, t, n) {
    var o;
    if (!((o = e.subRows) != null && o.length)) return false;
    let r = true, i = false;
    return e.subRows.forEach((s) => {
      if (!(i && !r) && (s.getCanSelect() && (qo(s, t) ? i = true : r = false), s.subRows && s.subRows.length)) {
        const l = ko(s, t);
        l === "all" ? i = true : (l === "some" && (i = true), r = false);
      }
    }), r ? "all" : i ? "some" : false;
  }
  const To = /([0-9]+)/gm, bd = (e, t, n) => Ii(jt(e.getValue(n)).toLowerCase(), jt(t.getValue(n)).toLowerCase()), xd = (e, t, n) => Ii(jt(e.getValue(n)), jt(t.getValue(n))), wd = (e, t, n) => Yo(jt(e.getValue(n)).toLowerCase(), jt(t.getValue(n)).toLowerCase()), Cd = (e, t, n) => Yo(jt(e.getValue(n)), jt(t.getValue(n))), _d = (e, t, n) => {
    const o = e.getValue(n), r = t.getValue(n);
    return o > r ? 1 : o < r ? -1 : 0;
  }, Sd = (e, t, n) => Yo(e.getValue(n), t.getValue(n));
  function Yo(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function jt(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function Ii(e, t) {
    const n = e.split(To).filter(Boolean), o = t.split(To).filter(Boolean);
    for (; n.length && o.length; ) {
      const r = n.shift(), i = o.shift(), s = parseInt(r, 10), l = parseInt(i, 10), a = [
        s,
        l
      ].sort();
      if (isNaN(a[0])) {
        if (r > i) return 1;
        if (i > r) return -1;
        continue;
      }
      if (isNaN(a[1])) return isNaN(s) ? -1 : 1;
      if (s > l) return 1;
      if (l > s) return -1;
    }
    return n.length - o.length;
  }
  const an = {
    alphanumeric: bd,
    alphanumericCaseSensitive: xd,
    text: wd,
    textCaseSensitive: Cd,
    datetime: _d,
    basic: Sd
  }, jd = {
    getInitialState: (e) => ({
      sorting: [],
      ...e
    }),
    getDefaultColumnDef: () => ({
      sortingFn: "auto",
      sortUndefined: 1
    }),
    getDefaultOptions: (e) => ({
      onSortingChange: Ue("sorting", e),
      isMultiSortEvent: (t) => t.shiftKey
    }),
    createColumn: (e, t) => {
      e.getAutoSortingFn = () => {
        const n = t.getFilteredRowModel().flatRows.slice(10);
        let o = false;
        for (const r of n) {
          const i = r == null ? void 0 : r.getValue(e.id);
          if (Object.prototype.toString.call(i) === "[object Date]") return an.datetime;
          if (typeof i == "string" && (o = true, i.split(To).length > 1)) return an.alphanumeric;
        }
        return o ? an.text : an.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, o;
        if (!e) throw new Error();
        return ro(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : an[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, o) => {
        const r = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
        t.setSorting((s) => {
          const l = s == null ? void 0 : s.find((f) => f.id === e.id), a = s == null ? void 0 : s.findIndex((f) => f.id === e.id);
          let d = [], u, p = i ? n : r === "desc";
          if (s != null && s.length && e.getCanMultiSort() && o ? l ? u = "toggle" : u = "add" : s != null && s.length && a !== s.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (i || r || (u = "remove")), u === "add") {
            var g;
            d = [
              ...s,
              {
                id: e.id,
                desc: p
              }
            ], d.splice(0, d.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else u === "toggle" ? d = s.map((f) => f.id === e.id ? {
            ...f,
            desc: p
          } : f) : u === "remove" ? d = s.filter((f) => f.id !== e.id) : d = [
            {
              id: e.id,
              desc: p
            }
          ];
          return d;
        });
      }, e.getFirstSortDir = () => {
        var n, o;
        return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
      }, e.getNextSortingOrder = (n) => {
        var o, r;
        const i = e.getFirstSortDir(), s = e.getIsSorted();
        return s ? s !== i && ((o = t.options.enableSortingRemoval) == null || o) && (!(n && (r = t.options.enableMultiRemove) != null) || r) ? false : s === "desc" ? "asc" : "desc" : i;
      }, e.getCanSort = () => {
        var n, o;
        return ((n = e.columnDef.enableSorting) != null ? n : true) && ((o = t.options.enableSorting) != null ? o : true) && !!e.accessorFn;
      }, e.getCanMultiSort = () => {
        var n, o;
        return (n = (o = e.columnDef.enableMultiSort) != null ? o : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
      }, e.getIsSorted = () => {
        var n;
        const o = (n = t.getState().sorting) == null ? void 0 : n.find((r) => r.id === e.id);
        return o ? o.desc ? "desc" : "asc" : false;
      }, e.getSortIndex = () => {
        var n, o;
        return (n = (o = t.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
      }, e.clearSorting = () => {
        t.setSorting((n) => n != null && n.length ? n.filter((o) => o.id !== e.id) : []);
      }, e.getToggleSortingHandler = () => {
        const n = e.getCanSort();
        return (o) => {
          n && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(o) : false));
        };
      };
    },
    createTable: (e) => {
      e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
        var n, o;
        e.setSorting(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.sorting) != null ? n : []);
      }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
    }
  }, Rd = [
    qu,
    pd,
    ld,
    ad,
    Yu,
    Ju,
    fd,
    gd,
    jd,
    id,
    hd,
    md,
    yd,
    vd,
    ud
  ];
  function Md(e) {
    var t, n;
    const o = [
      ...Rd,
      ...(t = e._features) != null ? t : []
    ];
    let r = {
      _features: o
    };
    const i = r._features.reduce((g, f) => Object.assign(g, f.getDefaultOptions == null ? void 0 : f.getDefaultOptions(r)), {}), s = (g) => r.options.mergeOptions ? r.options.mergeOptions(i, g) : {
      ...i,
      ...g
    };
    let a = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    r._features.forEach((g) => {
      var f;
      a = (f = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? f : a;
    });
    const d = [];
    let u = false;
    const p = {
      _features: o,
      options: {
        ...i,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        d.push(g), u || (u = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          u = false;
        }).catch((f) => setTimeout(() => {
          throw f;
        })));
      },
      reset: () => {
        r.setState(r.initialState);
      },
      setOptions: (g) => {
        const f = St(g, r.options);
        r.options = s(f);
      },
      getState: () => r.options.state,
      setState: (g) => {
        r.options.onStateChange == null || r.options.onStateChange(g);
      },
      _getRowId: (g, f, h) => {
        var m;
        return (m = r.options.getRowId == null ? void 0 : r.options.getRowId(g, f, h)) != null ? m : `${h ? [
          h.id,
          f
        ].join(".") : f}`;
      },
      getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
      getRowModel: () => r.getPaginationRowModel(),
      getRow: (g, f) => {
        let h = (f ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[g];
        if (!h && (h = r.getCoreRowModel().rowsById[g], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: L(() => [
        r.options.defaultColumn
      ], (g) => {
        var f;
        return g = (f = g) != null ? f : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, v;
            return (m = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
          },
          ...r._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, V(e, "debugColumns")),
      _getColumnDefs: () => r.options.columns,
      getAllColumns: L(() => [
        r._getColumnDefs()
      ], (g) => {
        const f = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((b) => {
            const C = Uu(r, b, v, m), _ = b;
            return C.columns = _.columns ? f(_.columns, C, v + 1) : [], C;
          });
        };
        return f(g);
      }, V(e, "debugColumns")),
      getAllFlatColumns: L(() => [
        r.getAllColumns()
      ], (g) => g.flatMap((f) => f.getFlatColumns()), V(e, "debugColumns")),
      _getAllFlatColumnsById: L(() => [
        r.getAllFlatColumns()
      ], (g) => g.reduce((f, h) => (f[h.id] = h, f), {}), V(e, "debugColumns")),
      getAllLeafColumns: L(() => [
        r.getAllColumns(),
        r._getOrderColumnsFn()
      ], (g, f) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return f(h);
      }, V(e, "debugColumns")),
      getColumn: (g) => r._getAllFlatColumnsById()[g]
    };
    Object.assign(r, p);
    for (let g = 0; g < r._features.length; g++) {
      const f = r._features[g];
      f == null || f.createTable == null || f.createTable(r);
    }
    return r;
  }
  function $d() {
    return (e) => L(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, o = function(r, i, s) {
        i === void 0 && (i = 0);
        const l = [];
        for (let d = 0; d < r.length; d++) {
          const u = Go(e, e._getRowId(r[d], d, s), r[d], d, i, void 0, s == null ? void 0 : s.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(r[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = o(u.originalSubRows, i + 1, u));
          }
        }
        return l;
      };
      return n.rows = o(t), n;
    }, V(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Ad(e) {
    const t = [], n = (o) => {
      var r;
      t.push(o), (r = o.subRows) != null && r.length && o.getIsExpanded() && o.subRows.forEach(n);
    };
    return e.rows.forEach(n), {
      rows: t,
      flatRows: e.flatRows,
      rowsById: e.rowsById
    };
  }
  function Pd(e, t, n) {
    return n.options.filterFromLeafRows ? Id(e, t, n) : Fd(e, t, n);
  }
  function Id(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var p;
        let f = a[g];
        const h = Go(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
        if (h.columnFilters = f.columnFilters, (p = f.subRows) != null && p.length && d < s) {
          if (h.subRows = l(f.subRows, d + 1), f = h, t(f) && !h.subRows.length) {
            u.push(f), i[f.id] = f, r.push(f);
            continue;
          }
          if (t(f) || h.subRows.length) {
            u.push(f), i[f.id] = f, r.push(f);
            continue;
          }
        } else f = h, t(f) && (u.push(f), i[f.id] = f, r.push(f));
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: i
    };
  }
  function Fd(e, t, n) {
    var o;
    const r = [], i = {}, s = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let f = a[g];
        if (t(f)) {
          var p;
          if ((p = f.subRows) != null && p.length && d < s) {
            const m = Go(n, f.id, f.original, f.index, f.depth, void 0, f.parentId);
            m.subRows = l(f.subRows, d + 1), f = m;
          }
          u.push(f), r.push(f), i[f.id] = f;
        }
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: r,
      rowsById: i
    };
  }
  function zd() {
    return (e) => L(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, o) => {
      if (!t.rows.length || !(n != null && n.length) && !o) {
        for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
        return t;
      }
      const r = [], i = [];
      (n ?? []).forEach((g) => {
        var f;
        const h = e.getColumn(g.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && r.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (f = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? f : g.value
        });
      });
      const s = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      o && l && a.length && (s.push("__global__"), a.forEach((g) => {
        var f;
        i.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (f = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(o)) != null ? f : o
        });
      }));
      let d, u;
      for (let g = 0; g < t.flatRows.length; g++) {
        const f = t.flatRows[g];
        if (f.columnFilters = {}, r.length) for (let h = 0; h < r.length; h++) {
          d = r[h];
          const m = d.id;
          f.columnFilters[m] = d.filterFn(f, m, d.resolvedValue, (v) => {
            f.columnFiltersMeta[m] = v;
          });
        }
        if (i.length) {
          for (let h = 0; h < i.length; h++) {
            u = i[h];
            const m = u.id;
            if (u.filterFn(f, m, u.resolvedValue, (v) => {
              f.columnFiltersMeta[m] = v;
            })) {
              f.columnFilters.__global__ = true;
              break;
            }
          }
          f.columnFilters.__global__ !== true && (f.columnFilters.__global__ = false);
        }
      }
      const p = (g) => {
        for (let f = 0; f < s.length; f++) if (g.columnFilters[s[f]] === false) return false;
        return true;
      };
      return Pd(t.rows, p, e);
    }, V(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function kd(e) {
    return (t) => L(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, o) => {
      if (!o.rows.length) return o;
      const { pageSize: r, pageIndex: i } = n;
      let { rows: s, flatRows: l, rowsById: a } = o;
      const d = r * i, u = d + r;
      s = s.slice(d, u);
      let p;
      t.options.paginateExpandedRows ? p = {
        rows: s,
        flatRows: l,
        rowsById: a
      } : p = Ad({
        rows: s,
        flatRows: l,
        rowsById: a
      }), p.flatRows = [];
      const g = (f) => {
        p.flatRows.push(f), f.subRows.length && f.subRows.forEach(g);
      };
      return p.rows.forEach(g), p;
    }, V(t.options, "debugTable"));
  }
  function Td() {
    return (e) => L(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const o = e.getState().sorting, r = [], i = o.filter((a) => {
        var d;
        return (d = e.getColumn(a.id)) == null ? void 0 : d.getCanSort();
      }), s = {};
      i.forEach((a) => {
        const d = e.getColumn(a.id);
        d && (s[a.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (a) => {
        const d = a.map((u) => ({
          ...u
        }));
        return d.sort((u, p) => {
          for (let f = 0; f < i.length; f += 1) {
            var g;
            const h = i[f], m = s[h.id], v = m.sortUndefined, b = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let C = 0;
            if (v) {
              const _ = u.getValue(h.id), w = p.getValue(h.id), S = _ === void 0, R = w === void 0;
              if (S || R) {
                if (v === "first") return S ? -1 : 1;
                if (v === "last") return S ? 1 : -1;
                C = S && R ? 0 : S ? v : -v;
              }
            }
            if (C === 0 && (C = m.sortingFn(u, p, h.id)), C !== 0) return b && (C *= -1), m.invertSorting && (C *= -1), C;
          }
          return u.index - p.index;
        }), d.forEach((u) => {
          var p;
          r.push(u), (p = u.subRows) != null && p.length && (u.subRows = l(u.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: r,
        rowsById: n.rowsById
      };
    }, V(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function cn(e, t) {
    return e ? Dd(e) ? y.createElement(e, t) : e : null;
  }
  function Dd(e) {
    return Ed(e) || typeof e == "function" || Od(e);
  }
  function Ed(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function Od(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Nd(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Md(t)
    })), [o, r] = y.useState(() => n.current.initialState);
    return n.current.setOptions((i) => ({
      ...i,
      ...e,
      state: {
        ...o,
        ...e.state
      },
      onStateChange: (s) => {
        r(s), e.onStateChange == null || e.onStateChange(s);
      }
    })), n.current;
  }
  function Bt(e, t, n) {
    let o = n.initialDeps ?? [], r, i = true;
    function s() {
      var l, a, d;
      let u;
      n.key && ((l = n.debug) != null && l.call(n)) && (u = Date.now());
      const p = e();
      if (!(p.length !== o.length || p.some((h, m) => o[m] !== h))) return r;
      o = p;
      let f;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (f = Date.now()), r = t(...p), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, v = m / 16, b = (C, _) => {
          for (C = String(C); C.length < _; ) C = " " + C;
          return C;
        };
        console.info(`%c\u23F1 ${b(m, 5)} /${b(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * v, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(i && n.skipInitialOnChange) && n.onChange(r), i = false, r;
    }
    return s.updateDeps = (l) => {
      o = l;
    }, s;
  }
  function Tr(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const Ld = (e, t) => Math.abs(e - t) < 1.01, Vd = (e, t, n) => {
    let o;
    return function(...r) {
      e.clearTimeout(o), o = e.setTimeout(() => t.apply(this, r), n);
    };
  }, Dr = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Hd = (e) => e, Bd = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), o = [];
    for (let r = t; r <= n; r++) o.push(r);
    return o;
  }, Wd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    const r = (s) => {
      const { width: l, height: a } = s;
      t({
        width: Math.round(l),
        height: Math.round(a)
      });
    };
    if (r(Dr(n)), !o.ResizeObserver) return () => {
    };
    const i = new o.ResizeObserver((s) => {
      const l = () => {
        const a = s[0];
        if (a == null ? void 0 : a.borderBoxSize) {
          const d = a.borderBoxSize[0];
          if (d) {
            r({
              width: d.inlineSize,
              height: d.blockSize
            });
            return;
          }
        }
        r(Dr(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return i.observe(n, {
      box: "border-box"
    }), () => {
      i.unobserve(n);
    };
  }, Er = {
    passive: true
  }, Or = typeof window > "u" ? true : "onscrollend" in window, Gd = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const o = e.targetWindow;
    if (!o) return;
    let r = 0;
    const i = e.options.useScrollendEvent && Or ? () => {
    } : Vd(o, () => {
      t(r, false);
    }, e.options.isScrollingResetDelay), s = (u) => () => {
      const { horizontal: p, isRtl: g } = e.options;
      r = p ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, i(), t(r, u);
    }, l = s(true), a = s(false);
    n.addEventListener("scroll", l, Er);
    const d = e.options.useScrollendEvent && Or;
    return d && n.addEventListener("scrollend", a, Er), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Ud = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const o = t.borderBoxSize[0];
      if (o) return Math.round(o[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, qd = (e, { adjustments: t = 0, behavior: n }, o) => {
    var r, i;
    const s = e + t;
    (i = (r = o.scrollElement) == null ? void 0 : r.scrollTo) == null || i.call(r, {
      [o.options.horizontal ? "left" : "top"]: s,
      behavior: n
    });
  };
  class Yd {
    constructor(t) {
      this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.currentScrollToIndex = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
        let n = null;
        const o = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((r) => {
          r.forEach((i) => {
            const s = () => {
              this._measureElement(i.target, i);
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
          });
        }));
        return {
          disconnect: () => {
            var r;
            (r = o()) == null || r.disconnect(), n = null;
          },
          observe: (r) => {
            var i;
            return (i = o()) == null ? void 0 : i.observe(r, {
              box: "border-box"
            });
          },
          unobserve: (r) => {
            var i;
            return (i = o()) == null ? void 0 : i.unobserve(r);
          }
        };
      })(), this.range = null, this.setOptions = (n) => {
        Object.entries(n).forEach(([o, r]) => {
          typeof r > "u" && delete n[o];
        }), this.options = {
          debug: false,
          initialOffset: 0,
          overscan: 1,
          paddingStart: 0,
          paddingEnd: 0,
          scrollPaddingStart: 0,
          scrollPaddingEnd: 0,
          horizontal: false,
          getItemKey: Hd,
          rangeExtractor: Bd,
          onChange: () => {
          },
          measureElement: Ud,
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
        var o, r;
        (r = (o = this.options).onChange) == null || r.call(o, this, n);
      }, this.maybeNotify = Bt(() => (this.calculateRange(), [
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
        const o = this.options.enabled ? this.options.getScrollElement() : null;
        if (this.scrollElement !== o) {
          if (this.cleanup(), !o) {
            this.maybeNotify();
            return;
          }
          this.scrollElement = o, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((n = this.scrollElement) == null ? void 0 : n.window) ?? null, this.elementsCache.forEach((r) => {
            this.observer.observe(r);
          }), this.unsubs.push(this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })), this.unsubs.push(this.options.observeElementOffset(this, (r, i) => {
            this.scrollAdjustments = 0, this.scrollDirection = i ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset = r, this.isScrolling = i, this.maybeNotify();
          })), this._scrollToOffset(this.getScrollOffset(), {
            adjustments: void 0,
            behavior: void 0
          });
        }
      }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (n, o) => {
        const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
        for (let s = o - 1; s >= 0; s--) {
          const l = n[s];
          if (r.has(l.lane)) continue;
          const a = i.get(l.lane);
          if (a == null || l.end > a.end ? i.set(l.lane, l) : l.end < a.end && r.set(l.lane, true), r.size === this.options.lanes) break;
        }
        return i.size === this.options.lanes ? Array.from(i.values()).sort((s, l) => s.end === l.end ? s.index - l.index : s.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = Bt(() => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes
      ], (n, o, r, i, s, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: o,
        scrollMargin: r,
        getItemKey: i,
        enabled: s,
        lanes: l
      }), {
        key: false
      }), this.getMeasurements = Bt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: o, scrollMargin: r, getItemKey: i, enabled: s, lanes: l }, a) => {
        if (!s) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const u = this.measurementsCache.slice(0, d), p = new Array(l).fill(void 0);
        for (let g = 0; g < d; g++) {
          const f = u[g];
          f && (p[f.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const f = i(g), h = this.laneAssignments.get(g);
          let m, v;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const w = p[m], S = w !== void 0 ? u[w] : void 0;
            v = S ? S.end + this.options.gap : o + r;
          } else {
            const w = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            v = w ? w.end + this.options.gap : o + r, m = w ? w.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const b = a.get(f), C = typeof b == "number" ? b : this.options.estimateSize(g), _ = v + C;
          u[g] = {
            index: g,
            start: v,
            size: C,
            end: _,
            key: f,
            lane: m
          }, p[m] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = Bt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, o, r, i) => this.range = n.length > 0 && o > 0 ? Jd({
        measurements: n,
        outerSize: o,
        scrollOffset: r,
        lanes: i
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = Bt(() => {
        let n = null, o = null;
        const r = this.calculateRange();
        return r && (n = r.startIndex, o = r.endIndex), this.maybeNotify.updateDeps([
          this.isScrolling,
          n,
          o
        ]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          o
        ];
      }, (n, o, r, i, s) => i === null || s === null ? [] : n({
        startIndex: i,
        endIndex: s,
        overscan: o,
        count: r
      }), {
        key: false,
        debug: () => this.options.debug
      }), this.indexFromElement = (n) => {
        const o = this.options.indexAttribute, r = n.getAttribute(o);
        return r ? parseInt(r, 10) : (console.warn(`Missing attribute name '${o}={index}' on measured element.`), -1);
      }, this._measureElement = (n, o) => {
        const r = this.indexFromElement(n), i = this.measurementsCache[r];
        if (!i) return;
        const s = i.key, l = this.elementsCache.get(s);
        l !== n && (l && this.observer.unobserve(l), this.observer.observe(n), this.elementsCache.set(s, n)), n.isConnected && this.resizeItem(r, this.options.measureElement(n, o, this));
      }, this.resizeItem = (n, o) => {
        const r = this.measurementsCache[n];
        if (!r) return;
        const i = this.itemSizeCache.get(r.key) ?? r.size, s = o - i;
        s !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, s, this) : r.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
          adjustments: this.scrollAdjustments += s,
          behavior: void 0
        }), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, o)), this.notify(false));
      }, this.measureElement = (n) => {
        if (!n) {
          this.elementsCache.forEach((o, r) => {
            o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(r));
          });
          return;
        }
        this._measureElement(n, void 0);
      }, this.getVirtualItems = Bt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, o) => {
        const r = [];
        for (let i = 0, s = n.length; i < s; i++) {
          const l = n[i], a = o[l];
          r.push(a);
        }
        return r;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const o = this.getMeasurements();
        if (o.length !== 0) return Tr(o[Fi(0, o.length - 1, (r) => Tr(o[r]).start, n)]);
      }, this.getMaxScrollOffset = () => {
        if (!this.scrollElement) return 0;
        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
        {
          const n = this.scrollElement.document.documentElement;
          return this.options.horizontal ? n.scrollWidth - this.scrollElement.innerWidth : n.scrollHeight - this.scrollElement.innerHeight;
        }
      }, this.getOffsetForAlignment = (n, o, r = 0) => {
        if (!this.scrollElement) return 0;
        const i = this.getSize(), s = this.getScrollOffset();
        o === "auto" && (o = n >= s + i ? "end" : "start"), o === "center" ? n += (r - i) / 2 : o === "end" && (n -= i);
        const l = this.getMaxScrollOffset();
        return Math.max(Math.min(l, n), 0);
      }, this.getOffsetForIndex = (n, o = "auto") => {
        n = Math.max(0, Math.min(n, this.options.count - 1));
        const r = this.measurementsCache[n];
        if (!r) return;
        const i = this.getSize(), s = this.getScrollOffset();
        if (o === "auto") if (r.end >= s + i - this.options.scrollPaddingEnd) o = "end";
        else if (r.start <= s + this.options.scrollPaddingStart) o = "start";
        else return [
          s,
          o
        ];
        if (o === "end" && n === this.options.count - 1) return [
          this.getMaxScrollOffset(),
          o
        ];
        const l = o === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
        return [
          this.getOffsetForAlignment(l, o, r.size),
          o
        ];
      }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: o = "start", behavior: r } = {}) => {
        r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getOffsetForAlignment(n, o), {
          adjustments: void 0,
          behavior: r
        });
      }, this.scrollToIndex = (n, { align: o = "auto", behavior: r } = {}) => {
        r === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), n = Math.max(0, Math.min(n, this.options.count - 1)), this.currentScrollToIndex = n;
        let i = 0;
        const s = 10, l = (d) => {
          if (!this.targetWindow) return;
          const u = this.getOffsetForIndex(n, d);
          if (!u) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [p, g] = u;
          this._scrollToOffset(p, {
            adjustments: void 0,
            behavior: r
          }), this.targetWindow.requestAnimationFrame(() => {
            const f = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              Ld(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(f) : f();
          });
        }, a = (d) => {
          this.targetWindow && this.currentScrollToIndex === n && (i++, i < s ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(`Failed to scroll to index ${n} after ${s} attempts.`));
        };
        l(o);
      }, this.scrollBy = (n, { behavior: o } = {}) => {
        o === "smooth" && this.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."), this._scrollToOffset(this.getScrollOffset() + n, {
          adjustments: void 0,
          behavior: o
        });
      }, this.getTotalSize = () => {
        var n;
        const o = this.getMeasurements();
        let r;
        if (o.length === 0) r = this.options.paddingStart;
        else if (this.options.lanes === 1) r = ((n = o[o.length - 1]) == null ? void 0 : n.end) ?? 0;
        else {
          const i = Array(this.options.lanes).fill(null);
          let s = o.length - 1;
          for (; s >= 0 && i.some((l) => l === null); ) {
            const l = o[s];
            i[l.lane] === null && (i[l.lane] = l.end), s--;
          }
          r = Math.max(...i.filter((l) => l !== null));
        }
        return Math.max(r - this.options.scrollMargin + this.options.paddingEnd, 0);
      }, this._scrollToOffset = (n, { adjustments: o, behavior: r }) => {
        this.options.scrollToFn(n, {
          behavior: r,
          adjustments: o
        }, this);
      }, this.measure = () => {
        this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
      }, this.setOptions(t);
    }
  }
  const Fi = (e, t, n, o) => {
    for (; e <= t; ) {
      const r = (e + t) / 2 | 0, i = n(r);
      if (i < o) e = r + 1;
      else if (i > o) t = r - 1;
      else return r;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Jd({ measurements: e, outerSize: t, scrollOffset: n, lanes: o }) {
    const r = e.length - 1, i = (a) => e[a].start;
    if (e.length <= o) return {
      startIndex: 0,
      endIndex: r
    };
    let s = Fi(0, r, i, n), l = s;
    if (o === 1) for (; l < r && e[l].end < n + t; ) l++;
    else if (o > 1) {
      const a = Array(o).fill(0);
      for (; l < r && a.some((u) => u < n + t); ) {
        const u = e[l];
        a[u.lane] = u.end, l++;
      }
      const d = Array(o).fill(n + t);
      for (; s >= 0 && d.some((u) => u >= n); ) {
        const u = e[s];
        d[u.lane] = u.start, s--;
      }
      s = Math.max(0, s - s % o), l = Math.min(r, l + (o - 1 - l % o));
    }
    return {
      startIndex: s,
      endIndex: l
    };
  }
  const Nr = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function Kd({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], o = {
      ...t,
      onChange: (i, s) => {
        var l;
        e && s ? Yi.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, i, s);
      }
    }, [r] = y.useState(() => new Yd(o));
    return r.setOptions(o), Nr(() => r._didMount(), []), Nr(() => r._willUpdate()), r;
  }
  function Xd(e) {
    return Kd({
      observeElementRect: Wd,
      observeElementOffset: Gd,
      scrollToFn: qd,
      ...e
    });
  }
  function Qd(e, t) {
    var _a2, _b;
    let n = e != null ? typeof e == "object" ? JSON.stringify(e) : String(e) : "";
    if (t == null ? void 0 : t.format) switch (t.format.type) {
      case "number":
        (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (n = yi(Number(e), {
          decimals: t.format.numberDecimals,
          prefix: t.format.numberPrefix,
          suffix: t.format.numberSuffix,
          thousands: t.format.numberThousandsSeparator
        }));
        break;
      case "date":
        n = bi(e, t.format.dateFormat, t.format.dateInputFormat);
        break;
      case "boolean":
        n = Ro(e, t.format.booleanTrue, t.format.booleanFalse);
        break;
      case "string":
        n = xi(n, t.format);
        break;
    }
    if (!t) return {
      displayValue: n,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", r = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? vi(e, t.format.dateInputFormat) : e, i = {}, s = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const l of t.cellStyle) if (l.logic && gu(l.logic, r)) {
        if (l.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const a = zt(l.backgroundColor);
          a ? i.background = a : i.backgroundColor = l.backgroundColor;
        }
        if (l.textColor && !("color" in s) && !("background" in s)) {
          const a = zt(l.textColor);
          a ? (s.background = a, s.backgroundClip = "text", s.WebkitBackgroundClip = "text", s.color = "transparent") : s.color = l.textColor;
        }
        if (l.fontWeight && !s.fontWeight && (s.fontWeight = l.fontWeight), l.fontStyle && !s.fontStyle && (s.fontStyle = l.fontStyle), o) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !s.fontWeight && (s.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !s.fontStyle && (s.fontStyle = "italic"), t.format.stringFontSize && !s.fontSize && (s.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in s) && !("background" in s) && (s.color = t.format.stringTextColor)), {
      displayValue: n,
      textSx: s,
      bgSx: i
    };
  }
  function Lr({ value: e, config: t }) {
    const { displayValue: n, textSx: o, bgSx: r } = y.useMemo(() => Qd(e, t), [
      e,
      t
    ]);
    return c.jsx(U, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        ...r
      },
      children: c.jsx(F, {
        variant: "body2",
        component: "span",
        noWrap: true,
        title: n,
        sx: {
          width: "100%",
          lineHeight: "inherit",
          ...o
        },
        children: n
      })
    });
  }
  function Vr(e) {
    const t = [
      10,
      25,
      50,
      100
    ];
    if (!e) return t;
    const n = e.split(",").map((o) => parseInt(o.trim(), 10)).filter((o) => !isNaN(o) && o > 0);
    return n.length > 0 ? [
      ...new Set(n)
    ].sort((o, r) => o - r) : t;
  }
  function Zd(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: o, tableRowSelection: r, tablePageSize: i, tablePageSizeOptions: s, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: u, gridRowsLength: p } = e, [g, f] = y.useState([]);
    y.useEffect(() => {
      d || f([]);
    }, [
      d
    ]);
    const [h, m] = y.useState([]);
    y.useEffect(() => {
      a || m([]);
    }, [
      a
    ]);
    const [v, b] = y.useState("");
    y.useEffect(() => {
      u || b("");
    }, [
      u
    ]);
    const [C, _] = y.useState({}), [w, S] = y.useState(() => {
      if (o) return {};
      const A = `jtc_col_sizes_${t}`;
      try {
        const T = localStorage.getItem(A);
        if (T) return JSON.parse(T);
      } catch {
      }
      const B = {};
      return n.forEach((T) => {
        T.width && (B[T.path] = T.width);
      }), r === true && (B.__select__ = 48), B;
    });
    y.useEffect(() => {
      if (!o) try {
        localStorage.setItem(`jtc_col_sizes_${t}`, JSON.stringify(w));
      } catch {
      }
    }, [
      w,
      t,
      o
    ]);
    const R = y.useMemo(() => Number(i) || 25, [
      i
    ]), [P, D] = y.useState({
      pageIndex: 0,
      pageSize: R
    });
    y.useEffect(() => {
      D((A) => A.pageSize === R ? A : {
        pageIndex: 0,
        pageSize: R
      });
    }, [
      R
    ]);
    const z = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(p, 1)
    } : P, [
      l,
      p,
      P
    ]), $ = y.useMemo(() => Vr(s), [
      s
    ]);
    return {
      sorting: g,
      columnFilters: h,
      globalFilter: v,
      rowSelection: C,
      columnSizing: w,
      pagination: P,
      effectivePagination: z,
      setSorting: f,
      setColumnFilters: m,
      setGlobalFilter: b,
      setRowSelection: _,
      setColumnSizing: S,
      setPagination: D,
      pageSizeOptions: $,
      parsePageSizeOptions: Vr
    };
  }
  function Hr(e, t) {
    if (e == null) return 0;
    if (typeof e == "number") return e >= 1e11 ? e : e * 1e3;
    if (typeof e == "string") {
      const n = vi(e, t);
      return n ? new Date(n).getTime() : 0;
    }
    return 0;
  }
  function Br(e) {
    return (t, n, o) => Hr(t.getValue(o), e) - Hr(n.getValue(o), e);
  }
  function ep(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: o, renderConfiguredCell: r, renderAutoDetectedCell: i, renderSelectionHeader: s, renderSelectionCell: l } = e, a = new Map(n.map((p) => [
      p.path,
      p.dateFormat
    ])), d = o.tableRowSelection && s && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      header: ({ table: p }) => s(p),
      cell: ({ row: p }) => l(p),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let u;
    return t.length > 0 ? u = t.filter((p) => p.visible).map((p) => {
      var _a2, _b;
      const g = ((_a2 = p.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(p.path), f = ((_b = p.format) == null ? void 0 : _b.type) === "date";
      return {
        id: p.path,
        size: p.width ?? 150,
        accessorFn: (m) => m[p.path],
        header: p.headerName || p.path,
        enableSorting: p.sortable ?? o.tableSorting !== false,
        enableColumnFilter: p.filterable ?? o.tableFiltering === true,
        ...f && {
          sortingFn: Br(g)
        },
        cell: ({ getValue: m }) => r(m(), p),
        meta: {
          align: p.align || "left",
          width: p.width
        }
      };
    }) : u = n.map((p) => {
      const g = p.type === "date" && p.dateFormat, f = p.dateFormat;
      return {
        id: p.path,
        size: 150,
        accessorFn: (m) => m[p.path],
        header: p.path.split(".").pop() || p.path,
        enableSorting: o.tableSorting !== false,
        enableColumnFilter: o.tableFiltering === true,
        ...g && {
          sortingFn: Br(f)
        },
        cell: ({ getValue: m }) => i(m()),
        meta: {
          align: "left"
        }
      };
    }), d ? [
      d,
      ...u
    ] : u;
  }
  const tp = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, np = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, op = (e) => {
    const { children: t, value: n, ...o } = e;
    return c.jsx(je, {
      ...o,
      value: n,
      children: c.jsx(F, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, rp = () => {
    var _a2, _b;
    const e = y.useContext(Ji), { widget: { data: { oidObject: t } }, widget: n, id: o } = e, { data: r } = Ki("oid"), i = os("oid"), s = Sn(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (i == null) return [];
      let M;
      if (typeof i == "string") try {
        M = JSON.parse(i);
      } catch {
        return [];
      }
      else M = i;
      return Array.isArray(M) ? M : typeof M == "object" && M !== null ? [
        M
      ] : [];
    }, [
      i
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: p, rows: g } = Nu(d, u), f = y.useMemo(() => mi(n.data.columnConfig), [
      n.data.columnConfig
    ]), h = n.data.tableDensity || "standard", m = Number(n.data.tableRowHeight) || tp[h] || 52, v = Number(n.data.tableHeaderHeight) || np[h] || 56, b = y.useMemo(() => g.map((M, O) => ({
      __id: O,
      ...M
    })), [
      g
    ]), C = y.useMemo(() => ep({
      columnConfig: f,
      analysisColumns: p,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: n.data.tableFiltering === true,
        tableRowSelection: n.data.tableRowSelection === true
      },
      renderConfiguredCell: (M, O) => c.jsx(Lr, {
        value: M,
        config: O
      }),
      renderAutoDetectedCell: (M) => c.jsx(Lr, {
        value: M
      }),
      renderSelectionHeader: (M) => c.jsx(xn, {
        size: "small",
        indeterminate: M.getIsSomePageRowsSelected(),
        checked: M.getIsAllPageRowsSelected(),
        onChange: M.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (M) => c.jsx(xn, {
        size: "small",
        checked: M.getIsSelected(),
        onChange: M.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      f,
      p,
      n.data.tableSorting,
      n.data.tableFiltering,
      n.data.tableRowSelection
    ]), _ = n.data.tableAutoSize === true, { sorting: w, columnFilters: S, globalFilter: R, rowSelection: P, columnSizing: D, pagination: z, effectivePagination: $, setSorting: A, setColumnFilters: B, setGlobalFilter: T, setRowSelection: Y, setColumnSizing: J, setPagination: E, pageSizeOptions: k } = Zd({
      widgetId: o,
      columnConfig: f,
      tableAutoSize: _,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: n.data.tableFiltering === true,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: b.length
    }), j = Nd({
      data: b,
      columns: C,
      getCoreRowModel: $d(),
      getSortedRowModel: Td(),
      getFilteredRowModel: zd(),
      getPaginationRowModel: kd(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: "includesString",
      columnResizeMode: "onChange",
      enableColumnResizing: !_,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3
      },
      state: {
        sorting: w,
        columnFilters: S,
        globalFilter: R,
        pagination: $,
        rowSelection: P,
        columnSizing: D
      },
      onSortingChange: A,
      onColumnFiltersChange: B,
      onGlobalFilterChange: T,
      onPaginationChange: n.data.tablePagination !== false ? E : void 0,
      onRowSelectionChange: Y,
      onColumnSizingChange: J,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: n.data.tableFiltering === true,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), I = y.useRef(null), Z = y.useRef(null), [G, ae] = y.useState({}), [ee, ge] = y.useState(null), re = y.useRef(null), [N, W] = y.useState(void 0), [ie, $e] = y.useState(void 0), Ee = y.useCallback((M, O) => {
      var _a3;
      re.current = M;
      const Q = M.id, we = w.find((qe) => qe.id === Q), Ie = (_a3 = S.find((qe) => qe.id === Q)) == null ? void 0 : _a3.value;
      W(we), $e(Ie), ge(O);
    }, [
      w,
      S
    ]), Re = y.useCallback(() => {
      ge(null);
    }, []);
    y.useEffect(() => {
      if (!_) return;
      const M = Z.current;
      if (!M) return;
      const O = new ResizeObserver(() => {
        const Q = M.querySelector("tr[data-row-index]");
        if (!Q) return;
        const we = Q.querySelectorAll("td"), Ie = j.getHeaderGroups()[0];
        if (!Ie || we.length !== Ie.headers.length) return;
        const qe = {};
        Ie.headers.forEach((en, xt) => {
          const An = we[xt];
          An && (qe[en.id] = An.getBoundingClientRect().width);
        }), ae(qe);
      });
      return O.observe(M), () => O.disconnect();
    }, [
      _,
      j
    ]);
    const de = y.useMemo(() => {
      const M = {
        tableLayout: _ ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) M["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const O = n.data.horizontalCellBorderWidth ?? 1, Q = Pn(n.data.horizontalCellBorderColor);
        M["& .MuiTableCell-root"] = {
          ...M["& .MuiTableCell-root"],
          borderBottom: `${O}px solid`,
          borderBottomColor: Q || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const O = n.data.verticalCellBorderWidth ?? 1, Q = Pn(n.data.verticalCellBorderColor);
        M["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${O}px solid`,
          borderRightColor: Q || "divider"
        };
      }
      return M;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      _
    ]), _e = n.data.tableHeaderBgColor, pe = n.data.tableHeaderTextColor, He = n.data.tableHeaderFontSize, Mt = y.useMemo(() => ({
      height: v,
      whiteSpace: "nowrap",
      ...pe && {
        color: pe
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      v,
      pe,
      He
    ]), rt = y.useMemo(() => ({
      ...pe && {
        color: pe
      },
      ...He && {
        fontSize: `${He}px`
      }
    }), [
      pe,
      He
    ]), at = n.data.noCard === true, ct = n.data.headerBorderWidth ?? 0, Be = Pn(n.data.headerBorderColor), ut = y.useMemo(() => {
      const M = n.data.tableHeaderElevation ?? 6, O = at ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: M > 0 ? s.shadows[M] : "none"
      };
      ct > 0 && (O["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${ct}px`,
        backgroundColor: Be || s.palette.divider,
        pointerEvents: "none"
      });
      const Q = _e ? zt(_e) : null;
      return Q ? {
        ...O,
        background: Q
      } : _e ? {
        ...O,
        backgroundColor: _e
      } : O;
    }, [
      at,
      _e,
      s.shadows,
      s.palette.divider,
      n.data.tableHeaderElevation,
      ct,
      Be
    ]), $t = y.useMemo(() => {
      const M = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, O = n.data.borderWidth, Q = n.data.borderStyle || "solid", we = Pn(n.data.borderColor), Ie = n.data.borderRadius;
      return O && O > 0 && (M.border = `${O}px ${Q}`, M.borderColor = we || "divider"), Ie && (M.borderRadius = Ie), M;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), At = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), it = y.useCallback((M) => _ ? G[M.id] ?? "auto" : M.getSize(), [
      _,
      G
    ]), Pt = y.useMemo(() => ({
      ...n.data.tableCellFontSize && {
        fontSize: `${n.data.tableCellFontSize}px`
      },
      overflow: "hidden",
      height: m,
      maxHeight: m,
      padding: "0 8px",
      verticalAlign: "middle"
    }), [
      n.data.tableCellFontSize,
      m
    ]), dt = n.data.evenRowColor || null, Ze = n.data.oddRowColor || null, It = dt ? zt(dt) : null, vt = Ze ? zt(Ze) : null, Nt = y.useCallback((M) => {
      const O = M % 2 === 0, Q = O ? dt : Ze, we = O ? It : vt;
      if (Q) return we ? {
        background: we
      } : {
        backgroundColor: Q
      };
    }, [
      dt,
      Ze,
      It,
      vt
    ]), Pe = j.getRowModel().rows, bt = Xd({
      count: Pe.length,
      getScrollElement: () => I.current,
      estimateSize: () => m,
      overscan: 25,
      scrollPaddingStart: m
    }), pt = n.data.tableVirtualizeThreshold ?? 50, et = n.data.tablePagination === false && Pe.length > pt ? bt.getVirtualItems() : null, Vt = et && et.length > 0 ? et[0].start : 0, $n = et && et.length > 0 ? bt.getTotalSize() - (et[et.length - 1].end ?? 0) : 0;
    return c.jsxs(Xi, {
      isValidType: a,
      data: r,
      oidValue: i,
      children: [
        c.jsx(Qi, {
          data: r,
          widget: n
        }),
        a && C.length > 0 ? c.jsxs(U, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(U, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(Ae, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: R,
                onChange: (M) => T(M.target.value),
                placeholder: x.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(So, {
                      position: "start",
                      children: c.jsx(hi, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            c.jsx(U, {
              sx: $t,
              children: c.jsx(Ja, {
                ref: I,
                sx: At,
                children: c.jsxs(Da, {
                  size: h === "compact" ? "small" : "medium",
                  sx: de,
                  children: [
                    c.jsxs(ec, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...ut,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: [
                        j.getHeaderGroups().map((M) => c.jsx(Ht, {
                          children: M.headers.map((O) => {
                            const Q = O.column.getCanSort(), we = O.column.getIsSorted(), Ie = O.column.columnDef.meta, qe = O.column.id === "__select__", en = !_;
                            return c.jsxs(tt, {
                              component: "th",
                              colSpan: O.colSpan,
                              align: (Ie == null ? void 0 : Ie.align) || "left",
                              padding: qe ? "checkbox" : "normal",
                              sx: {
                                width: it(O),
                                minWidth: qe ? 48 : 40,
                                position: "relative",
                                ...Mt
                              },
                              children: [
                                qe ? cn(O.column.columnDef.header, O.getContext()) : c.jsxs(U, {
                                  sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: (Ie == null ? void 0 : Ie.align) === "right" ? "flex-end" : (Ie == null ? void 0 : Ie.align) === "center" ? "center" : "space-between",
                                    width: "100%"
                                  },
                                  children: [
                                    Q ? c.jsx(Mc, {
                                      active: we !== false,
                                      direction: we === "desc" ? "desc" : "asc",
                                      onClick: O.column.getToggleSortingHandler(),
                                      children: c.jsx(F, {
                                        variant: "body2",
                                        component: "span",
                                        fontWeight: "medium",
                                        noWrap: true,
                                        sx: rt,
                                        children: cn(O.column.columnDef.header, O.getContext())
                                      })
                                    }) : c.jsx(F, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: rt,
                                      children: cn(O.column.columnDef.header, O.getContext())
                                    }),
                                    n.data.tableColumnMenu !== false && c.jsx(Ne, {
                                      title: x.t("json_table_column_menu"),
                                      children: c.jsx(Se, {
                                        size: "small",
                                        "aria-label": x.t("json_table_column_menu"),
                                        onClick: (xt) => {
                                          xt.stopPropagation(), Ee(O.column, xt.currentTarget);
                                        },
                                        sx: {
                                          ml: 0.5,
                                          opacity: 0.6
                                        },
                                        children: c.jsx(Ac, {
                                          fontSize: "inherit"
                                        })
                                      })
                                    })
                                  ]
                                }),
                                en && O.column.getCanResize() && c.jsx(U, {
                                  className: "resize-handle",
                                  onMouseDown: O.getResizeHandler(),
                                  onTouchStart: O.getResizeHandler(),
                                  onClick: (xt) => xt.stopPropagation(),
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
                                    opacity: O.column.getIsResizing() ? 1 : 0,
                                    bgcolor: O.column.getIsResizing() ? "primary.main" : "divider",
                                    transition: "opacity 0.15s",
                                    "&:hover": {
                                      opacity: 1,
                                      bgcolor: "primary.light"
                                    }
                                  }
                                })
                              ]
                            }, O.id);
                          })
                        }, M.id)),
                        n.data.tableFiltering === true && c.jsx(Ht, {
                          children: (_a2 = j.getHeaderGroups()[0]) == null ? void 0 : _a2.headers.map((M) => {
                            if (M.column.id === "__select__") return c.jsx(tt, {
                              component: "th",
                              colSpan: M.colSpan,
                              padding: "checkbox",
                              sx: {
                                width: it(M),
                                py: 0.5,
                                px: 0.5
                              }
                            }, M.id);
                            if (!M.column.getCanFilter()) return c.jsx(tt, {
                              component: "th",
                              colSpan: M.colSpan,
                              sx: {
                                width: it(M),
                                py: 0.5,
                                px: 0.5
                              }
                            }, M.id);
                            const O = M.column.getFilterValue() ?? "";
                            return c.jsx(tt, {
                              component: "th",
                              colSpan: M.colSpan,
                              sx: {
                                width: it(M),
                                py: 0.5,
                                px: 0.5
                              },
                              children: c.jsx(Ae, {
                                size: "small",
                                variant: "standard",
                                fullWidth: true,
                                value: O,
                                onChange: (Q) => M.column.setFilterValue(Q.target.value || void 0),
                                placeholder: x.t("json_table_filter_placeholder"),
                                slotProps: {
                                  input: {
                                    endAdornment: O ? c.jsx(So, {
                                      position: "end",
                                      children: c.jsx(Ne, {
                                        title: x.t("json_table_filter_clear"),
                                        children: c.jsx(Se, {
                                          size: "small",
                                          onClick: () => M.column.setFilterValue(void 0),
                                          "aria-label": x.t("json_table_filter_clear"),
                                          children: c.jsx(jo, {
                                            fontSize: "inherit"
                                          })
                                        })
                                      })
                                    }) : void 0
                                  }
                                }
                              })
                            }, M.id);
                          })
                        })
                      ]
                    }),
                    c.jsx(Va, {
                      ref: Z,
                      children: et ? c.jsxs(c.Fragment, {
                        children: [
                          Vt > 0 && c.jsx(Ht, {
                            children: c.jsx(tt, {
                              colSpan: C.length,
                              sx: {
                                height: Vt,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          et.map((M) => {
                            const O = Pe[M.index], Q = M.index;
                            return c.jsx(Ht, {
                              "data-row-index": Q,
                              sx: {
                                height: m,
                                ...Nt(Q)
                              },
                              children: O.getVisibleCells().map((we) => {
                                var _a3;
                                const Ie = we.column.id === "__select__";
                                return c.jsx(tt, {
                                  align: ((_a3 = we.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                                  padding: Ie ? "checkbox" : "normal",
                                  sx: Pt,
                                  children: cn(we.column.columnDef.cell, we.getContext())
                                }, we.id);
                              })
                            }, O.id);
                          }),
                          $n > 0 && c.jsx(Ht, {
                            children: c.jsx(tt, {
                              colSpan: C.length,
                              sx: {
                                height: $n,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Pe.map((M, O) => c.jsx(Ht, {
                        "data-row-index": O,
                        sx: {
                          height: m,
                          ...Nt(O)
                        },
                        children: M.getVisibleCells().map((Q) => {
                          var _a3;
                          const we = Q.column.id === "__select__";
                          return c.jsx(tt, {
                            align: ((_a3 = Q.column.columnDef.meta) == null ? void 0 : _a3.align) || "left",
                            padding: we ? "checkbox" : "normal",
                            sx: Pt,
                            children: cn(Q.column.columnDef.cell, Q.getContext())
                          }, Q.id);
                        })
                      }, M.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(vc, {
              component: "div",
              count: j.getFilteredRowModel().rows.length,
              page: z.pageIndex,
              rowsPerPage: z.pageSize,
              rowsPerPageOptions: k,
              onPageChange: (M, O) => E((Q) => ({
                ...Q,
                pageIndex: O
              })),
              onRowsPerPageChange: (M) => E({
                pageIndex: 0,
                pageSize: parseInt(M.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(F, {
                variant: "body2",
                component: "span",
                children: x.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: M, to: O, count: Q }) => c.jsx(F, {
                variant: "body2",
                component: "span",
                children: `${M}\u2013${O} / ${Q}`
              }),
              slots: {
                menuItem: op
              },
              slotProps: {
                select: {
                  renderValue: (M) => c.jsx(F, {
                    variant: "body2",
                    component: "span",
                    children: String(M)
                  })
                }
              }
            }),
            c.jsxs(Zi, {
              anchorEl: ee,
              open: !!ee,
              onClose: Re,
              children: [
                c.jsxs(je, {
                  onClick: () => {
                    re.current && A([
                      {
                        id: re.current.id,
                        desc: false
                      }
                    ]), Re();
                  },
                  children: [
                    c.jsx(gi, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(F, {
                      variant: "body2",
                      children: x.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(je, {
                  onClick: () => {
                    re.current && A([
                      {
                        id: re.current.id,
                        desc: true
                      }
                    ]), Re();
                  },
                  children: [
                    c.jsx(fi, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(F, {
                      variant: "body2",
                      children: x.t("json_table_sort_desc")
                    })
                  ]
                }),
                N && c.jsx(je, {
                  onClick: () => {
                    A([]), Re();
                  },
                  children: c.jsx(F, {
                    variant: "body2",
                    children: x.t("json_table_sort_clear")
                  })
                }),
                n.data.tableFiltering === true && ((_b = re.current) == null ? void 0 : _b.getCanFilter()) === true && ie && c.jsxs(je, {
                  onClick: () => {
                    var _a3;
                    (_a3 = re.current) == null ? void 0 : _a3.setFilterValue(void 0), Re();
                  },
                  children: [
                    c.jsx(jo, {
                      fontSize: "small",
                      sx: {
                        mr: 1
                      }
                    }),
                    c.jsx(F, {
                      variant: "body2",
                      children: x.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            })
          ]
        }) : c.jsx(U, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(F, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? x.t("json_table_no_oid") : a ? f.length > 0 && C.length === 0 ? x.t("json_table_all_columns_hidden") : x.t("json_table_no_data") : x.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, ip = [
    "columnConfig",
    "tableDensity",
    "tableRowHeight",
    "tableHeaderHeight",
    "tableAutoSize",
    "tableHeaderElevation",
    "tablePagination",
    "tablePageSize",
    "tablePageSizeOptions",
    "tableSorting",
    "tableFiltering",
    "tableQuickFilter",
    "tableColumnMenu",
    "tableRowSelection",
    "tableShowCellBorders",
    "tableShowRowBorders",
    "tableHeaderBgColor",
    "tableHeaderTextColor",
    "tableHeaderFontSize",
    "tableStripedColor",
    "tableCellFontSize",
    "tableMaxDepth"
  ];
  Do = class extends x {
    static createObjectFields() {
      const t = es([
        "string",
        "mixed",
        "json"
      ]), n = t.find((o) => o.name === "oid");
      if (n) {
        const o = n, r = o.onChange;
        o.onChange = async (i, s, l, a) => {
          if (!s.oid) {
            for (const d of ip) delete s[d];
            r || l(s);
          }
          r && await r(i, s, l, a);
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
              ...Zo()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Do.createObjectFields(),
              ...Hu()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Zo({
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
      return Do.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, n) {
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
      return ts(this.wrapContent(c.jsx(rp, {})), n);
    }
  };
});
export {
  __tla,
  Do as default
};
