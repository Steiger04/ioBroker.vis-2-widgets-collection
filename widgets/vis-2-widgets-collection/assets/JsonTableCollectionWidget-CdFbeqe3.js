import { a0 as ri, f as $r, g as _e, a as we, u as be, a1 as oi, a2 as si, a3 as on, a4 as Kt, h as Zt, j as c, s as Y, d as le, e as ve, a5 as ho, m as fe, a6 as ms, b as ue, P as nt, B as rr, c as ae, I as Re, Z as G, a7 as Ar, N as Ir, _ as kt, a8 as bn, a9 as ii, aa as li, ab as Jr, i as Te, ac as ys, ad as jn, T as D, r as ai, ae as ci, X as ui, af as di, L as pi, ag as mo, ah as fi, ai as bs, aj as Pr, ak as gi, al as yo, am as hi, V as it, o as L, an as je, G as b, ao as ft, ap as gt, aq as mi, ar as yi, as as bi, D as Fr, w as Ot, at as vi, au as xi, F as xt, C as Ke, av as _i, aw as wi, n as Ci, q as Si, M as Nn, x as ji, y as Ri, A as Mi, z as bo, E as $i, __tla as __tla_0 } from "./useData-BGlxI0R0.js";
import { v as y, a as Ai, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Rn, __tla as __tla_2 } from "./Checkbox-7T_2TVDT.js";
import { D as Kr, a as Xr, b as Qr, __tla as __tla_3 } from "./DialogTitle-BsXaI7Ji.js";
import { B as lt, __tla as __tla_4 } from "./Button-B5WjHJsX.js";
import { S as Ii, __tla as __tla_5 } from "./Slider-DrGlXwcl.js";
import { F as Nt, __tla as __tla_6 } from "./FormControlLabel-DP8WB_ta.js";
import { S as vn, __tla as __tla_7 } from "./Switch-Bi6Hcmtc.js";
import { g as Pi, M as ie, __tla as __tla_8 } from "./MenuItem-D9BFEqur.js";
import { g as Fi, S as ze, __tla as __tla_9 } from "./Stack-BcRoWIAv.js";
import { T as vs, a as or, __tla as __tla_10 } from "./ToggleButtonGroup-D5rbOtOJ.js";
import { C as sr, __tla as __tla_11 } from "./Close-8R9h2z3B.js";
import { u as Ti, __tla as __tla_12 } from "./useOidValue-BrgiAnjE.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_13 } from "./SwitchBase-I9oA3vkp.js";
import { __tla as __tla_14 } from "./listItemTextClasses-N7uw7-qo.js";
let Yr;
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
  function Di(e, t, n, r, o) {
    const [s, i] = y.useState(() => o && n ? n(e).matches : r ? r(e).matches : t);
    return $r(() => {
      if (!n) return;
      const l = n(e), a = () => {
        i(l.matches);
      };
      return a(), l.addEventListener("change", a), () => {
        l.removeEventListener("change", a);
      };
    }, [
      e,
      n
    ]), s;
  }
  const zi = {
    ...Ai
  }, xs = zi.useSyncExternalStore;
  function Ei(e, t, n, r, o) {
    const s = y.useCallback(() => t, [
      t
    ]), i = y.useMemo(() => {
      if (o && n) return () => n(e).matches;
      if (r !== null) {
        const { matches: u } = r(e);
        return () => u;
      }
      return s;
    }, [
      s,
      e,
      r,
      o,
      n
    ]), [l, a] = y.useMemo(() => {
      if (n === null) return [
        s,
        () => () => {
        }
      ];
      const u = n(e);
      return [
        () => u.matches,
        (f) => (u.addEventListener("change", f), () => {
          u.removeEventListener("change", f);
        })
      ];
    }, [
      s,
      n,
      e
    ]);
    return xs(a, l, i);
  }
  function _s(e = {}) {
    const { themeId: t } = e;
    return function(r, o = {}) {
      let s = ri();
      s && t && (s = s[t] || s);
      const i = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: l = false, matchMedia: a = i ? window.matchMedia : null, ssrMatchMedia: d = null, noSsr: u = false } = Fi({
        name: "MuiUseMediaQuery",
        props: o,
        theme: s
      });
      let f = typeof r == "function" ? r(s) : r;
      return f = f.replace(/^@media( ?)/m, ""), f.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (xs !== void 0 ? Ei : Di)(f, l, a, d, u);
    };
  }
  _s();
  function ki(e) {
    return _e("MuiCollapse", e);
  }
  we("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Oi = (e) => {
    const { orientation: t, classes: n } = e, r = {
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
    return ve(r, ki, n);
  }, Ni = Y("div", {
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
  }))), Li = Y("div", {
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
  }), Hi = Y("div", {
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
  }), Tr = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: o, children: s, className: i, collapsedSize: l = "0px", component: a, easing: d, in: u, onEnter: f, onEntered: g, onEntering: p, onExit: h, onExited: m, onExiting: v, orientation: x = "vertical", style: _, timeout: C = oi.standard, TransitionComponent: j = si, ...M } = r, w = {
      ...r,
      orientation: x,
      collapsedSize: l
    }, $ = Oi(w), R = on(), F = Kt(), A = y.useRef(null), P = y.useRef(), q = typeof l == "number" ? `${l}px` : l, k = x === "horizontal", W = k ? "width" : "height", J = y.useRef(null), U = Zt(n, J), E = (O) => (ce) => {
      if (O) {
        const te = J.current;
        ce === void 0 ? O(te) : O(te, ce);
      }
    }, S = () => A.current ? A.current[k ? "clientWidth" : "clientHeight"] : 0, T = E((O, ce) => {
      A.current && k && (A.current.style.position = "absolute"), O.style[W] = q, f && f(O, ce);
    }), N = E((O, ce) => {
      const te = S();
      A.current && k && (A.current.style.position = "");
      const { duration: X, easing: Ee } = ho({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "enter"
      });
      if (C === "auto") {
        const Ie = R.transitions.getAutoHeightDuration(te);
        O.style.transitionDuration = `${Ie}ms`, P.current = Ie;
      } else O.style.transitionDuration = typeof X == "string" ? X : `${X}ms`;
      O.style[W] = `${te}px`, O.style.transitionTimingFunction = Ee, p && p(O, ce);
    }), H = E((O, ce) => {
      O.style[W] = "auto", g && g(O, ce);
    }), se = E((O) => {
      O.style[W] = `${S()}px`, h && h(O);
    }), Q = E(m), xe = E((O) => {
      const ce = S(), { duration: te, easing: X } = ho({
        style: _,
        timeout: C,
        easing: d
      }, {
        mode: "exit"
      });
      if (C === "auto") {
        const Ee = R.transitions.getAutoHeightDuration(ce);
        O.style.transitionDuration = `${Ee}ms`, P.current = Ee;
      } else O.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
      O.style[W] = q, O.style.transitionTimingFunction = X, v && v(O);
    }), ge = (O) => {
      C === "auto" && F.start(P.current || 0, O), o && o(J.current, O);
    };
    return c.jsx(j, {
      in: u,
      onEnter: T,
      onEntered: H,
      onEntering: N,
      onExit: se,
      onExited: Q,
      onExiting: xe,
      addEndListener: ge,
      nodeRef: J,
      timeout: C === "auto" ? null : C,
      ...M,
      children: (O, { ownerState: ce, ...te }) => c.jsx(Ni, {
        as: a,
        className: le($.root, i, {
          entered: $.entered,
          exited: !u && q === "0px" && $.hidden
        }[O]),
        style: {
          [k ? "minWidth" : "minHeight"]: q,
          ..._
        },
        ref: U,
        ownerState: {
          ...w,
          state: O
        },
        ...te,
        children: c.jsx(Li, {
          ownerState: {
            ...w,
            state: O
          },
          className: $.wrapper,
          ref: A,
          children: c.jsx(Hi, {
            ownerState: {
              ...w,
              state: O
            },
            className: $.wrapperInner,
            children: s
          })
        })
      })
    });
  });
  Tr && (Tr.muiSupportAuto = true);
  const ws = y.createContext({});
  function Bi(e) {
    return _e("MuiAccordion", e);
  }
  const Ln = we("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]), Vi = (e) => {
    const { classes: t, square: n, expanded: r, disabled: o, disableGutters: s } = e;
    return ve({
      root: [
        "root",
        !n && "rounded",
        r && "expanded",
        o && "disabled",
        !s && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Bi, t);
  }, Wi = Y(nt, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Ln.region}`]: t.region
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
      [`&.${Ln.expanded}`]: {
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
      [`&.${Ln.disabled}`]: {
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
          [`&.${Ln.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  }))), Gi = Y("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  }), Hn = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiAccordion"
    }), { children: o, className: s, defaultExpanded: i = false, disabled: l = false, disableGutters: a = false, expanded: d, onChange: u, square: f = false, slots: g = {}, slotProps: p = {}, TransitionComponent: h, TransitionProps: m, ...v } = r, [x, _] = ms({
      controlled: d,
      default: i,
      name: "Accordion",
      state: "expanded"
    }), C = y.useCallback((S) => {
      _(!x), u && u(S, !x);
    }, [
      x,
      u,
      _
    ]), [j, ...M] = y.Children.toArray(o), w = y.useMemo(() => ({
      expanded: x,
      disabled: l,
      disableGutters: a,
      toggle: C
    }), [
      x,
      l,
      a,
      C
    ]), $ = {
      ...r,
      square: f,
      disabled: l,
      disableGutters: a,
      expanded: x
    }, R = Vi($), F = {
      transition: h,
      ...g
    }, A = {
      transition: m,
      ...p
    }, P = {
      slots: F,
      slotProps: A
    }, [q, k] = ue("root", {
      elementType: Wi,
      externalForwardedProps: {
        ...P,
        ...v
      },
      className: le(R.root, s),
      shouldForwardComponentProp: true,
      ownerState: $,
      ref: n,
      additionalProps: {
        square: f
      }
    }), [W, J] = ue("heading", {
      elementType: Gi,
      externalForwardedProps: P,
      className: R.heading,
      ownerState: $
    }), [U, E] = ue("transition", {
      elementType: Tr,
      externalForwardedProps: P,
      ownerState: $
    });
    return c.jsxs(q, {
      ...k,
      children: [
        c.jsx(W, {
          ...J,
          children: c.jsx(ws.Provider, {
            value: w,
            children: j
          })
        }),
        c.jsx(U, {
          in: x,
          timeout: "auto",
          ...E,
          children: c.jsx("div", {
            "aria-labelledby": j.props.id,
            id: j.props["aria-controls"],
            role: "region",
            className: R.region,
            children: M
          })
        })
      ]
    });
  });
  function Ui(e) {
    return _e("MuiAccordionDetails", e);
  }
  we("MuiAccordionDetails", [
    "root"
  ]);
  const qi = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, Ui, t);
  }, Yi = Y("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  }))), Bn = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: o, ...s } = r, i = r, l = qi(i);
    return c.jsx(Yi, {
      className: le(l.root, o),
      ref: n,
      ownerState: i,
      ...s
    });
  });
  function Ji(e) {
    return _e("MuiAccordionSummary", e);
  }
  const Xt = we("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]), Ki = (e) => {
    const { classes: t, expanded: n, disabled: r, disableGutters: o } = e;
    return ve({
      root: [
        "root",
        n && "expanded",
        r && "disabled",
        !o && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        n && "expanded",
        !o && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        n && "expanded"
      ]
    }, Ji, t);
  }, Xi = Y(rr, {
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
      [`&.${Xt.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${Xt.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Xt.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${Xt.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  })), Qi = Y("span", {
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
          [`&.${Xt.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  }))), Zi = Y("span", {
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
    [`&.${Xt.expanded}`]: {
      transform: "rotate(180deg)"
    }
  }))), Vn = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: o, className: s, expandIcon: i, focusVisibleClassName: l, onClick: a, slots: d, slotProps: u, ...f } = r, { disabled: g = false, disableGutters: p, expanded: h, toggle: m } = y.useContext(ws), v = (A) => {
      m && m(A), a && a(A);
    }, x = {
      ...r,
      expanded: h,
      disabled: g,
      disableGutters: p
    }, _ = Ki(x), C = {
      slots: d,
      slotProps: u
    }, [j, M] = ue("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: le(_.root, s),
      elementType: Xi,
      externalForwardedProps: {
        ...C,
        ...f
      },
      ownerState: x,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: g,
        "aria-expanded": h,
        focusVisibleClassName: le(_.focusVisible, l)
      },
      getSlotProps: (A) => ({
        ...A,
        onClick: (P) => {
          var _a2;
          (_a2 = A.onClick) == null ? void 0 : _a2.call(A, P), v(P);
        }
      })
    }), [w, $] = ue("content", {
      className: _.content,
      elementType: Qi,
      externalForwardedProps: C,
      ownerState: x
    }), [R, F] = ue("expandIconWrapper", {
      className: _.expandIconWrapper,
      elementType: Zi,
      externalForwardedProps: C,
      ownerState: x
    });
    return c.jsxs(j, {
      ...M,
      children: [
        c.jsx(w, {
          ...$,
          children: o
        }),
        i && c.jsx(R, {
          ...F,
          children: i
        })
      ]
    });
  });
  function el(e) {
    return _e("MuiAlert", e);
  }
  const vo = we("MuiAlert", [
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
  ]), tl = ae(c.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined"), nl = ae(c.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined"), rl = ae(c.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline"), ol = ae(c.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined"), sl = ae(c.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), il = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e, s = {
      root: [
        "root",
        `color${G(n || r)}`,
        `${t}${G(n || r)}`,
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
    return ve(s, el, o);
  }, ll = Y(nt, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${G(n.color || n.severity)}`]
      ];
    }
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? Ar : Ir, n = e.palette.mode === "light" ? Ir : Ar;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(kt([
          "light"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
            [`& .${vo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${r}IconColor`]
            } : {
              color: e.palette[r].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(kt([
          "light"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[r].light}`,
            [`& .${vo.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${r}IconColor`]
            } : {
              color: e.palette[r].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(kt([
          "dark"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "filled"
          },
          style: {
            fontWeight: e.typography.fontWeightMedium,
            ...e.vars ? {
              color: e.vars.palette.Alert[`${r}FilledColor`],
              backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
            } : {
              backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
              color: e.palette.getContrastText(e.palette[r].main)
            }
          }
        }))
      ]
    };
  })), al = Y("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  }), cl = Y("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  }), ul = Y("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  }), xo = {
    success: c.jsx(tl, {
      fontSize: "inherit"
    }),
    warning: c.jsx(nl, {
      fontSize: "inherit"
    }),
    error: c.jsx(rl, {
      fontSize: "inherit"
    }),
    info: c.jsx(ol, {
      fontSize: "inherit"
    })
  }, Zn = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiAlert"
    }), { action: o, children: s, className: i, closeText: l = "Close", color: a, components: d = {}, componentsProps: u = {}, icon: f, iconMapping: g = xo, onClose: p, role: h = "alert", severity: m = "success", slotProps: v = {}, slots: x = {}, variant: _ = "standard", ...C } = r, j = {
      ...r,
      color: a,
      severity: m,
      variant: _,
      colorSeverity: a || m
    }, M = il(j), w = {
      slots: {
        closeButton: d.CloseButton,
        closeIcon: d.CloseIcon,
        ...x
      },
      slotProps: {
        ...u,
        ...v
      }
    }, [$, R] = ue("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: le(M.root, i),
      elementType: ll,
      externalForwardedProps: {
        ...w,
        ...C
      },
      ownerState: j,
      additionalProps: {
        role: h,
        elevation: 0
      }
    }), [F, A] = ue("icon", {
      className: M.icon,
      elementType: al,
      externalForwardedProps: w,
      ownerState: j
    }), [P, q] = ue("message", {
      className: M.message,
      elementType: cl,
      externalForwardedProps: w,
      ownerState: j
    }), [k, W] = ue("action", {
      className: M.action,
      elementType: ul,
      externalForwardedProps: w,
      ownerState: j
    }), [J, U] = ue("closeButton", {
      elementType: Re,
      externalForwardedProps: w,
      ownerState: j
    }), [E, S] = ue("closeIcon", {
      elementType: sl,
      externalForwardedProps: w,
      ownerState: j
    });
    return c.jsxs($, {
      ...R,
      children: [
        f !== false ? c.jsx(F, {
          ...A,
          children: f || g[m] || xo[m]
        }) : null,
        c.jsx(P, {
          ...q,
          children: s
        }),
        o != null ? c.jsx(k, {
          ...W,
          children: o
        }) : null,
        o == null && p ? c.jsx(k, {
          ...W,
          children: c.jsx(J, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: p,
            ...U,
            children: c.jsx(E, {
              fontSize: "small",
              ...S
            })
          })
        }) : null
      ]
    });
  });
  var Le = "top", Ze = "bottom", et = "right", He = "left", Zr = "auto", In = [
    Le,
    Ze,
    et,
    He
  ], en = "start", Mn = "end", dl = "clippingParents", Cs = "viewport", ln = "popper", pl = "reference", _o = In.reduce(function(e, t) {
    return e.concat([
      t + "-" + en,
      t + "-" + Mn
    ]);
  }, []), Ss = [].concat(In, [
    Zr
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + en,
      t + "-" + Mn
    ]);
  }, []), fl = "beforeRead", gl = "read", hl = "afterRead", ml = "beforeMain", yl = "main", bl = "afterMain", vl = "beforeWrite", xl = "write", _l = "afterWrite", wl = [
    fl,
    gl,
    hl,
    ml,
    yl,
    bl,
    vl,
    xl,
    _l
  ];
  function ct(e) {
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
  function Ht(e) {
    var t = Ge(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Qe(e) {
    var t = Ge(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function eo(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = Ge(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Cl(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
      !Qe(s) || !ct(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(i) {
        var l = o[i];
        l === false ? s.removeAttribute(i) : s.setAttribute(i, l === true ? "" : l);
      }));
    });
  }
  function Sl(e) {
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
      Object.keys(t.elements).forEach(function(r) {
        var o = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(a, d) {
          return a[d] = "", a;
        }, {});
        !Qe(o) || !ct(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(a) {
          o.removeAttribute(a);
        }));
      });
    };
  }
  const jl = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Cl,
    effect: Sl,
    requires: [
      "computeStyles"
    ]
  };
  function at(e) {
    return e.split("-")[0];
  }
  var Lt = Math.max, ir = Math.min, tn = Math.round;
  function Dr() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function js() {
    return !/^((?!chrome|android).)*safari/i.test(Dr());
  }
  function nn(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var r = e.getBoundingClientRect(), o = 1, s = 1;
    t && Qe(e) && (o = e.offsetWidth > 0 && tn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && tn(r.height) / e.offsetHeight || 1);
    var i = Ht(e) ? Ge(e) : window, l = i.visualViewport, a = !js() && n, d = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / s, f = r.width / o, g = r.height / s;
    return {
      width: f,
      height: g,
      top: u,
      right: d + f,
      bottom: u + g,
      left: d,
      x: d,
      y: u
    };
  }
  function to(e) {
    var t = nn(e), n = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: r
    };
  }
  function Rs(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && eo(n)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function yt(e) {
    return Ge(e).getComputedStyle(e);
  }
  function Rl(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(ct(e)) >= 0;
  }
  function jt(e) {
    return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function dr(e) {
    return ct(e) === "html" ? e : e.assignedSlot || e.parentNode || (eo(e) ? e.host : null) || jt(e);
  }
  function wo(e) {
    return !Qe(e) || yt(e).position === "fixed" ? null : e.offsetParent;
  }
  function Ml(e) {
    var t = /firefox/i.test(Dr()), n = /Trident/i.test(Dr());
    if (n && Qe(e)) {
      var r = yt(e);
      if (r.position === "fixed") return null;
    }
    var o = dr(e);
    for (eo(o) && (o = o.host); Qe(o) && [
      "html",
      "body"
    ].indexOf(ct(o)) < 0; ) {
      var s = yt(o);
      if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return o;
      o = o.parentNode;
    }
    return null;
  }
  function Pn(e) {
    for (var t = Ge(e), n = wo(e); n && Rl(n) && yt(n).position === "static"; ) n = wo(n);
    return n && (ct(n) === "html" || ct(n) === "body" && yt(n).position === "static") ? t : n || Ml(e) || t;
  }
  function no(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function xn(e, t, n) {
    return Lt(e, ir(t, n));
  }
  function $l(e, t, n) {
    var r = xn(e, t, n);
    return r > n ? n : r;
  }
  function Ms() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function $s(e) {
    return Object.assign({}, Ms(), e);
  }
  function As(e, t) {
    return t.reduce(function(n, r) {
      return n[r] = e, n;
    }, {});
  }
  var Al = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, $s(typeof t != "number" ? t : As(t, In));
  };
  function Il(e) {
    var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = at(n.placement), a = no(l), d = [
      He,
      et
    ].indexOf(l) >= 0, u = d ? "height" : "width";
    if (!(!s || !i)) {
      var f = Al(o.padding, n), g = to(s), p = a === "y" ? Le : He, h = a === "y" ? Ze : et, m = n.rects.reference[u] + n.rects.reference[a] - i[a] - n.rects.popper[u], v = i[a] - n.rects.reference[a], x = Pn(s), _ = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, C = m / 2 - v / 2, j = f[p], M = _ - g[u] - f[h], w = _ / 2 - g[u] / 2 + C, $ = xn(j, w, M), R = a;
      n.modifiersData[r] = (t = {}, t[R] = $, t.centerOffset = $ - w, t);
    }
  }
  function Pl(e) {
    var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
    o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Rs(t.elements.popper, o) && (t.elements.arrow = o));
  }
  const Fl = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Il,
    effect: Pl,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function rn(e) {
    return e.split("-")[1];
  }
  var Tl = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Dl(e, t) {
    var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
    return {
      x: tn(n * o) / o || 0,
      y: tn(r * o) / o || 0
    };
  }
  function Co(e) {
    var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, g = i.x, p = g === void 0 ? 0 : g, h = i.y, m = h === void 0 ? 0 : h, v = typeof u == "function" ? u({
      x: p,
      y: m
    }) : {
      x: p,
      y: m
    };
    p = v.x, m = v.y;
    var x = i.hasOwnProperty("x"), _ = i.hasOwnProperty("y"), C = He, j = Le, M = window;
    if (d) {
      var w = Pn(n), $ = "clientHeight", R = "clientWidth";
      if (w === Ge(n) && (w = jt(n), yt(w).position !== "static" && l === "absolute" && ($ = "scrollHeight", R = "scrollWidth")), w = w, o === Le || (o === He || o === et) && s === Mn) {
        j = Ze;
        var F = f && w === M && M.visualViewport ? M.visualViewport.height : w[$];
        m -= F - r.height, m *= a ? 1 : -1;
      }
      if (o === He || (o === Le || o === Ze) && s === Mn) {
        C = et;
        var A = f && w === M && M.visualViewport ? M.visualViewport.width : w[R];
        p -= A - r.width, p *= a ? 1 : -1;
      }
    }
    var P = Object.assign({
      position: l
    }, d && Tl), q = u === true ? Dl({
      x: p,
      y: m
    }, Ge(n)) : {
      x: p,
      y: m
    };
    if (p = q.x, m = q.y, a) {
      var k;
      return Object.assign({}, P, (k = {}, k[j] = _ ? "0" : "", k[C] = x ? "0" : "", k.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", k));
    }
    return Object.assign({}, P, (t = {}, t[j] = _ ? m + "px" : "", t[C] = x ? p + "px" : "", t.transform = "", t));
  }
  function zl(e) {
    var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, s = n.adaptive, i = s === void 0 ? true : s, l = n.roundOffsets, a = l === void 0 ? true : l, d = {
      placement: at(t.placement),
      variation: rn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Co(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: i,
      roundOffsets: a
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Co(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: a
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const El = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: zl,
    data: {}
  };
  var Wn = {
    passive: true
  };
  function kl(e) {
    var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? true : o, i = r.resize, l = i === void 0 ? true : i, a = Ge(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && d.forEach(function(u) {
      u.addEventListener("scroll", n.update, Wn);
    }), l && a.addEventListener("resize", n.update, Wn), function() {
      s && d.forEach(function(u) {
        u.removeEventListener("scroll", n.update, Wn);
      }), l && a.removeEventListener("resize", n.update, Wn);
    };
  }
  const Ol = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: kl,
    data: {}
  };
  var Nl = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function er(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Nl[t];
    });
  }
  var Ll = {
    start: "end",
    end: "start"
  };
  function So(e) {
    return e.replace(/start|end/g, function(t) {
      return Ll[t];
    });
  }
  function ro(e) {
    var t = Ge(e), n = t.pageXOffset, r = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: r
    };
  }
  function oo(e) {
    return nn(jt(e)).left + ro(e).scrollLeft;
  }
  function Hl(e, t) {
    var n = Ge(e), r = jt(e), o = n.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, a = 0;
    if (o) {
      s = o.width, i = o.height;
      var d = js();
      (d || !d && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
    }
    return {
      width: s,
      height: i,
      x: l + oo(e),
      y: a
    };
  }
  function Bl(e) {
    var t, n = jt(e), r = ro(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Lt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Lt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + oo(e), a = -r.scrollTop;
    return yt(o || n).direction === "rtl" && (l += Lt(n.clientWidth, o ? o.clientWidth : 0) - s), {
      width: s,
      height: i,
      x: l,
      y: a
    };
  }
  function so(e) {
    var t = yt(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r);
  }
  function Is(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(ct(e)) >= 0 ? e.ownerDocument.body : Qe(e) && so(e) ? e : Is(dr(e));
  }
  function _n(e, t) {
    var n;
    t === void 0 && (t = []);
    var r = Is(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Ge(r), i = o ? [
      s
    ].concat(s.visualViewport || [], so(r) ? r : []) : r, l = t.concat(i);
    return o ? l : l.concat(_n(dr(i)));
  }
  function zr(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Vl(e, t) {
    var n = nn(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function jo(e, t, n) {
    return t === Cs ? zr(Hl(e, n)) : Ht(t) ? Vl(t, n) : zr(Bl(jt(e)));
  }
  function Wl(e) {
    var t = _n(dr(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(yt(e).position) >= 0, r = n && Qe(e) ? Pn(e) : e;
    return Ht(r) ? t.filter(function(o) {
      return Ht(o) && Rs(o, r) && ct(o) !== "body";
    }) : [];
  }
  function Gl(e, t, n, r) {
    var o = t === "clippingParents" ? Wl(e) : [].concat(t), s = [].concat(o, [
      n
    ]), i = s[0], l = s.reduce(function(a, d) {
      var u = jo(e, d, r);
      return a.top = Lt(u.top, a.top), a.right = ir(u.right, a.right), a.bottom = ir(u.bottom, a.bottom), a.left = Lt(u.left, a.left), a;
    }, jo(e, i, r));
    return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
  }
  function Ps(e) {
    var t = e.reference, n = e.element, r = e.placement, o = r ? at(r) : null, s = r ? rn(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
    switch (o) {
      case Le:
        a = {
          x: i,
          y: t.y - n.height
        };
        break;
      case Ze:
        a = {
          x: i,
          y: t.y + t.height
        };
        break;
      case et:
        a = {
          x: t.x + t.width,
          y: l
        };
        break;
      case He:
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
    var d = o ? no(o) : null;
    if (d != null) {
      var u = d === "y" ? "height" : "width";
      switch (s) {
        case en:
          a[d] = a[d] - (t[u] / 2 - n[u] / 2);
          break;
        case Mn:
          a[d] = a[d] + (t[u] / 2 - n[u] / 2);
          break;
      }
    }
    return a;
  }
  function $n(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? dl : l, d = n.rootBoundary, u = d === void 0 ? Cs : d, f = n.elementContext, g = f === void 0 ? ln : f, p = n.altBoundary, h = p === void 0 ? false : p, m = n.padding, v = m === void 0 ? 0 : m, x = $s(typeof v != "number" ? v : As(v, In)), _ = g === ln ? pl : ln, C = e.rects.popper, j = e.elements[h ? _ : g], M = Gl(Ht(j) ? j : j.contextElement || jt(e.elements.popper), a, u, i), w = nn(e.elements.reference), $ = Ps({
      reference: w,
      element: C,
      placement: o
    }), R = zr(Object.assign({}, C, $)), F = g === ln ? R : w, A = {
      top: M.top - F.top + x.top,
      bottom: F.bottom - M.bottom + x.bottom,
      left: M.left - F.left + x.left,
      right: F.right - M.right + x.right
    }, P = e.modifiersData.offset;
    if (g === ln && P) {
      var q = P[o];
      Object.keys(A).forEach(function(k) {
        var W = [
          et,
          Ze
        ].indexOf(k) >= 0 ? 1 : -1, J = [
          Le,
          Ze
        ].indexOf(k) >= 0 ? "y" : "x";
        A[k] += q[J] * W;
      });
    }
    return A;
  }
  function Ul(e, t) {
    t === void 0 && (t = {});
    var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, d = a === void 0 ? Ss : a, u = rn(r), f = u ? l ? _o : _o.filter(function(h) {
      return rn(h) === u;
    }) : In, g = f.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    g.length === 0 && (g = f);
    var p = g.reduce(function(h, m) {
      return h[m] = $n(e, {
        placement: m,
        boundary: o,
        rootBoundary: s,
        padding: i
      })[at(m)], h;
    }, {});
    return Object.keys(p).sort(function(h, m) {
      return p[h] - p[m];
    });
  }
  function ql(e) {
    if (at(e) === Zr) return [];
    var t = er(e);
    return [
      So(e),
      t,
      So(t)
    ];
  }
  function Yl(e) {
    var t = e.state, n = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (var o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? true : i, a = n.fallbackPlacements, d = n.padding, u = n.boundary, f = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, h = p === void 0 ? true : p, m = n.allowedAutoPlacements, v = t.options.placement, x = at(v), _ = x === v, C = a || (_ || !h ? [
        er(v)
      ] : ql(v)), j = [
        v
      ].concat(C).reduce(function(xe, ge) {
        return xe.concat(at(ge) === Zr ? Ul(t, {
          placement: ge,
          boundary: u,
          rootBoundary: f,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: m
        }) : ge);
      }, []), M = t.rects.reference, w = t.rects.popper, $ = /* @__PURE__ */ new Map(), R = true, F = j[0], A = 0; A < j.length; A++) {
        var P = j[A], q = at(P), k = rn(P) === en, W = [
          Le,
          Ze
        ].indexOf(q) >= 0, J = W ? "width" : "height", U = $n(t, {
          placement: P,
          boundary: u,
          rootBoundary: f,
          altBoundary: g,
          padding: d
        }), E = W ? k ? et : He : k ? Ze : Le;
        M[J] > w[J] && (E = er(E));
        var S = er(E), T = [];
        if (s && T.push(U[q] <= 0), l && T.push(U[E] <= 0, U[S] <= 0), T.every(function(xe) {
          return xe;
        })) {
          F = P, R = false;
          break;
        }
        $.set(P, T);
      }
      if (R) for (var N = h ? 3 : 1, H = function(ge) {
        var O = j.find(function(ce) {
          var te = $.get(ce);
          if (te) return te.slice(0, ge).every(function(X) {
            return X;
          });
        });
        if (O) return F = O, "break";
      }, se = N; se > 0; se--) {
        var Q = H(se);
        if (Q === "break") break;
      }
      t.placement !== F && (t.modifiersData[r]._skip = true, t.placement = F, t.reset = true);
    }
  }
  const Jl = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Yl,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function Ro(e, t, n) {
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
  function Mo(e) {
    return [
      Le,
      et,
      Ze,
      He
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function Kl(e) {
    var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, i = $n(t, {
      elementContext: "reference"
    }), l = $n(t, {
      altBoundary: true
    }), a = Ro(i, r), d = Ro(l, o, s), u = Mo(a), f = Mo(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: a,
      popperEscapeOffsets: d,
      isReferenceHidden: u,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": f
    });
  }
  const Xl = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: Kl
  };
  function Ql(e, t, n) {
    var r = at(e), o = [
      He,
      Le
    ].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, i = s[0], l = s[1];
    return i = i || 0, l = (l || 0) * o, [
      He,
      et
    ].indexOf(r) >= 0 ? {
      x: l,
      y: i
    } : {
      x: i,
      y: l
    };
  }
  function Zl(e) {
    var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [
      0,
      0
    ] : o, i = Ss.reduce(function(u, f) {
      return u[f] = Ql(f, t.rects, s), u;
    }, {}), l = i[t.placement], a = l.x, d = l.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = i;
  }
  const ea = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: Zl
  };
  function ta(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Ps({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const na = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: ta,
    data: {}
  };
  function ra(e) {
    return e === "x" ? "y" : "x";
  }
  function oa(e) {
    var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? true : o, i = n.altAxis, l = i === void 0 ? false : i, a = n.boundary, d = n.rootBoundary, u = n.altBoundary, f = n.padding, g = n.tether, p = g === void 0 ? true : g, h = n.tetherOffset, m = h === void 0 ? 0 : h, v = $n(t, {
      boundary: a,
      rootBoundary: d,
      padding: f,
      altBoundary: u
    }), x = at(t.placement), _ = rn(t.placement), C = !_, j = no(x), M = ra(j), w = t.modifiersData.popperOffsets, $ = t.rects.reference, R = t.rects.popper, F = typeof m == "function" ? m(Object.assign({}, t.rects, {
      placement: t.placement
    })) : m, A = typeof F == "number" ? {
      mainAxis: F,
      altAxis: F
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, F), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
      x: 0,
      y: 0
    };
    if (w) {
      if (s) {
        var k, W = j === "y" ? Le : He, J = j === "y" ? Ze : et, U = j === "y" ? "height" : "width", E = w[j], S = E + v[W], T = E - v[J], N = p ? -R[U] / 2 : 0, H = _ === en ? $[U] : R[U], se = _ === en ? -R[U] : -$[U], Q = t.elements.arrow, xe = p && Q ? to(Q) : {
          width: 0,
          height: 0
        }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ms(), O = ge[W], ce = ge[J], te = xn(0, $[U], xe[U]), X = C ? $[U] / 2 - N - te - O - A.mainAxis : H - te - O - A.mainAxis, Ee = C ? -$[U] / 2 + N + te + ce + A.mainAxis : se + te + ce + A.mainAxis, Ie = t.elements.arrow && Pn(t.elements.arrow), pe = Ie ? j === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, Ae = (k = P == null ? void 0 : P[j]) != null ? k : 0, Se = E + X - Ae - pe, bt = E + Ee - Ae, Rt = xn(p ? ir(S, Se) : S, E, p ? Lt(T, bt) : T);
        w[j] = Rt, q[j] = Rt - E;
      }
      if (l) {
        var ut, vt = j === "x" ? Le : He, Mt = j === "x" ? Ze : et, qe = w[M], Be = M === "y" ? "height" : "width", Ye = qe + v[vt], Je = qe - v[Mt], $t = [
          Le,
          He
        ].indexOf(x) !== -1, At = (ut = P == null ? void 0 : P[M]) != null ? ut : 0, It = $t ? Ye : qe - $[Be] - R[Be] - At + A.altAxis, rt = $t ? qe + $[Be] + R[Be] - At - A.altAxis : Je, Pt = p && $t ? $l(It, qe, rt) : xn(p ? It : Ye, qe, p ? rt : Je);
        w[M] = Pt, q[M] = Pt - qe;
      }
      t.modifiersData[r] = q;
    }
  }
  const sa = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: oa,
    requiresIfExists: [
      "offset"
    ]
  };
  function ia(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function la(e) {
    return e === Ge(e) || !Qe(e) ? ro(e) : ia(e);
  }
  function aa(e) {
    var t = e.getBoundingClientRect(), n = tn(t.width) / e.offsetWidth || 1, r = tn(t.height) / e.offsetHeight || 1;
    return n !== 1 || r !== 1;
  }
  function ca(e, t, n) {
    n === void 0 && (n = false);
    var r = Qe(t), o = Qe(t) && aa(t), s = jt(t), i = nn(e, o, n), l = {
      scrollLeft: 0,
      scrollTop: 0
    }, a = {
      x: 0,
      y: 0
    };
    return (r || !r && !n) && ((ct(t) !== "body" || so(s)) && (l = la(t)), Qe(t) ? (a = nn(t, true), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = oo(s))), {
      x: i.left + l.scrollLeft - a.x,
      y: i.top + l.scrollTop - a.y,
      width: i.width,
      height: i.height
    };
  }
  function ua(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
    e.forEach(function(s) {
      t.set(s.name, s);
    });
    function o(s) {
      n.add(s.name);
      var i = [].concat(s.requires || [], s.requiresIfExists || []);
      i.forEach(function(l) {
        if (!n.has(l)) {
          var a = t.get(l);
          a && o(a);
        }
      }), r.push(s);
    }
    return e.forEach(function(s) {
      n.has(s.name) || o(s);
    }), r;
  }
  function da(e) {
    var t = ua(e);
    return wl.reduce(function(n, r) {
      return n.concat(t.filter(function(o) {
        return o.phase === r;
      }));
    }, []);
  }
  function pa(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function fa(e) {
    var t = e.reduce(function(n, r) {
      var o = n[r.name];
      return n[r.name] = o ? Object.assign({}, o, r, {
        options: Object.assign({}, o.options, r.options),
        data: Object.assign({}, o.data, r.data)
      }) : r, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var $o = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ao() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function ga(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? $o : o;
    return function(l, a, d) {
      d === void 0 && (d = s);
      var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $o, s),
        modifiersData: {},
        elements: {
          reference: l,
          popper: a
        },
        attributes: {},
        styles: {}
      }, f = [], g = false, p = {
        state: u,
        setOptions: function(x) {
          var _ = typeof x == "function" ? x(u.options) : x;
          m(), u.options = Object.assign({}, s, u.options, _), u.scrollParents = {
            reference: Ht(l) ? _n(l) : l.contextElement ? _n(l.contextElement) : [],
            popper: _n(a)
          };
          var C = da(fa([].concat(r, u.options.modifiers)));
          return u.orderedModifiers = C.filter(function(j) {
            return j.enabled;
          }), h(), p.update();
        },
        forceUpdate: function() {
          if (!g) {
            var x = u.elements, _ = x.reference, C = x.popper;
            if (Ao(_, C)) {
              u.rects = {
                reference: ca(_, Pn(C), u.options.strategy === "fixed"),
                popper: to(C)
              }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
                return u.modifiersData[A.name] = Object.assign({}, A.data);
              });
              for (var j = 0; j < u.orderedModifiers.length; j++) {
                if (u.reset === true) {
                  u.reset = false, j = -1;
                  continue;
                }
                var M = u.orderedModifiers[j], w = M.fn, $ = M.options, R = $ === void 0 ? {} : $, F = M.name;
                typeof w == "function" && (u = w({
                  state: u,
                  options: R,
                  name: F,
                  instance: p
                }) || u);
              }
            }
          }
        },
        update: pa(function() {
          return new Promise(function(v) {
            p.forceUpdate(), v(u);
          });
        }),
        destroy: function() {
          m(), g = true;
        }
      };
      if (!Ao(l, a)) return p;
      p.setOptions(d).then(function(v) {
        !g && d.onFirstUpdate && d.onFirstUpdate(v);
      });
      function h() {
        u.orderedModifiers.forEach(function(v) {
          var x = v.name, _ = v.options, C = _ === void 0 ? {} : _, j = v.effect;
          if (typeof j == "function") {
            var M = j({
              state: u,
              name: x,
              instance: p,
              options: C
            }), w = function() {
            };
            f.push(M || w);
          }
        });
      }
      function m() {
        f.forEach(function(v) {
          return v();
        }), f = [];
      }
      return p;
    };
  }
  var ha = [
    Ol,
    na,
    El,
    jl,
    ea,
    Jl,
    sa,
    Fl,
    Xl
  ], ma = ga({
    defaultModifiers: ha
  });
  function ya(e) {
    return _e("MuiPopper", e);
  }
  we("MuiPopper", [
    "root"
  ]);
  function ba(e, t) {
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
  function Er(e) {
    return typeof e == "function" ? e() : e;
  }
  function va(e) {
    return e.nodeType !== void 0;
  }
  const xa = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, ya, t);
  }, _a = {}, wa = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, direction: s, disablePortal: i, modifiers: l, open: a, placement: d, popperOptions: u, popperRef: f, slotProps: g = {}, slots: p = {}, TransitionProps: h, ownerState: m, ...v } = t, x = y.useRef(null), _ = Zt(x, n), C = y.useRef(null), j = Zt(C, f), M = y.useRef(j);
    $r(() => {
      M.current = j;
    }, [
      j
    ]), y.useImperativeHandle(f, () => C.current, []);
    const w = ba(d, s), [$, R] = y.useState(w), [F, A] = y.useState(Er(r));
    y.useEffect(() => {
      C.current && C.current.forceUpdate();
    }), y.useEffect(() => {
      r && A(Er(r));
    }, [
      r
    ]), $r(() => {
      if (!F || !a) return;
      const J = (S) => {
        R(S.placement);
      };
      let U = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: i
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: i
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: S }) => {
            J(S);
          }
        }
      ];
      l != null && (U = U.concat(l)), u && u.modifiers != null && (U = U.concat(u.modifiers));
      const E = ma(F, x.current, {
        placement: w,
        ...u,
        modifiers: U
      });
      return M.current(E), () => {
        E.destroy(), M.current(null);
      };
    }, [
      F,
      i,
      l,
      a,
      u,
      w
    ]);
    const P = {
      placement: $
    };
    h !== null && (P.TransitionProps = h);
    const q = xa(t), k = p.root ?? "div", W = li({
      elementType: k,
      externalSlotProps: g.root,
      externalForwardedProps: v,
      additionalProps: {
        role: "tooltip",
        ref: _
      },
      ownerState: t,
      className: q.root
    });
    return c.jsx(k, {
      ...W,
      children: typeof o == "function" ? o(P) : o
    });
  }), Ca = y.forwardRef(function(t, n) {
    const { anchorEl: r, children: o, container: s, direction: i = "ltr", disablePortal: l = false, keepMounted: a = false, modifiers: d, open: u, placement: f = "bottom", popperOptions: g = _a, popperRef: p, style: h, transition: m = false, slotProps: v = {}, slots: x = {}, ..._ } = t, [C, j] = y.useState(true), M = () => {
      j(false);
    }, w = () => {
      j(true);
    };
    if (!a && !u && (!m || C)) return null;
    let $;
    if (s) $ = s;
    else if (r) {
      const A = Er(r);
      $ = A && va(A) ? bn(A).body : bn(null).body;
    }
    const R = !u && a && (!m || C) ? "none" : void 0, F = m ? {
      in: u,
      onEnter: M,
      onExited: w
    } : void 0;
    return c.jsx(ii, {
      disablePortal: l,
      container: $,
      children: c.jsx(wa, {
        anchorEl: r,
        direction: i,
        disablePortal: l,
        modifiers: d,
        ref: n,
        open: m ? !C : u,
        placement: f,
        popperOptions: g,
        popperRef: p,
        slotProps: v,
        slots: x,
        ..._,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: R,
          ...h
        },
        TransitionProps: F,
        children: o
      })
    });
  }), Sa = Y(Ca, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Fs = y.forwardRef(function(t, n) {
    const r = Jr(), o = be({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: s, component: i, components: l, componentsProps: a, container: d, disablePortal: u, keepMounted: f, modifiers: g, open: p, placement: h, popperOptions: m, popperRef: v, transition: x, slots: _, slotProps: C, ...j } = o, M = (_ == null ? void 0 : _.root) ?? (l == null ? void 0 : l.Root), w = {
      anchorEl: s,
      container: d,
      disablePortal: u,
      keepMounted: f,
      modifiers: g,
      open: p,
      placement: h,
      popperOptions: m,
      popperRef: v,
      transition: x,
      ...j
    };
    return c.jsx(Sa, {
      as: i,
      direction: r ? "rtl" : "ltr",
      slots: {
        root: M
      },
      slotProps: C ?? a,
      ...w,
      ref: n
    });
  }), ja = ae(c.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Ra(e) {
    return _e("MuiChip", e);
  }
  const ee = we("MuiChip", [
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
  ]), Ma = (e) => {
    const { classes: t, disabled: n, size: r, color: o, iconColor: s, onDelete: i, clickable: l, variant: a } = e, d = {
      root: [
        "root",
        a,
        n && "disabled",
        `size${G(r)}`,
        `color${G(o)}`,
        l && "clickable",
        l && `clickableColor${G(o)}`,
        i && "deletable",
        i && `deletableColor${G(o)}`,
        `${a}${G(o)}`
      ],
      label: [
        "label",
        `label${G(r)}`
      ],
      avatar: [
        "avatar",
        `avatar${G(r)}`,
        `avatarColor${G(o)}`
      ],
      icon: [
        "icon",
        `icon${G(r)}`,
        `iconColor${G(s)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${G(r)}`,
        `deleteIconColor${G(o)}`,
        `deleteIcon${G(a)}Color${G(o)}`
      ]
    };
    return ve(d, Ra, t);
  }, $a = Y("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: r, iconColor: o, clickable: s, onDelete: i, size: l, variant: a } = n;
      return [
        {
          [`& .${ee.avatar}`]: t.avatar
        },
        {
          [`& .${ee.avatar}`]: t[`avatar${G(l)}`]
        },
        {
          [`& .${ee.avatar}`]: t[`avatarColor${G(r)}`]
        },
        {
          [`& .${ee.icon}`]: t.icon
        },
        {
          [`& .${ee.icon}`]: t[`icon${G(l)}`]
        },
        {
          [`& .${ee.icon}`]: t[`iconColor${G(o)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(l)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIconColor${G(r)}`]
        },
        {
          [`& .${ee.deleteIcon}`]: t[`deleteIcon${G(a)}Color${G(r)}`]
        },
        t.root,
        t[`size${G(l)}`],
        t[`color${G(r)}`],
        s && t.clickable,
        s && r !== "default" && t[`clickableColor${G(r)})`],
        i && t.deletable,
        i && r !== "default" && t[`deletableColor${G(r)}`],
        t[a],
        t[`${a}${G(r)}`]
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
      [`&.${ee.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${ee.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${ee.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${ee.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${ee.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${ee.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${ee.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Te(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Te(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${ee.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${ee.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(kt([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${ee.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : Te(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${ee.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${ee.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(kt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${ee.focusVisible}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(kt([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${ee.focusVisible}`]: {
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
            [`&.${ee.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${ee.avatar}`]: {
              marginLeft: 4
            },
            [`& .${ee.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${ee.icon}`]: {
              marginLeft: 4
            },
            [`& .${ee.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${ee.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${ee.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(kt()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Te(e.palette[n].main, 0.7)}`,
            [`&.${ee.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Te(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${ee.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Te(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${ee.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : Te(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), Aa = Y("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: r } = n;
      return [
        t.label,
        t[`label${G(r)}`]
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
  function Io(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const mt = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiChip"
    }), { avatar: o, className: s, clickable: i, color: l = "default", component: a, deleteIcon: d, disabled: u = false, icon: f, label: g, onClick: p, onDelete: h, onKeyDown: m, onKeyUp: v, size: x = "medium", variant: _ = "filled", tabIndex: C, skipFocusWhenDisabled: j = false, ...M } = r, w = y.useRef(null), $ = Zt(w, n), R = (T) => {
      T.stopPropagation(), h && h(T);
    }, F = (T) => {
      T.currentTarget === T.target && Io(T) && T.preventDefault(), m && m(T);
    }, A = (T) => {
      T.currentTarget === T.target && h && Io(T) && h(T), v && v(T);
    }, P = i !== false && p ? true : i, q = P || h ? rr : a || "div", k = {
      ...r,
      component: q,
      disabled: u,
      size: x,
      color: l,
      iconColor: y.isValidElement(f) && f.props.color || l,
      onDelete: !!h,
      clickable: P,
      variant: _
    }, W = Ma(k), J = q === rr ? {
      component: a || "div",
      focusVisibleClassName: W.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let U = null;
    h && (U = d && y.isValidElement(d) ? y.cloneElement(d, {
      className: le(d.props.className, W.deleteIcon),
      onClick: R
    }) : c.jsx(ja, {
      className: le(W.deleteIcon),
      onClick: R
    }));
    let E = null;
    o && y.isValidElement(o) && (E = y.cloneElement(o, {
      className: le(W.avatar, o.props.className)
    }));
    let S = null;
    return f && y.isValidElement(f) && (S = y.cloneElement(f, {
      className: le(W.icon, f.props.className)
    })), c.jsxs($a, {
      as: q,
      className: le(W.root, s),
      disabled: P && u ? true : void 0,
      onClick: p,
      onKeyDown: F,
      onKeyUp: A,
      ref: $,
      tabIndex: j && u ? -1 : C,
      ownerState: k,
      ...J,
      ...M,
      children: [
        E || S,
        c.jsx(Aa, {
          className: le(W.label),
          ownerState: k,
          children: g
        }),
        U
      ]
    });
  });
  function Ia(e) {
    return _e("MuiCard", e);
  }
  we("MuiCard", [
    "root"
  ]);
  const Pa = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, Ia, t);
  }, Fa = Y(nt, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), Ta = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiCard"
    }), { className: o, raised: s = false, ...i } = r, l = {
      ...r,
      raised: s
    }, a = Pa(l);
    return c.jsx(Fa, {
      className: le(a.root, o),
      elevation: s ? 8 : void 0,
      ref: n,
      ownerState: l,
      ...i
    });
  });
  function Po(e) {
    return e.substring(2).toLowerCase();
  }
  function Da(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function za(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: r = "onClick", onClickAway: o, touchEvent: s = "onTouchEnd" } = e, i = y.useRef(false), l = y.useRef(null), a = y.useRef(false), d = y.useRef(false);
    y.useEffect(() => (setTimeout(() => {
      a.current = true;
    }, 0), () => {
      a.current = false;
    }), []);
    const u = Zt(ys(t), l), f = jn((h) => {
      const m = d.current;
      d.current = false;
      const v = bn(l.current);
      if (!a.current || !l.current || "clientX" in h && Da(h, v)) return;
      if (i.current) {
        i.current = false;
        return;
      }
      let x;
      h.composedPath ? x = h.composedPath().includes(l.current) : x = !v.documentElement.contains(h.target) || l.current.contains(h.target), !x && (n || !m) && o(h);
    }), g = (h) => (m) => {
      d.current = true;
      const v = t.props[h];
      v && v(m);
    }, p = {
      ref: u
    };
    return s !== false && (p[s] = g(s)), y.useEffect(() => {
      if (s !== false) {
        const h = Po(s), m = bn(l.current), v = () => {
          i.current = true;
        };
        return m.addEventListener(h, f), m.addEventListener("touchmove", v), () => {
          m.removeEventListener(h, f), m.removeEventListener("touchmove", v);
        };
      }
    }, [
      f,
      s
    ]), r !== false && (p[r] = g(r)), y.useEffect(() => {
      if (r !== false) {
        const h = Po(r), m = bn(l.current);
        return m.addEventListener(h, f), () => {
          m.removeEventListener(h, f);
        };
      }
    }, [
      f,
      r
    ]), y.cloneElement(t, p);
  }
  function Ea(e) {
    return _e("MuiDialogActions", e);
  }
  we("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  const ka = (e) => {
    const { classes: t, disableSpacing: n } = e;
    return ve({
      root: [
        "root",
        !n && "spacing"
      ]
    }, Ea, t);
  }, Oa = Y("div", {
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
  }), io = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiDialogActions"
    }), { className: o, disableSpacing: s = false, ...i } = r, l = {
      ...r,
      disableSpacing: s
    }, a = ka(l);
    return c.jsx(Oa, {
      className: le(a.root, o),
      ownerState: l,
      ref: n,
      ...i
    });
  });
  function Na(e) {
    return _e("MuiDialogContentText", e);
  }
  we("MuiDialogContentText", [
    "root"
  ]);
  const La = (e) => {
    const { classes: t } = e, r = ve({
      root: [
        "root"
      ]
    }, Na, t);
    return {
      ...t,
      ...r
    };
  }, Ha = Y(D, {
    shouldForwardProp: (e) => ai(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Ba = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiDialogContentText"
    }), { children: o, className: s, ...i } = r, l = La(i);
    return c.jsx(Ha, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: n,
      ownerState: i,
      className: le(l.root, s),
      ...r,
      classes: l
    });
  }), Va = _s({
    themeId: ci
  });
  function Wa(e) {
    return _e("MuiInputAdornment", e);
  }
  const Fo = we("MuiInputAdornment", [
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
  var To;
  const Ga = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${G(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, Ua = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: r, position: o, size: s, variant: i } = e, l = {
      root: [
        "root",
        n && "disablePointerEvents",
        o && `position${G(o)}`,
        i,
        r && "hiddenLabel",
        s && `size${G(s)}`
      ]
    };
    return ve(l, Wa, t);
  }, qa = Y("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: Ga
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
          [`&.${Fo.positionStart}&:not(.${Fo.hiddenLabel})`]: {
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
  }))), Ts = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiInputAdornment"
    }), { children: o, className: s, component: i = "div", disablePointerEvents: l = false, disableTypography: a = false, position: d, variant: u, ...f } = r, g = ui() || {};
    let p = u;
    u && g.variant, g && !p && (p = g.variant);
    const h = {
      ...r,
      hiddenLabel: g.hiddenLabel,
      size: g.size,
      disablePointerEvents: l,
      position: d,
      variant: p
    }, m = Ua(h);
    return c.jsx(di.Provider, {
      value: null,
      children: c.jsx(qa, {
        as: i,
        ownerState: h,
        className: le(m.root, s),
        ref: n,
        ...f,
        children: typeof o == "string" && !a ? c.jsx(D, {
          color: "textSecondary",
          children: o
        }) : c.jsxs(y.Fragment, {
          children: [
            d === "start" ? To || (To = c.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            o
          ]
        })
      })
    });
  }), Ya = (e) => {
    const { alignItems: t, classes: n } = e;
    return ve({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, Pi, n);
  }, Ja = Y("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(fe(({ theme: e }) => ({
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
  }))), an = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiListItemIcon"
    }), { className: o, ...s } = r, i = y.useContext(pi), l = {
      ...r,
      alignItems: i.alignItems
    }, a = Ya(l);
    return c.jsx(Ja, {
      className: le(a.root, o),
      ownerState: l,
      ref: n,
      ...s
    });
  }), Ka = ae(c.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Xa = ae(c.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Qa(e = {}) {
    const { autoHideDuration: t = null, disableWindowBlurListener: n = false, onClose: r, open: o, resumeHideDuration: s } = e, i = Kt();
    y.useEffect(() => {
      if (!o) return;
      function x(_) {
        _.defaultPrevented || _.key === "Escape" && (r == null ? void 0 : r(_, "escapeKeyDown"));
      }
      return document.addEventListener("keydown", x), () => {
        document.removeEventListener("keydown", x);
      };
    }, [
      o,
      r
    ]);
    const l = jn((x, _) => {
      r == null ? void 0 : r(x, _);
    }), a = jn((x) => {
      !r || x == null || i.start(x, () => {
        l(null, "timeout");
      });
    });
    y.useEffect(() => (o && a(t), i.clear), [
      o,
      t,
      a,
      i
    ]);
    const d = (x) => {
      r == null ? void 0 : r(x, "clickaway");
    }, u = i.clear, f = y.useCallback(() => {
      t != null && a(s ?? t * 0.5);
    }, [
      t,
      s,
      a
    ]), g = (x) => (_) => {
      const C = x.onBlur;
      C == null ? void 0 : C(_), f();
    }, p = (x) => (_) => {
      const C = x.onFocus;
      C == null ? void 0 : C(_), u();
    }, h = (x) => (_) => {
      const C = x.onMouseEnter;
      C == null ? void 0 : C(_), u();
    }, m = (x) => (_) => {
      const C = x.onMouseLeave;
      C == null ? void 0 : C(_), f();
    };
    return y.useEffect(() => {
      if (!n && o) return window.addEventListener("focus", f), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", f), window.removeEventListener("blur", u);
      };
    }, [
      n,
      o,
      f,
      u
    ]), {
      getRootProps: (x = {}) => {
        const _ = {
          ...mo(e),
          ...mo(x)
        };
        return {
          role: "presentation",
          ...x,
          ..._,
          onBlur: g(_),
          onFocus: p(_),
          onMouseEnter: h(_),
          onMouseLeave: m(_)
        };
      },
      onClickAway: d
    };
  }
  function Za(e) {
    return _e("MuiSnackbarContent", e);
  }
  we("MuiSnackbarContent", [
    "root",
    "message",
    "action"
  ]);
  const ec = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ],
      action: [
        "action"
      ],
      message: [
        "message"
      ]
    }, Za, t);
  }, tc = Y(nt, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(fe(({ theme: e }) => {
    const t = e.palette.mode === "light" ? 0.8 : 0.98, n = fi(e.palette.background.default, t);
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
  })), nc = Y("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0"
  }), rc = Y("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  }), oc = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiSnackbarContent"
    }), { action: o, className: s, message: i, role: l = "alert", ...a } = r, d = r, u = ec(d);
    return c.jsxs(tc, {
      role: l,
      square: true,
      elevation: 6,
      className: le(u.root, s),
      ownerState: d,
      ref: n,
      ...a,
      children: [
        c.jsx(nc, {
          className: u.message,
          ownerState: d,
          children: i
        }),
        o ? c.jsx(rc, {
          className: u.action,
          ownerState: d,
          children: o
        }) : null
      ]
    });
  });
  function sc(e) {
    return _e("MuiSnackbar", e);
  }
  we("MuiSnackbar", [
    "root",
    "anchorOriginTopCenter",
    "anchorOriginBottomCenter",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft"
  ]);
  const ic = (e) => {
    const { classes: t, anchorOrigin: n } = e, r = {
      root: [
        "root",
        `anchorOrigin${G(n.vertical)}${G(n.horizontal)}`
      ]
    };
    return ve(r, sc, t);
  }, lc = Y("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`anchorOrigin${G(n.anchorOrigin.vertical)}${G(n.anchorOrigin.horizontal)}`]
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
  }))), ac = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiSnackbar"
    }), o = on(), s = {
      enter: o.transitions.duration.enteringScreen,
      exit: o.transitions.duration.leavingScreen
    }, { action: i, anchorOrigin: { vertical: l, horizontal: a } = {
      vertical: "bottom",
      horizontal: "left"
    }, autoHideDuration: d = null, children: u, className: f, ClickAwayListenerProps: g, ContentProps: p, disableWindowBlurListener: h = false, message: m, onBlur: v, onClose: x, onFocus: _, onMouseEnter: C, onMouseLeave: j, open: M, resumeHideDuration: w, slots: $ = {}, slotProps: R = {}, TransitionComponent: F, transitionDuration: A = s, TransitionProps: { onEnter: P, onExited: q, ...k } = {}, ...W } = r, J = {
      ...r,
      anchorOrigin: {
        vertical: l,
        horizontal: a
      },
      autoHideDuration: d,
      disableWindowBlurListener: h,
      TransitionComponent: F,
      transitionDuration: A
    }, U = ic(J), { getRootProps: E, onClickAway: S } = Qa({
      ...J
    }), [T, N] = y.useState(true), H = (Ae) => {
      N(true), q && q(Ae);
    }, se = (Ae, Se) => {
      N(false), P && P(Ae, Se);
    }, Q = {
      slots: {
        transition: F,
        ...$
      },
      slotProps: {
        content: p,
        clickAwayListener: g,
        transition: k,
        ...R
      }
    }, [xe, ge] = ue("root", {
      ref: n,
      className: [
        U.root,
        f
      ],
      elementType: lc,
      getSlotProps: E,
      externalForwardedProps: {
        ...Q,
        ...W
      },
      ownerState: J
    }), [O, { ownerState: ce, ...te }] = ue("clickAwayListener", {
      elementType: za,
      externalForwardedProps: Q,
      getSlotProps: (Ae) => ({
        onClickAway: (...Se) => {
          var _a2;
          (_a2 = Ae.onClickAway) == null ? void 0 : _a2.call(Ae, ...Se), S(...Se);
        }
      }),
      ownerState: J
    }), [X, Ee] = ue("content", {
      elementType: oc,
      shouldForwardComponentProp: true,
      externalForwardedProps: Q,
      additionalProps: {
        message: m,
        action: i
      },
      ownerState: J
    }), [Ie, pe] = ue("transition", {
      elementType: bs,
      externalForwardedProps: Q,
      getSlotProps: (Ae) => ({
        onEnter: (...Se) => {
          var _a2;
          (_a2 = Ae.onEnter) == null ? void 0 : _a2.call(Ae, ...Se), se(...Se);
        },
        onExited: (...Se) => {
          var _a2;
          (_a2 = Ae.onExited) == null ? void 0 : _a2.call(Ae, ...Se), H(...Se);
        }
      }),
      additionalProps: {
        appear: true,
        in: M,
        timeout: A,
        direction: l === "top" ? "down" : "up"
      },
      ownerState: J
    });
    return !M && T ? null : c.jsx(O, {
      ...te,
      ...$.clickAwayListener && {
        ownerState: ce
      },
      children: c.jsx(xe, {
        ...ge,
        children: c.jsx(Ie, {
          ...pe,
          children: u || c.jsx(X, {
            ...Ee
          })
        })
      })
    });
  });
  function cc(e) {
    return _e("MuiTooltip", e);
  }
  const Ce = we("MuiTooltip", [
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
  function uc(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const dc = (e) => {
    const { classes: t, disableInteractive: n, arrow: r, touch: o, placement: s } = e, i = {
      popper: [
        "popper",
        !n && "popperInteractive",
        r && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        r && "tooltipArrow",
        o && "touch",
        `tooltipPlacement${G(s.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return ve(i, cc, t);
  }, pc = Y(Fs, {
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
  }))), fc = Y("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${G(n.placement.split("-")[0])}`]
      ];
    }
  })(fe(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Te(e.palette.grey[700], 0.92),
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
          lineHeight: `${uc(16 / 14)}em`,
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
  }))), gc = Y("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(fe(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : Te(e.palette.grey[700], 0.9),
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
  let Gn = false;
  const Do = new gi();
  let cn = {
    x: 0,
    y: 0
  };
  function Un(e, t) {
    return (n, ...r) => {
      t && t(n, ...r), e(n, ...r);
    };
  }
  const Ne = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTooltip"
    }), { arrow: o = false, children: s, classes: i, components: l = {}, componentsProps: a = {}, describeChild: d = false, disableFocusListener: u = false, disableHoverListener: f = false, disableInteractive: g = false, disableTouchListener: p = false, enterDelay: h = 100, enterNextDelay: m = 0, enterTouchDelay: v = 700, followCursor: x = false, id: _, leaveDelay: C = 0, leaveTouchDelay: j = 1500, onClose: M, onOpen: w, open: $, placement: R = "bottom", PopperComponent: F, PopperProps: A = {}, slotProps: P = {}, slots: q = {}, title: k, TransitionComponent: W, TransitionProps: J, ...U } = r, E = y.isValidElement(s) ? s : c.jsx("span", {
      children: s
    }), S = on(), T = Jr(), [N, H] = y.useState(), [se, Q] = y.useState(null), xe = y.useRef(false), ge = g || x, O = Kt(), ce = Kt(), te = Kt(), X = Kt(), [Ee, Ie] = ms({
      controlled: $,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let pe = Ee;
    const Ae = Pr(_), Se = y.useRef(), bt = jn(() => {
      Se.current !== void 0 && (document.body.style.WebkitUserSelect = Se.current, Se.current = void 0), X.clear();
    });
    y.useEffect(() => bt, [
      bt
    ]);
    const Rt = (K) => {
      Do.clear(), Gn = true, Ie(true), w && !pe && w(K);
    }, ut = jn((K) => {
      Do.start(800 + C, () => {
        Gn = false;
      }), Ie(false), M && pe && M(K), O.start(S.transitions.duration.shortest, () => {
        xe.current = false;
      });
    }), vt = (K) => {
      xe.current && K.type !== "touchstart" || (N && N.removeAttribute("title"), ce.clear(), te.clear(), h || Gn && m ? ce.start(Gn ? m : h, () => {
        Rt(K);
      }) : Rt(K));
    }, Mt = (K) => {
      ce.clear(), te.start(C, () => {
        ut(K);
      });
    }, [, qe] = y.useState(false), Be = (K) => {
      yo(K.target) || (qe(false), Mt(K));
    }, Ye = (K) => {
      N || H(K.currentTarget), yo(K.target) && (qe(true), vt(K));
    }, Je = (K) => {
      xe.current = true;
      const I = E.props;
      I.onTouchStart && I.onTouchStart(K);
    }, $t = (K) => {
      Je(K), te.clear(), O.clear(), bt(), Se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", X.start(v, () => {
        document.body.style.WebkitUserSelect = Se.current, vt(K);
      });
    }, At = (K) => {
      E.props.onTouchEnd && E.props.onTouchEnd(K), bt(), te.start(j, () => {
        ut(K);
      });
    };
    y.useEffect(() => {
      if (!pe) return;
      function K(I) {
        I.key === "Escape" && ut(I);
      }
      return document.addEventListener("keydown", K), () => {
        document.removeEventListener("keydown", K);
      };
    }, [
      ut,
      pe
    ]);
    const It = Zt(ys(E), H, n);
    !k && k !== 0 && (pe = false);
    const rt = y.useRef(), Pt = (K) => {
      const I = E.props;
      I.onMouseMove && I.onMouseMove(K), cn = {
        x: K.clientX,
        y: K.clientY
      }, rt.current && rt.current.update();
    }, Ft = {}, sn = typeof k == "string";
    d ? (Ft.title = !pe && sn && !f ? k : null, Ft["aria-describedby"] = pe ? Ae : null) : (Ft["aria-label"] = sn ? k : null, Ft["aria-labelledby"] = pe && !sn ? Ae : null);
    const Ve = {
      ...Ft,
      ...U,
      ...E.props,
      className: le(U.className, E.props.className),
      onTouchStart: Je,
      ref: It,
      ...x ? {
        onMouseMove: Pt
      } : {}
    }, Tt = {};
    p || (Ve.onTouchStart = $t, Ve.onTouchEnd = At), f || (Ve.onMouseOver = Un(vt, Ve.onMouseOver), Ve.onMouseLeave = Un(Mt, Ve.onMouseLeave), ge || (Tt.onMouseOver = vt, Tt.onMouseLeave = Mt)), u || (Ve.onFocus = Un(Ye, Ve.onFocus), Ve.onBlur = Un(Be, Ve.onBlur), ge || (Tt.onFocus = Ye, Tt.onBlur = Be));
    const ot = {
      ...r,
      isRtl: T,
      arrow: o,
      disableInteractive: ge,
      placement: R,
      PopperComponentProp: F,
      touch: xe.current
    }, st = typeof P.popper == "function" ? P.popper(ot) : P.popper, Vt = y.useMemo(() => {
      var _a2, _b;
      let K = [
        {
          name: "arrow",
          enabled: !!se,
          options: {
            element: se,
            padding: 4
          }
        }
      ];
      return ((_a2 = A.popperOptions) == null ? void 0 : _a2.modifiers) && (K = K.concat(A.popperOptions.modifiers)), ((_b = st == null ? void 0 : st.popperOptions) == null ? void 0 : _b.modifiers) && (K = K.concat(st.popperOptions.modifiers)), {
        ...A.popperOptions,
        ...st == null ? void 0 : st.popperOptions,
        modifiers: K
      };
    }, [
      se,
      A.popperOptions,
      st == null ? void 0 : st.popperOptions
    ]), Wt = dc(ot), Dn = typeof P.transition == "function" ? P.transition(ot) : P.transition, Dt = {
      slots: {
        popper: l.Popper,
        transition: l.Transition ?? W,
        tooltip: l.Tooltip,
        arrow: l.Arrow,
        ...q
      },
      slotProps: {
        arrow: P.arrow ?? a.arrow,
        popper: {
          ...A,
          ...st ?? a.popper
        },
        tooltip: P.tooltip ?? a.tooltip,
        transition: {
          ...J,
          ...Dn ?? a.transition
        }
      }
    }, [Gt, zn] = ue("popper", {
      elementType: pc,
      externalForwardedProps: Dt,
      ownerState: ot,
      className: le(Wt.popper, A == null ? void 0 : A.className)
    }), [hr, fo] = ue("transition", {
      elementType: bs,
      externalForwardedProps: Dt,
      ownerState: ot
    }), [zt, mr] = ue("tooltip", {
      elementType: fc,
      className: Wt.tooltip,
      externalForwardedProps: Dt,
      ownerState: ot
    }), [En, kn] = ue("arrow", {
      elementType: gc,
      className: Wt.arrow,
      externalForwardedProps: Dt,
      ownerState: ot,
      ref: Q
    });
    return c.jsxs(y.Fragment, {
      children: [
        y.cloneElement(E, Ve),
        c.jsx(Gt, {
          as: F ?? Fs,
          placement: R,
          anchorEl: x ? {
            getBoundingClientRect: () => ({
              top: cn.y,
              left: cn.x,
              right: cn.x,
              bottom: cn.y,
              width: 0,
              height: 0
            })
          } : N,
          popperRef: rt,
          open: N ? pe : false,
          id: Ae,
          transition: true,
          ...Tt,
          ...zn,
          popperOptions: Vt,
          children: ({ TransitionProps: K }) => c.jsx(hr, {
            timeout: S.transitions.duration.shorter,
            ...K,
            ...fo,
            children: c.jsxs(zt, {
              ...mr,
              children: [
                k,
                o ? c.jsx(En, {
                  ...kn
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Ds = y.createContext();
  function hc(e) {
    return _e("MuiTable", e);
  }
  we("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  const mc = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return ve({
      root: [
        "root",
        n && "stickyHeader"
      ]
    }, hc, t);
  }, yc = Y("table", {
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
  }))), zo = "table", bc = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTable"
    }), { className: o, component: s = zo, padding: i = "normal", size: l = "medium", stickyHeader: a = false, ...d } = r, u = {
      ...r,
      component: s,
      padding: i,
      size: l,
      stickyHeader: a
    }, f = mc(u), g = y.useMemo(() => ({
      padding: i,
      size: l,
      stickyHeader: a
    }), [
      i,
      l,
      a
    ]);
    return c.jsx(Ds.Provider, {
      value: g,
      children: c.jsx(yc, {
        as: s,
        role: s === zo ? null : "table",
        ref: n,
        className: le(f.root, o),
        ownerState: u,
        ...d
      })
    });
  }), pr = y.createContext();
  function vc(e) {
    return _e("MuiTableBody", e);
  }
  we("MuiTableBody", [
    "root"
  ]);
  const xc = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, vc, t);
  }, _c = Y("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-row-group"
  }), wc = {
    variant: "body"
  }, Eo = "tbody", Cc = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableBody"
    }), { className: o, component: s = Eo, ...i } = r, l = {
      ...r,
      component: s
    }, a = xc(l);
    return c.jsx(pr.Provider, {
      value: wc,
      children: c.jsx(_c, {
        className: le(a.root, o),
        as: s,
        ref: n,
        role: s === Eo ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function Sc(e) {
    return _e("MuiTableCell", e);
  }
  const jc = we("MuiTableCell", [
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
  ]), Rc = (e) => {
    const { classes: t, variant: n, align: r, padding: o, size: s, stickyHeader: i } = e, l = {
      root: [
        "root",
        n,
        i && "stickyHeader",
        r !== "inherit" && `align${G(r)}`,
        o !== "normal" && `padding${G(o)}`,
        `size${G(s)}`
      ]
    };
    return ve(l, Sc, t);
  }, Mc = Y("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${G(n.size)}`],
        n.padding !== "normal" && t[`padding${G(n.padding)}`],
        n.align !== "inherit" && t[`align${G(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Ir(Te(e.palette.divider, 1), 0.88) : Ar(Te(e.palette.divider, 1), 0.68)}`,
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
          [`&.${jc.paddingCheckbox}`]: {
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
  }))), wt = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableCell"
    }), { align: o = "inherit", className: s, component: i, padding: l, scope: a, size: d, sortDirection: u, variant: f, ...g } = r, p = y.useContext(Ds), h = y.useContext(pr), m = h && h.variant === "head";
    let v;
    i ? v = i : v = m ? "th" : "td";
    let x = a;
    v === "td" ? x = void 0 : !x && m && (x = "col");
    const _ = f || h && h.variant, C = {
      ...r,
      align: o,
      component: v,
      padding: l || (p && p.padding ? p.padding : "normal"),
      size: d || (p && p.size ? p.size : "medium"),
      sortDirection: u,
      stickyHeader: _ === "head" && p && p.stickyHeader,
      variant: _
    }, j = Rc(C);
    let M = null;
    return u && (M = u === "asc" ? "ascending" : "descending"), c.jsx(Mc, {
      as: v,
      ref: n,
      className: le(j.root, s),
      "aria-sort": M,
      scope: x,
      ownerState: C,
      ...g
    });
  });
  function $c(e) {
    return _e("MuiTableContainer", e);
  }
  we("MuiTableContainer", [
    "root"
  ]);
  const Ac = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, $c, t);
  }, Ic = Y("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    width: "100%",
    overflowX: "auto"
  }), Pc = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableContainer"
    }), { className: o, component: s = "div", ...i } = r, l = {
      ...r,
      component: s
    }, a = Ac(l);
    return c.jsx(Ic, {
      ref: n,
      as: s,
      className: le(a.root, o),
      ownerState: l,
      ...i
    });
  });
  function Fc(e) {
    return _e("MuiTableHead", e);
  }
  we("MuiTableHead", [
    "root"
  ]);
  const Tc = (e) => {
    const { classes: t } = e;
    return ve({
      root: [
        "root"
      ]
    }, Fc, t);
  }, Dc = Y("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "table-header-group"
  }), zc = {
    variant: "head"
  }, ko = "thead", Ec = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableHead"
    }), { className: o, component: s = ko, ...i } = r, l = {
      ...r,
      component: s
    }, a = Tc(l);
    return c.jsx(pr.Provider, {
      value: zc,
      children: c.jsx(Dc, {
        as: s,
        className: le(a.root, o),
        ref: n,
        role: s === ko ? null : "rowgroup",
        ownerState: l,
        ...i
      })
    });
  });
  function kc(e) {
    return _e("MuiToolbar", e);
  }
  we("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const Oc = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return ve({
      root: [
        "root",
        !n && "gutters",
        r
      ]
    }, kc, t);
  }, Nc = Y("div", {
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
  }))), zs = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiToolbar"
    }), { className: o, component: s = "div", disableGutters: i = false, variant: l = "regular", ...a } = r, d = {
      ...r,
      component: s,
      disableGutters: i,
      variant: l
    }, u = Oc(d);
    return c.jsx(Nc, {
      as: s,
      className: le(u.root, o),
      ref: n,
      ownerState: d,
      ...a
    });
  }), Lc = ae(c.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), Hc = ae(c.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), Bc = y.forwardRef(function(t, n) {
    const { backIconButtonProps: r, count: o, disabled: s = false, getItemAriaLabel: i, nextIconButtonProps: l, onPageChange: a, page: d, rowsPerPage: u, showFirstButton: f, showLastButton: g, slots: p = {}, slotProps: h = {}, ...m } = t, v = Jr(), x = (H) => {
      a(H, 0);
    }, _ = (H) => {
      a(H, d - 1);
    }, C = (H) => {
      a(H, d + 1);
    }, j = (H) => {
      a(H, Math.max(0, Math.ceil(o / u) - 1));
    }, M = p.firstButton ?? Re, w = p.lastButton ?? Re, $ = p.nextButton ?? Re, R = p.previousButton ?? Re, F = p.firstButtonIcon ?? Ka, A = p.lastButtonIcon ?? Xa, P = p.nextButtonIcon ?? Hc, q = p.previousButtonIcon ?? Lc, k = v ? w : M, W = v ? $ : R, J = v ? R : $, U = v ? M : w, E = v ? h.lastButton : h.firstButton, S = v ? h.nextButton : h.previousButton, T = v ? h.previousButton : h.nextButton, N = v ? h.firstButton : h.lastButton;
    return c.jsxs("div", {
      ref: n,
      ...m,
      children: [
        f && c.jsx(k, {
          onClick: x,
          disabled: s || d === 0,
          "aria-label": i("first", d),
          title: i("first", d),
          ...E,
          children: v ? c.jsx(A, {
            ...h.lastButtonIcon
          }) : c.jsx(F, {
            ...h.firstButtonIcon
          })
        }),
        c.jsx(W, {
          onClick: _,
          disabled: s || d === 0,
          color: "inherit",
          "aria-label": i("previous", d),
          title: i("previous", d),
          ...S ?? r,
          children: v ? c.jsx(P, {
            ...h.nextButtonIcon
          }) : c.jsx(q, {
            ...h.previousButtonIcon
          })
        }),
        c.jsx(J, {
          onClick: C,
          disabled: s || (o !== -1 ? d >= Math.ceil(o / u) - 1 : false),
          color: "inherit",
          "aria-label": i("next", d),
          title: i("next", d),
          ...T ?? l,
          children: v ? c.jsx(q, {
            ...h.previousButtonIcon
          }) : c.jsx(P, {
            ...h.nextButtonIcon
          })
        }),
        g && c.jsx(U, {
          onClick: j,
          disabled: s || d >= Math.ceil(o / u) - 1,
          "aria-label": i("last", d),
          title: i("last", d),
          ...N,
          children: v ? c.jsx(F, {
            ...h.firstButtonIcon
          }) : c.jsx(A, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function Vc(e) {
    return _e("MuiTablePagination", e);
  }
  const wn = we("MuiTablePagination", [
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
  var Oo;
  const Wc = Y(wt, {
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
  }))), Gc = Y(zs, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${wn.actions}`]: t.actions,
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
    [`& .${wn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), Uc = Y("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), qc = Y("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), Yc = Y(it, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${wn.selectIcon}`]: t.selectIcon,
      [`& .${wn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${wn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), Jc = Y(ie, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), Kc = Y("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(fe(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function Xc({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function Qc(e) {
    return `Go to ${e} page`;
  }
  const Zc = (e) => {
    const { classes: t } = e;
    return ve({
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
    }, Vc, t);
  }, eu = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: o = Bc, backIconButtonProps: s, colSpan: i, component: l = wt, count: a, disabled: d = false, getItemAriaLabel: u = Qc, labelDisplayedRows: f = Xc, labelRowsPerPage: g = "Rows per page:", nextIconButtonProps: p, onPageChange: h, onRowsPerPageChange: m, page: v, rowsPerPage: x, rowsPerPageOptions: _ = [
      10,
      25,
      50,
      100
    ], SelectProps: C = {}, showFirstButton: j = false, showLastButton: M = false, slotProps: w = {}, slots: $ = {}, ...R } = r, F = r, A = Zc(F), P = (w == null ? void 0 : w.select) ?? C, q = P.native ? "option" : Jc;
    let k;
    (l === wt || l === "td") && (k = i || 1e3);
    const W = Pr(P.id), J = Pr(P.labelId), U = () => a === -1 ? (v + 1) * x : x === -1 ? a : Math.min(a, (v + 1) * x), E = {
      slots: $,
      slotProps: w
    }, [S, T] = ue("root", {
      ref: n,
      className: A.root,
      elementType: Wc,
      externalForwardedProps: {
        ...E,
        component: l,
        ...R
      },
      ownerState: F,
      additionalProps: {
        colSpan: k
      }
    }), [N, H] = ue("toolbar", {
      className: A.toolbar,
      elementType: Gc,
      externalForwardedProps: E,
      ownerState: F
    }), [se, Q] = ue("spacer", {
      className: A.spacer,
      elementType: Uc,
      externalForwardedProps: E,
      ownerState: F
    }), [xe, ge] = ue("selectLabel", {
      className: A.selectLabel,
      elementType: qc,
      externalForwardedProps: E,
      ownerState: F,
      additionalProps: {
        id: J
      }
    }), [O, ce] = ue("select", {
      className: A.select,
      elementType: Yc,
      externalForwardedProps: E,
      ownerState: F
    }), [te, X] = ue("menuItem", {
      className: A.menuItem,
      elementType: q,
      externalForwardedProps: E,
      ownerState: F
    }), [Ee, Ie] = ue("displayedRows", {
      className: A.displayedRows,
      elementType: Kc,
      externalForwardedProps: E,
      ownerState: F
    });
    return c.jsx(S, {
      ...T,
      children: c.jsxs(N, {
        ...H,
        children: [
          c.jsx(se, {
            ...Q
          }),
          _.length > 1 && c.jsx(xe, {
            ...ge,
            children: g
          }),
          _.length > 1 && c.jsx(O, {
            variant: "standard",
            ...!P.variant && {
              input: Oo || (Oo = c.jsx(hi, {}))
            },
            value: x,
            onChange: m,
            id: W,
            labelId: J,
            ...P,
            classes: {
              ...P.classes,
              root: le(A.input, A.selectRoot, (P.classes || {}).root),
              select: le(A.select, (P.classes || {}).select),
              icon: le(A.selectIcon, (P.classes || {}).icon)
            },
            disabled: d,
            ...ce,
            children: _.map((pe) => y.createElement(te, {
              ...X,
              key: pe.label ? pe.label : pe,
              value: pe.value ? pe.value : pe
            }, pe.label ? pe.label : pe))
          }),
          c.jsx(Ee, {
            ...Ie,
            children: f({
              from: a === 0 ? 0 : v * x + 1,
              to: U(),
              count: a === -1 ? -1 : a,
              page: v
            })
          }),
          c.jsx(o, {
            className: A.actions,
            backIconButtonProps: s,
            count: a,
            nextIconButtonProps: p,
            onPageChange: h,
            page: v,
            rowsPerPage: x,
            showFirstButton: j,
            showLastButton: M,
            slotProps: w.actions,
            slots: $.actions,
            getItemAriaLabel: u,
            disabled: d
          })
        ]
      })
    });
  });
  function tu(e) {
    return _e("MuiTableRow", e);
  }
  const No = we("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]), nu = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: s } = e;
    return ve({
      root: [
        "root",
        n && "selected",
        r && "hover",
        o && "head",
        s && "footer"
      ]
    }, tu, t);
  }, ru = Y("tr", {
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
    [`&.${No.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover
    },
    [`&.${No.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Te(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Te(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
      }
    }
  }))), Lo = "tr", un = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableRow"
    }), { className: o, component: s = Lo, hover: i = false, selected: l = false, ...a } = r, d = y.useContext(pr), u = {
      ...r,
      component: s,
      hover: i,
      selected: l,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, f = nu(u);
    return c.jsx(ru, {
      as: s,
      ref: n,
      className: le(f.root, o),
      role: s === Lo ? null : "row",
      ownerState: u,
      ...a
    });
  }), ou = ae(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function su(e) {
    return _e("MuiTableSortLabel", e);
  }
  const yr = we("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]), iu = (e) => {
    const { classes: t, direction: n, active: r } = e, o = {
      root: [
        "root",
        r && "active",
        `direction${G(n)}`
      ],
      icon: [
        "icon",
        `iconDirection${G(n)}`
      ]
    };
    return ve(o, su, t);
  }, lu = Y(rr, {
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
      [`& .${yr.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${yr.active}`]: {
      color: (e.vars || e).palette.text.primary,
      [`& .${yr.icon}`]: {
        opacity: 1,
        color: (e.vars || e).palette.text.secondary
      }
    }
  }))), au = Y("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        t[`iconDirection${G(n.direction)}`]
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
  }))), cu = y.forwardRef(function(t, n) {
    const r = be({
      props: t,
      name: "MuiTableSortLabel"
    }), { active: o = false, children: s, className: i, direction: l = "asc", hideSortIcon: a = false, IconComponent: d = ou, slots: u = {}, slotProps: f = {}, ...g } = r, p = {
      ...r,
      active: o,
      direction: l,
      hideSortIcon: a,
      IconComponent: d
    }, h = iu(p), m = {
      slots: u,
      slotProps: f
    }, [v, x] = ue("root", {
      elementType: lu,
      externalForwardedProps: m,
      ownerState: p,
      className: le(h.root, i),
      ref: n
    }), [_, C] = ue("icon", {
      elementType: au,
      externalForwardedProps: m,
      ownerState: p,
      className: h.icon
    });
    return c.jsxs(v, {
      disableRipple: true,
      component: "span",
      ...x,
      ...g,
      children: [
        s,
        a && !o ? null : c.jsx(_, {
          as: d,
          ...C
        })
      ]
    });
  }), Es = ae(c.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
  }), "Add"), ks = ae(c.jsx("path", {
    d: "m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
  }), "ArrowDownward"), Os = ae(c.jsx("path", {
    d: "m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
  }), "ArrowUpward"), uu = ae(c.jsx("path", {
    d: "M7.5 5.6 10 7 8.6 4.5 10 2 7.5 3.4 5 2l1.4 2.5L5 7zm12 9.8L17 14l1.4 2.5L17 19l2.5-1.4L22 19l-1.4-2.5L22 14zM22 2l-2.5 1.4L17 2l1.4 2.5L17 7l2.5-1.4L22 7l-1.4-2.5zm-7.63 5.29a.996.996 0 0 0-1.41 0L1.29 18.96c-.39.39-.39 1.02 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0L16.7 11.05c.39-.39.39-1.02 0-1.41zm-1.03 5.49-2.12-2.12 2.44-2.44 2.12 2.12z"
  }), "AutoFixHigh"), Ho = ae(c.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), Ns = ae(c.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), du = ae(c.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator"), pu = ae(c.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit"), qn = ae(c.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), fu = ae(c.jsx("path", {
    d: "M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"
  }), "FilterList"), Bo = ae(c.jsx("path", {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42M10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
  }), "FormatBold"), Vo = ae(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic"), gu = ae(c.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "MoreVert"), hu = ae(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), yn = ae(c.jsx("path", {
    d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
  }), "RestartAlt"), Ls = ae(c.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), mu = ae(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings"), yu = ae(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Hs = ae(c.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), Cn = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  }, Wo = "b64:";
  function bu(e) {
    const t = new TextEncoder().encode(e);
    let n = "";
    for (let r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
    return btoa(n);
  }
  function vu(e) {
    const t = atob(e), n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return new TextDecoder().decode(n);
  }
  function Bs(e) {
    if (!e) return [];
    try {
      const t = e.startsWith(Wo) ? vu(e.slice(Wo.length)) : e, n = JSON.parse(t);
      return Array.isArray(n) ? n : [];
    } catch {
      return [];
    }
  }
  function xu({ columns: e, discoveredColumns: t, selectedPath: n, onSelect: r, onChange: o, onRefresh: s, loading: i }) {
    const [l, a] = y.useState(""), [d, u] = y.useState(null), [f, g] = y.useState(null), [p, h] = y.useState(false), m = y.useRef(0), v = y.useRef(/* @__PURE__ */ new Map()), x = !l, _ = y.useMemo(() => {
      if (!l) return e;
      const S = l.toLowerCase();
      return e.filter((T) => T.path.toLowerCase().includes(S) || T.headerName.toLowerCase().includes(S));
    }, [
      e,
      l
    ]), C = y.useMemo(() => e.filter((S) => S.visible).length, [
      e
    ]), j = y.useCallback((S) => {
      o(e.map((T) => T.path === S ? {
        ...T,
        visible: !T.visible
      } : T));
    }, [
      e,
      o
    ]), M = y.useCallback((S, T) => {
      S.stopPropagation(), j(T);
    }, [
      j
    ]), w = y.useCallback((S) => (T) => {
      T ? v.current.set(S, T) : v.current.delete(S);
    }, []), $ = y.useCallback((S) => {
      o(e.map((T) => ({
        ...T,
        visible: S
      })));
    }, [
      e,
      o
    ]), R = y.useCallback((S, T) => {
      S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", T), u(T);
    }, []), F = y.useCallback((S, T) => {
      S.preventDefault(), m.current += 1, T !== d && g(T);
    }, [
      d
    ]), A = y.useCallback((S) => {
      S.preventDefault(), m.current -= 1, m.current <= 0 && (m.current = 0, g(null));
    }, []), P = y.useCallback((S) => {
      S.preventDefault(), S.dataTransfer.dropEffect = "move";
    }, []), q = y.useCallback((S, T) => {
      S.preventDefault(), m.current = 0, g(null), u(null);
      const N = S.dataTransfer.getData("text/plain");
      if (!N || N === T) return;
      const H = [
        ...e
      ], se = H.findIndex((O) => O.path === N), Q = H.findIndex((O) => O.path === T);
      if (se === -1 || Q === -1) return;
      const [xe] = H.splice(se, 1), ge = se < Q ? Q - 1 : Q;
      H.splice(ge, 0, xe), o(H);
    }, [
      e,
      o
    ]), k = y.useCallback(() => {
      m.current = 0, u(null), g(null);
    }, []), W = y.useCallback(() => {
      o(e.map((S) => ({
        path: S.path,
        visible: true,
        headerName: S.path.split(".").pop() || S.path
      }))), h(false);
    }, [
      e,
      o
    ]), J = y.useCallback(() => {
      h(true);
    }, []), U = y.useCallback(() => {
      h(false);
    }, []), E = y.useCallback((S, T, N) => {
      var _a2, _b;
      switch (S.key) {
        case "Enter":
        case " ":
          S.preventDefault(), r(T.path);
          break;
        case "ArrowDown":
          if (S.preventDefault(), N < _.length - 1) {
            const H = _[N + 1].path;
            r(H), (_a2 = v.current.get(H)) == null ? void 0 : _a2.focus();
          }
          break;
        case "ArrowUp":
          if (S.preventDefault(), N > 0) {
            const H = _[N - 1].path;
            r(H), (_b = v.current.get(H)) == null ? void 0 : _b.focus();
          }
          break;
        case "v":
        case "V":
          S.preventDefault(), j(T.path);
          break;
      }
    }, [
      _,
      r,
      j
    ]);
    return c.jsxs(L, {
      sx: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [
        c.jsxs(zs, {
          variant: "dense",
          sx: {
            borderBottom: 1,
            borderColor: "divider",
            gap: 0.5,
            px: 1.5,
            minHeight: 48
          },
          children: [
            c.jsx(je, {
              size: "small",
              placeholder: b.t("json_table_search_columns"),
              value: l,
              onChange: (S) => a(S.target.value),
              slotProps: {
                input: {
                  startAdornment: c.jsx(Ts, {
                    position: "start",
                    children: c.jsx(Ls, {
                      fontSize: "small"
                    })
                  }),
                  "aria-label": b.t("json_table_search_columns")
                }
              },
              sx: {
                flexGrow: 1,
                minWidth: 0
              }
            }),
            c.jsx(Ne, {
              title: b.t("json_table_refresh_columns"),
              children: c.jsx("span", {
                children: c.jsx(Re, {
                  size: "small",
                  onClick: s,
                  disabled: i,
                  "aria-label": b.t("json_table_refresh_columns"),
                  children: c.jsx(hu, {
                    fontSize: "small"
                  })
                })
              })
            }),
            c.jsx(Ne, {
              title: b.t("json_table_show_all"),
              children: c.jsx(Re, {
                size: "small",
                onClick: () => $(true),
                "aria-label": b.t("json_table_show_all"),
                children: c.jsx(yu, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: b.t("json_table_hide_all"),
              children: c.jsx(Re, {
                size: "small",
                onClick: () => $(false),
                "aria-label": b.t("json_table_hide_all"),
                children: c.jsx(Hs, {
                  fontSize: "small"
                })
              })
            }),
            c.jsx(Ne, {
              title: b.t("json_table_reset_all"),
              children: c.jsx(Re, {
                size: "small",
                onClick: J,
                "aria-label": b.t("json_table_reset_all"),
                children: c.jsx(yn, {
                  fontSize: "small"
                })
              })
            })
          ]
        }),
        c.jsx(L, {
          sx: {
            flexGrow: 1,
            overflow: "auto",
            p: 1.5,
            display: "flex",
            flexDirection: "column",
            gap: 0.75
          },
          children: _.length === 0 ? c.jsx(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4
            },
            children: c.jsx(D, {
              variant: "body2",
              color: "text.secondary",
              children: e.length === 0 ? b.t("json_table_no_columns") : b.t("json_table_no_search_results")
            })
          }) : _.map((S, T) => {
            const N = t.find((Q) => Q.path === S.path), H = n === S.path, se = (N == null ? void 0 : N.type) || "string";
            return c.jsx(Ta, {
              ref: w(S.path),
              "data-column-path": S.path,
              onClick: () => r(S.path),
              onKeyDown: (Q) => E(Q, S, T),
              draggable: x,
              onDragStart: x ? (Q) => R(Q, S.path) : void 0,
              onDragEnter: x ? (Q) => F(Q, S.path) : void 0,
              onDragLeave: x ? A : void 0,
              onDragOver: x ? P : void 0,
              onDrop: x ? (Q) => q(Q, S.path) : void 0,
              onDragEnd: x ? k : void 0,
              variant: "outlined",
              tabIndex: 0,
              role: "button",
              "aria-selected": H,
              "aria-label": `${S.headerName || S.path}, ${se}, ${S.visible ? b.t("json_table_visible") : b.t("json_table_hidden")}`,
              sx: {
                p: 1,
                cursor: x ? "grab" : "pointer",
                flexShrink: 0,
                border: 2,
                borderColor: H ? "primary.main" : "divider",
                backgroundColor: H ? "action.selected" : "background.paper",
                opacity: d === S.path ? 0.4 : S.visible ? 1 : 0.55,
                borderTop: f === S.path ? "3px solid" : void 0,
                borderTopColor: f === S.path ? "primary.main" : void 0,
                "&:hover": {
                  backgroundColor: H ? "action.selected" : "action.hover"
                },
                "&:focus": {
                  outline: "2px solid",
                  outlineColor: "primary.main",
                  outlineOffset: "2px"
                },
                transition: "all 0.15s ease-in-out"
              },
              children: c.jsxs(L, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: 1
                },
                children: [
                  x && c.jsx(du, {
                    fontSize: "small",
                    sx: {
                      color: "text.disabled",
                      cursor: "grab",
                      flexShrink: 0
                    },
                    "aria-hidden": "true"
                  }),
                  c.jsx(Rn, {
                    checked: S.visible,
                    onClick: (Q) => M(Q, S.path),
                    size: "small",
                    sx: {
                      p: 0.5
                    },
                    inputProps: {
                      "aria-label": `${b.t("json_table_visible")}: ${S.headerName || S.path}`
                    }
                  }),
                  c.jsxs(L, {
                    sx: {
                      flexGrow: 1,
                      minWidth: 0
                    },
                    children: [
                      c.jsx(D, {
                        variant: "body2",
                        sx: {
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          fontSize: "0.8rem"
                        },
                        title: S.path,
                        children: S.headerName || S.path
                      }),
                      S.headerName && S.headerName !== S.path && c.jsx(D, {
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
                        title: S.path,
                        children: S.path
                      })
                    ]
                  }),
                  c.jsx(mt, {
                    label: se,
                    size: "small",
                    sx: {
                      backgroundColor: Cn[se] || Cn.string,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      height: 20,
                      minWidth: 48,
                      flexShrink: 0
                    },
                    "aria-label": `${b.t("json_table_type")}: ${se}`
                  })
                ]
              })
            }, S.path);
          })
        }),
        e.length > 0 && c.jsx(L, {
          sx: {
            borderTop: 1,
            borderColor: "divider",
            px: 2,
            py: 1
          },
          children: c.jsxs(D, {
            variant: "caption",
            color: "text.secondary",
            "aria-live": "polite",
            "aria-atomic": "true",
            children: [
              C,
              " / ",
              e.length,
              " ",
              b.t("json_table_columns_visible")
            ]
          })
        }),
        c.jsxs(Kr, {
          open: p,
          onClose: U,
          "aria-labelledby": "reset-dialog-title",
          "aria-describedby": "reset-dialog-description",
          children: [
            c.jsx(Xr, {
              id: "reset-dialog-title",
              children: b.t("json_table_reset_all")
            }),
            c.jsx(Qr, {
              children: c.jsx(Ba, {
                id: "reset-dialog-description",
                children: b.t("json_table_reset_confirm_message")
              })
            }),
            c.jsxs(io, {
              children: [
                c.jsx(lt, {
                  onClick: U,
                  color: "primary",
                  children: b.t("cancel")
                }),
                c.jsx(lt, {
                  onClick: W,
                  color: "error",
                  variant: "contained",
                  autoFocus: true,
                  children: b.t("json_table_reset_all")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function tr(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : typeof e == "string" ? e : `${e}`;
  }
  const _u = 0, wu = 20, Go = 2;
  function Cu(e) {
    if (e == null) return Go;
    const t = Number(e);
    return Number.isFinite(t) ? Math.max(_u, Math.min(wu, Math.floor(t))) : Go;
  }
  function Vs(e, t = {}) {
    const { prefix: n = "", suffix: r = "", thousands: o = false } = t, s = Cu(t.decimals);
    let i = e.toFixed(s);
    if (o) {
      const [l, a] = i.split("."), d = l.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      i = a !== void 0 ? `${d}.${a}` : d;
    }
    return `${n}${i}${r}`;
  }
  const Su = [
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
  function ju(e, t) {
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
  function kr(e, t) {
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
  function lo(e, t, n) {
    if (e == null || e === "") return "";
    try {
      let r;
      if (typeof e == "string") {
        const a = e.trim();
        if (n == null ? void 0 : n.startsWith("dd.MM.yyyy")) {
          const d = a.match(/^(\d{2})\.(\d{2})\.(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[2]}-${d[1]}${d[4] ?? ""}`) : new Date(a);
        } else if (n == null ? void 0 : n.startsWith("MM/dd/yyyy")) {
          const d = a.match(/^(\d{2})\/(\d{2})\/(\d{4})(.*)$/);
          r = d ? /* @__PURE__ */ new Date(`${d[3]}-${d[1]}-${d[2]}${d[4] ?? ""}`) : new Date(a);
        } else if (/^\d{4}-\d{2}-\d{2}$/.test(a)) {
          const [d, u, f] = a.split("-").map(Number);
          r = new Date(d, u - 1, f);
        } else r = new Date(a);
      } else if (typeof e == "number") r = new Date(e >= 1e11 ? e : e * 1e3);
      else if (e instanceof Date) r = e;
      else return tr(e);
      if (isNaN(r.getTime())) return tr(e);
      const o = t || "yyyy-MM-dd", s = (a, d = 2) => String(a).padStart(d, "0"), i = {
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
      for (const [a, d] of Object.entries(i).sort((u, f) => f[0].length - u[0].length)) l = l.replaceAll(a, d);
      return l;
    } catch {
      return tr(e);
    }
  }
  function Or(e, t = "true", n = "false") {
    return typeof e == "boolean" ? e ? t : n : tr(e);
  }
  function Ws(e, t) {
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
  function Ru({ format: e, onChange: t, discoveredColumn: n }) {
    const r = y.useMemo(() => {
      if ((n == null ? void 0 : n.min) !== void 0 && typeof n.min == "number") {
        const o = typeof n.max == "number" ? n.max : 0;
        return n.min + (o - n.min) * 0.75;
      }
      return 1234.567;
    }, [
      n
    ]);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(D, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_number_format")
        }),
        c.jsxs(L, {
          children: [
            c.jsxs(D, {
              variant: "caption",
              color: "text.secondary",
              gutterBottom: true,
              children: [
                b.t("json_table_number_decimals"),
                ": ",
                e.numberDecimals ?? 2
              ]
            }),
            c.jsx(Ii, {
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
        c.jsx(je, {
          label: b.t("json_table_number_prefix"),
          value: e.numberPrefix || "",
          onChange: (o) => t({
            type: "number",
            numberPrefix: o.target.value
          }),
          size: "small",
          placeholder: "$, \u20AC, \xA3"
        }),
        c.jsx(je, {
          label: b.t("json_table_number_suffix"),
          value: e.numberSuffix || "",
          onChange: (o) => t({
            type: "number",
            numberSuffix: o.target.value
          }),
          size: "small",
          placeholder: "%, kg, \xB0C"
        }),
        c.jsx(Nt, {
          control: c.jsx(vn, {
            checked: e.numberThousandsSeparator || false,
            onChange: (o) => t({
              type: "number",
              numberThousandsSeparator: o.target.checked
            }),
            size: "small"
          }),
          label: c.jsx(D, {
            variant: "body2",
            children: b.t("json_table_number_thousands")
          })
        }),
        c.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(D, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: [
                r,
                " \u2192",
                " ",
                Vs(r, {
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
  function Mu({ format: e, detectedFormat: t, onChange: n }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(D, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_date_format")
        }),
        t && c.jsx(je, {
          label: b.t("json_table_date_input_format"),
          value: t,
          disabled: true,
          size: "small",
          helperText: b.t("json_table_date_detected_hint")
        }),
        c.jsxs(ft, {
          fullWidth: true,
          size: "small",
          children: [
            c.jsx(gt, {
              children: b.t("json_table_date_output_format")
            }),
            c.jsx(it, {
              label: b.t("json_table_date_output_format"),
              value: e.dateFormat || "yyyy-MM-dd",
              onChange: (r) => n({
                type: "date",
                dateFormat: r.target.value,
                dateInputFormat: t
              }),
              children: Su.map((r) => c.jsx(ie, {
                value: r.value,
                children: r.label
              }, r.value))
            })
          ]
        }),
        c.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(D, {
              variant: "body2",
              sx: {
                mt: 0.5,
                fontFamily: "monospace"
              },
              children: lo(/* @__PURE__ */ new Date(), e.dateFormat || "yyyy-MM-dd")
            })
          ]
        })
      ]
    });
  }
  function $u({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(D, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_boolean_format")
        }),
        c.jsx(je, {
          label: b.t("json_table_boolean_true"),
          value: e.booleanTrue || "",
          onChange: (n) => t({
            type: "boolean",
            booleanTrue: n.target.value
          }),
          size: "small",
          placeholder: "Yes, On, \u2713, Active"
        }),
        c.jsx(je, {
          label: b.t("json_table_boolean_false"),
          value: e.booleanFalse || "",
          onChange: (n) => t({
            type: "boolean",
            booleanFalse: n.target.value
          }),
          size: "small",
          placeholder: "No, Off, \u2717, Inactive"
        }),
        c.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsxs(ze, {
              direction: "row",
              spacing: 2,
              sx: {
                mt: 0.5
              },
              children: [
                c.jsxs(D, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "true \u2192 ",
                    Or(true, e.booleanTrue, e.booleanFalse)
                  ]
                }),
                c.jsxs(D, {
                  variant: "body2",
                  sx: {
                    fontFamily: "monospace"
                  },
                  children: [
                    "false \u2192 ",
                    Or(false, e.booleanTrue, e.booleanFalse)
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Nr({ value: e, onChange: t, label: n }) {
    const r = on(), [o, s] = y.useState(null), [i, l] = y.useState(e), a = y.useRef(null), { anchorOrigin: d, transformOrigin: u, maxHeight: f, setContentRef: g, popoverActionRef: p } = mi(o, !!o), h = !!o;
    y.useEffect(() => {
      l(e);
    }, [
      e
    ]), y.useEffect(() => () => {
      a.current !== null && clearTimeout(a.current);
    }, []);
    const m = y.useCallback((v) => {
      l(v), a.current !== null && clearTimeout(a.current), a.current = setTimeout(() => {
        a.current = null, t(v);
      }, 150);
    }, [
      t
    ]);
    return c.jsxs(L, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: r.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (v) => s(v.currentTarget),
          children: [
            c.jsx(D, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            c.jsx(L, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: i || "transparent",
                border: i ? `1px solid ${r.palette.divider}` : `1px dashed ${r.palette.text.disabled}`
              }
            }),
            i && c.jsx(Re, {
              size: "small",
              onClick: (v) => {
                v.stopPropagation(), a.current !== null && (clearTimeout(a.current), a.current = null), l(""), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: c.jsx(Ns, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        c.jsx(yi, {
          action: p,
          open: h,
          anchorEl: o,
          onClose: () => s(null),
          anchorOrigin: d,
          transformOrigin: u,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: f,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: c.jsx(L, {
            ref: g,
            sx: {
              borderRadius: "6px"
            },
            children: c.jsx(bi, {
              value: i || "#ffffff",
              onChange: m,
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
  function Au({ format: e, onChange: t }) {
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx(D, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            fontWeight: 500
          },
          children: b.t("json_table_string_format")
        }),
        c.jsxs(ft, {
          size: "small",
          fullWidth: true,
          children: [
            c.jsx(gt, {
              children: b.t("json_table_string_case")
            }),
            c.jsxs(it, {
              label: b.t("json_table_string_case"),
              value: e.stringCase ?? "none",
              onChange: (n) => t({
                type: "string",
                stringCase: n.target.value
              }),
              children: [
                c.jsx(ie, {
                  value: "none",
                  children: b.t("json_table_string_case_none")
                }),
                c.jsx(ie, {
                  value: "upper",
                  children: b.t("json_table_string_case_upper")
                }),
                c.jsx(ie, {
                  value: "lower",
                  children: b.t("json_table_string_case_lower")
                }),
                c.jsx(ie, {
                  value: "title",
                  children: b.t("json_table_string_case_title")
                })
              ]
            })
          ]
        }),
        c.jsxs(ze, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(je, {
              label: b.t("json_table_string_prefix"),
              value: e.stringPrefix ?? "",
              onChange: (n) => t({
                type: "string",
                stringPrefix: n.target.value || void 0
              }),
              size: "small",
              fullWidth: true
            }),
            c.jsx(je, {
              label: b.t("json_table_string_suffix"),
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
        c.jsx(Nt, {
          control: c.jsx(vn, {
            size: "small",
            checked: !!e.stringTrim,
            onChange: (n) => t({
              type: "string",
              stringTrim: n.target.checked
            })
          }),
          label: b.t("json_table_string_trim")
        }),
        c.jsx(je, {
          label: b.t("json_table_string_max_length"),
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
        c.jsx(je, {
          label: b.t("json_table_string_regex"),
          value: e.stringRegex ?? "",
          onChange: (n) => t({
            type: "string",
            stringRegex: n.target.value || void 0
          }),
          size: "small",
          fullWidth: true,
          placeholder: "e.g. (\\d+)"
        }),
        e.stringRegex && c.jsxs(ze, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(je, {
              label: b.t("json_table_string_regex_group"),
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
            c.jsx(je, {
              label: b.t("json_table_string_regex_flags"),
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
        c.jsx(Fr, {}),
        c.jsxs(ze, {
          direction: "row",
          spacing: 1,
          flexWrap: "wrap",
          children: [
            c.jsx(Nt, {
              control: c.jsx(vn, {
                size: "small",
                checked: e.stringFontWeight === "bold",
                onChange: (n) => t({
                  type: "string",
                  stringFontWeight: n.target.checked ? "bold" : "normal"
                })
              }),
              label: c.jsx(D, {
                variant: "body2",
                fontWeight: "bold",
                children: b.t("json_table_string_font_weight")
              })
            }),
            c.jsx(Nt, {
              control: c.jsx(vn, {
                size: "small",
                checked: e.stringFontStyle === "italic",
                onChange: (n) => t({
                  type: "string",
                  stringFontStyle: n.target.checked ? "italic" : "normal"
                })
              }),
              label: c.jsx(D, {
                variant: "body2",
                fontStyle: "italic",
                children: b.t("json_table_string_font_style")
              })
            })
          ]
        }),
        c.jsxs(ze, {
          direction: "row",
          spacing: 1,
          children: [
            c.jsx(je, {
              label: b.t("json_table_string_font_size"),
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
            c.jsx(Nr, {
              label: b.t("json_table_string_text_color"),
              value: e.stringTextColor ?? "",
              onChange: (n) => t({
                type: "string",
                stringTextColor: n || void 0
              })
            })
          ]
        }),
        c.jsxs(nt, {
          variant: "outlined",
          sx: {
            p: 1.5,
            bgcolor: "action.hover"
          },
          children: [
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: b.t("json_table_preview")
            }),
            c.jsx(D, {
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
              children: Ws("Hello World", e ?? {
                type: "string"
              })
            })
          ]
        })
      ]
    });
  }
  function me(e) {
    if (Number.isNaN(e)) throw NaN;
    if (!e) return e;
    if (e && typeof e == "object") throw NaN;
    return e;
  }
  function Iu(e, t) {
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
      for (let r = 0; r < n.length; r++) {
        const o = e[n[r]];
        if (typeof o == "object" && o) {
          if (t === 0) throw {
            type: "Exceeded Allowed Depth"
          };
          ht(o, t - 1);
        }
      }
    }
    return e;
  }
  function Pu(e, t, n) {
    if (n || (typeof e == "string" || e === null) && (typeof t == "string" || t === null)) return e;
    if (Number.isNaN(+me(e)) && t !== null) throw NaN;
    if (Number.isNaN(+me(t))) throw NaN;
    return t === null && !e ? null : e === null && !t ? 0 : e;
  }
  async function Fu(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) await t(o, r++, e) && n.push(o);
    return n;
  }
  async function Tu(e, t) {
    let n = 0;
    for (const r of e) if (await t(r, n++, e)) return true;
    return false;
  }
  async function Du(e, t) {
    let n = 0;
    for (const r of e) if (!await t(r, n++, e)) return false;
    return true;
  }
  async function zu(e, t) {
    const n = [];
    let r = 0;
    for (const o of e) n.push(await t(o, r++, e));
    return n;
  }
  async function Eu(e, t, n, r = 0) {
    if (e.length === 0) {
      if (typeof n < "u") return n;
      throw new Error("Array has no elements.");
    }
    const o = typeof n > "u" ? 1 : 0;
    let s = ht(o ? e[0] : n, r);
    for (let i = o; i < e.length; i++) s = ht(await t(s, e[i]), r);
    return s;
  }
  const lr = {
    filter: Fu,
    some: Tu,
    every: Du,
    map: zu,
    reduce: Eu
  }, oe = /* @__PURE__ */ Symbol.for("json_logic_sync"), De = /* @__PURE__ */ Symbol.for("json_logic_compiled"), Xe = /* @__PURE__ */ Symbol.for("json_logic_original"), Uo = /* @__PURE__ */ Symbol.for("json_logic_unfound");
  function Bt(e) {
    return typeof e == "function" ? e[oe] === true : Array.isArray(e) ? e.every(Bt) : !(e && e.asyncMethod && !e.method);
  }
  function Gs(e, t = true) {
    return e[oe] = t, e;
  }
  function An(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const br = /* @__PURE__ */ new WeakMap();
  function qo(e) {
    return !e || typeof e != "function" || !e.length ? 0 : (br.has(e) || br.set(e, ku(e)), br.get(e));
  }
  function ku(e) {
    if (!e || typeof e != "function" || !e.length) return 0;
    let t = e.toString();
    return t[0] !== "(" && t[0] !== "f" || (t = t.substring(t.indexOf("("), t.indexOf("{")).replace(/=>/g, ""), /\.{3}|=/.test(t)) ? 0 : e.length;
  }
  function Ou(e, ...t) {
    let n = "";
    const r = this;
    for (let o = 0; o < e.length; o++) n += e[o], o < t.length && (typeof t[o] == "function" ? (this.methods.push(t[o]), Bt(t[o]) || (r.asyncDetected = true), n += (Bt(t[o]) ? "" : " await ") + "methods[" + (r.methods.length - 1) + "]") : t[o] && typeof t[o][De] < "u" ? n += t[o][De] : n += ye(t[o], r));
    return {
      [De]: n
    };
  }
  function Nu(e, t) {
    return typeof e == "number" && (e === 1 / 0 || e === -1 / 0 || Number.isNaN(e)) ? false : e == null || [
      "Number",
      "String",
      "Boolean"
    ].includes(e.constructor.name) || !t && e.constructor.name === "Object";
  }
  function ar(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => ar(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && ar(o, t, n);
    }
    return true;
  }
  function Lr(e, t) {
    if (!t.async) return true;
    if (Array.isArray(e)) return e.every((n) => Lr(n, t));
    if (e && typeof e == "object") {
      const n = Object.keys(e);
      if (n.length === 0) return true;
      const r = n[0], o = e[r];
      return Bt(t.methods[r]) ? t.methods[r].lazy ? !!(typeof t.methods[r][oe] == "function" && t.methods[r][oe](e, {
        engine: t
      })) : Lr(o, t) : false;
    }
    return true;
  }
  function ye(e, t = {}) {
    const { notTraversed: n = [], async: r, processing: o = [], values: s = [], engine: i } = t;
    function l(u, f = false) {
      return Nu(u, f) ? JSON.stringify(u) : (s.push(u), `values[${s.length - 1}]`);
    }
    if (Array.isArray(e)) {
      let u = "";
      for (let f = 0; f < e.length; f++) f > 0 && (u += ","), u += ye(e[f], t);
      return "[" + u + "]";
    }
    let a = false;
    function d(u) {
      return t.asyncDetected = t.asyncDetected || a, r && a ? `await ${u}` : u;
    }
    if (e && typeof e == "object") {
      const u = Object.keys(e), f = u[0];
      if (!f) return l(e);
      if (!i.methods[f] || u.length > 1) {
        if (i.isData(e, f)) return l(e, true);
        throw {
          type: "Unknown Operator",
          key: f
        };
      }
      if (!t.engine.disableInline && i.methods[f] && ar(e, i, t)) return Lr(e, i) ? l((i.fallback || i).run(e), true) : t.avoidInlineAsync ? (t.asyncDetected = true, `(await ${l(i.run(e))})`) : (o.push(i.run(e).then((m) => l(m))), `__%%%${o.length - 1}%%%__`);
      let g = e[f];
      if ((!g || typeof g != "object") && !i.methods[f].lazy && (g = [
        g
      ]), i.methods[f] && i.methods[f].compile) {
        let m = i.methods[f].compile(g, t);
        if (m[De] && (m = m[De]), (m || "").startsWith("await") && (t.asyncDetected = true), m !== false) return m;
      }
      let p = i.methods[f].optimizeUnary ? "" : "coerceArray";
      !p && Array.isArray(g) && g.length === 1 && !Array.isArray(g[0]) ? g = g[0] : p && Array.isArray(g) && (p = "");
      const h = [
        ", context",
        ", context, above",
        ", context, above, engine"
      ];
      if (typeof i.methods[f] == "function") {
        a = !Bt(i.methods[f]);
        const m = h[qo(i.methods[f]) - 1] || h[2];
        return d(`engine.methods["${f}"](${p}(` + ye(g, t) + ")" + m + ")");
      } else {
        a = !!(r && i.methods[f] && i.methods[f].asyncMethod);
        const m = qo(a ? i.methods[f].asyncMethod : i.methods[f].method);
        let v = h[m - 1] || h[2];
        return a && typeof i.methods[f][oe] == "function" && i.methods[f][oe](g, {
          engine: i
        }) && (a = false, v = v.replace("engine", "engine.fallback")), i.methods[f] && !i.methods[f].lazy ? d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(${p}(` + ye(g, t) + ")" + v + ")") : (n.push(g), d(`engine.methods["${f}"]${a ? ".asyncMethod" : ".method"}(notTraversed[${n.length - 1}]` + v + ")"));
      }
    }
    return l(e);
  }
  function cr(e, t = {}) {
    Object.assign(t, Object.assign({
      notTraversed: [],
      methods: [],
      state: {},
      processing: [],
      async: t.engine.async,
      asyncDetected: false,
      values: [],
      compile: Ou
    }, t));
    const n = ye(e, t);
    return Lu(e, n, t);
  }
  function Lu(e, t, n) {
    const { engine: r, methods: o, notTraversed: s, processing: i = [], values: l } = n, a = [];
    i.forEach((u, f) => {
      t = t.replace(`__%%%${f}%%%__`, u);
    });
    const d = `(values, methods, notTraversed, asyncIterators, engine, above, coerceArray, precoerceNumber, assertSize, compareCheck, assertAllowedDepth) => ${n.asyncDetected ? "async" : ""} (context ${n.extraArguments ? "," + n.extraArguments : ""}) => { ${t.includes("prev") ? "let prev;" : ""} const result = ${t}; return result }`;
    return Object.assign((typeof globalThis < "u" ? globalThis : global).eval(d)(l, o, s, lr, r, a, An, me, Iu, Pu, ht), {
      [oe]: !n.asyncDetected,
      deterministic: !t.includes("("),
      aboveDetected: typeof t == "string" && t.includes(", above")
    });
  }
  const Hu = () => {
    try {
      const e = {};
      return (typeof globalThis < "u" ? globalThis : global).eval("(test) => test?.foo?.bar")(e) === void 0;
    } catch {
      return false;
    }
  }, Qt = Hu(), dn = /* @__PURE__ */ new Map();
  function Jt(e) {
    if (dn.has(e)) return dn.get(e);
    dn.size > 2048 && dn.clear();
    const t = Bu(e);
    return dn.set(e, t), t;
  }
  function Bu(e, t = ".", n = "\\", r = "/") {
    const o = [];
    let s = "";
    for (let i = 0; i < e.length; i++) {
      const l = e[i];
      l === n ? e[i + 1] === t || e[i + 1] === r ? (s += e[i + 1], i++) : e[i + 1] === n ? (s += n, i++) : s += n : l === t ? (o.push(s), s = "") : s += l;
    }
    return o.length !== e.length && o.push(s), o;
  }
  const Hr = {
    get: {
      [oe]: true,
      method: ([e, t, n], r, o, s) => {
        const i = n === void 0 ? null : n, l = Jt(String(t));
        for (let a = 0; a < l.length; a++) if (e == null || (e = e[l[a]], e === void 0)) return i;
        return s.allowFunctions || typeof e[t] != "function" ? e : null;
      },
      deterministic: true,
      compile: (e, t) => {
        let n = null, r = e, o = null;
        if (Array.isArray(e) && e.length <= 3) {
          if (o = e[0], r = e[1], n = typeof e[2] > "u" ? null : e[2], r && typeof r == "object") return false;
          r = r.toString();
          const s = Jt(r);
          return Qt ? `((${ye(o, t)})${s.map((i) => `?.[${ye(i, t)}]`).join("")} ?? ${ye(n, t)})` : `(((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${s.reduce((i, l) => `(${i}||0)[${JSON.stringify(l)}]`, `(${ye(o, t)}||0)`)}, ${ye(n, t)}))`;
        }
        return false;
      }
    },
    var: {
      [Xe]: true,
      [oe]: true,
      method: (e, t, n, r) => {
        let o;
        Array.isArray(e) && (o = e[1], e = e[0]);
        let s = 0;
        for (; typeof e == "string" && e.startsWith("../") && s < n.length; ) t = n[s++], e = e.substring(3), s === n.length && Array.isArray(t) && (s = 0, n = t, t = n[s++]);
        const i = o === void 0 ? null : o;
        if (typeof e > "u" || e === "" || e === null) return r.allowFunctions || typeof t != "function" ? t : null;
        const l = Jt(String(e));
        for (let a = 0; a < l.length; a++) if (t == null || (t = t[l[a]], t === void 0)) return i;
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
          const o = Jt(n);
          if (!Qt) {
            const i = `((((a,b) => (typeof a === 'undefined' || a === null) ? b : a)(${o.reduce((l, a) => `(${l}||0)[${JSON.stringify(a)}]`, "(context||0)")}, ${ye(r, t)})))`;
            return t.engine.allowFunctions ? i : `(typeof (prev = ${i}) === 'function' ? null : prev)`;
          }
          const s = `(context${o.map((i) => `?.[${JSON.stringify(i)}]`).join("")} ?? ${ye(r, t)})`;
          return t.engine.allowFunctions ? s : `(typeof (prev = ${s}) === 'function' ? null : prev)`;
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
        for (let r = 0; r < e.length; r++) {
          const o = Jt(String(e[r]));
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
      [oe]: true,
      optimizeUnary: false,
      method: ([e, t], n) => {
        const r = Hr.missing.method(t, n);
        return t.length - r.length >= e ? [] : r;
      },
      compile: ([e, t], n) => {
        if (!Array.isArray(t)) return false;
        let r = Hr.missing.compile(t, n);
        return r || (r = n.compile`engine.methods.missing.method(${{
          [De]: JSON.stringify(t)
        }}, context)`), n.compile`${t.length} - (prev = ${r}).length < ${e} ? prev : []`;
      },
      deterministic: false
    }
  }, Vu = {
    ...Hr
  }, re = {
    type: "Invalid Arguments"
  };
  function $e(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => $e(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic : typeof t.methods[r].deterministic == "function" ? t.methods[r].deterministic(o, n) : t.methods[r].deterministic && $e(o, t, n);
    }
    return true;
  }
  function Oe(e, t, n) {
    if (Array.isArray(e)) return e.every((r) => Oe(r, t, n));
    if (e && typeof e == "object") {
      const r = Object.keys(e)[0], o = e[r];
      if (t.isData(e, r) || r === void 0) return true;
      if (!t.methods[r]) throw {
        type: "Unknown Operator",
        key: r
      };
      return t.methods[r].lazy ? typeof t.methods[r][oe] == "function" ? t.methods[r][oe](o, n) : t.methods[r][oe] : typeof t.methods[r][oe] == "function" ? t.methods[r][oe](o, n) : t.methods[r][oe] && Oe(o, t, n);
    }
    return true;
  }
  function de(e, t, n, r) {
    if (!e || typeof e != "object") return e;
    if (!t.disableInterpretedOptimization && t.optimizedMap.has(e)) {
      const o = t.optimizedMap.get(e);
      return typeof o == "function" ? o(n, r) : o;
    }
    return t.run(e, n, {
      above: r
    });
  }
  const pn = nr("every", true), ne = {
    "+": (e) => {
      if (!e) return 0;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return me(+e);
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
      if (e.length === 0) throw re;
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
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return me(-e);
      if (typeof e == "object" && !Array.isArray(e)) throw NaN;
      if (e[0] && typeof e[0] == "object") throw NaN;
      if (e.length === 0) throw re;
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
      if (e.length < 2) throw re;
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
      if (!e.length || typeof e[0] != "number") throw re;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw re;
        e[n] > t && (t = e[n]);
      }
      return t;
    },
    min: (e) => {
      if (!e.length || typeof e[0] != "number") throw re;
      let t = e[0];
      for (let n = 1; n < e.length; n++) {
        if (typeof e[n] != "number") throw re;
        e[n] < t && (t = e[n]);
      }
      return t;
    },
    in: ([e, t]) => (t || []).includes(e),
    preserve: {
      lazy: true,
      method: Gs((e) => e, true),
      [oe]: () => true
    },
    if: {
      [Xe]: true,
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        if (e.length === 1) return de(e[0], r, t, n);
        if (e.length < 2) return null;
        e = [
          ...e
        ], e.length % 2 !== 1 && e.push(null);
        const o = e.pop();
        for (; e.length; ) {
          const s = e.shift(), i = e.shift(), l = de(s, r, t, n);
          if (r.truthy(l)) return de(i, r, t, n);
        }
        return de(o, r, t, n);
      },
      [oe]: (e, t) => Oe(e, t.engine, t),
      deterministic: (e, t) => $e(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
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
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = de(e[s], r, t, n), r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), r.truthy(o)) return o;
        return o;
      },
      deterministic: (e, t) => $e(e, t.engine, t),
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
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        let o;
        for (let s = 0; s < e.length; s++) if (o = de(e[s], r, t, n), o != null) return o;
        return o === void 0 ? null : o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), o != null) return o;
        return o === void 0 ? null : o;
      },
      deterministic: (e, t) => $e(e, t.engine, t),
      compile: (e, t) => Qt ? Array.isArray(e) && e.length ? `(${e.map((n, r) => {
        const o = ye(n, t);
        return Array.isArray(n) || !n || typeof n != "object" || r === e.length - 1 ? o : "(" + o + ")";
      }).join(" ?? ")})` : `(${ye(e, t)}).reduce((a,b) => (a) ?? b, null)` : false,
      lazy: true
    },
    try: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, r) => {
        Array.isArray(e) || (e = [
          e
        ]);
        let o, s;
        for (let i = 0; i < e.length; i++) try {
          return s ? o = de(e[i], r, {
            type: s.type || s.error || s.message || s.constructor.name
          }, [
            null,
            t,
            n
          ]) : o = de(e[i], r, t, n), o;
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
      deterministic: (e, t) => $e(e[0], t.engine, {
        ...t,
        insideTry: true
      }) && $e(e, t.engine, {
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
            [De]: `((context, above) => { { above = [null, context, above]; context = ${JSON.stringify(r)}; `
          };
        }
        if (e.length > 1) for (let r = 1; r < e.length; r++) try {
          r === e.length - 1 ? n = t.compile`${n} try { return ${e[r]} } catch(err) { throw err; } ` : n = t.compile`${n} try { return ${e[r]} } catch(err) { context = { type: err.type || err.message || err.toString() }; } `;
        } catch (o) {
          Number.isNaN(o) && (o = {
            type: "NaN"
          }), r === e.length - 1 ? n = t.compile`${n} throw ${{
            [De]: JSON.stringify(o)
          }} ` : n = t.compile`${n} ${{
            [De]: `context = ${JSON.stringify(o)};`
          }}`;
        }
        else n[De].includes("err") ? n = t.compile`${n} throw err;` : n = t.compile`${n} throw context;`;
        return n = t.compile`${n} } })(context, above)`, n[De].includes("await") && (n[De] = n[De].replace("((context", "await (async (context")), n;
      }
    },
    and: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = de(e[s], r, t, n), !r.truthy(o)) return o;
        return o;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        if (!e.length) return null;
        let o;
        for (let s = 0; s < e.length; s++) if (o = await r.run(e[s], t, {
          above: n
        }), !r.truthy(o)) return o;
        return o;
      },
      lazy: true,
      deterministic: (e, t) => $e(e, t.engine, t),
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
        if (!e) throw re;
        const o = de(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw re;
      },
      asyncMethod: async (e, t, n, r) => {
        if (!e) throw re;
        const o = await de(e, r, t, n), s = Array.isArray(e) ? o[0] : o;
        if (typeof s == "string" || Array.isArray(s)) return s.length;
        if (s && typeof s == "object") return Object.keys(s).length;
        throw re;
      },
      deterministic: (e, t) => $e(e, t.engine, t),
      lazy: true
    },
    exists: {
      method: (e, t, n, r) => ne.val.method(e, t, n, r, Uo) !== Uo,
      deterministic: false
    },
    val: {
      [Xe]: true,
      [oe]: true,
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
          let a = 0;
          for (let d = 0; d < l; d++) s = n[a++], d === n.length - 1 && Array.isArray(s) && (n = s, s = s[0], a = 1);
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
          return Qt ? o = t.compile`(${r} ?? null)` : o = t.compile`(((a) => a === null || a === undefined ? null : a)(${r}))`, t.engine.allowFunctions || (o = t.compile`(typeof (prev = ${o}) === 'function' ? null : prev)`), o;
        }
        if (typeof e == "object" && !Array.isArray(e)) if (Oe(e, t.engine, t) && $e(e, t.engine, t) && !t.engine.disableInline) e = (t.engine.fallback || t.engine).run(e, t.context, {
          above: t.above
        });
        else return false;
        if (Array.isArray(e) && Array.isArray(e[0])) return t.iteratorCompile && Math.abs(e[0][0] || 0) === 1 && e[1] === "index" ? t.compile`index` : false;
        if (Array.isArray(e) && e.length === 1 && (e = e[0]), e === null) return n(t.compile`context`);
        if (!Array.isArray(e)) return n(Qt ? t.compile`context?.[${e}]` : t.compile`(context || 0)[${e}]`);
        if (Array.isArray(e)) {
          let r = t.compile`context`;
          for (let o = 0; o < e.length; o++) e[o] !== null && (Qt ? r = t.compile`${r}?.[${e[o]}]` : r = t.compile`(${r}|| 0)[${e[o]}]`);
          return n(t.compile`(${r})`);
        }
        return false;
      }
    },
    map: nr("map"),
    some: {
      ...nr("some", true),
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        let [o, s] = e;
        o = de(o, r, t, n) || [];
        for (let i = 0; i < o.length; i++) if (r.truthy(de(s, r, o[i], [
          o,
          t,
          n
        ]))) return true;
        return false;
      }
    },
    all: {
      [oe]: pn[oe],
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        const o = de(e[0], r, t, n) || [];
        if (Array.isArray(o) && o.length === 0) return false;
        const s = e[1];
        for (let i = 0; i < o.length; i++) if (!r.truthy(de(s, r, o[i], [
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
        return pn.asyncMethod(e, t, n, r);
      },
      compile: (e, t) => Array.isArray(e) ? t.compile`Array.isArray(prev = ${e[0]}) && prev.length === 0 ? false : ${pn.compile([
        {
          [De]: "prev"
        },
        e[1]
      ], t)}` : false,
      deterministic: pn.deterministic,
      lazy: pn.lazy
    },
    none: {
      [oe]: (e, t) => Oe(e, t.engine, t),
      lazy: true,
      method: (e, t, n, r) => !ne.some.method(e, t, n, r),
      asyncMethod: async (e, t, n, r) => !await ne.some.asyncMethod(e, t, n, r),
      compile: (e, t) => {
        const n = ne.some.compile(e, t);
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
    filter: nr("filter", true),
    reduce: {
      deterministic: (e, t) => $e(e[0], t.engine, t) && $e(e[1], t.engine, {
        ...t,
        insideIterator: true
      }),
      compile: (e, t) => {
        if (!Array.isArray(e)) throw re;
        const { async: n } = t;
        let [r, o, s] = e;
        r = ye(r, t), typeof s < "u" && (s = ye(s, t));
        const i = {
          ...t,
          extraArguments: "above",
          avoidInlineAsync: true
        };
        o = cr(o, i);
        const l = o.aboveDetected ? "[null, context, above]" : "null", a = t.engine.options.maxDepth === 1 / 0 ? "" : "assertAllowedDepth";
        return t.methods.push(o), n && (!Bt(o) || r.includes("await")) ? (t.asyncDetected = true, typeof s < "u" ? `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), ${s}, ${t.engine.options.maxDepth})` : `await asyncIterators.reduce(${r} || [], (a,b) => methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l}), undefined, ${t.engine.options.maxDepth})`) : typeof s < "u" ? `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})), ${a}(${s}))` : `(${r} || []).reduce((a,b) => ${a}(methods[${t.methods.length - 1}]({ accumulator: a, current: b }, ${l})))`;
      },
      method: (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        let [o, s, i] = e;
        i = ht(de(i, r, t, n), r.options.maxDepth), o = de(o, r, t, n) || [];
        let l = (a, d) => ht(r.run(s, {
          accumulator: a,
          current: d
        }, {
          above: [
            o,
            t,
            n
          ]
        }), r.options.maxDepth);
        if (r.optimizedMap.has(s) && typeof r.optimizedMap.get(s) == "function") {
          const a = r.optimizedMap.get(s);
          l = (d, u) => ht(a({
            accumulator: d,
            current: u
          }, [
            o,
            t,
            n
          ]), r.options.maxDepth);
        }
        return typeof i > "u" ? o.reduce(l) : o.reduce(l, i);
      },
      [oe]: (e, t) => Oe(e, t.engine, t),
      asyncMethod: async (e, t, n, r) => {
        if (!Array.isArray(e)) throw re;
        let [o, s, i] = e;
        return i = ht(await r.run(i, t, {
          above: n
        }), r.options.maxDepth), o = await r.run(o, t, {
          above: n
        }) || [], lr.reduce(o, (l, a) => r.run(s, {
          accumulator: l,
          current: a
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
      [Xe]: true,
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
        for (let r = 0; r < e.length; r++) n = t.compile`${n} + ${e[r]}`;
        return t.compile`(${n})`;
      }
    },
    keys: ([e]) => typeof e == "object" ? Object.keys(e) : [],
    pipe: {
      lazy: true,
      [oe]: (e, t) => Oe(e, t.engine, t),
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
        for (let r = 1; r < e.length; r++) n = t.compile`${cr(e[r], {
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
        return $e(n, t.engine, t) && $e(e, t.engine, {
          ...t,
          insideIterator: true
        });
      }
    },
    eachKey: {
      lazy: true,
      [oe]: (e, t) => Oe(Object.values(e[Object.keys(e)[0]]), t.engine, t),
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
        if (e && typeof e == "object") return Object.values(e).every((n) => $e(n, t.engine, t));
        throw re;
      },
      compile: (e, t) => {
        if (e && typeof e == "object") return `({ ${Object.keys(e).reduce((r, o) => (r.push(`${JSON.stringify(o)}: ${ye(e[o], t)}`), r), []).join(",")} })`;
        throw re;
      },
      asyncMethod: async (e, t, n, r) => await lr.reduce(Object.keys(e), async (s, i) => {
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
  function _t(e, t) {
    const n = {
      [De]: e
    }, r = e.length === 3;
    return {
      method: (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw re;
        if (o.length === 2) {
          const d = de(o[0], l, s, i), u = de(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+me(d))) throw NaN;
          if (Number.isNaN(+me(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = de(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const u = de(o[d], l, s, i);
          if ((r || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+me(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+me(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
        }
        return true;
      },
      asyncMethod: async (o, s, i, l) => {
        if (!Array.isArray(o) || o.length <= 1) throw re;
        if (o.length === 2) {
          const d = await de(o[0], l, s, i), u = await de(o[1], l, s, i);
          if (r || (typeof d == "string" || d === null) && (typeof u == "string" || u === null)) return t(d, u);
          if (Number.isNaN(+me(d))) throw NaN;
          if (Number.isNaN(+me(u)) && d !== null) throw NaN;
          return t(+d, +u);
        }
        let a = await de(o[0], l, s, i);
        for (let d = 1; d < o.length; d++) {
          const u = await de(o[d], l, s, i);
          if ((r || (typeof u == "string" || u === null) && (typeof a == "string" || a === null)) && !t(a, u)) return false;
          if (Number.isNaN(+me(u)) && a !== null) throw NaN;
          if (d === 1 && Number.isNaN(+me(a))) throw NaN;
          if (!t(+a, +u)) return false;
          a = u;
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
      [Xe]: true,
      [oe]: (o, s) => Oe(o, s.engine, s),
      deterministic: (o, s) => $e(o, s.engine, s),
      lazy: true
    };
  }
  function nr(e, t = false) {
    return {
      deterministic: (n, r) => $e(n[0], r.engine, r) && $e(n[1], r.engine, {
        ...r,
        insideIterator: true
      }),
      [Xe]: true,
      [oe]: (n, r) => Oe(n, r.engine, r),
      method: (n, r, o, s) => {
        if (!Array.isArray(n)) throw re;
        let [i, l] = n;
        return i = de(i, s, r, o) || [], i[e]((a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = de(l, s, a, [
            {
              iterator: i,
              index: d
            },
            r,
            o
          ]);
          return t ? s.truthy(u) : u;
        });
      },
      asyncMethod: async (n, r, o, s) => {
        if (!Array.isArray(n)) throw re;
        let [i, l] = n;
        return i = await s.run(i, r, {
          above: o
        }) || [], lr[e](i, async (a, d) => {
          if (!l || typeof l != "object") return t ? s.truthy(l) : l;
          const u = await s.run(l, a, {
            above: [
              {
                iterator: i,
                index: d
              },
              r,
              o
            ]
          });
          return t ? s.truthy(u) : u;
        });
      },
      compile: (n, r) => {
        if (!Array.isArray(n)) throw re;
        const { async: o } = r, [s, i] = n, l = {
          ...r,
          avoidInlineAsync: true,
          iteratorCompile: true,
          extraArguments: "index, above"
        }, a = cr(i, l), d = a.aboveDetected ? r.compile`[{ iterator: z, index: x }, context, above]` : r.compile`null`, u = t ? r.compile`engine.truthy` : r.compile``;
        return o && !Bt(a) ? (r.asyncDetected = true, r.compile`await asyncIterators[${e}](${s} || [], async (i, x, z) => ${u}(${a}(i, x, ${d})))`) : r.compile`(${s} || [])[${e}]((i, x, z) => ${u}(${a}(i, x, ${d})))`;
      },
      lazy: true
    };
  }
  ne.every = ne.all;
  ne["?:"] = ne.if;
  Object.keys(ne).forEach((e) => {
    typeof ne[e] == "function" && (ne[e][oe] = true), ne[e].deterministic = typeof ne[e].deterministic > "u" ? true : ne[e].deterministic;
  });
  ne.if.compile = function(e, t) {
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
  function Fn(e, t) {
    if (Array.isArray(e)) return me(NaN);
    if (typeof e == "number" || typeof e == "boolean") return "+" + ye(e, t);
    if (typeof e == "string") return "+" + me(+e);
    const n = ye(e, t);
    return /^-?\d+(\.\d*)?$/.test(n) ? "+" + n : n.startsWith('"') ? "+" + me(+JSON.parse(n)) : n === "true" ? "1" : n === "false" || n === "null" ? "0" : n.startsWith("[") || n.startsWith("{") ? me(NaN) : `(+precoerceNumber(${n}))`;
  }
  ne["+"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "(+0)" : `precoerceNumber(${e.map((n) => Fn(n, t)).join(" + ")})` : typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? `precoerceNumber(+${ye(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.reduce((a,b) => (+a)+(+precoerceNumber(b)), 0) : precoerceNumber(+prev))`;
  };
  ne["%"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length < 2) throw re;
      return `precoerceNumber(${e.map((n) => Fn(n, t)).join(" % ")})`;
    }
    return `assertSize(${ye(e, t)}, 2).reduce((a,b) => (+precoerceNumber(a))%(+precoerceNumber(b)))`;
  };
  ne.in.compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(${e[1]} || []).includes(${e[0]})` : false;
  };
  ne["-"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw re;
      return `${e.length === 1 ? "-" : ""}precoerceNumber(${e.map((n) => Fn(n, t)).join(" - ")})`;
    }
    return typeof e == "string" || typeof e == "number" ? `(-${ye(e, t)})` : t.compile`(Array.isArray(prev = ${e}) ? prev.length === 1 ? -precoerceNumber(prev[0]) : assertSize(prev, 1).reduce((a,b) => (+precoerceNumber(a))-(+precoerceNumber(b))) : -precoerceNumber(+prev))`;
  };
  ne["/"].compile = function(e, t) {
    if (Array.isArray(e)) {
      if (e.length === 0) throw re;
      return e.length === 1 && (e = [
        1,
        e[0]
      ]), `precoerceNumber(${e.map((n, r) => {
        let o = Fn(n, t);
        return r && o === "+0" && me(NaN), r && (o = `precoerceNumber(${o} || NaN)`), o;
      }).join(" / ")})`;
    }
    return `assertSize(prev = ${ye(e, t)}, 1) && prev.length === 1 ? 1 / precoerceNumber(prev[0] || NaN) : prev.reduce((a,b) => (+precoerceNumber(a))/(+precoerceNumber(b || NaN)))`;
  };
  ne["*"].compile = function(e, t) {
    return Array.isArray(e) ? e.length === 0 ? "1" : `precoerceNumber(${e.map((n) => Fn(n, t)).join(" * ")})` : `(${ye(e, t)}).reduce((a,b) => (+precoerceNumber(a))*(+precoerceNumber(b)), 1)`;
  };
  ne["!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!engine.truthy(${e[0]}))` : t.compile`(!engine.truthy(${e}))`;
  };
  ne.not = ne["!"];
  ne["!!"].compile = function(e, t) {
    return Array.isArray(e) ? t.compile`(!!engine.truthy(${e[0]}))` : t.compile`(!!engine.truthy(${e}))`;
  };
  ne.none.deterministic = ne.some.deterministic;
  ne.throw.deterministic = (e, t) => t.insideTry && $e(e, t.engine, t);
  ne["+"].optimizeUnary = ne["-"].optimizeUnary = ne["!"].optimizeUnary = ne["!!"].optimizeUnary = ne.cat.optimizeUnary = ne.throw.optimizeUnary = true;
  const Wu = {
    ...ne,
    ...Vu
  }, Gu = function(t) {
    return Object.keys(t).forEach((n) => {
      t[n] === void 0 && delete t[n];
    }), t;
  };
  function Uu(e, t, n, r) {
    const o = t.methods[n], s = o.method ? o.method : o;
    if (o.lazy) {
      const l = e[n];
      return (a, d) => s(l, a, d || r, t);
    }
    let i = e[n];
    if ((!i || typeof i != "object") && !o.optimizeUnary && (i = [
      i
    ]), Array.isArray(i) && i.length === 1 && o.optimizeUnary && !Array.isArray(i[0]) && (i = i[0]), Array.isArray(i)) {
      const l = i.map((a) => Fe(a, t, r));
      if (l.every((a) => typeof a != "function")) return (a, d) => s(l, a, d || r, t);
      if (l.length === 1) {
        const a = l[0];
        return (d, u) => s([
          a(d, u)
        ], d, u || r, t);
      }
      if (l.length === 2) {
        const [a, d] = l;
        return typeof a == "function" && typeof d == "function" ? (u, f) => s([
          a(u, f),
          d(u, f)
        ], u, f || r, t) : typeof a == "function" ? (u, f) => s([
          a(u, f),
          d
        ], u, f || r, t) : (u, f) => s([
          a,
          d(u, f)
        ], u, f || r, t);
      }
      return (a, d) => {
        const u = l.map((f) => typeof f == "function" ? f(a, d) : f);
        return s(u, a, d || r, t);
      };
    } else {
      const l = Fe(i, t, r);
      if (o.optimizeUnary) {
        const a = (d) => !d || typeof d[l] > "u" || typeof d[l] == "function" && !t.allowFunctions ? null : d[l];
        if (typeof l == "function") return (d, u) => s(l(d, u), d, u || r, t);
        if ((n === "var" || n === "val") && t.methods[n][Xe]) {
          if (!l && n !== "val") return (d) => d === null || typeof d > "u" || typeof d == "function" && !t.allowFunctions ? null : d;
          if (n === "val" || typeof l == "number" || !l.includes(".") && !l.includes("\\")) return a;
          if (n === "var" && !l.startsWith("../")) {
            const d = Jt(String(l));
            let u;
            if (d.length === 2) {
              const [f, g] = d;
              return (p) => (typeof (u = p && p[f] && p[f][g]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
            if (d.length === 3) {
              const [f, g, p] = d;
              return (h) => (typeof (u = h && h[f] && h[f][g] && h[f][g][p]) != "function" || t.allowFunctions) && typeof u < "u" ? u : null;
            }
          }
        }
        return (d, u) => s(l, d, u || r, t);
      }
      return typeof l == "function" ? (a, d) => s(An(l(a, d)), a, d || r, t) : (a, d) => s(An(l), a, d || r, t);
    }
  }
  const Yo = {
    "<": (e, t) => e < t,
    "<=": (e, t) => e <= t,
    ">": (e, t) => e > t,
    ">=": (e, t) => e >= t,
    "==": (e, t) => e == t,
    "===": (e, t) => e === t,
    "!=": (e, t) => e != t,
    "!==": (e, t) => e !== t
  };
  function qu(e, t, n) {
    if (e.val && t.methods.val[Xe] && Array.isArray(e.val) && e.val.length <= 3 && e.val.every((r) => typeof r != "object")) {
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
    if ((e.if || e["?:"]) && t.methods.if[Xe] && Array.isArray(e.if || e["?:"]) && (e.if || e["?:"]).length === 3) {
      const [r, o, s] = e.if || e["?:"], i = Fe(r, t, n), l = Fe(o, t, n), a = Fe(s, t, n);
      return typeof i == "function" && typeof l == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a(d, u) : typeof i == "function" && typeof l == "function" ? (d, u) => t.truthy(i(d, u)) ? l(d, u) : a : typeof i == "function" && typeof a == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a(d, u) : typeof i == "function" ? (d, u) => t.truthy(i(d, u)) ? l : a : t.truthy(i) ? l : a;
    }
    if (e.filter && t.methods.filter[Xe] && Array.isArray(e.filter) && e.filter.length === 2) {
      const [r, o] = e.filter, s = Fe(o, t, n);
      if (typeof s != "function") return t.truthy(s) ? Fe(r, t, n) : [];
    }
    for (const r in Yo) if (e[r] && Array.isArray(e[r]) && t.methods[r][Xe]) {
      const o = Yo[r], s = r.length === 3 ? o : function(l, a) {
        if ((typeof l == "string" || l === null) && (typeof a == "string" || a === null)) return o(l, a);
        if (Number.isNaN(+me(l))) throw NaN;
        if (Number.isNaN(+me(a)) && l !== null) throw NaN;
        return o(+l, +a);
      };
      if (e[r].length === 2) {
        const [i, l] = e[r], a = Fe(i, t, n), d = Fe(l, t, n);
        return typeof a == "function" && typeof d == "function" ? (u, f) => s(a(u, f), d(u, f)) : typeof a == "function" ? (u, f) => s(a(u, f), d) : typeof d == "function" ? (u, f) => s(a, d(u, f)) : s(a, d);
      }
      if (e[r].length === 3) {
        const [i, l, a] = e[r], d = Fe(i, t, n), u = Fe(l, t, n), f = Fe(a, t, n);
        let g;
        return typeof d == "function" && typeof u == "function" && typeof f == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" && typeof u == "function" ? (p, h) => s(d(p, h), g = u(p, h)) && s(g, f) : typeof d == "function" && typeof f == "function" ? (p, h) => s(d(p, h), u) && s(u, f(p, h)) : typeof u == "function" && typeof f == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f(p, h)) : typeof d == "function" ? (p, h) => s(d(p, h), u) && s(u, f) : typeof u == "function" ? (p, h) => s(d, g = u(p, h)) && s(g, f) : typeof f == "function" ? (p, h) => s(d, u) && s(u, f(p, h)) : s(d, u) && s(u, f);
      }
    }
    if (e.reduce && Array.isArray(e.reduce)) {
      let [r, o, s] = e.reduce;
      if (o["+"] && o["+"].length === 2 && (o["+"][0] || 0).var && (o["+"][1] || 0).var) {
        const i = o["+"][0].var === "accumulator" || o["+"][1].var === "accumulator", l = o["+"][0].var === "current" || o["+"][1].var === "current";
        if (s = s || 0, i && l) return Fe({
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
        if (s = typeof s > "u" ? 1 : s, i && l) return Fe({
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
  function Fe(e, t, n = []) {
    if (Array.isArray(e)) {
      const r = e.map((o) => Fe(o, t, n));
      return r.every((o) => typeof o != "function") ? r : (o, s) => r.map((i) => typeof i == "function" ? i(o, s) : i);
    }
    if (e && typeof e == "object") {
      const r = qu(e, t, n);
      if (typeof r < "u") return r;
      const o = Object.keys(e), s = o[0];
      if (o.length === 0) return e;
      if (t.isData(e, s)) return () => e;
      if (o.length > 1) throw {
        type: "Unknown Operator"
      };
      const l = !t.disableInline && ar(e, t, {
        engine: t
      });
      if (s in t.methods) {
        const a = Uu(e, t, s, n);
        return l ? a() : a;
      }
      throw {
        type: "Unknown Operator",
        key: s
      };
    }
    return e;
  }
  class Yu {
    constructor(t = Wu, n = {
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
      if ((o === "var" || o === "val") && this.methods[o][Xe]) {
        const l = !i || typeof i != "object" ? i : this.run(i, n, {
          above: r
        });
        return this.methods[o].method(l, n, r, this, null);
      }
      if (typeof this.methods[o] == "function") {
        const l = !i || typeof i != "object" ? [
          i
        ] : An(this.run(i, n, {
          above: r
        }));
        return this.methods[o](l, n, r, this);
      }
      if (typeof this.methods[o] == "object") {
        const { method: l, lazy: a } = this.methods[o], d = a ? i : !i || typeof i != "object" ? [
          i
        ] : An(this.run(i, n, {
          above: r
        }));
        return l(d, n, r, this);
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
      }, Object.assign(n, Gu({
        deterministic: r,
        optimizeUnary: o
      })), this.methods[t] = Gs(n);
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
        this.optimizedMap.set(t, Fe(t, this, o)), this.missesSinceSeen++;
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
      const { above: r = [], top: o = true } = n, s = cr(t, {
        engine: this,
        above: r
      });
      return o === false && s.deterministic ? s() : s;
    }
  }
  function We(e) {
    return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
  }
  const fr = new Yu();
  fr.addMethod("contains", ([e, t]) => We(e).includes(We(t)), {
    deterministic: true
  });
  fr.addMethod("startsWith", ([e, t]) => We(e).startsWith(We(t)), {
    deterministic: true
  });
  fr.addMethod("endsWith", ([e, t]) => We(e).endsWith(We(t)), {
    deterministic: true
  });
  function fn() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  }
  const Br = /* @__PURE__ */ new Set([
    "empty",
    "not_empty",
    "is_true",
    "is_false"
  ]), Ju = {
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
  }, Ku = [
    "eq",
    "neq",
    "empty",
    "not_empty"
  ], Xu = {
    var: "value"
  };
  function Qu(e, t, n = "string") {
    const r = Number(t), o = n === "number", s = n === "date", i = Xu;
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
  const Zu = /* @__PURE__ */ new Set([
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte"
  ]);
  function ed(e, t = "string") {
    const n = e.conditions.filter((o) => Br.has(o.operator) ? true : !(o.operand.trim() === "" || t === "number" && Zu.has(o.operator) && isNaN(Number(o.operand))));
    if (n.length === 0) return;
    const r = n.map((o) => Qu(o.operator, o.operand, t));
    return r.length === 1 ? r[0] : {
      [e.mode]: r
    };
  }
  function dt(e) {
    return typeof e == "object" && e !== null && e.var === "value";
  }
  function vr(e) {
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
      if (Array.isArray(r) && r.length === 2 && dt(r[0])) return {
        operator: n,
        operand: We(r[1])
      };
    }
    if ("==" in e) {
      const t = e["=="];
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return t[1] === true ? {
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
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "neq",
        operand: We(t[1])
      };
    }
    if ("contains" in e) {
      const t = e.contains;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "contains",
        operand: We(t[1])
      };
    }
    if ("startsWith" in e) {
      const t = e.startsWith;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "starts_with",
        operand: We(t[1])
      };
    }
    if ("endsWith" in e) {
      const t = e.endsWith;
      if (Array.isArray(t) && t.length === 2 && dt(t[0])) return {
        operator: "ends_with",
        operand: We(t[1])
      };
    }
    if ("!" in e) {
      const t = e["!"];
      if (Array.isArray(t) && t.length === 1) {
        const n = t[0];
        if (typeof n == "object" && n !== null && "!!" in n) {
          const r = n["!!"];
          if (Array.isArray(r) && dt(r[0])) return {
            operator: "empty",
            operand: ""
          };
        }
        if (typeof n == "object" && n !== null && "contains" in n) {
          const r = n.contains;
          if (Array.isArray(r) && r.length === 2 && dt(r[0])) return {
            operator: "not_contains",
            operand: We(r[1])
          };
        }
      }
    }
    if ("!!" in e) {
      const t = e["!!"];
      if (Array.isArray(t) && dt(t[0])) return {
        operator: "not_empty",
        operand: ""
      };
    }
    return null;
  }
  function Jo(e) {
    if (!e) return {
      mode: "and",
      conditions: [
        {
          id: fn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
    if ("and" in e) {
      const n = e.and;
      if (Array.isArray(n)) {
        const r = n.map((o) => vr(o)).filter((o) => o !== null).map((o) => ({
          id: fn(),
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
        const r = n.map((o) => vr(o)).filter((o) => o !== null).map((o) => ({
          id: fn(),
          ...o
        }));
        if (r.length > 0) return {
          mode: "or",
          conditions: r
        };
      }
    }
    const t = vr(e);
    return t ? {
      mode: "and",
      conditions: [
        {
          id: fn(),
          ...t
        }
      ]
    } : {
      mode: "and",
      conditions: [
        {
          id: fn(),
          operator: "eq",
          operand: ""
        }
      ]
    };
  }
  const td = 200, gn = /* @__PURE__ */ new Map();
  function nd(e, t) {
    try {
      const n = JSON.stringify(e);
      let r = gn.get(n);
      if (!r) {
        if (r = fr.build(e), gn.size >= td) {
          const o = gn.keys().next().value;
          o && gn.delete(o);
        }
        gn.set(n, r);
      }
      return !!r({
        value: t
      });
    } catch {
      return false;
    }
  }
  const rd = {
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
  function od({ label: e, value: t, onChange: n, inputType: r }) {
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
    return c.jsx(je, {
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
  function sd({ logic: e, columnType: t, onChange: n }) {
    const [r, o] = y.useState(() => Jo(e));
    y.useEffect(() => {
      o(Jo(e));
    }, [
      e
    ]);
    const s = Ju[t] ?? Ku, i = y.useCallback((g) => {
      o(g), n(ed(g, t));
    }, [
      n,
      t
    ]), l = y.useCallback((g, p) => {
      const h = r.conditions.map((m, v) => v === g ? {
        ...m,
        ...p
      } : m);
      i({
        ...r,
        conditions: h
      });
    }, [
      r,
      i
    ]), a = y.useCallback((g) => {
      const p = r.conditions.filter((h, m) => m !== g);
      i({
        ...r,
        conditions: p
      });
    }, [
      r,
      i
    ]), d = y.useCallback(() => {
      const g = s[0] ?? "eq";
      i({
        ...r,
        conditions: [
          ...r.conditions,
          {
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            operator: g,
            operand: ""
          }
        ]
      });
    }, [
      r,
      i,
      s
    ]), u = y.useCallback((g, p) => {
      p !== null && i({
        ...r,
        mode: p
      });
    }, [
      r,
      i
    ]), f = r.conditions.length > 1;
    return c.jsxs(ze, {
      spacing: 1,
      children: [
        f && c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(vs, {
              value: r.mode,
              exclusive: true,
              onChange: u,
              size: "small",
              "aria-label": b.t("json_table_condition_mode_label"),
              children: [
                c.jsx(or, {
                  value: "and",
                  "aria-label": b.t("json_table_condition_mode_all"),
                  children: b.t("json_table_condition_mode_all")
                }),
                c.jsx(or, {
                  value: "or",
                  "aria-label": b.t("json_table_condition_mode_any"),
                  children: b.t("json_table_condition_mode_any")
                })
              ]
            }),
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: r.mode === "and" ? b.t("json_table_condition_mode_hint_and") : b.t("json_table_condition_mode_hint_or")
            })
          ]
        }),
        r.conditions.map((g, p) => {
          const h = !Br.has(g.operator), m = t === "date" ? "date" : t === "number" ? "number" : "text";
          return c.jsxs(L, {
            sx: {
              display: "flex",
              gap: 1,
              alignItems: "flex-start"
            },
            children: [
              c.jsxs(ft, {
                size: "small",
                sx: {
                  flex: h ? "0 0 auto" : 1,
                  minWidth: 160
                },
                children: [
                  c.jsx(gt, {
                    children: b.t("json_table_condition_operator")
                  }),
                  c.jsx(it, {
                    label: b.t("json_table_condition_operator"),
                    value: g.operator,
                    onChange: (v) => {
                      const x = v.target.value, _ = Br.has(x) ? "" : g.operand;
                      l(p, {
                        operator: x,
                        operand: _
                      });
                    },
                    children: s.map((v) => c.jsx(ie, {
                      value: v,
                      children: b.t(rd[v])
                    }, v))
                  })
                ]
              }),
              h && c.jsx(od, {
                label: b.t("json_table_condition_value"),
                value: g.operand ?? "",
                onChange: (v) => l(p, {
                  operand: v
                }),
                inputType: m
              }),
              f && c.jsx(Ne, {
                title: b.t("json_table_condition_remove"),
                children: c.jsx(Re, {
                  size: "small",
                  onClick: () => a(p),
                  "aria-label": b.t("json_table_condition_remove"),
                  sx: {
                    mt: 0.5
                  },
                  children: c.jsx(sr, {
                    fontSize: "small"
                  })
                })
              })
            ]
          }, g.id ?? p);
        }),
        c.jsx(lt, {
          startIcon: c.jsx(Es, {}),
          onClick: d,
          size: "small",
          variant: "text",
          sx: {
            alignSelf: "flex-start",
            textTransform: "none"
          },
          "aria-label": b.t("json_table_condition_add"),
          children: f ? b.t("json_table_condition_add") : b.t("json_table_condition_add_first")
        })
      ]
    });
  }
  function id({ cellStyle: e, cellStyleMode: t, columnType: n, onStyleChange: r, onModeChange: o }) {
    const s = y.useCallback((u, f) => {
      const g = [
        ...e || []
      ];
      g[u] = {
        ...g[u],
        ...f
      }, r(g);
    }, [
      e,
      r
    ]), i = y.useCallback((u) => {
      const f = [
        ...e || []
      ];
      f.splice(u, 1), r(f);
    }, [
      e,
      r
    ]), l = y.useCallback(() => {
      const u = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        backgroundColor: "",
        textColor: "",
        fontWeight: "normal",
        fontStyle: "normal"
      };
      r([
        ...e || [],
        u
      ]);
    }, [
      e,
      r
    ]), a = y.useCallback((u) => {
      if (u === 0) return;
      const f = [
        ...e || []
      ];
      [f[u - 1], f[u]] = [
        f[u],
        f[u - 1]
      ], r(f);
    }, [
      e,
      r
    ]), d = y.useCallback((u) => {
      const f = e || [];
      if (u >= f.length - 1) return;
      const g = [
        ...f
      ];
      [g[u], g[u + 1]] = [
        g[u + 1],
        g[u]
      ], r(g);
    }, [
      e,
      r
    ]);
    return c.jsxs(ze, {
      spacing: 1.5,
      children: [
        ((e == null ? void 0 : e.length) ?? 0) >= 1 && c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1
          },
          children: [
            c.jsxs(vs, {
              value: t ?? "first-match",
              exclusive: true,
              size: "small",
              onChange: (u, f) => {
                f && o(f);
              },
              "aria-label": b.t("json_table_cell_style_mode_label"),
              children: [
                c.jsx(or, {
                  value: "first-match",
                  "aria-label": b.t("json_table_cell_style_mode_first"),
                  children: b.t("json_table_cell_style_mode_first")
                }),
                c.jsx(or, {
                  value: "all-match",
                  "aria-label": b.t("json_table_cell_style_mode_all"),
                  children: b.t("json_table_cell_style_mode_all")
                })
              ]
            }),
            c.jsx(D, {
              variant: "caption",
              color: "text.secondary",
              children: (t ?? "first-match") === "first-match" ? b.t("json_table_cell_style_mode_hint_first") : b.t("json_table_cell_style_mode_hint_all")
            })
          ]
        }),
        (e || []).length === 0 && c.jsxs(L, {
          sx: {
            textAlign: "center",
            py: 2,
            px: 1,
            color: "text.secondary"
          },
          children: [
            c.jsx(D, {
              variant: "body2",
              sx: {
                fontWeight: 500,
                mb: 0.5
              },
              children: b.t("json_table_no_style_rules")
            }),
            c.jsx(D, {
              variant: "caption",
              children: b.t("json_table_no_style_rules_hint")
            })
          ]
        }),
        (e || []).map((u, f) => {
          const g = (e || []).length, p = u.backgroundColor ? Ot(u.backgroundColor) : void 0, h = u.textColor ? Ot(u.textColor) : void 0;
          return c.jsx(nt, {
            variant: "outlined",
            sx: {
              p: 1.5
            },
            children: c.jsxs(ze, {
              spacing: 1.5,
              children: [
                c.jsxs(L, {
                  sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  },
                  children: [
                    c.jsx(L, {
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5
                      },
                      children: c.jsxs(D, {
                        variant: "caption",
                        sx: {
                          fontWeight: 600,
                          color: "text.secondary"
                        },
                        children: [
                          b.t("json_table_rule"),
                          " ",
                          f + 1
                        ]
                      })
                    }),
                    c.jsxs(L, {
                      sx: {
                        display: "flex",
                        gap: 0.5
                      },
                      children: [
                        c.jsx(Ne, {
                          title: b.t("json_table_rule_move_up"),
                          children: c.jsx("span", {
                            children: c.jsx(Re, {
                              size: "small",
                              onClick: () => a(f),
                              disabled: f === 0,
                              "aria-label": b.t("json_table_rule_move_up"),
                              children: c.jsx(Os, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: b.t("json_table_rule_move_down"),
                          children: c.jsx("span", {
                            children: c.jsx(Re, {
                              size: "small",
                              onClick: () => d(f),
                              disabled: f >= g - 1,
                              "aria-label": b.t("json_table_rule_move_down"),
                              children: c.jsx(ks, {
                                fontSize: "small"
                              })
                            })
                          })
                        }),
                        c.jsx(Ne, {
                          title: b.t("json_table_delete_rule"),
                          children: c.jsx(Re, {
                            size: "small",
                            onClick: () => i(f),
                            color: "error",
                            "aria-label": b.t("json_table_delete_rule"),
                            children: c.jsx(vi, {
                              fontSize: "small"
                            })
                          })
                        })
                      ]
                    })
                  ]
                }),
                c.jsx(sd, {
                  logic: u.logic,
                  columnType: n,
                  onChange: (m) => s(f, {
                    logic: m
                  })
                }, u.id ?? f),
                c.jsxs(ze, {
                  direction: "row",
                  spacing: 1,
                  alignItems: "flex-start",
                  children: [
                    c.jsx(Nr, {
                      label: b.t("json_table_bg_color"),
                      value: u.backgroundColor || "",
                      onChange: (m) => s(f, {
                        backgroundColor: m
                      })
                    }),
                    c.jsx(Nr, {
                      label: b.t("json_table_text_color"),
                      value: u.textColor || "",
                      onChange: (m) => s(f, {
                        textColor: m
                      })
                    })
                  ]
                }),
                c.jsxs(ze, {
                  direction: "row",
                  spacing: 1,
                  children: [
                    c.jsx(Nt, {
                      control: c.jsx(Rn, {
                        checked: u.fontWeight === "bold",
                        onChange: (m) => s(f, {
                          fontWeight: m.target.checked ? "bold" : "normal"
                        }),
                        icon: c.jsx(Bo, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Bo, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(D, {
                        variant: "caption",
                        children: b.t("json_table_bold")
                      })
                    }),
                    c.jsx(Nt, {
                      control: c.jsx(Rn, {
                        checked: u.fontStyle === "italic",
                        onChange: (m) => s(f, {
                          fontStyle: m.target.checked ? "italic" : "normal"
                        }),
                        icon: c.jsx(Vo, {
                          sx: {
                            opacity: 0.3
                          }
                        }),
                        checkedIcon: c.jsx(Vo, {
                          color: "primary"
                        }),
                        size: "small"
                      }),
                      label: c.jsx(D, {
                        variant: "caption",
                        children: b.t("json_table_italic")
                      })
                    })
                  ]
                }),
                (u.backgroundColor || u.textColor || u.fontWeight === "bold" || u.fontStyle === "italic") && c.jsx(nt, {
                  variant: "outlined",
                  sx: {
                    p: 1,
                    ...u.backgroundColor ? p ? {
                      background: p
                    } : {
                      backgroundColor: u.backgroundColor
                    } : {},
                    fontWeight: u.fontWeight || "normal",
                    fontStyle: u.fontStyle || "normal"
                  },
                  children: c.jsx(D, {
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
                    children: b.t("json_table_sample_value")
                  })
                })
              ]
            })
          }, u.id ?? f);
        }),
        ((e == null ? void 0 : e.length) ?? 0) >= 2 && c.jsx(D, {
          variant: "caption",
          color: "text.secondary",
          sx: {
            px: 0.5
          },
          children: (t ?? "first-match") === "first-match" ? b.t("json_table_rules_priority_hint") : b.t("json_table_rules_all_match_hint")
        }),
        c.jsx(lt, {
          startIcon: c.jsx(Es, {}),
          onClick: l,
          variant: "outlined",
          size: "small",
          fullWidth: true,
          children: b.t("json_table_add_style_rule")
        })
      ]
    });
  }
  function ld({ globalSorting: e, globalFiltering: t }) {
    return c.jsxs(L, {
      sx: {
        p: 1,
        mb: 2,
        bgcolor: "action.hover",
        borderRadius: 1,
        border: 1,
        borderColor: "divider"
      },
      children: [
        c.jsx(D, {
          variant: "caption",
          sx: {
            fontWeight: 500,
            display: "block",
            mb: 0.5
          },
          children: b.t("json_table_global_status")
        }),
        c.jsxs(L, {
          sx: {
            display: "flex",
            gap: 1,
            flexWrap: "wrap"
          },
          children: [
            c.jsx(mt, {
              size: "small",
              icon: e ? c.jsx(Ho, {}) : c.jsx(sr, {}),
              label: `${b.t("json_table_sorting")}: ${e ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
              color: e ? "success" : "default",
              variant: "outlined",
              sx: {
                fontSize: "0.7rem"
              }
            }),
            c.jsx(mt, {
              size: "small",
              icon: t ? c.jsx(Ho, {}) : c.jsx(sr, {}),
              label: `${b.t("json_table_filtering")}: ${t ? b.t("json_table_status_on") : b.t("json_table_status_off")}`,
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
  function Et(e) {
    if (e == null) return "";
    if (typeof e == "object") try {
      return JSON.stringify(e).toLowerCase();
    } catch {
      return "[object Object]";
    }
    return String(e).toLowerCase();
  }
  function Ko(e) {
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
        const [, s, i, l, a = "0", d = "0", u = "0"] = n, f = new Date(parseInt(l, 10), parseInt(i, 10) - 1, parseInt(s, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(f.getTime()) ? null : f.getTime();
      }
      const r = t.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?/);
      if (r) {
        const [, s, i, l, a = "0", d = "0", u = "0"] = r, f = new Date(parseInt(l, 10), parseInt(s, 10) - 1, parseInt(i, 10), parseInt(a, 10), parseInt(d, 10), parseInt(u, 10));
        return isNaN(f.getTime()) ? null : f.getTime();
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
  function Xo(e) {
    const t = new Date(e);
    return t.setHours(0, 0, 0, 0), t.getTime();
  }
  function ad(e, t, n) {
    if (e == null) return t === "isEmpty";
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    if (typeof n == "boolean") {
      const d = typeof e == "boolean" ? e : e === "true" || e === 1 ? true : e === "false" || e === 0 ? false : null;
      if (d !== null) switch (t) {
        case "equals":
          return d === n;
        case "notEquals":
          return d !== n;
        default:
          return true;
      }
      return false;
    }
    const r = Et(e), o = Et(n), s = Number(e), i = Number(n), l = !isNaN(s) && !isNaN(i);
    if ([
      "greaterThan",
      "greaterThanOrEqual",
      "lessThan",
      "lessThanOrEqual",
      "equals",
      "notEquals"
    ].includes(t)) {
      const d = Ko(e), u = Ko(n);
      if (d !== null && u !== null) switch (t) {
        case "equals":
          return d === u;
        case "notEquals":
          return d !== u;
        case "greaterThan":
          return d > u;
        case "greaterThanOrEqual":
          return d >= u;
        case "lessThan":
          return d < u;
        case "lessThanOrEqual":
          return d <= u;
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
  function Qo(e, t, n, r) {
    if (t === "isEmpty") return typeof e == "string" ? e === "" : e == null;
    if (t === "isNotEmpty") return typeof e == "string" ? e !== "" : e != null;
    const o = kr(e, r), s = kr(n, r);
    if (o === null || s === null) return false;
    const i = Xo(o), l = Xo(s);
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
  function Zo(e) {
    return (t, n, r) => {
      if (r == null) return true;
      if (typeof r == "object" && r !== null && "operator" in r) {
        const o = r;
        return Qo(t.getValue(n), o.operator, o.value, e);
      }
      return typeof r == "string" || typeof r == "number" ? Qo(t.getValue(n), "equals", r, e) : true;
    };
  }
  const cd = (e, t, n) => {
    if (n == null) return true;
    if (typeof n == "string") {
      const o = e.getValue(t);
      return o == null ? false : Et(o).includes(n.toLowerCase());
    }
    if (typeof n == "number") {
      const o = e.getValue(t);
      if (o == null) return false;
      const s = Number(o);
      return isNaN(s) ? Et(o).includes(Et(n)) : s === n;
    }
    if (typeof n == "object" && n !== null && "operator" in n) {
      const o = n, s = e.getValue(t);
      return ad(s, o.operator, o.value);
    }
    const r = e.getValue(t);
    return r == null ? false : Et(r).includes(Et(n));
  }, ud = {
    advanced: cd
  };
  function Tn(e) {
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
  function dd(e, t, n) {
    return e.sortable !== void 0 && e.sortable !== "auto" ? e.sortable : Tn(t).sortable && n !== false;
  }
  function pd(e, t, n) {
    return e.filterable !== void 0 && e.filterable !== "auto" ? e.filterable : Tn(t).filterable && n === true;
  }
  function fd(e, t, n) {
    return e.enableHiding !== void 0 && e.enableHiding !== "auto" ? e.enableHiding : Tn(t).hiding && n !== false;
  }
  function es(e, t) {
    return kr(e, t) ?? 0;
  }
  function ts(e) {
    return (t, n, r) => es(t.getValue(r), e) - es(n.getValue(r), e);
  }
  function gd(e) {
    const { columnConfig: t, analysisColumns: n, widgetData: r, renderConfiguredCell: o, renderAutoDetectedCell: s, renderSelectionHeader: i, renderSelectionCell: l } = e, a = new Map(n.map((g) => [
      g.path,
      g.dateFormat
    ])), d = new Map(n.map((g) => [
      g.path,
      g.type
    ])), u = r.tableRowSelection && i && l ? {
      id: "__select__",
      size: 48,
      enableResizing: false,
      enableSorting: false,
      enableColumnFilter: false,
      enableHiding: false,
      header: ({ table: g }) => i(g),
      cell: ({ row: g }) => l(g),
      meta: {
        align: "center",
        width: 48
      }
    } : null;
    let f;
    return t.length > 0 ? f = t.filter((g) => g.visible).map((g) => {
      var _a2, _b;
      const p = ((_a2 = g.format) == null ? void 0 : _a2.dateInputFormat) ?? a.get(g.path), h = d.get(g.path) || "string", m = ((_b = g.format) == null ? void 0 : _b.type) === "date" || h === "date";
      return {
        id: g.path,
        size: g.width ?? 150,
        accessorFn: (x) => (x == null ? void 0 : x[g.path]) ?? null,
        header: g.headerName || g.path,
        enableSorting: dd(g, h, r.tableSorting),
        enableColumnFilter: pd(g, h, r.tableFiltering),
        enableHiding: fd(g, h, r.tableHiding),
        ...m && {
          sortingFn: ts(p),
          filterFn: Zo(p)
        },
        cell: ({ getValue: x }) => o(x(), g),
        meta: {
          align: g.align || "left",
          width: g.width,
          columnType: m ? "date" : h
        }
      };
    }) : f = n.map((g) => {
      const p = g.type === "date" && g.dateFormat, h = g.dateFormat, m = Tn(g.type);
      return {
        id: g.path,
        size: 150,
        accessorFn: (x) => x[g.path],
        header: g.path.split(".").pop() || g.path,
        enableSorting: m.sortable && r.tableSorting,
        enableColumnFilter: m.filterable && r.tableFiltering,
        enableHiding: m.hiding && r.tableHiding,
        ...p && {
          sortingFn: ts(h),
          filterFn: Zo(h)
        },
        cell: ({ getValue: x }) => s(x()),
        meta: {
          align: "left",
          columnType: g.type
        }
      };
    }), u ? [
      u,
      ...f
    ] : f;
  }
  function ns({ globalEnabled: e, columnOverride: t, featureLabel: n, detectedType: r = "string", featureType: o = "sortable" }) {
    const s = t === "auto" || t === void 0, i = Tn(r), l = o === "sortable" ? i.sortable : i.filterable;
    let a, d;
    t === "auto" || t === void 0 ? (a = l && e, d = "json_table_source_auto") : (a = t, d = "json_table_source_override");
    const u = t !== void 0 && t !== "auto", f = (p, h) => p.replace(/\{(\w+)\}/g, (m, v) => v in h ? h[v] : m);
    let g;
    return t === "auto" || t === void 0 ? g = f(b.t("json_table_auto_tooltip"), {
      feature: n,
      smart: l ? b.t("json_table_status_on") : b.t("json_table_status_off"),
      type: r
    }) : g = f(b.t("json_table_override_tooltip"), {
      feature: n
    }), c.jsx(Ne, {
      title: g,
      arrow: true,
      children: c.jsxs(L, {
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          ml: "auto",
          cursor: "help"
        },
        children: [
          c.jsx(mt, {
            size: "small",
            label: c.jsx(L, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: a ? b.t("json_table_status_on") : b.t("json_table_status_off")
            }),
            color: a ? "success" : "default",
            variant: u ? "filled" : "outlined",
            sx: {
              height: 20,
              fontSize: "0.65rem",
              "& .MuiChip-label": {
                px: 0.75
              }
            }
          }),
          c.jsxs(D, {
            variant: "caption",
            color: u ? "warning.main" : "text.secondary",
            sx: {
              fontSize: "0.65rem",
              display: "flex",
              alignItems: "center",
              gap: 0.25
            },
            children: [
              b.t(d),
              s && c.jsx(uu, {
                sx: {
                  fontSize: 12,
                  ml: 0.25
                }
              }),
              u && c.jsx(pu, {
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
  function hd({ column: e, discoveredColumn: t, onChange: n, globalSorting: r = true, globalFiltering: o = false }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [s, i] = y.useState({
      basic: true,
      formatting: false,
      styling: false,
      advanced: false
    }), l = y.useCallback((w) => {
      i(($) => ({
        ...$,
        [w]: !$[w]
      }));
    }, []), a = (t == null ? void 0 : t.type) || "string", d = y.useMemo(() => t ? Object.values(t.typeCounts).reduce((w, $) => w + $, 0) : 0, [
      t
    ]), u = y.useMemo(() => e.path.split(".").pop() || e.path, [
      e.path
    ]), f = y.useMemo(() => e.headerName !== u || e.width !== void 0 || e.align !== void 0 && e.align !== "left" || e.visible !== true, [
      e.headerName,
      e.width,
      e.align,
      e.visible,
      u
    ]), g = y.useCallback(() => {
      n({
        ...e,
        headerName: u,
        width: void 0,
        align: void 0,
        visible: true
      });
    }, [
      e,
      n,
      u
    ]), p = y.useMemo(() => e.format !== void 0, [
      e.format
    ]), h = y.useCallback(() => {
      const { format: w, ...$ } = e;
      n($);
    }, [
      e,
      n
    ]), m = y.useMemo(() => {
      var _a3;
      return (((_a3 = e.cellStyle) == null ? void 0 : _a3.length) ?? 0) > 0 || e.cellStyleMode !== void 0;
    }, [
      e.cellStyle,
      e.cellStyleMode
    ]), v = y.useCallback(() => {
      const { cellStyle: w, cellStyleMode: $, ...R } = e;
      n(R);
    }, [
      e,
      n
    ]), x = y.useMemo(() => e.sortable !== void 0 && e.sortable !== "auto" || e.filterable !== void 0 && e.filterable !== "auto", [
      e.sortable,
      e.filterable
    ]), _ = y.useCallback(() => {
      const { sortable: w, filterable: $, ...R } = e;
      n({
        ...R,
        sortable: "auto",
        filterable: "auto"
      });
    }, [
      e,
      n
    ]), C = y.useCallback((w) => {
      var _a3, _b2;
      const $ = {
        ...e.format
      };
      if (w.type && w.type !== ((_a3 = e.format) == null ? void 0 : _a3.type)) {
        const R = (_b2 = e.format) == null ? void 0 : _b2.type;
        R === "number" ? (delete $.numberDecimals, delete $.numberPrefix, delete $.numberSuffix, delete $.numberThousandsSeparator) : R === "date" ? (delete $.dateFormat, delete $.dateInputFormat) : R === "boolean" ? (delete $.booleanTrue, delete $.booleanFalse) : R === "string" && [
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
        ].forEach((A) => {
          delete $[A];
        });
      }
      n({
        ...e,
        format: {
          ...$,
          ...w
        }
      });
    }, [
      e,
      n
    ]), j = y.useCallback((w) => {
      n({
        ...e,
        cellStyle: w
      });
    }, [
      e,
      n
    ]), M = y.useCallback((w) => {
      n({
        ...e,
        cellStyleMode: w
      });
    }, [
      e,
      n
    ]);
    return c.jsxs(L, {
      sx: {
        height: "100%",
        overflow: "auto",
        p: 2
      },
      children: [
        c.jsxs(L, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2
          },
          children: [
            c.jsx(mt, {
              label: a,
              size: "small",
              sx: {
                backgroundColor: Cn[a] || Cn.string,
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.7rem"
              }
            }),
            c.jsx(D, {
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
        c.jsxs(ze, {
          spacing: 1,
          children: [
            c.jsxs(Hn, {
              expanded: s.basic,
              onChange: () => l("basic"),
              disableGutters: true,
              children: [
                c.jsx(Vn, {
                  expandIcon: c.jsx(qn, {}),
                  children: c.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(D, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_basic")
                      }),
                      c.jsx(Ne, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Re, {
                            size: "small",
                            disabled: !f,
                            onClick: (w) => {
                              w.stopPropagation(), g();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Bn, {
                  children: c.jsxs(ze, {
                    spacing: 2,
                    children: [
                      c.jsx(je, {
                        label: b.t("json_table_header_label"),
                        value: e.headerName,
                        onChange: (w) => n({
                          ...e,
                          headerName: w.target.value
                        }),
                        fullWidth: true,
                        size: "small"
                      }),
                      c.jsx(je, {
                        label: b.t("json_table_width"),
                        type: "number",
                        value: e.width ?? "",
                        onChange: (w) => n({
                          ...e,
                          width: w.target.value ? parseInt(w.target.value, 10) : void 0
                        }),
                        fullWidth: true,
                        size: "small",
                        placeholder: b.t("json_table_width_auto"),
                        slotProps: {
                          htmlInput: {
                            min: 30
                          }
                        }
                      }),
                      c.jsxs(ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(gt, {
                            children: b.t("json_table_align")
                          }),
                          c.jsxs(it, {
                            label: b.t("json_table_align"),
                            value: e.align || "left",
                            onChange: (w) => n({
                              ...e,
                              align: w.target.value
                            }),
                            children: [
                              c.jsx(ie, {
                                value: "left",
                                children: b.t("json_table_align_left")
                              }),
                              c.jsx(ie, {
                                value: "center",
                                children: b.t("json_table_align_center")
                              }),
                              c.jsx(ie, {
                                value: "right",
                                children: b.t("json_table_align_right")
                              })
                            ]
                          })
                        ]
                      }),
                      c.jsx(Nt, {
                        control: c.jsx(vn, {
                          checked: e.visible,
                          onChange: (w) => n({
                            ...e,
                            visible: w.target.checked
                          })
                        }),
                        label: c.jsx(D, {
                          variant: "body2",
                          children: b.t("json_table_visible")
                        })
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Hn, {
              expanded: s.formatting,
              onChange: () => l("formatting"),
              disableGutters: true,
              children: [
                c.jsx(Vn, {
                  expandIcon: c.jsx(qn, {}),
                  children: c.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(D, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_formatting")
                      }),
                      c.jsx(Ne, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Re, {
                            size: "small",
                            disabled: !p,
                            onClick: (w) => {
                              w.stopPropagation(), h();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Bn, {
                  children: c.jsxs(ze, {
                    spacing: 2,
                    children: [
                      c.jsxs(ft, {
                        fullWidth: true,
                        size: "small",
                        children: [
                          c.jsx(gt, {
                            children: b.t("json_table_format_type")
                          }),
                          c.jsxs(it, {
                            value: ((_a2 = e.format) == null ? void 0 : _a2.type) || "auto",
                            label: b.t("json_table_format_type"),
                            onChange: (w) => {
                              const $ = w.target.value;
                              $ === "auto" ? n({
                                ...e,
                                format: void 0
                              }) : C({
                                type: $
                              });
                            },
                            children: [
                              c.jsxs(ie, {
                                value: "auto",
                                children: [
                                  b.t("json_table_format_type_auto"),
                                  ` (${a})`
                                ]
                              }),
                              c.jsx(ie, {
                                value: "string",
                                children: b.t("json_table_format_type_string")
                              }),
                              c.jsx(ie, {
                                value: "number",
                                children: b.t("json_table_format_type_number")
                              }),
                              c.jsx(ie, {
                                value: "date",
                                children: b.t("json_table_format_type_date")
                              }),
                              c.jsx(ie, {
                                value: "boolean",
                                children: b.t("json_table_format_type_boolean")
                              })
                            ]
                          })
                        ]
                      }),
                      (a === "number" || ((_b = e.format) == null ? void 0 : _b.type) === "number") && c.jsx(Ru, {
                        format: e.format ?? {
                          type: "number"
                        },
                        onChange: C,
                        discoveredColumn: t
                      }),
                      (a === "date" || ((_c2 = e.format) == null ? void 0 : _c2.type) === "date") && c.jsx(Mu, {
                        format: e.format ?? {
                          type: "date"
                        },
                        detectedFormat: t == null ? void 0 : t.dateFormat,
                        onChange: C
                      }),
                      (a === "boolean" || ((_d2 = e.format) == null ? void 0 : _d2.type) === "boolean") && c.jsx($u, {
                        format: e.format ?? {
                          type: "boolean"
                        },
                        onChange: C
                      }),
                      (a === "string" || ((_e2 = e.format) == null ? void 0 : _e2.type) === "string") && c.jsx(Au, {
                        format: e.format ?? {
                          type: "string"
                        },
                        onChange: C
                      }),
                      a !== "number" && a !== "date" && a !== "boolean" && a !== "string" && !e.format && c.jsx(D, {
                        variant: "body2",
                        color: "text.secondary",
                        children: b.t("json_table_no_format_options")
                      })
                    ]
                  })
                })
              ]
            }),
            c.jsxs(Hn, {
              expanded: s.styling,
              onChange: () => l("styling"),
              disableGutters: true,
              children: [
                c.jsx(Vn, {
                  expandIcon: c.jsx(qn, {}),
                  children: c.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          gap: 1
                        },
                        children: [
                          c.jsx(D, {
                            variant: "subtitle2",
                            sx: {
                              fontWeight: 500
                            },
                            children: b.t("json_table_section_styling")
                          }),
                          (((_f = e.cellStyle) == null ? void 0 : _f.length) ?? 0) > 0 && c.jsx(mt, {
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
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Re, {
                            size: "small",
                            disabled: !m,
                            onClick: (w) => {
                              w.stopPropagation(), v();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Bn, {
                  children: c.jsx(id, {
                    cellStyle: e.cellStyle || [],
                    cellStyleMode: e.cellStyleMode ?? "first-match",
                    columnType: a,
                    onStyleChange: j,
                    onModeChange: M
                  })
                })
              ]
            }),
            c.jsxs(Hn, {
              expanded: s.advanced,
              onChange: () => l("advanced"),
              disableGutters: true,
              children: [
                c.jsx(Vn, {
                  expandIcon: c.jsx(qn, {}),
                  children: c.jsxs(L, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      mr: 1
                    },
                    children: [
                      c.jsx(D, {
                        variant: "subtitle2",
                        sx: {
                          fontWeight: 500
                        },
                        children: b.t("json_table_section_advanced")
                      }),
                      c.jsx(Ne, {
                        title: b.t("json_table_section_reset"),
                        children: c.jsx("span", {
                          children: c.jsx(Re, {
                            size: "small",
                            disabled: !x,
                            onClick: (w) => {
                              w.stopPropagation(), _();
                            },
                            "aria-label": b.t("json_table_section_reset"),
                            children: c.jsx(yn, {
                              fontSize: "small"
                            })
                          })
                        })
                      })
                    ]
                  })
                }),
                c.jsx(Bn, {
                  children: c.jsxs(ze, {
                    spacing: 2,
                    children: [
                      c.jsx(ld, {
                        globalSorting: r,
                        globalFiltering: o
                      }),
                      c.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(gt, {
                                children: b.t("json_table_sortable")
                              }),
                              c.jsxs(it, {
                                value: e.sortable === true ? "on" : e.sortable === false ? "off" : "auto",
                                label: b.t("json_table_sortable"),
                                onChange: (w) => n({
                                  ...e,
                                  sortable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(ie, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(ie, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(ie, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(ns, {
                            globalEnabled: r,
                            columnOverride: e.sortable,
                            featureLabel: b.t("json_table_sorting"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "sortable"
                          })
                        ]
                      }),
                      c.jsxs(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between"
                        },
                        children: [
                          c.jsxs(ft, {
                            size: "small",
                            sx: {
                              minWidth: 120
                            },
                            children: [
                              c.jsx(gt, {
                                children: b.t("json_table_filterable")
                              }),
                              c.jsxs(it, {
                                value: e.filterable === true ? "on" : e.filterable === false ? "off" : "auto",
                                label: b.t("json_table_filterable"),
                                onChange: (w) => n({
                                  ...e,
                                  filterable: w.target.value === "on" ? true : w.target.value === "off" ? false : "auto"
                                }),
                                children: [
                                  c.jsx(ie, {
                                    value: "auto",
                                    children: c.jsx("em", {
                                      children: b.t("json_table_option_auto")
                                    })
                                  }),
                                  c.jsx(ie, {
                                    value: "on",
                                    children: b.t("json_table_option_on")
                                  }),
                                  c.jsx(ie, {
                                    value: "off",
                                    children: b.t("json_table_option_off")
                                  })
                                ]
                              })
                            ]
                          }),
                          c.jsx(ns, {
                            globalEnabled: o,
                            columnOverride: e.filterable,
                            featureLabel: b.t("json_table_filtering"),
                            detectedType: t == null ? void 0 : t.type,
                            featureType: "filterable"
                          })
                        ]
                      }),
                      t && c.jsxs(nt, {
                        variant: "outlined",
                        sx: {
                          p: 1.5,
                          bgcolor: "action.hover"
                        },
                        children: [
                          c.jsx(D, {
                            variant: "caption",
                            color: "text.secondary",
                            sx: {
                              fontWeight: 500,
                              display: "block",
                              mb: 1
                            },
                            children: b.t("json_table_analysis_info")
                          }),
                          c.jsxs(ze, {
                            spacing: 0.5,
                            children: [
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_type_label")
                                  }),
                                  c.jsx(mt, {
                                    label: t.type,
                                    size: "small",
                                    sx: {
                                      backgroundColor: Cn[t.type],
                                      color: "#fff",
                                      height: 18,
                                      fontSize: "0.65rem"
                                    }
                                  })
                                ]
                              }),
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_confidence")
                                  }),
                                  c.jsxs(D, {
                                    variant: "caption",
                                    children: [
                                      Math.round(t.confidence * 100),
                                      "%"
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_nulls")
                                  }),
                                  c.jsxs(D, {
                                    variant: "caption",
                                    children: [
                                      t.nullCount,
                                      d > 0 && ` (${Math.round(t.nullCount / d * 100)}%)`
                                    ]
                                  })
                                ]
                              }),
                              c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_distinct")
                                  }),
                                  c.jsx(D, {
                                    variant: "caption",
                                    children: t.distinctCount
                                  })
                                ]
                              }),
                              t.min !== void 0 && t.max !== void 0 && c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_range")
                                  }),
                                  c.jsxs(D, {
                                    variant: "caption",
                                    children: [
                                      String(t.min),
                                      " \u2013 ",
                                      String(t.max)
                                    ]
                                  })
                                ]
                              }),
                              t.dateFormat && c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  justifyContent: "space-between"
                                },
                                children: [
                                  c.jsx(D, {
                                    variant: "caption",
                                    color: "text.secondary",
                                    children: b.t("json_table_date_input_format")
                                  }),
                                  c.jsx(D, {
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
  const md = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, yd = /^\d{4}-\d{2}-\d{2}$/, bd = /^(\d{2})\.(\d{2})\.(\d{4})$/, vd = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, xd = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, _d = /^(\d{2})\/(\d{2})\/(\d{4})$/, wd = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Cd = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Yn(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function xr(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Jn(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Sd = [
    {
      regex: md,
      format: "ISO-8601"
    },
    {
      regex: yd,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Yn(n, t);
      }
    },
    {
      regex: xd,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return Yn(t, n) && Jn(r, o, s);
      }
    },
    {
      regex: vd,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return Yn(t, n) && Jn(r, o);
      }
    },
    {
      regex: bd,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Yn(t, n);
      }
    },
    {
      regex: Cd,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10), s = parseInt(e[6], 10);
        return xr(t, n) && Jn(r, o, s);
      }
    },
    {
      regex: wd,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), r = parseInt(e[4], 10), o = parseInt(e[5], 10);
        return xr(t, n) && Jn(r, o);
      }
    },
    {
      regex: _d,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return xr(t, n);
      }
    }
  ];
  function jd(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Sd) {
      const r = t.match(n.regex);
      if (r) {
        if (n.validate && !n.validate(r)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Rd(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e11 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Md(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Rd(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = jd(e);
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
  function $d(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Ad(e) {
    let t, n = 0;
    for (const [r, o] of Object.entries(e)) o > n && (t = r, n = o);
    return t;
  }
  function Id(e) {
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
  function rs(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function Pd(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const r = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${s}-${o}T${l}:${a}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const r = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (r) {
        const o = r[1], s = r[2], i = r[3], l = r[4] || "00", a = r[5] || "00", d = r[6] || "00";
        return `${i}-${o}-${s}T${l}:${a}:${d}`;
      }
    }
    return null;
  }
  function Fd(e, t, n = 100, r = 0.8) {
    const o = /* @__PURE__ */ new Map();
    for (const s of e) o.set(s, Id(s));
    for (const s of t) for (const i of e) {
      const l = o.get(i);
      if (!l) {
        console.warn(`[JsonTable] Missing accumulator for path: ${i}`);
        continue;
      }
      const a = s[i], d = Md(a);
      if (rs(l.typeCounts, d.type), d.type === "null") {
        l.nullCount++;
        continue;
      }
      if (l.nonNullCount++, d.dateFormat && rs(l.dateFormatCounts, d.dateFormat), l.distinctValues.size < n && l.distinctValues.add(a), typeof a == "number" && Number.isFinite(a) && ((l.numMin === void 0 || a < l.numMin) && (l.numMin = a), (l.numMax === void 0 || a > l.numMax) && (l.numMax = a)), typeof a == "string") {
        const u = a.length;
        (l.strLenMin === void 0 || u < l.strLenMin) && (l.strLenMin = u), (l.strLenMax === void 0 || u > l.strLenMax) && (l.strLenMax = u);
      }
      if (d.dateFormat) {
        const u = Pd(a, d.dateFormat);
        u !== null && ((l.dateMin === void 0 || u < l.dateMin) && (l.dateMin = u), (l.dateMax === void 0 || u > l.dateMax) && (l.dateMax = u));
      }
    }
    return e.map((s) => {
      const i = o.get(s);
      let l = $d(i.typeCounts);
      l === "date" && i.nonNullCount > 0 && (i.typeCounts.date || 0) / i.nonNullCount < r && (l = "string");
      const a = l === "date" ? Ad(i.dateFormatCounts) : void 0, d = l === "date" ? i.typeCounts.date || 0 : i.typeCounts[l] || 0, u = i.nonNullCount > 0 ? Math.round(d / i.nonNullCount * 100) / 100 : 0, f = {
        path: s,
        type: l,
        nullable: i.nullCount > 0,
        typeCounts: {
          ...i.typeCounts
        },
        nullCount: i.nullCount,
        distinctCount: i.distinctValues.size,
        confidence: u
      };
      return a && (f.dateFormat = a), l === "number" && (i.numMin !== void 0 && (f.min = i.numMin), i.numMax !== void 0 && (f.max = i.numMax)), l === "date" && (i.dateMin !== void 0 && (f.min = i.dateMin), i.dateMax !== void 0 && (f.max = i.dateMax)), (l === "string" || l === "mixed") && (i.strLenMin !== void 0 && (f.stringLengthMin = i.strLenMin), i.strLenMax !== void 0 && (f.stringLengthMax = i.strLenMax)), f;
    });
  }
  function ur(e, t, n, r, o, s, i, l) {
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
      for (let a = 0; a < e.length; a++) {
        a > l.maxArrayIndex && (l.maxArrayIndex = a);
        const d = `${t}[${a}]`;
        ur(e[a], d, n, r, o, s + 1, i, l);
      }
      return;
    }
    if (e !== null && typeof e == "object") {
      if (o.has(e)) {
        n[t] = "[Circular]", r.add(t);
        return;
      }
      o.add(e);
      const a = Object.keys(e);
      if (a.length === 0) {
        n[t] = null, r.add(t);
        return;
      }
      for (const d of a) {
        const u = t ? `${t}.${d}` : d;
        ur(e[d], u, n, r, o, s + 1, i, l);
      }
      return;
    }
    n[t] = e, r.add(t);
  }
  function Td(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), r = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, o = [];
    for (const i of e) {
      const l = {}, a = /* @__PURE__ */ new WeakSet();
      if (i != null && typeof i == "object" && !Array.isArray(i)) for (const d of Object.keys(i)) ur(i[d], d, l, n, a, 1, t, r);
      else ur(i, "_value", l, n, a, 0, t, r);
      o.push(l);
    }
    const s = Dd([
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
  function Dd(e) {
    return e.sort((t, n) => {
      const r = os(t), o = os(n), s = Math.min(r.length, o.length);
      for (let i = 0; i < s; i++) {
        const l = r[i], a = o[i], d = ss(l), u = ss(a);
        if (d !== null && u !== null) {
          if (d !== u) return d - u;
          continue;
        }
        if (l !== a) return l < a ? -1 : 1;
      }
      return r.length - o.length;
    });
  }
  function os(e) {
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
  function ss(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const zd = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function Us(e, t) {
    const n = performance.now(), r = {
      ...zd,
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
    const o = Td(e, r.maxDepth), s = Fd(o.paths, o.rows, r.maxDistinct, r.dateConfidenceThreshold), i = o.paths.length * o.rows.length, l = s.reduce((u, f) => u + f.nullCount, 0), a = i > 0 ? Math.round(l / i * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
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
        nullPercentage: a,
        analysisTimeMs: d
      }
    };
  }
  function Ed(e, t) {
    return y.useMemo(() => Us(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  function kd({ open: e, onClose: t, columns: n, onSave: r, theme: o, data: s, socket: i }) {
    const [l, a] = y.useState(n), [d, u] = y.useState(null), [f, g] = y.useState([]), [p, h] = y.useState(false), [m, v] = y.useState(false), [x, _] = y.useState(null), [C, j] = y.useState(null), M = y.useRef(false), w = y.useRef(() => Promise.resolve()), $ = y.useRef(n), R = y.useMemo(() => JSON.stringify(n), [
      n
    ]), F = y.useMemo(() => JSON.stringify(l) !== R, [
      l,
      R
    ]);
    y.useEffect(() => {
      e && (a(n), $.current = n, u(n.length > 0 ? n[0].path : null), M.current = false, j(null), _(null));
    }, [
      e,
      n
    ]), y.useEffect(() => {
      e && !M.current && (M.current = true, w.current());
    }, [
      e
    ]);
    const A = y.useCallback(async () => {
      h(true), j(null), _(null);
      try {
        const S = s.oid;
        if (!S) return;
        const T = await i.getState(S);
        if ((T == null ? void 0 : T.val) === null || (T == null ? void 0 : T.val) === void 0) return;
        let N;
        const H = T.val;
        if (typeof H == "string") try {
          const X = JSON.parse(H);
          N = Array.isArray(X) ? X : [
            X
          ];
        } catch {
          return;
        }
        else if (Array.isArray(H)) N = H;
        else if (typeof H == "object" && H !== null) N = [
          H
        ];
        else return;
        const se = s.tableMaxDepth || 10, Q = Us(N, {
          maxDepth: se
        });
        if (Q.meta.maxDepth > se) {
          const X = b.t("json_table_depth_warning").replace("{{actual}}", String(Q.meta.maxDepth)).replace("{{configured}}", String(se));
          _(X);
        }
        g(Q.columns);
        const xe = new Map($.current.map((X) => [
          X.path,
          X
        ])), ge = new Set(Q.columns.map((X) => X.path)), O = $.current.filter((X) => ge.has(X.path)), ce = Q.columns.filter((X) => !xe.has(X.path)).map((X) => ({
          path: X.path,
          visible: true,
          headerName: X.path.split(".").pop() || X.path,
          sortable: "auto",
          filterable: "auto"
        })), te = [
          ...O,
          ...ce
        ];
        a(te), $.current = te, u((X) => X === null && te.length > 0 ? te[0].path : X);
      } catch (S) {
        const T = S instanceof Error ? S.message : "Failed to discover columns";
        j(T);
      } finally {
        h(false);
      }
    }, [
      s,
      i
    ]);
    y.useEffect(() => {
      w.current = A;
    }, [
      A
    ]), y.useEffect(() => {
      $.current = l;
    }, [
      l
    ]);
    const P = y.useCallback((S) => {
      a((T) => T.map((N) => N.path === S.path ? S : N));
    }, []), q = y.useCallback((S) => {
      a(S);
    }, []), k = y.useCallback(() => {
      r(l), t();
    }, [
      l,
      r,
      t
    ]), W = y.useCallback((S, T) => {
      if (T === "backdropClick" && F) {
        v(true);
        return;
      }
      t();
    }, [
      F,
      t
    ]), J = y.useMemo(() => d ? l.find((S) => S.path === d) : null, [
      d,
      l
    ]), U = y.useMemo(() => d ? f.find((S) => S.path === d) : void 0, [
      d,
      f
    ]), E = y.useMemo(() => "json-table-column-editor-title", []);
    return c.jsxs(xi, {
      theme: o,
      children: [
        c.jsxs(Kr, {
          open: e,
          onClose: W,
          maxWidth: "lg",
          fullWidth: true,
          "aria-labelledby": E,
          slotProps: {
            paper: {
              sx: {
                height: "80vh",
                maxHeight: "900px"
              }
            }
          },
          children: [
            c.jsx(Xr, {
              sx: {
                py: 1.5,
                px: 2.5
              },
              id: E,
              children: c.jsxs(L, {
                sx: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [
                  c.jsx(D, {
                    variant: "h6",
                    children: b.t("json_table_column_editor_title")
                  }),
                  c.jsx(Re, {
                    onClick: () => W(),
                    size: "small",
                    sx: {
                      color: "text.secondary"
                    },
                    "aria-label": b.t("close"),
                    children: c.jsx(sr, {})
                  })
                ]
              })
            }),
            c.jsxs(Qr, {
              dividers: true,
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              },
              children: [
                x && c.jsx(Zn, {
                  severity: "warning",
                  onClose: () => _(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: x
                }),
                C && c.jsx(Zn, {
                  severity: "error",
                  onClose: () => j(null),
                  sx: {
                    mx: 2,
                    mt: 2
                  },
                  children: C
                }),
                c.jsxs(L, {
                  sx: {
                    display: "flex",
                    flex: 1,
                    overflow: "hidden"
                  },
                  children: [
                    c.jsx(L, {
                      sx: {
                        width: "40%",
                        minWidth: 280,
                        borderRight: 1,
                        borderColor: "divider",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: c.jsx(xu, {
                        columns: l,
                        discoveredColumns: f,
                        selectedPath: d,
                        onSelect: u,
                        onChange: q,
                        onRefresh: A,
                        loading: p
                      })
                    }),
                    c.jsx(L, {
                      sx: {
                        width: "60%",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden"
                      },
                      children: J ? c.jsx(hd, {
                        column: J,
                        discoveredColumn: U,
                        onChange: P,
                        globalSorting: s.tableSorting,
                        globalFiltering: s.tableFiltering
                      }) : c.jsx(L, {
                        sx: {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%"
                        },
                        children: c.jsx(D, {
                          variant: "body2",
                          color: "text.secondary",
                          children: l.length > 0 ? b.t("json_table_select_column") : b.t("json_table_no_columns")
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            c.jsxs(io, {
              sx: {
                px: 2.5,
                py: 1.5
              },
              children: [
                c.jsx(lt, {
                  onClick: () => W(),
                  children: b.t("cancel")
                }),
                c.jsx(lt, {
                  variant: "contained",
                  onClick: k,
                  disabled: !F,
                  children: b.t("save")
                })
              ]
            })
          ]
        }),
        c.jsx(ac, {
          open: m,
          autoHideDuration: 3e3,
          onClose: () => v(false),
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: c.jsx(Zn, {
            severity: "warning",
            onClose: () => v(false),
            children: b.t("json_table_unsaved_changes")
          })
        })
      ]
    });
  }
  function Od(e, t, n, r) {
    const o = e.name || "columnConfig", s = r.context.theme, [i, l] = y.useState(false), a = y.useMemo(() => Bs(t[o]), [
      t,
      o
    ]), d = a.filter((v) => v.visible).length, u = a.length, f = a.some((v) => v.format), g = a.some((v) => v.cellStyle && v.cellStyle.length > 0), p = y.useCallback((v) => {
      const x = JSON.stringify(v), _ = `b64:${bu(x)}`;
      n({
        [o]: _
      });
    }, [
      o,
      n
    ]), h = y.useCallback(() => {
      l(true);
    }, []), m = y.useCallback(() => {
      l(false);
    }, []);
    return c.jsxs(L, {
      sx: {
        mt: 1,
        width: "100%"
      },
      children: [
        c.jsx(lt, {
          variant: "outlined",
          startIcon: c.jsx(mu, {}),
          onClick: h,
          fullWidth: true,
          sx: {
            textTransform: "none"
          },
          "aria-label": b.t("json_table_configure_columns"),
          "aria-haspopup": "dialog",
          children: b.t("json_table_configure_columns")
        }),
        u > 0 && c.jsxs(D, {
          variant: "caption",
          color: "primary.main",
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
            b.t("json_table_columns_visible"),
            f && ` \xB7 ${b.t("json_table_has_formatting")}`,
            g && ` \xB7 ${b.t("json_table_has_styling")}`
          ]
        }),
        c.jsx(kd, {
          open: i,
          onClose: m,
          columns: a,
          onSave: p,
          theme: s,
          data: t,
          socket: r.context.socket
        })
      ]
    });
  }
  const Nd = () => [
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ke, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Od
    },
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ke, {
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
      component: () => c.jsx(Ke, {
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
      component: () => c.jsx(Ke, {
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
      component: () => c.jsx(Ke, {
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
      component: () => c.jsx(Ke, {
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
      component: () => c.jsx(Ke, {
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
    xt({
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
      component: () => c.jsx(Ke, {
        dividerText: "json_table_header_style"
      })
    },
    xt({
      name: "tableHeaderBgColor",
      label: "json_table_header_bg_color"
    }),
    xt({
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
      component: () => c.jsx(Ke, {})
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
    xt({
      name: "headerBorderColor",
      label: "json_table_header_border_color",
      noGradient: true
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ke, {
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
    xt({
      name: "verticalCellBorderColor",
      label: "vertical_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowCellBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ke, {})
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
    xt({
      name: "horizontalCellBorderColor",
      label: "horizontal_cell_border_color",
      noGradient: true,
      hidden: "!data.tableShowRowBorders"
    }),
    {
      label: "",
      type: "custom",
      component: () => c.jsx(Ke, {
        dividerText: "json_table_cell_style"
      })
    },
    xt({
      name: "evenRowColor",
      label: "json_table_even_row_color"
    }),
    xt({
      name: "oddRowColor",
      label: "json_table_odd_row_color"
    })
  ];
  function Ct(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ue(e, t) {
    return (n) => {
      t.setState((r) => ({
        ...r,
        [e]: Ct(n, r[e])
      }));
    };
  }
  function gr(e) {
    return e instanceof Function;
  }
  function Ld(e) {
    return Array.isArray(e) && e.every((t) => typeof t == "number");
  }
  function Hd(e, t) {
    const n = [], r = (o) => {
      o.forEach((s) => {
        n.push(s);
        const i = t(s);
        i != null && i.length && r(i);
      });
    };
    return r(e), n;
  }
  function B(e, t, n) {
    let r = [], o;
    return (s) => {
      let i;
      n.key && n.debug && (i = Date.now());
      const l = e(s);
      if (!(l.length !== r.length || l.some((u, f) => r[f] !== u))) return o;
      r = l;
      let d;
      if (n.key && n.debug && (d = Date.now()), o = t(...l), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
        const u = Math.round((Date.now() - i) * 100) / 100, f = Math.round((Date.now() - d) * 100) / 100, g = f / 16, p = (h, m) => {
          for (h = String(h); h.length < m; ) h = " " + h;
          return h;
        };
        console.info(`%c\u23F1 ${p(f, 5)} /${p(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return o;
    };
  }
  function V(e, t, n, r) {
    return {
      debug: () => {
        var o;
        return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
      },
      key: false,
      onChange: r
    };
  }
  function Bd(e, t, n, r) {
    const o = () => {
      var i;
      return (i = s.getValue()) != null ? i : e.options.renderFallbackValue;
    }, s = {
      id: `${t.id}_${n.id}`,
      row: t,
      column: n,
      getValue: () => t.getValue(r),
      renderValue: o,
      getContext: B(() => [
        e,
        n,
        t,
        s
      ], (i, l, a, d) => ({
        table: i,
        column: l,
        row: a,
        cell: d,
        getValue: d.getValue,
        renderValue: d.renderValue
      }), V(e.options, "debugCells"))
    };
    return e._features.forEach((i) => {
      i.createCell == null || i.createCell(s, n, t, e);
    }, {}), s;
  }
  function Vd(e, t, n, r) {
    var o, s;
    const l = {
      ...e._getDefaultColumnDef(),
      ...t
    }, a = l.accessorKey;
    let d = (o = (s = l.id) != null ? s : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? o : typeof l.header == "string" ? l.header : void 0, u;
    if (l.accessorFn ? u = l.accessorFn : a && (a.includes(".") ? u = (g) => {
      let p = g;
      for (const m of a.split(".")) {
        var h;
        p = (h = p) == null ? void 0 : h[m];
      }
      return p;
    } : u = (g) => g[l.accessorKey]), !d) throw new Error();
    let f = {
      id: `${String(d)}`,
      accessorFn: u,
      parent: r,
      depth: n,
      columnDef: l,
      columns: [],
      getFlatColumns: B(() => [
        true
      ], () => {
        var g;
        return [
          f,
          ...(g = f.columns) == null ? void 0 : g.flatMap((p) => p.getFlatColumns())
        ];
      }, V(e.options, "debugColumns")),
      getLeafColumns: B(() => [
        e._getOrderColumnsFn()
      ], (g) => {
        var p;
        if ((p = f.columns) != null && p.length) {
          let h = f.columns.flatMap((m) => m.getLeafColumns());
          return g(h);
        }
        return [
          f
        ];
      }, V(e.options, "debugColumns"))
    };
    for (const g of e._features) g.createColumn == null || g.createColumn(f, e);
    return f;
  }
  const Pe = "debugHeaders";
  function is(e, t, n) {
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
        const i = [], l = (a) => {
          a.subHeaders && a.subHeaders.length && a.subHeaders.map(l), i.push(a);
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
  const Wd = {
    createTable: (e) => {
      e.getHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => {
        var s, i;
        const l = (s = r == null ? void 0 : r.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? s : [], a = (i = o == null ? void 0 : o.map((f) => n.find((g) => g.id === f)).filter(Boolean)) != null ? i : [], d = n.filter((f) => !(r != null && r.includes(f.id)) && !(o != null && o.includes(f.id)));
        return Kn(t, [
          ...l,
          ...d,
          ...a
        ], e);
      }, V(e.options, Pe)), e.getCenterHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r, o) => (n = n.filter((s) => !(r != null && r.includes(s.id)) && !(o != null && o.includes(s.id))), Kn(t, n, e, "center")), V(e.options, Pe)), e.getLeftHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Kn(t, s, e, "left");
      }, V(e.options, Pe)), e.getRightHeaderGroups = B(() => [
        e.getAllColumns(),
        e.getVisibleLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n, r) => {
        var o;
        const s = (o = r == null ? void 0 : r.map((i) => n.find((l) => l.id === i)).filter(Boolean)) != null ? o : [];
        return Kn(t, s, e, "right");
      }, V(e.options, Pe)), e.getFooterGroups = B(() => [
        e.getHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Pe)), e.getLeftFooterGroups = B(() => [
        e.getLeftHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Pe)), e.getCenterFooterGroups = B(() => [
        e.getCenterHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Pe)), e.getRightFooterGroups = B(() => [
        e.getRightHeaderGroups()
      ], (t) => [
        ...t
      ].reverse(), V(e.options, Pe)), e.getFlatHeaders = B(() => [
        e.getHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Pe)), e.getLeftFlatHeaders = B(() => [
        e.getLeftHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Pe)), e.getCenterFlatHeaders = B(() => [
        e.getCenterHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Pe)), e.getRightFlatHeaders = B(() => [
        e.getRightHeaderGroups()
      ], (t) => t.map((n) => n.headers).flat(), V(e.options, Pe)), e.getCenterLeafHeaders = B(() => [
        e.getCenterFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), V(e.options, Pe)), e.getLeftLeafHeaders = B(() => [
        e.getLeftFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), V(e.options, Pe)), e.getRightLeafHeaders = B(() => [
        e.getRightFlatHeaders()
      ], (t) => t.filter((n) => {
        var r;
        return !((r = n.subHeaders) != null && r.length);
      }), V(e.options, Pe)), e.getLeafHeaders = B(() => [
        e.getLeftHeaderGroups(),
        e.getCenterHeaderGroups(),
        e.getRightHeaderGroups()
      ], (t, n, r) => {
        var o, s, i, l, a, d;
        return [
          ...(o = (s = t[0]) == null ? void 0 : s.headers) != null ? o : [],
          ...(i = (l = n[0]) == null ? void 0 : l.headers) != null ? i : [],
          ...(a = (d = r[0]) == null ? void 0 : d.headers) != null ? a : []
        ].map((u) => u.getLeafHeaders()).flat();
      }, V(e.options, Pe));
    }
  };
  function Kn(e, t, n, r) {
    var o, s;
    let i = 0;
    const l = function(g, p) {
      p === void 0 && (p = 1), i = Math.max(i, p), g.filter((h) => h.getIsVisible()).forEach((h) => {
        var m;
        (m = h.columns) != null && m.length && l(h.columns, p + 1);
      }, 0);
    };
    l(e);
    let a = [];
    const d = (g, p) => {
      const h = {
        depth: p,
        id: [
          r,
          `${p}`
        ].filter(Boolean).join("_"),
        headers: []
      }, m = [];
      g.forEach((v) => {
        const x = [
          ...m
        ].reverse()[0], _ = v.column.depth === h.depth;
        let C, j = false;
        if (_ && v.column.parent ? C = v.column.parent : (C = v.column, j = true), x && (x == null ? void 0 : x.column) === C) x.subHeaders.push(v);
        else {
          const M = is(n, C, {
            id: [
              r,
              p,
              C.id,
              v == null ? void 0 : v.id
            ].filter(Boolean).join("_"),
            isPlaceholder: j,
            placeholderId: j ? `${m.filter((w) => w.column === C).length}` : void 0,
            depth: p,
            index: m.length
          });
          M.subHeaders.push(v), m.push(M);
        }
        h.headers.push(v), v.headerGroup = h;
      }), a.push(h), p > 0 && d(m, p - 1);
    }, u = t.map((g, p) => is(n, g, {
      depth: i,
      index: p
    }));
    d(u, i - 1), a.reverse();
    const f = (g) => g.filter((h) => h.column.getIsVisible()).map((h) => {
      let m = 0, v = 0, x = [
        0
      ];
      h.subHeaders && h.subHeaders.length ? (x = [], f(h.subHeaders).forEach((C) => {
        let { colSpan: j, rowSpan: M } = C;
        m += j, x.push(M);
      })) : m = 1;
      const _ = Math.min(...x);
      return v = v + _, h.colSpan = m, h.rowSpan = v, {
        colSpan: m,
        rowSpan: v
      };
    });
    return f((o = (s = a[0]) == null ? void 0 : s.headers) != null ? o : []), a;
  }
  const ao = (e, t, n, r, o, s, i) => {
    let l = {
      id: t,
      index: r,
      original: n,
      depth: o,
      parentId: i,
      _valuesCache: {},
      _uniqueValuesCache: {},
      getValue: (a) => {
        if (l._valuesCache.hasOwnProperty(a)) return l._valuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return l._valuesCache[a] = d.accessorFn(l.original, r), l._valuesCache[a];
      },
      getUniqueValues: (a) => {
        if (l._uniqueValuesCache.hasOwnProperty(a)) return l._uniqueValuesCache[a];
        const d = e.getColumn(a);
        if (d != null && d.accessorFn) return d.columnDef.getUniqueValues ? (l._uniqueValuesCache[a] = d.columnDef.getUniqueValues(l.original, r), l._uniqueValuesCache[a]) : (l._uniqueValuesCache[a] = [
          l.getValue(a)
        ], l._uniqueValuesCache[a]);
      },
      renderValue: (a) => {
        var d;
        return (d = l.getValue(a)) != null ? d : e.options.renderFallbackValue;
      },
      subRows: [],
      getLeafRows: () => Hd(l.subRows, (a) => a.subRows),
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
      getAllCells: B(() => [
        e.getAllLeafColumns()
      ], (a) => a.map((d) => Bd(e, l, d, d.id)), V(e.options, "debugRows")),
      _getAllCellsByColumnId: B(() => [
        l.getAllCells()
      ], (a) => a.reduce((d, u) => (d[u.column.id] = u, d), {}), V(e.options, "debugRows"))
    };
    for (let a = 0; a < e._features.length; a++) {
      const d = e._features[a];
      d == null || d.createRow == null || d.createRow(l, e);
    }
    return l;
  }, Gd = {
    createColumn: (e, t) => {
      e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
        if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
      };
    }
  }, qs = (e, t, n) => {
    var r, o;
    const s = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
    return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(s));
  };
  qs.autoRemove = (e) => tt(e);
  const Ys = (e, t, n) => {
    var r;
    return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
  };
  Ys.autoRemove = (e) => tt(e);
  const Js = (e, t, n) => {
    var r;
    return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
  };
  Js.autoRemove = (e) => tt(e);
  const Ks = (e, t, n) => {
    var r;
    return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
  };
  Ks.autoRemove = (e) => tt(e);
  const Xs = (e, t, n) => !n.some((r) => {
    var o;
    return !((o = e.getValue(t)) != null && o.includes(r));
  });
  Xs.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const Qs = (e, t, n) => n.some((r) => {
    var o;
    return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
  });
  Qs.autoRemove = (e) => tt(e) || !(e != null && e.length);
  const Zs = (e, t, n) => e.getValue(t) === n;
  Zs.autoRemove = (e) => tt(e);
  const ei = (e, t, n) => e.getValue(t) == n;
  ei.autoRemove = (e) => tt(e);
  const co = (e, t, n) => {
    let [r, o] = n;
    const s = e.getValue(t);
    return s >= r && s <= o;
  };
  co.resolveFilterValue = (e) => {
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
  co.autoRemove = (e) => tt(e) || tt(e[0]) && tt(e[1]);
  const pt = {
    includesString: qs,
    includesStringSensitive: Ys,
    equalsString: Js,
    arrIncludes: Ks,
    arrIncludesAll: Xs,
    arrIncludesSome: Qs,
    equals: Zs,
    weakEquals: ei,
    inNumberRange: co
  };
  function tt(e) {
    return e == null || e === "";
  }
  const Ud = {
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
        const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
        return typeof r == "string" ? pt.includesString : typeof r == "number" ? pt.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? pt.equals : Array.isArray(r) ? pt.arrIncludes : pt.weakEquals;
      }, e.getFilterFn = () => {
        var n, r;
        return gr(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : pt[e.columnDef.filterFn];
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
          const o = e.getFilterFn(), s = r == null ? void 0 : r.find((u) => u.id === e.id), i = Ct(n, s ? s.value : void 0);
          if (ls(o, i, e)) {
            var l;
            return (l = r == null ? void 0 : r.filter((u) => u.id !== e.id)) != null ? l : [];
          }
          const a = {
            id: e.id,
            value: i
          };
          if (s) {
            var d;
            return (d = r == null ? void 0 : r.map((u) => u.id === e.id ? a : u)) != null ? d : [];
          }
          return r != null && r.length ? [
            ...r,
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
        const n = e.getAllLeafColumns(), r = (o) => {
          var s;
          return (s = Ct(t, o)) == null ? void 0 : s.filter((i) => {
            const l = n.find((a) => a.id === i.id);
            if (l) {
              const a = l.getFilterFn();
              if (ls(a, i.value, l)) return false;
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
  function ls(e, t, n) {
    return (e && e.autoRemove ? e.autoRemove(t, n) : false) || typeof t > "u" || typeof t == "string" && !t;
  }
  const qd = (e, t, n) => n.reduce((r, o) => {
    const s = o.getValue(e);
    return r + (typeof s == "number" ? s : 0);
  }, 0), Yd = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r > s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, Jd = (e, t, n) => {
    let r;
    return n.forEach((o) => {
      const s = o.getValue(e);
      s != null && (r < s || r === void 0 && s >= s) && (r = s);
    }), r;
  }, Kd = (e, t, n) => {
    let r, o;
    return n.forEach((s) => {
      const i = s.getValue(e);
      i != null && (r === void 0 ? i >= i && (r = o = i) : (r > i && (r = i), o < i && (o = i)));
    }), [
      r,
      o
    ];
  }, Xd = (e, t) => {
    let n = 0, r = 0;
    if (t.forEach((o) => {
      let s = o.getValue(e);
      s != null && (s = +s) >= s && (++n, r += s);
    }), n) return r / n;
  }, Qd = (e, t) => {
    if (!t.length) return;
    const n = t.map((s) => s.getValue(e));
    if (!Ld(n)) return;
    if (n.length === 1) return n[0];
    const r = Math.floor(n.length / 2), o = n.sort((s, i) => s - i);
    return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
  }, Zd = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), ep = (e, t) => new Set(t.map((n) => n.getValue(e))).size, tp = (e, t) => t.length, _r = {
    sum: qd,
    min: Yd,
    max: Jd,
    extent: Kd,
    mean: Xd,
    median: Qd,
    unique: Zd,
    uniqueCount: ep,
    count: tp
  }, np = {
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
        if (typeof r == "number") return _r.sum;
        if (Object.prototype.toString.call(r) === "[object Date]") return _r.extent;
      }, e.getAggregationFn = () => {
        var n, r;
        if (!e) throw new Error();
        return gr(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : _r[e.columnDef.aggregationFn];
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
  function rp(e, t, n) {
    if (!(t != null && t.length) || !n) return e;
    const r = e.filter((s) => !t.includes(s.id));
    return n === "remove" ? r : [
      ...t.map((s) => e.find((i) => i.id === s)).filter(Boolean),
      ...r
    ];
  }
  const op = {
    getInitialState: (e) => ({
      columnOrder: [],
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnOrderChange: Ue("columnOrder", e)
    }),
    createColumn: (e, t) => {
      e.getIndex = B((n) => [
        Sn(t, n)
      ], (n) => n.findIndex((r) => r.id === e.id), V(t.options, "debugColumns")), e.getIsFirstColumn = (n) => {
        var r;
        return ((r = Sn(t, n)[0]) == null ? void 0 : r.id) === e.id;
      }, e.getIsLastColumn = (n) => {
        var r;
        const o = Sn(t, n);
        return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
      };
    },
    createTable: (e) => {
      e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
        var n;
        e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
      }, e._getOrderColumnsFn = B(() => [
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
            const a = i.shift(), d = l.findIndex((u) => u.id === a);
            d > -1 && s.push(l.splice(d, 1)[0]);
          }
          s = [
            ...s,
            ...l
          ];
        }
        return rp(s, n, r);
      }, V(e.options, "debugTable"));
    }
  }, wr = () => ({
    left: [],
    right: []
  }), sp = {
    getInitialState: (e) => ({
      columnPinning: wr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnPinningChange: Ue("columnPinning", e)
    }),
    createColumn: (e, t) => {
      e.pin = (n) => {
        const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
        t.setColumnPinning((o) => {
          var s, i;
          if (n === "right") {
            var l, a;
            return {
              left: ((l = o == null ? void 0 : o.left) != null ? l : []).filter((f) => !(r != null && r.includes(f))),
              right: [
                ...((a = o == null ? void 0 : o.right) != null ? a : []).filter((f) => !(r != null && r.includes(f))),
                ...r
              ]
            };
          }
          if (n === "left") {
            var d, u;
            return {
              left: [
                ...((d = o == null ? void 0 : o.left) != null ? d : []).filter((f) => !(r != null && r.includes(f))),
                ...r
              ],
              right: ((u = o == null ? void 0 : o.right) != null ? u : []).filter((f) => !(r != null && r.includes(f)))
            };
          }
          return {
            left: ((s = o == null ? void 0 : o.left) != null ? s : []).filter((f) => !(r != null && r.includes(f))),
            right: ((i = o == null ? void 0 : o.right) != null ? i : []).filter((f) => !(r != null && r.includes(f)))
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
      e.getCenterVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left,
        t.getState().columnPinning.right
      ], (n, r, o) => {
        const s = [
          ...r ?? [],
          ...o ?? []
        ];
        return n.filter((i) => !s.includes(i.column.id));
      }, V(t.options, "debugRows")), e.getLeftVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.left
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "left"
      })), V(t.options, "debugRows")), e.getRightVisibleCells = B(() => [
        e._getAllVisibleCells(),
        t.getState().columnPinning.right
      ], (n, r) => (r ?? []).map((s) => n.find((i) => i.column.id === s)).filter(Boolean).map((s) => ({
        ...s,
        position: "right"
      })), V(t.options, "debugRows"));
    },
    createTable: (e) => {
      e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
        var n, r;
        return e.setColumnPinning(t ? wr() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : wr());
      }, e.getIsSomeColumnsPinned = (t) => {
        var n;
        const r = e.getState().columnPinning;
        if (!t) {
          var o, s;
          return !!((o = r.left) != null && o.length || (s = r.right) != null && s.length);
        }
        return !!((n = r[t]) != null && n.length);
      }, e.getLeftLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), V(e.options, "debugColumns")), e.getRightLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.right
      ], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), V(e.options, "debugColumns")), e.getCenterLeafColumns = B(() => [
        e.getAllLeafColumns(),
        e.getState().columnPinning.left,
        e.getState().columnPinning.right
      ], (t, n, r) => {
        const o = [
          ...n ?? [],
          ...r ?? []
        ];
        return t.filter((s) => !o.includes(s.id));
      }, V(e.options, "debugColumns"));
    }
  };
  function ip(e) {
    return e || (typeof document < "u" ? document : null);
  }
  const Xn = {
    size: 150,
    minSize: 20,
    maxSize: Number.MAX_SAFE_INTEGER
  }, Cr = () => ({
    startOffset: null,
    startSize: null,
    deltaOffset: null,
    deltaPercentage: null,
    isResizingColumn: false,
    columnSizingStart: []
  }), lp = {
    getDefaultColumnDef: () => Xn,
    getInitialState: (e) => ({
      columnSizing: {},
      columnSizingInfo: Cr(),
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
        var n, r, o;
        const s = t.getState().columnSizing[e.id];
        return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Xn.minSize, (r = s ?? e.columnDef.size) != null ? r : Xn.size), (o = e.columnDef.maxSize) != null ? o : Xn.maxSize);
      }, e.getStart = B((n) => [
        n,
        Sn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, s) => o + s.getSize(), 0), V(t.options, "debugColumns")), e.getAfter = B((n) => [
        n,
        Sn(t, n),
        t.getState().columnSizing
      ], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, s) => o + s.getSize(), 0), V(t.options, "debugColumns")), e.resetSize = () => {
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
          if (!r || !o || (s.persist == null || s.persist(), Sr(s) && s.touches && s.touches.length > 1)) return;
          const i = e.getSize(), l = e ? e.getLeafHeaders().map((x) => [
            x.column.id,
            x.column.getSize()
          ]) : [
            [
              r.id,
              r.getSize()
            ]
          ], a = Sr(s) ? Math.round(s.touches[0].clientX) : s.clientX, d = {}, u = (x, _) => {
            typeof _ == "number" && (t.setColumnSizingInfo((C) => {
              var j, M;
              const w = t.options.columnResizeDirection === "rtl" ? -1 : 1, $ = (_ - ((j = C == null ? void 0 : C.startOffset) != null ? j : 0)) * w, R = Math.max($ / ((M = C == null ? void 0 : C.startSize) != null ? M : 0), -0.999999);
              return C.columnSizingStart.forEach((F) => {
                let [A, P] = F;
                d[A] = Math.round(Math.max(P + P * R, 0) * 100) / 100;
              }), {
                ...C,
                deltaOffset: $,
                deltaPercentage: R
              };
            }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((C) => ({
              ...C,
              ...d
            })));
          }, f = (x) => u("move", x), g = (x) => {
            u("end", x), t.setColumnSizingInfo((_) => ({
              ..._,
              isResizingColumn: false,
              startOffset: null,
              startSize: null,
              deltaOffset: null,
              deltaPercentage: null,
              columnSizingStart: []
            }));
          }, p = ip(n), h = {
            moveHandler: (x) => f(x.clientX),
            upHandler: (x) => {
              p == null ? void 0 : p.removeEventListener("mousemove", h.moveHandler), p == null ? void 0 : p.removeEventListener("mouseup", h.upHandler), g(x.clientX);
            }
          }, m = {
            moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), f(x.touches[0].clientX), false),
            upHandler: (x) => {
              var _;
              p == null ? void 0 : p.removeEventListener("touchmove", m.moveHandler), p == null ? void 0 : p.removeEventListener("touchend", m.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((_ = x.touches[0]) == null ? void 0 : _.clientX);
            }
          }, v = ap() ? {
            passive: false
          } : false;
          Sr(s) ? (p == null ? void 0 : p.addEventListener("touchmove", m.moveHandler, v), p == null ? void 0 : p.addEventListener("touchend", m.upHandler, v)) : (p == null ? void 0 : p.addEventListener("mousemove", h.moveHandler, v), p == null ? void 0 : p.addEventListener("mouseup", h.upHandler, v)), t.setColumnSizingInfo((x) => ({
            ...x,
            startOffset: a,
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
        e.setColumnSizingInfo(t ? Cr() : (n = e.initialState.columnSizingInfo) != null ? n : Cr());
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
  let Qn = null;
  function ap() {
    if (typeof Qn == "boolean") return Qn;
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
    return Qn = e, Qn;
  }
  function Sr(e) {
    return e.type === "touchstart";
  }
  const cp = {
    getInitialState: (e) => ({
      columnVisibility: {},
      ...e
    }),
    getDefaultOptions: (e) => ({
      onColumnVisibilityChange: Ue("columnVisibility", e)
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
      e._getAllVisibleCells = B(() => [
        e.getAllCells(),
        t.getState().columnVisibility
      ], (n) => n.filter((r) => r.column.getIsVisible()), V(t.options, "debugRows")), e.getVisibleCells = B(() => [
        e.getLeftVisibleCells(),
        e.getCenterVisibleCells(),
        e.getRightVisibleCells()
      ], (n, r, o) => [
        ...n,
        ...r,
        ...o
      ], V(t.options, "debugRows"));
    },
    createTable: (e) => {
      const t = (n, r) => B(() => [
        r(),
        r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")
      ], (o) => o.filter((s) => s.getIsVisible == null ? void 0 : s.getIsVisible()), V(e.options, "debugColumns"));
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
  function Sn(e, t) {
    return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
  }
  const up = {
    createTable: (e) => {
      e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
        if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
      };
    }
  }, dp = {
    getInitialState: (e) => ({
      globalFilter: void 0,
      ...e
    }),
    getDefaultOptions: (e) => ({
      onGlobalFilterChange: Ue("globalFilter", e),
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
      e.getGlobalAutoFilterFn = () => pt.includesString, e.getGlobalFilterFn = () => {
        var t, n;
        const { globalFilterFn: r } = e.options;
        return gr(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : pt[r];
      }, e.setGlobalFilter = (t) => {
        e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
      }, e.resetGlobalFilter = (t) => {
        e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
      };
    }
  }, pp = {
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
            const { [e.id]: l, ...a } = i;
            return a;
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
  }, Vr = 0, Wr = 10, jr = () => ({
    pageIndex: Vr,
    pageSize: Wr
  }), fp = {
    getInitialState: (e) => ({
      ...e,
      pagination: {
        ...jr(),
        ...e == null ? void 0 : e.pagination
      }
    }),
    getDefaultOptions: (e) => ({
      onPaginationChange: Ue("pagination", e)
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
        const o = (s) => Ct(r, s);
        return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
      }, e.resetPagination = (r) => {
        var o;
        e.setPagination(r ? jr() : (o = e.initialState.pagination) != null ? o : jr());
      }, e.setPageIndex = (r) => {
        e.setPagination((o) => {
          let s = Ct(r, o.pageIndex);
          const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
          return s = Math.max(0, Math.min(s, i)), {
            ...o,
            pageIndex: s
          };
        });
      }, e.resetPageIndex = (r) => {
        var o, s;
        e.setPageIndex(r ? Vr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageIndex) != null ? o : Vr);
      }, e.resetPageSize = (r) => {
        var o, s;
        e.setPageSize(r ? Wr : (o = (s = e.initialState) == null || (s = s.pagination) == null ? void 0 : s.pageSize) != null ? o : Wr);
      }, e.setPageSize = (r) => {
        e.setPagination((o) => {
          const s = Math.max(1, Ct(r, o.pageSize)), i = o.pageSize * o.pageIndex, l = Math.floor(i / s);
          return {
            ...o,
            pageIndex: l,
            pageSize: s
          };
        });
      }, e.setPageCount = (r) => e.setPagination((o) => {
        var s;
        let i = Ct(r, (s = e.options.pageCount) != null ? s : -1);
        return typeof i == "number" && (i = Math.max(-1, i)), {
          ...o,
          pageCount: i
        };
      }), e.getPageOptions = B(() => [
        e.getPageCount()
      ], (r) => {
        let o = [];
        return r && r > 0 && (o = [
          ...new Array(r)
        ].fill(null).map((s, i) => i)), o;
      }, V(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
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
  }, Rr = () => ({
    top: [],
    bottom: []
  }), gp = {
    getInitialState: (e) => ({
      rowPinning: Rr(),
      ...e
    }),
    getDefaultOptions: (e) => ({
      onRowPinningChange: Ue("rowPinning", e)
    }),
    createRow: (e, t) => {
      e.pin = (n, r, o) => {
        const s = r ? e.getLeafRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], i = o ? e.getParentRows().map((a) => {
          let { id: d } = a;
          return d;
        }) : [], l = /* @__PURE__ */ new Set([
          ...i,
          e.id,
          ...s
        ]);
        t.setRowPinning((a) => {
          var d, u;
          if (n === "bottom") {
            var f, g;
            return {
              top: ((f = a == null ? void 0 : a.top) != null ? f : []).filter((m) => !(l != null && l.has(m))),
              bottom: [
                ...((g = a == null ? void 0 : a.bottom) != null ? g : []).filter((m) => !(l != null && l.has(m))),
                ...Array.from(l)
              ]
            };
          }
          if (n === "top") {
            var p, h;
            return {
              top: [
                ...((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(l != null && l.has(m))),
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
        return e.setRowPinning(t ? Rr() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Rr());
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
      }, e.getTopRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top
      ], (t, n) => e._getPinnedRows(t, n, "top"), V(e.options, "debugRows")), e.getBottomRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.bottom
      ], (t, n) => e._getPinnedRows(t, n, "bottom"), V(e.options, "debugRows")), e.getCenterRows = B(() => [
        e.getRowModel().rows,
        e.getState().rowPinning.top,
        e.getState().rowPinning.bottom
      ], (t, n, r) => {
        const o = /* @__PURE__ */ new Set([
          ...n ?? [],
          ...r ?? []
        ]);
        return t.filter((s) => !o.has(s.id));
      }, V(e.options, "debugRows"));
    }
  }, hp = {
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
          Gr(o, s.id, r, true, e);
        }), o;
      }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getCoreRowModel()
      ], (t, n) => Object.keys(t).length ? Mr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getFilteredSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getFilteredRowModel()
      ], (t, n) => Object.keys(t).length ? Mr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getGroupedSelectedRowModel = B(() => [
        e.getState().rowSelection,
        e.getSortedRowModel()
      ], (t, n) => Object.keys(t).length ? Mr(e, n) : {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, V(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
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
          return Gr(l, e.id, n, (i = r == null ? void 0 : r.selectChildren) != null ? i : true, t), l;
        });
      }, e.getIsSelected = () => {
        const { rowSelection: n } = t.getState();
        return uo(e, n);
      }, e.getIsSomeSelected = () => {
        const { rowSelection: n } = t.getState();
        return Ur(e, n) === "some";
      }, e.getIsAllSubRowsSelected = () => {
        const { rowSelection: n } = t.getState();
        return Ur(e, n) === "all";
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
  }, Gr = (e, t, n, r, o) => {
    var s;
    const i = o.getRow(t, true);
    n ? (i.getCanMultiSelect() || Object.keys(e).forEach((l) => delete e[l]), i.getCanSelect() && (e[t] = true)) : delete e[t], r && (s = i.subRows) != null && s.length && i.getCanSelectSubRows() && i.subRows.forEach((l) => Gr(e, l.id, n, r, o));
  };
  function Mr(e, t) {
    const n = e.getState().rowSelection, r = [], o = {}, s = function(i, l) {
      return i.map((a) => {
        var d;
        const u = uo(a, n);
        if (u && (r.push(a), o[a.id] = a), (d = a.subRows) != null && d.length && (a = {
          ...a,
          subRows: s(a.subRows)
        }), u) return a;
      }).filter(Boolean);
    };
    return {
      rows: s(t.rows),
      flatRows: r,
      rowsById: o
    };
  }
  function uo(e, t) {
    var n;
    return (n = t[e.id]) != null ? n : false;
  }
  function Ur(e, t, n) {
    var r;
    if (!((r = e.subRows) != null && r.length)) return false;
    let o = true, s = false;
    return e.subRows.forEach((i) => {
      if (!(s && !o) && (i.getCanSelect() && (uo(i, t) ? s = true : o = false), i.subRows && i.subRows.length)) {
        const l = Ur(i, t);
        l === "all" ? s = true : (l === "some" && (s = true), o = false);
      }
    }), o ? "all" : s ? "some" : false;
  }
  const qr = /([0-9]+)/gm, mp = (e, t, n) => ti(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), yp = (e, t, n) => ti(St(e.getValue(n)), St(t.getValue(n))), bp = (e, t, n) => po(St(e.getValue(n)).toLowerCase(), St(t.getValue(n)).toLowerCase()), vp = (e, t, n) => po(St(e.getValue(n)), St(t.getValue(n))), xp = (e, t, n) => {
    const r = e.getValue(n), o = t.getValue(n);
    return r > o ? 1 : r < o ? -1 : 0;
  }, _p = (e, t, n) => po(e.getValue(n), t.getValue(n));
  function po(e, t) {
    return e === t ? 0 : e > t ? 1 : -1;
  }
  function St(e) {
    return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
  }
  function ti(e, t) {
    const n = e.split(qr).filter(Boolean), r = t.split(qr).filter(Boolean);
    for (; n.length && r.length; ) {
      const o = n.shift(), s = r.shift(), i = parseInt(o, 10), l = parseInt(s, 10), a = [
        i,
        l
      ].sort();
      if (isNaN(a[0])) {
        if (o > s) return 1;
        if (s > o) return -1;
        continue;
      }
      if (isNaN(a[1])) return isNaN(i) ? -1 : 1;
      if (i > l) return 1;
      if (l > i) return -1;
    }
    return n.length - r.length;
  }
  const hn = {
    alphanumeric: mp,
    alphanumericCaseSensitive: yp,
    text: bp,
    textCaseSensitive: vp,
    datetime: xp,
    basic: _p
  }, wp = {
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
        let r = false;
        for (const o of n) {
          const s = o == null ? void 0 : o.getValue(e.id);
          if (Object.prototype.toString.call(s) === "[object Date]") return hn.datetime;
          if (typeof s == "string" && (r = true, s.split(qr).length > 1)) return hn.alphanumeric;
        }
        return r ? hn.text : hn.basic;
      }, e.getAutoSortDir = () => {
        const n = t.getFilteredRowModel().flatRows[0];
        return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
      }, e.getSortingFn = () => {
        var n, r;
        if (!e) throw new Error();
        return gr(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : hn[e.columnDef.sortingFn];
      }, e.toggleSorting = (n, r) => {
        const o = e.getNextSortingOrder(), s = typeof n < "u" && n !== null;
        t.setSorting((i) => {
          const l = i == null ? void 0 : i.find((p) => p.id === e.id), a = i == null ? void 0 : i.findIndex((p) => p.id === e.id);
          let d = [], u, f = s ? n : o === "desc";
          if (i != null && i.length && e.getCanMultiSort() && r ? l ? u = "toggle" : u = "add" : i != null && i.length && a !== i.length - 1 ? u = "replace" : l ? u = "toggle" : u = "replace", u === "toggle" && (s || o || (u = "remove")), u === "add") {
            var g;
            d = [
              ...i,
              {
                id: e.id,
                desc: f
              }
            ], d.splice(0, d.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
          } else u === "toggle" ? d = i.map((p) => p.id === e.id ? {
            ...p,
            desc: f
          } : p) : u === "remove" ? d = i.filter((p) => p.id !== e.id) : d = [
            {
              id: e.id,
              desc: f
            }
          ];
          return d;
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
  }, Cp = [
    Wd,
    cp,
    op,
    sp,
    Gd,
    Ud,
    up,
    dp,
    wp,
    np,
    pp,
    fp,
    gp,
    hp,
    lp
  ];
  function Sp(e) {
    var t, n;
    const r = [
      ...Cp,
      ...(t = e._features) != null ? t : []
    ];
    let o = {
      _features: r
    };
    const s = o._features.reduce((g, p) => Object.assign(g, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(o)), {}), i = (g) => o.options.mergeOptions ? o.options.mergeOptions(s, g) : {
      ...s,
      ...g
    };
    let a = {
      ...{},
      ...(n = e.initialState) != null ? n : {}
    };
    o._features.forEach((g) => {
      var p;
      a = (p = g.getInitialState == null ? void 0 : g.getInitialState(a)) != null ? p : a;
    });
    const d = [];
    let u = false;
    const f = {
      _features: r,
      options: {
        ...s,
        ...e
      },
      initialState: a,
      _queue: (g) => {
        d.push(g), u || (u = true, Promise.resolve().then(() => {
          for (; d.length; ) d.shift()();
          u = false;
        }).catch((p) => setTimeout(() => {
          throw p;
        })));
      },
      reset: () => {
        o.setState(o.initialState);
      },
      setOptions: (g) => {
        const p = Ct(g, o.options);
        o.options = i(p);
      },
      getState: () => o.options.state,
      setState: (g) => {
        o.options.onStateChange == null || o.options.onStateChange(g);
      },
      _getRowId: (g, p, h) => {
        var m;
        return (m = o.options.getRowId == null ? void 0 : o.options.getRowId(g, p, h)) != null ? m : `${h ? [
          h.id,
          p
        ].join(".") : p}`;
      },
      getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
      getRowModel: () => o.getPaginationRowModel(),
      getRow: (g, p) => {
        let h = (p ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
        if (!h && (h = o.getCoreRowModel().rowsById[g], !h)) throw new Error();
        return h;
      },
      _getDefaultColumnDef: B(() => [
        o.options.defaultColumn
      ], (g) => {
        var p;
        return g = (p = g) != null ? p : {}, {
          header: (h) => {
            const m = h.header.column.columnDef;
            return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
          },
          cell: (h) => {
            var m, v;
            return (m = (v = h.renderValue()) == null || v.toString == null ? void 0 : v.toString()) != null ? m : null;
          },
          ...o._features.reduce((h, m) => Object.assign(h, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}),
          ...g
        };
      }, V(e, "debugColumns")),
      _getColumnDefs: () => o.options.columns,
      getAllColumns: B(() => [
        o._getColumnDefs()
      ], (g) => {
        const p = function(h, m, v) {
          return v === void 0 && (v = 0), h.map((x) => {
            const _ = Vd(o, x, v, m), C = x;
            return _.columns = C.columns ? p(C.columns, _, v + 1) : [], _;
          });
        };
        return p(g);
      }, V(e, "debugColumns")),
      getAllFlatColumns: B(() => [
        o.getAllColumns()
      ], (g) => g.flatMap((p) => p.getFlatColumns()), V(e, "debugColumns")),
      _getAllFlatColumnsById: B(() => [
        o.getAllFlatColumns()
      ], (g) => g.reduce((p, h) => (p[h.id] = h, p), {}), V(e, "debugColumns")),
      getAllLeafColumns: B(() => [
        o.getAllColumns(),
        o._getOrderColumnsFn()
      ], (g, p) => {
        let h = g.flatMap((m) => m.getLeafColumns());
        return p(h);
      }, V(e, "debugColumns")),
      getColumn: (g) => o._getAllFlatColumnsById()[g]
    };
    Object.assign(o, f);
    for (let g = 0; g < o._features.length; g++) {
      const p = o._features[g];
      p == null || p.createTable == null || p.createTable(o);
    }
    return o;
  }
  function jp() {
    return (e) => B(() => [
      e.options.data
    ], (t) => {
      const n = {
        rows: [],
        flatRows: [],
        rowsById: {}
      }, r = function(o, s, i) {
        s === void 0 && (s = 0);
        const l = [];
        for (let d = 0; d < o.length; d++) {
          const u = ao(e, e._getRowId(o[d], d, i), o[d], d, s, void 0, i == null ? void 0 : i.id);
          if (n.flatRows.push(u), n.rowsById[u.id] = u, l.push(u), e.options.getSubRows) {
            var a;
            u.originalSubRows = e.options.getSubRows(o[d], d), (a = u.originalSubRows) != null && a.length && (u.subRows = r(u.originalSubRows, s + 1, u));
          }
        }
        return l;
      };
      return n.rows = r(t), n;
    }, V(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
  }
  function Rp(e) {
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
  function Mp(e, t, n) {
    return n.options.filterFromLeafRows ? $p(e, t, n) : Ap(e, t, n);
  }
  function $p(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        var f;
        let p = a[g];
        const h = ao(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
        if (h.columnFilters = p.columnFilters, (f = p.subRows) != null && f.length && d < i) {
          if (h.subRows = l(p.subRows, d + 1), p = h, t(p) && !h.subRows.length) {
            u.push(p), s[p.id] = p, o.push(p);
            continue;
          }
          if (t(p) || h.subRows.length) {
            u.push(p), s[p.id] = p, o.push(p);
            continue;
          }
        } else p = h, t(p) && (u.push(p), s[p.id] = p, o.push(p));
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Ap(e, t, n) {
    var r;
    const o = [], s = {}, i = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, l = function(a, d) {
      d === void 0 && (d = 0);
      const u = [];
      for (let g = 0; g < a.length; g++) {
        let p = a[g];
        if (t(p)) {
          var f;
          if ((f = p.subRows) != null && f.length && d < i) {
            const m = ao(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
            m.subRows = l(p.subRows, d + 1), p = m;
          }
          u.push(p), o.push(p), s[p.id] = p;
        }
      }
      return u;
    };
    return {
      rows: l(e),
      flatRows: o,
      rowsById: s
    };
  }
  function Ip() {
    return (e) => B(() => [
      e.getPreFilteredRowModel(),
      e.getState().columnFilters,
      e.getState().globalFilter
    ], (t, n, r) => {
      if (!t.rows.length || !(n != null && n.length) && !r) {
        for (let g = 0; g < t.flatRows.length; g++) t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
        return t;
      }
      const o = [], s = [];
      (n ?? []).forEach((g) => {
        var p;
        const h = e.getColumn(g.id);
        if (!h) return;
        const m = h.getFilterFn();
        m && o.push({
          id: g.id,
          filterFn: m,
          resolvedValue: (p = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(g.value)) != null ? p : g.value
        });
      });
      const i = (n ?? []).map((g) => g.id), l = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
      r && l && a.length && (i.push("__global__"), a.forEach((g) => {
        var p;
        s.push({
          id: g.id,
          filterFn: l,
          resolvedValue: (p = l.resolveFilterValue == null ? void 0 : l.resolveFilterValue(r)) != null ? p : r
        });
      }));
      let d, u;
      for (let g = 0; g < t.flatRows.length; g++) {
        const p = t.flatRows[g];
        if (p.columnFilters = {}, o.length) for (let h = 0; h < o.length; h++) {
          d = o[h];
          const m = d.id;
          p.columnFilters[m] = d.filterFn(p, m, d.resolvedValue, (v) => {
            p.columnFiltersMeta[m] = v;
          });
        }
        if (s.length) {
          for (let h = 0; h < s.length; h++) {
            u = s[h];
            const m = u.id;
            if (u.filterFn(p, m, u.resolvedValue, (v) => {
              p.columnFiltersMeta[m] = v;
            })) {
              p.columnFilters.__global__ = true;
              break;
            }
          }
          p.columnFilters.__global__ !== true && (p.columnFilters.__global__ = false);
        }
      }
      const f = (g) => {
        for (let p = 0; p < i.length; p++) if (g.columnFilters[i[p]] === false) return false;
        return true;
      };
      return Mp(t.rows, f, e);
    }, V(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
  }
  function Pp(e) {
    return (t) => B(() => [
      t.getState().pagination,
      t.getPrePaginationRowModel(),
      t.options.paginateExpandedRows ? void 0 : t.getState().expanded
    ], (n, r) => {
      if (!r.rows.length) return r;
      const { pageSize: o, pageIndex: s } = n;
      let { rows: i, flatRows: l, rowsById: a } = r;
      const d = o * s, u = d + o;
      i = i.slice(d, u);
      let f;
      t.options.paginateExpandedRows ? f = {
        rows: i,
        flatRows: l,
        rowsById: a
      } : f = Rp({
        rows: i,
        flatRows: l,
        rowsById: a
      }), f.flatRows = [];
      const g = (p) => {
        f.flatRows.push(p), p.subRows.length && p.subRows.forEach(g);
      };
      return f.rows.forEach(g), f;
    }, V(t.options, "debugTable"));
  }
  function Fp() {
    return (e) => B(() => [
      e.getState().sorting,
      e.getPreSortedRowModel()
    ], (t, n) => {
      if (!n.rows.length || !(t != null && t.length)) return n;
      const r = e.getState().sorting, o = [], s = r.filter((a) => {
        var d;
        return (d = e.getColumn(a.id)) == null ? void 0 : d.getCanSort();
      }), i = {};
      s.forEach((a) => {
        const d = e.getColumn(a.id);
        d && (i[a.id] = {
          sortUndefined: d.columnDef.sortUndefined,
          invertSorting: d.columnDef.invertSorting,
          sortingFn: d.getSortingFn()
        });
      });
      const l = (a) => {
        const d = a.map((u) => ({
          ...u
        }));
        return d.sort((u, f) => {
          for (let p = 0; p < s.length; p += 1) {
            var g;
            const h = s[p], m = i[h.id], v = m.sortUndefined, x = (g = h == null ? void 0 : h.desc) != null ? g : false;
            let _ = 0;
            if (v) {
              const C = u.getValue(h.id), j = f.getValue(h.id), M = C === void 0, w = j === void 0;
              if (M || w) {
                if (v === "first") return M ? -1 : 1;
                if (v === "last") return M ? 1 : -1;
                _ = M && w ? 0 : M ? v : -v;
              }
            }
            if (_ === 0 && (_ = m.sortingFn(u, f, h.id)), _ !== 0) return x && (_ *= -1), m.invertSorting && (_ *= -1), _;
          }
          return u.index - f.index;
        }), d.forEach((u) => {
          var f;
          o.push(u), (f = u.subRows) != null && f.length && (u.subRows = l(u.subRows));
        }), d;
      };
      return {
        rows: l(n.rows),
        flatRows: o,
        rowsById: n.rowsById
      };
    }, V(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
  }
  function mn(e, t) {
    return e ? Tp(e) ? y.createElement(e, t) : e : null;
  }
  function Tp(e) {
    return Dp(e) || typeof e == "function" || zp(e);
  }
  function Dp(e) {
    return typeof e == "function" && (() => {
      const t = Object.getPrototypeOf(e);
      return t.prototype && t.prototype.isReactComponent;
    })();
  }
  function zp(e) {
    return typeof e == "object" && typeof e.$$typeof == "symbol" && [
      "react.memo",
      "react.forward_ref"
    ].includes(e.$$typeof.description);
  }
  function Ep(e) {
    const t = {
      state: {},
      onStateChange: () => {
      },
      renderFallbackValue: null,
      ...e
    }, [n] = y.useState(() => ({
      current: Sp(t)
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
  function qt(e, t, n) {
    let r = n.initialDeps ?? [], o, s = true;
    function i() {
      var l, a, d;
      let u;
      n.key && ((l = n.debug) != null && l.call(n)) && (u = Date.now());
      const f = e();
      if (!(f.length !== r.length || f.some((h, m) => r[m] !== h))) return o;
      r = f;
      let p;
      if (n.key && ((a = n.debug) != null && a.call(n)) && (p = Date.now()), o = t(...f), n.key && ((d = n.debug) != null && d.call(n))) {
        const h = Math.round((Date.now() - u) * 100) / 100, m = Math.round((Date.now() - p) * 100) / 100, v = m / 16, x = (_, C) => {
          for (_ = String(_); _.length < C; ) _ = " " + _;
          return _;
        };
        console.info(`%c\u23F1 ${x(m, 5)} /${x(h, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * v, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
      }
      return (n == null ? void 0 : n.onChange) && !(s && n.skipInitialOnChange) && n.onChange(o), s = false, o;
    }
    return i.updateDeps = (l) => {
      r = l;
    }, i;
  }
  function as(e, t) {
    if (e === void 0) throw new Error("Unexpected undefined");
    return e;
  }
  const kp = (e, t) => Math.abs(e - t) < 1.01, Op = (e, t, n) => {
    let r;
    return function(...o) {
      e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, o), n);
    };
  }, cs = (e) => {
    const { offsetWidth: t, offsetHeight: n } = e;
    return {
      width: t,
      height: n
    };
  }, Np = (e) => e, Lp = (e) => {
    const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
    for (let o = t; o <= n; o++) r.push(o);
    return r;
  }, Hp = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    const o = (i) => {
      const { width: l, height: a } = i;
      t({
        width: Math.round(l),
        height: Math.round(a)
      });
    };
    if (o(cs(n)), !r.ResizeObserver) return () => {
    };
    const s = new r.ResizeObserver((i) => {
      const l = () => {
        const a = i[0];
        if (a == null ? void 0 : a.borderBoxSize) {
          const d = a.borderBoxSize[0];
          if (d) {
            o({
              width: d.inlineSize,
              height: d.blockSize
            });
            return;
          }
        }
        o(cs(n));
      };
      e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
    });
    return s.observe(n, {
      box: "border-box"
    }), () => {
      s.unobserve(n);
    };
  }, us = {
    passive: true
  }, ds = typeof window > "u" ? true : "onscrollend" in window, Bp = (e, t) => {
    const n = e.scrollElement;
    if (!n) return;
    const r = e.targetWindow;
    if (!r) return;
    let o = 0;
    const s = e.options.useScrollendEvent && ds ? () => {
    } : Op(r, () => {
      t(o, false);
    }, e.options.isScrollingResetDelay), i = (u) => () => {
      const { horizontal: f, isRtl: g } = e.options;
      o = f ? n.scrollLeft * (g && -1 || 1) : n.scrollTop, s(), t(o, u);
    }, l = i(true), a = i(false);
    n.addEventListener("scroll", l, us);
    const d = e.options.useScrollendEvent && ds;
    return d && n.addEventListener("scrollend", a, us), () => {
      n.removeEventListener("scroll", l), d && n.removeEventListener("scrollend", a);
    };
  }, Vp = (e, t, n) => {
    if (t == null ? void 0 : t.borderBoxSize) {
      const r = t.borderBoxSize[0];
      if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
    }
    return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
  }, Wp = (e, { adjustments: t = 0, behavior: n }, r) => {
    var o, s;
    const i = e + t;
    (s = (o = r.scrollElement) == null ? void 0 : o.scrollTo) == null || s.call(o, {
      [r.options.horizontal ? "left" : "top"]: i,
      behavior: n
    });
  };
  class Gp {
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
          getItemKey: Np,
          rangeExtractor: Lp,
          onChange: () => {
          },
          measureElement: Vp,
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
      }, this.maybeNotify = qt(() => (this.calculateRange(), [
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
          const a = s.get(l.lane);
          if (a == null || l.end > a.end ? s.set(l.lane, l) : l.end < a.end && o.set(l.lane, true), o.size === this.options.lanes) break;
        }
        return s.size === this.options.lanes ? Array.from(s.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
      }, this.getMeasurementOptions = qt(() => [
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
      }), this.getMeasurements = qt(() => [
        this.getMeasurementOptions(),
        this.itemSizeCache
      ], ({ count: n, paddingStart: r, scrollMargin: o, getItemKey: s, enabled: i, lanes: l }, a) => {
        if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > n) for (const g of this.laneAssignments.keys()) g >= n && this.laneAssignments.delete(g);
        this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((g) => {
          this.itemSizeCache.set(g.key, g.size);
        }));
        const d = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === n && (this.lanesSettling = false);
        const u = this.measurementsCache.slice(0, d), f = new Array(l).fill(void 0);
        for (let g = 0; g < d; g++) {
          const p = u[g];
          p && (f[p.lane] = g);
        }
        for (let g = d; g < n; g++) {
          const p = s(g), h = this.laneAssignments.get(g);
          let m, v;
          if (h !== void 0 && this.options.lanes > 1) {
            m = h;
            const j = f[m], M = j !== void 0 ? u[j] : void 0;
            v = M ? M.end + this.options.gap : r + o;
          } else {
            const j = this.options.lanes === 1 ? u[g - 1] : this.getFurthestMeasurement(u, g);
            v = j ? j.end + this.options.gap : r + o, m = j ? j.lane : g % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(g, m);
          }
          const x = a.get(p), _ = typeof x == "number" ? x : this.options.estimateSize(g), C = v + _;
          u[g] = {
            index: g,
            start: v,
            size: _,
            end: C,
            key: p,
            lane: m
          }, f[m] = g;
        }
        return this.measurementsCache = u, u;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.calculateRange = qt(() => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ], (n, r, o, s) => this.range = n.length > 0 && r > 0 ? Up({
        measurements: n,
        outerSize: r,
        scrollOffset: o,
        lanes: s
      }) : null, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualIndexes = qt(() => {
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
      }, this.getVirtualItems = qt(() => [
        this.getVirtualIndexes(),
        this.getMeasurements()
      ], (n, r) => {
        const o = [];
        for (let s = 0, i = n.length; s < i; s++) {
          const l = n[s], a = r[l];
          o.push(a);
        }
        return o;
      }, {
        key: false,
        debug: () => this.options.debug
      }), this.getVirtualItemForOffset = (n) => {
        const r = this.getMeasurements();
        if (r.length !== 0) return as(r[ni(0, r.length - 1, (o) => as(r[o]).start, n)]);
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
        const i = 10, l = (d) => {
          if (!this.targetWindow) return;
          const u = this.getOffsetForIndex(n, d);
          if (!u) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          const [f, g] = u;
          this._scrollToOffset(f, {
            adjustments: void 0,
            behavior: o
          }), this.targetWindow.requestAnimationFrame(() => {
            const p = () => {
              if (this.currentScrollToIndex !== n) return;
              const h = this.getScrollOffset(), m = this.getOffsetForIndex(n, g);
              if (!m) {
                console.warn("Failed to get offset for index:", n);
                return;
              }
              kp(m[0], h) || a(g);
            };
            this.isDynamicMode() ? this.targetWindow.requestAnimationFrame(p) : p();
          });
        }, a = (d) => {
          this.targetWindow && this.currentScrollToIndex === n && (s++, s < i ? this.targetWindow.requestAnimationFrame(() => l(d)) : console.warn(`Failed to scroll to index ${n} after ${i} attempts.`));
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
  const ni = (e, t, n, r) => {
    for (; e <= t; ) {
      const o = (e + t) / 2 | 0, s = n(o);
      if (s < r) e = o + 1;
      else if (s > r) t = o - 1;
      else return o;
    }
    return e > 0 ? e - 1 : 0;
  };
  function Up({ measurements: e, outerSize: t, scrollOffset: n, lanes: r }) {
    const o = e.length - 1, s = (a) => e[a].start;
    if (e.length <= r) return {
      startIndex: 0,
      endIndex: o
    };
    let i = ni(0, o, s, n), l = i;
    if (r === 1) for (; l < o && e[l].end < n + t; ) l++;
    else if (r > 1) {
      const a = Array(r).fill(0);
      for (; l < o && a.some((u) => u < n + t); ) {
        const u = e[l];
        a[u.lane] = u.end, l++;
      }
      const d = Array(r).fill(n + t);
      for (; i >= 0 && d.some((u) => u >= n); ) {
        const u = e[i];
        d[u.lane] = u.start, i--;
      }
      i = Math.max(0, i - i % r), l = Math.min(o, l + (r - 1 - l % r));
    }
    return {
      startIndex: i,
      endIndex: l
    };
  }
  const ps = typeof document < "u" ? y.useLayoutEffect : y.useEffect;
  function qp({ useFlushSync: e = true, ...t }) {
    const n = y.useReducer(() => ({}), {})[1], r = {
      ...t,
      onChange: (s, i) => {
        var l;
        e && i ? _i.flushSync(n) : n(), (l = t.onChange) == null || l.call(t, s, i);
      }
    }, [o] = y.useState(() => new Gp(r));
    return o.setOptions(r), ps(() => o._didMount(), []), ps(() => o._willUpdate()), o;
  }
  function Yp(e) {
    return qp({
      observeElementRect: Hp,
      observeElementOffset: Bp,
      scrollToFn: Wp,
      ...e
    });
  }
  function Jp(e, t) {
    var _a2, _b;
    let n = false, r = e != null ? typeof e == "object" ? (n = true, JSON.stringify(e)) : String(e) : "";
    if (t == null ? void 0 : t.format) try {
      switch (t.format.type) {
        case "number":
          (typeof e == "number" || typeof e == "string" && !isNaN(Number(e))) && (r = Vs(Number(e), {
            decimals: t.format.numberDecimals,
            prefix: t.format.numberPrefix,
            suffix: t.format.numberSuffix,
            thousands: t.format.numberThousandsSeparator
          }));
          break;
        case "date":
          r = lo(e, t.format.dateFormat, t.format.dateInputFormat);
          break;
        case "boolean":
          r = Or(e, t.format.booleanTrue, t.format.booleanFalse);
          break;
        case "string":
          r = Ws(String(r), t.format);
          break;
      }
    } catch {
    }
    if (!t) return {
      displayValue: r,
      textSx: {},
      bgSx: {}
    };
    const o = !t.cellStyleMode || t.cellStyleMode === "first-match", s = ((_a2 = t.format) == null ? void 0 : _a2.type) === "date" ? ju(e, t.format.dateInputFormat) : e, i = {}, l = {};
    if (t.cellStyle && t.cellStyle.length > 0) {
      for (const a of t.cellStyle) if (a.logic && nd(a.logic, s)) {
        if (a.backgroundColor && !("background" in i) && !("backgroundColor" in i)) {
          const d = Ot(a.backgroundColor);
          d ? i.background = d : i.backgroundColor = a.backgroundColor;
        }
        if (a.textColor && !("color" in l) && !("background" in l)) {
          const d = Ot(a.textColor);
          d ? (l.background = d, l.backgroundClip = "text", l.WebkitBackgroundClip = "text", l.color = "transparent") : l.color = a.textColor;
        }
        if (a.fontWeight && !l.fontWeight && (l.fontWeight = a.fontWeight), a.fontStyle && !l.fontStyle && (l.fontStyle = a.fontStyle), o) break;
      }
    }
    return ((_b = t.format) == null ? void 0 : _b.type) === "string" && (t.format.stringFontWeight === "bold" && !l.fontWeight && (l.fontWeight = "bold"), t.format.stringFontStyle === "italic" && !l.fontStyle && (l.fontStyle = "italic"), t.format.stringFontSize && !l.fontSize && (l.fontSize = `${t.format.stringFontSize}px`), t.format.stringTextColor && !("color" in l) && !("background" in l) && (l.color = t.format.stringTextColor)), {
      displayValue: r,
      textSx: l,
      bgSx: i,
      isTruncated: n
    };
  }
  function fs({ value: e, config: t, valueSize: n }) {
    const { displayValue: r, textSx: o, bgSx: s, isTruncated: i } = y.useMemo(() => Jp(e, t), [
      e,
      t
    ]);
    return c.jsxs(L, {
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
        c.jsx(D, {
          variant: "body2",
          component: L,
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
        i && c.jsx(mt, {
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
  function gs(e) {
    return typeof e == "function" ? e() : e;
  }
  function Yt(e, t, n = true) {
    const [r, o] = y.useState(() => {
      if (!n) return gs(t);
      try {
        const i = localStorage.getItem(e);
        if (i !== null) return JSON.parse(i);
      } catch {
      }
      return gs(t);
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
  function hs(e) {
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
  function Kp(e) {
    const { widgetId: t, columnConfig: n, tableAutoSize: r, tableRowSelection: o, tablePageSize: s, tablePageSizeOptions: i, tablePagination: l, tableFiltering: a, tableSorting: d, tableQuickFilter: u, gridRowsLength: f } = e, g = y.useRef([]), p = y.useRef([]), h = y.useRef(""), m = y.useRef(d), v = y.useRef(a), x = y.useRef(u), [_, C] = Yt(`jtc_sorting_${t}`, [], d);
    y.useEffect(() => {
      d ? !m.current && g.current.length > 0 && C(g.current) : C((N) => (N.length > 0 && (g.current = N), [])), m.current = d;
    }, [
      d,
      C
    ]);
    const [j, M] = Yt(`jtc_filters_${t}`, [], a);
    y.useEffect(() => {
      a ? !v.current && p.current.length > 0 && M(p.current) : M((N) => (N.length > 0 && (p.current = N), [])), v.current = a;
    }, [
      a,
      M
    ]);
    const [w, $] = Yt(`jtc_global_filter_${t}`, "", u);
    y.useEffect(() => {
      u ? !x.current && h.current && $(h.current) : $((N) => (N && (h.current = N), "")), x.current = u;
    }, [
      u,
      $
    ]);
    const [R, F] = y.useState({}), [A, P] = Yt(`jtc_col_sizes_${t}`, () => {
      const N = {};
      return n.forEach((H) => {
        H.width && (N[H.path] = H.width);
      }), o === true && (N.__select__ = 48), N;
    }, !r), q = y.useMemo(() => Number(s) || 25, [
      s
    ]), [k, W] = Yt(`jtc_pagination_${t}`, {
      pageIndex: 0,
      pageSize: q
    });
    y.useEffect(() => {
      W((N) => N.pageSize === q ? N : {
        pageIndex: 0,
        pageSize: q
      });
    }, [
      q,
      W
    ]);
    const J = y.useMemo(() => l === false ? {
      pageIndex: 0,
      pageSize: Math.max(f, 1)
    } : k, [
      l,
      f,
      k
    ]), U = y.useMemo(() => hs(i), [
      i
    ]), [E, S] = Yt(`jtc_visibility_${t}`, {}), T = y.useCallback(() => {
      S({});
    }, [
      S
    ]);
    return {
      sorting: _,
      columnFilters: j,
      globalFilter: w,
      rowSelection: R,
      columnSizing: A,
      pagination: k,
      effectivePagination: J,
      columnVisibility: E,
      setSorting: C,
      setColumnFilters: M,
      setGlobalFilter: $,
      setRowSelection: F,
      setColumnSizing: P,
      setPagination: W,
      setColumnVisibility: S,
      pageSizeOptions: U,
      parsePageSizeOptions: hs,
      showAllColumns: T
    };
  }
  const Xp = [
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
  ], Qp = [
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
  ], Zp = [
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
  ], ef = [
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
  ], tf = [
    {
      value: "true",
      label: "json_table_filter_boolean_true"
    },
    {
      value: "false",
      label: "json_table_filter_boolean_false"
    }
  ];
  function nf(e) {
    switch (e) {
      case "number":
      case "date":
      case "boolean":
        return "equals";
      default:
        return "contains";
    }
  }
  function rf(e) {
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
  function of({ open: e, onClose: t, onApply: n, currentValue: r, columnId: o, columnType: s }) {
    const i = on(), l = Va(i.breakpoints.down("sm")), a = y.useMemo(() => s === "number" || s === "date" || s === "boolean" || s === "string" ? s : "string", [
      s
    ]), d = y.useMemo(() => {
      switch (a) {
        case "number":
          return Qp;
        case "date":
          return Zp;
        case "boolean":
          return ef;
        default:
          return Xp;
      }
    }, [
      a
    ]), u = y.useMemo(() => {
      const R = nf(a);
      if (r == null) return {
        operator: R,
        value: ""
      };
      if (typeof r == "object" && r !== null && "operator" in r) {
        const F = r;
        return d.some((P) => P.value === F.operator) ? F : {
          operator: R,
          value: F.value
        };
      }
      return typeof r == "string" || typeof r == "number" || typeof r == "boolean" ? {
        operator: R,
        value: r
      } : {
        operator: R,
        value: JSON.stringify(r)
      };
    }, [
      r,
      a,
      d
    ]), [f, g] = y.useState(u.operator), [p, h] = y.useState(typeof u.value == "boolean" ? String(u.value) : u.value), m = y.useMemo(() => r != null, [
      r
    ]);
    y.useEffect(() => {
      e && (g(u.operator), h(typeof u.value == "boolean" ? String(u.value) : u.value));
    }, [
      u,
      e
    ]);
    const v = ![
      "isEmpty",
      "isNotEmpty"
    ].includes(f), x = y.useCallback(() => {
      if (!v) {
        n({
          operator: f,
          value: ""
        });
        return;
      }
      if (a === "boolean") {
        n({
          operator: f,
          value: p === "true"
        });
        return;
      }
      const R = typeof p == "string" ? p.trim() : String(p).trim();
      if (R === "") n(void 0);
      else {
        const F = a === "number" ? Number(R) : R;
        n({
          operator: f,
          value: F
        });
      }
    }, [
      v,
      a,
      f,
      p,
      n
    ]), _ = y.useCallback(() => {
      n(void 0);
    }, [
      n
    ]), C = y.useCallback((R) => {
      R.key === "Enter" && !R.shiftKey && (R.preventDefault(), x());
    }, [
      x
    ]), j = y.useCallback((R) => {
      g(R), ([
        "isEmpty",
        "isNotEmpty"
      ].includes(R) || a !== "boolean" && (p === "true" || p === "false")) && h("");
    }, [
      p,
      a
    ]), M = o.split(".").pop() || o, w = `filter-dialog-title-${o}`, $ = `filter-dialog-description-${o}`;
    return c.jsxs(Kr, {
      open: e,
      onClose: t,
      maxWidth: "sm",
      fullWidth: true,
      fullScreen: l,
      "aria-labelledby": w,
      "aria-describedby": $,
      children: [
        c.jsx(Xr, {
          id: w,
          children: c.jsxs(L, {
            sx: {
              display: "flex",
              alignItems: "center",
              gap: 1
            },
            children: [
              b.t("json_table_filter_for_column").replace("{column}", M),
              m && c.jsx(mt, {
                label: b.t("json_table_filter_active"),
                size: "small",
                color: "primary",
                variant: "outlined"
              })
            ]
          })
        }),
        c.jsxs(Qr, {
          children: [
            c.jsx(D, {
              id: $,
              variant: "body2",
              color: "text.secondary",
              sx: {
                mb: 2,
                mt: 1
              },
              children: b.t("json_table_filter_dialog_description")
            }),
            c.jsxs(L, {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              onKeyDown: C,
              children: [
                c.jsxs(ft, {
                  fullWidth: true,
                  children: [
                    c.jsx(gt, {
                      id: `filter-operator-label-${o}`,
                      children: b.t("json_table_filter_operator")
                    }),
                    c.jsx(it, {
                      value: f,
                      label: b.t("json_table_filter_operator"),
                      labelId: `filter-operator-label-${o}`,
                      onChange: (R) => j(R.target.value),
                      children: d.map((R) => c.jsx(ie, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "boolean" && c.jsxs(ft, {
                  fullWidth: true,
                  children: [
                    c.jsx(gt, {
                      id: `filter-value-label-${o}`,
                      children: b.t("json_table_filter_value")
                    }),
                    c.jsx(it, {
                      value: p === "true" || p === "false" ? p : "",
                      label: b.t("json_table_filter_value"),
                      labelId: `filter-value-label-${o}`,
                      onChange: (R) => h(R.target.value),
                      children: tf.map((R) => c.jsx(ie, {
                        value: R.value,
                        children: b.t(R.label)
                      }, R.value))
                    })
                  ]
                }),
                v && a === "date" && c.jsx(je, {
                  label: b.t("json_table_filter_value"),
                  value: rf(p),
                  onChange: (R) => h(R.target.value),
                  type: "date",
                  fullWidth: true,
                  autoFocus: true,
                  InputLabelProps: {
                    shrink: true
                  }
                }),
                v && a === "number" && c.jsx(je, {
                  label: b.t("json_table_filter_value"),
                  value: p,
                  onChange: (R) => h(R.target.value),
                  type: "number",
                  fullWidth: true,
                  autoFocus: true
                }),
                v && a === "string" && c.jsx(je, {
                  label: b.t("json_table_filter_value"),
                  value: p,
                  onChange: (R) => h(R.target.value),
                  type: "text",
                  fullWidth: true,
                  autoFocus: true
                }),
                !v && c.jsx(D, {
                  variant: "body2",
                  color: "text.secondary",
                  sx: {
                    fontStyle: "italic"
                  },
                  children: b.t("json_table_filter_no_value_needed")
                })
              ]
            })
          ]
        }),
        c.jsxs(io, {
          sx: {
            px: 3,
            pb: 2
          },
          children: [
            m && c.jsx(lt, {
              onClick: _,
              color: "error",
              sx: {
                mr: "auto"
              },
              children: b.t("json_table_filter_clear")
            }),
            c.jsx(lt, {
              onClick: t,
              children: b.t("cancel")
            }),
            c.jsx(lt, {
              variant: "contained",
              onClick: x,
              disabled: v && a === "boolean" && p !== "true" && p !== "false",
              children: b.t("json_table_filter_apply")
            })
          ]
        })
      ]
    });
  }
  function sf({ anchorEl: e, open: t, onClose: n, activeColumn: r, isSorted: o, tableFiltering: s, activeColumnFilter: i, onSetSorting: l, onClearSorting: a, onShowAllColumns: d, hasHiddenColumns: u }) {
    var _a2, _b, _c2, _d2, _e2, _f;
    const [f, g] = y.useState(false), p = ((_a2 = r == null ? void 0 : r.getCanSort) == null ? void 0 : _a2.call(r)) === true, h = s && ((_b = r == null ? void 0 : r.getCanFilter) == null ? void 0 : _b.call(r)) === true, m = ((_c2 = r == null ? void 0 : r.getCanHide) == null ? void 0 : _c2.call(r)) === true, v = i != null;
    if (!(p || h || m)) return null;
    const _ = () => {
      r && l([
        {
          id: r.id,
          desc: false
        }
      ]), n();
    }, C = () => {
      r && l([
        {
          id: r.id,
          desc: true
        }
      ]), n();
    }, j = () => {
      r && a(r.id), n();
    }, M = () => {
      g(true);
    }, w = () => {
      g(false);
    }, $ = (P) => {
      r == null ? void 0 : r.setFilterValue(P), g(false), n();
    }, R = () => {
      r == null ? void 0 : r.setFilterValue(void 0), n();
    }, F = () => {
      var _a3;
      (_a3 = r == null ? void 0 : r.toggleVisibility) == null ? void 0 : _a3.call(r, false), n();
    }, A = () => {
      d == null ? void 0 : d(), n();
    };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs(wi, {
          anchorEl: e,
          open: t,
          onClose: n,
          children: [
            p && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(ie, {
                  onClick: _,
                  children: [
                    c.jsx(an, {
                      children: c.jsx(Os, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(D, {
                      variant: "body2",
                      children: b.t("json_table_sort_asc")
                    })
                  ]
                }),
                c.jsxs(ie, {
                  onClick: C,
                  children: [
                    c.jsx(an, {
                      children: c.jsx(ks, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(D, {
                      variant: "body2",
                      children: b.t("json_table_sort_desc")
                    })
                  ]
                }),
                o && c.jsx(ie, {
                  onClick: j,
                  children: c.jsx(D, {
                    variant: "body2",
                    children: b.t("json_table_sort_clear")
                  })
                })
              ]
            }),
            p && h && c.jsx(Fr, {}),
            h && c.jsxs(c.Fragment, {
              children: [
                c.jsxs(ie, {
                  onClick: M,
                  children: [
                    c.jsx(an, {
                      children: c.jsx(fu, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(D, {
                      variant: "body2",
                      children: b.t("json_table_set_filter")
                    })
                  ]
                }),
                v && c.jsxs(ie, {
                  onClick: R,
                  children: [
                    c.jsx(an, {
                      children: c.jsx(Ns, {
                        fontSize: "small"
                      })
                    }),
                    c.jsx(D, {
                      variant: "body2",
                      children: b.t("json_table_filter_clear")
                    })
                  ]
                })
              ]
            }),
            (p || h) && m && c.jsx(Fr, {}),
            m && c.jsxs(ie, {
              onClick: F,
              children: [
                c.jsx(an, {
                  children: c.jsx(Hs, {
                    fontSize: "small"
                  })
                }),
                c.jsx(D, {
                  variant: "body2",
                  children: b.t("json_table_hide_column")
                })
              ]
            }),
            u && d && c.jsx(ie, {
              onClick: A,
              children: c.jsx(D, {
                variant: "body2",
                children: b.t("json_table_show_all_columns")
              })
            })
          ]
        }),
        h && r && f && c.jsx(of, {
          open: f,
          onClose: w,
          onApply: $,
          currentValue: (_d2 = r.getFilterValue) == null ? void 0 : _d2.call(r),
          columnId: r.id,
          columnType: (_f = (_e2 = r.columnDef) == null ? void 0 : _e2.meta) == null ? void 0 : _f.columnType
        })
      ]
    });
  }
  const lf = {
    compact: 36,
    standard: 52,
    comfortable: 68
  }, af = {
    compact: 36,
    standard: 56,
    comfortable: 68
  }, cf = (e) => {
    const { children: t, value: n, ...r } = e;
    return c.jsx(ie, {
      ...r,
      value: n,
      children: c.jsx(D, {
        variant: "body2",
        component: "span",
        children: t
      })
    });
  }, uf = () => {
    const e = y.useContext(Ci), { widget: { data: { oidObject: t } }, widget: n, id: r } = e, { data: o } = Si("oid"), s = Ti("oid"), i = on(), l = t == null ? void 0 : t.type, a = l === "string" || l === "mixed" || l === "json", d = y.useMemo(() => {
      if (s == null) return [];
      let I;
      if (typeof s == "string") try {
        I = JSON.parse(s);
      } catch {
        return [];
      }
      else I = s;
      return Array.isArray(I) ? I : typeof I == "object" && I !== null ? [
        I
      ] : [];
    }, [
      s
    ]), u = y.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: f, rows: g, meta: p } = Ed(d, u), h = y.useMemo(() => {
      const I = n.data.tableMaxDepth || 10;
      return p.maxDepth > I ? {
        actual: p.maxDepth,
        configured: I
      } : null;
    }, [
      p.maxDepth,
      n.data.tableMaxDepth
    ]), m = y.useMemo(() => Bs(n.data.columnConfig), [
      n.data.columnConfig
    ]), v = n.data.tableDensity || "standard", x = Number(n.data.tableRowHeight) || lf[v] || 52, _ = Number(n.data.tableHeaderHeight) || af[v] || 56, C = g, j = n.data.tableFiltering === true && n.data.tableColumnMenu !== false, M = y.useMemo(() => gd({
      columnConfig: m,
      analysisColumns: f,
      widgetData: {
        tableSorting: n.data.tableSorting !== false,
        tableFiltering: j,
        tableRowSelection: n.data.tableRowSelection === true,
        tableHiding: n.data.tableHiding !== false
      },
      renderConfiguredCell: (I, z) => c.jsx(fs, {
        value: I,
        config: z,
        valueSize: o.valueSize
      }),
      renderAutoDetectedCell: (I) => c.jsx(fs, {
        value: I,
        valueSize: o.valueSize
      }),
      renderSelectionHeader: (I) => c.jsx(Rn, {
        size: "small",
        indeterminate: I.getIsSomePageRowsSelected(),
        checked: I.getIsAllPageRowsSelected(),
        onChange: I.getToggleAllPageRowsSelectedHandler(),
        "aria-label": "Select all rows"
      }),
      renderSelectionCell: (I) => c.jsx(Rn, {
        size: "small",
        checked: I.getIsSelected(),
        onChange: I.getToggleSelectedHandler(),
        "aria-label": "Select row"
      })
    }), [
      m,
      f,
      n.data.tableSorting,
      j,
      n.data.tableRowSelection,
      n.data.tableHiding,
      o.valueSize
    ]), w = y.useMemo(() => {
      var _a2;
      const I = /* @__PURE__ */ new Map();
      for (const z of m) ((_a2 = z.format) == null ? void 0 : _a2.type) === "date" && I.set(z.path, {
        dateFormat: z.format.dateFormat,
        dateInputFormat: z.format.dateInputFormat
      });
      return I;
    }, [
      m
    ]), $ = y.useCallback((I, z, Z) => {
      const he = typeof Z == "string" ? Z.toLowerCase() : String(Z ?? "").toLowerCase();
      if (!he) return true;
      const Me = I.getValue(z);
      if (Me == null) return false;
      const ke = w.get(z);
      return ke && lo(Me, ke.dateFormat, ke.dateInputFormat).toLowerCase().includes(he) ? true : String(Me).toLowerCase().includes(he);
    }, [
      w
    ]), R = n.data.tableAutoSize === true, { sorting: F, columnFilters: A, globalFilter: P, rowSelection: q, columnSizing: k, pagination: W, effectivePagination: J, columnVisibility: U, setSorting: E, setColumnFilters: S, setGlobalFilter: T, setRowSelection: N, setColumnSizing: H, setPagination: se, setColumnVisibility: Q, pageSizeOptions: xe, showAllColumns: ge } = Kp({
      widgetId: r,
      columnConfig: m,
      tableAutoSize: R,
      tableRowSelection: n.data.tableRowSelection === true,
      tablePageSize: Number(n.data.tablePageSize) || 25,
      tablePageSizeOptions: n.data.tablePageSizeOptions,
      tablePagination: n.data.tablePagination !== false,
      tableFiltering: j,
      tableSorting: n.data.tableSorting !== false,
      tableQuickFilter: n.data.tableQuickFilter === true,
      gridRowsLength: C.length
    }), O = Ep({
      data: C,
      columns: M,
      getCoreRowModel: jp(),
      getSortedRowModel: Fp(),
      getFilteredRowModel: Ip(),
      getPaginationRowModel: Pp(),
      enableMultiSort: n.data.tableSortingMulti ?? false,
      globalFilterFn: $,
      filterFns: ud,
      columnResizeMode: "onChange",
      enableColumnResizing: !R,
      defaultColumn: {
        minSize: 40,
        maxSize: 2e3,
        filterFn: "advanced"
      },
      state: {
        sorting: F,
        columnFilters: A,
        globalFilter: P,
        pagination: J,
        rowSelection: q,
        columnSizing: k,
        columnVisibility: U
      },
      onSortingChange: E,
      onColumnFiltersChange: S,
      onGlobalFilterChange: T,
      onPaginationChange: n.data.tablePagination !== false ? se : void 0,
      onRowSelectionChange: N,
      onColumnSizingChange: H,
      onColumnVisibilityChange: Q,
      enableRowSelection: n.data.tableRowSelection === true,
      enableSorting: n.data.tableSorting !== false,
      enableColumnFilters: j,
      enableGlobalFilter: n.data.tableQuickFilter === true
    }), ce = y.useRef(null), te = y.useRef(null), [X, Ee] = y.useState({}), [Ie, pe] = y.useState(null), Ae = y.useRef(null), [Se, bt] = y.useState(void 0), [Rt, ut] = y.useState(void 0), vt = y.useCallback((I, z) => {
      var _a2;
      Ae.current = I;
      const Z = I.id, he = F.find((ke) => ke.id === Z), Me = (_a2 = A.find((ke) => ke.id === Z)) == null ? void 0 : _a2.value;
      bt(he), ut(Me), pe(z);
    }, [
      F,
      A
    ]), Mt = y.useCallback(() => {
      pe(null);
    }, []);
    y.useEffect(() => {
      if (!R) return;
      const I = te.current;
      if (!I) return;
      const z = new ResizeObserver(() => {
        const Z = I.querySelector("tr[data-row-index]");
        if (!Z) return;
        const he = Z.querySelectorAll("td"), Me = O.getHeaderGroups()[0];
        if (!Me || he.length !== Me.headers.length) return;
        const ke = {};
        Me.headers.forEach((On, Ut) => {
          const go = he[Ut];
          go && (ke[On.id] = go.getBoundingClientRect().width);
        }), Ee(ke);
      });
      return z.observe(I), () => z.disconnect();
    }, [
      R,
      O
    ]);
    const qe = y.useMemo(() => {
      const I = {
        tableLayout: R ? "auto" : "fixed",
        width: "100%"
      };
      if (n.data.tableShowRowBorders === false) I["& .MuiTableCell-root"] = {
        borderBottom: "none"
      };
      else {
        const z = n.data.horizontalCellBorderWidth ?? 1, Z = Nn(n.data.horizontalCellBorderColor);
        I["& .MuiTableCell-root"] = {
          ...I["& .MuiTableCell-root"],
          borderBottom: `${z}px solid`,
          borderBottomColor: Z || "divider"
        };
      }
      if (n.data.tableShowCellBorders === true) {
        const z = n.data.verticalCellBorderWidth ?? 1, Z = Nn(n.data.verticalCellBorderColor);
        I["& .MuiTableCell-root:not(:last-child)"] = {
          borderRight: `${z}px solid`,
          borderRightColor: Z || "divider"
        };
      }
      return I;
    }, [
      n.data.tableShowRowBorders,
      n.data.tableShowCellBorders,
      n.data.horizontalCellBorderWidth,
      n.data.horizontalCellBorderColor,
      n.data.verticalCellBorderWidth,
      n.data.verticalCellBorderColor,
      R
    ]), Be = n.data.tableHeaderBgColor, Ye = n.data.tableHeaderTextColor, Je = n.data.tableHeaderFontSize, $t = y.useMemo(() => ({
      height: _,
      padding: 0,
      whiteSpace: "nowrap",
      ...Ye && {
        color: Ye
      },
      ...Je && {
        fontSize: `${Je}px`
      }
    }), [
      _,
      Ye,
      Je
    ]), At = y.useMemo(() => ({
      ...Ye && {
        color: Ye
      },
      ...Je && {
        fontSize: `${Je}px`
      }
    }), [
      Ye,
      Je
    ]), It = n.data.noCard === true, rt = n.data.headerBorderWidth ?? 0, Pt = Nn(n.data.headerBorderColor), Ft = y.useMemo(() => {
      const I = n.data.tableHeaderElevation ?? 6, z = It ? {
        backgroundColor: "transparent",
        boxShadow: "none"
      } : {
        backgroundColor: "background.paper",
        boxShadow: I > 0 ? i.shadows[I] : "none"
      };
      rt > 0 && (z["&::after"] = {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${rt}px`,
        backgroundColor: Pt || i.palette.divider,
        pointerEvents: "none"
      });
      const Z = Be ? Ot(Be) : null;
      return Z ? {
        ...z,
        background: Z
      } : Be ? {
        ...z,
        backgroundColor: Be
      } : z;
    }, [
      It,
      Be,
      i.shadows,
      i.palette.divider,
      n.data.tableHeaderElevation,
      rt,
      Pt
    ]), sn = y.useMemo(() => {
      const I = {
        flex: 1,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }, z = n.data.borderWidth, Z = n.data.borderStyle || "solid", he = Nn(n.data.borderColor), Me = n.data.borderRadius;
      return z && z > 0 && (I.border = `${z}px ${Z}`, I.borderColor = he || "divider"), Me && (I.borderRadius = Me), I;
    }, [
      n.data.borderWidth,
      n.data.borderStyle,
      n.data.borderColor,
      n.data.borderRadius
    ]), Ve = y.useMemo(() => ({
      flex: 1,
      overflow: "auto"
    }), []), Tt = y.useCallback((I) => R ? X[I.id] ?? "auto" : I.getSize(), [
      R,
      X
    ]), ot = y.useMemo(() => ({
      overflow: "hidden",
      height: x,
      maxHeight: x,
      padding: 0,
      verticalAlign: "middle"
    }), [
      x
    ]), st = n.data.evenRowColor || null, Vt = n.data.oddRowColor || null, Wt = st ? Ot(st) : null, Dn = Vt ? Ot(Vt) : null, Dt = y.useCallback((I) => {
      const z = I % 2 === 0, Z = z ? st : Vt, he = z ? Wt : Dn;
      if (Z) return he ? {
        background: he
      } : {
        backgroundColor: Z
      };
    }, [
      st,
      Vt,
      Wt,
      Dn
    ]), Gt = O.getRowModel().rows, zn = Yp({
      count: Gt.length,
      getScrollElement: () => ce.current,
      estimateSize: () => x,
      overscan: 25,
      scrollPaddingStart: x
    }), hr = n.data.tableVirtualizeThreshold ?? 50, zt = n.data.tablePagination === false && Gt.length > hr ? zn.getVirtualItems() : null, mr = zt == null ? void 0 : zt[0], En = zt == null ? void 0 : zt[zt.length - 1], kn = (mr == null ? void 0 : mr.start) ?? 0, K = En ? zn.getTotalSize() - (En.end ?? 0) : 0;
    return c.jsxs(ji, {
      isValidType: a,
      data: o,
      children: [
        c.jsx(Ri, {
          data: o,
          widget: n
        }),
        a && M.length > 0 ? c.jsxs(L, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            p: Number(n.data.jsonTablePadding) || 0
          },
          children: [
            n.data.tableQuickFilter === true && c.jsx(L, {
              sx: {
                p: 1,
                flexShrink: 0
              },
              children: c.jsx(je, {
                size: "small",
                variant: "outlined",
                fullWidth: true,
                value: P,
                onChange: (I) => T(I.target.value),
                placeholder: b.t("json_table_search_placeholder"),
                slotProps: {
                  input: {
                    startAdornment: c.jsx(Ts, {
                      position: "start",
                      children: c.jsx(Ls, {
                        fontSize: "small"
                      })
                    })
                  }
                }
              })
            }),
            h && c.jsx(Zn, {
              severity: "warning",
              sx: {
                m: 1
              },
              children: c.jsx(D, {
                variant: "body2",
                children: b.t("json_table_depth_warning").replace("{{actual}}", String(h.actual)).replace("{{configured}}", String(h.configured))
              })
            }),
            c.jsx(L, {
              sx: sn,
              children: c.jsx(Pc, {
                ref: ce,
                sx: Ve,
                children: c.jsxs(bc, {
                  size: v === "compact" ? "small" : "medium",
                  sx: qe,
                  children: [
                    c.jsx(Ec, {
                      sx: {
                        position: "sticky",
                        top: 0,
                        zIndex: 2,
                        ...Ft,
                        "& .resize-handle": {
                          opacity: 0
                        },
                        "&:hover .resize-handle": {
                          opacity: 1
                        }
                      },
                      children: O.getHeaderGroups().map((I) => c.jsx(un, {
                        children: I.headers.map((z) => {
                          const Z = z.column.getCanSort(), he = z.column.getIsSorted(), Me = z.column.columnDef.meta, ke = z.column.id === "__select__", On = !R;
                          return c.jsxs(wt, {
                            component: "th",
                            colSpan: z.colSpan,
                            align: (Me == null ? void 0 : Me.align) || "left",
                            padding: ke ? "checkbox" : "normal",
                            sx: {
                              width: Tt(z),
                              minWidth: ke ? 48 : 40,
                              position: "relative",
                              ...$t
                            },
                            children: [
                              ke ? mn(z.column.columnDef.header, z.getContext()) : c.jsxs(L, {
                                sx: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: (Me == null ? void 0 : Me.align) === "right" ? "flex-end" : (Me == null ? void 0 : Me.align) === "center" ? "center" : "space-between",
                                  width: "100%"
                                },
                                children: [
                                  Z ? c.jsx(cu, {
                                    active: he !== false,
                                    direction: he === "desc" ? "desc" : "asc",
                                    onClick: z.column.getToggleSortingHandler(),
                                    children: c.jsx(D, {
                                      variant: "body2",
                                      component: "span",
                                      fontWeight: "medium",
                                      noWrap: true,
                                      sx: At,
                                      children: mn(z.column.columnDef.header, z.getContext())
                                    })
                                  }) : c.jsx(D, {
                                    variant: "body2",
                                    component: "span",
                                    fontWeight: "medium",
                                    noWrap: true,
                                    sx: At,
                                    children: mn(z.column.columnDef.header, z.getContext())
                                  }),
                                  n.data.tableColumnMenu !== false && (z.column.getCanSort() || j && z.column.getCanFilter() || z.column.getCanHide()) && c.jsx(Ne, {
                                    title: b.t("json_table_column_menu"),
                                    children: c.jsx(Re, {
                                      size: "small",
                                      "aria-label": b.t("json_table_column_menu"),
                                      onClick: (Ut) => {
                                        Ut.stopPropagation(), vt(z.column, Ut.currentTarget);
                                      },
                                      sx: {
                                        ml: 0.5,
                                        opacity: 0.6
                                      },
                                      children: c.jsx(gu, {
                                        fontSize: "inherit"
                                      })
                                    })
                                  })
                                ]
                              }),
                              On && z.column.getCanResize() && c.jsx(L, {
                                className: "resize-handle",
                                onMouseDown: z.getResizeHandler(),
                                onTouchStart: z.getResizeHandler(),
                                onClick: (Ut) => Ut.stopPropagation(),
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
                                  opacity: z.column.getIsResizing() ? 1 : 0,
                                  bgcolor: z.column.getIsResizing() ? "primary.main" : "divider",
                                  transition: "opacity 0.15s",
                                  "&:hover": {
                                    opacity: 1,
                                    bgcolor: "primary.light"
                                  }
                                }
                              })
                            ]
                          }, z.id);
                        })
                      }, I.id))
                    }),
                    c.jsx(Cc, {
                      ref: te,
                      children: zt ? c.jsxs(c.Fragment, {
                        children: [
                          kn > 0 && c.jsx(un, {
                            children: c.jsx(wt, {
                              colSpan: M.length,
                              sx: {
                                height: kn,
                                p: 0,
                                border: "none"
                              }
                            })
                          }),
                          zt.map((I) => {
                            const z = Gt[I.index], Z = I.index;
                            return c.jsx(un, {
                              "data-row-index": Z,
                              sx: {
                                height: x,
                                ...Dt(Z)
                              },
                              children: z.getVisibleCells().map((he) => {
                                var _a2;
                                const Me = he.column.id === "__select__";
                                return c.jsx(wt, {
                                  align: ((_a2 = he.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                                  padding: Me ? "checkbox" : "normal",
                                  sx: {
                                    ...ot
                                  },
                                  children: mn(he.column.columnDef.cell, he.getContext())
                                }, he.id);
                              })
                            }, z.id);
                          }),
                          K > 0 && c.jsx(un, {
                            children: c.jsx(wt, {
                              colSpan: M.length,
                              sx: {
                                height: K,
                                p: 0,
                                border: "none"
                              }
                            })
                          })
                        ]
                      }) : Gt.map((I, z) => c.jsx(un, {
                        "data-row-index": z,
                        sx: {
                          height: x,
                          ...Dt(z)
                        },
                        children: I.getVisibleCells().map((Z) => {
                          var _a2;
                          const he = Z.column.id === "__select__";
                          return c.jsx(wt, {
                            align: ((_a2 = Z.column.columnDef.meta) == null ? void 0 : _a2.align) || "left",
                            padding: he ? "checkbox" : "normal",
                            sx: {
                              ...ot
                            },
                            children: mn(Z.column.columnDef.cell, Z.getContext())
                          }, Z.id);
                        })
                      }, I.id))
                    })
                  ]
                })
              })
            }),
            n.data.tablePagination !== false && c.jsx(eu, {
              component: "div",
              count: O.getFilteredRowModel().rows.length,
              page: W.pageIndex,
              rowsPerPage: W.pageSize,
              rowsPerPageOptions: xe,
              onPageChange: (I, z) => se((Z) => ({
                ...Z,
                pageIndex: z
              })),
              onRowsPerPageChange: (I) => se({
                pageIndex: 0,
                pageSize: parseInt(I.target.value, 10)
              }),
              labelRowsPerPage: c.jsx(D, {
                variant: "body2",
                component: "span",
                children: b.t("json_table_rows_per_page")
              }),
              labelDisplayedRows: ({ from: I, to: z, count: Z }) => c.jsx(D, {
                variant: "body2",
                component: "span",
                children: `${I}\u2013${z} / ${Z}`
              }),
              slots: {
                menuItem: cf
              },
              slotProps: {
                select: {
                  renderValue: (I) => c.jsx(D, {
                    variant: "body2",
                    component: "span",
                    children: String(I)
                  })
                }
              }
            }),
            c.jsx(sf, {
              anchorEl: Ie,
              open: !!Ie,
              onClose: Mt,
              activeColumn: Ae.current,
              isSorted: Se !== void 0,
              tableFiltering: j,
              activeColumnFilter: Rt,
              onSetSorting: E,
              onClearSorting: (I) => E((z) => z.filter((Z) => Z.id !== I)),
              onShowAllColumns: ge,
              hasHiddenColumns: Object.keys(U).some((I) => U[I] === false)
            })
          ]
        }) : c.jsx(L, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: c.jsx(D, {
            variant: "body2",
            color: "text.secondary",
            children: l === void 0 ? b.t("json_table_no_oid") : a ? m.length > 0 && M.length === 0 ? b.t("json_table_all_columns_hidden") : b.t("json_table_no_data") : b.t("json_table_invalid_type")
          })
        })
      ]
    });
  }, df = [
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
  Yr = class extends b {
    static createObjectFields() {
      const t = Mi([
        "string",
        "mixed",
        "json"
      ]), n = t.find((r) => r.name === "oid");
      if (n) {
        const r = n, o = r.onChange;
        r.onChange = async (s, i, l, a) => {
          if (!i.oid) {
            for (const d of df) delete i[d];
            o || l(i);
          }
          o && await o(s, i, l, a);
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
              ...bo()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...Yr.createObjectFields(),
              ...Nd()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...bo({
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
      return Yr.getWidgetInfo();
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
      return $i(this.wrapContent(c.jsx(uf, {})), n);
    }
  };
});
export {
  __tla,
  Yr as default
};
